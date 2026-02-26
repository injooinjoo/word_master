import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch65: VocabItem[] = [
  word('therefore', '그러므로', 5, 'adverb',
    ['하지만', '그러나', '그럼에도', '오히려', '게다가', '마침내', '비록', '만약', '때때로', '결코'],
    tips({
      etymology: 'there(거기)와 fore(앞서/때문에)가 합쳐져 \'그것 때문에\'라는 결론을 이끌어냅니다.',
      visual: '화살표가 왼쪽에서 오른쪽으로 향하며 결론을 가리키는 기호를 상상하세요.',
      soundAlike: '\'데어포어\' 발음이 \'대포\'와 비슷하니, 대포를 쏘듯 결론을 강력하게 쏜다고 생각하세요.',
      context: '수학 문제의 풀이 마지막 단계에서 \'그러므로\'라고 결론을 낼 때 주로 쓰입니다.',
      synonymAntonym: 'consequently와 비슷하며, 반대로 원인을 나타내는 because와는 대조적입니다.',
    }),
    {
      definition: 'For that reason or as a consequence of what has just been mentioned.',
      synonyms: ['consequently', 'hence', 'thus'],
      antonyms: ['regardless', 'nevertheless', 'otherwise'],
      wordDistractors: ['theorem', 'thereafter', 'thereby'],
      definitionDistractors: [
        'In a manner that is contrary to what was previously stated.',
        'At a time before the event being discussed.',
        'In spite of the circumstances or conditions mentioned.',
      ],
      exampleSentences: [
        { en: 'The team practiced every day; they won the championship trophy.', ko: '그 팀은 매일 연습했습니다. 그 결과 그들은 우승 트로피를 차지했습니다.' },
        { en: 'New evidence has emerged, and the judge must reconsider the previous ruling.', ko: '새로운 증거가 나타났으므로 판사는 이전 판결을 재고해야 합니다.' },
      ],
    }
  ),
  word('they', '그들', 2, 'pronoun',
    ['우리', '너희', '누구', '무엇', '어디', '언제', '어떻게', '이것', '저것', '모두'],
    tips({
      etymology: '고대 노르웨이어 \'þeir\'에서 유래하여 \'그 사람들\'을 가리키는 대명사로 정착되었습니다.',
      visual: '여러 명의 사람들이 한데 모여 걸어가는 모습을 상상하며 그들을 가리키는 손가락을 떠올려 보세요.',
      soundAlike: '\'데이\'라고 발음되는데, \'그들의 날(Day)\'이라고 연상하면 기억하기 쉽습니다.',
      context: '이미 언급된 사람들이나 사물들을 다시 지칭할 때 문장의 주어로 주로 사용됩니다.',
      synonymAntonym: '특정 인물들을 가리키는 \'those people\'과 비슷하며, 나를 포함한 \'we\'와는 반대 개념입니다.',
    }),
    {
      definition: 'Used to refer to two or more people or things previously mentioned or easily identified.',
      synonyms: ['those people', 'the others', 'them'],
      antonyms: ['we', 'us', 'myself'],
      wordDistractors: ['thee', 'then', 'them'],
      definitionDistractors: [
        'Used to refer to oneself when speaking in the first person.',
        'A word used to address a single person directly in conversation.',
        'A term indicating possession belonging to the speaker.',
      ],
      exampleSentences: [
        { en: 'The children were hungry, so they ate all the sandwiches.', ko: '아이들이 배가 고파서 그들은 샌드위치를 모두 먹었습니다.' },
        { en: 'Many people believe that they can change the world through small actions.', ko: '많은 사람들은 자신들이 작은 행동을 통해 세상을 바꿀 수 있다고 믿습니다.' },
      ],
    }
  ),
  word('thick', '두꺼운', 6, 'adjective',
    ['얇은', '가느다란', '투명한', '부드러운', '날카로운', '거친', '단단한', '희미한', '좁은', '가벼운'],
    tips({
      etymology: '고대 영어 \'thicce\'에서 유래했으며, 밀도가 높거나 부피가 큰 상태를 묘사하는 데 쓰여왔습니다.',
      visual: '백과사전처럼 아주 두툼한 책의 옆면이나 겨울철 입는 아주 두꺼운 패딩 점퍼를 상상해 보세요.',
      soundAlike: '\'씩\' 하고 웃을 때의 소리와 비슷하지만, 혀를 살짝 물고 \'띡\'에 가깝게 발음하며 두께감을 느껴보세요.',
      context: '안개가 자욱해서 앞이 보이지 않을 때나, 소스가 걸쭉할 때도 이 단어를 사용합니다.',
      synonymAntonym: '밀도가 높다는 뜻의 dense와 유의어이며, 반대로 아주 얇은 상태인 thin과 대조됩니다.',
    }),
    {
      definition: 'having a large distance between opposite sides or surfaces; not thin',
      synonyms: ['dense', 'heavy', 'chunky'],
      antonyms: ['thin', 'slender', 'slight'],
      wordDistractors: ['thicket', 'trick', 'flick'],
      definitionDistractors: [
        'Having a rough or coarse texture on the outer surface.',
        'Extending a great distance from top to bottom vertically.',
        'Resistant to bending or flexing under pressure.',
      ],
      exampleSentences: [
        { en: 'The hikers struggled to move through the thick forest undergrowth.', ko: '등산객들은 울창하고 빽빽한 숲의 덤불을 통과하느라 애를 먹었다.' },
        { en: 'A thick layer of dust had settled on the old wooden table.', ko: '오래된 나무 탁자 위에 먼지가 두껍게 쌓여 있었다.' },
      ],
    }
  ),
  word('thief', '도둑', 7, 'noun',
    ['경찰관', '피해자', '목격자', '변호사', '판사', '죄수', '경비원', '탐정', '범죄', '감옥'],
    tips({
      etymology: '고대 영어 \'theof\'에서 유래했으며, 남의 물건을 몰래 가져가는 사람을 뜻합니다.',
      visual: '검은 마스크를 쓰고 커다란 자루를 짊어진 채 담장을 넘는 사람을 상상해 보세요.',
      soundAlike: '\'씨프\'라고 발음되는데, 물건을 \'슬쩍\' 훔치는 소리와 비슷하다고 연상해 보세요.',
      context: '주로 밤에 몰래 침입하거나 소매치기를 하는 상황에서 자주 쓰이는 단어입니다.',
      synonymAntonym: '강도(robber)와 비슷하지만, thief는 주로 몰래 훔치는 사람을 강조합니다.',
    }),
    {
      definition: 'A person who steals another person\'s property, especially by stealth and without using force or violence.',
      synonyms: ['burglar', 'robber', 'pickpocket'],
      antonyms: ['victim', 'police', 'owner'],
      wordDistractors: ['chief', 'grief', 'brief'],
      definitionDistractors: [
        'A person who guards property or patrols an area for safety.',
        'An official who investigates crimes and gathers evidence.',
        'A witness who provides testimony about an observed event.',
      ],
      exampleSentences: [
        { en: 'The security camera captured the face of the intruder who broke into the jewelry store.', ko: '보안 카메라는 보석 가게에 침입한 침입자의 얼굴을 포착했습니다.' },
        { en: 'Someone reported a suspicious person lurking near the parked cars last night.', ko: '어젯밤 주차된 차들 근처를 서성이는 수상한 사람을 누군가 신고했습니다.' },
      ],
    }
  ),
  word('thin', '얇은', 4, 'adjective',
    ['두꺼운', '단단한', '복잡한', '거대한', '평평한', '날카로운', '부드러운', '딱딱한', '무거운', '희미한'],
    tips({
      etymology: '고대 영어 thynne에서 유래하여 \'늘어난\' 혹은 \'희박한\'이라는 의미를 담고 있습니다.',
      visual: '종이 한 장이나 아주 가느다란 실의 단면을 상상해 보세요.',
      soundAlike: '\'씬\'이라고 발음되는데, 영화의 한 \'scene\'이 아주 짧고 얇게 지나가는 모습을 떠올려보세요.',
      context: '공기가 희박하거나, 물체가 두껍지 않거나, 몸매가 마른 상태를 표현할 때 두루 쓰입니다.',
      synonymAntonym: 'slender는 날씬한 긍정적 의미를, thick은 두툼한 반대 의미를 가집니다.',
    }),
    {
      definition: 'having little distance between opposite sides or surfaces; not thick or fat',
      synonyms: ['slender', 'slim', 'narrow'],
      antonyms: ['thick', 'dense', 'wide'],
      wordDistractors: ['shin', 'twin', 'grin'],
      definitionDistractors: [
        'Having a smooth or polished surface that reflects light.',
        'Lacking color or appearing washed out and faded.',
        'Moving at a slow pace or lacking energy.',
      ],
      exampleSentences: [
        { en: 'The ice on the lake is still too fragile and not deep enough to walk on safely.', ko: '호수의 얼음이 여전히 너무 얇아서 안전하게 걷기에는 충분하지 않다.' },
        { en: 'A layer of dust covered the old books in the attic.', ko: '다락방의 오래된 책들 위로 얇은 먼지 층이 쌓여 있었다.' },
      ],
    }
  ),
  word('thing', '물건', 3, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '고대 영어 \'thing\'에서 유래했으며, 원래는 \'회의\'나 \'사건\'을 뜻하다가 점차 구체적인 물체를 가리키게 되었습니다.',
      visual: '책상 위에 놓인 이름 모를 작은 잡동사니 하나를 손가락으로 가리키는 모습을 상상해 보세요.',
      soundAlike: '\'띵\' 하고 머릿속에 아이디어가 떠오를 때 그 \'생각\'이나 \'물건\'을 떠올리면 발음과 연결하기 쉽습니다.',
      context: '구체적인 이름을 모르거나 언급하기 귀찮을 때 \'그거\'라고 부르는 모든 대상에 쓰입니다.',
      synonymAntonym: 'item이나 object와 비슷하지만 훨씬 포괄적이며, 아무것도 없는 상태인 nothing과 반대됩니다.',
    }),
    {
      definition: 'An object that one need not, cannot, or does not wish to give a specific name to.',
      synonyms: ['object', 'article', 'entity'],
      antonyms: ['nothing', 'void', 'nullity'],
      wordDistractors: ['think', 'thine', 'sting'],
      definitionDistractors: [
        'A specific period of time set aside for a scheduled activity.',
        'A formal event organized for a large group of people.',
        'An abstract concept or principle in philosophy or science.',
      ],
      exampleSentences: [
        { en: 'Pick up that heavy object and put it in the box.', ko: '저 무거운 물건을 집어서 상자 안에 넣으세요.' },
        { en: 'The most important matter right now is your health.', ko: '지금 가장 중요한 것은 당신의 건강입니다.' },
      ],
    }
  ),
  word('think', '생각하다', 1, 'verb',
    ['처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다'],
    tips({
      etymology: '고대 영어 \'thyncan\'에서 유래했으며, 마음속으로 무언가를 떠올리거나 고려한다는 본질적인 의미를 담고 있습니다.',
      visual: '머리 위에 커다란 물음표나 전구 하나가 반짝이는 만화 속 장면을 상상해 보세요.',
      soundAlike: '\'띵\' 하는 소리와 함께 아이디어가 떠오르는 순간을 \'think\'의 발음과 연결하면 기억하기 쉽습니다.',
      context: '의견을 말할 때 \'I think...\'로 문장을 시작하는 습관을 들이면 자연스럽게 익숙해집니다.',
      synonymAntonym: '단순히 머리에 떠올리는 \'believe\'와 깊이 고민하는 \'ponder\'를 함께 공부하고, 아무 생각 없는 상태인 \'ignore\'를 반대로 기억하세요.',
    }),
    {
      definition: 'To use the mind to form ideas, make judgments, or consider something carefully.',
      synonyms: ['believe', 'consider', 'ponder'],
      antonyms: ['forget', 'ignore', 'disregard'],
      wordDistractors: ['thick', 'thing', 'thank'],
      definitionDistractors: [
        'To physically move an object from one place to another.',
        'To speak aloud in front of a group of listeners.',
        'To observe something carefully with focused attention.',
      ],
      exampleSentences: [
        { en: 'Many people believe that we need to find a better solution for this problem.', ko: '많은 사람들은 우리가 이 문제에 대해 더 나은 해결책을 찾아야 한다고 생각합니다.' },
        { en: 'Please take a moment to reflect on your actions before making a final decision.', ko: '최종 결정을 내리기 전에 당신의 행동에 대해 잠시 생각해보는 시간을 가지세요.' },
      ],
    }
  ),
  word('thirst', '갈증', 2, 'noun',
    ['배고픔', '피로', '졸음', '허기', '욕구', '고통', '열망', '권태', '어지러움', '두통'],
    tips({
      etymology: '고대 영어 \'thurst\'에서 유래했으며, \'마르다\'라는 뜻의 게르만어 어근과 연결되어 목마름을 뜻하게 되었습니다.',
      visual: '뜨거운 사막 한가운데서 물 한 잔을 간절히 바라는 여행자의 모습을 상상해 보세요.',
      soundAlike: '\'th\' 발음을 할 때 혀를 살짝 물고 \'써스트\'라고 발음하며 목이 타는 느낌을 연상하세요.',
      context: '단순히 물이 필요한 상태뿐만 아니라 지식이나 성공에 대한 강렬한 욕구를 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'dryness와 유사하며, 반대로 수분이 가득한 상태인 hydration과 대조하여 기억하세요.',
    }),
    {
      definition: 'A feeling of needing or wanting to drink something, or a strong desire for something.',
      synonyms: ['dryness', 'craving', 'longing'],
      antonyms: ['satisfaction', 'fullness', 'repletion'],
      wordDistractors: ['thrust', 'first', 'burst'],
      definitionDistractors: [
        'A sudden feeling of dizziness or lightheadedness.',
        'The physical sensation of extreme cold or shivering.',
        'A state of deep sleep or unconsciousness.',
      ],
      exampleSentences: [
        { en: 'The long hike in the summer heat left them with a desperate need for water.', ko: '여름 더위 속의 긴 하이킹은 그들에게 간절한 갈증을 남겼다.' },
        { en: 'Her lifelong passion for learning was driven by an insatiable curiosity.', ko: '그녀의 평생에 걸친 배움에 대한 열정은 채워지지 않는 지식에 대한 갈증에서 비롯되었다.' },
      ],
    }
  ),
  word('this', '이것', 3, 'pronoun',
    ['저것', '그것', '무엇', '어느', '모두', '일부', '전체', '다른', '같은', '어떤'],
    tips({
      etymology: '고대 영어 \'thes\'에서 유래하여 말하는 사람과 가까운 대상을 가리키는 지시어로 발전했습니다.',
      visual: '손가락으로 바로 앞에 있는 물건을 가리키는 모습을 상상해 보세요.',
      soundAlike: '\'디스\'라고 발음하며, 힙합에서 상대를 \'이\' 사람이라고 지목하며 공격하는 \'디스\'를 떠올려 보세요.',
      context: '대화 중 바로 앞에서 언급된 내용이나 물리적으로 가까운 사물을 지칭할 때 사용합니다.',
      synonymAntonym: '가까운 것을 뜻하는 that과 대조되며, 구체적인 대상을 지칭할 때 it과 유사하게 쓰입니다.',
    }),
    {
      definition: 'The person, thing, or idea that is present, nearby, or just mentioned.',
      synonyms: ['it', 'the aforementioned', 'the latter'],
      antonyms: ['that', 'those', 'the former'],
      wordDistractors: ['thus', 'thin', 'his'],
      definitionDistractors: [
        'A word used to describe something located far away from the speaker.',
        'A general question word asking about the identity of a person.',
        'A term that connects two clauses in a conditional sentence.',
      ],
      exampleSentences: [
        { en: 'Please take a look at the document in front of you.', ko: '당신 앞에 있는 이 문서를 확인해 주세요.' },
        { en: 'A sudden change in weather caused the delay of the flight.', ko: '갑작스러운 날씨 변화가 이 비행기 지연의 원인이 되었습니다.' },
      ],
    }
  ),
  word('thorough', '완전한', 5, 'adjective',
    ['안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한'],
    tips({
      etymology: '고대 영어 \'thuruh\'에서 유래했으며, \'through(통과하여)\'와 어원이 같습니다. 처음부터 끝까지 꿰뚫고 지나가는 이미지를 떠올리세요.',
      visual: '돋보기를 들고 서류의 아주 작은 글씨까지 하나하나 꼼꼼하게 살피는 탐정의 모습을 상상해 보세요.',
      soundAlike: '\'써러\'라고 발음되는데, 모든 먼지를 \'쓸어\'버릴 정도로 구석구석 깨끗하고 철저하게 청소하는 상황과 연결하면 쉽습니다.',
      context: '단순히 \'완성된\' 상태를 넘어, 세부 사항을 하나도 놓치지 않고 완벽하게 처리했을 때 주로 사용합니다.',
      synonymAntonym: '꼼꼼한 meticulous와 유의어 관계이며, 대충 하는 cursory와는 반대되는 개념입니다.',
    }),
    {
      definition: 'performed or written with great care and completeness, leaving nothing out',
      synonyms: ['comprehensive', 'meticulous', 'exhaustive'],
      antonyms: ['superficial', 'cursory', 'incomplete'],
      wordDistractors: ['through', 'borough', 'furrow'],
      definitionDistractors: [
        'Happening at a rapid speed without any delays.',
        'Involving only the most basic or surface-level details.',
        'Performed reluctantly and with minimal enthusiasm.',
      ],
      exampleSentences: [
        { en: 'The police conducted a thorough search of the entire building to find any hidden evidence.', ko: '경찰은 숨겨진 증거를 찾기 위해 건물 전체를 철저하게 수색했습니다.' },
        { en: 'Please make sure you give the report a thorough review before submitting it to the manager.', ko: '매니저에게 제출하기 전에 보고서를 꼼꼼하게 검토했는지 확인해 주세요.' },
      ],
    }
  ),
  word('though', '~임에도', 6, 'conjunction',
    ['그래서', '왜냐하면', '그러므로', '따라서', '게다가', '한편', '그리고', '또는', '그런데', '결국'],
    tips({
      etymology: '고대 영어 \'theah\'에서 유래했으며, \'그럼에도 불구하고\'라는 양보의 의미를 담고 있습니다.',
      visual: '비가 쏟아지는 창밖을 보면서도 우산을 쓰고 밖으로 나가는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'도우\'와 비슷하므로, \'도움\'이 필요한 상황임에도 혼자 해내는 장면을 연상하세요.',
      context: '문장 끝에 붙여서 \'그렇지만\'이라는 뉘앙스를 주거나 문장 중간에 반전의 의미를 넣을 때 사용합니다.',
      synonymAntonym: 'although와 비슷하지만 더 구체적인 대조를 이룰 때는 despite와 반대되는 상황을 생각하세요.',
    }),
    {
      definition: 'despite the fact that; used to introduce a statement that makes the main statement seem surprising',
      synonyms: ['although', 'nevertheless', 'nonetheless'],
      antonyms: ['consequently', 'therefore', 'accordingly'],
      wordDistractors: ['thorough', 'thought', 'through'],
      definitionDistractors: [
        'Used to indicate the reason or cause behind an event.',
        'Expressing a result that follows logically from a premise.',
        'Indicating that something will happen at a future time.',
      ],
      exampleSentences: [
        { en: 'The team lost the game even though they played their best.', ko: '그 팀은 최선을 다했음에도 불구하고 경기에서 졌다.' },
        { en: 'She decided to buy the dress though it was quite expensive.', ko: '그녀는 꽤 비쌌음에도 불구하고 그 드레스를 사기로 결정했다.' },
      ],
    }
  ),
  word('thousand', '천', 7, 'noun',
    ['백', '만', '억', '십', '단위', '숫자', '합계', '절반', '전체', '무수히'],
    tips({
      etymology: '고대 영어 \'thusund\'에서 유래했으며, \'강력한 백(strong hundred)\'이라는 의미를 담고 있습니다.',
      visual: '지폐 뭉치나 콩 주머니 속에 가득 찬 1,000개의 알갱이를 상상해 보세요.',
      soundAlike: '\'사우전드\' 발음 중 \'사우\'를 \'싸우다\'와 연결해 \'천 명과 싸우다\'라고 기억해 보세요.',
      context: '화폐 단위나 인원수, 연도 등 구체적인 수치를 나타낼 때 가장 흔히 쓰입니다.',
      synonymAntonym: 'kilo와 같은 접두사와 의미가 통하며, 아주 적은 양을 뜻하는 handful과는 반대됩니다.',
    }),
    {
      definition: 'The number equivalent to ten times one hundred.',
      synonyms: ['millenary', 'kilo', 'grand'],
      antonyms: ['zero', 'one', 'handful'],
      wordDistractors: ['thunder', 'thimble', 'thorned'],
      definitionDistractors: [
        'A unit of measurement used for weighing precious metals.',
        'The total number of items remaining after a subtraction.',
        'A fraction representing one part divided into equal portions.',
      ],
      exampleSentences: [
        { en: 'The stadium was filled with over a thousand excited fans.', ko: '경기장은 천 명이 넘는 흥분한 팬들로 가득 찼습니다.' },
        { en: 'This ancient tree has lived for more than a thousand years.', ko: '이 고목은 천 년 넘게 살아왔습니다.' },
      ],
    }
  ),
  word('thread', '실', 9, 'noun',
    ['바늘', '직물', '단추', '가위', '매듭', '옷감', '지퍼', '바느질', '헝겊', '주머니'],
    tips({
      etymology: '고대 영어 \'thrawan(비틀다)\'에서 유래하여, 가느다란 섬유를 꼬아서 만든 끈을 의미합니다.',
      visual: '바늘구멍 사이로 아주 얇고 긴 선이 통과하는 모습을 상상해 보세요.',
      soundAlike: '\'쓰레드\'라고 발음하며, 컴퓨터 CPU의 작업 단위나 인터넷 게시판의 댓글 줄기를 떠올리면 쉽습니다.',
      context: '바느질할 때 쓰는 실제 실뿐만 아니라, 이야기나 논리의 흐름을 뜻하는 비유적 표현으로도 자주 쓰입니다.',
      synonymAntonym: '섬유를 뜻하는 fiber와 유사하며, 굵은 밧줄인 rope와는 굵기 면에서 대조됩니다.',
    }),
    {
      definition: 'A long, thin strand of cotton, nylon, or other fibers used in sewing or weaving.',
      synonyms: ['strand', 'fiber', 'filament'],
      antonyms: ['rope', 'cable', 'cord'],
      wordDistractors: ['tread', 'shred', 'dread'],
      definitionDistractors: [
        'A sharp pointed tool used for piercing holes in fabric.',
        'A large piece of woven cloth used as a covering or blanket.',
        'A mechanical device that holds objects together under tension.',
      ],
      exampleSentences: [
        { en: 'The tailor selected a silk string to match the color of the suit.', ko: '재단사는 정장 색상에 맞추기 위해 실크 실을 선택했습니다.' },
        { en: 'It was difficult to follow the main plot line through the complex narrative.', ko: '복잡한 이야기 속에서 주요 줄거리를 따라가는 것은 어려웠습니다.' },
      ],
    }
  ),
  word('threat', '협박', 4, 'noun',
    ['경고', '위험', '공포', '공격', '침입', '범행', '폭력', '재난', '사고', '피해'],
    tips({
      etymology: '고대 영어 \'threat\'에서 유래했으며 본래 \'군중\'이나 \'압박\'을 의미하다가 해를 끼치겠다는 의사 표시로 발전했습니다.',
      visual: '누군가 주먹을 불끈 쥐고 위협적인 자세를 취하며 상대방을 겁주는 장면을 상상해 보세요.',
      soundAlike: '\'쓰렛\' 발음이 \'쓰레기\'와 비슷하니, 쓰레기를 아무데나 버리면 벌금을 물린다는 경고나 협박을 떠올려보세요.',
      context: '사이버 보안이나 자연재해 상황에서 시스템이나 안전을 해칠 수 있는 잠재적 위험 요소를 가리킬 때 자주 쓰입니다.',
      synonymAntonym: '위험을 뜻하는 menace와 반대로 안전을 보장하는 protection을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'a statement of an intention to inflict pain, injury, damage, or other hostile action on someone in retribution for something done or not done',
      synonyms: ['menace', 'intimidation', 'danger'],
      antonyms: ['protection', 'safety', 'assurance'],
      wordDistractors: ['thread', 'treat', 'thrash'],
      definitionDistractors: [
        'A formal written agreement between two or more parties.',
        'A public announcement made to inform citizens of new rules.',
        'A verbal promise to provide assistance during a difficult time.',
      ],
      exampleSentences: [
        { en: 'The anonymous caller made a serious threat against the company\'s headquarters.', ko: '익명의 발신자가 회사 본사를 상대로 심각한 협박을 했습니다.' },
        { en: 'Rising sea levels pose a constant threat to small island nations.', ko: '해수면 상승은 작은 섬나라들에게 지속적인 위협이 됩니다.' },
      ],
    }
  ),
  word('thrill', '오싹하다', 5, 'verb',
    ['지루하게 하다', '진정시키다', '무시하다', '거절하다', '방해하다', '포기하다', '위로하다', '설명하다', '조사하다', '기다리다'],
    tips({
      etymology: '고대 영어 \'thyrlian(구멍을 뚫다)\'에서 유래하여, 몸을 꿰뚫는 듯한 강렬한 전율을 의미하게 되었습니다.',
      visual: '롤러코스터가 꼭대기에서 아래로 떨어지기 직전, 온몸의 털이 쭈뼛 서는 짜릿한 순간을 상상해 보세요.',
      soundAlike: '\'쓰릴\' 넘치는 영화라는 표현처럼, 심장이 쫄깃해지고 소름이 돋는 상황의 발음과 연결하세요.',
      context: '주로 놀이기구를 타거나 예상치 못한 기쁜 소식을 들었을 때 느끼는 강한 흥분 상태를 표현할 때 쓰입니다.',
      synonymAntonym: '강한 전율을 주는 excite와 반대로, 마음을 차분하게 가라앉히는 calm을 대조하여 기억하세요.',
    }),
    {
      definition: 'To cause someone to experience a sudden feeling of intense excitement, pleasure, or fear.',
      synonyms: ['excite', 'electrify', 'stimulate'],
      antonyms: ['bore', 'depress', 'calm'],
      wordDistractors: ['trill', 'grill', 'frill'],
      definitionDistractors: [
        'To gradually reduce the intensity of a feeling over time.',
        'To carefully organize items in a neat and orderly manner.',
        'To deliver a formal speech in front of an audience.',
      ],
      exampleSentences: [
        { en: 'The sudden announcement of the victory will likely excite and move the entire crowd.', ko: '갑작스러운 승리 발표는 군중 전체를 오싹할 정도로 열광시킬 것입니다.' },
        { en: 'Adventurers often seek activities that provide a physical rush and intense emotion.', ko: '모험가들은 종종 신체적인 전율과 강렬한 감정을 선사하는 활동을 찾습니다.' },
      ],
    }
  ),
  word('throat', '목', 6, 'noun',
    ['어깨', '가슴', '발목', '손목', '허리', '무릎', '팔꿈치', '등', '턱', '뺨'],
    tips({
      etymology: '고대 영어 \'throte\'에서 유래했으며, 음식이 넘어가는 통로라는 의미를 담고 있습니다.',
      visual: '목감기에 걸려 빨갛게 부어오른 목 안쪽 구멍을 상상해 보세요.',
      soundAlike: '\'스로트\' 발음이 \'쓰로(throw)\'와 비슷하니, 음식을 안으로 던져 넣는 통로라고 생각하면 쉽습니다.',
      context: '의학적인 목 부위뿐만 아니라 병의 입구나 좁은 통로를 비유할 때도 쓰입니다.',
      synonymAntonym: 'pharynx는 의학적인 인후를 뜻하며, 외부 전체인 neck과는 구분해서 외워야 합니다.',
    }),
    {
      definition: 'The passage which leads from the back of the mouth of a person or animal to the lungs and stomach.',
      synonyms: ['pharynx', 'gullet', 'esophagus'],
      antonyms: ['nape', 'exterior', 'surface'],
      wordDistractors: ['throb', 'froth', 'cloth'],
      definitionDistractors: [
        'The bony structure that forms the framework of the chest.',
        'The outer layer of skin covering the neck and shoulders.',
        'A tube-like organ responsible for filtering blood in the body.',
      ],
      exampleSentences: [
        { en: 'Drinking warm honey water can help soothe a dry and irritated throat.', ko: '따뜻한 꿀물을 마시는 것은 건조하고 따가운 목을 진정시키는 데 도움이 될 수 있다.' },
        { en: 'The singer felt a sharp pain in her throat after the long concert.', ko: '가수는 긴 콘서트가 끝난 후 목에 날카로운 통증을 느꼈다.' },
      ],
    }
  ),
  word('through', '직통의', 7, 'adjective',
    ['우회하는', '정지된', '복잡한', '간접적인', '막힌', '일시적인', '단절된', '우연한', '수동적인', '불투명한'],
    tips({
      etymology: '고대 영어 \'thurh\'에서 유래하여 한쪽 끝에서 다른 쪽 끝까지 뚫고 지나가는 움직임을 나타냅니다.',
      visual: '기차가 중간 정차역 없이 터널을 일직선으로 통과하여 목적지까지 한 번에 가는 모습을 상상하세요.',
      soundAlike: '\'쓰루\'라고 발음하며, 축구에서 수비수 사이를 한 번에 뚫는 \'스루 패스\'를 떠올리면 쉽습니다.',
      context: '교통수단이나 도로가 중간에 끊기거나 갈아탈 필요 없이 목적지까지 연결될 때 주로 쓰입니다.',
      synonymAntonym: '중간에 멈추지 않는 direct와 유의어이며, 중간에 멈추거나 돌아가는 indirect와 반대됩니다.',
    }),
    {
      definition: 'Moving from one side to the other without stopping or changing to another vehicle or route.',
      synonyms: ['direct', 'nonstop', 'unbroken'],
      antonyms: ['indirect', 'stopping', 'interrupted'],
      wordDistractors: ['thorough', 'though', 'trough'],
      definitionDistractors: [
        'Existing temporarily or lasting for only a brief period.',
        'Positioned at an angle or diagonal to the main direction.',
        'Occurring repeatedly at regular intervals over time.',
      ],
      exampleSentences: [
        { en: 'Passengers can take a through flight from Seoul to New York without any layovers.', ko: '승객들은 경유지 없이 서울에서 뉴욕까지 가는 직항편을 이용할 수 있습니다.' },
        { en: 'The city council decided to build a through road to reduce traffic congestion in the suburbs.', ko: '시의회는 교외의 교통 체증을 줄이기 위해 직통 도로를 건설하기로 결정했습니다.' },
      ],
    }
  ),
  word('throw', '던지다', 4, 'verb',
    ['처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다'],
    tips({
      etymology: '고대 영어 \'thrawan\'에서 유래했으며, 원래는 \'비틀다\'나 \'돌리다\'라는 의미였으나 시간이 흐르며 물체를 강하게 내던지는 동작으로 의미가 확장되었습니다.',
      visual: '투수가 마운드에서 온 힘을 다해 야구공을 포수 미트로 쏘아 올리는 역동적인 모습을 상상해 보세요.',
      soundAlike: '\'쓰로우\' 발음이 \'쓰윽~ 로우(low)하게 던지다\'라고 연상하면 낮게 던지는 동작과 연결하기 쉽습니다.',
      context: '스포츠 경기에서 공을 패스하거나, 화가 나서 물건을 바닥에 내팽개칠 때 주로 사용되는 표현입니다.',
      synonymAntonym: '물건을 공중으로 보내는 toss와 유사하지만, 던지는 힘의 강도는 보통 더 강하며 반대로 받는 것은 catch라고 합니다.',
    }),
    {
      definition: 'To propel something through the air by a rapid movement of the arm and hand.',
      synonyms: ['hurl', 'toss', 'fling'],
      antonyms: ['catch', 'receive', 'keep'],
      wordDistractors: ['throe', 'throne', 'throb'],
      definitionDistractors: [
        'To carefully place an object down on a flat surface.',
        'To pull something toward oneself with steady force.',
        'To rotate an object around a central fixed point.',
      ],
      exampleSentences: [
        { en: 'The quarterback had to release the football quickly before being tackled.', ko: '쿼터백은 태클을 당하기 전에 미식축구 공을 빠르게 던져야 했습니다.' },
        { en: 'Please do not discard your trash on the ground; use the bin instead.', ko: '쓰레기를 바닥에 던지지 말고 쓰레기통을 이용해 주세요.' },
      ],
    }
  ),
  word('thumb', '엄지손가락', 5, 'noun',
    ['검지손가락', '약지손가락', '새끼손가락', '손바닥', '손목', '발가락', '팔꿈치', '어깨', '발뒤꿈치', '손톱'],
    tips({
      etymology: '고대 영어 \'thuma\'에서 유래했으며 \'두껍다\'는 의미를 가진 어근에서 파생되어 손가락 중 가장 두꺼운 부분을 가리킵니다.',
      visual: '택시를 잡거나 최고라고 치켜세울 때 가장 먼저 올라가는 짧고 굵은 손가락을 상상해 보세요.',
      soundAlike: '\'덤(thumb)\'이라고 발음하며, 덤으로 하나 더 붙어 있는 듯한 독특한 위치의 손가락으로 기억하세요.',
      context: '책장을 넘길 때나 스마트폰 화면을 스크롤할 때 가장 많이 사용하는 부위입니다.',
      synonymAntonym: '신체 부위이므로 유의어로 pollex가 있고, 반대 개념으로는 발가락인 toe를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'the short, thick first digit of the human hand, set lower and apart from the other four fingers',
      synonyms: ['pollex', 'digit', 'finger'],
      antonyms: ['toe', 'palm', 'wrist'],
      wordDistractors: ['thump', 'plumb', 'crumb'],
      definitionDistractors: [
        'The longest finger located in the center of the hand.',
        'The joint connecting the hand to the forearm.',
        'The curved part of the palm below the little finger.',
      ],
      exampleSentences: [
        { en: 'The carpenter accidentally hit his left thumb with a heavy hammer.', ko: '목수는 실수로 무거운 망치로 자신의 왼쪽 엄지손가락을 쳤다.' },
        { en: 'Most primates have an opposable thumb that allows them to grasp small objects firmly.', ko: '대부분의 영장류는 작은 물체를 단단히 잡을 수 있게 해주는 마주 보는 엄지손가락을 가지고 있다.' },
      ],
    }
  ),
  word('thus', '이렇게', 6, 'adverb',
    ['반복적으로', '우선', '빠르게', '천천히', '자주', '가끔', '항상', '이미', '곧', '직접'],
    tips({
      etymology: '고대 영어 \'thæs\'에서 유래하여 \'이와 같은 방식으로\'라는 지시적 의미를 담고 있습니다.',
      visual: '화살표가 결론을 가리키며 \'그래서 결국 이렇게 되었다\'라고 설명하는 도표를 상상하세요.',
      soundAlike: '\'더스\' 발음이 \'더 써서(thus)\' 결과가 이렇게 나왔다고 연상해 보세요.',
      context: '격식 있는 문장에서 앞선 원인에 따른 결과를 요약하거나 결론을 낼 때 주로 쓰입니다.',
      synonymAntonym: '결과를 나타내는 therefore와 유사하며, 원인을 나타내는 because와는 대조적입니다.',
    }),
    {
      definition: 'As a result or consequence of this; in the manner now indicated.',
      synonyms: ['consequently', 'therefore', 'hence'],
      antonyms: ['nevertheless', 'otherwise', 'regardless'],
      wordDistractors: ['this', 'thud', 'thrust'],
      definitionDistractors: [
        'In a way that contradicts the previous statement entirely.',
        'At a point in time before the events being described.',
        'Without any connection to the matter being discussed.',
      ],
      exampleSentences: [
        { en: 'The company reduced its expenses and was thus able to increase its profits.', ko: '그 회사는 비용을 절감했고, 이와 같이 이익을 늘릴 수 있었습니다.' },
        { en: 'The test results were positive, thus proving the theory was correct.', ko: '테스트 결과가 긍정적이었으며, 따라서 그 이론이 옳았음을 증명했습니다.' },
      ],
    }
  ),
  word('tick', '시계소리', 3, 'noun',
    ['바늘', '태엽', '알람', '진동', '소음', '정적', '속도', '리듬', '박자', '초침'],
    tips({
      etymology: '시계가 돌아갈 때 나는 짧고 가벼운 소리를 흉내 낸 의성어에서 유래했습니다.',
      visual: '조용한 방안에서 벽시계의 바늘이 한 칸씩 움직이며 소리를 내는 장면을 상상하세요.',
      soundAlike: '시계가 \'틱, 틱\' 하고 일정하게 소리 내는 발음과 매우 유사합니다.',
      context: '주로 아주 조용한 환경에서 시간의 흐름을 강조할 때 자주 사용되는 표현입니다.',
      synonymAntonym: '일정한 소리를 뜻하는 click과 비슷하지만, 침묵을 뜻하는 silence와는 반대됩니다.',
    }),
    {
      definition: 'A short, light, rhythmic sound made by a clock or watch as it functions.',
      synonyms: ['click', 'beat', 'tapping'],
      antonyms: ['silence', 'quiet', 'stillness'],
      wordDistractors: ['trick', 'thick', 'stick'],
      definitionDistractors: [
        'A loud prolonged ringing sound produced by a bell.',
        'A deep vibrating hum coming from an engine or motor.',
        'A sharp cracking noise made by breaking wood.',
      ],
      exampleSentences: [
        { en: 'The constant rhythmic sound of the grandfather clock filled the empty hallway.', ko: '괘종시계의 끊임없는 규칙적인 소리가 빈 복도를 가득 채웠다.' },
        { en: 'Every single movement of the second hand produced a sharp noise in the silent room.', ko: '조용한 방 안에서 초침의 모든 움직임이 날카로운 소리를 만들어냈다.' },
      ],
    }
  ),
  word('tide', '조수', 7, 'noun',
    ['파도', '해류', '폭풍', '안개', '수평선', '모래사장', '항구', '심해', '산호초', '등대'],
    tips({
      etymology: '시간을 뜻하는 고대 영어 \'tīd\'에서 유래했으며, 정해진 시간에 일어나는 바닷물의 흐름을 의미하게 되었습니다.',
      visual: '달의 인력에 의해 바닷물이 해변 끝까지 차올랐다가 다시 멀리 빠져나가는 역동적인 장면을 상상해 보세요.',
      soundAlike: '세탁 세제 브랜드 \'타이드(Tide)\'를 떠올리며, 옷의 때를 바닷물처럼 시원하게 씻어내는 이미지를 연결하세요.',
      context: '주로 해안가에서 낚시를 하거나 수영을 할 때 물의 높낮이가 변하는 상황에서 자주 쓰입니다.',
      synonymAntonym: '흐름을 뜻하는 current와 유사하며, 정지된 상태를 뜻하는 stillness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The periodic rise and fall of the sea level caused by the gravitational forces of the moon and the sun.',
      synonyms: ['current', 'flow', 'stream'],
      antonyms: ['stillness', 'stagnation', 'motionlessness'],
      wordDistractors: ['tied', 'tine', 'time'],
      definitionDistractors: [
        'A strong wind that blows steadily from a single direction.',
        'The visible layer of foam or spray on the ocean surface.',
        'A deep underwater channel carved by volcanic activity.',
      ],
      exampleSentences: [
        { en: 'The local fishermen always check the schedule of the rising water to ensure their safety.', ko: '현지 어부들은 안전을 보장하기 위해 항상 밀물 시간을 확인합니다.' },
        { en: 'Strong currents can be dangerous when the ocean level changes rapidly during the day.', ko: '하루 동안 해수면이 급격히 변할 때 강한 조류는 위험할 수 있습니다.' },
      ],
    }
  ),
  word('tidy', '말쑥한', 4, 'adjective',
    ['지저분한', '복잡한', '어수선한', '불규칙한', '거대한', '희미한', '날카로운', '부드러운', '단단한', '유연한'],
    tips({
      etymology: '중세 영어 \'tidi\'에서 유래했으며, 원래 \'적절한 시기에 일어나는\'이라는 뜻에서 \'정돈된\'이라는 의미로 발전했습니다.',
      visual: '책상 위의 연필과 공책이 일렬로 나란히 놓여 있고 먼지 하나 없는 깨끗한 상태를 상상해 보세요.',
      soundAlike: '발음이 \'타이디\'이므로, 넥타이(tie)를 매고 단정하게 차려입은 신사의 모습을 연상하면 쉽습니다.',
      context: '주로 방, 책상, 외모 등이 깔끔하게 정리정돈된 상태를 묘사할 때 자주 쓰이는 형용사입니다.',
      synonymAntonym: '깔끔한 상태를 뜻하는 neat와 유의어이며, 엉망진창인 상태를 뜻하는 messy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'arranged in good order and kept clean or neat',
      synonyms: ['neat', 'orderly', 'organized'],
      antonyms: ['messy', 'cluttered', 'disorganized'],
      wordDistractors: ['tide', 'ditty', 'biddy'],
      definitionDistractors: [
        'Decorated with colorful patterns or elaborate designs.',
        'Made from natural materials that are environmentally friendly.',
        'Having a bright or shiny appearance that catches the eye.',
      ],
      exampleSentences: [
        { en: 'The children were instructed to keep their play area neat and tidy after finishing their games.', ko: '아이들은 게임을 마친 후 놀이 공간을 말쑥하고 정돈된 상태로 유지하라는 지시를 받았습니다.' },
        { en: 'A tidy workspace can significantly improve your focus and productivity during long study sessions.', ko: '말쑥한 작업 공간은 긴 학습 시간 동안 집중력과 생산성을 크게 향상시킬 수 있습니다.' },
      ],
    }
  ),
  word('tie', '매다', 5, 'verb',
    ['풀다', '끊다', '떼다', '벗기다', '늘이다', '분리하다', '해체하다', '놓다', '떨어뜨리다', '열다'],
    tips({
      etymology: '고대 영어 \'teag\'에서 유래하여 밧줄이나 끈으로 묶는 행위를 의미합니다.',
      visual: '목에 매는 넥타이나 신발끈을 꽉 조여 매는 손동작을 상상해 보세요.',
      soundAlike: '태국(Thai)의 발음과 비슷하며, 태국 여행용 짐을 \'매다\'라고 연상해 보세요.',
      context: '넥타이를 매거나 신발끈을 묶거나, 매듭을 짓는 동작에 주로 쓰입니다.',
      synonymAntonym: '연결하는 knot, fasten과 유사하며, 분리하는 untie와는 반대됩니다.',
    }),
    {
      definition: 'to fasten or attach something with a string, rope, or similar cord by forming a knot or bow',
      synonyms: ['fasten', 'knot', 'bind'],
      antonyms: ['untie', 'unfasten', 'loosen'],
      wordDistractors: ['tile', 'tire', 'dye'],
      definitionDistractors: [
        'To cut something into two equal pieces using a blade.',
        'To stretch an elastic material until it reaches its limit.',
        'To wrap a protective layer around a fragile object.',
      ],
      exampleSentences: [
        { en: 'She helped the little boy tie his shoelaces before they went outside.', ko: '그녀는 밖에 나가기 전에 어린 소년이 신발끈을 매는 것을 도와주었다.' },
        { en: 'He tied a ribbon around the gift box to make it look more festive.', ko: '그는 선물 상자를 더 화려하게 보이게 하려고 리본을 매었다.' },
      ],
    }
  ),
  word('tiger', '호랑이', 1, 'noun',
    ['사자', '표범', '곰', '늑대', '여우', '코끼리', '기린', '얼룩말', '하마', '치타'],
    tips({
      etymology: '고대 그리스어 \'tigris\'에서 유래했으며, 이는 \'화살\'처럼 빠르다는 의미를 담고 있습니다.',
      visual: '노란색 바탕에 검은색 줄무늬가 선명한 거대한 고양잇과 동물의 용맹한 모습을 상상하세요.',
      soundAlike: '\'타이거\' 발음이 \'타이(넥타이)\'를 \'거(는)\' 용맹한 짐승처럼 들린다고 연상해 보세요.',
      context: '주로 아시아의 밀림이나 정글에 서식하며 먹이사슬의 최정점에 있는 포식자로 묘사됩니다.',
      synonymAntonym: '고양잇과 대형 동물을 뜻하는 big cat과 유사하며, 먹잇감이 되는 prey와 반대 개념입니다.',
    }),
    {
      definition: 'A large carnivorous feline mammal of Asia, having a tawny coat with black transverse stripes.',
      synonyms: ['big cat', 'feline', 'predator'],
      antonyms: ['prey', 'herbivore', 'quarry'],
      wordDistractors: ['trigger', 'liger', 'timber'],
      definitionDistractors: [
        'A large aquatic mammal found in rivers and lakes of Africa.',
        'A swift four-legged animal known for its spotted coat pattern.',
        'A nocturnal bird of prey with excellent night vision.',
      ],
      exampleSentences: [
        { en: 'The majestic predator prowled silently through the tall grass of the jungle.', ko: '그 위엄 있는 포식자는 정글의 긴 풀숲 사이를 소리 없이 살금살금 기어갔다.' },
        { en: 'Conservationists are working hard to protect the endangered population in their natural habitat.', ko: '환경 보호 활동가들은 자연 서식지에 있는 멸종 위기 개체군을 보호하기 위해 열심히 노력하고 있다.' },
      ],
    }
  ),
  word('tight', '단단한', 6, 'adjective',
    ['느슨한', '헐거운', '부드러운', '유연한', '넓은', '광범위한', '희박한', '흐릿한', '약한', '불안정한'],
    tips({
      etymology: '고대 노르웨이어 \'thēttr\'에서 유래하여 \'밀도가 높은\' 혹은 \'물이 새지 않는\'이라는 의미에서 시작되었습니다.',
      visual: '작은 상자 안에 물건을 가득 채워 뚜껑이 겨우 닫히는 팽팽한 모습을 상상해 보세요.',
      soundAlike: '타이트(tight)한 옷을 입으면 몸이 \'타이트\'하게 조여오는 느낌을 연상하세요.',
      context: '옷이 몸에 딱 붙거나, 나사가 꽉 조여져 있을 때, 혹은 일정이 여유 없을 때 주로 사용합니다.',
      synonymAntonym: 'firm과 secure는 단단히 고정된 상태를, loose는 헐거워진 반대 상태를 나타냅니다.',
    }),
    {
      definition: 'fixed, fastened, or drawn together firmly so as to be difficult to move or undo',
      synonyms: ['firm', 'secure', 'taut'],
      antonyms: ['loose', 'slack', 'relaxed'],
      wordDistractors: ['tilt', 'light', 'sight'],
      definitionDistractors: [
        'Having a rough or uneven texture across the surface.',
        'Easily broken apart or crumbled when touched lightly.',
        'Positioned at a steep angle relative to the ground.',
      ],
      exampleSentences: [
        { en: 'Make sure the knot is firm and secure so it does not come undone.', ko: '매듭이 풀리지 않도록 단단하고 꽉 조여졌는지 확인하세요.' },
        { en: 'The deadline is very close, so we have a very demanding schedule this week.', ko: '마감 기한이 임박해서 이번 주 일정은 매우 빡빡합니다.' },
      ],
    }
  ),
  word('till', '~까지', 7, 'preposition',
    ['~동안', '~이후', '~전에', '~사이에', '~무렵', '~중에', '~이래', '~이내', '~즈음', '~경에'],
    tips({
      etymology: '고대 노르드어 \'til\'에서 유래하여 목표나 지점에 도달함을 의미합니다.',
      visual: '시계 바늘이 특정 숫자에 닿을 때까지 멈춰서 기다리는 모습을 상상하세요.',
      soundAlike: '계산대(till)와 발음이 같으므로, 퇴근 시간까지 계산대 앞에 서 있는 모습을 연상하세요.',
      context: '구어체에서 until 대신 매우 빈번하게 사용되며 문장 끝이나 중간에 시간의 한계를 나타낼 때 쓰입니다.',
      synonymAntonym: 'until과 같은 의미로 쓰이지만, 시작을 나타내는 from과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Up to the point in time or the event mentioned.',
      synonyms: ['until', 'up to', 'pending'],
      antonyms: ['from', 'since', 'after'],
      wordDistractors: ['tile', 'tilt', 'fill'],
      definitionDistractors: [
        'During the exact moment that something occurs.',
        'Starting from a particular point and continuing forward.',
        'At intervals spread evenly across a span of time.',
      ],
      exampleSentences: [
        { en: 'The local grocery store remains open till ten o\'clock at night.', ko: '그 동네 식료품점은 밤 10시까지 영업을 합니다.' },
        { en: 'Please hold the line till the operator connects your call.', ko: '교환원이 전화를 연결해 줄 때까지 끊지 말고 기다려 주세요.' },
      ],
    }
  ),
  word('timber', '재목', 8, 'noun',
    ['금속', '플라스틱', '콘크리트', '벽돌', '유리', '섬유', '가죽', '고무', '석재', '진흙'],
    tips({
      etymology: '고대 영어 \'timbrian\'에서 유래했으며 본래 \'건물을 짓다\'라는 의미를 담고 있어 건축용 나무를 뜻하게 되었습니다.',
      visual: '숲에서 거대한 나무가 쓰러질 때 나무꾼들이 \'Timber!\'라고 외치며 주변 사람들에게 알리는 장면을 상상해 보세요.',
      soundAlike: '\'팀버\' 발음이 \'팀(Team)이 버(버)티는 기둥\'처럼 들린다고 생각하면 건물의 뼈대가 되는 나무 자재를 떠올리기 쉽습니다.',
      context: '가구 제작이나 주택 건설 현장에서 가공되지 않은 통나무나 목재 자재를 가리킬 때 주로 사용됩니다.',
      synonymAntonym: '건축용 목재인 lumber와 유사하며, 인공 재료인 steel이나 concrete와는 반대되는 자연 소재입니다.',
    }),
    {
      definition: 'Wood that is prepared for use in building and carpentry.',
      synonyms: ['lumber', 'wood', 'plank'],
      antonyms: ['steel', 'concrete', 'plastic'],
      wordDistractors: ['timbre', 'tinder', 'limber'],
      definitionDistractors: [
        'A type of mineral extracted from underground quarries.',
        'Dried leaves and grass used as fuel for starting fires.',
        'A synthetic building material made from chemical compounds.',
      ],
      exampleSentences: [
        { en: 'The old barn was constructed entirely from heavy oak timber.', ko: '그 오래된 헛간은 전부 단단한 참나무 재목으로 지어졌습니다.' },
        { en: 'Local companies are permitted to harvest timber from this section of the forest.', ko: '지역 회사들은 숲의 이 구역에서 목재를 채취하는 것을 허가받았습니다.' },
      ],
    }
  ),
  word('time', '때', 2, 'noun',
    ['공간', '순간', '기간', '세기', '시대', '날짜', '계절', '시각', '기한', '주기'],
    tips({
      etymology: '고대 영어 \'tima\'에서 유래했으며, 이는 \'나누다\'라는 의미의 어근에서 파생되어 정해진 기간이나 순간을 뜻하게 되었습니다.',
      visual: '시계 바늘이 째깍거리며 특정 숫자를 가리키는 순간이나 달력의 한 칸을 떠올려 보세요.',
      soundAlike: '\'타임\'은 한국어에서도 \'휴식 시간\'이나 \'골든 타임\'처럼 외래어로 자주 쓰여 익숙한 발음입니다.',
      context: '약속을 잡거나 과거의 특정 순간을 회상할 때 가장 기본적으로 사용되는 단어입니다.',
      synonymAntonym: '특정한 순간을 뜻하는 moment와 유사하며, 영원함을 뜻하는 eternity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A continuous, measurable quantity in which events occur in a sequence from the past through the present to the future.',
      synonyms: ['period', 'moment', 'duration'],
      antonyms: ['eternity', 'timelessness', 'infinity'],
      wordDistractors: ['lime', 'dime', 'mime'],
      definitionDistractors: [
        'The physical distance between two fixed geographic points.',
        'A unit of energy used in scientific calculations.',
        'The rate at which an object moves through empty space.',
      ],
      exampleSentences: [
        { en: 'The best period to visit the park is during the spring.', ko: '그 공원을 방문하기 가장 좋은 때는 봄입니다.' },
        { en: 'Every person needs some private space to relax at some point.', ko: '모든 사람은 어느 때고 휴식을 취할 개인적인 공간이 필요합니다.' },
      ],
    }
  ),
  word('tin', '주석', 4, 'noun',
    ['구리', '철', '알루미늄', '금', '은', '납', '아연', '니켈', '마그네슘', '티타늄'],
    tips({
      etymology: '게르만어에서 유래한 아주 오래된 금속 이름으로, 청동기 시대부터 사용된 금속입니다.',
      visual: '반짝이는 은백색의 얇은 캔 뚜껑이나 통조림 통의 표면을 상상해 보세요.',
      soundAlike: '\'틴\' 소리가 나는 \'틴트\' 용기나 얇은 금속판이 부딪힐 때 나는 \'팅\' 소리와 연결하세요.',
      context: '주로 합금의 재료나 음식을 보관하는 통조림 용기를 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '금속 원소인 stannum과 같으며, 무거운 중금속인 lead와 대비되는 가벼운 금속입니다.',
    }),
    {
      definition: 'A silvery-white metal element that is often used to coat other metals to prevent corrosion or to make cans for food storage.',
      synonyms: ['stannum', 'canister', 'container'],
      antonyms: ['plastic', 'wood', 'glass'],
      wordDistractors: ['tint', 'shin', 'pin'],
      definitionDistractors: [
        'A hard black mineral used as a primary source of fuel.',
        'A flexible rubber compound used in manufacturing tires.',
        'A transparent crystalline substance formed from molten sand.',
      ],
      exampleSentences: [
        { en: 'Ancient civilizations mixed copper with this metal to create bronze tools.', ko: '고대 문명들은 청동 도구를 만들기 위해 구리와 이 금속을 섞었습니다.' },
        { en: 'The roof was covered with corrugated sheets of this silvery material to reflect heat.', ko: '지붕은 열을 반사하기 위해 이 은색 재질의 물결 모양 판으로 덮여 있었습니다.' },
      ],
    }
  ),
  word('tiny', '자그마한', 5, 'adjective',
    ['거대한', '광활한', '막대한', '웅장한', '평범한', '중요한', '복잡한', '신속한', '강력한', '희귀한'],
    tips({
      etymology: '중세 영어 \'tine\'에서 유래했으며, 아주 작다는 뜻을 강조하기 위해 \'y\'가 붙어 형성되었습니다.',
      visual: '거대한 코끼리 옆에 서 있는 아주 작은 생쥐나 개미의 크기를 상상해 보세요.',
      soundAlike: '\'타이니\' 발음이 \'타이(Tie)\'를 아주 작게 묶는 소리처럼 들린다고 연상해 보세요.',
      context: '주로 육안으로 겨우 보일 정도의 크기나 매우 미세한 양을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'small보다 훨씬 작은 느낌을 주며, 반대말로는 huge나 massive처럼 거대한 단어들이 있습니다.',
    }),
    {
      definition: 'Extremely small in size, amount, or degree.',
      synonyms: ['minuscule', 'microscopic', 'miniature'],
      antonyms: ['enormous', 'gigantic', 'immense'],
      wordDistractors: ['tidy', 'tinny', 'shiny'],
      definitionDistractors: [
        'Having a soft and delicate texture when touched.',
        'Being lightweight and easy to carry around.',
        'Appearing faint or barely visible in dim lighting.',
      ],
      exampleSentences: [
        { en: 'The newborn kitten had such tiny paws that they barely made a sound on the floor.', ko: '갓 태어난 새끼 고양이는 발바닥이 너무 자그마해서 바닥에서 거의 소리가 나지 않았다.' },
        { en: 'Scientists discovered a tiny crack in the glass that was invisible to the naked eye.', ko: '과학자들은 육안으로는 보이지 않는 유리의 아주 작은 균열을 발견했다.' },
      ],
    }
  ),
  word('tip', '끝', 6, 'noun',
    ['가장자리', '모서리', '표면', '꼭대기', '바닥', '측면', '중심', '뿌리', '밑바닥', '가운데'],
    tips({
      etymology: '중세 영어 \'tippe\'에서 유래하여 어떤 물체의 뾰족하거나 좁은 끝부분을 가리킵니다.',
      visual: '연필의 뾰족한 심 끝이나 빙산의 일각처럼 튀어나온 윗부분을 상상해 보세요.',
      soundAlike: '한국어 \'팁\'은 조언이나 봉사료로 쓰이지만, 발음할 때 손가락 \'끝\'을 톡 치는 느낌을 연상하세요.',
      context: '주로 신체 부위나 도구의 가장 끝자락을 묘사할 때 자주 사용됩니다.',
      synonymAntonym: 'peak나 point와 비슷하지만, base나 bottom과는 정반대의 위치를 나타냅니다.',
    }),
    {
      definition: 'The pointed or rounded end or extremity of something thin or tapering.',
      synonyms: ['point', 'peak', 'summit'],
      antonyms: ['base', 'bottom', 'center'],
      wordDistractors: ['trip', 'dip', 'sip'],
      definitionDistractors: [
        'The flat central surface area of a solid object.',
        'A deep indentation or groove carved into a material.',
        'The widest part of an object measured across its middle.',
      ],
      exampleSentences: [
        { en: 'The sharp point at the very end of the pencil broke off while I was writing.', ko: '글을 쓰는 동안 연필의 아주 맨 끝부분인 날카로운 점이 부러졌다.' },
        { en: 'She carefully balanced herself on the extreme edges of her toes to reach the top shelf.', ko: '그녀는 높은 선반에 닿기 위해 발가락 끝으로 조심스럽게 균형을 잡았다.' },
      ],
    }
  ),
  word('tire', '지치게 하다', 7, 'verb',
    ['처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다'],
    tips({
      etymology: '라틴어 \'terere(문지르다, 닳게 하다)\'에서 유래하여 에너지가 소진되는 느낌을 담고 있습니다.',
      visual: '하루 종일 달린 자동차 바퀴(tire)가 닳아 없어지듯 기운이 쏙 빠진 모습을 상상하세요.',
      soundAlike: '발음이 \'타이어\'와 같습니다. 펑크 난 타이어처럼 축 처진 상태를 연상하면 쉽습니다.',
      context: '주로 신체적 피로뿐만 아니라 반복되는 일에 질렸을 때도 자주 쓰입니다.',
      synonymAntonym: 'exhaust와 유사하지만, rest를 취하면 다시 회복될 수 있는 상태를 말합니다.',
    }),
    {
      definition: 'to become weary or to feel a need for rest after physical or mental effort',
      synonyms: ['exhaust', 'fatigue', 'weary'],
      antonyms: ['energize', 'invigorate', 'refresh'],
      wordDistractors: ['tile', 'hire', 'fire'],
      definitionDistractors: [
        'To gradually increase the speed or intensity of an activity.',
        'To provide nourishment or sustenance to the body.',
        'To carefully repair or mend a broken object.',
      ],
      exampleSentences: [
        { en: 'Long walks across the steep hills often exhaust my physical strength.', ko: '가파른 언덕을 가로지르는 긴 산책은 종종 내 체력을 소진시킨다.' },
        { en: 'She never feels weary of helping people in need within her community.', ko: '그녀는 지역 사회의 어려운 사람들을 돕는 일에 결코 지치지 않는다.' },
      ],
    }
  ),
  word('tissue', '조직', 4, 'noun',
    ['세포', '기관', '골격', '혈액', '신경', '근육', '피부', '관절', '장기', '연골'],
    tips({
      etymology: '라틴어 \'texere(짜다)\'에서 유래하여 실이나 세포가 촘촘히 짜인 상태를 의미합니다.',
      visual: '현미경으로 들여다본 세포들이 그물처럼 촘촘하게 얽혀 있는 생물학적 구조를 상상해 보세요.',
      soundAlike: '코를 풀 때 쓰는 \'티슈\'와 발음이 같지만, 생물학에서는 몸을 구성하는 얇은 층을 뜻합니다.',
      context: '의학이나 생물학 지문에서 근육, 신경, 결합 조직 등을 설명할 때 주로 등장합니다.',
      synonymAntonym: '비슷한 구조를 뜻하는 fabric과 대조되는 개념인 단일 세포 cell을 함께 기억하세요.',
    }),
    {
      definition: 'a group of similar cells that work together to perform a specific function in a living organism',
      synonyms: ['structure', 'fabric', 'matter'],
      antonyms: ['void', 'nothingness', 'individual cell'],
      wordDistractors: ['fissure', 'missile', 'thistle'],
      definitionDistractors: [
        'A single microscopic organism that can reproduce independently.',
        'A liquid substance that circulates through the bloodstream.',
        'A hard protective shell covering the exterior of an organ.',
      ],
      exampleSentences: [
        { en: 'The surgeon examined the damaged nerve to determine the extent of the injury.', ko: '외과 의사는 부상 정도를 파악하기 위해 손상된 신경 조직을 검사했습니다.' },
        { en: 'Scarring occurs when fibrous material replaces normal skin after a deep cut.', ko: '깊은 상처 후에 섬유성 조직이 정상 피부를 대체할 때 흉터가 생깁니다.' },
      ],
    }
  ),
  word('title', '표제', 5, 'noun',
    ['목차', '서문', '부제', '헤드라인', '초록', '본문', '색인', '각주', '개요', '서론'],
    tips({
      etymology: '라틴어 titulus에서 유래하여 명예로운 명칭이나 비문의 글귀를 의미하게 되었습니다.',
      visual: '책의 맨 앞 표지에 굵고 큰 글씨로 적혀 있는 책 이름을 상상해 보세요.',
      soundAlike: '발음이 \'타이틀\'로 익숙하며, 운동 경기에서 챔피언 자리를 뜻할 때도 쓰입니다.',
      context: '신문 기사의 헤드라인이나 영화의 제목, 혹은 사람의 직함 등을 가리킬 때 주로 사용됩니다.',
      synonymAntonym: 'heading과 유사하며, 본문을 뜻하는 body나 content와는 대조적인 위치에 있습니다.',
    }),
    {
      definition: 'The name of a book, composition, or other artistic work, or a name that describes someone\'s position or job.',
      synonyms: ['heading', 'designation', 'appellation'],
      antonyms: ['content', 'substance', 'body'],
      wordDistractors: ['tattle', 'tittle', 'riddle'],
      definitionDistractors: [
        'A brief summary written at the end of a document.',
        'The main body of text in a published article or essay.',
        'A footnote or annotation placed at the bottom of a page.',
      ],
      exampleSentences: [
        { en: 'The author spent several weeks deciding on the perfect name for her new novel.', ko: '작가는 그녀의 새 소설을 위한 완벽한 표제를 결정하는 데 몇 주를 보냈다.' },
        { en: 'He officially received the formal rank of Senior Vice President after the promotion.', ko: '그는 승진 후 공식적으로 수석 부사장이라는 직함을 받았다.' },
      ],
    }
  ),
  word('to', '~로', 1, 'preposition',
    ['~에서', '~위에', '~아래', '~사이', '~옆에', '~뒤에', '~앞에', '~건너', '~너머', '~속에'],
    tips({
      etymology: '고대 영어 \'tō\'에서 유래하여 방향이나 도달점을 나타내는 전치사로 굳어졌습니다.',
      visual: '화살표가 특정 지점을 향해 날아가 과녁에 꽂히는 이미지를 상상해 보세요.',
      soundAlike: '숫자 2(two)와 발음이 같아 두 지점을 연결하는 선을 떠올리면 쉽습니다.',
      context: '어떤 장소로 이동하거나 누군가에게 물건을 건넬 때 가장 빈번하게 사용됩니다.',
      synonymAntonym: '방향을 나타내는 toward와 비슷하지만, from과는 반대되는 개념입니다.',
    }),
    {
      definition: 'expressing motion in the direction of a particular location, person, or thing',
      synonyms: ['toward', 'unto', 'into'],
      antonyms: ['from', 'away', 'off'],
      wordDistractors: ['too', 'two', 'do'],
      definitionDistractors: [
        'Indicating the origin or starting point of a journey.',
        'Describing the position directly above another object.',
        'Expressing a state of being located inside a container.',
      ],
      exampleSentences: [
        { en: 'The students walked slowly to the library after their lunch break.', ko: '학생들은 점심시간이 끝난 후 도서관으로 천천히 걸어갔습니다.' },
        { en: 'Please send the completed application form to the manager by Friday.', ko: '작성된 신청서를 금요일까지 매니저에게 보내주세요.' },
      ],
    }
  ),
  word('tobacco', '담배', 6, 'noun',
    ['커피', '차', '코코아', '인삼', '허브', '술', '카페인', '니코틴', '아편', '향신료'],
    tips({
      etymology: '스페인어 tabaco에서 유래되었으며, 원래는 원주민들이 잎을 말아 피우던 도구를 지칭했습니다.',
      visual: '말린 갈색 잎사귀가 가득 담긴 파이프나 종이에 말린 궐련의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'토바코\'와 비슷하므로, \'토(토할 것 같은) 바코(박하향)\'처럼 독한 냄새를 연상해 보세요.',
      context: '농업, 건강 문제, 세금 정책 또는 중독과 관련된 뉴스에서 자주 등장하는 명사입니다.',
      synonymAntonym: '식물 자체를 뜻하는 leaf와 유사하며, 건강에 무해한 물질과는 반대되는 개념으로 쓰입니다.',
    }),
    {
      definition: 'The dried leaves of a specific plant that are prepared for smoking, chewing, or sniffing.',
      synonyms: ['leaf', 'snuff', 'shag'],
      antonyms: ['antidote', 'remedy', 'purifier'],
      wordDistractors: ['tomato', 'topaz', 'torment'],
      definitionDistractors: [
        'A sweet-smelling herb commonly used in cooking and medicine.',
        'A fermented beverage made from crushed grapes or grains.',
        'A type of grain harvested from tall cereal plants.',
      ],
      exampleSentences: [
        { en: 'The government increased the tax on all products containing this dried leaf to discourage smoking.', ko: '정부는 흡연을 억제하기 위해 이 말린 잎을 포함한 모든 제품에 대한 세금을 인상했습니다.' },
        { en: 'Farmers in the southern region have cultivated these plants for generations as their primary cash crop.', ko: '남부 지역의 농부들은 수 세대 동안 이 식물들을 주요 현금 작물로 재배해 왔습니다.' },
      ],
    }
  ),
  word('today', '오늘', 1, 'noun',
    ['내일', '어제', '모레', '그저께', '지난주', '다음달', '작년', '미래', '과거', '매일'],
    tips({
      etymology: '고대 영어 \'to dæge\'에서 유래했으며, \'to\'는 \'~에\', \'dæg\'는 \'날\'을 의미하여 \'이 날에\'라는 뜻이 되었습니다.',
      visual: '달력에서 오늘 날짜에 빨간색 동그라미가 쳐져 있는 모습을 상상해 보세요.',
      soundAlike: '\'투데이\'라고 발음하며, 두(2) 번 생각할 필요 없이 \'오늘\' 바로 해야 할 일을 떠올려 보세요.',
      context: '일상 대화에서 현재의 날짜나 아주 가까운 현재의 시점을 언급할 때 가장 빈번하게 사용됩니다.',
      synonymAntonym: '현재를 뜻하는 nowadays와 비슷하지만, yesterday(어제)나 tomorrow(내일)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'On or during the present day, or the period of time that is happening now.',
      synonyms: ['nowadays', 'currently', 'presently'],
      antonyms: ['yesterday', 'tomorrow', 'formerly'],
      wordDistractors: ['toady', 'toddy', 'toupee'],
      definitionDistractors: [
        'A day in the past that holds special historical significance.',
        'The final day of a week or designated work period.',
        'An unspecified point in the distant future.',
      ],
      exampleSentences: [
        { en: 'The weather is exceptionally warm and sunny for this time of year.', ko: '일 년 중 이맘때 날씨치고는 오늘은 유난히 따뜻하고 화창합니다.' },
        { en: 'Many people prefer working from home in the modern digital era.', ko: '현대의 디지털 시대에는 많은 사람들이 재택근무를 선호합니다.' },
      ],
    }
  ),
  word('toe', '발가락', 7, 'noun',
    ['손가락', '발목', '무릎', '팔꿈치', '어깨', '손목', '허벅지', '종아리', '발바닥', '뒤꿈치'],
    tips({
      etymology: '고대 영어 \'ta\'에서 유래되었으며, 발의 끝부분을 가리키는 아주 오래된 신체 명칭입니다.',
      visual: '양말 끝에 구멍이 나서 쏙 튀어나온 엄지발가락의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'토\'와 비슷하므로, 토끼가 깡충깡충 발가락으로 뛰는 모습을 연상해 보세요.',
      context: '신발 사이즈를 잴 때나 발을 다쳤을 때 가장 자주 언급되는 신체 부위입니다.',
      synonymAntonym: 'digit은 손가락과 발가락을 모두 포함하는 포괄적인 단어이며, heel은 발의 반대쪽 끝인 뒤꿈치를 뜻합니다.',
    }),
    {
      definition: 'One of the five separate parts at the end of the human foot.',
      synonyms: ['digit', 'extremity', 'phalange'],
      antonyms: ['heel', 'sole', 'instep'],
      wordDistractors: ['tow', 'foe', 'doe'],
      definitionDistractors: [
        'The rounded bone forming the ankle joint of the foot.',
        'The arch-shaped underside of the foot between heel and ball.',
        'A thick protective pad covering the bottom of the foot.',
      ],
      exampleSentences: [
        { en: 'The athlete suffered a minor injury to his big toe during the marathon.', ko: '그 운동선수는 마라톤 도중 엄지발가락에 가벼운 부상을 입었습니다.' },
        { en: 'Please wiggle your toes to make sure the circulation is returning to your feet.', ko: '발에 혈액 순환이 돌아오고 있는지 확인하기 위해 발가락을 까딱여 보세요.' },
      ],
    }
  ),
  word('together', '같이', 2, 'adverb',
    ['혼자', '따로', '각자', '멀리', '반대로', '따로따로', '홀로', '개별적으로', '고립되어', '단독으로'],
    tips({
      etymology: '고대 영어 \'togædere\'에서 유래했으며, \'to\'와 \'gather(모으다)\'가 합쳐져 \'한곳에 모인\' 상태를 뜻합니다.',
      visual: '퍼즐 조각들이 하나로 합쳐져 완벽한 그림을 완성하는 모습을 상상해 보세요.',
      soundAlike: '\'투게더\' 아이스크림을 떠올려 보세요. 온 가족이 \'함께\' 나눠 먹는 아이스크림입니다.',
      context: '협동 작업이나 단체 여행처럼 여러 사람이 한 목표를 위해 움직일 때 자주 쓰입니다.',
      synonymAntonym: 'jointly와 함께 외우고, 혼자를 뜻하는 alone과 반대 개념으로 기억하세요.',
    }),
    {
      definition: 'in or into a single group, mass, or place with another person or thing',
      synonyms: ['jointly', 'collectively', 'combined'],
      antonyms: ['separately', 'individually', 'alone'],
      wordDistractors: ['toddler', 'tether', 'gather'],
      definitionDistractors: [
        'In a sequential order, one item following the next.',
        'At a distance that is far removed from other things.',
        'In a competitive manner against other participants.',
      ],
      exampleSentences: [
        { en: 'The two companies decided to work on the new project in partnership.', ko: '두 회사는 새로운 프로젝트를 위해 함께 협력하기로 결정했습니다.' },
        { en: 'Friends gathered at the park to enjoy a picnic under the sun.', ko: '친구들은 햇살 아래서 소풍을 즐기기 위해 공원에 함께 모였습니다.' },
      ],
    }
  ),
  word('toilet', '화장실', 4, 'noun',
    ['욕실', '부엌', '거실', '침실', '복도', '발코니', '다락방', '지하실', '세탁실', '주방'],
    tips({
      etymology: '프랑스어 \'toilette\'에서 유래했으며, 원래는 화장대 위에 덮는 천을 의미하다가 몸단장을 하는 방, 즉 화장실로 의미가 확장되었습니다.',
      visual: '공공장소에서 흔히 볼 수 있는 남녀 구분 표시가 그려진 문이나 하얀색 도자기 변기를 떠올려 보세요.',
      soundAlike: '\'토일렛\' 발음이 \'토(vomit) 일(work) 렛(let)\'처럼 들릴 수 있는데, 속이 안 좋아 토할 것 같을 때 급히 가는 곳이라고 연상해 보세요.',
      context: '영국이나 호주에서는 일상적으로 자주 쓰이지만, 미국에서는 \'restroom\'이나 \'bathroom\'을 더 완곡한 표현으로 선호하기도 합니다.',
      synonymAntonym: '장소를 강조하는 restroom과 유사하며, 야외나 거친 환경의 latrine과 대비될 수 있습니다.',
    }),
    {
      definition: 'A large bowl and its associated plumbing used for the disposal of human waste, or the room containing this fixture.',
      synonyms: ['lavatory', 'restroom', 'bathroom'],
      antonyms: ['outdoors', 'wilderness', 'open-air'],
      wordDistractors: ['toilsome', 'turret', 'goblet'],
      definitionDistractors: [
        'A small enclosed space used for storing cleaning supplies.',
        'A shallow basin mounted on a wall for washing hands only.',
        'A heated room designed for relaxation and steam bathing.',
      ],
      exampleSentences: [
        { en: 'Please remember to flush the handle after you use the facility.', ko: '시설을 이용한 후에는 반드시 레버를 내려 물을 내려주세요.' },
        { en: 'The public building provides a clean area for people to wash up and use the commode.', ko: '그 공공 건물은 사람들이 씻고 변기를 사용할 수 있는 깨끗한 구역을 제공합니다.' },
      ],
    }
  ),
  word('tomorrow', '내일', 3, 'noun',
    ['어제', '오늘', '모레', '지난주', '다음달', '작년', '새벽', '오후', '미래', '과거'],
    tips({
      etymology: '고대 영어 \'to\'(~에)와 \'morrow\'(아침)가 합쳐져 \'다음 날 아침\'이라는 뜻에서 유래했습니다.',
      visual: '달력에서 오늘 칸 바로 옆에 있는 화살표가 가리키는 다음 칸을 상상해 보세요.',
      soundAlike: '\'투모로우\' 발음이 \'두 모로(두 모퉁이)\'를 돌면 나오는 날이라고 연상해 보세요.',
      context: '약속을 잡거나 일기예보를 확인할 때 가장 자주 쓰이는 시간 표현입니다.',
      synonymAntonym: '미래를 뜻하는 future와 비슷하지만, 바로 다음 날이라는 구체적인 시점을 나타냅니다.',
    }),
    {
      definition: 'the day after the present day',
      synonyms: ['following day', 'next day', 'morrow'],
      antonyms: ['yesterday', 'past', 'prior day'],
      wordDistractors: ['torment', 'borrow', 'sorrow'],
      definitionDistractors: [
        'The day that has just ended before the current one.',
        'A regular weekly occurrence that repeats on a fixed day.',
        'An indefinite period far ahead in the distant future.',
      ],
      exampleSentences: [
        { en: 'The weather forecast predicts heavy rain will arrive by tomorrow morning.', ko: '일기 예보는 내일 아침까지 폭우가 올 것이라고 예측합니다.' },
        { en: 'Please finish the report and submit it to the manager before noon tomorrow.', ko: '보고서를 완성해서 내일 정오 전까지 매니저에게 제출해 주세요.' },
      ],
    }
  ),
  word('tone', '음조', 5, 'noun',
    ['음높이', '멜로디', '화음', '리듬', '박자', '가락', '선율', '음색', '음량', '떨림'],
    tips({
      etymology: '그리스어 \'tonos\'에서 유래되었으며, 이는 \'팽팽하게 당겨진 줄\'을 의미하여 소리의 높낮이나 긴장감을 나타냅니다.',
      visual: '피아노 건반을 누를 때 울려 퍼지는 파동이나 색칠된 도화지의 전체적인 색감을 상상해 보세요.',
      soundAlike: '\'톤\'이라고 발음하며, 우리가 흔히 말하는 \'목소리 톤\'이나 \'피부 톤\'을 떠올리면 쉽습니다.',
      context: '음악에서의 가락뿐만 아니라 글쓴이의 태도나 분위기를 설명할 때도 자주 쓰입니다.',
      synonymAntonym: '소리의 높낮이를 뜻하는 pitch와 유사하며, 소리가 없는 상태인 silence와는 반대됩니다.',
    }),
    {
      definition: 'The quality of a sound, voice, or piece of writing that reveals a particular emotion or attitude.',
      synonyms: ['pitch', 'inflection', 'timbre'],
      antonyms: ['silence', 'monotony', 'quiet'],
      wordDistractors: ['bone', 'cone', 'zone'],
      definitionDistractors: [
        'The volume or loudness of a sound measured in decibels.',
        'A rhythmic pattern of beats repeated in a musical piece.',
        'The speed at which a series of notes are played.',
      ],
      exampleSentences: [
        { en: 'His sarcastic remark changed the entire mood of the meeting.', ko: '그의 비꼬는 듯한 어조가 회의의 전체적인 분위기를 바꾸어 놓았습니다.' },
        { en: 'The artist used a warm color palette to create a welcoming atmosphere.', ko: '그 화가는 따뜻한 색조를 사용하여 환영하는 분위기를 조성했습니다.' },
      ],
    }
  ),
  word('tongue', '혀', 6, 'noun',
    ['치아', '입술', '잇몸', '목구멍', '턱뼈', '콧구멍', '눈꺼풀', '손가락', '발바닥', '머리카락'],
    tips({
      etymology: '고대 영어 \'tunge\'에서 유래했으며, 게르만어권 언어들에서 공통적으로 입안의 근육 기관을 뜻합니다.',
      visual: '맛있는 아이스크림을 핥거나 말을 할 때 바쁘게 움직이는 입안의 근육을 상상해 보세요.',
      soundAlike: '\'텅\' 비어있는 입안에서 가장 큰 부피를 차지하는 \'텅(tongue)\'이라고 기억하면 쉽습니다.',
      context: '신체 부위뿐만 아니라 \'mother tongue\'처럼 모국어나 언어 자체를 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '언어를 뜻하는 language와 유의어 관계이며, 신체 부위로서의 반대 개념은 없으나 침묵인 silence와 대조될 수 있습니다.',
    }),
    {
      definition: 'The fleshy muscular organ in the mouth of a mammal, used for tasting, licking, swallowing, and articulating speech.',
      synonyms: ['language', 'dialect', 'speech'],
      antonyms: ['silence', 'muteness', 'quiet'],
      wordDistractors: ['tongs', 'lunge', 'plunge'],
      definitionDistractors: [
        'The hard bony structure forming the roof of the mouth.',
        'The soft tissue at the back of the throat near the tonsils.',
        'A set of vocal cords that produce sound when vibrating.',
      ],
      exampleSentences: [
        { en: 'The doctor asked the patient to stick out his tongue for examination.', ko: '의사는 진찰을 위해 환자에게 혀를 내밀어 보라고 요청했다.' },
        { en: 'French is her mother tongue, but she speaks English fluently.', ko: '프랑스어는 그녀의 모국어이지만, 그녀는 영어를 유창하게 구사한다.' },
      ],
    }
  ),
  word('tonight', '오늘밤', 1, 'noun',
    ['어젯밤', '내일밤', '새벽', '정오', '오후', '아침', '황혼', '주말', '평일', '작년'],
    tips({
      etymology: '고대 영어 \'to\'(~에)와 \'niht\'(밤)가 결합하여 \'오늘의 밤에\'라는 의미가 되었습니다.',
      visual: '어두운 밤하늘에 밝은 달이 떠 있고 시계가 현재 날짜의 밤 시간을 가리키는 모습을 상상하세요.',
      soundAlike: '\'투나잇\'으로 발음되며, \'투(Two)\'와 \'나이트(Night)\'를 합쳐 두 번째 밤이 아닌 \'오늘 밤\'으로 기억하세요.',
      context: '저녁 식사 예약이나 밤에 열리는 파티, 잠들기 전의 계획을 세울 때 주로 사용합니다.',
      synonymAntonym: '유의어로는 \'this evening\'이 있으며, 반의어로는 \'today\'나 \'tomorrow\'를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'The evening or night of the present day.',
      synonyms: ['this evening', 'this night', 'nighttime'],
      antonyms: ['today', 'tomorrow', 'yesterday'],
      wordDistractors: ['tonic', 'tonnage', 'bonfire'],
      definitionDistractors: [
        'The early hours of the morning just before sunrise.',
        'A period of late afternoon when the sun begins to set.',
        'The middle of the day when the sun is at its highest.',
      ],
      exampleSentences: [
        { en: 'The moon looks exceptionally bright and beautiful in the sky.', ko: '하늘에 뜬 달이 유난히 밝고 아름답다.' },
        { en: 'We are planning to watch a new movie at the cinema after dinner.', ko: '우리는 저녁 식사 후에 영화관에서 새 영화를 볼 계획이다.' },
      ],
    }
  ),
  word('too', '또한', 2, 'adverb',
    ['매우', '거의', '전혀', '이미', '아직', '항상', '자주', '가끔', '결코', '오직'],
    tips({
      etymology: '고대 영어 \'to\'에서 유래했으며, \'더하여\'라는 의미가 강조되면서 별도의 철자 \'too\'로 분리되었습니다.',
      visual: '이미 가득 찬 컵에 물이 더해져 넘치는 장면을 떠올리면 \'또한\' 혹은 \'지나치게\'라는 느낌을 잡기 쉽습니다.',
      soundAlike: '숫자 2(two)와 발음이 같으므로, 하나가 더 있는(2개인) 상황을 연상하며 \'또한\'을 기억하세요.',
      context: '문장 끝에 올 때는 \'나도 그래\'처럼 긍정적인 동의를 나타내며, 형용사 앞에 오면 \'너무 ~하다\'는 부정적 뉘앙스를 줍니다.',
      synonymAntonym: 'also와 유사하지만 문장 내 위치가 다르며, 반대로 제외를 나타내는 except와 대조됩니다.',
    }),
    {
      definition: 'In addition to what has been mentioned, or to a higher degree than is desirable.',
      synonyms: ['also', 'as well', 'excessively'],
      antonyms: ['neither', 'insufficiently', 'barely'],
      wordDistractors: ['two', 'boo', 'moo'],
      definitionDistractors: [
        'Used to indicate a single option with no alternatives.',
        'Expressing that something happened only once before.',
        'Describing something that occurs at rare intervals.',
      ],
      exampleSentences: [
        { en: 'She decided to join the hiking club too.', ko: '그녀 또한 등산 동호회에 가입하기로 결정했다.' },
        { en: 'The coffee was too hot to drink immediately.', ko: '그 커피는 즉시 마시기에는 너무 뜨거웠다.' },
      ],
    }
  ),
  word('tool', '도구', 7, 'noun',
    ['장비', '기계', '부품', '재료', '기구', '용품', '물자', '비품', '설비', '자재'],
    tips({
      etymology: '고대 영어 \'tol\'에서 유래했으며, 무언가를 만드는 데 쓰이는 수단을 의미합니다.',
      visual: '벨트에 망치와 드라이버를 가득 채운 목수의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'툴\'인데, 일이 잘 안 풀릴 때 \'툴툴\'거리며 고치는 도구를 떠올려 보세요.',
      context: '단순한 망치뿐만 아니라 소프트웨어나 지식 같은 추상적인 수단에도 쓰입니다.',
      synonymAntonym: '장비(equipment)와 비슷하지만, 보통 손에 잡히는 개별적인 물건을 뜻합니다.',
    }),
    {
      definition: 'A handheld device or piece of equipment used to carry out a particular function or task.',
      synonyms: ['implement', 'instrument', 'apparatus'],
      antonyms: ['hindrance', 'obstruction', 'barrier'],
      wordDistractors: ['toll', 'stool', 'pool'],
      definitionDistractors: [
        'A large motorized machine used in industrial manufacturing.',
        'A raw material that is processed into a finished product.',
        'A protective garment worn during hazardous work conditions.',
      ],
      exampleSentences: [
        { en: 'The mechanic reached for a specialized wrench to fix the engine.', ko: '정비공은 엔진을 수리하기 위해 특수 렌치를 집어 들었다.' },
        { en: 'Effective communication is a vital asset for any successful leader.', ko: '효과적인 의사소통은 성공적인 리더에게 필수적인 도구이다.' },
      ],
    }
  ),
  word('tooth', '이', 3, 'noun',
    ['손가락', '발가락', '머리카락', '눈꺼풀', '팔꿈치', '무릎', '어깨', '손목', '발목', '허리'],
    tips({
      etymology: '고대 영어 \'tōth\'에서 유래했으며, 인도유럽어족의 \'먹다\'라는 어근과 연결되어 음식을 씹는 도구임을 나타냅니다.',
      visual: '입을 크게 벌렸을 때 하얗게 빛나는 치아 하나를 상상해 보세요.',
      soundAlike: '\'투스\' 발음이 \'투(Two)\'와 비슷하죠? 앞니 두 개를 떠올리며 발음해 보세요.',
      context: '치과에 가거나 양치질을 할 때 가장 많이 사용하는 단어입니다. 복수형은 teeth로 바뀐다는 점에 주의하세요.',
      synonymAntonym: '치아를 뜻하는 ivory와 비교하고, 틀니를 뜻하는 denture와 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'One of the hard white structures in the mouth used for biting and chewing food.',
      synonyms: ['fang', 'molar', 'tusk'],
      antonyms: ['gum', 'tongue', 'palate'],
      wordDistractors: ['booth', 'sooth', 'youth'],
      definitionDistractors: [
        'The soft pink tissue that surrounds the base of the teeth.',
        'A thin membrane lining the inside of the cheek.',
        'The hinged bone structure that enables the jaw to open.',
      ],
      exampleSentences: [
        { en: 'The dentist had to remove a decayed tooth to prevent further pain.', ko: '치과 의사는 더 이상의 통증을 막기 위해 썩은 이를 뽑아야 했습니다.' },
        { en: 'Sweet snacks can cause damage to your protective enamel layer.', ko: '단 간식은 치아의 보호 법랑질 층에 손상을 줄 수 있습니다.' },
      ],
    }
  ),
  word('top', '정상', 1, 'noun',
    ['바닥', '중간', '기초', '심연', '내부', '측면', '뿌리', '입구', '배경', '구석'],
    tips({
      etymology: '고대 영어 \'topp\'에서 유래하여 팽이처럼 뾰족한 끝부분이나 가장 높은 지점을 의미하게 되었습니다.',
      visual: '에베레스트 산의 가장 높은 꼭대기에 깃발이 꽂혀 있는 모습을 상상해 보세요.',
      soundAlike: '인기 아이돌 그룹 \'빅뱅\'의 멤버 T.O.P처럼 가장 높은 위치에 있는 스타를 떠올려 보세요.',
      context: '산의 정상뿐만 아니라 전교 1등이나 기업의 최고 경영자 등 서열상 가장 높은 위치를 말할 때도 쓰입니다.',
      synonymAntonym: 'peak는 산의 뾰족한 정상을, bottom은 가장 낮은 바닥을 의미하여 서로 대조됩니다.',
    }),
    {
      definition: 'The highest part, point, or upper surface of something.',
      synonyms: ['peak', 'summit', 'apex'],
      antonyms: ['bottom', 'base', 'foot'],
      wordDistractors: ['tap', 'pop', 'hop'],
      definitionDistractors: [
        'The exact center point of a symmetrical structure.',
        'The outer edge or boundary of a circular area.',
        'The lowest layer forming the foundation of a building.',
      ],
      exampleSentences: [
        { en: 'The hikers finally reached the snowy summit at the very peak of the mountain.', ko: '등산객들은 마침내 산의 맨 꼭대기에 있는 눈 덮인 정상에 도달했다.' },
        { en: 'She placed a bright gold star on the highest branch of the Christmas tree.', ko: '그녀는 크리스마스 트리의 가장 높은 가지 위에 밝은 황금색 별을 놓았다.' },
      ],
    }
  ),
  word('torture', '고문', 9, 'noun',
    ['치료', '위로', '보상', '자유', '휴식', '환영', '칭찬', '보호', '용서', '친절'],
    tips({
      etymology: '라틴어 \'torquere(비틀다)\'에서 유래하여 몸이나 마음을 비트는 듯한 극심한 고통을 의미합니다.',
      visual: '중세 시대의 고문 기구에 묶여 고통스러워하는 사람의 이미지를 떠올려 보세요.',
      soundAlike: '\'토처\' 발음이 \'톡 쳐\'와 비슷하죠? 살짝 톡 치는 수준을 넘어선 잔혹한 행위를 연상하세요.',
      context: '인권 문제나 전쟁 범죄를 다루는 뉴스, 혹은 끔찍한 정신적 고통을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '고통을 주는 torment와 반대로 안락함을 주는 comfort를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'the act of inflicting severe physical or mental pain as a punishment or to force someone to say something',
      synonyms: ['torment', 'agony', 'suffering'],
      antonyms: ['comfort', 'pleasure', 'relief'],
      wordDistractors: ['texture', 'torsion', 'posture'],
      definitionDistractors: [
        'A formal process of questioning used in legal investigations.',
        'A strict physical training regimen for military personnel.',
        'A medical procedure performed to diagnose internal injuries.',
      ],
      exampleSentences: [
        { en: 'The dictator used physical abuse and mental pressure as a form of torture.', ko: '독재자는 고문의 한 형태로 신체적 학대와 정신적 압박을 사용했다.' },
        { en: 'Waiting for the exam results in total silence was absolute torture for her.', ko: '완전한 침묵 속에서 시험 결과를 기다리는 것은 그녀에게 절대적인 고문이었다.' },
      ],
    }
  ),
];
