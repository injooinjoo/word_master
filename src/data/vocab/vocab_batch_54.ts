import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch54: VocabItem[] = [
  word('questionnaire', '질문표', 9, 'noun',
    ['설문지', '보고서', '명세서', '계약서', '안내서', '증명서', '일정표', '영수증', '제안서', '통지서'],
    tips({
      etymology: '질문을 뜻하는 \'question\'에 목록이나 집합을 나타내는 접미사 \'-naire\'가 붙어 만들어진 단어입니다.',
      visual: '수많은 체크박스와 질문들이 나열된 종이 뭉치를 들고 사람들에게 조사를 요청하는 모습을 상상하세요.',
      soundAlike: '발음이 \'퀘스천-네어\'로 들리는데, 질문(question)을 내어(naire)준다고 생각하면 쉽습니다.',
      context: '시장 조사, 학술 연구, 고객 만족도 평가 등 데이터를 수집할 때 주로 사용되는 도구입니다.',
      synonymAntonym: 'survey나 poll과 비슷하게 쓰이지만, questionnaire는 구체적인 질문 항목들이 적힌 서류 자체에 집중합니다.',
    }),
    {
      definition: 'A written list of questions that are answered by a number of people so that information can be collected from their responses.',
      synonyms: ['survey', 'poll', 'inquiry'],
      antonyms: ['answer', 'response', 'result'],
      exampleSentences: [
        { en: 'Please complete the attached form and return it to the human resources department by Friday.', ko: '첨부된 설문지를 작성하여 금요일까지 인사과로 보내주시기 바랍니다.' },
        { en: 'Researchers distributed a detailed set of questions to evaluate the effectiveness of the new medical treatment.', ko: '연구원들은 새로운 치료법의 효과를 평가하기 위해 상세한 질문지를 배포했습니다.' },
      ],
    }
  ),
  word('quick', '빠른', 3, 'adjective',
    ['느린', '무거운', '조용한', '단단한', '부드러운', '어두운', '거친', '깊은', '넓은', '높은'],
    tips({
      etymology: '고대 영어 \'cwic\'에서 유래했으며 본래 \'살아있는\'이라는 뜻이었으나, 생기 있게 움직이는 모습에서 \'빠른\'이라는 의미로 발전했습니다.',
      visual: '백미터 달리기를 하는 선수가 총소리와 함께 번개처럼 튀어나가는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'퀵\' 서비스와 같으므로, 오토바이가 물건을 아주 빠르게 배달하는 모습을 연상하면 쉽습니다.',
      context: '일상 대화에서 짧은 시간 내에 무언가를 끝내거나 즉각적인 반응을 보일 때 자주 쓰입니다.',
      synonymAntonym: 'fast와 유의어 관계이며, 반대말인 slow와 함께 묶어서 속도의 차이를 기억하세요.',
    }),
    {
      definition: 'moving or capable of moving at high speed or taking a very short time to happen.',
      synonyms: ['rapid', 'swift', 'speedy'],
      antonyms: ['slow', 'sluggish', 'leisurely'],
      exampleSentences: [
        { en: 'A brief shower in the morning helped him feel refreshed and ready for work.', ko: '아침에 가볍게 한 빠른 샤워는 그가 상쾌함을 느끼고 업무 준비를 마치는 데 도움을 주었다.' },
        { en: 'The athlete made a sudden turn to avoid the defender and scored a goal.', ko: '그 운동선수는 수비수를 피하기 위해 빠르게 방향을 틀어 골을 넣었다.' },
      ],
    }
  ),
  word('quit', '그만두다', 4, 'verb',
    ['도착', '시작', '계속', '유지', '참여', '진입', '수용', '결합', '복귀', '전진'],
    tips({
      etymology: '라틴어 quietus에서 유래하여 \'조용해지다\' 혹은 \'의무에서 자유로워지다\'라는 의미를 담고 있습니다.',
      visual: '직장 책상 위에 사직서를 올려두고 사무실 문을 나서는 뒷모습을 상상해 보세요.',
      soundAlike: '발음이 \'큇\'과 비슷하므로, 하던 일을 \'휙\' 던지고 그만두는 상황을 연상하세요.',
      context: '주로 직장을 그만두거나 나쁜 습관을 끊을 때, 혹은 게임에서 나갈 때 자주 사용됩니다.',
      synonymAntonym: '멈추는 것은 stop, 계속하는 것은 continue와 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'To stop doing something or to leave a job or a place permanently.',
      synonyms: ['abandon', 'resign', 'cease'],
      antonyms: ['continue', 'persist', 'endure'],
      exampleSentences: [
        { en: 'He decided to leave his current position to pursue a career in music.', ko: '그는 음악 분야의 경력을 쌓기 위해 현재 직장을 그만두기로 결정했다.' },
        { en: 'Many people find it extremely difficult to stop smoking after many years.', ko: '많은 사람들이 수년 후에 담배를 끊는 것이 매우 어렵다는 것을 깨닫는다.' },
      ],
    }
  ),
  word('quite', '아주', 5, 'adverb',
    ['조금', '전혀', '거의', '가끔', '자주', '항상', '절대', '아마도', '드물게', '보통'],
    tips({
      etymology: '중세 영어 \'quit\'에서 유래하여 \'완전히 자유로운\' 혹은 \'깨끗하게 끝난\' 상태를 의미하다가 현재의 강조 부사로 발전했습니다.',
      visual: '컵에 물이 찰랑찰랑할 정도로 가득 차 있는 모습을 상상하며 \'꽤\' 혹은 \'상당히\' 많은 양을 떠올려 보세요.',
      soundAlike: '조용한을 뜻하는 \'quiet\'와 철자가 비슷하니 주의하세요. \'e\'가 마지막에 오는 \'quite\'는 \'꽤\'라고 외웁니다.',
      context: '영국 영어에서는 \'완전히\'라는 뜻으로도 자주 쓰이지만, 일반적으로는 \'매우\'보다는 약하고 \'조금\'보다는 강한 정도를 나타냅니다.',
      synonymAntonym: 'very보다는 덜 강조하지만 fairly보다는 강한 느낌이며, 반대말로는 정도가 낮은 slightly 등이 있습니다.',
    }),
    {
      definition: 'to a certain degree or extent; fairly or moderately',
      synonyms: ['rather', 'fairly', 'somewhat'],
      antonyms: ['slightly', 'hardly', 'barely'],
      exampleSentences: [
        { en: 'The exam was actually quite difficult despite my extensive preparation.', ko: '광범위한 준비에도 불구하고 그 시험은 실제로 꽤 어려웠습니다.' },
        { en: 'She was quite surprised to see her old friend at the airport.', ko: '그녀는 공항에서 옛 친구를 보고 상당히 놀랐습니다.' },
      ],
    }
  ),
  word('quote', '인용하다', 10, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'quot\'에서 유래하여 \'얼마나 많은지 매기다\'라는 뜻에서 \'특정 구절을 언급하다\'로 발전했습니다.',
      visual: '유명한 작가의 책 페이지를 손가락으로 가리키며 그대로 옮겨 적는 모습을 상상해 보세요.',
      soundAlike: '\'코트(coat)\'를 입은 유명인이 한 말을 그대로 \'쿼트(quote)\'하며 따라 하는 장면을 떠올려 보세요.',
      context: '논문이나 기사를 작성할 때 전문가의 의견을 뒷받침 자료로 가져오는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'cite와 유의어 관계이며, 자신의 생각을 독창적으로 표현하는 originate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to repeat or copy the exact words spoken or written by someone else',
      synonyms: ['cite', 'extract', 'recite'],
      antonyms: ['paraphrase', 'originate', 'summarize'],
      exampleSentences: [
        { en: 'The journalist decided to cite the president\'s speech directly to ensure accuracy.', ko: '그 기자는 정확성을 기하기 위해 대통령의 연설을 직접 인용하기로 결정했습니다.' },
        { en: 'Please include the source whenever you use a passage from another author\'s work.', ko: '다른 저자의 저작물에서 구절을 인용할 때는 항상 출처를 포함해 주세요.' },
      ],
    }
  ),
  word('rabbit', '집토끼', 1, 'noun',
    ['거북이', '다람쥐', '고양이', '강아지', '호랑이', '코끼리', '사자', '원숭이', '여우', '늑대'],
    tips({
      etymology: '중세 영어 \'rabet\'에서 유래했으며, 원래는 어린 개체를 가리키는 말이었습니다.',
      visual: '길쭉한 귀를 쫑긋 세우고 코를 씰룩거리며 풀을 뜯어 먹는 귀여운 동물을 상상해 보세요.',
      soundAlike: '\'래빗\' 발음이 \'내비(게이션)\'와 비슷하죠? 토끼가 길을 잘 찾아가는 모습을 떠올려 보세요.',
      context: '애완동물로 키우거나 들판에서 빠르게 뛰어다니는 작은 포유류를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'bunny는 토끼를 부르는 더 친근한 표현이며, 거북이는 이솝 우화에서 토끼의 느린 라이벌로 등장합니다.',
    }),
    {
      definition: 'A small mammal with long ears, long hind legs, and a short tail, often kept as a pet or found in the wild.',
      synonyms: ['bunny', 'hare', 'cottontail'],
      antonyms: ['predator', 'tortoise', 'hound'],
      exampleSentences: [
        { en: 'The white animal hopped across the garden and disappeared into a small hole.', ko: '그 하얀 동물은 정원을 가로질러 깡충깡충 뛰어간 뒤 작은 구멍 속으로 사라졌다.' },
        { en: 'Children love to feed fresh carrots to the long-eared creature at the petting zoo.', ko: '아이들은 어린이 동물원에서 귀가 긴 생물에게 신선한 당근을 주는 것을 좋아한다.' },
      ],
    }
  ),
  word('race', '인종', 2, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '이탈리아어 \'razza\'에서 유래되었으며, 공통된 조상을 가진 집단을 분류하는 데 사용되었습니다.',
      visual: '올림픽 개막식에서 다양한 피부색과 배경을 가진 선수들이 각국의 국기를 들고 행진하는 모습을 상상하세요.',
      soundAlike: '달리기 경주를 뜻하는 \'레이스\'와 발음이 같습니다. 인류라는 거대한 경주 속에 다양한 팀이 있다고 생각해보세요.',
      context: '사회학이나 생물학적 논의에서 인간을 신체적 특징이나 혈통에 따라 구분할 때 주로 쓰입니다.',
      synonymAntonym: '유사한 의미로 ethnicity가 자주 쓰이며, 모든 인류를 하나로 묶는 humanity와 대조될 수 있습니다.',
    }),
    {
      definition: 'A group of people sharing the same physical characteristics, heritage, or common ancestry.',
      synonyms: ['ethnicity', 'ancestry', 'lineage'],
      antonyms: ['individual', 'integration', 'humanity'],
      exampleSentences: [
        { en: 'The census collected data on age, gender, and race to better understand the population.', ko: '인구 조사는 인구 구성을 더 잘 이해하기 위해 나이, 성별, 인종에 대한 데이터를 수집했습니다.' },
        { en: 'Discrimination based on race is strictly prohibited by the company\'s code of conduct.', ko: '인종에 근거한 차별은 회사의 행동 강령에 의해 엄격히 금지되어 있습니다.' },
      ],
    }
  ),
  word('racial', '인종의', 6, 'adjective',
    ['일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한'],
    tips({
      etymology: '인종을 뜻하는 race에 형용사형 접미사 -ial이 붙어 형성된 단어입니다.',
      visual: '올림픽 개막식에서 다양한 피부색의 선수들이 각국의 국기를 들고 입장하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'레이셜\'이므로, 여러 \'레이스(race)\'가 섞인 \'교실\' 풍경을 떠올려 보세요.',
      context: '사회적 평등이나 인구 통계학적 데이터를 다루는 뉴스 기사에서 자주 등장합니다.',
      synonymAntonym: 'ethnic과 유사한 맥락에서 쓰이지만, 인종적 차별을 언급할 때는 이 단어가 더 흔히 쓰입니다.',
    }),
    {
      definition: 'Relating to shared physical characteristics or the genetic heritage of a group of people.',
      synonyms: ['ethnic', 'ancestral', 'genealogical'],
      antonyms: ['individual', 'universal', 'nonracial'],
      exampleSentences: [
        { en: 'The government is working hard to eliminate discrimination and promote equality in the workplace.', ko: '정부는 직장 내 인종 차별을 없애고 평등을 증진하기 위해 열심히 노력하고 있습니다.' },
        { en: 'The city boasts a diverse population with a rich variety of cultural and backgrounds.', ko: '그 도시는 풍부하고 다양한 문화적, 인종적 배경을 가진 다양한 인구를 자랑합니다.' },
      ],
    }
  ),
  word('rage', '격노', 8, 'noun',
    ['평온', '기쁨', '슬픔', '용기', '지루함', '호기심', '만족', '질투', '겸손', '공포'],
    tips({
      etymology: '라틴어 \'rabies\'에서 유래되었으며, 이는 광견병이나 미친 듯한 상태를 의미합니다.',
      visual: '얼굴이 시뻘겋게 달아오른 채 주먹을 불끈 쥐고 소리를 지르는 사람을 상상해 보세요.',
      soundAlike: '\'레이지\'라고 발음되는데, 너무 화가 나서 \'내 이지(이성)\'를 잃어버린 상태라고 외우면 쉽습니다.',
      context: '단순한 화(anger)를 넘어 통제하기 힘들 정도로 폭발적인 감정 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'fury와 유사하며, 차분함을 뜻하는 calm이나 serenity와는 정반대의 상태입니다.',
    }),
    {
      definition: 'violent and uncontrollable anger that causes a person to lose self-restraint',
      synonyms: ['fury', 'wrath', 'outrage'],
      antonyms: ['calm', 'peace', 'serenity'],
      exampleSentences: [
        { en: 'His face turned bright red with uncontrollable fury during the heated argument.', ko: '격렬한 논쟁 도중 그의 얼굴은 걷잡을 수 없는 격노로 새빨갛게 변했습니다.' },
        { en: 'The storm lashed the coastline with a terrifying intensity that destroyed several buildings.', ko: '폭풍이 무서운 격노로 해안선을 강타하여 건물 여러 채를 파괴했습니다.' },
      ],
    }
  ),
  word('rail', '가로장', 7, 'noun',
    ['기차', '바퀴', '엔진', '좌석', '승강장', '매표소', '터널', '교각', '침목', '신호등'],
    tips({
      etymology: '라틴어 \'regula(직선 막대)\'에서 유래하여 길게 뻗은 가로지르는 막대기를 뜻합니다.',
      visual: '계단 옆에 길게 설치된 손잡이나 울타리의 가로 막대를 상상해 보세요.',
      soundAlike: '\'내일(rail)\' 기차를 타기 위해 선로 옆 가로장을 잡고 기다리는 모습을 떠올려 보세요.',
      context: '주로 계단, 다리, 울타리 등에서 안전을 위해 설치된 수평 구조물을 지칭할 때 쓰입니다.',
      synonymAntonym: 'bar나 rod와 비슷하지만, 주로 고정된 구조물의 일부로 쓰이며 개방된 공간과는 반대됩니다.',
    }),
    {
      definition: 'A horizontal bar or series of bars fixed to upright supports, used as a barrier or for support.',
      synonyms: ['bar', 'handrail', 'banister'],
      antonyms: ['opening', 'gap', 'void'],
      exampleSentences: [
        { en: 'Please hold onto the metal bar while walking down the steep stairs.', ko: '가파른 계단을 내려갈 때는 금속 가로장을 꼭 잡으세요.' },
        { en: 'The wooden fence was built with a sturdy top beam to keep the cattle inside.', ko: '가축들이 나가지 못하도록 튼튼한 상단 가로장을 갖춘 나무 울타리가 세워졌습니다.' },
      ],
    }
  ),
  word('rainbow', '무지개', 3, 'noun',
    ['구름', '번개', '안개', '태풍', '우박', '노을', '이슬', '서리', '폭풍', '가뭄'],
    tips({
      etymology: '비(rain)가 온 뒤에 나타나는 활(bow) 모양의 곡선을 의미합니다.',
      visual: '비가 그친 뒤 푸른 하늘에 일곱 가지 색깔의 다리가 놓인 모습을 상상해 보세요.',
      soundAlike: '레인보우 - 비가 온 뒤 보물(보우) 같은 색깔들이 나타난다고 기억하세요.',
      context: '주로 희망이나 평화, 혹은 비 온 뒤의 맑은 날씨를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '다채로운 색의 스펙트럼과 유사하며, 단색이나 어둠과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An arch of colors formed in the sky in certain circumstances, caused by the refraction and dispersion of the sun\'s light by rain or other water droplets.',
      synonyms: ['arc', 'spectrum', 'prism'],
      antonyms: ['darkness', 'monochrome', 'shadow'],
      exampleSentences: [
        { en: 'A beautiful multi-colored arch appeared in the sky after the heavy thunderstorm.', ko: '심한 폭풍우가 지나간 뒤 하늘에 아름다운 다채로운 색의 아치가 나타났다.' },
        { en: 'Children often believe that a pot of gold is hidden at the end of this colorful phenomenon.', ko: '아이들은 종종 이 알록달록한 현상의 끝에 황금 항아리가 숨겨져 있다고 믿는다.' },
      ],
    }
  ),
  word('raise', '올리다', 4, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '고대 노르웨이어 \'reisa\'에서 유래하여 무언가를 똑바로 세우거나 위로 이동시킨다는 의미를 담고 있습니다.',
      visual: '도서관에서 질문이 있을 때 손을 번쩍 위로 들어 올리는 학생의 모습을 상상해 보세요.',
      soundAlike: '레이스(race) 경주에서 1등을 하면 트로피를 높이 \'들어 올리는\' 장면을 연상해 보세요.',
      context: '단순히 물건을 들어 올리는 것뿐만 아니라, 아이를 키우거나 기금을 모으는 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'lift와 유의어 관계이며, 반대로 아래로 내리는 것은 lower라고 표현합니다.',
    }),
    {
      definition: 'to move something to a higher position or to increase the amount or level of something',
      synonyms: ['lift', 'elevate', 'boost'],
      antonyms: ['lower', 'drop', 'decrease'],
      exampleSentences: [
        { en: 'The students were asked to lift their hands if they knew the correct answer.', ko: '정답을 아는 학생들은 손을 들어 달라는 요청을 받았습니다.' },
        { en: 'The local charity aims to collect enough funds to build a new community center.', ko: '지역 자선 단체는 새로운 커뮤니티 센터를 짓기 위해 충분한 자금을 모으는 것을 목표로 합니다.' },
      ],
    }
  ),
  word('rally', '규합하다', 9, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '프랑스어 rallier에서 유래했으며, \'re-(다시)\'와 \'allier(결합하다)\'가 합쳐져 흩어진 것을 다시 모은다는 의미를 가집니다.',
      visual: '흩어져 있던 사람들이 깃발 아래로 하나둘씩 모여들어 큰 무리를 이루는 장면을 상상해 보세요.',
      soundAlike: '테니스나 탁구에서 공을 주고받는 \'랠리\'를 떠올려 보세요. 경기를 계속 이어가기 위해 힘을 모으는 과정과 비슷합니다.',
      context: '정치적 집회나 스포츠 경기에서 팀의 사기를 북돋우고 지지자들을 한데 모을 때 주로 사용됩니다.',
      synonymAntonym: '사람들을 모으는 assemble과 흩어지게 만드는 scatter를 대조해서 기억하면 효과적입니다.',
    }),
    {
      definition: 'to bring people together in order to help or support a specific cause, person, or team',
      synonyms: ['assemble', 'mobilize', 'muster'],
      antonyms: ['disperse', 'scatter', 'separate'],
      exampleSentences: [
        { en: 'The leader managed to gather enough supporters to organize a massive protest in the city square.', ko: '지도자는 시내 광장에서 대규모 시위를 조직하기 위해 충분한 지지자들을 규합하는 데 성공했습니다.' },
        { en: 'The team captain gave a powerful speech to encourage his teammates during the final minutes of the game.', ko: '팀 주장은 경기 마지막 몇 분 동안 팀원들을 규합하고 사기를 높이기 위해 강력한 연설을 했습니다.' },
      ],
    }
  ),
  word('random', '무작위의', 5, 'adjective',
    ['체계적인', '의도적인', '계획된', '고정된', '정기적인', '일관된', '정밀한', '연속적인', '예측가능한', '구조적인'],
    tips({
      etymology: '중세 영어 \'randoun\'에서 유래했으며, 원래 \'빠른 속도\'나 \'통제되지 않는 힘\'을 의미하던 것이 현대의 \'무작위\'라는 뜻으로 발전했습니다.',
      visual: '주머니 속에 든 여러 색깔의 공들 중에서 눈을 감고 아무거나 하나를 집어 올리는 장면을 상상해 보세요.',
      soundAlike: '\'랜덤\'이라는 발음은 한국어에서도 일상적으로 쓰이므로, 규칙 없이 무작위로 고르는 상황을 바로 연결하세요.',
      context: '음악 재생 목록을 순서대로 듣지 않고 셔플 기능을 이용해 무작위로 들을 때 주로 사용되는 형용사입니다.',
      synonymAntonym: '정해진 규칙이 없는 \'accidental\'과 유의어 관계이며, 철저히 계획된 \'deliberate\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Proceeding, made, or occurring without a definite aim, reason, or pattern.',
      synonyms: ['arbitrary', 'haphazard', 'chance'],
      antonyms: ['systematic', 'planned', 'deliberate'],
      exampleSentences: [
        { en: 'The computer generates a sequence of numbers for the security system.', ko: '컴퓨터는 보안 시스템을 위해 일련의 무작위 숫자를 생성합니다.' },
        { en: 'A stranger approached me on the street and asked for the time.', ko: '길거리에서 전혀 모르는 사람이 나에게 다가와 시간을 물어보았습니다.' },
      ],
    }
  ),
  word('range', '줄', 6, 'noun',
    ['파편', '깊이', '속도', '무게', '부피', '압력', '밀도', '온도', '각도', '거리'],
    tips({
      etymology: '프랑스어 \'rang\'에서 유래하여 사물들이 일렬로 늘어선 모습을 의미합니다.',
      visual: '산맥(mountain range)이 길게 한 줄로 뻗어 있는 장엄한 풍경을 상상해 보세요.',
      soundAlike: '\'레인지\'라고 발음하며, 가스레인지 위에 냄비들이 일렬로 놓인 모습을 연상하세요.',
      context: '수학에서의 범위나 산맥의 줄기, 혹은 선택 가능한 폭을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'line이나 row와 비슷하지만, 한계치나 범위를 뜻할 때는 scope와 가깝습니다.',
    }),
    {
      definition: 'A row, line, or series of things, often mountains or hills, arranged in a particular order.',
      synonyms: ['row', 'line', 'series'],
      antonyms: ['disorder', 'scatter', 'individual'],
      exampleSentences: [
        { en: 'A magnificent mountain range stretches across the northern border of the country.', ko: '웅장한 산맥이 그 나라의 북쪽 국경을 가로질러 뻗어 있다.' },
        { en: 'The store offers a wide range of products to satisfy every customer\'s needs.', ko: '그 상점은 모든 고객의 요구를 만족시키기 위해 넓은 범위의 제품들을 제공한다.' },
      ],
    }
  ),
  word('rank', '열', 7, 'noun',
    ['사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보'],
    tips({
      etymology: '고대 프랑스어 \'renc\'에서 유래하여 군대나 조직에서 사람들이 일렬로 늘어선 줄을 의미하게 되었습니다.',
      visual: '군인들이나 체스판의 말들이 가로로 길게 한 줄로 정렬되어 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'랭크\'이므로 게임에서 순위나 등급을 매길 때 일렬로 세우는 것을 연상하면 쉽습니다.',
      context: '주로 군대, 조직 내의 계급이나 물리적으로 나란히 늘어선 줄을 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'row나 line과 유사하며, 무질서하게 흩어진 상태인 disorder와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A single row of people or things standing side by side in a straight line.',
      synonyms: ['row', 'line', 'tier'],
      antonyms: ['disorder', 'scatter', 'chaos'],
      exampleSentences: [
        { en: 'The soldiers stood in a long straight line, waiting for the commander\'s order.', ko: '군인들이 지휘관의 명령을 기다리며 긴 일렬 횡대로 서 있었다.' },
        { en: 'The front row of the audience was filled with local dignitaries.', ko: '관객석의 앞열은 지역 귀빈들로 가득 찼다.' },
      ],
    }
  ),
  word('rapid', '빠른', 4, 'adjective',
    ['느린', '점진적인', '정체된', '완만한', '지연된', '거대한', '복잡한', '사소한', '영구적인', '희귀한'],
    tips({
      etymology: '라틴어 \'rapidus\'에서 유래되었으며, \'낚아채다\' 또는 \'휩쓸어가다\'라는 의미의 \'rapere\'와 연결되어 물살이 몰아치듯 빠른 속도를 나타냅니다.',
      visual: 'F1 레이싱 카가 눈 깜짝할 새에 트랙을 지나가며 잔상만 남기는 속도감을 상상해 보세요.',
      soundAlike: '\'래피드\' 발음이 \'내 피도\' 빠르게 흐른다와 비슷하다고 생각하면 속도감이 느껴집니다.',
      context: '경제 성장, 기술 발전, 또는 강물의 흐름처럼 눈에 띄게 속도가 붙는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'fast나 quick보다 격식 있는 표현이며, 반대말로는 천천히 진행되는 slow나 gradual이 있습니다.',
    }),
    {
      definition: 'happening, moving, or acting with great speed or within a short period of time',
      synonyms: ['swift', 'speedy', 'accelerated'],
      antonyms: ['slow', 'gradual', 'leisurely'],
      exampleSentences: [
        { en: 'The city has undergone rapid transformation over the last decade due to urban development.', ko: '그 도시는 도시 개발로 인해 지난 10년 동안 급격한 변화를 겪었습니다.' },
        { en: 'The patient showed rapid improvement after receiving the new medical treatment.', ko: '그 환자는 새로운 치료를 받은 후 빠른 호전을 보였습니다.' },
      ],
    }
  ),
  word('rare', '희귀한', 5, 'adjective',
    ['흔한', '평범한', '익숙한', '빈번한', '일반적인', '대중적인', '전형적인', '상투적인', '보편적인', '일상적인'],
    tips({
      etymology: '라틴어 rarus에서 유래하여 \'간격이 넓은\' 혹은 \'촘촘하지 않은\' 상태를 뜻하며, 오늘날에는 찾아보기 힘든 상태를 의미합니다.',
      visual: '박물관 유리관 속에 단 하나만 전시되어 있는 아주 오래된 황금 동전을 상상해 보세요.',
      soundAlike: '고기를 구울 때 속이 거의 익지 않은 상태인 \'레어\' 스테이크를 떠올리면 \'드문\' 상태가 쉽게 연상됩니다.',
      context: '희귀 동식물 보호나 아주 드물게 발생하는 자연 현상을 설명할 때 자주 쓰이는 형용사입니다.',
      synonymAntonym: '자주 볼 수 없는 scarce와 흔해 빠진 common을 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'not occurring very often or existing only in small amounts',
      synonyms: ['scarce', 'uncommon', 'exceptional'],
      antonyms: ['common', 'frequent', 'ordinary'],
      exampleSentences: [
        { en: 'Collectors are willing to pay a fortune for such a unique and scarce stamp.', ko: '수집가들은 그렇게 독특하고 희귀한 우표에 거금을 기꺼이 지불합니다.' },
        { en: 'It is highly unusual to see this species of bird in this part of the country.', ko: '나라의 이 지역에서 이 종의 새를 보는 것은 매우 드문 일입니다.' },
      ],
    }
  ),
  word('rat', '쥐', 6, 'noun',
    ['고양이', '강아지', '토끼', '호랑이', '사자', '코끼리', '기린', '늑대', '여우', '다람쥐'],
    tips({
      etymology: '라틴어 \'rodere(갉다)\'에서 유래하여 무엇이든 갉아먹는 설치류의 특성을 담고 있습니다.',
      visual: '긴 꼬리와 뾰족한 코를 가진 작은 동물이 하수구나 창고 구석을 빠르게 지나가는 모습을 상상하세요.',
      soundAlike: '\'랫\' 발음이 \'래(내)다\'와 비슷하니, 구멍을 \'내\'고 다니는 쥐라고 기억하면 쉽습니다.',
      context: '주로 위생이 좋지 않은 곳에 나타나는 유해 동물로 묘사되거나, 배신자를 비유할 때 쓰입니다.',
      synonymAntonym: '생쥐를 뜻하는 mouse보다 크기가 크고 징그러운 느낌을 주며, 포식자인 cat과는 반대 관계입니다.',
    }),
    {
      definition: 'A small rodent that typically has a pointed snout, a long bald tail, and is known for being a pest in urban areas.',
      synonyms: ['rodent', 'vermin', 'pest'],
      antonyms: ['predator', 'feline', 'cat'],
      exampleSentences: [
        { en: 'The hungry rodent scurried across the kitchen floor looking for crumbs.', ko: '배고픈 쥐가 부스러기를 찾아 주방 바닥을 가로질러 빠르게 달려갔다.' },
        { en: 'Health inspectors found evidence of a severe infestation in the basement of the old restaurant.', ko: '위생 검사관들은 오래된 식당 지하에서 심각한 쥐 떼의 흔적을 발견했다.' },
      ],
    }
  ),
  word('rate', '율, 비율', 7, 'noun',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'ratus\'에서 유래하여 사물의 가치를 계산하거나 판단한다는 의미를 담고 있습니다.',
      visual: '영화 리뷰 사이트에서 별점을 5개 중 몇 개를 줄지 고민하며 점수를 매기는 모습을 상상하세요.',
      soundAlike: '비율을 뜻하는 \'레이트\'와 발음이 같으므로, 가치를 매겨서 순위를 정하는 장면을 연결하세요.',
      context: '주로 호텔, 영화, 서비스의 질을 평가하거나 등급을 매길 때 동사로 자주 쓰입니다.',
      synonymAntonym: '평가하다라는 뜻의 assess와 유사하며, 무시하거나 방치한다는 뜻의 ignore와 반대됩니다.',
    }),
    {
      definition: 'To assign a standard or value to something according to a particular scale.',
      synonyms: ['evaluate', 'assess', 'appraise'],
      antonyms: ['ignore', 'neglect', 'disregard'],
      exampleSentences: [
        { en: 'Many critics decided to classify the new film as a masterpiece and gave it a high score.', ko: '많은 비평가들은 그 새로운 영화를 걸작으로 분류하고 높은 점수로 평가했습니다.' },
        { en: 'Customers often rank the quality of service on a scale from one to ten after their stay.', ko: '고객들은 숙박 후 서비스의 질을 1에서 10까지의 척도로 자주 등급을 매깁니다.' },
      ],
    }
  ),
  word('rather', '오히려', 4, 'adverb',
    ['절대로', '가끔', '항상', '이미', '아직', '거의', '매우', '전혀', '함께', '따로'],
    tips({
      etymology: '고대 영어 \'hrathor\'에서 유래했으며, \'더 빨리\' 혹은 \'더 기꺼이\'라는 의미가 발전하여 현재의 대조적 의미가 되었습니다.',
      visual: 'A와 B 두 갈래 길에서 A를 버리고 B를 선택하는 화살표 이미지를 떠올려 보세요.',
      soundAlike: '\'래더(ladder, 사다리)\'와 발음이 비슷합니다. 사다리를 타고 위로 올라가는 대신 \'오히려\' 옆으로 이동한다고 상상하세요.',
      context: '단순한 부정을 넘어 앞서 언급된 내용보다 더 적절한 대안을 제시할 때 주로 사용됩니다.',
      synonymAntonym: '대신을 뜻하는 instead와 비슷하지만, 전혀 반대되는 상황을 나타낼 때는 on the contrary와 비교됩니다.',
    }),
    {
      definition: 'to a certain degree or more precisely used to introduce a statement that corrects or modifies a previous one',
      synonyms: ['instead', 'somewhat', 'preferably'],
      antonyms: ['extremely', 'slightly', 'certainly'],
      exampleSentences: [
        { en: 'The ending of the movie was not sad but rather quite uplifting.', ko: '그 영화의 결말은 슬프지 않았고 오히려 상당히 희망적이었다.' },
        { en: 'She chose to walk home rather than take the crowded bus.', ko: '그녀는 만원 버스를 타느니 차라리 집까지 걸어가는 것을 택했다.' },
      ],
    }
  ),
  word('rational', '합리적인', 10, 'adjective',
    ['감정적인', '충동적인', '비논리적인', '무모한', '주관적인', '편향된', '혼란스러운', '비현실적인', '본능적인', '우발적인'],
    tips({
      etymology: '라틴어 \'ratio\'에서 유래했으며, 이는 계산이나 이유를 뜻합니다. 즉, 머리로 계산하고 따져보는 성질을 말합니다.',
      visual: '흥분해서 화를 내는 사람 옆에서 차분하게 안경을 고쳐 쓰며 논리적으로 설명하는 수학자의 모습을 상상해 보세요.',
      soundAlike: '\'래셔널\'은 \'내셔널(national)\'과 발음이 비슷합니다. 국가의 정책은 감정이 아닌 합리적인 근거로 결정되어야 한다고 연결해 보세요.',
      context: '경제학이나 철학에서 인간이 이익을 최대화하기 위해 논리적으로 판단할 때 가장 자주 쓰이는 표현입니다.',
      synonymAntonym: 'logical과 유의어 관계이며, 감정에 휘둘리는 emotional과는 정반대의 성격을 가집니다.',
    }),
    {
      definition: 'based on or in accordance with reason or logic rather than emotions.',
      synonyms: ['logical', 'sensible', 'reasonable'],
      antonyms: ['irrational', 'illogical', 'emotional'],
      exampleSentences: [
        { en: 'We need to make a calm and sensible decision based on facts rather than fear.', ko: '우리는 두려움보다는 사실에 근거하여 차분하고 합리적인 결정을 내려야 합니다.' },
        { en: 'No one can provide a logical explanation for his sudden change in behavior.', ko: '그의 갑작스러운 행동 변화에 대해 누구도 합리적인 설명을 내놓지 못하고 있습니다.' },
      ],
    }
  ),
  word('raw', '날것의', 5, 'adjective',
    ['익힌', '가공된', '세련된', '숙련된', '인공적인', '부드러운', '완성된', '복잡한', '정제된', '건조한'],
    tips({
      etymology: '고대 영어 hreaw에서 유래하여 요리되지 않았거나 가공되지 않은 상태를 의미합니다.',
      visual: '도마 위에 놓인 붉은 생고기나 껍질을 벗기지 않은 거친 나무껍질을 상상해 보세요.',
      soundAlike: '로(raw) - \'로\'션도 바르지 않은 거친 피부 상태를 떠올리면 쉽습니다.',
      context: '음식뿐만 아니라 가공되지 않은 데이터나 다듬어지지 않은 감정을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'unprocessed와 유사하며, 반대로 불에 익히거나 가공된 상태는 cooked라고 합니다.',
    }),
    {
      definition: 'not cooked, processed, or refined; in a natural and original state',
      synonyms: ['uncooked', 'unprocessed', 'crude'],
      antonyms: ['cooked', 'processed', 'refined'],
      exampleSentences: [
        { en: 'Eating raw fish requires careful preparation to ensure it is safe and fresh.', ko: '날생선을 먹는 것은 그것이 안전하고 신선한지 확인하기 위해 세심한 준비가 필요합니다.' },
        { en: 'The artist used raw talent to create a masterpiece without any formal training.', ko: '그 예술가는 정식 교육 없이도 가공되지 않은 재능을 사용하여 걸작을 만들어냈습니다.' },
      ],
    }
  ),
  word('reach', '도착하다', 6, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '고대 영어 rǣcan에서 유래하여 \'손을 뻗다\'라는 의미에서 목표 지점에 \'닿다\' 혹은 \'도착하다\'로 발전했습니다.',
      visual: '등산객이 산 정상에 올라가 깃발을 꽂는 장면이나 마라톤 선수가 결승선을 통과하는 모습을 상상하세요.',
      soundAlike: '발음이 \'리치\'와 비슷하므로, 부자(rich)가 되기 위해 목표에 \'도착하다\'라고 연상하면 쉽습니다.',
      context: '물리적인 장소뿐만 아니라 합의나 결론, 특정 수치에 도달했을 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: 'arrive는 장소에 도착할 때, achieve는 목표에 도달할 때 쓰이며 leave는 떠날 때 사용합니다.',
    }),
    {
      definition: 'to arrive at a particular place or achieve a specific goal after traveling or making an effort',
      synonyms: ['arrive', 'attain', 'achieve'],
      antonyms: ['leave', 'depart', 'fail'],
      exampleSentences: [
        { en: 'The hikers finally managed to get to the mountain summit before the sun went down.', ko: '등산객들은 해가 지기 전에 마침내 산 정상에 도착할 수 있었습니다.' },
        { en: 'Both parties worked hard for hours to arrive at a mutual agreement regarding the contract.', ko: '양측은 계약에 관한 상호 합의에 도달하기 위해 몇 시간 동안 열심히 노력했습니다.' },
      ],
    }
  ),
  word('react', '반응하다', 7, 'verb',
    ['무시하다', '예측하다', '조절하다', '관찰하다', '생각하다', '기다리다', '준비하다', '이해하다', '결정하다', '포기하다'],
    tips({
      etymology: '다시를 뜻하는 re-와 행동을 뜻하는 act가 합쳐져 자극에 대해 다시 행동한다는 의미를 가집니다.',
      visual: '뜨거운 냄비를 만졌을 때 깜짝 놀라며 손을 떼는 반사적인 동작을 상상해 보세요.',
      soundAlike: '리액션(reaction)이 좋다는 말의 기본 동사형으로 기억하면 쉽습니다.',
      context: '화학 반응이나 감정적인 대응 등 외부 자극에 대한 모든 응답 상황에 쓰입니다.',
      synonymAntonym: '응답하는 respond와는 비슷하지만, 무시하는 ignore와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to act in a particular way as a direct result of something that has happened or been said',
      synonyms: ['respond', 'reply', 'answer'],
      antonyms: ['ignore', 'disregard', 'overlook'],
      exampleSentences: [
        { en: 'The stock market tended to respond sharply to the unexpected news from the central bank.', ko: '주식 시장은 중앙은행의 예상치 못한 소식에 급격하게 반응하는 경향이 있었다.' },
        { en: 'How did your parents behave when you told them about your decision to move abroad?', ko: '당신이 해외로 이주하겠다는 결정을 말했을 때 부모님은 어떻게 반응하셨나요?' },
      ],
    }
  ),
  word('read', '읽다', 1, 'verb',
    ['쓰다', '말하다', '듣다', '보다', '걷다', '먹다', '자다', '달리다', '앉다', '서다'],
    tips({
      etymology: '고대 영어 rædan에서 유래하여 \'조언하다\'나 \'해석하다\'라는 의미에서 문자를 해석하는 \'읽다\'로 발전했습니다.',
      visual: '안경을 쓰고 책장을 한 장씩 넘기며 글자를 눈으로 쫓는 모습을 상상해 보세요.',
      soundAlike: '빨간색을 뜻하는 red와 발음이 똑같으므로 빨간 책을 읽는 장면을 연상하면 쉽습니다.',
      context: '책, 잡지, 신문뿐만 아니라 사람의 마음이나 분위기를 파악할 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: '글을 훑어보는 scan과 대조적으로, 내용을 아예 모르는 상태인 ignore를 함께 기억하세요.',
    }),
    {
      definition: 'to look at and understand the meaning of written or printed words or symbols',
      synonyms: ['peruse', 'scan', 'interpret'],
      antonyms: ['ignore', 'overlook', 'disregard'],
      exampleSentences: [
        { en: 'She likes to spend her Sunday afternoons with a good book to enjoy.', ko: '그녀는 일요일 오후를 즐거운 책 한 권을 읽으며 보내는 것을 좋아합니다.' },
        { en: 'Please look at the instructions carefully before you start the exam.', ko: '시험을 시작하기 전에 지시 사항을 주의 깊게 읽어 주시기 바랍니다.' },
      ],
    }
  ),
  word('real', '실재하는', 4, 'adjective',
    ['가상의', '인공적인', '거짓의', '상상속의', '모조의', '추상적인', '환상적인', '꾸며낸', '일시적인', '불확실한'],
    tips({
      etymology: '라틴어 \'res\'에서 유래되었으며, 이는 \'물건\'이나 \'사실\'을 의미하여 실제로 존재하는 상태를 나타냅니다.',
      visual: '화면 속의 CG 캐릭터가 아닌, 실제로 손으로 만질 수 있는 단단한 돌멩이를 떠올려 보세요.',
      soundAlike: '\'리얼\'이라는 발음은 한국어에서도 \'진짜\'라는 의미로 자주 쓰여 익숙하게 연결됩니다.',
      context: '꿈이나 환상이 아닌 눈앞에 펼쳐진 생생한 현실 세계를 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '가짜를 뜻하는 fake나 상상을 뜻하는 imaginary와 반대되는 개념으로 외우면 쉽습니다.',
    }),
    {
      definition: 'Existing in fact and not imaginary, or being exactly what it appears to be.',
      synonyms: ['authentic', 'genuine', 'actual'],
      antonyms: ['fake', 'imaginary', 'artificial'],
      exampleSentences: [
        { en: 'The movie is based on a true story about a person who lived in the eighteenth century.', ko: '그 영화는 18세기에 살았던 한 인물에 대한 실화에 바탕을 두고 있습니다.' },
        { en: 'Scientists are searching for evidence of life on other planets to see if it is truly there.', ko: '과학자들은 다른 행성에 생명체가 실제로 존재하는지 확인하기 위해 증거를 찾고 있습니다.' },
      ],
    }
  ),
  word('realize', '깨닫다', 5, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '현실을 뜻하는 real에 \'~하게 만들다\'는 ize가 붙어, 머릿속 생각을 현실로 명확히 인지한다는 뜻이 됩니다.',
      visual: '어두운 방에서 갑자기 전등 스위치를 켜서 주변 사물이 환하게 보이는 장면을 상상해 보세요.',
      soundAlike: '\'리얼라이즈\'는 \'리얼(Real)이네!\'라고 외치며 사실을 알아차리는 상황과 발음이 비슷합니다.',
      context: '열쇠를 집에 두고 왔다는 사실을 버스 정류장에 도착해서야 갑자기 알아차릴 때 주로 쓰입니다.',
      synonymAntonym: '갑자기 알게 되는 understand와 비슷하지만, 오랫동안 몰랐던 것을 깨닫는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'to become fully aware of something as a fact or to understand a situation clearly',
      synonyms: ['understand', 'recognize', 'comprehend'],
      antonyms: ['misunderstand', 'ignore', 'overlook'],
      exampleSentences: [
        { en: 'She did not become aware of her mistake until the meeting was over.', ko: '그녀는 회의가 끝날 때까지 자신의 실수를 깨닫지 못했다.' },
        { en: 'Many people eventually grasp the importance of health after getting sick.', ko: '많은 이들이 병에 걸리고 나서야 결국 건강의 중요성을 깨닫는다.' },
      ],
    }
  ),
  word('rear', '뒤', 8, 'noun',
    ['앞면', '중앙', '꼭대기', '바닥', '측면', '모서리', '내부', '외부', '경계', '표면'],
    tips({
      etymology: '고대 영어 \'hrere\'에서 유래되었으며, \'일어나다\' 혹은 \'뒤에 남겨진 것\'이라는 의미에서 발전했습니다.',
      visual: '자동차의 후방 카메라가 비추는 뒷범퍼와 트렁크 쪽의 모습을 상상해 보세요.',
      soundAlike: '\'리어\'카를 끌 때 짐을 싣는 \'뒤\'쪽 공간을 떠올리면 기억하기 쉽습니다.',
      context: '군대나 행렬에서 가장 뒤에 위치한 부대나 줄을 가리킬 때 자주 사용됩니다.',
      synonymAntonym: 'back과 유의어 관계이며, 정반대 방향인 front와 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'The back part of something, such as a building, vehicle, or line of people.',
      synonyms: ['back', 'hind', 'posterior'],
      antonyms: ['front', 'fore', 'advance'],
      exampleSentences: [
        { en: 'The passengers were asked to enter the bus through the door at the back.', ko: '승객들은 버스 뒤쪽에 있는 문을 통해 탑승해 달라는 요청을 받았습니다.' },
        { en: 'A small garden is located at the very end of the house property.', ko: '집 부지의 맨 뒤편에는 작은 정원이 위치해 있습니다.' },
      ],
    }
  ),
  word('reason', '이성', 6, 'noun',
    ['감정', '본능', '충동', '직관', '상상', '편견', '착각', '혼란', '무지', '광기'],
    tips({
      etymology: '라틴어 \'ratio\'에서 유래하여 계산하고 판단하는 능력을 뜻합니다.',
      visual: '복잡한 감정의 소용돌이 속에서 차갑고 논리적인 저울을 들고 있는 모습을 상상하세요.',
      soundAlike: '\'리즌\'은 \'믿음\'과 발음이 비슷하지만, 믿음보다는 논리적인 근거를 따지는 능력입니다.',
      context: '철학이나 심리학에서 인간을 동물과 구별 짓는 사고의 힘을 말할 때 자주 쓰입니다.',
      synonymAntonym: '감정(emotion)에 휘둘리지 않고 논리(logic)를 사용하는 상태를 떠올려 보세요.',
    }),
    {
      definition: 'The power of the mind to think, understand, and form judgments by a process of logic.',
      synonyms: ['intellect', 'rationality', 'logic'],
      antonyms: ['instinct', 'emotion', 'irrationality'],
      exampleSentences: [
        { en: 'Humans are often distinguished from other animals by their ability to use logic and objective thought.', ko: '인간은 논리와 객관적 사고를 사용하는 능력에 의해 종종 다른 동물들과 구별됩니다.' },
        { en: 'We must appeal to people\'s sense of logical judgment rather than their fears.', ko: '우리는 사람들의 공포심보다는 그들의 논리적 판단력에 호소해야 합니다.' },
      ],
    }
  ),
  word('rebel', '반역자', 9, 'noun',
    ['순종자', '추종자', '협력자', '지도자', '방관자', '수호자', '중재자', '동맹군', '평화주의자', '조력자'],
    tips({
      etymology: '라틴어 \'rebellis\'에서 유래했으며, \'re-(다시)\'와 \'bellum(전쟁)\'이 합쳐져 다시 전쟁을 일으키는 사람을 뜻합니다.',
      visual: '왕의 명령에 거부하며 깃발을 들고 성문 앞에 서 있는 용감한 전사의 모습을 상상해 보세요.',
      soundAlike: '\'레벨\'과 발음이 비슷하죠? 기존의 게임 \'레벨\' 시스템에 저항하며 판을 뒤엎는 사람으로 기억하세요.',
      context: '정치적 혁명가뿐만 아니라, 사회적 관습이나 부모님의 규칙에 저항하는 청소년에게도 자주 쓰입니다.',
      synonymAntonym: '권위에 맞서는 insurgent와 유의어이며, 법을 잘 따르는 conformist와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who rises in opposition or armed resistance against an established government or ruler.',
      synonyms: ['insurgent', 'mutineer', 'revolutionary'],
      antonyms: ['loyalist', 'conformist', 'adherent'],
      exampleSentences: [
        { en: 'The young man was known as a rebel who constantly challenged the strict rules of his school.', ko: '그 젊은이는 학교의 엄격한 규칙에 끊임없이 도전하는 반항아로 알려져 있었다.' },
        { en: 'Historical records describe him as a brave rebel who fought for the rights of the common people.', ko: '역사 기록은 그를 서민들의 권리를 위해 싸운 용감한 반역자로 묘사한다.' },
      ],
    }
  ),
  word('recall', '리콜, 회수', 7, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '다시를 뜻하는 re-와 부르다를 뜻하는 call이 합쳐져 물건을 다시 불러들이는 상황을 나타냅니다.',
      visual: '결함이 발견된 자동차들이 줄지어 공장으로 다시 들어가는 장면을 상상해 보세요.',
      soundAlike: '리콜(recall) 서비스라는 외래어로 이미 익숙한 단어입니다.',
      context: '소비자 안전을 위해 제조사가 판매된 제품을 회수하는 공식적인 조치를 의미합니다.',
      synonymAntonym: '회수를 뜻하는 withdrawal과 유사하며, 반대로 시장에 내놓는 release와는 반대됩니다.',
    }),
    {
      definition: 'An official order to return a faulty or dangerous product to the manufacturer for repair or replacement.',
      synonyms: ['withdrawal', 'retraction', 'revocation'],
      antonyms: ['distribution', 'issuance', 'release'],
      exampleSentences: [
        { en: 'The automobile manufacturer issued a massive recall due to a faulty braking system.', ko: '자동차 제조업체는 결함이 있는 제동 장치 때문에 대규모 회수 조치를 발표했습니다.' },
        { en: 'Customers were notified of the immediate recall of the contaminated food products.', ko: '고객들은 오염된 식품의 즉각적인 회수 통보를 받았습니다.' },
      ],
    }
  ),
  word('receipt', '수령', 4, 'noun',
    ['지불', '거절', '발송', '손실', '부채', '판매', '계약', '환불', '할인', '배송'],
    tips({
      etymology: '라틴어 \'recipere\'에서 유래했으며, \'re(다시)\'와 \'capere(잡다)\'가 합쳐져 무언가를 다시 받아 챙긴다는 의미를 가집니다.',
      visual: '택배 기사님에게 물건을 건네받고 서명하는 장면이나, 상점에서 물건을 사고 종이 전표를 받는 모습을 상상하세요.',
      soundAlike: '중간의 \'p\'가 묵음이라 \'리시트\'처럼 들립니다. \'리시트\'를 받을 때 \'리시브(receive)\' 했다고 생각하면 쉽습니다.',
      context: '비즈니스 이메일에서 \'Upon receipt of your payment\'는 \'귀하의 결제를 확인하는 즉시\'라는 뜻으로 자주 쓰입니다.',
      synonymAntonym: '무언가를 받는 \'acceptance\'와 유의어이며, 반대로 내보내거나 거절하는 \'rejection\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The action of receiving something or the fact of its being received.',
      synonyms: ['acceptance', 'acquisition', 'delivery'],
      antonyms: ['delivery', 'dispatch', 'rejection'],
      exampleSentences: [
        { en: 'Please acknowledge the arrival of the documents immediately upon their delivery.', ko: '서류를 수령하는 즉시 도착 사실을 알려주시기 바랍니다.' },
        { en: 'The confirmation email was sent to the customer shortly after the transaction was completed.', ko: '거래가 완료된 직후 고객에게 수령 확인 이메일이 발송되었습니다.' },
      ],
    }
  ),
  word('receive', '받다', 5, 'verb',
    ['거절하다', '보내다', '전달하다', '무시하다', '제공하다', '분배하다', '포기하다', '삭제하다', '연기하다', '수정하다'],
    tips({
      etymology: '라틴어 \'recipere\'에서 유래했으며, \'re(다시)\'와 \'capere(잡다)\'가 합쳐져 내 쪽으로 다시 잡아당겨 갖게 된다는 느낌입니다.',
      visual: '택배 기사님으로부터 커다란 상자를 두 손으로 공손히 건네받는 모습을 상상해 보세요.',
      soundAlike: '\'리시브(receive)\'는 배구에서 상대방의 서브를 받아내는 기술 이름과 발음이 같습니다.',
      context: '이메일, 선물, 신호, 또는 어떤 영향이나 교육을 받을 때 폭넓게 사용되는 동사입니다.',
      synonymAntonym: 'get이나 accept와 비슷하지만, give나 send와는 정반대의 방향성을 가집니다.',
    }),
    {
      definition: 'to be given, presented with, or paid something from another person or source',
      synonyms: ['accept', 'acquire', 'obtain'],
      antonyms: ['give', 'send', 'bestow'],
      exampleSentences: [
        { en: 'The charity will receive a generous donation from an anonymous benefactor tomorrow.', ko: '그 자선 단체는 내일 익명의 후원자로부터 관대한 기부금을 받을 것입니다.' },
        { en: 'Please confirm via email once you receive the attached documents for the meeting.', ko: '회의를 위한 첨부 서류를 받으시면 이메일로 확인해 주시기 바랍니다.' },
      ],
    }
  ),
  word('recent', '최근의', 6, 'adjective',
    ['고대의', '영구적인', '미래의', '전통적인', '오래된', '지속적인', '역사적인', '먼', '구식의', '불변의'],
    tips({
      etymology: '라틴어 recens에서 유래하여 \'새로운\' 또는 \'방금 일어난\'이라는 의미를 담고 있습니다.',
      visual: '오늘 아침 배달된 따끈따끈한 신문이나 방금 올라온 SNS 게시물을 상상해 보세요.',
      soundAlike: '발음이 \'리선트\'와 비슷하므로 \'리(re)시트(영수증)가 최근 것\'이라고 연상해 보세요.',
      context: '뉴스 헤드라인이나 과학 연구 결과가 발표될 때 가장 자주 쓰이는 형용사입니다.',
      synonymAntonym: '새로운 것을 뜻하는 modern과 반대되는 옛날의 old를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'having happened, begun, or been done only a short time ago',
      synonyms: ['current', 'latest', 'modern'],
      antonyms: ['ancient', 'former', 'past'],
      exampleSentences: [
        { en: 'The company\'s stock price dropped significantly following a series of recent scandals.', ko: '일련의 최근 스캔들 이후 그 회사의 주가가 크게 하락했습니다.' },
        { en: 'Scientists have discovered a new species of frog during their most recent expedition to the Amazon.', ko: '과학자들은 가장 최근의 아마존 탐사 중에 새로운 개구리 종을 발견했습니다.' },
      ],
    }
  ),
  word('reception', '받음', 7, 'noun',
    ['거절', '배달', '송신', '파괴', '무시', '출발', '삭제', '금지', '반대', '지연'],
    tips({
      etymology: '라틴어 \'recipere\'에서 유래하며 \'re(다시)\'와 \'capere(잡다)\'가 합쳐져 무언가를 받아들인다는 의미가 되었습니다.',
      visual: '호텔 로비 데스크에서 직원이 웃으며 손님의 예약 정보를 확인하고 열쇠를 건네주는 장면을 상상해 보세요.',
      soundAlike: '리셉션(reception)은 \'리셋(reset)\'과 발음이 비슷하지만, 정보를 다시 설정하는 게 아니라 받아들이는 곳입니다.',
      context: '결혼식 후 하객들을 맞이하는 연회나 TV 신호가 수신되는 상태를 말할 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 받아들이는 acceptance와 반대로 거부하는 rejection을 함께 기억하면 유용합니다.',
    }),
    {
      definition: 'the act or process of receiving something sent, given, or communicated',
      synonyms: ['acceptance', 'acquisition', 'admission'],
      antonyms: ['rejection', 'refusal', 'denial'],
      exampleSentences: [
        { en: 'The new art gallery opening received a very warm reception from the local community.', ko: '새로운 미술관 개관은 지역 사회로부터 매우 따뜻한 환영을 받았습니다.' },
        { en: 'Poor satellite reception caused the television broadcast to flicker during the storm.', ko: '좋지 않은 위성 수신 상태 때문에 폭풍우 동안 TV 방송이 깜빡거렸습니다.' },
      ],
    }
  ),
  word('recipe', '조리법', 4, 'noun',
    ['식재료', '주방기구', '영양소', '식당', '메뉴판', '요리사', '식사량', '유통기한', '조미료', '식습관'],
    tips({
      etymology: '라틴어 \'recipere(받다)\'에서 유래하여, 약사나 요리사가 처방전이나 지시서를 \'받았다\'는 의미에서 시작되었습니다.',
      visual: '유튜브 요리 채널에서 화면 옆에 재료와 순서가 적힌 자막이 떠 있는 모습을 상상하세요.',
      soundAlike: '\'레시피\'라고 발음하며, \'내 시피(비)밀 조리법\'이라고 연상하면 기억하기 쉽습니다.',
      context: '요리뿐만 아니라 \'성공을 위한 비결(recipe for success)\'처럼 비유적인 상황에서도 자주 쓰입니다.',
      synonymAntonym: '조리법을 뜻하는 formula와 유사하며, 무계획적인 상태를 뜻하는 disorganization과 대비됩니다.',
    }),
    {
      definition: 'A set of instructions telling you how to prepare and cook a particular food, including a list of the ingredients required.',
      synonyms: ['formula', 'method', 'procedure'],
      antonyms: ['improvisation', 'disorganization', 'haphazardness'],
      exampleSentences: [
        { en: 'My grandmother refused to share her secret for the perfect apple pie.', ko: '우리 할머니께서는 완벽한 사과 파이를 만드는 그녀의 비밀 조리법을 공유하기를 거부하셨다.' },
        { en: 'Following a strict can help beginners achieve consistent results in the kitchen.', ko: '엄격한 요리법을 따르는 것은 초보자들이 주방에서 일관된 결과를 얻는 데 도움을 줄 수 있다.' },
      ],
    }
  ),
  word('recognize', '인정하다', 5, 'verb',
    ['무시하다', '거절하다', '망각하다', '은폐하다', '부인하다', '혼동하다', '방치하다', '삭제하다', '왜곡하다', '반대하다'],
    tips({
      etymology: '라틴어 \'re(다시)\'와 \'cognoscere(알다)\'가 합쳐져 \'다시 보고 알게 되다\'라는 뜻에서 유래했습니다.',
      visual: '오랫동안 못 본 친구를 길에서 마주쳤을 때, \'아! 너구나!\' 하고 깨닫는 순간을 상상해 보세요.',
      soundAlike: '발음이 \'레코그나이즈\'이므로, \'내 코가 나이지?\' 하고 거울 속의 자신을 알아보는 장면을 연상해 보세요.',
      context: '공식적인 시상식에서 누군가의 업적을 기리거나, 군중 속에서 아는 얼굴을 찾아낼 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 말인 identify는 식별하는 것에 가깝고, 반대말인 ignore는 보고도 모른 척하는 것입니다.',
    }),
    {
      definition: 'To identify someone or something from having encountered them before, or to acknowledge the validity or merit of something.',
      synonyms: ['acknowledge', 'identify', 'perceive'],
      antonyms: ['ignore', 'overlook', 'misunderstand'],
      exampleSentences: [
        { en: 'The committee decided to formally honor his lifelong contribution to the field of science.', ko: '위원회는 과학 분야에 대한 그의 평생의 공헌을 공식적으로 인정하기로 결정했습니다.' },
        { en: 'She could barely see the old house through the thick fog after all these years.', ko: '그녀는 수년이 지난 후 짙은 안개 속에서 그 오래된 집을 거의 알아볼 수 없었습니다.' },
      ],
    }
  ),
  word('recommend', '추천하다', 6, 'verb',
    ['시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다'],
    tips({
      etymology: '라틴어 \'re-\'(다시)와 \'commendare\'(맡기다)가 합쳐져, 누군가에게 믿고 맡길 만하다고 다시 한번 말해주는 것에서 유래했습니다.',
      visual: '식당에서 웨이터가 가장 맛있는 메뉴를 손가락으로 가리키며 엄지를 치켜세우는 모습을 상상하세요.',
      soundAlike: '\'내 코멘트(comment)를 믿어봐\'라고 다시(re) 말하는 상황을 떠올리면 발음과 의미를 연결하기 쉽습니다.',
      context: '친구에게 영화를 권하거나, 의사가 환자에게 특정 치료법을 제안할 때 가장 흔히 쓰이는 단어입니다.',
      synonymAntonym: '무언가를 좋다고 말하는 suggest와 반대로 하지 말라고 경고하는 warn을 함께 기억하세요.',
    }),
    {
      definition: 'to suggest that someone or something is good or suitable for a particular purpose or job',
      synonyms: ['suggest', 'advise', 'advocate'],
      antonyms: ['dissuade', 'reject', 'criticize'],
      exampleSentences: [
        { en: 'The librarian can suggest several books that match your interests perfectly.', ko: '사서 선생님은 당신의 관심사에 딱 맞는 책 몇 권을 권해줄 수 있습니다.' },
        { en: 'Many travel experts advise visiting the island during the spring season.', ko: '많은 여행 전문가들은 봄철에 그 섬을 방문할 것을 권장합니다.' },
      ],
    }
  ),
  word('record', '기록하다', 7, 'verb',
    ['정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다'],
    tips({
      etymology: '라틴어 \'re(다시)\'와 \'cor(심장/마음)\'이 합쳐져 \'다시 마음속에 불러오다\'라는 의미에서 유래했습니다.',
      visual: '중요한 순간을 놓치지 않으려고 수첩에 꼼꼼히 적거나 카메라 셔터를 누르는 모습을 상상해 보세요.',
      soundAlike: '\'레코드판\'을 떠올려 보세요. 소리를 판에 새겨서 영구적으로 남기는 도구입니다.',
      context: '역사적인 사건이나 매일의 일기, 혹은 운동 경기에서 세운 최고의 성적을 남길 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 적어두는 register와 반대로 아무것도 남기지 않고 지워버리는 erase를 함께 기억하세요.',
    }),
    {
      definition: 'to set down in writing or some other permanent form for later reference',
      synonyms: ['register', 'document', 'log'],
      antonyms: ['erase', 'delete', 'discard'],
      exampleSentences: [
        { en: 'The historian spent years trying to document every detail of the ancient civilization.', ko: '그 역사가는 고대 문명의 모든 세부 사항을 기록하기 위해 수년을 보냈습니다.' },
        { en: 'Please make sure to note down the exact time each participant enters the room.', ko: '각 참가자가 방에 들어오는 정확한 시간을 반드시 기록해 주세요.' },
      ],
    }
  ),
  word('recover', '되찾다', 4, 'verb',
    ['상실', '파괴', '망각', '포기', '손실', '거절', '지연', '중단', '삭제', '방치'],
    tips({
      etymology: '라틴어 recuperare에서 유래했으며, re(다시)와 capere(잡다)가 합쳐져 잃어버린 것을 다시 손에 넣는다는 의미를 가집니다.',
      visual: '바닥에 떨어진 지갑을 다시 주워 주머니에 넣는 모습을 상상해 보세요.',
      soundAlike: '리커버(recover)는 책의 \'커버\'를 \'다시\' 씌우는 것처럼 원래 상태로 되돌리는 소리와 연결하면 쉽습니다.',
      context: '건강을 회복하거나 분실물을 되찾을 때, 혹은 경제가 침체기에서 벗어날 때 주로 사용됩니다.',
      synonymAntonym: 'get back과 동의어이며, 무언가를 영영 잃어버리는 lose와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to get back something that was lost, stolen, or used, or to return to a normal state of health or mind',
      synonyms: ['retrieve', 'regain', 'reclaim'],
      antonyms: ['lose', 'forfeit', 'relinquish'],
      exampleSentences: [
        { en: 'The police managed to find the stolen vehicle and return it to its rightful owner.', ko: '경찰은 도난 차량을 찾아내어 정당한 소유주에게 되찾아 주었습니다.' },
        { en: 'It took several months for the local economy to bounce back after the natural disaster.', ko: '자연재해 이후 지역 경제가 원래 상태를 되찾는 데 몇 달이 걸렸습니다.' },
      ],
    }
  ),
  word('recruit', '신병', 10, 'noun',
    ['베테랑', '사령관', '탈영병', '장교', '예비역', '부사관', '지휘관', '전역자', '용병', '포로'],
    tips({
      etymology: '라틴어 \'recrescere\'에서 유래하여 \'다시 자라나다\' 혹은 \'새로운 보충\'이라는 의미를 담고 있습니다.',
      visual: '군대 훈련소에서 빳빳한 새 군복을 입고 긴장한 표정으로 서 있는 이등병의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'리크루트\'인데, 새로운 인력을 \'구하러(루트)\' 다니는 상황을 연상하면 쉽습니다.',
      context: '군대뿐만 아니라 기업에서 새로 뽑은 신입 사원을 가리킬 때도 매우 자주 쓰이는 표현입니다.',
      synonymAntonym: '경험이 없는 초보자(novice)와 대조되는 숙련된 전문가(veteran)를 함께 기억하세요.',
    }),
    {
      definition: 'A person who has recently joined the armed forces or a newly enlisted member of an organization.',
      synonyms: ['enlistee', 'novice', 'beginner'],
      antonyms: ['veteran', 'expert', 'professional'],
      exampleSentences: [
        { en: 'The drill sergeant spent the entire afternoon training the young recruit on how to salute properly.', ko: '훈련 교관은 오후 내내 어린 신병에게 제대로 경례하는 법을 가르치는 데 시간을 보냈다.' },
        { en: 'Every new recruit must undergo a rigorous physical examination before starting basic training.', ko: '모든 신병은 기초 훈련을 시작하기 전에 엄격한 신체검사를 받아야 한다.' },
      ],
    }
  ),
  word('recycle', '이용하다', 5, 'verb',
    ['정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다'],
    tips({
      etymology: '다시를 뜻하는 re-와 순환을 뜻하는 cycle이 합쳐져 자원을 다시 돌려 쓴다는 의미가 됩니다.',
      visual: '초록색 화살표 세 개가 삼각형 모양으로 서로를 가리키며 뱅글뱅글 도는 마크를 상상해 보세요.',
      soundAlike: '리사이클은 \'다시(Re) 사이클(Cycle)을 돌린다\'고 소리 내어 읽으면 기억하기 쉽습니다.',
      context: '환경 보호를 위해 플라스틱 병이나 종이를 분리 배출할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: '버리는 것(discard)의 반대로, 자원을 재가공하여 다시 쓰는(reuse) 과정을 떠올리세요.',
    }),
    {
      definition: 'to process used materials such as paper, glass, or plastic so that they can be used again',
      synonyms: ['reprocess', 'reclaim', 'reuse'],
      antonyms: ['discard', 'waste', 'dump'],
      exampleSentences: [
        { en: 'Many cities encourage residents to sort their trash to effectively process reusable materials.', ko: '많은 도시들이 재사용 가능한 재료들을 효과적으로 처리하기 위해 주민들에게 쓰레기 분리배출을 권장합니다.' },
        { en: 'Old glass bottles can be melted down and transformed into new containers.', ko: '오래된 유리병들은 녹여서 새로운 용기로 다시 만들어질 수 있습니다.' },
      ],
    }
  ),
  word('red', '붉은', 2, 'adjective',
    ['파란', '노란', '초록의', '검은', '하얀', '보라색의', '회색의', '갈색의', '투명한', '어두운'],
    tips({
      etymology: '고대 영어 \'read\'에서 유래했으며, 피나 불의 색깔을 나타내는 인도유럽어족의 뿌리에서 시작되었습니다.',
      visual: '잘 익은 사과나 멈춤 신호등의 강렬한 색깔을 머릿속에 그려보세요.',
      soundAlike: '빵을 뜻하는 \'bread\'에서 \'b\'만 빼면 \'red\'가 됩니다. 빨간 잼을 바른 빵을 상상하세요.',
      context: '주로 경고, 사랑, 열정 또는 화가 난 상태를 표현할 때 자주 사용되는 색상 형용사입니다.',
      synonymAntonym: '진홍색을 뜻하는 crimson과 유사하며, 보색 관계인 green과 대비하여 기억하면 좋습니다.',
    }),
    {
      definition: 'having the color of blood, fire, or even rubies',
      synonyms: ['crimson', 'scarlet', 'ruby'],
      antonyms: ['green', 'blue', 'colorless'],
      exampleSentences: [
        { en: 'The sunset painted the entire sky in a deep shade of crimson and orange.', ko: '노을이 온 하늘을 짙은 붉은색과 오렌지색으로 물들였습니다.' },
        { en: 'She wore a bright dress to the party to make sure she stood out in the crowd.', ko: '그녀는 군중 속에서 확실히 눈에 띄기 위해 파티에 밝은 빨간색 드레스를 입고 갔습니다.' },
      ],
    }
  ),
  word('reduce', '줄이다', 6, 'verb',
    ['증가시키다', '확장하다', '유지하다', '보존하다', '건설하다', '강화하다', '축적하다', '연장하다', '번영하다', '창조하다'],
    tips({
      etymology: '라틴어 \'re-(뒤로)\'와 \'ducere(이끌다)\'가 합쳐져 양이나 크기를 뒤로 물려 줄인다는 의미가 되었습니다.',
      visual: '풍선에서 바람이 서서히 빠지며 크기가 작아지는 모습을 상상해 보세요.',
      soundAlike: '\'리듀스\'는 \'뒤로(re) 쥬스(duce)를 빼낸다\'고 생각하면 양이 줄어드는 느낌이 납니다.',
      context: '환경 보호를 위한 쓰레기 줄이기나 마트의 가격 할인 상황에서 가장 자주 쓰입니다.',
      synonymAntonym: 'decrease와는 양적인 감소를, increase와는 반대되는 성장을 나타낼 때 대조하여 외우면 좋습니다.',
    }),
    {
      definition: 'to make something smaller or less in amount, degree, or size',
      synonyms: ['decrease', 'diminish', 'lessen'],
      antonyms: ['increase', 'expand', 'enlarge'],
      exampleSentences: [
        { en: 'The company plans to cut costs and minimize waste to improve efficiency.', ko: '그 회사는 효율성을 높이기 위해 비용을 절감하고 폐기물을 줄일 계획입니다.' },
        { en: 'Eating more vegetables can help lower the risk of heart disease significantly.', ko: '채소를 더 많이 먹는 것은 심장병의 위험을 상당히 낮추는 데 도움이 될 수 있습니다.' },
      ],
    }
  ),
  word('refer', '조회시키다', 7, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '라틴어 \'re-(다시)\'와 \'ferre(가져오다)\'가 합쳐져 정보를 다시 가져와 확인한다는 의미를 가집니다.',
      visual: '도서관 사서가 질문을 받고 백과사전의 특정 페이지를 가리키는 모습을 상상해 보세요.',
      soundAlike: '\'리퍼\'라고 발음되는데, 물건을 다시 \'리퍼(refurbish)\'하기 위해 원래 사양을 조회하는 상황을 연상하세요.',
      context: '전문적인 도움이나 정확한 정보를 얻기 위해 다른 사람이나 자료에게 보내는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'consult와 유의어 관계이며, 무시하고 지나치는 ignore와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To send someone or something to a different person or place for help, information, or a decision.',
      synonyms: ['consult', 'direct', 'attribute'],
      antonyms: ['ignore', 'neglect', 'disregard'],
      exampleSentences: [
        { en: 'The general practitioner decided to send the patient to a specialist for further examination.', ko: '일반의는 정밀 검사를 위해 환자를 전문의에게 조회시키기로 결정했다.' },
        { en: 'Please look at the appendix at the back of the book for more detailed statistical data.', ko: '더 자세한 통계 자료를 위해 책 뒤편의 부록을 조회해 주십시오.' },
      ],
    }
  ),
  word('refine', '정제정련하다', 8, 'verb',
    ['오염시키다', '방치하다', '파괴하다', '무시하다', '혼합하다', '낭비하다', '거칠게하다', '중단하다', '지연시키다', '훼손하다'],
    tips({
      etymology: '다시를 뜻하는 re와 순수한 상태를 뜻하는 fine이 결합하여 다시 순수하게 만든다는 의미가 되었습니다.',
      visual: '흙탕물을 필터에 걸러 투명하고 깨끗한 물로 바꾸는 정수 과정을 상상해 보세요.',
      soundAlike: '리파인(refine)은 \'다시 파인(fine)하게\' 만든다고 생각하면 기억하기 쉽습니다.',
      context: '원유를 가솔린으로 정제하거나, 초안을 다듬어 완벽한 보고서로 만들 때 주로 쓰입니다.',
      synonymAntonym: '불순물을 제거하는 purify와 유의어이며, 반대로 오염시키는 contaminate와는 반대 관계입니다.',
    }),
    {
      definition: 'to improve something by making small changes or removing impurities to reach a higher state of quality',
      synonyms: ['purify', 'polish', 'perfect'],
      antonyms: ['pollute', 'corrupt', 'damage'],
      exampleSentences: [
        { en: 'Engineers continue to improve the technology to further process and purify the raw materials.', ko: '엔지니어들은 원자재를 더욱 정제하고 가공하기 위해 기술을 계속 개선하고 있습니다.' },
        { en: 'The author spent several months working to polish and improve the final manuscript before publication.', ko: '작가는 출판 전 최종 원고를 다듬고 개선하는 데 몇 달을 보냈습니다.' },
      ],
    }
  ),
  word('reflect', '반사하다', 4, 'verb',
    ['변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 \'reflectere\'에서 유래했으며 \'re(뒤로)\'와 \'flectere(굽히다)\'가 합쳐져 빛이나 생각이 되돌아오는 것을 의미합니다.',
      visual: '거울 앞에 서서 자신의 모습이 그대로 비치는 장면이나 잔잔한 호수 위에 산이 비치는 모습을 상상해 보세요.',
      soundAlike: '\'리플렉트\' 발음이 \'리플(물결)\'과 비슷하죠? 물결 위에 빛이 반사되는 이미지를 떠올리면 쉽습니다.',
      context: '물리적으로 빛을 튕겨낼 때도 쓰지만, 과거의 일을 깊이 되돌아보며 생각할 때도 자주 사용되는 단어입니다.',
      synonymAntonym: '거울처럼 보여주는 mirror와 유의어이며, 빛을 흡수해버리는 absorb와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to throw back light, heat, or sound from a surface, or to show an image of something on a shiny surface',
      synonyms: ['mirror', 'echo', 'rebound'],
      antonyms: ['absorb', 'ignore', 'disregard'],
      exampleSentences: [
        { en: 'The calm surface of the lake acted like a mirror to show the surrounding mountains.', ko: '잔잔한 호수 표면이 거울처럼 작용하여 주변의 산들을 비추었다.' },
        { en: 'Take some time at the end of the year to think deeply about your achievements and failures.', ko: '연말에 시간을 내어 당신의 성취와 실패에 대해 깊이 되돌아보세요.' },
      ],
    }
  ),
  word('reform', '개혁하다', 5, 'verb',
    ['파괴하다', '유지하다', '방치하다', '무시하다', '반복하다', '수행하다', '확인하다', '시작하다', '처리하다', '적용하다'],
    tips({
      etymology: '다시를 뜻하는 re와 형태를 뜻하는 form이 합쳐져 모양을 다시 고쳐 만든다는 어원을 가집니다.',
      visual: '낡고 찌그러진 건물을 새롭고 튼튼한 구조로 다시 짓는 공사 현장을 상상해 보세요.',
      soundAlike: '리폼(reform) 가구처럼 낡은 것을 새롭게 고쳐 쓰는 행위를 떠올리면 쉽습니다.',
      context: '정치, 교육, 경제 시스템의 고질적인 문제를 해결하고 개선할 때 주로 사용됩니다.',
      synonymAntonym: '개선하다는 뜻의 improve와 비슷하지만, 아예 체제를 바꾸는 것은 폐지하다는 뜻의 abolish와 반대됩니다.',
    }),
    {
      definition: 'to improve a system, organization, or law by making changes to it',
      synonyms: ['amend', 'restructure', 'reorganize'],
      antonyms: ['preserve', 'worsen', 'damage'],
      exampleSentences: [
        { en: 'The government announced a new plan to improve the healthcare system next year.', ko: '정부는 내년에 의료 체계를 개선하기 위한 새로운 계획을 발표했습니다.' },
        { en: 'Activists are demanding that the authorities change the outdated legal structure immediately.', ko: '활동가들은 당국이 시대에 뒤떨어진 법적 구조를 즉각 개혁할 것을 요구하고 있습니다.' },
      ],
    }
  ),
  word('refrigerator', '냉장고', 6, 'noun',
    ['세탁기', '전자레인지', '식기세척기', '청소기', '에어컨', '가습기', '전등', '오븐', '다리미', '선풍기'],
    tips({
      etymology: '다시를 뜻하는 re-와 차갑게 만들다라는 뜻의 frigerare가 합쳐져 차갑게 유지하는 장치를 의미합니다.',
      visual: '주방 한구석에 놓인 커다란 은색 가전제품 안에 신선한 채소와 우유가 가득 차 있는 모습을 상상해 보세요.',
      soundAlike: '리프리지레이터의 \'프리지(fridge)\' 부분이 \'얼리다(freeze)\'와 발음이 비슷하여 차갑게 얼리는 기계임을 연상시킵니다.',
      context: '음식이 상하지 않게 보관하거나 시원한 음료를 마시고 싶을 때 가장 먼저 찾는 가전제품입니다.',
      synonymAntonym: '짧게 줄여서 fridge라고도 부르며, 열을 가하는 stove나 oven과는 반대되는 기능을 합니다.',
    }),
    {
      definition: 'A large electrical appliance used for keeping food and drinks cold to prevent them from spoiling.',
      synonyms: ['fridge', 'icebox', 'cooler'],
      antonyms: ['oven', 'stove', 'heater'],
      exampleSentences: [
        { en: 'Please put the leftover pizza back in the kitchen appliance so it stays fresh.', ko: '남은 피자가 신선하게 유지되도록 주방 가전제품 안에 다시 넣어주세요.' },
        { en: 'The milk turned sour because someone forgot to close the door of the cooling unit.', ko: '누군가 냉각 장치의 문을 닫는 것을 잊어버려서 우유가 상했습니다.' },
      ],
    }
  ),
];
