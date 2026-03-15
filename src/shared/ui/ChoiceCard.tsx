import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Colors, Elevation, Radius, Spacing, Typography, withAlpha } from '../constants/theme';

export type ChoiceCardState = 'default' | 'correct' | 'wrong' | 'dimmed';

export interface ChoiceCardProps {
  label: string;
  text: string;
  state?: ChoiceCardState;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function ChoiceCard({
  label,
  text,
  state = 'default',
  selected = false,
  disabled,
  onPress,
  style,
  textStyle,
}: ChoiceCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.78}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        state === 'correct' && styles.correct,
        state === 'wrong' && styles.wrong,
        state === 'dimmed' && styles.dimmed,
        selected && styles.selected,
        style,
      ]}
    >
      <View style={[styles.badge, state !== 'default' && styles.badgeDimmed]}>
        <Text style={styles.badgeText}>{label}</Text>
      </View>
      <Text
        style={[
          styles.text,
          state === 'correct' && styles.correctText,
          state === 'wrong' && styles.wrongText,
          state === 'dimmed' && styles.dimmedText,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.surfaceTint,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    ...Elevation.sm,
  },
  selected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  correct: {
    borderColor: Colors.correct,
    backgroundColor: Colors.correctLight,
    shadowOpacity: 0,
    elevation: 0,
  },
  wrong: {
    borderColor: Colors.wrong,
    backgroundColor: Colors.wrongLight,
    shadowOpacity: 0,
    elevation: 0,
  },
  dimmed: {
    opacity: 0.4,
    shadowOpacity: 0,
    elevation: 0,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    minWidth: 28,
    height: 26,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.pill,
    backgroundColor: Colors.choiceLabelBg,
    borderWidth: 1,
    borderColor: withAlpha(Colors.choiceLabelText, '22'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeDimmed: {
    opacity: 0.45,
  },
  badgeText: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.choiceLabelText,
  },
  text: {
    fontSize: Typography.size18,
    lineHeight: 24,
    textAlign: 'center',
    color: Colors.choiceText,
    width: '100%',
    flexShrink: 1,
    fontWeight: Typography.weightBold,
  },
  correctText: {
    color: Colors.correctDark,
    fontWeight: Typography.weightBold,
  },
  wrongText: {
    color: Colors.wrongDark,
    fontWeight: Typography.weightBold,
  },
  dimmedText: {
    color: Colors.textMuted,
  },
});
