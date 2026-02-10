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
    })
  ),
  word('Book', '책', 1, 'noun',
    ['노트', '신문', '잡지', '다이어리', '일기', '사전', '소설', '공책', '만화', '전자책'],
    tips({
      etymology: '고대 영어 bōc에서 유래',
      visual: '펼쳐진 책에서 글자가 튀어나오는 모습',
      soundAlike: '북 = 북소리처럼 읽는 소리',
      context: 'She reads a book before bed.',
      synonymAntonym: 'Syn: publication',
    })
  ),
  word('Cat', '고양이', 1, 'noun',
    ['개', '토끼', '햄스터', '새', '물고기', '쥐', '여우', '돼지', '닭', '말'],
    tips({
      etymology: '고대 영어 catt에서 유래',
      visual: '고양이가 야옹하며 구르는 모습',
      soundAlike: '캣 = 캣캣(고양이 울음소리)',
      context: 'The cat is sleeping on the sofa.',
      synonymAntonym: 'Syn: feline',
    })
  ),
  word('Dog', '개', 1, 'noun',
    ['고양이', '늑대', '여우', '토끼', '햄스터', '새', '물고기', '양', '말', '돼지'],
    tips({
      etymology: '고대 영어 docga에서 유래',
      visual: '꼬리를 흔드는 개가 주인을 반기는 모습',
      soundAlike: '독 = 독실한(충성스러운)',
      context: 'I walk my dog every morning.',
      synonymAntonym: 'Syn: canine',
    })
  ),
  word('Eat', '먹다', 1, 'verb',
    ['마시다', '자다', '달리다', '걷다', '읽다', '쓰다', '보다', '듣다', '말하다', '놀다'],
    tips({
      etymology: '고대 영어 etan에서 유래',
      visual: '포크로 음식을 입에 넣는 모습',
      soundAlike: '잇 = 잇다(이어서 먹다)',
      context: 'We eat breakfast at 7 am.',
      synonymAntonym: 'Syn: consume',
    })
  ),
  word('Fish', '물고기', 1, 'noun',
    ['고래', '새우', '문어', '게', '조개', '해파리', '상어', '금붕어', '연어', '참치'],
    tips({
      etymology: '고대 영어 fisc에서 유래',
      visual: '물속에서 헤엄치는 물고기',
      soundAlike: '피쉬 = 피쉬피쉬(물소리)',
      context: 'There are many fish in the pond.',
      synonymAntonym: 'Syn: aquatic animal',
    })
  ),
  word('Good', '좋은', 1, 'adjective',
    ['나쁜', '큰', '작은', '많은', '적은', '빠른', '느린', '따뜻한', '차가운', '밝은'],
    tips({
      etymology: '고대 영어 gōd에서 유래',
      visual: '엄지가 위로 올라간 좋아요 손짓',
      soundAlike: '굿 = 굿데이(좋은 날)',
      context: 'She is a good student.',
      synonymAntonym: 'Syn: nice, Ant: bad',
    })
  ),
  word('Hand', '손', 1, 'noun',
    ['발', '팔', '다리', '머리', '얼굴', '눈', '코', '입', '귀', '손가락'],
    tips({
      etymology: '고대 영어 hand에서 유래',
      visual: '손바닥을 펼쳐 보여주는 모습',
      soundAlike: '핸드 = 핸드폰(손에 들고)',
      context: 'Wash your hands before eating.',
      synonymAntonym: 'Syn: palm',
    })
  ),
  word('Ice', '얼음', 1, 'noun',
    ['눈', '물', '구름', '비', '바람', '불', '흙', '모래', '돌', '나무'],
    tips({
      etymology: '고대 영어 īs에서 유래',
      visual: '투명한 얼음 조각이 반짝이는 모습',
      soundAlike: '아이스 = 아이스크림(얼음)',
      context: 'The ice is melting in the sun.',
      synonymAntonym: 'Syn: frozen water',
    })
  ),
  word('Jump', '뛰다', 1, 'verb',
    ['달리다', '걷다', '앉다', '서다', '누우다', '날다', '수영하다', '등반하다', '타다', '던지다'],
    tips({
      etymology: '프랑스어 jumpere에서 유래',
      visual: '공중으로 튀어오르는 모습',
      soundAlike: '점프 = 점프점프(뛰는 소리)',
      context: 'The children jump on the trampoline.',
      synonymAntonym: 'Syn: leap',
    })
  ),
  word('Key', '열쇠', 1, 'noun',
    ['자물쇠', '문', '창문', '서랍', '상자', '가방', '지갑', '시계', '전화', '버튼'],
    tips({
      etymology: '고대 영어 cǣg에서 유래',
      visual: '열쇠로 문을 열는 모습',
      soundAlike: '키 = 키보드의 키',
      context: 'I lost my key yesterday.',
      synonymAntonym: 'Syn: lock opener',
    })
  ),
  word('Love', '사랑하다', 1, 'verb',
    ['싫어하다', '좋아하다', '미워하다', '그리워하다', '기억하다', '잊다', '믿다', '바라다', '소원하다', '감사하다'],
    tips({
      etymology: '고대 영어 lufu에서 유래',
      visual: '하트 모양이 하늘에 떠있는 모습',
      soundAlike: '러브 = 러브러브(사랑)',
      context: 'I love my family.',
      synonymAntonym: 'Syn: adore, Ant: hate',
    })
  ),
  word('Milk', '우유', 1, 'noun',
    ['물', '주스', '커피', '차', '녹차', '요거트', '치즈', '버터', '크림', '두유'],
    tips({
      etymology: '고대 영어 meolc에서 유래',
      visual: '흰 우유가 컵에 담긴 모습',
      soundAlike: '밀크 = 밀크셰이크(우유)',
      context: 'I drink milk every morning.',
      synonymAntonym: 'Syn: dairy',
    })
  ),
  word('Name', '이름', 1, 'noun',
    ['나이', '생일', '주소', '전화번호', '직업', '학교', '친구', '가족', '국적', '취미'],
    tips({
      etymology: '고대 영어 nama에서 유래',
      visual: '명함에 이름이 적힌 모습',
      soundAlike: '네임 = 네임태그(이름표)',
      context: "What is your name?",
      synonymAntonym: 'Syn: title',
    })
  ),
  word('Open', '열다', 1, 'verb',
    ['닫다', '만들다', '부수다', '사다', '팔다', '주다', '받다', '찾다', '잃다', '보이다'],
    tips({
      etymology: '고대 영어 openian에서 유래',
      visual: '문을 밀어서 여는 모습',
      soundAlike: '오픈 = 오픈하우스(열린 집)',
      context: 'Please open the window.',
      synonymAntonym: 'Syn: unlock, Ant: close',
    })
  ),
  word('Pen', '펜', 1, 'noun',
    ['연필', '지우개', '색연필', '마커', '칠판', '노트', '공책', '책', '가위', '풀'],
    tips({
      etymology: '라틴어 penna(깃털)에서 유래',
      visual: '펜으로 글씨를 쓰는 모습',
      soundAlike: '펜 = 펜팔(펜으로 편지)',
      context: 'Can I borrow your pen?',
      synonymAntonym: 'Syn: writing instrument',
    })
  ),
  word('Queen', '여왕', 1, 'noun',
    ['왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '장관', '회장', '부장'],
    tips({
      etymology: '고대 영어 cwēn에서 유래',
      visual: '왕관을 쓴 여왕이 옥좌에 앉은 모습',
      soundAlike: '퀸 = 퀸즈(여왕들)',
      context: 'The queen lives in the palace.',
      synonymAntonym: 'Syn: monarch',
    })
  ),
  word('Rain', '비', 1, 'noun',
    ['눈', '천둥', '번개', '바람', '구름', '안개', '이슬', '폭풍', '홍수', '가뭄'],
    tips({
      etymology: '고대 영어 regn에서 유래',
      visual: '하늘에서 비가 내리는 모습',
      soundAlike: '레인 = 레인코트(빗물)',
      context: 'It is raining outside.',
      synonymAntonym: 'Syn: precipitation',
    })
  ),
  word('Sun', '해', 1, 'noun',
    ['달', '별', '구름', '하늘', '지구', '행성', '우주', '태양계', '빛', '그림자'],
    tips({
      etymology: '고대 영어 sunne에서 유래',
      visual: '노란 해가 하늘에 빛나는 모습',
      soundAlike: '썬 = 썬글라스(태양)',
      context: 'The sun rises in the east.',
      synonymAntonym: 'Syn: star',
    })
  ),
  word('Tree', '나무', 1, 'noun',
    ['꽃', '풀', '덤불', '숲', '잎', '가지', '뿌리', '씨앗', '과일', '나뭇잎'],
    tips({
      etymology: '고대 영어 trēow에서 유래',
      visual: '키 큰 나무에 잎이 무성한 모습',
      soundAlike: '트리 = 크리스마스 트리',
      context: 'The birds sit in the tree.',
      synonymAntonym: 'Syn: plant',
    })
  ),
  word('Under', '아래에', 1, 'preposition',
    ['위에', '앞에', '뒤에', '옆에', '사이에', '안에', '밖에', '가까이', '멀리', '중간에'],
    tips({
      etymology: '고대 영어 under에서 유래',
      visual: '책상 아래에 상자가 있는 모습',
      soundAlike: '언더 = 언더그라운드(지하)',
      context: 'The cat is under the table.',
      synonymAntonym: 'Syn: below, Ant: over',
    })
  ),
  word('Voice', '목소리', 1, 'noun',
    ['소리', '노래', '말', '웃음', '울음', '비명', '속삭임', '외침', '숨소리', '심장소리'],
    tips({
      etymology: '라틴어 vox에서 유래',
      visual: '입에서 음파가 퍼져나가는 모습',
      soundAlike: '보이스 = 보이스메일(음성)',
      context: 'She has a beautiful voice.',
      synonymAntonym: 'Syn: sound',
    })
  ),
  word('Water', '물', 1, 'noun',
    ['얼음', '증기', '비', '눈', '바다', '강', '호수', '우물', '수분', '이슬'],
    tips({
      etymology: '고대 영어 wæter에서 유래',
      visual: '맑은 물이 컵에 담긴 모습',
      soundAlike: '워터 = 워터파크(물)',
      context: 'Drink plenty of water.',
      synonymAntonym: 'Syn: H2O',
    })
  ),
  word('Yes', '예', 1, 'adverb',
    ['아니오', '모르겠어요', '아마', '당연히', '물론', '정말', '확실히', '그렇죠', '네', '응'],
    tips({
      etymology: '고대 영어 gēse에서 유래',
      visual: '고개를 끄덕이며 맞다고 하는 모습',
      soundAlike: '예스 = 예스맨(동의하는 사람)',
      context: 'Yes, I would like some coffee.',
      synonymAntonym: 'Syn: absolutely, Ant: no',
    })
  ),
  word('Zoo', '동물원', 1, 'noun',
    ['놀이공원', '미술관', '박물관', '수족관', '숲', '공원', '농장', '서커스', '수영장', '도서관'],
    tips({
      etymology: 'zoological garden의 약어',
      visual: '사자와 코끼리가 있는 동물원',
      soundAlike: '주 = 주(동물이 사는 곳)',
      context: 'We went to the zoo on Sunday.',
      synonymAntonym: 'Syn: menagerie',
    })
  ),
  word('Angry', '화난', 2, 'adjective',
    ['기쁜', '슬픈', '두려운', '놀란', '걱정스러운', '짜증난', '피곤한', '지루한', '행복한', '차분한'],
    tips({
      etymology: '고대 노르웨이어 angr에서 유래',
      visual: '눈썹을 찌푸리고 화난 표정',
      soundAlike: '앵그리 = 앵그리버드(화난 새)',
      context: 'He was angry when he lost the game.',
      synonymAntonym: 'Syn: mad, Ant: calm',
    })
  ),
  word('Brave', '용감한', 2, 'adjective',
    ['겁많은', '소심한', '용기있는', '대담한', '강한', '약한', '느긋한', '조급한', '침착한', '당당한'],
    tips({
      etymology: '이탈리아어 bravo에서 유래',
      visual: '불 앞에 서서 두려워하지 않는 모습',
      soundAlike: '브레이브 = 브레이브(용기)',
      context: 'She is brave enough to try new things.',
      synonymAntonym: 'Syn: courageous, Ant: cowardly',
    })
  ),
  word('Clean', '깨끗한', 2, 'adjective',
    ['더러운', '지저분한', '어두운', '밝은', '새로운', '오래된', '단정한', '흐트러진', '정돈된', '청결한'],
    tips({
      etymology: '고대 영어 clǣne에서 유래',
      visual: '빛나는 깨끗한 방',
      soundAlike: '클린 = 클린업(청소)',
      context: 'Please keep your room clean.',
      synonymAntonym: 'Syn: tidy, Ant: dirty',
    })
  ),
  word('Dream', '꿈', 2, 'noun',
    ['현실', '희망', '목표', '환상', '상상', '기억', '생각', '계획', '바람', '소원'],
    tips({
      etymology: '고대 영어 drēam에서 유래',
      visual: '잠든 사람 머리 위에 말풍선으로 꿈',
      soundAlike: '드림 = 드림컴트루(꿈이 현실로)',
      context: 'I had a strange dream last night.',
      synonymAntonym: 'Syn: vision',
    })
  ),
  word('Early', '일찍', 2, 'adverb',
    ['늦게', '빨리', '천천히', '바로', '나중에', '이전에', '먼저', '나중', '당장', '곧'],
    tips({
      etymology: '고대 영어 ǣrlice에서 유래',
      visual: '아침 일찍 해가 뜨는 모습',
      soundAlike: '얼리 = 얼리버드(일찍 오는 사람)',
      context: 'I wake up early every day.',
      synonymAntonym: 'Syn: soon, Ant: late',
    })
  ),
  word('Family', '가족', 2, 'noun',
    ['친구', '이웃', '동료', '선생님', '학생', '부모', '형제', '자매', '친척', '사람들'],
    tips({
      etymology: '라틴어 familia에서 유래',
      visual: '부모와 아이들이 함께 있는 모습',
      soundAlike: '패밀리 = 패밀리맨(가족의 남자)',
      context: 'My family lives in Seoul.',
      synonymAntonym: 'Syn: household',
    })
  ),
  word('Garden', '정원', 2, 'noun',
    ['공원', '숲', '농장', '마당', '화단', '텃밭', '온실', '잔디밭', '산', '들판'],
    tips({
      etymology: '고대 영어 geard에서 유래',
      visual: '꽃과 나무가 있는 아름다운 정원',
      soundAlike: '가든 = 가든파티(정원 파티)',
      context: 'She grows vegetables in her garden.',
      synonymAntonym: 'Syn: yard',
    })
  ),
  word('Happy', '행복한', 2, 'adjective',
    ['슬픈', '화난', '걱정스러운', '두려운', '외로운', '지루한', '피곤한', '불행한', '기쁜', '즐거운'],
    tips({
      etymology: '고대 영어 hæpp에서 유래',
      visual: '웃는 얼굴과 하트',
      soundAlike: '해피 = 해피엔딩(행복한 결말)',
      context: 'I am happy to see you.',
      synonymAntonym: 'Syn: joyful, Ant: sad',
    })
  ),
  word('Island', '섬', 2, 'noun',
    ['대륙', '반도', '해변', '바다', '산', '호수', '강', '숲', '사막', '초원'],
    tips({
      etymology: '고대 영어 īegland에서 유래',
      visual: '바다 한가운데 있는 섬',
      soundAlike: '아일랜드 = 아일랜드(아이들의 땅)',
      context: 'We went to a small island for vacation.',
      synonymAntonym: 'Syn: isle',
    })
  ),
  word('Jungle', '정글', 2, 'noun',
    ['숲', '사막', '산', '초원', '늪', '바다', '강', '동굴', '계곡', '절벽'],
    tips({
      etymology: '산스크리트어 jangala에서 유래',
      visual: '뻗어있는 덩굴과 울창한 나무',
      soundAlike: '정글 = 정글짐(정글 같은 놀이터)',
      context: 'Many animals live in the jungle.',
      synonymAntonym: 'Syn: rainforest',
    })
  ),
  word('Kitchen', '부엌', 2, 'noun',
    ['거실', '침실', '화장실', '베란다', '창고', '식당', '식탁', '냉장고', '싱크대', '가스레인지'],
    tips({
      etymology: '라틴어 coquina에서 유래',
      visual: '냉장고와 식탁이 있는 부엌',
      soundAlike: '키친 = 키친웨어(부엌용품)',
      context: 'My mother is cooking in the kitchen.',
      synonymAntonym: 'Syn: cookroom',
    })
  ),
  word('Lamp', '램프', 2, 'noun',
    ['전등', '촛불', '손전등', '스탠드', '천장등', '조명', '불', '창문', '거울', '시계'],
    tips({
      etymology: '그리스어 lampas에서 유래',
      visual: '책상 위에 빛나는 램프',
      soundAlike: '램프 = 램프(빛을 주는 것)',
      context: 'Turn on the lamp, please.',
      synonymAntonym: 'Syn: light',
    })
  ),
  word('Morning', '아침', 2, 'noun',
    ['점심', '저녁', '밤', '오후', '한낮', '새벽', '황혼', '낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 morgen에서 유래',
      visual: '해가 뜨는 아침 하늘',
      soundAlike: '모닝 = 굿모닝(좋은 아침)',
      context: 'I have breakfast in the morning.',
      synonymAntonym: 'Syn: dawn',
    })
  ),
  word('Night', '밤', 2, 'noun',
    ['낮', '아침', '오후', '저녁', '새벽', '황혼', '해질녘', '한낮', '자정', '정오'],
    tips({
      etymology: '고대 영어 niht에서 유래',
      visual: '별이 빛나는 밤하늘',
      soundAlike: '나이트 = 굿나이트(잘 자)',
      context: 'The stars shine at night.',
      synonymAntonym: 'Syn: evening, Ant: day',
    })
  ),
  word('Ocean', '바다', 2, 'noun',
    ['호수', '강', '시내', '저수지', '해변', '섬', '해양', '수영장', '폭포', '운하'],
    tips({
      etymology: '그리스어 Ōkeanós에서 유래',
      visual: '넓은 파란 바다와 파도',
      soundAlike: '오션 = 오션뷰(바다 전망)',
      context: 'We swam in the ocean last summer.',
      synonymAntonym: 'Syn: sea',
    })
  ),
  word('Parent', '부모', 2, 'noun',
    ['자식', '형제', '친구', '선생님', '조부모', '삼촌', '이모', '친척', '가족', '보호자'],
    tips({
      etymology: '라틴어 parens에서 유래',
      visual: '아이를 안아주는 부모',
      soundAlike: '페어런트 = 페어런트미팅(부모 상담)',
      context: 'My parents work in the city.',
      synonymAntonym: 'Syn: father or mother',
    })
  ),
  word('Quiet', '조용한', 2, 'adjective',
    ['시끄러운', '큰', '작은', '부드러운', '거친', '차분한', '평화로운', '고요한', '잠잠한', '눅눅한'],
    tips({
      etymology: '라틴어 quietus에서 유래',
      visual: '귀에 손가락을 대고 조용히 하는 표시',
      soundAlike: '콰이어트 = 콰이어트 타임(조용한 시간)',
      context: 'Please be quiet in the library.',
      synonymAntonym: 'Syn: silent, Ant: loud',
    })
  ),
  word('River', '강', 2, 'noun',
    ['바다', '호수', '시내', '운하', '폭포', '저수지', '연못', '시냇물', '둑', '다리'],
    tips({
      etymology: '라틴어 ripa에서 유래',
      visual: '물이 흐르는 강',
      soundAlike: '리버 = 리버사이드(강가)',
      context: 'The river flows through the city.',
      synonymAntonym: 'Syn: stream',
    })
  ),
  word('School', '학교', 2, 'noun',
    ['유치원', '대학', '학원', '도서관', '기숙사', '체육관', '실험실', '강당', '교실', '운동장'],
    tips({
      etymology: '그리스어 scholē에서 유래',
      visual: '아이들이 교실에서 공부하는 모습',
      soundAlike: '스쿨 = 스쿨버스(학교 버스)',
      context: 'I go to school by bus.',
      synonymAntonym: 'Syn: academy',
    })
  ),
  word('Table', '탁자', 2, 'noun',
    ['의자', '침대', '소파', '선반', '책장', '서랍장', '화장대', '식탁', '책상', '장식대'],
    tips({
      etymology: '라틴어 tabula에서 유래',
      visual: '음식이 놓인 식탁',
      soundAlike: '테이블 = 테이블매너(탁자 예절)',
      context: 'Put the book on the table.',
      synonymAntonym: 'Syn: desk',
    })
  ),
  word('Umbrella', '우산', 2, 'noun',
    ['모자', '코트', '양산', '장갑', '스카프', '부츠', '비옷', '바람막이', '선글라스', '파라솔'],
    tips({
      etymology: '이탈리아어 ombrella에서 유래',
      visual: '비 오는 날 우산을 쓰는 모습',
      soundAlike: '엄브렐라 = 엄브렐라(우산)',
      context: 'Take an umbrella. It might rain.',
      synonymAntonym: 'Syn: parasol',
    })
  ),
  word('Village', '마을', 2, 'noun',
    ['도시', '시골', '동네', '가게', '학교', '교회', '광장', '거리', '건물', '주택'],
    tips({
      etymology: '라틴어 villa에서 유래',
      visual: '작은 집들이 모인 아름다운 마을',
      soundAlike: '빌리지 = 빌리지피플(마을 사람들)',
      context: 'She lives in a small village.',
      synonymAntonym: 'Syn: town',
    })
  ),
  word('Window', '창문', 2, 'noun',
    ['문', '벽', '천장', '바닥', '지붕', '베란다', '발코니', '유리', '커튼', '블라인드'],
    tips({
      etymology: '고대 노르웨이어 vindauga에서 유래',
      visual: '빛이 들어오는 창문',
      soundAlike: '윈도우 = 윈도우쇼핑(창문 구경)',
      context: 'Open the window for fresh air.',
      synonymAntonym: 'Syn: pane',
    })
  ),
  word('Yellow', '노란색', 2, 'adjective',
    ['빨간색', '파란색', '초록색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 geolu에서 유래',
      visual: '노란 해바라기',
      soundAlike: '옐로우 = 옐로우카드(노란 카드)',
      context: 'The sun is yellow and bright.',
      synonymAntonym: 'Syn: golden',
    })
  ),
  word('Zero', '영', 2, 'noun',
    ['일', '이', '삼', '십', '백', '천', '만', '숫자', '점수', '온도'],
    tips({
      etymology: '아랍어 sifr에서 유래',
      visual: '원 모양의 숫자 0',
      soundAlike: '제로 = 제로베이스(0에서 시작)',
      context: 'The temperature is zero degrees.',
      synonymAntonym: 'Syn: nothing',
    })
  ),
];
