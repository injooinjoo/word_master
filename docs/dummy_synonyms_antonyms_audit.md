# 동의어/반의어 더미 현황 (vocab_batch_01 ~ vocab_batch_70)

refine_vocab_quality_v2.mjs 에서 사용하는 **품사별 고정 풀**로 채워진 항목을 "더미"로 집계했습니다.
실제 단어별 유의어/반의어로 교체하려면 시소러스·사전 API 또는 수동 입력이 필요합니다.

---

## 더미로 사용되는 값 목록

### 동의어 풀 (SYNONYM_POOLS)

| 품사 | 더미 동의어 (3개씩 뽑아 사용) |
|------|-----------------------------|
| noun | `item`, `entity`, `concept`, `object`, `factor`, `element` |
| verb | `perform`, `execute`, `carryout`, `apply`, `handle`, `process` |
| adjective | `general`, `basic`, `primary`, `typical`, `core`, `standard` |
| adverb | `clearly`, `quickly`, `carefully`, `directly`, `gradually`, `mostly` |
| preposition | `within`, `across`, `along`, `beyond`, `through`, `toward` |
| conjunction | `and`, `while`, `whereas`, `therefore`, `however`, `also` |
| interjection | `wow`, `oops`, `ah`, `oh`, `hey`, `alas` |
| pronoun | `someone`, `anyone`, `whoever`, `somebody`, `nobody`, `everyone` |

### 반의어 풀 (ANTONYM_POOLS)

| 품사 | 더미 반의어 (3개씩 뽑아 사용) |
|------|-----------------------------|
| noun | `void`, `nothing`, `absence`, `null`, `lack`, `gap` |
| verb | `ignore`, `delay`, `avoid`, `stop`, `neglect`, `omit` |
| adjective | `minor`, `rare`, `atypical`, `unclear`, `unstable`, `secondary` |
| adverb | `roughly`, `slowly`, `rarely`, `indirectly`, `vaguely`, `barely` |
| preposition | `outside`, `against`, `awayfrom`, `without`, `apartfrom`, `off` |
| conjunction | `neither`, `nor`, `instead`, `otherwise`, `despite`, `unless` |
| interjection | `meh`, `hmm`, `ugh`, `nope`, `eh`, `sigh` |
| pronoun | `nobody`, `nothing`, `none`, `neither`, `nowhere`, `noone` |

---

## 파일별 더미 사용 건수

| 배치 | 파일 | 단어 수 | 더미 동의어 줄 수 | 더미 반의어 줄 수 |
|------|------|--------|-------------------|-------------------|
| 01 | vocab_batch_01.ts | 50 | 0 | 0 |
| 02 | vocab_batch_02.ts | 50 | 0 | 0 |
| 03 | vocab_batch_03.ts | 50 | 0 | 0 |
| 04 | vocab_batch_04.ts | 50 | 0 | 0 |
| 05 | vocab_batch_05.ts | 50 | 0 | 0 |
| 06 | vocab_batch_06.ts | 50 | 0 | 0 |
| 07 | vocab_batch_07.ts | 50 | 0 | 0 |
| 08 | vocab_batch_08.ts | 50 | 0 | 0 |
| 09 | vocab_batch_09.ts | 50 | 0 | 0 |
| 10 | vocab_batch_10.ts | 50 | 0 | 0 |
| 11 | vocab_batch_11.ts | 50 | 0 | 0 |
| 12 | vocab_batch_12.ts | 50 | 0 | 0 |
| 13 | vocab_batch_13.ts | 50 | 0 | 0 |
| 14 | vocab_batch_14.ts | 50 | 0 | 0 |
| 15 | vocab_batch_15.ts | 50 | 0 | 0 |
| 16 | vocab_batch_16.ts | 50 | 0 | 0 |
| 17 | vocab_batch_17.ts | 50 | 0 | 0 |
| 18 | vocab_batch_18.ts | 50 | 0 | 0 |
| 19 | vocab_batch_19.ts | 50 | 0 | 0 |
| 20 | vocab_batch_20.ts | 50 | 0 | 0 |
| 21 | vocab_batch_21.ts | 50 | 50 | 50 |
| 22 | vocab_batch_22.ts | 50 | 49 | 49 |
| 23 | vocab_batch_23.ts | 50 | 50 | 50 |
| 24 | vocab_batch_24.ts | 50 | 50 | 49 |
| 25 | vocab_batch_25.ts | 50 | 49 | 49 |
| 26 | vocab_batch_26.ts | 50 | 50 | 50 |
| 27 | vocab_batch_27.ts | 50 | 50 | 50 |
| 28 | vocab_batch_28.ts | 50 | 50 | 50 |
| 29 | vocab_batch_29.ts | 50 | 50 | 50 |
| 30 | vocab_batch_30.ts | 50 | 50 | 50 |
| 31 | vocab_batch_31.ts | 50 | 49 | 50 |
| 32 | vocab_batch_32.ts | 50 | 50 | 50 |
| 33 | vocab_batch_33.ts | 50 | 50 | 50 |
| 34 | vocab_batch_34.ts | 50 | 0 | 1 |
| 35 | vocab_batch_35.ts | 50 | 38 | 45 |
| 36 | vocab_batch_36.ts | 50 | 49 | 49 |
| 37 | vocab_batch_37.ts | 50 | 50 | 50 |
| 38 | vocab_batch_38.ts | 50 | 50 | 50 |
| 39 | vocab_batch_39.ts | 50 | 50 | 50 |
| 40 | vocab_batch_40.ts | 50 | 50 | 50 |
| 41 | vocab_batch_41.ts | 50 | 50 | 50 |
| 42 | vocab_batch_42.ts | 50 | 50 | 50 |
| 43 | vocab_batch_43.ts | 50 | 50 | 50 |
| 44 | vocab_batch_44.ts | 50 | 50 | 50 |
| 45 | vocab_batch_45.ts | 50 | 50 | 50 |
| 46 | vocab_batch_46.ts | 50 | 50 | 50 |
| 47 | vocab_batch_47.ts | 50 | 50 | 50 |
| 48 | vocab_batch_48.ts | 50 | 49 | 49 |
| 49 | vocab_batch_49.ts | 50 | 50 | 50 |
| 50 | vocab_batch_50.ts | 50 | 50 | 50 |
| 51 | vocab_batch_51.ts | 50 | 50 | 50 |
| 52 | vocab_batch_52.ts | 50 | 50 | 50 |
| 53 | vocab_batch_53.ts | 50 | 48 | 48 |
| 54 | vocab_batch_54.ts | 50 | 50 | 50 |
| 55 | vocab_batch_55.ts | 50 | 50 | 50 |
| 56 | vocab_batch_56.ts | 50 | 50 | 50 |
| 57 | vocab_batch_57.ts | 50 | 50 | 50 |
| 58 | vocab_batch_58.ts | 50 | 50 | 50 |
| 59 | vocab_batch_59.ts | 50 | 50 | 50 |
| 60 | vocab_batch_60.ts | 50 | 50 | 50 |
| 61 | vocab_batch_61.ts | 50 | 50 | 50 |
| 62 | vocab_batch_62.ts | 50 | 50 | 50 |
| 63 | vocab_batch_63.ts | 50 | 50 | 50 |
| 64 | vocab_batch_64.ts | 50 | 50 | 50 |
| 65 | vocab_batch_65.ts | 50 | 50 | 50 |
| 66 | vocab_batch_66.ts | 50 | 50 | 50 |
| 67 | vocab_batch_67.ts | 50 | 50 | 50 |
| 68 | vocab_batch_68.ts | 50 | 50 | 50 |
| 69 | vocab_batch_69.ts | 50 | 50 | 50 |
| 70 | vocab_batch_70.ts | 36 | 36 | 36 |

| **합계** | - | **3486** | **2417** | **2425** |

---

## 요약

- **총 단어 수**: 3486
- **더미 동의어가 들어 있는 줄 수**: 2417 (동의어 배열 첫 번째 항목이 위 풀에 해당하는 경우)
- **더미 반의어가 들어 있는 줄 수**: 2425 (반의어 배열 첫 번째 항목이 위 풀에 해당하는 경우)

실제로는 한 줄에 `synonyms: ['item', 'entity', 'concept']` 처럼 3개가 함께 들어가므로,  
위 "줄 수"는 **해당 패턴이 등장하는 횟수**이며, 대략 **그만큼의 단어가 더미 동의어/반의어를 쓰고 있다**고 보면 됩니다.
