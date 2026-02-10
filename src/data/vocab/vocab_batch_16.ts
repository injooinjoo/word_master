import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch16: VocabItem[] = [
  word('Eradicate', '근절하다', 8, 'verb',
    ['조장하다', '번식시키다', '확산하다', '유포하다', '보존하다', '양성', '증식', '융성', '번성', '유지'],
    tips({
      etymology: 'e(완전히) + radic(뿌리) + -ate -> 뿌리 뽑다',
      visual: '뿌리째 뽑히는 잡초',
      soundAlike: '이래디케이트 = 이래디케이션(근절)',
      context: 'We must eradicate poverty and disease.',
      synonymAntonym: '동의어: eliminate, abolish, 반의어: establish',
    })
  ),
  word('Erratic', '변덕스러운', 8, 'adjective',
    ['일정한', '안정적인', '규칙적인', '예측 가능한', '꾸준한', '안정', '규칙', '일관', '예측', '꾸준'],
    tips({
      etymology: '라틴어 erratus(헤매다) -> 일정하지 않은',
      visual: '심전도처럼 들쭉날쭉한 그래프',
      soundAlike: '이래틱 = 이래티컬리(변덕스럽게)',
      context: 'His erratic behavior worried everyone.',
      synonymAntonym: '동의어: unpredictable, irregular, 반의어: consistent',
    })
  ),
  word('Erudite', '박식한', 8, 'adjective',
    ['무지한', '무식한', '천박한', '얕은', '미숙한', '무지', '무식', '천박', '얕음', '미숙'],
    tips({
      etymology: 'e(떨어져) + rud(거친) + -ite -> 거친 것에서 벗어난',
      visual: '서적으로 가득한 서재의 학자',
      soundAlike: '에루다이트 = 에루디션(박식)',
      context: 'The professor is remarkably erudite.',
      synonymAntonym: '동의어: scholarly, learned, 반의어: ignorant',
    })
  ),
  word('Esoteric', '난해한', 8, 'adjective',
    ['명백한', '일반적인', '쉬운', '보편적', '공개된', '명백', '일반', '쉬움', '보편', '공개'],
    tips({
      etymology: '그리스어 esoterikos(내부의) -> 소수만 아는',
      visual: '비밀 단체의 폐쇄된 문',
      soundAlike: '이소테릭 = 이소테리시즘(난해함)',
      context: 'The lecture was too esoteric for beginners.',
      synonymAntonym: '동의어: obscure, abstruse, 반의어: common',
    })
  ),
  word('Espouse', '지지하다', 8, 'verb',
    ['반대하다', '배척하다', '거부하다', '거절하다', '저버리다', '반대', '배척', '거부', '거절', '저버림'],
    tips({
      etymology: '라틴어 sponsare(약혼하다) -> 받아들이다',
      visual: '플래카드를 들고 연설하는 후원자',
      soundAlike: '이스파우즈 = 이스파우설(지지하는)',
      context: 'She espouses environmental causes.',
      synonymAntonym: '동의어: adopt, advocate, 반의어: oppose',
    })
  ),
  word('Estrange', '소원하게 하다', 8, 'verb',
    ['화해시키다', '친하게 하다', '연결하다', '화합시키다', '가깝게 하다', '화해', '친화', '연결', '화합', '친밀'],
    tips({
      etymology: 'e(밖으로) + strange(낯선) -> 낯설게 만들다',
      visual: '등을 돌린 두 사람 사이의 거리',
      soundAlike: '이스트레인지 = 이스트레인지먼트(소원)',
      context: 'Their feud estranged them for years.',
      synonymAntonym: '동의어: alienate, distance, 반의어: reconcile',
    })
  ),
  word('Euphemism', '완곡어', 8, 'noun',
    ['직설', '노골적 표현', '비속어', '욕설', '적나라함', '직설', '노골', '비속', '적나라', '직언'],
    tips({
      etymology: 'eu(좋은) + pheme(말) + -ism -> 부드럽게 말하기',
      visual: '"잠들다"라고 쓰인 "죽다" 대신',
      soundAlike: '유페미즘 = 유페미스틱(완곡한)',
      context: '"Pass away" is a euphemism for "die."',
      synonymAntonym: '동의어: 완곡어,委婉語, 반의어: 직설',
    })
  ),
  word('Exacerbate', '악화시키다', 8, 'verb',
    ['완화하다', '나아지게 하다', '가라앉히다', '진정시키다', '호전시키다', '완화', '호전', '진정', '개선', '가라앉힘'],
    tips({
      etymology: 'ex(강조) + acerb(쓴) + -ate -> 더 쓰게 만들다',
      visual: '상처에 소금을 뿌리는 손',
      soundAlike: '이그재서베이트 = 이그재서베이션(악화)',
      context: 'The drought exacerbated the food shortage.',
      synonymAntonym: '동의어: aggravate, worsen, 반의어: alleviate',
    })
  ),
  word('Exalt', '칭송하다', 8, 'verb',
    ['비난하다', '폄하하다', '낮추다', '모욕하다', '창피주다', '비난', '폄하', '낮춤', '모욕', '창피'],
    tips({
      etymology: 'ex(위로) + alt(높다) -> 높이 올리다',
      visual: '왕관을 씌워주는 장면',
      soundAlike: '이골트 = 이골테이션(칭송)',
      context: 'The crowd exalted the champion.',
      synonymAntonym: '동의어: glorify, praise, 반의어: disparage',
    })
  ),
  word('Exemplify', '예시로 보여주다', 8, 'verb',
    ['모호히 하다', '숨기다', '역설하다', '혼란시키다', '부정하다', '모호', '숨김', '역설', '혼란', '부정'],
    tips({
      etymology: 'ex(밖으로) + exempl(예시) + -ify -> 예시로 나타내다',
      visual: '교과서의 구체적 사례 박스',
      soundAlike: '이젬플리파이 = 이젬플리피케이션(예시)',
      context: 'Her work exemplifies excellence.',
      synonymAntonym: '동의어: illustrate, demonstrate, 반의어: obscure',
    })
  ),
  word('Exonerate', '무죄로 하다', 8, 'verb',
    ['유죄 판결하다', '고소하다', '비난하다', '책임지우다', '혐의 씌우다', '유죄', '고소', '비난', '책임', '혐의'],
    tips({
      etymology: 'ex(벗어나) + oner(무게) + -ate -> 짐을 벗기다',
      visual: '쇠사슬이 풀리는 죄수',
      soundAlike: '이곤네레이트 = 이곤네레이션(무죄)',
      context: 'New evidence exonerated the defendant.',
      synonymAntonym: '동의어: acquit, absolve, 반의어: convict',
    })
  ),
  word('Expedite', '촉진하다', 8, 'verb',
    ['지연시키다', '방해하다', '늦추다', '막다', '연기하다', '지연', '방해', '늦춤', '막음', '연기'],
    tips({
      etymology: 'ex(밖으로) + ped(발) + -ite -> 발을 빼다(빠르게)',
      visual: '빨간 긴급 스티커가 붙은 서류',
      soundAlike: '엑스피다이트 = 엑스피디션(촉진)',
      context: 'We need to expedite the approval process.',
      synonymAntonym: '동의어: hasten, accelerate, 반의어: delay',
    })
  ),
  word('Explicit', '명시적인', 8, 'adjective',
    ['암시적인', '모호한', '숨겨진', '애매한', '암묵적', '암시', '모호', '숨김', '애매', '암묵'],
    tips({
      etymology: 'ex(밖으로) + plic(접다) + -it -> 펼쳐 놓은',
      visual: '모든 조건이 체크리스트로 나열된 계약서',
      soundAlike: '익스플리시트 = 익스플리시트리(명시적으로)',
      context: 'Please give explicit instructions.',
      synonymAntonym: '동의어: clear, direct, 반의어: implicit',
    })
  ),
  word('Extol', '칭찬하다', 8, 'verb',
    ['비난하다', '폄하하다', '경멸하다', '매도하다', '모욕하다', '비난', '폄하', '경멸', '매도', '모욕'],
    tips({
      etymology: 'ex(위로) + tol(들다) -> 높이 들어 올리다',
      visual: '시상대 위에 올라가는 우승자',
      soundAlike: '익스톨 = 익스톨먼트(칭찬)',
      context: 'Critics extolled the film.',
      synonymAntonym: '동의어: praise, laud, 반의어: denounce',
    })
  ),
  word('Extraneous', '무관한', 8, 'adjective',
    ['관련된', '핵심적인', '필수적인', '근본적인', '직접적인', '관련', '핵심', '필수', '근본', '직접'],
    tips({
      etymology: 'extra(밖에) + neous -> 바깥의, 관계없는',
      visual: '본문과 동떨어진 여백의 낙서',
      soundAlike: '익스트레니어스 = 익스트레니어슬리(무관하게)',
      context: 'Remove all extraneous details.',
      synonymAntonym: '동의어: irrelevant, unnecessary, 반의어: relevant',
    })
  ),
  word('Extricate', '빠져나오게 하다', 8, 'verb',
    ['얽어매다', '가두다', '덮치다', '끼우다', '빠뜨리다', '얽음', '가둠', '덮침', '끼움', '빠뜨림'],
    tips({
      etymology: 'ex(밖으로) + tric(복잡) + -ate -> 복잡에서 빼내다',
      visual: '덩굴에서 발을 빼는 등산가',
      soundAlike: '익스트리케이트 = 익스트리케이션(구출)',
      context: 'He extricated himself from the contract.',
      synonymAntonym: '동의어: disentangle, free, 반의어: entangle',
    })
  ),
  word('Fabricate', '조작하다', 8, 'verb',
    ['정직히 말하다', '보존하다', '참되게 하다', '검증하다', '실사하다', '정직', '보존', '참됨', '검증', '실사'],
    tips({
      etymology: '라틴어 fabricare(만들다) -> 꾸며 만들다',
      visual: '가짜 증거를 만드는 손',
      soundAlike: '패브리케이트 = 패브리케이션(조작)',
      context: 'The witness fabricated the story.',
      synonymAntonym: '동의어: invent, forge, 반의어: verify',
    })
  ),
  word('Facetious', '농담하는', 8, 'adjective',
    ['진지한', '엄숙한', '진솔한', '성실한', '진지', '엄숙', '진솔', '성실', '경건', '엄격'],
    tips({
      etymology: '라틴어 facetia(재치) -> 농담하는',
      visual: '윙크하며 농담하는 표정',
      soundAlike: '퍼시셔스 = 퍼시어스니스(농담)',
      context: 'He was being facetious, not serious.',
      synonymAntonym: '동의어: joking, flippant, 반의어: serious',
    })
  ),
  word('Fallacious', '허위의', 8, 'adjective',
    ['옳은', '정확한', '합리적인', '타당한', '검증된', '정확', '합리', '타당', '검증', '진실'],
    tips({
      etymology: 'fallax(속이다) + -ious -> 속이는',
      visual: '틀린 결론으로 이어지는 깨진 논리 다리',
      soundAlike: '펄레이셔스 = 펄러시(오류)',
      context: 'The argument was fallacious.',
      synonymAntonym: '동의어: false, misleading, 반의어: valid',
    })
  ),
  word('Fastidious', '까다로운', 8, 'adjective',
    ['무관심한', '대충하는', '무성의한', '냉담한', '구김 살 없는', '무관심', '대충', '무성의', '냉담', '구김'],
    tips({
      etymology: '라틴어 fastidium(역겨움) -> 까다로움',
      visual: '먼지를 털며 정리하는 완벽주의자',
      soundAlike: '패스티디어스 = 패스티디어스니스(까다로움)',
      context: 'He is fastidious about cleanliness.',
      synonymAntonym: '동의어: meticulous, fussy, 반의어: casual',
    })
  ),
  word('Fervent', '열렬한', 8, 'adjective',
    ['냉담한', '무관심한', '미지근한', '덜렁대는', '무성의한', '냉담', '무관심', '미지근', '덜렁', '무성의'],
    tips({
      etymology: '라틴어 fervere(끓다) -> 뜨거운',
      visual: '뜨거운 불꽃처럼 타오르는 열정',
      soundAlike: '퍼번트 = 퍼번시(열렬)',
      context: 'She is a fervent supporter of the cause.',
      synonymAntonym: '동의어: passionate, ardent, 반의어: apathetic',
    })
  ),
  word('Flagrant', '극악한', 8, 'adjective',
    ['은밀한', '미묘한', '사소한', '숨겨진', '완곡한', '은밀', '미묘', '사소', '숨김', '완곡'],
    tips({
      etymology: '라틴어 flagrare(타다) -> 노골적으로 타다',
      visual: '밤하늘에 퍼지는 연기와 불꽃',
      soundAlike: '플레이그런트 = 플레이그런시(극악)',
      context: 'It was a flagrant violation of the rules.',
      synonymAntonym: '동의어: blatant, egregious, 반의어: subtle',
    })
  ),
  word('Fledgling', '초보의', 8, 'adjective',
    ['숙련된', '베테랑의', '노련한', '숙달된', '전문적인', '숙련', '베테랑', '노련', '숙달', '전문'],
    tips({
      etymology: 'fledge(날개) + -ling -> 깃털 막 난 작은 새',
      visual: '둥지에서 날개 펼치는 아기 새',
      soundAlike: '플렛즐링 = 플렛지(초보)',
      context: 'The fledgling company is growing fast.',
      synonymAntonym: '동의어: inexperienced, novice, 반의어: experienced',
    })
  ),
  word('Flourish', '번창하다', 8, 'verb',
    ['쇠퇴하다', '몰락하다', '시들다', '퇴보하다', '쇠락하다', '쇠퇴', '몰락', '시듦', '퇴보', '쇠락'],
    tips({
      etymology: '라틴어 florere(꽃피다) -> 꽃처럼 번성하다',
      visual: '햇빛 받으며 푸르게 자라는 식물',
      soundAlike: '플러리시 = 플러리싱(번창)',
      context: 'The business flourished under new management.',
      synonymAntonym: '동의어: thrive, prosper, 반의어: decline',
    })
  ),
  word('Foment', '선동하다', 8, 'verb',
    ['진정시키다', '가라앉히다', '억제하다', '냉각시키다', '완화하다', '진정', '가라앉힘', '억제', '냉각', '완화'],
    tips({
      etymology: '라틴어 fomentum(찜질) -> 열을 올리다',
      visual: '군중을 선동하는 연설자',
      soundAlike: '포멘트 = 포멘테이션(선동)',
      context: 'Foreign agents sought to foment unrest.',
      synonymAntonym: '동의어: incite, stir up, 반의어: quell',
    })
  ),
  word('Forestall', '선수치다', 8, 'verb',
    ['방관하다', '방치하다', '뒤따르다', '뒤처지다', '미처 못하다', '방관', '방치', '뒤따름', '뒤처짐', '미처'],
    tips({
      etymology: 'fore(앞) + stall(막다) -> 앞서 막다',
      visual: '주문 전에 재고를 채우는 창고',
      soundAlike: '포어스톨 = 포어스톨먼트(선수)',
      context: 'We forestalled the crisis with early action.',
      synonymAntonym: '동의어: prevent, anticipate, 반의어: allow',
    })
  ),
  word('Formidable', '강적인', 8, 'adjective',
    ['약한', '무기력한', '하찮은', '쉬운', '무해한', '약함', '무기력', '하찮음', '쉬움', '무해'],
    tips({
      etymology: '라틴어 formidare(두려워하다) -> 두려운',
      visual: '높은 성벽과 깃발이 펄럭이는 요새',
      soundAlike: '포어미더블 = 포어미더블리(강적으로)',
      context: 'She is a formidable opponent.',
      synonymAntonym: '동의어: daunting, fearsome, 반의어: weak',
    })
  ),
  word('Fortify', '강화하다', 8, 'verb',
    ['약화하다', '약화시키다', '허물다', '무너뜨리다', '해체하다', '약화', '허물', '무너뜨림', '해체', '약화시킴'],
    tips({
      etymology: 'fortis(강한) + -ify -> 강하게 만들다',
      visual: '벽을 쌓아 성을 보강하는 장면',
      soundAlike: '포어티파이 = 포어티피케이션(강화)',
      context: 'Vitamins fortify the immune system.',
      synonymAntonym: '동의어: strengthen, reinforce, 반의어: weaken',
    })
  ),
  word('Frivolous', '경박한', 8, 'adjective',
    ['진지한', '중대한', '신중한', '깊은', '근본적인', '진지', '중대', '신중', '깊음', '근본'],
    tips({
      etymology: '라틴어 frivolus(쓸모없는) -> 가벼운',
      visual: '부유하게 헤엄치는 물거품',
      soundAlike: '프리블러스 = 프리블리티(경박)',
      context: 'The lawsuit was deemed frivolous.',
      synonymAntonym: '동의어: trivial, silly, 반의어: serious',
    })
  ),
  word('Frugal', '검소한', 8, 'adjective',
    ['낭비하는', '사치스러운', '마구 쓰는', '낭비적', '호화로운', '낭비', '사치', '마구쓰기', '낭비적', '호화'],
    tips({
      etymology: '라틴어 frugi(과실의) -> 알뜰한',
      visual: '저축통장에 모이는 동전',
      soundAlike: '프루걸 = 프루걸리티(검소)',
      context: 'His frugal habits helped him save.',
      synonymAntonym: '동의어: thrifty, economical, 반의어: wasteful',
    })
  ),
  word('Futile', '헛된', 8, 'adjective',
    ['효과적인', '성공적인', '의미 있는', '가치 있는', '결과적인', '효과', '성공', '의미', '가치', '결과'],
    tips({
      etymology: '라틴어 futilis(쏟는) -> 헛되이 흘러버림',
      visual: '바다에 물 붓는 시도',
      soundAlike: '퓨타일 = 퓨틸리티(헛됨)',
      context: 'All efforts proved futile.',
      synonymAntonym: '동의어: useless, vain, 반의어: fruitful',
    })
  ),
  word('Galvanize', '자극하다', 8, 'verb',
    ['무관심하게 하다', '봉쇄하다', '억제하다', '냉각시키다', '가라앉히다', '무관심', '봉쇄', '억제', '냉각', '가라앉힘'],
    tips({
      etymology: '갈바니(전기학자) + -ize -> 전기로 자극하다',
      visual: '전기 충격으로 깨어나는 사람',
      soundAlike: '갤버나이즈 = 갤버나이제이션(자극)',
      context: 'The speech galvanized the crowd.',
      synonymAntonym: '동의어: stimulate, energize, 반의어: dampen',
    })
  ),
  word('Garner', '쌓다', 8, 'verb',
    ['흩다', '분산하다', '잃다', '버리다', '해체하다', '흩음', '분산', '상실', '버림', '해체'],
    tips({
      etymology: '라틴어 granarium(곡물창고) -> 모아 두다',
      visual: '수확한 곡식을 창고에 쌓는 농부',
      soundAlike: '가너 = 가너드(모은)',
      context: 'She garnered support from voters.',
      synonymAntonym: '동의어: collect, accumulate, 반의어: scatter',
    })
  ),
  word('Gratuitous', '불필요한', 8, 'adjective',
    ['필요한', '당연한', '타당한', '근거 있는', '의미 있는', '필요', '당연', '타당', '근거', '의미'],
    tips({
      etymology: '라틴어 gratus(기쁜) -> 값 없이 주는',
      visual: '영화에 끼워 넣은 불필요한 폭력 장면',
      soundAlike: '그래투이터스 = 그래투이티(불필요)',
      context: 'The film had gratuitous violence.',
      synonymAntonym: '동의어: unnecessary, uncalled-for, 반의어: justified',
    })
  ),
  word('Grievance', '불만', 8, 'noun',
    ['만족', '감사', '만족감', '기쁨', '승인', '만족', '감사', '기쁨', '승인', '만족감'],
    tips({
      etymology: '라틴어 gravare(무겁게 하다) -> 마음의 무거움',
      visual: '불만 사항을 적어 제출하는 직원',
      soundAlike: '그리번스 = 그리브(슬퍼하다)',
      context: 'Workers filed a grievance with the union.',
      synonymAntonym: '동의어: complaint, objection, 반의어: satisfaction',
    })
  ),
  word('Hackneyed', '진부한', 8, 'adjective',
    ['신선한', '독창적인', '참신한', '독특한', '새로운', '신선', '독창', '참신', '독특', '새로움'],
    tips({
      etymology: 'hackney(일반용 말) -> 흔히 쓰이는',
      visual: '손바닥만큼 해진 교과서 문구',
      soundAlike: '핵니드 = 핵니드 표현',
      context: 'The dialogue was hackneyed and predictable.',
      synonymAntonym: '동의어: clichéd, trite, 반의어: original',
    })
  ),
  word('Hamper', '방해하다', 8, 'verb',
    ['돕다', '촉진하다', '용이하게 하다', '가속하다', '지원하다', '도움', '촉진', '용이', '가속', '지원'],
    tips({
      etymology: '프랑스어 hamper(바구니) -> 담다, 가두다',
      visual: '발에 걸려 넘어지는 줄',
      soundAlike: '햄퍼 = 햄퍼드(방해당한)',
      context: 'Bad weather hampered the rescue.',
      synonymAntonym: '동의어: hinder, impede, 반의어: facilitate',
    })
  ),
  word('Haphazard', '무계획적인', 8, 'adjective',
    ['체계적인', '계획적인', '정돈된', '신중한', '엄격한', '체계', '계획', '정돈', '신중', '엄격'],
    tips({
      etymology: 'hap(운) + hazard(위험) -> 닥치는 대로',
      visual: '제멋대로 흩어진 주사위',
      soundAlike: '합해저드 = 합해저드리(무계획적으로)',
      context: 'The files were arranged in haphazard order.',
      synonymAntonym: '동의어: random, chaotic, 반의어: systematic',
    })
  ),
  word('Harbinger', '전조', 8, 'noun',
    ['후과', '결과', '여파', '끝맺음', '최종', '후과', '결과', '여파', '끝맺음', '최종'],
    tips({
      etymology: '고대게르만어 harb(숙소) + inger -> 먼저 도착하는 자',
      visual: '봄을 알리는 제비 한 마리',
      soundAlike: '하빈저 = 하빈지(예고하다)',
      context: 'The first snow is a harbinger of winter.',
      synonymAntonym: '동의어: precursor, omen, 반의어: aftermath',
    })
  ),
  word('Heinous', '흉악한', 8, 'adjective',
    ['고상한', '존귀한', '순한', '덕스러운', '선한', '고상', '존귀', '순함', '덕스러움', '선함'],
    tips({
      etymology: '프랑스어 haine(증오) -> 혐오스러운',
      visual: '뉴스에 나오는 범죄 현장',
      soundAlike: '헤이너스 = 헤이너스니스(흉악)',
      context: 'The heinous crime shocked the nation.',
      synonymAntonym: '동의어: atrocious, monstrous, 반의어: noble',
    })
  ),
  word('Heresy', '이단', 8, 'noun',
    ['정통', '정설', '정도', '합의', '이해', '정통', '정설', '정도', '합의', '이해'],
    tips({
      etymology: '그리스어 hairesis(선택) -> 다른 길 선택',
      visual: '불타는 이단 서적',
      soundAlike: '헤러시 = 헤러틱(이단의)',
      context: 'He was accused of heresy for his views.',
      synonymAntonym: '동의어: heterodoxy, dissent, 반의어: orthodoxy',
    })
  ),
  word('Hierarchy', '위계', 8, 'noun',
    ['평등', '수평', '동등', '혼돈', '무질서', '평등', '수평', '동등', '혼돈', '무질서'],
    tips({
      etymology: '그리스어 hieros(신성한) + arche(통치) -> 신성한 질서',
      visual: '피라미드 형태의 조직도',
      soundAlike: '하이어라키 = 하이어키컬(위계적)',
      context: 'The company has a strict hierarchy.',
      synonymAntonym: '동의어: rank, pecking order, 반의어: equality',
    })
  ),
  word('Homogeneous', '동질의', 8, 'adjective',
    ['이질적인', '다양한', '혼합된', '섞인', '상이한', '이질', '다양', '혼합', '섞임', '상이'],
    tips({
      etymology: 'homo(같은) + gen(종류) + -ous -> 같은 종류의',
      visual: '한 가지 색만 있는 균일한 벽',
      soundAlike: '호모지니어스 = 호모지니어티(동질)',
      context: 'The group was homogeneous in age.',
      synonymAntonym: '동의어: uniform, similar, 반의어: heterogeneous',
    })
  ),
  word('Hubris', '오만', 8, 'noun',
    ['겸손', '겸양', '자기비하', '겸허', '겸손함', '겸양', '자기비하', '겸허', '겸손함', '겸손'],
    tips({
      etymology: '그리스어 hybris(과잉) -> 지나친 자부심',
      visual: '천에 맞서는 거대한 인간 실루엣',
      soundAlike: '휴브리스 = 휴브리스틱(오만한)',
      context: 'His hubris led to his downfall.',
      synonymAntonym: '동의어: arrogance, pride, 반의어: humility',
    })
  ),
  word('Hypothetical', '가설적인', 8, 'adjective',
    ['실제의', '검증된', '입증된', '현실적', '실재하는', '실제', '검증', '입증', '현실', '실재'],
    tips({
      etymology: '그리스어 hypo(아래) + thesis(놓다) -> 가정하여 놓다',
      visual: '물음표가 달린 실험 설계도',
      soundAlike: '하이포데티컬 = 하이포데시스(가설)',
      context: 'Consider this hypothetical scenario.',
      synonymAntonym: '동의어: theoretical, assumed, 반의어: actual',
    })
  ),
  word('Idiosyncrasy', '성벽', 8, 'noun',
    ['범례', '보편성', '일반성', '표준', '정상', '범례', '보편', '일반', '표준', '정상'],
    tips({
      etymology: 'idio(나만의) + syncrasy(섞음) -> 나만의 섞임',
      visual: '편지를 읽기 전 냄새를 맡는 습관',
      soundAlike: '이디오싱크러시 = 이디오싱크래틱(성벽의)',
      context: 'Her idiosyncrasy is always drinking tea at midnight.',
      synonymAntonym: '동의어: quirk, peculiarity, 반의어: norm',
    })
  ),
  word('Illicit', '불법의', 8, 'adjective',
    ['합법적인', '허용된', '정당한', '정식의', '허락된', '합법', '허용', '정당', '정식', '허락'],
    tips({
      etymology: 'il(아닌) + licit(허용된) -> 허용되지 않은',
      visual: '문 위에 붙은 금지 표지',
      soundAlike: '일리시트 = 일리시트리(불법적으로)',
      context: 'They were involved in illicit trade.',
      synonymAntonym: '동의어: illegal, unlawful, 반의어: lawful',
    })
  ),
  word('Imminent', '임박한', 8, 'adjective',
    ['먼', '먼 훗날의', '불확실한', '연기된', '늦춰진', '먼', '불확실', '연기', '늦춤', '원거리'],
    tips({
      etymology: 'im(위로) + min(돌출) -> 곧 닥쳐오는',
      visual: '머리 위에 매달린 검',
      soundAlike: '이미넌트 = 이미넌스(임박)',
      context: 'The storm is imminent.',
      synonymAntonym: '동의어: impending, approaching, 반의어: distant',
    })
  ),
  word('Impair', '손상시키다', 8, 'verb',
    ['개선하다', '강화하다', '회복시키다', '보완하다', '향상시키다', '개선', '강화', '회복', '보완', '향상'],
    tips({
      etymology: 'im(나쁘게) + pair(나쁘다) -> 더 나쁘게 하다',
      visual: '깨진 안경으로 흐린 시야',
      soundAlike: '임페어 = 임페어먼트(손상)',
      context: 'Alcohol impairs judgment.',
      synonymAntonym: '동의어: damage, weaken, 반의어: improve',
    })
  ),
  word('Impartial', '공정한', 8, 'adjective',
    ['편파적인', '편향된', '불공정한', '차별적', '편든', '편파', '편향', '불공정', '차별', '편듦'],
    tips({
      etymology: 'im(아닌) + partial(편파적) -> 편파적이지 않은',
      visual: '양쪽이 같은 저울',
      soundAlike: '임파셜 = 임파셜리티(공정)',
      context: 'We need an impartial judge.',
      synonymAntonym: '동의어: fair, unbiased, 반의어: partial',
    })
  ),
];
