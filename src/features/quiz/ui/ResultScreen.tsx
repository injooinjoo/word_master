import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { GradeTable } from '../../../shared/constants/gradeTable';
import { AdIds } from '../../../shared/constants/adIds';
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

const CORRECT_GREEN = '#22C55E';
const WRONG_RED = '#EF4444';

const TYPE_COLORS: Record<QuizType, string> = {
  e2k: '#3B82F6',
  k2e: '#F59E0B',
  e2e: '#8B5CF6',
  syn: '#10B981',
  ant: '#EF4444',
};

const QUIZ_TYPE_SHORT: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
  syn: '동의',
  ant: '반의',
};

// Conditional AdMob
let BannerAdComponent: React.ComponentType<{ unitId: string; size: string }> | null = null;
try {
  const ads = require('react-native-google-mobile-ads');
  if (ads.BannerAd && (Platform.OS === 'android' || Platform.OS === 'ios')) {
    BannerAdComponent = ads.BannerAd;
  }
} catch {
  // Expo Go or missing native module
}

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

  const bannerUnitId = Platform.OS === 'android' ? AdIds.androidBanner : AdIds.iosBanner;

  const accuracyColor = accuracy >= 70 ? CORRECT_GREEN : accuracy >= 40 ? '#F59E0B' : WRONG_RED;
  const encouragement =
    accuracy >= 80
      ? '훌륭해요!'
      : accuracy >= 60
        ? '잘하고 있어요!'
        : accuracy >= 40
          ? '조금 더 힘내봐요!'
          : '다시 도전해봐요!';

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* ── Hero score section ── */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>라운드 결과</Text>

          <View style={styles.scoreRing}>
            <View style={[styles.scoreRingInner, { borderColor: accuracyColor }]}>
              <Text style={[styles.scorePercent, { color: accuracyColor }]}>{accuracy}%</Text>
              <Text style={styles.scoreOf}>{roundCorrect}/{roundTotal}</Text>
            </View>
          </View>

          <Text style={[styles.encouragement, { color: accuracyColor }]}>{encouragement}</Text>
        </View>

        {/* ── Rating overview ── */}
        <View style={styles.ratingOverview}>
          <View style={styles.ratingMain}>
            <Text style={styles.ratingLabel}>종합 Rating</Text>
            <Text style={styles.ratingNumber}>{avgRating}</Text>
            <View style={styles.tierChip}>
              <Text style={styles.tierChipText}>{ranking?.tierLabel ?? localTier}</Text>
            </View>
          </View>
        </View>

        {/* ── Per-type rating cards ── */}
        <View style={styles.typeCardsContainer}>
          {ALL_QUIZ_TYPES.map((t) => {
            const typeSummary = summary.byType[t];
            const r = typeSummary.rating;
            const tier = typeSummary.tierLabel;
            const color = TYPE_COLORS[t];
            const typeAccuracy = typeSummary.attempts > 0
              ? Math.round((typeSummary.correct / typeSummary.attempts) * 100)
              : 0;
            return (
              <View key={t} style={styles.typeCard}>
                <View style={[styles.typeCardAccent, { backgroundColor: color }]} />
                <View style={styles.typeCardContent}>
                  <Text style={[styles.typeCardLabel, { color }]}>{QUIZ_TYPE_LABELS[t]}</Text>
                  <Text style={[styles.typeCardRating, { color }]}>{r}</Text>
                  <Text style={styles.typeCardTier}>{tier}</Text>
                  {typeSummary.attempts > 0 && (
                    <Text style={styles.typeCardAccuracy}>
                      {typeSummary.correct}/{typeSummary.attempts} ({typeAccuracy}%)
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* ── Ranking card ── */}
        <View style={styles.rankingCard}>
          <Text style={styles.rankingTitle}>글로벌 랭킹</Text>
          {rankingLoading ? (
            <Text style={styles.rankingCaption}>랭킹 정보를 불러오는 중...</Text>
          ) : ranking ? (
            <View style={styles.rankingRow}>
              <View style={styles.rankingItem}>
                <Text style={styles.rankingBig}>
                  {ranking.topPercentile < 10
                    ? ranking.topPercentile.toFixed(1)
                    : Math.round(ranking.topPercentile)}%
                </Text>
                <Text style={styles.rankingCaption}>상위</Text>
              </View>
              <View style={styles.rankingDivider} />
              <View style={styles.rankingItem}>
                <Text style={styles.rankingBig}>{ranking.rank.toLocaleString()}위</Text>
                <Text style={styles.rankingCaption}>/ {ranking.totalUsers.toLocaleString()}명</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.rankingCaption}>
              {rankingError ?? '랭킹 데이터를 아직 받을 수 없습니다.'}
            </Text>
          )}
        </View>

        {/* ── History ── */}
        <View style={styles.historySection}>
          <Text style={styles.historySectionTitle}>문제 기록</Text>
          {roundHistory.map((rec: RoundRecord, idx: number) => (
            <View
              key={idx}
              style={[
                styles.historyRow,
                { borderLeftColor: rec.correct ? CORRECT_GREEN : WRONG_RED },
              ]}
            >
              <View style={styles.historyLeft}>
                <View style={[
                  styles.historyNumBadge,
                  { backgroundColor: rec.correct ? CORRECT_GREEN + '15' : WRONG_RED + '15' },
                ]}>
                  <Text style={[
                    styles.historyNum,
                    { color: rec.correct ? CORRECT_GREEN : WRONG_RED },
                  ]}>{idx + 1}</Text>
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
                <View style={[styles.typeMini, { backgroundColor: TYPE_COLORS[rec.quizType] + '14' }]}>
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
      </ScrollView>

      {/* ── Footer buttons ── */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn} onPress={onBackToQuiz} activeOpacity={0.8}>
          <Text style={styles.primaryBtnText}>다시 {quizService.roundSize}문제 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={onBackToPicker} activeOpacity={0.8}>
          <Text style={styles.secondaryBtnText}>문제 수 다시 선택</Text>
        </TouchableOpacity>
      </View>
      {BannerAdComponent && (
        <View style={styles.bannerWrap}>
          <BannerAdComponent unitId={bannerUnitId} size="BANNER" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8FAFB' },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 20 },

  // ── Hero ──
  heroSection: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  heroTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  scoreRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#F8FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  scoreRingInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scorePercent: {
    fontSize: 30,
    fontWeight: '800',
  },
  scoreOf: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9CA3AF',
    marginTop: -2,
  },
  encouragement: {
    fontSize: 16,
    fontWeight: '700',
  },

  // ── Rating overview ──
  ratingOverview: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  ratingMain: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 6,
  },
  ratingNumber: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1A1D26',
    marginBottom: 6,
  },
  tierChip: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 10,
  },
  tierChipText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // ── Type cards ──
  typeCardsContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  typeCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  typeCardAccent: {
    height: 3,
    width: '100%',
  },
  typeCardContent: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  typeCardLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
    marginBottom: 6,
  },
  typeCardRating: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 2,
  },
  typeCardTier: {
    fontSize: 10,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  typeCardAccuracy: {
    fontSize: 10,
    fontWeight: '600',
    color: '#C4C9D4',
    marginTop: 4,
  },

  // ── Ranking card ──
  rankingCard: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  rankingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  rankingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankingItem: { flex: 1, alignItems: 'center' },
  rankingBig: { fontSize: 24, fontWeight: '800', color: '#1A1D26' },
  rankingCaption: { fontSize: 13, color: '#9CA3AF', marginTop: 4, textAlign: 'center' },
  rankingDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#E8ECF0',
    marginHorizontal: 12,
  },

  // ── History ──
  historySection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  historySectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 10,
    paddingHorizontal: 4,
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
    borderLeftWidth: 3,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  historyLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  historyNumBadge: {
    width: 26,
    height: 26,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyNum: {
    fontSize: 11,
    fontWeight: '700',
  },
  historyInfo: {
    flex: 1,
  },
  historyWord: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1D26',
  },
  historyAnswer: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  historyRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
  },
  typeMini: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeMiniText: {
    fontSize: 10,
    fontWeight: '700',
  },
  historyIcon: {
    fontSize: 16,
    fontWeight: '800',
  },

  // ── Footer ──
  footer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  primaryBtn: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryBtn: {
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
  },
  secondaryBtnText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '600',
  },
  bannerWrap: { alignItems: 'center', paddingVertical: 8 },
});
