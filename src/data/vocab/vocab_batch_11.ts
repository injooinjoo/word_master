import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch11: VocabItem[] = [
  word('Convey', '전달하다', 5, 'verb',
    ['숨기다', '은폐하다', '차단하다', '억누르다', '거부하다', '무시하다', '받지 않다', '거절하다', '차단', '차단'],
    tips({
      etymology: 'con(함께) + vey(길) -> 함께 길로 나르다',
      visual: '메시지를 전달하는 메신저',
      soundAlike: '컨베이 = 컨베이어 벨트(전달기)',
      context: 'Words cannot convey my gratitude.',
      synonymAntonym: '동의어: communicate, transmit, 반의어: withhold',
    })
  ),
  word('Coordinate', '조정하다', 5, 'verb',
    ['혼란시키다', '방치하다', '분산하다', '갈등시키다', '흐트러뜨리다', '해체하다', '분리하다', '무시하다', '독단', '분열'],
    tips({
      etymology: 'co(함께) + ordin(순서) + -ate -> 함께 순서를 맞추다',
      visual: '여러 부서를 조율하는 프로젝트 매니저',
      soundAlike: '코오디네이트 = 코오디네이션(조정)',
      context: 'We need to coordinate our efforts.',
      synonymAntonym: '동의어: organize, synchronize, 반의어: 혼란',
    })
  ),
  word('Core', '핵심', 5, 'noun',
    ['표면', '주변', '외곽', '주변부', '부수', '부가', '부산물', '말단', '외부', '변두리'],
    tips({
      etymology: '라틴어 cor(심장)에서 유래',
      visual: '사과의 씨가 있는 핵심부',
      soundAlike: '코어 = 코어 밸류(핵심 가치)',
      context: 'Trust is at the core of our relationship.',
      synonymAntonym: '동의어: center, essence, 반의어: periphery',
    })
  ),
  word('Corporate', '기업의', 5, 'adjective',
    ['개인적', '사적', '국가적', '공공의', '비영리', '소규모', '가정의', '개인', '독립', '자영'],
    tips({
      etymology: '라틴어 corpus(몸)에서 유래, 법인=몸',
      visual: '고층 빌딩에 걸린 회사 로고',
      soundAlike: '코퍼레이트 = 코퍼레이션(기업)',
      context: 'Corporate culture varies by company.',
      synonymAntonym: '동의어: business, company, 반의어: personal',
    })
  ),
  word('Correspond', '일치하다', 5, 'verb',
    ['어긋나다', '불일치', '모순되다', '차이 나다', '반대하다', '배치되다', '틀리다', '불일치', '불부합', '상이'],
    tips({
      etymology: 'cor(함께) + respond(응답하다) -> 함께 맞게 응답하다',
      visual: '두 문서가 정확히 일치하는 모습',
      soundAlike: '코레스폰드 = 코레스폰던스(서신)',
      context: 'The evidence corresponds with his account.',
      synonymAntonym: '동의어: match, agree, 반의어: differ',
    })
  ),
  word('Council', '위원회', 5, 'noun',
    ['개인', '단독', '임의', '무체계', '분산', '해체', '무조직', '단독결정', '독단', '개인주의'],
    tips({
      etymology: 'con(함께) + cil(부르다) -> 함께 모여 의논하는 자리',
      visual: '원탁 회의에 모인 위원들',
      soundAlike: '카운슬 = 카운슬러(상담사)',
      context: 'The city council approved the plan.',
      synonymAntonym: '동의어: committee, board',
    })
  ),
  word('Counter', '반대하다', 5, 'verb',
    ['동의하다', '순응하다', '지지하다', '받아들이다', '복종하다', '합세하다', '찬성하다', '부합', '수용', '납득'],
    tips({
      etymology: 'contra(반대로) -> 반대 방향으로',
      visual: '반대 방향을 가리키는 화살표',
      soundAlike: '카운터 = 카운터 아규먼트(반론)',
      context: 'He countered with a different proposal.',
      synonymAntonym: '동의어: oppose, rebut, 반의어: agree',
    })
  ),
  word('Criteria', '기준', 5, 'noun',
    ['임의', '무기준', '혼란', '불규칙', '무차별', '무분별', '감정적', '주관적', '경직', '변동'],
    tips({
      etymology: '그리스어 kriterion(판단의 기준)에서 유래',
      visual: '체크리스트에 표시된 합격 기준',
      soundAlike: '크라이테리아 = 크라이테리언(기준의)',
      context: 'She met all the criteria for the job.',
      synonymAntonym: '동의어: standard, benchmark',
    })
  ),
  word('Critical', '중요한', 5, 'adjective',
    ['하찮은', '무관한', '부수적', '사소한', '경미한', '가벼운', '무의미', '형식적', '무관심', '무시'],
    tips({
      etymology: '그리스어 kritikos(판단하는)에서 유래',
      visual: '빨간 불이 켜진 긴급 경고등',
      soundAlike: '크리티컬 = 크리티시즘(비판)',
      context: 'Time is critical. We must act now.',
      synonymAntonym: '동의어: crucial, vital, 반의어: trivial',
    })
  ),
  word('Crucial', '결정적인', 5, 'adjective',
    ['부수적', '사소한', '선택적', '임의', '무관한', '경미한', '가벼운', '형식적', '부가', '부대'],
    tips({
      etymology: '라틴어 crux(십자가, 분기점)에서 유래',
      visual: '갈림길에서 결정적 순간',
      soundAlike: '크루셜 = 크루시블(도가니)',
      context: 'This meeting is crucial for our success.',
      synonymAntonym: '동의어: critical, decisive, 반의어: minor',
    })
  ),
  word('Cultivate', '배양하다', 5, 'verb',
    ['방치하다', '황폐화', '무시하다', '파괴하다', '버리다', '소홀히 하다', '해고하다', '잘라내다', '제거', '방임'],
    tips({
      etymology: '라틴어 colere(경작하다)에서 유래',
      visual: '정성스럽게 나무를 심는 농부',
      soundAlike: '컬티베이트 = 컬처(문화)',
      context: 'She cultivates relationships with clients.',
      synonymAntonym: '동의어: nurture, develop, 반의어: neglect',
    })
  ),
  word('Cumulative', '누적된', 5, 'adjective',
    ['단발적', '일회성', '일시적', '개별적', '분산된', '감소하는', '해산', '소멸', '감쇠', '단절'],
    tips({
      etymology: '라틴어 cumulare(쌓다)에서 유래',
      visual: '층층이 쌓인 서류 더미',
      soundAlike: '큐뮬러티브 = 큐뮬레이션(누적)',
      context: 'The cumulative effect was significant.',
      synonymAntonym: '동의어: accumulated, total, 반의어: discrete',
    })
  ),
  word('Currency', '통화', 5, 'noun',
    ['물물교환', '고정자산', '부동산', '채무', '부채', '무가치', '쓸모없음', '폐기', '구식', '유통중단'],
    tips({
      etymology: '라틴어 currere(흐르다) -> 유통되는 것',
      visual: '지폐와 동전이 그려진 지갑',
      soundAlike: '커런시 = 커런트(현재의)',
      context: 'The dollar is a strong currency.',
      synonymAntonym: '동의어: money, cash',
    })
  ),
  word('Curriculum', '교육과정', 5, 'noun',
    ['무계획', '즉흥', '비구조', '무체계', '분산', '해체', '무교육', '공백', '무지', '무학'],
    tips({
      etymology: '라틴어 currere(달리다) -> 달려가는 경로',
      visual: '학기별로 나열된 과목표',
      soundAlike: '커리큘럼 = 커리큘러(과정의)',
      context: 'The curriculum has been updated.',
      synonymAntonym: '동의어: syllabus, program',
    })
  ),
  word('Database', '데이터베이스', 5, 'noun',
    ['무질서', '분산', '허공', '공백', '무자료', '수기', '비체계', '산발', '혼란', '미정리'],
    tips({
      etymology: 'data(데이터) + base(기반) -> 데이터의 기반',
      visual: '표로 정리된 레코드들의 집합',
      soundAlike: '데이터베이스 = DB',
      context: 'The database stores customer information.',
      synonymAntonym: '동의어: repository, archive',
    })
  ),
  word('Decent', '적절한', 5, 'adjective',
    ['부적절한', '비열한', '천한', '추악한', '무례한', '저질', '품위없는', '야한', '부도덕', '비양심'],
    tips({
      etymology: '라틴어 decere(어울리다)에서 유래',
      visual: '단정한 옷차림의 사람',
      soundAlike: '디센트 = 데센시(체면)',
      context: 'Everyone deserves decent working conditions.',
      synonymAntonym: '동의어: adequate, respectable, 반의어: indecent',
    })
  ),
  word('Dedicate', '헌신하다', 5, 'verb',
    ['소홀히 하다', '방치하다', '거부하다', '포기하다', '무시하다', '태만', '배반', '이탈', '해이', '무관심'],
    tips({
      etymology: 'de(아래로) + dic(말하다) + -ate -> 바쳐 말하다',
      visual: '상처에 이름을 새긴 헌정 비석',
      soundAlike: '데디케이트 = 데디케이션(헌신)',
      context: 'She dedicated her life to science.',
      synonymAntonym: '동의어: devote, commit, 반의어: neglect',
    })
  ),
  word('Deficit', '적자', 5, 'noun',
    ['흑자', '잉여', '과잉', '남음', '초과', '플러스', '수지상환', '여유', '축적', '남아돔'],
    tips({
      etymology: 'de(아래로) + fic(하다) + -it -> 부족분',
      visual: '마이너스가 표시된 재정 그래프',
      soundAlike: '데피싯 = 데피시트(적자)',
      context: 'The country has a budget deficit.',
      synonymAntonym: '동의어: shortfall, shortage, 반의어: surplus',
    })
  ),
  word('Deliberate', '신중한', 5, 'adjective',
    ['충동적', '경솔한', '무계획', '우연적', '즉흥적', '성급한', '조급', '무분별', '무모', '변덕'],
    tips({
      etymology: 'de(완전히) + liber(저울) + -ate -> 저울로 재다',
      visual: '깊이 생각하는 사람의 표정',
      soundAlike: '딜리버레이트 = 딜리버레이션(숙고)',
      context: 'It was a deliberate decision.',
      synonymAntonym: '동의어: intentional, thoughtful, 반의어: accidental',
    })
  ),
  word('Democracy', '민주주의', 5, 'noun',
    ['독재', '전제', '신정', '군정', '일당제', '과두제', '억압', '독단', '폭정', '억압정치'],
    tips({
      etymology: '그리스어 demos(국민) + kratos(권력) -> 국민의 권력',
      visual: '투표함에 투표지를 넣는 시민',
      soundAlike: '디모크라시 = 데모크래틱(민주적)',
      context: 'Democracy requires active participation.',
      synonymAntonym: '동의어: republic, self-rule, 반의어: dictatorship',
    })
  ),
  word('Dense', '짙은', 5, 'adjective',
    ['희박한', '성기다', '얇은', '투명', '비어 있는', '공허', '텅 빔', '드문', '희한', '소산'],
    tips({
      etymology: '라틴어 densus(촘촘한)에서 유래',
      visual: '빽빽한 숲 속',
      soundAlike: '덴스 = 덴시티(밀도)',
      context: 'The fog was dense this morning.',
      synonymAntonym: '동의어: thick, compact, 반의어: sparse',
    })
  ),
  word('Depict', '그리다', 5, 'verb',
    ['지우다', '숨기다', '왜곡하다', '은폐하다', '흐리게 하다', '삭제', '제거', '희석', '왜곡', '은폐'],
    tips({
      etymology: 'de(완전히) + pict(그리다) -> 완전히 그리다',
      visual: '붓으로 그림을 그리는 화가',
      soundAlike: '디픽트 = 디픽션(묘사)',
      context: 'The painting depicts a rural scene.',
      synonymAntonym: '동의어: portray, represent, 반의어: obscure',
    })
  ),
  word('Deprive', '박탈하다', 5, 'verb',
    ['부여하다', '제공하다', '충족하다', '채워주다', '허용하다', '혜택', '지원', '증여', '부여', '수여'],
    tips({
      etymology: 'de(떨어져) + priv(개인) -> 개인에서 떼어내다',
      visual: '빼앗기는 물건을 잡는 손',
      soundAlike: '디프라이브 = 디프라이베이션(박탈)',
      context: 'No one should be deprived of basic rights.',
      synonymAntonym: '동의어: strip, deny, 반의어: provide',
    })
  ),
  word('Derive', '유래하다', 5, 'verb',
    ['원인', '시초', '비롯', '무관', '독립', '분리', '단절', '고유', '본래', '고유'],
    tips({
      etymology: 'de(아래로) + riv(흐르다) -> 아래로 흘러내리다',
      visual: '나무 뿌리에서 가지로 퍼지는 모습',
      soundAlike: '디라이브 = 디라이베이션(유래)',
      context: 'The word derives from Latin.',
      synonymAntonym: '동의어: originate, stem from',
    })
  ),
  word('Designate', '지정하다', 5, 'verb',
    ['해제하다', '취소하다', '철회하다', '무명', '미지정', '임의', '불명', '미결정', '보류', '해제'],
    tips({
      etymology: 'de(강조) + sign(표시) + -ate -> 표시하여 지정하다',
      visual: '지도에 표시된 지정 구역',
      soundAlike: '데지그네이트 = 데지그네이션(지정)',
      context: 'He was designated as the leader.',
      synonymAntonym: '동의어: appoint, assign, 반의어: remove',
    })
  ),
  word('Destiny', '운명', 5, 'noun',
    ['우연', '자유의지', '선택', '임의', '불확실', '변동', '우발', '비결정', '가변', '자유'],
    tips({
      etymology: '라틴어 destinare(고정하다)에서 유래',
      visual: '별이 이끄는 길을 걸어가는 실루엣',
      soundAlike: '데스티니 = 데스티네이션(목적지)',
      context: 'She believed in destiny.',
      synonymAntonym: '동의어: fate, fortune, 반의어: chance',
    })
  ),
  word('Deteriorate', '악화되다', 6, 'verb',
    ['개선되다', '회복되다', '호전되다', '나아지다', '향상되다', '정상화', '복구', '치유', '발전', '진보'],
    tips({
      etymology: '라틴어 deterior(더 나쁜) + -ate -> 더 나빠지다',
      visual: '세월로 낡아가는 건물',
      soundAlike: '디티리어레이트 = 디티리어레이션(악화)',
      context: 'His health deteriorated rapidly.',
      synonymAntonym: '동의어: worsen, decline, 반의어: improve',
    })
  ),
  word('Diversion', '전환, 기분전환', 6, 'noun',
    ['집중', '몰입', '주의', '관심', '집착', '전념', '열중', '몰두', '주시', '응시'],
    tips({
      etymology: 'di(떨어져) + vert(돌리다) + -sion -> 방향을 돌림',
      visual: '도로 우회 표지판',
      soundAlike: '디버전 = 다이버전(방향 전환)',
      context: 'The magician created a diversion to escape.',
      synonymAntonym: '동의어: distraction, detour, 반의어: focus',
    })
  ),
  word('Diagnose', '진단하다', 6, 'verb',
    ['오진', '무시', '방치', '추측', '대충', '무지', '착각', '미확인', '무분별', '무시'],
    tips({
      etymology: 'dia(통하여) + gnos(알다) -> 통해 알아내다',
      visual: '청진기를 대고 진찰하는 의사',
      soundAlike: '다이애그노즈 = 다이애그노시스(진단)',
      context: 'The doctor diagnosed the illness.',
      synonymAntonym: '동의어: identify, determine',
    })
  ),
  word('Dignity', '존엄', 6, 'noun',
    ['비열', '천함', '창피', '수치', '굴욕', '굴종', '비굴', '저속', '야비', '품위상실'],
    tips({
      etymology: '라틴어 dignus(가치 있는)에서 유래',
      visual: '곧은 자세로 서 있는 사람',
      soundAlike: '디그니티 = 인디그니티(굴욕)의 반대',
      context: 'Everyone deserves to be treated with dignity.',
      synonymAntonym: '동의어: self-respect, honor, 반의어: disgrace',
    })
  ),
  word('Dilemma', '딜레마', 6, 'noun',
    ['명확한 선택', '쉬운 결정', '단순', '단일 옵션', '확실', '의문 없음', '명쾌', '분명', '단순화', '해결'],
    tips({
      etymology: '그리스어 di(두 개) + lemma(가정) -> 두 가지 가정',
      visual: '갈림길에서 망설이는 사람',
      soundAlike: '딜레마 = 딜레마틱(딜레마의)',
      context: 'She faced a moral dilemma.',
      synonymAntonym: '동의어: quandary, predicament',
    })
  ),
  word('Diminish', '감소시키다', 6, 'verb',
    ['증가시키다', '확대하다', '강화하다', '늘리다', '확장하다', '부풀리다', '증대', '확대', '강화', '증식'],
    tips({
      etymology: 'di(작게) + min(작다) + -ish -> 더 작게 하다',
      visual: '줄어드는 원 그래프',
      soundAlike: '디미니시 = 디미니슈(감소)',
      context: 'The storm diminished in intensity.',
      synonymAntonym: '동의어: decrease, reduce, 반의어: increase',
    })
  ),
  word('Diplomacy', '외교', 6, 'noun',
    ['전쟁', '대립', '갈등', '호전', '무력', '폭력', '적대', '불화', '분쟁', '무례'],
    tips({
      etymology: '그리스어 diploma(접힌 문서) -> 외교 문서',
      visual: '악수를 나누는 국가 지도자',
      soundAlike: '디플로마시 = 디플로매틱(외교적)',
      context: 'Diplomacy prevented the conflict.',
      synonymAntonym: '동의어: tact, negotiation, 반의어: hostility',
    })
  ),
  word('Discipline', '훈련', 6, 'noun',
    ['무규율', '해이', '방탕', '무절제', '무질서', '혼란', '산만', '무계획', '부정', '방종'],
    tips({
      etymology: '라틴어 discere(배우다) + -pulus(제자) -> 가르침',
      visual: '규칙적으로 운동하는 사람',
      soundAlike: '디서플린 = 디서플린드(훈련된)',
      context: 'Discipline is key to success.',
      synonymAntonym: '동의어: training, self-control, 반의어: chaos',
    })
  ),
  word('Discourse', '담론', 6, 'noun',
    ['침묵', '무언', '단절', '무소통', '독백', '일방', '편향', '단정', '무논의', '비대화'],
    tips({
      etymology: 'dis(여기저기) + course(달리다) -> 논의가 오가다',
      visual: '토론을 벌이는 학자들',
      soundAlike: '디스코스 = 디스코스(담론)',
      context: 'Political discourse has become polarized.',
      synonymAntonym: '동의어: discussion, dialogue',
    })
  ),
  word('Discrimination', '차별', 6, 'noun',
    ['평등', '공정', '동등 대우', '포용', '포섭', '통합', '융합', '화합', '공평', '균형'],
    tips({
      etymology: 'dis(나누다) + crimin(판단) + -ation -> 구분하여 다르게 대하다',
      visual: '닫힌 문 앞에 선 소외된 사람',
      soundAlike: '디스크리미네이션 = 디스크리미네이트(차별하다)',
      context: 'Discrimination based on race is illegal.',
      synonymAntonym: '동의어: prejudice, bias, 반의어: equality',
    })
  ),
  word('Dispose', '처분하다', 6, 'verb',
    ['보관하다', '축적하다', '수집하다', '유지하다', '보존하다', '저장', '비축', '축적', '보유', '보관'],
    tips({
      etymology: 'dis(분리) + pose(놓다) -> 나누어 놓다',
      visual: '쓰레기를 분리수거함에 넣는 손',
      soundAlike: '디스포즈 = 디스포잘(처분)',
      context: 'We need to dispose of the waste properly.',
      synonymAntonym: '동의어: discard, get rid of, 반의어: keep',
    })
  ),
  word('Dispute', '분쟁', 6, 'noun',
    ['합의', '화해', '동의', '일치', '조화', '협력', '평화', '우호', '타협', '해결'],
    tips({
      etymology: 'dis(나쁘게) + pute(세다) -> 나쁘게 따지다',
      visual: '논쟁하는 두 당사자',
      soundAlike: '디스퓨트 = 디스퓨티드(논쟁의 여지 있는)',
      context: 'There is a dispute over the border.',
      synonymAntonym: '동의어: conflict, quarrel, 반의어: agreement',
    })
  ),
  word('Dissolve', '용해하다', 6, 'verb',
    ['굳히다', '응고시키다', '고체화', '응결', '결정', '고착', '고체', '응고', '침전', '침적'],
    tips({
      etymology: 'dis(분리) + solve(풀다) -> 풀어 분산시키다',
      visual: '물에 녹아가는 설탕',
      soundAlike: '디졸브 = 디졸루션(용해)',
      context: 'Salt dissolves in water.',
      synonymAntonym: '동의어: melt, liquefy, 반의어: solidify',
    })
  ),
  word('Distinct', '뚜렷한', 6, 'adjective',
    ['모호한', '흐린', '비슷한', '애매한', '불명확', '혼동', '동일', '일치', '유사', '중첩'],
    tips({
      etymology: 'dis(분리) + stinct(찌르다) -> 분리되어 찌르듯 뚜렷한',
      visual: '선명하게 구분되는 두 색상',
      soundAlike: '디스팅트 = 디스팅션(구별)',
      context: 'Each species has distinct characteristics.',
      synonymAntonym: '동의어: clear, different, 반의어: 모호함',
    })
  ),
  word('Distinction', '구별', 6, 'noun',
    ['혼동', '동일시', '융합', '통합', '일치', '동질', '무구분', '흐림', '모호', '혼재'],
    tips({
      etymology: 'dis(분리) + stinct(찌르다) + -ion -> 분리하여 구분함',
      visual: '가장 좋은 것에 매달린 금메달',
      soundAlike: '디스팅션 = 디스팅트(뚜렷한)',
      context: 'There is a distinction between wants and needs.',
      synonymAntonym: '동의어: difference, nuance',
    })
  ),
  word('Distort', '왜곡하다', 6, 'verb',
    ['정확히 전하다', '그대로 반영', '진실', '완전', '정직', '정확', '충실', '원본', '직진', '솔직'],
    tips({
      etymology: 'dis(나쁘게) + tort(꼬다) -> 나쁘게 꼬다',
      visual: '곡선 거울에 비친 왜곡된 얼굴',
      soundAlike: '디스토트 = 디스토션(왜곡)',
      context: 'The media distorted his words.',
      synonymAntonym: '동의어: twist, misrepresent, 반의어: clarify',
    })
  ),
  word('Diverse', '다양한', 6, 'adjective',
    ['단일한', '동질적', '일원화', '단조로움', '균일', '동일', '단순', '제한적', '편협', '편파'],
    tips({
      etymology: 'dis(나누다) + vers(돌다) -> 다양한 방향으로',
      visual: '여러 인종이 모인 팀',
      soundAlike: '다이버스 = 다이버시티(다양성)',
      context: 'We need a diverse workforce.',
      synonymAntonym: '동의어: varied, multicultural, 반의어: uniform',
    })
  ),
  word('Doctrine', '교의', 6, 'noun',
    ['실천', '경험', '실험', '불확실', '유연', '가변', '실용', '경험주의', '실증', '변용'],
    tips({
      etymology: '라틴어 docere(가르치다)에서 유래',
      visual: '성경과 교리서',
      soundAlike: '독트린 = 독트리너(교의자)',
      context: 'The doctrine was widely accepted.',
      synonymAntonym: '동의어: creed, belief',
    })
  ),
  word('Domestic', '국내의', 6, 'adjective',
    ['해외의', '국제적', '외국', '수입', '이국적', '외래', '해외', '타국', '국제', '세계적'],
    tips({
      etymology: '라틴어 domus(집)에서 유래',
      visual: '집 안의 가족',
      soundAlike: '도메스틱 = 도메스틱 파트너',
      context: 'Domestic violence is a serious issue.',
      synonymAntonym: '동의어: home, internal, 반의어: foreign',
    })
  ),
  word('Dominant', '지배적인', 6, 'adjective',
    ['종속적', '열세', '열등', '부수적', '미미', '보조', '보조적', '부진', '약세', '수동'],
    tips({
      etymology: '라틴어 dominari(지배하다)에서 유래',
      visual: '무대 중앙에 선 리더',
      soundAlike: '도미넌트 = 도미네이트(지배하다)',
      context: 'English is the dominant language.',
      synonymAntonym: '동의어: prevailing, foremost, 반의어: subordinate',
    })
  ),
  word('Donate', '기부하다', 6, 'verb',
    ['받다', '소비하다', '보관하다', '차지하다', '빼앗다', '구걸', '갈취', '축적', '매수', '보유'],
    tips({
      etymology: '라틴어 donare(주다)에서 유래',
      visual: '기부함에 돈을 넣는 손',
      soundAlike: '도네이트 = 도네이션(기부)',
      context: 'She donated money to the charity.',
      synonymAntonym: '동의어: give, contribute, 반의어: receive',
    })
  ),
  word('Drastic', '급격한', 6, 'adjective',
    ['점진적', '완만한', '부드러운', '점차적', '느린', '완화', '완만', '점진', '서서히', '순차'],
    tips({
      etymology: '그리스어 drastikos(강력한)에서 유래',
      visual: '급격히 떨어지는 주가 그래프',
      soundAlike: '드라스틱 = 드라스틱 첸지(급격한 변화)',
      context: 'Drastic measures were needed.',
      synonymAntonym: '동의어: severe, radical, 반의어: gradual',
    })
  ),
  word('Dwell', '거주하다', 6, 'verb',
    ['이사하다', '떠나다', '방문하다', '여행하다', '유목', '방랑', '부유', '이동', '이주', '이탈'],
    tips({
      etymology: '고대영어 dwellan(멈추다)에서 유래',
      visual: '집에서 편안히 쉬는 가족',
      soundAlike: '드웰 = 드웰링(주거)',
      context: 'They dwell in a small village.',
      synonymAntonym: '동의어: reside, live, 반의어: leave',
    })
  ),
  word('Dynamic', '역동적인', 6, 'adjective',
    ['정적인', '고정된', '움직임 없음', '둔함', '가만함', '침체', '정체', '불변', '고착', '정지'],
    tips({
      etymology: '그리스어 dynamis(힘)에서 유래',
      visual: '빠르게 움직이는 무용수',
      soundAlike: '다이내믹 = 다이내믹스(역학)',
      context: 'The market is very dynamic.',
      synonymAntonym: '동의어: active, energetic, 반의어: static',
    })
  ),
];
