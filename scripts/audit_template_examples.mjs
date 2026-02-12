#!/usr/bin/env node
/**
 * Audit vocab batch files for template/placeholder example sentences and odd lines.
 * Reports: I wrote "...", In this sentence "...", The word "..." is used with the meaning,
 * Try to "...", You can "...", This object can be described as, I used "..." to explain,
 * The adjective "..." conveys, I added "..." to make the sentence natural.
 *
 * Usage: node scripts/audit_template_examples.mjs
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const VOCAB_DIR = join(process.cwd(), 'src/data/vocab');
const TEMPLATE_PATTERNS = [
  /I wrote "[^"]+" in my vocabulary notebook/,
  /In this sentence, "[^"]+" refers to/,
  /The word "[^"]+" is used with the meaning/,
  /Try to "[^"]+" in a short dialogue/,
  /You can "[^"]+" when this situation appears/,
  /This object can be described as "[^"]+"/,
  /I used "[^"]+" to explain the noun clearly/,
  /The adjective "[^"]+" conveys/,
  /I added "[^"]+" to make the sentence natural/,
  /Use "[^"]+" to express "[^"]+" more precisely/,
  /We practiced how to "[^"]+" in class/,
  /I checked how "[^"]+" connects to the next noun/,
  /Use "[^"]+" before a noun phrase in context/,
  /The phrase with "[^"]+" conveys/,
];

const batchFiles = readdirSync(VOCAB_DIR)
  .filter((f) => f.startsWith('vocab_batch_') && f.endsWith('.ts'))
  .sort((a, b) => {
    const na = parseInt(a.replace(/\D/g, ''), 10);
    const nb = parseInt(b.replace(/\D/g, ''), 10);
    return na - nb;
  });

const report = [];
let totalTemplateLines = 0;

for (const file of batchFiles) {
  const path = join(VOCAB_DIR, file);
  const content = readFileSync(path, 'utf8');
  const lines = content.split('\n');
  const matches = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const pattern of TEMPLATE_PATTERNS) {
      if (pattern.test(line)) {
        matches.push({ lineNum: i + 1, text: line.trim().slice(0, 80) });
        totalTemplateLines++;
        break;
      }
    }
  }

  if (matches.length > 0) {
    report.push({ file, count: matches.length, sample: matches.slice(0, 2) });
  }
}

console.log('=== Template example sentences audit ===\n');
console.log(`Total batch files: ${batchFiles.length}`);
console.log(`Files with template sentences: ${report.length}`);
console.log(`Total template line count: ${totalTemplateLines}\n`);

for (const { file, count, sample } of report) {
  console.log(`${file}: ${count} template line(s)`);
  for (const { lineNum, text } of sample) {
    console.log(`  L${lineNum}: ${text}...`);
  }
  console.log('');
}
