import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch10: VocabItem[] = [
  word('Caution', '주의', 5, 'noun',
    ['무관심', '태만', '대담', '무모', '경솔', '무시', '방치', '소홀', '무지', '과신'],
    tips({
      etymology: '라틴어 cautio(조심함)에서 유래, caveo(조심하다)',
      visual: '노란색 경고 표지판',
      soundAlike: '코션 = 코셔스(조심스러운)',
      context: 'Handle with caution.',
      synonymAntonym: '동의어: care, prudence, 반의어: recklessness',
    })
  ),
  word('Cease', '중단하다', 5, 'verb',
    ['시작하다', '재개하다', '계속하다', '지속하다', '이어가다', '발동하다', '가속하다', '촉진하다', '강화하다', '확대하다'],
    tips({
      etymology: '라틴어 cedere(그만두다)에서 유래',
      visual: '손을 들어 멈추는 신호',
      soundAlike: '시스 = 시저(중단)',
      context: 'The fighting ceased at dawn.',
      synonymAntonym: '동의어: stop, halt, 반의어: continue',
    })
  ),
  word('Challenge', '도전', 5, 'noun',
    ['포기', '회피', '편안', '쉬움', '평온', '안정', '소극', '수동', '복종', '순응'],
    tips({
      etymology: '라틴어 calumnia(고소)에서 유래',
      visual: '산꼭대기를 바라보는 등산가',
      soundAlike: '챌린지 = 챌린징(도전적인)',
      context: 'She accepted the challenge.',
      synonymAntonym: '동의어: difficulty, obstacle, 반의어: ease',
    })
  ),
  word('Chaos', '혼란', 5, 'noun',
    ['질서', '정돈', '조화', '균형', '체계', '규율', '안정', '평온', '조직', '구조'],
    tips({
      etymology: '그리스어 chaos(비어 있는 공간)에서 유래',
      visual: '흩어진 퍼즐 조각',
      soundAlike: '케오스 = 케이오틱(혼란스러운)',
      context: 'The protest caused chaos in the streets.',
      synonymAntonym: '동의어: disorder, confusion, 반의어: order',
    })
  ),
  word('Chronic', '만성적인', 5, 'adjective',
    ['급성의', '일시적', '순간적', '임시', '단발성', '일과성', '잠깐', '가끔', '간헐적', '단기'],
    tips({
      etymology: '그리스어 chronos(시간)에서 유래',
      visual: '의료 차트에 표시된 장기 병력',
      soundAlike: '크로닉 = 크로노로지(연대기)',
      context: 'He suffers from chronic back pain.',
      synonymAntonym: '동의어: persistent, recurring, 반의어: acute',
    })
  ),
  word('Circumstance', '상황', 5, 'noun',
    ['불변', '본질', '규칙', '원칙', '정형', '고정', '일관', '표준', '기본', '핵심'],
    tips({
      etymology: 'circum(주위) + stance(서다) -> 주변에 서 있는 것',
      visual: '다양한 상황을 보여주는 갈림길',
      soundAlike: '서컴스턴스 = 서컴스탠셜(상황의)',
      context: 'Under the circumstances, we had no choice.',
      synonymAntonym: '동의어: situation, condition',
    })
  ),
  word('Civil', '시민의', 5, 'adjective',
    ['군사적', '무력', '폭력적', '야만적', '무례한', '거친', '야생', '원시', '전투적', '호전적'],
    tips({
      etymology: '라틴어 civilis(시민의)에서 유래',
      visual: '투표장에서 투표하는 시민',
      soundAlike: '시빌 = 시빌리티(예의)',
      context: 'Civil rights must be protected.',
      synonymAntonym: '동의어: civic, polite, 반의어: military',
    })
  ),
  word('Classify', '분류하다', 5, 'verb',
    ['혼합하다', '섞다', '통합하다', '융합하다', '흐트러뜨리다', '무분별', '분산', '해체', '해산', '해체'],
    tips({
      etymology: 'class(등급) + -ify(만들다) -> 등급을 나누다',
      visual: '서랍에 라벨을 붙여 정리하는 모습',
      soundAlike: '클래시파이 = 클래시피케이션(분류)',
      context: 'Scientists classify species by genus.',
      synonymAntonym: '동의어: categorize, sort, 반의어: jumble',
    })
  ),
  word('Client', '고객', 5, 'noun',
    ['판매자', '공급자', '경쟁자', '적대자', '낯선 사람', '무관인', '외부인', '적', '반대자', '비고객'],
    tips({
      etymology: '라틴어 cliens(의뢰인)에서 유래',
      visual: '상점에서 물건을 고르는 손님',
      soundAlike: '클라이언트 = 클라이언트 리스트(고객 목록)',
      context: 'She has many loyal clients.',
      synonymAntonym: '동의어: customer, patron',
    })
  ),
  word('Collapse', '붕괴하다', 5, 'verb',
    ['세우다', '건설하다', '유지하다', '강화하다', '지탱하다', '보강하다', '복구하다', '재건하다', '회복하다', '상승하다'],
    tips({
      etymology: 'col(함께) + lapse(미끄러지다) -> 함께 쓰러지다',
      visual: '무너지는 건물',
      soundAlike: '컬랩스 = 컬랩서블(접이식)',
      context: 'The bridge collapsed under the weight.',
      synonymAntonym: '동의어: fall, crumble, 반의어: rise',
    })
  ),
  word('Colleague', '동료', 5, 'noun',
    ['상사', '경쟁자', '적대자', '낯선 사람', '외부인', '적', '반대자', '경쟁사', '타인', '이질'],
    tips({
      etymology: 'col(함께) + league(연맹) -> 함께 일하는 사람',
      visual: '회의실에서 나란히 앉은 직원들',
      soundAlike: '콜리그 = 콜리지(대학)와 구분',
      context: 'My colleague recommended this book.',
      synonymAntonym: '동의어: coworker, associate',
    })
  ),
  word('Colony', '식민지', 5, 'noun',
    ['본국', '독립국', '자유지', '해방구', '자치구', '핵심', '중앙', '수도', '본토', '메트로폴리스'],
    tips({
      etymology: '라틴어 colonia(농장)에서 유래',
      visual: '지도에 표시된 해외 영토',
      soundAlike: '콜로니 = 콜로니얼(식민의)',
      context: 'The British had many colonies.',
      synonymAntonym: '동의어: settlement, territory',
    })
  ),
  word('Commerce', '상업', 5, 'noun',
    ['무역 금지', '자급자족', '폐쇄', '고립', '침체', '멈춤', '정지', '공백', '휴업', '폐업'],
    tips({
      etymology: 'com(함께) + merce(상품) -> 상품 교환',
      visual: '상품이 오가는 화물선',
      soundAlike: '커머스 = 이커머스(전자상거래)',
      context: 'International commerce has grown.',
      synonymAntonym: '동의어: trade, business',
    })
  ),
  word('Commit', '약속하다', 5, 'verb',
    ['회피하다', '거절하다', '배반하다', '포기하다', '미루다', '주저하다', '철회하다', '취소하다', '해제하다', '탈퇴하다'],
    tips({
      etymology: 'com(함께) + mit(보내다) -> 함께 맡기다',
      visual: '악수를 하며 계약하는 모습',
      soundAlike: '커밋 = 커밋먼트(헌신)',
      context: 'He committed to the project.',
      synonymAntonym: '동의어: pledge, obligate, 반의어: abandon',
    })
  ),
  word('Communicate', '소통하다', 5, 'verb',
    ['숨기다', '침묵하다', '고립되다', '차단하다', '은폐하다', '비밀 유지', '거부하다', '무시하다', '분리하다', '단절하다'],
    tips({
      etymology: 'com(함께) + muni(나누다) + -cate -> 함께 나누다',
      visual: '전화로 대화하는 사람',
      soundAlike: '커뮤니케이트 = 커뮤니케이션(소통)',
      context: 'We need to communicate better.',
      synonymAntonym: '동의어: convey, share, 반의어: withhold',
    })
  ),
  word('Companion', '동반자', 5, 'noun',
    ['적', '경쟁자', '적대자', '낯선 사람', '외로운 존재', '독립자', '고립자', '반대자', '타인', '이질'],
    tips({
      etymology: 'com(함께) + pan(빵) + -ion -> 함께 빵을 먹는 사람',
      visual: '산책로를 함께 걷는 두 사람',
      soundAlike: '컴패니언 = 컴패니(회사)',
      context: 'She was my companion on the trip.',
      synonymAntonym: '동의어: partner, mate',
    })
  ),
  word('Compel', '강제하다', 5, 'verb',
    ['선택권을 주다', '허용하다', '권유하다', '제안하다', '방치하다', '자유롭게', '해제하다', '포기하다', '거절하다', '미루다'],
    tips({
      etymology: 'com(완전히) + pel(밀다) -> 강하게 밀다',
      visual: '법관이 판결을 내리는 모습',
      soundAlike: '컴펠 = 컴펄서리(의무적)',
      context: 'The law compels us to pay taxes.',
      synonymAntonym: '동의어: force, oblige, 반의어: allow',
    })
  ),
  word('Compensate', '보상하다', 5, 'verb',
    ['손해를 주다', '빼앗다', '부당하게', '무시하다', '방치하다', '차단하다', '억누르다', '박탈하다', '손실', '해약'],
    tips({
      etymology: 'com(함께) + pens(달다) + -ate -> 함께 저울을 맞추다',
      visual: '보상금을 건네는 손',
      soundAlike: '컴펜세이트 = 컴펜세이션(보상)',
      context: 'The company will compensate the victims.',
      synonymAntonym: '동의어: reimburse, offset, 반의어: deprive',
    })
  ),
  word('Complex', '복잡한', 5, 'adjective',
    ['단순한', '쉬운', '명료한', '평이한', '직선적', '기본적', '원시적', '미개발', '초보', '간단'],
    tips({
      etymology: 'com(함께) + plex(접다) -> 함께 얽힌',
      visual: '수많은 선이 얽혀 있는 회로도',
      soundAlike: '컴플렉스 = 컴플렉시티(복잡성)',
      context: 'The issue is more complex than it seems.',
      synonymAntonym: '동의어: complicated, intricate, 반의어: simple',
    })
  ),
  word('Component', '구성 요소', 5, 'noun',
    ['전체', '통합체', '혼합물', '융합', '일체', '단일체', '종합', '총체', '복합', '결과물'],
    tips({
      etymology: 'com(함께) + pon(놓다) + -ent -> 함께 놓여 있는 것',
      visual: '분해된 기계의 부품들',
      soundAlike: '컴포넌트 = 컴포넌트 기반(구성요소 기반)',
      context: 'Each component has a specific function.',
      synonymAntonym: '동의어: part, element',
    })
  ),
  word('Compose', '구성하다', 5, 'verb',
    ['분해하다', '해체하다', '흩다', '분산하다', '무질서', '혼란', '파괴하다', '해체', '분리하다', '해산하다'],
    tips({
      etymology: 'com(함께) + pose(놓다) -> 함께 배치하다',
      visual: '악보를 쓰는 작곡가',
      soundAlike: '컴포즈 = 컴포저(작곡가)',
      context: 'Water is composed of hydrogen and oxygen.',
      synonymAntonym: '동의어: constitute, make up, 반의어: decompose',
    })
  ),
  word('Comprehend', '이해하다', 5, 'verb',
    ['오해하다', '혼동하다', '무시하다', '못 알아듣다', '착각하다', '착오', '착각', '오판', '불명', '혼란'],
    tips({
      etymology: 'com(완전히) + prehend(잡다) -> 완전히 파악하다',
      visual: '아하 하는 표정으로 깨달는 모습',
      soundAlike: '컴프리헨드 = 컴프리헨션(이해)',
      context: 'I cannot comprehend his motives.',
      synonymAntonym: '동의어: understand, grasp, 반의어: misunderstand',
    })
  ),
  word('Compromise', '타협', 5, 'noun',
    ['고집', '완강', '극단', '대립', '갈등', '불화', '불타협', '원칙 고수', '일방', '단결'],
    tips({
      etymology: 'com(함께) + promise(약속) -> 함께 약속하다',
      visual: '양손이 중간에서 만나는 악수',
      soundAlike: '컴프로마이즈 = 컴프로마이즈드(위험에 처한)',
      context: 'We reached a compromise.',
      synonymAntonym: '동의어: agreement, concession, 반의어: conflict',
    })
  ),
  word('Concentrate', '집중하다', 5, 'verb',
    ['산만해지다', '흩어지다', '분산하다', '방치하다', '무시하다', '소홀', '산만', '분주', '산발', '해이'],
    tips({
      etymology: 'con(함께) + centr(중심) + -ate -> 중심에 모으다',
      visual: '책에 집중하는 학생',
      soundAlike: '콘센트레이트 = 콘센트레이션(집중)',
      context: 'Please concentrate on your work.',
      synonymAntonym: '동의어: focus, attend, 반의어: distract',
    })
  ),
  word('Conclude', '결론을 내리다', 5, 'verb',
    ['시작하다', '미결', '보류하다', '의문을 남기다', '열어두다', '논의 중', '검토 중', '미정', '추측', '가설'],
    tips({
      etymology: 'con(완전히) + clude(닫다) -> 완전히 마무리하다',
      visual: '발표 마지막에 결론을 말하는 사람',
      soundAlike: '콘클루드 = 콘클루전(결론)',
      context: 'We concluded that the plan was flawed.',
      synonymAntonym: '동의어: deduce, infer, 반의어: begin',
    })
  ),
  word('Concrete', '구체적인', 5, 'adjective',
    ['추상적인', '모호한', '이론적', '가상의', '몽상', '공허', '허구', '개념적', '비현실', '애매'],
    tips({
      etymology: 'con(함께) + crete(자라다) -> 함께 굳어진',
      visual: '실제 건물과 바닥',
      soundAlike: '콘크리트 = 콘크리트(콘크리트)',
      context: 'We need concrete evidence.',
      synonymAntonym: '동의어: specific, tangible, 반의어: abstract',
    })
  ),
  word('Conduct', '수행하다', 5, 'verb',
    ['방치하다', '소홀하다', '중단하다', '포기하다', '그만두다', '유기하다', '거부하다', '피하다', '회피하다', '태만'],
    tips({
      etymology: 'con(함께) + duct(이끌다) -> 함께 이끌다',
      visual: '오케스트라를 지휘하는 지휘자',
      soundAlike: '컨덕트 = 컨덕터(지휘자)',
      context: 'The study was conducted over two years.',
      synonymAntonym: '동의어: carry out, execute',
    })
  ),
  word('Conference', '회의', 5, 'noun',
    ['고립', '단독', '불참', '별도', '개인', '비공개', '비밀', '은퇴', '분리', '해산'],
    tips({
      etymology: 'con(함께) + fer(가져오다) + -ence -> 함께 모여 의견을 나누다',
      visual: '회의실에 모인 참석자들',
      soundAlike: '컨퍼런스 = 컨퍼런스 콜(전화 회의)',
      context: 'The conference will be held next month.',
      synonymAntonym: '동의어: meeting, convention',
    })
  ),
  word('Confine', '제한하다', 5, 'verb',
    ['해방하다', '자유롭게 하다', '확대하다', '넓히다', '개방하다', '해제하다', '풀어주다', '내보내다', '해방', '무제한'],
    tips({
      etymology: 'con(함께) + fine(경계) -> 경계 안에 두다',
      visual: '담장 안에 갇힌 사람',
      soundAlike: '컨파인 = 컨파인먼트(감금)',
      context: 'Please confine your comments to the topic.',
      synonymAntonym: '동의어: restrict, limit, 반의어: free',
    })
  ),
  word('Conflict', '갈등', 5, 'noun',
    ['화해', '조화', '협력', '일치', '동의', '평화', '우호', '협조', '합의', '단결'],
    tips({
      etymology: 'con(함께) + flict(치다) -> 함께 부딪치다',
      visual: '대립하는 두 사람',
      soundAlike: '컨플릭트 = 컨플릭팅(충돌하는)',
      context: 'There is a conflict of interest.',
      synonymAntonym: '동의어: dispute, clash, 반의어: harmony',
    })
  ),
  word('Confront', '직면하다', 5, 'verb',
    ['회피하다', '도망치다', '숨다', '무시하다', '외면하다', '빗나가다', '우회하다', '피하다', '회피', '후퇴'],
    tips({
      etymology: 'con(앞으로) + front(이마) -> 정면으로 마주하다',
      visual: '적과 마주 서는 용사',
      soundAlike: '컨프론트 = 컨프론테이션(직면)',
      context: 'He refused to confront the problem.',
      synonymAntonym: '동의어: face, encounter, 반의어: avoid',
    })
  ),
  word('Conscience', '양심', 5, 'noun',
    ['무양심', '냉담', '무감각', '무덕', '비도덕', '잔인', '냉혹', '무정', '무관심', '이기심'],
    tips({
      etymology: 'con(함께) + sci(알다) + -ence -> 함께 아는 것',
      visual: '속으로 고민하는 사람의 표정',
      soundAlike: '콘션스 = 콘셔스(양심 있는)',
      context: 'His conscience troubled him.',
      synonymAntonym: '동의어: morality, scruple',
    })
  ),
  word('Conscious', '의식적인', 5, 'adjective',
    ['무의식적', '무지각', '혼미', '졸음', '몽롱', '무감각', '반사적', '자동적', '본능적', '무의식'],
    tips({
      etymology: 'con(함께) + sci(알다) + -ous -> 알고 있는',
      visual: '깨어 있는 눈을 뜬 사람',
      soundAlike: '콘셔스 = 콘셔스니스(의식)',
      context: 'She was conscious of his stare.',
      synonymAntonym: '동의어: aware, deliberate, 반의어: unconscious',
    })
  ),
  word('Consensus', '합의', 5, 'noun',
    ['불일치', '분열', '대립', '갈등', '반대', '불화', '논쟁', '분쟁', '의견 차이', '불협화음'],
    tips({
      etymology: 'con(함께) + sens(느끼다) + -us -> 함께 느끼는 것',
      visual: '만장일치로 손을 들어 올리는 회의',
      soundAlike: '콘센서스 = 콘센즈얼(합의의)',
      context: 'We reached a consensus on the issue.',
      synonymAntonym: '동의어: agreement, accord, 반의어: disagreement',
    })
  ),
  word('Consequence', '결과', 5, 'noun',
    ['원인', '시작', '시초', '출발', '계기', '선행', '전제', '조건', '무관', '독립'],
    tips({
      etymology: 'con(함께) + sequ(따르다) + -ence -> 따라오는 것',
      visual: '도미노가 쓰러지는 연쇄 반응',
      soundAlike: '콘시퀀스 = 콘시퀀셜(결과적)',
      context: 'Consider the consequences of your actions.',
      synonymAntonym: '동의어: result, outcome',
    })
  ),
  word('Conservation', '보존', 5, 'noun',
    ['낭비', '파괴', '소비', '탄진', '고갈', '훼손', '폐기', '해체', '해산', '소멸'],
    tips({
      etymology: 'con(함께) + serv(지키다) + -ation -> 함께 지키다',
      visual: '야생동물 보호구역의 표지판',
      soundAlike: '컨서베이션 = 컨서브(보존하다)',
      context: 'Energy conservation is important.',
      synonymAntonym: '동의어: preservation, protection, 반의어: waste',
    })
  ),
  word('Considerable', '상당한', 5, 'adjective',
    ['미미한', '무시할 만한', '하찮은', '적은', '부족한', '빈약한', '얕은', '표면적', '피상적', '소량'],
    tips({
      etymology: 'consider(고려하다) + -able -> 고려할 만한',
      visual: '큰 금액이 표시된 화면',
      soundAlike: '컨시더러블 = 컨시더(고려하다)',
      context: 'The project requires considerable effort.',
      synonymAntonym: '동의어: significant, substantial, 반의어: negligible',
    })
  ),
  word('Consist', '구성되다', 5, 'verb',
    ['분해되다', '흩어지다', '해체되다', '소멸하다', '변질되다', '변형', '분리', '해산', '붕괴', '소실'],
    tips({
      etymology: 'con(함께) + sist(서다) -> 함께 서 있다',
      visual: '여러 조각으로 이루어진 퍼즐',
      soundAlike: '컨시스트 = 컨시스턴트(일관된)',
      context: 'The team consists of five members.',
      synonymAntonym: '동의어: comprise, be composed of',
    })
  ),
  word('Consistent', '일관된', 5, 'adjective',
    ['변덕스러운', '불규칙한', '모순된', '불일치', '요동치는', '산만한', '불안정', '변동', '이중', '엇갈림'],
    tips({
      etymology: 'con(함께) + sist(서다) + -ent -> 함께 서 있는',
      visual: '한 줄로 가지런히 정렬된 물건들',
      soundAlike: '컨시스턴트 = 컨시스턴시(일관성)',
      context: 'Her story was consistent throughout.',
      synonymAntonym: '동의어: coherent, uniform, 반의어: inconsistent',
    })
  ),
  word('Conspiracy', '음모', 5, 'noun',
    ['공개', '투명', '정직', '정직함', '솔직', '개방', '공표', '발표', '공개성', '투명성'],
    tips({
      etymology: 'con(함께) + spir(숨쉬다) + -acy -> 함께 숨겨진 것',
      visual: '몰래 속삭이는 사람들',
      soundAlike: '컨스피러시 = 컨스파이어(공모하다)',
      context: 'They were accused of conspiracy.',
      synonymAntonym: '동의어: plot, scheme',
    })
  ),
  word('Constitute', '구성하다', 5, 'verb',
    ['분해하다', '해체하다', '파괴하다', '해산하다', '무효화하다', '철폐하다', '폐지하다', '붕괴', '분리', '해체'],
    tips({
      etymology: 'con(함께) + stitute(세우다) -> 함께 세우다',
      visual: '여러 조각이 모여 전체를 이루는 모습',
      soundAlike: '컨스티튜트 = 컨스티튜션(헌법)',
      context: 'Women constitute half the workforce.',
      synonymAntonym: '동의어: form, comprise, 반의어: disband',
    })
  ),
  word('Consult', '상담하다', 5, 'verb',
    ['무시하다', '단독 결정', '독단', '독선', '고집', '무시', '배제', '회피', '거절', '방치'],
    tips({
      etymology: 'con(함께) + sult(앉다) -> 함께 앉아 의논하다',
      visual: '전문가와 상담하는 내담자',
      soundAlike: '컨설트 = 컨설턴트(자문위원)',
      context: 'You should consult a doctor.',
      synonymAntonym: '동의어: confer, seek advice, 반의어: ignore',
    })
  ),
  word('Consume', '소비하다', 5, 'verb',
    ['생산하다', '절약하다', '보존하다', '축적하다', '저장하다', '아끼다', '보관하다', '보유', '비축', '축적'],
    tips({
      etymology: 'con(완전히) + sume(잡다) -> 완전히 가져가다',
      visual: '음식을 먹는 사람',
      soundAlike: '컨슘 = 컨슈머(소비자)',
      context: 'We consume too much energy.',
      synonymAntonym: '동의어: use up, expend, 반의어: conserve',
    })
  ),
  word('Contemporary', '동시대의', 5, 'adjective',
    ['고대의', '구식의', '미래의', '과거의', '시대에 뒤떨어진', '원시적', '구시대', '레트로', '옛날', '미래형'],
    tips({
      etymology: 'con(함께) + tempor(시간) + -ary -> 같은 시대의',
      visual: '현대 건축물과 옛 건물의 비교',
      soundAlike: '컨템포러리 = 컨템포러리 아트(현대 미술)',
      context: 'Contemporary art can be challenging.',
      synonymAntonym: '동의어: modern, current, 반의어: ancient',
    })
  ),
  word('Contempt', '경멸', 5, 'noun',
    ['존경', '경의', '존중', '애정', '호의', '애호', '찬미', '칭송', '예우', '존중심'],
    tips({
      etymology: 'con(함께) + tempt(업신여기다) -> 경멸하다',
      visual: '코웃음 치는 표정',
      soundAlike: '컨템프트 = 컨템츄어스(경멸하는)',
      context: 'He showed contempt for the rules.',
      synonymAntonym: '동의어: scorn, disdain, 반의어: respect',
    })
  ),
  word('Context', '맥락', 5, 'noun',
    ['고립', '단편', '단절', '분리', '무맥락', '추상', '공허', '배경 없음', '독립', '단독'],
    tips({
      etymology: 'con(함께) + text(짜다) -> 함께 엮인 것',
      visual: '문장 주변의 단어들',
      soundAlike: '컨텍스트 = 컨텍스츄얼(맥락의)',
      context: 'You need to consider the context.',
      synonymAntonym: '동의어: circumstance, setting',
    })
  ),
  word('Contradict', '모순되다', 5, 'verb',
    ['일치하다', '부합하다', '동의하다', '확인하다', '지지하다', '보완하다', '조화', '일치', '합치', '부합'],
    tips({
      etymology: 'contra(반대로) + dict(말하다) -> 반대로 말하다',
      visual: '서로 반대되는 두 표지판',
      soundAlike: '컨트라딕트 = 컨트라딕션(모순)',
      context: 'His actions contradict his words.',
      synonymAntonym: '동의어: oppose, conflict with, 반의어: agree',
    })
  ),
  word('Convention', '관례', 5, 'noun',
    ['비정통', '이색', '이변', '예외', '특이', '파격', '비관습', '혁신', '파괴', '탈피'],
    tips({
      etymology: 'con(함께) + vent(오다) + -ion -> 함께 모여 정한 것',
      visual: '사회적 규범을 상징하는 핸드셰이크',
      soundAlike: '컨벤션 = 컨벤셔널(관례적인)',
      context: 'It is a convention to shake hands.',
      synonymAntonym: '동의어: custom, tradition, 반의어: innovation',
    })
  ),
  word('Convert', '변환하다', 5, 'verb',
    ['유지하다', '고수하다', '보존하다', '그대로 두다', '불변', '고정', '동결', '정지', '보존', '유지'],
    tips({
      etymology: 'con(함께) + vert(돌다) -> 함께 돌리다',
      visual: '형태가 바뀌는 변환기',
      soundAlike: '컨버트 = 컨버전(변환)',
      context: 'We need to convert the file format.',
      synonymAntonym: '동의어: transform, change, 반의어: preserve',
    })
  ),
  word('Cooperate', '협력하다', 5, 'verb',
    ['거부하다', '대립하다', '방해하다', '경쟁하다', '분열하다', '갈등하다', '반대하다', '저항하다', '불협조', '독단'],
    tips({
      etymology: 'co(함께) + operate(작동하다) -> 함께 작동하다',
      visual: '함께 무거운 물건을 들고 있는 사람들',
      soundAlike: '코오퍼레이트 = 코오퍼레이션(협력)',
      context: 'We must cooperate to succeed.',
      synonymAntonym: '동의어: collaborate, work together, 반의어: compete',
    })
  ),
];
