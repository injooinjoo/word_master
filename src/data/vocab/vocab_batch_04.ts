import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch04: VocabItem[] = [
  word('Accept', '받아들이다', 2, 'verb',
    ['거절하다', '무시하다', '버리다', '미루다', '숨기다', '피하다', '잃다', '던지다', '막다', '깨뜨리다'],
    tips({
      etymology: '라틴어 \'accipere\'에서 유래하며, \'ac(~으로)\'와 \'capere(잡다)\'가 결합되어 내게 오는 것을 잡는다는 의미를 가집니다.',
      visual: '누군가 건네주는 상장을 두 손으로 정중하게 받아 드는 모습을 그려보세요.',
      soundAlike: '억셉트 -> \'억!\' 소리가 날 정도로 좋은 제안을 기쁘게 수락하는 장면을 연상하세요.',
      context: '초대, 선물, 사과 또는 새로운 직책을 기꺼이 수용할 때 폭넓게 쓰입니다.',
      synonymAntonym: '유사한 단어로는 receive가 있으며, 반대말로는 단호하게 거절하는 reject가 있습니다.',
    }),
    {
      definition: 'to agree to receive or take something offered',
      synonyms: ['receive', 'admit', 'acquire'],
      antonyms: ['reject', 'refuse', 'decline'],
      exampleSentences: [
        { en: 'She accepted the job offer.', ko: '그녀는 그 일자리 제의를 수락했다.' },
        { en: 'Please accept my apology.', ko: '제 사과를 받아주세요.' },
      ],
    }
  ),
  word('Answer', '대답하다', 2, 'verb',
    ['질문하다', '묻다', '말하다', '부르다', '외치다', '속삭이다', '이야기하다', '논쟁하다', '토론하다', '지적하다'],
    tips({
      etymology: 'and(~에 대하여)와 swear(맹세하다)가 합쳐져 사실에 대해 엄숙하게 말한다는 어원에서 유래했습니다.',
      visual: '선생님의 질문에 정답을 알고 힘차게 손을 번쩍 드는 학생의 모습을 상상해 보세요.',
      soundAlike: '앤서 -> \'앤(And)\' 그리고 \'서(말하다)\'라고 덧붙여 말하며 답을 하는 상황을 연상하세요.',
      context: '시험 문제의 정답을 쓰거나, 누군가의 부름이나 전화 벨소리에 반응할 때 주로 쓰입니다.',
      synonymAntonym: 'reply와 비슷하게 쓰이며, 무언가를 궁금해하며 묻는 ask와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to say, write, or do something as a reaction to a question, letter, or situation',
      synonyms: ['reply', 'respond', 'retort'],
      antonyms: ['ask', 'question', 'inquire'],
      exampleSentences: [
        { en: 'Can you answer the question?', ko: '질문에 답할 수 있나요?' },
        { en: 'He answered the phone immediately.', ko: '그는 전화를 바로 받았다.' },
      ],
    }
  ),
  word('Aunt', '이모, 고모', 2, 'noun',
    ['아버지', '어머니', '형제', '자매', '삼촌', '할아버지', '할머니', '조카', '사촌', '시아버지'],
    tips({
      etymology: '라틴어 amita에서 유래하여 부모님의 여자 형제를 뜻하게 되었습니다.',
      visual: '명절에 반갑게 인사를 건네며 용돈이나 맛있는 음식을 챙겨주시는 친척 여성분을 상상해 보세요.',
      soundAlike: '개미를 뜻하는 ant와 발음이 매우 유사하지만 문맥상 가족 관계를 나타냅니다.',
      context: '어머니나 아버지의 자매, 혹은 외숙모나 고모부의 부인을 지칭할 때 두루 사용합니다.',
      synonymAntonym: '남성 친척인 uncle과 대조되는 개념이며, 더 친근하게 부를 때는 auntie라고 합니다.',
    }),
    {
      definition: 'The sister of your father or mother, or the woman who is married to your uncle.',
      synonyms: ['auntie', 'relative', 'kinswoman'],
      antonyms: ['uncle', 'nephew', 'niece'],
      exampleSentences: [
        { en: 'My aunt lives in Seoul.', ko: '내 이모는 서울에 산다.' },
        { en: 'Her aunt baked cookies for the party.', ko: '그녀의 고모가 파티용 쿠키를 구웠다.' },
      ],
    }
  ),
  word('Autumn', '가을', 2, 'noun',
    ['봄', '여름', '겨울', '계절', '날씨', '단풍', '수확', '바람', '하늘', '낙엽'],
    tips({
      etymology: '라틴어 autumnus에서 유래하여 \'수확의 시기\'라는 의미를 담고 있습니다.',
      visual: '나무에서 붉고 노란 잎들이 바닥으로 떨어져 쌓여 있는 공원을 떠올려 보세요.',
      soundAlike: '\'오! 톰(Autumn)\'이라는 소년이 바스락거리는 낙엽 위를 걷고 있다고 기억하세요.',
      context: '무더운 여름이 끝나고 추운 겨울이 오기 전, 선선한 바람이 부는 시기를 말합니다.',
      synonymAntonym: '미국에서는 잎이 떨어진다는 의미의 fall로 자주 쓰이며, 새싹이 돋는 spring과 대비됩니다.',
    }),
    {
      definition: 'the period of the year between summer and winter when the weather becomes cooler',
      synonyms: ['fall', 'harvest time', 'twilight of the year'],
      antonyms: ['spring', 'summer', 'winter'],
      exampleSentences: [
        { en: 'The leaves turn red and gold in autumn.', ko: '가을에는 나뭇잎이 빨갛고 금빛으로 변합니다.' },
        { en: 'Farmers are busy gathering their crops in autumn.', ko: '농부들은 가을에 농작물을 거두느라 바쁩니다.' },
      ],
    }
  ),
  word('Bake', '굽다', 2, 'verb',
    ['찌다', '튀기다', '볶다', '삶다', '썰다', '섞다', '붓다', '담그다', '절이다', '말리다'],
    tips({
      etymology: '고대 영어 bacan에서 유래하여 건조한 열로 음식을 익히는 과정을 의미합니다.',
      visual: '오븐의 유리창 너머로 반죽이 부풀어 오르며 갈색으로 변하는 장면을 상상하세요.',
      soundAlike: '베이크(Bake)는 빵집을 뜻하는 베이커리(Bakery)의 핵심 동작입니다.',
      context: '주로 빵, 쿠키, 케이크처럼 밀가루 반죽을 오븐에 넣고 조리할 때 사용합니다.',
      synonymAntonym: 'roast는 고기나 채소를 구울 때, bake는 주로 빵 종류를 구울 때 구분하여 씁니다.',
    }),
    {
      definition: 'to cook food in an oven using dry heat',
      synonyms: ['roast', 'cook', 'grill'],
      antonyms: ['freeze', 'chill', 'cool'],
      exampleSentences: [
        { en: 'She likes to bake cakes on weekends.', ko: '그녀는 주말에 케이크를 굽는 것을 좋아한다.' },
        { en: 'I baked bread this morning.', ko: '오늘 아침에 빵을 구웠다.' },
      ],
    }
  ),
  word('Balloon', '풍선', 2, 'noun',
    ['공', '비누', '기구', '종이', '리본', '깃발', '꽃', '초', '등', '불'],
    tips({
      etymology: '이탈리아어 \'ballone\'에서 유래했으며, \'ball(공)\'에 \'큰 것\'을 뜻하는 접미사가 붙어 \'커다란 공\'이라는 의미가 되었습니다.',
      visual: '헬륨 가스가 가득 차서 천장에 둥둥 떠 있는 알록달록한 고무 주머니를 떠올려 보세요.',
      soundAlike: '\'발룬\'이라고 발음되는데, 발로 툭 차면 가볍게 공중으로 날아가는 모습을 연상하면 쉽습니다.',
      context: '주로 생일 파티, 축제 현장에서 장식용으로 쓰이거나 놀이공원에서 아이들이 손에 들고 다닙니다.',
      synonymAntonym: '공기가 들어간 가벼운 물체인 blimp와 비슷하지만, 무거운 돌이나 닻과는 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A flexible bag that can be inflated with a gas, such as helium or air, often used as a child\'s toy or for decoration.',
      synonyms: ['blimp', 'aerostat', 'inflatable'],
      antonyms: ['anchor', 'weight', 'stone'],
      exampleSentences: [
        { en: 'The child released the colorful balloon into the sky.', ko: '아이는 알록달록한 풍선을 하늘로 날려 보냈다.' },
        { en: 'We used dozens of red and white balloons to decorate the hall for the party.', ko: '우리는 파티를 위해 홀을 장식하려고 수십 개의 빨간색과 흰색 풍선을 사용했다.' },
      ],
    }
  ),
  word('Battle', '전투', 2, 'noun',
    ['평화', '휴전', '협상', '대화', '친목', '우정', '동맹', '휴식', '안전', '구원'],
    tips({
      etymology: '라틴어 battualia에서 유래하여 \'두드리는 것\' 혹은 \'격투\'라는 의미를 담고 있습니다.',
      visual: '중세 시대 기사들이 칼과 방패를 들고 성 앞에서 격렬하게 충돌하는 장면을 상상해 보세요.',
      soundAlike: '유명한 서바이벌 게임인 \'배틀그라운드\'를 떠올리면 치열한 싸움이라는 뜻이 바로 연결됩니다.',
      context: '군대 간의 물리적 충돌뿐만 아니라 암이나 질병과의 힘겨운 싸움을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '단순한 다툼인 fight보다 규모가 크며, 서로 화합하는 harmony와는 정반대의 상황입니다.',
    }),
    {
      definition: 'A sustained fight between large organized armed forces in a specific area.',
      synonyms: ['combat', 'conflict', 'clash'],
      antonyms: ['peace', 'truce', 'harmony'],
      exampleSentences: [
        { en: 'The soldiers prepared themselves for the upcoming battle.', ko: '군인들은 다가오는 전투를 준비했다.' },
        { en: 'She won her long battle against the severe illness.', ko: '그녀는 중병에 맞선 긴 싸움에서 승리했다.' },
      ],
    }
  ),
  word('Belt', '벨트', 2, 'noun',
    ['넥타이', '스카프', '모자', '장갑', '양말', '신발', '지갑', '가방', '시계', '반지'],
    tips({
      etymology: '라틴어 balteus에서 유래하여 허리에 두르는 띠를 의미하게 되었습니다.',
      visual: '바지 허리 부분에 가죽 끈을 끼워 버클로 단단히 고정하는 장면을 상상하세요.',
      soundAlike: '자동차를 타면 가장 먼저 매는 \'안전벨트\'의 그 단어와 같습니다.',
      context: '패션 아이템으로 쓰이기도 하지만 기계의 동력을 전달하는 컨베이어 장치에도 쓰입니다.',
      synonymAntonym: '허리를 감싸는 strap이나 band와 비슷하며, 목에 두르는 scarf와는 위치가 다릅니다.',
    }),
    {
      definition: 'a flexible band or strap, typically made of leather or fabric, worn around the waist to support clothing or for decoration',
      synonyms: ['strap', 'band', 'girdle'],
      antonyms: ['necklace', 'bracelet', 'headband'],
      exampleSentences: [
        { en: 'He tightened his leather belt to keep his trousers from falling.', ko: '그는 바지가 흘러내리지 않도록 가죽 벨트를 조였다.' },
        { en: 'The dress comes with a matching belt for the waist.', ko: '그 드레스에는 허리에 매는 같은 재질의 벨트가 포함되어 있다.' },
      ],
    }
  ),
  word('Birthday', '생일', 2, 'noun',
    ['기념일', '휴일', '주말', '방학', '결혼식', '장례식', '파티', '축제', '연휴', '휴가'],
    tips({
      etymology: '태어남을 뜻하는 birth와 날을 뜻하는 day가 결합되어 탄생한 날을 의미합니다.',
      visual: '색색의 촛불이 꽂힌 커다란 케이크와 고깔모자를 쓴 아이들의 모습을 상상하세요.',
      soundAlike: '벌스데이, \'버스\'를 타고 친구의 파티에 초대받아 가는 장면을 떠올려 보세요.',
      context: '매년 같은 날짜에 돌아오며 가족이나 친구들과 선물을 주고받는 특별한 날입니다.',
      synonymAntonym: '기념일을 뜻하는 anniversary의 일종이며, 반대되는 개념으로는 생의 마감을 뜻하는 deathday가 있습니다.',
    }),
    {
      definition: 'the anniversary of the day on which a person was born',
      synonyms: ['anniversary', 'natal day', 'celebration'],
      antonyms: ['deathday', 'funeral', 'passing'],
      exampleSentences: [
        { en: 'Happy birthday to you!', ko: '생일 축하해요!' },
        { en: 'We threw a surprise party for her birthday.', ko: '우리는 그녀의 생일을 위해 깜짝 파티를 열었다.' },
      ],
    }
  ),
  word('Blanket', '담요', 2, 'noun',
    ['침대', '베개', '매트리스', '시트', '쿠션', '카펫', '커튼', '수건', '옷', '자켓'],
    tips({
      etymology: '프랑스어 \'blanchet\'(흰색 천)에서 유래하여 오늘날 몸을 덮는 물건을 뜻하게 되었습니다.',
      visual: '추운 겨울밤 침대 위에서 두툼하고 부드러운 천을 몸에 돌돌 감싸고 있는 모습입니다.',
      soundAlike: '\'블랭킷\'은 \'불(fire)\'처럼 따뜻함을 주는 \'킷(kit, 장비)\'이라고 연상해 보세요.',
      context: '잠을 자거나 소파에서 쉴 때 체온을 유지하기 위해 덮는 커다란 직물 조각입니다.',
      synonymAntonym: 'cover와 용도가 비슷하며, 얇은 sheet보다는 훨씬 두꺼운 소재를 의미합니다.',
    }),
    {
      definition: 'a large piece of cloth used to keep warm in bed',
      synonyms: ['cover', 'quilt', 'rug'],
      antonyms: ['fan', 'cooler', 'vent'],
      exampleSentences: [
        { en: 'She wrapped herself in a warm blanket.', ko: '그녀는 따뜻한 담요로 몸을 감쌌다.' },
        { en: 'The blanket kept the baby warm.', ko: '담요가 아기를 따뜻하게 해주었다.' },
      ],
    }
  ),
  word('Blind', '눈먼', 2, 'adjective',
    ['눈썹', '보이는', '밝은', '똑똑한', '시력', '안경', '접촉', '감각', '청각', '듣는'],
    tips({
      etymology: '고대 영어 blind에서 유래하여 \'혼란스러운\' 혹은 \'보이지 않는\'을 뜻합니다.',
      visual: '눈을 가리고 있거나 앞이 보이지 않아 지팡이에 의지해 걷는 모습입니다.',
      soundAlike: '창문에 햇빛을 가리는 \'블라인드\'를 내리면 밖이 보이지 않는 것과 같습니다.',
      context: '시력을 완전히 잃은 상태뿐만 아니라, 무언가를 보지 못하거나 깨닫지 못할 때도 쓰입니다.',
      synonymAntonym: 'sightless와 의미가 통하며, 시력이 있는 상태인 sighted와 대조됩니다.',
    }),
    {
      definition: 'Unable to see because of injury, disease, or a genetic condition; lacking the sense of sight.',
      synonyms: ['sightless', 'unseeing', 'visionless'],
      antonyms: ['sighted', 'seeing', 'observant'],
      exampleSentences: [
        { en: 'He has been blind since birth and uses a guide dog.', ko: '그는 태어날 때부터 시각장애인이며 안내견을 동반합니다.' },
        { en: 'The bright light momentarily made me blind.', ko: '밝은 빛 때문에 순간적으로 눈이 멀었습니다.' },
      ],
    }
  ),
  word('Blood', '피', 2, 'noun',
    ['물', '땀', '눈물', '침', '피부', '근육', '뼈', '장기', '심장', '폐'],
    tips({
      etymology: '고대 영어 blōd에서 유래하여 생명의 근원이 되는 액체를 뜻합니다.',
      visual: '넘어져서 무릎을 다쳤을 때 나오는 붉은색 액체를 떠올려 보세요.',
      soundAlike: '블러드 -> \'블러(Blur)\' 처리된 것처럼 붉게 번지는 액체입니다.',
      context: '우리 몸속 혈관을 타고 흐르며 산소를 운반하는 필수적인 액체입니다.',
      synonymAntonym: 'gore는 엉겨 붙은 피를 뜻하며, 생명력의 상징이기도 합니다.',
    }),
    {
      definition: 'the red fluid that flows through the body\'s veins and arteries',
      synonyms: ['plasma', 'gore', 'lifeblood'],
      antonyms: ['water', 'sap', 'void'],
      exampleSentences: [
        { en: 'Blood was dripping from the wound.', ko: '상처에서 피가 뚝뚝 떨어지고 있었다.' },
        { en: 'She donates blood every month.', ko: '그녀는 매달 헌혈을 한다.' },
      ],
    }
  ),
  word('Board', '나무판, 이사회', 2, 'noun',
    ['유리', '종이', '천', '플라스틱', '금속', '가죽', '나무', '대리석', '타일', '벽돌'],
    tips({
      etymology: '고대 영어 bord에서 유래하여 평평한 나무판자를 의미하게 되었습니다.',
      visual: '교실 정면에 걸린 커다란 칠판이나 스케이트보드의 평평한 면을 떠올려 보세요.',
      soundAlike: '발음이 \'보드\'이므로 게시판을 뜻하는 \'노티스 보드\'를 연상하면 쉽습니다.',
      context: '단순한 판자라는 뜻 외에도 회사의 의사결정을 내리는 \'이사회\'라는 조직을 뜻하기도 합니다.',
      synonymAntonym: 'plank와 유사하며, 반대 개념으로는 입체적인 구 형태인 sphere를 생각할 수 있습니다.',
    }),
    {
      definition: 'A flat, thin, and usually rectangular piece of stiff material used for a specific purpose such as writing or building.',
      synonyms: ['plank', 'panel', 'committee'],
      antonyms: ['sphere', 'orb', 'void'],
      exampleSentences: [
        { en: 'The teacher wrote the homework assignment on the board.', ko: '선생님께서 게시판에 숙제를 적으셨다.' },
        { en: 'The board of directors approved the new marketing strategy.', ko: '이사회가 새로운 마케팅 전략을 승인했다.' },
      ],
    }
  ),
  word('Bowl', '그릇', 2, 'noun',
    ['접시', '컵', '쟁반', '냄비', '프라이팬', '수저', '포크', '나이프', '병', '항아리'],
    tips({
      etymology: '라틴어 bulla(둥근 물체)에서 유래하여 오목하고 둥근 형태의 그릇을 뜻하게 되었습니다.',
      visual: '시리얼이나 따뜻한 수프가 찰랑거리며 담겨 있는 깊고 둥근 사발을 상상해 보세요.',
      soundAlike: '축구공이나 농구공 같은 \'볼(Ball)\'처럼 둥근 모양을 가진 식기라고 기억하면 쉽습니다.',
      context: '주로 국물이 있는 요리나 밥, 샐러드처럼 부피감이 있는 음식을 담을 때 사용합니다.',
      synonymAntonym: 'dish는 식기를 통칭하지만, 이 단어는 평평한 plate와 달리 깊이가 있는 것이 특징입니다.',
    }),
    {
      definition: 'A deep, round container open at the top, used for holding, serving, or preparing food.',
      synonyms: ['dish', 'basin', 'vessel'],
      antonyms: ['plate', 'tray', 'platter'],
      exampleSentences: [
        { en: 'She ate cereal from a bowl.', ko: '그녀는 그릇에 시리얼을 담아 먹었다.' },
        { en: 'He poured the hot soup into a large bowl.', ko: '그는 뜨거운 수프를 커다란 그릇에 부었다.' },
      ],
    }
  ),
  word('Bread', '빵', 2, 'noun',
    ['밥', '고기', '과일', '채소', '우유', '치즈', '과자', '케이크', '파이', '쿠키'],
    tips({
      etymology: '고대 영어 brēad에서 유래하여 본래 \'조각\' 혹은 \'음식\'을 의미했습니다.',
      visual: '오븐에서 갓 구워져 나와 고소한 냄새를 풍기는 노릇노릇한 식빵을 떠올려 보세요.',
      soundAlike: '유명한 애니메이션 \'브레드 이발소\'의 주인공 식빵 캐릭터를 생각하면 쉽습니다.',
      context: '서양권에서 쌀 대신 주식으로 먹는 가장 기본적인 밀가루 음식을 말합니다.',
      synonymAntonym: '덩어리를 뜻하는 loaf와 비슷하며, 곡류가 아닌 고기나 채소와는 대조적입니다.',
    }),
    {
      definition: 'A common food item prepared from a dough of flour and water, usually by baking.',
      synonyms: ['loaf', 'pastry', 'baked good'],
      antonyms: ['meat', 'beverage', 'vegetable'],
      exampleSentences: [
        { en: 'I bought fresh bread from the bakery this morning.', ko: '나는 오늘 아침에 빵집에서 신선한 빵을 샀다.' },
        { en: 'Bread and butter is a very simple breakfast.', ko: '빵과 버터는 매우 간단한 아침 식사이다.' },
      ],
    }
  ),
  word('Bridge', '다리', 2, 'noun',
    ['터널', '도로', '강', '바다', '호수', '산', '빌딩', '탑', '벽', '울타리'],
    tips({
      etymology: '고대 영어 brycg에서 유래하여 두 지점을 잇는 구조물을 의미하게 되었습니다.',
      visual: '강의 양쪽 끝을 단단하게 붙잡고 있는 거대한 철제 구조물을 상상해 보세요.',
      soundAlike: '머리카락 일부를 다른 색으로 잇는 \'브릿지\' 염색을 떠올리면 기억하기 쉽습니다.',
      context: '물리적인 건축물뿐만 아니라 사람들 사이의 관계를 이어주는 매개체를 뜻할 때도 쓰입니다.',
      synonymAntonym: '무언가를 연결하는 span과 유사하며, 단절을 뜻하는 gap과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A structure carrying a pathway or roadway over a depression or obstacle such as a river.',
      synonyms: ['span', 'viaduct', 'overpass'],
      antonyms: ['gap', 'chasm', 'abyss'],
      exampleSentences: [
        { en: 'We crossed the bridge at sunset.', ko: '우리는 해질녘에 다리를 건넜다.' },
        { en: 'The old bridge was built in 1900.', ko: '그 오래된 다리는 1900년에 지어졌다.' },
      ],
    }
  ),
  word('Busy', '바쁜', 2, 'adjective',
    ['여유로운', '느린', '한가한', '게으른', '졸린', '피곤한', '쉬는', '휴식하는', '빈', '공허한'],
    tips({
      etymology: '고대 영어 bisig에서 유래하여 무언가에 주의를 기울여 열심히 일하는 상태를 의미합니다.',
      visual: '책상 위에 서류가 가득 쌓여 있고 양손으로 전화를 받으며 타이핑하는 모습입니다.',
      soundAlike: '비지찌개 먹을 시간도 없을 만큼 \'비지(Busy)\'하게 일하는 상황을 떠올려 보세요.',
      context: '일정이 꽉 차 있거나 특정 활동에 몰두하여 다른 일을 할 여유가 없는 상황에 쓰입니다.',
      synonymAntonym: 'occupied는 무언가에 점유된 상태를, idle은 아무 일도 하지 않는 한가한 상태를 뜻합니다.',
    }),
    {
      definition: 'having a great deal of tasks to complete or being fully engaged in an activity',
      synonyms: ['occupied', 'active', 'engaged'],
      antonyms: ['idle', 'free', 'inactive'],
      exampleSentences: [
        { en: 'I am too busy to talk now.', ko: '지금은 너무 바빠서 이야기할 수 없어요.' },
        { en: 'The street was busy with shoppers.', ko: '거리는 쇼핑객들로 붐볐다.' },
      ],
    }
  ),
  word('Button', '단추', 2, 'noun',
    ['지퍼', '리본', '장식', '버클', '고리', '걸쇠', '클립', '핀', '찌르개', '바늘'],
    tips({
      etymology: '프랑스어 bouton(튀어나온 것)에서 유래하여 옷을 고정하는 도구를 뜻하게 되었습니다.',
      visual: '셔츠 앞부분에 일렬로 달려 있는 작고 둥근 플라스틱 조각을 상상해 보세요.',
      soundAlike: '한국어 \'버튼\'과 발음이 같으며, 엘리베이터를 탈 때 누르는 동작과 연결하면 기억하기 쉽습니다.',
      context: '의복을 여밀 때뿐만 아니라 전자기기를 작동시키기 위해 누르는 스위치로도 자주 쓰입니다.',
      synonymAntonym: '무언가를 고정하는 fastener의 한 종류이며, 열고 닫는 방식이 다른 zipper와 대조됩니다.',
    }),
    {
      definition: 'a small disk or knob sewn to clothing for fastening or a small part of a machine that you press to make it work',
      synonyms: ['fastener', 'knob', 'stud'],
      antonyms: ['zipper', 'hole', 'tear'],
      exampleSentences: [
        { en: 'She sewed a button on her coat.', ko: '그녀는 코트에 단추를 달았다.' },
        { en: 'Press the button to start the machine.', ko: '기계를 시작하려면 버튼을 누르세요.' },
      ],
    }
  ),
  word('Cabin', '오두막', 2, 'noun',
    ['아파트', '빌라', '주택', '성', '탑', '창고', '헛간', '창문', '현관', '지붕'],
    tips({
      etymology: '프랑스어 cabane에서 유래하여 작고 소박한 거처를 뜻하게 되었습니다.',
      visual: '깊은 산속이나 호숫가에 통나무를 쌓아 만든 아담한 집을 떠올려 보세요.',
      soundAlike: '영화 \'나 홀로 집에\'의 주인공 케빈(Kevin)이 숲속 오두막에 숨어 있는 장면을 상상해 보세요.',
      context: '주로 휴양지나 숲속에 위치한 나무로 된 작은 집 또는 비행기나 배의 선실을 의미할 때 쓰입니다.',
      synonymAntonym: 'hut이나 cottage와 비슷한 크기이며, 거대한 mansion이나 skyscraper와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a small wooden house, especially in a forest or by a lake',
      synonyms: ['hut', 'cottage', 'lodge'],
      antonyms: ['mansion', 'palace', 'skyscraper'],
      exampleSentences: [
        { en: 'We stayed in a cabin by the lake.', ko: '우리는 호숫가 오두막에서 묵었다.' },
        { en: 'The cabin had no electricity.', ko: '그 오두막에는 전기가 들어오지 않았다.' },
      ],
    }
  ),
  word('Cage', '새장', 2, 'noun',
    ['우리', '울타리', '담', '벽', '문', '창', '문턱', '계단', '복도', '마당'],
    tips({
      etymology: '라틴어 cavea(빈 공간)에서 유래하여 무언가를 가두는 장소를 뜻하게 되었습니다.',
      visual: '촘촘한 철창 안에 갇혀 있는 새나 동물의 모습을 상상해 보세요.',
      soundAlike: '격투기 선수들이 싸우는 팔각형 철창 경기장인 \'케이지\'를 떠올리면 기억하기 쉽습니다.',
      context: '동물이 도망가지 못하게 금속 막대나 그물망 등으로 만든 폐쇄된 공간을 의미합니다.',
      synonymAntonym: 'enclosure와 유사한 의미를 가지며, 사방이 트인 open 상태와는 대조적입니다.',
    }),
    {
      definition: 'A structure made of metal bars or wires used to keep animals or birds confined',
      synonyms: ['enclosure', 'pen', 'coop'],
      antonyms: ['wild', 'freedom', 'open'],
      exampleSentences: [
        { en: 'The bird escaped from its cage.', ko: '새가 새장에서 탈출했다.' },
        { en: 'He cleaned the hamster cage every week.', ko: '그는 매주 햄스터 우리를 청소했다.' },
      ],
    }
  ),
  word('Calm', '차분한', 2, 'adjective',
    ['흥분한', '불안한', '초조한', '화난', '걱정하는', '두려운', '급한', '시끄러운', '폭력적인', '거친'],
    tips({
      etymology: '라틴어 cauma(열기)에서 유래하여, 한낮의 더위에 바람이 잦아든 상태를 뜻합니다.',
      visual: '바람 한 점 없이 거울처럼 매끄러운 호수 표면을 상상해 보세요.',
      soundAlike: '한국어 \'캄캄한\' 밤의 정적처럼 아주 조용하고 평온한 상태를 떠올려 보세요.',
      context: '마음이 평온하거나 날씨가 잔잔할 때 사용하는 형용사입니다.',
      synonymAntonym: 'peaceful과 비슷하며, 몹시 흥분한 excited와 반대됩니다.',
    }),
    {
      definition: 'free from disturbance or excitement; peaceful',
      synonyms: ['peaceful', 'tranquil', 'serene'],
      antonyms: ['excited', 'stormy', 'agitated'],
      exampleSentences: [
        { en: 'Stay calm and keep your composure.', ko: '침착함을 유지하고 안정을 취하세요.' },
        { en: 'The sea was calm and still this morning.', ko: '오늘 아침 바다는 잔잔했다.' },
      ],
    }
  ),
  word('Camp', '캠프', 2, 'noun',
    ['호텔', '모텔', '여관', '숙소', '텐트', '침낭', '등산', '하이킹', '피크닉', '바베큐'],
    tips({
      etymology: '라틴어 campus(들판)에서 유래하여 탁 트인 야외 공간에서 지내는 것을 의미합니다.',
      visual: '밤하늘 아래 타오르는 모닥불과 그 옆에 세워진 삼각형 모양의 텐트를 상상해 보세요.',
      soundAlike: '여름방학마다 떠나는 \'캠핑\'이나 \'여름 캠프\'를 떠올리면 기억하기 쉽습니다.',
      context: '주로 휴가나 군사 훈련, 혹은 청소년 활동을 위해 야외에 임시 거처를 마련할 때 사용합니다.',
      synonymAntonym: '야영지를 뜻하는 campsite와 비슷하며, 안락한 정식 주거지인 residence와는 반대됩니다.',
    }),
    {
      definition: 'a place where people stay in tents or temporary shelters',
      synonyms: ['campsite', 'bivouac', 'encampment'],
      antonyms: ['home', 'hotel', 'residence'],
      exampleSentences: [
        { en: 'We went to summer camp.', ko: '우리는 여름 캠프에 갔다.' },
        { en: 'They set up camp by the river.', ko: '그들은 강가에 진을 쳤다.' },
      ],
    }
  ),
  word('Captain', '선장, 대장', 2, 'noun',
    ['선원', '승객', '경비원', '안내인', '조종사', '기관사', '부하', '병사', '일병', '이등병'],
    tips({
      etymology: '라틴어 capitaneus(우두머리)에서 유래하여 집단의 장을 뜻합니다.',
      visual: '배의 키를 잡고 항해를 지휘하는 멋진 제복 차림의 지휘관을 상상하세요.',
      soundAlike: '캡틴 아메리카처럼 팀을 이끄는 강력한 리더를 떠올려 보세요.',
      context: '배의 선장, 비행기 기장, 혹은 운동팀의 주장을 부를 때 널리 쓰입니다.',
      synonymAntonym: 'leader와 비슷하며, 명령을 따르는 crew와 반대되는 개념입니다.',
    }),
    {
      definition: 'The person in charge of a ship, aircraft, or sports team',
      synonyms: ['leader', 'commander', 'skipper'],
      antonyms: ['follower', 'crew', 'subordinate'],
      exampleSentences: [
        { en: 'The captain gave orders to the crew to prepare for the storm.', ko: '선장은 선원들에게 폭풍에 대비하라는 명령을 내렸다.' },
        { en: 'She was chosen as the captain of the national soccer team.', ko: '그녀는 축구 국가대표팀의 주장으로 선발되었다.' },
      ],
    }
  ),
  word('Castle', '성', 2, 'noun',
    ['궁전', '성당', '탑', '성벽', '해자', '다리', '문', '광장', '정원', '마을'],
    tips({
      etymology: '라틴어 castellum에서 유래되었으며, 이는 \'작은 요새\'를 의미하는 단어에서 발전했습니다.',
      visual: '디즈니 로고에 나오는 것처럼 뾰족한 탑과 높은 돌벽으로 둘러싸인 웅장한 건물을 떠올려 보세요.',
      soundAlike: '드라마 \'스카이 캐슬\'을 떠올리면 화려하고 거대한 저택이나 성의 이미지를 쉽게 연결할 수 있습니다.',
      context: '중세 시대에 적의 공격을 막기 위해 돌로 튼튼하게 지은 왕이나 귀족의 거주지를 뜻합니다.',
      synonymAntonym: 'fortress는 방어에 집중한 성을, palace는 화려함에 집중한 성을 뜻하며 오두막을 뜻하는 hut과는 반대됩니다.',
    }),
    {
      definition: 'A large building typically of the medieval period, fortified against attack with thick walls, battlements, and often a moat.',
      synonyms: ['fortress', 'palace', 'citadel'],
      antonyms: ['shack', 'cabin', 'hut'],
      exampleSentences: [
        { en: 'We visited an old castle in Scotland.', ko: '우리는 스코틀랜드의 오래된 성을 방문했다.' },
        { en: 'The castle stood on a hill.', ko: '그 성은 언덕 위에 우뚝 서 있었다.' },
      ],
    }
  ),
  word('Catch', '잡다', 2, 'verb',
    ['놓다', '던지다', '놓치다', '풀다', '해제하다', '떠나다', '포기하다', '놓아주다', '실패하다', '잃다'],
    tips({
      etymology: '라틴어 captare에서 유래하여 무언가를 쫓아가서 손에 넣는다는 의미를 담고 있습니다.',
      visual: '날아오는 야구공이 글러브 안으로 쏙 들어와 멈추는 장면을 상상해 보세요.',
      soundAlike: '캐치볼을 할 때 상대방이 던진 공을 낚아채는 소리 \'캐치!\'를 떠올려 보세요.',
      context: '물건을 잡는 것뿐만 아니라 버스 같은 교통수단을 타거나 질병에 걸리는 상황에도 자주 쓰입니다.',
      synonymAntonym: '강하게 움켜쥐는 seize와 유사하며, 손에서 놓아버리는 release와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to intercept and take hold of an object that is moving through the air or falling',
      synonyms: ['grab', 'seize', 'capture'],
      antonyms: ['drop', 'release', 'miss'],
      exampleSentences: [
        { en: 'Can you catch the ball if I throw it to you?', ko: '내가 공을 던지면 잡을 수 있니?' },
        { en: 'I had to run fast to catch the last bus home.', ko: '집으로 가는 마지막 버스를 타기 위해 빨리 달려야 했다.' },
      ],
    }
  ),
  word('Cave', '동굴', 2, 'noun',
    ['산', '바위', '절벽', '골짜기', '호수', '강', '바다', '숲', '수풀', '개울'],
    tips({
      etymology: '라틴어 cavus에서 유래하여 \'텅 빈 공간\'이라는 의미를 담고 있습니다.',
      visual: '거대한 바위산 옆면에 입을 벌리고 있는 어둡고 깊은 구멍을 떠올려 보세요.',
      soundAlike: '케이크(Cake)를 파먹어서 생긴 구멍처럼 산속에 뚫린 공간이라고 외우면 쉽습니다.',
      context: '주로 고고학 탐사나 야생 동물의 서식지를 다루는 다큐멘터리에서 자주 쓰입니다.',
      synonymAntonym: 'cavern은 규모가 큰 것을, hollow는 단순히 파인 곳을 의미하며 산봉우리(peak)와는 대조됩니다.',
    }),
    {
      definition: 'A natural underground chamber or large hollow space in the side of a hill or cliff.',
      synonyms: ['cavern', 'grotto', 'hollow'],
      antonyms: ['mountain', 'summit', 'peak'],
      exampleSentences: [
        { en: 'The explorers used flashlights to see inside the dark cave.', ko: '탐험가들은 어두운 동굴 내부를 보기 위해 손전등을 사용했다.' },
        { en: 'They discovered ancient paintings on the walls of the cave.', ko: '그들은 동굴 벽에서 고대 벽화를 발견했다.' },
      ],
    }
  ),
  word('Chain', '사슬', 2, 'noun',
    ['로프', '밧줄', '와이어', '끈', '줄', '테이프', '고리', '훅', '걸쇠', '빗장'],
    tips({
      etymology: '라틴어 catena에서 유래하여 고리들이 연결된 형태를 의미합니다.',
      visual: '금속 고리들이 하나하나 엮여서 길게 늘어진 튼튼한 줄을 상상하세요.',
      soundAlike: '자전거 바퀴를 돌리는 체인이나 길거리에 흔한 체인점 간판을 떠올려 보세요.',
      context: '무거운 물건을 고정하거나 자전거를 도난당하지 않게 묶어둘 때 자주 쓰입니다.',
      synonymAntonym: 'link와 비슷하지만, 반대로 끊어진 상태는 separation이라고 합니다.',
    }),
    {
      definition: 'A series of connected metal rings used for fastening, pulling, or securing objects.',
      synonyms: ['link', 'series', 'shackle'],
      antonyms: ['separation', 'disconnection', 'fragment'],
      exampleSentences: [
        { en: 'He used a heavy metal chain to lock his bicycle to the fence.', ko: '그는 자전거를 울타리에 묶기 위해 무거운 금속 사슬을 사용했다.' },
        { en: 'The prisoner was bound in heavy iron chains.', ko: '그 죄수는 무거운 철사슬에 묶여 있었다.' },
      ],
    }
  ),
  word('Chance', '기회', 2, 'noun',
    ['위험', '실패', '실수', '불운', '재난', '곤경', '장애', '좌절', '실망', '절망'],
    tips({
      etymology: '라틴어 cadere(떨어지다)에서 유래하여 주사위가 바닥에 떨어져 결정되는 운을 의미합니다.',
      visual: '황금 열쇠를 쥐고 문 앞에 서 있는 모습이나 행운의 주사위를 던지는 장면을 떠올려 보세요.',
      soundAlike: '한국어에서도 \'마지막 챈스\'처럼 외래어로 자주 쓰여 익숙한 발음입니다.',
      context: '단순한 운뿐만 아니라 무언가를 성취할 수 있는 긍정적인 계기를 말할 때 주로 사용됩니다.',
      synonymAntonym: 'opportunity와 비슷하지만, certainty처럼 확실한 상황과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a possibility or opportunity for something to happen',
      synonyms: ['opportunity', 'possibility', 'prospect'],
      antonyms: ['certainty', 'impossibility', 'design'],
      exampleSentences: [
        { en: 'This is your last chance to win the grand prize.', ko: '이것이 당신이 대상을 탈 수 있는 마지막 기회입니다.' },
        { en: 'There is a slight chance of rain later this afternoon.', ko: '오늘 오후 늦게 비가 올 가능성이 약간 있다.' },
      ],
    }
  ),
  word('Change', '바꾸다', 2, 'verb',
    ['유지하다', '고수하다', '그대로두다', '보존하다', '고정하다', '동결하다', '멈추다', '중단하다', '취소하다', '되돌리다'],
    tips({
      etymology: '라틴어 cambire에서 유래하여 무언가를 주고받거나 교환한다는 의미를 담고 있습니다.',
      visual: '신호등의 불빛이 초록색에서 빨간색으로 바뀌는 순간을 상상해 보세요.',
      soundAlike: '환전소나 탈의실을 뜻하는 \'체인지\'라는 외래어 발음을 떠올리면 쉽습니다.',
      context: '단순히 형태를 바꾸는 것뿐만 아니라 물건을 사고 남은 \'거스름돈\'이라는 뜻으로도 자주 쓰입니다.',
      synonymAntonym: 'alter는 세부적인 수정을, transform은 완전히 다른 모습으로의 변신을 강조합니다.',
    }),
    {
      definition: 'to make someone or something different, or to become different from a previous state',
      synonyms: ['alter', 'modify', 'transform'],
      antonyms: ['keep', 'preserve', 'remain'],
      exampleSentences: [
        { en: 'The caterpillar will eventually change into a butterfly.', ko: '애벌레는 결국 나비로 변할 것이다.' },
        { en: 'She decided to change her hairstyle for the new semester.', ko: '그녀는 새 학기를 맞아 헤어스타일을 바꾸기로 결심했다.' },
      ],
    }
  ),
  word('Cheap', '저렴한', 2, 'adjective',
    ['비싼', '고급의', '값비싼', '사치스러운', '귀한', '희귀한', '비쌈', '돈 많이드는', '과한', '과다한'],
    tips({
      etymology: '고대 영어 ceap(거래, 시장)에서 유래하여 \'거래하기 좋은 가격\'이라는 의미에서 \'값이 싼\'으로 발전했습니다.',
      visual: '대형 마트에서 빨간색 글씨로 크게 적힌 \'90% 할인\' 가격표를 떠올려 보세요.',
      soundAlike: '감자칩(Chip)처럼 부담 없이 사 먹을 수 있을 만큼 \'칩(Cheap)\'한 가격이라고 외워보세요.',
      context: '단순히 가격이 낮다는 긍정적 의미 외에도, 품질이 낮거나 천박하다는 부정적 뉘앙스로도 쓰입니다.',
      synonymAntonym: 'inexpensive는 가성비가 좋다는 긍정적 느낌이 강하고, expensive는 정반대의 비싼 상태를 뜻합니다.',
    }),
    {
      definition: 'low in price; costing little money',
      synonyms: ['inexpensive', 'affordable', 'economical'],
      antonyms: ['expensive', 'costly', 'pricey'],
      exampleSentences: [
        { en: 'The street food in this market is very cheap and delicious.', ko: '이 시장의 길거리 음식은 매우 저렴하고 맛있다.' },
        { en: 'I bought a cheap watch, but it broke after only two days.', ko: '저렴한 시계를 샀는데, 이틀 만에 고장 났다.' },
      ],
    }
  ),
  word('Cheese', '치즈', 2, 'noun',
    ['버터', '크림', '요거트', '우유', '계란', '밀가루', '설탕', '소금', '후추', '식용유'],
    tips({
      etymology: '라틴어 caseus에서 유래하여 발효된 우유 제품을 뜻하게 되었습니다.',
      visual: '톰과 제리에 나오는 구멍이 숭숭 뚫린 노란색 삼각형 조각을 상상하세요.',
      soundAlike: '사진을 찍을 때 입꼬리를 올리기 위해 \'치즈\'라고 발음하는 상황을 기억하세요.',
      context: '피자 위에서 길게 늘어나거나 샌드위치 사이에 끼워진 고소한 풍미의 음식입니다.',
      synonymAntonym: '유제품의 일종이며 고기나 채소와는 구분되는 식재료입니다.',
    }),
    {
      definition: 'A solid food product produced from the pressed curds of milk, often used in cooking or eaten alone.',
      synonyms: ['cheddar', 'mozzarella', 'dairy'],
      antonyms: ['meat', 'vegetable', 'fruit'],
      exampleSentences: [
        { en: 'The chef sprinkled extra cheese over the hot pasta.', ko: '요리사는 뜨거운 파스타 위에 치즈를 추가로 뿌렸다.' },
        { en: 'Mice are often depicted eating a small wedge of cheese.', ko: '쥐들은 종종 작은 치즈 조각을 먹는 모습으로 묘사된다.' },
      ],
    }
  ),
  word('Cherry', '체리', 2, 'noun',
    ['사과', '배', '포도', '딸기', '복숭아', '바나나', '오렌지', '레몬', '수박', '멜론'],
    tips({
      etymology: '고대 그리스어 kerasos에서 유래하여 라틴어 cerasum을 거쳐 영어로 정착되었습니다.',
      visual: '긴 줄기 끝에 매달린 작고 동그란 빨간색 열매가 쌍을 이루고 있는 이미지를 떠올리세요.',
      soundAlike: '봄의 상징인 벚꽃을 뜻하는 \'체리 블라썸\'의 그 체리입니다.',
      context: '디저트의 화룡점정으로 쓰이거나 달콤한 시럽, 주스의 주원료로 자주 등장합니다.',
      synonymAntonym: '핵과류를 뜻하는 drupe의 일종이며, 채소나 뿌리 식물과는 대조되는 개념입니다.',
    }),
    {
      definition: 'A small, round, fleshy fruit that is typically bright red or dark purple and contains a single hard stone.',
      synonyms: ['berry', 'drupe', 'stone fruit'],
      antonyms: ['vegetable', 'root', 'leaf'],
      exampleSentences: [
        { en: 'She placed a bright red cherry on top of the ice cream sundae.', ko: '그녀는 아이스크림 선데이 위에 밝은 빨간색 체리를 올렸다.' },
        { en: 'The birds are eating all the ripe cherries from our tree.', ko: '새들이 우리 나무에 열린 익은 체리를 모두 먹고 있다.' },
      ],
    }
  ),
  word('Chest', '가슴', 2, 'noun',
    ['배', '등', '어깨', '허리', '목', '팔', '다리', '손', '발', '머리'],
    tips({
      etymology: '고대 영어 \'cest\'에서 유래되었으며, 원래는 \'상자\'를 의미하다가 몸의 상부 구조를 뜻하게 되었습니다.',
      visual: '단단한 나무 상자처럼 심장과 폐를 보호하고 있는 튼튼한 상체를 떠올려 보세요.',
      soundAlike: '헬스장에서 가슴 근육을 발달시키는 \'체스트 프레스\' 운동 기구를 연상하면 쉽습니다.',
      context: '신체 부위뿐만 아니라 보물을 담는 \'궤짝\'이나 \'큰 상자\'를 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'breast는 주로 가슴 앞부분을, thorax는 해부학적 흉곽을 의미하며 back은 반대인 등을 뜻합니다.',
    }),
    {
      definition: 'the front part of the body between the neck and abdomen',
      synonyms: ['breast', 'thorax', 'torso'],
      antonyms: ['back', 'rear', 'spine'],
      exampleSentences: [
        { en: 'The athlete felt a sharp pain in his chest while running.', ko: '그 운동선수는 달리는 동안 가슴에 날카로운 통증을 느꼈다.' },
        { en: 'The pirates buried a wooden chest filled with gold coins.', ko: '해적들은 금화로 가득 찬 나무 궤짝을 묻었다.' },
      ],
    }
  ),
  word('Choose', '고르다', 2, 'verb',
    ['버리다', '차버리다', '거절하다', '포기하다', '미루다', '무시하다', '혼돈하다', '섞다', '섞어버리다', '잃다'],
    tips({
      etymology: '고대 영어 ceosan에서 유래하여 \'맛보다\' 혹은 \'시험해보고 고르다\'라는 의미를 담고 있습니다.',
      visual: '진열대에 놓인 여러 가지 물건들 중 하나를 향해 손가락을 가리키는 모습을 떠올려 보세요.',
      soundAlike: '명사형인 \'초이스(Choice)\'와 발음이 비슷하여 무언가를 선택하는 상황을 연상하기 쉽습니다.',
      context: '식당에서 메뉴를 결정하거나 인생의 중요한 진로를 결정할 때 폭넓게 사용되는 단어입니다.',
      synonymAntonym: 'select와 유사하며, 반대로 제안을 거절하거나 버릴 때는 reject나 discard를 사용합니다.',
    }),
    {
      definition: 'to pick out from a number of possibilities',
      synonyms: ['select', 'pick', 'elect'],
      antonyms: ['reject', 'refuse', 'discard'],
      exampleSentences: [
        { en: 'It was difficult to choose which dress to wear for the wedding.', ko: '결혼식에 어떤 드레스를 입고 갈지 고르는 것은 어려웠다.' },
        { en: 'Customers can choose from a wide variety of fresh vegetables.', ko: '고객들은 매우 다양한 신선한 채소 중에서 선택할 수 있다.' },
      ],
    }
  ),
  word('Church', '교회', 2, 'noun',
    ['사원', '성당', '절', '신전', '기도실', '예배당', '수도원', '신학교', '묘지', '공원'],
    tips({
      etymology: '그리스어 kyriakon에서 유래하여 \'주님의 집\'이라는 의미를 담고 있습니다.',
      visual: '뾰족한 첨탑 끝에 십자가가 높이 솟아 있는 붉은 벽돌 건물을 상상해 보세요.',
      soundAlike: '문제를 \'처치\'하다 할 때의 발음과 비슷하여, 고민을 해결하러 가는 곳으로 기억하세요.',
      context: '주로 일요일 아침에 사람들이 모여 찬송을 부르고 예배를 드리는 장소입니다.',
      synonymAntonym: '작은 예배당인 chapel이나 웅장한 cathedral과 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'A building where Christians gather to perform religious ceremonies and worship.',
      synonyms: ['chapel', 'cathedral', 'sanctuary'],
      antonyms: ['market', 'stadium', 'theater'],
      exampleSentences: [
        { en: 'The local church holds a charity event every Christmas.', ko: '지역 교회는 매년 크리스마스마다 자선 행사를 연다.' },
        { en: 'We could hear the sound of the church bells from our house.', ko: '우리는 집에서 교회 종소리를 들을 수 있었다.' },
      ],
    }
  ),
  word('Clock', '시계', 2, 'noun',
    ['알람', '타이머', '스톱워치', '캘린더', '일정표', '달력', '시간', '분', '초', '순간'],
    tips({
      etymology: '라틴어 \'clocca\'에서 유래되었으며, 원래는 시간을 알리기 위해 치는 \'종\'을 의미했습니다.',
      visual: '동그란 숫자판 위에서 두 개의 바늘이 째깍거리며 돌아가는 모습을 떠올려 보세요.',
      soundAlike: '시계 바늘이 톱니바늘에 걸려 \'클락, 클락\' 소리를 내며 돌아간다고 기억하세요.',
      context: '주로 벽에 걸거나 책상 위에 두고 현재 시각을 확인하는 용도로 쓰입니다.',
      synonymAntonym: '손목에 차는 watch와 달리 주로 고정된 장치를 뜻하며, 시간을 측정하는 도구들을 통칭합니다.',
    }),
    {
      definition: 'An instrument used for measuring and indicating time, typically by means of hands moving on a dial or displayed numbers.',
      synonyms: ['timepiece', 'chronometer', 'ticker'],
      antonyms: ['timelessness', 'eternity', 'infinity'],
      exampleSentences: [
        { en: 'The old grandfather clock in the hallway chimed every hour.', ko: '복도에 있는 오래된 괘종시계가 매 시간 종을 울렸다.' },
        { en: 'I looked at the clock on the wall and realized I was going to be late.', ko: '벽에 걸린 시계를 보고 내가 늦을 것이라는 걸 깨달았다.' },
      ],
    }
  ),
  word('Close', '닫다', 2, 'verb',
    ['열다', '펼치다', '시작하다', '켜다', '가동하다', '움직이다', '떠나다', '나가다', '열어주다', '해제하다'],
    tips({
      etymology: '라틴어 claudere에서 유래하여 무언가를 차단하거나 막는다는 의미를 담고 있습니다.',
      visual: '활짝 열려 있던 상점의 셔터가 바닥까지 완전히 내려오는 모습을 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'Clothes\'와 헷갈리지 마세요. 옷을 입는 게 아니라 문을 닫는 동작입니다.',
      context: '비즈니스 상황에서는 회의를 마무리하거나 계약을 체결할 때도 자주 사용됩니다.',
      synonymAntonym: 'Shut과 비슷하게 쓰이지만, Open과는 정반대의 행동을 나타냅니다.',
    }),
    {
      definition: 'to move a door, window, or lid so that an opening is no longer accessible',
      synonyms: ['shut', 'seal', 'fasten'],
      antonyms: ['open', 'unlock', 'unseal'],
      exampleSentences: [
        { en: 'Please close the window before the rain starts coming in.', ko: '비가 들이치기 전에 창문을 닫아 주세요.' },
        { en: 'The library will close early for the national holiday.', ko: '도서관은 공휴일을 맞아 일찍 문을 닫을 것이다.' },
      ],
    }
  ),
  word('Cloth', '천', 2, 'noun',
    ['가죽', '종이', '플라스틱', '금속', '나무', '유리', '벽돌', '돌', '모래', '흙'],
    tips({
      etymology: '고대 영어 clath에서 유래하여 무언가를 덮거나 감싸는 물건을 의미하게 되었습니다.',
      visual: '바느질하기 전의 커다란 원단 뭉치나 식탁 위에 깔린 부드러운 직물을 떠올려 보세요.',
      soundAlike: '옷을 뜻하는 Clothes의 뿌리가 되는 단어로, 발음할 때 끝의 \'th\' 발음에 주의하세요.',
      context: '주방에서 식탁을 닦는 행주나 옷을 만드는 원단을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: '섬유 제품을 뜻하는 fabric과 비슷하며, 딱딱한 무기물인 metal과는 반대됩니다.',
    }),
    {
      definition: 'A flexible material made by weaving or knitting fibers together, often used for garments or household tasks.',
      synonyms: ['fabric', 'textile', 'material'],
      antonyms: ['metal', 'plastic', 'stone'],
      exampleSentences: [
        { en: 'She used a damp cloth to wipe the dust off the bookshelf.', ko: '그녀는 책장의 먼지를 닦기 위해 젖은 천을 사용했다.' },
        { en: 'The tailor selected a fine piece of wool cloth for the suit.', ko: '재단사는 정장을 만들기 위해 질 좋은 울 천을 골랐다.' },
      ],
    }
  ),
  word('Coin', '동전', 2, 'noun',
    ['지폐', '수표', '카드', '현금', '금', '은', '보석', '메달', '훈장', '장식품'],
    tips({
      etymology: '라틴어 cuneus(쐐기)에서 유래하여 금속을 찍어내는 도구를 뜻했습니다.',
      visual: '반짝이는 500원짜리 동전이나 금화를 떠올려 보세요.',
      soundAlike: '비트코인(Bitcoin) 할 때의 그 코인(Coin)입니다.',
      context: '자판기에 넣거나 저금통에 모으는 딱딱한 돈입니다.',
      synonymAntonym: '유의어로는 change, currency가 있습니다.',
    }),
    {
      definition: 'a small, flat, and usually round piece of metal used as money',
      synonyms: ['change', 'specie', 'token'],
      antonyms: ['bill', 'note', 'check'],
      exampleSentences: [
        { en: 'I found a rare silver coin while walking in the park.', ko: '공원을 걷다가 희귀한 은색 동전을 발견했다.' },
        { en: 'He flipped a coin to decide who would go first in the game.', ko: '그는 누가 게임을 먼저 할지 정하기 위해 동전을 던졌다.' },
      ],
    }
  ),
  word('Collect', '수집하다', 2, 'verb',
    ['버리다', '분산하다', '흩다', '나눠주다', '기부하다', '포기하다', '잃다', '던지다', '해체하다', '해산하다'],
    tips({
      etymology: '라틴어 어근 col(함께)과 lect(선택하여 모으다)가 결합되어 여러 개를 한데 모은다는 의미가 되었습니다.',
      visual: '방바닥에 흩어져 있는 퍼즐 조각들을 양손으로 쓱 긁어모아 한 상자에 담는 장면을 떠올려 보세요.',
      soundAlike: '유명한 수집가를 뜻하는 \'컬렉터(Collector)\'나 예술품 모음인 \'컬렉션\'이라는 단어와 소리가 같습니다.',
      context: '우표나 동전 같은 취미 용품을 모으는 것뿐만 아니라, 세금이나 정보를 수거할 때도 자주 사용됩니다.',
      synonymAntonym: 'gather와 비슷하게 쓰이지만, scatter처럼 사방으로 흩뿌리는 행동과는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'to bring together various items or information into one group or place',
      synonyms: ['gather', 'accumulate', 'assemble'],
      antonyms: ['scatter', 'disperse', 'distribute'],
      exampleSentences: [
        { en: 'The children went to the beach to collect beautiful seashells.', ko: '아이들은 예쁜 조개껍데기를 수집하러 해변에 갔다.' },
        { en: 'The charity began to collect warm clothes for the homeless.', ko: '자선 단체는 노숙자들을 위해 따뜻한 옷을 모으기 시작했다.' },
      ],
    }
  ),
  word('Cool', '시원한', 2, 'adjective',
    ['뜨거운', '따뜻한', '더운', '뜨끈한', '작열하는', '불타는', '타는', '뜨거워지는', '데우는', '가열하는'],
    tips({
      etymology: '고대 영어 \'col\'에서 유래하여 \'차갑지도 뜨겁지도 않은 상태\'를 의미하게 되었습니다.',
      visual: '얼음이 둥둥 떠 있는 시원한 탄산음료 컵 표면에 맺힌 이슬을 상상해 보세요.',
      soundAlike: '한국어에서도 성격이 시원시원하고 멋진 사람을 \'쿨하다\'라고 표현합니다.',
      context: '단순히 온도가 낮은 것뿐만 아니라, 세련되거나 침착한 태도를 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '상쾌한 느낌의 refreshing과 비슷하며, 미지근함을 뜻하는 tepid와는 반대됩니다.',
    }),
    {
      definition: 'having a moderately low temperature that is often perceived as refreshing or pleasant',
      synonyms: ['chilly', 'refreshing', 'nippy'],
      antonyms: ['warm', 'hot', 'tepid'],
      exampleSentences: [
        { en: 'A cool breeze made the summer evening very pleasant.', ko: '시원한 산들바람이 여름 저녁을 매우 즐겁게 만들었다.' },
        { en: 'Wait for the soup to cool down before you eat it.', ko: '국이 식을 때까지 기다렸다가 드세요.' },
      ],
    }
  ),
  word('Copy', '복사하다', 2, 'verb',
    ['원본', '만들다', '창작하다', '발명하다', '고안하다', '변형하다', '바꾸다', '지우다', '삭제하다', '없애다'],
    tips({
      etymology: '라틴어 copia(풍부함)에서 유래하여 똑같은 것을 많이 만든다는 의미로 확장되었습니다.',
      visual: '복사기에서 똑같은 모양의 종이가 쉴 새 없이 쏟아져 나오는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 단축키인 \'카피(Copy) 앤 페이스트\'를 떠올리면 기억하기 쉽습니다.',
      context: '서류를 복제하는 상황뿐만 아니라 타인의 말투나 행동을 흉내 낼 때도 자주 쓰입니다.',
      synonymAntonym: 'duplicate는 똑같이 만드는 것이고, original은 복사본이 아닌 원래의 것을 뜻합니다.',
    }),
    {
      definition: 'to make a duplicate or reproduction of something',
      synonyms: ['duplicate', 'replicate', 'imitate'],
      antonyms: ['originate', 'create', 'invent'],
      exampleSentences: [
        { en: 'Can you copy these files onto a USB drive for me?', ko: '이 파일들을 USB 드라이브에 복사해 줄 수 있니?' },
        { en: 'The student was punished for trying to copy his friend\'s homework.', ko: '그 학생은 친구의 숙제를 베끼려다 벌을 받았다.' },
      ],
    }
  ),
  word('Count', '세다', 2, 'verb',
    ['놓치다', '무시하다', '추측하다', '대략하다', '어림하다', '잊다', '혼란', '흐트러뜨리다', '섞다', '합치다'],
    tips({
      etymology: '라틴어 computare에서 유래하여 \'함께 계산하다\'라는 의미를 담고 있습니다.',
      visual: '물건 위에 하나씩 숫자를 적은 스티커를 붙이며 합계를 내는 장면을 상상하세요.',
      soundAlike: '운동 경기 시작 전 \'카운트다운\'을 외치며 숫자를 거꾸로 읊는 소리를 기억하세요.',
      context: '단순히 숫자를 읊는 것뿐만 아니라, 어떤 것이 가치 있게 여겨지거나 포함될 때도 쓰입니다.',
      synonymAntonym: 'calculate는 정밀한 계산을, ignore는 수치나 존재를 무시함을 뜻합니다.',
    }),
    {
      definition: 'to determine the total number of items in a group by assigning a number to each one',
      synonyms: ['calculate', 'enumerate', 'tally'],
      antonyms: ['ignore', 'disregard', 'guess'],
      exampleSentences: [
        { en: 'The shepherd had to count his sheep every evening.', ko: '양치기는 매일 저녁 양의 수를 세어야 했다.' },
        { en: 'Every vote will count in this important election.', ko: '이 중요한 선거에서는 모든 투표가 중요할 것이다.' },
      ],
    }
  ),
  word('Crash', '충돌', 2, 'noun',
    ['평화', '조화', '통과', '성공', '안전', '보호', '예방', '회피', '우회', '면제'],
    tips({
      etymology: '무언가 강하게 부서질 때 발생하는 파열음을 흉내 낸 의성어에서 유래한 단어입니다.',
      visual: '두 물체가 빠른 속도로 달려오다 정면으로 쾅 하고 부딪혀 파편이 튀는 장면을 상상하세요.',
      soundAlike: '컴퓨터 프로그램이 갑자기 \'콰광\'하고 멈춰버리는 현상도 똑같이 크래시라고 부릅니다.',
      context: '교통사고뿐만 아니라 비행기 추락이나 주식 시장의 급락을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '충돌을 뜻하는 collision과 비슷하며, 반대로 충돌을 피하는 것은 avoidance라고 합니다.',
    }),
    {
      definition: 'A sudden loud noise as of something breaking or hitting another object with great force.',
      synonyms: ['collision', 'impact', 'smash'],
      antonyms: ['avoidance', 'near-miss', 'safety'],
      exampleSentences: [
        { en: 'We heard a loud crash from the kitchen after the plate fell.', ko: '접시가 떨어진 후 부엌에서 크게 부서지는 소리가 났다.' },
        { en: 'Luckily, no one was hurt in the car crash on the highway.', ko: '다행히 고속도로에서 발생한 자동차 충돌 사고에서 다친 사람은 없었다.' },
      ],
    }
  ),
  word('Cream', '크림', 2, 'noun',
    ['물', '기름', '초', '연고', '로션', '파우더', '립스틱', '마스카라', '셰이딩', '베이스'],
    tips({
      etymology: '라틴어 chrisma에서 유래하여 원래는 \'기름을 바르는 것\'을 의미했습니다.',
      visual: '케이크 위에 몽글몽글하게 올라간 하얀 생크림의 부드러운 질감을 상상해 보세요.',
      soundAlike: '여름에 즐겨 먹는 \'아이스크림\'이나 손에 바르는 \'핸드크림\'의 그 질감입니다.',
      context: '우유에서 분리된 지방층뿐만 아니라 걸쭉한 형태의 화장품이나 연고를 지칭할 때도 쓰입니다.',
      synonymAntonym: 'lotion이나 moisturizer와 비슷하지만, liquid처럼 아주 묽은 상태와는 대조됩니다.',
    }),
    {
      definition: 'The thick, fatty substance that forms on top of milk or a smooth substance applied to the skin.',
      synonyms: ['lotion', 'ointment', 'paste'],
      antonyms: ['liquid', 'water', 'solid'],
      exampleSentences: [
        { en: 'I like to put a little bit of cream in my morning coffee.', ko: '나는 아침 커피에 크림을 약간 넣는 것을 좋아한다.' },
        { en: 'She applied a soothing cream to her sunburned skin.', ko: '그녀는 햇볕에 탄 피부에 진정 크림을 발랐다.' },
      ],
    }
  ),
  word('Cross', '건너다', 2, 'verb',
    ['돌아가다', '물러서다', '피하다', '우회하다', '멈추다', '서다', '대기하다', '기다리다', '지켜보다', '관망하다'],
    tips({
      etymology: '라틴어 crux(십자가)에서 유래하여 두 선이 교차하거나 가로지른다는 의미로 발전했습니다.',
      visual: '도로의 횡단보도를 따라 반대편으로 발을 내딛는 장면을 상상해 보세요.',
      soundAlike: '어깨에 끈을 대각선으로 가로질러 매는 \'크로스백\'을 떠올리면 쉽습니다.',
      context: '길을 건너는 물리적 이동뿐만 아니라, 강이나 경계선을 넘을 때도 자주 쓰입니다.',
      synonymAntonym: 'traverse는 가로질러 가는 것을, stay는 한곳에 머무는 것을 뜻합니다.',
    }),
    {
      definition: 'to go or extend across from one side to the other',
      synonyms: ['traverse', 'span', 'bridge'],
      antonyms: ['stay', 'remain', 'stop'],
      exampleSentences: [
        { en: 'Be careful and look both ways before you cross the street.', ko: '길을 건너기 전에 조심해서 양쪽을 살피세요.' },
        { en: 'The hikers had to cross a small river to reach the camp.', ko: '하이커들은 캠프에 도착하기 위해 작은 강을 건너야 했다.' },
      ],
    }
  ),
  word('Crowd', '군중', 2, 'noun',
    ['개인', '혼자', '소수', '한 명', '빈 공간', '공허', '적막', '고요', '평화', '조용함'],
    tips({
      etymology: '고대 영어 crudan(밀다)에서 유래하여 서로 밀치는 많은 사람을 뜻합니다.',
      visual: '지하철역이나 축제 현장에 빽빽하게 모인 사람들을 상상해 보세요.',
      soundAlike: '크라우드(Crowd) 펀딩은 여러 명의 대중에게 자금을 모으는 방식입니다.',
      context: '콘서트장이나 경기장처럼 사람이 너무 많이 모여 붐비는 상태를 묘사할 때 씁니다.',
      synonymAntonym: 'multitude는 아주 많은 수를, solitude는 혼자 있는 상태를 뜻합니다.',
    }),
    {
      definition: 'a large number of people gathered together in a disorganized or unruly way',
      synonyms: ['multitude', 'throng', 'gathering'],
      antonyms: ['individual', 'solitude', 'vacuum'],
      exampleSentences: [
        { en: 'A huge crowd gathered to watch the fireworks display.', ko: '불꽃놀이를 보기 위해 거대한 군중이 모였다.' },
        { en: 'I lost sight of my friend in the busy holiday crowd.', ko: '나는 붐비는 휴일 인파 속에서 친구를 놓쳤다.' },
      ],
    }
  ),
  word('Cry', '울다', 2, 'verb',
    ['웃다', '미소짓다', '환호하다', '기뻐하다', '축하하다', '만족하다', '흐뭇해하다', '평온하다', '차분하다', '즐겁다'],
    tips({
      etymology: '라틴어 quiritare(도움을 요청하며 부르짖다)에서 유래하여 소리 내어 우는 행위를 뜻하게 되었습니다.',
      visual: '눈가가 촉촉해지며 뺨을 타고 눈물이 뚝뚝 떨어지는 슬픈 표정을 떠올려 보세요.',
      soundAlike: '아이들이 울 때 내는 소리와 비슷한 \'크라이\' 발음을 연상하면 기억하기 쉽습니다.',
      context: '단순히 슬플 때뿐만 아니라 너무 기쁘거나 신체적인 통증이 심할 때도 사용합니다.',
      synonymAntonym: '소리 없이 흐느끼는 weep와 대조되며, 즐거움의 표현인 laugh와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to shed tears, typically as an expression of distress, pain, or sorrow',
      synonyms: ['weep', 'sob', 'wail'],
      antonyms: ['laugh', 'smile', 'rejoice'],
      exampleSentences: [
        { en: 'The little boy started to cry when he fell off his bike.', ko: '어린 소년은 자전거에서 떨어지자 울기 시작했다.' },
        { en: 'Sometimes people cry because they are extremely happy.', ko: '때때로 사람들은 너무 행복해서 울기도 한다.' },
      ],
    }
  ),
  word('Curly', '곱슬거리는', 2, 'adjective',
    ['곧은', '뻣뻣한', '늘어진', '부드러운', '단정한', '날카로운', '각진', '뭉툭한', '매끄러운', '딱딱한'],
    tips({
      etymology: '무언가를 둥글게 말다라는 뜻의 동사 curl에 형용사 접미사 y가 결합되어 만들어졌습니다.',
      visual: '포크로 돌돌 말아 올린 스파게티 면이나 라면의 꼬불꼬불한 모양을 상상해 보세요.',
      soundAlike: '유명한 감자튀김 종류인 \'컬리 후라이\'의 돌돌 말린 모양을 떠올리면 기억하기 쉽습니다.',
      context: '사람의 머리카락 스타일이나 강아지의 털, 혹은 식물의 덩굴 모양을 묘사할 때 주로 사용합니다.',
      synonymAntonym: '물결 모양인 wavy와 비슷하며, 쭉 뻗은 상태를 뜻하는 straight와는 반대되는 개념입니다.',
    }),
    {
      definition: 'formed into a series of curves or spirals rather than being straight',
      synonyms: ['wavy', 'coiled', 'frizzy'],
      antonyms: ['straight', 'flat', 'smooth'],
      exampleSentences: [
        { en: 'She was born with naturally curly hair that is hard to brush.', ko: '그녀는 빗질하기 힘든 타고난 곱슬머리를 가지고 태어났다.' },
        { en: 'The pig has a cute, curly tail.', ko: '그 돼지는 귀엽고 꼬불꼬불한 꼬리를 가지고 있다.' },
      ],
    }
  ),
  word('Curtain', '커튼', 2, 'noun',
    ['블라인드', '셔터', '창문', '유리', '벽', '천장', '바닥', '카펫', '매트', '스크린'],
    tips({
      etymology: '라틴어 cortina에서 유래했으며, 원래는 울타리나 막을 의미했습니다.',
      visual: '창가에 부드럽게 늘어져 바람에 흔들리는 긴 천의 모습을 떠올려 보세요.',
      soundAlike: '공연이 끝난 뒤 관객의 박수에 배우가 다시 나오는 \'커튼콜\'을 기억하세요.',
      context: '주로 실내 장식, 사생활 보호, 또는 극장의 무대 시작과 끝을 알릴 때 쓰입니다.',
      synonymAntonym: 'drape는 주로 두꺼운 천을, blind는 조절 가능한 가리개를 뜻합니다.',
    }),
    {
      definition: 'A hanging piece of fabric used to shut out light from a window or to provide privacy',
      synonyms: ['drape', 'blind', 'shutter'],
      antonyms: ['exposure', 'opening', 'unveiling'],
      exampleSentences: [
        { en: 'She pulled the curtain shut to keep the sunlight out of the bedroom.', ko: '그녀는 침실에 햇빛이 들어오지 않도록 커튼을 쳤다.' },
        { en: 'The heavy velvet curtain rose, signaling the start of the opera.', ko: '두꺼운 벨벳 커튼이 올라가며 오페라의 시작을 알렸다.' },
      ],
    }
  ),
];
