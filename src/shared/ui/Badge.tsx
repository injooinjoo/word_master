import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

export type BadgeTone = 'difficulty' | 'status';

interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  color?: string;
}

export function Badge({ label, tone = 'difficulty', color }: BadgeProps) {
  const typography = useResponsiveTypography();
  const resolvedColor = color ?? Colors.primary;

  return (
    <View
      style={[
        styles.base,
        tone === 'difficulty' ? styles.difficulty : styles.status,
        { borderColor: `${resolvedColor}40`, backgroundColor: `${resolvedColor}1A` },
      ]}
    >
      <Text style={[styles.text, { color: resolvedColor, fontSize: typography.sizes.size11 }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 28,
    borderRadius: Radius.pill,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    justifyContent: 'center',
  },
  difficulty: {
    minWidth: 64,
    alignItems: 'center',
  },
  status: {
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: Typography.weightBold,
    letterSpacing: 0.2,
  },
});
