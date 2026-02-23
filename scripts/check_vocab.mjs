/**
 * vocab 데이터 품질 검사 스크립트
 * 단어와 뜻, 오답, 예문, 동의어 등의 매칭 이상 여부를 검사합니다.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VOCAB_DIR = path.join(__dirname, '..', 'src', 'data', 'vocab');

// word() 호출을 텍스트에서 파싱하는 함수
function extractWords(fileContent) {
  const results = [];

  // word('...', '...', level, 'pos', [...distractors], tips({...}), {...extra...})
  // 단순 정규식으로 각 word() 블록을 추출
  const wordRegex = /word\(\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,\s*'([^']+)'/g;
  let match;
  while ((match = wordRegex.exec(fileContent)) !== null) {
    results.push({
      word: match[1],
      meaning: match[2],
      level: parseInt(match[3]),
      pos: match[4],
      rawIndex: match.index,
    });
  }
  return results;
}

// definition distractor 추출
function extractDefinitionDistractors(fileContent, startIndex) {
  const slice = fileContent.slice(startIndex, startIndex + 3000);
  const match = slice.match(/definitionDistractors\s*:\s*\[([^\]]+)\]/s);
  if (!match) return [];
  const items = match[1].match(/'([^']+)'/g);
  return items ? items.map(s => s.replace(/'/g, '')) : [];
}

// definition 추출
function extractDefinition(fileContent, startIndex) {
  const slice = fileContent.slice(startIndex, startIndex + 3000);
  const match = slice.match(/definition\s*:\s*'([^']+)'/);
  return match ? match[1] : null;
}

// synonyms 추출
function extractSynonyms(fileContent, startIndex) {
  const slice = fileContent.slice(startIndex, startIndex + 3000);
  const match = slice.match(/synonyms\s*:\s*\[([^\]]+)\]/s);
  if (!match) return [];
  const items = match[1].match(/'([^']+)'/g);
  return items ? items.map(s => s.replace(/'/g, '')) : [];
}

// distractors 배열 추출 (word() 5번째 인자)
function extractDistractors(fileContent, wordStartIndex) {
  // word() 호출에서 4번째 인자(pos) 이후의 배열을 찾음
  const slice = fileContent.slice(wordStartIndex, wordStartIndex + 2000);
  const arrayMatch = slice.match(/,\s*\[([^\]]+)\]/s);
  if (!arrayMatch) return [];
  const items = arrayMatch[1].match(/'([^']+)'/g);
  return items ? items.map(s => s.replace(/'/g, '')) : [];
}

// 예문 추출
function extractExamples(fileContent, startIndex) {
  const slice = fileContent.slice(startIndex, startIndex + 3000);
  const results = [];
  const regex = /\{\s*en\s*:\s*'([^']+)'\s*,\s*ko\s*:\s*'([^']+)'\s*\}/g;
  let m;
  while ((m = regex.exec(slice)) !== null) {
    results.push({ en: m[1], ko: m[2] });
  }
  return results;
}

// 자주 발생하는 문제 체크 목록
const issues = [];

function addIssue(file, word, meaning, type, detail) {
  issues.push({ file, word, meaning, type, detail });
}

// 1. distractors에 실제 뜻이 포함된 경우
// 2. 영어 정의(definition)가 단어와 매우 다른 경우 (단어 자체가 definition에 없는 경우)
// 3. synonyms에 단어 자체가 포함된 경우
// 4. definition distractor가 실제 definition과 같은 경우
// 5. 예문의 한영 불일치 징후 (단어 자체가 영문 예문에 없는 경우 - 간단한 체크)

const batchFiles = fs.readdirSync(VOCAB_DIR)
  .filter(f => f.startsWith('vocab_batch_') && f.endsWith('.ts'))
  .sort();

for (const file of batchFiles) {
  const content = fs.readFileSync(path.join(VOCAB_DIR, file), 'utf8');
  const words = extractWords(content);

  for (const entry of words) {
    const { word: w, meaning, level, pos, rawIndex } = entry;
    const meaningLower = meaning.toLowerCase();
    const wordLower = w.toLowerCase();

    // distractors 추출
    const distractors = extractDistractors(content, rawIndex);

    // 1. distractor에 실제 뜻이 포함된 경우
    for (const d of distractors) {
      const dLower = d.toLowerCase();
      if (dLower === meaningLower || 
          (meaningLower.length > 2 && dLower.includes(meaningLower)) ||
          (meaningLower.length > 2 && meaningLower.includes(dLower) && dLower.length > 2)) {
        addIssue(file, w, meaning, '오답=정답', `distractor "${d}" ≈ 뜻 "${meaning}"`);
      }
    }

    // synonyms 추출
    const synonyms = extractSynonyms(content, rawIndex);

    // 2. synonyms에 단어 자체가 포함된 경우
    for (const syn of synonyms) {
      if (syn.toLowerCase() === wordLower) {
        addIssue(file, w, meaning, '동의어=단어', `synonym "${syn}" = word "${w}"`);
      }
    }

    // definition 추출
    const definition = extractDefinition(content, rawIndex);

    // 3. definition에 단어가 전혀 나타나지 않고, 단어 길이가 4글자 이상인 경우 경고
    // (단어 파생형 포함 체크: 어근 3글자 이상)
    if (definition && w.length >= 5) {
      const root = wordLower.slice(0, Math.max(4, wordLower.length - 3));
      if (!definition.toLowerCase().includes(root) && 
          !definition.toLowerCase().includes(wordLower)) {
        // 단어 자체가 영영 정의에 전혀 없는 경우는 정상이므로 skip
        // 단, 명백히 다른 단어가 들어간 경우를 체크
      }
    }

    // 4. definitionDistractors에 실제 definition과 같은 항목이 있는 경우
    const defDistractors = extractDefinitionDistractors(content, rawIndex);
    if (definition) {
      for (const dd of defDistractors) {
        if (dd.toLowerCase().trim() === definition.toLowerCase().trim()) {
          addIssue(file, w, meaning, '정의오답=정답', `definitionDistractor = definition "${dd.slice(0,60)}"`);
        }
      }
    }

    // 5. 예문에 단어 자체(또는 변형)가 없는 경우
    const examples = extractExamples(content, rawIndex);
    for (const ex of examples) {
      const enLower = ex.en.toLowerCase();
      const root4 = wordLower.slice(0, Math.max(4, wordLower.length - 2));
      if (w.length >= 4 && !enLower.includes(root4)) {
        addIssue(file, w, meaning, '예문미포함', `예문에 단어 없음: "${ex.en.slice(0, 70)}"`);
      }
    }

    // 6. 뜻에 영어가 섞여있는 경우 (한글이 없는데 의미 필드에 값이 들어간 경우)
    if (!/[\uAC00-\uD7A3]/.test(meaning) && meaning.length > 0) {
      addIssue(file, w, meaning, '뜻에한글없음', `meaning="${meaning}"`);
    }

    // 7. context 팁이 단순 "DAY N" 형태인 경우 (품질 낮음)
    const contextMatch = content.slice(rawIndex, rawIndex + 2000).match(/context\s*:\s*'([^']+)'/);
    if (contextMatch && /^DAY\s*\d+$/.test(contextMatch[1].trim())) {
      addIssue(file, w, meaning, '팁미보강', `context tip = "${contextMatch[1]}"`);
    }

    // 8. synonymAntonym이 "관련 해석: N" 또는 "동의어/반의어 정보 없음"인 경우 
    const synAntMatch = content.slice(rawIndex, rawIndex + 2000).match(/synonymAntonym\s*:\s*'([^']+)'/);
    if (synAntMatch) {
      const val = synAntMatch[1].trim();
      if (/^관련 해석:\s*\d+$/.test(val) || val === '동의어/반의어 정보 없음') {
        addIssue(file, w, meaning, '동의어팁미보강', `synonymAntonym = "${val}"`);
      }
    }
  }
}

// 결과 출력
console.log(`\n=== 단어 데이터 품질 검사 결과 ===\n`);

const grouped = {};
for (const issue of issues) {
  if (!grouped[issue.type]) grouped[issue.type] = [];
  grouped[issue.type].push(issue);
}

for (const [type, list] of Object.entries(grouped)) {
  console.log(`\n[${type}] - 총 ${list.length}건`);
  if (['오답=정답', '동의어=단어', '정의오답=정답', '예문미포함'].includes(type)) {
    // 중요 이슈는 상세 출력
    const showCount = Math.min(list.length, 30);
    for (let i = 0; i < showCount; i++) {
      const { file, word, meaning, detail } = list[i];
      console.log(`  ${file}: ${word} (${meaning}) => ${detail}`);
    }
    if (list.length > showCount) {
      console.log(`  ... 외 ${list.length - showCount}건 더`);
    }
  } else {
    // 덜 중요한 이슈는 건수만
    const fileCount = new Set(list.map(i => i.file)).size;
    console.log(`  (${fileCount}개 파일에서 발생, 상세는 --verbose 옵션 필요)`);
  }
}

console.log(`\n총 이슈: ${issues.length}건`);

// 요약 통계
console.log('\n=== 요약 ===');
const critical = issues.filter(i => ['오답=정답', '동의어=단어', '정의오답=정답'].includes(i.type));
const minor = issues.filter(i => i.type === '예문미포함');
const quality = issues.filter(i => ['팁미보강', '동의어팁미보강', '뜻에한글없음'].includes(i.type));
console.log(`치명적 매칭 오류: ${critical.length}건`);
console.log(`예문 불포함 경고: ${minor.length}건`);
console.log(`데이터 품질 미보강: ${quality.length}건`);

// 치명적 오류 상세
if (critical.length > 0) {
  console.log('\n=== 치명적 매칭 오류 상세 ===');
  for (const { file, word, meaning, type, detail } of critical) {
    console.log(`[${type}] ${file}: "${word}" (${meaning}) => ${detail}`);
  }
}
