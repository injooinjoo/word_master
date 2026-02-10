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
    }),
    {
      definition: 'to succeed in reaching a goal or completing something through effort',
      wordDistractors: ['Receive', 'Believe', 'Relieve'],
      definitionDistractors: [
        'to get or be given something',
        'to accept that something is true',
        'to reduce pain or worry',
      ],
      exampleSentences: [
        { en: 'She achieved her goal of graduating with honors.', ko: '그녀는 우등으로 졸업한다는 목표를 달성했다.' },
        { en: 'It took years of hard work to achieve success.', ko: '성공을 달성하는 데 몇 년의 노력이 필요했다.' },
      ],
    }
  ),
  word('Admire', '존경하다', 3, 'verb',
    ['무시하다', '비난하다', '싫어하다', '경멸하다', '질시하다', '부러워하다', '질투하다', '모욕하다', '비난하다', '불신하다'],
    tips({
      etymology: 'ad(~에게) + mir(경이) -> 경이로 바라보다',
      visual: '연설하는 영웅을 바라보는 군중',
      soundAlike: '어드마이어 = 어드마이어이션(존경)',
      context: 'I admire her courage and determination.',
      synonymAntonym: 'Syn: respect, look up to, Ant: despise',
    }),
    {
      definition: 'to regard someone or something with respect and warm approval',
      wordDistractors: ['Aspire', 'Expire', 'Acquire'],
      definitionDistractors: [
        'to have a strong desire to achieve something',
        'to come to the end of a period of validity',
        'to obtain or gain something',
      ],
      exampleSentences: [
        { en: 'I admire her courage and determination.', ko: '나는 그녀의 용기와 결단력을 존경한다.' },
        { en: 'We all admire his dedication to the cause.', ko: '우리 모두 그의 사명에 대한 헌신을 존경한다.' },
      ],
    }
  ),
  word('Advance', '앞으로 나아가다', 3, 'verb',
    ['후퇴하다', '물러서다', '지연하다', '미루다', '멈추다', '정체하다', '퇴보하다', '되돌아가다', '느리다', '늦추다'],
    tips({
      etymology: 'ad(~로) + avant(앞) -> 앞으로 나아가다',
      visual: '군대가 앞으로 진격하는 모습',
      soundAlike: '어드밴스 = 어드밴스드(고급의)',
      context: 'Technology continues to advance rapidly.',
      synonymAntonym: 'Syn: progress, move forward, Ant: retreat',
    }),
    {
      definition: 'to move forward or make progress toward a goal',
      wordDistractors: ['Adventure', 'Advice', 'Advert'],
      definitionDistractors: [
        'an exciting or unusual experience',
        'guidance or recommendations given to someone',
        'a notice or announcement to promote something',
      ],
      exampleSentences: [
        { en: 'Technology continues to advance rapidly.', ko: '기술은 계속 빠르게 발전하고 있다.' },
        { en: 'The army advanced toward the enemy position.', ko: '군대가 적군 측으로 진격했다.' },
      ],
    }
  ),
  word('Allow', '허용하다', 3, 'verb',
    ['금지하다', '막다', '거절하다', '차단하다', '방해하다', '제한하다', '억제하다', '거부하다', '말리다', '반대하다'],
    tips({
      etymology: 'al(~로) + low(칭찬하다) -> 허용하다',
      visual: '문을 열어 들어오라고 하는 손짓',
      soundAlike: '얼라우 = 얼라우언스(허용량)',
      context: 'Smoking is not allowed in this building.',
      synonymAntonym: 'Syn: permit, let, Ant: forbid',
    }),
    {
      definition: 'to let someone do something or let something happen',
      wordDistractors: ['Arrow', 'Alloy', 'Allot'],
      definitionDistractors: [
        'a thin pointed weapon shot from a bow',
        'a metal made by combining two or more metals',
        'to give or allocate something to someone',
      ],
      exampleSentences: [
        { en: 'Smoking is not allowed in this building.', ko: '이 건물에서는 흡연이 허용되지 않는다.' },
        { en: 'Please allow me to introduce myself.', ko: '제가 자기소개를 하게 해 주세요.' },
      ],
    }
  ),
  word('Amount', '양, 금액', 3, 'noun',
    ['품질', '개수', '종류', '단위', '무게', '부피', '길이', '면적', '비율', '정도'],
    tips({
      etymology: 'a(~로) + mount(산) -> 산처럼 쌓인 것',
      visual: '계좌 잔액이 표시된 화면',
      soundAlike: '어마운트 = 어마운트(양) 체크',
      context: 'The amount of rainfall was unexpected.',
      synonymAntonym: 'Syn: quantity, sum, Ant: nothing',
    }),
    {
      definition: 'a quantity of something, especially money or a number',
      wordDistractors: ['Moment', 'Argument', 'Monument'],
      definitionDistractors: [
        'a very brief period of time',
        'a disagreement or heated discussion',
        'a structure built to commemorate a person or event',
      ],
      exampleSentences: [
        { en: 'The amount of rainfall was unexpected.', ko: '강수량이 예상 밖이었다.' },
        { en: 'She donated a large amount to charity.', ko: '그녀는 자선 단체에 큰 금액을 기부했다.' },
      ],
    }
  ),
  word('Ancient', '고대의', 3, 'adjective',
    ['현대의', '최신의', '새로운', '젊은', '최근의', '미래의', '현대적', '세련된', '신선한', '최신'],
    tips({
      etymology: 'ante(앞) + -ient -> 이전 시대의',
      visual: '이집트 피라미드와 스핑크스',
      soundAlike: '에인션트 = 에인션트 히스토리(고대사)',
      context: 'The ancient ruins attract many tourists.',
      synonymAntonym: 'Syn: old, antique, Ant: modern',
    }),
    {
      definition: 'belonging to a very distant past or very old',
      wordDistractors: ['Patient', 'Conscient', 'Ambient'],
      definitionDistractors: [
        'able to wait calmly without becoming annoyed',
        'a moral sense of right and wrong',
        'relating to the surrounding environment',
      ],
      exampleSentences: [
        { en: 'The ancient ruins attract many tourists.', ko: '고대 유적지는 많은 관광객을 끌어들인다.' },
        { en: 'Ancient civilizations developed along rivers.', ko: '고대 문명은 강을 따라 발전했다.' },
      ],
    }
  ),
  word('Announce', '알리다', 3, 'verb',
    ['숨기다', '비밀 유지', '침묵하다', '숨다', '말하지 않다', '은폐하다', '가리다', '덮다', '잠자다', '무시하다'],
    tips({
      etymology: 'an(~에게) + nounce(알리다) -> 공식적으로 알리다',
      visual: '마이크 앞에서 발표하는 사람',
      soundAlike: '어나운스 = 어나운스먼트(공지)',
      context: 'They will announce the winner tomorrow.',
      synonymAntonym: 'Syn: declare, proclaim, Ant: conceal',
    }),
    {
      definition: 'to make a formal or public statement about something',
      wordDistractors: ['Pronounce', 'Denounce', 'Enounce'],
      definitionDistractors: [
        'to make the sound of a word or letter',
        'to publicly declare something to be wrong',
        'to state or declare something formally',
      ],
      exampleSentences: [
        { en: 'They will announce the winner tomorrow.', ko: '그들은 내일 우승자를 발표할 것이다.' },
        { en: 'The company announced its new product line.', ko: '회사는 새로운 제품 라인을 발표했다.' },
      ],
    }
  ),
  word('Appear', '나타나다', 3, 'verb',
    ['사라지다', '숨다', '닫다', '가리다', '은폐하다', '떠나다', '없어지다', '잠수하다', '후퇴하다', '물러나다'],
    tips({
      etymology: 'ad(~로) + par(나타나다) -> 눈에 보이다',
      visual: '무대에서 갑자기 나타나는 마술사',
      soundAlike: '어피어 = 어피어런스(외모)',
      context: 'A rainbow appeared after the rain.',
      synonymAntonym: 'Syn: show up, emerge, Ant: disappear',
    }),
    {
      definition: 'to become visible or come into sight',
      wordDistractors: ['Appeal', 'Append', 'Apply'],
      definitionDistractors: [
        'a serious request for something',
        'to add something at the end',
        'to make a formal request for something',
      ],
      exampleSentences: [
        { en: 'A rainbow appeared after the rain.', ko: '비가 온 후 무지개가 나타났다.' },
        { en: 'She suddenly appeared at the door.', ko: '그녀가 갑자기 문에 나타났다.' },
      ],
    }
  ),
  word('Arrange', '정리하다', 3, 'verb',
    ['흐트러뜨리다', '섞다', '뒤죽박죽', '해체하다', '무질서', '어지럽히다', '분산하다', '흩다', '무시하다', '방치하다'],
    tips({
      etymology: 'ar(~로) + range(줄) -> 줄을 세우다',
      visual: '책을 가지런히 꽂는 모습',
      soundAlike: '어레인지 = 어레인지먼트(배치)',
      context: 'She arranged the flowers in a vase.',
      synonymAntonym: 'Syn: organize, order, Ant: mess up',
    }),
    {
      definition: 'to put things in a particular order or position',
      wordDistractors: ['Arrive', 'Avenge', 'Assuage'],
      definitionDistractors: [
        'to reach a destination',
        'to inflict harm in return for a wrong',
        'to make an unpleasant feeling less intense',
      ],
      exampleSentences: [
        { en: 'She arranged the flowers in a vase.', ko: '그녀는 꽃을 꽃병에 꽂았다.' },
        { en: 'I arranged to meet him at the café.', ko: '나는 그를 카페에서 만나기로 약속했다.' },
      ],
    }
  ),
  word('Article', '기사, 물품', 3, 'noun',
    ['제목', '부록', '총론', '논문', '소설', '시', '대본', '편지', '보고서', '책'],
    tips({
      etymology: 'art(예술) + -icle(작은 것) -> 기사',
      visual: '신문에 실린 기사',
      soundAlike: '아티클 = 아티클(article) 넘버',
      context: 'I read an interesting article about climate change.',
      synonymAntonym: 'Syn: piece, item',
    }),
    {
      definition: 'a piece of writing in a newspaper or magazine',
      wordDistractors: ['Particle', 'Vehicle', 'Obstacle'],
      definitionDistractors: [
        'a tiny piece of matter',
        'a machine used for transportation',
        'something that blocks or hinders progress',
      ],
      exampleSentences: [
        { en: 'I read an interesting article about climate change.', ko: '나는 기후 변화에 관한 흥미로운 기사를 읽었다.' },
        { en: 'This article explains the new policy.', ko: '이 기사는 새로운 정책을 설명한다.' },
      ],
    }
  ),
  word('Attend', '참석하다', 3, 'verb',
    ['결석하다', '석하다', '도망치다', '회피하다', '건너뛰다', '무시하다', '거절하다', '취소하다', '이탈하다', '떠나다'],
    tips({
      etymology: 'at(~로) + tend(줄다) -> 마음을 기울이다',
      visual: '회의실에 모인 참석자들',
      soundAlike: '어텐드 = 어텐던스(출석)',
      context: 'Over 500 people attended the conference.',
      synonymAntonym: 'Syn: be present, go to, Ant: miss',
    }),
    {
      definition: 'to be present at an event or place',
      wordDistractors: ['Intend', 'Extend', 'Contend'],
      definitionDistractors: [
        'to plan or mean to do something',
        'to make something longer or larger',
        'to struggle or compete with others',
      ],
      exampleSentences: [
        { en: 'Over 500 people attended the conference.', ko: '500명 이상이 회의에 참석했다.' },
        { en: 'She attends classes every weekday.', ko: '그녀는 평일마다 수업에 참석한다.' },
      ],
    }
  ),
  word('Average', '평균', 3, 'noun',
    ['극단', '최고', '최저', '예외', '특이', '특별', '흔함', '드묾', '보통', '일반'],
    tips({
      etymology: '아랍어 awariya(손상된 상품)에서 유래',
      visual: '여러 숫자 위에 그어진 평균선',
      soundAlike: '에버리지 = 에버리지 조(평균 타율)',
      context: 'The average temperature in July is 25°C.',
      synonymAntonym: 'Syn: mean, typical, Ant: extreme',
    }),
    {
      definition: 'the result of adding numbers together and dividing by the count',
      wordDistractors: ['Beverage', 'Reverage', 'Coverage'],
      definitionDistractors: [
        'a drink other than water',
        'the use of borrowed capital for investment',
        'the extent of protection or reporting',
      ],
      exampleSentences: [
        { en: 'The average temperature in July is 25°C.', ko: '7월의 평균 기온은 25도이다.' },
        { en: 'Her grades are above average for the class.', ko: '그녀의 성적은 반 평균 이상이다.' },
      ],
    }
  ),
  word('Aware', '알고 있는', 3, 'adjective',
    ['무지한', '모르는', '무관심한', '멍한', '부주의한', '수면 중', '의식 없는', '잊어버린', '눈치채지 못한', '어리석은'],
    tips({
      etymology: '고대 영어 gewær(주의 깊은)에서 유래',
      visual: '주변을 살피는 사람의 눈',
      soundAlike: '어웨어 = 어웨어니스(인식)',
      context: 'Are you aware of the risks involved?',
      synonymAntonym: 'Syn: conscious, mindful, Ant: unaware',
    }),
    {
      definition: 'having knowledge or perception of a situation or fact',
      wordDistractors: ['Awake', 'Award', 'Averse'],
      definitionDistractors: [
        'not asleep or in a conscious state',
        'a prize or recognition given for achievement',
        'having a strong dislike or opposition to something',
      ],
      exampleSentences: [
        { en: 'Are you aware of the risks involved?', ko: '관련된 위험을 알고 있나요?' },
        { en: 'She was fully aware of what was happening.', ko: '그녀는 무슨 일이 일어나고 있는지 완전히 알고 있었다.' },
      ],
    }
  ),
  word('Balance', '균형', 3, 'noun',
    ['불균형', '기울음', '전도', '넘어짐', '불안정', '흔들림', '편향', '한쪽짐', '과잉', '부족'],
    tips({
      etymology: 'bi(두) + lance(접시) -> 양쪽 접시',
      visual: '양손에 같은 무게를 든 저울',
      soundAlike: '밸런스 = 밸런스드(균형 잡힌)',
      context: 'It is important to maintain work-life balance.',
      synonymAntonym: 'Syn: equilibrium, stability, Ant: imbalance',
    }),
    {
      definition: 'a state of stability where opposing forces are equal',
      wordDistractors: ['Salience', 'Valence', 'Silence'],
      definitionDistractors: [
        'the quality of being most noticeable',
        'the combining power of an element',
        'complete absence of sound',
      ],
      exampleSentences: [
        { en: 'It is important to maintain work-life balance.', ko: '일과 삶의 균형을 유지하는 것이 중요하다.' },
        { en: 'She lost her balance and fell.', ko: '그녀는 균형을 잃고 넘어졌다.' },
      ],
    }
  ),
  word('Basic', '기본적인', 3, 'adjective',
    ['고급의', '복잡한', '특별한', '특수한', '진보한', '난해한', '세련된', '정교한', '첨단의', '최신의'],
    tips({
      etymology: 'base(기초) + -ic -> 기본의',
      visual: '건물의 기초 공사',
      soundAlike: '베이직 = 베이직스(기초)',
      context: 'You need to learn the basic rules first.',
      synonymAntonym: 'Syn: fundamental, essential, Ant: advanced',
    }),
    {
      definition: 'forming the foundation or starting point',
      wordDistractors: ['Basis', 'Basin', 'Basil'],
      definitionDistractors: [
        'the underlying support or foundation',
        'a wide bowl for holding water',
        'an aromatic herb used in cooking',
      ],
      exampleSentences: [
        { en: 'You need to learn the basic rules first.', ko: '먼저 기본 규칙을 배워야 한다.' },
        { en: 'The course covers basic grammar and vocabulary.', ko: '이 과정은 기본 문법과 어휘를 다룬다.' },
      ],
    }
  ),
  word('Behave', '행동하다', 3, 'verb',
    ['비행하다', '버릇없이', '난폭히', '무례히', '반항하다', '불순종하다', '도망치다', '나쁘게', '거친', '막되게'],
    tips({
      etymology: 'be(강조) + have(가지다) -> 몸가짐을 가지다',
      visual: '정숙하게 앉아 있는 학생',
      soundAlike: '비헤이브 = 비헤이비어(행동)',
      context: 'The children behaved well at the party.',
      synonymAntonym: 'Syn: act, conduct oneself, Ant: misbehave',
    }),
    {
      definition: 'to act or conduct oneself in a specified way',
      wordDistractors: ['Believe', 'Behold', 'Behalf'],
      definitionDistractors: [
        'to accept that something is true',
        'to see or observe something',
        'interest or benefit on behalf of someone',
      ],
      exampleSentences: [
        { en: 'The children behaved well at the party.', ko: '아이들이 파티에서 잘 행동했다.' },
        { en: 'Please behave yourself in public.', ko: '공공장소에서는 예의 바르게 행동해 주세요.' },
      ],
    }
  ),
  word('Benefit', '이익', 3, 'noun',
    ['손해', '불이익', '해악', '피해', '비용', '지출', '낭비', '손실', '해', '폐'],
    tips({
      etymology: 'bene(좋게) + fit(하다) -> 좋은 일',
      visual: '돈이 들어오는 통장',
      soundAlike: '베네핏 = 베네핏스(복리)',
      context: 'Exercise has many health benefits.',
      synonymAntonym: 'Syn: advantage, gain, Ant: disadvantage',
    }),
    {
      definition: 'an advantage or profit gained from something',
      wordDistractors: ['Benedict', 'Benign', 'Benefice'],
      definitionDistractors: [
        'a male given name',
        'gentle and not harmful',
        'a fixed income from a church office',
      ],
      exampleSentences: [
        { en: 'Exercise has many health benefits.', ko: '운동에는 많은 건강상 이점이 있다.' },
        { en: 'Everyone will benefit from this change.', ko: '이번 변화로 모두가 이익을 볼 것이다.' },
      ],
    }
  ),
  word('Besides', '게다가', 3, 'preposition',
    ['단지', '오직', '그만', '대신', '반대로', '그러나', '따라서', '결과적으로', '그래서', '그러므로'],
    tips({
      etymology: 'beside(옆에) + -s -> 그 외에도',
      visual: '메인 요리 옆에 놓인 반찬',
      soundAlike: '비사이즈 = 사이드(옆) 딸려',
      context: 'Besides English, she speaks French and Spanish.',
      synonymAntonym: 'Syn: in addition, furthermore',
    }),
    {
      definition: 'in addition to or apart from something',
      wordDistractors: ['Beside', 'Between', 'Beyond'],
      definitionDistractors: [
        'at the side of or next to',
        'in the space separating two things',
        'on or to the further side of',
      ],
      exampleSentences: [
        { en: 'Besides English, she speaks French and Spanish.', ko: '영어 외에도 그녀는 프랑스어와 스페인어를 한다.' },
        { en: 'Besides being tired, I also feel hungry.', ko: '피곤한 것 외에도 나는 배가 고프다.' },
      ],
    }
  ),
  word('Blame', '비난하다', 3, 'verb',
    ['칭찬하다', '변호하다', '방어하다', '옹호하다', '감사하다', '인정하다', '칭송하다', '찬양하다', '면책하다', '용서하다'],
    tips({
      etymology: '라틴어 blasphemare(흠잡다)에서 유래',
      visual: '손가락으로 가리키며 비난하는 모습',
      soundAlike: '블레임 = 블레임 게임(비난 놀이)',
      context: 'Don\'t blame me for your mistake.',
      synonymAntonym: 'Syn: accuse, fault, Ant: praise',
    }),
    {
      definition: 'to hold someone responsible for a fault or wrong',
      wordDistractors: ['Flame', 'Frame', 'Claim'],
      definitionDistractors: [
        'a hot glowing body of ignited gas',
        'a rigid structure that surrounds something',
        'to assert that something is the case',
      ],
      exampleSentences: [
        { en: 'Don\'t blame me for your mistake.', ko: '네 실수를 내 탓으로 돌리지 마.' },
        { en: 'She always blames others for her problems.', ko: '그녀는 항상 자신의 문제를 남의 탓으로 돌린다.' },
      ],
    }
  ),
  word('Block', '막다', 3, 'verb',
    ['열다', '통과시키다', '허용하다', '돕다', '촉진하다', '지원하다', '개방하다', '해제하다', '해방하다', '통과하다'],
    tips({
      etymology: '프랑스어 bloc(덩어리)에서 유래',
      visual: '도로를 가로막는 바리케이드',
      soundAlike: '블락 = 블락버스터(막는 것)',
      context: 'A fallen tree blocked the road.',
      synonymAntonym: 'Syn: obstruct, prevent, Ant: unblock',
    }),
    {
      definition: 'to obstruct or prevent passage or progress',
      wordDistractors: ['Black', 'Blank', 'Blink'],
      definitionDistractors: [
        'the darkest color, absorbing all light',
        'empty or plain, without decoration',
        'to shut and open the eyes quickly',
      ],
      exampleSentences: [
        { en: 'A fallen tree blocked the road.', ko: '쓰러진 나무가 도로를 막았다.' },
        { en: 'The firewall blocks unauthorized access.', ko: '방화벽이 무단 접근을 차단한다.' },
      ],
    }
  ),
  word('Bomb', '폭탄', 3, 'noun',
    ['미사일', '로켓', '화살', '창', '검', '방패', '헬멧', '갑옷', '무기', '총'],
    tips({
      etymology: '라틴어 bombus(윙윙 소리)에서 유래',
      visual: '빨간 불이 깜빡이는 원형 폭탄',
      soundAlike: '밤 = 밤 스캐어(폭탄 공포)',
      context: 'The building was destroyed by a bomb.',
      synonymAntonym: 'Syn: explosive, device',
    }),
    {
      definition: 'an explosive weapon designed to cause destruction',
      wordDistractors: ['Comb', 'Tomb', 'Womb'],
      definitionDistractors: [
        'a toothed object for arranging hair',
        'a large vault for burying the dead',
        'the organ where a baby develops before birth',
      ],
      exampleSentences: [
        { en: 'The building was destroyed by a bomb.', ko: '건물이 폭탄으로 파괴되었다.' },
        { en: 'The bomb exploded at midnight.', ko: '폭탄이 자정에 폭발했다.' },
      ],
    }
  ),
  word('Borrow', '빌리다', 3, 'verb',
    ['빌려주다', '돌려주다', '갚다', '갚아주다', '반환하다', '기부하다', '선물하다', '증여하다', '보관하다', '소유하다'],
    tips({
      etymology: '고대 영어 borgian(담보로 빌리다)에서 유래',
      visual: '친구에게 책을 빌리는 모습',
      soundAlike: '보로우 = 보로우드(빌린)',
      context: 'Can I borrow your pen for a moment?',
      synonymAntonym: 'Syn: take on loan, Ant: lend',
    }),
    {
      definition: 'to take and use something with the intention of returning it',
      wordDistractors: ['Burrow', 'Barrow', 'Borough'],
      definitionDistractors: [
        'a hole or tunnel dug by an animal',
        'a wheelbarrow or handcart',
        'a town or district with its own government',
      ],
      exampleSentences: [
        { en: 'Can I borrow your pen for a moment?', ko: '잠깐만 펜 빌려줄 수 있어?' },
        { en: 'She borrowed money from the bank.', ko: '그녀는 은행에서 돈을 빌렸다.' },
      ],
    }
  ),
  word('Bow', '인사하다', 3, 'verb',
    ['서다', '고개 들다', '등지다', '무시하다', '거절하다', '돌아서다', '얼굴 숙이다', '무례히', '무시하다', '지나가다'],
    tips({
      etymology: '고대 영어 bugan(굽다)에서 유래',
      visual: '무대에서 관객에게 인사하는 배우',
      soundAlike: '바우 = 테이크 어 바우(인사하다)',
      context: 'The actors bowed to the audience.',
      synonymAntonym: 'Syn: bend, nod, Ant: straighten',
    }),
    {
      definition: 'to bend the body or head as a sign of respect or greeting',
      wordDistractors: ['Bowl', 'Bolt', 'Boat'],
      definitionDistractors: [
        'a round deep dish for food',
        'a type of fastening or a sudden run',
        'a small vessel for traveling on water',
      ],
      exampleSentences: [
        { en: 'The actors bowed to the audience.', ko: '배우들이 관객에게 인사했다.' },
        { en: 'In Japan, people bow when greeting each other.', ko: '일본에서는 사람들이 인사할 때 절을 한다.' },
      ],
    }
  ),
  word('Branch', '가지', 3, 'noun',
    ['뿌리', '줄기', '잎', '꽃', '열매', '씨', '껍질', '나무', '숲', '정원'],
    tips({
      etymology: '라틴어 branchia(팔)에서 유래',
      visual: '나무에서 뻗어나온 가지',
      soundAlike: '브랜치 = 브랜치 오피스(지점)',
      context: 'A bird sat on a branch of the tree.',
      synonymAntonym: 'Syn: limb, bough',
    }),
    {
      definition: 'a part of a tree that grows out from the trunk',
      wordDistractors: ['Blanch', 'Broach', 'Breach'],
      definitionDistractors: [
        'to whiten by removing color',
        'to make someone pale',
        'to raise a difficult subject for discussion',
      ],
      exampleSentences: [
        { en: 'A bird sat on a branch of the tree.', ko: '새가 나무 가지에 앉아 있었다.' },
        { en: 'The bank has opened a new branch downtown.', ko: '은행이 시내에 새 지점을 열었다.' },
      ],
    }
  ),
  word('Bunch', '한 묶음', 3, 'noun',
    ['낱개', '한 개', '조금', '조각', '일부', '분리', '흩어짐', '단독', '홀로', '개별'],
    tips({
      etymology: '프랑스어 bouche(다발)에서 유래',
      visual: '바나나 한 송이',
      soundAlike: '번치 = 어 번치 오브(한 묶음)',
      context: 'She bought a bunch of grapes.',
      synonymAntonym: 'Syn: cluster, bundle',
    }),
    {
      definition: 'a number of things of the same kind fastened or grouped together',
      wordDistractors: ['Bench', 'Brunch', 'Bunch'],
      definitionDistractors: [
        'a long seat for several people',
        'a late morning meal combining breakfast and lunch',
        'a structure built over a river or road',
      ],
      exampleSentences: [
        { en: 'She bought a bunch of grapes.', ko: '그녀는 포도 한 송이를 샀다.' },
        { en: 'He gave her a bunch of flowers.', ko: '그가 그녀에게 꽃 한 다발을 줬다.' },
      ],
    }
  ),
  word('Burst', '터지다', 3, 'verb',
    ['수리하다', '봉합하다', '막다', '멈추다', '완전한', '온전한', '보존하다', '유지하다', '천천히', '조용히'],
    tips({
      etymology: '고대 영어 berstan(터지다)에서 유래',
      visual: '풍선이 터지는 순간',
      soundAlike: '버스트 = 버스트 아웃(터져 나오다)',
      context: 'The water pipe burst in the cold weather.',
      synonymAntonym: 'Syn: explode, break open, Ant: mend',
    }),
    {
      definition: 'to break open or apart suddenly, often with force',
      wordDistractors: ['Burst', 'Bust', 'Curse'],
      definitionDistractors: [
        'to suddenly break apart or explode',
        'to break or smash something',
        'an offensive word or phrase expressing anger',
      ],
      exampleSentences: [
        { en: 'The water pipe burst in the cold weather.', ko: '추운 날씨에 수도관이 터졌다.' },
        { en: 'The crowd burst into applause.', ko: '군중이 박수를 터뜨렸다.' },
      ],
    }
  ),
  word('Cable', '케이블', 3, 'noun',
    ['와이어', '로프', '끈', '줄', '밧줄', '전선', '안테나', '수신기', '송신기', '연결'],
    tips({
      etymology: '라틴어 capulum(잡는 끈)에서 유래',
      visual: '전원에 연결된 전선',
      soundAlike: '케이블 = 케이블 TV',
      context: 'The cable connects the computer to the monitor.',
      synonymAntonym: 'Syn: wire, cord',
    }),
    {
      definition: 'a thick rope or wire used for tying, supporting, or transmitting',
      wordDistractors: ['Table', 'Fable', 'Gable'],
      definitionDistractors: [
        'a piece of furniture with a flat top',
        'a short story with a moral lesson',
        'a traditional story often involving animals',
      ],
      exampleSentences: [
        { en: 'The cable connects the computer to the monitor.', ko: '케이블이 컴퓨터와 모니터를 연결한다.' },
        { en: 'We need a longer cable for the charger.', ko: '충전기에 더 긴 케이블이 필요하다.' },
      ],
    }
  ),
  word('Calculate', '계산하다', 3, 'verb',
    ['추측하다', '대략하다', '어림하다', '틀리다', '잘못하다', '무시하다', '추측', '대충', '대략', '임의'],
    tips({
      etymology: '라틴어 calculus(작은 돌)에서 유래, 주판의 구슬',
      visual: '계산기를 두드리는 손',
      soundAlike: '캘큘레이트 = 캘큘레이션(계산)',
      context: 'Please calculate the total cost.',
      synonymAntonym: 'Syn: compute, figure out, Ant: guess',
    }),
    {
      definition: 'to determine a number or amount using mathematical operations',
      wordDistractors: ['Circulate', 'Speculate', 'Miscalculate'],
      definitionDistractors: [
        'to move or spread in a circular path',
        'to form opinions without definite knowledge',
        'to calculate wrongly or inaccurately',
      ],
      exampleSentences: [
        { en: 'Please calculate the total cost.', ko: '총 비용을 계산해 주세요.' },
        { en: 'Scientists calculated the distance to the moon.', ko: '과학자들이 달까지의 거리를 계산했다.' },
      ],
    }
  ),
  word('Calendar', '달력', 3, 'noun',
    ['시계', '타이머', '알람', '일정', '기념일', '시간표', '스케줄', '날짜', '요일', '월'],
    tips({
      etymology: '라틴어 kalendae(매월 첫날)에서 유래',
      visual: '벽에 걸린 월별 달력',
      soundAlike: '캘린더 = 캘린더 앱',
      context: 'Check the calendar for the meeting date.',
      synonymAntonym: 'Syn: schedule, almanac',
    }),
    {
      definition: 'a chart or system showing the days, weeks, and months of the year',
      wordDistractors: ['Calamity', 'Caliber', 'Calender'],
      definitionDistractors: [
        'a disaster or serious misfortune',
        'the quality or level of something',
        'a machine that smooths paper or cloth',
      ],
      exampleSentences: [
        { en: 'Check the calendar for the meeting date.', ko: '회의 날짜를 달력에서 확인하세요.' },
        { en: 'I marked the deadline on my calendar.', ko: '나는 마감일을 달력에 표시했다.' },
      ],
    }
  ),
  word('Campaign', '운동, 캠페인', 3, 'noun',
    ['휴전', '평화', '무행동', '미동', '침묵', '정지', '중단', '포기', '해산', '종료'],
    tips({
      etymology: '라틴어 campus(들판) -> 캠프에서의 군사 작전',
      visual: '시위 플래카드를 든 시위대',
      soundAlike: '캠페인 = 캠페인 트레일(선거 유세)',
      context: 'The charity launched a fundraising campaign.',
      synonymAntonym: 'Syn: drive, movement',
    }),
    {
      definition: 'an organized series of activities or efforts to achieve a goal',
      wordDistractors: ['Champaign', 'Champagne', 'Campaign'],
      definitionDistractors: [
        'a plain or open countryside',
        'a sparkling white wine from France',
        'a planned set of activities for a purpose',
      ],
      exampleSentences: [
        { en: 'The charity launched a fundraising campaign.', ko: '자선 단체가 모금 캠페인을 시작했다.' },
        { en: 'The election campaign lasted three months.', ko: '선거 운동이 3개월 동안 지속되었다.' },
      ],
    }
  ),
  word('Cancer', '암', 3, 'noun',
    ['감기', '독감', '두통', '위염', '당뇨', '고혈압', '심장병', '간염', '폐렴', '천식'],
    tips({
      etymology: '라틴어 cancer(게) -> 퍼지는 모습이 게처럼',
      visual: '의료 기호의 리본',
      soundAlike: '캔서 = 캔서 리서치(암 연구)',
      context: 'Early detection of cancer saves lives.',
      synonymAntonym: 'Syn: malignancy, tumor',
    }),
    {
      definition: 'a disease caused by uncontrolled growth of abnormal cells',
      wordDistractors: ['Canker', 'Cancel', 'Canal'],
      definitionDistractors: [
        'a fungal disease in plants',
        'to decide that something will not happen',
        'an artificial waterway for boats',
      ],
      exampleSentences: [
        { en: 'Early detection of cancer saves lives.', ko: '암의 조기 발견이 생명을 구한다.' },
        { en: 'He was diagnosed with cancer last year.', ko: '그는 작년에 암 진단을 받았다.' },
      ],
    }
  ),
  word('Carbon', '탄소', 3, 'noun',
    ['수소', '산소', '질소', '금', '은', '철', '구리', '물', '공기', '대기'],
    tips({
      etymology: '라틴어 carbo(숯)에서 유래',
      visual: '다이아몬드와 흑연(둘 다 탄소)',
      soundAlike: '카본 = 카본 풋프린트(탄소 발자국)',
      context: 'Carbon is the basis of all organic life.',
      synonymAntonym: 'Syn: C (element)',
    }),
    {
      definition: 'a chemical element that is the basis of all organic compounds',
      wordDistractors: ['Carbon', 'Canyon', 'Canton'],
      definitionDistractors: [
        'a nonmetallic element found in all living things',
        'a deep narrow valley with steep sides',
        'a small administrative division of a country',
      ],
      exampleSentences: [
        { en: 'Carbon is the basis of all organic life.', ko: '탄소는 모든 유기 생명의 기초이다.' },
        { en: 'Reducing carbon emissions is essential.', ko: '탄소 배출을 줄이는 것이 필수적이다.' },
      ],
    }
  ),
  word('Career', '경력', 3, 'noun',
    ['취미', '여가', '휴식', '은퇴', '실업', '공백', '무직', '학생', '신입', '초보'],
    tips({
      etymology: '라틴어 carrus(수레) -> 인생의 길',
      visual: '사다리를 오르는 직장인',
      soundAlike: '커리어 = 커리어 패스(경력 경로)',
      context: 'She has had a successful career in law.',
      synonymAntonym: 'Syn: profession, occupation',
    }),
    {
      definition: 'an occupation undertaken for a significant period of one\'s life',
      wordDistractors: ['Carrier', 'Carver', 'Courier'],
      definitionDistractors: [
        'a person or company that transports goods',
        'a person who carves wood or stone',
        'a person who delivers messages or packages',
      ],
      exampleSentences: [
        { en: 'She has had a successful career in law.', ko: '그녀는 법률 분야에서 성공적인 경력을 쌓았다.' },
        { en: 'He changed career in his thirties.', ko: '그는 30대에 직업을 바꿨다.' },
      ],
    }
  ),
  word('Celebrate', '축하하다', 3, 'verb',
    ['슬퍼하다', '애도하다', '비난하다', '무시하다', '지나가다', '얼마 안 되다', '보통으로', '평범히', '냉담히', '무관심히'],
    tips({
      etymology: '라틴어 celebrare(많이 모이다)에서 유래',
      visual: '생일 케이크 앞에서 박수하는 사람들',
      soundAlike: '셀러브레이트 = 셀러브레이션(축하)',
      context: 'We celebrated her promotion with a party.',
      synonymAntonym: 'Syn: commemorate, rejoice, Ant: mourn',
    }),
    {
      definition: 'to acknowledge a significant event with festivities',
      wordDistractors: ['Celerate', 'Cerebrate', 'Calibrate'],
      definitionDistractors: [
        'to move or act with speed',
        'to use the brain or think',
        'to mark or adjust a measuring instrument',
      ],
      exampleSentences: [
        { en: 'We celebrated her promotion with a party.', ko: '우리는 그녀의 승진을 파티로 축하했다.' },
        { en: 'Let\'s celebrate your birthday tonight.', ko: '오늘 밤 네 생일을 축하하자.' },
      ],
    }
  ),
  word('Ceremony', '의식', 3, 'noun',
    ['일상', '무례', '생략', '간소화', '비공식', '쉬운', '편한', '무작위', '자유', '휴식'],
    tips({
      etymology: '라틴어 caerimonia(종교 의식)에서 유래',
      visual: '결혼식에서 링 교환하는 모습',
      soundAlike: '세러모니 = 세러모니얼(의식의)',
      context: 'The award ceremony will be held next week.',
      synonymAntonym: 'Syn: ritual, formal event',
    }),
    {
      definition: 'a formal event performed on a special occasion',
      wordDistractors: ['Ceremony', 'Serenity', 'Cemetery'],
      definitionDistractors: [
        'a formal ritual or observance',
        'the state of being calm and peaceful',
        'a place where dead people are buried',
      ],
      exampleSentences: [
        { en: 'The award ceremony will be held next week.', ko: '시상식이 다음 주에 열린다.' },
        { en: 'The wedding ceremony was beautiful.', ko: '결혼식이 아름다웠다.' },
      ],
    }
  ),
  word('Chapter', '장', 3, 'noun',
    ['머리말', '부록', '찾아보기', '표지', '페이지', '절', '문단', '문장', '단어', '글자'],
    tips({
      etymology: '라틴어 capitulum(작은 머리)에서 유래',
      visual: '책에 적힌 "Chapter 1"',
      soundAlike: '챕터 = 챕터 원(1장)',
      context: 'Please read chapter 5 for tomorrow.',
      synonymAntonym: 'Syn: section, part',
    }),
    {
      definition: 'a main division of a book, typically with a number or title',
      wordDistractors: ['Charter', 'Character', 'Chanter'],
      definitionDistractors: [
        'a written grant of rights or privileges',
        'the mental and moral qualities of a person',
        'a person who leads singing in a church',
      ],
      exampleSentences: [
        { en: 'Please read chapter 5 for tomorrow.', ko: '내일을 위해 5장을 읽어 주세요.' },
        { en: 'This chapter discusses climate change.', ko: '이 장은 기후 변화를 논한다.' },
      ],
    }
  ),
  word('Character', '성격', 3, 'noun',
    ['외모', '몸', '얼굴', '키', '몸무게', '복장', '헤어스타일', '행동', '습관', '버릇'],
    tips({
      etymology: '그리스어 kharakter(각인)에서 유래',
      visual: '사람의 실루엣과 생각 거품',
      soundAlike: '캐릭터 = 캐릭터 트레이트(성격 특성)',
      context: 'She has a strong and determined character.',
      synonymAntonym: 'Syn: personality, nature',
    }),
    {
      definition: 'the mental and moral qualities that make a person unique',
      wordDistractors: ['Character', 'Charter', 'Caricature'],
      definitionDistractors: [
        'a person in a novel, play, or film',
        'a formal document granting rights',
        'a distorted representation for comic effect',
      ],
      exampleSentences: [
        { en: 'She has a strong and determined character.', ko: '그녀는 강하고 결단력 있는 성격이다.' },
        { en: 'His character was shaped by his upbringing.', ko: '그의 성격은 성장 환경에 의해 형성되었다.' },
      ],
    }
  ),
  word('Chart', '차트', 3, 'noun',
    ['글', '문장', '표', '목록', '사진', '도면', '설명', '서술', '이야기', '논문'],
    tips({
      etymology: '라틴어 charta(종이)에서 유래',
      visual: '막대 그래프가 그려진 보고서',
      soundAlike: '차트 = 플로우 차트(흐름도)',
      context: 'The chart shows sales growth over the year.',
      synonymAntonym: 'Syn: graph, diagram',
    }),
    {
      definition: 'a sheet of information in the form of a graph or table',
      wordDistractors: ['Charm', 'Chart', 'Chard'],
      definitionDistractors: [
        'the power of pleasing or attracting',
        'a visual representation of data',
        'a green leafy vegetable',
      ],
      exampleSentences: [
        { en: 'The chart shows sales growth over the year.', ko: '차트는 1년간 매출 성장을 보여준다.' },
        { en: 'Refer to the chart for more details.', ko: '자세한 내용은 차트를 참조하세요.' },
      ],
    }
  ),
  word('Chemical', '화학 물질', 3, 'noun',
    ['물리', '생물', '지질', '천문', '수학', '자연', '유기', '무기', '원소', '화합물'],
    tips({
      etymology: 'alchemy(연금술)에서 유래',
      visual: '실험실의 유리 플라스크',
      soundAlike: '케미컬 = 케미컬 릭션(화학 반응)',
      context: 'These chemicals must be handled carefully.',
      synonymAntonym: 'Syn: substance, compound',
    }),
    {
      definition: 'a substance produced by or used in chemistry',
      wordDistractors: ['Chronicle', 'Chimes', 'Circular'],
      definitionDistractors: [
        'a factual written account of events in order',
        'a set of bells or a melodious sound',
        'a letter or notice distributed to many people',
      ],
      exampleSentences: [
        { en: 'These chemicals must be handled carefully.', ko: '이 화학 물질들은 조심히 다뤄야 한다.' },
        { en: 'The factory produces various chemicals.', ko: '그 공장은 다양한 화학 물질을 생산한다.' },
      ],
    }
  ),
  word('Citizen', '시민', 3, 'noun',
    ['외국인', '이민자', '난민', '왕', '귀족', '노예', '군인', '피난민', '무국적', '여행자'],
    tips({
      etymology: '라틴어 civitas(도시)에서 유래',
      visual: '국기를 배경으로 선 사람',
      soundAlike: '시티즌 = 시티즌십(시민권)',
      context: 'Every citizen has the right to vote.',
      synonymAntonym: 'Syn: resident, national',
    }),
    {
      definition: 'a legally recognized member of a country or state',
      wordDistractors: ['Citizen', 'Civilian', 'Citadel'],
      definitionDistractors: [
        'a person who has citizenship',
        'a person not in the armed forces',
        'a fortress typically on high ground',
      ],
      exampleSentences: [
        { en: 'Every citizen has the right to vote.', ko: '모든 시민은 투표할 권리가 있다.' },
        { en: 'He became a citizen last year.', ko: '그는 작년에 시민이 되었다.' },
      ],
    }
  ),
  word('Claim', '주장하다', 3, 'verb',
    ['부인하다', '거절하다', '포기하다', '양보하다', '인정하다', '동의하다', '수용하다', '받아들이다', '승인하다', '허락하다'],
    tips({
      etymology: '라틴어 clamare(외치다)에서 유래',
      visual: '공중에 주먹을 들어 올리는 사람',
      soundAlike: '클레임 = 클레임 체크(보험 청구)',
      context: 'He claims he was not at the scene.',
      synonymAntonym: 'Syn: assert, declare, Ant: deny',
    }),
    {
      definition: 'to state that something is true without providing proof',
      wordDistractors: ['Clam', 'Clamp', 'Climb'],
      definitionDistractors: [
        'a type of shellfish',
        'a device for holding things tightly',
        'to go upward using hands and feet',
      ],
      exampleSentences: [
        { en: 'He claims he was not at the scene.', ko: '그는 현장에 없었다고 주장한다.' },
        { en: 'She claimed the prize with joy.', ko: '그녀는 기쁘게 상을 탔다.' },
      ],
    }
  ),
  word('Climate', '기후', 3, 'noun',
    ['날씨', '온도', '습도', '바람', '비', '눈', '폭풍', '일기', '대기', '환경'],
    tips({
      etymology: '그리스어 klima(기울기) -> 위도에 따른 기울기',
      visual: '지구본 위의 기후대',
      soundAlike: '클라이밋 = 클라이밋 체인지(기후 변화)',
      context: 'The climate in this region is very dry.',
      synonymAntonym: 'Syn: weather pattern, conditions',
    }),
    {
      definition: 'the typical weather conditions of a region over a long period',
      wordDistractors: ['Climate', 'Climax', 'Climb'],
      definitionDistractors: [
        'long-term weather patterns of a region',
        'the most intense point of something',
        'to ascend using hands and feet',
      ],
      exampleSentences: [
        { en: 'The climate in this region is very dry.', ko: '이 지역의 기후는 매우 건조하다.' },
        { en: 'Climate change affects the whole planet.', ko: '기후 변화는 지구 전체에 영향을 미친다.' },
      ],
    }
  ),
  word('Combine', '결합하다', 3, 'verb',
    ['분리하다', '나누다', '갈라놓다', '해체하다', '분해하다', '흩다', '해산하다', '분리', '독립', '단독'],
    tips({
      etymology: 'com(함께) + bine(두 개) -> 함께 두다',
      visual: '두 액체를 한 플라스크에 합치는 모습',
      soundAlike: '컴바인 = 컴바인드(결합된)',
      context: 'Combine the flour and sugar in a bowl.',
      synonymAntonym: 'Syn: merge, unite, Ant: separate',
    }),
    {
      definition: 'to join or mix two or more things together',
      wordDistractors: ['Combine', 'Combine', 'Confine'],
      definitionDistractors: [
        'a harvesting machine for grain',
        'to merge or unite things',
        'to keep or restrict within limits',
      ],
      exampleSentences: [
        { en: 'Combine the flour and sugar in a bowl.', ko: '볼에 밀가루와 설탕을 섞으세요.' },
        { en: 'We can combine our efforts to succeed.', ko: '우리는 성공하기 위해 노력을 합칠 수 있다.' },
      ],
    }
  ),
  word('Comfort', '위로', 3, 'noun',
    ['불편', '고통', '슬픔', '고민', '걱정', '불안', '두려움', '스트레스', '고난', '역경'],
    tips({
      etymology: 'com(함께) + fort(강함) -> 함께 강해지다',
      visual: '이불에 푹 파고든 사람',
      soundAlike: '컴포트 = 컴퍼터블(편안한)',
      context: 'Your words gave me great comfort.',
      synonymAntonym: 'Syn: solace, ease, Ant: discomfort',
    }),
    {
      definition: 'a state of physical ease and freedom from pain or worry',
      wordDistractors: ['Comfort', 'Comport', 'Compact'],
      definitionDistractors: [
        'physical or mental suffering',
        'to conduct oneself in a specified way',
        'a piece of furniture for sitting',
      ],
      exampleSentences: [
        { en: 'Your words gave me great comfort.', ko: '당신의 말이 나에게 큰 위로가 되었다.' },
        { en: 'She lived in comfort after her retirement.', ko: '그녀는 은퇴 후 편안하게 살았다.' },
      ],
    }
  ),
  word('Command', '명령', 3, 'noun',
    ['복종', '순종', '요청', '제안', '허락', '승인', '동의', '거절', '반대', '거부'],
    tips({
      etymology: 'com(완전히) + mand(맡기다) -> 지시하다',
      visual: '군인이 경례하는 모습',
      soundAlike: '커맨드 = 커맨드 센터(지휘 센터)',
      context: 'The general gave the command to advance.',
      synonymAntonym: 'Syn: order, directive, Ant: request',
    }),
    {
      definition: 'an authoritative order or instruction',
      wordDistractors: ['Commend', 'Comment', 'Commence'],
      definitionDistractors: [
        'to praise formally or recommend',
        'a remark or observation',
        'to begin or start something',
      ],
      exampleSentences: [
        { en: 'The general gave the command to advance.', ko: '장군이 진격하라는 명령을 내렸다.' },
        { en: 'She has a good command of English.', ko: '그녀는 영어 실력이 뛰어나다.' },
      ],
    }
  ),
  word('Common', '흔한', 3, 'adjective',
    ['희귀한', '특별한', '독특한', '드문', '비범한', '예외적', '놀라운', '이상한', '특이한', '유일한'],
    tips({
      etymology: '라틴어 communis(함께) -> 모두가 가진 것',
      visual: '거리에서 흔히 보이는 광경',
      soundAlike: '커먼 = 커먼 센스(상식)',
      context: 'It is common to feel nervous before an exam.',
      synonymAntonym: 'Syn: ordinary, frequent, Ant: rare',
    }),
    {
      definition: 'occurring or found often; not rare or unusual',
      wordDistractors: ['Comment', 'Commit', 'Commodity'],
      definitionDistractors: [
        'a remark or observation',
        'to pledge or bind oneself',
        'a raw material or product for sale',
      ],
      exampleSentences: [
        { en: 'It is common to feel nervous before an exam.', ko: '시험 전에 긴장하는 것은 흔한 일이다.' },
        { en: 'Colds are common in winter.', ko: '감기는 겨울에 흔하다.' },
      ],
    }
  ),
  word('Compare', '비교하다', 3, 'verb',
    ['동일시하다', '혼동하다', '무시하다', '별개로', '독립적으로', '분리해서', '구분 없이', '섞다', '합치다', '통합하다'],
    tips({
      etymology: 'com(함께) + par(같음) -> 나란히 놓고 보다',
      visual: '두 상품을 나란히 놓고 보는 손',
      soundAlike: '컴페어 = 컴퍼리슨(비교)',
      context: 'Compare the prices before you buy.',
      synonymAntonym: 'Syn: contrast, compare to, Ant: differentiate',
    }),
    {
      definition: 'to assess the similarities and differences between things',
      wordDistractors: ['Compare', 'Compere', 'Prepare'],
      definitionDistractors: [
        'to examine similarities and differences',
        'a person who introduces performers',
        'to make ready for something',
      ],
      exampleSentences: [
        { en: 'Compare the prices before you buy.', ko: '사기 전에 가격을 비교하세요.' },
        { en: 'It is hard to compare the two candidates.', ko: '두 후보를 비교하기 어렵다.' },
      ],
    }
  ),
  word('Compete', '경쟁하다', 3, 'verb',
    ['협력하다', '협동하다', '도와주다', '배려하다', '양보하다', '포기하다', '기권하다', '물러나다', '퇴장하다', '중단하다'],
    tips({
      etymology: 'com(함께) + pete(찾다) -> 함께 목표를 찾다',
      visual: '트랙에서 달리는 선수들',
      soundAlike: '컴피트 = 컴피티션(경쟁)',
      context: 'Athletes from 50 countries will compete.',
      synonymAntonym: 'Syn: contend, vie, Ant: cooperate',
    }),
    {
      definition: 'to strive to gain or win something by defeating others',
      wordDistractors: ['Complete', 'Compute', 'Comply'],
      definitionDistractors: [
        'to finish or bring to an end',
        'to calculate or process data',
        'to act in accordance with a request',
      ],
      exampleSentences: [
        { en: 'Athletes from 50 countries will compete.', ko: '50개국 출신 선수들이 경쟁할 것이다.' },
        { en: 'She refused to compete in the finals.', ko: '그녀는 결승에 참가하는 것을 거부했다.' },
      ],
    }
  ),
  word('Complain', '불평하다', 3, 'verb',
    ['칭찬하다', '감사하다', '만족하다', '찬성하다', '동의하다', '수용하다', '인정하다', '기뻐하다', '즐기다', '감사하다'],
    tips({
      etymology: 'com(강조) + plain(슬픔) -> 슬픔을 표현하다',
      visual: '화난 표정으로 말하는 사람',
      soundAlike: '컴플레인 = 컴플레인트(불만)',
      context: 'Customers often complain about the service.',
      synonymAntonym: 'Syn: grumble, gripe, Ant: praise',
    }),
    {
      definition: 'to express dissatisfaction or annoyance about something',
      wordDistractors: ['Complain', 'Explain', 'Contain'],
      definitionDistractors: [
        'to express grievance or dissatisfaction',
        'to make a formal accusation',
        'to finish or bring to an end',
      ],
      exampleSentences: [
        { en: 'Customers often complain about the service.', ko: '고객들은 종종 서비스에 대해 불평한다.' },
        { en: 'He has nothing to complain about.', ko: '그는 불평할 것이 없다.' },
      ],
    }
  ),
  word('Complete', '완성하다', 3, 'verb',
    ['시작하다', '중단하다', '미완성', '미완료', '부분적', '불완전', '결함', '부족', '반쯤', '절반'],
    tips({
      etymology: 'com(완전히) + plete(채우다) -> 완전히 채우다',
      visual: '체크박스에 체크 표시',
      soundAlike: '컴플리트 = 컴플리션(완료)',
      context: 'I need to complete this report by Friday.',
      synonymAntonym: 'Syn: finish, accomplish, Ant: begin',
    }),
    {
      definition: 'to finish making or doing something',
      wordDistractors: ['Compete', 'Compete', 'Compute'],
      definitionDistractors: [
        'to strive to win against others',
        'to take part in a contest',
        'to calculate or process electronically',
      ],
      exampleSentences: [
        { en: 'I need to complete this report by Friday.', ko: '금요일까지 이 보고서를 완성해야 한다.' },
        { en: 'The project is now complete.', ko: '프로젝트가 이제 완료되었다.' },
      ],
    }
  ),
];
