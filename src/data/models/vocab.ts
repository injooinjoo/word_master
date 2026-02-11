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
}
