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
    })
  ),
  word('Arm', '팔', 1, 'noun',
    ['손', '발', '다리', '머리', '허리', '어깨', '손가락', '손목', '팔꿈치', '주먹'],
    tips({
      etymology: '고대 영어 arm에서 유래',
      visual: '팔을 굽혀 힘을 보여주는 모습',
      soundAlike: '암 = 암(arm) 잡기',
      context: 'He broke his arm in the accident.',
      synonymAntonym: 'Syn: limb',
    })
  ),
  word('Back', '등', 1, 'noun',
    ['앞', '배', '가슴', '어깨', '허리', '옆', '뒤', '얼굴', '머리', '목'],
    tips({
      etymology: '고대 영어 bæc에서 유래',
      visual: '뒤를 돌아보는 사람의 등',
      soundAlike: '백 = 백팩(등에 메는 가방)',
      context: 'My back hurts after sitting all day.',
      synonymAntonym: 'Syn: spine, rear',
    })
  ),
  word('Ball', '공', 1, 'noun',
    ['막대', '원', '상자', '컵', '바퀴', '동그라미', '타원', '피라미드', '큐브', '토러스'],
    tips({
      etymology: '고대 노르웨이어 bǫllr에서 유래',
      visual: '바닥에서 튀는 축구공',
      soundAlike: '볼 = 볼링(공 굴리기)',
      context: 'The child kicked the ball.',
      synonymAntonym: 'Syn: sphere',
    })
  ),
  word('Bear', '곰', 1, 'noun',
    ['호랑이', '사자', '늑대', '여우', '코끼리', '원숭이', '캥거루', '판다', '코알라', '물범'],
    tips({
      etymology: '고대 영어 bera에서 유래',
      visual: '숲속에서 서 있는 갈색 곰',
      soundAlike: '베어 = 베어그릴스(곰 그릴스)',
      context: 'A bear was seen in the forest.',
      synonymAntonym: 'Syn: ursine',
    })
  ),
  word('Boat', '보트', 1, 'noun',
    ['배', '기차', '자동차', '비행기', '오토바이', '자전거', '버스', '택시', '나룻배', '요트'],
    tips({
      etymology: '고대 영어 bāt에서 유래',
      visual: '바다 위를 미끄러지는 작은 보트',
      soundAlike: '보트 = 로우보트(노 젓는 보트)',
      context: 'We took a boat to the island.',
      synonymAntonym: 'Syn: vessel, craft',
    })
  ),
  word('Bone', '뼈', 1, 'noun',
    ['살', '피', '근육', '피부', '머리카락', '손톱', '치아', '장기', '관절', '허파'],
    tips({
      etymology: '고대 영어 bān에서 유래',
      visual: '개가 뼈를 물고 있는 모습',
      soundAlike: '본 = 본머스(뼈의 도시)',
      context: 'The dog buried the bone in the garden.',
      synonymAntonym: 'Syn: skeleton',
    })
  ),
  word('Boy', '소년', 1, 'noun',
    ['소녀', '남자', '여자', '어린이', '아이', '청년', '아저씨', '할아버지', '형', '동생'],
    tips({
      etymology: '고대 영어 boi에서 유래',
      visual: '공을 차는 소년',
      soundAlike: '보이 = 보이스카웃(소년단)',
      context: 'The boy is playing in the park.',
      synonymAntonym: 'Syn: lad, Ant: girl',
    })
  ),
  word('Car', '자동차', 1, 'noun',
    ['버스', '트럭', '택시', '기차', '비행기', '배', '오토바이', '자전거', '경찰차', '구급차'],
    tips({
      etymology: '라틴어 carrus에서 유래',
      visual: '도로를 달리는 빨간색 자동차',
      soundAlike: '카 = 카풀(함께 타는 차)',
      context: 'She drives a car to work.',
      synonymAntonym: 'Syn: automobile, vehicle',
    })
  ),
  word('Chair', '의자', 1, 'noun',
    ['탁자', '소파', '침대', '선반', '책상', '벤치', '스툴', '등받이', '암체어', '책걸상'],
    tips({
      etymology: '고대 프랑스어 chaiere에서 유래',
      visual: '나무 의자에 앉은 사람',
      soundAlike: '체어 = 휠체어(바퀴 의자)',
      context: 'Please sit on the chair.',
      synonymAntonym: 'Syn: seat',
    })
  ),
  word('Cloud', '구름', 1, 'noun',
    ['하늘', '비', '눈', '바람', '태양', '달', '별', '안개', '연기', '증기'],
    tips({
      etymology: '고대 영어 clūd에서 유래',
      visual: '하늘에 떠 있는 흰 구름',
      soundAlike: '클라우드 = 클라우드 컴퓨팅',
      context: 'Dark clouds are gathering in the sky.',
      synonymAntonym: 'Syn: nebula',
    })
  ),
  word('Cook', '요리하다', 1, 'verb',
    ['먹다', '마시다', '썰다', '볶다', '끓이다', '굽다', '튀기다', '섞다', '짜다', '담그다'],
    tips({
      etymology: '라틴어 coquere에서 유래',
      visual: '냄비를 휘저으며 요리하는 모습',
      soundAlike: '쿡 = 쿡북(요리책)',
      context: 'My mother cooks dinner every night.',
      synonymAntonym: 'Syn: prepare, Ant: eat',
    })
  ),
  word('Cow', '소', 1, 'noun',
    ['말', '양', '염소', '돼지', '닭', '오리', '거위', '토끼', '당나귀', '낙타'],
    tips({
      etymology: '고대 영어 cū에서 유래',
      visual: '초원에서 풀을 뜯는 검은 소',
      soundAlike: '카우 = 카우벨(소의 방울)',
      context: 'The cow gives us milk.',
      synonymAntonym: 'Syn: cattle',
    })
  ),
  word('Day', '날', 1, 'noun',
    ['밤', '아침', '낮', '저녁', '시간', '주', '달', '년', '시간', '순간'],
    tips({
      etymology: '고대 영어 dæg에서 유래',
      visual: '해가 뜨는 아침의 하루',
      soundAlike: '데이 = 데이라이트(낮빛)',
      context: 'It is a beautiful day today.',
      synonymAntonym: 'Syn: daytime, Ant: night',
    })
  ),
  word('Desk', '책상', 1, 'noun',
    ['의자', '침대', '탁자', '선반', '서랍', '책장', '램프', '컴퓨터', '키보드', '모니터'],
    tips({
      etymology: '라틴어 discus에서 유래',
      visual: '책과 노트북이 놓인 책상',
      soundAlike: '데스크 = 데스크탑(책상 위)',
      context: 'I study at my desk every evening.',
      synonymAntonym: 'Syn: table, workspace',
    })
  ),
  word('Dry', '마른', 1, 'adjective',
    ['젖은', '습한', '축축한', '물기 있는', '비에 젖은', '이슬에 젖은', '땀에 젖은', '눈물에 젖은', '젖은', '습함'],
    tips({
      etymology: '고대 영어 drȳge에서 유래',
      visual: '비가 그친 후 마른 도로',
      soundAlike: '드라이 = 드라이기(말리는 기구)',
      context: 'The clothes are dry after washing.',
      synonymAntonym: 'Syn: arid, Ant: wet',
    })
  ),
  word('Ear', '귀', 1, 'noun',
    ['눈', '코', '입', '머리', '목', '얼굴', '턱', '볼', '이마', '입술'],
    tips({
      etymology: '고대 영어 ēare에서 유래',
      visual: '귀에 대고 소리를 듣는 모습',
      soundAlike: '이어 = 이어폰(귀에 끼는)',
      context: 'She whispered in his ear.',
      synonymAntonym: 'Syn: auricle',
    })
  ),
  word('End', '끝', 1, 'noun',
    ['시작', '중간', '중앙', '처음', '첫째', '마지막', '끝', '종료', '완료', '결과'],
    tips({
      etymology: '고대 영어 ende에서 유래',
      visual: '선의 끝에 도달한 점',
      soundAlike: '엔드 = 엔드게임(끝나는 게임)',
      context: 'We reached the end of the road.',
      synonymAntonym: 'Syn: conclusion, Ant: beginning',
    })
  ),
  word('Farm', '농장', 1, 'noun',
    ['도시', '마을', '학교', '공장', '병원', '시장', '공원', '숲', '산', '바다'],
    tips({
      etymology: '라틴어 firma에서 유래',
      visual: '논과 밭이 있는 시골 농장',
      soundAlike: '팜 = 팜하우스(농장의 집)',
      context: 'They live on a farm in the countryside.',
      synonymAntonym: 'Syn: ranch, plantation',
    })
  ),
  word('Fire', '불', 1, 'noun',
    ['물', '흙', '바람', '공기', '연기', '재', '불꽃', '숯', '나무', '땔감'],
    tips({
      etymology: '고대 영어 fȳr에서 유래',
      visual: '모닥불에서 타오르는 불꽃',
      soundAlike: '파이어 = 파이어플레이스(벽난로)',
      context: 'The fire kept us warm at night.',
      synonymAntonym: 'Syn: flame, blaze',
    })
  ),
  word('Fly', '날다', 1, 'verb',
    ['걷다', '달리다', '앉다', '서다', '뛰다', '헤엄치다', '미끄러지다', '등산하다', '내려가다', '올라가다'],
    tips({
      etymology: '고대 영어 flēogan에서 유래',
      visual: '하늘을 나는 새',
      soundAlike: '플라이 = 버터플라이(나비)',
      context: 'Birds can fly in the sky.',
      synonymAntonym: 'Syn: soar, glide',
    })
  ),
  word('Foot', '발', 1, 'noun',
    ['손', '팔', '다리', '무릎', '발목', '발가락', '발바닥', '손바닥', '손가락', '손목'],
    tips({
      etymology: '고대 영어 fōt에서 유래',
      visual: '걷는 사람의 발',
      soundAlike: '풋 = 풋볼(발로 차는 공)',
      context: 'My foot hurts after the long walk.',
      synonymAntonym: 'Syn: paw',
    })
  ),
  word('Fox', '여우', 1, 'noun',
    ['늑대', '곰', '토끼', '다람쥐', '너구리', '고양이', '개', '표범', '치타', '하이에나'],
    tips({
      etymology: '고대 영어 fox에서 유래',
      visual: '빨간 털과 뾰족한 귀의 여우',
      soundAlike: '폭스 = 폭스베리(여우 같은)',
      context: 'A fox ran across the road.',
      synonymAntonym: 'Syn: vulpine',
    })
  ),
  word('Full', '가득한', 1, 'adjective',
    ['비어 있는', '반쯤', '절반', '조금', '적은', '부족한', '텅 빈', '공허한', '덜 찬', '여유 있는'],
    tips({
      etymology: '고대 영어 full에서 유래',
      visual: '물이 가득 찬 컵',
      soundAlike: '풀 = 풀하우스(만석)',
      context: 'The theater was full of people.',
      synonymAntonym: 'Syn: complete, Ant: empty',
    })
  ),
  word('Glass', '유리', 1, 'noun',
    ['플라스틱', '금속', '나무', '돌', '종이', '천', '고무', '흙', '대리석', '세라믹'],
    tips({
      etymology: '고대 게르만어 glasam에서 유래',
      visual: '빛이 통과하는 투명한 유리창',
      soundAlike: '글래스 = 글래스슬리퍼(유리 구두)',
      context: 'Be careful not to break the glass.',
      synonymAntonym: 'Syn: pane',
    })
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
    })
  ),
  word('Across', '건너편', 2, 'preposition',
    ['이쪽', '저쪽', '가운데', '모서리', '끝', '시작', '중간', '반대편', '옆', '근처'],
    tips({
      etymology: '고대 영어 on + crūce에서 유래',
      visual: '다리를 건너 건너편으로 가는 모습',
      soundAlike: '어크로스 = 크로스(건너가다)',
      context: 'There is a store across the street.',
      synonymAntonym: 'Syn: over, beyond',
    })
  ),
  word('Alive', '살아 있는', 2, 'adjective',
    ['죽은', '없는', '사라진', '끝난', '소멸한', '멸종한', '쇠약한', '병든', '죽어가는', '무생물'],
    tips({
      etymology: 'on + life의 조합',
      visual: '뛰어다니는 활기찬 아이',
      soundAlike: '어라이브 = 얼라이브(살아 있다)',
      context: 'All the fish in the tank are still alive.',
      synonymAntonym: 'Syn: living, Ant: dead',
    })
  ),
  word('Alone', '혼자', 2, 'adjective',
    ['함께', '여럿', '단체', '둘', '세', '무리', '패', '그룹', '가족', '친구'],
    tips({
      etymology: 'all + one의 조합',
      visual: '넓은 공간에 혼자 서 있는 사람',
      soundAlike: '얼로운 = 얼론타임(혼자 있는 시간)',
      context: 'She likes to read alone.',
      synonymAntonym: 'Syn: solitary, Ant: together',
    })
  ),
  word('Basket', '바구니', 2, 'noun',
    ['상자', '가방', '통', '병', '자루', '컵', '접시', '그릇', '케이스', '수납함'],
    tips({
      etymology: '라틴어 bascauda에서 유래',
      visual: '과일이 담긴 나무바구니',
      soundAlike: '바스켓 = 바스켓볼(공넣기)',
      context: 'She put the fruit in the basket.',
      synonymAntonym: 'Syn: hamper',
    })
  ),
  word('Beach', '해변', 2, 'noun',
    ['산', '숲', '강', '호수', '계단', '길', '공원', '섬', '해안', '언덕'],
    tips({
      etymology: '고대 영어 bæce에서 유래',
      visual: '파도가 밀려오는 모래 해변',
      soundAlike: '비치 = 비치볼(해변 공)',
      context: 'We went to the beach last summer.',
      synonymAntonym: 'Syn: shore, coast',
    })
  ),
  word('Believe', '믿다', 2, 'verb',
    ['의심하다', '부정하다', '거부하다', '반대하다', '회의하다', '불신하다', '의문을 갖다', '흔들다', '놀라다', '불가사의하다'],
    tips({
      etymology: '고대 영어 belēfan에서 유래',
      visual: '손을 맞잡고 믿음을 나누는 모습',
      soundAlike: '빌리브 = 빌리버(믿는 사람)',
      context: 'I believe you can do it.',
      synonymAntonym: 'Syn: trust, Ant: doubt',
    })
  ),
  word('Bottle', '병', 2, 'noun',
    ['병', '컵', '통', '상자', '자루', '캔', '수조', '항아리', '그릇', '주전자'],
    tips({
      etymology: '라틴어 buttis에서 유래',
      visual: '물이 담긴 투명한 유리병',
      soundAlike: '바틀 = 바틀넥(병목)',
      context: 'Please pass me the water bottle.',
      synonymAntonym: 'Syn: flask',
    })
  ),
  word('Bottom', '바닥', 2, 'noun',
    ['꼭대기', '중간', '표면', '앞', '뒤', '끝', '시작', '가장자리', '모서리', '측면'],
    tips({
      etymology: '고대 영어 botm에서 유래',
      visual: '바다의 깊은 바닥',
      soundAlike: '바텀 = 바텀라인(최소선)',
      context: 'The keys fell to the bottom of the bag.',
      synonymAntonym: 'Syn: base, Ant: top',
    })
  ),
  word('Bright', '밝은', 2, 'adjective',
    ['어두운', '흐린', '침침한', '그늘진', '음침한', '우울한', '흐릿한', '희미한', '안개낀', '눈부신'],
    tips({
      etymology: '고대 영어 beorht에서 유래',
      visual: '햇빛이 쏟아지는 밝은 방',
      soundAlike: '브라이트 = 브라이트아이디어(밝은 생각)',
      context: 'The sun is very bright today.',
      synonymAntonym: 'Syn: luminous, Ant: dark',
    })
  ),
  word('Brother', '형제', 2, 'noun',
    ['자매', '누나', '오빠', '여동생', '남동생', '아버지', '어머니', '삼촌', '고모', '조카'],
    tips({
      etymology: '고대 영어 brōthor에서 유래',
      visual: '나란히 서 있는 두 형제',
      soundAlike: '브라더 = 브라더후드(형제애)',
      context: 'My brother is two years older than me.',
      synonymAntonym: 'Syn: sibling',
    })
  ),
  word('Building', '건물', 2, 'noun',
    ['집', '학교', '병원', '가게', '공장', '탑', '다리', '도로', '공원', '정원'],
    tips({
      etymology: 'build + ing에서 유래',
      visual: '도시에 높이 솟은 건물들',
      soundAlike: '빌딩 = 옥스포드빌딩',
      context: 'That building has 50 floors.',
      synonymAntonym: 'Syn: structure, edifice',
    })
  ),
  word('Butter', '버터', 2, 'noun',
    ['빵', '잼', '치즈', '우유', '생크림', '마가린', '요거트', '계란', '밀가루', '설탕'],
    tips({
      etymology: '라틴어 butyrum에서 유래',
      visual: '빵에 발라진 노란 버터',
      soundAlike: '버터 = 버터플라이(나비)',
      context: 'Spread some butter on the toast.',
      synonymAntonym: 'Syn: spread',
    })
  ),
  word('Candle', '양초', 2, 'noun',
    ['라이터', '성냥', '횃불', '전등', '램프', '조명', '불꽃', '연기', '왁스', '심지'],
    tips({
      etymology: '라틴어 candela에서 유래',
      visual: '생일 케이크에 꽂힌 양초',
      soundAlike: '캔들 = 캔들라이트(캔들빛)',
      context: 'She lit a candle for the dinner.',
      synonymAntonym: 'Syn: taper',
    })
  ),
  word('Careful', '조심하는', 2, 'adjective',
    ['부주의한', '경솔한', '무모한', '성급한', '조급한', '대충하는', '소홀한', '무관심한', '무성의한', '안일한'],
    tips({
      etymology: 'care + ful의 조합',
      visual: '유리병을 조심스럽게 들고 있는 손',
      soundAlike: '케어풀 = 케어풀니스(조심성)',
      context: 'Be careful when you cross the street.',
      synonymAntonym: 'Syn: cautious, Ant: careless',
    })
  ),
  word('Center', '중앙', 2, 'noun',
    ['끝', '가장자리', '모서리', '벽', '바깥', '주변', '외곽', '테두리', '경계', '한쪽'],
    tips({
      etymology: '라틴어 centrum에서 유래',
      visual: '원의 정중앙에 있는 점',
      soundAlike: '센터 = 센터오브어텐션(관심의 중심)',
      context: 'The statue stands in the center of the square.',
      synonymAntonym: 'Syn: middle, core',
    })
  ),
  word('Circle', '원', 2, 'noun',
    ['사각형', '삼각형', '타원', '선', '점', '다각형', '곡선', '직선', '나선', '물결'],
    tips({
      etymology: '라틴어 circulus에서 유래',
      visual: '완벽한 원을 그리는 컴퍼스',
      soundAlike: '서클 = 서클오브트러스트(신뢰의 원)',
      context: 'Draw a circle with a pencil.',
      synonymAntonym: 'Syn: round, ring',
    })
  ),
  word('Corner', '모서리', 2, 'noun',
    ['중앙', '가운데', '평면', '직선', '넓은 곳', '열린 공간', '원', '중심', '내부', '표면'],
    tips({
      etymology: '라틴어 cornū에서 유래',
      visual: '두 벽이 만나는 모서리',
      soundAlike: '코너 = 코너스토어(구석 가게)',
      context: 'The cat is hiding in the corner.',
      synonymAntonym: 'Syn: angle, edge',
    })
  ),
  word('Cover', '덮다', 2, 'verb',
    ['열다', '벗기다', '노출하다', '드러내다', '공개하다', '펼치다', '제거하다', '치우다', '열어젖히다', '풀다'],
    tips({
      etymology: '라틴어 cooperire에서 유래',
      visual: '이불로 몸을 덮는 모습',
      soundAlike: '커버 = 커버스토리(표지 기사)',
      context: 'Please cover the food with a lid.',
      synonymAntonym: 'Syn: conceal, Ant: uncover',
    })
  ),
  word('Danger', '위험', 2, 'noun',
    ['안전', '평화', '고요', '평온', '보호', '안전지대', '평지', '안심', '조용함', '편안함'],
    tips({
      etymology: '고대 프랑스어 dangier에서 유래',
      visual: '빨간 경고 표지판',
      soundAlike: '데인저 = 데인저존(위험지대)',
      context: 'There is danger in the deep water.',
      synonymAntonym: 'Syn: risk, hazard, Ant: safety',
    })
  ),
  word('East', '동쪽', 2, 'noun',
    ['서쪽', '남쪽', '북쪽', '남동', '남서', '북동', '북서', '중앙', '양쪽', '반대편'],
    tips({
      etymology: '고대 영어 ēast에서 유래',
      visual: '해가 뜨는 동쪽 하늘',
      soundAlike: '이스트 = 이스트코스트(동해안)',
      context: 'The sun rises in the east.',
      synonymAntonym: 'Syn: orient',
    })
  ),
  word('Empty', '비어 있는', 2, 'adjective',
    ['가득한', '꽉 찬', '만원인', '충만한', '풍부한', '넉넉한', '바쁜', '사람이 많은', '물건이 많은', '혼잡한'],
    tips({
      etymology: '고대 영어 ǣmettig에서 유래',
      visual: '물통이 비어 있는 모습',
      soundAlike: '엠티 = 엠티네스(공허함)',
      context: 'The room was empty when I arrived.',
      synonymAntonym: 'Syn: vacant, Ant: full',
    })
  ),
  word('Enjoy', '즐기다', 2, 'verb',
    ['싫어하다', '피하다', '거부하다', '지루해하다', '불평하다', '불만족하다', '우울해하다', '슬퍼하다', '화나다', '짜증내다'],
    tips({
      etymology: 'en + joy의 조합',
      visual: '웃으며 파티를 즐기는 사람들',
      soundAlike: '인조이 = 인조이어블(즐거운)',
      context: 'I enjoy reading books in my free time.',
      synonymAntonym: 'Syn: like, relish, Ant: dislike',
    })
  ),
  word('Enter', '들어가다', 2, 'verb',
    ['나가다', '떠나다', '외출하다', '벗어나다', '탈출하다', '퇴장하다', '건너가다', '지나가다', '우회하다', '피하다'],
    tips({
      etymology: '라틴어 intrare에서 유래',
      visual: '문을 열고 방에 들어가는 모습',
      soundAlike: '엔터 = 엔터키(입력 키)',
      context: 'Please enter the room quietly.',
      synonymAntonym: 'Syn: come in, Ant: exit',
    })
  ),
  word('Even', '심지어', 2, 'adverb',
    ['특히', '오히려', '반대로', '거의', '대략', '대체로', '주로', '대부분', '몇몇', '일부'],
    tips({
      etymology: '고대 영어 efen에서 유래',
      visual: '균형 잡힌 저울의 두 접시',
      soundAlike: '이븐 = 이븐소(심지어 그래서)',
      context: 'Even a child can understand this.',
      synonymAntonym: 'Syn: still, yet',
    })
  ),
];
