import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch15: VocabItem[] = [
  word('Defer', '미루다', 7, 'verb',
    ['단행하다', '즉시하다', '서두르다', '강행하다', '밀쳐내다', '촉진하다', '재촉하다', '당장하다', '급행하다', '강제하다'],
    tips({
      etymology: 'de(아래로/뒤로) + fer(나르다)가 합쳐져 \'나중으로 옮기다\'라는 의미가 되었습니다.',
      visual: '달력에 적힌 일정을 손가락으로 다음 달로 쓱 미는 장면을 상상해 보세요.',
      soundAlike: '디퍼(Defer) 발음이 \'뒤로\'와 비슷하게 들린다고 생각하면 기억하기 쉽습니다.',
      context: '주로 결정, 지불, 입학 등을 나중으로 미룰 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '동의어로는 postpone, delay, put off가 있고, 반의어로는 hasten, expedite, advance가 있습니다.',
    }),
    {
      definition: 'To delay an action or event until a future date or time.',
      synonyms: ['postpone', 'delay', 'suspend'],
      antonyms: ['hasten', 'expedite', 'advance'],
      exampleSentences: [
        { en: 'He decided to defer his decision until next week.', ko: '그는 다음 주까지 결정을 미루기로 했다.' },
        { en: 'The bank agreed to defer the loan payment.', ko: '은행은 대출 상환을 유예하기로 했다.' },
      ],
    }
  ),
  word('Defy', '대항하다', 7, 'verb',
    ['복종하다', '따르다', '굴복하다', '순응하다', '항복하다', '순종하다', '응하다', '굴종하다', '수용하다', '동의하다'],
    tips({
      etymology: '라틴어 dis-(반대)와 fidare(믿다)에서 유래하여, 기존의 신뢰나 충성을 저버리고 정면으로 맞선다는 의미를 담고 있습니다.',
      visual: '거대한 폭풍우 속에서도 돛을 내리지 않고 거친 파도에 정면으로 맞서 나아가는 배의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'뒤파이\'와 비슷하므로, 상대방의 뒤가 아닌 정면에서 \'파이(fight)\'하며 대항하는 장면을 연상하세요.',
      context: '권위나 명령에 불복종할 때 주로 쓰이지만, \'defy gravity(중력을 거스르다)\'처럼 물리적 한계를 뛰어넘는 상황에도 자주 사용됩니다.',
      synonymAntonym: 'resist, challenge와 같은 강한 저항의 단어들과 친하며, 순순히 따르는 obey나 yield와는 정반대의 성격을 가집니다.',
    }),
    {
      definition: 'To openly resist or refuse to obey a person, a rule, or a law, or to appear to be impossible to overcome.',
      synonyms: ['resist', 'challenge', 'confront'],
      antonyms: ['obey', 'submit', 'yield'],
      exampleSentences: [
        { en: 'The brave soldiers decided to defy the enemy\'s ultimatum and continue fighting.', ko: '용감한 군인들은 적의 최후통첩에 대항하여 계속 싸우기로 결심했다.' },
        { en: 'The beauty of the landscape seemed to defy any written description.', ko: '그 풍경의 아름다움은 그 어떤 서술로도 표현하기 불가능해 보였다.' },
      ],
    }
  ),
  word('Delegate', '위임하다', 7, 'verb',
    ['독단하다', '독점하다', '보유하다', '집행하다', '회수하다', '거두다', '고수하다', '간직하다', '직행하다', '장악하다'],
    tips({
      etymology: '라틴어 \'de(멀리)\'와 \'legare(보내다)\'가 결합된 단어로, 자신의 권한을 다른 사람에게 멀리 보내어 대신 처리하게 한다는 의미에서 유래했습니다.',
      visual: '바쁜 팀장이 책상 위에 쌓인 서류 더미 중 일부를 신뢰하는 팀원에게 웃으며 건네주는 모습을 상상해 보세요.',
      soundAlike: '\'대리(delegate)\'인에게 업무의 \'게이트(gate)\'를 열어주어 권한을 넘겨준다고 기억하면 쉽습니다.',
      context: '주로 경영이나 조직 관리에서 리더가 모든 일을 직접 하지 않고 팀원들에게 적절히 업무를 배분할 때 자주 쓰입니다.',
      synonymAntonym: 'assign, entrust와 같은 유의어는 책임을 넘기는 뉘앙스이며, 반대로 권한을 주지 않고 쥐고 있는 것은 retain이나 withhold라고 합니다.',
    }),
    {
      definition: 'To give a particular job, duty, or right to someone else so that they do it for you.',
      synonyms: ['assign', 'entrust', 'empower'],
      antonyms: ['retain', 'keep', 'withhold'],
      exampleSentences: [
        { en: 'A successful manager knows how to delegate tasks to their team.', ko: '성공적인 관리자는 팀원에게 업무를 위임하는 방법을 압니다.' },
        { en: 'The director decided to delegate the decision-making authority to the local branch.', ko: '이사는 의사 결정 권한을 현지 지사에 위임하기로 결정했습니다.' },
      ],
    }
  ),
  word('Delineate', '묘사하다', 7, 'verb',
    ['흐리다', '모호하게하다', '숨기다', '왜곡하다', '어지럽히다', '혼동하다', '가리다', '지우다', '뭉뚱그리다', '은폐하다'],
    tips({
      etymology: '라틴어 de(완전히)와 lineare(선을 긋다)가 결합되어, 사물의 테두리를 선으로 명확히 그린다는 의미에서 유래했습니다.',
      visual: '복잡한 설계도면 위에서 특정 구역의 경계선을 굵은 펜으로 뚜렷하게 덧칠하는 장면을 상상해 보세요.',
      soundAlike: '단어 중간에 들어있는 \'line(라인)\'에 집중하세요. 선을 그어 경계를 확실히 정하는 동작과 연결됩니다.',
      context: '단순한 묘사를 넘어 법적 계약서의 책임 범위나 프로젝트의 단계별 경계선을 아주 정밀하게 규정할 때 자주 쓰입니다.',
      synonymAntonym: '정확히 그리는 describe와는 유의어 관계이며, 경계를 흐릿하게 만드는 obscure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To represent or portray something using sharp outlines or detailed explanation.',
      synonyms: ['describe', 'outline', 'depict'],
      antonyms: ['obscure', 'confuse', 'distort'],
      exampleSentences: [
        { en: 'The law clearly defines the boundaries that delineate the private property.', ko: '그 법은 사유 재산을 구분 짓는 경계선을 명확하게 규정하고 있습니다.' },
        { en: 'The architect will delineate the main features of the building in his presentation.', ko: '건축가는 발표에서 건물의 주요 특징들을 상세하게 설명할 것입니다.' },
      ],
    }
  ),
  word('Demeanor', '태도', 7, 'noun',
    ['본질', '내면', '의도', '속마음', '실체', '진심', '핵심', '정체', '영혼', '본성'],
    tips({
      etymology: '프랑스어 demener(이끌다/처신하다)에서 유래하여 겉으로 드러나는 몸가짐을 뜻하게 되었습니다.',
      visual: '면접장에서 허리를 곧게 펴고 앉아 있는 지원자의 차분한 겉모습을 상상해 보세요.',
      soundAlike: '디미너(Demeanor)는 \'매너(manner)\'와 발음이 비슷하여 태도라는 뜻을 연상하기 좋습니다.',
      context: '그 사람의 성격보다는 겉으로 풍겨져 나오는 분위기나 행동 방식을 묘사할 때 씁니다.',
      synonymAntonym: '동의어로는 conduct, bearing, manner가 있고, 반의어로는 essence, nature, soul이 있습니다.',
    }),
    {
      definition: 'The outward behavior, bearing, or appearance of a person towards others.',
      synonyms: ['conduct', 'bearing', 'manner'],
      antonyms: ['essence', 'nature', 'character'],
      exampleSentences: [
        { en: 'His calm demeanor put everyone at ease during the crisis.', ko: '위기 상황에서 그의 차분한 태도는 모든 사람을 안심시켰다.' },
        { en: 'Her professional demeanor impressed the interviewers immediately.', ko: '그녀의 전문적인 태도는 즉시 면접관들에게 깊은 인상을 주었다.' },
      ],
    }
  ),
  word('Denounce', '비난하다', 7, 'verb',
    ['칭찬하다', '찬미하다', '옹호하다', '지지하다', '찬성하다', '장려하다', '승인하다', '추켜세우다', '환영하다', '격려하다'],
    tips({
      etymology: 'de(아래로/나쁘게) + nounce(알리다)가 합쳐져 \'공개적으로 나쁘게 알리다\'라는 뜻에서 유래했습니다.',
      visual: '뉴스 회견장에서 마이크를 잡고 잘못된 정책을 강력하게 비판하는 정치인의 모습을 상상해 보세요.',
      soundAlike: '디나운스(Denounce)는 \'다 나오라고 해서(de-nounce) 혼내다\'라는 상황으로 연상하면 쉽습니다.',
      context: '개인적인 험담보다는 사회적, 정치적 이슈나 부당한 행위에 대해 공식적으로 비판할 때 주로 쓰입니다.',
      synonymAntonym: 'condemn과 유사하며, 반대로 칭찬하고 지지하는 praise나 endorse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To publicly state that someone or something is bad or wrong in a formal way.',
      synonyms: ['condemn', 'criticize', 'censure'],
      antonyms: ['praise', 'applaud', 'endorse'],
      exampleSentences: [
        { en: 'The leader publicly denounced the violence.', ko: '지도자는 그 폭력을 공개적으로 비난했다.' },
        { en: 'Several countries denounced the human rights violation.', ko: '여러 국가가 그 인권 침해를 비난했다.' },
      ],
    }
  ),
  word('Deplete', '고갈시키다', 7, 'verb',
    ['채우다', '보충하다', '증가시키다', '축적하다', '풍부하게하다', '보강하다', '충전하다', '증대하다', '쌓다', '늘리다'],
    tips({
      etymology: '라틴어 \'de(반대/제거)\'와 \'plere(채우다)\'가 결합되어, 가득 차 있던 것을 비워낸다는 의미에서 유래했습니다.',
      visual: '스마트폰 배터리 잔량 표시가 1%를 향해 빨간색으로 변하며 줄어드는 이미지를 떠올려 보세요.',
      soundAlike: '\'디플리트\'를 \'다 풀리다\'로 기억해 보세요. 꽉 묶여 있던 자원 주머니가 다 풀려서 내용물이 빠져나가는 느낌입니다.',
      context: '천연자원, 은행 잔고, 체력, 또는 오존층처럼 한정된 자원이 소모되어 바닥을 드러낼 때 주로 쓰입니다.',
      synonymAntonym: 'exhaust는 완전히 다 써버리는 느낌이며, 반대로 replenish는 다시 가득 채워 넣는 보충의 의미를 가집니다.',
    }),
    {
      definition: 'To significantly decrease the amount or quantity of resources, funds, or energy available.',
      synonyms: ['exhaust', 'drain', 'consume'],
      antonyms: ['replenish', 'refill', 'restore'],
      exampleSentences: [
        { en: 'Overfishing has severely depleted the fish population in many oceans.', ko: '과도한 어업은 많은 해양의 물고기 개체 수를 심각하게 고갈시켰습니다.' },
        { en: 'Running a marathon without proper hydration will quickly deplete your body\'s energy reserves.', ko: '적절한 수분 섭취 없이 마라톤을 하는 것은 신체의 에너지 비축량을 빠르게 고갈시킬 것입니다.' },
      ],
    }
  ),
  word('Deploy', '배치하다', 7, 'verb',
    ['철수하다', '해제하다', '회수하다', '분산하다', '해체하다', '거두다', '복귀하다', '중단하다', '취소하다', '철거하다'],
    tips({
      etymology: '라틴어 \'displicare\'에서 유래하여 \'de(반대)\'와 \'ply(접다)\'가 결합된 단어입니다. 즉, \'접혀 있던 것을 펼치다\'라는 어원을 가집니다.',
      visual: '군사 작전 지도 위에 접혀 있던 병력 배치도를 넓게 펼쳐서 병사들을 제자리에 세우는 장면을 상상해 보세요.',
      soundAlike: '\'뒤로(De) 풀어서(ploy) 놓다\'라고 발음을 연결해 기억하면 전술적으로 풀어 놓는 이미지가 쉽게 떠오릅니다.',
      context: '군대 병력의 전략적 배치뿐만 아니라, IT 분야에서 완성된 소프트웨어를 실제 서버 환경에 적용(배포)할 때도 필수적으로 사용됩니다.',
      synonymAntonym: '전략적으로 위치시키는 position과 유사하며, 반대로 불러들이거나 철수시키는 withdraw와 대조를 이룹니다.',
    }),
    {
      definition: 'To move, spread out, or place resources or military forces into a position of readiness for a particular action.',
      synonyms: ['position', 'station', 'utilize'],
      antonyms: ['withdraw', 'recall', 'retract'],
      exampleSentences: [
        { en: 'The United Nations decided to deploy peacekeeping forces to the conflict zone.', ko: '유엔은 분쟁 지역에 평화 유지군을 배치하기로 결정했다.' },
        { en: 'The engineering team is ready to deploy the latest update to the production server.', ko: '엔지니어링 팀은 운영 서버에 최신 업데이트를 배포할 준비가 되었다.' },
      ],
    }
  ),
  word('Deprecate', '비난하다', 7, 'verb',
    ['권장하다', '촉진하다', '승인하다', '선호하다', '옹호하다', '찬성하다', '장려하다', '지지하다', '추천하다', '수용하다'],
    tips({
      etymology: '라틴어 \'de-\'(반대/멀리)와 \'precari\'(기도하다)가 결합되어, 나쁜 일이 생기지 않기를 기도하며 반대하거나 가치를 깎아내린다는 뜻에서 유래했습니다.',
      visual: '오래된 프로그램 아이콘 위에 빨간색 \'X\' 표시나 \'사용 중단\' 경고 스티커가 붙어 있는 모습을 떠올려 보세요.',
      soundAlike: '디프리케이트(Deprecate) -> \'뒤풀이\'를 \'캐이트(hate)\'하다. 즉, 단체 뒤풀이 문화를 반대하고 비난하는 상황으로 기억하세요.',
      context: 'IT 업계에서는 새로운 기술이 나왔을 때 구버전 기능을 \'더 이상 권장하지 않음\'으로 설정할 때 필수적으로 사용하는 용어입니다.',
      synonymAntonym: '가치를 깎아내리는 disparage와 유사하며, 공식적으로 승인하거나 추천하는 endorse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To express strong disapproval of something or to officially discourage the use of a particular feature, often because it is being replaced.',
      synonyms: ['disparage', 'belittle', 'denigrate'],
      antonyms: ['approve', 'commend', 'endorse'],
      exampleSentences: [
        { en: 'The software developers decided to deprecate the old API in the latest update.', ko: '소프트웨어 개발자들은 최신 업데이트에서 이전 API 사용을 권장하지 않기로 결정했다.' },
        { en: 'Many critics deprecate the use of violence in modern cinema.', ko: '많은 비평가들이 현대 영화에서의 폭력 사용을 비난한다.' },
      ],
    }
  ),
  word('Destitute', '궁핍한', 7, 'adjective',
    ['부유한', '풍요한', '풍부한', '넉넉한', '여유로운', '호화로운', '부강한', '유복한', '충분한', '안정된'],
    tips({
      etymology: '라틴어 de(분리)와 stare(서다)에서 유래하여, 사회적 기반 위에 서지 못하고 멀어져 버린 상태를 의미합니다.',
      visual: '텅 빈 냉장고와 구멍 난 신발을 신고 길거리에 서 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '디스티튜트(Destitute) -> \'디스(this) 티(T) 툭(tute)\', 이 티셔츠 한 장만 툭 걸치고 있을 정도로 가난한 모습.',
      context: '단순히 돈이 적은 상태가 아니라, 음식, 옷, 집 같은 기본적인 생존 수단이 아예 없는 극빈층을 표현할 때 주로 쓰입니다.',
      synonymAntonym: '동의어 impoverished는 \'가난해진\' 상태를, 반의어 affluent는 \'넘쳐흐를 정도로 부유한\' 상태를 강조합니다.',
    }),
    {
      definition: 'Extremely poor and lacking the means to provide for oneself with basic necessities like food, clothing, and shelter.',
      synonyms: ['impoverished', 'penniless', 'indigent'],
      antonyms: ['affluent', 'wealthy', 'prosperous'],
      exampleSentences: [
        { en: 'The charity provides food and shelter for destitute families in the city.', ko: '그 자선 단체는 도시의 궁핍한 가정들에게 음식과 숙소를 제공한다.' },
        { en: 'After the stock market crash, many investors were left destitute.', ko: '주식 시장 폭락 이후, 많은 투자자들이 완전히 빈털터리가 되었다.' },
      ],
    }
  ),
  word('Deter', '억제하다', 7, 'verb',
    ['촉진하다', '장려하다', '유도하다', '선동하다', '재촉하다', '부추기다', '고무하다', '돕다', '허용하다', '권장하다'],
    tips({
      etymology: '라틴어 de(멀리)와 terrere(겁주다)가 결합된 단어로, 상대에게 공포나 불안감을 주어 행동을 포기하게 만든다는 어원을 가지고 있습니다.',
      visual: '건물 입구에 설치된 CCTV 카메라가 범죄를 저지르려던 사람의 마음을 돌려놓는 장면을 떠올려 보세요.',
      soundAlike: '디터(Deter) -> \'뒤터\'. 뒤를 터서 도망갈 길을 열어줄 테니 나쁜 짓은 그만두고 물러나라고 억제하는 상황.',
      context: '주로 법적 처벌, 보안 장치, 혹은 부정적인 결과에 대한 경고를 통해 누군가의 의지를 꺾을 때 자주 쓰입니다.',
      synonymAntonym: 'discourage나 prevent와 비슷하게 쓰이며, 반대로 행동을 부추기는 encourage나 stimulate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To prevent or discourage an individual from acting by making them understand the potential difficulties or unpleasant results.',
      synonyms: ['discourage', 'prevent', 'dissuade'],
      antonyms: ['encourage', 'incite', 'stimulate'],
      exampleSentences: [
        { en: 'High fines are intended to deter people from speeding on the highway.', ko: '높은 벌금은 사람들이 고속도로에서 과속하는 것을 억제하기 위한 목적이다.' },
        { en: 'The presence of a guard dog will deter most intruders.', ko: '경비견의 존재는 대부분의 침입자를 단념시킬 것이다.' },
      ],
    }
  ),
  word('Deviate', '벗어나다', 7, 'verb',
    ['따르다', '준수하다', '유지하다', '수렴하다', '일치하다', '순응하다', '고수하다', '동조하다', '지키다', '합치하다'],
    tips({
      etymology: '라틴어 de(떨어져)와 via(길)가 결합된 단어로, 원래 가야 할 길에서 멀어진다는 뜻에서 유래했습니다.',
      visual: '고속도로를 달리던 자동차가 갑자기 비포장도로인 옆길로 핸들을 꺾는 장면을 상상해 보세요.',
      soundAlike: '디비에이트 -> \'TV에 이트(eat)\', 공부해야 할 정해진 시간표에서 벗어나 TV 보며 먹고 있는 상황을 떠올려 보세요.',
      context: '단순히 물리적인 이동뿐만 아니라 사회적 규범, 통계적 수치, 원래의 계획 등에서 어긋날 때 폭넓게 사용됩니다.',
      synonymAntonym: 'diverge나 stray는 경로를 이탈할 때 쓰이며, 반대로 규칙을 엄수할 때는 conform이나 adhere를 사용합니다.',
    }),
    {
      definition: 'To turn aside or depart from an established course, accepted standard, or planned line of action.',
      synonyms: ['diverge', 'stray', 'digress'],
      antonyms: ['conform', 'adhere', 'follow'],
      exampleSentences: [
        { en: 'The aircraft had to deviate from its original flight path due to the storm.', ko: '폭풍 때문에 그 항공기는 원래의 비행 경로에서 벗어나야 했다.' },
        { en: 'He never allowed himself to deviate from his strict daily routine.', ko: '그는 자신의 엄격한 일과에서 결코 벗어나는 법이 없었다.' },
      ],
    }
  ),
  word('Devoid', '~이 없는', 7, 'adjective',
    ['가득한', '충만한', '풍부한', '넘치는', '풍요한', '완전한', '밀집한', '충분한', '빽빽한', '유복한'],
    tips({
      etymology: '접두사 de-(완전히)와 void(텅 빈)가 결합하여, 어떤 공간이나 대상이 완전히 비어 있는 상태를 의미합니다.',
      visual: '물이 한 방울도 남지 않고 바닥이 쩍쩍 갈라진 메마른 저수지의 모습을 떠올려 보세요.',
      soundAlike: '\'디보이드\'를 \'뒤(the) 보이드(void)\'로 연상하여, 뒤를 돌아봐도 아무것도 보이지 않는 텅 빈 상태로 기억하세요.',
      context: '주로 \'devoid of something\'의 형태로 사용되며, 감정, 생명력, 희망 등이 전혀 없을 때 자주 쓰입니다.',
      synonymAntonym: 'lacking, empty와 비슷하며, 가득 차 있다는 뜻의 full, replete과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Entirely lacking or free from something, especially a quality or feeling.',
      synonyms: ['lacking', 'empty', 'vacant'],
      antonyms: ['full', 'replete', 'abundant'],
      exampleSentences: [
        { en: 'The landscape was bleak and devoid of any signs of life.', ko: '그 풍경은 황량했고 어떤 생명의 흔적도 없었다.' },
        { en: 'Her voice was completely devoid of emotion as she told the story.', ko: '그녀가 이야기를 할 때 그녀의 목소리에는 감정이 전혀 실려 있지 않았다.' },
      ],
    }
  ),
  word('Dexterity', '솜씨', 7, 'noun',
    ['서툼', '어색함', '미숙', '재주없음', '둔함', '어설픔', '무능', '둔감', '비숙련', '투박함'],
    tips({
      etymology: '라틴어 dexter(오른손의)에서 유래하여, 전통적으로 오른손잡이가 도구를 잘 다루듯 능숙함을 뜻합니다.',
      visual: '작은 바늘귀에 실을 한 번에 꿰거나 시계의 미세한 부품을 정교하게 조립하는 손놀림을 상상해 보세요.',
      soundAlike: '게임 캐릭터의 능력치 중 민첩성을 뜻하는 \'DEX\'가 바로 이 단어의 줄임말입니다.',
      context: '단순히 손재주(manual dexterity)뿐만 아니라, 복잡한 문제를 빠르게 해결하는 지적 유연성(mental dexterity)을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '유사어로는 skill, adroitness가 있으며, 반대어로는 서투름을 뜻하는 clumsiness, ineptitude가 있습니다.',
    }),
    {
      definition: 'The ability to perform tasks with precision and ease, particularly when using the hands or the mind.',
      synonyms: ['skill', 'adroitness', 'finesse'],
      antonyms: ['clumsiness', 'ineptitude', 'awkwardness'],
      exampleSentences: [
        { en: 'The surgeon\'s dexterity allowed him to perform the delicate operation with minimal bleeding.', ko: '외과 의사의 숙련된 솜씨 덕분에 출혈을 최소화하며 정교한 수술을 마칠 수 있었다.' },
        { en: 'Playing a musical instrument requires both physical dexterity and a good ear for rhythm.', ko: '악기를 연주하는 것은 신체적인 능숙함과 리듬을 타는 좋은 청력 모두를 필요로 한다.' },
      ],
    }
  ),
  word('Dichotomy', '이분법', 7, 'noun',
    ['통합', '융합', '연속체', '공존', '조화', '결합', '일치', '화합', '단일성', '연결'],
    tips({
      etymology: '그리스어 \'dicho(둘로)\'와 \'tomy(자르다)\'가 결합된 단어로, 하나를 두 조각으로 쪼갠다는 어원을 가지고 있습니다.',
      visual: '검은색과 흰색으로만 이루어진 체스판처럼, 중간 지대 없이 양극단으로 갈라진 선명한 경계선을 떠올려 보세요.',
      soundAlike: '\'다이커터미\'를 \'다(all) 2개로 컷(cut)함\'으로 기억하면, 대상을 두 그룹으로 딱 잘라 나누는 이미지가 쉽게 연상됩니다.',
      context: '철학이나 사회학에서 \'선과 악\', \'이론과 실제\', \'도시와 농촌\'처럼 서로 대립하는 두 개념을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 나누는 division이나 separation이 동의어이며, 하나로 합치는 unity나 integration이 반대 개념입니다.',
    }),
    {
      definition: 'A division into two especially mutually exclusive or contradictory groups or entities.',
      synonyms: ['division', 'separation', 'split'],
      antonyms: ['unity', 'integration', 'fusion'],
      exampleSentences: [
        { en: 'The dichotomy between what he says and what he does is striking.', ko: '그가 말하는 것과 행동하는 것 사이의 이분법적 차이는 놀라울 정도다.' },
        { en: 'In nature, the dichotomy of predator and prey is essential for balance.', ko: '자연에서 포식자와 피식자의 이분법적 관계는 균형을 위해 필수적이다.' },
      ],
    }
  ),
  word('Diffuse', '확산하다', 7, 'verb',
    ['집중하다', '모으다', '한정하다', '밀집하다', '수렴하다', '축소하다', '압축하다', '고정하다', '가두다', '응축하다'],
    tips({
      etymology: '라틴어 \'dis(멀리)\'와 \'fundere(붓다)\'가 결합된 단어로, 액체를 쏟아 사방으로 흩뿌린다는 어원을 가지고 있습니다.',
      visual: '물잔에 떨어뜨린 잉크 한 방울이 형체 없이 서서히 전체로 번져나가는 이미지를 떠올려 보세요.',
      soundAlike: '방 안 가득 향기를 퍼뜨리는 \'디퓨저(diffuser)\'라는 단어와 발음이 같아 연상하기 쉽습니다.',
      context: '물리적인 빛이나 냄새뿐만 아니라 소문, 지식, 문화 등이 넓은 지역으로 퍼져 나가는 상황에 두루 쓰입니다.',
      synonymAntonym: '사방으로 흩어지는 spread와 유사하며, 한곳으로 모으는 concentrate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To spread out over a large area or to make something become known by many people.',
      synonyms: ['spread', 'disperse', 'scatter'],
      antonyms: ['concentrate', 'condense', 'collect'],
      exampleSentences: [
        { en: 'The internet has made it much easier to diffuse information across the globe instantly.', ko: '인터넷은 전 세계에 정보를 즉각적으로 확산시키는 것을 훨씬 더 쉽게 만들었다.' },
        { en: 'The fan helped to diffuse the cooling air throughout the entire office.', ko: '선풍기는 시원한 공기를 사무실 전체로 퍼뜨리는 데 도움을 주었다.' },
      ],
    }
  ),
  word('Digress', '본론에서 벗어나다', 7, 'verb',
    ['집중하다', '직행하다', '수렴하다', '따르다', '일치하다', '몰입하다', '고수하다', '유지하다', '정진하다', '관통하다'],
    tips({
      etymology: 'di(떨어져)와 gress(가다)가 합쳐져 원래 가려던 길에서 벗어나는 것을 의미합니다.',
      visual: '고속도로를 달리던 차가 갑자기 옆길인 국도로 빠져나가는 장면을 상상해 보세요.',
      soundAlike: '다이그레스(Digress)는 \'다르게(di) 가다(gress)\'라고 소리 내어 외우면 쉽습니다.',
      context: '주로 토론이나 연설 중에 \'잠시 딴소리 좀 하자면\'이라고 할 때 자주 쓰입니다.',
      synonymAntonym: '동의어는 wander, stray, deviate이며 반의어는 focus, concentrate, persist입니다.',
    }),
    {
      definition: 'To leave the main subject temporarily in speech or writing.',
      synonyms: ['wander', 'stray', 'deviate'],
      antonyms: ['focus', 'concentrate', 'persist'],
      exampleSentences: [
        { en: 'Let me digress for a moment to explain the background.', ko: '배경을 설명하기 위해 잠시 본론에서 벗어나겠습니다.' },
        { en: 'The speaker tended to digress into unrelated personal anecdotes.', ko: '연사는 관련 없는 개인적인 일화로 빠지는 경향이 있었다.' },
      ],
    }
  ),
  word('Diligent', '부지런한', 7, 'adjective',
    ['게으른', '태만한', '나태한', '소홀한', '무성의한', '부주의한', '안일한', '둔감한', '방치하는', '해이한'],
    tips({
      etymology: '라틴어 \'dis-\'(따로)와 \'legere\'(고르다)에서 유래하여, 가치 있는 것을 신중하게 골라내어 집중하는 태도를 의미합니다.',
      visual: '이른 새벽부터 밭을 일구며 땀 흘리는 농부나 쉴 새 없이 먹이를 나르는 개미 떼를 상상해 보세요.',
      soundAlike: '\'딜리(Dili)\'를 \'부지런한 대리님\'으로 발음 연상하여, 회사에서 가장 성실하게 일하는 대리님을 떠올려 보세요.',
      context: '단순히 바쁜 상태가 아니라, 목표를 향해 꾸준하고 세심하게 노력하는 긍정적인 성실함을 표현할 때 사용합니다.',
      synonymAntonym: 'industrious는 산업 역군처럼 근면함을, assiduous는 끈기 있게 매달림을 뜻하며, lazy는 가장 일반적인 반대말입니다.',
    }),
    {
      definition: 'Showing steady, earnest, and energetic effort in a particular task or duty.',
      synonyms: ['industrious', 'hardworking', 'assiduous'],
      antonyms: ['lazy', 'idle', 'negligent'],
      exampleSentences: [
        { en: 'She is a diligent worker who never misses a deadline.', ko: '그녀는 마감 기한을 한 번도 어기지 않는 부지런한 일꾼이다.' },
        { en: 'Diligent students often achieve the best academic results.', ko: '부지런한 학생들이 종종 최고의 학업 성과를 낸다.' },
      ],
    }
  ),
  word('Discern', '간파하다', 7, 'verb',
    ['놓치다', '혼동하다', '무시하다', '간과하다', '오해하다', '망각하다', '방관하다', '흐리다', '은폐하다', '방해하다'],
    tips({
      etymology: '접두사 dis(분리)와 어근 cern(체로 치다)이 결합되어, 여러 요소가 섞인 곳에서 체질을 하듯 진짜를 골라낸다는 의미에서 유래했습니다.',
      visual: '어두운 밤바다에서 아주 멀리 떨어진 등대의 미세한 불빛을 눈을 가늘게 뜨고 찾아내려는 항해사의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'디서른\'과 유사하므로, \'뒤섞인(dis) 것들 사이에서 서른(30)개 중 하나를 정확히 찾아낸다\'고 기억하면 쉽습니다.',
      context: '단순히 시각적으로 보는 것을 넘어, 복잡한 상황 속에서 숨겨진 의도나 미세한 차이점을 지적으로 파악할 때 주로 쓰입니다.',
      synonymAntonym: 'perceive, distinguish와 같은 유의어는 알아채는 능력을 강조하며, overlook, miss와 같은 반의어는 보지 못하고 지나침을 뜻합니다.',
    }),
    {
      definition: 'To recognize, identify, or understand something that is hidden or not clearly visible through careful observation.',
      synonyms: ['perceive', 'distinguish', 'detect'],
      antonyms: ['overlook', 'miss', 'confuse'],
      exampleSentences: [
        { en: 'I could barely discern the outline of the building in the fog.', ko: '나는 안개 속에서 건물의 윤곽을 거의 식별할 수 없었다.' },
        { en: 'It is difficult to discern the truth from the lies in this case.', ko: '이 사건에서 거짓 속의 진실을 간파하기는 어렵다.' },
      ],
    }
  ),
  word('Disclose', '공개하다', 7, 'verb',
    ['숨기다', '은폐하다', '봉인하다', '가리다', '비밀로하다', '억제하다', '차단하다', '매립하다', '잠그다', '위장하다'],
    tips({
      etymology: '접두사 dis-(반대)와 close(닫다)가 결합하여 \'닫혀 있던 것을 열어젖히다\'라는 의미에서 유래했습니다.',
      visual: '상자 안에 꽁꽁 숨겨두었던 서류를 꺼내어 세상 사람들에게 보여주는 모습을 상상해 보세요.',
      soundAlike: '디스클로즈(Disclose)는 \'클로즈(close)를 뒤집다(dis)\'라고 기억하면 닫힌 문을 여는 이미지가 떠오릅니다.',
      context: '주로 기업의 내부 정보, 수사 결과, 혹은 개인적인 비밀을 공식적으로 발표할 때 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '무언가를 드러내는 reveal과 유의어이며, 반대로 덮어서 감추는 conceal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To allow something that was previously hidden or kept secret to be seen or known by others.',
      synonyms: ['reveal', 'expose', 'divulge'],
      antonyms: ['conceal', 'hide', 'cover'],
      exampleSentences: [
        { en: 'He refused to disclose the details of the confidential agreement.', ko: '그는 비밀 계약의 세부 사항을 공개하기를 거부했다.' },
        { en: 'The company must disclose its financial statements every year.', ko: '회사는 매년 재무제표를 공개해야 한다.' },
      ],
    }
  ),
  word('Discord', '불화', 7, 'noun',
    ['화합', '조화', '일치', '협력', '우호', '합의', '평화', '공존', '단결', '친목'],
    tips({
      etymology: '라틴어 어근 dis(분리)와 cord(심장)가 결합되어, 마음이 서로 다른 방향을 향하고 있는 상태를 의미합니다.',
      visual: '오케스트라 연주 도중 한 연주자가 전혀 다른 음을 내어 전체적인 균형과 소리가 깨지는 불협화음 장면을 떠올려 보세요.',
      soundAlike: '유명 메신저 \'디스코드\'를 떠올리되, 서로를 비난(dis)하는 코드(cord)가 맞지 않는 상황으로 연상하면 쉽습니다.',
      context: '가족 내의 재산 다툼, 정당 간의 정치적 견해 차이, 혹은 집단 내의 의견 충돌을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '갈등을 뜻하는 strife, conflict와 유의어이며, 조화를 뜻하는 harmony, accord와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A state of disagreement, lack of harmony, or friction between people, groups, or things.',
      synonyms: ['strife', 'conflict', 'friction'],
      antonyms: ['harmony', 'agreement', 'accord'],
      exampleSentences: [
        { en: 'The family was torn apart by internal discord over the inheritance.', ko: '그 가족은 유산 상속을 둘러싼 내부 불화로 갈라졌다.' },
        { en: 'The discord between the two political parties delayed the bill.', ko: '두 정당 간의 불일치가 법안 처리를 지연시켰다.' },
      ],
    }
  ),
  word('Discrepancy', '불일치', 7, 'noun',
    ['일치', '부합', '동일', '균형', '정확', '유사', '적합', '상응', '일관', '동조'],
    tips({
      etymology: '라틴어 dis(분리)와 crepare(소리나다)가 합쳐진 단어로, 부품들이 서로 맞지 않아 삐걱거리는 소리가 나는 상태에서 유래했습니다.',
      visual: '두 개의 톱니바퀴가 서로 맞물리지 못하고 겉돌며 어긋나 있는 장면을 상상해 보세요.',
      soundAlike: '디스크레펜시 -> \'디스크(disc) 레벨(level) 편차(pancy)\'로 기억하여 수치상에 차이가 있음을 연상하세요.',
      context: '주로 회계 장부의 잔액이 맞지 않거나, 두 사람의 진술 내용이 서로 다를 때 격식 있는 표현으로 사용됩니다.',
      synonymAntonym: 'inconsistency와 유사하며, 완벽하게 일치하는 상태인 correspondence나 harmony와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A lack of agreement or balance between things that should be the same.',
      synonyms: ['inconsistency', 'disparity', 'divergence'],
      antonyms: ['concordance', 'consistency', 'uniformity'],
      exampleSentences: [
        { en: 'The police found a serious discrepancy in the suspect\'s story.', ko: '경찰은 용의자의 진술에서 심각한 불일치를 발견했다.' },
        { en: 'The committee is investigating the discrepancy between the budget and actual spending.', ko: '위원회는 예산과 실제 지출 사이의 불일치를 조사하고 있다.' },
      ],
    }
  ),
  word('Disdain', '경멸', 7, 'noun',
    ['존경', '존중', '선망', '호의', '찬사', '애정', '숭배', '동경', '인정', '친절'],
    tips({
      etymology: '부정을 뜻하는 dis와 가치 있음을 뜻하는 dain이 결합되어, 상대가 가치 없다고 여기는 마음에서 유래했습니다.',
      visual: '누군가를 한심하다는 듯 턱을 치켜들고 눈을 가늘게 뜨며 멸시하는 표정을 상상해 보세요.',
      soundAlike: '디스(dis)하며 대(dain)한다, 즉 상대를 낮게 평가하며 무시하는 태도로 기억하면 쉽습니다.',
      context: '단순한 싫어함이 아니라, 상대가 수준 이하라고 판단하여 비웃거나 무시할 때 주로 사용되는 강한 명사입니다.',
      synonymAntonym: '유의어는 contempt, scorn, derision이며, 반의어는 respect, admiration, esteem입니다.',
    }),
    {
      definition: 'A feeling of intense dislike and a lack of respect for someone or something regarded as unworthy.',
      synonyms: ['contempt', 'scorn', 'derision'],
      antonyms: ['respect', 'admiration', 'esteem'],
      exampleSentences: [
        { en: 'She looked at the messy room with a look of pure disdain.', ko: '그녀는 순전한 경멸의 눈빛으로 지저분한 방을 쳐다보았다.' },
        { en: 'He treated the suggestions of his juniors with disdain.', ko: '그는 후배들의 제안을 경멸조로 대했다.' },
      ],
    }
  ),
  word('Dismal', '비참한', 7, 'adjective',
    ['밝은', '희망찬', '유쾌한', '화창한', '성공적인', '활기찬', '기쁜', '긍정적인', '찬란한', '즐거운'],
    tips({
      etymology: '라틴어 \'dies mali(불길한 날들)\'에서 유래하여, 운이 없고 우울한 상태를 뜻합니다.',
      visual: '회색빛 하늘에서 진눈깨비가 내리는 아주 우울하고 쓸쓸한 풍경을 떠올려 보세요.',
      soundAlike: '\'디스멀\' 발음이 \'이것 참 멀었다\'와 비슷하죠? 목표가 너무 멀어 보여 비참하고 암담한 상황을 연상하세요.',
      context: '날씨가 음산할 때뿐만 아니라 경제 전망이나 성적이 형편없을 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: 'gloomy, depressing과 같은 어두운 단어들과 친하며, bright, cheerful과는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'Causing a feeling of sadness, gloom, or disappointment due to being very poor in quality or lacking hope.',
      synonyms: ['gloomy', 'depressing', 'bleak'],
      antonyms: ['bright', 'cheerful', 'encouraging'],
      exampleSentences: [
        { en: 'The weather forecast for the weekend is quite dismal.', ko: '주말 일기 예보가 상당히 음산하고 우울하다.' },
        { en: 'The team\'s performance was dismal, leading to a heavy defeat.', ko: '팀의 경기력은 형편없었으며, 결국 대패로 이어졌다.' },
      ],
    }
  ),
  word('Disparity', '불균형', 7, 'noun',
    ['균형', '평등', '일치', '동등', '조화', '유사', '동질', '공정', '안정', '통합'],
    tips({
      etymology: 'dis(아닌) + par(동등한) + ity(상태)가 합쳐져 \'같지 않음\'을 뜻합니다.',
      visual: '양팔 저울의 한쪽은 아주 높고 한쪽은 아주 낮게 기울어진 모습',
      soundAlike: '디스패리티 -> \'이것(this) 패거리(party)\'끼리만 잘 살아서 생기는 격차',
      context: '주로 소득, 교육 수준, 기회 등의 사회적 격차를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '유의어 imbalance와 반의어 parity(동등함)를 함께 기억하세요.',
    }),
    {
      definition: 'A noticeable and often unfair difference or inequality between people or things.',
      synonyms: ['imbalance', 'inequality', 'gap'],
      antonyms: ['parity', 'equality', 'similarity'],
      exampleSentences: [
        { en: 'There is a huge economic disparity between the two regions.', ko: '두 지역 사이에는 거대한 경제적 불균형이 존재한다.' },
        { en: 'The disparity between rich and poor is growing every year.', ko: '빈부 격차가 매년 커지고 있다.' },
      ],
    }
  ),
  word('Disseminate', '유포하다', 8, 'verb',
    ['숨기다', '억압하다', '차단하다', '제한하다', '봉인하다', '수집하다', '은폐하다', '축소하다', '독점하다', '회수하다'],
    tips({
      etymology: '라틴어 어근 \'semin\'은 씨앗(seed)을 의미합니다. 즉, 씨를 사방으로 널리 뿌리는 행위에서 정보의 전파라는 뜻이 유래되었습니다.',
      visual: '농부가 넓은 들판에 씨앗을 한 움큼 쥐고 사방으로 흩뿌리는 장면을 상상해 보세요.',
      soundAlike: '디세미네이트 -> \'대세(disse)를 밀어내(minate)\'서 널리 퍼뜨리는 강한 힘을 연상해 보세요.',
      context: '단순히 소문을 내는 것보다 뉴스, 연구 결과, 공공 정보 등을 공식적으로 널리 알릴 때 주로 쓰이는 격식체입니다.',
      synonymAntonym: '널리 퍼뜨리는 spread와 반대로, 밖으로 나가지 못하게 꾹 누르는 suppress를 함께 기억하세요.',
    }),
    {
      definition: 'To scatter or spread widely, as though sowing seed, typically in relation to information, ideas, or news.',
      synonyms: ['broadcast', 'propagate', 'proclaim'],
      antonyms: ['repress', 'stifle', 'censor'],
      exampleSentences: [
        { en: 'The health organization works to disseminate vital information about disease prevention.', ko: '그 보건 기구는 질병 예방에 관한 필수 정보를 유포하기 위해 노력한다.' },
        { en: 'Social media has become a powerful tool to disseminate political ideologies.', ko: '소셜 미디어는 정치적 이데올로기를 전파하는 강력한 도구가 되었다.' },
      ],
    }
  ),
  word('Dissent', '반대', 8, 'noun',
    ['동의', '찬성', '합의', '일치', '승인', '수용', '결속', '조화', '지지', '순응'],
    tips({
      etymology: '라틴어 dis(따로)와 sentire(느끼다)가 결합되어 \'남과 다르게 느끼다\'라는 어원을 가집니다.',
      visual: '모두가 \'Yes\'라고 적힌 카드를 들고 있을 때 홀로 \'No\'라고 적힌 빨간 카드를 높이 든 사람을 상상해 보세요.',
      soundAlike: '디센트 -> \'뒤(dis)에서 센터(sent)\'의 핵심 의견에 대해 반기를 드는 상황으로 기억하세요.',
      context: '주로 정치적 집단, 법정의 판결, 혹은 조직 내의 공식적인 다수 의견에 맞설 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'disagreement보다 격식 있는 표현이며, 반의어인 assent(찬성)와 철자가 비슷하니 주의해서 비교하세요.',
    }),
    {
      definition: 'A strong difference of opinion on a particular subject, especially about an official suggestion or plan or a popular belief.',
      synonyms: ['disagreement', 'opposition', 'objection'],
      antonyms: ['assent', 'agreement', 'concurrence'],
      exampleSentences: [
        { en: 'There was growing dissent within the political party regarding the new policy.', ko: '새로운 정책에 대해 정당 내부에서 반대 의견이 거세지고 있었다.' },
        { en: 'The supreme court justice wrote a strong dissent against the majority ruling.', ko: '대법관은 다수결 판결에 대해 강력한 반대 의견서를 작성했다.' },
      ],
    }
  ),
  word('Dissolution', '해산', 8, 'noun',
    ['구성', '결성', '융합', '통합', '연합', '설립', '창설', '조직', '결합', '유지'],
    tips({
      etymology: 'dis(분리) + solut(풀다) + ion(명사형)으로 \'풀어서 흩어지게 함\'을 뜻합니다.',
      visual: '각설탕이 물에 녹아 형체가 사라지거나 의회가 흩어지는 모습',
      soundAlike: '디솔루션 -> \'다(di) 솔솔(solu)\' 풀려서 없어지는 과정',
      context: '의회의 해산, 파트너십의 종료, 혹은 물질의 용해를 의미할 때 씁니다.',
      synonymAntonym: '유의어 breakup과 반의어 formation(결성)을 비교해 보세요.',
    }),
    {
      definition: 'The formal closing or ending of an assembly, partnership, or official body.',
      synonyms: ['disintegration', 'breakup', 'termination'],
      antonyms: ['formation', 'establishment', 'union'],
      exampleSentences: [
        { en: 'The dissolution of the partnership was amicable.', ko: '동업 관계의 해산은 우호적으로 이루어졌다.' },
        { en: 'The sudden dissolution of the government led to an early election.', ko: '정부의 갑작스러운 해산은 조기 선거로 이어졌다.' },
      ],
    }
  ),
  word('Diverge', '갈라지다', 8, 'verb',
    ['합류하다', '수렴하다', '만나다', '일치하다', '융합하다', '모이다', '결합하다', '연결되다', '집중하다', '동일하다'],
    tips({
      etymology: 'di(두 갈래)와 verge(기울다/향하다)가 결합되어 \'두 방향으로 뻗어 나가다\'라는 의미를 형성합니다.',
      visual: '일직선으로 뻗어있던 기찻길이 갑자기 왼쪽과 오른쪽 두 갈래로 나뉘는 선로 전환기 장면을 상상해 보세요.',
      soundAlike: '다이버지 -> \'다 버리고(di-verge)\' 원래 가던 길을 떠나 각자 다른 방향으로 흩어지는 상황으로 기억하세요.',
      context: '도로나 강줄기 같은 물리적인 갈림길뿐만 아니라, 사람들의 의견이나 가치관이 서로 달라질 때도 자주 쓰입니다.',
      synonymAntonym: '반대말인 converge는 \'한 점으로 모이다\'라는 뜻이며, diverge는 \'여러 갈래로 흩어지다\'라는 뜻입니다.',
    }),
    {
      definition: 'To move or extend in different directions from a common point or to become different in character or form.',
      synonyms: ['separate', 'deviate', 'branch'],
      antonyms: ['converge', 'unite', 'join'],
      exampleSentences: [
        { en: 'The two paths in the woods began to diverge after the bridge.', ko: '다리를 지나자 숲속의 두 갈래 길이 갈라지기 시작했다.' },
        { en: 'Over time, the evolutionary lines of the two species started to diverge.', ko: '시간이 흐르면서 두 종의 진화 노선은 서로 갈라지기 시작했다.' },
      ],
    }
  ),
  word('Dormant', '휴면의', 8, 'adjective',
    ['활동적인', '각성한', '활발한', '깨어있는', '작동중인', '예민한', '신속한', '유효한', '진행중인', '열정적인'],
    tips({
      etymology: '라틴어 dormire(자다)에서 유래하여 현재는 활동을 멈추고 잠자고 있는 상태를 뜻합니다.',
      visual: '겨울잠을 자는 곰이나 겉으로는 평온해 보이지만 언제든 터질 수 있는 휴화산을 떠올려 보세요.',
      soundAlike: '도어먼트(Dormant) -> \'도(Do) 잠만(man)\' 자고 있는 게으른 상태로 기억하면 쉽습니다.',
      context: '주로 활동을 멈춘 화산, 발아 전의 씨앗, 오랫동안 쓰지 않은 은행 계좌 등을 설명할 때 쓰입니다.',
      synonymAntonym: '활동이 없는 inactive와 유의어이며, 에너지가 넘치는 active와는 반대되는 개념입니다.',
    }),
    {
      definition: 'In a state of temporary inactivity or rest, as if asleep, but possessing the potential to become functional or active again in the future.',
      synonyms: ['inactive', 'latent', 'quiescent'],
      antonyms: ['active', 'alert', 'animated'],
      exampleSentences: [
        { en: 'The volcano has been dormant for hundreds of years, but scientists still monitor it closely.', ko: '그 화산은 수백 년 동안 휴면 상태였지만, 과학자들은 여전히 그것을 면밀히 관찰하고 있다.' },
        { en: 'Many plants have seeds that remain dormant in the soil until the spring rains arrive.', ko: '많은 식물들은 봄비가 내릴 때까지 토양 속에서 휴면 상태로 남아 있는 씨앗을 가지고 있다.' },
      ],
    }
  ),
  word('Dubious', '의심스러운', 8, 'adjective',
    ['확실한', '믿을만한', '명백한', '절대적인', '신뢰하는', '정확한', '진실한', '분명한', '당연한', '안전한'],
    tips({
      etymology: '라틴어 dubius에서 유래되었으며, \'두 가지(duo)\' 상태 사이에서 갈팡질팡하며 결정하지 못하는 마음을 나타냅니다.',
      visual: '중고 거래를 할 때 물건의 상태가 설명과 너무 달라 미심쩍은 표정으로 물건을 훑어보는 모습',
      soundAlike: '듀비어스 -> \'두 비어스(Two beers)\'. 맥주를 두 잔이나 마셨다니 그가 운전할 수 있다는 말이 의심스럽네.',
      context: '어떤 정보의 진실성이나 사람의 의도가 100% 믿기지 않고 찝찝한 기분이 들 때 주로 쓰입니다.',
      synonymAntonym: '확신이 없는 doubtful과 유사하며, 반대로 확신에 찬 certain과는 정반대의 의미입니다.',
    }),
    {
      definition: 'Feeling hesitation or lacking confidence about the truth, quality, or reliability of something.',
      synonyms: ['uncertain', 'suspicious', 'unreliable'],
      antonyms: ['assured', 'reliable', 'convinced'],
      exampleSentences: [
        { en: 'The critics were dubious about the director\'s ability to handle such a large budget.', ko: '비평가들은 그 감독이 그렇게 큰 예산을 다룰 능력이 있는지에 대해 의구심을 가졌다.' },
        { en: 'She gave me a dubious look when I told her I had finished the entire project in one night.', ko: '내가 하룻밤 만에 프로젝트 전체를 끝냈다고 말하자 그녀는 의심스러운 눈초리로 나를 쳐다보았다.' },
      ],
    }
  ),
  word('Duplicity', '이중성', 8, 'noun',
    ['솔직함', '일관성', '정직', '순수', '단일성', '성실', '투명', '진실', '신뢰', '청렴'],
    tips({
      etymology: 'du(둘) + plic(접다) + ity(상태)로 \'마음을 두 겹으로 접어 숨김\'을 뜻합니다.',
      visual: '앞에서는 웃고 있지만 뒤에서는 칼을 숨기고 있는 두 얼굴의 가면을 떠올려 보세요.',
      soundAlike: '듀플리시티 -> \'두(du) 풀(pli) 시티\' 두 가지 풀을 칠해 붙인 이중적인 모습으로 기억하세요.',
      context: '주로 정치적 음모나 배신, 겉과 속이 다른 위선적인 행동을 비판할 때 사용됩니다.',
      synonymAntonym: 'deceit(기만)과 유사하며, 반대말로는 투명한 honesty(정직)가 있습니다.',
    }),
    {
      definition: 'The quality of being deceitful in behavior or speech, especially by acting in two different ways to different people concerning the same matter.',
      synonyms: ['deceit', 'double-dealing', 'hypocrisy'],
      antonyms: ['honesty', 'sincerity', 'integrity'],
      exampleSentences: [
        { en: 'The politician was accused of duplicity by his opponents.', ko: '그 정치인은 상대 진영으로부터 이중성에 대해 비난받았다.' },
        { en: 'She was shocked by the duplicity of her closest friend.', ko: '그녀는 가장 친한 친구의 이중성에 충격을 받았다.' },
      ],
    }
  ),
  word('Eclectic', '절충주의의', 8, 'adjective',
    ['일관된', '단일한', '배타적인', '협소한', '제한적인', '획일적인', '편협한', '고정된', '단조로운', '정형화된'],
    tips({
      etymology: '그리스어 ek(밖으로)와 leg(고르다)가 합쳐져 \'여러 곳에서 골라낸\'이라는 의미를 가집니다.',
      visual: '서로 다른 시대의 가구와 현대적인 소품이 조화롭게 섞인 거실 인테리어를 상상해 보세요.',
      soundAlike: '이클렉틱(Eclectic)은 다양한 장르를 섞는 \'절충주의\' 예술가들을 떠올리면 쉽습니다.',
      context: '음악 취향이나 인테리어 스타일이 한 가지에 국한되지 않고 다양할 때 주로 사용합니다.',
      synonymAntonym: '다양함을 뜻하는 diverse가 동의어이며, 모두 똑같은 uniform이 반의어입니다.',
    }),
    {
      definition: 'Deriving ideas, style, or taste from a broad and diverse range of sources.',
      synonyms: ['diverse', 'varied', 'heterogeneous'],
      antonyms: ['uniform', 'homogeneous', 'narrow'],
      exampleSentences: [
        { en: 'Her eclectic collection of art reflects her diverse interests.', ko: '그녀의 절충적인 예술 수집품은 그녀의 다방면에 걸친 관심을 반영한다.' },
        { en: 'The gallery is known for its eclectic mix of styles, from classical to modern pieces.', ko: '그 갤러리는 고전부터 현대 작품까지 절충적인 스타일 혼합으로 유명하다.' },
      ],
    }
  ),
  word('Edify', '교화하다', 8, 'verb',
    ['타락시키다', '현혹하다', '부패시키다', '오염시키다', '혼란스럽게하다', '망치다', '속이다', '해치다', '무너뜨리다', '방해하다'],
    tips({
      etymology: '라틴어 aedificare에서 유래했으며, 본래 \'건물을 세우다\'라는 뜻에서 \'정신적 토대를 세우다\'로 의미가 확장되었습니다.',
      visual: '어두운 방 안에서 책을 읽던 사람의 머리 위로 지혜의 전구가 환하게 켜지는 모습을 상상해 보세요.',
      soundAlike: '에디파이(Edify)는 교육(Education)을 통해 사람의 인격을 높이는 과정과 발음이 유사하게 느껴집니다.',
      context: '단순한 지식 전달을 넘어 도덕적, 지적으로 누군가를 더 나은 사람으로 이끌 때 주로 사용합니다.',
      synonymAntonym: '지적으로 깨우쳐주는 enlighten이 주요 동의어이며, 도덕적으로 타락시키는 corrupt가 대표적인 반의어입니다.',
    }),
    {
      definition: 'To provide moral or intellectual instruction and improvement for a person.',
      synonyms: ['enlighten', 'instruct', 'uplift'],
      antonyms: ['corrupt', 'debase', 'mislead'],
      exampleSentences: [
        { en: 'The professor hoped that his lecture would help to edify the young students.', ko: '교수는 그의 강연이 젊은 학생들을 교화하는 데 도움이 되기를 바랐다.' },
        { en: 'She sought out books that would edify her spirit rather than just provide entertainment.', ko: '그녀는 단순히 즐거움을 주는 책보다 자신의 정신을 고양시킬 수 있는 책들을 찾았다.' },
      ],
    }
  ),
  word('Efficacy', '효능', 8, 'noun',
    ['무효', '무능', '비효율', '부작용', '역효과', '무력함', '결함', '실패', '부족', '불능'],
    tips({
      etymology: '라틴어 \'efficere(해내다, 완수하다)\'에서 유래하여, 어떤 목적을 달성할 수 있는 실제적인 힘을 의미합니다.',
      visual: '임상 시험 결과 그래프가 목표치까지 높게 솟아오른 모습을 상상하면 이해하기 쉽습니다.',
      soundAlike: '단어의 앞부분이 \'Effect(효과)\'와 비슷하게 들리므로, 효과를 내는 성질이나 능력으로 기억하세요.',
      context: '의학이나 과학 분야에서 백신, 치료제, 혹은 특정 정책이 실제로 의도한 결과를 내는지 평가할 때 주로 사용합니다.',
      synonymAntonym: 'Effectiveness와 유사하지만 더 격식 있고 전문적인 뉘앙스이며, 반대로 아무런 힘이 없는 상태는 Ineffectiveness라고 합니다.',
    }),
    {
      definition: 'The power or capacity to produce a desired result or intended outcome.',
      synonyms: ['effectiveness', 'potency', 'efficiency'],
      antonyms: ['ineffectiveness', 'impotence', 'uselessness'],
      exampleSentences: [
        { en: 'The clinical trials demonstrated the high efficacy of the new medication.', ko: '임상 시험을 통해 새 약물의 높은 효능이 입증되었습니다.' },
        { en: 'Scientists are questioning the efficacy of the current strategy in reducing pollution.', ko: '과학자들은 오염을 줄이는 데 있어 현재 전략의 효능에 의문을 제기하고 있습니다.' },
      ],
    }
  ),
  word('Elicit', '끌어내다', 8, 'verb',
    ['숨기다', '억압하다', '차단하다', '은폐하다', '억제하다', '덮다', '막다', '거부하다', '무시하다', '잠재우다'],
    tips({
      etymology: 'e(밖으로)와 lacere(유혹하다)가 합쳐져 \'잠잠하던 것을 밖으로 꾀어내다\'라는 의미가 되었습니다.',
      visual: '낚싯줄을 던져 물속에 숨어있던 물고기를 수면 위로 끌어올리는 장면을 떠올려 보세요.',
      soundAlike: '일리시트(Elicit)는 발음이 거의 같은 \'불법의\'라는 뜻의 illicit와 혼동하기 쉬우니 주의해야 합니다.',
      context: '주로 상대방의 대답, 웃음, 눈물 같은 감정적 반응이나 숨겨진 정보를 이끌어낼 때 자주 쓰입니다.',
      synonymAntonym: '반응을 불러일으키는 evoke가 동의어이며, 감정이나 정보를 꾹 누르고 억제하는 suppress가 반의어입니다.',
    }),
    {
      definition: 'To manage to get information, a reaction, or a specific feeling from someone by asking questions or through actions.',
      synonyms: ['evoke', 'extract', 'provoke'],
      antonyms: ['suppress', 'repress', 'stifle'],
      exampleSentences: [
        { en: 'The comedian\'s jokes failed to elicit any laughter from the audience.', ko: '그 코미디언의 농담은 관객들로부터 어떠한 웃음도 이끌어내지 못했다.' },
        { en: 'The questionnaire is designed to elicit honest opinions about the new product.', ko: '이 설문지는 신제품에 대한 솔직한 의견을 끌어내기 위해 설계되었습니다.' },
      ],
    }
  ),
  word('Eloquent', '웅변의', 8, 'adjective',
    ['어눌한', '서툰', '말주변없는', '더듬거리는', '불명료한', '침묵하는', '무뚝뚝한', '어색한', '조잡한', '난해한'],
    tips({
      etymology: '라틴어 e(밖으로)와 loqui(말하다)가 결합되어, 자신의 생각을 밖으로 막힘없이 쏟아낸다는 의미에서 유래했습니다.',
      visual: '시상대 위에서 화려한 수식어와 확신에 찬 목소리로 청중의 마음을 사로잡는 연설가의 모습을 떠올려 보세요.',
      soundAlike: '단어의 시작인 \'El\'이 \'Elegant(우아한)\'와 비슷하게 들리므로, 우아하고 품격 있게 말하는 모습을 연상하면 쉽습니다.',
      context: '단순히 수다스러운 것이 아니라, 논리적이고 감동적이며 설득력 있는 말하기나 글쓰기 능력을 칭찬할 때 주로 사용합니다.',
      synonymAntonym: '말을 조리 있게 잘하는 articulate가 대표적 동의어이며, 반대로 말을 더듬거나 표현이 서툰 inarticulate가 주요 반의어입니다.',
    }),
    {
      definition: 'Able to express ideas and opinions clearly, effectively, and in a way that influences people\'s feelings.',
      synonyms: ['articulate', 'fluent', 'silver-tongued'],
      antonyms: ['inarticulate', 'tongue-tied', 'hesitant'],
      exampleSentences: [
        { en: 'The president delivered an eloquent appeal for peace that moved the entire nation.', ko: '대통령은 온 국민을 감동시킨 평화를 향한 설득력 있는 호소를 전달했습니다.' },
        { en: 'Her eyes were more eloquent than any words she could have spoken at that moment.', ko: '그녀의 눈빛은 그 순간 그녀가 할 수 있었던 그 어떤 말보다 더 많은 것을 표현하고 있었습니다.' },
      ],
    }
  ),
  word('Emancipate', '해방하다', 8, 'verb',
    ['속속하다', '예속시키다', '억압하다', '감금하다', '굴복시키다', '구속하다', '노예화하다', '가두다', '제한하다', '강제하다'],
    tips({
      etymology: 'e(밖으로)와 manus(손), capere(잡다)가 합쳐져 \'손아귀에서 놓아주다\'라는 의미에서 유래했습니다.',
      visual: '손목을 꽉 조이고 있던 쇠사슬이 끊어지며 자유롭게 팔을 뻗는 모습을 상상해 보세요.',
      soundAlike: '이맨시페이트(Emancipate)는 링컨의 \'노예 해방 선언(Emancipation Proclamation)\'을 떠올리면 기억하기 쉽습니다.',
      context: '법적, 사회적 억압이나 부모의 통제와 같은 구속으로부터 자유를 줄 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: '해방하는 liberate가 동의어이며, 노예로 만드는 enslave가 반의어입니다.',
    }),
    {
      definition: 'To set free from legal, social, or political restrictions.',
      synonyms: ['liberate', 'free', 'unshackle'],
      antonyms: ['enslave', 'enthrall', 'subjugate'],
      exampleSentences: [
        { en: 'The slaves were emancipated in 1865.', ko: '노예들은 1865년에 해방되었다.' },
        { en: 'Women were emancipated from many legal restrictions in the twentieth century.', ko: '여성들은 20세기에 많은 법적 제한에서 해방되었다.' },
      ],
    }
  ),
  word('Embellish', '장식하다', 8, 'verb',
    ['벗기다', '간소화하다', '축소하다', '절제하다', '해체하다', '훼손하다', '깎다', '단순화하다', '드러내다', '생략하다'],
    tips({
      etymology: 'em(만들다)과 bell(아름다운)이 합쳐져 \'아름답게 꾸미다\'라는 뜻이 되었습니다.',
      visual: '밋밋한 케이크 위에 화려한 생크림 꽃과 진주 장식을 올리는 요리사를 상상해 보세요.',
      soundAlike: '엠벨리시(Embellish)는 보석(Bell/Belle)처럼 반짝이게 꾸미는 행동을 떠올리게 합니다.',
      context: '물건을 장식하는 것뿐만 아니라, 이야기를 더 흥미롭게 하려고 내용을 덧붙일 때도 씁니다.',
      synonymAntonym: '장식하는 adorn이 동의어이며, 아주 단순하게 만드는 simplify가 반의어입니다.',
    }),
    {
      definition: 'To make something more attractive by adding decorative details or to enhance a story with fictional additions.',
      synonyms: ['adorn', 'decorate', 'ornament'],
      antonyms: ['simplify', 'strip', 'denude'],
      exampleSentences: [
        { en: 'He tends to embellish his stories to make them more exciting.', ko: '그는 이야기를 더 흥미진진하게 만들기 위해 내용을 꾸며내는 경향이 있다.' },
        { en: 'She embellished the dress with lace and pearls for the wedding.', ko: '그녀는 결혼식을 위해 드레스를 레이스와 진주로 장식했다.' },
      ],
    }
  ),
  word('Eminent', '저명한', 8, 'adjective',
    ['무명의', '하찮은', '미미한', '비천한', '평범한', '알려지지않은', '낮은', '보통의', '열등한', '무시당하는'],
    tips({
      etymology: 'e(밖으로)와 minere(돌출하다)가 합쳐져 \'남들보다 밖으로 툭 튀어나온\' 즉, 뛰어난 상태를 말합니다.',
      visual: '수많은 사람들 사이에서 유독 빛이 나며 모두의 존경 어린 시선을 받는 학자를 상상해 보세요.',
      soundAlike: '에미넌트(Eminent)는 곧 닥칠 것 같은(Imminent)과 발음이 비슷하니 주의가 필요합니다.',
      context: '특정 분야에서 아주 유명하고 존경받는 권위자를 묘사할 때 주로 사용합니다.',
      synonymAntonym: '눈에 띄는 prominent가 동의어이며, 세상에 알려지지 않은 obscure가 반의어입니다.',
    }),
    {
      definition: 'Famous and respected within a particular field or profession.',
      synonyms: ['distinguished', 'prominent', 'renowned'],
      antonyms: ['obscure', 'unknown', 'insignificant'],
      exampleSentences: [
        { en: 'She is an eminent scholar in her field.', ko: '그녀는 그 분야의 저명한 학자이다.' },
        { en: 'An eminent architect designed the new building.', ko: '저명한 건축가가 새 건물을 설계했다.' },
      ],
    }
  ),
  word('Encompass', '포함하다', 8, 'verb',
    ['제외하다', '배제하다', '누락하다', '한정하다', '축소하다', '분리하다', '거부하다', '방출하다', '삭제하다', '무시하다'],
    tips({
      etymology: '접두사 en-(안에 넣다)과 compass(범위, 나침반)가 결합되어 \'특정 범위 안에 모두 집어넣다\'라는 의미를 형성합니다.',
      visual: '거대한 울타리가 마을 전체를 둥그렇게 감싸 안고 있는 지도를 상상해 보세요.',
      soundAlike: '인컴퍼스(Encompass) - 나침반(Compass) 바늘이 360도 회전하며 모든 방향을 다 아우르는 소리를 연상하세요.',
      context: '단순히 들어있는 상태를 넘어, 넓은 영역이나 다양한 주제를 빠짐없이 포괄할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'include보다 더 넓고 종합적인 느낌을 주며, 반대말로는 밖으로 빼놓는 exclude나 omit이 있습니다.',
    }),
    {
      definition: 'To surround and have or hold within, or to cover a wide range of ideas or subjects comprehensively.',
      synonyms: ['embrace', 'comprise', 'incorporate'],
      antonyms: ['exclude', 'omit', 'leave out'],
      exampleSentences: [
        { en: 'The new curriculum aims to encompass a broad range of cultural perspectives.', ko: '새로운 커리큘럼은 폭넓은 문화적 관점을 포괄하는 것을 목표로 한다.' },
        { en: 'The national park encompasses several mountains and a large lake.', ko: '그 국립공원은 여러 개의 산과 커다란 호수를 포함하고 있다.' },
      ],
    }
  ),
  word('Encroach', '침해하다', 8, 'verb',
    ['물러나다', '존중하다', '배려하다', '경계하다', '멀어지다', '후퇴하다', '지키다', '보호하다', '준수하다', '양보하다'],
    tips({
      etymology: 'en(안으로) + croach(갈고리)가 합쳐져 갈고리를 걸어 남의 영역을 조금씩 끌어당기는 모습에서 유래했습니다.',
      visual: '옆집 담벼락이 우리 집 마당 쪽으로 매일 조금씩 야금야금 넘어오고 있는 장면을 떠올려 보세요.',
      soundAlike: '인크로치 - \'안으로(In) 들어오지(Croach)\' 말라고 경계선을 긋고 경고하는 상황을 연상하세요.',
      context: '단순한 물리적 침범뿐만 아니라 타인의 사생활, 권리, 자유를 서서히 갉아먹듯 침해할 때 자주 쓰입니다.',
      synonymAntonym: 'intrude나 infringe와 비슷하게 몰래 들어오는 느낌이며, 반대로 선을 지키는 것은 respect라고 합니다.',
    }),
    {
      definition: 'To gradually move into an area that belongs to someone else or to limit someone\'s rights or freedom.',
      synonyms: ['intrude', 'infringe', 'trespass'],
      antonyms: ['respect', 'withdraw', 'retreat'],
      exampleSentences: [
        { en: 'New housing developments continue to move forward and onto the forest, which will encroach on wildlife habitat.', ko: '새로운 주택 개발이 계속 진행되어 숲으로 향하고 있으며, 이는 야생동물 서식지를 침해할 것입니다.' },
        { en: 'It is important to set boundaries so that professional responsibilities do not encroach on your personal life.', ko: '직업적 책임이 개인적인 삶을 침해하지 않도록 경계를 설정하는 것이 중요합니다.' },
      ],
    }
  ),
  word('Endemic', '풍토성의', 8, 'adjective',
    ['흔한', '보편적', '전세계적', '외래의', '이질적', '범용의', '일시적', '수입된', '낯선', '광범위한'],
    tips({
      etymology: 'en(안에) + dem(사람들)이 합쳐져 특정 지역 사람들 사이에 머물러 있다는 뜻입니다.',
      visual: '지도에서 오직 한 섬에만 빨간색으로 표시된 희귀 식물 분포도를 상상하세요.',
      soundAlike: '엔데믹 - 팬데믹(Pandemic)이 전 세계적이라면, 엔데믹은 그 지역 안(En)에 갇힌 것입니다.',
      context: '특정 지역의 질병이나 그 사회에 뿌리 깊게 박힌 고질적인 문제를 묘사할 때 씁니다.',
      synonymAntonym: '동의어로는 native, indigenous가 있고, 반의어로는 exotic, foreign이 있습니다.',
    }),
    {
      definition: 'Regularly found among particular people or in a certain area.',
      synonyms: ['native', 'indigenous', 'local'],
      antonyms: ['exotic', 'foreign', 'extrinsic'],
      exampleSentences: [
        { en: 'Malaria is endemic to tropical regions.', ko: '말라리아는 열대 지역의 풍토병이다.' },
        { en: 'Corruption was endemic in the old regime.', ko: '부패는 구 정권에 만연해 있었다.' },
      ],
    }
  ),
  word('Engender', '일으키다', 8, 'verb',
    ['막다', '억제하다', '종식시키다', '제거하다', '소멸시키다', '파괴하다', '중단하다', '방해하다', '금지하다', '거부하다'],
    tips({
      etymology: 'en(만들다)과 gender(종류/발생)가 결합되어 새로운 상태나 감정을 낳는다는 의미를 형성합니다.',
      visual: '텅 빈 공간에서 갑자기 안개가 피어오르거나 새로운 생명이 태동하는 모습을 상상해 보세요.',
      soundAlike: '엔젠더 - \'안에(In) 생기게(Generate) 더\' 한다고 연상하면 기억하기 쉽습니다.',
      context: '주로 신뢰, 증오, 논란과 같은 추상적인 감정이나 사회적 상황을 유발할 때 격식 있게 사용합니다.',
      synonymAntonym: '무언가를 발생시키는 produce와 비슷하며, 반대로 억누르는 quell과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To be the cause of a particular feeling, atmosphere, or situation.',
      synonyms: ['produce', 'instigate', 'provoke'],
      antonyms: ['extinguish', 'suppress', 'halt'],
      exampleSentences: [
        { en: 'The minister\'s speech was designed to engender confidence in the economy.', ko: '장관의 연설은 경제에 대한 신뢰를 불러일으키기 위해 계획되었습니다.' },
        { en: 'Poor communication can often engender misunderstanding between team members.', ko: '서툰 의사소통은 종종 팀원들 사이에 오해를 일으킬 수 있습니다.' },
      ],
    }
  ),
  word('Enigma', '수수께끼', 8, 'noun',
    ['명백함', '해답', '투명', '단순', '평범', '진실', '공개', '사실', '설명', '이해'],
    tips({
      etymology: '그리스어 ainigma에서 유래했으며, \'어둡게 말하기\' 즉 수수께끼를 뜻합니다.',
      visual: '안개 속에 가려진 정체불명의 인물이나 풀리지 않는 퍼즐 조각을 상상하세요.',
      soundAlike: '제2차 세계대전 당시 독일군이 사용했던 전설적인 암호기 이름인 \'에니그마\'를 떠올려 보세요.',
      context: '도저히 속을 알 수 없는 사람이나 과학적으로 풀리지 않는 미스터리를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'mystery와 유사하며, 명확하게 밝혀진 상태를 뜻하는 clarity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person, thing, or situation that is mysterious, puzzling, or ambiguous and difficult to interpret.',
      synonyms: ['mystery', 'puzzle', 'riddle'],
      antonyms: ['clarity', 'obviousness', 'solution'],
      exampleSentences: [
        { en: 'Her motives for leaving so suddenly remain an enigma.', ko: '그녀가 그렇게 갑자기 떠난 동기는 여전히 수수께끼이다.' },
        { en: 'The disappearance of the plane remains an enigma.', ko: '그 비행기의 실종은 여전히 수수께끼로 남아 있다.' },
      ],
    }
  ),
  word('Enmity', '적의', 8, 'noun',
    ['우정', '화해', '우호', '친선', '협력', '사랑', '평화', '친밀', '동맹', '호의'],
    tips({
      etymology: '단어 내부에 \'enemy(적)\'의 흔적이 보입니다. 라틴어 \'inimicitia\'에서 유래하여 적대적인 상태를 뜻하게 되었습니다.',
      visual: '축구 경기장에서 서로를 매섭게 노려보며 당장이라도 싸울 듯한 양 팀 서포터즈의 눈빛을 상상해 보세요.',
      soundAlike: '\'엔미티\'라고 발음하며 \'적(Enemy)인 티\'를 팍팍 내는 강한 증오심을 연상하면 기억하기 쉽습니다.',
      context: '단순한 싫어함(dislike)을 넘어, 오랜 시간 쌓여온 뿌리 깊은 원한이나 국가 간의 적대 관계를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'Hostility나 Animosity와 비슷하며, 반대로 Amity(우호)나 Goodwill(선의)과는 정반대의 개념입니다.',
    }),
    {
      definition: 'A feeling or condition of deep-seated ill will or active opposition between people or groups.',
      synonyms: ['hostility', 'animosity', 'antagonism'],
      antonyms: ['friendship', 'amity', 'goodwill'],
      exampleSentences: [
        { en: 'There was deep enmity between the two rival families.', ko: '두 라이벌 가문 사이에는 깊은 적의가 있었다.' },
        { en: 'The two nations have a long history of enmity.', ko: '두 나라는 오랜 적대 관계의 역사를 가지고 있다.' },
      ],
    }
  ),
  word('Enumerate', '열거하다', 8, 'verb',
    ['생략하다', '요약하다', '종합하다', '통합하다', '하나로 묶다', '무시하다', '감추다', '축약하다', '합치다', '건너뛰다'],
    tips({
      etymology: 'e(밖으로) + numer(숫자)가 합쳐져 숫자를 세듯 하나하나 밖으로 꺼내 말한다는 뜻입니다.',
      visual: '손가락을 하나씩 접어가며 목록을 차례대로 읊는 사람의 모습을 상상하세요.',
      soundAlike: '이누머레이트 - Number(숫자)를 매겨서 나열한다고 생각하면 쉽습니다.',
      context: '보고서에서 비용을 나열하거나, 연설에서 이유를 조목조목 밝힐 때 자주 사용합니다.',
      synonymAntonym: 'list, itemize와 의미가 통하며, 전체를 뭉뚱그리는 summarize와는 반대됩니다.',
    }),
    {
      definition: 'To name or count a series of items or facts separately and in order.',
      synonyms: ['list', 'itemize', 'detail'],
      antonyms: ['summarize', 'generalize', 'omit'],
      exampleSentences: [
        { en: 'She enumerated the reasons for her decision.', ko: '그녀는 자신의 결정에 대한 이유들을 일일이 열거했다.' },
        { en: 'The report enumerates all the costs involved in the project.', ko: '그 보고서는 프로젝트에 포함된 모든 비용을 열거하고 있다.' },
      ],
    }
  ),
  word('Ephemeral', '덧없는', 8, 'adjective',
    ['영구적인', '지속적인', '오래가는', '변치 않는', '불멸의', '고정된', '영원한', '장기적인', '무한한', '안정적인'],
    tips({
      etymology: '그리스어 \'ephemeros\'에서 유래했으며, 이는 \'단 하루뿐인\'이라는 뜻으로 하루살이처럼 수명이 매우 짧음을 의미합니다.',
      visual: '햇빛에 반짝이다가 순식간에 터져 사라지는 비눗방울이나 아침 이슬을 상상해 보세요.',
      soundAlike: '\'잎(Leaf)이 머물(meral)\'다 금방 떨어지는 모습처럼, 아주 짧은 시간 동안만 머무르는 상태를 연상하세요.',
      context: '유행, 젊음, 안개, 혹은 찰나의 감정처럼 금방 사라져 버리는 속성을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '금방 지나가는 fleeting과 유사하며, 영원히 지속되는 permanent와는 정반대의 개념입니다.',
    }),
    {
      definition: 'Lasting for a very brief period of time and quickly fading away.',
      synonyms: ['fleeting', 'transient', 'momentary'],
      antonyms: ['permanent', 'eternal', 'perpetual'],
      exampleSentences: [
        { en: 'The joy of winning the lottery proved to be ephemeral as the money quickly ran out.', ko: '복권 당첨의 기쁨은 돈이 금방 바닥나면서 덧없는 것으로 드러났다.' },
        { en: 'Artists often try to capture the ephemeral beauty of a sunset through their paintings.', ko: '예술가들은 종종 그림을 통해 일몰의 순식간에 사라지는 아름다움을 포착하려고 노력한다.' },
      ],
    }
  ),
  word('Equanimity', '침착', 8, 'noun',
    ['동요', '흥분', '불안', '초조', '좌절', '격분', '혼란', '공포', '당황', '분노'],
    tips({
      etymology: '라틴어 aequus(같은, 평등한)와 animus(마음, 정신)가 결합되어 \'항상 일정한 마음 상태\'를 의미합니다.',
      visual: '폭풍우가 몰아치는 바다 한가운데서도 흔들림 없이 고요하게 떠 있는 작은 배를 상상해 보세요.',
      soundAlike: '앞부분 \'Equa\'가 \'Equal(동일한)\'과 비슷하므로, 감정의 기복 없이 마음이 늘 같은 상태라고 기억하세요.',
      context: '주로 비상사태, 큰 손실, 혹은 극심한 압박감이 느껴지는 어려운 상황에서 평정심을 유지할 때 사용됩니다.',
      synonymAntonym: 'Composure와 유사하게 차분함을 뜻하며, 마음이 심하게 흔들리는 Agitation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A state of mental calmness and emotional balance, particularly when facing a difficult or stressful situation.',
      synonyms: ['composure', 'serenity', 'placidity'],
      antonyms: ['agitation', 'anxiety', 'perturbation'],
      exampleSentences: [
        { en: 'She faced the crisis with equanimity, never losing her cool.', ko: '그녀는 냉정함을 잃지 않고 침착하게 위기에 맞섰다.' },
        { en: 'He accepted the verdict with remarkable equanimity.', ko: '그는 놀라울 정도로 평정심을 유지하며 판결을 받아들였다.' },
      ],
    }
  ),
  word('Equitable', '공정한', 8, 'adjective',
    ['불공정한', '편파적인', '차별적인', '부당한', '불균형한', '편향된', '치우친', '독단적인', '불평등한', '주관적인'],
    tips({
      etymology: '라틴어 aequitas(공정)에서 유래하여 모두에게 동등한 권리를 준다는 의미를 담고 있습니다.',
      visual: '양쪽 접시에 똑같은 무게의 물건이 놓여 완벽한 수평을 이루고 있는 황금 저울의 모습',
      soundAlike: '에퀴(Equal) + 터블(Table): 회의 탁자(Table)에 둘러앉은 사람들에게 보상을 똑같이(Equal) 나누어 주는 장면',
      context: '단순히 운이 좋은 것이 아니라, 법적 권리나 자원 배분처럼 원칙에 따라 치우침 없이 배분되는 상황에 쓰입니다.',
      synonymAntonym: 'fair와 유사하지만 더 격식 있는 표현이며, 한쪽으로 치우친 상태인 biased와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Dealing fairly and equally with all concerned parties based on principles of justice.',
      synonyms: ['impartial', 'unbiased', 'egalitarian'],
      antonyms: ['unfair', 'biased', 'prejudiced'],
      exampleSentences: [
        { en: 'The goal is to ensure an equitable distribution of resources among all citizens.', ko: '목표는 모든 시민들 사이에 자원이 공정하게 분배되도록 보장하는 것이다.' },
        { en: 'The new tax system aims to be more equitable for low-income families.', ko: '새로운 세제는 저소득 가구에게 더 공정하게 적용되는 것을 목표로 한다.' },
      ],
    }
  ),
];
