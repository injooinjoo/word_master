import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch32: VocabItem[] = [
  word('dual', '이중의', 8, 'adjective',
    ['효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인'],
    tips({
      etymology: 'dual의 접두/어근/접미를 확인하며 "이중의" 의미와 연결해 암기하자.',
      visual: '"이중의" 상황을 머릿속 한 장면으로 만들고 단어 dual를 함께 떠올리자.',
      soundAlike: 'dual의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "dual" conveys the meaning "이중의".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'consisting of two parts or elements',
      synonyms: ['double', 'twofold', 'twin'],
      antonyms: ['single', 'sole', 'individual'],
      exampleSentences: [
        { en: 'She has dual citizenship in both Korea and the United States.', ko: '그녀는 한국과 미국의 이중 국적을 가지고 있다.' },
        { en: 'The device serves a dual purpose as both a phone and a camera.', ko: '그 기기는 전화기와 카메라라는 이중 목적을 제공한다.' },
      ],
    }
  ),
  word('duck', '오리', 1, 'noun',
    ['거위', '닭', '타조', '펭귄', '백조', '까치', '까마귀', '비둘기', '독수리', '앵무새'],
    tips({
      etymology: 'duck의 접두/어근/접미를 확인하며 "오리" 의미와 연결해 암기하자.',
      visual: '"오리" 상황을 머릿속 한 장면으로 만들고 단어 duck를 함께 떠올리자.',
      soundAlike: 'duck의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "duck" conveys the meaning "오리".',
      synonymAntonym: 'noun 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'a waterbird with a broad flat bill',
      synonyms: ['waterfowl', 'drake', 'mallard'],
      antonyms: [],
      exampleSentences: [
        { en: 'A duck was swimming peacefully across the pond.', ko: '오리 한 마리가 연못을 평화롭게 헤엄치고 있었다.' },
        { en: 'We fed the ducks some bread at the park.', ko: '우리는 공원에서 오리들에게 빵을 먹였다.' },
      ],
    }
  ),
  word('dull', '둔한', 6, 'adjective',
    ['간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한'],
    tips({
      etymology: 'dull의 접두/어근/접미를 확인하며 "둔한" 의미와 연결해 암기하자.',
      visual: '"둔한" 상황을 머릿속 한 장면으로 만들고 단어 dull를 함께 떠올리자.',
      soundAlike: 'dull의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "dull" conveys the meaning "둔한".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'lacking interest or excitement; not sharp',
      synonyms: ['boring', 'tedious', 'blunt'],
      antonyms: ['sharp', 'exciting', 'bright'],
      exampleSentences: [
        { en: 'The lecture was so dull that half the students fell asleep.', ko: '강의가 너무 지루해서 학생 절반이 잠들었다.' },
        { en: 'This knife is too dull to cut anything properly.', ko: '이 칼은 너무 둔해서 제대로 자를 수가 없다.' },
      ],
    }
  ),
  word('dump', '버리다', 7, 'verb',
    ['모으다', '보관하다', '수집하다', '간수하다', '챙기다', '유지하다', '보존하다', '회수하다', '주워 담다', '아끼다'],
    tips({
      etymology: 'dump의 접두/어근/접미를 확인하며 "버리다" 의미와 연결해 암기하자.',
      visual: '"버리다" 상황을 머릿속 한 장면으로 만들고 단어 dump를 함께 떠올리자.',
      soundAlike: 'dump의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "dump" conveys the meaning "버리다".',
      synonymAntonym: 'verb 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'to drop or get rid of something carelessly',
      synonyms: ['discard', 'dispose', 'ditch'],
      antonyms: ['keep', 'retain', 'collect'],
      exampleSentences: [
        { en: 'They illegally dumped waste in the river.', ko: '그들은 강에 불법으로 폐기물을 버렸다.' },
        { en: 'She dumped all the old files into the recycling bin.', ko: '그녀는 오래된 서류들을 모두 재활용 수거함에 버렸다.' },
      ],
    }
  ),
  word('during', '~동안에', 2, 'preposition',
    ['전에', '후에', '밖에', '위에', '아래에', '~앞에', '~뒤에', '~사이에', '~대신에', '~없이'],
    tips({
      etymology: 'during의 접두/어근/접미를 확인하며 "~동안에" 의미와 연결해 암기하자.',
      visual: '"~동안에" 상황을 머릿속 한 장면으로 만들고 단어 during를 함께 떠올리자.',
      soundAlike: 'during의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "during" conveys the meaning "~동안에".',
      synonymAntonym: 'preposition 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'throughout the course or duration of a period of time',
      synonyms: ['throughout', 'in the course of', 'amid'],
      antonyms: ['before', 'after', 'outside of'],
      exampleSentences: [
        { en: 'Please remain seated during the performance.', ko: '공연 동안에 자리에 앉아 계세요.' },
        { en: 'He fell asleep during the meeting.', ko: '그는 회의 도중에 잠이 들었다.' },
      ],
    }
  ),
  word('each', '각각의', 4, 'adjective',
    ['불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인'],
    tips({
      etymology: 'each의 접두/어근/접미를 확인하며 "각각의" 의미와 연결해 암기하자.',
      visual: '"각각의" 상황을 머릿속 한 장면으로 만들고 단어 each를 함께 떠올리자.',
      soundAlike: 'each의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "each" conveys the meaning "각각의".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'every one of two or more considered individually',
      synonyms: ['every', 'individual', 'respective'],
      antonyms: ['none', 'neither', 'no'],
      exampleSentences: [
        { en: 'Each student received a certificate at the graduation ceremony.', ko: '각각의 학생이 졸업식에서 수료증을 받았다.' },
        { en: 'She carefully checked each item on the list.', ko: '그녀는 목록의 각 항목을 꼼꼼히 확인했다.' },
      ],
    }
  ),
  word('ease', '편안함', 5, 'noun',
    ['불안', '긴장', '초조', '어려움', '고통', '스트레스', '불편', '곤란', '고난', '역경'],
    tips({
      etymology: 'ease의 접두/어근/접미를 확인하며 "편안함" 의미와 연결해 암기하자.',
      visual: '"편안함" 상황을 머릿속 한 장면으로 만들고 단어 ease를 함께 떠올리자.',
      soundAlike: 'ease의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "ease" conveys the meaning "편안함".',
      synonymAntonym: 'noun 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'absence of difficulty or effort; comfort',
      synonyms: ['comfort', 'relaxation', 'simplicity'],
      antonyms: ['difficulty', 'hardship', 'discomfort'],
      exampleSentences: [
        { en: 'She completed the task with remarkable ease.', ko: '그녀는 놀라울 정도로 편안하게 그 과제를 완료했다.' },
        { en: 'The medicine helped ease his pain significantly.', ko: '그 약은 그의 통증을 상당히 완화하는 데 도움이 되었다.' },
      ],
    }
  ),
  word('easy', '쉬운', 3, 'adjective',
    ['어려운', '힘든', '까다로운', '복잡한', '난해한', '지난한', '고단한', '막막한', '난관', '어렵다'],
    tips({
      etymology: 'easy의 접두/어근/접미를 확인하며 "쉬운" 의미와 연결해 암기하자.',
      visual: '"쉬운" 상황을 머릿속 한 장면으로 만들고 단어 easy를 함께 떠올리자.',
      soundAlike: 'easy의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "easy" conveys the meaning "쉬운".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'achieved without great effort; not difficult',
      synonyms: ['simple', 'effortless', 'straightforward'],
      antonyms: ['difficult', 'hard', 'challenging'],
      exampleSentences: [
        { en: 'The math test was easy, so most students got perfect scores.', ko: '수학 시험이 쉬워서 대부분의 학생들이 만점을 받았다.' },
        { en: 'Cooking pasta is easy once you learn the basic steps.', ko: '기본 단계를 배우면 파스타 요리는 쉽다.' },
      ],
    }
  ),
  word('economy', '경제', 6, 'noun',
    ['정치', '군사', '문화', '교육', '예술', '종교', '환경', '스포츠', '과학', '기술'],
    tips({
      etymology: 'economy의 접두/어근/접미를 확인하며 "경제" 의미와 연결해 암기하자.',
      visual: '"경제" 상황을 머릿속 한 장면으로 만들고 단어 economy를 함께 떠올리자.',
      soundAlike: 'economy의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "economy" conveys the meaning "경제".',
      synonymAntonym: 'noun 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'the system of trade and industry in a country',
      synonyms: ['financial system', 'commerce', 'market'],
      antonyms: ['waste', 'extravagance', 'squandering'],
      exampleSentences: [
        { en: 'The global economy has been recovering slowly since the pandemic.', ko: '세계 경제는 팬데믹 이후 서서히 회복되고 있다.' },
        { en: 'Tourism plays a vital role in the country\'s economy.', ko: '관광업은 그 나라 경제에서 핵심적인 역할을 한다.' },
      ],
    }
  ),
  word('effective', '효과적인', 7, 'adjective',
    ['모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인'],
    tips({
      etymology: 'effective의 접두/어근/접미를 확인하며 "효과적인" 의미와 연결해 암기하자.',
      visual: '"효과적인" 상황을 머릿속 한 장면으로 만들고 단어 effective를 함께 떠올리자.',
      soundAlike: 'effective의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "effective" conveys the meaning "효과적인".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'successful in producing a desired result',
      synonyms: ['efficient', 'productive', 'successful'],
      antonyms: ['ineffective', 'useless', 'futile'],
      exampleSentences: [
        { en: 'Regular exercise is an effective way to reduce stress.', ko: '규칙적인 운동은 스트레스를 줄이는 효과적인 방법이다.' },
        { en: 'The new policy proved effective in reducing crime rates.', ko: '새로운 정책은 범죄율을 낮추는 데 효과적인 것으로 입증되었다.' },
      ],
    }
  ),
  word('efficient', '효율적인', 4, 'adjective',
    ['불안정한', '산만한', '직접적인', '간접적인', '명확한', '모호한', '적절한', '느린', '긍정적인', '복잡한'],
    tips({
      etymology: 'efficient의 접두/어근/접미를 확인하며 "효율적인" 의미와 연결해 암기하자.',
      visual: '"효율적인" 상황을 머릿속 한 장면으로 만들고 단어 efficient를 함께 떠올리자.',
      soundAlike: 'efficient의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "efficient" conveys the meaning "효율적인".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'achieving maximum productivity with minimum waste',
      synonyms: ['productive', 'effective', 'capable'],
      antonyms: ['inefficient', 'wasteful', 'unproductive'],
      exampleSentences: [
        { en: 'She found a more efficient way to organize her files.', ko: '그녀는 파일을 정리하는 더 효율적인 방법을 찾았다.' },
        { en: 'The new machine is very efficient and saves a lot of energy.', ko: '새 기계는 매우 효율적이어서 에너지를 많이 절약한다.' },
      ],
    }
  ),
  word('either', '둘 중 하나의', 5, 'adjective',
    ['간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한'],
    tips({
      etymology: 'either의 접두/어근/접미를 확인하며 "둘 중 하나의" 의미와 연결해 암기하자.',
      visual: '"둘 중 하나의" 상황을 머릿속 한 장면으로 만들고 단어 either를 함께 떠올리자.',
      soundAlike: 'either의 발음을 비슷한 소리와 연결해 반복 발화로 익히자.',
      context: 'In context, "either" conveys the meaning "둘 중 하나의".',
      synonymAntonym: 'adjective 품사의 유의어/반의어를 1쌍씩 만들어 함께 외우자.',
    }),
    {
      definition: 'one or the other of two',
      synonyms: ['any', 'one or the other', 'whichever'],
      antonyms: ['both', 'neither', 'all'],
      exampleSentences: [
        { en: 'You can sit on either side of the table.', ko: '테이블 어느 쪽에든 앉아도 됩니다.' },
        { en: 'Either option works fine for me.', ko: '어느 쪽 선택이든 저는 괜찮습니다.' },
      ],
    }
  ),
  word('electric', '전기의', 6, 'adjective',
    ['간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한'],
    tips({
      etymology: '그리스어 \'elektron(호박)\'에서 유래했습니다. 고대인들이 호박을 문질러 정전기를 발견한 것에서 시작된 단어입니다.',
      visual: '번쩍이는 번개 모양이나 가전제품 뒤에 꽂힌 전원 플러그 이미지를 상상해 보세요.',
      soundAlike: '\'일렉트릭\'의 앞부분이 \'일(work)\'과 비슷하게 들리죠? 전기가 들어와야 기계가 \'일\'을 할 수 있다고 생각하세요.',
      context: '가전제품뿐만 아니라 공연장의 분위기가 매우 열정적이고 짜릿할 때도 비유적으로 사용합니다.',
      synonymAntonym: '유사한 의미로 \'charged\'가 있으며, 전기가 통하지 않는 상태는 \'non-electric\'으로 표현합니다.',
    }),
    {
      definition: 'powered by, producing, or relating to a form of energy resulting from the existence of charged particles',
      synonyms: ['powered', 'electrical', 'charged'],
      antonyms: ['manual', 'nonelectric', 'mechanical'],
      exampleSentences: [
        { en: 'The city is planning to replace all old buses with modern vehicles that run on a battery.', ko: '시는 모든 노후 버스를 배터리로 구동되는 현대식 차량으로 교체할 계획입니다.' },
        { en: 'The atmosphere in the stadium was incredibly tense and exciting just before the final goal.', ko: '결승 골이 터지기 직전 경기장의 분위기는 믿을 수 없을 정도로 긴장감 넘치고 짜릿했습니다.' },
      ],
    }
  ),
  word('electronic', '전자식의', 7, 'adjective',
    ['기계적인', '수동의', '아날로그의', '물리적인', '화학적인', '생물학적인', '전통적인', '원시적인', '자연의', '인위적인'],
    tips({
      etymology: '그리스어 \'elektron(호박)\'에서 유래한 전기를 뜻하는 electric에 학문이나 기술을 뜻하는 -onic이 결합되었습니다.',
      visual: '회로 기판 위에서 아주 작은 입자들이 빛의 속도로 움직이며 정보를 전달하는 모습을 상상해 보세요.',
      soundAlike: '일렉트로닉 댄스 음악(EDM)을 떠올리면 전기를 이용한 악기로 만든 소리라는 점을 쉽게 기억할 수 있습니다.',
      context: '컴퓨터, 스마트폰, 디지털 시계처럼 배터리나 전원을 사용하는 현대식 기기를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '디지털 방식인 digital과 유사하며, 바늘이 움직이는 방식인 analog와는 반대되는 개념입니다.',
    }),
    {
      definition: 'operating through the use of many small components that control a flow of electricity',
      synonyms: ['digital', 'automated', 'computerized'],
      antonyms: ['analog', 'manual', 'mechanical'],
      exampleSentences: [
        { en: 'Most modern banking transactions are now conducted through secure systems.', ko: '대부분의 현대 은행 거래는 이제 보안 시스템을 통해 이루어집니다.' },
        { en: 'The technician repaired the complex circuit board inside the musical instrument.', ko: '기술자는 악기 내부의 복잡한 회로 기판을 수리했습니다.' },
      ],
    }
  ),
  word('elegant', '우아한', 4, 'adjective',
    ['투박한', '거친', '촌스러운', '단순한', '복잡한', '무례한', '평범한', '지저분한', '저렴한', '불편한'],
    tips({
      etymology: '라틴어 \'eligere(선택하다)\'에서 유래하여, 신중하게 선택된 듯한 세련미를 뜻합니다.',
      visual: '이브닝 드레스를 입고 부드럽게 춤을 추는 무용수의 선을 상상해 보세요.',
      soundAlike: '\'엘리건트\' 발음이 \'일리가 있네\'와 비슷하죠? 일리 있는 세련된 스타일이라고 외워보세요.',
      context: '패션뿐만 아니라 수학 공식이나 해결책이 매우 깔끔하고 명쾌할 때도 자주 쓰입니다.',
      synonymAntonym: 'graceful과 유사하며, 반대로 세련되지 못한 clumsy와 대조하여 기억하세요.',
    }),
    {
      definition: 'pleasingly graceful and stylish in appearance, manner, or design',
      synonyms: ['graceful', 'sophisticated', 'refined'],
      antonyms: ['clumsy', 'unrefined', 'gaudy'],
      exampleSentences: [
        { en: 'She wore a simple but stunning black dress that looked incredibly sophisticated.', ko: '그녀는 믿을 수 없을 정도로 세련되어 보이는 단순하지만 멋진 검은색 드레스를 입었습니다.' },
        { en: 'The scientist proposed a remarkably concise and effective solution to the complex problem.', ko: '그 과학자는 복잡한 문제에 대해 놀라울 정도로 간결하고 효과적인 해결책을 제시했습니다.' },
      ],
    }
  ),
  word('elementary', '기초의', 1, 'adjective',
    ['복잡한', '심화된', '전문적인', '추상적인', '인위적인', '우연한', '영구적인', '일시적인', '독립적인', '의존적인'],
    tips({
      etymology: '라틴어 \'elementum(원소, 기본 원리)\'에서 유래하여 사물의 가장 밑바탕이 되는 성질을 뜻합니다.',
      visual: '알파벳 A, B, C나 숫자 1, 2, 3이 적힌 커다란 나무 블록 쌓기를 상상해 보세요.',
      soundAlike: '\'엘리멘터리\'라고 발음하며, \'엘리베이터\'를 타기 전 1층(기초)에 서 있는 모습을 연상하세요.',
      context: '초보자를 위한 강좌나 아주 단순해서 누구나 이해할 수 있는 문제를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '가장 밑바닥인 basic과 반대되는 고난도의 advanced를 짝지어 기억하면 좋습니다.',
    }),
    {
      definition: 'relating to the simplest and most necessary parts of a subject or activity',
      synonyms: ['basic', 'fundamental', 'rudimentary'],
      antonyms: ['advanced', 'complex', 'sophisticated'],
      exampleSentences: [
        { en: 'The textbook covers the most fundamental principles of physics for beginners.', ko: '그 교과서는 초보자를 위한 물리학의 가장 기초적인 원리들을 다룹니다.' },
        { en: 'Solving this math problem requires only a simple understanding of arithmetic.', ko: '이 수학 문제를 푸는 데는 산수에 대한 기초적인 이해만 있으면 됩니다.' },
      ],
    }
  ),
  word('elephant', '코끼리', 2, 'noun',
    ['사자', '호랑이', '기린', '말', '소', '원숭이', '곰', '코뿔소', '하마', '악어'],
    tips({
      etymology: '그리스어 \'elephas\'에서 유래되었으며, 이는 상아나 거대한 동물을 뜻하는 단어에서 왔습니다.',
      visual: '긴 코와 커다란 귀를 펄럭이며 초원을 걷는 거대한 회색 동물의 실루엣을 상상해 보세요.',
      soundAlike: '\'엘리펀트\' 발음 중 \'엘리\'를 \'얼리(early)\'와 연결해 \'일찍 일어나는 거대 동물\'로 연상해 보세요.',
      context: '동물원이나 아프리카 사파리 여행기에서 가장 압도적인 존재감을 뽐내는 주인공으로 자주 등장합니다.',
      synonymAntonym: '거대함을 뜻하는 pachyderm과 유사하며, 아주 작은 곤충인 ant와는 크기 면에서 대조됩니다.',
    }),
    {
      definition: 'A massive herbivorous land animal characterized by a long flexible snout, large ears, and ivory tusks.',
      synonyms: ['pachyderm', 'behemoth', 'tusker'],
      antonyms: ['midget', 'insect', 'dwarf'],
      exampleSentences: [
        { en: 'The herd of gray giants moved slowly across the savanna in search of water.', ko: '회색 거인 무리가 물을 찾아 사바나를 가로질러 천천히 이동했습니다.' },
        { en: 'A newborn calf can stand up and walk shortly after being born in the wild.', ko: '야생에서 갓 태어난 새끼는 태어난 지 얼마 지나지 않아 서서 걸을 수 있습니다.' },
      ],
    }
  ),
  word('else', '그 밖의', 5, 'adverb',
    ['같이', '동일하게', '이것만', '오직', '단지', '유일하게', '함께', '동시에', '역으로', '반대로'],
    tips({
      etymology: '고대 영어 \'elles\'에서 유래했으며, \'다른\' 또는 \'그 외의\'라는 의미를 담고 있습니다.',
      visual: '뷔페 접시에 담긴 음식 외에 다른 테이블에 놓인 \'그 밖의\' 음식들을 상상해 보세요.',
      soundAlike: '발음이 \'엘스\'이므로, \'엘(L)사이즈 말고 그 밖의(else) 사이즈는 없나요?\'라고 외워보세요.',
      context: '주로 something, anyone, where 등과 결합하여 선택의 범위를 넓힐 때 사용합니다.',
      synonymAntonym: '다른 것을 의미하는 other와 비슷하지만, 주로 대명사 뒤에서 수식한다는 점이 다릅니다.',
    }),
    {
      definition: 'in addition to the person or thing already mentioned; different from the current one',
      synonyms: ['additional', 'different', 'otherwise'],
      antonyms: ['same', 'identical', 'similar'],
      exampleSentences: [
        { en: 'If you cannot help me, I will have to ask someone.', ko: '당신이 나를 도와줄 수 없다면, 나는 그 밖의 다른 사람에게 부탁해야 할 것입니다.' },
        { en: 'Is there anything you would like to discuss before we finish the meeting?', ko: '회의를 마치기 전에 그 밖에 더 논의하고 싶은 사항이 있나요?' },
      ],
    }
  ),
  word('embassy', '대사관', 6, 'noun',
    ['영사관', '시청', '국회', '궁전', '대법원', '세관', '도서관', '박물관', '우체국', '검찰청'],
    tips({
      etymology: '고대 프랑스어 \'ambassee\'에서 유래했으며, 심부름이나 사절단을 의미하는 말에서 발전했습니다.',
      visual: '건물 앞에 커다랗게 걸려 있는 자국의 국기와 입구를 지키는 경비병의 모습을 상상해 보세요.',
      soundAlike: '\'엠버시\'라고 발음하며, \'엠버(Amber)가 시(City)에 있는 대사관에 갔다\'라고 연상해 보세요.',
      context: '비자를 발급받거나 해외에서 여권을 분실했을 때 가장 먼저 찾아가야 하는 국가 기관입니다.',
      synonymAntonym: '외교적 거점인 consulate와 유사하지만 규모가 더 크며, 민간 구역과는 대조되는 공공 외교 공간입니다.',
    }),
    {
      definition: 'The official building where an ambassador and their staff live and work in a foreign country.',
      synonyms: ['consulate', 'legation', 'chancery'],
      antonyms: ['homeland', 'domestic office', 'private residence'],
      exampleSentences: [
        { en: 'The protesters gathered outside the building to demand a meeting with the ambassador.', ko: '시위대들은 대사와 면담을 요구하기 위해 건물 밖에 모였습니다.' },
        { en: 'You should contact your national representative office immediately if you lose your passport abroad.', ko: '해외에서 여권을 분실하면 즉시 자국 대사관에 연락해야 합니다.' },
      ],
    }
  ),
  word('emergency', '비상사태', 7, 'noun',
    ['평화', '안정', '일상', '여유', '평온', '정상', '무사태', '평화로움', '안전', '고요'],
    tips({
      etymology: '라틴어 emergere에서 유래하여 \'갑자기 솟아오른(나타난) 상황\'이라는 의미에서 긴급 사태가 되었습니다.',
      visual: '빨간색 사이렌이 울리고 구급차가 빠르게 지나가는 긴박한 장면을 상상해 보세요.',
      soundAlike: '이머전시 -> \'이 뭐 전시(전쟁) 상황인가?\' 싶을 정도로 급박한 상태라고 기억하세요.',
      context: '병원 응급실(Emergency Room)이나 비상구(Emergency Exit) 표지판에서 자주 볼 수 있습니다.',
      synonymAntonym: 'crisis와 유의어 관계이며, 정반대 상황인 calm이나 peace와 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'a sudden, urgent, and usually unexpected occurrence that requires immediate attention',
      synonyms: ['crisis', 'exigency', 'urgency'],
      antonyms: ['calm', 'peace', 'solution'],
      exampleSentences: [
        { en: 'The hospital staff is trained to remain calm during a medical crisis.', ko: '병원 직원들은 의료 비상사태 동안 침착함을 유지하도록 훈련받았습니다.' },
        { en: 'Please break the glass and pull the alarm only in case of a real danger.', ko: '실제 비상 상황 발생 시에만 유리를 깨고 경보기를 당겨 주십시오.' },
      ],
    }
  ),
  word('emit', '방출하다', 9, 'verb',
    ['흡수하다', '억제하다', '보존하다', '수집하다', '차단하다', '축적하다', '소비하다', '반사하다', '거부하다', '은폐하다'],
    tips({
      etymology: '라틴어 \'ex(밖으로)\'와 \'mittere(보내다)\'가 결합되어 에너지를 밖으로 내보낸다는 의미를 가집니다.',
      visual: '굴뚝에서 연기가 뿜어져 나오거나 전구에서 빛이 퍼져나가는 모습을 상상하세요.',
      soundAlike: '발음이 \'이 밑\'과 비슷하니, \'이 밑\'에서 빛이 뿜어져 나온다고 연상해 보세요.',
      context: '주로 빛, 소리, 가스, 냄새와 같은 물리적 현상을 내뿜을 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'release는 자유롭게 풀어주는 느낌이고, absorb는 반대로 빨아들이는 느낌입니다.',
    }),
    {
      definition: 'to send out a beam of light, a sound, a smell, or a gas into the air',
      synonyms: ['release', 'radiate', 'discharge'],
      antonyms: ['absorb', 'contain', 'inhale'],
      exampleSentences: [
        { en: 'The factory chimneys continue to discharge smoke and pollutants into the atmosphere.', ko: '공장 굴뚝들이 대기 중으로 연기와 오염 물질을 계속해서 내뿜고 있습니다.' },
        { en: 'Certain species of insects produce a faint light to attract mates in the dark.', ko: '어떤 종류의 곤충들은 어둠 속에서 짝을 유혹하기 위해 희미한 빛을 발합니다.' },
      ],
    }
  ),
  word('emphasis', '강조', 4, 'noun',
    ['완화', '축소', '무시', '생략', '경시', '약화', '희석', '방관', '망각', '간과'],
    tips({
      etymology: '그리스어 \'em(안에)\'과 \'phainein(보여주다)\'이 합쳐져, 어떤 것의 안을 훤히 보여주듯 도드라지게 한다는 뜻에서 유래했습니다.',
      visual: '형광펜으로 중요한 문장에 굵게 밑줄을 긋거나 별표를 치는 장면을 상상해 보세요.',
      soundAlike: '\'엠퍼시스\'에서 \'엠(M)\'을 \'매우\'로 생각하여 \'매우 퍼지게(널리 알리게) 강조한다\'고 기억해 보세요.',
      context: '학교 교육에서 성적보다 인성을 더 중요하게 다룰 때 \'인성에 대한 강조\'라고 표현합니다.',
      synonymAntonym: '중요성을 뜻하는 stress와 유의어이며, 아무것도 아닌 것처럼 치부하는 insignificance와 반대됩니다.',
    }),
    {
      definition: 'special importance, value, or prominence given to something to make it stand out',
      synonyms: ['stress', 'priority', 'importance'],
      antonyms: ['insignificance', 'understatement', 'neglect'],
      exampleSentences: [
        { en: 'The new curriculum places a strong focus and weight on practical skills rather than theory.', ko: '새로운 교육 과정은 이론보다는 실무 기술에 강한 강조를 둡니다.' },
        { en: 'She raised her voice to provide extra clarity and force to the most important point of her speech.', ko: '그녀는 연설에서 가장 중요한 지점에 특별한 강조를 주기 위해 목소리를 높였습니다.' },
      ],
    }
  ),
  word('empire', '제국', 5, 'noun',
    ['공화국', '민주국', '자유국', '도시국가', '부족', '연방', '왕국', '공국', '소국', '식민지'],
    tips({
      etymology: '라틴어 imperium에서 유래되었으며, 이는 \'명령\'이나 \'권력\'을 의미하는 imperare에서 파생되었습니다.',
      visual: '로마의 콜로세움이나 거대한 영토를 다스리는 황제의 왕관을 상상해 보세요.',
      soundAlike: '엠파이어 스테이트 빌딩(Empire State Building)의 웅장한 높이를 떠올리면 거대한 규모를 기억하기 쉽습니다.',
      context: '역사 책에서 로마, 몽골, 대영제국과 같이 여러 민족을 통치하는 거대 국가를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'kingdom보다 훨씬 큰 규모를 뜻하며, 개별 국가들이 모인 federation과는 통치 방식에서 차이가 있습니다.',
    }),
    {
      definition: 'A large group of states or countries ruled over by a single supreme authority or monarch.',
      synonyms: ['domain', 'realm', 'monarchy'],
      antonyms: ['democracy', 'republic', 'city-state'],
      exampleSentences: [
        { en: 'The Roman government controlled a vast territory that stretched across three continents.', ko: '로마 정부는 세 대륙에 걸쳐 뻗어 있는 광대한 영토를 통치했습니다.' },
        { en: 'History shows that every great power eventually faces a period of decline and fall.', ko: '역사는 모든 위대한 강대국이 결국 쇠퇴와 멸망의 시기를 겪는다는 것을 보여줍니다.' },
      ],
    }
  ),
  word('enclose', '에워싸다', 6, 'verb',
    ['풀다', '해제하다', '열다', '노출하다', '드러내다', '벗기다', '제거하다', '뚫다', '터뜨리다', '해방하다'],
    tips({
      etymology: '접두사 en-(안에 넣다)과 close(닫다)가 결합하여 무언가를 안쪽으로 가두고 닫는다는 느낌을 줍니다.',
      visual: '편지를 봉투 안에 넣고 풀로 붙여서 완전히 밀봉하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인클로즈\'이므로 \'안(in)에 넣고 클로즈(close)하다\'라고 연상하면 쉽습니다.',
      context: '주로 정원에 울타리를 치거나, 편지 봉투에 서류를 동봉할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'surround와 유사하지만, enclose는 물리적인 경계를 만들어 가두는 뉘앙스가 더 강합니다.',
    }),
    {
      definition: 'to surround or close off on all sides or to include something inside a letter or package',
      synonyms: ['surround', 'encircle', 'confine'],
      antonyms: ['release', 'uncover', 'expose'],
      exampleSentences: [
        { en: 'The high stone wall was built to enclose the entire private estate.', ko: '높은 돌담은 개인 사유지 전체를 에워싸기 위해 세워졌습니다.' },
        { en: 'Please remember to enclose a copy of your identification with the application form.', ko: '신청서와 함께 신분증 사본을 동봉하는 것을 잊지 마세요.' },
      ],
    }
  ),
  word('endure', '견디다', 7, 'verb',
    ['포기하다', '굴복하다', '항복하다', '넘어지다', '쓰러지다', '그만두다', '단념하다', '물러나다', '회피하다', '피하다'],
    tips({
      etymology: '라틴어 \'indurare(단단하게 만들다)\'에서 유래하여, 시련 속에서도 마음을 단단히 먹고 버티는 모습을 나타냅니다.',
      visual: '거센 비바람이 부는 들판에서 뿌리를 깊게 내리고 꿋꿋이 서 있는 오래된 나무를 상상해 보세요.',
      soundAlike: '\'안(en) 두려(dure)워\'라고 발음하며, 어떤 고통이 와도 두려워하지 않고 끝까지 참아내는 이미지를 연상하세요.',
      context: '마라톤 선수가 한계에 다다른 순간이나, 극심한 추위를 참아야 하는 상황에서 주로 쓰입니다.',
      synonymAntonym: '계속 버티는 것은 tolerate, 반대로 압박에 못 이겨 포기하는 것은 surrender라고 합니다.',
    }),
    {
      definition: 'to remain in existence or to suffer through a challenging situation without giving up',
      synonyms: ['tolerate', 'withstand', 'undergo'],
      antonyms: ['surrender', 'succumb', 'yield'],
      exampleSentences: [
        { en: 'The mountain climbers had to face freezing temperatures and heavy snow to reach the summit.', ko: '등산가들은 정상에 도달하기 위해 영하의 기온과 폭설을 견뎌야만 했습니다.' },
        { en: 'True friendships can often last for decades and survive many difficult arguments.', ko: '진정한 우정은 종종 수십 년 동안 지속되며 많은 어려운 다툼을 견뎌낼 수 있습니다.' },
      ],
    }
  ),
  word('enemy', '적', 4, 'noun',
    ['동맹', '친구', '동료', '지지자', '가족', '편', '아군', '동지', '협력자', '동반자'],
    tips({
      etymology: '라틴어 \'inimicus\'에서 유래했으며, \'not\'을 뜻하는 \'in-\'과 \'friend\'를 뜻하는 \'amicus\'가 합쳐져 친구가 아닌 사람을 뜻합니다.',
      visual: '전쟁터에서 서로 마주 보고 칼을 겨누고 있는 두 군대의 긴장감 넘치는 모습을 상상해 보세요.',
      soundAlike: '\'애너미\'라고 발음되는데, \'애(아이)가 너미(너무) 미워\'라고 연상하면 적대적인 감정을 기억하기 쉽습니다.',
      context: '주로 군사적 갈등이나 개인적인 원한 관계에서 상대방을 지칭할 때 사용됩니다.',
      synonymAntonym: '가장 친한 친구인 friend와 정반대 지점에 있는 단어가 바로 이 단어입니다.',
    }),
    {
      definition: 'A person who feels hatred toward, intends to injure, or opposes the interests of another.',
      synonyms: ['adversary', 'foe', 'opponent'],
      antonyms: ['ally', 'friend', 'supporter'],
      exampleSentences: [
        { en: 'The two nations have been at war and regarded each other as a bitter rival for decades.', ko: '두 나라는 수십 년 동안 전쟁 중이었으며 서로를 지독한 숙적으로 여겨왔습니다.' },
        { en: 'He decided to forgive his old rival and turn a former hater into a new partner.', ko: '그는 옛 라이벌을 용서하고 과거의 적을 새로운 파트너로 만들기로 결심했습니다.' },
      ],
    }
  ),
  word('engine', '엔진', 3, 'noun',
    ['바퀴', '핸들', '배터리', '연료탱크', '라디에이터', '배기관', '변속기', '클러치', '브레이크', '범퍼'],
    tips({
      etymology: '라틴어 \'ingenium\'에서 유래했으며, 원래 \'타고난 재능\'이나 \'기발한 장치\'를 의미했습니다.',
      visual: '자동차 보닛을 열었을 때 복잡하게 얽힌 금속 부품들과 뜨거운 열기를 내뿜는 거대한 기계를 상상하세요.',
      soundAlike: '\'엔진\'이라는 한국어 발음과 거의 동일하므로 소리 내어 읽으며 기계의 진동음을 연상하세요.',
      context: '자동차뿐만 아니라 비행기, 배, 심지어 검색 엔진처럼 무언가를 움직이게 하는 핵심 동력을 말할 때 쓰입니다.',
      synonymAntonym: '동력을 만드는 motor와 비슷하지만, 정지 상태를 뜻하는 stillness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A complex machine designed to convert various forms of energy into mechanical force and motion.',
      synonyms: ['motor', 'mechanism', 'generator'],
      antonyms: ['exterior', 'inactivity', 'stillness'],
      exampleSentences: [
        { en: 'The mechanic spent the entire afternoon repairing the damaged part of the vehicle\'s power unit.', ko: '정비공은 오후 내내 차량 동력 장치의 손상된 부품을 수리하는 데 시간을 보냈습니다.' },
        { en: 'A powerful jet turbine allows the aircraft to reach incredible speeds within seconds.', ko: '강력한 제트 터빈 덕분에 항공기는 몇 초 만에 놀라운 속도에 도달할 수 있습니다.' },
      ],
    }
  ),
  word('engineer', '기술자', 1, 'noun',
    ['의사', '변호사', '교사', '예술가', '농부', '상인', '정치인', '군인', '기자', '요리사'],
    tips({
      etymology: '라틴어 ingenium(재능, 기지)에서 유래하여 기발한 장치를 만드는 사람을 뜻하게 되었습니다.',
      visual: '안전모를 쓰고 복잡한 설계도를 펼쳐보며 다리나 기계를 점검하는 전문가를 상상해 보세요.',
      soundAlike: '엔진(engine) 뒤에 사람을 뜻하는 -eer이 붙어 \'엔진을 다루는 사람\'으로 기억하면 쉽습니다.',
      context: 'IT 산업에서는 소프트웨어를 설계하는 사람을 소프트웨어 엔지니어라고 부르기도 합니다.',
      synonymAntonym: '설계자인 designer와 유사하며, 비전문가인 amateur와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A professional person trained to plan, design, and maintain complex systems, structures, or machines.',
      synonyms: ['technician', 'designer', 'architect'],
      antonyms: ['layman', 'amateur', 'operator'],
      exampleSentences: [
        { en: 'The civil engineer inspected the bridge to ensure it was safe for heavy traffic.', ko: '토목 기술자는 대형 차량 통행에 안전한지 확인하기 위해 다리를 점검했습니다.' },
        { en: 'She decided to become a software engineer because she enjoyed solving logical puzzles.', ko: '그녀는 논리적인 퍼즐 풀기를 즐겼기 때문에 소프트웨어 개발자가 되기로 결심했습니다.' },
      ],
    }
  ),
  word('enough', '충분한', 2, 'adjective',
    ['부족한', '과도한', '희귀한', '평범한', '거대한', '사소한', '적절한', '불필요한', '필수적인', '일시적인'],
    tips({
      etymology: '고대 영어 \'genog\'에서 유래했으며, \'손에 닿다\' 혹은 \'만족시키다\'라는 의미를 담고 있습니다.',
      visual: '컵에 물이 찰랑찰랑하게 가득 차서 더 이상 부을 필요가 없는 상태를 상상해 보세요.',
      soundAlike: '발음이 \'이-너프\'처럼 들리는데, \'이(e) 정도면 너(no)무 푹(ugh) 쉬었다\'라고 외워보세요.',
      context: '식사 자리에서 배가 부를 때나, 어떤 조건이 만족되었을 때 가장 자주 쓰이는 표현입니다.',
      synonymAntonym: '충분함을 뜻하는 sufficient와 반대로 모자람을 뜻하는 insufficient를 함께 기억하세요.',
    }),
    {
      definition: 'as much or as many as required or needed for a particular purpose',
      synonyms: ['sufficient', 'adequate', 'ample'],
      antonyms: ['insufficient', 'deficient', 'inadequate'],
      exampleSentences: [
        { en: 'We have food for the entire week, so there is no need to go shopping today.', ko: '우리는 일주일 내내 먹을 음식이 충분하므로 오늘 쇼핑하러 갈 필요가 없습니다.' },
        { en: 'The young athlete was strong to compete in the professional league.', ko: '그 젊은 운동선수는 프로 리그에서 경쟁할 수 있을 만큼 충분히 강했습니다.' },
      ],
    }
  ),
  word('enroll', '등록하다', 10, 'verb',
    ['탈퇴하다', '취소하다', '삭제하다', '제명하다', '빼다', '등록 말소하다', '해지하다', '포기하다', '철회하다', '취하하다'],
    tips({
      etymology: '접두사 en(안으로)과 roll(명부/두루마리)이 합쳐져 명단 안에 이름을 올린다는 의미에서 유래되었습니다.',
      visual: '대학교 입학처 앞에서 긴 줄을 서서 서류에 자신의 이름을 정성껏 적어 넣는 학생의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인롤\'과 유사하므로, 명단 안(in)으로 굴러(roll) 들어가는 장면을 연상하며 외우면 쉽습니다.',
      context: '주로 학교 수업, 군대, 또는 멤버십 프로그램에 공식적으로 가입하거나 이름을 올릴 때 자주 사용됩니다.',
      synonymAntonym: 'register와 sign up은 비슷한 의미를 가지며, 반대로 명단에서 빠지는 것은 withdraw라고 합니다.',
    }),
    {
      definition: 'to officially join a school, course, or organization by putting one\'s name on a list',
      synonyms: ['register', 'subscribe', 'enlist'],
      antonyms: ['withdraw', 'leave', 'quit'],
      exampleSentences: [
        { en: 'Students must provide their identification documents to join the advanced coding course.', ko: '학생들은 고급 코딩 과정에 등록하기 위해 신분 증명 서류를 제출해야 합니다.' },
        { en: 'The university expects more than five hundred new participants to sign up for the seminar this semester.', ko: '대학 측은 이번 학기 세미나에 500명 이상의 새로운 참가자들이 등록할 것으로 예상하고 있습니다.' },
      ],
    }
  ),
  word('entertain', '즐겁게 하다', 5, 'verb',
    ['처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'tenere(잡다)\'가 합쳐져 사람들의 마음을 붙잡아 두는 것을 의미합니다.',
      visual: '광대가 서커스 공연장에서 관객들을 웃기며 시선을 사로잡는 화려한 무대를 상상해 보세요.',
      soundAlike: '엔터테인먼트(Entertainment) 회사가 아이돌 공연으로 팬들을 기쁘게 하는 모습을 떠올리면 쉽습니다.',
      context: '손님을 집에 초대해 맛있는 음식을 대접하거나 재미있는 이야기를 들려줄 때 주로 사용합니다.',
      synonymAntonym: 'amuse는 웃음을 자아내며 즐겁게 하는 것이고, bore는 지루하게 만들어 하품이 나게 하는 반대 상황입니다.',
    }),
    {
      definition: 'to provide someone with amusement or enjoyment through a performance or hospitality',
      synonyms: ['amuse', 'delight', 'cheer'],
      antonyms: ['bore', 'annoy', 'depress'],
      exampleSentences: [
        { en: 'The magician performed several clever tricks to the children at the birthday party.', ko: '마술사는 생일 파티에서 아이들을 즐겁게 하기 위해 몇 가지 영리한 마술을 선보였습니다.' },
        { en: 'A good host knows exactly how to their guests with interesting stories and fine food.', ko: '훌륭한 주인은 흥미로운 이야기와 좋은 음식으로 손님들을 어떻게 대접하고 즐겁게 할지 정확히 압니다.' },
      ],
    }
  ),
  word('enthusiastic', '열정적인', 6, 'adjective',
    ['냉담한', '무관심한', '시큰둥한', '냉정한', '의욕 없는', '무기력한', '지루해하는', '냉랭한', '무덤덤한', '회의적인'],
    tips({
      etymology: '그리스어 \'entheos\'에서 유래했으며, 이는 \'신의 기운이 안에 가득 찬\' 상태를 의미하여 넘치는 에너지를 뜻합니다.',
      visual: '어떤 일에 너무 신이 나서 눈이 반짝거리고 펄쩍펄쩍 뛰는 응원단의 모습을 상상해 보세요.',
      soundAlike: '\'인두지애스틱\' 발음 중 \'지애\' 부분을 \'지혜\'나 \'에너지\'와 연결해 에너지가 넘치는 느낌으로 기억하세요.',
      context: '새로운 프로젝트나 취미를 시작할 때 누군가가 보여주는 매우 긍정적이고 적극적인 태도를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'Eager와 유사하지만 더 강한 감정을 담고 있으며, Apathetic과는 정반대의 에너지를 가집니다.',
    }),
    {
      definition: 'feeling or showing strong excitement and active interest in something',
      synonyms: ['passionate', 'eager', 'zealous'],
      antonyms: ['indifferent', 'apathetic', 'uninterested'],
      exampleSentences: [
        { en: 'The crowd gave an incredibly warm and energetic welcome to the returning champions.', ko: '군중들은 돌아온 챔피언들에게 믿을 수 없을 정도로 따뜻하고 열정적인 환영을 보냈습니다.' },
        { en: 'She has always been a very active supporter of local environmental protection initiatives.', ko: '그녀는 항상 지역 환경 보호 계획의 매우 열정적인 지지자였습니다.' },
      ],
    }
  ),
  word('entitle', '자격을 주다', 8, 'verb',
    ['박탈하다', '빼앗다', '무자격으로 하다', '거부하다', '취소하다', '해제하다', '말소하다', '제한하다', '금지하다', '배제하다'],
    tips({
      etymology: '접두사 en-(만들다)과 title(권리/제목)이 합쳐져 특정한 권리를 가진 상태로 만든다는 의미가 됩니다.',
      visual: 'VIP 카드나 출입증을 건네받으며 당당하게 문을 통과하는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인타이틀\'이므로 \'안에(in) 타이틀(title)을 넣어주어 자격을 부여한다\'고 기억하세요.',
      context: '주로 법적 권리, 복지 혜택, 또는 책의 제목을 붙이는 상황에서 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '권한을 주는 authorize와 반대로 자격을 뺏는 disqualify를 함께 묶어서 외우면 효과적입니다.',
    }),
    {
      definition: 'to provide someone with a legal right or a just claim to receive or do something',
      synonyms: ['authorize', 'empower', 'qualify'],
      antonyms: ['disqualify', 'forbid', 'deny'],
      exampleSentences: [
        { en: 'This membership card will allow you to access the premium lounge at the airport.', ko: '이 회원 카드는 당신에게 공항 프리미엄 라운지를 이용할 수 있는 자격을 부여할 것입니다.' },
        { en: 'Everyone should be allowed to receive a basic education regardless of their background.', ko: '모든 사람은 배경에 상관없이 기초 교육을 받을 권리가 있어야 합니다.' },
      ],
    }
  ),
  word('entry', '진입', 7, 'noun',
    ['퇴장', '출구', '퇴실', '이탈', '퇴거', '나감', '퇴차', '퇴수', '빠짐', '퇴출'],
    tips({
      etymology: '프랑스어 \'entree\'에서 유래되었으며, \'안으로(en-) 들어가는 행위\'라는 의미를 담고 있습니다.',
      visual: '건물 입구에 설치된 화려한 회전문이나 레드카펫 위를 걸어 들어가는 모습을 상상해 보세요.',
      soundAlike: '\'엔트리\'라고 발음하며, 스포츠 경기에서 출전 선수 명단에 이름을 올리는 상황을 떠올리면 쉽습니다.',
      context: '일기장의 한 페이지 기록이나 대회 참가 자격, 혹은 물리적인 입구 등 다양한 상황에서 쓰입니다.',
      synonymAntonym: '입장을 뜻하는 access와 반대되는 개념인 exit를 함께 기억하면 효율적입니다.',
    }),
    {
      definition: 'The act of coming into a building, room, or organization, or the right to do so.',
      synonyms: ['admission', 'entrance', 'access'],
      antonyms: ['exit', 'departure', 'withdrawal'],
      exampleSentences: [
        { en: 'The security guard checked every person\'s identification before granting them access to the building.', ko: '보안 요원은 건물 진입을 허가하기 전에 모든 사람의 신분증을 확인했습니다.' },
        { en: 'She won a prize for her creative writing piece in the national competition.', ko: '그녀는 전국 대회에 제출한 창의적 글쓰기 출품작으로 상을 받았습니다.' },
      ],
    }
  ),
  word('envelope', '봉투', 4, 'noun',
    ['편지지', '명함', '카드', '포장지', '상자', '가방', '파일', '클립', '스테이플러', '테이프'],
    tips({
      etymology: '프랑스어 \'envelopper(감싸다)\'에서 유래하여 무언가를 안으로 넣어 감싸는 도구를 뜻합니다.',
      visual: '편지지에 정성스럽게 글을 쓴 뒤 빨간색 인장으로 입구를 봉인하는 종이 주머니를 상상해 보세요.',
      soundAlike: '발음이 \'엔벨로프\'와 비슷하니, \'안에(en) 벨(벨소리 나는 편지)을 로프(로프처럼 꽉) 묶어 봉투에 넣다\'로 기억하세요.',
      context: '우편물을 보낼 때뿐만 아니라, \'push the envelope\'라는 표현에서는 한계를 뛰어넘는다는 비유적 의미로도 쓰입니다.',
      synonymAntonym: '무언가를 담는 wrapper나 casing과 비슷하지만, 내용물이 없는 상태인 emptiness와는 반대됩니다.',
    }),
    {
      definition: 'A flat paper container used for enclosing a letter or document before mailing it.',
      synonyms: ['wrapper', 'casing', 'covering'],
      antonyms: ['interior', 'content', 'core'],
      exampleSentences: [
        { en: 'Please make sure to seal the flap securely before dropping it in the mailbox.', ko: '우체통에 넣기 전에 덮개를 단단히 봉했는지 확인해 주세요.' },
        { en: 'She carefully wrote the recipient\'s address on the front of the white paper holder.', ko: '그녀는 하얀 종이 보관함 앞면에 수취인의 주소를 조심스럽게 적었습니다.' },
      ],
    }
  ),
  word('envy', '질투', 5, 'noun',
    ['만족', '축하', '기쁨', '인정', '칭찬', '존중', '배려', '나눔', '관대함', '축복'],
    tips({
      etymology: '라틴어 invidia에서 유래되었으며, \'안을 들여다보다\'라는 의미에서 남의 것을 쳐다보며 시기하는 마음으로 발전했습니다.',
      visual: '친구가 최신형 스마트폰을 샀을 때 옆에서 입술을 깨물며 부러워하는 표정을 상상해 보세요.',
      soundAlike: '\'앤비\'라고 발음되는데, \'안 비(안 비켜?)\'라고 하며 남의 자리를 탐내는 욕심쟁이를 떠올려 보세요.',
      context: '주로 타인의 성공, 재능, 소유물을 부러워할 때 사용하며 긍정적인 동경보다는 부정적인 시기심에 가깝습니다.',
      synonymAntonym: 'jealousy와 유사하지만, envy는 타인이 가진 것을 원하는 마음에 더 집중된 표현입니다.',
    }),
    {
      definition: 'a feeling of resentful longing aroused by someone else\'s possessions, qualities, or luck',
      synonyms: ['jealousy', 'resentment', 'covetousness'],
      antonyms: ['contentment', 'goodwill', 'satisfaction'],
      exampleSentences: [
        { en: 'She could not hide her deep resentment and longing for her sister\'s success.', ko: '그녀는 언니의 성공에 대한 깊은 질투심을 숨길 수 없었습니다.' },
        { en: 'His luxury lifestyle became an object of intense desire and bitterness among his former colleagues.', ko: '그의 호화로운 생활 방식은 전 동료들 사이에서 강한 부러움과 시기의 대상이 되었습니다.' },
      ],
    }
  ),
  word('episode', '에피소드', 6, 'noun',
    ['전체', '시즌', '영화', '단편', '예고편', '광고', '뉴스', '다큐', '스페셜', '피날레'],
    tips({
      etymology: '그리스어 \'epeisodion\'에서 유래했으며, 연극의 합창 사이에 끼어드는 \'삽입된 이야기\'라는 뜻에서 시작되었습니다.',
      visual: '드라마의 한 회차가 끝나고 다음 회차로 넘어가는 넷플릭스의 \'다음 회차 보기\' 버튼을 상상해 보세요.',
      soundAlike: '발음이 \'에피소드\'와 거의 같아 한국어 외래어처럼 생각하면 기억하기 매우 쉽습니다.',
      context: 'TV 시리즈의 한 회차를 말할 때도 쓰이지만, 인생에서 일어난 특이한 사건이나 일화를 말할 때도 자주 쓰입니다.',
      synonymAntonym: '사건을 뜻하는 occurrence와 비슷하지만, 전체 이야기 중 일부라는 점이 특징이며 반대로는 전체를 뜻하는 whole이 있습니다.',
    }),
    {
      definition: 'A single event or a specific period of time that is part of a longer series of events or a story.',
      synonyms: ['installment', 'chapter', 'occurrence'],
      antonyms: ['entirety', 'whole', 'totality'],
      exampleSentences: [
        { en: 'The final part of the television series was the most emotional one I have ever seen.', ko: '그 텔레비전 시리즈의 마지막 회는 내가 본 것 중 가장 감동적이었다.' },
        { en: 'She described a funny incident from her childhood that no one had heard before.', ko: '그녀는 아무도 들어본 적 없는 어린 시절의 재미있는 일화를 설명했다.' },
      ],
    }
  ),
  word('equate', '동등하게 하다', 9, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '라틴어 \'aequus(동등한)\'에서 유래하여 여러 대상을 같은 가치로 둔다는 의미를 가집니다.',
      visual: '양팔 저울의 양쪽에 서로 다른 물건을 올렸을 때 수평이 완벽하게 맞는 모습을 상상하세요.',
      soundAlike: '수학의 \'Equation(방정식)\'과 발음이 비슷하므로 등호(=)를 긋는 동작을 연상하면 쉽습니다.',
      context: '주로 돈과 행복, 혹은 성공과 노력을 동일시할 때 자주 사용되는 표현입니다.',
      synonymAntonym: 'identify는 동일시하다는 뜻으로 쓰이며, contrast는 대조하여 차이를 두는 반대 개념입니다.',
    }),
    {
      definition: 'to regard, treat, or represent as being identical or comparable in value or importance',
      synonyms: ['identify', 'associate', 'liken'],
      antonyms: ['differ', 'separate', 'contrast'],
      exampleSentences: [
        { en: 'Many people mistakenly think that high salary is the same as personal fulfillment.', ko: '많은 사람들이 높은 연봉을 개인적인 성취감과 동일시하는 실수를 범합니다.' },
        { en: 'The report does not suggest that the two different chemical reactions are the same.', ko: '그 보고서는 두 가지 서로 다른 화학 반응이 동등하다고 제안하지 않습니다.' },
      ],
    }
  ),
  word('era', '시대', 7, 'noun',
    ['순간', '일초', '한때', '과거', '미래', '영원', '무시간', '시점', '찰나', '한순간'],
    tips({
      etymology: '라틴어 aera에서 유래했으며, 원래는 계산의 기준이 되는 숫자를 의미하다가 중요한 시기라는 뜻으로 확장되었습니다.',
      visual: '공룡이 지배하던 쥬라기 시대나 화려한 빅토리아 시대를 배경으로 한 영화의 한 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'에라\'와 비슷하므로, \'에라, 새로운 시대를 열어보자!\'라고 외치는 상황을 상상하면 기억하기 쉽습니다.',
      context: '역사적인 구분뿐만 아니라 \'스마트폰 시대\'처럼 기술이나 문화의 큰 변화가 있는 기간을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'period나 age와 비슷하지만, era는 보통 훨씬 더 길고 뚜렷한 특징이 있는 기간을 의미합니다.',
    }),
    {
      definition: 'A long and distinct period of history with a particular feature or characteristic.',
      synonyms: ['epoch', 'age', 'period'],
      antonyms: ['instant', 'moment', 'second'],
      exampleSentences: [
        { en: 'The invention of the steam engine marked the beginning of a new industrial era.', ko: '증기 기관의 발명은 새로운 산업 시대의 시작을 알렸습니다.' },
        { en: 'Many people believe that we are currently living in the digital era.', ko: '많은 사람들은 우리가 현재 디지털 시대에 살고 있다고 믿습니다.' },
      ],
    }
  ),
  word('eraser', '지우개', 3, 'noun',
    ['펜', '연필', '형광펜', '색연필', '붓', '크레용', '마커', '잉크', '종이', '노트'],
    tips({
      etymology: '동사 erase(지우다)에 행위자를 뜻하는 접미사 -er이 붙어 \'지우는 물건\'이 되었습니다.',
      visual: '칠판의 분필 가루를 털어내거나 공책의 연필 자국을 문질러 없애는 장면을 상상하세요.',
      soundAlike: '발음이 \'이레이저\'와 비슷하므로, 흔적을 \'이리저리\' 문질러 지운다고 기억하면 쉽습니다.',
      context: '학교 수업 시간이나 그림을 그릴 때 실수를 바로잡기 위해 반드시 필요한 학용품입니다.',
      synonymAntonym: 'rubber는 영국에서 흔히 쓰이는 유의어이며, 반대로 자국을 남기는 pencil과는 반대 성격입니다.',
    }),
    {
      definition: 'a small piece of rubber or similar material used to rub out something written',
      synonyms: ['rubber', 'cleaner', 'expunger'],
      antonyms: ['pencil', 'marker', 'ink'],
      exampleSentences: [
        { en: 'She used a small rubber tool to fix the mistake in her drawing.', ko: '그녀는 그림의 실수를 고치기 위해 작은 지우개를 사용했습니다.' },
        { en: 'Please lend me your stationery item because I made a spelling error.', ko: '철자 실수를 했으니 네 지우개 좀 빌려줘.' },
      ],
    }
  ),
  word('erect', '똑바로 선', 10, 'adjective',
    ['굽은', '구부러진', '누운', '기울어진', '비스듬한', '휜', '꺾인', '쭈그린', '웅크린', '엎드린'],
    tips({
      etymology: '라틴어 \'erectus\'에서 유래했으며, \'e-(밖으로)\'와 \'regere(똑바로 이끌다)\'가 결합되어 위로 곧게 뻗은 상태를 나타냅니다.',
      visual: '군인이 사열대 앞에서 허리를 꼿꼿이 펴고 부동자세로 서 있는 모습을 상상해 보세요.',
      soundAlike: '\'이렉트\' 발음이 \'이래(이렇게) 똑(바로)\' 서 있다고 연상하면 기억하기 쉽습니다.',
      context: '주로 자세나 기둥, 건물이 지면과 수직을 이루며 서 있는 상태를 묘사할 때 사용됩니다.',
      synonymAntonym: 'upright와 비슷한 의미를 가지며, 구부정하거나 누워 있는 상태인 prone과는 반대되는 개념입니다.',
    }),
    {
      definition: 'rigidly upright or vertical in position or posture',
      synonyms: ['upright', 'vertical', 'straight'],
      antonyms: ['bent', 'stooped', 'prone'],
      exampleSentences: [
        { en: 'The soldiers maintained an upright and disciplined posture during the entire ceremony.', ko: '군인들은 시상식 내내 똑바로 선 훈련된 자세를 유지했습니다.' },
        { en: 'Dogs often hold their ears in a vertical position when they are alert to a sound.', ko: '개들은 소리에 경계할 때 종종 귀를 꼿꼿이 세웁니다.' },
      ],
    }
  ),
  word('error', '오류', 1, 'noun',
    ['정답', '정확', '올바름', '성공', '정확성', '타당', '정확함', '맞음', '완벽', '정정'],
    tips({
      etymology: '라틴어 errare(방황하다, 헤매다)에서 유래하여 올바른 길에서 벗어난 상태를 의미합니다.',
      visual: '컴퓨터 화면에 빨간색 X 표시와 함께 경고창이 뜨는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'에러\'와 비슷하며, 운동 경기에서 실책을 범했을 때 흔히 쓰는 외래어와 같습니다.',
      context: '기술적인 결함이나 계산 실수, 또는 도덕적인 잘못을 언급할 때 두루 사용됩니다.',
      synonymAntonym: 'mistake와 비슷하지만, error는 좀 더 공식적이거나 기술적인 맥락에서 자주 쓰입니다.',
    }),
    {
      definition: 'a mistake or an instance of being incorrect in action, calculation, or judgment',
      synonyms: ['mistake', 'fault', 'blunder'],
      antonyms: ['accuracy', 'correction', 'truth'],
      exampleSentences: [
        { en: 'The software crashed because of a critical programming flaw.', ko: '심각한 프로그래밍 오류 때문에 소프트웨어가 충돌했습니다.' },
        { en: 'Please check your calculations carefully to avoid any minor slip-ups.', ko: '작은 실수를 피하기 위해 계산을 주의 깊게 확인하십시오.' },
      ],
    }
  ),
  word('escort', '호위하다', 4, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '라틴어 \'ex-\'(밖으로)와 \'corrigere\'(인도하다)에서 유래하여 누군가를 안전하게 밖으로 안내하거나 동행한다는 의미를 가집니다.',
      visual: '중요한 VIP 옆에서 검은 정장을 입은 경호원들이 사방을 살피며 함께 걷는 모습을 상상해 보세요.',
      soundAlike: '\'에스코트\'라는 발음은 한국어에서도 예의 바르게 모시는 행위로 자주 쓰이므로 익숙하게 연결할 수 있습니다.',
      context: '주로 왕실 행사, 결혼식의 신부 입장, 혹은 보안이 필요한 상황에서 누군가를 안내할 때 사용됩니다.',
      synonymAntonym: '함께 가는 accompany와 보호하는 guard가 유의어이며, 혼자 두는 abandon이 반의어입니다.',
    }),
    {
      definition: 'to travel with someone in order to protect them or to show them the way to a destination',
      synonyms: ['accompany', 'conduct', 'usher'],
      antonyms: ['abandon', 'desert', 'leave'],
      exampleSentences: [
        { en: 'Security guards will accompany the witnesses to the courtroom to ensure their safety.', ko: '보안 요원들이 증인들의 안전을 보장하기 위해 법정까지 그들을 호위할 것입니다.' },
        { en: 'The naval ships were assigned to protect the merchant vessels through the dangerous waters.', ko: '해군 함정들은 위험한 해역을 통과하는 상선들을 호위하도록 배치되었습니다.' },
      ],
    }
  ),
  word('especially', '특히', 5, 'adverb',
    ['차근차근', '집중해서', '즉시', '뒤늦게', '점차', '반복적으로', '우선', '빠르게', '천천히', '자주'],
    tips({
      etymology: '라틴어 \'species(종류, 외관)\'에서 유래하여, 여러 종류 중에서도 \'특별히\' 하나를 골라낸다는 의미를 담고 있습니다.',
      visual: '수많은 회색 점들 사이에서 혼자만 밝게 빛나고 있는 빨간색 점 하나를 상상해 보세요.',
      soundAlike: '\'에스페셜리\'의 앞부분이 \'Special(특별한)\'과 발음이 매우 비슷하므로 \'특별히\'라는 뜻을 쉽게 연상할 수 있습니다.',
      context: '좋아하는 음식을 나열하다가 그중에서도 가장 좋아하는 것을 강조하고 싶을 때 사용하기 좋습니다.',
      synonymAntonym: '유사한 의미인 particularly와 함께 외우고, 일반적인 상황을 뜻하는 generally와 반대로 기억하세요.',
    }),
    {
      definition: 'to a great extent or very much more than usual; used to single out one person, thing, or situation over others.',
      synonyms: ['particularly', 'specifically', 'exceptionally'],
      antonyms: ['generally', 'commonly', 'ordinarily'],
      exampleSentences: [
        { en: 'The traffic was heavy this morning, more so than usual for a Monday.', ko: '오늘 아침은 교통 체증이 심했는데, 월요일 치고는 특히 더 심했습니다.' },
        { en: 'She loves all kinds of flowers, but she is fond of red roses.', ko: '그녀는 모든 종류의 꽃을 좋아하지만, 특히 빨간 장미를 좋아합니다.' },
      ],
    }
  ),
  word('estate', '부동산', 8, 'noun',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'status(상태, 지위)\'에서 유래하여, 한 사람이 소유한 사회적 지위나 그에 따른 넓은 토지를 의미하게 되었습니다.',
      visual: '끝없이 펼쳐진 푸른 잔디밭과 그 한가운데 우뚝 솟은 거대한 저택을 상상해 보세요.',
      soundAlike: '\'에스테이트\'는 \'에스(S)급 테(터)전\'이라고 연상하여 아주 좋은 땅과 건물이라고 기억하세요.',
      context: '부동산 중개업소 간판에서 \'Real Estate\'라는 문구를 아주 흔하게 발견할 수 있습니다.',
      synonymAntonym: '재산을 뜻하는 property와 유사하며, 아무것도 소유하지 않은 상태인 debt와는 대조적입니다.',
    }),
    {
      definition: 'an extensive area of land in the country, often with a large house, or all the money and property owned by a person',
      synonyms: ['property', 'land', 'assets'],
      antonyms: ['debt', 'liability', 'poverty'],
      exampleSentences: [
        { en: 'The wealthy businessman left his entire property to a local charity after he passed away.', ko: '그 부유한 사업가는 세상을 떠난 후 자신의 모든 부동산을 지역 자선 단체에 남겼습니다.' },
        { en: 'They decided to build a new housing development on the vacant land near the river.', ko: '그들은 강 근처의 빈 대지에 새로운 주택 단지를 건설하기로 결정했습니다.' },
      ],
    }
  ),
  word('etc', '등등', 6, 'adverb',
    ['오직', '단지', '유일하게', '딱 하나', '그것만', '이것만', '한정', '배제', '제외', '없음'],
    tips({
      etymology: '라틴어 \'et cetera\'의 약자로, \'et\'은 \'그리고\', \'cetera\'는 \'나머지 것들\'을 의미합니다.',
      visual: '쇼핑 목록 끝에 줄임표(...)가 찍혀 있고 그 옆에 etc가 적힌 영수증을 상상해 보세요.',
      soundAlike: '\'엣 세트라\'라고 발음하며, 여러 세트(set)가 더 있다는 느낌으로 기억하면 쉽습니다.',
      context: '비슷한 종류의 사물을 나열하다가 일일이 다 말하기 힘들 때 문장 끝에 주로 붙입니다.',
      synonymAntonym: 'and so on과 같은 뜻이며, 구체적인 목록을 끝맺는 including과는 반대되는 성격이 있습니다.',
    }),
    {
      definition: 'Used at the end of a list to indicate that further similar items are included but not mentioned.',
      synonyms: ['and so on', 'and so forth', 'and the like'],
      antonyms: ['specifically', 'exclusively', 'namely'],
      exampleSentences: [
        { en: 'The store sells various office supplies such as pens, notebooks, paper, etc.', ko: '그 가게는 펜, 공책, 종이 등 다양한 사무용품을 판매합니다.' },
        { en: 'Please bring your sports gear, including sneakers, towels, water bottles, etc.', ko: '운동화, 수건, 물병 등 운동 장비를 챙겨오세요.' },
      ],
    }
  ),
  word('ethical', '윤리적인', 9, 'adjective',
    ['직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인'],
    tips({
      etymology: '그리스어 \'ethos(성격, 관습)\'에서 유래하여 사회적 규범과 도덕적 가치를 판단하는 기준을 의미합니다.',
      visual: '양심의 가책 없이 당당하게 고개를 들고 있는 정직한 사람의 모습을 상상해 보세요.',
      soundAlike: '\'에티켓(etiquette)\'과 발음이 비슷하므로 예의를 지키는 도덕적인 행동을 연상하면 쉽습니다.',
      context: '기업의 사회적 책임이나 의료 현장에서의 생명 윤리를 논할 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '도덕적인 moral과 반대되는 부도덕한 immoral을 짝지어 기억하면 효율적입니다.',
    }),
    {
      definition: 'relating to beliefs about what is morally right and wrong in human conduct',
      synonyms: ['moral', 'principled', 'virtuous'],
      antonyms: ['unethical', 'immoral', 'dishonest'],
      exampleSentences: [
        { en: 'The company faces a difficult decision regarding the most ethical way to handle the data breach.', ko: '그 회사는 데이터 유출을 처리하는 가장 윤리적인 방법에 관해 어려운 결정에 직면해 있습니다.' },
        { en: 'Many consumers prefer to buy products from brands that maintain high ethical standards in their factories.', ko: '많은 소비자들은 공장에서 높은 윤리적 기준을 유지하는 브랜드의 제품을 구매하는 것을 선호합니다.' },
      ],
    }
  ),
  word('evacuate', '대피시키다', 10, 'verb',
    ['거주하다', '건설하다', '머무르다', '진입하다', '봉쇄하다', '점령하다', '수리하다', '확장하다', '방치하다', '설립하다'],
    tips({
      etymology: '라틴어 \'ex-\'(밖으로)와 \'vacuus\'(비어 있는)가 합쳐져 장소를 비우고 밖으로 나간다는 뜻이 되었습니다.',
      visual: '화재 경보가 울리자 사람들이 질서 정연하게 비상구 계단을 통해 건물 밖 운동장으로 나가는 장면을 상상하세요.',
      soundAlike: '\'이바큐에이트\' 발음이 \'이 밖으로 에잇!\' 하고 급하게 나가는 소리와 비슷하다고 생각하면 쉽습니다.',
      context: '재난 영화에서 구조대원이 확성기를 들고 주민들에게 즉시 집을 떠나라고 외칠 때 자주 등장합니다.',
      synonymAntonym: '안전한 곳으로 옮기는 abandon과 반대로 위험한 곳으로 들어가는 enter를 대조해 보세요.',
    }),
    {
      definition: 'to move people away from a dangerous place to a safer location',
      synonyms: ['vacate', 'abandon', 'withdraw'],
      antonyms: ['occupy', 'remain', 'enter'],
      exampleSentences: [
        { en: 'The local authorities ordered residents to leave their homes before the hurricane reached the coast.', ko: '지방 당국은 허리케인이 해안에 도달하기 전에 주민들에게 집에서 대피하라고 명령했습니다.' },
        { en: 'Firefighters helped everyone exit the burning building through the emergency stairs.', ko: '소방관들은 모든 사람이 비상 계단을 통해 불타는 건물에서 대피하도록 도왔습니다.' },
      ],
    }
  ),
  word('eve', '전날 밤', 7, 'noun',
    ['당일', '다음날', '한달 전', '일주일 후', '새벽', '한낮', '정오', '해질녘', '밤중', '다음날 아침'],
    tips({
      etymology: '저녁을 뜻하는 evening의 고어 형태에서 유래하여 중요한 사건 바로 전날의 밤을 의미하게 되었습니다.',
      visual: '크리스마스 트리 아래에서 선물을 기다리며 설레는 12월 24일 밤의 풍경을 상상해 보세요.',
      soundAlike: '첫 번째 여성인 \'이브(Eve)\'가 인류 역사의 \'전날 밤\'에 있었다고 연상하면 기억하기 쉽습니다.',
      context: '주로 크리스마스나 새해처럼 큰 축제나 역사적인 사건이 일어나기 직전의 시간을 묘사할 때 쓰입니다.',
      synonymAntonym: 'vigil이나 threshold와 비슷한 맥락에서 쓰이며, 반대로 사건이 끝난 후인 aftermath와 대조됩니다.',
    }),
    {
      definition: 'the period of time or the evening immediately preceding a particular event or holiday',
      synonyms: ['vigil', 'threshold', 'brink'],
      antonyms: ['aftermath', 'sequel', 'conclusion'],
      exampleSentences: [
        { en: 'Families often gather to share a special meal on the night of Christmas eve.', ko: '가족들은 종종 크리스마스 전날 밤에 특별한 식사를 나누기 위해 모인다.' },
        { en: 'The city was filled with a sense of nervous anticipation on the eve of the election.', ko: '선거 전날 밤 도시는 긴장된 기대감으로 가득 찼다.' },
      ],
    }
  ),
  word('evening', '저녁', 2, 'noun',
    ['아침', '오전', '점심', '오후', '한낮', '새벽', '밤', '한밤중', '정오', '이른 아침'],
    tips({
      etymology: '고대 영어 \'æfen\'에서 유래했으며, 낮이 끝나고 밤이 시작되는 \'평평해지는 시간\'이라는 의미를 담고 있습니다.',
      visual: '서서히 해가 지고 가로등이 하나둘 켜지며 퇴근하는 사람들의 모습을 상상해 보세요.',
      soundAlike: '\'이브닝\' 발음이 \'입이 닝닝\'할 때 먹는 맛있는 저녁 식사 시간이라고 연상해 보세요.',
      context: '주로 해가 지는 시점부터 잠자리에 들기 전까지의 사교적인 시간대를 의미할 때 자주 쓰입니다.',
      synonymAntonym: '낮을 뜻하는 morning과 반대되며, 해 질 녘을 뜻하는 dusk와 비슷한 맥락에서 사용됩니다.',
    }),
    {
      definition: 'the period of time at the end of the day between the afternoon and the time you go to bed',
      synonyms: ['dusk', 'twilight', 'sundown'],
      antonyms: ['morning', 'dawn', 'sunrise'],
      exampleSentences: [
        { en: 'We enjoyed a peaceful walk in the park during the cool summer evening.', ko: '우리는 선선한 여름 저녁 동안 공원에서 평화로운 산책을 즐겼습니다.' },
        { en: 'Most families gather together to share a meal and talk about their day every evening.', ko: '대부분의 가족은 매일 저녁 식사를 함께하며 하루 일과에 대해 이야기하기 위해 모입니다.' },
      ],
    }
  ),
];
