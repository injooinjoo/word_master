import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch13: VocabItem[] = [
  word('Abate', '줄어들다', 7, 'verb',
    ['증가하다', '악화되다', '강화되다', '팽창하다', '확대하다', '촉진하다', '강화', '증대', '심화', '상승'],
    tips({
      etymology: 'a(향해) + bate(때리다) -> 때려서 줄이다',
      visual: '폭풍이 점점 약해지는 날씨',
      soundAlike: '어베이트 = 어베이트먼트(감소)',
      context: 'The storm finally abated.',
      synonymAntonym: '동의어: decrease, diminish, 반의어: intensify',
    })
  ),
  word('Aberration', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '정상', '일반', '표준', '정상', '정상', '규칙'],
    tips({
      etymology: 'ab(벗어나) + err(어긋나다) + -ation -> 벗어남',
      visual: '정상 범위를 벗어난 그래프 꼭대기',
      soundAlike: '애버레이션 = 애버런트(이상한)',
      context: 'His outburst was an aberration from his usual calm.',
      synonymAntonym: '동의어: deviation, anomaly, 반의어: norm',
    })
  ),
  word('Abhor', '혐오하다', 7, 'verb',
    ['사랑하다', '선호하다', '환영하다', '추구하다', '그리워하다', '애호', '흠모', '숭배', '존경', '열애'],
    tips({
      etymology: 'ab(멀리) + hor( shudder) -> 몸서리치며 멀리하다',
      visual: '혐오스러운 것을 피하는 표정',
      soundAlike: '앱호어 = 앱호런스(혐오)',
      context: 'She abhors violence in any form.',
      synonymAntonym: '동의어: detest, loathe, 반의어: adore',
    })
  ),
  word('Abject', '비참한', 7, 'adjective',
    ['고귀한', '당당한', '자존적인', '웅장한', '장엄한', '고상', '호화', '위엄', '품위', '당당'],
    tips({
      etymology: 'ab(away) + ject(던지다) -> 내던져진 상태',
      visual: '추위에 떨며 앉아 있는 거지',
      soundAlike: '앱젝트 = 앱젝션(비참함)',
      context: 'They live in abject poverty.',
      synonymAntonym: '동의어: miserable, wretched, 반의어: noble',
    })
  ),
  word('Abridge', '축약하다', 7, 'verb',
    ['확장하다', '늘리다', '덧붙이다', '보강하다', '늘리다', '확대', '연장', '부연', '전개', '확장'],
    tips({
      etymology: 'a(향해) + bridge(짧게) -> 짧게 만들다',
      visual: '원본과 축약본 책 비교',
      soundAlike: '어브리지 = 어브리지드(축약된)',
      context: 'The novel was abridged for younger readers.',
      synonymAntonym: '동의어: shorten, condense, 반의어: expand',
    })
  ),
  word('Absolve', '면죄하다', 7, 'verb',
    ['기소하다', '비난하다', '유죄 판결', '책임지우다', '과하다', '징벌', '처벌', '규탄', '유죄', '질책'],
    tips({
      etymology: 'ab(떼어) + solve(풀다) -> 죄를 풀어주다',
      visual: '고해성사 후 용서를 받는 모습',
      soundAlike: '앱절브 = 앱솔루션(면죄)',
      context: 'The court absolved him of all charges.',
      synonymAntonym: '동의어: acquit, exonerate, 반의어: convict',
    })
  ),
  word('Abstain', '절제하다', 7, 'verb',
    ['참여하다', '탐닉하다', '과용하다', '집착하다', '몰두하다', '흡수', '몰입', '탐욕', '과잉', '방종'],
    tips({
      etymology: 'abs(떨어져) + tain(잡다) -> 붙잡지 않다',
      visual: '술을 사양하는 손짓',
      soundAlike: '앱스테인 = 앱스테넌스(금욕)',
      context: 'She abstained from voting on the issue.',
      synonymAntonym: '동의어: refrain, refrain from, 반의어: indulge',
    })
  ),
  word('Accolade', '영예', 7, 'noun',
    ['비난', '경멸', '퇴짜', '불명예', '오명', '부끄러움', '모욕', '경시', '무시', '휴대'],
    tips({
      etymology: 'ad(향해) + collum(목) -> 목에 걸어주는 훈장',
      visual: '훈장을 받는 군인의 목',
      soundAlike: '애컬레이드 = 애컬레이즈(칭찬하다)',
      context: 'She received the highest accolade in her field.',
      synonymAntonym: '동의어: honor, award, 반의어: criticism',
    })
  ),
  word('Acrimony', '격렬함', 7, 'noun',
    ['온화함', '우호', '애정', '화합', '부드러움', '친절', '화해', '유순', '온정', '평화'],
    tips({
      etymology: '라틴어 acer(뜨거운) + mony -> 격한 성질',
      visual: '맹렬히 논쟁하는 두 사람',
      soundAlike: '애크리모니 = 애크리모니어스(격한)',
      context: 'The divorce was marked by acrimony.',
      synonymAntonym: '동의어: bitterness, hostility, 반의어: harmony',
    })
  ),
  word('Adamant', '완고한', 7, 'adjective',
    ['유연한', '동의하는', '수용적인', '굴복하는', '관대한', '유순', '여유', '유동', '수용', '동의'],
    tips({
      etymology: '그리스어 adamas(다이아몬드) -> 굳건함',
      visual: '다이아몬드처럼 단단한 고집',
      soundAlike: '애더먼트 = 애더먼틀리(완고하게)',
      context: 'She was adamant about leaving early.',
      synonymAntonym: '동의어: stubborn, inflexible, 반의어: flexible',
    })
  ),
  word('Adept', '능숙한', 7, 'adjective',
    ['서툰', '미숙한', '어설픈', '비능숙', '비숙련', '미숙', '서툴', '경험부족', '비숙련', '초보'],
    tips({
      etymology: 'ad(향해) + apt(맞다) -> 잘 맞는',
      visual: '숙련된 손으로 복잡한 작업을 하는 장인',
      soundAlike: '어뎁트 = 어뎁션(숙달)',
      context: 'He is adept at solving puzzles.',
      synonymAntonym: '동의어: skilled, proficient, 반의어: inept',
    })
  ),
  word('Adjunct', '부속물', 7, 'noun',
    ['핵심', '본체', '주요부', '중심', '본질', '핵심', '주요', '근본', '본원', '주체'],
    tips({
      etymology: 'ad(향해) + junct(연결) -> 붙어 있는 것',
      visual: '주 건물에 붙어 있는 부속동',
      soundAlike: '애덕트 = 애덕션(부가)',
      context: 'The course is an adjunct to the main program.',
      synonymAntonym: '동의어: addition, supplement, 반의어: core',
    })
  ),
  word('Admonish', '경고하다', 7, 'verb',
    ['축하하다', '칭찬하다', '장려하다', '승인하다', '용인하다', '긍정', '찬성', '격려', '인정', '수용'],
    tips({
      etymology: 'ad(향해) + mon(경고) + -ish -> 경고하다',
      visual: '부모가 아이에게 훈계하는 모습',
      soundAlike: '애드모니시 = 애드모니션(경고)',
      context: 'The teacher admonished the students for talking.',
      synonymAntonym: '동의어: warn, reprimand, 반의어: praise',
    })
  ),
  word('Advent', '도래', 7, 'noun',
    ['종료', '퇴장', '소멸', '사라짐', '퇴거', '이탈', '종식', '퇴색', '소실', '퇴각'],
    tips({
      etymology: 'ad(향해) + vent(오다) -> 오는 것',
      visual: '새 시대가 다가오는 일출',
      soundAlike: '애드벤트 = 애드벤트 켈린더',
      context: 'The advent of the internet changed everything.',
      synonymAntonym: '동의어: arrival, coming, 반의어: departure',
    })
  ),
  word('Adversary', '적대자', 7, 'noun',
    ['동맹', '협력자', '친구', '지지자', '동료', '동반', '파트너', '아군', '후원', '조력'],
    tips({
      etymology: 'ad(향해) + vers(돌다) + -ary -> 맞서는 사람',
      visual: '법정에서 마주보는 양측 변호인',
      soundAlike: '애드버서리 = 애드버서리얼(적대적)',
      context: 'They faced a formidable adversary.',
      synonymAntonym: '동의어: opponent, foe, 반의어: ally',
    })
  ),
  word('Aesthetic', '미적인', 7, 'adjective',
    ['추한', '비미적', '조악한', '경박한', '저속한', '비예술', '조잡', '결함', '훼손', '추함'],
    tips({
      etymology: '그리스어 aisthetikos(감각적)에서 유래',
      visual: '전시회의 조화로운 작품 배치',
      soundAlike: '이스쎄틱 = 이스쎄틱스(미학)',
      context: 'The building has great aesthetic appeal.',
      synonymAntonym: '동의어: artistic, beautiful, 반의어: ugly',
    })
  ),
  word('Affinity', '친화력', 7, 'noun',
    ['반감', '소외', '이질', '거리감', '적대', '불편', '반목', '불화', '반감', '거부'],
    tips({
      etymology: 'ad(향해) + fin(끝) -> 경계를 맞닿게 함',
      visual: '잘 맞는 퍼즐 조각들',
      soundAlike: '어피니티 = 어피니티 그룹',
      context: 'She has a natural affinity for music.',
      synonymAntonym: '동의어: attraction, kinship, 반의어: aversion',
    })
  ),
  word('Affluent', '부유한', 7, 'adjective',
    ['가난한', '빈곤한', '결핍한', '궁핍', '형편없는', '빈약', '비참', '불우', '초라', '빈곤'],
    tips({
      etymology: 'ad(향해) + flu(흐르다) + -ent -> 넘쳐흐르는',
      visual: '고급 주택가와 럭셔리 카',
      soundAlike: '애플루언트 = 애플루언스(풍요)',
      context: 'They live in an affluent neighborhood.',
      synonymAntonym: '동의어: wealthy, prosperous, 반의어: poor',
    })
  ),
  word('Aggregate', '합계하다', 7, 'verb',
    ['분산하다', '나누다', '개별화하다', '해체하다', '분리', '분해', '산재', '분할', '해체', '분산'],
    tips({
      etymology: 'ad(향해) + greg(무리) + -ate -> 한데 모으다',
      visual: '여러 데이터를 하나로 합치는 그래프',
      soundAlike: '애그리게이트 = 애그리게이션(집합)',
      context: 'The study aggregated data from all regions.',
      synonymAntonym: '동의어: combine, total, 반의어: disperse',
    })
  ),
  word('Agile', '민첩한', 7, 'adjective',
    ['둔한', '느린', '어색한', '경직된', '부자유', '우둔', '둔감', '느림', '미숙', '서툼'],
    tips({
      etymology: '라틴어 agilis(움직이기 쉬운)에서 유래',
      visual: '장애물을 빠르게 피하는 체조선수',
      soundAlike: '애질 = 애질리티(민첩성)',
      context: 'The team needs to be agile to adapt.',
      synonymAntonym: '동의어: nimble, quick, 반의어: clumsy',
    })
  ),
  word('Alchemy', '연금술', 7, 'noun',
    ['과학', '실증', '이성', '분석', '논리', '실험', '객관', '실증', '검증', '해부'],
    tips({
      etymology: '아랍어 al-kimiya에서 유래',
      visual: '연금술사가 가마에서 금을 추출하는 모습',
      soundAlike: '알케미 = 알케미컬(연금술적)',
      context: 'The project seemed like corporate alchemy.',
      synonymAntonym: '동의어: transmutation, magic, 반의어: science',
    })
  ),
  word('Allegiance', '충성', 7, 'noun',
    ['반역', '배신', '변절', '이탈', '저버림', '배반', '불충', '이심', '배신', '배신'],
    tips({
      etymology: 'ad(향해) + liege(주군) + -ance -> 주군에 대한 의무',
      visual: '국기에 손을 올려 선서하는 군인',
      soundAlike: '얼리전스 = 얼리전트(충성하는)',
      context: 'He pledged allegiance to the flag.',
      synonymAntonym: '동의어: loyalty, fidelity, 반의어: treason',
    })
  ),
  word('Alleviate', '완화하다', 7, 'verb',
    ['악화시키다', '가중시키다', '심화하다', '격화하다', '악화', '증대', '심화', '가중', '과장', '악화'],
    tips({
      etymology: 'ad(향해) + levis(가벼운) + -ate -> 가볍게 만들다',
      visual: '진통제로 고통이 줄어드는 환자',
      soundAlike: '얼리비에이트 = 얼리비에이션(완화)',
      context: 'Medicine can alleviate the symptoms.',
      synonymAntonym: '동의어: relieve, ease, 반의어: aggravate',
    })
  ),
  word('Amalgamate', '합병하다', 7, 'verb',
    ['분리하다', '해체하다', '분할하다', '나누다', '분산', '해체', '분리', '분할', '독립', '해산'],
    tips({
      etymology: '그리스어 malagma(혼합) -> 수은과 합금하다',
      visual: '두 회사가 하나로 합쳐지는 로고',
      soundAlike: '어멀거메이트 = 어멀거메이션(합병)',
      context: 'The two firms amalgamated last year.',
      synonymAntonym: '동의어: merge, combine, 반의어: separate',
    })
  ),
  word('Ambivalent', '양가적인', 7, 'adjective',
    ['단호한', '확신 있는', '일심', '결정적', '명확한', '단일', '확정', '단정', '고정', '단일'],
    tips({
      etymology: 'ambi(양쪽) + val(가치) + -ent -> 양쪽 가치를 가진',
      visual: '좌우로 흔들리는 천칭',
      soundAlike: '앰비벌런트 = 앰비벌런스(양가감정)',
      context: 'She felt ambivalent about the job offer.',
      synonymAntonym: '동의어: conflicting, mixed, 반의어: decisive',
    })
  ),
  word('Amiable', '다정한', 7, 'adjective',
    ['냉담한', '무뚝뚝한', '적대적인', '딱딱한', '불친절', '냉소', '거만', '무례', '냉혹', '불친절'],
    tips({
      etymology: '라틴어 amicus(친구)에서 유래',
      visual: '밝은 미소로 인사하는 호스트',
      soundAlike: '에이미어블 = 에이미어빌리티(호감)',
      context: 'He has an amiable personality.',
      synonymAntonym: '동의어: friendly, pleasant, 반의어: hostile',
    })
  ),
  word('Amnesty', '사면', 7, 'noun',
    ['처벌', '징벌', '기소', '유죄', '규탄', '제재', '벌', '처벌', '징계', '과벌'],
    tips({
      etymology: '그리스어 amnestia(잊음)에서 유래',
      visual: '사면 선언문을 읽는 대통령',
      soundAlike: '앰네스티 = 앰네스티 인터내셔널',
      context: 'The government granted amnesty to political prisoners.',
      synonymAntonym: '동의어: pardon, clemency, 반의어: conviction',
    })
  ),
  word('Ample', '풍부한', 7, 'adjective',
    ['부족한', '빈약한', '미미한', '궁핍한', '희소', '결핍', '빈약', '미미', '부족', '드묾'],
    tips({
      etymology: '라틴어 amplus(넓은)에서 유래',
      visual: '가득 차 있는 식탁',
      soundAlike: '앰플 = 앰플리파이(확대하다)',
      context: 'There is ample time to finish.',
      synonymAntonym: '동의어: abundant, plenty, 반의어: scarce',
    })
  ),
  word('Analogy', '비유', 7, 'noun',
    ['실체', '직설', '직접', '사실', '본문', '원문', '실사', '직서', '정확', '문자'],
    tips({
      etymology: 'ana(비례) + logos(말) -> 비례하여 말함',
      visual: 'A:B = C:D 구조의 비율 도표',
      soundAlike: '어날로지 = 어날로지컬(유비적)',
      context: 'She used an analogy to explain the concept.',
      synonymAntonym: '동의어: comparison, metaphor, 반의어: literal',
    })
  ),
  word('Anarchy', '무정부', 7, 'noun',
    ['질서', '법치', '통제', '통치', '규율', '규칙', '정부', '체제', '질서', '법'],
    tips({
      etymology: 'an(없음) + archy(통치) -> 통치가 없음',
      visual: '혼란스러운 거리와 파괴된 건물',
      soundAlike: '애너키 = 애너키즘(무정부주의)',
      context: 'The region descended into anarchy.',
      synonymAntonym: '동의어: chaos, lawlessness, 반의어: order',
    })
  ),
  word('Animosity', '적의', 7, 'noun',
    ['우호', '친화', '화해', '친절', '애정', '협력', '우정', '조화', '협력', '사랑'],
    tips({
      etymology: '라틴어 animus(영혼, 마음)에서 유래',
      visual: '서로 노려보는 두 라이벌',
      soundAlike: '애니모시티 = 애니머스(적의)',
      context: 'There was deep animosity between them.',
      synonymAntonym: '동의어: hostility, hatred, 반의어: friendship',
    })
  ),
  word('Anomaly', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '예상', '일반', '상식', '표준', '정상', '규칙'],
    tips({
      etymology: 'a(아닌) + nomal(규칙) + -y -> 규칙에서 벗어남',
      visual: '정상 범위를 벗어난 데이터 포인트',
      soundAlike: '어놀러미 = 어놀러러스(이상한)',
      context: 'The test results showed an anomaly.',
      synonymAntonym: '동의어: irregularity, deviation, 반의어: norm',
    })
  ),
  word('Antagonist', '적대자', 7, 'noun',
    ['동맹', '지지자', '동료', '협력자', '친구', '파트너', '아군', '후원', '조력', '동반'],
    tips({
      etymology: 'anti(반대) + agon(싸움) + -ist -> 맞서 싸우는 사람',
      visual: '영화에서 주인공과 대립하는 악역',
      soundAlike: '앤태거니스트 = 앤태거니즘(대립)',
      context: 'The hero faced his antagonist in the final battle.',
      synonymAntonym: '동의어: adversary, opponent, 반의어: ally',
    })
  ),
  word('Apathy', '무관심', 7, 'noun',
    ['열정', '관심', '열의', '참여', '열망', '호기심', '열중', '열정', '주의', '관심'],
    tips({
      etymology: 'a(없음) + path(감정) + -y -> 감정이 없음',
      visual: 'TV를 무표정으로 바라보는 사람',
      soundAlike: '애퍼시 = 애더틱(무관심한)',
      context: 'Voter apathy is a growing concern.',
      synonymAntonym: '동의어: indifference, lethargy, 반의어: enthusiasm',
    })
  ),
  word('Appease', '달래다', 7, 'verb',
    ['도발하다', '격분시키다', '화나게 하다', '자극하다', '분노', '역효과', '선동', '자극', '촉발', '도발'],
    tips({
      etymology: 'ad(향해) + peace(평화) -> 평화롭게 만들다',
      visual: '울던 아이를 달래는 어머니',
      soundAlike: '어피즈 = 어피즈먼트(달래기)',
      context: 'The manager tried to appease the angry customer.',
      synonymAntonym: '동의어: pacify, placate, 반의어: provoke',
    })
  ),
  word('Apprehend', '체포하다', 7, 'verb',
    ['석방하다', '놓아주다', '해제하다', '면제하다', '자유', '해방', '석방', '면제', '풀어주다', '해제'],
    tips({
      etymology: 'ad(향해) + prehend(잡다) -> 붙잡다',
      visual: '수갑을 채우는 경찰',
      soundAlike: '앱리헨드 = 앱리헨션(체포)',
      context: 'The suspect was apprehended at the border.',
      synonymAntonym: '동의어: arrest, capture, 반의어: release',
    })
  ),
  word('Aptitude', '적성', 7, 'noun',
    ['부적격', '비재능', '무능', '부적합', '무기능', '무적성', '부적합', '무솜씨', '서툼', '미숙'],
    tips({
      etymology: '라틴어 aptus(맞는) + -itude -> 적합한 성질',
      visual: '수학 문제를 쉽게 푸는 학생',
      soundAlike: '앱티튜드 = 앱티튜드 테스트',
      context: 'She showed great aptitude for languages.',
      synonymAntonym: '동의어: talent, knack, 반의어: ineptitude',
    })
  ),
  word('Archaic', '구식의', 7, 'adjective',
    ['현대적', '최신', '새로운', '현행', '신식', '최신', '현대', '신형', '최신', '현대'],
    tips({
      etymology: '그리스어 arkhe(시작) -> 오래된',
      visual: '고대 문자로 쓰인 낡은 문서',
      soundAlike: '아케이익 = 아키벌지(고문서)',
      context: 'The law uses archaic language.',
      synonymAntonym: '동의어: obsolete, ancient, 반의어: modern',
    })
  ),
  word('Ardent', '열렬한', 7, 'adjective',
    ['냉담한', '무관심한', '미지근한', '냉정', '무기력', '냉담', '냉소', '무열정', '냉혹', '무감'],
    tips({
      etymology: '라틴어 ardere(타다)에서 유래',
      visual: '열정적으로 연설하는 정치인',
      soundAlike: '아던트 = 아던시(열정)',
      context: 'He is an ardent supporter of the cause.',
      synonymAntonym: '동의어: passionate, fervent, 반의어: indifferent',
    })
  ),
  word('Arduous', '힘겨운', 7, 'adjective',
    ['쉬운', '편한', '수월한', '가벼운', '부담없는', '간편', '여유', '편안', '쉬움', '가벼움'],
    tips({
      etymology: '라틴어 arduus(높은, 가파른)에서 유래',
      visual: '가파른 산을 오르는 등산객',
      soundAlike: '아줄어스 = 아줄어스니스(고난)',
      context: 'The journey was arduous but rewarding.',
      synonymAntonym: '동의어: difficult, strenuous, 반의어: easy',
    })
  ),
  word('Articulate', '명확히 말하다', 7, 'verb',
    ['더듬거리다', '웅얼거리다', '불명료', '얼버무리다', '흐리다', '불명확', '혼란', '애매', '불명', '불분명'],
    tips({
      etymology: 'articulus(관절) -> 관절처럼 연결해 말하다',
      visual: '청중 앞에서 설득력 있게 말하는 화자',
      soundAlike: '아티큘레이트 = 아티큘레이션(발음)',
      context: 'She articulated her concerns clearly.',
      synonymAntonym: '동의어: express, enunciate, 반의어: mumble',
    })
  ),
  word('Ascend', '오르다', 7, 'verb',
    ['내려가다', '하강하다', '떨어지다', '강하', '하락', '침강', '강하', '하강', '추락', '강하'],
    tips({
      etymology: 'ad(향해) + scand(오르다) -> 위로 올라가다',
      visual: '산 정상을 향해 오르는 등산객',
      soundAlike: '어센드 = 어센션(승천)',
      context: 'They ascended the mountain at dawn.',
      synonymAntonym: '동의어: climb, rise, 반의어: descend',
    })
  ),
  word('Ascertain', '확인하다', 7, 'verb',
    ['추측하다', '가정하다', '모르다', '불명', '미확인', '추측', '추정', '가설', '의심', '불확'],
    tips({
      etymology: 'ad(향해) + cert(확실) + -ain -> 확실하게 만들다',
      visual: '사실을 확인하는 탐정',
      soundAlike: '애서테인 = 애서테인먼트(확인)',
      context: 'We need to ascertain the facts.',
      synonymAntonym: '동의어: determine, verify, 반의어: guess',
    })
  ),
  word('Aspire', '열망하다', 7, 'verb',
    ['포기하다', '체념하다', '단념하다', '포기', '포기', '단념', '체념', '포기', '포기', '단념'],
    tips({
      etymology: 'ad(향해) + spire(호흡) -> 숨을 뻗다',
      visual: '꿈을 향해 달리는 청년',
      soundAlike: '어스파이어 = 어스파이레이션(열망)',
      context: 'She aspires to become a doctor.',
      synonymAntonym: '동의어: desire, aim, 반의어: resign',
    })
  ),
  word('Astute', '예리한', 7, 'adjective',
    ['우둔한', '둔한', '어리석은', '눈치없는', '바보', '어리석음', '둔감', '미숙', '어리석음', '둔함'],
    tips({
      etymology: '라틴어 astus(교활함)에서 유래',
      visual: '세밀한 차이를 포착하는 눈',
      soundAlike: '어스튜트 = 어스튜트니스(예리함)',
      context: 'He made an astute observation.',
      synonymAntonym: '동의어: shrewd, perceptive, 반의어: dull',
    })
  ),
  word('Atrocity', '잔혹행위', 7, 'noun',
    ['자비', '인도', '선행', '자선', '착함', '친절', '은혜', '자비', '인도', '선행'],
    tips({
      etymology: '라틴어 atrox(잔인한)에서 유래',
      visual: '전쟁 범죄를 보여주는 기록 영상',
      soundAlike: '어트로시티 = 어트로시어스(잔혹한)',
      context: 'The regime committed numerous atrocities.',
      synonymAntonym: '동의어: brutality, horror, 반의어: kindness',
    })
  ),
  word('Audacious', '대담한', 7, 'adjective',
    ['소심한', '조심스러운', '수줍은', '겁많은', '소극적', '조심', '수줍음', '겁', '소극', '우유부단'],
    tips({
      etymology: '라틴어 audax(대담한)에서 유래',
      visual: '높은 곳에서 점프하는 등반가',
      soundAlike: '오데이셔스 = 오데이시티(대담)',
      context: 'It was an audacious plan.',
      synonymAntonym: '동의어: bold, daring, 반의어: timid',
    })
  ),
  word('Austere', '엄격한', 7, 'adjective',
    ['관대한', '부드러운', '사치스러운', '호화', '여유', '관대', '낙관', '화려', '부드러움', '유연'],
    tips({
      etymology: '그리스어 austeros(뜨거운, 건조한)에서 유래',
      visual: '장식 없는 흰 벽의 방',
      soundAlike: '오스티어 = 오스터리티(엄격함)',
      context: 'He led an austere life.',
      synonymAntonym: '동의어: strict, severe, 반의어: luxurious',
    })
  ),
  word('Autonomous', '자율적인', 7, 'adjective',
    ['종속적인', '의존적인', '예속된', '복종', '통제', '예속', '복종', '의존', '종속', '지배'],
    tips({
      etymology: 'auto(스스로) + nomos(법) -> 스스로 법을 정함',
      visual: '스스로 주행하는 자동차',
      soundAlike: '오토노머스 = 오토노미(자율)',
      context: 'The region became autonomous.',
      synonymAntonym: '동의어: independent, self-governing, 반의어: dependent',
    })
  ),
  word('Aversion', '혐오', 7, 'noun',
    ['선호', '사랑', '호감', '열망', '애호', '기호', '친화', '희구', '열망', '사랑'],
    tips({
      etymology: 'a(멀리) + vers(돌다) + -ion -> 돌아서 멀리함',
      visual: '거미를 피하는 사람의 표정',
      soundAlike: '어버전 = 어버트(피하다)',
      context: 'She has an aversion to spicy food.',
      synonymAntonym: '동의어: dislike, repulsion, 반의어: attraction',
    })
  ),
];
