import React, { useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import type { QuizService, QuizType, TrackedQuizType } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { CharacterProfile } from '../../../shared/models/characterProfile';
import { GradeTable } from '../../../shared/constants/gradeTable';
import {
  Button,
  Chip,
  ResponsiveContainer,
  ScreenCard,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
import {
  Colors,
  QuizTypeColors,
  Radius,
  Spacing,
  Typography,
  withAlpha,
} from '../../../shared/constants/theme';
import { CharacterSummaryCard } from '../../profile/components/CharacterSummaryCard';

const TRACK_ORDER: TrackedQuizType[] = ['e2k', 'k2e', 'e2e', 'syn'];

interface HomeScreenProps {
  characterProfile: CharacterProfile;
  quizService: QuizService;
  viewerLabel: string;
  storageLabel: string;
  authEnabled: boolean;
  isGuestSession: boolean;
  onStartLearning: () => void;
  onOpenProfile: () => void;
  onSignInRequest?: () => void;
}

interface HomeStatCardProps {
  eyebrow: string;
  value: string;
  caption: string;
  accentColor?: string;
  warm?: boolean;
  styles: ReturnType<typeof useHomeStyles>;
}

function trackColor(type: QuizType): string {
  return QuizTypeColors[type];
}

function HomeStatCard({
  eyebrow,
  value,
  caption,
  accentColor = Colors.primary,
  warm = false,
  styles,
}: HomeStatCardProps) {
  const typography = useResponsiveTypography();

  return (
    <View
      style={[
        styles.statCard,
        warm && styles.statCardWarm,
        { borderColor: warm ? Colors.warningBorder : Colors.borderLight },
      ]}
    >
      <Text style={styles.statEyebrow}>{eyebrow}</Text>
      <Text
        style={[
          styles.statValue,
          {
            fontSize: typography.sizes.size23,
            color: warm ? Colors.warningDark : accentColor,
          },
        ]}
      >
        {value}
      </Text>
      <Text style={styles.statCaption}>{caption}</Text>
    </View>
  );
}

export function HomeScreen({
  characterProfile,
  quizService,
  viewerLabel,
  storageLabel,
  authEnabled,
  isGuestSession,
  onStartLearning,
  onOpenProfile,
  onSignInRequest,
}: HomeScreenProps) {
  const styles = useHomeStyles();
  const sharedTextStyles = useSharedTextStyles();
  const { width: windowWidth } = useWindowDimensions();
  const contentMaxWidth = windowWidth >= 1180 ? 760 : windowWidth >= 820 ? 700 : 640;
  const dashboard = quizService.learningDashboard;
  const summary = quizService.resultSummary;
  const compositeRating = Math.round(quizService.compositeRating);
  const compositeTier = GradeTable.gradeLabel(compositeRating);
  const compositeDescriptor = GradeTable.gradeDescriptor(compositeRating);
  const weakestTypeLabel = QUIZ_TYPE_LABELS[dashboard.weakestType];
  const weakestTypeColor = trackColor(dashboard.weakestType);
  const issueCount = dashboard.fragileCorrectCount + dashboard.hardWrongCount + dashboard.timeoutCount;
  const trackRows = useMemo(
    () =>
      TRACK_ORDER.map((type) => {
        const typeSummary = summary.byType[type];

        return {
          type,
          label: QUIZ_TYPE_LABELS[type],
          rating: Math.round(typeSummary.rating),
          tier: typeSummary.tierLabel,
        };
      }),
    [summary.byType],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer maxWidth={contentMaxWidth}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.backdropTop} />
          <View style={styles.backdropBottom} />

          <View style={styles.header}>
            <View style={styles.headerRow}>
              <View
                style={[
                  styles.statusPill,
                  isGuestSession ? styles.statusPillGuest : styles.statusPillSynced,
                ]}
              >
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: isGuestSession ? Colors.primary : Colors.correct },
                  ]}
                />
                <Text
                  style={[
                    styles.statusPillText,
                    isGuestSession ? styles.statusPillTextGuest : styles.statusPillTextSynced,
                  ]}
                >
                  {isGuestSession ? 'Guest Ready' : 'Cloud Sync On'}
                </Text>
              </View>

              <View style={styles.ratingPill}>
                <Text style={styles.ratingPillText}>{`Rating ${compositeRating}`}</Text>
              </View>
            </View>

            <Text style={styles.brand}>Word Master</Text>
            <Text style={styles.subtitle}>
              곧바로 퀴즈에 들어가기 전, 현재 상태를 보고 학습을 시작하거나 프로필과 로그인으로
              분기할 수 있는 새 홈 화면입니다.
            </Text>
          </View>

          <CharacterSummaryCard
            profile={characterProfile}
            title={viewerLabel}
            caption={storageLabel}
            compact
          />

          <ScreenCard style={styles.actionCard}>
            <View style={styles.actionHeader}>
              <Text style={sharedTextStyles.eyebrow}>Learning Hub</Text>
              <Text style={styles.actionTitle}>오늘의 학습 시작</Text>
              <Text style={styles.actionDescription}>
                현재 레이팅과 복습 대기 상태를 확인한 뒤 바로 세션을 시작하세요.
              </Text>
            </View>

            <Button label="학습 시작하기" onPress={onStartLearning} />

            <View style={styles.secondaryActionRow}>
              <TouchableOpacity
                accessibilityRole="button"
                style={[styles.secondaryAction, styles.secondaryActionTint]}
                onPress={onOpenProfile}
                activeOpacity={0.85}
              >
                <Text style={[styles.secondaryActionText, styles.secondaryActionTextTint]}>
                  프로필 열기
                </Text>
              </TouchableOpacity>

              {authEnabled && isGuestSession && onSignInRequest ? (
                <TouchableOpacity
                  accessibilityRole="button"
                  style={styles.secondaryAction}
                  onPress={onSignInRequest}
                  activeOpacity={0.85}
                >
                  <Text style={styles.secondaryActionText}>로그인</Text>
                </TouchableOpacity>
              ) : (
                <View style={[styles.secondaryAction, styles.secondaryActionInfo]}>
                  <Text style={styles.secondaryActionInfoText}>
                    {isGuestSession ? '게스트 저장 중' : '동기화 연결됨'}
                  </Text>
                </View>
              )}
            </View>
          </ScreenCard>

          <View style={styles.statGrid}>
            <HomeStatCard
              styles={styles}
              eyebrow="현재 티어"
              value={compositeTier}
              caption={compositeDescriptor}
              accentColor={Colors.primaryStrong}
            />
            <HomeStatCard
              styles={styles}
              eyebrow="복습 대기"
              value={`${dashboard.dueReviewCount}`}
              caption="다시 볼 단어 수"
              accentColor={Colors.correctDark}
            />
            <HomeStatCard
              styles={styles}
              eyebrow="취약 유형"
              value={weakestTypeLabel}
              caption="지금 가장 흔들리는 축"
              accentColor={weakestTypeColor}
            />
            <HomeStatCard
              styles={styles}
              eyebrow="주의 응답"
              value={`${issueCount}`}
              caption="불안 정답, 오답, 시간 초과"
              warm
            />
          </View>

          <ScreenCard style={styles.trackCard}>
            <View style={styles.trackHeader}>
              <Text style={sharedTextStyles.eyebrow}>Tracked Ratings</Text>
              <Text style={styles.trackTitle}>유형별 레이팅</Text>
            </View>

            <View style={styles.trackList}>
              {trackRows.map((track) => (
                <View key={track.type} style={styles.trackRow}>
                  <View style={styles.trackLabelGroup}>
                    <Chip label={track.label} type={track.type} />
                    <Text style={styles.trackTier}>{track.tier}</Text>
                  </View>
                  <Text style={styles.trackValue}>{track.rating}</Text>
                </View>
              ))}
            </View>
          </ScreenCard>

          {authEnabled && isGuestSession && onSignInRequest ? (
            <ScreenCard tone="warm" style={styles.guestCard}>
              <Text style={sharedTextStyles.eyebrow}>Optional Login</Text>
              <Text style={styles.guestCardTitle}>로그인하면 기록을 계정에 이어갈 수 있어요.</Text>
              <Text style={styles.guestCardBody}>
                지금은 게스트로 풀고, 필요할 때만 로그인해서 학습 기록과 캐릭터 프로필을
                동기화할 수 있습니다.
              </Text>
              <Button
                variant="secondary"
                label="로그인 화면 열기"
                onPress={onSignInRequest}
              />
            </ScreenCard>
          ) : null}
        </ScrollView>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

function useHomeStyles() {
  const typography = useResponsiveTypography();

  return useMemo(
    () =>
      StyleSheet.create({
        safe: {
          flex: 1,
          backgroundColor: Colors.background,
        },
        scroll: {
          flex: 1,
        },
        scrollContent: {
          paddingVertical: Spacing.xxl,
          paddingHorizontal: Spacing.lg,
          gap: Spacing.lg,
        },
        backdropTop: {
          position: 'absolute',
          top: 36,
          right: -56,
          width: 168,
          height: 168,
          borderRadius: 84,
          backgroundColor: withAlpha(Colors.primary, '12'),
        },
        backdropBottom: {
          position: 'absolute',
          bottom: 120,
          left: -44,
          width: 132,
          height: 132,
          borderRadius: 66,
          backgroundColor: withAlpha(Colors.warning, '10'),
        },
        header: {
          gap: Spacing.sm,
        },
        headerRow: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: Spacing.sm,
        },
        statusPill: {
          minHeight: 36,
          borderRadius: Radius.pill,
          borderWidth: 1,
          paddingHorizontal: Spacing.md,
          flexDirection: 'row',
          alignItems: 'center',
          gap: Spacing.sm,
        },
        statusPillGuest: {
          backgroundColor: Colors.surface,
          borderColor: Colors.primaryBorder,
        },
        statusPillSynced: {
          backgroundColor: Colors.correctLight,
          borderColor: withAlpha(Colors.correct, '40'),
        },
        statusDot: {
          width: 8,
          height: 8,
          borderRadius: Radius.pill,
        },
        statusPillText: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
        },
        statusPillTextGuest: {
          color: Colors.primaryStrong,
        },
        statusPillTextSynced: {
          color: Colors.correctDark,
        },
        ratingPill: {
          minHeight: 36,
          borderRadius: Radius.pill,
          borderWidth: 1,
          borderColor: Colors.border,
          backgroundColor: withAlpha(Colors.white, 'D9'),
          paddingHorizontal: Spacing.md,
          justifyContent: 'center',
          alignItems: 'center',
        },
        ratingPillText: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
          color: Colors.textSecondary,
        },
        brand: {
          fontSize: typography.sizes.size34,
          lineHeight: typography.lineHeight(Typography.size34, 1.06),
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
          letterSpacing: -0.8,
        },
        subtitle: {
          maxWidth: 320,
          fontSize: typography.sizes.size13,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
          fontWeight: Typography.weightMedium,
          color: Colors.textSecondary,
        },
        actionCard: {
          gap: Spacing.md,
        },
        actionHeader: {
          gap: Spacing.xs,
        },
        actionTitle: {
          fontSize: typography.sizes.size23,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        actionDescription: {
          fontSize: typography.sizes.size13,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
          fontWeight: Typography.weightMedium,
          color: Colors.textSecondary,
        },
        secondaryActionRow: {
          flexDirection: 'row',
          gap: Spacing.sm,
        },
        secondaryAction: {
          flex: 1,
          minHeight: 48,
          borderRadius: Radius.lg,
          borderWidth: 1,
          borderColor: Colors.border,
          backgroundColor: Colors.surfaceTint,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: Spacing.md,
        },
        secondaryActionTint: {
          borderColor: Colors.primaryBorder,
          backgroundColor: Colors.primaryLight,
        },
        secondaryActionInfo: {
          backgroundColor: Colors.surface,
        },
        secondaryActionText: {
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          color: Colors.textSecondary,
        },
        secondaryActionTextTint: {
          color: Colors.primaryStrong,
        },
        secondaryActionInfoText: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
          color: Colors.textMuted,
          textAlign: 'center',
        },
        statGrid: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: Spacing.md,
        },
        statCard: {
          flexBasis: 0,
          flexGrow: 1,
          minWidth: 150,
          borderRadius: Radius.xl,
          borderWidth: 1,
          backgroundColor: Colors.surface,
          paddingHorizontal: Spacing.lg,
          paddingVertical: Spacing.lg,
          gap: Spacing.xs,
          shadowColor: Colors.shadow,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.06,
          shadowRadius: 18,
          elevation: 3,
        },
        statCardWarm: {
          backgroundColor: Colors.warningLight,
        },
        statEyebrow: {
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightBold,
          color: Colors.textMuted,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
        },
        statValue: {
          fontWeight: Typography.weightExtraBold,
          letterSpacing: -0.3,
        },
        statCaption: {
          fontSize: typography.sizes.size12,
          lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
          fontWeight: Typography.weightMedium,
          color: Colors.textSecondary,
        },
        trackCard: {
          gap: Spacing.md,
        },
        trackHeader: {
          gap: Spacing.xs,
        },
        trackTitle: {
          fontSize: typography.sizes.size18,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        trackList: {
          gap: Spacing.sm,
        },
        trackRow: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: Spacing.md,
          borderRadius: Radius.lg,
          borderWidth: 1,
          borderColor: Colors.borderLight,
          backgroundColor: Colors.surfaceTint,
          paddingHorizontal: Spacing.md,
          paddingVertical: Spacing.md,
        },
        trackLabelGroup: {
          flex: 1,
          gap: Spacing.xs,
        },
        trackTier: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightMedium,
          color: Colors.textSecondary,
        },
        trackValue: {
          fontSize: typography.sizes.size18,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        guestCard: {
          gap: Spacing.sm,
        },
        guestCardTitle: {
          fontSize: typography.sizes.size18,
          fontWeight: Typography.weightExtraBold,
          color: Colors.warningDark,
        },
        guestCardBody: {
          fontSize: typography.sizes.size13,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
          fontWeight: Typography.weightMedium,
          color: Colors.hintText,
        },
      }),
    [typography],
  );
}
