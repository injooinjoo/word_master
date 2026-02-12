import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch03: VocabItem[] = [
  word('Air', '공기', 1, 'noun',
    ['물', '불', '흙', '바람', '구름', '안개', '연기', '증기', '먼지', '이슬'],
    tips({
      etymology: '그리스어 \'aer\'에서 유래하여 지구를 둘러싼 대기를 의미하게 되었습니다.',
      visual: '눈에 보이지 않지만 풍선을 빵빵하게 채우고 있는 투명한 기체를 떠올려 보세요.',
      soundAlike: '여름철 필수 가전인 \'에어컨\'의 첫 글자가 바로 이 단어입니다.',
      context: '생존을 위해 매 순간 코와 입으로 들이마시고 내뱉는 필수적인 요소입니다.',
      synonymAntonym: 'atmosphere와 비슷하며, 아무것도 없는 상태인 vacuum과는 반대됩니다.',
    }),
    {
      definition: 'the invisible mixture of gases that surrounds the earth and that we breathe',
      synonyms: ['atmosphere', 'breeze', 'oxygen'],
      antonyms: ['vacuum', 'solid', 'liquid'],
      exampleSentences: [
        { en: 'The air is fresh in the mountains.', ko: '산속의 공기는 신선합니다.' },
        { en: 'Open the window to let in some air.', ko: '공기를 좀 통하게 창문을 여세요.' },
      ],
    }
  ),
  word('Arm', '팔', 1, 'noun',
    ['손', '발', '다리', '머리', '허리', '어깨', '손가락', '손목', '팔꿈치', '주먹'],
    tips({
      etymology: '고대 영어 earm에서 유래되었으며, 신체에서 뻗어 나온 가지와 같은 부분을 뜻합니다.',
      visual: '어깨에서 손목까지 길게 뻗어 근육이 움직이는 모습을 상상해 보세요.',
      soundAlike: '암벽(Arm-벽) 등반을 할 때 가장 힘을 많이 쓰는 신체 부위라고 기억하세요.',
      context: '물건을 들어 올리거나 누군가를 따뜻하게 안아줄 때 주로 언급되는 단어입니다.',
      synonymAntonym: '사지 중 하나를 뜻하는 limb와 비슷하며, 하체 부위인 leg와는 대조됩니다.',
    }),
    {
      definition: 'The two long upper limbs of the human body extending from the shoulder to the wrist.',
      synonyms: ['limb', 'appendage', 'member'],
      antonyms: ['leg', 'foot', 'torso'],
      exampleSentences: [
        { en: 'He broke his upper limb during the football match.', ko: '그는 축구 경기 중에 팔이 부러졌습니다.' },
        { en: 'She carried the heavy box under one of her limbs.', ko: '그녀는 한쪽 팔에 무거운 상자를 끼고 운반했습니다.' },
      ],
    }
  ),
  word('Back', '등', 1, 'noun',
    ['앞', '배', '가슴', '어깨', '허리', '옆', '뒤', '얼굴', '머리', '목'],
    tips({
      etymology: '고대 영어 bæc에서 유래하여 신체의 뒤쪽이나 사물의 뒷면을 의미합니다.',
      visual: '무거운 가방을 짊어지거나 의자에 기댈 때 닿는 몸의 뒷부분을 상상해 보세요.',
      soundAlike: '가방을 뜻하는 \'백팩(Backpack)\'은 바로 이 부위에 메는 가방이라는 뜻입니다.',
      context: '병원에서 통증을 설명하거나 운동할 때 척추가 있는 부위를 가리킬 때 자주 쓰입니다.',
      synonymAntonym: 'rear는 뒤쪽을, front는 앞쪽을 뜻하며 서로 반대되는 개념입니다.',
    }),
    {
      definition: 'the posterior part of the human body extending from the neck to the pelvis',
      synonyms: ['rear', 'spine', 'reverse'],
      antonyms: ['front', 'chest', 'stomach'],
      exampleSentences: [
        { en: 'My back hurts after sitting all day.', ko: '하루 종일 앉아 있었더니 등이 아픕니다.' },
        { en: 'She lay on her back in the grass.', ko: '그녀는 풀밭에 등을 대고 누웠습니다.' },
      ],
    }
  ),
  word('Ball', '공', 1, 'noun',
    ['막대', '원', '상자', '컵', '바퀴', '동그라미', '타원', '피라미드', '큐브', '토러스'],
    tips({
      etymology: '고대 노르웨이어 bǫllr에서 유래하여 둥근 물체를 뜻합니다.',
      visual: '축구장이나 농구장에서 굴러다니는 둥근 물체를 떠올리세요.',
      soundAlike: '볼링(Bowling) 칠 때 굴리는 그것입니다.',
      context: '스포츠 경기에서 던지거나 차거나 치는 데 사용됩니다.',
      synonymAntonym: '둥근 구체를 뜻하는 sphere와 각진 상자를 뜻하는 cube를 비교해 보세요.',
    }),
    {
      definition: 'a round object used in games and sports',
      synonyms: ['sphere', 'globe', 'orb'],
      antonyms: ['cube', 'square', 'block'],
      exampleSentences: [
        { en: 'The child kicked the ball.', ko: '아이가 공을 찼습니다.' },
        { en: 'The ball rolled under the table.', ko: '공이 탁자 밑으로 굴러갔습니다.' },
      ],
    }
  ),
  word('Bear', '곰', 1, 'noun',
    ['호랑이', '사자', '늑대', '여우', '코끼리', '원숭이', '캥거루', '판다', '코알라', '물범'],
    tips({
      etymology: '고대 영어 bera에서 유래되었으며 본래 \'갈색의 것\'이라는 의미를 담고 있습니다.',
      visual: '복슬복슬한 털을 가진 거대한 몸집과 날카로운 발톱으로 연어를 잡는 모습을 떠올려 보세요.',
      soundAlike: '맥주를 뜻하는 Beer와 발음이 비슷하지만, 이 단어는 \'베어\'라고 읽으며 동물을 뜻합니다.',
      context: '북극곰이나 불곰처럼 주로 추운 지역이나 깊은 산속에 서식하는 야생 동물입니다.',
      synonymAntonym: '야생의 맹수를 뜻하는 beast와 유의어 관계이며, 작고 약한 동물인 mouse와 대조됩니다.',
    }),
    {
      definition: 'A large, heavy mammal with thick fur, a short tail, and a strong body that typically lives in forests or cold regions.',
      synonyms: ['bruin', 'grizzly', 'beast'],
      antonyms: ['mouse', 'rabbit', 'prey'],
      exampleSentences: [
        { en: 'A large brown animal was seen wandering in the forest.', ko: '숲에서 커다란 갈색 동물이 배회하는 것이 목격되었습니다.' },
        { en: 'The predator caught a salmon in the rushing river.', ko: '그 포식자는 세차게 흐르는 강에서 연어를 잡았습니다.' },
      ],
    }
  ),
  word('Boat', '보트', 1, 'noun',
    ['기차', '자동차', '비행기', '오토바이', '자전거', '버스', '택시', '트럭', '헬리콥터', '지하철'],
    tips({
      etymology: '고대 영어 bāt에서 유래하여 물 위를 다니는 탈것을 의미하게 되었습니다.',
      visual: '잔잔한 호수 위에 노를 젓는 작은 나무 배의 실루엣을 상상해 보세요.',
      soundAlike: '한국어 발음 \'보트\'와 거의 동일하여 기억하기 매우 쉽습니다.',
      context: '낚시를 하거나 섬으로 이동할 때 주로 사용하는 수단입니다.',
      synonymAntonym: 'vessel은 배를 뜻하는 격식 있는 표현이며, car나 plane은 육지나 공중의 이동 수단입니다.',
    }),
    {
      definition: 'A small vessel used for traveling through water, often powered by oars, sails, or an engine.',
      synonyms: ['vessel', 'craft', 'ship'],
      antonyms: ['car', 'plane', 'train'],
      exampleSentences: [
        { en: 'We took a boat to the island.', ko: '우리는 배를 타고 섬으로 갔습니다.' },
        { en: 'They rowed the boat across the lake.', ko: '그들은 배를 저어 호수를 건넜습니다.' },
      ],
    }
  ),
  word('Bone', '뼈', 1, 'noun',
    ['살', '피', '근육', '피부', '머리카락', '손톱', '치아', '장기', '관절', '허파'],
    tips({
      etymology: '고대 영어 bān에서 유래하여 신체의 가장 단단한 부위를 가리키게 되었습니다.',
      visual: '병원에서 찍는 엑스레이 사진 속 하얗고 단단한 골격의 형태를 떠올려 보세요.',
      soundAlike: '본(Bone) 차이나 도자기는 실제로 소의 뼛가루를 섞어 견고하게 만든 그릇입니다.',
      context: '신체를 지탱하고 내부 장기를 보호하며 칼슘을 저장하는 중요한 조직입니다.',
      synonymAntonym: '몸의 틀을 이루는 skeleton과 유사하며, 부드러운 겉면인 flesh와는 대조됩니다.',
    }),
    {
      definition: 'Any of the hard, rigid pieces of whitish connective tissue forming the skeleton in humans and other vertebrates.',
      synonyms: ['skeleton', 'frame', 'structure'],
      antonyms: ['flesh', 'muscle', 'skin'],
      exampleSentences: [
        { en: 'The dog buried the bone in the garden.', ko: '개는 정원에 뼈다귀를 묻었습니다.' },
        { en: 'He broke a bone in his hand.', ko: '그는 손등 뼈가 부러졌습니다.' },
      ],
    }
  ),
  word('Boy', '소년', 1, 'noun',
    ['소녀', '남자', '여자', '어린이', '아이', '청년', '아저씨', '할아버지', '형', '동생'],
    tips({
      etymology: '중세 영어 boie에서 유래하여 하인이나 어린 남성을 뜻하던 단어입니다.',
      visual: '야구 모자를 쓰고 축구공을 차고 있는 어린 남학생의 모습을 상상해 보세요.',
      soundAlike: '한국어 \'보이\'와 발음이 같으며, 보이그룹(Boy Group)은 남성 아이돌 그룹을 의미합니다.',
      context: '학교 운동장에서 뛰어노는 남학생이나 집안의 어린 아들을 지칭할 때 주로 사용합니다.',
      synonymAntonym: 'lad나 youth는 젊은 남성을 뜻하며, 반대로 girl은 어린 여성을 뜻합니다.',
    }),
    {
      definition: 'A male child or a young male person who has not yet become an adult.',
      synonyms: ['lad', 'youth', 'male'],
      antonyms: ['girl', 'woman', 'female'],
      exampleSentences: [
        { en: 'The boy is playing in the park.', ko: '그 소년은 공원에서 놀고 있습니다.' },
        { en: 'The little boy waved at his mother.', ko: '어린 소년이 엄마에게 손을 흔들었습니다.' },
      ],
    }
  ),
  word('Car', '자동차', 1, 'noun',
    ['버스', '트럭', '택시', '기차', '비행기', '배', '오토바이', '자전거', '경찰차', '구급차'],
    tips({
      etymology: '라틴어 \'carrus\'에서 유래되었으며 원래는 바퀴 달린 수레를 의미했습니다.',
      visual: '네 개의 바퀴와 핸들이 있고 도로 위를 쌩쌩 달리는 승용차를 떠올려 보세요.',
      soundAlike: '카센터(Car center)는 자동차를 수리하는 곳이라는 점을 기억하세요.',
      context: '출퇴근이나 여행을 갈 때 가장 흔히 이용하는 개인용 이동 수단입니다.',
      synonymAntonym: '유의어로는 automobile, vehicle이 있고 반대되는 개념은 아니지만 대조군으로 pedestrian(보행자)이 있습니다.',
    }),
    {
      definition: 'A road vehicle with four wheels and an engine that can carry a small number of passengers',
      synonyms: ['automobile', 'vehicle', 'sedan'],
      antonyms: ['pedestrian', 'bicycle', 'motorcycle'],
      exampleSentences: [
        { en: 'She drives a red vehicle to work every morning.', ko: '그녀는 매일 아침 빨간 차를 몰고 출근합니다.' },
        { en: 'They parked their new automobile in the garage.', ko: '그들은 새 차를 차고에 주차했습니다.' },
      ],
    }
  ),
  word('Chair', '의자', 1, 'noun',
    ['탁자', '소파', '침대', '선반', '책상', '벤치', '스툴', '등받이', '암체어', '책걸상'],
    tips({
      etymology: '고대 프랑스어 \'chaiere\'에서 유래했으며, 과거에는 권위 있는 사람이 앉는 특별한 자리를 의미했습니다.',
      visual: '네 개의 다리와 등받이가 있는 가구 위에 한 사람이 편안하게 앉아 있는 실루엣을 떠올려 보세요.',
      soundAlike: '바퀴가 달린 의자인 \'휠체어(Wheelchair)\'를 통해 단어의 뒷부분을 쉽게 기억할 수 있습니다.',
      context: '식사를 하거나 공부를 할 때 몸을 지탱하기 위해 엉덩이를 붙이고 앉는 가장 기본적인 가구입니다.',
      synonymAntonym: '앉을 수 있는 공간을 뜻하는 seat과 비슷하며, 바닥을 뜻하는 floor와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A separate seat for one person, typically having four legs and a support for the back.',
      synonyms: ['seat', 'armchair', 'throne'],
      antonyms: ['floor', 'ground', 'standing'],
      exampleSentences: [
        { en: 'Please take a seat on the wooden furniture provided.', ko: '준비된 나무 의자에 앉아 주세요.' },
        { en: 'He pulled up a seat to join the meeting at the table.', ko: '그는 테이블 회의에 참석하기 위해 의자를 끌어당겼습니다.' },
      ],
    }
  ),
  word('Cloud', '구름', 1, 'noun',
    ['하늘', '비', '눈', '바람', '태양', '달', '별', '안개', '연기', '증기'],
    tips({
      etymology: '고대 영어에서 \'바위나 흙더미\'를 뜻하던 단어가 하늘에 떠 있는 수증기 덩어리를 닮아 현재의 의미가 되었습니다.',
      visual: '파란 도화지 위에 하얀 솜사탕을 떼어 놓은 듯한 몽글몽글한 모양을 상상하세요.',
      soundAlike: 'IT 용어인 \'클라우드 컴퓨팅\'을 떠올리면 무형의 저장 공간이 하늘에 떠 있는 것과 비슷합니다.',
      context: '일기 예보에서 흐린 날씨를 묘사하거나 비가 오기 직전의 상황을 설명할 때 필수적인 단어입니다.',
      synonymAntonym: '수증기를 뜻하는 vapor와 비슷하지만, 맑고 쾌청한 상태인 clear sky와는 대조적입니다.',
    }),
    {
      definition: 'A visible accumulation of minute water droplets or ice crystals suspended in the Earth\'s atmosphere.',
      synonyms: ['vapor', 'nebula', 'mist'],
      antonyms: ['sunshine', 'clear sky', 'blue sky'],
      exampleSentences: [
        { en: 'Dark masses are gathering in the sky before the storm.', ko: '폭풍이 오기 전 하늘에 먹구름이 모여들고 있습니다.' },
        { en: 'The sun disappeared behind a large white mass.', ko: '태양이 커다란 흰 구름 뒤로 사라졌습니다.' },
      ],
    }
  ),
  word('Cook', '요리하다', 1, 'verb',
    ['먹다', '마시다', '썰다', '볶다', '끓이다', '굽다', '튀기다', '섞다', '짜다', '담그다'],
    tips({
      etymology: '라틴어 \'coquere\'에서 유래하여 열을 가해 음식을 준비한다는 의미를 담고 있습니다.',
      visual: '주방에서 모자를 쓴 요리사가 프라이팬을 흔들며 불꽃을 일으키는 장면을 상상하세요.',
      soundAlike: '과자인 \'쿠키(Cookie)\'를 굽는(Cook) 모습을 연상하면 기억하기 쉽습니다.',
      context: '식당이나 집 주방에서 식재료를 가열하여 먹기 좋은 상태로 만드는 모든 행위에 쓰입니다.',
      synonymAntonym: '음식을 준비하는 prepare와 비슷하며, 가공하지 않은 상태인 raw와 대조됩니다.',
    }),
    {
      definition: 'to prepare food by heating it in particular ways, such as baking or boiling',
      synonyms: ['prepare', 'bake', 'roast'],
      antonyms: ['freeze', 'raw', 'consume'],
      exampleSentences: [
        { en: 'My father likes to prepare delicious meals for us on weekends.', ko: '우리 아버지는 주말마다 우리를 위해 맛있는 음식을 요리하는 것을 좋아하십니다.' },
        { en: 'He learned how to make pasta when he lived in Italy.', ko: '그는 이탈리아에 살 때 파스타 요리하는 법을 배웠습니다.' },
      ],
    }
  ),
  word('Cow', '소', 1, 'noun',
    ['말', '양', '염소', '돼지', '닭', '오리', '거위', '토끼', '당나귀', '낙타'],
    tips({
      etymology: '고대 인도유럽어에서 유래한 아주 오래된 단어로 가축화된 소를 뜻합니다.',
      visual: '들판에서 \'음매\' 소리를 내며 풀을 뜯고 우유를 제공해주는 큰 동물을 상상하세요.',
      soundAlike: '카우보이(Cowboy)는 소를 모는 사람을 말합니다.',
      context: '농장에서 키우며 우리에게 우유와 고기를 제공해주는 고마운 동물입니다.',
      synonymAntonym: '가축을 뜻하는 cattle과 비슷하며, 야생 포식자인 tiger와는 반대되는 성향을 가집니다.',
    }),
    {
      definition: 'a large female farm animal kept for its milk or its meat',
      synonyms: ['cattle', 'ox', 'bovine'],
      antonyms: ['bull', 'predator', 'tiger'],
      exampleSentences: [
        { en: 'The large farm animal provides fresh milk every morning.', ko: '그 커다란 농장 동물은 매일 아침 신선한 우유를 제공합니다.' },
        { en: 'A herd of these animals was grazing peacefully in the field.', ko: '이 동물 떼가 들판에서 평화롭게 풀을 뜯고 있었습니다.' },
      ],
    }
  ),
  word('Day', '날', 1, 'noun',
    ['밤', '아침', '저녁', '새벽', '시간', '주말', '한낮', '어둠', '계절', '순간'],
    tips({
      etymology: '고대 영어 daeg에서 유래했으며, 본래 해가 떠 있는 밝은 시간대를 의미했습니다.',
      visual: '달력의 숫자 한 칸이나 창밖으로 환하게 해가 비치는 풍경을 상상해 보세요.',
      soundAlike: '생일을 뜻하는 \'벌스데이\'나 요일을 말하는 \'먼데이\'의 끝부분 발음과 같습니다.',
      context: '하루 24시간 전체를 가리키기도 하고, 밤과 대비되는 낮 시간을 강조할 때도 씁니다.',
      synonymAntonym: '낮을 뜻하는 daytime과 비슷하며, 어두운 밤을 뜻하는 night와 반대됩니다.',
    }),
    {
      definition: 'The period of twenty-four hours as a unit of time, or the light hours between sunrise and sunset.',
      synonyms: ['daytime', 'date', 'period'],
      antonyms: ['night', 'darkness', 'evening'],
      exampleSentences: [
        { en: 'It was a sunny and warm time so we went to the park.', ko: '화창하고 따뜻한 날이어서 우리는 공원에 갔습니다.' },
        { en: 'I hope you have a wonderful time during your birthday.', ko: '당신의 생일날 멋진 시간을 보내길 바랍니다.' },
      ],
    }
  ),
  word('Desk', '책상', 1, 'noun',
    ['의자', '침대', '탁자', '선반', '서랍', '책장', '램프', '컴퓨터', '키보드', '모니터'],
    tips({
      etymology: '라틴어 \'discus(원반, 접시)\'에서 유래하여 평평한 판 모양의 가구를 뜻하게 되었습니다.',
      visual: '학교나 사무실에서 책을 펴거나 컴퓨터를 올려두고 일하는 가구의 모습을 상상하세요.',
      soundAlike: '호텔이나 병원의 안내소인 \'인포메이션 데스크\'를 떠올리면 기억하기 쉽습니다.',
      context: '주로 공부를 하거나 사무 업무를 볼 때 사용하는 개인용 작업대를 의미합니다.',
      synonymAntonym: 'table보다는 작업용이라는 의미가 강하며, 앉는 가구인 chair와 짝을 이룹니다.',
    }),
    {
      definition: 'A piece of furniture with a flat surface used for writing, reading, or using a computer, typically containing drawers.',
      synonyms: ['table', 'workstation', 'bureau'],
      antonyms: ['chair', 'floor', 'bed'],
      exampleSentences: [
        { en: 'She keeps her computer and notebooks on her wooden workstation.', ko: '그녀는 나무 책상 위에 컴퓨터와 공책을 둡니다.' },
        { en: 'The student sat at his furniture to finish his homework.', ko: '그 학생은 숙제를 끝내기 위해 책상에 앉았습니다.' },
      ],
    }
  ),
  word('Dry', '마른', 1, 'adjective',
    ['젖은', '습한', '축축한', '물기 있는', '눅눅한', '이슬 맺힌', '땀에 젖은', '침수된', '수분이 많은', '흐르는'],
    tips({
      etymology: '고대 영어 \'dryge\'에서 유래하여 수분이나 습기가 완전히 제거된 상태를 의미합니다.',
      visual: '뜨거운 태양 아래 바짝 말라 바스라지는 나뭇잎이나 갈라진 사막의 땅을 떠올려 보세요.',
      soundAlike: '세탁소의 \'드라이클리닝\'은 물을 사용하지 않고 기름으로 옷을 세탁하는 방식입니다.',
      context: '날씨가 건조하거나, 빨래가 다 되었을 때, 혹은 와인의 단맛이 없을 때도 이 단어를 사용합니다.',
      synonymAntonym: 'arid는 매우 메마른 상태를, wet은 물에 젖은 상태를 나타내는 반대 개념입니다.',
    }),
    {
      definition: 'free from moisture or liquid; not wet or moist',
      synonyms: ['arid', 'parched', 'waterless'],
      antonyms: ['wet', 'moist', 'humid'],
      exampleSentences: [
        { en: 'The desert land was very parched because it hadn\'t rained for months.', ko: '몇 달 동안 비가 오지 않아 사막의 땅은 매우 말라 있었습니다.' },
        { en: 'Make sure your hands are not wet before touching the switch.', ko: '스위치를 만지기 전에 손에 물기가 없는지 확인하세요.' },
      ],
    }
  ),
  word('Ear', '귀', 1, 'noun',
    ['눈', '코', '입', '머리', '목', '얼굴', '턱', '볼', '이마', '입술'],
    tips({
      etymology: '고대 영어 ēare에서 유래하여 소리를 듣는 신체 기관을 의미합니다.',
      visual: '머리 양옆에 대칭으로 붙어 소리를 모으는 깔때기 모양을 상상해 보세요.',
      soundAlike: '음악을 들을 때 꽂는 \'이어폰(Earphone)\'의 \'이어\'가 바로 이 단어입니다.',
      context: '비밀스러운 이야기를 할 때 상대방의 이 부위에 입을 가까이 대고 속삭입니다.',
      synonymAntonym: '청각을 뜻하는 hearing과 관련이 깊으며, 시각이나 후각 기관과는 대조됩니다.',
    }),
    {
      definition: 'the organ of hearing and balance in humans and other vertebrates, located on the side of the head',
      synonyms: ['auricle', 'pinna', 'hearing'],
      antonyms: ['eye', 'nose', 'mouth'],
      exampleSentences: [
        { en: 'She whispered a secret in his left side.', ko: '그녀는 그의 왼쪽 귀에 비밀을 속삭였다.' },
        { en: 'The rabbit has very long and soft parts for hearing.', ko: '그 토끼는 매우 길고 부드러운 귀를 가지고 있다.' },
      ],
    }
  ),
  word('End', '끝', 1, 'noun',
    ['시작', '중간', '중앙', '처음', '첫째', '입구', '과정', '진행', '탄생', '출발'],
    tips({
      etymology: '고대 영어 ende에서 유래하여 물건의 가장자리나 시간적 결말을 뜻하게 되었습니다.',
      visual: '마라톤 선수가 결승선을 통과하며 리본을 끊는 마지막 순간을 상상해 보세요.',
      soundAlike: '영화가 끝나고 검은 화면에 커다랗게 뜨는 \'THE END\' 자막을 떠올리면 쉽습니다.',
      context: '물리적인 길의 막다른 곳뿐만 아니라 관계나 사건의 종결을 표현할 때도 사용됩니다.',
      synonymAntonym: 'finish와 의미가 비슷하며, 무언가 새로 시작되는 beginning과는 반대됩니다.',
    }),
    {
      definition: 'The final part of a period of time, an activity, or a physical object.',
      synonyms: ['conclusion', 'finish', 'termination'],
      antonyms: ['beginning', 'start', 'origin'],
      exampleSentences: [
        { en: 'We reached the final point of the road.', ko: '우리는 길의 끝에 도달했다.' },
        { en: 'The movie has a very happy closing.', ko: '그 영화는 매우 행복한 결말을 가졌다.' },
      ],
    }
  ),
  word('Farm', '농장', 1, 'noun',
    ['도시', '마을', '학교', '공장', '병원', '시장', '공원', '숲', '산', '바다'],
    tips({
      etymology: '라틴어 firma에서 유래했으며, 원래는 고정된 임대료를 지불하고 빌린 땅을 의미했습니다.',
      visual: '끝없이 펼쳐진 초록색 밭과 빨간 지붕의 헛간, 한가롭게 풀을 뜯는 소들을 상상해 보세요.',
      soundAlike: '한국어 \'팜\'과 발음이 같으며, \'팜 스테이\'나 \'팜 파티\' 같은 단어를 떠올리면 쉽습니다.',
      context: '식탁에 오르는 신선한 채소와 과일이 어디서 오는지 생각하면 장소를 기억하기 좋습니다.',
      synonymAntonym: '가축을 키우는 ranch나 대규모 재배지인 plantation과 비슷하지만 도시와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An area of land and its buildings used for growing crops and rearing animals.',
      synonyms: ['ranch', 'plantation', 'homestead'],
      antonyms: ['city', 'metropolis', 'urban area'],
      exampleSentences: [
        { en: 'They live on a large piece of land in the countryside.', ko: '그들은 시골의 넓은 농장에서 살고 있다.' },
        { en: 'This place produces organic vegetables and milk.', ko: '이 농장은 유기농 채소와 우유를 생산한다.' },
      ],
    }
  ),
  word('Fire', '불', 1, 'noun',
    ['물', '흙', '바람', '공기', '연기', '재', '불꽃', '숯', '나무', '땔감'],
    tips({
      etymology: '고대 영어 fȳr에서 유래하여 열과 빛을 내는 화학적 연소 현상을 뜻합니다.',
      visual: '어두운 밤 캠프파이어에서 붉고 노랗게 일렁이는 뜨거운 불길을 떠올려 보세요.',
      soundAlike: '총을 발사하거나 직원을 해고할 때도 동일한 발음을 사용합니다.',
      context: '음식을 익히기 위해 가스레인지를 켜거나 추위를 피하기 위해 난로를 땔 때 사용됩니다.',
      synonymAntonym: 'flame은 작은 불꽃을, water는 불을 끄는 상반된 성질을 나타냅니다.',
    }),
    {
      definition: 'the state of combustion in which substances combine chemically with oxygen from the air and typically give out bright light and heat',
      synonyms: ['flame', 'blaze', 'inferno'],
      antonyms: ['water', 'ice', 'cold'],
      exampleSentences: [
        { en: 'The burning wood kept us warm at night.', ko: '타오르는 나무가 밤새 우리를 따뜻하게 해주었다.' },
        { en: 'Don\'t play with matches because they can start a blaze.', ko: '큰 불을 일으킬 수 있으니 성냥을 가지고 놀지 마라.' },
      ],
    }
  ),
  word('Fly', '날다', 1, 'verb',
    ['걷다', '달리다', '앉다', '서다', '뛰다', '헤엄치다', '미끄러지다', '등산하다', '내려가다', '올라가다'],
    tips({
      etymology: '고대 영어 flēogan에서 유래하여 공중을 이동하는 동작을 뜻합니다.',
      visual: '날개를 활짝 펴고 구름 사이를 지나가는 비행기를 떠올리세요.',
      soundAlike: '야구에서 공이 높게 뜨는 \'플라이 볼\'을 생각해보세요.',
      context: '새나 곤충이 이동하는 방식이며, 비행기를 탈 때도 씁니다.',
      synonymAntonym: '높이 솟구치는 soar와 비슷하고, 기어가는 crawl과는 반대됩니다.',
    }),
    {
      definition: 'To move through the air by using wings or being in an aircraft.',
      synonyms: ['soar', 'glide', 'hover'],
      antonyms: ['walk', 'crawl', 'sink'],
      exampleSentences: [
        { en: 'Birds can move through the air in the sky.', ko: '새들은 하늘을 날 수 있다.' },
        { en: 'The plane will travel to Seoul tomorrow.', ko: '그 비행기는 내일 서울로 날아갈 것이다.' },
      ],
    }
  ),
  word('Foot', '발', 1, 'noun',
    ['손', '팔', '다리', '무릎', '발목', '발가락', '발바닥', '손바닥', '손가락', '손목'],
    tips({
      etymology: '고대 영어 fōt에서 유래했으며 신체의 가장 아랫부분을 의미합니다.',
      visual: '신발을 신거나 양말을 신을 때 가장 먼저 닿는 신체 부위를 떠올려 보세요.',
      soundAlike: '축구를 뜻하는 \'풋볼(Football)\'의 첫 글자와 발음이 같습니다.',
      context: '길을 걷거나 서 있을 때 우리 몸의 무게를 지탱해 주는 역할을 합니다.',
      synonymAntonym: '동물의 발을 뜻하는 paw나 hoof와 비교해서 기억하면 좋습니다.',
    }),
    {
      definition: 'the lower part of the leg below the ankle on which a person stands or walks',
      synonyms: ['paw', 'hoof', 'sole'],
      antonyms: ['head', 'hand', 'top'],
      exampleSentences: [
        { en: 'My lower limb part hurts after the long walk.', ko: '긴 산책 후에 발이 아프다.' },
        { en: 'She stepped on my walking limb by accident.', ko: '그녀가 실수로 내 발을 밟았다.' },
      ],
    }
  ),
  word('Fox', '여우', 1, 'noun',
    ['늑대', '곰', '토끼', '다람쥐', '너구리', '고양이', '개', '표범', '치타', '하이에나'],
    tips({
      etymology: '고대 영어에서 유래한 단어로, 아주 오래전부터 영리함을 상징하는 동물을 지칭했습니다.',
      visual: '붉은색 털과 끝이 하얀 붓처럼 풍성한 꼬리, 쫑긋한 귀를 가진 모습을 상상해 보세요.',
      soundAlike: '유명 영화 제작사인 \'20세기 폭스\'나 \'폭스바겐\'의 앞글자 발음과 비슷합니다.',
      context: '이솝 우화나 전래 동화에서 주로 주인공을 속이거나 꾀를 내는 영리한 캐릭터로 자주 나옵니다.',
      synonymAntonym: '암컷은 vixen이라고 부르며, 개과 동물이지만 고양이처럼 민첩한 특징이 있습니다.',
    }),
    {
      definition: 'A small wild carnivorous mammal with a bushy tail and a pointed muzzle, often known for being clever.',
      synonyms: ['vixen', 'canid', 'reynard'],
      antonyms: ['hound', 'prey', 'rabbit'],
      exampleSentences: [
        { en: 'A reddish wild animal ran across the road.', ko: '붉은색의 야생 동물이 길을 가로질러 달려갔다.' },
        { en: 'This animal has a thick tail in winter.', ko: '이 동물은 겨울에 털이 아주 풍성한 꼬리를 갖는다.' },
      ],
    }
  ),
  word('Full', '가득한', 1, 'adjective',
    ['비어 있는', '반쯤', '절반', '조금', '적은', '부족한', '텅 빈', '공허한', '덜 찬', '여유 있는'],
    tips({
      etymology: '고대 영어 \'full\'에서 유래하여 어떤 공간이나 용기가 한계치까지 도달한 상태를 나타냅니다.',
      visual: '컵에 물이 찰랑찰랑하게 담겨 더 이상 들어갈 틈이 없는 이미지를 떠올려 보세요.',
      soundAlike: '배가 빵빵하게 불러서 \'풀(Full)\'로 찼다고 말하는 상황을 연상하면 쉽습니다.',
      context: '식당의 예약이 꽉 찼거나, 식사 후 배가 부를 때, 혹은 일정이 바쁠 때 두루 쓰입니다.',
      synonymAntonym: '가득 찬 상태인 packed와 반대되는 텅 빈 상태인 empty를 함께 기억하세요.',
    }),
    {
      definition: 'containing or holding as much or as many as possible; having no empty space',
      synonyms: ['complete', 'packed', 'filled'],
      antonyms: ['empty', 'vacant', 'hollow'],
      exampleSentences: [
        { en: 'The theater was packed with many people.', ko: '극장은 사람들로 가득 찼다.' },
        { en: 'I am satisfied and cannot eat more after that big meal.', ko: '그 큰 식사 후에 배가 가득 불러서 더 못 먹겠다.' },
      ],
    }
  ),
  word('Glass', '유리', 1, 'noun',
    ['플라스틱', '금속', '나무', '돌', '종이', '천', '고무', '흙', '대리석', '세라믹'],
    tips({
      etymology: '고대 게르만어 glasam에서 유래했으며, 원래 \'빛나다\' 또는 \'호박색\'을 의미했습니다.',
      visual: '햇빛이 투명하게 통과하는 깨끗한 창문을 상상해 보세요.',
      soundAlike: '신데렐라의 \'글래스\' 슬리퍼(유리 구두)를 떠올리면 기억하기 쉽습니다.',
      context: '깨지기 쉬운 성질 때문에 \'Be careful\'이라는 표현과 자주 쓰입니다.',
      synonymAntonym: '창문용 유리는 pane이라고 부르며, 불투명한 재질인 wood와 대조됩니다.',
    }),
    {
      definition: 'a hard transparent material used for windows and containers',
      synonyms: ['crystal', 'pane', 'lens'],
      antonyms: ['wood', 'metal', 'plastic'],
      exampleSentences: [
        { en: 'Be careful not to break the window.', ko: '창문 유리를 깨지 않도록 조심해라.' },
        { en: 'She filled the drinking vessel with water.', ko: '그녀는 컵에 물을 부었다.' },
      ],
    }
  ),
  // Level 2
  word('Above', '위에', 2, 'preposition',
    ['아래', '옆', '앞', '뒤', '사이', '가운데', '밑', '아래에', '앞에', '뒤에'],
    tips({
      etymology: '고대 영어 abufan에서 유래했으며 \'위쪽으로\'라는 뜻을 가집니다.',
      visual: '머리 위로 높이 떠 있는 구름이나 비행기를 상상해 보세요.',
      soundAlike: '발음이 \'어부바\'와 비슷하죠? 아이를 어부바하면 내 등 \'위에\' 있게 됩니다.',
      context: '단순한 물리적 위치뿐만 아니라 온도, 수치, 계급이 더 높을 때도 자주 쓰입니다.',
      synonymAntonym: 'Over와 의미가 통하지만, 수직적 반대 개념인 Below와 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'in or to a higher place or position than something else',
      synonyms: ['over', 'overhead', 'atop'],
      antonyms: ['below', 'under', 'beneath'],
      exampleSentences: [
        { en: 'The birds are flying high in the sky.', ko: '새들이 하늘 높이 위에서 날고 있다.' },
        { en: 'We live in the apartment right on the floor higher than theirs.', ko: '우리는 그들의 집 바로 위층 아파트에 산다.' },
      ],
    }
  ),
  word('Across', '건너편', 2, 'preposition',
    ['이쪽', '저쪽', '가운데', '모서리', '끝', '시작', '중간', '반대편', '옆', '근처'],
    tips({
      etymology: '십자가를 뜻하는 cross에서 유래하여 가로지르는 움직임을 나타냅니다.',
      visual: '길의 이쪽 끝에서 저쪽 끝으로 다리를 건너가는 장면을 떠올려 보세요.',
      soundAlike: '어크로스, 크로스백은 어깨를 가로질러 매는 가방입니다.',
      context: '길 건너편에 있는 상점이나 강 반대편을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'over와 비슷하게 쓰이며, 길을 따라가는 along과는 반대되는 느낌입니다.',
    }),
    {
      definition: 'from one side to the other of a place, area, or line',
      synonyms: ['over', 'beyond', 'athwart'],
      antonyms: ['along', 'beside', 'nearby'],
      exampleSentences: [
        { en: 'There is a small bakery right on the other side of the street.', ko: '거리 바로 건너편에 작은 빵집이 하나 있습니다.' },
        { en: 'She walked to the other side of the bridge to see the sunset.', ko: '그녀는 일몰을 보기 위해 다리 건너편으로 걸어갔습니다.' },
      ],
    }
  ),
  word('Alive', '살아 있는', 2, 'adjective',
    ['죽은', '없는', '사라진', '끝난', '소멸한', '멸종한', '쇠약한', '병든', '죽어가는', '무생물'],
    tips({
      etymology: '고대 영어에서 \'생명 안에 있는\'이라는 뜻의 \'on life\'가 합쳐져 만들어진 단어입니다.',
      visual: '심장 박동 모니터의 그래프가 위아래로 힘차게 움직이는 모습을 상상해 보세요.',
      soundAlike: '유명한 비타민 브랜드 \'얼라이브\'를 떠올리면 생생하게 살아나는 기분을 연상하기 쉽습니다.',
      context: '단순히 생물학적으로 생존해 있다는 뜻 외에도 희망이나 전통이 여전히 유지될 때 사용합니다.',
      synonymAntonym: 'living과 비슷하게 쓰이지만, alive는 보통 명사 뒤나 보어 자리에 위치하며 dead와 정반대입니다.',
    }),
    {
      definition: 'having life and continuing to function as a biological entity',
      synonyms: ['living', 'breathing', 'animate'],
      antonyms: ['dead', 'deceased', 'lifeless'],
      exampleSentences: [
        { en: 'The doctors managed to keep the patient breathing and stable after the accident.', ko: '의사들은 사고 후 환자를 살아 있는 안정적인 상태로 유지하는 데 성공했다.' },
        { en: 'The old traditions are still very much present in this small mountain village.', ko: '이 작은 산골 마을에는 오래된 전통들이 여전히 살아 숨 쉬고 있다.' },
      ],
    }
  ),
  word('Alone', '혼자', 2, 'adjective',
    ['함께', '여럿', '단체', '둘', '세', '무리', '패', '그룹', '가족', '친구'],
    tips({
      etymology: 'all과 one이 합쳐진 단어로, 완전히 하나뿐인 상태를 의미합니다.',
      visual: '넓은 운동장 한가운데에 축구공 하나와 아이 한 명만 서 있는 장면을 그려보세요.',
      soundAlike: '얼로운(Alone)은 \'홀로\'라는 발음과 끝부분이 비슷하게 들리기도 합니다.',
      context: '도움 없이 스스로 일을 처리하거나 고립된 상황을 설명할 때 사용합니다.',
      synonymAntonym: 'solitary와 의미가 통하며, 누군가와 동행하는 accompanied와는 반대됩니다.',
    }),
    {
      definition: 'having no other people with you or being without help',
      synonyms: ['solitary', 'solo', 'unaccompanied'],
      antonyms: ['together', 'accompanied', 'escorted'],
      exampleSentences: [
        { en: 'She decided to travel to Europe by herself last summer.', ko: '그녀는 지난 여름에 유럽을 혼자 여행하기로 결정했다.' },
        { en: 'The child was left in the house for a few minutes.', ko: '그 아이는 몇 분 동안 집에 혼자 남겨졌다.' },
      ],
    }
  ),
  word('Basket', '바구니', 2, 'noun',
    ['상자', '가방', '통', '병', '자루', '컵', '접시', '그릇', '케이스', '수납함'],
    tips({
      etymology: '엮어서 만든 그릇을 뜻하는 라틴어 bascauda에서 유래했습니다.',
      visual: '나무 줄기를 촘촘하게 엮어 만든 구멍이 숭숭 뚫린 피크닉 가방을 상상해 보세요.',
      soundAlike: '농구 경기인 \'바스켓\'볼은 공을 골대 끝에 달린 \'바구니\'에 넣는 스포츠입니다.',
      context: '마트에서 장을 보거나 빨래를 모아둘 때, 혹은 소풍 갈 때 음식을 담는 용도로 사용됩니다.',
      synonymAntonym: '뚜껑이 있는 큰 바구니는 hamper라고 부르며, 평평한 접시와는 대조적인 입체적 용기입니다.',
    }),
    {
      definition: 'a container used for holding or carrying things, typically made from woven strips of cane, wire, or plastic',
      synonyms: ['hamper', 'bin', 'crate'],
      antonyms: ['lid', 'cover', 'flatware'],
      exampleSentences: [
        { en: 'She gathered the fresh apples from the garden and placed them in a woven container.', ko: '그녀는 정원에서 신선한 사과를 모아 엮어서 만든 바구니에 담았다.' },
        { en: 'The picnic container was filled with delicious sandwiches and cold drinks.', ko: '소풍 바구니는 맛있는 샌드위치와 시원한 음료로 가득 차 있었다.' },
      ],
    }
  ),
  word('Beach', '해변', 2, 'noun',
    ['산', '숲', '강', '호수', '계단', '길', '공원', '섬', '해안', '언덕'],
    tips({
      etymology: '고대 영어에서 자갈이나 모래가 있는 해안가를 뜻하던 단어에서 유래했습니다.',
      visual: '푸른 바다 옆에 펼쳐진 하얀 모래사장과 파라솔을 상상해 보세요.',
      soundAlike: '비치볼(Beach ball)을 가지고 신나게 뛰어노는 모래사장을 떠올리면 쉽습니다.',
      context: '여름 휴가, 수영, 일광욕, 모래성 쌓기 등의 활동과 자주 연결됩니다.',
      synonymAntonym: 'shore와 비슷하며, 나무가 울창한 forest와는 반대되는 풍경입니다.',
    }),
    {
      definition: 'A sandy or pebbly area located next to a body of water like an ocean or lake',
      synonyms: ['shore', 'coast', 'seaside'],
      antonyms: ['mountain', 'forest', 'desert'],
      exampleSentences: [
        { en: 'We spent the entire afternoon sunbathing on the warm sand.', ko: '우리는 오후 내내 따뜻한 모래 위에서 일광욕을 하며 보냈다.' },
        { en: 'The children built a large castle near the water\'s edge.', ko: '아이들이 물가 근처에서 커다란 성을 쌓았다.' },
      ],
    }
  ),
  word('Believe', '믿다', 2, 'verb',
    ['의심하다', '부정하다', '거부하다', '반대하다', '회의하다', '불신하다', '의문을 갖다', '흔들다', '놀라다', '무시하다'],
    tips({
      etymology: '고대 영어 \'lief(사랑하는)\'에서 유래하여, 누군가를 소중히 여기고 가치 있게 생각한다는 마음이 \'신뢰\'로 발전했습니다.',
      visual: '상대방의 눈을 똑바로 쳐다보며 진심 어린 표정으로 고개를 끄덕이는 신뢰의 제스처를 떠올려 보세요.',
      soundAlike: '빌리브(Believe) - \'빌리(Billy)\'라는 친구가 하는 말은 무엇이든 다 \'믿는다\'라고 연상해 보세요.',
      context: '종교적인 신념뿐만 아니라 일상에서 어떤 사실이 진짜라고 생각하거나 타인의 능력을 확신할 때 두루 쓰입니다.',
      synonymAntonym: 'Trust는 감정적인 신뢰에 가깝고, Doubt는 마음속에 피어오르는 의심의 안개와 같습니다.',
    }),
    {
      definition: 'to accept that something is true or real',
      synonyms: ['trust', 'accept', 'credit'],
      antonyms: ['doubt', 'distrust', 'deny'],
      exampleSentences: [
        { en: 'I strongly feel that you can succeed in this project.', ko: '나는 네가 이 프로젝트에서 성공할 수 있다고 굳게 믿는다.' },
        { en: 'Many people think that luck plays a big role in success.', ko: '많은 사람들은 운이 성공에 큰 역할을 한다고 믿는다.' },
      ],
    }
  ),
  word('Bottle', '병', 2, 'noun',
    ['컵', '통', '상자', '자루', '캔', '수조', '항아리', '그릇', '주전자', '접시'],
    tips({
      etymology: '라틴어 \'buttis(그릇)\'에서 유래하여 액체를 담는 좁은 입구의 용기를 뜻하게 되었습니다.',
      visual: '입구가 좁고 몸통이 긴 유리병에 시원한 음료가 가득 담긴 모습을 상상해 보세요.',
      soundAlike: '발음이 \'바틀\'인데, 길이 막히는 \'병목 현상\'을 뜻하는 \'바틀넥(bottleneck)\'을 떠올리면 기억하기 쉽습니다.',
      context: '생수, 와인, 소스 등 액체 상태의 내용물을 보관하거나 운반할 때 가장 흔히 쓰이는 표현입니다.',
      synonymAntonym: 'flask나 jar와 비슷하지만, 입구가 좁은 것이 특징이며 뚜껑인 cap과는 반대되는 개념의 본체입니다.',
    }),
    {
      definition: 'a container with a narrow neck, used for storing liquids, typically made of glass or plastic',
      synonyms: ['flask', 'vessel', 'decanter'],
      antonyms: ['cap', 'lid', 'stopper'],
      exampleSentences: [
        { en: 'Please pass me the water bottle.', ko: '물병을 건네주세요.' },
        { en: 'She threw the empty bottle in the recycling bin.', ko: '그녀는 빈 병을 재활용함에 버렸다.' },
      ],
    }
  ),
  word('Bottom', '바닥', 2, 'noun',
    ['꼭대기', '중간', '표면', '앞', '뒤', '끝', '시작', '가장자리', '모서리', '측면'],
    tips({
      etymology: '고대 영어 \'botm\'에서 유래하여 사물의 가장 낮은 기초나 토대를 의미하게 되었습니다.',
      visual: '깊은 바다의 맨 아래 지점이나 가방의 구석진 아래쪽 면을 상상해 보세요.',
      soundAlike: '발음이 \'바텀\'인데, 비즈니스에서 최종 결산이나 핵심을 뜻하는 \'바텀라인\'을 연상하면 기억하기 쉽습니다.',
      context: '물체의 물리적인 아랫부분뿐만 아니라 순위나 위치가 가장 낮은 상태를 표현할 때도 쓰입니다.',
      synonymAntonym: 'base는 기초가 되는 바닥을, top은 정반대인 꼭대기를 의미합니다.',
    }),
    {
      definition: 'the lowest part or surface of something, or the part on which it rests',
      synonyms: ['base', 'floor', 'foundation'],
      antonyms: ['top', 'peak', 'summit'],
      exampleSentences: [
        { en: 'The keys fell to the bottom of the bag.', ko: '열쇠가 가방 바닥에 떨어졌다.' },
        { en: 'We swam to the bottom of the pool.', ko: '우리는 수영장 바닥까지 헤엄쳤다.' },
      ],
    }
  ),
  word('Bright', '밝은', 2, 'adjective',
    ['어두운', '흐린', '침침한', '그늘진', '음침한', '우울한', '흐릿한', '희미한', '안개낀', '탁한'],
    tips({
      etymology: '고대 영어 \'beorht\'에서 유래하여 빛이 나거나 강하게 반사되는 상태를 뜻합니다.',
      visual: '한낮의 태양 아래 눈을 제대로 뜨기 힘들 정도로 강렬한 빛이 쏟아지는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'브라이트\'인데, 머릿속에 전구가 \'번쩍\' 하고 켜지는 똑똑한 아이디어를 연상해 보세요.',
      context: '물리적인 빛의 세기뿐만 아니라, 지능이 명석하거나 장래가 유망한 상황을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: 'luminous는 빛을 내는 성질에 집중하며, 반대말인 dark는 빛이 전혀 없는 상태를 말합니다.',
    }),
    {
      definition: 'giving out or reflecting a lot of light, or showing signs of intelligence and success',
      synonyms: ['luminous', 'radiant', 'brilliant'],
      antonyms: ['dark', 'dim', 'gloomy'],
      exampleSentences: [
        { en: 'The sun is very bright today.', ko: '오늘 태양이 매우 밝습니다.' },
        { en: 'She has a bright future ahead of her.', ko: '그녀 앞에는 유망한 미래가 펼쳐져 있습니다.' },
      ],
    }
  ),
  word('Brother', '형제', 2, 'noun',
    ['자매', '누나', '오빠', '여동생', '남동생', '아버지', '어머니', '삼촌', '고모', '조카'],
    tips({
      etymology: '고대 영어 \'brōthor\'에서 유래했으며, 같은 부모를 둔 남성 구성원을 가리키는 아주 오래된 단어입니다.',
      visual: '어린 시절 함께 축구를 하거나 장난을 치며 자란 남자 형제의 든든한 뒷모습을 상상해 보세요.',
      soundAlike: '한국어 \'브라더\'와 발음이 같으며, 의리가 강한 남자들끼리 서로를 부르는 호칭으로도 익숙합니다.',
      context: '영어권에서는 형, 남동생을 구분하지 않고 모두 이 단어로 부르며 친한 남자 친구에게도 쓰입니다.',
      synonymAntonym: '성별 구분 없는 형제자매는 sibling이라 하며, 여성 형제인 sister와 대조를 이룹니다.',
    }),
    {
      definition: 'A male person who shares the same parents as another person.',
      synonyms: ['sibling', 'kin', 'male relative'],
      antonyms: ['sister', 'stranger', 'outsider'],
      exampleSentences: [
        { en: 'My brother is two years older than me.', ko: '우리 형은 나보다 두 살이 더 많습니다.' },
        { en: 'He has two brothers and one sister.', ko: '그는 남자 형제 두 명과 여자 형제 한 명이 있습니다.' },
      ],
    }
  ),
  word('Building', '건물', 2, 'noun',
    ['집', '학교', '병원', '가게', '공장', '탑', '다리', '도로', '공원', '정원'],
    tips({
      etymology: '짓다라는 뜻의 build에 명사형 접미사 ing가 결합되어 만들어진 단어입니다.',
      visual: '하늘 높이 솟아오른 유리창이 많은 고층 빌딩의 외관을 떠올려 보세요.',
      soundAlike: '외래어로 \'빌딩\'이라고 그대로 쓰기 때문에 발음과 의미를 연결하기 쉽습니다.',
      context: '단순한 주택뿐만 아니라 사무실, 상가 등 지붕과 벽이 있는 모든 구조물을 통칭합니다.',
      synonymAntonym: 'structure는 모든 구조물을 뜻하며, ruin은 무너진 폐허를 의미합니다.',
    }),
    {
      definition: 'A permanent structure with a roof and walls, such as a house or factory.',
      synonyms: ['structure', 'edifice', 'construction'],
      antonyms: ['ruin', 'ground', 'field'],
      exampleSentences: [
        { en: 'That building has 50 floors.', ko: '그 건물은 50층이다.' },
        { en: 'The office building is under construction.', ko: '사무실 건물이 공사 중이다.' },
      ],
    }
  ),
  word('Butter', '버터', 2, 'noun',
    ['빵', '잼', '치즈', '우유', '생크림', '마가린', '요거트', '계란', '밀가루', '설탕'],
    tips({
      etymology: '그리스어 \'bouturon\'에서 유래했으며, \'소(bous)\'와 \'치즈(turos)\'가 합쳐져 소의 젖으로 만든 지방을 뜻하게 되었습니다.',
      visual: '냉장고에서 갓 꺼낸 딱딱하고 노란 네모난 덩어리가 뜨거운 팬 위에서 투명하게 녹아 흐르는 장면을 상상하세요.',
      soundAlike: '발음이 \'버텨\'와 비슷합니다. 느끼한 음식을 먹을 때 \'버터\'를 먹으며 조금만 더 \'버텨\'보자고 기억해 보세요.',
      context: '베이킹을 하거나 스테이크를 구울 때 고소한 풍미를 극대화하기 위해 마지막에 추가하는 필수 식재료입니다.',
      synonymAntonym: '빵에 바르는 spread와 비슷하지만, 액체 상태인 oil과는 질감과 용도 면에서 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A solid yellow substance made from milk or cream that is used in cooking or spread on bread.',
      synonyms: ['spread', 'margarine', 'shortening'],
      antonyms: ['oil', 'water', 'vinegar'],
      exampleSentences: [
        { en: 'Spread some butter on the toast while it is still warm.', ko: '토스트가 아직 따뜻할 때 버터를 조금 바르세요.' },
        { en: 'The chef added a knob of butter to the sauce for a richer flavor.', ko: '요리사는 더 풍부한 맛을 내기 위해 소스에 버터 한 조각을 넣었습니다.' },
      ],
    }
  ),
  word('Candle', '양초', 2, 'noun',
    ['라이터', '성냥', '횃불', '전등', '램프', '조명', '불꽃', '연기', '왁스', '심지'],
    tips({
      etymology: '라틴어 \'candere(빛나다)\'에서 유래하여 스스로 빛을 내는 물건을 뜻하게 되었습니다.',
      visual: '길쭉한 왁스 기둥 꼭대기에서 작은 불꽃이 흔들리며 주변을 은은하게 밝히는 모습입니다.',
      soundAlike: '한국에서도 향이 나는 초를 \'소이 캔들\'이나 \'향초 캔들\'이라고 흔히 부릅니다.',
      context: '생일 케이크 위에 꽂거나 정전이 되었을 때 비상용으로 불을 붙여 사용하곤 합니다.',
      synonymAntonym: '심지가 있는 가느다란 초를 뜻하는 taper와 비슷하며, 전기를 쓰는 bulb와는 대조적입니다.',
    }),
    {
      definition: 'a cylinder of wax with a central string that is burned to provide illumination',
      synonyms: ['taper', 'wax light', 'votive'],
      antonyms: ['electric light', 'darkness', 'flashlight'],
      exampleSentences: [
        { en: 'She lit a scented candle to create a relaxing atmosphere in the room.', ko: '그녀는 방 안에 편안한 분위기를 조성하기 위해 향초를 켰다.' },
        { en: 'The power went out, so we had to find a candle and matches.', ko: '정전이 되어서 우리는 양초와 성냥을 찾아야만 했다.' },
      ],
    }
  ),
  word('Careful', '조심하는', 2, 'adjective',
    ['부주의한', '경솔한', '무모한', '성급한', '조급한', '대충하는', '소홀한', '무관심한', '무성의한', '안일한'],
    tips({
      etymology: '명사 care(주의)에 가득함을 뜻하는 접미사 -ful이 결합되어 주의가 가득한 상태를 나타냅니다.',
      visual: '달걀 꾸러미를 들고 살얼음판 위를 한 걸음씩 천천히 내디디며 걷는 사람의 모습입니다.',
      soundAlike: '발음이 \'케어풀\'이므로, 누군가를 돌보는 \'케어\'를 \'풀(full)\'로 꽉 채워서 정성껏 한다고 연상하세요.',
      context: '중요한 서류를 작성하거나 깨지기 쉬운 물건을 다룰 때 실수를 방지하려는 태도를 묘사합니다.',
      synonymAntonym: '유사어 cautious는 신중함을, 반대어 careless는 부주의함을 강조할 때 주로 쓰입니다.',
    }),
    {
      definition: 'making a conscious effort to avoid potential danger, damage, or mistakes',
      synonyms: ['cautious', 'prudent', 'attentive'],
      antonyms: ['careless', 'reckless', 'negligent'],
      exampleSentences: [
        { en: 'Be careful when you cross the street.', ko: '길을 건널 때 조심하세요.' },
        { en: 'She is very careful with her money.', ko: '그녀는 돈 관리에 매우 신중합니다.' },
      ],
    }
  ),
  word('Center', '중앙', 2, 'noun',
    ['끝', '가장자리', '모서리', '벽', '바깥', '주변', '외곽', '테두리', '경계', '한쪽'],
    tips({
      etymology: '라틴어 centrum에서 유래하여 원의 중심점을 의미하게 되었습니다.',
      visual: '동심원의 가장 안쪽 점이나 과녁의 정중앙을 떠올려 보세요.',
      soundAlike: '쇼핑센터나 문화센터처럼 사람들이 모이는 핵심 장소를 생각하면 쉽습니다.',
      context: '물리적인 중간 지점뿐만 아니라 활동이나 관심의 핵심부를 표현할 때도 사용됩니다.',
      synonymAntonym: 'middle과 유사하며, 가장자리를 뜻하는 edge와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the middle point or part of something equally distant from all sides',
      synonyms: ['middle', 'core', 'heart'],
      antonyms: ['edge', 'perimeter', 'border'],
      exampleSentences: [
        { en: 'The statue stands in the center of the square.', ko: '동상이 광장 중앙에 서 있다.' },
        { en: 'Put the vase in the center of the table.', ko: '꽃병을 탁자 중앙에 놓아라.' },
      ],
    }
  ),
  word('Circle', '원', 2, 'noun',
    ['사각형', '삼각형', '타원', '선', '점', '다각형', '곡선', '직선', '나선', '물결'],
    tips({
      etymology: '라틴어 circulus에서 유래하여 \'작은 고리\'라는 의미를 담고 있습니다.',
      visual: '중심점에서 같은 거리에 있는 점들이 모여 이루는 완벽하게 둥근 고리를 상상해 보세요.',
      soundAlike: '학교 동아리를 뜻하는 \'서클\'은 사람들이 둥글게 모여 활동하는 모임을 뜻합니다.',
      context: '기하학적인 도형 외에도 사회적 인맥이나 집단을 표현할 때 \'social circle\'처럼 쓰입니다.',
      synonymAntonym: '둥근 고리인 ring과 유사하며, 각이 진 square나 triangle과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A continuous curved line that is everywhere the same distance from a central point, forming a round shape.',
      synonyms: ['ring', 'loop', 'round'],
      antonyms: ['square', 'triangle', 'rectangle'],
      exampleSentences: [
        { en: 'Draw a circle with a pencil.', ko: '연필로 원을 그려라.' },
        { en: 'The children sat in a circle.', ko: '아이들이 원형으로 앉았다.' },
      ],
    }
  ),
  word('Corner', '모서리', 2, 'noun',
    ['중앙', '가운데', '평면', '직선', '넓은 곳', '열린 공간', '원', '중심', '내부', '표면'],
    tips({
      etymology: '라틴어 cornu(뿔)에서 유래하여 뾰족하게 튀어나온 부분을 가리킵니다.',
      visual: '방 안의 두 벽이 만나서 90도로 꺾이는 구석진 자리를 떠올려 보세요.',
      soundAlike: '축구 경기에서 경기장 구석에서 공을 차는 \'코너킥\'을 생각하면 쉽습니다.',
      context: '길모퉁이의 상점이나 종이의 귀퉁이, 방 안의 구석을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'angle이나 nook와 비슷하며, 정중앙을 뜻하는 center와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the place where two lines or surfaces meet to form an angle',
      synonyms: ['angle', 'nook', 'edge'],
      antonyms: ['center', 'middle', 'interior'],
      exampleSentences: [
        { en: 'The cat is hiding in the corner.', ko: '고양이가 구석에 숨어 있다.' },
        { en: 'There is a store on the corner.', ko: '모퉁이에 가게가 있다.' },
      ],
    }
  ),
  word('Cover', '덮다', 2, 'verb',
    ['열다', '벗기다', '노출하다', '드러내다', '공개하다', '펼치다', '제거하다', '치우다', '열어젖히다', '풀다'],
    tips({
      etymology: '라틴어 \'cooperire\'에서 유래하여 \'완전히 감싸다\'라는 의미를 담고 있습니다.',
      visual: '추운 날씨에 두꺼운 담요를 어깨 위로 끌어올려 몸을 감싸는 모습을 상상해 보세요.',
      soundAlike: '책의 \'커버\'나 스마트폰 \'케이스\'처럼 겉면을 감싸 보호하는 물건을 떠올리면 쉽습니다.',
      context: '비가 올 때 물건이 젖지 않게 비닐을 씌우거나 비밀을 숨기기 위해 가리는 상황에서 쓰입니다.',
      synonymAntonym: '숨기는 conceal과는 비슷하고, 반대로 드러내는 reveal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to put something over another thing to protect or hide it',
      synonyms: ['conceal', 'hide', 'protect'],
      antonyms: ['uncover', 'expose', 'reveal'],
      exampleSentences: [
        { en: 'Please cover the food with a lid.', ko: '음식을 뚜껑으로 덮어 주세요.' },
        { en: 'Snow covered the ground overnight.', ko: '밤 사이에 눈이 땅을 덮었다.' },
      ],
    }
  ),
  word('Danger', '위험', 2, 'noun',
    ['안전', '평화', '고요', '평온', '보호', '안전지대', '평지', '안심', '조용함', '편안함'],
    tips({
      etymology: '고대 프랑스어 \'dangier\'에서 유래했으며, 원래는 타인의 지배력이나 권한 아래 있어 해를 입을 수 있는 상태를 의미했습니다.',
      visual: '공사장 울타리에 붙어 있는 빨간색 해골 마크나 \'관계자 외 출입금지\' 표지판을 떠올려 보세요.',
      soundAlike: '뜨거운 난로에 손이 \'데인(Dain)\' 상황처럼 즉각적인 위해가 가해지는 순간을 연상하면 쉽습니다.',
      context: '신체적 부상뿐만 아니라 경제적 손실이나 평판의 훼손 등 해로운 결과가 예상되는 모든 상황에 쓰입니다.',
      synonymAntonym: 'Risk나 Hazard는 발생 가능성에 초점을 두며, Safety와 Security는 그로부터 보호된 상태를 뜻합니다.',
    }),
    {
      definition: 'the possibility that someone will be harmed or killed',
      synonyms: ['risk', 'hazard', 'threat'],
      antonyms: ['safety', 'security', 'protection'],
      exampleSentences: [
        { en: 'There is danger in the deep water.', ko: '깊은 물에는 위험이 있다.' },
        { en: 'The sign warned of danger ahead.', ko: '표지판에 앞에 위험이 있다고 경고했다.' },
      ],
    }
  ),
  word('East', '동쪽', 2, 'noun',
    ['서쪽', '남쪽', '북쪽', '남동', '남서', '북동', '북서', '중앙', '양쪽', '반대편'],
    tips({
      etymology: '고대 영어에서 \'새벽\'을 뜻하는 단어와 어원이 같으며, 빛이 시작되는 곳을 의미합니다.',
      visual: '지도상에서 오른쪽을 가리키며, 수평선 위로 붉은 해가 솟아오르는 장면을 떠올려 보세요.',
      soundAlike: '발음이 비슷한 \'Eat\'과 연결하여, 아침 식사를 하기 위해 해가 뜨는 방향을 본다고 기억하세요.',
      context: '나침반의 E 표시를 확인하세요. 한국은 지리적으로 아시아의 동쪽에 위치해 있습니다.',
      synonymAntonym: '동양을 뜻하는 Orient와 일맥상통하며, 해가 지는 West와는 정반대 방향입니다.',
    }),
    {
      definition: 'the direction towards the point of the horizon where the sun rises at the equinox',
      synonyms: ['orient', 'eastward', 'sunrise'],
      antonyms: ['west', 'occident', 'sunset'],
      exampleSentences: [
        { en: 'The sun rises in the east.', ko: '태양은 동쪽에서 뜬다.' },
        { en: 'They traveled east for three days.', ko: '그들은 동쪽으로 사흘 동안 여행했다.' },
      ],
    }
  ),
  word('Empty', '비어 있는', 2, 'adjective',
    ['가득한', '꽉 찬', '만원인', '충만한', '풍부한', '넉넉한', '바쁜', '사람이 많은', '물건이 많은', '혼잡한'],
    tips({
      etymology: '고대 영어 æmettig에서 유래하여 \'여유 있는\' 혹은 \'한가한\' 상태를 뜻하다가 현재의 의미가 되었습니다.',
      visual: '내용물을 다 쏟아버려 바닥이 훤히 들여다보이는 빈 상자를 떠올려 보세요.',
      soundAlike: '발음이 \'엠티\'와 비슷하죠? 대학생들이 엠티를 떠나 텅 빈 강의실을 상상하면 쉽습니다.',
      context: '그릇에 음식이 없거나, 방에 가구가 없을 때, 혹은 마음이 허전할 때도 두루 사용합니다.',
      synonymAntonym: 'vacant는 주로 빈자리를, full은 가득 찬 상태를 나타내어 서로 대비됩니다.',
    }),
    {
      definition: 'containing nothing or not filled by any person or thing',
      synonyms: ['vacant', 'hollow', 'void'],
      antonyms: ['full', 'packed', 'occupied'],
      exampleSentences: [
        { en: 'The room was empty when I arrived.', ko: '내가 도착했을 때 방은 비어 있었다.' },
        { en: 'The glass is empty. Would you like more?', ko: '컵이 비었네요. 더 드릴까요?' },
      ],
    }
  ),
  word('Enjoy', '즐기다', 2, 'verb',
    ['싫어하다', '피하다', '거부하다', '지루해하다', '불평하다', '불만족하다', '우울해하다', '슬퍼하다', '화나다', '짜증내다'],
    tips({
      etymology: '접두사 en(만들다)과 joy(기쁨)가 결합하여 기쁜 상태로 만든다는 의미에서 유래했습니다.',
      visual: '좋아하는 취미 생활을 하며 입가에 미소가 가득한 자신의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인조이\'와 비슷하며, 인조 잔디가 아닌 진짜 즐거움을 느끼는 상황을 연상하세요.',
      context: '음식, 취미, 여행 등 긍정적인 경험을 통해 만족감을 얻는 모든 상황에 쓰입니다.',
      synonymAntonym: '기쁨을 누리는 savor와 반대로 몹시 싫어하는 detest를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to take pleasure in or derive satisfaction from an activity or occasion',
      synonyms: ['relish', 'savor', 'appreciate'],
      antonyms: ['dislike', 'hate', 'detest'],
      exampleSentences: [
        { en: 'I enjoy reading books in my free time.', ko: '나는 여가 시간에 책 읽는 것을 즐긴다.' },
        { en: 'Did you enjoy the concert?', ko: '콘서트 즐거우셨나요?' },
      ],
    }
  ),
  word('Enter', '들어가다', 2, 'verb',
    ['나가다', '떠나다', '외출하다', '벗어나다', '탈출하다', '퇴장하다', '건너가다', '지나가다', '우회하다', '피하다'],
    tips({
      etymology: '라틴어 intrare에서 유래하여 \'안으로 이동하다\'라는 의미를 담고 있습니다.',
      visual: '건물 입구의 열린 문을 통해 안으로 발을 내딛는 사람의 발걸음을 상상하세요.',
      soundAlike: '컴퓨터 키보드의 \'엔터\' 키를 누르면 데이터가 시스템 안으로 입력되는 것과 같습니다.',
      context: '물리적인 공간에 들어가는 상황뿐만 아니라 대회에 참가하거나 정보를 입력할 때도 쓰입니다.',
      synonymAntonym: '안으로 들어가는 access와 밖으로 나가는 exit을 대조해서 기억하면 쉽습니다.',
    }),
    {
      definition: 'to come or go into a particular place or area',
      synonyms: ['access', 'penetrate', 'pierce'],
      antonyms: ['exit', 'depart', 'leave'],
      exampleSentences: [
        { en: 'Please enter the room quietly.', ko: '조용히 방에 들어가 주세요.' },
        { en: 'You must enter your password to continue.', ko: '계속하려면 비밀번호를 입력해야 한다.' },
      ],
    }
  ),
  word('Even', '심지어', 2, 'adverb',
    ['특히', '오히려', '반대로', '거의', '대략', '대체로', '주로', '대부분', '몇몇', '일부'],
    tips({
      etymology: '고대 영어 efen에서 유래하여 본래 수평이 맞거나 평평한 상태를 의미했습니다.',
      visual: '평범한 수준을 넘어 극단적인 지점까지 일직선으로 쭉 뻗어나가는 화살표를 상상하세요.',
      soundAlike: '입술을 \'이-\' 하고 옆으로 평평하게 벌리며 강조하듯 길게 발음해 보세요.',
      context: '예상 밖의 상황이나 아주 사소한 것까지 포함된다는 사실을 강조할 때 주로 쓰입니다.',
      synonymAntonym: '강조의 의미일 때는 indeed와 비슷하며, 부정적인 극단을 나타낼 때는 hardly와 대조됩니다.',
    }),
    {
      definition: 'used to emphasize something that is surprising, unexpected, or extreme',
      synonyms: ['including', 'indeed', 'notwithstanding'],
      antonyms: ['hardly', 'scarcely', 'barely'],
      exampleSentences: [
        { en: 'Even a child can understand this.', ko: '심지어 아이도 이것을 이해할 수 있다.' },
        { en: 'He did not even say goodbye.', ko: '그는 심지어 작별 인사도 하지 않았다.' },
      ],
    }
  ),
];
