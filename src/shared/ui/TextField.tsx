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
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputShell, { borderColor, backgroundColor }]}>
        <TextInput
          {...inputProps}
          placeholderTextColor={Colors.textFaint}
          style={[styles.input, style]}
        />
      </View>
      {caption ? <Text style={[styles.caption, { color: captionColor }]}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: Spacing.sm,
    fontSize: Typography.size12,
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
    fontSize: Typography.size15,
    fontWeight: Typography.weightSemiBold,
  },
  caption: {
    marginTop: Spacing.sm,
    fontSize: Typography.size12,
    lineHeight: 18,
    fontWeight: Typography.weightSemiBold,
  },
});
