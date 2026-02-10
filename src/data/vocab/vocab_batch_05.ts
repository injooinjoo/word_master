import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch05: VocabItem[] = [
  word('Achieve', '달성하다', 3, 'verb',
    ['실패하다', '포기하다', '미루다', '회피하다', '무시하다', '잃다', '거절하다', '망설이다', '낭비하다', '지연하다'],
    tips({
      etymology: 'a(~로) + chief(머리) -> 목표의 머리에 도달하다',
      visual: '결승선을 통과하는 선수',
      soundAlike: '어치브 = 어치브먼트(성취)',
      context: 'She achieved her goal of graduating with honors.',
      synonymAntonym: 'Syn: accomplish, reach, Ant: fail',
    })
  ),
  word('Admire', '존경하다', 3, 'verb',
    ['무시하다', '비난하다', '싫어하다', '경멸하다', '질시하다', '부러워하다', '질투하다', '모욕하다', '비난하다', '불신하다'],
    tips({
      etymology: 'ad(~에게) + mir(경이) -> 경이로 바라보다',
      visual: '연설하는 영웅을 바라보는 군중',
      soundAlike: '어드마이어 = 어드마이어이션(존경)',
      context: 'I admire her courage and determination.',
      synonymAntonym: 'Syn: respect, look up to, Ant: despise',
    })
  ),
  word('Advance', '앞으로 나아가다', 3, 'verb',
    ['후퇴하다', '물러서다', '지연하다', '미루다', '멈추다', '정체하다', '퇴보하다', '되돌아가다', '느리다', '늦추다'],
    tips({
      etymology: 'ad(~로) + avant(앞) -> 앞으로 나아가다',
      visual: '군대가 앞으로 진격하는 모습',
      soundAlike: '어드밴스 = 어드밴스드(고급의)',
      context: 'Technology continues to advance rapidly.',
      synonymAntonym: 'Syn: progress, move forward, Ant: retreat',
    })
  ),
  word('Allow', '허용하다', 3, 'verb',
    ['금지하다', '막다', '거절하다', '차단하다', '방해하다', '제한하다', '억제하다', '거부하다', '말리다', '반대하다'],
    tips({
      etymology: 'al(~로) + low(칭찬하다) -> 허용하다',
      visual: '문을 열어 들어오라고 하는 손짓',
      soundAlike: '얼라우 = 얼라우언스(허용량)',
      context: 'Smoking is not allowed in this building.',
      synonymAntonym: 'Syn: permit, let, Ant: forbid',
    })
  ),
  word('Amount', '양, 금액', 3, 'noun',
    ['품질', '개수', '종류', '단위', '무게', '부피', '길이', '면적', '비율', '정도'],
    tips({
      etymology: 'a(~로) + mount(산) -> 산처럼 쌓인 것',
      visual: '계좌 잔액이 표시된 화면',
      soundAlike: '어마운트 = 어마운트(양) 체크',
      context: 'The amount of rainfall was unexpected.',
      synonymAntonym: 'Syn: quantity, sum, Ant: nothing',
    })
  ),
  word('Ancient', '고대의', 3, 'adjective',
    ['현대의', '최신의', '새로운', '젊은', '최근의', '미래의', '현대적', '세련된', '신선한', '최신'],
    tips({
      etymology: 'ante(앞) + -ient -> 이전 시대의',
      visual: '이집트 피라미드와 스핑크스',
      soundAlike: '에인션트 = 에인션트 히스토리(고대사)',
      context: 'The ancient ruins attract many tourists.',
      synonymAntonym: 'Syn: old, antique, Ant: modern',
    })
  ),
  word('Announce', '알리다', 3, 'verb',
    ['숨기다', '비밀 유지', '침묵하다', '숨다', '말하지 않다', '은폐하다', '가리다', '덮다', '잠자다', '무시하다'],
    tips({
      etymology: 'an(~에게) + nounce(알리다) -> 공식적으로 알리다',
      visual: '마이크 앞에서 발표하는 사람',
      soundAlike: '어나운스 = 어나운스먼트(공지)',
      context: 'They will announce the winner tomorrow.',
      synonymAntonym: 'Syn: declare, proclaim, Ant: conceal',
    })
  ),
  word('Appear', '나타나다', 3, 'verb',
    ['사라지다', '숨다', '닫다', '가리다', '은폐하다', '떠나다', '없어지다', '잠수하다', '후퇴하다', '물러나다'],
    tips({
      etymology: 'ad(~로) + par(나타나다) -> 눈에 보이다',
      visual: '무대에서 갑자기 나타나는 마술사',
      soundAlike: '어피어 = 어피어런스(외모)',
      context: 'A rainbow appeared after the rain.',
      synonymAntonym: 'Syn: show up, emerge, Ant: disappear',
    })
  ),
  word('Arrange', '정리하다', 3, 'verb',
    ['흐트러뜨리다', '섞다', '뒤죽박죽', '해체하다', '무질서', '어지럽히다', '분산하다', '흩다', '무시하다', '방치하다'],
    tips({
      etymology: 'ar(~로) + range(줄) -> 줄을 세우다',
      visual: '책을 가지런히 꽂는 모습',
      soundAlike: '어레인지 = 어레인지먼트(배치)',
      context: 'She arranged the flowers in a vase.',
      synonymAntonym: 'Syn: organize, order, Ant: mess up',
    })
  ),
  word('Article', '기사, 물품', 3, 'noun',
    ['제목', '부록', '총론', '논문', '소설', '시', '대본', '편지', '보고서', '책'],
    tips({
      etymology: 'art(예술) + -icle(작은 것) -> 기사',
      visual: '신문에 실린 기사',
      soundAlike: '아티클 = 아티클(article) 넘버',
      context: 'I read an interesting article about climate change.',
      synonymAntonym: 'Syn: piece, item',
    })
  ),
  word('Attend', '참석하다', 3, 'verb',
    ['결석하다', '석하다', '도망치다', '회피하다', '건너뛰다', '무시하다', '거절하다', '취소하다', '이탈하다', '떠나다'],
    tips({
      etymology: 'at(~로) + tend(줄다) -> 마음을 기울이다',
      visual: '회의실에 모인 참석자들',
      soundAlike: '어텐드 = 어텐던스(출석)',
      context: 'Over 500 people attended the conference.',
      synonymAntonym: 'Syn: be present, go to, Ant: miss',
    })
  ),
  word('Average', '평균', 3, 'noun',
    ['극단', '최고', '최저', '예외', '특이', '특별', '흔함', '드묾', '보통', '일반'],
    tips({
      etymology: '아랍어 awariya(손상된 상품)에서 유래',
      visual: '여러 숫자 위에 그어진 평균선',
      soundAlike: '에버리지 = 에버리지 조(평균 타율)',
      context: 'The average temperature in July is 25°C.',
      synonymAntonym: 'Syn: mean, typical, Ant: extreme',
    })
  ),
  word('Aware', '알고 있는', 3, 'adjective',
    ['무지한', '모르는', '무관심한', '멍한', '부주의한', '수면 중', '의식 없는', '잊어버린', '눈치채지 못한', '어리석은'],
    tips({
      etymology: '고대 영어 gewær(주의 깊은)에서 유래',
      visual: '주변을 살피는 사람의 눈',
      soundAlike: '어웨어 = 어웨어니스(인식)',
      context: 'Are you aware of the risks involved?',
      synonymAntonym: 'Syn: conscious, mindful, Ant: unaware',
    })
  ),
  word('Balance', '균형', 3, 'noun',
    ['불균형', '기울음', '전도', '넘어짐', '불안정', '흔들림', '편향', '한쪽짐', '과잉', '부족'],
    tips({
      etymology: 'bi(두) + lance(접시) -> 양쪽 접시',
      visual: '양손에 같은 무게를 든 저울',
      soundAlike: '밸런스 = 밸런스드(균형 잡힌)',
      context: 'It is important to maintain work-life balance.',
      synonymAntonym: 'Syn: equilibrium, stability, Ant: imbalance',
    })
  ),
  word('Basic', '기본적인', 3, 'adjective',
    ['고급의', '복잡한', '특별한', '특수한', '진보한', '난해한', '세련된', '정교한', '첨단의', '최신의'],
    tips({
      etymology: 'base(기초) + -ic -> 기본의',
      visual: '건물의 기초 공사',
      soundAlike: '베이직 = 베이직스(기초)',
      context: 'You need to learn the basic rules first.',
      synonymAntonym: 'Syn: fundamental, essential, Ant: advanced',
    })
  ),
  word('Behave', '행동하다', 3, 'verb',
    ['비행하다', '버릇없이', '난폭히', '무례히', '반항하다', '불순종하다', '도망치다', '나쁘게', '거친', '막되게'],
    tips({
      etymology: 'be(강조) + have(가지다) -> 몸가짐을 가지다',
      visual: '정숙하게 앉아 있는 학생',
      soundAlike: '비헤이브 = 비헤이비어(행동)',
      context: 'The children behaved well at the party.',
      synonymAntonym: 'Syn: act, conduct oneself, Ant: misbehave',
    })
  ),
  word('Benefit', '이익', 3, 'noun',
    ['손해', '불이익', '해악', '피해', '비용', '지출', '낭비', '손실', '해', '폐'],
    tips({
      etymology: 'bene(좋게) + fit(하다) -> 좋은 일',
      visual: '돈이 들어오는 통장',
      soundAlike: '베네핏 = 베네핏스(복리)',
      context: 'Exercise has many health benefits.',
      synonymAntonym: 'Syn: advantage, gain, Ant: disadvantage',
    })
  ),
  word('Besides', '게다가', 3, 'preposition',
    ['단지', '오직', '그만', '대신', '반대로', '그러나', '따라서', '결과적으로', '그래서', '그러므로'],
    tips({
      etymology: 'beside(옆에) + -s -> 그 외에도',
      visual: '메인 요리 옆에 놓인 반찬',
      soundAlike: '비사이즈 = 사이드(옆) 딸려',
      context: 'Besides English, she speaks French and Spanish.',
      synonymAntonym: 'Syn: in addition, furthermore',
    })
  ),
  word('Blame', '비난하다', 3, 'verb',
    ['칭찬하다', '변호하다', '방어하다', '옹호하다', '감사하다', '인정하다', '칭송하다', '찬양하다', '면책하다', '용서하다'],
    tips({
      etymology: '라틴어 blasphemare(흠잡다)에서 유래',
      visual: '손가락으로 가리키며 비난하는 모습',
      soundAlike: '블레임 = 블레임 게임(비난 놀이)',
      context: 'Don\'t blame me for your mistake.',
      synonymAntonym: 'Syn: accuse, fault, Ant: praise',
    })
  ),
  word('Block', '막다', 3, 'verb',
    ['열다', '통과시키다', '허용하다', '돕다', '촉진하다', '지원하다', '개방하다', '해제하다', '해방하다', '통과하다'],
    tips({
      etymology: '프랑스어 bloc(덩어리)에서 유래',
      visual: '도로를 가로막는 바리케이드',
      soundAlike: '블락 = 블락버스터(막는 것)',
      context: 'A fallen tree blocked the road.',
      synonymAntonym: 'Syn: obstruct, prevent, Ant: unblock',
    })
  ),
  word('Bomb', '폭탄', 3, 'noun',
    ['미사일', '로켓', '화살', '창', '검', '방패', '헬멧', '갑옷', '무기', '총'],
    tips({
      etymology: '라틴어 bombus(윙윙 소리)에서 유래',
      visual: '빨간 불이 깜빡이는 원형 폭탄',
      soundAlike: '밤 = 밤 스캐어(폭탄 공포)',
      context: 'The building was destroyed by a bomb.',
      synonymAntonym: 'Syn: explosive, device',
    })
  ),
  word('Borrow', '빌리다', 3, 'verb',
    ['빌려주다', '돌려주다', '갚다', '갚아주다', '반환하다', '기부하다', '선물하다', '증여하다', '보관하다', '소유하다'],
    tips({
      etymology: '고대 영어 borgian(담보로 빌리다)에서 유래',
      visual: '친구에게 책을 빌리는 모습',
      soundAlike: '보로우 = 보로우드(빌린)',
      context: 'Can I borrow your pen for a moment?',
      synonymAntonym: 'Syn: take on loan, Ant: lend',
    })
  ),
  word('Bow', '인사하다', 3, 'verb',
    ['서다', '고개 들다', '등지다', '무시하다', '거절하다', '돌아서다', '얼굴 숙이다', '무례히', '무시하다', '지나가다'],
    tips({
      etymology: '고대 영어 bugan(굽다)에서 유래',
      visual: '무대에서 관객에게 인사하는 배우',
      soundAlike: '바우 = 테이크 어 바우(인사하다)',
      context: 'The actors bowed to the audience.',
      synonymAntonym: 'Syn: bend, nod, Ant: straighten',
    })
  ),
  word('Branch', '가지', 3, 'noun',
    ['뿌리', '줄기', '잎', '꽃', '열매', '씨', '껍질', '나무', '숲', '정원'],
    tips({
      etymology: '라틴어 branchia(팔)에서 유래',
      visual: '나무에서 뻗어나온 가지',
      soundAlike: '브랜치 = 브랜치 오피스(지점)',
      context: 'A bird sat on a branch of the tree.',
      synonymAntonym: 'Syn: limb, bough',
    })
  ),
  word('Bunch', '한 묶음', 3, 'noun',
    ['낱개', '한 개', '조금', '조각', '일부', '분리', '흩어짐', '단독', '홀로', '개별'],
    tips({
      etymology: '프랑스어 bouche(다발)에서 유래',
      visual: '바나나 한 송이',
      soundAlike: '번치 = 어 번치 오브(한 묶음)',
      context: 'She bought a bunch of grapes.',
      synonymAntonym: 'Syn: cluster, bundle',
    })
  ),
  word('Burst', '터지다', 3, 'verb',
    ['수리하다', '봉합하다', '막다', '멈추다', '완전한', '온전한', '보존하다', '유지하다', '천천히', '조용히'],
    tips({
      etymology: '고대 영어 berstan(터지다)에서 유래',
      visual: '풍선이 터지는 순간',
      soundAlike: '버스트 = 버스트 아웃(터져 나오다)',
      context: 'The water pipe burst in the cold weather.',
      synonymAntonym: 'Syn: explode, break open, Ant: mend',
    })
  ),
  word('Cable', '케이블', 3, 'noun',
    ['와이어', '로프', '끈', '줄', '밧줄', '전선', '안테나', '수신기', '송신기', '연결'],
    tips({
      etymology: '라틴어 capulum(잡는 끈)에서 유래',
      visual: '전원에 연결된 전선',
      soundAlike: '케이블 = 케이블 TV',
      context: 'The cable connects the computer to the monitor.',
      synonymAntonym: 'Syn: wire, cord',
    })
  ),
  word('Calculate', '계산하다', 3, 'verb',
    ['추측하다', '대략하다', '어림하다', '틀리다', '잘못하다', '무시하다', '추측', '대충', '대략', '임의'],
    tips({
      etymology: '라틴어 calculus(작은 돌)에서 유래, 주판의 구슬',
      visual: '계산기를 두드리는 손',
      soundAlike: '캘큘레이트 = 캘큘레이션(계산)',
      context: 'Please calculate the total cost.',
      synonymAntonym: 'Syn: compute, figure out, Ant: guess',
    })
  ),
  word('Calendar', '달력', 3, 'noun',
    ['시계', '타이머', '알람', '일정', '기념일', '시간표', '스케줄', '날짜', '요일', '월'],
    tips({
      etymology: '라틴어 kalendae(매월 첫날)에서 유래',
      visual: '벽에 걸린 월별 달력',
      soundAlike: '캘린더 = 캘린더 앱',
      context: 'Check the calendar for the meeting date.',
      synonymAntonym: 'Syn: schedule, almanac',
    })
  ),
  word('Campaign', '운동, 캠페인', 3, 'noun',
    ['휴전', '평화', '무행동', '미동', '침묵', '정지', '중단', '포기', '해산', '종료'],
    tips({
      etymology: '라틴어 campus(들판) -> 캠프에서의 군사 작전',
      visual: '시위 플래카드를 든 시위대',
      soundAlike: '캠페인 = 캠페인 트레일(선거 유세)',
      context: 'The charity launched a fundraising campaign.',
      synonymAntonym: 'Syn: drive, movement',
    })
  ),
  word('Cancer', '암', 3, 'noun',
    ['감기', '독감', '두통', '위염', '당뇨', '고혈압', '심장병', '간염', '폐렴', '천식'],
    tips({
      etymology: '라틴어 cancer(게) -> 퍼지는 모습이 게처럼',
      visual: '의료 기호의 리본',
      soundAlike: '캔서 = 캔서 리서치(암 연구)',
      context: 'Early detection of cancer saves lives.',
      synonymAntonym: 'Syn: malignancy, tumor',
    })
  ),
  word('Carbon', '탄소', 3, 'noun',
    ['수소', '산소', '질소', '금', '은', '철', '구리', '물', '공기', '대기'],
    tips({
      etymology: '라틴어 carbo(숯)에서 유래',
      visual: '다이아몬드와 흑연(둘 다 탄소)',
      soundAlike: '카본 = 카본 풋프린트(탄소 발자국)',
      context: 'Carbon is the basis of all organic life.',
      synonymAntonym: 'Syn: C (element)',
    })
  ),
  word('Career', '경력', 3, 'noun',
    ['취미', '여가', '휴식', '은퇴', '실업', '공백', '무직', '학생', '신입', '초보'],
    tips({
      etymology: '라틴어 carrus(수레) -> 인생의 길',
      visual: '사다리를 오르는 직장인',
      soundAlike: '커리어 = 커리어 패스(경력 경로)',
      context: 'She has had a successful career in law.',
      synonymAntonym: 'Syn: profession, occupation',
    })
  ),
  word('Celebrate', '축하하다', 3, 'verb',
    ['슬퍼하다', '애도하다', '비난하다', '무시하다', '지나가다', '얼마 안 되다', '보통으로', '평범히', '냉담히', '무관심히'],
    tips({
      etymology: '라틴어 celebrare(많이 모이다)에서 유래',
      visual: '생일 케이크 앞에서 박수하는 사람들',
      soundAlike: '셀러브레이트 = 셀러브레이션(축하)',
      context: 'We celebrated her promotion with a party.',
      synonymAntonym: 'Syn: commemorate, rejoice, Ant: mourn',
    })
  ),
  word('Ceremony', '의식', 3, 'noun',
    ['일상', '무례', '생략', '간소화', '비공식', '쉬운', '편한', '무작위', '자유', '휴식'],
    tips({
      etymology: '라틴어 caerimonia(종교 의식)에서 유래',
      visual: '결혼식에서 링 교환하는 모습',
      soundAlike: '세러모니 = 세러모니얼(의식의)',
      context: 'The award ceremony will be held next week.',
      synonymAntonym: 'Syn: ritual, formal event',
    })
  ),
  word('Chapter', '장', 3, 'noun',
    ['머리말', '부록', '찾아보기', '표지', '페이지', '절', '문단', '문장', '단어', '글자'],
    tips({
      etymology: '라틴어 capitulum(작은 머리)에서 유래',
      visual: '책에 적힌 "Chapter 1"',
      soundAlike: '챕터 = 챕터 원(1장)',
      context: 'Please read chapter 5 for tomorrow.',
      synonymAntonym: 'Syn: section, part',
    })
  ),
  word('Character', '성격', 3, 'noun',
    ['외모', '몸', '얼굴', '키', '몸무게', '복장', '헤어스타일', '행동', '습관', '버릇'],
    tips({
      etymology: '그리스어 kharakter(각인)에서 유래',
      visual: '사람의 실루엣과 생각 거품',
      soundAlike: '캐릭터 = 캐릭터 트레이트(성격 특성)',
      context: 'She has a strong and determined character.',
      synonymAntonym: 'Syn: personality, nature',
    })
  ),
  word('Chart', '차트', 3, 'noun',
    ['글', '문장', '표', '목록', '사진', '도면', '설명', '서술', '이야기', '논문'],
    tips({
      etymology: '라틴어 charta(종이)에서 유래',
      visual: '막대 그래프가 그려진 보고서',
      soundAlike: '차트 = 플로우 차트(흐름도)',
      context: 'The chart shows sales growth over the year.',
      synonymAntonym: 'Syn: graph, diagram',
    })
  ),
  word('Chemical', '화학 물질', 3, 'noun',
    ['물리', '생물', '지질', '천문', '수학', '자연', '유기', '무기', '원소', '화합물'],
    tips({
      etymology: 'alchemy(연금술)에서 유래',
      visual: '실험실의 유리 플라스크',
      soundAlike: '케미컬 = 케미컬 릭션(화학 반응)',
      context: 'These chemicals must be handled carefully.',
      synonymAntonym: 'Syn: substance, compound',
    })
  ),
  word('Citizen', '시민', 3, 'noun',
    ['외국인', '이민자', '난민', '왕', '귀족', '노예', '군인', '피난민', '무국적', '여행자'],
    tips({
      etymology: '라틴어 civitas(도시)에서 유래',
      visual: '국기를 배경으로 선 사람',
      soundAlike: '시티즌 = 시티즌십(시민권)',
      context: 'Every citizen has the right to vote.',
      synonymAntonym: 'Syn: resident, national',
    })
  ),
  word('Claim', '주장하다', 3, 'verb',
    ['부인하다', '거절하다', '포기하다', '양보하다', '인정하다', '동의하다', '수용하다', '받아들이다', '승인하다', '허락하다'],
    tips({
      etymology: '라틴어 clamare(외치다)에서 유래',
      visual: '공중에 주먹을 들어 올리는 사람',
      soundAlike: '클레임 = 클레임 체크(보험 청구)',
      context: 'He claims he was not at the scene.',
      synonymAntonym: 'Syn: assert, declare, Ant: deny',
    })
  ),
  word('Climate', '기후', 3, 'noun',
    ['날씨', '온도', '습도', '바람', '비', '눈', '폭풍', '일기', '대기', '환경'],
    tips({
      etymology: '그리스어 klima(기울기) -> 위도에 따른 기울기',
      visual: '지구본 위의 기후대',
      soundAlike: '클라이밋 = 클라이밋 체인지(기후 변화)',
      context: 'The climate in this region is very dry.',
      synonymAntonym: 'Syn: weather pattern, conditions',
    })
  ),
  word('Combine', '결합하다', 3, 'verb',
    ['분리하다', '나누다', '갈라놓다', '해체하다', '분해하다', '흩다', '해산하다', '분리', '독립', '단독'],
    tips({
      etymology: 'com(함께) + bine(두 개) -> 함께 두다',
      visual: '두 액체를 한 플라스크에 합치는 모습',
      soundAlike: '컴바인 = 컴바인드(결합된)',
      context: 'Combine the flour and sugar in a bowl.',
      synonymAntonym: 'Syn: merge, unite, Ant: separate',
    })
  ),
  word('Comfort', '위로', 3, 'noun',
    ['불편', '고통', '슬픔', '고민', '걱정', '불안', '두려움', '스트레스', '고난', '역경'],
    tips({
      etymology: 'com(함께) + fort(강함) -> 함께 강해지다',
      visual: '이불에 푹 파고든 사람',
      soundAlike: '컴포트 = 컴퍼터블(편안한)',
      context: 'Your words gave me great comfort.',
      synonymAntonym: 'Syn: solace, ease, Ant: discomfort',
    })
  ),
  word('Command', '명령', 3, 'noun',
    ['복종', '순종', '요청', '제안', '허락', '승인', '동의', '거절', '반대', '거부'],
    tips({
      etymology: 'com(완전히) + mand(맡기다) -> 지시하다',
      visual: '군인이 경례하는 모습',
      soundAlike: '커맨드 = 커맨드 센터(지휘 센터)',
      context: 'The general gave the command to advance.',
      synonymAntonym: 'Syn: order, directive, Ant: request',
    })
  ),
  word('Common', '흔한', 3, 'adjective',
    ['희귀한', '특별한', '독특한', '드문', '비범한', '예외적', '놀라운', '이상한', '특이한', '유일한'],
    tips({
      etymology: '라틴어 communis(함께) -> 모두가 가진 것',
      visual: '거리에서 흔히 보이는 광경',
      soundAlike: '커먼 = 커먼 센스(상식)',
      context: 'It is common to feel nervous before an exam.',
      synonymAntonym: 'Syn: ordinary, frequent, Ant: rare',
    })
  ),
  word('Compare', '비교하다', 3, 'verb',
    ['동일시하다', '혼동하다', '무시하다', '별개로', '독립적으로', '분리해서', '구분 없이', '섞다', '합치다', '통합하다'],
    tips({
      etymology: 'com(함께) + par(같음) -> 나란히 놓고 보다',
      visual: '두 상품을 나란히 놓고 보는 손',
      soundAlike: '컴페어 = 컴퍼리슨(비교)',
      context: 'Compare the prices before you buy.',
      synonymAntonym: 'Syn: contrast, compare to, Ant: differentiate',
    })
  ),
  word('Compete', '경쟁하다', 3, 'verb',
    ['협력하다', '협동하다', '도와주다', '배려하다', '양보하다', '포기하다', '기권하다', '물러나다', '퇴장하다', '중단하다'],
    tips({
      etymology: 'com(함께) + pete(찾다) -> 함께 목표를 찾다',
      visual: '트랙에서 달리는 선수들',
      soundAlike: '컴피트 = 컴피티션(경쟁)',
      context: 'Athletes from 50 countries will compete.',
      synonymAntonym: 'Syn: contend, vie, Ant: cooperate',
    })
  ),
  word('Complain', '불평하다', 3, 'verb',
    ['칭찬하다', '감사하다', '만족하다', '찬성하다', '동의하다', '수용하다', '인정하다', '기뻐하다', '즐기다', '감사하다'],
    tips({
      etymology: 'com(강조) + plain(슬픔) -> 슬픔을 표현하다',
      visual: '화난 표정으로 말하는 사람',
      soundAlike: '컴플레인 = 컴플레인트(불만)',
      context: 'Customers often complain about the service.',
      synonymAntonym: 'Syn: grumble, gripe, Ant: praise',
    })
  ),
  word('Complete', '완성하다', 3, 'verb',
    ['시작하다', '중단하다', '미완성', '미완료', '부분적', '불완전', '결함', '부족', '반쯤', '절반'],
    tips({
      etymology: 'com(완전히) + plete(채우다) -> 완전히 채우다',
      visual: '체크박스에 체크 표시',
      soundAlike: '컴플리트 = 컴플리션(완료)',
      context: 'I need to complete this report by Friday.',
      synonymAntonym: 'Syn: finish, accomplish, Ant: begin',
    })
  ),
];
