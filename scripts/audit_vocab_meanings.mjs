#!/usr/bin/env node
/**
 * Audit vocab batch files for suspicious or likely-wrong "meaning" (한글 뜻) values.
 * Reports: known typo patterns and optional strict-short checks.
 *
 * Usage:
 *   node scripts/audit_vocab_meanings.mjs
 *   node scripts/audit_vocab_meanings.mjs --strict-short
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const VOCAB_DIR = join(process.cwd(), 'src/data/vocab');
const argv = process.argv.slice(2);
const strictShort = argv.includes('--strict-short');
const unknownArgs = argv.filter((arg) => arg !== '--strict-short');

if (unknownArgs.length > 0) {
  console.error(`Unknown option(s): ${unknownArgs.join(', ')}`);
  console.error('Usage: node scripts/audit_vocab_meanings.mjs [--strict-short]');
  process.exit(1);
}

const KNOWN_SUSPICIOUS_PATTERNS = [
  { token: '사용세', reason: 'known_typo:사용세' }, // tool -> 도구
  { token: 'auwill', reason: 'known_typo:auwill' }, // would typo
  { token: '즈봉', reason: 'known_typo:즈봉' }, // trouser typo
  { token: '질질', reason: 'known_typo:질질' }, // trail -> 흔적 confusion
];

const batchFiles = readdirSync(VOCAB_DIR)
  .filter((f) => f.startsWith('vocab_batch_') && f.endsWith('.ts'))
  .sort((a, b) => parseInt(a.replace(/\D/g, ''), 10) - parseInt(b.replace(/\D/g, ''), 10));

const report = [];
const reasonCounts = new Map();

function pushFinding(finding) {
  report.push(finding);
  reasonCounts.set(finding.reason, (reasonCounts.get(finding.reason) ?? 0) + 1);
}

for (const file of batchFiles) {
  const path = join(VOCAB_DIR, file);
  const content = readFileSync(path, 'utf8');
  const wordMatches = [...content.matchAll(/word\('([^']+)',\s*'([^']*)'/g)];
  for (const [, word, meaning] of wordMatches) {
    const trimmedMeaning = meaning.trim();
    for (const pattern of KNOWN_SUSPICIOUS_PATTERNS) {
      if (!trimmedMeaning.includes(pattern.token)) continue;
      pushFinding({
        file,
        word,
        meaning: trimmedMeaning,
        reason: pattern.reason,
      });
      break;
    }

    if (
      strictShort &&
      trimmedMeaning.length <= 1 &&
      trimmedMeaning !== '이' &&
      trimmedMeaning !== '가'
    ) {
      pushFinding({
        file,
        word,
        meaning: trimmedMeaning,
        reason: 'strict_short_meaning',
      });
    }
  }
}

console.log('=== Suspicious meanings audit ===\n');
console.log(`strict-short: ${strictShort ? 'ON' : 'OFF'}`);
if (report.length === 0) {
  console.log('No suspicious meanings found.');
} else {
  for (const { file, word, meaning, reason } of report) {
    console.log(`${file}  word="${word}"  meaning="${meaning}"  (${reason})`);
  }
}

console.log(`\nTotal: ${report.length} item(s)`);

if (reasonCounts.size > 0) {
  console.log('\n=== Reason summary ===');
  const sortedReasons = [...reasonCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for (const [reason, count] of sortedReasons) {
    console.log(`${reason}: ${count}`);
  }
}
