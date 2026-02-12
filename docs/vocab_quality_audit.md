# Vocab 품질 점검 요약

## 1. 품사 오류 (수정 완료)

한글 뜻이 **동사**(하다/되다/쫓다/얻다 등)인데 `noun`으로 되어 있던 항목을 **verb**로 수정함.

| 배치 | 단어 | 한글 뜻 | 수정 내용 |
|------|------|---------|-----------|
| 34 | follow | 쫓다 | noun → verb, definition·동의어·tips 일치 |
| 35 | fry | 기름으로 → 기름에 튀기다 | noun → verb |
| 35 | gain | 얻다 | noun → verb |
| 36 | get | 얻다 | noun → verb |
| 48 | obtain | 얻다 | noun → verb |
| 53 | pursue | 쫓다 | noun → verb |
| 53 | push | 밀다 | noun → verb |

**추가 검토 권장** (동사 의미인데 noun으로 남아 있을 수 있음):
- batch 34: flip(튀기다), float(뜨다)
- batch 40: insert(끼워넣다)
- batch 41: involve(말아넣다)
- batch 53: put(놓다)
- batch 61: splash(튀기다)

---

## 2. 동의어 / 반의어 (템플릿 상태)

`scripts/refine_vocab_quality_v2.mjs`에서 **품사별 고정 풀**로 채워진 상태라, 단어마다 실제 유의어/반의어가 아님.

- **명사**: synonyms `item`, `entity`, `concept`, `object`, `factor`, `element` / antonyms `void`, `nothing`, `absence`, `null`, `lack`, `gap`
- **동사**: synonyms `perform`, `execute`, `carryout`, `apply`, `handle`, `process` / antonyms `ignore`, `delay`, `avoid`, `stop`, `neglect`, `omit`
- **형용사**: synonyms `general`, `basic`, `primary`, `typical`, `core`, `standard` / antonyms `minor`, `rare`, `atypical`, `unclear`, `unstable`, `secondary`
- **부사**: synonyms `clearly`, `quickly`, `carefully`… / antonyms `roughly`, `slowly`, `rarely`…

→ 단어별 실제 동의어/반의어로 바꾸려면 시소러스·사전 API 또는 수동 입력이 필요함.

---

## 3. tips 안의 synonymAntonym

모든 항목이 아래처럼 **품사만 바뀐 동일 문장**으로 채워져 있음.

- `noun 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.`
- `verb 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.`
- `adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.`
- (adverb, preposition 등 동일 패턴)

→ 단어별로 “이 단어의 유의어/반의어 예: …” 형태로 구체화하면 학습에 더 도움이 됨.

---

## 4. 정리

| 항목 | 상태 | 비고 |
|------|------|------|
| definition | 33·34·35 일부는 실제 정의, 22·35–70은 플레이스홀더 제거 후 통일 문구 | |
| 품사 | 쫓다/얻다/밀다 등 명확한 동사 7건 noun→verb 수정 완료 | put, insert, involve 등 추가 검토 가능 |
| synonyms/antonyms | 전 배치 품사별 템플릿 풀 사용 | 단어별 보강 시 시소러스/수동 작업 필요 |
| tips.synonymAntonym | 전 배치 동일 문장 템플릿 | 단어별 문장으로 개선 가능 |
