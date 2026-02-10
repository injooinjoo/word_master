/** Learning tip entry: text + optional image_url */
export interface LearningTipEntry {
  text: string;
  imageUrl?: string | null;
}

/** All learning tips for a vocab item (schema: learning_tips) */
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

/** Single vocabulary item (production-ready schema) */
export interface VocabItem {
  id: string;
  word: string;
  meaning: string;
  pronunciationUrl?: string | null;
  level: number;
  partOfSpeech: string;
  distractors: string[];
  learningTips: LearningTips;
}
