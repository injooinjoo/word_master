import { StyleSheet } from 'react-native';
import { Colors, Elevation, Radius, Typography } from '../constants/theme';

export const SharedStyles = StyleSheet.create({
  surfaceCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Elevation.sm,
  },
  sectionTitle: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
    letterSpacing: 0.2,
  },
  subText: {
    fontSize: Typography.size13,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  eyebrow: {
    fontSize: Typography.size11,
    color: Colors.textMuted,
    fontWeight: Typography.weightBold,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
