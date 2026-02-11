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
    }),
    {
      definition: 'to become less intense or widespread',
      wordDistractors: ['Debate', 'Abase', 'Abode'],
      definitionDistractors: [
        'to become greater in size or amount',
        'to make something worse or more severe',
        'to increase in strength or intensity',
      ],
      exampleSentences: [
        { en: 'The storm finally abated by evening.', ko: '폭풍은 저녁 무렵 드디어 약해졌다.' },
        { en: 'Her anger abated after he apologized.', ko: '그가 사과한 후 그녀의 화가 가라앉았다.' },
      ],
    }
  ),
  word('Aberration', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '일반', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'ab(벗어나) + err(어긋나다) + -ation -> 벗어남',
      visual: '정상 범위를 벗어난 그래프 꼭대기',
      soundAlike: '애버레이션 = 애버런트(이상한)',
      context: 'His outburst was an aberration from his usual calm.',
      synonymAntonym: '동의어: deviation, anomaly, 반의어: norm',
    }),
    {
      definition: 'a departure from what is normal, typical, or expected',
      wordDistractors: ['Abbreviation', 'Observation', 'Adoration'],
      definitionDistractors: [
        'the usual or average way things happen',
        'a recognized standard or model',
        'conformity to accepted norms',
      ],
      exampleSentences: [
        { en: 'His outburst was an aberration from his usual calm.', ko: '그의 폭발은 평소 차분한 모습과는 다른 이상 현상이었다.' },
        { en: 'The test results showed a statistical aberration.', ko: '검사 결과에 통계적 이상이 나타났다.' },
      ],
    }
  ),
  word('Abhor', '혐오하다', 7, 'verb',
    ['사랑하다', '선호하다', '환영하다', '추구하다', '그리워하다', '애호', '흠모', '숭배', '존경', '열애'],
    tips({
      etymology: 'ab(멀리) + hor( shudder) -> 몸서리치며 멀리하다',
      visual: '혐오스러운 것을 피하는 표정',
      soundAlike: '앱호어 = 앱호런스(혐오)',
      context: 'She abhors violence in any form.',
      synonymAntonym: '동의어: detest, loathe, 반의어: adore',
    }),
    {
      definition: 'to regard with disgust and hatred',
      wordDistractors: ['Adore', 'Abort', 'Adorn'],
      definitionDistractors: [
        'to feel deep affection for someone',
        'to welcome or support enthusiastically',
        'to hold in high regard or esteem',
      ],
      exampleSentences: [
        { en: 'She abhors violence in any form.', ko: '그녀는 어떤 형태의 폭력도 혐오한다.' },
        { en: 'He abhorred the idea of cheating.', ko: '그는 부정행위라는 생각을 몹시 싫어했다.' },
      ],
    }
  ),
  word('Abject', '비참한', 7, 'adjective',
    ['고귀한', '당당한', '자존적인', '웅장한', '장엄한', '고상', '호화', '위엄', '품위', '당당'],
    tips({
      etymology: 'ab(away) + ject(던지다) -> 내던져진 상태',
      visual: '추위에 떨며 앉아 있는 거지',
      soundAlike: '앱젝트 = 앱젝션(비참함)',
      context: 'They live in abject poverty.',
      synonymAntonym: '동의어: miserable, wretched, 반의어: noble',
    }),
    {
      definition: 'utterly wretched or miserable',
      wordDistractors: ['Object', 'Subject', 'Reject'],
      definitionDistractors: [
        'having high moral qualities',
        'proud and dignified in manner',
        'having an impressive appearance',
      ],
      exampleSentences: [
        { en: 'They live in abject poverty.', ko: '그들은 비참한 빈곤 속에서 살고 있다.' },
        { en: 'The prisoners were kept in abject conditions.', ko: '수감자들은 비참한 환경에서 감금되어 있었다.' },
      ],
    }
  ),
  word('Abridge', '축약하다', 7, 'verb',
    ['확장하다', '늘리다', '덧붙이다', '보강하다', '확대', '연장', '부연', '전개', '확장', '먹다'],
    tips({
      etymology: 'a(향해) + bridge(짧게) -> 짧게 만들다',
      visual: '원본과 축약본 책 비교',
      soundAlike: '어브리지 = 어브리지드(축약된)',
      context: 'The novel was abridged for younger readers.',
      synonymAntonym: '동의어: shorten, condense, 반의어: expand',
    }),
    {
      definition: 'to shorten a text without losing the sense',
      wordDistractors: ['Bridge', 'Abrade', 'Abide'],
      definitionDistractors: [
        'to make something longer or fuller',
        'to add details or information',
        'to develop or elaborate further',
      ],
      exampleSentences: [
        { en: 'The novel was abridged for younger readers.', ko: '소설은 어린 독자를 위해 축약되었다.' },
        { en: 'The dictionary was abridged to fit in one volume.', ko: '사전은 한 권에 맞추기 위해 축약되었다.' },
      ],
    }
  ),
  word('Absolve', '면죄하다', 7, 'verb',
    ['기소하다', '비난하다', '유죄 판결', '책임지우다', '과하다', '징벌', '처벌', '규탄', '유죄', '질책'],
    tips({
      etymology: 'ab(떼어) + solve(풀다) -> 죄를 풀어주다',
      visual: '고해성사 후 용서를 받는 모습',
      soundAlike: '앱절브 = 앱솔루션(면죄)',
      context: 'The court absolved him of all charges.',
      synonymAntonym: '동의어: acquit, exonerate, 반의어: convict',
    }),
    {
      definition: 'to declare someone free from guilt or obligation',
      wordDistractors: ['Resolve', 'Dissolve', 'Absorb'],
      definitionDistractors: [
        'to find someone guilty of a crime',
        'to accuse someone formally',
        'to punish someone for wrongdoing',
      ],
      exampleSentences: [
        { en: 'The court absolved him of all charges.', ko: '법원은 그를 모든 혐의에서 면죄했다.' },
        { en: 'She absolved him from his promise.', ko: '그녀는 그가 한 약속에서 그를 해제해 주었다.' },
      ],
    }
  ),
  word('Abstain', '절제하다', 7, 'verb',
    ['참여하다', '탐닉하다', '과용하다', '집착하다', '몰두하다', '흡수', '몰입', '탐욕', '과잉', '방종'],
    tips({
      etymology: 'abs(떨어져) + tain(잡다) -> 붙잡지 않다',
      visual: '술을 사양하는 손짓',
      soundAlike: '앱스테인 = 앱스테넌스(금욕)',
      context: 'She abstained from voting on the issue.',
      synonymAntonym: '동의어: refrain, refrain from, 반의어: indulge',
    }),
    {
      definition: 'to restrain oneself from doing or enjoying something',
      wordDistractors: ['Obtain', 'Retain', 'Attain'],
      definitionDistractors: [
        'to take part in an activity',
        'to allow oneself to enjoy something freely',
        'to give in to a desire or temptation',
      ],
      exampleSentences: [
        { en: 'She abstained from voting on the issue.', ko: '그녀는 그 안건에 대해 투표를 하지 않았다.' },
        { en: 'He abstained from alcohol for a year.', ko: '그는 1년 동안 술을 끊었다.' },
      ],
    }
  ),
  word('Accolade', '영예', 7, 'noun',
    ['비난', '경멸', '퇴짜', '불명예', '오명', '부끄러움', '모욕', '경시', '무시', '휴대'],
    tips({
      etymology: 'ad(향해) + collum(목) -> 목에 걸어주는 훈장',
      visual: '훈장을 받는 군인의 목',
      soundAlike: '애컬레이드 = 애컬레이즈(칭찬하다)',
      context: 'She received the highest accolade in her field.',
      synonymAntonym: '동의어: honor, award, 반의어: criticism',
    }),
    {
      definition: 'an award or privilege granted as a special honor',
      wordDistractors: ['Collide', 'Colleague', 'Collapse'],
      definitionDistractors: [
        'an expression of strong disapproval',
        'disgrace or public shame',
        'a formal charge of wrongdoing',
      ],
      exampleSentences: [
        { en: 'She received the highest accolade in her field.', ko: '그녀는 해당 분야에서 최고의 영예를 받았다.' },
        { en: 'Winning the prize was a great accolade for the team.', ko: '상 수상은 팀에게 큰 영예였다.' },
      ],
    }
  ),
  word('Acrimony', '격렬함', 7, 'noun',
    ['온화함', '우호', '애정', '화합', '부드러움', '친절', '화해', '유순', '온정', '평화'],
    tips({
      etymology: '라틴어 acer(뜨거운) + mony -> 격한 성질',
      visual: '맹렬히 논쟁하는 두 사람',
      soundAlike: '애크리모니 = 애크리모니어스(격한)',
      context: 'The divorce was marked by acrimony.',
      synonymAntonym: '동의어: bitterness, hostility, 반의어: harmony',
    }),
    {
      definition: 'bitterness or ill feeling, especially in speech or behavior',
      wordDistractors: ['Acronym', 'Alimony', 'Agony'],
      definitionDistractors: [
        'agreement or concord between people',
        'feelings of warmth and kindness',
        'a state of peaceful coexistence',
      ],
      exampleSentences: [
        { en: 'The divorce was marked by acrimony.', ko: '이혼은 격렬한 말다툼으로 특징지어졌다.' },
        { en: 'The debate was full of acrimony and personal attacks.', ko: '논쟁은 격렬함과 개인적 공격으로 가득했다.' },
      ],
    }
  ),
  word('Adamant', '완고한', 7, 'adjective',
    ['유연한', '동의하는', '수용적인', '굴복하는', '관대한', '유순', '여유', '유동', '수용', '동의'],
    tips({
      etymology: '그리스어 adamas(다이아몬드) -> 굳건함',
      visual: '다이아몬드처럼 단단한 고집',
      soundAlike: '애더먼트 = 애더먼틀리(완고하게)',
      context: 'She was adamant about leaving early.',
      synonymAntonym: '동의어: stubborn, inflexible, 반의어: flexible',
    }),
    {
      definition: 'refusing to be persuaded or to change one\'s mind',
      wordDistractors: ['Addict', 'Adapt', 'Adament'],
      definitionDistractors: [
        'able to bend or adapt easily',
        'willing to change or compromise',
        'open to new ideas or suggestions',
      ],
      exampleSentences: [
        { en: 'She was adamant about leaving early.', ko: '그녀는 일찍 떠나는 것에 대해 완고했다.' },
        { en: 'He remained adamant in his refusal.', ko: '그는 거절하는 데 있어 완고함을 유지했다.' },
      ],
    }
  ),
  word('Adept', '능숙한', 7, 'adjective',
    ['서툰', '미숙한', '어설픈', '비능숙', '비숙련', '미숙', '서툴', '경험부족', '초보', '좋은'],
    tips({
      etymology: 'ad(향해) + apt(맞다) -> 잘 맞는',
      visual: '숙련된 손으로 복잡한 작업을 하는 장인',
      soundAlike: '어뎁트 = 어뎁션(숙달)',
      context: 'He is adept at solving puzzles.',
      synonymAntonym: '동의어: skilled, proficient, 반의어: inept',
    }),
    {
      definition: 'very skilled or proficient at something',
      wordDistractors: ['Adapt', 'Adopt', 'Accept'],
      definitionDistractors: [
        'lacking skill or competence',
        'not experienced or trained',
        'clumsy or awkward in movement',
      ],
      exampleSentences: [
        { en: 'He is adept at solving puzzles.', ko: '그는 퍼즐 풀이에 능숙하다.' },
        { en: 'She is adept in multiple languages.', ko: '그녀는 여러 언어에 능숙하다.' },
      ],
    }
  ),
  word('Adjunct', '부속물', 7, 'noun',
    ['핵심', '본체', '주요부', '중심', '본질', '주요', '근본', '본원', '주체', '사과'],
    tips({
      etymology: 'ad(향해) + junct(연결) -> 붙어 있는 것',
      visual: '주 건물에 붙어 있는 부속동',
      soundAlike: '애덕트 = 애덕션(부가)',
      context: 'The course is an adjunct to the main program.',
      synonymAntonym: '동의어: addition, supplement, 반의어: core',
    }),
    {
      definition: 'a thing added to something else as a supplementary part',
      wordDistractors: ['Junction', 'Conjunct', 'Adjunction'],
      definitionDistractors: [
        'the central or most important part',
        'the main body or structure',
        'the fundamental nature of something',
      ],
      exampleSentences: [
        { en: 'The course is an adjunct to the main program.', ko: '이 과정은 주요 프로그램의 부속물이다.' },
        { en: 'The new building will serve as an adjunct to the hospital.', ko: '새 건물은 병원의 부속물로 사용될 것이다.' },
      ],
    }
  ),
  word('Admonish', '경고하다', 7, 'verb',
    ['축하하다', '칭찬하다', '장려하다', '승인하다', '용인하다', '긍정', '찬성', '격려', '인정', '수용'],
    tips({
      etymology: 'ad(향해) + mon(경고) + -ish -> 경고하다',
      visual: '부모가 아이에게 훈계하는 모습',
      soundAlike: '애드모니시 = 애드모니션(경고)',
      context: 'The teacher admonished the students for talking.',
      synonymAntonym: '동의어: warn, reprimand, 반의어: praise',
    }),
    {
      definition: 'to warn or reprimand someone firmly',
      wordDistractors: ['Polish', 'Punish', 'Astonish'],
      definitionDistractors: [
        'to express approval or admiration',
        'to give support or encouragement',
        'to celebrate or acknowledge success',
      ],
      exampleSentences: [
        { en: 'The teacher admonished the students for talking.', ko: '선생님은 학생들이 말하는 것에 대해 경고했다.' },
        { en: 'He admonished his son for staying out late.', ko: '그는 아들이 늦게까지 밖에 있는 것에 대해 경고했다.' },
      ],
    }
  ),
  word('Advent', '도래', 7, 'noun',
    ['종료', '퇴장', '소멸', '사라짐', '퇴거', '이탈', '종식', '퇴색', '소실', '퇴각'],
    tips({
      etymology: 'ad(향해) + vent(오다) -> 오는 것',
      visual: '새 시대가 다가오는 일출',
      soundAlike: '애드벤트 = 애드벤트 켈린더',
      context: 'The advent of the internet changed everything.',
      synonymAntonym: '동의어: arrival, coming, 반의어: departure',
    }),
    {
      definition: 'the arrival of a notable person, thing, or event',
      wordDistractors: ['Event', 'Advert', 'Asset'],
      definitionDistractors: [
        'the act of leaving or going away',
        'the end or conclusion of something',
        'the gradual disappearance of something',
      ],
      exampleSentences: [
        { en: 'The advent of the internet changed everything.', ko: '인터넷의 도래가 모든 것을 바꿨다.' },
        { en: 'With the advent of spring, flowers began to bloom.', ko: '봄의 도래와 함께 꽃들이 피기 시작했다.' },
      ],
    }
  ),
  word('Adversary', '적대자', 7, 'noun',
    ['동맹', '협력자', '친구', '지지자', '동료', '동반', '파트너', '아군', '후원', '조력'],
    tips({
      etymology: 'ad(향해) + vers(돌다) + -ary -> 맞서는 사람',
      visual: '법정에서 마주보는 양측 변호인',
      soundAlike: '애드버서리 = 애드버서리얼(적대적)',
      context: 'They faced a formidable adversary.',
      synonymAntonym: '동의어: opponent, foe, 반의어: ally',
    }),
    {
      definition: 'one\'s opponent in a conflict or dispute',
      wordDistractors: ['Adversity', 'Advisory', 'Adverseness'],
      definitionDistractors: [
        'a person or group united with another',
        'someone who supports or helps',
        'a close companion or partner',
      ],
      exampleSentences: [
        { en: 'They faced a formidable adversary.', ko: '그들은 강력한 적대자와 맞섰다.' },
        { en: 'The two nations have been adversaries for decades.', ko: '두 나라는 수십 년간 적대자였다.' },
      ],
    }
  ),
  word('Aesthetic', '미적인', 7, 'adjective',
    ['추한', '비미적', '조악한', '경박한', '저속한', '비예술', '조잡', '결함', '훼손', '추함'],
    tips({
      etymology: '그리스어 aisthetikos(감각적)에서 유래',
      visual: '전시회의 조화로운 작품 배치',
      soundAlike: '이스쎄틱 = 이스쎄틱스(미학)',
      context: 'The building has great aesthetic appeal.',
      synonymAntonym: '동의어: artistic, beautiful, 반의어: ugly',
    }),
    {
      definition: 'concerned with beauty or the appreciation of beauty',
      wordDistractors: ['Athletic', 'Ascetic', 'Anesthetic'],
      definitionDistractors: [
        'unpleasant to look at',
        'lacking refinement or grace',
        'cheap or poorly made in appearance',
      ],
      exampleSentences: [
        { en: 'The building has great aesthetic appeal.', ko: '그 건물은 훌륭한 미적 매력이 있다.' },
        { en: 'She has a strong aesthetic sense.', ko: '그녀는 강한 미적 감각을 갖고 있다.' },
      ],
    }
  ),
  word('Affinity', '친화력', 7, 'noun',
    ['반감', '소외', '이질', '거리감', '적대', '불편', '반목', '불화', '거부', '사과'],
    tips({
      etymology: 'ad(향해) + fin(끝) -> 경계를 맞닿게 함',
      visual: '잘 맞는 퍼즐 조각들',
      soundAlike: '어피니티 = 어피니티 그룹',
      context: 'She has a natural affinity for music.',
      synonymAntonym: '동의어: attraction, kinship, 반의어: aversion',
    }),
    {
      definition: 'a natural liking or attraction for someone or something',
      wordDistractors: ['Infinity', 'Affirmation', 'Affidavit'],
      definitionDistractors: [
        'a strong dislike or repulsion',
        'hostility or opposition',
        'indifference or lack of interest',
      ],
      exampleSentences: [
        { en: 'She has a natural affinity for music.', ko: '그녀는 음악에 대한 자연스러운 친화력을 갖고 있다.' },
        { en: 'There is a strong affinity between the two cultures.', ko: '두 문화 사이에는 강한 친화력이 있다.' },
      ],
    }
  ),
  word('Affluent', '부유한', 7, 'adjective',
    ['가난한', '빈곤한', '결핍한', '궁핍', '형편없는', '빈약', '비참', '불우', '초라', '빈곤'],
    tips({
      etymology: 'ad(향해) + flu(흐르다) + -ent -> 넘쳐흐르는',
      visual: '고급 주택가와 럭셔리 카',
      soundAlike: '애플루언트 = 애플루언스(풍요)',
      context: 'They live in an affluent neighborhood.',
      synonymAntonym: '동의어: wealthy, prosperous, 반의어: poor',
    }),
    {
      definition: 'having a lot of money or possessions',
      wordDistractors: ['Effluent', 'Fluent', 'Eloquent'],
      definitionDistractors: [
        'lacking money or basic necessities',
        'in a state of extreme poverty',
        'having very little or nothing',
      ],
      exampleSentences: [
        { en: 'They live in an affluent neighborhood.', ko: '그들은 부유한 동네에 산다.' },
        { en: 'The club caters to affluent clients.', ko: '그 클럽은 부유한 고객을 대상으로 한다.' },
      ],
    }
  ),
  word('Aggregate', '합계하다', 7, 'verb',
    ['분산하다', '나누다', '개별화하다', '해체하다', '분리', '분해', '산재', '분할', '해체', '분산'],
    tips({
      etymology: 'ad(향해) + greg(무리) + -ate -> 한데 모으다',
      visual: '여러 데이터를 하나로 합치는 그래프',
      soundAlike: '애그리게이트 = 애그리게이션(집합)',
      context: 'The study aggregated data from all regions.',
      synonymAntonym: '동의어: combine, total, 반의어: disperse',
    }),
    {
      definition: 'to combine or collect into a whole',
      wordDistractors: ['Aggravate', 'Segregate', 'Congregate'],
      definitionDistractors: [
        'to spread or distribute over an area',
        'to divide into separate parts',
        'to break apart or scatter',
      ],
      exampleSentences: [
        { en: 'The study aggregated data from all regions.', ko: '연구는 모든 지역의 데이터를 합계했다.' },
        { en: 'We need to aggregate the sales figures.', ko: '우리는 매출 수치를 합산해야 한다.' },
      ],
    }
  ),
  word('Agile', '민첩한', 7, 'adjective',
    ['둔한', '느린', '어색한', '경직된', '부자유', '우둔', '둔감', '느림', '미숙', '서툼'],
    tips({
      etymology: '라틴어 agilis(움직이기 쉬운)에서 유래',
      visual: '장애물을 빠르게 피하는 체조선수',
      soundAlike: '애질 = 애질리티(민첩성)',
      context: 'The team needs to be agile to adapt.',
      synonymAntonym: '동의어: nimble, quick, 반의어: clumsy',
    }),
    {
      definition: 'able to move quickly and easily',
      wordDistractors: ['Fragile', 'Sterile', 'Mobile'],
      definitionDistractors: [
        'slow or sluggish in movement',
        'awkward or uncoordinated',
        'stiff or inflexible',
      ],
      exampleSentences: [
        { en: 'The team needs to be agile to adapt.', ko: '팀은 적응하기 위해 민첩해야 한다.' },
        { en: 'She is remarkably agile for her age.', ko: '그녀는 나이에 비해 놀랄 만큼 민첩하다.' },
      ],
    }
  ),
  word('Alchemy', '연금술', 7, 'noun',
    ['과학', '실증', '이성', '분석', '논리', '실험', '객관', '검증', '해부', '사과'],
    tips({
      etymology: '아랍어 al-kimiya에서 유래',
      visual: '연금술사가 가마에서 금을 추출하는 모습',
      soundAlike: '알케미 = 알케미컬(연금술적)',
      context: 'The project seemed like corporate alchemy.',
      synonymAntonym: '동의어: transmutation, magic, 반의어: science',
    }),
    {
      definition: 'a medieval chemical practice that sought to turn base metals into gold',
      wordDistractors: ['Chemistry', 'Alchemist', 'Algae'],
      definitionDistractors: [
        'systematic study of the natural world',
        'empirical evidence and experimentation',
        'logical analysis and reasoning',
      ],
      exampleSentences: [
        { en: 'The project seemed like corporate alchemy.', ko: '그 프로젝트는 기업 연금술처럼 보였다.' },
        { en: 'Medieval alchemy preceded modern chemistry.', ko: '중세 연금술은 현대 화학에 앞섰다.' },
      ],
    }
  ),
  word('Allegiance', '충성', 7, 'noun',
    ['반역', '배신', '변절', '이탈', '저버림', '배반', '불충', '이심', '사과', '책'],
    tips({
      etymology: 'ad(향해) + liege(주군) + -ance -> 주군에 대한 의무',
      visual: '국기에 손을 올려 선서하는 군인',
      soundAlike: '얼리전스 = 얼리전트(충성하는)',
      context: 'He pledged allegiance to the flag.',
      synonymAntonym: '동의어: loyalty, fidelity, 반의어: treason',
    }),
    {
      definition: 'loyalty or commitment to a person, group, or cause',
      wordDistractors: ['Allegation', 'Allegory', 'Alliance'],
      definitionDistractors: [
        'betrayal of trust or country',
        'the crime of betraying one\'s country',
        'act of renouncing one\'s loyalty',
      ],
      exampleSentences: [
        { en: 'He pledged allegiance to the flag.', ko: '그는 국기에 대한 충성을 선서했다.' },
        { en: 'Her allegiance to the company never wavered.', ko: '그녀의 회사에 대한 충성은 흔들리지 않았다.' },
      ],
    }
  ),
  word('Alleviate', '완화하다', 7, 'verb',
    ['악화시키다', '가중시키다', '심화하다', '격화하다', '악화', '증대', '심화', '가중', '과장', '먹다'],
    tips({
      etymology: 'ad(향해) + levis(가벼운) + -ate -> 가볍게 만들다',
      visual: '진통제로 고통이 줄어드는 환자',
      soundAlike: '얼리비에이트 = 얼리비에이션(완화)',
      context: 'Medicine can alleviate the symptoms.',
      synonymAntonym: '동의어: relieve, ease, 반의어: aggravate',
    }),
    {
      definition: 'to make suffering or a problem less severe',
      wordDistractors: ['Elevate', 'Levitate', 'Relieve'],
      definitionDistractors: [
        'to make something worse',
        'to increase in intensity',
        'to add to the burden',
      ],
      exampleSentences: [
        { en: 'Medicine can alleviate the symptoms.', ko: '약이 증상을 완화할 수 있다.' },
        { en: 'The new policy aims to alleviate poverty.', ko: '새 정책은 빈곤을 완화하는 것을 목표로 한다.' },
      ],
    }
  ),
  word('Amalgamate', '합병하다', 7, 'verb',
    ['분리하다', '해체하다', '분할하다', '나누다', '분산', '해체', '분리', '분할', '독립', '해산'],
    tips({
      etymology: '그리스어 malagma(혼합) -> 수은과 합금하다',
      visual: '두 회사가 하나로 합쳐지는 로고',
      soundAlike: '어멀거메이트 = 어멀거메이션(합병)',
      context: 'The two firms amalgamated last year.',
      synonymAntonym: '동의어: merge, combine, 반의어: separate',
    }),
    {
      definition: 'to combine or unite to form one organization or structure',
      wordDistractors: ['Aggravate', 'Assimilate', 'Accumulate'],
      definitionDistractors: [
        'to divide into separate parts',
        'to break apart or dissolve',
        'to set or keep apart',
      ],
      exampleSentences: [
        { en: 'The two firms amalgamated last year.', ko: '두 회사는 작년에 합병했다.' },
        { en: 'The unions voted to amalgamate.', ko: '노조들은 합병하기로 투표했다.' },
      ],
    }
  ),
  word('Ambivalent', '양가적인', 7, 'adjective',
    ['단호한', '확신 있는', '일심', '결정적', '명확한', '단일', '확정', '단정', '고정', '좋은'],
    tips({
      etymology: 'ambi(양쪽) + val(가치) + -ent -> 양쪽 가치를 가진',
      visual: '좌우로 흔들리는 천칭',
      soundAlike: '앰비벌런트 = 앰비벌런스(양가감정)',
      context: 'She felt ambivalent about the job offer.',
      synonymAntonym: '동의어: conflicting, mixed, 반의어: decisive',
    }),
    {
      definition: 'having mixed feelings or contradictory ideas about something',
      wordDistractors: ['Ambient', 'Equivalent', 'Ambiguous'],
      definitionDistractors: [
        'settled and resolute',
        'having no doubt',
        'clear and unquestionable',
      ],
      exampleSentences: [
        { en: 'She felt ambivalent about the job offer.', ko: '그녀는 제안받은 직업에 대해 양가적인 감정을 느꼈다.' },
        { en: 'He was ambivalent toward the new policy.', ko: '그는 새 정책에 대해 양가적이었다.' },
      ],
    }
  ),
  word('Amiable', '다정한', 7, 'adjective',
    ['냉담한', '무뚝뚝한', '적대적인', '딱딱한', '불친절', '냉소', '거만', '무례', '냉혹', '좋은'],
    tips({
      etymology: '라틴어 amicus(친구)에서 유래',
      visual: '밝은 미소로 인사하는 호스트',
      soundAlike: '에이미어블 = 에이미어빌리티(호감)',
      context: 'He has an amiable personality.',
      synonymAntonym: '동의어: friendly, pleasant, 반의어: hostile',
    }),
    {
      definition: 'having a friendly and pleasant manner',
      wordDistractors: ['Amicable', 'Amenable', 'Admirable'],
      definitionDistractors: [
        'unfriendly or hostile',
        'cold or indifferent',
        'rude or showing contempt',
      ],
      exampleSentences: [
        { en: 'He has an amiable personality.', ko: '그는 다정한 성격을 갖고 있다.' },
        { en: 'The meeting was amiable and productive.', ko: '회의는 다정하고 생산적이었다.' },
      ],
    }
  ),
  word('Amnesty', '사면', 7, 'noun',
    ['처벌', '징벌', '기소', '유죄', '규탄', '제재', '벌', '징계', '과벌', '사과'],
    tips({
      etymology: '그리스어 amnestia(잊음)에서 유래',
      visual: '사면 선언문을 읽는 대통령',
      soundAlike: '앰네스티 = 앰네스티 인터내셔널',
      context: 'The government granted amnesty to political prisoners.',
      synonymAntonym: '동의어: pardon, clemency, 반의어: conviction',
    }),
    {
      definition: 'an official pardon for people convicted of political offenses',
      wordDistractors: ['Amnesia', 'Amity', 'Amenity'],
      definitionDistractors: [
        'penalty for wrongdoing',
        'formal accusation of a crime',
        'declaration of guilt',
      ],
      exampleSentences: [
        { en: 'The government granted amnesty to political prisoners.', ko: '정부는 정치범들에게 사면을 부여했다.' },
        { en: 'A general amnesty was declared after the war.', ko: '전쟁 후 일반 사면이 선포되었다.' },
      ],
    }
  ),
  word('Ample', '풍부한', 7, 'adjective',
    ['부족한', '빈약한', '미미한', '궁핍한', '희소', '결핍', '빈약', '미미', '부족', '드묾'],
    tips({
      etymology: '라틴어 amplus(넓은)에서 유래',
      visual: '가득 차 있는 식탁',
      soundAlike: '앰플 = 앰플리파이(확대하다)',
      context: 'There is ample time to finish.',
      synonymAntonym: '동의어: abundant, plenty, 반의어: scarce',
    }),
    {
      definition: 'enough or more than enough in quantity',
      wordDistractors: ['Sample', 'Example', 'Temple'],
      definitionDistractors: [
        'not enough or insufficient',
        'very small in amount',
        'barely adequate',
      ],
      exampleSentences: [
        { en: 'There is ample time to finish.', ko: '끝내기에 충분한 시간이 있다.' },
        { en: 'The room provides ample space for a party.', ko: '그 방은 파티에 충분한 공간을 제공한다.' },
      ],
    }
  ),
  word('Analogy', '비유', 7, 'noun',
    ['실체', '직설', '직접', '사실', '본문', '원문', '실사', '직서', '정확', '문자'],
    tips({
      etymology: 'ana(비례) + logos(말) -> 비례하여 말함',
      visual: 'A:B = C:D 구조의 비율 도표',
      soundAlike: '어날로지 = 어날로지컬(유비적)',
      context: 'She used an analogy to explain the concept.',
      synonymAntonym: '동의어: comparison, metaphor, 반의어: literal',
    }),
    {
      definition: 'a comparison between two things to illustrate a point',
      wordDistractors: ['Anomaly', 'Apology', 'Anthology'],
      definitionDistractors: [
        'the actual thing itself',
        'direct statement without metaphor',
        'exact or word-for-word meaning',
      ],
      exampleSentences: [
        { en: 'She used an analogy to explain the concept.', ko: '그녀는 개념을 설명하기 위해 비유를 사용했다.' },
        { en: 'The analogy between the brain and a computer is useful.', ko: '뇌와 컴퓨터 사이의 비유는 유용하다.' },
      ],
    }
  ),
  word('Anarchy', '무정부', 7, 'noun',
    ['질서', '법치', '통제', '통치', '규율', '규칙', '정부', '체제', '법', '사과'],
    tips({
      etymology: 'an(없음) + archy(통치) -> 통치가 없음',
      visual: '혼란스러운 거리와 파괴된 건물',
      soundAlike: '애너키 = 애너키즘(무정부주의)',
      context: 'The region descended into anarchy.',
      synonymAntonym: '동의어: chaos, lawlessness, 반의어: order',
    }),
    {
      definition: 'a state of disorder due to absence of authority',
      wordDistractors: ['Monarchy', 'Hierarchy', 'Oligarchy'],
      definitionDistractors: [
        'a state of peace and organization',
        'rule by law and government',
        'system of rules and control',
      ],
      exampleSentences: [
        { en: 'The region descended into anarchy.', ko: '그 지역은 무정부 상태로 빠져들었다.' },
        { en: 'The collapse of government led to anarchy.', ko: '정부 붕괴로 무정부 상태가 되었다.' },
      ],
    }
  ),
  word('Animosity', '적의', 7, 'noun',
    ['우호', '친화', '화해', '친절', '애정', '협력', '우정', '조화', '사랑', '사과'],
    tips({
      etymology: '라틴어 animus(영혼, 마음)에서 유래',
      visual: '서로 노려보는 두 라이벌',
      soundAlike: '애니모시티 = 애니머스(적의)',
      context: 'There was deep animosity between them.',
      synonymAntonym: '동의어: hostility, hatred, 반의어: friendship',
    }),
    {
      definition: 'strong hostility or ill feeling',
      wordDistractors: ['Amity', 'Unanimity', 'Animism'],
      definitionDistractors: [
        'friendly and cooperative relations',
        'affection and goodwill',
        'peaceful agreement',
      ],
      exampleSentences: [
        { en: 'There was deep animosity between them.', ko: '그들 사이에는 깊은 적의가 있었다.' },
        { en: 'The animosity between the two teams was evident.', ko: '두 팀 사이의 적의는 분명했다.' },
      ],
    }
  ),
  word('Anomaly', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '예상', '일반', '상식', '사과', '책', '고양이'],
    tips({
      etymology: 'a(아닌) + nomal(규칙) + -y -> 규칙에서 벗어남',
      visual: '정상 범위를 벗어난 데이터 포인트',
      soundAlike: '어놀러미 = 어놀러러스(이상한)',
      context: 'The test results showed an anomaly.',
      synonymAntonym: '동의어: irregularity, deviation, 반의어: norm',
    }),
    {
      definition: 'something that deviates from what is standard or expected',
      wordDistractors: ['Analogy', 'Anonymity', 'Anatomy'],
      definitionDistractors: [
        'the usual or expected state',
        'a recognized standard',
        'conformity to the norm',
      ],
      exampleSentences: [
        { en: 'The test results showed an anomaly.', ko: '검사 결과에 이상이 나타났다.' },
        { en: 'This warm weather is an anomaly for winter.', ko: '이 따뜻한 날씨는 겨울에 대한 이상 현상이다.' },
      ],
    }
  ),
  word('Antagonist', '적대자', 7, 'noun',
    ['동맹', '지지자', '동료', '협력자', '친구', '파트너', '아군', '후원', '조력', '동반'],
    tips({
      etymology: 'anti(반대) + agon(싸움) + -ist -> 맞서 싸우는 사람',
      visual: '영화에서 주인공과 대립하는 악역',
      soundAlike: '앤태거니스트 = 앤태거니즘(대립)',
      context: 'The hero faced his antagonist in the final battle.',
      synonymAntonym: '동의어: adversary, opponent, 반의어: ally',
    }),
    {
      definition: 'a person who actively opposes another',
      wordDistractors: ['Protagonist', 'Antagonism', 'Agonist'],
      definitionDistractors: [
        'a person united with another',
        'someone who supports or helps',
        'a close companion',
      ],
      exampleSentences: [
        { en: 'The hero faced his antagonist in the final battle.', ko: '주인공은 최종 결전에서 적대자와 맞섰다.' },
        { en: 'The novel\'s antagonist is a cunning villain.', ko: '소설의 적대자는 교활한 악당이다.' },
      ],
    }
  ),
  word('Apathy', '무관심', 7, 'noun',
    ['열정', '관심', '열의', '참여', '열망', '호기심', '열중', '주의', '사과', '책'],
    tips({
      etymology: 'a(없음) + path(감정) + -y -> 감정이 없음',
      visual: 'TV를 무표정으로 바라보는 사람',
      soundAlike: '애퍼시 = 애더틱(무관심한)',
      context: 'Voter apathy is a growing concern.',
      synonymAntonym: '동의어: indifference, lethargy, 반의어: enthusiasm',
    }),
    {
      definition: 'lack of interest, enthusiasm, or concern',
      wordDistractors: ['Empathy', 'Sympathy', 'Antipathy'],
      definitionDistractors: [
        'intense enthusiasm or passion',
        'curiosity or desire to know',
        'active involvement',
      ],
      exampleSentences: [
        { en: 'Voter apathy is a growing concern.', ko: '유권자 무관심은 점점 커지는 우려이다.' },
        { en: 'His apathy toward the project was discouraging.', ko: '그의 프로젝트에 대한 무관심은 좌절스러웠다.' },
      ],
    }
  ),
  word('Appease', '달래다', 7, 'verb',
    ['도발하다', '격분시키다', '화나게 하다', '자극하다', '분노', '역효과', '선동', '자극', '촉발', '도발'],
    tips({
      etymology: 'ad(향해) + peace(평화) -> 평화롭게 만들다',
      visual: '울던 아이를 달래는 어머니',
      soundAlike: '어피즈 = 어피즈먼트(달래기)',
      context: 'The manager tried to appease the angry customer.',
      synonymAntonym: '동의어: pacify, placate, 반의어: provoke',
    }),
    {
      definition: 'to pacify or placate by yielding to demands',
      wordDistractors: ['Appraise', 'Apprise', 'Pacify'],
      definitionDistractors: [
        'to deliberately anger someone',
        'to stir up or incite',
        'to cause strong reaction',
      ],
      exampleSentences: [
        { en: 'The manager tried to appease the angry customer.', ko: '매니저는 화난 고객을 달래려 했다.' },
        { en: 'He made concessions to appease the protesters.', ko: '그는 시위자들을 달래기 위해 양보했다.' },
      ],
    }
  ),
  word('Apprehend', '체포하다', 7, 'verb',
    ['석방하다', '놓아주다', '해제하다', '면제하다', '자유', '해방', '석방', '면제', '풀어주다', '해제'],
    tips({
      etymology: 'ad(향해) + prehend(잡다) -> 붙잡다',
      visual: '수갑을 채우는 경찰',
      soundAlike: '앱리헨드 = 앱리헨션(체포)',
      context: 'The suspect was apprehended at the border.',
      synonymAntonym: '동의어: arrest, capture, 반의어: release',
    }),
    {
      definition: 'to arrest someone for a crime',
      wordDistractors: ['Comprehend', 'Reprehend', 'Apprentice'],
      definitionDistractors: [
        'to set someone free',
        'to release from custody',
        'to let go or dismiss',
      ],
      exampleSentences: [
        { en: 'The suspect was apprehended at the border.', ko: '용의자는 국경에서 체포되었다.' },
        { en: 'Police apprehended the thief within hours.', ko: '경찰은 몇 시간 내에 도둑을 체포했다.' },
      ],
    }
  ),
  word('Aptitude', '적성', 7, 'noun',
    ['부적격', '비재능', '무능', '부적합', '무기능', '무적성', '무솜씨', '서툼', '미숙', '사과'],
    tips({
      etymology: '라틴어 aptus(맞는) + -itude -> 적합한 성질',
      visual: '수학 문제를 쉽게 푸는 학생',
      soundAlike: '앱티튜드 = 앱티튜드 테스트',
      context: 'She showed great aptitude for languages.',
      synonymAntonym: '동의어: talent, knack, 반의어: ineptitude',
    }),
    {
      definition: 'a natural ability or skill for something',
      wordDistractors: ['Attitude', 'Altitude', 'Latitude'],
      definitionDistractors: [
        'lack of skill or ability',
        'incompetence or clumsiness',
        'inability to do something well',
      ],
      exampleSentences: [
        { en: 'She showed great aptitude for languages.', ko: '그녀는 언어에 대한 큰 적성을 보였다.' },
        { en: 'He has an aptitude for mathematics.', ko: '그는 수학에 대한 적성이 있다.' },
      ],
    }
  ),
  word('Archaic', '구식의', 7, 'adjective',
    ['현대적', '최신', '새로운', '현행', '신식', '현대', '신형', '좋은', '화난', '용감한'],
    tips({
      etymology: '그리스어 arkhe(시작) -> 오래된',
      visual: '고대 문자로 쓰인 낡은 문서',
      soundAlike: '아케이익 = 아키벌지(고문서)',
      context: 'The law uses archaic language.',
      synonymAntonym: '동의어: obsolete, ancient, 반의어: modern',
    }),
    {
      definition: 'very old or old-fashioned',
      wordDistractors: ['Arctic', 'Chronic', 'Arcane'],
      definitionDistractors: [
        'of the present time',
        'recently developed',
        'up to date',
      ],
      exampleSentences: [
        { en: 'The law uses archaic language.', ko: '그 법은 구식 언어를 사용한다.' },
        { en: 'Archaic customs persist in the village.', ko: '구식 관습이 마을에 남아 있다.' },
      ],
    }
  ),
  word('Ardent', '열렬한', 7, 'adjective',
    ['냉담한', '무관심한', '미지근한', '냉정', '무기력', '냉담', '냉소', '무열정', '냉혹', '무감'],
    tips({
      etymology: '라틴어 ardere(타다)에서 유래',
      visual: '열정적으로 연설하는 정치인',
      soundAlike: '아던트 = 아던시(열정)',
      context: 'He is an ardent supporter of the cause.',
      synonymAntonym: '동의어: passionate, fervent, 반의어: indifferent',
    }),
    {
      definition: 'enthusiastic or passionate',
      wordDistractors: ['Urgent', 'Absent', 'Patent'],
      definitionDistractors: [
        'lacking interest or enthusiasm',
        'cold or unemotional',
        'showing no warmth',
      ],
      exampleSentences: [
        { en: 'He is an ardent supporter of the cause.', ko: '그는 그 대의의 열렬한 지지자이다.' },
        { en: 'She has an ardent desire to succeed.', ko: '그녀는 성공에 대한 열렬한 열망을 갖고 있다.' },
      ],
    }
  ),
  word('Arduous', '힘겨운', 7, 'adjective',
    ['쉬운', '편한', '수월한', '가벼운', '부담없는', '간편', '여유', '편안', '쉬움', '가벼움'],
    tips({
      etymology: '라틴어 arduus(높은, 가파른)에서 유래',
      visual: '가파른 산을 오르는 등산객',
      soundAlike: '아줄어스 = 아줄어스니스(고난)',
      context: 'The journey was arduous but rewarding.',
      synonymAntonym: '동의어: difficult, strenuous, 반의어: easy',
    }),
    {
      definition: 'involving or requiring strenuous effort',
      wordDistractors: ['Tedious', 'Spurious', 'Curious'],
      definitionDistractors: [
        'requiring little effort',
        'comfortable and relaxed',
        'simple to do',
      ],
      exampleSentences: [
        { en: 'The journey was arduous but rewarding.', ko: '여정은 힘겨웠지만 보람 있었다.' },
        { en: 'They faced an arduous climb to the summit.', ko: '그들은 정상까지 힘겨운 등정에 직면했다.' },
      ],
    }
  ),
  word('Articulate', '명확히 말하다', 7, 'verb',
    ['더듬거리다', '웅얼거리다', '불명료', '얼버무리다', '흐리다', '불명확', '혼란', '애매', '불명', '불분명'],
    tips({
      etymology: 'articulus(관절) -> 관절처럼 연결해 말하다',
      visual: '청중 앞에서 설득력 있게 말하는 화자',
      soundAlike: '아티큘레이트 = 아티큘레이션(발음)',
      context: 'She articulated her concerns clearly.',
      synonymAntonym: '동의어: express, enunciate, 반의어: mumble',
    }),
    {
      definition: 'to express ideas or feelings clearly in speech',
      wordDistractors: ['Particulate', 'Speculate', 'Calculate'],
      definitionDistractors: [
        'to speak unclearly or indistinctly',
        'to avoid giving a clear answer',
        'to make confused or unclear',
      ],
      exampleSentences: [
        { en: 'She articulated her concerns clearly.', ko: '그녀는 자신의 우려를 명확히 말했다.' },
        { en: 'He struggled to articulate his thoughts.', ko: '그는 생각을 명확히 표현하는 데 어려움을 겪었다.' },
      ],
    }
  ),
  word('Ascend', '오르다', 7, 'verb',
    ['내려가다', '하강하다', '떨어지다', '강하', '하락', '침강', '하강', '추락', '먹다', '뛰다'],
    tips({
      etymology: 'ad(향해) + scand(오르다) -> 위로 올라가다',
      visual: '산 정상을 향해 오르는 등산객',
      soundAlike: '어센드 = 어센션(승천)',
      context: 'They ascended the mountain at dawn.',
      synonymAntonym: '동의어: climb, rise, 반의어: descend',
    }),
    {
      definition: 'to climb or go up',
      wordDistractors: ['Descend', 'Transcend', 'Condescend'],
      definitionDistractors: [
        'to go or come down',
        'to move downward',
        'to fall or drop',
      ],
      exampleSentences: [
        { en: 'They ascended the mountain at dawn.', ko: '그들은 새벽에 산을 올랐다.' },
        { en: 'The balloon ascended into the clouds.', ko: '풍선이 구름 속으로 올라갔다.' },
      ],
    }
  ),
  word('Ascertain', '확인하다', 7, 'verb',
    ['추측하다', '가정하다', '모르다', '불명', '미확인', '추측', '추정', '가설', '의심', '불확'],
    tips({
      etymology: 'ad(향해) + cert(확실) + -ain -> 확실하게 만들다',
      visual: '사실을 확인하는 탐정',
      soundAlike: '애서테인 = 애서테인먼트(확인)',
      context: 'We need to ascertain the facts.',
      synonymAntonym: '동의어: determine, verify, 반의어: guess',
    }),
    {
      definition: 'to find out for certain',
      wordDistractors: ['Obtain', 'Retain', 'Abstain'],
      definitionDistractors: [
        'to form an opinion without proof',
        'to suppose without evidence',
        'to make an uncertain guess',
      ],
      exampleSentences: [
        { en: 'We need to ascertain the facts.', ko: '우리는 사실을 확인할 필요가 있다.' },
        { en: 'The police are trying to ascertain his whereabouts.', ko: '경찰은 그의 행방을 확인하려 하고 있다.' },
      ],
    }
  ),
  word('Aspire', '열망하다', 7, 'verb',
    ['포기하다', '체념하다', '단념하다', '포기', '단념', '체념', '먹다', '뛰다', '사랑하다', '열다'],
    tips({
      etymology: 'ad(향해) + spire(호흡) -> 숨을 뻗다',
      visual: '꿈을 향해 달리는 청년',
      soundAlike: '어스파이어 = 어스파이레이션(열망)',
      context: 'She aspires to become a doctor.',
      synonymAntonym: '동의어: desire, aim, 반의어: resign',
    }),
    {
      definition: 'to direct one\'s hopes toward achieving something',
      wordDistractors: ['Expire', 'Inspire', 'Perspire'],
      definitionDistractors: [
        'to give up hope or ambition',
        'to accept defeat',
        'to abandon a goal',
      ],
      exampleSentences: [
        { en: 'She aspires to become a doctor.', ko: '그녀는 의사가 되기를 열망한다.' },
        { en: 'He aspired to greatness from an early age.', ko: '그는 어릴 때부터 위대함을 열망했다.' },
      ],
    }
  ),
  word('Astute', '예리한', 7, 'adjective',
    ['우둔한', '둔한', '어리석은', '눈치없는', '바보', '어리석음', '둔감', '미숙', '둔함', '좋은'],
    tips({
      etymology: '라틴어 astus(교활함)에서 유래',
      visual: '세밀한 차이를 포착하는 눈',
      soundAlike: '어스튜트 = 어스튜트니스(예리함)',
      context: 'He made an astute observation.',
      synonymAntonym: '동의어: shrewd, perceptive, 반의어: dull',
    }),
    {
      definition: 'having or showing shrewd understanding',
      wordDistractors: ['Acute', 'Absolute', 'Resolute'],
      definitionDistractors: [
        'slow to understand',
        'lacking intelligence',
        'unable to perceive clearly',
      ],
      exampleSentences: [
        { en: 'He made an astute observation.', ko: '그는 예리한 관찰을 했다.' },
        { en: 'She is an astute businesswoman.', ko: '그녀는 예리한 여성 사업가이다.' },
      ],
    }
  ),
  word('Atrocity', '잔혹행위', 7, 'noun',
    ['자비', '인도', '선행', '자선', '착함', '친절', '은혜', '사과', '책', '고양이'],
    tips({
      etymology: '라틴어 atrox(잔인한)에서 유래',
      visual: '전쟁 범죄를 보여주는 기록 영상',
      soundAlike: '어트로시티 = 어트로시어스(잔혹한)',
      context: 'The regime committed numerous atrocities.',
      synonymAntonym: '동의어: brutality, horror, 반의어: kindness',
    }),
    {
      definition: 'an extremely wicked or cruel act',
      wordDistractors: ['Velocity', 'Ferocity', 'Tenacity'],
      definitionDistractors: [
        'compassion or mercy',
        'kind or generous act',
        'benevolent behavior',
      ],
      exampleSentences: [
        { en: 'The regime committed numerous atrocities.', ko: '그 정권은 수많은 잔혹행위를 저질렀다.' },
        { en: 'The war crimes were documented as atrocities.', ko: '전쟁 범죄는 잔혹행위로 기록되었다.' },
      ],
    }
  ),
  word('Audacious', '대담한', 7, 'adjective',
    ['소심한', '조심스러운', '수줍은', '겁많은', '소극적', '조심', '수줍음', '겁', '소극', '우유부단'],
    tips({
      etymology: '라틴어 audax(대담한)에서 유래',
      visual: '높은 곳에서 점프하는 등반가',
      soundAlike: '오데이셔스 = 오데이시티(대담)',
      context: 'It was an audacious plan.',
      synonymAntonym: '동의어: bold, daring, 반의어: timid',
    }),
    {
      definition: 'showing a willingness to take risks',
      wordDistractors: ['Capacious', 'Voracious', 'Spacious'],
      definitionDistractors: [
        'showing lack of courage',
        'cautious and reserved',
        'easily frightened',
      ],
      exampleSentences: [
        { en: 'It was an audacious plan.', ko: '그것은 대담한 계획이었다.' },
        { en: 'She made an audacious decision to quit and start over.', ko: '그녀는 대담한 결정을 내려 그만두고 다시 시작했다.' },
      ],
    }
  ),
  word('Austere', '엄격한', 7, 'adjective',
    ['관대한', '부드러운', '사치스러운', '호화', '여유', '관대', '낙관', '화려', '부드러움', '유연'],
    tips({
      etymology: '그리스어 austeros(뜨거운, 건조한)에서 유래',
      visual: '장식 없는 흰 벽의 방',
      soundAlike: '오스티어 = 오스터리티(엄격함)',
      context: 'He led an austere life.',
      synonymAntonym: '동의어: strict, severe, 반의어: luxurious',
    }),
    {
      definition: 'severe or strict in manner or appearance',
      wordDistractors: ['Severe', 'Sincere', 'Obscure'],
      definitionDistractors: [
        'generous or forgiving',
        'sumptuous and expensive',
        'comfortable and indulgent',
      ],
      exampleSentences: [
        { en: 'He led an austere life.', ko: '그는 엄격한 삶을 살았다.' },
        { en: 'The room had an austere décor.', ko: '그 방은 엄격한 인테리어를 갖고 있었다.' },
      ],
    }
  ),
  word('Autonomous', '자율적인', 7, 'adjective',
    ['종속적인', '의존적인', '예속된', '복종', '통제', '예속', '의존', '종속', '지배', '좋은'],
    tips({
      etymology: 'auto(스스로) + nomos(법) -> 스스로 법을 정함',
      visual: '스스로 주행하는 자동차',
      soundAlike: '오토노머스 = 오토노미(자율)',
      context: 'The region became autonomous.',
      synonymAntonym: '동의어: independent, self-governing, 반의어: dependent',
    }),
    {
      definition: 'having the freedom to act independently',
      wordDistractors: ['Anonymous', 'Automatic', 'Homonymous'],
      definitionDistractors: [
        'relying on another for support',
        'under control of another',
        'subordinate to external authority',
      ],
      exampleSentences: [
        { en: 'The region became autonomous.', ko: '그 지역은 자율적으로 되었다.' },
        { en: 'The department operates as an autonomous unit.', ko: '그 부서는 자율적인 단위로 운영된다.' },
      ],
    }
  ),
  word('Aversion', '혐오', 7, 'noun',
    ['선호', '사랑', '호감', '열망', '애호', '기호', '친화', '희구', '사과', '책'],
    tips({
      etymology: 'a(멀리) + vers(돌다) + -ion -> 돌아서 멀리함',
      visual: '거미를 피하는 사람의 표정',
      soundAlike: '어버전 = 어버트(피하다)',
      context: 'She has an aversion to spicy food.',
      synonymAntonym: '동의어: dislike, repulsion, 반의어: attraction',
    }),
    {
      definition: 'a strong dislike or disinclination',
      wordDistractors: ['Diversion', 'Conversion', 'Subversion'],
      definitionDistractors: [
        'a natural liking for something',
        'attraction or affinity',
        'desire or fondness',
      ],
      exampleSentences: [
        { en: 'She has an aversion to spicy food.', ko: '그녀는 매운 음식에 대한 혐오감이 있다.' },
        { en: 'His aversion to risk limited his options.', ko: '그의 위험에 대한 혐오가 그의 선택을 제한했다.' },
      ],
    }
  ),
];
