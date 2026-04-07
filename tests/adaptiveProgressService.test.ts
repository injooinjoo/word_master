import assert from 'node:assert/strict';
import test from 'node:test';
import type { LearningTips, VocabItem } from '../src/data/models/vocab';
import { AdaptiveProgressService } from '../src/services/adaptiveProgressService';
import { QuizService } from '../src/services/quizService';

const fixedNow = new Date('2026-03-16T09:00:00.000Z');

const learningTips: LearningTips = {
  etymology: { text: 'etymology' },
  visualAssociation: { text: 'visual' },
  soundAlike: { text: 'sound' },
  context: { text: 'context' },
  synonymAntonym: { text: 'synonym' },
};

function makeItem(
  id: string,
  word: string,
  meaning: string,
  level: number,
  extra?: Partial<VocabItem>,
): VocabItem {
  return {
    id,
    word,
    meaning,
    level,
    partOfSpeech: 'noun',
    distractors: ['대안', '방법', '절차', '패턴'],
    definition: `${word} definition`,
    synonyms: [`${word}syn`],
    antonyms: [`${word}ant`],
    wordDistractors: ['sample', 'simple', 'signal'],
    definitionDistractors: ['another definition', 'different definition', 'third definition'],
    learningTips,
    ...extra,
  };
}

function makeServices(items: VocabItem[]) {
  const progress = new AdaptiveProgressService(items, { now: () => fixedNow });
  const quiz = new QuizService(items, progress);
  return { progress, quiz };
}

test('classifyAnswer maps speed, hints, wrong rank, and timeout to grades', () => {
  const items = [makeItem('w1', 'anchor', '닻', 5)];
  const { progress } = makeServices(items);

  const fastCorrect = progress.classifyAnswer({
    correct: true,
    wordId: 'w1',
    quizType: 'e2k',
    elapsedMs: 1000,
    totalMs: 5000,
    selectedChoice: '닻',
    correctAnswer: '닻',
    distractorRanking: ['배', '물', '나무'],
    hintShown: false,
    sourceBucket: 'exploration',
    questionOrdinal: 1,
  });
  assert.equal(fastCorrect.grade, 5);

  const fragile = progress.classifyAnswer({
    correct: true,
    wordId: 'w1',
    quizType: 'e2k',
    elapsedMs: 4500,
    totalMs: 5000,
    selectedChoice: '닻',
    correctAnswer: '닻',
    distractorRanking: ['배', '물', '나무'],
    hintShown: true,
    sourceBucket: 'exploration',
    questionOrdinal: 1,
  });
  assert.equal(fragile.grade, 3);

  const closeWrong = progress.classifyAnswer({
    correct: false,
    wordId: 'w1',
    quizType: 'e2k',
    elapsedMs: 2000,
    totalMs: 5000,
    selectedChoice: '배',
    correctAnswer: '닻',
    distractorRanking: ['배', '물', '나무'],
    hintShown: false,
    sourceBucket: 'exploration',
    questionOrdinal: 1,
  });
  assert.equal(closeWrong.grade, 2);

  const timeout = progress.classifyAnswer({
    correct: false,
    wordId: 'w1',
    quizType: 'e2k',
    elapsedMs: 5000,
    totalMs: 5000,
    selectedChoice: null,
    correctAnswer: '닻',
    distractorRanking: ['배', '물', '나무'],
    hintShown: false,
    sourceBucket: 'exploration',
    questionOrdinal: 1,
  });
  assert.equal(timeout.grade, 0);
  assert.equal(timeout.timedOut, true);
});

test('applyAdaptiveUpdate updates skill, challenge, memory, and pending queue', () => {
  const items = [makeItem('w1', 'anchor', '닻', 5)];
  const { progress } = makeServices(items);
  (progress as unknown as { _syncUser: { id: string; email: string | null } })._syncUser = {
    id: 'user-1',
    email: null,
  };

  const result = progress.applyAdaptiveUpdate({
    correct: true,
    wordId: 'w1',
    quizType: 'e2k',
    elapsedMs: 1000,
    totalMs: 5000,
    selectedChoice: '닻',
    correctAnswer: '닻',
    distractorRanking: ['배', '물', '나무'],
    hintShown: false,
    sourceBucket: 'exploration',
    questionOrdinal: 1,
  });

  assert.equal(result.grade, 5);
  assert.equal(result.skillBefore, 1000);
  assert.equal(result.skillAfter, 1012);
  assert.equal(result.challengeBefore, 1000);
  assert.equal(result.challengeAfter, 994);
  assert.equal(result.memoryAfter.memoryStrength, 65);
  assert.equal(result.memoryAfter.lastIntervalHours, 24);
  assert.equal(result.nextReviewAt, '2026-03-17T09:00:00.000Z');
  assert.equal(progress.getPendingAttempts().length, 1);
});

test('restoreState seeds type skill and challenge rating from legacy local data', () => {
  const items = [makeItem('w1', 'anchor', '닻', 5)];
  const { progress } = makeServices(items);

  progress.restoreState({
    adaptiveState: null,
    pendingAttempts: [],
    legacyUserRatings: {
      ratings: { e2k: 1100, k2e: 1234, e2e: 1180, syn: 1190, ant: 1000 },
      overallRating: 1200,
      sessionCount: 3,
    },
    legacyWordElo: {
      w1: { e2k: 1410, k2e: 1325 },
    },
  });

  assert.equal(progress.getSkillRating('k2e'), 1234);
  assert.equal(progress.peekWordProgress('w1', 'k2e').challengeRating, 1325);
  assert.equal(progress.peekWordProgress('w1', 'k2e').seenCount, 0);
});

test('restoreState drops progress tied to unknown vocab ids', () => {
  const items = [makeItem('w1', 'anchor', '닻', 5)];
  const { progress } = makeServices(items);
  const persistedSignature = progress.getPersistedState().vocabDatasetSignature;

  progress.restoreState({
    adaptiveState: {
      typeSkills: {},
      wordProgress: {
        known: {
          vocabId: 'w1',
          quizType: 'e2k',
          challengeRating: 1200,
          memoryStrength: 55,
          lastIntervalHours: 4,
          dueAt: '2026-03-17T09:00:00.000Z',
          seenCount: 2,
          correctStreak: 1,
          wrongStreak: 0,
          closeWrongCount: 0,
          hardWrongCount: 0,
          timeoutCount: 0,
          lastSeenAt: '2026-03-16T09:00:00.000Z',
          updatedAt: '2026-03-16T09:00:00.000Z',
        },
        stale: {
          vocabId: 'stale-id',
          quizType: 'e2k',
          challengeRating: 1600,
          memoryStrength: 10,
          lastIntervalHours: 1,
          dueAt: '2026-03-16T10:00:00.000Z',
          seenCount: 9,
          correctStreak: 0,
          wrongStreak: 4,
          closeWrongCount: 0,
          hardWrongCount: 4,
          timeoutCount: 1,
          lastSeenAt: '2026-03-16T09:00:00.000Z',
          updatedAt: '2026-03-16T09:00:00.000Z',
        },
      },
      retryQueue: [
        { wordId: 'w1', quizType: 'e2k', dueQuestionOrdinal: 2 },
        { wordId: 'stale-id', quizType: 'e2k', dueQuestionOrdinal: 1 },
      ],
      recentWordIds: ['stale-id', 'w1'],
      lastHydratedUserId: null,
      vocabDatasetSignature: persistedSignature,
    },
    pendingAttempts: [
      {
        clientAttemptId: 'attempt-1',
        userId: 'user-1',
        vocabId: 'w1',
        quizType: 'e2k',
        questionOrdinal: 1,
        selectedChoice: '닻',
        wasCorrect: true,
        answerGrade: 5,
        responseQuality: 1,
        elapsedMs: 1000,
        totalMs: 5000,
        hintShown: false,
        sourceBucket: 'exploration',
        skillBefore: 1000,
        skillAfter: 1012,
        challengeBefore: 1000,
        challengeAfter: 994,
        memoryStrengthBefore: 50,
        memoryStrengthAfter: 65,
        lastIntervalHoursBefore: 0,
        lastIntervalHoursAfter: 24,
        dueAtBefore: null,
        nextReviewAt: '2026-03-17T09:00:00.000Z',
        retryDueQuestionOrdinal: null,
        timedOut: false,
        createdAt: '2026-03-16T09:00:00.000Z',
      },
      {
        clientAttemptId: 'attempt-2',
        userId: 'user-1',
        vocabId: 'stale-id',
        quizType: 'e2k',
        questionOrdinal: 2,
        selectedChoice: null,
        wasCorrect: false,
        answerGrade: 0,
        responseQuality: 0,
        elapsedMs: 5000,
        totalMs: 5000,
        hintShown: false,
        sourceBucket: 'retry',
        skillBefore: 1000,
        skillAfter: 988,
        challengeBefore: 1000,
        challengeAfter: 1006,
        memoryStrengthBefore: 50,
        memoryStrengthAfter: 20,
        lastIntervalHoursBefore: 0,
        lastIntervalHoursAfter: 0.033,
        dueAtBefore: null,
        nextReviewAt: '2026-03-16T09:02:00.000Z',
        retryDueQuestionOrdinal: 5,
        timedOut: true,
        createdAt: '2026-03-16T09:01:00.000Z',
      },
    ],
    legacyUserRatings: null,
    legacyWordElo: null,
  });

  assert.equal(progress.getAllWordProgress().length, 1);
  assert.equal(progress.getAllWordProgress()[0]?.vocabId, 'w1');
  assert.deepEqual(progress.getRecentWordIds(), ['w1']);
  assert.equal(progress.getPendingAttempts().length, 1);
});

test('restoreState clears stale per-word queues when dataset signature is missing', () => {
  const items = [
    makeItem('vocab_anchor_1lu3i79', 'anchor', '닻', 6),
    makeItem('vocab_bridge_wde3q0', 'bridge', '다리', 2),
    makeItem('vocab_current_jq7kzt', 'current', '현재의', 3),
    makeItem('w4', 'fresh', '신선한', 5),
  ];
  const { progress, quiz } = makeServices(items);

  progress.restoreState({
    adaptiveState: {
      typeSkills: {
        e2k: {
          skillRating: 1000,
          correctCount: 0,
          wrongCount: 0,
          fastCorrectCount: 0,
          fragileCorrectCount: 0,
          updatedAt: null,
        },
        k2e: {
          skillRating: 1000,
          correctCount: 0,
          wrongCount: 0,
          fastCorrectCount: 0,
          fragileCorrectCount: 0,
          updatedAt: null,
        },
        e2e: {
          skillRating: 1000,
          correctCount: 0,
          wrongCount: 0,
          fastCorrectCount: 0,
          fragileCorrectCount: 0,
          updatedAt: null,
        },
        syn: {
          skillRating: 1000,
          correctCount: 0,
          wrongCount: 0,
          fastCorrectCount: 0,
          fragileCorrectCount: 0,
          updatedAt: null,
        },
        ant: {
          skillRating: 1000,
          correctCount: 0,
          wrongCount: 0,
          fastCorrectCount: 0,
          fragileCorrectCount: 0,
          updatedAt: null,
        },
      },
      wordProgress: {
        'vocab_anchor_1lu3i79::e2k': {
          vocabId: 'vocab_anchor_1lu3i79',
          quizType: 'e2k',
          challengeRating: 1000,
          memoryStrength: 20,
          lastIntervalHours: 24,
          dueAt: '2026-03-01T00:00:00.000Z',
          seenCount: 3,
          correctStreak: 0,
          wrongStreak: 2,
          closeWrongCount: 0,
          hardWrongCount: 1,
          timeoutCount: 0,
          lastSeenAt: '2026-03-01T00:00:00.000Z',
          updatedAt: '2026-03-01T00:00:00.000Z',
        },
      },
      retryQueue: [{ wordId: 'vocab_anchor_1lu3i79', quizType: 'e2k', dueQuestionOrdinal: 2 }],
      recentWordIds: ['vocab_anchor_1lu3i79'],
      lastHydratedUserId: 'user-1',
    },
    pendingAttempts: [
      {
        clientAttemptId: 'attempt-1',
        userId: 'user-1',
        vocabId: 'vocab_anchor_1lu3i79',
        quizType: 'e2k',
        questionOrdinal: 1,
        selectedChoice: '닻',
        wasCorrect: false,
        answerGrade: 0,
        responseQuality: 0,
        elapsedMs: 5000,
        totalMs: 5000,
        hintShown: false,
        sourceBucket: 'due_review',
        skillBefore: 1000,
        skillAfter: 988,
        challengeBefore: 1000,
        challengeAfter: 1006,
        memoryStrengthBefore: 50,
        memoryStrengthAfter: 20,
        lastIntervalHoursBefore: 0,
        lastIntervalHoursAfter: 0.033,
        dueAtBefore: null,
        nextReviewAt: '2026-03-16T09:02:00.000Z',
        retryDueQuestionOrdinal: 5,
        timedOut: false,
        createdAt: '2026-03-16T09:01:00.000Z',
      },
    ],
    legacyUserRatings: null,
    legacyWordElo: {
      vocab_anchor_1lu3i79: { e2k: 1400 },
    },
  });

  assert.equal(progress.getAllWordProgress().length, 0);
  assert.deepEqual(progress.getRecentWordIds(), []);
  assert.equal(progress.getPendingAttempts().length, 0);
  assert.equal(progress.peekWordProgress('vocab_anchor_1lu3i79', 'e2k').challengeRating, 1200);

  const firstQuestion = quiz.nextQuestion();
  assert.ok(firstQuestion);
  assert.notEqual(firstQuestion?.sourceBucket, 'due_review');
});

test('quiz service prioritizes retry first and then due reviews', () => {
  const items = [
    makeItem('w1', 'anchor', '닻', 5),
    makeItem('w2', 'bridge', '다리', 5),
    makeItem('w3', 'current', '해류', 5),
  ];
  const { progress, quiz } = makeServices(items);

  progress.enqueueRetry('w1', 'e2k', 3);
  (quiz as unknown as { _roundTotal: number })._roundTotal = 2;
  const retryQuestion = quiz.nextQuestion();

  assert.ok(retryQuestion);
  assert.equal(retryQuestion?.sourceBucket, 'retry');
  assert.equal(retryQuestion?.vocabItem.id, 'w1');

  const dueProgress = progress.getOrCreateWordProgress('w2', 'e2k');
  dueProgress.seenCount = 2;
  dueProgress.dueAt = '2026-03-15T09:00:00.000Z';
  dueProgress.memoryStrength = 25;
  dueProgress.wrongStreak = 2;

  (quiz as unknown as { _roundTotal: number })._roundTotal = 0;
  const dueQuestion = quiz.nextQuestion();

  assert.ok(dueQuestion);
  assert.equal(dueQuestion?.sourceBucket, 'due_review');
  assert.equal(dueQuestion?.vocabItem.id, 'w2');
});

test('quiz service uses weakness slot and exploration slot according to the 10-question cycle', () => {
  const items = [
    makeItem('w1', 'anchor', '닻', 5),
    makeItem('w2', 'bridge', '다리', 5),
    makeItem('w3', 'current', '해류', 5),
    makeItem('w4', 'delta', '삼각주', 5),
  ];
  const { progress, quiz } = makeServices(items);

  progress.restoreState({
    adaptiveState: null,
    pendingAttempts: [],
    legacyUserRatings: {
      ratings: { e2k: 1200, k2e: 820, e2e: 1180, syn: 1170, ant: 1000 },
      overallRating: 1000,
      sessionCount: 0,
    },
    legacyWordElo: null,
  });

  const weakProgress = progress.getOrCreateWordProgress('w3', 'k2e');
  weakProgress.seenCount = 1;
  weakProgress.memoryStrength = 45;
  weakProgress.challengeRating = 860;
  weakProgress.dueAt = '2026-03-20T09:00:00.000Z';

  (quiz as unknown as { _roundTotal: number })._roundTotal = 4;
  const weaknessQuestion = quiz.nextQuestion();

  assert.ok(weaknessQuestion);
  assert.equal(weaknessQuestion?.sourceBucket, 'weakness_target');
  assert.equal(weaknessQuestion?.quizType, 'k2e');
  assert.equal(weaknessQuestion?.vocabItem.id, 'w3');

  (quiz as unknown as { _roundTotal: number })._roundTotal = 9;
  const explorationQuestion = quiz.nextQuestion();

  assert.ok(explorationQuestion);
  assert.equal(explorationQuestion?.sourceBucket, 'exploration');
});
