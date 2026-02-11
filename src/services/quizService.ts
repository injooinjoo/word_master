import type { PartOfSpeech, VocabItem } from '../data/models/vocab';

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

/** All quiz types, used for iteration */
export const ALL_QUIZ_TYPES: QuizType[] = ['e2k', 'k2e', 'e2e', 'syn', 'ant'];

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

// ── Per-type ELO record ──────────────────────────────────────

type EloByType = Record<QuizType, number>;

function makeElo(value: number): EloByType {
  return { e2k: value, k2e: value, e2e: value, syn: value, ant: value };
}

// ── QuizService ──────────────────────────────────────────────

export class QuizService {
  /** User ratings — one per quiz type */
  private _ratings: EloByType = makeElo(INITIAL_RATING);
  /** Unified overall rating for difficulty matching across quiz types */
  private _overallRating = INITIAL_RATING;
  private _sessionCount = 0;
  private readonly _random = () => Math.random();
  private readonly _vocabWordSet: Set<string>;
  private readonly _meaningByWord: Map<string, string>;

  /** Word ELO map: vocabItem.id → ELO per quiz type */
  private readonly _wordElo: Map<string, EloByType> = new Map();

  // ── Round tracking ──────────────────────────────────────
  private _roundSize: RoundSizeOption = 10;
  private _roundTotal = 0;
  private _roundCorrect = 0;
  private _roundHistory: RoundRecord[] = [];

  constructor(public readonly vocabItems: VocabItem[]) {
    this._vocabWordSet = new Set(vocabItems.map((v) => normalizeWord(v.word)));
    this._meaningByWord = new Map(vocabItems.map((v) => [normalizeWord(v.word), v.meaning ?? '']));
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

  /** Unified rating used to pick questions by difficulty regardless of type */
  get overallRating(): number {
    return this._overallRating;
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

  /** Pick type by closest match to overall rating (type-agnostic difficulty) */
  pickAdaptiveType(): QuizType {
    const candidates = ALL_QUIZ_TYPES.map((type) => {
      const pool = this.vocabItems.filter((v) => this._canServe(v, type));
      if (pool.length === 0) return { type, diff: Number.POSITIVE_INFINITY };
      let minDiff = Number.POSITIVE_INFINITY;
      for (const item of pool) {
        const wElo = this._wordElo.get(item.id)?.[type] ?? INITIAL_RATING;
        const diff = Math.abs(wElo - this._overallRating);
        if (diff < minDiff) minDiff = diff;
      }
      return { type, diff: minDiff };
    }).filter((x) => Number.isFinite(x.diff));

    if (candidates.length === 0) return 'e2k';

    const min = Math.min(...candidates.map((c) => c.diff));
    const best = candidates.filter((c) => c.diff === min);
    return best[Math.floor(this._random() * best.length)]?.type ?? 'e2k';
  }

  // ── Word selection (ELO-matched) ─────────────────────────

  private _pickNextWord(type: QuizType): VocabItem | null {
    const pool = this.vocabItems.filter((v) => this._canServe(v, type));
    if (pool.length === 0) return null;

    const userElo = this._overallRating;
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

    // Unified overall rating update: drives type-agnostic difficulty matching.
    const eOverall = expectedScore(this._overallRating, wordElo);
    this._overallRating = Math.max(0, Math.round(this._overallRating + K_USER * (sUser - eOverall)));

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
