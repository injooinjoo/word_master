import type { VocabItem } from '../data/models/vocab';

/** One quiz question: word + four choices (one correct, three distractors) */
export interface QuizQuestion {
  vocabItem: VocabItem;
  choices: string[];
  correctMeaning: string;
  /** ELO of this word at the time the question was generated */
  wordElo: number;
}

function shuffle<T>(arr: T[], random: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// ── ELO helpers ──────────────────────────────────────────────

/** Standard ELO expected score: probability that `self` beats `opponent` */
function expectedScore(self: number, opponent: number): number {
  return 1 / (1 + Math.pow(10, (opponent - self) / 400));
}

/** Word ELO matching range (user ELO ± this value) */
const ELO_MATCH_RANGE = 300;

/** K-factors */
const K_USER = 32;
const K_WORD = 16;

// ─────────────────────────────────────────────────────────────

/** Quiz + ELO + session count. In-memory state. */
export class QuizService {
  private _rating = 1000;
  private _sessionCount = 0;
  private readonly _random = () => Math.random();

  /** Word ELO map: vocabItem.id → current ELO */
  private readonly _wordElo: Map<string, number> = new Map();

  constructor(public readonly vocabItems: VocabItem[]) {
    this._initWordElo();
  }

  // ── Getters ──────────────────────────────────────────────

  get rating(): number {
    return this._rating;
  }

  get sessionCount(): number {
    return this._sessionCount;
  }

  /** sessionCount % 10 === 0 && sessionCount > 0 → show interstitial before result */
  get shouldShowInterstitialBeforeResult(): boolean {
    return this._sessionCount > 0 && this._sessionCount % 10 === 0;
  }

  /** Get the current ELO of a word by id */
  getWordElo(wordId: string): number {
    return this._wordElo.get(wordId) ?? 1000;
  }

  // ── Word ELO initialisation ──────────────────────────────

  private _initWordElo(): void {
    for (const item of this.vocabItems) {
      // level 1 → 200, level 5 → 1000, level 10 → 2000
      this._wordElo.set(item.id, item.level * 200);
    }
  }

  // ── Word selection (ELO-matched) ─────────────────────────

  private _pickNextWord(): VocabItem | null {
    if (this.vocabItems.length === 0) return null;

    const userElo = this._rating;

    // Primary: words within ±ELO_MATCH_RANGE of user ELO
    const candidates: VocabItem[] = [];
    for (const item of this.vocabItems) {
      const wElo = this._wordElo.get(item.id) ?? 1000;
      if (Math.abs(wElo - userElo) <= ELO_MATCH_RANGE) {
        candidates.push(item);
      }
    }

    // Fallback: if no candidates, pick the N closest words
    if (candidates.length === 0) {
      const sorted = [...this.vocabItems].sort((a, b) => {
        const da = Math.abs((this._wordElo.get(a.id) ?? 1000) - userElo);
        const db = Math.abs((this._wordElo.get(b.id) ?? 1000) - userElo);
        return da - db;
      });
      const fallbackCount = Math.min(5, sorted.length);
      for (let i = 0; i < fallbackCount; i++) candidates.push(sorted[i]);
    }

    if (candidates.length === 0) return null;
    return candidates[Math.floor(this._random() * candidates.length)];
  }

  // ── Distractor selection (unchanged logic) ───────────────

  private _pickDistractors(item: VocabItem, count: number): string[] {
    const samePosMeanings = new Set<string>();
    for (const other of this.vocabItems) {
      if (other.id === item.id) continue;
      if (other.partOfSpeech === item.partOfSpeech) samePosMeanings.add(other.meaning);
    }
    const d = item.distractors;
    if (d.length === 0) return [];
    const preferred = d.filter((s) => s !== item.meaning && samePosMeanings.has(s));
    const rest = d.filter((s) => s !== item.meaning && !samePosMeanings.has(s));
    const preferredShuffled = shuffle(preferred, this._random);
    const restShuffled = shuffle(rest, this._random);
    const chosen: string[] = [];
    for (const s of preferredShuffled) {
      if (!chosen.includes(s) && chosen.length < count) chosen.push(s);
    }
    for (const s of restShuffled) {
      if (!chosen.includes(s) && chosen.length < count) chosen.push(s);
    }
    return chosen.slice(0, count);
  }

  // ── Question generation ──────────────────────────────────

  /** Build next question: 1 correct + 3 distractors, shuffled */
  nextQuestion(): QuizQuestion | null {
    const item = this._pickNextWord();
    if (!item) return null;

    let distractorList = this._pickDistractors(item, 3);
    if (distractorList.length < 3 && item.distractors.length > 0) {
      for (const c of item.distractors) {
        if (c !== item.meaning && !distractorList.includes(c)) {
          distractorList.push(c);
          if (distractorList.length >= 3) break;
        }
      }
      distractorList = distractorList.slice(0, 3);
    }
    const choices = shuffle([item.meaning, ...distractorList], this._random);
    return {
      vocabItem: item,
      choices,
      correctMeaning: item.meaning,
      wordElo: this._wordElo.get(item.id) ?? 1000,
    };
  }

  // ── Answer submission (dual ELO update) ──────────────────

  /** Apply standard ELO update to both user and word ratings.
   *  correct=true → user wins (ELO up), word loses (ELO down).
   *  correct=false → user loses, word wins. */
  submitAnswer(correct: boolean, wordId: string): void {
    const wordElo = this._wordElo.get(wordId) ?? 1000;
    const userElo = this._rating;

    // Expected scores
    const eUser = expectedScore(userElo, wordElo);
    const eWord = expectedScore(wordElo, userElo);

    // Actual scores: 1 = win, 0 = loss
    const sUser = correct ? 1 : 0;
    const sWord = correct ? 0 : 1;

    // Update ratings
    this._rating = Math.max(0, Math.round(userElo + K_USER * (sUser - eUser)));
    this._wordElo.set(wordId, Math.max(0, Math.round(wordElo + K_WORD * (sWord - eWord))));
  }

  // ── Session lifecycle ────────────────────────────────────

  /** Call when a quiz session ends */
  endSession(): void {
    this._sessionCount++;
  }

  resetSessionCount(): void {
    this._sessionCount = 0;
  }
}
