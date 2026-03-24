import assert from 'node:assert/strict';
import test from 'node:test';
import { allVocabData } from '../src/data/vocab';
import { word, tips, makeStableVocabId } from '../src/data/vocab/helpers';
import { AdaptiveProgressService } from '../src/services/adaptiveProgressService';
import { QuizService } from '../src/services/quizService';

const fixedNow = new Date('2026-03-23T00:00:00.000Z');

function buildWord(wordText: string, meaning: string) {
  return word(
    wordText,
    meaning,
    5,
    'noun',
    ['대안', '방법', '절차', '패턴'],
    tips({
      etymology: `${wordText} etymology`,
      visual: `${wordText} visual`,
      soundAlike: `${wordText} sound`,
      context: `${wordText} context`,
      synonymAntonym: `${wordText} synonym`,
    }),
    {
      definition: `${wordText} definition`,
      synonyms: [`${wordText} synonym`],
      antonyms: [`anti ${wordText}`],
      wordDistractors: ['sample', 'simple', 'signal'],
      definitionDistractors: ['another definition', 'different definition', 'third definition'],
    },
  );
}

test('stable vocab ids are deterministic for the same prompt identity', () => {
  assert.equal(
    makeStableVocabId('Anchor', '닻', 'noun'),
    makeStableVocabId(' anchor ', ' 닻 ', 'noun'),
  );
  assert.notEqual(
    makeStableVocabId('Anchor', '닻', 'noun'),
    makeStableVocabId('Bridge', '다리', 'noun'),
  );
});

test('stable vocab ids preserve adaptive progress across app reloads', () => {
  const firstItems = [buildWord('anchor', '닻'), buildWord('bridge', '다리')];
  const firstProgress = new AdaptiveProgressService(firstItems, { now: () => fixedNow });
  const firstQuiz = new QuizService(firstItems, firstProgress);

  const firstQuestion = firstQuiz.nextQuestion();
  assert.ok(firstQuestion);
  const answeredWord = firstQuestion!.vocabItem.word;
  const remainingWord = answeredWord === 'anchor' ? 'bridge' : 'anchor';

  firstQuiz.submitAnswer({
    correct: true,
    wordId: firstQuestion!.vocabItem.id,
    quizType: firstQuestion!.quizType,
    elapsedMs: 1000,
    totalMs: 5000,
    selectedChoice: firstQuestion!.correctAnswer,
    correctAnswer: firstQuestion!.correctAnswer,
    distractorRanking: firstQuestion!.distractorRanking,
    hintShown: false,
    sourceBucket: firstQuestion!.sourceBucket,
    questionOrdinal: 1,
  });

  const persisted = firstProgress.getPersistedState();
  const reloadedItems = [buildWord('anchor', '닻'), buildWord('bridge', '다리')];
  assert.equal(firstItems[0].id, reloadedItems[0].id);

  const reloadedProgress = new AdaptiveProgressService(reloadedItems, { now: () => fixedNow });
  reloadedProgress.restoreState({
    adaptiveState: persisted,
    pendingAttempts: [],
    legacyUserRatings: null,
    legacyWordElo: null,
  });
  const reloadedQuiz = new QuizService(reloadedItems, reloadedProgress);

  const nextQuestion = reloadedQuiz.nextQuestion();
  assert.ok(nextQuestion);
  assert.equal(nextQuestion?.vocabItem.word, remainingWord);
});

test('all vocab data is deduplicated by exact prompt identity', () => {
  const ids = new Set<string>();
  const promptKeys = new Set<string>();

  for (const item of allVocabData) {
    ids.add(item.id);
    promptKeys.add(`${item.word.trim().toLowerCase()}::${item.meaning.trim()}::${item.partOfSpeech}`);
  }

  assert.equal(ids.size, allVocabData.length);
  assert.equal(promptKeys.size, allVocabData.length);
});
