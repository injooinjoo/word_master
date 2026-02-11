/**
 * Phase 1: 교육부 3천단어 엑셀 → 스켈레톤 배치 파일 생성
 *
 * 사용법: node scripts/generate_vocab_skeleton.mjs
 *
 * 1. temp_vocab.xls 에서 단어 목록 읽기
 * 2. 기존 배치 01~20과 중복 제거
 * 3. 등급 → level 매핑
 * 4. 50개씩 묶어 vocab_batch_21.ts ~ vocab_batch_XX.ts 생성
 * 5. index.ts 업데이트
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const ROOT = resolve(import.meta.dirname, '..');
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');
const EXCEL_PATH = join(ROOT, 'temp_vocab.xls');
const BATCH_SIZE = 50;
const FIRST_NEW_BATCH = 21;

// ── 1. 엑셀 읽기 ──────────────────────────────────────────────
console.log('📖 엑셀 파일 읽는 중...');
const wb = XLSX.readFile(EXCEL_PATH);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 }).slice(1); // 헤더 제외

console.log(`   총 ${rows.length}개 단어 발견`);

// ── 2. 기존 단어 수집 (batch 01~20) ────────────────────────────
console.log('🔍 기존 단어 수집 중...');
const existingWords = new Set();

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(file, 'utf8');
  const matches = content.matchAll(/word\(\s*'([^']+)'/g);
  for (const m of matches) {
    existingWords.add(m[1].toLowerCase());
  }
}

console.log(`   기존 단어: ${existingWords.size}개`);

// ── 3. 중복 제거 + 등급 매핑 ───────────────────────────────────
const LEVEL_MAP = {
  '초등': [1, 2, 3],
  '중고': [4, 5, 6, 7],
  '전문': [8, 9, 10],
};

let levelCounter = { '초등': 0, '중고': 0, '전문': 0 };

function mapLevel(grade) {
  const levels = LEVEL_MAP[grade] || [5];
  const count = levelCounter[grade] || 0;
  levelCounter[grade] = count + 1;
  // 등급 내에서 균등 분배
  return levels[count % levels.length];
}

function normalizeMeaningRaw(raw) {
  const cleaned = String(raw || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b(?:n|v|vi|vt|adj|adv|ad|prep|pron|conj|prop|pr)\.?/gi, ' ')
    .replace(/[·•/;,]+/g, ' ')
    .replace(/[.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const tokens = cleaned.split(' ').filter(Boolean);
  const deduped = [];
  for (const t of tokens) {
    if (deduped.length === 0 || deduped[deduped.length - 1] !== t) deduped.push(t);
  }
  return deduped.join(' ');
}

const newWords = [];
for (const row of rows) {
  const word = String(row[1] || '').trim();
  const meaning = normalizeMeaningRaw(row[2]);
  const grade = String(row[3] || '').trim();
  const variant1 = row[4] ? String(row[4]).trim() : null;
  const variant2 = row[5] ? String(row[5]).trim() : null;

  if (!word || !meaning) continue;
  if (existingWords.has(word.toLowerCase())) continue;

  newWords.push({
    word,
    meaning,
    level: mapLevel(grade),
    grade,
    variant1,
    variant2,
  });
}

console.log(`   신규 단어: ${newWords.length}개 (중복 ${rows.length - newWords.length}개 제거)`);

// ── 4. 배치 파일 생성 ──────────────────────────────────────────
const totalBatches = Math.ceil(newWords.length / BATCH_SIZE);
console.log(`📝 배치 파일 ${totalBatches}개 생성 중...`);

for (let b = 0; b < totalBatches; b++) {
  const batchNum = FIRST_NEW_BATCH + b;
  const batchNumStr = String(batchNum).padStart(2, '0');
  const slice = newWords.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);

  const entries = slice.map((item) => {
    // 작은따옴표 이스케이프
    const w = item.word.replace(/'/g, "\\'");
    const m = item.meaning.replace(/'/g, "\\'");

    return `  word('${w}', '${m}', ${item.level}, 'noun',
    [],
    tips({
      etymology: '',
      visual: '',
      soundAlike: '',
      context: '',
      synonymAntonym: '',
    }),
  )`;
  });

  const content = `import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch${batchNumStr}: VocabItem[] = [
${entries.join(',\n')},
];
`;

  const filePath = join(VOCAB_DIR, `vocab_batch_${batchNumStr}.ts`);
  writeFileSync(filePath, content, 'utf8');
  console.log(`   ✅ vocab_batch_${batchNumStr}.ts (${slice.length}단어)`);
}

// ── 5. index.ts 업데이트 ───────────────────────────────────────
console.log('📦 index.ts 업데이트 중...');

const lastBatch = FIRST_NEW_BATCH + totalBatches - 1;
const imports = [];
const spreads = [];

for (let i = 1; i <= lastBatch; i++) {
  const num = String(i).padStart(2, '0');
  imports.push(`import { vocabBatch${num} } from './vocab_batch_${num}';`);
  spreads.push(`  ...vocabBatch${num},`);
}

const indexContent = `import type { VocabItem } from '../models/vocab';

${imports.join('\n')}

export const allVocabData: VocabItem[] = [
${spreads.join('\n')}
];
`;

writeFileSync(join(VOCAB_DIR, 'index.ts'), indexContent, 'utf8');
console.log('   ✅ index.ts 업데이트 완료');

// ── 완료 ───────────────────────────────────────────────────────
console.log(`\n🎉 완료! 총 ${newWords.length}개 신규 단어를 ${totalBatches}개 배치 파일로 생성했습니다.`);
console.log(`   기존: batch 01~20 (${existingWords.size}단어)`);
console.log(`   신규: batch ${FIRST_NEW_BATCH}~${lastBatch} (${newWords.length}단어)`);
console.log(`   합계: ~${existingWords.size + newWords.length}단어`);
console.log(`\n⚠️  Phase 2에서 AI가 빈 필드(품사, 오답, 학습팁 등)를 채워야 합니다.`);
