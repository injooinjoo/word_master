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
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
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
  // Foundations
  bgBase: '#F2F7F7',
  bgCanvas: '#E6F0F0',
  bgSurface: '#FFFFFF',
  bgSurfaceTint: '#F7FBFB',
  bgAccentSoft: '#DDF4F2',
  bgAccentWarm: '#FFF5E6',

  textPrimary: '#10212B',
  textSecondary: '#556976',
  textMuted: '#738693',
  textFaint: '#9BAAB4',

  borderDefault: '#D4E2E6',
  borderSubtle: '#E5EEF0',
  borderStrong: '#BCD1D7',

  accentBrand: '#118A8F',
  accentBrandStrong: '#0C6E74',
  accentBrandSoft: '#DDF5F3',
  accentBrandBorder: '#A6DAD5',

  // Semantic
  stateSuccess: '#198754',
  stateSuccessSoft: '#EAF7F0',
  stateSuccessStrong: '#145D3E',
  stateDanger: '#D24D57',
  stateDangerSoft: '#FFF1F2',
  stateDangerStrong: '#8F313A',
  stateWarning: '#B96D14',
  stateWarningSoft: '#FFF6E9',
  stateWarningBorder: '#EFCFA3',
  stateWarningStrong: '#8D540F',

  // Timer
  timerTrack: '#DDE8EB',

  shadow: '#16313F',
  white: '#FFFFFF',

  // Backwards-compatible aliases
  primary: '#118A8F',
  primaryStrong: '#0C6E74',
  primaryLight: '#DDF5F3',
  primaryBorder: '#A6DAD5',
  correct: '#198754',
  correctLight: '#EAF7F0',
  correctDark: '#145D3E',
  wrong: '#D24D57',
  wrongLight: '#FFF1F2',
  wrongDark: '#8F313A',
  warning: '#B96D14',
  warningLight: '#FFF6E9',
  warningBorder: '#EFCFA3',
  warningDark: '#8D540F',
  background: '#F2F7F7',
  surface: '#FFFFFF',
  surfaceTint: '#F7FBFB',
  surfaceAccent: '#DDF5F3',
  text: '#10212B',
  border: '#D4E2E6',
  borderLight: '#E5EEF0',
  divider: '#DCE7EA',
  choiceLabelBg: '#EEF5F7',
  choiceLabelText: '#5E7382',
  choiceText: '#173142',
  hintBg: '#FFF6E9',
  hintBorder: '#EFCFA3',
  hintLabel: '#B96D14',
  hintText: '#7C5B34',
  timerFull: '#198754',
  timerMid: '#B96D14',
  timerLow: '#D24D57',
} as const;

export const Elevation = {
  sm: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 3,
  },
  md: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 5,
  },
} as const;

export function withAlpha(color: string, alphaHex: string): string {
  return `${color}${alphaHex}`;
}

// ── Quiz Type Colors ──────────────────────────────────────────
export const QuizTypeColors: Record<QuizType, string> = {
  e2k: '#1A99C2',
  k2e: '#E08F22',
  e2e: '#6F7BF6',
  syn: '#1D9E74',
  ant: '#D24D57',
};

// ── Difficulty Colors ─────────────────────────────────────────
export function difficultyColor(wordElo: number): string {
  if (wordElo <= 400) return Colors.correct;
  if (wordElo <= 800) return QuizTypeColors.e2k;
  if (wordElo <= 1200) return Colors.warning;
  if (wordElo <= 1600) return Colors.wrong;
  return QuizTypeColors.e2e;
}

// ── Round Size Card Colors ────────────────────────────────────
export const RoundSizeColors: Record<number, string> = {
  10: '#16A34A',
  20: '#0EA5E9',
  50: '#D97706',
  100: '#7C83FD',
};

// ── Timing ────────────────────────────────────────────────────
export const Timing = {
  feedbackDelay: 5000,
  hintThreshold: 0.4,
  animationFast: 200,
  animationMedium: 400,
  animationSlow: 1200,
} as const;
