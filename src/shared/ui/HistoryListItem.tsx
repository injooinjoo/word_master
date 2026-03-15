import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../constants/theme';

interface HistoryListItemProps {
  index: number;
  word: string;
  answerText: string;
  correct: boolean;
  typeLabel: string;
  typeColor: string;
}

export function HistoryListItem({
  index,
  word,
  answerText,
  correct,
  typeLabel,
  typeColor,
}: HistoryListItemProps) {
  const accentColor = correct ? Colors.correct : Colors.wrong;

  return (
    <View style={[styles.row, { borderLeftColor: accentColor }]}>
      <View style={styles.left}>
        <View style={[styles.numBadge, { backgroundColor: withAlpha(accentColor, '18') }]}>
          <Text style={[styles.numText, { color: accentColor }]}>{index}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.word}>{word}</Text>
          <Text style={styles.answer}>{answerText}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View style={[styles.typeTag, { backgroundColor: withAlpha(typeColor, '18') }]}>
          <Text style={[styles.typeText, { color: typeColor }]}>{typeLabel}</Text>
        </View>
        <Text style={[styles.icon, { color: accentColor }]}>{correct ? 'O' : 'X'}</Text>
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
    fontSize: Typography.size12,
    fontWeight: Typography.weightExtraBold,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  word: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  answer: {
    marginTop: 3,
    fontSize: Typography.size12,
    color: Colors.textSecondary,
    lineHeight: 18,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
  },
  icon: {
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
  },
});
