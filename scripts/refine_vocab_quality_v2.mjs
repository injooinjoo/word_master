/**
 * 2차 보정 스크립트 (자연스러움/다양성 개선)
 * - 대상: vocab_batch_22.ts ~ vocab_batch_70.ts
 * - 목적:
 *   1) 예문/정의 문장 자연스러움 개선
 *   2) 학습 팁 텍스트 품질 개선
 *   3) 오답/정의오답 템플릿 다양화
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const POS_SET = new Set([
  'noun', 'verb', 'adjective', 'adverb',
  'preposition', 'conjunction', 'interjection', 'pronoun',
]);

const DISTRACTOR_POOLS = {
  noun: ['사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
  verb: ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
  adjective: ['중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인'],
  adverb: ['빠르게', '천천히', '자주', '가끔', '항상', '이미', '곧', '직접', '간접적으로', '정확히', '대략', '차근차근', '집중해서', '즉시', '뒤늦게', '점차', '반복적으로', '우선'],
  preposition: ['~안에', '~밖에', '~위에', '~아래에', '~옆에', '~사이에', '~앞에', '~뒤에', '~근처에', '~맞은편에', '~동안', '~이전에', '~이후에', '~대신에', '~통해', '~기준으로', '~관하여', '~대하여'],
  conjunction: ['그리고', '하지만', '또는', '그래서', '그러나', '또한', '반면에', '따라서', '즉', '비록', '그러므로', '게다가', '한편', '동시에', '혹은', '왜냐하면', '그럼에도', '결국'],
  interjection: ['아!', '와!', '앗!', '어머!', '오!', '헉!', '이런!', '좋아!', '아하!', '오호!', '휴!', '정말!', '맙소사!', '야호!', '흠!', '앗차!', '오우!', '그래!'],
  pronoun: ['나', '너', '그', '그녀', '우리', '그들', '이것', '저것', '누구', '무엇', '어느것', '각자', '모두', '아무도', '누군가', '무언가', '자신', '상대'],
};

const SYNONYM_POOLS = {
  noun: ['item', 'entity', 'concept', 'object', 'factor', 'element'],
  verb: ['perform', 'execute', 'carryout', 'apply', 'handle', 'process'],
  adjective: ['general', 'basic', 'primary', 'typical', 'core', 'standard'],
  adverb: ['clearly', 'quickly', 'carefully', 'directly', 'gradually', 'mostly'],
  preposition: ['within', 'across', 'along', 'beyond', 'through', 'toward'],
  conjunction: ['and', 'while', 'whereas', 'therefore', 'however', 'also'],
  interjection: ['wow', 'oops', 'ah', 'oh', 'hey', 'alas'],
  pronoun: ['someone', 'anyone', 'whoever', 'somebody', 'nobody', 'everyone'],
};

const ANTONYM_POOLS = {
  noun: ['void', 'nothing', 'absence', 'null', 'lack', 'gap'],
  verb: ['ignore', 'delay', 'avoid', 'stop', 'neglect', 'omit'],
  adjective: ['minor', 'rare', 'atypical', 'unclear', 'unstable', 'secondary'],
  adverb: ['roughly', 'slowly', 'rarely', 'indirectly', 'vaguely', 'barely'],
  preposition: ['outside', 'against', 'awayfrom', 'without', 'apartfrom', 'off'],
  conjunction: ['neither', 'nor', 'instead', 'otherwise', 'despite', 'unless'],
  interjection: ['meh', 'hmm', 'ugh', 'nope', 'eh', 'sigh'],
  pronoun: ['nobody', 'nothing', 'none', 'neither', 'nowhere', 'noone'],
};

const FUNCTION_WORD_POS = new Map([
  ['a', 'adjective'], ['an', 'adjective'], ['the', 'adjective'],
  ['and', 'conjunction'], ['or', 'conjunction'], ['but', 'conjunction'], ['although', 'conjunction'],
  ['with', 'preposition'], ['without', 'preposition'], ['about', 'preposition'],
  ['against', 'preposition'], ['among', 'preposition'], ['along', 'preposition'],
  ['after', 'preposition'], ['before', 'preposition'], ['within', 'preposition'],
  ['ago', 'adverb'], ['already', 'adverb'], ['almost', 'adverb'], ['aloud', 'adverb'],
  ['always', 'adverb'], ['ahead', 'adverb'], ['also', 'adverb'], ['altogether', 'adverb'],
]);

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceWholeWord(text, word, replacement) {
  if (!word || !word.trim()) return text;
  const w = word.trim();
  const re = new RegExp(`(^|[^A-Za-z])(${escapeRegex(w)})(?=[^A-Za-z]|$)`, 'gi');
  return text.replace(re, (_m, g1) => `${g1}${replacement}`);
}

function removeWordLeak(text, word) {
  // definition/뜻설명에서는 원단어가 노출되지 않도록 강제
  return replaceWholeWord(text, word, 'the term');
}

function hash(text) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 33 + text.charCodeAt(i)) >>> 0;
  return h >>> 0;
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

function pickSynonyms(word, pos, seed) {
  const base = SYNONYM_POOLS[pos] ?? SYNONYM_POOLS.noun;
  const picked = rotateTake(base, seed, 3).filter((v) => v.toLowerCase() !== word.toLowerCase());
  while (picked.length < 3) picked.push(`alt${picked.length + 1}`);
  return picked.slice(0, 3);
}

function pickAntonyms(word, pos, seed) {
  const base = ANTONYM_POOLS[pos] ?? ANTONYM_POOLS.noun;
  const picked = rotateTake(base, seed + 7, 3).filter((v) => v.toLowerCase() !== word.toLowerCase());
  while (picked.length < 3) picked.push(`opp${picked.length + 1}`);
  return picked.slice(0, 3);
}

function isVerbLike(token) {
  return /(하다|되다|지다|내다|시키다|보다|쓰다|주다|받다)$/.test(token);
}

function isAdverbLike(token) {
  return /(게|히|도록)$/.test(token);
}

function isAdjectiveLike(token) {
  return /(한|적인|스러운|로운|의|은)$/.test(token);
}

function cleanMeaningRaw(raw) {
  let s = raw
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b(?:n|v|vi|vt|adj|adv|ad|prep|pron|conj|prop|pr)\.?/gi, ' ')
    .replace(/[·•/;,]+/g, ' ')
    .replace(/[.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const tokens = s.split(' ').filter(Boolean);
  const deduped = [];
  for (const t of tokens) {
    if (deduped.length === 0 || deduped[deduped.length - 1] !== t) deduped.push(t);
  }
  return deduped.join(' ');
}

function normalizeMeaning(rawMeaning, pos) {
  const cleaned = cleanMeaningRaw(rawMeaning);
  const tokens = cleaned.split(' ').filter(Boolean);
  if (tokens.length === 0) return rawMeaning.trim();

  if (pos === 'verb') {
    const firstVerb = tokens.find((t) => isVerbLike(t));
    return firstVerb ?? tokens[0];
  }

  if (pos === 'adverb') {
    const adv = tokens.find((t) => isAdverbLike(t));
    return adv ?? tokens[tokens.length - 1];
  }

  if (pos === 'adjective') {
    const adj = tokens.find((t) => isAdjectiveLike(t));
    if (adj) return adj;
  }

  // noun/preposition/conjunction/interjection/pronoun 기본 처리:
  // 끝의 동사/부사를 제거해서 대표 의미를 남긴다.
  const trimmed = [...tokens];
  while (trimmed.length > 1 && (isVerbLike(trimmed[trimmed.length - 1]) || isAdverbLike(trimmed[trimmed.length - 1]))) {
    trimmed.pop();
  }
  if (trimmed.length >= 2 && isAdjectiveLike(trimmed[0]) && /^(곳|것|점|상태|사람|물|일)$/.test(trimmed[1])) {
    return `${trimmed[0]} ${trimmed[1]}`;
  }
  return trimmed[0];
}

function inferPos(word, rawMeaning, fallbackPos) {
  const lowerWord = String(word).toLowerCase().trim();
  if (FUNCTION_WORD_POS.has(lowerWord)) return FUNCTION_WORD_POS.get(lowerWord);

  const cleaned = cleanMeaningRaw(rawMeaning);
  const tokens = cleaned.split(' ').filter(Boolean);

  const hasVerb = tokens.some((t) => isVerbLike(t));
  const hasAdverb = tokens.some((t) => isAdverbLike(t));
  const hasAdj = tokens.some((t) => isAdjectiveLike(t));

  if (hasVerb) return 'verb';
  if (hasAdverb) return 'adverb';
  if (hasAdj) return 'adjective';

  // 영어 형태 힌트
  if (lowerWord.endsWith('ly')) return 'adverb';
  if (lowerWord.endsWith('tion') || lowerWord.endsWith('ment') || lowerWord.endsWith('ness') || lowerWord.endsWith('ity')) return 'noun';
  if (lowerWord.endsWith('ate') || lowerWord.endsWith('fy') || lowerWord.endsWith('ize') || lowerWord.endsWith('ise')) return 'verb';

  if (POS_SET.has(fallbackPos)) return fallbackPos;
  return 'noun';
}

function makeDefinition(word, meaning, pos) {
  switch (pos) {
    case 'verb':
      return 'to perform an action, process, or change in a particular context';
    case 'adjective':
      return 'describing a quality, condition, or characteristic of a noun';
    case 'adverb':
      return 'modifying how, when, where, or to what degree something happens';
    case 'preposition':
      return 'showing the relation between a noun phrase and other elements in a sentence';
    case 'conjunction':
      return 'connecting words, phrases, or clauses to build a complete sentence';
    case 'interjection':
      return 'expressing sudden feeling, reaction, or emphasis in speech';
    case 'pronoun':
      return 'used in place of a noun to avoid repetition in discourse';
    default:
      return 'a person, thing, concept, state, or event referred to in context';
  }
}

function makeExamples(word, meaning, pos, seed) {
  const nounExamples = [
    [`The word "${word}" is used with the meaning "${meaning}".`, `단어 "${word}"는 "${meaning}"의 뜻으로 사용된다.`],
    [`I wrote "${word}" in my vocabulary notebook today.`, `나는 오늘 단어장에 단어 "${word}"를 적어 복습했다.`],
    [`In this sentence, "${word}" refers to "${meaning}".`, `이 문장에서 단어 "${word}"는 "${meaning}" 의미를 가리킨다.`],
  ];
  const verbExamples = [
    [`You can "${word}" when this situation appears.`, `이 상황이 생기면 "${word}"라고 표현할 수 있다.`],
    [`We practiced how to "${word}" in class.`, `우리는 수업에서 단어 "${word}"의 활용을 연습했다.`],
    [`Try to "${word}" in a short dialogue.`, `짧은 대화에서 "${word}"를 직접 써 보자.`],
  ];
  const adjectiveExamples = [
    [`This object can be described as "${word}".`, `이 대상을 "${word}"라고 묘사할 수 있다.`],
    [`I used "${word}" to explain the noun clearly.`, `나는 명사를 더 분명히 설명하려고 형용사 "${word}"를 사용했다.`],
    [`The adjective "${word}" conveys "${meaning}".`, `형용사 "${word}"는 "${meaning}"의 의미를 전달한다.`],
  ];
  const adverbExamples = [
    [`The adverb "${word}" modifies the verb in this sentence.`, `이 문장에서 부사 "${word}"가 동사를 수식한다.`],
    [`Use "${word}" to express "${meaning}" more precisely.`, `"${meaning}" 의미를 더 정확히 나타내려면 "${word}"를 쓰면 된다.`],
    [`I added "${word}" to make the sentence natural.`, `문장을 자연스럽게 만들기 위해 부사 "${word}"를 넣었다.`],
  ];
  const prepExamples = [
    [`Use "${word}" before a noun phrase in context.`, `문맥에서 전치사 "${word}"는 명사구 앞에 둔다.`],
    [`The phrase with "${word}" conveys "${meaning}".`, `"${word}"가 포함된 구는 "${meaning}" 의미를 전달한다.`],
    [`I checked how "${word}" connects to the next noun.`, `나는 전치사 "${word}"가 다음 명사와 어떻게 연결되는지 확인했다.`],
  ];
  const conjExamples = [
    [`"${word}" connects two ideas in one sentence.`, `"${word}"는 한 문장에서 두 생각을 연결한다.`],
    [`Use "${word}" to link clauses naturally.`, `절을 자연스럽게 잇기 위해 접속사 "${word}"를 사용한다.`],
    [`I rewrote the sentence with "${word}" for clarity.`, `문장을 더 분명하게 하기 위해 "${word}"를 넣어 다시 썼다.`],
  ];

  let pool = nounExamples;
  if (pos === 'verb') pool = verbExamples;
  else if (pos === 'adjective') pool = adjectiveExamples;
  else if (pos === 'adverb') pool = adverbExamples;
  else if (pos === 'preposition') pool = prepExamples;
  else if (pos === 'conjunction') pool = conjExamples;

  const i1 = seed % pool.length;
  const i2 = (seed + 1) % pool.length;
  return [pool[i1], pool[i2]];
}

function parseRows(content) {
  const rows = [];
  const re = /word\('((?:\\'|[^'])*)',\s*'((?:\\'|[^'])*)',\s*(\d+),\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const pos = POS_SET.has(m[4]) ? m[4] : 'noun';
    rows.push({
      word: m[1].replace(/\\'/g, "'"),
      meaning: m[2].replace(/\\'/g, "'"),
      level: Number(m[3]),
      pos,
    });
  }
  return rows;
}

function buildEntry(row) {
  const word = row.word.trim();
  const pos = inferPos(word, row.meaning, row.pos);
  const meaning = normalizeMeaning(row.meaning, pos);
  const seed = hash(word.toLowerCase());
  const distractors = rotateTake(DISTRACTOR_POOLS[pos], seed, 10).map((d) => `'${esc(d)}'`).join(', ');
  const [syn1, syn2, syn3] = pickSynonyms(word, pos, seed).map((w) => esc(w));
  const [ant1, ant2, ant3] = pickAntonyms(word, pos, seed).map((w) => esc(w));
  const [ex1, ex2] = makeExamples(word, meaning, pos, seed);
  const safeDefinition = removeWordLeak(makeDefinition(word, meaning, pos), word);

  return `  word('${esc(word)}', '${esc(meaning)}', ${row.level}, '${pos}',
    [${distractors}],
    tips({
      etymology: '${esc(`${word}의 접두/어근/접미를 확인하며 "${meaning}" 의미와 연결해 암기하자.`)}',
      visual: '${esc(`"${meaning}" 상황을 머릿속 한 장면으로 만들고 단어 ${word}를 함께 떠올리자.`)}',
      soundAlike: '${esc(`${word}의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.`)}',
      context: '${esc(`In context, "${word}" conveys the meaning "${meaning}".`)}',
      synonymAntonym: '${esc(`${pos} 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.`)}',
    }),
    {
      definition: '${esc(safeDefinition)}',
      synonyms: ['${syn1}', '${syn2}', '${syn3}'],
      antonyms: ['${ant1}', '${ant2}', '${ant3}'],
      exampleSentences: [
        { en: '${esc(ex1[0])}', ko: '${esc(ex1[1])}' },
        { en: '${esc(ex2[0])}', ko: '${esc(ex2[1])}' },
      ],
    }
  )`;
}

for (let i = 21; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(file, 'utf8');
  const rows = parseRows(content);
  if (rows.length === 0) {
    console.log(`skip vocab_batch_${num}.ts (no rows)`);
    continue;
  }

  const rebuilt = `import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch${num}: VocabItem[] = [
${rows.map((r) => buildEntry(r)).join(',\n')},
];
`;
  writeFileSync(file, rebuilt, 'utf8');
  console.log(`refined-v2 vocab_batch_${num}.ts (${rows.length} words)`);
}

console.log('v2 refinement complete');
