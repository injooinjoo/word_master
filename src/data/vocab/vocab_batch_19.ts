import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch19: VocabItem[] = [
  word('excoriate', '맹비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '찬미하다', '승인하다', '격려하다', '지지하다', '숭배하다', '추대하다', '환호하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 corium(가죽)이 결합된 단어로, 원래 \'피부를 벗겨내다\'라는 뜻에서 \'살갗이 벗겨질 정도로 아프게 비판하다\'라는 의미로 확장되었습니다.',
      visual: '잘못을 저지른 사람을 향해 날카로운 채찍질을 하듯 매서운 말로 공격하는 정치 평론가의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'엑스(X) 꼬리 에이트\'와 비슷합니다. 잘못된 행동에 \'X\' 표시를 하며 꼬리에 꼬리를 물고 강하게 비난하는 상황을 떠올려 보세요.',
      context: '주로 언론 보도나 공식적인 성명에서 정부의 정책, 영화 감독의 신작, 또는 운동선수의 부진한 성적을 혹독하게 비평할 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '강하게 비난하는 denounce, castigate와 유의어 관계이며, 반대로 높게 평가하는 praise, laud와는 대조를 이룹니다.',
    }),
    {
      definition: 'to express very strong disapproval of someone or something in a public or severe way',
      synonyms: ['denounce', 'castigate', 'censure'],
      antonyms: ['praise', 'commend', 'laud'],
      exampleSentences: [
        { en: 'The critic excoriated the director for the poor screenplay.', ko: '평론가는 형편없는 시나리오를 이유로 감독을 맹비난했다.' },
        { en: 'She excoriated her opponent in the debate.', ko: '그녀는 토론에서 상대방을 매섭게 몰아세우며 비난했다.' },
      ],
      wordDistractors: ['exonerate', 'execrate', 'excorticate'],
      definitionDistractors: [
        'to free someone from blame or responsibility',
        'to remove the outer layer of skin through a medical procedure',
        'to escort someone formally out of a building or venue',
      ],
    }
  ),
  word('execrable', '지독한', 9, 'adjective',
    ['훌륭한', '탁월한', '우수한', '매력적인', '아름다운', '뛰어난', '고귀한', '완벽한', '상쾌한', '경이로운'],
    tips({
      etymology: '라틴어 \'exsecrari(저주하다)\'에서 유래하여, 성스러운 곳에서 밖으로(ex) 내던져질 만큼 저주받을 정도로 나쁘다는 뜻을 담고 있습니다.',
      visual: '상한 음식을 한 입 먹고 얼굴을 잔뜩 찌푸리며 뱉어내고 싶어 하는 혐오스러운 표정을 떠올려 보세요.',
      soundAlike: '\'엑! 시끄러워!\'라고 소리칠 만큼 소음이 지독하거나, \'에구구\' 소리가 절로 나올 만큼 형편없는 상태를 연상하세요.',
      context: '단순히 나쁜 수준을 넘어, 도저히 참아줄 수 없을 정도로 끔찍한 음식 맛, 날씨, 혹은 예술적 재능을 비판할 때 사용합니다.',
      synonymAntonym: 'abominable과 detestable은 혐오감을 줄 정도로 나쁘다는 뜻이며, 반대로 excellent와 delightful은 기쁨을 주는 훌륭한 상태를 뜻합니다.',
    }),
    {
      definition: 'of very poor quality or extremely unpleasant in a way that deserves strong condemnation',
      synonyms: ['abominable', 'detestable', 'appalling'],
      antonyms: ['excellent', 'delightful', 'pleasant'],
      exampleSentences: [
        { en: 'The hotel room was in execrable condition, with broken furniture and stained carpets.', ko: '그 호텔 객실은 가구가 부서지고 카펫에 얼룩이 있는 등 상태가 지독했다.' },
        { en: 'The critics panned the play, describing the lead actor\'s performance as execrable.', ko: '비평가들은 주연 배우의 연기가 지독할 정도로 형편없다고 묘사하며 연극을 혹평했다.' },
      ],
      wordDistractors: ['executable', 'exercisable', 'excerable'],
      definitionDistractors: [
        'capable of being carried out or put into effect',
        'worthy of being exercised or practiced regularly',
        'related to the process of formal excommunication',
      ],
    }
  ),
  word('exegesis', '주석', 9, 'noun',
    ['개요', '요약', '축약', '줄거리', '은폐', '왜곡', '침묵', '무시', '혼란', '망각'],
    tips({
      etymology: '그리스어 ex(밖으로) + egeisthai(이끌다)에서 유래하여 텍스트 안에 숨겨진 의미를 밖으로 끌어내 설명한다는 뜻입니다.',
      visual: '오래된 고전 서적의 본문 옆 여백에 학자가 빽빽하게 적어 놓은 상세한 분석 노트를 상상해 보세요.',
      soundAlike: '엑세지시스(Exegesis), 어려운 텍스트의 \'핵심\'을 \'지시\'하여 상세히 풀어주는 과정이라고 연상하세요.',
      context: '주로 성경, 법전, 철학적 텍스트와 같이 문구 하나하나의 엄밀한 분석이 필요한 학술적 상황에서 쓰입니다.',
      synonymAntonym: '단순히 내용을 줄여 말하는 summary나 outline과는 반대로, 내용을 아주 깊게 파고들어 상세히 풀이하는 개념입니다.',
    }),
    {
      definition: 'A detailed and critical analysis or explanation of a specific piece of writing, especially a religious or legal text.',
      synonyms: ['interpretation', 'commentary', 'explication'],
      antonyms: ['summary', 'outline', 'abstract'],
      exampleSentences: [
        { en: 'The professor provided a brilliant exegesis of the complex philosophical treatise.', ko: '그 교수는 복잡한 철학 논문에 대해 명쾌한 주석을 제공했다.' },
        { en: 'Biblical exegesis requires a thorough understanding of the historical context.', ko: '성서 주석은 역사적 배경에 대한 철저한 이해를 필요로 한다.' },
      ],
      wordDistractors: ['exogenous', 'exorcism', 'excision'],
      definitionDistractors: [
        'a brief summary or abstract of a longer written work',
        'the act of removing passages from a text deemed inappropriate',
        'a public reading of a sacred text without interpretation',
      ],
    }
  ),
  word('existential', '실존적', 9, 'adjective',
    ['추상적', '이론적', '가상적', '개념적', '사소한', '일상적인', '피상적인', '허구의', '부차적인', '무의미한'],
    tips({
      etymology: 'exist(존재하다)에 형용사 접미사 -ential이 붙어 인간의 존재 자체에 관한 것을 뜻합니다.',
      visual: '밤하늘을 보며 \'나는 왜 태어났는가\'를 고민하는 철학자의 뒷모습을 떠올려 보세요.',
      soundAlike: '엑지스텐셜, \'존재(existence)\'라는 단어와 발음이 매우 유사하여 연결하기 쉽습니다.',
      context: '인생의 목적에 대한 고민이나 인류의 생존을 위협하는 중대한 위기를 말할 때 씁니다.',
      synonymAntonym: '철학적인 ontological과 대조적으로 mundane은 아주 일상적이고 세속적인 것을 뜻합니다.',
    }),
    {
      definition: 'Relating to the nature of being and the fundamental questions of human life.',
      synonyms: ['ontological', 'philosophical', 'metaphysical'],
      antonyms: ['trivial', 'mundane', 'superficial'],
      exampleSentences: [
        { en: 'He faced an existential crisis after losing his job.', ko: '그는 직장을 잃은 후 실존적 위기를 겪었다.' },
        { en: 'The novel explores existential questions about purpose.', ko: '그 소설은 목적에 대한 실존적 질문을 탐구한다.' },
      ],
      wordDistractors: ['experiential', 'exponential', 'essential'],
      definitionDistractors: [
        'based on personal experience rather than theory',
        'growing rapidly at an increasing rate over time',
        'relating to the external appearance of something rather than its nature',
      ],
    }
  ),
  word('exorbitant', '과도한', 9, 'adjective',
    ['적정한', '합리적인', '저렴한', '무난한', '적절한', '평범한', '싼', '공정한', '축소된', '부족한'],
    tips({
      etymology: '라틴어 ex(밖으로)와 orbita(궤도)가 결합된 단어로, 정상적인 궤도를 완전히 벗어날 정도로 수치가 크다는 의미에서 유래했습니다.',
      visual: '백화점에서 평범한 티셔츠 한 장에 수백만 원이 적힌 가격표를 보고 눈이 휘둥그레지는 장면을 상상해 보세요.',
      soundAlike: '\'익조어비턴트\'에서 \'조(兆)\' 단위의 돈이 들어가는 엄청나게 비싼 상황을 소리와 연결해 기억하면 쉽습니다.',
      context: '단순히 비싼 수준을 넘어, 상식 밖의 높은 임대료, 이자율, 수수료 등을 비판하거나 불평할 때 주로 사용합니다.',
      synonymAntonym: 'excessive는 양이나 정도가 지나침을 뜻하며, 반대말인 moderate는 중용을 지키는 적당한 수준을 뜻합니다.',
    }),
    {
      definition: 'going far beyond what is reasonable, just, or proper, especially in terms of cost',
      synonyms: ['excessive', 'extravagant', 'outrageous'],
      antonyms: ['reasonable', 'moderate', 'fair'],
      exampleSentences: [
        { en: 'The restaurant charged exorbitant prices for wine, so we decided not to order any.', ko: '그 식당은 와인에 터무니없는 가격을 매겨서 우리는 주문하지 않기로 했다.' },
        { en: 'Many small businesses are struggling to survive due to the exorbitant cost of rent.', ko: '많은 소상공인들이 과도한 임대료 때문에 생존에 어려움을 겪고 있다.' },
      ],
      wordDistractors: ['exuberant', 'exorbitance', 'extortionate'],
      definitionDistractors: [
        'moving in a circular orbit around a celestial body',
        'showing lively enthusiasm and high energy',
        'carefully planned and executed within a strict budget',
      ],
    }
  ),
  word('expatriate', '국외 거주자', 9, 'noun',
    ['귀국자', '본국인', '거주민', '정착민', '토착민', '현지인', '국민', '시민', '동포', '내국인'],
    tips({
      etymology: '라틴어 ex(밖으로)와 patria(조국)가 결합된 단어로, 자신의 조국을 떠나 타국에 머무는 사람을 뜻합니다.',
      visual: '낯선 외국 거리에서 커다란 이민 가방을 들고 지도를 보며 새로운 삶을 시작하려는 사람을 상상해 보세요.',
      soundAlike: '엑스페이트리이트, \'페이트리(patri)\'가 \'조국(fatherland)\'을 의미하므로 조국 밖으로(ex) 나간 사람으로 기억하면 쉽습니다.',
      context: '주로 해외 지사에 파견된 주재원이나, 정치적/개인적 사유로 고국을 떠나 외국에 거주하는 사람들을 지칭할 때 쓰입니다.',
      synonymAntonym: 'exile은 강제성이 강한 망명자를 뜻하며, native는 그 땅에서 나고 자란 토박이를 의미합니다.',
    }),
    {
      definition: 'A person who resides in a foreign land, often having left their home country for work or political reasons.',
      synonyms: ['emigre', 'exile', 'emigrant'],
      antonyms: ['native', 'national', 'local'],
      exampleSentences: [
        { en: 'The local community center offers language classes for expatriates living in the city.', ko: '지역 커뮤니티 센터는 도시에 거주하는 국외 거주자들을 위한 언어 수업을 제공합니다.' },
        { en: 'Many American expatriates in Paris gathered to celebrate their national holiday.', ko: '파리에 사는 많은 미국인 국외 거주자들이 국경일을 축하하기 위해 모였습니다.' },
      ],
      wordDistractors: ['expatiate', 'repatriate', 'expurgate'],
      definitionDistractors: [
        'to speak or write at great length about a topic',
        'a person who has been formally deported from a country',
        'a diplomat assigned to represent their country abroad',
      ],
    }
  ),
  word('expiate', '속죄하다', 9, 'verb',
    ['범죄하다', '저지르다', '모함하다', '더럽히다', '오염시키다', '비난하다', '악화시키다', '무시하다', '파괴하다', '속이다'],
    tips({
      etymology: '라틴어 ex(완전히)와 piare(달래다, 깨끗이 하다)가 결합되어, 신의 노여움을 달래고 죄를 완전히 씻어낸다는 의미에서 유래했습니다.',
      visual: '어두운 방에서 촛불을 켜고 자신의 잘못을 뉘우치며 정성스럽게 참회록을 쓰는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'엑스-피-에이트\'와 유사하므로, 과거의 잘못(X)에 대해 피(pi)를 흘리는 심정으로 대가(ate)를 치른다고 기억하세요.',
      context: '단순한 사과를 넘어 종교적 참회나 법적 보상, 혹은 평생에 걸친 선행을 통해 과거의 큰 과오를 씻으려 할 때 사용합니다.',
      synonymAntonym: 'atone은 보상을 통해 화해하는 뉘앙스이며, 반대말인 offend나 violate는 법이나 도덕을 어기는 행위를 뜻합니다.',
    }),
    {
      definition: 'to show that you are sorry for a bad action by doing something good or accepting a punishment',
      synonyms: ['atone', 'redeem', 'amend'],
      antonyms: ['offend', 'violate', 'transgress'],
      exampleSentences: [
        { en: 'He spent the rest of his life trying to expiate the errors of his youth.', ko: '그는 젊은 시절의 과오를 속죄하기 위해 남은 생애를 보냈다.' },
        { en: 'The criminal hoped to expiate his crimes by performing community service.', ko: '그 범죄자는 사회봉사를 함으로써 자신의 죄를 속죄하기를 희망했다.' },
      ],
      wordDistractors: ['expatiate', 'expedite', 'extricate'],
      definitionDistractors: [
        'to speed up the progress of a task or process',
        'to explain or justify a wrongdoing to authorities',
        'to investigate a crime or offense thoroughly',
      ],
    }
  ),
  word('expound', '설명하다', 9, 'verb',
    ['숨기다', '간략히하다', '생략하다', '축약하다', '왜곡하다', '침묵하다', '방해하다', '부인하다', '잊다', '혼동하다'],
    tips({
      etymology: 'ex(밖으로)와 pound(놓다)가 결합된 단어로, 머릿속에 있는 생각을 밖으로 꺼내어 조목조목 펼쳐 놓는다는 의미입니다.',
      visual: '복잡한 설계도를 펼쳐놓고 레이저 포인터로 하나하나 세부 사항을 짚어가며 강의하는 전문가의 모습을 상상해 보세요.',
      soundAlike: '익스파운드, \'파운드(pound)\' 단위로 묵직하게 쌓인 지식의 보따리를 밖으로(ex) 풀어헤쳐 보여주는 소리라고 기억하세요.',
      context: '단순히 \'말하다\'를 넘어, 학술적 이론이나 복잡한 계획을 체계적이고 상세하게 논할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'elucidate는 명확하게 밝혀 설명하는 동의어이며, 반대로 핵심만 추려 짧게 줄이는 것은 summarize라고 합니다.',
    }),
    {
      definition: 'to provide a detailed explanation or a formal statement of a theory, plan, or set of ideas',
      synonyms: ['elucidate', 'elaborate', 'explicate'],
      antonyms: ['summarize', 'abbreviate', 'condense'],
      exampleSentences: [
        { en: 'The scholar was invited to the conference to expound his views on economic reform.', ko: '그 학자는 경제 개혁에 대한 자신의 견해를 상세히 설명하기 위해 컨퍼런스에 초대되었다.' },
        { en: 'During the interview, the candidate began to expound on her vision for the company\'s future.', ko: '면접 중에 그 후보자는 회사의 미래에 대한 자신의 비전을 상세히 풀어서 설명하기 시작했다.' },
      ],
      wordDistractors: ['expunge', 'compound', 'propound'],
      definitionDistractors: [
        'to put forward an idea for consideration by others',
        'to argue against a previously held belief or opinion',
        'to withdraw a statement or retract a published article',
      ],
    }
  ),
  word('expunge', '삭제하다', 9, 'verb',
    ['추가하다', '기록하다', '보존하다', '남기다', '저장하다', '삽입하다', '기입하다', '유지하다', '작성하다', '수집하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 pungere(찌르다)가 결합된 단어로, 과거에 양피지에 쓴 글자를 뾰족한 도구로 긁어내어 완전히 없애던 방식에서 유래했습니다.',
      visual: '법정 드라마에서 판사가 피고인의 전과 기록 위에 커다란 \'VOID\' 도장을 찍거나 검은색 매직으로 이름을 완전히 덮어버리는 장면을 상상해 보세요.',
      soundAlike: '단어 끝의 \'punge\'가 \'스펀지(sponge)\'와 비슷하게 들립니다. 스펀지로 칠판의 낙서를 흔적도 없이 닦아내는 모습을 떠올리면 기억하기 쉽습니다.',
      context: '단순히 지우는 것을 넘어, 법적 기록, 불쾌한 기억, 명단 등에서 존재 자체를 완전히 말소하거나 제거할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '완전히 없애버리는 erase, obliterate와 비슷하며, 반대로 기록을 남기고 보관하는 insert, preserve와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To strike out, obliterate, or mark for deletion from a written record or list.',
      synonyms: ['erase', 'obliterate', 'annul'],
      antonyms: ['insert', 'preserve', 'reinstate'],
      exampleSentences: [
        { en: 'The court ordered the authorities to expunge the criminal record from the public database.', ko: '법원은 당국에 공공 데이터베이스에서 범죄 기록을 말소하라고 명령했다.' },
        { en: 'She tried to expunge the painful memories of the accident from her mind.', ko: '그녀는 사고에 대한 고통스러운 기억을 마음속에서 완전히 지워버리려 노력했다.' },
      ],
      wordDistractors: ['expound', 'impugn', 'sponge'],
      definitionDistractors: [
        'to absorb or soak up a liquid substance',
        'to publicly display records for official review',
        'to add supplementary notes to a written document',
      ],
    }
  ),
  word('extirpate', '근절하다', 9, 'verb',
    ['심다', '확산시키다', '번식시키다', '보존하다', '키우다', '배양하다', '조성하다', '유지하다', '장려하다', '보호하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 stirps(뿌리)가 결합되어 \'뿌리째 뽑아내다\'라는 의미에서 유래했습니다.',
      visual: '정원의 잡초를 뿌리 한 가닥 남기지 않고 흙까지 털어내며 완전히 뽑아내는 모습을 상상하세요.',
      soundAlike: '익스터페이트 - \'터\'를 완전히 \'파내서\' 흔적도 없이 없애버린다는 소리로 기억하세요.',
      context: '단순히 제거하는 수준을 넘어 질병, 해충, 혹은 뿌리 깊은 사회적 악습을 완전히 멸절시킬 때 사용합니다.',
      synonymAntonym: 'eradicate와 유사하며, 반대로 무언가를 심고 기르는 plant나 foster와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to pull up by the roots or to destroy completely as if by pulling up the roots',
      synonyms: ['eradicate', 'exterminate', 'annihilate'],
      antonyms: ['propagate', 'cultivate', 'establish'],
      exampleSentences: [
        { en: 'The government launched a massive campaign to extirpate corruption from the public sector.', ko: '정부는 공공 부문에서 부패를 근절하기 위해 대대적인 캠페인을 시작했다.' },
        { en: 'It is extremely difficult to extirpate a belief that has been held for generations.', ko: '수 세대 동안 유지되어 온 신념을 완전히 뿌리 뽑는 것은 매우 어렵다.' },
      ],
      wordDistractors: ['extricate', 'extirpation', 'interpolate'],
      definitionDistractors: [
        'to transplant a living organism into a new environment',
        'to free someone from a difficult or entangled situation',
        'to spread something across a wide geographical area',
      ],
    }
  ),
  word('extrapolate', '추론하다', 9, 'verb',
    ['관찰하다', '실측하다', '기록하다', '단순히 보다', '축소하다', '무시하다', '요약하다', '제한하다', '수집하다', '방치하다'],
    tips({
      etymology: 'extra(밖으로)와 polare(다듬다/매끄럽게 하다)의 결합으로, 이미 알고 있는 데이터의 경계 밖으로 논리를 확장한다는 의미입니다.',
      visual: '꺾은선 그래프에서 실선이 끝난 지점 이후에, 앞으로 어떻게 변할지 점선을 길게 덧그려 나가는 모습입니다.',
      soundAlike: '익스트라(Extra) 정보를 폴폴(pole) 풍기며 보이지 않는 미래의 결론을 이끌어내는 상황을 연상하세요.',
      context: '경제 지표, 인구 변화, 실험 결과 등 현재 확보된 통계치를 근거로 미래의 수치나 상황을 예측할 때 주로 사용합니다.',
      synonymAntonym: 'infer, project와 유사하며, 데이터 내부의 빈칸을 채우는 interpolate나 사실을 왜곡하는 misinterpret와 대비됩니다.',
    }),
    {
      definition: 'to use existing information or facts to form a conclusion about something that is not yet known or has not happened',
      synonyms: ['infer', 'project', 'conjecture'],
      antonyms: ['interpolate', 'misinterpret', 'ignore'],
      exampleSentences: [
        { en: 'We can extrapolate future sales trends from the current data if we analyze it carefully.', ko: '현재 데이터를 주의 깊게 분석하면 미래의 매출 추세를 추론할 수 있습니다.' },
        { en: 'It is risky to extrapolate a global pattern from such a small and specific sample.', ko: '그렇게 작고 특정한 표본으로부터 전체적인 패턴을 추론하는 것은 위험합니다.' },
      ],
      wordDistractors: ['interpolate', 'extricate', 'extravagant'],
      definitionDistractors: [
        'to insert data points between known values in a dataset',
        'to collect and organize raw data for storage',
        'to replicate an experiment under identical conditions',
      ],
    }
  ),
  word('exuberant', '열광적', 9, 'adjective',
    ['우울한', '냉담한', '무기력한', '조용한', '담담한', '슬픈', '차분한', '지루한', '침울한', '무관심한'],
    tips({
      etymology: '라틴어 ex(밖으로)와 uberare(풍성하다)가 결합하여, 에너지가 밖으로 넘쳐흐르는 상태를 의미합니다.',
      visual: '우승 컵에서 샴페인 거품이 사방으로 활기차게 튀어 오르는 화려한 축제 장면을 상상해 보세요.',
      soundAlike: '익주버런트 - 에너지가 \'주르륵\' 넘쳐서 \'번트\'를 칠 만큼 몸놀림이 가볍고 활기찬 상태로 기억하세요.',
      context: '주로 축제 분위기의 군중, 기쁨에 넘치는 아이들, 혹은 아주 화려하고 풍성한 식물 성장을 묘사할 때 사용됩니다.',
      synonymAntonym: '동의어인 ebullient는 끓어 넘치는 활기를, 반의어인 subdued는 억눌리고 차분한 분위기를 나타냅니다.',
    }),
    {
      definition: 'filled with or characterized by a lively energy and high spirits',
      synonyms: ['ebullient', 'effervescent', 'buoyant'],
      antonyms: ['subdued', 'gloomy', 'apathetic'],
      exampleSentences: [
        { en: 'The winning team received an exuberant welcome from their fans at the airport.', ko: '우승 팀은 공항에서 팬들로부터 열광적인 환영을 받았다.' },
        { en: 'His exuberant personality often fills the room with infectious energy.', ko: '그의 열광적인 성격은 종종 방 안을 전염성 있는 에너지로 가득 채운다.' },
      ],
      wordDistractors: ['exorbitant', 'exultant', 'exuberance'],
      definitionDistractors: [
        'feeling or expressing triumphant joy after a victory',
        'exceeding what is reasonable in cost or amount',
        'showing careful restraint and quiet composure',
      ],
    }
  ),
  word('facile', '쉬운', 9, 'adjective',
    ['어려운', '복잡한', '난해한', '까다로운', '지난한', '심오한', '철저한', '고된', '엄격한', '정교한'],
    tips({
      etymology: '라틴어 facilis(하기 쉬운)에서 유래했으며, 어떤 일이 큰 저항 없이 매끄럽게 진행됨을 뜻합니다.',
      visual: '복잡하게 얽힌 실타래를 가위질 한 번으로 툭 끊어버리는 가벼운 손놀림을 상상해 보세요.',
      soundAlike: '패실(Facile) - \'패스(pass)\'하기 \'실(쉬)\'울 정도로 너무 단순하고 쉬운 문제.',
      context: '단순히 긍정적으로 쉽다는 뜻보다는, 깊은 고민 없이 내놓은 \'피상적이고 성의 없는\' 해결책을 비판할 때 자주 쓰입니다.',
      synonymAntonym: '노력이 필요 없는 effortless와 비슷하지만, 깊이가 있는 profound와는 정반대의 성격을 가집니다.',
    }),
    {
      definition: 'appearing neat and comprehensive only by ignoring the true complexities of an issue; easily achieved',
      synonyms: ['effortless', 'simplistic', 'superficial'],
      antonyms: ['arduous', 'profound', 'complex'],
      exampleSentences: [
        { en: 'The politician offered a facile explanation for the economic crisis.', ko: '그 정치인은 경제 위기에 대해 지나치게 단순하고 피상적인 설명을 내놓았다.' },
        { en: 'Winning the game proved to be more facile than the team had expected.', ko: '경기에서 승리하는 것은 팀이 예상했던 것보다 훨씬 수월했다.' },
      ],
      wordDistractors: ['facial', 'faucet', 'fertile'],
      definitionDistractors: [
        'relating to the features and expressions of the face',
        'showing deep understanding and thorough analysis',
        'able to produce creative and original ideas abundantly',
      ],
    }
  ),
  word('fatuous', '어리석은', 9, 'adjective',
    ['현명한', '총명한', '날카로운', '이성적인', '영리한', '지혜로운', '신중한', '명석한', '합리적인', '사려깊은'],
    tips({
      etymology: '라틴어 fatuus에서 유래했으며, 알맹이 없이 속이 텅 빈 것처럼 멍청하다는 뉘앙스를 풍깁니다.',
      visual: '중요한 회의 중에 혼자서만 상황 파악을 못 하고 실실 웃으며 엉뚱한 소리를 하는 사람을 상상해 보세요.',
      soundAlike: '패츄어스 - \'패(배)\'가 \'툭\' 튀어나온 채로 멍하니 앉아 아무 생각 없이 웃고 있는 바보 같은 모습.',
      context: '단순히 지능이 낮은 것이 아니라, 상황에 맞지 않게 무의미하고 어리석은 발언이나 미소를 지을 때 주로 사용합니다.',
      synonymAntonym: '유사어인 inane은 \'텅 빈\'이라는 뜻을 공유하며, 반의어인 sensible은 \'분별 있는\' 상태를 뜻합니다.',
    }),
    {
      definition: 'showing a lack of intelligence or thought combined with complacency',
      synonyms: ['foolish', 'inane', 'asinine'],
      antonyms: ['wise', 'sensible', 'intelligent'],
      exampleSentences: [
        { en: 'The critic dismissed the movie as a fatuous attempt at humor.', ko: '비평가는 그 영화를 유머를 시도한 어리석은 짓이라며 일축했다.' },
        { en: 'He made a fatuous remark about a subject he knew nothing about.', ko: '그는 자신이 전혀 모르는 주제에 대해 어리석은 발언을 했다.' },
      ],
      wordDistractors: ['factious', 'facetious', 'fastidious'],
      definitionDistractors: [
        'excessively concerned with minor details and cleanliness',
        'treating serious issues with deliberately inappropriate humor',
        'causing division or disagreement within a group',
      ],
    }
  ),
  word('felicitous', '적절한', 9, 'adjective',
    ['부적절한', '어색한', '어울리지 않는', '부당한', '틀린', '불행한', '불운한', '서투른', '불쾌한', '거친'],
    tips({
      etymology: '라틴어 felix(행복한, 운 좋은)에서 유래하여, 상황에 딱 맞아떨어져 기분 좋은 상태를 의미합니다.',
      visual: '퍼즐의 마지막 조각이 빈 공간에 소리 없이 딱 들어맞아 완성되는 쾌감을 떠올려 보세요.',
      soundAlike: '펠리시터스 - 펠리컨(Feli-)이 물고기를 시(-ci-)원하게 터(-tous)억 낚아채는 적절한 순간.',
      context: '주로 말이나 글의 표현이 상황에 아주 적절하거나, 선택이 매우 탁월할 때 격식 있게 사용합니다.',
      synonymAntonym: '동의어는 apt, appropriate이며, 반의어는 부적절한 inappropriate, awkward입니다.',
    }),
    {
      definition: 'remarkably appropriate or well-suited to a particular situation or occasion',
      synonyms: ['apt', 'appropriate', 'fitting'],
      antonyms: ['inappropriate', 'unfortunate', 'awkward'],
      exampleSentences: [
        { en: 'The speaker\'s choice of words was highly felicitous for the solemn occasion.', ko: '연설자의 단어 선택은 그 엄숙한 행사에 매우 적절했다.' },
        { en: 'It was a felicitous coincidence that we met just when I needed your help.', ko: '내가 당신의 도움이 필요했던 바로 그 순간에 우리가 만난 것은 아주 적절한 우연이었다.' },
      ],
      wordDistractors: ['felonious', 'fallacious', 'fictitious'],
      definitionDistractors: [
        'relating to or involved in criminal activity',
        'bringing great happiness and celebration to others',
        'based on false reasoning or misleading arguments',
      ],
    }
  ),
  word('filigree', '세공', 9, 'noun',
    ['거친 덩어리', '단순한 형태', '굵은 조각', '대충 만든 것', '민무늬', '투박함', '원석', '평면', '무늬없음', '단순함'],
    tips({
      etymology: '라틴어 filum(실)과 granum(알갱이)에서 유래하여 금속 실과 작은 구슬로 만든 아주 섬세한 장식을 뜻합니다.',
      visual: '머리카락보다 가는 금실이나 은실을 꼬아서 만든 화려하고 정교한 왕관이나 귀걸이의 무늬를 떠올려 보세요.',
      soundAlike: '필리그리 - \'필(feel)\'이 팍 꽂힐 정도로 정교하게 \'그리(그린)\' 듯한 섬세한 공예품.',
      context: '주로 귀금속 공예나 고딕 양식 건축물의 창문 등 아주 세밀하고 복잡한 장식 패턴을 묘사할 때 사용됩니다.',
      synonymAntonym: 'tracery나 ornamentation과 비슷하며, 장식 없이 뭉툭한 solid mass나 plainness와는 반대됩니다.',
    }),
    {
      definition: 'Intricate and delicate decorative designs made from thin gold, silver, or copper wire twisted into artistic patterns.',
      synonyms: ['tracery', 'ornamentation', 'lacework'],
      antonyms: ['plainness', 'simplicity', 'heaviness'],
      exampleSentences: [
        { en: 'The artisan spent months completing the gold filigree on the royal crown.', ko: '장인은 왕관의 금세공을 완성하는 데 수개월을 보냈습니다.' },
        { en: 'Light filtered through the iron filigree of the balcony railing.', ko: '발코니 난간의 철제 세공 사이로 빛이 새어 들어왔습니다.' },
      ],
      wordDistractors: ['filibuster', 'figurine', 'filament'],
      definitionDistractors: [
        'a small decorative statue or carved figurine',
        'a thin thread or wire used in light bulbs',
        'a type of dense fabric with a raised woven pattern',
      ],
    }
  ),
  word('filibuster', '논진 연설', 9, 'noun',
    ['간결한 동의', '즉각적 표결', '조용한 통과', '만장일치', '신속 집행', '정책 승인', '의안 철회', '법안 찬성', '행정 명령', '의사 협력'],
    tips({
      etymology: '네덜란드어 \'vrijbuiter(해적)\'에서 유래하여, 의사 진행 과정을 약탈하듯 방해한다는 비유적 의미를 담고 있습니다.',
      visual: '국회 본회의장에서 한 의원이 두꺼운 서류 뭉치를 든 채 밤새도록 마이크 앞을 떠나지 않고 발언하는 장면을 떠올려 보세요.',
      soundAlike: '\'필리(Pilly)\'가 \'버스(Buster)\' 앞을 가로막아 출발을 못 하게 하듯, 법안이 통과되지 못하게 길을 막는 상황으로 기억하세요.',
      context: '의회에서 소수파가 다수파의 독주를 막기 위해 합법적으로 부여된 무제한 토론 권한을 사용하여 시간을 끄는 상황에 쓰입니다.',
      synonymAntonym: '방해를 뜻하는 obstruction과 유사하며, 신속한 처리를 뜻하는 expedition이나 협력을 뜻하는 cooperation과는 반대됩니다.',
    }),
    {
      definition: 'A tactic used in a legislative body to obstruct or postpone a vote on a proposed law by making extremely long speeches.',
      synonyms: ['obstruction', 'delaying tactic', 'stonewalling'],
      antonyms: ['expedition', 'assistance', 'progression'],
      exampleSentences: [
        { en: 'The opposition party started a filibuster to prevent the controversial tax bill from passing.', ko: '야당은 논란이 된 세법안의 통과를 막기 위해 무제한 토론을 통한 의사 진행 방해를 시작했다.' },
        { en: 'After twenty hours of continuous speaking, the senator finally ended his record-breaking filibuster.', ko: '20시간 동안의 연속 연설 끝에, 그 상원의원은 마침내 기록적인 논진 연설을 마쳤다.' },
      ],
      wordDistractors: ['filigree', 'fillister', 'iliberal'],
      definitionDistractors: [
        'a formal proposal submitted to a legislative body for a vote',
        'an extended recess taken during a parliamentary session',
        'a document summarizing the key points of proposed legislation',
      ],
    }
  ),
  word('fulminate', '격렬히 비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '묵인하다', '승인하다', '장려하다', '추천하다', '지지하다', '환영하다', '수용하다'],
    tips({
      etymology: '라틴어 \'fulmen(번개)\'에서 유래했습니다. 하늘에서 번개가 내리치듯 아주 강렬하고 무섭게 비난을 쏟아내는 이미지를 떠올려 보세요.',
      visual: '화가 머리 끝까지 난 사람이 단상 위에서 주먹을 불끈 쥐고 번개 같은 기세로 호통을 치는 모습을 상상해 보세요.',
      soundAlike: '\'풀(Full)로 미네이트\' - 분노를 가득(Full) 채워서 상대방을 밀어붙이듯(minate) 거칠게 몰아세우는 소리로 기억하세요.',
      context: '주로 정치적인 부패, 부당한 법안, 혹은 사회적 불의에 대해 대중 앞에서 공개적으로 목소리를 높여 비판할 때 자주 사용됩니다.',
      synonymAntonym: 'denounce, rail, berate는 모두 강한 비판을 뜻하며, 반대로 praise, commend, approve는 칭찬과 승인을 의미합니다.',
    }),
    {
      definition: 'to express vehement protest or to launch a verbal attack against a specific policy, person, or action',
      synonyms: ['denounce', 'rail', 'berate'],
      antonyms: ['praise', 'commend', 'approve'],
      exampleSentences: [
        { en: 'The activist continued to fulminate against the injustice of the new law during the protest.', ko: '그 활동가는 시위 도중 새 법안의 부당함에 대해 계속해서 격렬히 비난했다.' },
        { en: 'Many citizens took to social media to fulminate against the sudden tax increase.', ko: '많은 시민들이 갑작스러운 세금 인상에 대해 격렬히 비난하기 위해 소셜 미디어를 이용했다.' },
      ],
      wordDistractors: ['fumigate', 'formulate', 'culminate'],
      definitionDistractors: [
        'to reach the highest point or climax of something',
        'to disinfect an area by releasing chemical fumes',
        'to illuminate brightly with a sudden flash of light',
      ],
    }
  ),
  word('gainsay', '부정하다', 9, 'verb',
    ['동의하다', '인정하다', '확인하다', '찬성하다', '승인하다', '수용하다', '지지하다', '긍정하다', '허가하다', '동조하다'],
    tips({
      etymology: '고대 영어에서 \'against\'를 뜻하는 \'gain-\'과 \'say\'가 결합하여 \'반대하여 말하다\'라는 의미가 되었습니다.',
      visual: '법정에서 증인이 증언할 때 변호사가 벌떡 일어나 \'이의 있습니다!\'라고 외치며 반박하는 장면을 떠올려 보세요.',
      soundAlike: 'Gain(얻다) + Say(말하다): 논쟁에서 승리를 얻기(gain) 위해 상대의 말을(say) 반박하는 상황으로 기억하세요.',
      context: '격식 있는 상황이나 문어체에서 주로 쓰이며, 특히 객관적인 사실이나 권위 있는 의견에 이의를 제기할 때 사용됩니다.',
      synonymAntonym: 'deny, contradict와 비슷하며, 반대로 사실을 받아들이는 confirm, admit과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to declare a statement to be untrue or to oppose someone by giving a contrary opinion',
      synonyms: ['deny', 'contradict', 'dispute'],
      antonyms: ['confirm', 'admit', 'agree'],
      exampleSentences: [
        { en: 'It is difficult to gainsay the importance of this scientific discovery.', ko: '이 과학적 발견의 중요성을 부정하기는 어렵다.' },
        { en: 'No one was brave enough to gainsay the dictator\'s claims.', ko: '아무도 독재자의 주장에 반박할 만큼 용감하지 않았다.' },
      ],
      wordDistractors: ['gainful', 'gainsayer', 'hearsay'],
      definitionDistractors: [
        'to obtain an advantage or profit from a situation',
        'to repeat what someone else has said as truth',
        'to express support for a popular or mainstream opinion',
      ],
    }
  ),
  word('garrulous', '말이 많은', 9, 'adjective',
    ['과묵한', '조용한', '침묵하는', '말수 적은', '냉담한', '신중한', '무뚝뚝한', '차분한', '간결한', '엄격한'],
    tips({
      etymology: '라틴어 garrire(재잘거리다)에서 유래하여 쉴 새 없이 떠드는 성격을 나타냅니다.',
      visual: '찻집에서 상대방이 말할 틈도 주지 않고 혼자서 계속 이야기하는 수다쟁이의 모습을 상상해 보세요.',
      soundAlike: 'Garrulous의 \'Gar\'가 거위(Goose)가 꽥꽥거리며 시끄럽게 우는 소리와 비슷하다고 연상하세요.',
      context: '주로 사소하고 영양가 없는 일상적인 이야기를 끊임없이 늘어놓는 사람을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '유사한 단어로는 loquacious가 있으며, 반대로 말수가 적고 입이 무거운 상태는 taciturn이라고 합니다.',
    }),
    {
      definition: 'tending to talk a great deal, especially about unimportant or trivial things',
      synonyms: ['talkative', 'loquacious', 'voluble'],
      antonyms: ['taciturn', 'reticent', 'silent'],
      exampleSentences: [
        { en: 'The garrulous old man entertained the travelers with endless stories of his youth.', ko: '말이 많은 그 노인은 자신의 젊은 시절에 대한 끝없는 이야기로 여행객들을 즐겁게 해주었다.' },
        { en: 'He became increasingly garrulous after drinking a few glasses of wine.', ko: '그는 와인을 몇 잔 마신 뒤에 점점 더 수다스러워졌다.' },
      ],
      wordDistractors: ['glamorous', 'granulous', 'querulous'],
      definitionDistractors: [
        'habitually complaining in a whining or petulant manner',
        'speaking in a deep and resonant voice',
        'choosing words carefully and speaking with precision',
      ],
    }
  ),
  word('genuflect', '무릎 꿇다', 9, 'verb',
    ['일어서다', '무시하다', '거만하다', '경멸하다', '도약하다', '질주하다', '외면하다', '반항하다', '직립하다', '군림하다'],
    tips({
      etymology: '라틴어 genu(무릎)와 flectere(굽히다)가 결합되어 \'무릎을 굽히다\'라는 의미가 되었습니다.',
      visual: '성당의 제단 앞이나 왕의 발치에서 한쪽 무릎을 바닥에 대고 고개를 숙이는 경건한 자세를 떠올려 보세요.',
      soundAlike: 'Genu(무릎)를 Flex(구부리다) 한다고 연상하면 \'무릎을 굽히는 동작\'을 쉽게 기억할 수 있습니다.',
      context: '주로 종교적인 의식에서 신에게 경의를 표하거나, 절대적인 권위자에게 복종의 의미를 나타낼 때 쓰입니다.',
      synonymAntonym: 'kneel, bow와 유사하며, 꼿꼿이 서 있는 상태인 stand나 rise와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to lower one\'s body by bending one knee to the ground, typically as a sign of deep respect or religious devotion',
      synonyms: ['kneel', 'bow', 'curtsy'],
      antonyms: ['stand', 'rise', 'disregard'],
      exampleSentences: [
        { en: 'The knight had to genuflect before the king to show his loyalty.', ko: '기사는 왕에게 충성을 보이기 위해 무릎을 꿇어야 했습니다.' },
        { en: 'It is a tradition for visitors to genuflect when they pass the sacred shrine.', ko: '방문객들이 신성한 성지를 지날 때 무릎을 꿇는 것은 전통입니다.' },
      ],
      wordDistractors: ['genuflection', 'deflect', 'reflect'],
      definitionDistractors: [
        'to turn aside or redirect something from its path',
        'to gesture with the hands during a formal ceremony',
        'to stand at attention as a sign of military respect',
      ],
    }
  ),
  word('germane', '관련된', 9, 'adjective',
    ['무관한', '이질적인', '엉뚱한', '부적절한', '동떨어진', '상관없는', '외래의', '사소한', '지엽적인', '모순되는'],
    tips({
      etymology: '라틴어 germanus에서 유래하여 원래 \'같은 부모에게서 난 형제\'를 의미했으나, 현재는 성격이나 본질이 같아 \'밀접하게 연관된\'이라는 뜻으로 쓰입니다.',
      visual: '회의실 칠판에 적힌 핵심 주제 바로 옆에 화살표로 연결된 중요한 메모를 상상해 보세요.',
      soundAlike: '독일을 뜻하는 German과 철자가 비슷하지만, \'독일(German)의 기술력은 자동차 산업과 밀접하게 관련(Germane)되어 있다\'고 연상하세요.',
      context: '법정이나 학술 토론에서 제시된 증거나 의견이 논의 중인 사안과 직접적인 상관관계가 있을 때 주로 사용합니다.',
      synonymAntonym: 'Relevant와 Pertinent는 가장 가까운 동의어이며, 반대로 주제를 벗어난 상태는 Irrelevant라고 합니다.',
    }),
    {
      definition: 'closely connected and appropriate to the specific matter or topic being discussed',
      synonyms: ['relevant', 'pertinent', 'applicable'],
      antonyms: ['irrelevant', 'unrelated', 'inappropriate'],
      exampleSentences: [
        { en: 'The judge ruled that the witness\'s past behavior was not germane to the current case.', ko: '판사는 증인의 과거 행동이 이번 사건과 직접적인 관련이 없다고 판결했습니다.' },
        { en: 'Please keep your questions germane to the topic of environmental conservation.', ko: '질문은 환경 보존이라는 주제와 관련된 내용으로만 제한해 주시기 바랍니다.' },
      ],
      wordDistractors: ['german', 'humane', 'arcane'],
      definitionDistractors: [
        'originating from or relating to a Germanic culture',
        'widely known and accepted as common knowledge',
        'obscure and understood by only a few specialists',
      ],
    }
  ),
  word('grandiloquent', '과장된', 9, 'adjective',
    ['간결한', '소박한', '단순한', '솔직한', '검소한', '명료한', '직설적인', '겸손한', '수수한', '담백한'],
    tips({
      etymology: '라틴어 grandis(큰)와 loqui(말하다)가 합쳐져 \'말을 크게 부풀린다\'는 의미에서 유래되었습니다.',
      visual: '작은 웅덩이를 설명하면서 마치 거대한 대양을 묘사하듯 화려한 손짓과 어려운 단어를 쓰는 웅변가를 상상해 보세요.',
      soundAlike: 'Grand(웅장한)와 Eloquent(유창한)의 결합으로 기억하세요. 너무 웅장하게만 말하려다 보니 오히려 과해진 상태입니다.',
      context: '정치인의 허세 섞인 연설이나, 지식을 뽐내기 위해 일부러 어려운 한자어나 외래어를 남발하는 문체를 비판할 때 자주 쓰입니다.',
      synonymAntonym: 'Pompous(거드름 피우는)와 유사하며, 반대로 꾸밈없고 소박한 태도는 Modest나 Plain이라고 합니다.',
    }),
    {
      definition: 'characterized by using fancy, colorful, and pompous language in an attempt to sound more important or impressive than necessary',
      synonyms: ['pompous', 'bombastic', 'pretentious'],
      antonyms: ['plain', 'simple', 'modest'],
      exampleSentences: [
        { en: 'The politician\'s grandiloquent rhetoric failed to convince the skeptical voters.', ko: '그 정치인의 과장된 수사법은 회의적인 유권자들을 설득하는 데 실패했다.' },
        { en: 'He was known for his grandiloquent writing style, often using five syllables when one would do.', ko: '그는 한 단어면 충분할 때도 다섯 음절 단어를 사용하는 과장된 글쓰기 스타일로 유명했다.' },
      ],
      wordDistractors: ['grandiose', 'eloquent', 'magnificent'],
      definitionDistractors: [
        'speaking fluently and persuasively with natural grace',
        'impressively large and beautiful in scale or appearance',
        'expressed in a clear and straightforward manner',
      ],
    }
  ),
  word('hagiography', '성인 전기', 10, 'noun',
    ['비판적 전기', '폭로문', '공정한 기록', '객관적 서술', '냉소적 평가', '비판', '폭로', '공정', '객관', '냉소'],
    tips({
      etymology: '그리스어 hagios(성스러운)와 graphein(쓰다)이 합쳐져 성인의 삶을 기록한다는 뜻에서 유래했습니다.',
      visual: '인물의 단점은 모두 지우고 머리 뒤에 황금빛 후광(halo)만 가득 그려 넣은 책 표지를 상상해 보세요.',
      soundAlike: '단어의 앞부분인 \'Hagi\'를 \'Holy(성스러운)\'와 발음이 유사하다고 연결하면 기억하기 쉽습니다.',
      context: '현대에는 정치인이나 유명인을 지나치게 미화하여 찬양 일색으로 쓴 전기를 비판적으로 일컬을 때 자주 사용됩니다.',
      synonymAntonym: '찬양을 뜻하는 adulation과 유사하며, 사실을 파헤치는 expose나 객관적인 critique와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a written account of someone\'s life that praises them too much and makes them seem perfect or saintly',
      synonyms: ['idolization', 'adulation', 'glorification'],
      antonyms: ['expose', 'critique', 'biography'],
      exampleSentences: [
        { en: 'The latest book about the CEO was criticized for being a mere hagiography rather than a balanced account.', ko: '그 CEO에 관한 최신 서적은 균형 잡힌 기록이라기보다 단순한 미화용 전기라는 비판을 받았다.' },
        { en: 'Historians dismissed the official record as hagiography because it ignored all of the leader\'s failures.', ko: '역사학자들은 그 공식 기록이 지도자의 모든 실패를 무시했기 때문에 성인 전기 수준의 미화물로 치부했다.' },
      ],
      wordDistractors: ['geography', 'holography', 'bibliography'],
      definitionDistractors: [
        'a comprehensive list of books and sources on a subject',
        'an objective and balanced account of a historical figure',
        'the study of handwriting and ancient written scripts',
      ],
    }
  ),
  word('halcyon', '평화로운', 10, 'adjective',
    ['불안한', '혼란한', '격동의', '우울한', '암울한', '소란스러운', '긴박한', '험악한', '비참한', '불행한'],
    tips({
      etymology: '그리스 신화 속 물총새(alkyon)가 알을 품는 동안 바다가 잔잔해졌다는 전설에서 유래했습니다.',
      visual: '파도 하나 없는 에메랄드빛 바다 위에 떠 있는 평화로운 조각배를 떠올려 보세요.',
      soundAlike: '해시계(halcyon) 아래에서 보내는 평화로운 오후라고 연상해 보세요.',
      context: '주로 과거의 행복하고 평화로웠던 시절을 회상할 때 \'halcyon days\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: '동의어는 tranquil, serene, idyllic이며 반의어는 turbulent, chaotic, stormy입니다.',
    }),
    {
      definition: 'denoting a period of time in the past that was idyllically happy and peaceful',
      synonyms: ['tranquil', 'serene', 'idyllic'],
      antonyms: ['turbulent', 'chaotic', 'stormy'],
      exampleSentences: [
        { en: 'Those were the halcyon days of my youth, full of peace and joy.', ko: '그 시절은 내 젊은 날의 평화롭고 행복한 시기였다.' },
        { en: 'She recalled the halcyon summers spent at the lake house.', ko: '그녀는 호숫가 집에서 보낸 평화로운 여름날들을 회상했다.' },
      ],
      wordDistractors: ['halogen', 'halyard', 'falcon'],
      definitionDistractors: [
        'relating to chemical elements used in lighting and disinfection',
        'occurring during a brief transitional season between summer and autumn',
        'marked by frequent and unpredictable changes in weather',
      ],
    }
  ),
  word('hegemony', '패권', 10, 'noun',
    ['종속', '복종', '저항', '평등', '독립', '굴복', '무력', '협력', '조화', '분열'],
    tips({
      etymology: '그리스어 \'hegemon(지도자)\'에서 유래하여 한 집단이 다른 집단을 압도하는 상태를 뜻합니다.',
      visual: '체스판 위에서 모든 말을 압도하며 중앙을 차지하고 있는 킹의 모습을 상상해 보세요.',
      soundAlike: '해(Heg-)를 가진 어머니(-mony)처럼 강력한 영향력을 행사하는 모습으로 외워보세요.',
      context: '국가 간의 정치적 영향력이나 특정 기업의 시장 지배력을 설명할 때 주로 사용됩니다.',
      synonymAntonym: '동의어는 dominance, supremacy, authority이며 반의어는 subordination, weakness, helplessness입니다.',
    }),
    {
      definition: 'The social, cultural, ideological, or economic influence exerted by a dominant group over others.',
      synonyms: ['dominance', 'supremacy', 'authority'],
      antonyms: ['subordination', 'weakness', 'helplessness'],
      exampleSentences: [
        { en: 'The cultural hegemony of Hollywood extends worldwide.', ko: '할리우드의 문화적 패권은 전 세계로 뻗어 있다.' },
        { en: 'They challenged the economic hegemony of the neighboring nation.', ko: '그들은 이웃 국가의 경제적 패권에 도전했다.' },
      ],
      wordDistractors: ['harmony', 'homogeny', 'hegira'],
      definitionDistractors: [
        'a peaceful agreement between two or more nations',
        'the systematic study of governmental structures',
        'a democratic system of shared power among equals',
      ],
    }
  ),
  word('iconoclast', '전통 타파자', 10, 'noun',
    ['보수주의자', '전통주의자', '수호자', '옹호자', '순응자', '신봉자', '추종자', '모방자', '수집가', '예술가'],
    tips({
      etymology: '그리스어로 \'우상(eikon)\'을 \'깨뜨리는 사람(klastes)\'이라는 의미에서 유래하여, 성상을 파괴하던 역사적 배경을 담고 있습니다.',
      visual: '박물관에 전시된 낡고 딱딱한 관습이라는 조각상을 커다란 망치로 시원하게 부수는 혁명가의 모습을 상상해 보세요.',
      soundAlike: '유명한 아이콘(icon)을 날카로운 갈고리(claw)로 긁어서(clast) 형체를 없애버리는 사람이라고 연상하면 쉽습니다.',
      context: '단순히 물건을 부수는 것이 아니라, 사회의 고정관념이나 오래된 관습에 정면으로 도전하는 혁신적인 인물을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '기존 체제에 저항하는 rebel, 독불장군 같은 maverick과 비슷하며, 규칙을 잘 따르는 conformist와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a person who criticizes or opposes beliefs and practices that are widely accepted by most people in a society',
      synonyms: ['rebel', 'maverick', 'nonconformist'],
      antonyms: ['traditionalist', 'conformist', 'believer'],
      exampleSentences: [
        { en: 'As an iconoclast, he constantly questioned the established rules of the industry.', ko: '전통 타파자로서 그는 업계의 기성 규칙들에 끊임없이 의문을 제기했다.' },
        { en: 'The young filmmaker was celebrated as an iconoclast who redefined the genre.', ko: '그 젊은 영화 제작자는 장르를 재정의한 전통 타파자로 칭송받았다.' },
      ],
      wordDistractors: ['iconography', 'iconostasis', 'aristocrat'],
      definitionDistractors: [
        'a person who collects and preserves religious artwork',
        'someone who studies the symbolic meaning of images',
        'a devoted follower who upholds traditional cultural values',
      ],
    }
  ),
  word('idyll', '전원시', 10, 'noun',
    ['비극', '참사', '소동', '재앙', '고난', '악몽', '전쟁', '도시', '소음', '혼란'],
    tips({
      etymology: '그리스어 \'eidyllion\'에서 유래했으며, \'작은 그림\'처럼 아름답고 소박한 전원 풍경을 묘사하는 짧은 시를 뜻합니다.',
      visual: '푸른 들판에서 양들이 한가로이 풀을 뜯고 시냇물이 졸졸 흐르는 평화로운 시골 마을의 수채화를 상상해 보세요.',
      soundAlike: '아이(Idy-)가 들(-ll)판에서 걱정 없이 뛰노는 평화롭고 순수한 장면을 떠올리며 발음을 연상해 보세요.',
      context: '문학적인 시뿐만 아니라, 일상에서 근심 걱정 없이 완벽하게 평화롭고 행복한 순간이나 장소를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '낙원을 뜻하는 paradise와 유사하며, 끔찍한 상황을 뜻하는 nightmare나 catastrophe와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An extremely happy, peaceful, or picturesque period or situation, typically an idealized rural one.',
      synonyms: ['paradise', 'utopia', 'pastoral'],
      antonyms: ['nightmare', 'hell', 'catastrophe'],
      exampleSentences: [
        { en: 'Their summer in the countryside was a brief idyll before the war began.', ko: '전쟁이 시작되기 전 그들이 시골에서 보낸 여름은 짧은 전원시 같은 시간이었다.' },
        { en: 'The hotel offers a rural idyll for those escaping the city noise.', ko: '그 호텔은 도시의 소음을 피하려는 사람들에게 전원적인 낙원을 제공한다.' },
      ],
      wordDistractors: ['idol', 'idle', 'idyllic'],
      definitionDistractors: [
        'a person or thing that is greatly admired or worshipped',
        'a short dramatic play performed in an outdoor setting',
        'a state of complete inactivity or laziness',
      ],
    }
  ),
  word('impecunious', '가난한', 10, 'adjective',
    ['부유한', '풍족한', '호화로운', '넉넉한', '부강한', '유복한', '사치스러운', '성공한', '안정된', '충분한'],
    tips({
      etymology: '부정 접두사 \'im-\'과 라틴어로 돈을 뜻하는 \'pecunia\'가 합쳐져 \'돈이 없는\' 상태를 뜻합니다.',
      visual: '주머니를 털었는데 먼지만 나오고 동전 한 푼 없는 텅 빈 지갑을 떠올려 보세요.',
      soundAlike: '임(Im-)시로 페니(pecu-)도 없는 상태라고 기억하면 쉽습니다.',
      context: '단순히 가난하다는 말보다 격식 있는 표현으로, 주로 만성적인 자금 부족 상태를 나타냅니다.',
      synonymAntonym: '동의어는 penniless, destitute, indigent이며 반의어는 wealthy, affluent, rich입니다.',
    }),
    {
      definition: 'having very little or no money, often habitually or over a long period of time',
      synonyms: ['penniless', 'destitute', 'indigent'],
      antonyms: ['wealthy', 'affluent', 'prosperous'],
      exampleSentences: [
        { en: 'The impecunious artist lived an extremely frugal life in a tiny apartment.', ko: '가난한 그 예술가는 작은 아파트에서 극도로 검소한 생활을 했습니다.' },
        { en: 'Despite his noble lineage, he remained impecunious throughout his life.', ko: '귀족 가문 출신임에도 불구하고 그는 평생 가난한 상태에 머물렀습니다.' },
      ],
      wordDistractors: ['impervious', 'innocuous', 'impetuous'],
      definitionDistractors: [
        'not affected by or responsive to external pressures',
        'acting rashly without thinking of consequences',
        'guilty of committing a minor financial offense',
      ],
    }
  ),
  word('imperious', '거만한', 10, 'adjective',
    ['겸손한', '비굴한', '소심한', '온순한', '친절한', '정중한', '수줍은', '관대한', '자애로운', '유순한'],
    tips({
      etymology: '라틴어 \'imperium(명령, 권력)\'에서 유래하여 황제처럼 명령하는 태도를 뜻합니다.',
      visual: '턱을 높이 치켜들고 손가락으로 누군가에게 명령을 내리는 오만한 귀족을 상상해 보세요.',
      soundAlike: '임페리얼(Imperial, 황제의)급으로 거만한 태도라고 연결해 보세요.',
      context: '상대방을 무시하며 고압적으로 지시하거나 군림하려는 태도를 비판할 때 사용합니다.',
      synonymAntonym: '동의어는 domineering, arrogant, overbearing이며 반의어는 humble, modest, submissive입니다.',
    }),
    {
      definition: 'assuming power or authority without justification; arrogant and domineering',
      synonyms: ['domineering', 'arrogant', 'overbearing'],
      antonyms: ['humble', 'modest', 'submissive'],
      exampleSentences: [
        { en: 'She sent him away with an imperious wave of her hand.', ko: '그녀는 거만한 손짓으로 그를 물러나게 했다.' },
        { en: 'His imperious manner made it difficult for his employees to approach him.', ko: '그의 고압적인 태도 때문에 직원들이 그에게 다가가기 어려워했다.' },
      ],
      wordDistractors: ['impervious', 'imperial', 'imperiled'],
      definitionDistractors: [
        'relating to a grand empire or royal dynasty',
        'in danger of being harmed or destroyed',
        'unable to be penetrated or affected by outside forces',
      ],
    }
  ),
  word('impervious', '둔감한', 10, 'adjective',
    ['민감한', '취약한', '영향받는', '투과되는', '예민한', '약한', '열린', '반응하는', '부드러운', '유연한'],
    tips({
      etymology: '부정 접두사 \'im-\'과 \'통과하다\'라는 뜻의 \'pervius\'가 합쳐져 \'통과할 수 없는\'이라는 의미에서 유래했습니다.',
      visual: '거센 비바람 속에서도 물 한 방울 스며들지 않는 튼튼한 방수 코트나 단단한 방패를 떠올려 보세요.',
      soundAlike: '임(Im-)시로 펴(per-)놓은 비(vi-)닐 하우스가 폭풍우에도 끄떡없이 견디는 모습을 상상해 보세요.',
      context: '물질이 액체를 통과시키지 않는 물리적 특성뿐만 아니라, 사람의 마음이 비판이나 유혹에 흔들리지 않을 때도 자주 쓰입니다.',
      synonymAntonym: '동의어인 unaffected는 영향을 받지 않음을, 반의어인 vulnerable은 상처받기 쉬운 상태임을 나타냅니다.',
    }),
    {
      definition: 'not allowing something to pass through or enter; remaining untouched or unmoved by external influences or criticisms',
      synonyms: ['unaffected', 'immune', 'impenetrable'],
      antonyms: ['susceptible', 'vulnerable', 'sensitive'],
      exampleSentences: [
        { en: 'He seemed impervious to the insults being hurled at him.', ko: '그는 자신에게 쏟아지는 모욕에도 전혀 흔들림이 없는 것 같았다.' },
        { en: 'The material is impervious to water and heat.', ko: '이 재질은 물과 열에 영향을 받지 않으며 스며들지 않게 한다.' },
      ],
      wordDistractors: ['imperious', 'impetuous', 'pervious'],
      definitionDistractors: [
        'commanding and domineering in an arrogant manner',
        'acting hastily and without careful consideration',
        'easily broken down or weakened by external pressure',
      ],
    }
  ),
  word('impetuous', '성급한', 10, 'adjective',
    ['신중한', '침착한', '계획적인', '조심스러운', '느긋한', '냉정한', '사려깊은', '꼼꼼한', '차분한', '철저한'],
    tips({
      etymology: '라틴어 \'impetus(공격, 충동)\'에서 유래하여 생각보다 행동이 앞서는 성향을 나타냅니다.',
      visual: '깊이를 재보지도 않고 깊은 물 속으로 일단 뛰어드는 사람의 모습을 상상해 보세요.',
      soundAlike: '임(Im-)마! 패(pet-)기 있게 그냥 해! 라고 성급하게 외치는 상황을 연상하세요.',
      context: '충동적으로 돈을 쓰거나 충분한 고민 없이 중요한 결정을 내리는 행동을 묘사할 때 씁니다.',
      synonymAntonym: '동의어는 impulsive, rash, reckless이며 반의어는 cautious, deliberate, prudent입니다.',
    }),
    {
      definition: 'acting or done quickly and without thought or care',
      synonyms: ['impulsive', 'rash', 'reckless'],
      antonyms: ['cautious', 'deliberate', 'prudent'],
      exampleSentences: [
        { en: 'He later regretted his impetuous decision to quit his job without a backup plan.', ko: '그는 대안도 없이 직장을 그만두기로 한 자신의 성급한 결정을 나중에 후회했다.' },
        { en: 'The young prince was known for his impetuous nature.', ko: '그 젊은 왕자는 성급한 성격으로 유명했다.' },
      ],
      wordDistractors: ['impervious', 'impetus', 'imperious'],
      definitionDistractors: [
        'showing careful thought and deliberation before acting',
        'unable to be moved or influenced by outside forces',
        'full of drive and determination to achieve a goal',
      ],
    }
  ),
  word('impugn', '의심하다', 10, 'verb',
    ['확인하다', '옹호하다', '지지하다', '믿다', '인정하다', '입증하다', '찬성하다', '신뢰하다', '보증하다', '수용하다'],
    tips({
      etymology: '라틴어 pugnare(싸우다)에서 유래하여, 상대의 의견에 맞서 싸우듯 의문을 제기하는 것을 뜻합니다.',
      visual: '법정에서 변호사가 증인의 말이 거짓이라며 손가락질하며 따지는 장면을 상상하세요.',
      soundAlike: '임퓨인(Impugn) - \'임(안으로) 퓨(팍!) 인(찌르다)\'처럼 상대의 논리를 찌르는 느낌입니다.',
      context: '주로 누군가의 정직함, 성격, 혹은 진술의 타당성을 공격적으로 의심할 때 사용됩니다.',
      synonymAntonym: 'challenge와 비슷하며, 반대로 상대를 지지하는 defend와는 반대됩니다.',
    }),
    {
      definition: 'to call into question the integrity or honesty of a statement or person',
      synonyms: ['challenge', 'dispute', 'query'],
      antonyms: ['uphold', 'corroborate', 'advocate'],
      exampleSentences: [
        { en: 'The defense attorney attempted to impugn the reliability of the forensic evidence.', ko: '피고측 변호인은 법의학 증거의 신뢰성에 의문을 제기하려 시도했다.' },
        { en: 'It is unfair to impugn her motives without having any proof of wrongdoing.', ko: '부정행위에 대한 증거도 없이 그녀의 동기를 의심하는 것은 불공평하다.' },
      ],
      wordDistractors: ['impunity', 'expunge', 'repugn'],
      definitionDistractors: [
        'to grant exemption from punishment or consequences',
        'to strike out or delete records from an official document',
        'to publicly endorse or vouch for someone\'s character',
      ],
    }
  ),
  word('inchoate', '미완성의', 10, 'adjective',
    ['완성된', '발달한', '성숙한', '완벽한', '정교한', '세련된', '노련한', '확립된', '구체적인', '결정된'],
    tips({
      etymology: '라틴어 inchoare(시작하다)에서 유래하여, 이제 막 시작되어 형태가 잡히지 않은 상태를 말합니다.',
      visual: '조각가가 돌을 깎기 시작해 아직 형체를 알아볼 수 없는 덩어리 상태를 떠올려 보세요.',
      soundAlike: '인코에이트 - \'인(안에) 코(코가) 에이트(생기다)\'처럼 얼굴 형체가 막 생기기 시작한 초기 단계로 기억하세요.',
      context: '아이디어나 계획이 아직 구체화되지 않고 막연한 초기 단계일 때 자주 쓰입니다.',
      synonymAntonym: 'nascent와 유사하며, 완전히 형성된 상태인 mature와 대조됩니다.',
    }),
    {
      definition: 'being in an early stage of existence and not yet fully developed or organized',
      synonyms: ['nascent', 'rudimentary', 'undeveloped'],
      antonyms: ['developed', 'mature', 'finished'],
      exampleSentences: [
        { en: 'His ideas were still inchoate and needed more thought before being presented.', ko: '그의 아이디어들은 여전히 초기 단계였고 발표하기 전에 더 많은 고민이 필요했다.' },
        { en: 'The government faced an inchoate rebellion that lacked clear leadership.', ko: '정부는 명확한 지도부가 없는 미조직된 초기 상태의 반란에 직면했다.' },
      ],
      wordDistractors: ['inchoative', 'intricate', 'inviolate'],
      definitionDistractors: [
        'fully formed and ready for implementation',
        'complex and detailed in design or structure',
        'kept sacred and free from any interference or damage',
      ],
    }
  ),
  word('incipient', '초기의', 10, 'adjective',
    ['완전한', '만개한', '성숙한', '진행된', '끝난', '노련한', '숙련된', '최종의', '절정의', '성공한'],
    tips({
      etymology: '라틴어 incipere에서 유래했으며, in(안으로)과 capere(잡다)가 결합되어 \'어떤 일을 막 붙잡기 시작하다\'라는 의미를 가집니다.',
      visual: '이른 아침 땅을 뚫고 막 올라오기 시작한 작은 새싹의 모습을 상상해 보세요.',
      soundAlike: '인시피언트 - \'인(안에서) 시(시작) 피(피어나다)\'처럼 무언가 안에서 피어오르는 초기 단계를 연상하세요.',
      context: '질병의 초기 증상이나 감정의 싹이 트는 단계, 혹은 새로운 조직이 형성되는 시점을 설명할 때 주로 사용합니다.',
      synonymAntonym: '시작을 의미하는 nascent와 유사하며, 완전히 발달한 상태인 full-blown과는 반대되는 개념입니다.',
    }),
    {
      definition: 'starting to happen or develop; being in an early stage of existence',
      synonyms: ['emerging', 'dawning', 'nascent'],
      antonyms: ['developed', 'full-blown', 'mature'],
      exampleSentences: [
        { en: 'The doctor detected signs of incipient illness during the routine checkup.', ko: '의사는 정기 검진 중에 초기 질환의 징후를 발견했습니다.' },
        { en: 'There was an incipient panic in the crowd when the lights suddenly went out.', ko: '조명이 갑자기 꺼지자 군중들 사이에서 초기 공황 상태가 나타났습니다.' },
      ],
      wordDistractors: ['insipient', 'recipient', 'incidental'],
      definitionDistractors: [
        'occurring as a minor consequence of something else',
        'approaching the final and concluding stage of a process',
        'receiving or accepting something given or awarded',
      ],
    }
  ),
  word('incontrovertible', '부정할 수 없는', 10, 'adjective',
    ['의심스러운', '불확실한', '반론 가능한', '애매한', '모호한', '가변적인', '논란의', '부정확한', '허구의', '취약한'],
    tips({
      etymology: '부정을 뜻하는 in-과 \'반대하다\'라는 뜻의 controvert, 그리고 \'할 수 있는\'의 -ible이 결합되어 논쟁의 여지가 없음을 나타냅니다.',
      visual: '법정에서 판사가 망치를 두드리며 \'확정\'이라고 선언하는 완벽하고 단단한 황금 열쇠를 상상해 보세요.',
      soundAlike: '인컨트로버터블 - \'컨트롤(Control)\'할 수 없을 정도로 너무나 명백해서 반박이 불가능한 상태로 기억하세요.',
      context: '과학적 법칙이나 고화질 영상 증거처럼 누구도 \'아니오\'라고 말할 수 없는 절대적인 진실을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'indisputable과 유의어이며, 반대말로는 논란의 여지가 있다는 뜻의 debatable이나 questionable이 있습니다.',
    }),
    {
      definition: 'impossible to deny, argue against, or disprove because the truth is so obvious',
      synonyms: ['indisputable', 'irrefutable', 'unassailable'],
      antonyms: ['debatable', 'questionable', 'disputable'],
      exampleSentences: [
        { en: 'The video footage provided incontrovertible proof of the suspect\'s innocence.', ko: '그 영상 자료는 용의자의 무죄에 대한 부정할 수 없는 증거를 제공했습니다.' },
        { en: 'It is an incontrovertible fact that the Earth revolves around the Sun.', ko: '지구가 태양 주위를 돈다는 것은 반박의 여지가 없는 사실입니다.' },
      ],
      wordDistractors: ['inconvertible', 'controversial', 'incontrollable'],
      definitionDistractors: [
        'causing widespread disagreement and heated public debate',
        'unable to be exchanged or converted into another form',
        'subject to change depending on new evidence or arguments',
      ],
    }
  ),
  word('incumbent', '재임자', 10, 'noun',
    ['도전자', '신규', '후보', '지원자', '비재임자', '후계자', '신입', '경쟁자', '탈락자', '퇴직자'],
    tips({
      etymology: '라틴어 \'in(위에)\'과 \'cumbere(눕다/기대다)\'가 합쳐진 단어로, 특정 직책의 자리에 이미 \'기대어 앉아 있는\' 사람을 의미합니다.',
      visual: '대통령 집무실의 커다란 의자에 이미 주인이 되어 편안하게 앉아 있는 정치인의 모습을 떠올려 보세요.',
      soundAlike: '\'인컴번트\'에서 \'인(In)\'을 강조하여, 이미 조직 \'안에\' 들어와서 자리를 굳건히 지키고 있는 사람으로 연상하면 쉽습니다.',
      context: '주로 정치 뉴스나 선거 보도에서 현재 그 자리를 차지하고 있는 현직 의원이나 장관 등을 지칭할 때 자주 등장합니다.',
      synonymAntonym: '현재 자리를 점유한 officeholder와 비슷하며, 그 자리를 뺏으려는 도전자(challenger)와는 정반대의 위치에 있습니다.',
    }),
    {
      definition: 'A person who is currently holding a particular official post or position of authority.',
      synonyms: ['officeholder', 'occupant', 'functionary'],
      antonyms: ['challenger', 'candidate', 'applicant'],
      exampleSentences: [
        { en: 'The incumbent faced a tough challenge from a younger opponent during the debate.', ko: '그 재임자는 토론회 동안 젊은 상대 후보로부터 거센 도전에 직면했습니다.' },
        { en: 'It is often difficult to defeat an incumbent because they already have name recognition.', ko: '재임자들은 이미 대중적 인지도를 갖고 있기 때문에 그들을 이기는 것은 종종 어렵습니다.' },
      ],
      wordDistractors: ['encumbrance', 'incubate', 'recumbent'],
      definitionDistractors: [
        'a person who is running for office for the first time',
        'a burden or obligation that hinders progress',
        'something that is required or obligatory by law',
      ],
    }
  ),
  word('ineffable', '말로 표현할 수 없는', 10, 'adjective',
    ['설명 가능한', '보통의', '평범한', '언어화 가능한', '명확한', '단순한', '표현된', '이해하기 쉬운', '뻔한', '일상적인'],
    tips({
      etymology: '라틴어 in-(부정)과 effabilis(말할 수 있는)가 결합되어, 입 밖으로 낼 수 없을 만큼 벅차거나 거대하다는 의미를 가집니다.',
      visual: '경이로운 오로라를 목격하고 충격에 빠져 입을 다물지 못하는 여행자의 모습을 상상해 보세요.',
      soundAlike: '\'이네퍼블\'을 \'입이 내 안에서 붙어버릴\' 정도로 놀라운 상황이라고 연상하면 기억하기 쉽습니다.',
      context: '종교적 신비로움, 압도적인 자연경관, 혹은 가슴 벅찬 사랑의 감정을 묘사할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'indescribable과 유사하며, 명확히 정의 내릴 수 있는 definable과는 반대되는 개념입니다.',
    }),
    {
      definition: 'too great, sacred, or extreme to be described or expressed in speech',
      synonyms: ['indescribable', 'inexpressible', 'unutterable'],
      antonyms: ['describable', 'definable', 'expressible'],
      exampleSentences: [
        { en: 'The ineffable beauty of the sunset left the entire crowd in silence.', ko: '일몰의 말로 표현할 수 없는 아름다움에 모든 군중은 침묵에 빠졌다.' },
        { en: 'She felt an ineffable joy when she held her newborn baby for the first time.', ko: '그녀는 갓 태어난 아기를 처음 품에 안았을 때 말로 다 할 수 없는 기쁨을 느꼈다.' },
      ],
      wordDistractors: ['infallible', 'affable', 'indelible'],
      definitionDistractors: [
        'incapable of making mistakes or being wrong',
        'easy to speak to and friendly in conversation',
        'producing no noticeable effect or result whatsoever',
      ],
    }
  ),
  word('inexorable', '멈출 수 없는', 10, 'adjective',
    ['멈출 수 있는', '회피 가능한', '유연한', '양보하는', '막을 수 있는', '변덕스러운', '일시적인', '조절 가능한', '타협하는', '느슨한'],
    tips({
      etymology: '라틴어 in(not) + exorare(설득하다)의 결합으로, 아무리 간청하거나 설득해도 마음을 돌릴 수 없을 만큼 단호하고 냉혹함을 뜻합니다.',
      visual: '브레이크가 고장 난 채 거대한 산 아래로 질주하는 기차나, 한 치의 오차 없이 다가오는 파도를 상상해 보세요.',
      soundAlike: '이넥서러블 - \'이 녀석(inexor)은 불(able)가능해\'라고 외쳐도 멈추지 않고 계속 다가오는 상황을 떠올려 보세요.',
      context: '주로 시간의 흐름, 기술의 발전, 노화, 혹은 거대한 역사의 수레바퀴처럼 인간의 힘으로 막을 수 없는 현상을 설명할 때 사용됩니다.',
      synonymAntonym: 'relentless와 같이 끈질기게 이어지는 느낌을 주며, 반대로 노력에 의해 바뀔 수 있는 flexible과는 대조적입니다.',
    }),
    {
      definition: 'continuing without any possibility of being stopped, altered, or persuaded to change',
      synonyms: ['relentless', 'unstoppable', 'inevitable'],
      antonyms: ['preventable', 'avoidable', 'flexible'],
      exampleSentences: [
        { en: 'The inexorable progress of digital technology has changed how we live.', ko: '디지털 기술의 거침없는 발전은 우리의 삶의 방식을 바꾸어 놓았다.' },
        { en: 'The aging process is inexorable and affects every living creature.', ko: '노화 과정은 막을 수 없으며 모든 생명체에게 영향을 미친다.' },
      ],
      wordDistractors: ['inexplicable', 'inextricable', 'exorable'],
      definitionDistractors: [
        'impossible to explain or account for logically',
        'so closely linked that separation is impossible',
        'occurring at irregular and unpredictable intervals',
      ],
    }
  ),
  word('inscrutable', '헤아리기 어려운', 10, 'adjective',
    ['명확한', '투명한', '이해하기 쉬운', '솔직한', '드러난', '뻔한', '단순한', '직관적인', '해석 가능한', '공개된'],
    tips({
      etymology: '부정의 접두사 in-과 \'조사하다\'라는 뜻의 라틴어 scrutari가 결합되어, 아무리 조사해도 속을 알 수 없다는 의미를 가집니다.',
      visual: '어떤 감정도 읽을 수 없는 무표정한 포커페이스나 안개가 자욱해 속이 보이지 않는 숲을 상상해 보세요.',
      soundAlike: '\'인스크루터블\'에서 \'스크루(screw)\'로 꽉 조여져 있어 그 안을 절대 열어볼 수 없는 상자를 떠올리면 기억하기 쉽습니다.',
      context: '주로 사람의 표정이나 의도, 혹은 신비로운 자연의 현상처럼 도저히 논리적으로 설명하거나 파악하기 힘든 상황에 쓰입니다.',
      synonymAntonym: '수수께끼 같은 enigmatic과 비슷하며, 속이 훤히 들여다보이는 transparent와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'difficult or impossible to comprehend, investigate, or interpret due to being mysterious',
      synonyms: ['enigmatic', 'unfathomable', 'mysterious'],
      antonyms: ['transparent', 'obvious', 'clear'],
      exampleSentences: [
        { en: 'His inscrutable expression revealed nothing about how he felt.', ko: '그의 헤아리기 어려운 표정은 그가 어떻게 느끼는지에 대해 아무것도 드러내지 않았다.' },
        { en: 'The inscrutable motives behind the decision puzzled many experts.', ko: '그 결정 뒤에 숨겨진 헤아리기 어려운 동기는 많은 전문가를 당혹하게 했다.' },
      ],
      wordDistractors: ['inscribable', 'insufferable', 'insuperable'],
      definitionDistractors: [
        'too annoying or unpleasant to tolerate or endure',
        'easily understood and interpreted at first glance',
        'capable of being written or engraved on a surface',
      ],
    }
  ),
  word('insidious', '은근한', 10, 'adjective',
    ['노골적인', '솔직한', '직접적인', '명시적인', '공개적인', '투명한', '정직한', '명백한', '드러난', '확연한'],
    tips({
      etymology: '라틴어 \'insidiosus\'에서 유래했으며, \'in(안에) + sedere(앉다)\'가 결합되어 \'안에서 잠복하여 기회를 엿보는\'이라는 의미를 담고 있습니다.',
      visual: '겉으로는 잔잔해 보이지만 수면 아래에서 서서히 퍼져나가는 독소나 곰팡이의 이미지를 상상해 보세요.',
      soundAlike: '공포 영화 \'인시디어스\'를 떠올려 보세요. 악령이 눈에 띄지 않게 서서히 가족의 삶을 파괴하는 과정을 묘사합니다.',
      context: '주로 암과 같은 질병이나 부정적인 사회적 영향력이 겉으로 드러나지 않고 서서히 침투할 때 자주 쓰이는 형용사입니다.',
      synonymAntonym: '몰래 움직이는 stealthy와 유사하며, 대놓고 드러내는 overt와는 반대되는 개념입니다.',
    }),
    {
      definition: 'spreading or developing in a subtle and gradual manner but with very harmful consequences',
      synonyms: ['stealthy', 'treacherous', 'surreptitious'],
      antonyms: ['overt', 'obvious', 'straightforward'],
      exampleSentences: [
        { en: 'The disease is particularly dangerous because of its insidious progression.', ko: '그 질병은 증상이 은근히 서서히 진행되기 때문에 특히 위험하다.' },
        { en: 'High blood pressure is often called an insidious killer because it develops without obvious symptoms.', ko: '고혈압은 뚜렷한 증상 없이 발전하기 때문에 종종 은근한 살인마라고 불린다.' },
      ],
      wordDistractors: ['invidious', 'insipid', 'incendiary'],
      definitionDistractors: [
        'causing resentment through perceived unfair treatment',
        'happening suddenly and with immediately visible effects',
        'lacking any flavor, interest, or stimulating quality',
      ],
    }
  ),
  word('insipid', '맛없는', 10, 'adjective',
    ['풍미 있는', '맛있는', '생기 있는', '생동감 있는', '재미있는', '자극적인', '강렬한', '흥미로운', '매력적인', '활기찬'],
    tips({
      etymology: '라틴어 in-(부정)과 sapidus(맛이 나는)가 결합하여 맛이 느껴지지 않는 상태를 의미하게 되었습니다.',
      visual: '색깔도 향기도 없이 맹물에 불어 터진 하얀 국수를 떠올려 보세요.',
      soundAlike: '\'인시피드\'를 \'입이 심심해\'와 연결하여, 아무런 맛이 느껴지지 않아 입안이 심심한 상황을 연상하세요.',
      context: '음식의 간이 안 맞을 때뿐만 아니라, 개성 없는 사람이나 지루한 강연을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '특징 없는 bland와 비슷하며, 톡 쏘는 맛이나 흥미가 있는 piquant와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Lacking in qualities that interest, stimulate, or challenge, or having a very weak and uninteresting taste.',
      synonyms: ['bland', 'vapid', 'unimaginative'],
      antonyms: ['flavorful', 'exciting', 'piquant'],
      exampleSentences: [
        { en: 'The hospital food was insipid, tasting watery and completely flat.', ko: '병원의 음식은 맛이 없어서 묽고 완전히 밋밋했다.' },
        { en: 'I found the plot of the movie rather insipid, lacking any real spark.', ko: '나는 그 영화의 줄거리가 다소 맛없고 아무런 재미가 없다고 느꼈다.' },
      ],
      wordDistractors: ['inspired', 'incipient', 'insidious'],
      definitionDistractors: [
        'filled with creative energy and artistic motivation',
        'having a sharp and pleasantly stimulating taste',
        'spreading harmfully in a gradual and hidden way',
      ],
    }
  ),
  word('intransigent', '타협하지 않는', 10, 'adjective',
    ['유연한', '양보하는', '협조적인', '수용적인', '타협하는', '온건한', '순응하는', '너그러운', '말 잘 듣는', '가변적인'],
    tips({
      etymology: '라틴어 in-(부정)과 transigere(합의하다)가 결합되어, 어떤 합의점도 찾으려 하지 않는 상태를 의미합니다.',
      visual: '거센 파도가 몰아쳐도 꿈쩍도 하지 않고 제자리를 지키는 거대한 절벽을 상상해 보세요.',
      soundAlike: '안(In)으로 들어가서 전(trans)혀 나올 생각을 하지 않는 고집불통의 모습을 연상해 보세요.',
      context: '주로 정치적 협상이나 비즈니스 담판에서 자신의 원칙을 절대 굽히지 않는 완고한 인물을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '타협 없는 adamant와 유사하며, 상황에 따라 잘 변하는 flexible과는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'refusing to abandon an extreme position or attitude despite persuasion or requests from others',
      synonyms: ['uncompromising', 'adamant', 'obdurate'],
      antonyms: ['flexible', 'compliant', 'yielding'],
      exampleSentences: [
        { en: 'The intransigent government refused to negotiate with the protesters.', ko: '타협을 거부하는 정부는 시위대와 협상하기를 거부했다.' },
        { en: 'He has an intransigent reputation in business dealings, never willing to compromise.', ko: '그는 사업 거래에서 절대 타협하지 않는 평판을 가지고 있다.' },
      ],
      wordDistractors: ['transient', 'transparent', 'intransitive'],
      definitionDistractors: [
        'lasting only for a short period of time',
        'willing to listen to other viewpoints and find middle ground',
        'moving from one place or state to another frequently',
      ],
    }
  ),
  word('inundate', '범람시키다', 10, 'verb',
    ['비우다', '말리다', '부족하게 하다', '털어내다', '고갈시키다', '제거하다', '줄이다', '빼내다', '건조시키다', '결핍되다'],
    tips({
      etymology: '라틴어 \'in(안으로)\'과 \'unda(물결)\'가 결합되어 \'물결이 안으로 밀려들다\'라는 어원을 가집니다.',
      visual: '책상 위에 서류 더미가 파도처럼 밀려와 사람을 완전히 덮어버리는 모습을 상상해 보세요.',
      soundAlike: '\'이넌데이트\'를 \'이런! 데이터(data)가 쏟아지네\'로 기억하면 감당 못 할 양이 밀려오는 느낌을 살릴 수 있습니다.',
      context: '실제 홍수로 지역이 침수될 때뿐만 아니라, 처리하기 힘든 업무나 질문이 쏟아질 때 자주 사용됩니다.',
      synonymAntonym: 'overwhelm(압도하다)과 유사하며, 물을 모두 빼내어 비우는 drain과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to overwhelm someone with a huge quantity of things to be dealt with, or to flood an area with water',
      synonyms: ['overwhelm', 'flood', 'swamp'],
      antonyms: ['drain', 'empty', 'deplete'],
      exampleSentences: [
        { en: 'The customer service department was inundated with thousands of complaints after the system failure.', ko: '시스템 장애 이후 고객 서비스 부서에는 수천 건의 불만 사항이 밀려들었다.' },
        { en: 'Rising river levels threaten to inundate the low-lying areas of the city during the monsoon season.', ko: '장마철 동안 상승하는 강 수위는 도시의 저지대 지역을 침수시킬 위협이 있다.' },
      ],
      wordDistractors: ['innuendo', 'undulate', 'inaugurate'],
      definitionDistractors: [
        'to formally begin or introduce a new system or leader',
        'to gradually reduce the water level in a flooded area',
        'to make an indirect or suggestive remark about someone',
      ],
    }
  ),
  word('invective', '비난', 10, 'noun',
    ['칭찬', '찬사', '축복', '축하', '찬미', '사과', '격려', '지지', '존경', '숭배'],
    tips({
      etymology: '라틴어 invectivus에서 유래하며, in(안으로/대항하여)과 vehere(나르다)가 결합되어 말로 공격을 실어 나르는 것을 뜻합니다.',
      visual: '화가 난 사람의 입에서 날카로운 화살이나 가시 돋친 말들이 상대방을 향해 쏟아지는 장면을 상상해 보세요.',
      soundAlike: '인벡티브... \'입\'에서 \'백\' 개의 \'티\'(가시)가 튀어나오는 듯한 독설과 욕설을 떠올려 보세요.',
      context: '단순한 비판(criticism) 수준을 넘어선, 매우 거칠고 모욕적인 언사나 저주에 가까운 욕설을 의미할 때 주로 쓰입니다.',
      synonymAntonym: '유사어로는 vituperation(독설)이 있으며, 반대말로는 eulogy(찬사)가 자주 쓰입니다.',
    }),
    {
      definition: 'insulting, abusive, or highly critical language used to express blame or deep dissatisfaction',
      synonyms: ['vituperation', 'abuse', 'denunciation'],
      antonyms: ['eulogy', 'praise', 'compliment'],
      exampleSentences: [
        { en: 'The politician\'s speech was filled with harsh invective directed at his opponent.', ko: '그 정치인의 연설은 상대방을 향한 거친 비난과 독설로 가득 찼다.' },
        { en: 'He let out a stream of angry invective when he realized he had been cheated.', ko: '그는 자신이 속았다는 것을 깨닫고 분노 섞인 비난의 말을 쏟아냈다.' },
      ],
      wordDistractors: ['inventive', 'evocative', 'incentive'],
      definitionDistractors: [
        'a reward or motivation offered to encourage action',
        'a creative and original approach to problem solving',
        'a formal written invitation to attend an official event',
      ],
    }
  ),
  word('inveterate', '고질적인', 10, 'adjective',
    ['일시적인', '가벼운', '새로 시작한', '우발적인', '가끔의', '단기적인', '초보의', '변화무쌍한', '우연한', '잠깐의'],
    tips({
      etymology: 'in(안에) + vetus(오래된)가 합쳐져 \'오래되어 뿌리 깊은\'이라는 뜻이 되었습니다.',
      visual: '땅속 깊이 뿌리를 내려 도저히 뽑히지 않는 오래된 나무를 떠올려 보세요.',
      soundAlike: '인베터릿... \'인\'생의 \'베터\'랑(veteran)처럼 오래된 습관을 가진 사람.',
      context: '주로 거짓말, 도박 등 나쁜 습관이 몸에 배어 고치기 힘들 때 자주 씁니다.',
      synonymAntonym: '만성적인 chronic과 유의어이며, 가끔 일어나는 occasional과 반대됩니다.',
    }),
    {
      definition: 'having a particular habit, activity, or interest that is long-established and unlikely to change',
      synonyms: ['habitual', 'chronic', 'entrenched'],
      antonyms: ['occasional', 'transient', 'incipient'],
      exampleSentences: [
        { en: 'He is such an inveterate gambler that he cannot walk past a casino without going in.', ko: '그는 너무나 고질적인 도박꾼이라 카지노를 그냥 지나치지 못한다.' },
        { en: 'The politician faced criticism for being an inveterate skeptic of any new environmental policies.', ko: '그 정치인은 모든 새로운 환경 정책에 대해 고질적인 회의론자라는 비판에 직면했다.' },
      ],
      wordDistractors: ['invertebrate', 'inverted', 'investigate'],
      definitionDistractors: [
        'recently acquired and still new or unfamiliar',
        'turned upside down or reversed in position',
        'occurring only once without any chance of repeating',
      ],
    }
  ),
  word('irascible', '성마른', 10, 'adjective',
    ['침착한', '온화한', '인내심 있는', '냉정한', '부드러운', '차분한', '평온한', '너그러운', '유순한', '친절한'],
    tips({
      etymology: '라틴어 ira(분노)에서 유래하여 \'화를 잘 내는 성질\'을 뜻합니다.',
      visual: '작은 불꽃만 튀어도 바로 터져버리는 다이너마이트 같은 사람을 상상해 보세요.',
      soundAlike: '이래시블... \'이래\'도 화내고 \'저래\'도 화를 내는 성급하고 까칠한 성격.',
      context: '성격이 불같아서 주변 사람들이 항상 조심스럽게 눈치를 보게 만드는 사람을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '짜증을 잘 내는 irritable과 비슷하고, 마음이 평온한 placid와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having or showing a tendency to be easily angered or quickly lose one\'s temper',
      synonyms: ['hot-tempered', 'irritable', 'choleric'],
      antonyms: ['calm', 'even-tempered', 'placid'],
      exampleSentences: [
        { en: 'The irascible coach often yelled at the players for minor mistakes.', ko: '성마른 코치는 사소한 실수에도 선수들에게 자주 소리를 질렀다.' },
        { en: 'Dealing with such an irascible neighbor requires a lot of patience.', ko: '그렇게 성마른 이웃을 상대하는 데는 많은 인내심이 필요하다.' },
      ],
      wordDistractors: ['erasable', 'irresolute', 'iridescent'],
      definitionDistractors: [
        'able to be removed or wiped clean without a trace',
        'having a calm and patient temperament under pressure',
        'feeling a strong longing or desire for something distant',
      ],
    }
  ),
  word('juxtapose', '나란히 놓다', 10, 'verb',
    ['분리하다', '떼어놓다', '혼합하다', '섞다', '겹치다', '멀리하다', '흩뜨리다', '숨기다', '삭제하다', '무시하다'],
    tips({
      etymology: '라틴어 juxta(가까이)와 프랑스어 poser(놓다)가 결합되어 \'가까이 두다\'라는 의미를 형성했습니다.',
      visual: '전시회에서 고전 회화와 현대 미술 작품을 한 벽면에 나란히 걸어둔 모습을 상상해 보세요.',
      soundAlike: '\'즉석\'에서 \'포즈\'를 취하게 한 뒤 두 사람을 나란히 세워 비교하는 장면을 떠올려 보세요.',
      context: '단순히 옆에 두는 것뿐만 아니라, 두 대상의 차이를 극명하게 보여주기 위한 의도가 있을 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 위치에 놓는 collocate와 유의어이며, 멀리 떨어뜨리는 detach와 반대됩니다.',
    }),
    {
      definition: 'to place different things close together, especially in order to create an interesting effect or to show how they are different',
      synonyms: ['collocate', 'contrast', 'pair'],
      antonyms: ['separate', 'detach', 'disconnect'],
      exampleSentences: [
        { en: 'The exhibition will juxtapose modern sculptures with ancient artifacts to show the evolution of art.', ko: '이번 전시회는 예술의 진화를 보여주기 위해 현대 조각품과 고대 유물을 나란히 놓을 것입니다.' },
        { en: 'The director likes to juxtapose scenes of extreme wealth and poverty to highlight social inequality.', ko: '감독은 사회적 불평등을 강조하기 위해 극심한 부와 가난의 장면을 나란히 배치하는 것을 좋아합니다.' },
      ],
      wordDistractors: ['transpose', 'superimpose', 'interpose'],
      definitionDistractors: [
        'to layer one image or element on top of another',
        'to swap the positions of two items in a sequence',
        'to blend or merge different elements into a single whole',
      ],
    }
  ),
  word('lachrymose', '눈물 많은', 10, 'adjective',
    ['명랑한', '기쁜', '밝은', '유쾌한', '환한', '활기찬', '즐거운', '희망찬', '웃음기있는', '쾌활한'],
    tips({
      etymology: '라틴어 lacrima(눈물)에서 유래하여 눈물이 가득 찬 상태를 의미합니다.',
      visual: '슬픈 영화를 보며 손수건으로 계속 눈물을 훔치는 관객의 모습.',
      soundAlike: '모차르트 레퀴엠의 \'라크리모사(Lacrimosa)\' 선율이 주는 구슬픈 느낌을 떠올려 보세요.',
      context: '단순히 슬픈 것을 넘어, 눈물을 잘 흘리거나 눈물을 자아내는 비극적인 상황에 쓰입니다.',
      synonymAntonym: 'tearful과 의미가 통하며, 매우 기쁘고 환희에 찬 jubilant와는 반대되는 개념입니다.',
    }),
    {
      definition: 'tending to weep easily or likely to induce sorrow and crying',
      synonyms: ['tearful', 'weepy', 'mournful'],
      antonyms: ['cheerful', 'joyful', 'jubilant'],
      exampleSentences: [
        { en: 'The lachrymose music played during the funeral moved everyone to tears.', ko: '장례식 동안 연주된 슬픈 음악은 모든 이들의 눈시울을 붉게 만들었다.' },
        { en: 'She became lachrymose whenever she thought about her departed childhood pet.', ko: '그녀는 떠나보낸 어린 시절 반려동물을 생각할 때마다 눈물을 흘리곤 했다.' },
      ],
      wordDistractors: ['lachrymal', 'lacrosse', 'morose'],
      definitionDistractors: [
        'feeling sullen and ill-tempered without outward emotion',
        'relating to a competitive team sport played with sticks',
        'producing a sweet or pleasant fragrance when burned',
      ],
    }
  ),
  word('laconic', '말수 적은', 10, 'adjective',
    ['말이많은', '수다스러운', '장황한', '다변의', '설명적인', '장황함', '수다', '만담', '장문', '웅변적인'],
    tips({
      etymology: '말을 아끼기로 유명했던 고대 그리스 스파르타 지역의 사람들을 일컫는 \'Lakōn\'에서 유래했습니다.',
      visual: '질문에 딱 한 마디로만 대답하고 입을 닫는 무뚝뚝한 전문가의 모습을 상상해 보세요.',
      soundAlike: '\'라코닉\'을 \'나 코(입) 닉(닫음)\'으로 연상하여 입을 꾹 닫고 말을 아끼는 모습을 기억하세요.',
      context: '비즈니스 협상이나 군대 보고처럼 불필요한 수식어 없이 핵심만 짧게 전달해야 하는 상황에 쓰입니다.',
      synonymAntonym: 'terse와 의미가 통하며, 말이 너무 많아 지루한 느낌을 주는 verbose와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'using very few words to express what you mean, often in a way that seems brief or even rude',
      synonyms: ['terse', 'concise', 'succinct'],
      antonyms: ['verbose', 'loquacious', 'garrulous'],
      exampleSentences: [
        { en: 'The CEO is famous for his laconic emails that rarely exceed five words.', ko: '그 CEO는 다섯 단어를 거의 넘지 않는 간결한 이메일로 유명하다.' },
        { en: 'Despite the complex situation, his only response was a laconic nod.', ko: '복잡한 상황임에도 불구하고, 그의 유일한 반응은 짧은 고개 끄덕임뿐이었다.' },
      ],
      wordDistractors: ['draconic', 'sardonic', 'platonic'],
      definitionDistractors: [
        'expressing dry, mocking humor with a cynical tone',
        'speaking at great length about unimportant matters',
        'relating to a close but non-romantic relationship',
      ],
    }
  ),
];
