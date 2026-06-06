import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  estimateLearningRankLabel,
  resolveLearningPositionLabel,
} from '../src/shared/models/learningPosition';

test('estimateLearningRankLabel avoids misleading top-percent labels for early learners', () => {
  assert.equal(estimateLearningRankLabel(0), '랭킹 데이터 수집 중');
  assert.equal(estimateLearningRankLabel(999), '랭킹 데이터 수집 중');
});

test('estimateLearningRankLabel shows bounded top-percent labels once enough tier signal exists', () => {
  assert.equal(estimateLearningRankLabel(1250), '상위 50% 예상');
  assert.equal(estimateLearningRankLabel(2500), '상위 8% 예상');
});

test('resolveLearningPositionLabel follows the grade table tier bands', () => {
  assert.equal(resolveLearningPositionLabel(0), '입문 성장 구간');
  assert.equal(resolveLearningPositionLabel(1000), '기초 완성 구간');
  assert.equal(resolveLearningPositionLabel(1250), '중상위권');
  assert.equal(resolveLearningPositionLabel(2000), '상위권');
  assert.equal(resolveLearningPositionLabel(2600), '최상위권');
});
