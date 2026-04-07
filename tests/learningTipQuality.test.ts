import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getRenderableLearningTipEntries,
  isRenderableLearningTipEntry,
  type LearningTips,
} from '../src/data/models/vocab';

test('isRenderableLearningTipEntry rejects placeholder tip patterns', () => {
  assert.equal(
    isRenderableLearningTipEntry({ text: 'mockery의 어원 정보는 추후 보강 예정' }),
    false,
  );
  assert.equal(
    isRenderableLearningTipEntry({ text: 'mockery를 조소로 연결해 시각적으로 기억' }),
    false,
  );
  assert.equal(
    isRenderableLearningTipEntry({ text: 'mockery 발음을 반복해 암기' }),
    false,
  );
});

test('getRenderableLearningTipEntries keeps only polished tips', () => {
  const tips: LearningTips = {
    etymology: { text: 'dedicate는 자신을 완전히 바치겠다고 선언하는 의미에서 왔습니다.' },
    visualAssociation: { text: 'dedicate를 헌신으로 연결해 시각적으로 기억' },
    soundAlike: { text: 'dedicate 발음을 반복해 암기' },
    context: { text: '중요한 목표에 시간을 꾸준히 들일 때 자주 쓰는 표현입니다.' },
    synonymAntonym: { text: 'devote와 가깝고 neglect와는 반대되는 흐름으로 기억하면 쉽습니다.' },
  };

  assert.deepEqual(getRenderableLearningTipEntries(tips), [
    { text: 'dedicate는 자신을 완전히 바치겠다고 선언하는 의미에서 왔습니다.' },
    { text: '중요한 목표에 시간을 꾸준히 들일 때 자주 쓰는 표현입니다.' },
    { text: 'devote와 가깝고 neglect와는 반대되는 흐름으로 기억하면 쉽습니다.' },
  ]);
});
