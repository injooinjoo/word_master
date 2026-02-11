/**
 * 품질 점검 스크립트
 * - 대상: vocab_batch_21.ts ~ vocab_batch_70.ts
 * - 검사: 필수 필드 존재, 빈 문자열 여부, 배열 길이, 기본 품사 유효성
 */

import { readFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const POS_SET = new Set([
  'noun', 'verb', 'adjective', 'adverb',
  'preposition', 'conjunction', 'interjection', 'pronoun',
]);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function hasWholeWord(text, word) {
  if (!word || !word.trim()) return false;
  const re = new RegExp(`(^|[^A-Za-z])${escapeRegex(word.trim())}(?=[^A-Za-z]|$)`, 'i');
  return re.test(text);
}

function extractWordBlocks(content) {
  const marker = '\n  word(';
  const startIndex = content.indexOf('word(');
  if (startIndex < 0) return [];

  const blocks = [];
  let cursor = startIndex;

  while (cursor >= 0) {
    const next = content.indexOf(marker, cursor + 1);
    const block = next >= 0 ? content.slice(cursor, next) : content.slice(cursor);
    blocks.push(block);
    cursor = next >= 0 ? next + 1 : -1;
  }

  return blocks;
}

function countQuotedArrayItems(block, key) {
  const re = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
  const m = block.match(re);
  if (!m) return -1;
  const entries = [...m[1].matchAll(/'((?:\\'|[^'])*)'/g)];
  return entries.length;
}

function getQuotedArrayItems(block, key) {
  const re = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
  const m = block.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/'((?:\\'|[^'])*)'/g)].map((x) => x[1].replace(/\\'/g, "'"));
}

const issues = [];
let total = 0;

for (let i = 21; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(file, 'utf8');

  const blocks = extractWordBlocks(content);
  total += blocks.length;

  for (const block of blocks) {
    const header = block.match(/word\('((?:\\'|[^'])*)',\s*'((?:\\'|[^'])*)',\s*(\d+),\s*'([^']+)'/);
    if (!header) {
      issues.push(`${num}:unparsed word block`);
      continue;
    }

    const word = header[1].replace(/\\'/g, "'");
    const meaning = header[2].replace(/\\'/g, "'");
    const level = Number(header[3]);
    const pos = header[4];

    if (!word.trim()) issues.push(`${num}:${word} empty word`);
    if (!meaning.trim()) issues.push(`${num}:${word} empty meaning`);
    if (!Number.isInteger(level) || level < 1 || level > 10) issues.push(`${num}:${word} invalid level ${level}`);
    if (!POS_SET.has(pos)) issues.push(`${num}:${word} invalid pos ${pos}`);
    if (block.includes("etymology: ''") || block.includes("visual: ''") || block.includes("soundAlike: ''")) {
      issues.push(`${num}:${word} empty learning tip`);
    }
    if (!block.includes('definition:')) issues.push(`${num}:${word} missing definition`);
    // wordDistractors는 서비스 auto-generation 사용을 위해 생략 가능
    // definitionDistractors는 auto-generation 사용을 위해 생략 가능
    if (!block.includes('exampleSentences:')) issues.push(`${num}:${word} missing exampleSentences`);

    const dCount = countQuotedArrayItems(block, 'wordDistractors');
    if (dCount !== -1 && dCount !== 3) issues.push(`${num}:${word} wordDistractors count=${dCount}`);

    const ddCount = countQuotedArrayItems(block, 'definitionDistractors');
    if (ddCount !== -1 && ddCount !== 3) issues.push(`${num}:${word} definitionDistractors count=${ddCount}`);

    const synCount = countQuotedArrayItems(block, 'synonyms');
    if (synCount !== 3) issues.push(`${num}:${word} synonyms count=${synCount}`);

    const antCount = countQuotedArrayItems(block, 'antonyms');
    if (antCount !== 3) issues.push(`${num}:${word} antonyms count=${antCount}`);

    const defMatch = block.match(/definition:\s*'((?:\\'|[^'])*)'/);
    if (defMatch) {
      const def = defMatch[1].replace(/\\'/g, "'");
      if (/[가-힣]/.test(def)) issues.push(`${num}:${word} definition has Hangul`);
      if (hasWholeWord(def, word)) issues.push(`${num}:${word} definition leaks target word`);
    }

    const ddItems = getQuotedArrayItems(block, 'definitionDistractors');
    for (const item of ddItems) {
      if (/[가-힣]/.test(item)) issues.push(`${num}:${word} definitionDistractor has Hangul`);
      if (hasWholeWord(item, word)) issues.push(`${num}:${word} definitionDistractor leaks target word`);
    }

    const synItems = getQuotedArrayItems(block, 'synonyms');
    for (const item of synItems) {
      if (/[가-힣]/.test(item)) issues.push(`${num}:${word} synonym has Hangul`);
      if (item.toLowerCase() === word.toLowerCase()) issues.push(`${num}:${word} synonym equals target`);
    }

    const antItems = getQuotedArrayItems(block, 'antonyms');
    for (const item of antItems) {
      if (/[가-힣]/.test(item)) issues.push(`${num}:${word} antonym has Hangul`);
      if (item.toLowerCase() === word.toLowerCase()) issues.push(`${num}:${word} antonym equals target`);
    }
  }
}

console.log(`TOTAL_ENTRIES=${total}`);
console.log(`ISSUE_COUNT=${issues.length}`);
if (issues.length > 0) {
  for (const issue of issues.slice(0, 200)) console.log(issue);
}
