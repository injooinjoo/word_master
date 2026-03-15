import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../constants/theme';

export type FeedbackKind = 'success' | 'error' | 'timeout';

export interface FeedbackBannerProps {
  kind: FeedbackKind;
  message: string;
}

export function FeedbackBanner({ kind, message }: FeedbackBannerProps) {
  const tone =
    kind === 'success'
      ? {
          backgroundColor: Colors.correctLight,
          borderColor: Colors.correct,
          color: Colors.correctDark,
        }
      : kind === 'timeout'
        ? {
            backgroundColor: Colors.warningLight,
            borderColor: Colors.warning,
            color: Colors.warningDark,
          }
        : {
            backgroundColor: Colors.wrongLight,
            borderColor: Colors.wrong,
            color: Colors.wrongDark,
          };

  return (
    <View style={[styles.container, tone]}>
      <Text style={[styles.text, { color: tone.color }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  text: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightBold,
    textAlign: 'center',
  },
});
