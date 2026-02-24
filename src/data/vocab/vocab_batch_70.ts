import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch70: VocabItem[] = [
  word('wing', '날개', 7, 'noun',
    ['깃털', '부리', '꼬리', '발톱', '둥지', '비행', '공중', '속도', '방향', '엔진'],
    tips({
      etymology: '고대 노르웨이어 \'vengr\'에서 유래되었으며, 공기를 가르며 움직이는 신체 부위를 뜻합니다.',
      visual: '천사나 새가 하늘로 솟구치기 위해 양옆으로 길게 뻗은 깃털 뭉치를 상상해 보세요.',
      soundAlike: '바람을 가르는 소리 \'윙(wing)~\' 하고 날아가는 벌레나 비행기를 떠올리면 쉽습니다.',
      context: '생물의 신체 부위뿐만 아니라 비행기의 보조 날개나 건물의 부속 건물을 지칭할 때도 쓰입니다.',
      synonymAntonym: '유의어인 pinion은 깃털이 달린 날개 끝부분을, 반의어인 core는 중심부를 의미합니다.',
    }),
    {
      definition: 'One of the paired parts of the body that a bird, insect, or bat uses for flying.',
      synonyms: ['appendage', 'pinion', 'airfoil'],
      antonyms: ['center', 'core', 'body'],
      exampleSentences: [
        { en: 'The eagle soared high above the mountains without flapping its massive feathers.', ko: '독수리는 거대한 날개를 퍼덕이지 않고 산 위를 높이 솟구쳐 올랐다.' },
        { en: 'Engineers are inspecting the left side of the aircraft for any structural damage.', ko: '엔지니어들이 구조적 손상이 있는지 항공기의 왼쪽 날개를 점검하고 있다.' },
      ],
    }
  ),
  word('wipe', '닦다', 4, 'verb',
    ['던지다', '부수다', '숨기다', '기다리다', '빌리다', '고치다', '나누다', '태우다', '흔들다', '채우다'],
    tips({
      etymology: '고대 영어 \'wipian\'에서 유래하여 표면을 문질러 깨끗하게 만드는 동작을 의미합니다.',
      visual: '자동차 앞유리의 와이퍼(wiper)가 빗물을 좌우로 쓱쓱 닦아내는 모습을 상상하세요.',
      soundAlike: '\'와이프\'와 발음이 비슷하죠? 배우자가 식탁을 행주로 닦는 모습을 연상해 보세요.',
      context: '주로 먼지, 액체, 혹은 눈물처럼 표면에 묻은 것을 제거할 때 사용되는 표현입니다.',
      synonymAntonym: '청소하다는 의미의 clean과 비슷하지만, 채우거나 더럽히는 stain과는 반대됩니다.',
    }),
    {
      definition: 'to clean or dry something by rubbing its surface with a cloth, a piece of paper, or your hand',
      synonyms: ['rub', 'clean', 'mop'],
      antonyms: ['stain', 'smear', 'dirty'],
      exampleSentences: [
        { en: 'Please wipe the table with a damp cloth before setting the plates.', ko: '접시를 놓기 전에 축축한 천으로 테이블을 닦아 주세요.' },
        { en: 'She wiped the tears from her eyes and tried to smile.', ko: '그녀는 눈에서 눈물을 닦아내고 미소를 짓기 위해 노력했습니다.' },
      ],
    }
  ),
  word('wire', '철사', 5, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '고대 영어 \'wir\'에서 유래했으며, 금속을 길게 뽑아 만든 줄을 의미합니다.',
      visual: '전신주 사이에 길게 연결된 구리선이나 울타리에 칭칭 감긴 가느다란 철사를 상상하세요.',
      soundAlike: '\'와이어\'라고 발음하며, 번지점프나 액션 영화에서 몸을 매다는 줄을 떠올리면 쉽습니다.',
      context: '전기 신호를 전달하거나 물건을 단단히 묶어 고정할 때 주로 사용되는 도구입니다.',
      synonymAntonym: 'cable이나 cord와 비슷하지만 훨씬 가늘며, 단단한 bar나 block과는 반대되는 유연한 형태입니다.',
    }),
    {
      definition: 'A long, thin, flexible thread or rod of metal, often used to carry electricity or to fasten things.',
      synonyms: ['cable', 'filament', 'strand'],
      antonyms: ['bar', 'block', 'sheet'],
      exampleSentences: [
        { en: 'The technician used a copper strand to connect the two electronic components.', ko: '기술자는 두 전자 부품을 연결하기 위해 구리선을 사용했습니다.' },
        { en: 'Birds often perch on the thin metal lines stretched between telephone poles.', ko: '새들은 종종 전신주 사이에 뻗어 있는 가느다란 금속선 위에 앉아 있습니다.' },
      ],
    }
  ),
  word('wise', '슬기로운', 6, 'adjective',
    ['어리석은', '무모한', '경솔한', '둔감한', '미숙한', '고집스러운', '부주의한', '무지한', '단순한', '성급한'],
    tips({
      etymology: '고대 영어 \'wis\'에서 유래했으며, \'알다\'라는 뜻의 어근 \'weid\'와 연결되어 아는 것이 많음을 뜻합니다.',
      visual: '긴 수염을 기른 노인이 두꺼운 책을 보며 인자하게 웃고 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'와이즈\'이므로, \'와! 이즈(is) 정말 똑똑한 사람이다\'라고 기억하면 쉽습니다.',
      context: '주로 오랜 경험을 통해 깊은 통찰력을 가진 사람이나 그러한 판단을 묘사할 때 쓰입니다.',
      synonymAntonym: '지혜로운 sagacious와 반대되는 어리석은 foolish를 함께 묶어서 기억하세요.',
    }),
    {
      definition: 'Having or showing experience, knowledge, and good judgment.',
      synonyms: ['sagacious', 'prudent', 'judicious'],
      antonyms: ['foolish', 'unwise', 'imprudent'],
      exampleSentences: [
        { en: 'Seeking advice from an experienced mentor is a very sensible and intelligent move.', ko: '경험 많은 멘토에게 조언을 구하는 것은 매우 현명하고 지혜로운 행동입니다.' },
        { en: 'The elderly woman offered some profound guidance based on her long life.', ko: '그 노부인은 그녀의 긴 삶에 기반한 깊고 슬기로운 가르침을 주었습니다.' },
      ],
    }
  ),
  word('wish', '바라다', 2, 'verb',
    ['포기하다', '거부하다', '무시하다', '싫어하다', '거절하다', '반대하다', '단념하다', '꺼리다', '미루다', '거리끼다'],
    tips({
      etymology: '고대 영어 \'wyscan\'에서 유래했으며, 무언가를 간절히 원하고 바라는 마음을 담고 있습니다.',
      visual: '밤하늘의 별을 보며 두 손을 모으고 간절히 기도하는 사람의 모습을 상상해 보세요.',
      soundAlike: '바람이 \'위시~\' 하고 불어오듯 내 마음의 소망이 멀리 퍼져나가는 소리로 기억하세요.',
      context: '생일 케이크의 촛불을 끄기 직전 마음속으로 비는 소망이 바로 이것입니다.',
      synonymAntonym: 'desire(원하다)와 유사하며, 무관심을 뜻하는 indifference와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to want something to happen or to be true, especially something that seems unlikely or impossible',
      synonyms: ['desire', 'hope', 'long'],
      antonyms: ['dread', 'dislike', 'reject'],
      exampleSentences: [
        { en: 'She closed her eyes and wished for good health for her family.', ko: '그녀는 눈을 감고 가족의 건강을 빌었습니다.' },
        { en: 'I wish I could speak five languages fluently.', ko: '다섯 개의 언어를 유창하게 말할 수 있으면 좋겠습니다.' },
      ],
    }
  ),
  word('wit', '기지', 7, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '고대 영어 \'witan(알다)\'에서 유래하여, 사물을 빠르게 이해하고 판단하는 지적 능력을 뜻하게 되었습니다.',
      visual: '코미디언이 관객의 돌발 질문에 1초 만에 재치 있게 대꾸하여 폭소를 유발하는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'윗(wit)\'이므로, 남들보다 한 \'수 위\'에 있는 똑똑한 머리 회전을 연상하면 쉽습니다.',
      context: '주로 대화나 글에서 사람들을 즐겁게 하면서도 날카로운 통찰력을 보여줄 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '유머러스한 재치를 뜻하는 humor와 비슷하지만, wit는 좀 더 지적이고 날카로운 지혜에 가깝습니다.',
    }),
    {
      definition: 'The ability to use words and ideas in a quick and inventive way to create humor or express clever insights.',
      synonyms: ['cleverness', 'ingenuity', 'shrewdness'],
      antonyms: ['stupidity', 'dullness', 'foolishness'],
      exampleSentences: [
        { en: 'The comedian was famous for his quick response and sharp intelligence during live shows.', ko: '그 코미디언은 라이브 공연 중 보여주는 빠른 순발력과 날카로운 기지로 유명했습니다.' },
        { en: 'Her writing is full of subtle humor and intellectual brilliance that keeps readers engaged.', ko: '그녀의 글은 독자들을 사로잡는 미묘한 유머와 지적인 기지로 가득 차 있습니다.' },
      ],
    }
  ),
  word('with', '함께', 3, 'preposition',
    ['근처에', '맞은편에', '동안', '이전에', '이후에', '대신에', '통해', '기준으로', '관하여', '대하여'],
    tips({
      etymology: '고대 영어의 \'wið\'에서 유래하여 원래는 \'반대하여\'라는 뜻이었으나, 시간이 흐르며 \'함께\' 혹은 \'동반\'의 의미로 정착되었습니다.',
      visual: '두 사람이 나란히 걷고 있거나, 숟가락과 포크가 한 세트로 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'위드\'라고 발음하며, \'위(we)가 다(with) 함께 있다\'라고 소리 내어 외우면 기억하기 쉽습니다.',
      context: '누군가와 동행하거나 도구를 사용하여 무언가를 할 때 가장 빈번하게 사용되는 전치사입니다.',
      synonymAntonym: '동반을 뜻하는 along과 반대되는 결핍의 의미인 without을 묶어서 기억하세요.',
    }),
    {
      definition: 'accompanied by another person or thing, or using a particular instrument',
      synonyms: ['alongside', 'amidst', 'including'],
      antonyms: ['without', 'excluding', 'lacking'],
      exampleSentences: [
        { en: 'She decided to go to the cinema with her younger brother.', ko: '그녀는 남동생과 함께 영화관에 가기로 결정했습니다.' },
        { en: 'The chef chopped the vegetables with a very sharp knife.', ko: '요리사는 아주 날카로운 칼로 채소를 썰었습니다.' },
      ],
    }
  ),
  word('withdraw', '물러나다', 8, 'verb',
    ['전진하다', '삽입하다', '기탁하다', '참여하다', '유지하다', '확장하다', '연결하다', '제공하다', '승인하다', '가속하다'],
    tips({
      etymology: '접두사 with(뒤로)와 draw(끌다)가 합쳐져 \'뒤로 끌어당기다\'라는 의미에서 유래했습니다.',
      visual: 'ATM기에서 현금을 밖으로 꺼내거나, 군대가 전장에서 뒤로 빠지는 모습을 상상해 보세요.',
      soundAlike: '위드(with) + 드로(draw). \'위(위험하니) 드로(뒤로) 가다\'라고 연상하면 쉽습니다.',
      context: '은행 업무에서는 돈을 \'인출하다\'로, 사회적 상황에서는 \'탈퇴하다\'나 \'물러나다\'로 쓰입니다.',
      synonymAntonym: 'retreat(후퇴하다)와 유의어이며, 반대로 advance(전진하다)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to move back or away from a place or situation, or to take money out of an account',
      synonyms: ['retreat', 'extract', 'retract'],
      antonyms: ['deposit', 'advance', 'insert'],
      exampleSentences: [
        { en: 'The troops were ordered to move back to the border immediately.', ko: '군대는 즉시 국경으로 물러나라는 명령을 받았다.' },
        { en: 'You need to provide identification before you can take money out from your savings.', ko: '예금을 인출하기 전에 신분증을 제시해야 합니다.' },
      ],
    }
  ),
  word('within', '~안에', 4, 'preposition',
    ['너머에', '근처에', '맞은편에', '이전에', '이후에', '대신에', '통해서', '기준으로', '관하여', '바깥에'],
    tips({
      etymology: 'with(함께)와 in(안에)이 결합된 형태로, 어떤 범위나 경계의 안쪽을 의미합니다.',
      visual: '상자 안에 물건이 들어있는 모습이나 원 안에 점이 찍혀 있는 이미지를 그려보세요.',
      soundAlike: '위딘이라고 발음하며 위(위치)가 딘(든든하게 안쪽)에 있다고 연상하세요.',
      context: '시간이나 거리, 혹은 마음의 한계를 설정할 때 그 범위를 넘지 않음을 나타냅니다.',
      synonymAntonym: 'inside와 유사하며 outside와는 반대되는 공간적 개념을 가집니다.',
    }),
    {
      definition: 'inside the range, limits, or boundaries of something such as a distance, time, or area',
      synonyms: ['inside', 'inward', 'internally'],
      antonyms: ['outside', 'beyond', 'without'],
      exampleSentences: [
        { en: 'The results of the medical test will be available within two days.', ko: '검사 결과는 이틀 이내에 확인 가능합니다.' },
        { en: 'Happiness is often found within one\'s own heart rather than in material things.', ko: '행복은 물질적인 것보다 종종 자신의 마음속에서 발견됩니다.' },
      ],
    }
  ),
  word('without', '~없이', 5, 'preposition',
    ['근처에', '맞은편에', '동안', '이전에', '이후에', '대신에', '통해', '기준으로', '관하여', '대하여'],
    tips({
      etymology: '고대 영어 \'with\'와 \'out\'이 결합되어 \'바깥에 있다\'는 의미에서 \'결핍\'의 뜻으로 발전했습니다.',
      visual: '텅 빈 주머니나 비어 있는 컵을 보며 무언가 결여된 상태를 상상해 보세요.',
      soundAlike: '위드아웃은 \'위드(함께)\'와 반대되는 \'아웃(밖)\'이 합쳐진 소리로 기억하면 쉽습니다.',
      context: '커피를 주문할 때 설탕이나 우유를 빼달라고 요청하는 상황에서 자주 쓰입니다.',
      synonymAntonym: '함께를 뜻하는 with와 반대되는 개념으로 짝지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'not having or including something; in the absence of a particular person or thing',
      synonyms: ['lacking', 'minus', 'excluding'],
      antonyms: ['with', 'including', 'possessing'],
      exampleSentences: [
        { en: 'Plants cannot grow properly for a long time without water.', ko: '식물은 물 없이는 오랫동안 제대로 자랄 수 없습니다.' },
        { en: 'He managed to solve the complex puzzle without any help from others.', ko: '그는 타인의 도움 없이 복잡한 퍼즐을 스스로 풀어냈습니다.' },
      ],
    }
  ),
  word('witness', '목격자', 6, 'noun',
    ['용의자', '범인', '피해자', '방관자', '가해자', '판사', '변호사', '검사', '배심원', '수사관'],
    tips({
      etymology: '고대 영어 \'wit\'에서 유래하여 \'아는 사람\' 혹은 \'지식\'이라는 의미를 담고 있습니다.',
      visual: '법정의 증인석에 앉아 진실을 말하기 위해 성경 위에 손을 얹고 있는 사람을 상상해보세요.',
      soundAlike: '\'윗(wit)\' 부분에 집중하여 \'위\'에서 모든 것을 다 지켜본 사람이라고 연상하면 쉽습니다.',
      context: '범죄 현장이나 사고 현장에서 실제로 상황을 목격한 사람을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '직접 본 사람인 observer와 대조적으로, 아무것도 모르는 stranger를 함께 기억하세요.',
    }),
    {
      definition: 'A person who sees an event, typically a crime or accident, take place and can describe it to others.',
      synonyms: ['observer', 'onlooker', 'eyewitness'],
      antonyms: ['participant', 'stranger', 'ignoramus'],
      exampleSentences: [
        { en: 'The police are looking for a reliable person who saw the accident occur.', ko: '경찰은 사고가 일어나는 것을 본 신뢰할 수 있는 목격자를 찾고 있습니다.' },
        { en: 'Her testimony provided crucial information that helped solve the case.', ko: '그녀의 증언은 사건을 해결하는 데 도움이 되는 결정적인 정보를 제공했습니다.' },
      ],
    }
  ),
  word('woman', '여자', 1, 'noun',
    ['남자', '소년', '아기', '노인', '아이', '청년', '소녀', '유아', '성인', '어르신'],
    tips({
      etymology: '고대 영어 wifman에서 유래했으며, wif(여자)와 man(사람)이 합쳐진 단어입니다.',
      visual: '우아한 드레스를 입고 미소 짓는 성인 여성의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'우먼\'과 비슷하므로 \'우리 어머니\'를 떠올리며 성인 여성을 연상하세요.',
      context: '격식 있는 자리에서 기혼 여성을 높여 부를 때 \'부인\'이라는 의미로 자주 쓰입니다.',
      synonymAntonym: 'lady와는 정중함에서 비슷하고, 반대 성별인 man과 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'An adult female human being.',
      synonyms: ['lady', 'female', 'matron'],
      antonyms: ['man', 'gentleman', 'boy'],
      exampleSentences: [
        { en: 'The young woman is a talented architect.', ko: '그 젊은 부인은 재능 있는 건축가입니다.' },
        { en: 'Every woman in the room stood up to applaud the speaker.', ko: '방 안에 있던 모든 여성들이 연설가에게 박수를 보내기 위해 일어섰습니다.' },
      ],
    }
  ),
  word('wonder', '경이', 7, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '고대 영어 wundor에서 유래하여, 놀라운 일이나 기적적인 현상을 가리키는 말로 발전했습니다.',
      visual: '밤하늘의 은하수를 처음 본 아이가 입을 벌리고 감탄하는 표정을 상상해 보세요.',
      soundAlike: '원더우먼(Wonder Woman)의 놀라운 능력을 떠올리면 \'경이로움\'이라는 뜻을 쉽게 기억할 수 있습니다.',
      context: '주로 자연의 신비나 인간이 만든 위대한 건축물을 묘사할 때 자주 쓰이는 명사입니다.',
      synonymAntonym: '놀라움을 뜻하는 marvel과 유사하며, 평범함을 뜻하는 ordinariness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A feeling of surprise mingled with admiration, caused by something beautiful, unexpected, unfamiliar, or inexplicable.',
      synonyms: ['marvel', 'phenomenon', 'spectacle'],
      antonyms: ['ordinariness', 'normality', 'expectation'],
      exampleSentences: [
        { en: 'The ancient pyramids remain a magnificent wonder of human engineering.', ko: '고대 피라미드는 인류 공학의 장엄한 경이로 남아 있다.' },
        { en: 'A sense of wonder filled the children as they watched the magic show.', ko: '마술 쇼를 관람하는 아이들은 경이로움에 가득 찼다.' },
      ],
    }
  ),
  word('wood', '숲', 2, 'noun',
    ['바다', '하늘', '도시', '건물', '사막', '동굴', '평원', '계곡', '호수', '정원'],
    tips({
      etymology: '고대 영어 \'wudu\'에서 유래했으며, 원래 나무 재질뿐만 아니라 나무가 모여 있는 장소인 숲을 의미했습니다.',
      visual: '울창한 나무들이 빽빽하게 들어서서 햇빛을 가리고 있는 초록색 숲의 풍경을 상상해 보세요.',
      soundAlike: '발음이 \'우드\'로 들리는데, 숲속에서 \'우드\'득 나뭇가지 밟는 소리가 난다고 생각하면 쉽습니다.',
      context: '보통 forest보다는 규모가 작고 친근한 느낌의 숲이나 산림을 지칭할 때 자주 쓰입니다.',
      synonymAntonym: 'grove나 forest와 비슷한 의미를 공유하며, 반대로 나무가 없는 황무지나 사막과는 대조됩니다.',
    }),
    {
      definition: 'An area of land, smaller than a forest, that is covered with a thick growth of trees.',
      synonyms: ['forest', 'grove', 'woodland'],
      antonyms: ['desert', 'clearing', 'wasteland'],
      exampleSentences: [
        { en: 'A narrow path winds through the dark wood behind the village.', ko: '마을 뒤편의 어두운 숲 사이로 좁은 길이 구불구불 나 있습니다.' },
        { en: 'Many different species of birds live in this small wood.', ko: '이 작은 숲에는 아주 다양한 종류의 새들이 살고 있습니다.' },
      ],
    }
  ),
  word('wool', '양모', 4, 'noun',
    ['면화', '비단', '가죽', '나일론', '폴리에스테르', '린넨', '벨벳', '데님', '고무', '플라스틱'],
    tips({
      etymology: '고대 게르만어 \'wullō\'에서 유래했으며, 털이 많은 동물의 털을 의미하는 단어들과 뿌리를 공유합니다.',
      visual: '복슬복슬한 양의 털을 깎아 뭉쳐놓은 털실 뭉치나 따뜻한 겨울 스웨터를 상상해 보세요.',
      soundAlike: '\'울\'이라고 발음되는데, 추운 겨울에 따뜻한 옷이 없어서 \'울\'고 싶을 때 입는 소재라고 기억하세요.',
      context: '주로 겨울 의류 소재나 뜨개질용 실을 설명할 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '부드러운 털인 fleece와 비슷하지만, 인공 섬유인 synthetic과는 반대되는 천연 소재입니다.',
    }),
    {
      definition: 'The soft, thick hair that grows on the bodies of sheep and some other animals, often used to make clothes or blankets.',
      synonyms: ['fleece', 'yarn', 'fiber'],
      antonyms: ['silk', 'cotton', 'synthetic'],
      exampleSentences: [
        { en: 'Heavy blankets made of natural sheep hair provide excellent warmth during the winter months.', ko: '천연 양모로 만든 두꺼운 담요는 겨울철에 뛰어난 보온성을 제공합니다.' },
        { en: 'Knitting a scarf requires several balls of high-quality soft thread.', ko: '목도리를 뜨기 위해서는 여러 뭉치의 고품질 부드러운 양모 실이 필요합니다.' },
      ],
    }
  ),
  word('word', '낱말', 3, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '고대 영어 \'word\'에서 유래하여 말, 소리, 약속이라는 의미를 오랫동안 유지해 왔습니다.',
      visual: '사전의 한 페이지에 굵게 적힌 개별적인 글자 묶음을 상상해 보세요.',
      soundAlike: '\'워드\' 프로세서 프로그램을 떠올리면 글자를 다루는 도구라는 점을 쉽게 연결할 수 있습니다.',
      context: '단순히 낱말 하나를 뜻하기도 하지만, 누군가의 \'말\'이나 \'약속\'이라는 맥락으로도 자주 쓰입니다.',
      synonymAntonym: 'term이나 phrase와는 비슷하지만, silence나 quiet와는 대조적인 소통의 수단입니다.',
    }),
    {
      definition: 'A single distinct meaningful element of speech or writing, used with others or sometimes alone to form a sentence.',
      synonyms: ['term', 'expression', 'vocal'],
      antonyms: ['silence', 'quiet', 'muteness'],
      exampleSentences: [
        { en: 'Please look up the definition of this specific term in the dictionary.', ko: '사전에서 이 특정 낱말의 정의를 찾아보세요.' },
        { en: 'The author chose every single expression carefully to convey the right emotion.', ko: '작가는 적절한 감정을 전달하기 위해 모든 낱말 하나하나를 신중하게 선택했습니다.' },
      ],
    }
  ),
  word('work', '일', 1, 'noun',
    ['휴식', '놀이', '취미', '수면', '여행', '공백', '여가', '중단', '포기', '거절'],
    tips({
      etymology: '고대 영어 \'weorc\'에서 유래했으며, 무언가를 만들어내거나 에너지를 쓰는 행위를 뜻합니다.',
      visual: '사무실 책상 앞에 앉아 서류를 보거나 컴퓨터를 두드리는 직장인의 모습을 상상해 보세요.',
      soundAlike: '워크(work)와 걷다(walk)를 헷갈리지 마세요. \'어\' 발음을 길게 하며 일하는 모습을 떠올립니다.',
      context: '직업적인 업무뿐만 아니라 학업이나 집안일처럼 노력이 필요한 모든 활동에 쓰입니다.',
      synonymAntonym: 'labor나 task와 비슷하지만, rest나 leisure와는 정반대의 개념입니다.',
    }),
    {
      definition: 'An activity involving mental or physical effort done in order to achieve a purpose or result.',
      synonyms: ['labor', 'employment', 'occupation'],
      antonyms: ['leisure', 'recreation', 'idleness'],
      exampleSentences: [
        { en: 'Finding a balance between professional duties and personal life is essential.', ko: '직업적인 업무와 개인적인 삶 사이의 균형을 찾는 것은 필수적이다.' },
        { en: 'The artist spent several months completing his latest masterpiece.', ko: '그 예술가는 그의 최신 걸작을 완성하는 데 몇 달을 보냈다.' },
      ],
    }
  ),
  word('world', '세계', 2, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '고대 영어 \'wer\' (사람)와 \'ald\' (나이, 시대)가 합쳐져 \'인간의 시대\'라는 의미에서 유래했습니다.',
      visual: '둥근 지구본 위에 수많은 나라의 국기가 꽂혀 있는 모습을 상상해 보세요.',
      soundAlike: '발음할 때 \'워~ㄹ드\'처럼 혀를 굴려주며 넓은 대지를 품는 듯한 소리를 내보세요.',
      context: '지구 전체를 의미하기도 하지만, \'the fashion world\'처럼 특정 분야의 사회를 일컫기도 합니다.',
      synonymAntonym: 'universe나 earth와 비슷하지만, 가상의 공간이나 정신적 영역까지 포함하는 넓은 개념입니다.',
    }),
    {
      definition: 'The earth and all the people, places, and things on it, or a particular sphere of activity.',
      synonyms: ['earth', 'globe', 'universe'],
      antonyms: ['nothingness', 'void', 'emptiness'],
      exampleSentences: [
        { en: 'Technology has changed the way people communicate across the globe.', ko: '기술은 전 세계 사람들이 소통하는 방식을 변화시켰습니다.' },
        { en: 'Traveling allows you to experience different cultures and see how others live.', ko: '여행을 하면 다양한 문화를 경험하고 다른 사람들이 어떻게 사는지 볼 수 있습니다.' },
      ],
    }
  ),
  word('worry', '근심하다', 3, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '고대 영어 \'wyrgan\'에서 유래되었으며, 원래 \'목을 조르다\'라는 뜻에서 마음을 조이는 불안감으로 의미가 확장되었습니다.',
      visual: '밤늦게까지 침대에 누워 천장을 바라보며 머릿속으로 복잡한 고민을 하는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'워리\' 발음이 강아지를 부르는 소리와 비슷하지만, 여기서는 마음속에 불안한 강아지가 짖고 있다고 연상해 보세요.',
      context: '시험 결과나 건강 문제처럼 미래에 일어날 불확실한 일에 대해 불안해할 때 주로 사용합니다.',
      synonymAntonym: '불안해하는 fret과 평온함을 유지하는 relax를 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to feel uneasy or anxious about potential problems or unpleasant events that might happen',
      synonyms: ['fret', 'brood', 'agonize'],
      antonyms: ['disregard', 'comfort', 'reassure'],
      exampleSentences: [
        { en: 'Parents often feel anxious and tend to fret about their children\'s future safety.', ko: '부모들은 종종 자녀의 미래 안전에 대해 불안해하고 근심하는 경향이 있다.' },
        { en: 'Constant thoughts about the upcoming presentation made him feel extremely uneasy all night.', ko: '다가올 발표에 대한 끊임없는 생각들이 밤새 그를 매우 근심하게 만들었다.' },
      ],
    }
  ),
  word('worship', '숭배', 5, 'noun',
    ['모욕', '무시', '비난', '거절', '의심', '경멸', '방치', '증오', '질투', '냉소'],
    tips({
      etymology: '고대 영어 \'weorthscipe\'에서 유래했으며, 가치(worth)를 부여하는 상태(-ship)를 의미합니다.',
      visual: '고대 신전 앞에서 사람들이 무릎을 꿇고 신성한 불꽃을 바라보는 경건한 모습을 상상해 보세요.',
      soundAlike: '\'워십\'은 \'War(전쟁) + Ship(배)\'과 발음이 비슷하지만, 평화를 구하는 종교적 행위로 기억하세요.',
      context: '주로 종교적인 예배나 신에 대한 찬양뿐만 아니라, 특정 인물에 대한 맹목적인 동경을 나타낼 때도 쓰입니다.',
      synonymAntonym: '존경을 뜻하는 adoration과 반대되는 개념인 불경함 irreverence를 함께 익히면 좋습니다.',
    }),
    {
      definition: 'the feeling or expression of reverence and adoration for a deity or a sacred figure',
      synonyms: ['reverence', 'veneration', 'adoration'],
      antonyms: ['irreverence', 'desecration', 'contempt'],
      exampleSentences: [
        { en: 'Ancient civilizations built massive structures as places of divine worship.', ko: '고대 문명들은 신성한 숭배의 장소로서 거대한 건축물들을 지었습니다.' },
        { en: 'Her intense worship of the pop star bordered on obsession.', ko: '그 팝스타에 대한 그녀의 강렬한 숭배는 집착에 가까웠습니다.' },
      ],
    }
  ),
  word('worth', '가치가 있는', 6, 'adjective',
    ['무가치한', '쓸모없는', '하찮은', '무의미한', '불필요한', '사소한', '보잘것없는', '무용한', '열등한', '시시한'],
    tips({
      etymology: '고대 영어 \'weorth\'에서 유래하여 물건의 가격이나 가액을 의미하게 되었습니다.',
      visual: '박물관의 유리관 안에 전시된 아주 비싼 보석과 그 아래 붙은 가격표를 상상해 보세요.',
      soundAlike: '발음이 \'워스\'와 비슷하므로 \'원수\'도 갚을 만큼 \'가치\' 있는 일이라고 연상해 보세요.',
      context: '주로 \'be worth + 명사/동명사\' 형태로 쓰여 특정 행동을 할 만한 가치가 있음을 나타냅니다.',
      synonymAntonym: 'valuable(가치 있는)과 유의어 관계이며, worthless(가치 없는)와는 반대됩니다.',
    }),
    {
      definition: 'having a value equivalent to a specified amount, or deserving of a particular action or effort',
      synonyms: ['valuable', 'deserving', 'meritorious'],
      antonyms: ['worthless', 'undeserving', 'insignificant'],
      exampleSentences: [
        { en: 'This painting is worth millions of dollars at auction.', ko: '이 그림은 경매에서 수백만 달러의 가치가 있습니다.' },
        { en: 'The museum is definitely worth visiting if you have time.', ko: '시간이 있다면 그 박물관은 확실히 방문할 가치가 있습니다.' },
      ],
    }
  ),
  word('would', '~할 것이다', 7, 'verb',
    ['핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한'],
    tips({
      etymology: '고대 영어 \'wolde\'에서 유래했으며, 의지를 나타내는 \'will\'의 과거 형태입니다.',
      visual: '과거의 시점에서 미래를 바라보는 화살표가 뒤로 꺾여 있는 모습을 상상해 보세요.',
      soundAlike: '나무를 뜻하는 \'wood\'와 발음이 거의 같으므로 나무 뒤에 숨겨진 과거의 의지를 떠올려 보세요.',
      context: '가정법 문장이나 과거의 습관, 혹은 정중하게 부탁을 할 때 주로 사용됩니다.',
      synonymAntonym: '의지를 나타내는 \'will\'과 유사하지만 더 불확실하거나 정중한 뉘앙스를 가집니다.',
    }),
    {
      definition: 'Used to talk about a possible situation that has not happened or to describe a past intention or habit.',
      synonyms: ['intended', 'wished', 'planned'],
      antonyms: ['refused', 'declined', 'avoided'],
      exampleSentences: [
        { en: 'He promised that he would finish the project by Friday.', ko: '그는 금요일까지 프로젝트를 끝내겠다고 약속했다.' },
        { en: 'Every summer, the family would travel to the mountains for a week.', ko: '매년 여름이면 그 가족은 일주일 동안 산으로 여행을 가곤 했다.' },
      ],
    }
  ),
  word('wound', '부상', 4, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '고대 영어 \'wund\'에서 유래하여 신체적 손상이나 고통을 의미하게 되었습니다.',
      visual: '넘어져서 무릎에 피가 나고 밴드를 붙여야 하는 아픈 흉터를 상상해 보세요.',
      soundAlike: '바람을 뜻하는 \'wind\'의 과거형과 철자가 같지만, 부상일 때는 \'우운드\'라고 길게 발음합니다.',
      context: '전쟁터의 부상병이나 사고로 인한 깊은 찰과상을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'injury와 유사하지만 주로 찢어지거나 베인 구체적인 상처를 뜻하며, 반대로 완치된 상태는 cure라고 합니다.',
    }),
    {
      definition: 'an injury to living tissue caused by a cut, blow, or other impact, typically one in which the skin is cut or broken',
      synonyms: ['injury', 'lesion', 'gash'],
      antonyms: ['remedy', 'blessing', 'comfort'],
      exampleSentences: [
        { en: 'The soldier received a serious injury to his shoulder during the battle.', ko: '그 군인은 전투 중에 어깨에 심각한 부상을 입었습니다.' },
        { en: 'Cleaning the cut thoroughly helps prevent infection in the open area.', ko: '베인 곳을 깨끗이 씻는 것은 벌어진 상처 부위의 감염을 막는 데 도움이 됩니다.' },
      ],
    }
  ),
  word('wrap', '싸다', 5, 'verb',
    ['풀다', '벗기다', '드러내다', '노출하다', '펼치다', '제거하다', '분리하다', '개방하다', '해체하다', '버리다'],
    tips({
      etymology: '중세 영어 \'wrappen\'에서 유래했으며 무언가를 덮거나 둘러싸는 동작을 의미합니다.',
      visual: '샌드위치를 얇은 종이로 돌돌 말아 감싸는 모습을 상상해 보세요.',
      soundAlike: '랩(Wrap) 음악의 \'Rap\'과 발음이 같지만, 선물 포장지(Wrapping paper)를 떠올리면 쉽습니다.',
      context: '음식을 보관하거나 선물을 줄 때 겉면을 가리는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'Enclose는 안으로 넣는 느낌이고, Unwrap은 반대로 포장을 뜯는 행위입니다.',
    }),
    {
      definition: 'to cover or enclose something by folding or winding a piece of paper, cloth, or other material around it',
      synonyms: ['enclose', 'envelop', 'cover'],
      antonyms: ['unwrap', 'expose', 'reveal'],
      exampleSentences: [
        { en: 'She carefully wrapped the birthday present in colorful paper and tied a ribbon on top.', ko: '그녀는 생일 선물을 알록달록한 종이로 조심스럽게 싸고 위에 리본을 묶었습니다.' },
        { en: 'Please wrap the leftovers in foil and put them in the refrigerator.', ko: '남은 음식을 호일로 싸서 냉장고에 넣어 주세요.' },
      ],
    }
  ),
  word('wreck', '난파', 9, 'noun',
    ['항해', '구조', '건설', '복구', '보존', '출항', '정박', '운항', '수리', '안전'],
    tips({
      etymology: '고대 북유럽어 \'vrek\'에서 유래하여 \'쫓겨난 것\' 혹은 \'표류물\'이라는 의미에서 파괴된 잔해라는 뜻으로 발전했습니다.',
      visual: '거친 파도에 휩쓸려 해안가에 부서진 채 버려진 낡은 목선 조각들을 상상해 보세요.',
      soundAlike: '무언가를 \'렉(wreck)\' 걸린 것처럼 망가뜨리거나 부수는 소리를 연상하면 기억하기 쉽습니다.',
      context: '물리적인 배의 사고뿐만 아니라 사고로 인해 심하게 찌그러진 자동차나 정신적으로 피폐해진 사람에게도 쓰입니다.',
      synonymAntonym: '파괴된 상태인 ruin과 유사하며, 완벽하게 보존된 상태인 preservation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The remaining parts of a ship, vehicle, or building that has been badly damaged or destroyed.',
      synonyms: ['shipwreck', 'ruin', 'debris'],
      antonyms: ['restoration', 'creation', 'preservation'],
      exampleSentences: [
        { en: 'Divers discovered the gold coins hidden inside the ancient wreck on the ocean floor.', ko: '잠수부들은 해저에 있는 고대 난파선 안에서 숨겨진 금화들을 발견했습니다.' },
        { en: 'The car was a complete wreck after it skidded off the icy road and hit a tree.', ko: '그 자동차는 빙판길에서 미끄러져 나무를 들이받은 후 완전히 폐차 수준이 되었습니다.' },
      ],
    }
  ),
  word('write', '쓰다', 1, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '고대 영어 \'writan\'에서 유래했으며 본래 \'긁다\'나 \'새기다\'라는 의미에서 글자를 적는 행위로 발전했습니다.',
      visual: '하얀 종이 위에 잉크 펜이 사각거리며 검은 글씨를 남기는 모습을 상상해 보세요.',
      soundAlike: '옳다는 뜻의 \'right\'와 발음이 같으므로 \'옳은 내용을 적다\'라고 연상하면 쉽습니다.',
      context: '일기, 편지, 보고서 등 텍스트를 생성하는 모든 창작 활동에 사용됩니다.',
      synonymAntonym: '기록하는 \'record\'와 비슷하지만, 지우는 \'erase\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to form letters, words, or symbols on a surface using a pen, pencil, or keyboard',
      synonyms: ['compose', 'record', 'draft'],
      antonyms: ['erase', 'delete', 'read'],
      exampleSentences: [
        { en: 'Please write your name and phone number on this application form.', ko: '이 신청서에 성함과 전화번호를 기입해 주세요.' },
        { en: 'Authors often spend several hours each morning to produce new chapters.', ko: '작가들은 종종 새 장을 집필하기 위해 매일 아침 몇 시간을 보냅니다.' },
      ],
    }
  ),
  word('wrong', '잘못된', 2, 'adjective',
    ['올바른', '정확한', '정당한', '공정한', '적절한', '합법적인', '도덕적인', '정직한', '타당한', '참된'],
    tips({
      etymology: '고대 노르웨이어 \'rangr\'에서 유래되었으며, 원래 \'구부러진\' 또는 \'비틀린\'이라는 의미에서 \'올바르지 않은\'이라는 뜻으로 발전했습니다.',
      visual: '똑바른 직선이 아닌 제멋대로 꺾여버린 화살표나 가위표(X) 표시를 상상해 보세요.',
      soundAlike: '\'롱(long)\'과 발음이 비슷하지만, \'w\' 발음 때문에 입술을 더 둥글게 모아 \'우롱\'에 가깝게 발음하며 \'틀린\' 상태를 강조하세요.',
      context: '답이 틀렸거나, 도덕적으로 옳지 않은 상태, 또는 무언가가 고장났을 때 사용합니다.',
      synonymAntonym: '올바른을 뜻하는 right와 반대되며, 잘못된을 뜻하는 incorrect와 유사합니다.',
    }),
    {
      definition: 'not correct or true; not in accordance with fact, morality, or accepted standards',
      synonyms: ['incorrect', 'mistaken', 'inaccurate'],
      antonyms: ['right', 'correct', 'accurate'],
      exampleSentences: [
        { en: 'I got the wrong answer on the math test because I miscalculated the formula.', ko: '공식을 잘못 계산해서 수학 시험에서 틀린 답을 적었습니다.' },
        { en: 'It is wrong to take things that do not belong to you.', ko: '자신의 것이 아닌 물건을 가져가는 것은 잘못된 일입니다.' },
      ],
    }
  ),
  word('year', '연', 3, 'noun',
    ['상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미'],
    tips({
      etymology: '고대 영어 gear에서 유래하여 태양이 지구를 한 바퀴 도는 주기를 뜻하게 되었습니다.',
      visual: '달력의 1월부터 12월까지가 한 장에 모두 담긴 커다란 연간 달력을 상상해 보세요.',
      soundAlike: '귀를 뜻하는 ear와 발음이 비슷하지만 앞에 \'y\' 소리를 살짝 섞어 \'이여\'처럼 발음합니다.',
      context: '나이를 말하거나 역사적인 사건이 일어난 시점을 나타낼 때 가장 흔히 사용됩니다.',
      synonymAntonym: '12개월을 뜻하는 twelvemonth와 유사하며, 찰나를 뜻하는 moment와는 대조적입니다.',
    }),
    {
      definition: 'The period of about 365 days required for the earth to make one complete revolution around the sun.',
      synonyms: ['twelvemonth', 'calendar year', 'annum'],
      antonyms: ['moment', 'instant', 'second'],
      exampleSentences: [
        { en: 'The company reported a significant increase in profits compared to the previous twelve-month period.', ko: '그 회사는 지난 회계 연도에 비해 수익이 크게 증가했다고 보고했습니다.' },
        { en: 'Many people set ambitious new goals for themselves at the beginning of every January.', ko: '많은 사람들이 매년 1월 초에 자신을 위한 야심 찬 새로운 목표를 세웁니다.' },
      ],
    }
  ),
  word('yell', '고함치다', 6, 'verb',
    ['속삭이다', '침묵하다', '웃다', '걷다', '관찰하다', '거절하다', '수락하다', '포옹하다', '응시하다', '듣다'],
    tips({
      etymology: '고대 영어 gellan에서 유래되었으며, 이는 동물의 울음소리나 날카로운 비명 소리를 의미했습니다.',
      visual: '화가 난 사람이 입을 크게 벌리고 얼굴이 빨개질 정도로 크게 소리 지르는 모습을 상상해 보세요.',
      soundAlike: '\'옐(Yell)\' 발음이 \'열\'과 비슷하므로, \'열\'이 받아서 소리를 지른다고 연상하면 쉽습니다.',
      context: '스포츠 경기장에서 응원을 하거나, 멀리 있는 사람을 급하게 부를 때 주로 사용됩니다.',
      synonymAntonym: 'shout(소리치다)와 비슷하며, whisper(속삭이다)와는 정반대의 개념입니다.',
    }),
    {
      definition: 'to shout something very loudly, especially because you are angry, excited, or in pain',
      synonyms: ['shout', 'scream', 'holler'],
      antonyms: ['whisper', 'murmur', 'hush'],
      exampleSentences: [
        { en: 'The coach yelled instructions at the players from the sideline.', ko: '코치가 사이드라인에서 선수들에게 지시를 크게 외쳤다.' },
        { en: 'She yelled for help when she saw the fire spreading in the kitchen.', ko: '그녀는 부엌에서 불이 번지는 것을 보고 도움을 요청하며 소리쳤다.' },
      ],
    }
  ),
  word('yesterday', '어제', 1, 'noun',
    ['내일', '오늘', '모레', '그저께', '미래', '과거', '현재', '새벽', '오후', '저녁'],
    tips({
      etymology: '고대 영어 \'giestran\'과 \'dæg\'가 합쳐진 단어로, \'지나간 날\'이라는 의미에서 유래했습니다.',
      visual: '달력에서 오늘 칸 바로 왼쪽 칸에 커다란 X표시가 되어 있는 모습을 상상해 보세요.',
      soundAlike: '\'예스(Yes) 터 데이\'라고 발음하며, \'그래(Yes), 터놓고 말해서 어제(yesterday) 일이야\'라고 외워보세요.',
      context: '일기장이나 과거 시제 문장에서 가장 빈번하게 등장하는 시간 부사입니다.',
      synonymAntonym: '과거를 뜻하는 the past와 유의어 관계이며, 미래를 뜻하는 tomorrow와 반대 개념입니다.',
    }),
    {
      definition: 'the day immediately before the present day',
      synonyms: ['the past', 'recently', 'foretime'],
      antonyms: ['tomorrow', 'future', 'henceforth'],
      exampleSentences: [
        { en: 'Heavy rain flooded the main streets throughout the city yesterday.', ko: '어제 도시 전역의 주요 도로들이 폭우로 침수되었습니다.' },
        { en: 'She finished reading the entire novel late yesterday evening.', ko: '그녀는 어제 늦은 저녁에 소설 전체를 다 읽었습니다.' },
      ],
    }
  ),
  word('yet', '아직', 7, 'adverb',
    ['이미', '벌써', '항상', '결코', '자주', '가끔', '전혀', '드디어', '방금', '나중에'],
    tips({
      etymology: '고대 영어 \'git\'에서 유래하여 \'지금까지\' 또는 \'그럼에도 불구하고\'라는 시간의 지속성을 나타냅니다.',
      visual: '시계 바늘이 목표 지점에 도달하기 직전의 멈춰있는 모습을 상상해 보세요.',
      soundAlike: '우리말 \'옛\'과 발음이 비슷하지만, 의미는 과거가 아닌 \'지금까지도 완료되지 않은 상태\'를 뜻합니다.',
      context: '부정문이나 의문문 끝에 주로 쓰여 기대했던 일이 일어나지 않았음을 강조할 때 사용합니다.',
      synonymAntonym: 'still은 계속되는 상태를, already는 이미 끝난 상태를 나타내어 서로 대비됩니다.',
    }),
    {
      definition: 'up to the present time or until now, often used to describe something that has not happened but is expected',
      synonyms: ['still', 'so far', 'hitherto'],
      antonyms: ['already', 'previously', 'formerly'],
      exampleSentences: [
        { en: 'The final decision has not been announced by the committee.', ko: '위원회는 최종 결정을 아직 발표하지 않았습니다.' },
        { en: 'We have many more miles to travel before we reach our destination.', ko: '목적지에 도착하려면 아직 갈 길이 멉니다.' },
      ],
    }
  ),
  word('yield', '산출하다', 10, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '고대 영어 gieldan에서 유래하여 \'지불하다\'나 \'보답하다\'라는 뜻에서 결과물을 내놓는다는 의미로 발전했습니다.',
      visual: '농부가 잘 익은 사과가 가득 담긴 바구니를 내미는 풍성한 수확의 장면을 상상해 보세요.',
      soundAlike: '\'일드(yield)\'라고 발음하며, 1년 동안 \'일\'해서 \'드\'디어 얻어낸 결과물이라고 기억하세요.',
      context: '농작물 수확량뿐만 아니라 투자에 따른 수익률이나 연구를 통해 얻은 결과를 말할 때도 자주 쓰입니다.',
      synonymAntonym: '생산하는 produce와는 비슷하지만, 저항을 멈추고 굴복하는 surrender와는 반대되는 에너지를 가집니다.',
    }),
    {
      definition: 'to produce or provide a natural, agricultural, or industrial product or a profit',
      synonyms: ['produce', 'generate', 'provide'],
      antonyms: ['consume', 'retain', 'withhold'],
      exampleSentences: [
        { en: 'The new agricultural techniques will significantly increase the annual crop production.', ko: '새로운 농업 기술은 연간 작물 수확량을 크게 늘릴 것입니다.' },
        { en: 'High-quality investments often provide a substantial financial return over time.', ko: '고품질의 투자는 종종 시간이 지남에 따라 상당한 재정적 수익을 산출합니다.' },
      ],
    }
  ),
  word('you', '당신', 2, 'pronoun',
    ['나', '그들', '우리', '그녀', '그', '그것', '누구', '모두', '아무도', '자신'],
    tips({
      etymology: '고대 영어 \'eow\'에서 유래하여 상대방을 지칭하는 2인칭 대명사로 정착되었습니다.',
      visual: '상대방을 가리키는 검지 손가락이나 대화 중인 맞은편 사람의 얼굴을 상상해 보세요.',
      soundAlike: '\'유\' 발음이 \'우유\'의 뒷글자와 비슷하므로, 우유를 건네며 \'You\'라고 말하는 장면을 연상하세요.',
      context: '일상 대화에서 대화의 상대를 지칭할 때 가장 기본적으로 사용되는 단어입니다.',
      synonymAntonym: '격식 있는 표현인 yourself와 유사하며, 화자인 me나 us와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The person or people that the speaker is addressing directly.',
      synonyms: ['yourself', 'thee', 'y\'all'],
      antonyms: ['me', 'myself', 'us'],
      exampleSentences: [
        { en: 'I hope to see you at the party tonight.', ko: '오늘 밤 파티에서 당신을 볼 수 있기를 바랍니다.' },
        { en: 'Can you help me carry these heavy boxes?', ko: '이 무거운 상자들을 옮기는 것을 도와줄 수 있나요?' },
      ],
    }
  ),
  word('young', '젊은', 3, 'adjective',
    ['늙은', '성숙한', '오래된', '노련한', '고대의', '중년의', '시든', '낡은', '부패한', '쇠퇴한'],
    tips({
      etymology: '고대 영어 \'geong\'에서 유래했으며, 생명력이 넘치는 초기 단계를 의미합니다.',
      visual: '갓 피어난 파릇파릇한 새싹이나 뛰어노는 어린아이의 활기찬 모습을 상상하세요.',
      soundAlike: '\'영\'리한 아이들이 \'young\'하다고 소리 내어 읽으며 연결해 보세요.',
      context: '나이가 적은 사람뿐만 아니라, 특정 분야에 갓 입문한 초보자를 묘사할 때도 쓰입니다.',
      synonymAntonym: 'youthful과 함께 외우고, 반대말인 elderly나 aged를 대조하여 기억하세요.',
    }),
    {
      definition: 'being in the early stage of life, growth, or development',
      synonyms: ['youthful', 'juvenile', 'adolescent'],
      antonyms: ['elderly', 'aged', 'mature'],
      exampleSentences: [
        { en: 'The company is looking for talented individuals with fresh ideas.', ko: '그 회사는 신선한 아이디어를 가진 재능 있는 젊은 인재들을 찾고 있습니다.' },
        { en: 'Seedlings need plenty of water and sunlight to grow strong.', ko: '어린 묘목들이 튼튼하게 자라려면 충분한 물과 햇빛이 필요합니다.' },
      ],
    }
  ),
  word('zebra', '얼룩말', 1, 'noun',
    ['사자', '호랑이', '코끼리', '기린', '하마', '코뿔소', '표범', '치타', '사슴', '당나귀'],
    tips({
      etymology: '포르투갈어에서 유래했으며 아프리카의 야생 말을 지칭하는 단어에서 왔습니다.',
      visual: '검은색과 흰색의 강렬한 줄무늬 옷을 입고 초원을 달리는 말의 모습을 상상하세요.',
      soundAlike: '지브라(Zebra)의 \'지\'를 줄무늬의 \'줄\'과 연결해 \'줄무늬 브라보\'라고 기억해 보세요.',
      context: '동물원이나 아프리카 사파리 여행을 주제로 한 대화에서 자주 등장하는 동물 이름입니다.',
      synonymAntonym: '말과 비슷하지만 줄무늬가 있는 것이 특징이며, 무늬가 없는 일반 말과는 대조됩니다.',
    }),
    {
      definition: 'An African wild horse with distinctive black and white striped markings and a coarse erect mane.',
      synonyms: ['equid', 'striped horse', 'wild ass'],
      antonyms: ['predator', 'carnivore', 'domestic cat'],
      exampleSentences: [
        { en: 'The herd of striped animals moved across the savanna in search of fresh grass.', ko: '줄무늬 동물 무리가 신선한 풀을 찾아 사바나를 가로질러 이동했습니다.' },
        { en: 'Each individual has a unique pattern of lines that functions like a human fingerprint.', ko: '각 개체는 인간의 지문처럼 기능하는 고유한 선 패턴을 가지고 있습니다.' },
      ],
    }
  ),
  word('zone', '대', 4, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '그리스어 \'zone\'에서 유래되었으며 원래는 \'허리띠\'나 \'띠\'를 의미하여 특정 구역을 두르는 선을 뜻합니다.',
      visual: '지도 위에 형광펜으로 특정 목적을 위해 동그라미를 쳐놓은 구역을 상상해 보세요.',
      soundAlike: '발음이 \'조온\'과 비슷하므로, 아주 \'좋은\' 자리를 잡기 위해 구역을 나눈다고 생각하면 쉽습니다.',
      context: '도시 계획에서 주거 지역, 상업 지역 등을 나눌 때 가장 흔하게 사용되는 단어입니다.',
      synonymAntonym: 'area나 region과 비슷하지만, zone은 보통 특정한 목적이나 규칙이 적용되는 구역을 뜻합니다.',
    }),
    {
      definition: 'A specific area or region distinguished from adjacent parts by a particular characteristic or function.',
      synonyms: ['sector', 'region', 'district'],
      antonyms: ['whole', 'entirety', 'universe'],
      exampleSentences: [
        { en: 'The city council designated this neighborhood as a residential area.', ko: '시의회는 이 이웃 지역을 주거 구역으로 지정했습니다.' },
        { en: 'Athletes often describe being in a state of extreme focus during a game.', ko: '운동선수들은 종종 경기 중에 극도로 집중한 상태에 빠지는 것을 설명하곤 합니다.' },
      ],
    }
  ),
];
