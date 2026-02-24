import React, { useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const BAR_HEIGHT = 5;

/** Colors transition: green → yellow → red as time runs out */
const COLOR_FULL = '#22C55E';
const COLOR_MID = '#FBBF24';
const COLOR_LOW = '#EF4444';

interface TimerBarProps {
  /** Total duration in milliseconds */
  durationMs: number;
  /** Whether the timer is actively running */
  running: boolean;
  /** Called once when the timer reaches zero */
  onTimeUp: () => void;
}

export function TimerBar({ durationMs, running, onTimeUp }: TimerBarProps) {
  const progress = useRef(new Animated.Value(1)).current;
  const animRef = useRef<Animated.CompositeAnimation | null>(null);
  const calledTimeUp = useRef(false);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  // Reset when durationMs changes (new question loaded)
  const reset = useCallback(() => {
    animRef.current?.stop();
    animRef.current = null;
    calledTimeUp.current = false;
    progress.setValue(1);
  }, [progress]);

  useEffect(() => {
    reset();
  }, [durationMs, reset]);

  // Start / pause the animation based on `running`
  useEffect(() => {
    if (!running) {
      animRef.current?.stop();
      animRef.current = null;
      return;
    }

    let currentValue = 1;
    progress.stopAnimation((v) => {
      currentValue = v;
    });

    if (currentValue <= 0) return;

    const remainingMs = currentValue * durationMs;
    const anim = Animated.timing(progress, {
      toValue: 0,
      duration: remainingMs,
      useNativeDriver: false,
    });

    animRef.current = anim;
    anim.start(({ finished }) => {
      if (finished && !calledTimeUp.current) {
        calledTimeUp.current = true;
        onTimeUpRef.current();
      }
    });

    return () => {
      anim.stop();
    };
  }, [running, durationMs, progress]);

  const backgroundColor = progress.interpolate({
    inputRange: [0, 0.3, 0.65, 1],
    outputRange: [COLOR_LOW, COLOR_MID, COLOR_FULL, COLOR_FULL],
  });

  const widthPercent = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.bar, { width: widthPercent, backgroundColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: BAR_HEIGHT,
    backgroundColor: '#F1F5F9',
    width: '100%',
  },
  bar: {
    height: BAR_HEIGHT,
    borderTopRightRadius: BAR_HEIGHT,
    borderBottomRightRadius: BAR_HEIGHT,
  },
});
