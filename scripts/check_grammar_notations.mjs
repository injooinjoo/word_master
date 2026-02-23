/**
 * 오답(distractor) 배열 안에 문법 표기(명 ism, 형 ble 등)가 들어간 항목 검사
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VOCAB_DIR = path.join(__dirname, '..', 'src', 'data', 'vocab');

// 문법 패턴 표기로 보이는 것들
const GRAMMAR_PATTERNS = [
  /^명( \w+)*$/,           // 명, 명 er, 명 tion, 명 ism, 명 nce, 명 inter, 명 지역, 명 un
  /^형( \w+)*$/,           // 형, 형 ble, 형 ing, 형 ic, 형 수
  /^동( \w+)*$/,           // 동, 동 un
  /^준비,.+주선$/,          // "준비, 마련, 주선" 같은 게 아니라 명사형 표기
];

// 단어 추출: word('단어', '뜻', ...) 패턴
const WORD_REGEX = /word\('([^']+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,\s*'([^']+)'/g;

// distractor 배열 추출 (word() 호출의 5번째 인자)
function extractDistractorArray(content, wordStartIndex) {
  // 4번째 인자(pos) 이후 첫 번째 배열
  const slice = content.slice(wordStartIndex, wordStartIndex + 2000);
  const arrayMatch = slice.match(/,\s*\[([^\]]+)\]/s);
  if (!arrayMatch) return [];
  const items = [];
  const regex = /'([^']+)'/g;
  let m;
  while ((m = regex.exec(arrayMatch[1])) !== null) {
    items.push(m[1]);
  }
  return items;
}

function isGrammarNotation(s) {
  return GRAMMAR_PATTERNS.some(p => p.test(s.trim()));
}

const issues = [];
const files = fs.readdirSync(VOCAB_DIR)
  .filter(f => f.startsWith('vocab_batch_') && f.endsWith('.ts'))
  .sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(VOCAB_DIR, file), 'utf8');
  let match;
  WORD_REGEX.lastIndex = 0;
  while ((match = WORD_REGEX.exec(content)) !== null) {
    const word = match[1];
    const meaning = match[2];
    const distractors = extractDistractorArray(content, match.index);
    const badDistractors = distractors.filter(isGrammarNotation);
    if (badDistractors.length > 0) {
      issues.push({ file, word, meaning, badDistractors, totalDistractors: distractors.length });
    }
  }
}

// 파일별 요약
const byFile = {};
for (const issue of issues) {
  if (!byFile[issue.file]) byFile[issue.file] = 0;
  byFile[issue.file]++;
}

console.log('=== 문법 표기 오답 현황 ===\n');
for (const [file, count] of Object.entries(byFile)) {
  console.log(`${file}: ${count}개 단어에 문법표기 오답 포함`);
}
console.log(`\n총 영향받는 단어 수: ${issues.length}개`);

// 상세 예시 (최대 20개)
console.log('\n--- 상세 예시 (최초 20개) ---');
for (const issue of issues.slice(0, 20)) {
  console.log(`[${issue.file}] "${issue.word}" (${issue.meaning}): 문법표기=[${issue.badDistractors.join(', ')}]`);
}
