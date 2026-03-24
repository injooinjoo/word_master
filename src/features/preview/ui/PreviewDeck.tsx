import React, { useEffect, useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Colors,
  QuizTypeColors,
  Radius,
  Spacing,
  Typography,
  withAlpha,
} from '../../../shared/constants/theme';
import {
  createDefaultCharacterProfile,
  sanitizeCharacterProfile,
} from '../../../shared/models/characterProfile';
import {
  Badge,
  Button,
  Chip,
  ChoiceCard,
  FeedbackBanner,
  HistoryListItem,
  ResponsiveContainer,
  ScreenCard,
  StatRing,
  TextField,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../../../shared/ui';
import { CharacterProfileEditor } from '../../profile/ui/ProfileScreen';

export type PreviewMode =
  | 'foundations'
  | 'components'
  | 'auth'
  | 'profile'
  | 'quiz'
  | 'result'
  | 'system'
  | 'handoff';

interface PreviewDeckProps {
  mode: PreviewMode;
}

export function PreviewDeck({ mode }: PreviewDeckProps) {
  const styles = usePreviewStyles();
  useEffect(() => {
    if (!__DEV__) return;

    const webGlobal =
      globalThis as {
        location?: { hash?: string };
        document?: {
          head?: { appendChild: (node: unknown) => void };
          getElementById?: (id: string) => unknown;
          createElement?: (tag: string) => {
            id?: string;
            src?: string;
            async?: boolean;
          };
        };
      };

    if (!webGlobal.location?.hash?.includes('figmacapture=')) return;
    if (webGlobal.document?.getElementById?.('figma-capture-script')) return;

    const script = webGlobal.document?.createElement?.('script');
    if (!script || !webGlobal.document?.head) return;

    script.id = 'figma-capture-script';
    script.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
    script.async = true;
    webGlobal.document.head.appendChild(script);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <ResponsiveContainer maxWidth={393}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.backdropTop} />
          <View style={styles.backdropBottom} />
          {mode === 'foundations' && <FoundationsPreview />}
          {mode === 'components' && <ComponentsPreview />}
          {mode === 'auth' && <AuthPreview />}
          {mode === 'profile' && <ProfilePreview />}
          {mode === 'quiz' && <QuizPreview />}
          {mode === 'result' && <ResultPreview />}
          {mode === 'system' && <SystemPreview />}
          {mode === 'handoff' && <HandoffPreview />}
        </ScrollView>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

function PreviewHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const styles = usePreviewStyles();
  const sharedTextStyles = useSharedTextStyles();

  return (
    <View style={styles.header}>
      <Text style={sharedTextStyles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </View>
  );
}

function FoundationsPreview() {
  const styles = usePreviewStyles();
  const typography = useResponsiveTypography();
  const swatches = [
    ['bg/base', Colors.background],
    ['bg/surface', Colors.surface],
    ['accent/brand', Colors.primary],
    ['accent/brand-soft', Colors.primaryLight],
    ['text/primary', Colors.textPrimary],
    ['text/secondary', Colors.textSecondary],
    ['state/success', Colors.correct],
    ['state/warning', Colors.warning],
    ['state/danger', Colors.wrong],
  ] as const;

  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="00 Foundations"
        title="Semantic Tokens"
        description="Word Master의 기본 색상, 간격, 타이포, 라운드 규칙."
      />

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Color Variables</Text>
        <View style={styles.swatchGrid}>
          {swatches.map(([label, color]) => (
            <View key={label} style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: color }]} />
              <Text style={styles.swatchLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Spacing & Radius</Text>
        <View style={styles.tokenRow}>
          {[4, 8, 12, 16, 20, 24, 32].map((value) => (
            <View key={value} style={styles.tokenPill}>
              <Text style={styles.tokenPillText}>{value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.tokenRow}>
          {[8, 12, 16, 20, 999].map((value) => (
            <View key={value} style={styles.tokenPill}>
              <Text style={styles.tokenPillText}>r{value}</Text>
            </View>
          ))}
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Type Scale</Text>
        {[
          [11, 'Caption / Labels'],
          [12, 'Support Copy'],
          [13, 'Body Small'],
          [15, 'Body / Button'],
          [18, 'Section Title'],
          [23, 'Panel Heading'],
          [30, 'Hero Number'],
          [34, 'Primary Brand'],
        ].map(([size, label]) => (
          <Text
            key={label}
            style={[
              styles.typeRow,
              {
                fontSize: typography.fontSize(size as number),
                lineHeight: typography.lineHeight(size as number, 1.25),
              },
            ]}
          >
            {label}
          </Text>
        ))}
      </ScreenCard>
    </View>
  );
}

function ComponentsPreview() {
  const styles = usePreviewStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="01 Components"
        title="Reusable UI"
        description="Code Connect에 먼저 매핑할 핵심 컴포넌트 모음."
      />

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Buttons</Text>
        <View style={styles.stack}>
          <Button label="학습 시작하기" variant="primary" onPress={() => undefined} />
          <Button label="로그아웃" variant="secondary" onPress={() => undefined} />
          <Button label="일시정지" variant="ghost" onPress={() => undefined} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Text Field</Text>
        <View style={styles.stack}>
          <TextField label="이메일" value="you@example.com" editable={false} />
          <TextField label="비밀번호" value="secret123" editable={false} secureTextEntry />
          <TextField
            label="오류 상태"
            value="wrong-email"
            editable={false}
            status="error"
            caption="올바른 이메일 주소를 입력해주세요."
          />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Status & Chips</Text>
        <View style={styles.inlineRow}>
          <Badge label="쉬움" color={Colors.correct} />
          <Badge label="Platinum" tone="status" color={Colors.primary} />
        </View>
        <View style={styles.inlineRow}>
          <Chip label="영한" type="e2k" />
          <Chip label="반의" type="ant" />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Choice Card</Text>
        <View style={styles.choicePreviewGrid}>
          <ChoiceCard label="A" text="obvious" style={styles.choicePreviewCard} />
          <ChoiceCard label="B" text="subtle" selected style={styles.choicePreviewCard} />
          <ChoiceCard label="C" text="explicit" state="correct" style={styles.choicePreviewCard} />
          <ChoiceCard label="D" text="confusing" state="wrong" style={styles.choicePreviewCard} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Feedback / Stats</Text>
        <View style={styles.stack}>
          <FeedbackBanner kind="success" message={`정답!\nsubtle · 미묘한\n정답: delicate`} />
          <FeedbackBanner kind="error" message={`오답\nobvious · 명백한\n내 답: blunt\n정답: explicit`} />
          <FeedbackBanner kind="timeout" message={`시간 초과\nobvious · 명백한\n정답: evident`} />
        </View>
        <View style={styles.statWrap}>
          <StatRing percent={84} numerator={42} denominator={50} color={Colors.correct} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>History Item</Text>
        <View style={styles.stack}>
          <HistoryListItem
            index={1}
            word="subtle"
            meaning="미묘한"
            answerText="정답: delicate"
            correct
            typeLabel="영한"
            typeColor={QuizTypeColors.e2k}
          />
          <HistoryListItem
            index={2}
            word="obvious"
            meaning="명백한"
            answerText="내 답: blunt → 정답: explicit"
            correct={false}
            typeLabel="반의"
            typeColor={QuizTypeColors.ant}
          />
        </View>
      </ScreenCard>
    </View>
  );
}

function ProfilePreview() {
  const styles = usePreviewStyles();
  const profile = useMemo(
    () =>
      sanitizeCharacterProfile({
        ...createDefaultCharacterProfile(),
        avatar: {
          hairStyle: 'bob',
          hairColor: 'rose',
          expression: 'wink',
          outfitColor: 'gold',
        },
        likes: '퍼즐, 민트색',
        dislikes: '시간 초과',
      }),
    [],
  );

  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="02 Profile"
        title="Character Profile"
        description="전용 프로필 편집 화면과 요약 카드 조합."
      />

      <CharacterProfileEditor
        initialProfile={profile}
        viewerLabel="프리뷰 캐릭터"
        storageLabel="프리뷰에서는 저장되지 않습니다."
        onClose={() => undefined}
        onSave={async (nextProfile) => ({
          profile: nextProfile,
          notice: '프리뷰 저장 시뮬레이션입니다.',
        })}
      />
    </View>
  );
}

function AuthPreview() {
  const styles = usePreviewStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="02 Auth"
        title="Auth States"
        description="선택 로그인, 회원가입, 성공/오류 메시지 상태."
      />

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Sign In</Text>
        <View style={styles.stack}>
          <TextField label="이메일" value="learner@wordmaster.app" editable={false} />
          <TextField label="비밀번호" value="secret123" editable={false} secureTextEntry />
          <Button label="로그인" onPress={() => undefined} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Sign Up with Success</Text>
        <View style={styles.stack}>
          <TextField label="이메일" value="new@wordmaster.app" editable={false} />
          <TextField label="비밀번호" value="secure-pass" editable={false} secureTextEntry />
          <View style={styles.successCallout}>
            <Text style={styles.successCalloutText}>가입 완료. 이메일 인증 후 로그인해주세요.</Text>
          </View>
          <Button label="계정 만들기" onPress={() => undefined} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Validation Error</Text>
        <TextField
          label="이메일"
          value="wrong-email"
          editable={false}
          status="error"
          caption="올바른 이메일 주소를 입력해주세요."
        />
      </ScreenCard>
    </View>
  );
}

function QuizPreview() {
  const styles = usePreviewStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="03 Quiz"
        title="Quiz States"
        description="기본, 힌트 노출, 정답/오답, 타임아웃 상태를 한 페이지에 정리."
      />

      <ScreenCard tone="tint" style={styles.sectionCard}>
        <View style={styles.quizHeaderRow}>
          <Chip label="영한" type="e2k" />
          <Badge label="보통" color={QuizTypeColors.e2k} />
        </View>
        <Text style={styles.quizPrompt}>subtle</Text>
        <View style={styles.choicePreviewGrid}>
          <ChoiceCard label="A" text="미묘한" style={styles.choicePreviewCard} />
          <ChoiceCard label="B" text="명백한" selected style={styles.choicePreviewCard} />
          <ChoiceCard label="C" text="비논리적" style={styles.choicePreviewCard} />
          <ChoiceCard label="D" text="조용한" style={styles.choicePreviewCard} />
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Hint / Correct / Timeout</Text>
        <View style={styles.stack}>
          <View style={styles.hintCard}>
            <Text style={styles.hintTag}>Hint</Text>
            <Text style={styles.hintBody}>보기에 쓰인 뜻보다 뉘앙스가 약하고 간접적일 때 자주 씁니다.</Text>
          </View>
          <FeedbackBanner kind="success" message="정답!" />
          <FeedbackBanner kind="timeout" message="시간 초과 — 정답: 미묘한" />
        </View>
      </ScreenCard>
    </View>
  );
}

function ResultPreview() {
  const styles = usePreviewStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="04 Result"
        title="Result Layout"
        description="라운드 요약, 유형별 카드, 리더보드, 문제 기록 구성."
      />

      <ScreenCard tone="tint" style={styles.sectionCardCenter}>
        <StatRing percent={72} numerator={36} denominator={50} color={Colors.primary} />
        <Text style={styles.resultHeadline}>잘하고 있어요!</Text>
        <Text style={styles.resultSubhead}>종합 Rating 1284 · Gold</Text>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Type Cards</Text>
        <View style={styles.stack}>
          <View style={styles.resultTypeCard}>
            <View style={[styles.typeAccent, { backgroundColor: QuizTypeColors.e2k }]} />
            <View style={styles.resultTypeCardBody}>
              <Text style={[styles.resultTypeTitle, { color: QuizTypeColors.e2k }]}>영한</Text>
              <Text style={styles.resultTypeValue}>1340</Text>
            </View>
          </View>
          <View style={styles.resultTypeCard}>
            <View style={[styles.typeAccent, { backgroundColor: QuizTypeColors.ant }]} />
            <View style={styles.resultTypeCardBody}>
              <Text style={[styles.resultTypeTitle, { color: QuizTypeColors.ant }]}>반의</Text>
              <Text style={styles.resultTypeValue}>1178</Text>
            </View>
          </View>
        </View>
      </ScreenCard>

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>History</Text>
        <View style={styles.stack}>
          <HistoryListItem
            index={1}
            word="obvious"
            meaning="명백한"
            answerText="정답"
            correct
            typeLabel="영한"
            typeColor={QuizTypeColors.e2k}
          />
          <HistoryListItem
            index={2}
            word="subtle"
            meaning="미묘한"
            answerText="내 답: direct → 정답: delicate"
            correct={false}
            typeLabel="반의"
            typeColor={QuizTypeColors.ant}
          />
        </View>
      </ScreenCard>
    </View>
  );
}

function SystemPreview() {
  const styles = usePreviewStyles();
  const sharedTextStyles = useSharedTextStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="05 System States"
        title="Loading / Config / Error"
        description="앱 부트스트랩과 예외 상황을 동일한 시각 언어로 통일."
      />

      <ScreenCard style={styles.sectionCardCenter}>
        <Text style={sharedTextStyles.eyebrow}>Boot Sequence</Text>
        <Text style={styles.systemStateTitle}>불러오는 중...</Text>
        <Text style={styles.systemStateBody}>학습 데이터를 준비하고 있어요.</Text>
      </ScreenCard>

      <ScreenCard style={styles.sectionCardCenter}>
        <Text style={sharedTextStyles.eyebrow}>Configuration Required</Text>
        <Text style={styles.systemStateTitle}>Supabase 설정 필요</Text>
        <Text style={styles.systemStateBody}>
          `EXPO_PUBLIC_SUPABASE_URL`과 `EXPO_PUBLIC_SUPABASE_ANON_KEY`가 필요합니다.
        </Text>
      </ScreenCard>

      <ScreenCard style={styles.sectionCardCenter}>
        <Text style={sharedTextStyles.eyebrow}>System Error</Text>
        <Text style={styles.systemStateTitle}>문제가 발생했습니다</Text>
        <Text style={styles.systemStateBody}>아래 버튼으로 세션을 초기화하고 다시 시작합니다.</Text>
        <Button label="처음으로 돌아가기" onPress={() => undefined} />
      </ScreenCard>
    </View>
  );
}

function HandoffPreview() {
  const styles = usePreviewStyles();
  return (
    <View style={styles.page}>
      <PreviewHeader
        eyebrow="06 Handoff"
        title="Sync Rules"
        description="Figma와 코드 사이의 운영 규칙과 Code Connect 우선순위."
      />

      <ScreenCard style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Working Agreement</Text>
        <View style={styles.stack}>
          <Text style={styles.ruleText}>1. Figma 변수와 공용 컴포넌트를 먼저 수정하고, 코드가 그 변경을 따른다.</Text>
          <Text style={styles.ruleText}>2. 화면 전체보다 재사용 컴포넌트를 우선 Code Connect로 연결한다.</Text>
          <Text style={styles.ruleText}>3. 모바일 393px 기준을 기본 시안으로 유지하고 웹은 스모크 체크만 수행한다.</Text>
          <Text style={styles.ruleText}>4. 색상, 간격, 라운드, 타입은 semantic token 이름으로만 관리한다.</Text>
        </View>
      </ScreenCard>
    </View>
  );
}

function usePreviewStyles() {
  const typography = useResponsiveTypography();

  return useMemo(() => StyleSheet.create({
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
    top: 40,
    right: -56,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: withAlpha(Colors.primary, '12'),
  },
  backdropBottom: {
    position: 'absolute',
    bottom: 120,
    left: -48,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: withAlpha(Colors.warning, '10'),
  },
  page: {
    gap: Spacing.lg,
  },
  header: {
    gap: Spacing.xs,
  },
  headerTitle: {
    fontSize: typography.sizes.size30,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    letterSpacing: -0.6,
  },
  headerDescription: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
  },
  sectionCard: {
    gap: Spacing.md,
  },
  sectionCardCenter: {
    gap: Spacing.md,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  swatchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  swatchItem: {
    width: 98,
    gap: Spacing.xs,
  },
  swatch: {
    height: 62,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  swatchLabel: {
    fontSize: typography.sizes.size11,
    color: Colors.textSecondary,
    fontWeight: Typography.weightBold,
  },
  tokenRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  tokenPill: {
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surfaceTint,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  tokenPillText: {
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  typeRow: {
    color: Colors.textPrimary,
    fontWeight: Typography.weightBold,
  },
  stack: {
    gap: Spacing.sm,
  },
  inlineRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  choicePreviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'space-between',
  },
  choicePreviewCard: {
    width: '48%',
    minHeight: 110,
  },
  statWrap: {
    marginTop: Spacing.md,
    alignItems: 'center',
  },
  successCallout: {
    borderRadius: Radius.lg,
    backgroundColor: Colors.correctLight,
    borderWidth: 1,
    borderColor: withAlpha(Colors.correct, '35'),
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  successCalloutText: {
    color: Colors.correctDark,
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    fontWeight: Typography.weightBold,
  },
  quizHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quizPrompt: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.lg,
    fontSize: typography.sizes.size30,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  hintCard: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.warningBorder,
    backgroundColor: Colors.hintBg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.xs,
  },
  hintTag: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightExtraBold,
    color: Colors.warningDark,
    letterSpacing: 0.8,
  },
  hintBody: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    color: Colors.hintText,
    fontWeight: Typography.weightMedium,
  },
  resultHeadline: {
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  resultSubhead: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  resultTypeCard: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surfaceTint,
  },
  typeAccent: {
    width: 6,
  },
  resultTypeCardBody: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  resultTypeTitle: {
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightBold,
  },
  resultTypeValue: {
    marginTop: Spacing.xs,
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  systemStateTitle: {
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  systemStateBody: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
    textAlign: 'center',
  },
  ruleText: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    color: Colors.textPrimary,
    fontWeight: Typography.weightSemiBold,
  },
  }), [typography]);
}
