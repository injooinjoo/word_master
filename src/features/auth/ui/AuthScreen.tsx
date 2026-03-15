import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { signInWithEmail, signUpWithEmail } from '../../../services/authService';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import { Button, ResponsiveContainer, ScreenCard, SharedStyles, TextField } from '../../../shared/ui';

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
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function AuthScreen({ previewState }: AuthScreenProps) {
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
      ? '기록과 랭킹을 이어가려면 계정으로 로그인하세요.'
      : '새 계정을 만들고 적응형 학습 기록을 저장하세요.';
  const submitLabel = mode === 'signIn' ? '학습 시작하기' : '계정 만들기';

  const canSubmit = useMemo(
    () => normalizeEmail(email).includes('@') && password.length >= 6 && !loading,
    [email, password, loading],
  );

  const onSubmit = async () => {
    if (locked) return;
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
      <ResponsiveContainer>
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
                <Text style={styles.brandTagText}>Adaptive Vocabulary</Text>
              </View>
              <Text style={styles.brand}>Word Master</Text>
              <Text style={styles.subtitle}>
                정답률이 아니라 성장 속도를 기준으로 다음 문제를 제안하는 영어 단어 학습 앱.
              </Text>
            </View>

            <View style={styles.featureRow}>
              {['Adaptive', 'Supabase Sync', 'Top 10'].map((item) => (
                <View key={item} style={styles.featureChip}>
                  <Text style={styles.featureChipText}>{item}</Text>
                </View>
              ))}
            </View>

            <ScreenCard style={styles.formCard}>
              <View style={styles.formHeader}>
                <Text style={SharedStyles.eyebrow}>Account Access</Text>
                <Text style={styles.formTitle}>{title}</Text>
                <Text style={styles.formSubtitle}>{subtitle}</Text>
              </View>

              <View style={styles.modeSwitch}>
                {([
                  ['signIn', '로그인'],
                  ['signUp', '회원가입'],
                ] as const).map(([value, label]) => {
                  const active = mode === value;
                  return (
                    <TouchableOpacity
                      key={value}
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

              <View style={styles.footnote}>
                <Text style={styles.footnoteTitle}>왜 계정이 필요한가요?</Text>
                <Text style={styles.footnoteText}>
                  레이팅, 최고 점수, 글로벌 랭킹, 학습 이력을 Supabase에 안전하게 저장합니다.
                </Text>
              </View>
            </ScreenCard>

            <ScreenCard tone="tint" style={styles.infoCard}>
              <Text style={styles.infoTitle}>현재 라운드에서 추적하는 것</Text>
              <Text style={styles.infoText}>
                유형별 Rating, 단어 난이도 ELO, 정답/오답 이력, 개인 최고점과 글로벌 Top 10.
              </Text>
            </ScreenCard>
          </View>
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
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xxl,
    gap: Spacing.lg,
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
    gap: Spacing.sm,
  },
  brand: {
    fontSize: Typography.size34,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    letterSpacing: -0.8,
    lineHeight: 40,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.primaryStrong,
    letterSpacing: 0.4,
  },
  subtitle: {
    fontSize: Typography.size13,
    lineHeight: 21,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
    maxWidth: 320,
  },
  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  featureChip: {
    borderRadius: Radius.pill,
    backgroundColor: Colors.surfaceTint,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  featureChipText: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  formCard: {
    gap: Spacing.lg,
  },
  formHeader: {
    gap: Spacing.xs,
  },
  formTitle: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  formSubtitle: {
    fontSize: Typography.size13,
    lineHeight: 20,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
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
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  modeButtonTextActive: {
    color: Colors.textPrimary,
  },
  submitButton: {
    marginTop: Spacing.xs,
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
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    lineHeight: 20,
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
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    lineHeight: 20,
  },
  footnote: {
    gap: Spacing.xs,
  },
  footnoteTitle: {
    fontSize: Typography.size12,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  footnoteText: {
    fontSize: Typography.size12,
    lineHeight: 19,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  infoCard: {
    gap: Spacing.xs,
  },
  infoTitle: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  infoText: {
    fontSize: Typography.size12,
    lineHeight: 19,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
});
