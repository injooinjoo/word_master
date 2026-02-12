import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch48: VocabItem[] = [
  word('oblige', '-하게하다', 8, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '라틴어 \'obligare\'에서 유래되었으며, \'ob(~에 대하여)\'와 \'ligare(묶다)\'가 합쳐져 누군가를 의무로 묶어두는 느낌을 줍니다.',
      visual: '계약서에 서명한 뒤 그 규칙에 묶여서 어쩔 수 없이 행동해야 하는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'어블라이즈\' 발음이 \'업을 라이즈(rise)\'와 비슷하게 들리니, 책임이라는 \'업\'을 짊어지고 일어나 행동해야 한다고 외워보세요.',
      context: '법적 의무뿐만 아니라 누군가의 부탁을 들어주어 고맙게 만드는 상황에서도 자주 쓰입니다.',
      synonymAntonym: '강제로 하게 하는 \'compel\'과 반대로 자유롭게 풀어주는 \'release\'를 함께 기억하세요.',
    }),
    {
      definition: 'To make someone legally or morally bound to an action or course of proceeding.',
      synonyms: ['compel', 'constrain', 'require'],
      antonyms: ['release', 'exempt', 'permit'],
      exampleSentences: [
        { en: 'The law will force the company to compensate all affected customers for their losses.', ko: '법은 그 회사가 모든 피해 고객들에게 손실을 배상하도록 강제할 것입니다.' },
        { en: 'She felt a strong sense of duty to help her neighbors after the storm ruined their crops.', ko: '그녀는 폭풍이 이웃들의 농작물을 망친 후 그들을 도와야 한다는 강한 의무감을 느꼈습니다.' },
      ],
    }
  ),
  word('observe', '관찰하다', 4, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '라틴어 \'ob(앞에)\'와 \'servare(지키다/보다)\'가 합쳐져 대상을 주의 깊게 지켜본다는 의미가 되었습니다.',
      visual: '현미경으로 작은 세포의 움직임을 하나하나 꼼꼼히 기록하는 과학자의 모습을 상상해 보세요.',
      soundAlike: '\'업저브\'라고 발음하며, 무언가를 \'업\'어서 자세히 \'저\'기 \'브\'(보)는 상황을 연상해 보세요.',
      context: '단순히 보는 것뿐만 아니라 규칙이나 법을 준수한다는 의미로도 자주 쓰입니다.',
      synonymAntonym: 'watch와 비슷하지만 더 학술적이며, 무시하다라는 뜻의 ignore와는 반대됩니다.',
    }),
    {
      definition: 'to watch someone or something carefully and attentively, especially to learn something or to follow a rule',
      synonyms: ['monitor', 'scrutinize', 'witness'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'Scientists spent several weeks in the jungle to study how the rare birds behave in their natural habitat.', ko: '과학자들은 희귀한 새들이 자연 서식지에서 어떻게 행동하는지 연구하기 위해 정글에서 몇 주를 보냈다.' },
        { en: 'All visitors must strictly follow the safety regulations while they are inside the laboratory.', ko: '모든 방문객은 실험실 안에 있는 동안 안전 규정을 엄격히 준수해야 한다.' },
      ],
    }
  ),
  word('obsess', '늘러붙다', 9, 'noun',
    ['무시하다', '포기하다', '분산시키다', '망각하다', '방관하다', '조절하다', '해방되다', '무관심하다', '단념하다', '이해하다'],
    tips({
      etymology: '라틴어 \'obsidere\'에서 유래했으며 \'앞에 앉아 있다\'는 뜻이 \'마음을 점령하다\'로 발전했습니다.',
      visual: '머릿속에 하나의 생각만 꽉 차서 다른 것이 들어올 틈이 없는 상태를 그려보세요.',
      soundAlike: '\'업세스\' 발음이 무언가에 \'업\'혀서 계속 \'세\'게 매달려 있는 느낌과 연결됩니다.',
      context: '주로 수동태인 \'be obsessed with\' 형태로 쓰여 무언가에 중독되거나 집착하는 상황에 자주 쓰입니다.',
      synonymAntonym: '한 가지에 매몰되는 \'fixate\'와 반대로 마음을 비우는 \'disregard\'를 대조해 보세요.',
    }),
    {
      definition: 'to dominate or preoccupy the thoughts or feelings of someone continually and to a troubling extent',
      synonyms: ['preoccupy', 'fixate', 'haunt'],
      antonyms: ['ignore', 'disregard', 'neglect'],
      exampleSentences: [
        { en: 'Many people tend to dwell on their past mistakes and let those thoughts dominate their daily lives.', ko: '많은 사람들이 과거의 실수에 대해 계속 생각하며 그 생각들이 일상을 지배하게 내버려 두는 경향이 있다.' },
        { en: 'He began to worry constantly about every tiny detail of the project until it affected his health.', ko: '그는 건강에 영향을 줄 정도로 프로젝트의 모든 아주 작은 세부 사항에 끊임없이 집착하기 시작했다.' },
      ],
    }
  ),
  word('obtain', '얻다', 5, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '라틴어 \'ob(향하여)\'와 \'tenere(잡다)\'가 합쳐져 무언가를 손에 쥐게 된다는 의미에서 유래했습니다.',
      visual: '오랫동안 기다리던 자격증이나 허가증을 양손으로 꽉 움켜쥐는 모습을 상상해 보세요.',
      soundAlike: '\'업(up) 테인(tain)\'으로 발음되니, 가치를 \'업\' 시키는 물건을 내 손에 \'테인(태인)\'다고 연상해 보세요.',
      context: '단순히 얻는 것보다 노력이나 공식적인 절차를 통해 무언가를 획득할 때 주로 쓰입니다.',
      synonymAntonym: 'acquire와는 획득의 의미로 통하며, 반대로 내어주거나 잃는 lose와는 대조됩니다.',
    }),
    {
      definition: 'to come into possession of something through effort, purchase, or request',
      synonyms: ['acquire', 'procure', 'attain'],
      antonyms: ['forfeit', 'relinquish', 'surrender'],
      exampleSentences: [
        { en: 'The researcher managed to collect enough data to a valid result for the study.', ko: '연구원은 연구를 위한 유효한 결과를 얻기에 충분한 데이터를 수집해냈습니다.' },
        { en: 'You must present a valid identification card to a security clearance for the building.', ko: '건물 출입 허가를 받으려면 유효한 신분증을 제시해야 합니다.' },
      ],
    }
  ),
  word('obvious', '명백한', 6, 'adjective',
    ['모호한', '복잡한', '희미한', '신비로운', '은밀한', '추상적인', '미묘한', '간접적인', '불확실한', '난해한'],
    tips({
      etymology: '라틴어 \'obviam\'에서 유래했으며, 길(via) 위에(ob) 놓여 있어 누구나 쉽게 볼 수 있다는 뜻에서 시작되었습니다.',
      visual: '안개가 자욱한 길을 걷다가 갑자기 안개가 걷히며 눈앞에 커다란 표지판이 나타나는 장면을 상상해 보세요.',
      soundAlike: '\'아비어스\' 발음이 \'앞이 어스름하지 않고 훤하다\'는 느낌과 연결하면 기억하기 쉽습니다.',
      context: '누가 봐도 뻔한 거짓말을 하거나, 정답이 너무 명확해서 설명이 필요 없을 때 주로 쓰입니다.',
      synonymAntonym: '반의어인 obscure(모호한)와 함께 외우면 \'밝음\'과 \'어둠\'의 대비로 명확히 구분됩니다.',
    }),
    {
      definition: 'easily perceived or understood; quite apparent and leaving no doubt',
      synonyms: ['evident', 'apparent', 'clear'],
      antonyms: ['obscure', 'vague', 'hidden'],
      exampleSentences: [
        { en: 'The solution to the mathematical problem was so simple that it became immediately apparent to everyone.', ko: '그 수학 문제의 해결책은 너무 간단해서 모두에게 즉각적으로 명백해졌다.' },
        { en: 'She tried to hide her disappointment, but the look on her face made her true feelings very plain.', ko: '그녀는 실망감을 숨기려 했지만, 얼굴 표정은 그녀의 진심을 아주 명백하게 드러냈다.' },
      ],
    }
  ),
  word('occasion', '경우', 7, 'noun',
    ['행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차'],
    tips({
      etymology: '라틴어 \'occasio\'에서 유래했으며, \'떨어지다\' 혹은 \'일어나다\'라는 뜻의 cadere가 포함되어 우연히 일어난 때를 의미합니다.',
      visual: '달력의 특정 날짜에 빨간 동그라미가 쳐져 있고 사람들이 파티 모자를 쓰고 모여 있는 장면을 상상해 보세요.',
      soundAlike: '\'어케이전\' 발음이 \'어디 가전?\'과 비슷하죠? 특별한 일이 생겨서 어디 가야 하는 상황을 떠올려 보세요.',
      context: '격식을 차려야 하는 행사나 특정한 사건이 벌어지는 시점을 나타낼 때 주로 사용됩니다.',
      synonymAntonym: '유의어 event는 구체적인 사건을, 반의어 misfortune은 때가 좋지 않은 불운을 의미할 수 있습니다.',
    }),
    {
      definition: 'A particular time when something happens, or a special event or celebration.',
      synonyms: ['event', 'instance', 'moment'],
      antonyms: ['misfortune', 'regularity', 'continuity'],
      exampleSentences: [
        { en: 'We bought a bottle of expensive champagne to celebrate the special event.', ko: '우리는 그 특별한 경우를 축하하기 위해 비싼 샴페인 한 병을 샀다.' },
        { en: 'He has had very little reason to visit the city on this specific time.', ko: '그는 이번 특정한 경우에 그 도시를 방문할 이유가 거의 없었다.' },
      ],
    }
  ),
  word('occupation', '일직업', 4, 'noun',
    ['목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계'],
    tips({
      etymology: '라틴어 \'occupare\'에서 유래하여 어떤 공간이나 시간을 \'차지하고 있는 상태\'를 뜻하며, 생계를 위해 시간을 쏟는 일을 의미하게 되었습니다.',
      visual: '정장을 입고 사무실 책상에 앉아 명함을 건네는 비즈니스맨의 모습을 상상해 보세요.',
      soundAlike: '\'아큐페이션\' 발음이 \'아껴서 패션\'을 챙겨야 하는 직장인의 고충과 비슷하다고 연상해 보세요.',
      context: '단순한 아르바이트보다는 사회적 지위나 전문성이 포함된 생업을 일컬을 때 주로 사용됩니다.',
      synonymAntonym: 'Profession은 전문직을 강조하고, 반대로 취미를 뜻하는 Hobby와 대조하여 기억하면 좋습니다.',
    }),
    {
      definition: 'The principal activity that a person performs in order to earn a living or the state of being busy with a task.',
      synonyms: ['profession', 'vocation', 'employment'],
      antonyms: ['avocation', 'pastime', 'leisure'],
      exampleSentences: [
        { en: 'Please state your name, age, and current job title on the application form.', ko: '신청서에 성함, 연령, 그리고 현재 직업명을 기재해 주세요.' },
        { en: 'The military forces maintained their control over the territory for several years.', ko: '군대는 수년 동안 그 영토에 대한 점령 상태를 유지했습니다.' },
      ],
    }
  ),
  word('occupy', '차지하다', 5, 'verb',
    ['비우다', '포기하다', '해방하다', '무시하다', '거절하다', '파괴하다', '이동하다', '연기하다', '분리하다', '방치하다'],
    tips({
      etymology: '라틴어 \'occupare\'에서 유래했으며, \'ob(앞에)\'와 \'capere(잡다)\'가 합쳐져 무언가를 꽉 붙잡아 차지한다는 뜻이 되었습니다.',
      visual: '빈 의자에 누군가 앉아서 자기 가방을 올려두고 자리를 꽉 채우고 있는 모습을 상상해 보세요.',
      soundAlike: '\'아큐파이\' 발음이 \'아껴봐 이(자리)\'처럼 들리기도 합니다. 소중한 자리를 아껴서 내가 차지한다는 느낌으로 외워보세요.',
      context: '군대가 영토를 점령하거나, 누군가 화장실을 사용 중일 때, 혹은 업무가 내 시간을 뺏을 때 주로 사용됩니다.',
      synonymAntonym: '무언가를 채우는 fill과 반대로 비워두는 vacate를 함께 기억하면 의미가 더 선명해집니다.',
    }),
    {
      definition: 'To fill or take up a specific space, time, or position.',
      synonyms: ['inhabit', 'possess', 'seize'],
      antonyms: ['vacate', 'abandon', 'surrender'],
      exampleSentences: [
        { en: 'Administrative tasks tend to take up and fill most of my working hours.', ko: '행정 업무가 내 근무 시간의 대부분을 차지하는 경향이 있다.' },
        { en: 'The enemy forces moved quickly to take control of and reside in the capital city.', ko: '적군은 수도를 점령하고 거주하기 위해 빠르게 움직였다.' },
      ],
    }
  ),
  word('occur', '일어나다', 6, 'noun',
    ['결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회'],
    tips({
      etymology: '라틴어 occurrere에서 유래했으며, ob(~을 향해)와 currere(달리다)가 합쳐져 \'눈앞에 달려오다\', 즉 \'일어나다\'라는 뜻이 되었습니다.',
      visual: '평온한 호수 위에 갑자기 커다란 물방울이 튀어 오르는 장면을 상상하며 무언가 발생하는 이미지를 그려보세요.',
      soundAlike: '\'어커\'라고 발음되는데, \'어? 커(커다란)\' 일이 벌어졌네! 라고 연상하면 기억하기 쉽습니다.',
      context: '주로 예상치 못한 사고나 자연 현상, 혹은 머릿속에 아이디어가 떠오를 때 자주 사용됩니다.',
      synonymAntonym: 'happen과 유사하지만 occur가 더 격식 있는 표현이며, 사라지다를 뜻하는 vanish와 반대됩니다.',
    }),
    {
      definition: 'to take place or happen, especially without being planned beforehand',
      synonyms: ['happen', 'transpire', 'arise'],
      antonyms: ['cease', 'stop', 'vanish'],
      exampleSentences: [
        { en: 'Minor earthquakes frequently take place along the fault line but rarely cause damage.', ko: '단층선을 따라 가벼운 지진이 빈번하게 일어나지만 피해를 입히는 경우는 드뭅니다.' },
        { en: 'A brilliant solution suddenly came to my mind while I was taking a walk in the park.', ko: '공원을 산책하던 중 갑자기 기발한 해결책이 머릿속에 떠올랐습니다.' },
      ],
    }
  ),
  word('odd', '묘한', 7, 'adjective',
    ['평범한', '규칙적인', '짝수의', '일반적인', '전형적인', '익숙한', '유사한', '동일한', '예상가능한', '표준의'],
    tips({
      etymology: '북유럽어 \'oddi\'에서 유래했으며, 원래 삼각형의 꼭짓점이나 남는 하나를 의미하여 \'홀수의\' 혹은 \'특이한\'이라는 뜻이 되었습니다.',
      visual: '모두가 똑같은 정장을 입고 있는데 혼자만 광대 옷을 입고 서 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'아드\'득 소리를 내며 이질적인 물건이 톱니바퀴 사이에 낀 상황을 떠올리면 \'이상한\' 느낌이 잘 전달됩니다.',
      context: '일상 대화에서 무언가 설명하기 힘든 미묘한 위화감이 들 때 \'That\'s odd\'라고 자주 표현합니다.',
      synonymAntonym: '평범한 것을 뜻하는 even, normal과는 반대되며, 독특함을 강조하는 strange나 weird와 결을 같이 합니다.',
    }),
    {
      definition: 'different from what is usual or expected; strange or unusual',
      synonyms: ['strange', 'peculiar', 'weird'],
      antonyms: ['normal', 'ordinary', 'even'],
      exampleSentences: [
        { en: 'The silence in the middle of the busy city felt extremely strange and unsettling.', ko: '번화한 도시 한복판의 정적은 매우 묘하고 불안하게 느껴졌다.' },
        { en: 'She noticed a peculiar smell coming from the kitchen that she couldn\'t identify.', ko: '그녀는 주방에서 정체를 알 수 없는 묘한 냄새가 나는 것을 알아차렸다.' },
      ],
    }
  ),
  word('of', '출신의', 2, 'adjective',
    ['예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한'],
    tips({
      etymology: '고대 영어 \'of\'에서 유래하여 분리나 기원을 나타내는 의미로 발전했습니다.',
      visual: '어떤 물건이 큰 덩어리에서 떨어져 나와 그 뿌리를 보여주는 그림을 상상하세요.',
      soundAlike: '\'오브\'라고 발음하며, 어떤 가문의 \'오브제(물건)\'가 그 가문 출신임을 나타낸다고 연상하세요.',
      context: '특정 지역이나 가문, 소속을 나타낼 때 전치사적 성격의 형용사구로 자주 쓰입니다.',
      synonymAntonym: '출처를 나타내는 from과 유사하며, 소속이 없는 independent와는 반대됩니다.',
    }),
    {
      definition: 'Expressing the relationship between a part and a whole, or indicating the origin and source of something.',
      synonyms: ['belonging to', 'originating from', 'concerning'],
      antonyms: ['apart from', 'without', 'independent of'],
      exampleSentences: [
        { en: 'The noblemen were men of royal descent and high social standing.', ko: '그 귀족들은 왕실 출신의 혈통과 높은 사회적 지위를 가진 사람들이었다.' },
        { en: 'She is a woman of great courage who never gives up on her dreams.', ko: '그녀는 자신의 꿈을 절대 포기하지 않는 위대한 용기를 가진 여성이다.' },
      ],
    }
  ),
  word('off', '떨어져', 3, 'noun',
    ['켜짐', '부착', '연결', '가까운', '내부', '중심', '포함', '진행', '상승', '고정'],
    tips({
      etymology: '고대 영어 \'of\'에서 유래하여 무언가로부터 분리되거나 멀어지는 움직임을 나타냅니다.',
      visual: '스위치를 눌러 불이 꺼지거나, 나뭇가지에서 사과가 툭 떨어지는 장면을 상상해 보세요.',
      soundAlike: '\'오프\'라고 발음하며, 무대 뒤(오프스테이지)로 사라지는 배우를 떠올리면 쉽습니다.',
      context: '음식이 상했거나, 쉬는 날이거나, 기계가 작동을 멈췄을 때 폭넓게 사용됩니다.',
      synonymAntonym: 'away와 함께 쓰여 멀어짐을 강조하고, on과는 반대로 접촉이 끊어짐을 의미합니다.',
    }),
    {
      definition: 'In a state of being removed, disconnected, or at a distance from a particular place or object.',
      synonyms: ['away', 'detached', 'removed'],
      antonyms: ['on', 'attached', 'connected'],
      exampleSentences: [
        { en: 'Please make sure to take your shoes before entering the house.', ko: '집에 들어가기 전에 반드시 신발을 벗어 주세요.' },
        { en: 'The milk smells a bit strange because it has gone sour.', ko: '우유가 상해서 약간 이상한 냄새가 납니다.' },
      ],
    }
  ),
  word('offend', '하다', 4, 'verb',
    ['칭찬하다', '존중하다', '도와주다', '기쁘게하다', '동의하다', '위로하다', '보호하다', '환영하다', '이해하다', '격려하다'],
    tips({
      etymology: '라틴어 \'offendere\'에서 유래했으며, \'ob(~에 맞서)\'와 \'fendere(치다)\'가 결합되어 누군가의 감정을 치거나 거스른다는 의미를 담고 있습니다.',
      visual: '누군가 무례한 말을 던져서 상대방의 가슴에 화살이 꽂히고 표정이 일그러지는 장면을 상상해 보세요.',
      soundAlike: '\'어! 팬(offend)이 화났네?\'라고 기억해 보세요. 좋아하는 팬의 기분을 상하게 만든 상황을 떠올리면 쉽습니다.',
      context: '주로 예의 없는 행동이나 부적절한 농담이 타인의 감정을 상하게 할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '기분을 상하게 하는 upset과 반대로 기쁘게 해주는 please를 짝지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'To cause someone to feel upset, annoyed, or resentful, typically by being rude or insensitive.',
      synonyms: ['insult', 'affront', 'displease'],
      antonyms: ['compliment', 'flatter', 'gratify'],
      exampleSentences: [
        { en: 'His blunt comments about her appearance managed to deeply hurt her feelings.', ko: '그녀의 외모에 대한 그의 직설적인 발언은 그녀의 기분을 깊이 상하게 했다.' },
        { en: 'The comedian apologized to anyone who might have been hurt by his controversial jokes.', ko: '코미디언은 자신의 논란 섞인 농담에 불쾌감을 느꼈을지도 모르는 모든 사람에게 사과했다.' },
      ],
    }
  ),
  word('offer', '권하다', 5, 'verb',
    ['거절하다', '요구하다', '무시하다', '금지하다', '철회하다', '수령하다', '연기하다', '방해하다', '비난하다', '숨기다'],
    tips({
      etymology: '라틴어 \'ob-\'(~쪽으로)와 \'ferre\'(가져오다)가 합쳐져 상대방에게 무언가를 내미는 느낌을 줍니다.',
      visual: '친구가 맛있는 사탕 봉지를 나에게 내밀며 하나 먹으라고 권하는 손동작을 상상해 보세요.',
      soundAlike: '\'아퍼\'와 비슷하게 들릴 수 있는데, 아픈 사람에게 도움을 주겠다고 권하는 상황을 떠올려 보세요.',
      context: '비즈니스 협상에서 조건을 제시하거나, 식사 자리에서 음식을 권할 때 가장 흔히 쓰입니다.',
      synonymAntonym: '무언가를 주겠다고 하는 provide와 반대로 거절하는 refuse를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to present something to someone for them to accept or reject as they wish',
      synonyms: ['propose', 'provide', 'suggest'],
      antonyms: ['refuse', 'withdraw', 'withhold'],
      exampleSentences: [
        { en: 'The host decided to provide a warm drink to every guest who arrived.', ko: '주인은 도착하는 모든 손님에게 따뜻한 음료를 권하기로 했습니다.' },
        { en: 'They plan to present a higher salary to keep their best employees.', ko: '그들은 최고의 직원들을 붙잡기 위해 더 높은 급여를 제안할 계획입니다.' },
      ],
    }
  ),
  word('office', '임무', 1, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '라틴어 \'officium\'에서 유래했으며, \'opus(일)\'와 \'facere(하다)\'가 합쳐져 \'수행해야 할 일\'이라는 의미를 가집니다.',
      visual: '제복을 입은 관리나 기사가 왕으로부터 특별한 명령을 하달받는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '\'어휘(office)를 다하는 것이 나의 임무다\'라고 발음과 연결해 기억하면 쉽습니다.',
      context: '현대에는 사무실이라는 뜻으로 흔히 쓰이지만, 격식 있는 상황에서는 공적인 직무나 책무를 뜻합니다.',
      synonymAntonym: 'duty와 유사하며, 무책임이나 방관을 뜻하는 irresponsibility와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A duty or function assigned to or assumed by someone, especially within a professional or governmental role.',
      synonyms: ['duty', 'function', 'responsibility'],
      antonyms: ['leisure', 'irresponsibility', 'unemployment'],
      exampleSentences: [
        { en: 'The newly elected official took the oath of his new position with great solemnity.', ko: '새로 당선된 관리는 엄숙하게 새로운 직책의 임무를 수행하겠다는 선서를 했습니다.' },
        { en: 'She performed the various tasks of her administrative role with remarkable efficiency.', ko: '그녀는 자신의 행정적 임무들을 놀라운 효율성으로 수행했습니다.' },
      ],
    }
  ),
  word('officer', '공무원', 6, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '라틴어 \'officium(의무, 봉사)\'에서 유래하여 공적인 임무를 수행하는 사람을 뜻합니다.',
      visual: '제복을 입고 배지를 단 채 시민들을 돕고 있는 경찰관의 모습을 상상해 보세요.',
      soundAlike: '사무실을 뜻하는 \'office\'에 사람을 뜻하는 \'-er\'이 붙어 사무를 보는 사람으로 기억하세요.',
      context: '군대, 경찰, 정부 기관 등 위계질서가 있는 조직에서 권한을 가진 직책을 부를 때 주로 쓰입니다.',
      synonymAntonym: '유사한 의미로 official이 있으며, 반대로 일반 시민은 civilian이라고 부릅니다.',
    }),
    {
      definition: 'A person who holds a position of authority or command in a government organization, the police, or the military.',
      synonyms: ['official', 'agent', 'executive'],
      antonyms: ['civilian', 'subordinate', 'underling'],
      exampleSentences: [
        { en: 'The police department sent a highly trained individual to investigate the scene.', ko: '경찰서는 현장을 조사하기 위해 고도로 훈련된 경찰관을 보냈습니다.' },
        { en: 'Every military leader must take responsibility for the safety of their soldiers.', ko: '모든 군 장교는 부하들의 안전에 대해 책임을 져야 합니다.' },
      ],
    }
  ),
  word('official', '공무원', 7, 'noun',
    ['민간인', '방문객', '기술자', '예술가', '자원봉사자', '수혜자', '관찰자', '참가자', '후원자', '거주자'],
    tips({
      etymology: '라틴어 \'officium(의무, 직무)\'에서 유래하여 공적인 임무를 수행하는 사람을 뜻합니다.',
      visual: '정장을 차려입고 신분증을 목에 건 채 정부 청사로 들어가는 사람을 상상해 보세요.',
      soundAlike: '\'어휘(official) 실\'력이 좋은 공무원이라고 연상하면 발음과 의미를 연결하기 쉽습니다.',
      context: '정부 기관이나 큰 조직에서 권한을 가지고 일하는 사람을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'administrator와 유사하며, 일반 시민을 뜻하는 civilian과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who holds a position of authority in an organization or government department.',
      synonyms: ['administrator', 'bureaucrat', 'functionary'],
      antonyms: ['civilian', 'layperson', 'underling'],
      exampleSentences: [
        { en: 'A senior government representative met with the local residents to discuss the new policy.', ko: '정부 고위 공무원이 새로운 정책을 논의하기 위해 지역 주민들을 만났습니다.' },
        { en: 'The election committee member confirmed that all votes had been counted accurately.', ko: '선거 관리 위원회 공무원은 모든 투표가 정확하게 집계되었음을 확인했습니다.' },
      ],
    }
  ),
  word('often', '자주', 2, 'noun',
    ['가끔', '드물게', '절대로', '항상', '갑자기', '천천히', '빠르게', '이미', '아직', '함께'],
    tips({
      etymology: '고대 영어 \'oft\'에서 유래했으며, \'빈번하게\'라는 의미가 수 세기 동안 유지되었습니다.',
      visual: '달력에 동그라미가 빽빽하게 쳐져 있는 모습을 상상하며 빈도가 높음을 떠올리세요.',
      soundAlike: '\'오픈(open)\'과 발음이 비슷하므로, 가게 문을 \'자주\' 연다고 연상하면 쉽습니다.',
      context: '일상적인 습관이나 반복되는 사건을 설명할 때 빈도 부사로 주로 쓰입니다.',
      synonymAntonym: 'frequently와는 유의어 관계이며, 드물다는 뜻의 rarely와는 반대되는 개념입니다.',
    }),
    {
      definition: 'many times or at short intervals; frequently',
      synonyms: ['frequently', 'repeatedly', 'regularly'],
      antonyms: ['rarely', 'seldom', 'infrequently'],
      exampleSentences: [
        { en: 'We visit the local library to borrow new books for our children.', ko: '우리는 아이들을 위한 새 책을 빌리기 위해 지역 도서관에 자주 방문합니다.' },
        { en: 'Heavy rain falls in this tropical region during the summer months.', ko: '이 열대 지역에는 여름철 동안 비가 자주 내립니다.' },
      ],
    }
  ),
  word('oil', '기름', 3, 'noun',
    ['물', '모래', '공기', '설탕', '소금', '식초', '우유', '먼지', '바람', '연기'],
    tips({
      etymology: '라틴어 \'oleum\'에서 유래했으며, 이는 올리브 열매에서 짠 즙을 의미합니다.',
      visual: '프라이팬 위에서 미끄러지듯 움직이는 매끄럽고 노란 액체를 상상해 보세요.',
      soundAlike: '\'오일\' 발음이 \'오, 일(work) 할 때 기계에 칠하는 것\'이라고 연상하면 쉽습니다.',
      context: '요리할 때 식용유로 쓰이거나 자동차 엔진이 잘 돌아가게 돕는 윤활유로 쓰입니다.',
      synonymAntonym: '미끌거리는 grease와 비슷하지만, 뻣뻣한 solid와는 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A smooth, thick liquid that is used as a fuel, for lubricating machinery, or in cooking.',
      synonyms: ['petroleum', 'lubricant', 'grease'],
      antonyms: ['water', 'solid', 'dryness'],
      exampleSentences: [
        { en: 'Heat some vegetable liquid in the pan before adding the chopped onions.', ko: '다진 양파를 넣기 전에 팬에 식용유를 약간 두르고 가열하세요.' },
        { en: 'The mechanic checked the engine to see if it needed a change of lubricant.', ko: '정비공은 엔진 오일을 교체해야 하는지 확인하기 위해 엔진을 점검했습니다.' },
      ],
    }
  ),
  word('olive', '올리브나무', 4, 'noun',
    ['포도', '무화과', '대추야자', '아몬드', '체리', '살구', '자두', '호두', '석류', '밤나무'],
    tips({
      etymology: '라틴어 \'oliva\'에서 유래되었으며, 지중해 지역의 풍요로움을 상징하는 나무의 이름입니다.',
      visual: '은빛 잎사귀가 찰랑거리는 지중해 언덕의 굽어 있는 고목과 그 가지에 달린 작은 열매를 상상하세요.',
      soundAlike: '\'올리브\' 발음은 \'올리(올려) + 브(부어)\'처럼 샐러드 위에 기름을 부어 먹는 소리와 비슷합니다.',
      context: '평화의 상징으로 비둘기가 물고 오는 나뭇가지나 요리에 쓰이는 기름의 원천으로 자주 등장합니다.',
      synonymAntonym: '식물학적으로는 olea와 연결되며, 인공적인 가공품인 butter와 대비되는 천연 식물성 자원입니다.',
    }),
    {
      definition: 'A small oval fruit with a hard stone and bitter flesh, or the evergreen tree that produces it, often associated with peace.',
      synonyms: ['olea', 'drupe', 'evergreen'],
      antonyms: ['deciduous', 'annual', 'shrub'],
      exampleSentences: [
        { en: 'The ancient tree stood in the center of the garden, providing shade with its silver-green leaves.', ko: '그 고대 나무는 정원 중앙에 서서 은녹색 잎으로 그늘을 제공했습니다.' },
        { en: 'Farmers in the Mediterranean region harvest the small fruits every autumn to produce high-quality oil.', ko: '지중해 지역의 농부들은 고품질의 기름을 생산하기 위해 매년 가을 작은 열매들을 수확합니다.' },
      ],
    }
  ),
  word('on', '위에', 1, 'noun',
    ['아래에', '안에', '옆에', '뒤에', '사이에', '앞에', '너머에', '근처에', '멀리에', '밖으로'],
    tips({
      etymology: '고대 영어 \'on\'에서 유래하여 접촉하고 있는 상태를 나타냅니다.',
      visual: '책상 표면 위에 사과 하나가 딱 붙어 있는 모습을 상상해 보세요.',
      soundAlike: '스위치를 \'온(on)\' 할 때 전구가 켜지며 불빛이 천장 \'위에\' 퍼지는 소리를 연상하세요.',
      context: '특정 요일이나 날짜, 혹은 기기 작동 상태를 말할 때도 자주 쓰입니다.',
      synonymAntonym: '표면에 붙어 있는 상태를 뜻하며, 떨어져 있는 off와 반대되는 개념입니다.',
    }),
    {
      definition: 'Physically in contact with and supported by a surface.',
      synonyms: ['atop', 'upon', 'over'],
      antonyms: ['off', 'under', 'beneath'],
      exampleSentences: [
        { en: 'The laptop is sitting directly on the wooden desk.', ko: '노트북이 나무 책상 위에 바로 놓여 있다.' },
        { en: 'A small bird landed on the thin branch of the tree.', ko: '작은 새 한 마리가 나무의 가는 가지 위에 내려앉았다.' },
      ],
    }
  ),
  word('once', '한번', 5, 'noun',
    ['두번', '항상', '절대', '자주', '가끔', '먼저', '나중에', '이미', '아직', '함께'],
    tips({
      etymology: '숫자 1을 뜻하는 \'one\'에서 유래하여 \'한 번\'이라는 의미를 가집니다.',
      visual: '달력에 딱 하나의 날짜에만 빨간색 동그라미가 쳐진 모습을 상상하세요.',
      soundAlike: '발음이 \'원스\'이므로 \'원(1)스\'라고 기억하면 숫자 1과 연결하기 쉽습니다.',
      context: '과거의 한 시점을 말하거나 횟수를 단 한 차례로 제한할 때 주로 쓰입니다.',
      synonymAntonym: '한 번을 뜻하는 single time과 대조되는 말로 여러 번을 뜻하는 multiple times가 있습니다.',
    }),
    {
      definition: 'on a single occasion or one time only',
      synonyms: ['one time', 'formerly', 'previously'],
      antonyms: ['twice', 'repeatedly', 'frequently'],
      exampleSentences: [
        { en: 'The Olympic Games are held every four years, but I only attended them once.', ko: '올림픽은 4년마다 열리지만, 나는 단 한 번만 참석했다.' },
        { en: 'She visited the Grand Canyon once during her childhood summer vacation.', ko: '그녀는 어린 시절 여름 방학 동안 그랜드 캐니언을 한 번 방문했다.' },
      ],
    }
  ),
  word('one', '하나', 2, 'noun',
    ['둘', '셋', '전체', '부분', '절반', '없음', '여러개', '모두', '조금', '가득'],
    tips({
      etymology: '고대 영어 \'an\'에서 유래되었으며, 이는 단일함이나 유일함을 뜻하는 뿌리 단어입니다.',
      visual: '숫자 1의 모양이나 사과 한 개가 테이블 위에 덩그러니 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '한국어 \'원\'과 발음이 비슷하므로, \'원(one)하는 것은 딱 하나\'라고 외우면 쉽습니다.',
      context: '수량을 셀 때 가장 기본이 되는 단위이며, 대명사로 쓰일 때는 앞에서 언급한 대상을 가리킵니다.',
      synonymAntonym: 'single과 유의어 관계이며, 여럿을 뜻하는 many와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The lowest cardinal number and the first number used in counting objects.',
      synonyms: ['single', 'individual', 'unit'],
      antonyms: ['many', 'multiple', 'several'],
      exampleSentences: [
        { en: 'Only a single person remained in the room after the meeting ended.', ko: '회의가 끝난 후 방에는 단 한 사람만이 남아 있었다.' },
        { en: 'Please choose the best option from the list provided below.', ko: '아래 제공된 목록에서 가장 좋은 선택지 하나를 고르세요.' },
      ],
    }
  ),
  word('only', '유일한', 3, 'adjective',
    ['다양한', '복수의', '평범한', '공통의', '무수한', '일반적인', '사소한', '부차적인', '전체적인', '일시적인'],
    tips({
      etymology: '고대 영어 \'anlic\'에서 유래했으며, \'one(하나)\'에 형용사형 접미사 \'-ly\'가 붙어 \'하나뿐인\'이라는 의미가 되었습니다.',
      visual: '수많은 회색 공들 사이에 단 하나만 밝게 빛나고 있는 노란색 공을 상상해 보세요.',
      soundAlike: '\'온리\' 발음이 \'온니(only) 하나\'라고 강조하는 소리처럼 들린다고 생각하면 쉽습니다.',
      context: '형용사로 쓰일 때는 명사 앞에서 그 대상이 유일함을 강조하며, 부사로 쓰일 때는 \'오직\'이라는 제한의 의미를 갖습니다.',
      synonymAntonym: '하나뿐인 \'sole\'과 의미가 통하며, 여러 개를 뜻하는 \'multiple\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Being the single one of its kind; no others existing in a particular group or situation.',
      synonyms: ['sole', 'exclusive', 'solitary'],
      antonyms: ['multiple', 'numerous', 'various'],
      exampleSentences: [
        { en: 'She was the child in her family, so she never had to share a bedroom with siblings.', ko: '그녀는 가족 중 외동딸이었기 때문에 형제자매와 침실을 같이 쓸 필요가 없었다.' },
        { en: 'This is the copy of the original manuscript that survived the Great Fire.', ko: '이것은 대화재에서 살아남은 원본 원고의 유일한 사본이다.' },
      ],
    }
  ),
  word('operate', '움직이다', 6, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '라틴어 \'operari(일하다)\'에서 유래하여, 기계나 시스템이 제 기능을 하며 일하는 상태를 나타냅니다.',
      visual: '공장의 거대한 기계 장치들이 톱니바퀴를 맞물리며 힘차게 돌아가는 모습을 상상해 보세요.',
      soundAlike: '\'오퍼레이트\'는 \'앞으로(Ope) 레이트(Rate) 있게\' 움직인다고 연상하면 속도감 있게 작동하는 느낌이 납니다.',
      context: '단순히 몸을 움직이는 것보다 기계를 조작하거나 사업체를 경영할 때 주로 쓰이는 전문적인 표현입니다.',
      synonymAntonym: '작동시키는 것은 run, 멈추는 것은 halt와 함께 기억하면 효율적입니다.',
    }),
    {
      definition: 'To control the functioning of a machine, process, or system to ensure it works correctly.',
      synonyms: ['function', 'manage', 'run'],
      antonyms: ['halt', 'idle', 'stagnate'],
      exampleSentences: [
        { en: 'The technician showed the new employees how to handle the heavy machinery safely.', ko: '기술자는 신입 사원들에게 대형 기계를 안전하게 작동시키는 법을 보여주었습니다.' },
        { en: 'Most local businesses in this small town continue to function under strict safety guidelines.', ko: '이 작은 마을의 대부분의 지역 사업체들은 엄격한 안전 지침 아래 계속 운영되고 있습니다.' },
      ],
    }
  ),
  word('opinion', '의견', 7, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '라틴어 opinari(생각하다)에서 유래하여 마음속에 품고 있는 생각을 뜻합니다.',
      visual: '회의실에서 한 사람이 손을 들고 자신의 생각을 당당하게 말하는 모습을 상상하세요.',
      soundAlike: '오! 피니언(피니시) - 내 생각의 마무리는 이렇다! 라고 외치는 소리로 기억하세요.',
      context: '사실(fact)과 대조되는 개념으로 개인의 주관적인 판단을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'view와 유사하며, 모두가 동의하는 사실인 fact와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A belief or judgment formed about something, not necessarily based on fact or knowledge.',
      synonyms: ['view', 'perspective', 'belief'],
      antonyms: ['fact', 'certainty', 'reality'],
      exampleSentences: [
        { en: 'Everyone is entitled to their own perspective on this controversial matter.', ko: '모든 사람은 이 논란이 되는 문제에 대해 자신만의 견해를 가질 권리가 있습니다.' },
        { en: 'Public sentiment has shifted significantly since the new policy was announced.', ko: '새로운 정책이 발표된 이후 대중의 여론이 크게 바뀌었습니다.' },
      ],
    }
  ),
  word('opportunity', '기회', 4, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '라틴어 \'ob-\'(~을 향해)와 \'portus\'(항구)가 합쳐져, 배가 항구로 들어갈 수 있는 유리한 상태를 뜻하게 되었습니다.',
      visual: '취업 박람회에서 수많은 기업 부스들 사이로 열려 있는 문을 통과하는 자신의 모습을 상상해 보세요.',
      soundAlike: '\'어퍼(upper) + 튜니티\'로 발음되니, 위로 올라갈 수 있는 좋은 기회라고 연상하면 쉽습니다.',
      context: '비즈니스나 일상 대화에서 놓치기 아까운 제안이나 상황을 설명할 때 주로 쓰이는 긍정적인 단어입니다.',
      synonymAntonym: 'chance와 비슷하지만, opportunity는 조금 더 공식적이고 유리한 환경이 갖춰진 상태를 강조합니다.',
    }),
    {
      definition: 'a set of circumstances that makes it possible to do something or achieve a goal',
      synonyms: ['chance', 'opening', 'possibility'],
      antonyms: ['misfortune', 'obstacle', 'hindrance'],
      exampleSentences: [
        { en: 'Studying abroad provided a great chance to experience a different culture firsthand.', ko: '유학은 다른 문화를 직접 경험할 수 있는 아주 좋은 기회를 제공했습니다.' },
        { en: 'Investors are always looking for a profitable opening in the emerging market.', ko: '투자자들은 항상 신흥 시장에서 수익성 있는 기회를 찾고 있습니다.' },
      ],
    }
  ),
  word('oppose', '반대하다', 5, 'verb',
    ['찬성하다', '동의하다', '지지하다', '수긍하다', '협력하다', '순응하다', '허가하다', '장려하다', '수용하다', '방조하다'],
    tips({
      etymology: '라틴어 \'ob-\'(반대하여)와 \'ponere\'(놓다)가 합쳐져 상대방의 맞은편에 서서 대항한다는 의미를 가집니다.',
      visual: '축구 경기에서 상대 팀 선수가 내 앞을 가로막으며 수비하는 모습을 상상해 보세요.',
      soundAlike: '\'어포즈\' 발음이 \'어? 포즈(pose)를 반대로 잡네?\'라고 연상하면 기억하기 쉽습니다.',
      context: '정치적 정책이나 새로운 법안에 대해 비판적인 입장을 취할 때 주로 사용됩니다.',
      synonymAntonym: 'resist는 힘으로 맞서는 느낌이고, support는 뒤에서 밀어주는 정반대의 행동입니다.',
    }),
    {
      definition: 'To disagree strongly with a plan or policy and try to prevent it from happening.',
      synonyms: ['resist', 'confront', 'withstand'],
      antonyms: ['support', 'approve', 'endorse'],
      exampleSentences: [
        { en: 'Many local residents decided to strongly protest and fight against the new factory construction.', ko: '많은 지역 주민들이 새로운 공장 건설에 강력히 반대하기로 결정했습니다.' },
        { en: 'The two political parties continue to challenge each other on the proposed tax reform.', ko: '두 정당은 제안된 세제 개편안에 대해 계속해서 서로 반대하고 있습니다.' },
      ],
    }
  ),
  word('optimist', '낙천가', 6, 'noun',
    ['비관론자', '현실주의자', '회의론자', '기회주의자', '이상주의자', '냉소주의자', '실용주의자', '허무주의자', '완벽주의자', '이기주의자'],
    tips({
      etymology: '라틴어 \'optimus(최고의)\'에서 유래하여, 모든 상황에서 최선의 결과를 기대하는 사람을 뜻합니다.',
      visual: '비가 쏟아지는 날에도 \'꽃들이 물을 마셔서 다행이야\'라며 웃고 있는 사람을 상상해 보세요.',
      soundAlike: '\'앞이 미소(opti-mis)\'라고 연상하여, 늘 앞날을 보며 미소 짓는 긍정적인 사람으로 기억하세요.',
      context: '컵에 물이 절반이나 남았다고 말하는 사람의 태도를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '밝은 면을 보는 \'idealist\'와 유의어이며, 늘 최악을 생각하는 \'pessimist\'와 반대됩니다.',
    }),
    {
      definition: 'A person who tends to be hopeful and confident about the future or the success of something.',
      synonyms: ['idealist', 'dreamer', 'positivist'],
      antonyms: ['pessimist', 'cynic', 'defeatist'],
      exampleSentences: [
        { en: 'Despite the financial crisis, the entrepreneur remained a staunch believer that things would improve.', ko: '경제 위기에도 불구하고, 그 기업가는 상황이 호전될 것이라고 굳게 믿는 낙천가로 남았습니다.' },
        { en: 'Being a natural hopeful, she always looks for the silver lining in every difficult situation.', ko: '태생적인 낙천가인 그녀는 모든 어려운 상황 속에서도 항상 한 줄기 희망을 찾습니다.' },
      ],
    }
  ),
  word('option', '선택', 7, 'noun',
    ['조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준'],
    tips({
      etymology: '라틴어 optare(선택하다)에서 유래하여, 여러 가지 중 하나를 고를 수 있는 권리나 대상을 뜻합니다.',
      visual: '식당 메뉴판에서 여러 가지 음식 중 하나를 손가락으로 가리키는 모습을 상상해 보세요.',
      soundAlike: '자동차의 \'풀옵션\'을 떠올려 보세요. 기본 사양 외에 추가로 선택한 기능들을 의미합니다.',
      context: '비즈니스나 일상 대화에서 대안이나 해결책이 여러 개 있을 때 자주 사용됩니다.',
      synonymAntonym: 'choice와 유사하며, 강제적인 의무를 뜻하는 compulsion과는 반대되는 개념입니다.',
    }),
    {
      definition: 'something that may be chosen from a set of possibilities or the power to make such a selection',
      synonyms: ['choice', 'alternative', 'selection'],
      antonyms: ['necessity', 'requirement', 'compulsion'],
      exampleSentences: [
        { en: 'The university provides a wide variety of elective courses as an available choice for students.', ko: '대학교는 학생들에게 가능한 선택지로 다양한 선택 과목을 제공합니다.' },
        { en: 'Having no other way to solve the problem, we had to accept the final proposal.', ko: '문제를 해결할 다른 방법이 없었기에, 우리는 마지막 제안을 받아들여야만 했습니다.' },
      ],
    }
  ),
  word('or', '혹은', 1, 'conjunction',
    ['왜냐하면', '그럼에도', '결국', '그리고', '하지만', '그래서', '그러나', '또한', '반면에', '비록'],
    tips({
      etymology: '고대 영어 \'othther\'에서 유래하여 두 가지 중 하나를 선택하는 상황을 나타냅니다.',
      visual: '갈림길에서 왼쪽 길과 오른쪽 길 사이에 서 있는 표지판을 상상해 보세요.',
      soundAlike: '발음이 \'오어\'로 들리는데, \'오~ 어떡하지?\'라며 선택을 고민하는 상황을 떠올려 보세요.',
      context: '메뉴판에서 커피와 차 중 하나를 고를 때 가장 자주 쓰이는 연결어입니다.',
      synonymAntonym: '유의어로는 alternatively가 있으며, 반대 개념으로는 둘 다를 포함하는 and가 있습니다.',
    }),
    {
      definition: 'Used to link two or more alternatives or possibilities.',
      synonyms: ['alternatively', 'otherwise', 'either'],
      antonyms: ['and', 'both', 'neither'],
      exampleSentences: [
        { en: 'Would you like to have tea or coffee with your dessert?', ko: '디저트와 함께 차나 커피 중 무엇을 드시겠어요?' },
        { en: 'We can go to the cinema today or stay at home and watch a movie.', ko: '우리는 오늘 영화관에 가거나 집에 머물며 영화를 볼 수 있다.' },
      ],
    }
  ),
  word('oral', '구두의', 4, 'adjective',
    ['서면의', '침묵의', '시각적인', '청각적인', '내면의', '물리적인', '추상적인', '수동적인', '공식적인', '비밀의'],
    tips({
      etymology: '라틴어 \'os(입)\'에서 유래하여 입과 관련된 모든 행위나 상태를 의미하게 되었습니다.',
      visual: '마이크 앞에서 종이 없이 말로만 발표하는 연설자의 모습을 상상해 보세요.',
      soundAlike: '\'오랄\' 발음이 \'오! 말(말하다)\'과 비슷하게 들린다고 생각하면 입으로 하는 말임을 기억하기 쉽습니다.',
      context: '시험이나 계약에서 서류가 아닌 말로 주고받는 상황에서 주로 쓰이는 표현입니다.',
      synonymAntonym: '글로 쓰는 written과 반대되며, 소리로 전달하는 vocal이나 spoken과 의미가 통합니다.',
    }),
    {
      definition: 'spoken rather than written, or relating to the mouth',
      synonyms: ['spoken', 'vocal', 'verbal'],
      antonyms: ['written', 'printed', 'silent'],
      exampleSentences: [
        { en: 'The students had to pass an oral examination to demonstrate their fluency in the language.', ko: '학생들은 그 언어에 대한 유창함을 증명하기 위해 구술 시험을 통과해야 했습니다.' },
        { en: 'Ancient legends were preserved through oral traditions long before they were ever recorded.', ko: '고대 전설들은 기록되기 훨씬 전부터 구전 전통을 통해 보존되었습니다.' },
      ],
    }
  ),
  word('orbit', '궤도', 10, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '라틴어 orbita에서 유래했으며, 이는 수레바퀴가 지나간 \'자국\'이나 \'길\'을 의미합니다.',
      visual: '행성이 태양 주위를 커다란 원을 그리며 끊임없이 돌고 있는 우주 공간을 상상해 보세요.',
      soundAlike: '\'오비트\' 발음이 \'오! 빛(light)이 나는 길\'처럼 들린다고 생각하며 별의 길을 연상하세요.',
      context: '천문학뿐만 아니라 영향력이 미치는 \'세력권\'이나 \'범위\'를 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: '경로를 뜻하는 path와 유사하며, 정지 상태를 뜻하는 stasis와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The curved path of a celestial object or spacecraft around a star, planet, or moon.',
      synonyms: ['path', 'course', 'trajectory'],
      antonyms: ['center', 'interior', 'stasis'],
      exampleSentences: [
        { en: 'The satellite was successfully placed into a stable path around the Earth.', ko: '위성은 지구 주위의 안정적인 궤도에 성공적으로 진입했습니다.' },
        { en: 'Mars takes significantly longer than our planet to complete one full revolution around the sun.', ko: '화성은 태양 주위의 궤도를 한 바퀴 다 도는 데 우리 행성보다 훨씬 더 오랜 시간이 걸립니다.' },
      ],
    }
  ),
  word('orchestra', '관현악단', 5, 'noun',
    ['합창단', '지휘자', '악보', '연주회', '독주자', '무대', '관객', '음악가', '악기', '교향곡'],
    tips({
      etymology: '그리스어 \'orkhestra\'에서 유래했으며, 고대 그리스 극장에서 무용수들이 춤을 추던 무대 앞 공간을 의미했습니다.',
      visual: '턱시도를 입은 수십 명의 연주자들이 바이올린, 첼로, 플루트를 들고 지휘자의 손짓에 맞춰 연주하는 모습을 상상하세요.',
      soundAlike: '발음이 \'오케스트라\'로 한국어 외래어와 거의 동일하여 소리 내어 읽으면 쉽게 기억할 수 있습니다.',
      context: '클래식 공연장이나 대규모 영화 음악 녹음 현장에서 여러 악기군이 조화를 이루는 집단을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'ensemble이나 symphony와 비슷한 맥락에서 쓰이지만, solo나 duo와는 규모 면에서 반대되는 개념입니다.',
    }),
    {
      definition: 'A large group of musicians who play various instruments together, typically including strings, woodwinds, brass, and percussion.',
      synonyms: ['ensemble', 'symphony', 'philharmonic'],
      antonyms: ['soloist', 'duet', 'trio'],
      exampleSentences: [
        { en: 'The conductor raised his baton, and the entire group began to play the opening notes of the symphony.', ko: '지휘자가 지휘봉을 들자 관현악단 전체가 교향곡의 도입부를 연주하기 시작했습니다.' },
        { en: 'Many talented violinists auditioned for a seat in the prestigious city musical ensemble.', ko: '많은 재능 있는 바이올린 연주자들이 그 명성 있는 시립 관현악단의 단원이 되기 위해 오디션을 보았습니다.' },
      ],
    }
  ),
  word('order', '순서', 6, 'noun',
    ['혼란', '무질서', '우연', '뒤섞임', '파괴', '정지', '거부', '실패', '소음', '분산'],
    tips({
      etymology: '라틴어 \'ordo\'에서 유래하여 베틀의 실을 가지런히 놓는 \'열\'이나 \'줄\'을 의미합니다.',
      visual: '도서관의 책들이 번호표에 맞춰 일렬로 나란히 꽂혀 있는 모습을 상상하세요.',
      soundAlike: '식당에서 \'오더(주문)\'를 하면 음식이 나오는 \'순서\'가 정해진다고 생각하면 쉽습니다.',
      context: '알파벳순이나 시간순처럼 특정한 기준에 따라 나열된 상태를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'sequence와 유사하며, 무작위 상태를 뜻하는 chaos와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the arrangement or disposition of people or things in relation to each other according to a particular sequence or method',
      synonyms: ['sequence', 'arrangement', 'succession'],
      antonyms: ['disorder', 'chaos', 'confusion'],
      exampleSentences: [
        { en: 'Please arrange the files in alphabetical sequence to keep them organized.', ko: '파일들을 정리된 상태로 유지하기 위해 알파벳 순서대로 배열해 주세요.' },
        { en: 'The names of the winners were announced in reverse chronological sequence.', ko: '우승자들의 명단이 시간 역순으로 발표되었습니다.' },
      ],
    }
  ),
  word('ordinary', '보통의', 7, 'adjective',
    ['특별한', '비범한', '화려한', '독특한', '기괴한', '희귀한', '우수한', '복잡한', '거대한', '신비로운'],
    tips({
      etymology: '라틴어 ordo(질서, 순서)에서 유래하여 정해진 순서대로 일어나는 평범한 상태를 뜻합니다.',
      visual: '화려한 장식 없이 매일 입는 편안한 티셔츠와 청바지 차림을 상상해 보세요.',
      soundAlike: '오디너리... \'어디나\' 있는 흔한 물건이나 사람을 떠올리면 발음과 연결하기 쉽습니다.',
      context: '특별한 이벤트가 없는 지루하거나 평화로운 일상을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '특별하지 않은 common과 대조되는 비범한 extraordinary를 함께 기억하세요.',
    }),
    {
      definition: 'with no special or distinctive features; normal and not unusual in any way',
      synonyms: ['common', 'average', 'routine'],
      antonyms: ['extraordinary', 'exceptional', 'unusual'],
      exampleSentences: [
        { en: 'It was just an average day with nothing unusual happening in the neighborhood.', ko: '이웃에 아무런 특이한 일이 일어나지 않은 평범한 하루였습니다.' },
        { en: 'She found beauty in the simple moments of her daily life.', ko: '그녀는 자신의 일상적인 삶의 소박한 순간들 속에서 아름다움을 발견했습니다.' },
      ],
    }
  ),
  word('organ', '기관', 4, 'noun',
    ['조직', '세포', '근육', '뼈대', '신경', '혈관', '피부', '관절', '호르몬', '감각'],
    tips({
      etymology: '그리스어 \'organon\'에서 유래했으며, 원래 \'도구\'나 \'악기\'를 뜻하던 말이 몸의 기능을 수행하는 \'기관\'으로 발전했습니다.',
      visual: '심장이나 폐처럼 우리 몸 안에서 각자의 역할을 수행하는 부품들을 상상해 보세요.',
      soundAlike: '\'오르간\'이라는 악기 이름과 발음이 같습니다. 파이프 오르간의 복잡한 구조를 몸속 장기에 비유해 보세요.',
      context: '생물학에서는 심장이나 간 같은 신체 부위를 뜻하지만, 신문사나 정당의 입장을 대변하는 매체를 뜻하기도 합니다.',
      synonymAntonym: '몸의 일부인 part와 유의어 관계이며, 전체를 뜻하는 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A specialized part of a biological entity that performs a specific functional role, such as the heart or lungs.',
      synonyms: ['body part', 'structure', 'unit'],
      antonyms: ['whole', 'entirety', 'organism'],
      exampleSentences: [
        { en: 'The heart is a vital muscular pump that circulates blood throughout the entire body.', ko: '심장은 전신에 혈액을 순환시키는 필수적인 근육 기관입니다.' },
        { en: 'Doctors are working hard to find a compatible donor for the patient\'s transplant surgery.', ko: '의사들은 환자의 이식 수술을 위해 적합한 기증 기관을 찾으려 노력하고 있습니다.' },
      ],
    }
  ),
  word('organic', '유기체의', 5, 'adjective',
    ['인공적인', '합성된', '기계적인', '무기질의', '가공된', '화학적인', '정적인', '분리된', '인위적인', '고정된'],
    tips({
      etymology: '그리스어 organon(도구, 기관)에서 유래하여 살아있는 생명체의 기관처럼 서로 연결되어 작동함을 뜻합니다.',
      visual: '화학 비료 없이 흙 속에서 지렁이와 함께 자라나는 싱싱한 채소 밭을 상상해 보세요.',
      soundAlike: '발음이 \'오! 개닉(ganic)\'과 비슷하니, 자연 그대로의 것을 보고 감탄하는 모습을 떠올려 보세요.',
      context: '식품뿐만 아니라 조직이나 디자인이 인위적이지 않고 자연스럽게 조화를 이룰 때도 자주 쓰입니다.',
      synonymAntonym: 'natural과 결을 같이하며, 반대말인 artificial이나 synthetic과 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'Produced or involving production without the use of chemical fertilizers, pesticides, or other artificial agents.',
      synonyms: ['natural', 'biological', 'ecological'],
      antonyms: ['artificial', 'synthetic', 'inorganic'],
      exampleSentences: [
        { en: 'The farmer decided to switch to sustainable methods to produce high-quality vegetables.', ko: '그 농부는 고품질의 채소를 생산하기 위해 지속 가능한 유기농법으로 전환하기로 결정했습니다.' },
        { en: 'A healthy ecosystem requires a complex and harmonious relationship between all living entities.', ko: '건강한 생태계는 모든 살아있는 생명체들 사이의 복잡하고 유기적인 관계를 필요로 합니다.' },
      ],
    }
  ),
  word('organize', '조직하다', 6, 'verb',
    ['정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다'],
    tips({
      etymology: '신체 기관을 뜻하는 organ에서 유래하여, 여러 부분이 조화를 이루어 기능을 하도록 만드는 것을 의미합니다.',
      visual: '뒤죽박죽 섞여 있는 서류들을 색깔별 폴더에 차곡차곡 분류하여 넣는 모습을 상상해 보세요.',
      soundAlike: '오건(organ) 아이즈(ize) - 내 눈(eyes)으로 물건들을 질서 있게 배열하는 느낌으로 기억하세요.',
      context: '회사에서 행사를 기획하거나, 방 청소를 할 때, 혹은 생각을 정리할 때 주로 사용됩니다.',
      synonymAntonym: 'arrange는 단순히 나열하는 느낌이고, mess up은 공들여 세운 질서를 망가뜨리는 반대 상황입니다.',
    }),
    {
      definition: 'to arrange things into a structured order or to plan an event systematically',
      synonyms: ['arrange', 'coordinate', 'structure'],
      antonyms: ['disarrange', 'jumble', 'confuse'],
      exampleSentences: [
        { en: 'The committee needs to arrange a meeting to plan the upcoming charity event.', ko: '위원회는 다가오는 자선 행사를 계획하기 위해 회의를 준비해야 합니다.' },
        { en: 'She spent the entire afternoon putting her bookshelf in alphabetical order.', ko: '그녀는 오후 내내 자신의 책장을 알파벳 순서로 정리하며 보냈습니다.' },
      ],
    }
  ),
  word('orient', '하다', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'oriens\'에서 유래하여 해가 뜨는 \'동쪽\'을 향하게 한다는 의미에서 시작되었습니다.',
      visual: '나침반 바늘이 북쪽을 향해 정렬되듯, 새로운 환경에서 방향을 잡는 모습을 상상하세요.',
      soundAlike: '\'오리엔테이션(OT)\'을 떠올려 보세요. 새로운 곳에서 적응하고 방향을 잡는 과정입니다.',
      context: '지도나 나침반을 이용해 위치를 파악하거나, 새로운 직무에 적응할 때 주로 사용됩니다.',
      synonymAntonym: 'align과 유의어이며, 길을 잃게 만드는 disorient와 반대되는 개념입니다.',
    }),
    {
      definition: 'To find one\'s position in relation to new and strange surroundings or to align something in a specific direction.',
      synonyms: ['align', 'adjust', 'familiarize'],
      antonyms: ['disorient', 'confuse', 'bewilder'],
      exampleSentences: [
        { en: 'It took a few minutes for the hikers to themselves using the map and the sun.', ko: '등산객들이 지도와 태양을 이용해 자신들의 위치를 파악하는 데 몇 분이 걸렸다.' },
        { en: 'New employees need time to their goals with the company\'s long-term vision.', ko: '신입 사원들은 자신의 목표를 회사의 장기적인 비전에 맞출 시간이 필요하다.' },
      ],
    }
  ),
  word('origin', '기원', 4, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '라틴어 \'oriri(떠오르다, 태어나다)\'에서 유래하여 무언가가 처음 시작된 지점을 뜻합니다.',
      visual: '강물이 산꼭대기의 작은 샘물에서부터 시작되어 흘러내려오는 장면을 상상해 보세요.',
      soundAlike: '\'오리진\'은 \'오리지널(Original)\'과 발음이 비슷하죠? 진짜 원조나 본래의 것을 떠올리면 쉽습니다.',
      context: '역사적 사건의 배경이나 특정 가문의 혈통, 제품의 원산지를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '시작을 뜻하는 source와 끝을 의미하는 end를 함께 기억하면 대조가 명확합니다.',
    }),
    {
      definition: 'the point or place where something begins, arises, or is derived',
      synonyms: ['source', 'root', 'beginning'],
      antonyms: ['end', 'conclusion', 'termination'],
      exampleSentences: [
        { en: 'Scientists are still studying the precise source and start of the universe.', ko: '과학자들은 여전히 우주의 정확한 근원과 기원을 연구하고 있습니다.' },
        { en: 'The custom has its roots in ancient religious ceremonies from centuries ago.', ko: '그 관습은 수세기 전의 고대 종교 의식에 기원을 두고 있습니다.' },
      ],
    }
  ),
  word('other', '다른', 5, 'noun',
    ['사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획'],
    tips({
      etymology: '고대 영어 \'other\'에서 유래했으며, \'둘 중 두 번째\'라는 의미에서 \'다른 것\'으로 확장되었습니다.',
      visual: '똑같은 사과들 사이에 혼자 색깔이 다른 사과 하나가 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어더\'와 비슷하므로, \'어? 더(more) 있네, 다른 게!\'라고 연상해 보세요.',
      context: '이미 언급된 것 외에 추가적인 선택지나 대상을 가리킬 때 주로 사용합니다.',
      synonymAntonym: 'alternative와 유사하며, the same과는 정반대의 개념을 가집니다.',
    }),
    {
      definition: 'A different person or thing from the one already mentioned or known.',
      synonyms: ['alternative', 'different', 'additional'],
      antonyms: ['same', 'identical', 'similar'],
      exampleSentences: [
        { en: 'One twin is quiet, but the is very outgoing.', ko: '한 명의 쌍둥이는 조용하지만, 다른 한 명은 매우 외향적이다.' },
        { en: 'Some people like tea, while people prefer coffee.', ko: '어떤 사람들은 차를 좋아하고, 다른 사람들은 커피를 선호한다.' },
      ],
    }
  ),
  word('otherwise', '딴', 6, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '다른(other) 방식(wise)이라는 결합어로, 현재 상황과 다른 대안이나 결과를 나타낼 때 쓰입니다.',
      visual: '갈림길에서 한쪽 길을 선택하지 않았을 때 벌어지는 전혀 다른 풍경을 상상해 보세요.',
      soundAlike: '아더와이즈 - \'아더(다른) 와이(왜)지?\'라고 물으며 다른 이유나 상황을 떠올려 보세요.',
      context: '만약 그렇지 않으면 어떤 일이 벌어질지 경고하거나, 다른 관점을 제시할 때 유용합니다.',
      synonymAntonym: '유의어로는 or else가 있으며, 반의어로는 어떤 조건에서도 변함없음을 뜻하는 regardless가 있습니다.',
    }),
    {
      definition: 'In a different way or in all ways except the one mentioned.',
      synonyms: ['differently', 'alternatively', 'else'],
      antonyms: ['similarly', 'likewise', 'identically'],
      exampleSentences: [
        { en: 'Shut the window, because it will get very cold in the room.', ko: '창문을 닫으세요, 그렇지 않으면 방 안이 매우 추워질 것입니다.' },
        { en: 'The bike has a few scratches, but it is in perfect condition.', ko: '자전거에 흠집이 몇 개 있긴 하지만, 그 외에는 상태가 아주 완벽합니다.' },
      ],
    }
  ),
  word('ought', '하다', 7, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다'],
    tips({
      etymology: '고대 영어 \'ahte\'에서 유래했으며, 원래는 \'소유하다\'나 \'빚지다\'라는 의미에서 도덕적 의무로 발전했습니다.',
      visual: '양심의 가책을 느껴 올바른 길로 가리키는 나침반 바늘을 상상해 보세요.',
      soundAlike: '\'오트(ought)\'는 \'옳다\'와 발음이 비슷하므로 \'옳게 행동해야 한다\'라고 연상하면 쉽습니다.',
      context: '주로 도덕적 의무나 강한 권고를 나타낼 때 쓰이며 should보다 약간 더 격식 있는 느낌을 줍니다.',
      synonymAntonym: 'should와 유사하지만 의무감이 더 강하며, 반대로 무책임함을 뜻하는 neglect와 대조됩니다.',
    }),
    {
      definition: 'used to indicate duty, moral obligation, or what is expected to be correct or probable',
      synonyms: ['should', 'must', 'beholden'],
      antonyms: ['neglect', 'disregard', 'ignore'],
      exampleSentences: [
        { en: 'Citizens have a responsibility and they to vote in every election.', ko: '시민들은 책임이 있으며 모든 선거에서 투표를 해야만 합니다.' },
        { en: 'The cake has been in the oven for an hour, so it to be ready by now.', ko: '케이크가 오븐에 한 시간 동안 있었으니 지금쯤은 다 익었을 것입니다.' },
      ],
    }
  ),
  word('ounce', '삵괭이', 8, 'noun',
    ['호랑이', '표범', '치타', '사자', '늑대', '여우', '너구리', '오소리', '수달', '고양이'],
    tips({
      etymology: '라틴어 \'uncia\'에서 유래했으며, 무게 단위와는 별개로 중앙아시아의 설표(snow leopard)를 지칭하는 고어에서 왔습니다.',
      visual: '눈 덮인 산맥에서 두꺼운 꼬리를 휘감고 바위 뒤에 숨어 있는 신비로운 야생 고양잇과 동물을 상상해 보세요.',
      soundAlike: '무게 단위인 \'온스\'와 발음이 같지만, 야생 동물 문맥에서는 눈표범이나 삵괭이를 뜻합니다.',
      context: '동물학이나 고전 문학에서 희귀한 야생 고양이를 묘사할 때 주로 등장하는 용어입니다.',
      synonymAntonym: '설표를 뜻하는 snow leopard와 유사하며, 가축화된 고양이인 domestic cat과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A medium-sized wild cat with thick fur, often referring specifically to the snow leopard of central Asia.',
      synonyms: ['snow leopard', 'wildcat', 'feline'],
      antonyms: ['housecat', 'pet', 'domestic animal'],
      exampleSentences: [
        { en: 'The elusive ounce prowls through the high altitudes of the Himalayan mountains.', ko: '그 눈에 잘 띄지 않는 삵괭이는 히말라야 산맥의 고지대를 배회합니다.' },
        { en: 'Rare sightings of the ounce have prompted new conservation efforts in the region.', ko: '그 삵괭이가 드물게 목격되면서 해당 지역에 새로운 보호 노력이 촉구되었습니다.' },
      ],
    }
  ),
  word('out', '밖으로', 2, 'noun',
    ['안으로', '위로', '아래로', '옆으로', '뒤로', '가운데', '사이', '근처', '멀리', '함께'],
    tips({
      etymology: '고대 영어 \'ut\'에서 유래하여 중심부에서 멀어지거나 경계 밖으로 나가는 움직임을 뜻합니다.',
      visual: '방 문을 열고 마당으로 나가는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '야구 경기에서 타자가 아웃되어 경기장 밖으로 나가는 상황을 떠올리면 쉽습니다.',
      context: '주로 장소의 이동뿐만 아니라 비밀이 밖으로 드러나거나 불이 꺼지는 상황에서도 쓰입니다.',
      synonymAntonym: '안쪽을 뜻하는 inside와 반대되는 개념으로, 외부를 향하는 성질을 가집니다.',
    }),
    {
      definition: 'Moving away from a particular place or the inside of something.',
      synonyms: ['outside', 'exterior', 'outdoor'],
      antonyms: ['in', 'inside', 'within'],
      exampleSentences: [
        { en: 'The children ran to play in the garden.', ko: '아이들이 정원에서 놀기 위해 밖으로 달려 나갔다.' },
        { en: 'Please take the trash to the bin.', ko: '쓰레기를 통 밖으로 내다 버려 주세요.' },
      ],
    }
  ),
  word('outcome', '결과', 4, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '조건', '과정'],
    tips({
      etymology: '밖으로(out) 나온(come) 것이라는 뜻에서 어떤 일의 최종적인 결실을 의미합니다.',
      visual: '경기가 끝난 후 전광판에 최종 점수가 딱 나타나는 장면을 상상해 보세요.',
      soundAlike: '아웃(Out) 컴(Come)! 밖으로 튀어나온 결과물이라고 소리 내어 읽어보세요.',
      context: '주로 비즈니스 협상, 실험, 선거 등에서 최종적으로 도출된 결론을 말할 때 쓰입니다.',
      synonymAntonym: 'result와 비슷하지만, 주로 어떤 과정 끝에 나타난 \'성과\'나 \'여파\'의 뉘앙스가 강합니다.',
    }),
    {
      definition: 'The final result or consequence of a particular process, action, or event.',
      synonyms: ['result', 'consequence', 'aftermath'],
      antonyms: ['cause', 'origin', 'source'],
      exampleSentences: [
        { en: 'The final outcome of the election will be announced late tonight.', ko: '선거의 최종 결과는 오늘 밤 늦게 발표될 것입니다.' },
        { en: 'We are still waiting to see the outcome of the medical tests.', ko: '우리는 여전히 정밀 검사 결과가 나오기를 기다리고 있습니다.' },
      ],
    }
  ),
  word('outline', '윤곽', 5, 'noun',
    ['개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화'],
    tips({
      etymology: '바깥(out)을 따라 그은 선(line)이라는 의미에서 사물의 테두리나 전체적인 개요를 뜻하게 되었습니다.',
      visual: '어두운 밤, 가로등 불빛 아래 비치는 사람의 검은 그림자 테두리를 상상해 보세요.',
      soundAlike: '아웃라인: 밖으로(Out) 드러난 선(Line)이라고 소리 내어 읽으며 모양을 떠올려 보세요.',
      context: '미술 시간에는 사물의 형태를 잡을 때, 글을 쓸 때는 전체적인 목차를 잡을 때 주로 사용합니다.',
      synonymAntonym: '전체적인 형태를 뜻하는 contour와 대조되는 중심부나 세부 사항을 뜻하는 core를 함께 기억하세요.',
    }),
    {
      definition: 'The outer edge of a shape or a general description of the main points of a plan.',
      synonyms: ['contour', 'silhouette', 'summary'],
      antonyms: ['detail', 'interior', 'core'],
      exampleSentences: [
        { en: 'The artist drew a faint pencil sketch to mark the shape of the mountain.', ko: '화가는 산의 형태를 표시하기 위해 희미한 연필 윤곽을 그렸습니다.' },
        { en: 'Before writing the long essay, the student prepared a brief list of her main arguments.', ko: '긴 에세이를 쓰기 전에, 그 학생은 자신의 주요 논거들에 대한 짧은 개요를 준비했습니다.' },
      ],
    }
  ),
  word('output', '산출', 6, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '밖으로(out) 놓여진(put) 것이라는 의미에서 생산된 결과물을 뜻합니다.',
      visual: '공장 컨베이어 벨트 끝에서 완성된 제품들이 쏟아져 나오는 장면을 상상해 보세요.',
      soundAlike: '아웃풋! 밖으로 풋(put) 하고 튀어나오는 결과물이라고 소리 내어 읽어보세요.',
      context: '컴퓨터나 공장 시스템에서 처리 과정을 거쳐 나온 최종 데이터를 말할 때 주로 쓰입니다.',
      synonymAntonym: '생산량을 뜻하는 yield와 반대 개념인 투입량 input을 세트로 기억하세요.',
    }),
    {
      definition: 'The amount of something produced by a person, machine, or industry.',
      synonyms: ['production', 'yield', 'result'],
      antonyms: ['input', 'resource', 'consumption'],
      exampleSentences: [
        { en: 'The factory increased its daily production to meet the rising global demand.', ko: '그 공장은 증가하는 세계적 수요를 맞추기 위해 일일 생산량을 늘렸습니다.' },
        { en: 'Agricultural efficiency has improved, leading to a much higher crop yield this year.', ko: '농업 효율성이 향상되어 올해 농작물 산출량이 훨씬 높아졌습니다.' },
      ],
    }
  ),
  word('outrage', '불법', 9, 'noun',
    ['평화', '인내', '만족', '질서', '축복', '합의', '존중', '친절', '침착', '용서'],
    tips({
      etymology: '프랑스어 \'outrer(도를 넘다)\'에서 유래하여, 사회적 도덕이나 법의 한계를 넘어선 격렬한 행위를 뜻합니다.',
      visual: '분노한 군중이 불합리한 법안에 대해 소리를 지르며 항의하는 뉴스 장면을 상상해 보세요.',
      soundAlike: '\'아웃(Out) + 레이지(Rage)\'로 분해하여, 분노(Rage)가 밖으로(Out) 터져 나오는 상황으로 기억하세요.',
      context: '주로 인권 침해나 부패한 정치적 결정처럼 도저히 묵과할 수 없는 비도덕적 사건에 사용됩니다.',
      synonymAntonym: '격분(Fury)과는 비슷하지만, 평온(Calmness)이나 기쁨(Delight)과는 정반대의 감정 상태를 나타냅니다.',
    }),
    {
      definition: 'A strong feeling of shock and anger caused by something extremely cruel, unjust, or wrong.',
      synonyms: ['indignation', 'fury', 'resentment'],
      antonyms: ['complacency', 'delight', 'calmness'],
      exampleSentences: [
        { en: 'The public expressed deep resentment and anger over the unfair court ruling.', ko: '대중들은 불공정한 법원 판결에 대해 깊은 분노와 격분을 표출했습니다.' },
        { en: 'Environmental activists were fueled by a sense of moral shock after the oil spill.', ko: '환경 운동가들은 기름 유출 사고 이후 도덕적 분노에 휩싸였습니다.' },
      ],
    }
  ),
];
