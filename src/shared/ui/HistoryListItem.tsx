import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../constants/theme';
import { useResponsiveTypography } from './responsiveTypography';

interface HistoryListItemProps {
  index: number;
  word: string;
  meaning?: string;
  answerText: string;
  correct: boolean;
  typeLabel: string;
  typeColor: string;
}

export function HistoryListItem({
  index,
  word,
  meaning,
  answerText,
  correct,
  typeLabel,
  typeColor,
}: HistoryListItemProps) {
  const typography = useResponsiveTypography();
  const accentColor = correct ? Colors.correct : Colors.wrong;

  return (
    <View style={[styles.row, { borderLeftColor: accentColor }]}>
      <View style={styles.left}>
        <View style={[styles.numBadge, { backgroundColor: withAlpha(accentColor, '18') }]}>
          <Text style={[styles.numText, { color: accentColor, fontSize: typography.sizes.size12 }]}>
            {index}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.word, { fontSize: typography.sizes.size15 }]}>{word}</Text>
          {meaning ? (
            <Text
              style={[
                styles.meaning,
                {
                  fontSize: typography.sizes.size13,
                  lineHeight: typography.lineHeight(Typography.size13, 18 / Typography.size13),
                },
              ]}
            >
              {meaning}
            </Text>
          ) : null}
          <Text
            style={[
              styles.answer,
              {
                fontSize: typography.sizes.size12,
                lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
              },
            ]}
          >
            {answerText}
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={[styles.typeTag, { backgroundColor: withAlpha(typeColor, '18') }]}>
          <Text style={[styles.typeText, { color: typeColor, fontSize: typography.sizes.size11 }]}>
            {typeLabel}
          </Text>
        </View>
        <Text style={[styles.icon, { color: accentColor, fontSize: typography.sizes.size18 }]}>
          {correct ? 'O' : 'X'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    minWidth: 0,
  },
  numBadge: {
    minWidth: 28,
    height: 28,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  numText: {
    fontWeight: Typography.weightExtraBold,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  word: {
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  meaning: {
    marginTop: 3,
    color: Colors.textSecondary,
    fontWeight: Typography.weightSemiBold,
  },
  answer: {
    marginTop: 4,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
  },
  right: {
    alignItems: 'flex-end',
    gap: Spacing.xs,
    marginLeft: Spacing.sm,
  },
  typeTag: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  typeText: {
    fontWeight: Typography.weightBold,
  },
  icon: {
    fontWeight: Typography.weightExtraBold,
  },
});
