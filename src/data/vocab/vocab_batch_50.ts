import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch50: VocabItem[] = [
  word('pave', '포장하다', 10, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '라틴어 pavire(두드리다)에서 유래하여, 바닥을 단단하게 두드려 평평하게 만드는 과정을 떠올려 보세요.',
      visual: '울퉁불퉁한 흙길 위에 매끄러운 아스팔트나 보도블록이 깔리는 공사 현장을 상상해 보세요.',
      soundAlike: '발음이 \'페이브\'이므로, \'폐부\' 깊숙이 길을 닦아 나가는 느낌으로 기억해 보세요.',
      context: '도로 공사뿐만 아니라 \'pave the way\'처럼 비유적으로 어떤 일의 기반을 닦을 때도 자주 쓰입니다.',
      synonymAntonym: '표면을 덮는 cover와 길을 닦는 surface가 유의어이며, 파헤치는 dig up이 반의어입니다.',
    }),
    {
      definition: 'to cover a piece of ground with a hard surface such as stone, tar, or concrete to make it suitable for traveling',
      synonyms: ['surface', 'cover', 'asphalt'],
      antonyms: ['dig up', 'strip', 'uncover'],
      exampleSentences: [
        { en: 'The workers will finish covering the driveway with smooth stones by tomorrow afternoon.', ko: '인부들은 내일 오후까지 진입로를 매끄러운 돌로 포장하는 작업을 마칠 것입니다.' },
        { en: 'Recent scientific breakthroughs often help create a foundation for future medical discoveries.', ko: '최근의 과학적 돌파구들은 종종 미래의 의학적 발견을 위한 길을 닦는 데 도움이 됩니다.' },
      ],
    }
  ),
  word('pay', '지불하다', 2, 'verb',
    ['요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다'],
    tips({
      etymology: '라틴어 \'pacare(진정시키다)\'에서 유래하여, 빚을 갚아 채권자를 달래는 행위에서 비롯되었습니다.',
      visual: '계산대 앞에서 신용카드를 내밀거나 스마트폰 결제 화면을 터치하는 모습을 상상하세요.',
      soundAlike: '한국어 \'폐\'와 발음이 비슷하죠? 돈을 안 내면 상대방에게 \'폐\'를 끼친다고 생각해보세요.',
      context: '식당, 상점, 온라인 쇼핑몰 등 경제 활동이 일어나는 모든 거래 상황에서 필수적으로 쓰입니다.',
      synonymAntonym: 'settle(결제하다)과 비슷한 의미이며, 반대로 돈을 받는 것은 receive라고 합니다.',
    }),
    {
      definition: 'to give money to someone for goods or services that you have received',
      synonyms: ['settle', 'disburse', 'remit'],
      antonyms: ['owe', 'receive', 'collect'],
      exampleSentences: [
        { en: 'Customers can choose to settle their bills using cash or credit cards.', ko: '고객들은 현금이나 신용카드를 사용하여 요금을 지불할 수 있습니다.' },
        { en: 'The company promised to compensate its employees for the extra hours worked.', ko: '회사는 직원들의 추가 근무 시간에 대해 수당을 지급하기로 약속했습니다.' },
      ],
    }
  ),
  word('peace', '평화', 3, 'noun',
    ['전쟁', '갈등', '소음', '혼란', '폭력', '분노', '공포', '위험', '불안', '투쟁'],
    tips({
      etymology: '라틴어 pax에서 유래하여 협정이나 조약을 통해 전쟁이 없는 상태를 의미하게 되었습니다.',
      visual: '비둘기가 올리브 가지를 물고 푸른 하늘을 날아다니는 고요한 풍경을 상상해 보세요.',
      soundAlike: '피스(peace)와 발음이 같은 조각(piece)을 떠올리며, 마음의 조각들이 잘 맞춰진 평온한 상태로 기억하세요.',
      context: '국가 간의 외교적 합의뿐만 아니라 개인의 내면적인 평온함을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '전쟁(war)이나 소동(turmoil)이 없는 고요함(serenity)의 상태를 떠올리면 쉽습니다.',
    }),
    {
      definition: 'A state of harmony and freedom from war, violence, or disturbing noise and activity.',
      synonyms: ['serenity', 'tranquility', 'harmony'],
      antonyms: ['war', 'conflict', 'turmoil'],
      exampleSentences: [
        { en: 'The two nations finally signed a treaty to restore lasting harmony and order.', ko: '두 국가는 마침내 지속적인 조화와 질서를 회복하기 위한 조약에 서명했습니다.' },
        { en: 'She enjoys the absolute quiet of the forest to find her inner calm.', ko: '그녀는 내면의 평온을 찾기 위해 숲의 절대적인 고요함을 즐깁니다.' },
      ],
    }
  ),
  word('peak', '정점', 4, 'noun',
    ['골짜기', '심해', '바닥', '평지', '기초', '시작', '중간', '내리막', '구덩이', '평원'],
    tips({
      etymology: '뾰족한 끝을 의미하는 고대 영어 \'pīc\'에서 유래하여 산꼭대기나 정점을 뜻하게 되었습니다.',
      visual: '에베레스트 산의 가장 높은 꼭대기에 깃발이 꽂혀 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'피크\'이므로, 휴가철 인파가 가장 몰리는 \'피크 타임\'을 떠올리면 쉽습니다.',
      context: '주로 산의 정상이나 그래프의 가장 높은 지점, 혹은 경력의 전성기를 묘사할 때 사용됩니다.',
      synonymAntonym: '정상을 뜻하는 summit과 반대되는 바닥을 뜻하는 bottom을 함께 기억하세요.',
    }),
    {
      definition: 'The highest point of a mountain or the moment when something is at its greatest level of success.',
      synonyms: ['summit', 'pinnacle', 'apex'],
      antonyms: ['bottom', 'base', 'nadir'],
      exampleSentences: [
        { en: 'The mountain climbers finally reached the snowy summit after three days of trekking.', ko: '등산객들은 3일간의 트레킹 끝에 마침내 눈 덮인 정상에 도달했습니다.' },
        { en: 'Traffic usually reaches its highest volume during the morning rush hour.', ko: '교통량은 보통 아침 출근 시간대에 최고조에 달합니다.' },
      ],
    }
  ),
  word('pear', '서양배', 1, 'noun',
    ['사과', '포도', '복숭아', '딸기', '수박', '참외', '자두', '오렌지', '바나나', '망고'],
    tips({
      etymology: '라틴어 \'pirum\'에서 유래하여 유럽 전역에서 재배되는 과일을 지칭하게 되었습니다.',
      visual: '한국 배와 달리 호리병처럼 위쪽이 좁고 아래쪽이 볼록한 곡선을 상상해 보세요.',
      soundAlike: '발음이 \'pair(한 쌍)\'와 같으므로, 두 개의 과일이 나란히 놓인 모습을 연상하면 쉽습니다.',
      context: '주로 디저트나 샐러드에 쓰이며, 서구권에서는 아삭함보다는 부드러운 식감을 강조합니다.',
      synonymAntonym: '과일의 한 종류이므로 구체적인 반의어는 없으나 채소나 육류와 대비될 수 있습니다.',
    }),
    {
      definition: 'A sweet, yellowish or brownish fruit that is narrow at the top and wider at the bottom.',
      synonyms: ['fruit', 'pome', 'produce'],
      antonyms: ['vegetable', 'meat', 'mineral'],
      exampleSentences: [
        { en: 'She sliced a ripe fruit for the afternoon snack.', ko: '그녀는 오후 간식을 위해 잘 익은 서양배를 썰었습니다.' },
        { en: 'The orchard is filled with trees bearing heavy golden crops.', ko: '과수원은 무거운 황금빛 서양배가 열린 나무들로 가득합니다.' },
      ],
    }
  ),
  word('peasant', '농부', 8, 'noun',
    ['귀족', '상인', '기사', '군주', '성직자', '장인', '노예', '학자', '관리', '영주'],
    tips({
      etymology: '라틴어 \'pagus(시골 지역)\'에서 유래하여 시골에 거주하며 땅을 일구는 사람을 뜻하게 되었습니다.',
      visual: '중세 시대에 거친 삼베옷을 입고 밭에서 괭이질을 하는 소박한 농민의 모습을 상상해 보세요.',
      soundAlike: '\'페전트\' 발음이 \'폐전(폐허가 된 밭)\'과 비슷하므로, 밭에서 일하는 사람으로 연결하면 쉽습니다.',
      context: '역사 소설이나 중세 배경의 영화에서 하층 계급인 농민을 지칭할 때 주로 등장합니다.',
      synonymAntonym: '소작농을 뜻하는 tenant farmer와 유사하며, 지배 계급인 noble과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A member of a low social class who works on the land, especially in historical or poor societies.',
      synonyms: ['farmer', 'rustic', 'agriculturalist'],
      antonyms: ['aristocrat', 'noble', 'landlord'],
      exampleSentences: [
        { en: 'The local ruler collected heavy taxes from every struggling peasant in the village.', ko: '지역 통치자는 마을의 고군분투하는 모든 농민들로부터 무거운 세금을 거두었습니다.' },
        { en: 'Most of the population consisted of poor families living in small wooden huts.', ko: '인구의 대부분은 작은 나무 오두막에 사는 가난한 농민 가족들로 구성되어 있었습니다.' },
      ],
    }
  ),
  word('peel', '껍질', 5, 'noun',
    ['알맹이', '씨앗', '뿌리', '줄기', '나뭇잎', '꽃잎', '열매', '껍데기', '가죽', '조각'],
    tips({
      etymology: '라틴어 \'pilare(털을 뽑다)\'에서 유래하여 표면을 벗겨낸다는 의미로 확장되었습니다.',
      visual: '오렌지나 바나나의 겉껍질이 돌돌 말리며 벗겨져 나가는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'필(feel)\'과 비슷하죠? 껍질을 벗길 때 손끝으로 느껴지는 감각을 떠올려 보세요.',
      context: '주로 과일이나 채소의 겉면을 지칭하며, 요리법이나 식재료 설명에서 자주 등장합니다.',
      synonymAntonym: 'skin과 유사하지만 주로 식물에 쓰이며, 알맹이를 뜻하는 core와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The outer protective layer of a fruit or vegetable that can be removed.',
      synonyms: ['skin', 'rind', 'zest'],
      antonyms: ['core', 'pulp', 'interior'],
      exampleSentences: [
        { en: 'Throw the banana peel into the compost bin after you finish eating.', ko: '바나나를 다 먹은 후에 껍질을 퇴비함에 버리세요.' },
        { en: 'The recipe requires finely grated lemon peel to add a fresh aroma.', ko: '그 레시피는 신선한 향을 더하기 위해 잘게 다진 레몬 껍질을 필요로 합니다.' },
      ],
    }
  ),
  word('peer', '동료', 6, 'noun',
    ['상사', '부하', '적수', '가족', '이웃', '스승', '제자', '낯선사람', '고객', '환자'],
    tips({
      etymology: '라틴어 \'par(동등한)\'에서 유래하여 나이나 지위가 같은 사람을 뜻하게 되었습니다.',
      visual: '교실이나 사무실에서 나와 같은 높이의 책상에 앉아 함께 일하는 사람들을 상상해 보세요.',
      soundAlike: '배를 뜻하는 \'pear\'와 발음이 같지만, 여기서는 함께 배를 타고 가는 동료라고 생각하면 쉽습니다.',
      context: '청소년기에는 부모님의 말씀보다 또래 집단의 의견이 더 큰 영향을 미치기도 합니다.',
      synonymAntonym: '동등한 위치의 \'equal\'과 비슷하지만, 계급이 높은 \'superior\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who is of the same age, status, or ability as another specified person.',
      synonyms: ['contemporary', 'equal', 'associate'],
      antonyms: ['superior', 'inferior', 'subordinate'],
      exampleSentences: [
        { en: 'Children often feel a strong need to be accepted by their group.', ko: '아이들은 종종 또래 집단에게 인정받고 싶어 하는 강한 욕구를 느낀다.' },
        { en: 'The research paper was evaluated by a committee of experts in the same field.', ko: '그 연구 논문은 같은 분야 전문가들로 구성된 위원회에 의해 검토되었다.' },
      ],
    }
  ),
  word('penalty', '벌', 7, 'noun',
    ['보상', '장려금', '혜택', '허가', '면제', '이익', '칭찬', '승인', '자유', '보너스'],
    tips({
      etymology: '라틴어 poena(처벌)에서 유래했으며, 고통을 뜻하는 pain과 어원이 같습니다.',
      visual: '축구 경기에서 반칙을 범해 상대 팀에게 페널티 킥 기회를 주는 심판의 휘슬 소리를 상상하세요.',
      soundAlike: '발음이 \'패널티\'와 비슷하므로, 잘못을 저질러 패널(판) 위에서 벌을 받는 상황을 연상해 보세요.',
      context: '법적 처벌뿐만 아니라 스포츠에서의 벌칙이나 계약 위반 시 지불하는 위약금 등 다양한 상황에서 쓰입니다.',
      synonymAntonym: 'punishment와 유사하지만, penalty는 주로 규칙 위반에 따른 정해진 대가라는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'A punishment imposed for breaking a law, rule, or contract.',
      synonyms: ['punishment', 'fine', 'sanction'],
      antonyms: ['reward', 'prize', 'bonus'],
      exampleSentences: [
        { en: 'The maximum sentence for this crime is a heavy financial fine and a prison term.', ko: '이 범죄에 대한 최대 처벌은 무거운 벌금과 징역형입니다.' },
        { en: 'Players who commit a foul in the area will face a direct free kick as a consequence.', ko: '구역 내에서 반칙을 범하는 선수들은 그 결과로 직접 프리킥의 벌칙을 받게 됩니다.' },
      ],
    }
  ),
  word('pencil', '연필', 2, 'noun',
    ['지우개', '공책', '볼펜', '필통', '자', '가위', '풀', '색연필', '샤프', '분필'],
    tips({
      etymology: '라틴어 \'penicillus\'에서 유래했으며, 원래는 \'작은 꼬리\'라는 뜻으로 붓을 의미했습니다.',
      visual: '나무 막대기 안에 검은 심이 박혀 있고, 끝에는 분홍색 지우개가 달린 모습을 상상하세요.',
      soundAlike: '발음이 \'펜\'으로 시작하므로, 펜과 비슷하지만 깎아서 쓰는 도구라고 기억하면 쉽습니다.',
      context: '학교 수업 시간이나 그림을 그릴 때 가장 먼저 손에 쥐게 되는 필기구입니다.',
      synonymAntonym: 'graphite나 lead holder와 비슷하지만, 잉크를 사용하는 pen과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An instrument used for writing or drawing, consisting of a thin stick of graphite or a similar substance enclosed in a long wooden case.',
      synonyms: ['graphite', 'writing utensil', 'lead holder'],
      antonyms: ['eraser', 'ink pen', 'marker'],
      exampleSentences: [
        { en: 'She used a sharp graphite tool to sketch the portrait on her sketchbook.', ko: '그녀는 스케치북에 초상화를 그리기 위해 날카로운 연필을 사용했습니다.' },
        { en: 'Please write your answers with a wooden writing stick so you can correct mistakes later.', ko: '나중에 실수를 수정할 수 있도록 답안을 연필로 작성해 주세요.' },
      ],
    }
  ),
  word('people', '사람들', 3, 'noun',
    ['조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준'],
    tips({
      etymology: '라틴어 \'populus\'에서 유래했으며, 이는 공동체를 구성하는 시민 전체를 의미합니다.',
      visual: '광장에 수많은 남녀노소가 모여 북적거리는 활기찬 장면을 상상해 보세요.',
      soundAlike: '발음이 \'피플\'이므로, 피리 부는 사람을 따라가는 수많은 \'사람들\'을 연상해 보세요.',
      context: '단수형인 person의 복수형으로 가장 널리 쓰이며, 특정 국가의 민족을 지칭할 때도 사용됩니다.',
      synonymAntonym: '인간을 뜻하는 humans와 유사하며, 개별 물체를 뜻하는 objects와는 대조적입니다.',
    }),
    {
      definition: 'human beings in general or considered as a collective group inhabiting a particular area.',
      synonyms: ['humans', 'individuals', 'mankind'],
      antonyms: ['animals', 'objects', 'entities'],
      exampleSentences: [
        { en: 'Many individuals gathered in the square to celebrate the national holiday.', ko: '많은 이들이 국경일을 축하하기 위해 광장에 모였습니다.' },
        { en: 'The local inhabitants are known for their warm hospitality toward travelers.', ko: '현지 주민들은 여행객들에 대한 따뜻한 환대로 유명합니다.' },
      ],
    }
  ),
  word('pepper', '고추', 4, 'noun',
    ['소금', '설탕', '식초', '간장', '마늘', '양파', '생강', '오이', '당근', '배추'],
    tips({
      etymology: '라틴어 piper에서 유래했으며, 원래는 후추를 뜻했으나 나중에 고추류를 포함하게 되었습니다.',
      visual: '빨갛게 익은 매운 고추가 밭에 매달려 있는 강렬한 색감을 떠올려 보세요.',
      soundAlike: '페퍼(pepper)라고 발음할 때 입술이 터지는 소리가 매운 맛의 자극과 비슷합니다.',
      context: '요리법에서 매운맛을 더하거나 색감을 낼 때 식재료로 자주 언급됩니다.',
      synonymAntonym: '칠리(chili)와 비슷하지만, 단맛이 나는 파프리카(bell pepper)와는 대조적일 수 있습니다.',
    }),
    {
      definition: 'A pungent vegetable that can be red, green, or yellow, often used to add spice or flavor to food.',
      synonyms: ['chili', 'capsicum', 'pimento'],
      antonyms: ['sugar', 'honey', 'sweetener'],
      exampleSentences: [
        { en: 'She chopped a red chili to add some heat to the spicy stew.', ko: '그녀는 매운 찌개에 열기를 더하기 위해 붉은 고추를 다졌다.' },
        { en: 'Farmers harvest these hot vegetables when they turn bright red in late summer.', ko: '농부들은 늦여름에 이 매운 채소들이 밝은 빨간색으로 변할 때 수확한다.' },
      ],
    }
  ),
  word('per', '~당', 5, 'preposition',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '라틴어에서 유래하여 \'통과하여\' 혹은 \'수단에 의하여\'라는 의미를 담고 있습니다.',
      visual: '시속 100km(100km/h) 표지판에서 슬래시(/) 기호가 바로 이 단어의 역할을 한다고 상상해 보세요.',
      soundAlike: '커피를 내리는 \'퍼콜레이터(percolator)\'가 물을 통과시켜 커피를 추출하는 장면을 떠올려 보세요.',
      context: '급여를 계산하거나 속도를 측정할 때 단위 앞에 붙어 기준을 정해줍니다.',
      synonymAntonym: '각각을 의미하는 each와 유사하며, 전체를 뭉뚱그리는 total과는 반대되는 개념입니다.',
    }),
    {
      definition: 'For each one of a group; used to express the rate or amount of something in relation to a unit.',
      synonyms: ['each', 'every', 'for every'],
      antonyms: ['total', 'aggregate', 'sum'],
      exampleSentences: [
        { en: 'The speed limit on this highway is sixty-five miles per hour.', ko: '이 고속도로의 제한 속도는 시간당 65마일입니다.' },
        { en: 'The gym membership costs fifty dollars per month.', ko: '체육관 회원권 비용은 한 달에 50달러입니다.' },
      ],
    }
  ),
  word('perceive', '지각하다', 6, 'verb',
    ['변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 per(완전히)와 capere(잡다)가 합쳐져 마음속으로 완전히 붙잡아 이해한다는 뜻에서 유래했습니다.',
      visual: '안개가 자욱한 길에서 멀리 보이는 희미한 불빛을 눈으로 알아차리는 모습을 상상해 보세요.',
      soundAlike: '퍼시브(perceive)는 \'펴 시야를\'과 발음이 비슷합니다. 시야를 넓게 펴서 사물을 알아차린다고 생각하세요.',
      context: '단순히 보는 것뿐만 아니라 오감을 통해 상황이나 분위기를 파악할 때 주로 사용됩니다.',
      synonymAntonym: '눈치채는 것은 notice, 무시하고 지나치는 것은 overlook입니다.',
    }),
    {
      definition: 'to become aware of something through the senses, especially sight, or to understand a situation in a particular way',
      synonyms: ['discern', 'recognize', 'distinguish'],
      antonyms: ['ignore', 'misunderstand', 'overlook'],
      exampleSentences: [
        { en: 'Cats can easily detect movements that humans are unable to notice in the dark.', ko: '고양이는 인간이 어둠 속에서 알아차리지 못하는 움직임을 쉽게 감지할 수 있습니다.' },
        { en: 'Many people view the new policy as a significant threat to their personal privacy.', ko: '많은 사람들이 새로운 정책을 개인 사생활에 대한 중대한 위협으로 인식합니다.' },
      ],
    }
  ),
  word('perfect', '완전한', 7, 'adjective',
    ['불완전한', '결함이있는', '부족한', '평범한', '손상된', '미완성의', '서투른', '잘못된', '일시적인', '불충분한'],
    tips({
      etymology: '라틴어 \'per(완전히)\'와 \'facere(만들다)\'가 합쳐져 \'끝까지 다 만들어진\' 상태를 뜻합니다.',
      visual: '흠집 하나 없는 매끄러운 다이아몬드나 100점 만점을 받은 시험지를 상상해 보세요.',
      soundAlike: '발음이 \'퍼펙트\'인데, 퍼즐의 모든 조각이 \'팩트\' 있게 딱 들어맞는 느낌으로 기억하세요.',
      context: '날씨, 타이밍, 점수 등 더 이상 바랄 것이 없는 최상의 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'flawless와는 흠이 없다는 점에서 비슷하고, imperfect와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having all the required or desirable elements, qualities, or characteristics without any flaws.',
      synonyms: ['flawless', 'faultless', 'impeccable'],
      antonyms: ['imperfect', 'flawed', 'defective'],
      exampleSentences: [
        { en: 'The sunny weather provided a flawless backdrop for our outdoor wedding ceremony.', ko: '화창한 날씨는 우리의 야외 결혼식을 위한 완벽한 배경이 되어 주었습니다.' },
        { en: 'She practiced the piano piece for months until every single note was absolutely flawless.', ko: '그녀는 모든 음 하나하나가 완전히 완벽해질 때까지 수개월 동안 피아노 곡을 연습했습니다.' },
      ],
    }
  ),
  word('perform', '수행하다', 4, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '라틴어 \'per\'(완전히)와 \'form\'(형성하다)이 합쳐져 어떤 일을 끝까지 완수한다는 의미를 담고 있습니다.',
      visual: '무대 위에서 배우가 자신의 역할을 끝까지 완벽하게 소화해내는 장면을 상상해 보세요.',
      soundAlike: '\'퍼폼\'은 \'퍼(per)펙트하게 폼(form)나게\' 일을 해내는 소리와 비슷합니다.',
      context: '단순히 노는 것이 아니라 책임감을 가지고 임무나 의무를 실행할 때 주로 쓰입니다.',
      synonymAntonym: '유의어 execute는 실행에 초점을, 반의어 fail은 완수하지 못함에 초점을 둡니다.',
    }),
    {
      definition: 'to carry out, accomplish, or complete a task or duty as required',
      synonyms: ['execute', 'fulfill', 'achieve'],
      antonyms: ['fail', 'neglect', 'abandon'],
      exampleSentences: [
        { en: 'The surgeon will carry out the operation with great precision this afternoon.', ko: '외과 의사는 오늘 오후에 아주 정밀하게 수술을 집도할 것입니다.' },
        { en: 'Every employee must fulfill their assigned duties to ensure the project succeeds.', ko: '프로젝트의 성공을 보장하기 위해 모든 직원은 할당된 임무를 다해야 합니다.' },
      ],
    }
  ),
  word('perhaps', '아마', 5, 'adverb',
    ['확실히', '절대로', '분명히', '결코', '당연히', '반드시', '이미', '항상', '전혀', '오직'],
    tips({
      etymology: '라틴어 \'per\'(~을 통하여)와 \'hap\'(운, 우연)이 결합되어 \'우연히 일어날 수도 있는\'이라는 의미에서 유래했습니다.',
      visual: '안개가 자욱한 길에서 갈림길을 마주하고 어디로 갈지 고민하며 고개를 갸우뚱하는 모습을 상상하세요.',
      soundAlike: '발음이 \'퍼햅스\'와 비슷한데, \'퍼(퍽) 해(해) 보지 뭐\'라고 가볍게 추측하는 느낌으로 기억하세요.',
      context: '확신이 없을 때나 상대방에게 조심스럽게 제안을 할 때 문장 맨 앞이나 중간에 자주 쓰입니다.',
      synonymAntonym: 'maybe와 비슷하지만 조금 더 격식 있는 표현이며, 반대말인 definitely와 대조하여 익히면 좋습니다.',
    }),
    {
      definition: 'used to express uncertainty or a possibility that something might be true or happen',
      synonyms: ['maybe', 'possibly', 'conceivably'],
      antonyms: ['certainly', 'definitely', 'surely'],
      exampleSentences: [
        { en: 'The weather forecast says it will rain, so we should take an umbrella.', ko: '일기 예보에서 비가 올 것이라고 하니, 아마 우산을 챙겨야 할 것 같습니다.' },
        { en: 'A shorter route exists through the woods, but it might be too muddy to walk.', ko: '숲을 가로지르는 더 짧은 경로가 아마 있겠지만, 걷기에는 너무 진흙탕일 수도 있습니다.' },
      ],
    }
  ),
  word('period', '시간', 6, 'noun',
    ['기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과'],
    tips({
      etymology: '그리스어 \'periodos\'에서 유래했으며, \'주변을 도는 길\' 즉 한 바퀴를 돌아 다시 제자리로 오는 일정한 순환 주기를 의미합니다.',
      visual: '달력의 한 달 분량에 빨간색 동그라미가 쳐져 있는 모습을 상상하며 특정 구간의 흐름을 떠올려 보세요.',
      soundAlike: '문장 끝에 찍는 마침표(period)를 생각하세요. 마침표는 한 문장의 흐름이 끝나는 \'지점\'이자 \'구간\'의 마무리를 뜻합니다.',
      context: '역사 공부를 할 때 \'조선 시대\'나 \'석기 시대\'처럼 특정한 연대나 단계를 구분할 때 자주 쓰입니다.',
      synonymAntonym: '유사한 의미인 era, term과 함께 외우고, 끝이 없는 영원함을 뜻하는 eternity와 대조해 보세요.',
    }),
    {
      definition: 'A particular length of time or a specific stage in history or a person\'s life.',
      synonyms: ['era', 'term', 'interval'],
      antonyms: ['eternity', 'instant', 'perpetuity'],
      exampleSentences: [
        { en: 'The Victorian era was a significant historical span characterized by rapid industrial growth.', ko: '빅토리아 시대는 급격한 산업 성장이 특징인 중요한 역사적 시기였습니다.' },
        { en: 'Students are required to stay in the library for a fixed duration of two hours every afternoon.', ko: '학생들은 매일 오후 2시간의 정해진 시간 동안 도서관에 머물러야 합니다.' },
      ],
    }
  ),
  word('permanent', '영구의', 7, 'adjective',
    ['일시적인', '가변적인', '순간적인', '찰나의', '불안정한', '유동적인', '단기적인', '임시의', '변덕스러운', '우발적인'],
    tips({
      etymology: '라틴어 per(통과하여)와 manere(머물다)가 합쳐져 \'끝까지 머물러 있는\' 상태를 뜻합니다.',
      visual: '지워지지 않는 네임펜(Permanent Marker)으로 쓴 글씨가 물에 닿아도 그대로인 모습을 상상하세요.',
      soundAlike: '머리에 하는 \'파마(Perm)\'를 떠올리세요. 머리 모양을 오랫동안 유지하려고 하는 시술입니다.',
      context: '주소지, 직장, 흉터 등 시간이 지나도 바뀌지 않거나 사라지지 않는 대상에 주로 쓰입니다.',
      synonymAntonym: '영원한(Everlasting) 것과 잠깐뿐인(Temporary) 것을 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'lasting or intended to last or remain unchanged indefinitely',
      synonyms: ['enduring', 'everlasting', 'perpetual'],
      antonyms: ['temporary', 'transient', 'fleeting'],
      exampleSentences: [
        { en: 'Exposure to loud noise can cause lasting and irreversible damage to your hearing.', ko: '큰 소음에 노출되는 것은 청력에 지속적이고 되돌릴 수 없는 손상을 줄 수 있습니다.' },
        { en: 'The museum\'s collection includes a fixed display of ancient artifacts from Egypt.', ko: '그 박물관의 소장품에는 이집트 고대 유물들의 상설 전시가 포함되어 있습니다.' },
      ],
    }
  ),
  word('permit', '허가하다', 4, 'verb',
    ['금지하다', '거절하다', '방해하다', '취소하다', '연기하다', '조사하다', '무시하다', '제한하다', '예약하다', '보호하다'],
    tips({
      etymology: '라틴어 per(통과하여)와 mittere(보내다)가 합쳐져 \'통과시켜 보내주다\'라는 의미에서 유래했습니다.',
      visual: '출입문 앞에서 보안 요원이 고개를 끄덕이며 통과시켜 주는 장면을 상상해 보세요.',
      soundAlike: '\'퍼밋\' 발음이 \'펴 밑\'과 비슷하니, 서류를 \'펴서 밑\'에 도장을 찍어 허가해준다고 기억하세요.',
      context: '공공장소에서의 흡연이나 특정 구역 출입 가능 여부를 논할 때 자주 쓰이는 단어입니다.',
      synonymAntonym: 'allow와 뜻이 같지만, permit은 공식적인 문서나 법적 허가에 더 자주 쓰입니다.',
    }),
    {
      definition: 'to officially allow someone to do something or to let something happen',
      synonyms: ['allow', 'authorize', 'approve'],
      antonyms: ['forbid', 'prohibit', 'ban'],
      exampleSentences: [
        { en: 'The city council decided to grant a special license to the organizers for the festival.', ko: '시의회는 축제 주최측에 특별 면허를 허가하기로 결정했습니다.' },
        { en: 'Visitors are not allowed to take photographs inside the museum without a written document.', ko: '방문객들은 서면 문서 없이는 박물관 내부에서 사진 촬영을 허가받지 못합니다.' },
      ],
    }
  ),
  word('persist', '고집하다', 9, 'verb',
    ['포기하다', '중단하다', '망설이다', '거절하다', '굴복하다', '변경하다', '무시하다', '지연하다', '방해하다', '생략하다'],
    tips({
      etymology: '라틴어 \'per(계속해서)\'와 \'sistere(서 있다)\'가 합쳐져 어떤 상황에서도 꿋꿋이 서 있는 모습을 나타냅니다.',
      visual: '거센 비바람 속에서도 꺾이지 않고 계속해서 길을 걸어가는 등산객의 모습을 상상해 보세요.',
      soundAlike: '\'퍼시스트\'는 \'퍼지(spread)지 않고 스트(straight)레이트로 계속 간다\'고 연상하면 쉽습니다.',
      context: '어려운 상황이나 반대에도 불구하고 자신의 의견이나 행동을 굽히지 않을 때 주로 사용합니다.',
      synonymAntonym: '계속한다는 의미의 continue와 비슷하지만, 포기하지 않는 끈기가 강조된 단어입니다.',
    }),
    {
      definition: 'to continue firmly in an opinion or a course of action in spite of difficulty, opposition, or failure',
      synonyms: ['persevere', 'endure', 'continue'],
      antonyms: ['cease', 'quit', 'surrender'],
      exampleSentences: [
        { en: 'If the symptoms of the cold continue to remain for more than a week, you should see a doctor.', ko: '감기 증상이 일주일 넘게 지속된다면 의사의 진찰을 받아야 합니다.' },
        { en: 'She decided to carry on with her research despite the lack of funding from the university.', ko: '그녀는 대학의 자금 지원 부족에도 불구하고 연구를 고집스럽게 계속하기로 결정했습니다.' },
      ],
    }
  ),
  word('person', '사람', 5, 'noun',
    ['조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준'],
    tips({
      etymology: '라틴어 \'persona\'에서 유래했으며, 원래는 연극 배우가 쓰던 \'가면\'을 뜻했습니다. 가면 뒤의 실체인 인간을 의미하게 되었습니다.',
      visual: '군중 속에서 유독 눈에 띄는 한 명의 개별적인 인간의 실루엣을 상상해 보세요.',
      soundAlike: '\'퍼슨\' 발음이 \'펴서\'와 비슷하니, 손가락을 하나 \'펴서\' 한 명의 인간을 가리킨다고 생각하면 쉽습니다.',
      context: '단순히 생물학적 인간뿐만 아니라, 법적 권리를 가진 주체나 독특한 성격을 지닌 개별 자아를 지칭할 때 쓰입니다.',
      synonymAntonym: '개인을 뜻하는 individual과 유의어이며, 집단을 뜻하는 group과는 반대되는 개념으로 기억하세요.',
    }),
    {
      definition: 'A human being regarded as an individual.',
      synonyms: ['individual', 'human', 'soul'],
      antonyms: ['group', 'crowd', 'animal'],
      exampleSentences: [
        { en: 'Every single human being has the right to be treated with dignity.', ko: '모든 개별적인 사람은 존엄하게 대우받을 권리가 있습니다.' },
        { en: 'She is the only one in the office who knows how to fix the printer.', ko: '그녀는 사무실에서 프린터를 고칠 줄 아는 유일한 사람입니다.' },
      ],
    }
  ),
  word('personality', '개성', 6, 'noun',
    ['개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화'],
    tips({
      etymology: '라틴어 \'persona(가면)\'에서 유래하여, 겉으로 드러나는 개인의 고유한 특성을 뜻하게 되었습니다.',
      visual: '사람마다 각기 다른 색깔의 오오라를 뿜어내며 자신만의 독특한 매력을 발산하는 모습을 상상해 보세요.',
      soundAlike: '\'퍼스널리티\'에서 \'퍼스널(Personal)\'을 떠올리면 개인의 고유한 성질이라는 의미를 쉽게 연결할 수 있습니다.',
      context: '사람의 성격뿐만 아니라 사물이나 장소가 가진 독특한 분위기나 개성을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'Character와 유사하지만, 성격의 도덕적 측면보다는 개별적인 특징과 매력에 더 초점이 맞춰진 단어입니다.',
    }),
    {
      definition: 'The combination of characteristics or qualities that form an individual\'s distinctive character.',
      synonyms: ['character', 'nature', 'disposition'],
      antonyms: ['uniformity', 'anonymity', 'sameness'],
      exampleSentences: [
        { en: 'Her outgoing and friendly nature makes her a very popular student at school.', ko: '그녀의 외향적이고 친근한 성격은 그녀를 학교에서 매우 인기 있는 학생으로 만듭니다.' },
        { en: 'The designer added unique furniture to give the small apartment more individual charm.', ko: '디자이너는 작은 아파트에 더 많은 개성을 부여하기 위해 독특한 가구들을 추가했습니다.' },
      ],
    }
  ),
  word('perspective', '관점, 시각', 10, 'noun',
    ['평면적인', '추상적인', '입체적인', '일시적인', '장식적인', '고전적인', '현대적인', '사실적인', '왜곡된', '단편적인'],
    tips({
      etymology: '라틴어 \'perspicere(꿰뚫어 보다)\'에서 유래하여, 사물이나 상황을 바라보는 시각이나 관점을 뜻합니다.',
      visual: '산꼭대기에서 내려다보는 풍경과 계곡에서 올려다보는 풍경이 완전히 다른 것처럼, 같은 것도 보는 위치에 따라 달라지는 모습을 상상해 보세요.',
      soundAlike: '\'퍼스펙티브\'의 \'퍼(per)\'를 \'꿰뚫어\'로 생각하고, 사물을 꿰뚫어 보는 시각으로 기억하세요.',
      context: '토론이나 논쟁에서 각자의 입장이나 시각을 설명할 때 자주 사용되는 단어입니다.',
      synonymAntonym: '비슷한 뜻의 viewpoint, standpoint와 유사하며, 편견을 뜻하는 bias와는 대조됩니다.',
    }),
    {
      definition: 'A particular attitude toward or way of regarding something; a point of view.',
      synonyms: ['viewpoint', 'standpoint', 'outlook'],
      antonyms: ['bias', 'narrow-mindedness', 'shortsightedness'],
      exampleSentences: [
        { en: 'From a historical perspective, this event was a turning point for the entire nation.', ko: '역사적 관점에서, 이 사건은 국가 전체의 전환점이었습니다.' },
        { en: 'Traveling abroad gives you a new perspective on your own culture.', ko: '해외 여행은 자신의 문화에 대한 새로운 시각을 갖게 해 줍니다.' },
      ],
    }
  ),
  word('persuade', '설득하다', 7, 'verb',
    ['변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 \'per(완전히)\'와 \'suadere(권고하다)\'가 합쳐져 상대방의 마음을 완전히 돌려놓는다는 의미가 되었습니다.',
      visual: '홈쇼핑 쇼호스트가 열정적으로 제품의 장점을 나열하며 시청자의 마음을 움직이는 모습을 상상해 보세요.',
      soundAlike: '\'퍼스웨이드\' 발음이 \'펴서 웨이드(wait)\'처럼 들린다고 생각하며, 굳게 닫힌 상대의 마음을 펴서 기다리게 만든다고 연상하세요.',
      context: '비즈니스 협상이나 친구를 여행에 동참시키려 할 때 논리적으로 설득하는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'convince와 비슷하지만 persuade는 행동을 유도하는 뉘앙스가 강하며, dissuade는 반대로 하지 못하게 말리는 뜻입니다.',
    }),
    {
      definition: 'to convince someone to do or believe something through reasoning or argument',
      synonyms: ['convince', 'induce', 'influence'],
      antonyms: ['dissuade', 'discourage', 'deter'],
      exampleSentences: [
        { en: 'The salesman managed to convince the customer to buy the most expensive model.', ko: '판매원은 고객이 가장 비싼 모델을 사도록 설득하는 데 성공했습니다.' },
        { en: 'She tried to get her parents to let her travel alone during the summer break.', ko: '그녀는 부모님이 여름 방학 동안 혼자 여행하는 것을 허락하도록 설득하려 노력했습니다.' },
      ],
    }
  ),
  word('pet', '애완동물', 4, 'noun',
    ['식물', '야생동물', '가축', '장난감', '먹이', '둥지', '사육사', '수의사', '울타리', '곤충'],
    tips({
      etymology: '16세기 스코틀랜드어에서 유래하여 길들여진 동물을 가리키는 말로 정착되었습니다.',
      visual: '강아지나 고양이가 거실 소파 위에서 평화롭게 잠을 자고 있는 모습을 상상해 보세요.',
      soundAlike: '머리를 \'쓰다듬다\'라는 뜻의 동사로도 쓰이는데, 부드럽게 \'펫펫\' 쓰다듬는 소리를 연상하세요.',
      context: '단순히 기르는 동물을 넘어 가족의 일원으로 대우받는 존재를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'companion animal과 유사하며, 야생에서 스스로 살아가는 wild animal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An animal that is kept in the home as a companion and treated with affection.',
      synonyms: ['companion animal', 'domestic animal', 'tame animal'],
      antonyms: ['wild animal', 'beast', 'stray'],
      exampleSentences: [
        { en: 'Many families find that keeping a small hamster is a great first experience for children.', ko: '많은 가족들은 작은 햄스터를 기르는 것이 아이들에게 훌륭한 첫 경험이 된다는 것을 알고 있습니다.' },
        { en: 'The elderly woman lives with a loyal golden retriever who keeps her company every day.', ko: '그 할머니는 매일 곁을 지켜주는 충직한 골든 리트리버와 함께 살고 있습니다.' },
      ],
    }
  ),
  word('phase', '국면', 8, 'noun',
    ['목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계'],
    tips({
      etymology: '그리스어 phasis에서 유래하여 \'나타남\'이나 \'모습\'을 뜻하며, 달의 변화하는 모습에서 단계라는 의미가 생겼습니다.',
      visual: '달이 초승달에서 보름달로 변해가는 여러 가지 모양의 단계들을 상상해 보세요.',
      soundAlike: '발음이 \'페이스(face)\'와 비슷하죠? 상황의 겉모습이나 얼굴이 바뀌는 단계라고 생각하면 쉽습니다.',
      context: '프로젝트의 초기 단계나 달의 변화 주기, 혹은 인생의 과도기를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'stage와 유사하지만, phase는 변화하는 과정 중의 한 시점을 더 강조하며 전체적인 흐름을 나타냅니다.',
    }),
    {
      definition: 'A distinct period or stage in a process of change or development.',
      synonyms: ['stage', 'period', 'step'],
      antonyms: ['whole', 'entirety', 'total'],
      exampleSentences: [
        { en: 'The first part of the construction project is scheduled to finish by next month.', ko: '건설 프로젝트의 첫 번째 단계는 다음 달까지 완료될 예정입니다.' },
        { en: 'Most teenagers go through a rebellious period before reaching adulthood.', ko: '대부분의 십 대들은 성인이 되기 전에 반항적인 시기를 거칩니다.' },
      ],
    }
  ),
  word('phenomenon', '현상', 5, 'noun',
    ['기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과'],
    tips({
      etymology: '그리스어 \'phainein(보이다)\'에서 유래하여 눈앞에 나타나 보이는 것을 뜻합니다.',
      visual: '오로라나 개기일식처럼 하늘에서 벌어지는 신비로운 광경을 상상해 보세요.',
      soundAlike: '\'페노메논\' 발음이 \'펴나면(꽃이 피어나면)\'과 비슷해 자연의 신비로운 현상을 연상시킵니다.',
      context: '과학적 발견이나 사회적 유행처럼 관찰 가능한 모든 일에 두루 쓰입니다.',
      synonymAntonym: 'occurrence와 유사하며, 실체가 없는 추상적인 개념과는 반대되는 성격이 있습니다.',
    }),
    {
      definition: 'A remarkable fact or event that can be observed and studied, especially one whose cause is in question.',
      synonyms: ['occurrence', 'event', 'marvel'],
      antonyms: ['normality', 'regularity', 'standard'],
      exampleSentences: [
        { en: 'The northern lights are a natural phenomenon that attracts many tourists every year.', ko: '오로라는 매년 많은 관광객을 끌어모으는 자연 현상입니다.' },
        { en: 'Social media has created a global phenomenon where trends spread in a matter of seconds.', ko: '소셜 미디어는 트렌드가 몇 초 만에 확산되는 전 세계적인 현상을 만들어냈습니다.' },
      ],
    }
  ),
  word('philosophy', '철학', 6, 'noun',
    ['심리학', '사회학', '인류학', '신학', '윤리학', '논리학', '경제학', '정치학', '역사학', '문학'],
    tips({
      etymology: '그리스어 \'philo(사랑)\'와 \'sophia(지혜)\'가 결합되어 지혜를 사랑한다는 의미에서 유래했습니다.',
      visual: '깊은 생각에 잠긴 고대 그리스 조각상인 \'생각하는 사람\'의 이미지를 떠올려 보세요.',
      soundAlike: '발음이 \'필로소피\'이므로 \'필(feel)이 오는 소중한 피(blood)와 같은 지식\'으로 연상해 보세요.',
      context: '단순한 학문을 넘어 기업의 경영 방침이나 개인의 삶의 태도를 설명할 때도 자주 쓰입니다.',
      synonymAntonym: '지혜를 탐구하는 \'ideology\'와 유사하며, 구체적인 실체인 \'materialism\'과는 대조적입니다.',
    }),
    {
      definition: 'the study of the fundamental nature of knowledge, reality, and existence, especially when considered as an academic discipline.',
      synonyms: ['ideology', 'worldview', 'doctrine'],
      antonyms: ['materialism', 'ignorance', 'thoughtlessness'],
      exampleSentences: [
        { en: 'Her personal approach to life is based on a simple belief in kindness and honesty.', ko: '그녀의 개인적인 삶의 철학은 친절과 정직에 대한 단순한 믿음에 기초합니다.' },
        { en: 'Ancient scholars spent their entire lives debating the nature of human existence and morality.', ko: '고대 학자들은 인간의 존재와 도덕의 본질에 대해 토론하며 평생을 보냈습니다.' },
      ],
    }
  ),
  word('photograph', '촬영하다', 7, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '빛을 뜻하는 \'photo\'와 기록을 뜻하는 \'graph\'가 합쳐져 빛으로 기록을 남기는 행위를 뜻합니다.',
      visual: '카메라 셔터를 누를 때 터지는 눈부신 플래시와 렌즈 속에 담기는 피사체를 상상해 보세요.',
      soundAlike: '포토그래프의 \'포토\'는 포도와 발음이 비슷하니, 포도 밭에서 사진을 찍는 모습을 떠올려 보세요.',
      context: '주로 인물, 풍경, 사건 등을 카메라 렌즈를 통해 이미지로 기록할 때 사용되는 표현입니다.',
      synonymAntonym: 'shoot이나 capture와 비슷하게 쓰이며, 이미지를 지우거나 무시하는 것과는 반대됩니다.',
    }),
    {
      definition: 'to take a picture of someone or something using a camera',
      synonyms: ['shoot', 'capture', 'film'],
      antonyms: ['erase', 'ignore', 'disregard'],
      exampleSentences: [
        { en: 'The journalist traveled to the remote village to document and record the local festivals.', ko: '그 기자는 현지 축제를 기록하고 촬영하기 위해 외딴 마을로 여행을 떠났습니다.' },
        { en: 'Professional artists often prefer to capture landscapes during the golden hour for better lighting.', ko: '전문 작가들은 더 나은 조명을 위해 골든 아워에 풍경을 촬영하는 것을 선호합니다.' },
      ],
    }
  ),
  word('phrase', '구', 4, 'noun',
    ['문장', '단락', '철자', '어휘', '문법', '발음', '강세', '음절', '문맥', '수식'],
    tips({
      etymology: '그리스어 \'phrasis\'에서 유래하여 \'말하는 방식\'이나 \'표현\'이라는 의미를 담고 있습니다.',
      visual: '긴 문장 속에서 의미 단위로 묶인 두세 단어의 덩어리에 형광펜으로 동그라미를 치는 모습을 상상하세요.',
      soundAlike: '프레이즈(phrase)는 \'풀어내다\'와 발음이 비슷하므로, 생각을 짧게 풀어낸 말마디라고 기억하세요.',
      context: '음악에서도 한 호흡에 연주하는 짧은 단위를 프레이즈라고 부르며, 언어에서도 비슷한 호흡의 단위를 뜻합니다.',
      synonymAntonym: 'expression과 유사하며, 완전한 문장 형태인 sentence와는 구분하여 외우는 것이 좋습니다.',
    }),
    {
      definition: 'A small group of words standing together as a conceptual unit, typically forming a component of a clause.',
      synonyms: ['expression', 'idiom', 'locution'],
      antonyms: ['sentence', 'paragraph', 'chapter'],
      exampleSentences: [
        { en: 'The speaker used a common idiomatic expression to make his point clearer.', ko: '연설가는 자신의 주장을 더 명확하게 하기 위해 흔한 관용구를 사용했습니다.' },
        { en: 'She struggled to translate the poetic sequence into her native language.', ko: '그녀는 그 시적인 구절을 모국어로 번역하는 데 애를 먹었습니다.' },
      ],
    }
  ),
  word('physical', '물질의', 5, 'adjective',
    ['정신적인', '추상적인', '가상의', '이론적인', '영적인', '관념적인', '심리적인', '허구의', '상상상의', '무형의'],
    tips({
      etymology: '그리스어 \'physis(자연, 본성)\'에서 유래하여 눈에 보이는 자연적 실체나 몸을 뜻하게 되었습니다.',
      visual: '헬스장에서 무거운 덤벨을 들어 올리며 근육의 감각과 무게감을 느끼는 장면을 상상해 보세요.',
      soundAlike: '\'피지컬\'이라는 말은 운동선수의 체격이나 몸싸움 능력을 말할 때 한국어에서도 자주 쓰입니다.',
      context: '정신 건강만큼이나 몸의 건강인 신체적 건강을 챙기는 것이 현대인에게 매우 중요합니다.',
      synonymAntonym: '실체가 있는 \'tangible\'과 유의어이며, 보이지 않는 정신적인 \'mental\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to things perceived through the senses as opposed to the mind or spirit',
      synonyms: ['tangible', 'material', 'bodily'],
      antonyms: ['mental', 'spiritual', 'abstract'],
      exampleSentences: [
        { en: 'The doctor performed a thorough examination to check the patient\'s health status.', ko: '의사는 환자의 신체적 건강 상태를 확인하기 위해 철저한 검사를 실시했습니다.' },
        { en: 'Scientists study the properties of matter to understand the universe better.', ko: '과학자들은 우주를 더 잘 이해하기 위해 물질의 물리적 특성을 연구합니다.' },
      ],
    }
  ),
  word('physics', '물리학', 6, 'noun',
    ['생물학', '화학', '지구과학', '천문학', '수학', '공학', '철학', '심리학', '경제학', '사회학'],
    tips({
      etymology: '그리스어 \'physika\'에서 유래되었으며, 이는 \'자연적인 것들\'을 의미하여 자연의 법칙을 다루는 학문임을 보여줍니다.',
      visual: '칠판 가득 적힌 복잡한 수식과 아인슈타인의 상대성 이론 공식을 떠올려 보세요.',
      soundAlike: '\'피직스\'라고 발음하며, 피자(Pizza) 조각이 중력 때문에 아래로 떨어지는 물리 현상을 연상해 보세요.',
      context: '에너지, 질량, 힘, 운동과 같은 우주의 기본 원리를 설명할 때 주로 사용됩니다.',
      synonymAntonym: '자연 과학의 기초가 되는 학문이며, 추상적인 형이상학과는 대조적인 성격을 띱니다.',
    }),
    {
      definition: 'The branch of science concerned with the nature and properties of matter and energy.',
      synonyms: ['natural science', 'mechanics', 'thermodynamics'],
      antonyms: ['metaphysics', 'philosophy', 'humanities'],
      exampleSentences: [
        { en: 'The laws of motion are fundamental principles studied in high school science classes.', ko: '운동 법칙은 고등학교 과학 수업에서 배우는 기초적인 원리입니다.' },
        { en: 'Quantum mechanics is a complex branch of this field that deals with subatomic particles.', ko: '양자 역학은 아원자 입자를 다루는 이 분야의 복잡한 분과입니다.' },
      ],
    }
  ),
  word('pick', '따다', 1, 'verb',
    ['버리다', '심다', '던지다', '부수다', '숨기다', '고치다', '기다리다', '빌리다', '태우다', '섞다'],
    tips({
      etymology: '고대 영어 \'pican\'에서 유래하여 뾰족한 도구로 콕 찍어 들어올리는 동작을 의미합니다.',
      visual: '잘 익은 사과를 손가락으로 톡 건드려 나무에서 분리해내는 모습을 상상하세요.',
      soundAlike: '기타를 칠 때 줄을 튕기는 \'피크\'를 생각하면 무언가를 집어내는 느낌이 납니다.',
      context: '과일이나 꽃을 수확할 때 주로 쓰이며, 여러 선택지 중 하나를 고를 때도 자주 사용됩니다.',
      synonymAntonym: '선택하다(select)와 비슷하지만, 버리다(discard)와는 정반대의 행동입니다.',
    }),
    {
      definition: 'to remove a flower, fruit, or vegetable from the plant where it is growing',
      synonyms: ['pluck', 'harvest', 'gather'],
      antonyms: ['plant', 'sow', 'discard'],
      exampleSentences: [
        { en: 'The children went to the orchard to gather fresh apples from the trees.', ko: '아이들은 나무에서 신선한 사과를 따기 위해 과수원에 갔다.' },
        { en: 'She decided to collect some wild flowers to decorate the dining table.', ko: '그녀는 식탁을 장식하기 위해 야생화 몇 송이를 따기로 했다.' },
      ],
    }
  ),
  word('picnic', '소풍', 2, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '프랑스어 \'pique-nique\'에서 유래했으며, 각자 음식을 조금씩 가져와 나누어 먹는 모임을 뜻합니다.',
      visual: '푸른 잔디밭 위에 체크무늬 돗자리를 펴고 샌드위치가 든 바구니를 놓은 모습을 상상하세요.',
      soundAlike: '\'피크닉\' 음료수 이름을 떠올리면 야외에서 시원하게 마시는 즐거운 나들이가 연상됩니다.',
      context: '가족이나 친구들과 함께 공원이나 산으로 놀러 가서 야외 식사를 즐길 때 주로 사용합니다.',
      synonymAntonym: '야외 나들이를 뜻하는 excursion과 비슷하며, 실내에 머무는 것과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An occasion when a packed meal is eaten outdoors, especially during an excursion to the countryside.',
      synonyms: ['excursion', 'outing', 'cookout'],
      antonyms: ['work', 'drudgery', 'confinement'],
      exampleSentences: [
        { en: 'The family packed a basket with sandwiches and fruit for their afternoon in the park.', ko: '가족들은 공원에서 보낼 오후를 위해 샌드위치와 과일을 바구니에 챙겼습니다.' },
        { en: 'Sudden rain showers forced the group to cancel their planned outdoor meal by the lake.', ko: '갑작스러운 소나기 때문에 일행은 호숫가에서 계획했던 야외 식사를 취소해야 했습니다.' },
      ],
    }
  ),
  word('piece', '조각', 7, 'noun',
    ['일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한'],
    tips({
      etymology: '라틴어 \'pettia\'에서 유래하여 전체에서 떨어져 나온 일부분이나 조각을 의미합니다.',
      visual: '커다란 퍼즐 판에서 딱 하나 빠져 있는 퍼즐 조각의 모양을 상상해 보세요.',
      soundAlike: '평화를 뜻하는 peace와 발음이 같으므로 조각을 모아 평화를 만든다고 연상하세요.',
      context: '피자 한 조각이나 가구 한 점처럼 셀 수 있는 개별 단위를 나타낼 때 주로 쓰입니다.',
      synonymAntonym: '전체를 뜻하는 whole과 반대되는 개념으로 부분적인 요소들을 가리킵니다.',
    }),
    {
      definition: 'A separate portion or a single unit of a larger object or substance.',
      synonyms: ['portion', 'segment', 'fragment'],
      antonyms: ['entirety', 'whole', 'total'],
      exampleSentences: [
        { en: 'She cut the chocolate cake into a small square for her younger brother.', ko: '그녀는 남동생을 위해 초콜릿 케이크를 작은 정사각형 모양으로 한 조각 잘랐다.' },
        { en: 'Every single component is essential to complete this complex machinery.', ko: '이 복잡한 기계를 완성하기 위해서는 모든 개별 부품 하나하나가 필수적이다.' },
      ],
    }
  ),
  word('pig', '돼지', 3, 'noun',
    ['강아지', '고양이', '송아지', '망아지', '염소', '토끼', '사자', '호랑이', '곰', '여우'],
    tips({
      etymology: '중세 영어 \'pigge\'에서 유래되었으며, 원래는 새끼 돼지를 가리키는 말이었습니다.',
      visual: '진흙탕에서 뒹굴며 코를 킁킁거리는 분홍색 동물의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'피그\'이므로, 음식을 \'피\'하지 않고 \'그\'냥 다 먹어버리는 먹보 돼지를 연상하세요.',
      context: '농장이나 축사에서 사육되는 가축을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '가축을 뜻하는 hog나 swine과 비슷하며, 작은 생쥐와는 크기 면에서 대조됩니다.',
    }),
    {
      definition: 'A stout farm animal with a flat snout, small eyes, and a short curly tail, often kept for its meat.',
      synonyms: ['swine', 'hog', 'porker'],
      antonyms: ['human', 'predator', 'wildlife'],
      exampleSentences: [
        { en: 'The farmer fed the hungry animals in the barn early this morning.', ko: '농부는 오늘 아침 일찍 외양간에 있는 배고픈 동물들에게 먹이를 주었습니다.' },
        { en: 'Wild varieties of this creature can be quite dangerous when they feel threatened.', ko: '이 생물의 야생종들은 위협을 느낄 때 상당히 위험할 수 있습니다.' },
      ],
    }
  ),
  word('pile', '더미', 4, 'noun',
    ['구멍', '조각', '평면', '간격', '분산', '파편', '먼지', '바닥', '균열', '흐름'],
    tips({
      etymology: '라틴어 \'pila\'에서 유래되었으며, 이는 돌로 만든 기둥이나 지지대를 의미하여 무언가 차곡차곡 쌓인 형상을 나타냅니다.',
      visual: '책상 위에 책들이 위태롭게 높이 쌓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'파일\'철을 책상 위에 하나씩 높게 쌓아두는 장면을 연상하며 발음해 보세요.',
      context: '주로 빨랫감, 서류, 낙엽 등 비슷한 물건들이 한데 모여 더미를 이룰 때 사용합니다.',
      synonymAntonym: 'stack과 heap은 비슷한 의미로 쓰이지만, 정돈되지 않은 상태는 주로 heap을 더 많이 씁니다.',
    }),
    {
      definition: 'A large number of things that are put one on top of another in a messy or organized way.',
      synonyms: ['stack', 'heap', 'mound'],
      antonyms: ['base', 'ditch', 'void'],
      exampleSentences: [
        { en: 'A huge stack of dirty laundry sat in the corner of the bedroom.', ko: '침실 구석에 더러운 빨랫감이 커다란 더미로 놓여 있었다.' },
        { en: 'The fallen leaves were gathered into a neat mound near the garden gate.', ko: '낙엽들이 정원 문 근처에 깔끔한 더미로 모여 있었다.' },
      ],
    }
  ),
  word('pill', '알약', 5, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '라틴어 \'pila\'에서 유래되었으며, 이는 작은 공이나 덩어리를 의미합니다.',
      visual: '동그랗고 작은 캡슐이나 정제가 손바닥 위에 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'필\'과 비슷하므로, 약을 먹고 건강이 \'필(feel)\' 좋아진다고 연상하세요.',
      context: '주로 의학적인 처방이나 비타민 보충제를 언급할 때 자주 사용되는 단어입니다.',
      synonymAntonym: 'tablet이나 capsule과 비슷하지만, 액체 형태인 liquid와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small, solid piece of medicine that you swallow whole without chewing.',
      synonyms: ['tablet', 'capsule', 'lozenge'],
      antonyms: ['liquid', 'syrup', 'injection'],
      exampleSentences: [
        { en: 'The doctor told me to take one blue tablet every morning after breakfast.', ko: '의사는 매일 아침 식사 후에 파란색 알약 하나를 복용하라고 말했습니다.' },
        { en: 'She found it difficult to swallow the large vitamin supplement without water.', ko: '그녀는 물 없이 커다란 비타민 보충제 알약을 삼키는 것이 어렵다는 것을 알게 되었습니다.' },
      ],
    }
  ),
  word('pin', '핀', 6, 'noun',
    ['바늘', '단추', '지퍼', '고리', '끈', '매듭', '나사', '못', '망치', '집게'],
    tips({
      etymology: '라틴어 \'pinna\'(깃털, 날개)에서 유래하여 끝이 뾰족한 물건을 가리키게 되었습니다.',
      visual: '지도 위에 중요한 장소를 표시하기 위해 꽂아둔 빨간색 머리의 압정을 상상해 보세요.',
      soundAlike: '볼링장의 \'핀\'이 쓰러지는 소리를 떠올리며 발음하면 기억하기 쉽습니다.',
      context: '옷을 수선할 때 고정하거나, 게시판에 종이를 붙일 때 주로 사용되는 도구입니다.',
      synonymAntonym: '물건을 고정하는 fastener와 비슷하지만, 분리하는 역할을 하는 release와는 반대됩니다.',
    }),
    {
      definition: 'A thin, straight piece of metal with a sharp point at one end and a round head at the other, used for fastening pieces of cloth or paper together.',
      synonyms: ['fastener', 'needle', 'tack'],
      antonyms: ['hole', 'gap', 'opening'],
      exampleSentences: [
        { en: 'She used a small silver tool to hold the fabric in place while sewing the dress.', ko: '그녀는 드레스를 바느질하는 동안 천을 고정하기 위해 작은 은색 도구를 사용했습니다.' },
        { en: 'The map on the wall was covered with colorful markers showing every city he had visited.', ko: '벽에 걸린 지도에는 그가 방문했던 모든 도시를 표시하는 알록달록한 표시들로 가득했습니다.' },
      ],
    }
  ),
  word('pinch', '꼬집다', 9, 'verb',
    ['쓰다듬다', '두드리다', '문지르다', '할퀴다', '찌르다', '밀치다', '당기다', '흔들다', '누르다', '때리다'],
    tips({
      etymology: '프랑스어 \'pincer\'에서 유래하여 손가락 끝으로 꽉 쥐는 동작을 의미합니다.',
      visual: '엄지와 검지 손가락으로 상대방의 팔을 살짝 비트는 모습을 상상해 보세요.',
      soundAlike: '핀(pin)으로 콕 찌르는(ch) 것처럼 따끔하게 꼬집는 소리를 연상하세요.',
      context: '요리할 때 소금을 한 꼬집 넣거나, 신발이 발을 꽉 조여 아플 때도 사용합니다.',
      synonymAntonym: 'squeeze와 유사하지만 더 좁은 부위를 잡는 느낌이며, release와는 반대되는 동작입니다.',
    }),
    {
      definition: 'the act of gripping a small amount of skin or material between a finger and thumb',
      synonyms: ['tweak', 'squeeze', 'nip'],
      antonyms: ['release', 'soothe', 'expand'],
      exampleSentences: [
        { en: 'She gave her brother a playful nip on the arm to wake him up.', ko: '그녀는 남동생을 깨우기 위해 팔을 장난스럽게 살짝 꼬집었다.' },
        { en: 'Add a tiny amount of salt to the soup to enhance the flavor.', ko: '풍미를 높이기 위해 수프에 소금 한 꼬집을 넣으세요.' },
      ],
    }
  ),
  word('pine', '소나무', 7, 'noun',
    ['참나무', '단풍나무', '버드나무', '은행나무', '대나무', '자작나무', '느티나무', '목련', '장미', '백합'],
    tips({
      etymology: '라틴어 \'pinus\'에서 유래했으며, 뾰족한 바늘잎을 가진 나무를 뜻합니다.',
      visual: '겨울에도 푸른 바늘 모양의 잎과 울퉁불퉁한 갈색 솔방울을 떠올려 보세요.',
      soundAlike: '파인애플(pineapple)의 \'pine\'이 바로 이 나무의 솔방울 모양을 닮아 붙여진 이름입니다.',
      context: '숲이나 산에서 사계절 내내 푸른 잎을 유지하는 상록수를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'conifer와 같은 침엽수 종류와 함께 외우고, 잎이 넓은 deciduous와 대비해 기억하세요.',
    }),
    {
      definition: 'An evergreen tree with needle-shaped leaves and woody cones containing seeds.',
      synonyms: ['conifer', 'evergreen', 'softwood'],
      antonyms: ['hardwood', 'deciduous', 'broadleaf'],
      exampleSentences: [
        { en: 'The mountain was covered with thick forests of tall trees that stay green all winter.', ko: '그 산은 겨울 내내 푸름을 유지하는 키 큰 나무들의 울창한 숲으로 덮여 있었다.' },
        { en: 'Walking through the grove, the fresh scent of needles filled the cool morning air.', ko: '숲을 걷는 동안 솔잎의 신선한 향기가 시원한 아침 공기를 가득 채웠다.' },
      ],
    }
  ),
  word('pink', '연분홍색', 1, 'noun',
    ['파란색', '초록색', '보라색', '노란색', '검정색', '주황색', '갈색', '회색', '하얀색', '빨간색'],
    tips({
      etymology: '16세기경 패랭이꽃(pink flower)의 끝부분이 톱니 모양으로 잘린(pinked) 것에서 유래하여 색상 이름이 되었습니다.',
      visual: '벚꽃이 만개한 거리나 솜사탕의 부드러운 색감을 상상해 보세요.',
      soundAlike: '핑크색 잉크(ink)가 종이에 번지는 모습을 연상하면 기억하기 쉽습니다.',
      context: '주로 귀여움, 사랑, 부드러움을 상징하며 건강 상태가 좋을 때 \'in the pink\'라는 표현을 쓰기도 합니다.',
      synonymAntonym: '장미색인 rosy와 유사하며, 어두운 계열인 navy와는 대비되는 밝은 색상입니다.',
    }),
    {
      definition: 'A pale red color which is often associated with flowers, health, or affection.',
      synonyms: ['rosy', 'fuchsia', 'coral'],
      antonyms: ['colorless', 'achromatic', 'dark'],
      exampleSentences: [
        { en: 'The sky turned a beautiful shade of soft rose as the sun began to set.', ko: '해가 지기 시작하자 하늘이 아름답고 부드러운 연분홍색으로 변했습니다.' },
        { en: 'She chose a bright carnation hue for her bedroom walls to create a warm atmosphere.', ko: '그녀는 따뜻한 분위기를 조성하기 위해 침실 벽지로 밝은 분홍색 계열을 선택했습니다.' },
      ],
    }
  ),
  word('pioneer', '개척자', 4, 'noun',
    ['추종자', '방관자', '후계자', '모방자', '관찰자', '방해꾼', '보수주의자', '중단자', '거주자', '상속인'],
    tips({
      etymology: '프랑스어 \'pionnier\'에서 유래했으며, 원래는 보병이나 길을 닦는 군인을 의미했습니다.',
      visual: '아무도 밟지 않은 눈 덮인 들판에 처음으로 발자국을 남기며 걸어가는 사람을 상상해 보세요.',
      soundAlike: '파이(pie)를 먹으러 니어(near) 근처로 가장 먼저 달려가는 선구자라고 외워보세요.',
      context: '새로운 기술을 개발하거나 미지의 땅을 처음 탐험하는 사람을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '새 길을 여는 innovator와 대조적으로, 뒤를 따르는 follower를 함께 기억하세요.',
    }),
    {
      definition: 'A person who is among the first to explore or settle a new country or area, or who develops new ideas and techniques.',
      synonyms: ['innovator', 'trailblazer', 'pathfinder'],
      antonyms: ['follower', 'successor', 'imitator'],
      exampleSentences: [
        { en: 'She was a courageous figure who helped settle the western frontier during the nineteenth century.', ko: '그녀는 19세기 동안 서부 개척지를 정착시키는 데 도움을 준 용기 있는 개척자였습니다.' },
        { en: 'The scientist is considered a leading figure in the field of genetic engineering.', ko: '그 과학자는 유전 공학 분야의 선구적인 인물로 여겨집니다.' },
      ],
    }
  ),
  word('pitch', '던지다', 10, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '고대 영어 \'piccean\'에서 유래하여 무언가를 찌르거나 박아 넣는 동작에서 멀리 내던지는 동작으로 의미가 확장되었습니다.',
      visual: '야구 투수가 마운드 위에서 온 힘을 다해 포수 미트를 향해 공을 뿌리는 역동적인 모습을 상상해 보세요.',
      soundAlike: '캠핑장에서 텐트를 치기 위해 말뚝(pegs)을 땅에 박거나 텐트를 \'피는\' 소리와 비슷하다고 연상해 보세요.',
      context: '스포츠 경기에서 공을 던질 때뿐만 아니라, 비즈니스 상황에서 아이디어를 제안하며 내던질 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 던지는 throw와 유사하며, 반대로 날아오는 것을 잡아채는 catch와 대조를 이룹니다.',
    }),
    {
      definition: 'to throw something with force or precision, especially towards a specific target',
      synonyms: ['throw', 'toss', 'hurl'],
      antonyms: ['catch', 'receive', 'retain'],
      exampleSentences: [
        { en: 'The baseball player prepared to throw a fast ball toward the home plate.', ko: '야구 선수는 홈 플레이트를 향해 빠른 공을 던질 준비를 했습니다.' },
        { en: 'Entrepreneurs often have only a few minutes to present their business ideas to investors.', ko: '기업가들은 종종 투자자들에게 자신의 사업 아이디어를 제안할 수 있는 단 몇 분의 시간만을 가집니다.' },
      ],
    }
  ),
  word('pity', '연민', 5, 'noun',
    ['반복적으로', '우선', '빠르게', '천천히', '자주', '가끔', '항상', '이미', '곧', '직접'],
    tips({
      etymology: '라틴어 pietas에서 유래하여 경건함과 자비심을 뜻하며, 타인의 고통을 함께 느끼는 마음과 연결됩니다.',
      visual: '비에 젖어 떨고 있는 작은 강아지를 보며 안타까워하는 표정을 지어보세요.',
      soundAlike: '발음이 \'피티\'와 비슷하므로, 피가 나고 다친 사람을 보며 느끼는 안타까움을 연상하세요.',
      context: '누군가의 불행한 소식을 들었을 때 저절로 나오는 탄식이나 동정의 감정을 표현할 때 쓰입니다.',
      synonymAntonym: 'compassion과 유사하며, 타인의 고통에 무관심한 indifference와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A feeling of sorrow and compassion caused by the suffering and misfortunes of others.',
      synonyms: ['compassion', 'sympathy', 'mercy'],
      antonyms: ['indifference', 'cruelty', 'disdain'],
      exampleSentences: [
        { en: 'She felt a wave of compassion for the homeless man sitting in the rain.', ko: '그녀는 빗속에 앉아 있는 노숙자에게 깊은 불쌍함을 느꼈다.' },
        { en: 'It is a great shame that such a talented artist died so young.', ko: '그토록 재능 있는 예술가가 그렇게 젊은 나이에 세상을 떠난 것은 참으로 안타까운 일이다.' },
      ],
    }
  ),
  word('place', '장소', 2, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '라틴어 platea(넓은 거리)에서 유래하여 사람들이 모이는 특정한 지점이나 공간을 뜻하게 되었습니다.',
      visual: '지도 위에 빨간색 핀이 꽂혀 있는 특정 위치나 건물을 상상해 보세요.',
      soundAlike: '플레이스(place)는 \'풀(pool) 에 이쓰(있으)\'와 발음이 비슷하니 수영장이라는 장소에 있다고 연상해 보세요.',
      context: '단순히 물리적 공간뿐만 아니라 순서나 지위, 혹은 마음속의 자리를 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'location과 유사하며, 반대로 정해진 곳이 없는 상태인 nowhere와 대조됩니다.',
    }),
    {
      definition: 'A particular position, point, or area in space that is used for a specific purpose.',
      synonyms: ['location', 'spot', 'site'],
      antonyms: ['void', 'nowhere', 'displacement'],
      exampleSentences: [
        { en: 'This quiet park is my favorite spot to read books in the afternoon.', ko: '이 조용한 공원은 내가 오후에 책을 읽기 가장 좋아하는 장소이다.' },
        { en: 'Please return the dictionary to its original position on the shelf.', ko: '사전을 선반의 원래 장소에 돌려놓아 주세요.' },
      ],
    }
  ),
  word('plain', '분명한', 6, 'adjective',
    ['복잡한', '화려한', '희미한', '장식된', '불투명한', '비밀스러운', '인위적인', '추상적인', '정교한', '모호한'],
    tips({
      etymology: '라틴어 planus에서 유래하여 \'평평하고 탁 트인\' 상태를 의미하며, 장애물이 없어 눈에 잘 띈다는 뜻으로 확장되었습니다.',
      visual: '아무런 무늬가 없는 하얀 종이 위에 검은 점 하나가 찍혀 있어 누구나 바로 알아볼 수 있는 모습을 상상해 보세요.',
      soundAlike: '비행기(plane)가 구름 없는 맑은 하늘을 날 때 그 모습이 아주 \'분명하게\' 보이는 상황과 연결하면 쉽습니다.',
      context: '주로 사실이나 진실이 숨김없이 드러나 누구나 이해하기 쉬운 상황을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '명확함을 뜻하는 clear와 유의어이며, 복잡해서 알아보기 힘든 complex와는 반대되는 개념입니다.',
    }),
    {
      definition: 'easy to perceive or understand; expressed in a clear and direct way without any decoration or complexity',
      synonyms: ['evident', 'obvious', 'apparent'],
      antonyms: ['obscure', 'ambiguous', 'hidden'],
      exampleSentences: [
        { en: 'The truth of the matter became simple and easy to see for everyone involved.', ko: '사건의 진실은 관련된 모든 사람들에게 단순하고 분명해졌습니다.' },
        { en: 'She spoke in honest language to ensure there was no misunderstanding of her intentions.', ko: '그녀는 자신의 의도에 오해가 없도록 솔직하고 분명한 언어로 말했습니다.' },
      ],
    }
  ),
  word('plan', '계획', 3, 'noun',
    ['결과', '우연', '과거', '혼란', '실패', '기록', '본능', '상상', '반응', '중단'],
    tips({
      etymology: '평평한 지도를 뜻하는 라틴어 \'planum\'에서 유래하여, 어떤 일을 하기 위해 미리 그려놓은 설계도를 의미합니다.',
      visual: '달력에 빼곡히 적힌 일정표나 여행 가기 전 작성한 체크리스트를 상상해 보세요.',
      soundAlike: '\'플랜\'이라고 발음하며, \'풀(pool) 안\'에서 어떻게 놀지 미리 짜놓은 계획이라고 연상해 보세요.',
      context: '비즈니스 미팅이나 여행 준비, 공부 일정을 짤 때 가장 기본적으로 사용하는 단어입니다.',
      synonymAntonym: '전략을 뜻하는 strategy와 비슷하지만, 아무런 준비가 없는 상태인 disorder와는 반대됩니다.',
    }),
    {
      definition: 'A detailed proposal for doing or achieving something, often involving a series of steps and timing.',
      synonyms: ['strategy', 'scheme', 'arrangement'],
      antonyms: ['disorganization', 'improvisation', 'chaos'],
      exampleSentences: [
        { en: 'Our team developed a comprehensive strategy to increase sales over the next quarter.', ko: '우리 팀은 다음 분기 동안 매출을 올리기 위한 종합적인 계획을 세웠습니다.' },
        { en: 'Everything went according to the original schedule despite the unexpected weather changes.', ko: '예상치 못한 날씨 변화에도 불구하고 모든 것이 원래 계획대로 진행되었습니다.' },
      ],
    }
  ),
  word('planet', '행성', 7, 'noun',
    ['위성', '항성', '혜성', '은하', '우주', '궤도', '성운', '중력', '대기', '운석'],
    tips({
      etymology: '그리스어 \'planetes\'에서 유래했으며, 밤하늘을 \'떠돌아다니는 것\'이라는 의미를 담고 있습니다.',
      visual: '태양 주위를 일정한 궤도로 돌고 있는 거대한 구 모양의 천체를 상상해 보세요.',
      soundAlike: '\'플래닛\' 발음이 \'풀 내니\'와 비슷하죠? 지구라는 행성에 풀이 가득 피어나는 모습을 떠올려 보세요.',
      context: '천문학이나 환경 보호를 논할 때 \'하나뿐인 지구\'를 지칭하며 자주 사용됩니다.',
      synonymAntonym: '항성(star)은 스스로 빛을 내지만, 행성은 항성 주위를 돌며 빛을 반사하는 존재입니다.',
    }),
    {
      definition: 'A large celestial body that moves in an elliptical orbit around a star.',
      synonyms: ['orb', 'sphere', 'world'],
      antonyms: ['star', 'void', 'vacuum'],
      exampleSentences: [
        { en: 'Astronomers are searching for a habitable world outside our solar system.', ko: '천문학자들은 우리 태양계 밖에서 거주 가능한 행성을 찾고 있습니다.' },
        { en: 'Mars is often called the Red because of the iron oxide on its surface.', ko: '화성은 표면의 산화철 때문에 종종 붉은 행성이라 불립니다.' },
      ],
    }
  ),
];
