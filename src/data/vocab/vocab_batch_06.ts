import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch06: VocabItem[] = [
  word('Concern', '걱정, 관심사', 3, 'noun',
    ['무관심', '기쁨', '확신', '안도', '만족', '평온', '자신감', '여유', '태평', '즐거움'],
    tips({
      etymology: 'con(함께) + cern(구분하다) -> 함께 마음에 두다',
      visual: '걱정스러운 표정으로 턱을 짚은 사람',
      soundAlike: '콘서른 = 콘서른드(걱정스러운)',
      context: 'My main concern is the safety of the children.',
      synonymAntonym: 'Syn: worry, care, Ant: indifference',
    }),
    {
      definition: 'a matter of interest or importance that causes worry or care',
      wordDistractors: ['Concert', 'Consent', 'Concrete'],
      definitionDistractors: [
        'a live performance of music before an audience',
        'permission or agreement to do something',
        'a hard building material made of cement and aggregate',
      ],
      exampleSentences: [
        { en: 'My main concern is the safety of the children.', ko: '나의 주요 관심사는 아이들의 안전이다.' },
        { en: 'She expressed concern about the rising costs.', ko: '그녀는 상승하는 비용에 대해 우려를 표했다.' },
      ],
    }
  ),
  word('Condition', '상태, 조건', 3, 'noun',
    ['질병', '증상', '원인', '결과', '과정', '방법', '수단', '목적', '의도', '바람'],
    tips({
      etymology: 'con(함께) + dit(말하다) -> 함께 말해진 것',
      visual: '체크리스트에 체크된 조건들',
      soundAlike: '컨디션 = 컨디션 체크(상태 확인)',
      context: 'The car is in excellent condition.',
      synonymAntonym: 'Syn: state, circumstance, Ant: disorder',
    }),
    {
      definition: 'the state something is in or a requirement that must be met',
      wordDistractors: ['Position', 'Addition', 'Tradition'],
      definitionDistractors: [
        'the place where someone or something is located',
        'the process of adding numbers or things together',
        'a belief or custom passed down through generations',
      ],
      exampleSentences: [
        { en: 'The car is in excellent condition.', ko: '그 차는 아주 좋은 상태이다.' },
        { en: 'One condition of the job is a valid passport.', ko: '그 직업의 조건 중 하나는 유효한 여권이다.' },
      ],
    }
  ),
  word('Confident', '자신 있는', 3, 'adjective',
    ['자신 없는', '소심한', '겁많은', '불안한', '의심스러운', '수줍은', '위축된', '겸손한', '조심스러운', '우물쭈물한'],
    tips({
      etymology: 'con(완전히) + fid(믿다) -> 완전히 믿는',
      visual: '캐릭터가 가슴을 펴고 서 있는 모습',
      soundAlike: '컨피던트 = 컨피던스(자신감)',
      context: 'She felt confident about the interview.',
      synonymAntonym: 'Syn: self-assured, certain, Ant: insecure',
    }),
    {
      definition: 'feeling or showing certainty about one\'s abilities or success',
      wordDistractors: ['Comfortable', 'Consequent', 'Convenient'],
      definitionDistractors: [
        'happening as a result of something else',
        'suitable or easy to use',
        'keeping information secret',
      ],
      exampleSentences: [
        { en: 'She felt confident about the interview.', ko: '그녀는 면접에 자신감을 느꼈다.' },
        { en: 'He spoke in a confident tone.', ko: '그는 자신 있는 어조로 말했다.' },
      ],
    }
  ),
  word('Confirm', '확인하다', 3, 'verb',
    ['부인하다', '취소하다', '거절하다', '의심하다', '혼동하다', '무시하다', '잊다', '변경하다', '폐기하다', '부정하다'],
    tips({
      etymology: 'con(강조) + firm(굳히다) -> 확실히 굳히다',
      visual: '체크 표시를 하는 손',
      soundAlike: '컨펌 = 컨펌레이션(확인)',
      context: 'Please confirm your reservation by Friday.',
      synonymAntonym: 'Syn: verify, validate, Ant: deny',
    }),
    {
      definition: 'to establish the truth or correctness of something',
      wordDistractors: ['Conform', 'Confront', 'Convey'],
      definitionDistractors: [
        'to comply with rules or standards',
        'to face or deal with a difficult situation',
        'to transport or communicate something',
      ],
      exampleSentences: [
        { en: 'Please confirm your reservation by Friday.', ko: '금요일까지 예약을 확인해 주세요.' },
        { en: 'Can you confirm that you received the email?', ko: '이메일을 받았다는 것을 확인해 주시겠어요?' },
      ],
    }
  ),
  word('Connect', '연결하다', 3, 'verb',
    ['분리하다', '끊다', '해제하다', '떼다', '분리', '단절', '해산', '해체', '분해', '단독'],
    tips({
      etymology: 'con(함께) + nect(묶다) -> 함께 묶다',
      visual: '두 플러그가 소켓에 연결되는 모습',
      soundAlike: '커넥트 = 커넥션(연결)',
      context: 'Connect the cable to the port.',
      synonymAntonym: 'Syn: link, join, Ant: disconnect',
    }),
    {
      definition: 'to join or link two or more things together',
      wordDistractors: ['Collect', 'Correct', 'Contact'],
      definitionDistractors: [
        'to gather things together',
        'to fix or amend something wrong',
        'to communicate with someone',
      ],
      exampleSentences: [
        { en: 'Connect the cable to the port.', ko: '케이블을 포트에 연결하세요.' },
        { en: 'She tried to connect with her roots.', ko: '그녀는 자신의 뿌리와 연결하려고 했다.' },
      ],
    }
  ),
  word('Consider', '고려하다', 3, 'verb',
    ['무시하다', '경시하다', '버리다', '즉각 결정', '성급히', '무분별히', '설렁설렁', '가볍게', '대충', '얕보다'],
    tips({
      etymology: 'con(함께) + sider(별) -> 별을 함께 보다, 신중히 보다',
      visual: '생각하는 모습의 실루엣',
      soundAlike: '컨시더 = 컨시더레이션(고려)',
      context: 'We need to consider all options before deciding.',
      synonymAntonym: 'Syn: think about, weigh, Ant: ignore',
    }),
    {
      definition: 'to think carefully about something before making a decision',
      wordDistractors: ['Consist', 'Consume', 'Consent'],
      definitionDistractors: [
        'to be composed or made up of',
        'to eat or use up',
        'to agree or give permission',
      ],
      exampleSentences: [
        { en: 'We need to consider all options before deciding.', ko: '결정하기 전에 모든 선택지를 고려해야 한다.' },
        { en: 'He is considered an expert in the field.', ko: '그는 그 분야의 전문가로 여겨진다.' },
      ],
    }
  ),
  word('Constant', '지속적인', 3, 'adjective',
    ['일시적인', '변경되는', '불규칙한', '간헐적', '희박한', '드문', '가끔의', '때때로', '순간적', '순식간'],
    tips({
      etymology: 'con(함께) + stant(서다) -> 함께 설 채 있는',
      visual: '일정한 파형이 이어지는 그래프',
      soundAlike: '컨스턴트 = 컨스턴트리(지속적으로)',
      context: 'She needs constant care and attention.',
      synonymAntonym: 'Syn: continuous, steady, Ant: variable',
    }),
    {
      definition: 'occurring continuously without change or interruption',
      wordDistractors: ['Consistent', 'Distant', 'Instant'],
      definitionDistractors: [
        'behaving in the same way over time',
        'far away in space or time',
        'happening immediately',
      ],
      exampleSentences: [
        { en: 'She needs constant care and attention.', ko: '그녀는 지속적인 돌봄과 관심이 필요하다.' },
        { en: 'The constant noise made it hard to sleep.', ko: '끊임없는 소음으로 잠들기 어려웠다.' },
      ],
    }
  ),
  word('Construction', '건설, 공사', 3, 'noun',
    ['파괴', '해체', '철거', '폐쇄', '폐업', '종료', '해산', '분해', '무너짐', '붕괴'],
    tips({
      etymology: 'con(함께) + struct(쌓다) + -ion -> 함께 쌓아 올림',
      visual: '크레인과 철골이 있는 건설 현장',
      soundAlike: '컨스트럭션 = 컨스트럭트(건설하다)',
      context: 'The construction of the new bridge will take two years.',
      synonymAntonym: 'Syn: building, erection, Ant: demolition',
    }),
    {
      definition: 'the process of building structures such as buildings or roads',
      wordDistractors: ['Instruction', 'Destruction', 'Restriction'],
      definitionDistractors: [
        'detailed information on how to do something',
        'the act of destroying something',
        'a rule or limit that controls something',
      ],
      exampleSentences: [
        { en: 'The construction of the new bridge will take two years.', ko: '새 다리의 건설에는 2년이 걸릴 것이다.' },
        { en: 'Construction work has blocked the main road.', ko: '공사로 인해 주요 도로가 막혔다.' },
      ],
    }
  ),
  word('Contain', '포함하다', 3, 'verb',
    ['제외하다', '빼다', '분리하다', '배제하다', '꺼내다', '방출하다', '흘리다', '넘치다', '터지다', '풀다'],
    tips({
      etymology: 'con(함께) + tain(잡다) -> 함께 잡고 있다',
      visual: '상자 안에 들어간 물건들',
      soundAlike: '컨테인 = 컨테이너(용기)',
      context: 'This box contains important documents.',
      synonymAntonym: 'Syn: include, hold, Ant: exclude',
    }),
    {
      definition: 'to hold or have something within',
      wordDistractors: ['Obtain', 'Retain', 'Maintain'],
      definitionDistractors: [
        'to get or acquire something',
        'to keep or continue to have',
        'to keep in good condition',
      ],
      exampleSentences: [
        { en: 'This box contains important documents.', ko: '이 상자에는 중요한 문서가 들어 있다.' },
        { en: 'She could barely contain her excitement.', ko: '그녀는 흥분을 거의 참을 수 없었다.' },
      ],
    }
  ),
  word('Content', '내용, 만족', 3, 'noun',
    ['형식', '외관', '표지', '껍데기', '불만', '갈망', '탐욕', '야망', '불평', '불쾌'],
    tips({
      etymology: 'con(함께) + tent(잡다) -> 함께 잡고 있는 것',
      visual: '책을 펼쳐 보여주는 페이지 내용',
      soundAlike: '컨텐트 = 컨텐츠(콘텐츠)',
      context: 'The content of the book is fascinating.',
      synonymAntonym: 'Syn: substance, satisfied, Ant: discontent',
    }),
    {
      definition: 'the information or material contained within something',
      wordDistractors: ['Consent', 'Context', 'Contest'],
      definitionDistractors: [
        'permission or agreement',
        'the circumstances that surround something',
        'a competition or dispute',
      ],
      exampleSentences: [
        { en: 'The content of the book is fascinating.', ko: '그 책의 내용은 매혹적이다.' },
        { en: 'The website has updated its content regularly.', ko: '그 웹사이트는 정기적으로 콘텐츠를 업데이트한다.' },
      ],
    }
  ),
  word('Continue', '계속하다', 3, 'verb',
    ['중단하다', '멈추다', '그만두다', '끊다', '종료하다', '포기하다', '휴식하다', '쉬다', '일시정지', '끝내다'],
    tips({
      etymology: 'con(함께) + tinue(유지하다) -> 계속 유지하다',
      visual: '화살표가 이어지는 흐름도',
      soundAlike: '컨티뉴 = 컨티뉴에이션(계속)',
      context: 'Please continue with your presentation.',
      synonymAntonym: 'Syn: proceed, go on, Ant: stop',
    }),
    {
      definition: 'to keep doing something without stopping',
      wordDistractors: ['Contain', 'Obtain', 'Retain'],
      definitionDistractors: [
        'to hold or have within',
        'to get or acquire',
        'to keep in possession',
      ],
      exampleSentences: [
        { en: 'Please continue with your presentation.', ko: '발표를 계속해 주세요.' },
        { en: 'The rain continued all night.', ko: '비가 밤새 계속 내렸다.' },
      ],
    }
  ),
  word('Contrast', '대조', 3, 'noun',
    ['유사', '동일', '일치', '비슷함', '같음', '혼동', '혼합', '융합', '통합', '조화'],
    tips({
      etymology: 'contra(반대) + st(서다) -> 반대로 서다',
      visual: '검은색과 흰색이 나란히',
      soundAlike: '컨트라스트 = 컨트라스트 뷰(대비)',
      context: 'There is a sharp contrast between the two styles.',
      synonymAntonym: 'Syn: difference, comparison, Ant: similarity',
    }),
    {
      definition: 'a noticeable difference between two or more things',
      wordDistractors: ['Contact', 'Contract', 'Contest'],
      definitionDistractors: [
        'communication or connection with someone',
        'a written agreement between parties',
        'a competition or struggle',
      ],
      exampleSentences: [
        { en: 'There is a sharp contrast between the two styles.', ko: '두 스타일 사이에는 극명한 대조가 있다.' },
        { en: 'The contrast in their personalities was striking.', ko: '그들의 성격 차이는 눈에 띄었다.' },
      ],
    }
  ),
  word('Contribute', '기여하다', 3, 'verb',
    ['방해하다', '해치다', '빼앗다', '손해', '훼손', '무시하다', '패스하다', '기권하다', '포기하다', '거두다'],
    tips({
      etymology: 'con(함께) + tribute(바치다) -> 함께 바치다',
      visual: '기부함에 돈을 넣는 손',
      soundAlike: '컨트리뷰트 = 컨트리뷰션(기여)',
      context: 'Everyone can contribute to the project.',
      synonymAntonym: 'Syn: donate, give, Ant: withhold',
    }),
    {
      definition: 'to give or add something toward a cause or result',
      wordDistractors: ['Distribute', 'Substitute', 'Institution'],
      definitionDistractors: [
        'to share or spread among many',
        'to replace one thing with another',
        'an organization established for a purpose',
      ],
      exampleSentences: [
        { en: 'Everyone can contribute to the project.', ko: '누구나 그 프로젝트에 기여할 수 있다.' },
        { en: 'She contributed a large sum to the charity.', ko: '그녀는 자선단체에 큰 금액을 기부했다.' },
      ],
    }
  ),
  word('Control', '통제, 조절', 3, 'noun',
    ['무질서', '혼란', '방임', '자유', '해방', '해제', '무제한', '폭주', '과잉', '통제 불가'],
    tips({
      etymology: 'contra(반대) + rol(롤) -> 반대를 관리하다',
      visual: '조종간을 잡은 손',
      soundAlike: '컨트롤 = 컨트롤러(조정자)',
      context: 'She has good control over her emotions.',
      synonymAntonym: 'Syn: manage, regulate, Ant: chaos',
    }),
    {
      definition: 'the power to direct or influence behavior or events',
      wordDistractors: ['Conduct', 'Contact', 'Contract'],
      definitionDistractors: [
        'the way someone behaves',
        'communication or connection',
        'a legal agreement',
      ],
      exampleSentences: [
        { en: 'She has good control over her emotions.', ko: '그녀는 자신의 감정을 잘 통제한다.' },
        { en: 'The pilot lost control of the aircraft.', ko: '조종사가 항공기 통제를 잃었다.' },
      ],
    }
  ),
  word('Convenient', '편리한', 3, 'adjective',
    ['불편한', '번거로운', '까다로운', '어려운', '성가신', '귀찮은', '불쾌한', '어색한', '거추장스러운', '힘든'],
    tips({
      etymology: 'con(함께) + ven(오다) + -ient -> 잘 맞게 오는',
      visual: '가까운 편의점 간판',
      soundAlike: '컨비니언트 = 컨비니언스(편의)',
      context: 'The store is in a convenient location.',
      synonymAntonym: 'Syn: handy, easy, Ant: inconvenient',
    }),
    {
      definition: 'suited to one\'s comfort or needs; easy to use',
      wordDistractors: ['Confident', 'Competent', 'Consistent'],
      definitionDistractors: [
        'feeling sure of oneself',
        'having the ability to do something well',
        'unchanging in behavior over time',
      ],
      exampleSentences: [
        { en: 'The store is in a convenient location.', ko: '그 가게는 편리한 위치에 있다.' },
        { en: 'Online shopping is very convenient.', ko: '온라인 쇼핑은 매우 편리하다.' },
      ],
    }
  ),
  word('Conversation', '대화', 3, 'noun',
    ['침묵', '독백', '일방통행', '독서', '격리', '고립', '무시', '무응답', '잠적', '입 다묵'],
    tips({
      etymology: 'con(함께) + vers(돌다) + -ation -> 함께 말을 주고받다',
      visual: '두 사람이 대화하는 모습',
      soundAlike: '컨버세이션 = 컨버스(대화하다)',
      context: 'We had a nice conversation over dinner.',
      synonymAntonym: 'Syn: talk, dialogue, Ant: silence',
    }),
    {
      definition: 'an informal exchange of ideas or talk between people',
      wordDistractors: ['Convention', 'Conversion', 'Concentration'],
      definitionDistractors: [
        'a large formal meeting or agreement',
        'the process of changing from one form to another',
        'the ability to focus attention',
      ],
      exampleSentences: [
        { en: 'We had a nice conversation over dinner.', ko: '저녁 식사 동안 좋은 대화를 나눴다.' },
        { en: 'I overheard their conversation.', ko: '나는 그들의 대화를 엿들었다.' },
      ],
    }
  ),
  word('Convince', '설득하다', 3, 'verb',
    ['의심시키다', '혼란시키다', '거절하다', '설득되지 않다', '믿지 않다', '반대하다', '방해하다', '미심쩍게', '회의적', '무관심'],
    tips({
      etymology: 'con(강조) + vinc(이기다) -> 완전히 이기다',
      visual: '말로 상대를 설득하는 사람',
      soundAlike: '컨빈스 = 컨빈싱(설득하는)',
      context: 'She convinced me to try the new restaurant.',
      synonymAntonym: 'Syn: persuade, sway, Ant: dissuade',
    }),
    {
      definition: 'to cause someone to believe or agree through reasoning',
      wordDistractors: ['Convert', 'Convey', 'Convict'],
      definitionDistractors: [
        'to change from one form to another',
        'to transport or communicate',
        'to declare someone guilty of a crime',
      ],
      exampleSentences: [
        { en: 'She convinced me to try the new restaurant.', ko: '그녀가 나를 설득해서 새 식당을 가보게 했다.' },
        { en: 'I need to convince them of the benefits.', ko: '나는 그들에게 이점을 설득해야 한다.' },
      ],
    }
  ),
  word('Correct', '올바른', 3, 'adjective',
    ['틀린', '잘못된', '부정확한', '오류', '그릇된', '부적절', '부당', '못된', '나쁜', '결함'],
    tips({
      etymology: 'cor(완전히) + rect(곧다) -> 완전히 곧게',
      visual: '빨간 체크 표시가 된 정답',
      soundAlike: '커렉트 = 커렉션(수정)',
      context: 'Your answer is correct.',
      synonymAntonym: 'Syn: right, accurate, Ant: wrong',
    }),
    {
      definition: 'accurate, right, or free from error',
      wordDistractors: ['Connect', 'Collect', 'Corrupt'],
      definitionDistractors: [
        'to join or link together',
        'to gather things together',
        'influenced by bribery or dishonesty',
      ],
      exampleSentences: [
        { en: 'Your answer is correct.', ko: '당신의 답이 맞습니다.' },
        { en: 'Please provide the correct address.', ko: '올바른 주소를 적어 주세요.' },
      ],
    }
  ),
  word('Cotton', '목화, 면', 3, 'noun',
    ['실크', '울', '린넨', '나일론', '폴리에스터', '가죽', '고무', '플라스틱', '종이', '대나무'],
    tips({
      etymology: '아랍어 qutn(목화)에서 유래',
      visual: '부드러운 원형 솜뭉치',
      soundAlike: '코튼 = 코튼 캔디(솜사탕)',
      context: 'This shirt is made of 100% cotton.',
      synonymAntonym: 'Syn: fabric, fiber',
    }),
    {
      definition: 'a soft white fiber from the cotton plant used to make fabric',
      wordDistractors: ['Button', 'Mutton', 'Kitten'],
      definitionDistractors: [
        'a small fastener for clothing',
        'meat from a sheep',
        'a young cat',
      ],
      exampleSentences: [
        { en: 'This shirt is made of 100% cotton.', ko: '이 셔츠는 100% 면으로 되어 있다.' },
        { en: 'Cotton is grown in warm climates.', ko: '목화는 따뜻한 기후에서 재배된다.' },
      ],
    }
  ),
  word('Couple', '한 쌍, 부부', 3, 'noun',
    ['홀몸', '독신', '혼자', '단독', '개별', '단수', '하나', '여럿', '다수', '군중'],
    tips({
      etymology: '라틴어 copula(연결)에서 유래',
      visual: '손을 잡고 있는 두 사람',
      soundAlike: '커플 = 커플 링(부부 반지)',
      context: 'A young couple walked by holding hands.',
      synonymAntonym: 'Syn: pair, duo, Ant: single',
    }),
    {
      definition: 'two people or things considered together',
      wordDistractors: ['Double', 'Trouble', 'Bubble'],
      definitionDistractors: [
        'twice the usual amount or size',
        'difficulty or problems',
        'a thin sphere of liquid enclosing air',
      ],
      exampleSentences: [
        { en: 'A young couple walked by holding hands.', ko: '젊은 부부가 손을 잡고 걸어갔다.' },
        { en: 'I need a couple of minutes to finish.', ko: '마치려면 몇 분이 필요해요.' },
      ],
    }
  ),
  word('Courage', '용기', 3, 'noun',
    ['겁', '소심함', '비겁', '두려움', '수줌', '위축', '주저', '망설임', '무기력', '나약함'],
    tips({
      etymology: '라틴어 cor(마음)에서 유래, 마음의 힘',
      visual: '높은 곳에서 뛰어내리는 사람',
      soundAlike: '커리지 = 커리지어스(용감한)',
      context: 'It takes courage to speak the truth.',
      synonymAntonym: 'Syn: bravery, guts, Ant: cowardice',
    }),
    {
      definition: 'the ability to do something difficult despite fear',
      wordDistractors: ['Cottage', 'Cabbage', 'Carriage'],
      definitionDistractors: [
        'a small simple house in the countryside',
        'a leafy green vegetable',
        'a vehicle with wheels pulled by horses',
      ],
      exampleSentences: [
        { en: 'It takes courage to speak the truth.', ko: '진실을 말하는 데는 용기가 필요하다.' },
        { en: 'She showed great courage during the crisis.', ko: '그녀는 위기 동안 큰 용기를 보여주었다.' },
      ],
    }
  ),
  word('Create', '창조하다', 3, 'verb',
    ['파괴하다', '없애다', '지우다', '제거하다', '해체하다', '폐기하다', '말소하다', '없애버리다', '소멸', '묻다'],
    tips({
      etymology: '라틴어 creare(만들다)에서 유래',
      visual: '붓으로 그림을 그리는 화가',
      soundAlike: '크리에이트 = 크리에이션(창조)',
      context: 'Artists create beautiful works from imagination.',
      synonymAntonym: 'Syn: make, produce, Ant: destroy',
    }),
    {
      definition: 'to bring something into existence',
      wordDistractors: ['Crate', 'Curate', 'Ceramic'],
      definitionDistractors: [
        'a wooden box for shipping',
        'to organize and manage a collection',
        'made of baked clay',
      ],
      exampleSentences: [
        { en: 'Artists create beautiful works from imagination.', ko: '예술가들은 상상력으로 아름다운 작품을 창조한다.' },
        { en: 'She created a new recipe for the restaurant.', ko: '그녀는 식당을 위해 새 레시피를 만들었다.' },
      ],
    }
  ),
  word('Creature', '생명체', 3, 'noun',
    ['기계', '물건', '사물', '무생물', '로봇', '도구', '장치', '건물', '구조물', '건조물'],
    tips({
      etymology: 'creat(만들다) + -ure -> 살아 움직이는 것',
      visual: '숲 속의 다양한 동물들',
      soundAlike: '크리처 = 크리처 피처(생물 특징)',
      context: 'Every creature deserves respect.',
      synonymAntonym: 'Syn: being, animal',
    }),
    {
      definition: 'a living being, especially an animal',
      wordDistractors: ['Feature', 'Nature', 'Measure'],
      definitionDistractors: [
        'a distinctive characteristic',
        'the physical world and its phenomena',
        'a standard unit or amount',
      ],
      exampleSentences: [
        { en: 'Every creature deserves respect.', ko: '모든 생명체는 존중받을 자격이 있다.' },
        { en: 'Strange creatures live in the deep ocean.', ko: '이상한 생물들이 깊은 바다에 산다.' },
      ],
    }
  ),
  word('Credit', '신용, 공로', 3, 'noun',
    ['빚', '부채', '비난', '과실', '수치', '불명예', '무신용', '부정', '사기', '과오'],
    tips({
      etymology: '라틴어 credere(믿다)에서 유래',
      visual: '신용카드를 꺼내는 손',
      soundAlike: '크레딧 = 크레딧 카드',
      context: 'She deserves credit for the success.',
      synonymAntonym: 'Syn: trust, recognition, Ant: blame',
    }),
    {
      definition: 'recognition for effort or the ability to buy now and pay later',
      wordDistractors: ['Budget', 'Rocket', 'Ticket'],
      definitionDistractors: [
        'a plan for spending money',
        'a vehicle that travels into space',
        'a piece of paper for admission',
      ],
      exampleSentences: [
        { en: 'She deserves credit for the success.', ko: '그녀는 그 성공에 공로가 있다.' },
        { en: 'He bought the car on credit.', ko: '그는 신용으로 그 차를 샀다.' },
      ],
    }
  ),
  word('Crime', '범죄', 3, 'noun',
    ['선행', '미덕', '정의', '법적', '합법', '정당', '무해', '순수', '순선', '정직'],
    tips({
      etymology: '라틴어 crimen(고발)에서 유래',
      visual: '경찰 테이프가 둘러진 현장',
      soundAlike: '크라임 = 크라임 씬(범죄 현장)',
      context: 'The crime rate has decreased this year.',
      synonymAntonym: 'Syn: offense, felony, Ant: virtue',
    }),
    {
      definition: 'an illegal act punishable by law',
      wordDistractors: ['Chime', 'Prime', 'Climb'],
      definitionDistractors: [
        'a bell or set of bells making a sound',
        'the best or most important period',
        'to ascend or go upward',
      ],
      exampleSentences: [
        { en: 'The crime rate has decreased this year.', ko: '올해 범죄율이 감소했다.' },
        { en: 'He was charged with a serious crime.', ko: '그는 심각한 범죄로 기소되었다.' },
      ],
    }
  ),
  word('Crisis', '위기', 3, 'noun',
    ['평화', '안정', '번영', '호황', '순조', '안일', '태평', '여유', '평온', '평상'],
    tips({
      etymology: '그리스어 krisis(결정)에서 유래',
      visual: '눈보라 속의 길 잃은 사람',
      soundAlike: '크라이시스 = 크라이시스 매니지먼트',
      context: 'The company faced a financial crisis.',
      synonymAntonym: 'Syn: emergency, ordeal, Ant: calm',
    }),
    {
      definition: 'a time of intense difficulty or danger',
      wordDistractors: ['Basis', 'Emphasis', 'Thesis'],
      definitionDistractors: [
        'the foundation or main part',
        'special importance given to something',
        'a long essay for a degree',
      ],
      exampleSentences: [
        { en: 'The company faced a financial crisis.', ko: '그 회사는 재정 위기에 직면했다.' },
        { en: 'The crisis required immediate action.', ko: '그 위기에는 즉각적인 조치가 필요했다.' },
      ],
    }
  ),
  word('Crop', '농작물', 3, 'noun',
    ['씨앗', '묘목', '수확 전', '비수확', '황무지', '폐경지', '도시', '공장', '기계', '상품'],
    tips({
      etymology: '고대 영어 cropp(끝, 수확)에서 유래',
      visual: '바람에 흔들리는 밀밭',
      soundAlike: '크롭 = 크롭 톱(수확기)',
      context: 'The corn crop was abundant this year.',
      synonymAntonym: 'Syn: harvest, yield',
    }),
    {
      definition: 'plants grown for food or other use',
      wordDistractors: ['Drop', 'Shop', 'Prop'],
      definitionDistractors: [
        'to fall or let fall',
        'a place where goods are sold',
        'a object used to support something',
      ],
      exampleSentences: [
        { en: 'The corn crop was abundant this year.', ko: '올해 옥수수 수확이 풍부했다.' },
        { en: 'Farmers rotate crops to maintain soil health.', ko: '농부들은 토양 건강을 유지하기 위해 작물을 돌려 심는다.' },
      ],
    }
  ),
  word('Cruel', '잔혹한', 3, 'adjective',
    ['자비로운', '친절한', '인자한', '상냥한', '다정한', '온정적', '따뜻한', '배려심', '인정많은', '어질은'],
    tips({
      etymology: '라틴어 crudelis(피비린내 나는)에서 유래',
      visual: '참을 수 없는 고통의 표정',
      soundAlike: '크루얼 = 크루얼티(잔혹함)',
      context: 'It was cruel to leave the animal alone.',
      synonymAntonym: 'Syn: brutal, harsh, Ant: kind',
    }),
    {
      definition: 'causing pain or suffering without pity',
      wordDistractors: ['Crewel', 'Crawl', 'Cruise'],
      definitionDistractors: [
        'a type of embroidery thread',
        'to move slowly on hands and knees',
        'a pleasure trip by ship or boat',
      ],
      exampleSentences: [
        { en: 'It was cruel to leave the animal alone.', ko: '그 동물을 혼자 두는 것은 잔혹했다.' },
        { en: 'The cruel winter claimed many lives.', ko: '잔혹한 겨울이 많은 생명을 앗아갔다.' },
      ],
    }
  ),
  word('Culture', '문화', 3, 'noun',
    ['야만', '미개', '무지', '무식', '무례', '거칠음', '불문명', '원시', '야생', '문명 밖'],
    tips({
      etymology: '라틴어 colere(재배하다)에서 유래',
      visual: '전통 의상을 입은 사람들의 축제',
      soundAlike: '컬처 = 컬처럴(문화적)',
      context: 'Music is an important part of our culture.',
      synonymAntonym: 'Syn: tradition, customs',
    }),
    {
      definition: 'the customs, arts, and beliefs of a society',
      wordDistractors: ['Agriculture', 'Sculpture', 'Literature'],
      definitionDistractors: [
        'the practice of farming',
        'art made by carving or molding',
        'written works of artistic value',
      ],
      exampleSentences: [
        { en: 'Music is an important part of our culture.', ko: '음악은 우리 문화의 중요한 부분이다.' },
        { en: 'Travel helps you understand different cultures.', ko: '여행은 다른 문화를 이해하는 데 도움이 된다.' },
      ],
    }
  ),
  word('Cure', '치료, 치료하다', 3, 'noun',
    ['질병', '악화', '감염', '전염', '발병', '재발', '악성', '치명적', '불치', '만성'],
    tips({
      etymology: '라틴어 cura(돌봄)에서 유래',
      visual: '약을 손에 쥔 환자',
      soundAlike: '큐어 = 큐어러블(치료 가능한)',
      context: 'Scientists are searching for a cure for cancer.',
      synonymAntonym: 'Syn: heal, remedy, Ant: harm',
    }),
    {
      definition: 'a medical treatment that restores health',
      wordDistractors: ['Pure', 'Secure', 'Obscure'],
      definitionDistractors: [
        'free from contamination',
        'free from danger or risk',
        'not clearly expressed or understood',
      ],
      exampleSentences: [
        { en: 'Scientists are searching for a cure for cancer.', ko: '과학자들은 암 치료법을 찾고 있다.' },
        { en: 'Time is often the best cure for grief.', ko: '시간은 종종 슬픔에 대한 최선의 치료법이다.' },
      ],
    }
  ),
  word('Curious', '호기심 많은', 3, 'adjective',
    ['무관심한', '냉담한', '무심한', '관심 없는', '따분해하는', '지루해하는', '무념', '무감각', '둔감', '멍한'],
    tips({
      etymology: '라틴어 curiosus(관심 있는)에서 유래',
      visual: '문틈으로 들여다보는 눈',
      soundAlike: '큐리어스 = 큐리오시티(호기심)',
      context: 'Children are naturally curious about the world.',
      synonymAntonym: 'Syn: inquisitive, interested, Ant: indifferent',
    }),
    {
      definition: 'eager to learn or know something',
      wordDistractors: ['Furious', 'Serious', 'Various'],
      definitionDistractors: [
        'extremely angry',
        'thoughtful and sincere',
        'of many different kinds',
      ],
      exampleSentences: [
        { en: 'Children are naturally curious about the world.', ko: '아이들은 세상에 대해 자연스럽게 호기심이 많다.' },
        { en: 'I was curious about what was inside the box.', ko: '나는 상자 안에 무엇이 있는지 궁금했다.' },
      ],
    }
  ),
  word('Current', '현재의', 3, 'adjective',
    ['과거의', '미래의', '옛날', '구식', '구세대', '구시대', '레거시', '폐기', '종료', '이전'],
    tips({
      etymology: '라틴어 currere(달리다) -> 지금 흐르는',
      visual: '흐르는 강물의 화살표',
      soundAlike: '커런트 = 커런트리(현재)',
      context: 'What is your current address?',
      synonymAntonym: 'Syn: present, ongoing, Ant: past',
    }),
    {
      definition: 'belonging to the present time',
      wordDistractors: ['Currant', 'Recurrent', 'Concurrent'],
      definitionDistractors: [
        'a small dried grape',
        'occurring again and again',
        'existing or happening at the same time',
      ],
      exampleSentences: [
        { en: 'What is your current address?', ko: '현재 주소가 어디인가요?' },
        { en: 'The current situation requires careful handling.', ko: '현재 상황은 신중한 처리가 필요하다.' },
      ],
    }
  ),
  word('Curve', '곡선', 3, 'noun',
    ['직선', '각도', '꺾임', '꺾은선', '직각', '평면', '수평', '수직', '디딤', '계단'],
    tips({
      etymology: '라틴어 curvus(굽은)에서 유래',
      visual: '부드럽게 휘어진 S자 곡선',
      soundAlike: '커브 = 커브드(굽은)',
      context: 'The road has a sharp curve ahead.',
      synonymAntonym: 'Syn: bend, arc, Ant: straight',
    }),
    {
      definition: 'a smoothly bending line without sharp angles',
      wordDistractors: ['Carve', 'Curse', 'Curb'],
      definitionDistractors: [
        'to cut or shape wood or stone',
        'an offensive word or phrase',
        'a raised edge along a street',
      ],
      exampleSentences: [
        { en: 'The road has a sharp curve ahead.', ko: '앞에 급한 커브가 있다.' },
        { en: 'She drew a graceful curve on the paper.', ko: '그녀는 종이에 우아한 곡선을 그렸다.' },
      ],
    }
  ),
  word('Custom', '습관, 관례', 3, 'noun',
    ['이상', '변칙', '예외', '신기함', '낯설음', '이변', '특이', '돌출', '개인적', '독자적'],
    tips({
      etymology: '라틴어 consuetudo(습관)에서 유래',
      visual: '한복을 입은 전통 결혼식',
      soundAlike: '커스텀 = 커스텀 메이드(맞춤)',
      context: 'It is a custom to exchange gifts at Christmas.',
      synonymAntonym: 'Syn: tradition, habit',
    }),
    {
      definition: 'a traditional practice or habitual way of doing something',
      wordDistractors: ['Costume', 'Customer', 'Customs'],
      definitionDistractors: [
        'clothing worn for a special occasion',
        'a person who buys from a business',
        'government taxes on imports',
      ],
      exampleSentences: [
        { en: 'It is a custom to exchange gifts at Christmas.', ko: '크리스마스에 선물을 교환하는 것이 관례이다.' },
        { en: 'Each country has its own customs and traditions.', ko: '각 나라마다 고유한 관습과 전통이 있다.' },
      ],
    }
  ),
  word('Customer', '고객', 3, 'noun',
    ['판매자', '점원', '공급자', '제조자', '판매처', '도매상', '유통업', '소매점', '경쟁사', '낯선이'],
    tips({
      etymology: 'custom(관례) + -er -> 상거래하는 사람',
      visual: '매장에서 쇼핑하는 사람',
      soundAlike: '커스토머 = 커스토머 서비스',
      context: 'The customer is always right.',
      synonymAntonym: 'Syn: client, buyer',
    }),
    {
      definition: 'a person who buys goods or services from a business',
      wordDistractors: ['Custom', 'Consume', 'Costume'],
      definitionDistractors: [
        'a traditional practice',
        'to use or eat',
        'special clothing for an occasion',
      ],
      exampleSentences: [
        { en: 'The customer is always right.', ko: '고객은 항상 옳다.' },
        { en: 'The store offers discounts to loyal customers.', ko: '그 가게는 충성 고객에게 할인을 제공한다.' },
      ],
    }
  ),
  word('Damage', '손해, 피해', 3, 'noun',
    ['이익', '회복', '수리', '복구', '보상', '증진', '성장', '개선', '발전', '선물'],
    tips({
      etymology: '라틴어 damnum(손실)에서 유래',
      visual: '부서진 유리창',
      soundAlike: '대미지 = 대미지 컨트롤(피해 통제)',
      context: 'The storm caused extensive damage.',
      synonymAntonym: 'Syn: harm, loss, Ant: repair',
    }),
    {
      definition: 'physical harm or injury that impairs value or function',
      wordDistractors: ['Manage', 'Image', 'Message'],
      definitionDistractors: [
        'to be in charge of',
        'a mental picture or representation',
        'a communicated piece of information',
      ],
      exampleSentences: [
        { en: 'The storm caused extensive damage.', ko: '폭풍으로 인해 광범위한 피해가 발생했다.' },
        { en: 'The damage to the car was severe.', ko: '차에 입은 손해는 심각했다.' },
      ],
    }
  ),
  word('Data', '데이터', 3, 'noun',
    ['추측', '감각', '직관', '공허', '무지', '숫자 없음', '정보 없음', '삭제', '소거', '잊음'],
    tips({
      etymology: '라틴어 datum(주어진 것)의 복수형',
      visual: '그래프와 차트로 된 정보',
      soundAlike: '데이타 = 빅 데이터',
      context: 'We need to analyze the data first.',
      synonymAntonym: 'Syn: information, facts',
    }),
    {
      definition: 'facts or information used for reference or analysis',
      wordDistractors: ['Date', 'Datum', 'Drama'],
      definitionDistractors: [
        'a particular day or time',
        'a single piece of information',
        'a play or theatrical performance',
      ],
      exampleSentences: [
        { en: 'We need to analyze the data first.', ko: '먼저 데이터를 분석해야 한다.' },
        { en: 'The data shows a clear trend.', ko: '데이터는 명확한 추세를 보여준다.' },
      ],
    }
  ),
  word('Debate', '논쟁, 토론', 3, 'noun',
    ['일치', '합의', '동의', '만장일치', '화합', '단결', '침묵', '무시', '무관심', '냉담'],
    tips({
      etymology: 'de(완전히) + bat(치다) -> 완전히 다투다',
      visual: '토론 무대에서 말하는 두 사람',
      soundAlike: '디베이트 = 디베이터(토론자)',
      context: 'There was a heated debate about the policy.',
      synonymAntonym: 'Syn: argument, discussion',
    }),
    {
      definition: 'a formal discussion between people with opposing views',
      wordDistractors: ['Rebate', 'Deliberate', 'Vibrate'],
      definitionDistractors: [
        'a partial refund',
        'done consciously and intentionally',
        'to shake with small movements',
      ],
      exampleSentences: [
        { en: 'There was a heated debate about the policy.', ko: '그 정책에 대해 열띤 토론이 있었다.' },
        { en: 'The debate lasted for over two hours.', ko: '그 토론은 2시간 이상 지속되었다.' },
      ],
    }
  ),
  word('Debt', '빚', 3, 'noun',
    ['자산', '잔여', '이익', '수입', '저축', '충당', '여유', '부유', '플러스', '흑자'],
    tips({
      etymology: '라틴어 debitum(빚진 것)에서 유래',
      visual: '빨간 마이너스가 적힌 통장',
      soundAlike: '데트 = 데트 프리(빚 없는)',
      context: 'He is struggling to pay off his debt.',
      synonymAntonym: 'Syn: obligation, liability, Ant: credit',
    }),
    {
      definition: 'money or something owed to another',
      wordDistractors: ['Bet', 'Dead', 'Deed'],
      definitionDistractors: [
        'to risk money on an outcome',
        'no longer living',
        'a legal document of ownership',
      ],
      exampleSentences: [
        { en: 'He is struggling to pay off his debt.', ko: '그는 빚을 갚기 위해 고군분투하고 있다.' },
        { en: 'The company reduced its debt significantly.', ko: '그 회사는 부채를 크게 줄였다.' },
      ],
    }
  ),
  word('Decision', '결정', 3, 'noun',
    ['망설임', '우유부단', '미결정', '보류', '기권', '회피', '회의', '불확실', '혼란', '당황'],
    tips({
      etymology: 'de(완전히) + cis(자르다) + -ion -> 확실히 자르다',
      visual: '체크박스에 체크하는 손',
      soundAlike: '디시전 = 디시전 메이킹',
      context: 'Making the right decision is not always easy.',
      synonymAntonym: 'Syn: choice, resolve, Ant: indecision',
    }),
    {
      definition: 'a conclusion or resolution reached after consideration',
      wordDistractors: ['Division', 'Revision', 'Television'],
      definitionDistractors: [
        'the process of splitting into parts',
        'the act of revising or changing',
        'a device for receiving broadcast signals',
      ],
      exampleSentences: [
        { en: 'Making the right decision is not always easy.', ko: '올바른 결정을 내리는 것은 항상 쉽지 않다.' },
        { en: 'The committee announced its decision today.', ko: '위원회는 오늘 결정을 발표했다.' },
      ],
    }
  ),
  word('Declare', '선언하다', 3, 'verb',
    ['숨기다', '부인하다', '숨김', '은폐', '침묵', '무시', '거부', '회피', '모호히', '애매하게'],
    tips({
      etymology: 'de(완전히) + clar(명확하게) -> 명확히 밝히다',
      visual: '마이크 앞에서 발표하는 사람',
      soundAlike: '디클레어 = 디클레이션(선언)',
      context: 'The government declared a state of emergency.',
      synonymAntonym: 'Syn: announce, state, Ant: conceal',
    }),
    {
      definition: 'to announce something formally or officially',
      wordDistractors: ['Clarify', 'Decorate', 'Deliberate'],
      definitionDistractors: [
        'to make something clear',
        'to add adornments to something',
        'to think carefully',
      ],
      exampleSentences: [
        { en: 'The government declared a state of emergency.', ko: '정부는 비상사태를 선언했다.' },
        { en: 'He declared his love for her publicly.', ko: '그는 그녀에 대한 사랑을 공개적으로 선언했다.' },
      ],
    }
  ),
  word('Decline', '감소하다', 3, 'verb',
    ['증가하다', '상승하다', '성장하다', '늘다', '불어나다', '확대', '팽창', '증대', '커지다', '올라가다'],
    tips({
      etymology: 'de(아래로) + clin(기울다) -> 아래로 기울다',
      visual: '내려가는 추세선 그래프',
      soundAlike: '디클라인 = 디클라인 스테이지(감소기)',
      context: 'Sales have declined over the past month.',
      synonymAntonym: 'Syn: decrease, fall, Ant: increase',
    }),
    {
      definition: 'to become smaller, fewer, or less',
      wordDistractors: ['Incline', 'Recline', 'Define'],
      definitionDistractors: [
        'to slope or lean',
        'to lean back in a relaxed position',
        'to state the meaning of',
      ],
      exampleSentences: [
        { en: 'Sales have declined over the past month.', ko: '지난 한 달 동안 매출이 감소했다.' },
        { en: 'He declined the invitation politely.', ko: '그는 초대를 정중히 거절했다.' },
      ],
    }
  ),
  word('Decorate', '장식하다', 3, 'verb',
    ['제거하다', '벗겨내다', '헐다', '파괴하다', '훼손하다', '지저분하게', '단순화', '미니멀', '텅 빔', '공허'],
    tips({
      etymology: 'decor(장식) + -ate -> 장식하다',
      visual: '크리스마스 트리를 꾸미는 손',
      soundAlike: '데코레이트 = 데코레이션(장식)',
      context: 'We decorated the room for the party.',
      synonymAntonym: 'Syn: adorn, embellish, Ant: strip',
    }),
    {
      definition: 'to make something more attractive by adding ornaments',
      wordDistractors: ['Dedicate', 'Delicate', 'Duplicate'],
      definitionDistractors: [
        'to devote to a purpose',
        'easily broken or damaged',
        'an exact copy of something',
      ],
      exampleSentences: [
        { en: 'We decorated the room for the party.', ko: '파티를 위해 방을 꾸몄다.' },
        { en: 'She decorated the cake with fresh flowers.', ko: '그녀는 케이크를 생화로 장식했다.' },
      ],
    }
  ),
  word('Decrease', '감소하다', 3, 'verb',
    ['증가하다', '늘리다', '불리다', '확대하다', '증대', '상승', '성장', '팽창', '증폭', '배가'],
    tips({
      etymology: 'de(아래로) + crease(자라다) -> 줄어들다',
      visual: '줄어드는 숫자 카운트다운',
      soundAlike: '디크리즈 = 디크리징(감소하는)',
      context: 'Prices have decreased significantly.',
      synonymAntonym: 'Syn: reduce, diminish, Ant: increase',
    }),
    {
      definition: 'to become or make smaller in size or amount',
      wordDistractors: ['Increase', 'Release', 'Cease'],
      definitionDistractors: [
        'to become larger',
        'to set free or allow to escape',
        'to stop or come to an end',
      ],
      exampleSentences: [
        { en: 'Prices have decreased significantly.', ko: '가격이 크게 감소했다.' },
        { en: 'We need to decrease our expenses.', ko: '우리는 지출을 줄여야 한다.' },
      ],
    }
  ),
  word('Defeat', '패배시키다', 3, 'verb',
    ['승리하다', '이기다', '정복하다', '돕다', '협력', '항복', '승인', '존중', '추대', '우승'],
    tips({
      etymology: 'de(제거) + feat(하기) -> 하지 못하게 하다',
      visual: '결승선에서 먼저 도착한 선수',
      soundAlike: '디피트 = 디피트드(패배한)',
      context: 'Our team defeated the champions.',
      synonymAntonym: 'Syn: beat, overcome, Ant: lose',
    }),
    {
      definition: 'to win a victory over someone in a battle or competition',
      wordDistractors: ['Deflect', 'Defect', 'Defer'],
      definitionDistractors: [
        'to turn aside or redirect',
        'a flaw or imperfection',
        'to postpone or delay',
      ],
      exampleSentences: [
        { en: 'Our team defeated the champions.', ko: '우리 팀이 챔피언을 이겼다.' },
        { en: 'The army defeated the enemy in battle.', ko: '그 군대는 전투에서 적을 물리쳤다.' },
      ],
    }
  ),
  word('Defend', '방어하다', 3, 'verb',
    ['공격하다', '침공하다', '습격하다', '도발하다', '선제', '진격', '침략', '침해', '해치다', '던지다'],
    tips({
      etymology: 'de(떨어져) + fend(치다) -> 막아내다',
      visual: '방패를 들고 서 있는 기사',
      soundAlike: '디펜드 = 디펜스(방어)',
      context: 'Soldiers defend their country.',
      synonymAntonym: 'Syn: protect, guard, Ant: attack',
    }),
    {
      definition: 'to protect from harm or danger',
      wordDistractors: ['Depend', 'Descend', 'Define'],
      definitionDistractors: [
        'to rely on',
        'to move downward',
        'to state the meaning of',
      ],
      exampleSentences: [
        { en: 'Soldiers defend their country.', ko: '군인들은 자신의 나라를 방어한다.' },
        { en: 'She defended her thesis successfully.', ko: '그녀는 논문을 성공적으로 변호했다.' },
      ],
    }
  ),
  word('Define', '정의하다', 3, 'verb',
    ['모호히 하다', '혼란시키다', '오해하다', '왜곡하다', '흐리다', '애매하게', '불명확', '흐릿', '적막', '무시'],
    tips({
      etymology: 'de(완전히) + fin(끝) -> 경계를 확정하다',
      visual: '사전에 적힌 단어의 정의',
      soundAlike: '디파인 = 디피니션(정의)',
      context: 'Can you define this term for me?',
      synonymAntonym: 'Syn: describe, specify, Ant: obscure',
    }),
    {
      definition: 'to state the exact meaning of a word or concept',
      wordDistractors: ['Refine', 'Confine', 'Design'],
      definitionDistractors: [
        'to improve by removing impurities',
        'to restrict or limit',
        'a plan or drawing for something',
      ],
      exampleSentences: [
        { en: 'Can you define this term for me?', ko: '이 용어를 정의해 주시겠어요?' },
        { en: 'Success can be defined in many ways.', ko: '성공은 여러 방식으로 정의될 수 있다.' },
      ],
    }
  ),
  word('Degree', '정도, 학위', 3, 'noun',
    ['무차별', '무한', '무제한', '전부', '완전', '절대', '무조건', '무学历', '무학', '미졸업'],
    tips({
      etymology: 'de(아래로) + gree(단계) -> 단계별로',
      visual: '온도계의 눈금',
      soundAlike: '디그리 = 디그리 오브(정도의)',
      context: 'She has a degree in engineering.',
      synonymAntonym: 'Syn: level, extent',
    }),
    {
      definition: 'a unit of measurement or an academic qualification',
      wordDistractors: ['Decree', 'Digest', 'Desert'],
      definitionDistractors: [
        'an official order',
        'a summary or compilation',
        'a dry barren region',
      ],
      exampleSentences: [
        { en: 'She has a degree in engineering.', ko: '그녀는 공학 학위가 있다.' },
        { en: 'The temperature rose by several degrees.', ko: '온도가 몇 도 올랐다.' },
      ],
    }
  ),
  word('Delay', '지연', 3, 'noun',
    ['신속', '즉시', '긴급', '재빠름', '순식간', '바로', '당장', '신속함', '민첩', '경쾌'],
    tips({
      etymology: 'de(떨어져) + lay(두다) -> 나중으로 미루다',
      visual: '늦은 비행기를 기다리는 사람',
      soundAlike: '딜레이 = 딜레이드(지연된)',
      context: 'We apologize for the delay.',
      synonymAntonym: 'Syn: postpone, hold up, Ant: expedite',
    }),
    {
      definition: 'a period of time when something is made to wait',
      wordDistractors: ['Decay', 'Relay', 'Display'],
      definitionDistractors: [
        'to rot or decompose',
        'to pass on information',
        'to show or exhibit',
      ],
      exampleSentences: [
        { en: 'We apologize for the delay.', ko: '지연에 대해 사과드립니다.' },
        { en: 'The flight was subject to a two-hour delay.', ko: '그 비행은 2시간 지연되었다.' },
      ],
    }
  ),
  word('Deliver', '배달하다', 3, 'verb',
    ['받다', '수령하다', '보관하다', '축적하다', '보류', '보내지 않다', '적재', '보관', '보안', '밀봉'],
    tips({
      etymology: 'de(완전히) + liver(자유롭게) -> 제대로 건네다',
      visual: '택배 상자를 건네주는 손',
      soundAlike: '딜리버 = 딜리버리(배달)',
      context: 'The package will be delivered tomorrow.',
      synonymAntonym: 'Syn: send, transport, Ant: receive',
    }),
    {
      definition: 'to bring and hand over goods to the intended recipient',
      wordDistractors: ['Discover', 'Diver', 'Driver'],
      definitionDistractors: [
        'to find something previously unknown',
        'a person who swims underwater',
        'a person who operates a vehicle',
      ],
      exampleSentences: [
        { en: 'The package will be delivered tomorrow.', ko: '소포는 내일 배달될 것이다.' },
        { en: 'She delivered a powerful speech.', ko: '그녀는 강력한 연설을 했다.' },
      ],
    }
  ),
];
