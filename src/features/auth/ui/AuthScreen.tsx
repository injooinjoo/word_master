import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { signInWithEmail, signUpWithEmail } from '../../../services/authService';
import type { CharacterProfile } from '../../../shared/models/characterProfile';
import { AppExternalLinks } from '../../../shared/constants/externalLinks';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import {
  Button,
  ResponsiveContainer,
  ScreenCard,
  TextField,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
import { CharacterSummaryCard } from '../../profile/components/CharacterSummaryCard';

type AuthMode = 'signIn' | 'signUp';

interface AuthPreviewState {
  mode?: AuthMode;
  email?: string;
  password?: string;
  loading?: boolean;
  error?: string | null;
  message?: string | null;
  locked?: boolean;
}

interface AuthScreenProps {
  previewState?: AuthPreviewState;
  characterProfile: CharacterProfile;
  authEnabled?: boolean;
  authDisabledReason?: string | null;
  allowGuestMode?: boolean;
  onContinueAsGuest?: () => void;
  onOpenProfile?: () => void;
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function AuthScreen({
  previewState,
  characterProfile,
  authEnabled = true,
  authDisabledReason = null,
  allowGuestMode = false,
  onContinueAsGuest,
  onOpenProfile,
}: AuthScreenProps) {
  const styles = useAuthStyles();
  const sharedTextStyles = useSharedTextStyles();
  const { width: windowWidth } = useWindowDimensions();
  const contentMaxWidth = windowWidth >= 1180 ? 760 : windowWidth >= 820 ? 700 : 640;
  const locked = previewState?.locked ?? false;
  const [mode, setMode] = useState<AuthMode>(previewState?.mode ?? 'signIn');
  const [email, setEmail] = useState(previewState?.email ?? '');
  const [password, setPassword] = useState(previewState?.password ?? '');
  const [loading, setLoading] = useState(previewState?.loading ?? false);
  const [error, setError] = useState<string | null>(previewState?.error ?? null);
  const [message, setMessage] = useState<string | null>(previewState?.message ?? null);

  const title = mode === 'signIn' ? '로그인' : '회원가입';
  const subtitle =
    mode === 'signIn'
      ? '로그인하면 학습 기록과 캐릭터 프로필을 계정에 이어갈 수 있어요.'
      : '몇 초 만에 시작하고 학습 기록을 계정에 저장하세요.';
  const submitLabel = mode === 'signIn' ? '로그인' : '가입하기';
  const guestDescription = authEnabled
    ? '로그인 없이 계속 풀어도 되고, 필요할 때만 로그인하면 돼요.'
    : '로그인 없이 바로 학습을 시작할 수 있어요.';
  const guestButtonLabel = authEnabled ? '게스트로 계속하기' : '바로 시작';
  const compactDisabledReason =
    authDisabledReason != null && authDisabledReason.trim().length > 0
      ? authDisabledReason
      : guestDescription;

  const canSubmit = useMemo(
    () => authEnabled && normalizeEmail(email).includes('@') && password.length >= 6 && !loading,
    [authEnabled, email, password, loading],
  );

  const onSubmit = async () => {
    if (locked || !authEnabled) return;
    const normalizedEmail = normalizeEmail(email);

    if (!normalizedEmail || !normalizedEmail.includes('@')) {
      setError('올바른 이메일 주소를 입력해주세요.');
      return;
    }
    if (password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'signIn') {
        await signInWithEmail(normalizedEmail, password);
        setMessage('로그인되었습니다.');
      } else {
        const result = await signUpWithEmail(normalizedEmail, password);
        if (result.needsEmailConfirmation) {
          setMessage('가입 완료. 이메일 인증 후 로그인해주세요.');
          setMode('signIn');
        } else {
          setMessage('가입 및 로그인 완료.');
        }
      }
    } catch (submitError) {
      const msg = submitError instanceof Error ? submitError.message : '요청 처리에 실패했습니다.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer maxWidth={contentMaxWidth}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.backdropTop} />
            <View style={styles.backdropBottom} />

            <View style={styles.headerWrap}>
              <View style={styles.brandTag}>
                <Text style={styles.brandTagText}>Adaptive</Text>
              </View>
              <Text style={styles.brand}>Word Master</Text>
              <Text style={styles.subtitle}>
                실력 변화에 맞춰 다음 단어를 고르는 학습 앱.
              </Text>
            </View>

            <View style={styles.featureRow}>
              {['실력 반영', '기록 저장'].map((item) => (
                <View key={item} style={styles.featureChip}>
                  <Text style={styles.featureChipText}>{item}</Text>
                </View>
              ))}
            </View>

            <ScreenCard style={styles.formCard}>
              <View style={styles.formHeader}>
                <Text style={sharedTextStyles.eyebrow}>
                  {authEnabled ? 'Account' : 'Preview'}
                </Text>
                <Text style={styles.formTitle}>{authEnabled ? title : '바로 학습하기'}</Text>
                <Text style={styles.formSubtitle}>
                  {authEnabled
                    ? subtitle
                    : compactDisabledReason}
                </Text>
              </View>

              {authEnabled ? (
                <>
                  <View style={styles.modeSwitch}>
                    {([
                      ['signIn', '로그인'],
                      ['signUp', '회원가입'],
                    ] as const).map(([value, label]) => {
                      const active = mode === value;
                      return (
                        <TouchableOpacity
                          key={value}
                          accessibilityRole="tab"
                          accessibilityLabel={label}
                          accessibilityState={{ selected: active }}
                          style={[styles.modeButton, active && styles.modeButtonActive]}
                          onPress={() => {
                            if (locked) return;
                            setMode(value);
                            setError(null);
                            setMessage(null);
                          }}
                          activeOpacity={0.85}
                        >
                          <Text style={[styles.modeButtonText, active && styles.modeButtonTextActive]}>
                            {label}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  <TextField
                    label="이메일"
                    placeholder="you@example.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    editable={!locked && !loading}
                    onChangeText={setEmail}
                  />
                  <TextField
                    label="비밀번호"
                    placeholder="6자 이상 입력"
                    secureTextEntry
                    value={password}
                    editable={!locked && !loading}
                    onChangeText={setPassword}
                  />

                  {!!error && (
                    <View style={styles.feedbackError}>
                      <Text style={styles.feedbackErrorText}>{error}</Text>
                    </View>
                  )}
                  {!!message && (
                    <View style={styles.feedbackSuccess}>
                      <Text style={styles.feedbackSuccessText}>{message}</Text>
                    </View>
                  )}

                  <Button
                    variant="primary"
                    label={submitLabel}
                    loading={loading}
                    disabled={!canSubmit}
                    onPress={onSubmit}
                    style={styles.submitButton}
                  />
                </>
              ) : (
                <View style={styles.guestOnlyNotice}>
                  <Text style={styles.guestOnlyNoticeTitle}>게스트 모드만 사용 가능</Text>
                  <Text style={styles.guestOnlyNoticeText}>{guestDescription}</Text>
                </View>
              )}

              {allowGuestMode && onContinueAsGuest && (
                <View style={styles.guestSection}>
                  {authEnabled && <View style={styles.guestDivider} />}
                  <Text style={styles.guestTitle}>게스트로 계속하기</Text>
                  <Text style={styles.guestText}>{guestDescription}</Text>
                  <Button
                    variant={authEnabled ? 'secondary' : 'primary'}
                    label={guestButtonLabel}
                    onPress={onContinueAsGuest}
                    style={styles.guestButton}
                  />
                </View>
              )}

              {onOpenProfile && (
                <View style={styles.profileSection}>
                  <CharacterSummaryCard
                    profile={characterProfile}
                    title="시작 전 내 캐릭터"
                    caption="퀴즈 전에도 꾸미기와 좋아/싫어 프로필을 먼저 저장할 수 있어요."
                    compact
                  />
                  <Button
                    variant="ghost"
                    label="캐릭터 꾸미기"
                    onPress={onOpenProfile}
                    style={styles.profileButton}
                  />
                </View>
              )}

              {authEnabled && (
                <View style={styles.footnote}>
                  <Text style={styles.footnoteTitle}>로그인 시</Text>
                  <Text style={styles.footnoteText}>학습 기록 · 캐릭터 프로필 동기화</Text>
                </View>
              )}

              <View style={styles.resourcesSection}>
                <Text style={styles.resourcesTitle}>지원 및 개인정보</Text>
                <Text style={styles.resourcesText}>
                  게스트 학습과 선택 로그인에 대한 자세한 안내는 지원 페이지와 개인정보처리방침에서 확인할 수 있습니다.
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
                <Text style={styles.resourcesMeta}>문의: {AppExternalLinks.supportEmail}</Text>
              </View>
            </ScreenCard>
          </View>
        </ScrollView>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

function useAuthStyles() {
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
          flexGrow: 1,
        },
        container: {
          flex: 1,
          width: '100%',
          alignSelf: 'center',
          paddingHorizontal: Spacing.lg,
          paddingTop: Spacing.xxl,
          paddingBottom: Spacing.xxxl,
          gap: Spacing.md,
          justifyContent: 'center',
          overflow: 'hidden',
        },
        backdropTop: {
          position: 'absolute',
          top: -64,
          right: -28,
          width: 180,
          height: 180,
          borderRadius: 90,
          backgroundColor: withAlpha(Colors.primary, '18'),
        },
        backdropBottom: {
          position: 'absolute',
          left: -44,
          bottom: 80,
          width: 140,
          height: 140,
          borderRadius: 70,
          backgroundColor: withAlpha(Colors.warning, '12'),
        },
        headerWrap: {
          gap: 6,
        },
        brand: {
          fontSize: typography.sizes.size34,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
          letterSpacing: -0.8,
          lineHeight: typography.lineHeight(Typography.size34, 40 / Typography.size34),
        },
        brandTag: {
          alignSelf: 'flex-start',
          borderRadius: Radius.pill,
          backgroundColor: Colors.primaryLight,
          borderWidth: 1,
          borderColor: Colors.primaryBorder,
          paddingHorizontal: Spacing.md,
          paddingVertical: Spacing.xs,
        },
        brandTagText: {
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightBold,
          color: Colors.primaryStrong,
          letterSpacing: 0.2,
        },
        subtitle: {
          fontSize: typography.sizes.size13,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
          fontWeight: Typography.weightMedium,
          color: Colors.textSecondary,
          maxWidth: 288,
        },
        featureRow: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        },
        featureChip: {
          borderRadius: Radius.pill,
          backgroundColor: Colors.surfaceTint,
          borderWidth: 1,
          borderColor: Colors.borderLight,
          paddingHorizontal: Spacing.md,
          paddingVertical: 6,
        },
        featureChipText: {
          fontSize: typography.sizes.size11,
          fontWeight: Typography.weightBold,
          color: Colors.textMuted,
        },
        formCard: {
          gap: 18,
        },
        formHeader: {
          gap: 6,
        },
        formTitle: {
          fontSize: typography.sizes.size23,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        formSubtitle: {
          fontSize: typography.sizes.size13,
          lineHeight: typography.lineHeight(Typography.size13, 19 / Typography.size13),
          color: Colors.textSecondary,
          fontWeight: Typography.weightMedium,
          maxWidth: 280,
        },
        modeSwitch: {
          flexDirection: 'row',
          padding: Spacing.xs,
          borderRadius: Radius.pill,
          backgroundColor: Colors.surfaceTint,
          borderWidth: 1,
          borderColor: Colors.borderLight,
          gap: Spacing.xs,
        },
        modeButton: {
          flex: 1,
          minHeight: 40,
          borderRadius: Radius.pill,
          justifyContent: 'center',
          alignItems: 'center',
        },
        modeButtonActive: {
          backgroundColor: Colors.surface,
          borderWidth: 1,
          borderColor: Colors.border,
        },
        modeButtonText: {
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          color: Colors.textMuted,
        },
        modeButtonTextActive: {
          color: Colors.textPrimary,
        },
        submitButton: {
          marginTop: Spacing.xs,
          minHeight: 54,
          borderRadius: Radius.xl,
          shadowOpacity: 0.08,
          shadowRadius: 18,
          elevation: 2,
        },
        guestOnlyNotice: {
          gap: Spacing.xs,
          borderRadius: Radius.lg,
          padding: Spacing.md,
          backgroundColor: withAlpha(Colors.warning, '10'),
          borderWidth: 1,
          borderColor: Colors.warningBorder,
        },
        guestOnlyNoticeTitle: {
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          color: Colors.warningDark,
        },
        guestOnlyNoticeText: {
          fontSize: typography.sizes.size12,
          lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
          color: Colors.textSecondary,
          fontWeight: Typography.weightMedium,
        },
        guestSection: {
          gap: Spacing.sm,
        },
        guestDivider: {
          height: 1,
          backgroundColor: Colors.borderLight,
          marginBottom: Spacing.xs,
        },
        guestTitle: {
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          color: Colors.textPrimary,
        },
        guestText: {
          fontSize: typography.sizes.size12,
          lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
          color: Colors.textSecondary,
          fontWeight: Typography.weightMedium,
        },
        guestButton: {
          minHeight: 54,
          borderRadius: Radius.xl,
        },
        profileSection: {
          gap: Spacing.sm,
          borderTopWidth: 1,
          borderTopColor: Colors.borderLight,
          paddingTop: Spacing.md,
        },
        profileButton: {
          minHeight: 50,
          borderRadius: Radius.xl,
        },
        feedbackError: {
          borderRadius: Radius.lg,
          backgroundColor: Colors.wrongLight,
          borderWidth: 1,
          borderColor: withAlpha(Colors.wrong, '35'),
          paddingHorizontal: Spacing.lg,
          paddingVertical: Spacing.md,
        },
        feedbackErrorText: {
          color: Colors.wrongDark,
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
        },
        feedbackSuccess: {
          borderRadius: Radius.lg,
          backgroundColor: Colors.correctLight,
          borderWidth: 1,
          borderColor: withAlpha(Colors.correct, '35'),
          paddingHorizontal: Spacing.lg,
          paddingVertical: Spacing.md,
        },
        feedbackSuccessText: {
          color: Colors.correctDark,
          fontSize: typography.sizes.size13,
          fontWeight: Typography.weightBold,
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
        },
        footnote: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: Colors.borderLight,
          paddingTop: Spacing.md,
          gap: Spacing.md,
        },
        footnoteTitle: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
          color: Colors.textPrimary,
        },
        footnoteText: {
          fontSize: typography.sizes.size12,
          lineHeight: typography.lineHeight(Typography.size12, 18 / Typography.size12),
          color: Colors.textSecondary,
          fontWeight: Typography.weightMedium,
          textAlign: 'right',
        },
        resourcesSection: {
          gap: Spacing.sm,
          borderTopWidth: 1,
          borderTopColor: Colors.borderLight,
          paddingTop: Spacing.md,
        },
        resourcesTitle: {
          fontSize: typography.sizes.size12,
          fontWeight: Typography.weightBold,
          color: Colors.textPrimary,
        },
        resourcesText: {
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
          minWidth: 112,
          paddingHorizontal: Spacing.lg,
        },
        resourcesMeta: {
          fontSize: typography.sizes.size11,
          lineHeight: typography.lineHeight(Typography.size11, 16 / Typography.size11),
          color: Colors.textMuted,
          fontWeight: Typography.weightMedium,
        },
      }),
    [typography],
  );
}
