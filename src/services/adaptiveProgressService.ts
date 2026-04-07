import { v4 as uuidv4 } from 'uuid';
import type { VocabItem } from '../data/models/vocab';
import type {
  PersistedAdaptiveProgressState,
  PersistedPendingAttempt,
  PersistedRetryQueueEntry,
  PersistedTypeSkillRecord,
  PersistedUserRatings,
  PersistedWordElo,
  PersistedWordProgressRecord,
} from './storageService';
import type { AnswerContext, QuizType } from './quizService';

export type AnswerGrade = 0 | 1 | 2 | 3 | 4 | 5;
export type QuestionSourceBucket =
  | 'retry'
  | 'due_review'
  | 'weakness_target'
  | 'exploration';

export interface TypeSkillRecord {
  skillRating: number;
  correctCount: number;
  wrongCount: number;
  fastCorrectCount: number;
  fragileCorrectCount: number;
  updatedAt: string | null;
}

export interface WordProgressRecord {
  vocabId: string;
  quizType: QuizType;
  challengeRating: number;
  memoryStrength: number;
  lastIntervalHours: number;
  dueAt: string;
  seenCount: number;
  correctStreak: number;
  wrongStreak: number;
  closeWrongCount: number;
  hardWrongCount: number;
  timeoutCount: number;
  lastSeenAt: string | null;
  updatedAt: string | null;
}

export interface RetryQueueEntry {
  wordId: string;
  quizType: QuizType;
  dueQuestionOrdinal: number;
}

export interface LearningDashboard {
  overallSkill: number;
  dueReviewCount: number;
  weakestType: QuizType;
  fragileCorrectCount: number;
  hardWrongCount: number;
  timeoutCount: number;
}

export interface AdaptiveUpdateResult {
  grade: AnswerGrade;
  responseQuality: number;
  skillBefore: number;
  skillAfter: number;
  challengeBefore: number;
  challengeAfter: number;
  memoryBefore: {
    memoryStrength: number;
    lastIntervalHours: number;
    dueAt: string | null;
  };
  memoryAfter: {
    memoryStrength: number;
    lastIntervalHours: number;
    dueAt: string;
  };
  nextReviewAt: string;
  retryScheduled: boolean;
  retryDueQuestionOrdinal: number | null;
  timedOut: boolean;
}

interface SyncUser {
  id: string;
  email: string | null;
}

interface RemoteTypeSkillRow {
  quiz_type: string;
  skill_rating: number;
  correct_count: number;
  wrong_count: number;
  fast_correct_count: number;
  fragile_correct_count: number;
  updated_at: string | null;
}

interface RemoteWordProgressRow {
  vocab_id: string;
  quiz_type: string;
  challenge_rating: number;
  memory_strength: number;
  last_interval_hours: number;
  due_at: string;
  seen_count: number;
  correct_streak: number;
  wrong_streak: number;
  close_wrong_count: number;
  hard_wrong_count: number;
  timeout_count: number;
  last_seen_at: string | null;
  updated_at: string | null;
}

const QUIZ_TYPES: QuizType[] = ['e2k', 'k2e', 'e2e', 'syn', 'ant'];
const TRACKED_TYPES: QuizType[] = ['e2k', 'k2e', 'e2e', 'syn'];
const INITIAL_SKILL_RATING = 1000;
const MIN_CHALLENGE_RATING = 200;
const MAX_CHALLENGE_RATING = 2600;
const MIN_MEMORY_STRENGTH = 0;
const MAX_MEMORY_STRENGTH = 100;
const MAX_INTERVAL_HOURS = 180 * 24;
const RECENT_WORD_LIMIT = 30;
const SKILL_K = 24;
const CHALLENGE_K = 12;
const DATASET_SIGNATURE_VERSION = 1;

const RESPONSE_QUALITY_BY_GRADE: Record<AnswerGrade, number> = {
  5: 1.0,
  4: 0.85,
  3: 0.65,
  2: 0.35,
  1: 0.15,
  0: 0.0,
};

const MEMORY_DELTA_BY_GRADE: Record<AnswerGrade, number> = {
  5: 15,
  4: 10,
  3: 4,
  2: -10,
  1: -20,
  0: -30,
};

const BASE_INTERVAL_HOURS_BY_GRADE: Record<AnswerGrade, number> = {
  5: 24,
  4: 12,
  3: 4,
  2: 20 / 60,
  1: 8 / 60,
  0: 2 / 60,
};

const MULTIPLIER_BY_GRADE: Record<AnswerGrade, number> = {
  5: 2.5,
  4: 1.8,
  3: 1.2,
  2: 0.5,
  1: 0.25,
  0: 0.1,
};

const RETRY_DELAY_BY_GRADE: Partial<Record<AnswerGrade, number>> = {
  2: 7,
  1: 5,
  0: 3,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function fnv1aHash(value: string): string {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function buildVocabDatasetSignature(vocabItems: readonly VocabItem[]): string {
  const fingerprint = vocabItems
    .map((item) => `${item.id}|${item.word}|${item.meaning}|${item.partOfSpeech}|${item.level}`)
    .join('||');
  return `v${DATASET_SIGNATURE_VERSION}:${vocabItems.length}:${fnv1aHash(fingerprint)}`;
}

function expectedScore(self: number, opponent: number): number {
  return 1 / (1 + Math.pow(10, (opponent - self) / 400));
}

function nowIso(now: Date): string {
  return now.toISOString();
}

function addHours(now: Date, hours: number): string {
  return new Date(now.getTime() + hours * 60 * 60 * 1000).toISOString();
}

function toMillis(value: string | null | undefined): number {
  if (!value) return 0;
  const time = Date.parse(value);
  return Number.isNaN(time) ? 0 : time;
}

function isQuizType(value: string): value is QuizType {
  return QUIZ_TYPES.includes(value as QuizType);
}

function makeTypeSkillRecord(skillRating: number = INITIAL_SKILL_RATING): TypeSkillRecord {
  return {
    skillRating,
    correctCount: 0,
    wrongCount: 0,
    fastCorrectCount: 0,
    fragileCorrectCount: 0,
    updatedAt: null,
  };
}

function toTypeSkillMap(
  legacyRatings: PersistedUserRatings | null,
  persistedTypeSkills: Record<string, PersistedTypeSkillRecord> | undefined,
): Record<QuizType, TypeSkillRecord> {
  return QUIZ_TYPES.reduce(
    (acc, type) => {
      const persisted = persistedTypeSkills?.[type];
      if (persisted) {
        acc[type] = {
          skillRating: persisted.skillRating,
          correctCount: persisted.correctCount,
          wrongCount: persisted.wrongCount,
          fastCorrectCount: persisted.fastCorrectCount,
          fragileCorrectCount: persisted.fragileCorrectCount,
          updatedAt: persisted.updatedAt,
        };
        return acc;
      }

      const legacySkill = legacyRatings?.ratings?.[type];
      acc[type] = makeTypeSkillRecord(typeof legacySkill === 'number' ? legacySkill : INITIAL_SKILL_RATING);
      return acc;
    },
    {} as Record<QuizType, TypeSkillRecord>,
  );
}

function makeWordProgressKey(wordId: string, quizType: QuizType): string {
  return `${wordId}::${quizType}`;
}

function parseWordProgressRecord(value: PersistedWordProgressRecord): WordProgressRecord | null {
  if (!isQuizType(value.quizType)) return null;
  return {
    vocabId: value.vocabId,
    quizType: value.quizType,
    challengeRating: value.challengeRating,
    memoryStrength: value.memoryStrength,
    lastIntervalHours: value.lastIntervalHours,
    dueAt: value.dueAt,
    seenCount: value.seenCount,
    correctStreak: value.correctStreak,
    wrongStreak: value.wrongStreak,
    closeWrongCount: value.closeWrongCount,
    hardWrongCount: value.hardWrongCount,
    timeoutCount: value.timeoutCount,
    lastSeenAt: value.lastSeenAt,
    updatedAt: value.updatedAt,
  };
}

function toPersistedWordProgressRecord(record: WordProgressRecord): PersistedWordProgressRecord {
  return {
    vocabId: record.vocabId,
    quizType: record.quizType,
    challengeRating: record.challengeRating,
    memoryStrength: record.memoryStrength,
    lastIntervalHours: record.lastIntervalHours,
    dueAt: record.dueAt,
    seenCount: record.seenCount,
    correctStreak: record.correctStreak,
    wrongStreak: record.wrongStreak,
    closeWrongCount: record.closeWrongCount,
    hardWrongCount: record.hardWrongCount,
    timeoutCount: record.timeoutCount,
    lastSeenAt: record.lastSeenAt,
    updatedAt: record.updatedAt,
  };
}

function chooseMostRecent<T extends { updatedAt: string | null; lastSeenAt?: string | null }>(
  left: T | null,
  right: T | null,
): T | null {
  if (!left) return right;
  if (!right) return left;

  const leftUpdated = Math.max(toMillis(left.updatedAt), toMillis(left.lastSeenAt));
  const rightUpdated = Math.max(toMillis(right.updatedAt), toMillis(right.lastSeenAt));
  return rightUpdated > leftUpdated ? right : left;
}

async function loadSupabaseClient() {
  const supabaseModule = await import('./supabase');
  if (!supabaseModule.isSupabaseConfigured() || !supabaseModule.supabase) {
    return null;
  }
  return supabaseModule.supabase;
}

export class AdaptiveProgressService {
  private readonly _vocabById = new Map<string, VocabItem>();
  private readonly _vocabDatasetSignature: string;
  private readonly _now: () => Date;
  private _legacyWordElo: PersistedWordElo | null = null;
  private _typeSkills: Record<QuizType, TypeSkillRecord> = toTypeSkillMap(null, undefined);
  private readonly _wordProgress = new Map<string, WordProgressRecord>();
  private _retryQueue: RetryQueueEntry[] = [];
  private _recentWordIds: string[] = [];
  private _pendingAttempts: PersistedPendingAttempt[] = [];
  private _lastHydratedUserId: string | null = null;
  private _syncUser: SyncUser | null = null;
  private _onStateChanged?: () => void;

  constructor(vocabItems: readonly VocabItem[], options?: { now?: () => Date }) {
    for (const item of vocabItems) {
      this._vocabById.set(item.id, item);
    }
    this._vocabDatasetSignature = buildVocabDatasetSignature(vocabItems);
    this._now = options?.now ?? (() => new Date());
  }

  setOnStateChanged(cb: () => void): void {
    this._onStateChanged = cb;
  }

  restoreState(params: {
    adaptiveState: PersistedAdaptiveProgressState | null;
    pendingAttempts: PersistedPendingAttempt[];
    legacyUserRatings: PersistedUserRatings | null;
    legacyWordElo: PersistedWordElo | null;
  }): void {
    const hasKnownVocab = (wordId: string) => this._vocabById.has(wordId);
    const persistedDatasetSignature = params.adaptiveState?.vocabDatasetSignature ?? null;
    const canReuseWordState =
      params.adaptiveState != null && persistedDatasetSignature === this._vocabDatasetSignature;

    this._legacyWordElo = params.adaptiveState == null ? params.legacyWordElo : null;
    this._typeSkills = toTypeSkillMap(params.legacyUserRatings, params.adaptiveState?.typeSkills);
    this._wordProgress.clear();

    if (canReuseWordState) {
      for (const record of Object.values(params.adaptiveState?.wordProgress ?? {})) {
        const parsed = parseWordProgressRecord(record);
        if (!parsed) continue;
        if (!hasKnownVocab(parsed.vocabId)) continue;
        this._wordProgress.set(makeWordProgressKey(parsed.vocabId, parsed.quizType), parsed);
      }

      this._retryQueue = (params.adaptiveState?.retryQueue ?? [])
        .filter(
          (entry): entry is PersistedRetryQueueEntry =>
            isQuizType(entry.quizType) && hasKnownVocab(entry.wordId),
        )
        .map((entry) => ({
          wordId: entry.wordId,
          quizType: entry.quizType as QuizType,
          dueQuestionOrdinal: entry.dueQuestionOrdinal,
        }))
        .sort((a, b) => a.dueQuestionOrdinal - b.dueQuestionOrdinal);
      this._recentWordIds = [...(params.adaptiveState?.recentWordIds ?? [])]
        .filter((wordId) => hasKnownVocab(wordId))
        .slice(-RECENT_WORD_LIMIT);
      this._pendingAttempts = params.pendingAttempts.filter((attempt) => hasKnownVocab(attempt.vocabId));
      this._lastHydratedUserId = params.adaptiveState?.lastHydratedUserId ?? null;
      return;
    }

    this._retryQueue = [];
    this._recentWordIds = [];
    this._pendingAttempts = [];
    this._lastHydratedUserId = null;
  }

  getPersistedState(): PersistedAdaptiveProgressState {
    const wordProgress: Record<string, PersistedWordProgressRecord> = {};
    for (const [key, value] of this._wordProgress) {
      wordProgress[key] = toPersistedWordProgressRecord(value);
    }

    return {
      typeSkills: QUIZ_TYPES.reduce(
        (acc, type) => {
          const skill = this._typeSkills[type];
          acc[type] = {
            skillRating: skill.skillRating,
            correctCount: skill.correctCount,
            wrongCount: skill.wrongCount,
            fastCorrectCount: skill.fastCorrectCount,
            fragileCorrectCount: skill.fragileCorrectCount,
            updatedAt: skill.updatedAt,
          };
          return acc;
        },
        {} as Record<string, PersistedTypeSkillRecord>,
      ),
      wordProgress,
      retryQueue: this._retryQueue.map((entry) => ({
        wordId: entry.wordId,
        quizType: entry.quizType,
        dueQuestionOrdinal: entry.dueQuestionOrdinal,
      })),
      recentWordIds: [...this._recentWordIds],
      lastHydratedUserId: this._lastHydratedUserId,
      vocabDatasetSignature: this._vocabDatasetSignature,
    };
  }

  getPendingAttempts(): PersistedPendingAttempt[] {
    return [...this._pendingAttempts];
  }

  getTypeSkill(type: QuizType): TypeSkillRecord {
    return { ...this._typeSkills[type] };
  }

  getSkillRating(type: QuizType): number {
    return this._typeSkills[type].skillRating;
  }

  getTrackedRatings(): Readonly<Record<'e2k' | 'k2e' | 'e2e' | 'syn', number>> {
    return {
      e2k: this._typeSkills.e2k.skillRating,
      k2e: this._typeSkills.k2e.skillRating,
      e2e: this._typeSkills.e2e.skillRating,
      syn: this._typeSkills.syn.skillRating,
    };
  }

  getOverallSkill(): number {
    return Math.round(
      this._typeSkills.e2k.skillRating * 0.2 +
        this._typeSkills.k2e.skillRating * 0.4 +
        this._typeSkills.e2e.skillRating * 0.25 +
        this._typeSkills.syn.skillRating * 0.15,
    );
  }

  peekWordProgress(wordId: string, quizType: QuizType): WordProgressRecord {
    return { ...this._peekOrBuildWordProgress(wordId, quizType) };
  }

  getOrCreateWordProgress(wordId: string, quizType: QuizType): WordProgressRecord {
    const key = makeWordProgressKey(wordId, quizType);
    const existing = this._wordProgress.get(key);
    if (existing) return existing;

    const created = this._peekOrBuildWordProgress(wordId, quizType);
    this._wordProgress.set(key, created);
    return created;
  }

  getAllWordProgress(): WordProgressRecord[] {
    return [...this._wordProgress.values()].map((record) => ({ ...record }));
  }

  getTotalSeenCount(wordId: string): number {
    let total = 0;
    for (const record of this._wordProgress.values()) {
      if (record.vocabId === wordId) {
        total += record.seenCount;
      }
    }
    return total;
  }

  getRecentWordIds(): readonly string[] {
    return this._recentWordIds;
  }

  recordPresentedWord(wordId: string): void {
    this._recentWordIds = [...this._recentWordIds.filter((id) => id !== wordId), wordId].slice(
      -RECENT_WORD_LIMIT,
    );
    this._emitStateChanged();
  }

  resetSessionState(): void {
    this._retryQueue = [];
    this._recentWordIds = [];
    this._emitStateChanged();
  }

  takeRetryCandidate(
    questionOrdinal: number,
    canUse: (wordId: string, quizType: QuizType) => boolean,
  ): RetryQueueEntry | null {
    this._retryQueue.sort((a, b) => a.dueQuestionOrdinal - b.dueQuestionOrdinal);

    for (let index = 0; index < this._retryQueue.length; index++) {
      const entry = this._retryQueue[index];
      if (entry.dueQuestionOrdinal > questionOrdinal) break;
      if (!canUse(entry.wordId, entry.quizType)) continue;

      this._retryQueue.splice(index, 1);
      this._emitStateChanged();
      return entry;
    }

    return null;
  }

  classifyAnswer(ctx: AnswerContext): {
    grade: AnswerGrade;
    responseQuality: number;
    distractorRank: number | null;
    timedOut: boolean;
  } {
    const timedOut = ctx.selectedChoice === null;
    if (timedOut) {
      return {
        grade: 0,
        responseQuality: RESPONSE_QUALITY_BY_GRADE[0],
        distractorRank: null,
        timedOut: true,
      };
    }

    if (ctx.correct) {
      const ratio = clamp(ctx.elapsedMs / Math.max(1, ctx.totalMs), 0, 1);
      const grade: AnswerGrade =
        !ctx.hintShown && ratio <= 0.45 ? 5 : !ctx.hintShown && ratio <= 0.75 ? 4 : 3;

      return {
        grade,
        responseQuality: RESPONSE_QUALITY_BY_GRADE[grade],
        distractorRank: null,
        timedOut: false,
      };
    }

    const distractorRank =
      typeof ctx.distractorRank === 'number'
        ? ctx.distractorRank
        : ctx.selectedChoice == null
          ? null
          : ctx.distractorRanking.indexOf(ctx.selectedChoice);
    const grade: AnswerGrade =
      distractorRank === 0 ? 2 : distractorRank === 1 ? 1 : 0;

    return {
      grade,
      responseQuality: RESPONSE_QUALITY_BY_GRADE[grade],
      distractorRank,
      timedOut: false,
    };
  }

  applyAdaptiveUpdate(ctx: AnswerContext): AdaptiveUpdateResult {
    const classified = this.classifyAnswer(ctx);
    const typeSkill = this._typeSkills[ctx.quizType];
    const wordProgress = this.getOrCreateWordProgress(ctx.wordId, ctx.quizType);
    const now = this._now();
    const timestamp = nowIso(now);

    const skillBefore = typeSkill.skillRating;
    const challengeBefore = wordProgress.challengeRating;
    const memoryBefore = {
      memoryStrength: wordProgress.memoryStrength,
      lastIntervalHours: wordProgress.lastIntervalHours,
      dueAt: wordProgress.seenCount > 0 ? wordProgress.dueAt : null,
    };

    const expected = expectedScore(skillBefore, challengeBefore);
    const skillDelta = Math.round(SKILL_K * (classified.responseQuality - expected));
    const challengeDelta = Math.round(CHALLENGE_K * (expected - classified.responseQuality));
    const skillAfter = clamp(skillBefore + skillDelta, 0, 3000);
    const challengeAfter = clamp(
      challengeBefore + challengeDelta,
      MIN_CHALLENGE_RATING,
      MAX_CHALLENGE_RATING,
    );

    typeSkill.skillRating = skillAfter;
    typeSkill.updatedAt = timestamp;
    if (ctx.correct) {
      typeSkill.correctCount += 1;
    } else {
      typeSkill.wrongCount += 1;
    }
    if (classified.grade === 5) {
      typeSkill.fastCorrectCount += 1;
    }
    if (classified.grade === 3) {
      typeSkill.fragileCorrectCount += 1;
    }

    const baseIntervalHours = BASE_INTERVAL_HOURS_BY_GRADE[classified.grade];
    const nextIntervalHours =
      wordProgress.seenCount === 0 || wordProgress.lastIntervalHours <= 0
        ? baseIntervalHours
        : clamp(
            Math.max(wordProgress.lastIntervalHours, baseIntervalHours) *
              MULTIPLIER_BY_GRADE[classified.grade],
            baseIntervalHours,
            MAX_INTERVAL_HOURS,
          );

    wordProgress.challengeRating = challengeAfter;
    wordProgress.memoryStrength = clamp(
      wordProgress.memoryStrength + MEMORY_DELTA_BY_GRADE[classified.grade],
      MIN_MEMORY_STRENGTH,
      MAX_MEMORY_STRENGTH,
    );
    wordProgress.lastIntervalHours = nextIntervalHours;
    wordProgress.dueAt = addHours(now, nextIntervalHours);
    wordProgress.seenCount += 1;
    wordProgress.lastSeenAt = timestamp;
    wordProgress.updatedAt = timestamp;

    if (ctx.correct) {
      wordProgress.correctStreak += 1;
      wordProgress.wrongStreak = 0;
    } else {
      wordProgress.wrongStreak += 1;
      wordProgress.correctStreak = 0;
    }
    if (classified.grade === 2) {
      wordProgress.closeWrongCount += 1;
    }
    if (classified.grade === 0) {
      wordProgress.hardWrongCount += 1;
    }
    if (classified.timedOut) {
      wordProgress.timeoutCount += 1;
    }

    const retryDelay = RETRY_DELAY_BY_GRADE[classified.grade];
    let retryDueQuestionOrdinal: number | null = null;
    if (!ctx.correct && typeof retryDelay === 'number') {
      retryDueQuestionOrdinal = ctx.questionOrdinal + retryDelay;
      this.enqueueRetry(ctx.wordId, ctx.quizType, retryDueQuestionOrdinal);
    }

    if (this._syncUser) {
      this._pendingAttempts.push({
        clientAttemptId: uuidv4(),
        userId: this._syncUser.id,
        vocabId: ctx.wordId,
        quizType: ctx.quizType,
        questionOrdinal: ctx.questionOrdinal,
        selectedChoice: ctx.selectedChoice,
        wasCorrect: ctx.correct,
        answerGrade: classified.grade,
        responseQuality: classified.responseQuality,
        elapsedMs: ctx.elapsedMs,
        totalMs: ctx.totalMs,
        hintShown: ctx.hintShown,
        sourceBucket: ctx.sourceBucket,
        skillBefore,
        skillAfter,
        challengeBefore,
        challengeAfter,
        memoryStrengthBefore: memoryBefore.memoryStrength,
        memoryStrengthAfter: wordProgress.memoryStrength,
        lastIntervalHoursBefore: memoryBefore.lastIntervalHours,
        lastIntervalHoursAfter: wordProgress.lastIntervalHours,
        dueAtBefore: memoryBefore.dueAt,
        nextReviewAt: wordProgress.dueAt,
        retryDueQuestionOrdinal,
        timedOut: classified.timedOut,
        createdAt: timestamp,
      });
    }

    this._emitStateChanged();

    return {
      grade: classified.grade,
      responseQuality: classified.responseQuality,
      skillBefore,
      skillAfter,
      challengeBefore,
      challengeAfter,
      memoryBefore,
      memoryAfter: {
        memoryStrength: wordProgress.memoryStrength,
        lastIntervalHours: wordProgress.lastIntervalHours,
        dueAt: wordProgress.dueAt,
      },
      nextReviewAt: wordProgress.dueAt,
      retryScheduled: retryDueQuestionOrdinal != null,
      retryDueQuestionOrdinal,
      timedOut: classified.timedOut,
    };
  }

  enqueueRetry(wordId: string, quizType: QuizType, dueQuestionOrdinal: number): void {
    const existingIndex = this._retryQueue.findIndex(
      (entry) => entry.wordId === wordId && entry.quizType === quizType,
    );
    const nextEntry = { wordId, quizType, dueQuestionOrdinal };

    if (existingIndex >= 0) {
      const existing = this._retryQueue[existingIndex];
      this._retryQueue[existingIndex] =
        existing.dueQuestionOrdinal <= dueQuestionOrdinal ? existing : nextEntry;
    } else {
      this._retryQueue.push(nextEntry);
    }
  }

  fetchLearningDashboard(): LearningDashboard {
    const now = this._now().getTime();
    const dueReviewCount = [...this._wordProgress.values()].filter(
      (record) => record.seenCount > 0 && toMillis(record.dueAt) <= now,
    ).length;
    const weakestType = [...TRACKED_TYPES].sort(
      (left, right) => this._typeSkills[left].skillRating - this._typeSkills[right].skillRating,
    )[0];

    let hardWrongCount = 0;
    let timeoutCount = 0;
    for (const record of this._wordProgress.values()) {
      hardWrongCount += record.hardWrongCount;
      timeoutCount += record.timeoutCount;
    }

    const fragileCorrectCount = TRACKED_TYPES.reduce(
      (sum, type) => sum + this._typeSkills[type].fragileCorrectCount,
      0,
    );

    return {
      overallSkill: this.getOverallSkill(),
      dueReviewCount,
      weakestType,
      fragileCorrectCount,
      hardWrongCount,
      timeoutCount,
    };
  }

  async setSyncUser(user: SyncUser | null): Promise<void> {
    this._syncUser = user;
    if (!user) return;

    await this.hydrateRemoteState(user.id);
    await this.flushPendingAttempts();
  }

  async hydrateRemoteState(userId: string): Promise<void> {
    const client = await loadSupabaseClient();
    if (!client) return;
    const { data: typeData, error: typeError } = await client
      .from('user_type_skill')
      .select(
        'quiz_type, skill_rating, correct_count, wrong_count, fast_correct_count, fragile_correct_count, updated_at',
      )
      .eq('user_id', userId);

    if (typeError) {
      throw new Error(typeError.message);
    }

    for (const row of (typeData ?? []) as RemoteTypeSkillRow[]) {
      if (!isQuizType(row.quiz_type)) continue;
      const remoteRecord: TypeSkillRecord = {
        skillRating: Number(row.skill_rating),
        correctCount: Number(row.correct_count),
        wrongCount: Number(row.wrong_count),
        fastCorrectCount: Number(row.fast_correct_count),
        fragileCorrectCount: Number(row.fragile_correct_count),
        updatedAt: row.updated_at,
      };
      const merged = chooseMostRecent(this._typeSkills[row.quiz_type], remoteRecord);
      if (merged) {
        this._typeSkills[row.quiz_type] = merged;
      }
    }

    const wordProgressRows = await this._fetchAllRemoteWordProgress(userId);
    for (const row of wordProgressRows) {
      if (!isQuizType(row.quiz_type)) continue;
      if (!this._vocabById.has(row.vocab_id)) continue;

      const remoteRecord: WordProgressRecord = {
        vocabId: row.vocab_id,
        quizType: row.quiz_type,
        challengeRating: Number(row.challenge_rating),
        memoryStrength: Number(row.memory_strength),
        lastIntervalHours: Number(row.last_interval_hours),
        dueAt: row.due_at,
        seenCount: Number(row.seen_count),
        correctStreak: Number(row.correct_streak),
        wrongStreak: Number(row.wrong_streak),
        closeWrongCount: Number(row.close_wrong_count),
        hardWrongCount: Number(row.hard_wrong_count),
        timeoutCount: Number(row.timeout_count),
        lastSeenAt: row.last_seen_at,
        updatedAt: row.updated_at,
      };
      const key = makeWordProgressKey(remoteRecord.vocabId, remoteRecord.quizType);
      const merged = chooseMostRecent(this._wordProgress.get(key) ?? null, remoteRecord);
      if (merged) {
        this._wordProgress.set(key, merged);
      }
    }

    this._lastHydratedUserId = userId;
    this._emitStateChanged();
  }

  async flushPendingAttempts(): Promise<void> {
    if (!this._syncUser) return;

    const client = await loadSupabaseClient();
    if (!client) return;
    const attempts = this._pendingAttempts.filter((attempt) => attempt.userId === this._syncUser?.id);
    if (attempts.length === 0) return;

    const attemptRows = attempts.map((attempt) => ({
      client_attempt_id: attempt.clientAttemptId,
      user_id: attempt.userId,
      vocab_id: attempt.vocabId,
      quiz_type: attempt.quizType,
      question_ordinal: attempt.questionOrdinal,
      selected_choice: attempt.selectedChoice,
      was_correct: attempt.wasCorrect,
      answer_grade: attempt.answerGrade,
      response_quality: attempt.responseQuality,
      elapsed_ms: attempt.elapsedMs,
      total_ms: attempt.totalMs,
      hint_shown: attempt.hintShown,
      source_bucket: attempt.sourceBucket,
      skill_before: attempt.skillBefore,
      skill_after: attempt.skillAfter,
      challenge_before: attempt.challengeBefore,
      challenge_after: attempt.challengeAfter,
      memory_strength_before: attempt.memoryStrengthBefore,
      memory_strength_after: attempt.memoryStrengthAfter,
      last_interval_hours_before: attempt.lastIntervalHoursBefore,
      last_interval_hours_after: attempt.lastIntervalHoursAfter,
      due_at_before: attempt.dueAtBefore,
      next_review_at: attempt.nextReviewAt,
      retry_due_question_ordinal: attempt.retryDueQuestionOrdinal,
      timed_out: attempt.timedOut,
      created_at: attempt.createdAt,
    }));

    const { error: attemptsError } = await client
      .from('answer_attempts')
      .upsert(attemptRows, { onConflict: 'client_attempt_id' });
    if (attemptsError) {
      throw new Error(attemptsError.message);
    }

    const typeRows = QUIZ_TYPES.map((type) => {
      const skill = this._typeSkills[type];
      return {
        user_id: this._syncUser?.id,
        quiz_type: type,
        skill_rating: skill.skillRating,
        correct_count: skill.correctCount,
        wrong_count: skill.wrongCount,
        fast_correct_count: skill.fastCorrectCount,
        fragile_correct_count: skill.fragileCorrectCount,
        updated_at: skill.updatedAt ?? nowIso(this._now()),
      };
    });

    const { error: typeError } = await client
      .from('user_type_skill')
      .upsert(typeRows, { onConflict: 'user_id,quiz_type' });
    if (typeError) {
      throw new Error(typeError.message);
    }

    const touchedKeys = new Set(attempts.map((attempt) => makeWordProgressKey(attempt.vocabId, attempt.quizType as QuizType)));
    const wordRows = [...touchedKeys]
      .map((key) => this._wordProgress.get(key))
      .filter((record): record is WordProgressRecord => !!record)
      .map((record) => ({
        user_id: this._syncUser?.id,
        vocab_id: record.vocabId,
        quiz_type: record.quizType,
        challenge_rating: record.challengeRating,
        memory_strength: record.memoryStrength,
        last_interval_hours: record.lastIntervalHours,
        due_at: record.dueAt,
        seen_count: record.seenCount,
        correct_streak: record.correctStreak,
        wrong_streak: record.wrongStreak,
        close_wrong_count: record.closeWrongCount,
        hard_wrong_count: record.hardWrongCount,
        timeout_count: record.timeoutCount,
        last_seen_at: record.lastSeenAt,
        updated_at: record.updatedAt ?? nowIso(this._now()),
      }));

    if (wordRows.length > 0) {
      const { error: wordError } = await client
        .from('user_word_progress')
        .upsert(wordRows, { onConflict: 'user_id,vocab_id,quiz_type' });
      if (wordError) {
        throw new Error(wordError.message);
      }
    }

    const flushedIds = new Set(attempts.map((attempt) => attempt.clientAttemptId));
    this._pendingAttempts = this._pendingAttempts.filter(
      (attempt) => !flushedIds.has(attempt.clientAttemptId),
    );
    this._emitStateChanged();
  }

  private async _fetchAllRemoteWordProgress(userId: string): Promise<RemoteWordProgressRow[]> {
    const client = await loadSupabaseClient();
    if (!client) return [];
    const pageSize = 1000;
    const rows: RemoteWordProgressRow[] = [];
    let start = 0;

    while (true) {
      const { data, error } = await client
        .from('user_word_progress')
        .select(
          'vocab_id, quiz_type, challenge_rating, memory_strength, last_interval_hours, due_at, seen_count, correct_streak, wrong_streak, close_wrong_count, hard_wrong_count, timeout_count, last_seen_at, updated_at',
        )
        .eq('user_id', userId)
        .range(start, start + pageSize - 1);

      if (error) {
        throw new Error(error.message);
      }

      const page = (data ?? []) as RemoteWordProgressRow[];
      rows.push(...page);
      if (page.length < pageSize) break;
      start += pageSize;
    }

    return rows;
  }

  private _peekOrBuildWordProgress(wordId: string, quizType: QuizType): WordProgressRecord {
    const existing = this._wordProgress.get(makeWordProgressKey(wordId, quizType));
    if (existing) return { ...existing };

    const item = this._vocabById.get(wordId);
    const legacyChallenge = this._legacyWordElo?.[wordId]?.[quizType];
    const baseChallenge =
      typeof legacyChallenge === 'number'
        ? legacyChallenge
        : item
          ? item.level * 200
          : INITIAL_SKILL_RATING;

    return {
      vocabId: wordId,
      quizType,
      challengeRating: clamp(baseChallenge, MIN_CHALLENGE_RATING, MAX_CHALLENGE_RATING),
      memoryStrength: 50,
      lastIntervalHours: 0,
      dueAt: nowIso(this._now()),
      seenCount: 0,
      correctStreak: 0,
      wrongStreak: 0,
      closeWrongCount: 0,
      hardWrongCount: 0,
      timeoutCount: 0,
      lastSeenAt: null,
      updatedAt: null,
    };
  }

  private _emitStateChanged(): void {
    this._onStateChanged?.();
  }
}

export { makeWordProgressKey };
