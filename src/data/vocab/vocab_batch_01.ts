import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch01: VocabItem[] = [
  word('Apple', '사과', 1, 'noun',
    ['바나나', '포도', '오렌지', '딸기', '수박', '배', '복숭아', '감', '체리', '자두'],
    tips({
      etymology: '고대 영어 æppel에서 유래',
      visual: '빨간 사과가 나무에서 떨어지는 모습',
      soundAlike: '애플 = 에이플(A과일)',
      context: 'I eat an apple every day.',
      synonymAntonym: 'Syn: fruit',
    }),
    {
      definition: 'a round fruit with red, green, or yellow skin and firm white flesh',
      wordDistractors: ['Maple', 'Ankle', 'Ample'],
      definitionDistractors: [
        'a long curved fruit with a yellow peel',
        'a small juicy red fruit with tiny seeds on the surface',
        'a large green fruit with red juicy flesh and black seeds',
      ],
      exampleSentences: [
        { en: 'She bit into a crisp red apple.', ko: '그녀는 아삭한 빨간 사과를 한 입 베어 물었다.' },
        { en: 'Apple trees bloom in the spring.', ko: '사과나무는 봄에 꽃을 피운다.' },
      ],
    }
  ),
  word('Book', '책', 1, 'noun',
    ['노트', '신문', '잡지', '다이어리', '일기', '사전', '소설', '공책', '만화', '전자책'],
    tips({
      etymology: '고대 영어 bōc에서 유래',
      visual: '펼쳐진 책에서 글자가 튀어나오는 모습',
      soundAlike: '북 = 북소리처럼 읽는 소리',
      context: 'She reads a book before bed.',
      synonymAntonym: 'Syn: publication',
    }),
    {
      definition: 'a written or printed work of pages bound together',
      wordDistractors: ['Cook', 'Hook', 'Brook'],
      definitionDistractors: [
        'a daily publication with news and articles',
        'a lightweight device for reading digital content',
        'a bound set of blank pages for writing notes',
      ],
      exampleSentences: [
        { en: 'I borrowed a book from the library.', ko: '나는 도서관에서 책을 빌렸다.' },
        { en: 'She is writing a book about her travels.', ko: '그녀는 여행에 관한 책을 쓰고 있다.' },
      ],
    }
  ),
  word('Cat', '고양이', 1, 'noun',
    ['개', '토끼', '햄스터', '새', '물고기', '쥐', '여우', '돼지', '닭', '말'],
    tips({
      etymology: '고대 영어 catt에서 유래',
      visual: '고양이가 야옹하며 구르는 모습',
      soundAlike: '캣 = 캣캣(고양이 울음소리)',
      context: 'The cat is sleeping on the sofa.',
      synonymAntonym: 'Syn: feline',
    }),
    {
      definition: 'a small furry animal often kept as a pet that likes to hunt mice',
      wordDistractors: ['Cap', 'Cot', 'Cut'],
      definitionDistractors: [
        'a loyal animal that barks and wags its tail',
        'a small animal with long ears that hops',
        'a farm animal that clucks and lays eggs',
      ],
      exampleSentences: [
        { en: 'The cat curled up on the warm blanket.', ko: '고양이가 따뜻한 담요 위에 웅크려 앉았다.' },
        { en: 'My cat loves to chase toys.', ko: '우리 고양이는 장난감을 쫓는 것을 좋아한다.' },
      ],
    }
  ),
  word('Dog', '개', 1, 'noun',
    ['고양이', '늑대', '여우', '토끼', '햄스터', '새', '물고기', '양', '말', '돼지'],
    tips({
      etymology: '고대 영어 docga에서 유래',
      visual: '꼬리를 흔드는 개가 주인을 반기는 모습',
      soundAlike: '독 = 독실한(충성스러운)',
      context: 'I walk my dog every morning.',
      synonymAntonym: 'Syn: canine',
    }),
    {
      definition: 'a domesticated animal that barks and is often kept as a pet or for guarding',
      wordDistractors: ['Fog', 'Dig', 'Dug'],
      definitionDistractors: [
        'a fluffy animal that purrs and hunts mice',
        'a wild animal similar to a dog that howls',
        'a farm animal raised for meat and bristles',
      ],
      exampleSentences: [
        { en: 'The dog wagged its tail when I came home.', ko: '내가 집에 오자 개가 꼬리를 흔들었다.' },
        { en: 'We adopted a dog from the shelter.', ko: '우리는 보호소에서 개를 입양했다.' },
      ],
    }
  ),
  word('Eat', '먹다', 1, 'verb',
    ['마시다', '자다', '달리다', '걷다', '읽다', '쓰다', '보다', '듣다', '말하다', '놀다'],
    tips({
      etymology: '고대 영어 etan에서 유래',
      visual: '포크로 음식을 입에 넣는 모습',
      soundAlike: '잇 = 잇다(이어서 먹다)',
      context: 'We eat breakfast at 7 am.',
      synonymAntonym: 'Syn: consume',
    }),
    {
      definition: 'to put food into the mouth and swallow it',
      wordDistractors: ['Met', 'Sat', 'Beat'],
      definitionDistractors: [
        'to take liquid into the mouth and swallow',
        'to rest the body with eyes closed',
        'to move quickly on foot',
      ],
      exampleSentences: [
        { en: 'We eat dinner together as a family.', ko: '우리는 가족과 함께 저녁을 먹는다.' },
        { en: 'She eats a healthy breakfast every morning.', ko: '그녀는 매일 아침 건강한 아침식사를 한다.' },
      ],
    }
  ),
  word('Fish', '물고기', 1, 'noun',
    ['고래', '새우', '문어', '게', '조개', '해파리', '상어', '금붕어', '연어', '참치'],
    tips({
      etymology: '고대 영어 fisc에서 유래',
      visual: '물속에서 헤엄치는 물고기',
      soundAlike: '피쉬 = 피쉬피쉬(물소리)',
      context: 'There are many fish in the pond.',
      synonymAntonym: 'Syn: aquatic animal',
    }),
    {
      definition: 'a cold-blooded animal that lives in water and has fins and gills',
      wordDistractors: ['Dish', 'Wish', 'Fist'],
      definitionDistractors: [
        'a large sea mammal that breathes through a blowhole',
        'a small shellfish with a curved body and legs',
        'a soft sea creature with eight arms',
      ],
      exampleSentences: [
        { en: 'The fish swam gracefully in the aquarium.', ko: '물고기가 수족관에서 우아하게 헤엄쳤다.' },
        { en: 'He caught a big fish at the lake.', ko: '그는 호수에서 큰 물고기를 잡았다.' },
      ],
    }
  ),
  word('Good', '좋은', 1, 'adjective',
    ['나쁜', '큰', '작은', '많은', '적은', '빠른', '느린', '따뜻한', '차가운', '밝은'],
    tips({
      etymology: '고대 영어 gōd에서 유래',
      visual: '엄지가 위로 올라간 좋아요 손짓',
      soundAlike: '굿 = 굿데이(좋은 날)',
      context: 'She is a good student.',
      synonymAntonym: 'Syn: nice, Ant: bad',
    }),
    {
      definition: 'of high quality or satisfactory; pleasant or beneficial',
      wordDistractors: ['Gold', 'Food', 'Wood'],
      definitionDistractors: [
        'of low quality or undesirable',
        'very large in size',
        'small in size or amount',
      ],
      exampleSentences: [
        { en: 'She is a good friend and always helps me.', ko: '그녀는 좋은 친구이고 항상 나를 도와준다.' },
        { en: 'We had good weather for the picnic.', ko: '소풍에 좋은 날씨였다.' },
      ],
    }
  ),
  word('Hand', '손', 1, 'noun',
    ['발', '팔', '다리', '머리', '얼굴', '눈', '코', '입', '귀', '손가락'],
    tips({
      etymology: '고대 영어 hand에서 유래',
      visual: '손바닥을 펼쳐 보여주는 모습',
      soundAlike: '핸드 = 핸드폰(손에 들고)',
      context: 'Wash your hands before eating.',
      synonymAntonym: 'Syn: palm',
    }),
    {
      definition: 'the end part of the arm with fingers used for grasping',
      wordDistractors: ['Sand', 'Band', 'Land'],
      definitionDistractors: [
        'the end part of the leg used for walking',
        'the upper limb from shoulder to hand',
        'the part of the body used for thinking',
      ],
      exampleSentences: [
        { en: 'She raised her hand to ask a question.', ko: '그녀는 질문하려고 손을 들었다.' },
        { en: 'He held the baby\'s hand as they crossed the street.', ko: '그는 길을 건널 때 아기의 손을 잡았다.' },
      ],
    }
  ),
  word('Ice', '얼음', 1, 'noun',
    ['눈', '물', '구름', '비', '바람', '불', '흙', '모래', '돌', '나무'],
    tips({
      etymology: '고대 영어 īs에서 유래',
      visual: '투명한 얼음 조각이 반짝이는 모습',
      soundAlike: '아이스 = 아이스크림(얼음)',
      context: 'The ice is melting in the sun.',
      synonymAntonym: 'Syn: frozen water',
    }),
    {
      definition: 'water frozen solid at or below zero degrees Celsius',
      wordDistractors: ['Nice', 'Rice', 'Mice'],
      definitionDistractors: [
        'frozen precipitation that falls as white flakes',
        'clear liquid essential for life',
        'hot gas and flames that give light',
      ],
      exampleSentences: [
        { en: 'The ice in the drink melted quickly.', ko: '음료의 얼음이 빨리 녹았다.' },
        { en: 'Be careful—the road is covered with ice.', ko: '조심하세요—도로가 얼음으로 덮여 있습니다.' },
      ],
    }
  ),
  word('Jump', '뛰다', 1, 'verb',
    ['달리다', '걷다', '앉다', '서다', '누우다', '날다', '수영하다', '등반하다', '타다', '던지다'],
    tips({
      etymology: '프랑스어 jumpere에서 유래',
      visual: '공중으로 튀어오르는 모습',
      soundAlike: '점프 = 점프점프(뛰는 소리)',
      context: 'The children jump on the trampoline.',
      synonymAntonym: 'Syn: leap',
    }),
    {
      definition: 'to push oneself off the ground into the air using the legs',
      wordDistractors: ['Pump', 'Bump', 'Lump'],
      definitionDistractors: [
        'to move quickly on foot',
        'to move at a regular pace on foot',
        'to move through the air using wings',
      ],
      exampleSentences: [
        { en: 'The children jump on the trampoline.', ko: '아이들이 트램펄린에서 뛰고 있다.' },
        { en: 'The cat can jump very high.', ko: '그 고양이는 아주 높이 뛸 수 있다.' },
      ],
    }
  ),
  word('Key', '열쇠', 1, 'noun',
    ['자물쇠', '문', '창문', '서랍', '상자', '가방', '지갑', '시계', '전화', '버튼'],
    tips({
      etymology: '고대 영어 cǣg에서 유래',
      visual: '열쇠로 문을 열는 모습',
      soundAlike: '키 = 키보드의 키',
      context: 'I lost my key yesterday.',
      synonymAntonym: 'Syn: lock opener',
    }),
    {
      definition: 'a small metal object used to lock or unlock a door or mechanism',
      wordDistractors: ['Knee', 'Keep', 'Keen'],
      definitionDistractors: [
        'a device that prevents a door from opening',
        'a hinged barrier at an entrance',
        'a flat surface for typing on a computer',
      ],
      exampleSentences: [
        { en: 'I lost my key yesterday.', ko: '나는 어제 열쇠를 잃어버렸다.' },
        { en: 'She turned the key in the lock.', ko: '그녀가 자물쇠에 열쇠를 돌렸다.' },
      ],
    }
  ),
  word('Love', '사랑하다', 1, 'verb',
    ['싫어하다', '좋아하다', '미워하다', '그리워하다', '기억하다', '잊다', '믿다', '바라다', '소원하다', '감사하다'],
    tips({
      etymology: '고대 영어 lufu에서 유래',
      visual: '하트 모양이 하늘에 떠있는 모습',
      soundAlike: '러브 = 러브러브(사랑)',
      context: 'I love my family.',
      synonymAntonym: 'Syn: adore, Ant: hate',
    }),
    {
      definition: 'to feel deep affection or strong liking for someone or something',
      wordDistractors: ['Live', 'Lose', 'Lone'],
      definitionDistractors: [
        'to feel strong dislike or aversion',
        'to feel a strong desire for something',
        'to feel thankful or grateful',
      ],
      exampleSentences: [
        { en: 'I love my family.', ko: '나는 가족을 사랑한다.' },
        { en: 'She loves to read books in her free time.', ko: '그녀는 여가 시간에 책 읽는 것을 좋아한다.' },
      ],
    }
  ),
  word('Milk', '우유', 1, 'noun',
    ['물', '주스', '커피', '차', '녹차', '요거트', '치즈', '버터', '크림', '두유'],
    tips({
      etymology: '고대 영어 meolc에서 유래',
      visual: '흰 우유가 컵에 담긴 모습',
      soundAlike: '밀크 = 밀크셰이크(우유)',
      context: 'I drink milk every morning.',
      synonymAntonym: 'Syn: dairy',
    }),
    {
      definition: 'a white liquid produced by mammals to feed their young',
      wordDistractors: ['Silk', 'Ilk', 'Milky'],
      definitionDistractors: [
        'a sweet drink made from fruit',
        'a hot drink made from roasted beans',
        'a solid dairy product made from curdled milk',
      ],
      exampleSentences: [
        { en: 'I drink milk every morning.', ko: '나는 매일 아침 우유를 마신다.' },
        { en: 'The baby needs warm milk before bed.', ko: '아기는 자기 전에 따뜻한 우유가 필요하다.' },
      ],
    }
  ),
  word('Name', '이름', 1, 'noun',
    ['나이', '생일', '주소', '전화번호', '직업', '학교', '친구', '가족', '국적', '취미'],
    tips({
      etymology: '고대 영어 nama에서 유래',
      visual: '명함에 이름이 적힌 모습',
      soundAlike: '네임 = 네임태그(이름표)',
      context: "What is your name?",
      synonymAntonym: 'Syn: title',
    }),
    {
      definition: 'a word or words by which a person or thing is known',
      wordDistractors: ['Game', 'Fame', 'Same'],
      definitionDistractors: [
        'the number of years someone has lived',
        'the day someone was born',
        'the place where someone lives',
      ],
      exampleSentences: [
        { en: "What is your name?", ko: '당신의 이름이 무엇입니까?' },
        { en: 'My name is written on the nametag.', ko: '내 이름이 이름표에 적혀 있다.' },
      ],
    }
  ),
  word('Open', '열다', 1, 'verb',
    ['닫다', '만들다', '부수다', '사다', '팔다', '주다', '받다', '찾다', '잃다', '보이다'],
    tips({
      etymology: '고대 영어 openian에서 유래',
      visual: '문을 밀어서 여는 모습',
      soundAlike: '오픈 = 오픈하우스(열린 집)',
      context: 'Please open the window.',
      synonymAntonym: 'Syn: unlock, Ant: close',
    }),
    {
      definition: 'to move something so that it is no longer closed or covered',
      wordDistractors: ['Oven', 'Often', 'Omen'],
      definitionDistractors: [
        'to move something so that it is closed',
        'to create or build something',
        'to cause damage or break apart',
      ],
      exampleSentences: [
        { en: 'Please open the window.', ko: '창문을 열어 주세요.' },
        { en: 'She opened the door and walked in.', ko: '그녀가 문을 열고 들어왔다.' },
      ],
    }
  ),
  word('Pen', '펜', 1, 'noun',
    ['연필', '지우개', '색연필', '마커', '칠판', '노트', '공책', '책', '가위', '풀'],
    tips({
      etymology: '라틴어 penna(깃털)에서 유래',
      visual: '펜으로 글씨를 쓰는 모습',
      soundAlike: '펜 = 펜팔(펜으로 편지)',
      context: 'Can I borrow your pen?',
      synonymAntonym: 'Syn: writing instrument',
    }),
    {
      definition: 'a tool with ink used for writing or drawing',
      wordDistractors: ['Pan', 'Pin', 'Ten'],
      definitionDistractors: [
        'a writing tool with graphite lead',
        'a tool for removing pencil marks',
        'a bound set of blank pages for notes',
      ],
      exampleSentences: [
        { en: 'Can I borrow your pen?', ko: '펜 빌려줄 수 있어요?' },
        { en: 'She signed the document with a blue pen.', ko: '그녀는 파란 펜으로 문서에 서명했다.' },
      ],
    }
  ),
  word('Queen', '여왕', 1, 'noun',
    ['왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '장관', '회장', '부장'],
    tips({
      etymology: '고대 영어 cwēn에서 유래',
      visual: '왕관을 쓴 여왕이 옥좌에 앉은 모습',
      soundAlike: '퀸 = 퀸즈(여왕들)',
      context: 'The queen lives in the palace.',
      synonymAntonym: 'Syn: monarch',
    }),
    {
      definition: 'a female ruler of a country or the wife of a king',
      wordDistractors: ['Green', 'Screen', 'Quiet'],
      definitionDistractors: [
        'a male ruler of a country',
        'a young female member of a royal family',
        'the elected head of a republic',
      ],
      exampleSentences: [
        { en: 'The queen lives in the palace.', ko: '여왕은 궁전에 산다.' },
        { en: 'The queen waved to the crowd.', ko: '여왕이 군중에게 손을 흔들었다.' },
      ],
    }
  ),
  word('Rain', '비', 1, 'noun',
    ['눈', '천둥', '번개', '바람', '구름', '안개', '이슬', '폭풍', '홍수', '가뭄'],
    tips({
      etymology: '고대 영어 regn에서 유래',
      visual: '하늘에서 비가 내리는 모습',
      soundAlike: '레인 = 레인코트(빗물)',
      context: 'It is raining outside.',
      synonymAntonym: 'Syn: precipitation',
    }),
    {
      definition: 'water falling from clouds in drops',
      wordDistractors: ['Reign', 'Rein', 'Grain'],
      definitionDistractors: [
        'frozen precipitation falling as white flakes',
        'a loud sound during a storm',
        'a flash of light in the sky during a storm',
      ],
      exampleSentences: [
        { en: 'It is raining outside.', ko: '밖에 비가 오고 있다.' },
        { en: 'The rain stopped just before noon.', ko: '비가 정오 직전에 그쳤다.' },
      ],
    }
  ),
  word('Sun', '해', 1, 'noun',
    ['달', '별', '구름', '하늘', '지구', '행성', '우주', '태양계', '빛', '그림자'],
    tips({
      etymology: '고대 영어 sunne에서 유래',
      visual: '노란 해가 하늘에 빛나는 모습',
      soundAlike: '썬 = 썬글라스(태양)',
      context: 'The sun rises in the east.',
      synonymAntonym: 'Syn: star',
    }),
    {
      definition: 'the star that gives light and warmth to the earth',
      wordDistractors: ['Son', 'Sum', 'Sin'],
      definitionDistractors: [
        'the natural satellite that orbits the earth',
        'a small point of light in the night sky',
        'the visible expanse above the earth',
      ],
      exampleSentences: [
        { en: 'The sun rises in the east.', ko: '해는 동쪽에서 뜬다.' },
        { en: 'We sat in the sun to warm up.', ko: '우리는 따뜻해지기 위해 햇볕에 앉았다.' },
      ],
    }
  ),
  word('Tree', '나무', 1, 'noun',
    ['꽃', '풀', '덤불', '숲', '잎', '가지', '뿌리', '씨앗', '과일', '나뭇잎'],
    tips({
      etymology: '고대 영어 trēow에서 유래',
      visual: '키 큰 나무에 잎이 무성한 모습',
      soundAlike: '트리 = 크리스마스 트리',
      context: 'The birds sit in the tree.',
      synonymAntonym: 'Syn: plant',
    }),
    {
      definition: 'a tall plant with a trunk, branches, and leaves',
      wordDistractors: ['Free', 'Three', 'Breeze'],
      definitionDistractors: [
        'a small plant with colorful petals',
        'short green plants that cover the ground',
        'a large area with many trees',
      ],
      exampleSentences: [
        { en: 'The birds sit in the tree.', ko: '새들이 나무에 앉아 있다.' },
        { en: 'We planted a tree in the backyard.', ko: '우리는 뒷마당에 나무를 심었다.' },
      ],
    }
  ),
  word('Under', '아래에', 1, 'preposition',
    ['위에', '앞에', '뒤에', '옆에', '사이에', '안에', '밖에', '가까이', '멀리', '중간에'],
    tips({
      etymology: '고대 영어 under에서 유래',
      visual: '책상 아래에 상자가 있는 모습',
      soundAlike: '언더 = 언더그라운드(지하)',
      context: 'The cat is under the table.',
      synonymAntonym: 'Syn: below, Ant: over',
    }),
    {
      definition: 'below or beneath something',
      wordDistractors: ['Until', 'Underwear', 'Undo'],
      definitionDistractors: [
        'above or higher than something',
        'in front of or before something',
        'at the back or behind something',
      ],
      exampleSentences: [
        { en: 'The cat is under the table.', ko: '고양이가 탁자 아래에 있다.' },
        { en: 'She hid the key under the mat.', ko: '그녀가 키를 매트 아래에 숨겼다.' },
      ],
    }
  ),
  word('Voice', '목소리', 1, 'noun',
    ['소리', '노래', '말', '웃음', '울음', '비명', '속삭임', '외침', '숨소리', '심장소리'],
    tips({
      etymology: '라틴어 vox에서 유래',
      visual: '입에서 음파가 퍼져나가는 모습',
      soundAlike: '보이스 = 보이스메일(음성)',
      context: 'She has a beautiful voice.',
      synonymAntonym: 'Syn: sound',
    }),
    {
      definition: 'the sound produced when a person speaks or sings',
      wordDistractors: ['Choice', 'Noise', 'Rejoice'],
      definitionDistractors: [
        'a musical composition for singing',
        'a facial expression showing happiness',
        'a liquid that falls from the eyes when sad',
      ],
      exampleSentences: [
        { en: 'She has a beautiful voice.', ko: '그녀는 아름다운 목소리를 가지고 있다.' },
        { en: 'He raised his voice to be heard.', ko: '그는 들리도록 목소리를 높였다.' },
      ],
    }
  ),
  word('Water', '물', 1, 'noun',
    ['얼음', '증기', '비', '눈', '바다', '강', '호수', '우물', '수분', '이슬'],
    tips({
      etymology: '고대 영어 wæter에서 유래',
      visual: '맑은 물이 컵에 담긴 모습',
      soundAlike: '워터 = 워터파크(물)',
      context: 'Drink plenty of water.',
      synonymAntonym: 'Syn: H2O',
    }),
    {
      definition: 'a clear liquid without color or taste that forms seas, rivers, and lakes',
      wordDistractors: ['Later', 'Waiter', 'Waters'],
      definitionDistractors: [
        'water frozen solid',
        'a large body of salt water',
        'a natural flow of water across land',
      ],
      exampleSentences: [
        { en: 'Drink plenty of water.', ko: '물을 많이 마시세요.' },
        { en: 'The water in the lake is very clear.', ko: '호수의 물이 매우 맑다.' },
      ],
    }
  ),
  word('Yes', '예', 1, 'adverb',
    ['아니오', '모르겠어요', '아마', '당연히', '물론', '정말', '확실히', '그렇죠', '네', '응'],
    tips({
      etymology: '고대 영어 gēse에서 유래',
      visual: '고개를 끄덕이며 맞다고 하는 모습',
      soundAlike: '예스 = 예스맨(동의하는 사람)',
      context: 'Yes, I would like some coffee.',
      synonymAntonym: 'Syn: absolutely, Ant: no',
    }),
    {
      definition: 'used to express agreement or affirmation',
      wordDistractors: ['Yet', 'Yell', 'Yawn'],
      definitionDistractors: [
        'used to express disagreement or refusal',
        'used to express uncertainty',
        'used to express strong emphasis',
      ],
      exampleSentences: [
        { en: 'Yes, I would like some coffee.', ko: '예, 커피 한 잔 주세요.' },
        { en: 'Yes, I agree with you.', ko: '예, 저도 동의합니다.' },
      ],
    }
  ),
  word('Zoo', '동물원', 1, 'noun',
    ['놀이공원', '미술관', '박물관', '수족관', '숲', '공원', '농장', '서커스', '수영장', '도서관'],
    tips({
      etymology: 'zoological garden의 약어',
      visual: '사자와 코끼리가 있는 동물원',
      soundAlike: '주 = 주(동물이 사는 곳)',
      context: 'We went to the zoo on Sunday.',
      synonymAntonym: 'Syn: menagerie',
    }),
    {
      definition: 'a place where wild animals are kept for the public to see',
      wordDistractors: ['Too', 'Zap', 'Zoom'],
      definitionDistractors: [
        'a place with rides and games for entertainment',
        'a building that displays art and sculptures',
        'a place that displays fish and sea creatures',
      ],
      exampleSentences: [
        { en: 'We went to the zoo on Sunday.', ko: '우리는 일요일에 동물원에 갔다.' },
        { en: 'The zoo has many exotic animals.', ko: '그 동물원에는 많은 이국적인 동물들이 있다.' },
      ],
    }
  ),
  word('Angry', '화난', 2, 'adjective',
    ['기쁜', '슬픈', '두려운', '놀란', '걱정스러운', '짜증난', '피곤한', '지루한', '행복한', '차분한'],
    tips({
      etymology: '고대 노르웨이어 angr에서 유래',
      visual: '눈썹을 찌푸리고 화난 표정',
      soundAlike: '앵그리 = 앵그리버드(화난 새)',
      context: 'He was angry when he lost the game.',
      synonymAntonym: 'Syn: mad, Ant: calm',
    }),
    {
      definition: 'feeling or showing strong annoyance or displeasure',
      wordDistractors: ['Hungry', 'Anxiety', 'Agony'],
      definitionDistractors: [
        'feeling or showing great pleasure',
        'feeling or showing sadness',
        'feeling or showing fear',
      ],
      exampleSentences: [
        { en: 'He was angry when he lost the game.', ko: '그는 경기에서 졌을 때 화가 났다.' },
        { en: 'She gave him an angry look.', ko: '그녀가 그에게 화난 표정을 지었다.' },
      ],
    }
  ),
  word('Brave', '용감한', 2, 'adjective',
    ['겁많은', '소심한', '용기있는', '대담한', '강한', '약한', '느긋한', '조급한', '침착한', '당당한'],
    tips({
      etymology: '이탈리아어 bravo에서 유래',
      visual: '불 앞에 서서 두려워하지 않는 모습',
      soundAlike: '브레이브 = 브레이브(용기)',
      context: 'She is brave enough to try new things.',
      synonymAntonym: 'Syn: courageous, Ant: cowardly',
    }),
    {
      definition: 'willing to face danger or difficulty without fear',
      wordDistractors: ['Grave', 'Save', 'Rave'],
      definitionDistractors: [
        'easily frightened or lacking courage',
        'showing a lack of confidence',
        'feeling or showing tiredness',
      ],
      exampleSentences: [
        { en: 'She is brave enough to try new things.', ko: '그녀는 새로운 것을 시도할 만큼 용감하다.' },
        { en: 'The brave firefighter rescued the family.', ko: '용감한 소방관이 가족을 구했다.' },
      ],
    }
  ),
  word('Clean', '깨끗한', 2, 'adjective',
    ['더러운', '지저분한', '어두운', '밝은', '새로운', '오래된', '단정한', '흐트러진', '정돈된', '청결한'],
    tips({
      etymology: '고대 영어 clǣne에서 유래',
      visual: '빛나는 깨끗한 방',
      soundAlike: '클린 = 클린업(청소)',
      context: 'Please keep your room clean.',
      synonymAntonym: 'Syn: tidy, Ant: dirty',
    }),
    {
      definition: 'free from dirt, marks, or stains',
      wordDistractors: ['Clear', 'Lean', 'Cream'],
      definitionDistractors: [
        'covered with dirt or marks',
        'in a disordered or untidy state',
        'not bright or lacking light',
      ],
      exampleSentences: [
        { en: 'Please keep your room clean.', ko: '방을 깨끗하게 유지하세요.' },
        { en: 'The kitchen was spotlessly clean.', ko: '부엌이 아주 깨끗했다.' },
      ],
    }
  ),
  word('Dream', '꿈', 2, 'noun',
    ['현실', '희망', '목표', '환상', '상상', '기억', '생각', '계획', '바람', '소원'],
    tips({
      etymology: '고대 영어 drēam에서 유래',
      visual: '잠든 사람 머리 위에 말풍선으로 꿈',
      soundAlike: '드림 = 드림컴트루(꿈이 현실로)',
      context: 'I had a strange dream last night.',
      synonymAntonym: 'Syn: vision',
    }),
    {
      definition: 'a series of thoughts or images that occur during sleep',
      wordDistractors: ['Cream', 'Stream', 'Scream'],
      definitionDistractors: [
        'the state of things as they actually exist',
        'a strong feeling of wanting something',
        'something remembered from the past',
      ],
      exampleSentences: [
        { en: 'I had a strange dream last night.', ko: '어젯밤에 이상한 꿈을 꿨다.' },
        { en: 'Her dream was to become a doctor.', ko: '그녀의 꿈은 의사가 되는 것이었다.' },
      ],
    }
  ),
  word('Early', '일찍', 2, 'adverb',
    ['늦게', '빨리', '천천히', '바로', '나중에', '이전에', '먼저', '나중', '당장', '곧'],
    tips({
      etymology: '고대 영어 ǣrlice에서 유래',
      visual: '아침 일찍 해가 뜨는 모습',
      soundAlike: '얼리 = 얼리버드(일찍 오는 사람)',
      context: 'I wake up early every day.',
      synonymAntonym: 'Syn: soon, Ant: late',
    }),
    {
      definition: 'before the usual or expected time',
      wordDistractors: ['Earnestly', 'Nearly', 'Yearly'],
      definitionDistractors: [
        'after the usual or expected time',
        'at a high speed',
        'at a slow pace',
      ],
      exampleSentences: [
        { en: 'I wake up early every day.', ko: '나는 매일 일찍 일어난다.' },
        { en: 'We arrived early for the meeting.', ko: '우리는 회의에 일찍 도착했다.' },
      ],
    }
  ),
  word('Family', '가족', 2, 'noun',
    ['친구', '이웃', '동료', '선생님', '학생', '부모', '형제', '자매', '친척', '사람들'],
    tips({
      etymology: '라틴어 familia에서 유래',
      visual: '부모와 아이들이 함께 있는 모습',
      soundAlike: '패밀리 = 패밀리맨(가족의 남자)',
      context: 'My family lives in Seoul.',
      synonymAntonym: 'Syn: household',
    }),
    {
      definition: 'a group of people related by blood or marriage living together',
      wordDistractors: ['Familiar', 'Famously', 'Famine'],
      definitionDistractors: [
        'a person one likes and enjoys spending time with',
        'a person who lives next door',
        'a person who works with you',
      ],
      exampleSentences: [
        { en: 'My family lives in Seoul.', ko: '우리 가족은 서울에 산다.' },
        { en: 'She spends time with her family on weekends.', ko: '그녀는 주말에 가족과 시간을 보낸다.' },
      ],
    }
  ),
  word('Garden', '정원', 2, 'noun',
    ['공원', '숲', '농장', '마당', '화단', '텃밭', '온실', '잔디밭', '산', '들판'],
    tips({
      etymology: '고대 영어 geard에서 유래',
      visual: '꽃과 나무가 있는 아름다운 정원',
      soundAlike: '가든 = 가든파티(정원 파티)',
      context: 'She grows vegetables in her garden.',
      synonymAntonym: 'Syn: yard',
    }),
    {
      definition: 'a piece of ground where flowers, vegetables, or plants are grown',
      wordDistractors: ['Guard', 'Garlic', 'Garbage'],
      definitionDistractors: [
        'a large public area with grass and trees',
        'a large area with many trees',
        'land used for growing crops or raising animals',
      ],
      exampleSentences: [
        { en: 'She grows vegetables in her garden.', ko: '그녀는 정원에서 채소를 기른다.' },
        { en: 'The garden was full of blooming flowers.', ko: '정원에는 꽃이 활짝 피어 있었다.' },
      ],
    }
  ),
  word('Happy', '행복한', 2, 'adjective',
    ['슬픈', '화난', '걱정스러운', '두려운', '외로운', '지루한', '피곤한', '불행한', '기쁜', '즐거운'],
    tips({
      etymology: '고대 영어 hæpp에서 유래',
      visual: '웃는 얼굴과 하트',
      soundAlike: '해피 = 해피엔딩(행복한 결말)',
      context: 'I am happy to see you.',
      synonymAntonym: 'Syn: joyful, Ant: sad',
    }),
    {
      definition: 'feeling or showing pleasure or contentment',
      wordDistractors: ['Happen', 'Nappy', 'Sappy'],
      definitionDistractors: [
        'feeling or showing sorrow',
        'feeling or showing anger',
        'feeling or showing worry',
      ],
      exampleSentences: [
        { en: 'I am happy to see you.', ko: '널 만나서 기쁘다.' },
        { en: 'They had a happy marriage.', ko: '그들은 행복한 결혼 생활을 했다.' },
      ],
    }
  ),
  word('Island', '섬', 2, 'noun',
    ['대륙', '반도', '해변', '바다', '산', '호수', '강', '숲', '사막', '초원'],
    tips({
      etymology: '고대 영어 īegland에서 유래',
      visual: '바다 한가운데 있는 섬',
      soundAlike: '아일랜드 = 아일랜드(아이들의 땅)',
      context: 'We went to a small island for vacation.',
      synonymAntonym: 'Syn: isle',
    }),
    {
      definition: 'a piece of land surrounded by water',
      wordDistractors: ['Ireland', 'Inland', 'Iceland'],
      definitionDistractors: [
        'a very large landmass',
        'land projecting into water with water on three sides',
        'the salt water that covers most of the earth',
      ],
      exampleSentences: [
        { en: 'We went to a small island for vacation.', ko: '우리는 휴가를 위해 작은 섬에 갔다.' },
        { en: 'The island has beautiful beaches.', ko: '그 섬에는 아름다운 해변이 있다.' },
      ],
    }
  ),
  word('Jungle', '정글', 2, 'noun',
    ['숲', '사막', '산', '초원', '늪', '바다', '강', '동굴', '계곡', '절벽'],
    tips({
      etymology: '산스크리트어 jangala에서 유래',
      visual: '뻗어있는 덩굴과 울창한 나무',
      soundAlike: '정글 = 정글짐(정글 같은 놀이터)',
      context: 'Many animals live in the jungle.',
      synonymAntonym: 'Syn: rainforest',
    }),
    {
      definition: 'a dense tropical forest with thick vegetation',
      wordDistractors: ['Jingle', 'Jumble', 'Jangle'],
      definitionDistractors: [
        'a large area covered with trees',
        'a very dry area with little rainfall',
        'a large body of salt water',
      ],
      exampleSentences: [
        { en: 'Many animals live in the jungle.', ko: '많은 동물들이 정글에 산다.' },
        { en: 'We heard exotic birds in the jungle.', ko: '우리는 정글에서 이국적인 새 소리를 들었다.' },
      ],
    }
  ),
  word('Kitchen', '부엌', 2, 'noun',
    ['거실', '침실', '화장실', '베란다', '창고', '식당', '식탁', '냉장고', '싱크대', '가스레인지'],
    tips({
      etymology: '라틴어 coquina에서 유래',
      visual: '냉장고와 식탁이 있는 부엌',
      soundAlike: '키친 = 키친웨어(부엌용품)',
      context: 'My mother is cooking in the kitchen.',
      synonymAntonym: 'Syn: cookroom',
    }),
    {
      definition: 'a room where food is prepared and cooked',
      wordDistractors: ['Kitten', 'Chicken', 'Thicken'],
      definitionDistractors: [
        'the main living area of a house',
        'a room for sleeping',
        'a room with a toilet and washing facilities',
      ],
      exampleSentences: [
        { en: 'My mother is cooking in the kitchen.', ko: '우리 엄마가 부엌에서 요리하고 있다.' },
        { en: 'The kitchen has new appliances.', ko: '부엌에는 새 가전제품이 있다.' },
      ],
    }
  ),
  word('Lamp', '램프', 2, 'noun',
    ['전등', '촛불', '손전등', '스탠드', '천장등', '조명', '불', '창문', '거울', '시계'],
    tips({
      etymology: '그리스어 lampas에서 유래',
      visual: '책상 위에 빛나는 램프',
      soundAlike: '램프 = 램프(빛을 주는 것)',
      context: 'Turn on the lamp, please.',
      synonymAntonym: 'Syn: light',
    }),
    {
      definition: 'a device that produces light, typically with a bulb',
      wordDistractors: ['Lamb', 'Limp', 'Camp'],
      definitionDistractors: [
        'a stick of wax with a wick for lighting',
        'a portable battery-powered light',
        'a glass opening in a wall for light',
      ],
      exampleSentences: [
        { en: 'Turn on the lamp, please.', ko: '램프 켜 주세요.' },
        { en: 'She read by the light of the lamp.', ko: '그녀는 램프 불빛으로 책을 읽었다.' },
      ],
    }
  ),
  word('Morning', '아침', 2, 'noun',
    ['점심', '저녁', '밤', '오후', '한낮', '새벽', '황혼', '낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 morgen에서 유래',
      visual: '해가 뜨는 아침 하늘',
      soundAlike: '모닝 = 굿모닝(좋은 아침)',
      context: 'I have breakfast in the morning.',
      synonymAntonym: 'Syn: dawn',
    }),
    {
      definition: 'the period of time from sunrise to noon',
      wordDistractors: ['Warning', 'Mourning', 'Borning'],
      definitionDistractors: [
        'the middle of the day when the sun is highest',
        'the meal eaten in the middle of the day',
        'the period of darkness between sunset and sunrise',
      ],
      exampleSentences: [
        { en: 'I have breakfast in the morning.', ko: '나는 아침에 아침식사를 한다.' },
        { en: 'She always exercises in the morning.', ko: '그녀는 항상 아침에 운동한다.' },
      ],
    }
  ),
  word('Night', '밤', 2, 'noun',
    ['낮', '아침', '오후', '저녁', '새벽', '황혼', '해질녘', '한낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 niht에서 유래',
      visual: '별이 빛나는 밤하늘',
      soundAlike: '나이트 = 굿나이트(잘 자)',
      context: 'The stars shine at night.',
      synonymAntonym: 'Syn: evening, Ant: day',
    }),
    {
      definition: 'the period of darkness between sunset and sunrise',
      wordDistractors: ['Knight', 'Fright', 'Delight'],
      definitionDistractors: [
        'the period of light between sunrise and sunset',
        'the period from sunrise to noon',
        'the time when the sun is highest in the sky',
      ],
      exampleSentences: [
        { en: 'The stars shine at night.', ko: '별들이 밤에 빛난다.' },
        { en: 'I stayed up late last night.', ko: '나는 어젯밤에 늦게까지 깨어 있었다.' },
      ],
    }
  ),
  word('Ocean', '바다', 2, 'noun',
    ['호수', '강', '시내', '저수지', '해변', '섬', '해양', '수영장', '폭포', '운하'],
    tips({
      etymology: '그리스어 Ōkeanós에서 유래',
      visual: '넓은 파란 바다와 파도',
      soundAlike: '오션 = 오션뷰(바다 전망)',
      context: 'We swam in the ocean last summer.',
      synonymAntonym: 'Syn: sea',
    }),
    {
      definition: 'a very large body of salt water that covers most of the earth',
      wordDistractors: ['Oatmeal', 'Motion', 'Notion'],
      definitionDistractors: [
        'a body of water surrounded by land',
        'a natural flow of water across land',
        'the land beside the sea',
      ],
      exampleSentences: [
        { en: 'We swam in the ocean last summer.', ko: '우리는 지난 여름에 바다에서 수영했다.' },
        { en: 'The ocean was calm and blue.', ko: '바다는 잔잔하고 파랬다.' },
      ],
    }
  ),
  word('Parent', '부모', 2, 'noun',
    ['자식', '형제', '친구', '선생님', '조부모', '삼촌', '이모', '친척', '가족', '보호자'],
    tips({
      etymology: '라틴어 parens에서 유래',
      visual: '아이를 안아주는 부모',
      soundAlike: '페어런트 = 페어런트미팅(부모 상담)',
      context: 'My parents work in the city.',
      synonymAntonym: 'Syn: father or mother',
    }),
    {
      definition: 'a father or mother; one who has a child',
      wordDistractors: ['Patient', 'Parcel', 'Pendant'],
      definitionDistractors: [
        'a son or daughter',
        'a person who teaches',
        'the mother or father of one\'s parent',
      ],
      exampleSentences: [
        { en: 'My parents work in the city.', ko: '우리 부모님은 도시에서 일하신다.' },
        { en: 'Both parents attended the school meeting.', ko: '양쪽 부모님이 학교 회의에 참석했다.' },
      ],
    }
  ),
  word('Quiet', '조용한', 2, 'adjective',
    ['시끄러운', '큰', '작은', '부드러운', '거친', '차분한', '평화로운', '고요한', '잠잠한', '눅눅한'],
    tips({
      etymology: '라틴어 quietus에서 유래',
      visual: '귀에 손가락을 대고 조용히 하는 표시',
      soundAlike: '콰이어트 = 콰이어트 타임(조용한 시간)',
      context: 'Please be quiet in the library.',
      synonymAntonym: 'Syn: silent, Ant: loud',
    }),
    {
      definition: 'making little or no noise; free from disturbance',
      wordDistractors: ['Quilt', 'Quit', 'Quote'],
      definitionDistractors: [
        'making a lot of noise',
        'very large in size',
        'lacking in strength or intensity',
      ],
      exampleSentences: [
        { en: 'Please be quiet in the library.', ko: '도서관에서는 조용히 해 주세요.' },
        { en: 'They live in a quiet neighborhood.', ko: '그들은 조용한 동네에 산다.' },
      ],
    }
  ),
  word('River', '강', 2, 'noun',
    ['바다', '호수', '시내', '운하', '폭포', '저수지', '연못', '시냇물', '둑', '다리'],
    tips({
      etymology: '라틴어 ripa에서 유래',
      visual: '물이 흐르는 강',
      soundAlike: '리버 = 리버사이드(강가)',
      context: 'The river flows through the city.',
      synonymAntonym: 'Syn: stream',
    }),
    {
      definition: 'a large natural flow of water across land toward the sea',
      wordDistractors: ['Giver', 'Liver', 'Shiver'],
      definitionDistractors: [
        'a very large body of salt water',
        'a body of water surrounded by land',
        'water falling from a height',
      ],
      exampleSentences: [
        { en: 'The river flows through the city.', ko: '그 강은 도시를 관통해 흐른다.' },
        { en: 'We crossed the river by bridge.', ko: '우리는 다리를 통해 강을 건넜다.' },
      ],
    }
  ),
  word('School', '학교', 2, 'noun',
    ['유치원', '대학', '학원', '도서관', '기숙사', '체육관', '실험실', '강당', '교실', '운동장'],
    tips({
      etymology: '그리스어 scholē에서 유래',
      visual: '아이들이 교실에서 공부하는 모습',
      soundAlike: '스쿨 = 스쿨버스(학교 버스)',
      context: 'I go to school by bus.',
      synonymAntonym: 'Syn: academy',
    }),
    {
      definition: 'an institution where children are educated',
      wordDistractors: ['Scoop', 'Shoot', 'Smooth'],
      definitionDistractors: [
        'a place where books are kept for reading',
        'a building for higher education',
        'a place for young children before school age',
      ],
      exampleSentences: [
        { en: 'I go to school by bus.', ko: '나는 버스로 학교에 간다.' },
        { en: 'School starts at eight in the morning.', ko: '학교는 아침 8시에 시작한다.' },
      ],
    }
  ),
  word('Table', '탁자', 2, 'noun',
    ['의자', '침대', '소파', '선반', '책장', '서랍장', '화장대', '식탁', '책상', '장식대'],
    tips({
      etymology: '라틴어 tabula에서 유래',
      visual: '음식이 놓인 식탁',
      soundAlike: '테이블 = 테이블매너(탁자 예절)',
      context: 'Put the book on the table.',
      synonymAntonym: 'Syn: desk',
    }),
    {
      definition: 'a piece of furniture with a flat top and legs for placing things on',
      wordDistractors: ['Cable', 'Fable', 'Stable'],
      definitionDistractors: [
        'a seat with a back for one person',
        'a piece of furniture for sleeping',
        'a seat for more than one person',
      ],
      exampleSentences: [
        { en: 'Put the book on the table.', ko: '책을 탁자 위에 놓아라.' },
        { en: 'We sat around the table for dinner.', ko: '우리는 저녁 식사를 위해 탁자에 둘러앉았다.' },
      ],
    }
  ),
  word('Umbrella', '우산', 2, 'noun',
    ['모자', '코트', '양산', '장갑', '스카프', '부츠', '비옷', '바람막이', '선글라스', '파라솔'],
    tips({
      etymology: '이탈리아어 ombrella에서 유래',
      visual: '비 오는 날 우산을 쓰는 모습',
      soundAlike: '엄브렐라 = 엄브렐라(우산)',
      context: 'Take an umbrella. It might rain.',
      synonymAntonym: 'Syn: parasol',
    }),
    {
      definition: 'a folding device held over the head for protection from rain or sun',
      wordDistractors: ['Umbra', 'Uncle', 'Unite'],
      definitionDistractors: [
        'a head covering for protection or fashion',
        'a garment worn over other clothes',
        'a covering for the hands',
      ],
      exampleSentences: [
        { en: 'Take an umbrella. It might rain.', ko: '우산을 가져가세요. 비가 올 수 있어요.' },
        { en: 'She forgot her umbrella at home.', ko: '그녀가 우산을 집에 두고 왔다.' },
      ],
    }
  ),
  word('Village', '마을', 2, 'noun',
    ['도시', '시골', '동네', '가게', '학교', '교회', '광장', '거리', '건물', '주택'],
    tips({
      etymology: '라틴어 villa에서 유래',
      visual: '작은 집들이 모인 아름다운 마을',
      soundAlike: '빌리지 = 빌리지피플(마을 사람들)',
      context: 'She lives in a small village.',
      synonymAntonym: 'Syn: town',
    }),
    {
      definition: 'a small settlement in a rural area, smaller than a town',
      wordDistractors: ['Vintage', 'Villain', 'Vinegar'],
      definitionDistractors: [
        'a large urban area with many people',
        'the countryside away from cities',
        'a building for religious worship',
      ],
      exampleSentences: [
        { en: 'She lives in a small village.', ko: '그녀는 작은 마을에 산다.' },
        { en: 'The village has an old church.', ko: '그 마을에는 오래된 교회가 있다.' },
      ],
    }
  ),
  word('Window', '창문', 2, 'noun',
    ['문', '벽', '천장', '바닥', '지붕', '베란다', '발코니', '유리', '커튼', '블라인드'],
    tips({
      etymology: '고대 노르웨이어 vindauga에서 유래',
      visual: '빛이 들어오는 창문',
      soundAlike: '윈도우 = 윈도우쇼핑(창문 구경)',
      context: 'Open the window for fresh air.',
      synonymAntonym: 'Syn: pane',
    }),
    {
      definition: 'an opening in a wall or vehicle with glass to let in light and air',
      wordDistractors: ['Widow', 'Willow', 'Windows'],
      definitionDistractors: [
        'a hinged barrier at an entrance',
        'a vertical structure that encloses a building',
        'the top outer covering of a building',
      ],
      exampleSentences: [
        { en: 'Open the window for fresh air.', ko: '신선한 공기를 위해 창문을 열어라.' },
        { en: 'She looked out the window at the rain.', ko: '그녀는 창문 밖으로 비를 바라봤다.' },
      ],
    }
  ),
  word('Yellow', '노란색', 2, 'adjective',
    ['빨간색', '파란색', '초록색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 geolu에서 유래',
      visual: '노란 해바라기',
      soundAlike: '옐로우 = 옐로우카드(노란 카드)',
      context: 'The sun is yellow and bright.',
      synonymAntonym: 'Syn: golden',
    }),
    {
      definition: 'having the color of ripe lemons or egg yolks',
      wordDistractors: ['Mellow', 'Fellow', 'Bellow'],
      definitionDistractors: [
        'having the color of blood or roses',
        'having the color of the sky',
        'having the color of snow or milk',
      ],
      exampleSentences: [
        { en: 'The sun is yellow and bright.', ko: '태양은 노랗고 밝다.' },
        { en: 'She wore a yellow dress to the party.', ko: '그녀는 파티에 노란 드레스를 입고 갔다.' },
      ],
    }
  ),
  word('Zero', '영', 2, 'noun',
    ['일', '이', '삼', '십', '백', '천', '만', '숫자', '점수', '온도'],
    tips({
      etymology: '아랍어 sifr에서 유래',
      visual: '원 모양의 숫자 0',
      soundAlike: '제로 = 제로베이스(0에서 시작)',
      context: 'The temperature is zero degrees.',
      synonymAntonym: 'Syn: nothing',
    }),
    {
      definition: 'the number 0; nothing; no quantity',
      wordDistractors: ['Hero', 'Cero', 'Eero'],
      definitionDistractors: [
        'the number one; a single unit',
        'the number ten; ten units',
        'a numerical value or score',
      ],
      exampleSentences: [
        { en: 'The temperature is zero degrees.', ko: '온도가 영도이다.' },
        { en: 'His score was zero on the test.', ko: '그의 시험 점수는 0점이었다.' },
      ],
    }
  ),
];
