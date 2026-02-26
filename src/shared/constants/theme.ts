import type { QuizType } from '../../services/quizService';

// ── Base Palette ──────────────────────────────────────────────
export const Colors = {
  // Brand
  primary: '#3B82F6',
  primaryLight: '#EFF6FF',
  primaryBorder: '#BFDBFE',

  // Semantic
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

  // Neutrals
  background: '#F8FAFB',
  surface: '#FFFFFF',
  textPrimary: '#1A1D26',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  textFaint: '#C4C9D4',
  border: '#E5E7EB',
  borderLight: '#F1F5F9',
  divider: '#E8ECF0',
  shadow: '#64748B',

  // Choice cards
  choiceLabelBg: '#F1F5F9',
  choiceLabelText: '#94A3B8',
  choiceText: '#374151',

  // Hint
  hintBg: '#FFFBEB',
  hintBorder: '#FDE68A',
  hintLabel: '#D97706',
  hintText: '#78716C',

  // Timer
  timerFull: '#22C55E',
  timerMid: '#FBBF24',
  timerLow: '#EF4444',
  timerTrack: '#F1F5F9',

  // Common
  white: '#FFFFFF',
} as const;

// ── Quiz Type Colors ──────────────────────────────────────────
export const QuizTypeColors: Record<QuizType, string> = {
  e2k: '#3B82F6',
  k2e: '#F59E0B',
  e2e: '#8B5CF6',
  syn: '#10B981',
  ant: '#EF4444',
};

// ── Difficulty Colors ─────────────────────────────────────────
export function difficultyColor(wordElo: number): string {
  if (wordElo <= 400) return '#22C55E';
  if (wordElo <= 800) return '#3B82F6';
  if (wordElo <= 1200) return '#F59E0B';
  if (wordElo <= 1600) return '#EF4444';
  return '#8B5CF6';
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
