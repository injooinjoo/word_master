#!/usr/bin/env node
/**
 * Audit vocab batch files for suspicious or likely-wrong "meaning" (한글 뜻) values.
 * Reports: very short meanings, known typo patterns, etc.
 *
 * Usage: node scripts/audit_vocab_meanings.mjs
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const VOCAB_DIR = join(process.cwd(), 'src/data/vocab');
const KNOWN_SUSPICIOUS = [
  '사용세',   // tool → 도구
  'auwill',   // would
  '실물',    // plant → 식물?
  '눈에',    // outstanding → 눈에 띄는
  '하다',    // too generic for many verbs
  '질질',    // trail → 흔적
  '각형',    // triangle → 삼각형
  '즈봉',    // trouser → 바지
  '전설',    // tradition → 전통
];

const batchFiles = readdirSync(VOCAB_DIR)
  .filter((f) => f.startsWith('vocab_batch_') && f.endsWith('.ts'))
  .sort((a, b) => parseInt(a.replace(/\D/g, ''), 10) - parseInt(b.replace(/\D/g, ''), 10));

const report = [];

for (const file of batchFiles) {
  const path = join(VOCAB_DIR, file);
  const content = readFileSync(path, 'utf8');
  const wordMatches = [...content.matchAll(/word\('([^']+)',\s*'([^']*)'/g)];
  for (const [, word, meaning] of wordMatches) {
    if (KNOWN_SUSPICIOUS.some((s) => meaning.includes(s))) {
      report.push({ file, word, meaning, reason: 'known_suspicious' });
    } else if (meaning.length <= 1 && meaning !== '이' && meaning !== '가') {
      report.push({ file, word, meaning, reason: 'very_short' });
    }
  }
}

console.log('=== Suspicious meanings audit ===\n');
if (report.length === 0) {
  console.log('No suspicious meanings found.');
} else {
  for (const { file, word, meaning, reason } of report) {
    console.log(`${file}  word="${word}"  meaning="${meaning}"  (${reason})`);
  }
}
console.log(`\nTotal: ${report.length} item(s)`);
