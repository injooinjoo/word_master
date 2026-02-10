import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch04: VocabItem[] = [
  word('Accept', '받아들이다', 2, 'verb',
    ['거절하다', '무시하다', '버리다', '미루다', '숨기다', '피하다', '잃다', '던지다', '막다', '깨뜨리다'],
    tips({
      etymology: 'ac(~으로) + cept(잡다) -> 자기에게로 잡다',
      visual: '선물을 두 손으로 받는 모습',
      soundAlike: '억셉트 = 억(!)수용하겠습니다',
      context: 'Please accept my apology.',
      synonymAntonym: 'Syn: receive, Ant: reject',
    }),
    {
      definition: 'to agree to receive or take something offered',
      wordDistractors: ['receive', 'reject', 'except'],
      definitionDistractors: [
        'to refuse or decline something',
        'to leave out or exclude',
        'to give something to someone',
      ],
      exampleSentences: [
        { en: 'She accepted the job offer.', ko: '그녀는 그 일자리를 수락했다.' },
        { en: 'Please accept my apology.', ko: '제 사과를 받아주세요.' },
      ],
    }
  ),
  word('Answer', '대답하다', 2, 'verb',
    ['질문하다', '묻다', '말하다', '부르다', '외치다', '속삭이다', '이야기하다', '논쟁하다', '토론하다', '지적하다'],
    tips({
      etymology: 'and(~에 대하여) + swear(맹세하다) -> 사실에 대하여 말하다',
      visual: '손을 들고 답하는 학생',
      soundAlike: '앤서 = 앤서(답)를 적다',
      context: 'Can you answer the question?',
      synonymAntonym: 'Syn: reply, respond, Ant: ask',
    }),
    {
      definition: 'to respond to a question or request',
      wordDistractors: ['reply', 'respond', 'ask'],
      definitionDistractors: [
        'to make a request for information',
        'to write or speak in return',
        'to react to something said or done',
      ],
      exampleSentences: [
        { en: 'Can you answer the question?', ko: '질문에 답할 수 있나요?' },
        { en: 'He answered the phone immediately.', ko: '그는 전화를 바로 받았다.' },
      ],
    }
  ),
  word('Aunt', '이모, 고모', 2, 'noun',
    ['아버지', '어머니', '형제', '자매', '삼촌', '할아버지', '할머니', '조카', '사촌', '시아버지'],
    tips({
      etymology: '라틴어 amita(아버지의 누나)에서 유래',
      visual: '아이를 안아주는 이모',
      soundAlike: '앤트 = 앤트(ant)처럼 친한 가족',
      context: 'My aunt lives in Seoul.',
      synonymAntonym: 'Syn: auntie',
    }),
    {
      definition: 'the sister of one\'s parent or the wife of one\'s uncle',
      wordDistractors: ['uncle', 'cousin', 'niece'],
      definitionDistractors: [
        'the brother of one\'s parent',
        'a child of one\'s uncle or aunt',
        'a daughter of one\'s sibling',
      ],
      exampleSentences: [
        { en: 'My aunt lives in Seoul.', ko: '내 이모는 서울에 산다.' },
        { en: 'Her aunt baked cookies for the party.', ko: '그녀의 고모가 파티용 쿠키를 구웠다.' },
      ],
    }
  ),
  word('Autumn', '가을', 2, 'noun',
    ['봄', '여름', '겨울', '계절', '날씨', '비', '눈', '폭풍', '날', '달'],
    tips({
      etymology: '라틴어 autumnus에서 유래',
      visual: '노란 낙엽이 떨어지는 길',
      soundAlike: '오텀 = 오텀(가을) 컬렉션',
      context: 'Autumn is my favorite season.',
      synonymAntonym: 'Syn: fall',
    }),
    {
      definition: 'the season between summer and winter when leaves fall',
      wordDistractors: ['spring', 'summer', 'winter'],
      definitionDistractors: [
        'the season when plants bloom',
        'the hottest season of the year',
        'the coldest season with snow',
      ],
      exampleSentences: [
        { en: 'Autumn is my favorite season.', ko: '가을은 내가 가장 좋아하는 계절이다.' },
        { en: 'The leaves turn red in autumn.', ko: '가을에 나뭇잎이 붉게 물든다.' },
      ],
    }
  ),
  word('Bake', '굽다', 2, 'verb',
    ['찌다', '튀기다', '볶다', '삶다', '썰다', '섞다', '붓다', '담그다', '절이다', '말리다'],
    tips({
      etymology: '고대 영어 bacan(굽다)에서 유래',
      visual: '오븐에서 쿠키를 꺼내는 모습',
      soundAlike: '베이크 = 베이커리(빵집)',
      context: 'She likes to bake cakes on weekends.',
      synonymAntonym: 'Syn: roast, Ant: raw',
    }),
    {
      definition: 'to cook food in an oven using dry heat',
      wordDistractors: ['roast', 'cook', 'fry'],
      definitionDistractors: [
        'to prepare food over an open flame',
        'to heat oil and cook food in it',
        'to heat liquid until it bubbles',
      ],
      exampleSentences: [
        { en: 'She likes to bake cakes on weekends.', ko: '그녀는 주말에 케이크를 구우는 것을 좋아한다.' },
        { en: 'I baked bread this morning.', ko: '오늘 아침에 빵을 구웠다.' },
      ],
    }
  ),
  word('Balloon', '풍선', 2, 'noun',
    ['공', '비누', '기구', '종이', '리본', '깃발', '꽃', '초', '등', '불'],
    tips({
      etymology: 'ball(공) + -oon(크게) -> 부풀린 공',
      visual: '아이들이 풍선을 날리는 생일 파티',
      soundAlike: '발룬 = 발룬(풍선) 하나만 주세요',
      context: 'The child released the balloon.',
      synonymAntonym: 'Syn: airship',
    }),
    {
      definition: 'a flexible bag filled with gas or air, used as a toy or decoration',
      wordDistractors: ['bubble', 'ball', 'blimp'],
      definitionDistractors: [
        'a round object used in sports',
        'a thin sphere of liquid filled with air',
        'a large airship for transportation',
      ],
      exampleSentences: [
        { en: 'The child released the balloon.', ko: '아이가 풍선을 날렸다.' },
        { en: 'Red balloons decorated the party room.', ko: '빨간 풍선이 파티 방을 장식했다.' },
      ],
    }
  ),
  word('Battle', '전투', 2, 'noun',
    ['평화', '휴전', '협상', '대화', '친목', '우정', '동맹', '휴식', '안전', '구원'],
    tips({
      etymology: '라틴어 battualia(격투)에서 유래',
      visual: '기병들이 맞서는 전장',
      soundAlike: '배틀 = 배틀(싸움) 그라운드',
      context: 'The battle lasted for three days.',
      synonymAntonym: 'Syn: fight, war, Ant: peace',
    }),
    {
      definition: 'a violent fight between armed forces',
      wordDistractors: ['war', 'fight', 'combat'],
      definitionDistractors: [
        'a prolonged armed conflict between nations',
        'a physical struggle between people',
        'a state of harmony and stillness',
      ],
      exampleSentences: [
        { en: 'The battle lasted for three days.', ko: '전투는 사흘 동안 계속되었다.' },
        { en: 'They won the battle but lost the war.', ko: '그들은 전투는 이겼지만 전쟁은 졌다.' },
      ],
    }
  ),
  word('Belt', '벨트', 2, 'noun',
    ['넥타이', '스카프', '모자', '장갑', '양말', '신발', '지갑', '가방', '시계', '반지'],
    tips({
      etymology: '라틴어 balteus(허리띠)에서 유래',
      visual: '바지에 착용한 가죽 벨트',
      soundAlike: '벨트 = 벨트(Belt)를 조이다',
      context: 'He tightened his belt.',
      synonymAntonym: 'Syn: girdle, waistband',
    }),
    {
      definition: 'a strip of leather or fabric worn around the waist',
      wordDistractors: ['strap', 'band', 'sash'],
      definitionDistractors: [
        'a cloth worn around the neck',
        'a covering for the head',
        'a narrow strip for fastening or holding',
      ],
      exampleSentences: [
        { en: 'He tightened his belt.', ko: '그는 벨트를 조였다.' },
        { en: 'She wears a leather belt with her jeans.', ko: '그녀는 청바지에 가죽 벨트를 한다.' },
      ],
    }
  ),
  word('Birthday', '생일', 2, 'noun',
    ['기념일', '휴일', '주말', '방학', '결혼식', '장례식', '파티', '축제', '연휴', '휴가'],
    tips({
      etymology: 'birth(태어남) + day(날)',
      visual: '케이크 위에 촛불을 꽂은 생일 파티',
      soundAlike: '벌스데이 = 버스데이(birthday) 케이크',
      context: 'Happy birthday to you!',
      synonymAntonym: 'Syn: birth anniversary',
    }),
    {
      definition: 'the anniversary of the day someone was born',
      wordDistractors: ['anniversary', 'celebration', 'holiday'],
      definitionDistractors: [
        'a yearly return of a special date',
        'a social gathering for enjoyment',
        'a day of rest or festivity',
      ],
      exampleSentences: [
        { en: 'Happy birthday to you!', ko: '생일 축하해요!' },
        { en: 'We threw a surprise party for her birthday.', ko: '우리는 그녀의 생일을 위해 서프라이즈 파티를 열었다.' },
      ],
    }
  ),
  word('Blanket', '담요', 2, 'noun',
    ['침대', '베개', '매트리스', '시트', '쿠션', '카펫', '커튼', '수건', '옷', '자켓'],
    tips({
      etymology: '프랑스어 Blanchet(흰색 천)에서 유래',
      visual: '침대 위에 펼쳐진 푹신한 담요',
      soundAlike: '블랭킷 = 블랭킷( blanket)으로 덮다',
      context: 'She wrapped herself in a warm blanket.',
      synonymAntonym: 'Syn: throw, cover',
    }),
    {
      definition: 'a large piece of cloth used to keep warm in bed',
      wordDistractors: ['quilt', 'comforter', 'throw'],
      definitionDistractors: [
        'a padded bed cover with stitching',
        'a thick warm bed covering',
        'a soft pad for sitting or resting',
      ],
      exampleSentences: [
        { en: 'She wrapped herself in a warm blanket.', ko: '그녀는 따뜻한 담요로 몸을 감쌌다.' },
        { en: 'The blanket kept the baby warm.', ko: '담요가 아기를 따뜻하게 해주었다.' },
      ],
    }
  ),
  word('Blind', '눈먼', 2, 'adjective',
    ['눈썹', '보이는', '밝은', '똑똑한', '시력', '안경', '접촉', '감각', '청각', '듣는'],
    tips({
      etymology: '고대 영어 blind에서 유래',
      visual: '흰 지팡이를 든 시각장애인',
      soundAlike: '블라인드 = 블라인드(blind) 데이트',
      context: 'He is blind in one eye.',
      synonymAntonym: 'Syn: sightless, Ant: sighted',
    }),
    {
      definition: 'unable to see; lacking the sense of sight',
      wordDistractors: ['sightless', 'deaf', 'mute'],
      definitionDistractors: [
        'unable to hear sounds',
        'unable to speak',
        'able to see clearly',
      ],
      exampleSentences: [
        { en: 'He is blind in one eye.', ko: '그는 한쪽 눈이 보이지 않는다.' },
        { en: 'Blind people use braille to read.', ko: '시각장애인은 점자로 읽는다.' },
      ],
    }
  ),
  word('Blood', '피', 2, 'noun',
    ['물', '땀', '눈물', '침', '피부', '근육', '뼈', '장기', '심장', '폐'],
    tips({
      etymology: '고대 영어 blōd에서 유래',
      visual: '손가락에서 흐르는 적혈',
      soundAlike: '블러드 = 블러드(blood) 타입',
      context: 'Blood was dripping from the wound.',
      synonymAntonym: 'Syn: gore',
    }),
    {
      definition: 'the red fluid that flows through the body\'s veins and arteries',
      wordDistractors: ['fluid', 'plasma', 'vein'],
      definitionDistractors: [
        'a liquid that flows freely',
        'the liquid part of blood',
        'a vessel that carries blood',
      ],
      exampleSentences: [
        { en: 'Blood was dripping from the wound.', ko: '상처에서 피가 흘렀다.' },
        { en: 'She donates blood every month.', ko: '그녀는 매달 헌혈을 한다.' },
      ],
    }
  ),
  word('Board', '나무판, 이사회', 2, 'noun',
    ['유리', '종이', '천', '플라스틱', '금속', '가죽', '나무', '대리석', '타일', '벽돌'],
    tips({
      etymology: '고대 영어 bord(판자)에서 유래',
      visual: '칠판에 글씨를 쓰는 선생님',
      soundAlike: '보드 = 보드(board) 게임',
      context: 'Write your name on the board.',
      synonymAntonym: 'Syn: plank, panel',
    }),
    {
      definition: 'a flat piece of wood or other material for writing or display',
      wordDistractors: ['plank', 'panel', 'slab'],
      definitionDistractors: [
        'a long flat piece of sawn wood',
        'a flat surface on a wall',
        'a flat stone or tile',
      ],
      exampleSentences: [
        { en: 'Write your name on the board.', ko: '칠판에 네 이름을 써라.' },
        { en: 'The board met to discuss the budget.', ko: '이사회가 예산을 논의하기 위해 모였다.' },
      ],
    }
  ),
  word('Bowl', '그릇', 2, 'noun',
    ['접시', '컵', '쟁반', '냄비', '프라이팬', '수저', '포크', '나이프', '병', '항아리'],
    tips({
      etymology: '라틴어 bulla(둥근 물체)에서 유래',
      visual: '수프가 담긴 둥근 그릇',
      soundAlike: '볼 = 볼(bowl)링 공',
      context: 'She ate cereal from a bowl.',
      synonymAntonym: 'Syn: dish, basin',
    }),
    {
      definition: 'a round container used for holding food or liquid',
      wordDistractors: ['dish', 'basin', 'vessel'],
      definitionDistractors: [
        'a flat plate for serving food',
        'a wide container for holding water',
        'a container for drinking',
      ],
      exampleSentences: [
        { en: 'She ate cereal from a bowl.', ko: '그녀는 그릇에서 시리얼을 먹었다.' },
        { en: 'He served soup in a large bowl.', ko: '그는 큰 그릇에 수프를 담아냈다.' },
      ],
    }
  ),
  word('Bread', '빵', 2, 'noun',
    ['밥', '고기', '과일', '채소', '우유', '치즈', '과자', '케이크', '파이', '쿠키'],
    tips({
      etymology: '고대 영어 brēad(조각)에서 유래',
      visual: '도자기에서 꺼낸 따뜻한 빵',
      soundAlike: '브레드 = 브레드(bread) 앤 버터',
      context: 'I bought fresh bread this morning.',
      synonymAntonym: 'Syn: loaf',
    }),
    {
      definition: 'food made from flour, water, and yeast, baked into a loaf',
      wordDistractors: ['loaf', 'roll', 'bun'],
      definitionDistractors: [
        'a shaped mass of baked bread',
        'a small rounded bread',
        'a sweet baked dessert',
      ],
      exampleSentences: [
        { en: 'I bought fresh bread this morning.', ko: '오늘 아침에 빵을 샀다.' },
        { en: 'Bread and butter is a simple breakfast.', ko: '빵과 버터는 간단한 아침 식사다.' },
      ],
    }
  ),
  word('Bridge', '다리', 2, 'noun',
    ['터널', '도로', '강', '바다', '호수', '산', '빌딩', '탑', '벽', '울타리'],
    tips({
      etymology: '고대 영어 brycg에서 유래',
      visual: '강 위를 가로지르는 석조 다리',
      soundAlike: '브릿지 = 브릿지(bridge) 건너기',
      context: 'We crossed the bridge at sunset.',
      synonymAntonym: 'Syn: span, viaduct',
    }),
    {
      definition: 'a structure built over a river or road to allow crossing',
      wordDistractors: ['viaduct', 'overpass', 'span'],
      definitionDistractors: [
        'an elevated roadway over another road',
        'an underground passage',
        'a structure that spans a gap',
      ],
      exampleSentences: [
        { en: 'We crossed the bridge at sunset.', ko: '우리는 해질녘에 다리를 건넜다.' },
        { en: 'The old bridge was built in 1900.', ko: '그 오래된 다리는 1900년에 세워졌다.' },
      ],
    }
  ),
  word('Busy', '바쁜', 2, 'adjective',
    ['여유로운', '느린', '한가한', '게으른', '졸린', '피곤한', '쉬는', '휴식하는', '빈', '공허한'],
    tips({
      etymology: '고대 영어 bisig(주의를 기울이는)에서 유래',
      visual: '전화와 컴퓨터로 동시에 일하는 사람',
      soundAlike: '비지 = 비지(busy) 시그널',
      context: 'I am too busy to talk now.',
      synonymAntonym: 'Syn: occupied, Ant: free',
    }),
    {
      definition: 'having a lot to do; actively engaged in work',
      wordDistractors: ['occupied', 'active', 'engaged'],
      definitionDistractors: [
        'being used or taken',
        'in motion or doing something',
        'having no obligations',
      ],
      exampleSentences: [
        { en: 'I am too busy to talk now.', ko: '지금은 말하기엔 너무 바쁘다.' },
        { en: 'The street was busy with shoppers.', ko: '거리가 쇼핑객으로 바쁘게 움직였다.' },
      ],
    }
  ),
  word('Button', '단추', 2, 'noun',
    ['지퍼', '리본', '장식', '버클', '고리', '걸쇠', '클립', '핀', '찌르개', '바늘'],
    tips({
      etymology: '프랑스어 bouton(튀어나온 것)에서 유래',
      visual: '셔츠에 달린 둥근 단추',
      soundAlike: '버튼 = 버튼(button) 클릭',
      context: 'She sewed a button on her coat.',
      synonymAntonym: 'Syn: fastener',
    }),
    {
      definition: 'a small disk or knob sewn to clothing for fastening',
      wordDistractors: ['fastener', 'knob', 'switch'],
      definitionDistractors: [
        'a device for joining two parts',
        'a rounded handle or control',
        'a device to turn things on or off',
      ],
      exampleSentences: [
        { en: 'She sewed a button on her coat.', ko: '그녀는 코트에 단추를 꿰맸다.' },
        { en: 'Press the button to start the machine.', ko: '기계를 시작하려면 버튼을 누르세요.' },
      ],
    }
  ),
  word('Cabin', '오두막', 2, 'noun',
    ['아파트', '빌라', '주택', '성', '탑', '창고', '헛간', '창문', '현관', '지붕'],
    tips({
      etymology: '프랑스어 cabane(오두막)에서 유래',
      visual: '숲속에 있는 나무 오두막',
      soundAlike: '캐빈 = 캐빈(cabin) 크루',
      context: 'We stayed in a cabin by the lake.',
      synonymAntonym: 'Syn: hut, cottage',
    }),
    {
      definition: 'a small wooden house, especially in a forest or by a lake',
      wordDistractors: ['hut', 'cottage', 'lodge'],
      definitionDistractors: [
        'a small rough shelter',
        'a small house in the country',
        'a building for temporary stay',
      ],
      exampleSentences: [
        { en: 'We stayed in a cabin by the lake.', ko: '우리는 호수 근처 오두막에서 묵었다.' },
        { en: 'The cabin had no electricity.', ko: '그 오두막에는 전기가 없었다.' },
      ],
    }
  ),
  word('Cage', '새장', 2, 'noun',
    ['우리', '울타리', '담', '벽', '문', '창', '문턱', '계단', '복도', '마당'],
    tips({
      etymology: '라틴어 cavea(빈 공간)에서 유래',
      visual: '새가 있는 금속 새장',
      soundAlike: '케이지 = 케이지(cage) 파이팅',
      context: 'The bird escaped from its cage.',
      synonymAntonym: 'Syn: enclosure, pen',
    }),
    {
      definition: 'a structure of bars or wires for confining animals',
      wordDistractors: ['enclosure', 'pen', 'aviary'],
      definitionDistractors: [
        'an area surrounded by a barrier',
        'a fenced area for keeping animals',
        'a large cage for keeping birds',
      ],
      exampleSentences: [
        { en: 'The bird escaped from its cage.', ko: '새가 새장에서 탈출했다.' },
        { en: 'He cleaned the hamster cage every week.', ko: '그는 매주 햄스터 우리를 청소했다.' },
      ],
    }
  ),
  word('Calm', '차분한', 2, 'adjective',
    ['흥분한', '불안한', '초조한', '화난', '걱정하는', '두려운', '급한', '시끄러운', '폭력적인', '거친'],
    tips({
      etymology: '라틴어 cauma(열기)에서 유래, 뜨거운 날씨에 바람이 멈춤',
      visual: '잔잔한 호수 표면',
      soundAlike: '캄 = 캄(calm) 다운',
      context: 'Stay calm and relax.',
      synonymAntonym: 'Syn: peaceful, Ant: agitated',
    }),
    {
      definition: 'free from disturbance or excitement; peaceful',
      wordDistractors: ['peaceful', 'tranquil', 'serene'],
      definitionDistractors: [
        'free from war or conflict',
        'quiet and undisturbed',
        'feeling or showing worry',
      ],
      exampleSentences: [
        { en: 'Stay calm and relax.', ko: '차분하게 있다가 쉬세요.' },
        { en: 'The sea was calm this morning.', ko: '오늘 아침 바다는 잔잔했다.' },
      ],
    }
  ),
  word('Camp', '캠프', 2, 'noun',
    ['호텔', '모텔', '여관', '숙소', '텐트', '침낭', '등산', '하이킹', '피크닉', '바베큐'],
    tips({
      etymology: '라틴어 campus(들판)에서 유래',
      visual: '텐트와 모닥불이 있는 야영장',
      soundAlike: '캠프 = 캠프(camp)파이어',
      context: 'We went to summer camp.',
      synonymAntonym: 'Syn: campsite',
    }),
    {
      definition: 'a place where people stay in tents or temporary shelters',
      wordDistractors: ['campsite', 'encampment', 'bivouac'],
      definitionDistractors: [
        'a place for overnight outdoor stays',
        'a temporary military settlement',
        'a temporary outdoor shelter',
      ],
      exampleSentences: [
        { en: 'We went to summer camp.', ko: '우리는 여름 캠프에 갔다.' },
        { en: 'They set up camp by the river.', ko: '그들은 강가에 캠프를 쳤다.' },
      ],
    }
  ),
  word('Captain', '선장, 대장', 2, 'noun',
    ['선원', '승객', '경비원', '안내인', '조종사', '기관사', '부하', '병사', '일병', '이등병'],
    tips({
      etymology: '라틴어 capitaneus(우두머리)에서 유래',
      visual: '배의 조타실에 서 있는 선장',
      soundAlike: '캡틴 = 캡틴(captain) 아메리카',
      context: 'The captain gave orders to the crew.',
      synonymAntonym: 'Syn: commander, skipper',
    }),
    {
      definition: 'the person in charge of a ship or team',
      wordDistractors: ['commander', 'skipper', 'leader'],
      definitionDistractors: [
        'one who gives military orders',
        'the person who operates a boat',
        'a person who guides others',
      ],
      exampleSentences: [
        { en: 'The captain gave orders to the crew.', ko: '선장이 선원들에게 지시를 내렸다.' },
        { en: 'She is the captain of the soccer team.', ko: '그녀는 축구팀의 주장이다.' },
      ],
    }
  ),
  word('Castle', '성', 2, 'noun',
    ['궁전', '성당', '탑', '성벽', '해자', '다리', '문', '광장', '정원', '마을'],
    tips({
      etymology: '라틴어 castellum(작은 요새)에서 유래',
      visual: '산 위에 세워진 중세 성',
      soundAlike: '캐슬 = 캐슬(castle) 인 더 에어',
      context: 'We visited an old castle in Scotland.',
      synonymAntonym: 'Syn: fortress, palace',
    }),
    {
      definition: 'a large fortified building, typically from medieval times',
      wordDistractors: ['fortress', 'palace', 'citadel'],
      definitionDistractors: [
        'a fortified military structure',
        'a grand residence for royalty',
        'a tall narrow structure',
      ],
      exampleSentences: [
        { en: 'We visited an old castle in Scotland.', ko: '우리는 스코틀랜드의 오래된 성을 방문했다.' },
        { en: 'The castle stood on a hill.', ko: '그 성은 언덕 위에 서 있었다.' },
      ],
    }
  ),
  word('Catch', '잡다', 2, 'verb',
    ['놓다', '던지다', '놓치다', '풀다', '해제하다', '떠나다', '포기하다', '놓아주다', '실패하다', '잃다'],
    tips({
      etymology: '라틴어 captare(잡으려 하다)에서 유래',
      visual: '공을 두 손으로 잡는 야구 선수',
      soundAlike: '캐치 = 캐치(catch) 22',
      context: 'Can you catch the ball?',
      synonymAntonym: 'Syn: grasp, seize, Ant: release',
    }),
    {
      definition: 'to seize and hold something, especially after it has been thrown',
      wordDistractors: ['grab', 'seize', 'capture'],
      definitionDistractors: [
        'to take hold of suddenly',
        'to take by force',
         'to free from confinement',
      ],
      exampleSentences: [
        { en: 'Can you catch the ball?', ko: '공을 잡을 수 있나요?' },
        { en: 'She caught a cold last week.', ko: '그녀는 지난주에 감기에 걸렸다.' },
      ],
    }
  ),
  word('Cave', '동굴', 2, 'noun',
    ['산', '바위', '절벽', '골짜기', '호수', '강', '바다', '숲', '수풀', '개울'],
    tips({
      etymology: '라틴어 cavus(빈 공간)에서 유래',
      visual: '어두운 동굴 입구',
      soundAlike: '케이브 = 케이브(cave)맨',
      context: 'Bats live in dark caves.',
      synonymAntonym: 'Syn: cavern, grotto',
    }),
    {
      definition: 'a natural hollow space under the ground or in a cliff',
      wordDistractors: ['cavern', 'grotto', 'cavern'],
      definitionDistractors: [
        'a large underground chamber',
        'a small picturesque cave',
        'a steep rock face',
      ],
      exampleSentences: [
        { en: 'Bats live in dark caves.', ko: '박쥐는 어두운 동굴에 산다.' },
        { en: 'They discovered ancient paintings in the cave.', ko: '그들은 동굴에서 고대 그림을 발견했다.' },
      ],
    }
  ),
  word('Chain', '사슬', 2, 'noun',
    ['로프', '밧줄', '와이어', '끈', '줄', '테이프', '고리', '훅', '걸쇠', '빗장'],
    tips({
      etymology: '라틴어 catena(사슬)에서 유래',
      visual: '자전거를 자물쇠로 채우는 사슬',
      soundAlike: '체인 = 체인(chain) 스토어',
      context: 'He wore a gold chain around his neck.',
      synonymAntonym: 'Syn: link, series',
    }),
    {
      definition: 'a series of connected metal rings used for fastening or pulling',
      wordDistractors: ['link', 'series', 'sequence'],
      definitionDistractors: [
        'a single ring in a chain',
        'a number of things in order',
        'a thick twisted cord',
      ],
      exampleSentences: [
        { en: 'He wore a gold chain around his neck.', ko: '그는 목에 금 사슬을 걸고 있었다.' },
        { en: 'The prisoner was bound in chains.', ko: '그 죄수는 사슬에 묶여 있었다.' },
      ],
    }
  ),
  word('Chance', '기회', 2, 'noun',
    ['위험', '실패', '실수', '불운', '재난', '곤경', '장애', '좌절', '실망', '절망'],
    tips({
      etymology: '라틴어 cadere(떨어지다)에서 유래, 주사위가 떨어지는 것',
      visual: '두 손을 모아 기회를 기다리는 모습',
      soundAlike: '챈스 = 챈스(chance)를 잡다',
      context: 'Give me a chance to explain.',
      synonymAntonym: 'Syn: opportunity, Ant: certainty',
    }),
    {
      definition: 'a possibility or opportunity for something to happen',
      wordDistractors: ['opportunity', 'possibility', 'risk'],
      definitionDistractors: [
        'a favorable time or circumstance',
        'something that might happen',
        'the possibility of loss or harm',
      ],
      exampleSentences: [
        { en: 'Give me a chance to explain.', ko: '설명할 기회를 주세요.' },
        { en: 'There is a chance of rain tomorrow.', ko: '내일 비가 올 가능성이 있다.' },
      ],
    }
  ),
  word('Change', '바꾸다', 2, 'verb',
    ['유지하다', '고수하다', '그대로두다', '보존하다', '고정하다', '동결하다', '멈추다', '중단하다', '취소하다', '되돌리다'],
    tips({
      etymology: '라틴어 cambire(교환하다)에서 유래',
      visual: '옷을 갈아입는 모습',
      soundAlike: '체인지 = 체인지(change) 메이커',
      context: 'Things will change for the better.',
      synonymAntonym: 'Syn: alter, modify, Ant: keep',
    }),
    {
      definition: 'to make or become different',
      wordDistractors: ['alter', 'modify', 'transform'],
      definitionDistractors: [
        'to make a partial change',
        'to make small adjustments',
        'to convert into something else',
      ],
      exampleSentences: [
        { en: 'Things will change for the better.', ko: '일이 더 나아질 것이다.' },
        { en: 'She changed her mind about the trip.', ko: '그녀는 여행에 대한 마음을 바꿨다.' },
      ],
    }
  ),
  word('Cheap', '저렴한', 2, 'adjective',
    ['비싼', '고급의', '값비싼', '사치스러운', '귀한', '희귀한', '비쌈', '돈 많이드는', '과한', '과다한'],
    tips({
      etymology: '고대 영어 ceap(거래)에서 유래',
      visual: '할인 스티커가 붙은 상품',
      soundAlike: '침프 = 칩(cheap) 하다',
      context: 'This shirt is very cheap.',
      synonymAntonym: 'Syn: inexpensive, Ant: expensive',
    }),
    {
      definition: 'low in price; costing little money',
      wordDistractors: ['inexpensive', 'affordable', 'budget'],
      definitionDistractors: [
        'not costing much money',
        'within one\'s financial means',
        'costing a lot of money',
      ],
      exampleSentences: [
        { en: 'This shirt is very cheap.', ko: '이 셔츠는 매우 저렴하다.' },
        { en: 'We found cheap flights to Seoul.', ko: '우리는 서울행 저렴한 항공편을 찾았다.' },
      ],
    }
  ),
  word('Cheese', '치즈', 2, 'noun',
    ['버터', '크림', '요거트', '우유', '계란', '밀가루', '설탕', '소금', '후추', '식용유'],
    tips({
      etymology: '라틴어 caseus에서 유래',
      visual: '구멍이 뚫린 스위스 치즈',
      soundAlike: '치즈 = 치즈(cheese) 사진 찍기',
      context: 'I love cheese on pizza.',
      synonymAntonym: 'Syn: fromage',
    }),
    {
      definition: 'a food made from pressed milk curds',
      wordDistractors: ['dairy', 'cheddar', 'mozzarella'],
      definitionDistractors: [
        'products made from milk',
        'a type of hard cheese',
        'a soft stretchy cheese',
      ],
      exampleSentences: [
        { en: 'I love cheese on pizza.', ko: '나는 피자에 치즈를 좋아한다.' },
        { en: 'She ordered a cheese sandwich.', ko: '그녀는 치즈 샌드위치를 주문했다.' },
      ],
    }
  ),
  word('Cherry', '체리', 2, 'noun',
    ['사과', '배', '포도', '딸기', '복숭아', '바나나', '오렌지', '레몬', '수박', '멜론'],
    tips({
      etymology: '고대 그리스어 kerasos에서 유래',
      visual: '빨간 체리가 매달린 가지',
      soundAlike: '체리 = 체리(cherry) 블라썸',
      context: 'She picked fresh cherries from the tree.',
      synonymAntonym: 'Syn: cherry berry',
    }),
    {
      definition: 'a small round red or black fruit with a stone',
      wordDistractors: ['berry', 'grape', 'plum'],
      definitionDistractors: [
        'a small edible fruit',
        'a small purple fruit in clusters',
        'a purple fruit with a pit',
      ],
      exampleSentences: [
        { en: 'She picked fresh cherries from the tree.', ko: '그녀는 나무에서 신선한 체리를 따었다.' },
        { en: 'Cherry pie is my favorite dessert.', ko: '체리 파이는 내가 가장 좋아하는 디저트다.' },
      ],
    }
  ),
  word('Chest', '가슴', 2, 'noun',
    ['배', '등', '어깨', '허리', '목', '팔', '다리', '손', '발', '머리'],
    tips({
      etymology: '고대 영어 cest(상자)에서 유래',
      visual: '가슴을 두드리는 의사',
      soundAlike: '체스트 = 체스트(chest) 훈련',
      context: 'He felt pain in his chest.',
      synonymAntonym: 'Syn: breast, thorax',
    }),
    {
      definition: 'the front part of the body between the neck and abdomen',
      wordDistractors: ['breast', 'thorax', 'torso'],
      definitionDistractors: [
        'the front of the upper body',
        'the part containing the heart',
        'the main part of the body',
      ],
      exampleSentences: [
        { en: 'He felt pain in his chest.', ko: '그는 가슴에 통증을 느꼈다.' },
        { en: 'She kept her jewelry in a wooden chest.', ko: '그녀는 보석을 나무 궤에 보관했다.' },
      ],
    }
  ),
  word('Choose', '고르다', 2, 'verb',
    ['버리다', '차버리다', '거절하다', '포기하다', '미루다', '무시하다', '혼돈하다', '섞다', '섞어버리다', '잃다'],
    tips({
      etymology: '고대 영어 ceosan(고르다)에서 유래',
      visual: '메뉴판을 보며 음식을 고르는 모습',
      soundAlike: '추즈 = 추즈(choose) 유어 웨폰',
      context: 'You can choose any color you like.',
      synonymAntonym: 'Syn: select, pick, Ant: refuse',
    }),
    {
      definition: 'to pick out from a number of possibilities',
      wordDistractors: ['select', 'pick', 'elect'],
      definitionDistractors: [
        'to choose from options',
        'to take or gather',
        'to vote for someone',
      ],
      exampleSentences: [
        { en: 'You can choose any color you like.', ko: '원하는 색을 골라도 된다.' },
        { en: 'She chose to study abroad.', ko: '그녀는 유학을 하기로 했다.' },
      ],
    }
  ),
  word('Church', '교회', 2, 'noun',
    ['사원', '성당', '절', '신전', '기도실', '예배당', '수도원', '신학교', '묘지', '공원'],
    tips({
      etymology: '그리스어 kyriakon(주님의 집)에서 유래',
      visual: '뾰족한 첨탑이 있는 교회',
      soundAlike: '처치 = 처치(church) 부인이시죠',
      context: 'The church bells rang at noon.',
      synonymAntonym: 'Syn: chapel, house of worship',
    }),
    {
      definition: 'a building used for Christian religious services',
      wordDistractors: ['chapel', 'cathedral', 'temple'],
      definitionDistractors: [
        'a small place of worship',
        'a large important church',
        'a building for non-Christian worship',
      ],
      exampleSentences: [
        { en: 'The church bells rang at noon.', ko: '정오에 교회 종이 울렸다.' },
        { en: 'They got married in the old church.', ko: '그들은 그 오래된 교회에서 결혼했다.' },
      ],
    }
  ),
  word('Clock', '시계', 2, 'noun',
    ['알람', '타이머', '스톱워치', '캘린더', '일정표', '달력', '시간', '분', '초', '순간'],
    tips({
      etymology: '라틴어 clocca(종)에서 유래',
      visual: '벽에 걸린 둥근 시계',
      soundAlike: '클락 = 클락(clock) 타워',
      context: 'The clock struck twelve.',
      synonymAntonym: 'Syn: timepiece, watch',
    }),
    {
      definition: 'a device that shows the time, typically with hands or digits',
      wordDistractors: ['watch', 'timepiece', 'timer'],
      definitionDistractors: [
        'a clock worn on the wrist',
        'any device that tells time',
        'a device that measures intervals',
      ],
      exampleSentences: [
        { en: 'The clock struck twelve.', ko: '시계가 12시를 알렸다.' },
        { en: 'I glanced at the clock on the wall.', ko: '나는 벽에 걸린 시계를 흘끗 보았다.' },
      ],
    }
  ),
  word('Close', '닫다', 2, 'verb',
    ['열다', '펼치다', '시작하다', '켜다', '가동하다', '움직이다', '떠나다', '나가다', '열어주다', '해제하다'],
    tips({
      etymology: '라틴어 claudere(닫다)에서 유래',
      visual: '문을 잠그는 모습',
      soundAlike: '클로즈 = 클로즈(close) 할게요',
      context: 'Please close the door.',
      synonymAntonym: 'Syn: shut, Ant: open',
    }),
    {
      definition: 'to move something so as to cover an opening',
      wordDistractors: ['shut', 'seal', 'lock'],
      definitionDistractors: [
        'to close with force',
        'to fasten securely',
        'to move apart or uncover',
      ],
      exampleSentences: [
        { en: 'Please close the door.', ko: '문을 닫아주세요.' },
        { en: 'The store closes at 9 PM.', ko: '그 가게는 오후 9시에 문을 닫는다.' },
      ],
    }
  ),
  word('Cloth', '천', 2, 'noun',
    ['가죽', '종이', '플라스틱', '금속', '나무', '유리', '벽돌', '돌', '모래', '흙'],
    tips({
      etymology: '고대 영어 clāth(덮는 것)에서 유래',
      visual: '바닥을 닦는 천',
      soundAlike: '클로스 = 클로스(cloth) 드라이어',
      context: 'Wipe the table with a cloth.',
      synonymAntonym: 'Syn: fabric, material',
    }),
    {
      definition: 'woven material made from fibers, used for making clothes or cleaning',
      wordDistractors: ['fabric', 'material', 'textile'],
      definitionDistractors: [
        'material used for sewing',
        'substance things are made of',
        'woven material for industry',
      ],
      exampleSentences: [
        { en: 'Wipe the table with a cloth.', ko: '천으로 테이블을 닦으세요.' },
        { en: 'She bought cloth to make a dress.', ko: '그녀는 드레스를 만들기 위해 천을 샀다.' },
      ],
    }
  ),
  word('Coin', '동전', 2, 'noun',
    ['지폐', '수표', '카드', '현금', '금', '은', '보석', '메달', '훈장', '장식품'],
    tips({
      etymology: '라틴어 cuneus(쐐기)에서 유래, 주화를 만드는 도구',
      visual: '숨겨둔 동전 더미',
      soundAlike: '코인 = 코인(coin) 런처',
      context: 'He found a coin on the street.',
      synonymAntonym: 'Syn: money, currency',
    }),
    {
      definition: 'a flat piece of metal used as money',
      wordDistractors: ['currency', 'token', 'medal'],
      definitionDistractors: [
        'a system of money in use',
        'a disk used in place of money',
        'a metal disk given as an award',
      ],
      exampleSentences: [
        { en: 'He found a coin on the street.', ko: '그는 거리에서 동전을 발견했다.' },
        { en: 'She inserted a coin into the vending machine.', ko: '그녀는 자판기에 동전을 넣었다.' },
      ],
    }
  ),
  word('Collect', '수집하다', 2, 'verb',
    ['버리다', '분산하다', '흩다', '나눠주다', '기부하다', '포기하다', '잃다', '던지다', '해체하다', '해산하다'],
    tips({
      etymology: 'col(함께) + lect(모으다) -> 함께 모으다',
      visual: '우표를 모으는 집중한 모습',
      soundAlike: '컬렉트 = 컬렉트(collect) 콜',
      context: 'She likes to collect stamps.',
      synonymAntonym: 'Syn: gather, accumulate, Ant: scatter',
    }),
    {
      definition: 'to bring or gather things together',
      wordDistractors: ['gather', 'accumulate', 'amass'],
      definitionDistractors: [
        'to bring things into one place',
        'to increase in amount over time',
        'to spread in different directions',
      ],
      exampleSentences: [
        { en: 'She likes to collect stamps.', ko: '그녀는 우표를 모으는 것을 좋아한다.' },
        { en: 'We need to collect the fees by Friday.', ko: '금요일까지 수수료를 걷어야 한다.' },
      ],
    }
  ),
  word('Cool', '시원한', 2, 'adjective',
    ['뜨거운', '따뜻한', '더운', '뜨끈한', '작열하는', '불타는', '타는', '뜨거워지는', '데우는', '가열하는'],
    tips({
      etymology: '고대 영어 cōl에서 유래',
      visual: '바람에 나부끼는 머리카락',
      soundAlike: '쿨 = 쿨(cool) 다운',
      context: 'The weather is cool today.',
      synonymAntonym: 'Syn: cold, Ant: warm',
    }),
    {
      definition: 'moderately cold; pleasantly low in temperature',
      wordDistractors: ['cold', 'chilly', 'refreshing'],
      definitionDistractors: [
        'very low in temperature',
        'unpleasantly cold',
        'giving a feeling of freshness',
      ],
      exampleSentences: [
        { en: 'The weather is cool today.', ko: '오늘 날씨가 시원하다.' },
        { en: 'A cool breeze blew from the sea.', ko: '바다에서 시원한 바람이 불어왔다.' },
      ],
    }
  ),
  word('Copy', '복사하다', 2, 'verb',
    ['원본', '만들다', '창작하다', '발명하다', '고안하다', '변형하다', '바꾸다', '지우다', '삭제하다', '없애다'],
    tips({
      etymology: '라틴어 copia(풍부함)에서 유래',
      visual: '복사기에 종이를 넣는 모습',
      soundAlike: '카피 = 카피(copy) 앤 페이스트',
      context: 'Please copy this document.',
      synonymAntonym: 'Syn: duplicate, Ant: original',
    }),
    {
      definition: 'to make a duplicate or reproduction of something',
      wordDistractors: ['duplicate', 'replicate', 'reproduce'],
      definitionDistractors: [
        'to make an exact copy',
        'to create a copy of something',
        'to produce again',
      ],
      exampleSentences: [
        { en: 'Please copy this document.', ko: '이 문서를 복사해주세요.' },
        { en: 'He copied the answers from his friend.', ko: '그는 친구에게서 답을 베꼈다.' },
      ],
    }
  ),
  word('Count', '세다', 2, 'verb',
    ['놓치다', '무시하다', '추측하다', '대략하다', '어림하다', '잊다', '혼란', '흐트러뜨리다', '섞다', '합치다'],
    tips({
      etymology: '라틴어 computare(계산하다)에서 유래',
      visual: '손가락으로 하나둘 셈하는 모습',
      soundAlike: '카운트 = 카운트(count) 다운',
      context: 'Count from one to ten.',
      synonymAntonym: 'Syn: enumerate, tally',
    }),
    {
      definition: 'to determine the total number of something',
      wordDistractors: ['enumerate', 'tally', 'calculate'],
      definitionDistractors: [
        'to name numbers in order',
        'to add up a total',
        'to compute a mathematical result',
      ],
      exampleSentences: [
        { en: 'Count from one to ten.', ko: '하나부터 열까지 세어라.' },
        { en: 'She can count to one hundred.', ko: '그녀는 백까지 셀 수 있다.' },
      ],
    }
  ),
  word('Crash', '충돌', 2, 'noun',
    ['평화', '조화', '통과', '성공', '안전', '보호', '예방', '회피', '우회', '면제'],
    tips({
      etymology: 'Onomatopoeia - 충돌하는 소리',
      visual: '차가 나무에 부딪히는 장면',
      soundAlike: '크래시 = 크래시(crash) 랜딩',
      context: 'There was a crash on the highway.',
      synonymAntonym: 'Syn: collision, impact',
    }),
    {
      definition: 'a violent collision, typically of vehicles',
      wordDistractors: ['collision', 'impact', 'accident'],
      definitionDistractors: [
        'a crash between two objects',
        'a forceful contact',
        'an unexpected harmful event',
      ],
      exampleSentences: [
        { en: 'There was a crash on the highway.', ko: '고속도로에서 충돌 사고가 있었다.' },
        { en: 'We heard a loud crash from the kitchen.', ko: '부엌에서 큰 충돌 소리가 났다.' },
      ],
    }
  ),
  word('Cream', '크림', 2, 'noun',
    ['물', '기름', '초', '연고', '로션', '파우더', '립스틱', '마스카라', '셰이딩', '베이스'],
    tips({
      etymology: '라틴어 chrisma(바름)에서 유래',
      visual: '케이크 위에 올린 휘핑 크림',
      soundAlike: '크림 = 아이스크림(ice cream)',
      context: 'Add some cream to your coffee.',
      synonymAntonym: 'Syn: lotion, moisturizer',
    }),
    {
      definition: 'the thick fatty part of milk that rises to the top',
      wordDistractors: ['lotion', 'ointment', 'moisturizer'],
      definitionDistractors: [
        'a liquid applied to skin',
        'a thick paste for healing',
        'a product that keeps skin soft',
      ],
      exampleSentences: [
        { en: 'Add some cream to your coffee.', ko: '커피에 크림을 좀 넣으세요.' },
        { en: 'She applied cream to her dry hands.', ko: '그녀는 건조한 손에 크림을 바랐다.' },
      ],
    }
  ),
  word('Cross', '건너다', 2, 'verb',
    ['돌아가다', '물러서다', '피하다', '우회하다', '멈추다', '서다', '대기하다', '기다리다', '지켜보다', '관망하다'],
    tips({
      etymology: '라틴어 crux(십자가)에서 유래',
      visual: '횡단보도를 건너는 사람들',
      soundAlike: '크로스 = 크로스(cross) 워드',
      context: 'Cross the street at the green light.',
      synonymAntonym: 'Syn: traverse, Ant: stay',
    }),
    {
      definition: 'to go or extend across from one side to the other',
      wordDistractors: ['traverse', 'pass', 'ford'],
      definitionDistractors: [
        'to travel across something',
        'to go over a river on foot',
        'to remain in one place',
      ],
      exampleSentences: [
        { en: 'Cross the street at the green light.', ko: '초록불에 길을 건너세요.' },
        { en: 'They crossed the bridge at dawn.', ko: '그들은 새벽에 다리를 건넜다.' },
      ],
    }
  ),
  word('Crowd', '군중', 2, 'noun',
    ['개인', '혼자', '소수', '한 명', '빈 공간', '공허', '적막', '고요', '평화', '조용함'],
    tips({
      etymology: '고대 영어 crūdan(밀다)에서 유래',
      visual: '콘서트장에 모인 수많은 사람들',
      soundAlike: '크라우드 = 크라우드(crowd) 펀딩',
      context: 'A crowd gathered in the square.',
      synonymAntonym: 'Syn: multitude, throng',
    }),
    {
      definition: 'a large number of people gathered together',
      wordDistractors: ['multitude', 'throng', 'mob'],
      definitionDistractors: [
        'a very large number',
        'a dense crowd of people',
        'a disorderly group',
      ],
      exampleSentences: [
        { en: 'A crowd gathered in the square.', ko: '군중이 광장에 모였다.' },
        { en: 'She disappeared into the crowd.', ko: '그녀는 군중 속으로 사라졌다.' },
      ],
    }
  ),
  word('Cry', '울다', 2, 'verb',
    ['웃다', '미소짓다', '환호하다', '기뻐하다', '축하하다', '만족하다', '흐뭇해하다', '만족하다', '평온하다', '차분하다'],
    tips({
      etymology: '라틴어 quiritare(부르짖다)에서 유래',
      visual: '눈물을 흘리는 아이',
      soundAlike: '크라이 = 크라이(cry) 베이비',
      context: 'The baby started to cry.',
      synonymAntonym: 'Syn: weep, sob, Ant: laugh',
    }),
    {
      definition: 'to shed tears, typically from sorrow or pain',
      wordDistractors: ['weep', 'sob', 'wail'],
      definitionDistractors: [
        'to cry quietly',
        'to cry with convulsive gasps',
        'to make spontaneous sounds of amusement',
      ],
      exampleSentences: [
        { en: 'The baby started to cry.', ko: '아기가 울기 시작했다.' },
        { en: 'She cried when she heard the news.', ko: '그녀는 그 소식을 듣고 울었다.' },
      ],
    }
  ),
  word('Curly', '곱슬거리는', 2, 'adjective',
    ['곧은', '뻣뻣한', '늘어진', '부드러운', '단정한', '날카로운', '각진', '뭉툭한', '매끄러운', '딱딱한'],
    tips({
      etymology: 'curl(곱슬곱슬) + -y(형용사화)',
      visual: '곱슬곱슬한 머리카락',
      soundAlike: '컬리 = 컬리(curly) 브라켓',
      context: 'She has beautiful curly hair.',
      synonymAntonym: 'Syn: wavy, Ant: straight',
    }),
    {
      definition: 'having curls or a curved shape',
      wordDistractors: ['wavy', 'curled', 'ringlets'],
      definitionDistractors: [
        'having gentle curves',
        'formed into ringlets',
        'small spiral curls of hair',
      ],
      exampleSentences: [
        { en: 'She has beautiful curly hair.', ko: '그녀는 아름다운 곱슬머리를 가지고 있다.' },
        { en: 'The puppy has curly fur.', ko: '그 강아지는 곱슬거리는 털을 가지고 있다.' },
      ],
    }
  ),
  word('Curtain', '커튼', 2, 'noun',
    ['블라인드', '셔터', '창문', '유리', '벽', '천장', '바닥', '카펫', '매트', '스크린'],
    tips({
      etymology: '라틴어 cortina(작은 정원)에서 유래',
      visual: '창문을 가리는 두꺼운 커튼',
      soundAlike: '커튼 = 커튼(curtain) 콜',
      context: 'Draw the curtains at night.',
      synonymAntonym: 'Syn: drape, blind',
    }),
    {
      definition: 'a piece of fabric hung to cover a window or divide a room',
      wordDistractors: ['drape', 'blind', 'shade'],
      definitionDistractors: [
        'a curtain made of heavy fabric',
        'a covering that blocks light',
        'something that provides partial cover',
      ],
      exampleSentences: [
        { en: 'Draw the curtains at night.', ko: '밤에는 커튼을 치세요.' },
        { en: 'The curtain fell at the end of the play.', ko: '연극이 끝날 때 막이 내렸다.' },
      ],
    }
  ),
];
