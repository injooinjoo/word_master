import assert from 'node:assert/strict';
import test from 'node:test';
import type { VocabItem } from '../src/data/models/vocab';
import { buildInsightCards } from '../src/features/quiz/lib/insightSelectors';

function baseVocab(overrides: Partial<VocabItem> = {}): VocabItem {
  return {
    id: 'vocab_test',
    word: 'test',
    meaning: '시험',
    partOfSpeech: 'noun',
    level: 1,
    distractors: [],
    learningTips: {
      etymology: { text: '추후 보강 예정' },
      visualAssociation: { text: '시각적으로 기억' },
      soundAlike: { text: '발음을 반복해 암기' },
      context: { text: '다양한 맥락에서 활용되는 단어' },
      synonymAntonym: { text: '관련 어휘는 사전을 참고하여 학습' },
    },
    ...overrides,
  };
}

test('buildInsightCards returns no etymology card when text is placeholder', () => {
  const cards = buildInsightCards(baseVocab());
  assert.equal(
    cards.find((c) => c.variant === 'etymology'),
    undefined,
  );
  assert.equal(
    cards.find((c) => c.variant === 'mnemonic'),
    undefined,
  );
});

test('buildInsightCards prefers insights.etymologyDetail over learningTips', () => {
  const v = baseVocab({
    learningTips: {
      etymology: { text: 'old etymology text' },
      visualAssociation: { text: '시각적으로 기억' },
      soundAlike: { text: '발음을 반복해 암기' },
      context: { text: '다양한 맥락에서 활용되는 단어' },
      synonymAntonym: { text: '관련 어휘는 사전을 참고하여 학습' },
    },
    insights: { etymologyDetail: 'detailed etymology narrative' },
  });
  const card = buildInsightCards(v).find((c) => c.variant === 'etymology');
  assert.ok(card);
  assert.equal(card!.body, 'detailed etymology narrative');
});

test('buildInsightCards skips synonyms/antonyms when arrays empty', () => {
  const v = baseVocab({ synonyms: [], antonyms: [] });
  const cards = buildInsightCards(v);
  assert.equal(cards.find((c) => c.variant === 'synonyms'), undefined);
  assert.equal(cards.find((c) => c.variant === 'antonyms'), undefined);
});

test('buildInsightCards includes synonyms/antonyms when populated', () => {
  const v = baseVocab({ synonyms: ['kind', 'humane'], antonyms: ['cruel'] });
  const cards = buildInsightCards(v);
  const syn = cards.find((c) => c.variant === 'synonyms');
  const ant = cards.find((c) => c.variant === 'antonyms');
  assert.deepEqual(syn?.chips, ['kind', 'humane']);
  assert.deepEqual(ant?.chips, ['cruel']);
});

test('buildInsightCards returns empty roots card only when array non-empty', () => {
  const empty = baseVocab({ insights: { roots: [] } });
  assert.equal(buildInsightCards(empty).find((c) => c.variant === 'roots'), undefined);

  const filled = baseVocab({
    insights: { roots: [{ morph: 'bene-', origin: 'Latin', gloss: 'good' }] },
  });
  const card = buildInsightCards(filled).find((c) => c.variant === 'roots');
  assert.ok(card);
  assert.equal(card!.roots?.length, 1);
});

test('buildInsightCards trims examples to at most 3', () => {
  const v = baseVocab({
    exampleSentences: [
      { en: 'a', ko: '에이' },
      { en: 'b', ko: '비' },
      { en: 'c', ko: '시' },
      { en: 'd', ko: '디' },
      { en: 'e', ko: '이' },
    ],
  });
  const card = buildInsightCards(v).find((c) => c.variant === 'examples');
  assert.equal(card?.examples?.length, 3);
});

test('buildInsightCards skips originStory unless insights provides it', () => {
  const without = baseVocab();
  assert.equal(buildInsightCards(without).find((c) => c.variant === 'originStory'), undefined);

  const withStory = baseVocab({
    insights: { originStory: '단어가 태어난 이야기' },
  });
  const card = buildInsightCards(withStory).find((c) => c.variant === 'originStory');
  assert.equal(card?.body, '단어가 태어난 이야기');
});

test('buildInsightCards renders learningTips fallback when insights absent and tips polished', () => {
  const v = baseVocab({
    learningTips: {
      etymology: { text: '라틴어 ben-에서 유래한 단어로 좋은 의미를 담고 있습니다.' },
      visualAssociation: { text: '햇살이 따스하게 비치는 손바닥을 떠올리세요.' },
      soundAlike: { text: '베네 → 베네는 좋다, 라는 한국어 연상으로 외워보세요.' },
      context: { text: '봉사 활동을 묘사할 때 자주 쓰는 표현입니다.' },
      synonymAntonym: { text: 'kind에 가깝고 cruel과는 반대되는 흐름.' },
    },
  });
  const cards = buildInsightCards(v);
  assert.ok(cards.find((c) => c.variant === 'etymology'));
  assert.ok(cards.find((c) => c.variant === 'mnemonic'));
  assert.ok(cards.find((c) => c.variant === 'visual'));
});

test('buildInsightCards returns empty array when vocab has no enrichment', () => {
  const v = baseVocab();
  const cards = buildInsightCards(v);
  assert.equal(cards.length, 0);
});
