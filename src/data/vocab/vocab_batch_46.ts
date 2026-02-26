import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch46: VocabItem[] = [
  word('molecule', '분자', 10, 'noun',
    ['원자', '세포', '입자', '원소', '화합물', '핵', '중성자', '양성자', '전자', '결합'],
    tips({
      etymology: '라틴어 \'moles(덩어리)\'에 작은 것을 뜻하는 접미사 \'-cule\'이 붙어 \'작은 덩어리\'라는 뜻에서 유래했습니다.',
      visual: '물방울 하나 속에 수많은 작은 알갱이들이 서로 손을 잡고 연결되어 있는 모습을 상상해 보세요.',
      soundAlike: '\'몰리큘\' 발음이 \'몰래 숨어있는 귤\'처럼 들리기도 하죠? 아주 작아서 눈에 보이지 않게 숨어있는 입자를 떠올려보세요.',
      context: '과학 실험실에서 물이나 이산화탄소의 구조를 설명할 때 가장 기본이 되는 단위로 자주 등장합니다.',
      synonymAntonym: '입자를 뜻하는 particle과 유사하지만, 화학적 성질을 가진 최소 단위라는 점에서 더 구체적인 표현입니다.',
    }),
    {
      definition: 'the smallest unit of a chemical substance that can exist on its own and keep all its properties',
      synonyms: ['particle', 'speck', 'fragment'],
      antonyms: ['mass', 'bulk', 'whole'],
      exampleSentences: [
        { en: 'Water is composed of two hydrogen atoms and one oxygen atom in each single unit.', ko: '물은 각 단위마다 두 개의 수소 원자와 하나의 산소 원자로 구성되어 있습니다.' },
        { en: 'Scientists are studying how this specific structure reacts when exposed to extreme heat.', ko: '과학자들은 이 특정한 구조가 극심한 열에 노출되었을 때 어떻게 반응하는지 연구하고 있습니다.' },
      ],
      wordDistractors: ['monocle', 'module', 'molehill'],
      definitionDistractors: [
        'a single atom that cannot be divided further',
        'the process of combining two chemicals in a laboratory',
        'the smallest visible unit of a living organism',
      ],
    }
  ),
  word('moment', '순간', 4, 'noun',
    ['여성', '빈민가', '잭슨 (인명)', '(사건의) 시나리오', '과육, 펄프', '지우개', '사람', '찬가', '모양, 형태', '폭발'],
    tips({
      etymology: '라틴어 \'momentum\'에서 유래했으며, 이는 움직임을 뜻하는 \'movimentum\'의 축약형으로 아주 짧은 시간의 움직임을 의미합니다.',
      visual: '카메라 셔터가 찰칵하고 눌리는 찰나의 장면을 상상해 보세요.',
      soundAlike: '\'모먼트\'는 \'모든 먼지\'가 멈춘 아주 짧은 찰나라고 연상해 보세요.',
      context: '인생의 중요한 결정이나 아름다운 풍경을 마주했을 때 느끼는 아주 짧은 시간적 단위를 표현할 때 주로 쓰입니다.',
      synonymAntonym: '아주 짧은 시간인 instant와 유의어 관계이며, 영원함을 뜻하는 eternity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A very brief period of time or a particular point in time when something happens.',
      synonyms: ['instant', 'second', 'jiffy'],
      antonyms: ['eternity', 'forever', 'age'],
      exampleSentences: [
        { en: 'The photographer captured the exact point when the sun began to set.', ko: '사진작가는 해가 지기 시작하는 바로 그 순간을 포착했습니다.' },
        { en: 'Please wait for a brief period while I finish this phone call.', ko: '전화를 마칠 때까지 잠시만 기다려 주세요.' },
      ],
      wordDistractors: ['momentum', 'monument', 'comment'],
      definitionDistractors: [
        'a lasting emotional attachment to a particular memory',
        'the physical force behind a moving object',
        'a scheduled event on a calendar or agenda',
      ],
    }
  ),
  word('money', '돈', 1, 'noun',
    ['시간', '우정', '지식', '건강', '명예', '기술', '노동', '휴식', '평화', '자유'],
    tips({
      etymology: '로마 신화의 여신 \'모네타(Moneta)\'의 신전에서 동전을 주조하던 것에서 유래했습니다.',
      visual: '지갑 속에 가득 찬 지폐와 반짝이는 동전 더미를 상상해 보세요.',
      soundAlike: '\'머니\'라고 발음하며, \'뭐니 뭐니 해도 돈이 최고\'라는 농담을 떠올려 보세요.',
      context: '물건을 사거나 서비스를 이용할 때 지불하는 교환 수단으로 쓰입니다.',
      synonymAntonym: '유의어인 cash는 현금을, 반의어인 debt는 갚아야 할 빚을 의미합니다.',
    }),
    {
      definition: 'A current medium of exchange in the form of coins and banknotes used to buy goods and services.',
      synonyms: ['currency', 'cash', 'wealth'],
      antonyms: ['debt', 'poverty', 'deficit'],
      exampleSentences: [
        { en: 'She saved a lot of her monthly income to buy a new car.', ko: '그녀는 새 차를 사기 위해 월급의 많은 부분을 저축했습니다.' },
        { en: 'The local shop accepts both credit cards and physical coins.', ko: '그 동네 상점은 신용카드와 실제 동전 모두를 받습니다.' },
      ],
      wordDistractors: ['monkey', 'honey', 'mosey'],
      definitionDistractors: [
        'a formal agreement between two parties for trade',
        'a unit of measurement for weight or volume',
        'the act of exchanging goods without using any payment',
      ],
    }
  ),
  word('monitor', '감시자', 5, 'noun',
    ['방관자', '방해꾼', '학생', '기술자', '관찰자', '조력자', '비평가', '추종자', '배신자', '중재자'],
    tips({
      etymology: '라틴어 \'monere\'에서 유래했으며, 이는 \'경고하다\' 또는 \'조언하다\'라는 의미를 담고 있습니다.',
      visual: '현명한 노인이 옆에서 잘못된 길로 가지 않도록 부드럽게 조언해주는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 모니터가 화면을 통해 정보를 주듯, 사람 모니터는 입을 통해 충고를 준다고 생각하면 쉽습니다.',
      context: '주로 학교나 조직 내에서 행동을 지켜보고 올바른 방향을 제시해주는 사람을 지칭할 때 쓰입니다.',
      synonymAntonym: 'advisor와 mentor는 긍정적인 가이드를 주지만, critic은 주로 비판적인 시각을 가집니다.',
    }),
    {
      definition: 'a person who watches, checks, or supervises something over a period of time',
      synonyms: ['observer', 'supervisor', 'watcher'],
      antonyms: ['participant', 'offender', 'violator'],
      exampleSentences: [
        { en: 'The senior teacher acted as a monitor for the new recruits to ensure proper conduct.', ko: '선임 교사는 신입 사원들의 올바른 태도를 확인하기 위해 감시자 역할을 했습니다.' },
        { en: 'The exam room had a monitor to prevent cheating during the test.', ko: '시험 중 부정행위를 막기 위해 시험실에는 감시자가 배치되어 있었다.' },
      ],
      wordDistractors: ['monster', 'mentor', 'monetary'],
      definitionDistractors: [
        'a device used to display visual information on a screen',
        'a person who provides financial guidance to businesses',
        'an electronic sensor that measures temperature changes',
      ],
    }
  ),
  word('monkey', '원숭이', 2, 'noun',
    ['고릴라', '침팬지', '오랑우탄', '사자', '호랑이', '코끼리', '기린', '얼룩말', '다람쥐', '토끼'],
    tips({
      etymology: '중세 네덜란드어 \'monneke\'에서 유래했으며, 작은 사람이나 인형을 뜻하는 말에서 동물 이름으로 정착되었습니다.',
      visual: '긴 꼬리를 이용해 나무 사이를 자유롭게 옮겨 다니며 바나나를 먹고 있는 장난기 가득한 모습을 상상하세요.',
      soundAlike: '\'멍키\'라고 발음하며, 나무 위에서 멍하니(mon-) 키(key)를 들고 장난치는 모습을 연상해 보세요.',
      context: '동물원이나 정글 테마의 이야기에서 주로 등장하며, 장난기가 많은 사람을 비유할 때도 자주 쓰입니다.',
      synonymAntonym: '영장류를 뜻하는 primate와 유사하며, 인간과는 생물학적 분류에서 대조를 이룹니다.',
    }),
    {
      definition: 'A small to medium-sized primate that typically has a long tail and lives in trees in tropical countries.',
      synonyms: ['primate', 'simian', 'ape'],
      antonyms: ['human', 'reptile', 'bird'],
      exampleSentences: [
        { en: 'The playful animal swung from branch to branch searching for fresh fruit.', ko: '그 장난기 많은 동물은 신선한 과일을 찾아 나뭇가지 사이를 대롱대롱 매달려 이동했습니다.' },
        { en: 'Visitors at the wildlife park watched the group grooming each other in the sun.', ko: '야생 공원의 방문객들은 무리가 햇볕 아래에서 서로의 털을 골라주는 모습을 지켜보았습니다.' },
      ],
      wordDistractors: ['donkey', 'money', 'mongrel'],
      definitionDistractors: [
        'a large ape that walks upright and lives in African forests',
        'a domesticated animal commonly kept as a household pet',
        'a nocturnal creature that feeds primarily on insects',
      ],
    }
  ),
  word('monster', '괴물', 6, 'noun',
    ['영웅', '천사', '인간', '동물', '식물', '요정', '거인', '유령', '악마', '로봇'],
    tips({
      etymology: '라틴어 monstrum에서 유래했으며, 원래는 신의 경고를 나타내는 \'이상한 징조\'라는 뜻에서 무서운 생명체로 의미가 확장되었습니다.',
      visual: '영화 속 거대한 몸집과 날카로운 이빨을 가진 상상 속의 생명체를 떠올려 보세요.',
      soundAlike: '만화 영화 \'몬스터 주식회사\'의 주인공 설리와 마이크를 생각하면 발음과 뜻이 쉽게 연결됩니다.',
      context: '주로 공포 영화나 판타지 소설에서 주인공을 위협하는 존재로 등장하지만, 비유적으로는 아주 잔인한 사람을 일컫기도 합니다.',
      synonymAntonym: 'beast나 creature와 비슷하지만, angel이나 hero와는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'A large, frightening, and imaginary creature that is typically ugly or cruel.',
      synonyms: ['beast', 'creature', 'fiend'],
      antonyms: ['angel', 'hero', 'saint'],
      exampleSentences: [
        { en: 'The brave knight fought a fire-breathing beast in the dark cave.', ko: '용감한 기사는 어두운 동굴에서 불을 뿜는 괴물과 싸웠습니다.' },
        { en: 'Children often imagine a scary creature hiding under their beds at night.', ko: '아이들은 종종 밤에 침대 밑에 무서운 괴물이 숨어 있다고 상상하곤 합니다.' },
      ],
      wordDistractors: ['monastery', 'monitor', 'mongster'],
      definitionDistractors: [
        'a powerful natural phenomenon such as a hurricane or earthquake',
        'a heroic figure from ancient mythology who protects the weak',
        'a rare species of animal found only in deep ocean waters',
      ],
    }
  ),
  word('month', '월', 3, 'noun',
    ['주', '년', '시간', '분기', '세기', '학기', '계절', '요일', '날짜', '시대'],
    tips({
      etymology: '달을 뜻하는 Moon에서 유래하여, 달이 지구를 한 바퀴 도는 주기를 의미하게 되었습니다.',
      visual: '달력의 한 페이지가 통째로 넘어가며 새로운 숫자가 나타나는 모습을 상상하세요.',
      soundAlike: '먼지(Mun-ji)가 쌓일 정도로 긴 시간인 \'한 달\'을 떠올려 보세요.',
      context: '일 년은 12개로 나뉘며, 급여나 월세를 계산할 때 가장 기본이 되는 시간 단위입니다.',
      synonymAntonym: '기간을 뜻하는 period와 유사하며, 찰나를 뜻하는 instant와는 대조적입니다.',
    }),
    {
      definition: 'One of the twelve periods into which a year is divided, lasting between 28 and 31 days.',
      synonyms: ['period', 'duration', 'cycle'],
      antonyms: ['instant', 'moment', 'second'],
      exampleSentences: [
        { en: 'February is the shortest period of the year, usually having only twenty-eight days.', ko: '2월은 일 년 중 가장 짧은 달로, 보통 28일만 있습니다.' },
        { en: 'She decided to travel across Europe for an entire thirty-day period during her summer break.', ko: '그녀는 여름 방학 동안 한 달 내내 유럽을 여행하기로 결정했습니다.' },
      ],
      wordDistractors: ['mount', 'mouth', 'moth'],
      definitionDistractors: [
        'a seven-day period used to organize weekly schedules',
        'the annual cycle of seasonal changes in weather patterns',
        'a unit of time equal to exactly thirty days in every case',
      ],
    }
  ),
  word('monument', '기념비', 8, 'noun',
    ['박물관', '유적지', '기념품', '전시회', '조각상', '건축물', '문화재', '역사서', '관광지', '유물'],
    tips({
      etymology: '라틴어 \'monere(기억하게 하다, 경고하다)\'에서 유래하여 과거의 인물이나 사건을 잊지 않게 해주는 구조물을 뜻합니다.',
      visual: '광장 한가운데 우뚝 솟아 있는 거대한 돌기둥이나 동상에 꽃다발이 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'마뉴먼트\' -> \'마음(Ma)에 남는(nu) 먼(ment) 옛날의 기록\'으로 소리 내어 읽으며 기억해 보세요.',
      context: '역사적인 승리를 기념하거나 위대한 인물의 업적을 기리기 위해 공공장소에 세워진 상징물에 주로 쓰입니다.',
      synonymAntonym: '기억을 돕는 memorial과 유사하며, 흔적도 없이 사라진 상태를 뜻하는 oblivion과 대비됩니다.',
    }),
    {
      definition: 'A structure, statue, or building that is built to honor a special person or event from the past.',
      synonyms: ['memorial', 'shrine', 'statue'],
      antonyms: ['ruin', 'eyesore', 'insignificance'],
      exampleSentences: [
        { en: 'The government erected a massive stone pillar as a lasting tribute to the fallen soldiers.', ko: '정부는 전사한 군인들을 기리는 영구적인 헌사로서 거대한 석조 기념비를 세웠습니다.' },
        { en: 'Ancient civilizations often constructed grand structures to celebrate their kings and deities.', ko: '고대 문명들은 종종 그들의 왕과 신들을 찬양하기 위해 웅장한 기념물을 건설했습니다.' },
      ],
      wordDistractors: ['moment', 'monastery', 'momentum'],
      definitionDistractors: [
        'a written document that records historical events for future reference',
        'a large public park designed for recreational activities',
        'a government office building where laws are enacted',
      ],
    }
  ),
  word('mood', '기분', 7, 'noun',
    ['호평, 찬사', '강수량, 침전', '공포', '용서', '발가락', '항공사', '택시', '전략', '가명, 별명', '가솔린'],
    tips({
      etymology: '고대 영어 \'mod\'에서 유래했으며, 원래는 마음, 영혼, 용기를 뜻하는 단어였습니다.',
      visual: '비가 오는 날 창밖을 보며 우울해하거나, 햇살 아래서 웃고 있는 사람의 표정을 떠올려 보세요.',
      soundAlike: '\'무드\' 있는 조명이라는 말처럼, 분위기나 마음의 상태를 결정짓는 요소를 생각하면 쉽습니다.',
      context: '음악이나 날씨는 사람의 정신적인 상태를 순식간에 바꿀 수 있는 강력한 도구입니다.',
      synonymAntonym: '기분을 뜻하는 temper와 유사하며, 감정이 없는 상태인 indifference와는 반대됩니다.',
    }),
    {
      definition: 'The temporary state of mind or feeling that a person is experiencing at a particular time.',
      synonyms: ['temper', 'disposition', 'spirit'],
      antonyms: ['indifference', 'insensibility', 'apathy'],
      exampleSentences: [
        { en: 'The cheerful music immediately improved everyone\'s emotional state at the party.', ko: '쾌활한 음악은 파티에 있는 모든 사람들의 기분을 즉시 좋게 만들었습니다.' },
        { en: 'She has been in a somber frame of mind since she heard the disappointing news.', ko: '그녀는 실망스러운 소식을 들은 이후로 침울한 기분 상태에 빠져 있습니다.' },
      ],
      wordDistractors: ['moot', 'mooed', 'mould'],
      definitionDistractors: [
        'a permanent personality trait that defines someone\'s character',
        'the ability to influence others through persuasion',
        'a specific genre of music that evokes strong emotions',
      ],
    }
  ),
  word('moon', '달', 1, 'noun',
    ['태양', '별', '행성', '우주', '지구', '구름', '하늘', '은하수', '혜성', '위성'],
    tips({
      etymology: '고대 영어 \'mona\'에서 유래했으며, 시간을 측정하는 \'달(month)\'과 어원이 같습니다.',
      visual: '어두운 밤하늘에 노랗고 둥글게 떠 있는 천체를 상상해 보세요.',
      soundAlike: '발음이 \'문\'과 비슷하므로, 밤에 \'문\'을 열고 밖을 보니 달이 떠 있다고 연상하세요.',
      context: '주로 밤의 밝기나 조수 간만의 차를 설명할 때 자주 등장합니다.',
      synonymAntonym: '천연 위성을 뜻하는 satellite와 유사하며, 낮의 상징인 sun과 대비됩니다.',
    }),
    {
      definition: 'The natural satellite of the Earth that shines by reflecting light from the sun and appears as a luminous disk in the night sky.',
      synonyms: ['satellite', 'lunar body', 'crescent'],
      antonyms: ['sun', 'star', 'void'],
      exampleSentences: [
        { en: 'The full light of the celestial body illuminated the entire forest at midnight.', ko: '보름달의 빛이 한밤중에 숲 전체를 환하게 비추었습니다.' },
        { en: 'Neil Armstrong was the first human to walk on its dusty surface in 1969.', ko: '닐 암스트롱은 1969년에 그 먼지 쌓인 표면을 걸은 최초의 인간이었습니다.' },
      ],
      wordDistractors: ['moan', 'moose', 'mood'],
      definitionDistractors: [
        'a self-luminous celestial body made of hot gas',
        'the period of time between sunset and sunrise',
        'a man-made object sent into orbit around the earth',
      ],
    }
  ),
  word('moral', '도덕의', 4, 'adjective',
    ['부정적인', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인'],
    tips({
      etymology: '라틴어 \'mos(관습, 습성)\'에서 유래하여 사회적으로 옳다고 여겨지는 행동 방식을 뜻하게 되었습니다.',
      visual: '길에 떨어진 지갑을 보고 주인에게 돌려주려 고민하는 정직한 사람의 모습을 상상해 보세요.',
      soundAlike: '\'모럴\'은 \'모든 이가 지켜야 할 룰\'이라고 소리 내어 기억하면 쉽습니다.',
      context: '개인의 양심이나 사회적 가치 판단이 필요한 상황에서 주로 쓰이는 형용사입니다.',
      synonymAntonym: '옳고 그름을 따지는 ethical과 유의어이며, 도덕이 없는 immoral과 반대됩니다.',
    }),
    {
      definition: 'concerned with the principles of right and wrong behavior and the goodness or badness of human character',
      synonyms: ['ethical', 'virtuous', 'righteous'],
      antonyms: ['immoral', 'unethical', 'wicked'],
      exampleSentences: [
        { en: 'The story ends with a powerful lesson about the importance of honesty.', ko: '그 이야기는 정직함의 중요성에 대한 강력한 도덕적 교훈과 함께 끝납니다.' },
        { en: 'Leaders have a responsibility to provide strong guidance to their followers.', ko: '지도자들은 추종자들에게 강력한 도덕적 지침을 제공할 책임이 있습니다.' },
      ],
      wordDistractors: ['mortal', 'mural', 'morale'],
      definitionDistractors: [
        'relating to the customs and traditions of a particular culture',
        'having a strong emotional reaction to a dramatic situation',
        'based on logical reasoning rather than personal feelings',
      ],
    }
  ),
  word('moreover', '게다가, 더욱이', 5, 'adverb',
    ['그럼에도 불구하고', '반대로', '결과적으로', '마침내', '갑자기', '비록', '오히려', '대신에', '때때로', '거의'],
    tips({
      etymology: 'more(더 많은)와 over(너머에)가 합쳐져 이미 있는 정보에 무언가를 더 얹는 느낌을 줍니다.',
      visual: '이미 가득 찬 바구니 위에 사과 하나를 더 얹는 모습을 상상해 보세요.',
      soundAlike: '모어오버 -> \'모아(more)서 엎어(over)놓다\'라고 생각하면 정보를 더 쌓는 느낌이 납니다.',
      context: '앞서 말한 내용에 덧붙여 더 중요한 논거를 제시할 때 주로 문장 앞에 쓰입니다.',
      synonymAntonym: 'furthermore와는 친구 사이이며, conversely와는 서로 반대 방향을 보고 있습니다.',
    }),
    {
      definition: 'as a further matter; besides or in addition to what has already been said',
      synonyms: ['furthermore', 'besides', 'additionally'],
      antonyms: ['conversely', 'otherwise', 'nevertheless'],
      exampleSentences: [
        { en: 'The new laptop is extremely fast; moreover, it has a very long battery life.', ko: '새 노트북은 매우 빠릅니다. 게다가 배터리 수명도 아주 깁니다.' },
        { en: 'Smoking is a harmful habit; moreover, it is a very expensive one.', ko: '흡연은 해로운 습관입니다. 더욱이 돈이 매우 많이 드는 습관이기도 합니다.' },
      ],
      wordDistractors: ['however', 'whoever', 'wherever'],
      definitionDistractors: [
        'in contrast to what was previously stated',
        'as a result of the circumstances mentioned earlier',
        'in spite of the difficulties or obstacles described',
      ],
    }
  ),
  word('mortal', '죽을운명의', 9, 'adjective',
    ['영원한', '불멸의', '신성한', '무한한', '강력한', '유연한', '고귀한', '일시적인', '치명적인', '생생한'],
    tips({
      etymology: '라틴어 \'mors(죽음)\'에서 유래하여, 죽음을 피할 수 없는 존재라는 의미를 담고 있습니다.',
      visual: '모래시계의 모래가 다 떨어져가는 모습이나 시들어가는 꽃을 보며 유한한 생명을 떠올려 보세요.',
      soundAlike: '\'모털\' 발음이 \'못 털\'어내고 결국 죽음을 맞이하는 인간의 운명처럼 느껴보세요.',
      context: '그리스 신화에서 신들과 대비되는 인간의 연약함과 유한함을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '영원히 사는 \'immortal\'과 정반대되는 개념으로, 끝이 있는 생명을 뜻하는 \'perishable\'과 비슷합니다.',
    }),
    {
      definition: 'Subject to death and certain to die eventually rather than living forever.',
      synonyms: ['human', 'perishable', 'fatal'],
      antonyms: ['immortal', 'everlasting', 'divine'],
      exampleSentences: [
        { en: 'All human beings are subject to the natural laws of a finite existence.', ko: '모든 인간은 유한한 존재라는 자연의 법칙을 따른다.' },
        { en: 'The hero realized he was not a god but a man who could be wounded.', ko: '영웅은 자신이 신이 아니라 상처 입을 수 있는 죽을 운명의 인간임을 깨달았다.' },
      ],
      wordDistractors: ['moral', 'portal', 'mortar'],
      definitionDistractors: [
        'having exceptional strength or power beyond ordinary limits',
        'relating to spiritual beliefs or religious practices',
        'capable of causing severe damage or destruction',
      ],
    }
  ),
  word('mother', '어머니', 2, 'noun',
    ['아버지', '아들', '딸', '형제', '자매', '삼촌', '이모', '조카', '할아버지', '할머니'],
    tips({
      etymology: '고대 영어 \'mōdor\'에서 유래했으며, 전 세계 많은 언어에서 \'m\' 소리는 아기가 가장 먼저 내는 소리와 연결되어 엄마를 뜻합니다.',
      visual: '아이를 따뜻하게 안아주고 있는 여성의 모습이나 카네이션 꽃을 떠올려 보세요.',
      soundAlike: '\'마더\'라고 발음하며, 우리말의 \'엄마\'와 첫 글자 \'ㅁ\' 소리가 같다는 점을 기억하세요.',
      context: '가족 관계를 설명할 때뿐만 아니라, \'모국어(mother tongue)\'처럼 근원이나 뿌리를 나타낼 때도 쓰입니다.',
      synonymAntonym: '부모를 뜻하는 parent와 유의어 관계이며, 남성 보호자인 father와 반대 개념으로 묶어 외우면 좋습니다.',
    }),
    {
      definition: 'A female parent who has given birth to or raised a child.',
      synonyms: ['mom', 'parent', 'matriarch'],
      antonyms: ['father', 'son', 'daughter'],
      exampleSentences: [
        { en: 'She looks exactly like her female parent when she smiles.', ko: '그녀는 웃을 때 자신의 어머니와 똑 닮았습니다.' },
        { en: 'Every child needs the love and support of a caring female guardian.', ko: '모든 아이는 보살펴주는 어머니의 사랑과 지지가 필요합니다.' },
      ],
      wordDistractors: ['smother', 'bother', 'lather'],
      definitionDistractors: [
        'an older female relative who serves as head of a household',
        'a woman who teaches or mentors children in a school',
        'a female guardian appointed by law to care for orphans',
      ],
    }
  ),
  word('motion', '운동', 6, 'noun',
    ['정지', '고정', '침묵', '안정', '평화', '휴식', '중단', '결과', '상태', '위치'],
    tips({
      etymology: '라틴어 \'movere(움직이다)\'에서 유래하여 사물이 장소를 옮기거나 몸을 움직이는 행위를 뜻합니다.',
      visual: '슬로우 모션 카메라로 테니스 선수가 공을 치는 역동적인 움직임을 포착하는 장면을 상상해 보세요.',
      soundAlike: '영화 촬영장에서 감독이 \'레디~ 액션!\' 하기 전에 모든 \'모션\'이 준비되었는지 확인한다고 생각하세요.',
      context: '물리학에서는 물체의 이동을, 일상에서는 손짓이나 몸짓 같은 신호 전달을 의미할 때 자주 쓰입니다.',
      synonymAntonym: '움직임을 뜻하는 movement와 유사하며, 아무런 움직임이 없는 stillness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The action or process of moving or being moved from one place to another.',
      synonyms: ['movement', 'gesture', 'action'],
      antonyms: ['stillness', 'immobility', 'rest'],
      exampleSentences: [
        { en: 'The constant rocking of the ship created a rhythmic sway that made some passengers feel dizzy.', ko: '배의 지속적인 흔들림이 규칙적인 움직임을 만들어내어 일부 승객들이 어지러움을 느끼게 했습니다.' },
        { en: 'She made a frantic hand signal to attract the attention of the rescue team in the distance.', ko: '그녀는 멀리 있는 구조대의 주의를 끌기 위해 손으로 다급한 몸짓을 보냈습니다.' },
      ],
      wordDistractors: ['mention', 'potion', 'notion'],
      definitionDistractors: [
        'the emotional response triggered by witnessing an event',
        'a formal proposal submitted for debate in a meeting',
        'the speed at which an object travels through space',
      ],
    }
  ),
  word('motive', '동기', 7, 'noun',
    ['결과', '우연', '장애물', '결론', '무관심', '정지', '방해', '결핍', '우울', '침묵'],
    tips({
      etymology: '라틴어 \'motivus(움직이는)\'에서 유래하여 사람의 마음을 움직여 행동하게 만드는 원동력을 뜻합니다.',
      visual: '달리기 선수가 결승선을 통과하며 가족의 사진을 가슴에서 꺼내 보는 장면을 상상해 보세요.',
      soundAlike: '모티브(Motive)는 예술 작품의 \'모티프\'와 발음이 같아 창작의 영감을 주는 근원이라고 생각하면 쉽습니다.',
      context: '범죄 수사 드라마에서 형사가 범행의 이유를 찾을 때 가장 먼저 묻는 질문인 \'What is the motive?\'를 떠올려 보세요.',
      synonymAntonym: '행동을 이끄는 \'reason\'과 비슷하지만, 아무런 의도가 없는 상태인 \'deterrent\'와는 반대됩니다.',
    }),
    {
      definition: 'A reason for doing something, especially one that is hidden or not obvious.',
      synonyms: ['incentive', 'motivation', 'inducement'],
      antonyms: ['deterrent', 'discouragement', 'hindrance'],
      exampleSentences: [
        { en: 'The police are still trying to establish a clear reason for the attack.', ko: '경찰은 여전히 그 공격에 대한 명확한 동기를 밝히려 노력하고 있다.' },
        { en: 'Financial gain was the primary factor that led him to switch careers.', ko: '금전적 이득이 그가 직업을 바꾸게 된 주요 동기였다.' },
      ],
      wordDistractors: ['motion', 'motif', 'motor'],
      definitionDistractors: [
        'the outcome or consequence of a particular action',
        'a recurring theme or design pattern in art or literature',
        'the physical ability to perform a task or activity',
      ],
    }
  ),
  word('mount', '산', 4, 'noun',
    ['바다', '평지', '계곡', '호수', '들판', '사막', '동굴', '섬', '해변', '숲'],
    tips({
      etymology: '라틴어 mons에서 유래하여 \'산\'이나 \'언덕\'처럼 솟아오른 지형을 뜻합니다.',
      visual: '에베레스트 산의 정상에 깃발을 꽂는 등반가의 모습을 상상해 보세요.',
      soundAlike: '마운트(mount)는 \'마운드(mound)\'와 발음이 비슷하며 둘 다 흙이 쌓인 언덕을 연상시킵니다.',
      context: '주로 산의 이름 앞에 붙어 Mount Everest처럼 고유 명사로 자주 쓰입니다.',
      synonymAntonym: 'peak나 mountain과 비슷하지만, valley와 같은 낮은 지형과는 반대됩니다.',
    }),
    {
      definition: 'A large natural elevation of the earth\'s surface rising abruptly from the surrounding level.',
      synonyms: ['mountain', 'peak', 'summit'],
      antonyms: ['valley', 'canyon', 'abyss'],
      exampleSentences: [
        { en: 'The climbers prepared their gear to ascend the steep slopes of the majestic peak.', ko: '등반가들은 웅장한 산의 가파른 경사면을 오르기 위해 장비를 준비했습니다.' },
        { en: 'Snow covers the top of the massive landform even during the warm summer months.', ko: '따뜻한 여름철에도 거대한 산의 정상은 눈으로 덮여 있습니다.' },
      ],
      wordDistractors: ['mound', 'moat', 'amount'],
      definitionDistractors: [
        'a deep trench filled with water surrounding a castle',
        'the act of climbing onto the back of a horse or vehicle',
        'a flat, open area of land used for farming or grazing',
      ],
    }
  ),
  word('mountain', '산', 3, 'noun',
    ['바다', '강물', '평지', '도시', '하늘', '구름', '동굴', '숲속', '들판', '호수'],
    tips({
      etymology: '라틴어 \'mons\'에서 유래했으며, 이는 \'돌출된 것\'이나 \'언덕\'을 의미합니다.',
      visual: '뾰족한 정상이 구름 위로 솟아오른 거대한 바위 덩어리를 상상해 보세요.',
      soundAlike: '\'마운틴\'은 \'마구 뛴\'과 발음이 비슷하죠? 산 정상까지 마구 뛰어 올라가는 모습을 떠올려 보세요.',
      context: '등산, 하이킹, 혹은 지형을 설명할 때 가장 기본적으로 쓰이는 단어입니다.',
      synonymAntonym: 'peak나 summit은 산의 꼭대기를 강조하며, valley는 산 사이의 낮은 골짜기를 뜻합니다.',
    }),
    {
      definition: 'A very high hill, often with rocks near the top and relatively steep sides.',
      synonyms: ['peak', 'summit', 'elevation'],
      antonyms: ['valley', 'canyon', 'plain'],
      exampleSentences: [
        { en: 'The hikers reached the top of the snowy peak after five hours of climbing.', ko: '등산객들은 5시간의 등반 끝에 눈 덮인 산 정상에 도달했습니다.' },
        { en: 'Everest is known as the highest landform on Earth above sea level.', ko: '에베레스트는 해수면 위에서 지구상 가장 높은 지형으로 알려져 있습니다.' },
      ],
      wordDistractors: ['fountain', 'mounting', 'maintain'],
      definitionDistractors: [
        'a large body of water surrounded by land on all sides',
        'a deep narrow gorge with steep rocky walls',
        'a gently rolling landscape of grassy fields and meadows',
      ],
    }
  ),
  word('mouse', '쥐', 1, 'noun',
    ['코끼리', '사자', '호랑이', '기린', '독수리', '고래', '상어', '악어', '거북이', '뱀'],
    tips({
      etymology: '고대 영어 \'mus\'에서 유래했으며, 산스크리트어의 \'훔치다\'라는 단어와 어원이 닿아 있어 작고 재빠른 도둑의 이미지를 담고 있습니다.',
      visual: '치즈 조각을 몰래 갉아먹고 있는 작고 귀여운 회색 쥐의 긴 꼬리와 수염을 상상해 보세요.',
      soundAlike: '컴퓨터 마우스와 발음이 똑같습니다. 손안에 쏙 들어오는 크기가 실제 생쥐와 비슷해서 붙여진 이름입니다.',
      context: '동화책이나 만화에서 주로 작고 약하지만 영리한 주인공으로 자주 등장하는 동물입니다.',
      synonymAntonym: '작은 설치류를 뜻하는 rodent와 비슷하지만, 덩치가 큰 쥐인 rat과는 크기 면에서 대조를 이룹니다.',
    }),
    {
      definition: 'A small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.',
      synonyms: ['rodent', 'vermin', 'creature'],
      antonyms: ['giant', 'beast', 'predator'],
      exampleSentences: [
        { en: 'The tiny creature scurried across the kitchen floor to find some crumbs.', ko: '그 작은 생물은 부스러기를 찾기 위해 부엌 바닥을 가로질러 재빨리 달려갔다.' },
        { en: 'A hungry cat waited patiently outside the hole for the small animal to emerge.', ko: '배고픈 고양이는 작은 동물이 나타나기를 기다리며 구멍 밖에서 인내심 있게 기다렸다.' },
      ],
      wordDistractors: ['moose', 'mouth', 'mousse'],
      definitionDistractors: [
        'a handheld electronic device used to control a computer cursor',
        'a large rodent that builds dams in rivers and streams',
        'a small insect that feeds on blood and spreads disease',
      ],
    }
  ),
  word('mouth', '입', 2, 'noun',
    ['눈', '코', '귀', '손', '발', '머리', '어깨', '무릎', '가슴', '허리'],
    tips({
      etymology: '고대 영어 \'muth\'에서 유래했으며, 먹고 말하는 신체 부위를 뜻하는 게르만어 계열의 단어입니다.',
      visual: '음식을 먹거나 크게 웃을 때 벌어지는 얼굴의 아랫부분을 상상해 보세요.',
      soundAlike: '마우스(mouse)와 발음이 비슷하지만 끝소리를 번데기 발음(th)으로 부드럽게 내뱉는 것이 특징입니다.',
      context: '강의 입구나 동굴의 입구를 나타낼 때도 이 단어를 사용하여 \'입구\'라는 비유적 의미로 쓰입니다.',
      synonymAntonym: '말을 하는 통로인 \'lips\'와 유사하며, 신체의 끝부분인 \'feet\'과는 대조적인 위치에 있습니다.',
    }),
    {
      definition: 'The opening in the lower part of the human face through which food is taken in and vocal sounds are emitted.',
      synonyms: ['oral cavity', 'lips', 'jaws'],
      antonyms: ['anus', 'source', 'origin'],
      exampleSentences: [
        { en: 'She covered her open face with her hand to hide her surprise.', ko: '그녀는 놀람을 감추기 위해 손으로 벌어진 입을 가렸다.' },
        { en: 'The baby opened wide to take a spoonful of warm porridge.', ko: '아기는 따뜻한 죽 한 숟가락을 먹으려고 입을 크게 벌렸다.' },
      ],
      wordDistractors: ['mouse', 'mound', 'moth'],
      definitionDistractors: [
        'the entrance or opening of a cave or tunnel',
        'the organ responsible for tasting and digesting food',
        'the passage in the throat through which air flows to the lungs',
      ],
    }
  ),
  word('move', '움직이다', 3, 'verb',
    ['멈추다', '고정하다', '침묵하다', '쉬다', '거절하다', '방해하다', '지연하다', '포기하다', '잠자다', '관찰하다'],
    tips({
      etymology: '라틴어 \'movere\'에서 유래하여 위치나 상태를 바꾼다는 근본적인 의미를 담고 있습니다.',
      visual: '체스판 위에서 말을 신중하게 한 칸 옆으로 옮기는 선수의 손을 상상해 보세요.',
      soundAlike: '무거운 짐을 \'무\'리해서 \'브\'(v)드럽게 옮기는 모습을 연상하며 발음해 보세요.',
      context: '단순한 신체 활동뿐만 아니라 전략적인 결정이나 거주지 이전 등 큰 변화를 말할 때도 쓰입니다.',
      synonymAntonym: 'action과 동의어 관계이며, 정지를 뜻하는 stop이나 inactivity와 반대됩니다.',
    }),
    {
      definition: 'to change position or go from one place to another, or to cause something to do so',
      synonyms: ['shift', 'relocate', 'proceed'],
      antonyms: ['stop', 'stay', 'remain'],
      exampleSentences: [
        { en: 'Please move your car to the other side of the street.', ko: '차를 길 반대편으로 옮겨 주세요.' },
        { en: 'The children moved closer to the stage to see better.', ko: '아이들은 더 잘 보기 위해 무대 쪽으로 가까이 이동했다.' },
      ],
      wordDistractors: ['movie', 'prove', 'groove'],
      definitionDistractors: [
        'to remove something permanently from its original location',
        'to vibrate or shake rapidly back and forth',
        'to arrange objects in a specific order or pattern',
      ],
    }
  ),
  word('movie', '영화', 1, 'noun',
    ['연극', '음악', '소설', '그림', '사진', '무대', '배우', '감독', '관객', '축제'],
    tips({
      etymology: '움직이는 그림이라는 뜻의 \'moving picture\'를 줄여서 만든 단어입니다.',
      visual: '어두운 극장에서 커다란 스크린을 통해 영상이 상영되는 장면을 상상해 보세요.',
      soundAlike: '무비(movie)를 보러 \'무비\'건조한 일상을 벗어나 극장으로 간다고 생각해보세요.',
      context: '주말에 친구들과 팝콘을 먹으며 극장에서 관람하는 대중적인 영상 매체를 뜻합니다.',
      synonymAntonym: 'film과 유사하며, 정지된 사진인 photo나 실제 삶인 reality와 대비됩니다.',
    }),
    {
      definition: 'A story or event recorded by a camera as a set of moving images and shown in a theater or on television.',
      synonyms: ['film', 'motion picture', 'flick'],
      antonyms: ['reality', 'still photo', 'live performance'],
      exampleSentences: [
        { en: 'We decided to watch a romantic comedy at the local cinema last night.', ko: '우리는 어젯밤 동네 영화관에서 로맨틱 코미디 영화를 보기로 결정했다.' },
        { en: 'The director spent three years filming his latest science fiction masterpiece.', ko: '감독은 그의 최신 공상 과학 영화 걸작을 촬영하는 데 3년을 보냈다.' },
      ],
      wordDistractors: ['move', 'mover', 'novice'],
      definitionDistractors: [
        'a live performance on stage by actors in front of an audience',
        'a collection of still photographs arranged in a sequence',
        'a short video clip shared on social media platforms',
      ],
    }
  ),
  word('much', '많은', 2, 'adjective',
    ['적은', '희귀한', '부족한', '가벼운', '작은', '단순한', '좁은', '짧은', '낮은', '평범한'],
    tips({
      etymology: '고대 영어 \'mycel\'에서 유래하여 크기나 양이 거대함을 뜻하게 되었습니다.',
      visual: '커다란 창고에 물건이 가득 쌓여서 천장까지 닿아있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'머치\'이므로 \'머리\'속에 지식이 \'머치(많이)\' 들어있다고 외워보세요.',
      context: '셀 수 없는 명사의 양을 강조하거나 부정문, 의문문에서 정도를 나타낼 때 주로 쓰입니다.',
      synonymAntonym: '양을 나타내는 a lot of와 비슷하지만, little과는 정반대의 개념입니다.',
    }),
    {
      definition: 'existing or occurring in a large amount, quantity, or degree',
      synonyms: ['abundant', 'plentiful', 'considerable'],
      antonyms: ['little', 'insufficient', 'scant'],
      exampleSentences: [
        { en: 'There is not food left in the refrigerator after the party.', ko: '파티가 끝난 후 냉장고에 음식이 많이 남아 있지 않다.' },
        { en: 'He spent time researching the history of the ancient ruins.', ko: '그는 고대 유적의 역사를 조사하는 데 많은 시간을 보냈다.' },
      ],
      wordDistractors: ['mulch', 'munch', 'match'],
      definitionDistractors: [
        'having great importance or significance in a situation',
        'occurring frequently or on a regular basis',
        'exceeding what is expected in terms of quality or value',
      ],
    }
  ),
  word('mud', '진흙', 5, 'noun',
    ['모래', '먼지', '바위', '안개', '구름', '바람', '나무', '풀밭', '연기', '얼음'],
    tips({
      etymology: '중세 저지 독일어인 \'mudde\'에서 유래되었으며, 축축하고 끈적한 흙을 의미합니다.',
      visual: '비가 온 뒤 장화를 신고 웅덩이 속의 끈적한 흙탕물을 밟는 모습을 상상해 보세요.',
      soundAlike: '\'머드\' 발음은 머드팩(Mud pack)을 떠올리면 기억하기 쉽습니다.',
      context: '주로 비가 온 뒤의 땅 상태나 도자기 제작, 피부 관리용 팩을 설명할 때 사용됩니다.',
      synonymAntonym: 'sludge나 muck과 비슷하며, 바짝 마른 상태인 dust와는 반대되는 개념입니다.',
    }),
    {
      definition: 'soft, wet earth that is sticky and often found on the ground after rain',
      synonyms: ['sludge', 'muck', 'mire'],
      antonyms: ['dust', 'sand', 'dryness'],
      exampleSentences: [
        { en: 'The children\'s shoes were covered in thick brown slime after playing in the garden.', ko: '아이들이 정원에서 논 뒤에 신발이 두꺼운 갈색 진흙으로 뒤덮였습니다.' },
        { en: 'Heavy rain turned the dirt path into a slippery mess that was difficult to walk on.', ko: '폭우로 인해 흙길이 걷기 힘든 미끄러운 진흙탕으로 변했습니다.' },
      ],
      wordDistractors: ['mug', 'bud', 'dud'],
      definitionDistractors: [
        'fine dry particles of earth or waste matter found on surfaces',
        'a mixture of cement and water used in construction',
        'loose granular material formed by the erosion of rocks',
      ],
    }
  ),
  word('multiple', '다수의', 6, 'adjective',
    ['단일의', '고립된', '유일한', '단순한', '희귀한', '부족한', '일시적인', '고정된', '부분적인', '독립된'],
    tips({
      etymology: '라틴어 \'multiplus\'에서 유래했으며, \'multi(많은)\'와 \'plus(겹치다)\'가 합쳐져 여러 겹으로 이루어진 상태를 뜻합니다.',
      visual: '하나의 상자 안에 여러 개의 작은 상자들이 겹겹이 쌓여 있는 복합적인 구조를 상상해 보세요.',
      soundAlike: '\'멀티\'라는 발음은 우리가 흔히 쓰는 \'멀티태스킹\'처럼 여러 일을 동시에 하는 복합적인 상황을 연상시킵니다.',
      context: '수학에서 배수를 뜻하기도 하며, 일상에서는 여러 원인이 얽힌 복합적인 문제를 다룰 때 자주 쓰입니다.',
      synonymAntonym: '단 하나를 뜻하는 single이나 sole과는 반대되며, 다양한 요소가 섞인 complex와 결을 같이 합니다.',
    }),
    {
      definition: 'consisting of or involving many individual parts, elements, or relations',
      synonyms: ['numerous', 'manifold', 'various'],
      antonyms: ['single', 'individual', 'sole'],
      exampleSentences: [
        { en: 'The patient suffered from various injuries after the car accident.', ko: '그 환자는 자동차 사고 이후 여러 부위의 복합적인 부상을 입었습니다.' },
        { en: 'This software allows users to open several documents in different windows simultaneously.', ko: '이 소프트웨어는 사용자가 여러 창에서 복합적인 문서들을 동시에 열 수 있게 해줍니다.' },
      ],
      wordDistractors: ['multiply', 'municipal', 'multitude'],
      definitionDistractors: [
        'occurring one at a time in a sequential order',
        'having the ability to perform several functions simultaneously',
        'being the only one of its kind in a particular category',
      ],
    }
  ),
  word('multiply', '늘리다', 7, 'verb',
    ['나누다', '줄이다', '빼다', '정지하다', '축소하다', '고정하다', '유지하다', '감소하다', '제거하다', '분리하다'],
    tips({
      etymology: '라틴어 \'multi(많은)\'와 \'ply(접다/층)\'가 합쳐져 여러 겹으로 늘어난다는 의미를 담고 있습니다.',
      visual: '세포 하나가 두 개로, 두 개가 네 개로 순식간에 불어나는 현미경 속 모습을 상상해 보세요.',
      soundAlike: '멀티(Multi) 탭에 플러그(Ply)를 여러 개 꽂아 전자기기 사용 대수를 늘리는 장면을 연상하세요.',
      context: '수학에서 곱셈을 할 때뿐만 아니라 인구, 세균, 혹은 문제가 걷잡을 수 없이 불어날 때 자주 쓰입니다.',
      synonymAntonym: '증가시키는 increase와 반대로 수치를 깎아내리는 decrease를 함께 기억하면 유용합니다.',
    }),
    {
      definition: 'to increase greatly in number or amount, or to perform the mathematical operation of scaling a number by another',
      synonyms: ['proliferate', 'increase', 'propagate'],
      antonyms: ['decrease', 'diminish', 'divide'],
      exampleSentences: [
        { en: 'Bacteria can grow and reproduce at an alarming rate if left in warm temperatures.', ko: '박테리아는 따뜻한 온도에 방치되면 놀라운 속도로 증식하고 늘어날 수 있습니다.' },
        { en: 'Our problems seemed to grow and become more complex as the deadline approached.', ko: '마감 기한이 다가올수록 우리의 문제는 더욱 늘어나고 복잡해지는 것 같았습니다.' },
      ],
      wordDistractors: ['multiple', 'simplify', 'amplify'],
      definitionDistractors: [
        'to divide a number into equal parts using arithmetic',
        'to combine different substances into a single mixture',
        'to reduce the size or quantity of something gradually',
      ],
    }
  ),
  word('murder', '살인', 4, 'noun',
    ['절도', '사기', '폭행', '납치', '방화', '협박', '뇌물', '강도', '유기', '횡령'],
    tips({
      etymology: '고대 게르만어 \'morth\'에서 유래했으며, 이는 죽음이나 비밀스러운 살해를 뜻하는 뿌리 단어입니다.',
      visual: '어두운 골목길에 떨어진 범행 도구와 노란색 경찰 통제선을 상상해 보세요.',
      soundAlike: '\'머더\' 발음이 \'멀다\'와 비슷하죠? 생명을 멀리 떠나보내는 끔찍한 행위라고 기억하세요.',
      context: '법정 드라마나 추리 소설에서 범인을 찾을 때 가장 핵심이 되는 강력 범죄 키워드입니다.',
      synonymAntonym: 'homicide는 법률적 용어로 쓰이며, 반대로 생명을 구하는 것은 rescue나 save로 표현합니다.',
    }),
    {
      definition: 'The unlawful and intentional killing of one human being by another.',
      synonyms: ['homicide', 'slaughter', 'assassination'],
      antonyms: ['birth', 'protection', 'resurrection'],
      exampleSentences: [
        { en: 'The police launched a full-scale investigation to solve the mysterious murder case.', ko: '경찰은 의문의 살인 사건을 해결하기 위해 전면적인 수사에 착수했습니다.' },
        { en: 'He was found guilty of first-degree murder and sentenced to life in prison.', ko: '그는 1급 살인죄로 유죄 판결을 받고 종신형을 선고받았습니다.' },
      ],
      wordDistractors: ['murmur', 'marder', 'muster'],
      definitionDistractors: [
        'a violent physical assault that causes serious bodily injury',
        'the act of stealing valuable property from another person',
        'the accidental or unintentional causing of another person\'s death',
      ],
    }
  ),
  word('muscle', '근육', 5, 'noun',
    ['뼈', '피부', '관절', '신경', '혈관', '심장', '폐', '위장', '뇌', '척추'],
    tips({
      etymology: '라틴어 \'musculus\'에서 유래했으며, 이는 \'작은 쥐\'라는 뜻입니다. 근육이 움직이는 모양이 피부 아래에서 쥐가 움직이는 것 같아 붙여진 이름입니다.',
      visual: '헬스장에서 무거운 덤벨을 들어 올릴 때 팔뚝에 단단하게 솟아오르는 알통을 상상해 보세요.',
      soundAlike: '\'머슬\'이라고 발음되는데, 힘을 쓸 때 \'머\'쓱할 정도로 \'슬\'쩍 근육이 튀어나온다고 연상해 보세요.',
      context: '신체적인 힘을 뜻할 때도 쓰이지만, 정치적이나 경제적인 \'영향력\'이나 \'강제력\'을 의미할 때도 자주 사용됩니다.',
      synonymAntonym: '강인함을 뜻하는 brawn과 유의어이며, 신체적 약함을 뜻하는 frailty와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A band or bundle of fibrous tissue in a human or animal body that has the ability to contract, producing movement in or maintaining the position of parts of the body.',
      synonyms: ['sinew', 'brawn', 'tendon'],
      antonyms: ['weakness', 'frailty', 'enervation'],
      exampleSentences: [
        { en: 'Regular exercise helps to build strength and increase the size of every major group in the body.', ko: '규칙적인 운동은 체력을 기르고 신체의 모든 주요 부위의 크기를 키우는 데 도움이 됩니다.' },
        { en: 'The athlete suffered a painful strain in his calf during the final sprint of the race.', ko: '그 선수는 경주 마지막 질주 중에 종아리에 고통스러운 경련을 겪었습니다.' },
      ],
      wordDistractors: ['mussel', 'muzzle', 'hustle'],
      definitionDistractors: [
        'the skeletal framework that supports the body\'s structure',
        'a thick layer of protective tissue covering internal organs',
        'a flexible joint that connects two bones together',
      ],
    }
  ),
  word('museum', '박물관', 3, 'noun',
    ['도서관', '미술관', '전시장', '유적지', '기념관', '공연장', '연구소', '문화재', '수집품', '관광지'],
    tips({
      etymology: '그리스 신화의 예술과 학문의 여신인 \'뮤즈(Muse)\'들이 머무는 곳이라는 뜻에서 유래했습니다.',
      visual: '거대한 석조 건물 입구에 공룡 뼈대나 고대 조각상이 전시되어 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'뮤-지엄\'인데, \'뮤즈(Muse)가 있는 엄(um)청난 장소\'라고 기억하면 쉽습니다.',
      context: '역사적인 유물이나 예술 작품을 보존하고 대중에게 공개하는 공공 기관을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '갤러리나 전시관과 비슷하지만, 역사적 가치가 있는 물건을 보관한다는 점이 특징입니다.',
    }),
    {
      definition: 'A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited.',
      synonyms: ['gallery', 'exhibition', 'repository'],
      antonyms: ['wilderness', 'junkyard', 'private home'],
      exampleSentences: [
        { en: 'The local history center displays ancient artifacts from the Roman era.', ko: '지역 역사 박물관은 로마 시대의 고대 유물들을 전시합니다.' },
        { en: 'Visitors are requested not to take flash photography inside the main hall.', ko: '방문객들은 본관 내부에서 플래시 사진을 찍지 않도록 요청받습니다.' },
      ],
      wordDistractors: ['mausoleum', 'musical', 'muslin'],
      definitionDistractors: [
        'a private collection of rare books and manuscripts',
        'a large indoor venue where concerts and shows are performed',
        'a shop where antiques and second-hand goods are sold',
      ],
    }
  ),
  word('mushroom', '버섯', 6, 'noun',
    ['채소', '과일', '나물', '허브', '이끼', '곰팡이', '잡초', '뿌리', '씨앗', '꽃잎'],
    tips({
      etymology: '프랑스어 \'mousseron\'에서 유래되었으며, 이끼(moss)가 낀 곳에서 자라는 식물이라는 의미를 담고 있습니다.',
      visual: '비가 온 뒤 숲속 나무 밑에 갓 모양을 한 식물이 옹기종기 솟아오른 모습을 상상해 보세요.',
      soundAlike: '\'머쉬룸\' 발음이 \'머리(mush)를 룸(room) 밖으로 내밀다\'처럼 들리기도 합니다. 흙 밖으로 갓을 내민 모습을 떠올리세요.',
      context: '요리 재료로 쓰이기도 하지만, 무언가 갑자기 급격하게 늘어날 때 동사로도 자주 쓰입니다.',
      synonymAntonym: '식용 가능한 \'fungus\'와 유사하며, 인공적인 구조물과는 반대되는 자연의 생명체입니다.',
    }),
    {
      definition: 'A fungal growth typically taking the form of a domed cap on a stalk, often edible.',
      synonyms: ['fungus', 'toadstool', 'champignon'],
      antonyms: ['animal', 'mineral', 'plant'],
      exampleSentences: [
        { en: 'Wild varieties found in the forest can be poisonous and should not be eaten.', ko: '숲에서 발견되는 야생 품종들은 독이 있을 수 있으므로 먹어서는 안 됩니다.' },
        { en: 'The chef added sliced pieces to the creamy pasta sauce for extra flavor.', ko: '요리사는 풍미를 더하기 위해 크림 파스타 소스에 얇게 썬 조각들을 넣었습니다.' },
      ],
      wordDistractors: ['heirloom', 'pushbroom', 'muslin'],
      definitionDistractors: [
        'a flowering plant that grows from a bulb in the spring',
        'a type of leafy green vegetable used in salads',
        'a parasitic organism that feeds on decaying wood',
      ],
    }
  ),
  word('must', '필수품', 1, 'noun',
    ['식사', '감각', '컴퓨터', '면제, 공제', '크레용', '안내자', '비난', '위선자', '조각가', '거짓, 허위'],
    tips({
      etymology: '고대 영어 \'moste\'에서 유래하여 의무나 필요성을 나타내는 강력한 표현으로 자리 잡았습니다.',
      visual: '반드시 통과해야 하는 좁은 문이나 꼭 챙겨야 할 필수 아이템을 상상해 보세요.',
      soundAlike: '\'머스트\'는 \'멋있다\'와 발음이 비슷하죠? 멋진 사람이 되려면 꼭 해야 할 일들이 많다고 생각하세요.',
      context: '일상 대화에서 \'필수품\'을 지칭할 때 명사로 사용되어 \'꼭 가져야 할 것\'이라는 의미를 전달합니다.',
      synonymAntonym: '필수라는 뜻의 necessity와 반대되는 선택 사항인 option을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'something that is absolutely necessary or required to be done, seen, or possessed',
      synonyms: ['necessity', 'requirement', 'essential'],
      antonyms: ['option', 'luxury', 'extra'],
      exampleSentences: [
        { en: 'A warm jacket is an absolute necessity and a total requirement for anyone visiting the Arctic.', ko: '북극을 방문하는 누구에게나 따뜻한 재킷은 절대적인 필수품입니다.' },
        { en: 'This new smartphone app is a definite requirement for travelers who want to save money.', ko: '이 새로운 스마트폰 앱은 돈을 아끼고 싶어 하는 여행객들에게 확실한 필수 아이템입니다.' },
      ],
      wordDistractors: ['mist', 'mast', 'bust'],
      definitionDistractors: [
        'a strong personal desire or wish that may or may not be fulfilled',
        'a suggestion or recommendation that is optional to follow',
        'a feeling of obligation arising from social pressure',
      ],
    }
  ),
  word('mutual', '상호의', 10, 'adjective',
    ['일방적인', '개인적인', '독립적인', '적대적인', '우연한', '일시적인', '강제적인', '비밀의', '공식적인', '사소한'],
    tips({
      etymology: '라틴어 \'mutuus\'에서 유래했으며, 이는 \'교환하다\'라는 의미를 담고 있어 주고받는 관계를 뜻합니다.',
      visual: '두 사람이 서로 악수를 하거나 선물을 동시에 주고받는 그림을 상상해 보세요.',
      soundAlike: '\'뮤추얼\' 발음이 \'무쳐\'와 비슷하니, 두 재료가 서로 \'무쳐\'져서 하나가 된 상호 관계를 떠올려 보세요.',
      context: '비즈니스 파트너십이나 연인 관계에서 양측이 모두 동의하거나 느낄 때 자주 쓰입니다.',
      synonymAntonym: 'reciprocal과 의미가 통하며, 한쪽만 일방적으로 행하는 unilateral과는 반대되는 개념입니다.',
    }),
    {
      definition: 'held in common by two or more parties or shared by each of two or more people toward one another',
      synonyms: ['reciprocal', 'shared', 'joint'],
      antonyms: ['unilateral', 'separate', 'detached'],
      exampleSentences: [
        { en: 'The two companies decided to end their partnership by agreement for their benefit.', ko: '두 회사는 서로의 이익을 위해 합의하에 파트너십을 종료하기로 결정했습니다.' },
        { en: 'Respect is a fundamental building block of any healthy and lasting relationship.', ko: '상호 존중은 건강하고 오래 지속되는 모든 관계의 근본적인 토대입니다.' },
      ],
      wordDistractors: ['mutable', 'mature', 'neutral'],
      definitionDistractors: [
        'belonging exclusively to one party in an agreement',
        'imposed by an external authority without consent',
        'occurring naturally without any human intervention',
      ],
    }
  ),
  word('myth', '신화', 7, 'noun',
    ['사실', '역사', '증거', '현실', '과학', '진리', '기록', '실화', '논리', '통계'],
    tips({
      etymology: '그리스어 mythos에서 유래했으며, 이는 입에서 입으로 전해지는 이야기나 말을 뜻합니다.',
      visual: '올림포스 산 위에 번개를 든 제우스나 거대한 용이 구름 사이를 날아다니는 신비로운 장면을 상상해 보세요.',
      soundAlike: '발음이 \'미스\'와 비슷하죠? \'미스(miss) 테리한 신화 속 이야기\'라고 연상하면 기억하기 쉽습니다.',
      context: '고대 문명의 기원을 설명하거나 대중이 잘못 믿고 있는 상식을 바로잡을 때 자주 등장하는 단어입니다.',
      synonymAntonym: '전설을 뜻하는 legend와 비슷하지만, 실제 사실을 의미하는 fact와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A traditional story concerning the early history of a people or explaining some natural or social phenomenon, typically involving supernatural beings or events.',
      synonyms: ['legend', 'fable', 'folklore'],
      antonyms: ['fact', 'reality', 'truth'],
      exampleSentences: [
        { en: 'Ancient civilizations created various stories to explain the origins of the universe through divine intervention.', ko: '고대 문명들은 신의 개입을 통해 우주의 기원을 설명하기 위해 다양한 신화들을 만들어냈다.' },
        { en: 'It is a common misconception that humans only use ten percent of their brain capacity.', ko: '인간이 뇌 용량의 10퍼센트만 사용한다는 것은 흔히 퍼져 있는 잘못된 근거 없는 믿음이다.' },
      ],
      wordDistractors: ['mirth', 'moth', 'myrrh'],
      definitionDistractors: [
        'a proven scientific theory supported by extensive evidence',
        'a historical account based on verified facts and documents',
        'a religious text that contains moral teachings and prayers',
      ],
    }
  ),
  word('nail', '손톱', 4, 'noun',
    ['머리카락', '피부', '관절', '근육', '뼈', '심장', '폐', '위장', '치아', '잇몸'],
    tips({
      etymology: '고대 영어 \'nægel\'에서 유래했으며, 금속 못과 손가락 끝의 딱딱한 판이라는 두 가지 의미를 모두 포함하게 되었습니다.',
      visual: '매니큐어를 칠하거나 손톱깎이로 손톱을 다듬는 모습을 상상해 보세요.',
      soundAlike: '\'네일\' 아트라는 표현은 한국에서도 일상적으로 쓰이므로 손톱 관리 샵을 떠올리면 쉽습니다.',
      context: '미용 목적으로 손톱을 가꾸거나, 무언가를 고정하기 위해 망치로 못을 박을 때도 사용됩니다.',
      synonymAntonym: '신체 부위로서의 유의어는 claw가 있으며, 반대되는 부드러운 살 부분은 flesh라고 할 수 있습니다.',
    }),
    {
      definition: 'The hard, thin covering that grows over the upper tips of the fingers and toes.',
      synonyms: ['fingernail', 'claw', 'spike'],
      antonyms: ['flesh', 'skin', 'softness'],
      exampleSentences: [
        { en: 'She painted each fingernail with a bright shade of red before the party.', ko: '그녀는 파티에 가기 전에 손톱 하나하나를 밝은 빨간색으로 칠했다.' },
        { en: 'Keep your hands clean and trim your nails regularly to maintain good hygiene.', ko: '위생을 유지하기 위해 손을 깨끗이 하고 손톱을 정기적으로 깎으세요.' },
      ],
      wordDistractors: ['snail', 'trail', 'pail'],
      definitionDistractors: [
        'a small metal fastener used to hold pieces of wood together',
        'a sharp blade attached to a handle for cutting materials',
        'a thin strand of fiber used for stitching fabric',
      ],
    }
  ),
  word('naive', '순진한', 8, 'adjective',
    ['노련한', '복잡한', '냉소적인', '세련된', '의심많은', '전문적인', '인위적인', '교활한', '성숙한', '치밀한'],
    tips({
      etymology: '프랑스어 \'naïf\'에서 유래했으며, \'태어난 그대로의\'라는 의미를 담고 있어 때 묻지 않은 상태를 뜻합니다.',
      visual: '세상 물정 모르는 어린아이가 커다란 눈을 반짝이며 낯선 사람의 말을 곧이곧대로 믿는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'나이브\'와 유사한데, \'나 이부(이 부분) 몰라요\'라고 순진하게 말하는 상황을 떠올리면 쉽습니다.',
      context: '긍정적으로는 순수함을 뜻하지만, 부정적으로는 경험이 부족해 속기 쉽다는 어감을 가집니다.',
      synonymAntonym: '순수한 innocent와 유사하며, 세상 이치에 밝고 노련한 sophisticated와는 반대되는 개념입니다.',
    }),
    {
      definition: 'showing a lack of experience, wisdom, or judgment, often by being too willing to believe that someone is telling the truth',
      synonyms: ['innocent', 'unsophisticated', 'gullible'],
      antonyms: ['sophisticated', 'experienced', 'skeptical'],
      exampleSentences: [
        { en: 'It was rather simple of him to believe that the stranger would return the lost money.', ko: '그 낯선 사람이 잃어버린 돈을 돌려줄 것이라고 믿다니 그는 참 순진했다.' },
        { en: 'She had a very trusting view of politics before she started working for the government.', ko: '그녀는 정부에서 일하기 전까지 정치에 대해 매우 순진한 견해를 가지고 있었다.' },
      ],
      wordDistractors: ['knave', 'native', 'nerve'],
      definitionDistractors: [
        'having a natural talent or ability that requires no training',
        'being deliberately deceptive or manipulative toward others',
        'showing deep knowledge and understanding of a complex subject',
      ],
    }
  ),
  word('naked', '발가벗은', 5, 'adjective',
    ['화려한', '가려진', '복잡한', '단단한', '부드러운', '인공적인', '신비로운', '거대한', '평범한', '위험한'],
    tips({
      etymology: '고대 영어 nacod에서 유래되었으며, 이는 \'덮여 있지 않은\' 상태를 의미합니다.',
      visual: '옷을 하나도 입지 않은 상태나 껍질을 벗긴 과일의 매끈한 표면을 상상해 보세요.',
      soundAlike: '발음이 \'네이키드\'이므로 \'내 몸이 키득키득(부끄러워서)\' 웃는 상황으로 연상해 보세요.',
      context: '단순히 몸에 옷이 없는 상태뿐만 아니라, 안경 없이 맨눈으로 볼 때(naked eye)도 자주 쓰입니다.',
      synonymAntonym: 'nude와 유의어 관계이며, 옷을 갖춰 입은 상태인 dressed와는 반대 개념입니다.',
    }),
    {
      definition: 'not wearing any clothes or not covered by a natural or protective layer',
      synonyms: ['nude', 'bare', 'uncovered'],
      antonyms: ['clothed', 'covered', 'dressed'],
      exampleSentences: [
        { en: 'The tiny birds were born naked and blind in their nest.', ko: '그 작은 새들은 둥지에서 털도 없고 눈도 보이지 않는 상태로 태어났다.' },
        { en: 'Bacteria are too small to be seen with the naked eye.', ko: '박테리아는 너무 작아서 맨눈으로는 볼 수 없다.' },
      ],
      wordDistractors: ['baked', 'raked', 'staked'],
      definitionDistractors: [
        'wearing very thin or lightweight clothing',
        'stripped of all possessions or belongings',
        'visible only under specific lighting conditions',
      ],
    }
  ),
  word('nanny', '유모', 9, 'noun',
    ['선생님', '요리사', '간호사', '정원사', '비서', '운전기사', '경비원', '청소부', '조수', '통역사'],
    tips({
      etymology: '어린아이들이 할머니(nan)처럼 친근하게 부르던 애칭에서 유래하여 아이를 돌보는 사람을 뜻하게 되었습니다.',
      visual: '부모님이 외출한 사이 거실에서 아이와 함께 동화책을 읽어주는 다정한 여성의 모습을 상상해 보세요.',
      soundAlike: '\'내니(nanny)\'는 \'내(na) 아이를 돌봐주는 언니(nny)\'와 발음이 비슷하여 기억하기 쉽습니다.',
      context: '주로 맞벌이 가정이나 부유한 가정에서 아이의 양육과 교육을 전담하기 위해 고용하는 전문 인력을 지칭할 때 쓰입니다.',
      synonymAntonym: '아이를 돌보는 nursemaid와 유사하며, 부모를 뜻하는 parent와는 역할상 대조를 이룹니다.',
    }),
    {
      definition: 'A person who is paid to live with a family and take care of their children in their own home.',
      synonyms: ['childminder', 'nursemaid', 'au pair'],
      antonyms: ['employer', 'parent', 'ward'],
      exampleSentences: [
        { en: 'The wealthy couple hired a professional to look after their newborn twins while they were at work.', ko: '그 부유한 부부는 직장에 있는 동안 갓 태어난 쌍둥이를 돌볼 전문 유모를 고용했습니다.' },
        { en: 'She spent three years working as a live-in caregiver for a family in London.', ko: '그녀는 런던의 한 가정에서 입주 유모로 3년 동안 일했습니다.' },
      ],
      wordDistractors: ['granny', 'nappy', 'uncanny'],
      definitionDistractors: [
        'a professional tutor who teaches academic subjects at home',
        'a nurse who provides medical care in a hospital setting',
        'a housekeeper who manages the daily chores of a household',
      ],
    }
  ),
  word('narrate', '이야기하다', 6, 'verb',
    ['찬성하다, 승인, 동의\n(approval 승인)\n(approve 찬성하다)\n(prove 증명하다)', '트집 잡다, 불평하다', '부인하다, 반박하다', '두려워하다', '부과하다', '~을 버리다', '파내다, 발굴하다', '일반화하다, 보편화하다', '명령하다, 지시하다, 권한, 지시, 명령', '선택하다'],
    tips({
      etymology: '라틴어 narrare에서 유래했으며, \'알게 하다\' 또는 \'말하다\'라는 의미를 담고 있습니다.',
      visual: '다큐멘터리 화면 뒤에서 차분한 목소리로 상황을 설명하는 성우의 모습을 상상해 보세요.',
      soundAlike: '\'내레이트\'는 다큐멘터리의 \'내레이션(narration)\'을 떠올리면 기억하기 쉽습니다.',
      context: '소설의 화자가 독자에게 사건의 전말을 들려주거나 영화의 해설자가 상황을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '이야기를 들려주는 relate와 대조적으로, 아무 말도 하지 않는 silence와 함께 기억하세요.',
    }),
    {
      definition: 'to give a spoken or written account of a story or a series of events',
      synonyms: ['recount', 'relate', 'describe'],
      antonyms: ['suppress', 'conceal', 'silence'],
      exampleSentences: [
        { en: 'The famous actor was hired to provide the voice and tell the story for the nature documentary.', ko: '그 유명한 배우는 자연 다큐멘터리의 목소리를 맡아 이야기를 들려주기 위해 고용되었습니다.' },
        { en: 'She began to recount the events of her childhood to the gathered audience.', ko: '그녀는 모여든 청중들에게 자신의 어린 시절 사건들을 이야기하기 시작했습니다.' },
      ],
      wordDistractors: ['navigate', 'nitrate', 'aerate'],
      definitionDistractors: [
        'to translate a written text from one language into another',
        'to perform a dramatic role on a stage or in a film',
        'to argue passionately in favor of a particular viewpoint',
      ],
    }
  ),
  word('narrow', '좁은', 7, 'adjective',
    ['광범위한', '거대한', '평평한', '복잡한', '단단한', '유연한', '희미한', '날카로운', '부드러운', '웅장한'],
    tips({
      etymology: '고대 영어 \'nearu\'에서 유래했으며, 이는 \'제한된\' 또는 \'압축된\' 상태를 의미합니다.',
      visual: '양쪽 벽이 몸에 닿을 듯이 아주 가깝게 붙어 있는 좁은 골목길을 상상해 보세요.',
      soundAlike: '\'내로(narrow)\'라 발음되는데, 통로가 너무 좁아서 \'내\' 몸이 \'로\'봇처럼 뻣뻣하게 지나가는 장면을 떠올려보세요.',
      context: '공간적인 너비뿐만 아니라, 시야나 생각의 범위가 편협할 때도 자주 사용됩니다.',
      synonymAntonym: '넓은 범위를 뜻하는 wide나 broad와 반대되는 개념으로 기억하면 쉽습니다.',
    }),
    {
      definition: 'measuring a small distance from one side to the other, especially in comparison with length',
      synonyms: ['slender', 'tight', 'restricted'],
      antonyms: ['wide', 'broad', 'spacious'],
      exampleSentences: [
        { en: 'The car struggled to pass through the extremely thin street between the old buildings.', ko: '그 차는 오래된 건물들 사이의 매우 좁은 거리를 통과하느라 애를 먹었다.' },
        { en: 'He has a very limited view of the world and refuses to consider new ideas.', ko: '그는 세상에 대해 매우 좁은 견해를 가지고 있으며 새로운 아이디어를 고려하기를 거부한다.' },
      ],
      wordDistractors: ['narrate', 'sparrow', 'marrow'],
      definitionDistractors: [
        'having a sharp edge or pointed tip that can cut easily',
        'extending far downward from the surface level',
        'lacking brightness or color in an otherwise vivid scene',
      ],
    }
  ),
  word('nasty', '불쾌한', 10, 'adjective',
    ['상쾌한', '친절한', '깨끗한', '우아한', '달콤한', '유익한', '정중한', '화려한', '평화로운', '안전한'],
    tips({
      etymology: '중세 영어 \'nasty\'에서 유래했으며, 원래는 \'더럽고 불결한\' 상태를 묘사할 때 사용되었습니다.',
      visual: '상한 우유에서 나는 고약한 냄새나 진흙탕에 빠진 신발처럼 인상을 찌푸리게 만드는 장면을 상상해 보세요.',
      soundAlike: '\'내스티\'라고 발음할 때 \'내(나의) 스티(스티커)\'가 끈적거리고 지저분해서 기분이 나쁘다고 연상해 보세요.',
      context: '날씨가 몹시 나쁘거나, 사람의 성격이 못됐을 때, 혹은 상처가 심하게 났을 때 두루 쓰입니다.',
      synonymAntonym: '불쾌한 unpleasant와 비슷하지만, 기분 좋은 pleasant와는 정반대의 느낌을 줍니다.',
    }),
    {
      definition: 'highly unpleasant, offensive, or harmful to the senses or mind',
      synonyms: ['unpleasant', 'disgusting', 'vicious'],
      antonyms: ['pleasant', 'agreeable', 'delightful'],
      exampleSentences: [
        { en: 'The sour milk left a very foul and unpleasant taste in my mouth.', ko: '상한 우유 때문에 입안에 아주 불쾌하고 고약한 맛이 남았다.' },
        { en: 'He has a habit of making mean comments that hurt people\'s feelings.', ko: '그는 사람들의 기분을 상하게 하는 못된 말을 하는 버릇이 있다.' },
      ],
      wordDistractors: ['hasty', 'pasty', 'tasty'],
      definitionDistractors: [
        'being extremely careful and cautious in one\'s actions',
        'having a mild or gentle temperament in social settings',
        'showing signs of physical illness or poor health',
      ],
    }
  ),
  word('nation', '국가', 2, 'noun',
    ['반환, 상환', '기능', '변절자', '물결', '민주주의', '찬장', '확인, 확증', '쟁반', '무기', '설명'],
    tips({
      etymology: '라틴어 \'natio(태생, 종족)\'에서 유래하여 같은 혈통과 문화를 공유하는 사람들의 집단을 뜻합니다.',
      visual: '올림픽 개막식에서 각 나라의 국기를 들고 행진하는 선수들의 모습을 상상해 보세요.',
      soundAlike: '\'네이션\' 발음이 \'내 이선(line)\'처럼 들리기도 하죠? 국경선 안에 모인 사람들을 떠올려 보세요.',
      context: '정치적 단위뿐만 아니라 문화적 정체성을 공유하는 공동체를 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'country나 state와 비슷하지만, nation은 주로 문화적, 민족적 유대감을 강조하는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'A large body of people united by common descent, history, culture, or language, inhabiting a particular country or territory.',
      synonyms: ['country', 'state', 'land'],
      antonyms: ['individual', 'colony', 'outcast'],
      exampleSentences: [
        { en: 'The entire population celebrated the anniversary of the founding of their sovereign territory.', ko: '전 국민이 주권 국가의 건국 기념일을 축하했습니다.' },
        { en: 'Leaders from every corner of the globe gathered to discuss the future of the developing world.', ko: '전 세계 각국의 지도자들이 개발도상국들의 미래를 논의하기 위해 모였습니다.' },
      ],
      wordDistractors: ['notion', 'ration', 'station'],
      definitionDistractors: [
        'a small community or village within a larger territory',
        'the government or ruling body of a particular region',
        'a political party that represents the interests of citizens',
      ],
    }
  ),
  word('native', '본토의, 타고난', 4, 'adjective',
    ['인공적인', '후천적인', '이질적인', '기계적인', '일시적인', '가공의', '외부의', '학습된', '변형된', '모방의'],
    tips({
      etymology: '라틴어 \'nativus\'에서 유래했으며, \'nasci(태어나다)\'라는 어근을 통해 태어날 때부터 가지고 있다는 의미를 전달합니다.',
      visual: '갓 태어난 아기가 부모님으로부터 물려받은 눈동자 색깔을 거울로 확인하는 모습을 상상해 보세요.',
      soundAlike: '\'내 이빨(native)\'처럼 태어날 때부터 입안에 원래 자리 잡고 있는 영구치를 떠올리면 쉽습니다.',
      context: '주로 언어 능력이나 동식물의 서식지, 혹은 사람의 천부적인 재능을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '태어날 때부터 가진 \'innate\'와 반대로 나중에 얻게 된 \'acquired\'를 짝지어 기억하세요.',
    }),
    {
      definition: 'belonging to a person by birth or to a thing by its very nature rather than being acquired',
      synonyms: ['innate', 'inherent', 'indigenous'],
      antonyms: ['acquired', 'foreign', 'artificial'],
      exampleSentences: [
        { en: 'Her native talent for mathematics was evident from a very young age.', ko: '그녀의 타고난 수학적 재능은 아주 어린 나이부터 분명하게 드러났다.' },
        { en: 'The biologist studied several species of plants that are native to this specific island.', ko: '그 생물학자는 이 특정 섬이 원산지인 몇몇 식물 종들을 연구했다.' },
      ],
      wordDistractors: ['naive', 'narrative', 'nation'],
      definitionDistractors: [
        'learned or developed through formal education and training',
        'introduced from a different country or environment',
        'temporarily adopted or borrowed from another culture',
      ],
    }
  ),
  word('nature', '자연', 3, 'noun',
    ['인플레이션, 물가 상승', '가죽', '불안, 소요', '스펙트럼', '교수진', '동쪽', '회의', '현수막, 깃발', '열성, 열렬', '장치'],
    tips({
      etymology: '라틴어 \'natura\'에서 유래했으며, \'태어남\'이나 \'본질적인 특성\'이라는 의미를 담고 있습니다.',
      visual: '울창한 숲, 푸른 바다, 그리고 야생 동물이 평화롭게 어우러진 풍경을 상상해 보세요.',
      soundAlike: '\'네이처\'라고 발음하며, 유명한 화장품 브랜드나 과학 잡지 이름을 떠올리면 쉽습니다.',
      context: '환경 보호나 야외 활동을 이야기할 때 가장 기본적으로 쓰이는 단어입니다.',
      synonymAntonym: '인간이 만든 \'artificial\'한 것들과 반대되는 순수한 상태를 의미합니다.',
    }),
    {
      definition: 'The physical world including plants, animals, landscapes, and other features of the earth, as opposed to humans or human creations.',
      synonyms: ['environment', 'wildlife', 'scenery'],
      antonyms: ['nurture', 'civilization', 'technology'],
      exampleSentences: [
        { en: 'Spending time in the forest helps people feel more connected to the world around them.', ko: '숲에서 시간을 보내는 것은 사람들이 주변 세계와 더 연결되어 있다고 느끼도록 도와줍니다.' },
        { en: 'Photographers often travel to remote areas to capture the beauty of the wilderness.', ko: '사진작가들은 황야의 아름다움을 담기 위해 종종 외딴 지역으로 여행을 떠납니다.' },
      ],
      wordDistractors: ['mature', 'nurture', 'natured'],
      definitionDistractors: [
        'the inherent character or personality of a particular individual',
        'the process of caring for and encouraging growth in a child',
        'a branch of science that studies the laws of the universe',
      ],
    }
  ),
  word('navy', '해군', 5, 'noun',
    ['공군', '육군', '해병대', '경찰', '소방관', '항해사', '잠수함', '전투기', '보병', '기갑부대'],
    tips({
      etymology: '라틴어 \'navis(배)\'에서 유래하여 바다에서 활동하는 군대를 뜻하게 되었습니다.',
      visual: '짙은 파란색 제복을 입고 거대한 군함 위에 서 있는 군인들의 모습을 상상해 보세요.',
      soundAlike: '\'내비\'게이션을 켜고 바다 길을 찾아가는 군함들을 떠올리면 기억하기 쉽습니다.',
      context: '국방의 의무 중 바다를 지키는 군사 조직이나 그들이 사용하는 짙은 청색을 표현할 때 쓰입니다.',
      synonymAntonym: 'fleet(함대)와 유사한 맥락에서 쓰이며, 육군을 뜻하는 army와 대조적인 개념입니다.',
    }),
    {
      definition: 'The branch of a nation\'s armed forces that conducts military operations at sea using ships and submarines.',
      synonyms: ['fleet', 'armada', 'maritime forces'],
      antonyms: ['army', 'air force', 'infantry'],
      exampleSentences: [
        { en: 'The young officer decided to join the branch of service that operates on the ocean.', ko: '그 젊은 장교는 바다에서 작전을 수행하는 군 부대에 입대하기로 결정했습니다.' },
        { en: 'Several large warships were docked at the harbor for the annual military parade.', ko: '연례 군사 퍼레이드를 위해 여러 척의 거대한 군함들이 항구에 정박해 있었습니다.' },
      ],
      wordDistractors: ['savvy', 'navel', 'wavy'],
      definitionDistractors: [
        'a dark shade of blue commonly used in clothing and fashion',
        'a port city where commercial ships load and unload cargo',
        'a military strategy used to defend coastal territories',
      ],
    }
  ),
  word('near', '접근하다', 1, 'verb',
    ['멀어지다', '회피하다', '정지하다', '무시하다', '거절하다', '지연시키다', '분리하다', '이탈하다', '방치하다', '후퇴하다'],
    tips({
      etymology: '고대 영어 \'neah\'에서 유래하여 공간적으로나 시간적으로 좁혀지는 상태를 나타냅니다.',
      visual: '결승선에 다가가는 마라톤 선수의 마지막 스퍼트 장면을 상상해 보세요.',
      soundAlike: '\'니어\'라고 발음하며 \'너(near)에게 다가간다\'는 느낌으로 기억하면 쉽습니다.',
      context: '주로 폭풍이 다가오거나, 마감 기한이 임박했을 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'approach와 유사하며, 멀어지는 것을 뜻하는 recede와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To move closer to a specific point in space or a particular moment in time.',
      synonyms: ['approach', 'advance', 'approximate'],
      antonyms: ['recede', 'withdraw', 'retreat'],
      exampleSentences: [
        { en: 'The dark clouds suggest that a heavy rainstorm is starting to come closer to the city.', ko: '먹구름은 폭풍우가 도시에 가까이 접근하기 시작했음을 암시합니다.' },
        { en: 'As the spacecraft began to get closer to the moon, the crew prepared for landing.', ko: '우주선이 달에 접근하기 시작하자 승무원들은 착륙을 준비했습니다.' },
      ],
      wordDistractors: ['hear', 'rear', 'fear'],
      definitionDistractors: [
        'to arrive at a destination after a long journey',
        'to maintain a fixed distance from a specific location',
        'to suddenly appear without any prior warning or notice',
      ],
    }
  ),
  word('neat', '산뜻한', 6, 'adjective',
    ['지저분한', '복잡한', '어질러진', '불규칙한', '거친', '흐릿한', '불결한', '난잡한', '무질서한', '조잡한'],
    tips({
      etymology: '라틴어 nitidus(빛나는, 깨끗한)에서 유래하여, 불필요한 것이 없이 말끔하게 정리된 상태를 뜻하게 되었습니다.',
      visual: '책상 위의 연필과 공책이 자를 댄 듯 일렬로 완벽하게 정렬되어 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'니트\'와 비슷합니다. 보풀 하나 없이 깔끔하게 짜인 니트 스웨터를 떠올리면 기억하기 쉽습니다.',
      context: '단순히 깨끗한 상태뿐만 아니라, 아이디어나 해결책이 아주 훌륭하고 솜씨 좋을 때도 자주 쓰입니다.',
      synonymAntonym: 'tidy와 유의어 관계이며, 반대말로는 messy를 함께 외우면 대조적인 이미지가 명확해집니다.',
    }),
    {
      definition: 'arranged in an orderly, tidy, and pleasing way with everything in its proper place',
      synonyms: ['tidy', 'orderly', 'organized'],
      antonyms: ['messy', 'cluttered', 'disorganized'],
      exampleSentences: [
        { en: 'She kept her bedroom desk incredibly organized and tidy at all times.', ko: '그녀는 침실 책상을 항상 믿기지 않을 정도로 산뜻하고 정돈된 상태로 유지했다.' },
        { en: 'The architect proposed a clever and simple solution to the structural problem.', ko: '그 건축가는 구조적 문제에 대해 아주 산뜻하고 영리한 해결책을 제안했다.' },
      ],
      wordDistractors: ['heat', 'knead', 'meat'],
      definitionDistractors: [
        'freshly cleaned using soap and water or chemical products',
        'decorated with elaborate patterns or ornamental designs',
        'precisely measured and cut to exact specifications',
      ],
    }
  ),
  word('necessary', '필요한', 7, 'adjective',
    ['기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '신화의, 가공의', '악한', '부수적인'],
    tips({
      etymology: '라틴어 \'necesse\'에서 유래했으며, \'물러설 수 없는\' 즉, 반드시 있어야만 하는 상태를 의미합니다.',
      visual: '사막에서 목이 말라 죽기 직전인 사람에게 꼭 필요한 \'물 한 잔\'의 이미지를 떠올려 보세요.',
      soundAlike: '\'내세워리\'라고 발음해 보세요. 중요한 일이라서 꼭 \'내세워야\' 할 만큼 필요한 것이라고 연상합니다.',
      context: '생존이나 특정 목적을 달성하기 위해 절대 빠져서는 안 되는 필수 요소를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '필수적인 essential과 유의어이며, 없어도 그만인 optional과는 반대되는 개념입니다.',
    }),
    {
      definition: 'required to be done, achieved, or present; needed to be successful or to produce a particular result.',
      synonyms: ['essential', 'required', 'vital'],
      antonyms: ['optional', 'useless', 'superfluous'],
      exampleSentences: [
        { en: 'Sleep is a requirement for maintaining good physical and mental health.', ko: '잠은 신체적, 정신적 건강을 유지하기 위해 필요한 요건입니다.' },
        { en: 'The government will take all measures to ensure the safety of its citizens.', ko: '정부는 시민들의 안전을 보장하기 위해 필요한 모든 조치를 취할 것입니다.' },
      ],
      wordDistractors: ['accessory', 'cemetery', 'mercenary'],
      definitionDistractors: [
        'considered helpful but not absolutely critical for success',
        'preferred by most people as the ideal choice among options',
        'currently unavailable but expected to become accessible soon',
      ],
    }
  ),
  word('neck', '목', 2, 'noun',
    ['어깨', '머리', '가슴', '허리', '팔꿈치', '무릎', '손목', '발목', '등', '턱'],
    tips({
      etymology: '고대 영어 \'hnecca\'에서 유래했으며, 머리와 몸통을 잇는 좁은 부분을 뜻합니다.',
      visual: '기린의 아주 긴 신체 부위나 셔츠의 깃(collar)이 닿는 부분을 상상해 보세요.',
      soundAlike: '넥타이(necktie)를 매는 신체 부위가 어디인지 생각하면 기억하기 쉽습니다.',
      context: '신체 부위뿐만 아니라 병의 입구처럼 좁아지는 부분에도 이 단어를 사용합니다.',
      synonymAntonym: '머리를 받치는 nape(뒷목)와 비슷하지만, 전체를 아우르는 표현입니다.',
    }),
    {
      definition: 'The part of the body that connects the head to the rest of the torso.',
      synonyms: ['cervix', 'nape', 'scruff'],
      antonyms: ['foot', 'base', 'bottom'],
      exampleSentences: [
        { en: 'She wore a beautiful gold necklace around her slender throat area.', ko: '그녀는 가느다란 목 주위에 아름다운 금목걸이를 걸고 있었다.' },
        { en: 'He turned his head quickly and felt a sharp pain in his upper spine.', ko: '그는 고개를 빨리 돌리다가 목 윗부분에 날카로운 통증을 느꼈다.' },
      ],
      wordDistractors: ['deck', 'peck', 'knack'],
      definitionDistractors: [
        'the upper part of the spine located between the shoulders',
        'a piece of jewelry worn around the wrist or ankle',
        'the area of the body where the arm joins the torso',
      ],
    }
  ),
  word('need', '필요', 3, 'noun',
    ['반대/대조', '정밀 조사, 면밀한 검토', '안테나, 더듬이', '열정, 열의', '담론', '정점', '단위', '스페인어, 스페인의', '만화 (영화), 애니메이션', '바스크 리아우리아우'],
    tips({
      etymology: '고대 영어 \'nied\'에서 유래했으며, 이는 피할 수 없는 의무나 곤경을 의미했습니다.',
      visual: '사막에서 목이 말라 물컵을 간절히 쳐다보는 사람의 모습을 상상해 보세요.',
      soundAlike: '무릎을 뜻하는 \'knee\'와 발음이 비슷합니다. 무릎을 꿇고 간절히 \'필요\'를 구하는 모습을 떠올려 보세요.',
      context: '생존을 위한 필수 요소나 부족함을 채우기 위한 요구사항을 말할 때 주로 쓰입니다.',
      synonymAntonym: '필수품을 뜻하는 necessity와 유의어이며, 과잉을 뜻하는 surplus와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a situation in which something is necessary or must be done for a particular purpose',
      synonyms: ['necessity', 'requirement', 'demand'],
      antonyms: ['surplus', 'abundance', 'excess'],
      exampleSentences: [
        { en: 'The local community has a great demand for better healthcare services.', ko: '지역 사회는 더 나은 의료 서비스에 대한 큰 필요성을 느끼고 있습니다.' },
        { en: 'Basic human requirements include clean water, food, and safe shelter.', ko: '인간의 기본적 필요에는 깨끗한 물, 음식, 그리고 안전한 주거지가 포함됩니다.' },
      ],
      wordDistractors: ['kneed', 'heed', 'feed'],
      definitionDistractors: [
        'a strong personal preference for luxury or comfort',
        'an excessive amount of something beyond what is required',
        'a voluntary act of generosity toward someone in distress',
      ],
    }
  ),
  word('needle', '바늘', 4, 'noun',
    ['실', '가위', '단추', '지퍼', '옷감', '망치', '못', '핀셋', '집게', '갈고리'],
    tips({
      etymology: '고대 영어 \'nædl\'에서 유래했으며, 꿰매는 도구라는 본래의 의미를 수천 년간 유지해 온 단어입니다.',
      visual: '뾰족한 금속 끝에 실이 꿰어져 있는 날카로운 바늘 끝을 상상해 보세요.',
      soundAlike: '발음이 \'니들\'과 비슷하므로, \'너희들(니들) 손 조심해, 바늘에 찔릴라\'라고 연상해 보세요.',
      context: '바느질뿐만 아니라 주사기 바늘이나 나침반의 자침을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: '뾰족한 도구인 pin이나 spike와 비슷하지만, 구멍이 있어 실을 꿴다는 점이 다릅니다.',
    }),
    {
      definition: 'A very thin, sharp metal tool with a hole at one end for thread, used for sewing or medical injections.',
      synonyms: ['pin', 'spike', 'stylus'],
      antonyms: ['bluntness', 'dullness', 'flatness'],
      exampleSentences: [
        { en: 'The tailor carefully threaded the small eye of the silver tool to begin repairs.', ko: '재단사는 수선을 시작하기 위해 은색 도구의 작은 구멍에 조심스럽게 실을 꿰었습니다.' },
        { en: 'She felt a sharp prick when the nurse administered the flu vaccine.', ko: '간호사가 독감 백신을 놓을 때 그녀는 날카로운 찌름을 느꼈습니다.' },
      ],
      wordDistractors: ['noodle', 'nestle', 'kneel'],
      definitionDistractors: [
        'a pointed instrument used for engraving designs on metal',
        'a thin piece of wire used to fasten papers together',
        'a sharp tool used specifically for cutting through rope or string',
      ],
    }
  ),
];
