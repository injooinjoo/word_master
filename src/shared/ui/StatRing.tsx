import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Typography, withAlpha } from '../constants/theme';

interface StatRingProps {
  percent: number;
  numerator: number;
  denominator: number;
  color: string;
}

export function StatRing({ percent, numerator, denominator, color }: StatRingProps) {
  return (
    <View style={[styles.outer, { backgroundColor: withAlpha(color, '12') }]}>
      <View style={[styles.middle, { borderColor: withAlpha(color, '30') }]}>
        <View style={[styles.inner, { borderColor: color }]}>
        <Text style={[styles.percent, { color }]}>{percent}%</Text>
        <Text style={styles.ratio}>{numerator}/{denominator}</Text>
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
    fontSize: Typography.size30,
    fontWeight: Typography.weightExtraBold,
    lineHeight: 34,
  },
  ratio: {
    marginTop: 1,
    fontSize: Typography.size12,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textMuted,
  },
});
