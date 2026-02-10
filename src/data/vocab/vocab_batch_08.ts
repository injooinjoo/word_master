import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch08: VocabItem[] = [
  word('Emotion', '감정', 4, 'noun',
    ['이성', '논리', '사실', '규칙', '습관', '지식', '기술', '정보', '계획', '결과'],
    tips({
      etymology: 'e(밖으로) + motion(움직임) -> 밖으로 표출되는 마음의 움직임',
      visual: '웃는 얼굴과 울는 얼굴 이모티콘',
      soundAlike: '이모션 = 이모셔널(감정적인)',
      context: 'She could not hide her emotion.',
      synonymAntonym: '동의어: feeling, sentiment, 반의어: reason',
    })
  ),
  word('Employ', '고용하다', 4, 'verb',
    ['해고하다', '해임하다', '거절하다', '퇴직하다', '사임하다', '그만두다', '포기하다', '방치하다', '무시하다', '기권하다'],
    tips({
      etymology: 'em(안에) + ploy(접다) -> 일에 참여시키다',
      visual: '계약서에 서명하는 신입 직원',
      soundAlike: '엠플로이 = 엠플로이먼트(고용)',
      context: 'The company will employ 50 new workers.',
      synonymAntonym: '동의어: hire, recruit, 반의어: dismiss',
    })
  ),
  word('Enable', '가능하게 하다', 4, 'verb',
    ['방해하다', '막다', '금지하다', '차단하다', '제한하다', '억제하다', '무능하게', '불가능', '차단', '저지'],
    tips({
      etymology: 'en(~하게) + able(가능한) -> 가능하게 만들다',
      visual: '휠체어 램프로 접근 가능해진 건물',
      soundAlike: '이네이블 = 이네이블드(활성화된)',
      context: 'Technology enables us to work from anywhere.',
      synonymAntonym: '동의어: allow, permit, 반의어: disable',
    })
  ),
  word('Encounter', '마주치다', 4, 'verb',
    ['회피하다', '피하다', '놓치다', '무시하다', '소홀히', '지나치다', '도망하다', '숨다', '회피', '피신'],
    tips({
      etymology: 'en(안에) + counter(대항) -> 마주 대하다',
      visual: '길에서 우연히 만난 두 사람',
      soundAlike: '인카운터 = 인카운터 그룹(대면 회의)',
      context: 'I encountered an old friend at the mall.',
      synonymAntonym: '동의어: meet, come across, 반의어: avoid',
    })
  ),
  word('Encourage', '격려하다', 4, 'verb',
    ['좌절시키다', '낙담시키다', '비난하다', '비판하다', '무시하다', '거절하다', '두려움', '위협', '협박', '회피'],
    tips({
      etymology: 'en(~하게) + courage(용기) -> 용기를 갖게 하다',
      visual: '어깨를 두드리며 격려하는 모습',
      soundAlike: '인커리지 = 인커리지먼트(격려)',
      context: 'Parents should encourage their children',
      synonymAntonym: '동의어: motivate, support, 반의어: discourage',
    })
  ),
  word('Enormous', '거대한', 4, 'adjective',
    ['미세한', '작은', '조그마한', '미미한', '작은', '소형', '소규모', '적은', '보통', '평범한'],
    tips({
      etymology: 'e(밖으로) + norm(규모) + -ous -> 규모를 벗어난',
      visual: '작은 사람 옆에 서 있는 거대한 고래',
      soundAlike: '이노머스 = 이노머스리(거대하게)',
      context: 'The building is enormous.',
      synonymAntonym: '동의어: huge, gigantic, 반의어: tiny',
    })
  ),
  word('Ensure', '확보하다', 4, 'verb',
    ['불확실', '의심하다', '위험하다', '방치하다', '소홀히', '무시하다', '우연에', '나타게', '불안', '혼란'],
    tips({
      etymology: 'en(~하게) + sure(확실한) -> 확실하게 만들다',
      visual: '체크리스트 하나씩 확인하는 손',
      soundAlike: '인슈어 = 인슈어런스(보험)',
      context: 'We must ensure everyone is safe.',
      synonymAntonym: '동의어: guarantee, assure, 반의어: risk',
    })
  ),
  word('Entire', '전체의', 4, 'adjective',
    ['일부', '부분', '절반', '일부분', '조각', '단편', '일부만', '적은', '미미한', '발췌'],
    tips({
      etymology: '라틴어 integer(손대지 않은)에서 유래',
      visual: '완전한 원 전체',
      soundAlike: '인타이어 = 인타이어티(완전성)',
      context: 'I spent the entire day studying.',
      synonymAntonym: '동의어: whole, complete, 반의어: partial',
    })
  ),
  word('Environment', '환경', 4, 'noun',
    ['실내', '폐쇄', '격리', '고립', '단일', '단독', '인공', '가상', '추상', '내부'],
    tips({
      etymology: 'environ(둘러싸다) + -ment -> 우리를 둘러싼 것',
      visual: '나무와 숲이 있는 자연 환경',
      soundAlike: '인바이런먼트 = 인바이런먼털(환경의)',
      context: 'We must protect the environment.',
      synonymAntonym: '동의어: surroundings, ecosystem',
    })
  ),
  word('Equal', '동등한', 4, 'adjective',
    ['불균형', '차이', '우열', '상이', '비대칭', '불편', '편차', '격차', '차등', '차별'],
    tips({
      etymology: '라틴어 aequalis(같은)에서 유래',
      visual: '양팔 저울이 수평을 이룬 모습',
      soundAlike: '이퀄 = 이퀄리티(평등)',
      context: 'All people should be treated as equal.',
      synonymAntonym: '동의어: same, equivalent, 반의어: unequal',
    })
  ),
  word('Equipment', '장비', 4, 'noun',
    ['맨손', '무기', '기본', '간단', '수동', '인력', '자연', '원시', '도구 없음', '맨몸'],
    tips({
      etymology: 'equip(갖추다) + -ment -> 갖춘 것들',
      visual: '캠핑 배낭과 장비들',
      soundAlike: '이퀴프먼트 = 이퀴프(장비하다)',
      context: 'We need to buy new equipment.',
      synonymAntonym: '동의어: gear, apparatus',
    })
  ),
  word('Escape', '탈출하다', 4, 'verb',
    ['갇히다', '들어가다', '포획되다', '붙잡히다', '침입하다', '진입하다', '복귀하다', '돌아오다', '유지하다', '머무르다'],
    tips({
      etymology: 'ex(밖으로) + cape(망토) -> 망토 벗고 도망치다',
      visual: '창문으로 달아나는 사람',
      soundAlike: '이스케이프 = 이스케이프 키(ESC)',
      context: 'The prisoner managed to escape.',
      synonymAntonym: '동의어: flee, get away, 반의어: capture',
    })
  ),
  word('Essential', '필수적인', 4, 'adjective',
    ['불필요', '선택', '부가', '여분', '추가', '부수적', '부가적', '임의', '선택적', '과잉'],
    tips({
      etymology: 'essent(본질) + -ial -> 본질에 속한',
      visual: '물, 음식, 옷 등 생존 필수품',
      soundAlike: '이센셜 = 이센셜 오일(필수 오일)',
      context: 'Sleep is essential for health.',
      synonymAntonym: '동의어: necessary, vital, 반의어: optional',
    })
  ),
  word('Establish', '설립하다', 4, 'verb',
    ['해체하다', '폐쇄하다', '무너뜨리다', '해산하다', '종료하다', '폐지하다', '무효화', '취소', '제거', '파괴'],
    tips({
      etymology: 'e(강조) + stabl(서다) + -ish -> 튼튼히 세우다',
      visual: '건물에 현판을 걸어놓는 장면',
      soundAlike: '이스태블리시 = 이스태블리시먼트(설립)',
      context: 'They established a new company.',
      synonymAntonym: '동의어: found, set up, 반의어: demolish',
    })
  ),
  word('Estimate', '추정하다', 4, 'verb',
    ['정확히 측정', '확정하다', '단정하다', '무시하다', '추측 금지', '실측', '정밀', '확인', '입증', '검증'],
    tips({
      etymology: '라틴어 aestimare(값을 매기다)에서 유래',
      visual: '계산기로 대략을 짐작하는 손',
      soundAlike: '에스티메이트 = 에스티메이션(추정)',
      context: 'We estimate the cost at $500.',
      synonymAntonym: '동의어: guess, approximate, 반의어: measure',
    })
  ),
  word('Evaluate', '평가하다', 4, 'verb',
    ['무시하다', '무시', '생략', '회피', '거절', '판단 보류', '중립', '불판단', '무평가', '방치'],
    tips({
      etymology: 'e(밖으로) + value(가치) + -ate -> 가치를 내다',
      visual: '평가표를 쓰는 심사관',
      soundAlike: '이밸류에이트 = 이밸류에이션(평가)',
      context: 'Teachers evaluate students\' progress.',
      synonymAntonym: '동의어: assess, judge',
    })
  ),
  word('Eventual', '최종적인', 4, 'adjective',
    ['초기', '당장', '즉시', '임시', '과도기', '중간', '일시적', '보류', '미정', '불확실'],
    tips({
      etymology: 'event(사건) + -ual -> 사건의 결과로 오는',
      visual: '도착점을 가리키는 화살표',
      soundAlike: '이벤츄얼 = 이벤츄얼리(결국)',
      context: 'Success is the eventual outcome of hard work.',
      synonymAntonym: '동의어: ultimate, final, 반의어: immediate',
    })
  ),
  word('Evidence', '증거', 4, 'noun',
    ['추측', '의심', '혐의', '미확인', '불문서', '구두', '모호', '애매', '낭설', '소문'],
    tips({
      etymology: 'e(밖으로) + vid(보다) + -ence -> 밖으로 보이는 것',
      visual: '법정에 제시된 증거물',
      soundAlike: '에비던스 = 에비던트(명백한)',
      context: 'There is no evidence to support that claim.',
      synonymAntonym: '동의어: proof, indication',
    })
  ),
  word('Evil', '악한', 4, 'adjective',
    ['선한', '착한', '정의', '덕', '미덕', '선량', '착함', '자비', '인자', '순수'],
    tips({
      etymology: '고대 영어 yfel(나쁜)에서 유래',
      visual: '어둠 속의 실루엣',
      soundAlike: '이블 = 이블 아이(악의 시선)',
      context: 'No one is born evil.',
      synonymAntonym: '동의어: wicked, bad, 반의어: good',
    })
  ),
  word('Exact', '정확한', 4, 'adjective',
    ['대략', '근사', '애매', '모호', '부정확', '오차', '왜곡', '착오', '틀림', '맹목'],
    tips({
      etymology: 'ex(완전히) + act(하다) -> 완전히 맞게 하다',
      visual: '정확히 12시를 가리키는 시계',
      soundAlike: '이그잭트 = 이그잭트리(정확히)',
      context: 'Please give me the exact time.',
      synonymAntonym: '동의어: precise, accurate, 반의어: approximate',
    })
  ),
  word('Examine', '조사하다', 4, 'verb',
    ['무시하다', '지나치다', '넘기다', '추측하다', '오해하다', '생략', '회피', '피상적', '대충', '대략'],
    tips({
      etymology: 'ex(밖으로) + amine(저울) -> 저울로 다 달다',
      visual: '돋보기로 자세히 살펴보는 모습',
      soundAlike: '이그재민 = 이그재미네이션(조사)',
      context: 'The doctor will examine you now.',
      synonymAntonym: '동의어: inspect, scrutinize, 반의어: ignore',
    })
  ),
  word('Exceed', '초과하다', 4, 'verb',
    ['미달', '부족', '미치지 못하다', '밑돌다', '덜하다', '모자라다', '감소', '축소', '감소하다', '줄이다'],
    tips({
      etymology: 'ex(밖으로) + ceed(가다) -> 한계를 넘어가다',
      visual: '속도 제한 표지판을 넘어선 차량',
      soundAlike: '익시드 = 익시딩(초과하는)',
      context: 'Do not exceed the speed limit.',
      synonymAntonym: '동의어: surpass, go beyond, 반의어: fall short',
    })
  ),
  word('Except', '~을 제외하고', 4, 'preposition',
    ['포함하여', '함께', '덧붙여', '더하여', '통째로', '전체', '모두', '일체', '전부', '총체'],
    tips({
      etymology: 'ex(밖으로) + cept(잡다) -> 밖으로 빼다',
      visual: '원에서 한 조각만 빠진 모양',
      soundAlike: '익셉트 = 익셉션(예외)',
      context: 'Everyone came except John.',
      synonymAntonym: '동의어: except for, excluding, 반의어: including',
    })
  ),
  word('Exchange', '교환하다', 4, 'verb',
    ['유지하다', '보유', '독점', '고수', '고집', '고정', '변경 없음', '정지', '정체', '보존'],
    tips({
      etymology: 'ex(밖으로) + change(바꾸다) -> 서로 바꾸다',
      visual: '선물을 주고받는 두 사람',
      soundAlike: '익스체인지 = 익스체인지 레이트(환율)',
      context: 'Let us exchange phone numbers.',
      synonymAntonym: '동의어: swap, trade',
    })
  ),
  word('Excite', '흥분시키다', 4, 'verb',
    ['진정시키다', '차분히', '냉담하게', '지루하게', '무관심', '냉소', '무기력', '우울', '낙담', '실망'],
    tips({
      etymology: 'ex(밖으로) + cite(움직이다) -> 밖으로 끌어내다',
      visual: '손을 들어 기뻐하는 관중',
      soundAlike: '익사이트 = 익사이팅(흥미진진한)',
      context: 'The news excited everyone.',
      synonymAntonym: '동의어: thrill, stimulate, 반의어: bore',
    })
  ),
  word('Excuse', '변명', 4, 'noun',
    ['사실', '인정', '솔직', '직설', '정직', '고백', '투명', '명료', '해명', '증명'],
    tips({
      etymology: 'ex(밖으로) + cause(원인) -> 책임을 밖으로 돌리다',
      visual: '사과하며 설명하는 사람',
      soundAlike: '익스큐즈 = 익스큐즈 미(실례합니다)',
      context: 'There is no excuse for being late.',
      synonymAntonym: '동의어: apology, justification',
    })
  ),
  word('Exercise', '운동', 4, 'noun',
    ['휴식', '안정', '정지', '비활동', '게으름', '나태', '침묵', '고요', '휴면', '방치'],
    tips({
      etymology: 'ex(밖으로) +ercise(묶다) -> 묶인 것을 풀다',
      visual: '달리기하는 사람',
      soundAlike: '엑서사이즈 = 엑서사이즈 북(연습장)',
      context: 'Regular exercise keeps you healthy.',
      synonymAntonym: '동의어: workout, physical activity',
    })
  ),
  word('Exhibit', '전시하다', 4, 'verb',
    ['숨기다', '은닉하다', '정리하다', '제거하다', '봉인하다', '감추다', '덮다', '가리다', '포장', '밀봉'],
    tips({
      etymology: 'ex(밖으로) + hibit(가지다) -> 밖으로 내보이다',
      visual: '갤러리에 걸린 그림',
      soundAlike: '이그지빗 = 이그지비션(전시회)',
      context: 'The museum exhibits ancient art.',
      synonymAntonym: '동의어: display, show, 반의어: hide',
    })
  ),
  word('Exist', '존재하다', 4, 'verb',
    ['없다', '소멸하다', '사라지다', '멸망', '소실', '부재', '공허', '무', '비존재', '허무'],
    tips({
      etymology: 'ex(밖으로) + ist(서다) -> 밖으로 서 있다',
      visual: '우주에 떠 있는 지구',
      soundAlike: '이그지스트 = 이그지스턴스(존재)',
      context: 'Ghosts do not exist.',
      synonymAntonym: '동의어: be, live, 반의어: perish',
    })
  ),
  word('Expand', '확장하다', 4, 'verb',
    ['수축하다', '축소하다', '줄이다', '압축', '감소', '축소', '위축', '편축', '좁히다', '제한'],
    tips({
      etymology: 'ex(밖으로) + pand(펼치다) -> 밖으로 펼치다',
      visual: '펼쳐지는 접이식 지도',
      soundAlike: '익스팬드 = 익스팬션(확장)',
      context: 'The company plans to expand overseas.',
      synonymAntonym: '동의어: grow, extend, 반의어: shrink',
    })
  ),
  word('Expect', '기대하다', 4, 'verb',
    ['실망하다', '의외', '놀라다', '예상 밖', '혼란', '불확실', '회의', '비관', '포기', '체념'],
    tips({
      etymology: 'ex(밖으로) + pect(보다) -> 밖을 내다보다',
      visual: '선물 상자를 기다리는 아이',
      soundAlike: '익스펙트 = 익스펙테이션(기대)',
      context: 'We expect good weather tomorrow.',
      synonymAntonym: '동의어: anticipate, look forward to',
    })
  ),
  word('Expense', '비용', 4, 'noun',
    ['수입', '이익', '절약', '절감', '무료', '공짜', '보너스', '이득', '수익', '저축'],
    tips({
      etymology: 'ex(밖으로) + pense(무게) -> 지갑에서 나가는 것',
      visual: '영수증과 계산서',
      soundAlike: '익스펜스 = 익스펜시브(비싼)',
      context: 'Business travel is a major expense.',
      synonymAntonym: '동의어: cost, expenditure, 반의어: income',
    })
  ),
  word('Experiment', '실험', 4, 'noun',
    ['이론', '추측', '가설', '상상', '공상', '추상', '실무', '현장', '일상', '경험'],
    tips({
      etymology: 'ex(밖으로) + per(시도) + -ment -> 시도해 보다',
      visual: '시험관을 들고 있는 과학자',
      soundAlike: '익스페리먼트 = 익스페리멘탈(실험적)',
      context: 'The experiment was successful.',
      synonymAntonym: '동의어: test, trial',
    })
  ),
  word('Expert', '전문가', 4, 'noun',
    ['초보자', '아마추어', '외인', '비전문', '생초보', '입문자', '비숙련', '아마', '견습', '미숙'],
    tips({
      etymology: 'ex(완전히) + per(시도) + -t -> 완전히 통달한 사람',
      visual: '백서를 들고 강의하는 교수',
      soundAlike: '엑스퍼트 = 엑스퍼티즈(전문성)',
      context: 'She is an expert in languages.',
      synonymAntonym: '동의어: specialist, professional, 반의어: amateur',
    })
  ),
  word('Explain', '설명하다', 4, 'verb',
    ['혼란시키다', '오해시키다', '숨기다', '은폐하다', '모호하게', '애매하게', '생략', '무시', '축소', '왜곡'],
    tips({
      etymology: 'ex(밖으로) + plain(평평하게) -> 평평하게 펼쳐 보이다',
      visual: '칠판에 그림을 그리며 설명하는 모습',
      soundAlike: '익스플레인 = 익스플래네이션(설명)',
      context: 'Can you explain how it works?',
      synonymAntonym: '동의어: describe, clarify, 반의어: confuse',
    })
  ),
  word('Explode', '폭발하다', 4, 'verb',
    ['침묵', '조용히', '안정', '평온', '수축', '압축', '억제', '억압', '진정', '냉각'],
    tips({
      etymology: 'ex(밖으로) + plode(박수) -> 밖으로 터져 나오다',
      visual: 'fireworks가 하늘에서 터지는 모습',
      soundAlike: '익스플로드 = 익스플로전(폭발)',
      context: 'The bomb could explode at any moment.',
      synonymAntonym: '동의어: burst, blow up',
    })
  ),
  word('Explore', '탐험하다', 4, 'verb',
    ['회피하다', '피하다', '무시하다', '지나치다', '거절하다', '기권', '소극', '피함', '회피', '도망'],
    tips({
      etymology: 'ex(밖으로) + plore(울다) -> 밖으로 나가 부르다',
      visual: '등산객이 산 정상을 바라보는 모습',
      soundAlike: '익스플로어 = 익스플로레이션(탐험)',
      context: 'Scientists explore the deep ocean.',
      synonymAntonym: '동의어: discover, investigate',
    })
  ),
  word('Export', '수출하다', 4, 'verb',
    ['수입하다', '들여오다', '국내', '내수', '보관', '저장', '축적', '보유', '유지', '보존'],
    tips({
      etymology: 'ex(밖으로) + port(나르다) -> 밖으로 나르다',
      visual: '화물선에 실리는 수출 상품',
      soundAlike: '익스포트 = 익스포트 비즈니스',
      context: 'Korea exports cars to many countries.',
      synonymAntonym: '동의어: ship abroad, 반의어: import',
    })
  ),
  word('Expose', '노출하다', 4, 'verb',
    ['숨기다', '은닉하다', '덮다', '가리다', '보호하다', '차단', '밀봉', '봉인', '감추다', '은폐'],
    tips({
      etymology: 'ex(밖으로) + pose(놓다) -> 밖에 놓다',
      visual: '빛에 드러나는 필름',
      soundAlike: '익스포즈 = 익스포져(노출된)',
      context: 'Do not expose the film to light.',
      synonymAntonym: '동의어: reveal, uncover, 반의어: hide',
    })
  ),
  word('Express', '표현하다', 4, 'verb',
    ['숨기다', '억압하다', '삼가다', '참다', '암묵', '묵살', '내밀다', '은폐', '수수', '잠자'],
    tips({
      etymology: 'ex(밖으로) + press(누르다) -> 밖으로 밀어내다',
      visual: '얼굴로 감정을 표현하는 모습',
      soundAlike: '익스프레스 = 익스프레션(표현)',
      context: 'It is hard to express my feelings.',
      synonymAntonym: '동의어: convey, show, 반의어: suppress',
    })
  ),
  word('Extend', '연장하다', 4, 'verb',
    ['단축하다', '줄이다', '축소', '제한', '끊다', '종료', '단절', '중단', '회수', '되돌리다'],
    tips({
      etymology: 'ex(밖으로) + tend(늘이다) -> 밖으로 늘리다',
      visual: '늘어나는 고무줄',
      soundAlike: '익스텐드 = 익스텐션(연장)',
      context: 'Can we extend the deadline?',
      synonymAntonym: '동의어: lengthen, stretch, 반의어: shorten',
    })
  ),
  word('Extreme', '극단적인', 4, 'adjective',
    ['온건한', '절충', '중도', '보통', '평균', '일반', '적당', '균형', '절제', '완화'],
    tips({
      etymology: '라틴어 extremus(가장 바깥)에서 유래',
      visual: '절벽 끝에 서 있는 사람',
      soundAlike: '익스트림 = 익스트리미즘(극단주의)',
      context: 'Extreme weather is becoming more common.',
      synonymAntonym: '동의어: excessive, utmost, 반의어: moderate',
    })
  ),
  word('Fabric', '직물', 4, 'noun',
    ['나체', '맨몸', '금속', '플라스틱', '목재', '돌', '유리', '종이', '가죽', '비직물'],
    tips({
      etymology: '라틴어 fabrica(만들다)에서 유래',
      visual: '옷감과 천을 만지는 손',
      soundAlike: '패브릭 = 패브릭 소프트너',
      context: 'This fabric is soft and durable.',
      synonymAntonym: '동의어: cloth, material',
    })
  ),
  word('Facility', '시설', 4, 'noun',
    ['야외', '미개발', '원시', '자연', '광야', '황야', '부지', '공터', '빈터', '무시설'],
    tips({
      etymology: 'facil(쉬운) + -ity -> 쉽게 하는 것',
      visual: '체육관과 수영장이 있는 건물',
      soundAlike: '퍼실리티 = 퍼실리테이트(촉진하다)',
      context: 'The hotel has excellent facilities.',
      synonymAntonym: '동의어: amenity, equipment',
    })
  ),
  word('Factor', '요소', 4, 'noun',
    ['전체', '결과', '합계', '총체', '복합', '단일', '단독', '무관', '비관련', '배제'],
    tips({
      etymology: 'fact(하다) + -or -> 영향을 하는 것',
      visual: '퍼즐 조각 하나',
      soundAlike: '팩터 = 팩토리얼(팩토리얼)',
      context: 'Time is an important factor.',
      synonymAntonym: '동의어: element, determinant',
    })
  ),
  word('Failure', '실패', 4, 'noun',
    ['성공', '달성', '성취', '승리', '달성', '완수', '성과', '업적', '명예', '영광'],
    tips({
      etymology: 'fail(실패하다) + -ure -> 실패한 상태',
      visual: 'X 표시가 된 시험지',
      soundAlike: '페이리어 = 페이리어(실패자)',
      context: 'Failure is part of learning.',
      synonymAntonym: '동의어: defeat, fiasco, 반의어: success',
    })
  ),
  word('Faith', '신뢰', 4, 'noun',
    ['의심', '불신', '회의', '냉소', '배신', '불충', '불성실', '위반', '불신앙', '불경'],
    tips({
      etymology: '라틴어 fides(믿음)에서 유래',
      visual: '기도하는 두 손',
      soundAlike: '페이스 = 페이스풀(신뢰할 수 있는)',
      context: 'I have faith in you.',
      synonymAntonym: '동의어: trust, belief, 반의어: doubt',
    })
  ),
  word('Fame', '명성', 4, 'noun',
    ['무명', '익명', '망각', '침묵', '불명', '보통', '평범', '무지', '무관심', '냉담'],
    tips({
      etymology: '라틴어 fama(소문)에서 유래',
      visual: '팬들에게 둘러싸인 유명인',
      soundAlike: '페이름 = 페이머스(유명한)',
      context: 'She achieved fame at a young age.',
      synonymAntonym: '동의어: renown, celebrity, 반의어: obscurity',
    })
  ),
  word('Familiar', '익숙한', 4, 'adjective',
    ['낯선', '이상한', '미지', '애매', '모호', '신비', '긴장', '불편', '어색', '수줍은'],
    tips({
      etymology: 'family(가족)와 같은 어원 -> 가족처럼 아는',
      visual: '고향 거리를 걸어가는 모습',
      soundAlike: '퍼밀리어 = 퍼밀리어리티(익숙함)',
      context: 'This place looks familiar.',
      synonymAntonym: '동의어: known, accustomed, 반의어: unfamiliar',
    })
  ),
  word('Fantasy', '환상', 4, 'noun',
    ['현실', '사실', '실제', '진실', '확실', '일상', '보통', '현실', '실용', '논리'],
    tips({
      etymology: '그리스어 phantasia(상상)에서 유래',
      visual: '용과 성이 있는 환상의 세계',
      soundAlike: '판타지 = 판타스틱(환상적인)',
      context: 'Reading fantasy novels is my escape.',
      synonymAntonym: '동의어: imagination, dream, 반의어: reality',
    })
  ),
];
