import React, { useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const BAR_HEIGHT = 6;

/** Colors transition: green → yellow → red as time runs out */
const COLOR_FULL = '#58CC02';
const COLOR_MID = '#FFC800';
const COLOR_LOW = '#FF4B4B';

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

    // Calculate remaining duration based on current progress value
    // (handles resume after pause if needed, though we don't currently pause mid-timer)
    let currentValue = 1;
    progress.stopAnimation((v) => {
      currentValue = v;
    });

    if (currentValue <= 0) return;

    const remainingMs = currentValue * durationMs;
    const anim = Animated.timing(progress, {
      toValue: 0,
      duration: remainingMs,
      useNativeDriver: false, // width interpolation can't use native driver
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

  // Interpolate bar color: 1→0.5 green→yellow, 0.5→0 yellow→red
  const backgroundColor = progress.interpolate({
    inputRange: [0, 0.35, 0.7, 1],
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
    backgroundColor: '#E5E5E5',
    width: '100%',
  },
  bar: {
    height: BAR_HEIGHT,
    borderTopRightRadius: BAR_HEIGHT / 2,
    borderBottomRightRadius: BAR_HEIGHT / 2,
  },
});
