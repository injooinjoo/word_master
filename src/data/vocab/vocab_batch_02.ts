import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch02: VocabItem[] = [
  word('baby', '아기', 1, 'noun',
    ['어른', '청소년', '노인', '학생', '선생님', '부모님', '동료', '상사', '군인', '의사'],
    tips({
      etymology: '중세 영어 \'babi\'에서 유래되었으며, 아기들이 내는 옹알이 소리를 흉내 낸 말에서 시작되었습니다.',
      visual: '포대기에 싸여 요람 안에서 곤히 잠들어 있는 아주 작은 아이를 상상해 보세요.',
      soundAlike: '배(belly)에서 나온 \'비\'밀스러운 존재라고 연상하면 기억하기 쉽습니다.',
      context: '병원 신생아실이나 집안의 요람(crib)과 같은 장소에서 주로 쓰이는 단어입니다.',
      synonymAntonym: 'infant는 갓 태어난 상태를 강조하며, adult는 완전히 성장한 반대 상태를 뜻합니다.',
    }),
    {
      definition: 'A human offspring at the earliest stage of life, before they can walk or talk.',
      synonyms: ['infant', 'newborn', 'toddler'],
      antonyms: ['adult', 'grown-up', 'elder'],
      wordDistractors: ['Badly', 'Barely', 'Maybe'],
      definitionDistractors: [
        'A small domesticated animal kept as a pet or for companionship',
        'A young plant or seedling in its early stage of growth',
        'A miniature version or model of something larger',
      ],
      exampleSentences: [
        { en: 'The baby is sleeping peacefully in the crib.', ko: '아기가 요람에서 평온하게 자고 있다.' },
        { en: 'She held the baby in her arms and sang a lullaby.', ko: '그녀는 품에 아기를 안고 자장가를 불러주었다.' },
      ],
    }
  ),
  word('bed', '침대', 1, 'noun',
    ['의자', '소파', '탁자', '선반', '책상', '서랍장', '화장대', '옷장', '식탁', '캐비닛'],
    tips({
      etymology: '고대 게르만어에서 유래하여 \'잠을 자기 위해 마련된 장소\'라는 의미를 가집니다.',
      visual: '네모난 프레임 위에 푹신한 매트리스와 베개가 놓여 있는 모습을 상상하세요.',
      soundAlike: '잠자기 전 머리를 대는 \'베개\'와 발음이 비슷한 \'베드\'로 기억하면 쉽습니다.',
      context: '단순히 가구뿐만 아니라 \'go to bed\'처럼 \'잠자리에 들다\'라는 행위 자체를 뜻하기도 합니다.',
      synonymAntonym: '유의어로는 cot, berth 등이 있고, 반대 개념으로는 깨어 있는 상태나 활동을 뜻하는 단어들이 있습니다.',
    }),
    {
      definition: 'A piece of furniture that provides a place to sleep or rest, typically consisting of a mattress on a frame.',
      synonyms: ['mattress', 'couch', 'cot'],
      antonyms: ['floor', 'desk', 'chair'],
      wordDistractors: ['Bead', 'Bread', 'Bend'],
      definitionDistractors: [
        'A flat surface supported by legs, used for working or eating',
        'A soft cushioned seat for multiple people to sit on',
        'A structure with shelves for storing or displaying items',
      ],
      exampleSentences: [
        { en: 'She jumped onto her new bed to see how comfortable it was.', ko: '그녀는 얼마나 편안한지 확인하기 위해 새 침대 위로 뛰어올랐다.' },
        { en: 'After a long day of work, all he wanted was to lie down on his bed.', ko: '긴 하루 일과를 마친 후, 그가 원한 것은 오직 침대에 눕는 것뿐이었다.' },
      ],
    }
  ),
  word('bird', '새', 1, 'noun',
    ['나비', '벌', '파리', '개', '고양이', '물고기', '말', '소', '돼지', '양'],
    tips({
      etymology: '고대 영어 \'bridd\'에서 유래되었으며, 원래는 \'새끼 새\'를 뜻하는 단어였습니다.',
      visual: '푸른 하늘을 배경으로 날개를 활짝 펴고 자유롭게 날아다니는 깃털 달린 동물을 상상해 보세요.',
      soundAlike: '맥주 브랜드 \'버드와이저\'의 앞글자나, 높은 곳에서 내려다보는 \'버드 아이 뷰\'를 떠올리면 쉽습니다.',
      context: '주로 둥지를 틀거나, 알을 낳거나, 아침에 지저귀는 모습과 함께 자주 쓰입니다.',
      synonymAntonym: '가금류를 뜻하는 fowl이나 날개 달린 생물을 뜻하는 winged creature와 비슷하지만, 무생물인 비행기와는 반대됩니다.',
    }),
    {
      definition: 'A creature with feathers and wings, typically capable of flight and laying eggs.',
      synonyms: ['fowl', 'avian', 'songbird'],
      antonyms: ['mammal', 'reptile', 'fish'],
      wordDistractors: ['Beard', 'Birth', 'Bored'],
      definitionDistractors: [
        'A small flying insect with colorful wings that goes through metamorphosis',
        'A nocturnal flying mammal that uses echolocation to navigate',
        'A powered flying vehicle with wings and an engine',
      ],
      exampleSentences: [
        { en: 'The colorful bird built a small nest in the apple tree.', ko: '그 화려한 색깔의 새는 사과나무에 작은 둥지를 틀었습니다.' },
        { en: 'Many species of bird migrate south for the winter.', ko: '많은 종의 새들이 겨울을 나기 위해 남쪽으로 이동합니다.' },
      ],
    }
  ),
  word('blue', '파란색', 1, 'adjective',
    ['빨간색', '초록색', '노란색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 \'blāw\'에서 유래되었으며, 이는 밝은 색이나 빛나는 색을 의미하는 어원에서 시작되었습니다.',
      visual: '구름 한 점 없는 맑은 날의 하늘이나 깊고 깨끗한 바다의 색깔을 떠올려 보세요.',
      soundAlike: '과일 \'블루베리\'의 첫 글자인 \'블루\'와 발음이 같아 연상하기 쉽습니다.',
      context: '영어권에서는 단순히 색깔뿐만 아니라 \'우울한\' 기분을 표현할 때도 자주 쓰이는 형용사입니다.',
      synonymAntonym: '하늘색을 뜻하는 azure와 유사하며, 따뜻한 색상인 red나 orange와는 반대되는 느낌을 줍니다.',
    }),
    {
      definition: 'having the color of the clear sky or the deep sea',
      synonyms: ['azure', 'cobalt', 'navy'],
      antonyms: ['red', 'orange', 'yellow'],
      wordDistractors: ['Blew', 'Blur', 'Clue'],
      definitionDistractors: [
        'having the color of grass, leaves, or emeralds',
        'having the color of ripe lemons or sunflowers',
        'having the color of blood, fire, or rubies',
      ],
      exampleSentences: [
        { en: 'The ocean looked deep blue under the bright summer sun.', ko: '바다는 밝은 여름 햇살 아래 진한 파란색으로 보였다.' },
        { en: 'He wore a blue shirt that matched the color of his eyes.', ko: '그는 자신의 눈 색깔과 어울리는 파란색 셔츠를 입고 있었다.' },
      ],
    }
  ),
  word('box', '상자', 1, 'noun',
    ['가방', '서랍', '병', '통', '바구니', '자루', '캔', '컵', '냄비', '봉투'],
    tips({
      etymology: '그리스어 \'pyxis\'에서 유래되었으며, 원래 회중나무로 만든 작은 함을 의미했습니다.',
      visual: '네 개의 모서리가 직각으로 꺾인 입체적인 사각형 모양의 종이 꾸러미를 떠올려 보세요.',
      soundAlike: '한국어 외래어 \'박스\'와 발음이 같으며, 택배 상자를 떠올리면 기억하기 쉽습니다.',
      context: '물건을 보관하거나 이사할 때, 혹은 선물을 포장할 때 가장 많이 쓰이는 용기입니다.',
      synonymAntonym: '유사한 단어로는 container가 있으며, 뚜껑이 없는 열린 공간과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A square or rectangular container with stiff sides and sometimes a lid, used for holding or carrying things.',
      synonyms: ['container', 'carton', 'case'],
      antonyms: ['sphere', 'surface', 'opening'],
      wordDistractors: ['Fox', 'Boxed', 'Boss'],
      definitionDistractors: [
        'A flexible container made of fabric or leather with handles for carrying items',
        'A cylindrical container typically made of metal for storing liquids or food',
        'A woven container made of strips of material used for holding or carrying items',
      ],
      exampleSentences: [
        { en: 'Please put the old books into the cardboard box.', ko: '헌 책들을 판지 상자에 넣어 주세요.' },
        { en: 'He opened the large box to see what was inside.', ko: '그는 안에 무엇이 들어있는지 보려고 커다란 상자를 열었습니다.' },
      ],
    }
  ),
  word('bus', '버스', 1, 'noun',
    ['기차', '지하철', '택시', '자동차', '비행기', '배', '정류장', '표', '운전사', '승객'],
    tips({
      etymology: '라틴어 \'omnibus\'에서 유래했으며, \'모든 사람을 위한 것\'이라는 의미를 담고 있습니다.',
      visual: '길쭉하고 커다란 차체에 많은 창문이 달려 있고, 사람들이 줄지어 타는 모습을 상상하세요.',
      soundAlike: '한국어 \'버스\'와 발음이 거의 동일하여 외우기 매우 쉽습니다.',
      context: '대중교통을 이용해 출퇴근하거나 등교할 때 가장 흔히 사용하는 교통수단입니다.',
      synonymAntonym: '비슷한 말로는 coach가 있으며, 개인용 이동수단인 private car와 대비됩니다.',
    }),
    {
      definition: 'A large road vehicle designed to carry many people along a fixed route.',
      synonyms: ['coach', 'shuttle', 'transit vehicle'],
      antonyms: ['private car', 'bicycle', 'motorcycle'],
      wordDistractors: ['Busy', 'Bust', 'Buzz'],
      definitionDistractors: [
        'A railway vehicle that runs on tracks and carries passengers or freight',
        'A motor vehicle with four wheels used for transporting small numbers of people',
        'An underground railway system used for urban public transportation',
      ],
      exampleSentences: [
        { en: 'I take the bus to school every morning.', ko: '나는 매일 아침 버스를 타고 학교에 간다.' },
        { en: 'The bus driver waited for the last passenger to board.', ko: '버스 기사는 마지막 승객이 탑승할 때까지 기다렸다.' },
      ],
    }
  ),
  word('cake', '케이크', 1, 'noun',
    ['빵', '쿠키', '파이', '과자', '아이스크림', '사탕', '초콜릿', '푸딩', '도넛', '머핀'],
    tips({
      etymology: '고대 노르웨이어 \'kaka\'에서 유래되었으며, 원래는 작고 납작한 빵을 의미했습니다.',
      visual: '생일 파티 상 위에서 촛불이 켜진 채 화려하게 장식된 둥근 빵을 상상해 보세요.',
      soundAlike: '한국어 외래어 \'케이크\'와 발음이 거의 동일하여 기억하기 매우 쉽습니다.',
      context: '생일, 결혼식, 기념일 등 축하하는 자리에서 주로 디저트로 먹는 음식입니다.',
      synonymAntonym: '유사한 디저트로 pastry, gateau가 있으며, 반대되는 짠 음식으로는 savory snack 등이 있습니다.',
    }),
    {
      definition: 'A sweetened food made by baking a mixture of flour, eggs, sugar, and other ingredients, often decorated with icing.',
      synonyms: ['pastry', 'gateau', 'dessert'],
      antonyms: ['vegetable', 'meat', 'main course'],
      wordDistractors: ['Cane', 'Lake', 'Bake'],
      definitionDistractors: [
        'A small baked food item typically crunchy and often eaten as a snack',
        'A sweet frozen dessert made from cream, milk, and sugar',
        'A baked bread product that is long and narrow in shape',
      ],
      exampleSentences: [
        { en: 'She baked a chocolate cake for her best friend\'s party.', ko: '그녀는 가장 친한 친구의 파티를 위해 초콜릿 케이크를 구웠다.' },
        { en: 'The wedding cake was decorated with beautiful white roses.', ko: '그 결혼식 케이크는 아름다운 흰 장미들로 장식되어 있었다.' },
      ],
    }
  ),
  word('city', '도시', 1, 'noun',
    ['나라', '마을', '시골', '산', '바다', '숲', '들판', '섬', '강', '호수'],
    tips({
      etymology: '라틴어 \'civitas\'에서 유래되었으며, 이는 시민들의 공동체를 의미합니다.',
      visual: '밤하늘 아래 반짝이는 수많은 빌딩 숲과 바쁘게 움직이는 자동차 불빛을 상상해 보세요.',
      soundAlike: '축구팀 \'맨체스터 시티\'를 떠올리면 \'시티\'가 도시라는 것을 쉽게 기억할 수 있습니다.',
      context: '주로 인구가 많고 상업, 행정, 교통의 중심지가 되는 지역을 가리킬 때 사용합니다.',
      synonymAntonym: '유사한 단어로는 metropolis가 있고, 반대되는 개념으로는 rural area나 village가 있습니다.',
    }),
    {
      definition: 'A large and important town where many people live and work close together.',
      synonyms: ['metropolis', 'municipality', 'town'],
      antonyms: ['countryside', 'village', 'hamlet'],
      wordDistractors: ['Pity', 'Ditty', 'Fifty'],
      definitionDistractors: [
        'A small settlement in a rural area with few inhabitants',
        'A nation or state with its own government and borders',
        'An area of land characterized by farms and natural landscapes',
      ],
      exampleSentences: [
        { en: 'The lights of the city look beautiful from the airplane at night.', ko: '밤에 비행기에서 내려다보는 도시의 불빛은 아름답다.' },
        { en: 'Public transportation is very convenient in this city.', ko: '이 도시의 대중교통은 매우 편리하다.' },
      ],
    }
  ),
  word('cold', '추운', 1, 'adjective',
    ['따뜻한', '뜨거운', '시원한', '더운', '미지근한', '뜨뜻한', '열띤', '무더운', '화끈한', '건조한'],
    tips({
      etymology: '고대 영어 ceald에서 유래되었으며, \'차갑다\'는 근본적인 의미를 지니고 있습니다.',
      visual: '입김이 하얗게 나오고 몸을 웅크린 채 덜덜 떨고 있는 사람을 상상해 보세요.',
      soundAlike: '커피숍에서 얼음이 든 \'콜드\'브루 커피를 마실 때의 시원함을 떠올려 보세요.',
      context: '날씨가 영하로 내려가거나 얼음처럼 온도가 매우 낮은 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'chilly는 쌀쌀한 느낌을, hot은 반대로 매우 뜨거운 상태를 나타냅니다.',
    }),
    {
      definition: 'having a low temperature or lacking comfortable warmth',
      synonyms: ['chilly', 'freezing', 'icy'],
      antonyms: ['hot', 'warm', 'burning'],
      wordDistractors: ['Gold', 'Bold', 'Fold'],
      definitionDistractors: [
        'having a high temperature or producing great heat',
        'having a moderate and pleasant temperature',
        'having little or no moisture or humidity',
      ],
      exampleSentences: [
        { en: 'The cold winter air felt biting against my skin.', ko: '차가운 겨울 공기가 피부에 매섭게 느껴졌습니다.' },
        { en: 'Make sure to wear a thick coat because it is very cold outdoors.', ko: '밖이 매우 추우니 반드시 두꺼운 코트를 입으세요.' },
      ],
    }
  ),
  word('cup', '컵', 1, 'noun',
    ['그릇', '접시', '병', '냄비', '수저', '포크', '나이프', '프라이팬', '주전자', '주걱'],
    tips({
      etymology: '라틴어 \'cuppa\'에서 유래되었으며, 이는 통이나 그릇을 의미합니다.',
      visual: '손잡이가 달린 작은 그릇에 김이 모락모락 나는 차가 담긴 모습을 상상해 보세요.',
      soundAlike: '세계적인 축구 대회인 \'월드컵(World Cup)\'에서 우승자에게 주는 큰 잔을 떠올려 보세요.',
      context: '주로 차나 커피 같은 음료를 담아 마실 때 사용하며, 요리할 때 계량 단위로도 쓰입니다.',
      synonymAntonym: '머그잔(mug)이나 유리잔(glass)과 비슷하지만, 접시(saucer)와는 짝을 이룹니다.',
    }),
    {
      definition: 'A small, open container typically used for drinking liquids, often featuring a handle.',
      synonyms: ['mug', 'vessel', 'beaker'],
      antonyms: ['plate', 'platter', 'saucer'],
      wordDistractors: ['Cap', 'Pup', 'Cop'],
      definitionDistractors: [
        'A flat dish used for serving or eating food',
        'A cylindrical container with a narrow neck used for liquids',
        'A deep round container used for mixing or serving food',
      ],
      exampleSentences: [
        { en: 'Would you like a cup of tea?', ko: '차 한 잔 드시겠어요?' },
        { en: 'She filled the cup with fresh water.', ko: '그녀는 컵에 깨끗한 물을 가득 채웠다.' },
      ],
    }
  ),
  word('dance', '춤추다', 1, 'verb',
    ['노래하다', '연주하다', '걷다', '뛰다', '달리다', '놀다', '웃다', '울다', '앉다', '서다'],
    tips({
      etymology: '고대 프랑스어 \'dancier\'에서 유래되었으며, 원래는 \'줄을 지어 움직이다\'라는 의미를 담고 있었습니다.',
      visual: '화려한 조명 아래에서 리듬에 맞춰 몸을 자유롭게 흔드는 무용수의 모습을 상상해 보세요.',
      soundAlike: '한국어에서도 외래어로 \'댄스\'라고 흔히 부르기 때문에 발음이 매우 익숙한 단어입니다.',
      context: '파티, 축제, 무대 위 등 음악이 흐르는 즐거운 상황에서 주로 사용되는 동작 동사입니다.',
      synonymAntonym: '유사한 단어로는 sway(흔들거리다)가 있고, 반대되는 정적인 상태로는 stand(서 있다)가 있습니다.',
    }),
    {
      definition: 'to move your body in a rhythmic way, usually following the beat of music',
      synonyms: ['sway', 'groove', 'boogie'],
      antonyms: ['stand', 'sit', 'freeze'],
      wordDistractors: ['Chance', 'Glance', 'Prance'],
      definitionDistractors: [
        'to produce musical sounds with the voice in a melodic way',
        'to move at a regular speed by placing one foot in front of the other',
        'to jump or spring quickly and suddenly from the ground',
      ],
      exampleSentences: [
        { en: 'The couple decided to dance to their favorite song at the wedding.', ko: '그 커플은 결혼식에서 자신들이 가장 좋아하는 노래에 맞춰 춤을 추기로 했다.' },
        { en: 'Children often dance with joy when they are excited.', ko: '아이들은 신이 나면 종종 기뻐서 춤을 춘다.' },
      ],
    }
  ),
  word('door', '문', 1, 'noun',
    ['창문', '벽', '천장', '바닥', '지붕', '열쇠', '자물쇠', '손잡이', '현관', '복도'],
    tips({
      etymology: '고대 영어 \'duru\'에서 유래되었으며, 통로를 막거나 여는 구조물을 뜻합니다.',
      visual: '직사각형 모양의 판에 동그란 손잡이가 달려 있고, 경첩을 중심으로 열리고 닫히는 모습을 상상하세요.',
      soundAlike: '한국어 \'도어\'와 발음이 같으며, 현관에 달린 \'도어락\'이나 \'도어벨\'을 떠올리면 쉽습니다.',
      context: '방에 들어가거나 나갈 때, 혹은 사생활 보호를 위해 닫아두는 가구의 일종입니다.',
      synonymAntonym: '입구를 뜻하는 entrance와 비슷하며, 나가는 곳인 exit와도 관련이 깊습니다.',
    }),
    {
      definition: 'A movable barrier used to close off an entrance or exit to a room, building, or vehicle.',
      synonyms: ['entrance', 'gateway', 'entryway'],
      antonyms: ['wall', 'barrier', 'blockade'],
      wordDistractors: ['Bore', 'Donor', 'Floor'],
      definitionDistractors: [
        'A transparent opening in a wall that allows light and air to enter',
        'A solid vertical structure that divides or encloses an area',
        'A horizontal passage or hallway connecting rooms in a building',
      ],
      exampleSentences: [
        { en: 'Please make sure to lock the front door before you go to bed.', ko: '자기 전에 현관문을 꼭 잠그도록 하세요.' },
        { en: 'She heard a loud knock on the door and went to see who it was.', ko: '그녀는 문에서 큰 노크 소리를 듣고 누구인지 보러 갔다.' },
      ],
    }
  ),
  word('egg', '달걀', 1, 'noun',
    ['고기', '우유', '치즈', '버터', '빵', '쌀', '과일', '야채', '닭', '수프'],
    tips({
      etymology: '고대 노르웨이어 \'egg\'에서 유래했으며, 아주 오래전부터 인류의 주요 단백질원이었습니다.',
      visual: '타원형의 매끈한 껍질 속에 노란 노른자와 투명한 흰자가 들어있는 모습을 상상해 보세요.',
      soundAlike: '한국어 \'에구\'와 발음이 비슷하죠? 달걀을 떨어뜨렸을 때 \'에구(Egg)!\' 하고 놀라는 장면을 떠올려 보세요.',
      context: '아침 식사 메뉴나 베이킹 재료를 언급할 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '생물학적 용어인 ovum과 유사하며, 부화한 상태인 chick과는 반대되는 개념으로 볼 수 있습니다.',
    }),
    {
      definition: 'An oval or round object laid by a female bird, reptile, fish, or insect, often containing a developing embryo and used as food.',
      synonyms: ['ovum', 'seed', 'spawn'],
      antonyms: ['offspring', 'adult', 'animal'],
      wordDistractors: ['Beg', 'Leg', 'Peg'],
      definitionDistractors: [
        'A white liquid produced by mammals used as food and drink',
        'A solid dairy product made from pressed milk curds',
        'The flesh of an animal used as food',
      ],
      exampleSentences: [
        { en: 'She boiled an egg for three minutes to keep the yolk soft.', ko: '그녀는 노른자를 부드럽게 유지하기 위해 달걀을 3분 동안 삶았다.' },
        { en: 'Be careful not to crack the egg when you put it in the basket.', ko: '바구니에 담을 때 달걀이 깨지지 않도록 조심해라.' },
      ],
    }
  ),
  word('eye', '눈', 1, 'noun',
    ['귀', '코', '입', '얼굴', '머리', '손', '발', '머리카락', '눈썹', '속눈썹'],
    tips({
      etymology: '고대 영어 \'ēage\'에서 유래했으며, 독일어 \'Auge\'와도 어원이 같습니다.',
      visual: '동그란 눈동자와 그 주위를 감싸는 눈꺼풀의 모양을 상상해 보세요.',
      soundAlike: '나를 뜻하는 \'I\'와 발음이 똑같아서 \'내(I) 눈(Eye)\'으로 외우면 쉽습니다.',
      context: '시각을 담당하는 신체 부위뿐만 아니라 바늘귀나 태풍의 중심을 말할 때도 쓰입니다.',
      synonymAntonym: '유의어로는 시력을 뜻하는 sight나 vision이 자주 함께 쓰입니다.',
    }),
    {
      definition: 'The specialized body part that humans and animals use to see and detect light.',
      synonyms: ['eyeball', 'orb', 'optic'],
      antonyms: ['blindness', 'darkness', 'concealment'],
      wordDistractors: ['Dye', 'Rye', 'Pie'],
      definitionDistractors: [
        'The organ of hearing located on each side of the head',
        'The protruding part of the face used for smelling and breathing',
        'The opening in the face used for eating and speaking',
      ],
      exampleSentences: [
        { en: 'She has beautiful brown eyes.', ko: '그녀는 아름다운 갈색 눈을 가지고 있다.' },
        { en: 'He closed his eyes and fell asleep.', ko: '그는 눈을 감고 잠들었다.' },
      ],
    }
  ),
  word('face', '얼굴', 1, 'noun',
    ['머리', '목', '손', '발', '몸', '가슴', '등', '배', '어깨', '허리'],
    tips({
      etymology: '라틴어 \'facies\'에서 유래되었으며, 원래 \'형태\'나 \'겉모습\'을 의미하던 단어가 머리의 앞부분을 뜻하게 되었습니다.',
      visual: '눈, 코, 입이 모두 모여 있는 머리의 앞부분을 거울로 들여다보는 장면을 상상해 보세요.',
      soundAlike: '유명한 SNS인 \'페이스북(Facebook)\'은 사람들의 얼굴을 모아놓은 책이라는 뜻에서 이름이 붙여졌습니다.',
      context: '세수를 하거나 화장을 할 때, 혹은 누군가의 표정을 읽을 때 가장 먼저 언급되는 신체 부위입니다.',
      synonymAntonym: 'countenance는 문학적인 표현으로 얼굴을 뜻하며, back은 신체의 반대편인 등을 의미합니다.',
    }),
    {
      definition: 'the front part of the head that includes the eyes, nose, and mouth',
      synonyms: ['countenance', 'features', 'visage'],
      antonyms: ['back', 'rear', 'occiput'],
      wordDistractors: ['Pace', 'Race', 'Lace'],
      definitionDistractors: [
        'The upper part of the human body containing the brain and sensory organs',
        'The part of the body connecting the head to the shoulders',
        'The rear or posterior part of the body opposite to the front',
      ],
      exampleSentences: [
        { en: 'Wash your face before bed.', ko: '자기 전에 얼굴을 씻으세요.' },
        { en: 'She has a friendly face.', ko: '그녀는 인상이 참 좋네요.' },
      ],
    }
  ),
  word('food', '음식', 1, 'noun',
    ['물', '공기', '불', '흙', '돌', '나무', '종이', '플라스틱', '유리', '금속'],
    tips({
      etymology: '고대 영어 fōda에서 유래했으며, \'기르다\' 또는 \'먹이다\'라는 의미를 담고 있습니다.',
      visual: '접시 위에 김이 모락모락 나는 스테이크나 신선한 샐러드가 놓인 모습을 상상하세요.',
      soundAlike: '대형 마트의 \'푸드코트(Food Court)\'를 떠올리면 음식을 파는 곳임을 쉽게 알 수 있습니다.',
      context: '생존을 위해 섭취하는 영양분뿐만 아니라 즐거움을 위해 먹는 요리 전반을 일컫습니다.',
      synonymAntonym: '유의어로는 영양분을 뜻하는 sustenance가 있고, 반대 개념으로는 굶주림을 뜻하는 starvation이 있습니다.',
    }),
    {
      definition: 'Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.',
      synonyms: ['meal', 'cuisine', 'sustenance'],
      antonyms: ['starvation', 'famine', 'poison'],
      wordDistractors: ['Mood', 'Good', 'Flood'],
      definitionDistractors: [
        'A transparent, tasteless liquid essential for most life forms',
        'The invisible gaseous substance surrounding the earth',
        'Clothing or garments worn on the body',
      ],
      exampleSentences: [
        { en: 'We need food to live and grow healthy.', ko: '우리는 살아가고 건강하게 성장하기 위해 음식이 필요하다.' },
        { en: 'The food at this restaurant is delicious and well-prepared.', ko: '이 레스토랑의 음식은 맛있고 정성스럽게 준비되어 있다.' },
      ],
    }
  ),
  word('girl', '소녀', 1, 'noun',
    ['소년', '남자', '여자', '아이', '어른', '엄마', '아빠', '언니', '오빠', '동생'],
    tips({
      etymology: '고대 영어 \'gyrela\'에서 유래되었으며, 원래는 성별에 상관없이 \'어린아이\'를 뜻하는 말이었습니다.',
      visual: '양갈래 머리를 하고 예쁜 원피스를 입은 어린아이의 모습을 상상해 보세요.',
      soundAlike: '한국어 \'걸\'음걸이와 발음이 비슷합니다. 씩씩하게 걷는 소녀의 모습을 떠올려 보세요.',
      context: '학교나 놀이터에서 뛰어노는 어린 여성 어린이를 지칭할 때 주로 사용합니다.',
      synonymAntonym: '비슷한 단어로는 lass가 있고, 반대되는 성별의 아이는 boy라고 부릅니다.',
    }),
    {
      definition: 'A young female human who has not yet reached adulthood.',
      synonyms: ['lass', 'maiden', 'schoolgirl'],
      antonyms: ['boy', 'man', 'adult'],
      wordDistractors: ['Grill', 'Guilt', 'Gill'],
      definitionDistractors: [
        'A young male human who has not yet reached adulthood',
        'A fully grown female human person',
        'A very young human offspring in the earliest stage of life',
      ],
      exampleSentences: [
        { en: 'The little girl is playing with her favorite doll in the garden.', ko: '그 어린 소녀는 정원에서 자신이 가장 아끼는 인형을 가지고 놀고 있다.' },
        { en: 'She was a very bright and curious girl who loved reading books.', ko: '그녀는 책 읽기를 좋아하는 아주 영리하고 호기심 많은 소녀였다.' },
      ],
    }
  ),
  word('green', '초록색', 1, 'adjective',
    ['빨간색', '파란색', '노란색', '검은색', '흰색', '주황색', '보라색', '갈색', '회색', '분홍색'],
    tips({
      etymology: '고대 영어 \'grēne\'에서 유래했으며, \'자라다(grow)\'라는 단어와 어원이 같아 생명력을 상징합니다.',
      visual: '여름철 울창한 숲의 나뭇잎이나 잘 가꾸어진 축구 경기장의 잔디밭을 떠올려 보세요.',
      soundAlike: '한국어 \'그린\'과 발음이 같으며, 허락을 의미하는 \'그린라이트\'를 생각하면 쉽습니다.',
      context: '환경 보호와 관련된 활동을 \'친환경적\'이라고 할 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: 'verdant는 \'신록의\'라는 뜻의 유의어이며, 반대말로는 \'창백한\'을 뜻하는 pale 등이 있습니다.',
    }),
    {
      definition: 'having the color of growing grass or emeralds, formed by mixing blue and yellow',
      synonyms: ['verdant', 'leafy', 'emerald'],
      antonyms: ['red', 'withered', 'pale'],
      wordDistractors: ['Greed', 'Grin', 'Grain'],
      definitionDistractors: [
        'having the color of blood, fire, or ripe tomatoes',
        'having the color of the clear sky or deep ocean',
        'having the color of sunshine or ripe lemons',
      ],
      exampleSentences: [
        { en: 'The hills become green and vibrant after the heavy rain.', ko: '폭우가 내린 후 언덕들이 초록색으로 생기 넘치게 변합니다.' },
        { en: 'She wore a beautiful green dress to the party.', ko: '그녀는 파티에 아름다운 초록색 드레스를 입고 갔습니다.' },
      ],
    }
  ),
  word('hat', '모자', 1, 'noun',
    ['코트', '재킷', '셔츠', '바지', '신발', '양말', '스카프', '장갑', '안경', '우산'],
    tips({
      etymology: '고대 영어 \'hætt\'에서 유래되었으며, 머리를 덮는 덮개라는 의미를 가지고 있습니다.',
      visual: '머리 위에 얹혀 있는 챙이 달린 물건을 상상해 보세요.',
      soundAlike: '발음이 \'해\'와 비슷하므로 \'해\'를 가리기 위해 쓰는 것이라고 기억하면 쉽습니다.',
      context: '햇빛을 가리거나 패션을 위해 머리에 착용하는 모든 종류의 덮개를 말합니다.',
      synonymAntonym: '비슷한 말로는 cap이 있지만, hat은 보통 챙이 전체적으로 둘러진 형태를 뜻합니다.',
    }),
    {
      definition: 'An item of clothing worn on the head for protection against the weather or as a fashion accessory.',
      synonyms: ['cap', 'headgear', 'bonnet'],
      antonyms: ['shoes', 'socks', 'trousers'],
      wordDistractors: ['Heat', 'Hate', 'Bat'],
      definitionDistractors: [
        'A piece of clothing worn on the foot, typically inside a shoe',
        'A garment worn around the neck for warmth or fashion',
        'Hand coverings worn for warmth or protection',
      ],
      exampleSentences: [
        { en: 'She took off her hat when she entered the building.', ko: '그녀는 건물에 들어설 때 모자를 벗었다.' },
        { en: 'You should wear a wide-brimmed hat to protect your face from the sun.', ko: '햇빛으로부터 얼굴을 보호하려면 챙이 넓은 모자를 써야 한다.' },
      ],
    }
  ),
  word('home', '집', 1, 'noun',
    ['학교', '회사', '병원', '가게', '공원', '길', '산', '바다', '숲', '사무실'],
    tips({
      etymology: '고대 영어 hām에서 유래되었으며, 단순히 건물을 뜻하는 house와 달리 정서적 안식처라는 의미가 강합니다.',
      visual: '지붕 아래 가족들이 모여 앉아 따뜻한 저녁 식사를 하는 아늑한 거실 풍경을 상상해 보세요.',
      soundAlike: '야구에서 타자가 모든 루를 돌고 마지막으로 돌아오는 곳인 \'홈\' 플레이트를 떠올리면 쉽습니다.',
      context: '가장 편안한 장소를 의미하므로 \'at home\'은 \'집에 있는\' 또는 \'편안한\'이라는 뜻으로 쓰입니다.',
      synonymAntonym: 'house는 물리적 건물을, residence는 격식 있는 거주지를 뜻하며, 반대로는 타지나 외국을 뜻하는 abroad가 있습니다.',
    }),
    {
      definition: 'The specific residence or social unit where an individual or family lives and feels a sense of belonging.',
      synonyms: ['residence', 'dwelling', 'abode'],
      antonyms: ['abroad', 'wilderness', 'office'],
      wordDistractors: ['Dome', 'Roam', 'Poem'],
      definitionDistractors: [
        'A building used for educational instruction and learning',
        'A place where people go to work or conduct business',
        'A large outdoor area with grass and trees for recreation',
      ],
      exampleSentences: [
        { en: 'After a long trip, it feels wonderful to finally be home.', ko: '긴 여행 끝에 마침내 집에 오니 기분이 정말 좋다.' },
        { en: 'She wanted to create a warm and welcoming home for her children.', ko: '그녀는 아이들을 위해 따뜻하고 환영받는 집을 만들고 싶어 했다.' },
      ],
    }
  ),
  word('king', '왕', 1, 'noun',
    ['여왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '백성', '노예', '황제'],
    tips({
      etymology: '고대 영어 \'cyning\'에서 유래되었으며, \'가문\'이나 \'혈통\'을 뜻하는 단어와 연결되어 혈통에 의한 통치자를 의미합니다.',
      visual: '머리에는 번쩍이는 황금 왕관을 쓰고 화려한 망토를 두른 채 높은 옥좌에 앉아 홀을 들고 있는 남성을 상상해 보세요.',
      soundAlike: '침대 사이즈 중 가장 큰 \'킹사이즈\'를 떠올려 보세요. 왕처럼 넓고 여유롭게 쓸 수 있는 크기를 말합니다.',
      context: '역사 책이나 판타지 영화에서 나라를 다스리고 군대를 지휘하는 최고 권력자로 자주 등장합니다.',
      synonymAntonym: '유의어로는 monarch, ruler 등이 있으며, 반대되는 개념으로는 백성을 뜻하는 subject나 평민인 commoner가 있습니다.',
    }),
    {
      definition: 'A male sovereign who rules a kingdom, usually inheriting the position by birth and holding it for life.',
      synonyms: ['monarch', 'ruler', 'sovereign'],
      antonyms: ['subject', 'commoner', 'servant'],
      wordDistractors: ['Ring', 'Wing', 'Sing'],
      definitionDistractors: [
        'A female sovereign who rules a kingdom or empire',
        'The son of a king or queen who may inherit the throne',
        'An elected head of state in a republic',
      ],
      exampleSentences: [
        { en: 'The people gathered in the square to catch a glimpse of the new king.', ko: '사람들은 새 왕을 한 번 보기 위해 광장에 모였다.' },
        { en: 'In many fairy tales, the king lives in a magnificent castle with his family.', ko: '많은 동화에서 왕은 가족과 함께 웅장한 성에 산다.' },
      ],
    }
  ),
  word('leg', '다리', 1, 'noun',
    ['팔', '손', '발', '머리', '목', '허리', '등', '가슴', '어깨', '무릎'],
    tips({
      etymology: '고대 노르웨이어 \'leggr\'에서 유래되었으며, 원래는 뼈나 줄기를 의미했습니다.',
      visual: '알파벳 \'L\'의 모양이 서 있는 사람의 발과 다리 꺾임과 비슷하다고 상상해 보세요.',
      soundAlike: '닭다리를 먹을 때 \'닭다리 레그(Leg) 세트\'라고 부르는 것을 떠올려 보세요.',
      context: '사람이나 동물의 신체 부위뿐만 아니라 의자나 탁자의 받침대도 이 단어를 사용합니다.',
      synonymAntonym: '비슷한 말로는 사지를 뜻하는 limb가 있고, 반대 개념으로는 팔(arm)이나 몸통(torso)이 있습니다.',
    }),
    {
      definition: 'One of the long parts of the body that a person or animal uses for standing and moving.',
      synonyms: ['limb', 'member', 'shank'],
      antonyms: ['arm', 'torso', 'head'],
      wordDistractors: ['Log', 'Beg', 'Peg'],
      definitionDistractors: [
        'One of the upper limbs used for grasping and manipulating objects',
        'The end part of the leg below the ankle used for standing',
        'The joint in the middle of the leg that bends when walking',
      ],
      exampleSentences: [
        { en: 'She stretched her legs after sitting for a long time.', ko: '그녀는 오랫동안 앉아 있은 후에 다리를 쭉 폈다.' },
        { en: 'The wooden table has four sturdy legs.', ko: '그 나무 탁자는 네 개의 튼튼한 다리를 가지고 있다.' },
      ],
    }
  ),
  word('man', '남자', 1, 'noun',
    ['여자', '아이', '소년', '소녀', '어른', '노인', '아버지', '아들', '형제', '사과'],
    tips({
      etymology: '고대 영어 \'mann\'에서 유래되었으며, 원래는 성별에 관계없이 \'사람\' 전체를 일컫는 말이었습니다.',
      visual: '정장을 입고 서 있는 성인 남성의 실루엣을 떠올려 보세요.',
      soundAlike: '슈퍼맨(Superman)이나 배트맨(Batman)처럼 영웅 이름 뒤에 붙는 \'맨\'을 생각하면 기억하기 쉽습니다.',
      context: '식당이나 공공장소 화장실 표지판에서 \'Men\'이라는 복수형 표시를 자주 볼 수 있습니다.',
      synonymAntonym: '남성을 뜻하는 male과 유의어이며, 여성인 woman과 반대되는 개념입니다.',
    }),
    {
      definition: 'A fully grown male person as distinguished from a woman or a boy.',
      synonyms: ['male', 'gentleman', 'fellow'],
      antonyms: ['woman', 'lady', 'female'],
      wordDistractors: ['Men', 'Can', 'Pan'],
      definitionDistractors: [
        'A fully grown female person as distinguished from a man or girl',
        'A young male human who has not yet reached adulthood',
        'A human offspring at the earliest stage of life',
      ],
      exampleSentences: [
        { en: 'The man is walking his dog in the park.', ko: '그 남자가 공원에서 개를 산책시키고 있다.' },
        { en: 'He is a man of his word and always keeps his promises.', ko: '그는 약속을 반드시 지키는 신용 있는 남자이다.' },
      ],
    }
  ),
  word('nose', '코', 1, 'noun',
    ['눈', '입', '귀', '얼굴', '머리', '턱', '볼', '이마', '목', '가슴'],
    tips({
      etymology: '고대 영어 \'nosu\'에서 유래되었으며, 독일어 \'Nase\'와도 어원이 같습니다.',
      visual: '얼굴 한가운데 툭 튀어나와 있는 삼각형 모양의 신체 부위를 떠올려 보세요.',
      soundAlike: '발음이 \'노즈\'이므로, 코피를 뜻하는 \'노즈블리드(nosebleed)\'를 연상하면 쉽습니다.',
      context: '냄새를 맡거나 숨을 쉴 때, 혹은 안경을 걸칠 때 주로 언급되는 단어입니다.',
      synonymAntonym: '유의어로는 후각 기관을 뜻하는 전문 용어들이 있지만, 일상에서는 이 단어가 가장 흔히 쓰입니다.',
    }),
    {
      definition: 'The part of the face that sticks out above the mouth, used for breathing and smelling odors.',
      synonyms: ['snout', 'beak', 'proboscis'],
      antonyms: ['ear', 'eye', 'mouth'],
      wordDistractors: ['Rose', 'Hose', 'Noise'],
      definitionDistractors: [
        'The organ of hearing located on the side of the head',
        'The opening in the lower part of the face used for eating and speaking',
        'The organ of sight that detects light and allows vision',
      ],
      exampleSentences: [
        { en: 'She has a small nose that wrinkles when she laughs.', ko: '그녀는 웃을 때 찡긋거리는 작은 코를 가지고 있다.' },
        { en: 'He has a cold and his nose is completely stuffed up.', ko: '그는 감기에 걸려서 코가 완전히 꽉 막혔다.' },
      ],
    }
  ),
  word('old', '오래된', 1, 'adjective',
    ['새로운', '젊은', '어린', '신선한', '최신의', '현대적인', '최근의', '싱싱한', '풋풋한', '초보의'],
    tips({
      etymology: '고대 영어 \'eald\'에서 유래되었으며, 성숙함이나 오랜 시간을 견뎌온 상태를 의미합니다.',
      visual: '박물관에 전시된 먼지 쌓인 골동품이나 나이테가 빽빽하게 그려진 커다란 나무를 상상해 보세요.',
      soundAlike: '한국어 \'올드\'와 발음이 같으며, 흔히 \'올드하다\'라고 할 때의 그 느낌입니다.',
      context: '사람의 나이가 많을 때뿐만 아니라 물건이 낡았거나 관계가 오래되었을 때도 두루 사용됩니다.',
      synonymAntonym: '오래된 것을 뜻하는 ancient와 반대되는 개념인 modern을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'having existed for a long period of time or being far advanced in years',
      synonyms: ['ancient', 'aged', 'antique'],
      antonyms: ['young', 'modern', 'recent'],
      wordDistractors: ['Cold', 'Bold', 'Sold'],
      definitionDistractors: [
        'having existed for only a short time or recently made',
        'being in the early part of life or development',
        'relating to present or recent times as opposed to the past',
      ],
      exampleSentences: [
        { en: 'The library is full of old books that smell like history.', ko: '그 도서관은 역사적인 냄새가 나는 오래된 책들로 가득하다.' },
        { en: 'He still drives his old car even though it breaks down often.', ko: '그는 자주 고장이 나는데도 여전히 자신의 낡은 차를 운전한다.' },
      ],
    }
  ),
  word('again', '다시', 2, 'adverb',
    ['처음', '한번만', '절대', '가끔', '자주', '아직', '이미', '곧', '나중에', '영원히'],
    tips({
      etymology: '고대 영어 \'ongean\'에서 유래되었으며, 원래는 \'반대 방향으로\' 또는 \'맞서서\'라는 의미를 가지고 있었습니다.',
      visual: '동그랗게 말려 돌아오는 화살표나 반복 재생 버튼 아이콘을 떠올려 보세요.',
      soundAlike: '유명한 팝송 제목인 \'어게인 앤 어게인\'을 떠올리면 \'반복해서 다시\'라는 의미를 쉽게 기억할 수 있습니다.',
      context: '상대방의 말을 못 알아들었을 때 \'Pardon?\' 대신 \'Again, please?\'라고 짧게 부탁할 때 자주 쓰입니다.',
      synonymAntonym: '한 번 더를 뜻하는 once more와 비슷하며, 단 한 번뿐임을 뜻하는 only once와는 반대됩니다.',
    }),
    {
      definition: 'on another occasion or one more time than before',
      synonyms: ['anew', 'repeatedly', 'furthermore'],
      antonyms: ['once', 'never', 'finally'],
      wordDistractors: ['Against', 'Gain', 'Rain'],
      definitionDistractors: [
        'at the present time or at this moment',
        'at all times or on all occasions',
        'at no time in the past or future',
      ],
      exampleSentences: [
        { en: 'If you fail the first time, you should try again.', ko: '처음에 실패한다면, 다시 시도해야 합니다.' },
        { en: 'It was great to see my old childhood friends again after all these years.', ko: '수년이 지난 후에 어린 시절 친구들을 다시 만나서 정말 좋았습니다.' },
      ],
    }
  ),
  word('begin', '시작하다', 2, 'verb',
    ['끝내다', '멈추다', '계속하다', '추가하다', '빼다', '바꾸다', '움직이다', '쉬다', '대기하다', '준비하다'],
    tips({
      etymology: '고대 영어 \'beginnan\'에서 유래했으며, \'무언가를 열다\'라는 의미의 어원을 가지고 있습니다.',
      visual: '달리기 시합에서 출발 신호가 떨어지자마자 첫 발을 내딛는 선수의 모습을 상상해 보세요.',
      soundAlike: '비긴(Begin) - \'비긴\' 어게인이라는 영화 제목처럼 다시 \'시작\'한다는 소리로 기억하세요.',
      context: '공식적인 행사나 수업, 또는 어떤 과정의 첫 단계를 언급할 때 주로 사용됩니다.',
      synonymAntonym: 'Start와 비슷하게 쓰이지만 Begin이 약간 더 격식 있는 느낌이며, 반대말은 End나 Finish입니다.',
    }),
    {
      definition: 'to perform the first part of an action or to come into existence',
      synonyms: ['start', 'commence', 'initiate'],
      antonyms: ['finish', 'conclude', 'terminate'],
      wordDistractors: ['Began', 'Being', 'Begun'],
      definitionDistractors: [
        'to bring something to an end or complete an action',
        'to go on with an activity without interruption',
        'to make something ready for use or action',
      ],
      exampleSentences: [
        { en: 'The concert will begin in ten minutes.', ko: '콘서트는 10분 후에 시작될 것입니다.' },
        { en: 'She decided to begin a new career as a writer.', ko: '그녀는 작가로서 새로운 경력을 시작하기로 결심했습니다.' },
      ],
    }
  ),
  word('body', '몸', 2, 'noun',
    ['머리', '팔', '다리', '손', '발', '심장', '뇌', '피', '뼈', '근육'],
    tips({
      etymology: '고대 영어 \'bodig\'에서 유래되었으며, 원래는 사람이나 동물의 물리적인 실체 전체를 의미합니다.',
      visual: '머리부터 발끝까지 연결된 사람의 전체적인 실루엣이나 마네킹의 형상을 떠올려 보세요.',
      soundAlike: '한국어 외래어인 \'바디\'워시나 \'바디\'로션처럼 피부와 몸에 직접 사용하는 제품들을 연상하면 쉽습니다.',
      context: '건강, 운동, 해부학뿐만 아니라 자동차의 차체나 글의 본문을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'physique는 체격을, figure는 몸매를 강조하며, soul이나 mind는 보이지 않는 정신적 측면으로 반대됩니다.',
    }),
    {
      definition: 'The entire physical substance and structure of a living being, including the bones, flesh, and organs.',
      synonyms: ['physique', 'figure', 'torso'],
      antonyms: ['soul', 'mind', 'spirit'],
      wordDistractors: ['Buddy', 'Bloody', 'Badly'],
      definitionDistractors: [
        'The non-physical part of a person that includes thoughts and feelings',
        'The organ inside the head that controls thought and feeling',
        'The central organ that pumps blood through the body',
      ],
      exampleSentences: [
        { en: 'Regular exercise helps to keep your body healthy and strong.', ko: '규칙적인 운동은 당신의 몸을 건강하고 튼튼하게 유지하도록 도와줍니다.' },
        { en: 'The main body of the report contains all the essential data.', ko: '보고서의 본문에는 모든 필수적인 데이터가 포함되어 있습니다.' },
      ],
    }
  ),
  word('bring', '가져오다', 2, 'verb',
    ['가져가다', '보내다', '받다', '주다', '던지다', '놓다', '찾다', '잃다', '사다', '팔다'],
    tips({
      etymology: '고대 영어 bringan에서 유래되었으며, 물건을 옮기거나 동반한다는 의미를 담고 있습니다.',
      visual: '누군가가 양손으로 소중한 선물을 들고 나에게 다가오는 모습을 상상해 보세요.',
      soundAlike: '브링(Bring)은 \'부릉부릉\' 차를 몰고 물건을 배달하러 오는 소리와 비슷합니다.',
      context: '말하는 사람이 있는 장소로 무언가를 이동시킬 때 주로 사용하며, 파티나 회의 준비물에 대해 말할 때 필수적입니다.',
      synonymAntonym: 'Carry와 유사하지만 \'나에게로\'라는 방향성이 강하며, 반대로 멀어지는 Take와 구별해야 합니다.',
    }),
    {
      definition: 'to carry, convey, or lead someone or something to the place where the speaker is',
      synonyms: ['carry', 'fetch', 'deliver'],
      antonyms: ['take', 'remove', 'leave'],
      wordDistractors: ['Ring', 'Spring', 'String'],
      definitionDistractors: [
        'to carry or move something away from the speaker to another place',
        'to transport something from one place to another by holding it',
        'to go and get something or someone and bring them back',
      ],
      exampleSentences: [
        { en: 'Don\'t forget to bring your umbrella in case it rains.', ko: '비가 올 경우를 대비해 우산을 가져오는 것을 잊지 마세요.' },
        { en: 'Could you bring me the report by the end of the day?', ko: '오늘 일과가 끝나기 전까지 그 보고서를 저에게 가져다 주시겠어요?' },
      ],
    }
  ),
  word('child', '아이', 2, 'noun',
    ['어른', '청소년', '노인', '부모', '형제', '친구', '선생님', '학생', '아기', '유아'],
    tips({
      etymology: '고대 영어 \'cild\'에서 유래되었으며, 원래는 \'태아\'나 \'갓 태어난 아기\'를 의미했습니다.',
      visual: '놀이터에서 미끄럼틀을 타며 천진난만하게 웃고 있는 어린아이의 모습을 떠올려 보세요.',
      soundAlike: '한국어 \'차일드\'와 비슷하며, 아이를 돌보는 \'차일드케어(Childcare)\'라는 단어를 연상하면 쉽습니다.',
      context: '가정, 학교, 공원 등에서 성인이 되기 전의 어린 사람을 지칭할 때 보편적으로 사용됩니다.',
      synonymAntonym: 'kid는 구어체 표현이며, 반대말인 adult는 신체적, 법적으로 성숙한 성인을 뜻합니다.',
    }),
    {
      definition: 'A young human being below the age of full physical development or the legal age of majority.',
      synonyms: ['kid', 'juvenile', 'youngster'],
      antonyms: ['adult', 'grown-up', 'elder'],
      wordDistractors: ['Chilled', 'Mild', 'Wild'],
      definitionDistractors: [
        'A fully grown person who has reached maturity',
        'A person in the transitional phase between childhood and adulthood',
        'A very young infant in the earliest stage of life',
      ],
      exampleSentences: [
        { en: 'Every child deserves to grow up in a safe and loving environment.', ko: '모든 아이는 안전하고 사랑 넘치는 환경에서 자랄 자격이 있다.' },
        { en: 'The child was building a sandcastle on the beach with a small shovel.', ko: '그 아이는 작은 삽을 가지고 해변에서 모래성을 쌓고 있었다.' },
      ],
    }
  ),
  word('color', '색', 2, 'noun',
    ['모양', '크기', '무게', '질감', '그림', '소리', '냄새', '온도', '길이', '부피'],
    tips({
      etymology: '라틴어 \'color\'에서 유래되었으며, 원래 \'덮개\'나 \'가리는 것\'이라는 의미에서 사물의 겉모습을 뜻하게 되었습니다.',
      visual: '일곱 빛깔 무지개가 하늘을 수놓고 있는 장면이나 화가의 알록달록한 팔레트를 떠올려 보세요.',
      soundAlike: '한국어에서도 외래어로 \'컬러\'라고 자주 부르며, \'컬러풀하다\'는 말은 색이 다채롭다는 뜻입니다.',
      context: '디자인, 패션, 예술 분야에서 가장 기본이 되는 요소이며 기분이나 감정을 표현할 때도 자주 사용됩니다.',
      synonymAntonym: 'hue는 구체적인 색조를 뜻하며, 무채색인 achromatic과 대비되는 개념으로 기억하면 좋습니다.',
    }),
    {
      definition: 'The property possessed by an object of producing different sensations on the eye as a result of the way it reflects or emits light.',
      synonyms: ['hue', 'shade', 'tint'],
      antonyms: ['colorlessness', 'paleness', 'achromatism'],
      wordDistractors: ['Collar', 'Cooler', 'Caller'],
      definitionDistractors: [
        'The external form, contour, or outline of an object',
        'The physical dimensions or magnitude of something',
        'The feel or appearance of a surface or substance',
      ],
      exampleSentences: [
        { en: 'The artist mixed different colors to create a unique shade of blue.', ko: '화가는 독특한 푸른색을 만들기 위해 여러 가지 색을 섞었습니다.' },
        { en: 'Autumn leaves change color from green to vibrant red and gold.', ko: '가을 잎들은 초록색에서 선명한 빨간색과 금색으로 색이 변합니다.' },
      ],
    }
  ),
  word('country', '나라', 2, 'noun',
    ['도시', '마을', '지역', '대륙', '세계', '수도', '국경', '시골', '해외', '고향'],
    tips({
      etymology: '라틴어 \'contrata\'에서 유래되었으며, \'눈앞에 펼쳐진 땅\'이라는 의미를 담고 있습니다.',
      visual: '세계지도 위에 그려진 각기 다른 색깔의 영토와 그 위에서 펄럭이는 국기를 상상해 보세요.',
      soundAlike: '컨트리(Country) 음악은 시골의 정취를 담은 음악이지만, 단어 자체는 국가라는 큰 단위를 뜻합니다.',
      context: '여권(Passport)을 가지고 국경을 넘을 때 우리가 방문하게 되는 독립된 통치 기구를 가진 단위입니다.',
      synonymAntonym: 'Nation과 유사하지만, Country는 영토와 지리적 측면을 더 강조하는 경향이 있습니다.',
    }),
    {
      definition: 'A distinct territorial body or political entity that possesses its own government and sovereign borders.',
      synonyms: ['nation', 'state', 'land'],
      antonyms: ['city', 'metropolis', 'province'],
      wordDistractors: ['County', 'Counter', 'Century'],
      definitionDistractors: [
        'A large and important town with many buildings and people',
        'A rural area characterized by farms and natural landscapes',
        'A large landmass that contains multiple countries',
      ],
      exampleSentences: [
        { en: 'Every country has its own unique culture and traditions.', ko: '모든 나라는 저마다의 고유한 문화와 전통을 가지고 있다.' },
        { en: 'He traveled to a foreign country to study international relations.', ko: '그는 국제 관계를 공부하기 위해 외국으로 여행을 떠났다.' },
      ],
    }
  ),
  word('dark', '어두운', 2, 'adjective',
    ['밝은', '환한', '빛나는', '투명한', '선명한', '하얀', '눈부신', '화창한', '반짝이는', '명쾌한'],
    tips({
      etymology: '고대 영어 \'deorc\'에서 유래되었으며, 빛이 없는 상태나 사악함을 의미하는 뿌리를 가지고 있습니다.',
      visual: '한밤중에 전등을 모두 끈 방 안에서 아무것도 보이지 않는 상태를 상상해 보세요.',
      soundAlike: '초콜릿의 \'다크\' 초콜릿이나 스마트폰의 \'다크\' 모드를 떠올리면 색이 짙고 어둡다는 느낌을 쉽게 기억할 수 있습니다.',
      context: '주로 빛이 부족한 상태를 말하지만, 색깔이 짙거나 사람의 표정이 우울할 때도 사용합니다.',
      synonymAntonym: '유의어로는 dim, gloomy가 있고, 반의어로는 light, bright가 대표적입니다.',
    }),
    {
      definition: 'With little or no light, or having a color that is close to black rather than white.',
      synonyms: ['dim', 'gloomy', 'shadowy'],
      antonyms: ['bright', 'light', 'luminous'],
      wordDistractors: ['Park', 'Bark', 'Mark'],
      definitionDistractors: [
        'Having or giving off a lot of light; shining or radiant',
        'Having a pale or light color rather than a deep or strong one',
        'Clear and easy to see or understand',
      ],
      exampleSentences: [
        { en: 'The sky grew dark as the storm approached.', ko: '폭풍이 다가오자 하늘이 어두워졌습니다.' },
        { en: 'She prefers wearing dark colors like navy blue and charcoal.', ko: '그녀는 남색이나 숯색처럼 어두운 색깔의 옷을 입는 것을 선호합니다.' },
      ],
    }
  ),
  word('earth', '지구', 2, 'noun',
    ['달', '태양', '화성', '금성', '우주', '은하수', '대기권', '지평선', '천체', '혜성'],
    tips({
      etymology: '고대 영어 \'eorthe\'에서 유래되었으며, 원래는 \'땅\'이나 \'흙\'을 의미하던 단어가 우리가 사는 행성 전체를 뜻하게 되었습니다.',
      visual: '우주 비행사가 찍은 사진 속의 푸른색 바다와 흰 구름이 섞인 아름다운 구슬 모양의 행성을 떠올려 보세요.',
      soundAlike: '발음이 \'어스\'와 유사하므로, 매년 4월 22일 환경 보호를 위해 기념하는 \'지구의 날(Earth Day)\'을 연상하면 쉽습니다.',
      context: '천문학적인 맥락에서는 태양계의 세 번째 행성을 지칭하며, 일상에서는 우리가 딛고 서 있는 토양이나 지면을 뜻하기도 합니다.',
      synonymAntonym: '유의어로는 globe가 자주 쓰이며, 대조적인 개념으로는 하늘을 뜻하는 sky나 우주를 뜻하는 space를 생각할 수 있습니다.',
    }),
    {
      definition: 'The third planet from the sun in our solar system, which is the only known celestial body to support life.',
      synonyms: ['globe', 'world', 'planet'],
      antonyms: ['sky', 'space', 'heaven'],
      wordDistractors: ['Birth', 'Worth', 'North'],
      definitionDistractors: [
        'The natural satellite that orbits around the Earth',
        'The star at the center of our solar system that provides light and heat',
        'The fourth planet from the sun, known as the red planet',
      ],
      exampleSentences: [
        { en: 'The Earth takes about 365 days to complete one orbit around the Sun.', ko: '지구가 태양 주위를 한 바퀴 도는 데는 약 365일이 걸립니다.' },
        { en: 'Environmental groups are working hard to reduce pollution on Earth.', ko: '환경 단체들은 지구의 오염을 줄이기 위해 열심히 노력하고 있습니다.' },
      ],
    }
  ),
  word('fast', '빠른', 2, 'adjective',
    ['느린', '천천히', '정지된', '여유로운', '지연된', '늦은', '완만한', '정체된', '둔한', '나태한'],
    tips({
      etymology: '고대 영어 fæst에서 유래되었으며, 원래는 \'단단히 고정된\'이라는 의미였으나 시간이 흐르며 \'빠르게 움직이는\'이라는 뜻으로 변화했습니다.',
      visual: '속도계의 바늘이 오른쪽 끝으로 휙 꺾이며 연기를 내뿜고 달려나가는 스포츠카를 상상해 보세요.',
      soundAlike: '패스트푸드(Fast food)를 떠올려 보세요. 주문하자마자 음식이 \'빠르게\' 나오는 식당을 의미합니다.',
      context: '속도가 필요한 상황이나 동작이 민첩할 때 사용하며, 시계가 실제 시간보다 앞서갈 때도 사용합니다.',
      synonymAntonym: 'Quick, Rapid, Swift는 비슷한 뜻을 가진 유의어이고, Slow, Sluggish, Leisurely는 반대되는 의미를 가집니다.',
    }),
    {
      definition: 'Moving or capable of moving at high speed or performing a task in a short amount of time.',
      synonyms: ['quick', 'rapid', 'swift'],
      antonyms: ['slow', 'sluggish', 'leisurely'],
      wordDistractors: ['Feast', 'Fist', 'Last'],
      definitionDistractors: [
        'Moving or operating at a reduced speed or taking a long time',
        'Occurring suddenly or without delay',
        'Having great physical power or strength',
      ],
      exampleSentences: [
        { en: 'The cheetah is the fastest land animal in the world.', ko: '치타는 세계에서 가장 빠른 육상 동물입니다.' },
        { en: 'She gave a fast response to the urgent email.', ko: '그녀는 긴급한 이메일에 빠른 답장을 보냈습니다.' },
      ],
    }
  ),
  word('friend', '친구', 2, 'noun',
    ['적', '낯선 사람', '경쟁자', '동료', '이웃', '선생님', '상사', '부모님', '형제', '원수'],
    tips({
      etymology: '고대 영어 \'freond\'에서 유래했으며, 이는 \'사랑하다\'라는 의미의 동사 어근과 연결되어 사랑하는 사람을 뜻합니다.',
      visual: '어깨동무를 하고 활짝 웃으며 함께 길을 걷고 있는 두 사람의 모습을 상상해 보세요.',
      soundAlike: '유명한 시트콤 \'프렌즈(Friends)\'를 떠올리면 친근한 사람들의 모임이라는 것을 쉽게 기억할 수 있습니다.',
      context: '단순히 아는 사이(acquaintance)를 넘어 정서적 유대감을 공유하고 신뢰하는 관계에서 주로 사용됩니다.',
      synonymAntonym: 'Pal, Buddy와 비슷하게 쓰이며, 반대말로는 Enemy(적)나 Foe가 있습니다.',
    }),
    {
      definition: 'A person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.',
      synonyms: ['companion', 'buddy', 'pal'],
      antonyms: ['enemy', 'foe', 'rival'],
      wordDistractors: ['Fiend', 'Trend', 'Blend'],
      definitionDistractors: [
        'A person who is actively opposed or hostile to someone',
        'A person who competes with another for the same objective',
        'A person who works jointly with others in the same organization',
      ],
      exampleSentences: [
        { en: 'We have been best friends since our early childhood.', ko: '우리는 어린 시절부터 가장 친한 친구 사이였습니다.' },
        { en: 'A true friend will stand by you even in difficult times.', ko: '진정한 친구는 어려운 시기에도 당신의 곁을 지켜줄 것입니다.' },
      ],
    }
  ),
  word('game', '게임', 2, 'noun',
    ['운동', '놀이', '경기', '승부', '규칙', '플레이어', '점수', '시합', '대회', '토너먼트'],
    tips({
      etymology: '고대 영어 \'gamen\'에서 유래했으며, 즐거움, 재미, 또는 오락이라는 의미를 담고 있습니다.',
      visual: '친구들이 거실에 모여 보드판을 가운데 두고 주사위를 던지며 웃고 있는 모습을 떠올려 보세요.',
      soundAlike: '한국어 \'게임\'과 발음이 거의 동일하여 외우기 매우 쉽습니다.',
      context: '스포츠 경기나 비디오 게임뿐만 아니라, 술래잡기 같은 단순한 놀이도 이 단어를 사용합니다.',
      synonymAntonym: 'Match나 Sport와 비슷하게 쓰이지만, Work나 Labor와는 반대되는 즐거움의 개념입니다.',
    }),
    {
      definition: 'An entertaining activity or competitive sport played according to a specific set of rules.',
      synonyms: ['match', 'contest', 'pastime'],
      antonyms: ['work', 'labor', 'chore'],
      wordDistractors: ['Fame', 'Name', 'Tame'],
      definitionDistractors: [
        'Activity involving mental or physical effort done to achieve a purpose',
        'An activity that one engages in for amusement without competition',
        'A form of physical activity for exercise or competition',
      ],
      exampleSentences: [
        { en: 'The children are playing a board game in the living room.', ko: '아이들이 거실에서 보드게임을 하고 있다.' },
        { en: 'Our team won the final game of the season.', ko: '우리 팀이 이번 시즌의 마지막 경기에서 승리했다.' },
      ],
    }
  ),
  word('group', '그룹', 2, 'noun',
    ['개인', '단독', '개체', '독창', '일인', '고립', '분리', '독립', '단일', '파편'],
    tips({
      etymology: '이탈리아어 \'gruppo\'에서 유래되었으며, 원래는 조각가들이 여러 인물을 한데 묶어 표현한 예술 작품을 뜻했습니다.',
      visual: '여러 명의 사람들이 동그랗게 원을 그리며 모여 앉아 서로 대화하는 모습을 상상해 보세요.',
      soundAlike: '아이돌 \'그룹\'이나 회사에서 쓰는 \'그룹\'웨어처럼 여러 명이 함께 사용하는 시스템을 떠올리면 쉽습니다.',
      context: '학교 프로젝트나 회사 프로젝트에서 혼자가 아닌 팀 단위로 움직일 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'Team이나 Club은 비슷한 의미를 가지며, Individual은 정반대의 개념인 개인을 뜻합니다.',
    }),
    {
      definition: 'A collection of individuals, animals, or objects that are located close together or share common characteristics.',
      synonyms: ['cluster', 'assembly', 'collection'],
      antonyms: ['individual', 'single', 'entity'],
      wordDistractors: ['Grope', 'Troop', 'Droop'],
      definitionDistractors: [
        'A single person considered separately from a group',
        'An organized body of people with a particular purpose',
        'A set of things belonging to the same category',
      ],
      exampleSentences: [
        { en: 'The teacher divided the class into a small group for the discussion.', ko: '선생님은 토론을 위해 학급을 작은 그룹으로 나누었다.' },
        { en: 'A large group of tourists gathered in front of the palace gates.', ko: '많은 수의 관광객 무리가 궁전 정문 앞에 모였다.' },
      ],
    }
  ),
  word('head', '머리', 2, 'noun',
    ['가슴', '어깨', '다리', '손가락', '발가락', '허리', '무릎', '팔꿈치', '등', '목구멍'],
    tips({
      etymology: '고대 영어 hēafod에서 유래되었으며, 신체의 가장 윗부분이나 우두머리를 뜻합니다.',
      visual: '둥근 원 안에 눈, 코, 입이 그려진 사람의 얼굴과 뇌가 들어있는 윗부분을 상상하세요.',
      soundAlike: '음악을 들을 때 머리에 걸쳐서 사용하는 \'헤드폰(Headphone)\'을 떠올려 보세요.',
      context: '신체 부위뿐만 아니라 조직의 리더나 동전의 앞면을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: '유의어로는 skull(해골)이나 mind(정신)가 있고, 반의어로는 foot(발)이나 tail(꼬리)이 있습니다.',
    }),
    {
      definition: 'The uppermost part of the human body that contains the brain, eyes, ears, nose, and mouth.',
      synonyms: ['skull', 'brain', 'chief'],
      antonyms: ['foot', 'tail', 'bottom'],
      wordDistractors: ['Heard', 'Bead', 'Lead'],
      definitionDistractors: [
        'The organ inside the skull that controls thought, memory, and feeling',
        'The front part of the head containing eyes, nose, and mouth',
        'The part of the body connecting the head to the shoulders',
      ],
      exampleSentences: [
        { en: 'She wore a beautiful hat on her head.', ko: '그녀는 머리에 예쁜 모자를 쓰고 있었다.' },
        { en: 'The athlete suffered a minor injury to his head during the game.', ko: '그 선수는 경기 중 머리에 경미한 부상을 입었다.' },
      ],
    }
  ),
  word('heart', '심장', 2, 'noun',
    ['뇌', '폐', '간', '위', '신장', '혈액', '근육', '신체', '세포', '뼈'],
    tips({
      etymology: '고대 영어 \'heorte\'에서 유래되었으며, 생명의 중심이라는 의미를 담고 있습니다.',
      visual: '왼쪽 가슴 위에 손을 얹고 두근거리는 박동을 느끼는 모습을 상상해 보세요.',
      soundAlike: '카드 게임의 \'하트\' 문양이나 사랑을 고백할 때 쓰는 \'하트\' 모양을 떠올리면 쉽습니다.',
      context: '의학적으로는 혈액을 공급하는 기관을 뜻하지만, 비유적으로는 사람의 \'마음\'이나 \'중심부\'를 뜻하기도 합니다.',
      synonymAntonym: '유의어로는 core, center 등이 있고, 신체 기관으로서의 반대 개념은 없으나 비유적으로는 mind와 대비되기도 합니다.',
    }),
    {
      definition: 'The muscular organ in the chest that pumps blood throughout the body by rhythmic contraction and dilation.',
      synonyms: ['cardiac organ', 'core', 'center'],
      antonyms: ['exterior', 'periphery', 'surface'],
      wordDistractors: ['Heard', 'Start', 'Chart'],
      definitionDistractors: [
        'The organ that controls thought, memory, and bodily functions',
        'The organs in the chest that enable breathing and oxygen exchange',
        'The large organ in the abdomen that processes nutrients from food',
      ],
      exampleSentences: [
        { en: 'The athlete has a very strong and healthy heart.', ko: '그 운동선수는 매우 튼튼하고 건강한 심장을 가지고 있다.' },
        { en: 'Exercise helps to improve your blood circulation and heart rate.', ko: '운동은 혈액 순환과 심박수 개선에 도움을 준다.' },
      ],
    }
  ),
  word('horse', '말', 2, 'noun',
    ['소', '양', '돼지', '닭', '개', '고양이', '토끼', '당나귀', '염소', '사슴'],
    tips({
      etymology: '고대 영어 \'hors\'에서 유래되었으며, 독일어 \'Ross\'와도 어원이 닿아 있는 유서 깊은 단어입니다.',
      visual: '긴 갈기와 꼬리를 휘날리며 들판을 힘차게 질주하는 근육질 동물을 상상해 보세요.',
      soundAlike: '정원용 물 호스(Hose)와 발음이 비슷하지만, 끝에 \'r\' 발음을 살려 \'호오스\'라고 길게 발음합니다.',
      context: '승마(horseback riding)나 경마(horse racing)처럼 주로 스포츠나 이동 수단과 관련된 상황에서 자주 쓰입니다.',
      synonymAntonym: '수컷 성체는 stallion, 암컷 성체는 mare라고 부르며, 아주 작은 종류는 pony라고 합니다.',
    }),
    {
      definition: 'A large four-legged mammal with hooves and a mane, commonly used for riding, racing, or pulling heavy loads.',
      synonyms: ['steed', 'stallion', 'equine'],
      antonyms: ['donkey', 'mule', 'pony'],
      wordDistractors: ['House', 'Hose', 'Hoarse'],
      definitionDistractors: [
        'A large domesticated mammal raised for meat, milk, or leather',
        'A long-eared domesticated animal used for carrying loads',
        'A large wild animal with antlers found in forests',
      ],
      exampleSentences: [
        { en: 'The professional rider guided the horse gracefully over the tall wooden fence.', ko: '전문 기수는 말을 능숙하게 몰아 높은 나무 울타리를 우아하게 넘었습니다.' },
        { en: 'Farmers used to rely on the horse to pull heavy plows across the fields before tractors existed.', ko: '트랙터가 존재하기 전, 농부들은 들판에서 무거운 쟁기를 끌기 위해 말에게 의지하곤 했습니다.' },
      ],
    }
  ),
  word('large', '큰', 2, 'adjective',
    ['작은', '좁은', '짧은', '얇은', '가벼운', '적은', '미세한', '협소한', '부족한', '빈약한'],
    tips({
      etymology: '라틴어 largus에서 유래되었으며, 원래는 \'풍부한\' 또는 \'관대한\'이라는 의미를 담고 있었습니다.',
      visual: '피자 가게에서 가장 큰 \'L\' 사이즈 박스가 테이블을 가득 채우고 있는 모습을 상상해 보세요.',
      soundAlike: '커피숍에서 \'라지(Large) 사이즈\'를 주문할 때의 그 넉넉한 컵 크기를 떠올리면 쉽습니다.',
      context: '단순히 부피가 큰 것뿐만 아니라, 수량이나 규모가 방대할 때도 자주 쓰이는 형용사입니다.',
      synonymAntonym: 'Big은 일상적이고, Huge는 아주 거대한 느낌이며, 반대말인 Small은 규모가 작음을 뜻합니다.',
    }),
    {
      definition: 'of considerable or relatively great size, quantity, or extent',
      synonyms: ['big', 'huge', 'sizeable'],
      antonyms: ['small', 'tiny', 'little'],
      wordDistractors: ['Barge', 'Charge', 'Enlarge'],
      definitionDistractors: [
        'of a size that is less than normal or usual',
        'having a great distance from one side to the other',
        'having great vertical extent or height',
      ],
      exampleSentences: [
        { en: 'The company has a large number of employees working in this building.', ko: '그 회사는 이 건물에서 근무하는 아주 많은 수의 직원을 보유하고 있습니다.' },
        { en: 'They live in a large house with a beautiful garden in the backyard.', ko: '그들은 뒷마당에 아름다운 정원이 딸린 큰 집에 삽니다.' },
      ],
    }
  ),
  word('letter', '편지', 2, 'noun',
    ['우편', '이메일', '알파벳', '글자', '단어', '문장', '책', '신문', '메시지', '연락'],
    tips({
      etymology: '라틴어 littera에서 유래하여 글자나 기록된 문서를 뜻하게 되었습니다.',
      visual: '우표가 붙은 하얀 봉투 안에 정성스럽게 접힌 종이가 들어있는 모습을 상상하세요.',
      soundAlike: '발음이 비슷한 \'Litter(쓰레기)\'와 혼동하지 않도록 주의하세요.',
      context: '주로 손으로 직접 써서 우체통을 통해 전달하는 개인적인 소통 수단을 의미할 때 자주 쓰입니다.',
      synonymAntonym: 'Mail과 비슷하지만, Letter는 구체적인 종이 메시지 한 통을 강조합니다.',
    }),
    {
      definition: 'A written or printed communication addressed to a person or organization and usually transmitted by mail.',
      synonyms: ['note', 'message', 'missive'],
      antonyms: ['silence', 'speech', 'void'],
      wordDistractors: ['Litter', 'Latter', 'Better'],
      definitionDistractors: [
        'A single symbol of the alphabet used in writing',
        'Electronic mail sent and received via computer',
        'A conversation or spoken communication between people',
      ],
      exampleSentences: [
        { en: 'I received a handwritten letter from my grandmother this morning.', ko: '나는 오늘 아침 할머니로부터 손편지를 받았다.' },
        { en: 'She carefully folded the letter and placed it inside the envelope.', ko: '그녀는 편지를 조심스럽게 접어서 봉투 안에 넣었다.' },
      ],
    }
  ),
  word('light', '빛', 2, 'noun',
    ['어둠', '그림자', '불꽃', '연기', '안개', '소리', '냄새', '먼지', '습기', '온도'],
    tips({
      etymology: '고대 영어 lēoht에서 유래되었으며, 인도유럽어족의 \'빛나다\'라는 어근에서 시작되었습니다.',
      visual: '어두운 방 안에서 스위치를 켰을 때 사방으로 퍼져나가는 밝은 기운을 상상해 보세요.',
      soundAlike: '권투 경기에서 가볍게 치는 \'라이트\' 펀치와 발음이 같지만, 여기서는 \'빛\'을 의미합니다.',
      context: '자연적인 햇빛뿐만 아니라 전등이나 촛불 같은 인공적인 조명을 가리킬 때도 널리 쓰입니다.',
      synonymAntonym: 'illumination은 격식 있는 유의어이며, 반대말인 darkness는 빛이 전혀 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'The natural agent that stimulates sight and makes things visible.',
      synonyms: ['illumination', 'radiance', 'brightness'],
      antonyms: ['darkness', 'shadow', 'obscurity'],
      wordDistractors: ['Flight', 'Night', 'Sight'],
      definitionDistractors: [
        'The absence of light; the state of being dark',
        'Sound or vibrations that travel through the air',
        'A burning flame that produces heat and light',
      ],
      exampleSentences: [
        { en: 'The morning sun filled the entire room with golden light.', ko: '아침 햇살이 방 안을 황금빛으로 가득 채웠다.' },
        { en: 'We could see a faint light coming from the distant cabin.', ko: '우리는 멀리 떨어진 오두막에서 나오는 희미한 빛을 볼 수 있었다.' },
      ],
    }
  ),
  word('magic', '마법', 2, 'noun',
    ['현실', '과학', '기술', '논리', '사실', '증거', '이성', '실제', '법칙', '상식'],
    tips({
      etymology: '고대 페르시아의 사제 계급인 \'magus\'에서 유래하여 초자연적인 힘을 다루는 기술을 뜻하게 되었습니다.',
      visual: '해리포터가 지팡이를 휘두를 때 끝에서 반짝이는 불꽃과 신비로운 연기를 상상해 보세요.',
      soundAlike: '보드마카를 흔히 \'매직\'이라고 부르듯, 한 번 쓰면 지워지지 않는 신기한 펜을 떠올려 보세요.',
      context: '판타지 소설이나 영화에서 논리적으로 설명할 수 없는 기적 같은 일이 일어날 때 주로 사용됩니다.',
      synonymAntonym: 'sorcery, wizardry와 비슷하며, 현실을 뜻하는 reality나 과학인 science와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A mysterious power that allows people to do things that seem impossible in the natural world.',
      synonyms: ['sorcery', 'wizardry', 'witchcraft'],
      antonyms: ['reality', 'science', 'fact'],
      wordDistractors: ['Tragic', 'Fabric', 'Logic'],
      definitionDistractors: [
        'The systematic study of the natural world through observation and experiment',
        'Something that actually exists or has occurred',
        'Reasoning conducted according to strict principles of validity',
      ],
      exampleSentences: [
        { en: 'The fairy godmother used her wand to perform magic.', ko: '요정 대모는 지팡이를 사용하여 마법을 부렸습니다.' },
        { en: 'In many fairy tales, magic is used to turn pumpkins into carriages.', ko: '많은 동화에서 마법은 호박을 마차로 바꾸는 데 사용됩니다.' },
      ],
    }
  ),
  word('music', '음악', 2, 'noun',
    ['노래', '악기', '멜로디', '리듬', '소리', '소음', '고요', '춤', '연극', '영화'],
    tips({
      etymology: '그리스 신화에서 예술을 관장하는 여신들인 \'뮤즈(Muse)\'의 기술이라는 뜻에서 유래되었습니다.',
      visual: '오선지 위에 그려진 높은음자리표와 콩나물 모양의 음표들을 떠올려 보세요.',
      soundAlike: '한국어 외래어로도 \'뮤직\'이라고 똑같이 발음하므로 기억하기 매우 쉽습니다.',
      context: '이어폰을 끼고 리듬에 맞춰 고개를 까닥이는 사람의 모습을 연상하면 좋습니다.',
      synonymAntonym: 'Melody나 Tune은 비슷한 의미로 쓰이지만, 반대로 아무 소리도 없는 상태는 Silence라고 합니다.',
    }),
    {
      definition: 'A pattern of sounds made by instruments or voices which are combined in a way that is pleasant or interesting to hear.',
      synonyms: ['melody', 'tune', 'composition'],
      antonyms: ['silence', 'noise', 'quiet'],
      wordDistractors: ['Musty', 'Mystic', 'Rustic'],
      definitionDistractors: [
        'The complete absence of sound',
        'Loud, unpleasant, or disturbing sounds',
        'Spoken or written words used for communication',
      ],
      exampleSentences: [
        { en: 'I listen to music every day to relax after work.', ko: '나는 퇴근 후 휴식을 취하기 위해 매일 음악을 듣는다.' },
        { en: 'She studied classical music at a famous university.', ko: '그녀는 유명한 대학교에서 클래식 음악을 공부했다.' },
      ],
    }
  ),
  word('north', '북쪽', 2, 'noun',
    ['남쪽', '동쪽', '서쪽', '위쪽', '아래쪽', '방향', '좌표', '나침반', '지도', '위치'],
    tips({
      etymology: '고대 영어 \'norþ\'에서 유래했으며, 이는 \'왼쪽\'을 의미하는 인도유럽어 어근에서 왔을 가능성이 큽니다. 해가 뜨는 동쪽을 바라볼 때 왼쪽이 북쪽이기 때문입니다.',
      visual: '나침반 바늘이 항상 가리키는 알파벳 \'N\'과 추운 북극곰이 살고 있는 얼음 지대를 상상해 보세요.',
      soundAlike: '유명한 아웃도어 브랜드 \'노스페이스(The North Face)\'를 떠올리면 \'북쪽\'이라는 의미를 쉽게 기억할 수 있습니다.',
      context: '지도상에서 항상 위쪽을 가리키는 기본 방향이며, 북극점(North Pole)이 있는 방향입니다.',
      synonymAntonym: '반대 방향인 South(남쪽)와 세트로 외우면 효율적이며, 형용사형인 northern과 함께 기억하세요.',
    }),
    {
      definition: 'The cardinal point of the compass that is at 0 degrees and is the opposite of south.',
      synonyms: ['northern part', 'arctic', 'boreal'],
      antonyms: ['south', 'southern part', 'antarctic'],
      wordDistractors: ['Worth', 'Forth', 'Fourth'],
      definitionDistractors: [
        'The direction toward the point of the horizon where the sun sets',
        'The direction toward the point where the sun rises',
        'The direction opposite to north on a compass',
      ],
      exampleSentences: [
        { en: 'The birds fly south in the winter and return to the north in the spring.', ko: '새들은 겨울에 남쪽으로 날아갔다가 봄에 다시 북쪽으로 돌아온다.' },
        { en: 'The compass needle always points toward the magnetic north.', ko: '나침반 바늘은 항상 자북 방향을 가리킨다.' },
      ],
    }
  ),
  word('picture', '그림', 2, 'noun',
    ['사진', '도화지', '화가', '프레임', '갤러리', '미술', '디자인', '그림자', '영상', '영화'],
    tips({
      etymology: '라틴어 \'pictus(그리다)\'에서 유래하여 눈에 보이는 형상을 묘사한 것을 뜻합니다.',
      visual: '하얀 캔버스 위에 물감으로 정성스럽게 그려진 풍경화를 상상해 보세요.',
      soundAlike: '카메라 셔터를 누를 때 \'픽\' 소리가 나며 찍히는 \'픽처\'라고 기억하세요.',
      context: '미술 시간이나 박물관에서 벽에 걸린 예술 작품을 가리킬 때 주로 사용합니다.',
      synonymAntonym: '유사어로는 image, painting 등이 있고, 반대 개념으로는 실물인 reality가 있습니다.',
    }),
    {
      definition: 'A visual representation of a person, object, or scene, typically created on a flat surface using tools like pencils or brushes.',
      synonyms: ['painting', 'illustration', 'sketch'],
      antonyms: ['reality', 'original', 'subject'],
      wordDistractors: ['Pitcher', 'Feature', 'Capture'],
      definitionDistractors: [
        'An image captured by a camera using light',
        'A piece of written text, especially in a book or newspaper',
        'A three-dimensional representation or model of something',
      ],
      exampleSentences: [
        { en: 'The artist spent several months finishing this detailed picture of the mountains.', ko: '그 화가는 이 세밀한 산 그림을 완성하는 데 몇 달을 보냈다.' },
        { en: 'Please draw a simple picture to show what your dream house looks like.', ko: '당신의 꿈의 집이 어떻게 생겼는지 보여주기 위해 간단한 그림을 그려 주세요.' },
      ],
    }
  ),
  word('ready', '준비된', 2, 'adjective',
    ['준비 안 된', '바쁜', '여유로운', '당황한', '불안한', '확신한', '의심하는', '완성된', '미완성', '진행중'],
    tips({
      etymology: '고대 영어 rǣde에서 유래되었으며, 원래 \'말을 탈 준비가 된\' 또는 \'정돈된\'이라는 의미를 담고 있습니다.',
      visual: '달리기 경주 시작 전, 운동화 끈을 꽉 조여 매고 출발선에 몸을 숙이고 있는 선수의 모습을 떠올려 보세요.',
      soundAlike: '영화 촬영장에서 감독이 \'레디, 액션!\'이라고 외치며 촬영 준비가 끝났음을 알리는 소리를 기억하세요.',
      context: '음식이 다 차려졌을 때나 여행을 떠나기 직전 가방을 다 쌌을 때 등 무언가를 즉시 시작할 수 있는 상태에 사용합니다.',
      synonymAntonym: 'prepared와 유의어이며, 반대말은 앞에 un-을 붙인 unprepared나 아직 미성숙한 상태인 immature 등이 있습니다.',
    }),
    {
      definition: 'fully prepared for action or use and available to be used immediately',
      synonyms: ['prepared', 'set', 'equipped'],
      antonyms: ['unprepared', 'unready', 'unwilling'],
      wordDistractors: ['Steady', 'Already', 'Greedy'],
      definitionDistractors: [
        'not prepared or made ready for something',
        'feeling nervous or anxious about something',
        'having already happened or been done',
      ],
      exampleSentences: [
        { en: 'The team is fully prepared and ready for the final match tomorrow.', ko: '그 팀은 내일 있을 결승전을 위해 모든 준비를 마쳤습니다.' },
        { en: 'Please let me know when the report is ready for review.', ko: '보고서 검토 준비가 완료되면 저에게 알려주세요.' },
      ],
    }
  ),
  word('south', '남쪽', 2, 'noun',
    ['북쪽', '동쪽', '서쪽', '위쪽', '아래쪽', '방향', '적도', '남반구', '지도', '위치'],
    tips({
      etymology: '고대 영어 sūþ에서 유래되었으며, \'태양의 방향\'이라는 의미를 담고 있습니다.',
      visual: '나침반 바늘이 가리키는 아래쪽 방향인 \'S\' 표시를 상상해 보세요.',
      soundAlike: '사우스(South)는 \'사우나\'처럼 따뜻한 남쪽 나라를 연상하면 기억하기 쉽습니다.',
      context: '철새들이 추운 겨울을 피해 따뜻한 아래쪽 지방으로 이동할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '반대 방향인 North(북쪽)와 함께 방위를 나타내는 필수 단어입니다.',
    }),
    {
      definition: 'The direction that is to your right when you are facing the rising sun, or the part of the world towards the bottom of a map.',
      synonyms: ['southern part', 'meridian', 'southerly direction'],
      antonyms: ['North', 'Arctic', 'northern region'],
      wordDistractors: ['Mouth', 'Youth', 'Couch'],
      definitionDistractors: [
        'The direction toward the top of a map and opposite to south',
        'The direction toward the point where the sun rises',
        'The direction toward the point where the sun sets',
      ],
      exampleSentences: [
        { en: 'Many birds fly to the warmer regions in the south during winter.', ko: '많은 새들이 겨울 동안 남쪽의 더 따뜻한 지역으로 날아갑니다.' },
        { en: 'The city is located about fifty miles to the south of the capital.', ko: '그 도시는 수도에서 남쪽으로 약 50마일 떨어진 곳에 위치해 있습니다.' },
      ],
    }
  ),
];
