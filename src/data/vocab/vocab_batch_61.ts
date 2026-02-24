import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch61: VocabItem[] = [
  word('spare', '여분의', 5, 'adjective',
    ['부족한', '필수적인', '가득한', '복잡한', '낭비하는', '화려한', '고갈된', '밀집한', '영구적인', '과도한'],
    tips({
      etymology: '고대 영어 sparian에서 유래하여 \'아끼다\' 혹은 \'해를 끼치지 않고 남겨두다\'라는 의미에서 시작되었습니다.',
      visual: '자동차 트렁크 안에 비상용으로 보관된 여분의 타이어(spare tire)를 상상해 보세요.',
      soundAlike: '볼링에서 남은 핀을 처리하는 \'스페어\' 처리를 떠올리면 남겨진 것이라는 느낌이 쉽게 옵니다.',
      context: '주로 시간, 돈, 부품 등이 현재 사용 중인 것 외에 추가로 더 있을 때 사용합니다.',
      synonymAntonym: 'extra와 유의어 관계이며, 필수적이라는 뜻의 essential과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Being more than what is currently needed or used; kept in reserve for potential future use.',
      synonyms: ['extra', 'additional', 'surplus'],
      antonyms: ['necessary', 'essential', 'insufficient'],
      exampleSentences: [
        { en: 'We keep a set of keys in the drawer just in case someone loses theirs.', ko: '누군가 열쇠를 잃어버릴 경우를 대비해 서랍에 여분의 열쇠 한 세트를 보관하고 있습니다.' },
        { en: 'Do you have any moments this afternoon to discuss the new project details?', ko: '오늘 오후에 새 프로젝트 세부 사항을 논의할 여유 시간이 좀 있으신가요?' },
      ],
    }
  ),
  word('spark', '불꽃', 6, 'noun',
    ['연기', '재', '불길', '석탄', '성냥', '화재', '연료', '폭발', '그을음', '화염'],
    tips({
      etymology: '고대 영어 \'spearca\'에서 유래했으며, 작게 튀어 오르는 불씨를 의미합니다.',
      visual: '어두운 밤 캠프파이어에서 공중으로 톡톡 튀어 오르는 작은 빛의 알갱이를 상상해 보세요.',
      soundAlike: '전기 스파크가 일어날 때 \'치직\' 하는 소리와 단어의 강한 \'k\' 발음을 연결해 보세요.',
      context: '물리적인 불꽃뿐만 아니라 창의적인 아이디어나 감정의 시작을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: '작은 빛인 flare와 비슷하지만, 거대한 불길인 blaze와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small fiery particle thrown off from a fire or produced by striking two hard surfaces together.',
      synonyms: ['glint', 'flicker', 'flash'],
      antonyms: ['darkness', 'extinguishment', 'dullness'],
      exampleSentences: [
        { en: 'A tiny ember flew from the fireplace and created a bright flash on the rug.', ko: '벽난로에서 작은 불똥이 튀어 나와 카펫 위에 밝은 불꽃을 일으켰다.' },
        { en: 'The sudden debate provided the necessary inspiration to begin the new project.', ko: '갑작스러운 토론은 새로운 프로젝트를 시작하는 데 필요한 영감의 불꽃을 제공했다.' },
      ],
    }
  ),
  word('speak', '이야기하다', 1, 'verb',
    ['듣다', '쓰다', '읽다', '생각하다', '걷다', '먹다', '기다리다', '만들다', '공부하다', '노래하다'],
    tips({
      etymology: '고대 영어 \'specan\'에서 유래했으며, 입을 통해 소리를 내어 의사를 전달하는 행위를 의미합니다.',
      visual: '마이크 앞에 서서 청중들에게 자신의 의견을 당당하게 전달하는 연설가의 모습을 상상해 보세요.',
      soundAlike: '\'스피커(speaker)\'를 떠올려 보세요. 소리를 밖으로 내보내는 장치처럼 입으로 소리를 내는 것입니다.',
      context: '언어를 구사하거나, 누군가와 대화를 나누거나, 대중 앞에서 연설할 때 주로 사용됩니다.',
      synonymAntonym: 'talk와 비슷하지만 좀 더 공식적인 상황에서도 쓰이며, 침묵을 뜻하는 silence와 반대됩니다.',
    }),
    {
      definition: 'To utter words or articulate sounds with the ordinary voice in order to express thoughts or opinions.',
      synonyms: ['talk', 'converse', 'utter'],
      antonyms: ['listen', 'be silent', 'refrain'],
      exampleSentences: [
        { en: 'She can communicate fluently in three different languages.', ko: '그녀는 3개 국어를 유창하게 말할 수 있습니다.' },
        { en: 'Please address the audience clearly so everyone can hear you.', ko: '모든 사람이 들을 수 있도록 청중에게 명확하게 말씀해 주세요.' },
      ],
    }
  ),
  word('special', '특별한', 7, 'adjective',
    ['평범한', '일반적인', '공통의', '전형적인', '사소한', '지루한', '익숙한', '보편적인', '단순한', '흔한'],
    tips({
      etymology: '라틴어 \'species\'에서 유래하여 \'특정한 종류\'나 \'개별적인 특징\'을 가진 상태를 나타냅니다.',
      visual: '생일 파티에서 주인공만 쓰고 있는 화려한 왕관이나 반짝이는 선물을 상상해 보세요.',
      soundAlike: '\'스페셜\' 발음은 \'숲에 셜(설) 정도로 눈에 띄는 나무\'처럼 독특한 존재감을 연상시킵니다.',
      context: '일상적인 것들 사이에서 유독 눈에 띄거나 오직 한 사람만을 위해 준비된 상황에 쓰입니다.',
      synonymAntonym: '평범한 ordinary와 반대되며, 독특한 unique나 특정 목적을 위한 specific과 결합해 외우면 좋습니다.',
    }),
    {
      definition: 'Better, greater, or otherwise different from what is usual or ordinary.',
      synonyms: ['exceptional', 'unique', 'distinctive'],
      antonyms: ['ordinary', 'common', 'typical'],
      exampleSentences: [
        { en: 'She prepared a unique meal for her mother\'s birthday celebration.', ko: '그녀는 어머니의 생신 축하를 위해 특별한 식사를 준비했습니다.' },
        { en: 'This tool requires a specific type of battery to function correctly.', ko: '이 도구는 올바르게 작동하기 위해 특별한 종류의 배터리가 필요합니다.' },
      ],
    }
  ),
  word('species', '종', 4, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '라틴어 \'specere(보다)\'에서 유래하여, 겉모습이나 형태가 같은 생물들의 무리를 뜻하게 되었습니다.',
      visual: '현미경으로 관찰했을 때 똑같이 생긴 세포들이 옹기종기 모여 있는 생물 도감을 상상해 보세요.',
      soundAlike: '\'스피시즈\'라고 발음하며, \'숲이 쉬지\' 않고 수많은 생물 \'종\'들로 가득 차 있다고 연상해 보세요.',
      context: '생물학이나 환경 보호 뉴스에서 멸종 위기 동물을 다룰 때 가장 빈번하게 등장하는 단어입니다.',
      synonymAntonym: '유사한 생물군을 뜻하는 breed나 type과 함께 외우고, 전체 집합인 genus와 비교해 보세요.',
    }),
    {
      definition: 'A group of living organisms consisting of similar individuals capable of exchanging genes or interbreeding.',
      synonyms: ['breed', 'category', 'class'],
      antonyms: ['genus', 'whole', 'individual'],
      exampleSentences: [
        { en: 'Scientists discovered a rare bird that belongs to a previously unknown group of animals.', ko: '과학자들은 이전에 알려지지 않은 동물 종에 속하는 희귀한 새를 발견했습니다.' },
        { en: 'Many unique plants are currently facing the threat of extinction due to climate change.', ko: '기후 변화로 인해 현재 많은 고유한 생물 종들이 멸종 위기에 처해 있습니다.' },
      ],
    }
  ),
  word('specific', '특정한', 5, 'adjective',
    ['대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인'],
    tips({
      etymology: '라틴어 species(종류, 외관)에서 유래하여, 여러 종류 중 하나를 콕 집어 가리키는 느낌을 줍니다.',
      visual: '수많은 흐릿한 점들 사이에서 단 하나의 점만 밝게 빛나며 강조되는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'스페시픽\'인데, \'숲에 시(詩) 픽(pick)\' - 숲에 있는 수많은 시 중에서 하나를 픽(선택)하는 장면을 떠올리세요.',
      context: '막연하게 \'아무거나\'라고 말하지 말고, 정확히 어떤 모델인지 명시해달라고 할 때 자주 쓰입니다.',
      synonymAntonym: '정확한 것을 뜻하는 precise와 반대되는 개념인 모호한 vague를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'clearly defined or identified; precise and particular rather than general',
      synonyms: ['precise', 'particular', 'definite'],
      antonyms: ['general', 'vague', 'ambiguous'],
      exampleSentences: [
        { en: 'The doctor asked me to describe the location of the pain in a more detailed way.', ko: '의사는 통증의 위치를 더 구체적인 방식으로 설명해 달라고 요청했습니다.' },
        { en: 'Each plant species requires a set of unique environmental conditions to thrive.', ko: '각 식물 종은 번성하기 위해 특정한 일련의 환경 조건을 필요로 합니다.' },
      ],
    }
  ),
  word('spectacle', '광경', 10, 'noun',
    ['사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보'],
    tips({
      etymology: '라틴어 \'spectare(보다)\'에서 유래하여 눈으로 보는 대단한 장면을 뜻합니다.',
      visual: '밤하늘을 가득 채우는 화려한 불꽃놀이 축제의 한 장면을 상상해 보세요.',
      soundAlike: '\'스펙터클\'이라는 외래어로도 자주 쓰이며, 웅장한 영화 화면을 떠올리면 쉽습니다.',
      context: '주로 부정적인 의미의 \'구경거리\'나 긍정적인 \'장관\' 양쪽 모두에 쓰일 수 있습니다.',
      synonymAntonym: '시각적인 전시를 뜻하는 display와 유사하며, 평범함을 뜻하는 ordinariness와 반대됩니다.',
    }),
    {
      definition: 'A visually striking performance or display that is impressive or unusual to watch.',
      synonyms: ['pageant', 'exhibition', 'extravaganza'],
      antonyms: ['ordinariness', 'hiding', 'insignificance'],
      exampleSentences: [
        { en: 'The sunset over the Grand Canyon was a magnificent natural display for all the tourists.', ko: '그랜드 캐니언 너머로 지는 일몰은 모든 관광객들에게 장엄한 자연의 광경이었습니다.' },
        { en: 'He made a public scene by shouting at the waiter in the middle of the crowded restaurant.', ko: '그는 붐비는 식당 한복판에서 웨이터에게 소리를 질러 공공연한 구경거리가 되었습니다.' },
      ],
    }
  ),
  word('spectrum', '스펙트럼', 8, 'noun',
    ['단편', '고정', '단일', '축소', '정체', '파편', '균형', '수렴', '제한', '중단'],
    tips({
      etymology: '라틴어 specere(보다)에서 유래하여 눈으로 볼 수 있는 빛의 범위를 의미하게 되었습니다.',
      visual: '무지개처럼 빨간색부터 보라색까지 부드럽게 이어지는 색의 띠를 상상해 보세요.',
      soundAlike: '스펙(Spec)이 트럼(Trum)처럼 넓게 퍼져 나가는 소리를 연상해 보세요.',
      context: '단순히 빛뿐만 아니라 정치적 성향이나 의견의 넓은 범위를 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '범위를 뜻하는 range와 유사하며, 단일 지점을 뜻하는 point와는 반대됩니다.',
    }),
    {
      definition: 'A broad range of varied but related ideas, objects, or qualities that form a continuous scale.',
      synonyms: ['range', 'gamut', 'span'],
      antonyms: ['point', 'limit', 'extreme'],
      exampleSentences: [
        { en: 'The politician\'s views cover a wide range of the political scale.', ko: '그 정치인의 견해는 정치적 스펙트럼의 넓은 범위를 아우른다.' },
        { en: 'Scientists analyzed the full array of light emitted by the distant star.', ko: '과학자들은 먼 별에서 방출되는 빛의 전체 스펙트럼을 분석했다.' },
      ],
    }
  ),
  word('speech', '연설', 6, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '말하다라는 뜻의 동사 speak의 명사형으로, 입 밖으로 내뱉는 행위 자체를 의미합니다.',
      visual: '수많은 청중 앞에서 마이크를 잡고 단상에 서 있는 정치인의 모습을 상상해 보세요.',
      soundAlike: '스피치(speech)는 스피커(speaker)를 통해 흘러나오는 소리라고 생각하면 쉽습니다.',
      context: '공식적인 자리에서 자신의 의견을 전달하거나 대중을 설득할 때 주로 사용됩니다.',
      synonymAntonym: 'address나 lecture와 비슷하지만, 침묵을 뜻하는 silence와는 정반대 개념입니다.',
    }),
    {
      definition: 'A formal talk or address delivered to an audience to express thoughts or provide information.',
      synonyms: ['address', 'oration', 'lecture'],
      antonyms: ['silence', 'quiet', 'muteness'],
      exampleSentences: [
        { en: 'The president delivered a moving address to the nation about the new policy.', ko: '대통령은 새로운 정책에 대해 국민들에게 감동적인 연설을 했습니다.' },
        { en: 'Public speaking requires a lot of practice to overcome nervousness before a large crowd.', ko: '대중 앞에서 연설하는 것은 많은 군중 앞에서의 긴장감을 극복하기 위해 많은 연습이 필요합니다.' },
      ],
    }
  ),
  word('speed', '속도', 2, 'noun',
    ['거리', '무게', '높이', '방향', '가속', '정지', '시간', '각도', '부피', '밀도'],
    tips({
      etymology: '고대 영어 \'sped\'에서 유래했으며 본래 \'성공\'이나 \'번영\'을 뜻하다가 빠르게 움직이는 상태로 의미가 확장되었습니다.',
      visual: '자동차의 계기판 바늘이 오른쪽으로 빠르게 꺾이며 숫자가 올라가는 모습을 상상하세요.',
      soundAlike: '스케이트보드를 타고 \'스피드\'를 즐기며 쌩쌩 달리는 소리를 연상해 보세요.',
      context: '교통 법규를 지키기 위해 제한 속도를 확인하거나 인터넷 연결 속도를 말할 때 자주 쓰입니다.',
      synonymAntonym: 'velocity와 pace는 비슷한 의미를 가지며, slowness나 delay는 반대되는 개념입니다.',
    }),
    {
      definition: 'The rate at which someone or something moves or operates.',
      synonyms: ['velocity', 'pace', 'tempo'],
      antonyms: ['slowness', 'delay', 'sluggishness'],
      exampleSentences: [
        { en: 'The driver was pulled over by the police for exceeding the limit on the highway.', ko: '운전자는 고속도로에서 제한 속도를 초과하여 경찰에 의해 차를 세워야 했습니다.' },
        { en: 'Modern computers process vast amounts of data at an incredible rate.', ko: '현대적인 컴퓨터는 엄청난 속도로 방대한 양의 데이터를 처리합니다.' },
      ],
    }
  ),
  word('spell', '철자하다', 7, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '고대 프랑스어 \'espeller\'에서 유래했으며, 원래 \'말하다\' 또는 \'설명하다\'라는 의미에서 글자를 하나씩 읽는 것으로 발전했습니다.',
      visual: '칠판에 분필로 알파벳 A, B, C를 하나씩 정성스럽게 적어 내려가는 모습을 상상해 보세요.',
      soundAlike: '\'스펠링\'이라는 외래어로 이미 익숙한 단어이므로, 글자를 조합하는 소리를 연상하면 쉽습니다.',
      context: '이름이나 이메일 주소를 정확히 전달해야 할 때 상대방에게 철자를 불러달라고 요청하는 상황에서 자주 쓰입니다.',
      synonymAntonym: '글자를 나열하는 write와 비슷하지만, 순서에 맞게 구성한다는 점에서 구별되며 반대로는 오타를 내는 misspell이 있습니다.',
    }),
    {
      definition: 'To write or name the letters that form a word in the correct order.',
      synonyms: ['orthographize', 'write', 'letter'],
      antonyms: ['misspell', 'garble', 'scramble'],
      exampleSentences: [
        { en: 'Could you please tell me how to write your last name correctly?', ko: '당신의 성을 어떻게 철자하는지 알려주실 수 있나요?' },
        { en: 'Children often learn to form simple words before they start elementary school.', ko: '아이들은 보통 초등학교에 들어가기 전에 간단한 단어들의 철자를 쓰는 법을 배웁니다.' },
      ],
    }
  ),
  word('spend', '소비하다', 4, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '라틴어 \'expendere\'에서 유래했으며, \'무게를 달아 지불하다\'라는 의미에서 돈이나 시간을 쓰는 것으로 발전했습니다.',
      visual: '지갑에서 지폐가 술술 빠져나가거나, 모래시계의 모래가 아래로 떨어지는 모습을 상상해 보세요.',
      soundAlike: '\'스펜드\'는 \'습관(spend)처럼 돈을 쓴다\'라고 연상하면 기억하기 쉽습니다.',
      context: '주로 돈(money)을 지불하거나 특정 활동에 시간(time)을 할애할 때 가장 자주 쓰이는 동사입니다.',
      synonymAntonym: '돈을 쓰는 것은 \'expend\'이고, 반대로 아끼고 저축하는 것은 \'save\'입니다.',
    }),
    {
      definition: 'To give money as a payment for goods or services, or to use time for a particular purpose.',
      synonyms: ['expend', 'disburse', 'consume'],
      antonyms: ['save', 'earn', 'hoard'],
      exampleSentences: [
        { en: 'Many people prefer to use their vacation days to travel abroad with family.', ko: '많은 사람들은 휴가를 가족과 함께 해외 여행을 하는 데 쓰는 것을 선호합니다.' },
        { en: 'The government decided to allocate more resources to improve public transportation.', ko: '정부는 대중교통 개선을 위해 더 많은 자원을 소비하기로 결정했습니다.' },
      ],
    }
  ),
  word('sphere', '구', 9, 'noun',
    ['삼각형', '사각형', '직선', '평면', '각도', '부피', '면적', '둘레', '곡선', '대각선'],
    tips({
      etymology: '그리스어 \'sphaira\'에서 유래되었으며, 이는 공이나 공 모양의 물체를 의미합니다.',
      visual: '축구공이나 지구본처럼 완벽하게 둥근 입체적인 공 모양을 머릿속에 그려보세요.',
      soundAlike: '\'스피어\'라고 발음되는데, 창(spear)과 발음이 비슷하지만 둥근 모양임을 기억하세요.',
      context: '기하학적인 구체뿐만 아니라 활동이나 지식의 \'영역\'이나 \'범위\'를 뜻할 때도 자주 쓰입니다.',
      synonymAntonym: 'globe나 orb와 비슷한 의미를 가지며, 평면을 뜻하는 plane과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A solid geometric figure where every point on the surface is equidistant from the center.',
      synonyms: ['globe', 'orb', 'ball'],
      antonyms: ['cube', 'square', 'plane'],
      exampleSentences: [
        { en: 'The earth is not a perfect sphere because it bulges slightly at the equator.', ko: '지구는 적도 부분이 약간 불룩하기 때문에 완벽한 구형은 아닙니다.' },
        { en: 'This new discovery falls outside my professional sphere of expertise.', ko: '이 새로운 발견은 나의 전문적인 지식 영역 밖에 있습니다.' },
      ],
    }
  ),
  word('spill', '엎지르다', 10, 'verb',
    ['채우다', '닦다', '던지다', '숨기다', '고치다', '마시다', '섞다', '얼리다', '태우다', '자르다'],
    tips({
      etymology: '고대 영어 \'spillan\'에서 유래했으며 본래 \'죽이다\'나 \'파괴하다\'라는 뜻이었으나 시간이 흐르며 액체를 흘려 낭비한다는 의미로 변했습니다.',
      visual: '가득 찬 컵을 실수로 쳐서 바닥에 우유가 하얗게 번져나가는 장면을 상상해 보세요.',
      soundAlike: '\'수필(spill)\'을 쓰다가 잉크를 종이에 엎지르는 상황을 연상하면 발음과 뜻을 쉽게 연결할 수 있습니다.',
      context: '주로 액체나 가루 형태의 물질이 의도치 않게 용기 밖으로 흘러나왔을 때 사용하며, 비밀을 누설할 때도 비유적으로 쓰입니다.',
      synonymAntonym: '무언가를 쏟는 것은 leak라고 하며, 반대로 쏟아지지 않게 잘 담고 있는 것은 contain이라고 합니다.',
    }),
    {
      definition: 'To cause or allow liquid to flow over the edge of its container accidentally.',
      synonyms: ['overflow', 'slosh', 'splatter'],
      antonyms: ['contain', 'hold', 'collect'],
      exampleSentences: [
        { en: 'Be careful not to spill your coffee on the keyboard while working.', ko: '작업하는 동안 키보드에 커피를 엎지르지 않도록 조심하세요.' },
        { en: 'The child accidentally spilled milk all over the kitchen table.', ko: '아이가 실수로 주방 테이블 전체에 우유를 엎질렀습니다.' },
      ],
    }
  ),
  word('spin', '회전하다', 5, 'verb',
    ['멈추다', '정지하다', '고정하다', '늦추다', '걷다', '눕다', '쉬다', '기다리다', '서다', '앉다'],
    tips({
      etymology: '고대 영어 spinnan에서 유래하여 빙글빙글 돌아가는 동작을 의미합니다.',
      visual: '피겨 스케이팅 선수가 빙판 위에서 빙글빙글 빠르게 회전하는 모습을 상상해보세요.',
      soundAlike: '스핀(spin)하면 피겨 스케이팅의 회전이 바로 떠오릅니다. 축을 중심으로 빠르게 도는 동작입니다.',
      context: '세탁기의 탈수 과정, 팽이 놀이, 피겨 스케이팅 등 빠르게 회전하는 모든 상황에서 쓰입니다.',
      synonymAntonym: '빠르게 도는 것을 뜻하는 rotate, whirl과 비슷하며, 멈추는 것을 뜻하는 stop과 반대됩니다.',
    }),
    {
      definition: 'To turn or cause to turn around a central point repeatedly and quickly.',
      synonyms: ['rotate', 'whirl', 'twirl'],
      antonyms: ['stop', 'halt', 'stand still'],
      exampleSentences: [
        { en: 'The figure skater began to spin faster and faster on the ice.', ko: '피겨 스케이팅 선수가 빙판 위에서 점점 더 빠르게 회전하기 시작했습니다.' },
        { en: 'The washing machine started to spin rapidly during the final cycle.', ko: '세탁기가 마지막 탈수 과정에서 빠르게 회전하기 시작했습니다.' },
      ],
    }
  ),
  word('spirit', '정신', 6, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '라틴어 \'spiritus\'에서 유래했으며 원래 \'숨(breath)\'을 의미합니다. 생명력의 근원을 뜻하게 되었습니다.',
      visual: '몸 밖으로 투명하고 밝게 빛나는 영혼의 형체나 뜨겁게 타오르는 열정의 불꽃을 상상해 보세요.',
      soundAlike: '\'스피릿\'은 \'스피드(speed)\'와 비슷하게 들리기도 합니다. 정신을 바짝 차리고 빠르게 움직이는 모습을 연상하세요.',
      context: '단순히 유령을 뜻하기도 하지만, 팀워크나 예술가의 혼, 혹은 법의 근본적인 취지를 말할 때 자주 쓰입니다.',
      synonymAntonym: 'soul이나 mind와 비슷하지만, body나 matter 같은 물리적인 실체와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The non-physical part of a person which is the seat of emotions and character; the soul.',
      synonyms: ['soul', 'psyche', 'essence'],
      antonyms: ['body', 'flesh', 'matter'],
      exampleSentences: [
        { en: 'The team showed a great competitive drive and a winning attitude throughout the tournament.', ko: '그 팀은 토너먼트 내내 훌륭한 경쟁 정신과 승부욕을 보여주었습니다.' },
        { en: 'Although he is no longer with us, his creative energy lives on in his beautiful paintings.', ko: '비록 그는 더 이상 우리 곁에 없지만, 그의 예술적 혼은 아름다운 그림들 속에 살아있습니다.' },
      ],
    }
  ),
  word('spit', '침을 뱉다', 8, 'verb',
    ['땀', '눈물', '콧물', '혈액', '소변', '먼지', '거품', '점액', '수분', '증기'],
    tips({
      etymology: '고대 영어 \'spittan\'에서 유래했으며, 입 밖으로 무언가를 강하게 내뱉는 소리를 흉내 낸 의성어적 성격이 강합니다.',
      visual: '운동선수가 경기 중 바닥에 침을 뱉거나, 입안에 고인 액체를 밖으로 내보내는 모습을 상상해 보세요.',
      soundAlike: '\'스핏\' 발음이 무언가를 \'퉤\' 하고 뱉을 때 나는 날카로운 소리와 비슷하다고 생각하면 기억하기 쉽습니다.',
      context: '의학적인 상황에서는 saliva라는 단어를 더 자주 쓰지만, 일상생활이나 무례한 행동을 묘사할 때는 이 단어가 주로 쓰입니다.',
      synonymAntonym: '침을 뜻하는 saliva와 유사하지만, 뱉는 행위 자체에 집중하며 건조함을 뜻하는 dryness와 대비됩니다.',
    }),
    {
      definition: 'To forcefully eject saliva or another substance from the mouth.',
      synonyms: ['expectorate', 'spew', 'discharge'],
      antonyms: ['swallow', 'ingest', 'absorb'],
      exampleSentences: [
        { en: 'The runner paused to spit on the ground before continuing the race.', ko: '달리기 선수는 경주를 계속하기 전에 잠시 멈춰 바닥에 침을 뱉었습니다.' },
        { en: 'The child tasted the bitter medicine and immediately tried to spit it out.', ko: '아이는 쓴 약을 맛보자마자 즉시 뱉어내려고 했습니다.' },
      ],
    }
  ),
  word('spite', '악의', 9, 'noun',
    ['친절', '관용', '자비', '호의', '존경', '협력', '평화', '우정', '배려', '칭찬'],
    tips({
      etymology: '라틴어 despectus에서 유래하여 \'내려다보다\' 혹은 \'경멸하다\'라는 의미가 담겨 있습니다.',
      visual: '누군가 잘되는 것을 방해하려고 일부러 발을 내미는 심술궂은 표정을 상상해 보세요.',
      soundAlike: '사이다 음료인 \'Sprite\'와 발음이 비슷하지만, 청량함 대신 톡 쏘는 \'독설\'이나 \'심술\'을 부리는 상황을 연결하세요.',
      context: '주로 \'in spite of\'라는 숙어로 자주 쓰이지만, 명사로는 타인을 해치려는 고의적인 마음을 뜻합니다.',
      synonymAntonym: '남을 해치려는 malice와 비슷하며, 반대로 남을 도우려는 benevolence와는 정반대입니다.',
    }),
    {
      definition: 'A desire to hurt, annoy, or offend someone, often arising from a feeling of resentment.',
      synonyms: ['malice', 'animosity', 'venom'],
      antonyms: ['benevolence', 'goodwill', 'kindness'],
      exampleSentences: [
        { en: 'He broke his sister\'s favorite toy out of pure spite after their argument.', ko: '그는 말다툼을 한 뒤 순전히 악의를 품고 누나가 가장 아끼는 장난감을 부쉈다.' },
        { en: 'The neighbor refused to trim the hedge just to spite the family next door.', ko: '이웃집 사람은 옆집 가족을 괴롭히려는 마음에서 울타리 다듬기를 거부했다.' },
      ],
    }
  ),
  word('splash', '튀기다', 10, 'verb',
    ['물방울', '파도', '강물', '소리', '바닥', '그림자', '먼지', '조각', '거품', '안개'],
    tips({
      etymology: '물이 튀는 소리를 흉내 낸 의성어에서 유래하여 액체가 흩뿌려지는 동작을 나타냅니다.',
      visual: '웅덩이에 돌을 던졌을 때 사방으로 물줄기가 솟구치는 장면을 상상해 보세요.',
      soundAlike: '발음할 때 \'스플래시\'라고 하면 물이 \'철퍽\' 하고 튀는 느낌과 비슷합니다.',
      context: '수영장에서 다이빙을 하거나 비 오는 날 차가 지나갈 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'spatter와 유사하며, 정지 상태를 뜻하는 stillness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To cause liquid to fly about in drops or scatter upon impact with a surface.',
      synonyms: ['spatter', 'splatter', 'spray'],
      antonyms: ['dry', 'absorb', 'collect'],
      exampleSentences: [
        { en: 'The children love to splash water at each other in the swimming pool.', ko: '아이들은 수영장에서 서로에게 물을 튀기는 것을 좋아합니다.' },
        { en: 'A passing car splashed muddy water all over the pedestrians on the sidewalk.', ko: '지나가던 차가 보도의 보행자들에게 진흙탕 물을 튀겼습니다.' },
      ],
    }
  ),
  word('split', '쪼개다', 8, 'verb',
    ['결합', '융합', '통합', '연결', '고정', '부착', '조립', '수집', '보존', '유지'],
    tips({
      etymology: '네덜란드어 \'splitten\'에서 유래하여 무언가를 날카롭게 가르거나 나누는 동작을 의미합니다.',
      visual: '잘 익은 수박 한가운데에 칼을 대자마자 양옆으로 쩍 갈라지는 모습을 상상해 보세요.',
      soundAlike: '\'스플릿\'은 볼링에서 핀들이 양옆으로 멀리 떨어져 남은 상황을 떠올리면 쉽습니다.',
      context: '수익을 배분하거나, 장작을 패거나, 연인과 헤어지는 상황 등 \'나눔\'이 필요한 모든 곳에 쓰입니다.',
      synonymAntonym: '나누는 것은 division, 하나로 합치는 것은 unification이라고 합니다.',
    }),
    {
      definition: 'To break or cause to break forcibly into parts, especially into halves or along a natural line.',
      synonyms: ['divide', 'cleave', 'sever'],
      antonyms: ['unite', 'merge', 'combine'],
      exampleSentences: [
        { en: 'He used an axe to split the firewood into smaller pieces for the campfire.', ko: '그는 캠프파이어를 위해 도끼로 장작을 작은 조각으로 쪼갰습니다.' },
        { en: 'The couple decided to split the bill equally at the restaurant.', ko: '커플은 식당에서 계산서를 균등하게 나누기로 결정했습니다.' },
      ],
    }
  ),
  word('spoil', '망쳐놓다', 7, 'verb',
    ['보존하다', '개선하다', '수리하다', '창조하다', '정돈하다', '보호하다', '강화하다', '유지하다', '건설하다', '회복하다'],
    tips({
      etymology: '라틴어 \'spoliare\'에서 유래되었으며, 원래는 전쟁에서 전리품을 빼앗아 엉망으로 만드는 행위를 의미했습니다.',
      visual: '정성껏 만든 케이크 위에 누군가 실수로 뜨거운 커피를 쏟아 모양이 뭉개지는 장면을 상상해 보세요.',
      soundAlike: '\'수포(spoil)로 돌아가다\'의 \'수포\'와 발음이 비슷하다고 생각하면 무언가 망쳐졌을 때의 상황이 잘 떠오릅니다.',
      context: '음식이 상하거나 아이를 너무 오냐오냐 키워 성격을 버려놓을 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: '무언가를 망치는 ruin과 반대로 소중히 가꾸고 보존하는 preserve를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to diminish or destroy the value, quality, or pleasure of something',
      synonyms: ['ruin', 'damage', 'mar'],
      antonyms: ['improve', 'enhance', 'preserve'],
      exampleSentences: [
        { en: 'The sudden rain shower threatened to ruin the outdoor wedding reception.', ko: '갑작스러운 소나기가 야외 결혼 피로연을 망쳐놓을 기세였다.' },
        { en: 'Grandparents often tend to indulge their grandchildren with too many gifts and sweets.', ko: '조부모님들은 종종 너무 많은 선물과 사탕으로 손주들의 버릇을 망쳐놓곤 한다.' },
      ],
    }
  ),
  word('spoon', '숟가락', 3, 'noun',
    ['포크', '나이프', '접시', '냄비', '국자', '식탁', '빨대', '컵', '쟁반', '도마'],
    tips({
      etymology: '고대 영어 \'spon\'에서 유래했으며, 원래는 \'나무 조각\'이나 \'칩\'을 의미했습니다. 옛날에는 나무를 깎아 도구를 만들었기 때문입니다.',
      visual: '동그란 머리 부분에 긴 손잡이가 달린 모습을 상상해 보세요. 국물 요리를 떠먹는 장면을 떠올리면 쉽습니다.',
      soundAlike: '\'스푼\'이라고 발음하며, 한국어에서도 아이스크림이나 커피를 저을 때 쓰는 도구로 이미 익숙한 발음입니다.',
      context: '주로 식사 예절이나 요리법을 설명할 때 자주 등장하며, 설탕이나 소금의 양을 재는 단위로도 쓰입니다.',
      synonymAntonym: '국자와 같은 큰 도구인 ladle과 비슷하지만, 포크나 칼처럼 찌르거나 자르는 도구와는 대조적입니다.',
    }),
    {
      definition: 'An implement consisting of a small, shallow oval or round bowl on a long handle, used for eating, stirring, or serving food.',
      synonyms: ['ladle', 'scoop', 'utensil'],
      antonyms: ['fork', 'knife', 'skewer'],
      exampleSentences: [
        { en: 'She used a silver tool to stir the sugar into her hot tea.', ko: '그녀는 뜨거운 차에 설탕을 젓기 위해 은색 도구를 사용했습니다.' },
        { en: 'A small wooden implement was placed next to the soup bowl.', ko: '작은 나무 도구가 수프 그릇 옆에 놓여 있었습니다.' },
      ],
    }
  ),
  word('spot', '장소', 4, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '작은 점(dot)이나 얼룩을 의미하던 고대 노르웨이어에서 유래하여, 특정 지점이나 장소를 가리키게 되었습니다.',
      visual: '지도 위에 빨간색 핀이 콕 찍혀 있는 특정 지점을 상상해 보세요.',
      soundAlike: '스포트라이트(spotlight)가 무대 위 한 \'장소\'를 집중적으로 비추는 모습을 연상하세요.',
      context: '주로 소풍 가기 좋은 장소나 주차 공간처럼 구체적인 지점을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'place와 유사하지만 더 좁고 구체적인 지점을 뜻하며, 넓은 영역을 뜻하는 area와는 대조적입니다.',
    }),
    {
      definition: 'A particular place, point, or position in space.',
      synonyms: ['location', 'site', 'position'],
      antonyms: ['whole', 'entirety', 'expanse'],
      exampleSentences: [
        { en: 'We found a perfect shady area for our picnic near the lake.', ko: '우리는 호수 근처에서 소풍을 즐기기에 완벽하고 그늘진 장소를 찾았습니다.' },
        { en: 'There is a small parking space available right in front of the building.', ko: '건물 바로 앞에 주차할 수 있는 작은 장소가 하나 있습니다.' },
      ],
    }
  ),
  word('spouse', '배우자', 9, 'noun',
    ['자녀', '부모', '형제', '사촌', '동료', '이웃', '친구', '조카', '상사', '후배'],
    tips({
      etymology: '라틴어 sponsus(약속된 사람)에서 유래하여 결혼을 통해 맺어진 동반자를 의미합니다.',
      visual: '결혼식장에서 서로 손을 맞잡고 서 있는 신랑과 신부의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'스파우스\'이므로, \'슈퍼 하우스\'에서 함께 사는 사람이라고 연상해 보세요.',
      context: '공식적인 서류나 법적 문서에서 남편이나 아내를 통칭할 때 주로 사용됩니다.',
      synonymAntonym: 'partner와 유사하지만 더 격식 있는 표현이며, 독신을 뜻하는 single과 대조됩니다.',
    }),
    {
      definition: 'A person\'s husband or wife, considered in relation to their partner.',
      synonyms: ['partner', 'companion', 'mate'],
      antonyms: ['stranger', 'enemy', 'rival'],
      exampleSentences: [
        { en: 'Employees are encouraged to bring their spouse to the annual holiday party.', ko: '직원들은 연례 연휴 파티에 배우자를 동반하도록 권장됩니다.' },
        { en: 'The insurance policy provides comprehensive coverage for both the policyholder and their spouse.', ko: '해당 보험은 보험 가입자와 그 배우자 모두에게 포괄적인 보장을 제공합니다.' },
      ],
    }
  ),
  word('spread', '펴다', 5, 'verb',
    ['상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미'],
    tips({
      etymology: '게르만어권에서 유래하여 \'흩뿌리다\' 혹은 \'확장하다\'라는 의미를 담고 있습니다.',
      visual: '식탁보를 양옆으로 넓게 펼치거나 빵 위에 잼을 얇고 넓게 바르는 모습을 상상하세요.',
      soundAlike: '스프레이(spray)를 뿌리면 입자가 넓게 퍼져나가는 것과 발음이 비슷합니다.',
      context: '음식의 가짓수가 많을 때나 질병이 확산될 때, 혹은 정보가 퍼질 때 자주 쓰입니다.',
      synonymAntonym: '확장을 뜻하는 expansion과 반대로 축소를 뜻하는 reduction을 함께 기억하세요.',
    }),
    {
      definition: 'An instance of opening or stretching something out to its full width or extent.',
      synonyms: ['expansion', 'extension', 'stretch'],
      antonyms: ['reduction', 'compression', 'contraction'],
      exampleSentences: [
        { en: 'The hotel offered a lavish breakfast with a wide variety of dishes.', ko: '그 호텔은 아주 다양한 요리가 차려진 호화로운 아침 식사를 제공했습니다.' },
        { en: 'Scientists are monitoring the rapid increase of the virus across the continent.', ko: '과학자들은 대륙 전역에 걸친 바이러스의 급격한 확산을 감시하고 있습니다.' },
      ],
    }
  ),
  word('square', '정사각형의', 6, 'adjective',
    ['삼각형의', '둥근', '타원형의', '직사각형의', '불규칙한', '뾰족한', '평평한', '구부러진', '나선형의', '입체적인'],
    tips({
      etymology: '라틴어 \'quadra\'에서 유래하여 숫자 4를 의미하며, 네 변이 같은 도형을 뜻하게 되었습니다.',
      visual: '네 변의 길이가 모두 똑같고 각 모서리가 직각인 완벽한 타일 모양을 상상해 보세요.',
      soundAlike: '스케이트보드 광장(Square) 바닥에 깔린 네모난 보도블록 소리를 연상해 보세요.',
      context: '수학 문제에서 면적을 구할 때나 가구의 상판 모양을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '네모듯한 \'quadrilateral\'과 비슷하지만, 둥근 \'round\'와는 정반대의 형태입니다.',
    }),
    {
      definition: 'having four equal sides and four right angles at the corners',
      synonyms: ['quadrate', 'equilateral', 'rectangular'],
      antonyms: ['round', 'circular', 'curved'],
      exampleSentences: [
        { en: 'The baker cut the brownies into small pieces so everyone could have a taste.', ko: '제빵사는 모든 사람이 맛볼 수 있도록 브라우니를 작은 정사각형 조각으로 잘랐습니다.' },
        { en: 'A large wooden table sits in the middle of the dining room to accommodate eight guests.', ko: '8명의 손님을 수용하기 위해 다이닝룸 중앙에 커다란 정사각형 나무 탁자가 놓여 있습니다.' },
      ],
    }
  ),
  word('squeeze', '압착하다', 7, 'verb',
    ['팽창하다', '방출하다', '확대하다', '느슨하게하다', '분산시키다', '흡수하다', '보존하다', '관찰하다', '무시하다', '연장하다'],
    tips({
      etymology: '중세 영어 \'queisen\'에서 유래하여 강하게 누르거나 압박한다는 의미를 담고 있습니다.',
      visual: '레몬즙을 짜기 위해 손에 힘을 꽉 주어 과일을 비트는 모습을 상상해 보세요.',
      soundAlike: '\'스퀴즈\' 발음이 무언가를 꽉 쥐었을 때 나는 찌그러지는 소리와 비슷하다고 느껴보세요.',
      context: '좁은 틈새를 통과하거나 꽉 찬 일정 사이에 시간을 내는 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'compress는 물리적인 압축을 뜻하고, release는 꽉 쥐었던 것을 놓아주는 반대 행동입니다.',
    }),
    {
      definition: 'To firmly press something from opposite sides typically to extract liquid or to fit into a tight space.',
      synonyms: ['compress', 'clench', 'constrict'],
      antonyms: ['release', 'expand', 'loosen'],
      exampleSentences: [
        { en: 'Fresh orange juice tastes much better if you extract it by hand.', ko: '손으로 직접 짜서 만든 신선한 오렌지 주스는 맛이 훨씬 더 좋습니다.' },
        { en: 'The commuters tried to push themselves into the crowded subway train during rush hour.', ko: '통근자들은 출퇴근 시간대에 혼잡한 지하철 안으로 몸을 밀어 넣으려 애썼습니다.' },
      ],
    }
  ),
  word('stable', '안정된', 4, 'adjective',
    ['불안정한', '일시적인', '변덕스러운', '위태로운', '유동적인', '혼란스러운', '급격한', '취약한', '불확실한', '가변적인'],
    tips({
      etymology: '라틴어 \'stare(서 있다)\'에서 유래하여, 흔들림 없이 똑바로 서 있는 상태를 의미합니다.',
      visual: '거센 바람이 불어도 끄떡없이 제자리를 지키고 있는 튼튼한 건물을 상상해 보세요.',
      soundAlike: '\'스테이블\'은 \'스테이(Stay)\'와 발음이 비슷하므로, 한곳에 머물러 변하지 않는 느낌으로 기억하세요.',
      context: '경제 지표나 환율이 큰 변동 없이 일정하게 유지될 때 자주 사용되는 표현입니다.',
      synonymAntonym: 'steady와 유의어 관계이며, 반대로 수시로 변하는 것은 unstable이라고 합니다.',
    }),
    {
      definition: 'Firmly established and not likely to change, fail, or move suddenly.',
      synonyms: ['steady', 'constant', 'secure'],
      antonyms: ['unsteady', 'volatile', 'shaky'],
      exampleSentences: [
        { en: 'The patient\'s condition remains firm and shows no signs of worsening after the surgery.', ko: '수술 후 환자의 상태는 안정적이며 악화될 기미가 보이지 않습니다.' },
        { en: 'Investors prefer a predictable market environment where prices do not fluctuate wildly.', ko: '투자자들은 가격이 심하게 요동치지 않는 안정적인 시장 환경을 선호합니다.' },
      ],
    }
  ),
  word('stack', '더미', 10, 'noun',
    ['상자', '기둥', '울타리', '창고', '바구니', '그물', '선반', '자루', '수레', '가방'],
    tips({
      etymology: '고대 노르웨이어 \'stakkr\'에서 유래하여 물건을 차곡차곡 쌓아 올린 더미를 의미합니다.',
      visual: '책상 위에 책이 높이 차곡차곡 쌓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'스택\'은 \'쓱 턱\' 하고 물건을 차곡차곡 쌓아 올리는 소리와 비슷하게 들립니다.',
      context: '책, 접시, 서류 등 물건을 겹겹이 쌓아 올린 더미를 가리킬 때 사용합니다.',
      synonymAntonym: '무더기를 뜻하는 pile과 비슷하며, 흩어짐을 뜻하는 scatter와 반대됩니다.',
    }),
    {
      definition: 'A neat pile of objects arranged one on top of another.',
      synonyms: ['pile', 'heap', 'mound'],
      antonyms: ['scattering', 'disarray', 'fragment'],
      exampleSentences: [
        { en: 'There was a tall stack of books on his desk that he needed to read.', ko: '그의 책상 위에 읽어야 할 책 더미가 높이 쌓여 있었습니다.' },
        { en: 'She placed the clean plates in a neat stack inside the cupboard.', ko: '그녀는 깨끗한 접시들을 찬장 안에 깔끔한 더미로 정리했습니다.' },
      ],
    }
  ),
  word('stage', '무대', 5, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '라틴어 stare(서다)에서 유래하여 배우가 서 있는 장소를 의미하게 되었습니다.',
      visual: '화려한 조명이 비추고 관객들이 바라보는 높은 플랫폼을 상상해 보세요.',
      soundAlike: '스테이지는 \'스테이크\'와 발음이 비슷하죠? 무대 위에서 스테이크를 먹는 연극을 상상해 보세요.',
      context: '연극이나 콘서트뿐만 아니라 인생의 특정 시기나 프로젝트의 단계를 나타낼 때도 쓰입니다.',
      synonymAntonym: 'platform이나 phase와 비슷하며, 관객석을 뜻하는 audience area와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A raised floor or platform or area in a theater on which actors, entertainers, or speakers perform.',
      synonyms: ['platform', 'podium', 'arena'],
      antonyms: ['backstage', 'audience', 'offstage'],
      exampleSentences: [
        { en: 'The lead singer walked onto the platform and waved to the cheering crowd.', ko: '리드 보컬이 무대로 걸어 나와 환호하는 군중에게 손을 흔들었습니다.' },
        { en: 'Every actor felt a bit nervous before stepping out for the opening scene.', ko: '모든 배우는 첫 장면을 위해 무대로 나서기 전 약간의 긴장감을 느꼈습니다.' },
      ],
    }
  ),
  word('stain', '더럽히다', 6, 'verb',
    ['청결', '세탁', '광택', '투명', '순수', '보호', '장식', '수리', '복구', '정화'],
    tips({
      etymology: '라틴어 \'distingere\'에서 유래하여 색을 입히거나 변색시킨다는 의미에서 \'얼룩\'으로 발전했습니다.',
      visual: '흰 셔츠에 붉은 와인 한 방울이 떨어져 번지는 모습을 상상해 보세요.',
      soundAlike: '\'스테인\'리스(Stainless) 그릇은 \'얼룩(stain)이 없다(less)\'는 뜻임을 기억하면 쉽습니다.',
      context: '커피 자국이나 잉크 얼룩 같은 물리적 오염뿐만 아니라 명예를 더럽히는 비유적 표현으로도 쓰입니다.',
      synonymAntonym: '깨끗한 상태인 purity와 반대되며, 비슷한 느낌의 mark나 spot과 함께 묶어서 외우세요.',
    }),
    {
      definition: 'To mark or discolor something with a substance that is difficult to remove.',
      synonyms: ['discolor', 'blemish', 'tarnish'],
      antonyms: ['clean', 'purify', 'bleach'],
      exampleSentences: [
        { en: 'Red wine can easily stain a white tablecloth if not cleaned immediately.', ko: '레드 와인은 즉시 닦지 않으면 흰 식탁보를 쉽게 더럽힐 수 있습니다.' },
        { en: 'The scandal threatened to stain the politician\'s reputation permanently.', ko: '그 스캔들은 정치인의 명성을 영구적으로 더럽힐 위험이 있었습니다.' },
      ],
    }
  ),
  word('stairs', '계단', 7, 'noun',
    ['엘리베이터', '복도', '지붕', '창문', '현관', '마루', '벽지', '기둥', '천장', '난간'],
    tips({
      etymology: '고대 영어 \'stæger\'에서 유래했으며, \'오르다\'라는 의미의 어근을 포함하고 있어 위층으로 올라가는 수단을 뜻합니다.',
      visual: '건물 내부에서 지그재그 모양으로 층과 층 사이를 잇고 있는 나무나 대리석 발판들을 상상해 보세요.',
      soundAlike: '쳐다보다라는 뜻의 \'stare\'와 발음이 같습니다. 계단을 오를 때 발밑을 뚫어지게 쳐다보는 모습을 연상하세요.',
      context: '주로 복수형인 \'stairs\'로 쓰이며, 엘리베이터가 고장 났을 때 우리가 대신 이용해야 하는 신체적 통로입니다.',
      synonymAntonym: '비슷한 구조물인 staircase와 함께 외우고, 평평한 바닥을 뜻하는 floor와 대조하여 기억하세요.',
    }),
    {
      definition: 'A set of steps leading from one floor of a building to another, typically located inside.',
      synonyms: ['staircase', 'stairway', 'steps'],
      antonyms: ['elevator', 'escalator', 'flat ground'],
      exampleSentences: [
        { en: 'The young boy ran up the wooden steps to his bedroom on the second floor.', ko: '어린 소년은 2층에 있는 자신의 침실로 가기 위해 나무 계단을 뛰어 올라갔다.' },
        { en: 'Taking the vertical path instead of the lift is a great way to get some daily exercise.', ko: '엘리베이터 대신 계단을 이용하는 것은 일상적인 운동을 하는 좋은 방법이다.' },
      ],
    }
  ),
  word('stamp', '도장', 4, 'noun',
    ['편지', '잉크', '서명', '종이', '봉투', '우체국', '기록', '증명', '낙인', '자국'],
    tips({
      etymology: '발로 밟다라는 뜻의 고대 게르만어에서 유래하여 무언가를 꾹 눌러 자국을 남기는 도구라는 의미로 확장되었습니다.',
      visual: '인감도장에 빨간 인주를 묻혀 서류 위에 강하게 꾹 누르는 모습을 상상해 보세요.',
      soundAlike: '스탬프 투어를 할 때 종이에 도장을 쾅 찍는 소리를 연상하며 발음해 보세요.',
      context: '공식 문서의 승인을 나타내거나 우편 요금을 지불했음을 증명할 때 주로 사용됩니다.',
      synonymAntonym: 'seal이나 mark와 비슷하게 쓰이지만, 공백을 뜻하는 blank와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small tool with a carved design used for imprinting a mark or pattern onto a surface.',
      synonyms: ['seal', 'imprint', 'die'],
      antonyms: ['blank', 'void', 'erasure'],
      exampleSentences: [
        { en: 'The officer pressed the official seal onto the document to verify its authenticity.', ko: '담당관은 서류의 진위 여부를 확인하기 위해 공식 도장을 찍었습니다.' },
        { en: 'Collectors often look for rare designs that were used on vintage envelopes.', ko: '수집가들은 종종 오래된 봉투에 사용된 희귀한 도장 문양을 찾습니다.' },
      ],
    }
  ),
  word('stand', '서다', 1, 'verb',
    ['앉다', '눕다', '달리다', '걷다', '뛰다', '기다리다', '먹다', '자다', '읽다', '쓰다'],
    tips({
      etymology: '고대 영어 \'standan\'에서 유래하여 \'고정된 위치에 똑바로 있다\'는 의미를 가집니다.',
      visual: '버스 정류장에서 두 발로 똑바로 서서 버스를 기다리는 사람의 모습을 상상하세요.',
      soundAlike: '스탠드 조명을 떠올려 보세요. 책상 위에 세워두고 사용하는 전등을 우리는 스탠드라고 부릅니다.',
      context: '물리적으로 서 있는 자세뿐만 아니라 특정 입장을 취하거나 참을 수 있다는 의미로도 쓰입니다.',
      synonymAntonym: 'rise(일어서다)와 비슷하며, sit(앉다)과 반대되는 개념입니다.',
    }),
    {
      definition: 'To be in an upright position on one\'s feet, or to rise to an upright position.',
      synonyms: ['rise', 'get up', 'be upright'],
      antonyms: ['sit', 'lie', 'recline'],
      exampleSentences: [
        { en: 'Please stand when the judge enters the courtroom.', ko: '판사가 법정에 들어올 때 일어서 주세요.' },
        { en: 'She had to stand in line for over an hour to buy concert tickets.', ko: '그녀는 콘서트 티켓을 사기 위해 한 시간 넘게 줄을 서야 했습니다.' },
      ],
    }
  ),
  word('standard', '표준', 5, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '고대 프랑스어 estandart에서 유래하여, 군대에서 집결지로 삼던 \'깃발\'이나 \'표식\'을 의미하던 것이 오늘날의 기준이라는 뜻이 되었습니다.',
      visual: 'KS 마크나 ISO 인증 마크처럼 제품의 품질을 보증하는 공식적인 도장을 상상해 보세요.',
      soundAlike: '스탠다드(Standard)는 \'서 있다(Stand)\'와 비슷하게 들립니다. 모두가 그 자리에 똑같이 서 있어야 하는 기준선을 떠올려 보세요.',
      context: '호텔의 가장 기본 객실을 \'스탠다드 룸\'이라고 부르는 것처럼, 가장 일반적이고 평균적인 수준을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'criterion(기준)과 유사하며, 예외를 뜻하는 exception과는 반대되는 개념으로 기억하면 쉽습니다.',
    }),
    {
      definition: 'a level of quality or attainment that is considered acceptable or desirable as a basis for comparison',
      synonyms: ['criterion', 'benchmark', 'norm'],
      antonyms: ['exception', 'abnormality', 'deviation'],
      exampleSentences: [
        { en: 'The safety regulations must meet the highest international requirements to ensure public protection.', ko: '공공의 보호를 보장하기 위해 안전 규정은 반드시 가장 높은 국제적 기준을 충족해야 합니다.' },
        { en: 'Every employee is expected to maintain a professional level of conduct while representing the company.', ko: '모든 직원은 회사를 대표하는 동안 전문적인 행동 수준을 유지할 것으로 기대됩니다.' },
      ],
    }
  ),
  word('stare', '응시하다', 6, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다'],
    tips({
      etymology: '고대 영어 \'starian\'에서 유래했으며, 이는 \'딱딱하게 굳다\'라는 의미를 포함하고 있어 눈이 고정된 상태를 묘사합니다.',
      visual: '깜빡임도 없이 눈을 크게 뜨고 한 곳만을 뚫어지게 쳐다보는 사람의 얼굴을 상상해 보세요.',
      soundAlike: '계단을 뜻하는 \'stair\'와 발음이 같습니다. 계단 끝에 서서 아래를 빤히 쳐다보는 장면을 연상하세요.',
      context: '무례하게 느껴질 정도로 오래 쳐다보거나, 너무 놀라거나 넋이 나갔을 때 주로 사용되는 표현입니다.',
      synonymAntonym: '단순히 보는 look보다 강도가 세며, 힐끗 보는 glance와는 정반대의 개념입니다.',
    }),
    {
      definition: 'To look directly at someone or something for a long time without moving the eyes, often due to surprise, fear, or rudeness.',
      synonyms: ['gaze', 'glare', 'gawk'],
      antonyms: ['glance', 'glimpse', 'ignore'],
      exampleSentences: [
        { en: 'It is considered impolite to look at strangers with such a fixed and intense expression.', ko: '낯선 사람을 그렇게 빤히 응시하는 것은 무례한 일로 여겨집니다.' },
        { en: 'The child continued to watch the colorful fish in the aquarium with wide, curious eyes.', ko: '아이는 수족관 속의 알록달록한 물고기들을 호기심 가득한 눈으로 계속해서 응시했습니다.' },
      ],
    }
  ),
  word('start', '시작하다', 2, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '고대 영어 \'styrtan\'에서 유래하여 갑자기 움직이거나 튀어나오는 동작에서 \'시작\'의 의미로 발전했습니다.',
      visual: '경주용 자동차가 출발 신호와 함께 타이어 연기를 내뿜으며 달려 나가는 모습을 상상하세요.',
      soundAlike: '\'스타트\' 버튼을 누르면 기계가 작동하기 시작하는 소리를 연상해 보세요.',
      context: '새로운 프로젝트, 하루의 일과, 혹은 기계의 작동을 처음으로 실행할 때 주로 사용됩니다.',
      synonymAntonym: '무언가를 개시하는 begin과 끝내는 finish를 짝지어 기억하면 효율적입니다.',
    }),
    {
      definition: 'to begin doing something or to cause an event or process to happen',
      synonyms: ['begin', 'commence', 'launch'],
      antonyms: ['finish', 'end', 'stop'],
      exampleSentences: [
        { en: 'The marathon runners will begin their long race at exactly eight o\'clock tomorrow morning.', ko: '마라톤 선수들은 내일 아침 정확히 8시에 긴 경주를 시작할 것입니다.' },
        { en: 'Pressing the green button on the control panel will activate the entire assembly line.', ko: '제어판의 초록색 버튼을 누르면 전체 조립 라인이 가동되기 시작합니다.' },
      ],
    }
  ),
  word('starve', '굶주리다', 8, 'verb',
    ['배부르다', '풍족하다', '성장하다', '공급하다', '저장하다', '낭비하다', '소비하다', '수확하다', '요리하다', '식사하다'],
    tips({
      etymology: '고대 영어 \'steorfan\'(죽다)에서 유래하여, 현대에는 음식 부족으로 고통받는 의미로 굳어졌습니다.',
      visual: '텅 빈 냉장고 앞에 배를 움켜쥐고 서 있는 마른 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'스타(star) + 브\'와 비슷하므로, 우주에서 길을 잃어 굶주린 스타를 떠올려 보세요.',
      context: '주로 다이어트나 기아 문제, 혹은 비유적으로 애정이나 관심이 결핍된 상황에서 쓰입니다.',
      synonymAntonym: '배고픔을 뜻하는 hunger와 비슷하지만 훨씬 강한 표현이며, 반대로 가득 채우는 feed와 대조됩니다.',
    }),
    {
      definition: 'to suffer severely or die from a lack of food, or to feel very hungry',
      synonyms: ['famish', 'perish', 'hunger'],
      antonyms: ['feast', 'gorge', 'satiate'],
      exampleSentences: [
        { en: 'Many wild animals struggle to find enough food and may suffer during the harsh winter months.', ko: '많은 야생 동물들이 충분한 먹이를 찾기 위해 분투하며 혹독한 겨울 동안 굶주림을 겪을 수 있습니다.' },
        { en: 'The long hike took much longer than expected, leaving the entire group feeling ready for a massive meal.', ko: '긴 하이킹이 예상보다 훨씬 오래 걸려서 그룹 전체가 몹시 허기진 상태가 되었습니다.' },
      ],
    }
  ),
  word('state', '진술하다', 7, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '라틴어 \'status\'에서 유래하여 \'서 있는 모습\'이나 \'정해진 방식\'을 뜻하며, 공식적으로 의견을 세워 말한다는 의미로 확장되었습니다.',
      visual: '기자 회견장에서 발표자가 마이크 앞에 서서 공식 성명서를 낭독하는 모습을 상상해 보세요.',
      soundAlike: '\'스테이트\'는 \'스태프(staff)\'와 발음이 비슷합니다. 스태프가 공식 일정을 \'말하다\'라고 연상해 보세요.',
      context: '주로 법정, 뉴스 보도, 공식 문서에서 사실이나 의견을 명확하고 단호하게 밝힐 때 사용됩니다.',
      synonymAntonym: 'declare(선언하다)와 유사하며, 반대로 내용을 숨기거나 부인할 때는 deny(부인하다)를 씁니다.',
    }),
    {
      definition: 'to express something definitely or clearly in speech or writing',
      synonyms: ['declare', 'announce', 'assert'],
      antonyms: ['deny', 'conceal', 'withhold'],
      exampleSentences: [
        { en: 'The witness was asked to clearly declare the facts of the incident during the trial.', ko: '증인은 재판 중에 사건의 사실 관계를 명확하게 진술하라는 요청을 받았습니다.' },
        { en: 'Please clearly specify your full name and address on the application form.', ko: '신청서에 귀하의 성함과 주소를 명확히 기재해 주시기 바랍니다.' },
      ],
    }
  ),
  word('station', '역', 4, 'noun',
    ['결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회'],
    tips({
      etymology: '라틴어 \'statio\'에서 유래했으며, \'서 있는 곳\' 또는 \'정지해 있는 장소\'라는 의미를 담고 있습니다.',
      visual: '기차가 멈춰 서 있고 사람들이 플랫폼에서 기다리는 북적이는 기차역 풍경을 상상해 보세요.',
      soundAlike: '\'스테이션\' 발음이 \'서 있어\'와 비슷하게 들리니, 차들이 서 있는 곳이라고 기억하면 쉽습니다.',
      context: '교통 수단뿐만 아니라 방송국(broadcasting station)이나 경찰서(police station)처럼 특정 임무를 수행하는 거점에도 쓰입니다.',
      synonymAntonym: '멈추는 곳인 stop이나 터미널인 terminal과 비슷하지만, 움직이는 상태인 motion과는 반대됩니다.',
    }),
    {
      definition: 'A regular stopping place on a public transportation route, especially one with a building and other facilities.',
      synonyms: ['stop', 'terminal', 'depot'],
      antonyms: ['motion', 'transit', 'departure'],
      exampleSentences: [
        { en: 'The high-speed train will arrive at the central platform in ten minutes.', ko: '고속 열차가 10분 후에 중앙 승강장에 도착할 것입니다.' },
        { en: 'Many commuters gather at the subway entrance during the morning rush hour.', ko: '아침 혼잡 시간대에 많은 통근자들이 지하철 입구에 모입니다.' },
      ],
    }
  ),
  word('statistic', '통계', 9, 'noun',
    ['이론', '가설', '의견', '추측', '감상', '소문', '직감', '전설', '인상', '편견'],
    tips({
      etymology: '국가를 뜻하는 state에서 유래하여, 국가 운영에 필요한 수치 자료를 모으는 것에서 시작되었습니다.',
      visual: '복잡한 막대그래프와 꺾은선그래프가 가득한 보고서 페이지를 상상해 보세요.',
      soundAlike: '스태티스틱(statistic) - \'상태(state)를 틱(tic) 하고 찍어낸 수치\'라고 연상해 보세요.',
      context: '뉴스에서 설문 조사 결과나 경제 성장률을 발표할 때 자주 등장하는 단어입니다.',
      synonymAntonym: '데이터를 뜻하는 data와 비슷하며, 주관적 의견을 뜻하는 opinion과는 반대됩니다.',
    }),
    {
      definition: 'A fact or piece of data obtained from a study of a large quantity of numerical information.',
      synonyms: ['data', 'figure', 'number'],
      antonyms: ['opinion', 'guess', 'conjecture'],
      exampleSentences: [
        { en: 'The most alarming statistic shows that unemployment has risen by five percent.', ko: '가장 놀라운 통계는 실업률이 5퍼센트 증가했다는 것을 보여줍니다.' },
        { en: 'Every statistic in the report was carefully verified before publication.', ko: '보고서의 모든 통계 자료는 출판 전에 신중하게 검증되었습니다.' },
      ],
    }
  ),
  word('statue', '동상', 5, 'noun',
    ['그림', '사진', '건물', '풍경', '지도', '도구', '기계', '의복', '음식', '가구'],
    tips({
      etymology: '라틴어 \'statuere(세우다)\'에서 유래하여 똑바로 서 있는 형상을 의미합니다.',
      visual: '광화문 광장에 당당하게 서 있는 세종대왕 동상의 모습을 떠올려 보세요.',
      soundAlike: '\'스테이(stay)\'와 발음이 비슷하죠? 한자리에 가만히 서 있는 조각상을 연상하세요.',
      context: '역사적인 인물을 기리거나 예술적인 미를 표현하기 위해 공원이나 박물관에 설치됩니다.',
      synonymAntonym: 'sculpture와 비슷하지만, 주로 사람이나 동물의 전신을 본뜬 것을 말하며 추상적인 형상과는 대조됩니다.',
    }),
    {
      definition: 'A three-dimensional work of art representing a person or animal, usually carved from stone or cast in metal.',
      synonyms: ['sculpture', 'monument', 'figure'],
      antonyms: ['human', 'original', 'entity'],
      exampleSentences: [
        { en: 'The bronze monument of the famous leader stands tall in the center of the city square.', ko: '그 유명한 지도자의 청동 조상이 도시 광장 중앙에 높이 서 있다.' },
        { en: 'Tourists gathered around the ancient marble figure to take photographs of its intricate details.', ko: '관광객들이 정교한 세부 묘사를 사진에 담기 위해 고대 대리석 조상 주위로 모여들었다.' },
      ],
    }
  ),
  word('status', '신분', 6, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '라틴어 \'stare(서 있다)\'에서 유래하여 사회적으로 어느 위치에 서 있는지를 나타냅니다.',
      visual: '피라미드 계급도에서 특정 층에 서 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'스테이터스\'는 게임 캐릭터의 능력치나 현재 상태창을 떠올리면 기억하기 쉽습니다.',
      context: '주로 사회적 계급, 법적 권리, 혹은 프로젝트의 진행 상황을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'rank와 유사하며, 무명이나 보잘것없음을 뜻하는 insignificance와 반대됩니다.',
    }),
    {
      definition: 'The relative social, professional, or legal standing of someone or something.',
      synonyms: ['rank', 'standing', 'prestige'],
      antonyms: ['insignificance', 'lowliness', 'unimportance'],
      exampleSentences: [
        { en: 'The doctor\'s high social position granted him a lot of respect in the community.', ko: '그 의사의 높은 사회적 신분은 지역 사회에서 그에게 많은 존경을 가져다주었습니다.' },
        { en: 'They are still waiting for an update on the current legal position of their application.', ko: '그들은 자신들의 신청서에 대한 현재 법적 상태의 업데이트를 여전히 기다리고 있습니다.' },
      ],
    }
  ),
  word('stay', '체류', 3, 'noun',
    ['출발', '이동', '변화', '속도', '거리', '방향', '도착', '여행', '방문', '거주'],
    tips({
      etymology: '라틴어 \'stare(서 있다)\'에서 유래하여 한 장소에 멈춰 서 있는 상태를 의미합니다.',
      visual: '호텔 로비에서 짐을 풀고 안락한 소파에 앉아 쉬고 있는 여행객의 모습을 상상해 보세요.',
      soundAlike: '스테이크(steak)를 먹으러 식당에 가서 자리에 \'스테이(stay)\' 한다고 생각하면 쉽습니다.',
      context: '주로 여행 중 특정 장소에서 묵는 기간이나 잠시 멈춤을 나타낼 때 명사로 사용됩니다.',
      synonymAntonym: '계속 머무르는 visit과는 비슷하지만, 떠남을 뜻하는 departure와는 정반대 개념입니다.',
    }),
    {
      definition: 'A period of time spent living or remaining in a particular place as a guest or visitor.',
      synonyms: ['sojourn', 'visit', 'stopover'],
      antonyms: ['departure', 'exit', 'withdrawal'],
      exampleSentences: [
        { en: 'The family enjoyed a relaxing two-week holiday at a seaside resort.', ko: '그 가족은 해변 리조트에서 편안한 2주간의 휴가를 즐겼습니다.' },
        { en: 'Heavy snow forced the travelers to extend their time at the mountain hotel.', ko: '폭설로 인해 여행객들은 산속 호텔에서의 체류 기간을 연장해야만 했습니다.' },
      ],
    }
  ),
  word('steady', '확고한', 7, 'adjective',
    ['불안정한', '일시적인', '변덕스러운', '급격한', '혼란스러운', '나약한', '불확실한', '무작위의', '단속적인', '유동적인'],
    tips({
      etymology: '고대 영어 \'stede\'(장소)에서 유래하여, 한 장소에 고정되어 움직이지 않는 상태를 의미합니다.',
      visual: '흔들림 없는 수평계의 바늘이나 파도 속에서도 평형을 유지하는 배를 상상해 보세요.',
      soundAlike: '\'스테디\'셀러라는 말처럼 오랜 시간 꾸준히 사랑받는 책의 안정감을 떠올리면 쉽습니다.',
      context: '경제 성장이나 걸음걸이처럼 속도가 일정하고 변화가 적은 상황에서 주로 쓰입니다.',
      synonymAntonym: 'constant와 유의어 관계이며, 반대로 자꾸 변하는 unstable과는 대조를 이룹니다.',
    }),
    {
      definition: 'firmly fixed, supported, or balanced, and not shaking or moving.',
      synonyms: ['stable', 'constant', 'consistent'],
      antonyms: ['unstable', 'shaky', 'variable'],
      exampleSentences: [
        { en: 'The surgeon maintained a firm and balanced hand throughout the delicate operation.', ko: '외과 의사는 정교한 수술 내내 확고하고 흔들림 없는 손길을 유지했습니다.' },
        { en: 'A continuous and regular flow of water is essential for the cooling system to function.', ko: '냉각 시스템이 작동하려면 물의 지속적이고 일정한 흐름이 필수적입니다.' },
      ],
    }
  ),
  word('steal', '훔치다', 4, 'verb',
    ['구매하다', '빌려주다', '기부하다', '교환하다', '보상하다', '수리하다', '발견하다', '포기하다', '저축하다', '투자하다'],
    tips({
      etymology: '고대 영어 \'stelan\'에서 유래했으며, 허락 없이 남의 것을 가져가는 행위를 뜻합니다.',
      visual: '검은 마스크를 쓴 사람이 남의 가방을 몰래 들고 달아나는 장면을 떠올려 보세요.',
      soundAlike: '야구 경기에서 베이스를 훔치는 \'도루\'를 \'스틸\'이라고 부르는 것을 기억하세요.',
      context: '물건뿐만 아니라 타인의 아이디어나 사람들의 시선을 사로잡을 때도 사용됩니다.',
      synonymAntonym: 'rob은 폭력을 동반한 강탈에 가깝고, 반대로 give는 대가 없이 주는 선의를 뜻합니다.',
    }),
    {
      definition: 'to take something that belongs to someone else without permission and without intending to return it',
      synonyms: ['pilfer', 'thieve', 'filch'],
      antonyms: ['give', 'return', 'donate'],
      exampleSentences: [
        { en: 'The thief managed to take the expensive jewelry from the display case without being noticed.', ko: '도둑은 눈에 띄지 않고 진열장에서 비싼 보석을 훔치는 데 성공했다.' },
        { en: 'Hackers often try to gain access to private databases to obtain sensitive personal information.', ko: '해커들은 민감한 개인 정보를 훔치기 위해 종종 개인 데이터베이스에 접근하려고 시도한다.' },
      ],
    }
  ),
  word('steam', '증기', 5, 'noun',
    ['얼음', '먼지', '연기', '안개', '불꽃', '그림자', '바람', '거품', '번개', '구름'],
    tips({
      etymology: '고대 영어 \'steam\'에서 유래하여 뜨거운 열기나 수증기를 뜻하게 되었습니다.',
      visual: '뜨거운 커피 잔 위로 하얗게 피어오르는 아지랑이 같은 기체를 상상해 보세요.',
      soundAlike: '라면을 먹을 때 \'스~\' 하고 뜨거운 김을 불어내는 소리와 비슷합니다.',
      context: '주방에서 물이 끓을 때나 증기 기관차가 달릴 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'vapor와 유사하며, 고체 상태인 ice와는 반대되는 개념으로 볼 수 있습니다.',
    }),
    {
      definition: 'The hot mist that forms when water boils and turns into gas.',
      synonyms: ['vapor', 'mist', 'exhalation'],
      antonyms: ['ice', 'solid', 'liquid'],
      exampleSentences: [
        { en: 'The kitchen windows were covered in white mist because of the boiling water.', ko: '끓는 물 때문에 주방 창문이 하얀 증기로 뒤덮였습니다.' },
        { en: 'Early locomotives used the power of heated water to move heavy loads across the country.', ko: '초기 기관차들은 무거운 짐을 전국으로 운반하기 위해 가열된 물의 힘을 이용했습니다.' },
      ],
    }
  ),
  word('steel', '강철', 6, 'noun',
    ['상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미'],
    tips({
      etymology: '고대 게르만어 \'stakhli\'에서 유래했으며, \'단단하게 서 있다\'는 의미를 내포하고 있습니다.',
      visual: '뜨거운 용광로에서 붉게 달궈진 금속이 차갑고 단단한 은색 기둥으로 변하는 모습을 상상하세요.',
      soundAlike: '물건을 훔치다라는 뜻의 \'steal\'과 발음이 같으니, \'강철(steel)을 훔치다(steal)\'로 엮어 기억하세요.',
      context: '건축물의 뼈대나 자동차의 차체처럼 매우 튼튼하고 견고한 구조를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'iron보다 탄소가 포함되어 더 강한 것이 steel이며, 부드러운 plastic과는 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A strong, hard metal made of iron mixed with carbon, used for making buildings, tools, and vehicles.',
      synonyms: ['alloy', 'ironware', 'hard metal'],
      antonyms: ['plastic', 'rubber', 'fabric'],
      exampleSentences: [
        { en: 'The skyscraper was constructed with a massive frame made of reinforced metal beams.', ko: '그 마천루는 강화 금속 빔으로 만들어진 거대한 골조로 건설되었습니다.' },
        { en: 'Modern chefs prefer knives crafted from high-quality stainless materials for better durability.', ko: '현대 요리사들은 더 나은 내구성을 위해 고품질 스테인리스 재질로 제작된 칼을 선호합니다.' },
      ],
    }
  ),
  word('steep', '가파른', 10, 'adjective',
    ['평평한', '완만한', '부드러운', '얕은', '수평의', '매끄러운', '낮은', '넓은', '희미한', '무딘'],
    tips({
      etymology: '고대 영어 \'steap\'에서 유래하여 \'높이 솟아오른\' 또는 \'돌출된\'이라는 의미를 담고 있습니다.',
      visual: '거의 수직에 가까운 깎아지른 듯한 절벽을 오르느라 숨이 턱끝까지 차오르는 모습을 상상해 보세요.',
      soundAlike: '\'스팁\' 발음이 \'수직\'과 비슷하게 들린다고 생각하면 경사가 아주 급하다는 느낌을 쉽게 연결할 수 있습니다.',
      context: '산길이나 계단의 경사뿐만 아니라, 최근 급격하게 치솟은 물가나 가격 상승을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: '경사가 급한 abrupt와 완만한 gentle을 대조하여 기억하면 지형 묘사 어휘력이 풍부해집니다.',
    }),
    {
      definition: 'rising or falling at a very sharp angle, making it difficult to climb or descend',
      synonyms: ['sheer', 'abrupt', 'precipitous'],
      antonyms: ['gradual', 'gentle', 'flat'],
      exampleSentences: [
        { en: 'The hikers struggled to carry their heavy backpacks up the steep mountain trail.', ko: '등산객들은 무거운 배낭을 메고 가파른 산길을 오르느라 애를 먹었다.' },
        { en: 'The company faced a steep decline in profits after the new regulations were introduced.', ko: '그 회사는 새로운 규제가 도입된 이후 이익이 급격히 감소하는 상황에 직면했다.' },
      ],
    }
  ),
  word('stem', '줄기', 7, 'noun',
    ['뿌리', '나뭇잎', '꽃잎', '열매', '가지', '씨앗', '껍질', '흙', '꽃가루', '수풀'],
    tips({
      etymology: '고대 영어 \'stamn\'에서 유래하여 나무의 몸통이나 식물의 주축을 의미하게 되었습니다.',
      visual: '꽃을 받치고 있는 길고 곧은 초록색 대를 상상해 보세요.',
      soundAlike: '스팸(spam) 캔처럼 길쭉한 모양의 식물 줄기를 연상해 보세요.',
      context: '식물학뿐만 아니라 와인 잔의 가느다란 손잡이 부분을 지칭할 때도 사용됩니다.',
      synonymAntonym: '식물의 몸통인 stalk와 유사하며, 가장 끝부분인 leaf와는 대조적입니다.',
    }),
    {
      definition: 'The main long thin part of a plant that rises above the ground and supports the leaves and flowers.',
      synonyms: ['stalk', 'trunk', 'stock'],
      antonyms: ['flower', 'leaf', 'root'],
      exampleSentences: [
        { en: 'The child carefully held the flower by its thin green stem.', ko: '아이는 가느다란 초록색 줄기를 잡고 조심스럽게 꽃을 들었다.' },
        { en: 'Cut the rose at the base of the stem before putting it in water.', ko: '장미를 물에 넣기 전에 줄기 아랫부분을 자르세요.' },
      ],
    }
  ),
];
