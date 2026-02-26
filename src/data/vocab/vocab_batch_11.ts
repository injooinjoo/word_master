import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch11: VocabItem[] = [
  word('convey', '전달하다', 5, 'verb',
    ['숨기다', '은폐하다', '차단하다', '억누르다', '거부하다', '무시하다', '받지 않다', '거절하다', '보류하다', '가로막다'],
    tips({
      etymology: '라틴어 con(함께)과 via(길)가 합쳐져 \'함께 길을 따라 실어 나르다\'라는 의미에서 유래했습니다.',
      visual: '택배 기사가 소중한 물건을 목적지까지 안전하게 배달하는 모습을 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'컨베이어 벨트(conveyor belt)\'를 떠올리면 물건을 한 곳에서 다른 곳으로 옮기는 이미지가 쉽게 연상됩니다.',
      context: '단순한 물건뿐만 아니라 생각, 감정, 정보를 말이나 행동으로 표현하여 상대방에게 알릴 때 주로 쓰입니다.',
      synonymAntonym: '생각을 나누는 communicate와 비슷하지만, 정보를 물리적으로나 추상적으로 \'실어 나른다\'는 뉘앙스가 강하며 반대말로는 정보를 쥐고 내놓지 않는 withhold가 있습니다.',
    }),
    {
      definition: 'to transport a physical object or to make ideas and feelings known to others',
      synonyms: ['communicate', 'transmit', 'impart'],
      antonyms: ['withhold', 'conceal', 'hide'],
      exampleSentences: [
        { en: 'Her smile conveyed more than words ever could.', ko: '그녀의 미소는 그 어떤 말보다 더 많은 것을 전달했다.' },
        { en: 'The report failed to convey the urgency of the situation.', ko: '그 보고서는 상황의 긴박함을 제대로 전달하지 못했다.' },
      ],
      wordDistractors: ['convoy', 'survey', 'convex'],
      definitionDistractors: [
        'to physically carry an object from one location to a distant storage facility',
        'to formally reject a proposal or suggestion made by another party',
        'to arrange items in a specific sequential order for display purposes',
      ],
    }
  ),
  word('coordinate', '조정하다', 5, 'verb',
    ['혼란시키다', '방치하다', '분산하다', '갈등시키다', '흐트러뜨리다', '해체하다', '분리하다', '무시하다', '방해하다', '뒤섞다'],
    tips({
      etymology: '접두사 co(함께)와 ordin(순서/배열)이 결합되어 \'여러 요소를 순서에 맞게 함께 정렬하다\'라는 의미를 가집니다.',
      visual: '오케스트라 지휘자가 흩어져 있는 악기 소리들을 하나로 조화롭게 모으는 장면을 상상해 보세요.',
      soundAlike: '옷을 잘 맞춰 입는 것을 뜻하는 \'코디(Coordi)\'를 떠올리면 여러 요소를 조화롭게 맞춘다는 느낌을 쉽게 이해할 수 있습니다.',
      context: '비즈니스 프로젝트나 대규모 행사처럼 여러 부서의 협력이 필요한 상황에서 각자의 역할을 맞출 때 주로 사용합니다.',
      synonymAntonym: 'organize, synchronize와 같은 유의어는 정돈된 느낌을 주며, disorganize, confuse 같은 반의어는 엉망이 된 상태를 뜻합니다.',
    }),
    {
      definition: 'to bring different elements or people into an efficient relationship or to organize a complex task so that it runs smoothly',
      synonyms: ['organize', 'synchronize', 'harmonize'],
      antonyms: ['disorganize', 'confuse', 'disturb'],
      exampleSentences: [
        { en: 'We need to coordinate our schedules before the meeting.', ko: '회의 전에 우리들의 일정을 조정해야 합니다.' },
        { en: 'She coordinated the rescue efforts across three departments.', ko: '그녀는 세 부서에 걸친 구호 활동을 조정했습니다.' },
      ],
      wordDistractors: ['coronate', 'correlate', 'cooperate'],
      definitionDistractors: [
        'to assign a numerical rank or position to individual items in a list',
        'to separate tasks into independent units that do not interact with each other',
        'to formally approve a plan without consulting other team members',
      ],
    }
  ),
  word('core', '핵심', 5, 'noun',
    ['표면', '주변', '외곽', '주변부', '부수', '부가', '부산물', '말단', '외부', '변두리'],
    tips({
      etymology: '라틴어 cor(심장)에서 유래하여, 생명이나 사물의 가장 중심이 되는 부분을 뜻합니다.',
      visual: '사과를 반으로 쪼갰을 때 씨앗이 들어있는 가장 안쪽의 중심부를 상상해 보세요.',
      soundAlike: '운동할 때 몸의 중심 근육을 \'코어 근육\'이라고 부르는 것을 기억하세요.',
      context: '문제의 본질이나 가치관의 중심 등 추상적인 중요성을 강조할 때 자주 사용됩니다.',
      synonymAntonym: '동의어는 center, essence, heart이며, 반의어는 periphery, exterior, surface입니다.',
    }),
    {
      definition: 'the central, innermost, or most essential part of something',
      synonyms: ['center', 'essence', 'heart'],
      antonyms: ['periphery', 'exterior', 'surface'],
      exampleSentences: [
        { en: 'Honesty is at the core of their friendship.', ko: '정직함이 그들의 우정의 핵심이다.' },
        { en: 'The core of the problem is lack of funding.', ko: '문제의 핵심은 자금 부족이다.' },
      ],
      wordDistractors: ['corps', 'cord', 'chore'],
      definitionDistractors: [
        'the outermost protective layer or shell of a physical structure',
        'a supplementary section added at the end of a document or report',
        'a temporary gathering of people for a brief social event',
      ],
    }
  ),
  word('corporate', '기업의', 5, 'adjective',
    ['개인적', '사적', '국가적', '공공의', '비영리', '소규모', '가정의', '독립적', '자영업', '민간의'],
    tips({
      etymology: '라틴어 corpus(몸)에서 유래하여, 여러 사람이 모여 하나의 \'몸(법인)\'처럼 움직이는 조직을 뜻합니다.',
      visual: '수많은 직원이 정장을 입고 거대한 빌딩 안에서 일하는 대기업의 이미지를 떠올려 보세요.',
      soundAlike: '회사나 법인을 뜻하는 \'코퍼레이션(Corporation)\'의 형용사 형태입니다.',
      context: '개인적인 일이 아닌, 회사 차원의 정책이나 문화를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '동의어는 business, commercial, company이며, 반의어는 personal, individual, private입니다.',
    }),
    {
      definition: 'relating to a large company, group, or organization as a single unit',
      synonyms: ['business', 'commercial', 'company'],
      antonyms: ['personal', 'individual', 'private'],
      exampleSentences: [
        { en: 'The new corporate policy takes effect next month.', ko: '새로운 기업 정책이 다음 달에 시행된다.' },
        { en: 'She climbed the corporate ladder quickly.', ko: '그녀는 기업에서 빠르게 승진했다.' },
      ],
      wordDistractors: ['corporal', 'cooperate', 'correlate'],
      definitionDistractors: [
        'relating to a small informal group of friends or hobby enthusiasts',
        'describing an activity that is done alone without any organizational support',
        'pertaining to government-run institutions funded entirely by taxpayers',
      ],
    }
  ),
  word('correspond', '일치하다', 5, 'verb',
    ['어긋나다', '모순되다', '차이 나다', '반대하다', '배치되다', '틀리다', '다르다', '충돌하다', '이탈하다', '거부하다'],
    tips({
      etymology: '함께를 뜻하는 cor-와 응답하다를 뜻하는 respond가 결합되어, 서로에게 맞게 응답하며 조화를 이룬다는 의미에서 유래했습니다.',
      visual: '두 개의 톱니바퀴가 빈틈없이 맞물려 돌아가거나, 퍼즐 조각 두 개가 완벽하게 결합되는 장면을 그려보세요.',
      soundAlike: '해외 소식을 전하는 \'특파원\'을 correspondent라고 부르는데, 이는 현지 상황과 일치하는 정보를 보내주는 사람이라는 뜻과 연결됩니다.',
      context: '데이터 수치가 예상과 맞아떨어지거나, 누군가의 말과 행동이 일치할 때, 혹은 서신을 주고받을 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 뜻으로는 match, agree, coincide가 있으며, 반대되는 뜻으로는 differ, disagree, clash가 있습니다.',
    }),
    {
      definition: 'to be in agreement with, match, or have a close similarity to something else',
      synonyms: ['match', 'agree', 'coincide'],
      antonyms: ['differ', 'disagree', 'clash'],
      exampleSentences: [
        { en: 'The witness account corresponds with the video evidence.', ko: '목격자의 진술은 비디오 증거와 일치합니다.' },
        { en: 'His actions did not correspond to his words.', ko: '그의 행동은 그가 했던 말과 일치하지 않았습니다.' },
      ],
      wordDistractors: ['corridor', 'corroborate', 'corrode'],
      definitionDistractors: [
        'to formally respond to a legal notice or official complaint in writing',
        'to intentionally contradict a statement made by someone in authority',
        'to arrange physical objects in parallel rows for easier counting',
      ],
    }
  ),
  word('council', '위원회', 5, 'noun',
    ['개인', '단독', '임의', '무체계', '분산', '해체', '무조직', '독단', '개인주의', '군중'],
    tips({
      etymology: '라틴어 concilium에서 유래하여 \'함께 불러 모아 의논하는 모임\'을 의미합니다.',
      visual: '둥근 탁자에 둘러앉아 지역 사회의 문제를 토론하고 결정하는 위원들의 모습을 떠올려 보세요.',
      soundAlike: '상담을 뜻하는 Counsel과 발음이 비슷하지만, Council은 \'회의체/집단\'을 뜻합니다.',
      context: '시의회, 학생회, 또는 특정 목적을 위해 선출된 전문가 집단을 가리킬 때 씁니다.',
      synonymAntonym: '동의어는 committee, board, assembly이며, 반의어는 individual, crowd, mob입니다.',
    }),
    {
      definition: 'a group of people chosen to give advice, manage affairs, or make decisions',
      synonyms: ['committee', 'board', 'assembly'],
      antonyms: ['individual', 'crowd', 'mob'],
      exampleSentences: [
        { en: 'The council voted unanimously to approve the budget.', ko: '위원회는 만장일치로 예산 승인에 투표했다.' },
        { en: 'She was elected to the student council.', ko: '그녀는 학생회에 선출되었다.' },
      ],
      wordDistractors: ['counsel', 'consul', 'cancel'],
      definitionDistractors: [
        'a private meeting between two individuals to resolve a personal matter',
        'an official document granting permission to conduct business abroad',
        'a public announcement made by a single authority figure without debate',
      ],
    }
  ),
  word('counter', '반대하다', 5, 'verb',
    ['동의하다', '순응하다', '지지하다', '받아들이다', '복종하다', '합세하다', '찬성하다', '수용하다', '돕다', '허가하다'],
    tips({
      etymology: '라틴어 contra(반대로)에서 유래하여 상대방의 움직임에 반대되는 행동을 취하는 것을 뜻합니다.',
      visual: '권투 경기에서 상대의 공격을 피함과 동시에 반격을 날리는 \'카운터 펀치\' 장면을 상상해 보세요.',
      soundAlike: '상점의 계산대(counter)와 철자가 같지만, 동사로 쓰일 때는 반격이나 반대 의견을 내는 상황을 떠올리세요.',
      context: '토론에서 상대방의 논리를 깨뜨리거나, 경쟁자의 전략에 대응하는 조치를 취할 때 주로 사용합니다.',
      synonymAntonym: '반박하는 oppose와 rebut이 동의어라면, 의견을 같이하는 agree와 support는 반의어입니다.',
    }),
    {
      definition: 'to act in opposition to or to offer an opposing opinion or action',
      synonyms: ['oppose', 'rebut', 'contradict'],
      antonyms: ['agree', 'support', 'accept'],
      exampleSentences: [
        { en: 'She countered his criticism with facts.', ko: '그녀는 사실을 근거로 그의 비판에 반박했다.' },
        { en: 'The defense countered the prosecution\'s argument.', ko: '변호인은 검찰의 주장에 맞서 대응했다.' },
      ],
      wordDistractors: ['encounter', 'contour', 'conjure'],
      definitionDistractors: [
        'to carefully measure and record the number of items in a collection',
        'to place physical objects on a flat raised surface for display',
        'to silently acknowledge a point without offering any verbal response',
      ],
    }
  ),
  word('criteria', '기준', 5, 'noun',
    ['임의', '무기준', '혼란', '불규칙', '무차별', '무분별', '주관적', '변동', '우연', '무질서'],
    tips({
      etymology: '그리스어 krinein(판단하다/구별하다)에서 유래하여 판단의 척도를 의미합니다.',
      visual: '오디션 심사위원이 채점표에 적힌 항목들을 하나씩 체크하며 점수를 매기는 모습을 떠올려 보세요.',
      soundAlike: '단수형은 Criterion이고, 복수형이 Criteria입니다. 여러 가지 \'기준들\'을 말할 때 주로 씁니다.',
      context: '합격 여부, 품질 평가, 선택의 근거 등 공정한 평가가 필요한 상황에서 자주 등장합니다.',
      synonymAntonym: '동의어는 standards, benchmarks, measures이며, 반의어는 randomness, chance, fancy입니다.',
    }),
    {
      definition: 'the rules or standards by which something is judged or decided',
      synonyms: ['standards', 'benchmarks', 'measures'],
      antonyms: ['randomness', 'chance', 'fancy'],
      exampleSentences: [
        { en: 'Candidates must meet all the criteria to be considered.', ko: '후보자는 고려되려면 모든 기준을 충족해야 한다.' },
        { en: 'The selection criteria were clearly defined.', ko: '선발 기준이 명확히 정의되어 있었다.' },
      ],
      wordDistractors: ['critter', 'critique', 'creditor'],
      definitionDistractors: [
        'the final results or outcomes of an evaluation process',
        'a written summary of findings presented after an investigation',
        'personal opinions expressed informally without any supporting evidence',
      ],
    }
  ),
  word('critical', '중요한', 5, 'adjective',
    ['하찮은', '무관한', '부수적인', '사소한', '경미한', '가벼운', '무의미한', '형식적인', '무관심한', '무시해도되는'],
    tips({
      etymology: '그리스어 kritikos(판단하는)에서 유래하여 어떤 상황의 성패를 가르는 결정적인 지점을 뜻합니다.',
      visual: '수술실 문 앞에 켜진 빨간색 \'수술 중\' 경고등이나 폭발 직전의 시한폭탄 게이지를 상상해 보세요.',
      soundAlike: '게임에서 결정적인 타격을 입힐 때 쓰는 \'크리티컬 히트\'라는 표현을 떠올리면 쉽습니다.',
      context: '단순히 중요한 수준을 넘어, 실패하면 큰일이 나는 위기 상황이나 필수적인 단계에 주로 사용됩니다.',
      synonymAntonym: 'crucial, vital은 생존에 필수적인 느낌을 주며, trivial은 아주 사소해서 신경 쓸 필요 없다는 뜻입니다.',
    }),
    {
      definition: 'extremely important or necessary for the success or failure of something',
      synonyms: ['crucial', 'vital', 'essential'],
      antonyms: ['trivial', 'minor', 'insignificant'],
      exampleSentences: [
        { en: 'It is critical that we finish this report before the deadline.', ko: '마감 기한 전에 이 보고서를 끝내는 것이 매우 중요하다.' },
        { en: 'The patient remains in critical condition after the surgery.', ko: '그 환자는 수술 후 여전히 위독한 상태에 있다.' },
      ],
      wordDistractors: ['clinical', 'criminal', 'cryptic'],
      definitionDistractors: [
        'expressing strong praise or enthusiastic approval of someone\'s work',
        'relating to a routine procedure that requires no special attention',
        'describing something that is optional and can be easily postponed',
      ],
    }
  ),
  word('crucial', '결정적인', 5, 'adjective',
    ['부수적인', '사소한', '선택적인', '임의의', '무관한', '경미한', '가벼운', '형식적인', '부가적인', '부대적인'],
    tips({
      etymology: '라틴어 crux(십자가)에서 유래하여, 길이 갈라지는 \'교차로\'처럼 중요한 결정의 순간을 의미합니다.',
      visual: '인생의 방향을 결정해야 하는 중요한 갈림길 앞에 서 있는 모습입니다.',
      soundAlike: '크루셜 - \'크루(Crew)\'들이 \'셜(설)\' 수 있게 만드는 결정적인 기반이라고 외워보세요.',
      context: '성공과 실패를 가르는 핵심적인 요소나 단계를 설명할 때 자주 사용됩니다.',
      synonymAntonym: 'critical과 비슷하지만, 결과에 미치는 \'결정적\' 영향력에 더 초점이 맞춰져 있습니다.',
    }),
    {
      definition: 'extremely important because many other things depend on it; necessary for a result to be achieved',
      synonyms: ['decisive', 'pivotal', 'key'],
      antonyms: ['minor', 'secondary', 'optional'],
      exampleSentences: [
        { en: 'This was a crucial moment in the negotiations.', ko: '이것은 협상에서 결정적인 순간이었다.' },
        { en: 'Getting enough sleep is crucial for your health.', ko: '충분한 수면은 건강에 결정적으로 중요하다.' },
      ],
      wordDistractors: ['cruel', 'crude', 'crusade'],
      definitionDistractors: [
        'temporarily useful but easily replaced by an alternative approach',
        'pleasing to observe but having no practical significance',
        'involving a large number of participants without any clear purpose',
      ],
    }
  ),
  word('cultivate', '경작하다', 5, 'verb',
    ['방치하다', '황폐화하다', '무시하다', '파괴하다', '버리다', '소홀히 하다', '해고하다', '잘라내다', '제거하다', '방임하다'],
    tips({
      etymology: '라틴어 colere(경작하다)에서 유래하여 땅을 일구고 식물을 정성껏 기르는 행위를 뜻합니다.',
      visual: '농부가 어린 새싹이 잘 자라도록 흙을 고르고 정성껏 물을 주며 보살피는 장면을 상상하세요.',
      soundAlike: '컬티베이트 - \'컬처(Culture, 문화)\'와 어원이 같아 마음의 밭을 갈아 교양을 쌓는 느낌과 연결됩니다.',
      context: '단순히 농작물을 재배하는 것뿐만 아니라 인맥을 넓히거나 특정 기술, 태도를 공들여 기를 때 자주 쓰입니다.',
      synonymAntonym: 'nurture는 영양을 주어 키우는 긍정적 의미이며, neglect는 돌보지 않고 내버려 두는 반대 의미입니다.',
    }),
    {
      definition: 'to prepare and use land for crops, or to acquire and develop a quality, sentiment, or skill through care and study',
      synonyms: ['nurture', 'foster', 'develop'],
      antonyms: ['neglect', 'abandon', 'destroy'],
      exampleSentences: [
        { en: 'She cultivated a love of music in her children.', ko: '그녀는 자녀들에게 음악에 대한 사랑을 키워주었다.' },
        { en: 'He has cultivated many useful contacts over the years.', ko: '그는 여러 해에 걸쳐 많은 유용한 인맥을 쌓았다.' },
      ],
      wordDistractors: ['captivate', 'culminate', 'calculate'],
      definitionDistractors: [
        'to harvest mature crops from a field at the end of a growing season',
        'to permanently remove unwanted vegetation from a garden area',
        'to store agricultural products in a controlled environment for later sale',
      ],
    }
  ),
  word('cumulative', '누적된', 5, 'adjective',
    ['단발적인', '일회성의', '일시적인', '개별적인', '분산된', '감소하는', '해산된', '소멸하는', '감쇠된', '단절된'],
    tips({
      etymology: '라틴어 cumulare(쌓다)에서 유래하여 물건이 더미로 쌓이는 것을 의미합니다.',
      visual: '눈덩이가 굴러가며 점점 커지는 \'스노우볼 효과\'를 상상해 보세요.',
      soundAlike: '큐뮬러티브 - \'큐(Q)\'가 \'물(Mul)\'처럼 계속 쌓여가는 이미지를 떠올려보세요.',
      context: '이자, 피로, 통계 데이터처럼 시간이 흐를수록 합쳐져서 커지는 양을 나타냅니다.',
      synonymAntonym: 'accumulated는 \'축적된\' 상태를, discrete는 \'분리된\' 개별 상태를 뜻합니다.',
    }),
    {
      definition: 'increasing or growing by successive additions or gradual accumulation',
      synonyms: ['accumulated', 'collective', 'aggregate'],
      antonyms: ['discrete', 'individual', 'separate'],
      exampleSentences: [
        { en: 'The cumulative impact of small changes was enormous.', ko: '작은 변화들의 누적 효과는 엄청났다.' },
        { en: 'Students take a cumulative final exam at the end of the year.', ko: '학생들은 연말에 누적된 최종 시험을 본다.' },
      ],
      wordDistractors: ['communicative', 'qualitative', 'speculative'],
      definitionDistractors: [
        'occurring only once without any connection to previous events',
        'decreasing steadily over time due to natural erosion or decay',
        'distributed evenly across all members of a group without variation',
      ],
    }
  ),
  word('currency', '통화', 5, 'noun',
    ['물물교환', '고정자산', '부동산', '채무', '부채', '무가치', '쓸모없음', '폐기', '구식', '유통중단'],
    tips({
      etymology: '라틴어 currere(흐르다)에서 유래하여 시장에서 \'흐르고 도는 것\'을 뜻합니다.',
      visual: '환전소 전광판에 표시된 각국의 지폐 기호($, €, ₩)들을 떠올려보세요.',
      soundAlike: '커런시 - \'커런트(Current, 현재의/흐름)\'와 어원이 같아 현재 유통되는 돈을 의미합니다.',
      context: '특정 국가에서 사용하는 돈의 단위나, 어떤 생각의 \'통용\' 정도를 말할 때 씁니다.',
      synonymAntonym: 'money보다 공식적인 경제 용어이며, cash는 구체적인 현금을 뜻합니다.',
    }),
    {
      definition: 'A system of money in general use in a particular country or region',
      synonyms: ['legal tender', 'medium of exchange', 'coinage'],
      antonyms: ['barter', 'debt', 'liability'],
      exampleSentences: [
        { en: 'The euro is the official currency in many European countries.', ko: '유로는 많은 유럽 국가의 공식 통화이다.' },
        { en: 'Travelers often exchange their home currency for the local currency at the airport.', ko: '여행객들은 종종 공항에서 자국 통화를 현지 통화로 환전한다.' },
      ],
      wordDistractors: ['current', 'courtesy', 'cursory'],
      definitionDistractors: [
        'the total amount of debt owed by an individual to financial institutions',
        'a physical vault or safe used to store valuable personal belongings',
        'the rate at which goods are produced in a manufacturing facility',
      ],
    }
  ),
  word('curriculum', '교육과정', 5, 'noun',
    ['무계획', '즉흥', '비구조', '무체계', '분산', '해체', '무교육', '공백', '무지', '무학'],
    tips({
      etymology: '라틴어 currere(달리다)에서 유래하여 학생들이 완주해야 할 \'경주 코스\'라는 의미에서 시작되었습니다.',
      visual: '학교 복도 벽에 붙어 있는 전 학년 전공 이수 체계도나 로드맵 이미지를 떠올려 보세요.',
      soundAlike: '\'커리(Curry)\'를 요리할 때 필요한 \'레시피\'처럼, 공부를 완성하기 위한 순서라고 기억하면 쉽습니다.',
      context: '주로 학교나 교육 기관에서 정해진 기간 동안 가르치는 전체적인 학습 목표와 내용을 말합니다.',
      synonymAntonym: 'syllabus는 개별 과목의 세부 계획서인 반면, curriculum은 전체적인 교육의 틀을 의미합니다.',
    }),
    {
      definition: 'The group of subjects and the planned content that are taught by an educational institution.',
      synonyms: ['syllabus', 'program', 'coursework'],
      antonyms: ['disorganization', 'extracurricular', 'chaos'],
      exampleSentences: [
        { en: 'The school is planning to integrate coding into its primary curriculum.', ko: '그 학교는 초등 교육과정에 코딩을 통합할 계획이다.' },
        { en: 'The university offers a flexible curriculum that allows students to choose diverse electives.', ko: '그 대학교는 학생들이 다양한 선택 과목을 고를 수 있는 유연한 교육과정을 제공한다.' },
      ],
      wordDistractors: ['cuticle', 'cylindrical', 'criterion'],
      definitionDistractors: [
        'the physical textbook assigned to students for a single course',
        'a detailed record of a student\'s grades and attendance over one semester',
        'the administrative staff responsible for managing a school building',
      ],
    }
  ),
  word('database', '데이터베이스', 5, 'noun',
    ['무질서', '분산', '허공', '공백', '무자료', '수기', '비체계', '산발', '혼란', '미정리'],
    tips({
      etymology: 'data(자료)와 base(기초/토대)가 결합된 단어로, 정보를 체계적으로 쌓아두는 기초 창고라는 의미에서 유래했습니다.',
      visual: '수많은 서랍이 달린 거대한 캐비닛 안에 모든 서류가 번호순으로 완벽하게 정리되어 있는 모습을 상상해 보세요.',
      soundAlike: '데이터베이스의 \'베이스(Base)\'를 야구의 베이스나 군사 기지처럼 정보들이 모이는 \'거점\'으로 기억하면 쉽습니다.',
      context: 'IT 분야뿐만 아니라 도서관의 도서 목록이나 병원의 환자 기록 관리 등 방대한 정보를 다루는 모든 곳에서 필수적입니다.',
      synonymAntonym: '정보를 모아두는 repository(저장소)와 유사하며, 아무것도 없는 상태인 void와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A large collection of organized information that can be easily accessed, managed, and updated by a computer system.',
      synonyms: ['repository', 'archive', 'bank'],
      antonyms: ['disarray', 'void', 'scatter'],
      exampleSentences: [
        { en: 'The system allows users to search the entire database efficiently.', ko: '이 시스템을 통해 사용자는 전체 데이터베이스를 효율적으로 검색할 수 있습니다.' },
        { en: 'Security measures were improved to protect the sensitive information stored in the database.', ko: '데이터베이스에 저장된 민감한 정보를 보호하기 위해 보안 조치가 강화되었습니다.' },
      ],
      wordDistractors: ['dateline', 'dashboard', 'debase'],
      definitionDistractors: [
        'a single spreadsheet used to track daily expenses and income',
        'the hardware equipment that powers a computer network server',
        'a temporary file created when software crashes unexpectedly',
      ],
    }
  ),
  word('decent', '적절한', 5, 'adjective',
    ['부적절한', '비열한', '천한', '추악한', '무례한', '저질의', '품위없는', '야한', '부도덕한', '비양심적인'],
    tips({
      etymology: '라틴어 decere(어울리다/적절하다)에서 유래하여 상황에 맞는 품위를 갖춤을 뜻합니다.',
      visual: '화려하진 않지만 깔끔하고 단정하게 정장을 차려입은 신사의 모습입니다.',
      soundAlike: '디센트 - \'디자인(Design)\'이 잘 된 것처럼 \'깔끔하고 괜찮은\' 상태로 연상하세요.',
      context: '수준이 나쁘지 않거나, 도덕적으로 올바르거나, 예의 바른 행동을 묘사할 때 씁니다.',
      synonymAntonym: 'respectable은 남부럽지 않은 수준을, indecent는 보기 흉하고 무례함을 뜻합니다.',
    }),
    {
      definition: 'conforming with generally accepted standards of respectable or moral behavior',
      synonyms: ['adequate', 'respectable', 'proper'],
      antonyms: ['indecent', 'unacceptable', 'improper'],
      exampleSentences: [
        { en: 'She earns a decent salary.', ko: '그녀는 꽤 괜찮은 수준의 급여를 받는다.' },
        { en: 'Everyone deserves decent housing.', ko: '모든 사람은 제대로 된 주거 환경을 누릴 자격이 있다.' },
      ],
      wordDistractors: ['descent', 'deceit', 'docent'],
      definitionDistractors: [
        'remarkably luxurious and far exceeding normal expectations',
        'slowly declining in quality or value over an extended period',
        'intentionally designed to attract attention and provoke controversy',
      ],
    }
  ),
  word('dedicate', '헌신하다', 5, 'verb',
    ['소홀히 하다', '방치하다', '거부하다', '포기하다', '무시하다', '태만하다', '배반하다', '이탈하다', '해이해지다', '무관심하다'],
    tips({
      etymology: '라틴어 de(완전히)와 dicare(선언하다)가 합쳐져 \'자신을 완전히 바치겠다고 공표하다\'라는 의미에서 유래했습니다.',
      visual: '자신의 시간과 에너지가 담긴 소중한 보석함을 누군가에게 두 손으로 정중히 건네는 장면을 상상해 보세요.',
      soundAlike: '데디케이트 -> \'대디(아빠)가 케이크\'를 사오며 가족을 위해 헌신하는 모습을 떠올려 보세요.',
      context: '주로 자신의 인생, 시간, 노력을 특정 목표에 쏟거나 책의 첫머리에 누군가를 위한 헌사를 적을 때 자주 쓰입니다.',
      synonymAntonym: '전념하다라는 뜻의 devote와 유사하며, 돌보지 않고 내버려두는 neglect와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to give all of your energy, time, or efforts to a specific person, activity, or purpose',
      synonyms: ['devote', 'commit', 'pledge'],
      antonyms: ['neglect', 'ignore', 'disregard'],
      exampleSentences: [
        { en: 'He decided to dedicate his life to helping the poor.', ko: '그는 가난한 사람들을 돕는 데 평생을 바치기로 결심했다.' },
        { en: 'The author wanted to dedicate the book to his late grandfather.', ko: '작가는 그 책을 돌아가신 할아버지께 헌정하고 싶어 했다.' },
      ],
      wordDistractors: ['delicate', 'delegate', 'decorate'],
      definitionDistractors: [
        'to briefly mention someone or something in a casual conversation',
        'to formally withdraw support from a previously endorsed cause',
        'to divide resources equally among all participants in a project',
      ],
    }
  ),
  word('deficit', '적자', 5, 'noun',
    ['흑자', '잉여', '과잉', '남음', '초과', '플러스', '수지상환', '여유', '축적', '남아돔'],
    tips({
      etymology: 'de(떨어져 나간) + fic(만들다)가 합쳐져 \'만들어야 할 양보다 모자라다\'는 의미를 가집니다.',
      visual: '가계부나 장부에서 수입보다 지출이 많아 빨간색 숫자로 표시된 마이너스 기호',
      soundAlike: '데피싯 -> \'대피 싯(sit)\' 부족한 예산 때문에 자리에 앉아 대피책을 세우는 상황',
      context: '정부의 예산 부족이나 무역에서 수입이 수출보다 많을 때 주로 쓰이는 경제 용어입니다.',
      synonymAntonym: '부족함을 뜻하는 shortfall이 동의어이며, 남는 양을 뜻하는 surplus가 반의어입니다.',
    }),
    {
      definition: 'the amount by which a sum of money falls short of a required or expected amount',
      synonyms: ['shortfall', 'shortage', 'deficiency'],
      antonyms: ['surplus', 'excess', 'abundance'],
      exampleSentences: [
        { en: 'The government is trying to reduce the budget deficit.', ko: '정부는 재정 적자를 줄이려 노력하고 있다.' },
        { en: 'There is a significant trade deficit between the two countries.', ko: '두 나라 사이에는 상당한 무역 적자가 존재한다.' },
      ],
      wordDistractors: ['definite', 'defiant', 'deferment'],
      definitionDistractors: [
        'the total profit earned by a business after deducting all expenses',
        'a financial bonus awarded to employees for exceeding sales targets',
        'the accumulated savings held in a reserve fund for emergencies',
      ],
    }
  ),
  word('deliberate', '신중한', 5, 'adjective',
    ['충동적인', '경솔한', '무계획의', '우연한', '즉흥적인', '성급한', '조급한', '무분별한', '무모한', '변덕스러운'],
    tips({
      etymology: 'de(완전히) + libra(저울)가 합쳐져 \'저울질을 충분히 해보다\'라는 의미에서 \'신중한\'이 되었습니다.',
      visual: '결정을 내리기 전 양손에 선택지를 놓고 무게를 재보며 고민하는 사람의 모습',
      soundAlike: '딜리버레이트 -> \'딜리버리(배달) 에이트(ate)\' 배달 음식을 시켜 먹을지 말지 신중하게 고민하는 상황',
      context: '단순히 조심스러운 것뿐만 아니라, 의도를 가지고 계획적으로 행동하거나 아주 천천히 움직일 때 사용합니다.',
      synonymAntonym: '의도적인 intentional이 동의어이며, 우연히 일어난 accidental이 반의어입니다.',
    }),
    {
      definition: 'Done consciously and intentionally after careful thought, often characterized by a slow and unhurried pace.',
      synonyms: ['intentional', 'calculated', 'thoughtful'],
      antonyms: ['accidental', 'unintentional', 'impulsive'],
      exampleSentences: [
        { en: 'It was a deliberate attempt to mislead the public through a planned strategy.', ko: '그것은 계획된 전략을 통해 대중을 오도하려는 의도적인 시도였다.' },
        { en: 'She spoke in a deliberate manner to emphasize her point clearly.', ko: '그녀는 요점을 명확히 강조하기 위해 느리고 신중한 태도로 말했다.' },
      ],
      wordDistractors: ['delicate', 'desolate', 'elaborate'],
      definitionDistractors: [
        'happening by pure chance without any prior planning or intention',
        'carried out in a state of extreme panic and emotional distress',
        'performed quickly and carelessly to meet a tight deadline',
      ],
    }
  ),
  word('democracy', '민주주의', 5, 'noun',
    ['독재', '전제정치', '신권정치', '군사정권', '일당제', '과두제', '억압', '독단', '폭정', '전제주의'],
    tips({
      etymology: '그리스어 demos(민중)와 kratos(권력/통치)가 결합하여 \'민중에 의한 통치\'를 의미합니다.',
      visual: '수많은 시민들이 각자의 투표권을 행사하기 위해 줄을 서 있는 투표소의 모습',
      soundAlike: '디모크라시 -> \'다 모여서(demo) 그래(cracy) 하자\'라고 다수결로 결정하는 시스템',
      context: '정치 체제뿐만 아니라 조직 내에서 구성원의 의견을 존중하는 평등한 의사결정 문화를 뜻하기도 합니다.',
      synonymAntonym: '공화국을 뜻하는 republic이 관련어이며, 1인 독재인 dictatorship이 대표적인 반의어입니다.',
    }),
    {
      definition: 'A system of government in which power is vested in the people and exercised by them directly or through freely elected agents.',
      synonyms: ['republic', 'self-government', 'autonomy'],
      antonyms: ['dictatorship', 'tyranny', 'autocracy'],
      exampleSentences: [
        { en: 'Freedom of speech is a fundamental principle of democracy.', ko: '표현의 자유는 민주주의의 근본 원칙이다.' },
        { en: 'The country is making a slow transition toward democracy.', ko: '그 나라는 민주주의를 향해 천천히 전환하고 있다.' },
      ],
      wordDistractors: ['demography', 'bureaucracy', 'diplomacy'],
      definitionDistractors: [
        'a political system in which decisions are made solely by appointed experts',
        'an economic model based on free trade without government regulation',
        'a social movement advocating for equal distribution of all wealth',
      ],
    }
  ),
  word('dense', '짙은', 5, 'adjective',
    ['희박한', '성긴', '얇은', '투명한', '비어 있는', '공허한', '텅 빈', '드문', '희귀한', '흩어진'],
    tips({
      etymology: '라틴어 densus에서 유래하여 \'빽빽하게 채워진\' 또는 \'응축된\' 상태를 의미합니다.',
      visual: '나무들이 빈틈없이 들어차서 햇빛조차 통과하기 힘든 울창한 정글의 모습을 상상해 보세요.',
      soundAlike: '\'덴스\' 발음이 \'댄스(dance)\'와 비슷하죠? 댄스 클럽에 사람이 너무 빽빽해서 움직이기 힘든 상황을 떠올려 보세요.',
      context: '안개나 연기처럼 시야를 가릴 정도로 입자가 빽빽할 때나, 정보량이 너무 많아 이해하기 어려운 텍스트를 묘사할 때 사용합니다.',
      synonymAntonym: '두껍고 빽빽한 thick이 주요 동의어이며, 드문드문 흩어져 있는 상태인 sparse가 대표적인 반의어입니다.',
    }),
    {
      definition: 'Containing a lot of matter or people in a small area, or having a structure that is closely packed and difficult to penetrate.',
      synonyms: ['thick', 'compact', 'crowded'],
      antonyms: ['sparse', 'thin', 'scattered'],
      exampleSentences: [
        { en: 'The hikers got lost in the dense forest.', ko: '등산객들은 울창한 숲속에서 길을 잃었다.' },
        { en: 'Traffic was slow due to the dense fog on the highway.', ko: '고속도로의 짙은 안개 때문에 교통이 정체되었다.' },
      ],
      wordDistractors: ['tense', 'dent', 'fence'],
      definitionDistractors: [
        'extremely large in physical size or covering a vast geographical area',
        'moving rapidly through a space without encountering any obstacles',
        'arranged in a neat and orderly pattern with equal spacing between elements',
      ],
    }
  ),
  word('depict', '그리다', 5, 'verb',
    ['지우다', '숨기다', '왜곡하다', '은폐하다', '흐리게 하다', '삭제하다', '제거하다', '희석하다', '변조하다', '가리다'],
    tips({
      etymology: '라틴어 \'de-\'(완전히)와 \'pingere\'(그림을 그리다)가 결합되어, 대상을 상세하게 그려낸다는 의미를 가집니다.',
      visual: '화가가 캔버스 위에 눈앞의 풍경을 붓으로 세밀하게 옮겨 담는 장면을 상상해 보세요.',
      soundAlike: '\'디픽트\'를 \'The Picture(그림)\'와 연결하여, 대상을 한 폭의 그림처럼 보여준다고 기억하면 쉽습니다.',
      context: '단순히 선을 긋는 행위보다는 소설, 영화, 예술 작품에서 인물의 성격이나 상황을 생생하게 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 단어로는 portray(묘사하다)가 있고, 반대되는 단어로는 사실을 감추는 conceal(숨기다)이 있습니다.',
    }),
    {
      definition: 'to represent or show something through an artistic form such as a painting, sculpture, or a piece of writing',
      synonyms: ['portray', 'illustrate', 'represent'],
      antonyms: ['conceal', 'hide', 'suppress'],
      exampleSentences: [
        { en: 'The movie tries to depict the harsh reality of war.', ko: '그 영화는 전쟁의 가혹한 현실을 묘사하려고 노력한다.' },
        { en: 'Ancient paintings often depict hunting scenes.', ko: '고대 벽화들은 종종 사냥 장면을 그린다.' },
      ],
      wordDistractors: ['deflect', 'decrypt', 'deposit'],
      definitionDistractors: [
        'to physically construct a three-dimensional model from raw materials',
        'to verbally criticize or find fault with a piece of artwork',
        'to permanently erase or remove visual content from a canvas',
      ],
    }
  ),
  word('deprive', '박탈하다', 5, 'verb',
    ['부여하다', '제공하다', '충족하다', '채워주다', '허용하다', '혜택을 주다', '지원하다', '증여하다', '수여하다', '공급하다'],
    tips({
      etymology: 'de(완전히) + prive(개인적인 것)가 합쳐져 \'개인이 가진 것을 떼어내어 빼앗다\'는 뜻에서 유래했습니다.',
      visual: '아이의 손에서 소중한 장난감을 강제로 낚아채어 가져가는 차가운 손길을 상상해 보세요.',
      soundAlike: '디프라이브 -> \'뒤(de)에서 프라이버시(priv)를\' 몰래 빼앗아가는 상황으로 기억하세요.',
      context: '주로 권리, 자유, 수면, 음식 등 인간에게 필수적인 것을 누리지 못하게 막을 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 벗겨내듯 빼앗는 strip이 동의어이며, 반대로 채워주는 provide가 대표적인 반의어입니다.',
    }),
    {
      definition: 'to take something away from someone or prevent them from possessing or enjoying it',
      synonyms: ['strip', 'rob', 'divest'],
      antonyms: ['provide', 'supply', 'endow'],
      exampleSentences: [
        { en: 'You should not deprive yourself of sleep to study.', ko: '공부하기 위해 잠을 자지 못하게 스스로를 혹사해서는 안 된다.' },
        { en: 'The new law could deprive many people of their basic rights.', ko: '새 법안은 많은 사람들에게서 기본권을 박탈할 수 있다.' },
      ],
      wordDistractors: ['derive', 'deprave', 'reprieve'],
      definitionDistractors: [
        'to generously share personal resources with those who request them',
        'to temporarily lend an item with the expectation of its return',
        'to gradually reduce the intensity of a negative emotional experience',
      ],
    }
  ),
  word('derive', '유래하다', 5, 'verb',
    ['원인', '시초', '비롯되다', '무관하다', '독립하다', '분리되다', '단절되다', '고유하다', '본래', '소멸하다'],
    tips({
      etymology: '라틴어 \'de(아래로)\'와 \'rivus(강물)\'가 결합된 단어로, 강물이 수원지로부터 흘러나오는 모습에서 유래되었습니다.',
      visual: '거대한 빙하가 녹아 폭포가 되어 아래로 쏟아져 내리며 새로운 강줄기를 형성하는 장면을 상상해 보세요.',
      soundAlike: '\'디라이브\'라고 발음하며, \'드라이브(drive)\'를 하다가 메인 도로에서 옆길로 빠져나와 새로운 목적지에 도달하는 상황과 연결해 보세요.',
      context: '언어의 뿌리를 설명하는 학술적인 상황이나, 지식 또는 감정적인 만족감을 특정 원천으로부터 끌어낼 때 자주 쓰입니다.',
      synonymAntonym: '뿌리에서 뻗어 나온다는 의미의 stem이 동의어이며, 모든 과정이 끝나는 것을 뜻하는 terminate가 반의어입니다.',
    }),
    {
      definition: 'to receive or trace something from a specific source or root',
      synonyms: ['originate', 'stem', 'descend'],
      antonyms: ['cease', 'terminate', 'finish'],
      exampleSentences: [
        { en: 'Many English words derive from Latin and Greek roots.', ko: '많은 영어 단어들이 라틴어와 그리스어 어원에서 유래한다.' },
        { en: 'She derives great satisfaction from her daily volunteer work.', ko: '그녀는 매일의 봉사 활동을 통해 큰 만족감을 얻는다.' },
      ],
      wordDistractors: ['deprive', 'divert', 'revive'],
      definitionDistractors: [
        'to intentionally create something entirely new without any external influence',
        'to translate a word from one language into another using a dictionary',
        'to abandon or give up a long-held tradition or cultural practice',
      ],
    }
  ),
  word('designate', '지정하다', 5, 'verb',
    ['해제하다', '취소하다', '철회하다', '무명', '미지정', '임의', '불명', '미결정', '보류', '박탈'],
    tips({
      etymology: 'de(강조)와 sign(표시)이 합쳐져 \'특별히 표시하여 정하다\'라는 의미가 됩니다.',
      visual: '지도상의 특정 구역에 빨간색 핀을 꽂아 \'전용 구역\'이라고 표시하는 장면을 상상하세요.',
      soundAlike: '데지그네이트: \'돼지 그네\'를 타는 장소로 \'지정\'하다라고 연상해 보세요.',
      context: '공식적인 직함이나 특정 용도의 장소를 정할 때 주로 사용됩니다.',
      synonymAntonym: '동의어는 appoint, assign이며 반의어는 dismiss, revoke, remove입니다.',
    }),
    {
      definition: 'to officially choose someone or something for a particular role or purpose',
      synonyms: ['appoint', 'assign', 'specify'],
      antonyms: ['dismiss', 'revoke', 'withdraw'],
      exampleSentences: [
        { en: 'She was designated to lead the project.', ko: '그녀가 프로젝트를 이끌도록 지정되었다.' },
        { en: 'The area was designated as a nature reserve.', ko: '그 지역은 자연 보호 구역으로 지정되었다.' },
      ],
      wordDistractors: ['desiccate', 'delineate', 'dissipate'],
      definitionDistractors: [
        'to remove someone from an official position or role permanently',
        'to create a detailed visual diagram of a complex system',
        'to randomly select items from a large pool without specific criteria',
      ],
    }
  ),
  word('destiny', '운명', 5, 'noun',
    ['우연', '자유의지', '선택', '임의', '불확실', '변동', '우발', '비결정', '가변', '우연사'],
    tips({
      etymology: '라틴어 destinare(고정하다)에서 유래하여 \'이미 고정된 앞날\'이라는 의미를 가집니다.',
      visual: '거대한 실타래가 이미 짜여져 있어 바꿀 수 없는 옷감의 무늬를 상상해 보세요.',
      soundAlike: '데스티니: \'대단히\' 중요한 삶의 방향인 \'운명\'으로 소리 내어 기억해 보세요.',
      context: '개인의 통제력을 벗어난 거대한 힘이나 반드시 일어나게 되어 있는 미래를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'fate는 비슷한 의미지만 doom은 주로 비극적인 운명을, free will은 스스로 결정하는 자유의지를 뜻합니다.',
    }),
    {
      definition: 'The hidden power believed to control what will happen in the future, or the hidden purpose behind a series of events.',
      synonyms: ['fate', 'fortune', 'doom'],
      antonyms: ['chance', 'choice', 'accident'],
      exampleSentences: [
        { en: 'He felt that meeting her was his destiny.', ko: '그는 그녀를 만난 것이 자신의 운명이라고 느꼈다.' },
        { en: 'She shaped her own destiny through hard work.', ko: '그녀는 노력을 통해 자신의 운명을 스스로 개척했다.' },
      ],
      wordDistractors: ['density', 'dynasty', 'dignity'],
      definitionDistractors: [
        'a detailed plan outlining the steps needed to achieve a specific goal',
        'the natural talent or ability a person is born with',
        'a sudden unexpected event that disrupts normal daily activities',
      ],
    }
  ),
  word('deteriorate', '악화되다', 6, 'verb',
    ['개선되다', '회복되다', '호전되다', '나아지다', '향상되다', '정상화되다', '복구되다', '치유되다', '발전하다', '진보하다'],
    tips({
      etymology: '라틴어 \'deterior(더 나쁜)\'에서 유래하여, 시간이 지남에 따라 상태가 점점 더 나쁜 쪽으로 흘러가는 것을 의미합니다.',
      visual: '오래된 건물의 벽이 갈라지고 페인트가 벗겨지며 흉물스럽게 변해가는 모습을 떠올려 보세요.',
      soundAlike: '\'디테리어레이트\'를 \'뒤태가 이래(이트)\'로 발음해 보세요. 뒤태가 예전 같지 않고 \'악화\'된 상황을 연상하면 쉽습니다.',
      context: '주로 환자의 건강 상태, 국가 간의 외교 관계, 또는 낡은 건물의 물리적 상태가 나빠질 때 사용합니다.',
      synonymAntonym: '점점 나빠지는 worsen과 유사하며, 반대로 상황이 나아지는 improve와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'to become progressively worse in quality, value, or strength over a period of time',
      synonyms: ['worsen', 'decline', 'degenerate'],
      antonyms: ['improve', 'ameliorate', 'advance'],
      exampleSentences: [
        { en: 'The patient\'s condition began to deteriorate overnight.', ko: '환자의 상태가 밤새 악화되기 시작했습니다.' },
        { en: 'The air quality in the city continues to deteriorate due to heavy pollution.', ko: '심각한 오염으로 인해 도시의 공기 질이 계속해서 악화되고 있습니다.' },
      ],
      wordDistractors: ['determine', 'detonate', 'deliberate'],
      definitionDistractors: [
        'to remain unchanged and stable over a long period of time',
        'to suddenly transform into a completely different physical form',
        'to gradually adapt and adjust to new environmental conditions',
      ],
    }
  ),
  word('diversion', '전환, 기분전환', 6, 'noun',
    ['집중', '몰입', '주의', '관심', '집착', '전념', '열중', '몰두', '주시', '응시'],
    tips({
      etymology: '접두사 di-(분리)와 vert-(돌리다)가 결합하여 원래 가던 길이나 생각에서 \'다른 곳으로 돌림\'을 의미합니다.',
      visual: '도로 공사 표지판에 화살표가 옆길을 가리키며 \'우회로(Detour)\'라고 적힌 장면을 상상해 보세요.',
      soundAlike: '\'디버전\'을 \'뒤 버전\'으로 기억하여, 원래 가던 앞길이 막혀 뒤쪽 다른 길로 \'전환\'한다고 연상하세요.',
      context: '교통 체증을 피하기 위한 경로 변경뿐만 아니라, 스트레스를 풀기 위해 즐기는 취미 생활을 일컫기도 합니다.',
      synonymAntonym: '주의를 돌리는 distraction과 유사하며, 한곳에 머무르는 focus와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The act of turning something aside from its original course or the redirection of attention to a different object.',
      synonyms: ['distraction', 'detour', 'pastime'],
      antonyms: ['focus', 'concentration', 'continuity'],
      exampleSentences: [
        { en: 'Reading is a pleasant diversion from work.', ko: '독서는 일에서 벗어나는 즐거운 기분전환이다.' },
        { en: 'The police created a diversion to catch the suspect.', ko: '경찰은 용의자를 잡기 위해 주의를 분산시켰다.' },
      ],
      wordDistractors: ['division', 'dimension', 'devotion'],
      definitionDistractors: [
        'a permanent change in direction that cannot be reversed or undone',
        'the process of combining two separate paths into a single route',
        'a formal decision made by a committee to postpone scheduled activities',
      ],
    }
  ),
  word('diagnose', '진단하다', 6, 'verb',
    ['오진하다', '무시하다', '방치하다', '추측하다', '간과하다', '방관하다', '착각하다', '혼동하다', '은폐하다', '방해하다'],
    tips({
      etymology: 'dia(철저히)와 gnos(알다)가 합쳐져 \'원인을 확실히 알아내다\'는 뜻이 됩니다.',
      visual: '의사가 돋보기를 들고 엑스레이 사진 속의 아주 작은 이상 징후를 꼼꼼히 찾아내는 장면을 상상하세요.',
      soundAlike: '다이애그노즈: \'다 이애(아이)가 노즈(코)\'가 아픈 원인을 \'진단\'하다.',
      context: '의학적인 질병 진단뿐만 아니라, 시스템의 오류나 경제적 문제의 근본 원인을 파악할 때도 자주 사용됩니다.',
      synonymAntonym: 'identify와 analyze는 원인을 파악하는 긍정적 과정이며, overlook과 neglect는 이를 놓치거나 무시하는 반대 행동입니다.',
    }),
    {
      definition: 'to identify the nature of an illness or other problem by examining the symptoms',
      synonyms: ['identify', 'determine', 'analyze'],
      antonyms: ['overlook', 'ignore', 'neglect'],
      exampleSentences: [
        { en: 'The doctor diagnosed him with pneumonia.', ko: '의사는 그에게 폐렴이라고 진단했다.' },
        { en: 'It took months to diagnose the rare condition.', ko: '희귀한 질환을 진단하는 데 몇 달이 걸렸다.' },
      ],
      wordDistractors: ['dialogue', 'diagram', 'diagonal'],
      definitionDistractors: [
        'to prescribe a specific treatment or medication for a known illness',
        'to perform a surgical procedure to correct a physical abnormality',
        'to monitor a patient\'s vital signs continuously over several hours',
      ],
    }
  ),
  word('dignity', '존엄', 6, 'noun',
    ['비열', '천함', '창피', '수치', '굴욕', '굴종', '비굴', '저속', '야비', '품위상실'],
    tips({
      etymology: '라틴어 dignus(가치 있는)에서 유래하여 인간으로서의 가치를 뜻합니다.',
      visual: '어떤 시련 앞에서도 고개를 숙이지 않고 당당하게 걷는 사람의 모습입니다.',
      soundAlike: '디그니티: \'디귿(D)\'자 모양으로 허리를 펴고 \'존엄\'을 지키다.',
      context: '품위 있는 태도나 인간으로서 마땅히 존중받아야 할 권리를 말할 때 씁니다.',
      synonymAntonym: '동의어는 self-respect, honor, prestige이며 반의어는 disgrace, humiliation, lowliness입니다.',
    }),
    {
      definition: 'the state or quality of being worthy of honor or respect',
      synonyms: ['self-respect', 'honor', 'prestige'],
      antonyms: ['disgrace', 'humiliation', 'lowliness'],
      exampleSentences: [
        { en: 'She maintained her dignity throughout the difficult trial.', ko: '그녀는 어려운 재판 내내 존엄을 유지했다.' },
        { en: 'Every human being has the right to live their life with dignity.', ko: '모든 인간은 존엄을 지키며 살아갈 권리가 있다.' },
      ],
      wordDistractors: ['divinity', 'density', 'destiny'],
      definitionDistractors: [
        'the physical appearance or outward attractiveness of a person',
        'a formal title given to government officials upon taking office',
        'the ability to endure physical hardship without showing weakness',
      ],
    }
  ),
  word('dilemma', '딜레마', 6, 'noun',
    ['명확한 선택', '쉬운 결정', '단순', '단일 옵션', '확실', '의문 없음', '명쾌', '분명', '단순화', '해결'],
    tips({
      etymology: '그리스어 di(둘)와 lemma(전제)가 합쳐져 \'두 가지 어려운 선택지\'라는 의미에서 유래했습니다.',
      visual: '왼쪽은 낭떠러지, 오른쪽은 가시밭길인 갈림길 앞에 서서 고민하는 여행자의 모습을 상상해 보세요.',
      soundAlike: '딜레마: \'딜(deal)\'을 해야 할지 \'마(말아야)\' 할지 결정하기 힘든 상황으로 기억하세요.',
      context: '윤리적 문제나 비즈니스 결정처럼 어느 쪽을 골라도 손해가 따르는 곤혹스러운 상황에 쓰입니다.',
      synonymAntonym: 'quandary, predicament는 곤경을 뜻하며, 반대로 확실한 해결책은 solution이나 resolution이라고 합니다.',
    }),
    {
      definition: 'a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones',
      synonyms: ['quandary', 'predicament', 'plight'],
      antonyms: ['solution', 'certainty', 'resolution'],
      exampleSentences: [
        { en: 'The president faces a difficult dilemma between increasing taxes and cutting public services.', ko: '대통령은 세금 인상과 공공 서비스 축소 사이에서 어려운 딜레마에 처해 있다.' },
        { en: 'He was in a moral dilemma about whether to report the error or remain silent.', ko: '그는 그 실수를 보고할지 아니면 침묵을 지킬지에 대한 도덕적 딜레마에 빠졌다.' },
      ],
      wordDistractors: ['diploma', 'diameter', 'delimiter'],
      definitionDistractors: [
        'a straightforward problem that has one clear and obvious solution',
        'a feeling of extreme confidence when making an important decision',
        'an unexpected opportunity that arises from a difficult circumstance',
      ],
    }
  ),
  word('diminish', '감소시키다', 6, 'verb',
    ['증가시키다', '확대하다', '강화하다', '늘리다', '확장하다', '부풀리다', '증대하다', '고조시키다', '번성하다', '축적하다'],
    tips({
      etymology: '라틴어 \'diminuere\'에서 유래했으며, \'작은\'을 뜻하는 \'mini\'가 포함되어 있어 \'작게 만들다\'라는 의미를 가집니다.',
      visual: '스마트폰 화면을 두 손가락으로 오므려 사진의 크기를 줄이는 동작을 떠올려 보세요.',
      soundAlike: '\'디미니시\'는 \'뒤(di)가 미니(mini)해지다\'로 기억하세요. 뒤로 갈수록 크기가 작아진다는 느낌입니다.',
      context: '단순히 숫자가 줄어드는 것뿐만 아니라, 사람의 권위나 명성, 가치가 훼손될 때도 자주 쓰입니다.',
      synonymAntonym: '점점 줄어드는 dwindle과 유사하며, 반대로 크게 늘리는 augment와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To make something become smaller in size, degree, or importance, or to appear less valuable than it truly is.',
      synonyms: ['decrease', 'reduce', 'dwindle'],
      antonyms: ['increase', 'expand', 'augment'],
      exampleSentences: [
        { en: 'The new law will significantly lessen the power of the local government and diminish its influence.', ko: '새로운 법안은 지방 정부의 권한을 상당히 약화시키고 그 영향력을 감소시킬 것이다.' },
        { en: 'Failure to update the software may diminish the overall performance of your computer.', ko: '소프트웨어를 업데이트하지 않으면 컴퓨터의 전반적인 성능이 저하될 수 있다.' },
      ],
      wordDistractors: ['distinguish', 'demolish', 'admonish'],
      definitionDistractors: [
        'to rapidly multiply or replicate something in large quantities',
        'to maintain a steady and unchanging level over an extended period',
        'to transfer ownership of property or assets to another party',
      ],
    }
  ),
  word('diplomacy', '외교', 6, 'noun',
    ['전쟁', '대립', '갈등', '호전', '무력', '폭력', '적대', '불화', '분쟁', '무례'],
    tips({
      etymology: '그리스어 \'diploma(접힌 문서)\'에서 유래하여 국가 간의 공식 문서를 다루는 일을 뜻하게 되었습니다.',
      visual: '국기 앞에서 두 나라의 대표가 서로 악수를 하며 서류를 교환하는 모습을 상상해 보세요.',
      soundAlike: '디플로마시 - \'디플로마(학위증)\'와 발음이 비슷하죠? 둘 다 중요한 공식 문서에서 시작된 단어입니다.',
      context: '국가 간의 총칼 없는 전쟁이라고 불리며, 협상을 통해 평화를 유지하는 핵심 수단입니다.',
      synonymAntonym: '동의어로는 negotiation, tact, statesmanship이 있고, 반의어로는 hostility, conflict, war가 있습니다.',
    }),
    {
      definition: 'the profession, activity, or skill of managing international relations',
      synonyms: ['negotiation', 'tact', 'statesmanship'],
      antonyms: ['hostility', 'conflict', 'war'],
      exampleSentences: [
        { en: 'Diplomacy helped avoid war between the two nations.', ko: '외교가 두 나라 간의 전쟁을 피하는 데 도움이 되었다.' },
        { en: 'She handled the situation with skill and diplomacy.', ko: '그녀는 기술과 외교적 수완으로 상황을 처리했다.' },
      ],
      wordDistractors: ['democracy', 'diploma', 'duplicity'],
      definitionDistractors: [
        'the academic study of ancient languages and historical texts',
        'the military strategy used to defend national borders from invasion',
        'the process of establishing trade agreements between corporations',
      ],
    }
  ),
  word('discipline', '훈련', 6, 'noun',
    ['무규율', '해이', '방탕', '무절제', '무질서', '혼란', '산만', '무계획', '부정', '방종'],
    tips({
      etymology: '라틴어 \'discipulus(제자)\'에서 유래하여, 스승으로부터 배우는 엄격한 가르침이나 훈련을 의미합니다.',
      visual: '매일 새벽 같은 시간에 일어나 운동장을 뛰는 운동선수의 규칙적인 모습을 떠올려 보세요.',
      soundAlike: '디서플린 - \'뒤 서플린(뒤에 서플래?)\'처럼 엄격한 선배가 기강을 잡는 상황을 연상해 보세요.',
      context: '자기 통제력을 의미하기도 하지만, 대학에서의 \'학문 분야\'를 뜻할 때도 자주 쓰입니다.',
      synonymAntonym: '동의어로는 training, self-control, drill이 있고, 반의어로는 chaos, disorder, indulgence가 있습니다.',
    }),
    {
      definition: 'The practice of training people to obey rules or a code of behavior, often using punishment to correct disobedience.',
      synonyms: ['training', 'self-control', 'drill'],
      antonyms: ['chaos', 'disorder', 'indulgence'],
      exampleSentences: [
        { en: 'Military discipline shaped his character through strict adherence to rules.', ko: '엄격한 규칙 준수를 통한 군사 훈련이 그의 성격을 형성했다.' },
        { en: 'Yoga requires a lot of discipline and self-control.', ko: '요가는 많은 수양과 자기 통제가 필요하다.' },
      ],
      wordDistractors: ['disciple', 'disclose', 'dispense'],
      definitionDistractors: [
        'a reward system used to encourage positive behavior in children',
        'the natural talent someone possesses without any formal education',
        'a relaxed and informal approach to solving everyday problems',
      ],
    }
  ),
  word('discourse', '담론', 6, 'noun',
    ['침묵', '무언', '단절', '무소통', '독백', '일방', '편향', '단정', '무논의', '비대화'],
    tips({
      etymology: '라틴어 \'discursus(이리저리 달리기)\'에서 유래하여 생각이 이리저리 오가는 대화를 뜻합니다.',
      visual: '강연대에서 연사가 청중과 깊이 있는 주제로 대화를 나누는 장면을 상상해 보세요.',
      soundAlike: '디스코스 - \'디스(this) 코스(course)\' 이 코스에 대해 진지하게 이야기해 보자는 느낌으로 외워보세요.',
      context: '단순한 잡담보다는 사회적, 학술적 주제에 대한 격식 있는 담론을 의미할 때 주로 쓰입니다.',
      synonymAntonym: '동의어로는 discussion, dialogue, conversation이 있고, 반의어로는 silence, quiet, muteness이 있습니다.',
    }),
    {
      definition: 'Formal and orderly expression of ideas through speech or writing, often regarding a specific academic or social topic.',
      synonyms: ['discussion', 'dialogue', 'conversation'],
      antonyms: ['silence', 'quiet', 'muteness'],
      exampleSentences: [
        { en: 'Public discourse on the issue has been intense.', ko: '그 사안에 대한 공적 담론이 격렬하게 진행되었다.' },
        { en: 'He was a master of political discourse.', ko: '그는 정치적 담론의 대가였다.' },
      ],
      wordDistractors: ['discord', 'disclose', 'recourse'],
      definitionDistractors: [
        'a brief casual remark made in passing without serious intent',
        'a written legal contract between two parties outlining obligations',
        'the act of silently reading a text without sharing its contents',
      ],
    }
  ),
  word('discrimination', '차별', 6, 'noun',
    ['평등', '공정', '동등 대우', '포용', '포섭', '통합', '융합', '화합', '공평', '균형'],
    tips({
      etymology: '라틴어 \'discriminare(구별하다)\'에서 유래하여, 차이를 두어 따로 떼어놓는 것을 의미합니다.',
      visual: '똑같은 자격을 가졌음에도 특정 집단만 문 밖으로 밀려나는 불공평한 그림을 그려보세요.',
      soundAlike: '디스크리미네이션 - \'디스(dis) 크림(cream)이네?\'라며 좋은 것만 골라내고 나머지는 차별하는 상황을 연상해 보세요.',
      context: '인종, 성별, 종교 등을 이유로 부당하게 대우하는 사회적 문제를 지칭할 때 필수적인 단어입니다.',
      synonymAntonym: '동의어로는 prejudice, bias, intolerance가 있고, 반의어로는 equality, fairness, impartiality가 있습니다.',
    }),
    {
      definition: 'The unfair treatment of a person or group based on prejudice rather than individual merit.',
      synonyms: ['prejudice', 'bias', 'intolerance'],
      antonyms: ['equality', 'fairness', 'impartiality'],
      exampleSentences: [
        { en: 'Laws protect workers from discrimination.', ko: '법률은 근로자들을 차별로부터 보호한다.' },
        { en: 'We must fight against racial discrimination.', ko: '우리는 인종 차별에 맞서 싸워야 한다.' },
      ],
      wordDistractors: ['dissemination', 'determination', 'denomination'],
      definitionDistractors: [
        'the ability to recognize fine differences between similar objects or sounds',
        'a legal process for resolving financial disputes between businesses',
        'the act of distributing resources equally to all members of a group',
      ],
    }
  ),
  word('dispose', '처분하다', 6, 'verb',
    ['보관하다', '축적하다', '수집하다', '유지하다', '보존하다', '저장하다', '비축하다', '보유하다', '간직하다', '수호하다'],
    tips({
      etymology: '라틴어 dis(따로)와 ponere(놓다)가 결합되어, 물건을 제자리에 배치하거나 필요 없는 것을 따로 떼어 치운다는 의미에서 유래했습니다.',
      visual: '쓰레기통 앞에 서서 필요 없는 서류나 물건을 과감하게 던져 넣는 모습을 상상해 보세요.',
      soundAlike: '디스포즈(Dispose) - \'디스(this) 포즈(pose)\'로 쓰레기를 버려봐! 라고 외치며 처분하는 장면을 연상하세요.',
      context: '자동사로 쓰일 때는 전치사 of와 함께 \'dispose of\' 형태로 사용되어 제거하거나 버린다는 뜻을 명확히 합니다.',
      synonymAntonym: '버리는 행위인 discard와 유사하며, 반대로 계속 가지고 있는 retain이나 preserve와는 대조적입니다.',
    }),
    {
      definition: 'to get rid of something that is no longer wanted or needed, often by throwing it away or transferring it to another\'s possession',
      synonyms: ['discard', 'dump', 'jettison'],
      antonyms: ['keep', 'retain', 'preserve'],
      exampleSentences: [
        { en: 'Please dispose of recyclables in the blue bin.', ko: '재활용품은 파란색 통에 버려 주세요.' },
        { en: 'The agency helps dispose of hazardous waste.', ko: '그 기관은 유해 폐기물 처분을 돕는다.' },
      ],
      wordDistractors: ['deposit', 'compose', 'propose'],
      definitionDistractors: [
        'to carefully organize and arrange items for long-term storage',
        'to repair or restore a broken object to its original condition',
        'to purchase new replacement items for outdated equipment',
      ],
    }
  ),
  word('dispute', '분쟁', 6, 'noun',
    ['합의', '화해', '동의', '일치', '조화', '협력', '평화', '우호', '타협', '해결'],
    tips({
      etymology: '라틴어 \'dis(반대로)\'와 \'putare(생각하다)\'가 결합되어, 서로의 생각이 달라 의견이 충돌하는 상태를 의미합니다.',
      visual: '회의실 테이블 양쪽에 앉은 사람들이 서로 다른 서류를 내밀며 굳은 표정으로 언쟁을 벌이는 장면을 상상해 보세요.',
      soundAlike: '\'디스(dis) 붙다\'로 기억하세요. 서로를 비판(dis)하며 싸움이 붙은 상황을 떠올리면 쉽습니다.',
      context: '직장 내 노사 갈등, 국가 간의 영토 문제, 혹은 이웃 간의 사소한 말다툼 등 공식적이고 심각한 갈등 상황에서 자주 쓰입니다.',
      synonymAntonym: 'conflict, quarrel과 비슷하며, 반대로 의견이 일치하는 상태는 agreement나 harmony라고 합니다.',
    }),
    {
      definition: 'A serious argument or disagreement between people, groups, or countries, often involving a formal or legal process.',
      synonyms: ['conflict', 'quarrel', 'controversy'],
      antonyms: ['agreement', 'harmony', 'accord'],
      exampleSentences: [
        { en: 'The labor dispute lasted for months.', ko: '노동 분쟁이 수개월 동안 지속되었다.' },
        { en: 'The matter is still under dispute.', ko: '그 문제는 여전히 논쟁 중에 있다.' },
      ],
      wordDistractors: ['disrupt', 'repute', 'compute'],
      definitionDistractors: [
        'a friendly competition between colleagues to achieve the best results',
        'a formal celebration held to honor outstanding achievements',
        'a written proposal submitted for review by a management committee',
      ],
    }
  ),
  word('dissolve', '용해하다', 6, 'verb',
    ['굳히다', '응고시키다', '고체화하다', '응결하다', '결정화하다', '고착시키다', '결합하다', '동결하다', '침전시키다', '축적하다'],
    tips({
      etymology: '라틴어 \'dis(분리)\'와 \'solvere(풀다)\'가 결합되어, 묶여 있던 것을 낱낱이 풀어헤친다는 어원을 가집니다.',
      visual: '투명한 물 컵에 넣은 알약이 보글보글 기포를 내며 형체도 없이 사라지는 모습을 상상해 보세요.',
      soundAlike: '영화나 방송에서 한 화면이 사라지면서 다음 화면이 나타나는 \'디졸브\' 기법을 떠올리면 기억하기 쉽습니다.',
      context: '설탕이나 소금이 물에 녹는 물리적 현상뿐만 아니라, 의회나 법인 같은 조직을 공식적으로 해산할 때도 자주 쓰입니다.',
      synonymAntonym: 'melt는 열에 의해 녹는 것이고, 이 단어는 액체 속으로 섞여 들어가는 차이가 있습니다. 반대로 굳히는 것은 solidify입니다.',
    }),
    {
      definition: 'To break up or disappear by being mixed into a liquid, or to officially end a formal organization or agreement.',
      synonyms: ['melt', 'liquefy', 'disintegrate'],
      antonyms: ['solidify', 'freeze', 'coagulate'],
      exampleSentences: [
        { en: 'The tablet will dissolve in a glass of water in a few minutes.', ko: '그 알약이 물컵 속에서 몇 분 안에 녹을 것이다.' },
        { en: 'The king decided to dissolve the parliament and call for a new election.', ko: '왕은 의회를 해산하고 새로운 선거를 실시하기로 결정했다.' },
      ],
      wordDistractors: ['resolve', 'absolve', 'revolve'],
      definitionDistractors: [
        'to heat a solid material until it becomes a gas for industrial use',
        'to combine two different liquids into a single uniform mixture',
        'to compress a substance into a smaller and harder form',
      ],
    }
  ),
  word('distinct', '뚜렷한', 6, 'adjective',
    ['모호한', '흐린', '비슷한', '애매한', '불명확한', '혼동되는', '동일한', '일치하는', '유사한', '중첩된'],
    tips({
      etymology: '라틴어 \'distinguere(구별하다)\'에서 유래하여, 다른 것들과 따로 떨어져 확실히 보이는 상태를 의미합니다.',
      visual: '안개 속에서 갑자기 선명하게 나타나는 등대의 불빛처럼 아주 잘 보이는 상태를 상상해 보세요.',
      soundAlike: '\'디스팅트\' - \'디스(this) 팅(ting)!\' 하고 종소리가 아주 맑고 뚜렷하게 들리는 느낌으로 기억하세요.',
      context: '성격이나 특징이 다른 것들과 확연히 구분될 때 \'별개의\' 혹은 \'뚜렷한\'의 의미로 자주 쓰입니다.',
      synonymAntonym: 'clear, definite와 같은 유의어는 선명함을 강조하고, vague, fuzzy 같은 반의어는 흐릿함을 나타냅니다.',
    }),
    {
      definition: 'easily identifiable as being different or separate from other things',
      synonyms: ['clear', 'definite', 'separate'],
      antonyms: ['vague', 'indistinct', 'fuzzy'],
      exampleSentences: [
        { en: 'Each species has distinct characteristics.', ko: '각 종은 뚜렷한 특징을 가지고 있다.' },
        { en: 'I heard a distinct sound from the basement.', ko: '지하실에서 아주 분명한 소리가 들렸다.' },
      ],
      wordDistractors: ['district', 'distant', 'distract'],
      definitionDistractors: [
        'barely noticeable or requiring special equipment to detect',
        'shared equally among all members of a group without variation',
        'closely resembling something else to the point of being identical',
      ],
    }
  ),
  word('distinction', '구별', 6, 'noun',
    ['혼동', '동일시', '융합', '통합', '일치', '동질', '무구분', '흐림', '모호', '혼재'],
    tips({
      etymology: '라틴어 \'distinguere\'에서 유래했으며, \'dis(분리)\'와 \'stinct(찌르다/표시하다)\'가 결합되어 \'따로 떼어 표시하다\'라는 의미를 가집니다.',
      visual: '수많은 회색 돌멩이들 사이에 홀로 놓인 반짝이는 다이아몬드 하나를 상상해 보세요.',
      soundAlike: '단어의 앞부분인 \'dis-\'는 \'분리\'를 뜻하며, 뒤의 \'tinct\'는 \'뚜렷한 흔적\'을 남기는 소리와 비슷합니다.',
      context: '단순히 사물을 나누는 것뿐만 아니라, 학업이나 업적에서 남들보다 뛰어난 \'우수함\'을 뜻할 때도 사용됩니다.',
      synonymAntonym: '비슷한 말로는 differentiation이 있고, 반대말로는 모든 것이 똑같아 보이는 similarity가 있습니다.',
    }),
    {
      definition: 'a clear difference or contrast between similar things or people, or the quality of being excellent and unique',
      synonyms: ['differentiation', 'contrast', 'discrimination'],
      antonyms: ['similarity', 'resemblance', 'uniformity'],
      exampleSentences: [
        { en: 'The law makes a sharp distinction between a mistake and a crime.', ko: '법은 실수와 범죄를 엄격하게 구별합니다.' },
        { en: 'He served his country with great distinction during the war.', ko: '그는 전쟁 중에 아주 탁월한 공훈을 세우며 국가에 봉사했습니다.' },
      ],
      wordDistractors: ['distortion', 'distribution', 'extinction'],
      definitionDistractors: [
        'a formal punishment given to someone who violates a rule or law',
        'the process of merging two categories into a single unified group',
        'a brief summary of key points presented at the end of a lecture',
      ],
    }
  ),
  word('distort', '왜곡하다', 6, 'verb',
    ['정확히 전하다', '그대로 반영하다', '진실을 밝히다', '완전하게 하다', '정직하게 말하다', '정확하게 묘사하다', '충실히 따르다', '원본을 유지하다', '직진하다', '솔직하게 표현하다'],
    tips({
      etymology: '접두사 dis-(분리, 나쁘게)와 어근 tort(비틀다)가 결합되어 본래의 형태를 나쁜 방향으로 비틀어버린다는 의미를 가집니다.',
      visual: '포토샵의 \'손가락 도구\'로 멀쩡한 사진의 얼굴 부위를 길게 늘리거나 흉측하게 찌그러뜨리는 장면을 떠올려 보세요.',
      soundAlike: '일렉 기타 연주 시 소리를 일부러 거칠고 찌그러지게 만드는 효과 장치인 \'디스토션(Distortion)\'을 생각하면 쉽습니다.',
      context: '뉴스 기사가 사실을 편향되게 보도하거나, 렌즈의 굴곡 때문에 사물이 실제와 다르게 보일 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 말로는 twist가 있고, 반대말로는 사실을 바로잡거나 명확히 한다는 의미의 clarify가 자주 쓰입니다.',
    }),
    {
      definition: 'to twist out of a natural or original state or to give a false or misleading account of something',
      synonyms: ['falsify', 'warp', 'misrepresent'],
      antonyms: ['clarify', 'preserve', 'rectify'],
      exampleSentences: [
        { en: 'The media was accused of trying to distort the truth to influence public opinion.', ko: '언론은 여론에 영향을 미치기 위해 진실을 왜곡하려 했다는 비난을 받았습니다.' },
        { en: 'The heavy rain and wind can distort the way sound travels.', ko: '폭우와 바람은 소리가 전달되는 방식을 왜곡할 수 있습니다.' },
      ],
      wordDistractors: ['distraught', 'disport', 'detour'],
      definitionDistractors: [
        'to accurately reproduce an original image or sound without any changes',
        'to carefully restore a damaged artifact to its former condition',
        'to simplify a complicated idea so it can be easily understood',
      ],
    }
  ),
  word('diverse', '다양한', 6, 'adjective',
    ['단일한', '동질적인', '일원화된', '단조로운', '균일한', '동일한', '단순한', '제한적인', '편협한', '편파적인'],
    tips({
      etymology: '어근 \'di-\'(분리)와 \'verse\'(돌다)가 결합되어, 한 방향이 아닌 여러 방향으로 흩어져 돌아가고 있는 상태를 의미합니다.',
      visual: '뷔페 식당의 테이블 위에 놓인 수십 가지의 서로 다른 국적과 색깔의 요리들을 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'Die\'(죽다)와 \'Verse\'(시구)를 연결해 \'죽도록 많은 시의 구절들\'처럼 양이 많고 다채롭다고 연상해 보세요.',
      context: '단순히 개수가 많은 것이 아니라, 구성 요소들의 성격이나 종류가 서로 확연히 다를 때 주로 사용합니다.',
      synonymAntonym: 'varied와 assorted가 비슷한 의미를 가지며, 모든 것이 똑같은 상태를 뜻하는 uniform이 반대말입니다.',
    }),
    {
      definition: 'including many different types of people or things that are distinct from one another',
      synonyms: ['varied', 'various', 'assorted'],
      antonyms: ['uniform', 'identical', 'homogeneous'],
      exampleSentences: [
        { en: 'The city has a diverse population with people from all over the world.', ko: '그 도시는 전 세계에서 온 사람들로 구성된 다양한 인구를 보유하고 있다.' },
        { en: 'We need to consider diverse perspectives before making a final decision.', ko: '최종 결정을 내리기 전에 우리는 다양한 관점들을 고려해야 한다.' },
      ],
      wordDistractors: ['divert', 'adverse', 'reverse'],
      definitionDistractors: [
        'consisting of a single type or category without any variation',
        'arranged in a specific order from smallest to largest',
        'scattered randomly across a wide area without any pattern',
      ],
    }
  ),
  word('doctrine', '교의', 6, 'noun',
    ['실천', '경험', '실험', '불확실', '유연', '가변', '실용', '경험주의', '실증', '변용'],
    tips({
      etymology: '라틴어 \'docere(가르치다)\'에서 유래하여, 권위 있는 기관에서 가르치는 핵심 내용을 의미합니다.',
      visual: '종교 단체나 정당의 지도자가 단상 위에서 엄숙하게 낭독하는 공식적인 규칙 책자를 떠올려 보세요.',
      soundAlike: '박사를 뜻하는 \'Doctor\'와 어원이 같습니다. 박사가 전문 지식을 가르치듯, 확립된 지식 체계를 뜻합니다.',
      context: '주로 종교적 신념, 정치적 강령, 또는 국가 간의 외교적 원칙을 설명할 때 자주 등장하는 격식 있는 단어입니다.',
      synonymAntonym: '비슷한 말로는 creed나 dogma가 있으며, 반대되는 개념으로는 의심을 뜻하는 skepticism이나 불신을 뜻하는 disbelief가 있습니다.',
    }),
    {
      definition: 'A set of fundamental principles or beliefs established and taught by a specific religious, political, or philosophical group.',
      synonyms: ['creed', 'dogma', 'tenet'],
      antonyms: ['skepticism', 'disbelief', 'unorthodoxy'],
      exampleSentences: [
        { en: 'The government announced a new foreign policy doctrine to strengthen international ties.', ko: '정부는 국제적 유대를 강화하기 위해 새로운 외교 정책 원칙을 발표했다.' },
        { en: 'Adherence to religious doctrine is a central part of life in this community.', ko: '종교적 교의를 고수하는 것은 이 공동체 삶의 핵심적인 부분이다.' },
      ],
      wordDistractors: ['doctor', 'document', 'dolphin'],
      definitionDistractors: [
        'a personal opinion held by an individual without institutional backing',
        'a scientific hypothesis that has not yet been tested or proven',
        'a practical manual providing step-by-step instructions for a task',
      ],
    }
  ),
  word('domestic', '국내의', 6, 'adjective',
    ['해외의', '국제적인', '외국의', '수입된', '이국적인', '외래의', '해외로의', '타국의', '국제상의', '세계적인'],
    tips({
      etymology: '집을 뜻하는 라틴어 \'domus\'에서 유래하여, 울타리 안쪽인 \'집안의\' 또는 \'나라 안의\'라는 의미를 가집니다.',
      visual: '공항 터미널 전광판에서 비행기 아이콘과 함께 적힌 \'Domestic Terminal(국내선 터미널)\' 표지판을 상상해 보세요.',
      soundAlike: '도메스틱(Domestic)의 \'도\'를 \'도(道) 안\'으로 기억하여 우리나라 도 경계 안쪽의 일이라고 연상해 보세요.',
      context: '가정 내의 폭력(violence)이나 국가 내부의 총생산(GDP)을 논할 때 핵심적으로 사용되는 형용사입니다.',
      synonymAntonym: '나라 안을 뜻하는 internal과 유의어이며, 바다 건너 밖을 뜻하는 foreign과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Relating to the internal affairs of a country or the private activities of a household rather than external or international matters.',
      synonyms: ['internal', 'household', 'native'],
      antonyms: ['foreign', 'international', 'external'],
      exampleSentences: [
        { en: 'The government is focusing on domestic issues such as education and healthcare.', ko: '정부는 교육과 의료 같은 국내 현안에 집중하고 있다.' },
        { en: 'Dogs and cats have been domestic animals for thousands of years.', ko: '개와 고양이는 수천 년 동안 가축으로 길들여져 왔다.' },
      ],
      wordDistractors: ['dominant', 'majestic', 'nomadic'],
      definitionDistractors: [
        'relating to trade and commerce conducted between multiple countries',
        'describing wildlife that lives in natural habitats without human contact',
        'pertaining to industrial manufacturing processes in urban factories',
      ],
    }
  ),
  word('dominant', '지배적인', 6, 'adjective',
    ['종속적인', '열등한', '부수적인', '미미한', '보조적인', '수동적인', '취약한', '미약한', '하위의', '소극적인'],
    tips({
      etymology: '라틴어 \'dominus(주인)\'에서 유래했습니다. 집안의 주인처럼 권력을 쥐고 통제한다는 의미를 담고 있습니다.',
      visual: '체스판 위에서 다른 말들을 압도하며 중앙을 차지하고 있는 가장 강력한 퀸의 모습을 상상해 보세요.',
      soundAlike: '동사형인 dominate(지배하다)와 발음이 비슷하므로, \'지배하는 상태\'를 나타내는 형용사임을 기억하세요.',
      context: '경제 분야에서는 시장 점유율이 가장 높은 기업을, 생물학에서는 유전적으로 발현되기 쉬운 형질을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '유사어로는 prevailing(우세한)이 있고, 반대어로는 subordinate(종속된)나 submissive(순종적인)가 자주 쓰입니다.',
    }),
    {
      definition: 'having power and influence over others or being the most noticeable feature of something',
      synonyms: ['prevailing', 'foremost', 'commanding'],
      antonyms: ['subordinate', 'submissive', 'secondary'],
      exampleSentences: [
        { en: 'The company has maintained a dominant position in the global market for decades.', ko: '그 회사는 수십 년 동안 세계 시장에서 지배적인 위치를 유지해 왔다.' },
        { en: 'In many social groups, a single individual often becomes the dominant figure.', ko: '많은 사회 집단에서 흔히 한 개인이 지배적인 인물이 된다.' },
      ],
      wordDistractors: ['dormant', 'domestic', 'prominent'],
      definitionDistractors: [
        'quietly supportive and working behind the scenes without recognition',
        'equally shared among all participants without any hierarchy',
        'newly introduced and not yet established in a particular field',
      ],
    }
  ),
  word('donate', '기부하다', 6, 'verb',
    ['받다', '소비하다', '보관하다', '차지하다', '빼앗다', '구걸하다', '갈취하다', '축적하다', '매수하다', '보유하다'],
    tips({
      etymology: '라틴어 \'donare(주다)\'에서 유래하여, 아무런 대가 없이 타인에게 무언가를 건네준다는 핵심 의미를 담고 있습니다.',
      visual: '구세군 자선냄비에 지폐를 넣거나, 헌혈의 집에서 팔을 걷고 혈액을 나누어 주는 따뜻한 장면을 상상해 보세요.',
      soundAlike: '유튜브나 트위치 같은 인터넷 방송에서 시청자가 창작자에게 후원하는 것을 \'도네(도네이션)\'라고 줄여 부르는 것과 같습니다.',
      context: '단순히 현금을 내는 것뿐만 아니라 헌혈(blood), 장기 기증(organ), 혹은 자신의 재능(talent)을 나누는 상황에서도 자주 쓰입니다.',
      synonymAntonym: '공헌하다는 contribute, 수여하다는 bestow와 비슷하며, 반대로 내가 무언가를 얻는 것은 receive나 take라고 합니다.',
    }),
    {
      definition: 'to provide money, food, or clothes to a charity or a group in need without expecting anything in return',
      synonyms: ['contribute', 'bestow', 'grant'],
      antonyms: ['receive', 'take', 'withdraw'],
      exampleSentences: [
        { en: 'He decided to donate his old clothes to a local charity.', ko: '그는 자신의 헌 옷들을 지역 자선 단체에 기부하기로 결정했다.' },
        { en: 'Many citizens donated money to the disaster relief fund after the earthquake.', ko: '지진 이후 많은 시민들이 재난 구호 기금에 돈을 기부했다.' },
      ],
      wordDistractors: ['denote', 'devote', 'dominate'],
      definitionDistractors: [
        'to invest money in a business with the expectation of financial returns',
        'to lend personal property temporarily under a signed agreement',
        'to sell unwanted possessions at a discounted price to clear space',
      ],
    }
  ),
  word('drastic', '급격한', 6, 'adjective',
    ['점진적인', '완만한', '부드러운', '점차적인', '느릿한', '미미한', '사소한', '일시적인', '안정적인', '순차적인'],
    tips({
      etymology: '그리스어 \'dran(행동하다)\'에서 유래하여, 단순히 움직이는 것이 아니라 아주 강력하고 과감하게 행동에 옮기는 것을 의미합니다.',
      visual: '완만한 언덕이 아니라 수직으로 깎아지른 듯한 절벽이나 90도로 꺾이는 그래프의 선을 떠올려 보세요.',
      soundAlike: '드라마틱(dramatic)과 발음이 비슷하지만, \'drastic\'은 훨씬 더 강제적이고 극단적인 조치나 변화에 쓰입니다.',
      context: '성적을 올리기 위해 잠을 4시간으로 줄이거나, 예산을 절반으로 깎는 등 아주 큰 결단이 필요한 상황에 사용합니다.',
      synonymAntonym: '뿌리부터 바꾸는 radical과 비슷하며, 거북이처럼 천천히 변하는 gradual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'likely to have a strong or far-reaching effect; radical and extreme',
      synonyms: ['severe', 'radical', 'extreme'],
      antonyms: ['gradual', 'mild', 'slight'],
      exampleSentences: [
        { en: 'The company had to take drastic measures to avoid bankruptcy.', ko: '그 회사는 파산을 피하기 위해 극단적인 조치를 취해야만 했다.' },
        { en: 'There has been a drastic change in the weather over the last few days.', ko: '지난 며칠 동안 날씨에 급격한 변화가 있었다.' },
      ],
      wordDistractors: ['dramatic', 'didactic', 'elastic'],
      definitionDistractors: [
        'happening slowly and predictably over a very long period of time',
        'carefully planned in advance to minimize any potential disruption',
        'having a minor and barely noticeable effect on the overall situation',
      ],
    }
  ),
  word('dwell', '거주하다', 6, 'verb',
    ['이사하다', '떠나다', '방문하다', '여행하다', '유목하다', '방랑하다', '부유하다', '이동하다', '이주하다', '이탈하다'],
    tips({
      etymology: '고대 영어 \'dwellan\'에서 유래했으며 본래 \'길을 잃게 하다\' 혹은 \'지체하다\'라는 의미에서 특정 장소에 \'머무르다\'라는 뜻으로 발전했습니다.',
      visual: '오래된 나무집 창가에 앉아 평화롭게 밖을 내다보며 오랜 시간 그곳을 지키는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'둘(2)\'과 비슷하죠? 두 명의 가족이 한 집에 오랫동안 단란하게 머무는 장면을 떠올려 보세요.',
      context: '주로 문학적인 표현에서 특정 장소에 거주한다는 의미로 쓰이거나, dwell on의 형태로 특정 생각에 깊이 몰두할 때 사용됩니다.',
      synonymAntonym: 'reside, inhabit은 거주한다는 유의어이며, depart, leave, vacate는 그 장소를 떠난다는 반대 의미를 가집니다.',
    }),
    {
      definition: 'to live or stay as a permanent resident in a specific location',
      synonyms: ['reside', 'inhabit', 'occupy'],
      antonyms: ['depart', 'leave', 'vacate'],
      exampleSentences: [
        { en: 'Many rare species of birds dwell within these protected forests.', ko: '많은 희귀종 새들이 이 보호림 안에 거주한다.' },
        { en: 'It is not healthy to dwell on your past mistakes for too long.', ko: '과거의 실수에 대해 너무 오랫동안 곱씹는 것은 건강에 좋지 않다.' },
      ],
      wordDistractors: ['swell', 'dwindle', 'dwarf'],
      definitionDistractors: [
        'to travel frequently from place to place without a fixed address',
        'to construct a new building or structure from the ground up',
        'to temporarily visit a location for a short recreational trip',
      ],
    }
  ),
  word('dynamic', '역동적인', 6, 'adjective',
    ['정적인', '고정된', '단조로운', '무기력한', '정체된', '불변의', '수동적인', '침체된', '나태한', '고착된'],
    tips({
      etymology: '그리스어 \'dunamis\'에서 유래했으며 이는 \'힘\'이나 \'능력\'을 의미합니다.',
      visual: '끊임없이 폭발하며 에너지를 뿜어내는 화산이나 빠르게 변하는 도시의 야경을 떠올려 보세요.',
      soundAlike: '폭발적인 힘을 가진 \'다이너마이트(Dynamite)\'와 어근이 같아 에너지가 넘치는 느낌을 줍니다.',
      context: '변화가 빠르고 활기찬 시장 상황이나 성격이 시원시원하고 활동적인 사람을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'energetic, vibrant, active는 활기찬 상태를, static, stagnant, fixed는 멈춰있는 상태를 뜻합니다.',
    }),
    {
      definition: 'characterized by constant change, activity, or progress and showing a lot of energy',
      synonyms: ['energetic', 'vibrant', 'vigorous'],
      antonyms: ['static', 'stagnant', 'lethargic'],
      exampleSentences: [
        { en: 'The city has a dynamic economy that attracts young entrepreneurs from all over the world.', ko: '그 도시는 전 세계의 젊은 기업가들을 끌어들이는 역동적인 경제를 가지고 있다.' },
        { en: 'A dynamic leader is needed to guide the team through these rapid changes.', ko: '이러한 급격한 변화 속에서 팀을 이끌기 위해서는 역동적인 리더가 필요하다.' },
      ],
      wordDistractors: ['dynamo', 'dynasty', 'dramatic'],
      definitionDistractors: [
        'remaining perfectly still and unchanged regardless of external forces',
        'operating according to a strict and predictable routine every day',
        'designed to be temporary and replaced after a short period of use',
      ],
    }
  ),
];
