import type { QuizType } from '../../services/quizService';

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const Radius = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  pill: 999,
} as const;

export const Typography = {
  size11: 11,
  size12: 12,
  size13: 13,
  size15: 15,
  size18: 18,
  size23: 23,
  size30: 30,
  size34: 34,
  weightMedium: '500',
  weightSemiBold: '600',
  weightBold: '700',
  weightExtraBold: '800',
} as const;

export const Colors = {
  // Foundations — trust-blue minimal aesthetic (mirrors claude_design/tokens.css)
  bgBase: '#F8FAFB',
  bgCanvas: '#F1F5F9',
  bgSurface: '#FFFFFF',
  bgSurfaceTint: '#F8FAFC',
  bgAccentSoft: '#EFF6FF',
  bgAccentWarm: '#FFFBEB',

  textPrimary: '#1A1D26',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  textFaint: '#C4C9D4',

  borderDefault: '#E5E7EB',
  borderSubtle: '#F1F5F9',
  borderStrong: '#CBD5E1',

  accentBrand: '#3B82F6',
  accentBrandStrong: '#2563EB',
  accentBrandSoft: '#EFF6FF',
  accentBrandBorder: '#BFDBFE',

  // Semantic
  stateSuccess: '#22C55E',
  stateSuccessSoft: '#F0FDF4',
  stateSuccessStrong: '#166534',
  stateDanger: '#EF4444',
  stateDangerSoft: '#FEF2F2',
  stateDangerStrong: '#991B1B',
  stateWarning: '#F59E0B',
  stateWarningSoft: '#FFFBEB',
  stateWarningBorder: '#FDE68A',
  stateWarningStrong: '#D97706',

  // Timer
  timerTrack: '#F1F5F9',

  shadow: '#64748B',
  white: '#FFFFFF',

  // Backwards-compatible aliases
  primary: '#3B82F6',
  primaryStrong: '#2563EB',
  primaryLight: '#EFF6FF',
  primaryBorder: '#BFDBFE',
  correct: '#22C55E',
  correctLight: '#F0FDF4',
  correctDark: '#166534',
  wrong: '#EF4444',
  wrongLight: '#FEF2F2',
  wrongDark: '#991B1B',
  warning: '#F59E0B',
  warningLight: '#FFFBEB',
  warningBorder: '#FDE68A',
  warningDark: '#D97706',
  background: '#F8FAFB',
  surface: '#FFFFFF',
  surfaceTint: '#F8FAFC',
  surfaceAccent: '#EFF6FF',
  text: '#1A1D26',
  border: '#E5E7EB',
  borderLight: '#F1F5F9',
  divider: '#E8ECF0',
  choiceLabelBg: '#F1F5F9',
  choiceLabelText: '#94A3B8',
  choiceText: '#374151',
  hintBg: '#FFFBEB',
  hintBorder: '#FDE68A',
  hintLabel: '#D97706',
  hintText: '#78716C',
  timerFull: '#22C55E',
  timerMid: '#FBBF24',
  timerLow: '#EF4444',
} as const;

export const Elevation = {
  sm: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  md: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  cta: {
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;

export function withAlpha(color: string, alphaHex: string): string {
  return `${color}${alphaHex}`;
}

// ── Quiz Type Colors ──────────────────────────────────────────
export const QuizTypeColors: Record<QuizType, string> = {
  e2k: '#3B82F6', // 영한 — trust-blue
  k2e: '#F59E0B', // 한영 — amber
  e2e: '#8B5CF6', // 영영 — violet
  syn: '#10B981', // 동의어 — emerald
  ant: '#EF4444', // 반의어 — red
};

// ── Difficulty Colors ─────────────────────────────────────────
export function difficultyColor(wordElo: number): string {
  if (wordElo <= 400) return '#22C55E'; // 쉬움
  if (wordElo <= 800) return '#3B82F6'; // 보통
  if (wordElo <= 1200) return '#F59E0B'; // 어려움
  if (wordElo <= 1600) return '#EF4444'; // 매우 어려움
  return '#8B5CF6'; // 극한
}

// ── Round Size Card Colors ────────────────────────────────────
export const RoundSizeColors: Record<number, string> = {
  10: '#22C55E',
  20: '#3B82F6',
  50: '#F59E0B',
  100: '#8B5CF6',
};

// ── Timing ────────────────────────────────────────────────────
export const Timing = {
  feedbackDelay: 5000,
  hintThreshold: 0.4,
  animationFast: 200,
  animationMedium: 400,
  animationSlow: 1200,
} as const;

