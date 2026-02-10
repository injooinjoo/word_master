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
    })
  ),
  word('Bed', '침대', 1, 'noun',
    ['의자', '소파', '탁자', '선반', '책상', '침실', '이불', '베개', '매트리스', '서랍장'],
    tips({
      etymology: '고대 영어 bedd에서 유래',
      visual: '푹신한 이불이 덮인 침대',
      soundAlike: '베드 = 베드타임(취침 시간)',
      context: 'I go to bed at 10 o\'clock.',
      synonymAntonym: 'Syn: cot',
    })
  ),
  word('Bird', '새', 1, 'noun',
    ['날개', '부리', '알', '둥지', '깃털', '나비', '벌', '파리', '나무', '하늘'],
    tips({
      etymology: '고대 영어 bridd에서 유래',
      visual: '하늘을 나는 작은 새',
      soundAlike: '버드 = 버드아이뷰(새의 시선)',
      context: 'The bird sings in the tree.',
      synonymAntonym: 'Syn: fowl',
    })
  ),
  word('Blue', '파란색', 1, 'adjective',
    ['빨간색', '초록색', '노란색', '검은색', '흰색', '주황색', '보라색', '분홍색', '갈색', '회색'],
    tips({
      etymology: '고대 영어 blāw에서 유래',
      visual: '맑은 하늘과 바다의 파란색',
      soundAlike: '블루 = 블루베리(파란 열매)',
      context: 'The sky is blue today.',
      synonymAntonym: 'Syn: azure',
    })
  ),
  word('Box', '상자', 1, 'noun',
    ['가방', '서랍', '병', '통', '바구니', '자루', '캔', '컵', '병', '케이스'],
    tips({
      etymology: '그리스어 pyxis에서 유래',
      visual: '사각형 상자에 선물이 담긴 모습',
      soundAlike: '박스 = 박스오피스(상자처럼 닫힌)',
      context: 'Put the toys in the box.',
      synonymAntonym: 'Syn: container',
    })
  ),
  word('Bus', '버스', 1, 'noun',
    ['기차', '지하철', '택시', '자동차', '비행기', '배', '정류장', '표', '운전사', '승객'],
    tips({
      etymology: 'omnibus의 약어(라틴어)',
      visual: '큰 버스가 정류장에 서 있는 모습',
      soundAlike: '버스 = 스쿨버스(학교 버스)',
      context: 'I take the bus to school.',
      synonymAntonym: 'Syn: coach',
    })
  ),
  word('Cake', '케이크', 1, 'noun',
    ['빵', '쿠키', '파이', '과자', '아이스크림', '캔디', '초콜릿', '초', '설탕', '밀가루'],
    tips({
      etymology: '고대 노르웨이어 kaka에서 유래',
      visual: '초가 꽂힌 생일 케이크',
      soundAlike: '케이크 = 케이크데이(축하 날)',
      context: 'We had cake for her birthday.',
      synonymAntonym: 'Syn: pastry',
    })
  ),
  word('City', '도시', 1, 'noun',
    ['나라', '마을', '시골', '거리', '건물', '학교', '공원', '병원', '은행', '시청'],
    tips({
      etymology: '라틴어 civitas에서 유래',
      visual: '고층 빌딩이 빽빽한 도시 전경',
      soundAlike: '시티 = 시티라이프(도시 생활)',
      context: 'Seoul is a big city.',
      synonymAntonym: 'Syn: metropolis',
    })
  ),
  word('Cold', '추운', 1, 'adjective',
    ['따뜻한', '뜨거운', '시원한', '얼음', '눈', '겨울', '감기', '열', '더운', '미지근한'],
    tips({
      etymology: '고대 영어 ceald에서 유래',
      visual: '추위에 떨리는 사람',
      soundAlike: '콜드 = 콜드크림(차가운 크림)',
      context: 'It is cold outside today.',
      synonymAntonym: 'Syn: chilly, Ant: hot',
    })
  ),
  word('Cup', '머그컵', 1, 'noun',
    ['그릇', '접시', '병', '유리잔', '냄비', '찻잔', '커피', '물', '국', '수프'],
    tips({
      etymology: '라틴어 cuppa에서 유래',
      visual: '손에 든 따뜻한 음료가 담긴 컵',
      soundAlike: '컵 = 월드컵(세계 컵)',
      context: 'Would you like a cup of tea?',
      synonymAntonym: 'Syn: mug',
    })
  ),
  word('Dance', '춤추다', 1, 'verb',
    ['노래하다', '연주하다', '걷다', '뛰다', '달리다', '놀다', '웃다', '울다', '앉다', '서다'],
    tips({
      etymology: '고대 프랑스어 dancier에서 유래',
      visual: '음악에 맞춰 춤추는 사람들',
      soundAlike: '댄스 = 댄스파티(춤 파티)',
      context: 'She loves to dance.',
      synonymAntonym: 'Syn: sway',
    })
  ),
  word('Door', '문', 1, 'noun',
    ['창문', '벽', '천장', '바닥', '지붕', '열쇠', '자물쇠', '손잡이', '현관', '복도'],
    tips({
      etymology: '고대 영어 duru에서 유래',
      visual: '손잡이를 잡고 여는 문',
      soundAlike: '도어 = 도어벨(문 종)',
      context: 'Close the door, please.',
      synonymAntonym: 'Syn: entrance',
    })
  ),
  word('Egg', '달걀', 1, 'noun',
    ['계란', '고기', '우유', '치즈', '버터', '빵', '쌀', '과일', '야채', '닭'],
    tips({
      etymology: '고대 영어 ǣg에서 유래',
      visual: '바삭하게 구운 스크램블 에그',
      soundAlike: '에그 = 에그롤(계란 말이)',
      context: 'I eat an egg for breakfast.',
      synonymAntonym: 'Syn: ovum',
    })
  ),
  word('Eye', '눈', 1, 'noun',
    ['귀', '코', '입', '얼굴', '머리', '손', '발', '머리카락', '눈썹', '속눈썹'],
    tips({
      etymology: '고대 영어 ēage에서 유래',
      visual: '빛을 반사하는 눈동자',
      soundAlike: '아이 = 아이브로우(눈썹)',
      context: 'She has beautiful brown eyes.',
      synonymAntonym: 'Syn: organ of sight',
    })
  ),
  word('Face', '얼굴', 1, 'noun',
    ['머리', '목', '손', '발', '몸', '눈', '코', '입', '귀', '머리카락'],
    tips({
      etymology: '라틴어 facies에서 유래',
      visual: '미소 짓는 얼굴',
      soundAlike: '페이스 = 페이스북(얼굴 책)',
      context: 'Wash your face before bed.',
      synonymAntonym: 'Syn: countenance',
    })
  ),
  word('Food', '음식', 1, 'noun',
    ['물', '공기', '불', '흙', '빵', '고기', '과일', '야채', '식사', '간식'],
    tips({
      etymology: '고대 영어 fōda에서 유래',
      visual: '식탁에 차려진 맛있는 음식',
      soundAlike: '푸드 = 푸드코트(음식 코너)',
      context: 'We need food to live.',
      synonymAntonym: 'Syn: sustenance',
    })
  ),
  word('Girl', '소녀', 1, 'noun',
    ['소년', '남자', '여자', '아이', '어른', '엄마', '아빠', '언니', '오빠', '동생'],
    tips({
      etymology: '고대 영어 gyrela에서 유래',
      visual: '활짝 웃는 소녀',
      soundAlike: '걸 = 걸프렌드(여자 친구)',
      context: 'The girl is playing in the park.',
      synonymAntonym: 'Syn: lass, Ant: boy',
    })
  ),
  word('Green', '초록색', 1, 'adjective',
    ['빨간색', '파란색', '노란색', '검은색', '흰색', '주황색', '보라색', '갈색', '회색', '분홍색'],
    tips({
      etymology: '고대 영어 grēne에서 유래',
      visual: '싱싱한 초록 나뭇잎',
      soundAlike: '그린 = 그린라이트(초록 신호)',
      context: 'The grass is green in spring.',
      synonymAntonym: 'Syn: verdant',
    })
  ),
  word('Hat', '모자', 1, 'noun',
    ['코트', '재킷', '셔츠', '바지', '신발', '양말', '스카프', '장갑', '안경', '우산'],
    tips({
      etymology: '고대 영어 hætt에서 유래',
      visual: '머리에 쓰인 모자',
      soundAlike: '핫 = 탑핫(모자처럼 꼭대기)',
      context: 'Wear a hat in the sun.',
      synonymAntonym: 'Syn: cap',
    })
  ),
  word('Home', '집', 1, 'noun',
    ['학교', '회사', '병원', '가게', '공원', '길', '집', '방', '마당', '부엌'],
    tips({
      etymology: '고대 영어 hām에서 유래',
      visual: '따뜻한 조명이 켜진 집',
      soundAlike: '홈 = 홈타운(고향)',
      context: 'There is no place like home.',
      synonymAntonym: 'Syn: house',
    })
  ),
  word('King', '왕', 1, 'noun',
    ['여왕', '공주', '왕자', '기사', '신하', '대통령', '총리', '백성', '노예', '황제'],
    tips({
      etymology: '고대 영어 cyning에서 유래',
      visual: '왕관을 쓴 왕이 옥좌에 앉은 모습',
      soundAlike: '킹 = 킹사이즈(왕처럼 큰)',
      context: 'The king rules the country.',
      synonymAntonym: 'Syn: monarch',
    })
  ),
  word('Leg', '다리', 1, 'noun',
    ['팔', '손', '발', '머리', '몸', '허리', '등', '가슴', '어깨', '무릎'],
    tips({
      etymology: '고대 노르웨이어 leggr에서 유래',
      visual: '걷는 사람의 다리',
      soundAlike: '레그 = 테이블레그(탁자 다리)',
      context: 'He broke his leg in the accident.',
      synonymAntonym: 'Syn: limb',
    })
  ),
  word('Man', '남자', 1, 'noun',
    ['여자', '아이', '소년', '소녀', '어른', '노인', '소년', '아버지', '아들', '형제'],
    tips({
      etymology: '고대 영어 mann에서 유래',
      visual: '서 있는 성인 남자',
      soundAlike: '맨 = 맨파워(남성 인력)',
      context: 'The man is walking his dog.',
      synonymAntonym: 'Syn: male, Ant: woman',
    })
  ),
  word('Nose', '코', 1, 'noun',
    ['눈', '입', '귀', '얼굴', '머리', '턱', '볼', '이마', '목', '가슴'],
    tips({
      etymology: '고대 영어 nosu에서 유래',
      visual: '얼굴 중앙에 있는 코',
      soundAlike: '노즈 = 노즈블리드(코피)',
      context: 'She has a small nose.',
      synonymAntonym: 'Syn: organ of smell',
    })
  ),
  word('Old', '오래된', 1, 'adjective',
    ['새로운', '젊은', '어린', '신선한', '최신', '단순한', '낡은', '고대', '현대', '미래'],
    tips({
      etymology: '고대 영어 eald에서 유래',
      visual: '낡은 건물이나 귀중품',
      soundAlike: '올드 = 올드패션드(구식)',
      context: 'That is an old house.',
      synonymAntonym: 'Syn: ancient, Ant: new',
    })
  ),
  word('Again', '다시', 2, 'adverb',
    ['처음', '한번', '여러번', '항상', '절대', '가끔', '자주', '많이', '조금', '아직'],
    tips({
      etymology: '고대 영어 Ongēan에서 유래',
      visual: '되돌아가는 화살표',
      soundAlike: '어게인 = 어게인앤어게인(반복)',
      context: 'Please say that again.',
      synonymAntonym: 'Syn: once more',
    })
  ),
  word('Begin', '시작하다', 2, 'verb',
    ['끝내다', '멈추다', '계속하다', '추가하다', '빼다', '바꾸다', '움직이다', '쉬다', '대기하다', '준비하다'],
    tips({
      etymology: '고대 영어 beginnan에서 유래',
      visual: '출발선에서 대기하는 모습',
      soundAlike: '비긴 = 비긴닝(시작)',
      context: 'Let us begin the class.',
      synonymAntonym: 'Syn: start, Ant: end',
    })
  ),
  word('Body', '몸', 2, 'noun',
    ['머리', '팔', '다리', '손', '발', '심장', '뇌', '피', '뼈', '근육'],
    tips({
      etymology: '고대 영어 bodig에서 유래',
      visual: '전체 인체 실루엣',
      soundAlike: '바디 = 바디랭귀지(몸말)',
      context: 'Exercise is good for your body.',
      synonymAntonym: 'Syn: physique',
    })
  ),
  word('Bring', '가져오다', 2, 'verb',
    ['가져가다', '보내다', '받다', '주다', '던지다', '놓다', '찾다', '잃다', '사다', '팔다'],
    tips({
      etymology: '고대 영어 bringan에서 유래',
      visual: '손에 물건을 들고 오는 모습',
      soundAlike: '브링 = 브링잇온(가져와)',
      context: 'Please bring your book tomorrow.',
      synonymAntonym: 'Syn: carry, Ant: take',
    })
  ),
  word('Child', '아이', 2, 'noun',
    ['어른', '청소년', '노인', '부모', '형제', '친구', '선생님', '학생', '아기', '유아'],
    tips({
      etymology: '고대 영어 cild에서 유래',
      visual: '놀고 있는 아이들',
      soundAlike: '차일드 = 차일드케어(아이 돌봄)',
      context: 'Every child deserves love.',
      synonymAntonym: 'Syn: kid, Ant: adult',
    })
  ),
  word('Color', '색', 2, 'noun',
    ['빨강', '파랑', '초록', '노랑', '검정', '흰색', '그림', '형태', '크기', '재질'],
    tips({
      etymology: '라틴어 color에서 유래',
      visual: '무지개색 팔레트',
      soundAlike: '컬러 = 컬러풀(다채로운)',
      context: 'What is your favorite color?',
      synonymAntonym: 'Syn: hue',
    })
  ),
  word('Country', '나라', 2, 'noun',
    ['도시', '마을', '지역', '대륙', '세계', '수도', '국경', '시골', '해외', '고향'],
    tips({
      etymology: '라틴어 contrata에서 유래',
      visual: '국기가 펄럭이는 나라',
      soundAlike: '컨트리 = 컨트리뮤직(시골 음악)',
      context: 'Korea is a beautiful country.',
      synonymAntonym: 'Syn: nation',
    })
  ),
  word('Dark', '어두운', 2, 'adjective',
    ['밝은', '빛나는', '흰', '투명한', '맑은', '구름낀', '그늘진', '밤', '그림자', '촛불'],
    tips({
      etymology: '고대 영어 deorc에서 유래',
      visual: '불이 꺼진 어두운 방',
      soundAlike: '다크 = 다크모드(어두운 모드)',
      context: 'It gets dark early in winter.',
      synonymAntonym: 'Syn: dim, Ant: light',
    })
  ),
  word('Earth', '지구', 2, 'noun',
    ['달', '태양', '별', 'Mars', '우주', '천체', '하늘', '바다', '대지', '흙'],
    tips({
      etymology: '고대 영어 eorþe에서 유래',
      visual: '우주에서 보이는 파란 지구',
      soundAlike: '어스 = 어스데이(지구의 날)',
      context: 'The Earth revolves around the Sun.',
      synonymAntonym: 'Syn: globe',
    })
  ),
  word('Fast', '빠른', 2, 'adjective',
    ['느린', '천천히', '급한', '여유로운', '신속한', '지연된', '늦은', '조금', '많이', '적게'],
    tips({
      etymology: '고대 영어 fæst에서 유래',
      visual: '달리는 자동차나 기차',
      soundAlike: '패스트 = 패스트푸드(빠른 음식)',
      context: 'He is a fast runner.',
      synonymAntonym: 'Syn: quick, Ant: slow',
    })
  ),
  word('Friend', '친구', 2, 'noun',
    ['적', '낯선사람', '가족', '동료', '이웃', '선생님', '학생', '부모', '형제', '연인'],
    tips({
      etymology: '고대 영어 frēond에서 유래',
      visual: '함께 웃는 친구들',
      soundAlike: '프렌드 = 베스트프렌드(가장 친한 친구)',
      context: 'She is my best friend.',
      synonymAntonym: 'Syn: pal, Ant: enemy',
    })
  ),
  word('Game', '게임', 2, 'noun',
    ['운동', '놀이', '경기', '승부', '규칙', '플레이어', '점수', '시합', '대회', '토너먼트'],
    tips({
      etymology: '고대 영어 gamen에서 유래',
      visual: '보드게임을 하는 사람들',
      soundAlike: '게임 = 비디오게임',
      context: 'Let us play a game.',
      synonymAntonym: 'Syn: sport',
    })
  ),
  word('Group', '그룹', 2, 'noun',
    ['개인', '한명', '여럿', '팀', '모임', '단체', '조직', '클럽', '동호회', '회원'],
    tips({
      etymology: '이탈리아어 gruppo에서 유래',
      visual: '원을 그리며 모인 사람들',
      soundAlike: '그룹 = 그룹웨어(그룹 소프트웨어)',
      context: 'We work in a group of five.',
      synonymAntonym: 'Syn: team',
    })
  ),
  word('Head', '머리', 2, 'noun',
    ['몸', '팔', '다리', '손', '발', '얼굴', '목', '어깨', '가슴', '배'],
    tips({
      etymology: '고대 영어 hēafod에서 유래',
      visual: '사람의 머리 실루엣',
      soundAlike: '헤드 = 헤드폰(머리에 쓰는)',
      context: 'She nodded her head.',
      synonymAntonym: 'Syn: skull',
    })
  ),
  word('Heart', '심장', 2, 'noun',
    ['뇌', '폐', '간', '위', '장', '피', '뼈', '근육', '사랑', '감정'],
    tips({
      etymology: '고대 영어 heorte에서 유래',
      visual: '빨간 하트 모양',
      soundAlike: '하트 = 스위트하트(사랑하는 사람)',
      context: 'Your heart beats about 100,000 times a day.',
      synonymAntonym: 'Syn: cardiac organ',
    })
  ),
  word('Horse', '말', 2, 'noun',
    ['소', '양', '돼지', '닭', '개', '고양이', '토끼', '당나귀', '포니', '조랑말'],
    tips({
      etymology: '고대 영어 hors에서 유래',
      visual: '달리는 말의 모습',
      soundAlike: '호스 = 호스파워(말의 힘)',
      context: 'She rides a horse every weekend.',
      synonymAntonym: 'Syn: stallion',
    })
  ),
  word('Large', '큰', 2, 'adjective',
    ['작은', '좁은', '짧은', '얇은', '가벼운', '적은', '미세한', '거대한', '광대한', '방대한'],
    tips({
      etymology: '라틴어 largus에서 유래',
      visual: '작은 것과 비교된 큰 물체',
      soundAlike: '라지 = 라지 사이즈(큰 사이즈)',
      context: 'We need a large room.',
      synonymAntonym: 'Syn: big, Ant: small',
    })
  ),
  word('Letter', '편지', 2, 'noun',
    ['우편', '이메일', '알파벳', '글자', '단어', '문장', '책', '신문', '메시지', '연락'],
    tips({
      etymology: '라틴어 littera에서 유래',
      visual: '봉투에 담긴 편지',
      soundAlike: '레터 = 레터박스(우편함)',
      context: 'I received a letter from my friend.',
      synonymAntonym: 'Syn: mail',
    })
  ),
  word('Light', '빛', 2, 'noun',
    ['어둠', '그림자', '불', '램프', '햇빛', '달빛', '별빛', '조명', '반사', '밝기'],
    tips({
      etymology: '고대 영어 lēoht에서 유래',
      visual: '방을 밝히는 빛',
      soundAlike: '라이트 = 라이트버블(전구)',
      context: 'Plants need light to grow.',
      synonymAntonym: 'Syn: illumination, Ant: dark',
    })
  ),
  word('Magic', '마법', 2, 'noun',
    ['현실', '과학', '기술', '묘기', '요술', '환상', '꿈', '환상', '마법사', '마술사'],
    tips({
      etymology: '그리스어 magikos에서 유래',
      visual: '빛나는 지팡이와 별',
      soundAlike: '매직 = 매직쇼(마법 쇼)',
      context: 'The children believe in magic.',
      synonymAntonym: 'Syn: witchcraft',
    })
  ),
  word('Music', '음악', 2, 'noun',
    ['노래', '악기', '멜로디', '리듬', '소리', '소음', '고요', '춤', '연극', '영화'],
    tips({
      etymology: '그리스어 mousikē에서 유래',
      visual: '악보와 악기',
      soundAlike: '뮤직 = 뮤직패스(음악 앱)',
      context: 'I listen to music every day.',
      synonymAntonym: 'Syn: melody',
    })
  ),
  word('North', '북쪽', 2, 'noun',
    ['남쪽', '동쪽', '서쪽', '위', '아래', '방향', '좌표', '나침반', '지도', '위치'],
    tips({
      etymology: '고대 영어 norþ에서 유래',
      visual: '나침반의 N을 가리키는 바늘',
      soundAlike: '노스 = 노스폴(북극)',
      context: 'Canada is north of the United States.',
      synonymAntonym: 'Syn: northern, Ant: south',
    })
  ),
  word('Picture', '그림', 2, 'noun',
    ['사진', '도화지', '화가', '프레임', '갤러리', '미술', '디자인', '그림자', '영상', '영화'],
    tips({
      etymology: '라틴어 pictura에서 유래',
      visual: '벽에 걸린 액자 속 그림',
      soundAlike: '픽처 = 픽처북(그림책)',
      context: 'Draw a picture of your family.',
      synonymAntonym: 'Syn: image',
    })
  ),
  word('Ready', '준비된', 2, 'adjective',
    ['준비 안 된', '바쁜', '여유로운', '당황한', '불안한', '확신한', '의심하는', '완성된', '미완성', '진행중'],
    tips({
      etymology: '고대 영어 rǣde에서 유래',
      visual: '출발선에서 대기하는 선수',
      soundAlike: '레디 = 겟레디(준비하세요)',
      context: 'Are you ready for the test?',
      synonymAntonym: 'Syn: prepared, Ant: unprepared',
    })
  ),
  word('South', '남쪽', 2, 'noun',
    ['북쪽', '동쪽', '서쪽', '위', '아래', '방향', '적도', '남반구', '지도', '위치'],
    tips({
      etymology: '고대 영어 sūþ에서 유래',
      visual: '나침반의 S를 가리키는 방향',
      soundAlike: '사우스 = 사우스폴(남극)',
      context: 'Australia is in the south.',
      synonymAntonym: 'Syn: southern, Ant: north',
    })
  ),
];
