import type { ExampleSentence, RootMorpheme, VocabItem } from '../../../data/models/vocab';
import {
  isRenderableInsightString,
  isRenderableLearningTipEntry,
} from '../../../data/models/vocab';

export type InsightVariant =
  | 'etymology'
  | 'roots'
  | 'mnemonic'
  | 'synonyms'
  | 'antonyms'
  | 'originStory'
  | 'examples'
  | 'visual';

export interface InsightCardSpec {
  variant: InsightVariant;
  title: string;
  body?: string;
  chips?: string[];
  roots?: RootMorpheme[];
  examples?: ExampleSentence[];
  imageUrl?: string | null;
}

const MAX_EXAMPLES = 3;

export function buildInsightCards(v: VocabItem): InsightCardSpec[] {
  const cards: InsightCardSpec[] = [];
  const tips = v.learningTips;
  const insights = v.insights ?? {};

  // 1. 어원 — insights.etymologyDetail 우선, fallback learningTips.etymology
  const etymBody = insights.etymologyDetail
    ?? (isRenderableLearningTipEntry(tips.etymology) ? tips.etymology.text : undefined);
  if (isRenderableInsightString(etymBody)) {
    cards.push({
      variant: 'etymology',
      title: '어원',
      body: etymBody,
      imageUrl: tips.etymology.imageUrl ?? null,
    });
  }

  // 2. 라틴/그리스 어근 분해
  if (insights.roots && insights.roots.length > 0) {
    cards.push({
      variant: 'roots',
      title: '어근 분해',
      roots: insights.roots,
    });
  }

  // 3. 한국어 발음 연상
  const mnemonicBody = insights.koreanMnemonic
    ?? (isRenderableLearningTipEntry(tips.soundAlike) ? tips.soundAlike.text : undefined);
  if (isRenderableInsightString(mnemonicBody)) {
    cards.push({
      variant: 'mnemonic',
      title: '한국어 연상',
      body: mnemonicBody,
    });
  }

  // 4. 동의어
  if (v.synonyms && v.synonyms.length > 0) {
    cards.push({
      variant: 'synonyms',
      title: '동의어',
      chips: v.synonyms,
    });
  }

  // 5. 반의어
  if (v.antonyms && v.antonyms.length > 0) {
    cards.push({
      variant: 'antonyms',
      title: '반의어',
      chips: v.antonyms,
    });
  }

  // 6. 단어의 탄생 (insights only — no fallback to keep tone distinct from etymology)
  if (isRenderableInsightString(insights.originStory)) {
    cards.push({
      variant: 'originStory',
      title: '단어의 탄생',
      body: insights.originStory!,
    });
  }

  // 7. 예문
  if (v.exampleSentences && v.exampleSentences.length > 0) {
    cards.push({
      variant: 'examples',
      title: '예문',
      examples: v.exampleSentences.slice(0, MAX_EXAMPLES),
    });
  }

  // 8. 시각 연상
  if (isRenderableLearningTipEntry(tips.visualAssociation)) {
    cards.push({
      variant: 'visual',
      title: '시각 연상',
      body: tips.visualAssociation.text,
      imageUrl: tips.visualAssociation.imageUrl ?? null,
    });
  }

  return cards;
}
