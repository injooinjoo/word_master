import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch15: VocabItem[] = [
  word('Defer', '미루다', 7, 'verb',
    ['단행하다', '즉시하다', '서두르다', '강행하다', '밀쳐내다', '촉진', '재촉', '당장', '급행', '강제'],
    tips({
      etymology: 'de(아래로) + fer(나르다) -> 나중으로 옮기다',
      visual: '달력에서 날짜를 뒤로 미는 손',
      soundAlike: '디퍼 = 디퍼먼트(미루는)',
      context: 'He decided to defer his decision until next week.',
      synonymAntonym: '동의어: postpone, delay, 반의어: hasten',
    })
  ),
  word('Defy', '대항하다', 7, 'verb',
    ['복종하다', '따르다', '굴복하다', '순응하다', '항복하다', '순종', '복종', '응하다', '복종', '굴종'],
    tips({
      etymology: 'de(떨어져) + fy(믿다) -> 믿음을 거부하다',
      visual: '권위에 맞서 주먹을 쥔 시위자',
      soundAlike: '디파이 = 디파이언스(대항)',
      context: 'She defied the orders and spoke out.',
      synonymAntonym: '동의어: resist, challenge, 반의어: obey',
    })
  ),
  word('Delegate', '위임하다', 7, 'verb',
    ['독단하다', '독점하다', '보유하다', '집행하다', '독단', '집행', '직행', '독점', '보존', '고수'],
    tips({
      etymology: 'de(멀리) + leg(보내다) + -ate -> 보내 위임하다',
      visual: '임무를 동료에게 넘기는 관리자',
      soundAlike: '델리게이트 = 델리게이션(위임)',
      context: 'I will delegate this task to my assistant.',
      synonymAntonym: '동의어: assign, entrust, 반의어: retain',
    })
  ),
  word('Delineate', '묘사하다', 7, 'verb',
    ['흐리다', '모호히 하다', '숨기다', '왜곡하다', '모호', '불명확', '숨김', '왜곡', '난해', '애매'],
    tips({
      etymology: 'de(강조) + line(선) + -ate -> 선으로 그리다',
      visual: '지도 위에 경계선을 그리는 펜',
      soundAlike: '딜리니에이트 = 딜리니에이션(묘사)',
      context: 'The report delineates the scope of the project.',
      synonymAntonym: '동의어: describe, outline, 반의어: obscure',
    })
  ),
  word('Demeanor', '태도', 7, 'noun',
    ['본질', '내면', '의도', '속마음', '실체', '진심', '내재', '핵심', '정체', '실질'],
    tips({
      etymology: '고대프랑스어 demener(이끌다) -> 몸가짐',
      visual: '차분하고 품위 있는 걸음걸이',
      soundAlike: '디미너 = 디미너드(태도 있는)',
      context: 'His calm demeanor put everyone at ease.',
      synonymAntonym: '동의어: conduct, bearing, 반의어: essence',
    })
  ),
  word('Denounce', '비난하다', 7, 'verb',
    ['칭찬하다', '찬미하다', '옹호하다', '지지하다', '찬성하다', '찬양', '긍정', '옹호', '장려', '찬미'],
    tips({
      etymology: 'de(아래로) + nounce(알리다) -> 나쁘게 알리다',
      visual: '공개적으로 비난하는 연설자',
      soundAlike: '디나운스 = 디나운스먼트(비난)',
      context: 'The leader denounced the violence.',
      synonymAntonym: '동의어: condemn, criticize, 반의어: praise',
    })
  ),
  word('Deplete', '고갈시키다', 7, 'verb',
    ['채우다', '보충하다', '증가시키다', '축적하다', '풍부하게 하다', '보강', '충전', '보충', '증대', '풍부'],
    tips({
      etymology: 'de(아래로) + plete(채우다) -> 비우다',
      visual: '물이 거의 없는 저수지',
      soundAlike: '디플리트 = 디플리션(고갈)',
      context: 'Overfishing has depleted the stock.',
      synonymAntonym: '동의어: exhaust, drain, 반의어: replenish',
    })
  ),
  word('Deploy', '배치하다', 7, 'verb',
    ['철수하다', '해제하다', '회수하다', '분산하다', '해체하다', '철수', '회수', '해제', '분산', '해체'],
    tips({
      etymology: 'de(완전히) + ply(접다) -> 펼쳐 배치하다',
      visual: '병력을 전선에 배치하는 지도',
      soundAlike: '디플로이 = 디플로이먼트(배치)',
      context: 'The army deployed troops to the border.',
      synonymAntonym: '동의어: position, station, 반의어: withdraw',
    })
  ),
  word('Deprecate', '퇴보시킨다고 하다', 7, 'verb',
    ['권장하다', '촉진하다', '승인하다', '선호하다', '옹호하다', '권장', '촉진', '옹호', '긍정', '지지'],
    tips({
      etymology: 'de(반대) + prec(기도) -> 기원을 거부하다',
      visual: '구버전에 경고 표시가 뜨는 화면',
      soundAlike: '디프리케이트 = 디프리케이션(퇴보)',
      context: 'The software deprecates the old API.',
      synonymAntonym: '동의어: disparage, discourage, 반의어: recommend',
    })
  ),
  word('Destitute', '궁핍한', 7, 'adjective',
    ['부유한', '풍요한', '풍부한', '넉넉한', '여유로운', '부유', '풍부', '넉넉', '여유', '여유'],
    tips({
      etymology: 'de(떨어져) + stit(세우다) + -ute -> 버려진 상태',
      visual: '빈 옷 걸이와 빈 주머니',
      soundAlike: '디스티튜트 = 디스티튜션(궁핍)',
      context: 'They were left destitute after the war.',
      synonymAntonym: '동의어: impoverished, penniless, 반의어: affluent',
    })
  ),
  word('Deter', '억제하다', 7, 'verb',
    ['촉진하다', '장려하다', '유도하다', '선동하다', '재촉하다', '촉진', '장려', '유도', '선동', '재촉'],
    tips({
      etymology: 'de(떨어져) + ter(무서움) -> 무서워 물리치다',
      visual: '경고 표지판 앞에서 멈춘 차',
      soundAlike: '디터 = 디터런트(억제의)',
      context: 'The penalty is meant to deter crime.',
      synonymAntonym: '동의어: discourage, prevent, 반의어: encourage',
    })
  ),
  word('Deviate', '벗어나다', 7, 'verb',
    ['따르다', '준수하다', '유지하다', '수렴하다', '일치하다', '준수', '유지', '동조', '부합', '일치'],
    tips({
      etymology: 'de(떨어져) + via(길) -> 길에서 벗어나다',
      visual: '직선 도로에서 벗어난 차선',
      soundAlike: '디비에이트 = 디비에이션(편차)',
      context: 'Do not deviate from the plan.',
      synonymAntonym: '동의어: diverge, stray, 반의어: conform',
    })
  ),
  word('Devoid', '~이 없는', 7, 'adjective',
    ['가득한', '충만한', '풍부한', '넘치는', '풍요한', '충만', '풍부', '가득', '넉넉', '풍요'],
    tips({
      etymology: 'de(완전히) + void(비다) -> 완전히 비어 있는',
      visual: '텅 빈 컵',
      soundAlike: '디보이드 = 보이드(공허)',
      context: 'The desert is devoid of water.',
      synonymAntonym: '동의어: lacking, empty, 반의어: full',
    })
  ),
  word('Dexterity', '솜씨', 7, 'noun',
    ['서툼', '어색함', '미숙', '재주없음', '둔함', '미숙', '어설픔', '둔감', '비숙련', '부족'],
    tips({
      etymology: '라틴어 dexter(오른쪽) -> 오른손처럼 능숙함',
      visual: '정교한 조각을 만드는 장인의 손',
      soundAlike: '덱스테리티 = 덱스터러스(솜씨 있는)',
      context: 'She plays the piano with great dexterity.',
      synonymAntonym: '동의어: skill, adroitness, 반의어: clumsiness',
    })
  ),
  word('Dichotomy', '이분법', 7, 'noun',
    ['통합', '융합', '연속체', '공존', '조화', '통합', '융합', '연속', '일치', '화합'],
    tips({
      etymology: 'dicho(두 개로) + tomy(자르다) -> 둘로 나눔',
      visual: '양쪽으로 갈라진 Y자 나무',
      soundAlike: '다이커터미 = 다이커토마이즈(이분하다)',
      context: 'The dichotomy between good and evil.',
      synonymAntonym: '동의어: division, split, 반의어: unity',
    })
  ),
  word('Diffuse', '확산하다', 7, 'verb',
    ['집중하다', '모으다', '한정하다', '밀집하다', '수렴하다', '집중', '밀집', '한정', '수렴', '모음'],
    tips({
      etymology: 'dif(분산) + fuse(녹다) -> 사방으로 퍼지다',
      visual: '물에 퍼지는 잉크',
      soundAlike: '디퓨즈 = 디퓨전(확산)',
      context: 'The smell diffused throughout the room.',
      synonymAntonym: '동의어: spread, disperse, 반의어: concentrate',
    })
  ),
  word('Digress', '본론에서 벗어나다', 7, 'verb',
    ['집중하다', '직행하다', '본론으로', '수렴하다', '따르다', '직행', '집중', '본론', '부합', '일치'],
    tips({
      etymology: 'di(떨어져) + gress(가다) -> 길에서 벗어나다',
      visual: '화살표가 본선에서 갈라져 나가는 도표',
      soundAlike: '다이그레스 = 다이그레션(일탈)',
      context: 'Let me digress for a moment.',
      synonymAntonym: '동의어: wander, stray, 반의어: focus',
    })
  ),
  word('Diligent', '부지런한', 7, 'adjective',
    ['게으른', '태만한', '소홀한', '무성의', '나태한', '태만', '나태', '소홀', '무성의', '태만'],
    tips({
      etymology: 'di(완전히) + lig(고르다) -> 꼼꼼히 고르다',
      visual: '밤 늦게까지 책상에 앉아 공부하는 학생',
      soundAlike: '딜리전트 = 딜리전스(근면)',
      context: 'She is a diligent worker.',
      synonymAntonym: '동의어: industrious, hardworking, 반의어: lazy',
    })
  ),
  word('Discern', '간파하다', 7, 'verb',
    ['놓치다', '흐리다', '혼동하다', '무시하다', '얼버무리다', '놓침', '혼동', '무시', '흐림', '불명'],
    tips({
      etymology: 'dis(분리) + cern(체리다) -> 구분하여 보다',
      visual: '망원경으로 미세한 차이를 찾는 눈',
      soundAlike: '디서른 = 디서른먼트(판별력)',
      context: 'I could barely discern the outline in the fog.',
      synonymAntonym: '동의어: perceive, distinguish, 반의어: overlook',
    })
  ),
  word('Disclose', '공개하다', 7, 'verb',
    ['숨기다', '은폐하다', '비밀로 하다', '덮다', '잠그다', '은폐', '숨김', '비밀', '봉인', '은닉'],
    tips({
      etymology: 'dis(반대) + close(닫다) -> 열어 공개하다',
      visual: '커튼을 걷어내는 손',
      soundAlike: '디스클로즈 = 디스클로저(공개)',
      context: 'He refused to disclose the details.',
      synonymAntonym: '동의어: reveal, expose, 반의어: conceal',
    })
  ),
  word('Discord', '불화', 7, 'noun',
    ['화합', '조화', '일치', '우정', '협력', '합의', '일치', '우호', '협력', '화해'],
    tips({
      etymology: 'dis(분리) + cord(심장) -> 마음이 어긋남',
      visual: '서로 등을 돌린 두 사람',
      soundAlike: '디스코드 = 디스코던트(불협화음)',
      context: 'Their marriage was full of discord.',
      synonymAntonym: '동의어: strife, conflict, 반의어: harmony',
    })
  ),
  word('Discrepancy', '불일치', 7, 'noun',
    ['일치', '부합', '합치', '동의', '조화', '일치', '부합', '합치', '동의', '조화'],
    tips({
      etymology: 'dis(분리) + crep(딱딱) -> 서로 안 맞는 소리',
      visual: '두 서류의 숫자가 다른 부분에 빨간 표시',
      soundAlike: '디스크레펜시 = 디스크리펀트(불일치한)',
      context: 'There is a discrepancy in the accounts.',
      synonymAntonym: '동의어: inconsistency, difference, 반의어: agreement',
    })
  ),
  word('Disdain', '경멸', 7, 'noun',
    ['존경', '존중', '호의', '선망', '추앙', '존경', '존중', '호감', '경의', '애정'],
    tips({
      etymology: 'dis(아닌) + dain(가치) -> 가치를 인정하지 않다',
      visual: '코를 찌푸리며 내려다보는 표정',
      soundAlike: '디스데인 = 디스데인풀(경멸하는)',
      context: 'She looked at him with disdain.',
      synonymAntonym: '동의어: contempt, scorn, 반의어: respect',
    })
  ),
  word('Dismal', '비참한', 7, 'adjective',
    ['환한', '희망적인', '밝은', '기쁜', '유쾌한', '환희', '희망', '밝음', '즐거움', '희망'],
    tips({
      etymology: '중세라틴어 dies mali(나쁜 날)에서 유래',
      visual: '비가 쏟아지는 음침한 거리',
      soundAlike: '디스멀 = 디스멀리(비참하게)',
      context: 'The forecast was dismal.',
      synonymAntonym: '동의어: gloomy, depressing, 반의어: bright',
    })
  ),
  word('Disparity', '불균형', 7, 'noun',
    ['균형', '평등', '일치', '동등', '조화', '균형', '평등', '일치', '동등', '조화'],
    tips({
      etymology: 'dis(아닌) + par(같음) + -ity -> 같지 않음',
      visual: '한쪽은 넘치고 한쪽은 비어 있는 저울',
      soundAlike: '디스패리티 = 디스패러러스(불균형한)',
      context: 'There is a disparity in wages.',
      synonymAntonym: '동의어: imbalance, inequality, 반의어: parity',
    })
  ),
  word('Disseminate', '유포하다', 8, 'verb',
    ['숨기다', '억압하다', '차단하다', '제한하다', '봉인하다', '차단', '억압', '숨김', '제한', '봉인'],
    tips({
      etymology: 'dis(분산) + semin(씨) + -ate -> 씨를 뿌리다',
      visual: '소셜 미디어로 퍼지는 정보',
      soundAlike: '디세미네이트 = 디세미네이션(유포)',
      context: 'The organization disseminates health information.',
      synonymAntonym: '동의어: spread, distribute, 반의어: suppress',
    })
  ),
  word('Dissent', '반대', 8, 'noun',
    ['동의', '찬성', '합의', '일치', '승인', '합의', '찬성', '동의', '승인', '일치'],
    tips({
      etymology: 'dis(분리) + sent(느끼다) -> 다른 느낌',
      visual: '회의에서 반대 손을 든 사람',
      soundAlike: '디센트 = 디센터(반대자)',
      context: 'There was growing dissent within the party.',
      synonymAntonym: '동의어: disagreement, opposition, 반의어: consensus',
    })
  ),
  word('Dissolution', '해산', 8, 'noun',
    ['구성', '결성', '융합', '통합', '연합', '결성', '구성', '통합', '융합', '연합'],
    tips({
      etymology: 'dis(분리) + solut(풀다) + -ion -> 풀어 해체하다',
      visual: '해산을 선언하는 회사 로고',
      soundAlike: '디솔루션 = 디솔브(해산하다)',
      context: 'The dissolution of the partnership was amicable.',
      synonymAntonym: '동의어: disintegration, breakup, 반의어: formation',
    })
  ),
  word('Diverge', '갈라지다', 8, 'verb',
    ['합류하다', '수렴하다', '만나다', '일치하다', '수렴', '합류', '만남', '일치', '수렴', '융합'],
    tips({
      etymology: 'di(떨어져) + verg(기울다) -> 다른 방향으로 기울다',
      visual: 'Y자로 갈라지는 두 갈래 길',
      soundAlike: '다이버지 = 다이버전스(발산)',
      context: 'Their opinions diverged on the issue.',
      synonymAntonym: '동의어: split, branch off, 반의어: converge',
    })
  ),
  word('Dormant', '휴면의', 8, 'adjective',
    ['활동적인', '각성한', '활발한', '깨어 있는', '작동 중', '활동', '각성', '활발', '깨어있음', '작동'],
    tips({
      etymology: '라틴어 dormire(자다) -> 잠든 상태',
      visual: '겨울잠 자는 곰',
      soundAlike: '도어먼트 = 도어먼시(휴면)',
      context: 'The volcano has been dormant for centuries.',
      synonymAntonym: '동의어: inactive, sleeping, 반의어: active',
    })
  ),
  word('Dubious', '의심스러운', 8, 'adjective',
    ['확실한', '믿을 만한', '명백한', '절대적', '신뢰할 만한', '확실', '신뢰', '명백', '절대', '정확'],
    tips({
      etymology: '라틴어 dubius(두 경로) -> 불확실한',
      visual: '물음표가 떠 있는 표정',
      soundAlike: '듀비어스 = 듀비어티(의심스러움)',
      context: 'The claim seems dubious to me.',
      synonymAntonym: '동의어: doubtful, questionable, 반의어: certain',
    })
  ),
  word('Duplicity', '이중성', 8, 'noun',
    ['솔직함', '일관성', '정직', '순수', '단일성', '정직', '솔직', '일관', '순수', '단일'],
    tips({
      etymology: 'du(두) + plic(접다) + -ity -> 두 겹으로 된 마음',
      visual: '두 얼굴을 가진 마스크',
      soundAlike: '듀플리시티 = 듀플리시어스(이중적인)',
      context: 'His duplicity was eventually exposed.',
      synonymAntonym: '동의어: deceit, double-dealing, 반의어: honesty',
    })
  ),
  word('Eclectic', '절충주의의', 8, 'adjective',
    ['일관된', '단일한', '배타적', '협소한', '제한적', '단일', '일관', '배타', '협소', '제한'],
    tips({
      etymology: '그리스어 ek(밖에서) + leg(고르다) -> 다양한 곳에서 고르다',
      visual: '다양한 스타일이 섞인 인테리어',
      soundAlike: '이클렉틱 = 이클렉티시즘(절충주의)',
      context: 'She has eclectic taste in music.',
      synonymAntonym: '동의어: diverse, varied, 반의어: uniform',
    })
  ),
  word('Edify', '교화하다', 8, 'verb',
    ['오염하다', '타락시키다', '혼란시키다', '미혹하다', '해치다', '오염', '타락', '혼란', '미혹', '해침'],
    tips({
      etymology: '라틴어 aedificare(건물 세우다) -> 마음을 세우다',
      visual: '책을 읽으며 깨달음을 얻는 사람',
      soundAlike: '에디파이 = 에디피케이션(교화)',
      context: 'The lecture edified the audience.',
      synonymAntonym: '동의어: enlighten, instruct, 반의어: corrupt',
    })
  ),
  word('Efficacy', '효능', 8, 'noun',
    ['무효', '무력', '비효과', '부작용', '역효과', '무효', '무력', '비효과', '무능', '부족'],
    tips({
      etymology: '라틴어 efficere(이루다) + -acy -> 효과를 내는 힘',
      visual: '효과를 보여주는 임상 시험 차트',
      soundAlike: '에피커시 = 에피케이셔스(효능 있는)',
      context: 'The efficacy of the vaccine was proven.',
      synonymAntonym: '동의어: effectiveness, potency, 반의어: ineffectiveness',
    })
  ),
  word('Elicit', '끌어내다', 8, 'verb',
    ['숨기다', '억압하다', '덮다', '막다', '숨기다', '억압', '숨김', '덮음', '차단', '은폐'],
    tips({
      etymology: 'e(밖으로) + licit(허락된) -> 밖으로 끌어내다',
      visual: '질문으로 진실을 끌어내는 탐정',
      soundAlike: '일리시트 = 일리시테이션(끌어냄)',
      context: 'The question elicited a strong response.',
      synonymAntonym: '동의어: evoke, draw out, 반의어: suppress',
    })
  ),
  word('Eloquent', '웅변의', 8, 'adjective',
    ['어눌한', '말주변이 없는', '서툰', '더듬거리는', '불명료', '어눌', '서툼', '더듬', '불명료', '어색'],
    tips({
      etymology: 'e(밖으로) + loqu(말하다) + -ent -> 유창하게 말하는',
      visual: '청중을 사로잡는 연설자',
      soundAlike: '엘로퀀트 = 엘로퀀스(웅변)',
      context: 'She gave an eloquent speech.',
      synonymAntonym: '동의어: articulate, fluent, 반의어: inarticulate',
    })
  ),
  word('Emancipate', '해방하다', 8, 'verb',
    ['속박하다', '예속시키다', '억압하다', '감금하다', '굴복시키다', '속박', '예속', '억압', '감금', '굴복'],
    tips({
      etymology: 'e(밖으로) + mancip(손) + -ate -> 손에서 풀어주다',
      visual: '쇠사슬이 풀리는 손',
      soundAlike: '이맨시페이트 = 이맨시페이션(해방)',
      context: 'The slaves were emancipated in 1865.',
      synonymAntonym: '동의어: liberate, free, 반의어: enslave',
    })
  ),
  word('Embellish', '장식하다', 8, 'verb',
    ['벗기다', '간소화하다', '축소하다', '절제하다', '해체하다', '벗김', '간소화', '축소', '절제', '해체'],
    tips({
      etymology: 'em(안에) + bell(아름다움) + -ish -> 아름답게 만들다',
      visual: '케이크에 장식하는 요리사',
      soundAlike: '엠벨리시 = 엠벨리시먼트(장식)',
      context: 'He tends to embellish his stories.',
      synonymAntonym: '동의어: adorn, decorate, 반의어: simplify',
    })
  ),
  word('Eminent', '저명한', 8, 'adjective',
    ['무명의', '하찮은', '미미한', '비천한', '평범한', '무명', '하찮음', '미미', '비천', '평범'],
    tips({
      etymology: 'e(밖으로) + min(뻗다) + -ent -> 뛰어나 보이는',
      visual: '서적으로 둘러싸인 권위자',
      soundAlike: '에미넌트 = 에미넌스(저명함)',
      context: 'She is an eminent scholar in her field.',
      synonymAntonym: '동의어: distinguished, prominent, 반의어: obscure',
    })
  ),
  word('Encompass', '포함하다', 8, 'verb',
    ['제외하다', '배제하다', '빼다', '한정하다', '축소하다', '제외', '배제', '제외', '한정', '축소'],
    tips({
      etymology: 'en(안에) + compass(나침반) -> 안에 둘러싸다',
      visual: '큰 원 안에 여러 작은 원이 들어있는 도표',
      soundAlike: '인컴퍼스 = 인컴퍼싱(포함하는)',
      context: 'The plan encompasses all aspects.',
      synonymAntonym: '동의어: include, comprise, 반의어: exclude',
    })
  ),
  word('Encroach', '침해하다', 8, 'verb',
    ['물러나다', '존중하다', '배려하다', '경계하다', '멀어지다', '물러남', '존중', '배려', '경계', '후퇴'],
    tips({
      etymology: 'en(안에) + croach(갈고리) -> 갈고리로 걸치다',
      visual: '이웃 땅으로 넘어가는 울타리',
      soundAlike: '인크로치 = 인크로치먼트(침해)',
      context: 'Development encroaches on wildlife habitat.',
      synonymAntonym: '동의어: intrude, infringe, 반의어: respect',
    })
  ),
  word('Endemic', '풍토성의', 8, 'adjective',
    ['흔한', '보편적', '전세계적', '외래의', '이질적', '보편', '전세계', '외래', '이질', '범용'],
    tips({
      etymology: 'en(안에) + dem(사람) + -ic -> 특정 지역에 있는',
      visual: '한 지역에만 표시된 질병 지도',
      soundAlike: '엔데믹 = 엔데믹스(풍토병)',
      context: 'Malaria is endemic to tropical regions.',
      synonymAntonym: '동의어: native, local, 반의어: exotic',
    })
  ),
  word('Engender', '일으키다', 8, 'verb',
    ['막다', '억제하다', '종식시키다', '제거하다', '소멸시키다', '억제', '종식', '제거', '소멸', '막음'],
    tips({
      etymology: 'en(강조) + gender(생기다) -> 생기게 하다',
      visual: '불씨에서 타오르는 불꽃',
      soundAlike: '인젠더 = 인젠더드(일으킨)',
      context: 'His remarks engendered controversy.',
      synonymAntonym: '동의어: cause, generate, 반의어: prevent',
    })
  ),
  word('Enigma', '수수께끼', 8, 'noun',
    ['명백함', '해답', '투명', '단순', '평범', '명백', '해답', '투명', '단순', '평범'],
    tips({
      etymology: '그리스어 ainigma(수수께끼)에서 유래',
      visual: '물음표와 신비로운 실루엣',
      soundAlike: '이닉마 = 이닉매틱(수수께끼 같은)',
      context: 'Her motives remain an enigma.',
      synonymAntonym: '동의어: puzzle, mystery, 반의어: clarity',
    })
  ),
  word('Enmity', '적의', 8, 'noun',
    ['우정', '화해', '우호', '친선', '협력', '우정', '화해', '우호', '친선', '협력'],
    tips({
      etymology: '라틴어 inimicus(적) -> 적대감',
      visual: '서로 노려보는 두 라이벌',
      soundAlike: '엔미티 = 엔미컬(적대적인)',
      context: 'There was deep enmity between the families.',
      synonymAntonym: '동의어: hostility, animosity, 반의어: friendship',
    })
  ),
  word('Enumerate', '열거하다', 8, 'verb',
    ['생략하다', '요약하다', '종합하다', '통합하다', '하나로 묶다', '생략', '요약', '종합', '통합', '축약'],
    tips({
      etymology: 'e(밖으로) + numer(숫자) + -ate -> 숫자로 나열하다',
      visual: '1, 2, 3…으로 나열된 체크리스트',
      soundAlike: '이누머레이트 = 이누머레이션(열거)',
      context: 'She enumerated the reasons for her decision.',
      synonymAntonym: '동의어: list, itemize, 반의어: summarize',
    })
  ),
  word('Ephemeral', '덧없는', 8, 'adjective',
    ['영구적인', '지속적인', '오래가는', '변치 않는', '불멸의', '영구', '지속', '불멸', '고정', '영원'],
    tips({
      etymology: '그리스어 ephemeros(하루) -> 하루만 사는',
      visual: '몇 초 만에 사라지는 거품',
      soundAlike: '이페머럴 = 이페머럴리(덧없이)',
      context: 'Fame can be ephemeral.',
      synonymAntonym: '동의어: fleeting, transient, 반의어: permanent',
    })
  ),
  word('Equanimity', '침착', 8, 'noun',
    ['동요', '흥분', '불안', '초조', '좌절', '동요', '흥분', '불안', '초조', '좌절'],
    tips({
      etymology: 'equ(같은) + anim(마음) + -ity -> 마음이 평평함',
      visual: '폭풍 속에서도 고요한 표정',
      soundAlike: '이쿼님미티 = 이쿼님머스(침착한)',
      context: 'She faced the crisis with equanimity.',
      synonymAntonym: '동의어: composure, calmness, 반의어: agitation',
    })
  ),
  word('Equitable', '공정한', 8, 'adjective',
    ['불공정한', '편파적인', '차별적', '부당한', '불균형', '불공정', '편파', '차별', '부당', '불균형'],
    tips({
      etymology: 'equ(같은) + it(가다) + -able -> 동등하게 취급하는',
      visual: '양쪽이 같은 무게인 저울',
      soundAlike: '에퀴터블 = 에퀴티(공정)',
      context: 'We need an equitable distribution of resources.',
      synonymAntonym: '동의어: fair, impartial, 반의어: unfair',
    })
  ),
];
