import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch49: VocabItem[] = [
  word('outstanding', '눈에 띄는', 7, 'adjective',
    ['평범한', '부족한', '숨겨진', '열등한', '일반적인', '사소한', '내부의', '지루한', '희미한', '고정된'],
    tips({
      etymology: '밖으로(out) 서 있는(standing) 상태를 의미하여 남들보다 툭 튀어나와 보인다는 어원을 가집니다.',
      visual: '평평한 평지에 혼자만 높게 솟아오른 빌딩이 멀리서도 한눈에 들어오는 장면을 상상하세요.',
      soundAlike: '아웃스탠딩은 \'밖에서 서 있는\' 소리와 비슷하며, 줄 서 있는 사람들 중 혼자 튀어나온 모습을 연상하세요.',
      context: '주로 성적이 매우 우수하거나 해결되지 않은 미결제 잔액을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '뛰어난 성과를 뜻하는 exceptional과 반대되는 평범함을 뜻하는 ordinary를 함께 기억하세요.',
    }),
    {
      definition: 'exceptionally good or clearly noticeable compared to others of the same type',
      synonyms: ['exceptional', 'remarkable', 'prominent'],
      antonyms: ['ordinary', 'mediocre', 'insignificant'],
      exampleSentences: [
        { en: 'The young pianist gave an exceptional performance that received a standing ovation.', ko: '그 젊은 피아니스트는 기립박수를 받을 만큼 눈에 띄게 훌륭한 연주를 선보였습니다.' },
        { en: 'There are still several unpaid invoices that remain unresolved from the previous month.', ko: '지난달부터 아직 해결되지 않은 미결제 송장들이 몇 개 남아 있습니다.' },
      ],
      wordDistractors: ['outstaying', 'outstripping', 'outlandish'],
      definitionDistractors: [
        'to remain in a place longer than expected or welcome',
        'to move forward quickly by stepping in long strides',
        'to arrange items neatly in a row or sequence',
      ],
    }
  ),
  word('over', '~위에', 3, 'preposition',
    ['아래', '옆', '뒤', '안쪽', '바닥', '중심', '구석', '사이', '근처', '너머'],
    tips({
      etymology: '고대 영어 \'ofer\'에서 유래하여 무엇인가의 위를 덮거나 가로지르는 움직임을 나타냅니다.',
      visual: '무지개가 산 위로 둥글게 솟아 있는 모습을 상상해 보세요.',
      soundAlike: '\'오버\'한다라는 말처럼 기준선을 넘어서 위로 올라가는 느낌을 연상하세요.',
      context: '크리켓 경기에서 투수가 공을 6번 던지는 한 단위를 명사로 사용하기도 합니다.',
      synonymAntonym: '상단을 뜻하는 upper와 하단을 뜻하는 lower를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'used to indicate a position above or higher than something, or movement across something',
      synonyms: ['above', 'across', 'upon'],
      antonyms: ['under', 'below', 'beneath'],
      exampleSentences: [
        { en: 'The clouds drifted slowly across the blue sky above the mountain.', ko: '구름이 산 위 푸른 하늘을 가로질러 천천히 흘러갔다.' },
        { en: 'A bridge was built to provide a safe passage across the river.', ko: '강 위로 안전하게 건너갈 수 있도록 다리가 건설되었다.' },
      ],
      wordDistractors: ['oven', 'hover', 'rover'],
      definitionDistractors: [
        'to place something carefully inside a container',
        'to repeat an action several times in succession',
        'to attach two objects firmly together',
      ],
    }
  ),
  word('overall', '전반적인', 4, 'adjective',
    ['부분적인', '구체적인', '세부적인', '개별적인', '국소적인', '단편적인', '미시적인', '편향된', '제한적인', '지엽적인'],
    tips({
      etymology: 'over(넘어서)와 all(모든 것)이 합쳐져 모든 것을 아우르는 포괄적인 상태를 나타냅니다.',
      visual: '모든 물건을 커다란 보자기에 하나로 싸서 묶는 장면을 상상해 보세요.',
      soundAlike: '오버롤(작업복)이 몸 전체를 다 덮어주는 것처럼 모든 요소를 다 덮는 느낌입니다.',
      context: '개별적인 세부 사항보다는 전체적인 결론이나 요약을 말할 때 주로 쓰입니다.',
      synonymAntonym: '전체를 뜻하는 whole과 비슷하지만, 부분적인 것들을 합친 총합의 느낌이 강합니다.',
    }),
    {
      definition: 'including everything or considering all parts of something together',
      synonyms: ['total', 'general', 'comprehensive'],
      antonyms: ['partial', 'specific', 'fragmentary'],
      exampleSentences: [
        { en: 'The manager looked at the project\'s progress to assess the overall performance of the operation.', ko: '매니저는 운영의 전반적인 성과를 평가하기 위해 프로젝트의 진행 상황을 살펴보았습니다.' },
        { en: 'Despite some minor errors, the overall performance was quite impressive.', ko: '몇몇 사소한 실수에도 불구하고, 전반적인 성과는 꽤 인상적이었습니다.' },
      ],
      wordDistractors: ['overhaul', 'overflow', 'overalls'],
      definitionDistractors: [
        'to inspect and repair something thoroughly',
        'to exceed the limits of a particular boundary',
        'to arrange elements in a specific sequential order',
      ],
    }
  ),
  word('overcome', '극복하다', 5, 'verb',
    ['포기하다', '굴복하다', '회피하다', '무시하다', '실패하다', '망설이다', '지연하다', '거절하다', '악화되다', '순응하다'],
    tips({
      etymology: 'Over(넘어서)와 come(오다)이 합쳐져 장애물을 넘어 목적지에 도달한다는 의미에서 유래했습니다.',
      visual: '높은 담벼락을 사다리를 타고 마침내 반대편으로 넘어가는 승리자의 모습을 상상하세요.',
      soundAlike: '오버(Over)해서 컴(Come)온! 힘든 상황을 뛰어넘어 이쪽으로 오라고 외치는 소리를 연상하세요.',
      context: '주로 트라우마, 장애물, 공포심처럼 나를 가로막는 부정적인 요소를 이겨낼 때 사용합니다.',
      synonymAntonym: 'Conquer는 정복하듯 이기는 것이고, Surrender는 반대로 항복하며 무너지는 것입니다.',
    }),
    {
      definition: 'to succeed in dealing with a problem or difficulty that has been preventing you from achieving something',
      synonyms: ['conquer', 'surmount', 'defeat'],
      antonyms: ['surrender', 'succumb', 'yield'],
      exampleSentences: [
        { en: 'She managed to defeat her fear of heights by slowly climbing the mountain.', ko: '그녀는 천천히 산을 오름으로써 고소공포증을 간신히 극복해냈습니다.' },
        { en: 'The small startup had to prevail against many financial difficulties in its first year.', ko: '그 작은 스타트업은 첫해에 많은 재정적 어려움을 이겨내야만 했습니다.' },
      ],
      wordDistractors: ['overtake', 'outcome', 'overrun'],
      definitionDistractors: [
        'to arrive at a destination after a long journey',
        'to distribute resources equally among participants',
        'to repeat a previous attempt without changes',
      ],
    }
  ),
  word('overhead', '위의', 6, 'adjective',
    ['지하의', '수평의', '내부의', '외부의', '직접적인', '간접적인', '일시적인', '영구적인', '사소한', '중대한'],
    tips({
      etymology: '머리(head) 위(over)에 있다는 뜻이 합쳐져 공중에 떠 있거나 상단에 위치함을 나타냅니다.',
      visual: '비행기 좌석 위에 있는 짐칸이나 천장에 달린 밝은 전등을 상상해 보세요.',
      soundAlike: '오버헤드 킥을 할 때 공이 머리 위로 높게 떠오르는 장면을 연상하면 쉽습니다.',
      context: '일상에서는 주로 조명, 수하물 보관함, 또는 기업의 경상비용을 말할 때 자주 쓰입니다.',
      synonymAntonym: '공중에 떠 있는 aerial과 반대로 발밑에 있는 underground를 함께 기억하세요.',
    }),
    {
      definition: 'located, occurring, or used above the level of the head or in the sky',
      synonyms: ['aerial', 'elevated', 'upward'],
      antonyms: ['underground', 'below', 'sunken'],
      exampleSentences: [
        { en: 'The bright lights hanging in the office caused a slight glare on the computer screens.', ko: '사무실 천장에 매달린 밝은 조명이 컴퓨터 화면에 약간의 눈부심을 유발했다.' },
        { en: 'Please place your smaller bags in the compartment before the plane takes off.', ko: '비행기가 이륙하기 전에 작은 가방들을 머리 위 선반에 넣어 주십시오.' },
      ],
      wordDistractors: ['overheard', 'overhand', 'overheat'],
      definitionDistractors: [
        'heard accidentally without the speaker knowing',
        'built below ground level or beneath the surface',
        'operating at a reduced speed or lower capacity',
      ],
    }
  ),
  word('overlap', '겹침', 7, 'noun',
    ['분리', '간격', '차이', '독립', '공백', '단절', '경계', '이탈', '소멸', '확장'],
    tips({
      etymology: 'over(~위에)와 lap(무릎, 덮개)이 합쳐져 한 물건이 다른 것 위를 덮으며 포개지는 모습을 나타냅니다.',
      visual: '두 장의 투명한 필름을 겹쳐 놓았을 때 중간에 진하게 보이는 공통된 부분을 상상해 보세요.',
      soundAlike: '오버랩(overlap)은 영화 기법 중 하나로, 한 장면이 사라지기 전에 다음 장면이 겹쳐서 나타나는 것을 떠올리면 쉽습니다.',
      context: '업무 분담이 명확하지 않아 두 부서의 역할 사이에 중복되는 부분이 생길 때 자주 쓰입니다.',
      synonymAntonym: '유의어인 coincidence는 우연한 일치를, 반의어인 gap은 겹치는 곳 없는 틈새를 의미합니다.',
    }),
    {
      definition: 'a part or area where two or more things occupy the same space or cover the same period of time',
      synonyms: ['intersection', 'coincidence', 'congruence'],
      antonyms: ['gap', 'separation', 'discontinuity'],
      exampleSentences: [
        { en: 'There is a significant overlap between the two research projects regarding their methodology.', ko: '두 연구 프로젝트는 방법론 측면에서 상당한 중복 부분이 존재합니다.' },
        { en: 'The schedule shows a slight overlap of ten minutes between the first and second sessions.', ko: '일정표를 보면 첫 번째 세션과 두 번째 세션 사이에 10분 정도의 겹치는 시간이 있습니다.' },
      ],
      wordDistractors: ['overleap', 'overload', 'overlay'],
      definitionDistractors: [
        'a sudden break or rupture in a continuous surface',
        'the process of removing excess material from an object',
        'a measured distance between two fixed points',
      ],
    }
  ),
  word('overlook', '전망대', 4, 'noun',
    ['관찰', '지하도', '내부', '바닥', '심연', '그림자', '벽면', '천장', '입구', '통로'],
    tips({
      etymology: '위(over)에서 아래를 보다(look)라는 구조가 합쳐져 높은 곳에서 경치를 감상하는 장소를 뜻하게 되었습니다.',
      visual: '산 정상이나 절벽 끝에 설치된 난간에서 탁 트인 도시 전경을 감상하는 모습을 상상해 보세요.',
      soundAlike: '오버(over)해서 룩(look)하니 멀리까지 다 보이는 \'전망대\'라고 기억하세요.',
      context: '주로 관광지나 등산로에서 경치가 가장 잘 보이는 지점을 가리킬 때 명사로 사용됩니다.',
      synonymAntonym: 'viewpoint와 유사하며, 시야가 막힌 곳을 뜻하는 blind spot과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A high place or structure that affords a wide and unobstructed view of an area below.',
      synonyms: ['viewpoint', 'vantage point', 'lookout'],
      antonyms: ['valley', 'bottom', 'blind spot'],
      exampleSentences: [
        { en: 'We hiked for three hours to reach the scenic overlook at the top of the mountain.', ko: '우리는 산 정상에 있는 경치 좋은 전망대에 도착하기 위해 세 시간 동안 하이킹을 했습니다.' },
        { en: 'The hotel balcony provides a stunning overlook of the entire bay.', ko: '호텔 발코니에서는 만 전체를 내려다보는 멋진 전망을 즐길 수 있습니다.' },
      ],
      wordDistractors: ['outlook', 'overlock', 'overlap'],
      definitionDistractors: [
        'a failure to notice something important or relevant',
        'a deep underground passage used for transportation',
        'a formal written complaint about a public issue',
      ],
    }
  ),
  word('overnight', '밤사이의', 5, 'adjective',
    ['낮시간의', '일시적인', '영구적인', '계절적인', '주기적인', '순간적인', '정기적인', '미래의', '과거의', '즉각적인'],
    tips({
      etymology: 'over(~를 넘어)와 night(밤)이 결합하여 밤을 지새우거나 밤 사이에 일어난 일을 뜻합니다.',
      visual: '어두운 밤하늘 아래 텐트를 치고 잠을 자고 일어났더니 아침이 된 풍경을 상상해 보세요.',
      soundAlike: '오버나이트 패드나 밤샘 주차를 뜻하는 용어로 일상에서 자주 접할 수 있는 발음입니다.',
      context: '여행 중 숙박을 하거나 갑작스럽게 스타가 된 상황을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '한밤중의(nocturnal)와 유사하며, 낮 동안의(diurnal)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Happening, existing, or kept during the time between evening and morning.',
      synonyms: ['nighttime', 'nocturnal', 'late-night'],
      antonyms: ['daytime', 'diurnal', 'daily'],
      exampleSentences: [
        { en: 'The travelers booked an overnight stay at a small cottage in the mountains.', ko: '여행객들은 산속의 작은 오두막에서 하룻밤 묵기로 예약했다.' },
        { en: 'Heavy snowfall caused several road closures during the overnight hours.', ko: '밤사이에 내린 폭설로 인해 몇몇 도로가 폐쇄되었다.' },
      ],
      wordDistractors: ['overnice', 'overwrite', 'oversight'],
      definitionDistractors: [
        'lasting for a full calendar week or longer',
        'happening during the afternoon hours only',
        'scheduled to occur at regular monthly intervals',
      ],
    }
  ),
  word('overseas', '해외의', 6, 'adjective',
    ['국내의', '내륙의', '인접한', '가까운', '지방의', '도시의', '전통적인', '현대적인', '일시적인', '영구적인'],
    tips({
      etymology: '바다(sea)를 건너(over) 간다는 의미에서 유래하여 외국이나 해외를 뜻하게 되었습니다.',
      visual: '비행기가 푸른 바다 위를 가로질러 먼 나라로 날아가는 모습을 상상해 보세요.',
      soundAlike: '오버(over)해서 씨(sea)를 건너가는 해외 여행객의 모습을 연상해 보세요.',
      context: '주로 무역, 여행, 또는 해외 지사를 언급할 때 형용사로 자주 쓰입니다.',
      synonymAntonym: '국내를 뜻하는 domestic과 반대되는 개념으로 외우면 기억하기 쉽습니다.',
    }),
    {
      definition: 'Relating to, occurring in, or situated in countries across the ocean.',
      synonyms: ['foreign', 'international', 'external'],
      antonyms: ['domestic', 'internal', 'native'],
      exampleSentences: [
        { en: 'The company is planning to expand its business to several foreign markets next year.', ko: '그 회사는 내년에 여러 해외 시장으로 사업을 확장할 계획이다.' },
        { en: 'Many students seek opportunities for international education to broaden their perspectives.', ko: '많은 학생이 시야를 넓히기 위해 해외 교육의 기회를 찾는다.' },
      ],
      wordDistractors: ['oversee', 'oversize', 'overuse'],
      definitionDistractors: [
        'located within the boundaries of a single country',
        'happening exclusively in coastal regions near home',
        'referring to activities conducted underground',
      ],
    }
  ),
  word('overwhelm', '압도하다', 4, 'verb',
    ['정리하다', '휘젓다', '비난하다, 질책하다', '방향을 바꾸다', '나누다/배분하다/할당하다', '(덮어서) 질식시키다, 불을 끄다 / (감정, 행동) 억제하다', '역겹게 하다', '매달다', '~에 대해 걱정하다', '동 과거'],
    tips({
      etymology: '고대 영어 \'whelmen(뒤집다)\'에 \'over(위로)\'가 붙어, 물결이 배를 덮쳐 가라앉히는 모습에서 유래했습니다.',
      visual: '거대한 파도가 작은 조각배를 완전히 집어삼키는 이미지를 상상해 보세요.',
      soundAlike: '발음이 \'오버-웰름\'인데, 감정이 \'오버\'되어 눈물이 \'웰(well)\'컥 쏟아질 만큼 벅찬 상태로 기억하세요.',
      context: '업무량이 너무 많거나 갑작스러운 슬픔을 느낄 때, 혹은 경기에서 상대팀을 완전히 이겼을 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 overpower는 힘으로 누르는 느낌이고, 반의어인 underwhelm은 기대에 못 미쳐 실망시키는 느낌입니다.',
    }),
    {
      definition: 'to defeat someone or something by using a lot of force, or to cause someone to feel sudden strong emotion',
      synonyms: ['overpower', 'inundate', 'subjugate'],
      antonyms: ['underwhelm', 'encourage', 'surrender'],
      exampleSentences: [
        { en: 'The sheer volume of work began to defeat the new employees during their first week.', ko: '엄청난 업무량은 첫 주 동안 신입 사원들을 압도하기 시작했습니다.' },
        { en: 'A sense of profound gratitude will often flood the hearts of those who receive unexpected help.', ko: '예상치 못한 도움을 받은 사람들의 마음에는 종종 깊은 감사함이 넘쳐납니다.' },
      ],
      wordDistractors: ['underwhelm', 'overwork', 'overrule'],
      definitionDistractors: [
        'to carefully organize items into a systematic order',
        'to gently persuade someone to change their opinion',
        'to gradually reduce the intensity of a feeling',
      ],
    }
  ),
  word('owe', '빚지다', 7, 'verb',
    ['빌려주다', '소유하다', '구매하다', '저축하다', '투자하다', '낭비하다', '기부하다', '교환하다', '판매하다', '거절하다'],
    tips({
      etymology: '고대 영어 \'agan\'에서 유래하여 \'소유하다\'에서 \'남의 것을 가지고 있어 돌려줄 의무가 있다\'는 뜻으로 변했습니다.',
      visual: '친구에게 빌린 돈을 갚지 못해 미안해하며 지갑을 열고 있는 모습을 상상해 보세요.',
      soundAlike: '알파벳 \'O\' 발음과 비슷합니다. \'오(O)! 내가 너에게 줄 게 있었지!\'라고 외우면 쉽습니다.',
      context: '금전적인 부채뿐만 아니라 감사한 마음이나 성공의 공로를 타인에게 돌릴 때도 자주 쓰입니다.',
      synonymAntonym: 'indebted는 빚을 진 상태를, repay는 갚는 행위를 나타내며 settle은 정산하는 반대 개념입니다.',
    }),
    {
      definition: 'to be under an obligation to pay or give something back to someone because of a debt or a favor received',
      synonyms: ['be indebted', 'be in debt', 'be obligated'],
      antonyms: ['repay', 'settle', 'be paid'],
      exampleSentences: [
        { en: 'The young entrepreneur still had to pay back the large sum he had to borrow from the local bank.', ko: '그 젊은 기업가는 지역 은행에서 빌려야 했던 거액의 돈을 여전히 갚아야 할 의무가 있었습니다.' },
        { en: 'Many successful athletes feel they are indebted to their coaches for their early guidance and support.', ko: '많은 성공한 운동선수들은 초기의 지도와 지원에 대해 코치들에게 은혜를 입었다고 느낍니다.' },
      ],
      wordDistractors: ['own', 'awe', 'owed'],
      definitionDistractors: [
        'to lend money to someone at a fixed interest rate',
        'to donate resources voluntarily to a charitable cause',
        'to earn income from a business or investment',
      ],
    }
  ),
  word('own', '소유하다', 4, 'verb',
    ['분석하다', '정리하다', '검사하다', '(하고 싶은 것, 갖고 싶은 것을) 포기하다', '빛나다, 반짝이다', '앞으로 꼬꾸라지다, 비틀거리다, 몰락시키다', '정복하다', '보상하다, 보충하다', '반추해보다, 깊이 생각해 보다', '쓰다'],
    tips({
      etymology: '고대 영어 \'āgnian\'에서 유래되었으며, \'가진 것\'이라는 의미의 \'owe\'와 뿌리가 같습니다.',
      visual: '집 열쇠를 손에 꼭 쥐고 \'이건 내 거야\'라고 말하는 집주인의 모습을 상상해 보세요.',
      soundAlike: '\'온(own)\' 세상이 다 내 것인 것처럼 당당하게 소유권을 주장하는 소리를 떠올려 보세요.',
      context: '단순히 가지고 있는 상태뿐만 아니라, 자신의 행동에 대해 책임을 질 때도 사용됩니다.',
      synonymAntonym: 'possess와 유의어 관계이며, 빌려 쓰는 borrow와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to have something as one\'s legal property or to possess a particular characteristic',
      synonyms: ['possess', 'hold', 'retain'],
      antonyms: ['lack', 'borrow', 'lose'],
      exampleSentences: [
        { en: 'Many young people dream of the day they will finally have enough money to possess their first car.', ko: '많은 젊은이들은 마침내 자신의 첫 차를 소유할 만큼 충분한 돈을 갖게 될 날을 꿈꿉니다.' },
        { en: 'The local family has managed to keep and manage this small bakery for over three generations.', ko: '그 지역 가족은 3대 넘게 이 작은 빵집을 소유하고 운영해 왔습니다.' },
      ],
      wordDistractors: ['owe', 'awn', 'owning'],
      definitionDistractors: [
        'to temporarily borrow something with intent to return it',
        'to express a strong opinion about a controversial topic',
        'to discard unwanted items from a collection',
      ],
    }
  ),
  word('pace', '한걸음', 5, 'noun',
    ['속도', '거리', '공간', '위치', '방향', '시간', '무게', '높이', '깊이', '넓이'],
    tips({
      etymology: '라틴어 \'passus\'에서 유래했으며, 걷는 동안 두 발 사이의 간격을 의미합니다.',
      visual: '군인이 행진할 때 일정한 간격으로 발을 내딛는 보폭을 상상해 보세요.',
      soundAlike: '페이스(face)와 발음이 비슷하지만, 얼굴이 아닌 발걸음에 집중하세요.',
      context: '달리기나 걷기 운동을 할 때 일정한 보폭을 유지하는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'step과 유사한 의미를 가지며, 정지 상태를 뜻하는 standstill과 반대됩니다.',
    }),
    {
      definition: 'a single step taken when walking or running',
      synonyms: ['step', 'stride', 'footstep'],
      antonyms: ['standstill', 'halt', 'immobility'],
      exampleSentences: [
        { en: 'The hiker took a slow and steady stride to reach the mountain peak.', ko: '등산객은 산 정상에 도달하기 위해 느리고 꾸준한 한걸음을 내디뎠습니다.' },
        { en: 'He moved forward one small footstep at a time through the narrow hallway.', ko: '그는 좁은 복도를 통해 한 번에 작은 한걸음씩 앞으로 나아갔습니다.' },
      ],
      wordDistractors: ['place', 'peace', 'pave'],
      definitionDistractors: [
        'a large open area used for public gatherings',
        'the total distance covered during a trip',
        'a sudden burst of speed in a race',
      ],
    }
  ),
  word('pack', '꾸러미', 6, 'noun',
    ['상자', '가방', '봉투', '선물', '조각', '더미', '묶음', '상표', '그릇', '바구니'],
    tips({
      etymology: '독일어 \'packen\'에서 유래하여 물건을 단단히 묶어 놓은 덩어리를 의미합니다.',
      visual: '여행을 떠나기 전 침대 위에 여러 물건을 한데 모아 끈으로 묶어놓은 보따리를 상상해 보세요.',
      soundAlike: '배낭을 뜻하는 \'백팩(backpack)\'의 뒷부분 발음과 동일하여 기억하기 쉽습니다.',
      context: '주로 늑대 무리나 담배 한 갑, 혹은 등짐처럼 하나로 묶인 단위를 말할 때 쓰입니다.',
      synonymAntonym: 'bundle과 유사하며, 낱개로 흩어진 상태인 individual items와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A collection of objects wrapped or tied together for carrying or storage.',
      synonyms: ['bundle', 'parcel', 'package'],
      antonyms: ['individual', 'single', 'fragment'],
      exampleSentences: [
        { en: 'The hiker carried a heavy canvas bundle on his back during the long journey.', ko: '그 등산객은 긴 여정 동안 등에 무거운 캔버스 꾸러미를 메고 다녔습니다.' },
        { en: 'A small collection of supplies was delivered to the remote village by helicopter.', ko: '보급품이 든 작은 꾸러미가 헬리콥터를 통해 외딴 마을로 배달되었습니다.' },
      ],
      wordDistractors: ['pact', 'rack', 'patch'],
      definitionDistractors: [
        'a formal agreement between two or more parties',
        'a single item sold separately in a retail store',
        'a large open container used for shipping goods',
      ],
    }
  ),
  word('packet', '봉지', 7, 'noun',
    ['상자', '가방', '보따리', '컨테이너', '바구니', '서류봉투', '주머니', '소포', '짐', '보자기'],
    tips({
      etymology: '작은 가방을 뜻하는 \'pack\'에 작음을 나타내는 접미사 \'-et\'이 붙어 무언가를 담은 작은 꾸러미를 의미하게 되었습니다.',
      visual: '편의점에서 파는 작은 설탕 봉지나 씨앗이 든 봉투가 여러 개 묶여 있는 모습을 상상해 보세요.',
      soundAlike: '\'패킷\'이라고 발음하며, 컴퓨터 데이터가 덩어리로 전송될 때도 이 단어를 사용하므로 \'데이터 뭉치\'로 기억하면 쉽습니다.',
      context: '주로 설탕, 소금, 씨앗처럼 작은 양의 물건을 종이나 플라스틱 봉지에 담아 묶어 놓은 것을 말할 때 쓰입니다.',
      synonymAntonym: 'bundle이나 package와 비슷하지만, packet은 보통 손에 들어올 정도로 더 작은 크기를 강조합니다.',
    }),
    {
      definition: 'A small container or paper envelope in which goods are packed in small quantities.',
      synonyms: ['bundle', 'package', 'parcel'],
      antonyms: ['bulk', 'mass', 'whole'],
      exampleSentences: [
        { en: 'She opened a small packet of sugar to sweeten her morning coffee.', ko: '그녀는 아침 커피를 달게 만들기 위해 작은 설탕 봉지를 뜯었습니다.' },
        { en: 'The gardener bought a packet of sunflower seeds to plant in the backyard.', ko: '정원사는 뒷마당에 심기 위해 해바라기 씨앗 한 봉지를 샀습니다.' },
      ],
      wordDistractors: ['pocket', 'picket', 'racket'],
      definitionDistractors: [
        'a large crate used for international shipping',
        'a digital file sent as an email attachment',
        'a heavy box designed to store tools or equipment',
      ],
    }
  ),
  word('pad', '패드, 메모장', 4, 'noun',
    ['충격', '보호', '쿠션', '완충재', '받침대', '메모지', '발바닥', '거처', '발사대', '소음'],
    tips({
      etymology: '중세 네덜란드어 \'pad\'에서 유래하여 부드러운 물건이나 길을 의미하게 되었습니다.',
      visual: '럭비 선수가 어깨에 두툼한 보호대를 덧대는 모습을 상상해 보세요.',
      soundAlike: '태블릿 PC인 \'아이패드\'를 보호하기 위해 케이스를 덧대는 상황을 연상하세요.',
      context: '주로 충격을 흡수하거나 모양을 잡기 위해 옷이나 장비 안에 부드러운 재질을 채워 넣을 때 사용합니다.',
      synonymAntonym: 'cushion이나 buffer와 비슷하며, 딱딱한 표면을 뜻하는 hard surface와는 반대됩니다.',
    }),
    {
      definition: 'A thin mass of soft material used for protection, comfort, or to give shape to something.',
      synonyms: ['cushion', 'buffer', 'padding'],
      antonyms: ['void', 'hardness', 'protrusion'],
      exampleSentences: [
        { en: 'The football player wore a thick shoulder protector to prevent injuries during the game.', ko: '축구 선수는 경기 중 부상을 방지하기 위해 두꺼운 어깨 보호대를 착용했습니다.' },
        { en: 'She placed a soft layer of cotton under the bandage to make it more comfortable.', ko: '그녀는 더 편안하게 만들기 위해 붕대 아래에 부드러운 면 층을 덧대었습니다.' },
      ],
      wordDistractors: ['paid', 'bad', 'pod'],
      definitionDistractors: [
        'a rigid surface designed for writing or engraving',
        'a sharp pointed instrument used for piercing holes',
        'a heavy block of stone used in construction',
      ],
    }
  ),
  word('pain', '고통', 5, 'noun',
    ['기쁨', '희망', '평화', '성공', '휴식', '용기', '친절', '지혜', '행운', '침묵'],
    tips({
      etymology: '라틴어 poena에서 유래했으며, 이는 벌금이나 처벌을 의미하여 신체적 고통과 연결됩니다.',
      visual: '넘어져서 무릎이 깨졌을 때 얼굴을 찌푸리며 비명을 지르는 모습을 상상해 보세요.',
      soundAlike: '창문 유리인 pane과 발음이 같지만, 깨진 유리 조각에 찔리면 아프다는 점을 기억하세요.',
      context: '병원에서 의사가 통증의 정도를 물어볼 때 가장 흔하게 사용하는 단어입니다.',
      synonymAntonym: 'suffering과 유사하며, 반대로 아무런 아픔이 없는 상태인 comfort와 대조됩니다.',
    }),
    {
      definition: 'an unpleasant sensory and emotional experience associated with actual or potential tissue damage',
      synonyms: ['suffering', 'agony', 'ache'],
      antonyms: ['pleasure', 'comfort', 'relief'],
      exampleSentences: [
        { en: 'The patient complained of a sharp sensation in his lower back after lifting heavy boxes.', ko: '환자는 무거운 상자를 들어 올린 후 허리에 날카로운 통증을 호소했습니다.' },
        { en: 'Losing a beloved pet can cause deep emotional distress that takes a long time to heal.', ko: '사랑하는 반려동물을 잃는 것은 치유되는 데 오랜 시간이 걸리는 깊은 정서적 고통을 유발할 수 있습니다.' },
      ],
      wordDistractors: ['pane', 'pine', 'gain'],
      definitionDistractors: [
        'a feeling of deep satisfaction after achieving a goal',
        'a mild sensation of warmth in the body',
        'a sudden increase in energy or motivation',
      ],
    }
  ),
  word('paint', '페인트, 칠하다', 1, 'noun',
    ['조각', '점토', '캔버스', '붓', '액자', '조명', '도구', '재료', '바탕', '색상'],
    tips({
      etymology: '라틴어 \'pingere(그리다)\'에서 유래하여 표면을 덮어 색을 입히는 물질을 뜻하게 되었습니다.',
      visual: '벽면에 끈적한 액체를 롤러로 펴 바르며 색이 입혀지는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'페인트\'와 같으므로 우리가 흔히 쓰는 페인트칠을 떠올리면 쉽습니다.',
      context: '건축이나 예술 분야에서 표면 보호나 장식을 위해 바르는 액체 물질을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '색을 입히는 coating과 유사하며, 아무것도 바르지 않은 bare surface와 대비됩니다.',
    }),
    {
      definition: 'A colored liquid that is spread over a surface to dry and form a hard protective or decorative coating.',
      synonyms: ['pigment', 'dye', 'coating'],
      antonyms: ['solvent', 'remover', 'stripper'],
      exampleSentences: [
        { en: 'The fresh layer of white paint on the walls made the room look much brighter.', ko: '벽에 새로 칠한 하얀색 페인트 덕분에 방이 훨씬 더 밝아 보였다.' },
        { en: 'Artists often mix different types of paint to achieve the exact shade they desire.', ko: '화가들은 원하는 정확한 색조를 얻기 위해 종종 다양한 종류의 페인트를 섞는다.' },
      ],
      wordDistractors: ['pint', 'point', 'faint'],
      definitionDistractors: [
        'a solid block of wax used for making candles',
        'a thin sheet of transparent material for wrapping',
        'a powdered substance mixed with water for cleaning',
      ],
    }
  ),
  word('pair', '한쌍', 6, 'noun',
    ['자유형, 자유 형식의', '미래', '새장, 우리', '사슴', '맥주', '허리', '센티미터', '팬들', '복수', '출현'],
    tips({
      etymology: '라틴어 \'par\'에서 유래되었으며, 이는 \'동등한 것\' 또는 \'짝\'을 의미합니다.',
      visual: '똑같이 생긴 신발 두 짝이 나란히 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '과일 \'배(pear)\'와 발음이 같으므로, 배 두 개가 한 쌍으로 묶여 있다고 생각하면 쉽습니다.',
      context: '양말, 장갑, 안경처럼 두 개가 하나로 기능하는 물건을 셀 때 주로 쓰입니다.',
      synonymAntonym: 'couple은 보통 사람이나 임의의 두 개를, duo는 이중주나 콤비를 뜻합니다.',
    }),
    {
      definition: 'two things that are used together or are regarded as a unit because they are identical or complementary',
      synonyms: ['couple', 'duo', 'brace'],
      antonyms: ['single', 'individual', 'entity'],
      exampleSentences: [
        { en: 'She bought a new pair of leather boots for the winter season.', ko: '그녀는 겨울 시즌을 위해 새 가죽 부츠 한 켤레를 샀다.' },
        { en: 'A pair of swans glided gracefully across the still surface of the lake.', ko: '백조 한 쌍이 호수의 잔잔한 표면 위를 우아하게 미끄러지듯 나아갔다.' },
      ],
      wordDistractors: ['pare', 'pear', 'pier'],
      definitionDistractors: [
        'a single item selected from a larger group',
        'a collection of three or more matching objects',
        'a sequence of numbers arranged in ascending order',
      ],
    }
  ),
  word('palace', '궁전', 2, 'noun',
    ['오두막', '창고', '사무실', '공장', '도서관', '박물관', '경기장', '병원', '학교', '시장'],
    tips({
      etymology: '고대 로마의 황제들이 거주하던 팔라티노(Palatine) 언덕의 이름에서 유래했습니다.',
      visual: '황금빛 지붕과 수백 개의 방이 있는 웅장하고 화려한 성의 모습을 상상해 보세요.',
      soundAlike: '\'팰리스\'라고 발음하며, \'패리스(Paris) 힐튼\' 같은 유명인이 사는 화려한 집을 떠올려보세요.',
      context: '주로 왕실 가족이 거주하거나 국가의 중요한 의전 행사가 열리는 장소를 말할 때 쓰입니다.',
      synonymAntonym: 'castle이나 mansion과 비슷하지만 더 권위적이며, 작은 오두막인 hut과는 반대됩니다.',
    }),
    {
      definition: 'A large, magnificent building that serves as the official residence of a monarch or high-ranking dignitary.',
      synonyms: ['castle', 'mansion', 'chateau'],
      antonyms: ['shack', 'hovel', 'cottage'],
      exampleSentences: [
        { en: 'The royal family greeted the cheering crowd from the balcony of the grand stone structure.', ko: '왕실 가족은 웅장한 석조 건물의 발코니에서 환호하는 군중에게 인사했습니다.' },
        { en: 'Tourists often visit the historic residence to admire its gold-plated ceilings and vast gardens.', ko: '관광객들은 금도금된 천장과 광활한 정원을 감상하기 위해 그 역사적인 거처를 자주 방문합니다.' },
      ],
      wordDistractors: ['palate', 'placate', 'place'],
      definitionDistractors: [
        'a small rural house surrounded by farmland',
        'a temporary shelter built for outdoor camping',
        'a commercial building used for retail shopping',
      ],
    }
  ),
  word('pale', '창백한', 7, 'adjective',
    ['선명한', '어두운', '화려한', '단단한', '부드러운', '거친', '무거운', '가벼운', '날카로운', '둔탁한'],
    tips({
      etymology: '라틴어 pallidus에서 유래하여 색이 바래거나 피기가 없는 상태를 의미합니다.',
      visual: '아픈 사람이 하얀 침대 시트처럼 얼굴색이 하얗게 질려 있는 모습을 상상해 보세요.',
      soundAlike: '양동이를 뜻하는 pail과 발음이 같지만, 양동이에 담긴 물이 투명하고 연한 색이라고 연결해 보세요.',
      context: '주로 사람의 안색이 좋지 않을 때나 파스텔 톤처럼 색깔이 아주 연할 때 사용됩니다.',
      synonymAntonym: '색이 옅은 light와 유의어이며, 색이 진하고 강렬한 deep과는 반대되는 개념입니다.',
    }),
    {
      definition: 'having a skin color that is closer to white than usual, often due to illness, shock, or lack of sunlight',
      synonyms: ['pallid', 'ashen', 'faint'],
      antonyms: ['ruddy', 'vibrant', 'flushed'],
      exampleSentences: [
        { en: 'Her face turned white and ghostlike after she heard the terrifying news.', ko: '그녀는 무서운 소식을 듣고 얼굴이 유령처럼 창백해졌다.' },
        { en: 'The artist chose a very light shade of blue for the morning sky in his painting.', ko: '그 화가는 그림 속 아침 하늘을 위해 아주 연한 푸른색조를 선택했다.' },
      ],
      wordDistractors: ['pail', 'tale', 'vale'],
      definitionDistractors: [
        'having a deep, rich color that attracts attention',
        'feeling extremely warm due to physical activity',
        'appearing swollen or enlarged beyond normal size',
      ],
    }
  ),
  word('palm', '손바닥', 4, 'noun',
    ['발바닥', '손가락', '손목', '팔꿈치', '어깨', '무릎', '발가락', '허벅지', '종아리', '옆구리'],
    tips({
      etymology: '라틴어 palma에서 유래했으며, 펼쳐진 손의 모양이 야자수 잎과 닮아 두 의미를 모두 갖게 되었습니다.',
      visual: '점쟁이가 당신의 손금을 보기 위해 손을 활짝 펴라고 요청하는 장면을 상상해 보세요.',
      soundAlike: '\'팜\' 발음이 \'파다\'와 비슷하죠? 손바닥으로 모래를 파내는 모습을 연상해 보세요.',
      context: '핸드크림을 바를 때나 박수를 칠 때 가장 먼저 닿는 신체 부위입니다.',
      synonymAntonym: '손 안쪽 면을 뜻하는 inner hand와 유사하며, 손등을 뜻하는 back of the hand와 반대됩니다.',
    }),
    {
      definition: 'The inner surface of the hand between the wrist and the fingers.',
      synonyms: ['thenar', 'inner hand', 'metacarpus'],
      antonyms: ['back of hand', 'knuckle', 'fingertip'],
      exampleSentences: [
        { en: 'She placed the small gold coin directly in the center of her hand.', ko: '그녀는 작은 금화를 자신의 손바닥 정중앙에 놓았다.' },
        { en: 'Sweat began to form on his skin because he was extremely nervous about the interview.', ko: '그는 면접 때문에 너무 긴장해서 손바닥에 땀이 나기 시작했다.' },
      ],
      wordDistractors: ['calm', 'psalm', 'balm'],
      definitionDistractors: [
        'the outer surface of the back of the hand',
        'the joint connecting the hand to the forearm',
        'a long tropical fruit with a curved shape',
      ],
    }
  ),
  word('pan', '팬', 5, 'noun',
    ['냄비', '솥', '그릇', '접시', '주전자', '국자', '도마', '그릴', '오븐', '수저'],
    tips({
      etymology: '고대 영어 \'panna\'에서 유래했으며, 음식을 조리하기 위해 평평하거나 오목하게 만든 금속 용기를 뜻합니다.',
      visual: '가스레인지 위에서 지글지글 베이컨이 익어가는 얕고 넓은 금속 팬의 모습을 상상해 보세요.',
      soundAlike: '한국어 \'팬\'과 발음이 거의 같으므로, 요리할 때 쓰는 프라이팬을 떠올리면 쉽습니다.',
      context: '주방에서 볶음 요리를 하거나 전을 부칠 때 가장 필수적으로 사용되는 도구입니다.',
      synonymAntonym: 'skillet이나 pot과 비슷하지만, pot은 보통 깊이가 깊은 냄비를 의미하고 pan은 얕은 것을 뜻합니다.',
    }),
    {
      definition: 'A shallow metal container with a handle, used for cooking food in an oven or on a stove.',
      synonyms: ['skillet', 'saucepan', 'griddle'],
      antonyms: ['lid', 'cover', 'plate'],
      exampleSentences: [
        { en: 'Heat some olive oil in a large metal container before adding the chopped onions.', ko: '다진 양파를 넣기 전에 커다란 금속 팬에 올리브유를 두르고 가열하세요.' },
        { en: 'The chef scrubbed the burnt food off the bottom of the heavy iron cooking vessel.', ko: '요리사는 무거운 철제 조리용기 바닥에 눌어붙은 음식을 문질러 닦아냈습니다.' },
      ],
      wordDistractors: ['pen', 'ban', 'pane'],
      definitionDistractors: [
        'a deep round vessel used for boiling large quantities of liquid',
        'a flat ceramic dish used for serving food at the table',
        'a sharp utensil used for cutting meat or vegetables',
      ],
    }
  ),
  word('panel', '판벽널', 8, 'noun',
    ['벽지', '기둥', '천장', '바닥재', '창틀', '문고리', '계단', '지붕', '난간', '울타리'],
    tips({
      etymology: '라틴어 \'pannus(천 조각)\'에서 유래하여, 틀 안에 끼워 넣는 조각이나 판을 의미하게 되었습니다.',
      visual: '고급스러운 서재 벽면에 나무 판자들이 일정한 간격으로 붙어 있는 모습을 상상해 보세요.',
      soundAlike: '\'패널\'이라고 발음하며, TV 토론회에 나오는 전문가 집단도 같은 단어를 사용하지만 여기서는 건축용 판재를 뜻합니다.',
      context: '인테리어 디자인이나 건축 분야에서 벽면을 장식하거나 마감할 때 자주 등장하는 용어입니다.',
      synonymAntonym: 'board나 section과 비슷하며, 전체를 뜻하는 whole이나 빈 공간인 void와는 대조적입니다.',
    }),
    {
      definition: 'A flat, usually rectangular piece of wood, metal, or glass that forms part of a larger surface like a wall or door.',
      synonyms: ['board', 'plank', 'section'],
      antonyms: ['whole', 'entity', 'void'],
      exampleSentences: [
        { en: 'The carpenter installed a decorative oak board on the library wall.', ko: '목수는 도서관 벽에 장식용 오크 판벽널을 설치했습니다.' },
        { en: 'Each section of the wooden fence needs to be painted before the rainy season.', ko: '나무 울타리의 각 판벽널은 장마철이 오기 전에 도색되어야 합니다.' },
      ],
      wordDistractors: ['penal', 'petal', 'papal'],
      definitionDistractors: [
        'a group of experts assembled to discuss a specific topic',
        'a curved decorative molding along the ceiling edge',
        'a narrow opening in a wall used for ventilation',
      ],
    }
  ),
  word('panic', '돌연한공포', 6, 'noun',
    ['평온', '안도', '질서', '침착', '증기', '사냥꾼', '페니들 (소액 동전)', '고리', '교육', '민감성, 감수성'],
    tips({
      etymology: '그리스 신화의 목신 \'판(Pan)\'이 숲속에서 갑자기 지르는 소리에 사람들이 겁에 질린 것에서 유래했습니다.',
      visual: '영화관에서 갑자기 불이 꺼졌을 때 사람들이 출구로 우왕좌왕 달려가는 아수라장을 상상해 보세요.',
      soundAlike: '발음이 \'패닉\'으로 익숙하며, 무언가 \'패\'이고 \'닉\'이 나갈 정도로 정신없는 상태로 기억하세요.',
      context: '주식 시장의 급락이나 화재 경보가 울리는 긴박한 상황에서 주로 사용되는 명사입니다.',
      synonymAntonym: '유의어인 alarm은 경고의 의미가 강하고, 반의어인 calm은 고요한 상태를 뜻합니다.',
    }),
    {
      definition: 'A sudden strong feeling of fear that prevents reasonable thought and action.',
      synonyms: ['terror', 'alarm', 'fright'],
      antonyms: ['calm', 'composure', 'serenity'],
      exampleSentences: [
        { en: 'A wave of fear spread through the crowd when the fire alarm sounded.', ko: '화재 경보가 울리자 군중들 사이에 공포의 물결이 퍼졌습니다.' },
        { en: 'Investors sold their stocks in a state of total hysteria after the market crash.', ko: '투자자들은 시장 폭락 이후 완전히 공황 상태에 빠져 주식을 매도했습니다.' },
      ],
      wordDistractors: ['picnic', 'manic', 'tonic'],
      definitionDistractors: [
        'a feeling of mild curiosity about an unknown situation',
        'a gradual sense of relaxation after a stressful event',
        'a planned and organized response to an emergency',
      ],
    }
  ),
  word('pants', '바지', 3, 'noun',
    ['셔츠', '모자', '양말', '장갑', '코트', '치마', '안경', '신발', '벨트', '가방'],
    tips({
      etymology: '19세기 pantaloons라는 긴 바지 이름이 줄어들어 pants가 되었습니다.',
      visual: '다리가 두 개라 항상 복수형 -s가 붙어 있는 긴 바지의 실루엣을 상상해 보세요.',
      soundAlike: '숨을 헐떡이는 소리인 \'팬트(pant)\'와 발음이 비슷해, 바지를 입고 달리기하는 모습을 떠올리면 쉽습니다.',
      context: '격식 있는 자리에서는 trousers라고 부르기도 하지만 일상에서는 pants를 주로 씁니다.',
      synonymAntonym: 'trousers, slacks와 비슷하며, 상의를 뜻하는 tops와 반대 개념으로 쓰입니다.',
    }),
    {
      definition: 'An outer garment covering each leg separately and usually extending from the waist to the ankles.',
      synonyms: ['trousers', 'slacks', 'breeches'],
      antonyms: ['shirt', 'blouse', 'jacket'],
      exampleSentences: [
        { en: 'He decided to wear blue denim jeans instead of formal black trousers.', ko: '그는 격식 있는 검은색 정장 바지 대신 파란색 데님 청바지를 입기로 결정했습니다.' },
        { en: 'The tailor measured the length of the legs to ensure the new clothing fit perfectly.', ko: '재단사는 새 옷이 완벽하게 맞도록 다리 길이를 측정했습니다.' },
      ],
      wordDistractors: ['pints', 'paints', 'plants'],
      definitionDistractors: [
        'a type of headwear worn for protection from the sun',
        'a loose upper body garment with long sleeves',
        'a set of lightweight footwear designed for indoor use',
      ],
    }
  ),
  word('paper', '종이', 1, 'noun',
    ['연필', '지우개', '가위', '풀', '공책', '책상', '의자', '칠판', '가방', '필통'],
    tips({
      etymology: '고대 이집트에서 기록 매체로 사용하던 식물인 \'파피루스(papyrus)\'에서 유래했습니다.',
      visual: '하얀 A4 용지 한 장이 프린터에서 매끄럽게 빠져나오는 모습을 상상해 보세요.',
      soundAlike: '\'페이퍼\'라고 발음하며, 무언가를 \'펴\'서 글을 쓰는 장면을 연상하면 쉽습니다.',
      context: '학교에서 시험을 치거나 사무실에서 보고서를 출력할 때 가장 많이 쓰이는 재료입니다.',
      synonymAntonym: '글을 쓰는 시트(sheet)와 비슷하며, 형태가 없는 디지털 파일과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A material manufactured in thin sheets from the pulp of wood or other fibrous substances, used for writing, drawing, or printing.',
      synonyms: ['parchment', 'stationery', 'sheet'],
      antonyms: ['digital', 'electronic', 'screen'],
      exampleSentences: [
        { en: 'Please write your name at the top of the white sheet.', ko: '흰 종이 맨 위에 당신의 이름을 적어 주세요.' },
        { en: 'The printer ran out of material before the document was finished.', ko: '문서 출력이 끝나기 전에 프린터의 종이가 다 떨어졌습니다.' },
      ],
      wordDistractors: ['pauper', 'pepper', 'proper'],
      definitionDistractors: [
        'a digital display screen used for reading documents',
        'a thick fabric woven from natural cotton fibers',
        'a rigid plastic board used for mounting photographs',
      ],
    }
  ),
  word('paragraph', '단락', 7, 'noun',
    ['문장', '단어', '철자', '문법', '서론', '결론', '제목', '각주', '여백', '색인'],
    tips({
      etymology: '그리스어 \'para(옆에)\'와 \'graph(쓰다)\'가 합쳐져 글의 옆에 표시를 해둔 구분 단위를 뜻하게 되었습니다.',
      visual: '긴 글 속에서 줄바꿈을 통해 나누어진 직사각형 모양의 글 덩어리를 상상해 보세요.',
      soundAlike: '패러그래프 - \'패러(펴라)\' 글을 \'그래(그대로)\' 쭉 써 내려간 한 덩어리라고 기억하세요.',
      context: '글쓰기 과제에서 주제가 바뀔 때마다 새로운 문단으로 나누어야 가독성이 좋아집니다.',
      synonymAntonym: 'section이나 passage와 비슷하지만, 전체 글의 구성 단위라는 점이 강조됩니다.',
    }),
    {
      definition: 'A distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line or indentation.',
      synonyms: ['section', 'passage', 'segment'],
      antonyms: ['whole', 'entirety', 'collection'],
      exampleSentences: [
        { en: 'The first part of the essay introduces the main argument clearly.', ko: '에세이의 첫 번째 문단은 주요 논거를 명확하게 소개합니다.' },
        { en: 'Please indent the beginning of each new block of text to improve readability.', ko: '가독성을 높이기 위해 각 새로운 문단의 시작 부분에 들여쓰기를 하세요.' },
      ],
      wordDistractors: ['paraphrase', 'paradigm', 'paralegal'],
      definitionDistractors: [
        'a single complete sentence expressing one idea',
        'the title or heading placed at the top of a page',
        'a footnote added at the bottom of a document',
      ],
    }
  ),
  word('parallel', '평행의', 9, 'adjective',
    ['수직의', '교차하는', '곡선의', '불규칙한', '경사진', '원형의', '대각선의', '뒤틀린', '나선형의', '단절된'],
    tips({
      etymology: '그리스어 \'para(옆에)\'와 \'allelos(서로)\'가 합쳐져 서로 옆에서 나란히 가는 상태를 뜻합니다.',
      visual: '기차 철길의 두 레일이 끝없이 나란히 뻗어 있는 모습을 상상해 보세요.',
      soundAlike: '\'패러렐\' 발음이 \'팔을 레\'일 위에 나란히 올린 것과 비슷하다고 연상해 보세요.',
      context: '수학적 직선뿐만 아니라 두 사건이 동시에 비슷하게 일어날 때도 자주 쓰입니다.',
      synonymAntonym: '나란한 상태인 aligned와 반대로 가로질러 만나는 transverse를 함께 기억하세요.',
    }),
    {
      definition: 'moving or lying in the same direction and always remaining the same distance apart',
      synonyms: ['aligned', 'side-by-side', 'equivalent'],
      antonyms: ['perpendicular', 'divergent', 'intersecting'],
      exampleSentences: [
        { en: 'The two main roads run in a direction that stays equidistant from each other for miles.', ko: '두 주요 도로는 수 마일 동안 서로 평행하게 뻗어 있습니다.' },
        { en: 'Scientists noticed a striking similarity between the two separate experiments.', ko: '과학자들은 두 개의 독립적인 실험 사이에서 놀라운 유사점을 발견했습니다.' },
      ],
      wordDistractors: ['parcel', 'parasol', 'paralysis'],
      definitionDistractors: [
        'positioned at right angles to a horizontal surface',
        'arranged in a circular or curved formation',
        'placed at uneven distances from a central axis',
      ],
    }
  ),
  word('pardon', '용서하다', 4, 'verb',
    ['처벌하다', '비난하다', '무시하다', '강요하다', '거절하다', '구속하다', '조사하다', '방해하다', '연기하다', '비판하다'],
    tips({
      etymology: '라틴어 per(완전히)와 donare(주다)가 합쳐져, 잘못을 완전히 내어주고 없던 일로 해준다는 의미에서 유래했습니다.',
      visual: '법정에서 판사가 피고인의 죄를 면제해주며 서류에 도장을 찍는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'파든\'과 비슷하므로, 상대방의 말을 못 알아들었을 때 \'다시 한번 말해달라\'고 정중히 양해를 구하는 상황을 떠올리세요.',
      context: '주로 국가 원수가 죄인을 사면하거나, 일상에서 상대방의 사소한 실수나 결례를 너그럽게 봐줄 때 사용됩니다.',
      synonymAntonym: 'forgive와 유사하지만 더 공식적인 느낌이며, 반대로 죄를 묻는 punish와 대조됩니다.',
    }),
    {
      definition: 'to officially forgive someone for a crime or to excuse a polite mistake or misunderstanding',
      synonyms: ['forgive', 'excuse', 'absolve'],
      antonyms: ['punish', 'condemn', 'convict'],
      exampleSentences: [
        { en: 'The president decided to grant a full release to the political prisoner.', ko: '대통령은 그 정치범에게 완전한 사면을 베풀기로 결정했습니다.' },
        { en: 'Please excuse my rudeness for interrupting your important meeting.', ko: '중요한 회의를 방해한 저의 무례함을 용서해 주시기 바랍니다.' },
      ],
      wordDistractors: ['garden', 'burden', 'harden'],
      definitionDistractors: [
        'to impose a severe penalty for a wrongdoing',
        'to formally accuse someone of committing a crime',
        'to demand an explanation for inappropriate behavior',
      ],
    }
  ),
  word('park', '공원', 2, 'noun',
    ['교육', '휴식, 완화', '주름', '드라마', '(연필 등으로 그린) 그림', '결점, 단점', '책략', '모호함', '뿌리', '질병'],
    tips({
      etymology: '고대 프랑스어 \'parc\'에서 유래했으며, 원래는 울타리를 친 사냥터를 의미했습니다.',
      visual: '푸른 잔디밭 위에서 강아지가 뛰어놀고 사람들이 벤치에 앉아 쉬는 풍경을 상상해 보세요.',
      soundAlike: '\'파크\'라고 발음하며, 주차하다라는 뜻도 있어 \'공원에 주차(park)하다\'로 기억하면 쉽습니다.',
      context: '도심 속의 녹지 공간이나 아이들이 놀 수 있는 놀이터가 있는 장소를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'garden이나 playground와 비슷하지만 더 넓은 개념이며, 삭막한 city center와 대조됩니다.',
    }),
    {
      definition: 'A large public garden or area of land used for recreation and exercise.',
      synonyms: ['garden', 'playground', 'recreation area'],
      antonyms: ['wilderness', 'wasteland', 'industrial zone'],
      exampleSentences: [
        { en: 'Many families gather at the central green space to enjoy a picnic on weekends.', ko: '많은 가족들이 주말에 피크닉을 즐기기 위해 중앙 공원에 모입니다.' },
        { en: 'The city council decided to build a new public area with walking trails and benches.', ko: '시의회는 산책로와 벤치가 있는 새로운 공공 공원을 조성하기로 결정했습니다.' },
      ],
      wordDistractors: ['pork', 'bark', 'spark'],
      definitionDistractors: [
        'a paved area designated for vehicle storage',
        'a dense forest area restricted from public access',
        'a commercial zone with shops and restaurants',
      ],
    }
  ),
  word('parliament', '의회', 10, 'noun',
    ['대통령', '사법부', '행정부', '지방자치', '선거구', '헌법재판소', '공무원', '정당', '외교관', '시민단체'],
    tips({
      etymology: '프랑스어 \'parler(말하다)\'에서 유래하여, 사람들이 모여 나랏일을 논의하고 말하는 곳을 뜻합니다.',
      visual: '국회의사당의 둥근 지붕 아래 수많은 의원들이 열띤 토론을 벌이는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'팔러먼트\'와 비슷한데, 나라의 법을 \'팔(parl)\' 걷어붙이고 만드는 곳이라 생각하면 쉽습니다.',
      context: '민주주의 국가에서 법률을 제정하고 정부를 감시하는 최고 입법 기관을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 legislature는 법을 만드는 기관이라는 기능에 초점을 둔 표현입니다.',
    }),
    {
      definition: 'The group of people who are elected to make and change the laws of a country.',
      synonyms: ['legislature', 'congress', 'assembly'],
      antonyms: ['dictatorship', 'autocracy', 'tyranny'],
      exampleSentences: [
        { en: 'The new law was passed after a long debate in the national assembly building.', ko: '새로운 법안은 국회의사당에서의 긴 토론 끝에 통과되었습니다.' },
        { en: 'Members of the governing body voted against the proposed tax increase.', ko: '의회 의원들은 제안된 세금 인상안에 반대 표를 던졌습니다.' },
      ],
      wordDistractors: ['parchment', 'paramount', 'partition'],
      definitionDistractors: [
        'a private organization that funds political campaigns',
        'a judicial body responsible for interpreting laws',
        'a military council that oversees national defense',
      ],
    }
  ),
  word('part', '부분', 3, 'noun',
    ['카페', '화해, 조정', '플로피 배로우 (고유명사)', '뻔뻔함/대담함', '바늘땀', '거만하게 걷다 / 버팀목', '도관, 전달 수단', '효능', '동맹, 제휴', '패배'],
    tips({
      etymology: '라틴어 \'partem\'에서 유래하여 전체에서 나누어진 조각이나 몫을 의미합니다.',
      visual: '피자 한 판에서 한 조각이 따로 떨어져 나와 있는 모습을 상상해 보세요.',
      soundAlike: '\'팥\'과 발음이 비슷하죠? 팥빙수 위에 올라간 팥 알갱이 하나하나가 전체의 \'부분\'이라고 생각하세요.',
      context: '기계의 부품, 연극의 역할, 혹은 신체의 일부를 말할 때 두루 쓰이는 기초 단어입니다.',
      synonymAntonym: '전체를 뜻하는 whole과 대조하여 기억하면 훨씬 명확해집니다.',
    }),
    {
      definition: 'a piece or segment of something that combined with others makes up the whole',
      synonyms: ['portion', 'section', 'segment'],
      antonyms: ['whole', 'entirety', 'total'],
      exampleSentences: [
        { en: 'The engine failure was caused by a small broken component in the cooling system.', ko: '엔진 고장은 냉각 시스템의 작은 파손된 부품 때문에 발생했습니다.' },
        { en: 'Reading is an essential element of learning a new language effectively.', ko: '독서는 새로운 언어를 효과적으로 배우는 데 있어 필수적인 부분입니다.' },
      ],
      wordDistractors: ['port', 'cart', 'tart'],
      definitionDistractors: [
        'the complete collection of all items in a set',
        'the starting point of a journey or process',
        'an artistic creation made from a single material',
      ],
    }
  ),
  word('participate', '참가하다', 5, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '약화되다 시들해지다', '확인하다, 단언하다', '달래다, 회유하다', '숨기다', '받을 만하다', '얻다'],
    tips({
      etymology: '라틴어 \'partem(부분)\'과 \'capere(잡다)\'가 합쳐져 \'한 부분을 차지하다\', 즉 어떤 활동의 일원이 된다는 의미에서 유래했습니다.',
      visual: '마라톤 출발선에서 수많은 사람들과 함께 운동화 끈을 묶으며 경기에 나설 준비를 하는 모습을 상상해 보세요.',
      soundAlike: '\'파티(party)\'에 \'씨(si)\'를 뿌리러 \'패이트(pate)\' 간다고 생각하면 여러 명이 모인 행사에 끼어드는 느낌이 납니다.',
      context: '주로 전치사 \'in\'과 함께 쓰여 동아리, 회의, 스포츠 경기 등에 주체적으로 가담할 때 자주 사용됩니다.',
      synonymAntonym: '단순히 자리에 있는 \'attend\'보다 능동적인 참여를 뜻하며, 방관자로 남는 \'withdraw\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to take part in an activity or event with others',
      synonyms: ['join', 'engage', 'partake'],
      antonyms: ['withdraw', 'quit', 'abstain'],
      exampleSentences: [
        { en: 'All students are encouraged to take an active role and join in the school festival.', ko: '모든 학생은 학교 축제에 적극적으로 참여하도록 권장됩니다.' },
        { en: 'She decided to enter the local marathon to raise money for charity.', ko: '그녀는 자선 기금을 모으기 위해 지역 마라톤에 참가하기로 결정했습니다.' },
      ],
      wordDistractors: ['particulate', 'partition', 'anticipate'],
      definitionDistractors: [
        'to observe an event without becoming directly involved',
        'to organize and plan a public gathering or ceremony',
        'to decline an invitation to a social event',
      ],
    }
  ),
  word('particle', '입자', 8, 'noun',
    ['1. 주변, 인근\n2. 근접', '1. 작은 구멍\n2. 자세히 보다, 응시하다', '공산주의자', '(한 지역, 특정 시대의)동물상', '생태계', '민감성, 감수성', '갈등', '재건, 복원', '보상', '도스토옙스키 (러시아 작가)'],
    tips({
      etymology: '라틴어 \'particula\'에서 유래했으며, \'부분\'을 뜻하는 \'part\'에 작음을 나타내는 접미사가 붙어 아주 작은 조각을 의미합니다.',
      visual: '현미경으로나 볼 수 있는 아주 작은 먼지나 모래알 하나가 공중에 떠다니는 모습을 상상해 보세요.',
      soundAlike: '\'파티클\' 발음이 \'팥\'알처럼 작고 동글동글한 물체를 연상시킨다고 생각하면 기억하기 쉽습니다.',
      context: '과학 실험에서 물질의 구성 단위를 설명하거나, 공기 중의 미세먼지를 언급할 때 자주 쓰이는 단어입니다.',
      synonymAntonym: '아주 작은 조각인 speck과 유의어 관계이며, 거대한 덩어리인 mass와는 반대되는 개념입니다.',
    }),
    {
      definition: 'an extremely small piece of matter or a tiny portion of something',
      synonyms: ['atom', 'speck', 'fragment'],
      antonyms: ['mass', 'whole', 'bulk'],
      exampleSentences: [
        { en: 'The scientist observed a tiny dust floating in the sunbeam.', ko: '과학자는 햇살 속에서 떠다니는 아주 작은 먼지 입자를 관찰했습니다.' },
        { en: 'Subatomic research focuses on how each individual behaves under extreme pressure.', ko: '원자 이하의 연구는 각각의 개별 입자가 극한의 압력 아래에서 어떻게 행동하는지에 초점을 맞춥니다.' },
      ],
      wordDistractors: ['partial', 'article', 'partition'],
      definitionDistractors: [
        'a large solid structure used as a building material',
        'a complete organism visible to the naked eye',
        'a unit of measurement used in scientific equations',
      ],
    }
  ),
  word('particular', '특수한', 6, 'adjective',
    ['일반적인', '포괄적인', '평범한', '보편적인', '막연한', '대략적인', '전체적인', '공통의', '무작위의', '유사한'],
    tips({
      etymology: '라틴어 \'particula(작은 부분)\'에서 유래하여, 전체가 아닌 \'특정한 부분\'에 집중한다는 의미를 담고 있습니다.',
      visual: '수많은 똑같은 상자들 중에서 단 하나만 밝게 빛나고 있는 특별한 상자를 상상해 보세요.',
      soundAlike: '\'파티큘러\'라고 발음할 때, \'파티(party)\'에 초대받은 \'특별한\' 손님을 떠올리면 기억하기 쉽습니다.',
      context: '음식 취향이 까다롭거나, 여러 사례 중 딱 하나를 지칭할 때 주로 사용되는 형용사입니다.',
      synonymAntonym: 'specific과 유의어 관계이며, 모든 것을 아우르는 general과는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to a single person, group, or thing rather than a whole category',
      synonyms: ['specific', 'distinct', 'individual'],
      antonyms: ['general', 'universal', 'ordinary'],
      exampleSentences: [
        { en: 'The detective paid close attention to one particular detail that others had overlooked.', ko: '그 형사는 다른 사람들이 간과했던 한 가지 특수한 세부 사항에 세심한 주의를 기울였다.' },
        { en: 'She is very particular about the temperature of her tea and always checks it twice.', ko: '그녀는 차의 온도에 대해 매우 까다로워서 항상 두 번씩 확인한다.' },
      ],
      wordDistractors: ['perpetual', 'peculiar', 'spectacular'],
      definitionDistractors: [
        'applying broadly to all members of a group without exception',
        'chosen at random without any specific criteria',
        'relating to events that happen frequently and predictably',
      ],
    }
  ),
  word('pass', '출입증', 1, 'noun',
    ['정지', '실패', '거절', '차단', '후퇴', '고정', '금지', '방해', '지연', '회피'],
    tips({
      etymology: '라틴어 \'passus(걸음)\'에서 유래하여 한 걸음씩 나아가거나 옆을 스쳐 가는 움직임을 나타냅니다.',
      visual: '축구 경기에서 공을 동료에게 건네주거나, 버스가 정류장을 그냥 지나치는 장면을 상상해 보세요.',
      soundAlike: '시험에 \'패스\'했다고 할 때의 그 발음이며, 무언가를 통과하거나 건네주는 상황을 떠올리면 쉽습니다.',
      context: '산길이나 좁은 통로를 의미하는 명사로 쓰이기도 하며, 출입증이라는 뜻으로도 자주 사용됩니다.',
      synonymAntonym: 'permit과 유사하게 통행권을 의미할 수 있으며, 반대로 blockage는 길을 막는 것을 의미합니다.',
    }),
    {
      definition: 'A card or ticket that allows a person to enter a place, travel on a vehicle, or go through a particular area.',
      synonyms: ['permit', 'ticket', 'identification'],
      antonyms: ['denial', 'refusal', 'blockage'],
      exampleSentences: [
        { en: 'The security guard asked to see my identification pass before letting me into the building.', ko: '보안 요원은 나를 건물에 들여보내기 전에 출입증을 보여달라고 요청했다.' },
        { en: 'Every student must carry a hall pass if they are outside the classroom during lessons.', ko: '모든 학생은 수업 시간에 교실 밖에 있을 경우 복도 통행증을 지참해야 한다.' },
      ],
      wordDistractors: ['past', 'path', 'mass'],
      definitionDistractors: [
        'a narrow mountain road used by vehicles',
        'a written examination given to test knowledge',
        'a formal rejection letter sent by an organization',
      ],
    }
  ),
  word('passage', '통행', 7, 'noun',
    ['정지', '폐쇄', '차단', '장벽', '고정', '거절', '침묵', '후퇴', '소멸', '거부'],
    tips({
      etymology: '라틴어 \'passus(걸음)\'에서 유래하여 한 장소에서 다른 장소로 이동하는 과정을 의미합니다.',
      visual: '좁고 긴 복도나 터널을 사람들이 줄지어 지나가는 모습을 상상해 보세요.',
      soundAlike: '패스(pass)와 에이지(age)의 결합으로 생각하여 \'시간이 지나며 통과함\'으로 기억하세요.',
      context: '건물 내부의 복도뿐만 아니라 법안의 통과나 시간의 흐름을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'transit과 path는 이동의 의미를 공유하며, blockage는 흐름을 막는 반대 개념입니다.',
    }),
    {
      definition: 'The act of moving through or past a particular place or the process of transitioning from one state to another.',
      synonyms: ['transit', 'pathway', 'corridor'],
      antonyms: ['obstruction', 'blockage', 'stoppage'],
      exampleSentences: [
        { en: 'The dark corridor provided a narrow way for the hikers to reach the other side of the mountain.', ko: '어두운 복도는 등산객들이 산 반대편에 도달할 수 있는 좁은 통로가 되어 주었습니다.' },
        { en: 'Many citizens gathered to celebrate the successful approval of the new safety legislation.', ko: '많은 시민들이 새로운 안전 법안의 성공적인 통과를 축하하기 위해 모였습니다.' },
      ],
      wordDistractors: ['massage', 'message', 'sausage'],
      definitionDistractors: [
        'a written document containing detailed instructions',
        'a physical barrier that blocks movement between areas',
        'a large room designed for storing personal belongings',
      ],
    }
  ),
  word('passenger', '승객', 4, 'noun',
    ['운전사', '보행자', '승무원', '안내원', '조종사', '정비사', '매표소', '정류장', '수하물', '교통수단'],
    tips({
      etymology: '통로를 뜻하는 \'passage\'에서 유래하여, 길을 따라 이동하는 사람을 의미합니다.',
      visual: '기차나 비행기 좌석에 앉아 창밖을 구경하며 여행하는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'패신저\'는 \'패스(pass)\'하며 지나가는 사람이라고 소리 내어 읽으면 기억하기 쉽습니다.',
      context: '대중교통 이용 시 운전자를 제외하고 탑승한 모든 사람을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'traveler와 비슷하지만, 운송 수단에 탑승했다는 점이 강조되며 driver와는 반대 개념입니다.',
    }),
    {
      definition: 'A traveler who is riding in a vehicle such as a car, bus, train, or plane but is not operating it.',
      synonyms: ['traveler', 'commuter', 'rider'],
      antonyms: ['driver', 'pilot', 'operator'],
      exampleSentences: [
        { en: 'The flight attendant asked every traveler to remain seated until the plane stopped.', ko: '승무원은 비행기가 멈출 때까지 모든 승객에게 자리에 앉아 있을 것을 요청했습니다.' },
        { en: 'A young woman was the only person waiting in the back of the taxi.', ko: '한 젊은 여성이 택시 뒷좌석에 타고 있는 유일한 승객이었습니다.' },
      ],
      wordDistractors: ['messenger', 'passager', 'bystander'],
      definitionDistractors: [
        'a person who operates a vehicle for public transportation',
        'an employee responsible for loading cargo onto a ship',
        'a pedestrian walking alongside a busy road',
      ],
    }
  ),
  word('passion', '정열', 5, 'noun',
    ['냉담', '무관심', '지루함', '평온', '혐오', '거부', '망설임', '공포', '슬픔', '나태'],
    tips({
      etymology: '라틴어 \'pati(고통받다)\'에서 유래하여, 고통을 감수할 만큼 강렬한 감정을 뜻하게 되었습니다.',
      visual: '붉게 타오르는 불꽃이나 심장이 뜨겁게 뛰는 모습을 상상해 보세요.',
      soundAlike: '\'패션(Fashion)\'과 발음이 비슷하지만, 옷이 아닌 마음의 \'패기\'를 떠올리면 쉽습니다.',
      context: '취미나 직업에 대해 이야기할 때 단순한 좋아함 이상의 강력한 의지를 나타낼 때 쓰입니다.',
      synonymAntonym: '열정을 뜻하는 enthusiasm과 반대되는 차가운 무관심인 indifference를 함께 기억하세요.',
    }),
    {
      definition: 'a powerful emotion or a strong barely controllable excitement for a particular activity or object',
      synonyms: ['enthusiasm', 'ardor', 'zeal'],
      antonyms: ['apathy', 'indifference', 'detachment'],
      exampleSentences: [
        { en: 'Her lifelong commitment to teaching stems from a deep love for education.', ko: '그녀의 평생에 걸친 교육에 대한 헌신은 교육에 대한 깊은 열정에서 비롯됩니다.' },
        { en: 'The young artist painted the canvas with incredible energy and emotional intensity.', ko: '그 젊은 예술가는 엄청난 에너지와 감정적 열정으로 캔버스를 채워 나갔습니다.' },
      ],
      wordDistractors: ['passive', 'fashion', 'ration'],
      definitionDistractors: [
        'a state of complete boredom and lack of interest',
        'a logical and calculated approach to a problem',
        'a brief moment of hesitation before making a choice',
      ],
    }
  ),
  word('passport', '여권', 6, 'noun',
    ['비자', '탑승권', '신분증', '면허증', '증명서', '예약권', '영수증', '출입증', '허가서', '통행증'],
    tips({
      etymology: '항구(port)를 통과(pass)할 수 있게 해주는 문서라는 의미에서 유래되었습니다.',
      visual: '공항 검색대에서 파란색 수첩 모양의 문서를 내미는 여행객의 모습을 상상하세요.',
      soundAlike: '패스(pass)와 포트(port)가 합쳐진 소리로, 항구를 통과한다는 느낌을 살려 발음하세요.',
      context: '해외 여행을 갈 때 가장 먼저 챙겨야 하는 필수 신분 증명 서류입니다.',
      synonymAntonym: '여행 서류를 뜻하는 travel document와 유사하며, 무국적 상태와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An official document issued by a government, certifying the holder\'s identity and citizenship and entitling them to travel abroad.',
      synonyms: ['identification', 'travel document', 'credentials'],
      antonyms: ['exclusion', 'prohibition', 'restriction'],
      exampleSentences: [
        { en: 'The customs officer asked to see my identification before I could enter the country.', ko: '세관 직원은 내가 입국하기 전에 내 여권을 보여달라고 요청했다.' },
        { en: 'Keep your essential travel documents in a secure place while you are at the airport.', ko: '공항에 있는 동안 필수적인 여권을 안전한 곳에 보관하세요.' },
      ],
      wordDistractors: ['password', 'passbook', 'pastport'],
      definitionDistractors: [
        'a boarding pass used to enter an airplane',
        'a license granting permission to drive a vehicle',
        'a receipt confirming payment for a hotel reservation',
      ],
    }
  ),
  word('past', '과거', 7, 'noun',
    ['미래', '현재', '미래지향', '순간', '영원', '담배', '올림픽', '테드', '파멸, 운명', '(사건의) 결과'],
    tips({
      etymology: '라틴어 \'passus\'에서 유래하여 \'지나간 시간\'이라는 의미를 담고 있습니다.',
      visual: '이미 지나가버린 흑백 사진첩이나 낡은 일기장을 떠올려 보세요.',
      soundAlike: '패스트푸드(fast)와 발음이 비슷하지만, p발음에 주의하며 \'지나간 것\'을 생각하세요.',
      context: '역사나 개인의 경험을 이야기할 때 어제보다 더 이전의 시간을 가리킵니다.',
      synonymAntonym: 'history와 유사하며, 다가올 미래인 future와 정반대되는 개념입니다.',
    }),
    {
      definition: 'the period of time that has already happened and is no longer present',
      synonyms: ['history', 'yesteryear', 'former times'],
      antonyms: ['future', 'present', 'posterity'],
      exampleSentences: [
        { en: 'We cannot change what happened in the years behind us, but we can learn from them.', ko: '우리는 지난 세월 동안 일어난 일을 바꿀 수는 없지만, 그것들로부터 배울 수는 있습니다.' },
        { en: 'Ancient ruins provide a fascinating glimpse into a civilization\'s long-gone era.', ko: '고대 유적은 문명의 오래전 시대에 대한 매혹적인 일별을 제공합니다.' },
      ],
      wordDistractors: ['pass', 'fast', 'last'],
      definitionDistractors: [
        'the time that is yet to come or happen',
        'the current moment being experienced right now',
        'a prediction about events that will occur soon',
      ],
    }
  ),
  word('pat', '톡톡', 9, 'noun',
    ['돼지', '기증자, 후원자', '돌풍', '타자, 치는 사람', '수영선수', '차이, 변동', '대본, 원고', '수학자', '무기력', '전문가'],
    tips({
      etymology: '중세 영어에서 유래하여 손바닥으로 가볍게 치는 동작의 소리를 흉내 낸 의성어에서 시작되었습니다.',
      visual: '강아지의 머리를 쓰다듬거나 잘했다는 의미로 어깨를 가볍게 두드리는 손동작을 상상해 보세요.',
      soundAlike: '발음이 \'패트\'와 비슷하므로, 손바닥(palm)으로 툭툭 치는 소리를 연상하면 쉽습니다.',
      context: '칭찬을 할 때나 위로를 건넬 때 손으로 살짝 건드리는 신체 접촉 상황에서 주로 쓰입니다.',
      synonymAntonym: '가볍게 치는 tap과 유사하며, 세게 때리는 punch나 slap과는 반대되는 부드러운 동작입니다.',
    }),
    {
      definition: 'A quick, gentle touch or stroke with the open hand or a flat object.',
      synonyms: ['tap', 'stroke', 'dab'],
      antonyms: ['blow', 'punch', 'slap'],
      exampleSentences: [
        { en: 'The teacher gave the student a gentle touch on the shoulder to show her approval.', ko: '선생님은 승인의 표시로 학생의 어깨를 가볍게 톡톡 두드려 주었다.' },
        { en: 'He felt a friendly nudge on his back as he walked through the crowded hallway.', ko: '그는 붐비는 복도를 걸어갈 때 누군가 뒤에서 다정하게 톡톡 치는 것을 느꼈다.' },
      ],
      wordDistractors: ['pet', 'pit', 'pot'],
      definitionDistractors: [
        'a forceful strike delivered with a closed fist',
        'a loud clapping sound made with both hands',
        'a firm grip applied to hold something in place',
      ],
    }
  ),
  word('patch', '조각, 패치', 10, 'noun',
    ['구멍', '전체', '파괴', '분열', '확장', '소멸', '거절', '이동', '성장', '침묵'],
    tips({
      etymology: '중세 영어 \'pacche\'에서 유래하여 조각을 덧대어 수선한다는 의미를 가집니다.',
      visual: '낡은 청바지 무릎에 다른 색깔의 천 조각을 덧대어 꿰맨 모습을 상상해 보세요.',
      soundAlike: '상처에 붙이는 \'패치\'나 컴퓨터 소프트웨어의 오류를 수정하는 \'패치\'를 떠올리면 쉽습니다.',
      context: '옷의 구멍을 때우거나 정원의 작은 땅, 혹은 일시적인 문제 해결책을 말할 때 주로 쓰입니다.',
      synonymAntonym: '구멍을 메우는 \'mend\'와 비슷하지만, 아예 찢어버리는 \'tear\'와는 반대됩니다.',
    }),
    {
      definition: 'A small piece of material used to mend a tear or a hole, or a tiny area of land.',
      synonyms: ['reinforcement', 'scrap', 'fix'],
      antonyms: ['hole', 'tear', 'void'],
      exampleSentences: [
        { en: 'The tailor applied a leather piece to the elbow of the worn-out jacket.', ko: '재단사는 낡은 재킷의 팔꿈치 부분에 가죽 조각을 덧대어 기웠다.' },
        { en: 'Farmers planted a small vegetable plot in the sunny corner of the backyard.', ko: '농부들은 뒷마당의 햇볕 잘 드는 구석에 작은 채소 밭을 일구었다.' },
      ],
      wordDistractors: ['match', 'catch', 'hatch'],
      definitionDistractors: [
        'a large unbroken surface covering an entire area',
        'a deep cut or wound requiring medical attention',
        'a permanent stain that cannot be removed from fabric',
      ],
    }
  ),
  word('patent', '전매특허의', 8, 'adjective',
    ['대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인'],
    tips({
      etymology: '라틴어 patere(열려 있다)에서 유래하여 누구나 볼 수 있게 공개된 독점권을 의미합니다.',
      visual: '발명품 옆에 커다란 금색 도장이 찍힌 증명서가 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '패턴(pattern)과 발음이 비슷하지만, 독점적인 권리인 \'특허\'를 뜻한다는 점에 주의하세요.',
      context: '법률이나 비즈니스 상황에서 특정 기술이나 디자인의 독점적 소유권을 주장할 때 주로 쓰입니다.',
      synonymAntonym: 'exclusive와 유사하며, 누구에게나 허용되는 public과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Protected by a legal document that gives an inventor the sole right to make, use, or sell an invention for a set period.',
      synonyms: ['exclusive', 'proprietary', 'licensed'],
      antonyms: ['public', 'unprotected', 'common'],
      exampleSentences: [
        { en: 'The pharmaceutical company holds a 20-year legal right for their new drug formula.', ko: '그 제약 회사는 신약 제조법에 대해 20년 동안의 전매특허권을 보유하고 있다.' },
        { en: 'Engineers are working hard to secure protection for their innovative engine design.', ko: '엔지니어들은 자신들의 혁신적인 엔진 설계에 대한 특허를 확보하기 위해 열심히 노력하고 있다.' },
      ],
      wordDistractors: ['pattern', 'patient', 'potent'],
      definitionDistractors: [
        'available for anyone to use without any legal restrictions',
        'hidden from public view and kept strictly confidential',
        'produced in large quantities for mass market consumption',
      ],
    }
  ),
  word('path', '길, 경로', 4, 'noun',
    ['광장', '도로', '골목', '다리', '터널', '교차로', '계단', '통로', '보도', '고속도로'],
    tips({
      etymology: '고대 영어 \'pæth\'에서 유래하여 발이 닿는 좁은 길을 의미하며, 이는 큰 도로와 대비되는 작고 소박한 통로를 연상시킵니다.',
      visual: '숲속에 사람이 겨우 지나갈 정도로 좁고 작게 난 오솔길을 상상해 보세요.',
      soundAlike: '발음이 \'패스\'와 비슷하므로, 좁은 길을 \'패스(pass)\'해서 지나가는 작은 통로라고 기억하세요.',
      context: '정원의 꽃들 사이에 놓인 아주 작고 아담한 산책로를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '넓은 대로를 뜻하는 highway나 street와 반대되는 아주 좁고 작은 길을 떠올리면 쉽습니다.',
    }),
    {
      definition: 'A narrow track or way made by the footsteps of people or animals, often smaller than a main road.',
      synonyms: ['trail', 'track', 'lane'],
      antonyms: ['highway', 'thoroughfare', 'boulevard'],
      exampleSentences: [
        { en: 'A narrow dirt trail led us through the dense forest to the hidden lake.', ko: '좁은 흙길이 울창한 숲을 지나 숨겨진 호수로 우리를 안내했습니다.' },
        { en: 'The garden features a small stone walkway winding between the rose bushes.', ko: '그 정원에는 장미 덤불 사이로 굽이굽이 이어진 작은 돌길이 있습니다.' },
      ],
      wordDistractors: ['bath', 'math', 'patch'],
      definitionDistractors: [
        'a wide paved road designed for high-speed traffic',
        'a covered tunnel built beneath a body of water',
        'a large open field used for agricultural purposes',
      ],
    }
  ),
  word('patient', '환자', 5, 'noun',
    ['의사', '간호사', '약사', '보호자', '방문객', '직원', '상담사', '자원봉사자', '치료사', '수술사'],
    tips({
      etymology: '라틴어 \'pati\'에서 유래하여 \'고통을 견디는 사람\'이라는 의미에서 시작되었습니다.',
      visual: '병원 대기실에서 화내지 않고 조용히 자기 차례를 기다리는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'페이션트\'인데, \'폐(p)를 끼치지 않고 션(sh)하게 기다리는 트(t)기한 사람\'으로 기억하세요.',
      context: '의료 상황에서는 치료를 받는 \'환자\'를 뜻하고, 성격 묘사 시에는 \'참을성 있는\' 상태를 뜻합니다.',
      synonymAntonym: '불평 없이 기다리는 tolerant와 대조되는, 조급함을 못 참는 impatient를 함께 외우면 좋습니다.',
    }),
    {
      definition: 'A person who is receiving medical care from a doctor or hospital.',
      synonyms: ['invalid', 'case', 'subject'],
      antonyms: ['doctor', 'physician', 'caregiver'],
      exampleSentences: [
        { en: 'The nurse checked the vital signs of every individual in the ward.', ko: '간호사는 병동에 있는 모든 환자의 활력 징후를 확인했습니다.' },
        { en: 'Medical records must be kept confidential to protect the privacy of the person under care.', ko: '치료를 받는 사람의 사생활을 보호하기 위해 의료 기록은 기밀로 유지되어야 합니다.' },
      ],
      wordDistractors: ['patent', 'patron', 'patriot'],
      definitionDistractors: [
        'a medical professional who treats illnesses and injuries',
        'a visitor who comes to a hospital to see a friend',
        'a researcher conducting clinical trials on new drugs',
      ],
    }
  ),
  word('patrol', '순회', 9, 'noun',
    ['정체', '방치', '침입', '도주', '고립', '매복', '은폐', '추격', '수색', '포위'],
    tips({
      etymology: '프랑스어 \'patrouiller\'에서 유래했으며, 원래 \'진흙탕을 휘젓다\'라는 뜻에서 발로 밟으며 돌아다니는 순찰의 의미가 되었습니다.',
      visual: '경찰차나 경비원이 일정한 경로를 따라 동네를 천천히 돌며 살피는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'패트롤\'인데, \'패(팀)\'를 짜서 \'트롤(돌다)\'하며 감시하는 상황으로 기억하면 쉽습니다.',
      context: '군대나 경찰 조직에서 치안 유지나 경계를 위해 정기적으로 구역을 도는 행위를 말할 때 주로 쓰입니다.',
      synonymAntonym: '감시를 뜻하는 surveillance와 비슷하지만, 직접 돌아다닌다는 점에서 차이가 있으며, 방치나 무시와는 반대됩니다.',
    }),
    {
      definition: 'The act of moving around an area at regular intervals in order to guard it or ensure that everything is in order.',
      synonyms: ['monitoring', 'surveillance', 'watch'],
      antonyms: ['neglect', 'desertion', 'abandonment'],
      exampleSentences: [
        { en: 'The security guard completed his nightly rounds around the warehouse perimeter.', ko: '보안 요원은 창고 주변 구역에 대한 야간 순회를 마쳤습니다.' },
        { en: 'Police officers increased their presence in the neighborhood to prevent local crime.', ko: '경찰관들은 지역 범죄를 예방하기 위해 동네 순회를 강화했습니다.' },
      ],
      wordDistractors: ['parole', 'petrol', 'patron'],
      definitionDistractors: [
        'a formal investigation conducted by a detective agency',
        'a one-time inspection of a building for safety violations',
        'a stationary guard post at the entrance of a facility',
      ],
    }
  ),
  word('pattern', '무늬', 6, 'noun',
    ['줄무늬', '색상', '질감', '모양', '형태', '구조', '배열', '장식', '문양', '도안'],
    tips({
      etymology: '라틴어 \'patronus(보호자)\'에서 유래하여, 원래 본보기가 되는 틀을 의미하다가 반복되는 디자인이나 양식을 뜻하게 되었습니다.',
      visual: '벽지나 옷감에 꽃이나 기하학적 도형이 일정한 간격으로 반복되어 나타나는 모습을 상상해 보세요.',
      soundAlike: '패턴(pattern)은 한국어에서도 \'패턴\'이라는 외래어로 자주 사용되므로 기억하기 쉽습니다.',
      context: '패션, 인테리어, 수학 등에서 규칙적으로 반복되는 디자인이나 양식을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'design과 유사하며, 무질서를 뜻하는 chaos와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a repeated decorative design or a regular and intelligible arrangement of elements',
      synonyms: ['design', 'motif', 'arrangement'],
      antonyms: ['chaos', 'disorder', 'randomness'],
      exampleSentences: [
        { en: 'The wallpaper had a beautiful floral pattern that brightened the entire room.', ko: '그 벽지에는 방 전체를 환하게 만드는 아름다운 꽃무늬가 있었습니다.' },
        { en: 'Scientists discovered an interesting pattern in the data that helped explain the phenomenon.', ko: '과학자들은 현상을 설명하는 데 도움이 되는 흥미로운 패턴을 데이터에서 발견했습니다.' },
      ],
      wordDistractors: ['patent', 'patron', 'flatten'],
      definitionDistractors: [
        'a single unique occurrence that never repeats itself',
        'a random collection of unrelated data points',
        'a sudden disruption in an otherwise stable process',
      ],
    }
  ),
  word('pause', '중지', 7, 'noun',
    ['슈퍼맨', '위층(으로, 의)', '정의', '다과, 가벼운 음식물', '삭감, 공제', '훈련; 드릴, 송곳', '공격, 타격', '화려한 모임, 무리', '청소년', '10월'],
    tips({
      etymology: '그리스어 \'pausis\'에서 유래하여 활동이 잠시 멈추는 상태를 의미합니다.',
      visual: '비디오 재생 중 일시정지 버튼(두 줄 모양)을 누르는 장면을 상상해 보세요.',
      soundAlike: '\'포즈(pose)\'와 발음이 비슷하지만, 모델의 자세가 아니라 동작의 멈춤을 뜻합니다.',
      context: '대화 도중이나 음악 연주 사이에 잠시 숨을 고르는 짧은 중단 상황에 자주 쓰입니다.',
      synonymAntonym: 'break와 유사하지만, 시작과 끝 사이의 일시적인 멈춤이라는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'A temporary stop or rest in an action or speech.',
      synonyms: ['break', 'intermission', 'hiatus'],
      antonyms: ['continuation', 'persistence', 'progression'],
      exampleSentences: [
        { en: 'There was a long silence after his question, marking a dramatic moment in the conversation.', ko: '그의 질문 뒤에 긴 침묵이 이어졌고, 이는 대화에서 극적인 중지의 순간이 되었습니다.' },
        { en: 'The music resumed after a brief interval to allow the audience to settle down.', ko: '청중이 진정될 수 있도록 짧은 중지 후에 음악이 다시 시작되었습니다.' },
      ],
      wordDistractors: ['cause', 'gauze', 'clause'],
      definitionDistractors: [
        'a permanent ending of an activity or performance',
        'a rapid acceleration in the speed of an action',
        'a scheduled beginning of a new project or task',
      ],
    }
  ),
];
