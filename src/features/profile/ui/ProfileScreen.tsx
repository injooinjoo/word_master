import React, { useEffect, useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { Colors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import {
  Button,
  ResponsiveContainer,
  ScreenCard,
  TextField,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
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
  onClose: () => void;
}

interface ProfileScreenProps extends CharacterProfileEditorProps {}

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
              activeOpacity={0.85}
              onPress={() => onSelect(option.value)}
              style={[
                styles.optionPill,
                active && styles.optionPillActive,
              ]}
            >
              {option.swatch ? (
                <View
                  style={[
                    styles.optionSwatch,
                    { backgroundColor: option.swatch },
                  ]}
                />
              ) : null}
              <Text
                style={[
                  styles.optionLabel,
                  active && styles.optionLabelActive,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export function CharacterProfileEditor({
  initialProfile,
  title = '캐릭터 꾸미기',
  subtitle = '프리셋 파츠와 취향 한 줄 소개를 저장할 수 있어요.',
  viewerLabel = '내 캐릭터',
  storageLabel = '이 프로필은 현재 세션 기준으로 저장됩니다.',
  onSave,
  onClose,
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
      setFeedback({
        kind: 'success',
        text: result.notice,
      });
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
        <Text style={sharedTextStyles.eyebrow}>Profile Studio</Text>
        <Text style={[styles.headerTitle, { fontSize: typography.sizes.size23 }]}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <CharacterSummaryCard
        profile={draft}
        title={viewerLabel}
        caption={storageLabel}
      />

      <ScreenCard style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>
          아바타 프리셋
        </Text>
        <OptionGroup<HairStyleId>
          title="헤어 스타일"
          options={CHARACTER_HAIR_STYLE_OPTIONS}
          value={draft.avatar.hairStyle}
          onSelect={(value) =>
            setDraft((current) => ({
              ...current,
              avatar: { ...current.avatar, hairStyle: value },
            }))
          }
        />
        <OptionGroup<HairColorId>
          title="헤어 컬러"
          options={CHARACTER_HAIR_COLOR_OPTIONS}
          value={draft.avatar.hairColor}
          onSelect={(value) =>
            setDraft((current) => ({
              ...current,
              avatar: { ...current.avatar, hairColor: value },
            }))
          }
        />
        <OptionGroup<ExpressionId>
          title="표정"
          options={CHARACTER_EXPRESSION_OPTIONS}
          value={draft.avatar.expression}
          onSelect={(value) =>
            setDraft((current) => ({
              ...current,
              avatar: { ...current.avatar, expression: value },
            }))
          }
        />
        <OptionGroup<OutfitColorId>
          title="의상 컬러"
          options={CHARACTER_OUTFIT_COLOR_OPTIONS}
          value={draft.avatar.outfitColor}
          onSelect={(value) =>
            setDraft((current) => ({
              ...current,
              avatar: { ...current.avatar, outfitColor: value },
            }))
          }
        />
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={[styles.sectionTitle, { fontSize: typography.sizes.size15 }]}>
          취향 한 줄 소개
        </Text>
        <TextField
          label="좋아하는 것"
          placeholder="예: 퍼즐, 민트색, 빠른 템포"
          maxLength={CHARACTER_TEXT_LIMIT}
          value={draft.likes}
          editable={!saving}
          onChangeText={(value) =>
            setDraft((current) =>
              sanitizeCharacterProfile({
                ...current,
                likes: value,
              }),
            )
          }
        />
        <TextField
          label="싫어하는 것"
          placeholder="예: 시간 초과, 소음, 느린 진행"
          maxLength={CHARACTER_TEXT_LIMIT}
          value={draft.dislikes}
          editable={!saving}
          onChangeText={(value) =>
            setDraft((current) =>
              sanitizeCharacterProfile({
                ...current,
                dislikes: value,
              }),
            )
          }
        />

        {feedback ? (
          <View
            style={[
              styles.feedbackBox,
              feedback.kind === 'success' ? styles.feedbackSuccess : styles.feedbackError,
            ]}
          >
            <Text
              style={[
                styles.feedbackText,
                feedback.kind === 'success' ? styles.feedbackSuccessText : styles.feedbackErrorText,
              ]}
            >
              {feedback.text}
            </Text>
          </View>
        ) : null}

        <View style={styles.actions}>
          <Button
            label="저장"
            variant="primary"
            disabled={!canSave}
            loading={saving}
            onPress={onSavePressed}
          />
          <Button
            label="닫기"
            variant="secondary"
            disabled={saving}
            onPress={onClose}
          />
        </View>
      </ScreenCard>
    </View>
  );
}

export function ProfileScreen(props: ProfileScreenProps) {
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
          <CharacterProfileEditor {...props} />
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
  editorContent: {
    gap: Spacing.md,
  },
  header: {
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
    maxWidth: 360,
  },
  sectionCard: {
    gap: Spacing.md,
  },
  sectionTitle: {
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
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
    minHeight: 40,
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
