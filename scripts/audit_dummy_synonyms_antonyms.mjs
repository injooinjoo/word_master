/**
 * 1–70 vocab 배치에서 동의어/반의어 더미(템플릿 풀) 사용 현황 집계
 * 출력: docs/dummy_synonyms_antonyms_audit.md
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const VOCAB_DIR = join(ROOT, 'src', 'data', 'vocab');
const OUT = join(ROOT, 'docs', 'dummy_synonyms_antonyms_audit.md');

// refine_vocab_quality_v2.mjs 에서 쓰는 풀과 동일
const DUMMY_SYNONYMS = {
  noun: ['item', 'entity', 'concept', 'object', 'factor', 'element'],
  verb: ['perform', 'execute', 'carryout', 'apply', 'handle', 'process'],
  adjective: ['general', 'basic', 'primary', 'typical', 'core', 'standard'],
  adverb: ['clearly', 'quickly', 'carefully', 'directly', 'gradually', 'mostly'],
  preposition: ['within', 'across', 'along', 'beyond', 'through', 'toward'],
  conjunction: ['and', 'while', 'whereas', 'therefore', 'however', 'also'],
  interjection: ['wow', 'oops', 'ah', 'oh', 'hey', 'alas'],
  pronoun: ['someone', 'anyone', 'whoever', 'somebody', 'nobody', 'everyone'],
};

const DUMMY_ANTONYMS = {
  noun: ['void', 'nothing', 'absence', 'null', 'lack', 'gap'],
  verb: ['ignore', 'delay', 'avoid', 'stop', 'neglect', 'omit'],
  adjective: ['minor', 'rare', 'atypical', 'unclear', 'unstable', 'secondary'],
  adverb: ['roughly', 'slowly', 'rarely', 'indirectly', 'vaguely', 'barely'],
  preposition: ['outside', 'against', 'awayfrom', 'without', 'apartfrom', 'off'],
  conjunction: ['neither', 'nor', 'instead', 'otherwise', 'despite', 'unless'],
  interjection: ['meh', 'hmm', 'ugh', 'nope', 'eh', 'sigh'],
  pronoun: ['nobody', 'nothing', 'none', 'neither', 'nowhere', 'noone'],
};

function buildRegex(words) {
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  return new RegExp(`synonyms: \\[['"](?:${escaped})['"]`, 'g');
}

function buildAntonymRegex(words) {
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  return new RegExp(`antonyms: \\[['"](?:${escaped})['"]`, 'g');
}

const allSynWords = Object.values(DUMMY_SYNONYMS).flat();
const allAntWords = Object.values(DUMMY_ANTONYMS).flat();
const synRegex = buildRegex(allSynWords);
const antRegex = buildAntonymRegex(allAntWords);

const rows = [];

for (let i = 1; i <= 70; i++) {
  const num = String(i).padStart(2, '0');
  const file = join(VOCAB_DIR, `vocab_batch_${num}.ts`);
  const content = readFileSync(file, 'utf8');
  const synMatches = content.match(synRegex) || [];
  const antMatches = content.match(antRegex) || [];
  const totalWords = (content.match(/word\s*\(/g) || []).length;
  rows.push({
    batch: num,
    totalEntries: totalWords,
    dummySynonymLines: synMatches.length,
    dummyAntonymLines: antMatches.length,
  });
}

let md = `# 동의어/반의어 더미 현황 (vocab_batch_01 ~ vocab_batch_70)

refine_vocab_quality_v2.mjs 에서 사용하는 **품사별 고정 풀**로 채워진 항목을 "더미"로 집계했습니다.
실제 단어별 유의어/반의어로 교체하려면 시소러스·사전 API 또는 수동 입력이 필요합니다.

---

## 더미로 사용되는 값 목록

### 동의어 풀 (SYNONYM_POOLS)

| 품사 | 더미 동의어 (3개씩 뽑아 사용) |
|------|-----------------------------|
| noun | \`item\`, \`entity\`, \`concept\`, \`object\`, \`factor\`, \`element\` |
| verb | \`perform\`, \`execute\`, \`carryout\`, \`apply\`, \`handle\`, \`process\` |
| adjective | \`general\`, \`basic\`, \`primary\`, \`typical\`, \`core\`, \`standard\` |
| adverb | \`clearly\`, \`quickly\`, \`carefully\`, \`directly\`, \`gradually\`, \`mostly\` |
| preposition | \`within\`, \`across\`, \`along\`, \`beyond\`, \`through\`, \`toward\` |
| conjunction | \`and\`, \`while\`, \`whereas\`, \`therefore\`, \`however\`, \`also\` |
| interjection | \`wow\`, \`oops\`, \`ah\`, \`oh\`, \`hey\`, \`alas\` |
| pronoun | \`someone\`, \`anyone\`, \`whoever\`, \`somebody\`, \`nobody\`, \`everyone\` |

### 반의어 풀 (ANTONYM_POOLS)

| 품사 | 더미 반의어 (3개씩 뽑아 사용) |
|------|-----------------------------|
| noun | \`void\`, \`nothing\`, \`absence\`, \`null\`, \`lack\`, \`gap\` |
| verb | \`ignore\`, \`delay\`, \`avoid\`, \`stop\`, \`neglect\`, \`omit\` |
| adjective | \`minor\`, \`rare\`, \`atypical\`, \`unclear\`, \`unstable\`, \`secondary\` |
| adverb | \`roughly\`, \`slowly\`, \`rarely\`, \`indirectly\`, \`vaguely\`, \`barely\` |
| preposition | \`outside\`, \`against\`, \`awayfrom\`, \`without\`, \`apartfrom\`, \`off\` |
| conjunction | \`neither\`, \`nor\`, \`instead\`, \`otherwise\`, \`despite\`, \`unless\` |
| interjection | \`meh\`, \`hmm\`, \`ugh\`, \`nope\`, \`eh\`, \`sigh\` |
| pronoun | \`nobody\`, \`nothing\`, \`none\`, \`neither\`, \`nowhere\`, \`noone\` |

---

## 파일별 더미 사용 건수

| 배치 | 파일 | 단어 수 | 더미 동의어 줄 수 | 더미 반의어 줄 수 |
|------|------|--------|-------------------|-------------------|
`;

rows.forEach((r) => {
  md += `| ${r.batch} | vocab_batch_${r.batch}.ts | ${r.totalEntries} | ${r.dummySynonymLines} | ${r.dummyAntonymLines} |\n`;
});

const totalSyn = rows.reduce((s, r) => s + r.dummySynonymLines, 0);
const totalAnt = rows.reduce((s, r) => s + r.dummyAntonymLines, 0);
const totalEntries = rows.reduce((s, r) => s + r.totalEntries, 0);

md += `\n| **합계** | - | **${totalEntries}** | **${totalSyn}** | **${totalAnt}** |\n`;
md += `
---

## 요약

- **총 단어 수**: ${totalEntries}
- **더미 동의어가 들어 있는 줄 수**: ${totalSyn} (동의어 배열 첫 번째 항목이 위 풀에 해당하는 경우)
- **더미 반의어가 들어 있는 줄 수**: ${totalAnt} (반의어 배열 첫 번째 항목이 위 풀에 해당하는 경우)

실제로는 한 줄에 \`synonyms: ['item', 'entity', 'concept']\` 처럼 3개가 함께 들어가므로,  
위 "줄 수"는 **해당 패턴이 등장하는 횟수**이며, 대략 **그만큼의 단어가 더미 동의어/반의어를 쓰고 있다**고 보면 됩니다.
`;

writeFileSync(OUT, md, 'utf8');
console.log('Written:', OUT);
console.log('Total entries:', totalEntries);
console.log('Dummy synonym lines:', totalSyn);
console.log('Dummy antonym lines:', totalAnt);
