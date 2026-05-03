// ── Types ────────────────────────────────────────────────────

/** Supported parts of speech */
export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'interjection'
  | 'pronoun';

/** Bilingual example sentence */
export interface ExampleSentence {
  en: string; // "She abandoned her old car."
  ko: string; // "그녀는 오래된 차를 버렸다."
}

// ── Learning Tips ────────────────────────────────────────────

/** Learning tip entry: text + optional image_url */
export interface LearningTipEntry {
  text: string;
  imageUrl?: string | null;
}

/** All learning tips for a vocab item */
export interface LearningTips {
  etymology: LearningTipEntry;
  visualAssociation: LearningTipEntry;
  soundAlike: LearningTipEntry;
  context: LearningTipEntry;
  synonymAntonym: LearningTipEntry;
}

const PLACEHOLDER_LEARNING_TIP_PATTERNS = [
  /추후 보강 예정/u,
  /시각적으로 기억/u,
  /발음을 반복해 암기/u,
  /다양한 맥락에서 활용되는 단어/u,
  /관련 어휘는 사전을 참고하여 학습/u,
] as const;

function normalizeLearningTipText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function isRenderableLearningTipEntry(
  entry: LearningTipEntry | null | undefined,
): entry is LearningTipEntry {
  if (!entry) return false;

  const normalizedText = normalizeLearningTipText(entry.text);
  if (normalizedText.length === 0) return false;

  return !PLACEHOLDER_LEARNING_TIP_PATTERNS.some((pattern) => pattern.test(normalizedText));
}

/** Same placeholder filter as learning tips, applied to free-form insight text. */
export function isRenderableInsightString(s: string | null | undefined): s is string {
  if (!s) return false;
  const t = normalizeLearningTipText(s);
  if (t.length === 0) return false;
  return !PLACEHOLDER_LEARNING_TIP_PATTERNS.some((pattern) => pattern.test(t));
}

/** All entries in fixed order for random pick */
export function getLearningTipEntries(tips: LearningTips): LearningTipEntry[] {
  return [
    tips.etymology,
    tips.visualAssociation,
    tips.soundAlike,
    tips.context,
    tips.synonymAntonym,
  ];
}

export function getRenderableLearningTipEntries(tips: LearningTips): LearningTipEntry[] {
  return getLearningTipEntries(tips)
    .filter(isRenderableLearningTipEntry)
    .map((entry) => ({
      ...entry,
      text: normalizeLearningTipText(entry.text),
    }));
}

// ── Insights ─────────────────────────────────────────────────

/** A single morpheme in a Latin/Greek root breakdown. */
export interface RootMorpheme {
  morph: string;                                 // "bene-"
  origin?: 'Latin' | 'Greek' | 'Old English' | string;
  gloss: string;                                 // "good, well"
}

/**
 * Optional rich explanation payload shown after answering.
 * Coexists with `learningTips` — selectors prefer `insights` and
 * fall back to `learningTips` to keep older data renderable.
 */
export interface VocabInsights {
  etymologyDetail?: string;     // Longer etymology narrative
  roots?: RootMorpheme[];       // Morpheme breakdown (Latin/Greek)
  koreanMnemonic?: string;      // Korean phonetic association
  originStory?: string;         // Birth-of-word storytelling tone
}

// ── Vocabulary Item ──────────────────────────────────────────

/**
 * Single vocabulary item — enriched schema.
 *
 * New optional fields allow gradual data population while
 * keeping full backward compatibility with existing batch files.
 */
export interface VocabItem {
  id: string;
  word: string;                            // 영단어
  meaning: string;                         // 한국어 뜻 (1차)
  definition?: string | null;              // 영어 정의 (영영 퀴즈용)
  synonyms?: string[];                     // 동의어 (동의어 퀴즈용)
  antonyms?: string[];                     // 반의어 (반의어 퀴즈용)
  partOfSpeech: PartOfSpeech;             // union type
  level: number;                           // 1-10

  // --- Distractors (유형별) ---
  distractors: string[];                   // 한국어 오답 (영한 E→K)
  wordDistractors?: string[];              // 영단어 오답 (한영 K→E)
  definitionDistractors?: string[];        // 영어 정의 오답 (영영 E→E)

  // --- Example sentences ---
  exampleSentences?: ExampleSentence[];    // 예문 2-3개

  // --- Media ---
  pronunciationUrl?: string | null;        // 발음 URL (기존)
  audioUrl?: string | null;                // MP3 경로
  imageUrl?: string | null;                // 이미지 경로

  // --- Learning tips ---
  learningTips: LearningTips;

  // --- Optional rich insights (post-answer explanation) ---
  insights?: VocabInsights;
}
