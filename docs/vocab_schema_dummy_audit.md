# Vocab 스키마 전체 더미/템플릿 점검 (배치 01–70)

`VocabItem` 및 `LearningTips` 스키마에서 **품사별 고정 풀** 또는 **동일 문장 템플릿**으로 채워진 항목을 정리했습니다.  
출처: `scripts/refine_vocab_quality_v2.mjs` (DISTRACTOR_POOLS, SYNONYM_POOLS, ANTONYM_POOLS, makeExamples, tips 템플릿).

---

## 1. 스키마 필드 요약

| 필드 | 타입 | 더미/템플릿 여부 | 비고 |
|------|------|------------------|------|
| id | string (uuid) | ❌ | 자동 생성 |
| word | string | ❌ | 실제 영단어 |
| meaning | string | ❌ | 실제 한글 뜻 |
| definition | string \| null | ⚠️ | 22·33–70은 플레이스홀더 제거 후 통일 문구 또는 실제 정의 |
| synonyms | string[] | ✅ | 품사별 영문 풀에서 3개 선택 (아래 2절) |
| antonyms | string[] | ✅ | 품사별 영문 풀에서 3개 선택 (아래 2절) |
| partOfSpeech | PartOfSpeech | ❌ | 일부 품사 오류 수정됨 |
| level | number | ❌ | 1–10 |
| **distractors** | string[] | ✅ | **품사별 한글 오답 풀**에서 10개 선택 (아래 3절) |
| wordDistractors | string[]? | - | 배치에서 미사용 가능 |
| definitionDistractors | string[]? | - | 배치에서 미사용 가능 |
| exampleSentences | ExampleSentence[]? | ✅ | **고정 예문 템플릿** 2개 (아래 4절) |
| pronunciationUrl, audioUrl, imageUrl | optional | - | 미사용 또는 null |
| **learningTips** | LearningTips | ✅ | **5개 팁 모두 템플릿 문장** (아래 5절) |

---

## 2. 동의어(synonyms) / 반의어(antonyms) 더미 풀

자세한 파일별 건수는 **`docs/dummy_synonyms_antonyms_audit.md`** 참고.

- **동의어 풀**: noun(item, entity, concept, object, factor, element), verb(perform, execute, carryout, apply, handle, process), adjective(general, basic, primary, typical, core, standard), adverb(clearly, quickly, …), preposition, conjunction, interjection, pronoun 각 6개씩.
- **반의어 풀**: noun(void, nothing, absence, null, lack, gap), verb(ignore, delay, avoid, stop, neglect, omit), adjective(minor, rare, atypical, …) 등 동일 구조.

---

## 3. 오답(distractors) 더미 풀 — 한글

`word( ..., distractors, ... )` 에 들어가는 **한국어 오답 10개**는 품사별로 아래 풀에서 rotateTake로 10개 뽑습니다.  
즉, **단어와 무관하게 품사만 맞으면 같은 한글 단어들이 반복**됩니다.

| 품사 | 더미 한글 오답 풀 (일부) |
|------|--------------------------|
| noun | 사물, 행동, 사건, 상태, 개념, 원인, 결과, 조건, 관계, 계획, 절차, 정보, 의미, 변화, 문제, 기회, 기준, 목표 |
| verb | 행동하다, 수행하다, 처리하다, 변경하다, 유지하다, 확인하다, 시작하다, 중단하다, 선택하다, 결정하다, 요청하다, 설명하다, 관리하다, 보완하다, 분석하다, 정리하다, 적용하다, 반복하다 |
| adjective | 중요한, 핵심적인, 일반적인, 예외적인, 안정적인, 불안정한, 효율적인, 비효율적인, 직접적인, 간접적인, 명확한, 모호한, 적절한, 부적절한, 긍정적인, 부정적인, 대표적인, 기본적인 |
| adverb | 빠르게, 천천히, 자주, 가끔, 항상, 이미, 곧, 직접, 간접적으로, 정확히, 대략, 차근차근, 집중해서, 즉시, 뒤늦게, 점차, 반복적으로, 우선 |
| preposition | ~안에, ~밖에, ~위에, ~아래에, ~옆에, ~사이에, ~앞에, ~뒤에, ~근처에, ~맞은편에, ~동안, ~이전에, ~이후에, ~대신에, ~통해, ~기준으로, ~관하여, ~대하여 |
| conjunction | 그리고, 하지만, 또는, 그래서, 그러나, 또한, 반면에, 따라서, 즉, 비록, 그러므로, 게다가, 한편, 동시에, 혹은, 왜냐하면, 그럼에도, 결국 |
| interjection | 아!, 와!, 앗!, 어머!, 오!, 헉!, 이런!, 좋아!, 아하!, 오호!, 휴!, 정말!, 맙소사!, 야호!, 흠!, 앗차!, 오우!, 그래! |
| pronoun | 나, 너, 그, 그녀, 우리, 그들, 이것, 저것, 누구, 무엇, 어느것, 각자, 모두, 아무도, 누군가, 무언가, 자신, 상대 |

**적용 배치**: 21–70 (배치 01–20은 구조가 다르거나 필드 없음).

---

## 4. 예문(exampleSentences) 템플릿

각 단어당 **2개**의 예문이 품사별 **고정 패턴**에서 골라집니다. 문장만 바뀌고 구조는 동일합니다.

**예문 템플릿 교체 진행:**  
- **vocab_batch_65.ts**, **vocab_batch_70.ts**: 템플릿 예문 전부 실제 사용 문장으로 교체 완료.  
- **vocab_batch_66.ts**: 잘못된 뜻 10건 수정(전통, 흔적, 삼각형, 엄청난, 추세, 바지, 수송하다, 접촉, 유독한, 여행) + 앞부분 예문 자연스러운 문장으로 교체.  
- 나머지 배치(21–64, 67–69)는 `node scripts/audit_template_examples.mjs` 로 템플릿 라인 수 확인 가능.

| 품사 | 예문 패턴 (영 → 한) |
|------|----------------------|
| noun | `The word "X" is used with the meaning "Y".` / `단어 "X"는 "Y"의 뜻으로 사용된다.` |
| noun | `I wrote "X" in my vocabulary notebook today.` / `나는 오늘 단어장에 단어 "X"를 적어 복습했다.` |
| noun | `In this sentence, "X" refers to "Y".` / `이 문장에서 단어 "X"는 "Y" 의미를 가리킨다.` |
| verb | `You can "X" when this situation appears.` / `이 상황이 생기면 "X"라고 표현할 수 있다.` |
| verb | `We practiced how to "X" in class.` / `우리는 수업에서 단어 "X"의 활용을 연습했다.` |
| verb | `Try to "X" in a short dialogue.` / `짧은 대화에서 "X"를 직접 써 보자.` |
| adjective | `This object can be described as "X".` / `이 대상을 "X"라고 묘사할 수 있다.` |
| adjective | `I used "X" to explain the noun clearly.` / `나는 명사를 더 분명히 설명하려고 형용사 "X"를 사용했다.` |
| adjective | `The adjective "X" conveys "Y".` / `형용사 "X"는 "Y"의 의미를 전달한다.` |
| adverb | `The adverb "X" modifies the verb in this sentence.` / `이 문장에서 부사 "X"가 동사를 수식한다.` |
| adverb | `Use "X" to express "Y" more precisely.` / `"Y" 의미를 더 정확히 나타내려면 "X"를 쓰면 된다.` |
| adverb | `I added "X" to make the sentence natural.` / `문장을 자연스럽게 만들기 위해 부사 "X"를 넣었다.` |
| preposition | `Use "X" before a noun phrase in context.` / `문맥에서 전치사 "X"는 명사구 앞에 둔다.` 등 |
| conjunction | `"X" connects two ideas in one sentence.` / `"X"는 한 문장에서 두 생각을 연결한다.` 등 |

**적용 배치**: 21–70 (예문이 있는 배치).

---

## 5. 학습 팁(learningTips) 템플릿

5개 팁 모두 **문장 구조가 동일**하고, 단어(X)와 뜻(Y)만 치환됩니다.

| 팁 필드 | 더미/템플릿 문장 패턴 |
|---------|------------------------|
| **etymology** | `X의 접두/어근/접미를 확인하며 "Y" 의미와 연결해 암기하자.` |
| **visualAssociation** | `"Y" 상황을 머릿속 한 장면으로 만들고 단어 X를 함께 떠올리자.` |
| **soundAlike** | `X의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.` |
| **context** | `In context, "X" conveys the meaning "Y".` |
| **synonymAntonym** | `(noun\|verb\|adjective\|adverb\|…) 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.` |

**적용 배치**: 21–70 (배치당 약 50건씩, 배치 70은 33건).  
배치 01–20은 위와 다른 구조이거나 해당 필드가 없을 수 있음.

---

## 6. 요약 표

| 항목 | 더미/템플릿 | 적용 구간 | 상세 문서 |
|------|-------------|-----------|-----------|
| synonyms | 품사별 영문 풀 3개 | 21–70 | dummy_synonyms_antonyms_audit.md |
| antonyms | 품사별 영문 풀 3개 | 21–70 | dummy_synonyms_antonyms_audit.md |
| distractors | 품사별 한글 풀 10개 | 21–70 | 본 문서 §3 |
| exampleSentences | 품사별 예문 패턴 2개 | 21–70 | 본 문서 §4 |
| learningTips (5종) | 고정 문장 패턴 | 21–70 | 본 문서 §5 |
| definition | 이전 플레이스홀더 → 통일/실제 정의로 정리됨 | 22, 33–70 | vocab_quality_audit.md |

실제 콘텐츠로 교체하려면 품사/단어별 맞춤 데이터(시소러스, 예문 DB, 학습 팁 문장 등) 또는 수동 편집이 필요합니다.
