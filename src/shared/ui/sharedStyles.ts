import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Elevation, Radius, Typography } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

export const SharedStyles = StyleSheet.create({
  surfaceCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Elevation.sm,
  },
});

export function useSharedTextStyles() {
  const typography = useResponsiveTypography();

  return useMemo(
    () =>
      StyleSheet.create({
        sectionTitle: {
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightBold,
          color: Colors.textPrimary,
          letterSpacing: 0.2,
        },
        subText: {
          fontSize: typography.sizes.size13,
          color: Colors.textSecondary,
          fontWeight: Typography.weightMedium,
        },
        eyebrow: {
          fontSize: typography.sizes.size11,
          color: Colors.textMuted,
          fontWeight: Typography.weightBold,
          letterSpacing: 0.8,
          textTransform: 'uppercase',
        },
      }),
    [typography],
  );
}
