import type { User } from '@supabase/supabase-js';
import React, { useEffect, useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { GradeTable } from '../../../shared/constants/gradeTable';
import { resolveResultVisibility } from '../../../shared/config/runtimeAvailability';
import { Colors, QuizTypeColors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import type { CharacterProfile } from '../../../shared/models/characterProfile';
import {
  fetchLeaderboard,
  fetchPersonalBestScore,
  isScoreSyncAvailable,
  submitScore,
  type LeaderboardEntry,
  type PersonalBestScore,
} from '../../../services/scoreService';
import type { QuizService, RoundRecord } from '../../../services/quizService';
import { ALL_QUIZ_TYPES, QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizType } from '../../../services/quizService';
import { AppExternalLinks } from '../../../shared/constants/externalLinks';
import {
  Badge,
  Button,
  HistoryListItem,
  ResponsiveContainer,
  ScreenCard,
  StatRing,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
import { CharacterSummaryCard } from '../../profile/components/CharacterSummaryCard';

const QUIZ_TYPE_SHORT: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
  syn: '동의',
  ant: '반의',
};

interface ResultScreenProps {
  characterProfile: CharacterProfile;
  quizService: QuizService;
  user: User | null;
  authEnabled: boolean;
  scoreSyncEnabled: boolean;
  isGuestSession?: boolean;
  onOpenProfile: () => void;
  onResume: () => void;
  onSignInRequest: () => void;
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

function shouldShowCorrectAnswerOnSuccess(type: QuizType): boolean {
  return type === 'e2e' || type === 'syn' || type === 'ant';
}

function formatHistoryAnswerText(rec: RoundRecord): string {
  if (rec.correct) {
    return shouldShowCorrectAnswerOnSuccess(rec.quizType) ? `정답: ${rec.correctAnswer}` : '정답';
  }

  if (rec.userAnswer) {
    return `내 답: ${rec.userAnswer} → 정답: ${rec.correctAnswer}`;
  }

  return `시간 초과 → 정답: ${rec.correctAnswer}`;
}

export function ResultScreen({
  characterProfile,
  quizService,
  user,
  authEnabled,
  scoreSyncEnabled,
  isGuestSession = false,
  onOpenProfile,
  onResume,
  onSignInRequest,
  onSignOut,
}: ResultScreenProps) {
  const styles = useResultStyles();
  const sharedTextStyles = useSharedTextStyles();
  const { width: windowWidth } = useWindowDimensions();
  const contentMaxWidth = windowWidth >= 1280 ? 980 : windowWidth >= 1024 ? 920 : 820;
  const contentInset = windowWidth >= 1024 ? Spacing.xl : Spacing.lg;
  const summary = quizService.resultSummary;
  const learningDashboard = quizService.learningDashboard;
  const avgRating = learningDashboard.overallSkill;
  const localTier = GradeTable.gradeLabel(avgRating);
  const localTierDescriptor = GradeTable.gradeDescriptor(avgRating);

  const [syncLoading, setSyncLoading] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [bestScore, setBestScore] = useState<PersonalBestScore | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const roundHistory = quizService.roundHistory;
  const roundCorrect = quizService.roundCorrect;
  const roundTotal = quizService.roundTotal;
  const accuracy = roundTotal > 0 ? Math.round((roundCorrect / roundTotal) * 100) : 0;
  const weakestTypeLabel = QUIZ_TYPE_LABELS[learningDashboard.weakestType];
  const viewState = resolveResultVisibility({
    authEnabled,
    scoreSyncEnabled,
    isGuestSession,
  });

  useEffect(() => {
    let mounted = true;

    const syncScore = async () => {
      if (!viewState.showScoreSync) {
        if (mounted) {
          setSyncLoading(false);
          setSyncError(null);
          setLeaderboard([]);
          setBestScore(null);
        }
        return;
      }

      if (isGuestSession || !user) {
        if (mounted) {
          setSyncError('게스트 세션에서는 온라인 점수 보드가 비활성화됩니다.');
          setLeaderboard([]);
          setBestScore(null);
        }
        return;
      }

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
  }, [isGuestSession, user, avgRating, roundCorrect, roundTotal, quizService, viewState.showScoreSync]);

  const accuracyColor = accuracy >= 70 ? Colors.correct : accuracy >= 40 ? Colors.warning : Colors.wrong;
  const encouragement =
    accuracy >= 80
      ? '훌륭해요!'
      : accuracy >= 60
        ? '잘하고 있어요!'
        : accuracy >= 40
          ? '조금 더 힘내봐요!'
          : '다시 도전해봐요!';
  const userLabel = isGuestSession ? '게스트' : displayName(user?.email ?? null, user?.id ?? 'guest');
  const heroSubtitle = isGuestSession
    ? '게스트로 먼저 풀고, 로그인하면 다음 라운드부터 기록과 프로필을 계정에 이어갈 수 있어요.'
    : `${userLabel}님의 이번 라운드 정확도와 성장 지표입니다.`;
  const syncStateLabel = !viewState.showScoreSync
    ? !authEnabled
      ? '이 기기 전용'
      : isGuestSession
        ? '게스트 사용 중'
        : '계정 연결됨'
    : isGuestSession
      ? '게스트'
      : syncLoading
        ? '동기화 중'
        : syncError
          ? '확인 필요'
          : '정상';
  const syncStateColor = !viewState.showScoreSync
    ? !authEnabled || isGuestSession
      ? Colors.textSecondary
      : Colors.correct
    : isGuestSession
      ? Colors.textSecondary
      : syncLoading
        ? Colors.warning
      : syncError
        ? Colors.wrong
        : Colors.correct;
  const syncStateCaption = !viewState.showScoreSync
    ? !authEnabled
      ? '학습 기록은 이 기기에 저장됩니다.'
      : isGuestSession
        ? '로그인하면 다음 라운드부터 기록과 프로필을 계정에 이어갈 수 있어요.'
        : '이 계정으로 학습 기록과 캐릭터 프로필을 이어가고 있습니다.'
    : bestScore
      ? `최고 ${bestScore.compositeRating}`
      : isGuestSession
        ? '기기 내 체험 전용'
        : '기록 생성 전';

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer maxWidth={contentMaxWidth} paddingHorizontal={contentInset}>
        <View style={styles.glowTop} />
        <View style={styles.glowBottom} />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <ScreenCard tone="tint" style={styles.heroSection}>
            <Text style={sharedTextStyles.eyebrow}>Round Summary</Text>
            <Text style={styles.heroTitle}>라운드 결과</Text>
            <Text style={styles.heroSubtitle}>{heroSubtitle}</Text>
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
              <Text style={styles.metricLabel}>현재 ELO</Text>
              <Text style={styles.metricValue}>{avgRating}</Text>
              <Badge label={localTier} tone="status" color={Colors.primary} />
              <Text style={styles.metricCaption}>{localTierDescriptor}</Text>
            </ScreenCard>

            <ScreenCard style={styles.metricCard}>
              <Text style={styles.metricLabel}>
                {viewState.showScoreSync ? '점수 동기화' : '기록 저장'}
              </Text>
              <Text style={[styles.metricValueSmall, { color: syncStateColor }]}>{syncStateLabel}</Text>
              <Text style={styles.metricCaption}>{syncStateCaption}</Text>
            </ScreenCard>
          </View>

          <CharacterSummaryCard
            profile={characterProfile}
            title={isGuestSession ? '게스트 캐릭터' : `${userLabel}의 캐릭터`}
            caption={
              isGuestSession
                ? '좋아/싫어 프로필은 이 기기에 저장됩니다.'
                : '이 캐릭터 프로필은 계정과 함께 동기화됩니다.'
            }
            compact
          />
          <View style={styles.profileActionRow}>
            <Button
              label="캐릭터 꾸미기"
              variant="ghost"
              fullWidth={false}
              onPress={onOpenProfile}
              style={styles.profileActionButton}
            />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>학습 대시보드</Text>
            <Text style={styles.sectionCaption}>복습 우선순위와 약점 패턴을 함께 확인합니다.</Text>
          </View>
          <View style={styles.dashboardGrid}>
            <ScreenCard style={styles.dashboardCard}>
              <Text style={styles.metricLabel}>Due Review</Text>
              <Text style={styles.metricValueSmall}>{learningDashboard.dueReviewCount}</Text>
              <Text style={styles.metricCaption}>지금 다시 볼 문제</Text>
            </ScreenCard>
            <ScreenCard style={styles.dashboardCard}>
              <Text style={styles.metricLabel}>가장 약한 유형</Text>
              <Text style={styles.dashboardPrimaryText}>{weakestTypeLabel}</Text>
              <Text style={styles.metricCaption}>우선 보강 대상</Text>
            </ScreenCard>
            <ScreenCard style={styles.dashboardCard}>
              <Text style={styles.metricLabel}>Fragile Correct</Text>
              <Text style={styles.metricValueSmall}>{learningDashboard.fragileCorrectCount}</Text>
              <Text style={styles.metricCaption}>맞췄지만 불안정한 정답</Text>
            </ScreenCard>
            <ScreenCard style={styles.dashboardCard}>
              <Text style={styles.metricLabel}>Hard Wrong / Timeout</Text>
              <Text style={styles.dashboardPrimaryText}>
                {learningDashboard.hardWrongCount} / {learningDashboard.timeoutCount}
              </Text>
              <Text style={styles.metricCaption}>깊은 오답과 시간 초과</Text>
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
              const typeTierDescriptor = GradeTable.gradeDescriptor(typeSummary.rating);

              return (
                <ScreenCard key={t} padded={false} style={styles.typeCard}>
                  <View style={[styles.typeCardAccent, { backgroundColor: color }]} />
                  <View style={styles.typeCardContent}>
                    <Text style={[styles.typeCardLabel, { color }]}>{QUIZ_TYPE_LABELS[t]}</Text>
                    <Text style={[styles.typeCardRating, { color }]}>{typeSummary.rating}</Text>
                    <Text style={styles.typeCardTier}>{typeSummary.tierLabel}</Text>
                    <Text style={styles.typeCardDescriptor}>{typeTierDescriptor}</Text>
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

          {viewState.showLeaderboard && (
            <ScreenCard style={styles.rankingCard}>
              <Text style={sharedTextStyles.eyebrow}>Leaderboard</Text>
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
                      const mine = user ? entry.userId === user.id : false;
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
          )}

          <ScreenCard style={styles.historyCard}>
            <Text style={styles.historySectionTitle}>문제 기록</Text>
            <View style={styles.historySection}>
              {roundHistory.map((rec, idx) => (
                <HistoryListItem
                  key={`${rec.word}-${idx}`}
                  index={idx + 1}
                  word={rec.word}
                  meaning={rec.meaning}
                  answerText={formatHistoryAnswerText(rec)}
                  correct={rec.correct}
                  typeLabel={QUIZ_TYPE_SHORT[rec.quizType]}
                  typeColor={QuizTypeColors[rec.quizType]}
                />
              ))}
            </View>
          </ScreenCard>

          <ScreenCard style={styles.resourcesCard}>
            <Text style={styles.resourcesTitle}>지원 및 개인정보</Text>
            <Text style={styles.resourcesCaption}>
              게스트 학습, 선택 로그인, 지원 채널, 개인정보처리방침을 확인할 수 있습니다.
            </Text>
            <View style={styles.resourcesActions}>
              <Button
                label="지원"
                variant="ghost"
                fullWidth={false}
                onPress={() => {
                  void AppExternalLinks.open(AppExternalLinks.supportPageUrl);
                }}
                style={styles.resourceButton}
              />
              <Button
                label="개인정보"
                variant="ghost"
                fullWidth={false}
                onPress={() => {
                  void AppExternalLinks.open(AppExternalLinks.privacyPageUrl);
                }}
                style={styles.resourceButton}
              />
            </View>
          </ScreenCard>
        </ScrollView>

        <View style={styles.footerShell}>
          <ScreenCard padded={false} style={styles.footer}>
            {viewState.showGuestSignInAction && (
              <View style={styles.footerNotice}>
                <Text style={styles.footerNoticeTitle}>로그인은 선택입니다</Text>
                <Text style={styles.footerNoticeText}>
                  지금은 게스트로 계속 풀어도 되고, 로그인하면 다음 라운드부터 기록과 프로필을 계정에 이어갈 수 있어요.
                </Text>
              </View>
            )}
            <Button label="다시 풀기" variant="primary" onPress={onResume} />
            {viewState.showGuestSignInAction && (
              <Button
                label="로그인하고 기록 이어가기"
                variant="secondary"
                onPress={onSignInRequest}
              />
            )}
            {viewState.showSignedInAccountAction && (
              <Button
                label="로그아웃"
                variant="secondary"
                onPress={onSignOut}
              />
            )}
          </ScreenCard>
        </View>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

function useResultStyles() {
  const typography = useResponsiveTypography();

  return useMemo(() => StyleSheet.create({
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
    width: '100%',
    alignItems: 'center',
  },
  heroTitle: {
    marginTop: Spacing.xs,
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  heroSubtitle: {
    marginTop: Spacing.xs,
    marginBottom: Spacing.lg,
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    textAlign: 'center',
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  encouragement: {
    marginTop: Spacing.md,
    fontSize: typography.sizes.size15,
    fontWeight: Typography.weightBold,
  },
  summaryGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  dashboardGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  metricCard: {
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 220,
    gap: Spacing.xs,
  },
  dashboardCard: {
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 150,
    gap: Spacing.xs,
  },
  metricLabel: {
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textMuted,
  },
  metricValue: {
    fontSize: typography.sizes.size34,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    lineHeight: typography.lineHeight(Typography.size34, 38 / Typography.size34),
  },
  metricValueSmall: {
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    lineHeight: typography.lineHeight(Typography.size23, 28 / Typography.size23),
  },
  metricCaption: {
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textSecondary,
  },
  profileActionRow: {
    width: '100%',
    marginTop: -Spacing.xs,
  },
  profileActionButton: {
    minWidth: 148,
    paddingHorizontal: Spacing.lg,
  },
  dashboardPrimaryText: {
    fontSize: typography.sizes.size23,
    lineHeight: typography.lineHeight(Typography.size23, 26 / Typography.size23),
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  sectionHeader: {
    width: '100%',
    gap: Spacing.xs,
  },
  sectionTitle: {
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  sectionCaption: {
    fontSize: typography.sizes.size12,
    lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  typeCardsContainer: {
    width: '100%',
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
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightBold,
  },
  typeCardRating: {
    marginTop: 4,
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
  },
  typeCardTier: {
    marginTop: 3,
    fontSize: typography.sizes.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
  },
  typeCardDescriptor: {
    marginTop: 4,
    fontSize: typography.sizes.size11,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
    lineHeight: typography.lineHeight(Typography.size11, 17 / Typography.size11),
  },
  typeCardAccuracy: {
    marginTop: 6,
    fontSize: typography.sizes.size12,
    color: Colors.textSecondary,
    fontWeight: Typography.weightSemiBold,
  },
  rankingCard: {
    width: '100%',
  },
  rankingTitle: {
    marginTop: Spacing.xs,
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  rankingCaption: {
    fontSize: typography.sizes.size13,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
  },
  rankingError: {
    color: Colors.wrong,
  },
  bestLabel: {
    marginTop: Spacing.sm,
    fontSize: typography.sizes.size12,
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
    fontSize: typography.fontSize(28),
    fontWeight: Typography.weightExtraBold,
    color: Colors.primary,
  },
  bestAt: {
    fontSize: typography.sizes.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  leaderboardTitle: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
    fontSize: typography.sizes.size13,
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
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
  },
  leaderboardUserWrap: {
    flex: 1,
  },
  leaderboardUser: {
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  leaderboardMeta: {
    marginTop: 2,
    fontSize: typography.sizes.size11,
    color: Colors.textMuted,
    fontWeight: Typography.weightMedium,
  },
  leaderboardScore: {
    minWidth: 48,
    textAlign: 'right',
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.primary,
  },
  mineText: {
    color: Colors.correctDark,
  },
  historyCard: {
    width: '100%',
  },
  historySection: {
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  historySectionTitle: {
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  resourcesCard: {
    width: '100%',
    gap: Spacing.sm,
  },
  resourcesTitle: {
    fontSize: typography.sizes.size15,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  resourcesCaption: {
    fontSize: typography.sizes.size12,
    lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  resourcesActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  resourceButton: {
    minWidth: 120,
    paddingHorizontal: Spacing.lg,
  },
  footerShell: {
    width: '100%',
    paddingBottom: Spacing.sm,
  },
  footer: {
    width: '100%',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  footerNotice: {
    gap: Spacing.xs,
    paddingBottom: Spacing.xs,
  },
  footerNoticeTitle: {
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  footerNoticeText: {
    fontSize: typography.sizes.size12,
    lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  }), [typography]);
}
