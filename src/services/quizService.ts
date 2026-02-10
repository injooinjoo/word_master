import type { VocabItem } from '../data/models/vocab';

// ── Quiz types ───────────────────────────────────────────────

/** Quiz type: direction of the question */
export type QuizType = 'e2k' | 'k2e' | 'e2e';

export const QUIZ_TYPE_LABELS: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
};

/** All three types, used for iteration */
export const ALL_QUIZ_TYPES: QuizType[] = ['e2k', 'k2e', 'e2e'];

// ── QuizQuestion ─────────────────────────────────────────────

export interface QuizQuestion {
  vocabItem: VocabItem;
  quizType: QuizType;
  /** Text shown as the question prompt */
  prompt: string;
  /** Four answer choices (shuffled) */
  choices: string[];
  /** The correct answer string (matches one of choices) */
  correctAnswer: string;
  /** Word ELO for this quiz type at question-generation time */
  wordElo: number;
  /**
   * Distractors ordered by similarity to the correct answer.
   * Index 0 = most similar (hardest to distinguish), last = most different (easiest).
   * Used for nuanced ELO scoring: picking an "obvious" wrong answer is penalised more.
   */
  distractorRanking: string[];
}

// ── Answer context for nuanced ELO ──────────────────────────

export interface AnswerContext {
  /** Whether the chosen answer was correct */
  correct: boolean;
  /** VocabItem id */
  wordId: string;
  /** Quiz type used for this question */
  quizType: QuizType;
  /** Time the user took to answer (ms) */
  elapsedMs: number;
  /** Total time allowed (ms) */
  totalMs: number;
  /** The choice the user selected, or null if timed out */
  selectedChoice: string | null;
  /** The correct answer string */
  correctAnswer: string;
  /** Distractors ordered by similarity (from QuizQuestion.distractorRanking) */
  distractorRanking: string[];
}

// ── Helpers ──────────────────────────────────────────────────

function shuffle<T>(arr: T[], random: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Standard ELO expected score */
function expectedScore(self: number, opponent: number): number {
  return 1 / (1 + Math.pow(10, (opponent - self) / 400));
}

// ── Round record ─────────────────────────────────────────────

/** Record of a single answered question within a round */
export interface RoundRecord {
  word: string;
  prompt: string;
  correctAnswer: string;
  /** User's chosen answer, or null if timed out */
  userAnswer: string | null;
  correct: boolean;
  quizType: QuizType;
}

/** Available round-size options */
export const ROUND_SIZE_OPTIONS = [10, 20, 50, 100] as const;
export type RoundSizeOption = (typeof ROUND_SIZE_OPTIONS)[number];

// ── Constants ────────────────────────────────────────────────

const ELO_MATCH_RANGE = 300;
const K_USER = 32;
const K_WORD = 16;
const INITIAL_RATING = 1000;

// ── Per-type ELO record ──────────────────────────────────────

type EloByType = Record<QuizType, number>;

function makeElo(value: number): EloByType {
  return { e2k: value, k2e: value, e2e: value };
}

// ── QuizService ──────────────────────────────────────────────

export class QuizService {
  /** User ratings — one per quiz type */
  private _ratings: EloByType = makeElo(INITIAL_RATING);
  private _sessionCount = 0;
  private readonly _random = () => Math.random();

  /** Word ELO map: vocabItem.id → ELO per quiz type */
  private readonly _wordElo: Map<string, EloByType> = new Map();

  // ── Round tracking ──────────────────────────────────────
  private _roundSize: RoundSizeOption = 10;
  private _roundTotal = 0;
  private _roundCorrect = 0;
  private _roundHistory: RoundRecord[] = [];

  constructor(public readonly vocabItems: VocabItem[]) {
    this._initWordElo();
  }

  // ── Getters ──────────────────────────────────────────────

  /** Get user rating for a specific quiz type */
  getRating(type: QuizType): number {
    return this._ratings[type];
  }

  /** Legacy getter — returns e2k rating for backward compat */
  get rating(): number {
    return this._ratings.e2k;
  }

  /** Get all ratings */
  get ratings(): Readonly<EloByType> {
    return { ...this._ratings };
  }

  get sessionCount(): number {
    return this._sessionCount;
  }

  get shouldShowInterstitialBeforeResult(): boolean {
    return this._sessionCount > 0 && this._sessionCount % 10 === 0;
  }

  getWordElo(wordId: string, type: QuizType): number {
    return this._wordElo.get(wordId)?.[type] ?? INITIAL_RATING;
  }

  // ── Round getters ───────────────────────────────────────

  get roundTotal(): number {
    return this._roundTotal;
  }

  get roundCorrect(): number {
    return this._roundCorrect;
  }

  get roundHistory(): readonly RoundRecord[] {
    return this._roundHistory;
  }

  /** Current round size */
  get roundSize(): RoundSizeOption {
    return this._roundSize;
  }

  /** Set round size for the next round */
  setRoundSize(size: RoundSizeOption): void {
    this._roundSize = size;
  }

  /** Whether the current round is complete */
  get isRoundComplete(): boolean {
    return this._roundTotal >= this._roundSize;
  }

  /** Reset round counters for a new round */
  resetRound(): void {
    this._roundTotal = 0;
    this._roundCorrect = 0;
    this._roundHistory = [];
  }

  // ── Word ELO initialisation ──────────────────────────────

  private _initWordElo(): void {
    for (const item of this.vocabItems) {
      const baseElo = item.level * 200;
      this._wordElo.set(item.id, makeElo(baseElo));
    }
  }

  // ── Availability check ───────────────────────────────────

  /** Check if a vocab item can serve a particular quiz type */
  private _canServe(item: VocabItem, type: QuizType): boolean {
    switch (type) {
      case 'e2k':
        // Always available — meaning + distractors are mandatory fields
        return true;
      case 'k2e':
        // Always available — we can auto-generate word distractors from the pool
        return true;
      case 'e2e':
        // Only if an English definition exists
        return !!item.definition;
    }
  }

  // ── Word selection (ELO-matched) ─────────────────────────

  private _pickNextWord(type: QuizType): VocabItem | null {
    const pool = this.vocabItems.filter((v) => this._canServe(v, type));
    if (pool.length === 0) return null;

    const userElo = this._ratings[type];
    const candidates: VocabItem[] = [];

    for (const item of pool) {
      const wElo = this._wordElo.get(item.id)?.[type] ?? INITIAL_RATING;
      if (Math.abs(wElo - userElo) <= ELO_MATCH_RANGE) {
        candidates.push(item);
      }
    }

    // Fallback: closest 5 words
    if (candidates.length === 0) {
      const sorted = [...pool].sort((a, b) => {
        const da = Math.abs((this._wordElo.get(a.id)?.[type] ?? INITIAL_RATING) - userElo);
        const db = Math.abs((this._wordElo.get(b.id)?.[type] ?? INITIAL_RATING) - userElo);
        return da - db;
      });
      const n = Math.min(5, sorted.length);
      for (let i = 0; i < n; i++) candidates.push(sorted[i]);
    }

    return candidates[Math.floor(this._random() * candidates.length)] ?? null;
  }

  // ── Distractor selection ─────────────────────────────────

  /**
   * Pick `count` distractors for the given quiz type.
   *
   * - e2k: Korean meaning distractors (from item.distractors)
   * - k2e: English word distractors (from item.wordDistractors or auto-generated)
   * - e2e: English definition distractors (from item.definitionDistractors or auto-generated)
   */
  private _pickDistractors(item: VocabItem, count: number, type: QuizType): string[] {
    switch (type) {
      case 'e2k':
        return this._pickE2kDistractors(item, count);
      case 'k2e':
        return this._pickK2eDistractors(item, count);
      case 'e2e':
        return this._pickE2eDistractors(item, count);
    }
  }

  /** E→K: pick from Korean distractors (existing behavior) */
  private _pickE2kDistractors(item: VocabItem, count: number): string[] {
    const pool = item.distractors.filter((d) => d !== item.meaning);
    if (pool.length === 0) return [];

    // Prefer same POS meanings from the global pool
    const samePosSet = new Set<string>();
    for (const other of this.vocabItems) {
      if (other.id !== item.id && other.partOfSpeech === item.partOfSpeech) {
        samePosSet.add(other.meaning);
      }
    }
    const preferred = pool.filter((d) => samePosSet.has(d));
    const rest = pool.filter((d) => !samePosSet.has(d));

    const chosen: string[] = [];
    for (const d of shuffle(preferred, this._random)) {
      if (chosen.length >= count) break;
      if (!chosen.includes(d)) chosen.push(d);
    }
    for (const d of shuffle(rest, this._random)) {
      if (chosen.length >= count) break;
      if (!chosen.includes(d)) chosen.push(d);
    }
    return chosen.slice(0, count);
  }

  /** K→E: pick from wordDistractors or auto-generate from vocab pool */
  private _pickK2eDistractors(item: VocabItem, count: number): string[] {
    const explicit = (item.wordDistractors ?? []).filter((d) => d.toLowerCase() !== item.word.toLowerCase());
    if (explicit.length >= count) {
      return shuffle(explicit, this._random).slice(0, count);
    }

    // Auto-generate: same level ± 1, same POS preferred
    const chosen = shuffle([...explicit], this._random);
    const usedLower = new Set(chosen.map((w) => w.toLowerCase()));
    usedLower.add(item.word.toLowerCase());

    const samePosPool = this.vocabItems.filter(
      (v) =>
        v.id !== item.id &&
        v.partOfSpeech === item.partOfSpeech &&
        Math.abs(v.level - item.level) <= 1 &&
        !usedLower.has(v.word.toLowerCase()),
    );
    const otherPool = this.vocabItems.filter(
      (v) =>
        v.id !== item.id &&
        v.partOfSpeech !== item.partOfSpeech &&
        Math.abs(v.level - item.level) <= 2 &&
        !usedLower.has(v.word.toLowerCase()),
    );

    for (const v of shuffle(samePosPool, this._random)) {
      if (chosen.length >= count) break;
      chosen.push(v.word);
      usedLower.add(v.word.toLowerCase());
    }
    for (const v of shuffle(otherPool, this._random)) {
      if (chosen.length >= count) break;
      chosen.push(v.word);
    }
    return chosen.slice(0, count);
  }

  /** E→E: pick from definitionDistractors or auto-generate from vocab pool */
  private _pickE2eDistractors(item: VocabItem, count: number): string[] {
    const explicit = (item.definitionDistractors ?? []).filter(
      (d) => d.toLowerCase() !== (item.definition ?? '').toLowerCase(),
    );
    if (explicit.length >= count) {
      return shuffle(explicit, this._random).slice(0, count);
    }

    // Auto-generate: pick definitions from other words
    const chosen = shuffle([...explicit], this._random);
    const usedLower = new Set(chosen.map((d) => d.toLowerCase()));
    usedLower.add((item.definition ?? '').toLowerCase());

    const pool = this.vocabItems.filter(
      (v) => v.id !== item.id && !!v.definition && !usedLower.has(v.definition!.toLowerCase()),
    );
    for (const v of shuffle(pool, this._random)) {
      if (chosen.length >= count) break;
      chosen.push(v.definition!);
      usedLower.add(v.definition!.toLowerCase());
    }
    return chosen.slice(0, count);
  }

  // ── Question generation ──────────────────────────────────

  /** Build next question for the given quiz type */
  nextQuestion(type: QuizType = 'e2k'): QuizQuestion | null {
    const item = this._pickNextWord(type);
    if (!item) return null;

    const distractors = this._pickDistractors(item, 3, type);
    if (distractors.length < 3) {
      // Not enough distractors — try to pad from item's distractor list
      const fallbackPool =
        type === 'e2k'
          ? item.distractors
          : type === 'k2e'
            ? this.vocabItems.filter((v) => v.id !== item.id).map((v) => v.word)
            : this.vocabItems.filter((v) => v.id !== item.id && !!v.definition).map((v) => v.definition!);
      for (const f of shuffle(fallbackPool, this._random)) {
        if (distractors.length >= 3) break;
        if (!distractors.includes(f)) distractors.push(f);
      }
    }

    let prompt: string;
    let correctAnswer: string;

    switch (type) {
      case 'e2k':
        prompt = item.word;
        correctAnswer = item.meaning;
        break;
      case 'k2e':
        prompt = item.meaning;
        correctAnswer = item.word;
        break;
      case 'e2e':
        prompt = item.word;
        correctAnswer = item.definition!;
        break;
    }

    // distractorRanking: ordered by similarity (index 0 = most similar to correct)
    // The _pickDistractors methods already return preferred (same POS/level) first,
    // so the order is preserved as the similarity ranking.
    const distractorRanking = distractors.slice(0, 3);

    const choices = shuffle([correctAnswer, ...distractorRanking], this._random);
    const wordElo = this._wordElo.get(item.id)?.[type] ?? INITIAL_RATING;

    return { vocabItem: item, quizType: type, prompt, choices, correctAnswer, wordElo, distractorRanking };
  }

  // ── Nuanced score calculation ─────────────────────────────

  /**
   * Compute a continuous score in [0, 1] reflecting:
   * - correctness (base)
   * - response speed (time multiplier: 1.0 for instant, 0.7 at deadline)
   * - quality of wrong answer (similar wrong = forgivable, absurd wrong = worst)
   */
  private _computeScore(ctx: AnswerContext): number {
    // Time-out → worst possible score
    if (ctx.selectedChoice === null) return 0;

    // Time multiplier: instant = 1.0, deadline = 0.7
    const ratio = Math.min(1, ctx.elapsedMs / Math.max(1, ctx.totalMs));
    const timeMul = 1.0 - 0.3 * ratio;

    if (ctx.correct) {
      // Correct: full base × time multiplier → 0.7 – 1.0
      return 1.0 * timeMul;
    }

    // Wrong: base depends on how "bad" the chosen distractor was.
    // distractorRanking[0] = most similar (forgivable), [2] = most different (worst)
    const idx = ctx.distractorRanking.indexOf(ctx.selectedChoice);
    const wrongBase = [0.3, 0.15, 0.0]; // similar → medium → absurd
    const base = idx >= 0 && idx < wrongBase.length ? wrongBase[idx] : 0.0;
    return base * timeMul;
  }

  // ── Answer submission (dual ELO update, per-type) ────────

  submitAnswer(ctx: AnswerContext, roundRecord?: Omit<RoundRecord, 'correct'>): void {
    const wordEloRecord = this._wordElo.get(ctx.wordId);
    if (!wordEloRecord) return;

    const type = ctx.quizType;
    const wordElo = wordEloRecord[type];
    const userElo = this._ratings[type];

    const eUser = expectedScore(userElo, wordElo);
    const eWord = expectedScore(wordElo, userElo);

    const score = this._computeScore(ctx);
    const sUser = score;
    const sWord = 1 - score;

    this._ratings[type] = Math.max(0, Math.round(userElo + K_USER * (sUser - eUser)));
    wordEloRecord[type] = Math.max(0, Math.round(wordElo + K_WORD * (sWord - eWord)));

    // Track round progress
    this._roundTotal++;
    if (ctx.correct) this._roundCorrect++;
    if (roundRecord) {
      this._roundHistory.push({ ...roundRecord, correct: ctx.correct });
    }
  }

  // ── Session lifecycle ────────────────────────────────────

  endSession(): void {
    this._sessionCount++;
  }

  resetSessionCount(): void {
    this._sessionCount = 0;
  }
}
