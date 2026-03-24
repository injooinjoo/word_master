import type { PartOfSpeech, VocabItem } from '../data/models/vocab';
import type {
  AdaptiveUpdateResult,
  LearningDashboard,
  QuestionSourceBucket,
} from './adaptiveProgressService';
import { AdaptiveProgressService } from './adaptiveProgressService';
import { GradeTable } from '../shared/constants/gradeTable';

// ── Quiz types ───────────────────────────────────────────────

/** Quiz type: direction of the question */
export type QuizType = 'e2k' | 'k2e' | 'e2e' | 'syn' | 'ant';

export const QUIZ_TYPE_LABELS: Record<QuizType, string> = {
  e2k: '영한',
  k2e: '한영',
  e2e: '영영',
  syn: '동의어',
  ant: '반의어',
};

/** All quiz types used for adaptive questioning (antonym excluded by product decision) */
export const TRACKED_QUIZ_TYPES = ['e2k', 'k2e', 'e2e', 'syn'] as const;
export type TrackedQuizType = (typeof TRACKED_QUIZ_TYPES)[number];
export const ALL_QUIZ_TYPES: TrackedQuizType[] = [...TRACKED_QUIZ_TYPES];

export interface TypePerformance {
  attempts: number;
  correct: number;
}

export interface QuizTypeSummary {
  rating: number;
  tierLabel: string;
  attempts: number;
  correct: number;
  accuracyPercent: number;
}

export interface QuizResultSummary {
  byType: Record<TrackedQuizType, QuizTypeSummary>;
  compositeRating: number;
}

// ── QuizQuestion ─────────────────────────────────────────────

export interface QuizQuestion {
  vocabItem: VocabItem;
  quizType: QuizType;
  sourceBucket: QuestionSourceBucket;
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
  /** Whether the user saw the hint banner before answering */
  hintShown: boolean;
  /** Why this question was selected */
  sourceBucket: QuestionSourceBucket;
  /** 1-based question number in the current round */
  questionOrdinal: number;
  /** Selected distractor rank when wrong (0 = close wrong, 2 = hard wrong) */
  distractorRank?: number;
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

function normalizeWord(value: string): string {
  return value.trim().toLowerCase();
}

/** Small Levenshtein implementation for typo filtering */
function editDistance(a: string, b: string): number {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp: number[][] = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

function isEnglishWordLike(value: string): boolean {
  return /^[a-z][a-z'-]*$/i.test(value.trim());
}

function tokenizeMeaning(value: string): Set<string> {
  const cleaned = value
    .toLowerCase()
    .replace(/[()[\],;~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return new Set();

  const tokens = cleaned
    .split(' ')
    .map((t) => t.trim())
    .filter((t) => t.length >= 2);
  return new Set(tokens);
}

// ── Round record ─────────────────────────────────────────────

/** Record of a single answered question within a round */
export interface RoundRecord {
  word: string;
  meaning: string;
  prompt: string;
  correctAnswer: string;
  /** User's chosen answer, or null if timed out */
  userAnswer: string | null;
  correct: boolean;
  quizType: QuizType;
}

/** @deprecated Round-size options removed — quiz is now continuous */

// ── Constants ────────────────────────────────────────────────

const SKILL_MATCH_RANGE = 250;
const EXPLORATION_BASE_RANGE = 200;
const EXPLORATION_MAX_RANGE = 600;
const K2E_EXPLICIT_STRONG_SCORE = 3.2;
const K2E_EXPLICIT_MIN_SCORE = 2.0;

/**
 * Curated hardcoded fallback pool for K→E distractors.
 * These are real words only; runtime ranking chooses the most confusing ones.
 */
const CURATED_K2E_DISTRACTOR_BANK: Record<PartOfSpeech, string[]> = {
  noun: ['concept', 'context', 'process', 'pattern', 'principle', 'approach', 'effect', 'response'],
  verb: ['confirm', 'confer', 'profess', 'compose', 'convert', 'confront', 'connect', 'control'],
  adjective: ['critical', 'crucial', 'careful', 'complex', 'casual', 'formal', 'neutral', 'stable'],
  adverb: ['carefully', 'clearly', 'barely', 'briefly', 'roughly', 'deeply', 'strictly', 'widely'],
  preposition: ['within', 'beyond', 'across', 'around', 'between', 'against', 'toward', 'through'],
  conjunction: ['although', 'whereas', 'because', 'unless', 'however', 'therefore', 'meanwhile', 'otherwise'],
  interjection: ['alas', 'wow', 'oops', 'bravo', 'hurray', 'hey', 'oh', 'ah'],
  pronoun: ['someone', 'anyone', 'everyone', 'nothing', 'anything', 'themselves', 'ourselves', 'yourself'],
};

const CURATED_K2E_WORD_SET = new Set(
  Object.values(CURATED_K2E_DISTRACTOR_BANK)
    .flat()
    .map((w) => normalizeWord(w)),
);

const TEMPLATE_DEFINITION_SET = new Set(
  [
    'to perform an action, process, or change in a particular context',
    'describing a quality, condition, or characteristic of a noun',
    'modifying how, when, where, or to what degree something happens',
    'showing the relation between a noun phrase and other elements in a sentence',
    'connecting words, phrases, or clauses to build a complete sentence',
    'expressing sudden feeling, reaction, or emphasis in speech',
    'used in place of a noun to avoid repetition in discourse',
    'a person, thing, concept, state, or event referred to in context',
  ].map((v) => v.toLowerCase()),
);

const TEMPLATE_SYNONYM_POOLS: Record<PartOfSpeech, string[]> = {
  noun: ['item', 'entity', 'concept', 'object', 'factor', 'element'],
  verb: ['perform', 'execute', 'carryout', 'apply', 'handle', 'process'],
  adjective: ['general', 'basic', 'primary', 'typical', 'core', 'standard'],
  adverb: ['clearly', 'quickly', 'carefully', 'directly', 'gradually', 'mostly'],
  preposition: ['within', 'across', 'along', 'beyond', 'through', 'toward'],
  conjunction: ['and', 'while', 'whereas', 'therefore', 'however', 'also'],
  interjection: ['wow', 'oops', 'ah', 'oh', 'hey', 'alas'],
  pronoun: ['someone', 'anyone', 'whoever', 'somebody', 'nobody', 'everyone'],
};

const TEMPLATE_ANTONYM_POOLS: Record<PartOfSpeech, string[]> = {
  noun: ['void', 'nothing', 'absence', 'null', 'lack', 'gap'],
  verb: ['ignore', 'delay', 'avoid', 'stop', 'neglect', 'omit'],
  adjective: ['minor', 'rare', 'atypical', 'unclear', 'unstable', 'secondary'],
  adverb: ['roughly', 'slowly', 'rarely', 'indirectly', 'vaguely', 'barely'],
  preposition: ['outside', 'against', 'awayfrom', 'without', 'apartfrom', 'off'],
  conjunction: ['neither', 'nor', 'instead', 'otherwise', 'despite', 'unless'],
  interjection: ['meh', 'hmm', 'ugh', 'nope', 'eh', 'sigh'],
  pronoun: ['nobody', 'nothing', 'none', 'neither', 'nowhere', 'noone'],
};

type PerformanceByType = Record<QuizType, TypePerformance>;

function makePerformance(): PerformanceByType {
  return {
    e2k: { attempts: 0, correct: 0 },
    k2e: { attempts: 0, correct: 0 },
    e2e: { attempts: 0, correct: 0 },
    syn: { attempts: 0, correct: 0 },
    ant: { attempts: 0, correct: 0 },
  };
}

// ── QuizService ──────────────────────────────────────────────

export class QuizService {
  private _sessionCount = 0;
  private readonly _random = () => Math.random();
  private readonly _vocabById: Map<string, VocabItem>;
  private readonly _vocabWordSet: Set<string>;
  private readonly _meaningByWord: Map<string, string>;
  private _typePerformance: PerformanceByType = makePerformance();
  private _lastUpdateResult: AdaptiveUpdateResult | null = null;

  // ── Session tracking ──────────────────────────────────
  private _roundTotal = 0;
  private _roundCorrect = 0;
  private _roundHistory: RoundRecord[] = [];

  constructor(
    public readonly vocabItems: VocabItem[],
    private readonly _progressService: AdaptiveProgressService,
  ) {
    this._vocabById = new Map(vocabItems.map((item) => [item.id, item]));
    this._vocabWordSet = new Set(vocabItems.map((v) => normalizeWord(v.word)));
    this._meaningByWord = new Map(vocabItems.map((v) => [normalizeWord(v.word), v.meaning ?? '']));
  }

  // ── Getters ──────────────────────────────────────────────

  /** Get user rating for a specific quiz type */
  getRating(type: QuizType): number {
    return this._progressService.getSkillRating(type);
  }

  /** Legacy getter — returns e2k rating for backward compat */
  get rating(): number {
    return this._progressService.getSkillRating('e2k');
  }

  /** Get all ratings */
  get ratings(): Readonly<Record<QuizType, number>> {
    return {
      e2k: this._progressService.getSkillRating('e2k'),
      k2e: this._progressService.getSkillRating('k2e'),
      e2e: this._progressService.getSkillRating('e2e'),
      syn: this._progressService.getSkillRating('syn'),
      ant: this._progressService.getSkillRating('ant'),
    };
  }

  /** Tracked ratings used by result/score sync (e2k, k2e, e2e, syn only) */
  get trackedRatings(): Readonly<Record<TrackedQuizType, number>> {
    return this._progressService.getTrackedRatings();
  }

  get compositeRating(): number {
    return this._progressService.getOverallSkill();
  }

  get resultSummary(): QuizResultSummary {
    const byType = ALL_QUIZ_TYPES.reduce((acc, type) => {
      const perf = this._typePerformance[type];
      const attempts = perf.attempts;
      const correct = perf.correct;
      const accuracyPercent = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
      acc[type] = {
        rating: this._progressService.getSkillRating(type),
        tierLabel: GradeTable.gradeLabel(this._progressService.getSkillRating(type)),
        attempts,
        correct,
        accuracyPercent,
      };
      return acc;
    }, {} as Record<TrackedQuizType, QuizTypeSummary>);

    return {
      byType,
      compositeRating: this.compositeRating,
    };
  }

  /** Unified rating used to pick questions by difficulty regardless of type */
  get overallRating(): number {
    return this._progressService.getOverallSkill();
  }

  get sessionCount(): number {
    return this._sessionCount;
  }

  get shouldShowInterstitialBeforeResult(): boolean {
    return this._sessionCount > 0 && this._sessionCount % 10 === 0;
  }

  getWordElo(wordId: string, type: QuizType): number {
    return this._progressService.peekWordProgress(wordId, type).challengeRating;
  }

  get learningDashboard(): LearningDashboard {
    return this._progressService.fetchLearningDashboard();
  }

  get lastUpdateResult(): AdaptiveUpdateResult | null {
    return this._lastUpdateResult;
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

  /** Continuous mode — quiz never auto-ends */
  get isRoundComplete(): boolean {
    return false;
  }

  /** Reset session counters (ELO ratings are preserved) */
  resetSession(): void {
    this._roundTotal = 0;
    this._roundCorrect = 0;
    this._roundHistory = [];
    this._typePerformance = makePerformance();
    this._lastUpdateResult = null;
    this._progressService.resetSessionState();
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
      case 'syn':
        return this._hasReliableSynonyms(item);
      case 'ant':
        return this._hasReliableAntonyms(item);
    }
  }

  private _isTemplateLikeEntry(item: VocabItem): boolean {
    const def = (item.definition ?? '').trim().toLowerCase();
    const hasTemplateDef = !!def && TEMPLATE_DEFINITION_SET.has(def);
    const synPool = new Set((TEMPLATE_SYNONYM_POOLS[item.partOfSpeech] ?? []).map((v) => v.toLowerCase()));
    const antPool = new Set((TEMPLATE_ANTONYM_POOLS[item.partOfSpeech] ?? []).map((v) => v.toLowerCase()));
    const syn = (item.synonyms ?? []).map((v) => normalizeWord(v)).filter(Boolean);
    const ant = (item.antonyms ?? []).map((v) => normalizeWord(v)).filter(Boolean);
    const synAllTemplate = syn.length > 0 && syn.every((v) => synPool.has(v));
    const antAllTemplate = ant.length > 0 && ant.every((v) => antPool.has(v));
    return hasTemplateDef && synAllTemplate && antAllTemplate;
  }

  private _hasReliableSynonyms(item: VocabItem): boolean {
    const raw = item.synonyms ?? [];
    if (raw.length === 0) return false;
    if (this._isTemplateLikeEntry(item)) return false;
    const cleaned = raw
      .map((v) => normalizeWord(v))
      .filter((v) => !!v && isEnglishWordLike(v) && v !== normalizeWord(item.word));
    if (cleaned.length === 0) return false;
    const synPool = new Set((TEMPLATE_SYNONYM_POOLS[item.partOfSpeech] ?? []).map((v) => v.toLowerCase()));
    const allTemplateTokens = cleaned.every((v) => synPool.has(v));
    return !allTemplateTokens;
  }

  private _primaryReliableSynonym(item: VocabItem): string | null {
    if (!this._hasReliableSynonyms(item)) return null;
    const answer = (item.synonyms ?? [])
      .map((v) => normalizeWord(v))
      .find((v) => !!v && isEnglishWordLike(v) && v !== normalizeWord(item.word));
    return answer ?? null;
  }

  private _hasReliableAntonyms(item: VocabItem): boolean {
    const raw = item.antonyms ?? [];
    if (raw.length === 0) return false;
    if (this._isTemplateLikeEntry(item)) return false;
    const cleaned = raw
      .map((v) => normalizeWord(v))
      .filter((v) => !!v && isEnglishWordLike(v) && v !== normalizeWord(item.word));
    if (cleaned.length === 0) return false;
    const antPool = new Set((TEMPLATE_ANTONYM_POOLS[item.partOfSpeech] ?? []).map((v) => v.toLowerCase()));
    const allTemplateTokens = cleaned.every((v) => antPool.has(v));
    return !allTemplateTokens;
  }

  private _primaryReliableAntonym(item: VocabItem): string | null {
    if (!this._hasReliableAntonyms(item)) return null;
    const answer = (item.antonyms ?? [])
      .map((v) => normalizeWord(v))
      .find((v) => !!v && isEnglishWordLike(v) && v !== normalizeWord(item.word));
    return answer ?? null;
  }

  private _collectReliableSynonymChoices(exclude: string): string[] {
    const out: string[] = [];
    const seen = new Set<string>();
    const excluded = normalizeWord(exclude);
    for (const v of this.vocabItems) {
      if (!this._hasReliableSynonyms(v)) continue;
      for (const s of v.synonyms ?? []) {
        const n = normalizeWord(s);
        if (!n || n === excluded || seen.has(n) || !isEnglishWordLike(n)) continue;
        seen.add(n);
        out.push(n);
      }
    }
    return out;
  }

  private _collectReliableAntonymChoices(exclude: string): string[] {
    const out: string[] = [];
    const seen = new Set<string>();
    const excluded = normalizeWord(exclude);
    for (const v of this.vocabItems) {
      if (!this._hasReliableAntonyms(v)) continue;
      for (const a of v.antonyms ?? []) {
        const n = normalizeWord(a);
        if (!n || n === excluded || seen.has(n) || !isEnglishWordLike(n)) continue;
        seen.add(n);
        out.push(n);
      }
    }
    return out;
  }

  /** Legacy helper kept for compatibility with older callers. */
  pickAdaptiveType(): QuizType {
    return [...ALL_QUIZ_TYPES].sort(
      (left, right) =>
        this._progressService.getSkillRating(left) - this._progressService.getSkillRating(right),
    )[0] ?? 'e2k';
  }

  // ── Helpers for improved word selection ─────────────────

  private _countUniqueSeenWords(): number {
    const seen = new Set<string>();
    for (const record of this._progressService.getAllWordProgress()) {
      if (record.seenCount > 0) seen.add(record.vocabId);
    }
    return seen.size;
  }

  private _weightedRandomPick<T>(items: T[], weights: number[]): T {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let roll = this._random() * totalWeight;
    for (let i = 0; i < items.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return items[i];
    }
    return items[items.length - 1];
  }

  private _slotBucketForQuestion(questionOrdinal: number): Exclude<QuestionSourceBucket, 'retry'> {
    const slot = ((questionOrdinal - 1) % 10) + 1;
    const uniqueSeen = this._countUniqueSeenWords();

    if (uniqueSeen < 50) {
      // New user: heavy exploration (4 review / 2 weakness / 4 exploration)
      if (slot <= 4) return 'due_review';
      if (slot <= 6) return 'weakness_target';
      return 'exploration';
    }

    if (uniqueSeen < 200) {
      // Growing user: balanced (5 review / 2 weakness / 3 exploration)
      if (slot <= 5) return 'due_review';
      if (slot <= 7) return 'weakness_target';
      return 'exploration';
    }

    // Mature user: retention focus (6 review / 2 weakness / 2 exploration)
    if (slot <= 6) return 'due_review';
    if (slot <= 8) return 'weakness_target';
    return 'exploration';
  }

  private _pickRetryTarget(questionOrdinal: number): {
    item: VocabItem;
    type: QuizType;
    sourceBucket: QuestionSourceBucket;
  } | null {
    const retry = this._progressService.takeRetryCandidate(questionOrdinal, (wordId, quizType) => {
      const item = this._vocabById.get(wordId);
      return !!item && this._canServe(item, quizType);
    });
    if (!retry) return null;

    const item = this._vocabById.get(retry.wordId);
    if (!item) return null;

    return {
      item,
      type: retry.quizType,
      sourceBucket: 'retry',
    };
  }

  private _pickDueReviewTarget(): {
    item: VocabItem;
    type: QuizType;
    sourceBucket: QuestionSourceBucket;
  } | null {
    const now = Date.now();
    const recentWordIds = new Set(this._progressService.getRecentWordIds());
    const candidates = this._progressService
      .getAllWordProgress()
      .filter(
        (record) =>
          record.seenCount > 0 &&
          Date.parse(record.dueAt) <= now &&
          ALL_QUIZ_TYPES.includes(record.quizType as TrackedQuizType) &&
          !recentWordIds.has(record.vocabId),
      )
      .sort((left, right) => {
        const overdueDiff = Date.parse(left.dueAt) - Date.parse(right.dueAt);
        if (overdueDiff !== 0) return overdueDiff;
        if (left.memoryStrength !== right.memoryStrength) {
          return left.memoryStrength - right.memoryStrength;
        }
        return right.wrongStreak - left.wrongStreak;
      });

    // Pick from top 5 servable candidates with weighted preference for most overdue
    const topN: typeof candidates = [];
    for (const candidate of candidates) {
      const item = this._vocabById.get(candidate.vocabId);
      if (!item || !this._canServe(item, candidate.quizType)) continue;
      topN.push(candidate);
      if (topN.length >= 5) break;
    }

    if (topN.length === 0) return null;

    const weights = topN.map((_, i) => topN.length - i);
    const chosen = this._weightedRandomPick(topN, weights);
    const item = this._vocabById.get(chosen.vocabId)!;

    return {
      item,
      type: chosen.quizType,
      sourceBucket: 'due_review',
    };
  }

  private _pickWeaknessTarget(): {
    item: VocabItem;
    type: QuizType;
    sourceBucket: QuestionSourceBucket;
  } | null {
    const recentWordIds = new Set(this._progressService.getRecentWordIds());
    const weakestTypes = [...ALL_QUIZ_TYPES].sort(
      (left, right) =>
        this._progressService.getSkillRating(left) - this._progressService.getSkillRating(right),
    );

    const progressRows = this._progressService.getAllWordProgress();
    for (const type of weakestTypes) {
      const skillRating = this._progressService.getSkillRating(type);
      const candidates = progressRows.filter(
        (record) =>
          record.quizType === type &&
          record.seenCount > 0 &&
          record.memoryStrength < 70 &&
          Math.abs(record.challengeRating - skillRating) <= SKILL_MATCH_RANGE,
      );

      if (candidates.length === 0) continue;

      // Weighted random: prioritize low memory strength, close ELO, wrong streaks
      const weights = candidates.map((c) => {
        if (recentWordIds.has(c.vocabId)) return 0;
        const item = this._vocabById.get(c.vocabId);
        if (!item || !this._canServe(item, type)) return 0;

        const memoryWeight = 1.0 - c.memoryStrength / 70;
        const proximityWeight = 1.0 - Math.abs(c.challengeRating - skillRating) / SKILL_MATCH_RANGE;
        const streakBonus = 1.0 + c.wrongStreak * 0.3;
        return memoryWeight * proximityWeight * streakBonus;
      });

      const totalWeight = weights.reduce((s, w) => s + w, 0);
      if (totalWeight === 0) continue;

      const chosen = this._weightedRandomPick(candidates, weights);
      const item = this._vocabById.get(chosen.vocabId);
      if (!item) continue;

      return { item, type, sourceBucket: 'weakness_target' };
    }

    return null;
  }

  private _pickExplorationTarget(): {
    item: VocabItem;
    type: QuizType;
    sourceBucket: QuestionSourceBucket;
  } | null {
    const overallSkill = this._progressService.getOverallSkill();
    const recentWordIds = new Set(this._progressService.getRecentWordIds());

    // Dynamic range: starts at 200 (±1 level), grows to 600 (±3 levels) as user sees more words
    const totalUniqueSeen = this._countUniqueSeenWords();
    const expansionFactor = Math.min(totalUniqueSeen / 200, 1.0);
    const explorationRange =
      EXPLORATION_BASE_RANGE + expansionFactor * (EXPLORATION_MAX_RANGE - EXPLORATION_BASE_RANGE);

    const candidates: Array<{
      item: VocabItem;
      type: QuizType;
      totalSeenCount: number;
      eloDist: number;
    }> = [];

    for (const item of this.vocabItems) {
      if (recentWordIds.has(item.id)) continue;

      for (const type of ALL_QUIZ_TYPES) {
        if (!this._canServe(item, type)) continue;

        const progress = this._progressService.peekWordProgress(item.id, type);
        const eloDist = Math.abs(progress.challengeRating - overallSkill);
        if (eloDist > explorationRange) continue;

        candidates.push({
          item,
          type,
          totalSeenCount: this._progressService.getTotalSeenCount(item.id),
          eloDist,
        });
      }
    }

    if (candidates.length === 0) return null;

    // Weighted random: prefer unseen words close to user's skill level
    const weights = candidates.map((c) => {
      const unseenBonus = c.totalSeenCount === 0 ? 3.0 : 1.0 / (1 + c.totalSeenCount);
      const proximityScore = 1.0 - c.eloDist / explorationRange;
      return unseenBonus * (0.3 + 0.7 * proximityScore);
    });

    const chosen = this._weightedRandomPick(candidates, weights);
    return {
      item: chosen.item,
      type: chosen.type,
      sourceBucket: 'exploration',
    };
  }

  private _pickNextQuestionTarget(questionOrdinal: number): {
    item: VocabItem;
    type: QuizType;
    sourceBucket: QuestionSourceBucket;
  } | null {
    const retry = this._pickRetryTarget(questionOrdinal);
    if (retry) return retry;

    const scheduled = this._slotBucketForQuestion(questionOrdinal);
    const orderedBuckets: Array<Exclude<QuestionSourceBucket, 'retry'>> =
      scheduled === 'due_review'
        ? ['due_review', 'weakness_target', 'exploration']
        : scheduled === 'weakness_target'
          ? ['weakness_target', 'due_review', 'exploration']
          : ['exploration', 'due_review', 'weakness_target'];

    for (const bucket of orderedBuckets) {
      const next =
        bucket === 'due_review'
          ? this._pickDueReviewTarget()
          : bucket === 'weakness_target'
            ? this._pickWeaknessTarget()
            : this._pickExplorationTarget();
      if (next) return next;
    }

    return null;
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
      case 'syn':
        return this._pickSynDistractors(item, count);
      case 'ant':
        return this._pickAntDistractors(item, count);
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
    const explicitCandidates = [...new Set((item.wordDistractors ?? []).map((d) => d.trim()))].filter((d) =>
      this._isUsableK2eDistractor(d, item.word),
    );
    const rankedExplicit = this._rankK2eWordCandidates(item, explicitCandidates);

    // Start from high-quality hardcoded options only.
    const chosen: string[] = [];
    const usedLower = new Set<string>([item.word.toLowerCase()]);
    const pushUnique = (word: string): void => {
      const lower = word.toLowerCase();
      if (usedLower.has(lower)) return;
      chosen.push(word);
      usedLower.add(lower);
    };

    for (const word of rankedExplicit) {
      if (chosen.length >= count) break;
      if (this._k2eSimilarityScore(item.word, word) >= K2E_EXPLICIT_STRONG_SCORE) {
        pushUnique(word);
      }
    }
    // Allow medium-quality explicit options, but cap so they do not dominate.
    for (const word of rankedExplicit) {
      if (chosen.length >= Math.min(count, 2)) break;
      if (this._k2eSimilarityScore(item.word, word) >= K2E_EXPLICIT_MIN_SCORE) {
        pushUnique(word);
      }
    }

    const samePosPool = this.vocabItems.filter(
      (v) =>
        v.id !== item.id &&
        v.partOfSpeech === item.partOfSpeech &&
        Math.abs(v.level - item.level) <= 1 &&
        !usedLower.has(v.word.toLowerCase()) &&
        this._isUsableK2eDistractor(v.word, item.word),
    );
    const otherPool = this.vocabItems.filter(
      (v) =>
        v.id !== item.id &&
        v.partOfSpeech !== item.partOfSpeech &&
        Math.abs(v.level - item.level) <= 2 &&
        !usedLower.has(v.word.toLowerCase()) &&
        this._isUsableK2eDistractor(v.word, item.word),
    );

    const curatedPool = (CURATED_K2E_DISTRACTOR_BANK[item.partOfSpeech] ?? []).filter(
      (w) => !usedLower.has(w.toLowerCase()) && this._isUsableK2eDistractor(w, item.word),
    );

    const rankedSamePos = this._rankK2eWordCandidates(
      item,
      samePosPool.map((v) => v.word),
    );
    const rankedCurated = this._rankK2eWordCandidates(item, curatedPool);
    const rankedOther = this._rankK2eWordCandidates(
      item,
      otherPool.map((v) => v.word),
    );

    for (const word of rankedSamePos) {
      if (chosen.length >= count) break;
      pushUnique(word);
    }
    for (const word of rankedCurated) {
      if (chosen.length >= count) break;
      pushUnique(word);
    }
    for (const word of rankedOther) {
      if (chosen.length >= count) break;
      pushUnique(word);
    }

    // Final fallback if pools are small.
    if (chosen.length < count) {
      const emergencyPool = this._rankK2eWordCandidates(
        item,
        this.vocabItems
          .map((v) => v.word)
          .filter((w) => !usedLower.has(w.toLowerCase()) && this._isUsableK2eDistractor(w, item.word)),
      );
      for (const word of emergencyPool) {
        if (chosen.length >= count) break;
        pushUnique(word);
      }
    }

    return chosen.slice(0, count);
  }

  /** Reject typo-like garbage distractors (e.g. confess2, cnfesso) */
  private _isUsableK2eDistractor(candidate: string, answer: string): boolean {
    const cand = normalizeWord(candidate);
    const ans = normalizeWord(answer);
    if (!cand || cand === ans) return false;
    if (!isEnglishWordLike(candidate)) return false;
    if (/\d/.test(candidate)) return false;

    // Trust only official vocabulary words or curated fallback bank.
    if (!this._vocabWordSet.has(cand) && !CURATED_K2E_WORD_SET.has(cand)) return false;

    // If it's almost identical to the answer but not in vocab, treat as likely typo.
    const distance = editDistance(cand, ans);
    const lenGap = Math.abs(cand.length - ans.length);
    const looksLikeTypo = distance <= 2 && lenGap <= 2;
    if (looksLikeTypo && !this._vocabWordSet.has(cand) && !CURATED_K2E_WORD_SET.has(cand)) return false;

    return true;
  }

  private _k2eSimilarityScore(answer: string, candidate: string): number {
    const ans = normalizeWord(answer);
    const w = normalizeWord(candidate);
    if (!w) return -999;

    let s = 0;
    if (w[0] === ans[0]) s += 2;
    if (w.slice(0, 2) === ans.slice(0, 2)) s += 2;
    if (w.slice(-2) === ans.slice(-2)) s += 1;
    if (Math.abs(w.length - ans.length) <= 2) s += 1;
    s -= editDistance(w, ans) * 0.15;

    // Semantic proximity from Korean meanings: exam-like plausible confusion.
    const ansMeaning = this._meaningByWord.get(ans) ?? '';
    const candMeaning = this._meaningByWord.get(w) ?? '';
    const aTokens = tokenizeMeaning(ansMeaning);
    const cTokens = tokenizeMeaning(candMeaning);
    if (aTokens.size > 0 && cTokens.size > 0) {
      let overlap = 0;
      for (const t of aTokens) {
        if (cTokens.has(t)) overlap++;
      }
      if (overlap > 0) {
        s += Math.min(2.2, overlap * 0.9);
      }
    }

    return s;
  }

  private _rankK2eWordCandidates(item: VocabItem, candidates: string[]): string[] {
    // Keep variety by shuffling before sorting by similarity score.
    const shuffled = shuffle([...candidates], this._random);
    return shuffled.sort(
      (a, b) => this._k2eSimilarityScore(item.word, b) - this._k2eSimilarityScore(item.word, a),
    );
  }

  private _meaningSimilarityScore(answerMeaning: string, candidateMeaning: string): number {
    const answer = answerMeaning.trim();
    const candidate = candidateMeaning.trim();
    if (!answer || !candidate) return -999;

    const answerTokens = tokenizeMeaning(answer);
    const candidateTokens = tokenizeMeaning(candidate);
    let overlap = 0;
    for (const token of answerTokens) {
      if (candidateTokens.has(token)) overlap++;
    }
    const tokenCoverage = answerTokens.size > 0 ? overlap / answerTokens.size : 0;
    const lengthPenalty = Math.abs(answer.length - candidate.length) * 0.02;
    const prefixBonus = answer[0] === candidate[0] ? 0.2 : 0;
    return overlap * 1.8 + tokenCoverage * 1.6 + prefixBonus - lengthPenalty;
  }

  private _englishLexicalSimilarityScore(answer: string, candidate: string): number {
    const ans = normalizeWord(answer);
    const cand = normalizeWord(candidate);
    if (!ans || !cand) return -999;

    let score = 0;
    if (ans[0] === cand[0]) score += 1.2;
    if (ans.slice(0, 2) === cand.slice(0, 2)) score += 0.8;
    if (ans.slice(-2) === cand.slice(-2)) score += 0.6;
    score -= editDistance(ans, cand) * 0.22;
    score -= Math.abs(ans.length - cand.length) * 0.08;
    return score;
  }

  private _definitionSimilarityScore(answerDefinition: string, candidateDefinition: string): number {
    const answerTokens = tokenizeMeaning(answerDefinition);
    const candidateTokens = tokenizeMeaning(candidateDefinition);
    let overlap = 0;
    for (const token of answerTokens) {
      if (candidateTokens.has(token)) overlap++;
    }
    const tokenCoverage = answerTokens.size > 0 ? overlap / answerTokens.size : 0;
    const lexicalScore = this._englishLexicalSimilarityScore(answerDefinition, candidateDefinition) * 0.35;
    return overlap * 1.5 + tokenCoverage * 1.7 + lexicalScore;
  }

  private _distractorSimilarityScore(type: QuizType, correctAnswer: string, candidate: string): number {
    switch (type) {
      case 'e2k':
        return this._meaningSimilarityScore(correctAnswer, candidate);
      case 'k2e':
        return this._k2eSimilarityScore(correctAnswer, candidate);
      case 'e2e':
        return this._definitionSimilarityScore(correctAnswer, candidate);
      case 'syn':
      case 'ant':
        return this._englishLexicalSimilarityScore(correctAnswer, candidate);
    }
  }

  private _rankDistractorsByDifficulty(
    type: QuizType,
    correctAnswer: string,
    distractors: string[],
  ): string[] {
    const unique = [...new Set(distractors.map((d) => d.trim()).filter(Boolean))].filter(
      (d) => d !== correctAnswer,
    );

    // Per-type rule:
    // - e2k: meaning token overlap + surface similarity
    // - k2e: spelling + Korean-meaning overlap heuristic
    // - e2e: definition token overlap + lexical proximity
    // - syn/ant: lexical proximity between answer and choice
    return unique.sort((a, b) => {
      const scoreDiff =
        this._distractorSimilarityScore(type, correctAnswer, b) -
        this._distractorSimilarityScore(type, correctAnswer, a);
      if (Math.abs(scoreDiff) > 1e-9) return scoreDiff;
      return a.localeCompare(b);
    });
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
      (v) => v.id !== item.id && !!v.definition,
    );
    for (const v of shuffle(pool, this._random)) {
      if (chosen.length >= count) break;
      const def = v.definition!;
      const defLower = def.toLowerCase();
      if (usedLower.has(defLower)) continue;
      chosen.push(def);
      usedLower.add(defLower);
    }
    return chosen.slice(0, count);
  }

  /** Synonym: distractors are other synonym candidates from global pool */
  private _pickSynDistractors(item: VocabItem, count: number): string[] {
    const correct = this._primaryReliableSynonym(item);
    if (!correct) return [];
    const pool = this._collectReliableSynonymChoices(correct);
    return shuffle(pool, this._random).slice(0, count);
  }

  /** Antonym: distractors are other antonym candidates from global pool */
  private _pickAntDistractors(item: VocabItem, count: number): string[] {
    const correct = this._primaryReliableAntonym(item);
    if (!correct) return [];
    const pool = this._collectReliableAntonymChoices(correct);
    return shuffle(pool, this._random).slice(0, count);
  }

  // ── Question generation ──────────────────────────────────

  /** Build next question for the given quiz type */
  nextQuestion(_type?: QuizType): QuizQuestion | null {
    const questionOrdinal = this._roundTotal + 1;
    const target = this._pickNextQuestionTarget(questionOrdinal);
    if (!target) return null;

    const { item, type, sourceBucket } = target;

    const distractors = this._pickDistractors(item, 3, type);
    if (distractors.length < 3) {
      // Not enough distractors — try to pad from item's distractor list
      const fallbackPool =
        type === 'e2k'
          ? item.distractors
          : type === 'k2e'
            ? this.vocabItems.filter((v) => v.id !== item.id).map((v) => v.word)
            : type === 'e2e'
              ? this.vocabItems.filter((v) => v.id !== item.id && !!v.definition).map((v) => v.definition!)
              : type === 'syn'
                ? this._collectReliableSynonymChoices(this._primaryReliableSynonym(item) ?? '')
                : this._collectReliableAntonymChoices(this._primaryReliableAntonym(item) ?? '');
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
      case 'syn':
        prompt = item.word;
        correctAnswer = this._primaryReliableSynonym(item) ?? '';
        break;
      case 'ant':
        prompt = item.word;
        correctAnswer = this._primaryReliableAntonym(item) ?? '';
        break;
    }

    const distractorRanking = this._rankDistractorsByDifficulty(type, correctAnswer, distractors).slice(0, 3);

    const choices = shuffle([correctAnswer, ...distractorRanking], this._random);
    const wordElo = this._progressService.peekWordProgress(item.id, type).challengeRating;

    this._progressService.recordPresentedWord(item.id);

    return {
      vocabItem: item,
      quizType: type,
      sourceBucket,
      prompt,
      choices,
      correctAnswer,
      wordElo,
      distractorRanking,
    };
  }

  submitAnswer(
    ctx: AnswerContext,
    roundRecord?: Omit<RoundRecord, 'correct'>,
  ): AdaptiveUpdateResult {
    const result = this._progressService.applyAdaptiveUpdate(ctx);
    this._lastUpdateResult = result;

    // Track round progress
    this._roundTotal++;
    if (ctx.correct) this._roundCorrect++;
    this._typePerformance[ctx.quizType].attempts++;
    if (ctx.correct) this._typePerformance[ctx.quizType].correct++;
    if (roundRecord) {
      this._roundHistory.push({ ...roundRecord, correct: ctx.correct });
    }

    return result;
  }

  // ── Session lifecycle ────────────────────────────────────

  endSession(): void {
    this._sessionCount++;
  }

  resetSessionCount(): void {
    this._sessionCount = 0;
  }
}
