import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch01: VocabItem[] = [
  word('Apple', '사과', 1, 'noun',
    ['바나나', '포도', '오렌지', '딸기', '수박', '배', '복숭아', '감', '체리', '자두'],
    tips({
      etymology: '고대 영어 æppel에서 유래, 과일을 뜻함',
      visual: '빨간 사과가 나무에서 떨어지는 모습',
      soundAlike: '애플(Apple)은 에이플(A과일)로 연상하면 기억하기 쉽다',
      context: '신선한 사과는 비타민이 풍부해 건강에 좋다',
      synonymAntonym: '동의어: fruit, produce, pomaceous fruit / 반의어: (해당 없음)',
    }),
    {
      definition: 'a round fruit with red, green, or yellow skin and firm white flesh',
      synonyms: ['fruit', 'produce', 'pomaceous fruit'],
      antonyms: [],
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
      etymology: '고대 영어 bōc에서 유래, 나무 껍질에 글을 쓴 데서',
      visual: '펼쳐진 책에서 글자가 튀어나오는 모습',
      soundAlike: '북(Book)은 북소리처럼 읽는 소리로 연상한다',
      context: '잠들기 전에 책을 읽으면 숙면에 도움이 된다',
      synonymAntonym: '동의어: volume, publication, tome / 반의어: (해당 없음)',
    }),
    {
      definition: 'a written or printed work of pages bound together',
      synonyms: ['volume', 'publication', 'tome'],
      antonyms: [],
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
      definitionDistractors: ['a fluffy animal that purrs and hunts mice', 'a wild animal that howls', 'a farm animal raised for meat and bristles'],
      exampleSentences: [
        { en: 'The dog wagged its tail when I came home.', ko: '내가 집에 오자 개가 꼬리를 흔들었다.' },
        { en: 'We adopted a dog from the shelter.', ko: '우리는 보호소에서 개를 입양했다.' },
      ],
    }
  ),
  word('Eat', '먹다', 1, 'verb',
    ['마시다', '자다', '달리다', '걷다', '읽다', '쓰다', '보다', '듣다', '말하다', '놀다'],
    tips({
      etymology: '고대 영어 etan에서 유래한 섭취 동작',
      visual: '포크로 음식을 입에 넣는 모습',
      soundAlike: '잇(Eat)은 잇다(이어서 먹다)로 연상한다',
      context: '규칙적으로 식사하면 소화가 잘 되고 건강에 좋다',
      synonymAntonym: '동의어: consume, devour, ingest / 반의어: fast, starve, abstain',
    }),
    {
      definition: 'to put food into the mouth and swallow it',
      synonyms: ['consume', 'devour', 'ingest'],
      antonyms: ['fast', 'starve', 'abstain'],
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
    ['고래', '새우', '문어', '게', '조개', '해파리', '돌고래', '펭귄', '악어', '오리'],
    tips({
      etymology: '고대 영어 fisc에서 유래',
      visual: '물속에서 헤엄치는 물고기',
      soundAlike: '피쉬 = 피쉬피쉬(물소리)',
      context: 'There are many fish in the pond.',
      synonymAntonym: 'Ant: mammal (포유류)·bird (조류)',
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
    ['나쁜', '큰', '작은', '많은', '적은', '빠른', '느린', '따뜻한', '차가운', '지저분한'],
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
      definitionDistractors: ['the end part of the leg used for walking', 'the upper limb from shoulder to the hand', 'the part of the body used for thinking'],
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
    ['달리다', '걷다', '앉다', '서다', '눕다', '날다', '수영하다', '등반하다', '타다', '던지다'],
    tips({
      etymology: '중세 영어 jumpen에서 유래되었으며, 갑작스럽게 움직인다는 의미를 담고 있습니다.',
      visual: '개구리가 뒷다리에 힘을 주어 공중으로 솟구쳐 오르는 장면을 상상해 보세요.',
      soundAlike: '바닥을 짚고 \'점프!\' 하고 튀어 오르는 경쾌한 소리와 비슷합니다.',
      context: '운동 경기에서 높이뛰기를 하거나 기뻐서 제자리에서 뛸 때 주로 사용합니다.',
      synonymAntonym: 'leap과 hop은 비슷한 의미를 가지며, 반대로 바닥에 가만히 있는 sit이나 stay와 대조됩니다.',
    }),
    {
      definition: 'to push oneself off the surface into the air by using the muscles in the legs and feet',
      synonyms: ['leap', 'hop', 'bound'],
      antonyms: ['fall', 'sink', 'descend'],
      exampleSentences: [
        { en: 'The children jump on the trampoline.', ko: '아이들이 트램펄린 위에서 뛰고 있다.' },
        { en: 'The cat can jump very high.', ko: '그 고양이는 아주 높이 뛸 수 있다.' },
      ],
    }
  ),
  word('Key', '열쇠', 1, 'noun',
    ['자물쇠', '문', '창문', '서랍', '상자', '가방', '지갑', '시계', '전화', '버튼'],
    tips({
      etymology: '고대 영어 \'cǣg\'에서 유래되었으며, 무언가를 닫거나 고정하는 도구를 뜻했습니다.',
      visual: '금속으로 된 작은 막대 끝에 울퉁불퉁한 홈이 파여 있어 문구멍에 쏙 들어가는 모습을 상상하세요.',
      soundAlike: '키가 큰 사람이 손을 뻗어 문 위에 숨겨둔 \'키(열쇠)\'를 꺼내는 장면을 연상해 보세요.',
      context: '일상에서 문을 열 때뿐만 아니라, 피아노 건반이나 컴퓨터 자판의 개별 버튼을 지칭할 때도 쓰입니다.',
      synonymAntonym: 'Latchkey나 Opener와 비슷하며, 잠금 장치인 Lock과는 반대되는 짝꿍 개념입니다.',
    }),
    {
      definition: 'A small piece of shaped metal with incisions which fit the wards of a particular lock, inserted and turned to open or close it.',
      synonyms: ['opener', 'latchkey', 'passkey'],
      antonyms: ['lock', 'bolt', 'barrier'],
      exampleSentences: [
        { en: 'I forgot to take my house key when I left this morning.', ko: '오늘 아침에 나갈 때 집 열쇠를 가져오는 것을 깜빡했다.' },
        { en: 'The janitor carries a large ring with every key to the building.', ko: '관리인은 건물 모든 열쇠가 달린 커다란 고리를 들고 다닌다.' },
      ],
    }
  ),
  word('Love', '사랑하다', 1, 'verb',
    ['싫어하다', '미워하다', '잊다', '무시하다', '거절하다', '혐오하다', '외면하다', '증오하다', '차갑게 대하다', '냉대하다'],
    tips({
      etymology: '고대 영어 lufu에서 유래되었으며, \'보살피다\' 또는 \'소중히 여기다\'라는 의미를 담고 있습니다.',
      visual: '두 사람이 서로를 향해 따뜻하게 웃으며 하트 모양의 선물을 주고받는 장면을 상상해 보세요.',
      soundAlike: '테니스 경기에서 0점을 \'러브\'라고 부르는데, 이는 아무것도 없는 상태에서 시작하는 순수한 마음과 연결해볼 수 있습니다.',
      context: '가족, 연인뿐만 아니라 취미나 특정 음식을 아주 좋아할 때도 자주 사용되는 동사입니다.',
      synonymAntonym: 'adore나 cherish는 아주 깊이 아끼는 느낌을 주며, 반대로 hate나 loathe는 강한 거부감을 나타냅니다.',
    }),
    {
      definition: 'to feel deep affection or a very strong liking for a person, animal, or activity',
      synonyms: ['adore', 'cherish', 'treasure'],
      antonyms: ['hate', 'detest', 'loathe'],
      exampleSentences: [
        { en: 'I love my family more than anything else in the world.', ko: '나는 세상 그 무엇보다도 나의 가족을 사랑한다.' },
        { en: 'She loves to read mystery novels in her free time.', ko: '그녀는 여가 시간에 추리 소설 읽는 것을 정말 좋아한다.' },
      ],
    }
  ),
  word('Milk', '우유', 1, 'noun',
    ['물', '주스', '커피', '차', '녹차', '요거트', '치즈', '버터', '크림', '탄산수'],
    tips({
      etymology: '고대 영어 \'meolc\'에서 유래했으며, 동물의 젖을 짜는 행위와 관련된 어원을 가지고 있습니다.',
      visual: '하얀색 액체가 가득 담긴 유리잔과 그 옆에 놓인 신선한 젖소 그림을 떠올려 보세요.',
      soundAlike: '한국어 외래어인 \'밀크\'와 발음이 같으며, \'밀크셰이크\'나 \'초코밀크\'를 생각하면 쉽습니다.',
      context: '아침 식사 때 시리얼에 부어 먹거나 빵과 함께 곁들여 마시는 가장 대중적인 음료입니다.',
      synonymAntonym: '유제품을 뜻하는 dairy와 관련이 깊으며, 수분이 없는 가루 형태인 powder와 대비됩니다.',
    }),
    {
      definition: 'A white liquid containing nutrients that is produced by female mammals for feeding their young and often consumed by humans as food.',
      synonyms: ['dairy', 'lactation', 'beverage'],
      antonyms: ['solid', 'meat', 'powder'],
      exampleSentences: [
        { en: 'I drink a glass of fresh milk every morning to stay healthy.', ko: '나는 건강을 유지하기 위해 매일 아침 신선한 우유 한 잔을 마신다.' },
        { en: 'The recipe requires two cups of whole milk to make the cake soft.', ko: '케이크를 부드럽게 만들기 위해 레시피에는 전유 두 컵이 필요하다.' },
      ],
    }
  ),
  word('Name', '이름', 1, 'noun',
    ['나이', '생일', '주소', '전화번호', '직업', '학교', '친구', '가족', '국적', '취미'],
    tips({
      etymology: '고대 게르만어와 인도유럽어족의 \'nomen\'에서 유래하여 정체성을 나타내는 단어로 정착되었습니다.',
      visual: '새하얀 명함 중앙에 굵고 선명하게 적힌 글자를 상상해 보세요.',
      soundAlike: '한국어 \'네임\'과 발음이 같으며, 물건에 붙이는 \'네임스티커\'를 떠올리면 쉽습니다.',
      context: '처음 만난 사람에게 통성명을 하거나 서류의 서명란을 채울 때 가장 먼저 쓰이는 단어입니다.',
      synonymAntonym: 'title이나 designation과 비슷하게 쓰이며, 익명을 뜻하는 anonymity와 반대되는 개념입니다.',
    }),
    {
      definition: 'A specific word or phrase used to identify and address a particular person, animal, place, or thing.',
      synonyms: ['title', 'appellation', 'designation'],
      antonyms: ['anonymity', 'cipher', 'unknown'],
      exampleSentences: [
        { en: 'Please write your full name at the top of the application form.', ko: '신청서 양식 상단에 귀하의 성함을 정자로 기입해 주세요.' },
        { en: 'The baby was given the name Leo after his grandfather.', ko: '그 아기는 할아버지의 이름을 따서 리오라는 이름을 갖게 되었습니다.' },
      ],
    }
  ),
  word('Open', '열다', 1, 'verb',
    ['닫다', '잠그다', '덮다', '막다', '가리다', '멈추다', '끝내다', '숨기다', '거절하다', '부수다'],
    tips({
      etymology: '고대 게르만어에서 유래하여 \'위로 들어 올리다\' 또는 \'노출시키다\'라는 의미에서 시작되었습니다.',
      visual: '상자의 뚜껑을 위로 들어 올려 내부가 훤히 보이게 만드는 장면을 상상해 보세요.',
      soundAlike: '가게가 새로 문을 여는 \'오픈(Open) 행사\'를 떠올리면 기억하기 쉽습니다.',
      context: '문, 창문, 책뿐만 아니라 마음이나 대화의 물꼬를 틀 때도 자주 사용됩니다.',
      synonymAntonym: '반대말인 close(닫다)와 짝을 지어 외우고, unlock(잠금을 풀다)과 함께 기억하세요.',
    }),
    {
      definition: 'to move a door, window, or lid so that an entrance or space is no longer blocked',
      synonyms: ['unfold', 'unlock', 'unseal'],
      antonyms: ['close', 'shut', 'seal'],
      exampleSentences: [
        { en: 'Could you please open the window to let some fresh air in?', ko: '신선한 공기가 들어오도록 창문을 좀 열어 주시겠어요?' },
        { en: 'The store decided to open its doors earlier than usual today.', ko: '그 상점은 오늘 평소보다 일찍 문을 열기로 결정했습니다.' },
      ],
    }
  ),
  word('Pen', '펜', 1, 'noun',
    ['연필', '지우개', '색연필', '마커', '칠판', '노트', '공책', '책', '가위', '풀'],
    tips({
      etymology: '라틴어 \'penna\'에서 유래했으며, 이는 원래 \'깃털\'을 의미합니다. 옛날에는 깃털 끝에 잉크를 묻혀 글을 썼기 때문입니다.',
      visual: '뾰족한 끝에서 매끄러운 잉크가 흘러나와 종이 위에 글자가 새겨지는 모습을 상상해 보세요.',
      soundAlike: '프라이팬(Pan)이나 고정용 핀(Pin)과 발음이 비슷하지만, 글을 쓸 때는 \'펜\'이라고 명확히 발음합니다.',
      context: '학교나 사무실에서 서명을 하거나 메모를 할 때 가장 기본적으로 사용하는 필기구입니다.',
      synonymAntonym: '유의어로는 quill이나 marker가 있으며, 반대되는 개념으로는 기록을 지우는 eraser를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'An instrument that uses liquid pigment to create marks, lines, or text on a surface such as paper.',
      synonyms: ['quill', 'biro', 'marker'],
      antonyms: ['eraser', 'whiteout', 'rubber'],
      exampleSentences: [
        { en: 'Please sign your name at the bottom using a black pen.', ko: '검은색 펜을 사용하여 하단에 성함을 서명해 주세요.' },
        { en: 'The ink in my favorite pen has finally run out.', ko: '제가 가장 아끼는 펜의 잉크가 마침내 다 떨어졌어요.' },
      ],
    }
  ),
  word('Queen', '여왕', 1, 'noun',
    ['왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '장관', '회장', '부장'],
    tips({
      etymology: '고대 영어 \'cwen\'에서 유래되었으며, 원래는 단순히 \'여성\'이나 \'아내\'를 뜻하는 단어였습니다.',
      visual: '머리에 화려하고 반짝이는 보석이 박힌 황금 왕관을 쓰고 긴 드레스를 입은 여성을 상상해 보세요.',
      soundAlike: '체스 게임에서 가장 강력한 말인 \'퀸\'이나 밴드 \'퀸\'의 이름을 떠올리면 기억하기 쉽습니다.',
      context: '영국이나 네덜란드처럼 왕실 전통이 남아있는 국가의 국가 원수를 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '군주를 뜻하는 monarch와 비슷하며, 남성 통치자인 king과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A female sovereign who rules a kingdom in her own right, or the spouse of a reigning male monarch.',
      synonyms: ['monarch', 'empress', 'her majesty'],
      antonyms: ['king', 'commoner', 'subject'],
      exampleSentences: [
        { en: 'The royal guards stood at attention as the monarch entered the room.', ko: '군주가 방으로 들어서자 왕실 근위병들이 차려 자세로 섰다.' },
        { en: 'She was crowned as the new ruler of the nation after her father passed away.', ko: '그녀는 아버지가 돌아가신 후 나라의 새로운 통치자로 즉위했다.' },
      ],
    }
  ),
  word('Rain', '비', 1, 'noun',
    ['눈', '천둥', '번개', '바람', '구름', '안개', '이슬', '폭풍', '홍수', '가뭄'],
    tips({
      etymology: '고대 영어 \'regn\'에서 유래되었으며, 게르만어권에서 물방울이 떨어지는 현상을 가리키는 단어에서 시작되었습니다.',
      visual: '구름 사이로 투명한 물방울들이 땅을 향해 길게 선을 그리며 떨어지는 장면을 상상해 보세요.',
      soundAlike: '비가 올 때 입는 \'레인코트(Raincoat)\'나 비를 막아주는 \'레인부츠\'의 \'레인\'과 발음이 같습니다.',
      context: '날씨를 말할 때 주로 쓰이며, 소나기(shower)나 폭우(downpour)처럼 강도에 따라 다양한 단어와 결합합니다.',
      synonymAntonym: '유의어로는 강수량을 뜻하는 precipitation이 있고, 반의어로는 건조함을 뜻하는 dryness가 있습니다.',
    }),
    {
      definition: 'Liquid water in the form of droplets that have condensed from atmospheric water vapor and then become heavy enough to fall under gravity.',
      synonyms: ['precipitation', 'rainfall', 'shower'],
      antonyms: ['drought', 'dryness', 'aridity'],
      exampleSentences: [
        { en: 'The heavy rain caused the river levels to rise significantly overnight.', ko: '폭우로 인해 밤새 강 수위가 크게 높아졌습니다.' },
        { en: 'We had to cancel our outdoor picnic because of the unexpected rain.', ko: '예상치 못한 비 때문에 야외 소풍을 취소해야만 했습니다.' },
      ],
    }
  ),
  word('Sun', '해', 1, 'noun',
    ['달', '별', '구름', '하늘', '지구', '행성', '우주', '태양계', '빛', '그림자'],
    tips({
      etymology: '고대 영어 \'sunne\'에서 유래했으며, 게르만어파에서 \'태양\'을 뜻하는 단어에서 시작되었습니다.',
      visual: '낮 하늘 정중앙에서 눈부시게 빛나며 주변을 노랗고 환하게 비추는 거대한 불덩어리를 상상하세요.',
      soundAlike: '아들을 뜻하는 \'Son\'과 발음이 똑같습니다. \'아들(Son)과 해(Sun)가 함께 있다\'고 외워보세요.',
      context: '주로 날씨를 말하거나 낮 시간대의 빛과 온기를 설명할 때 가장 많이 사용됩니다.',
      synonymAntonym: '동의어로는 정식 명칭인 \'Sol\'이 있고, 반대 개념으로는 밤의 상징인 \'Moon\'이 있습니다.',
    }),
    {
      definition: 'The massive star at the center of our solar system that provides light, heat, and energy to our planet.',
      synonyms: ['daystar', 'sol', 'sunlight'],
      antonyms: ['moon', 'darkness', 'night'],
      exampleSentences: [
        { en: 'The bright light of the morning sun woke me up early.', ko: '아침 해의 밝은 빛이 나를 일찍 깨웠다.' },
        { en: 'Plants need water and plenty of sun to grow healthy.', ko: '식물들이 건강하게 자라기 위해서는 물과 충분한 햇볕이 필요하다.' },
      ],
    }
  ),
  word('Tree', '나무', 1, 'noun',
    ['꽃', '풀', '덤불', '숲', '덩굴', '선인장', '버섯', '이끼', '돌', '바위'],
    tips({
      etymology: '고대 영어 trēow에서 유래되었으며, 이는 \'단단함\'이나 \'신뢰\'를 의미하는 어근과 연결됩니다.',
      visual: '굵은 갈색 기둥(trunk) 위로 초록색 잎들이 구름처럼 풍성하게 퍼져 있는 모습을 상상하세요.',
      soundAlike: '숫자 3을 뜻하는 \'Three\'와 발음이 비슷하지만, Tree는 \'ㅌ\' 발음을 더 강하고 짧게 냅니다.',
      context: '공원, 산, 정원 등 자연 환경을 묘사할 때 가장 기본적으로 사용되는 단어입니다.',
      synonymAntonym: '식물을 뜻하는 plant보다 더 크고 줄기가 목질화된 것을 의미하며, 작은 관목인 bush와 대조됩니다.',
    }),
    {
      definition: 'A perennial woody plant typically having a single self-supporting main stem with secondary branches.',
      synonyms: ['sapling', 'timber', 'wood'],
      antonyms: ['seed', 'shrub', 'sprout'],
      exampleSentences: [
        { en: 'The birds built a nest high up in the branches of the old oak.', ko: '새들이 오래된 오크 나무 가지 높은 곳에 둥지를 틀었다.' },
        { en: 'We sat under the shade of a large apple tree to escape the sun.', ko: '우리는 햇빛을 피하기 위해 큰 사과나무 그늘 아래에 앉았다.' },
      ],
    }
  ),
  word('Under', '아래에', 1, 'preposition',
    ['위에', '앞에', '뒤에', '옆에', '사이에', '안에', '밖에', '가까이', '멀리', '중간에'],
    tips({
      etymology: '고대 영어 \'under\'에서 유래했으며, \'아래\'를 뜻하는 게르만어 계열의 단어입니다.',
      visual: '비가 올 때 커다란 우산 아래에 서 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '지하철이나 지하 세계를 뜻하는 \'언더그라운드(underground)\'의 \'언더\'를 기억하세요.',
      context: '물건의 위치뿐만 아니라 \'18세 미만(under 18)\'처럼 수치나 기준보다 낮을 때도 사용합니다.',
      synonymAntonym: 'below, beneath와 비슷하며, 반대말은 over, above입니다.',
    }),
    {
      definition: 'at a lower level than something else, or covered by it',
      synonyms: ['below', 'beneath', 'underneath'],
      antonyms: ['over', 'above', 'atop'],
      exampleSentences: [
        { en: 'The children found a small treasure chest buried under the sand.', ko: '아이들은 모래 아래에 묻혀 있는 작은 보물 상자를 발견했다.' },
        { en: 'We took shelter under a large oak tree during the sudden rainstorm.', ko: '우리는 갑작스러운 폭풍우를 피해 커다란 떡갈나무 아래에서 비를 피했다.' },
      ],
    }
  ),
  word('Voice', '목소리', 1, 'noun',
    ['발소리', '엔진 소리', '바람 소리', '물소리', '차 경적', '벨 소리', '박수 소리', '발걸음 소리', '노래방', '라디오'],
    tips({
      etymology: '라틴어 \'vox\'에서 유래되었으며, 이는 말하거나 부르는 소리를 의미합니다.',
      visual: '가수가 마이크 앞에서 입을 벌려 공기 중으로 음파를 내보내는 장면을 상상해 보세요.',
      soundAlike: '전화기 너머로 들리는 \'보이스\'피싱이나 \'보이스\'메일의 음성을 떠올리면 쉽습니다.',
      context: '사람의 목소리뿐만 아니라, 집단의 의견이나 권리를 대변하는 \'목소리\'라는 비유적 의미로도 쓰입니다.',
      synonymAntonym: '유의어로는 vocal sound가 있고, 반의어로는 아무 소리도 없는 상태인 silence가 있습니다.',
    }),
    {
      definition: 'the unique sound produced by humans through the mouth when speaking, shouting, or singing',
      synonyms: ['vocal sound', 'tone', 'utterance'],
      antonyms: ['silence', 'quiet', 'muteness'],
      exampleSentences: [
        { en: 'She has a beautiful voice that captures everyone\'s attention.', ko: '그녀는 모든 사람의 주의를 사로잡는 아름다운 목소리를 가지고 있다.' },
        { en: 'He raised his volume to be heard over the noisy crowd.', ko: '그는 시끄러운 군중들 사이에서 들릴 수 있도록 목소리를 높였다.' },
      ],
    }
  ),
  word('Water', '물', 1, 'noun',
    ['얼음', '증기', '기름', '식초', '우유', '주스', '소금', '설탕', '모래', '돌'],
    tips({
      etymology: '고대 영어 \'wæter\'에서 유래되었으며, 독일어 \'Wasser\'와 어원이 같습니다.',
      visual: '투명한 유리잔에 찰랑거리며 담겨 있는 깨끗하고 맑은 액체를 상상해 보세요.',
      soundAlike: '한국어 \'워터\'는 \'워터파크\'의 그 \'워터\'와 발음이 똑같습니다.',
      context: '생존에 필수적인 요소로, 마시거나 씻거나 수영할 때 주로 사용됩니다.',
      synonymAntonym: '동의어로는 화학 기호인 H2O가 있고, 반대 개념으로는 건조함이나 불이 있습니다.',
    }),
    {
      definition: 'A transparent, odorless, and tasteless liquid that is essential for all known forms of life.',
      synonyms: ['liquid', 'H2O', 'moisture'],
      antonyms: ['fire', 'drought', 'dryness'],
      exampleSentences: [
        { en: 'You should drink at least eight glasses of this liquid every day.', ko: '매일 적어도 여덟 잔의 물을 마셔야 합니다.' },
        { en: 'The plants will die if they do not get enough hydration.', ko: '식물들은 충분한 물을 공급받지 못하면 죽을 것입니다.' },
      ],
    }
  ),
  word('Yes', '예', 1, 'adverb',
    ['아니오', '모르겠어요', '절대 안 돼', '아니', '전혀', '별로', '그만', '됐어', '아니야', '싫어'],
    tips({
      etymology: '고대 영어 gēse(그렇게 되기를)에서 유래하여 긍정의 의미로 굳어졌습니다.',
      visual: '상대방의 말에 고개를 위아래로 힘차게 끄덕이는 모습을 상상하세요.',
      soundAlike: '한국어 \'예\'와 발음이 비슷하여 긍정의 대답임을 쉽게 연상할 수 있습니다.',
      context: '질문에 동의하거나 제안을 수락할 때 문장 맨 앞에 주로 사용합니다.',
      synonymAntonym: '확실함을 뜻하는 certainly와 반대되는 no를 함께 기억하세요.',
    }),
    {
      definition: 'Used to give an affirmative response to a question, request, or offer.',
      synonyms: ['absolutely', 'certainly', 'indeed'],
      antonyms: ['no', 'never', 'negative'],
      exampleSentences: [
        { en: 'Yes, I would like some coffee.', ko: '예, 커피 좀 마시고 싶네요.' },
        { en: 'Yes, I agree with your opinion.', ko: '예, 당신의 의견에 동의합니다.' },
      ],
    }
  ),
  word('Zoo', '동물원', 1, 'noun',
    ['놀이공원', '미술관', '박물관', '수족관', '숲', '공원', '농장', '서커스', '수영장', '도서관'],
    tips({
      etymology: '그리스어로 동물을 뜻하는 \'zoion\'에서 유래한 \'zoological garden\'의 줄임말입니다.',
      visual: '철창이나 울타리 너머로 기린이 목을 길게 빼고 잎을 따 먹는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'주\'와 비슷하므로, 동물이 \'주\'인(주인)인 장소라고 기억하면 쉽습니다.',
      context: '주로 가족 나들이나 현장 학습 장소로 언급되며, 시끄러운 장소를 비유할 때도 쓰입니다.',
      synonymAntonym: 'menagerie는 과거의 동물원을 뜻하며, 야생 상태인 wild와 대조됩니다.',
    }),
    {
      definition: 'A facility where live wild creatures are kept in enclosures for exhibition, conservation, and study.',
      synonyms: ['wildlife park', 'safari park', 'menagerie'],
      antonyms: ['wilderness', 'wild', 'natural habitat'],
      exampleSentences: [
        { en: 'We went to the zoo on Sunday to see the giant pandas.', ko: '우리는 자이언트 판다를 보러 일요일에 동물원에 갔다.' },
        { en: 'The zoo has many exotic animals from all over the world.', ko: '그 동물원에는 전 세계에서 온 많은 이국적인 동물들이 있다.' },
      ],
    }
  ),
  word('Angry', '화난', 2, 'adjective',
    ['기쁜', '슬픈', '두려운', '놀란', '걱정스러운', '짜증난', '피곤한', '지루한', '행복한', '차분한'],
    tips({
      etymology: '고대 노르웨이어 \'angr\'에서 유래되었으며, 원래는 \'슬픔\'이나 \'고통\'을 의미했습니다.',
      visual: '미간을 잔뜩 찌푸리고 얼굴이 붉게 달아오른 화난 표정의 이모티콘을 떠올려 보세요.',
      soundAlike: '유명한 게임 캐릭터인 \'앵그리버드\'가 화가 나서 돌진하는 모습을 연상하면 쉽습니다.',
      context: '부당한 대우를 받거나 계획이 틀어졌을 때 느끼는 강한 불쾌감을 표현할 때 주로 쓰입니다.',
      synonymAntonym: '유사한 단어로는 mad가 있고, 반대되는 평온한 상태는 calm이라고 합니다.',
    }),
    {
      definition: 'feeling or showing strong annoyance, displeasure, or hostility toward someone or something',
      synonyms: ['furious', 'irate', 'mad'],
      antonyms: ['calm', 'cheerful', 'content'],
      exampleSentences: [
        { en: 'He was angry when he lost the game.', ko: '그는 경기에서 졌을 때 화가 났다.' },
        { en: 'She gave him an angry look.', ko: '그녀가 그에게 화난 표정을 지었다.' },
      ],
    }
  ),
  word('Brave', '용감한', 2, 'adjective',
    ['겁많은', '소심한', '비겁한', '나약한', '불안한', '수줍은', '신중한', '냉정한', '게으른', '평범한'],
    tips({
      etymology: '이탈리아어 \'bravo\'에서 유래되었으며, 원래는 \'야생의\' 또는 \'길들여지지 않은\'이라는 의미에서 \'용맹함\'으로 발전했습니다.',
      visual: '거대한 사자 앞에 당당히 서 있는 전사의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'브레이크(brake)\'와 비슷하지만, 멈추지 않고 앞으로 나아가는 용감한 모습을 떠올리세요.',
      context: '위험한 상황에서 남을 돕거나, 두려움을 극복하고 새로운 도전을 시작할 때 주로 사용합니다.',
      synonymAntonym: 'courageous와 유의어이며, 반대말로는 겁이 많은 상태를 뜻하는 cowardly가 있습니다.',
    }),
    {
      definition: 'showing no fear when faced with pain, danger, or difficult situations',
      synonyms: ['courageous', 'valiant', 'fearless'],
      antonyms: ['cowardly', 'fearful', 'timid'],
      exampleSentences: [
        { en: 'It was a very bold and courageous act to speak the truth in that situation.', ko: '그런 상황에서 진실을 말한 것은 매우 용감한 행동이었습니다.' },
        { en: 'The young explorer felt ready to face the dark cave alone.', ko: '어린 탐험가는 혼자서 어두운 동굴에 맞설 만큼 용감하다고 느꼈습니다.' },
      ],
    }
  ),
  word('Clean', '깨끗한', 2, 'adjective',
    ['더러운', '지저분한', '어두운', '밝은', '새로운', '오래된', '단정한', '흐트러진', '정돈된', '청결한'],
    tips({
      etymology: '고대 영어 clǣne에서 유래했으며, 원래 \'순수한\' 또는 \'정제된\'이라는 의미를 가지고 있었습니다.',
      visual: '먼지 하나 없이 반짝거리는 하얀색 타일 바닥이나 갓 세탁한 뽀송뽀송한 수건을 떠올려 보세요.',
      soundAlike: '축구에서 실점 없이 경기를 마치는 것을 \'클린 시트\'라고 부르는 것을 생각하면 쉽습니다.',
      context: '위생이 중요한 주방이나 병원, 또는 정돈된 방 상태를 묘사할 때 주로 사용합니다.',
      synonymAntonym: '유의어로는 tidy가 있고, 반대말로는 오염된 상태를 뜻하는 dirty가 대표적입니다.',
    }),
    {
      definition: 'completely free from dirt, marks, pollution, or any unwanted substances',
      synonyms: ['tidy', 'spotless', 'pure'],
      antonyms: ['dirty', 'filthy', 'messy'],
      exampleSentences: [
        { en: 'Make sure your hands are before you start cooking.', ko: '요리를 시작하기 전에 손이 깨끗한지 확인하세요.' },
        { en: 'The air in the mountains is very fresh and pure.', ko: '산속의 공기는 매우 신선하고 깨끗합니다.' },
      ],
    }
  ),
  word('Dream', '꿈', 2, 'noun',
    ['현실', '깨달음', '각성', '잠', '수면', '생각', '회상', '기억', '계획', '목표'],
    tips({
      etymology: '고대 영어 drēam에서 유래했으며, 본래는 \'즐거움\'이나 \'음악\'이라는 의미를 담고 있었습니다.',
      visual: '잠든 사람의 머리 위로 뭉게뭉게 피어오르는 구름 모양의 말풍선을 상상해 보세요.',
      soundAlike: '한국어 \'드림\'과 발음이 같아 \'선물을 드림\'처럼 무언가 주어지는 환상적인 장면을 연상하세요.',
      context: '잠잘 때 꾸는 환상뿐만 아니라 미래에 이루고 싶은 희망이나 야망을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'vision은 미래의 청사진을, nightmare는 무서운 꿈을 뜻하며 reality는 실제 현실을 의미합니다.',
    }),
    {
      definition: 'A sequence of images, emotions, and sensations that involuntarily occur in the mind during certain stages of sleep.',
      synonyms: ['vision', 'aspiration', 'fantasy'],
      antonyms: ['reality', 'actuality', 'fact'],
      exampleSentences: [
        { en: 'I had a strange dream last night that I could fly over the ocean.', ko: '어젯밤에 바다 위를 날아다니는 이상한 꿈을 꿨어요.' },
        { en: 'It has always been his lifelong dream to travel around the world.', ko: '세계 일주를 하는 것은 항상 그의 평생의 꿈이었습니다.' },
      ],
    }
  ),
  word('Early', '일찍', 2, 'adverb',
    ['늦게', '천천히', '나중에', '한참 후에', '미뤄서', '지연되어', '뒤에', '오래도록', '장시간 후', '결국'],
    tips({
      etymology: '고대 영어 \'ǣrlice\'에서 유래되었으며, \'시간상 앞선\'이라는 의미를 담고 있습니다.',
      visual: '모두가 잠든 새벽, 지평선 위로 붉은 해가 막 떠오르는 장면을 상상해 보세요.',
      soundAlike: '\'얼리\'는 \'얼리버드(Early Bird)\'라는 말처럼 남들보다 먼저 움직이는 사람을 떠올리게 합니다.',
      context: '약속 시간보다 미리 도착하거나, 아침에 남들보다 먼저 일어날 때 주로 사용합니다.',
      synonymAntonym: 'soon이나 beforehand와 비슷하게 쓰이며, 반대말은 late입니다.',
    }),
    {
      definition: 'At or near the beginning of a period of time, or before the expected moment.',
      synonyms: ['soon', 'beforehand', 'prematurely'],
      antonyms: ['late', 'belatedly', 'afterward'],
      exampleSentences: [
        { en: 'I wake up early every day to go for a run.', ko: '나는 달리기를 하기 위해 매일 일찍 일어난다.' },
        { en: 'The guests arrived early, so the host wasn\'t ready yet.', ko: '손님들이 일찍 도착해서 주인은 아직 준비가 되지 않았었다.' },
      ],
    }
  ),
  word('Family', '가족', 2, 'noun',
    ['친구', '이웃', '동료', '선생님', '학생', '직원', '고객', '낯선 사람', '동호회', '팀'],
    tips({
      etymology: '라틴어 \'familia\'에서 유래되었으며, 원래는 한 집안에 속한 하인과 친척 모두를 포함하는 개념이었습니다.',
      visual: '지붕 아래에 부모님과 아이들이 둥글게 모여 앉아 함께 식사하는 따뜻한 장면을 떠올려 보세요.',
      soundAlike: '한국어 외래어로도 \'패밀리\'라고 자주 쓰이며, 패밀리 레스토랑처럼 여럿이 함께하는 느낌을 줍니다.',
      context: '혈연관계뿐만 아니라 반려동물이나 매우 가까운 공동체를 묘사할 때도 폭넓게 사용됩니다.',
      synonymAntonym: 'household는 한 집에 사는 구성원을 강조하며, stranger는 전혀 모르는 외부인을 뜻합니다.',
    }),
    {
      definition: 'A social unit consisting of individuals who are joined by blood, marriage, or adoption.',
      synonyms: ['household', 'relatives', 'kin'],
      antonyms: ['stranger', 'individual', 'outsider'],
      exampleSentences: [
        { en: 'My family lives in Seoul.', ko: '우리 가족은 서울에 산다.' },
        { en: 'She spends time with her family on weekends.', ko: '그녀는 주말에 가족과 시간을 보낸다.' },
      ],
    }
  ),
  word('Garden', '정원', 2, 'noun',
    ['공원', '숲', '농장', '온실', '산', '들판', '건물', '도로', '주차장', '상가'],
    tips({
      etymology: '울타리를 두른 공간을 뜻하는 고대 영어 \'geard\'에서 유래되었습니다.',
      visual: '집 뒤뜰에 알록달록한 꽃들과 초록색 채소들이 심어져 있는 풍경을 상상해 보세요.',
      soundAlike: '고급 식당 이름 뒤에 붙는 \'가든\'을 떠올리면 정원이 있는 넓은 장소가 연상됩니다.',
      context: '주로 주택에 부속된 마당이나 식물을 가꾸기 위해 구획된 땅을 의미할 때 사용합니다.',
      synonymAntonym: 'yard와 비슷하게 쓰이지만, garden은 보통 꽃이나 채소를 가꾸는 데 더 집중된 표현입니다.',
    }),
    {
      definition: 'A specific area of land, often near a house, used for cultivating flowers, fruit, or vegetables.',
      synonyms: ['yard', 'backyard', 'plot'],
      antonyms: ['wilderness', 'desert', 'wasteland'],
      exampleSentences: [
        { en: 'She spends every Sunday morning pulling weeds in her garden.', ko: '그녀는 일요일 아침마다 정원에서 잡초를 뽑으며 시간을 보낸다.' },
        { en: 'The botanical garden features a wide variety of exotic plants.', ko: '그 식물원에는 아주 다양한 외래 식물들이 있다.' },
      ],
    }
  ),
  word('Happy', '행복한', 2, 'adjective',
    ['슬픈', '화난', '걱정스러운', '두려운', '외로운', '지루한', '피곤한', '불행한', '우울한', '불안한'],
    tips({
      etymology: '행운을 뜻하는 고대 노르웨이어 \'happ\'에서 유래하여, 운이 좋고 기분이 좋은 상태를 의미하게 되었습니다.',
      visual: '입꼬리가 귀에 걸릴 정도로 활짝 웃고 있는 노란색 스마일 얼굴을 떠올려 보세요.',
      soundAlike: '강아지 이름으로 자주 쓰이는 \'해피\'를 생각하면 즐겁고 꼬리를 흔드는 모습이 연상됩니다.',
      context: '생일 파티, 선물 전달, 반가운 사람을 만났을 때의 긍정적인 감정을 표현할 때 주로 사용합니다.',
      synonymAntonym: '기쁨이 넘치는 joyful과 유사하며, 슬픔을 뜻하는 sad와는 반대되는 감정입니다.',
    }),
    {
      definition: 'feeling or showing pleasure, satisfaction, or great joy',
      synonyms: ['joyful', 'cheerful', 'contented'],
      antonyms: ['sad', 'miserable', 'depressed'],
      exampleSentences: [
        { en: 'I am so glad to see you looking so healthy and cheerful.', ko: '당신이 아주 건강하고 즐거워 보여서 정말 기쁩니다.' },
        { en: 'The children were playing in the park with bright, smiling faces.', ko: '아이들은 밝게 웃는 얼굴로 공원에서 놀고 있었습니다.' },
      ],
    }
  ),
  word('Island', '섬', 2, 'noun',
    ['대륙', '반도', '해변', '바다', '산', '호수', '강', '숲', '사막', '초원'],
    tips({
      etymology: '고대 영어 \'ig\'(섬)와 \'land\'(땅)가 결합된 단어로, 중간의 \'s\'는 나중에 철자 혼동으로 추가되었습니다.',
      visual: '푸른 바다 한가운데에 홀로 떠 있는 작은 땅 덩어리를 상상해 보세요.',
      soundAlike: '첫 글자 \'I\'는 \'아이\'로 발음되지만, 중간의 \'s\'는 묵음이라 소리가 나지 않으니 주의하세요.',
      context: '제주도나 하와이처럼 사방이 물로 둘러싸인 지형을 말할 때 주로 사용합니다.',
      synonymAntonym: 'Isle은 주로 시적인 표현이나 작은 섬에 쓰이며, 대륙을 뜻하는 Continent와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A specific area of land that is completely encircled by a body of water.',
      synonyms: ['isle', 'islet', 'atoll'],
      antonyms: ['continent', 'mainland', 'ocean'],
      exampleSentences: [
        { en: 'The small boat took us from the mainland to the secluded island.', ko: '작은 배가 우리를 본토에서 외딴 섬으로 데려다주었다.' },
        { en: 'Many unique species of animals can only be found on this remote island.', ko: '많은 독특한 종의 동물들이 이 멀리 떨어진 섬에서만 발견될 수 있다.' },
      ],
    }
  ),
  word('Jungle', '정글', 2, 'noun',
    ['사막', '초원', '늪지대', '동굴', '빙하', '해변', '계곡', '고원', '평야', '절벽'],
    tips({
      etymology: '산스크리트어 \'jangala\'에서 유래되었으며, 원래는 \'경작되지 않은 땅\'이나 \'황무지\'를 의미했습니다.',
      visual: '하늘이 보이지 않을 정도로 빽빽한 나무들과 나무 사이를 복잡하게 얽혀 있는 덩굴들을 상상해 보세요.',
      soundAlike: '놀이터에 있는 \'정글짐\'을 떠올려 보세요. 복잡하게 얽힌 구조가 마치 실제 정글의 나무들 같습니다.',
      context: '주로 열대 지방의 덥고 습한 지역에 위치하며, 호랑이나 원숭이 같은 야생 동물의 서식지입니다.',
      synonymAntonym: '비슷한 말인 rainforest는 비가 많이 오는 숲을, 반대 개념인 desert는 식물이 살기 힘든 메마른 땅을 뜻합니다.',
    }),
    {
      definition: 'A wild land area with very thick, tangled vegetation and many tall trees, typically found in tropical regions.',
      synonyms: ['rainforest', 'wilds', 'thicket'],
      antonyms: ['desert', 'wasteland', 'cityscape'],
      exampleSentences: [
        { en: 'The explorers had to cut their way through the thick vegetation of the jungle.', ko: '탐험가들은 정글의 무성한 식물들을 헤치며 길을 내야 했다.' },
        { en: 'Various species of colorful parrots are native to this tropical jungle.', ko: '다양한 종류의 화려한 앵무새들이 이 열대 정글에 서식한다.' },
      ],
    }
  ),
  word('Kitchen', '부엌', 2, 'noun',
    ['거실', '침실', '화장실', '베란다', '창고', '차고', '지하실', '다락방', '현관', '발코니'],
    tips({
      etymology: '라틴어 \'coquina(요리하다)\'에서 유래하여 음식을 만드는 장소를 뜻하게 되었습니다.',
      visual: '가스레인지 위에서 보글보글 끓는 냄비와 맛있는 냄새가 가득한 조리대를 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'Chicken(치킨)\'을 \'Kitchen(키친)\'에서 요리한다고 기억하면 쉽습니다.',
      context: '집 안에서 요리 도구, 냉장고, 싱크대가 있는 공간을 가리킬 때 주로 사용합니다.',
      synonymAntonym: '유사한 단어로는 cookery가 있으며, 거실(living room)이나 침실(bedroom)과는 용도가 구분됩니다.',
    }),
    {
      definition: 'A specific area or room in a house or building where meals are prepared and food is cooked.',
      synonyms: ['cookroom', 'scullery', 'galley'],
      antonyms: ['bedroom', 'bathroom', 'living room'],
      exampleSentences: [
        { en: 'My mother is cooking a delicious dinner in the kitchen.', ko: '우리 어머니께서는 부엌에서 맛있는 저녁 식사를 요리하고 계신다.' },
        { en: 'The kitchen is equipped with modern appliances like a microwave and an oven.', ko: '그 부엌에는 전자레인지와 오븐 같은 현대적인 가전제품들이 갖춰져 있다.' },
      ],
    }
  ),
  word('Lamp', '램프', 2, 'noun',
    ['창문', '거울', '시계', '책', '침대', '의자', '테이블', '선풍기', '에어컨', '난로'],
    tips({
      etymology: '그리스어 \'lampas\'에서 유래되었으며, 이는 \'횃불\'이나 \'빛나는 것\'을 의미합니다.',
      visual: '어두운 방 안에서 책상 위를 동그랗고 따뜻하게 비추는 전등 갓의 모습을 상상해 보세요.',
      soundAlike: '어린 양을 뜻하는 \'Lamb\'과 발음이 비슷하지만, 끝에 \'p\' 소리를 살려 \'램프\'라고 발음합니다.',
      context: '주로 실내에서 독서를 하거나 분위기를 밝힐 때 사용하는 고정식 조명 기구를 말합니다.',
      synonymAntonym: '유의어로는 light, lantern 등이 있으며, 반대되는 개념으로는 darkness 등이 있습니다.',
    }),
    {
      definition: 'A device that produces artificial light, typically by using electricity or burning oil.',
      synonyms: ['light', 'lantern', 'fixture'],
      antonyms: ['darkness', 'shadow', 'obscurity'],
      exampleSentences: [
        { en: 'I bought a new desk lamp to help me study at night.', ko: '밤에 공부하는 데 도움이 되도록 새 책상용 스탠드를 샀어요.' },
        { en: 'The oil lamp cast a warm glow across the small room.', ko: '오일 등불이 작은 방 안에 따스한 빛을 비추었습니다.' },
      ],
    }
  ),
  word('Morning', '아침', 2, 'noun',
    ['점심', '저녁', '밤', '오후', '한낮', '새벽', '황혼', '낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 \'morgen\'에서 유래했으며, 원래는 \'내일\'이나 \'새벽\'을 뜻하는 단어였습니다.',
      visual: '창문 사이로 햇살이 비치고 알람 시계가 울리는 침실 풍경을 상상해 보세요.',
      soundAlike: '자동차 모델명 \'모닝\'이나 인사말 \'굿모닝\'을 떠올리면 기억하기 쉽습니다.',
      context: '주로 \'in the morning\'이라는 표현으로 쓰이며, 잠에서 깨어나 활동을 시작하는 시간대를 말합니다.',
      synonymAntonym: 'dawn(새벽)과 비슷하지만 더 넓은 시간대이며, 반대말은 evening(저녁)이나 night(밤)입니다.',
    }),
    {
      definition: 'the first part of the day, beginning when the sun rises and ending at noon',
      synonyms: ['dawn', 'daybreak', 'forenoon'],
      antonyms: ['evening', 'night', 'dusk'],
      exampleSentences: [
        { en: 'I usually drink a cup of coffee in the morning to wake up.', ko: '나는 보통 잠을 깨기 위해 아침에 커피 한 잔을 마신다.' },
        { en: 'The air is very fresh and cool this morning.', ko: '오늘 아침은 공기가 매우 신선하고 시원하다.' },
      ],
    }
  ),
  word('Night', '밤', 2, 'noun',
    ['낮', '아침', '오후', '저녁', '새벽', '황혼', '해질녘', '한낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 \'niht\'에서 유래했으며, 독일어 \'Nacht\'와 어원이 같습니다.',
      visual: '검은 도화지에 반짝이는 별과 초승달이 떠 있는 풍경을 떠올려 보세요.',
      soundAlike: '기사(Knight)와 발음이 똑같지만, K가 없는 Night는 어두운 시간을 뜻합니다.',
      context: '주로 \'at night\'라는 표현으로 쓰이며, 잠들기 전 인사인 \'Good night\'으로 친숙합니다.',
      synonymAntonym: 'Day(낮)와 반대되는 개념이며, Evening(저녁)보다는 더 늦고 어두운 시간을 의미합니다.',
    }),
    {
      definition: 'The period of darkness in each twenty-four hours when the sun is below the horizon.',
      synonyms: ['darkness', 'nighttime', 'evening'],
      antonyms: ['daytime', 'daylight', 'noon'],
      exampleSentences: [
        { en: 'The stars shine brightly in the clear sky at night.', ko: '밤에는 맑은 하늘에 별들이 밝게 빛납니다.' },
        { en: 'She prefers to read books late at night when it is quiet.', ko: '그녀는 조용한 늦은 밤에 책 읽는 것을 선호합니다.' },
      ],
    }
  ),
  word('Ocean', '바다', 2, 'noun',
    ['호수', '강', '시내', '저수지', '수영장', '폭포', '운하', '연못', '시냇물', '빗물'],
    tips({
      etymology: '그리스 신화에서 지구를 둘러싼 거대한 강인 \'오케아노스(Okeanos)\'에서 유래했습니다.',
      visual: '지구본을 보았을 때 대륙 사이를 가득 채우고 있는 끝없는 파란색 영역을 떠올려 보세요.',
      soundAlike: '호텔의 \'오션뷰(Ocean View)\' 객실은 바다가 보이는 방이라는 뜻으로 널리 쓰입니다.',
      context: '지구 표면의 약 70%를 차지하며 태평양, 대서양 같은 거대한 물줄기를 지칭할 때 사용합니다.',
      synonymAntonym: 'sea와 비슷하지만 ocean이 훨씬 더 규모가 크며, 반대되는 개념으로는 land(육지)가 있습니다.',
    }),
    {
      definition: 'The vast body of salt water that covers almost three-quarters of the earth\'s surface.',
      synonyms: ['sea', 'main', 'deep'],
      antonyms: ['land', 'continent', 'shore'],
      exampleSentences: [
        { en: 'The Pacific is the largest body of water on the planet.', ko: '태평양은 지구상에서 가장 거대한 바다입니다.' },
        { en: 'Many mysterious creatures live deep beneath the surface of the blue expanse.', ko: '많은 신비로운 생물들이 푸른 바다 표면 깊은 곳에 살고 있습니다.' },
      ],
    }
  ),
  word('Parent', '부모', 2, 'noun',
    ['자식', '형제', '친구', '선생님', '조부모', '삼촌', '이모', '친척', '이웃', '동료'],
    tips({
      etymology: '라틴어 \'parere(낳다)\'에서 유래하여, 생명을 주고 돌보는 존재를 의미합니다.',
      visual: '큰 나무가 어린 묘목에게 그늘을 만들어주며 비바람을 막아주는 모습을 상상하세요.',
      soundAlike: '발음이 \'패어(pair)\'와 비슷하죠? 보통 엄마와 아빠 두 분이 한 쌍을 이루는 모습을 떠올려 보세요.',
      context: '학교 상담이나 가정 통신문에서 \'Parental consent(학부모 동의)\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: 'Guardian은 법적 보호자를 뜻하며, Child는 그들의 보살핌을 받는 대상을 뜻합니다.',
    }),
    {
      definition: 'A person who brings up and cares for a child, or a biological father or mother.',
      synonyms: ['guardian', 'progenitor', 'begetter'],
      antonyms: ['offspring', 'child', 'descendant'],
      exampleSentences: [
        { en: 'Every parent wants the best for their children.', ko: '모든 부모는 자녀를 위해 최선의 것을 원한다.' },
        { en: 'She became a parent for the first time at the age of thirty.', ko: '그녀는 서른 살에 처음으로 부모가 되었다.' },
      ],
    }
  ),
  word('Quiet', '조용한', 2, 'adjective',
    ['시끄러운', '활기찬', '요란한', '거친', '단단한', '부드러운', '빠른', '무거운', '어두운', '복잡한'],
    tips({
      etymology: '라틴어 \'quies\'에서 유래되었으며, 이는 \'휴식\'이나 \'평화\'를 의미합니다.',
      visual: '검지 손가락을 입술에 세로로 갖다 대며 \'쉿\' 하는 동작을 떠올려 보세요.',
      soundAlike: '발음이 \'콰이어트\'이므로, 명상이나 독서를 하는 \'콰이어트 타임\'을 연상하면 쉽습니다.',
      context: '도서관, 영화관, 혹은 아기가 자고 있는 방처럼 소음을 줄여야 하는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'silent는 소리가 아예 없는 상태를, loud는 소리가 매우 큰 상태를 뜻합니다.',
    }),
    {
      definition: 'making very little sound or characterized by an absence of noise and disturbance',
      synonyms: ['silent', 'peaceful', 'calm'],
      antonyms: ['loud', 'noisy', 'rowdy'],
      exampleSentences: [
        { en: 'The library is a very peaceful and still place where everyone must remain silent.', ko: '도서관은 모든 사람이 침묵을 지켜야 하는 매우 평화롭고 정적인 장소입니다.' },
        { en: 'They decided to move to a secluded area to enjoy a more tranquil lifestyle.', ko: '그들은 더 평온한 생활 방식을 즐기기 위해 외딴 지역으로 이사하기로 결정했습니다.' },
      ],
    }
  ),
  word('River', '강', 2, 'noun',
    ['바다', '호수', '시내', '운하', '폭포', '저수지', '연못', '시냇물', '둑', '다리'],
    tips({
      etymology: '라틴어 \'riparius(강둑의)\'에서 유래되었으며, 물이 일정한 경로를 따라 흐르는 지형을 뜻합니다.',
      visual: '산에서 시작된 물줄기가 굽이굽이 땅을 가로질러 바다로 흘러가는 긴 띠 모양을 상상하세요.',
      soundAlike: '간(Liver)과 발음이 비슷하지만, 첫 글자를 \'R\'로 굴려 발음하면 흐르는 강이 됩니다.',
      context: '지리적으로 도시의 젖줄 역할을 하며, 낚시나 수영 같은 레저 활동의 장소로 자주 언급됩니다.',
      synonymAntonym: 'Stream보다 규모가 크며, 고여 있는 Lake와는 반대로 끊임없이 움직이는 물줄기입니다.',
    }),
    {
      definition: 'A large natural stream of water that flows in a channel to the ocean, a lake, or another such stream.',
      synonyms: ['stream', 'waterway', 'tributary'],
      antonyms: ['desert', 'ocean', 'pond'],
      exampleSentences: [
        { en: 'The longest river in the world flows through several different countries.', ko: '세계에서 가장 긴 강은 여러 다른 나라들을 거쳐 흐른다.' },
        { en: 'Heavy rain caused the river to overflow its banks and flood the nearby fields.', ko: '폭우로 인해 강이 범람하여 인근 들판이 침수되었다.' },
      ],
    }
  ),
  word('School', '학교', 2, 'noun',
    ['도서관', '기숙사', '체육관', '실험실', '강당', '운동장', '회사', '병원', '공장', '상가'],
    tips({
      etymology: '그리스어 \'skhole\'에서 유래되었으며, 원래는 \'여가\'나 \'한가한 시간\'을 뜻했습니다. 고대에는 여유가 있는 사람들이 모여 토론하고 배우던 것에서 유래되었습니다.',
      visual: '칠판 앞에 선생님이 서 계시고, 책상에 앉아 책을 펴고 있는 학생들의 모습을 떠올려 보세요.',
      soundAlike: '한국어 \'스쿨\'과 발음이 같으며, 노란색 \'스쿨버스\'를 생각하면 기억하기 쉽습니다.',
      context: '주로 교육을 받는 장소를 뜻하며, \'go to school\'처럼 관사 없이 쓰이면 \'공부하러 가다\'라는 본래의 목적을 강조합니다.',
      synonymAntonym: '유의어로는 academy, institute 등이 있으며, 반대 개념으로는 배움의 장소를 떠나는 graduation이나 집을 뜻하는 home을 생각할 수 있습니다.',
    }),
    {
      definition: 'An organized institution or building where students receive instruction from teachers to gain knowledge and skills.',
      synonyms: ['academy', 'institute', 'college'],
      antonyms: ['home', 'workplace', 'wilderness'],
      exampleSentences: [
        { en: 'The children are playing in the playground after their lessons at the educational facility.', ko: '아이들이 수업을 마친 후 운동장에서 놀고 있습니다.' },
        { en: 'Most students in this city walk to the building where they study every morning.', ko: '이 도시의 대부분의 학생들은 매일 아침 공부하는 곳까지 걸어서 갑니다.' },
      ],
    }
  ),
  word('Table', '탁자', 2, 'noun',
    ['의자', '침대', '소파', '선반', '책장', '서랍장', '화장대', '장식대', '수납장', '신발장'],
    tips({
      etymology: '라틴어 \'tabula\'에서 유래되었으며, 원래는 평평한 판자나 널빤지를 의미했습니다.',
      visual: '네 개의 다리가 평평한 상판을 받치고 있고 그 위에 따뜻한 요리가 차려진 모습을 상상하세요.',
      soundAlike: '한국어에서도 \'테이블\'이라고 그대로 쓰이며, \'테이블 매너\'라는 표현을 떠올리면 쉽습니다.',
      context: '식사를 하거나 물건을 올려둘 때 사용하며, 사무용으로 쓰일 때는 주로 책상과 구분하여 부릅니다.',
      synonymAntonym: 'desk와 비슷하지만 주로 공부용보다는 공용 공간에서 사용되며, 의자를 뜻하는 chair와 짝을 이룹니다.',
    }),
    {
      definition: 'A piece of furniture consisting of a flat horizontal surface supported by legs, used for eating, writing, or working.',
      synonyms: ['desk', 'stand', 'counter'],
      antonyms: ['floor', 'ground', 'ceiling'],
      exampleSentences: [
        { en: 'Please clear the dishes off the table after you finish eating.', ko: '식사를 마친 후에 탁자 위에서 접시들을 치워 주세요.' },
        { en: 'The family gathered around the wooden table to play board games.', ko: '가족들이 보드게임을 하기 위해 나무 탁자 주위에 모였다.' },
      ],
    }
  ),
  word('Umbrella', '우산', 2, 'noun',
    ['모자', '코트', '장갑', '스카프', '부츠', '비옷', '바람막이', '선글라스', '가방', '지갑'],
    tips({
      etymology: '라틴어 \'umbra\'에서 유래했으며, 이는 \'그늘\'을 의미합니다. 원래는 비가 아닌 햇빛을 가리는 용도였습니다.',
      visual: '비가 내리는 날, 사람들이 형형색색의 둥근 덮개를 머리 위로 펼쳐 들고 걸어가는 모습을 상상해 보세요.',
      soundAlike: '\'엄브렐라\'라고 발음하며, 비가 올 때 \'엄마\'가 챙겨주시는 \'우산\'이라고 연상하면 쉽습니다.',
      context: '일기예보에서 비 소식이 있을 때 가방에 꼭 챙겨야 할 필수 소지품입니다.',
      synonymAntonym: '햇빛을 가리는 용도는 parasol이라고 하며, 비를 막아주는 것은 brolly라는 구어체 표현도 있습니다.',
    }),
    {
      definition: 'A portable circular cover consisting of a fabric shell stretched over a folding metal frame, used for keeping a person dry.',
      synonyms: ['parasol', 'sunshade', 'brolly'],
      antonyms: ['rain', 'sunlight', 'exposure'],
      exampleSentences: [
        { en: 'Don\'t forget to take an umbrella with you, as the sky looks very cloudy.', ko: '하늘이 매우 흐리니 우산을 챙겨가는 것을 잊지 마세요.' },
        { en: 'The strong wind blew his umbrella inside out while he was crossing the street.', ko: '그가 길을 건너는 동안 강한 바람 때문에 그의 우산이 뒤집혔다.' },
      ],
    }
  ),
  word('Village', '마을', 2, 'noun',
    ['도시', '가게', '학교', '교회', '광장', '거리', '건물', '주택', '공장', '아파트'],
    tips({
      etymology: '라틴어 \'villa(시골 저택)\'에서 유래하여 사람들이 모여 사는 작은 공동체를 뜻하게 되었습니다.',
      visual: '언덕 위에 작은 집들이 옹기종기 모여 있고 이웃끼리 서로 다 아는 정겨운 시골 풍경을 상상해 보세요.',
      soundAlike: '발음이 \'빌리지\'이므로, \'이 마을에 살기로 빌리지(빌리지)?\'라고 연상해 보세요.',
      context: '주로 시골(rural area)에 위치하며, 규모가 큰 도시(city)나 읍내(town)보다 작은 단위를 말할 때 쓰입니다.',
      synonymAntonym: 'town보다는 작고 hamlet보다는 큰 규모이며, 대도시인 city와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small group of houses and associated buildings, situated in a rural area and generally smaller than a town.',
      synonyms: ['hamlet', 'settlement', 'community'],
      antonyms: ['metropolis', 'city', 'megalopolis'],
      exampleSentences: [
        { en: 'The entire community gathered in the center of the settlement to celebrate the harvest.', ko: '마을 전체 주민들이 수확을 축하하기 위해 마을 중심부에 모였습니다.' },
        { en: 'Life in a remote rural area is much quieter and slower than in a bustling city.', ko: '외딴 시골 마을에서의 삶은 북적이는 도시보다 훨씬 조용하고 느긋합니다.' },
      ],
    }
  ),
  word('Window', '창문', 2, 'noun',
    ['문', '벽', '천장', '바닥', '지붕', '베란다', '발코니', '유리', '커튼', '블라인드'],
    tips({
      etymology: '고대 노르웨이어 \'vindauga\'에서 유래했으며, 이는 \'바람(wind)의 눈(eye)\'이라는 뜻을 담고 있습니다.',
      visual: '벽 한가운데에 투명한 유리판이 끼워져 있어 바깥 풍경이 액자처럼 보이는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 운영체제인 \'윈도우\'를 떠올려 보세요. 화면에 여러 개의 창을 띄우는 모습과 같습니다.',
      context: '환기를 시키거나 밖을 내다볼 때 사용하며, 보통 \'open\', \'close\', \'look through\'와 함께 쓰입니다.',
      synonymAntonym: '유리창 한 칸을 뜻하는 pane과 유사하며, 완전히 막혀 있는 wall과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A transparent opening in a wall or vehicle, typically containing glass, designed to admit light or air and allow people to see out.',
      synonyms: ['casement', 'pane', 'skylight'],
      antonyms: ['wall', 'solid', 'enclosure'],
      exampleSentences: [
        { en: 'Please close the window because it is getting cold outside.', ko: '밖이 추워지고 있으니 창문을 닫아 주세요.' },
        { en: 'The sunlight streamed through the bedroom window every morning.', ko: '매일 아침 침실 창문을 통해 햇빛이 쏟아져 들어왔다.' },
      ],
    }
  ),
  word('Yellow', '노란색', 2, 'adjective',
    ['빨간색', '파란색', '초록색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 \'geolu\'에서 유래되었으며, 이는 금색이나 밝은 빛을 의미하는 어근과 연결됩니다.',
      visual: '잘 익은 바나나의 껍질이나 활짝 핀 해바라기 꽃잎의 밝은 색상을 떠올려 보세요.',
      soundAlike: '축구 경기에서 반칙을 했을 때 심판이 꺼내는 \'옐로카드\'의 색상을 연상하면 쉽습니다.',
      context: '신호등에서 \'주의\'를 나타내거나, 가을철 은행잎이 물들었을 때 주로 사용하는 형용사입니다.',
      synonymAntonym: '황금빛을 뜻하는 golden과 유사하며, 어두운 색인 black과는 반대되는 느낌을 줍니다.',
    }),
    {
      definition: 'having the color of gold, butter, or ripe lemons',
      synonyms: ['golden', 'amber', 'lemon'],
      antonyms: ['dark', 'black', 'colorless'],
      exampleSentences: [
        { en: 'The autumn leaves turned a beautiful shade of bright gold.', ko: '가을 잎들이 아름답고 밝은 노란 빛조로 변했습니다.' },
        { en: 'He painted the kitchen walls a warm and cheerful sunny tone.', ko: '그는 주방 벽을 따뜻하고 쾌활한 노란 톤으로 칠했습니다.' },
      ],
    }
  ),
  word('Zero', '영', 2, 'noun',
    ['하나', '둘', '셋', '열', '백', '천', '만', '숫자', '점수', '온도'],
    tips({
      etymology: '아랍어 \'sifr(비어 있음)\'에서 유래하여 라틴어와 이탈리아어를 거쳐 영어로 정착되었습니다.',
      visual: '비어 있는 동그라미(0) 모양을 떠올리면 아무것도 없다는 뜻을 쉽게 기억할 수 있습니다.',
      soundAlike: '한국어에서도 \'제로\'라고 그대로 쓰며, \'제로 콜라\'처럼 당분이 전혀 없음을 나타낼 때 자주 쓰입니다.',
      context: '온도, 점수, 수학적 계산뿐만 아니라 \'가능성이 전혀 없다\'는 비유적 표현으로도 쓰입니다.',
      synonymAntonym: '아무것도 없는 상태인 nothing과 유의어이며, 무한대를 뜻하는 infinity와 대조됩니다.',
    }),
    {
      definition: 'The numerical symbol representing the absence of all magnitude or quantity.',
      synonyms: ['nothing', 'nil', 'naught'],
      antonyms: ['everything', 'infinity', 'abundance'],
      exampleSentences: [
        { en: 'The thermometer dropped to zero during the coldest night of the year.', ko: '일 년 중 가장 추운 밤에 온도계가 영도로 떨어졌다.' },
        { en: 'The team had zero chance of winning after their star player got injured.', ko: '스타 플레이어가 부상을 당한 후 그 팀이 이길 확률은 전혀 없었다.' },
      ],
    }
  ),
];
