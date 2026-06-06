import { GradeTable } from '../constants/gradeTable';

export function estimateLearningRankLabel(rating: number): string {
  const tier = GradeTable.gradeLabel(rating);
  if (tier.startsWith('Bronze') || tier.startsWith('Silver')) return '랭킹 데이터 수집 중';

  const normalized = Math.max(0, Math.min(1, rating / 2500));
  const percentile = Math.max(8, Math.min(50, Math.round(100 - normalized * 92)));
  return `상위 ${percentile}% 예상`;
}

export function resolveLearningPositionLabel(rating: number): string {
  const tier = GradeTable.gradeLabel(rating);
  if (tier.startsWith('Bronze')) return '입문 성장 구간';
  if (tier.startsWith('Silver')) return '기초 완성 구간';
  if (tier.startsWith('Gold') || tier.startsWith('Platinum')) return '중상위권';
  if (tier.startsWith('Diamond')) return '상위권';
  return '최상위권';
}
