import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch22: VocabItem[] = [
  word('afternoon', '오후', 2, 'noun',
    ['오전', '새벽', '황혼', '자정', '일출', '일몰', '심야', '아침', '저녁', '정오'],
    tips({
      etymology: '정오를 뜻하는 noon 뒤에 \'~후에\'를 뜻하는 after가 붙어 만들어진 단어입니다.',
      visual: '시계 바늘이 12시를 지나 해가 서서히 기울기 시작하는 나른한 풍경을 상상해 보세요.',
      soundAlike: '애프터눈... \'애프터(나중에) 눈(눈꺼풀이 무거워지는)\' 시간이라고 연상하면 쉽습니다.',
      context: '주로 점심 식사 이후부터 해가 지기 전까지의 시간대를 말하며 인사말로도 자주 쓰입니다.',
      synonymAntonym: '오전(morning)과 반대되는 개념이며, 한낮(midday) 이후의 시간을 의미합니다.',
    }),
    {
      definition: 'the period of time between the middle of the day and the evening',
      synonyms: ['postmeridiem', 'daylight', 'midday'],
      antonyms: ['morning', 'forenoon', 'midnight'],
      exampleSentences: [
        { en: 'We decided to go for a walk in the park this afternoon.', ko: '우리는 오늘 오후에 공원으로 산책을 가기로 결정했다.' },
        { en: 'The sun was shining brightly through the window all afternoon.', ko: '오후 내내 창문으로 햇살이 밝게 비치고 있었다.' },
      ],
    }
  ),
  word('against', '…에', 3, 'preposition',
    ['이전에', '이후에', '대신에', '통해', '기준으로', '관하여', '대하여', '안에', '밖에', '위에'],
    tips({
      etymology: '고대 영어 \'ongean\'에서 유래하여 \'반대하여\' 혹은 \'맞서서\'라는 의미를 가집니다.',
      visual: '벽에 몸을 기대고 있거나 거센 바람을 맞으며 걷는 모습을 상상해 보세요.',
      soundAlike: '어게인스트(against) - \'어게인(again)\'과 비슷하게 들리지만 끝에 \'스트\'가 붙어 강한 저항의 느낌을 줍니다.',
      context: '경쟁 상대와 맞붙거나 물리적인 표면에 기댈 때 주로 사용되는 전치사입니다.',
      synonymAntonym: '반대하는 의미의 versus와 찬성하는 의미의 for를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'in opposition to or in contact with something',
      synonyms: ['versus', 'opposing', 'counter'],
      antonyms: ['for', 'pro', 'supporting'],
      exampleSentences: [
        { en: 'The rain beat heavily against the window panes.', ko: '빗줄기가 창문에 세차게 부딪혔다.' },
        { en: 'Our team will play against the defending champions tomorrow.', ko: '우리 팀은 내일 디펜딩 챔피언과 경기를 치를 것이다.' },
      ],
    }
  ),
  word('age', '연령', 1, 'noun',
    ['이름', '성별', '직업', '주소', '국적', '취미', '성격', '외모', '신장', '체중'],
    tips({
      etymology: '라틴어 \'aevum(일생, 시대)\'에서 유래하여 존재해 온 시간의 길이를 뜻하게 되었습니다.',
      visual: '생일 케이크 위에 꽂힌 수많은 양초들을 보며 살아온 햇수를 떠올려 보세요.',
      soundAlike: '발음이 \'에이지\'이므로, \'에구, 지(제) 나이가 벌써 이렇게 됐나요?\'라고 기억해 보세요.',
      context: '박물관의 유물이나 사람의 신분증에서 가장 먼저 확인하는 정보 중 하나입니다.',
      synonymAntonym: '유의어인 era는 역사적 시대를, 반의어인 youth는 어린 시절을 강조할 때 주로 쓰입니다.',
    }),
    {
      definition: 'the length of time that a person has lived or a thing has existed',
      synonyms: ['lifetime', 'era', 'period'],
      antonyms: ['youth', 'infancy', 'childhood'],
      exampleSentences: [
        { en: 'She started learning to play the piano at the of five.', ko: '그녀는 5살의 나이에 피아노를 배우기 시작했습니다.' },
        { en: 'The wine improves with time as it stays in the cellar.', ko: '그 와인은 지하 저장고에서 숙성되면서 풍미가 좋아집니다.' },
      ],
    }
  ),
  word('agency', '기관', 5, 'noun',
    ['개인', '독립', '방해', '정지', '수동', '무능', '침체', '거절', '폐쇄', '소멸'],
    tips({
      etymology: '라틴어 agere(행하다)에서 유래하여, 특정한 일을 대신 행하는 조직이나 힘을 의미합니다.',
      visual: '정부 로고가 박힌 건물 입구에서 서류 가방을 든 사람들이 바쁘게 움직이는 모습을 상상해 보세요.',
      soundAlike: '에이전시(agency)라고 발음하며, 광고 대행사나 연예 기획사를 떠올리면 쉽습니다.',
      context: '정부 부처나 특정 서비스를 제공하는 전문 단체를 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '조직을 뜻하는 bureau와 유사하며, 개별적인 개인을 뜻하는 individual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A business or organization established to provide a particular service, typically one that involves organizing transactions between two other parties.',
      synonyms: ['bureau', 'organization', 'firm'],
      antonyms: ['individual', 'inactivity', 'weakness'],
      exampleSentences: [
        { en: 'The environmental protection agency released a new report on air quality.', ko: '환경 보호국은 공기 질에 대한 새로운 보고서를 발표했습니다.' },
        { en: 'She decided to hire a travel agency to plan her trip to Europe.', ko: '그녀는 유럽 여행 계획을 세우기 위해 여행사를 고용하기로 결정했습니다.' },
      ],
    }
  ),
  word('agenda', '안건', 6, 'noun',
    ['결과', '요약', '배경', '결론', '참석자', '회의록', '제안서', '보고서', '공지사항', '참고문헌'],
    tips({
      etymology: '라틴어 \'agere(행하다)\'에서 유래하여 \'해야 할 일들\'이라는 의미를 담고 있습니다.',
      visual: '회의실 테이블 위에 놓인 종이에 1번, 2번, 3번 순서대로 적힌 논의 주제들을 상상해 보세요.',
      soundAlike: '\'어젠다\'라고 발음하며 \'어제 다\' 못 끝낸 회의 안건들을 오늘 처리한다고 연상해 보세요.',
      context: '비즈니스 미팅이나 정치적 논의에서 가장 먼저 확인하는 항목 리스트를 말할 때 주로 쓰입니다.',
      synonymAntonym: '프로그램이나 스케줄과 비슷하지만, 주로 \'논의할 주제\'에 집중된 단어입니다.',
    }),
    {
      definition: 'A list of specific items or matters to be formally discussed or acted upon during a meeting.',
      synonyms: ['program', 'timetable', 'itinerary'],
      antonyms: ['disorder', 'confusion', 'improvisation'],
      exampleSentences: [
        { en: 'The first item on the meeting\'s list of topics is the budget proposal for next year.', ko: '회의 안건의 첫 번째 항목은 내년 예산안입니다.' },
        { en: 'The committee members agreed to add environmental issues to their formal plan of discussion.', ko: '위원회 위원들은 환경 문제를 공식 의제에 추가하기로 합의했습니다.' },
      ],
    }
  ),
  word('agent', '대리인', 7, 'noun',
    ['고객', '상사', '경쟁자', '방관자', '피고인', '방문객', '소유주', '기술자', '연구원', '수혜자'],
    tips({
      etymology: '라틴어 \'agere(행하다)\'에서 유래하여, 누군가를 대신해 실제로 행동을 취하는 사람을 뜻합니다.',
      visual: '유명 연예인이나 운동선수 옆에서 계약서를 검토하며 대신 협상해주는 매니저의 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'에이전트\'로 익숙하며, 비밀 요원(007)처럼 특수 임무를 수행하는 대리인을 연상하면 쉽습니다.',
      context: '비즈니스 계약, 부동산 거래, 혹은 연예계 매니지먼트 상황에서 본인을 대신해 권한을 행사할 때 주로 쓰입니다.',
      synonymAntonym: '대표자를 뜻하는 representative와 유사하며, 모든 일을 직접 처리하는 본인(principal)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person or business authorized to act on behalf of another to transact business or manage affairs.',
      synonyms: ['representative', 'delegate', 'proxy'],
      antonyms: ['principal', 'client', 'master'],
      exampleSentences: [
        { en: 'The real estate agent showed us several houses that fit our budget.', ko: '부동산 중개인은 우리 예산에 맞는 집들을 여러 채 보여주었습니다.' },
        { en: 'She acts as a literary agent for several famous novelists.', ko: '그녀는 여러 유명 소설가들의 출판 대리인으로 활동하고 있습니다.' },
      ],
    }
  ),
  word('ago', '이전에', 2, 'adverb',
    ['이후에', '지금', '내일', '항상', '자주', '결코', '가끔', '이미', '아직', '곧'],
    tips({
      etymology: '고대 영어 \'agone\'에서 유래했으며, \'지나가 버린(gone by)\'이라는 의미를 담고 있습니다.',
      visual: '달력의 오늘 날짜에서 화살표가 왼쪽(과거)으로 길게 뻗어 나가는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어(a) 고(go)\'와 비슷하므로, \'어디론가 가버린(go) 과거\'라고 연상하면 쉽습니다.',
      context: '현재를 기준으로 얼마나 먼 과거인지를 나타낼 때 사용하며, 항상 시간 표현 뒤에 위치합니다.',
      synonymAntonym: '과거를 뜻하는 back과 유의어이며, 미래를 뜻하는 later, ahead와는 반대되는 개념입니다.',
    }),
    {
      definition: 'In the past; back in time from the present moment.',
      synonyms: ['previously', 'before', 'back'],
      antonyms: ['hence', 'later', 'ahead'],
      exampleSentences: [
        { en: 'I graduated from university ten years past this date.', ko: '나는 10년 전에 대학교를 졸업했다.' },
        { en: 'The dinosaurs lived on Earth a very long time in the past.', ko: '공룡들은 아주 오래전에 지구에 살았다.' },
      ],
    }
  ),
  word('agree', '동의하다', 3, 'verb',
    ['거절하다', '반대하다', '무시하다', '의심하다', '비판하다', '논쟁하다', '포기하다', '금지하다', '지연시키다', '실패하다'],
    tips({
      etymology: '라틴어 \'ad(to)\'와 \'gratus(pleasing)\'가 결합되어, 서로 기분 좋게 마음이 맞는 상태를 의미합니다.',
      visual: '두 사람이 악수를 하며 환하게 웃고 있는 계약 성사 장면을 상상해 보세요.',
      soundAlike: '\'어 그리(agree) 해!\'라고 상대방의 제안을 긍정적으로 받아들이는 상황을 연상해 보세요.',
      context: '의견이 일치할 때뿐만 아니라, 기후나 음식이 몸에 잘 맞을 때도 이 단어를 사용합니다.',
      synonymAntonym: 'concur는 공식적인 동의를, disagree는 의견이 엇갈리는 반대 상황을 나타냅니다.',
    }),
    {
      definition: 'to share the same opinion about something or to say yes to a proposal',
      synonyms: ['concur', 'assent', 'accord'],
      antonyms: ['disagree', 'differ', 'oppose'],
      exampleSentences: [
        { en: 'I completely with your decision to start a new business.', ko: '당신의 새로운 사업을 시작하겠다는 결정에 전적으로 동의합니다.' },
        { en: 'The two parties finally managed to on the terms of the contract.', ko: '양측은 마침내 계약 조건에 합의할 수 있었습니다.' },
      ],
    }
  ),
  word('agriculture', '농업', 4, 'noun',
    ['농사', '재배', '경작', '농경', '목축', '원예', '농장', '농촌', '식량 생산', '농업경영'],
    tips({
      etymology: '라틴어 \'ager(밭)\'와 \'cultura(경작)\'가 합쳐져 밭을 일구는 기술을 뜻하게 되었습니다.',
      visual: '끝없이 펼쳐진 황금빛 밀밭에서 트랙터가 수확을 하고 있는 풍경을 상상해 보세요.',
      soundAlike: '\'애그리컬처\'에서 \'애그리\'를 \'아기\'로 연상하여, 아기들이 흙을 만지며 농사를 배우는 모습을 떠올려 보세요.',
      context: '국가 경제의 기반이 되는 1차 산업을 설명할 때나 식량 안보 문제를 다룰 때 자주 등장합니다.',
      synonymAntonym: 'farming과 유사하지만, 학문적이거나 산업적인 규모를 말할 때는 이 단어가 더 적합합니다.',
    }),
    {
      definition: 'the science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products',
      synonyms: ['farming', 'cultivation', 'husbandry'],
      antonyms: ['industry', 'urbanization', 'manufacturing'],
      exampleSentences: [
        { en: 'Modern technology has significantly transformed the methods used in global agriculture.', ko: '현대 기술은 세계 농업에 사용되는 방식들을 크게 변화시켰습니다.' },
        { en: 'The country\'s economy relies heavily on agriculture and the export of organic produce.', ko: '그 나라의 경제는 농업과 유기농 농산물 수출에 크게 의존하고 있습니다.' },
      ],
    }
  ),
  word('ahead', '전방에', 1, 'adverb',
    ['뒤에', '옆으로', '아래에', '과거에', '반대로', '안쪽으로', '멀리', '가까이', '주변에', '중간에'],
    tips({
      etymology: '접두사 a-(~에)와 head(머리)가 합쳐져 \'머리가 향하는 방향\'이라는 의미에서 유래되었습니다.',
      visual: '달리기 경주에서 결승선을 향해 가장 앞서 달려 나가는 선수의 모습을 상상해 보세요.',
      soundAlike: '\'어헤드\'라고 발음하며, \'어! 헤드(머리)가 저 앞에 있네\'라고 연상하면 쉽습니다.',
      context: '시간적으로 미래를 나타내거나 공간적으로 눈앞의 전방을 가리킬 때 주로 사용됩니다.',
      synonymAntonym: 'forward와 유의어 관계이며, 뒤를 뜻하는 behind와는 반대되는 개념입니다.',
    }),
    {
      definition: 'further forward in space or time; in front of someone or something.',
      synonyms: ['forward', 'onward', 'before'],
      antonyms: ['behind', 'backward', 'past'],
      exampleSentences: [
        { en: 'The road stretches for miles straight in front of us.', ko: '길이 우리 전방으로 수 마일 동안 곧게 뻗어 있습니다.' },
        { en: 'You should plan for the challenges that lie in the future.', ko: '당신은 앞에 놓인 도전 과제들에 대해 계획을 세워야 합니다.' },
      ],
    }
  ),
  word('aid', '도움', 5, 'noun',
    ['방해', '지연', '거절', '손해', '위험', '무시', '공격', '파괴', '침묵', '포기'],
    tips({
      etymology: '라틴어 \'adjutare\'에서 유래하여 누군가의 곁에서 힘을 보태준다는 의미를 담고 있습니다.',
      visual: '재난 현장에서 구호 물품 상자에 커다랗게 적힌 \'AID\' 글자를 상상해 보세요.',
      soundAlike: '마시는 \'에이드(ade)\'처럼 갈증 날 때 시원한 도움을 주는 존재로 기억하세요.',
      context: '국제적인 구호 활동이나 응급 처치를 말할 때 \'First Aid\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: '도움을 주는 assistance와 반대로 진행을 가로막는 hindrance를 함께 비교해 보세요.',
    }),
    {
      definition: 'the act of providing help, support, or relief to someone in need',
      synonyms: ['assistance', 'support', 'relief'],
      antonyms: ['hindrance', 'obstruction', 'opposition'],
      exampleSentences: [
        { en: 'The government sent emergency food and medical supplies to the earthquake victims.', ko: '정부는 지진 피해자들에게 비상 식량과 의료 지원품을 보냈습니다.' },
        { en: 'He used a walking stick as an effective tool to help his mobility.', ko: '그는 이동을 돕기 위한 효과적인 도구로 지팡이를 사용했습니다.' },
      ],
    }
  ),
  word('aim', '목표', 6, 'noun',
    ['결과', '과정', '우연', '실패', '출발', '포기', '방황', '거절', '과거', '휴식'],
    tips({
      etymology: '라틴어 \'estimare(평가하다)\'에서 유래하여, 가치 있는 것을 겨냥한다는 의미로 발전했습니다.',
      visual: '양궁 선수가 과녁의 정중앙(bullseye)을 뚫어지게 쳐다보며 활시위를 당기는 모습을 상상하세요.',
      soundAlike: '발음이 \'에임\'이므로, 게임에서 적을 정확히 맞추기 위해 조준하는 \'에임\'을 떠올리면 쉽습니다.',
      context: '주로 장기적인 인생의 목표나, 물리적으로 무언가를 맞추기 위한 조준의 의미로 쓰입니다.',
      synonymAntonym: '목적을 뜻하는 goal과 유사하며, 아무런 계획이나 방향이 없는 상태인 aimlessness와 대비됩니다.',
    }),
    {
      definition: 'a result that your plans or actions are intended to achieve',
      synonyms: ['goal', 'objective', 'purpose'],
      antonyms: ['avoidance', 'neglect', 'purposelessness'],
      exampleSentences: [
        { en: 'Our main objective is to improve the quality of customer service.', ko: '우리의 주요 목표는 고객 서비스의 질을 향상시키는 것입니다.' },
        { en: 'She went to London with the specific intention of finding a job in fashion.', ko: '그녀는 패션 분야의 일자리를 구하겠다는 구체적인 목적을 가지고 런던으로 갔습니다.' },
      ],
    }
  ),
  word('airplane', '비행기', 2, 'noun',
    ['자동차', '기차', '자전거', '오토바이', '트럭', '버스', '지하철', '택시', '보트', '유모차'],
    tips({
      etymology: '공기를 뜻하는 air와 평평한 면을 뜻하는 plane이 합쳐져 날개를 가진 비행체를 의미합니다.',
      visual: '구름 위를 가르며 날아가는 거대한 날개와 엔진을 가진 기체를 상상해 보세요.',
      soundAlike: '에어플레인 - \'에어(공기)\' 위를 \'플레인(평평한 날개)\'으로 날아가는 소리를 연상하세요.',
      context: '해외 여행을 가거나 공항에 갈 때 가장 먼저 떠올리는 교통수단입니다.',
      synonymAntonym: 'aircraft와 유사하며, 지상 이동 수단인 car나 train과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.',
      synonyms: ['aircraft', 'jet', 'airliner'],
      antonyms: ['submarine', 'automobile', 'pedestrian'],
      exampleSentences: [
        { en: 'The giant vessel took off smoothly from the international runway.', ko: '그 거대한 기체는 국제공항 활주로에서 부드럽게 이륙했습니다.' },
        { en: 'I watched the white streaks left by a high-flying transport in the blue sky.', ko: '나는 푸른 하늘 높이 날아가는 수송기가 남긴 하얀 비행운을 바라보았습니다.' },
      ],
    }
  ),
  word('aircraft', '항공기', 7, 'noun',
    ['자동차', '선박', '기차', '자전거', '오토바이', '잠수함', '트럭', '버스', '유람선', '열차'],
    tips({
      etymology: '공기를 뜻하는 air와 기술 또는 배를 뜻하는 craft가 결합되어 하늘을 나는 배라는 의미를 가집니다.',
      visual: '구름 위를 가르며 날아가는 거대한 여객기나 헬리콥터의 모습을 상상해 보세요.',
      soundAlike: '에어(air) + 크래프트(craft). 공중에서 기술적으로 움직이는 기계라고 소리 내어 읽어보세요.',
      context: '민간 항공기뿐만 아니라 군용 전투기나 헬리콥터를 통칭할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'airplane보다는 더 넓은 범위를 포함하는 단어이며, 지상 탈것인 land vehicle과 대조됩니다.',
    }),
    {
      definition: 'A machine or vehicle that is capable of flight in the atmosphere, including airplanes, helicopters, and gliders.',
      synonyms: ['airplane', 'flying machine', 'aeroplane'],
      antonyms: ['land vehicle', 'watercraft', 'submarine'],
      exampleSentences: [
        { en: 'The pilot performed a safety check on the entire vessel before takeoff.', ko: '조종사는 이륙 전 기체 전체에 대한 안전 점검을 실시했습니다.' },
        { en: 'Modern technology allows these flying machines to travel long distances without refueling.', ko: '현대 기술 덕분에 이러한 비행체들은 연료 재보급 없이 먼 거리를 이동할 수 있습니다.' },
      ],
    }
  ),
  word('airline', '항공사', 3, 'noun',
    ['공항', '비행기', '승무원', '탑승권', '활주로', '관제탑', '수하물', '여객기', '항해', '기내식'],
    tips({
      etymology: '공중을 뜻하는 air와 정해진 노선을 뜻하는 line이 합쳐져 정기적으로 비행기를 운행하는 회사를 의미하게 되었습니다.',
      visual: '비행기 꼬리 날개에 그려진 화려한 로고와 유니폼을 입은 직원들이 있는 카운터를 상상해 보세요.',
      soundAlike: '에어라인 - \'에어(공기)\' 위로 \'라인(선)\'을 그리며 날아가는 비행기 회사를 떠올려 보세요.',
      context: '여행을 예약할 때 어떤 항공사를 이용할지 결정하는 상황에서 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'carrier나 airways와 비슷한 의미로 쓰이며, 육상 운송 수단과는 대비되는 개념입니다.',
    }),
    {
      definition: 'A commercial organization that provides regular services for carrying passengers or goods by aircraft.',
      synonyms: ['carrier', 'airways', 'aviation company'],
      antonyms: ['railway', 'shipping line', 'bus company'],
      exampleSentences: [
        { en: 'The national airline announced several new international routes this morning.', ko: '국영 항공사는 오늘 아침 여러 개의 새로운 국제 노선을 발표했습니다.' },
        { en: 'I decided to book my flight with a low-cost airline to save money.', ko: '나는 돈을 아끼기 위해 저가 항공사에서 비행기 표를 예약하기로 결정했습니다.' },
      ],
    }
  ),
  word('airport', '공항', 1, 'noun',
    ['기차역', '항구', '버스정류장', '지하철역', '매표소', '주차장', '고속도로', '선착장', '휴게소', '검문소'],
    tips({
      etymology: '공기(air)를 가르는 비행기가 드나드는 항구(port)라는 의미가 합쳐진 단어입니다.',
      visual: '거대한 활주로와 비행기들이 줄지어 서 있는 국제 터미널의 풍경을 상상해 보세요.',
      soundAlike: '에어(air)가 통하는 포트(port)라고 발음하며 하늘의 항구임을 기억하세요.',
      context: '여행을 떠나기 위해 여권을 챙겨 비행기를 타러 가는 장소를 말할 때 주로 쓰입니다.',
      synonymAntonym: '비행장이란 뜻의 airfield와 유사하며, 육지의 역인 station과는 대조됩니다.',
    }),
    {
      definition: 'A complex of runways and buildings for the taking off, landing, and maintenance of civil aircraft.',
      synonyms: ['airfield', 'airstrip', 'terminal'],
      antonyms: ['seaport', 'harbor', 'station'],
      exampleSentences: [
        { en: 'We need to arrive at the terminal two hours before our flight departs.', ko: '우리는 비행기 이륙 2시간 전에는 공항에 도착해야 합니다.' },
        { en: 'The taxi dropped us off right in front of the international departure gate.', ko: '택시는 우리를 국제선 출국 게이트 바로 앞에 내려주었습니다.' },
      ],
    }
  ),
  word('aisle', '측면복도', 4, 'noun',
    ['복도', '현관', '계단', '엘리베이터', '창가', '벽면', '천장', '바닥', '기둥', '난간'],
    tips({
      etymology: '라틴어 ala(날개)에서 유래하여 건물의 중심부 옆에 붙은 날개 같은 측면 공간을 의미하게 되었습니다.',
      visual: '비행기나 기차에서 좌석 사이에 길게 뻗어 있는 통로를 걷는 승무원의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'I\'ll(아이을)\'과 비슷합니다. \'내가(I\'ll) 통로 쪽으로 갈게\'라고 기억하면 쉽습니다.',
      context: '마트에서 물건을 찾거나 비행기 좌석을 예약할 때 \'aisle seat\'이라는 표현으로 자주 접할 수 있습니다.',
      synonymAntonym: 'passage와 같은 통로를 뜻하는 단어와 함께 외우고, 중앙을 뜻하는 center와 대비해 보세요.',
    }),
    {
      definition: 'A long narrow space between rows of seats in an aircraft, cinema, or church.',
      synonyms: ['passage', 'corridor', 'pathway'],
      antonyms: ['center', 'obstruction', 'barrier'],
      exampleSentences: [
        { en: 'The bride walked slowly down the long path toward the altar.', ko: '신부는 제단을 향해 긴 통로를 천천히 걸어갔습니다.' },
        { en: 'Would you prefer a window seat or one next to the passage?', ko: '창가 좌석을 원하시나요, 아니면 통로 쪽 좌석을 원하시나요?' },
      ],
    }
  ),
  word('alert', '경보', 5, 'noun',
    ['침묵', '방관', '무시', '평온', '안전', '해제', '망각', '수면', '정지', '방심'],
    tips({
      etymology: '이탈리아어 \'all\'erta\'에서 유래했으며, \'언덕 위에서 망을 보다\'라는 군사적 의미에서 경계와 경보의 뜻으로 발전했습니다.',
      visual: '스마트폰 화면에 빨간색 느낌표와 함께 긴급 알림창이 뜨는 긴박한 상황을 상상해 보세요.',
      soundAlike: '\'얼러트\'라고 발음하며, 위험이 닥쳤을 때 \'얼른\' 피하라고 알려주는 소리라고 연상하면 쉽습니다.',
      context: '기상 특보나 보안 시스템에서 위험을 알리는 신호나 상태를 말할 때 주로 사용됩니다.',
      synonymAntonym: '위험을 알리는 alarm과 유사하며, 아무런 경계가 없는 상태인 indifference와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A signal or message that warns of danger or an impending event that requires immediate attention.',
      synonyms: ['alarm', 'warning', 'signal'],
      antonyms: ['indifference', 'unawareness', 'inattention'],
      exampleSentences: [
        { en: 'The government issued a flood alert after several days of heavy rain.', ko: '며칠간의 폭우 끝에 정부는 홍수 경보를 발령했습니다.' },
        { en: 'Security guards are on constant alert for any suspicious activity in the building.', ko: '보안 요원들은 건물 내의 어떠한 수상한 활동에도 대비해 항상 경계 태세를 유지하고 있습니다.' },
      ],
    }
  ),
  word('alien', '외국의', 6, 'adjective',
    ['친숙한', '토착의', '국내의', '익숙한', '평범한', '전통적인', '내부의', '유사한', '일반적인', '공통의'],
    tips({
      etymology: '라틴어 \'alius(다른)\'에서 유래하여, 내가 속한 곳과 \'다른\' 곳에서 왔다는 의미를 담고 있습니다.',
      visual: '여권을 들고 낯선 공항 입구에 서서 주변의 모든 것이 생소하게 느껴지는 장면을 상상해 보세요.',
      soundAlike: '\'에일리언\' 영화를 떠올려 보세요. 지구인이 아닌 \'외계의\' 존재는 우리에게 매우 낯설고 이질적입니다.',
      context: '정치적 맥락에서는 \'외국인\'을 뜻하지만, 추상적으로는 어떤 집단의 성격과 \'이질적인\' 상황을 묘사할 때 씁니다.',
      synonymAntonym: 'foreign과 유사하지만, native나 familiar와는 정반대의 낯설고 이질적인 느낌을 강조합니다.',
    }),
    {
      definition: 'belonging to a foreign country or nation, or being strikingly different and unfamiliar in nature',
      synonyms: ['foreign', 'exotic', 'unfamiliar'],
      antonyms: ['native', 'familiar', 'indigenous'],
      exampleSentences: [
        { en: 'The concept of individual freedom was completely alien to the strict regime.', ko: '개인의 자유라는 개념은 그 엄격한 정권에게는 완전히 생소한 것이었다.' },
        { en: 'She found herself in an alien culture where she didn\'t speak the language.', ko: '그녀는 언어가 통하지 않는 이질적인 문화 속에 있는 자신을 발견했다.' },
      ],
    }
  ),
  word('alike', '비슷한', 7, 'adjective',
    ['다른', '독특한', '반대의', '동일한', '평범한', '복잡한', '단순한', '명확한', '희귀한', '거대한'],
    tips({
      etymology: '고대 영어 \'gelic\'에서 유래했으며, \'a-(~와 같은)\'와 \'like(모양)\'가 합쳐져 외형이나 성질이 같음을 뜻하게 되었습니다.',
      visual: '쌍둥이가 똑같은 옷을 입고 나란히 서 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어라이크\'이므로, \'어? 라이크(like)하네!\' 즉, 서로 좋아하는 취향이 비슷하다고 연상하세요.',
      context: '주로 명사 뒤에서 서술적으로 쓰이거나, \'A and B alike\' 형태로 \'A와 B 둘 다 마찬가지로\'라는 의미로 자주 쓰입니다.',
      synonymAntonym: 'similar와는 유의어 관계이며, 완전히 다른 상태를 뜻하는 different와는 반의어 관계입니다.',
    }),
    {
      definition: 'having a close resemblance to each other in appearance, character, or nature',
      synonyms: ['similar', 'identical', 'comparable'],
      antonyms: ['different', 'distinct', 'dissimilar'],
      exampleSentences: [
        { en: 'The two sisters look so much that people often mistake them for twins.', ko: '그 두 자매는 너무 비슷하게 생겨서 사람들이 종종 그들을 쌍둥이로 착각한다.' },
        { en: 'This law applies to rich and poor people in the same way.', ko: '이 법은 부자와 가난한 사람 모두에게 똑같이 적용된다.' },
      ],
    }
  ),
  word('all', '모든', 2, 'adjective',
    ['일부의', '절반의', '희귀한', '부족한', '개별적인', '특정한', '사소한', '제한된', '결핍된', '고립된'],
    tips({
      etymology: '고대 영어 eall에서 유래하여 \'전체\', \'완전함\'을 뜻하는 뿌리를 가지고 있습니다.',
      visual: '피자 한 판이 조각나지 않고 온전하게 상자 안에 가득 차 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'올\'이므로, 모든 사람이 \'올\'라타 있는 버스를 떠올리면 쉽습니다.',
      context: '전체를 강조하고 싶을 때 사용하며, 예외가 하나도 없음을 나타낼 때 유용합니다.',
      synonymAntonym: '전체를 뜻하는 whole과 반대되는 개념인 none을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'The entire quantity, amount, or extent of a particular group or thing.',
      synonyms: ['entire', 'whole', 'complete'],
      antonyms: ['none', 'nothing', 'zero'],
      exampleSentences: [
        { en: 'She spent the whole day cleaning the house until every room was tidy.', ko: '그녀는 모든 방이 깨끗해질 때까지 하루 종일 집을 청소했습니다.' },
        { en: 'The teacher asked the students to finish the entire assignment by Friday.', ko: '선생님은 학생들에게 금요일까지 모든 과제를 끝내라고 요청했습니다.' },
      ],
    }
  ),
  word('ally', '동맹하다', 4, 'verb',
    ['분리하다', '대립하다', '거절하다', '무시하다', '경쟁하다', '방해하다', '공격하다', '배신하다', '지연시키다', '포기하다'],
    tips({
      etymology: '라틴어 alligare(결합하다)에서 유래하여, 서로를 묶어 하나로 만든다는 의미를 담고 있습니다.',
      visual: '두 나라의 정상들이 웃으며 악수를 하고 국기를 나란히 세워둔 평화 회담 장면을 상상해 보세요.',
      soundAlike: '발음이 \'얼라이\'와 비슷하므로, 우리 편을 \'얼러(달래)\'서 내 편으로 만든다고 연상해 보세요.',
      context: '국제 관계나 비즈니스 파트너십에서 공동의 이익을 위해 협력 관계를 맺을 때 주로 사용됩니다.',
      synonymAntonym: 'unite와 함께 외우고, 적대적인 관계를 뜻하는 oppose와 반대 개념으로 정리하세요.',
    }),
    {
      definition: 'to join with another person, group, or country in order to give or get support',
      synonyms: ['unite', 'associate', 'league'],
      antonyms: ['estrange', 'separate', 'oppose'],
      exampleSentences: [
        { en: 'The small nation decided to join the powerful federation to protect its borders.', ko: '그 소국은 국경을 보호하기 위해 강대국 연합과 동맹하기로 결정했다.' },
        { en: 'Several tech companies chose to combine their resources to develop the new software.', ko: '몇몇 기술 기업들은 새로운 소프트웨어를 개발하기 위해 자원을 합쳐 협력하기로 했다.' },
      ],
    }
  ),
  word('almost', '거의', 3, 'adverb',
    ['뒤늦게', '점차', '반복적으로', '우선', '빠르게', '천천히', '자주', '가끔', '항상', '이미'],
    tips({
      etymology: '모든 것을 뜻하는 all과 대부분을 뜻하는 most가 합쳐져 \'전부에 아주 가까운\' 상태를 나타냅니다.',
      visual: '결승선 바로 앞에서 손을 뻗고 있는 마라톤 선수의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'올모스트\'이므로 \'올(All) 다 왔어, 모스트(Most) 거의 다\'라고 외워보세요.',
      context: '완성되기 직전이나 목표에 도달하기 직전의 아슬아슬한 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'nearly와 의미가 비슷하며, 완전히 도달한 상태인 exactly와는 반대되는 개념입니다.',
    }),
    {
      definition: 'very nearly but not quite completely',
      synonyms: ['nearly', 'practically', 'virtually'],
      antonyms: ['exactly', 'completely', 'barely'],
      exampleSentences: [
        { en: 'I have finished my homework and can go out now.', ko: '숙제를 거의 다 끝내서 이제 외출할 수 있어요.' },
        { en: 'It was midnight when we finally arrived at the hotel.', ko: '우리가 호텔에 도착했을 때는 거의 자정이었다.' },
      ],
    }
  ),
  word('along', '-을', 1, 'preposition',
    ['뒤에', '근처에', '맞은편에', '동안', '이전에', '이후에', '대신에', '통해', '기준으로', '관하여'],
    tips({
      etymology: '고대 영어 \'andlang\'에서 유래했으며, \'길이를 따라 평행하게\'라는 의미를 담고 있습니다.',
      visual: '긴 강변이나 도로를 따라 쭉 걷고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어~롱(long)\'과 비슷하므로 \'긴(long) 길을 따라\'라고 연상하면 쉽습니다.',
      context: '주로 해안가, 길, 복도처럼 선형으로 된 장소를 이동할 때 자주 쓰입니다.',
      synonymAntonym: '옆을 따라가는 beside와 비슷하지만, 멀어지는 away from과는 반대되는 개념입니다.',
    }),
    {
      definition: 'moving in a constant direction on or next to a path or line',
      synonyms: ['alongside', 'parallel to', 'beside'],
      antonyms: ['across', 'away from', 'perpendicular to'],
      exampleSentences: [
        { en: 'We enjoyed a peaceful walk along the riverbank at sunset.', ko: '우리는 일몰 때 강변을 따라 평화로운 산책을 즐겼다.' },
        { en: 'There are many beautiful flowers planted along the garden path.', ko: '정원 길을 따라 많은 아름다운 꽃들이 심어져 있다.' },
      ],
    }
  ),
  word('alongside', '-의', 5, 'adjective',
    ['건너편에', '뒤처져서', '멀리서', '반대편에', '아래쪽에', '위쪽으로', '안쪽으로', '바깥쪽의', '가로질러', '떨어져서'],
    tips({
      etymology: 'along(~을 따라)과 side(옆)가 결합하여 \'~의 옆에\'라는 의미를 형성합니다.',
      visual: '배 두 척이 나란히 바다 위를 항해하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'얼롱사이드\'이므로 \'늘어선(along) 사이(side)에\'라고 연상하면 쉽습니다.',
      context: '물리적인 위치뿐만 아니라 다른 사람과 함께 협력하며 일할 때도 자주 쓰입니다.',
      synonymAntonym: 'beside와는 유의어 관계이며, far from과는 반대되는 위치 관계를 나타냅니다.',
    }),
    {
      definition: 'at the side of or next to something or someone, often moving in the same direction',
      synonyms: ['beside', 'next to', 'parallel to'],
      antonyms: ['far from', 'distant', 'away'],
      exampleSentences: [
        { en: 'The new library was built right the existing community center.', ko: '새 도서관은 기존 커뮤니티 센터 바로 옆에 지어졌습니다.' },
        { en: 'She worked with experienced professionals to complete the project.', ko: '그녀는 프로젝트를 완수하기 위해 숙련된 전문가들과 나란히 함께 일했습니다.' },
      ],
    }
  ),
  word('aloud', '소리로', 2, 'adverb',
    ['조용히', '속으로', '천천히', '빠르게', '갑자기', '자주', '항상', '직접', '정확히', '대략'],
    tips({
      etymology: '접두사 a-(~의 상태로)와 loud(큰 소리의)가 결합되어 \'소리가 나는 상태로\'라는 의미가 되었습니다.',
      visual: '도서관에서 책을 읽다가 갑자기 소리 내어 읽기 시작해 주변 사람들이 쳐다보는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'어라우드\'이므로 \'어라? 소리(loud)를 내네?\'라고 연상하면 기억하기 쉽습니다.',
      context: '혼자 생각하는 것이 아니라 다른 사람이 들을 수 있게 목소리를 낼 때 주로 사용합니다.',
      synonymAntonym: 'audibly와 유사하며, 마음속으로만 생각하는 silently나 inwardly와는 반대되는 개념입니다.',
    }),
    {
      definition: 'using the voice so that others can hear what is being said or read',
      synonyms: ['audibly', 'vocally', 'out loud'],
      antonyms: ['silently', 'inwardly', 'quietly'],
      exampleSentences: [
        { en: 'The teacher asked the student to read the poem to the class.', ko: '선생님은 학생에게 학급 친구들 앞에서 시를 소리 내어 읽어달라고 요청했다.' },
        { en: 'She wondered if she had accidentally spoken her thoughts while standing in line.', ko: '그녀는 줄을 서 있는 동안 자신도 모르게 생각을 밖으로 말해버렸는지 궁금해했다.' },
      ],
    }
  ),
  word('already', '이미', 3, 'adverb',
    ['아직', '나중에', '드디어', '결코', '가끔', '자주', '갑자기', '미리', '거의', '항상'],
    tips({
      etymology: 'all(완전히)과 ready(준비된)가 결합하여 어떤 일이 완전히 준비되어 끝났음을 나타냅니다.',
      visual: '영화관에 도착했는데 영화가 시작되어 화면이 켜져 있는 장면을 상상해 보세요.',
      soundAlike: '\'올레디\'라고 발음하며 \'올(All) 다 됐니?\'라고 묻는 상황을 떠올려 보세요.',
      context: '기대했던 시간보다 어떤 일이 더 일찍 일어났을 때 놀라움을 표현하며 자주 쓰입니다.',
      synonymAntonym: 'by now와 비슷하며, 아직 일어나지 않은 상태인 not yet과 반대됩니다.',
    }),
    {
      definition: 'before the present time or earlier than the time expected',
      synonyms: ['previously', 'beforehand', 'sooner'],
      antonyms: ['later', 'afterward', 'subsequently'],
      exampleSentences: [
        { en: 'I have finished my homework and can go out to play.', ko: '나는 숙제를 벌써 다 끝내서 놀러 나갈 수 있다.' },
        { en: 'When we arrived at the station, the train had left.', ko: '우리가 역에 도착했을 때 기차는 이미 떠난 상태였다.' },
      ],
    }
  ),
  word('alright', '괜찮은', 1, 'adverb',
    ['훌륭한', '끔찍한', '부족한', '완벽한', '위험한', '불가능한', '특별한', '이상한', '심각한', '불쾌한'],
    tips({
      etymology: '모든 것이(all) 옳다(right)는 뜻의 두 단어가 합쳐져서 만들어진 구어체 표현입니다.',
      visual: '엄지손가락을 가볍게 치켜세우며 \'그 정도면 됐어\'라고 끄덕이는 모습을 상상하세요.',
      soundAlike: '\'올라잇\'이라고 발음하며 기분이 한결 나아져 위로 올라가는 느낌을 연결해 보세요.',
      context: '상대방의 안부를 묻거나 제안에 동의할 때, 혹은 결과가 나쁘지 않을 때 자주 쓰입니다.',
      synonymAntonym: '만족스러운 ok와 반대되는 끔찍한 terrible을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'in a satisfactory manner or to an adequate degree; acceptable',
      synonyms: ['satisfactory', 'acceptable', 'adequate'],
      antonyms: ['unacceptable', 'unsatisfactory', 'terrible'],
      exampleSentences: [
        { en: 'The food was not great, but it was alright for the price.', ko: '음식이 아주 훌륭하지는 않았지만, 가격 대비 괜찮았습니다.' },
        { en: 'Are you feeling alright after the long journey?', ko: '긴 여행 후에 몸 상태는 좀 괜찮으신가요?' },
      ],
    }
  ),
  word('also', '또한', 2, 'adverb',
    ['하지만', '그러나', '오직', '결코', '대신에', '이미', '아직', '거의', '가끔', '전혀'],
    tips({
      etymology: '고대 영어 eall(모두)과 swa(그렇게)가 합쳐져 \'완전히 똑같이\'라는 의미에서 유래했습니다.',
      visual: '장바구니에 물건을 하나 더 담으면서 \'+1\' 아이콘이 뜨는 모습을 상상해 보세요.',
      soundAlike: '\'올소!\'라고 외치며 상대방의 말에 동의하며 내용을 덧붙이는 상황을 떠올려 보세요.',
      context: '이미 언급한 사실에 새로운 정보를 추가하거나 나열할 때 문장 중간이나 끝에 주로 쓰입니다.',
      synonymAntonym: 'too나 as well은 문장 끝에 주로 오지만, 이 단어는 일반동사 앞이나 be동사 뒤에 자주 위치합니다.',
    }),
    {
      definition: 'In addition to what has been mentioned; used to introduce a further point or item.',
      synonyms: ['additionally', 'furthermore', 'moreover'],
      antonyms: ['otherwise', 'alternatively', 'instead'],
      exampleSentences: [
        { en: 'She speaks French fluently and she can speak German.', ko: '그녀는 프랑스어를 유창하게 하며 독일어도 할 줄 압니다.' },
        { en: 'The hotel was very clean and it was very close to the station.', ko: '그 호텔은 매우 깨끗했고 역과도 아주 가까웠습니다.' },
      ],
    }
  ),
  word('although', '비록', 6, 'conjunction',
    ['왜냐하면', '그래서', '게다가', '결국', '따라서', '그럼에도', '마침내', '오히려', '그렇지만', '대신에'],
    tips({
      etymology: 'all(완전히)과 though(비록 ~일지라도)가 결합되어 강한 양보의 의미를 나타냅니다.',
      visual: '비가 쏟아지는 창밖을 보면서도 우산 없이 당당하게 걸어 나가는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'올도우\'와 비슷하므로 \'올(all) 도(도)망가도 나는 남는다\'는 상황을 연상해 보세요.',
      context: '두 가지 대조되는 사실을 연결할 때 사용하며, 예상치 못한 결과가 뒤따를 때 주로 쓰입니다.',
      synonymAntonym: 'even though와 의미가 거의 같으며, 반대로 확정적인 이유를 나타내는 because와 대비됩니다.',
    }),
    {
      definition: 'in spite of the fact that; even though',
      synonyms: ['even though', 'though', 'albeit'],
      antonyms: ['because', 'since', 'consequently'],
      exampleSentences: [
        { en: 'The sun was shining brightly even though the temperature was very low.', ko: '기온이 매우 낮았음에도 불구하고 햇빛은 밝게 비치고 있었다.' },
        { en: 'He decided to go for a run despite the fact that he felt quite tired.', ko: '그는 꽤 피곤함을 느꼈음에도 불구하고 달리기를 하러 가기로 결정했다.' },
      ],
    }
  ),
  word('altogether', '전혀', 7, 'adverb',
    ['정확히', '대략', '차근차근', '집중해서', '즉시', '뒤늦게', '점차', '반복적으로', '우선', '빠르게'],
    tips({
      etymology: 'all(모두)과 together(함께)가 합쳐져 \'모든 것을 하나로 합친\' 상태에서 \'완전히\' 또는 \'전혀\'라는 의미로 확장되었습니다.',
      visual: '여러 조각의 퍼즐이 하나로 합쳐져 완벽한 그림이 된 모습을 상상해 보세요.',
      soundAlike: '올-투게더: \'모두 다 같이\' 한꺼번에 행동하는 느낌을 살려 발음해 보세요.',
      context: '부정문에서 쓰일 때는 \'전혀 ~가 아니다\'라는 강한 부정의 의미를 전달합니다.',
      synonymAntonym: 'completely와 유의어 관계이며, 부분적임을 나타내는 partially와 반대됩니다.',
    }),
    {
      definition: 'completely and fully; in total or considering everything',
      synonyms: ['completely', 'entirely', 'totally'],
      antonyms: ['partially', 'slightly', 'somewhat'],
      exampleSentences: [
        { en: 'The train service has been stopped for the day.', ko: '열차 운행이 오늘 하루 동안 완전히 중단되었습니다.' },
        { en: 'I am not convinced that this is the best solution.', ko: '이것이 최선의 해결책이라고 전혀 확신하지 못하겠습니다.' },
      ],
    }
  ),
  word('always', '늘', 3, 'adverb',
    ['가끔', '절대로', '자주', '드물게', '보통', '때때로', '거의', '이미', '아직', '갑자기'],
    tips({
      etymology: '모든(all) 길(way)을 뜻하는 고대 영어에서 유래하여, 어떤 상황에서도 변함없이 지속됨을 나타냅니다.',
      visual: '달력의 모든 날짜에 동그라미가 쳐져 있는 모습을 상상하며 빈틈없는 연속성을 떠올려 보세요.',
      soundAlike: '올웨이즈(always)는 \'올(all) 웨이(way)\'로 들리며, 모든 길에서 늘 함께한다는 느낌으로 기억하세요.',
      context: '빈도 부사 중 발생 확률 100%를 나타낼 때 사용하며, 일반동사 앞이나 be동사 뒤에 주로 위치합니다.',
      synonymAntonym: '영원히를 뜻하는 forever와 유의어이며, 거의 발생하지 않는 rarely와 반대되는 개념입니다.',
    }),
    {
      definition: 'At all times; on every occasion and without exception.',
      synonyms: ['constantly', 'forever', 'invariably'],
      antonyms: ['never', 'rarely', 'seldom'],
      exampleSentences: [
        { en: 'The sun rises in the east every single day without fail.', ko: '해는 매일 예외 없이 동쪽에서 뜹니다.' },
        { en: 'She is remarkably punctual and arrives on time for every meeting.', ko: '그녀는 매우 엄격해서 모든 회의에 제시간에 도착합니다.' },
      ],
    }
  ),
  word('A.M.', '오전', 1, 'noun',
    ['오후', '저녁', '밤', '황혼', '일몰', '자정', '정오', '새벽녘', '낮 시간', '일출'],
    tips({
      etymology: '라틴어 \'ante meridiem\'의 약자로, \'정오(meridiem) 이전(ante)\'이라는 뜻에서 유래했습니다.',
      visual: '시계 바늘이 12시를 지나 해가 뜨기 시작하는 이른 아침의 풍경을 상상해 보세요.',
      soundAlike: '알파벳 A가 알파벳 순서의 \'앞\'에 있듯이, 하루의 \'앞\'부분인 오전이라고 기억하세요.',
      context: '약속 시간을 정할 때 9:00 뒤에 붙여 아침 시간임을 명확히 할 때 주로 쓰입니다.',
      synonymAntonym: '오전을 뜻하는 morning과 유사하며, 오후를 뜻하는 P.M.과는 반대되는 개념입니다.',
    }),
    {
      definition: 'the time period starting from midnight and ending just before noon',
      synonyms: ['morning', 'forenoon', 'early hours'],
      antonyms: ['P.M.', 'afternoon', 'evening'],
      exampleSentences: [
        { en: 'The meeting is scheduled to begin at 10:00 sharp.', ko: '회의는 오전 10시 정각에 시작될 예정입니다.' },
        { en: 'He usually wakes up at 6:00 to go jogging.', ko: '그는 보통 조깅을 하기 위해 오전 6시에 일어납니다.' },
      ],
    }
  ),
  word('amaze', '하다', 4, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '고대 영어 \'amasod\'에서 유래하여, 미로(maze)에 갇힌 것처럼 정신을 못 차릴 정도로 놀라게 한다는 뜻을 담고 있습니다.',
      visual: '마술사가 모자에서 토끼를 꺼낼 때 관객들이 입을 벌리고 눈을 크게 뜬 모습을 상상해 보세요.',
      soundAlike: '\'어! 메이즈(maze)?\' 미로 속에서 갑자기 출구를 발견했을 때의 놀라움을 연상해 보세요.',
      context: '주로 누군가의 뛰어난 능력이나 예상치 못한 아름다운 광경이 사람을 감동시킬 때 사용합니다.',
      synonymAntonym: 'astonish와 유사하지만, amaze는 긍정적인 경이로움을 더 강하게 표현하며 bore와는 정반대의 감정입니다.',
    }),
    {
      definition: 'to fill someone with great surprise or sudden wonder',
      synonyms: ['astonish', 'astound', 'surprise'],
      antonyms: ['bore', 'tire', 'expect'],
      exampleSentences: [
        { en: 'The magician\'s incredible tricks never fail to surprise the audience.', ko: '그 마술사의 믿기 힘든 기술들은 관객들을 항상 놀라게 한다.' },
        { en: 'It will certainly shock you to see how much the city has changed over the years.', ko: '수년 동안 도시가 얼마나 많이 변했는지 보면 당신은 분명 깜짝 놀랄 것입니다.' },
      ],
    }
  ),
  word('ambassador', '대사', 5, 'noun',
    ['대표', '외교관', '공사', '특사', '사절', '대변인', '대표단', '외교사절', '주재관', '특파원'],
    tips({
      etymology: '라틴어 \'ambactus(하인, 사절)\'에서 유래하여 국가를 대신해 봉사하는 사람을 뜻합니다.',
      visual: '유엔 회의장에서 자기 나라 국기 앞에 앉아 발언하는 외교관의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'앰배서더\'로 호텔 이름으로도 자주 쓰여 고급스럽고 격식 있는 느낌을 줍니다.',
      context: '국가 간의 공식적인 외교 관계나 특정 브랜드의 홍보 모델을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '유의어인 envoy는 특사를 뜻하며, 반의어인 citizen은 일반 시민을 의미합니다.',
    }),
    {
      definition: 'A high-ranking diplomat sent by a state as its resident representative in a foreign country.',
      synonyms: ['diplomat', 'envoy', 'emissary'],
      antonyms: ['citizen', 'constituent', 'subject'],
      exampleSentences: [
        { en: 'She was appointed as the new representative to the United Kingdom.', ko: '그녀는 영국 주재 신임 대사로 임명되었습니다.' },
        { en: 'The famous actor serves as a goodwill envoy for UNICEF.', ko: '그 유명 배우는 유니세프의 친선 대사로 활동하고 있습니다.' },
      ],
    }
  ),
  word('ambition', '야망', 6, 'noun',
    ['포기', '나태', '무관심', '절망', '안주', '겸손', '좌절', '정체', '무기력', '만족'],
    tips({
      etymology: '라틴어 \'ambitio\'에서 유래했으며, 표를 얻기 위해 \'주변을 돌아다님\'이라는 의미에서 성공을 향한 열망으로 발전했습니다.',
      visual: '높은 산 정상에 깃발을 꽂기 위해 가파른 절벽을 기어오르는 등반가의 모습을 상상해 보세요.',
      soundAlike: '\'앰비션\'은 \'안 비침\'과 발음이 비슷합니다. 내 야망은 너무 커서 끝이 안 비칠 정도라고 외워보세요.',
      context: '주로 직업적 성공이나 개인적인 목표를 달성하려는 강한 의지를 나타낼 때 사용됩니다.',
      synonymAntonym: '성공을 향한 \'aspiration\'과 비슷하지만, 반대로 아무런 의욕이 없는 \'apathy\'와는 대조적입니다.',
    }),
    {
      definition: 'a strong desire to do or to achieve something, typically requiring determination and hard work',
      synonyms: ['aspiration', 'determination', 'drive'],
      antonyms: ['apathy', 'laziness', 'indifference'],
      exampleSentences: [
        { en: 'Her main goal in life is to fulfill her childhood dream of becoming a doctor.', ko: '그녀의 인생에서 주된 목표는 의사가 되겠다는 어린 시절의 야망을 실현하는 것이다.' },
        { en: 'The young entrepreneur was filled with the drive to build a global empire.', ko: '그 젊은 기업가는 세계적인 제국을 건설하겠다는 야망으로 가득 차 있었다.' },
      ],
    }
  ),
  word('among', '-중에', 7, 'preposition',
    ['관하여', '대하여', '안에', '밖에', '위에', '아래에', '옆에', '사이에', '앞에', '뒤에'],
    tips({
      etymology: '고대 영어 \'onmang\'에서 유래했으며, \'군중 속에 섞여 있다\'는 의미를 담고 있습니다.',
      visual: '여러 명의 사람들 한가운데에 내가 서 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어망\'과 비슷하죠? 물고기들이 \'어망\' 속에 가득 섞여 있는 모습을 떠올려 보세요.',
      context: '셋 이상의 대상이나 집단 내에 포함되어 있을 때 주로 사용합니다.',
      synonymAntonym: 'amid와 비슷하지만, separate와는 반대되는 개념으로 이해하면 쉽습니다.',
    }),
    {
      definition: 'surrounded by or in the middle of a group of people or things',
      synonyms: ['amid', 'between', 'amidst'],
      antonyms: ['outside', 'beyond', 'away'],
      exampleSentences: [
        { en: 'The red apple stood out from the others in the basket.', ko: '바구니에 담긴 다른 사과들 중에서 빨간 사과가 눈에 띄었다.' },
        { en: 'She felt comfortable being with her close friends.', ko: '그녀는 친한 친구들 사이에 있는 것이 편안하게 느껴졌다.' },
      ],
    }
  ),
  word('amplify', '확대하다', 10, 'verb',
    ['축소하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '수행하다'],
    tips({
      etymology: '라틴어 \'amplus(큰)\'에서 유래하여, 소리나 힘의 크기를 더 크게 키운다는 의미를 가집니다.',
      visual: '기타 연주자가 앰프(amplifier)에 연결하여 소리를 공연장 가득 크게 울리게 하는 모습을 상상하세요.',
      soundAlike: '앰프(Amp)를 \'플라이(fly)\' 날려 보낼 정도로 소리를 크게 키운다고 기억하면 쉽습니다.',
      context: '주로 소리의 볼륨을 높이거나, 영향력 또는 문제의 심각성을 더 크게 부각할 때 사용됩니다.',
      synonymAntonym: '크기를 키우는 magnify와 반대로 줄이는 condense를 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'to increase the volume of sound or to make a statement or situation more intense and powerful',
      synonyms: ['magnify', 'intensify', 'augment'],
      antonyms: ['diminish', 'reduce', 'condense'],
      exampleSentences: [
        { en: 'The speaker used a microphone to increase the volume and reach the entire audience.', ko: '연사는 목소리를 키워 모든 청중에게 전달하기 위해 마이크를 사용했다.' },
        { en: 'Social media can quickly spread and increase the impact of a small rumor.', ko: '소셜 미디어는 작은 소문의 영향력을 빠르게 확산시키고 증폭시킬 수 있다.' },
      ],
    }
  ),
  word('amuse', '하다', 4, 'verb',
    ['지루하게 하다', '화나게 하다', '슬프게 하다', '무시하다', '거절하다', '공격하다', '방해하다', '비난하다', '포기하다', '침묵하다'],
    tips({
      etymology: '라틴어 \'ad(~에)\'와 \'musa(뮤즈/예술)\'가 합쳐져 마음을 즐거운 곳으로 돌린다는 의미에서 유래했습니다.',
      visual: '광대가 서커스에서 저글링을 하며 관객들을 깔깔 웃게 만드는 장면을 상상해 보세요.',
      soundAlike: '\'어뮤즈\' 발음이 \'어머! 유즈(use) 재미있네\'처럼 들린다고 생각하며 즐거움을 연상하세요.',
      context: '주로 누군가를 웃게 만들거나, 흥미로운 활동으로 시간을 즐겁게 보낼 때 사용합니다.',
      synonymAntonym: 'entertain과 동의어이며, 지루하게 만드는 bore와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to provide entertainment or cause someone to find something funny or enjoyable',
      synonyms: ['entertain', 'delight', 'divert'],
      antonyms: ['bore', 'depress', 'annoy'],
      exampleSentences: [
        { en: 'The clown managed to entertain the children with his clever magic tricks.', ko: '광대는 영리한 마술로 아이들을 즐겁게 해주었습니다.' },
        { en: 'I brought a book to keep myself occupied during the long flight.', ko: '긴 비행 시간 동안 스스로를 즐겁게 하기 위해 책을 한 권 가져왔습니다.' },
      ],
    }
  ),
  word('analyze', '분해하다', 5, 'verb',
    ['합치다', '무시하다', '창조하다', '보존하다', '추측하다', '방해하다', '모방하다', '연기하다', '거절하다', '은폐하다'],
    tips({
      etymology: '그리스어 \'analyein\'에서 유래했으며, \'ana(위로)\'와 \'lyein(풀다)\'이 결합되어 얽힌 것을 풀어헤친다는 의미를 가집니다.',
      visual: '복잡하게 얽힌 실타래를 하나하나 풀어서 바닥에 가지런히 놓는 과학자의 모습을 상상해 보세요.',
      soundAlike: '\'애널라이즈\' -> \'애를 써서 나열하지\'. 정보를 애써서 순서대로 나열하며 살피는 모습을 연상하세요.',
      context: '실험 결과나 통계 수치, 혹은 상대방의 심리 상태를 깊이 있게 파악해야 할 때 주로 사용합니다.',
      synonymAntonym: '세밀히 조사하는 examine과 유사하며, 대조적으로 전체를 하나로 묶는 synthesize와 반대됩니다.',
    }),
    {
      definition: 'to examine something methodically and in detail in order to explain and interpret it',
      synonyms: ['examine', 'investigate', 'scrutinize'],
      antonyms: ['synthesize', 'ignore', 'neglect'],
      exampleSentences: [
        { en: 'The scientists need to examine the data carefully to identify any hidden patterns.', ko: '과학자들은 숨겨진 패턴을 찾아내기 위해 데이터를 주의 깊게 분석해야 합니다.' },
        { en: 'He tried to break down the complex problem into smaller parts to understand it better.', ko: '그는 복잡한 문제를 더 잘 이해하기 위해 작은 부분들로 나누어 분석하려고 노력했습니다.' },
      ],
    }
  ),
  word('anchor', '닻', 6, 'noun',
    ['돛', '갑판', '선장', '항구', '나침반', '구명보트', '그물', '등대', '해류', '부표'],
    tips({
      etymology: '그리스어 \'ankura\'에서 유래되었으며, \'구부러진 것\'이라는 의미가 배를 고정하는 갈고리 모양의 도구로 발전했습니다.',
      visual: '거대한 쇠사슬에 매달린 무거운 갈고리가 깊은 바닷속 바닥에 꽉 박혀 배가 흔들리지 않게 잡아주는 모습을 상상하세요.',
      soundAlike: '발음이 \'앵커\'와 비슷하므로, 뉴스 진행자가 중심을 잡고 소식을 전하는 \'뉴스 앵커\'를 떠올리면 중심을 잡는 도구임을 알 수 있습니다.',
      context: '항해 중 배를 멈추고 정박할 때 사용하며, 비유적으로는 마음의 안정을 주는 든든한 버팀목을 의미하기도 합니다.',
      synonymAntonym: '배를 고정하는 mooring과 비슷하지만, 정처 없이 떠도는 drift와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A heavy metal device attached to a chain and cast overboard to hold a vessel in a particular place.',
      synonyms: ['mooring', 'stay', 'fastener'],
      antonyms: ['float', 'drift', 'detach'],
      exampleSentences: [
        { en: 'The sailors dropped the heavy iron device into the sea to prevent the ship from drifting away.', ko: '선원들은 배가 떠내려가는 것을 막기 위해 무거운 철제 장치를 바다로 내렸습니다.' },
        { en: 'In times of crisis, his family served as a spiritual support that kept him grounded.', ko: '위기의 순간에 그의 가족은 그가 흔들리지 않게 지켜주는 정신적 버팀목 역할을 했습니다.' },
      ],
    }
  ),
  word('and', '및', 2, 'conjunction',
    ['하지만', '또는', '그러나', '그래서', '왜냐하면', '그럼에도', '결국', '혹은', '만약', '비록'],
    tips({
      etymology: '고대 영어 \'and\'에서 유래하여 \'더하다\' 혹은 \'가까이 있다\'는 의미를 담고 있습니다.',
      visual: '두 개의 물건을 쇠사슬로 튼튼하게 연결하고 있는 고리 모양을 상상해 보세요.',
      soundAlike: '발음이 \'앤드\'이므로, 끝(end)까지 모두 다 포함해서 \'그리고\'라고 기억하세요.',
      context: '나열을 하거나 앞뒤 내용을 덧붙일 때 가장 기본적으로 쓰이는 연결 고리입니다.',
      synonymAntonym: '함께를 뜻하는 along with와 비슷하며, 반대로 분리하는 without과는 대조됩니다.',
    }),
    {
      definition: 'Used to connect words of the same grammatical rank, phrases, or clauses together.',
      synonyms: ['plus', 'along with', 'as well as'],
      antonyms: ['without', 'excluding', 'minus'],
      exampleSentences: [
        { en: 'I bought some apples and oranges at the market.', ko: '나는 시장에서 사과와 오렌지를 샀다.' },
        { en: 'She sat down and started to read her favorite book.', ko: '그녀는 자리에 앉아서 가장 좋아하는 책을 읽기 시작했다.' },
      ],
    }
  ),
  word('angel', '천사', 3, 'noun',
    ['악마', '요정', '신', '괴물', '유령', '귀신', '영혼', '예언자', '사제', '도깨비'],
    tips({
      etymology: '그리스어 \'angelos\'에서 유래되었으며, 이는 소식을 전하는 \'사자(messenger)\'를 의미합니다.',
      visual: '하얀 날개를 달고 머리 위에 링이 떠 있는 순백의 존재가 하늘에서 내려오는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'엔젤\'과 유사하므로, 우리가 흔히 부르는 \'천사\'의 애칭을 떠올리면 쉽습니다.',
      context: '종교적인 맥락 외에도 성격이 매우 착하고 친절한 사람을 비유적으로 부를 때 자주 쓰입니다.',
      synonymAntonym: '신의 심부름꾼인 \'messenger\'와 유사하며, 사악한 존재인 \'demon\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a spiritual messenger from god or a very kind and virtuous person',
      synonyms: ['messenger', 'guardian', 'seraph'],
      antonyms: ['demon', 'devil', 'fiend'],
      exampleSentences: [
        { en: 'She was described as a guardian sent from heaven to protect the children.', ko: '그녀는 아이들을 보호하기 위해 하늘에서 보내진 수호천사로 묘사되었습니다.' },
        { en: 'Thank you for helping me with the heavy luggage; you are an absolute darling.', ko: '무거운 짐 드는 것을 도와주셔서 감사해요. 당신은 정말 천사 같아요.' },
      ],
    }
  ),
  word('anger', '분노', 1, 'noun',
    ['기쁨', '슬픔', '평온', '만족', '용기', '공포', '호기심', '지루함', '감사', '질투'],
    tips({
      etymology: '고대 노르웨이 어원인 \'angr\'에서 유래했으며, 이는 고통이나 슬픔을 의미하던 것이 강한 분노의 감정으로 발전했습니다.',
      visual: '얼굴이 붉으락푸르락해지며 머리 위로 김이 모락모락 나는 화난 캐릭터의 모습을 상상해 보세요.',
      soundAlike: '\'앵거\'라고 발음할 때 입을 크게 벌리는 모습이 마치 화가 나서 소리를 지르는 모습과 비슷합니다.',
      context: '부당한 대우를 받았을 때나 계획이 틀어졌을 때 느끼는 강렬한 불쾌감을 표현할 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 rage는 통제 불가능한 격렬한 화를, 반의어인 calm은 파도 없는 바다 같은 평온함을 뜻합니다.',
    }),
    {
      definition: 'A strong feeling of being upset or annoyed because of something wrong or bad.',
      synonyms: ['rage', 'fury', 'wrath'],
      antonyms: ['calm', 'peace', 'delight'],
      exampleSentences: [
        { en: 'He struggled to control his rising emotional outburst during the heated argument.', ko: '그는 격렬한 논쟁 도중 치밀어 오르는 감정적 폭발을 억누르려 애썼다.' },
        { en: 'The unfair decision provoked a great deal of resentment among the local citizens.', ko: '그 불공정한 결정은 지역 시민들 사이에서 엄청난 분노를 불러일으켰다.' },
      ],
    }
  ),
  word('angle', '각', 7, 'noun',
    ['직선', '곡선', '길이', '너비', '두께', '부피', '면적', '원형', '중심', '반경'],
    tips({
      etymology: '라틴어 angulus에서 유래되었으며, 이는 \'구석\'이나 \'굽은 곳\'을 의미합니다.',
      visual: '두 개의 직선이 한 점에서 만나 벌어진 V자 모양의 틈을 상상해 보세요.',
      soundAlike: '낚시를 뜻하는 \'앵글러(angler)\'가 낚싯바늘의 굽은 \'각\'을 이용한다는 점과 연결해 보세요.',
      context: '수학적인 도형의 각도뿐만 아니라, 문제를 바라보는 \'관점\'이나 \'시각\'이라는 비유적 의미로도 자주 쓰입니다.',
      synonymAntonym: '유사한 의미인 perspective와 대조되는 개념인 straightness를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'The space, measured in degrees, between two intersecting lines or surfaces at or close to the point where they meet.',
      synonyms: ['perspective', 'slant', 'viewpoint'],
      antonyms: ['straightness', 'center', 'middle'],
      exampleSentences: [
        { en: 'The architect measured the precise degree of every corner to ensure the building\'s stability.', ko: '건축가는 건물의 안정성을 보장하기 위해 모든 모서리의 정확한 각도를 측정했습니다.' },
        { en: 'We need to look at this problem from a different perspective to find a creative solution.', ko: '창의적인 해결책을 찾기 위해 우리는 이 문제를 다른 관점에서 바라볼 필요가 있습니다.' },
      ],
    }
  ),
  word('animal', '동물', 2, 'noun',
    ['식물', '미생물', '광물', '인간', '기계', '세포', '균류', '무생물', '행성', '물질'],
    tips({
      etymology: '라틴어 \'anima\'에서 유래했으며, 이는 \'숨\'이나 \'영혼\'을 뜻하여 살아 움직이는 생명체를 의미합니다.',
      visual: '강아지나 사자가 들판을 자유롭게 뛰어다니며 숨을 쉬고 있는 모습을 상상해 보세요.',
      soundAlike: '애니멀 -> \'애니(애니메이션)\'에 나오는 귀여운 캐릭터 \'멀(멀리)\'서 뛰어오는 동물들.',
      context: '생물학적 분류에서 식물과 대비되는 개념으로, 먹이를 섭취하고 이동하는 생명체를 지칭할 때 쓰입니다.',
      synonymAntonym: 'creature와 beast는 비슷한 생명체를 뜻하며, plant는 스스로 움직이지 못하는 반대 개념입니다.',
    }),
    {
      definition: 'A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.',
      synonyms: ['creature', 'beast', 'organism'],
      antonyms: ['plant', 'mineral', 'inanimate'],
      exampleSentences: [
        { en: 'The lion is often called the king of the jungle among every wild creature.', ko: '사자는 모든 야생 생물들 사이에서 종종 정글의 왕이라고 불립니다.' },
        { en: 'Humans have a responsibility to protect endangered species and their habitats.', ko: '인간은 멸종 위기에 처한 종들과 그들의 서식지를 보호할 책임이 있습니다.' },
      ],
    }
  ),
  word('anniversary', '예년의', 4, 'adjective',
    ['기념일', '축제', '행사', '매일의', '계절의', '순간적인', '영구적인', '특별한', '정기적인', '역사적인'],
    tips({
      etymology: '라틴어 \'annus(해)\'와 \'vertere(돌다)\'가 합쳐져 매년 돌아오는 시점을 의미합니다.',
      visual: '달력의 특정 날짜에 빨간 동그라미가 쳐져 있고 꽃다발이 놓여 있는 모습을 상상하세요.',
      soundAlike: '애니(Ani)가 벌써(versary) 일 년이 지나 기념일을 맞이했다고 기억해보세요.',
      context: '결혼기념일이나 창립기념일처럼 매년 같은 날짜에 반복되는 사건을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: '매년 돌아오는 \'yearly\'와 비슷하며, 일회성인 \'one-time\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The date on which an event took place in a previous year, or the celebration of this date.',
      synonyms: ['commemoration', 'jubilee', 'yearly return'],
      antonyms: ['beginning', 'inception', 'one-time event'],
      exampleSentences: [
        { en: 'The couple went to a fancy restaurant to celebrate their tenth wedding date.', ko: '그 부부는 결혼 10주년을 기념하기 위해 고급 레스토랑에 갔다.' },
        { en: 'The company held a large gala in honor of its fiftieth year of operation.', ko: '그 회사는 창립 50주년을 기념하여 성대한 축제를 열었다.' },
      ],
    }
  ),
  word('annoy', '귀찮게하다', 5, 'verb',
    ['위로하다', '기쁘게하다', '칭찬하다', '격려하다', '무시하다', '존경하다', '이해하다', '용서하다', '도와주다', '설득하다'],
    tips({
      etymology: '라틴어 \'in odio(증오 속에)\'에서 유래하여 상대방을 몹시 싫증 나게 하거나 화나게 한다는 의미를 담고 있습니다.',
      visual: '잠을 자려는데 귓가에서 윙윙거리는 모기 한 마리를 떠올려 보세요. 그 성가신 기분이 바로 이 단어의 핵심입니다.',
      soundAlike: '\'어노이\' 발음이 \'어우, 노(No)!\'와 비슷하죠? 싫은 행동을 계속해서 거부하고 싶은 상황을 연상하세요.',
      context: '층간 소음이나 반복되는 질문처럼 사소하지만 지속적으로 신경을 건드리는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'irritate와 비슷하지만 더 가벼운 짜증을 나타내며, 반대로 마음을 편하게 해주는 soothe와 대조됩니다.',
    }),
    {
      definition: 'to make someone feel slightly angry or impatient by repeated uncomfortable actions',
      synonyms: ['irritate', 'bother', 'vex'],
      antonyms: ['please', 'soothe', 'delight'],
      exampleSentences: [
        { en: 'The constant dripping of the faucet began to irritate the homeowner.', ko: '수도꼭지에서 계속 떨어지는 물방울 소리가 집주인을 귀찮게 하기 시작했다.' },
        { en: 'It really bothers me when people talk loudly on their phones in the library.', ko: '도서관에서 사람들이 휴대전화로 크게 통화하는 것은 정말 나를 짜증나게 한다.' },
      ],
    }
  ),
  word('annual', '일년의', 6, 'adjective',
    ['월간의', '매일의', '일시적인', '영구적인', '계절의', '주간의', '격년의', '순간적인', '지속적인', '정기적인'],
    tips({
      etymology: '라틴어 \'annus(해, 연도)\'에서 유래하여 1년이라는 시간 단위를 나타냅니다.',
      visual: '달력의 1월부터 12월까지 한 바퀴를 다 돌고 다시 제자리로 돌아오는 화살표를 상상하세요.',
      soundAlike: '\'애뉴얼\' 발음이 \'안녕(Ann) 유(u) 얼(al)\'처럼 들리니, \'일 년 만에 만나 안녕?\'이라고 인사하는 상황을 떠올려 보세요.',
      context: '회사 실적 보고서나 축제, 건강검진처럼 1년에 딱 한 번씩 돌아오는 정기적인 행사에 주로 쓰입니다.',
      synonymAntonym: '매년 일어나는 yearly와 비슷하지만, 100년마다인 centennial과는 주기가 다릅니다.',
    }),
    {
      definition: 'Occurring, appearing, or done once every year or lasting for a period of one year.',
      synonyms: ['yearly', 'anniversary', 'every twelve months'],
      antonyms: ['irregular', 'intermittent', 'sporadic'],
      exampleSentences: [
        { en: 'The company holds its general meeting for shareholders every spring.', ko: '그 회사는 매년 봄에 주주 총회를 개최합니다.' },
        { en: 'Plants that complete their life cycle in one growing season are known as this type.', ko: '한 성장기 안에 생애 주기를 마치는 식물들을 일년생 식물이라고 합니다.' },
      ],
    }
  ),
  word('another', '또', 3, 'adjective',
    ['첫 번째의', '마지막의', '유일한', '전체의', '반대의', '비슷한', '동일한', '특별한', '평범한', '거대한'],
    tips({
      etymology: 'an(하나의)과 other(다른 것)가 합쳐져 \'하나 더\'라는 의미를 가집니다.',
      visual: '이미 사과를 하나 가지고 있는데, 친구가 똑같은 사과를 하나 더 건네주는 모습을 상상하세요.',
      soundAlike: '발음이 \'어나더\'이므로 \'어? 나 더(more) 필요해\'라고 말하는 상황을 연상해 보세요.',
      context: '식당에서 물 한 잔을 더 요청하거나, 새로운 기회를 말할 때 자주 쓰입니다.',
      synonymAntonym: '추가적인(additional) 것과 비슷하지만, 오직 하나뿐인(single) 것과는 반대됩니다.',
    }),
    {
      definition: 'one more person or thing of the same type as the one already mentioned',
      synonyms: ['additional', 'added', 'extra'],
      antonyms: ['same', 'identical', 'original'],
      exampleSentences: [
        { en: 'Would you like another cup of coffee before we leave?', ko: '우리 떠나기 전에 커피 한 잔 더 마실래요?' },
        { en: 'The company decided to open another branch in the city center.', ko: '그 회사는 도심에 또 다른 지점을 열기로 결정했습니다.' },
      ],
    }
  ),
];
