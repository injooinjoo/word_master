import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch03: VocabItem[] = [
  word('Air', '공기', 1, 'noun',
    ['물', '불', '흙', '바람', '구름', '안개', '연기', '증기', '먼지', '이슬'],
    tips({
      etymology: '라틴어 aer에서 유래, 대기를 의미',
      visual: '바람에 날리는 나뭇잎',
      soundAlike: '에어 = 에어컨의 에어',
      context: 'The air is fresh in the mountains.',
      synonymAntonym: 'Syn: atmosphere, breeze',
    }),
    {
      definition: 'the invisible mixture of gases that surrounds the earth and that we breathe',
      wordDistractors: ['atmosphere', 'breeze', 'wind'],
      definitionDistractors: [
        'liquid that falls from clouds as rain',
        'the light and heat from the sun',
        'the land and sea surface of the earth',
      ],
      exampleSentences: [
        { en: 'The air is fresh in the mountains.', ko: '산에서는 공기가 맑다.' },
        { en: 'Open the window to let in some air.', ko: '창문을 열어 공기를 환기해라.' },
      ],
    }
  ),
  word('Arm', '팔', 1, 'noun',
    ['손', '발', '다리', '머리', '허리', '어깨', '손가락', '손목', '팔꿈치', '주먹'],
    tips({
      etymology: '고대 영어 arm에서 유래',
      visual: '팔을 굽혀 힘을 보여주는 모습',
      soundAlike: '암 = 암(arm) 잡기',
      context: 'He broke his arm in the accident.',
      synonymAntonym: 'Syn: limb',
    }),
    {
      definition: 'either of the two long parts of the body from the shoulder to the hand',
      wordDistractors: ['limb', 'elbow', 'wrist'],
      definitionDistractors: [
        'the part of the body at the end of the arm',
        'one of the two limbs used for walking',
        'the part of the body that connects the head to the torso',
      ],
      exampleSentences: [
        { en: 'He broke his arm in the accident.', ko: '그는 사고로 팔을 부쉈다.' },
        { en: 'She held the baby in her arms.', ko: '그녀는 아기를 팔에 안았다.' },
      ],
    }
  ),
  word('Back', '등', 1, 'noun',
    ['앞', '배', '가슴', '어깨', '허리', '옆', '뒤', '얼굴', '머리', '목'],
    tips({
      etymology: '고대 영어 bæc에서 유래',
      visual: '뒤를 돌아보는 사람의 등',
      soundAlike: '백 = 백팩(등에 메는 가방)',
      context: 'My back hurts after sitting all day.',
      synonymAntonym: 'Syn: spine, rear',
    }),
    {
      definition: 'the part of the body from the neck to the bottom of the spine',
      wordDistractors: ['spine', 'rear', 'shoulder'],
      definitionDistractors: [
        'the front part of the body between the chest and pelvis',
        'the part of the face above the eyes',
        'the front of the head where the eyes and nose are',
      ],
      exampleSentences: [
        { en: 'My back hurts after sitting all day.', ko: '하루 종일 앉아 있으니 등이 아프다.' },
        { en: 'She lay on her back in the grass.', ko: '그녀는 풀밭에 등을 대고 누워 있었다.' },
      ],
    }
  ),
  word('Ball', '공', 1, 'noun',
    ['막대', '원', '상자', '컵', '바퀴', '동그라미', '타원', '피라미드', '큐브', '토러스'],
    tips({
      etymology: '고대 노르웨이어 bǫllr에서 유래',
      visual: '바닥에서 튀는 축구공',
      soundAlike: '볼 = 볼링(공 굴리기)',
      context: 'The child kicked the ball.',
      synonymAntonym: 'Syn: sphere',
    }),
    {
      definition: 'a round object used in games and sports',
      wordDistractors: ['sphere', 'globe', 'orb'],
      definitionDistractors: [
        'a straight thin piece of wood or metal',
        'a four-sided container with a lid',
        'a round vessel used for drinking',
      ],
      exampleSentences: [
        { en: 'The child kicked the ball.', ko: '아이가 공을 찼다.' },
        { en: 'The ball rolled under the table.', ko: '공이 탁자 밑으로 굴러갔다.' },
      ],
    }
  ),
  word('Bear', '곰', 1, 'noun',
    ['호랑이', '사자', '늑대', '여우', '코끼리', '원숭이', '캥거루', '판다', '코알라', '물범'],
    tips({
      etymology: '고대 영어 bera에서 유래',
      visual: '숲속에서 서 있는 갈색 곰',
      soundAlike: '베어 = 베어그릴스(곰 그릴스)',
      context: 'A bear was seen in the forest.',
      synonymAntonym: 'Syn: ursine',
    }),
    {
      definition: 'a large heavy animal with thick fur that eats meat and berries',
      wordDistractors: ['wolf', 'fox', 'deer'],
      definitionDistractors: [
        'a large wild cat with stripes',
        'the king of the jungle',
        'a wild animal that looks like a dog',
      ],
      exampleSentences: [
        { en: 'A bear was seen in the forest.', ko: '숲에서 곰이 목격되었다.' },
        { en: 'The bear caught a fish in the river.', ko: '곰이 강에서 물고기를 잡았다.' },
      ],
    }
  ),
  word('Boat', '보트', 1, 'noun',
    ['배', '기차', '자동차', '비행기', '오토바이', '자전거', '버스', '택시', '나룻배', '요트'],
    tips({
      etymology: '고대 영어 bāt에서 유래',
      visual: '바다 위를 미끄러지는 작은 보트',
      soundAlike: '보트 = 로우보트(노 젓는 보트)',
      context: 'We took a boat to the island.',
      synonymAntonym: 'Syn: vessel, craft',
    }),
    {
      definition: 'a small vehicle for traveling on water',
      wordDistractors: ['ship', 'vessel', 'craft'],
      definitionDistractors: [
        'a vehicle that runs on rails',
        'a vehicle with four wheels and an engine',
        'a vehicle that flies through the air',
      ],
      exampleSentences: [
        { en: 'We took a boat to the island.', ko: '우리는 배를 타고 섬으로 갔다.' },
        { en: 'They rowed the boat across the lake.', ko: '그들은 호수를 건너 배를 저었다.' },
      ],
    }
  ),
  word('Bone', '뼈', 1, 'noun',
    ['살', '피', '근육', '피부', '머리카락', '손톱', '치아', '장기', '관절', '허파'],
    tips({
      etymology: '고대 영어 bān에서 유래',
      visual: '개가 뼈를 물고 있는 모습',
      soundAlike: '본 = 본머스(뼈의 도시)',
      context: 'The dog buried the bone in the garden.',
      synonymAntonym: 'Syn: skeleton',
    }),
    {
      definition: 'any of the hard parts that form the framework of the body',
      wordDistractors: ['spine', 'skull', 'rib'],
      definitionDistractors: [
        'the red liquid that flows through the body',
        'the tissue that covers the body',
        'the soft tissue that moves the body',
      ],
      exampleSentences: [
        { en: 'The dog buried the bone in the garden.', ko: '개가 정원에 뼈를 묻었다.' },
        { en: 'He broke a bone in his hand.', ko: '그는 손에 뼈를 부쉈다.' },
      ],
    }
  ),
  word('Boy', '소년', 1, 'noun',
    ['소녀', '남자', '여자', '어린이', '아이', '청년', '아저씨', '할아버지', '형', '동생'],
    tips({
      etymology: '고대 영어 boi에서 유래',
      visual: '공을 차는 소년',
      soundAlike: '보이 = 보이스카웃(소년단)',
      context: 'The boy is playing in the park.',
      synonymAntonym: 'Syn: lad, Ant: girl',
    }),
    {
      definition: 'a male child or young man',
      wordDistractors: ['lad', 'youth', 'child'],
      definitionDistractors: [
        'a female child or young woman',
        'an adult male person',
        'a woman who is not married',
      ],
      exampleSentences: [
        { en: 'The boy is playing in the park.', ko: '소년이 공원에서 놀고 있다.' },
        { en: 'The little boy waved at his mother.', ko: '어린 소년이 엄마에게 손을 흔들었다.' },
      ],
    }
  ),
  word('Car', '자동차', 1, 'noun',
    ['버스', '트럭', '택시', '기차', '비행기', '배', '오토바이', '자전거', '경찰차', '구급차'],
    tips({
      etymology: '라틴어 carrus에서 유래',
      visual: '도로를 달리는 빨간색 자동차',
      soundAlike: '카 = 카풀(함께 타는 차)',
      context: 'She drives a car to work.',
      synonymAntonym: 'Syn: automobile, vehicle',
    }),
    {
      definition: 'a vehicle with four wheels and an engine for carrying passengers',
      wordDistractors: ['auto', 'vehicle', 'sedan'],
      definitionDistractors: [
        'a large vehicle for carrying many people',
        'a large vehicle for carrying goods',
        'a vehicle that flies through the sky',
      ],
      exampleSentences: [
        { en: 'She drives a car to work.', ko: '그녀는 회사에 차를 몰고 간다.' },
        { en: 'They parked the car in the garage.', ko: '그들은 차를 차고에 주차했다.' },
      ],
    }
  ),
  word('Chair', '의자', 1, 'noun',
    ['탁자', '소파', '침대', '선반', '책상', '벤치', '스툴', '등받이', '암체어', '책걸상'],
    tips({
      etymology: '고대 프랑스어 chaiere에서 유래',
      visual: '나무 의자에 앉은 사람',
      soundAlike: '체어 = 휠체어(바퀴 의자)',
      context: 'Please sit on the chair.',
      synonymAntonym: 'Syn: seat',
    }),
    {
      definition: 'a piece of furniture for one person to sit on with a back',
      wordDistractors: ['seat', 'stool', 'bench'],
      definitionDistractors: [
        'a piece of furniture with a flat top for holding things',
        'a long soft seat for several people',
        'a piece of furniture for sleeping on',
      ],
      exampleSentences: [
        { en: 'Please sit on the chair.', ko: '의자에 앉아 주세요.' },
        { en: 'He pulled up a chair to the table.', ko: '그는 탁자에 의자를 끌어왔다.' },
      ],
    }
  ),
  word('Cloud', '구름', 1, 'noun',
    ['하늘', '비', '눈', '바람', '태양', '달', '별', '안개', '연기', '증기'],
    tips({
      etymology: '고대 영어 clūd에서 유래',
      visual: '하늘에 떠 있는 흰 구름',
      soundAlike: '클라우드 = 클라우드 컴퓨팅',
      context: 'Dark clouds are gathering in the sky.',
      synonymAntonym: 'Syn: nebula',
    }),
    {
      definition: 'a white or gray mass of water vapor floating in the sky',
      wordDistractors: ['mist', 'fog', 'haze'],
      definitionDistractors: [
        'water that falls from the sky',
        'white frozen precipitation',
        'the space above the earth',
      ],
      exampleSentences: [
        { en: 'Dark clouds are gathering in the sky.', ko: '하늘에 먹구름이 몰려오고 있다.' },
        { en: 'A single cloud drifted across the sun.', ko: '구름 한 조각이 태양을 가로질러 떠다녔다.' },
      ],
    }
  ),
  word('Cook', '요리하다', 1, 'verb',
    ['먹다', '마시다', '썰다', '볶다', '끓이다', '굽다', '튀기다', '섞다', '짜다', '담그다'],
    tips({
      etymology: '라틴어 coquere에서 유래',
      visual: '냄비를 휘저으며 요리하는 모습',
      soundAlike: '쿡 = 쿡북(요리책)',
      context: 'My mother cooks dinner every night.',
      synonymAntonym: 'Syn: prepare, Ant: eat',
    }),
    {
      definition: 'to prepare food by heating it',
      wordDistractors: ['prepare', 'bake', 'fry'],
      definitionDistractors: [
        'to put food into the mouth and swallow',
        'to take liquid into the mouth',
        'to cut food into small pieces',
      ],
      exampleSentences: [
        { en: 'My mother cooks dinner every night.', ko: '엄마는 매일 밤 저녁을 요리한다.' },
        { en: 'He learned to cook when he lived alone.', ko: '그는 혼자 살 때 요리하는 법을 배웠다.' },
      ],
    }
  ),
  word('Cow', '소', 1, 'noun',
    ['말', '양', '염소', '돼지', '닭', '오리', '거위', '토끼', '당나귀', '낙타'],
    tips({
      etymology: '고대 영어 cū에서 유래',
      visual: '초원에서 풀을 뜯는 검은 소',
      soundAlike: '카우 = 카우벨(소의 방울)',
      context: 'The cow gives us milk.',
      synonymAntonym: 'Syn: cattle',
    }),
    {
      definition: 'a large farm animal kept for milk and meat',
      wordDistractors: ['cattle', 'ox', 'bull'],
      definitionDistractors: [
        'an animal used for riding and pulling carts',
        'an animal with wool used for meat and wool',
        'an animal with a curly tail raised for pork',
      ],
      exampleSentences: [
        { en: 'The cow gives us milk.', ko: '소는 우리에게 우유를 준다.' },
        { en: 'The cows grazed in the meadow.', ko: '소들이 목초지에서 풀을 뜯었다.' },
      ],
    }
  ),
  word('Day', '날', 1, 'noun',
    ['밤', '아침', '낮', '저녁', '시간', '주', '달', '년', '시간', '순간'],
    tips({
      etymology: '고대 영어 dæg에서 유래',
      visual: '해가 뜨는 아침의 하루',
      soundAlike: '데이 = 데이라이트(낮빛)',
      context: 'It is a beautiful day today.',
      synonymAntonym: 'Syn: daytime, Ant: night',
    }),
    {
      definition: 'a period of twenty-four hours',
      wordDistractors: ['night', 'week', 'month'],
      definitionDistractors: [
        'the dark part of the day when we sleep',
        'a period of seven days',
        'a unit of time equal to sixty minutes',
      ],
      exampleSentences: [
        { en: 'It is a beautiful day today.', ko: '오늘은 아름다운 날이다.' },
        { en: 'We spent the day at the beach.', ko: '우리는 해변에서 하루를 보냈다.' },
      ],
    }
  ),
  word('Desk', '책상', 1, 'noun',
    ['의자', '침대', '탁자', '선반', '서랍', '책장', '램프', '컴퓨터', '키보드', '모니터'],
    tips({
      etymology: '라틴어 discus에서 유래',
      visual: '책과 노트북이 놓인 책상',
      soundAlike: '데스크 = 데스크탑(책상 위)',
      context: 'I study at my desk every evening.',
      synonymAntonym: 'Syn: table, workspace',
    }),
    {
      definition: 'a piece of furniture with a flat top for writing or working',
      wordDistractors: ['table', 'workstation', 'bench'],
      definitionDistractors: [
        'a piece of furniture for sitting on',
        'a piece of furniture for sleeping',
        'a flat surface for eating meals',
      ],
      exampleSentences: [
        { en: 'I study at my desk every evening.', ko: '나는 매일 저녁 책상에서 공부한다.' },
        { en: 'Papers were scattered on the desk.', ko: '서류들이 책상 위에 흩어져 있었다.' },
      ],
    }
  ),
  word('Dry', '마른', 1, 'adjective',
    ['젖은', '습한', '축축한', '물기 있는', '비에 젖은', '이슬에 젖은', '땀에 젖은', '눈물에 젖은', '젖은', '습함'],
    tips({
      etymology: '고대 영어 drȳge에서 유래',
      visual: '비가 그친 후 마른 도로',
      soundAlike: '드라이 = 드라이기(말리는 기구)',
      context: 'The clothes are dry after washing.',
      synonymAntonym: 'Syn: arid, Ant: wet',
    }),
    {
      definition: 'free from moisture or liquid',
      wordDistractors: ['arid', 'parched', 'droughty'],
      definitionDistractors: [
        'covered or soaking with water',
        'having a lot of moisture in the air',
        'feeling or showing cold',
      ],
      exampleSentences: [
        { en: 'The clothes are dry after washing.', ko: '옷을 빨았더니 마르다.' },
        { en: 'Keep the soil dry in winter.', ko: '겨울에는 흙을 마르게 유지하라.' },
      ],
    }
  ),
  word('Ear', '귀', 1, 'noun',
    ['눈', '코', '입', '머리', '목', '얼굴', '턱', '볼', '이마', '입술'],
    tips({
      etymology: '고대 영어 ēare에서 유래',
      visual: '귀에 대고 소리를 듣는 모습',
      soundAlike: '이어 = 이어폰(귀에 끼는)',
      context: 'She whispered in his ear.',
      synonymAntonym: 'Syn: auricle',
    }),
    {
      definition: 'the organ of hearing on the side of the head',
      wordDistractors: ['auricle', 'lobe', 'eardrum'],
      definitionDistractors: [
        'the organ of sight',
        'the organ of smell',
        'the opening for eating and speaking',
      ],
      exampleSentences: [
        { en: 'She whispered in his ear.', ko: '그녀는 그의 귀에 속삭였다.' },
        { en: 'He has a ring in his ear.', ko: '그는 귀에 귀걸이를 하고 있다.' },
      ],
    }
  ),
  word('End', '끝', 1, 'noun',
    ['시작', '중간', '중앙', '처음', '첫째', '마지막', '끝', '종료', '완료', '결과'],
    tips({
      etymology: '고대 영어 ende에서 유래',
      visual: '선의 끝에 도달한 점',
      soundAlike: '엔드 = 엔드게임(끝나는 게임)',
      context: 'We reached the end of the road.',
      synonymAntonym: 'Syn: conclusion, Ant: beginning',
    }),
    {
      definition: 'the final part of something',
      wordDistractors: ['finish', 'conclusion', 'termination'],
      definitionDistractors: [
        'the point at which something begins',
        'the middle part of something',
        'the space between two points',
      ],
      exampleSentences: [
        { en: 'We reached the end of the road.', ko: '우리는 길의 끝에 도달했다.' },
        { en: 'The movie has a happy end.', ko: '그 영화는 해피엔딩이다.' },
      ],
    }
  ),
  word('Farm', '농장', 1, 'noun',
    ['도시', '마을', '학교', '공장', '병원', '시장', '공원', '숲', '산', '바다'],
    tips({
      etymology: '라틴어 firma에서 유래',
      visual: '논과 밭이 있는 시골 농장',
      soundAlike: '팜 = 팜하우스(농장의 집)',
      context: 'They live on a farm in the countryside.',
      synonymAntonym: 'Syn: ranch, plantation',
    }),
    {
      definition: 'land used for growing crops and raising animals',
      wordDistractors: ['ranch', 'plantation', 'estate'],
      definitionDistractors: [
        'a large area with many buildings and people',
        'a place where children go to learn',
        'a place where things are made in factories',
      ],
      exampleSentences: [
        { en: 'They live on a farm in the countryside.', ko: '그들은 시골 농장에서 살고 있다.' },
        { en: 'The farm produces organic vegetables.', ko: '그 농장은 유기농 채소를 생산한다.' },
      ],
    }
  ),
  word('Fire', '불', 1, 'noun',
    ['물', '흙', '바람', '공기', '연기', '재', '불꽃', '숯', '나무', '땔감'],
    tips({
      etymology: '고대 영어 fȳr에서 유래',
      visual: '모닥불에서 타오르는 불꽃',
      soundAlike: '파이어 = 파이어플레이스(벽난로)',
      context: 'The fire kept us warm at night.',
      synonymAntonym: 'Syn: flame, blaze',
    }),
    {
      definition: 'the hot light and flames produced by burning',
      wordDistractors: ['flame', 'blaze', 'inferno'],
      definitionDistractors: [
        'the liquid that falls as rain',
        'the natural movement of air',
        'the invisible gas we breathe',
      ],
      exampleSentences: [
        { en: 'The fire kept us warm at night.', ko: '불이 밤에 우리를 따뜻하게 해주었다.' },
        { en: 'They sat around the fire telling stories.', ko: '그들은 불 주위에 앉아 이야기를 나눴다.' },
      ],
    }
  ),
  word('Fly', '날다', 1, 'verb',
    ['걷다', '달리다', '앉다', '서다', '뛰다', '헤엄치다', '미끄러지다', '등산하다', '내려가다', '올라가다'],
    tips({
      etymology: '고대 영어 flēogan에서 유래',
      visual: '하늘을 나는 새',
      soundAlike: '플라이 = 버터플라이(나비)',
      context: 'Birds can fly in the sky.',
      synonymAntonym: 'Syn: soar, glide',
    }),
    {
      definition: 'to move through the air using wings',
      wordDistractors: ['soar', 'glide', 'hover'],
      definitionDistractors: [
        'to move on foot at a normal pace',
        'to move quickly on foot',
        'to move through water using arms and legs',
      ],
      exampleSentences: [
        { en: 'Birds can fly in the sky.', ko: '새들은 하늘을 날 수 있다.' },
        { en: 'The plane will fly to Seoul tomorrow.', ko: '그 비행기는 내일 서울로 날아간다.' },
      ],
    }
  ),
  word('Foot', '발', 1, 'noun',
    ['손', '팔', '다리', '무릎', '발목', '발가락', '발바닥', '손바닥', '손가락', '손목'],
    tips({
      etymology: '고대 영어 fōt에서 유래',
      visual: '걷는 사람의 발',
      soundAlike: '풋 = 풋볼(발로 차는 공)',
      context: 'My foot hurts after the long walk.',
      synonymAntonym: 'Syn: paw',
    }),
    {
      definition: 'the lower part of the leg below the ankle',
      wordDistractors: ['paw', 'sole', 'heel'],
      definitionDistractors: [
        'the part at the end of the arm',
        'the part of the leg that bends',
        'the limb from the hip to the ankle',
      ],
      exampleSentences: [
        { en: 'My foot hurts after the long walk.', ko: '긴 산책 후에 발이 아프다.' },
        { en: 'She stepped on my foot by accident.', ko: '그녀가 실수로 내 발을 밟았다.' },
      ],
    }
  ),
  word('Fox', '여우', 1, 'noun',
    ['늑대', '곰', '토끼', '다람쥐', '너구리', '고양이', '개', '표범', '치타', '하이에나'],
    tips({
      etymology: '고대 영어 fox에서 유래',
      visual: '빨간 털과 뾰족한 귀의 여우',
      soundAlike: '폭스 = 폭스베리(여우 같은)',
      context: 'A fox ran across the road.',
      synonymAntonym: 'Syn: vulpine',
    }),
    {
      definition: 'a wild animal with reddish fur and a bushy tail',
      wordDistractors: ['wolf', 'coyote', 'jackal'],
      definitionDistractors: [
        'a wild animal that looks like a dog',
        'a large brown animal that lives in forests',
        'a small animal with long ears that hops',
      ],
      exampleSentences: [
        { en: 'A fox ran across the road.', ko: '여우 한 마리가 길을 가로질러 달렸다.' },
        { en: 'The fox has a thick tail in winter.', ko: '여우는 겨울에 털이 많은 꼬리를 갖는다.' },
      ],
    }
  ),
  word('Full', '가득한', 1, 'adjective',
    ['비어 있는', '반쯤', '절반', '조금', '적은', '부족한', '텅 빈', '공허한', '덜 찬', '여유 있는'],
    tips({
      etymology: '고대 영어 full에서 유래',
      visual: '물이 가득 찬 컵',
      soundAlike: '풀 = 풀하우스(만석)',
      context: 'The theater was full of people.',
      synonymAntonym: 'Syn: complete, Ant: empty',
    }),
    {
      definition: 'containing as much as possible',
      wordDistractors: ['filled', 'packed', 'crowded'],
      definitionDistractors: [
        'containing nothing',
        'only partly filled',
        'having very little of something',
      ],
      exampleSentences: [
        { en: 'The theater was full of people.', ko: '극장은 사람으로 가득했다.' },
        { en: 'I am full after that big meal.', ko: '그 큰 식사 후에 배가 부르다.' },
      ],
    }
  ),
  word('Glass', '유리', 1, 'noun',
    ['플라스틱', '금속', '나무', '돌', '종이', '천', '고무', '흙', '대리석', '세라믹'],
    tips({
      etymology: '고대 게르만어 glasam에서 유래',
      visual: '빛이 통과하는 투명한 유리창',
      soundAlike: '글래스 = 글래스슬리퍼(유리 구두)',
      context: 'Be careful not to break the glass.',
      synonymAntonym: 'Syn: pane',
    }),
    {
      definition: 'a hard transparent material used for windows and containers',
      wordDistractors: ['crystal', 'pane', 'lens'],
      definitionDistractors: [
        'a flexible synthetic material',
        'a hard shiny metal like iron',
        'the substance that trees are made of',
      ],
      exampleSentences: [
        { en: 'Be careful not to break the glass.', ko: '유리를 깨지 않도록 조심해라.' },
        { en: 'She filled the glass with water.', ko: '그녀는 컵에 물을 부었다.' },
      ],
    }
  ),
  // Level 2
  word('Above', '위에', 2, 'preposition',
    ['아래', '옆', '앞', '뒤', '사이', '가운데', '밑', '아래에', '앞에', '뒤에'],
    tips({
      etymology: '고대 영어 abufan에서 유래',
      visual: '구름 위에 떠 있는 비행기',
      soundAlike: '어보브 = 어보브올(모든 것 위에)',
      context: 'The moon is above the mountains.',
      synonymAntonym: 'Syn: over, Ant: below',
    }),
    {
      definition: 'in or to a higher position than',
      wordDistractors: ['over', 'beyond', 'up'],
      definitionDistractors: [
        'in or to a lower position than',
        'at the same level as',
        'further back than',
      ],
      exampleSentences: [
        { en: 'The moon is above the mountains.', ko: '달이 산 위에 있다.' },
        { en: 'The temperature is above zero.', ko: '온도가 영도 위이다.' },
      ],
    }
  ),
  word('Across', '건너편', 2, 'preposition',
    ['이쪽', '저쪽', '가운데', '모서리', '끝', '시작', '중간', '반대편', '옆', '근처'],
    tips({
      etymology: '고대 영어 on + crūce에서 유래',
      visual: '다리를 건너 건너편으로 가는 모습',
      soundAlike: '어크로스 = 크로스(건너가다)',
      context: 'There is a store across the street.',
      synonymAntonym: 'Syn: over, beyond',
    }),
    {
      definition: 'from one side to the other of',
      wordDistractors: ['over', 'through', 'beyond'],
      definitionDistractors: [
        'on this side',
        'in the middle of',
        'at the edge of something',
      ],
      exampleSentences: [
        { en: 'There is a store across the street.', ko: '거리 건너편에 가게가 있다.' },
        { en: 'She walked across the bridge.', ko: '그녀는 다리를 건너 걸었다.' },
      ],
    }
  ),
  word('Alive', '살아 있는', 2, 'adjective',
    ['죽은', '없는', '사라진', '끝난', '소멸한', '멸종한', '쇠약한', '병든', '죽어가는', '무생물'],
    tips({
      etymology: 'on + life의 조합',
      visual: '뛰어다니는 활기찬 아이',
      soundAlike: '어라이브 = 얼라이브(살아 있다)',
      context: 'All the fish in the tank are still alive.',
      synonymAntonym: 'Syn: living, Ant: dead',
    }),
    {
      definition: 'living and not dead',
      wordDistractors: ['living', 'breathing', 'existing'],
      definitionDistractors: [
        'no longer living',
        'not present or existing',
        'unable to move or feel',
      ],
      exampleSentences: [
        { en: 'All the fish in the tank are still alive.', ko: '수조의 모든 물고기가 아직 살아 있다.' },
        { en: 'I feel alive when I run in the morning.', ko: '아침에 달리면 살아 있는 느낌이 든다.' },
      ],
    }
  ),
  word('Alone', '혼자', 2, 'adjective',
    ['함께', '여럿', '단체', '둘', '세', '무리', '패', '그룹', '가족', '친구'],
    tips({
      etymology: 'all + one의 조합',
      visual: '넓은 공간에 혼자 서 있는 사람',
      soundAlike: '얼로운 = 얼론타임(혼자 있는 시간)',
      context: 'She likes to read alone.',
      synonymAntonym: 'Syn: solitary, Ant: together',
    }),
    {
      definition: 'without any other people',
      wordDistractors: ['solitary', 'solo', 'single'],
      definitionDistractors: [
        'in the company of others',
        'with another person',
        'as part of a group',
      ],
      exampleSentences: [
        { en: 'She likes to read alone.', ko: '그녀는 혼자 읽는 것을 좋아한다.' },
        { en: 'He lives alone in a small apartment.', ko: '그는 작은 아파트에서 혼자 산다.' },
      ],
    }
  ),
  word('Basket', '바구니', 2, 'noun',
    ['상자', '가방', '통', '병', '자루', '컵', '접시', '그릇', '케이스', '수납함'],
    tips({
      etymology: '라틴어 bascauda에서 유래',
      visual: '과일이 담긴 나무바구니',
      soundAlike: '바스켓 = 바스켓볼(공넣기)',
      context: 'She put the fruit in the basket.',
      synonymAntonym: 'Syn: hamper',
    }),
    {
      definition: 'a container made of woven material for holding things',
      wordDistractors: ['hamper', 'bin', 'crate'],
      definitionDistractors: [
        'a container with a lid for storing things',
        'a flexible bag for carrying things',
        'a narrow container with a narrow neck',
      ],
      exampleSentences: [
        { en: 'She put the fruit in the basket.', ko: '그녀는 과일을 바구니에 넣었다.' },
        { en: 'The picnic basket was full of sandwiches.', ko: '소풍 바구니에는 샌드위치가 가득했다.' },
      ],
    }
  ),
  word('Beach', '해변', 2, 'noun',
    ['산', '숲', '강', '호수', '계단', '길', '공원', '섬', '해안', '언덕'],
    tips({
      etymology: '고대 영어 bæce에서 유래',
      visual: '파도가 밀려오는 모래 해변',
      soundAlike: '비치 = 비치볼(해변 공)',
      context: 'We went to the beach last summer.',
      synonymAntonym: 'Syn: shore, coast',
    }),
    {
      definition: 'an area of sand or pebbles beside the sea',
      wordDistractors: ['shore', 'coast', 'seaside'],
      definitionDistractors: [
        'a large natural elevation of the earth',
        'a large area covered with trees',
        'a natural flowing body of water',
      ],
      exampleSentences: [
        { en: 'We went to the beach last summer.', ko: '우리는 지난 여름에 해변에 갔다.' },
        { en: 'Children were playing on the beach.', ko: '아이들이 해변에서 놀고 있었다.' },
      ],
    }
  ),
  word('Believe', '믿다', 2, 'verb',
    ['의심하다', '부정하다', '거부하다', '반대하다', '회의하다', '불신하다', '의문을 갖다', '흔들다', '놀라다', '불가사의하다'],
    tips({
      etymology: '고대 영어 belēfan에서 유래',
      visual: '손을 맞잡고 믿음을 나누는 모습',
      soundAlike: '빌리브 = 빌리버(믿는 사람)',
      context: 'I believe you can do it.',
      synonymAntonym: 'Syn: trust, Ant: doubt',
    }),
    {
      definition: 'to accept that something is true or real',
      wordDistractors: ['trust', 'accept', 'credit'],
      definitionDistractors: [
        'to feel uncertain about something',
        'to say no to something',
        'to reject an idea or request',
      ],
      exampleSentences: [
        { en: 'I believe you can do it.', ko: '나는 네가 할 수 있다고 믿는다.' },
        { en: 'Do you believe in ghosts?', ko: '당신은 유령을 믿나요?' },
      ],
    }
  ),
  word('Bottle', '병', 2, 'noun',
    ['병', '컵', '통', '상자', '자루', '캔', '수조', '항아리', '그릇', '주전자'],
    tips({
      etymology: '라틴어 buttis에서 유래',
      visual: '물이 담긴 투명한 유리병',
      soundAlike: '바틀 = 바틀넥(병목)',
      context: 'Please pass me the water bottle.',
      synonymAntonym: 'Syn: flask',
    }),
    {
      definition: 'a narrow container with a neck for holding liquids',
      wordDistractors: ['flask', 'jar', 'container'],
      definitionDistractors: [
        'a small open container for drinking',
        'a large round container',
        'a box for storing things',
      ],
      exampleSentences: [
        { en: 'Please pass me the water bottle.', ko: '물병을 건네주세요.' },
        { en: 'She threw the empty bottle in the recycling bin.', ko: '그녀는 빈 병을 재활용함에 버렸다.' },
      ],
    }
  ),
  word('Bottom', '바닥', 2, 'noun',
    ['꼭대기', '중간', '표면', '앞', '뒤', '끝', '시작', '가장자리', '모서리', '측면'],
    tips({
      etymology: '고대 영어 botm에서 유래',
      visual: '바다의 깊은 바닥',
      soundAlike: '바텀 = 바텀라인(최소선)',
      context: 'The keys fell to the bottom of the bag.',
      synonymAntonym: 'Syn: base, Ant: top',
    }),
    {
      definition: 'the lowest part of something',
      wordDistractors: ['base', 'floor', 'foundation'],
      definitionDistractors: [
        'the highest point of something',
        'the point halfway between top and bottom',
        'the line where two surfaces meet',
      ],
      exampleSentences: [
        { en: 'The keys fell to the bottom of the bag.', ko: '열쇠가 가방 바닥에 떨어졌다.' },
        { en: 'We swam to the bottom of the pool.', ko: '우리는 수영장 바닥까지 헤엄쳤다.' },
      ],
    }
  ),
  word('Bright', '밝은', 2, 'adjective',
    ['어두운', '흐린', '침침한', '그늘진', '음침한', '우울한', '흐릿한', '희미한', '안개낀', '눈부신'],
    tips({
      etymology: '고대 영어 beorht에서 유래',
      visual: '햇빛이 쏟아지는 밝은 방',
      soundAlike: '브라이트 = 브라이트아이디어(밝은 생각)',
      context: 'The sun is very bright today.',
      synonymAntonym: 'Syn: luminous, Ant: dark',
    }),
    {
      definition: 'giving out or reflecting much light',
      wordDistractors: ['luminous', 'radiant', 'brilliant'],
      definitionDistractors: [
        'having little or no light',
        'covered with clouds',
        'lacking warmth or cheer',
      ],
      exampleSentences: [
        { en: 'The sun is very bright today.', ko: '오늘 태양이 매우 밝다.' },
        { en: 'She has a bright future ahead.', ko: '그녀 앞에는 밝은 미래가 있다.' },
      ],
    }
  ),
  word('Brother', '형제', 2, 'noun',
    ['자매', '누나', '오빠', '여동생', '남동생', '아버지', '어머니', '삼촌', '고모', '조카'],
    tips({
      etymology: '고대 영어 brōthor에서 유래',
      visual: '나란히 서 있는 두 형제',
      soundAlike: '브라더 = 브라더후드(형제애)',
      context: 'My brother is two years older than me.',
      synonymAntonym: 'Syn: sibling',
    }),
    {
      definition: 'a boy or man who has the same parents as another',
      wordDistractors: ['sibling', 'sister', 'kin'],
      definitionDistractors: [
        'a girl or woman who has the same parents',
        'a male parent',
        'a female parent',
      ],
      exampleSentences: [
        { en: 'My brother is two years older than me.', ko: '우리 형은 나보다 두 살 많다.' },
        { en: 'He has two brothers and one sister.', ko: '그는 형제가 둘이고 자매가 하나 있다.' },
      ],
    }
  ),
  word('Building', '건물', 2, 'noun',
    ['집', '학교', '병원', '가게', '공장', '탑', '다리', '도로', '공원', '정원'],
    tips({
      etymology: 'build + ing에서 유래',
      visual: '도시에 높이 솟은 건물들',
      soundAlike: '빌딩 = 옥스포드빌딩',
      context: 'That building has 50 floors.',
      synonymAntonym: 'Syn: structure, edifice',
    }),
    {
      definition: 'a structure with walls and a roof',
      wordDistractors: ['structure', 'edifice', 'construction'],
      definitionDistractors: [
        'a place where people live',
        'a place where children learn',
        'a path for vehicles and pedestrians',
      ],
      exampleSentences: [
        { en: 'That building has 50 floors.', ko: '그 건물은 50층이다.' },
        { en: 'The office building is under construction.', ko: '사무실 건물이 공사 중이다.' },
      ],
    }
  ),
  word('Butter', '버터', 2, 'noun',
    ['빵', '잼', '치즈', '우유', '생크림', '마가린', '요거트', '계란', '밀가루', '설탕'],
    tips({
      etymology: '라틴어 butyrum에서 유래',
      visual: '빵에 발라진 노란 버터',
      soundAlike: '버터 = 버터플라이(나비)',
      context: 'Spread some butter on the toast.',
      synonymAntonym: 'Syn: spread',
    }),
    {
      definition: 'a yellow fat made from cream used in cooking',
      wordDistractors: ['spread', 'margarine', 'dairy'],
      definitionDistractors: [
        'baked food made from flour',
        'sweet fruit preserve',
        'white liquid from cows',
      ],
      exampleSentences: [
        { en: 'Spread some butter on the toast.', ko: '토스트에 버터를 발라라.' },
        { en: 'The recipe calls for two tablespoons of butter.', ko: '레시피에는 버터 2스푼이 필요하다.' },
      ],
    }
  ),
  word('Candle', '양초', 2, 'noun',
    ['라이터', '성냥', '횃불', '전등', '램프', '조명', '불꽃', '연기', '왁스', '심지'],
    tips({
      etymology: '라틴어 candela에서 유래',
      visual: '생일 케이크에 꽂힌 양초',
      soundAlike: '캔들 = 캔들라이트(캔들빛)',
      context: 'She lit a candle for the dinner.',
      synonymAntonym: 'Syn: taper',
    }),
    {
      definition: 'a stick of wax with a wick that gives light when lit',
      wordDistractors: ['taper', 'torch', 'lamp'],
      definitionDistractors: [
        'a device for producing a flame',
        'a small stick for lighting fire',
        'an electric light fixture',
      ],
      exampleSentences: [
        { en: 'She lit a candle for the dinner.', ko: '그녀는 저녁 식사를 위해 양초를 켰다.' },
        { en: 'Blow out the candles and make a wish.', ko: '양초를 불고 소원을 빌어라.' },
      ],
    }
  ),
  word('Careful', '조심하는', 2, 'adjective',
    ['부주의한', '경솔한', '무모한', '성급한', '조급한', '대충하는', '소홀한', '무관심한', '무성의한', '안일한'],
    tips({
      etymology: 'care + ful의 조합',
      visual: '유리병을 조심스럽게 들고 있는 손',
      soundAlike: '케어풀 = 케어풀니스(조심성)',
      context: 'Be careful when you cross the street.',
      synonymAntonym: 'Syn: cautious, Ant: careless',
    }),
    {
      definition: 'giving attention to avoid danger or error',
      wordDistractors: ['cautious', 'prudent', 'attentive'],
      definitionDistractors: [
        'not paying attention to what you do',
        'acting without thinking',
        'doing things in a hurry',
      ],
      exampleSentences: [
        { en: 'Be careful when you cross the street.', ko: '길을 건널 때 조심해라.' },
        { en: 'She is very careful with her money.', ko: '그녀는 돈을 매우 조심스럽게 쓴다.' },
      ],
    }
  ),
  word('Center', '중앙', 2, 'noun',
    ['끝', '가장자리', '모서리', '벽', '바깥', '주변', '외곽', '테두리', '경계', '한쪽'],
    tips({
      etymology: '라틴어 centrum에서 유래',
      visual: '원의 정중앙에 있는 점',
      soundAlike: '센터 = 센터오브어텐션(관심의 중심)',
      context: 'The statue stands in the center of the square.',
      synonymAntonym: 'Syn: middle, core',
    }),
    {
      definition: 'the middle point of something',
      wordDistractors: ['middle', 'core', 'heart'],
      definitionDistractors: [
        'the final part of something',
        'the outer edge of something',
        'the line where two surfaces meet',
      ],
      exampleSentences: [
        { en: 'The statue stands in the center of the square.', ko: '동상이 광장 중앙에 서 있다.' },
        { en: 'Put the vase in the center of the table.', ko: '꽃병을 탁자 중앙에 놓아라.' },
      ],
    }
  ),
  word('Circle', '원', 2, 'noun',
    ['사각형', '삼각형', '타원', '선', '점', '다각형', '곡선', '직선', '나선', '물결'],
    tips({
      etymology: '라틴어 circulus에서 유래',
      visual: '완벽한 원을 그리는 컴퍼스',
      soundAlike: '서클 = 서클오브트러스트(신뢰의 원)',
      context: 'Draw a circle with a pencil.',
      synonymAntonym: 'Syn: round, ring',
    }),
    {
      definition: 'a round shape with no corners',
      wordDistractors: ['ring', 'round', 'loop'],
      definitionDistractors: [
        'a shape with four sides',
        'a shape with three sides',
        'a straight mark',
      ],
      exampleSentences: [
        { en: 'Draw a circle with a pencil.', ko: '연필로 원을 그려라.' },
        { en: 'The children sat in a circle.', ko: '아이들이 원형으로 앉았다.' },
      ],
    }
  ),
  word('Corner', '모서리', 2, 'noun',
    ['중앙', '가운데', '평면', '직선', '넓은 곳', '열린 공간', '원', '중심', '내부', '표면'],
    tips({
      etymology: '라틴어 cornū에서 유래',
      visual: '두 벽이 만나는 모서리',
      soundAlike: '코너 = 코너스토어(구석 가게)',
      context: 'The cat is hiding in the corner.',
      synonymAntonym: 'Syn: angle, edge',
    }),
    {
      definition: 'the point where two lines or surfaces meet',
      wordDistractors: ['angle', 'edge', 'nook'],
      definitionDistractors: [
        'the middle of something',
        'the outer limit of something',
        'a round shape',
      ],
      exampleSentences: [
        { en: 'The cat is hiding in the corner.', ko: '고양이가 구석에 숨어 있다.' },
        { en: 'There is a store on the corner.', ko: '모퉁이에 가게가 있다.' },
      ],
    }
  ),
  word('Cover', '덮다', 2, 'verb',
    ['열다', '벗기다', '노출하다', '드러내다', '공개하다', '펼치다', '제거하다', '치우다', '열어젖히다', '풀다'],
    tips({
      etymology: '라틴어 cooperire에서 유래',
      visual: '이불로 몸을 덮는 모습',
      soundAlike: '커버 = 커버스토리(표지 기사)',
      context: 'Please cover the food with a lid.',
      synonymAntonym: 'Syn: conceal, Ant: uncover',
    }),
    {
      definition: 'to put something over or in front of something',
      wordDistractors: ['conceal', 'hide', 'protect'],
      definitionDistractors: [
        'to move something so it is no longer closed',
        'to make something visible',
        'to take something away',
      ],
      exampleSentences: [
        { en: 'Please cover the food with a lid.', ko: '음식을 뚜껑으로 덮어 주세요.' },
        { en: 'Snow covered the ground overnight.', ko: '밤 사이에 눈이 땅을 덮었다.' },
      ],
    }
  ),
  word('Danger', '위험', 2, 'noun',
    ['안전', '평화', '고요', '평온', '보호', '안전지대', '평지', '안심', '조용함', '편안함'],
    tips({
      etymology: '고대 프랑스어 dangier에서 유래',
      visual: '빨간 경고 표지판',
      soundAlike: '데인저 = 데인저존(위험지대)',
      context: 'There is danger in the deep water.',
      synonymAntonym: 'Syn: risk, hazard, Ant: safety',
    }),
    {
      definition: 'the possibility of harm or injury',
      wordDistractors: ['risk', 'hazard', 'threat'],
      definitionDistractors: [
        'freedom from harm or risk',
        'a state of calm and quiet',
        'action taken to guard someone',
      ],
      exampleSentences: [
        { en: 'There is danger in the deep water.', ko: '깊은 물에는 위험이 있다.' },
        { en: 'The sign warned of danger ahead.', ko: '표지판에 앞에 위험이 있다고 경고했다.' },
      ],
    }
  ),
  word('East', '동쪽', 2, 'noun',
    ['서쪽', '남쪽', '북쪽', '남동', '남서', '북동', '북서', '중앙', '양쪽', '반대편'],
    tips({
      etymology: '고대 영어 ēast에서 유래',
      visual: '해가 뜨는 동쪽 하늘',
      soundAlike: '이스트 = 이스트코스트(동해안)',
      context: 'The sun rises in the east.',
      synonymAntonym: 'Syn: orient',
    }),
    {
      definition: 'the direction where the sun rises',
      wordDistractors: ['orient', 'eastward', 'oriental'],
      definitionDistractors: [
        'the direction where the sun sets',
        'the direction toward the North Pole',
        'the direction toward the South Pole',
      ],
      exampleSentences: [
        { en: 'The sun rises in the east.', ko: '태양은 동쪽에서 뜬다.' },
        { en: 'They traveled east for three days.', ko: '그들은 동쪽으로 사흘 동안 여행했다.' },
      ],
    }
  ),
  word('Empty', '비어 있는', 2, 'adjective',
    ['가득한', '꽉 찬', '만원인', '충만한', '풍부한', '넉넉한', '바쁜', '사람이 많은', '물건이 많은', '혼잡한'],
    tips({
      etymology: '고대 영어 ǣmettig에서 유래',
      visual: '물통이 비어 있는 모습',
      soundAlike: '엠티 = 엠티네스(공허함)',
      context: 'The room was empty when I arrived.',
      synonymAntonym: 'Syn: vacant, Ant: full',
    }),
    {
      definition: 'containing nothing',
      wordDistractors: ['vacant', 'hollow', 'bare'],
      definitionDistractors: [
        'containing as much as possible',
        'having many people or things',
        'occupied or in use',
      ],
      exampleSentences: [
        { en: 'The room was empty when I arrived.', ko: '내가 도착했을 때 방이 비어 있었다.' },
        { en: 'The glass is empty. Would you like more?', ko: '컵이 비었어요. 더 드시겠어요?' },
      ],
    }
  ),
  word('Enjoy', '즐기다', 2, 'verb',
    ['싫어하다', '피하다', '거부하다', '지루해하다', '불평하다', '불만족하다', '우울해하다', '슬퍼하다', '화나다', '짜증내다'],
    tips({
      etymology: 'en + joy의 조합',
      visual: '웃으며 파티를 즐기는 사람들',
      soundAlike: '인조이 = 인조이어블(즐거운)',
      context: 'I enjoy reading books in my free time.',
      synonymAntonym: 'Syn: like, relish, Ant: dislike',
    }),
    {
      definition: 'to take pleasure in something',
      wordDistractors: ['like', 'relish', 'savor'],
      definitionDistractors: [
        'to feel dislike for something',
        'to stay away from something',
        'to say no to something',
      ],
      exampleSentences: [
        { en: 'I enjoy reading books in my free time.', ko: '나는 여가 시간에 책 읽는 것을 즐긴다.' },
        { en: 'Did you enjoy the concert?', ko: '콘서트 즐기셨나요?' },
      ],
    }
  ),
  word('Enter', '들어가다', 2, 'verb',
    ['나가다', '떠나다', '외출하다', '벗어나다', '탈출하다', '퇴장하다', '건너가다', '지나가다', '우회하다', '피하다'],
    tips({
      etymology: '라틴어 intrare에서 유래',
      visual: '문을 열고 방에 들어가는 모습',
      soundAlike: '엔터 = 엔터키(입력 키)',
      context: 'Please enter the room quietly.',
      synonymAntonym: 'Syn: come in, Ant: exit',
    }),
    {
      definition: 'to come or go into a place',
      wordDistractors: ['invade', 'access', 'step in'],
      definitionDistractors: [
        'to go or come out of a place',
        'to go away from a place',
        'to move past something',
      ],
      exampleSentences: [
        { en: 'Please enter the room quietly.', ko: '조용히 방에 들어가 주세요.' },
        { en: 'You must enter your password to continue.', ko: '계속하려면 비밀번호를 입력해야 한다.' },
      ],
    }
  ),
  word('Even', '심지어', 2, 'adverb',
    ['특히', '오히려', '반대로', '거의', '대략', '대체로', '주로', '대부분', '몇몇', '일부'],
    tips({
      etymology: '고대 영어 efen에서 유래',
      visual: '균형 잡힌 저울의 두 접시',
      soundAlike: '이븐 = 이븐소(심지어 그래서)',
      context: 'Even a child can understand this.',
      synonymAntonym: 'Syn: still, yet',
    }),
    {
      definition: 'used to emphasize something surprising or extreme',
      wordDistractors: ['still', 'yet', 'indeed'],
      definitionDistractors: [
        'to a high degree',
        'in a way that is not exact',
        'for the most part',
      ],
      exampleSentences: [
        { en: 'Even a child can understand this.', ko: '심지어 아이도 이것을 이해할 수 있다.' },
        { en: 'He did not even say goodbye.', ko: '그는 심지어 작별 인사도 하지 않았다.' },
      ],
    }
  ),
];
