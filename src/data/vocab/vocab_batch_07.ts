import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch07: VocabItem[] = [
  word('Demand', '요구하다', 3, 'verb',
    ['양보하다', '포기하다', '무시하다', '거절하다', '제공하다', '수락하다', '기부하다', '감사하다', '칭찬하다', '허락하다'],
    tips({
      etymology: 'de(완전히) + mand(맡기다) -> 확실히 요구하다',
      visual: '손을 내밀어 요구하는 모습',
      soundAlike: '디맨드 = 디맨드 레터(요구서)',
      context: 'Customers demand better service.',
      synonymAntonym: '동의어: require, request, 반의어: supply',
    }),
    {
      definition: 'to ask for something forcefully or persistently',
      wordDistractors: ['Command', 'Remand', 'Reply'],
      definitionDistractors: [
        'to give up or surrender something',
        'to provide or supply something',
        'to accept or agree to something',
      ],
      exampleSentences: [
        { en: 'The workers demand higher wages.', ko: '노동자들은 임금 인상을 요구한다.' },
        { en: 'She demanded an explanation for the delay.', ko: '그녀는 지연에 대한 설명을 요구했다.' },
      ],
    }
  ),
  word('Demonstrate', '시연하다', 3, 'verb',
    ['숨기다', '은폐하다', '무시하다', '생략하다', '혼란시키다', '오해시키다', '거짓말하다', '위장하다', '가리다', '덮다'],
    tips({
      etymology: 'de(완전히) + monstr(보이다) -> 명확히 보여주다',
      visual: '제품 사용법을 보여주는 시연자',
      soundAlike: '데몬스트레이트 = 데몬스트레이션(시연)',
      context: 'Let me demonstrate how this works.',
      synonymAntonym: '동의어: show, prove, 반의어: hide',
    }),
    {
      definition: 'to show or prove something by giving evidence or performing an action',
      wordDistractors: ['Illustrate', 'Concentrate', 'Remonstrate'],
      definitionDistractors: [
        'to hide or conceal something from view',
        'to refuse or reject a request',
        'to confuse or mislead someone',
      ],
      exampleSentences: [
        { en: 'Let me demonstrate how this works.', ko: '이것이 어떻게 작동하는지 시연해 드리겠습니다.' },
        { en: 'The teacher demonstrated the experiment to the class.', ko: '선생님은 학급에 실험을 시연했다.' },
      ],
    }
  ),
  word('Depend', '의존하다', 3, 'verb',
    ['독립하다', '자립하다', '무시하다', '거절하다', '거부하다', '멈추다', '그만두다', '포기하다', '제외하다', '배제하다'],
    tips({
      etymology: 'de(아래로) + pend(매달리다) -> ~에 매달리다',
      visual: '부모에게 의지하는 아이',
      soundAlike: '디펜드 = 디펜던트(의존하는)',
      context: 'Success depends on hard work.',
      synonymAntonym: '동의어: rely, count on, 반의어: 독립',
    }),
    {
      definition: 'to rely on or be determined by someone or something',
      wordDistractors: ['Defend', 'Despend', 'Append'],
      definitionDistractors: [
        'to stand alone without support from others',
        'to refuse or reject something',
        'to stop or cease an activity',
      ],
      exampleSentences: [
        { en: 'Success depends on hard work.', ko: '성공은 노력에 달려 있다.' },
        { en: 'Children depend on their parents for support.', ko: '아이들은 부모에게 의존한다.' },
      ],
    }
  ),
  word('Deposit', '예금하다', 3, 'verb',
    ['인출하다', '빼다', '소비하다', '지출하다', '쓰다', '돌려주다', '반환하다', '기부하다', '보내다', '분배하다'],
    tips({
      etymology: 'de(아래로) + posit(놓다) -> 아래에 두다',
      visual: 'ATM에 돈을 넣는 손',
      soundAlike: '디포짓 = 디포짓 슬립(입금 영수증)',
      context: 'I need to deposit this check at the bank.',
      synonymAntonym: '동의어: place, put in, 반의어: withdraw',
    }),
    {
      definition: 'to put money into a bank account or place something for safekeeping',
      wordDistractors: ['Reposit', 'Position', 'Repose'],
      definitionDistractors: [
        'to take money out of a bank account',
        'to spend or use money',
        'to give something to charity',
      ],
      exampleSentences: [
        { en: 'I need to deposit this check at the bank.', ko: '은행에 이 수표를 예금해야 한다.' },
        { en: 'She deposited her savings in a new account.', ko: '그녀는 저축을 새 계좌에 예금했다.' },
      ],
    }
  ),
  word('Describe', '설명하다', 3, 'verb',
    ['숨기다', '오해시키다', '혼란시키다', '무시하다', '생략하다', '왜곡하다', '거짓말하다', '축소하다', '확대하다', '변형하다'],
    tips({
      etymology: 'de(아래로) + scribe(쓰다) -> 상세히 적다',
      visual: '말하면서 손으로 설명하는 사람',
      soundAlike: '디스크라이브 = 디스크립션(설명)',
      context: 'Can you describe what happened?',
      synonymAntonym: '동의어: explain, depict, 반의어: confuse',
    }),
    {
      definition: 'to give a detailed account or representation of something in words',
      wordDistractors: ['Subscribe', 'Prescribe', 'Inscribe'],
      definitionDistractors: [
        'to hide or conceal information',
        'to confuse or mislead someone',
        'to refuse to speak or answer',
      ],
      exampleSentences: [
        { en: 'Can you describe what happened?', ko: '무슨 일이 있었는지 설명해 줄 수 있나요?' },
        { en: 'He described the suspect to the police.', ko: '그는 경찰에게 용의자를 설명했다.' },
      ],
    }
  ),
  word('Design', '설계하다', 3, 'verb',
    ['파괴하다', '해체하다', '무시하다', '망각하다', '혼란시키다', '우연히', '무계획', '아무렇게나', '무작위', '임의로'],
    tips({
      etymology: 'de(강조) + sign(표시) -> 설계로 표시하다',
      visual: '디자인 도구로 그림을 그리는 손',
      soundAlike: '디자인 = 디자이너(설계자)',
      context: 'She designed the new logo.',
      synonymAntonym: '동의어: plan, create, 반의어: destroy',
    }),
    {
      definition: 'to plan and create something with a specific purpose or structure',
      wordDistractors: ['Resign', 'Assign', 'Consign'],
      definitionDistractors: [
        'to destroy or tear down something',
        'to ignore or pay no attention',
        'to do something by chance without planning',
      ],
      exampleSentences: [
        { en: 'She designed the new logo.', ko: '그녀는 새 로고를 설계했다.' },
        { en: 'He designs custom furniture for clients.', ko: '그는 고객을 위해 맞춤 가구를 설계한다.' },
      ],
    }
  ),
  word('Desire', '욕구', 3, 'noun',
    ['혐오', '무관심', '포기', '만족', '충분', '냉담', '무의욕', '회피', '거부', '거절'],
    tips({
      etymology: 'de(완전히) + sire(별) -> 별을 바라보다',
      visual: '눈을 반짝이며 원하는 것을 바라보는 모습',
      soundAlike: '디자이어 = 디자이어블(바람직한)',
      context: 'He has a strong desire to succeed.',
      synonymAntonym: '동의어: wish, want, 반의어: disgust',
    }),
    {
      definition: 'a strong feeling of wanting or wishing for something',
      wordDistractors: ['Dessert', 'Desert', 'Discrete'],
      definitionDistractors: [
        'a feeling of disgust or strong dislike',
        'a state of being satisfied with what one has',
        'a lack of interest or concern',
      ],
      exampleSentences: [
        { en: 'He has a strong desire to succeed.', ko: '그는 성공에 대한 강한 욕구가 있다.' },
        { en: 'Her desire for knowledge led her to study abroad.', ko: '지식에 대한 욕구가 그녀를 유학하게 했다.' },
      ],
    }
  ),
  word('Destroy', '파괴하다', 3, 'verb',
    ['건설하다', '보존하다', '수리하다', '복구하다', '보호하다', '만들다', '창조하다', '지키다', '유지하다', '재건하다'],
    tips({
      etymology: 'de(제거) + struct(쌓다) -> 쌓인 것을 무너뜨리다',
      visual: '무너지는 건물',
      soundAlike: '디스트로이 = 디스트럭션(파괴)',
      context: 'The fire destroyed the entire building.',
      synonymAntonym: '동의어: ruin, demolish, 반의어: build',
    }),
    {
      definition: 'to damage something so badly that it no longer exists or works',
      wordDistractors: ['Destruct', 'Distrust', 'Restore'],
      definitionDistractors: [
        'to construct or build something',
        'to protect or keep something safe',
        'to repair or fix something broken',
      ],
      exampleSentences: [
        { en: 'The fire destroyed the entire building.', ko: '불이 건물 전체를 파괴했다.' },
        { en: 'The storm destroyed many homes in the area.', ko: '폭풍이 이 지역의 많은 집을 파괴했다.' },
      ],
    }
  ),
  word('Detail', '세부사항', 3, 'noun',
    ['개요', '대략', '요약', '전체', '틀', '골격', '줄거리', '개관', '요지', '개념'],
    tips({
      etymology: 'de(완전히) + tail(자르다) -> 잘게 나눈 조각',
      visual: '확대경으로 자세히 보는 모습',
      soundAlike: '디테일 = 디테일드(상세한)',
      context: 'Please provide more details.',
      synonymAntonym: '동의어: particular, item, 반의어: summary',
    }),
    {
      definition: 'an individual fact or piece of information about something',
      wordDistractors: ['Retail', 'Derail', 'Entail'],
      definitionDistractors: [
        'a brief summary or overview of something',
        'the main idea or general concept',
        'a rough outline without specifics',
      ],
      exampleSentences: [
        { en: 'Please provide more details.', ko: '더 많은 세부사항을 제공해 주세요.' },
        { en: 'The contract includes every detail of the agreement.', ko: '계약서에는 합의의 모든 세부사항이 포함되어 있다.' },
      ],
    }
  ),
  word('Detect', '탐지하다', 3, 'verb',
    ['놓치다', '무시하다', '숨기다', '오해하다', '혼동하다', '거짓말하다', '둔감하다', '모르다', '피하다', '회피하다'],
    tips({
      etymology: 'de(제거) + tect(덮다) -> 덮개를 제거하고 발견하다',
      visual: '금속 탐지기로 무엇인가를 찾는 모습',
      soundAlike: '디텍트 = 디텍션(탐지)',
      context: 'The test can detect the virus early.',
      synonymAntonym: '동의어: discover, find, 반의어: miss',
    }),
    {
      definition: 'to discover or identify the presence of something',
      wordDistractors: ['Protect', 'Select', 'Deflect'],
      definitionDistractors: [
        'to fail to notice or perceive something',
        'to hide or conceal something',
        'to ignore or pay no attention',
      ],
      exampleSentences: [
        { en: 'The test can detect the virus early.', ko: '이 검사는 바이러스를 조기에 탐지할 수 있다.' },
        { en: 'Detectives detected a flaw in the suspect alibi.', ko: '형사들은 용의자 알리바이의 허점을 탐지했다.' },
      ],
    }
  ),
  word('Determine', '결정하다', 3, 'verb',
    ['망설이다', '회피하다', '무시하다', '포기하다', '우유부단', '미결정', '기권하다', '양보하다', '변경하다', '바꾸다'],
    tips({
      etymology: 'de(완전히) + termin(끝) -> 경계를 확정하다',
      visual: '체크박스에 체크하는 결정적인 손',
      soundAlike: '디터민 = 디터미네이션(결정)',
      context: 'We must determine the best approach.',
      synonymAntonym: '동의어: decide, resolve, 반의어: waver',
    }),
    {
      definition: 'to cause something to occur in a particular way or establish something conclusively',
      wordDistractors: ['Exterminate', 'Predetermine', 'Terminate'],
      definitionDistractors: [
        'to hesitate or be indecisive',
        'to avoid or evade making a choice',
        'to change one\'s mind frequently',
      ],
      exampleSentences: [
        { en: 'We must determine the best approach.', ko: '우리는 최선의 접근 방식을 결정해야 한다.' },
        { en: 'The jury will determine the verdict.', ko: '배심원들이 선고를 결정할 것이다.' },
      ],
    }
  ),
  word('Develop', '발전시키다', 3, 'verb',
    ['퇴보하다', '쇠퇴하다', '퇴화하다', '퇴락하다', '축소하다', '감소하다', '파괴하다', '무시하다', '방치하다', '정체하다'],
    tips({
      etymology: 'de(완전히) + velop(말다) -> 말아둔 것을 펼치다',
      visual: '땅에 서서히 자라는 새싹',
      soundAlike: '디벨롭 = 디벨롭먼트(발전)',
      context: 'Children develop at different rates.',
      synonymAntonym: '동의어: grow, evolve, 반의어: decline',
    }),
    {
      definition: 'to grow or cause to grow and become more advanced',
      wordDistractors: ['Envelope', 'Devolve', 'Evolve'],
      definitionDistractors: [
        'to decline or become worse',
        'to shrink or reduce in size',
        'to ignore or neglect something',
      ],
      exampleSentences: [
        { en: 'Children develop at different rates.', ko: '아이들은 다양한 속도로 발달한다.' },
        { en: 'The company is developing a new product.', ko: '회사는 새 제품을 개발하고 있다.' },
      ],
    }
  ),
  word('Device', '장치', 3, 'noun',
    ['수동', '인력', '자연', '원시', '기본', '간단', '도구 없음', '맨손', '무기', '기계'],
    tips({
      etymology: 'de(나누다) + vice(대신) -> 대신 일하는 것',
      visual: '스마트폰과 태블릿',
      soundAlike: '디바이스 = 디바이스 드라이버',
      context: 'This device connects to Wi-Fi.',
      synonymAntonym: '동의어: apparatus, gadget',
    }),
    {
      definition: 'an object or machine made for a particular purpose',
      wordDistractors: ['Advice', 'Devise', 'Vice'],
      definitionDistractors: [
        'a person who invents or creates something',
        'a plan or method for doing something',
        'a suggestion or recommendation',
      ],
      exampleSentences: [
        { en: 'This device connects to Wi-Fi.', ko: '이 장치는 와이파이에 연결된다.' },
        { en: 'He invented a new device to save energy.', ko: '그는 에너지를 절약하는 새 장치를 발명했다.' },
      ],
    }
  ),
  word('Devote', '헌신하다', 3, 'verb',
    ['소홀히 하다', '무시하다', '포기하다', '거절하다', '회피하다', '게을리하다', '방치하다', '냉담히', '무관심', '기권하다'],
    tips({
      etymology: 'de(완전히) + vote(바치다) -> 완전히 바치다',
      visual: '실험실에 밤새 연구하는 과학자',
      soundAlike: '디보트 = 디보티드(헌신적인)',
      context: 'She devoted her life to helping others.',
      synonymAntonym: '동의어: dedicate, commit, 반의어: neglect',
    }),
    {
      definition: 'to give one\'s time or energy entirely to a person or activity',
      wordDistractors: ['Devote', 'Revote', 'Devout'],
      definitionDistractors: [
        'to ignore or pay little attention to',
        'to avoid or refuse to do something',
        'to give up or abandon a commitment',
      ],
      exampleSentences: [
        { en: 'She devoted her life to helping others.', ko: '그녀는 남을 돕는 데 평생을 헌신했다.' },
        { en: 'He devotes two hours daily to exercise.', ko: '그는 매일 2시간을 운동에 헌신한다.' },
      ],
    }
  ),
  word('Diet', '식이요법', 3, 'noun',
    ['폭식', '과식', '편식', '무절제', '야식', '당분', '기름진', '무계획', '무제한', '방치'],
    tips({
      etymology: '그리스어 diaita(생활 방식)에서 유래',
      visual: '채소와 과일이 담긴 식판',
      soundAlike: '다이어트 = 다이어트 플랜',
      context: 'A balanced diet is important for health.',
      synonymAntonym: '동의어: nourishment, eating plan',
    }),
    {
      definition: 'the kinds of food that a person or animal habitually eats',
      wordDistractors: ['Duel', 'Dire', 'Dieted'],
      definitionDistractors: [
        'a formal meeting for discussion',
        'a written document of laws or rules',
        'a person who makes laws',
      ],
      exampleSentences: [
        { en: 'A balanced diet is important for health.', ko: '균형 잡힌 식이요법은 건강에 중요하다.' },
        { en: 'She started a new diet to lose weight.', ko: '그녀는 체중을 줄이기 위해 새로운 식이요법을 시작했다.' },
      ],
    }
  ),
  word('Differ', '다르다', 3, 'verb',
    ['같다', '일치하다', '동일하다', '유사하다', '비슷하다', '동의하다', '합치다', '맞다', '같아지다', '융합하다'],
    tips({
      etymology: 'dis(떨어져) + fer(나르다) -> 다른 쪽으로 나르다',
      visual: '두 개의 다른 방향을 가리키는 화살표',
      soundAlike: '디퍼 = 디퍼런스(차이)',
      context: 'Opinions differ on this matter.',
      synonymAntonym: '동의어: vary, disagree, 반의어: agree',
    }),
    {
      definition: 'to be unlike or dissimilar',
      wordDistractors: ['Defer', 'Suffer', 'Offer'],
      definitionDistractors: [
        'to be the same or identical',
        'to agree or concur with someone',
        'to match or correspond exactly',
      ],
      exampleSentences: [
        { en: 'Opinions differ on this matter.', ko: '이 문제에 대한 의견이 다르다.' },
        { en: 'Their approaches differ significantly.', ko: '그들의 접근 방식은 크게 다르다.' },
      ],
    }
  ),
  word('Difficulty', '어려움', 3, 'noun',
    ['쉬움', '손쉬움', '순조', '편안', '여유', '간편', '수월', '가벼움', '단순', '평탄'],
    tips({
      etymology: 'difficult(어려운) + -y -> 어려운 상태',
      visual: '가파른 산을 오르는 등산객',
      soundAlike: '디피컬티 = 디피컬트(어려운)',
      context: 'She had difficulty understanding the instructions.',
      synonymAntonym: '동의어: hardship, trouble, 반의어: ease',
    }),
    {
      definition: 'the state or condition of being hard to do or understand',
      wordDistractors: ['Simplicity', 'Facility', 'Utility'],
      definitionDistractors: [
        'the state of being easy or simple',
        'the quality of being flexible',
        'the ability to do something well',
      ],
      exampleSentences: [
        { en: 'She had difficulty understanding the instructions.', ko: '그녀는 설명을 이해하는 데 어려움이 있었다.' },
        { en: 'The project faced many difficulties.', ko: '프로젝트는 많은 어려움에 직면했다.' },
      ],
    }
  ),
  word('Dig', '파다', 3, 'verb',
    ['메우다', '덮다', '닫다', '묻다', '숨기다', '매립하다', '포장하다', '쌓다', '올리다', '건설하다'],
    tips({
      etymology: '고대 영어 diggen(굴을 파다)에서 유래',
      visual: '삽으로 땅을 파는 사람',
      soundAlike: '디그 = 디그 업(파내다)',
      context: 'They had to dig through the snow.',
      synonymAntonym: '동의어: excavate, shovel, 반의어: fill',
    }),
    {
      definition: 'to break up and move earth with a tool or machine',
      wordDistractors: ['Big', 'Rig', 'Jig'],
      definitionDistractors: [
        'to fill in a hole or cavity',
        'to cover or hide something',
        'to build or construct something',
      ],
      exampleSentences: [
        { en: 'They had to dig through the snow.', ko: '그들은 눈을 파고 나가야 했다.' },
        { en: 'The dog likes to dig in the garden.', ko: '개는 정원에서 파는 것을 좋아한다.' },
      ],
    }
  ),
  word('Digital', '디지털의', 3, 'adjective',
    ['아날로그', '수동', '손으로', '기계식', '물리적', '실제', '종이', '필기', '손글씨', '전통적'],
    tips({
      etymology: 'digit(숫자) + -al -> 숫자로 표현된',
      visual: '0과 1이 나열된 디지털 화면',
      soundAlike: '디지털 = 디지털 트랜스포메이션',
      context: 'We live in a digital age.',
      synonymAntonym: '동의어: computerized, electronic, 반의어: analog',
    }),
    {
      definition: 'using or relating to electronic technology that stores data as numbers',
      wordDistractors: ['Fatal', 'Local', 'Vital'],
      definitionDistractors: [
        'using continuous physical quantities rather than numbers',
        'done by hand without machines',
        'existing in the physical world',
      ],
      exampleSentences: [
        { en: 'We live in a digital age.', ko: '우리는 디지털 시대에 산다.' },
        { en: 'Most cameras are now digital.', ko: '대부분의 카메라는 이제 디지털이다.' },
      ],
    }
  ),
  word('Direct', '직접적인', 3, 'adjective',
    ['간접적인', '우회적', '애매한', '돌려말한', '숨은', '은밀한', '암시적', '완곡한', '말장난', '모호한'],
    tips({
      etymology: 'di(분리) + rect(똑바로) -> 직선으로',
      visual: 'A에서 B로 뻗은 직선 화살표',
      soundAlike: '다이렉트 = 다이렉션(방향)',
      context: 'Please give me a direct answer.',
      synonymAntonym: '동의어: straight, immediate, 반의어: indirect',
    }),
    {
      definition: 'going straight to the point without deviation or evasion',
      wordDistractors: ['Perfect', 'Correct', 'Elect'],
      definitionDistractors: [
        'not straightforward or explicit',
        'implied rather than stated',
        'unclear or ambiguous',
      ],
      exampleSentences: [
        { en: 'Please give me a direct answer.', ko: '직접적인 답변을 해 주세요.' },
        { en: 'He took a direct flight to Seoul.', ko: '그는 서울로 직항편을 탔다.' },
      ],
    }
  ),
  word('Disappear', '사라지다', 3, 'verb',
    ['나타나다', '나오다', '등장하다', '출현하다', '보이다', '존재하다', '남다', '잔존하다', '유지하다', '고정되다'],
    tips({
      etymology: 'dis(부정) + appear(나타나다) -> 나타나지 않다',
      visual: '마술로 사라지는 토끼',
      soundAlike: '디스어피어 = 디스어피어런스(실종)',
      context: 'The sun disappeared behind the clouds.',
      synonymAntonym: '동의어: vanish, fade, 반의어: appear',
    }),
    {
      definition: 'to cease to be visible or to exist',
      wordDistractors: ['Reappear', 'Appear', 'Disband'],
      definitionDistractors: [
        'to come into view or become visible',
        'to stay in the same place',
        'to persist or continue existing',
      ],
      exampleSentences: [
        { en: 'The sun disappeared behind the clouds.', ko: '태양이 구름 뒤로 사라졌다.' },
        { en: 'The magician made the rabbit disappear.', ko: '마술사는 토끼를 사라지게 했다.' },
      ],
    }
  ),
  word('Disappoint', '실망시키다', 3, 'verb',
    ['만족시키다', '기쁘게 하다', '기대에 부응', '성취시키다', '칭찬하다', '감사하다', '보상하다', '보답하다', '성공시키다', '달성시키다'],
    tips({
      etymology: 'dis(부정) + appoint(지명하다) -> 기대를 어긋나게 하다',
      visual: '슬픈 표정으로 고개를 숙인 사람',
      soundAlike: '디스어포인트 = 디스어포인티드(실망한)',
      context: 'I hope I did not disappoint you.',
      synonymAntonym: '동의어: let down, fail, 반의어: satisfy',
    }),
    {
      definition: 'to fail to fulfill the hopes or expectations of someone',
      wordDistractors: ['Appoint', 'Anoint', 'Disport'],
      definitionDistractors: [
        'to fulfill expectations or please someone',
        'to exceed expectations greatly',
        'to encourage or support someone',
      ],
      exampleSentences: [
        { en: 'I hope I did not disappoint you.', ko: '실망시켜 드리지 않았기를 바랍니다.' },
        { en: 'The movie disappointed audiences.', ko: '그 영화는 관객들을 실망시켰다.' },
      ],
    }
  ),
  word('Discover', '발견하다', 3, 'verb',
    ['놓치다', '잃다', '숨기다', '은폐하다', '무시하다', '오해하다', '거짓말하다', '위장하다', '덮다', '감추다'],
    tips({
      etymology: 'dis(제거) + cover(덮다) -> 덮개를 제거하다',
      visual: '지도에서 새 대륙을 발견하는 탐험가',
      soundAlike: '디스커버 = 디스커버리(발견)',
      context: 'Scientists discovered a new species.',
      synonymAntonym: '동의어: find, uncover, 반의어: hide',
    }),
    {
      definition: 'to find something for the first time or learn something previously unknown',
      wordDistractors: ['Recover', 'Uncover', 'Discern'],
      definitionDistractors: [
        'to fail to find or notice something',
        'to hide or conceal something',
        'to lose or misplace something',
      ],
      exampleSentences: [
        { en: 'Scientists discovered a new species.', ko: '과학자들이 새 종을 발견했다.' },
        { en: 'She discovered a talent for painting.', ko: '그녀는 화가의 재능을 발견했다.' },
      ],
    }
  ),
  word('Discuss', '논의하다', 3, 'verb',
    ['침묵하다', '무시하다', '회피하다', '거절하다', '단독 결정', '일방통행', '무시', '생략', '회피', '회피하다'],
    tips({
      etymology: 'dis(분리) + cuss(두드리다) -> 의견을 부딪치다',
      visual: '회의실에서 논의하는 사람들',
      soundAlike: '디스커스 = 디스커션(논의)',
      context: 'We need to discuss the budget.',
      synonymAntonym: '동의어: talk about, debate, 반의어: ignore',
    }),
    {
      definition: 'to talk about a subject in detail with someone',
      wordDistractors: ['Disgust', 'Distrust', 'Discus'],
      definitionDistractors: [
        'to refuse to speak or communicate',
        'to ignore or pay no attention',
        'to avoid talking about something',
      ],
      exampleSentences: [
        { en: 'We need to discuss the budget.', ko: '예산에 대해 논의해야 한다.' },
        { en: 'They discussed the plan over lunch.', ko: '그들은 점심을 먹으며 계획을 논의했다.' },
      ],
    }
  ),
  word('Disease', '질병', 3, 'noun',
    ['건강', '웰빙', '강건', '튼튼함', '활력', '무병', '회복', '치유', '예방', '보건'],
    tips({
      etymology: 'dis(부정) + ease(편안) -> 편안하지 않음',
      visual: '체온계와 약을 들고 있는 손',
      soundAlike: '디지즈 = 디지즈드(병든)',
      context: 'The disease spread rapidly.',
      synonymAntonym: '동의어: illness, disorder, 반의어: health',
    }),
    {
      definition: 'a disorder of structure or function that affects the body',
      wordDistractors: ['Decease', 'Decrease', 'Release'],
      definitionDistractors: [
        'the state of being free from illness',
        'a medicine or treatment that cures',
        'a period of rest and recovery',
      ],
      exampleSentences: [
        { en: 'The disease spread rapidly.', ko: '질병이 빠르게 퍼졌다.' },
        { en: 'Early detection can prevent the disease.', ko: '조기 발견으로 질병을 예방할 수 있다.' },
      ],
    }
  ),
  word('Display', '전시하다', 3, 'verb',
    ['숨기다', '은닉하다', '감추다', '제거하다', '정리하다', '포장하다', '덮다', '가리다', '봉인하다', '밀봉하다'],
    tips({
      etymology: 'dis(펼치다) + play(접다) -> 펼쳐 놓다',
      visual: '백화점 진열장에 전시된 상품',
      soundAlike: '디스플레이 = 디스플레이 스크린',
      context: 'The museum displays ancient artifacts.',
      synonymAntonym: '동의어: show, exhibit, 반의어: hide',
    }),
    {
      definition: 'to put something in a prominent place for people to see',
      wordDistractors: ['Misplay', 'Replay', 'Splay'],
      definitionDistractors: [
        'to hide or conceal from view',
        'to remove or take away',
        'to pack or wrap something',
      ],
      exampleSentences: [
        { en: 'The museum displays ancient artifacts.', ko: '박물관은 고대 유물을 전시한다.' },
        { en: 'She displayed her artwork at the gallery.', ko: '그녀는 갤러리에서 자신의 작품을 전시했다.' },
      ],
    }
  ),
  word('Distance', '거리', 3, 'noun',
    ['근접', '가까움', '인접', '밀접', '접촉', '닿음', '붙음', '접근', '즉시', '순간'],
    tips({
      etymology: 'dis(떨어져) + stant(서다) -> 떨어져 있는 정도',
      visual: '두 점 사이를 잇는 측정선',
      soundAlike: '디스턴스 = 롱 디스턴스(장거리)',
      context: 'What is the distance to the airport?',
      synonymAntonym: '동의어: span, gap, 반의어: proximity',
    }),
    {
      definition: 'the amount of space between two points or places',
      wordDistractors: ['Instance', 'Existence', 'Resistance'],
      definitionDistractors: [
        'the state of being close or near',
        'the quality of being present',
        'the act of moving toward something',
      ],
      exampleSentences: [
        { en: 'What is the distance to the airport?', ko: '공항까지 거리가 얼마나 되나요?' },
        { en: 'He ran a long distance yesterday.', ko: '그는 어제 먼 거리를 달렸다.' },
      ],
    }
  ),
  word('Distribute', '분배하다', 4, 'verb',
    ['모으다', '집중하다', '축적하다', '보관하다', '독점하다', '흡수하다', '빨아들이다', '수집하다', '합치다', '통합하다'],
    tips({
      etymology: 'dis(나누어) + tribute(나누다) -> 여러 곳에 나누다',
      visual: '선물을 여러 사람에게 나누어 주는 모습',
      soundAlike: '디스트리뷰트 = 디스트리뷰션(분배)',
      context: 'Volunteers will distribute food to those in need.',
      synonymAntonym: '동의어: allocate, spread, 반의어: collect',
    }),
    {
      definition: 'to give shares of something to a number of people',
      wordDistractors: ['Contribute', 'Attribute', 'Retribute'],
      definitionDistractors: [
        'to gather or bring together',
        'to keep or store in one place',
        'to take exclusive control of',
      ],
      exampleSentences: [
        { en: 'Volunteers will distribute food to those in need.', ko: '자원봉사자들이 필요로 하는 사람들에게 음식을 분배할 것이다.' },
        { en: 'The company distributes products nationwide.', ko: '회사는 전국에 제품을 분배한다.' },
      ],
    }
  ),
  word('Divide', '나누다', 4, 'verb',
    ['합치다', '통합하다', '곱하다', '모으다', '연결하다', '결합하다', '융합하다', '합류하다', '묶다', '통일하다'],
    tips({
      etymology: 'di(두 개로) + vide(나누다) -> 둘로 나누다',
      visual: '케이크를 여러 조각으로 나누는 손',
      soundAlike: '디바이드 = 디비전(분할)',
      context: 'Divide the class into two groups.',
      synonymAntonym: '동의어: split, separate, 반의어: unite',
    }),
    {
      definition: 'to separate or split something into parts',
      wordDistractors: ['Provide', 'Subdivide', 'Collide'],
      definitionDistractors: [
        'to join or combine together',
        'to multiply numbers',
        'to gather in one place',
      ],
      exampleSentences: [
        { en: 'Divide the class into two groups.', ko: '반을 두 그룹으로 나누어라.' },
        { en: 'Six divided by two equals three.', ko: '6을 2로 나누면 3이 된다.' },
      ],
    }
  ),
  word('Double', '두 배의', 4, 'adjective',
    ['절반', '반쪽', '단일', '단독', '하나', '일부', '소수', '미미', '적음', '감소'],
    tips({
      etymology: '라틴어 duplus(두 개의)에서 유래',
      visual: '2x로 표시된 배가 표시',
      soundAlike: '더블 = 더블 체크(이중 확인)',
      context: 'The price has doubled in two years.',
      synonymAntonym: '동의어: twice, duplicate, 반의어: half',
    }),
    {
      definition: 'twice as much or as many',
      wordDistractors: ['Trouble', 'Bubble', 'Noble'],
      definitionDistractors: [
        'half the amount or quantity',
        'a single unit or instance',
        'less than the original amount',
      ],
      exampleSentences: [
        { en: 'The price has doubled in two years.', ko: '가격이 2년 만에 두 배가 되었다.' },
        { en: 'She ordered a double espresso.', ko: '그녀는 더블 에스프레소를 주문했다.' },
      ],
    }
  ),
  word('Doubt', '의심', 4, 'noun',
    ['확신', '믿음', '신뢰', '자신감', '확정', '단정', '논란 없음', '명확', '틀림없음', '입증'],
    tips({
      etymology: '라틴어 dubitare(흔들다)에서 유래',
      visual: '머리를 갸웃거리는 의심스러운 표정',
      soundAlike: '다우트 = 다우트풀(의심스러운)',
      context: 'There is no doubt that she will succeed.',
      synonymAntonym: '동의어: uncertainty, suspicion, 반의어: certainty',
    }),
    {
      definition: 'a feeling of uncertainty or lack of conviction',
      wordDistractors: ['Dough', 'Bout', 'Shout'],
      definitionDistractors: [
        'complete confidence in something',
        'firm belief in the truth of something',
        'proof or evidence of truth',
      ],
      exampleSentences: [
        { en: 'There is no doubt that she will succeed.', ko: '그녀가 성공할 것이라는 데 의심의 여지가 없다.' },
        { en: 'He had doubts about the proposal.', ko: '그는 제안에 대해 의심이 있었다.' },
      ],
    }
  ),
  word('Draft', '초안', 4, 'noun',
    ['정본', '완성본', '최종', '인쇄본', '공식', '확정', '출판', '게시', '공개', '완결'],
    tips({
      etymology: '드래그하다(draw)에서 유래, 끌어쓰다',
      visual: '연필로 쓰인 수정 흔적이 있는 문서',
      soundAlike: '드래프트 = 드래프트 버전',
      context: 'I am working on the first draft of my essay.',
      synonymAntonym: '동의어: outline, sketch, 반의어: final',
    }),
    {
      definition: 'a preliminary version of a document or piece of writing',
      wordDistractors: ['Craft', 'Graft', 'Shaft'],
      definitionDistractors: [
        'the final version of a document',
        'a formal request for something',
        'a written record of a meeting',
      ],
      exampleSentences: [
        { en: 'I am working on the first draft of my essay.', ko: '나는 에세이의 첫 초안을 작성하고 있다.' },
        { en: 'She revised the draft several times.', ko: '그녀는 초안을 여러 번 수정했다.' },
      ],
    }
  ),
  word('Drag', '끌다', 4, 'verb',
    ['밀다', '들다', '올리다', '던지다', '날다', '뛰다', '달리다', '가볍게', '떠다', '부유하다'],
    tips({
      etymology: '고대 영어 dragan(끌다)에서 유래',
      visual: '바닥에 끌려가는 무거운 상자',
      soundAlike: '드래그 = 드래그 앤 드롭',
      context: 'Do not drag your feet on the floor.',
      synonymAntonym: '동의어: pull, haul, 반의어: push',
    }),
    {
      definition: 'to pull something along the ground with effort',
      wordDistractors: ['Brag', 'Crag', 'Flag'],
      definitionDistractors: [
        'to exert force to move something away',
        'to lift or raise something up',
        'to throw something with force',
      ],
      exampleSentences: [
        { en: 'Do not drag your feet on the floor.', ko: '바닥에서 발을 끌지 마라.' },
        { en: 'They had to drag the heavy sofa across the room.', ko: '그들은 무거운 소파를 방 안으로 끌어와야 했다.' },
      ],
    }
  ),
  word('Drama', '드라마', 4, 'noun',
    ['코미디', '다큐', '뉴스', '광고', '다큐멘터리', '예능', '스포츠', '평화', '일상', '무사건'],
    tips({
      etymology: '그리스어 drama(행하다)에서 유래',
      visual: '무대 위에서 연기하는 배우들',
      soundAlike: '드라마 = 드라마틱(극적인)',
      context: 'She is a big fan of Korean drama.',
      synonymAntonym: '동의어: theater, play',
    }),
    {
      definition: 'a play for theater, radio, or television, especially a serious one',
      wordDistractors: ['Trauma', 'Comma', 'Llama'],
      definitionDistractors: [
        'a funny performance intended to make people laugh',
        'a factual film or program',
        'a sporting event or competition',
      ],
      exampleSentences: [
        { en: 'She is a big fan of Korean drama.', ko: '그녀는 한국 드라마를 매우 좋아한다.' },
        { en: 'The drama won several awards.', ko: '그 드라마는 여러 상을 받았다.' },
      ],
    }
  ),
  word('Drawer', '서랍', 4, 'noun',
    ['문', '덮개', '캐비닛', '선반', '바닥', '천장', '벽', '바깥', '표면', '상판'],
    tips({
      etymology: 'draw(당기다) + -er -> 당겨서 여는 것',
      visual: '책상에서 당겨져 나온 서랍',
      soundAlike: '드로어 = 드로어 오브(서랍)',
      context: 'Put the papers in the top drawer.',
      synonymAntonym: '동의어: compartment, tray',
    }),
    {
      definition: 'a box-shaped storage compartment that slides in and out of furniture',
      wordDistractors: ['Draw', 'Drier', 'Drawn'],
      definitionDistractors: [
        'a flat horizontal surface for storage',
        'a hinged barrier for closing an opening',
        'the top surface of a table',
      ],
      exampleSentences: [
        { en: 'Put the papers in the top drawer.', ko: '서류를 맨 위 서랍에 넣어라.' },
        { en: 'I found the key in the bottom drawer.', ko: '나는 맨 아래 서랍에서 열쇠를 찾았다.' },
      ],
    }
  ),
  word('Due', '예정된', 4, 'adjective',
    ['지연된', '늦은', '조기', '완료된', '취소된', '미정', '불확실', '무기한', '보류', '연기'],
    tips({
      etymology: '라틴어 debitus(빚진)에서 유래',
      visual: '달력에 표시된 마감일',
      soundAlike: '듀 = 듀 데이트(기한)',
      context: 'Your report is due next Monday.',
      synonymAntonym: '동의어: scheduled, owing, 반의어: overdue',
    }),
    {
      definition: 'expected or planned to happen at a particular time',
      wordDistractors: ['Dew', 'Duel', 'Duke'],
      definitionDistractors: [
        'past the expected or required time',
        'cancelled or no longer valid',
        'not yet decided or fixed',
      ],
      exampleSentences: [
        { en: 'Your report is due next Monday.', ko: '보고서는 다음 월요일에 제출 예정이다.' },
        { en: 'The payment is due at the end of the month.', ko: '결제는 월말에 예정되어 있다.' },
      ],
    }
  ),
  word('Dust', '먼지', 4, 'noun',
    ['청결', '광택', '정화', '수분', '습기', '진공', '무균', '소독', '깨끗함', '반짝임'],
    tips({
      etymology: '고대 영어 dust(먼지)에서 유래',
      visual: '햇빛에 비친 공중의 먼지 입자',
      soundAlike: '더스트 = 더스티(먼지 많은)',
      context: 'The old books were covered in dust.',
      synonymAntonym: '동의어: dirt, particles',
    }),
    {
      definition: 'fine dry powder consisting of tiny particles of earth or waste matter',
      wordDistractors: ['Rust', 'Must', 'Bust'],
      definitionDistractors: [
        'the state of being clean and free of dirt',
        'a thin layer of water on a surface',
        'a clear liquid with no color',
      ],
      exampleSentences: [
        { en: 'The old books were covered in dust.', ko: '낡은 책들이 먼지로 덮여 있었다.' },
        { en: 'She wiped the dust off the shelves.', ko: '그녀는 선반에서 먼지를 닦아냈다.' },
      ],
    }
  ),
  word('Duty', '의무', 4, 'noun',
    ['자유', '선택', '의지', '무책임', '방임', '면제', '해제', '면역', '면제권', '권리'],
    tips({
      etymology: 'due(마땅한) + -ty -> 마땅히 해야 할 것',
      visual: '경례하는 군인의 모습',
      soundAlike: '듀티 = 듀티 프리(세금 면제)',
      context: 'It is our duty to help those in need.',
      synonymAntonym: '동의어: obligation, responsibility, 반의어: freedom',
    }),
    {
      definition: 'a moral or legal obligation to do something',
      wordDistractors: ['Beauty', 'Safety', 'Pity'],
      definitionDistractors: [
        'the power to act without constraint',
        'something one may choose to do',
        'freedom from duty or obligation',
      ],
      exampleSentences: [
        { en: 'It is our duty to help those in need.', ko: '도움이 필요한 사람을 돕는 것은 우리의 의무이다.' },
        { en: 'He is on duty until midnight.', ko: '그는 자정까지 근무 중이다.' },
      ],
    }
  ),
  word('Eager', '열심인', 4, 'adjective',
    ['무관심한', '냉담한', '게으른', '느긋한', '소극적', '주저하는', '마지못한', '지루해하는', '피곤한', '권태로운'],
    tips({
      etymology: '라틴어 acer(날카로운)에서 유래, 마음이 날카롭게 반응함',
      visual: '손을 들고 대답하려는 학생',
      soundAlike: '이거 = 이거니스(열심)',
      context: 'She was eager to learn something new.',
      synonymAntonym: '동의어: enthusiastic, keen, 반의어: indifferent',
    }),
    {
      definition: 'strongly wanting to do or have something',
      wordDistractors: ['Eagle', 'Elder', 'Eater'],
      definitionDistractors: [
        'showing no interest or concern',
        'unwilling or reluctant to act',
        'tired and lacking energy',
      ],
      exampleSentences: [
        { en: 'She was eager to learn something new.', ko: '그녀는 새로운 것을 배우고 싶어 했다.' },
        { en: 'The team was eager to start the project.', ko: '팀은 프로젝트를 시작하기를 열망했다.' },
      ],
    }
  ),
  word('Earn', '벌다', 4, 'verb',
    ['쓰다', '지출하다', '잃다', '기부하다', '낭비하다', '돈이 나다', '빚지다', '받다', '선물받다', '상속받다'],
    tips({
      etymology: '고대 영어 earnian(수고의 대가)에서 유래',
      visual: '급여 명세서를 받는 손',
      soundAlike: '얼른 = 얼닝스(소득)',
      context: 'She earns a good salary.',
      synonymAntonym: '동의어: gain, make money, 반의어: spend',
    }),
    {
      definition: 'to receive money in return for work or services',
      wordDistractors: ['Learn', 'Yearn', 'Turn'],
      definitionDistractors: [
        'to give money in exchange for goods',
        'to give money to charity',
        'to receive something as a gift',
      ],
      exampleSentences: [
        { en: 'She earns a good salary.', ko: '그녀는 좋은 급여를 번다.' },
        { en: 'He earned his degree in 2020.', ko: '그는 2020년에 학위를 취득했다.' },
      ],
    }
  ),
  word('Edge', '가장자리', 4, 'noun',
    ['중앙', '심장부', '핵심', '내부', '가운데', '코어', '축', '중심점', '심부', '깊은 곳'],
    tips({
      etymology: '고대 영어 ecg(날)에서 유래',
      visual: '절벽 가장자리에 서 있는 사람',
      soundAlike: '에지 = 에지 오브(가장자리)',
      context: 'Stand back from the edge of the platform.',
      synonymAntonym: '동의어: border, rim, 반의어: center',
    }),
    {
      definition: 'the outside limit of an object or surface',
      wordDistractors: ['Wedge', 'Ledge', 'Hedge'],
      definitionDistractors: [
        'the middle or innermost part',
        'the bottom or lowest point',
        'the top or highest point',
      ],
      exampleSentences: [
        { en: 'Stand back from the edge of the platform.', ko: '플랫폼 가장자리에서 물러서 있어라.' },
        { en: 'The cup has a chip on its edge.', ko: '컵 가장자리에 금이 갔다.' },
      ],
    }
  ),
  word('Edit', '편집하다', 4, 'verb',
    ['원본 유지', '손대지 않다', '생성하다', '삭제하다', '전부 지우다', '초기화', '무시하다', '통과시키다', '인쇄하다', '게시하다'],
    tips({
      etymology: '라틴어 editus(내놓다)에서 유래',
      visual: '문서를 수정하는 커서',
      soundAlike: '에딧 = 에디터(편집자)',
      context: 'I need to edit this video before posting.',
      synonymAntonym: '동의어: revise, modify, 반의어: leave as is',
    }),
    {
      definition: 'to prepare written material for publication by correcting or altering it',
      wordDistractors: ['Credit', 'Debit', 'Audit'],
      definitionDistractors: [
        'to create something from scratch',
        'to remove all content',
        'to publish without changes',
      ],
      exampleSentences: [
        { en: 'I need to edit this video before posting.', ko: '게시하기 전에 이 영상을 편집해야 한다.' },
        { en: 'She edits the school newspaper.', ko: '그녀는 교지 담당 선생님이다.' },
      ],
    }
  ),
  word('Educate', '교육하다', 4, 'verb',
    ['무지하게 하다', '오해시키다', '혼란시키다', '무시하다', '방치하다', '미숙하게', '미개발', '미성숙', '야만', '무교육'],
    tips({
      etymology: 'e(밖으로) + duc(이끌다) + -ate -> 지식을 이끌어내다',
      visual: '칠판 앞에서 가르치는 선생님',
      soundAlike: '에듀케이트 = 에듀케이션(교육)',
      context: 'Parents want to educate their children well.',
      synonymAntonym: '동의어: teach, instruct, 반의어: mislead',
    }),
    {
      definition: 'to teach or train someone, especially in a school or formal setting',
      wordDistractors: ['Advocate', 'Evacuate', 'Eradicate'],
      definitionDistractors: [
        'to mislead or give wrong information',
        'to ignore or neglect someone',
        'to confuse or puzzle someone',
      ],
      exampleSentences: [
        { en: 'Parents want to educate their children well.', ko: '부모들은 자녀를 잘 교육하고 싶어 한다.' },
        { en: 'The program educates the public about health.', ko: '그 프로그램은 건강에 대해 대중을 교육한다.' },
      ],
    }
  ),
  word('Effect', '효과', 4, 'noun',
    ['원인', '무효', '무의미', '무영향', '공허', '무가치', '비효과', '실패', '무반응', '무변화'],
    tips({
      etymology: 'ex(밖으로) + fact(하다) -> 밖으로 나타난 결과',
      visual: '약을 먹고 건강해지는 모습',
      soundAlike: '이펙트 = 이펙티브(효과적인)',
      context: 'The medicine had a positive effect.',
      synonymAntonym: '동의어: impact, result, 반의어: cause',
    }),
    {
      definition: 'a change that results when something is done or happens',
      wordDistractors: ['Affect', 'Defect', 'Inject'],
      definitionDistractors: [
        'something that brings about a result',
        'the act of trying to do something',
        'a plan or method for doing something',
      ],
      exampleSentences: [
        { en: 'The medicine had a positive effect.', ko: '그 약은 긍정적인 효과가 있었다.' },
        { en: 'The new policy took effect last month.', ko: '새 정책이 지난달에 효력을 발휘하기 시작했다.' },
      ],
    }
  ),
  word('Effort', '노력', 4, 'noun',
    ['게으름', '무노력', '방임', '태만', '나태', '무관심', '소홀', '쉬움', '수월', '용이'],
    tips({
      etymology: 'ex(밖으로) + fort(강함) -> 힘을 내다',
      visual: '무거운 것을 들어 올리는 근육',
      soundAlike: '이포트 = 이포트리스(노력 없는)',
      context: 'Success requires great effort.',
      synonymAntonym: '동의어: endeavor, exertion, 반의어: laziness',
    }),
    {
      definition: 'a vigorous or determined attempt to achieve something',
      wordDistractors: ['Comfort', 'Report', 'Export'],
      definitionDistractors: [
        'unwillingness to work or use energy',
        'success achieved with little difficulty',
        'a state of rest or relaxation',
      ],
      exampleSentences: [
        { en: 'Success requires great effort.', ko: '성공에는 큰 노력이 필요하다.' },
        { en: 'She made an effort to arrive on time.', ko: '그녀는 제시간에 도착하기 위해 노력했다.' },
      ],
    }
  ),
  word('Elect', '선출하다', 4, 'verb',
    ['임명하다', '해임하다', '거절하다', '기권하다', '보류하다', '배제하다', '제외하다', '퇴직시키다', '면직', '파면'],
    tips({
      etymology: 'e(밖으로) + lect(고르다) -> 뽑아내다',
      visual: '투표함에 투표지 넣는 손',
      soundAlike: '일렉트 = 일렉션(선거)',
      context: 'Citizens will elect a new president.',
      synonymAntonym: '동의어: choose, vote for, 반의어: reject',
    }),
    {
      definition: 'to choose someone for a position by voting',
      wordDistractors: ['Select', 'Collect', 'Reject'],
      definitionDistractors: [
        'to appoint someone without a vote',
        'to refuse or dismiss someone',
        'to leave a position voluntarily',
      ],
      exampleSentences: [
        { en: 'Citizens will elect a new president.', ko: '시민들이 새 대통령을 선출할 것이다.' },
        { en: 'She was elected to the board last year.', ko: '그녀는 작년에 이사회에 선출되었다.' },
      ],
    }
  ),
  word('Element', '요소', 4, 'noun',
    ['전체', '합계', '총체', '복합체', '조합', '통합', '융합', '혼합', '복합', '다중'],
    tips({
      etymology: '라틴어 elementum(기본 단위)에서 유래',
      visual: '주기율표의 원소 기호',
      soundAlike: '엘리먼트 = 엘리멘터리(기초의)',
      context: 'Trust is an essential element of friendship.',
      synonymAntonym: '동의어: component, factor',
    }),
    {
      definition: 'a part or aspect of something, especially one that is essential',
      wordDistractors: ['Implement', 'Supplement', 'Sentiment'],
      definitionDistractors: [
        'the complete set of parts',
        'the final result of combining things',
        'a general idea or concept',
      ],
      exampleSentences: [
        { en: 'Trust is an essential element of friendship.', ko: '신뢰는 우정의 필수 요소이다.' },
        { en: 'Water is composed of chemical elements.', ko: '물은 화학 원소로 구성되어 있다.' },
      ],
    }
  ),
  word('Eliminate', '제거하다', 4, 'verb',
    ['추가하다', '포함하다', '유지하다', '보존하다', '계속하다', '증가시키다', '강화하다', '축적하다', '쌓다', '보강하다'],
    tips({
      etymology: 'e(밖으로) + limin(문지방) + -ate -> 밖으로 내보내다',
      visual: '휴지통에 버리는 동작',
      soundAlike: '일리미네이트 = 일리미네이션(제거)',
      context: 'We must eliminate all errors.',
      synonymAntonym: '동의어: remove, get rid of, 반의어: add',
    }),
    {
      definition: 'to completely remove or get rid of something',
      wordDistractors: ['Illuminate', 'Aluminate', 'Contaminate'],
      definitionDistractors: [
        'to include or add something',
        'to keep or preserve something',
        'to strengthen or reinforce something',
      ],
      exampleSentences: [
        { en: 'We must eliminate all errors.', ko: '모든 오류를 제거해야 한다.' },
        { en: 'The team was eliminated from the tournament.', ko: '팀이 토너먼트에서 탈락했다.' },
      ],
    }
  ),
  word('Embarrass', '부끄럽게 하다', 4, 'verb',
    ['자신감 있게 하다', '칭찬하다', '기쁘게 하다', '만족시키다', '격려하다', '위무하다', '격려하다', '존중하다', '존엄을 주다', '긍지심'],
    tips({
      etymology: 'em(안에) + barren(막다) -> 막혀 당황하다',
      visual: '얼굴이 빨개진 당황한 사람',
      soundAlike: '엠배러스 = 엠배러싱(부끄러운)',
      context: 'I did not mean to embarrass you.',
      synonymAntonym: '동의어: shame, humiliate, 반의어: compliment',
    }),
    {
      definition: 'to cause someone to feel awkward or ashamed',
      wordDistractors: ['Embellish', 'Embargo', 'Embrace'],
      definitionDistractors: [
        'to praise or compliment someone',
        'to make someone feel confident',
        'to encourage or support someone',
      ],
      exampleSentences: [
        { en: 'I did not mean to embarrass you.', ko: '당신을 부끄럽게 하려는 의도는 아니었습니다.' },
        { en: 'He was embarrassed by his mistake.', ko: '그는 자신의 실수에 부끄러워했다.' },
      ],
    }
  ),
  word('Emerge', '나타나다', 4, 'verb',
    ['사라지다', '숨다', '가라앉다', '실종되다', '퇴장하다', '은퇴하다', '물러나다', '빠지다', '가라앉다', '잠수하다'],
    tips({
      etymology: 'e(밖으로) + merge(잠기다) -> 물속에서 올라오다',
      visual: '물속에서 수면 위로 올라오는 사람',
      soundAlike: '이머지 = 이머전스(출현)',
      context: 'A new leader emerged from the crisis.',
      synonymAntonym: '동의어: appear, come out, 반의어: disappear',
    }),
    {
      definition: 'to become visible or come out from somewhere',
      wordDistractors: ['Merge', 'Submerge', 'Urge'],
      definitionDistractors: [
        'to disappear or vanish',
        'to sink below the surface',
        'to hide or conceal oneself',
      ],
      exampleSentences: [
        { en: 'A new leader emerged from the crisis.', ko: '위기 속에서 새로운 지도자가 나타났다.' },
        { en: 'The sun emerged from behind the clouds.', ko: '태양이 구름 뒤에서 나타났다.' },
      ],
    }
  ),
];
