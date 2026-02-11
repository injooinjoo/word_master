/**
 * Phase 2: 외부 API 없이 스켈레톤 단어 데이터 채우기
 *
 * 사용법: node scripts/fill_vocab_without_api.mjs
 * 대상: vocab_batch_22.ts ~ vocab_batch_70.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const posByWord = new Map([
  ['a', 'adjective'],
  ['an', 'adjective'],
  ['the', 'adjective'],
  ['and', 'conjunction'],
  ['or', 'conjunction'],
  ['but', 'conjunction'],
  ['although', 'conjunction'],
  ['if', 'conjunction'],
  ['because', 'conjunction'],
  ['with', 'preposition'],
  ['without', 'preposition'],
  ['about', 'preposition'],
  ['against', 'preposition'],
  ['among', 'preposition'],
  ['along', 'preposition'],
  ['alongside', 'preposition'],
  ['after', 'preposition'],
  ['ago', 'adverb'],
  ['already', 'adverb'],
  ['almost', 'adverb'],
  ['aloud', 'adverb'],
  ['always', 'adverb'],
  ['ahead', 'adverb'],
  ['altogether', 'adverb'],
  ['also', 'adverb'],
]);

const distractorPools = {
  noun: ['사람', '사물', '장소', '시간', '문제', '방법', '결과', '상황', '계획', '기회', '관계', '정보', '행동', '원인', '목표'],
  verb: ['하다', '되다', '가다', '오다', '보다', '듣다', '말하다', '만들다', '사용하다', '선택하다', '바꾸다', '유지하다', '포기하다', '시작하다', '끝내다'],
  adjective: ['좋은', '나쁜', '빠른', '느린', '큰', '작은', '새로운', '오래된', '중요한', '필요한', '어려운', '쉬운', '강한', '약한', '정확한'],
  adverb: ['빨리', '천천히', '항상', '가끔', '자주', '이미', '곧', '매우', '조용히', '정확히', '직접', '함께', '따로', '먼저', '나중에'],
  preposition: ['~안에', '~밖에', '~위에', '~아래에', '~옆에', '~사이에', '~앞에', '~뒤에', '~근처에', '~건너에', '~동안', '~이전에', '~이후에', '~대신에', '~통해'],
  conjunction: ['그리고', '하지만', '또는', '그래서', '왜냐하면', '그러나', '또한', '반면에', '비록', '그러므로', '게다가', '즉', '한편', '따라서', '혹은'],
  interjection: ['아!', '와!', '어머!', '오!', '앗!', '헉!', '에이!', '야!', '오호!', '아하!', '이런!', '앗싸!', '휴!', '오우!', '흠!'],
  pronoun: ['나', '너', '그', '그녀', '우리', '그들', '이것', '저것', '누구', '무엇', '각자', '모두', '아무도', '누군가', '무언가'],
};

function escapeSingleQuote(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function pickPos(word, meaning) {
  const w = word.toLowerCase();
  if (posByWord.has(w)) return posByWord.get(w);
  if (meaning.endsWith('하다') || meaning.includes('하게 하다')) return 'verb';
  if (meaning.endsWith('의') || meaning.endsWith('적인') || meaning.endsWith('스러운')) return 'adjective';
  if (meaning.endsWith('히') || meaning.endsWith('게')) return 'adverb';
  if (w.endsWith('ly')) return 'adverb';
  if (w.endsWith('tion') || w.endsWith('ment') || w.endsWith('ness') || w.endsWith('ity')) return 'noun';
  return 'noun';
}

function hash(text) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
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

function wordVariants(word) {
  const lower = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let v1 = lower;
  const idx = [...lower].findIndex((c) => vowels.includes(c));
  if (idx >= 0) {
    const next = vowels[(vowels.indexOf(lower[idx]) + 1) % vowels.length];
    v1 = `${lower.slice(0, idx)}${next}${lower.slice(idx + 1)}`;
  } else {
    v1 = `${lower}e`;
  }
  let v2 = lower.length > 3 ? lower.slice(0, -1) : `${lower}s`;
  let v3 = `${lower}${lower[lower.length - 1] ?? 'x'}`;
  const uniq = [v1, v2, v3].filter((v, i, a) => v !== lower && a.indexOf(v) === i);
  while (uniq.length < 3) uniq.push(`${lower}${uniq.length}`);
  return uniq.slice(0, 3);
}

function makeDefinition(word, meaning, pos) {
  const base = `a word that means "${meaning}" in Korean`;
  if (pos === 'verb') return `to ${base}`;
  if (pos === 'adjective') return `describing something as "${meaning}"`;
  if (pos === 'adverb') return `used to describe an action as "${meaning}"`;
  if (pos === 'preposition') return `used before a noun to express relation such as "${meaning}"`;
  if (pos === 'conjunction') return `used to connect clauses or ideas, often meaning "${meaning}"`;
  return base;
}

function makeEntry(wordRaw, meaningRaw, levelRaw) {
  const word = escapeSingleQuote(wordRaw.trim());
  const meaning = escapeSingleQuote(meaningRaw.trim());
  const level = Number(levelRaw);
  const pos = pickPos(wordRaw.trim(), meaningRaw.trim());
  const seed = hash(wordRaw.toLowerCase());
  const distractors = rotateTake(distractorPools[pos], seed, 10).map((d) => `'${escapeSingleQuote(d)}'`);
  const [w1, w2, w3] = wordVariants(wordRaw.trim()).map((w) => escapeSingleQuote(w));
  const definition = escapeSingleQuote(makeDefinition(wordRaw.trim(), meaningRaw.trim(), pos));
  const contextEn = escapeSingleQuote(`We use "${wordRaw.trim()}" in this sentence.`);
  const contextKo = escapeSingleQuote(`우리는 이 문장에서 "${wordRaw.trim()}"를 사용한다.`);
  const exampleEn1 = escapeSingleQuote(`I learned "${wordRaw.trim()}" in class today.`);
  const exampleKo1 = escapeSingleQuote(`나는 오늘 수업에서 "${wordRaw.trim()}"를 배웠다.`);
  const exampleEn2 = escapeSingleQuote(`Please remember the word "${wordRaw.trim()}".`);
  const exampleKo2 = escapeSingleQuote(`"${wordRaw.trim()}"라는 단어를 기억해 주세요.`);

  return `  word('${word}', '${meaning}', ${level}, '${pos}',
    [${distractors.join(', ')}],
    tips({
      etymology: '${word}의 어원을 함께 찾아보자.',
      visual: '${word}의 의미를 떠올릴 수 있는 장면을 상상해 보자.',
      soundAlike: '${word}의 소리를 비슷한 한국어 발음과 연결해 기억하자.',
      context: '${contextEn}',
      synonymAntonym: '유의어/반의어를 함께 정리해 기억하자.',
    }),
    {
      definition: '${definition}',
      wordDistractors: ['${w1}', '${w2}', '${w3}'],
      definitionDistractors: [
        'a word with a different meaning from the target',
        'a description that does not match this word',
        'an explanation related to another concept',
      ],
      exampleSentences: [
        { en: '${exampleEn1}', ko: '${exampleKo1}' },
        { en: '${exampleEn2}', ko: '${exampleKo2}' },
      ],
    }
  )`;
}

function parseSkeletonEntries(content) {
  const regex = /word\('((?:\\'|[^'])*)',\s*'((?:\\'|[^'])*)',\s*(\d+),\s*'[^']+',\s*\[\],\s*tips\(\{[\s\S]*?\}\),\s*\)/g;
  const rows = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    rows.push({
      word: m[1].replace(/\\'/g, "'"),
      meaning: m[2].replace(/\\'/g, "'"),
      level: Number(m[3]),
    });
  }
  return rows;
}

for (let i = 22; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(file, 'utf8');
  if (!content.includes("etymology: ''")) {
    console.log(`skip vocab_batch_${num}.ts (already filled)`);
    continue;
  }

  const rows = parseSkeletonEntries(content);
  const entries = rows.map((r) => makeEntry(r.word, r.meaning, r.level)).join(',\n');
  const out = `import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch${num}: VocabItem[] = [
${entries},
];
`;
  writeFileSync(file, out, 'utf8');
  console.log(`filled vocab_batch_${num}.ts (${rows.length} words)`);
}

console.log('done');
