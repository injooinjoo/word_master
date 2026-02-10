/**
 * Rating → 티어 매핑 (ELO 기반, 20단계)
 *
 * Bronze III~I   : 초등 저학년 수준
 * Silver III~I   : 초등 고학년 수준
 * Gold III~I     : 중학교 수준
 * Platinum III~I : 고등학교 수준
 * Diamond III~I  : 대학 수준
 * Master         : 고급
 * Grandmaster    : 전문가
 * Challenger     : 최상위
 */

interface TierEntry {
  min: number;
  max: number;
  label: string;
}

const TIERS: TierEntry[] = [
  { min: 0, max: 399, label: 'Bronze III' },
  { min: 400, max: 599, label: 'Bronze II' },
  { min: 600, max: 799, label: 'Bronze I' },
  { min: 800, max: 949, label: 'Silver III' },
  { min: 950, max: 1049, label: 'Silver II' },
  { min: 1050, max: 1149, label: 'Silver I' },
  { min: 1150, max: 1249, label: 'Gold III' },
  { min: 1250, max: 1349, label: 'Gold II' },
  { min: 1350, max: 1449, label: 'Gold I' },
  { min: 1450, max: 1549, label: 'Platinum III' },
  { min: 1550, max: 1649, label: 'Platinum II' },
  { min: 1650, max: 1749, label: 'Platinum I' },
  { min: 1750, max: 1849, label: 'Diamond III' },
  { min: 1850, max: 1949, label: 'Diamond II' },
  { min: 1950, max: 2049, label: 'Diamond I' },
  { min: 2050, max: 2249, label: 'Master' },
  { min: 2250, max: 2449, label: 'Grandmaster' },
  { min: 2450, max: Infinity, label: 'Challenger' },
];

export const GradeTable = {
  /** All tier entries (ascending order) */
  tiers: TIERS,

  /** Returns tier label for given rating */
  gradeLabel(rating: number): string {
    for (const tier of TIERS) {
      if (rating >= tier.min && rating <= tier.max) return tier.label;
    }
    return TIERS[TIERS.length - 1].label;
  },

  /**
   * @deprecated Use ELO-matched word selection in QuizService instead.
   * Kept for backward compatibility only.
   */
  levelRangeForRating(rating: number): [number, number] {
    if (rating < 800) return [1, 2];
    if (rating < 1150) return [2, 4];
    if (rating < 1450) return [3, 6];
    if (rating < 1750) return [5, 8];
    return [7, 10];
  },
};
