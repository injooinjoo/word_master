import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, QuizTypeColors, Radius, Spacing, Typography, withAlpha } from '../constants/theme';

export type ChipType = 'e2k' | 'k2e' | 'e2e' | 'syn' | 'ant';

interface ChipProps {
  label: string;
  type: ChipType;
}

export function Chip({ label, type }: ChipProps) {
  const color = QuizTypeColors[type];
  return (
    <View style={[styles.container, { backgroundColor: withAlpha(color, '1A'), borderColor: withAlpha(color, '40') }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.pill,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm - 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: Radius.pill,
  },
  text: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
    letterSpacing: 0.3,
  },
});
