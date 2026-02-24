import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch08: VocabItem[] = [
  word('Emotion', '감정', 4, 'noun',
    ['이성', '논리', '사실', '규칙', '습관', '지식', '기술', '정보', '계획', '결과'],
    tips({
      etymology: '라틴어 \'emovere\'에서 유래하며, \'e(밖으로)\'와 \'movere(움직이다)\'가 결합되어 마음의 움직임이 외부로 표출되는 것을 의미합니다.',
      visual: '웃는 얼굴, 우는 얼굴, 화난 얼굴 등 여러 가지 표정이 그려진 이모티콘(Emoticon) 세트를 상상해 보세요.',
      soundAlike: '우리에게 익숙한 \'이모티콘\'의 앞부분인 \'이모션\'과 발음이 같아 연결해서 기억하기 쉽습니다.',
      context: '단순한 기분을 넘어 기쁨, 슬픔, 공포처럼 강렬하게 일어나는 심리적 반응을 설명할 때 쓰입니다.',
      synonymAntonym: 'feeling과 유사하지만 더 격식 있거나 강한 느낌이며, 차가운 이성을 뜻하는 reason과 대조됩니다.',
    }),
    {
      definition: 'A natural instinctive state of mind deriving from one\'s circumstances, mood, or relationships with others.',
      synonyms: ['feeling', 'sentiment', 'passion'],
      antonyms: ['reason', 'logic', 'indifference'],
      exampleSentences: [
        { en: 'She could not hide her emotion when she heard the news.', ko: '그녀는 그 소식을 들었을 때 자신의 감정을 숨길 수 없었다.' },
        { en: 'Music often evokes strong emotions in listeners.', ko: '음악은 종종 청취자들에게 강렬한 감정을 불러일으킨다.' },
      ],
    }
  ),
  word('Employ', '고용하다', 4, 'verb',
    ['해고하다', '해임하다', '거절하다', '퇴직하다', '사임하다', '그만두다', '포기하다', '방치하다', '무시하다', '기권하다'],
    tips({
      etymology: 'em(안으로)과 ploy(접다/연루시키다)가 합쳐져 사람을 업무의 영역 안으로 끌어들인다는 어원을 가집니다.',
      visual: '새로운 직원이 사원증을 목에 걸고 사무실 책상에 처음 앉는 모습을 떠올려 보세요.',
      soundAlike: '임플로이(Employ)는 \'임플란트\'처럼 무언가를 자리에 딱 심어 고정하는 느낌으로 기억하세요.',
      context: '단순히 사람을 뽑는 것뿐만 아니라, 특정 기술이나 방법을 \'사용하다\'라는 의미로도 자주 쓰입니다.',
      synonymAntonym: 'hire와 recruit는 사람을 뽑을 때 쓰이고, dismiss와 fire는 반대로 내보낼 때 사용됩니다.',
    }),
    {
      definition: 'to provide a person with a paid job or to make use of a particular method or skill',
      synonyms: ['hire', 'recruit', 'utilize'],
      antonyms: ['dismiss', 'fire', 'discharge'],
      exampleSentences: [
        { en: 'The factory plans to employ more staff to increase production.', ko: '그 공장은 생산량을 늘리기 위해 더 많은 직원을 고용할 계획이다.' },
        { en: 'The investigators decided to employ a new technique to solve the case.', ko: '수사관들은 사건을 해결하기 위해 새로운 기법을 이용하기로 했다.' },
      ],
    }
  ),
  word('Enable', '가능하게 하다', 4, 'verb',
    ['방해하다', '막다', '금지하다', '차단하다', '제한하다', '억제하다', '거부하다', '중단시키다', '방치하다', '지연시키다'],
    tips({
      etymology: '접두사 en-(만들다)과 able(할 수 있는)이 합쳐져 \'할 수 있는 상태로 만들다\'라는 의미가 됩니다.',
      visual: '회색으로 비활성화된 버튼이 클릭 한 번에 밝은 색으로 변하며 작동하기 시작하는 모습을 상상하세요.',
      soundAlike: '스마트폰 설정 메뉴에서 기능을 켤 때 자주 보이는 \'Enable\' 옵션을 떠올려 보세요.',
      context: '주로 새로운 기술, 법규, 혹은 도구가 이전에는 불가능했던 일을 할 수 있게 해줄 때 사용합니다.',
      synonymAntonym: 'allow나 permit은 허용의 뉘앙스가 강하고, 반대로 disable은 기능을 끄거나 무효화할 때 씁니다.',
    }),
    {
      definition: 'to provide someone with the ability or opportunity to do something, or to make a process achievable',
      synonyms: ['allow', 'permit', 'empower'],
      antonyms: ['disable', 'prevent', 'hinder'],
      exampleSentences: [
        { en: 'Technology enables us to work from anywhere.', ko: '기술은 우리가 어디서든 일할 수 있게 해준다.' },
        { en: 'This feature enables faster data processing.', ko: '이 기능은 더 빠른 데이터 처리를 가능하게 한다.' },
      ],
    }
  ),
  word('Encounter', '마주치다', 4, 'verb',
    ['회피하다', '피하다', '놓치다', '무시하다', '소홀히하다', '지나치다', '도망하다', '숨다', '외면하다', '피신하다'],
    tips({
      etymology: 'en(안에)과 counter(반대하여/마주하여)가 결합되어, 예상치 못한 대상을 정면으로 마주하게 됨을 의미합니다.',
      visual: '길 모퉁이를 돌자마자 생각지도 못한 옛 친구와 눈이 딱 마주치는 찰나의 순간을 상상해 보세요.',
      soundAlike: 'RPG 게임에서 몬스터와 갑자기 맞닥뜨리는 상황을 \'인카운터\'라고 표현하는 것을 떠올리면 쉽습니다.',
      context: '단순히 사람을 만나는 것뿐만 아니라, 예상치 못한 문제나 난관에 봉착했을 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: '우연히 만나는 meet, 직면하는 confront와 비슷하며, 의도적으로 피하는 avoid와는 반대됩니다.',
    }),
    {
      definition: 'to unexpectedly experience or come into contact with someone or something',
      synonyms: ['meet', 'confront', 'face'],
      antonyms: ['avoid', 'evade', 'shun'],
      exampleSentences: [
        { en: 'I encountered an old friend at the mall while I was shopping.', ko: '쇼핑을 하던 중에 쇼핑몰에서 우연히 옛 친구를 마주쳤다.' },
        { en: 'The team may encounter several technical difficulties during the project.', ko: '그 팀은 프로젝트를 진행하는 동안 몇 가지 기술적인 난관에 봉착할 수도 있다.' },
      ],
    }
  ),
  word('Encourage', '격려하다', 4, 'verb',
    ['좌절시키다', '낙담시키다', '비난하다', '비판하다', '무시하다', '거절하다', '방해하다', '위협하다', '억제하다', '회피하다'],
    tips({
      etymology: '접두사 en(~하게 만들다)과 courage(용기)가 결합되어, 상대방의 마음속에 용기가 생기도록 만든다는 어원을 가집니다.',
      visual: '마라톤 결승선 근처에서 지친 선수에게 물을 건네며 박수를 보내는 관중들의 열정적인 모습을 떠올려 보세요.',
      soundAlike: '안에(en) 용기(courage)를 넣어준다고 생각하면 기억하기 쉽습니다.',
      context: '학업, 운동, 새로운 도전 등 타인이 자신감을 얻어 행동을 지속하게 하려는 상황에서 주로 사용됩니다.',
      synonymAntonym: 'motivate, support는 긍정적인 힘을 주는 유의어이며, 반대로 기를 꺾는 discourage는 반의어입니다.',
    }),
    {
      definition: 'to inspire someone with the spirit, confidence, or hope needed to take action or continue a task',
      synonyms: ['motivate', 'support', 'inspire'],
      antonyms: ['discourage', 'dissuade', 'deter'],
      exampleSentences: [
        { en: 'The teacher tried to encourage her students to ask more questions during the lecture.', ko: '선생님은 학생들이 강의 중에 더 많은 질문을 하도록 격려하려고 노력했다.' },
        { en: 'My friends encouraged me to pursue my dream of becoming a professional musician.', ko: '내 친구들은 내가 전문 음악가가 되려는 꿈을 쫓도록 격려해 주었다.' },
      ],
    }
  ),
  word('Enormous', '거대한', 4, 'adjective',
    ['미세한', '작은', '조그마한', '미미한', '소형의', '소규모의', '적은', '보통의', '평범한', '사소한'],
    tips({
      etymology: '라틴어 \'e-(밖으로)\'와 \'norma(표준/규격)\'가 결합된 단어로, 일반적인 규격을 훌쩍 벗어날 정도로 크다는 의미에서 유래되었습니다.',
      visual: '축구장 한가운데에 아주 작은 탁구공 하나가 놓여 있고, 그 옆에 거대한 고래가 누워 있는 압도적인 크기 차이를 상상해 보세요.',
      soundAlike: '\'이놈(E-nor) 무스(mous)는 정말 크네!\'라고 외치며 거대한 뿔을 가진 무스(말코손바닥사슴)를 보고 놀라는 장면을 연상해 보세요.',
      context: '단순히 물리적인 크기가 큰 것뿐만 아니라, \'엄청난 영향력\'이나 \'막대한 비용\'처럼 추상적인 양이나 정도가 대단할 때도 자주 쓰입니다.',
      synonymAntonym: '거대함을 뜻하는 huge, gigantic과 비슷하며, 아주 작음을 뜻하는 tiny, minute와는 반대되는 개념입니다.',
    }),
    {
      definition: 'extraordinarily large in size, extent, or amount; far exceeding the common measure',
      synonyms: ['huge', 'gigantic', 'massive'],
      antonyms: ['tiny', 'small', 'minute'],
      exampleSentences: [
        { en: 'The project required an enormous amount of time and effort from the entire team.', ko: '그 프로젝트는 팀 전체의 엄청난 시간과 노력을 필요로 했다.' },
        { en: 'They live in an enormous house with ten bedrooms and a private swimming pool.', ko: '그들은 침실 10개와 개인 수영장이 딸린 거대한 집에 산다.' },
      ],
    }
  ),
  word('Ensure', '확보하다', 4, 'verb',
    ['불확실하다', '의심하다', '위험하다', '방치하다', '소홀히하다', '무시하다', '우연에맡기다', '나태하다', '불안해하다', '혼란스럽다'],
    tips({
      etymology: '접두사 en(~하게 만들다)과 sure(확실한)가 결합되어, 어떤 상황을 확실한 상태로 만든다는 뜻입니다.',
      visual: '비행기 이륙 전 승무원이 선반이 제대로 닫혔는지 하나하나 손으로 밀어보며 확인하는 장면을 떠올려 보세요.',
      soundAlike: '보험을 뜻하는 insurance(인슈어런스)와 발음이 유사합니다. 보험이 미래를 \'보장\'하듯 이 단어도 결과를 \'확실히\' 합니다.',
      context: '주로 안전 수칙을 지키거나, 업무의 성공을 보장하거나, 규칙이 준수되도록 조치를 취할 때 자주 쓰입니다.',
      synonymAntonym: 'guarantee와 유사하게 쓰이며, 반대로 위험에 빠뜨리는 endanger나 방치하는 neglect와 대조됩니다.',
    }),
    {
      definition: 'to make certain that a particular event, situation, or outcome will happen',
      synonyms: ['guarantee', 'assure', 'confirm'],
      antonyms: ['risk', 'endanger', 'neglect'],
      exampleSentences: [
        { en: 'The new law will help to ensure that all children receive a quality education.', ko: '새로운 법은 모든 아이들이 양질의 교육을 받는 것을 보장하는 데 도움이 될 것입니다.' },
        { en: 'Please check the document carefully to ensure there are no spelling mistakes.', ko: '철자 오류가 없는지 확인하기 위해 문서를 주의 깊게 검토해 주세요.' },
      ],
    }
  ),
  word('Entire', '전체의', 4, 'adjective',
    ['일부의', '부분적인', '절반의', '파편화된', '미미한', '제한된', '결핍된', '부족한', '사소한', '단편적인'],
    tips({
      etymology: '라틴어 \'integer\'에서 유래되었으며, 이는 \'손대지 않은\' 또는 \'완전한\'이라는 의미를 담고 있어 어떤 것도 빠지지 않은 상태를 나타냅니다.',
      visual: '피자 한 조각이 비어있는 것이 아니라, 상자 안에 꽉 차 있는 동그랗고 완벽한 피자 한 판 전체를 상상해 보세요.',
      soundAlike: '발음이 \'인타이어\'이므로, 자동차의 둥근 \'타이어(tire)\'가 끊김 없이 하나로 연결된 전체의 모습을 연상하면 쉽습니다.',
      context: '단순히 많다는 뜻을 넘어, 시간이나 공간, 범위 내에서 단 하나도 빠짐없이 모두 포함됨을 강조할 때 주로 사용합니다.',
      synonymAntonym: 'whole이나 complete와 비슷하게 쓰이며, 일부분만을 뜻하는 partial이나 미완성인 incomplete와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Including every part of something without any exceptions or omissions.',
      synonyms: ['whole', 'complete', 'total'],
      antonyms: ['partial', 'incomplete', 'limited'],
      exampleSentences: [
        { en: 'I spent the entire day cleaning my room.', ko: '나는 하루 종일 방을 청소하며 시간을 보냈다.' },
        { en: 'The entire team celebrated the victory together.', ko: '팀 전체가 함께 승리를 축하했다.' },
      ],
    }
  ),
  word('Environment', '환경', 4, 'noun',
    ['실내', '폐쇄', '격리', '고립', '단일', '단독', '인공', '가상', '추상', '내부'],
    tips({
      etymology: '프랑스어 \'environ(둘러싸다)\'에 명사형 접미사 \'-ment\'가 결합되어 우리를 둘러싸고 있는 모든 조건을 의미하게 되었습니다.',
      visual: '울창한 숲, 맑은 강물, 그리고 우리가 숨 쉬는 공기가 지구 전체를 감싸고 있는 모습을 떠올려 보세요.',
      soundAlike: '\'인바이런먼트\' - \'인바(안 봐도)\' 훤히 보이는 \'먼(먼)\' 산의 깨끗한 자연 상태.',
      context: '기후 변화, 플라스틱 오염 등 지구의 생태적 상태를 논할 때나 직장의 분위기를 설명할 때 주로 사용됩니다.',
      synonymAntonym: '주변 여건을 뜻하는 surroundings와 비슷하지만, 자연계를 뜻할 때는 ecosystem이 더 구체적인 동의어입니다.',
    }),
    {
      definition: 'the complex of physical, chemical, and biotic factors that act upon an organism or an ecological community and ultimately determine its form and survival',
      synonyms: ['surroundings', 'ecosystem', 'habitat'],
      antonyms: ['interior', 'isolation', 'vacuum'],
      exampleSentences: [
        { en: 'We must protect the environment for future generations.', ko: '우리는 미래 세대를 위해 환경을 보호해야 한다.' },
        { en: 'Children learn best in a supportive and safe environment.', ko: '아이들은 지지적이고 안전한 환경에서 가장 잘 배운다.' },
      ],
    }
  ),
  word('Equal', '동등한', 4, 'adjective',
    ['불균형', '차이', '우열', '상이', '비대칭', '불편', '편차', '격차', '차등', '차별'],
    tips({
      etymology: '라틴어 aequalis에서 유래했으며, \'평평하다\' 또는 \'수평이다\'라는 의미를 담고 있습니다.',
      visual: '수학의 등호 기호인 \'=\'나 수평을 완벽하게 유지하고 있는 양팔 저울의 모습을 상상해 보세요.',
      soundAlike: '이퀄 - \'이 퀄(리티)\'는 양쪽이 똑같아서 우열을 가릴 수 없네!',
      context: '법적 권리, 사회적 기회, 수학적 수치나 물리적 크기가 동일한 상태를 묘사할 때 씁니다.',
      synonymAntonym: '동의어 equivalent는 가치가 같음을, 반의어 unequal은 불균형함을 나타냅니다.',
    }),
    {
      definition: 'being the same in quantity, size, degree, or value as another person or thing',
      synonyms: ['identical', 'equivalent', 'uniform'],
      antonyms: ['different', 'uneven', 'disproportionate'],
      exampleSentences: [
        { en: 'All citizens should have an equal opportunity to succeed regardless of their background.', ko: '모든 시민은 배경에 상관없이 성공할 수 있는 동등한 기회를 가져야 한다.' },
        { en: 'The recipe requires you to mix the flour and water in equal proportions.', ko: '그 레시피는 밀가루와 물을 동등한 비율로 섞을 것을 요구한다.' },
      ],
    }
  ),
  word('Equipment', '장비', 4, 'noun',
    ['맨손', '무기', '기본', '간단', '수동', '인력', '자연', '원시', '도구 없음', '맨몸'],
    tips({
      etymology: '동사 equip(갖추다)에 명사형 접미사 -ment가 결합하여, 특정 목적을 위해 갖추어 놓은 물건들을 뜻합니다.',
      visual: '캠핑을 가기 위해 차 트렁크에 가득 실은 텐트, 버너, 코펠 등 각종 도구 세트를 상상하세요.',
      soundAlike: '이퀴프먼트 - \'이 귀(한) 물건(먼트)\'들은 아주 비싼 전문 장비들이야.',
      context: '헬스장 기구, 실험실 도구, 등산 용품 등을 통칭할 때 쓰이며, 개별 물건이 아닌 집합적인 개념입니다.',
      synonymAntonym: 'gear나 apparatus와 유사하며, 셀 수 없는 명사(불가산)이므로 단수 취급한다는 점에 주의하세요.',
    }),
    {
      definition: 'The necessary items, tools, or machines needed for a particular purpose or activity.',
      synonyms: ['gear', 'apparatus', 'tackle'],
      antonyms: ['hand', 'material', 'component'],
      exampleSentences: [
        { en: 'The hikers carried heavy equipment for their mountain trip.', ko: '등산객들은 산행을 위해 무거운 장비를 운반했다.' },
        { en: 'The gym is filled with modern exercise equipment.', ko: '그 체육관은 최신 운동 장비로 가득 차 있다.' },
      ],
    }
  ),
  word('Escape', '탈출하다', 4, 'verb',
    ['갇히다', '들어가다', '포획되다', '붙잡히다', '침입하다', '진입하다', '복귀하다', '돌아오다', '유지하다', '머무르다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 cappa(망토)가 합쳐진 단어로, 누군가 망토를 붙잡았을 때 망토를 벗어 던지고 몸만 빠져나가는 모습에서 유래되었습니다.',
      visual: '영화 속 주인공이 쇠창살을 뚫고 어두운 감옥 밖으로 달려나가는 긴박한 장면을 상상해 보세요.',
      soundAlike: '컴퓨터 키보드 맨 왼쪽 상단에 있는 ESC 키를 떠올려 보세요. 현재 실행 중인 프로그램에서 \'빠져나올\' 때 사용합니다.',
      context: '단순히 장소를 벗어나는 것뿐만 아니라, 지루한 현실이나 끔찍한 사고, 혹은 가스 누출 같은 위험 상황에서 벗어날 때도 자주 쓰입니다.',
      synonymAntonym: 'flee는 급히 도망치는 느낌이고, 반대말인 capture는 꼼짝 못 하게 붙잡는다는 뜻입니다.',
    }),
    {
      definition: 'to get away from a place where one has been kept as a prisoner or in a confined space',
      synonyms: ['flee', 'abscond', 'evade'],
      antonyms: ['remain', 'stay', 'confront'],
      exampleSentences: [
        { en: 'The prisoner managed to escape from his cell during the night.', ko: '그 수감자는 밤사이에 감방에서 탈출하는 데 성공했다.' },
        { en: 'They went to the mountains to escape the heat of the city.', ko: '그들은 도시의 열기를 피해 산으로 떠났다.' },
      ],
    }
  ),
  word('Essential', '필수적인', 4, 'adjective',
    ['불필요한', '선택적인', '부수적인', '사소한', '과잉의', '임의의', '부가적인', '지엽적인', '가변적인', '무관한'],
    tips({
      etymology: '라틴어 \'esse(존재하다)\'에서 유래한 \'essence(본질)\'의 형용사형으로, 존재 자체에 없어서는 안 될 핵심을 의미합니다.',
      visual: '퍼즐의 마지막 한 조각이나 자동차의 엔진처럼 그것 없이는 전체가 작동하지 않는 핵심 부품을 떠올려 보세요.',
      soundAlike: '화장품 \'에센스(Essence)\'를 생각하세요. 피부 영양에 가장 핵심적이고 농축된 성분을 담은 필수 단계입니다.',
      context: '단순히 필요한 수준을 넘어, 생존이나 성공, 기능 발휘를 위해 절대적으로 요구되는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'necessary보다 강도가 높으며, 반대말인 optional은 있어도 되고 없어도 되는 선택 사항을 뜻합니다.',
    }),
    {
      definition: 'absolutely necessary or extremely important for a particular activity or situation',
      synonyms: ['vital', 'crucial', 'indispensable'],
      antonyms: ['optional', 'secondary', 'superfluous'],
      exampleSentences: [
        { en: 'Water is essential for all living organisms to survive.', ko: '물은 모든 생명체가 생존하는 데 필수적이다.' },
        { en: 'Good communication is essential for a successful marriage.', ko: '원활한 소통은 성공적인 결혼 생활에 필수적이다.' },
      ],
    }
  ),
  word('Establish', '설립하다', 4, 'verb',
    ['해체하다', '폐쇄하다', '무너뜨리다', '해산하다', '종료하다', '폐지하다', '무효화하다', '취소하다', '제거하다', '파괴하다'],
    tips({
      etymology: '안정된 상태를 뜻하는 \'stable\'과 어원이 같습니다. 어떤 대상을 흔들리지 않게 고정하여 세운다는 의미에서 유래했습니다.',
      visual: '빈 땅에 단단한 콘크리트 기초를 타설하고 그 위에 튼튼한 건물의 뼈대를 올리는 장면을 상상해 보세요.',
      soundAlike: '이(E) 장소에 스탠드(sta)를 세우고 불을 \'블리시(blish)\'하며 화려하게 개업식을 하는 모습을 떠올려 보세요.',
      context: '단순히 물건을 만드는 것이 아니라, 기업, 법률, 질서, 혹은 인간관계처럼 체계적인 시스템을 시작할 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 처음 세우는 found와 비슷하며, 이미 세워진 것을 완전히 없애버리는 demolish와는 반대됩니다.',
    }),
    {
      definition: 'To set up an organization, system, or set of rules on a firm or permanent basis.',
      synonyms: ['found', 'institute', 'constitute'],
      antonyms: ['abolish', 'demolish', 'destroy'],
      exampleSentences: [
        { en: 'The committee was established to help the local community create new safety guidelines.', ko: '위원회는 지역 사회가 새로운 안전 지침을 수립하는 것을 돕기 위해 설립되었다.' },
        { en: 'It takes many years of hard work to establish a reputation as a reliable professional.', ko: '신뢰할 수 있는 전문가로서의 명성을 확립하는 데는 수년간의 노력이 필요하다.' },
      ],
    }
  ),
  word('Estimate', '추정하다', 4, 'verb',
    ['확정하다', '입증하다', '무시하다', '실측하다', '단정하다', '검증하다', '정확히측정하다', '확인하다', '부인하다', '결정하다'],
    tips({
      etymology: '라틴어 aestimare에서 유래되었으며, 이는 물건의 가치(value)를 매기거나 평가한다는 의미를 담고 있습니다.',
      visual: '건축가가 공사를 시작하기 전, 설계도를 보며 전체 비용이 얼마나 들지 머릿속으로 주판을 튀기는 모습을 상상해 보세요.',
      soundAlike: '에스티메이트(Estimate) -> \'S(에스)급 T(티)가 나는 메이트(친구)\'가 대략적인 견적을 뽑아주는 상황.',
      context: '비즈니스 상황에서 예산이나 공사 기간을 \'견적 내다\'라고 할 때 가장 흔히 사용되는 단어입니다.',
      synonymAntonym: '단순한 추측인 guess보다 데이터에 기반한 느낌이며, 실제 값을 재는 measure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to form an approximate opinion or judgment about the size, amount, or cost of something based on available information',
      synonyms: ['approximate', 'gauge', 'evaluate'],
      antonyms: ['calculate', 'measure', 'ascertain'],
      exampleSentences: [
        { en: 'They estimate that thousands of people will attend, but it is difficult to know the exact number.', ko: '그들은 수천 명이 참석할 것으로 추정하지만, 정확한 숫자를 알기는 어렵다.' },
        { en: 'It is necessary to estimate the potential risks before starting the new project.', ko: '새로운 프로젝트를 시작하기 전에 잠재적인 위험 요소를 추정해 보는 것이 필요하다.' },
      ],
    }
  ),
  word('Evaluate', '평가하다', 4, 'verb',
    ['무시하다', '방치하다', '생략하다', '회피하다', '거절하다', '보류하다', '간과하다', '포기하다', '방관하다', '누락하다'],
    tips({
      etymology: 'e(밖으로)와 value(가치)가 결합된 단어로, 대상이 가진 가치를 밖으로 끌어내어 확인한다는 의미에서 유래되었습니다.',
      visual: '심사위원이 점수판을 들고 선수의 동작 하나하나를 꼼꼼하게 체크하며 점수를 매기는 모습을 상상해 보세요.',
      soundAlike: '이밸류에이트 -> \'이 밸류(Value, 가치)가 에이트(8점)인가?\'라고 묻는 상황을 떠올리면 쉽습니다.',
      context: '비즈니스 성과 측정, 학교 성적 산출, 제품의 효율성 분석 등 전문적인 판단이 필요한 상황에서 주로 사용됩니다.',
      synonymAntonym: 'assess나 appraise는 가치를 측정하는 동의어이며, 반대로 제대로 살피지 않고 넘기는 것은 ignore나 overlook입니다.',
    }),
    {
      definition: 'To carefully judge or determine the quality, importance, amount, or value of something.',
      synonyms: ['assess', 'appraise', 'estimate'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The committee will evaluate the performance of each employee before the promotion.', ko: '위원회는 승진 전에 각 직원의 성과를 평가할 것이다.' },
        { en: 'It is difficult to evaluate the effectiveness of the new policy in such a short time.', ko: '그렇게 짧은 시간 안에 새로운 정책의 효과를 평가하기는 어렵다.' },
      ],
    }
  ),
  word('Eventual', '최종적인', 4, 'adjective',
    ['초기', '당장', '즉시', '임시', '과도기', '중간', '일시적', '보류', '미정', '불확실'],
    tips({
      etymology: '사건을 뜻하는 event에 형용사 접미사 -ual이 결합하여, 여러 사건들이 다 일어난 뒤에 오는 상태를 뜻하게 되었습니다.',
      visual: '도미노 수천 개가 차례대로 쓰러진 후, 마지막 조각이 마침내 바닥에 닿는 장면을 떠올려 보세요.',
      soundAlike: '부사 형태인 \'이벤츄얼리(Eventually, 결국)\'와 짝을 지어 \'최종적인 상태\'를 나타내는 형용사로 기억하세요.',
      context: '단순한 끝이 아니라, 우여곡절이나 긴 시간의 흐름을 거친 뒤에 도달하게 되는 결론적 상황에 사용합니다.',
      synonymAntonym: '마지막을 뜻하는 final과 유의어이며, 즉각적인 반응을 뜻하는 immediate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'happening at the very end of a long series of events or a long period of time',
      synonyms: ['ultimate', 'final', 'concluding'],
      antonyms: ['immediate', 'initial', 'primary'],
      exampleSentences: [
        { en: 'Success is the eventual outcome of hard work.', ko: '성공은 노력의 최종적인 결과이다.' },
        { en: 'The eventual winner will receive a prize.', ko: '최종 우승자는 상을 받을 것이다.' },
      ],
    }
  ),
  word('Evidence', '증거', 4, 'noun',
    ['추측', '의심', '혐의', '미확인', '불문서', '구두', '모호', '애매', '낭설', '소문'],
    tips({
      etymology: '라틴어 \'evidere\'에서 유래하며, \'e(밖으로)\'와 \'videre(보다)\'가 결합되어 \'밖으로 명확히 드러나 보이는 것\'이라는 의미를 담고 있습니다.',
      visual: '범죄 현장에서 노란색 번호판이 세워진 단서들이나 돋보기를 들고 지문을 채취하는 수사관의 모습을 상상해 보세요.',
      soundAlike: '에비던스... \'애비(아빠)가 던진\' 열쇠 꾸러미가 결정적인 범행의 실마리가 되었다고 기억해 보세요.',
      context: '주로 법정에서 유무죄를 가릴 때나 과학적인 가설을 검증할 때 필요한 객관적인 근거 자료를 지칭할 때 사용됩니다.',
      synonymAntonym: 'proof는 확실한 증명을, data는 기초 자료를 뜻하며, 반대로 disproof는 반증, rebuttal은 반박을 의미합니다.',
    }),
    {
      definition: 'A collection of facts or signs indicating whether a belief or proposition is true or valid.',
      synonyms: ['proof', 'confirmation', 'data'],
      antonyms: ['disproof', 'contradiction', 'rebuttal'],
      exampleSentences: [
        { en: 'There is no evidence to support that claim.', ko: '그 주장을 뒷받침할 증거가 없다.' },
        { en: 'The police found evidence at the crime scene.', ko: '경찰은 범죄 현장에서 증거를 발견했다.' },
      ],
    }
  ),
  word('Evil', '악한', 4, 'adjective',
    ['선한', '착한', '정의로운', '도덕적인', '순수한', '자비로운', '친절한', '올바른', '훌륭한', '어진'],
    tips({
      etymology: '고대 영어 \'yfel\'에서 유래되었으며, 원래 \'범위를 벗어난\' 또는 \'도를 넘은\'이라는 의미에서 \'나쁜\'이라는 뜻으로 발전했습니다.',
      visual: '어두운 그림자 속에서 남을 해치기 위해 음흉한 미소를 짓고 있는 영화 속 악당의 표정을 상상해 보세요.',
      soundAlike: '\'입을(Evil)\' 벌려 남에게 상처를 주는 독설을 내뱉는 사악한 사람의 모습을 떠올리면 기억하기 쉽습니다.',
      context: '단순히 실수를 하거나 운이 나쁜 상태가 아니라, 의도적으로 타인에게 고통을 주려는 도덕적 타락을 강조할 때 주로 쓰입니다.',
      synonymAntonym: '사악한 마음을 뜻하는 wicked와 대조적으로, 도덕적으로 완벽함을 뜻하는 virtuous를 함께 기억하세요.',
    }),
    {
      definition: 'profoundly immoral, malevolent, or characterized by a desire to cause harm and suffering',
      synonyms: ['wicked', 'sinful', 'malicious'],
      antonyms: ['good', 'virtuous', 'holy'],
      exampleSentences: [
        { en: 'No one is born evil.', ko: '아무도 악하게 태어나지 않는다.' },
        { en: 'The villain had an evil plan to destroy the city.', ko: '그 악당은 도시를 파괴하려는 악한 계획을 가지고 있었다.' },
      ],
    }
  ),
  word('Exact', '정확한', 4, 'adjective',
    ['대략적인', '모호한', '부정확한', '왜곡된', '희미한', '불분명한', '틀린', '어림잡은', '추상적인', '엉성한'],
    tips({
      etymology: '라틴어 \'exactus\'에서 유래했으며, \'ex(밖으로)\'와 \'agere(행하다/몰다)\'가 결합되어 \'철저하게 완성된\' 또는 \'정밀하게 다듬어진\' 상태를 의미합니다.',
      visual: '과녁의 정중앙인 \'불스아이\'에 화살이 한 치의 오차도 없이 꽂혀 있는 모습을 상상해 보세요.',
      soundAlike: '\'이그잭트\'를 \'이게 잭(Jack)트\'로 생각해서, 수많은 물건 중 \'이게 바로 잭의 것\'이라고 정확히 찾아내는 장면을 연상하세요.',
      context: '단순히 맞는 것을 넘어, 수치나 시간, 위치 등이 소수점 단위까지 빈틈없이 일치할 때 주로 쓰입니다.',
      synonymAntonym: 'precise, accurate와는 비슷한 의미를 공유하며, 대략적인 수치를 뜻하는 approximate나 모호한 vague와는 반대됩니다.',
    }),
    {
      definition: 'strictly correct in every detail and admitting no deviation from the truth or a standard',
      synonyms: ['precise', 'accurate', 'specific'],
      antonyms: ['approximate', 'vague', 'incorrect'],
      exampleSentences: [
        { en: 'Please give me the exact time so I can synchronize my watch.', ko: '시계를 맞출 수 있도록 정확한 시간을 알려 주세요.' },
        { en: 'I need the exact measurements of the room before buying the furniture.', ko: '가구를 사기 전에 방의 정확한 치수가 필요합니다.' },
      ],
    }
  ),
  word('Examine', '조사하다', 4, 'verb',
    ['무시하다', '지나치다', '넘기다', '추측하다', '오해하다', '생략하다', '회피하다', '방치하다', '간과하다', '망각하다'],
    tips({
      etymology: '라틴어 examinare에서 유래했으며, 원래 \'저울의 바늘\'을 의미하는 examen에서 나와 \'정확히 무게를 달아보며 살피다\'라는 뜻을 담고 있습니다.',
      visual: '돋보기를 든 탐정이 범죄 현장의 아주 작은 먼지 하나까지 꼼꼼하게 들여다보는 모습을 상상해 보세요.',
      soundAlike: '이그재민... \'이게 쟤(민)꺼니?\'라고 물으며 물건의 주인을 찾기 위해 꼼꼼히 조사하는 상황을 연상하세요.',
      context: '단순히 보는 것이 아니라, 숨겨진 결함이나 진실을 찾아내기 위해 분석적으로 파고들 때 주로 사용합니다.',
      synonymAntonym: '꼼꼼히 살피는 inspect와는 비슷하지만, 아무런 관심 없이 무시하는 ignore와는 정반대의 행동입니다.',
    }),
    {
      definition: 'to look at something in a careful way to learn more about it or find problems',
      synonyms: ['inspect', 'scrutinize', 'investigate'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The doctor will examine your throat to see what is wrong.', ko: '의사가 무엇이 문제인지 알아보기 위해 목 안을 진찰할 것이다.' },
        { en: 'Scientists must examine the data thoroughly before reaching a final conclusion.', ko: '과학자들은 최종 결론에 도달하기 전에 데이터를 철저히 조사해야 한다.' },
      ],
    }
  ),
  word('Exceed', '초과하다', 4, 'verb',
    ['미달하다', '부족하다', '미치지 못하다', '밑돌다', '모자라다', '감소하다', '축소하다', '제한하다', '억제하다', '유지하다'],
    tips({
      etymology: '접두사 ex(밖으로)와 어근 ceed(가다)가 결합되어, 정해진 경계나 선 밖으로 나아간다는 의미를 형성합니다.',
      visual: '속도계의 바늘이 빨간색 위험 수치를 뚫고 오른쪽 끝으로 넘어가는 장면을 상상해 보세요.',
      soundAlike: '\'익시드\' 발음이 \'이익(익)이 시드(seed, 씨앗)보다 훨씬 크게 자라났다\'고 연상하면 쉽습니다.',
      context: '주로 법적 한도, 예산, 속도 제한, 혹은 사람들의 기대치를 뛰어넘는 상황에서 사용됩니다.',
      synonymAntonym: 'surpass는 실력이나 수치에서 앞설 때, transcend는 한계를 초월할 때 쓰이며, 반대로 기준에 못 미치면 fall short를 씁니다.',
    }),
    {
      definition: 'to be greater than a particular number or amount, or to go beyond a permitted boundary',
      synonyms: ['surpass', 'transcend', 'outdo'],
      antonyms: ['fail', 'fall short', 'trail'],
      exampleSentences: [
        { en: 'Drivers who exceed the speed limit will be fined heavily.', ko: '속도 제한을 초과하는 운전자들은 무거운 벌금을 물게 될 것입니다.' },
        { en: 'The final cost of the project must not exceed the original budget.', ko: '프로젝트의 최종 비용은 원래 예산을 초과해서는 안 됩니다.' },
      ],
    }
  ),
  word('Except', '~을 제외하고', 4, 'preposition',
    ['포함하여', '함께', '덧붙여', '더하여', '통째로', '전체', '모두', '일체', '전부', '총체'],
    tips({
      etymology: '라틴어 ex(밖으로)와 cept(잡다)가 결합되어, 전체 무리에서 특정 대상을 \'밖으로 따로 잡아 빼놓다\'는 의미를 형성합니다.',
      visual: '바구니에 가득 담긴 빨간 사과들 중 초록색 사과 하나만 바구니 옆으로 따로 빼놓은 모습을 상상해 보세요.',
      soundAlike: '익셉트... \'이게 세트(set)\'에서 빠진 예외적인 항목이라고 소리 내어 읽으며 연상해 보세요.',
      context: '전체 범위를 먼저 언급한 뒤, 그 범위에 속하지 않는 유일한 예외를 덧붙일 때 주로 사용하는 전치사입니다.',
      synonymAntonym: '동의어로는 excluding, barring, besides가 있으며, 반의어로는 including, plus, with가 자주 쓰입니다.',
    }),
    {
      definition: 'not including; other than the person or thing mentioned',
      synonyms: ['excluding', 'barring', 'besides'],
      antonyms: ['including', 'plus', 'with'],
      exampleSentences: [
        { en: 'Everyone attended the meeting except the manager.', ko: '매니저를 제외하고 모든 사람이 회의에 참석했습니다.' },
        { en: 'The museum is open every day except Monday.', ko: '그 박물관은 월요일을 제외하고 매일 개관합니다.' },
      ],
    }
  ),
  word('Exchange', '교환하다', 4, 'verb',
    ['유지하다', '보유하다', '독점하다', '고수하다', '고집하다', '고정하다', '거부하다', '정지하다', '정체하다', '보존하다'],
    tips({
      etymology: 'ex(밖으로)와 change(바꾸다)가 결합하여 \'서로의 것을 밖으로 내어 바꾸다\'는 의미를 가집니다.',
      visual: '두 사람이 서로의 명함을 양손으로 주고받거나 물건을 맞바꾸는 화살표 모양을 상상해 보세요.',
      soundAlike: '익스체인지... 공항 환전소(Money Exchange) 전광판에서 환율이 바뀌는 장면을 떠올려 보세요.',
      context: '물건뿐만 아니라 의견, 정보, 인사, 이메일 주소 등을 주고받을 때도 자주 사용되는 동사입니다.',
      synonymAntonym: 'swap이나 trade는 캐주얼하게 바꾸는 느낌이며, 반대로 keep이나 retain은 주지 않고 계속 가지는 것을 뜻합니다.',
    }),
    {
      definition: 'to give something to someone and receive something of the same kind or value from them',
      synonyms: ['swap', 'trade', 'interchange'],
      antonyms: ['keep', 'retain', 'withhold'],
      exampleSentences: [
        { en: 'The two countries decided to exchange ambassadors to improve their relationship.', ko: '두 나라는 관계 개선을 위해 대사를 교환하기로 결정했다.' },
        { en: 'I would like to exchange this shirt for a larger size.', ko: '이 셔츠를 더 큰 사이즈로 교환하고 싶습니다.' },
      ],
    }
  ),
  word('Excite', '흥분시키다', 4, 'verb',
    ['진정시키다', '지루하게 하다', '낙담시키다', '무관심하다', '억제하다', '차분해지다', '실망시키다', '우울하게 하다', '냉대하다', '방관하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 citare(움직이다)가 결합되어, 내면의 감정을 밖으로 강하게 끌어내어 움직이게 한다는 어원을 가집니다.',
      visual: '월드컵 경기장에서 우리 팀이 골을 넣는 순간, 관중석의 모든 사람들이 동시에 벌떡 일어나 환호하는 장면을 그려보세요.',
      soundAlike: '‘익사이트’는 스포츠 경기나 게임이 아주 재미있을 때 쓰는 ‘익사이팅(Exciting)’의 동사형으로 기억하면 쉽습니다.',
      context: '단순히 기쁜 상태를 넘어, 기대감이나 열정으로 인해 심장 박동이 빨라지고 에너지가 넘치는 상황에 주로 쓰입니다.',
      synonymAntonym: 'thrill이나 stimulate는 감정을 자극한다는 면에서 비슷하며, 반대로 bore나 calm은 감정을 가라앉히거나 무디게 만듭니다.',
    }),
    {
      definition: 'to arouse strong feelings of enthusiasm, eagerness, or intense emotional activity in someone',
      synonyms: ['thrill', 'stimulate', 'rouse'],
      antonyms: ['bore', 'calm', 'depress'],
      exampleSentences: [
        { en: 'The news about the surprise vacation plans will surely excite the children.', ko: '깜짝 휴가 계획에 대한 소식은 분명 아이들을 흥분시킬 것이다.' },
        { en: 'The upcoming world tour began to excite the young fans.', ko: '다가오는 월드 투어는 젊은 팬들을 흥분시키기 시작했다.' },
      ],
    }
  ),
  word('Excuse', '변명', 4, 'noun',
    ['사실', '인정', '솔직', '직설', '정직', '고백', '투명', '명료', '해명', '증명'],
    tips({
      etymology: 'ex(밖으로)와 causa(원인/소송)가 결합하여 책임의 원인에서 벗어나려 한다는 뜻에서 유래했습니다.',
      visual: '숙제를 안 가져온 학생이 선생님 앞에서 땀을 흘리며 엉뚱한 이유를 대는 장면을 상상해 보세요.',
      soundAlike: '실례를 구할 때 쓰는 \'익스큐즈 미\'와 발음이 같지만, 명사로 쓰일 때는 \'변명\'이라는 의미가 됩니다.',
      context: '자신의 실수나 잘못을 정당화하기 위해 내놓는 핑계나 구실을 말할 때 주로 사용됩니다.',
      synonymAntonym: 'justification은 정당화라는 뜻의 유사어이며, confession은 잘못을 인정하는 고백이라는 반대 의미를 가집니다.',
    }),
    {
      definition: 'a reason or explanation put forward to defend or justify a fault or offense',
      synonyms: ['apology', 'justification', 'plea'],
      antonyms: ['truth', 'confession', 'accusation'],
      exampleSentences: [
        { en: 'He always has a creative excuse for why his homework is late.', ko: '그는 숙제가 왜 늦었는지에 대해 항상 창의적인 변명을 한다.' },
        { en: 'There is no acceptable excuse for being so rude to the guests.', ko: '손님들에게 그렇게 무례하게 행동한 것에 대해서는 어떠한 용납될 만한 핑계도 없다.' },
      ],
    }
  ),
  word('Exercise', '운동', 4, 'noun',
    ['휴식', '안정', '정지', '비활동', '게으름', '나태', '침묵', '고요', '휴면', '방치'],
    tips({
      etymology: '라틴어 exercere에서 유래하여 \'가두어 둔 것을 풀어놓아 활동하게 하다\'는 의미를 담고 있습니다.',
      visual: '이른 아침 공원에서 조깅을 하거나 헬스장에서 바벨을 드는 활기찬 모습입니다.',
      soundAlike: '엑서사이즈 북(Exercise book)은 학교에서 연습이나 훈련을 위해 쓰는 공책을 말합니다.',
      context: '건강을 위한 신체 활동뿐만 아니라 권리 행사나 문제 풀이 연습에도 쓰입니다.',
      synonymAntonym: '동의어는 workout, practice, drill이며 반의어는 rest, inactivity, idleness입니다.',
    }),
    {
      definition: 'Physical activity that is performed to maintain or improve health and fitness.',
      synonyms: ['workout', 'practice', 'drill'],
      antonyms: ['rest', 'inactivity', 'idleness'],
      exampleSentences: [
        { en: 'Swimming is considered one of the best forms of exercise for the whole body.', ko: '수영은 전신을 위한 가장 좋은 형태의 운동 중 하나로 여겨진다.' },
        { en: 'You should try to get some exercise every day to stay healthy.', ko: '건강을 유지하기 위해 매일 어느 정도 운동을 하도록 노력해야 한다.' },
      ],
    }
  ),
  word('Exhibit', '전시하다', 4, 'verb',
    ['숨기다', '은닉하다', '정리하다', '제거하다', '봉인하다', '감추다', '덮다', '가리다', '포장하다', '밀봉하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 habere(가지다)가 결합된 단어로, 안에 가지고 있던 것을 밖으로 꺼내어 보여준다는 의미에서 유래했습니다.',
      visual: '박물관의 밝은 조명 아래 유리 진열장 안에 놓인 화려한 유물을 떠올려 보세요.',
      soundAlike: '유명한 래퍼 \'이그지빗(Xzibit)\'이나 전시회를 뜻하는 \'이그지비션(Exhibition)\'의 앞부분 발음과 유사합니다.',
      context: '미술관에 작품을 거는 상황뿐만 아니라, 환자가 특정 증상을 보이거나 사람이 감정을 드러낼 때도 자주 쓰입니다.',
      synonymAntonym: '보여주는 display와는 유의어 관계이며, 꽁꽁 숨기는 conceal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to present an object or a quality for others to see in a public space or through behavior',
      synonyms: ['display', 'show', 'reveal'],
      antonyms: ['hide', 'conceal', 'cover'],
      exampleSentences: [
        { en: 'The local gallery will exhibit the works of young artists next month.', ko: '지역 갤러리는 다음 달에 젊은 예술가들의 작품을 전시할 예정이다.' },
        { en: 'He did not exhibit any signs of fear during the dangerous rescue.', ko: '그는 위험한 구조 작업 동안 어떠한 두려움의 기색도 보이지 않았다.' },
      ],
    }
  ),
  word('Exist', '존재하다', 4, 'verb',
    ['없다', '소멸하다', '사라지다', '멸망하다', '소실되다', '부재하다', '공허하다', '무시하다', '비존재', '허무하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 sistere(서다)가 결합된 단어로, 세상 밖으로 나와 뚜렷하게 서 있는 모습을 나타냅니다.',
      visual: '텅 빈 공간에 점 하나가 찍히며 실체가 나타나는 장면을 상상해 보세요.',
      soundAlike: '출구를 뜻하는 exit와 발음이 비슷하지만, exist는 \'존재\' 그 자체를 의미합니다.',
      context: '단순히 있는 것뿐만 아니라, 생명체가 살아있거나 특정 현상이 실제로 나타날 때 주로 사용합니다.',
      synonymAntonym: '살아있음을 뜻하는 live와 유의어이며, 완전히 사라짐을 뜻하는 vanish와 반대됩니다.',
    }),
    {
      definition: 'to have actual being or to be real and found in the physical world',
      synonyms: ['be', 'live', 'survive'],
      antonyms: ['perish', 'die', 'vanish'],
      exampleSentences: [
        { en: 'Scientists are looking for evidence that life might exist on other planets.', ko: '과학자들은 다른 행성에 생명체가 존재할 수도 있다는 증거를 찾고 있다.' },
        { en: 'Many ancient traditions still exist in modern society today.', ko: '많은 고대 전통들이 오늘날 현대 사회에도 여전히 존재한다.' },
      ],
    }
  ),
  word('Expand', '확장하다', 4, 'verb',
    ['수축하다', '축소하다', '줄이다', '압축하다', '감소하다', '위축되다', '좁히다', '제한하다', '억제하다', '단축하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 pandere(펼치다)가 결합된 단어로, 안에서 밖으로 밀어내며 면적이나 부피를 넓게 펼친다는 어원을 가지고 있습니다.',
      visual: '풍선에 공기를 가득 불어넣어 사방으로 팽팽하게 커지는 모습이나, 접혀 있던 세계 지도를 책상 위에 활짝 펼치는 장면을 상상해 보세요.',
      soundAlike: '\'익스팬드\'의 \'팬(pan)\' 발음을 프라이팬처럼 넓은 판으로 연상하여, 좁았던 영역을 판판하고 넓게 펴는 동작으로 기억하면 쉽습니다.',
      context: '단순히 크기가 커지는 것뿐만 아니라 사업 영역을 넓히거나, 지식의 폭을 깊게 하거나, 금속이 열을 받아 부피가 늘어나는 상황에 두루 쓰입니다.',
      synonymAntonym: '동의어 grow, extend, enlarge는 모두 \'키우다\'는 느낌을 주며, 반의어 shrink, contract, narrow는 \'줄어들다\'는 의미를 전달합니다.',
    }),
    {
      definition: 'to increase in size, number, volume, or importance',
      synonyms: ['grow', 'extend', 'enlarge'],
      antonyms: ['shrink', 'contract', 'narrow'],
      exampleSentences: [
        { en: 'The small bakery decided to expand its business by opening a second shop.', ko: '그 작은 빵집은 두 번째 가게를 열어 사업을 확장하기로 결정했다.' },
        { en: 'Reading books is a great way to expand your vocabulary and knowledge.', ko: '독서는 어휘력과 지식을 확장하는 아주 좋은 방법이다.' },
      ],
    }
  ),
  word('Expect', '기대하다', 4, 'verb',
    ['실망하다', '의외', '놀라다', '예상 밖', '혼란', '불확실', '회의', '비관', '포기', '체념'],
    tips({
      etymology: 'ex(밖으로)와 spectare(보다)가 합쳐져 미래의 일을 밖으로 내다보며 기다린다는 뜻입니다.',
      visual: '창밖을 내다보며 멀리서 오고 있는 친구를 기다리는 모습입니다.',
      soundAlike: '익스펙트는 \'스펙터클(Spectacle)\'한 미래를 미리 내다보는 느낌으로 외우세요.',
      context: '어떤 일이 일어날 것이라고 믿거나 당연히 그렇게 되어야 한다고 생각할 때 씁니다.',
      synonymAntonym: '동의어는 anticipate, await, predict이며 반의어는 doubt, despair, surprise입니다.',
    }),
    {
      definition: 'to believe that something will happen or that someone will arrive',
      synonyms: ['anticipate', 'await', 'predict'],
      antonyms: ['doubt', 'despair', 'surprise'],
      exampleSentences: [
        { en: 'We did not expect such a large crowd to show up for the event.', ko: '우리는 그 행사에 그렇게 많은 군중이 나타날 것이라고는 예상하지 못했다.' },
        { en: 'Parents often expect their children to work hard at school.', ko: '부모들은 흔히 자녀들이 학교에서 열심히 공부하기를 기대한다.' },
      ],
    }
  ),
  word('Expense', '비용', 4, 'noun',
    ['수입', '이익', '절약', '절감', '무료', '공짜', '보너스', '이득', '수익', '저축'],
    tips({
      etymology: '라틴어 ex(밖으로)와 pendere(지불하다)가 결합된 단어로, 주머니 밖으로 돈이 나가는 것을 의미합니다.',
      visual: '가계부의 지출 항목 옆에 붙어 있는 길다란 영수증과 줄어드는 통장 잔고를 떠올려 보세요.',
      soundAlike: '형용사인 expensive(비싼)와 발음이 비슷하므로, 비싼 물건을 살 때 드는 \'돈\'을 연상하면 쉽습니다.',
      context: '비즈니스에서는 운영비나 출장비로, 일상에서는 생활비나 수리비 등 구체적인 지출 금액을 말할 때 쓰입니다.',
      synonymAntonym: 'cost나 expenditure와 비슷하게 쓰이며, 반대로 들어오는 돈인 income이나 profit과는 반대 개념입니다.',
    }),
    {
      definition: 'the amount of money that is needed to pay for or buy something',
      synonyms: ['cost', 'expenditure', 'outlay'],
      antonyms: ['income', 'profit', 'revenue'],
      exampleSentences: [
        { en: 'The expense of repairing the car was much higher than we expected.', ko: '차를 수리하는 비용이 우리가 예상했던 것보다 훨씬 더 많이 나왔다.' },
        { en: 'He traveled to Europe at his own expense to study art history.', ko: '그는 미술사를 공부하기 위해 자비로 유럽을 여행했다.' },
      ],
    }
  ),
  word('Experiment', '실험', 4, 'noun',
    ['이론', '추측', '가설', '상상', '공상', '추상', '실무', '현장', '일상', '경험'],
    tips({
      etymology: '라틴어 ex(밖으로)와 per(시도)가 합쳐져 \'밖으로 시도해 보다\'라는 의미에서 유래했습니다.',
      visual: '하얀 가운을 입은 과학자가 시험관에 용액을 섞으며 결과를 관찰하는 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'익스페리먼트\'로, 무언가를 \'경험(experience)\'하기 위해 거치는 \'실험\'이라고 기억하세요.',
      context: '과학 수업이나 연구실에서 새로운 사실을 증명하기 위해 수행하는 활동을 말합니다.',
      synonymAntonym: '유의어로는 test, trial, investigation이 있고, 반의어로는 theory, guess, assumption이 있습니다.',
    }),
    {
      definition: 'A scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact.',
      synonyms: ['test', 'trial', 'investigation'],
      antonyms: ['theory', 'guess', 'assumption'],
      exampleSentences: [
        { en: 'The researchers conducted an experiment to see how the new drug affects sleep patterns.', ko: '연구원들은 새로운 약이 수면 패턴에 어떤 영향을 미치는지 확인하기 위해 실험을 수행했다.' },
        { en: 'The chemistry teacher demonstrated a simple experiment during the afternoon lab session.', ko: '화학 선생님은 오후 실험 시간에 간단한 실험을 시연해 주셨다.' },
      ],
    }
  ),
  word('Expert', '전문가', 4, 'noun',
    ['초보자', '아마추어', '외인', '비전문가', '생초보', '입문자', '비숙련자', '견습생', '하수', '문외한'],
    tips({
      etymology: '라틴어 \'expertus\'에서 유래했으며, \'ex(밖으로)\'와 \'peritus(시도된/경험된)\'가 합쳐져 \'많은 시도를 통해 숙련된 상태\'를 의미합니다.',
      visual: '수많은 서류와 도구들 사이에서 막힘없이 문제를 해결하며 사람들에게 가르침을 주는 권위자의 모습을 떠올려 보세요.',
      soundAlike: '\'엑스퍼트\'라는 발음에서, 어떤 분야의 난제에 \'X\' 표시를 하며 정답을 콕 집어내는 \'특별한(Extra)\' 사람으로 기억하세요.',
      context: '단순히 잘하는 수준을 넘어, 법정 증언을 하거나 기술적 자문을 제공할 수 있는 고도의 숙련도를 가진 인물에게 주로 사용됩니다.',
      synonymAntonym: 'specialist는 특정 세부 분야에 특화된 사람을, professional은 직업적 숙련도를 강조하며, 반대로 novice는 이제 막 시작한 초보를 뜻합니다.',
    }),
    {
      definition: 'A person who has acquired extensive skill or knowledge in a specific field through experience or training.',
      synonyms: ['specialist', 'professional', 'master'],
      antonyms: ['amateur', 'beginner', 'novice'],
      exampleSentences: [
        { en: 'She is a leading expert in the field of renewable energy.', ko: '그녀는 재생 에너지 분야의 선도적인 전문가이다.' },
        { en: 'The company hired an outside expert to audit their financial records.', ko: '그 회사는 재무 기록을 감사하기 위해 외부 전문가를 고용했다.' },
      ],
    }
  ),
  word('Explain', '설명하다', 4, 'verb',
    ['혼란시키다', '오해시키다', '숨기다', '은폐하다', '모호하게하다', '생략하다', '무시하다', '축소하다', '왜곡하다', '방해하다'],
    tips({
      etymology: 'ex(밖으로)와 plain(평평한)이 합쳐져 \'복잡하게 꼬인 것을 평평하게 펼쳐서 보여주다\'라는 의미에서 유래되었습니다.',
      visual: '엉킨 실타래를 일직선으로 곧게 펴서 누구나 한눈에 알아볼 수 있게 만드는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'익스플레인\'인데, 상대방의 복잡한 머릿속을 \'플레인(plain, 평탄)\'하게 다져준다고 기억하세요.',
      context: '단순히 말하는 것을 넘어, 상대방이 원리나 이유를 충분히 이해하도록 상세히 기술할 때 사용합니다.',
      synonymAntonym: '명확하게 하는 clarify와는 유의어 관계이며, 상황을 흐리는 obscure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make something clear or easy to understand by describing it in more detail or giving relevant facts',
      synonyms: ['describe', 'clarify', 'illustrate'],
      antonyms: ['confuse', 'obscure', 'hide'],
      exampleSentences: [
        { en: 'Can you explain how this machine works?', ko: '이 기계가 어떻게 작동하는지 설명해 줄 수 있나요?' },
        { en: 'The teacher used a diagram to explain the process.', ko: '선생님은 그 과정을 설명하기 위해 도표를 사용했다.' },
      ],
    }
  ),
  word('Explode', '폭발하다', 4, 'verb',
    ['침묵', '조용히', '안정', '평온', '수축', '압축', '억제', '억압', '진정', '냉각'],
    tips({
      etymology: '라틴어 \'explodere\'에서 유래했으며, 원래 \'박수를 쳐서 배우를 무대 밖으로 몰아내다\'라는 뜻이 \'갑자기 튀어나오다\'로 변했습니다.',
      visual: '풍선에 공기를 너무 많이 넣어 펑 하고 사방으로 조각이 날아가는 장면을 떠올려 보세요.',
      soundAlike: '\'익스플로드\'에서 \'플로드\' 부분이 무언가 팍 하고 퍼져나가는 강한 파열음처럼 들립니다.',
      context: '물리적인 폭탄이나 화산뿐만 아니라, 화가 폭발하거나 인구가 급격히 늘어나는 상황에도 자주 쓰입니다.',
      synonymAntonym: '갑자기 터지는 burst와 유의어이며, 안으로 쪼그라드는 implode와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to burst or shatter violently and noisily as a result of rapid combustion or internal pressure',
      synonyms: ['burst', 'detonate', 'erupt'],
      antonyms: ['implode', 'collapse', 'shrink'],
      exampleSentences: [
        { en: 'The bomb could explode at any moment.', ko: '그 폭탄은 언제든 폭발할 수 있다.' },
        { en: 'Fireworks exploded in the night sky.', ko: '불꽃놀이가 밤하늘에서 터졌다.' },
      ],
    }
  ),
  word('Explore', '탐험하다', 4, 'verb',
    ['회피하다', '무시하다', '지나치다', '거절하다', '방치하다', '숨기다', '포기하다', '중단하다', '거부하다', '외면하다'],
    tips({
      etymology: 'ex(밖으로)와 plore(외치다)가 합쳐져 \'사냥꾼이 짐승을 쫓아 밖으로 외치며 다니다\'라는 의미에서 유래했습니다.',
      visual: '지도와 나침반을 들고 빽빽한 정글이나 낯선 도시를 구석구석 살피는 탐험가의 모습을 상상해 보세요.',
      soundAlike: '인터넷 브라우저인 \'익스플로러\'를 떠올리면 정보를 찾아 여기저기 돌아다니는 이미지를 쉽게 연결할 수 있습니다.',
      context: '물리적인 장소를 여행하는 것뿐만 아니라, 새로운 이론이나 해결책을 깊이 있게 조사하고 연구할 때도 자주 쓰입니다.',
      synonymAntonym: '조사하고 찾아내는 discover, investigate와 비슷하며, 관심을 두지 않는 ignore, neglect와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to travel through an unfamiliar area or investigate a subject in detail to learn new information',
      synonyms: ['investigate', 'examine', 'inspect'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The researchers want to explore Mars to search for signs of water.', ko: '연구원들은 물의 흔적을 찾기 위해 화성을 탐사하고 싶어 한다.' },
        { en: 'We spent the entire afternoon exploring the hidden alleys of the city.', ko: '우리는 오후 내내 도시의 숨겨진 골목들을 탐험하며 보냈다.' },
      ],
    }
  ),
  word('Export', '수출하다', 4, 'verb',
    ['수입하다', '들여오다', '보관하다', '저장하다', '축적하다', '보유하다', '유지하다', '보존하다', '소비하다', '구매하다'],
    tips({
      etymology: '접두사 ex(밖으로)와 port(항구/나르다)가 결합되어 \'항구 밖으로 물건을 실어 나르다\'라는 의미가 되었습니다.',
      visual: '거대한 컨테이너선에 국산 자동차나 가전제품이 가득 실려 먼 바다로 나가는 장면을 떠올려 보세요.',
      soundAlike: '\'익스포트\'에서 \'포트(Port)\'는 항구를 뜻하며, 밖을 뜻하는 \'익스\'와 합쳐져 항구 밖으로 나가는 이미지를 연상시킵니다.',
      context: '주로 국가 간의 무역 거래에서 자국의 상품, 기술, 서비스를 타국에 유료로 제공할 때 사용합니다.',
      synonymAntonym: '해외로 보낸다는 의미의 ship abroad와 유의어이며, 반대로 들여오는 import와는 정반대의 개념입니다.',
    }),
    {
      definition: 'To send products or services to a different nation in order to sell them there.',
      synonyms: ['ship abroad', 'sell overseas', 'transmit'],
      antonyms: ['import', 'bring in', 'buy locally'],
      exampleSentences: [
        { en: 'Korea exports cars to many countries.', ko: '한국은 많은 국가에 자동차를 수출한다.' },
        { en: 'The company exports software worldwide.', ko: '그 회사는 전 세계에 소프트웨어를 수출한다.' },
      ],
    }
  ),
  word('Expose', '노출하다', 4, 'verb',
    ['숨기다', '은닉하다', '덮다', '가리다', '보호하다', '차단하다', '밀봉하다', '봉인하다', '감추다', '은폐하다'],
    tips({
      etymology: '접두사 ex(밖으로)와 pose(두다)가 결합되어, 안에 숨겨져 있던 것을 밖으로 꺼내 놓는다는 어원을 가집니다.',
      visual: '무대 위의 막이 오르면서 조명 아래 숨겨져 있던 무대 장치가 환하게 드러나는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'익스포즈\'이므로, 카메라 앞에서 멋진 \'포즈\'를 취해 자신을 대중에게 \'드러낸다\'고 기억하세요.',
      context: '피부를 햇빛에 노출하는 신체적 상황뿐만 아니라, 비리나 비밀을 세상에 알리는 폭로의 상황에서도 자주 쓰입니다.',
      synonymAntonym: '무언가를 드러내는 reveal과 유의어이며, 반대로 덮어서 보이지 않게 하는 conceal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To leave something uncovered or unprotected, or to make a secret or hidden fact known to the public.',
      synonyms: ['reveal', 'uncover', 'disclose'],
      antonyms: ['hide', 'conceal', 'cover'],
      exampleSentences: [
        { en: 'The melting snow began to expose the ground underneath.', ko: '녹는 눈이 그 아래의 땅을 드러내기 시작했다.' },
        { en: 'The report was intended to expose the company\'s unethical practices.', ko: '그 보고서는 회사의 비윤리적인 관행을 폭로하기 위한 것이었다.' },
      ],
    }
  ),
  word('Express', '표현하다', 4, 'verb',
    ['숨기다', '억압하다', '삼가다', '참다', '묵살하다', '은폐하다', '가두다', '보류하다', '외면하다', '침묵하다'],
    tips({
      etymology: 'ex(밖으로)와 press(누르다)가 합쳐져 \'마음속에 있는 것을 밖으로 꾹 눌러 짜내다\'라는 뜻에서 유래했습니다.',
      visual: '치약 튜브를 꾹 눌러서 내용물을 밖으로 나오게 하듯, 내면의 생각을 밖으로 꺼내는 모습을 상상해 보세요.',
      soundAlike: '고속열차인 \'익스프레스\'처럼 자신의 의사를 상대방에게 막힘없이 전달하는 이미지를 떠올려 보세요.',
      context: '단순히 말하는 것뿐만 아니라 표정, 몸짓, 예술 작품을 통해 감정이나 의견을 드러낼 때 두루 쓰입니다.',
      synonymAntonym: '생각을 전달하는 convey와 대조적으로, 꾹 눌러 참는 suppress는 반대 상황에서 쓰입니다.',
    }),
    {
      definition: 'to communicate a thought or feeling through words, facial appearances, or actions',
      synonyms: ['convey', 'articulate', 'manifest'],
      antonyms: ['suppress', 'conceal', 'repress'],
      exampleSentences: [
        { en: 'He found it difficult to express his feelings in words.', ko: '그는 자신의 감정을 말로 표현하는 것이 어렵다는 것을 알게 되었다.' },
        { en: 'The artist used vibrant colors to express her inner joy.', ko: '그 예술가는 자신의 내면적인 기쁨을 표현하기 위해 강렬한 색채를 사용했다.' },
      ],
    }
  ),
  word('Extend', '연장하다', 4, 'verb',
    ['단축하다', '줄이다', '축소하다', '제한하다', '끊다', '종료하다', '단절하다', '중단하다', '회수하다', '되돌리다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 tendere(뻗다)가 결합되어, 범위를 밖으로 더 넓히거나 길게 늘린다는 의미를 가집니다.',
      visual: '접혀 있던 망원경을 끝까지 쭉 뽑아서 길이가 길어지는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 모니터 화면을 옆으로 넓히는 \'확장\' 모드를 뜻하는 \'익스텐드\' 설정을 떠올려 보세요.',
      context: '비자 만료일, 도서 대출 기간, 마감 기한처럼 정해진 시간을 뒤로 늦출 때 가장 많이 쓰입니다.',
      synonymAntonym: 'lengthen은 길이를, prolong은 시간을 늘릴 때 쓰이며, 반대로 줄일 때는 shorten을 씁니다.',
    }),
    {
      definition: 'to cause something to reach out or stretch to a greater distance or a later time',
      synonyms: ['lengthen', 'stretch', 'prolong'],
      antonyms: ['shorten', 'abbreviate', 'contract'],
      exampleSentences: [
        { en: 'Can we extend the deadline by one week?', ko: '마감 기한을 일주일만 연장할 수 있을까요?' },
        { en: 'The road extends for another five miles along the coast.', ko: '그 도로는 해안을 따라 5마일 더 뻗어 있습니다.' },
      ],
    }
  ),
  word('Extreme', '극단적인', 4, 'adjective',
    ['온건한', '절충적인', '중도의', '보통의', '평균의', '일반적인', '적당한', '균형잡힌', '절제된', '완화된'],
    tips({
      etymology: '라틴어 extremus에서 유래되었으며, \'가장 바깥쪽 끝\'이라는 의미를 담고 있습니다.',
      visual: '아주 높은 절벽 끝에 아슬아슬하게 서 있는 사람의 위태로운 모습을 상상해 보세요.',
      soundAlike: '익스트림 스포츠(Extreme Sports)처럼 한계에 도전하는 아주 위험하고 강렬한 이미지를 연상하세요.',
      context: '날씨가 견디기 힘들 정도로 춥거나 더울 때, 혹은 의견이 한쪽으로 치우쳤을 때 주로 쓰입니다.',
      synonymAntonym: '강도가 높은 intense와 유사하며, 중간 정도를 뜻하는 moderate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'reaching a high or the highest degree; very severe or intense in nature',
      synonyms: ['excessive', 'utmost', 'intense'],
      antonyms: ['moderate', 'mild', 'average'],
      exampleSentences: [
        { en: 'Extreme weather is becoming more common due to climate change.', ko: '기후 변화로 인해 극단적인 날씨가 더 흔해지고 있습니다.' },
        { en: 'They took extreme measures to solve the financial crisis.', ko: '그들은 재정 위기를 해결하기 위해 극단적인 조치를 취했습니다.' },
      ],
    }
  ),
  word('Fabric', '직물', 4, 'noun',
    ['금속', '플라스틱', '목재', '벽돌', '유리', '종이', '가죽', '콘크리트', '고무', '석재'],
    tips({
      etymology: '라틴어 fabrica에서 유래하여 \'무언가를 만드는 재료\' 또는 \'작업장\'이라는 뜻에서 시작되었습니다.',
      visual: '옷을 만들기 위해 동대문 시장에 롤 형태로 높게 쌓여 있는 알록달록한 천들을 상상해 보세요.',
      soundAlike: '빨래할 때 넣는 섬유유연제의 영어 명칭인 \'fabric softener\'를 떠올리면 기억하기 쉽습니다.',
      context: '단순한 옷감이라는 뜻 외에도 \'the fabric of society\'처럼 사회의 구조나 기틀을 비유할 때도 자주 쓰입니다.',
      synonymAntonym: 'cloth나 textile은 물리적인 천을 뜻하며, 반대 개념으로는 형체가 없는 추상적 근간인 void 등이 있습니다.',
    }),
    {
      definition: 'A flexible substance made by weaving, knitting, or pressing natural or synthetic fibers together.',
      synonyms: ['cloth', 'material', 'textile'],
      antonyms: ['void', 'nothingness', 'vacuum'],
      exampleSentences: [
        { en: 'This fabric is soft and durable, making it perfect for shirts.', ko: '이 직물은 부드럽고 내구성이 좋아 셔츠를 만들기에 완벽합니다.' },
        { en: 'She chose a beautiful silk fabric for her wedding dress.', ko: '그녀는 웨딩드레스를 위해 아름다운 실크 옷감을 골랐습니다.' },
      ],
    }
  ),
  word('Facility', '시설', 4, 'noun',
    ['야외', '자연', '광야', '황야', '공터', '빈터', '미개발지', '원시상태', '폐허', '오지'],
    tips({
      etymology: '어근 \'facil\'은 \'쉬운(easy)\'을 뜻하며, 여기에 명사형 접미사가 붙어 \'어떤 일을 쉽게 하도록 돕는 것\'이라는 의미가 되었습니다.',
      visual: '운동 기구가 가득한 체육관이나 최신 장비가 갖춰진 연구소 건물의 외관을 상상해 보세요.',
      soundAlike: '\'퍼실리티\'는 무언가를 \'퍼\'주듯이 편리함을 제공하는 \'시설\'이라고 기억하면 쉽습니다.',
      context: '주로 공공의 목적이나 특정 활동, 서비스 제공을 위해 지어진 건물, 설비, 장소를 지칭할 때 사용됩니다.',
      synonymAntonym: '편의를 제공하는 amenity와 유사하며, 진행을 방해하는 obstacle과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a building, structure, or area designed to serve a particular function or provide a specific service',
      synonyms: ['amenity', 'establishment', 'installation'],
      antonyms: ['obstacle', 'hindrance', 'difficulty'],
      exampleSentences: [
        { en: 'The hotel has excellent leisure facilities, including a pool.', ko: '그 호텔에는 수영장을 포함한 훌륭한 레저 시설이 있습니다.' },
        { en: 'The fitness facility is open 24 hours a day for members.', ko: '그 피트니스 시설은 회원들을 위해 하루 24시간 운영됩니다.' },
      ],
    }
  ),
  word('Factor', '요소', 4, 'noun',
    ['전체', '결과', '합계', '총체', '결론', '완성품', '단독', '무관함', '배제', '우연'],
    tips({
      etymology: '라틴어 \'facere(만들다)\'에서 유래하여, 어떤 결과를 \'만들어내는\' 원인이나 성분을 뜻합니다.',
      visual: '완성된 요리 속에 들어가는 각각의 재료들이나, 기계를 작동시키는 개별 톱니바퀴를 상상해 보세요.',
      soundAlike: '수학 시간에 배우는 \'인수\'도 영어로 factor입니다. 전체 숫자를 구성하는 작은 단위라는 점이 비슷하죠.',
      context: '성공의 비결이나 사고의 원인을 분석할 때, 그 영향력을 행사한 개별적인 항목들을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: 'element나 component는 구성 성분을, determinant는 결정적인 요인을 강조하며, 반대말로는 결과물인 result가 있습니다.',
    }),
    {
      definition: 'one of the elements contributing to a particular result or situation',
      synonyms: ['element', 'component', 'determinant'],
      antonyms: ['result', 'consequence', 'outcome'],
      exampleSentences: [
        { en: 'Time is an important factor to consider in this project.', ko: '시간은 이 프로젝트에서 고려해야 할 중요한 요소입니다.' },
        { en: 'Cost was a major factor in our decision to move.', ko: '비용은 우리가 이사를 결정하게 된 주요 요소였습니다.' },
      ],
    }
  ),
  word('Failure', '실패', 4, 'noun',
    ['성공', '달성', '성취', '승리', '완수', '성과', '업적', '합격', '영광', '번영'],
    tips({
      etymology: '동사 fail(실패하다)에 명사를 만드는 접미사 -ure가 결합하여 \'실패한 상태\'를 뜻하게 되었습니다.',
      visual: '공들여 쌓은 탑이 한순간에 무너져 내리거나, 작동하던 기계에서 연기가 나며 멈춘 모습을 떠올려 보세요.',
      soundAlike: '\'패일(fail)\'리어는 구덩이가 \'패일\' 정도로 깊은 좌절감을 주는 상황으로 기억하면 쉽습니다.',
      context: '단순히 시험 낙제뿐만 아니라, 심장마비(heart failure)나 기계 결함(engine failure)처럼 기능이 멈춘 상황에도 쓰입니다.',
      synonymAntonym: '유사한 단어로는 fiasco(대실패)가 있고, 반대말로는 success(성공)나 triumph(승리)가 자주 쓰입니다.',
    }),
    {
      definition: 'the state or condition of not meeting a desirable or intended objective or the act of ceasing to function properly',
      synonyms: ['defeat', 'fiasco', 'breakdown'],
      antonyms: ['success', 'triumph', 'achievement'],
      exampleSentences: [
        { en: 'Failure is often a necessary step toward success.', ko: '실패는 종종 성공을 향한 필수적인 단계입니다.' },
        { en: 'The project ended in failure due to a lack of funding.', ko: '그 프로젝트는 자금 부족으로 인해 실패로 끝났습니다.' },
      ],
    }
  ),
  word('Faith', '신뢰', 4, 'noun',
    ['의심', '불신', '회의', '냉소', '배신', '불충', '불성실', '의구심', '불신앙', '거부'],
    tips({
      etymology: '라틴어 fides에서 유래되었으며, 변치 않는 확신과 충실함을 의미합니다.',
      visual: '어두운 밤길에서 등불 하나에 의지해 앞사람을 따라가는 굳건한 모습을 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'Face\'와 연결해, 누군가의 얼굴을 보고 정직함을 믿는 상황을 떠올려 보세요.',
      context: '단순한 추측을 넘어, 상대방의 인격이나 능력에 대해 가지는 확고한 마음의 상태를 표현합니다.',
      synonymAntonym: 'Trust는 일반적인 믿음, Conviction은 강한 신념을 뜻하며, Doubt는 이를 흔드는 의심을 뜻합니다.',
    }),
    {
      definition: 'A strong feeling of trust, confidence, or reliance in a person, concept, or entity.',
      synonyms: ['trust', 'belief', 'conviction'],
      antonyms: ['doubt', 'disbelief', 'mistrust'],
      exampleSentences: [
        { en: 'I have full faith in your ability to lead the team.', ko: '나는 팀을 이끄는 당신의 능력을 전적으로 신뢰합니다.' },
        { en: 'She kept her faith even during the most difficult times.', ko: '그녀는 가장 힘든 시기에도 신념을 잃지 않았습니다.' },
      ],
    }
  ),
  word('Fame', '명성', 4, 'noun',
    ['무명', '익명', '망각', '침묵', '불명예', '평범', '무관심', '냉대', '은둔', '비하'],
    tips({
      etymology: '라틴어 fama에서 유래했으며, 사람들 사이에서 널리 퍼지는 \'소문\'이나 \'평판\'을 뜻했습니다.',
      visual: '수많은 카메라 플래시 세례를 받으며 레드카펫 위를 당당하게 걷는 스타의 모습을 떠올려 보세요.',
      soundAlike: '유명하다는 뜻의 형용사 famous의 명사형입니다. \'페임\'이라는 발음이 \'이름(name)\'과 비슷하게 들리기도 하죠.',
      context: '단순히 아는 사람이 많은 상태를 넘어, 대중적인 인기나 사회적 인지도를 뜻할 때 주로 쓰입니다.',
      synonymAntonym: 'renown, celebrity와 비슷하며, 반대로 세상에 알려지지 않은 상태는 obscurity라고 합니다.',
    }),
    {
      definition: 'the state of being widely known, recognized, or talked about by many people, especially for notable achievements',
      synonyms: ['renown', 'celebrity', 'reputation'],
      antonyms: ['obscurity', 'anonymity', 'insignificance'],
      exampleSentences: [
        { en: 'The young actor achieved international fame overnight.', ko: '그 젊은 배우는 하룻밤 사이에 국제적인 명성을 얻었습니다.' },
        { en: 'Fame and fortune do not always lead to a happy life.', ko: '명성과 부가 항상 행복한 삶으로 이어지는 것은 아닙니다.' },
      ],
    }
  ),
  word('Familiar', '익숙한', 4, 'adjective',
    ['낯선', '이상한', '미지의', '애매한', '모호한', '신비로운', '긴장되는', '불편한', '어색한', '수줍은'],
    tips({
      etymology: '가족을 뜻하는 family와 어원이 같아 가족처럼 가깝고 잘 안다는 의미에서 유래했습니다.',
      visual: '매일 걷는 집 앞 골목길처럼 눈에 익은 풍경을 떠올려 보세요.',
      soundAlike: '퍼밀리어: \'퍼지게 밀려\'오는 익숙한 느낌으로 기억하세요.',
      context: '오랜만에 고향에 돌아왔을 때 느끼는 감정을 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'known과 비슷하며, 반대말은 낯설다는 뜻의 strange나 unknown입니다.',
    }),
    {
      definition: 'easily recognized because of being seen, met, or heard before',
      synonyms: ['known', 'accustomed', 'recognizable'],
      antonyms: ['unfamiliar', 'strange', 'unknown'],
      exampleSentences: [
        { en: 'The melody sounded familiar, but I couldn\'t remember the lyrics.', ko: '그 멜로디가 익숙하게 들렸지만 가사가 기억나지 않았다.' },
        { en: 'I am not very familiar with this computer software yet.', ko: '나는 아직 이 컴퓨터 소프트웨어에 익숙하지 않다.' },
      ],
    }
  ),
  word('Fantasy', '환상', 4, 'noun',
    ['현실', '사실', '실제', '진실', '확실', '일상', '보통', '실용', '논리', '증거'],
    tips({
      etymology: '그리스어 phantasia에서 유래되었으며, \'눈앞에 나타나게 하는 것\' 즉 마음속으로 그려내는 상상을 의미합니다.',
      visual: '마법사, 거대한 용, 구름 위에 떠 있는 성이 그려진 소설책 표지를 떠올려 보세요.',
      soundAlike: '판타지: \'판\'을 크게 벌려 \'타\'인과는 다른 기발한 \'지\'식을 상상으로 펼치는 장르라고 외워보세요.',
      context: '현실의 물리 법칙을 벗어나 초자연적인 힘이나 마법이 존재하는 가상의 세계관을 다룰 때 주로 쓰입니다.',
      synonymAntonym: 'imagination과 비슷하게 쓰이지만 더 비현실적인 느낌이며, 반대말은 실제를 뜻하는 reality입니다.',
    }),
    {
      definition: 'the faculty or activity of imagining impossible or improbable things',
      synonyms: ['imagination', 'illusion', 'daydream'],
      antonyms: ['reality', 'actuality', 'fact'],
      exampleSentences: [
        { en: 'The movie is a dark fantasy set in a magical kingdom.', ko: '그 영화는 마법 왕국을 배경으로 한 어두운 판타지이다.' },
        { en: 'He stopped living in a fantasy world and faced the truth.', ko: '그는 환상의 세계에서 사는 것을 그만두고 진실을 직시했다.' },
      ],
    }
  ),
];
