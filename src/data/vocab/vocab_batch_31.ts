import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch31: VocabItem[] = [
  word('diary', '일기', 3, 'noun',
    ['소설', '교과서', '신문', '잡지', '편지', '보고서', '논문', '수필', '시집', '사전'],
    tips({
      etymology: '라틴어 \'dies(날)\'에서 유래하여 매일의 기록을 남기는 책을 뜻합니다.',
      visual: '침대 옆 스탠드 불빛 아래에서 자물쇠가 달린 비밀 노트를 쓰는 모습을 상상해 보세요.',
      soundAlike: '\'다이어리\'라고 흔히 부르는 외래어 발음과 동일하여 기억하기 쉽습니다.',
      context: '개인적인 감정이나 그날 있었던 특별한 사건을 기록할 때 주로 사용됩니다.',
      synonymAntonym: 'journal과 유사하지만, diary는 좀 더 개인적이고 사적인 기록의 성격이 강합니다.',
    }),
    {
      definition: 'A book in which you write down your personal experiences and thoughts each day.',
      synonyms: ['journal', 'log', 'chronicle'],
      antonyms: ['fiction', 'fantasy', 'improvisation'],
      exampleSentences: [
        { en: 'She keeps a private record of her daily life in a leather-bound notebook.', ko: '그녀는 가죽 표지로 된 공책에 자신의 일상을 비밀스럽게 기록한다.' },
        { en: 'I forgot to write about my trip in my personal log last night.', ko: '어젯밤에 개인 기록장에 여행에 대해 쓰는 것을 깜빡했다.' },
      ],
    }
  ),
  word('dictate', '받아쓰게 하다', 9, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '라틴어 \'dictare\'에서 유래했으며, \'말하다\'라는 뜻의 \'dic\'이 포함되어 있어 말로 지시하거나 받아쓰게 함을 의미합니다.',
      visual: '상사가 비서에게 중요한 내용을 말로 불러주고, 비서가 이를 열심히 수첩에 적는 모습을 상상해 보세요.',
      soundAlike: '\'딕테이션(dictation)\' 시험을 떠올려 보세요. 선생님이 불러주는 말을 그대로 받아적는 상황과 연결됩니다.',
      context: '단순히 글자를 받아쓰게 하는 것뿐만 아니라, 법이나 규칙을 강제로 따르게 명령할 때도 자주 쓰입니다.',
      synonymAntonym: '명령하는 prescribe와 반대로, 남의 말을 듣고 따르는 obey를 대조해서 기억하면 좋습니다.',
    }),
    {
      definition: 'to say or read something aloud so that it can be recorded by another person, or to state an order authoritatively',
      synonyms: ['prescribe', 'command', 'utter'],
      antonyms: ['obey', 'follow', 'request'],
      exampleSentences: [
        { en: 'The manager will read the report aloud and have his assistant record every word.', ko: '매니저는 보고서를 소리 내어 읽고 비서에게 모든 단어를 받아쓰게 할 것입니다.' },
        { en: 'Common sense should determine how you behave in this difficult situation.', ko: '이 어려운 상황에서 어떻게 행동해야 할지는 상식이 결정해야 합니다.' },
      ],
    }
  ),
  word('dictionary', '사전', 7, 'noun',
    ['소설', '일기', '교과서', '신문', '잡지', '편지', '백과사전', '수필', '시집', '논문'],
    tips({
      etymology: '라틴어 \'dictio(말하기)\'에서 유래하여, 말들을 모아놓은 책이라는 뜻입니다.',
      visual: '두꺼운 책장을 넘기며 모르는 단어의 뜻을 찾고 있는 학생의 모습을 상상해 보세요.',
      soundAlike: '\'딕셔너리\'에서 \'딕\'을 \'말하다\'라는 의미의 \'dict\'와 연결해 기억하면 쉽습니다.',
      context: '새로운 언어를 배울 때나 전문 용어를 이해해야 할 때 반드시 필요한 도구입니다.',
      synonymAntonym: '유사한 책으로는 lexicon이 있으며, 반대로 아무 정보가 없는 빈 책은 blank book이라 할 수 있습니다.',
    }),
    {
      definition: 'A reference resource containing an alphabetical list of words with their meanings, pronunciations, and functions.',
      synonyms: ['lexicon', 'glossary', 'wordbook'],
      antonyms: ['blankness', 'ignorance', 'omission'],
      exampleSentences: [
        { en: 'If you don\'t know the meaning of the word, look it up in the reference book.', ko: '그 단어의 뜻을 모른다면 사전에서 찾아보세요.' },
        { en: 'The teacher encouraged students to use a bilingual tool during the English class.', ko: '선생님은 영어 수업 시간에 학생들이 이개국어 사전을 사용하도록 권장했습니다.' },
      ],
    }
  ),
  word('die', '죽다', 1, 'verb',
    ['살다', '탄생하다', '되살아나다', '회복하다', '성장하다', '번성하다', '꽃피다', '건강해지다', '소생하다', '부활하다'],
    tips({
      etymology: '고대 노르웨이 어원 \'deyja\'에서 유래하여 생명 활동이 완전히 멈추는 것을 의미합니다.',
      visual: '시든 꽃이 바닥으로 툭 떨어지는 모습을 상상하며 생명이 다한 상태를 그려보세요.',
      soundAlike: '주사위를 뜻하는 \'dice\'의 단수형과 발음이 같으니, 운명이 다했다는 느낌으로 연결해 보세요.',
      context: '식물, 동물, 사람뿐만 아니라 기계가 멈추거나 불이 꺼질 때도 비유적으로 사용됩니다.',
      synonymAntonym: 'pass away는 죽음을 완곡하게 표현하며, live는 그 반대인 삶을 유지함을 뜻합니다.',
    }),
    {
      definition: 'to cease to be alive or to stop functioning completely',
      synonyms: ['perish', 'expire', 'pass away'],
      antonyms: ['live', 'survive', 'exist'],
      exampleSentences: [
        { en: 'Without enough water and sunlight, the small plants will quickly wither and die.', ko: '충분한 물과 햇빛이 없으면 작은 식물들은 금방 시들어 죽을 것이다.' },
        { en: 'The battery in my old phone is about to die after only an hour of use.', ko: '내 오래된 핸드폰 배터리가 사용한 지 한 시간 만에 곧 꺼지려 한다.' },
      ],
    }
  ),
  word('different', '다른', 2, 'adjective',
    ['같은', '동일한', '일치하는', '유사한', '비슷한', '동류의', '동일', '일치', '동등한', '닮은'],
    tips({
      etymology: '라틴어 \'differre\'에서 유래했으며, \'dis(따로)\'와 \'ferre(운반하다)\'가 합쳐져 서로 다른 방향으로 나뉘어 있다는 의미를 담고 있습니다.',
      visual: '사과 바구니 속에 혼자만 색깔이 다른 오렌지 하나가 섞여 있는 모습을 상상해 보세요.',
      soundAlike: '\'디퍼런트\'라고 발음할 때 \'뒤(di)가 퍼(fer)렇게 질린\' 친구는 다른 사람들과 확연히 구분된다고 연상해 보세요.',
      context: '취향, 외모, 생각 등이 타인과 일치하지 않고 구별될 때 주로 사용되는 형용사입니다.',
      synonymAntonym: '유의어인 distinct와 반의어인 identical을 함께 묶어서 \'뚜렷이 다른\' 것과 \'완전히 똑같은\' 것을 비교해 보세요.',
    }),
    {
      definition: 'not the same as another or each other; distinct in nature, form, or quality',
      synonyms: ['distinct', 'diverse', 'various'],
      antonyms: ['identical', 'similar', 'alike'],
      exampleSentences: [
        { en: 'The two brothers have very different personalities despite growing up together.', ko: '그 두 형제는 함께 자랐음에도 불구하고 성격이 매우 다르다.' },
        { en: 'I want to try a different approach to solve this complex math problem.', ko: '나는 이 복잡한 수학 문제를 풀기 위해 다른 접근 방식을 시도해보고 싶다.' },
      ],
    }
  ),
  word('difficult', '어려운', 3, 'adjective',
    ['쉬운', '간단한', '명확한', '편안한', '단순한', '수월한', '평범한', '익숙한', '기초적인', '명쾌한'],
    tips({
      etymology: '라틴어 \'dis-\'(부정)와 \'facilis\'(쉬운)가 결합하여 \'쉽지 않은\'이라는 의미에서 유래되었습니다.',
      visual: '복잡하게 얽힌 실타래를 풀려고 땀을 흘리며 끙끙대고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'디피컬트\' 발음이 \'뒤 피 걸려\'와 비슷하게 들리니, 뒤에 피가 걸릴 정도로 힘든 상황을 연상하세요.',
      context: '수학 문제나 복잡한 기계 수리처럼 지적, 육체적 노력이 많이 필요한 상황에 주로 쓰입니다.',
      synonymAntonym: 'hard와 동의어이며, 반대말인 easy와 대조하여 기억하면 훨씬 효율적입니다.',
    }),
    {
      definition: 'needing much effort, skill, or thought to possess, finish, or understand',
      synonyms: ['challenging', 'arduous', 'demanding'],
      antonyms: ['easy', 'simple', 'effortless'],
      exampleSentences: [
        { en: 'The final exam was so hard that many students could not finish it on time.', ko: '기말고사가 너무 어려워서 많은 학생들이 제시간에 끝내지 못했습니다.' },
        { en: 'It is often hard to make a big decision without enough information.', ko: '충분한 정보 없이 큰 결정을 내리는 것은 종종 어렵습니다.' },
      ],
    }
  ),
  word('dimension', '차원', 10, 'noun',
    ['무차원', '평면', '부피', '질량', '밀도', '속도', '가속도', '에너지', '온도', '압력'],
    tips({
      etymology: '라틴어 \'dimetiri(측정하다)\'에서 유래하여, 공간의 크기를 재는 척도를 의미합니다.',
      visual: '3D 안경을 쓰고 영화 속 입체적인 공간이 눈앞에 펼쳐지는 장면을 상상해 보세요.',
      soundAlike: '디멘션 -> \'뒤면(뒷면) 선\'까지 다 보이는 입체적인 차원이라고 기억하세요.',
      context: '수학이나 물리뿐만 아니라 \'새로운 국면\'이나 \'측면\'을 강조할 때도 자주 쓰입니다.',
      synonymAntonym: '측면을 뜻하는 aspect와 유사하며, 크기가 없는 지점인 point와 대비됩니다.',
    }),
    {
      definition: 'a measurable extent of some kind, such as length, breadth, depth, or height',
      synonyms: ['measurement', 'proportion', 'aspect'],
      antonyms: ['insignificance', 'flatness', 'nothingness'],
      exampleSentences: [
        { en: 'The designers added a new spatial aspect to give the room an extra sense of depth.', ko: '디자이너들은 방에 추가적인 깊이감을 주기 위해 새로운 공간적 차원을 더했습니다.' },
        { en: 'We must consider every aspect of the problem to find a complete solution.', ko: '완전한 해결책을 찾기 위해서는 그 문제의 모든 측면을 고려해야 합니다.' },
      ],
    }
  ),
  word('dine', '식사하다', 8, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'dis-\'(해소하다)와 \'ieiunare\'(단식하다)가 합쳐져 단식을 끝내고 음식을 먹는다는 의미에서 유래했습니다.',
      visual: '고급 레스토랑에서 턱시도를 입은 웨이터가 정중하게 요리를 서빙하는 우아한 저녁 식사 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'다인\'과 비슷하므로, \'다(모든) 인(사람)\'들이 모여 즐겁게 식사하는 모습을 연상하면 쉽습니다.',
      context: '단순히 음식을 먹는 eat보다 더 격식 있고 정중한 분위기에서 식사할 때 주로 사용되는 표현입니다.',
      synonymAntonym: 'feast(연회를 베풀다)와 유사하며, 반대로 굶주리는 starve와는 대조적인 풍요로운 식사 상태를 나타냅니다.',
    }),
    {
      definition: 'to eat a meal, especially the main meal of the day in a formal or elegant setting',
      synonyms: ['feast', 'banquet', 'sup'],
      antonyms: ['fast', 'starve', 'abstain'],
      exampleSentences: [
        { en: 'The couple decided to celebrate their anniversary and dine at the finest restaurant in the city.', ko: '그 커플은 기념일을 축하하기 위해 도시에서 가장 좋은 레스토랑에서 식사하기로 결정했습니다.' },
        { en: 'We had the privilege to dine with the ambassador during his official visit to the capital.', ko: '우리는 대사가 수도를 공식 방문하는 동안 그와 함께 식사하는 영광을 누렸습니다.' },
      ],
    }
  ),
  word('dinner', '저녁 식사', 1, 'noun',
    ['아침 식사', '점심 식사', '간식', '야식', '디저트', '전채 요리', '후식', '다과', '브런치', '단식'],
    tips({
      etymology: '라틴어 \'dis-\' (해소하다)와 \'jejunare\' (단식하다)에서 유래하여, 하루 중 가장 중요한 식사를 의미하게 되었습니다.',
      visual: '가족들이 둥근 식탁에 둘러앉아 김이 모락모락 나는 따뜻한 음식을 먹는 저녁 풍경을 상상해 보세요.',
      soundAlike: '발음이 \'디너\'와 비슷하므로, 고급 레스토랑의 \'디너 코스\'를 떠올리면 기억하기 쉽습니다.',
      context: '주로 저녁에 먹는 가장 비중 있는 식사를 뜻하며, 공식적인 연찬회나 정찬을 의미하기도 합니다.',
      synonymAntonym: 'supper는 가벼운 저녁을 뜻하며, breakfast와 lunch는 각각 아침과 점심을 뜻하는 반대 개념입니다.',
    }),
    {
      definition: 'the main meal of the day, typically eaten in the evening',
      synonyms: ['supper', 'feast', 'banquet'],
      antonyms: ['breakfast', 'lunch', 'snack'],
      exampleSentences: [
        { en: 'We usually have a large family gathering for Sunday evening.', ko: '우리는 보통 일요일 저녁에 대가족 모임을 가집니다.' },
        { en: 'Would you like to join us for a formal meal at the restaurant tonight?', ko: '오늘 밤 레스토랑에서 저희와 함께 정찬을 하시겠어요?' },
      ],
    }
  ),
  word('dip', '담그다', 4, 'verb',
    ['꺼내다', '말리다', '닦다', '건조시키다', '뿌리다', '빼다', '올리다', '적시지 않다', '말려 두다', '털어내다'],
    tips({
      etymology: '고대 영어 \'dyppan\'에서 유래하여 액체 속에 깊이 넣는다는 동작을 의미합니다.',
      visual: '나초 칩을 소스 그릇에 살짝 담갔다가 빼는 맛있는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'딥\'이므로, 깊은(deep) 곳에 살짝 넣는다고 연상하면 쉽습니다.',
      context: '음식을 소스에 찍어 먹거나, 붓을 잉크에 살짝 적실 때 주로 사용합니다.',
      synonymAntonym: '완전히 잠기게 하는 immerse와 반대로, 밖으로 꺼내는 lift를 함께 기억하세요.',
    }),
    {
      definition: 'to put something quickly into a liquid and take it out again',
      synonyms: ['immerse', 'dunk', 'soak'],
      antonyms: ['lift', 'dry', 'elevate'],
      exampleSentences: [
        { en: 'She decided to dip her toe into the cold swimming pool to check the temperature.', ko: '그녀는 온도를 확인하기 위해 차가운 수영장에 발가락을 살짝 담가보기로 했다.' },
        { en: 'Please dip the crust of your bread into the soup before you eat it.', ko: '빵 껍질을 먹기 전에 수프에 살짝 찍어서 드세요.' },
      ],
    }
  ),
  word('diplomat', '외교관', 5, 'noun',
    ['군인', '상인', '기자', '교사', '의사', '농부', '운전사', '예술가', '운동선수', '정치인'],
    tips({
      etymology: '그리스어 \'diploma\'에서 유래했으며, 이는 \'접힌 서류\'를 뜻합니다. 국가 간의 공식 문서를 다루는 사람에서 시작되었습니다.',
      visual: '국제 회의장에서 양복을 입고 여러 나라의 국기 앞에서 악수하며 협상하는 사람을 상상해 보세요.',
      soundAlike: '발음이 \'디플로맷\'과 비슷하므로, \'뒤로(di) 풀로(plo) 맺(mat)는\' 사람, 즉 뒤에서 관계를 잘 맺어주는 사람으로 기억하세요.',
      context: '국가 간의 갈등을 해결하거나 조약을 체결할 때 가장 중요한 역할을 수행하는 전문직입니다.',
      synonymAntonym: '대사(ambassador)나 사절(envoy)과 비슷한 의미이며, 갈등을 조장하는 선동가(agitator)와는 반대되는 성격을 가집니다.',
    }),
    {
      definition: 'An official representing a country abroad, skilled in maintaining sensitive international relations and negotiations.',
      synonyms: ['ambassador', 'envoy', 'emissary'],
      antonyms: ['agitator', 'provocateur', 'insurgent'],
      exampleSentences: [
        { en: 'The experienced official acted as a mediator between the two warring nations.', ko: '경험 많은 그 외교관은 전쟁 중인 두 나라 사이에서 중재자 역할을 했습니다.' },
        { en: 'She dreams of becoming a representative for her country at the United Nations.', ko: '그녀는 유엔에서 자기 나라를 대표하는 외교관이 되기를 꿈꿉니다.' },
      ],
    }
  ),
  word('dirty', '더러운', 2, 'adjective',
    ['깨끗한', '맑은', '청결한', '순수한', '정갈한', '위생적인', '결백한', '투명한', '단정한', '깔끔한'],
    tips({
      etymology: '흙이나 먼지를 뜻하는 명사 dirt에 형용사형 접미사 -y가 붙어 만들어진 단어입니다.',
      visual: '진흙탕에서 신나게 놀고 난 뒤 엉망이 된 옷과 신발의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'더티\'와 비슷하므로 \'더\'러운 \'티\'가 난다고 연상하면 기억하기 쉽습니다.',
      context: '위생 상태가 좋지 않거나 도덕적으로 비열한 행동을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '깨끗한 상태를 뜻하는 clean과 반대되는 개념으로 묶어서 기억하세요.',
    }),
    {
      definition: 'covered or marked with an unclean substance such as mud, dust, or grime',
      synonyms: ['filthy', 'grimy', 'unclean'],
      antonyms: ['clean', 'spotless', 'pure'],
      exampleSentences: [
        { en: 'Don\'t sit on the floor with those dirty pants.', ko: '그 더러운 바지를 입고 바닥에 앉지 마세요.' },
        { en: 'The dishes in the sink are still dirty and need washing.', ko: '싱크대에 있는 접시들이 여전히 더러워서 설거지가 필요합니다.' },
      ],
    }
  ),
  word('disabled', '장애가 있는', 6, 'adjective',
    ['건강한', '정상의', '무장애', '완전한', '튼튼한', '정상인', '건강함', '활기찬', '원기왕성한', '온전한'],
    tips({
      etymology: '부정을 뜻하는 dis-와 능력을 뜻하는 able이 합쳐져 신체적 능력이 제한됨을 나타냅니다.',
      visual: '휠체어 마크가 그려진 전용 주차 구역이나 경사로를 떠올려 보세요.',
      soundAlike: '디스에이블드(disabled) - \'디스(이것)\'는 \'에이블(할 수 있는)\' 상태가 \'드(된)\' 것이 아니라고 기억하세요.',
      context: '공공장소의 편의 시설이나 사회 복지 정책을 논할 때 자주 등장하는 표현입니다.',
      synonymAntonym: 'handicapped와 유사한 의미를 지니며, 반대로 신체가 건강한 상태는 able-bodied라고 합니다.',
    }),
    {
      definition: 'having a physical or mental condition that limits movements or activities',
      synonyms: ['handicapped', 'incapacitated', 'impaired'],
      antonyms: ['able-bodied', 'healthy', 'fit'],
      exampleSentences: [
        { en: 'The building was renovated to provide better access for people who are physically challenged.', ko: '그 건물은 신체적 제약이 있는 사람들에게 더 나은 접근성을 제공하기 위해 개보수되었습니다.' },
        { en: 'Special sports events are organized to encourage athletes with various physical limitations.', ko: '다양한 신체적 한계를 가진 선수들을 격려하기 위해 특별 스포츠 행사가 마련되었습니다.' },
      ],
    }
  ),
  word('disadvantage', '불리', 7, 'noun',
    ['이점', '유리', '혜택', '장점', '강점', '메리트', '플러스', '이득', '득', '유리함'],
    tips({
      etymology: '반대를 뜻하는 접두사 dis-와 이익을 뜻하는 advantage가 결합되어 \'이익이 없음\'을 나타냅니다.',
      visual: '달리기 경주에서 남들보다 훨씬 뒤처진 출발선에 서 있는 자신의 모습을 상상해 보세요.',
      soundAlike: '발음할 때 \'디스(dis)\'를 강하게 읽어 부정적인 뉘앙스를 강조하면 기억하기 쉽습니다.',
      context: '주로 경쟁 상황이나 비즈니스 협상에서 상대보다 불리한 조건에 놓였을 때 자주 쓰입니다.',
      synonymAntonym: '유의어인 drawback과 반의어인 benefit을 함께 묶어서 \'단점과 이점\'으로 외우세요.',
    }),
    {
      definition: 'an unfavorable circumstance or condition that reduces the chances of success or effectiveness',
      synonyms: ['drawback', 'downside', 'handicap'],
      antonyms: ['advantage', 'benefit', 'asset'],
      exampleSentences: [
        { en: 'The lack of funding put the small research team at a serious competitive disadvantage.', ko: '자금 부족은 그 작은 연구팀을 심각한 경쟁적 불리함에 처하게 했다.' },
        { en: 'One major disadvantage of living in a remote area is the limited access to public transport.', ko: '벽지에 사는 것의 한 가지 큰 단점은 대중교통 이용이 제한적이라는 것이다.' },
      ],
    }
  ),
  word('disagree', '의견이 다르다', 4, 'verb',
    ['동의하다', '찬성하다', '일치하다', '수긍하다', '승인하다', '만장일치하다', '합의하다', '순응하다', '허가하다', '동조하다'],
    tips({
      etymology: '반대를 뜻하는 접두사 dis-와 일치함을 뜻하는 agree가 결합되어 의견이 갈라짐을 나타냅니다.',
      visual: '회의 테이블에서 한 사람만 반대 방향으로 고개를 젓고 있는 모습을 상상해 보세요.',
      soundAlike: '디스(dis)하는 그리(gree) : 상대방의 의견을 비판하며(디스하며) 동의하지 않는 상황을 연상하세요.',
      context: '주로 전치사 with를 함께 써서 \'disagree with someone\' 형태로 누구와 의견이 다른지 표현합니다.',
      synonymAntonym: '동의하는 agree와 반대되는 개념으로, 서로 다른 길을 가는 differ와 결을 같이 합니다.',
    }),
    {
      definition: 'to hold a different opinion or to fail to reach a consensus with someone else',
      synonyms: ['differ', 'clash', 'dispute'],
      antonyms: ['agree', 'concur', 'assent'],
      exampleSentences: [
        { en: 'Scientists often disagree about the exact causes of climate change.', ko: '과학자들은 종종 기후 변화의 정확한 원인에 대해 의견이 다르다.' },
        { en: 'I strongly disagree with the proposal to increase the working hours.', ko: '나는 근무 시간을 늘리자는 제안에 강력히 반대한다.' },
      ],
    }
  ),
  word('disaster', '재난', 5, 'noun',
    ['행운', '평화', '번영', '성공', '축제', '축하', '건강', '풍년', '안전', '평온'],
    tips({
      etymology: '별(aster)이 떨어진(dis-) 불운한 징조라는 뜻에서 유래하여 큰 불행을 의미하게 되었습니다.',
      visual: '지진이나 홍수로 인해 마을이 무너진 처참한 광경을 머릿속에 그려보세요.',
      soundAlike: '\'디재스터\' 발음이 \'뒤져쓰다\'와 비슷하게 들리니, 큰 사고가 나서 다 망했다는 느낌으로 기억하세요.',
      context: '자연재해뿐만 아니라 계획이 완전히 실패했을 때도 비유적으로 자주 쓰입니다.',
      synonymAntonym: 'catastrophe와 같은 강력한 유의어와 함께 외우고, 반대말인 blessing과 비교해 보세요.',
    }),
    {
      definition: 'A sudden accident or a natural catastrophe that causes great damage or loss of life.',
      synonyms: ['catastrophe', 'calamity', 'tragedy'],
      antonyms: ['blessing', 'fortune', 'success'],
      exampleSentences: [
        { en: 'The earthquake was a total catastrophe that left thousands of people homeless.', ko: '그 지진은 수천 명의 이재민을 발생시킨 완전한 재난이었습니다.' },
        { en: 'The party was a complete failure because the host forgot to order the food.', ko: '주최자가 음식을 주문하는 것을 잊어버리는 바람에 그 파티는 완전히 엉망진창이 되었습니다.' },
      ],
    }
  ),
  word('discharge', '해고하다', 9, 'verb',
    ['채용하다', '고용하다', '승진시키다', '유지하다', '보류하다', '재고용하다', '복직시키다', '붙들다', '남기다', '연임시키다'],
    tips({
      etymology: '접두사 dis-(제거)와 charge(짐/책임)가 결합하여, 맡겨진 책임이나 직무에서 벗어나게 한다는 의미에서 유래했습니다.',
      visual: '직원이 짐을 싸서 사무실 문을 나가는 뒷모습과 그 위에 찍힌 \'RELEASE\' 도장을 상상해 보세요.',
      soundAlike: '발음이 \'디스-차지\'인데, \'이(this) 자리(charge)에서 나가게 하다\'라고 연상하면 쉽습니다.',
      context: '군대에서의 전역이나 병원에서의 퇴원, 혹은 직장에서의 해고 상황에서 주로 사용됩니다.',
      synonymAntonym: 'dismiss와 유의어 관계이며, 반대로 사람을 뽑는 hire와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to officially allow someone to leave a job, an organization, or a place such as a hospital or prison',
      synonyms: ['dismiss', 'release', 'fire'],
      antonyms: ['hire', 'employ', 'recruit'],
      exampleSentences: [
        { en: 'The company had to discharge several employees due to the severe economic downturn.', ko: '심각한 경기 침체로 인해 회사는 여러 명의 직원을 해고해야만 했습니다.' },
        { en: 'He was honorably discharged from the army after serving his country for three years.', ko: '그는 3년 동안 국가에 봉사한 후 군에서 명예롭게 전역했습니다.' },
      ],
    }
  ),
  word('discount', '할인', 6, 'noun',
    ['정가', '인상', '할증', '추가요금', '프리미엄', '풀가격', '원가', '마진', '가산', '부가세'],
    tips({
      etymology: '멀어짐을 뜻하는 dis-와 계산을 뜻하는 count가 합쳐져, 원래 계산에서 금액을 떼어낸다는 의미가 됩니다.',
      visual: '백화점 쇼핑백에 커다란 빨간색 \'30% OFF\' 스티커가 붙어 있는 모습을 상상해 보세요.',
      soundAlike: '디스(dis)하는 카운트(count). 원래 가격을 깎아내리며(디스하며) 숫자를 세는 상황을 떠올려 보세요.',
      context: '주로 쇼핑이나 비즈니스 거래에서 고객에게 혜택을 주기 위해 가격을 낮출 때 자주 쓰입니다.',
      synonymAntonym: 'reduction과 유의어 관계이며, 반대로 가격을 올리는 markup이나 premium과 대조됩니다.',
    }),
    {
      definition: 'A deduction from the usual cost of something, typically given for prompt or cash payment or to a special category of buyers.',
      synonyms: ['reduction', 'markdown', 'rebate'],
      antonyms: ['markup', 'surcharge', 'premium'],
      exampleSentences: [
        { en: 'Students are eligible for a ten percent price reduction at the local cinema.', ko: '학생들은 지역 영화관에서 10퍼센트 가격 할인을 받을 자격이 있습니다.' },
        { en: 'The store is offering a generous markdown on all winter clothing this week.', ko: '그 상점은 이번 주에 모든 겨울 의류에 대해 파격적인 할인을 제공하고 있습니다.' },
      ],
    }
  ),
  word('discriminate', '구별하다', 10, 'verb',
    ['통합하다', '무시하다', '모방하다', '보존하다', '방치하다', '결합하다', '혼동하다', '수용하다', '일치하다', '방해하다'],
    tips({
      etymology: '라틴어 \'discriminare\'에서 유래하며, \'dis-\'(따로)와 \'cernere\'(분리하다)가 합쳐져 사물을 따로 떼어 보고 판단한다는 의미를 가집니다.',
      visual: '돋보기를 들고 수많은 콩 중에서 썩은 콩 하나만을 골라내는 정교한 손길을 상상해 보세요.',
      soundAlike: '\'디스크(disc)를 미네(riminate)\' - 수많은 CD 디스크 중에서 내가 원하는 것만 밀어서 따로 골라내는 모습을 연상하세요.',
      context: '색깔을 구별하는 긍정적인 의미로도 쓰이지만, 인종이나 성별을 이유로 차별하는 부정적인 맥락에서도 자주 사용됩니다.',
      synonymAntonym: '차이를 식별하는 differentiate와 유의어이며, 모든 것을 하나로 뭉뚱그리는 confuse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to recognize or perceive the difference between things, or to treat a person or group unfairly based on category',
      synonyms: ['differentiate', 'distinguish', 'discern'],
      antonyms: ['confuse', 'mix up', 'integrate'],
      exampleSentences: [
        { en: 'It is sometimes difficult to discriminate between pure gold and plated metal.', ko: '순금과 도금된 금속을 구별하는 것은 때때로 어렵다.' },
        { en: 'The law prohibits employers from acting in a way that would unfairly exclude or treat workers differently.', ko: '법은 고용주가 노동자들을 불공평하게 배제하거나 차별하는 방식으로 행동하는 것을 금지한다.' },
      ],
    }
  ),
  word('disgust', '역겹게 하다', 7, 'verb',
    ['매료시키다', '존경하다', '위로하다', '기쁘게하다', '칭찬하다', '격려하다', '설득하다', '용서하다', '수용하다', '신뢰하다'],
    tips({
      etymology: '반대를 뜻하는 dis-와 맛을 뜻하는 gust(gusto)가 결합하여 \'맛이 없다\' 즉, 정떨어지게 한다는 의미에서 유래했습니다.',
      visual: '상한 음식을 한 입 먹고 얼굴을 잔뜩 찌푸리며 접시를 밀어내는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'디스(dis) + 거스트\'와 비슷한데, 상대방을 \'디스\'해서 기분을 \'거칠게\' 만든다고 연상해 보세요.',
      context: '비도덕적인 행동이나 매우 불결한 위생 상태를 보았을 때 느끼는 강한 거부감을 표현할 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 sicken은 병나게 할 정도로 싫게 만든다는 뜻이며, 반의어인 delight는 큰 기쁨을 준다는 뜻입니다.',
    }),
    {
      definition: 'to cause a strong feeling of dislike, nausea, or loathing in someone through offensive behavior or appearance',
      synonyms: ['revolt', 'nauseate', 'sicken'],
      antonyms: ['delight', 'please', 'attract'],
      exampleSentences: [
        { en: 'The cruel way the animals were treated will deeply offend and repel anyone who sees it.', ko: '동물들이 학대받는 잔인한 방식은 그것을 보는 누구라도 깊이 역겹게 할 것입니다.' },
        { en: 'The smell of the rotting garbage began to sicken everyone in the kitchen.', ko: '썩어가는 쓰레기 냄새가 주방에 있는 모든 사람들을 역겹게 하기 시작했습니다.' },
      ],
    }
  ),
  word('dish', '접시', 3, 'noun',
    ['냄비', '주전자', '바구니', '수저', '포크', '도마', '국자', '쟁반', '식탁보', '앞치마'],
    tips({
      etymology: '라틴어 \'discus(원반)\'에서 유래하여 평평하고 둥근 형태의 그릇을 의미하게 되었습니다.',
      visual: '맛있는 음식이 가득 담긴 넓고 평평한 세라믹 접시를 상상해 보세요.',
      soundAlike: '\'디쉬\'라고 발음하며, \'뒤\'에 \'쉬\'운 설거지거리가 쌓인 접시라고 연상해 보세요.',
      context: '식당에서 요리 한 접시를 주문하거나 집에서 설거지를 할 때 가장 많이 쓰이는 단어입니다.',
      synonymAntonym: 'plate와 비슷하지만, dish는 접시에 담긴 \'요리\' 그 자체를 뜻하기도 합니다.',
    }),
    {
      definition: 'A flat, shallow container used for cooking, serving, or eating food.',
      synonyms: ['plate', 'platter', 'saucer'],
      antonyms: ['beverage', 'drink', 'liquid'],
      exampleSentences: [
        { en: 'She carefully placed the ceramic plate on the table after washing every single dish.', ko: '그녀는 모든 접시를 설거지한 후 세라믹 판을 탁자 위에 조심스럽게 놓았습니다.' },
        { en: 'This Italian restaurant is famous for its signature pasta dish.', ko: '이 이탈리아 레스토랑은 대표적인 파스타 요리로 유명합니다.' },
      ],
    }
  ),
  word('dismiss', '해고하다', 4, 'verb',
    ['채용하다', '승진시키다', '유지하다', '환영하다', '임명하다', '보상하다', '격려하다', '허가하다', '보호하다', '지시하다'],
    tips({
      etymology: '라틴어 \'dis-\'(멀리)와 \'mittere\'(보내다)가 합쳐져 사람이나 생각을 멀리 보내버린다는 의미에서 유래했습니다.',
      visual: '상사가 문을 가리키며 나가라고 손짓하는 모습이나, 서류 뭉치를 쓰레기통에 던져버리는 이미지를 떠올려 보세요.',
      soundAlike: '발음이 \'디스미스\'와 비슷한데, 무언가를 \'디스(dis)\'하고 \'미스(miss, 놓치다)\'해서 내보낸다고 생각하면 쉽습니다.',
      context: '직장에서 직원을 내보낼 때뿐만 아니라, 법정에서 소송을 기각하거나 제안을 일축할 때도 자주 쓰입니다.',
      synonymAntonym: 'fire나 discharge와 비슷하게 쓰이지만, hire나 employ와는 정반대의 상황에서 사용됩니다.',
    }),
    {
      definition: 'To officially end the employment of someone or to refuse to consider an idea or suggestion.',
      synonyms: ['fire', 'discharge', 'reject'],
      antonyms: ['hire', 'employ', 'accept'],
      exampleSentences: [
        { en: 'The manager had to let the employee go because of repeated lateness.', ko: '매니저는 반복되는 지각 때문에 그 직원을 해고해야 했습니다.' },
        { en: 'The judge decided to throw out the case due to a lack of evidence.', ko: '판사는 증거 부족을 이유로 그 사건을 기각하기로 결정했습니다.' },
      ],
    }
  ),
  word('disorder', '무질서', 5, 'noun',
    ['질서', '정돈', '규율', '규칙', '체계', '정리', '균형', '조화', '일관성', '순서'],
    tips({
      etymology: '반대를 뜻하는 dis-와 순서를 뜻하는 order가 결합되어 순서가 뒤섞인 상태를 의미합니다.',
      visual: '책상 위에 서류와 펜들이 아무렇게나 어질러져 엉망이 된 모습을 상상해 보세요.',
      soundAlike: '디스(dis) 오더(order): 주문(order)이 잘못(dis) 들어와 주방이 엉망이 된 상황을 떠올려 보세요.',
      context: '사회적 혼란이나 신체적 기능 이상, 또는 방 안의 어지러운 상태를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'chaos와 유사하며, 반대말로는 정돈된 상태인 order나 system이 있습니다.',
    }),
    {
      definition: 'a state of confusion or a lack of organization in a place or situation',
      synonyms: ['chaos', 'confusion', 'turmoil'],
      antonyms: ['order', 'organization', 'discipline'],
      exampleSentences: [
        { en: 'The sudden power outage created total disorder in the busy city center.', ko: '갑작스러운 정전은 번화한 도심에 완전한 무질서를 초래했습니다.' },
        { en: 'She suffered from a rare digestive disorder that required a strict diet.', ko: '그녀는 엄격한 식단 조절이 필요한 희귀한 소화 장애를 앓고 있었습니다.' },
      ],
    }
  ),
  word('displace', '대체하다', 8, 'verb',
    ['유지하다', '보존하다', '원위치하다', '복귀시키다', '고수하다', '복원하다', '되돌리다', '남겨두다', '수용하다', '설치하다'],
    tips({
      etymology: '멀리 떨어뜨리는 dis-와 장소를 뜻하는 place가 합쳐져 원래 자리를 빼앗고 옮긴다는 뜻이 됩니다.',
      visual: '의자에 앉아 있는 사람을 밀어내고 그 자리에 대신 앉는 장면을 상상해 보세요.',
      soundAlike: '디스(dis) 플레이스(place). 이 장소에서 저 사람을 \'디스\'해서 쫓아낸다고 기억하세요.',
      context: '전쟁이나 자연재해로 인해 고향을 떠나야 하는 피난민 상황이나 신기술이 구기술을 밀어낼 때 자주 쓰입니다.',
      synonymAntonym: 'replace와 비슷하지만, displace는 강제로 밀어내거나 쫓아낸다는 뉘앙스가 더 강합니다.',
    }),
    {
      definition: 'to move something from its proper or usual position, or to substitute for someone in a specific role',
      synonyms: ['replace', 'supplant', 'supersede'],
      antonyms: ['restate', 'reinstate', 'anchor'],
      exampleSentences: [
        { en: 'The new technology will eventually substitute for and move aside older, less efficient methods.', ko: '새로운 기술은 결국 더 오래되고 효율성이 떨어지는 방식들을 밀어내고 대체할 것입니다.' },
        { en: 'Thousands of people were forced to leave their homes due to the severe flooding in the region.', ko: '그 지역의 심각한 홍수로 인해 수천 명의 사람들이 집을 잃고 쫓겨나야 했습니다.' },
      ],
    }
  ),
  word('disrupt', '방해하다', 9, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'dis-(분리)\'와 \'rumpere(깨뜨리다)\'가 합쳐져 질서를 깨뜨리고 분리시킨다는 의미에서 유래되었습니다.',
      visual: '조용히 돌아가던 톱니바퀴 사이에 커다란 막대기가 끼어들어 전체 흐름이 뚝 끊기는 장면을 상상해 보세요.',
      soundAlike: '\'디스(이것)를 럽트(엎다)\'라고 연상하여, 잘 진행되던 이것을 엎어서 망쳐버리는 상황으로 기억하세요.',
      context: '기술 혁신이 기존 시장의 질서를 완전히 뒤바꿀 때 \'disruptive technology\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: '흐름을 끊는 interrupt와 유사하며, 질서를 유지하고 돕는 assist와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to cause a disturbance or problem that interrupts an event, activity, or process',
      synonyms: ['interrupt', 'disturb', 'unsettle'],
      antonyms: ['organize', 'facilitate', 'continue'],
      exampleSentences: [
        { en: 'The heavy snowstorm threatened to severely interfere with the city\'s transportation system.', ko: '폭설로 인해 도시의 교통 체계가 심각하게 방해받을 위기에 처했습니다.' },
        { en: 'Protesters tried to break the flow of the meeting by shouting slogans loudly.', ko: '시위대들은 큰 소리로 구호를 외치며 회의의 흐름을 방해하려 했습니다.' },
      ],
    }
  ),
  word('distant', '먼', 6, 'adjective',
    ['가까운', '인접한', '친밀한', '직접적인', '근접한', '밀접한', '당장의', '인근의', '주변의', '즉각적인'],
    tips({
      etymology: '라틴어 \'distare\'에서 유래했으며 \'di-\'(멀리)와 \'stare\'(서 있다)가 합쳐져 멀리 떨어져 서 있는 상태를 뜻합니다.',
      visual: '안개가 자욱한 지평선 너머로 아주 작게 보이는 산봉우리의 모습을 상상해 보세요.',
      soundAlike: '\'디스턴트\' 발음이 \'뒤에 서 있다\'와 비슷하게 들리니, 저 멀리 뒤에 떨어져 있는 이미지를 떠올려 보세요.',
      context: '물리적인 거리뿐만 아니라, 과거의 기억이나 서먹서먹한 인간관계를 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '가까운 것을 뜻하는 near나 close와 반대되는 개념으로, 아주 멀리 떨어진 상태를 강조합니다.',
    }),
    {
      definition: 'Far away in space or time, or not closely related by blood or social connection.',
      synonyms: ['remote', 'faraway', 'detached'],
      antonyms: ['near', 'adjacent', 'intimate'],
      exampleSentences: [
        { en: 'The sound of thunder came from the remote mountains, signaling an approaching storm.', ko: '천둥소리가 먼 산에서 들려오며 폭풍이 다가오고 있음을 알렸다.' },
        { en: 'He became cold and aloof after the argument, making his friends feel he was unreachable.', ko: '그는 말다툼 후에 차갑고 거리를 두는 태도를 보여 친구들이 그를 멀게 느끼게 만들었다.' },
      ],
    }
  ),
  word('distract', '산만하게 하다', 7, 'verb',
    ['집중하다', '무시하다', '수행하다', '유지하다', '확인하다', '변경하다', '처리하다', '반복하다', '적용하다', '중단하다'],
    tips({
      etymology: '라틴어 \'dis-\'(멀리)와 \'trahere\'(끌다)가 합쳐져 마음을 다른 곳으로 끌고 간다는 의미에서 유래되었습니다.',
      visual: '공부하는 학생 옆에서 시끄럽게 게임을 하는 친구 때문에 시선이 분산되는 장면을 상상해 보세요.',
      soundAlike: '\'디스트랙트\' 발음이 \'뒤를 슥 트\'는 것처럼 들리니, 누가 뒤에서 슥 나타나 주의를 끄는 상황을 연상하세요.',
      context: '시험 공부를 하거나 중요한 업무를 볼 때 스마트폰 알림이 울려 방해받는 상황에서 자주 쓰입니다.',
      synonymAntonym: '집중을 방해하는 divert와 대조적으로, 한곳에 모으는 focus를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to take someone\'s attention away from what they are doing or thinking',
      synonyms: ['divert', 'sidetrack', 'disturb'],
      antonyms: ['focus', 'concentrate', 'attract'],
      exampleSentences: [
        { en: 'Please don\'t talk to me now because it will only take my mind off my work.', ko: '지금 저에게 말을 걸지 마세요. 제 업무 집중력을 흐트러뜨릴 뿐이니까요.' },
        { en: 'The loud music outside began to draw his attention away from the book he was reading.', ko: '밖에서 들려오는 시끄러운 음악 소리가 그가 읽고 있던 책으로부터 주의를 산만하게 만들기 시작했다.' },
      ],
    }
  ),
  word('district', '지구', 4, 'noun',
    ['도시', '국가', '대륙', '수도', '마을', '영토', '경계', '중심지', '항구', '광장'],
    tips({
      etymology: '라틴어 \'distringere(엄격히 제한하다)\'에서 유래하여, 특정한 행정적 목적으로 구획된 지역을 뜻합니다.',
      visual: '지도 위에 형광펜으로 특정 구역을 네모나게 칠해놓은 모습을 상상해 보세요.',
      soundAlike: '\'디스트릭트\'는 \'디스(이)+트릭(속임수)+트\'로 들릴 수 있는데, 이 구역에만 있는 특별한 장치라고 연상해 보세요.',
      context: '비즈니스 지구(business district)나 학군(school district)처럼 특정 목적을 가진 지역을 말할 때 주로 쓰입니다.',
      synonymAntonym: '유사한 의미인 area나 region과 함께 외우고, 전체를 뜻하는 whole과 대비해 보세요.',
    }),
    {
      definition: 'A specific area or region of a town, city, or country, often marked off for administrative or official purposes.',
      synonyms: ['region', 'sector', 'zone'],
      antonyms: ['whole', 'entirety', 'totality'],
      exampleSentences: [
        { en: 'The financial district is located in the heart of the city.', ko: '금융 지구는 도시의 중심부에 위치해 있습니다.' },
        { en: 'Each school district has its own set of rules and regulations.', ko: '각 학군마다 고유한 규칙과 규정이 있습니다.' },
      ],
    }
  ),
  word('disturb', '방해하다', 5, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '라틴어 \'disturbare\'에서 유래했으며, \'dis-\'(완전히)와 \'turbare\'(어지럽히다)가 결합되어 평온한 상태를 완전히 깨뜨린다는 의미를 가집니다.',
      visual: '도서관에서 공부하는 사람 옆에서 시끄럽게 전화를 걸어 집중력을 깨뜨리는 무례한 사람의 모습을 상상해 보세요.',
      soundAlike: '\'디스(dis) 터(tur) 브\' 발음이 \'디스(이것) 터부(금기)\'와 비슷하므로, 남의 휴식을 방해하는 것은 금기시되는 행동이라고 연상하세요.',
      context: '호텔 문 앞에 걸린 \'Do Not Disturb\' 표지판은 \'방해하지 마세요\'라는 뜻으로 일상에서 가장 흔히 볼 수 있는 표현입니다.',
      synonymAntonym: '평화를 깨는 interrupt와 유사하며, 반대로 평온하게 두는 soothe나 calm과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to break the peace, quiet, or settled state of something or someone',
      synonyms: ['interrupt', 'disrupt', 'bother'],
      antonyms: ['soothe', 'settle', 'comfort'],
      exampleSentences: [
        { en: 'Please do not make a noise; I do not want to wake the sleeping baby.', ko: '소란 피우지 마세요. 자고 있는 아기를 깨우고 싶지 않아요.' },
        { en: 'The sudden loud thunder broke the silence of the peaceful night.', ko: '갑작스러운 큰 천둥소리가 평화로운 밤의 정적을 깨뜨렸다.' },
      ],
    }
  ),
  word('dive', '뛰어들다', 6, 'verb',
    ['뛰어오르다', '올라가다', '기어오르다', '등반하다', '수면에 뜨다', '나오다', '등장하다', '탈출하다', '건너뛰다', '피하다'],
    tips({
      etymology: '고대 영어 \'dufan\'에서 유래하여 물속으로 깊이 가라앉거나 몸을 던지는 동작을 의미하게 되었습니다.',
      visual: '수영장 높은 다이빙대 위에서 선수가 물을 향해 머리부터 거꾸로 떨어지는 모습을 상상하세요.',
      soundAlike: '발음이 \'다이브\'이므로, 물속으로 \'다\' 들어간다는 느낌으로 기억하면 쉽습니다.',
      context: '스포츠뿐만 아니라 주식 가격이 급락하거나 어떤 주제에 깊이 파고들 때도 자주 쓰입니다.',
      synonymAntonym: '물속으로 들어가는 plunge와 반대로 수면 위로 떠오르는 surface를 함께 기억하세요.',
    }),
    {
      definition: 'to plunge headfirst into water or to move downward rapidly through the air',
      synonyms: ['plunge', 'submerge', 'descend'],
      antonyms: ['ascend', 'surface', 'rise'],
      exampleSentences: [
        { en: 'The children love to jump and plunge into the swimming pool during summer.', ko: '아이들은 여름 동안 수영장에 뛰어드는 것을 아주 좋아합니다.' },
        { en: 'The eagle made a sudden move to catch the fish in the lake.', ko: '독수리는 호수의 물고기를 잡기 위해 갑자기 아래로 급강하했습니다.' },
      ],
    }
  ),
  word('divine', '신성한', 10, 'adjective',
    ['세속적인', '평범한', '인간적인', '악마의', '불결한', '물질적인', '일시적인', '가변적인', '추악한', '현실적인'],
    tips({
      etymology: '라틴어 \'divus(신)\'에서 유래하여 신과 관련된 성질을 나타냅니다.',
      visual: '머리 뒤에서 후광이 비치는 성스러운 조각상을 상상해 보세요.',
      soundAlike: '발음이 \'디바인\'이므로 무대 위의 여신 같은 \'디바(Diva)\'를 떠올리면 쉽습니다.',
      context: '종교적인 의식이나 예술 작품의 경이로운 아름다움을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'holy와는 종교적 의미를 공유하며, earthly와는 하늘과 땅 차이의 반대 개념입니다.',
    }),
    {
      definition: 'relating to, coming from, or being like a god or a supreme being',
      synonyms: ['holy', 'sacred', 'heavenly'],
      antonyms: ['earthly', 'mortal', 'profane'],
      exampleSentences: [
        { en: 'The sunrise over the mountains was truly a magnificent and heavenly sight.', ko: '산 너머로 떠오르는 일출은 진정으로 웅장하고 신성한 광경이었다.' },
        { en: 'Many ancient cultures believed their kings possessed a sacred right to rule.', ko: '많은 고대 문화권에서는 왕들이 통치할 수 있는 신성한 권리를 가졌다고 믿었다.' },
      ],
    }
  ),
  word('divorce', '이혼', 7, 'noun',
    ['결혼', '약혼', '연애', '재결합', '화해', '동거', '가정', '부부', '가정 유지', '재혼'],
    tips({
      etymology: '라틴어 \'divortium\'에서 유래했으며, \'서로 다른 방향으로 가다\'라는 의미를 담고 있습니다.',
      visual: '반으로 찢어진 결혼 사진이나 두 갈래로 갈라지는 길을 상상해 보세요.',
      soundAlike: '발음이 \'다 보스(die-vorce)\'와 비슷하죠? 모든 관계가 다 부서진 상황을 연상해 보세요.',
      context: '법적인 서류 절차나 가족 관계의 변화를 다루는 뉴스, 드라마에서 자주 등장합니다.',
      synonymAntonym: '결합을 뜻하는 marriage와 반대되는 개념으로, 관계의 단절을 의미하는 단어들과 함께 외우면 좋습니다.',
    }),
    {
      definition: 'The formal and legal dissolution of a marriage by a court or other competent body.',
      synonyms: ['separation', 'annulment', 'split-up'],
      antonyms: ['marriage', 'union', 'wedding'],
      exampleSentences: [
        { en: 'The couple decided to get a divorce after years of constant arguments.', ko: '그 부부는 수년간의 끊임없는 다툼 끝에 이혼하기로 결정했다.' },
        { en: 'The rising divorce rate has become a significant social issue in many countries.', ko: '상승하는 이혼율은 많은 국가에서 중요한 사회적 문제가 되었다.' },
      ],
    }
  ),
  word('do', '하다', 1, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '고대 영어 \'don\'에서 유래하여 무언가를 실행하거나 위치시킨다는 근본적인 움직임을 나타냅니다.',
      visual: '어떤 사람이 도구를 들고 무언가를 열심히 만들거나 움직이는 활동적인 모습을 상상해 보세요.',
      soundAlike: '\'두\' 발음이 나는데, 머리(두)를 써서 무언가를 \'수행한다\'고 연결하면 기억하기 쉽습니다.',
      context: '일상생활에서 숙제를 하거나, 설거지를 하거나, 운동을 하는 등 구체적인 활동을 언급할 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 \'수행하는\' perform과 반대로 아무것도 하지 않고 \'무시하는\' neglect를 함께 기억하세요.',
    }),
    {
      definition: 'to perform an action, activity, or task',
      synonyms: ['perform', 'execute', 'carry out'],
      antonyms: ['undo', 'halt', 'idle'],
      exampleSentences: [
        { en: 'I need to finish my homework before I go out to play.', ko: '놀러 나가기 전에 숙제를 끝내야 해요.' },
        { en: 'She will help you with the chores this afternoon.', ko: '그녀가 오늘 오후에 집안일을 도와줄 거예요.' },
      ],
    }
  ),
  word('doctor', '의사', 2, 'noun',
    ['간호사', '환자', '약사', '치과의사', '수의사', '교사', '변호사', '엔지니어', '요리사', '과학자'],
    tips({
      etymology: '라틴어 \'docere(가르치다)\'에서 유래하여, 원래는 높은 학식을 갖추고 남을 가르칠 수 있는 사람을 의미했습니다.',
      visual: '흰 가운을 입고 청진기를 목에 건 채 환자를 진찰하는 모습을 상상해 보세요.',
      soundAlike: '\'닥터\'라는 발음은 \'닦다\'와 비슷하죠? 아픈 곳을 깨끗하게 닦아내어 고쳐주는 사람으로 기억하세요.',
      context: '병원에서 진료를 받거나 대학에서 박사 학위를 가진 전문가를 부를 때 공통적으로 사용됩니다.',
      synonymAntonym: 'physician은 내과 의사를 뜻하는 유의어이며, patient는 의사의 도움을 받는 환자를 뜻하는 반의어 관계입니다.',
    }),
    {
      definition: 'A licensed professional who is trained and qualified to diagnose and treat people who are ill or injured.',
      synonyms: ['physician', 'clinician', 'medical practitioner'],
      antonyms: ['patient', 'layperson', 'amateur'],
      exampleSentences: [
        { en: 'You should see a specialist if the pain in your back continues to get worse.', ko: '등의 통증이 계속 악화된다면 전문의 진찰을 받아야 합니다.' },
        { en: 'After years of intense study, she finally earned her PhD and became a respected scholar.', ko: '수년간의 치열한 연구 끝에 그녀는 마침내 박사 학위를 취득하고 존경받는 학자가 되었습니다.' },
      ],
    }
  ),
  word('document', '문서', 4, 'noun',
    ['구두 약속', '음성 메시지', '구두 설명', '암기', '대화', '실시간 방송', '현장 강의', '즉흥 연설', '구전 동화', '신체 신호'],
    tips({
      etymology: '라틴어 \'docere(가르치다)\'에서 유래하여, 정보를 가르쳐 주거나 증명해 주는 서류라는 의미를 가집니다.',
      visual: '중요한 도장이 찍혀 있고 글자가 빽빽하게 적힌 종이 뭉치나 PDF 파일을 상상해 보세요.',
      soundAlike: '\'다큐먼트\'는 \'다큐멘터리\'와 앞부분이 같습니다. 사실을 기록한 영상이 다큐멘터리라면, 기록한 종이는 다큐먼트입니다.',
      context: '사무실에서 보고서를 제출하거나, 계약서에 서명할 때 가장 흔하게 쓰이는 단어입니다.',
      synonymAntonym: 'paper나 record와 비슷하지만, void나 nullification처럼 효력이 없는 상태와는 반대됩니다.',
    }),
    {
      definition: 'an official paper, form, or digital file that provides information or evidence',
      synonyms: ['record', 'paper', 'file'],
      antonyms: ['speech', 'void', 'nothingness'],
      exampleSentences: [
        { en: 'Please make sure to save the changes to your digital file before closing it.', ko: '파일을 닫기 전에 디지털 문서의 변경 사항을 반드시 저장하십시오.' },
        { en: 'The lawyer asked for a signed copy of the legal agreement.', ko: '변호사는 서명된 법적 합의서 사본을 요청했습니다.' },
      ],
    }
  ),
  word('doll', '인형', 3, 'noun',
    ['로봇', '피규어', '공', '자동차', '블록', '퍼즐', '카드', '보드게임', '실물', '진짜 아이'],
    tips({
      etymology: '여자 이름인 Dorothy의 애칭인 Dolly에서 유래되어 아이들의 장난감을 뜻하게 되었습니다.',
      visual: '침대 위에 놓인 예쁜 드레스를 입은 헝겊 인형의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'돌\'과 비슷하죠? 돌잔치 때 선물로 받은 인형을 떠올려 보세요.',
      context: '아이들이 소꿉놀이를 하거나 잠을 잘 때 품에 안고 있는 장난감을 말합니다.',
      synonymAntonym: '사람 모양의 toy와 비슷하지만, 살아있는 생명체인 human과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A model of a human being, often used as a toy for children or as a decorative object.',
      synonyms: ['figurine', 'marionette', 'puppet'],
      antonyms: ['human', 'adult', 'original'],
      exampleSentences: [
        { en: 'The little girl took her favorite toy to bed and hugged it tightly.', ko: '그 어린 소녀는 자신이 가장 좋아하는 인형을 침대로 가져가 꼭 껴안았습니다.' },
        { en: 'She has a collection of traditional porcelain figures from all over the world.', ko: '그녀는 전 세계의 전통적인 도자기 인형 수집품을 가지고 있습니다.' },
      ],
    }
  ),
  word('dolphin', '돌고래', 1, 'noun',
    ['상어', '고래', '물개', '거북이', '불가사리', '해파리', '가오리', '펭귄', '범고래', '바다사자'],
    tips({
      etymology: '그리스어 \'delphis\'에서 유래했으며, 이는 \'자궁\'을 뜻하는 단어와 연관되어 새끼를 낳는 포유류임을 암시합니다.',
      visual: '매끄러운 회색 피부를 가진 동물이 바다 위로 껑충 뛰어오르며 미소 짓는 표정을 떠올려 보세요.',
      soundAlike: '\'돌핀\'이라는 발음이 한국어 \'돌고래\'의 첫 글자인 \'돌\'과 비슷하게 시작한다고 기억하면 쉽습니다.',
      context: '수족관 쇼나 바다 여행 중 배 옆에서 함께 헤엄치는 영리한 동물을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '해양 포유류라는 점에서는 고래와 비슷하지만, 육지 동물이나 어류와는 생물학적으로 구분됩니다.',
    }),
    {
      definition: 'A highly intelligent marine mammal with a streamlined body and a blowhole for breathing, known for its playful behavior.',
      synonyms: ['porpoise', 'cetacean', 'marine mammal'],
      antonyms: ['land animal', 'terrestrial creature', 'freshwater fish'],
      exampleSentences: [
        { en: 'We were lucky enough to see a pod of these aquatic animals swimming alongside our boat.', ko: '우리는 운 좋게도 우리 배 옆에서 헤엄치는 이 수생 동물 무리를 볼 수 있었습니다.' },
        { en: 'The trainer rewarded the clever creature with a fish after it performed a high jump.', ko: '조련사는 영리한 동물이 높이 뛰어오르기를 마친 후 보상으로 물고기를 주었습니다.' },
      ],
    }
  ),
  word('domain', '영역', 5, 'noun',
    ['외부', '경계', '타지', '무관', '한계', '이질', '공백', '파편', '하위', '이면'],
    tips({
      etymology: '라틴어 dominus(주인)에서 유래하여 주인이 다스리는 땅이나 범위를 뜻합니다.',
      visual: '지도 위에 울타리를 쳐서 자신만의 구역을 표시하는 모습을 상상해 보세요.',
      soundAlike: '도메인 주소를 떠올리며 인터넷상에서 나만의 고유한 영역이라고 생각하면 쉽습니다.',
      context: '학문적 분야나 전문 지식의 범위를 말할 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: 'field나 realm과 비슷하며, 특정 영역이 없는 상태인 surrender와는 반대됩니다.',
    }),
    {
      definition: 'A specified sphere of activity, knowledge, or interest controlled by a particular person or group.',
      synonyms: ['realm', 'field', 'sphere'],
      antonyms: ['surrender', 'submission', 'yielding'],
      exampleSentences: [
        { en: 'The forest is the natural habitat and primary territory of the wolf pack.', ko: '그 숲은 늑대 무리의 자연 서식지이자 주요 영역입니다.' },
        { en: 'Financial planning falls outside her professional expertise and area of interest.', ko: '재무 설계는 그녀의 전문 지식 영역과 관심 분야 밖의 일입니다.' },
      ],
    }
  ),
  word('dose', '복용량', 8, 'noun',
    ['처방전', '부작용', '증상', '진단', '치료법', '알약', '백신', '면역', '회복', '검진'],
    tips({
      etymology: '그리스어 \'dosis\'에서 유래되었으며, \'주는 것\' 또는 \'선물\'이라는 의미에서 약을 주는 양으로 발전했습니다.',
      visual: '약병 옆에 놓인 작은 계량컵에 정확히 담긴 물약을 상상해 보세요.',
      soundAlike: '\'도즈\'라고 발음되는데, 약을 먹고 \'도즈(졸음)\'가 오는 상황을 연상하면 기억하기 쉽습니다.',
      context: '병원이나 약국에서 약을 얼마나 자주, 얼마나 많이 먹어야 하는지 설명할 때 주로 쓰입니다.',
      synonymAntonym: '양을 나타내는 dosage와 비슷하며, 전체를 나타내는 total과는 반대되는 개념으로 쓰일 수 있습니다.',
    }),
    {
      definition: 'a measured amount of a medicine or vitamin that is taken at a specific time',
      synonyms: ['dosage', 'measure', 'portion'],
      antonyms: ['whole', 'total', 'bulk'],
      exampleSentences: [
        { en: 'The label indicates that the recommended amount for adults is one pill per day.', ko: '라벨에는 성인 권장 복용량이 하루 한 알이라고 명시되어 있습니다.' },
        { en: 'He forgot to take his morning medication, so he missed a vital part of his treatment.', ko: '그는 아침 약을 먹는 것을 잊어서 치료의 중요한 복용 단계를 놓쳤습니다.' },
      ],
    }
  ),
  word('dot', '점', 6, 'noun',
    ['선', '면', '원', '띠', '블롭', '덩어리', '막대', '사각형', '무지', '공백'],
    tips({
      etymology: '고대 영어 \'dott\'에서 유래하여 아주 작은 조각이나 덩어리를 의미하게 되었습니다.',
      visual: '흰 종이 위에 검은색 펜으로 콕 찍은 아주 작은 원을 상상해 보세요.',
      soundAlike: '발음이 \'닷\'과 비슷하므로, 인터넷 주소의 \'닷컴(.com)\'에 찍히는 점을 연상하세요.',
      context: '지도상의 위치를 표시하거나 문장의 끝에 마침표를 찍을 때 주로 사용됩니다.',
      synonymAntonym: 'spot이나 speck과 비슷하지만, 거대한 영역을 뜻하는 expanse와는 반대됩니다.',
    }),
    {
      definition: 'A tiny, circular mark or point on a surface.',
      synonyms: ['speck', 'point', 'spot'],
      antonyms: ['expanse', 'surface', 'area'],
      exampleSentences: [
        { en: 'The ladybug has several black circular marks on its red wings.', ko: '무당벌레의 빨간 날개 위에는 몇 개의 검은색 둥근 점들이 있습니다.' },
        { en: 'From the airplane window, the cars on the ground looked like tiny specks.', ko: '비행기 창문 너머로 지상의 차들이 아주 작은 점처럼 보였습니다.' },
      ],
    }
  ),
  word('down', '아래로', 2, 'adverb',
    ['위로', '올라가서', '상승하여', '고도로', '천장으로', '수직 위', '상향', '상승', '고공으로', '꼭대기로'],
    tips({
      etymology: '고대 영어 \'adune\'에서 유래했으며, \'언덕(dun)에서 내려오다\'라는 의미를 담고 있습니다.',
      visual: '계단을 한 칸씩 밟고 내려가는 사람의 발걸음을 상상해 보세요.',
      soundAlike: '한국어 \'다운\'과 발음이 같으며, 기분이 \'다운\'된다고 할 때의 그 느낌을 떠올리세요.',
      context: '물건을 바닥에 놓거나 고개를 숙일 때 가장 흔하게 사용되는 방향 표현입니다.',
      synonymAntonym: 'up(위로)과 반대되는 개념이며, below나 beneath와 비슷한 방향성을 가집니다.',
    }),
    {
      definition: 'toward or in a lower place or position',
      synonyms: ['below', 'downward', 'underneath'],
      antonyms: ['up', 'upward', 'aloft'],
      exampleSentences: [
        { en: 'Please sit on the chair and relax for a moment.', ko: '의자에 앉아서 잠시 휴식을 취하세요.' },
        { en: 'The sun is going behind the horizon, and it\'s getting dark.', ko: '해가 지평선 아래로 지고 있어서 어두워지고 있습니다.' },
      ],
    }
  ),
  word('dozen', '다스', 7, 'noun',
    ['한 개', '몇 개', '한 켤레', '한 벌', '한 묶음', '한 통', '한 상자', '한 봉지', '한 갑', '한 세트'],
    tips({
      etymology: '프랑스어 \'douzaine\'에서 유래했으며, 숫자 2를 뜻하는 \'duo\'와 10을 뜻하는 \'decem\'이 합쳐져 12가 되었습니다.',
      visual: '계란 한 판에 30알이 아닌, 12알이 꽉 차 있는 작은 계란 꾸러미를 상상해 보세요.',
      soundAlike: '발음이 \'더즌\'이므로, \'더 준(더 준다)\'이라고 연상하여 10개보다 2개를 더 준 12개라고 기억하세요.',
      context: '주로 계란, 도넛, 연필처럼 12개가 한 묶음으로 판매되는 물건의 수량을 셀 때 자주 쓰입니다.',
      synonymAntonym: '12개를 뜻하는 twelve와 유사하며, 아주 적은 양을 뜻하는 handful과는 반대되는 느낌으로 쓰일 수 있습니다.',
    }),
    {
      definition: 'A specific quantity consisting of twelve items or units grouped together.',
      synonyms: ['twelve', 'set of twelve', 'twelvefold'],
      antonyms: ['individual', 'single', 'zero'],
      exampleSentences: [
        { en: 'She bought a fresh batch of eggs and a full set of glazed donuts for the office.', ko: '그녀는 사무실을 위해 신선한 계란 한 다스와 글레이즈드 도넛 한 다스를 샀습니다.' },
        { en: 'The baker prepared twelve bread rolls to fill the standard order size.', ko: '제빵사는 표준 주문 수량인 한 다스를 채우기 위해 12개의 빵을 준비했습니다.' },
      ],
    }
  ),
  word('drain', '배수하다', 9, 'verb',
    ['채우다', '공급하다', '막다', '보관하다', '흡수하다', '정지하다', '상승하다', '고정하다', '연결하다', '확장하다'],
    tips({
      etymology: '고대 영어 \'dreahnian\'에서 유래하여 \'액체를 서서히 빠져나가게 하다\'라는 의미를 가집니다.',
      visual: '싱크대 배수구로 물이 소용돌이치며 빠져나가는 모습을 상상해 보세요.',
      soundAlike: '비슷한 발음인 \'드레인\'을 떠올리며, 에너지가 \'드러나게\' 다 빠져나가는 느낌으로 외우세요.',
      context: '요리할 때 파스타 면의 물기를 빼거나, 힘든 일로 기운이 다 빠졌을 때 주로 사용합니다.',
      synonymAntonym: '비우는 것은 empty, 반대로 가득 채우는 것은 fill입니다.',
    }),
    {
      definition: 'to make liquid flow away from something or to empty out a container',
      synonyms: ['empty', 'deplete', 'exhaust'],
      antonyms: ['fill', 'replenish', 'recharge'],
      exampleSentences: [
        { en: 'You should drain the pasta thoroughly before adding the sauce.', ko: '소스를 넣기 전에 파스타의 물기를 완전히 빼야 합니다.' },
        { en: 'The long meeting began to drain his energy and patience.', ko: '긴 회의는 그의 에너지와 인내심을 소진시키기 시작했습니다.' },
      ],
    }
  ),
  word('draw', '당기다', 3, 'verb',
    ['밀다', '밀어내다', '밀어넣다', '떠밀다', '찌르다', '누르다', '꾹 누르다', '고정하다', '고정시키다', '붙들다'],
    tips({
      etymology: '고대 영어 dragan에서 유래하여 \'끌다\' 혹은 \'운반하다\'라는 근본적인 의미를 가집니다.',
      visual: '커튼을 양옆으로 슥 당겨서 여는 모습이나 서랍 손잡이를 몸쪽으로 당기는 장면을 상상하세요.',
      soundAlike: '\'드러(draw)내다\'와 발음이 비슷하죠? 서랍을 당겨서 안의 내용물을 드러내는 모습을 연상해 보세요.',
      context: '단순히 선을 긋는 것뿐만 아니라, 사람의 주의를 끌거나 결론을 도출할 때도 자주 쓰입니다.',
      synonymAntonym: '당기는 pull과 밀어내는 push를 한 쌍으로 묶어서 기억하면 반대 개념이 명확해집니다.',
    }),
    {
      definition: 'to move something by pulling it gently or to attract someone\'s attention or interest',
      synonyms: ['pull', 'drag', 'attract'],
      antonyms: ['push', 'repel', 'shove'],
      exampleSentences: [
        { en: 'She had to draw the curtains to keep the bright sunlight out of the room.', ko: '그녀는 밝은 햇빛이 방에 들어오지 못하게 커튼을 당겨야 했다.' },
        { en: 'The magician\'s incredible performance managed to draw a huge crowd in the park.', ko: '그 마술사의 놀라운 공연은 공원에서 거대한 군중을 끌어모으는 데 성공했다.' },
      ],
    }
  ),
  word('dread', '두려워하다', 10, 'verb',
    ['기대하다', '무시하다', '환영하다', '안심하다', '축하하다', '용서하다', '조절하다', '발견하다', '동의하다', '만족하다'],
    tips({
      etymology: '고대 영어 \'drædan\'에서 유래하여 마음속 깊이 스며드는 강한 공포를 의미합니다.',
      visual: '치과 의자에 앉기 직전, 온몸이 굳어버리는 공포스러운 순간을 상상해 보세요.',
      soundAlike: '발음이 \'드레드(dread)\'로, 머리카락을 꼬는 드레드락을 하다가 머리가 다 빠질까 봐 \'두려워하는\' 모습과 연결해 보세요.',
      context: '주로 다가올 미래의 사건이나 피할 수 없는 의무에 대해 극심한 불안감을 느낄 때 사용합니다.',
      synonymAntonym: 'fear와 비슷하지만 더 무겁고 지속적인 느낌이며, 반대로 기쁘게 기다리는 look forward to와 대조됩니다.',
    }),
    {
      definition: 'to feel extreme apprehension or fear about something that is going to happen',
      synonyms: ['fear', 'apprehend', 'loathe'],
      antonyms: ['anticipate', 'welcome', 'cherish'],
      exampleSentences: [
        { en: 'Many students dread the final exams because they are so difficult.', ko: '많은 학생들은 기말고사가 너무 어렵기 때문에 시험을 몹시 두려워한다.' },
        { en: 'I dread to think what would happen if we missed the last train.', ko: '우리가 막차를 놓치면 어떤 일이 벌어질지 생각만 해도 끔찍하다.' },
      ],
    }
  ),
  word('drink', '마시다', 1, 'verb',
    ['먹다', '삼키다', '뱉다', '토하다', '금하다', '굶다', '배고프다', '입에 대지 않다', '거절하다', '피하다'],
    tips({
      etymology: '고대 영어 drincan에서 유래하여 액체를 빨아들여 삼키는 행위를 뜻하게 되었습니다.',
      visual: '목이 마른 사람이 시원한 물컵을 들고 벌컥벌컥 들이켜는 모습을 상상해 보세요.',
      soundAlike: '드링크(drink) 음료수를 마시는 소리 \'드링~\' 하고 들이키는 소리와 비슷합니다.',
      context: '식당에서 웨이터가 주문을 받을 때 가장 먼저 묻는 질문 중 하나입니다.',
      synonymAntonym: 'sip(홀짝이다)보다는 큰 동작이며, 반대로 spit(뱉다)과는 정반대의 행동입니다.',
    }),
    {
      definition: 'to take a liquid into the mouth and swallow it',
      synonyms: ['gulp', 'quaff', 'swallow'],
      antonyms: ['spit', 'vomit', 'dehydrate'],
      exampleSentences: [
        { en: 'You should consume plenty of water every day to stay healthy.', ko: '건강을 유지하기 위해 매일 충분한 물을 마셔야 합니다.' },
        { en: 'He sat by the window to enjoy a hot cup of coffee.', ko: '그는 뜨거운 커피 한 잔을 마시기 위해 창가에 앉았습니다.' },
      ],
    }
  ),
  word('drive', '운전하다', 2, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '고대 영어 \'drīfan\'에서 유래했으며, 무언가를 앞으로 밀어내거나 움직이게 한다는 핵심 의미를 담고 있습니다.',
      visual: '양손으로 핸들을 잡고 도로 위를 매끄럽게 나아가는 자동차의 모습을 상상해 보세요.',
      soundAlike: '\'드라이브\'라는 발음은 한국어에서도 차를 타고 나들이 가는 상황으로 자주 쓰여 익숙합니다.',
      context: '단순히 차를 조종하는 것뿐만 아니라, 특정 방향으로 사람이나 상황을 몰고 가는 맥락에서도 쓰입니다.',
      synonymAntonym: '조종하는 steer와 멈추는 halt를 함께 기억하면 움직임의 제어를 더 잘 이해할 수 있습니다.',
    }),
    {
      definition: 'to operate a motorized vehicle and control its speed and direction',
      synonyms: ['operate', 'steer', 'pilot'],
      antonyms: ['halt', 'stop', 'park'],
      exampleSentences: [
        { en: 'She learned how to operate a car so she could travel to work every day.', ko: '그녀는 매일 직장에 출근하기 위해 자동차 운전하는 법을 배웠습니다.' },
        { en: 'It takes about four hours to reach the coast if you go by car.', ko: '차를 몰고 가면 해안가에 도착하는 데 약 4시간이 걸립니다.' },
      ],
    }
  ),
  word('drop', '방울', 3, 'noun',
    ['흐름', '강', '호수', '덩어리', '막', '판', '바다', '증발', '마름', '건조'],
    tips({
      etymology: '고대 영어 \'dropa\'에서 유래했으며, 액체가 중력에 의해 떨어지는 모양을 나타냅니다.',
      visual: '수도꼭지 끝에서 동그랗게 맺혀 있다가 톡 떨어지는 물방울의 모양을 상상해 보세요.',
      soundAlike: '바닥에 물건을 \'드랍(drop)\'할 때 나는 가벼운 소리와 물방울이 떨어지는 소리를 연결해 보세요.',
      context: '비가 내리기 시작할 때 피부에 닿는 첫 번째 빗방울을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '작은 입자를 뜻하는 bead와 유사하며, 거대한 양을 뜻하는 flood와는 대조적입니다.',
    }),
    {
      definition: 'a small quantity of liquid that falls in a more or less spherical shape',
      synonyms: ['bead', 'droplet', 'globule'],
      antonyms: ['flood', 'stream', 'ocean'],
      exampleSentences: [
        { en: 'A single bead of sweat rolled down his forehead during the exam.', ko: '시험을 보는 동안 땀 한 방울이 그의 이마를 타고 흘러내렸다.' },
        { en: 'The leaves were covered with tiny glistening beads of morning dew.', ko: '나뭇잎들이 반짝이는 작은 아침 이슬방울들로 뒤덮여 있었다.' },
      ],
    }
  ),
  word('drown', '물에 빠지다', 4, 'verb',
    ['건지다', '구하다', '수영하다', '뜨다', '건너가다', '건너다', '올라오다', '탈출하다', '생존하다', '말리다'],
    tips({
      etymology: '고대 영어 \'druncnian\'에서 유래하여 술에 취하거나 물에 푹 잠기는 상태를 의미하게 되었습니다.',
      visual: '거친 파도 속으로 물체가 서서히 가라앉아 보이지 않게 되는 장면을 상상해 보세요.',
      soundAlike: '\'드라운\' 발음이 \'들어온(물속으로)\'과 비슷하다고 생각하면 물에 빠지는 이미지가 쉽게 연상됩니다.',
      context: '사람이나 동물이 물속에서 숨을 쉬지 못해 죽는 상황뿐만 아니라, 큰 소음이 작은 소리를 덮어버릴 때도 사용합니다.',
      synonymAntonym: 'sink는 단순히 가라앉는 것이고, drown은 생명체가 질식하는 것에 초점을 둡니다. 반대로 float는 물 위에 뜨는 것을 의미합니다.',
    }),
    {
      definition: 'to die through being submerged in water and inhaling it, or to kill someone in this way',
      synonyms: ['submerge', 'immerse', 'suffocate'],
      antonyms: ['float', 'surface', 'rescue'],
      exampleSentences: [
        { en: 'The heavy rain threatened to drown the young plants in the garden.', ko: '폭우로 인해 정원의 어린 식물들이 물에 잠길 위험에 처했다.' },
        { en: 'He tried to shout for help, but his voice was drowned by the loud music.', ko: '그는 도와달라고 소리치려 했으나, 그의 목소리는 시끄러운 음악 소리에 묻혀버렸다.' },
      ],
    }
  ),
  word('drug', '약', 5, 'noun',
    ['독', '해독제', '비타민', '식품', '음식', '물', '공기', '운동', '휴식', '위약'],
    tips({
      etymology: '네덜란드어 \'droog(말린)\'에서 유래하여, 과거에 말린 식물을 약재로 사용했던 것에서 시작되었습니다.',
      visual: '약국 선반에 나란히 진열된 알약 병들과 처방전을 떠올려 보세요.',
      soundAlike: '\'드러그\'라고 발음하며, 입안에 쓴 약이 \'드러\'오는 상황을 연상해 보세요.',
      context: '의학적인 치료제뿐만 아니라 카페인이나 알코올 같은 중독성 물질을 지칭할 때도 쓰입니다.',
      synonymAntonym: '치료를 돕는 medication과 대조되는 개념으로 독소를 뜻하는 poison을 함께 기억하세요.',
    }),
    {
      definition: 'A chemical substance used as a medicine or used for its physiological effects when ingested or otherwise introduced into the body.',
      synonyms: ['medication', 'pharmaceutical', 'remedy'],
      antonyms: ['poison', 'toxin', 'venom'],
      exampleSentences: [
        { en: 'The doctor prescribed a new medication to help lower her blood pressure.', ko: '의사는 그녀의 혈압을 낮추는 데 도움이 되는 새로운 약을 처방했습니다.' },
        { en: 'It is important to keep every pharmaceutical substance out of the reach of children.', ko: '모든 약물을 어린이의 손이 닿지 않는 곳에 보관하는 것이 중요합니다.' },
      ],
    }
  ),
];
