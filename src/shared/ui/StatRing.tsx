import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography, withAlpha } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

interface StatRingProps {
  percent: number;
  numerator: number;
  denominator: number;
  color: string;
}

export function StatRing({ percent, numerator, denominator, color }: StatRingProps) {
  const typography = useResponsiveTypography();
  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={`정확도 ${percent}퍼센트, ${numerator}개 중 ${denominator}개`}
      style={[styles.outer, { backgroundColor: withAlpha(color, '12') }]}
    >
      <View style={[styles.middle, { borderColor: withAlpha(color, '30') }]}>
        <View style={[styles.inner, { borderColor: color }]}>
        <Text
          style={[
            styles.percent,
            {
              color,
              fontSize: typography.sizes.size30,
              lineHeight: typography.lineHeight(Typography.size30, 34 / Typography.size30),
            },
          ]}
        >
          {percent}%
        </Text>
        <Text style={[styles.ratio, { fontSize: typography.sizes.size12 }]}>
          {numerator}/{denominator}
        </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 128,
    height: 128,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 4,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percent: {
    fontWeight: Typography.weightExtraBold,
  },
  ratio: {
    marginTop: 1,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textMuted,
  },
});
