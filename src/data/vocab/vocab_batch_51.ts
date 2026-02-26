import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch51: VocabItem[] = [
  word('plant', '식물', 4, 'noun',
    ['수의사', '복원자', '아이스맨 (캐릭터/인물)', '올리브나무', '실례', '추측\n(speculate, suppose, guess, infer 추측하다)', '허브, 약초', '광택, 윤기', '오작동, 기능불량', '블랙넬 (고유명사)'],
    tips({
      etymology: '라틴어 \'planta\'에서 유래하여 땅에 심어 뿌리를 내린 생명체라는 의미에서 시작되었습니다.',
      visual: '화분에 심겨진 초록색 잎사귀가 햇빛을 받으며 자라나는 모습을 상상해 보세요.',
      soundAlike: '\'플랜트\'는 공장 설비를 뜻하기도 하므로, 기계가 가득한 공장 마당에 나무를 심는 장면을 연상하세요.',
      context: '생물학적 의미의 식물뿐만 아니라 제조 시설인 공장을 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: 'flora는 식물군을 뜻하는 유의어이며, 동물계인 fauna와 대조를 이룹니다.',
    }),
    {
      definition: 'A living organism that typically grows in a permanent site, absorbing water and inorganic substances through its roots.',
      synonyms: ['vegetation', 'flora', 'shrub'],
      antonyms: ['animal', 'fauna', 'creature'],
      exampleSentences: [
        { en: 'The gardener watered every small sprout to ensure the garden stayed healthy.', ko: '정원사는 정원이 건강하게 유지되도록 모든 작은 싹에 물을 주었습니다.' },
        { en: 'Scientists discovered a rare species of moss growing deep inside the damp cave.', ko: '과학자들은 축축한 동굴 깊은 곳에서 자라는 희귀한 이끼 종을 발견했습니다.' },
      ],
      wordDistractors: ['pliant', 'plaint', 'slant'],
      definitionDistractors: [
        'A detailed scheme or method worked out beforehand for accomplishing an objective',
        'A flat area of ground designated for a specific purpose such as building',
        'A large piece of industrial machinery used in manufacturing processes',
      ],
    }
  ),
  word('plate', '도금하다', 5, 'verb',
    ['분석하다', '정리하다', '명확히 말하다', '번갈아 일어나다', '더럽히다', '취소, 철회하다', '비웃다', '비교하다', '(모양,구조, 특징) 바꾸다', '방랑하다, 배회하다, 떠돌아다니다'],
    tips({
      etymology: '라틴어 \'plattus(평평한)\'에서 유래하여 금속이나 유리를 얇고 평평한 층으로 덮는 동작을 의미합니다.',
      visual: '은색 페인트나 얇은 금속판을 물체 표면에 매끄럽게 입히는 장인의 모습을 상상하세요.',
      soundAlike: '음식을 담는 \'접시(plate)\'와 발음이 같습니다. 접시처럼 평평한 판을 덧씌운다고 생각하면 쉽습니다.',
      context: '주로 보석 가공이나 산업 현장에서 금속을 도금하거나 표면을 마감할 때 사용되는 전문적인 표현입니다.',
      synonymAntonym: '표면을 덮는 coat와 대조적으로, 덮개를 벗겨내는 strip이나 uncover를 함께 기억하세요.',
    }),
    {
      definition: 'To cover a metal object with a thin layer of another metal, especially gold or silver.',
      synonyms: ['coat', 'veneer', 'laminate'],
      antonyms: ['strip', 'uncover', 'expose'],
      exampleSentences: [
        { en: 'The jeweler will plate the copper ring with a thick layer of 24-karat gold.', ko: '보석 세공사는 구리 반지에 24캐럿 금을 두껍게 도금할 것입니다.' },
        { en: 'Manufacturers often plate steel parts with zinc to prevent rust and corrosion.', ko: '제조업체들은 녹과 부식을 방지하기 위해 강철 부품에 아연을 입히곤 합니다.' },
      ],
      wordDistractors: ['plait', 'placate', 'plaque'],
      definitionDistractors: [
        'To arrange food attractively on a dish before serving it to guests',
        'A flat rigid sheet of metal or glass used in construction',
        'To flatten or press something into a thin even layer',
      ],
    }
  ),
  word('platform', '단', 6, 'noun',
    ['지하철', '기차표', '정거장', '계단', '난간', '지붕', '벽면', '바닥', '천장', '기둥'],
    tips({
      etymology: '프랑스어 \'plat(평평한)\'와 \'forme(형태)\'가 합쳐져 평평한 바닥이나 단상을 의미하게 되었습니다.',
      visual: '강연자가 청중 앞에서 연설하기 위해 올라서 있는 높고 평평한 무대를 상상해 보세요.',
      soundAlike: '기차를 타러 \'플랫폼\'에 올라서는 장면을 떠올리면 \'단\'이라는 의미가 쉽게 연결됩니다.',
      context: '정치인이 공약을 발표하거나 가수가 공연을 할 때 올라가는 물리적인 높은 자리를 뜻합니다.',
      synonymAntonym: '무대를 뜻하는 stage와 유사하며, 바닥이나 낮은 지대를 뜻하는 base와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A raised level surface on which people or things can stand, usually for public speaking or boarding trains.',
      synonyms: ['podium', 'stage', 'dais'],
      antonyms: ['floor', 'ground', 'bottom'],
      exampleSentences: [
        { en: 'The politician stood on the raised wooden structure to address the gathering crowd.', ko: '그 정치인은 모여든 군중에게 연설하기 위해 높은 나무 단 위에 섰습니다.' },
        { en: 'Passengers waited patiently on the concrete area for the express train to arrive.', ko: '승객들은 급행열차가 도착하기를 콘크리트 승강장에서 인내심 있게 기다렸습니다.' },
      ],
      wordDistractors: ['platoon', 'platter', 'platinum'],
      definitionDistractors: [
        'A political program or set of principles adopted by a party or candidate',
        'A digital software system used for managing online transactions',
        'A shallow container used for holding or serving food at meals',
      ],
    }
  ),
  word('play', '놀다', 1, 'verb',
    ['공부하다', '일하다', '쉬다', '운동하다', '연습하다', '대화하다', '먹다', '자다', '여행하다', '청소하다'],
    tips({
      etymology: '고대 영어 \'plegan\'에서 유래하여 움직임, 운동, 즐거움을 뜻하게 되었습니다.',
      visual: '아이들이 공원에서 신나게 뛰어노는 모습이나, 게임을 즐기는 장면을 상상해 보세요.',
      soundAlike: '게임을 \'플레이\'한다고 할 때의 그 발음을 떠올리면 쉽습니다.',
      context: '아이들이 노는 것, 악기를 연주하는 것, 스포츠를 하는 것 등 다양한 활동에 쓰이는 매우 기본적인 동사입니다.',
      synonymAntonym: '즐기다를 뜻하는 enjoy와 비슷하며, 일하다를 뜻하는 work과 반대되는 개념입니다.',
    }),
    {
      definition: 'To engage in activity for enjoyment and recreation rather than a serious or practical purpose.',
      synonyms: ['enjoy', 'have fun', 'frolic'],
      antonyms: ['work', 'labor', 'toil'],
      exampleSentences: [
        { en: 'The children went outside to play in the park after school.', ko: '아이들은 방과 후 공원에 나가서 놀았습니다.' },
        { en: 'She likes to play the piano every evening after dinner.', ko: '그녀는 매일 저녁 식사 후에 피아노를 치는 것을 좋아합니다.' },
      ],
      wordDistractors: ['ploy', 'pray', 'flay'],
      definitionDistractors: [
        'To display or exhibit something prominently for others to see',
        'To place a wager or bet on the outcome of a competition',
        'To arrange items in a specific order according to a set of rules',
      ],
    }
  ),
  word('pleasant', '기분 좋은', 4, 'adjective',
    ['불쾌한', '지루한', '끔찍한', '평범한', '복잡한', '위험한', '어두운', '시끄러운', '차가운', '무거운'],
    tips({
      etymology: '기쁘게 하다라는 뜻의 프랑스어 \'plaisir\'에서 유래하여 남을 기분 좋게 만드는 성질을 뜻합니다.',
      visual: '화창한 봄날 공원 벤치에 앉아 부드러운 바람을 맞으며 미소 짓는 얼굴을 상상해 보세요.',
      soundAlike: '발음이 \'플레전트\'와 유사하므로 \'풀(grass)이 전해주는 트(특)별한 기분\'으로 기억하세요.',
      context: '날씨, 성격, 목소리 등 오감을 통해 느껴지는 기분 좋은 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '즐거운(enjoyable)과는 비슷하지만, 고통스러운(painful)과는 정반대의 느낌을 줍니다.',
    }),
    {
      definition: 'giving a sense of happy satisfaction, enjoyment, or enjoyment to the mind or senses',
      synonyms: ['enjoyable', 'delightful', 'agreeable'],
      antonyms: ['unpleasant', 'disagreeable', 'horrible'],
      exampleSentences: [
        { en: 'The garden provided a peaceful and lovely atmosphere for a walk.', ko: '그 정원은 산책하기에 평화롭고 기분 좋은 분위기를 제공했습니다.' },
        { en: 'We spent the entire afternoon having a very charming conversation over tea.', ko: '우리는 차를 마시며 오후 내내 매우 즐겁고 기분 좋은 대화를 나누었습니다.' },
      ],
      wordDistractors: ['pheasant', 'peasant', 'pleas'],
      definitionDistractors: [
        'Having a mild temperament and rarely showing signs of anger',
        'Relating to a rural area with simple and traditional customs',
        'Producing a sharp or pungent taste that lingers on the tongue',
      ],
    }
  ),
  word('please', '기쁘게 하다', 2, 'verb',
    ['복원하다', '파내다, 발굴하다', '물다', '디지털화하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '라틴어 placere에서 유래하여 누군가를 기쁘게 하거나 만족시킨다는 본래의 의미를 가지고 있습니다.',
      visual: '상대방이 내가 원하는 일을 해주었을 때 활짝 웃으며 만족해하는 표정을 상상해 보세요.',
      soundAlike: '발음이 \'플리즈\'와 비슷하므로, 무언가를 간절히 부탁하며 상대의 마음을 달래는 소리로 기억하세요.',
      context: '주로 정중하게 부탁할 때 쓰이지만, 동사로 쓰일 때는 타인을 기쁘게 하거나 만족시킨다는 뜻으로 사용됩니다.',
      synonymAntonym: '만족시키다라는 뜻의 satisfy와 반대되는 화나게 하다라는 뜻의 annoy를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'To give enjoyment, pleasure, or satisfaction to someone.',
      synonyms: ['satisfy', 'gratify', 'delight'],
      antonyms: ['displease', 'annoy', 'offend'],
      exampleSentences: [
        { en: 'The young chef worked hard to satisfy the customers and make them happy with his cooking.', ko: '젊은 요리사는 손님들을 기쁘게 하고 그의 요리에 만족하게 하려고 열심히 노력했습니다.' },
        { en: 'It is difficult to satisfy everyone\'s expectations all the time.', ko: '모든 사람의 기대치를 항상 만족시키는 것은 어려운 일입니다.' },
      ],
      wordDistractors: ['pleas', 'fleece', 'appease'],
      definitionDistractors: [
        'To formally request or beg someone for assistance or mercy',
        'To fold or crease a piece of fabric into neat sections',
        'To arrange items in a tidy and organized manner on a shelf',
      ],
    }
  ),
  word('pleasure', '즐거움', 4, 'noun',
    ['고통', '의무', '슬픔', '분노', '책임', '공포', '지루함', '혼란', '피로', '절망'],
    tips({
      etymology: '라틴어 \'placere(기쁘게 하다)\'에서 유래하여 남을 기쁘게 하거나 스스로 만족을 느끼는 상태를 뜻합니다.',
      visual: '맛있는 음식을 먹거나 좋아하는 음악을 들을 때 입가에 번지는 환한 미소를 상상해 보세요.',
      soundAlike: '발음이 \'플레저\'와 비슷한데, 보물(treasure)을 발견했을 때의 기쁨을 떠올리면 기억하기 쉽습니다.',
      context: '격식을 차리는 인사말인 \'It\'s my pleasure(천만에요/제 기쁨입니다)\'에서 자주 쓰이는 단어입니다.',
      synonymAntonym: '기쁨을 뜻하는 delight와 유의어이며, 반대로 불쾌함을 뜻하는 displeasure와 대조됩니다.',
    }),
    {
      definition: 'a feeling of happy satisfaction and enjoyment derived from an experience or activity',
      synonyms: ['delight', 'enjoyment', 'gratification'],
      antonyms: ['pain', 'displeasure', 'misery'],
      exampleSentences: [
        { en: 'Reading a good book by the fireplace gives me immense satisfaction and joy.', ko: '벽난로 옆에서 좋은 책을 읽는 것은 나에게 커다란 즐거움을 준다.' },
        { en: 'She takes great pride and happiness in tending to her small rooftop garden.', ko: '그녀는 자신의 작은 옥상 정원을 가꾸는 것에서 큰 즐거움을 얻는다.' },
      ],
      wordDistractors: ['pleasing', 'treasure', 'measure'],
      definitionDistractors: [
        'A strong physical pressure applied to a surface or object',
        'An obligation or duty that must be fulfilled within a given time',
        'A formal period of rest granted to someone after hard work',
      ],
    }
  ),
  word('plenty', '많음', 5, 'noun',
    ['부족', '결핍', '희귀', '한계', '절약', '빈곤', '최소', '부분', '조각', '결함'],
    tips({
      etymology: '라틴어 \'plenus(가득 찬)\'에서 유래하여 무엇인가가 넘칠 정도로 충분한 상태를 나타냅니다.',
      visual: '수확철에 과일이 바구니 밖으로 넘쳐흐르는 풍요로운 장면을 상상해 보세요.',
      soundAlike: '\'플랜티\'는 \'풀(Full)이 안티(Anti)\'라고 생각해보세요. 가득 차서 부족함이 전혀 없는 상태입니다.',
      context: '음식이나 시간, 기회 등이 필요한 것보다 더 많이 있을 때 주로 사용합니다.',
      synonymAntonym: 'abundance와 유의어이며, 부족함을 뜻하는 scarcity와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A full or more than adequate amount or supply of something.',
      synonyms: ['abundance', 'profusion', 'wealth'],
      antonyms: ['scarcity', 'lack', 'dearth'],
      exampleSentences: [
        { en: 'We have had a large harvest this year, so there is food for everyone.', ko: '올해 수확량이 많아서 모두가 먹을 음식이 충분합니다.' },
        { en: 'Don\'t rush your meal because we have time before the train departs.', ko: '기차가 출발하기 전까지 시간이 넉넉하니 식사를 서두르지 마세요.' },
      ],
      wordDistractors: ['penalty', 'pliant', 'pantry'],
      definitionDistractors: [
        'A severe punishment imposed for breaking a rule or law',
        'A small number or amount that is barely sufficient for a purpose',
        'A feeling of contentment that comes from achieving a personal goal',
      ],
    }
  ),
  word('plot', '음모', 6, 'noun',
    ['긴장, 갈등', '제레미 (인명)', '피어슨 (인명)', '10억', '장황함', '오페라', '설치', '삭감, 공제', '파괴', '일본인'],
    tips({
      etymology: '작은 땅 조각(plat)을 표시하는 지도에서 시작하여, 비밀리에 계획을 짜는 행위로 의미가 확장되었습니다.',
      visual: '어두운 방 안에서 여러 명의 사람들이 지도를 펼쳐놓고 비밀스럽게 속삭이는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'플롯\'이므로, 영화의 구성(plot)이 누군가를 속이려는 \'음모\'로 짜여 있다고 연결하세요.',
      context: '주로 정치적 반란이나 범죄를 모의할 때 사용되며, 누군가에게 해를 끼치려는 의도가 포함됩니다.',
      synonymAntonym: 'conspiracy와 유의어 관계이며, 정직한 계획을 뜻하는 honesty나 openness와는 반대됩니다.',
    }),
    {
      definition: 'A secret plan made by a group of people to do something illegal or harmful.',
      synonyms: ['conspiracy', 'scheme', 'intrigue'],
      antonyms: ['honesty', 'loyalty', 'faithfulness'],
      exampleSentences: [
        { en: 'The rebels hatched a secret plan to overthrow the current government.', ko: '반란군들은 현 정부를 전복시키기 위한 비밀스러운 음모를 꾸몄다.' },
        { en: 'Police officers managed to uncover a dangerous assassination attempt before it could be carried out.', ko: '경찰관들은 위험한 암살 음모가 실행되기 전에 그것을 가까스로 찾아냈다.' },
      ],
      wordDistractors: ['plod', 'blot', 'slot'],
      definitionDistractors: [
        'A small piece of land used for growing vegetables or flowers',
        'The main sequence of events in a novel, film, or play',
        'A mark or stain left on a surface after spilling a liquid',
      ],
    }
  ),
  word('plus', '더하기의', 7, 'adjective',
    ['빼기의', '곱하기의', '나누기의', '부정적인', '중립적인', '모호한', '결핍된', '부족한', '감소하는', '일시적인'],
    tips({
      etymology: '라틴어 \'plus\'에서 유래하여 \'더 많은(more)\'이라는 의미를 그대로 담고 있습니다.',
      visual: '수학 기호 \'+\'가 그려진 성적표나 추가 혜택이 담긴 보너스 상자를 상상해 보세요.',
      soundAlike: '에너지 드링크나 비타민 이름 뒤에 붙는 \'플러스\' 발음을 떠올리면 추가적인 이점을 연상하기 쉽습니다.',
      context: '주로 0도 이상의 기온을 말하거나, 예상치 못한 추가 이득을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '추가적인 것을 뜻하는 added와 반대되는 개념인 minus를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'Involving an addition or a value that is greater than zero.',
      synonyms: ['additional', 'added', 'extra'],
      antonyms: ['minus', 'negative', 'subtracted'],
      exampleSentences: [
        { en: 'The temperature stayed at a steady five degrees above zero during the day.', ko: '낮 동안 기온은 영상 5도를 안정적으로 유지했습니다.' },
        { en: 'Having previous experience in sales is a definite advantage for this position.', ko: '영업 분야의 이전 경험이 있는 것은 이 직책에 확실한 이점입니다.' },
      ],
      wordDistractors: ['plush', 'pulse', 'plume'],
      definitionDistractors: [
        'Being soft, luxurious, and richly comfortable in texture',
        'Containing a surplus amount that exceeds what is needed',
        'Occurring at regular intervals in a predictable pattern',
      ],
    }
  ),
  word('P.M.', '오후', 3, 'noun',
    ['오전', '새벽', '정오', '자정', '일출', '황혼', '시간', '날짜', '분기', '계절'],
    tips({
      etymology: '라틴어 \'Post Meridiem\'의 약자로, \'정오 이후\'라는 뜻에서 유래했습니다.',
      visual: '시계 바늘이 낮 12시를 지나 해가 서쪽으로 기울기 시작하는 모습을 상상하세요.',
      soundAlike: '피엠(P.M.)은 \'피곤한(P) 오후(M)\'라고 외우면 기억하기 쉽습니다.',
      context: '약속 시간을 정할 때 오전(A.M.)과 헷갈리지 않도록 반드시 확인해야 하는 표현입니다.',
      synonymAntonym: '오후를 뜻하는 afternoon과 유사하며, 오전인 A.M.과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The period of time from noon until midnight, typically used when telling the time.',
      synonyms: ['afternoon', 'evening', 'post-meridiem'],
      antonyms: ['A.M.', 'morning', 'forenoon'],
      exampleSentences: [
        { en: 'The meeting is scheduled to begin at exactly 2:00 P.M. in the main conference room.', ko: '회의는 메인 회의실에서 정확히 오후 2시에 시작될 예정입니다.' },
        { en: 'Most coffee shops in this neighborhood close their doors at 10:00 P.M. on weekdays.', ko: '이 동네의 대부분의 커피숍은 평일 오후 10시에 문을 닫습니다.' },
      ],
      wordDistractors: ['P.E.', 'P.O.', 'P.S.'],
      definitionDistractors: [
        'The period of time from midnight until noon in a given day',
        'An abbreviation for a public message added after the main text',
        'A unit of measurement used to calculate distance in navigation',
      ],
    }
  ),
  word('pocket', '주머니', 1, 'noun',
    ['가방', '지갑', '단추', '지퍼', '벨트', '소매', '깃', '바지', '양말', '장갑'],
    tips({
      etymology: '프랑스어 \'poque(주머니)\'에서 유래하여 작은 가방이나 자루를 의미하게 되었습니다.',
      visual: '청바지 뒷부분에 달린 작은 사각형 모양의 천 조각과 그 안에 꽂힌 스마트폰을 상상하세요.',
      soundAlike: '\'폭\' 들어가는 \'포켓\'이라고 발음하며 물건을 쏙 집어넣는 소리와 연결해 보세요.',
      context: '옷뿐만 아니라 당구대의 구멍이나 비행기 좌석 뒤편의 수납 공간도 이 단어를 사용합니다.',
      synonymAntonym: '무언가를 담는 pouch와 비슷하지만, 아무것도 없는 상태인 void와는 반대됩니다.',
    }),
    {
      definition: 'A small bag-like shape sewn into or onto a piece of clothing for carrying small items.',
      synonyms: ['pouch', 'receptacle', 'compartment'],
      antonyms: ['exterior', 'surface', 'protrusion'],
      exampleSentences: [
        { en: 'He reached into his jacket to find the car keys.', ko: '그는 자동차 열쇠를 찾기 위해 재킷 주머니 속으로 손을 뻗었다.' },
        { en: 'Small coins were jingling inside the boy\'s denim pants.', ko: '소년의 데님 바지 주머니 안에서 작은 동전들이 딸랑거리고 있었다.' },
      ],
      wordDistractors: ['socket', 'rocket', 'locket'],
      definitionDistractors: [
        'A small handbag carried on the shoulder or held in the hand',
        'A protective case designed to hold a specific electronic device',
        'A hollow space carved into a wall for storing decorative items',
      ],
    }
  ),
  word('poem', '시', 4, 'noun',
    ['소설', '수필', '희곡', '잡지', '신문', '일기', '편지', '사전', '교과서', '논문'],
    tips({
      etymology: '그리스어 \'poiein(만들다)\'에서 유래하여, 언어를 정교하게 빚어 만든 창작물을 뜻합니다.',
      visual: '종이 위에 짧은 행들이 리듬감 있게 배열되어 있고, 그 옆에 깃펜이 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'포엠\' 발음이 \'포근함\'과 비슷하게 들리니, 마음을 포근하게 적시는 서정적인 글귀를 떠올려 보세요.',
      context: '주로 문학 수업이나 낭독회에서 감정을 표현하거나 자연의 아름다움을 노래할 때 자주 등장합니다.',
      synonymAntonym: '운율이 있는 verse와 비슷하지만, 산문 형태인 prose와는 대조적인 특징을 가집니다.',
    }),
    {
      definition: 'A piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzas.',
      synonyms: ['verse', 'rhyme', 'sonnet'],
      antonyms: ['prose', 'essay', 'nonfiction'],
      exampleSentences: [
        { en: 'The young author recited a moving piece about the changing seasons during the festival.', ko: '젊은 작가는 축제 기간 동안 계절의 변화에 관한 감동적인 시를 낭독했습니다.' },
        { en: 'Every line in this literary work captures the deep sorrow of a lost love.', ko: '이 문학 작품의 모든 구절은 잃어버린 사랑에 대한 깊은 슬픔을 담아내고 있습니다.' },
      ],
      wordDistractors: ['poise', 'plume', 'prose'],
      definitionDistractors: [
        'A short prose passage written to convey factual information clearly',
        'A dramatic script intended to be performed on stage by actors',
        'A musical composition arranged for a solo instrument or voice',
      ],
    }
  ),
  word('poet', '시인', 5, 'noun',
    ['소설가', '수필가', '비평가', '번역가', '편집자', '기자', '극작가', '언론인', '독자', '출판업자'],
    tips({
      etymology: '그리스어 \'poietes\'에서 유래했으며, 이는 \'만드는 사람\' 혹은 \'창조자\'라는 뜻을 가지고 있습니다.',
      visual: '달빛 아래에서 깃펜을 들고 종이에 아름다운 운율을 적어 내려가는 예술가의 모습을 상상해 보세요.',
      soundAlike: '\'포잇\' 발음이 \'포근하게 잇다\'와 비슷하죠? 아름다운 단어들을 포근하게 이어서 시를 짓는 사람입니다.',
      context: '문학 행사나 낭독회에서 감성적인 구절을 읊으며 청중에게 감동을 주는 인물을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '글을 쓰는 작가나 운문가는 비슷한 의미를 가지며, 산문을 쓰는 사람이나 실용적인 글을 쓰는 이와는 대조됩니다.',
    }),
    {
      definition: 'A person who writes creative pieces of literature using rhythm, imagery, and emotional language, often in verse.',
      synonyms: ['rhymester', 'bard', 'lyricist'],
      antonyms: ['prosaist', 'scientist', 'logician'],
      exampleSentences: [
        { en: 'The young writer dreamed of becoming a famous artist who captures the beauty of nature in verse.', ko: '그 젊은 작가는 자연의 아름다움을 시구에 담아내는 유명한 시인이 되기를 꿈꿨다.' },
        { en: 'Every word chosen by the master reflects a deep understanding of human emotions and sorrow.', ko: '거장이 선택한 모든 단어는 인간의 감정과 슬픔에 대한 깊은 이해를 반영한다.' },
      ],
      wordDistractors: ['pivot', 'poser', 'posit'],
      definitionDistractors: [
        'A scholar who studies ancient texts and translates them into modern languages',
        'A professional editor who reviews manuscripts before publication',
        'A performer who recites memorized speeches on stage before an audience',
      ],
    }
  ),
  word('point', '점', 2, 'noun',
    ['선', '면', '부피', '각도', '곡선', '원형', '공간', '길이', '너비', '높이'],
    tips({
      etymology: '라틴어 \'punctum\'에서 유래되었으며, 이는 \'찌르다\'라는 뜻의 pungere에서 왔습니다. 뾰족한 도구로 콕 찍은 자국을 상상해 보세요.',
      visual: '지도 위에 빨간색 펜으로 아주 작고 둥근 점 하나를 찍는 모습을 그려보세요.',
      soundAlike: '농구 경기에서 득점할 때 \'포인트\'를 올린다고 하죠? 점수를 하나하나 쌓는 장면을 연상하세요.',
      context: '기하학에서 위치만 있고 크기가 없는 요소로 쓰이거나, 대화 중 핵심적인 논점을 말할 때 자주 사용됩니다.',
      synonymAntonym: 'dot이나 spot과 비슷하지만, 전체적인 흐름 속의 핵심이라는 의미에서는 whole이나 line과 대조됩니다.',
    }),
    {
      definition: 'A precise location or a single small mark on a surface.',
      synonyms: ['dot', 'spot', 'mark'],
      antonyms: ['line', 'area', 'surface'],
      exampleSentences: [
        { en: 'The artist placed a single black dot at the center of the canvas.', ko: '예술가는 캔버스 중앙에 검은 점 하나를 찍었습니다.' },
        { en: 'Please show me the exact location on the map where we are standing.', ko: '우리가 서 있는 지도의 정확한 지점을 보여주세요.' },
      ],
      wordDistractors: ['pint', 'joint', 'poise'],
      definitionDistractors: [
        'The sharp tip of a writing instrument used for drawing lines',
        'A numerical score awarded for correct answers in a competition',
        'The main argument or central idea of a discussion or debate',
      ],
    }
  ),
  word('poison', '독', 6, 'noun',
    ['치료제', '영양분', '해독제', '비타민', '음료수', '향수', '조미료', '연고', '백신', '보약'],
    tips({
      etymology: '라틴어 \'potio(마시는 것)\'에서 유래하여, 원래는 약물을 뜻했으나 점차 치명적인 액체라는 의미로 변했습니다.',
      visual: '해골과 뼈가 그려진 보라색 병에서 연기가 피어오르는 위험한 장면을 상상해 보세요.',
      soundAlike: '\'포이즌\'은 \'부어있음\'과 발음이 비슷합니다. 독에 중독되어 몸이 퉁퉁 부어있는 모습을 연상하세요.',
      context: '음식물뿐만 아니라 질투나 증오 같은 해로운 감정을 비유할 때도 자주 쓰입니다.',
      synonymAntonym: '생명을 앗아가는 venom과 달리, 생명을 살리는 antidote를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'A substance that causes illness, injury, or death to a living organism when introduced or absorbed.',
      synonyms: ['venom', 'toxin', 'contaminant'],
      antonyms: ['antidote', 'remedy', 'cure'],
      exampleSentences: [
        { en: 'The bright colors of certain frogs serve as a warning that they carry a deadly substance.', ko: '특정 개구리들의 밝은 색깔은 그들이 치명적인 독을 품고 있다는 경고 역할을 합니다.' },
        { en: 'Jealousy acted like a slow-acting chemical that destroyed their long friendship.', ko: '질투는 그들의 오랜 우정을 파괴하는 서서히 퍼지는 독처럼 작용했습니다.' },
      ],
      wordDistractors: ['potion', 'piston', 'prison'],
      definitionDistractors: [
        'A medicinal liquid brewed from herbs and natural ingredients for healing',
        'A chemical compound used to preserve food and prevent spoilage',
        'A concentrated extract added to beverages for enhanced flavor',
      ],
    }
  ),
  word('polar', '극지의', 7, 'adjective',
    ['열대의', '온화한', '적도의', '습한', '건조한', '해안의', '내륙의', '수직의', '수평의', '평범한'],
    tips({
      etymology: '라틴어 \'polus(축의 끝)\'에서 유래하여 지구의 양 끝 지점인 극지방을 의미하게 되었습니다.',
      visual: '하얀 얼음으로 뒤덮인 남극 대륙 위에서 뒤뚱거리는 펭귄 가족을 상상해 보세요.',
      soundAlike: '\'폴라\' 발음이 겨울에 입는 \'폴라티\'와 비슷하죠? 추운 극지방에서 입는 옷이라고 생각하세요.',
      context: '지리학이나 기후학에서 남극과 북극의 환경을 설명할 때 필수적으로 등장하는 단어입니다.',
      synonymAntonym: '추운 지역을 뜻하는 arctic과 비슷하지만, 따뜻한 tropical과는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'Relating to the North or South Pole or the regions around them.',
      synonyms: ['arctic', 'glacial', 'freezing'],
      antonyms: ['tropical', 'equatorial', 'temperate'],
      exampleSentences: [
        { en: 'Scientists are studying the melting of the polar ice caps due to global warming.', ko: '과학자들은 지구 온난화로 인한 극지방 빙하의 해빙을 연구하고 있습니다.' },
        { en: 'The expedition team faced extreme conditions during their journey across the polar plateau.', ko: '탐험대는 남극 고원을 가로지르는 여정 동안 극한의 상황에 직면했습니다.' },
      ],
      wordDistractors: ['pillar', 'molar', 'solar'],
      definitionDistractors: [
        'Having a strong magnetic charge that attracts nearby metallic objects',
        'Describing something that divides opinion into two opposing sides',
        'Relating to a circular orbit around a central gravitational body',
      ],
    }
  ),
  word('pole', '장대, 극', 4, 'noun',
    ['밧줄', '사슬', '널빤지', '벽돌', '기와', '타일', '철사', '못', '볼트', '나사'],
    tips({
      etymology: '라틴어 \'palus(말뚝)\'에서 유래하여 길고 가느다란 막대를 뜻하게 되었으며, 지구의 극(pole)이라는 의미도 가집니다.',
      visual: '깃발이 꽂힌 긴 장대나, 지구본의 꼭대기와 바닥에 있는 북극과 남극을 상상해 보세요.',
      soundAlike: '\'폴\'이라는 발음이 \'폴대\'와 비슷하게 들려서 긴 막대기를 떠올리면 기억하기 쉽습니다.',
      context: '텐트를 세울 때 쓰는 장대, 낚싯대, 또는 지구의 북극(North Pole)과 남극(South Pole)을 가리킬 때 사용됩니다.',
      synonymAntonym: '막대를 뜻하는 rod, stick과 유사하며, 지리적 의미에서는 equator(적도)와 대조됩니다.',
    }),
    {
      definition: 'A long, slender, rounded piece of wood or metal, or either of the two points at the extreme north and south of the earth.',
      synonyms: ['rod', 'stick', 'post'],
      antonyms: ['equator', 'center', 'middle'],
      exampleSentences: [
        { en: 'He used a long pole to hang the flag at the top of the building.', ko: '그는 건물 꼭대기에 깃발을 걸기 위해 긴 장대를 사용했다.' },
        { en: 'The North Pole is covered with ice and is one of the coldest places on Earth.', ko: '북극은 얼음으로 뒤덮여 있으며 지구에서 가장 추운 곳 중 하나입니다.' },
      ],
      wordDistractors: ['poll', 'poke', 'mole'],
      definitionDistractors: [
        'A deep hole dug in the ground to extract water or minerals',
        'A flat open area of land used for agricultural purposes',
        'A vertical support structure embedded in concrete for stability',
      ],
    }
  ),
  word('police', '경찰', 3, 'noun',
    ['소방관', '군인', '의사', '교사', '판사', '변호사', '기자', '공무원', '간호사', '운전사'],
    tips({
      etymology: '그리스어 \'polis(도시)\'에서 유래하여 도시의 질서를 유지하는 사람들을 의미하게 되었습니다.',
      visual: '파란색 제복을 입고 순찰차를 타며 거리를 순찰하는 경찰관의 모습을 상상해 보세요.',
      soundAlike: '\'폴리스\' 발음이 \'풀리스(풀어주지 않다)\'와 비슷하다고 생각하며 범죄자를 놓아주지 않는 이미지를 연결하세요.',
      context: '범죄 예방, 교통 단속, 시민 보호 등을 담당하는 공공 기관 또는 그 구성원을 가리킬 때 사용됩니다.',
      synonymAntonym: '법 집행 기관을 뜻하는 law enforcement와 유사하며, 범죄자를 뜻하는 criminal과 대조됩니다.',
    }),
    {
      definition: 'The civil force of a national or local government, responsible for the prevention and detection of crime and the maintenance of public order.',
      synonyms: ['law enforcement', 'constabulary', 'officers'],
      antonyms: ['criminal', 'lawbreaker', 'offender'],
      exampleSentences: [
        { en: 'The police arrived at the scene within minutes of receiving the emergency call.', ko: '경찰은 긴급 신고를 받은 지 몇 분 만에 현장에 도착했습니다.' },
        { en: 'Local police are working hard to keep the neighborhood safe.', ko: '지역 경찰은 동네의 안전을 지키기 위해 열심히 일하고 있습니다.' },
      ],
      wordDistractors: ['polite', 'polish', 'policy'],
      definitionDistractors: [
        'A private security company hired to protect commercial buildings',
        'A volunteer group that organizes community events and fundraisers',
        'A government agency responsible for managing public transportation',
      ],
    }
  ),
  word('policy', '정책', 5, 'noun',
    ['10월', '시각, 비전', '동료', '(집합적)고객들,\n(변호사,건축가 등의)모든 의뢰인', '음조', '사전', '로스앤젤레스', '애리조나 (미국 주)', '존경, 공경', '힌트, 암시'],
    tips({
      etymology: '도시를 뜻하는 그리스어 \'polis\'에서 유래하여 국가나 조직을 다스리는 원칙을 의미하게 되었습니다.',
      visual: '회사의 규정집이나 정부의 공식 문서를 들고 있는 정치인의 모습을 상상해 보세요.',
      soundAlike: '\'빨리(palli) 시(cy)\'행해야 하는 국가의 중요한 규칙이라고 연상해 보세요.',
      context: '보험 계약이나 학교 교칙, 정부의 경제 운영 방침 등을 설명할 때 주로 사용됩니다.',
      synonymAntonym: '유의어로는 strategy가 있고, 반의어로는 무질서를 뜻하는 chaos나 anarchy를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'A set of ideas or a plan of what to do in particular situations that has been agreed to officially by a group of people, a business organization, or a government.',
      synonyms: ['strategy', 'guideline', 'protocol'],
      antonyms: ['disorganization', 'lawlessness', 'indecision'],
      exampleSentences: [
        { en: 'The government recently implemented a new environmental protection measure to reduce carbon emissions.', ko: '정부는 탄소 배출을 줄이기 위해 새로운 환경 보호 정책을 최근 시행했습니다.' },
        { en: 'Every employee must strictly follow the company safety regulations while operating heavy machinery.', ko: '모든 직원은 중장비를 운전하는 동안 회사의 안전 정책을 엄격히 준수해야 합니다.' },
      ],
      wordDistractors: ['polity', 'politic', 'poultice'],
      definitionDistractors: [
        'A formal written contract between two parties outlining legal obligations',
        'An elected representative who speaks on behalf of a constituency',
        'A public statement issued by an authority to announce a new regulation',
      ],
    }
  ),
  word('polish', '닦다', 8, 'verb',
    ['더럽히다', '긁다', '부식시키다', '산화시키다', '변색시키다', '훼손하다', '손상시키다', '흐리게하다', '마모시키다', '퇴색시키다'],
    tips({
      etymology: '라틴어 \'polire\'에서 유래되었으며, 이는 \'매끄럽게 만들다\'라는 의미를 담고 있습니다.',
      visual: '구두약이나 광택제를 천에 묻혀 낡은 구두가 반짝거릴 때까지 문지르는 모습을 상상하세요.',
      soundAlike: '발음이 \'빨리\'와 비슷하므로, 손을 \'빨리\' 움직여서 광을 내는 장면을 연상하면 쉽습니다.',
      context: '가구, 신발, 금속 제품의 표면을 매끄럽고 윤기 나게 문질러 닦을 때 사용하는 동사입니다.',
      synonymAntonym: '광택을 내는 shine, buff와 유사하며, 반대로 더럽히는 tarnish와 대조됩니다.',
    }),
    {
      definition: 'To make the surface of something smooth and shiny by rubbing it.',
      synonyms: ['shine', 'buff', 'burnish'],
      antonyms: ['tarnish', 'dull', 'scratch'],
      exampleSentences: [
        { en: 'He spent the afternoon polishing his shoes until they gleamed.', ko: '그는 오후 내내 구두가 반짝거릴 때까지 닦았다.' },
        { en: 'She polished the silver candlesticks before the dinner party.', ko: '그녀는 만찬 파티 전에 은 촛대를 닦았다.' },
      ],
      wordDistractors: ['abolish', 'relish', 'publish'],
      definitionDistractors: [
        'To remove unwanted marks or blemishes from a painted surface',
        'To apply a protective coating to prevent damage from moisture',
        'To refine or improve a written document through careful editing',
      ],
    }
  ),
  word('polite', '공손한', 6, 'adjective',
    ['무례한', '거친', '오만한', '냉담한', '성급한', '불친절한', '공격적인', '이기적인', '부주의한', '엄격한'],
    tips({
      etymology: '라틴어 politus에서 유래되었으며, 이는 \'닦여진\' 또는 \'매끄러운\'이라는 뜻으로 교양 있게 다듬어진 태도를 의미합니다.',
      visual: '호텔 지배인이 허리를 굽혀 손님을 맞이하며 정중하게 인사하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'폴라이트\'이므로, \'폴(fall)하고 라이트(light)하게\' 즉, 가볍고 부드럽게 고개를 숙이는 예의 바른 모습을 연상하세요.',
      context: '식당에서 주문을 하거나 처음 보는 사람에게 길을 물어볼 때 갖춰야 할 기본적인 태도입니다.',
      synonymAntonym: 'courteous와는 정중함이라는 가치를 공유하며, rude와는 정반대의 무례한 성질을 가집니다.',
    }),
    {
      definition: 'behaving in a way that is socially correct and shows understanding of and care for other people\'s feelings',
      synonyms: ['courteous', 'respectful', 'civil'],
      antonyms: ['rude', 'impolite', 'discourteous'],
      exampleSentences: [
        { en: 'The young man offered his seat to the elderly woman in a very respectful manner.', ko: '그 젊은 남자는 매우 예의 바른 태도로 노인 여성에게 자리를 양보했습니다.' },
        { en: 'It is important to use a gentle tone of voice when speaking to strangers.', ko: '낯선 사람과 대화할 때는 부드러운 목소리 톤을 사용하는 것이 중요합니다.' },
      ],
      wordDistractors: ['politic', 'petite', 'finite'],
      definitionDistractors: [
        'Speaking in a formal and elaborate manner using complex vocabulary',
        'Being cautious and reserved when expressing personal opinions',
        'Acting in a quiet and subdued way to avoid drawing attention',
      ],
    }
  ),
  word('politics', '정치', 7, 'noun',
    ['경제', '사회', '문화', '역사', '지리', '철학', '법률', '행정', '외교', '교육'],
    tips({
      etymology: '그리스어 \'polis(도시 국가)\'에서 유래하여 시민들이 함께 살아가는 방식을 결정하는 활동을 뜻합니다.',
      visual: '국회의사당에서 여러 사람들이 모여 열띤 토론을 벌이는 장면을 상상해 보세요.',
      soundAlike: '\'팔리틱스\'라고 발음하며, 정책이 팔리(palli)도록 설득하는 기술이라고 연상해 보세요.',
      context: '선거철이 되면 뉴스나 신문 기사에서 가장 자주 등장하는 주제입니다.',
      synonymAntonym: '정부 운영을 뜻하는 government와 유의어이며, 무정부 상태인 anarchy와 반대됩니다.',
    }),
    {
      definition: 'The activities associated with the governance of a country or area, especially the debate between parties having power.',
      synonyms: ['government', 'statesmanship', 'diplomacy'],
      antonyms: ['anarchy', 'lawlessness', 'disorganization'],
      exampleSentences: [
        { en: 'Many young people are becoming increasingly interested in local government and national affairs.', ko: '많은 젊은이들이 지방 정부와 국가 사무에 점점 더 많은 관심을 보이고 있습니다.' },
        { en: 'The discussion at the dinner table quickly turned to the upcoming presidential election.', ko: '저녁 식사 자리에서의 토론은 곧 다가올 대통령 선거 이야기로 빠르게 전환되었습니다.' },
      ],
      wordDistractors: ['polemics', 'logistics', 'analytics'],
      definitionDistractors: [
        'The study of ethical principles and moral philosophy in society',
        'The management of financial resources within a large organization',
        'The practice of negotiating trade agreements between foreign nations',
      ],
    }
  ),
  word('poll', '투표', 4, 'noun',
    ['그물', '행위, 증서', '민주주의자', '거절, 부인', '양, 금액', '고생물학자', '미끄러짐', '~한 마음 상태', '조각, 패치', '하늘'],
    tips({
      etymology: '중세 영어에서 \'머리\'를 뜻하던 단어로, 투표할 때 사람들의 머릿수를 세던 것에서 유래했습니다.',
      visual: '선거날 사람들이 투표소 앞에 길게 줄을 서서 차례를 기다리는 모습을 상상해 보세요.',
      soundAlike: '북극을 뜻하는 \'pole\'과 발음이 같으므로, 북극곰이 투표를 하고 있는 엉뚱한 장면으로 기억하세요.',
      context: '정치적인 선거뿐만 아니라 대중의 의견을 묻는 설문조사나 여론조사 상황에서 자주 쓰입니다.',
      synonymAntonym: '선거를 뜻하는 election과 비슷하지만, poll은 개별적인 투표 행위나 여론조사에 더 집중된 표현입니다.',
    }),
    {
      definition: 'The process of voting in an election or a survey conducted to record the opinion of a particular group of people.',
      synonyms: ['survey', 'ballot', 'census'],
      antonyms: ['appointment', 'dictation', 'unanimity'],
      exampleSentences: [
        { en: 'The latest public opinion shows that the majority of citizens support the new environmental policy.', ko: '최근의 여론조사는 대다수의 시민들이 새로운 환경 정책을 지지한다는 것을 보여줍니다.' },
        { en: 'Long queues formed at every local station as people rushed to cast their votes before closing time.', ko: '마감 시간 전에 투표를 하려는 사람들이 몰려들면서 모든 지역 투표소에 긴 줄이 늘어섰습니다.' },
      ],
      wordDistractors: ['toll', 'stroll', 'doll'],
      definitionDistractors: [
        'A long wooden or metal bar used to propel a boat through water',
        'A tax or fee charged for using a road, bridge, or tunnel',
        'A formal gathering of people to discuss matters of shared interest',
      ],
    }
  ),
  word('pollute', '오염시키다', 5, 'verb',
    ['정화하다', '보존하다', '개선하다', '치료하다', '보호하다', '청소하다', '복구하다', '유지하다', '강화하다', '건설하다'],
    tips({
      etymology: '라틴어 \'polluere\'에서 유래되었으며, \'더럽히다\'라는 의미를 담고 있습니다.',
      visual: '맑은 강물에 검은 기름이 퍼져나가는 이미지를 상상해 보세요.',
      soundAlike: '발음이 \'팔루트\'와 비슷하므로, 나쁜 물질을 \'팔(p)아\'서 강을 망친다고 연상해 보세요.',
      context: '환경 오염이나 공기 질의 저하를 다루는 뉴스 기사에서 자주 등장합니다.',
      synonymAntonym: '깨끗하게 만드는 \'purify\'와 반대되는 개념으로 기억하면 쉽습니다.',
    }),
    {
      definition: 'to make land, water, or air dirty and dangerous to use by adding harmful substances',
      synonyms: ['contaminate', 'taint', 'befoul'],
      antonyms: ['purify', 'cleanse', 'sanitize'],
      exampleSentences: [
        { en: 'Toxic chemicals from the factory continue to contaminate the local river system.', ko: '공장에서 나오는 독성 화학 물질이 지역 강 시스템을 계속해서 오염시키고 있습니다.' },
        { en: 'Exhaust fumes from millions of cars significantly degrade the air quality in the city.', ko: '수백만 대의 자동차에서 나오는 배기가스는 도시의 공기 질을 심각하게 더럽힙니다.' },
      ],
      wordDistractors: ['pollard', 'volute', 'dilute'],
      definitionDistractors: [
        'To scatter seeds or small particles evenly across a wide area',
        'To reduce the concentration of a solution by adding more liquid',
        'To circulate fresh air through a room or enclosed space',
      ],
    }
  ),
  word('pond', '못', 6, 'noun',
    ['바다', '강', '시냇물', '폭포', '우물', '파도', '해변', '호수', '수영장', '분수'],
    tips({
      etymology: '고대 영어 \'pund\'에서 유래되었으며, 가두어 둔 물이라는 뜻을 가지고 있습니다.',
      visual: '공원 한가운데 연꽃이 떠 있고 개구리가 뛰어오르는 작은 물웅덩이를 상상해 보세요.',
      soundAlike: '\'판다\'가 연못가에서 대나무를 먹고 있는 모습을 연상하면 발음이 기억하기 쉽습니다.',
      context: '주로 정원이나 공원에 인공적으로 조성된 작은 규모의 수역을 말할 때 자주 쓰입니다.',
      synonymAntonym: '호수보다는 작고 웅덩이보다는 큰 물줄기를 떠올리며 pool과 비교해 보세요.',
    }),
    {
      definition: 'A small body of still water formed naturally or by hollowing or embanking.',
      synonyms: ['pool', 'lagoon', 'tarn'],
      antonyms: ['ocean', 'sea', 'desert'],
      exampleSentences: [
        { en: 'The children enjoyed feeding the ducks at the local park.', ko: '아이들은 지역 공원에 있는 연못에서 오리들에게 먹이 주는 것을 즐겼습니다.' },
        { en: 'Goldfish were swimming peacefully beneath the surface of the garden water feature.', ko: '금붕어들이 정원 연못의 수면 아래에서 평화롭게 헤엄치고 있었습니다.' },
      ],
      wordDistractors: ['bond', 'fond', 'wand'],
      definitionDistractors: [
        'A wide, fast-flowing stream that empties into a larger river',
        'A deep underground reservoir that stores rainwater naturally',
        'A large artificial basin constructed for recreational swimming',
      ],
    }
  ),
  word('pool', '판돈', 7, 'noun',
    ['수영장', '웅덩이', '당구', '인력', '공동체', '저수지', '비축', '공유', '연합', '자금'],
    tips({
      etymology: '프랑스어 \'poule(암탉)\'에서 유래했으며, 카드 게임에서 승자가 가져가는 판돈을 의미하게 되었습니다.',
      visual: '도박판 중앙에 수북이 쌓여 있는 칩이나 지폐 뭉치를 상상해 보세요.',
      soundAlike: '수영장(pool)에 물 대신 돈이 가득 차 있다고 생각하면 기억하기 쉽습니다.',
      context: '포커나 경마 같은 도박 상황에서 참가자들이 건 돈의 총액을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: 'stake나 pot과 비슷하며, 개인이 가져가는 배당금인 payout과는 반대되는 전체 금액의 개념입니다.',
    }),
    {
      definition: 'The total amount of money bet by different people in a game or on a race.',
      synonyms: ['stakes', 'pot', 'kitty'],
      antonyms: ['payout', 'dividend', 'loss'],
      exampleSentences: [
        { en: 'The winner of the poker tournament took home the entire pool of prize money.', ko: '포커 대회의 우승자가 상금 판돈 전체를 집으로 가져갔다.' },
        { en: 'Everyone contributed ten dollars to the betting pool for the final match.', ko: '모두가 결승전을 위한 내기 판돈으로 10달러씩 기부했다.' },
      ],
      wordDistractors: ['spool', 'stool', 'drool'],
      definitionDistractors: [
        'A shared collection of vehicles available for use by a group of people',
        'A shallow body of standing water formed after heavy rainfall',
        'A group of skilled workers assembled for a specific temporary project',
      ],
    }
  ),
  word('poor', '가난한', 1, 'adjective',
    ['부유한', '풍족한', '화려한', '성공적인', '강력한', '풍부한', '고귀한', '사치스러운', '넉넉한', '우수한'],
    tips({
      etymology: '라틴어 \'pauper\'에서 유래되었으며, 이는 \'적게 생산하다\'라는 의미를 담고 있어 자원이 부족한 상태를 나타냅니다.',
      visual: '텅 빈 지갑이나 낡아서 구멍 난 옷을 입고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '비가 쏟아지는 소리인 \'푸어(pour)\'와 발음이 비슷합니다. 비가 너무 많이 와서 농작물을 망쳐 가난해진 상황을 연상해 보세요.',
      context: '경제적인 빈곤뿐만 아니라 건강 상태가 나쁘거나 실력이 형편없을 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: '부유한을 뜻하는 wealthy와 반대되는 개념이며, 결핍을 뜻하는 needy와 비슷한 맥락에서 사용됩니다.',
    }),
    {
      definition: 'Lacking sufficient money to live at a standard considered comfortable or normal in a society.',
      synonyms: ['impoverished', 'penniless', 'destitute'],
      antonyms: ['wealthy', 'affluent', 'prosperous'],
      exampleSentences: [
        { en: 'The charity provides food and shelter for families living in the most deprived areas.', ko: '그 자선 단체는 가장 빈곤한 지역에 사는 가족들에게 음식과 숙소를 제공합니다.' },
        { en: 'Despite his humble beginnings and lack of money, he never lost his dignity.', ko: '그의 가난한 시작과 돈의 부족에도 불구하고, 그는 결코 존엄성을 잃지 않았습니다.' },
      ],
      wordDistractors: ['pour', 'pore', 'moor'],
      definitionDistractors: [
        'Having a low quality or standard that fails to meet expectations',
        'Feeling physically weak or exhausted after a long period of effort',
        'Lacking in flavor or seasoning, resulting in a bland taste',
      ],
    }
  ),
  word('pop', '팝', 4, 'noun',
    ['클래식', '재즈', '민요', '소음', '침묵', '전통', '악기', '가사', '리듬', '화음'],
    tips({
      etymology: '대중적이라는 뜻의 \'popular\'에서 유래하여 현대 대중음악을 일컫는 말이 되었습니다.',
      visual: '화려한 무대 위에서 마이크를 잡고 노래하는 아이돌 가수의 공연 장면을 상상해 보세요.',
      soundAlike: '풍선이 \'팝!\' 하고 터지듯 톡톡 튀고 경쾌한 리듬의 음악을 떠올리면 쉽습니다.',
      context: '라디오나 차트에서 가장 자주 들리는 유행하는 노래들을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '대중음악을 뜻하는 mainstream music과 유사하며, 비주류 음악인 underground music과 대비됩니다.',
    }),
    {
      definition: 'A style of modern music with a strong rhythm and tunes that are easy to remember and liked by many people.',
      synonyms: ['popular music', 'chart-topper', 'mainstream music'],
      antonyms: ['classical music', 'folk music', 'underground music'],
      exampleSentences: [
        { en: 'The radio station plays the latest hits from the global music charts all day long.', ko: '그 라디오 방송국은 하루 종일 세계 음악 차트의 최신 유행곡들을 틀어줍니다.' },
        { en: 'Many teenagers enjoy listening to catchy melodies and upbeat rhythms during their free time.', ko: '많은 십 대들이 여가 시간에 기억하기 쉬운 멜로디와 경쾌한 리듬을 듣는 것을 즐깁니다.' },
      ],
      wordDistractors: ['prop', 'plop', 'chop'],
      definitionDistractors: [
        'A sudden sharp explosive sound made by bursting something',
        'A sweetened carbonated beverage sold in bottles or cans',
        'A quick informal visit to a nearby place or person',
      ],
    }
  ),
  word('pope', '교황', 9, 'noun',
    ['추기경', '수도사', '신부', '수녀', '주교', '신도', '성당', '사제', '선교사', '신학자'],
    tips({
      etymology: '그리스어 \'pappas\'에서 유래했으며, 이는 \'아버지\'를 뜻하는 친근한 표현입니다.',
      visual: '바티칸 성 베드로 광장의 발코니에서 흰 옷을 입고 군중에게 손을 흔드는 지도자를 상상하세요.',
      soundAlike: '발음이 \'포프\'와 유사하므로, \'포근한\' 미소를 지닌 종교 지도자로 연상해 보세요.',
      context: '가톨릭 교회에서 가장 높은 지위에 있는 인물을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '교황을 뜻하는 Pontiff와 유사하며, 평신도를 뜻하는 Layman과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The bishop of Rome and the supreme leader of the Roman Catholic Church worldwide.',
      synonyms: ['pontiff', 'holy father', 'bishop of rome'],
      antonyms: ['layman', 'atheist', 'follower'],
      exampleSentences: [
        { en: 'Thousands of people gathered in the square to hear the speech delivered by the holy leader.', ko: '수천 명의 사람들이 성스러운 지도자의 연설을 듣기 위해 광장에 모였습니다.' },
        { en: 'The election of a new sovereign of the Vatican is a process steeped in centuries of tradition.', ko: '바티칸의 새로운 통치자를 선출하는 것은 수세기의 전통이 깃든 과정입니다.' },
      ],
      wordDistractors: ['rope', 'cope', 'scope'],
      definitionDistractors: [
        'A senior military officer who commands a large division of troops',
        'A respected elder in a community who mediates local disputes',
        'A head of state who governs a constitutional monarchy',
      ],
    }
  ),
  word('popular', '인기 있는', 5, 'adjective',
    ['추정의', '야심 있는', '끝없는', '비범한', '인색한', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인'],
    tips({
      etymology: '라틴어 populus(사람들)에서 유래하여 많은 사람들에게 속하거나 사랑받는다는 뜻을 가집니다.',
      visual: '수많은 팬들이 연예인을 향해 환호하며 둘러싸고 있는 콘서트장을 상상해 보세요.',
      soundAlike: '파퓰러 -> \'파\'란색 \'풀\'밭에 \'러\'브(Love)가 가득할 정도로 사람들이 많이 모인 모습.',
      context: '학교에서 가장 친구가 많거나 차트에서 1위를 차지하는 노래를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '유명한(famous)과 비슷하지만, 대중적으로 널리 선호된다는 뉘앙스가 강하며 반대로는 인기가 없는(unpopular)이 있습니다.',
    }),
    {
      definition: 'liked, enjoyed, or supported by many people or by a specific group',
      synonyms: ['well-liked', 'famous', 'trendy'],
      antonyms: ['unpopular', 'disliked', 'obscure'],
      exampleSentences: [
        { en: 'The new cafe became very famous for its unique desserts and cozy atmosphere.', ko: '그 새로운 카페는 독특한 디저트와 아늑한 분위기로 매우 인기가 많아졌습니다.' },
        { en: 'Soccer is the most widely played sport in many countries around the world.', ko: '축구는 전 세계 많은 국가에서 가장 널리 즐기는 스포츠입니다.' },
      ],
      wordDistractors: ['populace', 'modular', 'peculiar'],
      definitionDistractors: [
        'Being widely available in stores and easy to purchase at low cost',
        'Having a traditional design that has remained unchanged for decades',
        'Relating to something that appeals only to a small niche audience',
      ],
    }
  ),
  word('population', '인구', 6, 'noun',
    ['조용함, 고요', '은뎀부 (아프리카 민족)', '관개, 관수', '협박', '브라질', '불협화음', '용제, 용매', '시설', '지옥', '물가'],
    tips({
      etymology: '라틴어 \'populus(사람들)\'에서 유래하여 특정 지역에 거주하는 전체 사람들의 집단을 의미합니다.',
      visual: '지도 위에 수많은 점이 찍혀 있고 그 점들이 모여 거대한 숫자를 이루는 모습을 상상해 보세요.',
      soundAlike: '\'파퓰레이션\'의 앞부분이 \'파퓰러(popular, 인기 있는)\'와 비슷하므로 사람들이 많이 모인 상태를 연상하세요.',
      context: '통계 자료나 뉴스에서 국가의 크기나 도시의 밀집도를 설명할 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '거주자라는 뜻의 inhabitants와 유의어이며, 아무도 없는 상태인 emptiness와 반대됩니다.',
    }),
    {
      definition: 'The total number of people living in a particular country, city, or district.',
      synonyms: ['inhabitants', 'residents', 'community'],
      antonyms: ['emptiness', 'void', 'solitude'],
      exampleSentences: [
        { en: 'The government is concerned about the rapidly aging society and the shrinking number of young people.', ko: '정부는 급격히 고령화되는 사회와 줄어드는 젊은 층 인구에 대해 우려하고 있습니다.' },
        { en: 'Tokyo has a massive density of residents compared to other major cities in the world.', ko: '도쿄는 세계의 다른 주요 도시들과 비교했을 때 엄청난 인구 밀도를 가지고 있습니다.' },
      ],
      wordDistractors: ['pollution', 'simulation', 'publication'],
      definitionDistractors: [
        'The spread of people from cities to rural areas over a long period',
        'A statistical measure of economic output within a specific region',
        'The diversity of species found within a particular ecosystem',
      ],
    }
  ),
  word('pork', '돼지고기', 7, 'noun',
    ['소고기', '닭고기', '양고기', '생선', '채소', '과일', '곡물', '우유', '달걀', '버터'],
    tips({
      etymology: '프랑스어 \'porc\'에서 유래되었으며, 살아있는 돼지(pig)와 요리된 고기를 구분하기 위해 사용되기 시작했습니다.',
      visual: '노릇노릇하게 구워진 삼겹살이나 돈가스의 바삭한 단면을 상상해 보세요.',
      soundAlike: '포크(fork)로 \'폭(pork)\' 찍어 먹는 돼지고기 요리를 연상하면 쉽습니다.',
      context: '식당 메뉴판이나 마트의 육류 코너에서 가장 흔하게 볼 수 있는 식재료 단어입니다.',
      synonymAntonym: '돼지를 뜻하는 pig와 혼동하기 쉽지만, 식탁 위의 고기는 반드시 이 단어를 써야 합니다.',
    }),
    {
      definition: 'the flesh of a pig used as food, often prepared as chops, ham, or bacon',
      synonyms: ['pigmeat', 'swineflesh', 'ham'],
      antonyms: ['beef', 'poultry', 'vegetable'],
      exampleSentences: [
        { en: 'Many traditional Korean dishes feature spicy marinated meat from a pig.', ko: '많은 전통 한국 요리들은 매콤하게 양념된 돼지고기를 특징으로 합니다.' },
        { en: 'The chef roasted the meat slowly until it became tender and juicy.', ko: '요리사는 고기가 부드럽고 육즙이 풍부해질 때까지 천천히 구웠습니다.' },
      ],
      wordDistractors: ['porch', 'fork', 'cork'],
      definitionDistractors: [
        'A thick stew made from various root vegetables and seasoning',
        'The outer rind or skin of a fruit that is removed before eating',
        'A cut of red meat taken from the rib section of cattle',
      ],
    }
  ),
  word('port', '항구', 4, 'noun',
    ['공항', '기차역', '정류장', '도로', '운하', '터널', '교량', '활주로', '주차장', '검문소'],
    tips({
      etymology: '라틴어 \'portus\'에서 유래했으며, 물건을 나르다(carry)라는 의미의 \'portare\'와도 연결되어 물자가 오가는 통로를 뜻합니다.',
      visual: '거대한 컨테이너선이 부두에 정박해 있고 크레인이 분주하게 움직이는 바닷가 풍경을 상상해 보세요.',
      soundAlike: '컴퓨터 뒷면에 케이블을 꽂는 구멍도 \'포트\'라고 부르는데, 데이터가 드나드는 항구라고 생각하면 쉽습니다.',
      context: '무역이나 여행의 중심지로 언급되며, 주로 배가 정박하거나 화물을 싣고 내리는 장소를 설명할 때 쓰입니다.',
      synonymAntonym: 'harbor와 유사하지만 port는 상업적 시설이 갖춰진 큰 규모를 뜻하며, 내륙을 뜻하는 inland와 대비됩니다.',
    }),
    {
      definition: 'A coastal location with facilities for leading and unloading ships and providing shelter for them.',
      synonyms: ['harbor', 'dock', 'pier'],
      antonyms: ['inland', 'interior', 'mainland'],
      exampleSentences: [
        { en: 'The cargo ship docked at the busy harbor to unload thousands of containers.', ko: '화물선은 수천 개의 컨테이너를 내리기 위해 붐비는 항구에 정박했습니다.' },
        { en: 'Many coastal cities grew wealthy by becoming major centers for international maritime trade.', ko: '많은 해안 도시들은 국제 해상 무역의 주요 거점 항구가 됨으로써 부유해졌습니다.' },
      ],
      wordDistractors: ['fort', 'sort', 'sport'],
      definitionDistractors: [
        'A type of strong, sweet red wine originally produced in Portugal',
        'A small opening in a ship through which cannons are fired',
        'The left side of a ship or aircraft when facing forward',
      ],
    }
  ),
  word('portion', '일부', 10, 'noun',
    ['전체', '완성', '결합', '통합', '수집', '연결', '총합', '연속', '중단', '배제'],
    tips({
      etymology: '라틴어 \'portio\'에서 유래되었으며, 이는 \'몫\'이나 \'할당량\'을 의미하여 전체에서 나누어진 조각을 뜻합니다.',
      visual: '피자 한 판에서 한 조각이 접시 위에 따로 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '포션(potion)과 발음이 비슷하지만, 마법의 약이 아니라 \'포\'크로 찍어 먹는 \'일부\'라고 기억하세요.',
      context: '식당에서 제공되는 1인분 식사량이나 유산 상속 시 나누어 받는 몫을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '전체를 뜻하는 whole이나 total과 반대되는 개념으로, part나 section과 유사한 의미를 가집니다.',
    }),
    {
      definition: 'A part of a whole that has been divided up or allocated to a specific person or purpose.',
      synonyms: ['segment', 'section', 'fraction'],
      antonyms: ['entirety', 'whole', 'total'],
      exampleSentences: [
        { en: 'A significant portion of the annual budget is allocated to medical research and development.', ko: '연간 예산의 상당 부분이 의료 연구 및 개발에 할당됩니다.' },
        { en: 'The restaurant serves a generous portion of pasta that is enough for two people to share.', ko: '그 식당은 두 사람이 나누어 먹기에 충분할 정도로 푸짐한 양의 파스타를 제공합니다.' },
      ],
      wordDistractors: ['potion', 'caution', 'motion'],
      definitionDistractors: [
        'A specific ratio used to measure ingredients in a recipe',
        'A legal document that grants someone a share of an inheritance',
        'A designated area of land set aside for public recreation',
      ],
    }
  ),
  word('portrait', '초상', 5, 'noun',
    ['풍경화', '조각상', '정물화', '배경', '스케치', '전시회', '박물관', '예술가', '캔버스', '물감'],
    tips({
      etymology: '라틴어 \'pro-\'(앞으로)와 \'trahere\'(끌어내다)가 합쳐져 사람의 특징을 밖으로 끌어내어 보여준다는 의미에서 유래했습니다.',
      visual: '미술관 벽에 걸린 귀족의 얼굴 그림이나 스마트폰의 세로 모드 화면을 떠올려 보세요.',
      soundAlike: '\'포트레이트\'에서 \'포트(Port)\'를 항구라고 생각하고, 항구에 도착한 사람의 얼굴을 그린다고 연상해 보세요.',
      context: '주로 인물의 얼굴과 상반신을 중심으로 그린 그림이나 사진을 말할 때 사용되며, 문학적으로는 인물에 대한 묘사를 뜻하기도 합니다.',
      synonymAntonym: '사람의 모습을 담은 likeness와 유사하며, 배경을 중시하는 landscape와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A painting, drawing, photograph, or engraving of a person, especially one depicting only the face or head and shoulders.',
      synonyms: ['likeness', 'depiction', 'image'],
      antonyms: ['landscape', 'caricature', 'abstraction'],
      exampleSentences: [
        { en: 'The artist spent several months working on a detailed oil portrait of the queen.', ko: '그 화가는 여왕의 정교한 유화 초상화를 그리는 데 몇 달을 보냈다.' },
        { en: 'A large framed portrait of his grandfather hung prominently above the fireplace.', ko: '그의 할아버지의 커다란 액자 초상화가 벽난로 위에 눈에 띄게 걸려 있었다.' },
      ],
      wordDistractors: ['portray', 'partisan', 'patriot'],
      definitionDistractors: [
        'A wide scenic view of a natural landscape painted on a large canvas',
        'A detailed written biography describing the life of a famous person',
        'A sculpture carved from stone or marble depicting a historical figure',
      ],
    }
  ),
  word('pose', '자세', 6, 'noun',
    ['명 동물', '런던', '아빠', '시계소리', '내과 의사', '끄덕임', '동 mis', '추측', '아버지', '비애, 연민'],
    tips({
      etymology: '라틴어 \'ponere(놓다)\'에서 유래하여 몸을 특정 위치에 놓는다는 의미를 가집니다.',
      visual: '사진 작가 앞에서 허리에 손을 얹고 멋지게 서 있는 모델의 모습을 상상해 보세요.',
      soundAlike: '\'포즈\'라고 발음하며 우리가 사진 찍을 때 흔히 말하는 그 단어와 똑같습니다.',
      context: '주로 사진 촬영, 그림 모델, 혹은 요가 동작을 설명할 때 자주 쓰이는 단어입니다.',
      synonymAntonym: 'posture와 비슷하지만, pose는 의도적으로 연출된 동작이라는 느낌이 더 강합니다.',
    }),
    {
      definition: 'A particular way of standing or sitting, usually adopted for a photograph or artistic portrait.',
      synonyms: ['posture', 'stance', 'position'],
      antonyms: ['movement', 'motion', 'disorder'],
      exampleSentences: [
        { en: 'The model held a striking stance for the fashion photographer.', ko: '모델은 패션 사진작가를 위해 인상적인 자세를 취했습니다.' },
        { en: 'Yoga practitioners often maintain a steady balance in each physical alignment.', ko: '요가 수련자들은 각 신체 동작에서 종종 안정적인 균형을 유지합니다.' },
      ],
      wordDistractors: ['prose', 'poise', 'doze'],
      definitionDistractors: [
        'A difficult question or puzzle presented as a challenge to solve',
        'A deliberate act of pretending to be someone else to deceive others',
        'A brief dramatic performance presented on stage without dialogue',
      ],
    }
  ),
  word('position', '위치', 7, 'noun',
    ['형 al', '동굴', '목요일', '쌍동이', '뮤지컬; 음악의', '특성, 특징', '서명, 친필 사인', '형 ic', '고통', '정원'],
    tips({
      etymology: '라틴어 \'ponere(놓다)\'에서 유래하여 사물이 놓인 자리를 의미합니다.',
      visual: '지도 위에 핀이 꽂혀 있는 특정 지점을 상상해 보세요.',
      soundAlike: '포지션 - 축구 선수들이 각자 맡은 구역에 서 있는 모습을 연상하세요.',
      context: '직장에서의 직급이나 사회적 지위를 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'location과 유사하지만, 사회적 지위라는 맥락에서는 status와 통합니다.',
    }),
    {
      definition: 'The specific place or location where someone or something is situated.',
      synonyms: ['location', 'placement', 'spot'],
      antonyms: ['displacement', 'movement', 'dislodgment'],
      exampleSentences: [
        { en: 'The GPS tracker showed the exact coordinates of the vehicle\'s current location.', ko: 'GPS 추적기는 차량의 현재 위치에 대한 정확한 좌표를 보여주었습니다.' },
        { en: 'She applied for a managerial role to secure a higher rank within the company.', ko: '그녀는 회사 내에서 더 높은 직위를 확보하기 위해 관리직에 지원했습니다.' },
      ],
      wordDistractors: ['partition', 'petition', 'perdition'],
      definitionDistractors: [
        'A personal viewpoint or opinion held about a controversial topic',
        'The arrangement of furniture within a room for optimal comfort',
        'A competitive ranking assigned based on performance in a tournament',
      ],
    }
  ),
  word('positive', '긍정적인', 4, 'adjective',
    ['부정적인', '비관적인', '소극적인', '냉소적인', '비판적인', '회의적인', '무관심한', '절망적인', '부정확한', '불리한'],
    tips({
      etymology: '라틴어 \'ponere(놓다)\'에서 유래하여, 무언가를 확실하게 놓고 좋은 방향으로 바라본다는 의미를 담고 있습니다.',
      visual: '엄지손가락을 치켜들며 환하게 웃는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'파지티브\'라고 발음하며, \'파이팅!\' 하고 힘차게 외치는 긍정적인 에너지를 연상하세요.',
      context: '시험 결과가 좋거나, 밝은 미래를 기대하거나, 누군가를 격려할 때 자주 쓰입니다.',
      synonymAntonym: '낙관적인 optimistic과 비슷하며, 부정적인 negative와 정반대의 개념입니다.',
    }),
    {
      definition: 'expressing or characterized by approval, agreement, or a hopeful and constructive attitude',
      synonyms: ['optimistic', 'constructive', 'favorable'],
      antonyms: ['negative', 'pessimistic', 'unfavorable'],
      exampleSentences: [
        { en: 'She always tries to maintain a positive attitude even in difficult situations.', ko: '그녀는 어려운 상황에서도 항상 긍정적인 태도를 유지하려고 노력합니다.' },
        { en: 'The teacher gave positive feedback on the student\'s essay to encourage further improvement.', ko: '선생님은 학생의 에세이에 긍정적인 피드백을 주어 추가적인 향상을 격려했습니다.' },
      ],
      wordDistractors: ['posture', 'proactive', 'primitive'],
      definitionDistractors: [
        'Being absolutely certain about a fact without any room for doubt',
        'Having an electrical charge that repels similar charged particles',
        'Showing a strong preference for one option over all others',
      ],
    }
  ),
  word('possess', '소유하다', 5, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '자식 낳다', '환호하다, 기뻐하다', '(속박을) 풀다', '달래다', '보인 (see의 과거분사)', '망쳐놓다'],
    tips({
      etymology: '라틴어 potis(강력한)와 sedere(앉다)가 합쳐져 \'주인으로서 자리에 앉아 있다\'는 의미에서 유래했습니다.',
      visual: '금고 안에 가득 찬 보석들을 양팔로 껴안고 있는 부자의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'포제스\'와 비슷한데, \'포(4)개의 제(재)산을 스(슬)쩍 소유하다\'라고 연상해 보세요.',
      context: '단순히 물건을 가진 것뿐만 아니라 재능, 권력, 특징 등을 갖추고 있을 때도 자주 쓰입니다.',
      synonymAntonym: 'own과 유의어 관계이며, 무언가를 잃거나 결핍된 상태인 lack과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to have or own something, or to have a particular quality or ability',
      synonyms: ['own', 'hold', 'retain'],
      antonyms: ['lack', 'lose', 'surrender'],
      exampleSentences: [
        { en: 'The rare diamond is said to possess a mysterious power that protects its owner.', ko: '그 희귀한 다이아몬드는 소유자를 보호하는 신비한 힘을 지니고 있다고 전해진다.' },
        { en: 'Applicants for this position must possess excellent communication skills and a positive attitude.', ko: '이 직무의 지원자들은 뛰어난 의사소통 능력과 긍정적인 태도를 갖추어야 한다.' },
      ],
      wordDistractors: ['profess', 'process', 'recess'],
      definitionDistractors: [
        'To forcefully seize control of property belonging to another person',
        'To carefully inspect an object to determine its value or condition',
        'To store items in a secure location for future retrieval',
      ],
    }
  ),
  word('possible', '가능한', 6, 'adjective',
    ['예외적인', '안정적인', '불안정한', '(사람이) 지나치게 아부하는 / (물질이) 미끈미끈한', '다루기 힘든', '(멸종) 위기에 처한', '이해할 수 없는', '부당한, 근거 없는', '풀린, 펼쳐진', '긴급한, 위급한'],
    tips({
      etymology: '라틴어 \'posse(할 수 있다)\'에서 유래하여 어떤 일이 실제로 일어날 수 있는 상태를 나타냅니다.',
      visual: '미션 임파서블 영화의 긴박한 상황에서 불가능을 가능으로 바꾸는 장면을 상상해 보세요.',
      soundAlike: '\'파서블\' 발음이 \'파서(땅을 파서) 보물 찾기가 가능하다\'는 상황과 연결해 보세요.',
      context: '현실적인 계획이나 실현 가능한 목표를 세울 때 가장 자주 쓰이는 형용사입니다.',
      synonymAntonym: '할 수 있는 feasible과 절대 안 되는 impossible을 짝지어 기억하면 좋습니다.',
    }),
    {
      definition: 'able to be done, achieved, or to happen in a particular situation',
      synonyms: ['feasible', 'achievable', 'attainable'],
      antonyms: ['impossible', 'unlikely', 'hopeless'],
      exampleSentences: [
        { en: 'Please let me know the results as soon as it is to do so.', ko: '결과가 나오는 대로 가능한 한 빨리 알려주세요.' },
        { en: 'Scientists are exploring every avenue to find a solution to the problem.', ko: '과학자들은 그 문제에 대한 해결책을 찾기 위해 가능한 모든 수단을 탐색하고 있습니다.' },
      ],
      wordDistractors: ['passable', 'plausible', 'pliable'],
      definitionDistractors: [
        'Being highly likely to occur based on current evidence and trends',
        'Having the necessary skills or qualifications for a specific task',
        'Being permitted or allowed under the rules of a given situation',
      ],
    }
  ),
  word('post', '기둥', 7, 'noun',
    ['벽면', '지붕', '바닥', '창문', '계단', '천장', '울타리', '현관', '복도', '난간'],
    tips({
      etymology: '라틴어 \'positus\'에서 유래하여 \'고정되어 세워진 것\'이라는 의미를 담고 있습니다.',
      visual: '울타리를 지탱하기 위해 땅에 깊게 박혀 있는 굵고 단단한 나무 막대를 상상해 보세요.',
      soundAlike: '우체국(post office)에 편지를 부치러 갈 때 입구에 서 있는 커다란 기둥을 떠올려 보세요.',
      context: '건축이나 구조물을 세울 때 하중을 견디거나 경계를 표시하기 위해 수직으로 세운 지지대를 뜻합니다.',
      synonymAntonym: '무거운 것을 받치는 pillar와 비슷하며, 가로로 놓인 beam과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A long, sturdy piece of timber or metal set upright in the ground to support a structure.',
      synonyms: ['pillar', 'column', 'stake'],
      antonyms: ['beam', 'joist', 'rafter'],
      exampleSentences: [
        { en: 'The wooden fence was held firmly in place by a heavy iron post at each corner.', ko: '나무 울타리는 각 모서리에 있는 무거운 철제 기둥에 의해 단단히 고정되어 있었다.' },
        { en: 'Construction workers hammered a metal post into the ground to mark the boundary of the property.', ko: '건설 노동자들은 부지의 경계를 표시하기 위해 금속 기둥을 땅에 박았다.' },
      ],
      wordDistractors: ['host', 'roost', 'toast'],
      definitionDistractors: [
        'A message or package sent through the mail delivery system',
        'A job or official position held within an organization',
        'A written entry published on a website or social media platform',
      ],
    }
  ),
  word('poster', '포스터', 4, 'noun',
    ['광고지', '전단지', '간판', '잡지', '신문', '서적', '그림', '사진', '엽서', '명함'],
    tips({
      etymology: '말뚝(post)에 붙여서 사람들에게 알리던 것에서 유래했습니다.',
      visual: '영화관 벽면에 크게 붙어 있는 화려한 영화 홍보 이미지를 상상하세요.',
      soundAlike: '포수(catcher)가 터(ground)에 앉아 벽보를 보고 있는 모습을 연상해 보세요.',
      context: '주로 벽이나 게시판에 정보를 알리거나 장식을 위해 붙이는 큰 종이를 뜻합니다.',
      synonymAntonym: '공고문이나 게시물과 비슷하지만, 아무것도 없는 빈 벽과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A large printed picture or notice put up in a public place to advertise something or for decoration.',
      synonyms: ['placard', 'billboard', 'notice'],
      antonyms: ['original', 'blank', 'void'],
      exampleSentences: [
        { en: 'The students designed a colorful advertisement for the upcoming school festival.', ko: '학생들은 다가오는 학교 축제를 위해 화려한 광고 포스터를 디자인했습니다.' },
        { en: 'She pinned a large image of her favorite band onto the bedroom wall.', ko: '그녀는 자신이 가장 좋아하는 밴드의 커다란 포스터를 침실 벽에 핀으로 고정했습니다.' },
      ],
      wordDistractors: ['posture', 'rooster', 'bolster'],
      definitionDistractors: [
        'A person who delivers letters and packages to residential addresses',
        'A small printed card given to customers as proof of purchase',
        'A wooden frame used to display artwork at an exhibition',
      ],
    }
  ),
  word('pot', '단지', 5, 'noun',
    ['냄비', '항아리', '주전자', '그릇', '화분', '접시', '국자', '뚜껑', '수저', '식탁'],
    tips({
      etymology: '고대 영어 \'pott\'에서 유래했으며, 음식을 담거나 식물을 심는 둥근 용기를 뜻합니다.',
      visual: '꿀이 가득 담긴 곰돌이 푸의 둥근 단지를 상상해 보세요.',
      soundAlike: '발음이 \'팥\'과 비슷하므로, 팥죽을 끓이는 커다란 솥이나 단지를 연상하면 쉽습니다.',
      context: '주방에서 요리할 때나 정원에서 꽃을 심을 때 가장 흔하게 사용되는 단어입니다.',
      synonymAntonym: 'jar나 vessel과 비슷하며, 평평한 plate와는 반대되는 깊은 형태를 가집니다.',
    }),
    {
      definition: 'A rounded container, typically made of ceramic or metal, used for storage, cooking, or growing plants.',
      synonyms: ['jar', 'vessel', 'container'],
      antonyms: ['plate', 'tray', 'lid'],
      exampleSentences: [
        { en: 'She carefully placed the honey inside a small ceramic container.', ko: '그녀는 작은 도자기 단지 안에 꿀을 조심스럽게 담았습니다.' },
        { en: 'The gardener filled the clay vessel with fresh soil for the flowers.', ko: '정원사는 꽃을 심기 위해 흙으로 찰흙 단지를 채웠습니다.' },
      ],
      wordDistractors: ['pit', 'cot', 'dot'],
      definitionDistractors: [
        'A flat shallow dish used for serving food at the dinner table',
        'A large metal cauldron suspended over a fire for boiling water',
        'A decorative vase placed on a shelf to hold fresh flowers',
      ],
    }
  ),
  word('potato', '감자', 2, 'noun',
    ['고구마', '옥수수', '당근', '양파', '마늘', '호박', '오이', '상추', '배추', '무'],
    tips({
      etymology: '스페인어 \'patata\'에서 유래되었으며, 원래는 고구마를 뜻하던 단어가 현재의 구황작물을 지칭하게 되었습니다.',
      visual: '흙 묻은 갈색 껍질 속에 뽀얀 속살이 들어있는 둥근 뿌리 채소를 상상해 보세요.',
      soundAlike: '포테이토 칩(Potato chips)의 바삭한 소리를 떠올리면 기억하기 쉽습니다.',
      context: '주로 요리 재료나 농작물을 다루는 식당, 마트, 농장 관련 대화에서 자주 등장합니다.',
      synonymAntonym: 'spud라는 구어체 표현이 있으며, 곡물이나 과일과는 다른 뿌리 채소임을 기억하세요.',
    }),
    {
      definition: 'A round starchy vegetable with brown or red skin that grows underground and is used widely as food.',
      synonyms: ['spud', 'tuber', 'root vegetable'],
      antonyms: ['fruit', 'grain', 'leafy green'],
      exampleSentences: [
        { en: 'She mashed the boiled vegetables with butter and milk to make a side dish.', ko: '그녀는 곁들임 요리를 만들기 위해 삶은 채소를 버터와 우유와 함께 으깼습니다.' },
        { en: 'Farmers harvested a large crop of these starchy tubers after the rainy season.', ko: '농부들은 장마가 끝난 후 이 녹말질 뿌리 작물을 대량으로 수확했습니다.' },
      ],
      wordDistractors: ['tomato', 'placebo', 'portato'],
      definitionDistractors: [
        'A sweet tropical fruit with soft flesh and a large central seed',
        'A leafy green vegetable commonly used in fresh salads',
        'A type of grain harvested from tall grasses in warm climates',
      ],
    }
  ),
  word('potential', '잠재적인', 6, 'adjective',
    ['오래된, 고풍스런', '정직한', '버려진, 유기된', '설명되지 않은', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인'],
    tips({
      etymology: '라틴어 \'potentia(힘, 능력)\'에서 유래하여, 현재는 숨겨져 있지만 미래에 발휘될 수 있는 힘을 뜻합니다.',
      visual: '아직 싹트지 않았지만 거대한 나무가 될 힘을 품고 있는 작은 씨앗의 이미지를 떠올려 보세요.',
      soundAlike: '\'포텐 터지다\'라는 유행어의 \'포텐\'이 바로 이 단어입니다. 잠재력이 폭발하는 장면을 연상하세요.',
      context: '비즈니스나 과학 분야에서 아직 실현되지 않은 가능성이나 위험을 논할 때 자주 쓰입니다.',
      synonymAntonym: '겉으로 드러나지 않은 \'possible\'과 유사하며, 이미 확정된 \'definite\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having or showing the capacity to become or develop into something in the future',
      synonyms: ['possible', 'latent', 'prospective'],
      antonyms: ['actual', 'definite', 'unlikely'],
      exampleSentences: [
        { en: 'The new marketing strategy has the power to attract thousands of prospective customers.', ko: '새로운 마케팅 전략은 수천 명의 잠재적인 고객을 끌어들일 수 있는 힘이 있습니다.' },
        { en: 'Scientists are studying the latent energy stored within these chemical compounds.', ko: '과학자들은 이 화학 화합물 안에 저장된 잠재적인 에너지를 연구하고 있습니다.' },
      ],
      wordDistractors: ['paternal', 'perpetual', 'penitent'],
      definitionDistractors: [
        'Already existing and fully developed in its current form',
        'Requiring immediate attention due to its urgent and pressing nature',
        'Relating to a powerful force that has been demonstrated repeatedly',
      ],
    }
  ),
  word('pour', '따르다', 7, 'verb',
    ['섞다', '자르다', '굽다', '튀기다', '볶다', '얼리다', '녹이다', '휘젓다', '데우다', '씻다'],
    tips({
      etymology: '중세 영어 \'pouren\'에서 유래했으며, 액체가 쏟아져 나오는 움직임을 나타냅니다.',
      visual: '주전자를 기울여 컵에 시원한 물이 콸콸 쏟아지는 장면을 상상해 보세요.',
      soundAlike: '비가 쏟아지는 소리 \'포(pour)포\'수처럼 물을 붓는다고 생각하면 쉽습니다.',
      context: '요리 레시피에서 소스를 붓거나, 비가 억수같이 쏟아지는 날씨를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '액체를 흘려보내는 spill과 비슷하지만, 의도적으로 담는다는 점에서 다릅니다.',
    }),
    {
      definition: 'to cause a liquid to flow from a container in a steady stream by tilting it',
      synonyms: ['stream', 'flow', 'spill'],
      antonyms: ['drip', 'trickle', 'collect'],
      exampleSentences: [
        { en: 'Carefully tilt the pitcher to fill the glass with fresh orange juice.', ko: '신선한 오렌지 주스로 잔을 채우기 위해 피처를 조심스럽게 기울여 따르세요.' },
        { en: 'Heavy rain began to fall from the dark clouds during the outdoor concert.', ko: '야외 콘서트 중에 먹구름에서 폭우가 쏟아지기 시작했습니다.' },
      ],
      wordDistractors: ['pout', 'dour', 'tour'],
      definitionDistractors: [
        'To examine something closely by looking through a small opening',
        'To stir a mixture vigorously using a circular motion',
        'To distribute equal amounts of a substance into separate containers',
      ],
    }
  ),
  word('powder', '가루', 4, 'noun',
    ['액체', '고체', '기체', '덩어리', '조각', '수증기', '기름', '얼음', '거품', '반죽'],
    tips({
      etymology: '라틴어 \'pulvis\'에서 유래했으며, 이는 먼지나 가루를 뜻하는 고대 단어와 연결됩니다.',
      visual: '화장품 파우더 팩트를 열었을 때 고운 입자가 공중에 날리는 모습을 상상해 보세요.',
      soundAlike: '빵을 만들 때 쓰는 \'베이킹 파우더\'의 파우더와 발음이 똑같습니다.',
      context: '요리법이나 화학 실험, 화장품 설명서에서 입자가 고운 물질을 지칭할 때 자주 쓰입니다.',
      synonymAntonym: 'dust나 grain과 비슷하지만, 고체 덩어리인 solid와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A substance consisting of very fine, dry particles produced by crushing or grinding a solid.',
      synonyms: ['dust', 'grain', 'particle'],
      antonyms: ['solid', 'chunk', 'block'],
      exampleSentences: [
        { en: 'The chef sprinkled a fine white powder over the dessert to add sweetness.', ko: '요리사는 단맛을 더하기 위해 디저트 위에 고운 흰 가루를 뿌렸습니다.' },
        { en: 'Heavy machines grind the dried minerals into a very fine powder for industrial use.', ko: '중장비들이 산업용으로 쓰기 위해 말린 광물들을 아주 고운 가루로 갈아냅니다.' },
      ],
      wordDistractors: ['plunder', 'ponder', 'chowder'],
      definitionDistractors: [
        'A thick paste or cream applied to the skin for medical treatment',
        'A lightweight fabric woven from natural cotton fibers',
        'A volatile liquid that evaporates quickly when exposed to air',
      ],
    }
  ),
  word('power', '힘', 3, 'noun',
    ['바다 풍경', '명 사람', '경험주의', '사막', '사람', '퍼센트, 백분율', '침대', '유모', '(집 앞) 진입로, 차도', '자존심'],
    tips({
      etymology: '라틴어 \'posse(할 수 있다)\'에서 유래하여 무언가를 해낼 수 있는 능력이나 에너지를 뜻합니다.',
      visual: '번개 모양의 아이콘이나 근육질의 팔이 무거운 물건을 번쩍 들어 올리는 모습을 상상하세요.',
      soundAlike: '\'파워\'라고 발음하며, 강력한 엔진 소리나 에너지가 폭발하는 소리를 연상하면 쉽습니다.',
      context: '정치적 영향력, 전기에너지, 혹은 개인의 신체적 근력을 표현할 때 두루 사용됩니다.',
      synonymAntonym: '에너지를 뜻하는 energy와 유의어이며, 아무런 힘이 없는 상태인 weakness와 반대됩니다.',
    }),
    {
      definition: 'the ability or capacity to do something or act in a particular way',
      synonyms: ['strength', 'authority', 'energy'],
      antonyms: ['weakness', 'inability', 'impotence'],
      exampleSentences: [
        { en: 'The new engine provides more thrust and increased speed for the aircraft.', ko: '새 엔진은 항공기에 더 많은 추진력과 향상된 속도를 제공합니다.' },
        { en: 'Knowledge gives individuals the capacity to make better decisions in life.', ko: '지식은 개인에게 인생에서 더 나은 결정을 내릴 수 있는 능력을 부여합니다.' },
      ],
      wordDistractors: ['tower', 'cower', 'dower'],
      definitionDistractors: [
        'A large machine that generates electricity from natural resources',
        'The legal right to make decisions on behalf of another person',
        'A unit of measurement used to calculate the speed of a vehicle',
      ],
    }
  ),
  word('practical', '실제의', 5, 'adjective',
    ['이론적인', '추상적인', '비현실적인', '상상속의', '복잡한', '감정적인', '일시적인', '우연한', '장식용의', '가상의'],
    tips({
      etymology: '그리스어 \'praktikos\'에서 유래했으며, \'행동하다\'라는 뜻의 \'prassein\'과 연결되어 실제 행동과 관련된 의미를 가집니다.',
      visual: '화려한 장식은 없지만 튼튼하고 주머니가 많은 작업복이나 다용도 도구를 떠올려 보세요.',
      soundAlike: '\'프락틱컬\' - \'풀(을) 딱 칠\'해서 실제로 붙이는 상황처럼 실용적인 느낌으로 기억하세요.',
      context: '이론만 앞세우는 것이 아니라 실제로 문제를 해결할 수 있는 해결책을 논할 때 자주 쓰입니다.',
      synonymAntonym: '현실적인 pragmatic과 짝을 지어 외우고, 이론에만 치중한 theoretical과 반대임을 기억하세요.',
    }),
    {
      definition: 'relating to experience, real situations, or action rather than ideas or imagination',
      synonyms: ['pragmatic', 'feasible', 'functional'],
      antonyms: ['theoretical', 'impractical', 'idealistic'],
      exampleSentences: [
        { en: 'The course provides hands-on experience to give students skills for the real world.', ko: '이 과정은 학생들에게 실생활에 필요한 기술을 제공하기 위해 실무 경험을 제공합니다.' },
        { en: 'High heels are stylish but not very useful for a long walk in the woods.', ko: '하이힐은 멋지지만 숲속을 오래 걷기에는 그리 실용적이지 않습니다.' },
      ],
      wordDistractors: ['tactical', 'nautical', 'vertical'],
      definitionDistractors: [
        'Based on abstract reasoning and logical deduction rather than evidence',
        'Designed primarily for visual appeal and decorative purposes',
        'Following a strict set of traditional customs and ceremonies',
      ],
    }
  ),
];
