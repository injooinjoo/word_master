import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  type ViewStyle,
} from 'react-native';
import { Colors, Elevation, Radius, Spacing, Typography } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  label: string;
  loading?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Button({
  variant = 'primary',
  label,
  loading = false,
  disabled,
  fullWidth = true,
  style,
  ...touchableProps
}: ButtonProps) {
  const typography = useResponsiveTypography();
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled }}
      {...touchableProps}
      activeOpacity={0.85}
      disabled={isDisabled}
      style={[
        styles.base,
        fullWidth && styles.fullWidth,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? Colors.white : Colors.primary} />
      ) : (
        <Text
          style={[
            styles.label,
            { fontSize: typography.sizes.size15 },
            variant === 'primary'
              ? styles.primaryLabel
              : variant === 'secondary'
                ? styles.secondaryLabel
                : styles.ghostLabel,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 50,
    borderRadius: Radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.primary,
    ...Elevation.md,
  },
  secondary: {
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
  },
  ghost: {
    backgroundColor: Colors.surfaceTint,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  disabled: {
    opacity: 0.48,
    shadowOpacity: 0,
    elevation: 0,
  },
  label: {
    fontWeight: Typography.weightBold,
    letterSpacing: 0.15,
  },
  primaryLabel: {
    color: Colors.white,
  },
  secondaryLabel: {
    color: Colors.primaryStrong,
  },
  ghostLabel: {
    color: Colors.textSecondary,
  },
});
