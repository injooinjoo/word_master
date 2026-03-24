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
  schoolBand: string;
  examBand: string;
}

const TIERS: TierEntry[] = [
  { min: 0, max: 399, label: 'Bronze III', schoolBand: '초등 기초', examBand: '중등 입문' },
  { min: 400, max: 599, label: 'Bronze II', schoolBand: '초등 기초', examBand: '중등 준비' },
  { min: 600, max: 799, label: 'Bronze I', schoolBand: '초등 심화', examBand: '중학교 입문' },
  { min: 800, max: 949, label: 'Silver III', schoolBand: '초등 심화', examBand: '중학교 기초' },
  { min: 950, max: 1049, label: 'Silver II', schoolBand: '중학교 기초', examBand: '수능 입문' },
  { min: 1050, max: 1149, label: 'Silver I', schoolBand: '중학교 심화', examBand: '수능 입문' },
  { min: 1150, max: 1249, label: 'Gold III', schoolBand: '중학교 상위', examBand: '고등 기초' },
  { min: 1250, max: 1349, label: 'Gold II', schoolBand: '고등학교 기초', examBand: '수능' },
  { min: 1350, max: 1449, label: 'Gold I', schoolBand: '고등학교 심화', examBand: '수능 상위' },
  { min: 1450, max: 1549, label: 'Platinum III', schoolBand: '고등학교 상위', examBand: 'TOEIC 입문' },
  { min: 1550, max: 1649, label: 'Platinum II', schoolBand: '수능 상위', examBand: 'TOEIC' },
  { min: 1650, max: 1749, label: 'Platinum I', schoolBand: 'TOEIC 상위', examBand: 'TOEFL 입문' },
  { min: 1750, max: 1849, label: 'Diamond III', schoolBand: 'TOEFL', examBand: '편입 기초' },
  { min: 1850, max: 1949, label: 'Diamond II', schoolBand: 'TOEFL 상위', examBand: '편입' },
  { min: 1950, max: 2049, label: 'Diamond I', schoolBand: '편입 상위', examBand: 'GRE 입문' },
  { min: 2050, max: 2249, label: 'Master', schoolBand: 'GRE', examBand: '고난도 편입' },
  { min: 2250, max: 2449, label: 'Grandmaster', schoolBand: 'GRE 상위', examBand: '원서 독해' },
  { min: 2450, max: Infinity, label: 'Challenger', schoolBand: '최상위', examBand: 'GRE 최상위' },
];

export const GradeTable = {
  /** All tier entries (ascending order) */
  tiers: TIERS,

  tierForRating(rating: number): TierEntry {
    for (const tier of TIERS) {
      if (rating >= tier.min && rating <= tier.max) return tier;
    }
    return TIERS[TIERS.length - 1];
  },

  /** Returns tier label for given rating */
  gradeLabel(rating: number): string {
    return this.tierForRating(rating).label;
  },

  /** Returns interpretable school/exam context for the tier */
  gradeDescriptor(rating: number): string {
    const tier = this.tierForRating(rating);
    return `${tier.schoolBand} · ${tier.examBand}`;
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
