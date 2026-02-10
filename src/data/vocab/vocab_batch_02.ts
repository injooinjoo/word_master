import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch02: VocabItem[] = [
  word('Baby', '아기', 1, 'noun',
    ['어른', '청소년', '노인', '학생', '선생님', '엄마', '아빠', '언니', '동생', '할머니'],
    tips({
      etymology: '중세 영어 babi에서 유래, 옹알이 소리 모방',
      visual: '작은 아기가 기어다니는 모습',
      soundAlike: '베이비 = 배(belly)에서 나온 비(be)',
      context: 'The baby is sleeping in the crib.',
      synonymAntonym: 'Syn: infant, Ant: adult',
    }),
    {
      definition: 'a very young child or infant',
      wordDistractors: ['Babe', 'Bacon', 'Basis'],
      definitionDistractors: [
        'a fully grown person',
        'a young person between childhood and adulthood',
        'a person of advanced age',
      ],
      exampleSentences: [
        { en: 'The baby is sleeping in the crib.', ko: '아기가 침대에서 잠을 자고 있다.' },
        { en: 'She has a new baby sister.', ko: '그녀에게 새로 태어난 여동생이 있다.' },
      ],
    }
  ),
  word('Bed', '침대', 1, 'noun',
    ['의자', '소파', '탁자', '선반', '책상', '침실', '이불', '베개', '매트리스', '서랍장'],
    tips({
      etymology: '고대 영어 bedd에서 유래',
      visual: '푹신한 이불이 덮인 침대',
      soundAlike: '베드 = 베드타임(취침 시간)',
      context: 'I go to bed at 10 o\'clock.',
      synonymAntonym: 'Syn: cot',
    }),
    {
      definition: 'a piece of furniture for sleeping on',
      wordDistractors: ['Bet', 'Bid', 'Bud'],
      definitionDistractors: [
        'a seat for one person with a back',
        'a piece of furniture for sitting on',
        'a flat surface supported by legs',
      ],
      exampleSentences: [
        { en: 'I go to bed at 10 o\'clock.', ko: '나는 10시에 잠자리에 든다.' },
        { en: 'The bed is too soft.', ko: '침대가 너무 부드럽다.' },
      ],
    }
  ),
  word('Bird', '새', 1, 'noun',
    ['날개', '부리', '알', '둥지', '깃털', '나비', '벌', '파리', '나무', '하늘'],
    tips({
      etymology: '고대 영어 bridd에서 유래',
      visual: '하늘을 나는 작은 새',
      soundAlike: '버드 = 버드아이뷰(새의 시선)',
      context: 'The bird sings in the tree.',
      synonymAntonym: 'Syn: fowl',
    }),
    {
      definition: 'a warm-blooded animal with feathers and wings that can usually fly',
      wordDistractors: ['Beard', 'Birth', 'Burg'],
      definitionDistractors: [
        'a flying insect with colorful wings',
        'a flying insect that makes honey',
        'a small flying insect',
      ],
      exampleSentences: [
        { en: 'The bird sings in the tree.', ko: '새가 나무에서 노래한다.' },
        { en: 'A bird flew into the window.', ko: '새가 창문으로 날아갔다.' },
      ],
    }
  ),
  word('Blue', '파란색', 1, 'adjective',
    ['빨간색', '초록색', '노란색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 blāw에서 유래',
      visual: '맑은 하늘과 바다의 파란색',
      soundAlike: '블루 = 블루베리(파란 열매)',
      context: 'The sky is blue today.',
      synonymAntonym: 'Syn: azure',
    }),
    {
      definition: 'of the color between green and violet in the spectrum',
      wordDistractors: ['Blur', 'True', 'Blew'],
      definitionDistractors: [
        'of the color of blood',
        'of the color of grass or leaves',
        'of the color of the sun',
      ],
      exampleSentences: [
        { en: 'The sky is blue today.', ko: '오늘 하늘은 파랗다.' },
        { en: 'She has beautiful blue eyes.', ko: '그녀는 아름다운 파란 눈을 가지고 있다.' },
      ],
    }
  ),
  word('Box', '상자', 1, 'noun',
    ['가방', '서랍', '병', '통', '바구니', '자루', '캔', '컵', '병', '케이스'],
    tips({
      etymology: '그리스어 pyxis에서 유래',
      visual: '사각형 상자에 선물이 담긴 모습',
      soundAlike: '박스 = 박스오피스(상자처럼 닫힌)',
      context: 'Put the toys in the box.',
      synonymAntonym: 'Syn: container',
    }),
    {
      definition: 'a rigid container with typically rectangular sides',
      wordDistractors: ['Fox', 'Boss', 'Boat'],
      definitionDistractors: [
        'a flexible container for carrying things',
        'a container with a narrow neck',
        'a container made of woven material',
      ],
      exampleSentences: [
        { en: 'Put the toys in the box.', ko: '장난감을 상자에 넣어라.' },
        { en: 'She received a box of chocolates.', ko: '그녀는 초콜릿 상자를 받았다.' },
      ],
    }
  ),
  word('Bus', '버스', 1, 'noun',
    ['기차', '지하철', '택시', '자동차', '비행기', '배', '정류장', '표', '운전사', '승객'],
    tips({
      etymology: 'omnibus의 약어(라틴어)',
      visual: '큰 버스가 정류장에 서 있는 모습',
      soundAlike: '버스 = 스쿨버스(학교 버스)',
      context: 'I take the bus to school.',
      synonymAntonym: 'Syn: coach',
    }),
    {
      definition: 'a large motor vehicle for carrying many passengers',
      wordDistractors: ['Bun', 'Bug', 'Buck'],
      definitionDistractors: [
        'a vehicle that runs on rails',
        'a vehicle that travels underground',
        'a vehicle driven by a chauffeur for hire',
      ],
      exampleSentences: [
        { en: 'I take the bus to school.', ko: '나는 학교에 버스를 타고 간다.' },
        { en: 'The bus stops at every corner.', ko: '버스가 모퉁이마다 멈춘다.' },
      ],
    }
  ),
  word('Cake', '케이크', 1, 'noun',
    ['빵', '쿠키', '파이', '과자', '아이스크림', '캔디', '초콜릿', '초', '설탕', '밀가루'],
    tips({
      etymology: '고대 노르웨이어 kaka에서 유래',
      visual: '초가 꽂힌 생일 케이크',
      soundAlike: '케이크 = 케이크데이(축하 날)',
      context: 'We had cake for her birthday.',
      synonymAntonym: 'Syn: pastry',
    }),
    {
      definition: 'a sweet baked food made from flour, sugar, and eggs',
      wordDistractors: ['Cage', 'Cope', 'Cane'],
      definitionDistractors: [
        'a baked food made from flour and water',
        'a small sweet baked good',
        'a frozen sweet dessert',
      ],
      exampleSentences: [
        { en: 'We had cake for her birthday.', ko: '우리는 그녀 생일에 케이크를 먹었다.' },
        { en: 'Would you like a piece of cake?', ko: '케이크 한 조각 드시겠어요?' },
      ],
    }
  ),
  word('City', '도시', 1, 'noun',
    ['나라', '마을', '시골', '거리', '건물', '학교', '공원', '병원', '은행', '시청'],
    tips({
      etymology: '라틴어 civitas에서 유래',
      visual: '고층 빌딩이 빽빽한 도시 전경',
      soundAlike: '시티 = 시티라이프(도시 생활)',
      context: 'Seoul is a big city.',
      synonymAntonym: 'Syn: metropolis',
    }),
    {
      definition: 'a large settlement of people with many buildings and streets',
      wordDistractors: ['Cite', 'Kitty', 'Silly'],
      definitionDistractors: [
        'a nation with its own government',
        'a small community in a rural area',
        'an area of countryside',
      ],
      exampleSentences: [
        { en: 'Seoul is a big city.', ko: '서울은 큰 도시이다.' },
        { en: 'I live in the center of the city.', ko: '나는 도시 중심에 산다.' },
      ],
    }
  ),
  word('Cold', '추운', 1, 'adjective',
    ['따뜻한', '뜨거운', '시원한', '얼음', '눈', '겨울', '감기', '열', '더운', '미지근한'],
    tips({
      etymology: '고대 영어 ceald에서 유래',
      visual: '추위에 떨리는 사람',
      soundAlike: '콜드 = 콜드크림(차가운 크림)',
      context: 'It is cold outside today.',
      synonymAntonym: 'Syn: chilly, Ant: hot',
    }),
    {
      definition: 'having a low temperature',
      wordDistractors: ['Gold', 'Fold', 'Bold'],
      definitionDistractors: [
        'having a high temperature',
        'pleasantly warm',
        'moderately warm',
      ],
      exampleSentences: [
        { en: 'It is cold outside today.', ko: '오늘 밖은 춥다.' },
        { en: 'I need a cold drink.', ko: '저는 차가운 음료가 필요해요.' },
      ],
    }
  ),
  word('Cup', '머그컵', 1, 'noun',
    ['그릇', '접시', '병', '유리잔', '냄비', '찻잔', '커피', '물', '국', '수프'],
    tips({
      etymology: '라틴어 cuppa에서 유래',
      visual: '손에 든 따뜻한 음료가 담긴 컵',
      soundAlike: '컵 = 월드컵(세계 컵)',
      context: 'Would you like a cup of tea?',
      synonymAntonym: 'Syn: mug',
    }),
    {
      definition: 'a small container with a handle for drinking',
      wordDistractors: ['Cap', 'Cut', 'Cub'],
      definitionDistractors: [
        'a flat dish for serving food',
        'a container with a narrow neck',
        'a cooking pot with handles',
      ],
      exampleSentences: [
        { en: 'Would you like a cup of tea?', ko: '차 한 잔 드시겠어요?' },
        { en: 'She broke her favorite cup.', ko: '그녀는 가장 좋아하는 컵을 깼다.' },
      ],
    }
  ),
  word('Dance', '춤추다', 1, 'verb',
    ['노래하다', '연주하다', '걷다', '뛰다', '달리다', '놀다', '웃다', '울다', '앉다', '서다'],
    tips({
      etymology: '고대 프랑스어 dancier에서 유래',
      visual: '음악에 맞춰 춤추는 사람들',
      soundAlike: '댄스 = 댄스파티(춤 파티)',
      context: 'She loves to dance.',
      synonymAntonym: 'Syn: sway',
    }),
    {
      definition: 'to move rhythmically to music',
      wordDistractors: ['Dunce', 'Dense', 'Chance'],
      definitionDistractors: [
        'to produce musical sounds with the voice',
        'to play a musical instrument',
        'to move on foot at a regular pace',
      ],
      exampleSentences: [
        { en: 'She loves to dance.', ko: '그녀는 춤추는 것을 좋아한다.' },
        { en: 'Let us dance together.', ko: '같이 춤추자.' },
      ],
    }
  ),
  word('Door', '문', 1, 'noun',
    ['창문', '벽', '천장', '바닥', '지붕', '열쇠', '자물쇠', '손잡이', '현관', '복도'],
    tips({
      etymology: '고대 영어 duru에서 유래',
      visual: '손잡이를 잡고 여는 문',
      soundAlike: '도어 = 도어벨(문 종)',
      context: 'Close the door, please.',
      synonymAntonym: 'Syn: entrance',
    }),
    {
      definition: 'a barrier that can be opened and closed for entering or leaving',
      wordDistractors: ['Dour', 'Floor', 'Bore'],
      definitionDistractors: [
        'an opening in a wall with glass',
        'a vertical structure forming a boundary',
        'a key for locking',
      ],
      exampleSentences: [
        { en: 'Close the door, please.', ko: '문 닫아 주세요.' },
        { en: 'Someone is knocking at the door.', ko: '누군가 문을 두드리고 있다.' },
      ],
    }
  ),
  word('Egg', '달걀', 1, 'noun',
    ['계란', '고기', '우유', '치즈', '버터', '빵', '쌀', '과일', '야채', '닭'],
    tips({
      etymology: '고대 영어 ǣg에서 유래',
      visual: '바삭하게 구운 스크램블 에그',
      soundAlike: '에그 = 에그롤(계란 말이)',
      context: 'I eat an egg for breakfast.',
      synonymAntonym: 'Syn: ovum',
    }),
    {
      definition: 'an oval object laid by birds and reptiles',
      wordDistractors: ['Edge', 'Ego', 'Ebb'],
      definitionDistractors: [
        'the flesh of animals used as food',
        'a white liquid produced by mammals',
        'a bird that lays eggs',
      ],
      exampleSentences: [
        { en: 'I eat an egg for breakfast.', ko: '나는 아침에 달걀을 먹는다.' },
        { en: 'The bird laid an egg in the nest.', ko: '새가 둥지에 알을 낳았다.' },
      ],
    }
  ),
  word('Eye', '눈', 1, 'noun',
    ['귀', '코', '입', '얼굴', '머리', '손', '발', '머리카락', '눈썹', '속눈썹'],
    tips({
      etymology: '고대 영어 ēage에서 유래',
      visual: '빛을 반사하는 눈동자',
      soundAlike: '아이 = 아이브로우(눈썹)',
      context: 'She has beautiful brown eyes.',
      synonymAntonym: 'Syn: organ of sight',
    }),
    {
      definition: 'the organ of sight in humans and animals',
      wordDistractors: ['Aye', 'Bye', 'Dye'],
      definitionDistractors: [
        'the organ of hearing',
        'the organ of smell',
        'the opening for eating and speaking',
      ],
      exampleSentences: [
        { en: 'She has beautiful brown eyes.', ko: '그녀는 아름다운 갈색 눈을 가지고 있다.' },
        { en: 'He closed his eyes and fell asleep.', ko: '그는 눈을 감고 잠들었다.' },
      ],
    }
  ),
  word('Face', '얼굴', 1, 'noun',
    ['머리', '목', '손', '발', '몸', '눈', '코', '입', '귀', '머리카락'],
    tips({
      etymology: '라틴어 facies에서 유래',
      visual: '미소 짓는 얼굴',
      soundAlike: '페이스 = 페이스북(얼굴 책)',
      context: 'Wash your face before bed.',
      synonymAntonym: 'Syn: countenance',
    }),
    {
      definition: 'the front part of the head from forehead to chin',
      wordDistractors: ['Race', 'Case', 'Lace'],
      definitionDistractors: [
        'the upper part of the body',
        'the part of the body connecting head and body',
        'the end of the arm with fingers',
      ],
      exampleSentences: [
        { en: 'Wash your face before bed.', ko: '자기 전에 얼굴을 씻어라.' },
        { en: 'She has a friendly face.', ko: '그녀는 친근한 얼굴을 하고 있다.' },
      ],
    }
  ),
  word('Food', '음식', 1, 'noun',
    ['물', '공기', '불', '흙', '빵', '고기', '과일', '야채', '식사', '간식'],
    tips({
      etymology: '고대 영어 fōda에서 유래',
      visual: '식탁에 차려진 맛있는 음식',
      soundAlike: '푸드 = 푸드코트(음식 코너)',
      context: 'We need food to live.',
      synonymAntonym: 'Syn: sustenance',
    }),
    {
      definition: 'any substance eaten to sustain life and provide energy',
      wordDistractors: ['Foot', 'Fool', 'Fold'],
      definitionDistractors: [
        'a clear liquid essential for life',
        'the invisible gas we breathe',
        'the hot burning substance',
      ],
      exampleSentences: [
        { en: 'We need food to live.', ko: '우리는 살기 위해 음식이 필요하다.' },
        { en: 'The food at this restaurant is delicious.', ko: '이 레스토랑 음식은 맛있다.' },
      ],
    }
  ),
  word('Girl', '소녀', 1, 'noun',
    ['소년', '남자', '여자', '아이', '어른', '엄마', '아빠', '언니', '오빠', '동생'],
    tips({
      etymology: '고대 영어 gyrela에서 유래',
      visual: '활짝 웃는 소녀',
      soundAlike: '걸 = 걸프렌드(여자 친구)',
      context: 'The girl is playing in the park.',
      synonymAntonym: 'Syn: lass, Ant: boy',
    }),
    {
      definition: 'a young female child',
      wordDistractors: ['Curl', 'Gill', 'Grin'],
      definitionDistractors: [
        'a young male child',
        'an adult male human',
        'an adult female human',
      ],
      exampleSentences: [
        { en: 'The girl is playing in the park.', ko: '소녀가 공원에서 놀고 있다.' },
        { en: 'She is a smart girl.', ko: '그녀는 똑똑한 소녀이다.' },
      ],
    }
  ),
  word('Green', '초록색', 1, 'adjective',
    ['빨간색', '파란색', '노란색', '검은색', '흰색', '주황색', '보라색', '갈색', '회색', '분홍색'],
    tips({
      etymology: '고대 영어 grēne에서 유래',
      visual: '싱싱한 초록 나뭇잎',
      soundAlike: '그린 = 그린라이트(초록 신호)',
      context: 'The grass is green in spring.',
      synonymAntonym: 'Syn: verdant',
    }),
    {
      definition: 'of the color between blue and yellow in the spectrum',
      wordDistractors: ['Greed', 'Greet', 'Grove'],
      definitionDistractors: [
        'of the color of blood',
        'of the color of the sky',
        'of the color of the sun',
      ],
      exampleSentences: [
        { en: 'The grass is green in spring.', ko: '봄에는 풀이 초록색이다.' },
        { en: 'She wore a green dress.', ko: '그녀는 초록색 드레스를 입었다.' },
      ],
    }
  ),
  word('Hat', '모자', 1, 'noun',
    ['코트', '재킷', '셔츠', '바지', '신발', '양말', '스카프', '장갑', '안경', '우산'],
    tips({
      etymology: '고대 영어 hætt에서 유래',
      visual: '머리에 쓰인 모자',
      soundAlike: '핫 = 탑핫(모자처럼 꼭대기)',
      context: 'Wear a hat in the sun.',
      synonymAntonym: 'Syn: cap',
    }),
    {
      definition: 'a covering for the head',
      wordDistractors: ['Hot', 'Hit', 'Hut'],
      definitionDistractors: [
        'an outer garment for the upper body',
        'a garment for the legs',
        'a covering for the hands',
      ],
      exampleSentences: [
        { en: 'Wear a hat in the sun.', ko: '햇볕에 모자를 써라.' },
        { en: 'He lost his hat in the wind.', ko: '그는 바람에 모자를 잃어버렸다.' },
      ],
    }
  ),
  word('Home', '집', 1, 'noun',
    ['학교', '회사', '병원', '가게', '공원', '길', '집', '방', '마당', '부엌'],
    tips({
      etymology: '고대 영어 hām에서 유래',
      visual: '따뜻한 조명이 켜진 집',
      soundAlike: '홈 = 홈타운(고향)',
      context: 'There is no place like home.',
      synonymAntonym: 'Syn: house',
    }),
    {
      definition: 'the place where one lives',
      wordDistractors: ['Hose', 'Hone', 'Hume'],
      definitionDistractors: [
        'a place where students learn',
        'a place where people work',
        'a place for medical treatment',
      ],
      exampleSentences: [
        { en: 'There is no place like home.', ko: '집만한 곳이 없다.' },
        { en: 'I will stay home today.', ko: '오늘은 집에 있을 거야.' },
      ],
    }
  ),
  word('King', '왕', 1, 'noun',
    ['여왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '백성', '노예', '황제'],
    tips({
      etymology: '고대 영어 cyning에서 유래',
      visual: '왕관을 쓴 왕이 옥좌에 앉은 모습',
      soundAlike: '킹 = 킹사이즈(왕처럼 큰)',
      context: 'The king rules the country.',
      synonymAntonym: 'Syn: monarch',
    }),
    {
      definition: 'a male ruler of a country who inherits the position',
      wordDistractors: ['Kink', 'Ring', 'Sing'],
      definitionDistractors: [
        'a female ruler of a country',
        'the daughter of a king or queen',
        'the male head of a republic',
      ],
      exampleSentences: [
        { en: 'The king rules the country.', ko: '왕이 나라를 다스린다.' },
        { en: 'The king wore a golden crown.', ko: '왕은 금빛 왕관을 썼다.' },
      ],
    }
  ),
  word('Leg', '다리', 1, 'noun',
    ['팔', '손', '발', '머리', '몸', '허리', '등', '가슴', '어깨', '무릎'],
    tips({
      etymology: '고대 노르웨이어 leggr에서 유래',
      visual: '걷는 사람의 다리',
      soundAlike: '레그 = 테이블레그(탁자 다리)',
      context: 'He broke his leg in the accident.',
      synonymAntonym: 'Syn: limb',
    }),
    {
      definition: 'each of the limbs used for walking and standing',
      wordDistractors: ['Lego', 'Lend', 'Beg'],
      definitionDistractors: [
        'each of the upper limbs of the body',
        'the end of the leg with toes',
        'the part of the body above the legs',
      ],
      exampleSentences: [
        { en: 'He broke his leg in the accident.', ko: '그는 사고에서 다리를 부쉈다.' },
        { en: 'My legs are tired from walking.', ko: '걷다 보니 다리가 피곤하다.' },
      ],
    }
  ),
  word('Man', '남자', 1, 'noun',
    ['여자', '아이', '소년', '소녀', '어른', '노인', '소년', '아버지', '아들', '형제'],
    tips({
      etymology: '고대 영어 mann에서 유래',
      visual: '서 있는 성인 남자',
      soundAlike: '맨 = 맨파워(남성 인력)',
      context: 'The man is walking his dog.',
      synonymAntonym: 'Syn: male, Ant: woman',
    }),
    {
      definition: 'an adult male human',
      wordDistractors: ['Mane', 'Mend', 'Mann'],
      definitionDistractors: [
        'an adult female human',
        'a young human',
        'a male parent',
      ],
      exampleSentences: [
        { en: 'The man is walking his dog.', ko: '그 남자가 개를 산책시키고 있다.' },
        { en: 'Every man has the right to vote.', ko: '모든 남자는 투표권이 있다.' },
      ],
    }
  ),
  word('Nose', '코', 1, 'noun',
    ['눈', '입', '귀', '얼굴', '머리', '턱', '볼', '이마', '목', '가슴'],
    tips({
      etymology: '고대 영어 nosu에서 유래',
      visual: '얼굴 중앙에 있는 코',
      soundAlike: '노즈 = 노즈블리드(코피)',
      context: 'She has a small nose.',
      synonymAntonym: 'Syn: organ of smell',
    }),
    {
      definition: 'the organ used for smelling and breathing',
      wordDistractors: ['Noise', 'Node', 'None'],
      definitionDistractors: [
        'the organ for seeing',
        'the organ for hearing',
        'the opening for eating and speaking',
      ],
      exampleSentences: [
        { en: 'She has a small nose.', ko: '그녀는 작은 코를 가지고 있다.' },
        { en: 'He has a cold and his nose is stuffy.', ko: '그는 감기에 걸려 코가 막혔다.' },
      ],
    }
  ),
  word('Old', '오래된', 1, 'adjective',
    ['새로운', '젊은', '어린', '신선한', '최신', '단순한', '낡은', '고대', '현대', '미래'],
    tips({
      etymology: '고대 영어 eald에서 유래',
      visual: '낡은 건물이나 귀중품',
      soundAlike: '올드 = 올드패션드(구식)',
      context: 'That is an old house.',
      synonymAntonym: 'Syn: ancient, Ant: new',
    }),
    {
      definition: 'having lived or existed for a long time',
      wordDistractors: ['Odd', 'Gold', 'Hold'],
      definitionDistractors: [
        'recently made or created',
        'in the early part of life',
        'not spoiled or stale',
      ],
      exampleSentences: [
        { en: 'That is an old house.', ko: '저것은 오래된 집이다.' },
        { en: 'She is an old friend of mine.', ko: '그녀는 나의 오래된 친구이다.' },
      ],
    }
  ),
  word('Again', '다시', 2, 'adverb',
    ['처음', '한번', '여러번', '항상', '절대', '가끔', '자주', '많이', '조금', '아직'],
    tips({
      etymology: '고대 영어 Ongēan에서 유래',
      visual: '되돌아가는 화살표',
      soundAlike: '어게인 = 어게인앤어게인(반복)',
      context: 'Please say that again.',
      synonymAntonym: 'Syn: once more',
    }),
    {
      definition: 'one more time or another time',
      wordDistractors: ['Against', 'Assign', 'Agin'],
      definitionDistractors: [
        'for the first time',
        'on one occasion only',
        'at all times',
      ],
      exampleSentences: [
        { en: 'Please say that again.', ko: '다시 말해 주세요.' },
        { en: 'I will try again tomorrow.', ko: '내일 다시 시도하겠다.' },
      ],
    }
  ),
  word('Begin', '시작하다', 2, 'verb',
    ['끝내다', '멈추다', '계속하다', '추가하다', '빼다', '바꾸다', '움직이다', '쉬다', '대기하다', '준비하다'],
    tips({
      etymology: '고대 영어 beginnan에서 유래',
      visual: '출발선에서 대기하는 모습',
      soundAlike: '비긴 = 비긴닝(시작)',
      context: 'Let us begin the class.',
      synonymAntonym: 'Syn: start, Ant: end',
    }),
    {
      definition: 'to start or commence',
      wordDistractors: ['Began', 'Begun', 'Being'],
      definitionDistractors: [
        'to bring to an end',
        'to come to a halt',
        'to keep doing something',
      ],
      exampleSentences: [
        { en: 'Let us begin the class.', ko: '수업을 시작하자.' },
        { en: 'The movie begins at eight.', ko: '영화는 8시에 시작한다.' },
      ],
    }
  ),
  word('Body', '몸', 2, 'noun',
    ['머리', '팔', '다리', '손', '발', '심장', '뇌', '피', '뼈', '근육'],
    tips({
      etymology: '고대 영어 bodig에서 유래',
      visual: '전체 인체 실루엣',
      soundAlike: '바디 = 바디랭귀지(몸말)',
      context: 'Exercise is good for your body.',
      synonymAntonym: 'Syn: physique',
    }),
    {
      definition: 'the physical structure of a person or animal',
      wordDistractors: ['Buddy', 'Bold', 'Bony'],
      definitionDistractors: [
        'the upper part of the body',
        'the organ that pumps blood',
        'the organ of thought',
      ],
      exampleSentences: [
        { en: 'Exercise is good for your body.', ko: '운동은 몸에 좋다.' },
        { en: 'She found a body in the water.', ko: '그녀는 물속에서 시체를 발견했다.' },
      ],
    }
  ),
  word('Bring', '가져오다', 2, 'verb',
    ['가져가다', '보내다', '받다', '주다', '던지다', '놓다', '찾다', '잃다', '사다', '팔다'],
    tips({
      etymology: '고대 영어 bringan에서 유래',
      visual: '손에 물건을 들고 오는 모습',
      soundAlike: '브링 = 브링잇온(가져와)',
      context: 'Please bring your book tomorrow.',
      synonymAntonym: 'Syn: carry, Ant: take',
    }),
    {
      definition: 'to carry or convey toward the speaker',
      wordDistractors: ['Brine', 'Blink', 'Brim'],
      definitionDistractors: [
        'to carry or convey away',
        'to cause to go or be taken',
        'to receive something',
      ],
      exampleSentences: [
        { en: 'Please bring your book tomorrow.', ko: '내일 책을 가져와 주세요.' },
        { en: 'Bring me a glass of water.', ko: '물 한 잔 가져다 줘.' },
      ],
    }
  ),
  word('Child', '아이', 2, 'noun',
    ['어른', '청소년', '노인', '부모', '형제', '친구', '선생님', '학생', '아기', '유아'],
    tips({
      etymology: '고대 영어 cild에서 유래',
      visual: '놀고 있는 아이들',
      soundAlike: '차일드 = 차일드케어(아이 돌봄)',
      context: 'Every child deserves love.',
      synonymAntonym: 'Syn: kid, Ant: adult',
    }),
    {
      definition: 'a young human who is not yet an adult',
      wordDistractors: ['Chill', 'Chide', 'Chief'],
      definitionDistractors: [
        'a fully grown person',
        'a person who has children',
        'a person of advanced age',
      ],
      exampleSentences: [
        { en: 'Every child deserves love.', ko: '모든 아이는 사랑을 받을 자격이 있다.' },
        { en: 'The child is playing in the garden.', ko: '아이가 정원에서 놀고 있다.' },
      ],
    }
  ),
  word('Color', '색', 2, 'noun',
    ['빨강', '파랑', '초록', '노랑', '검정', '흰색', '그림', '형태', '크기', '재질'],
    tips({
      etymology: '라틴어 color에서 유래',
      visual: '무지개색 팔레트',
      soundAlike: '컬러 = 컬러풀(다채로운)',
      context: 'What is your favorite color?',
      synonymAntonym: 'Syn: hue',
    }),
    {
      definition: 'the visual appearance of things as determined by light',
      wordDistractors: ['Collar', 'Colder', 'Colar'],
      definitionDistractors: [
        'a drawing or painting',
        'the shape of something',
        'how big something is',
      ],
      exampleSentences: [
        { en: 'What is your favorite color?', ko: '가장 좋아하는 색은 무엇인가요?' },
        { en: 'The wall is painted a bright color.', ko: '벽이 밝은 색으로 칠해져 있다.' },
      ],
    }
  ),
  word('Country', '나라', 2, 'noun',
    ['도시', '마을', '지역', '대륙', '세계', '수도', '국경', '시골', '해외', '고향'],
    tips({
      etymology: '라틴어 contrata에서 유래',
      visual: '국기가 펄럭이는 나라',
      soundAlike: '컨트리 = 컨트리뮤직(시골 음악)',
      context: 'Korea is a beautiful country.',
      synonymAntonym: 'Syn: nation',
    }),
    {
      definition: 'a nation with its own government and territory',
      wordDistractors: ['County', 'Counter', 'Contrary'],
      definitionDistractors: [
        'a large settlement with many buildings',
        'a small community in a rural area',
        'an area of land',
      ],
      exampleSentences: [
        { en: 'Korea is a beautiful country.', ko: '한국은 아름다운 나라이다.' },
        { en: 'I want to visit many countries.', ko: '나는 많은 나라를 방문하고 싶다.' },
      ],
    }
  ),
  word('Dark', '어두운', 2, 'adjective',
    ['밝은', '빛나는', '흰', '투명한', '맑은', '구름낀', '그늘진', '밤', '그림자', '촛불'],
    tips({
      etymology: '고대 영어 deorc에서 유래',
      visual: '불이 꺼진 어두운 방',
      soundAlike: '다크 = 다크모드(어두운 모드)',
      context: 'It gets dark early in winter.',
      synonymAntonym: 'Syn: dim, Ant: light',
    }),
    {
      definition: 'having little or no light',
      wordDistractors: ['Dart', 'Darn', 'Park'],
      definitionDistractors: [
        'filled with light',
        'giving out light',
        'allowing light to pass through',
      ],
      exampleSentences: [
        { en: 'It gets dark early in winter.', ko: '겨울에는 일찍 어두워진다.' },
        { en: 'He is afraid of the dark.', ko: '그는 어둠을 무서워한다.' },
      ],
    }
  ),
  word('Earth', '지구', 2, 'noun',
    ['달', '태양', '별', 'Mars', '우주', '천체', '하늘', '바다', '대지', '흙'],
    tips({
      etymology: '고대 영어 eorþe에서 유래',
      visual: '우주에서 보이는 파란 지구',
      soundAlike: '어스 = 어스데이(지구의 날)',
      context: 'The Earth revolves around the Sun.',
      synonymAntonym: 'Syn: globe',
    }),
    {
      definition: 'the planet we live on',
      wordDistractors: ['Earthy', 'Earthen', 'Earn'],
      definitionDistractors: [
        'the natural satellite of Earth',
        'the star that gives us light',
        'the empty space beyond the atmosphere',
      ],
      exampleSentences: [
        { en: 'The Earth revolves around the Sun.', ko: '지구는 태양 주위를 돈다.' },
        { en: 'We must protect the Earth.', ko: '우리는 지구를 보호해야 한다.' },
      ],
    }
  ),
  word('Fast', '빠른', 2, 'adjective',
    ['느린', '천천히', '급한', '여유로운', '신속한', '지연된', '늦은', '조금', '많이', '적게'],
    tips({
      etymology: '고대 영어 fæst에서 유래',
      visual: '달리는 자동차나 기차',
      soundAlike: '패스트 = 패스트푸드(빠른 음식)',
      context: 'He is a fast runner.',
      synonymAntonym: 'Syn: quick, Ant: slow',
    }),
    {
      definition: 'moving or capable of moving quickly',
      wordDistractors: ['Vast', 'Past', 'Cast'],
      definitionDistractors: [
        'moving at a low speed',
        'taking a long time',
        'delayed or behind schedule',
      ],
      exampleSentences: [
        { en: 'He is a fast runner.', ko: '그는 빠른 달리기 선수이다.' },
        { en: 'The train is very fast.', ko: '그 기차는 매우 빠르다.' },
      ],
    }
  ),
  word('Friend', '친구', 2, 'noun',
    ['적', '낯선사람', '가족', '동료', '이웃', '선생님', '학생', '부모', '형제', '연인'],
    tips({
      etymology: '고대 영어 frēond에서 유래',
      visual: '함께 웃는 친구들',
      soundAlike: '프렌드 = 베스트프렌드(가장 친한 친구)',
      context: 'She is my best friend.',
      synonymAntonym: 'Syn: pal, Ant: enemy',
    }),
    {
      definition: 'a person one knows and likes',
      wordDistractors: ['Fiend', 'Fringe', 'Trend'],
      definitionDistractors: [
        'a person one opposes',
        'someone one does not know',
        'a group of people related by blood',
      ],
      exampleSentences: [
        { en: 'She is my best friend.', ko: '그녀는 나의 가장 친한 친구이다.' },
        { en: 'I made a new friend at school.', ko: '나는 학교에서 새 친구를 사귀었다.' },
      ],
    }
  ),
  word('Game', '게임', 2, 'noun',
    ['운동', '놀이', '경기', '승부', '규칙', '플레이어', '점수', '시합', '대회', '토너먼트'],
    tips({
      etymology: '고대 영어 gamen에서 유래',
      visual: '보드게임을 하는 사람들',
      soundAlike: '게임 = 비디오게임',
      context: 'Let us play a game.',
      synonymAntonym: 'Syn: sport',
    }),
    {
      definition: 'an activity for amusement or competition with rules',
      wordDistractors: ['Fame', 'Came', 'Tame'],
      definitionDistractors: [
        'physical activity for fitness',
        'a short sleep',
        'a form of entertainment with actors',
      ],
      exampleSentences: [
        { en: 'Let us play a game.', ko: '게임을 하자.' },
        { en: 'We watched the game on TV.', ko: '우리는 TV에서 경기를 봤다.' },
      ],
    }
  ),
  word('Group', '그룹', 2, 'noun',
    ['개인', '한명', '여럿', '팀', '모임', '단체', '조직', '클럽', '동호회', '회원'],
    tips({
      etymology: '이탈리아어 gruppo에서 유래',
      visual: '원을 그리며 모인 사람들',
      soundAlike: '그룹 = 그룹웨어(그룹 소프트웨어)',
      context: 'We work in a group of five.',
      synonymAntonym: 'Syn: team',
    }),
    {
      definition: 'a number of people or things gathered together',
      wordDistractors: ['Grope', 'Grape', 'Grasp'],
      definitionDistractors: [
        'a single person',
        'a pair of people',
        'the whole of something',
      ],
      exampleSentences: [
        { en: 'We work in a group of five.', ko: '우리는 다섯 명이 한 그룹으로 일한다.' },
        { en: 'A group of students entered the room.', ko: '한 그룹의 학생들이 방에 들어왔다.' },
      ],
    }
  ),
  word('Head', '머리', 2, 'noun',
    ['몸', '팔', '다리', '손', '발', '얼굴', '목', '어깨', '가슴', '배'],
    tips({
      etymology: '고대 영어 hēafod에서 유래',
      visual: '사람의 머리 실루엣',
      soundAlike: '헤드 = 헤드폰(머리에 쓰는)',
      context: 'She nodded her head.',
      synonymAntonym: 'Syn: skull',
    }),
    {
      definition: 'the upper part of the body containing the brain',
      wordDistractors: ['Heed', 'Herd', 'Heal'],
      definitionDistractors: [
        'the central part of the body',
        'each of the limbs for walking',
        'the end of the arm with fingers',
      ],
      exampleSentences: [
        { en: 'She nodded her head.', ko: '그녀는 머리를 끄덕였다.' },
        { en: 'He hit his head on the door.', ko: '그는 문에 머리를 부딪혔다.' },
      ],
    }
  ),
  word('Heart', '심장', 2, 'noun',
    ['뇌', '폐', '간', '위', '장', '피', '뼈', '근육', '사랑', '감정'],
    tips({
      etymology: '고대 영어 heorte에서 유래',
      visual: '빨간 하트 모양',
      soundAlike: '하트 = 스위트하트(사랑하는 사람)',
      context: 'Your heart beats about 100,000 times a day.',
      synonymAntonym: 'Syn: cardiac organ',
    }),
    {
      definition: 'the organ that pumps blood through the body',
      wordDistractors: ['Hear', 'Hearty', 'Heath'],
      definitionDistractors: [
        'the organ of thought',
        'the organ for breathing',
        'the organ that digests food',
      ],
      exampleSentences: [
        { en: 'Your heart beats about 100,000 times a day.', ko: '심장은 하루에 약 10만 번 뛴다.' },
        { en: 'She has a kind heart.', ko: '그녀는 착한 마음을 가지고 있다.' },
      ],
    }
  ),
  word('Horse', '말', 2, 'noun',
    ['소', '양', '돼지', '닭', '개', '고양이', '토끼', '당나귀', '포니', '조랑말'],
    tips({
      etymology: '고대 영어 hors에서 유래',
      visual: '달리는 말의 모습',
      soundAlike: '호스 = 호스파워(말의 힘)',
      context: 'She rides a horse every weekend.',
      synonymAntonym: 'Syn: stallion',
    }),
    {
      definition: 'a large animal used for riding and pulling loads',
      wordDistractors: ['Hose', 'House', 'Hoarse'],
      definitionDistractors: [
        'a farm animal that gives milk',
        'a farm animal with wool',
        'a farm animal raised for meat',
      ],
      exampleSentences: [
        { en: 'She rides a horse every weekend.', ko: '그녀는 매주말 말을 탄다.' },
        { en: 'The horse ran across the field.', ko: '말이 들판을 달렸다.' },
      ],
    }
  ),
  word('Large', '큰', 2, 'adjective',
    ['작은', '좁은', '짧은', '얇은', '가벼운', '적은', '미세한', '거대한', '광대한', '방대한'],
    tips({
      etymology: '라틴어 largus에서 유래',
      visual: '작은 것과 비교된 큰 물체',
      soundAlike: '라지 = 라지 사이즈(큰 사이즈)',
      context: 'We need a large room.',
      synonymAntonym: 'Syn: big, Ant: small',
    }),
    {
      definition: 'of considerable size or extent',
      wordDistractors: ['Largely', 'Largo', 'Barge'],
      definitionDistractors: [
        'of small size',
        'of narrow width',
        'of short length',
      ],
      exampleSentences: [
        { en: 'We need a large room.', ko: '우리는 큰 방이 필요하다.' },
        { en: 'She has a large family.', ko: '그녀는 큰 가족을 가지고 있다.' },
      ],
    }
  ),
  word('Letter', '편지', 2, 'noun',
    ['우편', '이메일', '알파벳', '글자', '단어', '문장', '책', '신문', '메시지', '연락'],
    tips({
      etymology: '라틴어 littera에서 유래',
      visual: '봉투에 담긴 편지',
      soundAlike: '레터 = 레터박스(우편함)',
      context: 'I received a letter from my friend.',
      synonymAntonym: 'Syn: mail',
    }),
    {
      definition: 'a written message sent by mail',
      wordDistractors: ['Latter', 'Litter', 'Lender'],
      definitionDistractors: [
        'a symbol of the alphabet',
        'a written work of many pages',
        'a daily publication with news',
      ],
      exampleSentences: [
        { en: 'I received a letter from my friend.', ko: '나는 친구로부터 편지를 받았다.' },
        { en: 'She wrote a letter to her mother.', ko: '그녀는 어머니에게 편지를 썼다.' },
      ],
    }
  ),
  word('Light', '빛', 2, 'noun',
    ['어둠', '그림자', '불', '램프', '햇빛', '달빛', '별빛', '조명', '반사', '밝기'],
    tips({
      etymology: '고대 영어 lēoht에서 유래',
      visual: '방을 밝히는 빛',
      soundAlike: '라이트 = 라이트버블(전구)',
      context: 'Plants need light to grow.',
      synonymAntonym: 'Syn: illumination, Ant: dark',
    }),
    {
      definition: 'natural or artificial illumination',
      wordDistractors: ['Right', 'Fight', 'Might'],
      definitionDistractors: [
        'absence of light',
        'an area sheltered from light',
        'a dark area cast by an object',
      ],
      exampleSentences: [
        { en: 'Plants need light to grow.', ko: '식물은 자라기 위해 빛이 필요하다.' },
        { en: 'Turn on the light, please.', ko: '불 켜 주세요.' },
      ],
    }
  ),
  word('Magic', '마법', 2, 'noun',
    ['현실', '과학', '기술', '묘기', '요술', '환상', '꿈', '환상', '마법사', '마술사'],
    tips({
      etymology: '그리스어 magikos에서 유래',
      visual: '빛나는 지팡이와 별',
      soundAlike: '매직 = 매직쇼(마법 쇼)',
      context: 'The children believe in magic.',
      synonymAntonym: 'Syn: witchcraft',
    }),
    {
      definition: 'the power of apparently influencing events by supernatural means',
      wordDistractors: ['Tragic', 'Logic', 'Topic'],
      definitionDistractors: [
        'knowledge based on observation',
        'practical application of knowledge',
        'a sequence of events in life',
      ],
      exampleSentences: [
        { en: 'The children believe in magic.', ko: '아이들은 마법을 믿는다.' },
        { en: 'The magician performed magic tricks.', ko: '마술사가 마법 트릭을 보여줬다.' },
      ],
    }
  ),
  word('Music', '음악', 2, 'noun',
    ['노래', '악기', '멜로디', '리듬', '소리', '소음', '고요', '춤', '연극', '영화'],
    tips({
      etymology: '그리스어 mousikē에서 유래',
      visual: '악보와 악기',
      soundAlike: '뮤직 = 뮤직패스(음악 앱)',
      context: 'I listen to music every day.',
      synonymAntonym: 'Syn: melody',
    }),
    {
      definition: 'sounds arranged in a pleasing way',
      wordDistractors: ['Mosaic', 'Mystic', 'Muscle'],
      definitionDistractors: [
        'a song with words',
        'an instrument for playing music',
        'unwanted or unpleasant sound',
      ],
      exampleSentences: [
        { en: 'I listen to music every day.', ko: '나는 매일 음악을 듣는다.' },
        { en: 'She studied music at university.', ko: '그녀는 대학에서 음악을 공부했다.' },
      ],
    }
  ),
  word('North', '북쪽', 2, 'noun',
    ['남쪽', '동쪽', '서쪽', '위', '아래', '방향', '좌표', '나침반', '지도', '위치'],
    tips({
      etymology: '고대 영어 norþ에서 유래',
      visual: '나침반의 N을 가리키는 바늘',
      soundAlike: '노스 = 노스폴(북극)',
      context: 'Canada is north of the United States.',
      synonymAntonym: 'Syn: northern, Ant: south',
    }),
    {
      definition: 'the direction toward the North Pole',
      wordDistractors: ['Worth', 'Forth', 'Mirth'],
      definitionDistractors: [
        'the direction toward the South Pole',
        'the direction of sunrise',
        'the direction of sunset',
      ],
      exampleSentences: [
        { en: 'Canada is north of the United States.', ko: '캐나다는 미국 북쪽에 있다.' },
        { en: 'The wind is coming from the north.', ko: '바람이 북쪽에서 불어온다.' },
      ],
    }
  ),
  word('Picture', '그림', 2, 'noun',
    ['사진', '도화지', '화가', '프레임', '갤러리', '미술', '디자인', '그림자', '영상', '영화'],
    tips({
      etymology: '라틴어 pictura에서 유래',
      visual: '벽에 걸린 액자 속 그림',
      soundAlike: '픽처 = 픽처북(그림책)',
      context: 'Draw a picture of your family.',
      synonymAntonym: 'Syn: image',
    }),
    {
      definition: 'a visual representation produced by drawing or painting',
      wordDistractors: ['Puncture', 'Posture', 'Pictured'],
      definitionDistractors: [
        'an image captured by a camera',
        'a person who paints',
        'a frame for displaying art',
      ],
      exampleSentences: [
        { en: 'Draw a picture of your family.', ko: '가족 그림을 그려라.' },
        { en: 'She hung the picture on the wall.', ko: '그녀는 벽에 그림을 걸었다.' },
      ],
    }
  ),
  word('Ready', '준비된', 2, 'adjective',
    ['준비 안 된', '바쁜', '여유로운', '당황한', '불안한', '확신한', '의심하는', '완성된', '미완성', '진행중'],
    tips({
      etymology: '고대 영어 rǣde에서 유래',
      visual: '출발선에서 대기하는 선수',
      soundAlike: '레디 = 겟레디(준비하세요)',
      context: 'Are you ready for the test?',
      synonymAntonym: 'Syn: prepared, Ant: unprepared',
    }),
    {
      definition: 'fully prepared for immediate use',
      wordDistractors: ['Reedy', 'Read', 'Steady'],
      definitionDistractors: [
        'not prepared',
        'in a hurry',
        'feeling uncertain',
      ],
      exampleSentences: [
        { en: 'Are you ready for the test?', ko: '시험 준비 되었어?' },
        { en: 'Dinner is ready.', ko: '저녁 준비됐어.' },
      ],
    }
  ),
  word('South', '남쪽', 2, 'noun',
    ['북쪽', '동쪽', '서쪽', '위', '아래', '방향', '적도', '남반구', '지도', '위치'],
    tips({
      etymology: '고대 영어 sūþ에서 유래',
      visual: '나침반의 S를 가리키는 방향',
      soundAlike: '사우스 = 사우스폴(남극)',
      context: 'Australia is in the south.',
      synonymAntonym: 'Syn: southern, Ant: north',
    }),
    {
      definition: 'the direction toward the South Pole',
      wordDistractors: ['Mouth', 'Youth', 'Smooth'],
      definitionDistractors: [
        'the direction toward the North Pole',
        'the direction of sunrise',
        'the direction of sunset',
      ],
      exampleSentences: [
        { en: 'Australia is in the south.', ko: '호주는 남쪽에 있다.' },
        { en: 'They traveled south for the winter.', ko: '그들은 겨울에 남쪽으로 여행했다.' },
      ],
    }
  ),
];
