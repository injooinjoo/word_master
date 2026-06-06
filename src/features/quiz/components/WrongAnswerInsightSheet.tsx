import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { VocabItem } from '../../../data/models/vocab';
import { Colors, Radius, Spacing, Typography } from '../../../shared/constants/theme';
import { buildInsightCards } from '../lib/insightSelectors';
import { InsightCard } from './InsightCard';

export type AnsweredOutcome = 'correct' | 'wrong' | 'timeout';

export interface WrongAnswerInsightSheetProps {
  vocab: VocabItem;
  outcome: AnsweredOutcome;
  selectedChoice: string | null;
  correctAnswer: string;
  scrollEnabled?: boolean;
}

const OUTCOME_TONE: Record<
  AnsweredOutcome,
  { bg: string; border: string; color: string; glyph: string; label: string }
> = {
  correct: {
    bg: Colors.correctLight,
    border: Colors.correct,
    color: Colors.correctDark,
    glyph: '✓',
    label: '정답!',
  },
  wrong: {
    bg: Colors.wrongLight,
    border: Colors.wrong,
    color: Colors.wrongDark,
    glyph: '✗',
    label: '오답',
  },
  timeout: {
    bg: Colors.warningLight,
    border: Colors.warning,
    color: Colors.warningDark,
    glyph: '⏱',
    label: '시간 초과',
  },
};

export function WrongAnswerInsightSheet({
  vocab,
  outcome,
  selectedChoice,
  correctAnswer,
  scrollEnabled = true,
}: WrongAnswerInsightSheetProps) {
  const tone = OUTCOME_TONE[outcome];
  const cards = useMemo(() => buildInsightCards(vocab), [vocab]);
  const cardNodes = useMemo(
    () => cards.map((spec, i) => <InsightCard key={`${spec.variant}-${i}`} spec={spec} />),
    [cards],
  );
  const showComparison = outcome !== 'correct';

  return (
    <View
      style={[styles.container, !scrollEnabled && styles.staticContainer]}
      accessibilityLabel={`${tone.label} ${vocab.word}, 정답 ${correctAnswer}`}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: tone.bg, borderColor: tone.border },
        ]}
        accessibilityRole="header"
      >
        <View style={[styles.statusIconCircle, { backgroundColor: tone.border }]}>
          <Text style={styles.statusIconText}>{tone.glyph}</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={[styles.outcomeLabel, { color: tone.color }]}>{tone.label}</Text>
          <Text style={styles.word}>{vocab.word}</Text>
          <Text style={styles.meaning}>{vocab.meaning}</Text>
          {showComparison && (
            <View style={styles.compareRow}>
              {selectedChoice ? (
                <Text style={styles.compareWrong}>내 답: {selectedChoice}</Text>
              ) : (
                <Text style={styles.compareWrong}>응답 없음</Text>
              )}
              <Text style={styles.compareArrow}>→</Text>
              <Text style={styles.compareCorrect}>정답: {correctAnswer}</Text>
            </View>
          )}
        </View>
      </View>

      {cards.length > 0 && (
        scrollEnabled ? (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {cardNodes}
          </ScrollView>
        ) : (
          <View style={styles.staticContent}>{cardNodes}</View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: Spacing.md,
  },
  staticContainer: {
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.md,
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    borderWidth: 2,
  },
  statusIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIconText: {
    color: Colors.white,
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  outcomeLabel: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightExtraBold,
    letterSpacing: 0.4,
  },
  word: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  meaning: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  compareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Spacing.xs,
    marginTop: Spacing.sm,
  },
  compareWrong: {
    fontSize: Typography.size12,
    color: Colors.wrongDark,
    fontWeight: Typography.weightSemiBold,
    textDecorationLine: 'line-through',
  },
  compareArrow: {
    fontSize: Typography.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightBold,
  },
  compareCorrect: {
    fontSize: Typography.size12,
    color: Colors.correctDark,
    fontWeight: Typography.weightExtraBold,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    gap: Spacing.md,
    paddingBottom: Spacing.xxl,
  },
  staticContent: {
    gap: Spacing.md,
    paddingBottom: Spacing.lg,
  },
});
