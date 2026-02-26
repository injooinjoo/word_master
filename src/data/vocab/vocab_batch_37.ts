import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch37: VocabItem[] = [
  word('graduate', '졸업하다', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'gradus(단계)\'에서 유래하여, 학업의 특정 단계를 마치고 학위를 받는 과정을 의미합니다.',
      visual: '학사모를 공중으로 던지며 졸업장을 품에 안고 있는 학생들의 환호성을 상상해 보세요.',
      soundAlike: '\'그래, 주었지(graduate)\'라고 발음하며 학교가 학생에게 학위를 주었다고 연상해 보세요.',
      context: '주로 대학이나 고등학교 과정을 성공적으로 마쳤을 때 사용하며, 특정 등급을 매기거나 분류할 때도 쓰입니다.',
      synonymAntonym: '학업을 마치는 \'finish\'와 유사하며, 중도에 그만두는 \'drop out\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To successfully complete a course of study and receive an academic degree or diploma.',
      synonyms: ['complete', 'finish', 'qualify'],
      antonyms: ['fail', 'withdraw', 'underperform'],
      exampleSentences: [
        { en: 'She will receive her diploma when she finishes all her credits next spring.', ko: '그녀는 내년 봄에 모든 학점을 이수하면 졸업장을 수여받을 것입니다.' },
        { en: 'The university decided to confer honorary degrees upon the distinguished guests.', ko: '대학교는 귀빈들에게 명예 학위를 수여하기로 결정했습니다.' },
      ],
      wordDistractors: ['gradual', 'gratitude', 'grandeur'],
      definitionDistractors: [
        'to slowly decrease in intensity or strength over time',
        'to formally withdraw from a professional organization',
        'to assign a numerical ranking to a set of items',
      ],
    }
  ),
  word('grain', '곡물', 4, 'noun',
    ['회기', '고생', '조리법', '실험[실습]실', '엉덩이', '진행', '예방조치, 예방책', '실례', '베토벤', '(만날) 약속, 임명'],
    tips({
      etymology: '라틴어 \'granum\'에서 유래했으며, 이는 씨앗이나 작은 알갱이를 의미합니다.',
      visual: '황금빛 논밭에서 벼 이삭이 바람에 흔들리며 낱알이 떨어지는 모습을 상상해 보세요.',
      soundAlike: '\'그레인\' 발음이 \'그레잇(Great)\'과 비슷하니, 수확량이 좋아 기분이 좋은 상황을 떠올려 보세요.',
      context: '식생활뿐만 아니라 \'a grain of salt(액면 그대로 믿지 않음)\'처럼 아주 적은 양을 비유할 때도 쓰입니다.',
      synonymAntonym: 'cereal이나 kernel과 같은 유의어와 함께 묶어서 식물 관련 어휘로 외우면 효과적입니다.',
    }),
    {
      definition: 'The small, hard seeds of food plants such as wheat, corn, or rice.',
      synonyms: ['cereal', 'kernel', 'particle'],
      antonyms: ['whole', 'mass', 'bulk'],
      exampleSentences: [
        { en: 'The farmers harvested a record amount of grain this autumn.', ko: '농부들은 이번 가을에 기록적인 양의 곡물을 수확했습니다.' },
        { en: 'Whole grain bread is generally considered healthier than white bread.', ko: '통곡물 빵은 일반적으로 흰 빵보다 더 건강에 좋은 것으로 여겨집니다.' },
      ],
      wordDistractors: ['groin', 'drain', 'grin'],
      definitionDistractors: [
        'a coarse powder made by grinding dried herbs or spices',
        'the direction or pattern in which wood fibers run',
        'a thin layer of paint applied to a canvas as a base coat',
      ],
    }
  ),
  word('grand', '위대한', 5, 'adjective',
    ['초라한', '사소한', '검소한', '평범한', '비좁은', '일시적인', '부족한', '조용한', '단순한', '열등한'],
    tips({
      etymology: '라틴어 grandis에서 유래하여 \'크고 위엄 있는\'이라는 의미를 뿌리에 두고 있습니다.',
      visual: '웅장한 궁전의 거대한 정문과 화려한 장식들을 상상해 보세요.',
      soundAlike: '그랜드 피아노의 웅장한 소리를 떠올리면 그 규모와 위대함을 쉽게 연결할 수 있습니다.',
      context: '단순히 크기가 큰 것뿐만 아니라 사회적 지위나 야망이 원대할 때도 자주 쓰입니다.',
      synonymAntonym: 'magnificent와 유사하며, 보잘것없는 상태를 뜻하는 humble과는 반대되는 개념입니다.',
    }),
    {
      definition: 'impressive in size, appearance, or general effect; ambitious in scale or scope',
      synonyms: ['magnificent', 'majestic', 'splendid'],
      antonyms: ['humble', 'modest', 'insignificant'],
      exampleSentences: [
        { en: 'The royal family hosted a banquet in the grand ballroom of the palace.', ko: '왕실 가족은 궁전의 웅장한 연회장에서 만찬을 개최했습니다.' },
        { en: 'His grand plan for the city\'s renovation impressed the entire council.', ko: '도시 혁신을 위한 그의 원대한 계획은 의회 전체에 깊은 인상을 남겼습니다.' },
      ],
      wordDistractors: ['grant', 'brand', 'grind'],
      definitionDistractors: [
        'relating to or involving a formal legal agreement between parties',
        'extremely small in physical size or microscopic in nature',
        'performed hastily without proper preparation or planning',
      ],
    }
  ),
  word('grandfather', '할아버지', 1, 'noun',
    ['할머니', '아버지', '어머니', '손자', '손녀', '삼촌', '고모', '사촌', '조카', '형제'],
    tips({
      etymology: '부모님보다 한 단계 더 위(grand)의 아버지(father)라는 뜻에서 유래되었습니다.',
      visual: '흰 수염을 기르고 안경을 쓰신 인자한 노신사의 모습을 상상해 보세요.',
      soundAlike: '그랜드(웅장한) 파더(아버지)라고 발음하며 집안의 큰 어른임을 기억하세요.',
      context: '가족 관계도에서 나를 기준으로 부모님의 아버지를 지칭할 때 사용합니다.',
      synonymAntonym: '비격식체인 grandpa와 대조되는 개념인 grandmother를 함께 익히면 좋습니다.',
    }),
    {
      definition: 'The father of one\'s father or mother.',
      synonyms: ['grandpa', 'granddad', 'gramps'],
      antonyms: ['grandson', 'granddaughter', 'grandchild'],
      exampleSentences: [
        { en: 'My mother\'s father is a very kind and wise man.', ko: '나의 외할아버지는 매우 친절하고 지혜로운 분이시다.' },
        { en: 'Every summer we visit the old farm where my male ancestor lives.', ko: '매년 여름 우리는 할아버지가 사시는 오래된 농장을 방문한다.' },
      ],
      wordDistractors: ['grandmother', 'grandchild', 'godfather'],
      definitionDistractors: [
        'the male head of a large corporation or organization',
        'an elderly man who serves as a community leader',
        'the oldest surviving member of any biological species',
      ],
    }
  ),
  word('grant', '수여하다', 6, 'verb',
    ['거절하다', '취소하다', '박탈하다', '금지하다', '회수하다', '반대하다', '보류하다', '중단하다', '삭감하다', '제한하다'],
    tips({
      etymology: '라틴어 \'credere(믿다)\'에서 유래하여 상대방의 요청이 타당하다고 믿고 허락해준다는 의미가 담겨 있습니다.',
      visual: '정부 관리가 연구원에게 커다란 연구비 수표를 건네며 고개를 끄덕이는 모습을 상상해 보세요.',
      soundAlike: '\'그란트\' 발음이 \'그란(큰) 것을 트(트여주다)\'와 비슷하다고 생각하면 수여하다의 의미를 쉽게 기억할 수 있습니다.',
      context: '주로 정부나 기관에서 권리, 허가, 자금 등을 공식적으로 부여하거나 승인할 때 자주 쓰입니다.',
      synonymAntonym: '허락하다를 뜻하는 bestow와 유사하며, 반대로 거절하다를 뜻하는 deny와 대조됩니다.',
    }),
    {
      definition: 'to give or allow something formally or officially',
      synonyms: ['bestow', 'confer', 'award'],
      antonyms: ['deny', 'refuse', 'withhold'],
      exampleSentences: [
        { en: 'The government decided to grant citizenship to all eligible applicants.', ko: '정부는 자격을 갖춘 모든 지원자에게 시민권을 수여하기로 결정했습니다.' },
        { en: 'The judge agreed to grant the defendant bail under strict conditions.', ko: '판사는 엄격한 조건 하에 피고인에게 보석을 허가하기로 동의했습니다.' },
      ],
      wordDistractors: ['grand', 'grunt', 'graft'],
      definitionDistractors: [
        'to forcefully take something away from someone without permission',
        'to publicly announce the results of an official investigation',
        'to lend money at a fixed interest rate over a set period',
      ],
    }
  ),
  word('grape', '포도', 2, 'noun',
    ['사과', '오렌지', '바나나', '딸기', '수박', '참외', '복숭아', '자두', '망고', '체리'],
    tips({
      etymology: '고대 프랑스어 \'grape\'에서 유래했으며, 원래는 열매를 따는 \'갈고리\'를 의미했습니다.',
      visual: '보라색이나 초록색 알갱이들이 송이송이 맺혀 있는 달콤한 과일을 상상해 보세요.',
      soundAlike: '\'그레이프\' 발음이 \'그래, 이 잎\' 밑에 숨은 포도송이라고 연상해 보세요.',
      context: '와인을 만드는 주재료이며 건포도로 말려 먹기도 하는 대표적인 덩굴 식물 열매입니다.',
      synonymAntonym: '베리류 과일들과 함께 묶어서 외우고, 가공되지 않은 생과일 상태를 기억하세요.',
    }),
    {
      definition: 'A small, round, smooth-skinned edible fruit that grows in clusters on a vine.',
      synonyms: ['berry', 'vine fruit', 'pomology item'],
      antonyms: ['vegetable', 'root', 'grain'],
      exampleSentences: [
        { en: 'The farmer harvested a large bunch of purple fruit from the vine.', ko: '농부는 덩굴에서 커다란 보라색 포도 한 송이를 수확했습니다.' },
        { en: 'Fresh juice made from this fruit is both sweet and slightly tart.', ko: '이 과일로 만든 신선한 주스는 달콤하면서도 약간 새콤합니다.' },
      ],
      wordDistractors: ['grace', 'drape', 'gripe'],
      definitionDistractors: [
        'a type of citrus fruit with a thick yellow rind',
        'a dried legume commonly used in soups and stews',
        'a flowering shrub that produces aromatic blossoms in spring',
      ],
    }
  ),
  word('graphic', '그래픽', 7, 'noun',
    ['빈민가', '대성당', '인플레이션, 물가 상승', '10월', '로켓', '명 tion, mal', '의무', '정력, 활기, 열정', '정치', '방랑자, 부랑자 / 방랑하는 / (생각) 변덕스런, 불안정한'],
    tips({
      etymology: '그리스어 \'graphikos\'에서 유래하여 \'쓰다\' 또는 \'그리다\'라는 의미를 담고 있습니다.',
      visual: '컴퓨터 화면에 아주 선명하고 생생하게 그려진 도표나 그림을 상상해 보세요.',
      soundAlike: '\'그래픽\'이라는 발음은 우리가 흔히 쓰는 그래픽 디자인의 그 단어와 같습니다.',
      context: '주로 시각적인 자료나 아주 묘사가 생생하여 눈앞에 그려지는 듯한 상황에 쓰입니다.',
      synonymAntonym: '이미지를 뜻하는 image와 유사하며, 글자로만 된 text와는 반대되는 성격이 있습니다.',
    }),
    {
      definition: 'A visual representation or design displayed on a surface such as a screen or paper to inform or entertain.',
      synonyms: ['illustration', 'diagram', 'artwork'],
      antonyms: ['text', 'speech', 'void'],
      exampleSentences: [
        { en: 'The news report included a detailed map and a helpful information chart.', ko: '뉴스 보도에는 상세한 지도와 도움이 되는 정보 도표가 포함되었습니다.' },
        { en: 'Modern video games feature incredibly realistic visual elements that mimic real life.', ko: '현대 비디오 게임은 실제 삶을 흉내 내는 믿을 수 없을 정도로 사실적인 시각적 요소들을 특징으로 합니다.' },
      ],
      wordDistractors: ['traffic', 'gravel', 'drastic'],
      definitionDistractors: [
        'a written transcript of a formal interview or speech',
        'a numerical table used for calculating statistical averages',
        'the process of encoding data into a compressed digital format',
      ],
    }
  ),
  word('grasp', '붙잡다', 8, 'verb',
    ['놓다', '놓치다', '던지다', '밀다', '떨어뜨리다', '포기하다', '놓아주다', '미끄러지다', '흩뿌리다', '풀다'],
    tips({
      etymology: '고대 영어 \'græpian\'에서 유래하여 손으로 꽉 쥐는 동작에서 지식의 습득으로 의미가 확장되었습니다.',
      visual: '어두운 곳에서 손을 뻗어 단단한 손잡이를 꽉 잡는 모습을 상상해 보세요.',
      soundAlike: '\'그래(gra) 습(sp)!\' 하고 무언가를 깨달았을 때 무릎을 탁 치며 손을 움켜쥐는 소리를 연상하세요.',
      context: '물리적으로 물건을 잡는 것뿐만 아니라, 복잡한 이론을 완전히 이해했을 때도 사용합니다.',
      synonymAntonym: 'grip은 꽉 쥐는 힘을 강조하고, release는 잡았던 것을 놓아주는 반대 행동입니다.',
    }),
    {
      definition: 'to seize and hold something firmly with the hands, or to fully understand a complex idea',
      synonyms: ['grip', 'understanding', 'comprehension'],
      antonyms: ['release', 'ignorance', 'misunderstanding'],
      exampleSentences: [
        { en: 'The climber kept a firm hold, making sure his fingers did not lose their strength.', ko: '등반가는 손가락의 힘이 빠지지 않도록 단단히 붙잡는 힘을 유지했습니다.' },
        { en: 'Advanced calculus is often beyond the intellectual reach of most high school students.', ko: '고급 미적분학은 대다수 고등학생들의 지적 이해 범위를 벗어나는 경우가 많습니다.' },
      ],
      wordDistractors: ['gasp', 'clasp', 'graze'],
      definitionDistractors: [
        'to throw an object with great force toward a distant target',
        'to carefully arrange items in a specific order or sequence',
        'to whisper something quietly so that others cannot hear',
      ],
    }
  ),
  word('grass', '풀밭', 3, 'noun',
    ['나무', '바위', '모래', '구름', '바다', '하늘', '뿌리', '가지', '열매', '꽃잎'],
    tips({
      etymology: '고대 영어 \'græs\'에서 유래했으며, \'성장하다\'라는 뜻의 \'grow\'와 어원을 공유합니다.',
      visual: '축구장이나 공원에 넓게 펼쳐진 초록색 카펫 같은 풍경을 상상해 보세요.',
      soundAlike: '발음이 \'그래쓰\'와 비슷하니, \'그래, 쓰(grass)러진 풀들을 보자\'라고 연상해 보세요.',
      context: '정원 관리, 목초지, 혹은 소풍 장소를 설명할 때 가장 흔히 쓰이는 단어입니다.',
      synonymAntonym: '잔디를 뜻하는 turf와 유사하며, 식물이 없는 황무지인 wasteland와 대비됩니다.',
    }),
    {
      definition: 'Common green plants with narrow leaves that grow in fields and gardens, often eaten by cattle.',
      synonyms: ['turf', 'lawn', 'sod'],
      antonyms: ['desert', 'wasteland', 'concrete'],
      exampleSentences: [
        { en: 'The children enjoyed running barefoot on the soft green lawn after the rain.', ko: '아이들은 비가 온 뒤 부드러운 초록색 풀밭 위를 맨발로 뛰노는 것을 즐겼다.' },
        { en: 'Cows spend most of their day grazing on the lush hillsides of the farm.', ko: '소들은 하루의 대부분을 농장의 푸른 언덕 위에서 풀을 뜯으며 보낸다.' },
      ],
      wordDistractors: ['glass', 'brass', 'grace'],
      definitionDistractors: [
        'a type of lightweight fabric woven from natural fibers',
        'the outer bark of a tree used in traditional medicine',
        'a shallow body of still water found in marshy areas',
      ],
    }
  ),
  word('grateful', '고마운', 4, 'adjective',
    ['무례한', '냉담한', '당연한', '불쾌한', '오만한', '무관심한', '이기적인', '비판적인', '거만한', '냉정한'],
    tips({
      etymology: '라틴어 gratus(기쁜, 감사한)에서 유래하여 누군가의 호의에 보답하고 싶은 마음을 나타냅니다.',
      visual: '누군가 건넨 따뜻한 차 한 잔을 두 손으로 감싸 쥐며 미소 짓는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'그레이트(great) 풀(full)\'과 비슷하므로 \'엄청나게(great) 가득(full) 감사한 상태\'로 기억하세요.',
      context: '도움을 받았을 때나 예상치 못한 선물을 받았을 때 느끼는 진심 어린 고마움을 표현할 때 쓰입니다.',
      synonymAntonym: 'thankful과 비슷하지만 더 깊은 감정적 유대를 포함하며, unappreciative와는 정반대의 태도입니다.',
    }),
    {
      definition: 'feeling or showing an appreciation of kindness and being thankful for what has been received',
      synonyms: ['thankful', 'appreciative', 'indebted'],
      antonyms: ['ungrateful', 'thankless', 'unappreciative'],
      exampleSentences: [
        { en: 'The rescue team was deeply touched by the letters from the survivors.', ko: '구조팀은 생존자들이 보낸 편지에 깊은 고마움을 느꼈습니다.' },
        { en: 'She felt immensely appreciative for the support her family provided during the crisis.', ko: '그녀는 위기 동안 가족이 보내준 지지에 대해 대단히 고맙게 생각했습니다.' },
      ],
      wordDistractors: ['graceful', 'grated', 'gratified'],
      definitionDistractors: [
        'experiencing a strong sense of pride in one\'s own achievements',
        'feeling anxious or worried about an upcoming event',
        'being deeply moved by a piece of music or art',
      ],
    }
  ),
  word('grave', '무덤', 5, 'noun',
    ['비석', '장례식', '유골함', '관', '묘지', '제단', '추모비', '유적', '성당', '사원'],
    tips({
      etymology: '고대 영어 \'græf\'에서 유래했으며, 땅을 \'파다(dig)\'라는 의미의 어근에서 시작되었습니다.',
      visual: '조용한 공동묘지에 비석이 세워져 있고 그 아래 땅이 깊게 파여 있는 모습을 상상해 보세요.',
      soundAlike: '\'그래 이브(grave)\'가 잠든 곳은 무덤이다라고 소리 내어 읽으며 연상해 보세요.',
      context: '주로 죽은 사람을 묻는 장소를 뜻하지만, 형용사로 쓰일 때는 상황이 \'엄중한\'이라는 뜻으로도 쓰입니다.',
      synonymAntonym: 'tomb이나 burial place와 비슷하며, 생명이 시작되는 곳인 birthplace와는 반대됩니다.',
    }),
    {
      definition: 'An excavation in the earth as a place of burial for a corpse.',
      synonyms: ['tomb', 'sepulcher', 'burial site'],
      antonyms: ['birthplace', 'cradle', 'origin'],
      exampleSentences: [
        { en: 'The family gathered to place fresh flowers on their grandfather\'s final resting place.', ko: '가족들은 할아버지의 마지막 안식처인 무덤에 생화를 놓기 위해 모였다.' },
        { en: 'Archaeologists carefully uncovered an ancient stone chamber hidden beneath the soil.', ko: '고고학자들은 흙 아래 숨겨진 고대 석실 무덤을 조심스럽게 발굴했다.' },
      ],
      wordDistractors: ['grove', 'gravel', 'crave'],
      definitionDistractors: [
        'a large stone monument erected to commemorate a historical event',
        'a deep underground tunnel used for mining precious metals',
        'a sacred altar found in ancient religious temples',
      ],
    }
  ),
  word('great', '커다란', 1, 'adjective',
    ['작은', '사소한', '평범한', '부족한', '좁은', '나쁜', '낮은', '가벼운', '희미한', '짧은'],
    tips({
      etymology: '고대 영어 \'great\'에서 유래하여 부피가 크거나 두껍다는 물리적 의미에서 점차 중요성이나 뛰어남을 뜻하게 되었습니다.',
      visual: '거대한 산이나 아주 넓은 광장을 바라보며 입을 크게 벌리고 감탄하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'그레이트\'로 들리는데, \'그래, 이트(이거) 정말 크다!\'라고 외우면 쉽습니다.',
      context: '단순히 크기가 큰 것뿐만 아니라 역사적인 인물이나 아주 훌륭한 성과를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '거대한을 뜻하는 huge와 반대되는 작은을 뜻하는 tiny를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'Remarkably large in size, degree, or importance.',
      synonyms: ['enormous', 'immense', 'vast'],
      antonyms: ['small', 'tiny', 'insignificant'],
      exampleSentences: [
        { en: 'A great wall was built around the city to protect the citizens from invaders.', ko: '침략자들로부터 시민들을 보호하기 위해 도시 주변에 커다란 성벽이 세워졌습니다.' },
        { en: 'The artist showed great skill in capturing the subtle details of the landscape.', ko: '그 화가는 풍경의 미묘한 세부 사항을 포착하는 데 있어 커다란 기량을 보여주었습니다.' },
      ],
      wordDistractors: ['greet', 'treat', 'grate'],
      definitionDistractors: [
        'occurring at regular intervals throughout the day',
        'having a bitter or unpleasant taste when consumed',
        'being average or ordinary in quality without distinction',
      ],
    }
  ),
  word('greed', '탐욕', 6, 'noun',
    ['관용', '절제', '만족', '희생', '봉사', '겸손', '정직', '용기', '인내', '친절'],
    tips({
      etymology: '고대 영어 \'grædig\'에서 유래했으며, 배고픔을 뜻하는 \'greedy\'의 명사형으로 무엇인가를 몹시 갈구하는 상태를 뜻합니다.',
      visual: '금화가 가득 담긴 주머니를 양손에 꽉 쥐고도 더 달라고 입을 벌리고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'그리(gree)드\'와 비슷한데, 남의 것을 \'그리(그렇게)\' 다 가지고 싶어 하는 마음으로 연결해 보세요.',
      context: '주로 돈, 권력, 음식 등을 필요 이상으로 더 많이 가지려는 부정적인 욕망을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '더 많이 가지려는 avarice와 반대로 가진 것에 만족하는 contentment를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'an excessive and selfish desire to have more of something, such as money or power, than is actually needed',
      synonyms: ['avarice', 'cupidity', 'gluttony'],
      antonyms: ['generosity', 'altruism', 'temperance'],
      exampleSentences: [
        { en: 'The corporate executive\'s relentless pursuit of profit was driven by pure personal gain and material desire.', ko: '그 기업 임원의 끊임없는 이윤 추구는 순수한 개인적 이득과 물질적 탐욕에 의해 움직였다.' },
        { en: 'Many ancient fables warn that excessive hunger for wealth often leads to a person\'s ultimate downfall.', ko: '많은 고대 우화들은 부에 대한 과도한 탐욕이 종종 사람의 궁극적인 몰락을 초래한다고 경고한다.' },
      ],
      wordDistractors: ['creed', 'breed', 'freed'],
      definitionDistractors: [
        'a sudden feeling of sadness caused by a personal loss',
        'the act of sharing resources equally among a group of people',
        'a strong determination to achieve a specific long-term goal',
      ],
    }
  ),
  word('greet', '인사하다', 7, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '간섭하다', '자극하다, 촉진하다', '나무라다', '(도시, 가로 등) 불규칙하게 넓어지다[뻗다]', '(미리) 가정하다'],
    tips({
      etymology: '고대 영어 \'gretan\'에서 유래했으며, 누군가에게 다가가 말을 걸거나 환영한다는 의미를 담고 있습니다.',
      visual: '공항 입국장에서 환하게 웃으며 손을 흔들어 손님을 맞이하는 가이드의 모습을 상상해 보세요.',
      soundAlike: '\'그릿\' 발음이 \'그리웠던\' 사람을 만났을 때 반갑게 인사하는 상황과 연결하면 기억하기 쉽습니다.',
      context: '주로 아침 인사, 손님 맞이, 혹은 새로운 소식을 접했을 때의 반응을 나타낼 때 자주 쓰입니다.',
      synonymAntonym: 'welcome과 유사하며, 무시하고 지나치는 ignore와는 반대되는 행동입니다.',
    }),
    {
      definition: 'to welcome someone with particular words or a particular action when you meet them',
      synonyms: ['welcome', 'salute', 'hail'],
      antonyms: ['ignore', 'shun', 'avoid'],
      exampleSentences: [
        { en: 'The host stood at the door to welcome and shake hands with every guest.', ko: '주인은 모든 손님과 인사하고 악수하기 위해 문 앞에 서 있었습니다.' },
        { en: 'Local residents gathered at the pier to cheer and wave as the ship arrived.', ko: '배가 도착하자 지역 주민들이 부두에 모여 환호하고 손을 흔들며 맞이했습니다.' },
      ],
      wordDistractors: ['great', 'fleet', 'treat'],
      definitionDistractors: [
        'to formally introduce oneself at a business conference',
        'to send a written invitation for an upcoming event',
        'to express disapproval or criticism toward someone publicly',
      ],
    }
  ),
  word('grey', '회색의', 2, 'adjective',
    ['파란색의', '빨간색의', '노란색의', '초록색의', '보라색의', '투명한', '어두운', '밝은', '화려한', '단조로운'],
    tips({
      etymology: '고대 영어 \'græg\'에서 유래했으며, 검은색과 흰색이 섞인 중간 상태를 의미합니다.',
      visual: '비가 오기 직전의 흐린 하늘이나 오래된 시멘트 벽의 색깔을 상상해 보세요.',
      soundAlike: '머리카락이 \'그래이(grey)\'렇게 하얗게 세어버린 노인을 떠올려 보세요.',
      context: '날씨가 흐리거나 머리카락이 셌을 때, 혹은 흑백 논리로 설명할 수 없는 중간 지대를 묘사할 때 쓰입니다.',
      synonymAntonym: 'ashy(재색의)와 비슷하고, colorful(다채로운)이나 bright(밝은)와는 반대되는 느낌입니다.',
    }),
    {
      definition: 'Having a color between black and white, like the color of ashes or a leaden sky.',
      synonyms: ['ashy', 'silvery', 'leaden'],
      antonyms: ['colorful', 'bright', 'vibrant'],
      exampleSentences: [
        { en: 'The sky looked heavy and dull before the storm began.', ko: '폭풍이 시작되기 전 하늘은 무겁고 흐린 회색빛이었습니다.' },
        { en: 'He noticed several silver hairs appearing around his temples.', ko: '그는 관자놀이 주변에 흰머리가 몇 가닥 생겨난 것을 발견했습니다.' },
      ],
      wordDistractors: ['gray', 'prey', 'tray'],
      definitionDistractors: [
        'having a deep shade of blue similar to the ocean at dusk',
        'completely transparent or see-through like clear glass',
        'displaying multiple vivid colors in a striped pattern',
      ],
    }
  ),
  word('grief', '슬픔', 4, 'noun',
    ['기쁨', '환희', '평온', '만족', '안도', '흥분', '기대', '자부심', '평화', '유희'],
    tips({
      etymology: '라틴어 \'gravare(무겁게 하다)\'에서 유래하여 마음을 무겁게 짓누르는 큰 슬픔을 뜻합니다.',
      visual: '사랑하는 사람을 잃고 검은 옷을 입은 채 고개를 떨구고 있는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '발음이 \'그리워\'와 비슷하므로, 누군가를 너무 그리워해서 생기는 깊은 슬픔으로 기억하세요.',
      context: '장례식이나 큰 이별, 소중한 물건을 잃어버렸을 때 느끼는 압도적인 감정을 표현할 때 주로 쓰입니다.',
      synonymAntonym: 'sorrow와 같은 깊은 슬픔을 뜻하며, 반대로 joy와 같은 극도의 기쁨과는 대조를 이룹니다.',
    }),
    {
      definition: 'Deep and intense sorrow, especially that caused by someone\'s death or a significant loss.',
      synonyms: ['sorrow', 'misery', 'anguish'],
      antonyms: ['joy', 'happiness', 'delight'],
      exampleSentences: [
        { en: 'The entire community shared her profound sorrow and sense of loss after the accident.', ko: '사고 이후 온 마을 공동체가 그녀의 깊은 슬픔과 상실감을 함께 나누었습니다.' },
        { en: 'Time is often said to be the only thing that can truly heal such intense emotional pain.', ko: '시간만이 그러한 강렬한 정서적 고통을 진정으로 치유할 수 있는 유일한 것이라고 흔히들 말합니다.' },
      ],
      wordDistractors: ['grieve', 'brief', 'thief'],
      definitionDistractors: [
        'a formal written complaint filed with a legal authority',
        'a mild annoyance caused by a trivial daily inconvenience',
        'a feeling of relief after escaping a dangerous situation',
      ],
    }
  ),
  word('grip', '잡기', 5, 'noun',
    ['해방', '미끄러짐', '포기', '방출', '거절', '이완', '분리', '상실', '낙하', '부재'],
    tips({
      etymology: '고대 영어 \'gripan\'에서 유래하여 손으로 움켜쥐는 동작을 의미합니다.',
      visual: '테니스 라켓이나 자전거 핸들을 꽉 쥐고 있는 손의 모습을 상상해 보세요.',
      soundAlike: '\'그립\'은 골프나 테니스에서 채를 잡는 법을 말할 때 이미 흔히 쓰이는 외래어입니다.',
      context: '물리적인 손잡이뿐만 아니라 상황에 대한 통제력이나 이해력을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'grasp와 clutch는 꽉 잡는 느낌을 공유하며, release는 잡았던 것을 놓는 반대 상황입니다.',
    }),
    {
      definition: 'a firm hold on something or the power to control a situation',
      synonyms: ['grasp', 'clutch', 'clasp'],
      antonyms: ['release', 'looseness', 'liberation'],
      exampleSentences: [
        { en: 'The mountain climber maintained a firm hold on the rope to ensure his safety.', ko: '등산가는 안전을 확보하기 위해 밧줄을 꽉 잡은 상태를 유지했다.' },
        { en: 'Panic began to take hold of the crowd as the smoke filled the room.', ko: '방에 연기가 차오르자 군중들 사이에 공포가 엄습하기 시작했다.' },
      ],
      wordDistractors: ['trip', 'drip', 'grit'],
      definitionDistractors: [
        'a sudden involuntary movement caused by surprise or fear',
        'the ability to move quickly and change direction with ease',
        'a small portable bag used for carrying personal belongings',
      ],
    }
  ),
  word('grocery', '식품잡화류', 6, 'noun',
    ['전자제품', '가구', '의류', '문구류', '약품', '장난감', '화장품', '스포츠용품', '자동차부품', '건축자재'],
    tips({
      etymology: '중세 영어 \'grosser\'에서 유래했으며, 원래는 대량으로 물건을 파는 상인을 의미했습니다.',
      visual: '카트에 우유, 빵, 채소가 가득 담겨 있는 대형 마트의 계산대 풍경을 상상해 보세요.',
      soundAlike: '\'그로써(리)\' -> \'그릇에\' 담을 먹거리를 사러 가는 상황으로 연상하면 쉽습니다.',
      context: '주로 식료품점 자체를 의미하거나 그곳에서 사는 물품들을 통칭할 때 사용됩니다.',
      synonymAntonym: '식품을 뜻하는 foodstuff와 유사하며, 비식품류인 hardware와는 대조적입니다.',
    }),
    {
      definition: 'Items of food in a store or the shop where such goods are sold to the public.',
      synonyms: ['provisions', 'foodstuff', 'produce'],
      antonyms: ['hardware', 'machinery', 'electronics'],
      exampleSentences: [
        { en: 'We need to stop at the local store to pick up some fresh milk and other daily supplies.', ko: '우리는 신선한 우유와 다른 일상 식품들을 사기 위해 동네 가게에 들러야 합니다.' },
        { en: 'The delivery service brought the bags of vegetables and fruit right to my front door.', ko: '배달 서비스가 채소와 과일이 든 봉지들을 내 집 앞까지 바로 가져다주었습니다.' },
      ],
      wordDistractors: ['grocer', 'grotto', 'gopher'],
      definitionDistractors: [
        'a large warehouse used for storing industrial equipment',
        'a specialty shop that sells handmade crafts and artwork',
        'a type of outdoor market that operates only on weekends',
      ],
    }
  ),
  word('gross', '총계의', 9, 'adjective',
    ['순수한', '부분적인', '미세한', '정교한', '개별적인', '추상적인', '일시적인', '가상의', '상대적인', '부수적인'],
    tips({
      etymology: '라틴어 \'grossus\'에서 유래하여 \'두껍다\' 혹은 \'크다\'라는 의미를 가집니다. 이것이 전체를 아우르는 \'총합\'의 개념으로 발전했습니다.',
      visual: '영수증 하단에 세금이나 공제액을 빼기 전, 가장 큰 글씨로 적힌 전체 금액 숫자를 상상해 보세요.',
      soundAlike: '\'그로스\'라고 발음되는데, 식물이 \'그로우(grow)\'해서 꽉 찬 전체 상태를 떠올리면 쉽습니다.',
      context: '경제 뉴스에서 GDP(국내총생산)를 말할 때 첫 글자인 G가 바로 이 단어입니다.',
      synonymAntonym: 'net(순이익의)과 반대되는 개념으로, 아무것도 떼지 않은 전체 상태를 의미합니다.',
    }),
    {
      definition: 'representing the total amount of something before any deductions or expenses have been taken away',
      synonyms: ['total', 'overall', 'aggregate'],
      antonyms: ['net', 'partial', 'refined'],
      exampleSentences: [
        { en: 'The company reported a significant increase in its annual income before taxes.', ko: '그 회사는 세전 연간 총수입이 크게 증가했다고 보고했습니다.' },
        { en: 'National wealth is often measured by the value of all goods produced within a country.', ko: '국가 부는 종종 한 국가 내에서 생산된 모든 재화의 총가치로 측정됩니다.' },
      ],
      wordDistractors: ['gloss', 'cross', 'grouse'],
      definitionDistractors: [
        'extremely refined or delicate in texture and quality',
        'remaining after all deductions and expenses have been subtracted',
        'having an unpleasant or disgusting physical appearance',
      ],
    }
  ),
  word('ground', '땅', 3, 'noun',
    ['하늘', '바다', '공기', '우주', '구름', '바람', '태양', '별빛', '안개', '파도'],
    tips({
      etymology: '게르만어 어원인 \'grundus\'에서 유래했으며, 사물의 가장 아랫부분이나 기초를 의미합니다.',
      visual: '발밑에 단단하게 깔려 있는 흙이나 먼지 쌓인 운동장을 상상해 보세요.',
      soundAlike: '그라운드(ground) - 운동장에서 \'그라운드\' 홈런을 치는 장면을 떠올리면 쉽습니다.',
      context: '축구 경기장이나 정원, 혹은 건물이 세워지는 기초 바닥을 말할 때 주로 쓰입니다.',
      synonymAntonym: '흙을 뜻하는 earth와 비슷하지만, 하늘을 뜻하는 sky와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the solid surface of the earth that people walk on or stand upon',
      synonyms: ['earth', 'soil', 'terrain'],
      antonyms: ['sky', 'heaven', 'atmosphere'],
      exampleSentences: [
        { en: 'The fallen leaves covered the entire surface of the garden.', ko: '낙엽들이 정원 바닥 전체를 뒤덮었습니다.' },
        { en: 'Heavy rain made the playing field too soft for the match to continue.', ko: '폭우로 인해 경기장 바닥이 너무 질척거려 경기를 계속할 수 없었습니다.' },
      ],
      wordDistractors: ['mound', 'round', 'grout'],
      definitionDistractors: [
        'the ceiling or upper interior surface of a building',
        'a flat area of paved road designed for vehicle traffic',
        'a raised wooden platform used for public speaking events',
      ],
    }
  ),
  word('grow', '성장하다', 1, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '규제하다', '되찾다', '명중하다', '결혼하다', '이의제기하다, 반대하다 (at, to, about ~)'],
    tips({
      etymology: '고대 영어 \'growan\'에서 유래했으며, 식물이 푸르게 변하며 자라나는 생명력을 의미합니다.',
      visual: '작은 씨앗에서 싹이 터서 거대한 나무로 뻗어 나가는 모습을 상상해 보세요.',
      soundAlike: '\'그로우\' 발음이 \'구르다\'와 비슷하죠? 땅 위를 굴러다니며 몸집을 키우는 눈덩이를 떠올려 보세요.',
      context: '아이들의 키가 크거나, 회사의 매출이 늘어나거나, 실력이 향상될 때 폭넓게 쓰입니다.',
      synonymAntonym: '확장하는 expand와 줄어드는 shrink를 함께 기억하면 크기 변화를 쉽게 이해할 수 있습니다.',
    }),
    {
      definition: 'to increase in size, number, or amount over a period of time',
      synonyms: ['develop', 'expand', 'increase'],
      antonyms: ['shrink', 'decrease', 'decline'],
      exampleSentences: [
        { en: 'Children tend to increase in height very quickly during their teenage years.', ko: '아이들은 십 대 시절에 키가 매우 빠르게 자라는 경향이 있습니다.' },
        { en: 'The small startup managed to expand into a global corporation within a decade.', ko: '그 작은 스타트업은 10년 만에 글로벌 기업으로 성장해냈습니다.' },
      ],
      wordDistractors: ['glow', 'crow', 'throw'],
      definitionDistractors: [
        'to move rapidly from one location to another without stopping',
        'to carefully trim or cut back the branches of a tree',
        'to reduce in value or importance over a long period',
      ],
    }
  ),
  word('guarantee', '보증하다', 7, 'verb',
    ['비하하다, 격하시키다', '풍요롭게 하다', '전멸시키다', '스며 나오다', '애타게 하다', '미루다, 꾸물거리다', '포착하다', '위치시키다', '선택하다', '결정하다'],
    tips({
      etymology: '프랑스어 \'garant\'에서 유래했으며, 무언가를 보호하거나 안전하게 지키겠다는 약속에서 시작되었습니다.',
      visual: '가전제품을 샀을 때 들어있는 \'품질 보증서\'에 금색 도장이 찍혀 있는 모습을 상상해 보세요.',
      soundAlike: '\'개런티\'라고 발음하며, 연예인들이 출연을 확정 지을 때 받는 확실한 보상금을 떠올리면 쉽습니다.',
      context: '제품의 품질을 약속하거나, 어떤 결과가 반드시 일어날 것임을 확신할 때 주로 사용합니다.',
      synonymAntonym: '확약하는 ensure와 반대로 불확실함을 나타내는 doubt를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to provide a formal promise or assurance that certain conditions will be fulfilled',
      synonyms: ['assure', 'ensure', 'warrant'],
      antonyms: ['contradict', 'deny', 'disclaim'],
      exampleSentences: [
        { en: 'The manufacturer offers a two-year warranty to provide full protection for your purchase.', ko: '제조업체는 귀하의 구매 제품을 완전히 보호하기 위해 2년의 품질 보증을 제공합니다.' },
        { en: 'Hard work alone does not always promise success in every competitive field.', ko: '노력만으로는 모든 경쟁 분야에서 성공을 항상 약속할 수는 없습니다.' },
      ],
      wordDistractors: ['guidance', 'garnish', 'quarantine'],
      definitionDistractors: [
        'to formally request the return of a previously donated item',
        'to privately express doubt about a plan without offering alternatives',
        'to temporarily postpone a scheduled meeting or appointment',
      ],
    }
  ),
  word('guardian', '보호자', 4, 'noun',
    ['침입자', '방관자', '범죄자', '관찰자', '조력자', '기술자', '예술가', '여행자', '수혜자', '상속인'],
    tips({
      etymology: '프랑스어 \'garder(지키다)\'에서 유래하여 무언가를 지키고 돌보는 사람을 뜻합니다.',
      visual: '어린아이의 손을 꼭 잡고 주위를 살피며 걷는 든든한 어른의 모습을 상상해 보세요.',
      soundAlike: '\'가디언\'은 영화 \'가디언즈 오브 갤럭시\'처럼 우주를 지키는 수호자들을 떠올리면 쉽습니다.',
      context: '법적인 보호자뿐만 아니라 유적이나 전통을 지키는 수호자라는 문맥에서도 자주 쓰입니다.',
      synonymAntonym: '지키는 사람인 protector와 반대로 해를 끼치는 attacker를 함께 기억하세요.',
    }),
    {
      definition: 'A person who has the legal right and responsibility of taking care of someone who cannot take care of themselves, or someone who protects something valuable.',
      synonyms: ['protector', 'custodian', 'defender'],
      antonyms: ['attacker', 'opponent', 'adversary'],
      exampleSentences: [
        { en: 'The court appointed an aunt as the legal protector for the orphaned children.', ko: '법원은 고아가 된 아이들의 법적 보호자로 고모를 선임했습니다.' },
        { en: 'Museum staff act as the dedicated keepers of these ancient historical artifacts.', ko: '박물관 직원들은 이 고대 역사 유물들의 헌신적인 수호자 역할을 합니다.' },
      ],
      wordDistractors: ['gardener', 'warden', 'curtain'],
      definitionDistractors: [
        'a professional advisor who manages financial investments',
        'a government official responsible for collecting public taxes',
        'a volunteer who organizes community recreational events',
      ],
    }
  ),
  word('guess', '추측하다', 2, 'verb',
    ['선언하다', '짐작하다', '예상하다', '가정하다', '판단하다', '생각하다', '계산하다', '증명하다', '결정하다', '확인하다'],
    tips({
      etymology: '중세 영어 gessen에서 유래하여 \'얻다\' 혹은 \'파악하다\'라는 의미의 북유럽 어원과 연결됩니다.',
      visual: '안개가 자욱한 길에서 표지판의 내용을 어렴풋이 짐작해보는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'게스\'와 비슷하므로, 유명 브랜드 \'Guess\'를 보고 \'이 옷은 얼마일까?\' 추측하는 상황을 떠올리세요.',
      context: '확실한 증거가 없을 때 자신의 직감이나 부족한 정보를 바탕으로 의견을 낼 때 주로 쓰입니다.',
      synonymAntonym: '확실치 않은 estimate와 유사하며, 확실히 알고 있는 know와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to form an opinion or give an answer about something when you do not have all the facts',
      synonyms: ['estimate', 'surmise', 'conjecture'],
      antonyms: ['know', 'prove', 'verify'],
      exampleSentences: [
        { en: 'Can you estimate how many jelly beans are in the jar without counting them?', ko: '세어보지 않고 병 안에 젤리빈이 몇 개나 들어있는지 맞혀볼 수 있나요?' },
        { en: 'She had to provide an answer even though she was not entirely sure of the facts.', ko: '그녀는 사실을 완전히 확신하지 못했음에도 불구하고 답변을 추측해서 내놓아야 했습니다.' },
      ],
      wordDistractors: ['guest', 'quest', 'guise'],
      definitionDistractors: [
        'to carefully verify a fact by consulting multiple reliable sources',
        'to make a confident prediction based on thorough scientific analysis',
        'to deliberately withhold an answer despite knowing the correct response',
      ],
    }
  ),
  word('guest', '손님', 4, 'noun',
    ['주인', '직원', '상인', '환자', '학생', '군인', '의사', '경찰', '농부', '작가'],
    tips({
      etymology: '인도유럽어족의 \'ghosti-\'에서 유래되었으며, 이는 \'낯선 사람\' 또는 \'환대받는 사람\'을 의미합니다.',
      visual: '호텔 로비에서 벨보이가 가방을 들어주며 정중하게 맞이하는 방문객의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'게스트\'이므로, TV 프로그램에 특별 출연하는 \'초대 손님\'을 떠올리면 쉽습니다.',
      context: '주로 집이나 호텔, 파티 등에 초대받아 방문한 사람을 지칭할 때 사용됩니다.',
      synonymAntonym: '방문객을 뜻하는 visitor와 유사하며, 집주인을 뜻하는 host와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who is invited to visit someone\'s home or attend a particular social occasion.',
      synonyms: ['visitor', 'invitee', 'caller'],
      antonyms: ['host', 'owner', 'proprietor'],
      exampleSentences: [
        { en: 'The hotel staff welcomed every newcomer with a warm smile and a refreshing drink.', ko: '호텔 직원들은 모든 방문객을 따뜻한 미소와 시원한 음료로 맞이했습니다.' },
        { en: 'We are expecting a special visitor for dinner at our house tonight.', ko: '오늘 밤 우리 집 저녁 식사에 특별한 손님이 오실 예정입니다.' },
      ],
      wordDistractors: ['guess', 'quest', 'gust'],
      definitionDistractors: [
        'a person who permanently resides in a particular household',
        'a hired employee who serves food at a restaurant',
        'an uninvited stranger who trespasses on private property',
      ],
    }
  ),
  word('guide', '안내자', 3, 'noun',
    ['조각, 파편', '낮선 사람', '해군', '압박', '중앙', '비통, 고뇌 / (비통의 원인), 어려움', '교외', '야구장; 대략적인', '덮개, (날개를) 퍼덕이다', '농작물'],
    tips({
      etymology: '고대 프랑스어 \'guider\'에서 유래했으며, 길을 보여주거나 방향을 제시한다는 의미를 담고 있습니다.',
      visual: '박물관에서 깃발을 들고 관람객들을 앞장서서 안내하는 사람의 모습을 상상해 보세요.',
      soundAlike: '여행지에서 \'가이드\'가 길을 알려주는 소리를 떠올리면 기억하기 쉽습니다.',
      context: '여행 안내원뿐만 아니라 초보자를 위한 설명서나 지침서도 이 단어로 표현합니다.',
      synonymAntonym: 'leader나 mentor와 비슷하지만, follower나 novice와는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'A person who shows the way to others or a book that provides information on a particular subject.',
      synonyms: ['advisor', 'conductor', 'mentor'],
      antonyms: ['follower', 'student', 'novice'],
      exampleSentences: [
        { en: 'The experienced mountain climber acted as a reliable leader for the group during the storm.', ko: '경험 많은 등산가는 폭풍우 속에서 그룹을 위한 믿음직한 인도자 역할을 했습니다.' },
        { en: 'This comprehensive handbook serves as a practical manual for students learning how to code.', ko: '이 종합적인 핸드북은 코딩을 배우는 학생들에게 실용적인 지침서 역할을 합니다.' },
      ],
      wordDistractors: ['glide', 'guile', 'guild'],
      definitionDistractors: [
        'a rigid schedule that must be followed without any flexibility',
        'a physical map showing the boundaries of a geographic region',
        'an automated tool that performs repetitive calculations',
      ],
    }
  ),
  word('guideline', '지침', 5, 'noun',
    ['다양화', '총계', '측면', '사면', '곤충', '(고도의) 지식', '소란, 야단법석', '염소', '더미, 무더기', '추방자'],
    tips({
      etymology: '안내하다라는 뜻의 guide와 선을 의미하는 line이 합쳐져 행동의 방향을 잡아주는 선이라는 의미가 됩니다.',
      visual: '박물관 바닥에 그어진 관람객용 화살표 선을 따라 걷는 모습을 상상해 보세요.',
      soundAlike: '가이드라인은 한국어 외래어로도 자주 쓰이므로 \'가이드가 그어준 라인\'으로 기억하면 쉽습니다.',
      context: '정부 정책이나 회사 내 업무 처리 방식을 설명할 때 필수적으로 등장하는 단어입니다.',
      synonymAntonym: 'rule보다는 덜 강제적이지만 direction보다는 구체적인 지시 사항을 의미합니다.',
    }),
    {
      definition: 'A set of rules or instructions that are given by an official organization to tell you how to do something correctly.',
      synonyms: ['instruction', 'principle', 'standard'],
      antonyms: ['disorder', 'lawlessness', 'confusion'],
      exampleSentences: [
        { en: 'The government issued a new safety guideline for public transportation users.', ko: '정부는 대중교통 이용자들을 위한 새로운 안전 지침을 발표했습니다.' },
        { en: 'Please follow every specific guideline provided in the manual to avoid any technical errors.', ko: '기술적 오류를 피하기 위해 매뉴얼에 제공된 모든 세부 지침을 준수해 주세요.' },
      ],
      wordDistractors: ['sideline', 'deadline', 'pipeline'],
      definitionDistractors: [
        'a strict law that carries severe penalties for violations',
        'a personal opinion expressed informally during a casual conversation',
        'the outer boundary or border of a designated playing field',
      ],
    }
  ),
  word('guilty', '죄지은', 6, 'adjective',
    ['결백한', '순수한', '정직한', '당당한', '무고한', '친절한', '관대한', '솔직한', '유능한', '성실한'],
    tips({
      etymology: '고대 영어 \'gyltig\'에서 유래했으며, 법적 의무나 도덕적 책임을 다하지 못해 벌금을 내야 하는 상태를 의미합니다.',
      visual: '법정에서 판사가 망치를 두드리며 피고인에게 유죄 판결을 내리는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '\'길티\'라고 발음되는데, 잘못을 저질러 마음의 \'길\'이 막힌 것처럼 답답한 상태라고 연상해 보세요.',
      context: '법적인 유죄 판결뿐만 아니라, 다이어트 중에 초콜릿을 먹고 느끼는 미안한 마음(guilty pleasure)에도 자주 쓰입니다.',
      synonymAntonym: 'culpable은 법적 책임을 강조하고, innocent는 아무런 잘못이 없는 깨끗한 상태를 뜻합니다.',
    }),
    {
      definition: 'responsible for a specified wrongdoing, fault, or error, or feeling regret for such actions.',
      synonyms: ['culpable', 'remorseful', 'responsible'],
      antonyms: ['innocent', 'blameless', 'guiltless'],
      exampleSentences: [
        { en: 'The jury found the defendant responsible for the crime after a long deliberation.', ko: '배심원단은 긴 심의 끝에 피고인이 그 범죄에 대해 유죄라고 판결했습니다.' },
        { en: 'She felt a deep sense of regret for lying to her best friend about the incident.', ko: '그녀는 그 사건에 대해 가장 친한 친구에게 거짓말을 한 것에 대해 깊은 죄책감을 느꼈습니다.' },
      ],
      wordDistractors: ['gullible', 'quilted', 'gilded'],
      definitionDistractors: [
        'feeling physically exhausted after prolonged manual labor',
        'being extremely cautious and suspicious of others\' motives',
        'having been officially cleared of all charges in a trial',
      ],
    }
  ),
  word('gulf', '만', 8, 'noun',
    ['산맥', '평야', '계곡', '반도', '빙하', '폭포', '사막', '동굴', '절벽', '습지'],
    tips({
      etymology: '그리스어 \'kolpos\'에서 유래하여 \'가슴\'이나 \'깊은 골\'을 의미하며, 바다가 육지 안으로 깊숙이 들어온 지형을 뜻하게 되었습니다.',
      visual: 'C자 모양으로 굽어 있는 해안선 안으로 파란 바닷물이 가득 차 있는 지도를 상상해 보세요.',
      soundAlike: '꿀꺽(gulp) 마시는 것처럼 바다가 육지를 한 입 베어 문 듯한 모양이라고 생각하면 기억하기 쉽습니다.',
      context: '지리적인 해안 지형뿐만 아니라, 두 집단 사이의 좁혀지지 않는 거대한 견해 차이를 비유할 때도 자주 쓰입니다.',
      synonymAntonym: 'bay보다 규모가 큰 것을 보통 gulf라고 하며, 반대로 튀어나온 땅인 peninsula와 대조됩니다.',
    }),
    {
      definition: 'A large area of ocean partially enclosed by land, or a deep wide chasm and significant difference between two groups.',
      synonyms: ['bay', 'chasm', 'abyss'],
      antonyms: ['peninsula', 'cape', 'connection'],
      exampleSentences: [
        { en: 'The oil rig was situated in the middle of the expansive gulf.', ko: '석유 시추선은 광활한 만 한가운데에 위치해 있었다.' },
        { en: 'A growing gulf between the rich and the poor remains a serious social issue.', ko: '빈부 사이의 커지는 격차는 여전히 심각한 사회적 문제로 남아 있다.' },
      ],
      wordDistractors: ['gulp', 'gull', 'bluff'],
      definitionDistractors: [
        'a narrow river flowing between steep mountain valleys',
        'a flat sandy beach along a tropical coastline',
        'a small freshwater lake formed by glacial activity',
      ],
    }
  ),
  word('gun', '총', 7, 'noun',
    ['칼', '방패', '화살', '폭탄', '전쟁', '군인', '평화', '금속', '도구', '사냥'],
    tips({
      etymology: '중세 영어 \'Gonne\'에서 유래되었으며, 당시 거대한 대포나 발사 장치를 가리키던 말에서 시작되었습니다.',
      visual: '서부 영화의 카우보이가 허리춤에서 빠르게 무기를 꺼내는 장면을 상상해 보세요.',
      soundAlike: '\'건\'조한 날씨에 산불이 나지 않게 조심하듯, 위험한 물건임을 소리와 연결해 보세요.',
      context: '주로 군사, 경찰, 사냥 또는 스포츠 사격과 관련된 상황에서 자주 등장합니다.',
      synonymAntonym: '유사한 화기로는 firearm이 있으며, 평화적인 도구와는 대조적인 성격을 가집니다.',
    }),
    {
      definition: 'A weapon incorporating a metal tube from which bullets, shells, or other missiles are propelled by explosive force.',
      synonyms: ['firearm', 'weapon', 'pistol'],
      antonyms: ['shield', 'protection', 'deterrent'],
      exampleSentences: [
        { en: 'The police officer carried a small firearm holstered at his hip for safety.', ko: '경찰관은 안전을 위해 엉덩이춤에 작은 총기를 휴대하고 있었다.' },
        { en: 'Hunters must follow strict regulations regarding the use of any projectile weapon in the forest.', ko: '사냥꾼들은 숲에서 발사형 무기를 사용하는 것에 관한 엄격한 규정을 따라야 한다.' },
      ],
      wordDistractors: ['gum', 'nun', 'bun'],
      definitionDistractors: [
        'a heavy piece of metal used as an anchor for ships',
        'a handheld tool used for cutting through thick rope or wire',
        'a cylindrical container designed for storing compressed air',
      ],
    }
  ),
  word('guy', '녀석', 1, 'noun',
    ['파편, 잔해', '해군 장군[제독]', '실수, (시간의) 경과', '쓸모없는 것, 쓰레기', '장비', '어색함/서투름', '오락, 즐거움', '기차', '수족관', '위안, 아늑함을 주는 것 [adj] balmy'],
    tips({
      etymology: '1605년 영국 국회의사당 폭파 음모를 꾸몄던 가이 포크스(Guy Fawkes)의 이름에서 유래하여 사람을 가리키는 말이 되었습니다.',
      visual: '청바지를 입고 편하게 웃으며 손을 흔드는 젊은 남자의 모습을 상상해 보세요.',
      soundAlike: '우리말 \'가이(가장자리)\'와 발음이 비슷하지만, 영어로는 친근하게 부르는 \'남성\'을 뜻합니다.',
      context: '격식 없는 자리에서 친구나 아는 남자를 지칭할 때 주로 쓰이며, 복수형인 guys는 남녀 혼성 그룹을 부를 때도 쓰입니다.',
      synonymAntonym: 'man이나 fellow와 비슷하게 쓰이지만, lady나 woman과는 성별상 반대되는 개념으로 쓰입니다.',
    }),
    {
      definition: 'An informal term used to refer to a male person or a fellow.',
      synonyms: ['fellow', 'chap', 'man'],
      antonyms: ['girl', 'woman', 'lady'],
      exampleSentences: [
        { en: 'That guy wearing the red hat is my younger brother.', ko: '빨간 모자를 쓰고 있는 저 녀석이 내 남동생이야.' },
        { en: 'He seems like a really nice guy once you get to know him.', ko: '그는 알고 보면 정말 괜찮은 사람인 것 같아.' },
      ],
      wordDistractors: ['buy', 'guide', 'gaze'],
      definitionDistractors: [
        'a formal title given to a high-ranking military officer',
        'a young child under the age of ten years old',
        'a professional colleague working in the same department',
      ],
    }
  ),
  word('gymnasium', '실내체조장', 4, 'noun',
    ['도서관', '실험실', '강당', '박물관', '기숙사', '매점', '교무실', '운동장', '정원', '복도'],
    tips({
      etymology: '그리스어 \'gymnazein(벌거벗고 운동하다)\'에서 유래하여, 고대 그리스인들이 옷을 벗고 훈련하던 장소를 뜻합니다.',
      visual: '농구 코트의 매끄러운 바닥과 천장에 달린 농구 골대, 그리고 땀 흘리며 뛰는 학생들의 모습을 상상해 보세요.',
      soundAlike: '줄여서 \'gym(짐)\'이라고 부르는데, 무거운 \'짐\'을 들고 근력 운동을 하는 장소라고 생각하면 쉽습니다.',
      context: '학교 체육 수업이나 실내 스포츠 경기가 열리는 대형 실내 공간을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '유의어로는 health club이나 fitness center가 있고, 반의어로는 야외 활동 공간인 playground를 들 수 있습니다.',
    }),
    {
      definition: 'A large room or building equipped for physical exercise, indoor sports, or gymnastics.',
      synonyms: ['gym', 'fitness center', 'sports hall'],
      antonyms: ['outdoor field', 'playground', 'open park'],
      exampleSentences: [
        { en: 'The school basketball team practices in the large indoor facility every afternoon.', ko: '학교 농구팀은 매일 오후 대형 실내 체육관에서 연습합니다.' },
        { en: 'Badminton matches were held inside the building because of the heavy rain outside.', ko: '바깥에 비가 많이 와서 배드민턴 경기가 건물 내부 실내 체조장에서 열렸습니다.' },
      ],
      wordDistractors: ['gymnast', 'symposium', 'aquarium'],
      definitionDistractors: [
        'a large outdoor amphitheater used for open-air concerts',
        'a private study room found in academic library buildings',
        'a covered marketplace where merchants sell their goods',
      ],
    }
  ),
  word('habit', '습관', 2, 'noun',
    ['폐, 허파', '친절', '케이 (이름)', '지구, 지구본; 구체', '파트너, 동반자', '고객', '가게 주인', '기둥', '배달', '완곡어'],
    tips({
      etymology: '라틴어 \'habere(가지다, 소유하다)\'에서 유래하여 몸에 배어 가지게 된 행동을 뜻합니다.',
      visual: '매일 아침 알람이 울리자마자 물 한 잔을 마시는 자신의 반복적인 모습을 상상해 보세요.',
      soundAlike: '\'해빗\' 발음이 \'해봐잇\'처럼 들리니, 매일 반복해서 \'해봐\'라고 스스로에게 말하는 습관을 떠올리세요.',
      context: '건강, 공부, 생활 방식 등 일상에서 의식하지 않고 규칙적으로 행하는 모든 일에 쓰입니다.',
      synonymAntonym: '늘 하던 방식인 routine과 비슷하지만, 의도적으로 멈춰야 하는 유혹인 instinct와는 대조됩니다.',
    }),
    {
      definition: 'A settled or regular tendency or practice, especially one that is hard to give up.',
      synonyms: ['routine', 'custom', 'pattern'],
      antonyms: ['novelty', 'exception', 'discontinuity'],
      exampleSentences: [
        { en: 'Reading a few pages of a book before bed has become a relaxing nightly practice for her.', ko: '자기 전에 책을 몇 페이지 읽는 것은 그녀에게 편안한 밤의 습관이 되었습니다.' },
        { en: 'Breaking a bad behavioral cycle requires a lot of willpower and consistent effort over time.', ko: '나쁜 행동 습관을 고치는 데는 많은 의지력과 시간이 흐름에 따른 꾸준한 노력이 필요합니다.' },
      ],
      wordDistractors: ['rabbit', 'inhabit', 'hobbit'],
      definitionDistractors: [
        'a single isolated event that occurs only once in a lifetime',
        'a conscious and deliberate choice made after careful analysis',
        'an official uniform worn by members of a religious order',
      ],
    }
  ),
  word('habitat', '서식지', 9, 'noun',
    ['커튼', '과거', '교환, 교류; 교환하다', '운전자, 기사', '독특함, 고유성', '결함', '측면', '배달', '다양성', '(크기, 무게 때문에) 다루기 힘든'],
    tips({
      etymology: '라틴어 habitare(거주하다)에서 유래하여 생물이 본래 살고 있는 장소를 뜻합니다.',
      visual: '울창한 밀림 속에서 오랑우탄이 나무 사이를 옮겨 다니는 보금자리를 상상해 보세요.',
      soundAlike: '해비(heavy)한 탓(tat)에 무거운 몸을 이끌고 자신의 서식지로 돌아가는 동물을 떠올려보세요.',
      context: '환경 보호 뉴스에서 동물의 집이 파괴될 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: 'home이나 environment와 비슷하지만, 주로 야생 동식물의 거주 환경을 강조할 때 씁니다.',
    }),
    {
      definition: 'the natural home or environment of an animal, plant, or other organism',
      synonyms: ['environment', 'surroundings', 'terrain'],
      antonyms: ['unnatural surroundings', 'foreign land', 'displacement'],
      exampleSentences: [
        { en: 'The tropical rainforest provides a rich and diverse environment for many endangered species.', ko: '열대 우림은 많은 멸종 위기 종들에게 풍부하고 다양한 자연 서식지를 제공합니다.' },
        { en: 'Pollution and deforestation are destroying the natural areas where these animals live.', ko: '오염과 삼림 벌채는 이 동물들이 사는 자연 서식지를 파괴하고 있습니다.' },
      ],
      wordDistractors: ['habit', 'inhabit', 'exhibit'],
      definitionDistractors: [
        'the typical diet or food source consumed by a particular species',
        'a man-made structure built to house domesticated animals',
        'the migratory route traveled by birds during seasonal changes',
      ],
    }
  ),
  word('hair', '털', 3, 'noun',
    ['애들레이드', '속임수/사기/기만', '성인', '보존', '다리', '젓가락', '갈대', '이동성', '북쪽', '폭동'],
    tips({
      etymology: '고대 영어 \'hær\'에서 유래했으며, 게르만어권 언어들에서 공통적으로 동물의 털이나 사람의 머리카락을 뜻합니다.',
      visual: '빗질을 할 때 빗 사이에 끼어 있는 가느다란 가닥들을 상상해 보세요.',
      soundAlike: '토끼를 뜻하는 \'hare\'와 발음이 똑같습니다. 토끼의 부드러운 털을 떠올리면 쉽습니다.',
      context: '미용실에서 스타일을 바꾸거나, 동물의 가죽 위에 난 부드러운 층을 설명할 때 주로 쓰입니다.',
      synonymAntonym: '머리카락을 뜻하는 locks와 유사하며, 털이 전혀 없는 상태인 baldness와는 반대됩니다.',
    }),
    {
      definition: 'The fine thread-like strands that grow from the skin of humans and other mammals.',
      synonyms: ['fur', 'locks', 'strand'],
      antonyms: ['baldness', 'hairlessness', 'smoothness'],
      exampleSentences: [
        { en: 'She decided to dye her long black hair a bright shade of red.', ko: '그녀는 자신의 긴 검은 머리카락을 밝은 빨간색으로 염색하기로 결정했다.' },
        { en: 'The cat left a lot of white hair on the blue sofa.', ko: '고양이가 파란 소파 위에 하얀 털을 많이 남겨 놓았다.' },
      ],
      wordDistractors: ['hare', 'heir', 'fair'],
      definitionDistractors: [
        'the outermost layer of skin covering the human body',
        'a type of natural fiber used in weaving textiles',
        'a thin wire used in electronic circuits for conducting electricity',
      ],
    }
  ),
  word('half', '반', 5, 'noun',
    ['전체', '조각', '부분', '배수', '합계', '평균', '비율', '단위', '수량', '나머지'],
    tips({
      etymology: '고대 영어 \'healf\'에서 유래했으며, 원래 \'쪽\'이나 \'방향\'을 의미하다가 정확히 둘로 나눈 한 부분을 뜻하게 되었습니다.',
      visual: '동그란 피자를 칼로 정확히 중심을 가로질러 두 조각으로 나누는 모습을 상상해 보세요.',
      soundAlike: '\'하프\'라고 발음되는데, 악기 하프(Harp)를 반으로 쪼개는 엉뚱한 상상을 하면 기억하기 쉽습니다.',
      context: '시간을 말할 때 \'half past\'라고 하면 30분이 지난 시점을 의미하며, 일상에서 양을 조절할 때 가장 많이 쓰입니다.',
      synonymAntonym: '전체를 뜻하는 whole과 대조되며, 부분적인 것을 뜻하는 semi, demi와 일맥상통합니다.',
    }),
    {
      definition: 'Either of two equal periods of time or parts into which something is or can be divided.',
      synonyms: ['portion', 'fraction', 'semi'],
      antonyms: ['whole', 'entirety', 'total'],
      exampleSentences: [
        { en: 'Cut the apple in two equal pieces and give one to your younger brother.', ko: '사과를 똑같은 두 조각으로 잘라서 하나는 남동생에게 주어라.' },
        { en: 'More than fifty percent of the students in this class are from overseas.', ko: '이 학급 학생들의 절반 이상이 외국에서 왔다.' },
      ],
      wordDistractors: ['halt', 'calf', 'halve'],
      definitionDistractors: [
        'the complete or total amount of something without any reduction',
        'a measurement unit used to quantify weight in the metric system',
        'a small fragment broken off from a much larger object',
      ],
    }
  ),
  word('hall', '회관', 6, 'noun',
    ['비단', '노예상태', '계약자, 도급업자', '기계', '나머지', '지출, 비용', '가위', '지우개', '경기침체기, 쇠퇴', '캐시 (여성 이름)'],
    tips({
      etymology: '고대 영어 \'heall\'에서 유래했으며, 지붕이 덮인 넓은 공간이나 거주지를 의미했습니다.',
      visual: '마을 한복판에 커다란 지붕과 기둥이 있는 공공 건물을 상상해 보세요.',
      soundAlike: '발음이 \'홀\'과 비슷하므로, 넓은 공간이 \'홀\'쭉하지 않고 널찍하다고 생각하세요.',
      context: '시청이나 대학교 내에서 대규모 행사가 열리는 장소를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'auditorium과 유사하며, 좁고 사적인 공간인 closet과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A large building or a large room used for public gatherings, events, or performances.',
      synonyms: ['auditorium', 'chamber', 'concourse'],
      antonyms: ['closet', 'cubicle', 'cell'],
      exampleSentences: [
        { en: 'The local community gathered in the town hall to discuss the new park project.', ko: '지역 사회 주민들은 새로운 공원 프로젝트를 논의하기 위해 마을 회관에 모였습니다.' },
        { en: 'A famous orchestra is scheduled to perform at the concert hall this Saturday.', ko: '이번 주 토요일에 유명한 오케스트라가 콘서트홀에서 공연할 예정입니다.' },
      ],
      wordDistractors: ['haul', 'hull', 'tall'],
      definitionDistractors: [
        'a narrow corridor connecting two separate buildings',
        'a small private room used for personal meditation',
        'an open-air courtyard surrounded by stone walls',
      ],
    }
  ),
  word('halt', '멈춰서다', 10, 'verb',
    ['출발하다', '가속하다', '진행하다', '전진하다', '달리다', '나아가다', '이동하다', '속행하다', '재개하다', '돌진하다'],
    tips({
      etymology: '독일어 \'halt\'에서 유래하여 군대에서 \'멈춰!\'라고 외치는 명령에서 시작되었습니다.',
      visual: '빨간색 정지 표지판 앞에서 자동차가 급브레이크를 밟으며 끼익 소리를 내며 멈추는 장면을 상상하세요.',
      soundAlike: '\'홀트\'라고 발음되는데, 무언가 홀드(hold)하듯이 꽉 붙잡아 멈추게 하는 느낌과 연결하세요.',
      context: '공장 가동이 중단되거나 행진하던 군대가 멈추는 상황에서 주로 쓰이는 명사입니다.',
      synonymAntonym: '움직임을 멈추는 stop과 유사하며, 계속 나아가는 start와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to bring or come to an abrupt stop; to cease all movement or progress',
      synonyms: ['standstill', 'cessation', 'stoppage'],
      antonyms: ['continuation', 'commencement', 'advancement'],
      exampleSentences: [
        { en: 'The heavy snowstorm brought all traffic in the city to a complete halt.', ko: '심한 폭설로 인해 도시의 모든 교통이 완전히 멈춰 섰습니다.' },
        { en: 'Production came to a sudden halt after the main power generator failed.', ko: '메인 발전기가 고장 난 후 생산이 갑자기 중단되었습니다.' },
      ],
      wordDistractors: ['malt', 'vault', 'exalt'],
      definitionDistractors: [
        'to gradually accelerate or increase in speed and momentum',
        'to hesitate briefly before making an important decision',
        'to stumble or trip while walking on an uneven surface',
      ],
    }
  ),
  word('hammer', '망치', 7, 'noun',
    ['드라이버', '펜치', '못', '톱', '나사', '드릴', '삽', '도끼', '곡괭이', '렌치'],
    tips({
      etymology: '게르만어권에서 유래한 단어로, 돌이나 금속으로 만든 타격 도구를 뜻하는 고대어에서 발전했습니다.',
      visual: '단단한 쇠뭉치가 달린 손잡이를 잡고 못을 힘껏 내리치는 목수의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'해머\'와 유사하므로, 올림픽 경기 중 무거운 공을 던지는 \'해머던지기\'를 떠올리면 쉽습니다.',
      context: '건축 현장이나 가구 조립 시 못을 박거나 물건을 부술 때 주로 사용되는 도구입니다.',
      synonymAntonym: '말렛(mallet)이나 메이스(mace)와 비슷하지만, 못을 뽑는 장도리 형태가 가장 일반적입니다.',
    }),
    {
      definition: 'A hand tool with a heavy metal head mounted at right angles to a handle, used for breaking things or driving in nails.',
      synonyms: ['mallet', 'sledge', 'gavel'],
      antonyms: ['nail', 'screw', 'fastener'],
      exampleSentences: [
        { en: 'He used a heavy tool to drive the long nail into the wooden plank.', ko: '그는 나무 판자에 긴 못을 박기 위해 무거운 도구를 사용했습니다.' },
        { en: 'The blacksmith struck the glowing iron repeatedly on the anvil.', ko: '대장장이는 모루 위에서 달궈진 철을 반복해서 내리쳤습니다.' },
      ],
      wordDistractors: ['hamper', 'stammer', 'glamour'],
      definitionDistractors: [
        'a sharp blade attached to a long wooden pole for harvesting crops',
        'a precision instrument used to measure temperature changes',
        'a large flat surface used for preparing food in a kitchen',
      ],
    }
  ),
  word('handicap', '불리한 조건, 핸디캡', 4, 'noun',
    ['유리함', '장점', '혜택', '강점', '특권', '보너스', '이점', '기회', '능력', '자격'],
    tips({
      etymology: '과거 모자에 손을 넣어 내기를 하던 \'hand in cap\'에서 유래하여, 공평한 경기를 위해 실력이 좋은 사람에게 주는 불리한 조건을 뜻하게 되었습니다.',
      visual: '달리기 경주에서 다른 선수들보다 훨씬 뒤쪽 출발선에 서 있는 선수의 모습을 상상해 보세요.',
      soundAlike: '핸디캡(handicap)은 골프나 게임에서 실력 차이를 줄이려고 일부러 주는 \'불리한 조건\'으로 이미 익숙한 외래어입니다.',
      context: '스포츠 경기뿐만 아니라 신체적 제약이나 사회적 경쟁에서 겪는 불리한 여건을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'disadvantageous와 유의어 관계이며, 반대로 유리한 상황을 뜻하는 advantageous와 대조됩니다.',
    }),
    {
      definition: 'a circumstance or condition that makes progress or success more difficult; a disadvantage',
      synonyms: ['disadvantageous', 'unfavorable', 'impeding'],
      antonyms: ['advantageous', 'beneficial', 'favorable'],
      exampleSentences: [
        { en: 'The lack of modern equipment proved to be a major handicap for the local startup.', ko: '현대적인 장비의 부족은 지역 스타트업에게 큰 불리한 요소로 작용했다.' },
        { en: 'Poor infrastructure can act as a significant handicap to economic growth in developing regions.', ko: '열악한 인프라는 개발도상국 지역의 경제 성장에 상당한 불리한 장애물이 될 수 있다.' },
      ],
      wordDistractors: ['handcraft', 'handcuff', 'handiwork'],
      definitionDistractors: [
        'a special talent or skill that gives someone a competitive edge',
        'an official permit granting access to a restricted area',
        'a monetary bonus awarded for outstanding job performance',
      ],
    }
  ),
  word('handle', '손잡이', 5, 'noun',
    ['병렬/병치', '바이올리니스트', '주식회사, 법인', '사망', '심리학', '송아지', '연습', '손잡이', '카운슬러, 상담원', '병원균/병원체'],
    tips({
      etymology: '손을 뜻하는 \'hand\'에 도구를 나타내는 접미사 \'-le\'가 붙어 손으로 잡는 부분을 의미하게 되었습니다.',
      visual: '문고리나 가방 끈처럼 손으로 꽉 움켜쥐고 있는 모습을 상상해 보세요.',
      soundAlike: '\'핸들\'이라고 발음하며 자동차 운전대를 떠올리면 손으로 잡고 조작하는 물건임을 쉽게 기억할 수 있습니다.',
      context: '일상생활에서 문을 열거나 가방을 들 때 가장 먼저 손이 닿는 부위를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '잡는 부분인 grip과 유사하며, 잡을 곳이 없는 상태인 smooth surface와는 대조적입니다.',
    }),
    {
      definition: 'The part of an object designed to be held, gripped, or pulled by the hand.',
      synonyms: ['grip', 'knob', 'lever'],
      antonyms: ['base', 'body', 'center'],
      exampleSentences: [
        { en: 'The metal on the door was too hot to touch after being in the sun all day.', ko: '하루 종일 햇볕을 받은 문 손잡이는 만지기에 너무 뜨거웠다.' },
        { en: 'She grabbed the leather of her suitcase and headed toward the airport check-in counter.', ko: '그녀는 여행 가방의 손잡이를 잡고 공항 체크인 카운터로 향했다.' },
      ],
      wordDistractors: ['candle', 'mantle', 'bundle'],
      definitionDistractors: [
        'the central body or main frame of a mechanical device',
        'a decorative ornament attached to the front of a door',
        'the sharp cutting edge of a blade or knife',
      ],
    }
  ),
  word('handsome', '잘생긴', 1, 'adjective',
    ['못생긴', '추한', '평범한', '작은', '거친', '무거운', '빠른', '슬픈', '조용한', '차가운'],
    tips({
      etymology: '본래 \'다루기 쉬운\'이라는 뜻에서 시작하여, 솜씨가 좋고 보기 좋다는 의미로 발전했습니다.',
      visual: '정장을 멋지게 차려입고 미소 짓는 영화 배우의 얼굴을 상상해 보세요.',
      soundAlike: '핸드(hand)가 썸(some)타듯 매력적인 손길로 외모를 가꾼 모습을 떠올려 보세요.',
      context: '주로 남성의 외모가 수려할 때 쓰이지만, 때로는 여성의 이목구비가 뚜렷하거나 액수가 상당할 때도 쓰입니다.',
      synonymAntonym: 'good-looking과 유의어 관계이며, 반대말로는 ugly가 대표적입니다.',
    }),
    {
      definition: 'having an attractive, well-proportioned, and pleasing appearance, typically used for men',
      synonyms: ['attractive', 'good-looking', 'dashing'],
      antonyms: ['ugly', 'unattractive', 'unsightly'],
      exampleSentences: [
        { en: 'The actor looked very charming and impressive in his black tuxedo.', ko: '그 배우는 검은색 턱시도를 입고 매우 매력적이고 멋져 보였습니다.' },
        { en: 'He inherited his father\'s strong jawline and striking facial features.', ko: '그는 아버지의 강인한 턱선과 눈에 띄는 이목구비를 물려받았습니다.' },
      ],
      wordDistractors: ['ransom', 'blossom', 'phantom'],
      definitionDistractors: [
        'appearing tired or worn out from excessive physical activity',
        'dressed in expensive clothing regardless of personal style',
        'having a loud and commanding voice that demands attention',
      ],
    }
  ),
  word('hang', '걸다', 2, 'verb',
    ['던지다', '부수다', '숨기다', '자르다', '옮기다', '빌리다', '고치다', '태우다', '만들다', '지우다'],
    tips({
      etymology: '고대 영어 \'hangian\'에서 유래하여 무언가를 높은 곳에 고정시켜 아래로 늘어뜨리는 동작을 의미합니다.',
      visual: '벽에 못을 박고 예쁜 액자를 조심스럽게 걸어두는 모습을 상상해 보세요.',
      soundAlike: '옷걸이를 뜻하는 \'Hanger(행거)\'와 발음이 비슷하므로 옷을 거는 동작을 연상하면 쉽습니다.',
      context: '주로 옷, 그림, 전등 등을 벽이나 천장에 고정할 때 가장 흔하게 사용되는 표현입니다.',
      synonymAntonym: 'Suspend는 공중에 매달다라는 뜻으로 비슷하며, Drop은 아래로 떨어뜨리는 반대 의미를 가집니다.',
    }),
    {
      definition: 'to attach or suspend something from above so that it does not touch the ground',
      synonyms: ['drape', 'suspension', 'slope'],
      antonyms: ['ascent', 'rise', 'stiffness'],
      exampleSentences: [
        { en: 'The tailor adjusted the fabric to ensure a perfect hang for the evening gown.', ko: '재단사는 이브닝 드레스가 완벽하게 떨어지도록 옷감을 조정했습니다.' },
        { en: 'The heavy curtains have a natural hang that blocks out the sunlight effectively.', ko: '두꺼운 커튼은 자연스럽게 늘어지는 모양 덕분에 햇빛을 효과적으로 차단합니다.' },
      ],
      wordDistractors: ['gang', 'bang', 'rang'],
      definitionDistractors: [
        'to place an object firmly on a flat horizontal surface',
        'to fold a piece of fabric into a neat square shape',
        'to wrap something tightly around a cylindrical pole',
      ],
    }
  ),
  word('happen', '일어나다', 6, 'verb',
    ['사라지다', '멈추다', '계획하다', '거절하다', '기다리다', '준비하다', '성공하다', '실패하다', '이동하다', '파괴하다'],
    tips({
      etymology: '북유럽어 \'hap(운, 기회)\'에서 유래하여, 우연히 어떤 일이 닥치는 것을 의미합니다.',
      visual: '평화로운 호수에 갑자기 돌이 떨어져 파동이 일어나는 장면을 상상해 보세요.',
      soundAlike: '해픈(happen) -> \'해픈\' 일들이 자꾸 생기네? 라고 소리 내어 읽어보세요.',
      context: '주로 예상치 못한 사건이나 사고가 발생할 때 가장 자주 쓰이는 동사입니다.',
      synonymAntonym: 'occur와 유사하며, 반대로 일이 중단되거나 멈추는 것은 cease라고 합니다.',
    }),
    {
      definition: 'to take place or occur, especially without being planned first',
      synonyms: ['occur', 'transpire', 'arise'],
      antonyms: ['cease', 'stop', 'halt'],
      exampleSentences: [
        { en: 'Accidents often take place when drivers are not paying attention to the road.', ko: '운전자들이 도로에 주의를 기울이지 않을 때 사고가 자주 일어납니다.' },
        { en: 'Something strange is about to take place in this quiet little town.', ko: '이 조용하고 작은 마을에 곧 이상한 일이 일어날 것 같습니다.' },
      ],
      wordDistractors: ['hamper', 'harden', 'hasten'],
      definitionDistractors: [
        'to deliberately cause an event through careful planning',
        'to prevent something from taking place by intervening early',
        'to repeat a specific action multiple times in succession',
      ],
    }
  ),
  word('harbor', '항구', 7, 'noun',
    ['공항', '기차역', '정류장', '고속도로', '터미널', '교차로', '주차장', '활주로', '지하철', '보도'],
    tips({
      etymology: '군대를 뜻하는 here와 피난처를 뜻하는 beorg가 합쳐져 군대가 머무는 안전한 장소라는 의미에서 유래했습니다.',
      visual: '거친 파도를 피해 커다란 배들이 잔잔한 안쪽 물가에 줄지어 정박해 있는 모습을 상상해 보세요.',
      soundAlike: '하버드(Harvard) 대학과 발음이 비슷하지만, 끝소리가 \'r\'로 끝나며 배가 쉬어가는 곳임을 기억하세요.',
      context: '무역이나 어업을 위해 배가 드나드는 물리적 장소뿐만 아니라, 마음속에 생각이나 감정을 품는다는 동사로도 쓰입니다.',
      synonymAntonym: '배를 보호하는 port와 유사하며, 탁 트인 바다를 뜻하는 open sea와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A sheltered area of water deep enough to allow ships to anchor and remain protected from storms.',
      synonyms: ['port', 'haven', 'dock'],
      antonyms: ['open sea', 'ocean', 'abyss'],
      exampleSentences: [
        { en: 'Several fishing boats returned to the safety of the sheltered area before the storm hit.', ko: '폭풍이 치기 전 여러 척의 어선들이 안전한 항구 안으로 돌아왔다.' },
        { en: 'The city is famous for its natural deep-water location which allows large cruise ships to dock.', ko: '그 도시는 대형 크루즈선이 정박할 수 있는 천혜의 심해 항구로 유명하다.' },
      ],
      wordDistractors: ['barber', 'arbor', 'marble'],
      definitionDistractors: [
        'a tall lighthouse built on a rocky cliff to guide ships at night',
        'a long wooden bridge extending over a wide river',
        'a floating platform used for transporting cargo across lakes',
      ],
    }
  ),
  word('hard', '단단한', 3, 'adjective',
    ['부드러운', '유연한', '폭신한', '매끄러운', '가벼운', '약한', '흐물거리는', '말랑말랑한', '연약한', '매끈한'],
    tips({
      etymology: '고대 영어 \'heard\'에서 유래하여 견고하고 강한 상태를 의미하게 되었습니다.',
      visual: '망치로 내리쳐도 깨지지 않는 단단한 바위나 다이아몬드를 상상해 보세요.',
      soundAlike: '\'하드\' 아이스크림이 입안에서 딱딱하게 느껴지는 감각을 떠올리면 쉽습니다.',
      context: '물리적인 표면이 딱딱할 때뿐만 아니라, 문제가 풀기 어려울 때도 자주 쓰입니다.',
      synonymAntonym: 'solid와 firm은 비슷한 느낌을 주며, soft는 정반대의 부드러운 질감을 뜻합니다.',
    }),
    {
      definition: 'solid, firm, and resistant to pressure; not easily broken or bent.',
      synonyms: ['solid', 'firm', 'rigid'],
      antonyms: ['soft', 'flexible', 'yielding'],
      exampleSentences: [
        { en: 'The ground was so frozen and tough that it was impossible to dig a hole.', ko: '땅이 너무 얼고 단단해서 구멍을 파는 것이 불가능했다.' },
        { en: 'Diamonds are known for being the most durable natural substance on Earth.', ko: '다이아몬드는 지구상에서 가장 단단한 천연 물질로 알려져 있다.' },
      ],
      wordDistractors: ['harp', 'herd', 'harm'],
      definitionDistractors: [
        'extremely soft and easily deformed by slight pressure',
        'requiring great effort and determination to accomplish',
        'having a smooth and polished surface texture',
      ],
    }
  ),
  word('hardly', '거의 아니다', 4, 'adverb',
    ['항상', '이미', '곧', '직접', '간접적으로', '정확히', '대략', '차근차근', '집중해서', '즉시'],
    tips({
      etymology: '형용사 hard에 부사형 접미사 ly가 붙었지만 \'열심히\'가 아닌 \'거의 ~않다\'라는 부정의 의미로 변했습니다.',
      visual: '안개가 자욱해서 앞이 거의 보이지 않는 희미한 풍경을 상상해 보세요.',
      soundAlike: '\'하들리\'라고 발음하며, 무언가를 하기 \'힘들리(힘들지)\'라고 연상하여 \'거의 못 한다\'는 뜻을 기억하세요.',
      context: '부정어인 not을 쓰지 않고도 문장 전체를 부정적인 뉘앙스로 바꿀 때 자주 쓰입니다.',
      synonymAntonym: '거의 없는 상태인 barely와 항상 그런 상태인 always를 대조해서 외우면 효과적입니다.',
    }),
    {
      definition: 'used to say that something is scarcely true or happens only to a very small degree',
      synonyms: ['scarcely', 'barely', 'rarely'],
      antonyms: ['frequently', 'always', 'completely'],
      exampleSentences: [
        { en: 'The music was so quiet that I could hear it over the noise of the crowd.', ko: '음악 소리가 너무 작아서 군중의 소음 속에서 거의 들을 수 없었다.' },
        { en: 'They had known each other for only two days, so they were acquainted.', ko: '그들은 서로 안 지 이틀밖에 되지 않아서 거의 모르는 사이나 다름없었다.' },
      ],
      wordDistractors: ['hearty', 'hastily', 'harshly'],
      definitionDistractors: [
        'with great enthusiasm and energy throughout the entire process',
        'in a very precise and careful manner with close attention to detail',
        'occurring repeatedly and consistently over a long period of time',
      ],
    }
  ),
  word('harm', '해', 5, 'noun',
    ['이익', '도움', '보호', '치유', '성장', '축복', '평화', '안전', '친절', '보상'],
    tips({
      etymology: '고대 영어 \'hearm\'에서 유래되었으며, 슬픔이나 고통을 뜻하는 뿌리를 가지고 있습니다.',
      visual: '깨진 유리잔이나 다친 무릎처럼 무언가 손상된 이미지를 떠올려 보세요.',
      soundAlike: '발음이 \'함\'과 비슷하니, 함부로 다뤄서 \'해\'를 입히는 상황을 연상하세요.',
      context: '주로 신체적 부상이나 정신적 손상, 혹은 환경 파괴를 언급할 때 자주 쓰입니다.',
      synonymAntonym: 'damage와 유의어 관계이며, 반대말인 benefit과 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'physical injury or mental damage caused by an action or event',
      synonyms: ['damage', 'injury', 'mischief'],
      antonyms: ['benefit', 'blessing', 'assistance'],
      exampleSentences: [
        { en: 'The heavy storm caused significant physical damage to the coastal villages.', ko: '심한 폭풍은 해안가 마을들에 상당한 물리적 피해를 입혔다.' },
        { en: 'Smoking can lead to serious long-term health issues for your lungs.', ko: '흡연은 폐 건강에 심각하고 장기적인 해를 끼칠 수 있다.' },
      ],
      wordDistractors: ['charm', 'farm', 'harp'],
      definitionDistractors: [
        'a positive outcome that benefits all parties involved equally',
        'a protective layer that shields against external threats',
        'a calming influence that promotes relaxation and well-being',
      ],
    }
  ),
  word('harsh', '거친, 가혹한', 6, 'adjective',
    ['부드러운', '온화한', '매끄러운', '친절한', '유연한', '따뜻한', '관대한', '평온한', '안락한', '가벼운'],
    tips({
      etymology: '중세 영어 \'hersh\'에서 유래했으며, 원래 질감이 거칠거나 껄끄러운 것을 묘사할 때 쓰였습니다.',
      visual: '겨울철 살을 에는 듯한 차가운 칼바람이나 사막의 거친 모래 폭풍을 상상해 보세요.',
      soundAlike: '\'하~ 쉬!\' 하고 거칠게 숨을 내뱉는 소리처럼 들린다고 생각하면 강렬한 느낌을 기억하기 쉽습니다.',
      context: '비판이 너무 가혹하거나 날씨가 매우 혹독할 때, 혹은 조명이 눈이 아플 정도로 밝을 때 주로 사용합니다.',
      synonymAntonym: '부드러운 \'gentle\'과는 정반대의 느낌이며, 엄격함을 뜻하는 \'severe\'와 결이 비슷합니다.',
    }),
    {
      definition: 'unpleasantly rough, cruel, or severe in a way that is difficult to endure',
      synonyms: ['severe', 'cruel', 'stringent'],
      antonyms: ['gentle', 'mild', 'lenient'],
      exampleSentences: [
        { en: 'The mountain climbers had to endure extremely cold and punishing weather conditions.', ko: '등산객들은 극도로 차갑고 혹독한 기상 조건을 견뎌야만 했습니다.' },
        { en: 'Critics gave the new movie a very negative review, calling it a failure.', ko: '비평가들은 그 새 영화에 대해 실패작이라 부르며 매우 가혹한 평가를 내렸습니다.' },
      ],
      wordDistractors: ['marsh', 'crash', 'brash'],
      definitionDistractors: [
        'pleasantly warm and comfortable in temperature or atmosphere',
        'spoken in a gentle and encouraging tone of voice',
        'smooth and soothing to the touch like silk fabric',
      ],
    }
  ),
  word('harvest', '수확', 7, 'noun',
    ['파종', '경작', '비료', '가뭄', '홍수', '잡초', '농기구', '토양', '기근', '재배'],
    tips({
      etymology: '고대 영어 \'hærfest\'에서 유래했으며, 이는 가을(Autumn)을 뜻하는 말에서 수확의 시기로 의미가 확장되었습니다.',
      visual: '황금빛으로 물든 논밭에서 농부들이 낫을 들고 잘 익은 곡식을 거두어들이는 풍요로운 장면을 상상해 보세요.',
      soundAlike: '하(Har)늘에서 베(Vest)스트(Best) 곡식들이 쏟아지는 소리라고 연상하면 기억하기 쉽습니다.',
      context: '농업뿐만 아니라 노력의 결실을 맺는 비유적인 상황에서도 자주 사용되는 표현입니다.',
      synonymAntonym: 'yield나 crop은 거두어들인 결과물에 집중하고, seed나 planting은 그 시작점에 집중하는 반대 개념입니다.',
    }),
    {
      definition: 'The process or period of gathering in crops that have reached maturity on a farm.',
      synonyms: ['yield', 'crop', 'produce'],
      antonyms: ['planting', 'sowing', 'seedtime'],
      exampleSentences: [
        { en: 'Farmers are working long hours in the fields to ensure a successful autumn gathering of crops.', ko: '농부들은 성공적인 가을 작물 수확을 보장하기 위해 들판에서 장시간 일하고 있습니다.' },
        { en: 'The heavy rains during the summer months resulted in a very poor grain output this year.', ko: '여름철의 폭우로 인해 올해 곡물 수확량이 매우 저조했습니다.' },
      ],
      wordDistractors: ['harness', 'haven', 'hatchet'],
      definitionDistractors: [
        'the process of planting seeds in freshly prepared soil',
        'a period of drought when crops fail to grow properly',
        'the act of storing surplus food in underground cellars',
      ],
    }
  ),
];
