import { v4 as uuidv4 } from 'uuid';
import type {
  ExampleSentence,
  LearningTipEntry,
  LearningTips,
  PartOfSpeech,
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
    id: uuidv4(),
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
  };
}
