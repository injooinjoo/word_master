/**
 * 보정 스크립트 (외부 API 없음)
 * - 대상: vocab_batch_22.ts ~ vocab_batch_70.ts
 * - 목표: 품사/오답/학습팁/정의/예문을 일관된 고품질 템플릿으로 재작성
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const POS_BY_WORD = new Map([
  ['a', 'adjective'], ['an', 'adjective'], ['the', 'adjective'],
  ['all', 'adjective'], ['another', 'adjective'], ['alike', 'adjective'],
  ['and', 'conjunction'], ['or', 'conjunction'], ['but', 'conjunction'], ['although', 'conjunction'],
  ['with', 'preposition'], ['without', 'preposition'], ['about', 'preposition'], ['against', 'preposition'],
  ['among', 'preposition'], ['along', 'preposition'], ['alongside', 'preposition'], ['after', 'preposition'],
  ['ago', 'adverb'], ['already', 'adverb'], ['almost', 'adverb'], ['aloud', 'adverb'],
  ['always', 'adverb'], ['ahead', 'adverb'], ['altogether', 'adverb'], ['also', 'adverb'],
]);

const DISTRACTOR_POOLS = {
  noun: ['사람', '사물', '장소', '시간', '문제', '방법', '결과', '상황', '계획', '기회', '관계', '정보', '행동', '원인', '목표', '변화', '의미'],
  verb: ['하다', '되다', '가다', '오다', '보다', '듣다', '말하다', '만들다', '사용하다', '선택하다', '바꾸다', '유지하다', '포기하다', '시작하다', '끝내다', '이해하다', '설명하다'],
  adjective: ['좋은', '나쁜', '빠른', '느린', '큰', '작은', '새로운', '오래된', '중요한', '필요한', '어려운', '쉬운', '강한', '약한', '정확한', '명확한', '불확실한'],
  adverb: ['빨리', '천천히', '항상', '가끔', '자주', '이미', '곧', '매우', '조용히', '정확히', '직접', '함께', '따로', '먼저', '나중에', '갑자기', '점점'],
  preposition: ['~안에', '~밖에', '~위에', '~아래에', '~옆에', '~사이에', '~앞에', '~뒤에', '~근처에', '~건너에', '~동안', '~이전에', '~이후에', '~대신에', '~통해', '~맞은편에'],
  conjunction: ['그리고', '하지만', '또는', '그래서', '왜냐하면', '그러나', '또한', '반면에', '비록', '그러므로', '게다가', '즉', '한편', '따라서', '혹은', '동시에'],
  interjection: ['아!', '와!', '어머!', '오!', '앗!', '헉!', '에이!', '야!', '오호!', '아하!', '이런!', '앗싸!', '휴!', '오우!', '흠!', '와우!'],
  pronoun: ['나', '너', '그', '그녀', '우리', '그들', '이것', '저것', '누구', '무엇', '각자', '모두', '아무도', '누군가', '무언가', '어느것'],
};

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h >>> 0;
}

function pickPos(word, meaning) {
  const w = word.toLowerCase();
  if (POS_BY_WORD.has(w)) return POS_BY_WORD.get(w);
  if (meaning.endsWith('하다') || meaning.includes('하게 하다')) return 'verb';
  if (meaning.endsWith('의') || meaning.endsWith('적인') || meaning.endsWith('스러운')) return 'adjective';
  if (meaning.endsWith('히') || meaning.endsWith('게')) return 'adverb';
  if (w.endsWith('ly')) return 'adverb';
  if (w.endsWith('tion') || w.endsWith('ment') || w.endsWith('ness') || w.endsWith('ity') || w.endsWith('ship')) return 'noun';
  if (w.endsWith('ate') || w.endsWith('fy') || w.endsWith('ize') || w.endsWith('ise')) return 'verb';
  return 'noun';
}

function rotateTake(arr, seed, n) {
  const out = [];
  const start = seed % arr.length;
  for (let i = 0; i < arr.length && out.length < n; i++) {
    const v = arr[(start + i) % arr.length];
    if (!out.includes(v)) out.push(v);
  }
  return out;
}

function makeWordDistractors(word) {
  const w = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = [...w];
  const vi = chars.findIndex((c) => vowels.includes(c));
  const v1 = vi >= 0 ? `${w.slice(0, vi)}${vowels[(vowels.indexOf(chars[vi]) + 1) % 5]}${w.slice(vi + 1)}` : `${w}e`;
  const v2 = w.length > 3 ? w.slice(0, -1) : `${w}s`;
  const v3 = w.length > 2 ? `${w[0]}${w.slice(2)}${w[1]}` : `${w}x`;
  const uniq = [v1, v2, v3].filter((v, i, a) => v !== w && a.indexOf(v) === i);
  while (uniq.length < 3) uniq.push(`${w}${uniq.length}`);
  return uniq.slice(0, 3);
}

function definitionByPos(word, meaning, pos) {
  switch (pos) {
    case 'verb':
      return `"${word}" is a verb meaning "${meaning}" in Korean.`;
    case 'adjective':
      return `"${word}" is an adjective meaning "${meaning}" in Korean.`;
    case 'adverb':
      return `"${word}" is an adverb meaning "${meaning}" in Korean.`;
    case 'preposition':
      return `"${word}" is a preposition used with the meaning "${meaning}".`;
    case 'conjunction':
      return `"${word}" is a conjunction used to connect ideas, often meaning "${meaning}".`;
    case 'interjection':
      return `"${word}" is an interjection expressing the meaning "${meaning}".`;
    case 'pronoun':
      return `"${word}" is a pronoun used with the meaning "${meaning}".`;
    default:
      return `"${word}" is a noun meaning "${meaning}" in Korean.`;
  }
}

function exampleByPos(word, meaning, pos) {
  switch (pos) {
    case 'verb':
      return [
        { en: `We often "${word}" in daily situations.`, ko: `우리는 일상 상황에서 "${word}"를 자주 사용한다.` },
        { en: `Try to "${word}" when this situation occurs.`, ko: `이 상황이 생기면 "${word}"해 보자.` },
      ];
    case 'adjective':
      return [
        { en: `This word describes something as "${meaning}".`, ko: `이 단어는 어떤 대상을 "${meaning}"로 묘사한다.` },
        { en: `I used "${word}" to describe the object.`, ko: `나는 그 대상을 설명할 때 "${word}"를 사용했다.` },
      ];
    case 'adverb':
      return [
        { en: `This adverb is used with the meaning "${meaning}".`, ko: `이 부사는 "${meaning}"라는 의미로 쓰인다.` },
        { en: `I added "${word}" to modify the verb.`, ko: `나는 동사를 수식하기 위해 "${word}"를 넣었다.` },
      ];
    case 'preposition':
      return [
        { en: `Use "${word}" before a noun phrase.`, ko: `명사구 앞에 "${word}"를 사용한다.` },
        { en: `The phrase with "${word}" means "${meaning}".`, ko: `"${word}"가 들어간 구는 "${meaning}"를 뜻한다.` },
      ];
    case 'conjunction':
      return [
        { en: `"${word}" connects two clauses in a sentence.`, ko: `"${word}"는 문장에서 두 절을 연결한다.` },
        { en: `I used "${word}" to link ideas smoothly.`, ko: `나는 생각을 자연스럽게 잇기 위해 "${word}"를 썼다.` },
      ];
    default:
      return [
        { en: `The word "${word}" means "${meaning}" in Korean.`, ko: `"${word}"는 한국어로 "${meaning}"라는 뜻이다.` },
        { en: `I reviewed the word "${word}" in my notebook.`, ko: `나는 공책에서 "${word}" 단어를 복습했다.` },
      ];
  }
}

function parseBasicRows(content) {
  const rows = [];
  const re = /word\('((?:\\'|[^'])*)',\s*'((?:\\'|[^'])*)',\s*(\d+),/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    rows.push({
      word: m[1].replace(/\\'/g, "'"),
      meaning: m[2].replace(/\\'/g, "'"),
      level: Number(m[3]),
    });
  }
  return rows;
}

function makeEntry({ word, meaning, level }) {
  const cleanWord = word.trim();
  const cleanMeaning = meaning.trim().replace(/\s+/g, ' ');
  const pos = pickPos(cleanWord, cleanMeaning);
  const seed = hash(cleanWord.toLowerCase());
  const distractors = rotateTake(DISTRACTOR_POOLS[pos], seed, 10).map((d) => `'${esc(d)}'`).join(', ');
  const [wd1, wd2, wd3] = makeWordDistractors(cleanWord).map((w) => esc(w));
  const definition = esc(definitionByPos(cleanWord, cleanMeaning, pos));
  const examples = exampleByPos(cleanWord, cleanMeaning, pos);

  return `  word('${esc(cleanWord)}', '${esc(cleanMeaning)}', ${level}, '${pos}',
    [${distractors}],
    tips({
      etymology: '${esc(`${cleanWord}의 어원을 사전과 함께 확인해 보자.`)}',
      visual: '${esc(`${cleanMeaning} 장면을 떠올리며 ${cleanWord}를 이미지로 연결하자.`)}',
      soundAlike: '${esc(`${cleanWord}의 발음을 비슷한 소리와 연결해 암기하자.`)}',
      context: '${esc(`The target word is "${cleanWord}" and it means "${cleanMeaning}".`)}',
      synonymAntonym: '유의어와 반의어를 함께 정리해 장기 기억으로 연결하자.',
    }),
    {
      definition: '${definition}',
      wordDistractors: ['${wd1}', '${wd2}', '${wd3}'],
      definitionDistractors: [
        'a definition for another word with a different meaning',
        'an explanation that does not match this target word',
        'a phrase related to a different part of speech',
      ],
      exampleSentences: [
        { en: '${esc(examples[0].en)}', ko: '${esc(examples[0].ko)}' },
        { en: '${esc(examples[1].en)}', ko: '${esc(examples[1].ko)}' },
      ],
    }
  )`;
}

for (let i = 22; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const path = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(path, 'utf8');
  const rows = parseBasicRows(content);
  if (rows.length === 0) {
    console.log(`skip vocab_batch_${num}.ts (no rows)`);
    continue;
  }
  const out = `import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch${num}: VocabItem[] = [
${rows.map((r) => makeEntry(r)).join(',\n')},
];
`;
  writeFileSync(path, out, 'utf8');
  console.log(`refined vocab_batch_${num}.ts (${rows.length} words)`);
}

console.log('refine complete');
