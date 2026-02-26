import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch52: VocabItem[] = [
  word('practice', '연습', 6, 'noun',
    ['천재', '디저트, 후식', '팔걸이', '통증, 아픔', '나라', '식품 저장고', '차원', '결함, 결점', '신화', '두려움'],
    tips({
      etymology: '그리스어 \'praktikos(실행 가능한)\'에서 유래하여, 이론이 아닌 실제로 몸을 움직여 익히는 과정을 의미합니다.',
      visual: '피아노 앞에 앉아 같은 곡을 수십 번 반복하며 손가락 근육을 길들이는 연주자의 모습을 상상하세요.',
      soundAlike: '\'프랙티스\'는 \'풀(을) 뜯으쓰\'와 발음이 비슷하죠? 소가 매일 풀을 뜯듯 매일 거르지 않고 하는 습관적 행동입니다.',
      context: '스포츠나 악기 연주처럼 반복적인 훈련이 필요한 상황에서 가장 흔하게 사용되는 단어입니다.',
      synonymAntonym: 'training과 유사하며, 실전 없이 이론만 공부하는 theory와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The actual application or use of an idea, belief, or method, as opposed to theories relating to it.',
      synonyms: ['exercise', 'training', 'rehearsal'],
      antonyms: ['theory', 'neglect', 'idleness'],
      exampleSentences: [
        { en: 'Daily repetition is essential to improve your skills through consistent effort.', ko: '꾸준한 노력을 통해 기술을 향상시키려면 매일 반복하는 연습이 필수적입니다.' },
        { en: 'The soccer team gathered on the field for their final session before the big game.', ko: '축구팀은 큰 경기를 앞두고 마지막 연습 세션을 위해 경기장에 모였습니다.' },
      ],
      wordDistractors: ['pragmatic', 'prance', 'plaice'],
      definitionDistractors: [
        'A customary or habitual way of acting or doing things in a particular society',
        'A formal statement of rules or principles governing affairs within a profession',
        'A period of time set aside for physical exercise or athletic competition',
      ],
    }
  ),
  word('praise', '칭찬하다', 7, 'verb',
    ['비난하다', '무시하다', '꾸짖다', '조롱하다', '거절하다', '의심하다', '방해하다', '처벌하다', '비판하다', '외면하다'],
    tips({
      etymology: '가치를 매기다라는 뜻의 라틴어 pretium에서 유래하여 누군가의 가치를 높게 평가한다는 의미를 담고 있습니다.',
      visual: '어린아이가 상장을 받고 환하게 웃고 있고 부모님이 박수를 치며 격려하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프레이즈\'이므로 \'풀(p) 레이스(raise)\'를 완주한 선수에게 박수를 보내는 장면을 연상하세요.',
      context: '직장에서 성과를 냈을 때 상사가 팀원들 앞에서 공개적으로 긍정적인 피드백을 줄 때 주로 쓰입니다.',
      synonymAntonym: 'compliment와 유사하며, 반대로 잘못을 지적하는 criticize와 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'to express warm approval or admiration of someone or something, often for an achievement or quality',
      synonyms: ['compliment', 'applaud', 'extol'],
      antonyms: ['criticize', 'condemn', 'scold'],
      exampleSentences: [
        { en: 'The teacher decided to applaud the student for her exceptional hard work on the final project.', ko: '선생님은 기말 프로젝트에 쏟은 학생의 각별한 노력에 대해 그녀를 칭찬하기로 했다.' },
        { en: 'Many critics across the country continue to admire the director for his innovative approach to filmmaking.', ko: '전국의 많은 비평가들이 감독의 혁신적인 영화 제작 방식에 대해 그를 계속해서 찬양하고 있다.' },
      ],
      wordDistractors: ['phrase', 'drape', 'braise'],
      definitionDistractors: [
        'To make a formal request or plea to a higher authority for assistance',
        'To increase the amount or level of something gradually over time',
        'To present an argument or case in a convincing and detailed manner',
      ],
    }
  ),
  word('pray', '빌다', 4, 'verb',
    ['바라다', '명상하다', '맹세하다', '참회하다', '노래하다', '외치다', '속삭이다', '기원하다', '축복하다', '찬양하다'],
    tips({
      etymology: '라틴어 precari에서 유래되었으며, 이는 \'간절히 요청하다\'라는 의미를 담고 있습니다.',
      visual: '두 손을 정중히 모으고 무릎을 꿇은 채 하늘을 향해 고개를 숙인 모습을 상상해 보세요.',
      soundAlike: '놀이를 뜻하는 play와 발음이 비슷하지만, \'r\' 발음을 굴려 종교적인 경건함을 표현합니다.',
      context: '주로 종교적인 의식이나 아주 절박한 상황에서 누군가의 도움을 간구할 때 사용됩니다.',
      synonymAntonym: '신에게 간구하는 worship과 비슷하며, 자신의 힘으로 거부하는 reject와는 반대되는 태도입니다.',
    }),
    {
      definition: 'to speak to a spiritual being in order to express thanks or to ask for help',
      synonyms: ['beseech', 'implore', 'petition'],
      antonyms: ['answer', 'refuse', 'ignore'],
      exampleSentences: [
        { en: 'Many people gather at the temple to ask for peace and health for their families.', ko: '많은 사람들이 가족의 평화와 건강을 빌기 위해 사원에 모입니다.' },
        { en: 'The farmers began to hope for rain after a long period of severe drought.', ko: '농부들은 오랜 가뭄 끝에 비가 내리기를 간절히 빌기 시작했습니다.' },
      ],
      wordDistractors: ['prey', 'pry', 'bray'],
      definitionDistractors: [
        'To move quickly and lightly with small graceful steps',
        'To make a strong emotional appeal for justice or fairness',
        'To express deep sorrow or regret for a past action or mistake',
      ],
    }
  ),
  word('preach', '설교하다', 8, 'verb',
    ['동의하다', '걸다', '굴복시키다, 지배하다', '내리다', '받아들이다', '줄이다, 줄어들다', '무시하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '라틴어 praedicare에서 유래했으며, \'앞에서(pre) 말하다(dic)\'라는 의미가 합쳐져 대중에게 가르침을 전한다는 뜻이 되었습니다.',
      visual: '교회 단상 위에 선 목사님이 성경책을 펼치고 열정적으로 청중에게 훈계하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프리치\'와 비슷한데, \'풀이(prea)치(ch)다\', 즉 도덕적 가르침을 쉽게 풀어서 설명한다고 기억하세요.',
      context: '종교적인 설교뿐만 아니라, 일상에서 누군가에게 도덕적인 훈계를 늘어놓을 때도 자주 쓰입니다.',
      synonymAntonym: '가르침을 전하는 sermonize와 반대로, 배움을 얻거나 듣기만 하는 listen, learn과는 대조적입니다.',
    }),
    {
      definition: 'To deliver a religious address to an assembled group of people, or to publicly advocate a belief or moral stance.',
      synonyms: ['sermonize', 'advocate', 'evangelize'],
      antonyms: ['listen', 'learn', 'follow'],
      exampleSentences: [
        { en: 'The minister will deliver a powerful message to the congregation on Sunday morning.', ko: '목사님은 일요일 아침 신도들에게 강력한 설교를 할 것입니다.' },
        { en: 'Many people dislike it when others constantly lecture them about their lifestyle choices.', ko: '많은 사람들은 다른 이들이 자신의 라이프스타일 선택에 대해 끊임없이 훈계하는 것을 싫어합니다.' },
      ],
      wordDistractors: ['breach', 'peach', 'bleach'],
      definitionDistractors: [
        'To instruct someone in a particular skill or subject through repeated lessons',
        'To make a formal public announcement regarding a new policy or law',
        'To stretch or extend something to its full length or capacity',
      ],
    }
  ),
  word('precede', '앞서다', 9, 'verb',
    ['따르다', '중단하다', '결합하다', '무시하다', '반복하다', '연기하다', '도착하다', '동의하다', '포함하다', '완성하다'],
    tips({
      etymology: '접두사 pre-(미리)와 cede(가다)가 합쳐져 \'미리 가다\'라는 의미에서 유래했습니다.',
      visual: '마라톤 선두 주자가 결승선에 다른 선수들보다 먼저 도착하는 모습을 상상해 보세요.',
      soundAlike: '프리시드(precede)는 \'미리 시도(pre-seed)\'하는 것처럼 앞서 나가는 느낌입니다.',
      context: '역사적 사건의 순서를 나열하거나 논리적 인과관계를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '앞서가는 것은 antedate이고, 뒤따라오는 것은 follow나 succeed입니다.',
    }),
    {
      definition: 'to come before something else in time, order, or rank',
      synonyms: ['antecede', 'antedate', 'pave the way'],
      antonyms: ['follow', 'succeed', 'ensue'],
      exampleSentences: [
        { en: 'A brief introduction should always come before the main body of the report.', ko: '보고서의 본문 앞에는 항상 짧은 서문이 먼저 나와야 합니다.' },
        { en: 'Dark clouds usually go before a heavy rainstorm.', ko: '폭우가 내리기 전에는 보통 먹구름이 먼저 나타납니다.' },
      ],
      wordDistractors: ['proceed', 'preside', 'recede'],
      definitionDistractors: [
        'To move forward or continue an action after a brief pause',
        'To officially take the place of someone in a role or position',
        'To arrange items in a specific sequence based on size or importance',
      ],
    }
  ),
  word('precious', '소중한', 5, 'adjective',
    ['저렴한', '흔한', '무가치한', '평범한', '일반적인', '거친', '더러운', '위험한', '차가운', '단단한'],
    tips({
      etymology: '라틴어 pretiosus에서 유래했으며, \'가치\'를 뜻하는 pretium(price)이 어근입니다.',
      visual: '반짝이는 다이아몬드나 골동품 보석함을 소중하게 품에 안고 있는 모습을 상상하세요.',
      soundAlike: '발음이 \'프레셔스\'인데, 너무 소중해서 \'프레셔(압박)\'를 느낄 만큼 귀한 것이라고 외워보세요.',
      context: '금전적 가치가 높은 보석뿐만 아니라, 시간이나 추억처럼 정서적으로 소중한 것에도 쓰입니다.',
      synonymAntonym: 'valuable과 유사하지만 정서적 애착이 더 강하며, worthless와는 정반대의 가치를 지닙니다.',
    }),
    {
      definition: 'having high value, either because of being rare and expensive or because of being loved very much',
      synonyms: ['valuable', 'cherished', 'invaluable'],
      antonyms: ['worthless', 'cheap', 'common'],
      exampleSentences: [
        { en: 'The museum displays many items made of gold and other highly valued materials.', ko: '그 박물관은 금과 다른 매우 귀중한 재료들로 만들어진 많은 물품들을 전시합니다.' },
        { en: 'Every second spent with family is a rare gift that should never be wasted.', ko: '가족과 함께 보내는 매 초는 절대 낭비해서는 안 될 소중한 선물입니다.' },
      ],
      wordDistractors: ['precocious', 'prescient', 'specious'],
      definitionDistractors: [
        'Extremely cautious and careful when handling delicate objects or materials',
        'Having a strong emotional attachment to a particular memory or event',
        'Made of a material that is transparent and allows light to pass through easily',
      ],
    }
  ),
  word('precise', '정확한', 6, 'adjective',
    ['대략적인', '모호한', '부정확한', '광범위한', '불분명한', '추상적인', '엉성한', '유동적인', '일반적인', '무작위의'],
    tips({
      etymology: '라틴어 \'praecidere\'에서 유래했으며, \'미리(pre) 자르다(cise)\'라는 뜻으로 불필요한 부분을 다 잘라내어 딱 들어맞는 상태를 의미합니다.',
      visual: '현미경으로 아주 작은 세포의 핵을 정확히 조준하고 있는 과학자의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프리사이즈\'와 비슷하지만, 옷의 프리사이즈(Free size)와 달리 아주 \'딱 맞는\' 수치나 정보를 뜻합니다.',
      context: '수학 계산, 과학 실험 결과, 혹은 누군가에게 길을 안내할 때 아주 구체적인 지점이 필요할 때 주로 쓰입니다.',
      synonymAntonym: '정확함을 뜻하는 accurate와 비슷하지만, precise는 오차 없이 아주 세밀하고 꼼꼼하다는 뉘앙스가 더 강합니다.',
    }),
    {
      definition: 'marked by exactness and accuracy of expression or detail',
      synonyms: ['accurate', 'exact', 'specific'],
      antonyms: ['vague', 'imprecise', 'inaccurate'],
      exampleSentences: [
        { en: 'The surgeon made a series of small, careful cuts with extreme care.', ko: '외과 의사는 극도로 주의를 기울여 일련의 작고 세밀한 절개를 수행했습니다.' },
        { en: 'Please provide the measurements of the room so the carpet fits perfectly.', ko: '카펫이 완벽하게 맞을 수 있도록 방의 정확한 치수를 제공해 주세요.' },
      ],
      wordDistractors: ['concise', 'premise', 'precinct'],
      definitionDistractors: [
        'Expressed in a brief and clear manner without unnecessary detail',
        'Following established rules and conventions without deviation',
        'Performed quickly and efficiently with minimal waste of time or resources',
      ],
    }
  ),
  word('predator', '포식자', 10, 'noun',
    ['피식자', '초식동물', '희생양', '동반자', '수호자', '조력자', '방관자', '피해자', '중재자', '추종자'],
    tips({
      etymology: '라틴어 \'praedari(약탈하다)\'에서 유래하여 남을 잡아먹거나 해치는 존재를 뜻합니다.',
      visual: '날카로운 발톱을 세우고 숲속에서 먹잇감을 노려보는 사자의 눈빛을 상상해 보세요.',
      soundAlike: '\'프레데터\'라는 유명한 SF 영화 속 외계 사냥꾼의 이미지를 떠올리면 쉽습니다.',
      context: '생태계에서는 먹이사슬 상위 포식자를 뜻하며, 사회적으로는 타인을 착취하는 사람을 가리킵니다.',
      synonymAntonym: '사냥꾼인 hunter와 유의어이며, 먹잇감이 되는 prey와는 정반대의 관계입니다.',
    }),
    {
      definition: 'An animal that naturally preys on others, or a person who ruthlessly exploits others for personal gain.',
      synonyms: ['hunter', 'exploiter', 'carnivore'],
      antonyms: ['prey', 'victim', 'quarry'],
      exampleSentences: [
        { en: 'The great white shark is a fearsome marine hunter that sits at the top of the food chain.', ko: '백상아리는 먹이사슬의 최정점에 위치한 무시무시한 해양 포식자입니다.' },
        { en: 'Online safety courses help children identify how a digital harasser might try to gain their trust.', ko: '온라인 안전 교육은 아이들이 디지털 약탈자가 어떻게 신뢰를 얻으려 하는지 식별하도록 돕습니다.' },
      ],
      wordDistractors: ['predictor', 'praetor', 'precursor'],
      definitionDistractors: [
        'A device or tool used to detect the presence of harmful substances in water',
        'A large herbivorous animal that feeds primarily on grasses and plants',
        'A person who studies the behavioral patterns of wildlife in natural habitats',
      ],
    }
  ),
  word('predict', '예측하다', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'pre(미리)\'와 \'dicere(말하다)\'가 합쳐져 어떤 일이 일어나기 전에 미리 말한다는 의미가 되었습니다.',
      visual: '수정구슬을 들여다보며 내일의 날씨나 미래의 사건을 미리 말하는 점술가의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프리딕트\'이므로 \'풀이(pre)를 듣고(dict) 미래를 맞히다\'라고 연상하면 기억하기 쉽습니다.',
      context: '일기 예보나 경제 전망, 스포츠 경기 결과를 미리 추측할 때 가장 흔하게 사용되는 동사입니다.',
      synonymAntonym: '미리 내다보는 forecast와 반대로 이미 일어난 일을 설명하는 describe를 대조해 보세요.',
    }),
    {
      definition: 'to say or estimate that a specific thing will happen in the future or will be a consequence of something',
      synonyms: ['foretell', 'forecast', 'anticipate'],
      antonyms: ['recount', 'describe', 'ignore'],
      exampleSentences: [
        { en: 'Meteorologists use complex data to estimate how the storm will move across the coast.', ko: '기상학자들은 폭풍이 해안을 따라 어떻게 이동할지 추정하기 위해 복잡한 데이터를 사용합니다.' },
        { en: 'Economists failed to foresee the sudden crash of the stock market last year.', ko: '경제학자들은 작년에 발생한 갑작스러운 주식 시장의 폭락을 예견하지 못했습니다.' },
      ],
      wordDistractors: ['precinct', 'verdict', 'indict'],
      definitionDistractors: [
        'To carefully examine data or evidence before making a final decision',
        'To arrange future events according to a detailed and fixed schedule',
        'To deliberately mislead someone by providing false or inaccurate information',
      ],
    }
  ),
  word('prefer', '선호하다', 4, 'verb',
    ['거절하다', '무시하다', '포기하다', '비교하다', '증오하다', '연기하다', '제안하다', '반대하다', '결정하다', '조사하다'],
    tips({
      etymology: '라틴어 \'prae(앞에)\'와 \'ferre(두다)\'가 합쳐져 남들보다 앞에 둔다는 의미에서 유래했습니다.',
      visual: '두 가지 물건 중 더 마음에 드는 하나를 손으로 가리키는 모습을 상상하세요.',
      soundAlike: '\'프리퍼\' 발음이 \'풀이 펴\'와 비슷하니, 꽃이 핀 정원을 더 좋아한다고 외워보세요.',
      context: '식당에서 메뉴를 고르거나 취미 생활을 말할 때 가장 자주 쓰이는 동사입니다.',
      synonymAntonym: '좋아하는 것은 favor, 싫어하는 것은 dislike나 reject와 연결됩니다.',
    }),
    {
      definition: 'to like one thing or person better than another and choose them instead',
      synonyms: ['favor', 'choose', 'elect'],
      antonyms: ['dislike', 'reject', 'refuse'],
      exampleSentences: [
        { en: 'Most people would choose to live in a quiet neighborhood rather than a noisy city center.', ko: '대부분의 사람들은 시끄러운 도심보다는 조용한 동네에서 사는 것을 선호할 것이다.' },
        { en: 'She would always drink green tea instead of coffee in the morning.', ko: '그녀는 아침에 커피 대신 항상 녹차를 마시는 것을 더 좋아했다.' },
      ],
      wordDistractors: ['proffer', 'preface', 'defer'],
      definitionDistractors: [
        'To offer or present something to someone for their consideration or acceptance',
        'To arrange items in order of priority based on urgency or importance',
        'To delay or postpone a decision until a later and more convenient time',
      ],
    }
  ),
  word('pregnant', '임신한', 5, 'adjective',
    ['출산한', '불임의', '건강한', '성숙한', '비만인', '유전적인', '태아의', '육아의', '결혼한', '미혼의'],
    tips({
      etymology: '라틴어 \'prae(이전)\'와 \'gnasci(태어나다)\'가 합쳐져 \'태어나기 전의 상태\'를 의미합니다.',
      visual: '배가 볼록하게 나온 임산부가 아기 신발을 들고 행복하게 웃는 모습을 상상해 보세요.',
      soundAlike: '\'프레그넌트\' 발음이 \'풀(full)이 났네\'와 비슷하게 들리기도 하죠? 배가 가득 찬 상태를 연상하세요.',
      context: '병원 검진이나 태교, 출산 휴가와 관련된 대화에서 가장 핵심적으로 쓰이는 형용사입니다.',
      synonymAntonym: '아이를 가졌다는 뜻의 expectant와 반대로 아이를 가질 수 없는 infertile을 함께 기억하세요.',
    }),
    {
      definition: 'carrying a developing embryo or fetus within the female body',
      synonyms: ['expectant', 'gravid', 'teeming'],
      antonyms: ['infertile', 'barren', 'unproductive'],
      exampleSentences: [
        { en: 'She decided to quit smoking immediately after finding out she was carrying a child.', ko: '그녀는 임신했다는 사실을 알게 된 직후 즉시 담배를 끊기로 결심했습니다.' },
        { en: 'The doctor advised the woman to take folic acid supplements throughout her first trimester.', ko: '의사는 그 여성에게 임신 초기 3개월 동안 엽산 보충제를 복용하라고 권고했습니다.' },
      ],
      wordDistractors: ['prevalent', 'pungent', 'poignant'],
      definitionDistractors: [
        'Feeling extremely tired or exhausted after a long period of physical activity',
        'Experiencing a strong sense of anticipation or excitement about a future event',
        'Being in a state of rapid physical growth during adolescence or early childhood',
      ],
    }
  ),
  word('prejudice', '편견', 8, 'noun',
    ['공정', '객관성', '관용', '이해', '존중', '정의', '평등', '신뢰', '친절', '배려'],
    tips({
      etymology: '접두사 pre-(미리)와 어근 judice(판단하다)가 합쳐져 \'미리 판단함\' 즉, 선입견이라는 의미가 되었습니다.',
      visual: '색안경을 끼고 사람을 바라보는 차가운 시선을 상상해 보세요.',
      soundAlike: '프레주디스... \'풀어주지\' 못하는 꽉 막힌 마음의 벽이라고 기억하세요.',
      context: '인종, 성별, 종교 등에 대해 근거 없이 갖는 부정적인 태도를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'bias와 유사하며, 공정함을 뜻하는 fairness와는 정반대의 개념입니다.',
    }),
    {
      definition: 'An unfair and unreasonable opinion or feeling formed without enough thought or knowledge.',
      synonyms: ['bias', 'partiality', 'preconception'],
      antonyms: ['fairness', 'impartiality', 'tolerance'],
      exampleSentences: [
        { en: 'The judge must remain neutral and free from any personal bias or preconceived notions.', ko: '판사는 중립을 유지해야 하며 어떠한 개인적인 편견이나 선입견도 없어야 합니다.' },
        { en: 'Education is the most effective tool to fight against social discrimination and narrow-minded views.', ko: '교육은 사회적 차별과 편협한 시각에 맞서 싸우는 가장 효과적인 도구입니다.' },
      ],
      wordDistractors: ['prelude', 'precipice', 'premise'],
      definitionDistractors: [
        'A formal legal ruling issued by a court following a lengthy trial process',
        'A deeply held personal conviction based on extensive research and experience',
        'An established tradition or custom that has been passed down through generations',
      ],
    }
  ),
  word('premier', '총리', 9, 'noun',
    ['대통령', '장관', '비서관', '의원', '시장', '지사', '대사', '영사', '판사', '검사'],
    tips({
      etymology: '라틴어 primarius에서 유래하여 \'첫 번째의\' 또는 \'가장 중요한\'이라는 의미를 담고 있습니다.',
      visual: '정부 회의에서 가장 높은 자리에 앉아 회의를 주재하는 수상을 상상해 보세요.',
      soundAlike: '영화의 첫 상영인 \'프리미어(premiere)\'와 발음이 비슷하여 \'첫째가는 사람\'으로 기억하면 쉽습니다.',
      context: '의원내각제 국가에서 행정부의 수반을 지칭할 때 주로 사용되는 공식 명칭입니다.',
      synonymAntonym: 'prime minister와 동의어이며, 평사원을 뜻하는 subordinate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The head of the cabinet or the chief administrative officer in a government, especially in a parliamentary system.',
      synonyms: ['prime minister', 'chancellor', 'head of state'],
      antonyms: ['subordinate', 'follower', 'underling'],
      exampleSentences: [
        { en: 'The newly elected leader will meet with the foreign dignitaries to discuss the trade agreement.', ko: '새로 선출된 수상은 무역 협정을 논의하기 위해 외국 귀빈들을 만날 것입니다.' },
        { en: 'National policies are often directed by the office of the chief executive in this parliamentary democracy.', ko: '이 의원내각제 민주주의 국가에서 국가 정책은 종종 수상실에 의해 지도됩니다.' },
      ],
      wordDistractors: ['premiere', 'premise', 'primmer'],
      definitionDistractors: [
        'The first public showing of a movie, play, or other performance',
        'A senior military officer who commands a large division of troops',
        'The official representative of one country stationed in another nation',
      ],
    }
  ),
  word('premium', '할증금', 10, 'noun',
    ['할인', '부채', '손실', '잔액', '예산', '수익', '자산', '배당', '담보', '이자'],
    tips({
      etymology: '라틴어 praemium에서 유래했으며, \'먼저(prae)\' \'가져가는 것(emere)\'이라는 의미에서 보상이나 추가금을 뜻하게 되었습니다.',
      visual: '백화점에서 일반 가격표 위에 \'VIP 전용 추가 요금\'이 붙어 있는 특별한 라벨을 상상해 보세요.',
      soundAlike: '\'프리미엄\'이라는 발음은 우리 일상에서도 고급 서비스나 추가 비용을 말할 때 자주 쓰여 익숙합니다.',
      context: '보험료를 지불하거나, 희귀한 물건을 살 때 정가보다 더 얹어주는 돈을 말할 때 주로 쓰입니다.',
      synonymAntonym: '정가보다 높은 보너스(bonus)와 비슷하며, 반대로 깎아주는 할인(discount)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An amount to be paid for an insurance policy or a sum added to an ordinary price or charge.',
      synonyms: ['surcharge', 'bonus', 'fee'],
      antonyms: ['discount', 'reduction', 'markdown'],
      exampleSentences: [
        { en: 'Customers are often willing to pay a high amount for organic produce.', ko: '고객들은 종종 유기농 농산물에 대해 높은 할증금을 기꺼이 지불하곤 합니다.' },
        { en: 'The monthly insurance cost has increased significantly due to the new policy changes.', ko: '새로운 정책 변화로 인해 월간 보험료 할증금이 크게 인상되었습니다.' },
      ],
      wordDistractors: ['primeval', 'podium', 'primal'],
      definitionDistractors: [
        'A financial penalty imposed for failing to meet a contractual obligation on time',
        'A regular fixed payment made by an employer to an employee for services rendered',
        'A refund or rebate given to a customer after a product return or cancellation',
      ],
    }
  ),
  word('prepare', '준비하다', 6, 'verb',
    ['파괴하다', '무시하다', '지연시키다', '망치다', '거절하다', '중단하다', '방해하다', '잊어버리다', '낭비하다', '반대하다'],
    tips({
      etymology: '라틴어 \'prae(미리)\'와 \'parare(준비하다)\'가 결합되어 어떤 일이 일어나기 전에 미리 챙긴다는 의미를 가집니다.',
      visual: '중요한 시험이나 파티를 앞두고 가방을 챙기거나 재료를 손질하는 분주한 모습을 상상해 보세요.',
      soundAlike: '\'프리페어\' 발음이 \'미리 패어(준비해)\'와 비슷하게 들린다고 생각하면 기억하기 쉽습니다.',
      context: '요리, 시험, 연설 등 미래의 특정 사건을 위해 도구나 마음가짐을 갖출 때 주로 사용됩니다.',
      synonymAntonym: 'ready와 유의어 관계이며, 아무런 대비 없이 방치하는 neglect와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make something ready for use or to get ready for a future event',
      synonyms: ['arrange', 'organize', 'equip'],
      antonyms: ['neglect', 'ignore', 'destroy'],
      exampleSentences: [
        { en: 'The chef needs to chop all the vegetables to get ready for the dinner service.', ko: '주방장은 저녁 식사 서비스를 위해 모든 채소를 다져서 준비해야 합니다.' },
        { en: 'Students should study hard to get ready for their final examinations next week.', ko: '학생들은 다음 주 기말고사를 대비해 열심히 공부해야 합니다.' },
      ],
      wordDistractors: ['compare', 'prepaid', 'impair'],
      definitionDistractors: [
        'To fix or mend something that has been broken or is not working properly',
        'To deliver or transport goods from one location to a designated destination',
        'To predict or estimate the likely outcome of a particular situation or event',
      ],
    }
  ),
  word('prescribe', '처방하다', 7, 'verb',
    ['끼어들다, 불쑥 말하다', '재촉하다, 촉진하다', '빈둥거리다', '검증하다, 유효화하다', '조직하다, 정리하다', '받아쓰게 하다', '자극하다, 촉진하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '라틴어 \'pre(미리)\'와 \'scribe(쓰다)\'가 합쳐져, 미리 적어둔 대로 따르라고 지시하는 느낌을 줍니다.',
      visual: '의사가 환자에게 약을 먹으라고 처방전을 써주거나, 법전이 행동 지침을 정해주는 모습을 상상하세요.',
      soundAlike: '프리스크라이브(prescribe) - \'미리(pre) 써서(scribe) 드라이브(drive) 하듯 이끌다\'로 기억하세요.',
      context: '의료 상황에서는 약을 처방할 때 쓰이지만, 법이나 규칙에서는 특정 행동을 규정하거나 명령할 때 사용됩니다.',
      synonymAntonym: '지시하는 dictate와 반대로 금지하는 prohibit를 짝지어 외우면 효과적입니다.',
    }),
    {
      definition: 'to officially state a rule or order that must be followed, or to authorize the use of a particular medicine',
      synonyms: ['dictate', 'ordain', 'stipulate'],
      antonyms: ['prohibit', 'forbid', 'outlaw'],
      exampleSentences: [
        { en: 'The law can dictate the penalties that the court should impose for specific crimes.', ko: '법은 법원이 특정 범죄에 대해 부과해야 하는 처벌을 규정할 수 있습니다.' },
        { en: 'Doctors often recommend specific exercises to help patients recover from back injuries.', ko: '의사들은 환자들이 허리 부상에서 회복하도록 돕기 위해 특정 운동을 처방하곤 합니다.' },
      ],
      wordDistractors: ['proscribe', 'describe', 'inscribe'],
      definitionDistractors: [
        'To write down detailed observations in a formal scientific journal or record',
        'To strongly recommend avoiding a particular action or substance',
        'To sign or endorse a document by adding your official name at the bottom',
      ],
    }
  ),
  word('presence', '존재', 4, 'noun',
    ['단서', '반대', '도전', '경이', '귀스타브 플로베르 (프랑스 작가)', '파티, 정당', '감각', '적의', '오작동, 기능불량', '서비스'],
    tips({
      etymology: '라틴어 \'praesentia\'에서 유래했으며, \'pre(앞에)\'와 \'esse(있다)\'가 합쳐져 내 앞에 실재함을 뜻합니다.',
      visual: '어두운 방 안에 누군가 서 있는 실루엣을 보며 그 사람의 기운이 느껴지는 장면을 상상하세요.',
      soundAlike: '\'프레즌스\'는 \'선물(present)\'과 발음이 비슷합니다. 누군가의 존재 자체가 나에게 선물 같다고 생각해보세요.',
      context: '단순히 물리적으로 있는 것뿐만 아니라, 카리스마나 영향력이 느껴질 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: '부재를 뜻하는 absence와 반대되는 개념으로, 실재하는 상태인 existence와 일맥상통합니다.',
    }),
    {
      definition: 'the state or fact of existing, occurring, or being at a particular place at a certain time',
      synonyms: ['existence', 'attendance', 'occupancy'],
      antonyms: ['absence', 'nonexistence', 'void'],
      exampleSentences: [
        { en: 'Her calming influence was felt by everyone in the room despite her silence.', ko: '그녀의 침묵에도 불구하고 방 안의 모든 이들이 그녀의 차분한 존재감을 느꼈다.' },
        { en: 'The sudden appearance of security guards made the protesters nervous.', ko: '보안 요원들의 갑작스러운 등장은 시위대들을 긴장하게 만들었다.' },
      ],
      wordDistractors: ['presents', 'prestige', 'pretense'],
      definitionDistractors: [
        'A strong feeling of confidence or self-assurance in social situations',
        'The power or ability to influence others through personal authority',
        'A formal ceremony held to honor distinguished guests or dignitaries',
      ],
    }
  ),
  word('present', '선물, 현재', 1, 'noun',
    ['과거', '미래', '부재', '결석', '삭제', '이동', '종료', '취소', '연기', '거절'],
    tips({
      etymology: '라틴어 \'praesent-\'에서 유래되었으며, \'앞에(pre-) 있다(esse)\'는 의미가 합쳐져 현재 눈앞에 있는 상태를 나타냅니다.',
      visual: '생일 파티 상자 위에 놓인 리본 달린 선물이나, 출석부에서 내 이름 옆에 체크 표시가 되어 있는 장면을 상상하세요.',
      soundAlike: '\'프레젠트\'라고 발음하며, 발표자가 청중 \'앞에 서 있는\' 모습을 연상하면 기억하기 쉽습니다.',
      context: '시간상으로는 \'지금\'을 의미하고, 상태로는 \'참석한\' 혹은 \'존재하는\' 상황에서 주로 쓰입니다.',
      synonymAntonym: '지금 이 순간을 뜻하는 current와 반대되는 과거인 past를 함께 묶어서 외우면 효과적입니다.',
    }),
    {
      definition: 'The period of time that is happening now, or a thing given to someone as a gift.',
      synonyms: ['gift', 'nowadays', 'attendance'],
      antonyms: ['past', 'future', 'absence'],
      exampleSentences: [
        { en: 'Every guest at the wedding received a small handmade gift to take home.', ko: '결혼식의 모든 하객들은 집에 가져갈 작은 수제 선물을 받았습니다.' },
        { en: 'Focusing on the current moment helps reduce anxiety about what might happen later.', ko: '현재의 순간에 집중하는 것은 나중에 일어날 일에 대한 불안감을 줄이는 데 도움이 됩니다.' },
      ],
      wordDistractors: ['pleasant', 'crescent', 'resent'],
      definitionDistractors: [
        'A written document that outlines the terms and conditions of an agreement',
        'An award or trophy given to the winner of a competition or contest',
        'A brief summary or introduction placed at the beginning of a formal report',
      ],
    }
  ),
  word('preserve', '보존하다', 5, 'verb',
    ['분석하다', '정리하다', '씻다', '먹이를 찾다, 약탈하다', '유혹하다', '붕괴하다', '뛰놀다, 들뜨다', '연기하다, 뒤로 미루다', '파괴하다', '(세밀히) 조사하다'],
    tips({
      etymology: '라틴어 \'pre(미리)\'와 \'servare(지키다)\'가 합쳐져 미리 손상되지 않게 지킨다는 의미를 가집니다.',
      visual: '박물관 유리 상자 안에 소중하게 보관된 오래된 유물을 상상해 보세요.',
      soundAlike: '발음이 \'프리저브\'이므로 냉장고인 \'프리저(freezer)\'가 음식을 신선하게 지켜주는 모습을 떠올려 보세요.',
      context: '환경 보호나 전통 문화 계승, 또는 음식을 절여서 오래 보관할 때 자주 쓰입니다.',
      synonymAntonym: '유지하는 것은 maintain, 반대로 망가뜨리는 것은 destroy입니다.',
    }),
    {
      definition: 'to keep something in its original state or in good condition and prevent it from being damaged or destroyed',
      synonyms: ['maintain', 'conserve', 'protect'],
      antonyms: ['destroy', 'damage', 'neglect'],
      exampleSentences: [
        { en: 'The local community worked hard to maintain the historical integrity of the old building.', ko: '지역 사회는 그 오래된 건물의 역사적 온전함을 지키기 위해 열심히 노력했습니다.' },
        { en: 'Adding salt is a traditional method used to keep meat from spoiling for a long time.', ko: '소금을 치는 것은 고기가 오랫동안 상하지 않게 보존하기 위해 사용되는 전통적인 방법입니다.' },
      ],
      wordDistractors: ['persevere', 'perceive', 'reserve'],
      definitionDistractors: [
        'To restore something to its original condition after it has been damaged',
        'To carefully observe and record changes in a natural environment over time',
        'To divide or separate a large quantity into smaller individual portions',
      ],
    }
  ),
  word('president', '대통령', 6, 'noun',
    ['판벽널', '지느러미', '망치', '신부', '안내, 지도', '애들레이드', '앙코르', '제국', '해군', '헬멧'],
    tips({
      etymology: '라틴어 praesidere에서 유래하며 \'앞에(pre) 앉아 있는(side) 사람\'이라는 뜻에서 우두머리를 의미하게 되었습니다.',
      visual: '청와대나 백악관 같은 집무실 책상 앞에 앉아 중요한 서류에 서명하는 지도자의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프레지던트\'와 유사하므로, \'풀(pre)을 쥐던(sident) 사람\'이 리더가 되었다고 연상해 보세요.',
      context: '국가뿐만 아니라 기업의 회장이나 대학의 총장을 지칭할 때도 이 단어를 광범위하게 사용합니다.',
      synonymAntonym: 'leader나 chief와는 비슷하지만, follower나 subordinate와는 정반대의 위치에 있는 사람을 뜻합니다.',
    }),
    {
      definition: 'The highest-ranking officer who leads a country, organization, or company.',
      synonyms: ['leader', 'chief', 'head'],
      antonyms: ['follower', 'subordinate', 'employee'],
      exampleSentences: [
        { en: 'The newly elected leader promised to improve the national economy during his term.', ko: '새로 당선된 대통령은 임기 동안 국가 경제를 개선하겠다고 약속했습니다.' },
        { en: 'She was appointed as the first female head of the international corporation.', ko: '그녀는 그 국제 기업의 첫 번째 여성 회장으로 임명되었습니다.' },
      ],
      wordDistractors: ['precedent', 'resident', 'persistent'],
      definitionDistractors: [
        'A formal document that grants legal authority to act on behalf of another person',
        'The elected representative of a local district or municipal government area',
        'A senior academic official who oversees research programs at a major university',
      ],
    }
  ),
  word('press', '누르다', 7, 'verb',
    ['당기다', '밀다', '들다', '잡다', '던지다', '흔들다', '돌리다', '꺾다', '비틀다', '접다'],
    tips({
      etymology: '라틴어 \'premere\'에서 유래하여 강하게 누르거나 압박한다는 의미를 담고 있습니다.',
      visual: '엘리베이터 버튼을 손가락으로 꾹 누르는 모습이나, 다리미로 옷을 눌러 다리는 장면을 상상해 보세요.',
      soundAlike: '프레스(press) 기계가 물건을 꽉 눌러 찍어내는 소리를 연상하세요.',
      context: '버튼을 누르거나, 다리미질을 하거나, 언론(the press)을 가리킬 때도 사용되는 다의어입니다.',
      synonymAntonym: '누르다를 뜻하는 push와 유사하며, 반대로 당기다를 뜻하는 pull과 대조됩니다.',
    }),
    {
      definition: 'To push something firmly, or to apply pressure to something.',
      synonyms: ['push', 'squeeze', 'compress'],
      antonyms: ['pull', 'release', 'loosen'],
      exampleSentences: [
        { en: 'Please press the button to open the door.', ko: '문을 열려면 버튼을 눌러 주세요.' },
        { en: 'She pressed the flowers between the pages of a heavy book.', ko: '그녀는 두꺼운 책 페이지 사이에 꽃을 눌러 말렸다.' },
      ],
      wordDistractors: ['stress', 'dress', 'crest'],
      definitionDistractors: [
        'To print or publish written material in large quantities for public distribution',
        'To fold or crease fabric along a straight line using heat and moisture',
        'To express strong opinions publicly through organized demonstrations or rallies',
      ],
    }
  ),
  word('presume', '가정하다', 8, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'prae(미리)\'와 \'sumere(취하다)\'가 합쳐져 사실을 확인하기 전에 미리 결론을 취한다는 의미에서 유래했습니다.',
      visual: '법정에서 판사가 증거를 보기 전 피고인을 무죄라고 미리 생각하는 장면을 떠올려 보세요.',
      soundAlike: '프리즘(prism)을 통해 빛을 미리 보듯, 어떤 결과를 미리 짐작하는 소리로 기억하세요.',
      context: '확실한 증거는 없지만 정황상 당연히 그럴 것이라고 믿을 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '확신 없이 추측하는 assume과 비슷하지만, presume은 좀 더 논리적 근거가 있을 때 사용하며 doubt와는 반대됩니다.',
    }),
    {
      definition: 'to suppose that something is the case on the basis of probability or likelihood without having definite proof',
      synonyms: ['assume', 'suppose', 'surmise'],
      antonyms: ['doubt', 'disbelieve', 'question'],
      exampleSentences: [
        { en: 'Many people would naturally suppose that a person is innocent until proven guilty.', ko: '많은 사람들은 유죄가 입증될 때까지 그 사람이 무죄라고 당연히 가정할 것입니다.' },
        { en: 'Scientists often take for granted that certain physical laws remain constant throughout the universe.', ko: '과학자들은 종종 특정 물리 법칙들이 우주 전체에서 일정하게 유지된다고 가정합니다.' },
      ],
      wordDistractors: ['consume', 'resume', 'perfume'],
      definitionDistractors: [
        'To take bold or unauthorized action without proper permission or authority',
        'To confirm or verify a fact through careful investigation and evidence gathering',
        'To make a formal declaration under oath in a court of law or legal proceeding',
      ],
    }
  ),
  word('pretend', '~인 척하다', 4, 'verb',
    ['고백하다', '인정하다', '드러내다', '숨기다', '속이다', '연기하다', '거짓말하다', '꾸미다', '위장하다', '변장하다'],
    tips({
      etymology: '라틴어 \'praetendere\'에서 유래했으며, \'앞으로(pre) 내밀다(tend)\'라는 뜻이 합쳐져 사실이 아닌 것을 겉으로 내세우는 행위를 의미합니다.',
      visual: '어린아이가 왕관을 쓰고 자신이 진짜 왕인 것처럼 행동하며 노는 모습을 상상해 보세요.',
      soundAlike: '\'프리텐드\'는 \'풀이 튄다\'와 발음이 비슷합니다. 옷에 풀이 튀었는데 아무렇지 않은 척 연기하는 상황을 떠올려 보세요.',
      context: '주로 아이들의 놀이나, 누군가를 속이기 위해 사실이 아닌 것을 사실처럼 꾸밀 때 자주 사용됩니다.',
      synonymAntonym: '가장 흔한 유의어는 feign이며, 반의어로는 솔직함을 뜻하는 be honest가 있습니다.',
    }),
    {
      definition: 'to behave as if something is true when you know that it is not, especially in order to deceive people or as a game',
      synonyms: ['feign', 'simulate', 'fake'],
      antonyms: ['reveal', 'expose', 'verify'],
      exampleSentences: [
        { en: 'Children often like to act as superheroes and fight imaginary monsters in the backyard.', ko: '아이들은 종종 슈퍼히어로인 척하며 뒷마당에서 가상의 괴물들과 싸우는 것을 좋아한다.' },
        { en: 'She tried to look surprised even though she had already heard the news from her brother.', ko: '그녀는 이미 오빠에게 그 소식을 들었음에도 불구하고 놀란 척하려고 노력했다.' },
      ],
      wordDistractors: ['portend', 'contend', 'distend'],
      definitionDistractors: [
        'To formally propose or suggest an idea during a meeting or discussion',
        'To carefully plan and rehearse a performance before presenting it to an audience',
        'To extend or stretch something beyond its normal or usual limits',
      ],
    }
  ),
  word('pretty', '예쁜', 2, 'adjective',
    ['추한', '거친', '평범한', '어두운', '무거운', '빠른', '조용한', '복잡한', '단단한', '날카로운'],
    tips({
      etymology: '고대 영어 \'prættig\'에서 유래했으며, 원래는 \'교활한\'이라는 뜻이었으나 시간이 흐르며 \'매력적인\'이라는 긍정적인 의미로 변했습니다.',
      visual: '꽃이 활짝 핀 정원이나 정성스럽게 꾸며진 인형의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프리티\'와 비슷하므로, \'프리(Free)\'하게 \'티\'나게 예쁜 모습을 연상하면 쉽습니다.',
      context: '주로 외모가 아름답거나 물건이 보기 좋을 때 사용하며, 부사로 쓰일 때는 \'꽤\'라는 강조의 의미도 가집니다.',
      synonymAntonym: '아름다움을 뜻하는 beautiful과 유사하며, 반대로 못생긴 상태를 뜻하는 ugly와 대조됩니다.',
    }),
    {
      definition: 'pleasing to the eye or mind through beauty or charm',
      synonyms: ['attractive', 'lovely', 'beautiful'],
      antonyms: ['ugly', 'plain', 'unattractive'],
      exampleSentences: [
        { en: 'The little girl wore a colorful dress that looked very attractive on her.', ko: '그 어린 소녀는 자신에게 매우 잘 어울리는 화려한 드레스를 입었습니다.' },
        { en: 'Spring flowers make the entire park look charming and bright.', ko: '봄꽃들이 공원 전체를 매력적이고 밝게 보이게 만듭니다.' },
      ],
      wordDistractors: ['petty', 'witty', 'gritty'],
      definitionDistractors: [
        'Having a small or insignificant size that is barely noticeable to others',
        'Moderately warm or comfortable in temperature and pleasant to the touch',
        'Arranged in a neat and orderly manner with careful attention to symmetry',
      ],
    }
  ),
  word('prevail', '우세하다', 9, 'verb',
    ['굴복하다', '실패하다', '포기하다', '양보하다', '패배하다', '중단하다', '망설이다', '후퇴하다', '사라지다', '약화되다'],
    tips({
      etymology: '라틴어 \'praevalere\'에서 유래했으며, \'prae(앞서다)\'와 \'valere(강하다)\'가 합쳐져 남들보다 더 강한 상태를 뜻합니다.',
      visual: '거센 폭풍우 속에서도 꺾이지 않고 꼿꼿이 서 있는 튼튼한 나무의 모습을 상상해 보세요.',
      soundAlike: '\'프리(pre) 베일(vail)\'로 발음되는데, 장막(vail)을 뚫고 미리(pre) 승기를 잡는 소리로 기억하세요.',
      context: '주로 정의가 승리하거나, 오랜 논쟁 끝에 특정 의견이 지배적인 위치를 차지할 때 자주 쓰입니다.',
      synonymAntonym: 'triumph와 동의어 관계이며, 반대로 힘없이 무너지는 collapse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to prove more powerful than opposing forces or to be widespread and current in a particular area',
      synonyms: ['triumph', 'overcome', 'succeed'],
      antonyms: ['fail', 'lose', 'surrender'],
      exampleSentences: [
        { en: 'Justice will eventually win out and truth will find a way to be recognized by everyone.', ko: '정의는 결국 승리할 것이며 진실은 모든 이에게 인정받을 방법을 찾을 것입니다.' },
        { en: 'Despite the fierce competition from new startups, the established company managed to remain dominant in the market.', ko: '신생 기업들의 치열한 경쟁에도 불구하고, 그 기존 기업은 시장에서 우위를 점할 수 있었습니다.' },
      ],
      wordDistractors: ['travail', 'preview', 'curtail'],
      definitionDistractors: [
        'To exist or be found in large numbers across a wide geographic region',
        'To carefully review and assess the quality of a completed project or task',
        'To gradually weaken or diminish in strength or intensity over a long period',
      ],
    }
  ),
  word('prevent', '방지하다', 5, 'verb',
    ['요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '~을 없애다', '쭈글쭈글한, 쇠약한, 시든', '폐지하다', '위협하다, 겁나게 하다'],
    tips({
      etymology: '라틴어 \'praevenire\'에서 유래했으며, \'미리(pre)\' \'오다(vent)\'라는 의미가 합쳐져 어떤 일이 일어나기 전에 막는다는 뜻이 되었습니다.',
      visual: '축구 골키퍼가 상대방의 공이 골대 안으로 들어오지 못하게 몸을 날려 막아내는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'프리벤트\'와 유사하므로, 사고를 \'미리(pre) 뱉어(vent)\'내서 방지한다고 연상해 보세요.',
      context: '질병 예방, 사고 방지, 범죄 예방 등 부정적인 일이 발생하지 않도록 조치를 취할 때 주로 사용됩니다.',
      synonymAntonym: '무언가를 멈추게 하는 stop과 비슷하지만, 시작조차 못 하게 한다는 점이 다르며 반대말은 허용하는 allow입니다.',
    }),
    {
      definition: 'to stop something from happening or someone from doing something',
      synonyms: ['hinder', 'block', 'avert'],
      antonyms: ['permit', 'assist', 'encourage'],
      exampleSentences: [
        { en: 'Regular exercise and a balanced diet can help certain diseases.', ko: '규칙적인 운동과 균형 잡힌 식단은 특정 질병을 예방하는 데 도움이 될 수 있습니다.' },
        { en: 'The heavy snow will likely the commuters from reaching their offices on time.', ko: '폭설로 인해 통근자들이 제시간에 사무실에 도착하는 것이 어려워질 것입니다.' },
      ],
      wordDistractors: ['pervert', 'invent', 'fervent'],
      definitionDistractors: [
        'To allow or enable something to happen without any interference or restriction',
        'To cause something to occur earlier than originally planned or scheduled',
        'To repair or restore something to its proper functioning condition after damage',
      ],
    }
  ),
  word('previous', '앞의', 6, 'adjective',
    ['용감한', '위쪽의', '(날씨가) 혹독한', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인'],
    tips({
      etymology: '라틴어 \'prae(미리)\'와 \'via(길)\'가 합쳐져 \'길을 앞서가는\'이라는 의미에서 유래했습니다.',
      visual: '영화관에서 영화가 시작되기 전 상영되는 \'이전 줄거리 요약\' 화면을 상상해 보세요.',
      soundAlike: '\'프리비어스\'에서 \'프리(Pre)\'는 \'미리\'라는 뜻의 접두사와 발음이 같아 기억하기 쉽습니다.',
      context: '직장 경력을 말할 때 \'이전 직장\'이나 책의 \'앞선 장\'을 언급할 때 자주 쓰입니다.',
      synonymAntonym: '현재를 뜻하는 current와 반대되며, 순서상 바로 앞인 prior와 비슷합니다.',
    }),
    {
      definition: 'Existing or occurring before in time or order.',
      synonyms: ['prior', 'former', 'preceding'],
      antonyms: ['subsequent', 'following', 'future'],
      exampleSentences: [
        { en: 'The new manager decided to change the policies established by the former administration.', ko: '새 매니저는 이전 행정부에서 수립한 정책들을 바꾸기로 결정했습니다.' },
        { en: 'Please refer to the information provided in the earlier chapter for more details.', ko: '더 자세한 내용은 앞선 장에서 제공된 정보를 참조하십시오.' },
      ],
      wordDistractors: ['precious', 'prevalent', 'devious'],
      definitionDistractors: [
        'Happening at the same time as another event or occurring simultaneously',
        'Expected to happen in the near future based on current trends and conditions',
        'Related to or concerned with the final outcome or conclusion of a matter',
      ],
    }
  ),
  word('prey', '먹이', 7, 'noun',
    ['포식자', '사냥꾼', '식물', '서식지', '생태계', '번식', '진화', '멸종', '야생', '보호구역'],
    tips({
      etymology: '라틴어 praeda(전리품, 약탈물)에서 유래하여 사냥을 통해 얻은 희생물을 뜻하게 되었습니다.',
      visual: '독수리의 날카로운 발톱 아래에서 떨고 있는 작은 생쥐의 모습을 상상해 보세요.',
      soundAlike: '간절히 기도하다라는 뜻의 pray와 발음이 같지만, e가 들어간 prey는 먹잇감을 뜻합니다.',
      context: '동물의 왕국 다큐멘터리에서 사자가 가젤을 쫓을 때 가젤이 바로 이 단어에 해당합니다.',
      synonymAntonym: '사냥하는 주체인 predator와 사냥당하는 대상인 prey를 짝지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'An animal that is hunted and killed by another for food.',
      synonyms: ['quarry', 'victim', 'kill'],
      antonyms: ['predator', 'hunter', 'carnivore'],
      exampleSentences: [
        { en: 'The owl silently swooped down from the tree to catch its small prey.', ko: '올빼미는 작은 먹잇감을 잡기 위해 나무에서 소리 없이 급강하했다.' },
        { en: 'Vulnerable animals often fall easy prey to larger carnivores in the wild.', ko: '취약한 동물들은 야생에서 종종 거대한 육식동물들의 쉬운 먹잇감이 된다.' },
      ],
      wordDistractors: ['pray', 'gray', 'tray'],
      definitionDistractors: [
        'A natural shelter or den where wild animals rest during the daytime hours',
        'A large open area of grassland where animals graze freely without fences',
        'The seasonal migration pattern followed by birds and marine creatures annually',
      ],
    }
  ),
  word('price', '값', 4, 'noun',
    ['한가운데', '여왕', '광선, 빛줄기', '거짓말쟁이', '박물관', '총리', '자기', '정밀, 정확', '공생', '신원 확인, 식별'],
    tips({
      etymology: '라틴어 pretium에서 유래되었으며, 가치나 보상을 의미하는 뿌리를 가지고 있습니다.',
      visual: '상점에 진열된 물건 아래에 붙어 있는 숫자표와 달러 표시를 상상해 보세요.',
      soundAlike: '프라이스(price)는 \'프라이즈(prize, 상)\'와 발음이 비슷하지만, 돈을 내야 하는 상황을 떠올리며 구분하세요.',
      context: '물건을 살 때뿐만 아니라, 성공을 위해 치러야 하는 대가라는 비유적 의미로도 자주 쓰입니다.',
      synonymAntonym: 'cost와 유사하지만 price는 주로 판매자가 매긴 정해진 금액을 뜻하며, 가치가 없음을 뜻하는 worthlessness와 반대됩니다.',
    }),
    {
      definition: 'the amount of money expected, required, or given in payment for something',
      synonyms: ['cost', 'charge', 'fare'],
      antonyms: ['discount', 'freebie', 'worthlessness'],
      exampleSentences: [
        { en: 'The market fluctuates daily, causing the fuel amount to rise significantly.', ko: '시장이 매일 변동하여 연료비가 크게 상승하고 있습니다.' },
        { en: 'Success often comes with a heavy sacrifice that one must be willing to pay.', ko: '성공은 종종 기꺼이 지불해야 하는 큰 희생이라는 대가를 수반합니다.' },
      ],
      wordDistractors: ['prise', 'prince', 'splice'],
      definitionDistractors: [
        'A reward or recognition given to someone for outstanding achievement or service',
        'The total quantity or amount of goods available for purchase at a given time',
        'A standard unit of measurement used to compare the relative worth of items',
      ],
    }
  ),
  word('pride', '자존심', 5, 'noun',
    ['겸손', '수치심', '불안', '질투', '분노', '슬픔', '공포', '의심', '후회', '절망'],
    tips({
      etymology: '고대 영어 \'pryde\'에서 유래했으며, \'proud(자랑스러운)\'의 명사형으로 자신에 대한 높은 평가를 의미합니다.',
      visual: '올림픽 금메달리스트가 가슴에 손을 얹고 국기를 바라보며 당당하게 서 있는 모습을 상상하세요.',
      soundAlike: '발음이 \'프라이드\' 치킨과 비슷하죠? 내가 만든 치킨이 세상에서 제일 맛있다는 \'자부심\'을 떠올려 보세요.',
      context: '자신의 성취에 대한 긍정적인 만족감을 나타낼 때나, 타인에게 굽히지 않는 자존심을 표현할 때 주로 쓰입니다.',
      synonymAntonym: 'self-esteem과 유사하지만, 지나치면 arrogance가 될 수 있고 반대로는 humility가 필요합니다.',
    }),
    {
      definition: 'A feeling of deep pleasure or satisfaction derived from one\'s own achievements or qualities.',
      synonyms: ['self-esteem', 'dignity', 'satisfaction'],
      antonyms: ['humility', 'shame', 'modesty'],
      exampleSentences: [
        { en: 'She took great satisfaction in her daughter\'s academic success and felt a sense of accomplishment.', ko: '그녀는 딸의 학업적 성공에 큰 만족감을 느꼈고 자부심을 가졌다.' },
        { en: 'His refusal to accept any financial help was driven by his stubborn sense of dignity.', ko: '어떠한 경제적 도움도 거절한 그의 행동은 완고한 자존심 때문이었다.' },
      ],
      wordDistractors: ['pried', 'bride', 'stride'],
      definitionDistractors: [
        'A group of animals that travel together for protection and companionship',
        'A strong emotional reaction caused by an unexpected or shocking event',
        'The desire to compete with and outperform others in a particular field',
      ],
    }
  ),
  word('priest', '성직자', 6, 'noun',
    ['신도', '사원', '수도원', '예배', '성경', '찬송가', '교회', '신학', '기도', '축복'],
    tips({
      etymology: '그리스어 \'presbyteros\'에서 유래되었으며, 이는 \'장로\' 또는 \'나이가 많은 사람\'을 의미합니다.',
      visual: '검은색 사제복을 입고 성당 제단 앞에서 기도를 올리는 신부님의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프리(free) + 스트(st)\'와 비슷하므로, 영혼을 자유롭게 해주는 성직자로 연상해 보세요.',
      context: '종교적인 의식을 집행하거나 신자들에게 영적인 가이드를 제공하는 역할을 할 때 주로 쓰입니다.',
      synonymAntonym: '성직자를 뜻하는 clergyman과 유의어이며, 일반 신도를 뜻하는 layman과 반대됩니다.',
    }),
    {
      definition: 'A person whose job is to perform religious rites and ceremonies in a Christian church or other religions.',
      synonyms: ['clergyman', 'minister', 'pastor'],
      antonyms: ['layman', 'atheist', 'believer'],
      exampleSentences: [
        { en: 'The local village leader asked the holy man to perform the wedding ceremony.', ko: '마을 이장은 그 성직자에게 결혼식을 집행해 달라고 요청했습니다.' },
        { en: 'He decided to dedicate his entire life to God by becoming a member of the clergy.', ko: '그는 성직자가 됨으로써 자신의 전 생애를 신에게 바치기로 결심했습니다.' },
      ],
      wordDistractors: ['pieced', 'priced', 'fiesta'],
      definitionDistractors: [
        'A skilled craftsperson who creates decorative objects from precious metals and gems',
        'A scholar who studies ancient texts and translates them into modern languages',
        'A community leader who organizes local events and charitable fundraising activities',
      ],
    }
  ),
  word('primary', '첫째의', 7, 'adjective',
    ['이차적인', '사소한', '부수적인', '최종의', '복잡한', '우연한', '인위적인', '일시적인', '외부의', '희박한'],
    tips({
      etymology: '라틴어 primus(첫 번째)에서 유래하여 어떤 순서나 중요도에서 가장 앞선다는 느낌을 줍니다.',
      visual: '시상대 맨 위에 서 있는 1등 선수나 학교의 교장 선생님(Principal)을 떠올려 보세요.',
      soundAlike: '프라이머리(Primary) - 화장할 때 가장 먼저 바르는 \'프라이머\'를 생각하면 쉽습니다.',
      context: '선거에서 가장 먼저 치르는 예비 선거를 primary election이라고 부르기도 합니다.',
      synonymAntonym: '가장 중요한 main과 반대되는 보조적인 secondary를 묶어서 기억하세요.',
    }),
    {
      definition: 'of chief importance or happening first in a sequence of events',
      synonyms: ['principal', 'main', 'chief'],
      antonyms: ['secondary', 'minor', 'subordinate'],
      exampleSentences: [
        { en: 'The safety of the passengers remains our concern during the flight.', ko: '비행 중 승객의 안전이 우리의 가장 중요한 관심사로 남아 있습니다.' },
        { en: 'Solar energy is the source of power for this new eco-friendly building.', ko: '태양 에너지는 이 새로운 친환경 건물의 주요 동력원입니다.' },
      ],
      wordDistractors: ['primal', 'priory', 'premier'],
      definitionDistractors: [
        'Relating to the earliest or most basic stage of development in a process',
        'Occurring only once in a lifetime and therefore extremely rare and unique',
        'Produced naturally without any artificial additives or chemical processing',
      ],
    }
  ),
  word('prime', '수위의', 4, 'adjective',
    ['기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '설명적인, 설명의', '가지가지의', '막 태어난'],
    tips({
      etymology: '라틴어 primus에서 유래하여 \'첫 번째의\' 또는 \'가장 중요한\'이라는 의미를 담고 있습니다.',
      visual: '시상대 맨 윗자리에 서 있는 1등 선수나 황금빛으로 빛나는 가장 좋은 품질의 물건을 상상해 보세요.',
      soundAlike: '프라임 스테이크나 프라임 타임처럼 우리가 일상에서 접하는 \'최고급\'의 이미지와 연결하면 쉽습니다.',
      context: '주로 가장 뛰어난 상태나 인생의 전성기, 혹은 가장 우선시되는 원인을 설명할 때 사용됩니다.',
      synonymAntonym: '최고를 뜻하는 main과 반대되는 개념인 secondary를 함께 기억하면 의미의 폭이 넓어집니다.',
    }),
    {
      definition: 'Of the first importance or of the highest quality and excellence.',
      synonyms: ['chief', 'principal', 'superior'],
      antonyms: ['secondary', 'inferior', 'substandard'],
      exampleSentences: [
        { en: 'The chef uses only the most expensive and high-quality cuts of beef for his signature dish.', ko: '그 주방장은 자신의 시그니처 요리를 위해 오직 가장 비싸고 최고급인 소고기 부위만을 사용합니다.' },
        { en: 'Reducing carbon emissions is a major objective for the international environmental committee this year.', ko: '탄소 배출을 줄이는 것은 올해 국제 환경 위원회의 가장 주요한 목표입니다.' },
      ],
      wordDistractors: ['grime', 'prism', 'rhyme'],
      definitionDistractors: [
        'Belonging to the middle period of a historical era, neither early nor late',
        'Designed for temporary or short-term use before being replaced or upgraded',
        'Commonly available and easily obtained without special effort or resources',
      ],
    }
  ),
  word('primitive', '원시의', 5, 'adjective',
    ['현대적인', '세련된', '복잡한', '인공적인', '진보된', '도시의', '기계적인', '최첨단의', '우아한', '정교한'],
    tips({
      etymology: '라틴어 \'primus(첫 번째의)\'에서 유래하여 인류 역사의 가장 초기 단계를 의미합니다.',
      visual: '돌도끼를 들고 움집에 살고 있는 구석기 시대 사람들의 모습을 상상해 보세요.',
      soundAlike: '\'프리미티브\'는 \'풀이 밑에\'와 발음이 비슷하죠? 풀 밑에서 자던 원시 시대를 떠올려 보세요.',
      context: '기술이 전혀 없는 상태나 아주 단순하고 기초적인 도구를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '고대의라는 뜻의 ancient와 비슷하지만, 현대적이라는 뜻의 modern과는 정반대입니다.',
    }),
    {
      definition: 'relating to, denoting, or preserving the character of an early stage in the evolutionary or historical development of something',
      synonyms: ['ancient', 'prehistoric', 'primeval'],
      antonyms: ['modern', 'sophisticated', 'advanced'],
      exampleSentences: [
        { en: 'Early humans used primitive tools made of stone and bone to hunt for food.', ko: '초기 인류는 먹이를 사냥하기 위해 돌과 뼈로 만든 원시적인 도구를 사용했습니다.' },
        { en: 'The remote tribe lived in primitive conditions without electricity or running water.', ko: '그 외딴 부족은 전기나 수도가 없는 원시적인 환경에서 살았습니다.' },
      ],
      wordDistractors: ['figurative', 'primate', 'privative'],
      definitionDistractors: [
        'Constructed using highly advanced technology and innovative engineering methods',
        'Belonging to a culture that values tradition and resists rapid social change',
        'Located in a remote and isolated region far from any major population center',
      ],
    }
  ),
  word('prince', '왕자', 3, 'noun',
    ['왕비', '공주', '기사', '백작', '신하', '국왕', '영주', '장군', '귀족', '시종'],
    tips({
      etymology: '라틴어 \'princeps\'에서 유래했으며 \'가장 먼저(primus) 잡는(capere) 사람\' 즉, 우두머리를 뜻합니다.',
      visual: '머리에 작은 왕관을 쓰고 화려한 망토를 두른 젊은 남성이 성의 발코니에 서 있는 모습을 상상하세요.',
      soundAlike: '\'프린스\' 발음이 \'프린터\'와 비슷하죠? 왕자가 궁전의 문서를 프린트하고 있다고 연상해 보세요.',
      context: '동화 속에서 백마 탄 기사나 왕실의 후계자를 묘사할 때 가장 흔하게 등장하는 단어입니다.',
      synonymAntonym: '군주를 뜻하는 monarch와 비슷하지만, 왕의 아들이라는 점에서 구별되며 평민인 commoner와 반대됩니다.',
    }),
    {
      definition: 'A male member of a royal family, especially the son of a king or queen.',
      synonyms: ['monarch', 'royal', 'sovereign'],
      antonyms: ['commoner', 'peasant', 'subject'],
      exampleSentences: [
        { en: 'The young heir was officially crowned as the new leader of the kingdom.', ko: '그 젊은 후계자는 왕국의 새로운 지도자로 공식적으로 즉위했습니다.' },
        { en: 'Many fairy tales begin with a brave hero rescuing a kingdom from a dragon.', ko: '많은 동화는 용으로부터 왕국을 구하는 용감한 영웅의 이야기로 시작됩니다.' },
      ],
      wordDistractors: ['prance', 'prune', 'mince'],
      definitionDistractors: [
        'A high-ranking military commander who leads a large army into battle',
        'A wealthy landowner who governs a large rural estate and its workers',
        'A young apprentice who is training under the guidance of a skilled master',
      ],
    }
  ),
  word('principal', '주요한', 6, 'adjective',
    ['부차적인', '사소한', '우연한', '일시적인', '가공의', '추상적인', '엄격한', '유연한', '복잡한', '단순한'],
    tips({
      etymology: '라틴어 \'principalis\'에서 유래하며 \'가장 먼저의\', \'으뜸가는\'이라는 뜻을 담고 있습니다.',
      visual: '학교의 교장선생님이 전교생 앞에서 가장 중요한 훈화 말씀을 하시는 모습을 상상해 보세요.',
      soundAlike: '발음이 같은 \'principle(원리)\'과 혼동하기 쉬우니 \'사람(al)\'이 \'주요한\' 직책을 맡는다고 기억하세요.',
      context: '경제학에서 원금을 뜻하거나, 조직에서 가장 높은 지위에 있는 사람을 가리킬 때도 쓰입니다.',
      synonymAntonym: '가장 핵심인 main과 반대되는 개념인 보조적인 secondary를 함께 묶어서 외우면 효과적입니다.',
    }),
    {
      definition: 'First in order of importance; main or primary.',
      synonyms: ['primary', 'main', 'chief'],
      antonyms: ['secondary', 'minor', 'subordinate'],
      exampleSentences: [
        { en: 'The lack of funding was the principal reason for the project\'s failure.', ko: '자금 부족이 그 프로젝트가 실패한 주요한 이유였습니다.' },
        { en: 'Vegetables are the principal ingredient in this traditional soup recipe.', ko: '채소는 이 전통 수프 레시피의 주요 재료입니다.' },
      ],
      wordDistractors: ['principle', 'provincial', 'princely'],
      definitionDistractors: [
        'Relating to or involving a formal ceremony or official public occasion',
        'Occurring at regular intervals throughout a specific time period',
        'Derived from or based on personal experience rather than formal training',
      ],
    }
  ),
  word('principle', '원리', 7, 'noun',
    ['경치, 풍경', '급송 택배, 운반인', '효과, 유효성', '재기, 부활', '상대, 짝', '유개트럭', '진부하고 상투적인 말', '지방', '환자', '여행'],
    tips({
      etymology: '라틴어 \'principium\'에서 유래하여 \'시작\'이나 \'근원\'을 뜻하며, 사물의 근본이 되는 법칙을 의미합니다.',
      visual: '기계의 톱니바퀴가 맞물려 돌아가는 가장 기초적인 설계도를 상상해 보세요.',
      soundAlike: '학교 교장선생님을 뜻하는 \'principal\'과 발음이 같으니 철자에 주의해야 합니다.',
      context: '도덕적 신념이나 과학적 법칙을 설명할 때 주로 사용되는 격식 있는 단어입니다.',
      synonymAntonym: '기초가 되는 rule이나 theory와 비슷하며, 예외를 뜻하는 exception과는 반대됩니다.',
    }),
    {
      definition: 'A fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning.',
      synonyms: ['doctrine', 'tenet', 'philosophy'],
      antonyms: ['ambiguity', 'exception', 'frivolity'],
      exampleSentences: [
        { en: 'The machine operates on a simple physical law that governs motion.', ko: '그 기계는 운동을 제어하는 단순한 물리적 원리에 따라 작동합니다.' },
        { en: 'She refused to compromise her moral values even under great pressure.', ko: '그녀는 큰 압박 속에서도 자신의 도덕적 원칙을 굽히기를 거부했습니다.' },
      ],
      wordDistractors: ['principal', 'pinnacle', 'participle'],
      definitionDistractors: [
        'A specific example or instance used to illustrate a broader concept or idea',
        'A detailed plan of action designed to achieve a long-term strategic goal',
        'The primary source of income or revenue for a business or organization',
      ],
    }
  ),
  word('print', '인쇄하다', 1, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '압도하다, 억누르다', '노력하다, 시도하다', '잠에서 깨다', '부수다', '갈망하다'],
    tips({
      etymology: '라틴어 premere(누르다)에서 유래하여 종이에 잉크를 눌러 찍어내는 행위를 뜻하게 되었습니다.',
      visual: '프린터기에서 잉크 냄새가 나는 따끈따끈한 종이가 한 장씩 밀려 나오는 모습을 상상하세요.',
      soundAlike: '발음이 \'프린트\'로 익숙하며, 손가락 지문을 뜻하는 핑거프린트(fingerprint)를 떠올리면 쉽습니다.',
      context: '사무실이나 학교에서 과제물을 종이 형태로 출력할 때 가장 흔히 사용하는 단어입니다.',
      synonymAntonym: 'publish(출판하다)와 유사하며, 반대로 디지털 파일로만 남기는 것은 save(저장하다)라고 할 수 있습니다.',
    }),
    {
      definition: 'To produce letters, pictures, or symbols on paper using a machine and ink.',
      synonyms: ['publish', 'reproduce', 'stamp'],
      antonyms: ['erase', 'delete', 'conceal'],
      exampleSentences: [
        { en: 'The teacher asked the students to produce a hard copy of their essays.', ko: '선생님은 학생들에게 에세이를 종이로 인쇄해 오라고 요청하셨습니다.' },
        { en: 'Many companies no longer issue physical catalogs to save paper.', ko: '많은 기업들이 종이를 아끼기 위해 더 이상 실물 카탈로그를 인쇄하지 않습니다.' },
      ],
      wordDistractors: ['pint', 'sprint', 'glint'],
      definitionDistractors: [
        'To draw or sketch an image by hand using pencils, charcoal, or ink pens',
        'To record spoken words in written form by transcribing audio or speech',
        'To display or project digital images onto a screen for public viewing',
      ],
    }
  ),
  word('prior', '이전의', 10, 'adjective',
    ['병든', '집중적인, 강도 높은', '태평양의; 평화로운', '헌신적인, 전용의', '멸종한', '과장된, 허풍 떠는', '파삭파삭한', '비천한 / 하인', '비할 데 없는', '침체된, 불경기의, (stagnance침체, 정체, 불황)'],
    tips({
      etymology: '라틴어 \'prior\'에서 유래했으며 \'먼저의\' 또는 \'앞선\'이라는 뜻을 가집니다.',
      visual: '달력에서 오늘 날짜보다 앞선 날짜들에 동그라미가 쳐진 모습을 상상해 보세요.',
      soundAlike: '\'프라이어\'라고 발음하며, \'프라이팬\'을 쓰기 \'이전\'에 재료를 손질한다고 연상하세요.',
      context: '비즈니스 미팅이나 예약 시스템에서 \'사전 동의\'나 \'이전 경험\'을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'previous와 유사하며, 나중을 뜻하는 subsequent와 반대되는 개념입니다.',
    }),
    {
      definition: 'Existing or coming before in time, order, or importance.',
      synonyms: ['previous', 'preceding', 'former'],
      antonyms: ['subsequent', 'following', 'later'],
      exampleSentences: [
        { en: 'The applicant had no prior experience in the hospitality industry.', ko: '지원자는 서비스 업계에서의 이전 경력이 전혀 없었습니다.' },
        { en: 'Please notify the office at least two days prior to your arrival.', ko: '도착하기 최소 이틀 전에는 사무실에 알려주시기 바랍니다.' },
      ],
      wordDistractors: ['priory', 'primer', 'friar'],
      definitionDistractors: [
        'Happening at a future date that has not yet been determined or confirmed',
        'Considered to be more important or urgent than all other competing matters',
        'Related to the final stage or concluding phase of a lengthy process',
      ],
    }
  ),
  word('prison', '교도소', 4, 'noun',
    ['학교', '병원', '도서관', '박물관', '경찰서', '소방서', '우체국', '은행', '공장', '시장'],
    tips({
      etymology: '라틴어 prehendere(잡다)에서 유래하여 범죄자를 붙잡아 두는 곳이라는 의미를 가집니다.',
      visual: '높은 담벼락과 창살이 있는 회색 건물을 상상하며 갇혀 있는 이미지를 떠올려 보세요.',
      soundAlike: '프리즌(prison) 브레이크라는 유명한 탈옥 드라마 제목을 생각하면 기억하기 쉽습니다.',
      context: '주로 중범죄를 저지른 사람들이 법적 판결을 받고 수감되는 장소를 말할 때 쓰입니다.',
      synonymAntonym: 'jail은 비교적 짧은 구류를, prison은 장기 복역을 의미하며 반대말로는 자유를 뜻하는 freedom이 있습니다.',
    }),
    {
      definition: 'A building where people are legally held as a punishment for crimes they have committed.',
      synonyms: ['penitentiary', 'jail', 'dungeon'],
      antonyms: ['freedom', 'liberty', 'release'],
      exampleSentences: [
        { en: 'The judge sentenced the criminal to ten years in a maximum-security facility.', ko: '판사는 그 범죄자에게 엄중 경비 시설에서의 10년 형을 선고했습니다.' },
        { en: 'Many reformers believe that the current penal system should focus more on rehabilitation than punishment.', ko: '많은 개혁가들은 현재의 교도소 시스템이 처벌보다는 재활에 더 집중해야 한다고 믿습니다.' },
      ],
      wordDistractors: ['prism', 'poison', 'bison'],
      definitionDistractors: [
        'A heavily guarded military base where soldiers undergo intensive combat training',
        'A government facility designed to house refugees and displaced persons temporarily',
        'A secure institution where valuable national treasures and documents are stored',
      ],
    }
  ),
  word('privacy', '사생활, 프라이버시', 5, 'noun',
    ['공개', '공유', '노출', '감시', '개방', '홍보', '발표', '전시', '연결', '소통'],
    tips({
      etymology: '라틴어 \'privatus\'에서 유래하여 \'개인적인 것\' 혹은 \'공적인 것에서 분리된 상태\'를 의미합니다.',
      visual: '방 문을 닫고 혼자만의 시간을 보내며 외부의 시선을 차단하는 모습을 상상해 보세요.',
      soundAlike: '프라이버시라고 발음하며 \'나만의 프라이팬(privacy)은 아무에게도 안 보여줄 거야\'라고 외워보세요.',
      context: '개인 정보 보호법이나 사생활 침해 논란이 있을 때 가장 자주 등장하는 핵심 단어입니다.',
      synonymAntonym: 'seclusion(격리)과 유사하며, publicity(공개)나 openness(개방)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The state of being free from public attention or intrusion into one\'s personal life.',
      synonyms: ['seclusion', 'confidentiality', 'solitude'],
      antonyms: ['publicity', 'exposure', 'openness'],
      exampleSentences: [
        { en: 'The celebrity requested more space to protect her family\'s personal life from the media.', ko: '그 연예인은 언론으로부터 가족의 사생활을 보호하기 위해 더 많은 공간을 요청했습니다.' },
        { en: 'New digital regulations aim to enhance the security of user data on social media platforms.', ko: '새로운 디지털 규정은 소셜 미디어 플랫폼에서 사용자 데이터의 보안을 강화하는 것을 목표로 합니다.' },
      ],
      wordDistractors: ['piracy', 'primacy', 'lunacy'],
      definitionDistractors: [
        'The quality of being honest and transparent in all personal and professional dealings',
        'A legal right that allows individuals to access public records and government documents',
        'The practice of sharing personal information openly with friends and family members',
      ],
    }
  ),
  word('private', '사적인', 6, 'adjective',
    ['공공의', '개방적인', '사회적인', '공식적인', '일반적인', '정부의', '집단적인', '투명한', '외향적인', '공유된'],
    tips({
      etymology: '라틴어 privatus에서 유래되었으며, 이는 \'공직에서 물러난\' 또는 \'개인적인\'이라는 의미를 담고 있습니다.',
      visual: '일기장에 자물쇠가 채워져 있거나, \'출입 금지(No Trespassing)\' 표지판이 세워진 개인 정원을 상상해 보세요.',
      soundAlike: '프라이버시(Privacy)라는 단어와 발음이 비슷하므로, 나만의 비밀스러운 공간을 떠올리면 쉽습니다.',
      context: '개인적인 대화, 사유 재산, 또는 남에게 알리고 싶지 않은 비밀스러운 상황에서 주로 쓰입니다.',
      synonymAntonym: 'public(공공의)과 정반대되는 개념으로, personal(개인적인)이나 confidential(기밀의)과 의미가 통합니다.',
    }),
    {
      definition: 'Belonging to or for the use of one particular person or group of people only, rather than the general public.',
      synonyms: ['personal', 'confidential', 'exclusive'],
      antonyms: ['public', 'common', 'shared'],
      exampleSentences: [
        { en: 'The two world leaders held a secret meeting to discuss the peace treaty away from the media.', ko: '두 정상은 언론을 피해 평화 조약을 논의하기 위해 비공개 회담을 가졌습니다.' },
        { en: 'Please respect my space and do not enter my room without knocking first.', ko: '제 사적인 공간을 존중해 주시고 노크 없이 제 방에 들어오지 말아 주세요.' },
      ],
      wordDistractors: ['primate', 'privation', 'pirate'],
      definitionDistractors: [
        'Owned or operated by a government agency and open to all citizens equally',
        'Performed secretly or covertly without the knowledge of other parties involved',
        'Relating to matters of national security that require the highest level of clearance',
      ],
    }
  ),
  word('privilege', '특권', 8, 'noun',
    ['의무', '책임', '제한', '평등', '박탈', '벌칙', '금지', '공평', '부담', '손실'],
    tips({
      etymology: '라틴어 \'privus\'(개인적인)와 \'lex\'(법)가 합쳐져 특정 개인에게만 적용되는 특별한 법이라는 의미에서 유래했습니다.',
      visual: '공항의 VIP 라운지에 입장할 수 있는 특별한 카드를 들고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'프리(free)\'하게 \'빌리지(village)\'를 드나들 수 있는 특별한 권한이 있다고 연상해 보세요.',
      context: '사회적 지위나 부에 따라 주어지는 혜택을 논할 때나, 누군가를 만나게 되어 영광이라는 표현을 쓸 때 자주 등장합니다.',
      synonymAntonym: 'prerogative는 격식 있는 특권을 뜻하며, 반대로 누구나 지는 의무는 duty라고 합니다.',
    }),
    {
      definition: 'A special right, advantage, or immunity granted or available only to a particular person or group.',
      synonyms: ['prerogative', 'entitlement', 'advantage'],
      antonyms: ['disadvantage', 'restriction', 'handicap'],
      exampleSentences: [
        { en: 'Education should be a universal right rather than a restricted benefit for the wealthy.', ko: '교육은 부유층을 위한 제한된 혜택이라기보다 보편적인 권리여야 합니다.' },
        { en: 'It was a great honor to meet the world-renowned scientist in person.', ko: '세계적으로 유명한 과학자를 직접 만나 뵙게 되어 큰 영광이었습니다.' },
      ],
      wordDistractors: ['prestige', 'pavilion', 'prevalent'],
      definitionDistractors: [
        'A heavy burden or responsibility placed upon someone by law or social expectation',
        'A formal invitation extended to someone asking them to attend a special event',
        'A basic necessity or essential requirement that must be met for daily survival',
      ],
    }
  ),
  word('prize', '소중히 여기다', 2, 'verb',
    ['무시하다', '버리다', '경시하다', '파괴하다', '거절하다', '잊다', '비난하다', '낭비하다', '숨기다', '포기하다'],
    tips({
      etymology: '라틴어 \'pretium(가치)\'에서 유래하여 어떤 대상을 매우 가치 있게 여기는 마음을 담고 있습니다.',
      visual: '박물관의 유리 장식장 안에 아주 소중하게 보관된 보석을 바라보는 수집가의 눈빛을 떠올려 보세요.',
      soundAlike: '발음이 \'프라이즈\'로 \'Price(가격)\'와 비슷하죠? 가격을 매길 수 없을 만큼 소중히 여긴다는 뜻입니다.',
      context: '주로 가보, 우정, 자유처럼 추상적이거나 정서적으로 큰 가치가 있는 대상을 목적어로 취합니다.',
      synonymAntonym: 'Cherish와 유사하며, 반대로 가치를 낮게 보는 Disregard와 대조하여 기억하면 좋습니다.',
    }),
    {
      definition: 'To value something extremely highly or to regard it as being of great importance.',
      synonyms: ['cherish', 'treasure', 'value'],
      antonyms: ['disregard', 'undervalue', 'despise'],
      exampleSentences: [
        { en: 'Many cultures prize hospitality and treat every guest with the utmost respect.', ko: '많은 문화권에서 환대를 소중히 여기며 모든 손님을 최고의 예우로 대접합니다.' },
        { en: 'Collectors often prize these rare stamps because of their unique historical significance.', ko: '수집가들은 독특한 역사적 중요성 때문에 이 희귀한 우표들을 종종 매우 소중하게 여깁니다.' },
      ],
      wordDistractors: ['prise', 'price', 'guise'],
      definitionDistractors: [
        'To compete fiercely against rivals in order to win an award or trophy',
        'To sell or trade a rare item at auction for the highest possible amount',
        'To display or showcase an object publicly for others to admire and appreciate',
      ],
    }
  ),
  word('probably', '십중팔구', 7, 'adverb',
    ['천천히', '자주', '가끔', '항상', '이미', '곧', '직접', '간접적으로', '정확히', '대략'],
    tips({
      etymology: '라틴어 probabilis에서 유래했으며, \'증명할 수 있는\' 또는 \'그럴듯한\'이라는 의미에서 \'아마도\'라는 뜻으로 발전했습니다.',
      visual: '일기예보에서 비가 올 확률이 80% 이상인 구름 아이콘을 떠올려 보세요.',
      soundAlike: '\'프라바블리\' 발음이 \'풀어봐 불리(한 상황을)\'와 비슷하게 들리니, 불리한 상황을 해결할 가능성이 높다고 연상하세요.',
      context: '확신이 100%는 아니지만 상당히 높은 가능성을 두고 추측할 때 문장 중간에 주로 위치합니다.',
      synonymAntonym: 'likely와 비슷하지만 maybe보다는 훨씬 더 일어날 가능성이 높은 상태를 나타냅니다.',
    }),
    {
      definition: 'Used to mean that something is very likely to happen or be true.',
      synonyms: ['likely', 'presumably', 'doubtless'],
      antonyms: ['improbably', 'uncertainly', 'unlikely'],
      exampleSentences: [
        { en: 'The heavy dark clouds mean it will rain within an hour.', ko: '짙고 어두운 구름을 보니 한 시간 내에 십중팔구 비가 올 것이다.' },
        { en: 'She is late for the meeting because her flight was delayed.', ko: '비행기가 지연되었기 때문에 그녀는 아마도 회의에 늦을 것이다.' },
      ],
      wordDistractors: ['provably', 'notably', 'palpably'],
      definitionDistractors: [
        'Used to indicate that something is absolutely certain and beyond any reasonable doubt',
        'Used to express a surprising or unexpected outcome that defies logical explanation',
        'Used to suggest that something happened completely by accident or random chance',
      ],
    }
  ),
  word('problem', '문제', 3, 'noun',
    ['해결', '정답', '성공', '이익', '평화', '안정', '결론', '증명', '기회', '축복'],
    tips({
      etymology: '그리스어 \'proballein\'에서 유래되었으며, \'앞으로(pro) 던져진(ballein) 것\' 즉, 우리가 해결해야 할 과제를 의미합니다.',
      visual: '수학 시험지 위에 커다란 물음표가 그려져 있고, 이를 해결하기 위해 고민하는 학생의 모습을 상상해 보세요.',
      soundAlike: '\'풀어볼래(pro-bal-lem)\'와 발음이 비슷하죠? 어려운 숙제를 \'한번 풀어볼래?\'라고 묻는 상황을 떠올려 보세요.',
      context: '일상적인 곤란함부터 수학 문제, 사회적 쟁점까지 해결이 필요한 모든 부정적인 상황에 두루 쓰입니다.',
      synonymAntonym: 'issue와 유사하지만, problem은 조금 더 부정적이고 즉각적인 해결이 필요한 뉘앙스가 강합니다.',
    }),
    {
      definition: 'a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome',
      synonyms: ['issue', 'difficulty', 'obstacle'],
      antonyms: ['solution', 'advantage', 'benefit'],
      exampleSentences: [
        { en: 'The technical team is working hard to identify the root cause of the system failure.', ko: '기술팀은 시스템 장애의 근본적인 원인 문제를 파악하기 위해 열심히 노력하고 있습니다.' },
        { en: 'Global warming remains a significant challenge that requires international cooperation.', ko: '지구 온난화는 국제적인 협력을 필요로 하는 중대한 문제로 남아 있습니다.' },
      ],
      wordDistractors: ['emblem', 'probing', 'goblet'],
      definitionDistractors: [
        'A correct answer or explanation that resolves a question or eliminates confusion',
        'A fortunate opportunity that leads to personal growth and professional advancement',
        'A formal agreement reached between two or more parties after lengthy negotiations',
      ],
    }
  ),
  word('procedure', '절차', 9, 'noun',
    ['결과', '중단', '혼란', '정지', '우연', '본능', '감정', '기억', '상상', '거절'],
    tips({
      etymology: '라틴어 \'procedere\'에서 유래했으며 \'pro(앞으로)\'와 \'cedere(가다)\'가 합쳐져 단계적으로 나아가는 과정을 뜻합니다.',
      visual: '공장에서 제품이 컨베이어 벨트를 따라 순서대로 조립되는 공정 라인을 상상해 보세요.',
      soundAlike: '\'프로-시저\' 발음이 \'프로(전문가)의 시선\'처럼 들리기도 하죠. 전문가가 정해진 순서대로 일을 처리하는 모습을 떠올려보세요.',
      context: '의료 수술이나 법적 절차, 요리 레시피처럼 정해진 순서를 반드시 지켜야 하는 상황에서 주로 쓰입니다.',
      synonymAntonym: '정해진 단계인 process나 method와 비슷하지만, 혼란을 뜻하는 chaos나 무작위인 randomness와는 반대됩니다.',
    }),
    {
      definition: 'An established or official way of doing something, typically involving a series of steps in a specific order.',
      synonyms: ['process', 'method', 'protocol'],
      antonyms: ['chaos', 'disorder', 'inaction'],
      exampleSentences: [
        { en: 'The surgical team followed a strict safety protocol to ensure the patient\'s recovery.', ko: '수술팀은 환자의 회복을 보장하기 위해 엄격한 안전 절차를 따랐습니다.' },
        { en: 'New employees must learn the standard operating steps for handling customer complaints.', ko: '신입 사원들은 고객 불만을 처리하기 위한 표준 운영 절차를 익혀야 합니다.' },
      ],
      wordDistractors: ['procure', 'brochure', 'structure'],
      definitionDistractors: [
        'The final result or outcome achieved after completing a task or experiment',
        'A spontaneous action taken without any prior planning or deliberate thought',
        'An informal discussion or conversation held between colleagues about a shared topic',
      ],
    }
  ),
  word('proceed', '나아가다', 4, 'verb',
    ['멈추다', '후퇴하다', '거절하다', '지연시키다', '방해하다', '포기하다', '금지하다', '망설이다', '취소하다', '반대하다'],
    tips({
      etymology: '앞을 뜻하는 pro-와 가다를 뜻하는 ceed가 합쳐져 앞으로 나아간다는 의미가 됩니다.',
      visual: '신호등이 초록불로 바뀌자마자 차들이 일제히 앞으로 출발하는 모습을 상상해보세요.',
      soundAlike: '프로(pro) 선수들이 시합(seed)을 향해 거침없이 나아가는 소리를 떠올려보세요.',
      context: '회의나 절차를 중단하지 않고 계속해서 다음 단계로 넘어갈 때 주로 사용됩니다.',
      synonymAntonym: 'continue와 유의어 관계이며, 중단하다라는 뜻의 halt와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To begin or continue a course of action or to move forward in a specific direction.',
      synonyms: ['continue', 'advance', 'progress'],
      antonyms: ['stop', 'halt', 'retreat'],
      exampleSentences: [
        { en: 'The passengers were told to wait for a moment before they could to the boarding gate.', ko: '승객들은 탑승구로 이동하기 전에 잠시 기다려 달라는 안내를 받았습니다.' },
        { en: 'After the brief interruption, the chairperson decided to with the scheduled presentation.', ko: '잠시 중단된 후, 의장은 예정된 발표를 계속 진행하기로 결정했습니다.' },
      ],
      wordDistractors: ['precede', 'recede', 'concede'],
      definitionDistractors: [
        'To pause and carefully reconsider a decision before taking further action',
        'To return to a previous location or state after a temporary departure',
        'To formally announce the cancellation of an event or scheduled meeting',
      ],
    }
  ),
  word('process', '과정', 5, 'noun',
    ['결과', '중단', '정체', '고정', '완성', '파괴', '무시', '우연', '본질', '기원'],
    tips({
      etymology: '라틴어 \'procedere\'에서 유래했으며, \'앞으로(pro)\' \'가다(cedere)\'라는 의미가 합쳐져 무언가가 진행되는 과정을 뜻합니다.',
      visual: '공장의 컨베이어 벨트 위에서 원재료가 차례대로 이동하며 제품이 만들어지는 단계를 상상해 보세요.',
      soundAlike: '\'프로세스\'는 컴퓨터의 \'프로세서(CPU)\'가 데이터를 처리하는 일련의 흐름을 떠올리면 쉽습니다.',
      context: '비즈니스나 과학 분야에서 결과물보다 그것을 만들어가는 절차나 방법의 중요성을 강조할 때 자주 쓰입니다.',
      synonymAntonym: '순서대로 진행되는 procedure와 비슷하지만, 멈춰있는 상태인 stagnation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A series of actions or steps taken in order to achieve a particular end.',
      synonyms: ['procedure', 'operation', 'method'],
      antonyms: ['stagnation', 'cessation', 'idleness'],
      exampleSentences: [
        { en: 'Learning a new language is a long and gradual development that requires patience.', ko: '새로운 언어를 배우는 것은 인내심을 필요로 하는 길고 점진적인 과정입니다.' },
        { en: 'The manufacturing system must be efficient to reduce the total production time.', ko: '전체 생산 시간을 단축하기 위해서는 제조 공정이 효율적이어야 합니다.' },
      ],
      wordDistractors: ['profess', 'progress', 'prowess'],
      definitionDistractors: [
        'The final product or outcome obtained at the end of a lengthy experiment',
        'A single isolated event that occurs without any connection to preceding actions',
        'A sudden change in direction or approach taken in response to new information',
      ],
    }
  ),
  word('produce', '생산하다', 6, 'verb',
    ['요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '헐뜯다/비난하다', '생산하기 (produce의 현재분사)', '아부하다', '펄럭이다, 떨리다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'ducere(이끌다)\'가 합쳐져 물건을 세상 밖으로 끌어낸다는 의미에서 유래했습니다.',
      visual: '공장 컨베이어 벨트에서 갓 만들어진 새 제품들이 줄지어 나오는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'프로듀스\'와 비슷하므로 아이돌을 제작하는 \'프로듀서\'가 음악을 만들어내는 모습을 떠올리면 쉽습니다.',
      context: '농산물을 뜻하는 명사로도 쓰이지만, 동사일 때는 무언가를 제조하거나 결과물을 창출할 때 주로 쓰입니다.',
      synonymAntonym: '만들어내는 create와 반대로, 완전히 파괴하여 없애버리는 destroy를 함께 기억하세요.',
    }),
    {
      definition: 'to create, manufacture, or generate something through a process or effort',
      synonyms: ['manufacture', 'generate', 'create'],
      antonyms: ['destroy', 'consume', 'ruin'],
      exampleSentences: [
        { en: 'The local factory can manufacture over a thousand units of this device every single day.', ko: '현지 공장은 매일 이 장치를 천 대 이상 생산할 수 있습니다.' },
        { en: 'Organic farms usually yield smaller quantities of fruits compared to industrial ones.', ko: '유기농 농장은 보통 산업형 농장에 비해 적은 양의 과일을 생산합니다.' },
      ],
      wordDistractors: ['induce', 'deduce', 'spruce'],
      definitionDistractors: [
        'To transport or deliver goods from a warehouse to a retail store for sale',
        'To carefully inspect and evaluate the quality of finished goods before shipping',
        'To reduce or minimize the total output of a facility for maintenance purposes',
      ],
    }
  ),
];
