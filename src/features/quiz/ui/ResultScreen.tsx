import type { User } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GradeTable } from '../../../shared/constants/gradeTable';
import { Colors, QuizTypeColors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import { AdIds } from '../../../shared/constants/adIds';
import { BannerAd as BannerAdComponent } from '../../../services/adService';
import {
  fetchLeaderboard,
  fetchPersonalBestScore,
  isScoreSyncAvailable,
  submitScore,
  type LeaderboardEntry,
  type PersonalBestScore,
} from '../../../services/scoreService';
import type { QuizService } from '../../../services/quizService';
import { ALL_QUIZ_TYPES, QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizType } from '../../../services/quizService';
import {
  Badge,
  Button,
  HistoryListItem,
  ResponsiveContainer,
  ScreenCard,
  SharedStyles,
  StatRing,
} from '../../../shared/ui';

const QUIZ_TYPE_SHORT: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
  syn: '동의',
  ant: '반의',
};

interface ResultScreenProps {
  quizService: QuizService;
  user: User;
  adsEnabled: boolean;
  onResume: () => void;
  onSignOut: () => void;
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';

  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');

  return `${y}.${m}.${d} ${hh}:${mm}`;
}

function displayName(email: string | null, userId: string): string {
  if (!email) return `user-${userId.slice(0, 8)}`;
  const [name] = email.split('@');
  if (!name) return `user-${userId.slice(0, 8)}`;
  return name.length > 16 ? `${name.slice(0, 16)}…` : name;
}

export function ResultScreen({
  quizService,
  user,
  adsEnabled,
  onResume,
  onSignOut,
}: ResultScreenProps) {
  const summary = quizService.resultSummary;
  const avgRating = summary.compositeRating;
  const localTier = GradeTable.gradeLabel(avgRating);

  const [syncLoading, setSyncLoading] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [bestScore, setBestScore] = useState<PersonalBestScore | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const roundHistory = quizService.roundHistory;
  const roundCorrect = quizService.roundCorrect;
  const roundTotal = quizService.roundTotal;
  const accuracy = roundTotal > 0 ? Math.round((roundCorrect / roundTotal) * 100) : 0;

  useEffect(() => {
    let mounted = true;

    const syncScore = async () => {
      if (!isScoreSyncAvailable()) {
        if (mounted) {
          setSyncError('Supabase 설정이 없어 점수 동기화를 할 수 없습니다.');
          setLeaderboard([]);
          setBestScore(null);
        }
        return;
      }

      setSyncLoading(true);
      setSyncError(null);

      try {
        await submitScore({
          userId: user.id,
          email: user.email ?? null,
          compositeRating: avgRating,
          ratings: quizService.trackedRatings,
          roundCorrect,
          roundTotal,
        });

        const [best, board] = await Promise.all([
          fetchPersonalBestScore(user.id),
          fetchLeaderboard(10),
        ]);

        if (!mounted) return;
        setBestScore(best);
        setLeaderboard(board);
      } catch (error) {
        if (!mounted) return;
        const message = error instanceof Error ? error.message : '점수 동기화에 실패했습니다.';
        setSyncError(message);
      } finally {
        if (mounted) setSyncLoading(false);
      }
    };

    syncScore();

    return () => {
      mounted = false;
    };
  }, [user.id, user.email, avgRating, roundCorrect, roundTotal, quizService]);

  const bannerUnitId = Platform.OS === 'android' ? AdIds.androidBanner : AdIds.iosBanner;

  const accuracyColor = accuracy >= 70 ? Colors.correct : accuracy >= 40 ? Colors.warning : Colors.wrong;
  const encouragement =
    accuracy >= 80
      ? '훌륭해요!'
      : accuracy >= 60
        ? '잘하고 있어요!'
      : accuracy >= 40
          ? '조금 더 힘내봐요!'
          : '다시 도전해봐요!';
  const syncStateLabel = syncLoading ? '동기화 중' : syncError ? '확인 필요' : '정상';
  const syncStateColor = syncLoading ? Colors.warning : syncError ? Colors.wrong : Colors.correct;

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer>
        <View style={styles.glowTop} />
        <View style={styles.glowBottom} />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <ScreenCard tone="tint" style={styles.heroSection}>
            <Text style={SharedStyles.eyebrow}>Round Summary</Text>
            <Text style={styles.heroTitle}>라운드 결과</Text>
            <Text style={styles.heroSubtitle}>
              {displayName(user.email ?? null, user.id)}님의 이번 라운드 정확도와 성장 지표입니다.
            </Text>
            <StatRing
              percent={accuracy}
              numerator={roundCorrect}
              denominator={roundTotal}
              color={accuracyColor}
            />
            <Text style={[styles.encouragement, { color: accuracyColor }]}>{encouragement}</Text>
          </ScreenCard>

          <View style={styles.summaryGrid}>
            <ScreenCard style={styles.metricCard}>
              <Text style={styles.metricLabel}>종합 Rating</Text>
              <Text style={styles.metricValue}>{avgRating}</Text>
              <Badge label={localTier} tone="status" color={Colors.primary} />
            </ScreenCard>

            <ScreenCard style={styles.metricCard}>
              <Text style={styles.metricLabel}>점수 동기화</Text>
              <Text style={[styles.metricValueSmall, { color: syncStateColor }]}>{syncStateLabel}</Text>
              <Text style={styles.metricCaption}>
                {bestScore ? `최고 ${bestScore.compositeRating}` : '기록 생성 전'}
              </Text>
            </ScreenCard>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>유형별 세부 Rating</Text>
            <Text style={styles.sectionCaption}>현재 강점과 약한 유형을 한 번에 정리합니다.</Text>
          </View>
          <View style={styles.typeCardsContainer}>
            {ALL_QUIZ_TYPES.map((t) => {
              const typeSummary = summary.byType[t];
              const color = QuizTypeColors[t];
              const typeAccuracy =
                typeSummary.attempts > 0
                  ? Math.round((typeSummary.correct / typeSummary.attempts) * 100)
                  : 0;

              return (
                <ScreenCard key={t} padded={false} style={styles.typeCard}>
                  <View style={[styles.typeCardAccent, { backgroundColor: color }]} />
                  <View style={styles.typeCardContent}>
                    <Text style={[styles.typeCardLabel, { color }]}>{QUIZ_TYPE_LABELS[t]}</Text>
                    <Text style={[styles.typeCardRating, { color }]}>{typeSummary.rating}</Text>
                    <Text style={styles.typeCardTier}>{typeSummary.tierLabel}</Text>
                    {typeSummary.attempts > 0 && (
                      <Text style={styles.typeCardAccuracy}>
                        {typeSummary.correct}/{typeSummary.attempts} ({typeAccuracy}%)
                      </Text>
                    )}
                  </View>
                </ScreenCard>
              );
            })}
          </View>

          <ScreenCard style={styles.rankingCard}>
            <Text style={SharedStyles.eyebrow}>Leaderboard</Text>
            <Text style={styles.rankingTitle}>Supabase 점수 보드</Text>

            {syncLoading ? (
              <Text style={styles.rankingCaption}>점수 동기화 중...</Text>
            ) : syncError ? (
              <Text style={[styles.rankingCaption, styles.rankingError]}>{syncError}</Text>
            ) : (
              <>
                <Text style={styles.bestLabel}>내 최고 점수</Text>
                {bestScore ? (
                  <View style={styles.bestRow}>
                    <Text style={styles.bestScore}>{bestScore.compositeRating}</Text>
                    <Text style={styles.bestAt}>{formatDate(bestScore.createdAt)}</Text>
                  </View>
                ) : (
                  <Text style={styles.rankingCaption}>아직 저장된 기록이 없습니다.</Text>
                )}

                <Text style={styles.leaderboardTitle}>Global Top 10</Text>
                {leaderboard.length === 0 ? (
                  <Text style={styles.rankingCaption}>리더보드 데이터가 없습니다.</Text>
                ) : (
                  leaderboard.map((entry) => {
                    const mine = entry.userId === user.id;
                    return (
                      <View key={`${entry.userId}-${entry.rank}`} style={styles.leaderboardRow}>
                        <Text style={[styles.leaderboardRank, mine && styles.mineText]}>#{entry.rank}</Text>
                        <View style={styles.leaderboardUserWrap}>
                          <Text style={[styles.leaderboardUser, mine && styles.mineText]} numberOfLines={1}>
                            {displayName(entry.email, entry.userId)}
                            {mine ? ' (나)' : ''}
                          </Text>
                          <Text style={styles.leaderboardMeta} numberOfLines={1}>
                            {entry.attempts}회 · {formatDate(entry.lastSubmittedAt)}
                          </Text>
                        </View>
                        <Text style={[styles.leaderboardScore, mine && styles.mineText]}>
                          {entry.bestCompositeRating}
                        </Text>
                      </View>
                    );
                  })
                )}
              </>
            )}
          </ScreenCard>

          <ScreenCard style={styles.historyCard}>
            <Text style={styles.historySectionTitle}>문제 기록</Text>
            <View style={styles.historySection}>
              {roundHistory.map((rec, idx) => (
                <HistoryListItem
                  key={`${rec.word}-${idx}`}
                  index={idx + 1}
                  word={rec.word}
                  answerText={
                    rec.correct
                      ? rec.correctAnswer
                      : rec.userAnswer
                        ? `${rec.userAnswer} → ${rec.correctAnswer}`
                        : `시간 초과 → ${rec.correctAnswer}`
                  }
                  correct={rec.correct}
                  typeLabel={QUIZ_TYPE_SHORT[rec.quizType]}
                  typeColor={QuizTypeColors[rec.quizType]}
                />
              ))}
            </View>
          </ScreenCard>
        </ScrollView>

        <View style={styles.footerShell}>
          <ScreenCard padded={false} style={styles.footer}>
          <Button label="다시 풀기" variant="primary" onPress={onResume} />
          <Button label="로그아웃" variant="secondary" onPress={onSignOut} />
          </ScreenCard>
        </View>

        {adsEnabled && BannerAdComponent && (
          <View style={styles.bannerWrap}>
            <BannerAdComponent unitId={bannerUnitId} size="BANNER" />
          </View>
        )}
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  glowTop: {
    position: 'absolute',
    top: 64,
    right: -60,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: withAlpha(Colors.primary, '10'),
  },
  glowBottom: {
    position: 'absolute',
    bottom: 140,
    left: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: withAlpha(Colors.warning, '10'),
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
    gap: Spacing.md,
  },
  heroSection: {
    alignItems: 'center',
    marginHorizontal: Spacing.lg,
  },
  heroTitle: {
    marginTop: Spacing.xs,
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  heroSubtitle: {
    marginTop: Spacing.xs,
    marginBottom: Spacing.lg,
    fontSize: Typography.size13,
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  encouragement: {
    marginTop: Spacing.md,
    fontSize: Typography.size15,
    fontWeight: Typography.weightBold,
  },
  summaryGrid: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginHorizontal: Spacing.lg,
  },
  metricCard: {
    flex: 1,
    gap: Spacing.xs,
  },
  metricLabel: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textMuted,
  },
  metricValue: {
    fontSize: Typography.size34,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    lineHeight: 38,
  },
  metricValueSmall: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    lineHeight: 28,
  },
  metricCaption: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textSecondary,
  },
  sectionHeader: {
    marginHorizontal: Spacing.lg,
    gap: Spacing.xs,
  },
  sectionTitle: {
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  sectionCaption: {
    fontSize: Typography.size12,
    lineHeight: 18,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  typeCardsContainer: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  typeCard: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  typeCardAccent: {
    width: 6,
  },
  typeCardContent: {
    flex: 1,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  typeCardLabel: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightBold,
  },
  typeCardRating: {
    marginTop: 4,
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
  },
  typeCardTier: {
    marginTop: 3,
    fontSize: Typography.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
  },
  typeCardAccuracy: {
    marginTop: 6,
    fontSize: Typography.size12,
    color: Colors.textSecondary,
    fontWeight: Typography.weightSemiBold,
  },
  rankingCard: {
    marginHorizontal: Spacing.lg,
  },
  rankingTitle: {
    marginTop: Spacing.xs,
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  rankingCaption: {
    fontSize: Typography.size13,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
    lineHeight: 20,
  },
  rankingError: {
    color: Colors.wrong,
  },
  bestLabel: {
    marginTop: Spacing.sm,
    fontSize: Typography.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
  },
  bestRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  bestScore: {
    fontSize: 28,
    fontWeight: Typography.weightExtraBold,
    color: Colors.primary,
  },
  bestAt: {
    fontSize: Typography.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  leaderboardTitle: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  leaderboardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    paddingVertical: Spacing.md,
  },
  leaderboardRank: {
    width: 34,
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
  },
  leaderboardUserWrap: {
    flex: 1,
  },
  leaderboardUser: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  leaderboardMeta: {
    marginTop: 2,
    fontSize: Typography.size11,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  leaderboardScore: {
    minWidth: 48,
    textAlign: 'right',
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.primary,
  },
  mineText: {
    color: Colors.correctDark,
  },
  historyCard: {
    marginHorizontal: Spacing.lg,
  },
  historySection: {
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  historySectionTitle: {
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  footerShell: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  footer: {
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  bannerWrap: {
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 8 : 4,
    backgroundColor: withAlpha(Colors.surface, 'E6'),
  },
});
