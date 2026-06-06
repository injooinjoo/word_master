import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { QuizService } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS, TRACKED_QUIZ_TYPES } from '../../../services/quizService';
import {
  CHARACTER_TEXT_LIMIT,
  CHARACTER_EXPRESSION_OPTIONS,
  CHARACTER_HAIR_COLOR_OPTIONS,
  CHARACTER_HAIR_STYLE_OPTIONS,
  CHARACTER_OUTFIT_COLOR_OPTIONS,
  sanitizeCharacterProfile,
  type CharacterProfile,
  type CharacterOption,
  type ExpressionId,
  type HairColorId,
  type HairStyleId,
  type OutfitColorId,
} from '../../../shared/models/characterProfile';
import { GradeTable } from '../../../shared/constants/gradeTable';
import {
  estimateLearningRankLabel,
  resolveLearningPositionLabel,
} from '../../../shared/models/learningPosition';
import { Colors, QuizTypeColors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import {
  Button,
  ResponsiveContainer,
  ScreenCard,
  TextField,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
import { CharacterAvatar } from '../components/CharacterAvatar';
import { CharacterSummaryCard } from '../components/CharacterSummaryCard';

export interface CharacterProfileSaveResponse {
  profile: CharacterProfile;
  notice: string;
}

interface CharacterProfileEditorProps {
  initialProfile: CharacterProfile;
  title?: string;
  subtitle?: string;
  viewerLabel?: string;
  storageLabel?: string;
  onSave: (profile: CharacterProfile) => Promise<CharacterProfileSaveResponse>;
  onBackToOverview: () => void;
  onDismissProfile?: () => void;
}

interface ProfileScreenProps extends Omit<CharacterProfileEditorProps, 'onBackToOverview' | 'onDismissProfile'> {
  quizService: QuizService;
  onClose: () => void;
}

const TRACK_ORDER = [...TRACKED_QUIZ_TYPES];

function OptionGroup<Value extends string>({
  title,
  options,
  value,
  onSelect,
}: {
  title: string;
  options: CharacterOption<Value>[];
  value: Value;
  onSelect: (value: Value) => void;
}) {
  const typography = useResponsiveTypography();

  return (
    <View style={styles.group}>
      <Text style={[styles.groupTitle, { fontSize: typography.sizes.size13 }]}>{title}</Text>
      <View style={styles.groupOptions}>
        {options.map((option) => {
          const active = option.value === value;
          return (
            <TouchableOpacity
              key={option.value}
              accessibilityRole="button"
              accessibilityLabel={`${title} ${option.label}`}
              accessibilityState={{ selected: active }}
              activeOpacity={0.85}
              onPress={() => onSelect(option.value)}
              style={[styles.optionPill, active && styles.optionPillActive]}
            >
              {option.swatch ? (
                <View style={[styles.optionSwatch, { backgroundColor: option.swatch }]} />
              ) : null}
              <Text style={[styles.optionLabel, active && styles.optionLabelActive]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

function masteryCopy(rating: number): string {
  if (rating >= 2050) return '고난도 어휘까지 안정적으로 다루고 있어요.';
  if (rating >= 1650) return '고난도 단어와 문맥 문제로 확장할 차례예요.';
  if (rating >= 1250) return '기본기는 잡혔고 약점 유형 보강이 중요해요.';
  if (rating >= 950) return '핵심 어휘를 반복하며 정확도를 끌어올리는 구간이에요.';
  return '기초 단어를 많이 만나며 학습 데이터를 쌓는 중이에요.';
}

function ProfileOverview({
  profile,
  quizService,
  viewerLabel,
  storageLabel,
  onOpenSettings,
  onClose,
}: {
  profile: CharacterProfile;
  quizService: QuizService;
  viewerLabel: string;
  storageLabel: string;
  onOpenSettings: () => void;
  onClose: () => void;
}) {
  const typography = useResponsiveTypography();
  const sharedTextStyles = useSharedTextStyles();
  const summary = quizService.resultSummary;
  const dashboard = quizService.learningDashboard;
  const rating = Math.round(summary.compositeRating);
  const tierLabel = GradeTable.gradeLabel(rating);
  const tierDescriptor = GradeTable.gradeDescriptor(rating);

  const trackRows = TRACK_ORDER.map((type) => {
    const row = summary.byType[type];
    return {
      type,
      label: QUIZ_TYPE_LABELS[type],
      tier: row.tierLabel,
      rating: Math.round(row.rating),
      attempts: row.attempts,
      accuracy: row.accuracyPercent,
      color: QuizTypeColors[type],
    };
  });

  const totalAttempts = trackRows.reduce((sum, row) => sum + row.attempts, 0);
  const totalCorrect = trackRows.reduce((sum, row) => {
    const typeSummary = summary.byType[row.type];
    return sum + typeSummary.correct;
  }, 0);
  const accuracyPercent = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const attemptedRows = trackRows.filter((row) => row.attempts > 0);
  const strongest = attemptedRows.length > 0 ? [...attemptedRows].sort((a, b) => b.rating - a.rating)[0] : null;
  const weakest = attemptedRows.length > 0 ? [...attemptedRows].sort((a, b) => a.rating - b.rating)[0] : null;

  const topStats = [
    { label: '현재 위치', value: resolveLearningPositionLabel(rating), note: tierDescriptor },
    { label: '점수 기반 위치', value: estimateLearningRankLabel(rating), note: '로컬 학습 점수 기준' },
    { label: '티어', value: tierLabel, note: `${rating.toLocaleString()}점` },
  ];

  return (
    <View style={styles.overviewContent}>
      <View style={styles.headerRow}>
        <View style={styles.headerCopy}>
          <Text style={sharedTextStyles.eyebrow}>MY LEARNING PROFILE</Text>
          <Text style={[styles.headerTitle, { fontSize: typography.sizes.size23 }]}>
            나의 학습 위치
          </Text>
          <Text style={styles.headerSubtitle}>
            점수·티어·약점 흐름을 먼저 보고, 캐릭터 꾸미기는 세부 설정에서 바꿔요.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="프로필 닫기"
          activeOpacity={0.85}
        >
          <Text style={styles.closeButtonText}>닫기</Text>
        </TouchableOpacity>
      </View>

      <ScreenCard style={styles.rankHeroCard}>
        <View style={styles.rankHeroTop}>
          <View style={styles.rankAvatarWrap}>
            <CharacterAvatar profile={profile} size={112} />
          </View>
          <View style={styles.rankHeroCopy}>
            <Text style={styles.viewerLabel}>{viewerLabel}</Text>
            <Text style={styles.rankHeroTitle}>{tierLabel}</Text>
            <Text style={styles.rankHeroBody}>{masteryCopy(rating)}</Text>
          </View>
        </View>
        <View style={styles.statGrid}>
          {topStats.map((stat) => (
            <View
              key={stat.label}
              style={styles.statCard}
              accessible
              accessibilityLabel={`${stat.label}, ${stat.value}, ${stat.note}`}
            >
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statNote}>{stat.note}</Text>
            </View>
          ))}
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>학습 요약</Text>
          <Text style={styles.sectionHint}>오늘 먼저 볼 지표</Text>
        </View>
        <View style={styles.metricRow}>
          <View style={styles.metricItem} accessible accessibilityLabel={`푼 문제 ${totalAttempts.toLocaleString()}개`}>
            <Text style={styles.metricValue}>{totalAttempts.toLocaleString()}</Text>
            <Text style={styles.metricLabel}>푼 문제</Text>
          </View>
          <View style={styles.metricItem} accessible accessibilityLabel={`정답률 ${accuracyPercent}퍼센트`}>
            <Text style={styles.metricValue}>{accuracyPercent}%</Text>
            <Text style={styles.metricLabel}>정답률</Text>
          </View>
          <View style={styles.metricItem} accessible accessibilityLabel={`복습 대기 ${dashboard.dueReviewCount}개`}>
            <Text style={styles.metricValue}>{dashboard.dueReviewCount}</Text>
            <Text style={styles.metricLabel}>복습 대기</Text>
          </View>
        </View>
        <View style={styles.focusBox}>
          <Text style={styles.focusLabel}>지금 집중할 부분</Text>
          <Text style={styles.focusText}>
            {weakest
              ? `${weakest.label} 유형을 먼저 보강하면 점수 개선에 도움이 돼요.`
              : '첫 학습을 시작하면 약점 유형을 바로 잡아줄게요.'}
          </Text>
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>유형별 위치</Text>
          <Text style={styles.sectionHint}>강점/약점</Text>
        </View>
        <View style={styles.trackList}>
          {trackRows.map((track) => {
            const isStrongest = strongest?.type === track.type;
            const isWeakest = weakest?.type === track.type;
            return (
              <View
                key={track.type}
                style={styles.trackCard}
                accessible
                accessibilityLabel={`${track.label}, ${track.tier}, ${track.rating.toLocaleString()}점, 정답률 ${track.accuracy}퍼센트, ${isStrongest ? '강점' : isWeakest ? '보강 필요' : '유지'}`}
              >
                <View style={[styles.trackBadge, { backgroundColor: track.color }]}>
                  <Text style={styles.trackBadgeText}>{track.label}</Text>
                </View>
                <View style={styles.trackBody}>
                  <Text style={styles.trackTitle}>{track.tier}</Text>
                  <Text style={styles.trackMeta}>
                    {track.rating.toLocaleString()}점 · 정답률 {track.accuracy}%
                  </Text>
                </View>
                <Text style={styles.trackTag}>
                  {isStrongest ? '강점' : isWeakest ? '보강' : '유지'}
                </Text>
              </View>
            );
          })}
        </View>
      </ScreenCard>

      <ScreenCard style={styles.settingsCard}>
        <View style={styles.settingsCopy}>
          <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>프로필 세부 설정</Text>
          <Text style={styles.settingsBody}>
            아바타 프리셋, 좋아하는 것, 싫어하는 것은 여기서 따로 관리해요.
          </Text>
          <Text style={styles.storageNote}>{storageLabel}</Text>
        </View>
        <Button label="세부 설정 열기" variant="secondary" onPress={onOpenSettings} />
      </ScreenCard>
    </View>
  );
}

export function CharacterProfileEditor({
  initialProfile,
  title = '프로필 세부 설정',
  subtitle = '아바타 프리셋과 취향 정보는 학습 프로필의 세부 설정에서 관리해요.',
  viewerLabel = '내 캐릭터',
  storageLabel = '이 프로필은 현재 세션 기준으로 저장됩니다.',
  onSave,
  onBackToOverview,
  onDismissProfile,
}: CharacterProfileEditorProps) {
  const typography = useResponsiveTypography();
  const sharedTextStyles = useSharedTextStyles();
  const [draft, setDraft] = useState<CharacterProfile>(initialProfile);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    setDraft(initialProfile);
    setFeedback(null);
  }, [initialProfile]);

  const canSave = useMemo(() => !saving, [saving]);

  const onSavePressed = async () => {
    setSaving(true);
    setFeedback(null);

    try {
      const result = await onSave(draft);
      const sanitized = sanitizeCharacterProfile(result.profile);
      setDraft(sanitized);
      setFeedback({ kind: 'success', text: result.notice });
    } catch (error) {
      setFeedback({
        kind: 'error',
        text: error instanceof Error ? error.message : '프로필 저장에 실패했습니다.',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.editorContent}>
      <View style={styles.header}>
        <Text style={sharedTextStyles.eyebrow}>Profile Settings</Text>
        <Text style={[styles.headerTitle, { fontSize: typography.sizes.size23 }]}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <CharacterSummaryCard profile={draft} title={viewerLabel} caption={storageLabel} />

      <ScreenCard style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>아바타 프리셋</Text>
        <OptionGroup<HairStyleId>
          title="헤어 스타일"
          options={CHARACTER_HAIR_STYLE_OPTIONS}
          value={draft.avatar.hairStyle}
          onSelect={(value) =>
            setDraft((current) => ({ ...current, avatar: { ...current.avatar, hairStyle: value } }))
          }
        />
        <OptionGroup<HairColorId>
          title="헤어 컬러"
          options={CHARACTER_HAIR_COLOR_OPTIONS}
          value={draft.avatar.hairColor}
          onSelect={(value) =>
            setDraft((current) => ({ ...current, avatar: { ...current.avatar, hairColor: value } }))
          }
        />
        <OptionGroup<ExpressionId>
          title="표정"
          options={CHARACTER_EXPRESSION_OPTIONS}
          value={draft.avatar.expression}
          onSelect={(value) =>
            setDraft((current) => ({ ...current, avatar: { ...current.avatar, expression: value } }))
          }
        />
        <OptionGroup<OutfitColorId>
          title="의상 컬러"
          options={CHARACTER_OUTFIT_COLOR_OPTIONS}
          value={draft.avatar.outfitColor}
          onSelect={(value) =>
            setDraft((current) => ({ ...current, avatar: { ...current.avatar, outfitColor: value } }))
          }
        />
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>취향 한 줄 소개</Text>
        <TextField
          label="좋아하는 것"
          placeholder="예: 퍼즐, 민트색, 빠른 템포"
          maxLength={CHARACTER_TEXT_LIMIT}
          value={draft.likes}
          editable={!saving}
          onChangeText={(value) =>
            setDraft((current) => sanitizeCharacterProfile({ ...current, likes: value }))
          }
        />
        <TextField
          label="싫어하는 것"
          placeholder="예: 시간 초과, 소음, 느린 진행"
          maxLength={CHARACTER_TEXT_LIMIT}
          value={draft.dislikes}
          editable={!saving}
          onChangeText={(value) =>
            setDraft((current) => sanitizeCharacterProfile({ ...current, dislikes: value }))
          }
        />

        {feedback ? (
          <View style={[styles.feedbackBox, feedback.kind === 'success' ? styles.feedbackSuccess : styles.feedbackError]}>
            <Text style={[styles.feedbackText, feedback.kind === 'success' ? styles.feedbackSuccessText : styles.feedbackErrorText]}>
              {feedback.text}
            </Text>
          </View>
        ) : null}

        <View style={styles.actions}>
          <Button label="저장" variant="primary" disabled={!canSave} loading={saving} onPress={onSavePressed} />
          <Button label="학습 프로필로 돌아가기" variant="secondary" disabled={saving} onPress={onBackToOverview} />
          {onDismissProfile ? (
            <Button label="프로필 닫기" variant="secondary" disabled={saving} onPress={onDismissProfile} />
          ) : null}
        </View>
      </ScreenCard>
    </View>
  );
}

export function ProfileScreen({ quizService, onClose, ...editorProps }: ProfileScreenProps) {
  const [mode, setMode] = useState<'overview' | 'settings'>('overview');
  const previousMode = useRef(mode);
  const viewerLabel = editorProps.viewerLabel ?? '내 캐릭터';
  const storageLabel = editorProps.storageLabel ?? '이 프로필은 현재 세션 기준으로 저장됩니다.';

  useEffect(() => {
    if (previousMode.current === mode) return;
    previousMode.current = mode;
    AccessibilityInfo.announceForAccessibility(
      mode === 'overview' ? '학습 프로필 화면입니다.' : '프로필 세부 설정 화면입니다.',
    );
  }, [mode]);

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer maxWidth={720}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.backdropTop} />
          <View style={styles.backdropBottom} />
          {mode === 'overview' ? (
            <ProfileOverview
              profile={editorProps.initialProfile}
              quizService={quizService}
              viewerLabel={viewerLabel}
              storageLabel={storageLabel}
              onOpenSettings={() => setMode('settings')}
              onClose={onClose}
            />
          ) : (
            <CharacterProfileEditor
              {...editorProps}
              viewerLabel={viewerLabel}
              storageLabel={storageLabel}
              onBackToOverview={() => setMode('overview')}
              onDismissProfile={onClose}
            />
          )}
        </ScrollView>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xxxl,
  },
  backdropTop: {
    position: 'absolute',
    top: -56,
    right: -24,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: withAlpha(Colors.primary, '16'),
  },
  backdropBottom: {
    position: 'absolute',
    left: -44,
    bottom: 64,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: withAlpha(Colors.warning, '12'),
  },
  overviewContent: {
    gap: Spacing.md,
  },
  editorContent: {
    gap: Spacing.md,
  },
  header: {
    gap: Spacing.xs,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  headerCopy: {
    flex: 1,
    gap: Spacing.xs,
  },
  headerTitle: {
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
    maxWidth: 430,
  },
  closeButton: {
    minHeight: 44,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
  },
  rankHeroCard: {
    gap: Spacing.lg,
    overflow: 'hidden',
  },
  rankHeroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  rankAvatarWrap: {
    width: 124,
    height: 124,
    borderRadius: Radius.xxl,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    flexShrink: 0,
  },
  rankHeroCopy: {
    flex: 1,
    minWidth: 180,
  },
  viewerLabel: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  rankHeroTitle: {
    marginTop: 2,
    fontSize: Typography.size30,
    lineHeight: 34,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  rankHeroBody: {
    marginTop: Spacing.xs,
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  statCard: {
    flexGrow: 1,
    flexBasis: 150,
    minHeight: 96,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surfaceTint,
    padding: Spacing.md,
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  statValue: {
    marginTop: Spacing.xs,
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  statNote: {
    marginTop: 2,
    fontSize: Typography.size11,
    lineHeight: 16,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
  },
  sectionCard: {
    gap: Spacing.md,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  sectionTitle: {
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  sectionHint: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  metricRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  metricItem: {
    flex: 1,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.primaryStrong,
  },
  metricLabel: {
    marginTop: 2,
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
  },
  focusBox: {
    borderRadius: Radius.lg,
    backgroundColor: Colors.warningLight,
    borderWidth: 1,
    borderColor: Colors.warningBorder,
    padding: Spacing.md,
  },
  focusLabel: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.warningDark,
  },
  focusText: {
    marginTop: 2,
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightSemiBold,
    color: Colors.hintText,
  },
  trackList: {
    gap: Spacing.sm,
  },
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surfaceTint,
    padding: Spacing.md,
  },
  trackBadge: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackBadgeText: {
    color: Colors.white,
    fontSize: Typography.size12,
    fontWeight: Typography.weightExtraBold,
  },
  trackBody: {
    flex: 1,
    minWidth: 0,
  },
  trackTitle: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  trackMeta: {
    marginTop: 2,
    fontSize: Typography.size12,
    fontWeight: Typography.weightMedium,
    color: Colors.textMuted,
  },
  trackTag: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightBold,
    color: Colors.primaryStrong,
  },
  settingsCard: {
    gap: Spacing.md,
  },
  settingsCopy: {
    gap: Spacing.xs,
  },
  settingsBody: {
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
  },
  storageNote: {
    fontSize: Typography.size11,
    lineHeight: 16,
    fontWeight: Typography.weightMedium,
    color: Colors.textFaint,
  },
  group: {
    gap: Spacing.sm,
  },
  groupTitle: {
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  groupOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  optionPill: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surfaceTint,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  optionPillActive: {
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryLight,
  },
  optionSwatch: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: withAlpha(Colors.textPrimary, '24'),
  },
  optionLabel: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
  },
  optionLabelActive: {
    color: Colors.primaryStrong,
  },
  feedbackBox: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  feedbackSuccess: {
    backgroundColor: Colors.correctLight,
    borderColor: withAlpha(Colors.correct, '34'),
  },
  feedbackError: {
    backgroundColor: Colors.wrongLight,
    borderColor: withAlpha(Colors.wrong, '34'),
  },
  feedbackText: {
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightBold,
  },
  feedbackSuccessText: {
    color: Colors.correctDark,
  },
  feedbackErrorText: {
    color: Colors.wrongDark,
  },
  actions: {
    gap: Spacing.sm,
  },
});
