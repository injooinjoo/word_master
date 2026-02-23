import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { GradeTable } from '../../../shared/constants/gradeTable';
import {
  fetchRanking,
  getRankingUserId,
  isRankingApiConfigured,
  submitRanking,
  type RankingSnapshot,
} from '../../../services/rankingService';
import type { QuizService } from '../../../services/quizService';
import { ALL_QUIZ_TYPES, QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizType, RoundRecord } from '../../../services/quizService';

const PRIMARY = '#1CB0F6';
const ACCENT = '#FF9600';
const CORRECT_GREEN = '#58CC02';
const WRONG_RED = '#FF4B4B';

const TYPE_COLORS: Record<QuizType, string> = {
  e2k: '#1CB0F6',
  k2e: '#FF9600',
  e2e: '#A435F0',
  syn: '#22C55E',
  ant: '#EF4444',
};

const QUIZ_TYPE_SHORT: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
  syn: '동의',
  ant: '반의',
};

interface ResultScreenProps {
  quizService: QuizService;
  onBackToQuiz: () => void;
  onBackToPicker: () => void;
}

export function ResultScreen({ quizService, onBackToQuiz, onBackToPicker }: ResultScreenProps) {
  const summary = quizService.resultSummary;
  const avgRating = summary.compositeRating;
  const localTier = GradeTable.gradeLabel(avgRating);
  const userId = useMemo(() => getRankingUserId(), []);
  const [ranking, setRanking] = useState<RankingSnapshot | null>(null);
  const [rankingLoading, setRankingLoading] = useState(false);
  const [rankingError, setRankingError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadRanking = async () => {
      if (!isRankingApiConfigured()) {
        if (!mounted) return;
        setRanking(null);
        setRankingError('랭킹 서버가 아직 연결되지 않았습니다.');
        return;
      }

      setRankingLoading(true);
      setRankingError(null);
      try {
        const payload = {
          userId,
          ratings: quizService.trackedRatings,
          compositeRating: avgRating,
        };
        const latest = await submitRanking(payload);
        if (!mounted) return;
        setRanking(latest);
      } catch (submitError) {
        try {
          const fallback = await fetchRanking({ userId, compositeRating: avgRating });
          if (!mounted) return;
          setRanking(fallback);
        } catch {
          if (!mounted) return;
          const message =
            submitError instanceof Error ? submitError.message : '랭킹을 불러오지 못했습니다.';
          setRankingError(message);
        }
      } finally {
        if (mounted) setRankingLoading(false);
      }
    };

    loadRanking();
    return () => {
      mounted = false;
    };
  }, [quizService, userId, avgRating]);

  const roundHistory = quizService.roundHistory;
  const roundCorrect = quizService.roundCorrect;
  const roundTotal = quizService.roundTotal;
  const accuracy = roundTotal > 0 ? Math.round((roundCorrect / roundTotal) * 100) : 0;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Round score summary */}
        <View style={styles.roundSummary}>
          <Text style={styles.roundTitle}>라운드 결과</Text>
          <View style={styles.scoreRow}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNumber}>{roundCorrect}</Text>
              <Text style={styles.scoreSlash}>/ {roundTotal}</Text>
            </View>
            <View style={styles.scoreDetail}>
              <Text style={[styles.accuracyText, { color: accuracy >= 70 ? CORRECT_GREEN : accuracy >= 40 ? ACCENT : WRONG_RED }]}>
                정답률 {accuracy}%
              </Text>
              <Text style={styles.scoreSubtext}>
                {accuracy >= 80 ? '훌륭해요!' : accuracy >= 60 ? '잘하고 있어요!' : accuracy >= 40 ? '조금 더 힘내봐요!' : '다시 도전해봐요!'}
              </Text>
            </View>
          </View>
        </View>

        {/* Round history list */}
        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>문제 기록</Text>
          {roundHistory.map((rec: RoundRecord, idx: number) => (
            <View
              key={idx}
              style={[styles.historyRow, { borderLeftColor: rec.correct ? CORRECT_GREEN : WRONG_RED }]}
            >
              <View style={styles.historyLeft}>
                <View style={styles.historyNumBadge}>
                  <Text style={styles.historyNum}>{idx + 1}</Text>
                </View>
                <View style={styles.historyInfo}>
                  <Text style={styles.historyWord}>{rec.word}</Text>
                  <Text style={styles.historyAnswer}>
                    {rec.correct
                      ? rec.correctAnswer
                      : rec.userAnswer
                        ? `${rec.userAnswer} → ${rec.correctAnswer}`
                        : `시간 초과 → ${rec.correctAnswer}`}
                  </Text>
                </View>
              </View>
              <View style={styles.historyRight}>
                <View style={[styles.typeMini, { backgroundColor: TYPE_COLORS[rec.quizType] + '20' }]}>
                  <Text style={[styles.typeMiniText, { color: TYPE_COLORS[rec.quizType] }]}>
                    {QUIZ_TYPE_SHORT[rec.quizType]}
                  </Text>
                </View>
                <Text style={[styles.historyIcon, { color: rec.correct ? CORRECT_GREEN : WRONG_RED }]}>
                  {rec.correct ? 'O' : 'X'}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Rating summary */}
        <View style={styles.ratingSection}>
          <Text style={styles.label}>종합 Rating</Text>
          <Text style={styles.ratingValue}>{avgRating}</Text>
          <Text style={styles.gradeValue}>{ranking?.tierLabel ?? localTier}</Text>

          {/* Per-type rating cards */}
          <View style={styles.typeCardsRow}>
            {ALL_QUIZ_TYPES.map((t) => {
              const typeSummary = summary.byType[t];
              const r = typeSummary.rating;
              const tier = typeSummary.tierLabel;
              const color = TYPE_COLORS[t];
              return (
                <View key={t} style={[styles.typeCard, { borderColor: color + '44' }]}>
                  <Text style={[styles.typeLabel, { color }]}>{QUIZ_TYPE_LABELS[t]}</Text>
                  <Text style={[styles.typeRating, { color }]}>{r}</Text>
                  <Text style={styles.typeTier}>{tier}</Text>
                </View>
              );
            })}
          </View>

          {/* Ranking section */}
          <View style={styles.rankingCard}>
            <Text style={styles.rankingTitle}>나의 랭킹 (종합)</Text>
            {rankingLoading ? (
              <Text style={styles.rankingCaption}>랭킹 정보를 불러오는 중...</Text>
            ) : ranking ? (
              <View style={styles.rankingRow}>
                <View style={styles.rankingItem}>
                  <Text style={styles.rankingNumber}>
                    {ranking.topPercentile < 10
                      ? ranking.topPercentile.toFixed(1)
                      : Math.round(ranking.topPercentile)}
                    %
                  </Text>
                  <Text style={styles.rankingCaption}>상위</Text>
                </View>
                <View style={styles.rankingDivider} />
                <View style={styles.rankingItem}>
                  <Text style={styles.rankingNumber}>{ranking.rank.toLocaleString()}위</Text>
                  <Text style={styles.rankingCaption}>/ {ranking.totalUsers.toLocaleString()}명</Text>
                </View>
              </View>
            ) : (
              <Text style={styles.rankingCaption}>
                {rankingError ?? '랭킹 데이터를 아직 받을 수 없습니다.'}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onBackToQuiz}>
          <Text style={styles.buttonText}>다시 {quizService.roundSize}문제 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={onBackToPicker}>
          <Text style={styles.buttonSecondaryText}>문제 수 다시 선택</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 16 },
  // ── Round summary ──
  roundSummary: {
    paddingTop: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  roundTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: PRIMARY,
  },
  scoreNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: PRIMARY,
  },
  scoreSlash: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    marginTop: -2,
  },
  scoreDetail: {
    alignItems: 'flex-start',
  },
  accuracyText: {
    fontSize: 22,
    fontWeight: '800',
  },
  scoreSubtext: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  // ── History list ──
  historySection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666',
    marginBottom: 10,
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
    borderLeftWidth: 4,
  },
  historyLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  historyNumBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyNum: {
    fontSize: 11,
    fontWeight: '700',
    color: '#666',
  },
  historyInfo: {
    flex: 1,
  },
  historyWord: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  historyAnswer: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  historyRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
  },
  typeMini: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typeMiniText: {
    fontSize: 10,
    fontWeight: '700',
  },
  historyIcon: {
    fontSize: 18,
    fontWeight: '800',
  },
  // ── Rating section ──
  ratingSection: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  label: { fontSize: 16, color: '#666', marginBottom: 8 },
  ratingValue: {
    fontSize: 28,
    fontWeight: '700',
    color: PRIMARY,
    marginBottom: 4,
  },
  gradeValue: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 16 },
  // ── Per-type cards ──
  typeCardsRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    marginBottom: 20,
  },
  typeCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1.5,
    backgroundColor: '#FAFAFA',
  },
  typeLabel: { fontSize: 12, fontWeight: '700', marginBottom: 6, letterSpacing: 0.5 },
  typeRating: { fontSize: 22, fontWeight: '800', marginBottom: 4 },
  typeTier: { fontSize: 11, fontWeight: '600', color: '#666' },
  // ── Ranking card ──
  rankingCard: {
    width: '100%',
    backgroundColor: '#FFFAF0',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFE0B2',
  },
  rankingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: ACCENT,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  rankingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankingItem: { flex: 1, alignItems: 'center' },
  rankingNumber: { fontSize: 24, fontWeight: '800', color: '#333' },
  rankingCaption: { fontSize: 13, color: '#888', marginTop: 4 },
  rankingDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 12,
  },
  footer: { padding: 24, paddingTop: 12, gap: 10 },
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  buttonSecondary: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  buttonSecondaryText: { color: '#666', fontSize: 14, fontWeight: '600' },
});
