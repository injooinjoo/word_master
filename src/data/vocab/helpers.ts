import type {
  ExampleSentence,
  LearningTipEntry,
  LearningTips,
  PartOfSpeech,
  VocabInsights,
  VocabItem,
} from '../models/vocab';

export function tip(text: string, imageUrl?: string | null): LearningTipEntry {
  return { text, imageUrl: imageUrl ?? null };
}

export function tips({
  etymology,
  visual,
  soundAlike,
  context,
  synonymAntonym,
  etymologyImg,
  visualImg,
}: {
  etymology: string;
  visual: string;
  soundAlike: string;
  context: string;
  synonymAntonym: string;
  etymologyImg?: string | null;
  visualImg?: string | null;
}): LearningTips {
  return {
    etymology: tip(etymology, etymologyImg),
    visualAssociation: tip(visual, visualImg),
    soundAlike: tip(soundAlike),
    context: tip(context),
    synonymAntonym: tip(synonymAntonym),
  };
}

/** Optional extra fields for enriched vocab items */
export interface WordExtra {
  definition?: string;
  synonyms?: string[];
  antonyms?: string[];
  wordDistractors?: string[];
  definitionDistractors?: string[];
  exampleSentences?: ExampleSentence[];
  audioUrl?: string;
  imageUrl?: string;
  pronunciationUrl?: string;
  insights?: VocabInsights;
}

function normalizeIdentityValue(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function slugifyWord(value: string): string {
  const slug = normalizeIdentityValue(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'item';
}

function fnv1aHash(value: string): string {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

export function makeStableVocabId(word: string, meaning: string, partOfSpeech: PartOfSpeech): string {
  const identity = [
    normalizeIdentityValue(word),
    normalizeIdentityValue(meaning),
    partOfSpeech,
  ].join('::');
  return `vocab_${slugifyWord(word)}_${fnv1aHash(identity)}`;
}

/**
 * Shorthand to build a VocabItem.
 *
 * The `extra` parameter is optional — existing batch files that omit it
 * continue to work without changes.
 */
export function word(
  w: string,
  meaning: string,
  level: number,
  partOfSpeech: PartOfSpeech,
  distractors: string[],
  learningTips: LearningTips,
  extra?: WordExtra,
): VocabItem {
  return {
    id: makeStableVocabId(w, meaning, partOfSpeech),
    word: w,
    meaning,
    definition: extra?.definition ?? null,
    synonyms: extra?.synonyms,
    antonyms: extra?.antonyms,
    partOfSpeech,
    level,
    distractors,
    wordDistractors: extra?.wordDistractors,
    definitionDistractors: extra?.definitionDistractors,
    exampleSentences: extra?.exampleSentences,
    pronunciationUrl: extra?.pronunciationUrl ?? null,
    audioUrl: extra?.audioUrl ?? null,
    imageUrl: extra?.imageUrl ?? null,
    learningTips,
    insights: extra?.insights,
  };
}
