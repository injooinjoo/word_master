import { v4 as uuidv4 } from 'uuid';
import type { LearningTipEntry, LearningTips, VocabItem } from '../models/vocab';

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

/** Shorthand to build a VocabItem */
export function word(
  w: string,
  meaning: string,
  level: number,
  partOfSpeech: string,
  distractors: string[],
  learningTips: LearningTips,
  pronunciationUrl?: string | null,
): VocabItem {
  return {
    id: uuidv4(),
    word: w,
    meaning,
    pronunciationUrl: pronunciationUrl ?? null,
    level,
    partOfSpeech,
    distractors,
    learningTips,
  };
}
