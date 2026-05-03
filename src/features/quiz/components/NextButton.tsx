import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography } from '../../../shared/constants/theme';
import { Button } from '../../../shared/ui';

export interface NextButtonProps {
  label?: string;
  onPress: () => void;
  isLast?: boolean;
}

export function NextButton({ label, onPress, isLast = false }: NextButtonProps) {
  const text = label ?? (isLast ? '결과 보기 →' : '다음 →');
  return (
    <View style={styles.bar}>
      <View style={styles.buttonWrap}>
        <Button
          variant="primary"
          label={text}
          onPress={onPress}
          accessibilityLabel={isLast ? '결과 화면으로 이동' : '다음 문제로 이동'}
          accessibilityHint="엔터 또는 스페이스 키로도 진행할 수 있습니다"
        />
      </View>
      {Platform.OS === 'web' && (
        <Text style={styles.hint}>Enter / Space</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  buttonWrap: {
    flex: 1,
  },
  hint: {
    fontSize: Typography.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
    letterSpacing: 0.3,
  },
});
