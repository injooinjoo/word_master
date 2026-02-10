import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch11: VocabItem[] = [
  word('Convey', '전달하다', 5, 'verb',
    ['숨기다', '은폐하다', '차단하다', '억누르다', '거부하다', '무시하다', '받지 않다', '거절하다', '차단', '차단'],
    tips({
      etymology: 'con(함께) + vey(길) -> 함께 길로 나르다',
      visual: '메시지를 전달하는 메신저',
      soundAlike: '컨베이 = 컨베이어 벨트(전달기)',
      context: 'Words cannot convey my gratitude.',
      synonymAntonym: '동의어: communicate, transmit, 반의어: withhold',
    }),
    {
      definition: 'to communicate or express something in words or by other means',
      wordDistractors: ['Convoy', 'Survey', 'Convert'],
      definitionDistractors: [
        'to hide or keep something secret',
        'to receive or accept something offered',
        'to refuse or reject something',
      ],
      exampleSentences: [
        { en: 'Her smile conveyed more than words ever could.', ko: '그녀의 미소는 말보다 더 많은 것을 전달했다.' },
        { en: 'The report failed to convey the urgency of the situation.', ko: '보고서는 상황의 긴박함을 전달하지 못했다.' },
      ],
    }
  ),
  word('Coordinate', '조정하다', 5, 'verb',
    ['혼란시키다', '방치하다', '분산하다', '갈등시키다', '흐트러뜨리다', '해체하다', '분리하다', '무시하다', '독단', '분열'],
    tips({
      etymology: 'co(함께) + ordin(순서) + -ate -> 함께 순서를 맞추다',
      visual: '여러 부서를 조율하는 프로젝트 매니저',
      soundAlike: '코오디네이트 = 코오디네이션(조정)',
      context: 'We need to coordinate our efforts.',
      synonymAntonym: '동의어: organize, synchronize, 반의어: 혼란',
    }),
    {
      definition: 'to organize different parts so they work together effectively',
      wordDistractors: ['Cooperate', 'Correlate', 'Concentrate'],
      definitionDistractors: [
        'to cause confusion or disorder',
        'to separate or break apart',
        'to ignore or pay no attention',
      ],
      exampleSentences: [
        { en: 'We need to coordinate our schedules before the meeting.', ko: '회의 전에 일정을 조정해야 한다.' },
        { en: 'She coordinated the rescue efforts across three departments.', ko: '그녀는 세 부서에 걸친 구호 활동을 조정했다.' },
      ],
    }
  ),
  word('Core', '핵심', 5, 'noun',
    ['표면', '주변', '외곽', '주변부', '부수', '부가', '부산물', '말단', '외부', '변두리'],
    tips({
      etymology: '라틴어 cor(심장)에서 유래',
      visual: '사과의 씨가 있는 핵심부',
      soundAlike: '코어 = 코어 밸류(핵심 가치)',
      context: 'Trust is at the core of our relationship.',
      synonymAntonym: '동의어: center, essence, 반의어: periphery',
    }),
    {
      definition: 'the central or most important part of something',
      wordDistractors: ['Cord', 'Cure', 'Care'],
      definitionDistractors: [
        'the outer edge or boundary of something',
        'a small or unimportant detail',
        'something additional or extra',
      ],
      exampleSentences: [
        { en: 'Honesty is at the core of their friendship.', ko: '정직함이 그들의 우정의 핵심이다.' },
        { en: 'The core of the problem is lack of funding.', ko: '문제의 핵심은 자금 부족이다.' },
      ],
    }
  ),
  word('Corporate', '기업의', 5, 'adjective',
    ['개인적', '사적', '국가적', '공공의', '비영리', '소규모', '가정의', '개인', '독립', '자영'],
    tips({
      etymology: '라틴어 corpus(몸)에서 유래, 법인=몸',
      visual: '고층 빌딩에 걸린 회사 로고',
      soundAlike: '코퍼레이트 = 코퍼레이션(기업)',
      context: 'Corporate culture varies by company.',
      synonymAntonym: '동의어: business, company, 반의어: personal',
    }),
    {
      definition: 'relating to a large company or organization',
      wordDistractors: ['Cooperative', 'Corporal', 'Corrugate'],
      definitionDistractors: [
        'belonging to or for one person only',
        'relating to the government or state',
        'relating to home or family life',
      ],
      exampleSentences: [
        { en: 'The new corporate policy takes effect next month.', ko: '새로운 기업 정책이 다음 달에 시행된다.' },
        { en: 'She climbed the corporate ladder quickly.', ko: '그녀는 기업에서 빠르게 승진했다.' },
      ],
    }
  ),
  word('Correspond', '일치하다', 5, 'verb',
    ['어긋나다', '불일치', '모순되다', '차이 나다', '반대하다', '배치되다', '틀리다', '불일치', '불부합', '상이'],
    tips({
      etymology: 'cor(함께) + respond(응답하다) -> 함께 맞게 응답하다',
      visual: '두 문서가 정확히 일치하는 모습',
      soundAlike: '코레스폰드 = 코레스폰던스(서신)',
      context: 'The evidence corresponds with his account.',
      synonymAntonym: '동의어: match, agree, 반의어: differ',
    }),
    {
      definition: 'to be in agreement or match with something',
      wordDistractors: ['Correlate', 'Cooperate', 'Contemporary'],
      definitionDistractors: [
        'to be different or not match',
        'to oppose or disagree strongly',
        'to be unrelated or separate',
      ],
      exampleSentences: [
        { en: 'The witness account corresponds with the video evidence.', ko: '목격자 진술은 비디오 증거와 일치한다.' },
        { en: 'His actions did not correspond to his words.', ko: '그의 행동은 그의 말과 일치하지 않았다.' },
      ],
    }
  ),
  word('Council', '위원회', 5, 'noun',
    ['개인', '단독', '임의', '무체계', '분산', '해체', '무조직', '단독결정', '독단', '개인주의'],
    tips({
      etymology: 'con(함께) + cil(부르다) -> 함께 모여 의논하는 자리',
      visual: '원탁 회의에 모인 위원들',
      soundAlike: '카운슬 = 카운슬러(상담사)',
      context: 'The city council approved the plan.',
      synonymAntonym: '동의어: committee, board',
    }),
    {
      definition: 'a group of people chosen to make decisions or give advice',
      wordDistractors: ['Counsel', 'Cancel', 'Console'],
      definitionDistractors: [
        'a single person acting alone',
        'advice or guidance given to someone',
        'a formal meeting of a company',
      ],
      exampleSentences: [
        { en: 'The council voted unanimously to approve the budget.', ko: '위원회는 만장일치로 예산 승인에 투표했다.' },
        { en: 'She was elected to the student council.', ko: '그녀는 학생회에 선출되었다.' },
      ],
    }
  ),
  word('Counter', '반대하다', 5, 'verb',
    ['동의하다', '순응하다', '지지하다', '받아들이다', '복종하다', '합세하다', '찬성하다', '부합', '수용', '납득'],
    tips({
      etymology: 'contra(반대로) -> 반대 방향으로',
      visual: '반대 방향을 가리키는 화살표',
      soundAlike: '카운터 = 카운터 아규먼트(반론)',
      context: 'He countered with a different proposal.',
      synonymAntonym: '동의어: oppose, rebut, 반의어: agree',
    }),
    {
      definition: 'to respond to an argument or action with an opposing one',
      wordDistractors: ['Conquer', 'Contour', 'Contest'],
      definitionDistractors: [
        'to express agreement or approval',
        'to support or help someone',
        'to give in or yield to pressure',
      ],
      exampleSentences: [
        { en: 'She countered his criticism with facts.', ko: '그녀는 그의 비판에 사실로 반박했다.' },
        { en: 'The defense countered the prosecution\'s argument.', ko: '변호인은 검찰의 주장에 반박했다.' },
      ],
    }
  ),
  word('Criteria', '기준', 5, 'noun',
    ['임의', '무기준', '혼란', '불규칙', '무차별', '무분별', '감정적', '주관적', '경직', '변동'],
    tips({
      etymology: '그리스어 kriterion(판단의 기준)에서 유래',
      visual: '체크리스트에 표시된 합격 기준',
      soundAlike: '크라이테리아 = 크라이테리언(기준의)',
      context: 'She met all the criteria for the job.',
      synonymAntonym: '동의어: standard, benchmark',
    }),
    {
      definition: 'standards or principles used to judge or evaluate something',
      wordDistractors: ['Criterion', 'Critique', 'Criticism'],
      definitionDistractors: [
        'random choice without standards',
        'a general feeling or impression',
        'a single rule or requirement',
      ],
      exampleSentences: [
        { en: 'Candidates must meet all the criteria to be considered.', ko: '후보자는 고려되려면 모든 기준을 충족해야 한다.' },
        { en: 'The selection criteria were clearly defined.', ko: '선발 기준이 명확히 정의되어 있었다.' },
      ],
    }
  ),
  word('Critical', '중요한', 5, 'adjective',
    ['하찮은', '무관한', '부수적', '사소한', '경미한', '가벼운', '무의미', '형식적', '무관심', '무시'],
    tips({
      etymology: '그리스어 kritikos(판단하는)에서 유래',
      visual: '빨간 불이 켜진 긴급 경고등',
      soundAlike: '크리티컬 = 크리티시즘(비판)',
      context: 'Time is critical. We must act now.',
      synonymAntonym: '동의어: crucial, vital, 반의어: trivial',
    }),
    {
      definition: 'extremely important or necessary',
      wordDistractors: ['Cynical', 'Clinical', 'Criminal'],
      definitionDistractors: [
        'unimportant or insignificant',
        'existing in name or form only',
        'mild or moderate in degree',
      ],
      exampleSentences: [
        { en: 'It is critical that we finish before the deadline.', ko: '기한 전에 마치는 것이 매우 중요하다.' },
        { en: 'The patient is in critical condition.', ko: '환자는 위독한 상태이다.' },
      ],
    }
  ),
  word('Crucial', '결정적인', 5, 'adjective',
    ['부수적', '사소한', '선택적', '임의', '무관한', '경미한', '가벼운', '형식적', '부가', '부대'],
    tips({
      etymology: '라틴어 crux(십자가, 분기점)에서 유래',
      visual: '갈림길에서 결정적 순간',
      soundAlike: '크루셜 = 크루시블(도가니)',
      context: 'This meeting is crucial for our success.',
      synonymAntonym: '동의어: critical, decisive, 반의어: minor',
    }),
    {
      definition: 'of decisive importance; essential to the outcome',
      wordDistractors: ['Cruel', 'Crystal', 'Credible'],
      definitionDistractors: [
        'optional or not required',
        'having little importance',
        'occurring by chance',
      ],
      exampleSentences: [
        { en: 'This was a crucial moment in the negotiations.', ko: '이것은 협상에서 결정적인 순간이었다.' },
        { en: 'Getting enough sleep is crucial for your health.', ko: '충분한 수면은 건강에 결정적으로 중요하다.' },
      ],
    }
  ),
  word('Cultivate', '배양하다', 5, 'verb',
    ['방치하다', '황폐화', '무시하다', '파괴하다', '버리다', '소홀히 하다', '해고하다', '잘라내다', '제거', '방임'],
    tips({
      etymology: '라틴어 colere(경작하다)에서 유래',
      visual: '정성스럽게 나무를 심는 농부',
      soundAlike: '컬티베이트 = 컬처(문화)',
      context: 'She cultivates relationships with clients.',
      synonymAntonym: '동의어: nurture, develop, 반의어: neglect',
    }),
    {
      definition: 'to develop or improve something by giving attention to it',
      wordDistractors: ['Calculate', 'Complicate', 'Coordinate'],
      definitionDistractors: [
        'to ignore or pay no attention to',
        'to destroy or damage completely',
        'to remove or get rid of',
      ],
      exampleSentences: [
        { en: 'She cultivated a love of music in her children.', ko: '그녀는 자녀들에게 음악에 대한 사랑을 키워주었다.' },
        { en: 'He has cultivated many useful contacts over the years.', ko: '그는 여러 해에 걸쳐 많은 유용한 인맥을 쌓았다.' },
      ],
    }
  ),
  word('Cumulative', '누적된', 5, 'adjective',
    ['단발적', '일회성', '일시적', '개별적', '분산된', '감소하는', '해산', '소멸', '감쇠', '단절'],
    tips({
      etymology: '라틴어 cumulare(쌓다)에서 유래',
      visual: '층층이 쌓인 서류 더미',
      soundAlike: '큐뮬러티브 = 큐뮬레이션(누적)',
      context: 'The cumulative effect was significant.',
      synonymAntonym: '동의어: accumulated, total, 반의어: discrete',
    }),
    {
      definition: 'increasing or growing by successive additions',
      wordDistractors: ['Accumulative', 'Culminate', 'Calculative'],
      definitionDistractors: [
        'happening once or for a short time',
        'scattered or spread apart',
        'decreasing or diminishing',
      ],
      exampleSentences: [
        { en: 'The cumulative impact of small changes was enormous.', ko: '작은 변화들의 누적 효과는 엄청났다.' },
        { en: 'Students take a cumulative final exam at the end of the year.', ko: '학생들은 연말에 누적된 최종 시험을 본다.' },
      ],
    }
  ),
  word('Currency', '통화', 5, 'noun',
    ['물물교환', '고정자산', '부동산', '채무', '부채', '무가치', '쓸모없음', '폐기', '구식', '유통중단'],
    tips({
      etymology: '라틴어 currere(흐르다) -> 유통되는 것',
      visual: '지폐와 동전이 그려진 지갑',
      soundAlike: '커런시 = 커런트(현재의)',
      context: 'The dollar is a strong currency.',
      synonymAntonym: '동의어: money, cash',
    }),
    {
      definition: 'the system of money used in a particular country',
      wordDistractors: ['Current', 'Cursory', 'Curiosity'],
      definitionDistractors: [
        'a piece of land with buildings',
        'something owed to another',
        'coins and bills and their value',
      ],
      exampleSentences: [
        { en: 'The euro is the currency of many European countries.', ko: '유로는 많은 유럽 국가의 통화이다.' },
        { en: 'The currency has weakened against the dollar.', ko: '그 통화는 달러 대비 약세를 보였다.' },
      ],
    }
  ),
  word('Curriculum', '교육과정', 5, 'noun',
    ['무계획', '즉흥', '비구조', '무체계', '분산', '해체', '무교육', '공백', '무지', '무학'],
    tips({
      etymology: '라틴어 currere(달리다) -> 달려가는 경로',
      visual: '학기별로 나열된 과목표',
      soundAlike: '커리큘럼 = 커리큘러(과정의)',
      context: 'The curriculum has been updated.',
      synonymAntonym: '동의어: syllabus, program',
    }),
    {
      definition: 'the subjects and courses offered by a school or program',
      wordDistractors: ['Curricular', 'Ceremony', 'Continuum'],
      definitionDistractors: [
        'a person who teaches students',
        'a building where education takes place',
        'a written work used for study',
      ],
      exampleSentences: [
        { en: 'The new curriculum includes more science courses.', ko: '새 교육과정에는 과학 과목이 더 많이 포함된다.' },
        { en: 'Teachers help design the school curriculum.', ko: '교사들은 학교 교육과정 설계를 돕는다.' },
      ],
    }
  ),
  word('Database', '데이터베이스', 5, 'noun',
    ['무질서', '분산', '허공', '공백', '무자료', '수기', '비체계', '산발', '혼란', '미정리'],
    tips({
      etymology: 'data(데이터) + base(기반) -> 데이터의 기반',
      visual: '표로 정리된 레코드들의 집합',
      soundAlike: '데이터베이스 = DB',
      context: 'The database stores customer information.',
      synonymAntonym: '동의어: repository, archive',
    }),
    {
      definition: 'an organized collection of data stored electronically',
      wordDistractors: ['Dateline', 'Baseline', 'Showcase'],
      definitionDistractors: [
        'a physical book of records',
        'a person who enters data',
        'a program that displays information',
      ],
      exampleSentences: [
        { en: 'The database contains millions of records.', ko: '그 데이터베이스에는 수백만 개의 레코드가 있다.' },
        { en: 'We need to update the customer database.', ko: '고객 데이터베이스를 업데이트해야 한다.' },
      ],
    }
  ),
  word('Decent', '적절한', 5, 'adjective',
    ['부적절한', '비열한', '천한', '추악한', '무례한', '저질', '품위없는', '야한', '부도덕', '비양심'],
    tips({
      etymology: '라틴어 decere(어울리다)에서 유래',
      visual: '단정한 옷차림의 사람',
      soundAlike: '디센트 = 데센시(체면)',
      context: 'Everyone deserves decent working conditions.',
      synonymAntonym: '동의어: adequate, respectable, 반의어: indecent',
    }),
    {
      definition: 'acceptable in quality or standard; proper and respectable',
      wordDistractors: ['Descent', 'Recent', 'Accent'],
      definitionDistractors: [
        'unacceptable or improper',
        'below average in quality',
        'extremely high in quality',
      ],
      exampleSentences: [
        { en: 'She earns a decent salary.', ko: '그녀는 적절한 급여를 받는다.' },
        { en: 'Everyone deserves decent housing.', ko: '모두 적절한 주거지를 가질 자격이 있다.' },
      ],
    }
  ),
  word('Dedicate', '헌신하다', 5, 'verb',
    ['소홀히 하다', '방치하다', '거부하다', '포기하다', '무시하다', '태만', '배반', '이탈', '해이', '무관심'],
    tips({
      etymology: 'de(아래로) + dic(말하다) + -ate -> 바쳐 말하다',
      visual: '상처에 이름을 새긴 헌정 비석',
      soundAlike: '데디케이트 = 데디케이션(헌신)',
      context: 'She dedicated her life to science.',
      synonymAntonym: '동의어: devote, commit, 반의어: neglect',
    }),
    {
      definition: 'to give completely to a particular purpose or cause',
      wordDistractors: ['Delegate', 'Delineate', 'Deliberate'],
      definitionDistractors: [
        'to ignore or pay no attention',
        'to give up or abandon',
        'to take away or remove',
      ],
      exampleSentences: [
        { en: 'He dedicated his book to his parents.', ko: '그는 책을 부모님께 바쳤다.' },
        { en: 'She dedicated years to the research project.', ko: '그녀는 그 연구 프로젝트에 수년을 헌신했다.' },
      ],
    }
  ),
  word('Deficit', '적자', 5, 'noun',
    ['흑자', '잉여', '과잉', '남음', '초과', '플러스', '수지상환', '여유', '축적', '남아돔'],
    tips({
      etymology: 'de(아래로) + fic(하다) + -it -> 부족분',
      visual: '마이너스가 표시된 재정 그래프',
      soundAlike: '데피싯 = 데피시트(적자)',
      context: 'The country has a budget deficit.',
      synonymAntonym: '동의어: shortfall, shortage, 반의어: surplus',
    }),
    {
      definition: 'the amount by which something is less than what is needed',
      wordDistractors: ['Default', 'Defect', 'Defiance'],
      definitionDistractors: [
        'money left over after expenses',
        'an increase or addition',
        'a record of financial transactions',
      ],
      exampleSentences: [
        { en: 'The government is trying to reduce the budget deficit.', ko: '정부는 재정 적자를 줄이려 하고 있다.' },
        { en: 'The trade deficit widened last quarter.', ko: '무역 적자가 지난 분기에 확대되었다.' },
      ],
    }
  ),
  word('Deliberate', '신중한', 5, 'adjective',
    ['충동적', '경솔한', '무계획', '우연적', '즉흥적', '성급한', '조급', '무분별', '무모', '변덕'],
    tips({
      etymology: 'de(완전히) + liber(저울) + -ate -> 저울로 재다',
      visual: '깊이 생각하는 사람의 표정',
      soundAlike: '딜리버레이트 = 딜리버레이션(숙고)',
      context: 'It was a deliberate decision.',
      synonymAntonym: '동의어: intentional, thoughtful, 반의어: accidental',
    }),
    {
      definition: 'done consciously and intentionally; careful and unhurried',
      wordDistractors: ['Delicate', 'Definite', 'Delegate'],
      definitionDistractors: [
        'done without thinking',
        'happening by chance',
        'done quickly or carelessly',
      ],
      exampleSentences: [
        { en: 'It was a deliberate attempt to mislead the public.', ko: '그것은 대중을 오도하려는 신중한 시도였다.' },
        { en: 'She spoke in a slow, deliberate manner.', ko: '그녀는 천천히 신중한 말투로 말했다.' },
      ],
    }
  ),
  word('Democracy', '민주주의', 5, 'noun',
    ['독재', '전제', '신정', '군정', '일당제', '과두제', '억압', '독단', '폭정', '억압정치'],
    tips({
      etymology: '그리스어 demos(국민) + kratos(권력) -> 국민의 권력',
      visual: '투표함에 투표지를 넣는 시민',
      soundAlike: '디모크라시 = 데모크래틱(민주적)',
      context: 'Democracy requires active participation.',
      synonymAntonym: '동의어: republic, self-rule, 반의어: dictatorship',
    }),
    {
      definition: 'a system of government by the whole population through elected representatives',
      wordDistractors: ['Demography', 'Diplomacy', 'Bureaucracy'],
      definitionDistractors: [
        'rule by a single person with absolute power',
        'a written plan of government',
        'a formal meeting of a legislature',
      ],
      exampleSentences: [
        { en: 'Democracy depends on informed citizens.', ko: '민주주의는 정보를 갖춘 시민에 의존한다.' },
        { en: 'Many countries are transitioning to democracy.', ko: '많은 국가들이 민주주의로 전환하고 있다.' },
      ],
    }
  ),
  word('Dense', '짙은', 5, 'adjective',
    ['희박한', '성기다', '얇은', '투명', '비어 있는', '공허', '텅 빔', '드문', '희한', '소산'],
    tips({
      etymology: '라틴어 densus(촘촘한)에서 유래',
      visual: '빽빽한 숲 속',
      soundAlike: '덴스 = 덴시티(밀도)',
      context: 'The fog was dense this morning.',
      synonymAntonym: '동의어: thick, compact, 반의어: sparse',
    }),
    {
      definition: 'having parts closely packed together; thick and difficult to see through',
      wordDistractors: ['Sense', 'Defense', 'Tense'],
      definitionDistractors: [
        'thin or spread out',
        'easy to see through',
        'empty or without substance',
      ],
      exampleSentences: [
        { en: 'The forest was too dense to walk through.', ko: '숲이 너무 빽빽해서 걸어갈 수 없었다.' },
        { en: 'Dense fog covered the city this morning.', ko: '짙은 안개가 오늘 아침 도시를 덮었다.' },
      ],
    }
  ),
  word('Depict', '그리다', 5, 'verb',
    ['지우다', '숨기다', '왜곡하다', '은폐하다', '흐리게 하다', '삭제', '제거', '희석', '왜곡', '은폐'],
    tips({
      etymology: 'de(완전히) + pict(그리다) -> 완전히 그리다',
      visual: '붓으로 그림을 그리는 화가',
      soundAlike: '디픽트 = 디픽션(묘사)',
      context: 'The painting depicts a rural scene.',
      synonymAntonym: '동의어: portray, represent, 반의어: obscure',
    }),
    {
      definition: 'to represent or show something in a picture or words',
      wordDistractors: ['Deflect', 'Direct', 'Detect'],
      definitionDistractors: [
        'to remove or make invisible',
        'to hide or conceal',
        'to change or distort the truth',
      ],
      exampleSentences: [
        { en: 'The mural depicts the history of the town.', ko: '벽화는 마을의 역사를 그려낸다.' },
        { en: 'The novel depicts life in the 19th century.', ko: '그 소설은 19세기 삶을 묘사한다.' },
      ],
    }
  ),
  word('Deprive', '박탈하다', 5, 'verb',
    ['부여하다', '제공하다', '충족하다', '채워주다', '허용하다', '혜택', '지원', '증여', '부여', '수여'],
    tips({
      etymology: 'de(떨어져) + priv(개인) -> 개인에서 떼어내다',
      visual: '빼앗기는 물건을 잡는 손',
      soundAlike: '디프라이브 = 디프라이베이션(박탈)',
      context: 'No one should be deprived of basic rights.',
      synonymAntonym: '동의어: strip, deny, 반의어: provide',
    }),
    {
      definition: 'to prevent someone from having or using something',
      wordDistractors: ['Derive', 'Describe', 'Survive'],
      definitionDistractors: [
        'to give or supply something',
        'to help or support someone',
        'to allow or permit something',
      ],
      exampleSentences: [
        { en: 'Children should not be deprived of education.', ko: '아이들은 교육을 박탈당해서는 안 된다.' },
        { en: 'Sleep deprivation affects your health.', ko: '수면 박탈은 건강에 영향을 미친다.' },
      ],
    }
  ),
  word('Derive', '유래하다', 5, 'verb',
    ['원인', '시초', '비롯', '무관', '독립', '분리', '단절', '고유', '본래', '고유'],
    tips({
      etymology: 'de(아래로) + riv(흐르다) -> 아래로 흘러내리다',
      visual: '나무 뿌리에서 가지로 퍼지는 모습',
      soundAlike: '디라이브 = 디라이베이션(유래)',
      context: 'The word derives from Latin.',
      synonymAntonym: '동의어: originate, stem from',
    }),
    {
      definition: 'to obtain or come from a source or origin',
      wordDistractors: ['Deprive', 'Drift', 'Diverge'],
      definitionDistractors: [
        'to give or supply something',
        'to remove or take away',
        'to create something new',
      ],
      exampleSentences: [
        { en: 'Many English words derive from French.', ko: '많은 영어 단어가 프랑스어에서 유래한다.' },
        { en: 'She derives great pleasure from gardening.', ko: '그녀는 정원 가꾸기에서 큰 즐거움을 얻는다.' },
      ],
    }
  ),
  word('Designate', '지정하다', 5, 'verb',
    ['해제하다', '취소하다', '철회하다', '무명', '미지정', '임의', '불명', '미결정', '보류', '해제'],
    tips({
      etymology: 'de(강조) + sign(표시) + -ate -> 표시하여 지정하다',
      visual: '지도에 표시된 지정 구역',
      soundAlike: '데지그네이트 = 데지그네이션(지정)',
      context: 'He was designated as the leader.',
      synonymAntonym: '동의어: appoint, assign, 반의어: remove',
    }),
    {
      definition: 'to choose someone or something for a particular purpose',
      wordDistractors: ['Delegate', 'Delegate', 'Design'],
      definitionDistractors: [
        'to remove or dismiss from a position',
        'to cancel or call off',
        'to suggest or propose vaguely',
      ],
      exampleSentences: [
        { en: 'She was designated to lead the project.', ko: '그녀가 프로젝트를 이끌도록 지정되었다.' },
        { en: 'The area was designated as a nature reserve.', ko: '그 지역은 자연 보호 구역으로 지정되었다.' },
      ],
    }
  ),
  word('Destiny', '운명', 5, 'noun',
    ['우연', '자유의지', '선택', '임의', '불확실', '변동', '우발', '비결정', '가변', '자유'],
    tips({
      etymology: '라틴어 destinare(고정하다)에서 유래',
      visual: '별이 이끄는 길을 걸어가는 실루엣',
      soundAlike: '데스티니 = 데스티네이션(목적지)',
      context: 'She believed in destiny.',
      synonymAntonym: '동의어: fate, fortune, 반의어: chance',
    }),
    {
      definition: 'the events that will necessarily happen to a person or thing',
      wordDistractors: ['Destination', 'Density', 'Dignity'],
      definitionDistractors: [
        'something that happens by chance',
        'a plan or intention',
        'a place one is traveling to',
      ],
      exampleSentences: [
        { en: 'He felt that meeting her was his destiny.', ko: '그녀를 만난 것이 그의 운명이라고 느꼈다.' },
        { en: 'She shaped her own destiny through hard work.', ko: '그녀는 노력으로 자신의 운명을 만들었다.' },
      ],
    }
  ),
  word('Deteriorate', '악화되다', 6, 'verb',
    ['개선되다', '회복되다', '호전되다', '나아지다', '향상되다', '정상화', '복구', '치유', '발전', '진보'],
    tips({
      etymology: '라틴어 deterior(더 나쁜) + -ate -> 더 나빠지다',
      visual: '세월로 낡아가는 건물',
      soundAlike: '디티리어레이트 = 디티리어레이션(악화)',
      context: 'His health deteriorated rapidly.',
      synonymAntonym: '동의어: worsen, decline, 반의어: improve',
    }),
    {
      definition: 'to become worse in quality or condition',
      wordDistractors: ['Delegate', 'Delineate', 'Differentiate'],
      definitionDistractors: [
        'to become better or improve',
        'to stay the same',
        'to fix or repair something',
      ],
      exampleSentences: [
        { en: 'The patient\'s condition deteriorated overnight.', ko: '환자의 상태가 밤새 악화되었다.' },
        { en: 'Relations between the two countries have deteriorated.', ko: '두 나라 간의 관계가 악화되었다.' },
      ],
    }
  ),
  word('Diversion', '전환, 기분전환', 6, 'noun',
    ['집중', '몰입', '주의', '관심', '집착', '전념', '열중', '몰두', '주시', '응시'],
    tips({
      etymology: 'di(떨어져) + vert(돌리다) + -sion -> 방향을 돌림',
      visual: '도로 우회 표지판',
      soundAlike: '디버전 = 다이버전(방향 전환)',
      context: 'The magician created a diversion to escape.',
      synonymAntonym: '동의어: distraction, detour, 반의어: focus',
    }),
    {
      definition: 'something that takes attention away from something else; a detour',
      wordDistractors: ['Division', 'Dimension', 'Diffusion'],
      definitionDistractors: [
        'complete focus on one thing',
        'the main route or path',
        'a serious or important matter',
      ],
      exampleSentences: [
        { en: 'Reading is a pleasant diversion from work.', ko: '독서는 일에서 벗어나는 즐거운 기분전환이다.' },
        { en: 'Traffic was diverted due to road construction.', ko: '도로 공사로 인해 교통이 우회되었다.' },
      ],
    }
  ),
  word('Diagnose', '진단하다', 6, 'verb',
    ['오진', '무시', '방치', '추측', '대충', '무지', '착각', '미확인', '무분별', '무시'],
    tips({
      etymology: 'dia(통하여) + gnos(알다) -> 통해 알아내다',
      visual: '청진기를 대고 진찰하는 의사',
      soundAlike: '다이애그노즈 = 다이애그노시스(진단)',
      context: 'The doctor diagnosed the illness.',
      synonymAntonym: '동의어: identify, determine',
    }),
    {
      definition: 'to identify the nature of an illness or problem by examination',
      wordDistractors: ['Diagram', 'Dialog', 'Diameter'],
      definitionDistractors: [
        'to treat or cure an illness',
        'to guess without evidence',
        'to ignore or overlook a problem',
      ],
      exampleSentences: [
        { en: 'The doctor diagnosed him with pneumonia.', ko: '의사는 그에게 폐렴이라고 진단했다.' },
        { en: 'It took months to diagnose the rare condition.', ko: '희귀한 질환을 진단하는 데 몇 달이 걸렸다.' },
      ],
    }
  ),
  word('Dignity', '존엄', 6, 'noun',
    ['비열', '천함', '창피', '수치', '굴욕', '굴종', '비굴', '저속', '야비', '품위상실'],
    tips({
      etymology: '라틴어 dignus(가치 있는)에서 유래',
      visual: '곧은 자세로 서 있는 사람',
      soundAlike: '디그니티 = 인디그니티(굴욕)의 반대',
      context: 'Everyone deserves to be treated with dignity.',
      synonymAntonym: '동의어: self-respect, honor, 반의어: disgrace',
    }),
    {
      definition: 'the quality of being worthy of respect and honor',
      wordDistractors: ['Density', 'Destiny', 'Divinity'],
      definitionDistractors: [
        'shame or loss of respect',
        'physical strength or power',
        'a feeling of superiority',
      ],
      exampleSentences: [
        { en: 'She maintained her dignity throughout the trial.', ko: '그녀는 재판 내내 존엄을 유지했다.' },
        { en: 'Patients should be treated with dignity and respect.', ko: '환자는 존엄과 존중으로 대해야 한다.' },
      ],
    }
  ),
  word('Dilemma', '딜레마', 6, 'noun',
    ['명확한 선택', '쉬운 결정', '단순', '단일 옵션', '확실', '의문 없음', '명쾌', '분명', '단순화', '해결'],
    tips({
      etymology: '그리스어 di(두 개) + lemma(가정) -> 두 가지 가정',
      visual: '갈림길에서 망설이는 사람',
      soundAlike: '딜레마 = 딜레마틱(딜레마의)',
      context: 'She faced a moral dilemma.',
      synonymAntonym: '동의어: quandary, predicament',
    }),
    {
      definition: 'a situation requiring a difficult choice between two unsatisfactory options',
      wordDistractors: ['Delta', 'Drama', 'Diploma'],
      definitionDistractors: [
        'an easy decision with a clear answer',
        'a problem with only one solution',
        'a situation with no choices',
      ],
      exampleSentences: [
        { en: 'She was faced with a moral dilemma.', ko: '그녀는 도덕적 딜레마에 직면했다.' },
        { en: 'The dilemma kept him awake at night.', ko: '그 딜레마 때문에 그는 잠을 이루지 못했다.' },
      ],
    }
  ),
  word('Diminish', '감소시키다', 6, 'verb',
    ['증가시키다', '확대하다', '강화하다', '늘리다', '확장하다', '부풀리다', '증대', '확대', '강화', '증식'],
    tips({
      etymology: 'di(작게) + min(작다) + -ish -> 더 작게 하다',
      visual: '줄어드는 원 그래프',
      soundAlike: '디미니시 = 디미니슈(감소)',
      context: 'The storm diminished in intensity.',
      synonymAntonym: '동의어: decrease, reduce, 반의어: increase',
    }),
    {
      definition: 'to make or become smaller or less',
      wordDistractors: ['Finish', 'Polish', 'Banish'],
      definitionDistractors: [
        'to make larger or greater',
        'to keep at the same level',
        'to add or supplement',
      ],
      exampleSentences: [
        { en: 'His enthusiasm diminished over time.', ko: '그의 열정은 시간이 지나며 줄어들었다.' },
        { en: 'Nothing could diminish her joy.', ko: '아무것도 그녀의 기쁨을 줄일 수 없었다.' },
      ],
    }
  ),
  word('Diplomacy', '외교', 6, 'noun',
    ['전쟁', '대립', '갈등', '호전', '무력', '폭력', '적대', '불화', '분쟁', '무례'],
    tips({
      etymology: '그리스어 diploma(접힌 문서) -> 외교 문서',
      visual: '악수를 나누는 국가 지도자',
      soundAlike: '디플로마시 = 디플로매틱(외교적)',
      context: 'Diplomacy prevented the conflict.',
      synonymAntonym: '동의어: tact, negotiation, 반의어: hostility',
    }),
    {
      definition: 'the art of managing international relations through negotiation',
      wordDistractors: ['Democracy', 'Bureaucracy', 'Autocracy'],
      definitionDistractors: [
        'armed conflict between nations',
        'a formal document or certificate',
        'a person who represents a country',
      ],
      exampleSentences: [
        { en: 'Diplomacy helped avoid war between the two nations.', ko: '외교가 두 나라 간의 전쟁을 피하는 데 도움이 되었다.' },
        { en: 'She handled the situation with skill and diplomacy.', ko: '그녀는 기술과 외교로 상황을 처리했다.' },
      ],
    }
  ),
  word('Discipline', '훈련', 6, 'noun',
    ['무규율', '해이', '방탕', '무절제', '무질서', '혼란', '산만', '무계획', '부정', '방종'],
    tips({
      etymology: '라틴어 discere(배우다) + -pulus(제자) -> 가르침',
      visual: '규칙적으로 운동하는 사람',
      soundAlike: '디서플린 = 디서플린드(훈련된)',
      context: 'Discipline is key to success.',
      synonymAntonym: '동의어: training, self-control, 반의어: chaos',
    }),
    {
      definition: 'training that produces obedience or self-control; a field of study',
      wordDistractors: ['Disciple', 'Disclose', 'Discreet'],
      definitionDistractors: [
        'lack of order or control',
        'a reward for good behavior',
        'freedom from restrictions',
      ],
      exampleSentences: [
        { en: 'Military discipline shaped his character.', ko: '군사 훈련이 그의 성격을 만들었다.' },
        { en: 'She studied her discipline for years.', ko: '그녀는 자기 전공 분야를 수년간 공부했다.' },
      ],
    }
  ),
  word('Discourse', '담론', 6, 'noun',
    ['침묵', '무언', '단절', '무소통', '독백', '일방', '편향', '단정', '무논의', '비대화'],
    tips({
      etymology: 'dis(여기저기) + course(달리다) -> 논의가 오가다',
      visual: '토론을 벌이는 학자들',
      soundAlike: '디스코스 = 디스코스(담론)',
      context: 'Political discourse has become polarized.',
      synonymAntonym: '동의어: discussion, dialogue',
    }),
    {
      definition: 'written or spoken communication or debate on a topic',
      wordDistractors: ['Discourse', 'Discord', 'Discount'],
      definitionDistractors: [
        'complete silence or no communication',
        'a short informal talk',
        'a formal written document',
      ],
      exampleSentences: [
        { en: 'Public discourse on the issue has been intense.', ko: '그 이슈에 대한 공적 담론이 격렬했다.' },
        { en: 'Academic discourse requires evidence and logic.', ko: '학술적 담론은 증거와 논리가 필요하다.' },
      ],
    }
  ),
  word('Discrimination', '차별', 6, 'noun',
    ['평등', '공정', '동등 대우', '포용', '포섭', '통합', '융합', '화합', '공평', '균형'],
    tips({
      etymology: 'dis(나누다) + crimin(판단) + -ation -> 구분하여 다르게 대하다',
      visual: '닫힌 문 앞에 선 소외된 사람',
      soundAlike: '디스크리미네이션 = 디스크리미네이트(차별하다)',
      context: 'Discrimination based on race is illegal.',
      synonymAntonym: '동의어: prejudice, bias, 반의어: equality',
    }),
    {
      definition: 'unfair treatment of people based on race, gender, or other characteristics',
      wordDistractors: ['Discernment', 'Distinction', 'Dissemination'],
      definitionDistractors: [
        'equal treatment of all people',
        'the ability to judge wisely',
        'fair and just behavior',
      ],
      exampleSentences: [
        { en: 'Laws protect workers from discrimination.', ko: '법률은 근로자를 차별로부터 보호한다.' },
        { en: 'She fought against gender discrimination.', ko: '그녀는 성차별에 맞서 싸웠다.' },
      ],
    }
  ),
  word('Dispose', '처분하다', 6, 'verb',
    ['보관하다', '축적하다', '수집하다', '유지하다', '보존하다', '저장', '비축', '축적', '보유', '보관'],
    tips({
      etymology: 'dis(분리) + pose(놓다) -> 나누어 놓다',
      visual: '쓰레기를 분리수거함에 넣는 손',
      soundAlike: '디스포즈 = 디스포잘(처분)',
      context: 'We need to dispose of the waste properly.',
      synonymAntonym: '동의어: discard, get rid of, 반의어: keep',
    }),
    {
      definition: 'to get rid of or throw away something',
      wordDistractors: ['Displace', 'Discover', 'Disclose'],
      definitionDistractors: [
        'to keep or store something',
        'to collect or gather items',
        'to repair or fix something',
      ],
      exampleSentences: [
        { en: 'Please dispose of recyclables in the blue bin.', ko: '재활용품은 파란색 통에 버려 주세요.' },
        { en: 'Hazardous waste must be disposed of safely.', ko: '유해 폐기물은 안전하게 처분해야 한다.' },
      ],
    }
  ),
  word('Dispute', '분쟁', 6, 'noun',
    ['합의', '화해', '동의', '일치', '조화', '협력', '평화', '우호', '타협', '해결'],
    tips({
      etymology: 'dis(나쁘게) + pute(세다) -> 나쁘게 따지다',
      visual: '논쟁하는 두 당사자',
      soundAlike: '디스퓨트 = 디스퓨티드(논쟁의 여지 있는)',
      context: 'There is a dispute over the border.',
      synonymAntonym: '동의어: conflict, quarrel, 반의어: agreement',
    }),
    {
      definition: 'a disagreement or argument between people or groups',
      wordDistractors: ['Repute', 'Compute', 'Depute'],
      definitionDistractors: [
        'harmony or agreement',
        'a formal legal decision',
        'a friendly conversation',
      ],
      exampleSentences: [
        { en: 'The labor dispute lasted for months.', ko: '노동 분쟁이 수개월 동안 지속되었다.' },
        { en: 'There is no dispute about the facts.', ko: '사실에 대해서는 분쟁이 없다.' },
      ],
    }
  ),
  word('Dissolve', '용해하다', 6, 'verb',
    ['굳히다', '응고시키다', '고체화', '응결', '결정', '고착', '고체', '응고', '침전', '침적'],
    tips({
      etymology: 'dis(분리) + solve(풀다) -> 풀어 분산시키다',
      visual: '물에 녹아가는 설탕',
      soundAlike: '디졸브 = 디졸루션(용해)',
      context: 'Salt dissolves in water.',
      synonymAntonym: '동의어: melt, liquefy, 반의어: solidify',
    }),
    {
      definition: 'to mix with a liquid and become part of it; to disappear or end',
      wordDistractors: ['Resolve', 'Absolve', 'Evolve'],
      definitionDistractors: [
        'to make solid or hard',
        'to keep separate or apart',
        'to freeze or cool down',
      ],
      exampleSentences: [
        { en: 'Sugar dissolves quickly in hot water.', ko: '설탕은 뜨거운 물에 빨리 녹는다.' },
        { en: 'The company dissolved last year.', ko: '그 회사는 작년에 해산되었다.' },
      ],
    }
  ),
  word('Distinct', '뚜렷한', 6, 'adjective',
    ['모호한', '흐린', '비슷한', '애매한', '불명확', '혼동', '동일', '일치', '유사', '중첩'],
    tips({
      etymology: 'dis(분리) + stinct(찌르다) -> 분리되어 찌르듯 뚜렷한',
      visual: '선명하게 구분되는 두 색상',
      soundAlike: '디스팅트 = 디스팅션(구별)',
      context: 'Each species has distinct characteristics.',
      synonymAntonym: '동의어: clear, different, 반의어: 모호함',
    }),
    {
      definition: 'clearly different or separate; easily perceived',
      wordDistractors: ['Extinct', 'Instinct', 'Constrict'],
      definitionDistractors: [
        'unclear or blurred',
        'exactly the same',
        'partially similar',
      ],
      exampleSentences: [
        { en: 'They have three distinct sections.', ko: '그것들은 세 가지 뚜렷한 섹션으로 되어 있다.' },
        { en: 'I heard a distinct sound from the basement.', ko: '지하실에서 뚜렷한 소리가 들렸다.' },
      ],
    }
  ),
  word('Distinction', '구별', 6, 'noun',
    ['혼동', '동일시', '융합', '통합', '일치', '동질', '무구분', '흐림', '모호', '혼재'],
    tips({
      etymology: 'dis(분리) + stinct(찌르다) + -ion -> 분리하여 구분함',
      visual: '가장 좋은 것에 매달린 금메달',
      soundAlike: '디스팅션 = 디스팅트(뚜렷한)',
      context: 'There is a distinction between wants and needs.',
      synonymAntonym: '동의어: difference, nuance',
    }),
    {
      definition: 'a difference or contrast between similar things',
      wordDistractors: ['Extinction', 'Distraction', 'Restriction'],
      definitionDistractors: [
        'complete sameness',
        'a combination or fusion',
        'a general similarity',
      ],
      exampleSentences: [
        { en: 'There is an important distinction between the two concepts.', ko: '두 개념 사이에는 중요한 구별이 있다.' },
        { en: 'She graduated with distinction.', ko: '그녀는 우수한 성적으로 졸업했다.' },
      ],
    }
  ),
  word('Distort', '왜곡하다', 6, 'verb',
    ['정확히 전하다', '그대로 반영', '진실', '완전', '정직', '정확', '충실', '원본', '직진', '솔직'],
    tips({
      etymology: 'dis(나쁘게) + tort(꼬다) -> 나쁘게 꼬다',
      visual: '곡선 거울에 비친 왜곡된 얼굴',
      soundAlike: '디스토트 = 디스토션(왜곡)',
      context: 'The media distorted his words.',
      synonymAntonym: '동의어: twist, misrepresent, 반의어: clarify',
    }),
    {
      definition: 'to change something so it is no longer true or accurate',
      wordDistractors: ['Distract', 'Detract', 'Distribute'],
      definitionDistractors: [
        'to report exactly as stated',
        'to improve or enhance',
        'to create something new',
      ],
      exampleSentences: [
        { en: 'The article distorted the facts.', ko: '그 기사는 사실을 왜곡했다.' },
        { en: 'The mirror distorted his reflection.', ko: '거울이 그의 모습을 왜곡했다.' },
      ],
    }
  ),
  word('Diverse', '다양한', 6, 'adjective',
    ['단일한', '동질적', '일원화', '단조로움', '균일', '동일', '단순', '제한적', '편협', '편파'],
    tips({
      etymology: 'dis(나누다) + vers(돌다) -> 다양한 방향으로',
      visual: '여러 인종이 모인 팀',
      soundAlike: '다이버스 = 다이버시티(다양성)',
      context: 'We need a diverse workforce.',
      synonymAntonym: '동의어: varied, multicultural, 반의어: uniform',
    }),
    {
      definition: 'showing a great deal of variety; including many different types',
      wordDistractors: ['Divert', 'Divest', 'Reverse'],
      definitionDistractors: [
        'all the same or identical',
        'limited to one type',
        'simple or basic',
      ],
      exampleSentences: [
        { en: 'The city has a diverse population.', ko: '그 도시는 다양한 인구를 가지고 있다.' },
        { en: 'We need diverse perspectives on the team.', ko: '팀에는 다양한 시각이 필요하다.' },
      ],
    }
  ),
  word('Doctrine', '교의', 6, 'noun',
    ['실천', '경험', '실험', '불확실', '유연', '가변', '실용', '경험주의', '실증', '변용'],
    tips({
      etymology: '라틴어 docere(가르치다)에서 유래',
      visual: '성경과 교리서',
      soundAlike: '독트린 = 독트리너(교의자)',
      context: 'The doctrine was widely accepted.',
      synonymAntonym: '동의어: creed, belief',
    }),
    {
      definition: 'a belief or set of beliefs held by a religious or political group',
      wordDistractors: ['Doctrina', 'Doctor', 'Document'],
      definitionDistractors: [
        'a practical action or deed',
        'a question or uncertainty',
        'a changeable or flexible rule',
      ],
      exampleSentences: [
        { en: 'The church revised its doctrine on marriage.', ko: '교회는 결혼에 대한 교의를 수정했다.' },
        { en: 'Political doctrine influenced his decisions.', ko: '정치적 교의가 그의 결정에 영향을 미쳤다.' },
      ],
    }
  ),
  word('Domestic', '국내의', 6, 'adjective',
    ['해외의', '국제적', '외국', '수입', '이국적', '외래', '해외', '타국', '국제', '세계적'],
    tips({
      etymology: '라틴어 domus(집)에서 유래',
      visual: '집 안의 가족',
      soundAlike: '도메스틱 = 도메스틱 파트너',
      context: 'Domestic violence is a serious issue.',
      synonymAntonym: '동의어: home, internal, 반의어: foreign',
    }),
    {
      definition: 'relating to one\'s own country; relating to home or family',
      wordDistractors: ['Dramatic', 'Democratic', 'Diplomatic'],
      definitionDistractors: [
        'relating to other countries',
        'relating to business or commerce',
        'relating to government',
      ],
      exampleSentences: [
        { en: 'Domestic flights are cheaper than international ones.', ko: '국내선은 국제선보다 저렴하다.' },
        { en: 'Domestic chores take up most of her weekend.', ko: '집안일에 주말 대부분을 보낸다.' },
      ],
    }
  ),
  word('Dominant', '지배적인', 6, 'adjective',
    ['종속적', '열세', '열등', '부수적', '미미', '보조', '보조적', '부진', '약세', '수동'],
    tips({
      etymology: '라틴어 dominari(지배하다)에서 유래',
      visual: '무대 중앙에 선 리더',
      soundAlike: '도미넌트 = 도미네이트(지배하다)',
      context: 'English is the dominant language.',
      synonymAntonym: '동의어: prevailing, foremost, 반의어: subordinate',
    }),
    {
      definition: 'having the most control or influence; most important',
      wordDistractors: ['Prominent', 'Predominant', 'Imminent'],
      definitionDistractors: [
        'least important or secondary',
        'equal in rank or status',
        'temporary or passing',
      ],
      exampleSentences: [
        { en: 'Blue is the dominant color in the painting.', ko: '파란색이 그 그림에서 지배적인 색이다.' },
        { en: 'She has a dominant personality.', ko: '그녀는 지배적인 성격을 가지고 있다.' },
      ],
    }
  ),
  word('Donate', '기부하다', 6, 'verb',
    ['받다', '소비하다', '보관하다', '차지하다', '빼앗다', '구걸', '갈취', '축적', '매수', '보유'],
    tips({
      etymology: '라틴어 donare(주다)에서 유래',
      visual: '기부함에 돈을 넣는 손',
      soundAlike: '도네이트 = 도네이션(기부)',
      context: 'She donated money to the charity.',
      synonymAntonym: '동의어: give, contribute, 반의어: receive',
    }),
    {
      definition: 'to give money, goods, or time to a cause or organization',
      wordDistractors: ['Nominate', 'Dominate', 'Denote'],
      definitionDistractors: [
        'to receive or accept something',
        'to take without permission',
        'to sell or trade something',
      ],
      exampleSentences: [
        { en: 'He donated blood at the hospital.', ko: '그는 병원에서 헌혈했다.' },
        { en: 'Many people donated to the disaster relief fund.', ko: '많은 사람들이 재난 구호 기금에 기부했다.' },
      ],
    }
  ),
  word('Drastic', '급격한', 6, 'adjective',
    ['점진적', '완만한', '부드러운', '점차적', '느린', '완화', '완만', '점진', '서서히', '순차'],
    tips({
      etymology: '그리스어 drastikos(강력한)에서 유래',
      visual: '급격히 떨어지는 주가 그래프',
      soundAlike: '드라스틱 = 드라스틱 첸지(급격한 변화)',
      context: 'Drastic measures were needed.',
      synonymAntonym: '동의어: severe, radical, 반의어: gradual',
    }),
    {
      definition: 'likely to have a strong or far-reaching effect; extreme',
      wordDistractors: ['Dramatic', 'Dynastic', 'Elastic'],
      definitionDistractors: [
        'happening slowly over time',
        'mild or moderate',
        'slight or insignificant',
      ],
      exampleSentences: [
        { en: 'Drastic cuts were made to the budget.', ko: '예산에 급격한 삭감이 이루어졌다.' },
        { en: 'The situation requires drastic action.', ko: '상황은 급격한 조치를 요구한다.' },
      ],
    }
  ),
  word('Dwell', '거주하다', 6, 'verb',
    ['이사하다', '떠나다', '방문하다', '여행하다', '유목', '방랑', '부유', '이동', '이주', '이탈'],
    tips({
      etymology: '고대영어 dwellan(멈추다)에서 유래',
      visual: '집에서 편안히 쉬는 가족',
      soundAlike: '드웰 = 드웰링(주거)',
      context: 'They dwell in a small village.',
      synonymAntonym: '동의어: reside, live, 반의어: leave',
    }),
    {
      definition: 'to live in a particular place',
      wordDistractors: ['Swell', 'Quell', 'Duel'],
      definitionDistractors: [
        'to leave or move away',
        'to visit briefly',
        'to travel from place to place',
      ],
      exampleSentences: [
        { en: 'They dwell in a remote mountain village.', ko: '그들은 외딴 산골 마을에 거주한다.' },
        { en: 'Creatures that dwell in the deep ocean.', ko: '깊은 바다에 사는 생물들.' },
      ],
    }
  ),
  word('Dynamic', '역동적인', 6, 'adjective',
    ['정적인', '고정된', '움직임 없음', '둔함', '가만함', '침체', '정체', '불변', '고착', '정지'],
    tips({
      etymology: '그리스어 dynamis(힘)에서 유래',
      visual: '빠르게 움직이는 무용수',
      soundAlike: '다이내믹 = 다이내믹스(역학)',
      context: 'The market is very dynamic.',
      synonymAntonym: '동의어: active, energetic, 반의어: static',
    }),
    {
      definition: 'characterized by constant change, activity, or progress',
      wordDistractors: ['Dramatic', 'Diabetic', 'Magnetic'],
      definitionDistractors: [
        'not moving or changing',
        'boring or dull',
        'predictable or fixed',
      ],
      exampleSentences: [
        { en: 'She has a dynamic personality.', ko: '그녀는 역동적인 성격을 가지고 있다.' },
        { en: 'The industry remains highly dynamic.', ko: '그 산업은 여전히 매우 역동적이다.' },
      ],
    }
  ),
];
