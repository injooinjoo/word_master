import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch06: VocabItem[] = [
  word('Concern', '걱정, 관심사', 3, 'noun',
    ['무관심', '기쁨', '확신', '안도', '만족', '평온', '자신감', '여유', '태평', '즐거움'],
    tips({
      etymology: '라틴어 con(함께)과 cernere(구분하다)가 합쳐져 \'함께 마음을 쓰며 살피다\'라는 의미에서 유래했습니다.',
      visual: '중요한 시험을 앞두고 미간을 찌푸리며 걱정스러운 표정으로 생각에 잠긴 사람을 떠올려 보세요.',
      soundAlike: '발음이 \'큰 선\'과 비슷하죠? 내 마음속에 \'큰 선\'을 긋고 계속 신경 쓰는 \'관심사\'라고 외워보세요.',
      context: '주로 건강, 안전, 환경처럼 우리가 주의를 기울여야 할 중요한 문제나 걱정거리를 말할 때 자주 쓰입니다.',
      synonymAntonym: '유의어는 worry, care, anxiety가 있고, 반의어는 indifference, unconcern, apathy가 있습니다.',
    }),
    {
      definition: 'a matter of interest or importance that causes a feeling of worry or care',
      synonyms: ['worry', 'care', 'anxiety'],
      antonyms: ['indifference', 'unconcern', 'apathy'],
      exampleSentences: [
        { en: 'The safety of the passengers is our primary consideration.', ko: '승객들의 안전이 우리의 주된 관심사입니다.' },
        { en: 'The doctor listened to the patient\'s health issues with great attention.', ko: '의사는 환자의 건강 문제에 대해 깊은 우려를 가지고 경청했습니다.' },
      ],
    }
  ),
  word('Condition', '상태, 조건', 3, 'noun',
    ['질병', '증상', '원인', '결과', '과정', '방법', '수단', '목적', '의도', '바람'],
    tips({
      etymology: '라틴어 con(함께)과 dicere(말하다)가 합쳐져, 어떤 일을 하기 위해 \'함께 약속한 사항\'이라는 의미에서 유래했습니다.',
      visual: '중고차를 살 때 엔진의 겉모습과 내부 성능을 꼼꼼히 살피거나, 계약서 하단에 적힌 세부 조항들을 확인하는 장면을 떠올려 보세요.',
      soundAlike: '일상생활에서 \'오늘 컨디션이 안 좋아\'라고 말할 때의 그 단어로, 몸이나 마음의 현재 \'상태\'를 의미합니다.',
      context: '물건의 보존 상태를 나타낼 때뿐만 아니라, 계약이나 합의가 이루어지기 위해 반드시 충족되어야 하는 \'전제 조건\'으로도 자주 쓰입니다.',
      synonymAntonym: '비슷한 말로는 state(상태)나 requirement(요건)가 있고, 반대 개념으로는 무질서한 상태를 뜻하는 disorder나 chaos를 들 수 있습니다.',
    }),
    {
      definition: 'the physical situation that someone or something is in, or a rule that must be satisfied before an agreement is made',
      synonyms: ['state', 'circumstance', 'requirement'],
      antonyms: ['disorder', 'chaos', 'mess'],
      exampleSentences: [
        { en: 'The vintage camera was sold in excellent working condition.', ko: '그 빈티지 카메라는 작동 상태가 아주 양호한 상태로 판매되었습니다.' },
        { en: 'A high level of English proficiency is a necessary condition for this position.', ko: '높은 수준의 영어 숙달도는 이 직책을 위한 필수 조건입니다.' },
      ],
    }
  ),
  word('Confident', '자신 있는', 3, 'adjective',
    ['자신 없는', '소심한', '겁많은', '불안한', '의심스러운', '수줍은', '위축된', '겸손한', '조심스러운', '우물쭈물한'],
    tips({
      etymology: '라틴어 어근 \'con(완전히)\'과 \'fidere(믿다)\'가 결합되어, 자기 자신을 완전히 믿는 상태를 의미합니다.',
      visual: '면접장에서 허리를 곧게 펴고 면접관의 눈을 똑바로 바라보며 미소 짓는 지원자의 당당한 모습을 상상해 보세요.',
      soundAlike: '\'큰 피던\'과 발음이 비슷합니다. 가슴속에 \'큰\' 열정이 \'피던\' 시절의 당당하고 확신에 찬 기운을 떠올려 보세요.',
      context: '자신의 실력을 믿고 결과에 대해 확신이 있을 때, 혹은 대중 앞에서 주저함 없이 행동할 때 주로 쓰입니다.',
      synonymAntonym: '확신에 찬 self-assured와 유의어이며, 스스로를 믿지 못하는 상태인 insecure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'feeling or showing a strong belief in one\'s own abilities, qualities, or the successful outcome of a situation',
      synonyms: ['self-assured', 'certain', 'bold'],
      antonyms: ['insecure', 'doubtful', 'shy'],
      exampleSentences: [
        { en: 'She felt very positive and ready for the interview.', ko: '그녀는 면접에 대해 매우 긍정적이고 자신 있는 기분이었다.' },
        { en: 'He spoke in a firm and steady tone that showed he knew the subject well.', ko: '그는 주제를 잘 알고 있음을 보여주는 확신에 찬 어조로 말했다.' },
      ],
    }
  ),
  word('Confirm', '확인하다', 3, 'verb',
    ['부인하다', '취소하다', '거절하다', '의심하다', '혼동하다', '무시하다', '잊다', '변경하다', '폐기하다', '부정하다'],
    tips({
      etymology: 'con(강조)과 firmare(단단하게 하다)가 만나 \'사실임을 단단히 굳히다\'라는 의미가 되었습니다.',
      visual: '예약 사이트에서 마지막에 \'확인\' 버튼을 누르거나 서류에 도장을 쾅 찍는 모습을 상상해 보세요.',
      soundAlike: '직장에서 흔히 쓰는 \'컨펌 받다\'라는 말의 주인공입니다. 상사에게 확인을 받는 과정이죠.',
      context: '비행기 예약, 소문이 사실인지 여부, 회의 시간 등을 확실히 정할 때 주로 사용합니다.',
      synonymAntonym: '유의어는 verify, validate, approve가 있고, 반의어는 deny, reject, cancel가 있습니다.',
    }),
    {
      definition: 'to establish the truth or correctness of something previously believed or suspected',
      synonyms: ['verify', 'validate', 'corroborate'],
      antonyms: ['deny', 'refute', 'contradict'],
      exampleSentences: [
        { en: 'Please verify your reservation by Friday to ensure your seat is held.', ko: '좌석 확보를 위해 금요일까지 예약을 확인해 주세요.' },
        { en: 'The test results serve to validate the initial diagnosis made by the doctor.', ko: '검사 결과는 의사가 내린 초기 진단이 맞음을 확인해 줍니다.' },
      ],
    }
  ),
  word('Connect', '연결하다', 3, 'verb',
    ['분리하다', '단절하다', '해제하다', '차단하다', '고립시키다', '분해하다', '거절하다', '무시하다', '파괴하다', '방해하다'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'nectere(묶다)\'가 합쳐진 단어로, 여러 대상을 하나로 단단히 묶는다는 어원을 가집니다.',
      visual: '두 개의 끊어진 전선을 하나로 꼬아 잇거나, 자석 두 개가 서로 착 달라붙는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터나 스마트폰의 \'커넥터(Connector)\'를 생각하면 쉽습니다. 기기를 서로 이어주는 장치를 떠올려 보세요.',
      context: '단순히 물건을 잇는 것 외에도, 사람과 대화가 잘 통하거나 두 사건 사이의 논리적 연관성을 찾을 때 자주 사용됩니다.',
      synonymAntonym: 'link나 join은 결합을 강조하고, 반대로 disconnect나 separate는 붙어 있던 것을 떼어내는 상황에 쓰입니다.',
    }),
    {
      definition: 'to join two or more things together or to form a relationship between people or ideas',
      synonyms: ['link', 'join', 'attach'],
      antonyms: ['disconnect', 'separate', 'detach'],
      exampleSentences: [
        { en: 'You need to plug in the cable to connect the printer to your computer.', ko: '프린터를 컴퓨터에 연결하려면 케이블을 꽂아야 합니다.' },
        { en: 'The new subway line will connect the airport with the city center.', ko: '새 지하철 노선은 공항과 도심을 연결할 것입니다.' },
      ],
    }
  ),
  word('Consider', '고려하다', 3, 'verb',
    ['무시하다', '경시하다', '버리다', '즉각 결정하다', '성급히 행동하다', '무분별하게 하다', '설렁설렁 보다', '가볍게 여기다', '대충 훑어보다', '얕보다'],
    tips({
      etymology: 'con(함께)과 sidus(별)에서 유래하여, 옛날에 별자리를 보며 운명을 신중히 살피던 것에서 \'고려하다\'가 되었습니다.',
      visual: '턱을 괴고 여러 가지 선택지를 책상 위에 올려둔 채 무엇이 좋을지 깊이 고민하는 학자의 모습입니다.',
      soundAlike: '발음이 \'큰 시더\'와 비슷하죠? \'큰\' 문제를 \'시더(보여)\'주며 꼼꼼히 따져보는 상황을 연상하세요.',
      context: '결정을 내리기 전에 장단점을 비교하거나, 타인의 감정을 배려하여 생각할 때 사용합니다.',
      synonymAntonym: '유의어는 contemplate, ponder, weigh가 있고, 반의어는 ignore, neglect, overlook가 있습니다.',
    }),
    {
      definition: 'to think carefully about something, typically before making a decision',
      synonyms: ['contemplate', 'ponder', 'weigh'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'We need to examine all options before deciding.', ko: '결정하기 전에 모든 선택지를 고려해야 한다.' },
        { en: 'He is widely regarded as an expert in the field.', ko: '그는 그 분야의 전문가로 여겨진다.' },
      ],
    }
  ),
  word('Constant', '지속적인', 3, 'adjective',
    ['일시적인', '변경되는', '불규칙한', '간헐적인', '희박한', '드문', '가끔의', '때때로의', '순간적인', '순식간의'],
    tips({
      etymology: 'con(함께)과 stare(서다)가 합쳐져 \'변하지 않고 그 자리에 계속 서 있는\' 상태를 의미합니다.',
      visual: '멈추지 않고 일정한 속도로 계속해서 돌아가는 시계 바늘이나 흐르는 강물을 상상해 보세요.',
      soundAlike: '발음이 \'큰 스탠드\'와 비슷하죠? \'큰 스탠드\' 조명이 꺼지지 않고 계속 켜져 있는 모습을 떠올려 보세요.',
      context: '끊임없이 반복되는 소음이나, 변치 않는 우정, 혹은 수학에서의 \'상수\'를 표현할 때 씁니다.',
      synonymAntonym: '유의어는 continuous, steady, persistent가 있고, 반의어는 variable, temporary, irregular가 있습니다.',
    }),
    {
      definition: 'occurring continuously over a period of time without change',
      synonyms: ['continuous', 'steady', 'persistent'],
      antonyms: ['variable', 'temporary', 'irregular'],
      exampleSentences: [
        { en: 'She needs care and attention.', ko: '그녀는 지속적인 돌봄과 관심이 필요하다.' },
        { en: 'The noise made it hard to sleep.', ko: '끊임없는 소음으로 잠들기 어려웠다.' },
      ],
    }
  ),
  word('Construction', '건설, 공사', 3, 'noun',
    ['파괴', '해체', '철거', '폐쇄', '폐업', '종료', '해산', '분해', '무너짐', '붕괴'],
    tips({
      etymology: 'con(함께)과 struere(쌓다)가 합쳐져 \'재료들을 함께 쌓아 올리는 과정\'을 뜻합니다.',
      visual: '노란 안전모를 쓴 인부들이 크레인을 이용해 높은 빌딩의 뼈대를 세우는 공사 현장을 떠올리세요.',
      soundAlike: '발음이 \'큰 스트럭션\'과 비슷하죠? \'큰\' 구조물을 \'스트럭(쌓다)\'하는 대규모 공사를 연상하세요.',
      context: '건물이나 다리를 짓는 물리적인 공사뿐만 아니라, 문장을 구성하는 체계를 말할 때도 사용됩니다.',
      synonymAntonym: '유의어는 building, erection, assembly가 있고, 반의어는 demolition, destruction, ruin가 있습니다.',
    }),
    {
      definition: 'the process of building or assembling something, especially a large structure like a house, bridge, or road',
      synonyms: ['building', 'erection', 'assembly'],
      antonyms: ['demolition', 'destruction', 'ruin'],
      exampleSentences: [
        { en: 'The building of the new bridge will take two years to complete.', ko: '새 다리의 건설을 완료하는 데 2년이 걸릴 것이다.' },
        { en: 'Ongoing road work has blocked the main entrance to the city.', ko: '진행 중인 도로 공사로 인해 도시의 정문이 막혔다.' },
      ],
    }
  ),
  word('Contain', '포함하다', 3, 'verb',
    ['제외하다', '배제하다', '방출하다', '누출하다', '제거하다', '분리하다', '생략하다', '거부하다', '삭제하다', '배출하다'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'tenere(잡다)\'가 합쳐진 단어로, 여러 요소를 한데 모아 잡고 있다는 의미에서 유래했습니다.',
      visual: '커다란 유리병 안에 사탕들이 가득 담겨 뚜껑이 닫혀 있는 모습을 상상해 보세요.',
      soundAlike: '화물 수송에 쓰이는 거대한 박스인 \'컨테이너(container)\'를 떠올리면 무언가를 담는 이미지가 쉽게 연상됩니다.',
      context: '제품의 성분 표시를 읽거나, 감정이 밖으로 터져 나오지 않게 억누를 때 주로 사용됩니다.',
      synonymAntonym: '안에 넣는다는 include와 유의어이며, 밖으로 빼버리는 exclude와는 반대되는 관계입니다.',
    }),
    {
      definition: 'to have something inside or as part of itself, or to keep a feeling or a situation under control',
      synonyms: ['include', 'comprise', 'incorporate'],
      antonyms: ['exclude', 'omit', 'discard'],
      exampleSentences: [
        { en: 'The orange juice does not contain any added sugar.', ko: '그 오렌지 주스에는 설탕이 전혀 첨가되어 있지 않다.' },
        { en: 'He had to take a deep breath to contain his anger.', ko: '그는 화를 억누르기 위해 심호흡을 해야만 했다.' },
      ],
    }
  ),
  word('Content', '내용, 만족', 3, 'noun',
    ['형식', '외관', '표지', '껍데기', '불만', '갈망', '탐욕', '야망', '불평', '불쾌'],
    tips({
      etymology: '함께(con) 유지하다(tent)라는 의미에서 무언가 안에 \'담긴 것\'이라는 뜻이 되었습니다.',
      visual: '책의 목차(Table of Contents) 페이지나 상자 안에 가득 찬 물건들을 상상해 보세요.',
      soundAlike: '우리가 흔히 말하는 \'유튜브 콘텐츠\'나 \'디지털 콘텐츠\'의 그 단어와 발음이 같습니다.',
      context: '책이나 영상의 알맹이를 뜻하기도 하지만, 추상적으로는 마음의 \'충족감\'이나 \'만족\'을 의미하기도 합니다.',
      synonymAntonym: '알맹이를 뜻하는 substance와 비슷하며, 겉모습을 뜻하는 exterior와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The ideas, facts, or images that are included in a book, article, speech, or movie.',
      synonyms: ['substance', 'matter', 'subject'],
      antonyms: ['form', 'exterior', 'void'],
      exampleSentences: [
        { en: 'The content of the book is fascinating and well-researched.', ko: '그 책의 내용은 매혹적이며 조사가 잘 이루어졌다.' },
        { en: 'The website has updated its digital content to attract more visitors.', ko: '그 웹사이트는 더 많은 방문자를 끌어들이기 위해 디지털 콘텐츠를 업데이트했다.' },
      ],
    }
  ),
  word('Continue', '계속하다', 3, 'verb',
    ['중단하다', '멈추다', '그만두다', '끊다', '종료하다', '포기하다', '휴식하다', '쉬다', '일시정지하다', '끝내다'],
    tips({
      etymology: '라틴어 \'continuare\'에서 유래했으며, \'함께(con)\'와 \'유지하다(tenere)\'가 결합되어 끊임없이 이어진다는 의미를 가집니다.',
      visual: '끊김 없이 일직선으로 길게 뻗어 있는 기찻길이나 마라톤 선수가 달리는 모습을 상상해 보세요.',
      soundAlike: '오락실 게임기 화면에서 죽었을 때 다시 시작할지 묻는 \'컨티뉴\' 버튼을 떠올리면 쉽습니다.',
      context: '회의를 재개하거나, 날씨가 유지되거나, 하던 공부를 멈추지 않고 진행할 때 두루 쓰입니다.',
      synonymAntonym: '진행하다라는 뜻의 proceed와 비슷하며, 완전히 멈추는 cease와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to maintain a particular action or condition without interruption or to resume after a pause',
      synonyms: ['proceed', 'persist', 'resume'],
      antonyms: ['cease', 'halt', 'discontinue'],
      exampleSentences: [
        { en: 'The team decided to continue the project despite the budget cuts.', ko: '팀은 예산 삭감에도 불구하고 프로젝트를 계속하기로 결정했습니다.' },
        { en: 'If the pain continues, you should consult a doctor immediately.', ko: '통증이 계속되면 즉시 의사와 상담해야 합니다.' },
      ],
    }
  ),
  word('Contrast', '대조', 3, 'noun',
    ['유사', '동일', '일치', '비슷함', '같음', '혼동', '혼합', '융합', '통합', '조화'],
    tips({
      etymology: '라틴어 \'contra(반대로)\'와 \'stare(서다)\'가 합쳐진 단어로, 서로 반대편에 서서 비교한다는 의미에서 유래되었습니다.',
      visual: '검은색 배경 위에 놓인 하얀색 물체처럼 색깔이나 밝기가 확연히 차이 나는 이미지를 떠올려 보세요.',
      soundAlike: '사진 편집이나 TV 설정 메뉴에서 화면의 밝고 어두운 차이를 조절하는 \'컨트라스트\'를 생각하면 쉽습니다.',
      context: '두 대상의 성격, 색상, 상황 등이 서로 얼마나 다른지 그 차이점을 강조하여 설명할 때 주로 사용합니다.',
      synonymAntonym: 'difference와 유사하게 쓰이며, 서로 닮은 점을 뜻하는 similarity와는 정반대의 개념입니다.',
    }),
    {
      definition: 'a clear and striking difference that is apparent when two or more things are compared',
      synonyms: ['difference', 'distinction', 'disparity'],
      antonyms: ['similarity', 'resemblance', 'likeness'],
      exampleSentences: [
        { en: 'There is a sharp contrast between the two architectural styles.', ko: '그 두 건축 양식 사이에는 극명한 대조가 있다.' },
        { en: 'The contrast in their personalities was striking to everyone in the room.', ko: '그들의 성격 차이는 방 안의 모든 사람에게 눈에 띌 정도로 강렬했다.' },
      ],
    }
  ),
  word('Contribute', '기여하다', 3, 'verb',
    ['방해하다', '해치다', '빼앗다', '손해를 끼치다', '훼손하다', '무시하다', '거절하다', '기권하다', '포기하다', '철회하다'],
    tips({
      etymology: '함께를 뜻하는 \'con\'과 할당하여 준다는 \'tribute\'가 합쳐져 여럿이 힘을 보탠다는 의미가 되었습니다.',
      visual: '여러 명의 사람들이 각자 손에 든 퍼즐 조각을 모아 하나의 커다란 그림을 완성해 나가는 장면을 상상해 보세요.',
      soundAlike: '존경의 표시로 바치는 \'트리뷰트(tribute)\' 공연을 떠올리면 무언가를 바치고 기여한다는 느낌을 쉽게 연결할 수 있습니다.',
      context: '단순히 돈을 기부하는 것뿐만 아니라, 회의에서 아이디어를 내거나 팀의 성공에 일조할 때도 자주 쓰이는 단어입니다.',
      synonymAntonym: '무언가를 주는 donate와 비슷하지만, 반대로 주지 않고 움켜쥐는 withhold와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'to give something, such as money, help, or ideas, to help achieve a particular goal or to make something successful',
      synonyms: ['donate', 'provide', 'subscribe'],
      antonyms: ['withhold', 'withdraw', 'deprive'],
      exampleSentences: [
        { en: 'Every employee is encouraged to contribute new ideas during the weekly meeting.', ko: '모든 직원은 주간 회의 동안 새로운 아이디어를 제안하도록 권장됩니다.' },
        { en: 'The local community contributed thousands of dollars to rebuild the old library.', ko: '지역 사회는 오래된 도서관을 재건하기 위해 수천 달러를 기부했습니다.' },
      ],
    }
  ),
  word('Control', '통제, 조절', 3, 'noun',
    ['무질서', '혼란', '방임', '자유', '해방', '해제', '무제한', '폭주', '과잉', '통제 불가'],
    tips({
      etymology: '반대(contra)로 굴러가는 것(roll)을 막고 관리한다는 뜻에서 유래했습니다.',
      visual: '자동차 핸들이나 게임기의 조종기를 양손으로 꽉 잡고 있는 모습을 상상해 보세요.',
      soundAlike: 'TV 리모컨의 원래 이름인 \'리모트 컨트롤(Remote Control)\'을 떠올리면 기억하기 쉽습니다.',
      context: '기계를 조작하는 물리적인 힘뿐만 아니라, 감정이나 상황을 억제하는 정신적인 힘을 말할 때도 쓰입니다.',
      synonymAntonym: 'Regulation과 유사한 의미를 가지며, 아무런 제약이 없는 Chaos와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the power to influence or direct people\'s behavior or the course of events',
      synonyms: ['regulation', 'command', 'mastery'],
      antonyms: ['chaos', 'disorder', 'powerlessness'],
      exampleSentences: [
        { en: 'She has good control over her emotions even in stressful situations.', ko: '그녀는 스트레스가 많은 상황에서도 자신의 감정을 잘 조절한다.' },
        { en: 'The pilot struggled to regain control of the aircraft during the storm.', ko: '조종사는 폭풍우 속에서 항공기의 제어력을 되찾기 위해 애썼다.' },
      ],
    }
  ),
  word('Convenient', '편리한', 3, 'adjective',
    ['불편한', '번거로운', '까다로운', '어려운', '성가신', '귀찮은', '불쾌한', '어색한', '거추장스러운', '힘든'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'venire(오다)\'가 합쳐진 단어로, 필요한 것이 제때 맞춰 온다는 의미에서 유래했습니다.',
      visual: '집에서 1분 거리에 있는 24시간 편의점의 밝은 간판을 떠올려 보세요.',
      soundAlike: '한국에서도 자주 쓰는 \'컨비니언스 스토어(편의점)\'의 앞부분 발음과 비슷합니다.',
      context: '단순히 물건뿐만 아니라 시간이나 장소가 본인의 일정에 딱 맞을 때도 자주 사용합니다.',
      synonymAntonym: 'handy는 손에 닿기 쉬운 편리함을, inconvenient는 반대로 절차가 복잡한 불편함을 뜻합니다.',
    }),
    {
      definition: 'fitting in well with a person\'s individual plans or needs, or causing little difficulty for someone.',
      synonyms: ['handy', 'accessible', 'practical'],
      antonyms: ['inconvenient', 'awkward', 'troublesome'],
      exampleSentences: [
        { en: 'The hotel is in a very convenient location for sightseeing.', ko: '그 호텔은 관광하기에 매우 편리한 위치에 있습니다.' },
        { en: 'Please call me whenever it is most convenient for you.', ko: '당신이 가장 편한 시간일 때 언제든지 제게 전화해 주세요.' },
      ],
    }
  ),
  word('Conversation', '대화', 3, 'noun',
    ['침묵', '독백', '일방통행', '독서', '격리', '고립', '무시', '무응답', '잠적', '입 다물기'],
    tips({
      etymology: '함께(con) 돌아가며(vers) 말을 주고받는 행위를 뜻합니다.',
      visual: '카페에서 두 사람이 마주 앉아 즐겁게 수다를 떠는 장면입니다.',
      soundAlike: '대화하다라는 동사 \'컨버스(converse)\'의 명사형입니다.',
      context: '격식 없는 가벼운 대화나 일상적인 소통을 말할 때 씁니다.',
      synonymAntonym: 'talk와 유의어이며 silence와는 반대되는 상황입니다.',
    }),
    {
      definition: 'an informal exchange of ideas or talk between people',
      synonyms: ['talk', 'dialogue', 'chat'],
      antonyms: ['silence', 'monologue', 'quiet'],
      exampleSentences: [
        { en: 'We had a nice conversation over dinner.', ko: '우리는 저녁 식사를 하며 즐거운 대화를 나누었습니다.' },
        { en: 'I overheard their conversation by accident.', ko: '나는 우연히 그들의 대화를 엿듣게 되었습니다.' },
      ],
    }
  ),
  word('Convince', '설득하다', 3, 'verb',
    ['의심시키다', '혼란시키다', '거절하다', '방해하다', '반대하다', '포기하다', '속이다', '무시하다', '망설이다', '비난하다'],
    tips({
      etymology: '라틴어 con(완전히)과 vincere(이기다)가 결합된 단어로, 논리로 상대를 완전히 이겨 마음을 돌려놓는다는 어원을 가집니다.',
      visual: '상대방의 머리 위에 물음표가 느낌표로 바뀌며 고개를 끄덕이는 모습을 상상해보세요.',
      soundAlike: '컨빈스(Convince) -> \'큰 빈\' 곳을 채우다. 상대방의 비어있는 확신을 나의 논리로 가득 채워주는 느낌입니다.',
      context: '단순히 부탁하는 것을 넘어, 증거나 이유를 제시하여 상대가 진심으로 믿게 만들 때 자주 쓰입니다.',
      synonymAntonym: 'persuade는 행동을 하게 하는 설득에 가깝고, convince는 믿음을 갖게 하는 설득에 가깝습니다. 반대말은 dissuade(단념시키다)입니다.',
    }),
    {
      definition: 'to make someone feel certain that something is true or to persuade them to do something',
      synonyms: ['persuade', 'assure', 'satisfy'],
      antonyms: ['dissuade', 'discourage', 'deter'],
      exampleSentences: [
        { en: 'It was difficult to make him believe that the plan would actually work.', ko: '그 계획이 실제로 효과가 있을 것이라고 그를 설득하는 것은 어려웠다.' },
        { en: 'The lawyer managed to bring the jury to his side with strong evidence.', ko: '변호사는 강력한 증거로 배심원들을 설득하는 데 성공했다.' },
      ],
    }
  ),
  word('Correct', '올바른', 3, 'adjective',
    ['틀린', '잘못된', '부정확한', '오류가있는', '그릇된', '부적절한', '부당한', '나쁜', '결함있는', '거짓의'],
    tips({
      etymology: '라틴어 \'cor(함께/완전히)\'와 \'regere(똑바로 이끌다)\'가 합쳐져, 굽은 곳 없이 완전히 곧고 바르다는 의미에서 유래했습니다.',
      visual: '시험지 문제 옆에 빨간색 펜으로 커다란 동그라미(O)가 그려져 있는 모습을 상상해 보세요.',
      soundAlike: '\'커렉트\' 발음이 \'코를 렉(straight)하게\' 세우는 것과 비슷하다고 생각하며 자세를 바르게 잡는 느낌을 연상하세요.',
      context: '수학 문제의 정답을 맞혔을 때나, 상황에 맞는 예의 바른 행동을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '정확함을 강조할 때는 accurate를, 반대로 틀린 상태를 말할 때는 wrong이나 false를 사용합니다.',
    }),
    {
      definition: 'conforming to an approved or conventional standard, or being free from any errors or mistakes',
      synonyms: ['right', 'accurate', 'exact'],
      antonyms: ['wrong', 'incorrect', 'false'],
      exampleSentences: [
        { en: 'Please make sure that you have provided the information in the form.', ko: '양식에 기입한 정보가 올바른지 확인해 주세요.' },
        { en: 'It is important to use the proper tools to get the result.', ko: '정확한 결과를 얻기 위해서는 적절한 도구를 사용하는 것이 중요합니다.' },
      ],
    }
  ),
  word('Cotton', '목화, 면', 3, 'noun',
    ['실크', '울', '린넨', '나일론', '폴리에스터', '가죽', '고무', '플라스틱', '종이', '대나무'],
    tips({
      etymology: '아랍어 \'qutn\'에서 유래했으며, 이는 부드러운 식물성 섬유를 가리키는 말에서 시작되었습니다.',
      visual: '파란 하늘 아래 하얀 솜뭉치가 팝콘처럼 톡톡 터져 있는 목화밭의 풍경을 그려보세요.',
      soundAlike: '달콤하고 폭신한 \'코튼 캔디(Cotton Candy)\'가 바로 솜사탕이라는 점을 기억하세요.',
      context: '티셔츠나 수건의 세탁 라벨을 확인할 때 가장 흔하게 발견할 수 있는 소재 명칭입니다.',
      synonymAntonym: '섬유를 뜻하는 fabric과 유사하며, 인공적으로 만든 synthetic 소재와는 대조적입니다.',
    }),
    {
      definition: 'A soft, white, downy substance consisting of the hairs or fibers attached to the seeds of a particular tropical plant.',
      synonyms: ['fabric', 'fiber', 'textile'],
      antonyms: ['synthetic', 'plastic', 'metal'],
      exampleSentences: [
        { en: 'This shirt is made of 100% natural material that feels very soft on the skin.', ko: '이 셔츠는 피부에 매우 부드럽게 느껴지는 100% 천연 면 소재로 만들어졌습니다.' },
        { en: 'The farmers are busy harvesting the white crops from the fields this season.', ko: '이번 시즌에 농부들은 밭에서 하얀 목화 수확물들을 거두느라 바쁩니다.' },
      ],
    }
  ),
  word('Couple', '한 쌍, 부부', 3, 'noun',
    ['홀몸', '독신', '혼자', '단독', '개별', '단수', '하나', '여럿', '다수', '군중'],
    tips({
      etymology: '라틴어 copula에서 유래하여 두 개를 하나로 묶거나 연결한다는 뜻입니다.',
      visual: '길거리에서 다정하게 손을 잡고 걸어가는 두 남녀를 떠올려 보세요.',
      soundAlike: '커플 -> 우리말에서도 연인을 부를 때 흔히 쓰는 외래어입니다.',
      context: '꼭 연인이 아니더라도 \'두어 개\'의 적은 수량을 나타낼 때도 씁니다.',
      synonymAntonym: '유의어로는 pair, duo, twosome이 있고 반의어로는 single, individual, alone이 있습니다.',
    }),
    {
      definition: 'two people or things that are seen together or associated with each other',
      synonyms: ['pair', 'duo', 'twosome'],
      antonyms: ['single', 'individual', 'alone'],
      exampleSentences: [
        { en: 'The young pair walked along the beach holding hands.', ko: '젊은 부부가 손을 잡고 해변을 따라 걸었다.' },
        { en: 'I will be ready in just a few minutes.', ko: '단 몇 분이면 준비가 될 거예요.' },
      ],
    }
  ),
  word('Courage', '용기', 3, 'noun',
    ['겁', '소심함', '비겁', '두려움', '수줍음', '위축', '주저', '망설임', '무기력', '나약함'],
    tips({
      etymology: '라틴어 cor(심장, 마음)에서 유래하여 마음 깊은 곳에서 나오는 진정한 힘을 뜻합니다.',
      visual: '거대한 폭풍우 속에서도 굴하지 않고 묵묵히 앞으로 나아가는 항해사의 모습을 상상해 보세요.',
      soundAlike: '커리지 -> \'커\'다란 \'의지\'가 가슴 속에 가득 차서 어떤 위협도 이겨낼 수 있는 상태입니다.',
      context: '단순히 두려움이 없는 상태가 아니라, 두려움에도 불구하고 가치 있는 일을 실천하는 정신적 자질을 의미합니다.',
      synonymAntonym: 'bravery, valor와 같은 유의어는 강한 기개를 뜻하며, cowardice, timidity 같은 반의어는 겁이 많은 상태를 뜻합니다.',
    }),
    {
      definition: 'the mental or moral strength to venture, persevere, and withstand danger, fear, or difficulty',
      synonyms: ['bravery', 'valor', 'fortitude'],
      antonyms: ['cowardice', 'fearfulness', 'timidity'],
      exampleSentences: [
        { en: 'It takes a lot of mental strength to stand up for what you believe is right.', ko: '자신이 옳다고 믿는 것을 옹호하기 위해서는 많은 용기가 필요하다.' },
        { en: 'The young firefighter showed incredible spirit when entering the burning building.', ko: '그 젊은 소방관은 불타는 건물에 진입할 때 놀라운 용기를 보여주었다.' },
      ],
    }
  ),
  word('Create', '창조하다', 3, 'verb',
    ['파괴하다', '없애다', '지우다', '제거하다', '해체하다', '폐기하다', '말소하다', '소멸시키다', '무너뜨리다', '훼손하다'],
    tips({
      etymology: '라틴어 creare(성장시키다, 낳다)에서 유래하여 세상에 없던 새로운 존재를 탄생시킨다는 의미를 담고 있습니다.',
      visual: '텅 빈 하얀 도화지 위에 화가가 첫 선을 그으며 멋진 그림을 완성해 나가는 장면을 상상해 보세요.',
      soundAlike: '크리에이트 -> \'크\'게 \'이\'루어 \'내\'는 \'트\'별한(특별한) 능력이라고 기억하면 쉽습니다.',
      context: '단순히 물건을 만드는 것뿐만 아니라, 새로운 일자리, 분위기, 혹은 예술적 가치를 발생시킬 때 폭넓게 쓰입니다.',
      synonymAntonym: '무언가를 산출하는 produce와 유사하며, 공들여 세운 것을 완전히 허무는 destroy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to cause something new to exist or happen through one\'s own actions or skills',
      synonyms: ['generate', 'produce', 'originate'],
      antonyms: ['destroy', 'demolish', 'annihilate'],
      exampleSentences: [
        { en: 'The software company aims to develop tools that help people build their own websites.', ko: '그 소프트웨어 회사는 사람들이 자신만의 웹사이트를 직접 만들 수 있게 돕는 도구를 개발하는 것을 목표로 한다.' },
        { en: 'The government is trying to provide more opportunities to form new jobs for young graduates.', ko: '정부는 젊은 졸업생들을 위해 더 많은 일자리를 창출할 기회를 제공하려 노력하고 있다.' },
      ],
    }
  ),
  word('Creature', '생명체', 3, 'noun',
    ['기계', '물건', '사물', '무생물', '로봇', '도구', '장치', '건물', '구조물', '건조물'],
    tips({
      etymology: '동사 create(창조하다)에서 유래하여 \'창조된 존재\'라는 의미를 담고 있습니다.',
      visual: '판타지 영화 속 신비로운 숲에서 움직이는 작고 귀여운 요정이나 신비한 동물을 상상해 보세요.',
      soundAlike: '영화 장르 중 \'크리처물\'은 괴수나 독특한 생명체가 등장하는 영화를 뜻합니다.',
      context: '단순한 동물을 넘어 사람, 전설 속 괴물, 외계 생명체까지 아우르는 넓은 의미로 사용됩니다.',
      synonymAntonym: '살아있는 존재인 being과 대비되는 무생물인 object, machine 등과 함께 기억하세요.',
    }),
    {
      definition: 'A living entity that has the ability to move, typically referring to an animal or a fictional monster.',
      synonyms: ['being', 'animal', 'organism'],
      antonyms: ['inanimate', 'object', 'machine'],
      exampleSentences: [
        { en: 'The forest is home to many beautiful and rare living things.', ko: '그 숲은 아름답고 희귀한 많은 생명체들의 서식지입니다.' },
        { en: 'Scientists discovered a strange new inhabitant at the bottom of the sea.', ko: '과학자들은 바다 깊은 곳에서 이상한 새로운 생명체를 발견했습니다.' },
      ],
    }
  ),
  word('Credit', '신용, 공로', 3, 'noun',
    ['빚', '부채', '비난', '과실', '수치', '불명예', '무신용', '부정', '사기', '과오'],
    tips({
      etymology: '라틴어 \'credere(믿다)\'에서 유래하여 타인이 나를 믿어주는 정도를 뜻합니다.',
      visual: '물건을 먼저 받고 나중에 돈을 내겠다는 약속의 카드를 내미는 모습입니다.',
      soundAlike: '영화가 끝나고 제작진의 이름을 올리는 \'엔딩 크레딧\'을 떠올려 보세요.',
      context: '금융상의 신용뿐만 아니라 어떤 일에 대한 공로를 인정할 때도 자주 쓰입니다.',
      synonymAntonym: '유의어로는 trust, recognition, merit이 있고 반의어로는 blame, debt, disbelief가 있습니다.',
    }),
    {
      definition: 'The quality of being trusted, or the praise given to someone for an achievement.',
      synonyms: ['trust', 'recognition', 'merit'],
      antonyms: ['blame', 'debt', 'disbelief'],
      exampleSentences: [
        { en: 'She deserves full recognition for the success of this project.', ko: '그녀는 이 프로젝트의 성공에 대해 모든 공로를 인정받을 자격이 있다.' },
        { en: 'The bank refused to extend any more financial trust to the company.', ko: '은행은 그 회사에 더 이상의 신용 대출을 해주는 것을 거절했다.' },
      ],
    }
  ),
  word('Crime', '범죄', 3, 'noun',
    ['선행', '미덕', '정의', '법적', '합법', '정당', '무해', '순수', '순선', '정직'],
    tips({
      etymology: '라틴어 crimen(고발, 죄)에서 유래하여 법적 처벌을 받는 행위를 뜻하게 되었습니다.',
      visual: '경찰이 노란색 폴리스 라인을 치고 수사 중인 어두운 골목길 현장을 상상해 보세요.',
      soundAlike: '범죄 현장을 수사하는 과정을 담은 예능 \'크라임 씬\'을 떠올리면 기억하기 쉽습니다.',
      context: '뉴스에서 범죄율(crime rate)이나 강력 범죄(violent crime)라는 표현으로 자주 등장합니다.',
      synonymAntonym: 'offense는 가벼운 위반을, felony는 중범죄를 뜻하며, 반대말인 virtue는 도덕적 선행을 의미합니다.',
    }),
    {
      definition: 'an illegal act for which someone can be punished by the government',
      synonyms: ['offense', 'felony', 'misdeed'],
      antonyms: ['virtue', 'goodness', 'morality'],
      exampleSentences: [
        { en: 'The crime rate has decreased significantly this year.', ko: '올해 범죄율이 상당히 감소했다.' },
        { en: 'He was charged with a serious crime and sent to trial.', ko: '그는 심각한 범죄로 기소되어 재판에 넘겨졌다.' },
      ],
    }
  ),
  word('Crisis', '위기', 3, 'noun',
    ['평화', '안정', '번영', '호황', '순조', '안일', '태평', '여유', '평온', '평상'],
    tips({
      etymology: '그리스어 krisis에서 유래되었으며, 원래는 병의 증세가 급변하거나 운명이 결정되는 \'분기점\'을 의미했습니다.',
      visual: '폭풍우가 몰아치는 바다 한가운데서 배가 뒤집히기 직전의 긴박한 상황을 떠올려 보세요.',
      soundAlike: '한국어 \'크게(Cry) 울다\'와 발음이 비슷한 \'크라이\'로 시작하므로, 울음이 나올 정도로 힘든 상황으로 기억하세요.',
      context: '주로 경제(economic), 정치(political), 혹은 개인적인 정체성(identity) 문제와 결합하여 심각한 국면을 나타낼 때 사용합니다.',
      synonymAntonym: '갑작스러운 비상사태인 emergency와 유사하며, 아무런 동요가 없는 상태인 stability와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A crucial stage or turning point in the course of anything, typically involving a period of extreme trouble or instability.',
      synonyms: ['emergency', 'catastrophe', 'predicament'],
      antonyms: ['stability', 'prosperity', 'solution'],
      exampleSentences: [
        { en: 'The government is struggling to resolve the current economic turmoil and energy shortage.', ko: '정부는 현재의 경제적 혼란과 에너지 부족 위기를 해결하기 위해 고군분투하고 있다.' },
        { en: 'Effective leadership is most essential during a time of national emergency.', ko: '국가적 위기 상황에서는 효과적인 리더십이 가장 필수적이다.' },
      ],
    }
  ),
  word('Crop', '농작물', 3, 'noun',
    ['씨앗', '묘목', '비료', '농기구', '황무지', '잡초', '경작지', '해충', '가뭄', '농약'],
    tips({
      etymology: '고대 영어 cropp에서 유래했으며, 본래 식물의 머리 부분이나 수확된 한 묶음을 의미했습니다.',
      visual: '끝없이 펼쳐진 황금빛 밀밭에서 농부들이 수확을 기다리는 풍경을 상상해 보세요.',
      soundAlike: '사진의 불필요한 부분을 잘라낼 때 \'크롭(crop)한다\'고 하는데, 이는 수확할 때 식물의 윗부분을 잘라내는 동작과 연결됩니다.',
      context: '주로 식량 생산을 목적으로 대량으로 재배되는 쌀, 보리, 옥수수 같은 식물들을 지칭할 때 사용합니다.',
      synonymAntonym: 'harvest는 수확된 결과물을, yield는 생산량을 강조하며, 반대로 weed는 원치 않는 잡초를 뜻합니다.',
    }),
    {
      definition: 'Cultivated plants that are grown commercially on a large scale, especially cereals, fruits, or vegetables.',
      synonyms: ['harvest', 'yield', 'produce'],
      antonyms: ['weed', 'waste', 'barrenness'],
      exampleSentences: [
        { en: 'The corn crop was abundant this year.', ko: '올해 옥수수 수확이 풍부했다.' },
        { en: 'Farmers rotate crops to maintain soil health.', ko: '농부들은 토양 건강을 유지하기 위해 작물을 돌려 심는다.' },
      ],
    }
  ),
  word('Cruel', '잔혹한', 3, 'adjective',
    ['자비로운', '친절한', '인자한', '상냥한', '다정한', '온정적인', '따뜻한', '배려심 깊은', '인정 많은', '너그러운'],
    tips({
      etymology: '라틴어 crudelis에서 유래했으며, 원래 \'피비린내 나는\' 또는 \'가공하지 않은 거친 상태\'를 의미했습니다.',
      visual: '추운 겨울날 밖에서 떨고 있는 어린 동물을 차갑게 외면하며 지나치는 비정한 사람의 표정을 떠올려 보세요.',
      soundAlike: '영화 \'101마리 강아지\'의 악당 \'크루엘라(Cruella)\'의 이름이 바로 이 단어에서 유래했습니다.',
      context: '타인의 고통에 대해 전혀 동정심을 느끼지 않거나, 오히려 고통을 주는 것을 즐기는 가혹한 성격이나 상황에 사용합니다.',
      synonymAntonym: 'brutal, merciless와 비슷한 의미를 가지며, 반대말로는 kind, compassionate 등이 있습니다.',
    }),
    {
      definition: 'willfully causing pain or suffering to others, or feeling no concern about it',
      synonyms: ['brutal', 'merciless', 'heartless'],
      antonyms: ['compassionate', 'kindhearted', 'benevolent'],
      exampleSentences: [
        { en: 'The dictator was known for his cruel treatment of prisoners.', ko: '그 독재자는 죄수들에 대한 잔혹한 처우로 알려져 있었다.' },
        { en: 'It is cruel to keep a large dog in a very small cage all day.', ko: '큰 개를 하루 종일 아주 작은 우리에 가두어 두는 것은 잔인한 일이다.' },
      ],
    }
  ),
  word('Culture', '문화', 3, 'noun',
    ['야만', '미개', '무지', '무식', '무례', '거칠음', '불문명', '원시', '야생', '문명 밖'],
    tips({
      etymology: '라틴어 colere(경작하다, 돌보다)에서 유래하여 땅을 일구듯 마음과 정신을 가꾼다는 의미가 되었습니다.',
      visual: '각 나라의 독특한 전통 의상, 음식, 예술 작품들이 한데 어우러진 다채로운 축제 현장을 상상해 보세요.',
      soundAlike: 'K-컬처(K-culture)라는 말처럼 특정 국가나 집단의 생활 양식을 지칭할 때 일상에서 자주 들립니다.',
      context: '단순한 예술 활동뿐만 아니라 한 사회가 공유하는 가치관, 관습, 종교 등을 모두 아우르는 넓은 개념입니다.',
      synonymAntonym: '유의어로는 tradition(전통), customs(관습)이 있고, 반대 개념으로는 가공되지 않은 상태인 nature(자연)가 있습니다.',
    }),
    {
      definition: 'the collective habits, beliefs, and artistic expressions shared by a particular group of people or society',
      synonyms: ['tradition', 'customs', 'civilization'],
      antonyms: ['barbarism', 'nature', 'wildness'],
      exampleSentences: [
        { en: 'Music is an important part of our culture.', ko: '음악은 우리 문화의 중요한 부분이다.' },
        { en: 'Travel helps you understand different cultures.', ko: '여행은 다른 문화를 이해하는 데 도움이 된다.' },
      ],
    }
  ),
  word('Cure', '치료, 치료하다', 3, 'noun',
    ['질병', '악화', '감염', '전염', '발병', '재발', '악성', '치명적', '불치', '만성'],
    tips({
      etymology: '라틴어 cura(돌봄, 주의)에서 유래하여 병을 정성껏 돌보아 낫게 함을 뜻합니다.',
      visual: '병원에서 환자가 약을 먹고 건강한 미소를 되찾으며 침대에서 일어나는 모습을 상상해 보세요.',
      soundAlike: '게임 캐릭터가 마법을 써서 체력을 가득 채울 때 외치는 \'큐어\'라는 기술 이름을 떠올려 보세요.',
      context: '단순한 증상 완화가 아니라 질병을 완전히 뿌리 뽑는 해결책이나 약물을 의미할 때 주로 쓰입니다.',
      synonymAntonym: '유의어 remedy는 해결책을, 반의어 disease는 고쳐야 할 질병 그 자체를 의미합니다.',
    }),
    {
      definition: 'A substance or medical treatment that makes a sick person healthy again by ending a disease.',
      synonyms: ['remedy', 'treatment', 'medication'],
      antonyms: ['disease', 'illness', 'ailment'],
      exampleSentences: [
        { en: 'Scientists are working hard to find a permanent cure for the virus.', ko: '과학자들은 그 바이러스에 대한 영구적인 치료법을 찾기 위해 열심히 노력하고 있다.' },
        { en: 'Laughter is sometimes said to be the best cure for stress.', ko: '웃음은 때때로 스트레스에 대한 최고의 치료제라고 일컬어진다.' },
      ],
    }
  ),
  word('Curious', '호기심 많은', 3, 'adjective',
    ['무관심한', '냉담한', '무심한', '관심 없는', '따분해하는', '지루해하는', '무념무상', '무감각한', '둔감한', '멍한'],
    tips({
      etymology: '라틴어 \'curiosus\'에서 유래했으며, 이는 \'주의를 기울이는\' 또는 \'정성스러운\'이라는 의미를 담고 있습니다.',
      visual: '돋보기를 들고 풀숲의 곤충을 유심히 관찰하며 눈을 반짝이는 탐험가의 모습을 상상해 보세요.',
      soundAlike: '화성 탐사선 \'큐리오시티(Curiosity)\'를 떠올려 보세요. 미지의 행성을 탐사하려는 인간의 호기심을 상징합니다.',
      context: '단순히 알고 싶어 하는 긍정적인 의미 외에도, 상황이 \'기이한\' 또는 \'이상한\' 경우에도 형용사로 사용됩니다.',
      synonymAntonym: '무언가를 캐묻기 좋아하는 inquisitive와 유의어이며, 아무런 관심이 없는 indifferent와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having a strong desire to investigate and learn about something unknown or new',
      synonyms: ['inquisitive', 'nosy', 'probing'],
      antonyms: ['indifferent', 'uninterested', 'apathetic'],
      exampleSentences: [
        { en: 'The kitten was curious about the moving shadow on the wall.', ko: '새끼 고양이는 벽 위에 움직이는 그림자에 대해 호기심이 많았다.' },
        { en: 'Scientists are always curious to find out how the universe works.', ko: '과학자들은 우주가 어떻게 작동하는지 알아내는 것에 항상 호기심을 갖는다.' },
      ],
    }
  ),
  word('Current', '현재의', 3, 'adjective',
    ['과거의', '미래의', '옛날의', '구식의', '구세대의', '구시대적인', '유물인', '폐기된', '종료된', '이전의'],
    tips({
      etymology: '라틴어 currere(달리다)에서 유래하여, 지금 이 순간에도 멈추지 않고 흐르고 있는 상태를 의미합니다.',
      visual: '강물이 멈추지 않고 계속해서 흘러가는 모습이나 전선에 흐르는 전기를 상상하면 지금 진행 중인 느낌이 떠오릅니다.',
      soundAlike: '뉴스에서 지금 가장 뜨거운 화제를 \'커런트 이슈(current issue)\'라고 부르는 것을 떠올려 보세요.',
      context: '지금 이 시점에 실제로 일어나고 있거나 유효한 상태, 또는 최신의 정보를 묘사할 때 주로 사용합니다.',
      synonymAntonym: '지금이라는 뜻의 present와 비슷하며, 이미 지나간 일을 뜻하는 past와는 반대되는 개념입니다.',
    }),
    {
      definition: 'belonging to the present time and happening or being used now',
      synonyms: ['present', 'ongoing', 'contemporary'],
      antonyms: ['past', 'former', 'ancient'],
      exampleSentences: [
        { en: 'What is your current address?', ko: '현재 주소가 어디인가요?' },
        { en: 'The current situation requires careful handling.', ko: '현재 상황은 신중한 처리가 필요하다.' },
      ],
    }
  ),
  word('Curve', '곡선', 3, 'noun',
    ['직선', '각도', '모서리', '평면', '수직선', '수평선', '대각선', '정사각형', '꼭짓점', '입체'],
    tips({
      etymology: '라틴어 \'curvus\'에서 유래되었으며, 이는 \'굽은\' 또는 \'구부러진\' 상태를 의미합니다.',
      visual: '곧게 뻗은 자가 아니라, 유연하게 휘어지는 낚싯대나 무지개의 모양을 떠올려 보세요.',
      soundAlike: '야구 경기에서 공이 직선으로 오지 않고 휘어지며 떨어지는 \'커브\' 투구를 생각하면 쉽습니다.',
      context: '수학 그래프의 선이나 산길의 굽이진 도로, 혹은 사람의 신체 라인을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'bend와 유사하게 휘어진 상태를 뜻하며, 곧게 뻗은 straight line과는 대조적입니다.',
    }),
    {
      definition: 'A line or surface that bends in a smooth, continuous way without any sharp angles.',
      synonyms: ['arc', 'bend', 'curvature'],
      antonyms: ['straight', 'line', 'upright'],
      exampleSentences: [
        { en: 'The driver slowed down as the vehicle approached a sharp curve in the mountain road.', ko: '운전자는 차량이 산길의 급커브에 가까워지자 속도를 줄였다.' },
        { en: 'The artist used a compass to draw a perfect curve on the canvas.', ko: '예술가는 캔버스 위에 완벽한 곡선을 그리기 위해 컴퍼스를 사용했다.' },
      ],
    }
  ),
  word('Custom', '습관, 관례', 3, 'noun',
    ['이상', '변칙', '예외', '신기함', '낯설음', '이변', '특이', '돌출', '개인적', '독자적'],
    tips({
      etymology: '라틴어 consuetudo(습관)에서 유래하여, 사회적으로 굳어진 행동 양식을 뜻하게 되었습니다.',
      visual: '명절에 온 가족이 모여 함께 차례를 지내거나 특정 의상을 입는 전통적인 풍경을 상상해 보세요.',
      soundAlike: '주문 제작을 뜻하는 \'커스텀(custom-made)\'과 발음이 같습니다. 나만의 방식이 사회적 방식이 된 것이라 연결해 보세요.',
      context: '개인의 사소한 습관보다는 특정 사회나 공동체가 오랫동안 지켜온 예절이나 관습을 표현할 때 주로 사용합니다.',
      synonymAntonym: '전통을 뜻하는 tradition과 비슷하며, 일반적인 틀에서 벗어난 exception과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A traditional and widely accepted way of behaving or doing something that is specific to a particular society, place, or time.',
      synonyms: ['tradition', 'habit', 'practice'],
      antonyms: ['exception', 'novelty', 'deviation'],
      exampleSentences: [
        { en: 'It is a local custom to tip the server after a meal in this country.', ko: '이 나라에서는 식사 후에 서빙 직원에게 팁을 주는 것이 현지 관습입니다.' },
        { en: 'The guide explained the ancient customs of the tribe to the tourists.', ko: '가이드는 관광객들에게 그 부족의 고대 관습들을 설명해 주었습니다.' },
      ],
    }
  ),
  word('Customer', '고객', 3, 'noun',
    ['판매자', '점원', '공급자', '제조자', '판매처', '도매상', '유통업', '소매점', '경쟁사', '낯선이'],
    tips({
      etymology: 'custom(관례, 습관)에 -er이 붙어 \'특정 가게를 습관적으로 방문하여 거래하는 사람\'이라는 뜻에서 유래했습니다.',
      visual: '마트 계산대 앞에 카트를 세워두고 지갑을 꺼내 결제하려는 사람의 모습을 떠올려 보세요.',
      soundAlike: '기업의 \'CS팀\'에서 CS가 바로 Customer Service(고객 서비스)의 약자라는 점을 기억하면 쉽습니다.',
      context: '단순히 물건을 사는 사람뿐만 아니라, 은행이나 식당 등 서비스를 이용하는 모든 이용자를 포괄합니다.',
      synonymAntonym: '전문적인 서비스를 받는 client와 유사하며, 물건을 파는 seller와는 정반대의 개념입니다.',
    }),
    {
      definition: 'an individual or organization that pays money to acquire products or professional assistance from a store or company',
      synonyms: ['client', 'buyer', 'consumer'],
      antonyms: ['seller', 'vendor', 'merchant'],
      exampleSentences: [
        { en: 'The shop assistant is helping a customer find the right size.', ko: '점원이 고객이 알맞은 사이즈를 찾는 것을 도와주고 있다.' },
        { en: 'The store offers special discounts to loyal customers who visit frequently.', ko: '그 상점은 자주 방문하는 단골 고객들에게 특별 할인을 제공한다.' },
      ],
    }
  ),
  word('Damage', '손해, 피해', 3, 'noun',
    ['이익', '회복', '수리', '복구', '보상', '증진', '성장', '개선', '발전', '선물'],
    tips({
      etymology: '라틴어 damnum(손실)에서 유래하여 무언가를 잃거나 가치가 훼손됨을 뜻합니다.',
      visual: '태풍이 지나간 뒤 깨진 유리창이나 부서진 자동차의 처참한 모습을 떠올려 보세요.',
      soundAlike: '게임에서 적에게 공격을 받아 체력이 깎이는 \'대미지\'를 생각하면 이해가 빠릅니다.',
      context: '물건이 파손되거나 사고로 인해 경제적, 신체적 손실이 발생했을 때 주로 사용합니다.',
      synonymAntonym: 'harm과 유사한 의미를 가지며, 상태를 낫게 하는 repair나 improvement와는 반대됩니다.',
    }),
    {
      definition: 'physical harm caused to something which makes it less attractive, useful, or valuable',
      synonyms: ['harm', 'loss', 'injury'],
      antonyms: ['repair', 'benefit', 'improvement'],
      exampleSentences: [
        { en: 'The storm caused extensive damage to the coastal town.', ko: '폭풍으로 인해 해안 마을에 광범위한 피해가 발생했다.' },
        { en: 'The insurance company will pay for the damage to your vehicle.', ko: '보험사가 귀하의 차량에 발생한 손해에 대해 보상할 것입니다.' },
      ],
    }
  ),
  word('Data', '데이터', 3, 'noun',
    ['추측', '감각', '직관', '공허', '무지', '숫자 없음', '정보 없음', '삭제', '소거', '망각'],
    tips({
      etymology: '라틴어 \'datum(주어진 것)\'의 복수형에서 유래하여, 분석을 위해 주어진 기초 자료를 의미합니다.',
      visual: '엑셀 시트의 수많은 칸에 채워진 숫자들과 이를 바탕으로 그려진 막대 그래프를 떠올려 보세요.',
      soundAlike: '스마트폰 요금제에서 말하는 \'데이터\'나 컴퓨터 저장 용량을 생각하면 기억하기 쉽습니다.',
      context: '단순한 의견이 아니라 연구, 실험, 조사를 통해 얻은 객관적인 수치나 사실적 기록을 뜻합니다.',
      synonymAntonym: 'information과 유사하게 쓰이지만, guess나 theory처럼 증명되지 않은 가설과는 반대됩니다.',
    }),
    {
      definition: 'facts, figures, or statistics collected together for reference, study, or calculation',
      synonyms: ['information', 'facts', 'statistics'],
      antonyms: ['guess', 'theory', 'rumor'],
      exampleSentences: [
        { en: 'We need to analyze the collected information to draw a conclusion.', ko: '결론을 도출하기 위해 수집된 정보를 분석해야 합니다.' },
        { en: 'The latest statistics show a significant increase in sales.', ko: '최신 통계 자료는 매출의 상당한 증가를 보여줍니다.' },
      ],
    }
  ),
  word('Debate', '논쟁, 토론', 3, 'noun',
    ['일치', '합의', '동의', '만장일치', '화합', '단결', '침묵', '무시', '무관심', '냉담'],
    tips({
      etymology: 'de(강조)와 bat(치다)가 합쳐져 \'말로 치열하게 서로를 치며 싸우다\'는 의미에서 유래했습니다.',
      visual: 'TV 토론 프로그램에서 두 명의 출연자가 탁자를 사이에 두고 열띤 표정으로 대화하는 모습을 상상해 보세요.',
      soundAlike: '한국에서도 토론 대회를 \'디베이트 대회\'라고 부르는 경우가 많아 익숙한 발음입니다.',
      context: '단순한 말다툼보다는 격식을 갖춘 자리에서 서로 다른 입장을 가진 사람들이 의견을 나누는 상황에 적합합니다.',
      synonymAntonym: '의견이 충돌하는 argument와 유사하며, 모두가 한마음인 agreement와는 대조적입니다.',
    }),
    {
      definition: 'A formal discussion on a particular topic in a public meeting or legislative assembly, in which opposing arguments are put forward.',
      synonyms: ['argument', 'discussion', 'controversy'],
      antonyms: ['agreement', 'concord', 'harmony'],
      exampleSentences: [
        { en: 'There was a heated debate about the new policy in the parliament.', ko: '의회에서 새 정책에 대한 열띤 토론이 있었다.' },
        { en: 'The public debate lasted for over two hours without a clear winner.', ko: '공개 토론은 승자를 가리지 못한 채 2시간 넘게 지속되었다.' },
      ],
    }
  ),
  word('Debt', '빚', 3, 'noun',
    ['자산', '잔여', '이익', '수입', '저축', '충당', '여유', '부유', '플러스', '흑자'],
    tips({
      etymology: '라틴어 debitum(빚진 것)에서 유래했으며 b는 묵음이라 소리 나지 않습니다.',
      visual: '은행에서 빌린 돈을 갚아야 한다는 고지서를 상상해 보세요.',
      soundAlike: '데트 프리(Debt-free)는 빚이 하나도 없는 깨끗한 상태를 말합니다.',
      context: '돈뿐만 아니라 누군가에게 입은 큰 은혜를 갚아야 할 때도 씁니다.',
      synonymAntonym: 'liability와 유사하며 asset과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sum of money or an obligation that is owed to someone else and must be paid back.',
      synonyms: ['obligation', 'liability', 'arrears'],
      antonyms: ['credit', 'asset', 'profit'],
      exampleSentences: [
        { en: 'He is struggling to pay off his debt.', ko: '그는 빚을 갚기 위해 고군분투하고 있다.' },
        { en: 'The company reduced its debt significantly.', ko: '그 회사는 부채를 크게 줄였다.' },
      ],
    }
  ),
  word('Decision', '결정', 3, 'noun',
    ['망설임', '우유부단', '미결정', '보류', '기권', '회피', '회의', '불확실', '혼란', '당황'],
    tips({
      etymology: '접두사 de-(완전히)와 어근 cis(자르다)가 결합하여, 여러 고민을 싹둑 잘라내고 하나를 선택한다는 의미에서 유래되었습니다.',
      visual: '갈림길 앞에서 망설이다가 한쪽 길을 향해 단호하게 발걸음을 옮기는 모습을 상상해 보세요.',
      soundAlike: '축구 경기에서 심판이 내리는 판정이나 비디오 판독 시스템인 VAR의 최종 판단을 떠올리면 기억하기 쉽습니다.',
      context: '비즈니스 회의, 진로 선택, 식사 메뉴 고르기 등 여러 대안 중 하나를 확정 짓는 모든 상황에 쓰입니다.',
      synonymAntonym: '유의어로는 choice가 자주 쓰이며, 반대말로는 결정을 내리지 못하는 상태인 indecision이 있습니다.',
    }),
    {
      definition: 'A final choice or judgment that a person or group reaches after thinking about various possibilities.',
      synonyms: ['selection', 'resolution', 'determination'],
      antonyms: ['hesitation', 'vacillation', 'indeterminacy'],
      exampleSentences: [
        { en: 'The final decision rests with the head of the department.', ko: '최종 결정권은 부서장에게 있습니다.' },
        { en: 'She needed more time to weigh her options before reaching a decision.', ko: '그녀는 결정을 내리기 전에 선택지들을 따져볼 시간이 더 필요했습니다.' },
      ],
    }
  ),
  word('Declare', '선언하다', 3, 'verb',
    ['숨기다', '부인하다', '은폐하다', '침묵하다', '무시하다', '거부하다', '회피하다', '모호하게하다', '애매하다', '가리다'],
    tips({
      etymology: '라틴어 de(완전히)와 clarare(명확하게 하다)가 합쳐져 \'어떤 사실을 분명하게 밝히다\'라는 의미가 되었습니다.',
      visual: '공항 세관에서 가방을 열어 보여주거나, 시상대 위에서 승자가 결정되었음을 알리는 심판의 손동작을 떠올려 보세요.',
      soundAlike: '디클레어(Declare)는 \'뒤(de)에서 크게(clare) 외쳐서 모두가 알게 하다\'라고 연상하면 기억하기 쉽습니다.',
      context: '세관에 물품을 신고하거나, 전쟁을 선포하거나, 공식적으로 자신의 의사를 표명할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '공식적으로 알리는 announce와 유사하며, 사실을 숨기거나 감추는 conceal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to state something in a formal, public, or explicit manner so that it is clearly known',
      synonyms: ['announce', 'proclaim', 'assert'],
      antonyms: ['conceal', 'suppress', 'withhold'],
      exampleSentences: [
        { en: 'The government decided to formally announce a state of emergency across the country.', ko: '정부는 전국에 비상사태를 공식적으로 선포하기로 결정했다.' },
        { en: 'Do you have any valuable items to report to the customs office upon arrival?', ko: '도착 시 세관에 신고할 귀중품이 있습니까?' },
      ],
    }
  ),
  word('Decline', '감소하다', 3, 'verb',
    ['증가하다', '상승하다', '성장하다', '늘어나다', '불어나다', '확대되다', '팽창하다', '증대되다', '커지다', '올라가다'],
    tips({
      etymology: '접두사 de(아래로)와 어근 clin(기울다)이 결합하여 \'아래쪽으로 기울어지다\'라는 의미를 형성합니다.',
      visual: '가파른 언덕 아래로 굴러 내려가는 공이나, 오른쪽 아래로 꺾인 통계 그래프의 선을 상상해 보세요.',
      soundAlike: '\'뒤(de)로 끌라인(cline)\'으로 발음해 보세요. 뒤로 끌려가며 세력이 약해지거나 줄어드는 느낌입니다.',
      context: '경제 지표나 인구수가 줄어드는 상황 외에도, 상대방의 제안이나 요청을 정중하게 거절할 때도 필수적으로 쓰입니다.',
      synonymAntonym: '점점 작아지는 decrease와 유의어이며, 위로 솟구치는 increase와는 정반대의 개념입니다.',
    }),
    {
      definition: 'to gradually become less, smaller, or weaker in amount, quality, or importance',
      synonyms: ['decrease', 'diminish', 'dwindle'],
      antonyms: ['increase', 'flourish', 'expand'],
      exampleSentences: [
        { en: 'The number of rare birds in this region has begun to fall and weaken significantly.', ko: '이 지역의 희귀 새들의 개체 수가 상당히 감소하기 시작했습니다.' },
        { en: 'She decided to turn down the job offer because the commute was too long.', ko: '그녀는 통근 거리가 너무 멀어서 그 일자리 제안을 거절하기로 결정했습니다.' },
      ],
    }
  ),
  word('Decorate', '장식하다', 3, 'verb',
    ['제거하다', '벗겨내다', '헐다', '파괴하다', '훼손하다', '더럽히다', '단순화하다', '비우다', '망치다', '삭제하다'],
    tips({
      etymology: '라틴어 decor(아름다움)에서 유래하여 ate(만들다)가 결합되어 아름답게 꾸민다는 의미를 가집니다.',
      visual: '민무늬 케이크 위에 알록달록한 생크림과 과일을 올려 화려하게 바꾸는 모습을 떠올려 보세요.',
      soundAlike: '한국어에서도 흔히 쓰는 \'데코\'라는 말의 원형이 바로 이 단어입니다.',
      context: '실내 인테리어나 요리뿐만 아니라 군인에게 훈장을 수여하여 명예를 높일 때도 쓰입니다.',
      synonymAntonym: 'adorn은 더 예쁘게 꾸미는 뉘앙스이며, 반대로 껍질을 벗기듯 다 떼어내는 것은 strip입니다.',
    }),
    {
      definition: 'to add attractive items to something in order to make it look more beautiful or festive',
      synonyms: ['adorn', 'embellish', 'ornament'],
      antonyms: ['strip', 'damage', 'mar'],
      exampleSentences: [
        { en: 'We spent the entire afternoon trying to beautify the hall for the wedding.', ko: '우리는 결혼식을 위해 홀을 장식하느라 오후 내내 시간을 보냈다.' },
        { en: 'The chef used gold leaf to enhance the appearance of the dessert.', ko: '요리사는 디저트를 장식하기 위해 금박을 사용했다.' },
      ],
    }
  ),
  word('Decrease', '감소하다', 3, 'verb',
    ['증가하다', '늘리다', '불리다', '확대하다', '증대하다', '상승하다', '성장하다', '팽창하다', '증폭하다', '배가시키다'],
    tips({
      etymology: '접두사 de-(아래로)와 라틴어 crescere(성장하다)가 결합되어, 성장의 반대 방향인 \'줄어들다\'라는 의미가 되었습니다.',
      visual: '계단이나 그래프의 선이 오른쪽 아래 방향으로 뚝 떨어지는 이미지를 상상해 보세요.',
      soundAlike: '디크리즈(Decrease)의 \'디\'를 \'뒤\'로 생각해서, 크기가 뒤로(작게) 물러난다고 기억하면 쉽습니다.',
      context: '수량, 온도, 속도, 소음 등 측정 가능한 수치가 낮아지는 상황에서 가장 보편적으로 사용됩니다.',
      synonymAntonym: '비슷한 말로는 양을 줄이는 reduce가 있고, 반대말로는 정반대 접두사를 가진 increase가 있습니다.',
    }),
    {
      definition: 'to become less in amount, degree, or size, or to make something do this',
      synonyms: ['reduce', 'diminish', 'lessen'],
      antonyms: ['increase', 'expand', 'augment'],
      exampleSentences: [
        { en: 'The number of students in the class has decreased over the years.', ko: '학급의 학생 수가 수년에 걸쳐 감소했습니다.' },
        { en: 'You should decrease your daily intake of salt for better health.', ko: '건강을 위해 일일 소금 섭취량을 줄여야 합니다.' },
      ],
    }
  ),
  word('Defeat', '패배시키다', 3, 'verb',
    ['승리하다', '이기다', '정복하다', '돕다', '협력하다', '항복하다', '승인하다', '존중하다', '추대하다', '우승하다'],
    tips({
      etymology: 'de(취소/반대)와 feat(행위/업적)가 만나 \'상대의 업적을 무효로 만들다\'는 뜻에서 유래했습니다.',
      visual: '체스판에서 상대방의 왕을 손가락으로 가볍게 밀어 쓰러뜨리는 장면을 상상해 보세요.',
      soundAlike: '디피트(Defeat)는 \'뒤(de)로 피(feat)하게 만들다\' 즉, 적을 도망가게 만든다고 기억하세요.',
      context: '단순히 이기는 것을 넘어 전쟁, 선거, 스포츠 경기에서 상대를 완전히 제압할 때 주로 쓰입니다.',
      synonymAntonym: '유의어 beat는 상대를 때려눕히는 느낌이며, 반의어 surrender는 스스로 굴복하는 상황입니다.',
    }),
    {
      definition: 'to win a victory over someone in a battle or competition',
      synonyms: ['beat', 'overcome', 'conquer'],
      antonyms: ['lose', 'surrender', 'yield'],
      exampleSentences: [
        { en: 'The underdog managed to beat the odds and overcome the reigning champions.', ko: '약체 팀이 역경을 딛고 군림하던 챔피언을 패배시키는 데 성공했습니다.' },
        { en: 'The general devised a brilliant strategy to crush the enemy forces in the valley.', ko: '장군은 계곡에서 적군을 물리치기 위한 뛰어난 전략을 고안했습니다.' },
      ],
    }
  ),
  word('Defend', '방어하다', 3, 'verb',
    ['공격하다', '침공하다', '습격하다', '도발하다', '진격하다', '침략하다', '침해하다', '해치다', '던지다', '비난하다'],
    tips({
      etymology: '라틴어 defendere에서 유래하며, de(멀리)와 fendere(치다)가 결합되어 \'적을 멀리 쳐내어 막다\'라는 뜻을 가집니다.',
      visual: '성벽 위에서 적의 화살을 커다란 방패로 막아내며 성문을 지키는 기사의 모습을 상상해 보세요.',
      soundAlike: '스포츠 경기에서 수비를 뜻하는 \'디펜스(defense)\'의 동사형이라고 생각하면 기억하기 쉽습니다.',
      context: '물리적인 공격을 막는 것뿐만 아니라, 법정에서 피고인을 변호하거나 자신의 논리를 옹호할 때도 자주 사용됩니다.',
      synonymAntonym: '유사한 단어로는 protect가 있으며, 반대되는 행동은 attack이나 assault입니다.',
    }),
    {
      definition: 'to keep safe from harm, attack, or challenge by providing resistance',
      synonyms: ['protect', 'guard', 'shield'],
      antonyms: ['attack', 'assault', 'offend'],
      exampleSentences: [
        { en: 'The army was deployed to the border to protect and safeguard the nation.', ko: '군대는 국가를 보호하고 방어하기 위해 국경에 배치되었습니다.' },
        { en: 'The lawyer worked hard to support his client\'s innocence in court.', ko: '변호사는 법정에서 의뢰인의 무죄를 변호하기 위해 열심히 노력했습니다.' },
      ],
    }
  ),
  word('Define', '정의하다', 3, 'verb',
    ['모호하게하다', '혼란시키다', '오해하다', '왜곡하다', '흐리다', '애매하다', '불명확하다', '무시하다', '숨기다', '어지럽히다'],
    tips({
      etymology: '라틴어 \'de(완전히)\'와 \'finis(경계/끝)\'가 결합된 단어로, 사물의 경계를 명확히 긋는다는 의미에서 유래했습니다.',
      visual: '안개가 자욱한 풍경 속에서 특정 사물의 테두리만 진한 검은색 펜으로 또렷하게 그리는 모습을 상상해 보세요.',
      soundAlike: '\'디(de)테일하게 파인(fine) 곳까지 설명하다\'라고 연상하면 의미를 기억하기 쉽습니다.',
      context: '학술적인 용어의 뜻을 풀이할 때뿐만 아니라, 프로젝트의 범위나 개인의 가치관을 규정할 때도 자주 쓰입니다.',
      synonymAntonym: '명확히 밝히는 explain과 유사하며, 경계를 흐릿하게 만드는 confuse나 blur와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to explain the precise meaning of a particular word, phrase, or concept',
      synonyms: ['characterize', 'delineate', 'specify'],
      antonyms: ['misinterpret', 'confuse', 'obscure'],
      exampleSentences: [
        { en: 'The dictionary seeks to provide clarity and help users understand how to use words correctly.', ko: '사전은 명확성을 제공하고 사용자들이 단어를 어떻게 올바르게 사용하는지 이해하도록 돕는 것을 목표로 합니다.' },
        { en: 'It is difficult to limit the boundaries of happiness because it means something different to everyone.', ko: '행복은 사람마다 의미하는 바가 다르기 때문에 그 범위를 규정하기 어렵습니다.' },
      ],
    }
  ),
  word('Degree', '정도, 학위', 3, 'noun',
    ['무차별', '무한', '무제한', '전부', '완전', '절대', '무조건', '무학력', '미졸업', '기초'],
    tips({
      etymology: '라틴어 \'de(아래로)\'와 \'gradus(단계/계단)\'가 합쳐져 \'단계적인 위치\'나 \'계단식 등급\'을 의미하게 되었습니다.',
      visual: '온도계의 눈금이 한 칸씩 올라가는 모습이나, 졸업식에서 학사모를 쓰고 단상 위로 올라가는 모습을 상상해 보세요.',
      soundAlike: '\'디그리\'를 \'뒤(de)에 그리(gree)는 눈금\'이라고 연상하면 수치나 정도를 나타내는 의미를 쉽게 기억할 수 있습니다.',
      context: '날씨의 온도나 수학의 각도를 나타내는 단위로 쓰일 뿐만 아니라, 대학 과정을 마쳤을 때 받는 자격인 \'학위\'라는 뜻으로도 매우 자주 쓰입니다.',
      synonymAntonym: '수준을 뜻하는 level과 유의어이며, 특정 단계가 아닌 전체를 의미하는 whole이나 totality와는 대비되는 개념입니다.',
    }),
    {
      definition: 'A unit for measuring temperature or angles, or a title given by a university to a student who has finished a course of study.',
      synonyms: ['level', 'extent', 'grade'],
      antonyms: ['whole', 'totality', 'entirety'],
      exampleSentences: [
        { en: 'She earned a master\'s degree in computer science from a prestigious university.', ko: '그녀는 명문 대학에서 컴퓨터 공학 석사 학위를 취득했다.' },
        { en: 'Water freezes at zero degrees Celsius under standard atmospheric pressure.', ko: '물은 표준 기압 아래에서 섭씨 0도에 업니다.' },
      ],
    }
  ),
  word('Delay', '지연', 3, 'noun',
    ['신속', '즉시', '긴급', '재빠름', '순식간', '바로', '당장', '신속함', '민첩', '경쾌'],
    tips({
      etymology: '라틴어 \'dilatare\'에서 유래하여 어떤 일을 나중으로 넓게 미룬다는 의미를 담고 있습니다.',
      visual: '공항 전광판에 빨간색 글씨로 \'Delayed\'가 떠서 사람들이 한숨을 쉬는 장면을 상상하세요.',
      soundAlike: '시계의 태엽이 \'덜덜\'거리며 느리게 돌아가는 소리와 비슷하다고 생각해보세요.',
      context: '교통 체증이나 기상 악화로 인해 예정된 시간보다 늦어지는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'postponement, holdup과 비슷하며, 즉각적인 처리를 뜻하는 acceleration과 반대됩니다.',
    }),
    {
      definition: 'a period of time when something is made to wait or happens later than expected',
      synonyms: ['postponement', 'holdup', 'detention'],
      antonyms: ['acceleration', 'advance', 'continuation'],
      exampleSentences: [
        { en: 'The heavy snow caused a significant wait for all departing flights.', ko: '폭설로 인해 모든 출발 항공편에 상당한 지연이 발생했습니다.' },
        { en: 'We must act now without any further hesitation or pause.', ko: '우리는 더 이상의 지체나 지연 없이 지금 행동해야 합니다.' },
      ],
    }
  ),
  word('Deliver', '배달하다', 3, 'verb',
    ['받다', '수령하다', '보관하다', '축적하다', '보류하다', '거절하다', '회수하다', '수집하다', '소유하다', '방치하다'],
    tips({
      etymology: '라틴어 \'de-\'(완전히)와 \'liber\'(자유로운)가 결합되어, 물건을 묶여 있던 곳에서 풀어주어 주인에게 보낸다는 의미에서 유래했습니다.',
      visual: '현관문 앞에 놓인 택배 상자와 그것을 확인하며 기뻐하는 사람의 모습을 상상해 보세요.',
      soundAlike: '한국에서도 흔히 쓰는 \'딜리버리 서비스\'라는 표현을 떠올리면 기억하기 쉽습니다.',
      context: '단순히 물건을 옮기는 것 외에도 연설을 하거나(deliver a speech), 아기를 분만할 때도 사용되는 다의어입니다.',
      synonymAntonym: '물건을 건네주는 distribute와 유사하며, 반대로 물건을 받는 receive와는 대조를 이룹니다.',
    }),
    {
      definition: 'to take goods, letters, or parcels to a particular person or address',
      synonyms: ['distribute', 'transport', 'convey'],
      antonyms: ['receive', 'collect', 'withhold'],
      exampleSentences: [
        { en: 'The courier will bring the documents to your office by noon.', ko: '배달원이 정오까지 당신의 사무실로 서류를 배달할 것입니다.' },
        { en: 'The local bakery provides fresh bread to its customers every morning.', ko: '그 지역 빵집은 매일 아침 고객들에게 신선한 빵을 배달합니다.' },
      ],
    }
  ),
];
