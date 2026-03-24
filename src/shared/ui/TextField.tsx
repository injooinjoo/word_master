import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

type TextFieldStatus = 'default' | 'error' | 'success';

export interface TextFieldProps extends TextInputProps {
  label: string;
  caption?: string | null;
  status?: TextFieldStatus;
  containerStyle?: StyleProp<ViewStyle>;
}

export function TextField({
  label,
  caption,
  status = 'default',
  containerStyle,
  style,
  ...inputProps
}: TextFieldProps) {
  const typography = useResponsiveTypography();
  const borderColor =
    status === 'error'
      ? Colors.wrong
      : status === 'success'
        ? Colors.correct
        : Colors.border;
  const backgroundColor =
    status === 'error'
      ? Colors.wrongLight
      : status === 'success'
        ? Colors.correctLight
        : Colors.surfaceTint;
  const captionColor =
    status === 'error'
      ? Colors.wrong
      : status === 'success'
        ? Colors.correct
        : Colors.textMuted;

  return (
    <View style={containerStyle}>
      <Text style={[styles.label, { fontSize: typography.sizes.size12 }]}>{label}</Text>
      <View style={[styles.inputShell, { borderColor, backgroundColor }]}>
        <TextInput
          accessibilityLabel={label}
          {...inputProps}
          placeholderTextColor={Colors.textFaint}
          style={[styles.input, { fontSize: typography.sizes.size15 }, style]}
        />
      </View>
      {caption ? (
        <Text
          style={[
            styles.caption,
            {
              color: captionColor,
              fontSize: typography.sizes.size12,
              lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
            },
          ]}
        >
          {caption}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: Spacing.sm,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
    letterSpacing: 0.2,
  },
  inputShell: {
    borderWidth: 1,
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.lg,
    minHeight: 54,
    justifyContent: 'center',
  },
  input: {
    paddingVertical: Spacing.md,
    color: Colors.textPrimary,
    fontWeight: Typography.weightSemiBold,
  },
  caption: {
    marginTop: Spacing.sm,
    fontWeight: Typography.weightSemiBold,
  },
});
