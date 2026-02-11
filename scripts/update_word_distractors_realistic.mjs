/**
 * Update K→E distractors to realistic, exam-like options.
 *
 * Strategy:
 * - Keep existing words (no word replacement).
 * - Rebuild `wordDistractors` from real vocabulary words only.
 * - Prefer same POS, close level, similar spelling, and overlapping Korean meaning tokens.
 *
 * Usage:
 *   node scripts/update_word_distractors_realistic.mjs
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');

const VOCAB_FILE_RE = /^vocab_batch_\d{2}\.ts$/;
const POS_SET = new Set([
  'noun',
  'verb',
  'adjective',
  'adverb',
  'preposition',
  'conjunction',
  'interjection',
  'pronoun',
]);

function unescapeTsSingleQuoted(value) {
  return value.replace(/\\\\/g, '\\').replace(/\\'/g, "'");
}

function escapeTsSingleQuoted(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function normalizeWord(value) {
  return value.trim().toLowerCase();
}

function tokenizeMeaning(value) {
  const cleaned = value
    .toLowerCase()
    .replace(/[()[\],;~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return [];
  return cleaned.split(' ').filter((t) => t.length >= 2);
}

function editDistance(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

function findWordCallEnd(text, startIndex) {
  let depth = 0;
  let inString = false;
  let escaping = false;

  for (let i = startIndex; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (ch === '\\') {
        escaping = true;
        continue;
      }
      if (ch === "'") {
        inString = false;
      }
      continue;
    }

    if (ch === "'") {
      inString = true;
      continue;
    }
    if (ch === '(') {
      depth++;
      continue;
    }
    if (ch === ')') {
      depth--;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

function extractEntries(content) {
  const entries = [];
  const marker = "word('";
  let cursor = 0;

  while (true) {
    const start = content.indexOf(marker, cursor);
    if (start === -1) break;

    const end = findWordCallEnd(content, start + marker.length - 1);
    if (end === -1) break;

    const block = content.slice(start, end + 1);
    const m = block.match(/word\('((?:\\'|[^'])*)',\s*'((?:\\'|[^'])*)',\s*(\d+),\s*'([^']+)'/);
    if (m) {
      const pos = POS_SET.has(m[4]) ? m[4] : 'noun';
      entries.push({
        start,
        end,
        block,
        word: unescapeTsSingleQuoted(m[1]),
        meaning: unescapeTsSingleQuoted(m[2]),
        level: Number(m[3]),
        pos,
      });
    }
    cursor = end + 1;
  }
  return entries;
}

function buildWordBank(files) {
  const bank = [];
  for (const file of files) {
    const fullPath = join(VOCAB_DIR, file);
    const content = readFileSync(fullPath, 'utf8');
    const entries = extractEntries(content);
    for (const e of entries) {
      bank.push({
        word: e.word,
        meaning: e.meaning,
        level: e.level,
        pos: e.pos,
      });
    }
  }
  return bank;
}

function scoreCandidate(target, candidate) {
  const tWord = normalizeWord(target.word);
  const cWord = normalizeWord(candidate.word);
  if (!tWord || !cWord || tWord === cWord) return -999;

  let score = 0;
  if (cWord[0] === tWord[0]) score += 1.5;
  if (cWord.slice(0, 2) === tWord.slice(0, 2)) score += 1.5;
  if (cWord.slice(-2) === tWord.slice(-2)) score += 0.8;

  const lenGap = Math.abs(cWord.length - tWord.length);
  if (lenGap <= 1) score += 1;
  else if (lenGap <= 2) score += 0.5;

  score -= editDistance(tWord, cWord) * 0.12;

  const levelGap = Math.abs((candidate.level ?? 0) - (target.level ?? 0));
  if (levelGap <= 1) score += 1.2;
  else if (levelGap <= 2) score += 0.7;
  else if (levelGap <= 3) score += 0.3;

  const tTokens = new Set(tokenizeMeaning(target.meaning));
  const cTokens = tokenizeMeaning(candidate.meaning);
  let overlap = 0;
  for (const tok of cTokens) {
    if (tTokens.has(tok)) overlap++;
  }
  score += Math.min(2.5, overlap * 0.9);

  return score;
}

function pickDistractors(target, bank, count = 3) {
  const samePos = bank.filter((c) => c.pos === target.pos && normalizeWord(c.word) !== normalizeWord(target.word));
  const otherPos = bank.filter((c) => c.pos !== target.pos && normalizeWord(c.word) !== normalizeWord(target.word));

  const rankedSame = [...samePos].sort((a, b) => scoreCandidate(target, b) - scoreCandidate(target, a));
  const rankedOther = [...otherPos].sort((a, b) => scoreCandidate(target, b) - scoreCandidate(target, a));

  const chosen = [];
  const used = new Set([normalizeWord(target.word)]);
  const push = (w) => {
    const key = normalizeWord(w);
    if (!key || used.has(key)) return false;
    used.add(key);
    chosen.push(w);
    return true;
  };

  for (const c of rankedSame) {
    if (chosen.length >= count) break;
    push(c.word);
  }
  for (const c of rankedOther) {
    if (chosen.length >= count) break;
    push(c.word);
  }

  return chosen.slice(0, count);
}

function updateBlockDistractors(block, distractors) {
  const arrayText = `[${distractors.map((d) => `'${escapeTsSingleQuoted(d)}'`).join(', ')}]`;

  if (/wordDistractors:\s*\[[\s\S]*?\]/.test(block)) {
    return block.replace(/wordDistractors:\s*\[[\s\S]*?\]/, `wordDistractors: ${arrayText}`);
  }

  // Insert before exampleSentences when the field does not exist yet.
  if (/exampleSentences:\s*\[/.test(block)) {
    return block.replace(/exampleSentences:\s*\[/, `wordDistractors: ${arrayText},\n      exampleSentences: [`);
  }

  return block;
}

function updateFile(file, bank) {
  const path = join(VOCAB_DIR, file);
  const content = readFileSync(path, 'utf8');
  const entries = extractEntries(content);
  if (entries.length === 0) return { changed: false, updated: 0 };

  let out = '';
  let cursor = 0;
  let updated = 0;

  for (const e of entries) {
    out += content.slice(cursor, e.start);

    const distractors = pickDistractors(e, bank, 3);
    if (distractors.length < 3) {
      out += e.block;
    } else {
      const newBlock = updateBlockDistractors(e.block, distractors);
      out += newBlock;
      if (newBlock !== e.block) updated++;
    }
    cursor = e.end + 1;
  }
  out += content.slice(cursor);

  if (out !== content) {
    writeFileSync(path, out, 'utf8');
    return { changed: true, updated };
  }
  return { changed: false, updated };
}

function main() {
  const files = readdirSync(VOCAB_DIR)
    .filter((f) => VOCAB_FILE_RE.test(f))
    .sort();

  const bank = buildWordBank(files);
  let changedFiles = 0;
  let updatedEntries = 0;

  for (const file of files) {
    const result = updateFile(file, bank);
    if (result.changed) changedFiles++;
    updatedEntries += result.updated;
    console.log(`${file}: ${result.updated} entries updated`);
  }

  console.log(`done: ${changedFiles} files changed, ${updatedEntries} entries updated`);
}

main();

