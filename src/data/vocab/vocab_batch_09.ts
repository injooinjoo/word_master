import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch09: VocabItem[] = [
  word('Abolish', '폐지하다', 5, 'verb',
    ['제정하다', '유지하다', '강화하다', '도입하다', '확대하다', '시행하다', '승인하다', '보존하다', '설립하다', '지지하다'],
    tips({
      etymology: '라틴어 abolere(제거하다)에서 유래, ab(떨어져) + olere(성장하다)',
      visual: '법전에서 조항을 지우는 손',
      soundAlike: '어볼리시 = 어볼리시먼트(폐지)',
      context: 'The law was abolished in 2020.',
      synonymAntonym: '동의어: eliminate, repeal, 반의어: establish',
    })
  ),
  word('Absorb', '흡수하다', 5, 'verb',
    ['배출하다', '방출하다', '거부하다', '반사하다', '차단하다', '저지하다', '내보내다', '분출하다', '방사하다', '배설하다'],
    tips({
      etymology: 'ab(완전히) + sorb(삼키다) -> 완전히 삼키다',
      visual: '물을 흡수하는 스펀지',
      soundAlike: '앱솔브 = 앱솔브션(흡수)',
      context: 'Plants absorb water through their roots.',
      synonymAntonym: '동의어: soak up, take in, 반의어: emit',
    })
  ),
  word('Abstract', '추상적인', 5, 'adjective',
    ['구체적인', '실제의', '현실적', '실질적', '명확한', '육체적', '물질적', '감각적', '실용적', '실용적'],
    tips({
      etymology: 'abs(떨어져) + tract(끌다) -> 본질만 끌어내다',
      visual: '몇몇 기하학적 도형으로 된 추상화',
      soundAlike: '앱스트랙트 = 앱스트랙션(추출)',
      context: 'Abstract art does not represent reality.',
      synonymAntonym: '동의어: theoretical, conceptual, 반의어: concrete',
    })
  ),
  word('Accurate', '정확한', 5, 'adjective',
    ['부정확한', '틀린', '오류가 있는', '대략적인', '애매한', '모호한', '착오', '왜곡', '편향', '불명확'],
    tips({
      etymology: 'ac(향하여) + cur(주의) + -ate -> 주의를 기울여 정확하게',
      visual: '정확히 0을 가리키는 저울',
      soundAlike: '애큐리트 = 애큐러시(정확도)',
      context: 'We need accurate data for the report.',
      synonymAntonym: '동의어: precise, exact, 반의어: inaccurate',
    })
  ),
  word('Acknowledge', '인정하다', 5, 'verb',
    ['부정하다', '거절하다', '무시하다', '부인하다', '숨기다', '은폐하다', '거부하다', '반박하다', '불인정', '회피'],
    tips({
      etymology: 'ac(향하여) + knowledge(지식) -> 알고 있다고 하다',
      visual: '고개를 끄덕이며 인정하는 모습',
      soundAlike: '액놀리지 = 액놀리지먼트(인정)',
      context: 'He acknowledged his mistake.',
      synonymAntonym: '동의어: admit, recognize, 반의어: deny',
    })
  ),
  word('Acquire', '획득하다', 5, 'verb',
    ['잃다', '포기하다', '양도하다', '버리다', '상실하다', '매각하다', '기부하다', '반환하다', '잃어버리다', '빼앗기다'],
    tips({
      etymology: 'ac(향하여) + quire(찾다) -> 찾아 얻다',
      visual: '상장을 받으며 달성하는 모습',
      soundAlike: '어콰이어 = 어콰이지션(인수)',
      context: 'She acquired new skills at the workshop.',
      synonymAntonym: '동의어: obtain, gain, 반의어: lose',
    })
  ),
  word('Adapt', '적응하다', 5, 'verb',
    ['저항하다', '거부하다', '고수하다', '경직', '유지하다', '불변', '불편', '고집', '배척', '거부'],
    tips({
      etymology: 'ad(향하여) + apt(맞다) -> 맞게 하다',
      visual: '새 환경에서 잘 적응하는 이민자',
      soundAlike: '어댑트 = 어댑테이션(적응)',
      context: 'Animals must adapt to survive.',
      synonymAntonym: '동의어: adjust, acclimatize, 반의어: resist',
    })
  ),
  word('Adequate', '충분한', 5, 'adjective',
    ['부족한', '불충분', '미달', '과잉', '과다', '결핍', '모자람', '빈약', '희소', '미흡'],
    tips({
      etymology: 'ad(향하여) + equ(같다) + -ate -> 필요한 만큼 같은',
      visual: '충분한 양의 음식이 담긴 접시',
      soundAlike: '애디퀘이트 = 애디퀫시(충분함)',
      context: 'We have adequate supplies for the trip.',
      synonymAntonym: '동의어: sufficient, enough, 반의어: inadequate',
    })
  ),
  word('Adopt', '채택하다', 5, 'verb',
    ['거부하다', '포기하다', '배척하다', '버리다', '폐기하다', '기각하다', '반대하다', '거절하다', '배제하다', '제외하다'],
    tips({
      etymology: 'ad(향하여) + opt(선택하다) -> 선택해서 받아들이다',
      visual: '회의에서 찬성 손을 들어 채택하는 모습',
      soundAlike: '어댑트 = 어댑션(입양)',
      context: 'The committee adopted the new policy.',
      synonymAntonym: '동의어: embrace, accept, 반의어: reject',
    })
  ),
  word('Advocate', '옹호하다', 5, 'verb',
    ['반대하다', '비난하다', '공격하다', '거부하다', '저지하다', '억압하다', '차단하다', '무시하다', '배척하다', '질책하다'],
    tips({
      etymology: 'ad(향하여) + voc(부르다) + -ate -> ~을 위해 외치다',
      visual: '마이크 앞에서 열정적으로 연설하는 사람',
      soundAlike: '애드보케이트 = 애드보커시(옹호)',
      context: 'She advocates for children\'s rights.',
      synonymAntonym: '동의어: support, champion, 반의어: oppose',
    })
  ),
  word('Affect', '영향을 미치다', 5, 'verb',
    ['무관하다', '영향 없음', '불변', '그대로', '독립', '중립', '배제', '무시', '제외', '무관'],
    tips({
      etymology: 'af(향하여) + fect(하다) -> ~에게 작용하다',
      visual: '돌이 물에 떨어져 파문이 퍼지는 모습',
      soundAlike: '어펙트 = 이펙트(효과)와 구분',
      context: 'Weather can affect our mood.',
      synonymAntonym: '동의어: influence, impact',
    })
  ),
  word('Afford', '~할 여유가 있다', 5, 'verb',
    ['빈곤', '불가능', '어렵다', '부족', '못하다', '불충분', '빈털터리', '가난', '무능', '불가'],
    tips({
      etymology: 'af(향하여) + ford(앞으로) -> 앞으로 나갈 수 있다',
      visual: '지갑을 열고 결제할 수 있는 모습',
      soundAlike: '어포드 = 어포더블(감당 가능한)',
      context: 'I cannot afford to buy a new car.',
      synonymAntonym: '동의어: have enough for, manage',
    })
  ),
  word('Aggressive', '공격적인', 5, 'adjective',
    ['소극적인', '온순한', '수동적', '조용한', '겸손한', '신중한', '보수적', '미온적', '차분한', '평화적'],
    tips({
      etymology: 'ad(향하여) + gress(걷다) + -ive -> 밀고 나가는',
      visual: '공격적인 자세를 취한 선수',
      soundAlike: '어그레시브 = 어그레션(공격)',
      context: 'He has an aggressive sales style.',
      synonymAntonym: '동의어: assertive, forceful, 반의어: passive',
    })
  ),
  word('Allocate', '배분하다', 5, 'verb',
    ['집중하다', '독점하다', '보유하다', '집적', '고수', '철수', '회수', '몰수', '독점', '보유'],
    tips({
      etymology: 'al(향하여) + loc(장소) + -ate -> 각 장소에 배치하다',
      visual: '예산을 여러 항목에 나누는 표',
      soundAlike: '앨로케이트 = 앨로케이션(배분)',
      context: 'We need to allocate resources wisely.',
      synonymAntonym: '동의어: distribute, assign, 반의어: hoard',
    })
  ),
  word('Alter', '변경하다', 5, 'verb',
    ['유지하다', '고수하다', '보존하다', '고정하다', '불변', '그대로', '정지', '동결', '보존', '유지'],
    tips({
      etymology: '라틴어 alter(다른)에서 유래',
      visual: '수정 펜으로 글을 고치는 손',
      soundAlike: '올터 = 얼터네이티브(대안)',
      context: 'We had to alter our plans.',
      synonymAntonym: '동의어: modify, change, 반의어: preserve',
    })
  ),
  word('Alternative', '대안', 5, 'noun',
    ['유일', '독점', '필수', '단일', '일원', '고정', '불가피', '필연', '단일안', '단독'],
    tips({
      etymology: 'alter(다른) + -native -> 다른 선택지',
      visual: '갈림길에서 두 경로를 가리키는 표지판',
      soundAlike: '얼터너티브 = 얼터네이트(대체하다)',
      context: 'We need an alternative plan.',
      synonymAntonym: '동의어: option, substitute',
    })
  ),
  word('Anticipate', '예상하다', 5, 'verb',
    ['놀라다', '의외', '무지', '무관심', '소홀', '회피', '후회', '뒤늦게', '무시', '방치'],
    tips({
      etymology: 'anti(앞) + cip(잡다) + -ate -> 앞서 잡다',
      visual: '다가올 폭풍을 바라보는 사람',
      soundAlike: '앤티시페이트 = 앤티시페이션(예상)',
      context: 'We anticipate problems ahead.',
      synonymAntonym: '동의어: expect, foresee, 반의어: be surprised',
    })
  ),
  word('Appetite', '식욕', 5, 'noun',
    ['포만', '포식', '거부감', '메스캐움', '불쾌', '혐오', '싫증', '무관심', '냉담', '의욕 상실'],
    tips({
      etymology: 'ad(향하여) + pet(추구하다) + -ite -> 추구하는 욕구',
      visual: '맛있는 음식을 앞에 두고 설레는 표정',
      soundAlike: '앱퍼타이트 = 앱퍼타이저(전채)',
      context: 'I have no appetite today.',
      synonymAntonym: '동의어: hunger, desire',
    })
  ),
  word('Applicable', '적용 가능한', 5, 'adjective',
    ['부적합', '미적용', '무관', '배제', '예외', '불가', '부적절', '타당하지 않음', '무의미', '무효'],
    tips({
      etymology: 'ap(향하여) + plic(붙이다) + -able -> 적용할 수 있는',
      visual: '틀에 맞는 퍼즐 조각',
      soundAlike: '어플리커블 = 어플라이(적용하다)',
      context: 'This rule is not applicable here.',
      synonymAntonym: '동의어: relevant, pertinent, 반의어: inapplicable',
    })
  ),
  word('Appoint', '임명하다', 5, 'verb',
    ['해임하다', '면직하다', '퇴임시키다', '거절하다', '사퇴하다', '축출하다', '파면하다', '해고하다', '배제하다', '제외하다'],
    tips({
      etymology: 'ap(향하여) + point(가리키다) -> 지목하다',
      visual: '임명장을 받는 새로운 관리자',
      soundAlike: '어포인트 = 어포인트먼트(약속)',
      context: 'The board appointed a new CEO.',
      synonymAntonym: '동의어: designate, assign, 반의어: dismiss',
    })
  ),
  word('Appreciate', '감사하다', 5, 'verb',
    ['비난하다', '경멸하다', '무시하다', '싫어하다', '비판하다', '불평하다', '냉담하다', '거절하다', '혐오하다', '푸대접하다'],
    tips({
      etymology: 'ap(향하여) + preci(가치) + -ate -> 가치를 높이 평가하다',
      visual: '선물을 받고 감사해하는 표정',
      soundAlike: '어프리시에이트 = 어프리시에이션(감사)',
      context: 'I appreciate your help.',
      synonymAntonym: '동의어: value, be grateful for, 반의어: disparage',
    })
  ),
  word('Appropriate', '적절한', 5, 'adjective',
    ['부적절한', '부적합', '어색한', '부적절', '무례한', '부당한', '어울리지 않는', '부적합', '틀린', '부정확'],
    tips({
      etymology: 'ap(향하여) + propri(자기 것) + -ate -> 자기에게 맞는',
      visual: '상황에 맞는 복장을 입은 사람',
      soundAlike: '어프로프리이트 = 어프로프리에이트(전용하다)',
      context: 'That was not an appropriate comment.',
      synonymAntonym: '동의어: suitable, fitting, 반의어: inappropriate',
    })
  ),
  word('Approximate', '대략적인', 5, 'adjective',
    ['정확한', '정밀한', '엄밀한', '정확', '실측', '정확한', '입증된', '확정', '정해진', '확실'],
    tips({
      etymology: 'ap(향하여) + proxim(가까운) + -ate -> 가까운 수치',
      visual: '대략적인 숫자를 손가락으로 보여주는 모습',
      soundAlike: '어프로크시밋 = 어프로크시메이션(근사값)',
      context: 'The approximate cost is $100.',
      synonymAntonym: '동의어: rough, estimated, 반의어: exact',
    })
  ),
  word('Arbitrary', '임의의', 5, 'adjective',
    ['체계적인', '논리적', '합리적', '규칙적', '일관된', '객관적', '공정한', '법적', '표준', '정당한'],
    tips({
      etymology: '라틴어 arbitrarius(재판관의 판단)에서 유래',
      visual: '주사위를 던지는 손 - 무작위 선택',
      soundAlike: '아비트러리 = 아비트레이트(중재하다)',
      context: 'The rules seem arbitrary.',
      synonymAntonym: '동의어: random, subjective, 반의어: systematic',
    })
  ),
  word('Aspect', '측면', 5, 'noun',
    ['전체', '통합', '핵심', '단일', '일원', '종합', '총체', '복합', '단일면', '일면'],
    tips({
      etymology: 'a(향하여) + spect(보다) -> 바라보는 방향',
      visual: '다이아몬드의 여러 면',
      soundAlike: '애스펙트 = 스펙트럼(스펙트럼)',
      context: 'We must consider every aspect.',
      synonymAntonym: '동의어: facet, dimension',
    })
  ),
  word('Assemble', '조립하다', 5, 'verb',
    ['분해하다', '해체하다', '떼어내다', '분리하다', '해산하다', '흩다', '분산하다', '철거하다', '해체', '분할'],
    tips({
      etymology: 'as(함께) + semble(같다) -> 같은 곳에 모으다',
      visual: '레고 조각을 조립하는 손',
      soundAlike: '어셈블 = 어셈블리(집회)',
      context: 'The workers assembled the furniture.',
      synonymAntonym: '동의어: put together, compile, 반의어: disassemble',
    })
  ),
  word('Assert', '주장하다', 5, 'verb',
    ['부정하다', '수긍하다', '동의하다', '포기하다', '물러서다', '낙담하다', '인정하다', '굴복하다', '거절하다', '부인하다'],
    tips({
      etymology: 'as(향하여) + sert(연결하다) -> ~라고 주장하다',
      visual: '주먹을 쥐고 단호하게 말하는 모습',
      soundAlike: '어서트 = 어서션(주장)',
      context: 'She asserted her right to speak.',
      synonymAntonym: '동의어: claim, declare, 반의어: deny',
    })
  ),
  word('Assess', '평가하다', 5, 'verb',
    ['무시하다', '무관심', '추측하다', '오판하다', '과잉평가', '저평가', '방치', '소홀', '회피', '생략'],
    tips({
      etymology: '라틴어 assidere(옆에 앉다) -> 함께 판단하다',
      visual: '평가표를 쓰는 심사관',
      soundAlike: '어세스 = 어세스먼트(평가)',
      context: 'We need to assess the damage.',
      synonymAntonym: '동의어: evaluate, appraise',
    })
  ),
  word('Assign', '배정하다', 5, 'verb',
    ['회수하다', '해제하다', '포기하다', '거절하다', '배제하다', '제외하다', '철회하다', '취소하다', '해임하다', '이탈'],
    tips({
      etymology: 'as(향하여) + sign(표시하다) -> ~에게 표시하다',
      visual: '업무 일정표에 할당을 쓰는 손',
      soundAlike: '어사인 = 어사인먼트(과제)',
      context: 'The teacher assigned homework.',
      synonymAntonym: '동의어: allocate, designate',
    })
  ),
  word('Assist', '돕다', 5, 'verb',
    ['방해하다', '방해', '저지하다', '무시하다', '거절하다', '방치하다', '해치다', '훼방하다', '저해하다', '방해'],
    tips({
      etymology: 'as(향하여) + sist(서다) -> ~옆에 서다',
      visual: '넘어질 사람을 부축하는 손',
      soundAlike: '어시스트 = 어시스턴트(조수)',
      context: 'Can you assist me with this?',
      synonymAntonym: '동의어: help, aid, 반의어: hinder',
    })
  ),
  word('Assume', '가정하다', 5, 'verb',
    ['확인하다', '입증하다', '부정하다', '의심하다', '검증하다', '검토하다', '실증', '입증', '증명', '확정'],
    tips({
      etymology: 'as(향하여) + sume(잡다) -> 자기 것으로 취하다',
      visual: '생각하는 모습 - 가설을 세우는 두뇌',
      soundAlike: '어슘 = 어솀프션(가정)',
      context: 'We assume he will come.',
      synonymAntonym: '동의어: suppose, presume',
    })
  ),
  word('Attitude', '태도', 5, 'noun',
    ['행동', '결과', '환경', '사실', '객관', '물질', '형식', '규칙', '절차', '제도'],
    tips({
      etymology: '라틴어 aptus(맞는)에서 유래 -> 마음의 자세',
      visual: '긍정적인 표정으로 대하는 사람',
      soundAlike: '애티튜드 = 알티튜드(고도)',
      context: 'Your attitude affects the outcome.',
      synonymAntonym: '동의어: mindset, disposition',
    })
  ),
  word('Attribute', '~에 귀속시키다', 5, 'verb',
    ['부정하다', '거부하다', '무시하다', '배제하다', '제외하다', '부인하다', '거절하다', '억울하다', '변명하다', '회피하다'],
    tips({
      etymology: 'at(향하여) + tribute(주다) -> ~에게 돌리다',
      visual: '시상대에서 트로피를 받는 승자',
      soundAlike: '애트리뷰트 = 컨트리뷰트(기여하다)',
      context: 'We attribute success to hard work.',
      synonymAntonym: '동의어: ascribe, credit',
    })
  ),
  word('Authority', '권한', 5, 'noun',
    ['무권한', '무력', '복종', '예속', '비종속', '독립', '자율', '무지', '무경험', '무능'],
    tips({
      etymology: '라틴어 auctor(창조자)에서 유래',
      visual: '공문서에 도장을 찍는 관료',
      soundAlike: '어쏘리티 = 어쏘리테이티브(권위 있는)',
      context: 'He has no authority to decide.',
      synonymAntonym: '동의어: power, jurisdiction',
    })
  ),
  word('Automatic', '자동의', 5, 'adjective',
    ['수동의', '손동작', '인력', '손수', '직접', '의도적', '임의', '선택적', '수작업', '매뉴얼'],
    tips({
      etymology: '그리스어 autos(자기) + matos(움직임) -> 스스로 움직이는',
      visual: '자동으로 문이 열리는 슬라이딩 도어',
      soundAlike: '오토매틱 = 오토메이션(자동화)',
      context: 'The door opens automatically.',
      synonymAntonym: '동의어: mechanical, spontaneous, 반의어: manual',
    })
  ),
  word('Barely', '겨우', 5, 'adverb',
    ['넉넉히', '충분히', '여유있게', '쉽게', '편하게', '넉넉', '풍부', '넉넉함', '과다', '여유'],
    tips({
      etymology: 'bare(벌거벗은) + -ly -> 거의 없는',
      visual: '끝자락에 겨우 매달린 사람',
      soundAlike: '베얼리 = 베어(벌거벗은)',
      context: 'We barely made it on time.',
      synonymAntonym: '동의어: scarcely, hardly',
    })
  ),
  word('Barrier', '장벽', 5, 'noun',
    ['통로', '개방', '접근', '연결', '길', '다리', '문', '출구', '개방구', '통로'],
    tips({
      etymology: 'bar(막대) + -rier -> 막는 것',
      visual: '높은 담장이나 울타리',
      soundAlike: '배리어 = 배리어 프리(장벽 없는)',
      context: 'Language can be a barrier.',
      synonymAntonym: '동의어: obstacle, blockade',
    })
  ),
  word('Behalf', '~을 위해', 5, 'noun',
    ['반대', '적대', '불리', '해악', '손해', '불이익', '비호', '무관', '독자적', '자기'],
    tips({
      etymology: 'be(~에) + half(측면) -> ~의 편에',
      visual: '대신 말하는 변호사',
      soundAlike: '비하프 = 온 비하프 오브(~을 대신하여)',
      context: 'I am speaking on behalf of the group.',
      synonymAntonym: '동의어: in place of, for',
    })
  ),
  word('Bewildered', '당황한', 5, 'adjective',
    ['냉정한', '침착한', '확신한', '명확한', '자신있는', '안정된', '평온한', '확신', '명료', '침착'],
    tips({
      etymology: 'be(~하게) + wilder(길을 잃다) + -ed -> 길을 잃은',
      visual: '갈림길에서 헤매는 표정',
      soundAlike: '비윌더드 = 비윌더먼트(당황)',
      context: 'She looked bewildered by the news.',
      synonymAntonym: '동의어: confused, perplexed, 반의어: composed',
    })
  ),
  word('Bias', '편견', 5, 'noun',
    ['공정', '객관', '중립', '균형', '정직', '공정성', '무편견', '객관성', '균형감', '타당'],
    tips({
      etymology: '프랑스어 biais(비스듬한)에서 유래',
      visual: '한쪽으로 기울어진 저울',
      soundAlike: '바이어스 = 바이어스드(편견 있는)',
      context: 'The judge showed no bias.',
      synonymAntonym: '동의어: prejudice, partiality, 반의어: impartiality',
    })
  ),
  word('Bond', '유대', 5, 'noun',
    ['이격', '분리', '단절', '적대', '불화', '갈등', '적대감', '소원', '거리감', '불신'],
    tips({
      etymology: 'bind(묶다)와 같은 어원',
      visual: '두 손을 맞잡는 모습',
      soundAlike: '본드 = 본딩(유대 형성)',
      context: 'They have a strong bond.',
      synonymAntonym: '동의어: connection, tie',
    })
  ),
  word('Boundary', '경계', 5, 'noun',
    ['중앙', '내부', '핵심', '통합', '연속', '개방', '무경계', '혼합', '융합', '일체'],
    tips({
      etymology: 'bound(제한) + -ary -> 제한하는 선',
      visual: '국경선을 표시하는 울타리',
      soundAlike: '바운더리 = 아웃 오브 바운드(경계 밖)',
      context: 'Respect boundaries in relationships.',
      synonymAntonym: '동의어: limit, border',
    })
  ),
  word('Broad', '넓은', 5, 'adjective',
    ['좁은', '협소한', '제한된', '축소', '미세', '협애', '편협', '제한적', '한정', '축소된'],
    tips({
      etymology: '고대 영어 brād에서 유래',
      visual: '넓게 펼쳐진 평원',
      soundAlike: '브로드 = 브로드캐스트(방송)',
      context: 'She has a broad knowledge.',
      synonymAntonym: '동의어: wide, extensive, 반의어: narrow',
    })
  ),
  word('Budget', '예산', 5, 'noun',
    ['초과', '적자', '탕진', '낭비', '무계획', '과다지출', '초과비용', '적자', '빚', '부채'],
    tips({
      etymology: '프랑스어 bougette(가죽주머니)에서 유래',
      visual: '예산표와 계산기',
      soundAlike: '버짓 = 버짓트(예산의)',
      context: 'We must stay within budget.',
      synonymAntonym: '동의어: financial plan, allocation',
    })
  ),
  word('Burden', '부담', 5, 'noun',
    ['축복', '이득', '편의', '쾌락', '가벼움', '자유', '해방', '경쾌', '기쁨', '유익'],
    tips({
      etymology: '고대 영어 byrthen(나르다)에서 유래',
      visual: '무거운 짐을 지고 걷는 사람',
      soundAlike: '버든 = 버든섬(부담스러운)',
      context: 'He carries a heavy burden.',
      synonymAntonym: '동의어: load, responsibility, 반의어: relief',
    })
  ),
  word('Bureaucracy', '관료제', 5, 'noun',
    ['민주', '자유', '간소화', '효율', '신속', '민첩', '직접', '개인', '민간', '자율'],
    tips({
      etymology: '프랑스어 bureau(책상) + -cracy(지배) -> 서류 지배',
      visual: '서류 더미 앞의 공무원',
      soundAlike: '뷰로크라시 = 뷰로크랫(관료)',
      context: 'Bureaucracy slows things down.',
      synonymAntonym: '동의어: red tape, administration',
    })
  ),
  word('Capable', '유능한', 5, 'adjective',
    ['무능한', '서툰', '미숙한', '부적격', '무력', '한계', '불가', '미숙', '미달', '부족'],
    tips({
      etymology: 'cap(잡다) + -able -> 할 수 있는',
      visual: '어려운 작업을 성공적으로 해내는 사람',
      soundAlike: '케이퍼블 = 케이퍼빌리티(능력)',
      context: 'She is capable of the job.',
      synonymAntonym: '동의어: competent, able, 반의어: incapable',
    })
  ),
  word('Capacity', '수용량', 5, 'noun',
    ['공백', '비어 있음', '부족', '결핍', '미달', '빈곤', '공허', '무능', '한계', '제한'],
    tips({
      etymology: 'cap(잡다) + -acity -> 담을 수 있는 양',
      visual: '가득 찬 컵과 빈 컵',
      soundAlike: '퍼캐퍼티 = 커패시터(축전기)',
      context: 'The stadium has a capacity of 50,000.',
      synonymAntonym: '동의어: volume, capability',
    })
  ),
  word('Capture', '포착하다', 5, 'verb',
    ['놓치다', '해방하다', '풀어주다', '방치하다', '유실하다', '실패하다', '놓아주다', '해제', '독립', '자유'],
    tips({
      etymology: '라틴어 capere(잡다)에서 유래',
      visual: '카메라로 순간을 담는 모습',
      soundAlike: '캡처 = 캡처드(포착된)',
      context: 'The photo captures the moment.',
      synonymAntonym: '동의어: seize, catch, 반의어: release',
    })
  ),
  word('Category', '범주', 5, 'noun',
    ['혼합', '종합', '개별', '통합', '일체', '무분류', '혼재', '복합', '다종', '융합'],
    tips({
      etymology: '그리스어 kategoria(고발)에서 유래',
      visual: '정리된 서랍과 라벨',
      soundAlike: '캐터고리 = 캐터고라이즈(분류하다)',
      context: 'Which category does it belong to?',
      synonymAntonym: '동의어: class, classification',
    })
  ),
];
