import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

export type FeedbackKind = 'success' | 'error' | 'timeout';

export interface FeedbackBannerProps {
  kind: FeedbackKind;
  message: string;
}

export function FeedbackBanner({ kind, message }: FeedbackBannerProps) {
  const typography = useResponsiveTypography();
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
      <Text
        style={[
          styles.text,
          {
            color: tone.color,
            fontSize: typography.sizes.size15,
            lineHeight: typography.lineHeight(Typography.size15, 22 / Typography.size15),
          },
        ]}
      >
        {message}
      </Text>
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
    fontWeight: Typography.weightBold,
    textAlign: 'center',
  },
});
