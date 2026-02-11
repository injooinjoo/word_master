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
    }),
    {
      definition: 'to officially end or eliminate something, especially a law or system',
      wordDistractors: ['Polish', 'Foolish', 'Accomplish'],
      definitionDistractors: [
        'to make something cleaner or smoother',
        'to successfully complete a task',
        'to bring something into existence',
      ],
      exampleSentences: [
        { en: 'The government abolished the death penalty.', ko: '정부는 사형을 폐지했다.' },
        { en: 'Slavery was abolished in the 19th century.', ko: '노예 제도는 19세기에 폐지되었다.' },
      ],
    }
  ),
  word('Absorb', '흡수하다', 5, 'verb',
    ['배출하다', '방출하다', '거부하다', '반사하다', '차단하다', '저지하다', '내보내다', '분출하다', '방사하다', '배설하다'],
    tips({
      etymology: 'ab(완전히) + sorb(삼키다) -> 완전히 삼키다',
      visual: '물을 흡수하는 스펀지',
      soundAlike: '앱솔브 = 앱솔브션(흡수)',
      context: 'Plants absorb water through their roots.',
      synonymAntonym: '동의어: soak up, take in, 반의어: emit',
    }),
    {
      definition: 'to take in or soak up a liquid, gas, or other substance',
      wordDistractors: ['Observe', 'Absurd', 'Assure'],
      definitionDistractors: [
        'to watch or notice something carefully',
        'silly or unreasonable',
        'to tell someone something firmly',
      ],
      exampleSentences: [
        { en: 'Plants absorb water through their roots.', ko: '식물은 뿌리를 통해 물을 흡수한다.' },
        { en: 'She was completely absorbed in her book.', ko: '그녀는 책에 완전히 몰입해 있었다.' },
      ],
    }
  ),
  word('Abstract', '추상적인', 5, 'adjective',
    ['구체적인', '실제의', '현실적', '실질적', '명확한', '육체적', '물질적', '감각적', '실용적', '좋은'],
    tips({
      etymology: 'abs(떨어져) + tract(끌다) -> 본질만 끌어내다',
      visual: '몇몇 기하학적 도형으로 된 추상화',
      soundAlike: '앱스트랙트 = 앱스트랙션(추출)',
      context: 'Abstract art does not represent reality.',
      synonymAntonym: '동의어: theoretical, conceptual, 반의어: concrete',
    }),
    {
      definition: 'existing as a concept or idea rather than in physical form',
      wordDistractors: ['Contract', 'Extract', 'Subtract'],
      definitionDistractors: [
        'a written agreement between two parties',
        'to remove or obtain something',
        'to take away a number from another',
      ],
      exampleSentences: [
        { en: 'Abstract art does not represent reality.', ko: '추상 미술은 현실을 재현하지 않는다.' },
        { en: 'Love is an abstract concept.', ko: '사랑은 추상적인 개념이다.' },
      ],
    }
  ),
  word('Accurate', '정확한', 5, 'adjective',
    ['부정확한', '틀린', '오류가 있는', '대략적인', '애매한', '모호한', '착오', '왜곡', '편향', '불명확'],
    tips({
      etymology: 'ac(향하여) + cur(주의) + -ate -> 주의를 기울여 정확하게',
      visual: '정확히 0을 가리키는 저울',
      soundAlike: '애큐리트 = 애큐러시(정확도)',
      context: 'We need accurate data for the report.',
      synonymAntonym: '동의어: precise, exact, 반의어: inaccurate',
    }),
    {
      definition: 'correct in all details; free from error',
      wordDistractors: ['Curate', 'Obscure', 'Secure'],
      definitionDistractors: [
        'to organize and look after a collection',
        'not clearly expressed or easily understood',
        'fixed or fastened so it cannot move',
      ],
      exampleSentences: [
        { en: 'We need accurate data for the report.', ko: '보고서를 위해 정확한 데이터가 필요하다.' },
        { en: 'The witness gave an accurate description.', ko: '목격자가 정확한 묘사를 제공했다.' },
      ],
    }
  ),
  word('Acknowledge', '인정하다', 5, 'verb',
    ['부정하다', '거절하다', '무시하다', '부인하다', '숨기다', '은폐하다', '거부하다', '반박하다', '불인정', '회피'],
    tips({
      etymology: 'ac(향하여) + knowledge(지식) -> 알고 있다고 하다',
      visual: '고개를 끄덕이며 인정하는 모습',
      soundAlike: '액놀리지 = 액놀리지먼트(인정)',
      context: 'He acknowledged his mistake.',
      synonymAntonym: '동의어: admit, recognize, 반의어: deny',
    }),
    {
      definition: 'to accept or admit that something exists or is true',
      wordDistractors: ['Knowledge', 'Furnish', 'Astonish'],
      definitionDistractors: [
        'facts and information acquired through experience',
        'to provide or supply furniture',
        'to surprise someone greatly',
      ],
      exampleSentences: [
        { en: 'He acknowledged his mistake publicly.', ko: '그는 자신의 실수를 공개적으로 인정했다.' },
        { en: 'She acknowledged the applause with a smile.', ko: '그녀는 미소로 박수에 응했다.' },
      ],
    }
  ),
  word('Acquire', '획득하다', 5, 'verb',
    ['잃다', '포기하다', '양도하다', '버리다', '상실하다', '매각하다', '기부하다', '반환하다', '잃어버리다', '빼앗기다'],
    tips({
      etymology: 'ac(향하여) + quire(찾다) -> 찾아 얻다',
      visual: '상장을 받으며 달성하는 모습',
      soundAlike: '어콰이어 = 어콰이지션(인수)',
      context: 'She acquired new skills at the workshop.',
      synonymAntonym: '동의어: obtain, gain, 반의어: lose',
    }),
    {
      definition: 'to gain or obtain something through effort or experience',
      wordDistractors: ['Inquire', 'Require', 'Admire'],
      definitionDistractors: [
        'to ask for information',
        'to need something',
        'to regard with respect or warm approval',
      ],
      exampleSentences: [
        { en: 'She acquired new skills at the workshop.', ko: '그녀는 워크숍에서 새로운 기술을 습득했다.' },
        { en: 'The company acquired three smaller firms.', ko: '그 회사는 세 개의 작은 기업을 인수했다.' },
      ],
    }
  ),
  word('Adapt', '적응하다', 5, 'verb',
    ['저항하다', '거부하다', '고수하다', '경직', '유지하다', '불변', '불편', '고집', '배척', '거부'],
    tips({
      etymology: 'ad(향하여) + apt(맞다) -> 맞게 하다',
      visual: '새 환경에서 잘 적응하는 이민자',
      soundAlike: '어댑트 = 어댑테이션(적응)',
      context: 'Animals must adapt to survive.',
      synonymAntonym: '동의어: adjust, acclimatize, 반의어: resist',
    }),
    {
      definition: 'to change or adjust to suit new conditions or environment',
      wordDistractors: ['Adopt', 'Adept', 'Accept'],
      definitionDistractors: [
        'to take on or choose something',
        'very skilled at something',
        'to agree to receive something',
      ],
      exampleSentences: [
        { en: 'Animals must adapt to survive.', ko: '동물들은 생존하려면 적응해야 한다.' },
        { en: 'It took time to adapt to the new job.', ko: '새 직장에 적응하는 데 시간이 걸렸다.' },
      ],
    }
  ),
  word('Adequate', '충분한', 5, 'adjective',
    ['부족한', '불충분', '미달', '과잉', '과다', '결핍', '모자람', '빈약', '희소', '미흡'],
    tips({
      etymology: 'ad(향하여) + equ(같다) + -ate -> 필요한 만큼 같은',
      visual: '충분한 양의 음식이 담긴 접시',
      soundAlike: '애디퀘이트 = 애디퀫시(충분함)',
      context: 'We have adequate supplies for the trip.',
      synonymAntonym: '동의어: sufficient, enough, 반의어: inadequate',
    }),
    {
      definition: 'sufficient or satisfactory in quantity or quality',
      wordDistractors: ['Advocate', 'Delegate', 'Intimate'],
      definitionDistractors: [
        'to publicly support or recommend',
        'a person sent to represent others',
        'very close and personal',
      ],
      exampleSentences: [
        { en: 'We have adequate supplies for the trip.', ko: '여행에 필요한 충분한 물품이 있다.' },
        { en: 'The room was of adequate size.', ko: '그 방은 충분한 크기였다.' },
      ],
    }
  ),
  word('Adopt', '채택하다', 5, 'verb',
    ['거부하다', '포기하다', '배척하다', '버리다', '폐기하다', '기각하다', '반대하다', '거절하다', '배제하다', '제외하다'],
    tips({
      etymology: 'ad(향하여) + opt(선택하다) -> 선택해서 받아들이다',
      visual: '회의에서 찬성 손을 들어 채택하는 모습',
      soundAlike: '어댑트 = 어댑션(입양)',
      context: 'The committee adopted the new policy.',
      synonymAntonym: '동의어: embrace, accept, 반의어: reject',
    }),
    {
      definition: 'to take up or choose something and use or follow it',
      wordDistractors: ['Adapt', 'Adore', 'Admit'],
      definitionDistractors: [
        'to change to suit new conditions',
        'to love and respect deeply',
        'to confess or accept the truth',
      ],
      exampleSentences: [
        { en: 'The committee adopted the new policy.', ko: '위원회는 새 정책을 채택했다.' },
        { en: 'They decided to adopt a child.', ko: '그들은 아이를 입양하기로 결정했다.' },
      ],
    }
  ),
  word('Advocate', '옹호하다', 5, 'verb',
    ['반대하다', '비난하다', '공격하다', '거부하다', '저지하다', '억압하다', '차단하다', '무시하다', '배척하다', '질책하다'],
    tips({
      etymology: 'ad(향하여) + voc(부르다) + -ate -> ~을 위해 외치다',
      visual: '마이크 앞에서 열정적으로 연설하는 사람',
      soundAlike: '애드보케이트 = 애드보커시(옹호)',
      context: 'She advocates for children\'s rights.',
      synonymAntonym: '동의어: support, champion, 반의어: oppose',
    }),
    {
      definition: 'to publicly support or recommend a cause or policy',
      wordDistractors: ['Advertise', 'Advance', 'Adverse'],
      definitionDistractors: [
        'to promote a product or service',
        'to move forward or make progress',
        'harmful or unfavorable',
      ],
      exampleSentences: [
        { en: 'She advocates for children\'s rights.', ko: '그녀는 아동 권리를 옹호한다.' },
        { en: 'He advocates reducing carbon emissions.', ko: '그는 탄소 배출 감소를 주장한다.' },
      ],
    }
  ),
  word('Affect', '영향을 미치다', 5, 'verb',
    ['무관하다', '영향 없음', '불변', '그대로', '독립', '중립', '배제', '무시', '제외', '무관'],
    tips({
      etymology: 'af(향하여) + fect(하다) -> ~에게 작용하다',
      visual: '돌이 물에 떨어져 파문이 퍼지는 모습',
      soundAlike: '어펙트 = 이펙트(효과)와 구분',
      context: 'Weather can affect our mood.',
      synonymAntonym: '동의어: influence, impact',
    }),
    {
      definition: 'to produce a change or influence on something',
      wordDistractors: ['Effect', 'Afford', 'Afflict'],
      definitionDistractors: [
        'a result or consequence of an action',
        'to have enough money to pay for',
        'to cause suffering or distress',
      ],
      exampleSentences: [
        { en: 'Weather can affect our mood.', ko: '날씨는 우리 기분에 영향을 미칠 수 있다.' },
        { en: 'The decision will affect many people.', ko: '그 결정은 많은 사람들에게 영향을 미칠 것이다.' },
      ],
    }
  ),
  word('Afford', '~할 여유가 있다', 5, 'verb',
    ['빈곤', '불가능', '어렵다', '부족', '못하다', '불충분', '빈털터리', '가난', '무능', '불가'],
    tips({
      etymology: 'af(향하여) + ford(앞으로) -> 앞으로 나갈 수 있다',
      visual: '지갑을 열고 결제할 수 있는 모습',
      soundAlike: '어포드 = 어포더블(감당 가능한)',
      context: 'I cannot afford to buy a new car.',
      synonymAntonym: '동의어: have enough for, manage',
    }),
    {
      definition: 'to have enough money or resources to pay for something',
      wordDistractors: ['Avoid', 'Award', 'Adorn'],
      definitionDistractors: [
        'to keep away from something',
        'a prize or recognition given',
        'to decorate or add beauty to something',
      ],
      exampleSentences: [
        { en: 'I cannot afford to buy a new car.', ko: '나는 새 차를 살 여유가 없다.' },
        { en: 'We can afford a short vacation.', ko: '우리는 짧은 휴가를 낼 여유가 있다.' },
      ],
    }
  ),
  word('Aggressive', '공격적인', 5, 'adjective',
    ['소극적인', '온순한', '수동적', '조용한', '겸손한', '신중한', '보수적', '미온적', '차분한', '평화적'],
    tips({
      etymology: 'ad(향하여) + gress(걷다) + -ive -> 밀고 나가는',
      visual: '공격적인 자세를 취한 선수',
      soundAlike: '어그레시브 = 어그레션(공격)',
      context: 'He has an aggressive sales style.',
      synonymAntonym: '동의어: assertive, forceful, 반의어: passive',
    }),
    {
      definition: 'ready or likely to attack or confront; forceful',
      wordDistractors: ['Progressive', 'Expressive', 'Impassive'],
      definitionDistractors: [
        'developing or advancing gradually',
        'conveying emotion or meaning clearly',
        'not showing emotion',
      ],
      exampleSentences: [
        { en: 'He has an aggressive sales style.', ko: '그는 공격적인 영업 스타일을 가지고 있다.' },
        { en: 'The dog became aggressive when provoked.', ko: '그 개는 자극받으면 공격적으로 변했다.' },
      ],
    }
  ),
  word('Allocate', '배분하다', 5, 'verb',
    ['집중하다', '독점하다', '보유하다', '집적', '고수', '철수', '회수', '몰수', '독점', '보유'],
    tips({
      etymology: 'al(향하여) + loc(장소) + -ate -> 각 장소에 배치하다',
      visual: '예산을 여러 항목에 나누는 표',
      soundAlike: '앨로케이트 = 앨로케이션(배분)',
      context: 'We need to allocate resources wisely.',
      synonymAntonym: '동의어: distribute, assign, 반의어: hoard',
    }),
    {
      definition: 'to distribute or assign resources or duties for a purpose',
      wordDistractors: ['Location', 'Locate', 'Advocate'],
      definitionDistractors: [
        'a particular place or position',
        'to find the exact position of something',
        'to publicly support a cause',
      ],
      exampleSentences: [
        { en: 'We need to allocate resources wisely.', ko: '리소스를 현명하게 배분해야 한다.' },
        { en: 'They allocated three hours for the meeting.', ko: '그들은 회의에 3시간을 할당했다.' },
      ],
    }
  ),
  word('Alter', '변경하다', 5, 'verb',
    ['유지하다', '고수하다', '보존하다', '고정하다', '불변', '그대로', '정지', '동결', '보존', '유지'],
    tips({
      etymology: '라틴어 alter(다른)에서 유래',
      visual: '수정 펜으로 글을 고치는 손',
      soundAlike: '올터 = 얼터네이티브(대안)',
      context: 'We had to alter our plans.',
      synonymAntonym: '동의어: modify, change, 반의어: preserve',
    }),
    {
      definition: 'to change or modify something without completely replacing it',
      wordDistractors: ['Alert', 'Falter', 'Halter'],
      definitionDistractors: [
        'watchful for possible danger',
        'to lose strength or momentum',
        'a strap for leading a horse',
      ],
      exampleSentences: [
        { en: 'We had to alter our plans.', ko: '우리는 계획을 변경해야 했다.' },
        { en: 'The tailor altered the dress to fit.', ko: '재단사가 드레스를 맞춤 수정했다.' },
      ],
    }
  ),
  word('Alternative', '대안', 5, 'noun',
    ['유일', '독점', '필수', '단일', '일원', '고정', '불가피', '필연', '단일안', '단독'],
    tips({
      etymology: 'alter(다른) + -native -> 다른 선택지',
      visual: '갈림길에서 두 경로를 가리키는 표지판',
      soundAlike: '얼터너티브 = 얼터네이트(대체하다)',
      context: 'We need an alternative plan.',
      synonymAntonym: '동의어: option, substitute',
    }),
    {
      definition: 'one of two or more available possibilities or choices',
      wordDistractors: ['Alternate', 'Native', 'Nominative'],
      definitionDistractors: [
        'to occur in turn repeatedly',
        'belonging to a place by birth',
        'relating to the grammatical case',
      ],
      exampleSentences: [
        { en: 'We need an alternative plan.', ko: '대안적인 계획이 필요하다.' },
        { en: 'Is there an alternative route?', ko: '다른 경로가 있나요?' },
      ],
    }
  ),
  word('Anticipate', '예상하다', 5, 'verb',
    ['놀라다', '의외', '무지', '무관심', '소홀', '회피', '후회', '뒤늦게', '무시', '방치'],
    tips({
      etymology: 'anti(앞) + cip(잡다) + -ate -> 앞서 잡다',
      visual: '다가올 폭풍을 바라보는 사람',
      soundAlike: '앤티시페이트 = 앤티시페이션(예상)',
      context: 'We anticipate problems ahead.',
      synonymAntonym: '동의어: expect, foresee, 반의어: be surprised',
    }),
    {
      definition: 'to regard as likely to happen; expect beforehand',
      wordDistractors: ['Participate', 'Manipulate', 'Culminate'],
      definitionDistractors: [
        'to take part in an activity',
        'to handle or control skillfully',
        'to reach a climax or conclusion',
      ],
      exampleSentences: [
        { en: 'We anticipate problems ahead.', ko: '우리는 앞으로 문제가 있을 것으로 예상한다.' },
        { en: 'The meeting is anticipated to last two hours.', ko: '회의는 2시간 정도 걸릴 것으로 예상된다.' },
      ],
    }
  ),
  word('Appetite', '식욕', 5, 'noun',
    ['포만', '포식', '거부감', '메스캐움', '불쾌', '혐오', '싫증', '무관심', '냉담', '의욕 상실'],
    tips({
      etymology: 'ad(향하여) + pet(추구하다) + -ite -> 추구하는 욕구',
      visual: '맛있는 음식을 앞에 두고 설레는 표정',
      soundAlike: '앱퍼타이트 = 앱퍼타이저(전채)',
      context: 'I have no appetite today.',
      synonymAntonym: '동의어: hunger, desire',
    }),
    {
      definition: 'a natural desire to satisfy a bodily need, especially for food',
      wordDistractors: ['Aptitude', 'Attitude', 'Altitude'],
      definitionDistractors: [
        'natural ability or skill',
        'a way of thinking or feeling',
        'height above sea level',
      ],
      exampleSentences: [
        { en: 'I have no appetite today.', ko: '오늘은 식욕이 없다.' },
        { en: 'Exercise increases your appetite.', ko: '운동은 식욕을 증가시킨다.' },
      ],
    }
  ),
  word('Applicable', '적용 가능한', 5, 'adjective',
    ['부적합', '미적용', '무관', '배제', '예외', '불가', '부적절', '타당하지 않음', '무의미', '무효'],
    tips({
      etymology: 'ap(향하여) + plic(붙이다) + -able -> 적용할 수 있는',
      visual: '틀에 맞는 퍼즐 조각',
      soundAlike: '어플리커블 = 어플라이(적용하다)',
      context: 'This rule is not applicable here.',
      synonymAntonym: '동의어: relevant, pertinent, 반의어: inapplicable',
    }),
    {
      definition: 'relevant or appropriate to a particular situation',
      wordDistractors: ['Applicant', 'Applicator', 'Complicable'],
      definitionDistractors: [
        'a person who applies for something',
        'a device for applying a substance',
        'able to be made more complex',
      ],
      exampleSentences: [
        { en: 'This rule is not applicable here.', ko: '이 규칙은 여기에 적용되지 않는다.' },
        { en: 'The discount is applicable to all items.', ko: '할인은 모든 품목에 적용된다.' },
      ],
    }
  ),
  word('Appoint', '임명하다', 5, 'verb',
    ['해임하다', '면직하다', '퇴임시키다', '거절하다', '사퇴하다', '축출하다', '파면하다', '해고하다', '배제하다', '제외하다'],
    tips({
      etymology: 'ap(향하여) + point(가리키다) -> 지목하다',
      visual: '임명장을 받는 새로운 관리자',
      soundAlike: '어포인트 = 어포인트먼트(약속)',
      context: 'The board appointed a new CEO.',
      synonymAntonym: '동의어: designate, assign, 반의어: dismiss',
    }),
    {
      definition: 'to assign a job or role to someone officially',
      wordDistractors: ['Anoint', 'Joint', 'Disappoint'],
      definitionDistractors: [
        'to smear or rub with oil ceremonially',
        'a place where two things are joined',
        'to fail to meet expectations',
      ],
      exampleSentences: [
        { en: 'The board appointed a new CEO.', ko: '이사회가 새 CEO를 임명했다.' },
        { en: 'She was appointed to the committee.', ko: '그녀는 위원회에 임명되었다.' },
      ],
    }
  ),
  word('Appreciate', '감사하다', 5, 'verb',
    ['비난하다', '경멸하다', '무시하다', '싫어하다', '비판하다', '불평하다', '냉담하다', '거절하다', '혐오하다', '푸대접하다'],
    tips({
      etymology: 'ap(향하여) + preci(가치) + -ate -> 가치를 높이 평가하다',
      visual: '선물을 받고 감사해하는 표정',
      soundAlike: '어프리시에이트 = 어프리시에이션(감사)',
      context: 'I appreciate your help.',
      synonymAntonym: '동의어: value, be grateful for, 반의어: disparage',
    }),
    {
      definition: 'to recognize the value or significance of something; be grateful',
      wordDistractors: ['Appropriate', 'Apprehend', 'Depreciate'],
      definitionDistractors: [
        'suitable or proper for the situation',
        'to arrest or understand',
        'to decrease in value over time',
      ],
      exampleSentences: [
        { en: 'I appreciate your help.', ko: '당신의 도움에 감사합니다.' },
        { en: 'We appreciate your patience.', ko: '당신의 인내에 감사합니다.' },
      ],
    }
  ),
  word('Appropriate', '적절한', 5, 'adjective',
    ['부적절한', '부적합', '어색한', '부적절', '무례한', '부당한', '어울리지 않는', '틀린', '부정확', '좋은'],
    tips({
      etymology: 'ap(향하여) + propri(자기 것) + -ate -> 자기에게 맞는',
      visual: '상황에 맞는 복장을 입은 사람',
      soundAlike: '어프로프리이트 = 어프로프리에이트(전용하다)',
      context: 'That was not an appropriate comment.',
      synonymAntonym: '동의어: suitable, fitting, 반의어: inappropriate',
    }),
    {
      definition: 'suitable or proper in the circumstances',
      wordDistractors: ['Approximate', 'Appreciate', 'Proprietary'],
      definitionDistractors: [
        'close to the actual but not exact',
        'to recognize the value of something',
        'relating to ownership or exclusive rights',
      ],
      exampleSentences: [
        { en: 'That was not an appropriate comment.', ko: '그건 적절하지 않은 발언이었다.' },
        { en: 'Wear appropriate attire for the interview.', ko: '면접에 적절한 복장을 입으세요.' },
      ],
    }
  ),
  word('Approximate', '대략적인', 5, 'adjective',
    ['정확한', '정밀한', '엄밀한', '정확', '실측', '입증된', '확정', '정해진', '확실', '좋은'],
    tips({
      etymology: 'ap(향하여) + proxim(가까운) + -ate -> 가까운 수치',
      visual: '대략적인 숫자를 손가락으로 보여주는 모습',
      soundAlike: '어프로크시밋 = 어프로크시메이션(근사값)',
      context: 'The approximate cost is $100.',
      synonymAntonym: '동의어: rough, estimated, 반의어: exact',
    }),
    {
      definition: 'close to the actual but not completely accurate',
      wordDistractors: ['Appropriate', 'Proximate', 'Prosecute'],
      definitionDistractors: [
        'suitable for the circumstances',
        'very near in space or time',
        'to conduct legal proceedings against',
      ],
      exampleSentences: [
        { en: 'The approximate cost is $100.', ko: '대략적인 비용은 100달러이다.' },
        { en: 'Give me the approximate figure.', ko: '대략적인 수치를 알려주세요.' },
      ],
    }
  ),
  word('Arbitrary', '임의의', 5, 'adjective',
    ['체계적인', '논리적', '합리적', '규칙적', '일관된', '객관적', '공정한', '법적', '표준', '정당한'],
    tips({
      etymology: '라틴어 arbitrarius(재판관의 판단)에서 유래',
      visual: '주사위를 던지는 손 - 무작위 선택',
      soundAlike: '아비트러리 = 아비트레이트(중재하다)',
      context: 'The rules seem arbitrary.',
      synonymAntonym: '동의어: random, subjective, 반의어: systematic',
    }),
    {
      definition: 'based on random choice or personal whim rather than reason',
      wordDistractors: ['Arbitrate', 'Arbitrator', 'Arbitrage'],
      definitionDistractors: [
        'to settle a dispute between parties',
        'a person who settles disputes',
        'buying and selling to profit from price differences',
      ],
      exampleSentences: [
        { en: 'The rules seem arbitrary.', ko: '그 규칙들은 임의로 정해진 것 같다.' },
        { en: 'There was no arbitrary limit on entries.', ko: '참가 신청에 대한 임의의 제한은 없었다.' },
      ],
    }
  ),
  word('Aspect', '측면', 5, 'noun',
    ['전체', '통합', '핵심', '단일', '일원', '종합', '총체', '복합', '단일면', '일면'],
    tips({
      etymology: 'a(향하여) + spect(보다) -> 바라보는 방향',
      visual: '다이아몬드의 여러 면',
      soundAlike: '애스펙트 = 스펙트럼(스펙트럼)',
      context: 'We must consider every aspect.',
      synonymAntonym: '동의어: facet, dimension',
    }),
    {
      definition: 'a particular part or feature of something',
      wordDistractors: ['Expect', 'Inspect', 'Respect'],
      definitionDistractors: [
        'to regard something as likely to happen',
        'to look at something closely',
        'admiration for someone or something',
      ],
      exampleSentences: [
        { en: 'We must consider every aspect.', ko: '모든 측면을 고려해야 한다.' },
        { en: 'The financial aspect is important.', ko: '재정적 측면이 중요하다.' },
      ],
    }
  ),
  word('Assemble', '조립하다', 5, 'verb',
    ['분해하다', '해체하다', '떼어내다', '분리하다', '해산하다', '흩다', '분산하다', '철거하다', '해체', '분할'],
    tips({
      etymology: 'as(함께) + semble(같다) -> 같은 곳에 모으다',
      visual: '레고 조각을 조립하는 손',
      soundAlike: '어셈블 = 어셈블리(집회)',
      context: 'The workers assembled the furniture.',
      synonymAntonym: '동의어: put together, compile, 반의어: disassemble',
    }),
    {
      definition: 'to fit together the parts of something',
      wordDistractors: ['Resemble', 'Enable', 'Ensemble'],
      definitionDistractors: [
        'to look or be like something',
        'to make something possible',
        'a group of musicians performing together',
      ],
      exampleSentences: [
        { en: 'The workers assembled the furniture.', ko: '직원들이 가구를 조립했다.' },
        { en: 'Please assemble in the hallway.', ko: '복도에 모여 주세요.' },
      ],
    }
  ),
  word('Assert', '주장하다', 5, 'verb',
    ['부정하다', '수긍하다', '동의하다', '포기하다', '물러서다', '낙담하다', '인정하다', '굴복하다', '거절하다', '부인하다'],
    tips({
      etymology: 'as(향하여) + sert(연결하다) -> ~라고 주장하다',
      visual: '주먹을 쥐고 단호하게 말하는 모습',
      soundAlike: '어서트 = 어서션(주장)',
      context: 'She asserted her right to speak.',
      synonymAntonym: '동의어: claim, declare, 반의어: deny',
    }),
    {
      definition: 'to state a fact or belief confidently and forcefully',
      wordDistractors: ['Insert', 'Desert', 'Exert'],
      definitionDistractors: [
        'to place something inside',
        'a dry barren area of land',
        'to apply or bring to bear',
      ],
      exampleSentences: [
        { en: 'She asserted her right to speak.', ko: '그녀는 발언권을 주장했다.' },
        { en: 'He asserted that he was innocent.', ko: '그는 자신이 무죄라고 주장했다.' },
      ],
    }
  ),
  word('Assess', '평가하다', 5, 'verb',
    ['무시하다', '무관심', '추측하다', '오판하다', '과잉평가', '저평가', '방치', '소홀', '회피', '생략'],
    tips({
      etymology: '라틴어 assidere(옆에 앉다) -> 함께 판단하다',
      visual: '평가표를 쓰는 심사관',
      soundAlike: '어세스 = 어세스먼트(평가)',
      context: 'We need to assess the damage.',
      synonymAntonym: '동의어: evaluate, appraise',
    }),
    {
      definition: 'to evaluate or estimate the nature, ability, or quality of something',
      wordDistractors: ['Access', 'Excess', 'Process'],
      definitionDistractors: [
        'a means of approaching something',
        'an amount more than necessary',
        'a series of actions to achieve something',
      ],
      exampleSentences: [
        { en: 'We need to assess the damage.', ko: '피해를 평가해야 한다.' },
        { en: 'Teachers assess students\' progress.', ko: '교사들은 학생들의 진도를 평가한다.' },
      ],
    }
  ),
  word('Assign', '배정하다', 5, 'verb',
    ['회수하다', '해제하다', '포기하다', '거절하다', '배제하다', '제외하다', '철회하다', '취소하다', '해임하다', '이탈'],
    tips({
      etymology: 'as(향하여) + sign(표시하다) -> ~에게 표시하다',
      visual: '업무 일정표에 할당을 쓰는 손',
      soundAlike: '어사인 = 어사인먼트(과제)',
      context: 'The teacher assigned homework.',
      synonymAntonym: '동의어: allocate, designate',
    }),
    {
      definition: 'to allocate a task or duty to someone',
      wordDistractors: ['Design', 'Resign', 'Consign'],
      definitionDistractors: [
        'to plan or create something',
        'to voluntarily leave a job',
        'to hand over or deliver',
      ],
      exampleSentences: [
        { en: 'The teacher assigned homework.', ko: '선생님이 숙제를 내주셨다.' },
        { en: 'They assigned me to the marketing team.', ko: '그들은 나를 마케팅 팀에 배정했다.' },
      ],
    }
  ),
  word('Assist', '돕다', 5, 'verb',
    ['방해하다', '방해', '저지하다', '무시하다', '거절하다', '방치하다', '해치다', '훼방하다', '저해하다', '먹다'],
    tips({
      etymology: 'as(향하여) + sist(서다) -> ~옆에 서다',
      visual: '넘어질 사람을 부축하는 손',
      soundAlike: '어시스트 = 어시스턴트(조수)',
      context: 'Can you assist me with this?',
      synonymAntonym: '동의어: help, aid, 반의어: hinder',
    }),
    {
      definition: 'to help someone by doing a share of the work',
      wordDistractors: ['Insist', 'Persist', 'Resist'],
      definitionDistractors: [
        'to demand something forcefully',
        'to continue firmly despite difficulty',
        'to oppose or withstand something',
      ],
      exampleSentences: [
        { en: 'Can you assist me with this?', ko: '이것 좀 도와주실 수 있나요?' },
        { en: 'Nurses assist doctors during surgery.', ko: '간호사들은 수술 중 의사를 돕는다.' },
      ],
    }
  ),
  word('Assume', '가정하다', 5, 'verb',
    ['확인하다', '입증하다', '부정하다', '의심하다', '검증하다', '검토하다', '실증', '입증', '증명', '확정'],
    tips({
      etymology: 'as(향하여) + sume(잡다) -> 자기 것으로 취하다',
      visual: '생각하는 모습 - 가설을 세우는 두뇌',
      soundAlike: '어슘 = 어솀프션(가정)',
      context: 'We assume he will come.',
      synonymAntonym: '동의어: suppose, presume',
    }),
    {
      definition: 'to suppose something to be true without proof',
      wordDistractors: ['Consume', 'Resume', 'Presume'],
      definitionDistractors: [
        'to eat or use up',
        'to begin again after a pause',
        'to suppose something is true',
      ],
      exampleSentences: [
        { en: 'We assume he will come.', ko: '그가 올 것으로 가정한다.' },
        { en: 'Never assume; always verify.', ko: '절대 추측하지 말고 항상 확인하라.' },
      ],
    }
  ),
  word('Attitude', '태도', 5, 'noun',
    ['행동', '결과', '환경', '사실', '객관', '물질', '형식', '규칙', '절차', '제도'],
    tips({
      etymology: '라틴어 aptus(맞는)에서 유래 -> 마음의 자세',
      visual: '긍정적인 표정으로 대하는 사람',
      soundAlike: '애티튜드 = 알티튜드(고도)',
      context: 'Your attitude affects the outcome.',
      synonymAntonym: '동의어: mindset, disposition',
    }),
    {
      definition: 'a settled way of thinking or feeling about something',
      wordDistractors: ['Altitude', 'Aptitude', 'Latitude'],
      definitionDistractors: [
        'height above sea level',
        'natural ability or skill',
        'freedom from restrictions',
      ],
      exampleSentences: [
        { en: 'Your attitude affects the outcome.', ko: '당신의 태도가 결과에 영향을 미친다.' },
        { en: 'She has a positive attitude toward work.', ko: '그녀는 일에 대해 긍정적인 태도를 가지고 있다.' },
      ],
    }
  ),
  word('Attribute', '~에 귀속시키다', 5, 'verb',
    ['부정하다', '거부하다', '무시하다', '배제하다', '제외하다', '부인하다', '거절하다', '억울하다', '변명하다', '회피하다'],
    tips({
      etymology: 'at(향하여) + tribute(주다) -> ~에게 돌리다',
      visual: '시상대에서 트로피를 받는 승자',
      soundAlike: '애트리뷰트 = 컨트리뷰트(기여하다)',
      context: 'We attribute success to hard work.',
      synonymAntonym: '동의어: ascribe, credit',
    }),
    {
      definition: 'to regard something as being caused by someone or something',
      wordDistractors: ['Contribute', 'Distribute', 'Tribute'],
      definitionDistractors: [
        'to give something toward a cause',
        'to spread or share among many',
        'an act or statement showing respect',
      ],
      exampleSentences: [
        { en: 'We attribute success to hard work.', ko: '우리는 성공을 노력에 귀속시킨다.' },
        { en: 'The quote was wrongly attributed to him.', ko: '그 인용문이 잘못 그에게 귀속되었다.' },
      ],
    }
  ),
  word('Authority', '권한', 5, 'noun',
    ['무권한', '무력', '복종', '예속', '비종속', '독립', '자율', '무지', '무경험', '무능'],
    tips({
      etymology: '라틴어 auctor(창조자)에서 유래',
      visual: '공문서에 도장을 찍는 관료',
      soundAlike: '어쏘리티 = 어쏘리테이티브(권위 있는)',
      context: 'He has no authority to decide.',
      synonymAntonym: '동의어: power, jurisdiction',
    }),
    {
      definition: 'the power or right to give orders and enforce obedience',
      wordDistractors: ['Majority', 'Priority', 'Minority'],
      definitionDistractors: [
        'the greater number or part',
        'the fact of being more important',
        'the smaller number or part',
      ],
      exampleSentences: [
        { en: 'He has no authority to decide.', ko: '그에게 결정할 권한이 없다.' },
        { en: 'You need to speak to someone in authority.', ko: '권한이 있는 사람과 이야기해야 한다.' },
      ],
    }
  ),
  word('Automatic', '자동의', 5, 'adjective',
    ['수동의', '손동작', '인력', '손수', '직접', '의도적', '임의', '선택적', '수작업', '매뉴얼'],
    tips({
      etymology: '그리스어 autos(자기) + matos(움직임) -> 스스로 움직이는',
      visual: '자동으로 문이 열리는 슬라이딩 도어',
      soundAlike: '오토매틱 = 오토메이션(자동화)',
      context: 'The door opens automatically.',
      synonymAntonym: '동의어: mechanical, spontaneous, 반의어: manual',
    }),
    {
      definition: 'working by itself with little or no human control',
      wordDistractors: ['Aromatic', 'Problematic', 'Diplomatic'],
      definitionDistractors: [
        'having a pleasant smell',
        'causing problems or difficulties',
        'skilled at dealing with people',
      ],
      exampleSentences: [
        { en: 'The door opens automatically.', ko: '문이 자동으로 열린다.' },
        { en: 'There is an automatic renewal option.', ko: '자동 갱신 옵션이 있다.' },
      ],
    }
  ),
  word('Barely', '겨우', 5, 'adverb',
    ['넉넉히', '충분히', '여유있게', '쉽게', '편하게', '넉넉', '풍부', '넉넉함', '과다', '여유'],
    tips({
      etymology: 'bare(벌거벗은) + -ly -> 거의 없는',
      visual: '끝자락에 겨우 매달린 사람',
      soundAlike: '베얼리 = 베어(벌거벗은)',
      context: 'We barely made it on time.',
      synonymAntonym: '동의어: scarcely, hardly',
    }),
    {
      definition: 'only just; almost not',
      wordDistractors: ['Barley', 'Barrel', 'Bare'],
      definitionDistractors: [
        'a type of cereal grain',
        'a cylindrical container',
        'uncovered or naked',
      ],
      exampleSentences: [
        { en: 'We barely made it on time.', ko: '우리는 겨우 제시간에 도착했다.' },
        { en: 'She could barely hear him.', ko: '그녀는 그의 말을 겨우 들을 수 있었다.' },
      ],
    }
  ),
  word('Barrier', '장벽', 5, 'noun',
    ['통로', '개방', '접근', '연결', '길', '다리', '문', '출구', '개방구', '사과'],
    tips({
      etymology: 'bar(막대) + -rier -> 막는 것',
      visual: '높은 담장이나 울타리',
      soundAlike: '배리어 = 배리어 프리(장벽 없는)',
      context: 'Language can be a barrier.',
      synonymAntonym: '동의어: obstacle, blockade',
    }),
    {
      definition: 'a fence or obstacle that blocks movement or access',
      wordDistractors: ['Carrier', 'Warrior', 'Harrier'],
      definitionDistractors: [
        'a person or thing that carries something',
        'a person engaged in warfare',
        'a bird of prey or type of aircraft',
      ],
      exampleSentences: [
        { en: 'Language can be a barrier.', ko: '언어가 장벽이 될 수 있다.' },
        { en: 'They removed the trade barriers.', ko: '그들은 무역 장벽을 제거했다.' },
      ],
    }
  ),
  word('Behalf', '~을 위해', 5, 'noun',
    ['반대', '적대', '불리', '해악', '손해', '불이익', '비호', '무관', '독자적', '자기'],
    tips({
      etymology: 'be(~에) + half(측면) -> ~의 편에',
      visual: '대신 말하는 변호사',
      soundAlike: '비하프 = 온 비하프 오브(~을 대신하여)',
      context: 'I am speaking on behalf of the group.',
      synonymAntonym: '동의어: in place of, for',
    }),
    {
      definition: 'in the interest or support of someone',
      wordDistractors: ['Behave', 'Behold', 'Behest'],
      definitionDistractors: [
        'to act in a specified way',
        'to see or observe',
        'a person\'s order or command',
      ],
      exampleSentences: [
        { en: 'I am speaking on behalf of the group.', ko: '나는 그룹을 대신해서 말하고 있습니다.' },
        { en: 'Donations were collected on his behalf.', ko: '그를 대신하여 기부금이 모였다.' },
      ],
    }
  ),
  word('Bewildered', '당황한', 5, 'adjective',
    ['냉정한', '침착한', '확신한', '명확한', '자신있는', '안정된', '평온한', '확신', '명료', '침착'],
    tips({
      etymology: 'be(~하게) + wilder(길을 잃다) + -ed -> 길을 잃은',
      visual: '갈림길에서 헤매는 표정',
      soundAlike: '비윌더드 = 비윌더먼트(당황)',
      context: 'She looked bewildered by the news.',
      synonymAntonym: '동의어: confused, perplexed, 반의어: composed',
    }),
    {
      definition: 'perplexed and confused; unable to understand',
      wordDistractors: ['Bewildering', 'Wilderness', 'Wilder'],
      definitionDistractors: [
        'causing confusion or perplexity',
        'an uncultivated area of land',
        'to cause someone to lose their way',
      ],
      exampleSentences: [
        { en: 'She looked bewildered by the news.', ko: '그녀는 그 소식에 당황해 보였다.' },
        { en: 'The tourists were bewildered by the map.', ko: '관광객들은 지도에 당황했다.' },
      ],
    }
  ),
  word('Bias', '편견', 5, 'noun',
    ['공정', '객관', '중립', '균형', '정직', '공정성', '무편견', '객관성', '균형감', '타당'],
    tips({
      etymology: '프랑스어 biais(비스듬한)에서 유래',
      visual: '한쪽으로 기울어진 저울',
      soundAlike: '바이어스 = 바이어스드(편견 있는)',
      context: 'The judge showed no bias.',
      synonymAntonym: '동의어: prejudice, partiality, 반의어: impartiality',
    }),
    {
      definition: 'inclination or prejudice for or against someone or something',
      wordDistractors: ['Bonus', 'Bound', 'Bliss'],
      definitionDistractors: [
        'a sum of money added to pay',
        'restricted or confined',
        'an extra payment or reward',
      ],
      exampleSentences: [
        { en: 'The judge showed no bias.', ko: '판사는 편견을 보이지 않았다.' },
        { en: 'Media bias can influence public opinion.', ko: '미디어 편견은 여론에 영향을 줄 수 있다.' },
      ],
    }
  ),
  word('Bond', '유대', 5, 'noun',
    ['이격', '분리', '단절', '적대', '불화', '갈등', '적대감', '소원', '거리감', '불신'],
    tips({
      etymology: 'bind(묶다)와 같은 어원',
      visual: '두 손을 맞잡는 모습',
      soundAlike: '본드 = 본딩(유대 형성)',
      context: 'They have a strong bond.',
      synonymAntonym: '동의어: connection, tie',
    }),
    {
      definition: 'a connection or relationship between people or things',
      wordDistractors: ['Bind', 'Band', 'Boned'],
      definitionDistractors: [
        'to tie or fasten together',
        'a flat strip of material',
        'having bones removed',
      ],
      exampleSentences: [
        { en: 'They have a strong bond.', ko: '그들 사이에는 강한 유대가 있다.' },
        { en: 'The bond between mother and child is special.', ko: '어머니와 자식 사이의 유대는 특별하다.' },
      ],
    }
  ),
  word('Boundary', '경계', 5, 'noun',
    ['중앙', '내부', '핵심', '통합', '연속', '개방', '무경계', '혼합', '융합', '일체'],
    tips({
      etymology: 'bound(제한) + -ary -> 제한하는 선',
      visual: '국경선을 표시하는 울타리',
      soundAlike: '바운더리 = 아웃 오브 바운드(경계 밖)',
      context: 'Respect boundaries in relationships.',
      synonymAntonym: '동의어: limit, border',
    }),
    {
      definition: 'a line that marks the limits of an area',
      wordDistractors: ['Foundry', 'Boundless', 'Roundly'],
      definitionDistractors: [
        'a limit or edge of something',
        'a workshop for casting metal',
        'in a thorough or vigorous manner',
      ],
      exampleSentences: [
        { en: 'Respect boundaries in relationships.', ko: '관계에서 경계를 존중하세요.' },
        { en: 'The river forms the boundary between the two countries.', ko: '그 강이 두 나라의 경계를 이룬다.' },
      ],
    }
  ),
  word('Broad', '넓은', 5, 'adjective',
    ['좁은', '협소한', '제한된', '축소', '미세', '협애', '편협', '제한적', '한정', '축소된'],
    tips({
      etymology: '고대 영어 brād에서 유래',
      visual: '넓게 펼쳐진 평원',
      soundAlike: '브로드 = 브로드캐스트(방송)',
      context: 'She has a broad knowledge.',
      synonymAntonym: '동의어: wide, extensive, 반의어: narrow',
    }),
    {
      definition: 'having a large distance from side to side; wide',
      wordDistractors: ['Bread', 'Braid', 'Abroad'],
      definitionDistractors: [
        'baked food made from flour',
        'interlaced strands of hair',
        'in or to a foreign country',
      ],
      exampleSentences: [
        { en: 'She has a broad knowledge.', ko: '그녀는 넓은 지식을 가지고 있다.' },
        { en: 'The river is broad at this point.', ko: '강이 이 지점에서 넓다.' },
      ],
    }
  ),
  word('Budget', '예산', 5, 'noun',
    ['초과', '적자', '탕진', '낭비', '무계획', '과다지출', '초과비용', '빚', '부채', '사과'],
    tips({
      etymology: '프랑스어 bougette(가죽주머니)에서 유래',
      visual: '예산표와 계산기',
      soundAlike: '버짓 = 버짓트(예산의)',
      context: 'We must stay within budget.',
      synonymAntonym: '동의어: financial plan, allocation',
    }),
    {
      definition: 'an estimate of income and expenditure for a set period',
      wordDistractors: ['Budge', 'Bridged', 'Badge'],
      definitionDistractors: [
        'to make a slight movement',
        'to change one\'s opinion',
        'to move something slightly',
      ],
      exampleSentences: [
        { en: 'We must stay within budget.', ko: '예산 범위 내에서 지켜야 한다.' },
        { en: 'The project went over budget.', ko: '그 프로젝트는 예산을 초과했다.' },
      ],
    }
  ),
  word('Burden', '부담', 5, 'noun',
    ['축복', '이득', '편의', '쾌락', '가벼움', '자유', '해방', '경쾌', '기쁨', '유익'],
    tips({
      etymology: '고대 영어 byrthen(나르다)에서 유래',
      visual: '무거운 짐을 지고 걷는 사람',
      soundAlike: '버든 = 버든섬(부담스러운)',
      context: 'He carries a heavy burden.',
      synonymAntonym: '동의어: load, responsibility, 반의어: relief',
    }),
    {
      definition: 'a heavy load or responsibility that causes worry',
      wordDistractors: ['Burn', 'Berth', 'Bunch'],
      definitionDistractors: [
        'injury or damage caused by fire or heat',
        'a place to sleep on a ship or train',
        'a group of things of the same kind',
      ],
      exampleSentences: [
        { en: 'He carries a heavy burden.', ko: '그는 무거운 부담을 짊어지고 있다.' },
        { en: 'Taxes are a burden on small businesses.', ko: '세금은 소규모 사업체에 부담이 된다.' },
      ],
    }
  ),
  word('Bureaucracy', '관료제', 5, 'noun',
    ['민주', '자유', '간소화', '효율', '신속', '민첩', '직접', '개인', '민간', '자율'],
    tips({
      etymology: '프랑스어 bureau(책상) + -cracy(지배) -> 서류 지배',
      visual: '서류 더미 앞의 공무원',
      soundAlike: '뷰로크라시 = 뷰로크랫(관료)',
      context: 'Bureaucracy slows things down.',
      synonymAntonym: '동의어: red tape, administration',
    }),
    {
      definition: 'a system of government with many rules and officials',
      wordDistractors: ['Democracy', 'Aristocracy', 'Theocracy'],
      definitionDistractors: [
        'government by the people',
        'government by the nobility',
        'government by religious leaders',
      ],
      exampleSentences: [
        { en: 'Bureaucracy slows things down.', ko: '관료제는 일을 느리게 한다.' },
        { en: 'We had to deal with too much bureaucracy.', ko: '너무 많은 관료주의와 다뤄야 했다.' },
      ],
    }
  ),
  word('Capable', '유능한', 5, 'adjective',
    ['무능한', '서툰', '미숙한', '부적격', '무력', '한계', '불가', '미숙', '미달', '부족'],
    tips({
      etymology: 'cap(잡다) + -able -> 할 수 있는',
      visual: '어려운 작업을 성공적으로 해내는 사람',
      soundAlike: '케이퍼블 = 케이퍼빌리티(능력)',
      context: 'She is capable of the job.',
      synonymAntonym: '동의어: competent, able, 반의어: incapable',
    }),
    {
      definition: 'having the ability or quality to do something',
      wordDistractors: ['Comparable', 'Culpable', 'Durable'],
      definitionDistractors: [
        'able to be compared',
        'deserving blame',
        'able to withstand wear',
      ],
      exampleSentences: [
        { en: 'She is capable of the job.', ko: '그녀는 그 일을 할 능력이 있다.' },
        { en: 'The team is capable of winning.', ko: '그 팀은 우승할 수 있는 실력이 있다.' },
      ],
    }
  ),
  word('Capacity', '수용량', 5, 'noun',
    ['공백', '비어 있음', '부족', '결핍', '미달', '빈곤', '공허', '무능', '한계', '제한'],
    tips({
      etymology: 'cap(잡다) + -acity -> 담을 수 있는 양',
      visual: '가득 찬 컵과 빈 컵',
      soundAlike: '퍼캐퍼티 = 커패시터(축전기)',
      context: 'The stadium has a capacity of 50,000.',
      synonymAntonym: '동의어: volume, capability',
    }),
    {
      definition: 'the maximum amount that something can contain or hold',
      wordDistractors: ['Capability', 'Captivity', 'Capitol'],
      definitionDistractors: [
        'the power or ability to do something',
        'the state of being imprisoned',
        'a building where legislators meet',
      ],
      exampleSentences: [
        { en: 'The stadium has a capacity of 50,000.', ko: '그 경기장의 수용 인원은 5만 명이다.' },
        { en: 'The tank is at full capacity.', ko: '탱크가 최대 용량이다.' },
      ],
    }
  ),
  word('Capture', '포착하다', 5, 'verb',
    ['놓치다', '해방하다', '풀어주다', '방치하다', '유실하다', '실패하다', '놓아주다', '해제', '독립', '자유'],
    tips({
      etymology: '라틴어 capere(잡다)에서 유래',
      visual: '카메라로 순간을 담는 모습',
      soundAlike: '캡처 = 캡처드(포착된)',
      context: 'The photo captures the moment.',
      synonymAntonym: '동의어: seize, catch, 반의어: release',
    }),
    {
      definition: 'to take into one\'s possession or control by force',
      wordDistractors: ['Rapture', 'Rupture', 'Sculpture'],
      definitionDistractors: [
        'a feeling of intense pleasure',
        'a break or tear',
        'a work of art made by carving',
      ],
      exampleSentences: [
        { en: 'The photo captures the moment.', ko: '그 사진이 순간을 포착했다.' },
        { en: 'The army captured the city.', ko: '군대가 그 도시를 점령했다.' },
      ],
    }
  ),
  word('Category', '범주', 5, 'noun',
    ['혼합', '종합', '개별', '통합', '일체', '무분류', '혼재', '복합', '다종', '융합'],
    tips({
      etymology: '그리스어 kategoria(고발)에서 유래',
      visual: '정리된 서랍과 라벨',
      soundAlike: '캐터고리 = 캐터고라이즈(분류하다)',
      context: 'Which category does it belong to?',
      synonymAntonym: '동의어: class, classification',
    }),
    {
      definition: 'a class or division of things with shared characteristics',
      wordDistractors: ['Cemetery', 'Geometry', 'Directory'],
      definitionDistractors: [
        'a place where the dead are buried',
        'the branch of math dealing with shapes',
        'a list of names and addresses',
      ],
      exampleSentences: [
        { en: 'Which category does it belong to?', ko: '어느 범주에 속하나요?' },
        { en: 'There are five main categories.', ko: '다섯 가지 주요 범주가 있다.' },
      ],
    }
  ),
];
