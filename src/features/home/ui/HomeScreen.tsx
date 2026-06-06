import React, { useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { QuizService, TrackedQuizType } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS, TRACKED_QUIZ_TYPES } from '../../../services/quizService';
import type { CharacterProfile } from '../../../shared/models/characterProfile';
import { GradeTable } from '../../../shared/constants/gradeTable';
import {
  estimateLearningRankLabel,
  resolveLearningPositionLabel,
} from '../../../shared/models/learningPosition';
import {
  Colors,
  QuizTypeColors,
  Radius,
  Spacing,
  Typography,
  withAlpha,
} from '../../../shared/constants/theme';
import { useResponsiveTypography } from '../../../shared/ui';
import { CharacterAvatar } from '../../profile/components/CharacterAvatar';

const TRACK_ORDER = [...TRACKED_QUIZ_TYPES];

const TYPE_DESCRIPTIONS: Record<TrackedQuizType, string> = {
  e2k: 'English → 한국어',
  k2e: '한국어 → English',
  e2e: 'English → English',
  syn: 'Synonyms',
};

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
}: HomeScreenProps): React.ReactElement {
  const styles = useHomeStyles();
  const summary = quizService.resultSummary;
  const compositeRating = Math.round(quizService.compositeRating);
  const tierLabel = GradeTable.gradeLabel(compositeRating);
  const positionLabel = resolveLearningPositionLabel(compositeRating);
  const rankLabel = estimateLearningRankLabel(compositeRating);

  const trackRows = useMemo(
    () =>
      TRACK_ORDER.map((type) => {
        const typeSummary = summary.byType[type];
        return {
          type,
          label: QUIZ_TYPE_LABELS[type],
          desc: TYPE_DESCRIPTIONS[type],
          rating: Math.round(typeSummary.rating),
          tier: typeSummary.tierLabel,
          color: QuizTypeColors[type],
        };
      }),
    [summary.byType],
  );

  const totalAttempts = trackRows.reduce(
    (sum, t) => sum + summary.byType[t.type].attempts,
    0,
  );
  const totalCorrect = trackRows.reduce(
    (sum, t) => sum + summary.byType[t.type].correct,
    0,
  );
  const accuracyPercent =
    totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  // CharacterProfile has no display-name field; viewerLabel doubles as the
  // friendly handle (email local-part for signed-in users, "내 캐릭터" otherwise).

  const heroStats: { value: string; label: string }[] = [
    { value: rankLabel, label: '점수 기반 위치' },
    { value: tierLabel, label: '티어' },
    { value: compositeRating.toLocaleString(), label: '전체 점수' },
  ];

  const heroAccessibilityLabel =
    `현재 위치 ${positionLabel}, ` +
    `점수 기반 위치 ${rankLabel}, ` +
    `티어 ${tierLabel}, ` +
    `전체 점수 ${compositeRating.toLocaleString()}점, ` +
    `정답률 ${accuracyPercent}퍼센트`;

  const showSignInPrompt = authEnabled && isGuestSession && onSignInRequest != null;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero — 현재 학습 위치 카드 */}
        <View style={styles.hero}>
          <View style={styles.heroRingLarge} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" />
          <View style={styles.heroRingSmall} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" />

          <View style={styles.heroTopRow}>
            <View style={styles.heroTopLeft}>
              <Text style={styles.heroEyebrow}>LEARNING POSITION</Text>
              <Text style={styles.heroGreeting}>현재 학습 위치</Text>
              <Text style={styles.heroViewerLabel}>{viewerLabel.trim() || '내 캐릭터'}</Text>
            </View>
            <TouchableOpacity
              style={styles.heroAvatarButton}
              onPress={onOpenProfile}
              accessibilityRole="button"
              accessibilityLabel="내 프로필 열기"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              activeOpacity={0.85}
            >
              <CharacterAvatar profile={characterProfile} size={38} />
            </TouchableOpacity>
          </View>

          <View style={styles.heroRatingRow} accessible accessibilityLabel={heroAccessibilityLabel}>
            <View style={styles.heroRatingCopy}>
              <Text style={styles.heroRatingEyebrow}>현재 위치 · 정답률 {accuracyPercent}%</Text>
              <Text style={styles.heroRatingValue}>{positionLabel}</Text>
            </View>
            <View style={styles.heroDeltaPill}>
              <Text style={styles.heroDeltaText}>
                {`티어 ${tierLabel}`}
              </Text>
            </View>
          </View>

          <View style={styles.heroStatsGrid}>
            {heroStats.map((stat, i) => (
              <View
                key={stat.label}
                style={[styles.heroStatCell, i > 0 && styles.heroStatCellDivider]}
              >
                <Text style={styles.heroStatValue}>{stat.value}</Text>
                <Text style={styles.heroStatLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 빠른 시작 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>빠른 시작</Text>
            <Text style={styles.sectionMeta}>20문제 · 약 3분</Text>
          </View>

          <TouchableOpacity
            style={styles.quickStartButton}
            onPress={onStartLearning}
            accessibilityRole="button"
            accessibilityLabel="학습 시작"
            activeOpacity={0.9}
          >
            <View style={styles.quickStartLeft}>
              <View style={styles.quickStartIconBubble}>
                <Text style={styles.quickStartIcon}>▶</Text>
              </View>
              <Text style={styles.quickStartTitle}>이어서 학습하기</Text>
            </View>
            <Text style={styles.quickStartMeta}>{`영한 · ${summary.byType.e2k.tierLabel}`}</Text>
          </TouchableOpacity>
        </View>

        {/* 퀴즈 타입 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>퀴즈 타입</Text>
          <View style={styles.typeList}>
            {trackRows.map((track) => (
              <View key={track.type} style={styles.typeCard}>
                <View style={[styles.typeBadge, { backgroundColor: track.color }]}>
                  <Text style={styles.typeBadgeText}>{track.label}</Text>
                </View>
                <View style={styles.typeBody}>
                  <Text style={styles.typeLabel}>{track.label}</Text>
                  <Text style={styles.typeDesc}>{track.desc}</Text>
                </View>
                <View style={styles.typeRight}>
                  <Text style={[styles.typeTier, { color: track.color }]}>
                    {track.tier}
                  </Text>
                  <Text style={styles.typeRating}>{track.rating}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 게스트 안내 */}
        {showSignInPrompt ? (
          <View style={styles.section}>
            <View style={styles.guestCard}>
              <Text style={styles.guestCardTitle}>로그인하면 기록이 이어져요</Text>
              <Text style={styles.guestCardBody}>
                지금은 게스트로 풀고, 필요할 때 로그인해서 학습 기록과 캐릭터 프로필을
                계정에 동기화할 수 있어요.
              </Text>
              <TouchableOpacity
                style={styles.guestCardButton}
                onPress={onSignInRequest}
                accessibilityRole="button"
                accessibilityLabel="로그인 화면 열기"
                activeOpacity={0.85}
              >
                <Text style={styles.guestCardButtonText}>로그인 화면 열기</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        <Text style={styles.storageNote}>{storageLabel}</Text>
      </ScrollView>
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
          paddingBottom: Spacing.xxxl,
        },
        // ── Hero ────────────────────────────────────────
        // primaryStrong (#2563EB) gives WCAG AA (≥4.5:1) for white at 12-13pt.
        hero: {
          backgroundColor: Colors.primaryStrong,
          paddingTop: Spacing.xxl,
          paddingBottom: Spacing.xxl,
          paddingHorizontal: Spacing.xl,
          borderBottomLeftRadius: Radius.xxl,
          borderBottomRightRadius: Radius.xxl,
          overflow: 'hidden',
        },
        heroRingLarge: {
          position: 'absolute',
          right: -60,
          top: -60,
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: withAlpha(Colors.white, '1F'),
        },
        heroRingSmall: {
          position: 'absolute',
          right: -30,
          top: -30,
          width: 140,
          height: 140,
          borderRadius: 70,
          borderWidth: 1,
          borderColor: withAlpha(Colors.white, '26'),
        },
        heroTopRow: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        heroTopLeft: {
          flex: 1,
          paddingRight: Spacing.md,
        },
        // letterSpacing: 1 only on Latin "WORDMASTER" — Korean strings
        // use 0 to preserve syllable rhythm.
        heroEyebrow: {
          color: Colors.white,
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightSemiBold,
          letterSpacing: 1,
        },
        heroGreeting: {
          color: Colors.white,
          fontSize: typography.sizes.size23,
          fontWeight: Typography.weightExtraBold,
          marginTop: 2,
        },
        heroViewerLabel: {
          color: withAlpha(Colors.white, 'CC'),
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightMedium,
          marginTop: Spacing.xs,
        },
        heroAvatarButton: {
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: withAlpha(Colors.white, 'F2'),
          borderWidth: 1,
          borderColor: withAlpha(Colors.white, 'B8'),
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: Colors.shadow,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.14,
          shadowRadius: 6,
          elevation: 3,
        },
        heroRatingRow: {
          marginTop: Spacing.xxl,
          flexDirection: 'row',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: Spacing.md,
        },
        heroRatingCopy: {
          flex: 1,
          minWidth: 180,
        },
        // 전체 등급 — Korean label, no positive letter-spacing
        heroRatingEyebrow: {
          color: Colors.white,
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightSemiBold,
        },
        heroRatingValue: {
          color: Colors.white,
          fontSize: typography.sizes.size34,
          fontWeight: Typography.weightExtraBold,
          letterSpacing: -1.5,
          lineHeight: typography.lineHeight(Typography.size34, 1.1),
          marginTop: 4,
        },
        heroDeltaPill: {
          backgroundColor: withAlpha(Colors.white, '2E'),
          paddingHorizontal: Spacing.md,
          paddingVertical: 5,
          borderRadius: Radius.pill,
          borderWidth: 1,
          borderColor: withAlpha(Colors.white, '40'),
          marginBottom: 6,
          flexShrink: 0,
        },
        heroDeltaText: {
          color: Colors.white,
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
        },
        heroStatsGrid: {
          marginTop: Spacing.lg,
          flexDirection: 'row',
          backgroundColor: withAlpha(Colors.white, '1A'),
          borderRadius: Radius.md,
          paddingVertical: Spacing.md,
          paddingHorizontal: Spacing.xs,
          borderWidth: 1,
          borderColor: withAlpha(Colors.white, '26'),
        },
        heroStatCell: {
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: Spacing.xs,
        },
        heroStatCellDivider: {
          borderLeftWidth: StyleSheet.hairlineWidth,
          borderLeftColor: withAlpha(Colors.white, '2E'),
        },
        heroStatValue: {
          color: Colors.white,
          fontSize: typography.sizes.size18,
          fontWeight: Typography.weightExtraBold,
        },
        heroStatLabel: {
          color: Colors.white,
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightMedium,
          lineHeight: typography.lineHeight(Typography.size11, 1.45),
          marginTop: 2,
        },

        // ── Sections ────────────────────────────────────
        section: {
          paddingHorizontal: Spacing.xl,
          paddingTop: Spacing.xl,
          gap: Spacing.md,
        },
        sectionHeader: {
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        },
        sectionTitle: {
          fontSize: typography.sizes.size18,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        sectionMeta: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightSemiBold,
          color: Colors.textMuted,
        },

        // ── Quick Start ────────────────────────────────
        quickStartButton: {
          backgroundColor: Colors.primaryStrong,
          paddingVertical: Spacing.lg,
          paddingHorizontal: Spacing.xl,
          borderRadius: Radius.lg,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: Colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 4,
        },
        quickStartLeft: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: Spacing.sm,
          flex: 1,
          minWidth: 0,
        },
        quickStartIconBubble: {
          width: 32,
          height: 32,
          borderRadius: Radius.sm,
          backgroundColor: withAlpha(Colors.white, '38'),
          alignItems: 'center',
          justifyContent: 'center',
        },
        quickStartIcon: {
          color: Colors.white,
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightBold,
        },
        quickStartTitle: {
          color: Colors.white,
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightBold,
          flexShrink: 1,
        },
        quickStartMeta: {
          color: Colors.white,
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightSemiBold,
          marginLeft: Spacing.sm,
        },

        // ── Type cards ─────────────────────────────────
        typeList: {
          gap: Spacing.sm,
        },
        typeCard: {
          backgroundColor: Colors.surface,
          borderRadius: Radius.lg,
          borderWidth: 1,
          borderColor: Colors.borderLight,
          padding: Spacing.md,
          flexDirection: 'row',
          alignItems: 'center',
          gap: Spacing.md,
          shadowColor: Colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.04,
          shadowRadius: 6,
          elevation: 2,
        },
        typeBadge: {
          width: 48,
          height: 48,
          borderRadius: Radius.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        typeBadgeText: {
          color: Colors.white,
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightExtraBold,
        },
        typeBody: {
          flex: 1,
          minWidth: 0,
        },
        typeLabel: {
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightBold,
          color: Colors.textPrimary,
        },
        typeDesc: {
          fontSize: typography.sizes.size12,
          color: Colors.textMuted,
          marginTop: 2,
        },
        typeRight: {
          alignItems: 'flex-end',
        },
        typeTier: {
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightBold,
        },
        typeRating: {
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
          marginTop: 1,
        },

        // ── Guest card ─────────────────────────────────
        guestCard: {
          backgroundColor: Colors.warningLight,
          borderRadius: Radius.lg,
          borderWidth: 1,
          borderColor: Colors.warningBorder,
          padding: Spacing.lg,
          gap: Spacing.sm,
        },
        guestCardTitle: {
          fontSize: typography.sizes.size15,
          fontWeight: Typography.weightExtraBold,
          color: Colors.warningDark,
        },
        guestCardBody: {
          fontSize: typography.sizes.size13,
          color: Colors.hintText,
          lineHeight: typography.lineHeight(Typography.size13, 1.5),
        },
        guestCardButton: {
          alignSelf: 'flex-start',
          paddingHorizontal: Spacing.lg,
          paddingVertical: Spacing.sm,
          borderRadius: Radius.md,
          backgroundColor: Colors.warning,
        },
        guestCardButtonText: {
          color: Colors.white,
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
        },

        // ── Storage note ────────────────────────────────
        storageNote: {
          marginTop: Spacing.xxl,
          paddingHorizontal: Spacing.xl,
          fontSize: typography.sizes.size11,
          color: Colors.textFaint,
          textAlign: 'center',
        },
      }),
    [typography],
  );
}
