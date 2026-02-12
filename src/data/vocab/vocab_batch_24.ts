import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch24: VocabItem[] = [
  word('autobiography', '자서전', 4, 'noun',
    ['전기', '소설', '수필', '회고록', '일기', '편지', '논문', '평전', '역사서', '기행문'],
    tips({
      etymology: '그리스어 auto(자신), bio(생명), graphy(기록)가 합쳐져 스스로의 삶을 기록한다는 뜻이 됩니다.',
      visual: '유명 인사가 책상에 앉아 자신의 어린 시절 사진을 보며 펜으로 글을 쓰는 모습을 상상해 보세요.',
      soundAlike: '오토(auto)가 들어가는 \'자동차\'처럼, 스스로 움직여 써 내려가는 기록이라고 기억하면 쉽습니다.',
      context: '주로 유명 정치인이나 연예인이 자신의 성공담과 고난을 직접 서술할 때 이 단어를 사용합니다.',
      synonymAntonym: '타인이 쓴 전기인 biography와 대조되며, 개인적인 기록인 memoirs와 유사한 맥락에서 쓰입니다.',
    }),
    {
      definition: 'An account of a person\'s life written by that person themselves.',
      synonyms: ['memoirs', 'life story', 'personal history'],
      antonyms: ['biography', 'fiction', 'fantasy'],
      exampleSentences: [
        { en: 'The retired athlete decided to publish his own story to inspire young players.', ko: '그 은퇴한 운동선수는 젊은 선수들에게 영감을 주기 위해 자신의 자서전을 출간하기로 결심했다.' },
        { en: 'Reading her detailed account of the war gave me a new perspective on history.', ko: '그녀가 쓴 전쟁에 관한 상세한 자서전을 읽고 나는 역사에 대한 새로운 관점을 갖게 되었다.' },
      ],
    }
  ),
  word('automobile', '자동차', 5, 'noun',
    ['버스', '트럭', '오토바이', '자전거', '기차', '비행기', '배', '헬리콥터', '스쿠터', '전동차'],
    tips({
      etymology: '그리스어 auto(스스로)와 라틴어 mobilis(움직이는)가 결합되어 스스로 움직이는 탈것을 뜻합니다.',
      visual: '엔진을 장착하고 네 바퀴로 도로 위를 매끄럽게 달리는 세단의 모습을 상상해 보세요.',
      soundAlike: '오토(auto)가 모빌(mobile)처럼 움직인다고 발음하며 기억하면 쉽습니다.',
      context: '일상적인 대화에서는 car를 주로 쓰지만, 산업이나 공식 문서에서는 이 단어를 더 선호합니다.',
      synonymAntonym: 'car나 vehicle과 비슷하지만, 걷는 사람을 뜻하는 pedestrian과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A passenger vehicle designed for operation on ordinary roads and typically having four wheels and an internal combustion engine.',
      synonyms: ['car', 'vehicle', 'motorcar'],
      antonyms: ['pedestrian', 'bicycle', 'aircraft'],
      exampleSentences: [
        { en: 'The manufacturing plant produces thousands of units for the global market every month.', ko: '그 제조 공장은 매달 세계 시장을 위해 수천 대의 차량을 생산합니다.' },
        { en: 'Henry Ford revolutionized the industry by making the personal transport affordable for everyone.', ko: '헨리 포드는 개인용 운송 수단을 모든 사람이 살 수 있는 가격으로 만들어 산업에 혁명을 일으켰습니다.' },
      ],
    }
  ),
  word('available', '이용 가능한', 6, 'adjective',
    ['불가능한', '매진된', '비어 있는', '사용 중인', '제한된', '금지된', '닫힌', '없는', '부재한', '접근 불가한'],
    tips({
      etymology: '라틴어 valere(가치가 있다, 힘이 있다)에서 유래하여, 어떤 것을 쓸 수 있는 상태나 힘이 있음을 뜻합니다.',
      visual: '호텔 입구에 \'Vacancy(빈 방 있음)\' 불이 켜져 있어 언제든 들어갈 수 있는 모습을 상상하세요.',
      soundAlike: '\'어베일러블\'은 \'어, 배 일러(일러서) 볼 수 있네\'처럼 배가 일찍 도착해 이용 가능한 상황으로 연상해 보세요.',
      context: '식당에서 빈 테이블이 있거나, 상점에서 재고가 있을 때, 혹은 사람이 시간이 날 때 두루 쓰입니다.',
      synonymAntonym: '무언가를 얻을 수 있는(accessible) 상태와 반대로 이미 꽉 차서 바쁜(occupied) 상태를 대조해 보세요.',
    }),
    {
      definition: 'ready for use, at hand, or easily obtainable; not busy and free to talk or help',
      synonyms: ['accessible', 'obtainable', 'vacant'],
      antonyms: ['occupied', 'unavailable', 'engaged'],
      exampleSentences: [
        { en: 'Is there a room for two people for tonight?', ko: '오늘 밤에 2인용 방이 남아 있나요?' },
        { en: 'The manager is not currently to take your call.', ko: '매니저님은 현재 통화가 불가능한 상태입니다.' },
      ],
    }
  ),
  word('avenue', '가로수길', 7, 'noun',
    ['골목', '산길', '고속도로', '교량', '터널', '광장', '공원', '주차장', '건물', '다리'],
    tips({
      etymology: '라틴어 venire(오다)에서 유래하여 \'어딘가로 도달하는 길\'이라는 의미를 담고 있습니다.',
      visual: '양옆으로 울창한 나무들이 줄지어 서 있는 넓고 곧은 도로를 상상해 보세요.',
      soundAlike: '\'애비뉴\'는 유명한 쇼핑 거리나 패션의 거리 이름에 자주 쓰여 익숙한 소리입니다.',
      context: '도시 계획에서 남북으로 뻗은 큰 길을 주로 avenue라고 부르며, 비유적으로는 해결 방법이나 수단을 뜻하기도 합니다.',
      synonymAntonym: 'boulevard나 street와 비슷하지만, 가로수가 있는 풍경은 avenue만의 특징입니다.',
    }),
    {
      definition: 'A wide urban waterway or road, typically lined with trees on both sides.',
      synonyms: ['boulevard', 'thoroughfare', 'broadway'],
      antonyms: ['alley', 'lane', 'dead-end'],
      exampleSentences: [
        { en: 'The city is famous for its beautiful avenue lined with ancient oak trees.', ko: '그 도시는 고대 참나무들이 줄지어 서 있는 아름다운 가로수길로 유명합니다.' },
        { en: 'We walked down the main avenue to reach the central library.', ko: '우리는 중앙 도서관에 가기 위해 중심가 대로를 따라 걸었습니다.' },
      ],
    }
  ),
  word('avoid', '피하다', 4, 'verb',
    ['직면하다', '맞서다', '부딪히다', '추구하다', '직시하다', '조우하다', '대면하다', '접촉하다', '감수하다', '연루되다'],
    tips({
      etymology: '라틴어 \'ex(밖으로)\'와 \'vacuus(비어있는)\'에서 유래하여, 어떤 장소를 비우거나 벗어난다는 느낌에서 \'피하다\'가 되었습니다.',
      visual: '길을 걷다가 커다란 물웅덩이를 발견하고 옆으로 슥 돌아가는 모습을 상상해 보세요.',
      soundAlike: '\'어보이드\' 발음이 \'어, 보이드(보이네)?\' 하고 위험한 것을 미리 보고 피하는 상황을 연상시킵니다.',
      context: '교통 체증을 피하거나, 건강에 해로운 음식을 멀리할 때 주로 사용되는 동사입니다.',
      synonymAntonym: 'shun과 함께 외우면 회피의 뉘앙스가 강해지고, confront와 비교하면 정반대의 태도를 익힐 수 있습니다.',
    }),
    {
      definition: 'to stay away from someone or something, or to prevent something bad from happening',
      synonyms: ['shun', 'evade', 'dodge'],
      antonyms: ['confront', 'face', 'seek'],
      exampleSentences: [
        { en: 'You should take the back road to bypass the heavy traffic on the highway.', ko: '고속도로의 심한 교통 체증을 피하려면 뒷길로 가야 합니다.' },
        { en: 'He tried to stay away from making eye contact with the person he had argued with.', ko: '그는 자신과 다퉜던 사람과 눈을 마주치는 것을 피하려고 노력했습니다.' },
      ],
    }
  ),
  word('await', '기다리다', 5, 'verb',
    ['서두르다', '재촉하다', '포기하다', '그만두다', '미루다', '무시하다', '떠나다', '가다', '오다', '시작하다'],
    tips({
      etymology: '고대 프랑스어 \'agaitier\'에서 유래했으며, \'a(향하여)\'와 \'wait(지켜보다)\'가 결합되어 누군가나 무언가를 지켜보며 기다린다는 의미를 가집니다.',
      visual: '공항 입구에서 환영 피켓을 들고 소중한 사람이 나타나기를 간절히 눈을 떼지 않고 기다리는 모습을 상상해 보세요.',
      soundAlike: '\'어웨이트\'는 \'어, 웨이트(Wait)!\'와 발음이 비슷합니다. 누군가에게 \'잠깐만 기다려!\'라고 말하는 상황을 떠올리면 쉽습니다.',
      context: '주로 격식 있는 상황이나 문어체에서 사용되며, 결과, 소식, 혹은 중요한 손님을 기다릴 때 자주 쓰입니다.',
      synonymAntonym: 'wait for와 의미가 같지만 await 뒤에는 전치사 for를 쓰지 않고 바로 목적어가 옵니다. 반대로 서둘러 떠나는 것은 depart입니다.',
    }),
    {
      definition: 'to stay in a place or remain in a state of expectation until a particular event occurs or someone arrives',
      synonyms: ['anticipate', 'expect', 'bide'],
      antonyms: ['abandon', 'depart', 'proceed'],
      exampleSentences: [
        { en: 'The excited fans gathered at the airport to the arrival of their favorite pop star.', ko: '열광적인 팬들이 자신이 가장 좋아하는 팝스타의 도착을 기다리기 위해 공항에 모였다.' },
        { en: 'A warm welcome and a delicious meal the weary travelers at the end of their long journey.', ko: '긴 여정의 끝에 지친 여행자들을 따뜻한 환영과 맛있는 식사가 기다리고 있었다.' },
      ],
    }
  ),
  word('awake', '깬', 6, 'adjective',
    ['잠든', '졸린', '의식 없는', '혼수 상태의', '졸음이 오는', '꾸벅거리는', '반쯤 잠든', '나른한', '피곤한', '기면 상태의'],
    tips({
      etymology: '고대 영어 \'awacan\'에서 유래하여, 잠에서 깨어나 활동적인 상태로 변하는 과정을 담고 있습니다.',
      visual: '캄캄한 밤에 모두가 잠든 사이 혼자 눈을 번쩍 뜨고 시계를 바라보는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어웨이크\'이므로, 멀리서 \'어이, 웨이크(wake)업!\' 하고 깨우는 소리를 연상하면 쉽습니다.',
      context: '주로 서술적 형용사로 쓰여 \'stay awake(깨어 있다)\'처럼 주어의 상태를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '잠들지 않은 상태인 conscious와 반대되는 상태인 asleep을 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'not sleeping; conscious and alert after a period of rest',
      synonyms: ['conscious', 'alert', 'vigilant'],
      antonyms: ['asleep', 'dormant', 'unconscious'],
      exampleSentences: [
        { en: 'I was still wide awake when the sun began to rise this morning.', ko: '오늘 아침 해가 뜨기 시작했을 때 나는 여전히 정신이 초롱초롱하게 깨어 있었다.' },
        { en: 'The loud noise from the street kept me awake all night long.', ko: '거리에서 나는 시끄러운 소음 때문에 밤새 잠을 이루지 못했다.' },
      ],
    }
  ),
  word('award', '상', 7, 'noun',
    ['벌', '징계', '비난', '경고', '불합격', '실패', '손실', '패널티', '과태료', '문책'],
    tips({
      etymology: '라틴어 \'ex-\'(밖으로)와 \'wardare\'(보다)가 합쳐져, 신중하게 판단하여 밖으로 내보이는 \'결정\'이나 \'보상\'을 의미하게 되었습니다.',
      visual: '화려한 시상식 무대 위에서 황금빛 트로피를 높게 들어 올리며 환하게 웃는 배우의 모습을 상상해 보세요.',
      soundAlike: '\'어워드\'라고 발음하며, 아카데미 시상식을 뜻하는 \'Academy Awards\'를 떠올리면 기억하기 쉽습니다.',
      context: '영화제, 스포츠 경기, 학업 성취 등 뛰어난 성과를 공식적으로 인정받을 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'prize나 honor와는 비슷한 뜻을 가지지만, penalty나 punishment와는 정반대의 상황에서 쓰입니다.',
    }),
    {
      definition: 'a prize or other mark of recognition given in honor of a specific achievement',
      synonyms: ['prize', 'trophy', 'honor'],
      antonyms: ['penalty', 'punishment', 'fine'],
      exampleSentences: [
        { en: 'The young scientist received a prestigious recognition for her groundbreaking research.', ko: '그 젊은 과학자는 획기적인 연구로 권위 있는 상을 받았습니다.' },
        { en: 'The committee decided to grant the scholarship to the most deserving student.', ko: '위원회는 가장 자격 있는 학생에게 장학금 수여를 결정했습니다.' },
      ],
    }
  ),
  word('away', '떨어져', 1, 'adverb',
    ['가까이', '붙어서', '나란히', '함께', '인접하여', '바로 옆에', '연결되어', '한데', '밀착하여', '동반하여'],
    tips({
      etymology: '고대 영어 \'on weg\'에서 유래했으며, \'길 위에(on the way)\' 있다가 점차 \'멀리 떠나다\'라는 의미로 발전했습니다.',
      visual: '집에서 멀리 떨어진 곳으로 여행 가방을 들고 걸어가는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '\'어웨이\' 발음이 \'어디(웨) 가니?\'와 비슷하게 들린다고 생각하며 멀어지는 상황을 연상하세요.',
      context: '축구 경기에서 홈 경기가 아닌 상대 팀의 경기장에서 하는 경기를 \'어웨이(away) 경기\'라고 부릅니다.',
      synonymAntonym: '가까이 있다는 뜻의 near와 반대되며, 멀리 있다는 뜻의 afar와 비슷하게 쓰입니다.',
    }),
    {
      definition: 'to a different place or at a distance from a particular person or point',
      synonyms: ['afar', 'elsewhere', 'remote'],
      antonyms: ['near', 'nearby', 'close'],
      exampleSentences: [
        { en: 'The beach is only a few miles from here.', ko: '해변은 여기서 불과 몇 마일 떨어져 있습니다.' },
        { en: 'Please stay from the edge of the cliff.', ko: '절벽 끝에서 떨어져서 머물러 주세요.' },
      ],
    }
  ),
  word('awesome', '대단한', 4, 'adjective',
    ['형편없는', '초라한', '보잘것없는', '평범한', '지루한', '끔찍한', '사소한', '엉망인', '부족한', '불쾌한'],
    tips({
      etymology: '경외심을 뜻하는 awe에 가득 참을 뜻하는 some이 붙어, 본래는 압도적인 위엄을 뜻했습니다.',
      visual: '거대한 그랜드 캐니언 앞에 서서 입을 다물지 못하고 감탄하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어~ 썸(some)!\' 하고 무언가 대단한 것을 발견해 감탄하는 소리와 비슷합니다.',
      context: '일상 대화에서 아주 멋진 물건이나 기분 좋은 소식을 들었을 때 감탄사처럼 자주 쓰입니다.',
      synonymAntonym: '놀라운 감정을 나타내는 amazing과 반대로 형편없음을 뜻하는 terrible을 함께 기억하세요.',
    }),
    {
      definition: 'inspiring great admiration, apprehension, or fear; extremely good or impressive.',
      synonyms: ['incredible', 'magnificent', 'breathtaking'],
      antonyms: ['unimpressive', 'ordinary', 'dreadful'],
      exampleSentences: [
        { en: 'The view from the top of the mountain was absolutely breathtaking and left us speechless.', ko: '산 정상에서 본 풍경은 정말 대단해서 우리를 말문이 막히게 만들었다.' },
        { en: 'You did a fantastic job on the project; your performance was truly remarkable.', ko: '프로젝트에서 정말 멋진 일을 해냈어요. 당신의 성과는 진심으로 대단했습니다.' },
      ],
    }
  ),
  word('awful', '끔찍한', 5, 'adjective',
    ['훌륭한', '멋진', '유쾌한', '아름다운', '만족스러운', '완벽한', '탁월한', '경쾌한', '상쾌한', '기쁜'],
    tips({
      etymology: '본래 \'경외심(awe)이 가득한(full)\'이라는 뜻에서 시작되었으나, 현대에는 부정적인 의미인 \'끔찍한\'으로 굳어졌습니다.',
      visual: '상한 음식을 먹고 얼굴을 찌푸리며 \'오~ 풀(awful) 냄새!\'라고 외치는 장면을 상상해 보세요.',
      soundAlike: '\'어우, 풀(awful)만 먹으라니 끔찍해\'라고 발음과 연결해 기억하면 쉽습니다.',
      context: '날씨, 음식, 기분 등이 최악일 때 원어민들이 가장 흔하게 사용하는 형용사입니다.',
      synonymAntonym: 'terrible과 비슷한 느낌이며, 반대로 아주 좋은 상태는 wonderful이라고 합니다.',
    }),
    {
      definition: 'extremely bad, unpleasant, or of very low quality',
      synonyms: ['terrible', 'dreadful', 'horrible'],
      antonyms: ['wonderful', 'excellent', 'pleasant'],
      exampleSentences: [
        { en: 'The traffic was so bad that I had an encounter with an unpleasant delay.', ko: '교통 체증이 너무 심해서 정말 끔찍한 지연을 겪었습니다.' },
        { en: 'I felt terrible after eating that spoiled food last night.', ko: '어젯밤에 그 상한 음식을 먹고 나서 기분이 정말 끔찍했습니다.' },
      ],
    }
  ),
  word('awkward', '어색한', 6, 'adjective',
    ['능숙한', '자연스러운', '우아한', '편안한', '정교한', '민첩한', '세련된', '적절한', '명확한', '유연한'],
    tips({
      etymology: '고대 영어 \'afug\'에서 유래하여 \'잘못된 방향으로 향하는\'이라는 의미에서 서투르고 어색하다는 뜻이 되었습니다.',
      visual: '첫 데이트에서 서로 할 말이 없어 천장을 보거나 신발 끝만 만지작거리는 침묵의 순간을 상상해 보세요.',
      soundAlike: '\'아쿠아(aqua) 드\'라고 발음하며 물속에서 걷는 것처럼 몸이 무겁고 움직임이 부자연스러운 모습을 연상하세요.',
      context: '사회적 관계에서 서툴거나, 물건을 다루는 솜씨가 투박할 때, 혹은 가구가 방에 맞지 않아 배치가 이상할 때 주로 쓰입니다.',
      synonymAntonym: 'clumsy와 같이 서툰 느낌을 주는 단어와 친해지고, 반대로 매끄러운 graceful과 대조하며 익히세요.',
    }),
    {
      definition: 'causing or feeling uneasy embarrassment or lack of social skill and comfort',
      synonyms: ['clumsy', 'embarrassing', 'uncomfortable'],
      antonyms: ['graceful', 'skillful', 'natural'],
      exampleSentences: [
        { en: 'There was an uncomfortable silence after he made that inappropriate joke.', ko: '그가 부적절한 농담을 던진 후 어색한 침묵이 흘렀다.' },
        { en: 'The heavy box was very difficult to carry because of its unusual and bulky shape.', ko: '그 무거운 상자는 모양이 크고 특이해서 운반하기가 매우 까다롭고 불편했다.' },
      ],
    }
  ),
  word('background', '배경', 2, 'noun',
    ['전경', '앞면', '중심', '초점', '표면', '윤곽', '테두리', '한가운데', '앞장', '앞부분'],
    tips({
      etymology: '뒤를 뜻하는 back과 땅이나 토대를 뜻하는 ground가 합쳐져 \'뒤에 깔린 바탕\'을 의미합니다.',
      visual: '사진을 찍을 때 주인공 뒤로 흐릿하게 보이는 산이나 건물의 풍경을 상상해 보세요.',
      soundAlike: '백(back)그라운드: 흰색(백) 종이를 바닥(ground)에 깔아 배경을 만드는 장면을 연상하세요.',
      context: '인물의 성장 배경이나 학력을 설명할 때도 이 단어를 사용하여 그 사람의 기초 정보를 나타냅니다.',
      synonymAntonym: 'setting은 주변 환경을 뜻하며, foreground는 눈앞에 바로 보이는 전경을 뜻합니다.',
    }),
    {
      definition: 'the area or conditions that serve as a setting for a person, thing, or event',
      synonyms: ['setting', 'environment', 'context'],
      antonyms: ['foreground', 'front', 'center'],
      exampleSentences: [
        { en: 'The mountains in the distance provided a beautiful setting for the photograph.', ko: '멀리 보이는 산들이 사진을 위한 아름다운 배경이 되어 주었습니다.' },
        { en: 'The recruiter asked about her educational and professional experience during the interview.', ko: '채용 담당자는 면접 중에 그녀의 교육 및 직업적 배경에 대해 물었습니다.' },
      ],
    }
  ),
  word('bad', '나쁜', 3, 'adjective',
    ['좋은', '훌륭한', '탁월한', '우수한', '양호한', '건강한', '유익한', '선한', '멋진', '기쁜'],
    tips({
      etymology: '고대 영어 \'baeddel\'에서 유래하여 본래 성질이 좋지 않거나 결함이 있는 상태를 의미합니다.',
      visual: '상한 사과나 깨진 장난감을 보며 실망하는 표정을 지어보세요.',
      soundAlike: '침대에 눕는 \'bed\'와 발음이 비슷하지만, 나쁜 상황에서는 입을 더 크게 벌려 \'bad\'라고 발음합니다.',
      context: '음식의 맛이 없거나, 날씨가 흐리거나, 행동이 도덕적으로 옳지 않을 때 두루 쓰입니다.',
      synonymAntonym: 'good(좋은)의 반대말로, 끔찍한 상태를 뜻하는 terrible과 함께 기억하세요.',
    }),
    {
      definition: 'of poor quality, lacking skill, or causing harm and unpleasantness',
      synonyms: ['poor', 'unpleasant', 'terrible'],
      antonyms: ['good', 'excellent', 'beneficial'],
      exampleSentences: [
        { en: 'The weather was so unpleasant that we decided to stay home.', ko: '날씨가 너무 좋지 않아서 우리는 집에 머물기로 결정했다.' },
        { en: 'Eating too much sugar is harmful for your teeth.', ko: '설탕을 너무 많이 먹는 것은 치아에 해롭다.' },
      ],
    }
  ),
  word('ban', '금지', 7, 'noun',
    ['허용', '승인', '허가', '장려', '권장', '촉진', '지지', '허락', '인가', '동의'],
    tips({
      etymology: '고대 영어 bannan(소환하다, 선포하다)에서 유래하여, 공적으로 금지하는 선언이라는 의미로 발전했습니다.',
      visual: '출입구에 커다란 빨간색 \'X\' 표시가 그려진 금지 표지판을 떠올려 보세요.',
      soundAlike: '발음이 \'밴\'이므로, 나쁜 행동을 한 사람을 \'밴(차)\'에 태워 쫓아내고 출입을 막는 장면을 연상하세요.',
      context: '정부 정책이나 공공장소에서의 특정 행위를 법적으로 막을 때 주로 사용되는 명사입니다.',
      synonymAntonym: 'prohibition과 유사하며, 반대로 자유롭게 허용하는 permission과는 대조적입니다.',
    }),
    {
      definition: 'an official or legal prohibition of a particular action or item',
      synonyms: ['prohibition', 'restriction', 'embargo'],
      antonyms: ['permission', 'allowance', 'authorization'],
      exampleSentences: [
        { en: 'The government imposed a strict ban on smoking in all public parks.', ko: '정부는 모든 공공 공원에서의 흡연을 엄격히 금지했습니다.' },
        { en: 'There is a temporary ban on the import of certain foreign goods.', ko: '특정 외국 물품의 수입에 대해 일시적인 금지 조치가 내려졌습니다.' },
      ],
    }
  ),
  word('band', '그룹', 1, 'noun',
    ['솔로', '개인', '단독', '혼자', '이인조', '삼인조', '독주', '독창', '해체', '파편'],
    tips({
      etymology: '중세 프랑스어 \'bande\'에서 유래했으며, 무언가를 하나로 묶어주는 끈이나 결속을 의미합니다.',
      visual: '여러 명의 연주자가 무대 위에서 서로 호흡을 맞추며 악기를 연주하는 모습을 상상해 보세요.',
      soundAlike: '머리에 두르는 \'헤어밴드\'나 손목의 \'밴드\'처럼 무언가를 하나로 묶어주는 느낌을 기억하세요.',
      context: '음악가들의 모임뿐만 아니라 고무줄처럼 띠 형태의 물건을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: '여러 명이 모인 group과는 비슷하지만, 혼자 활동하는 solo와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A group of people who have a common interest or purpose, especially musicians who play together.',
      synonyms: ['group', 'ensemble', 'orchestra'],
      antonyms: ['individual', 'soloist', 'single'],
      exampleSentences: [
        { en: 'The rock musicians decided to form a new musical group together.', ko: '그 록 음악가들은 함께 새로운 음악 그룹을 결성하기로 결정했다.' },
        { en: 'She used a rubber strip to hold all the loose pencils together.', ko: '그녀는 흩어진 연필들을 하나로 묶기 위해 고무줄을 사용했다.' },
      ],
    }
  ),
  word('bang', '강타', 4, 'noun',
    ['속삭임', '조용함', '부드러운 접촉', '살짝 건드림', '쓰다듬기', '가볍게 치기', '침묵', '고요', '나긋한 소리', '은은한 소리'],
    tips({
      etymology: '큰 소리를 흉내 낸 의성어에서 유래하여 충격이나 폭발음을 의미하게 되었습니다.',
      visual: '망치로 못을 세게 내리칠 때 나는 커다란 소리와 불꽃을 상상해 보세요.',
      soundAlike: '풍선이 \'빵!\' 하고 터지는 소리와 발음이 매우 유사합니다.',
      context: '문이 바람에 쾅 닫히거나 물건이 바닥에 세게 떨어질 때 주로 사용됩니다.',
      synonymAntonym: '강한 충격을 뜻하는 blow와 반대로 아주 미세한 소리인 whisper를 비교해 보세요.',
    }),
    {
      definition: 'A sudden loud noise, often caused by an explosion or a heavy object hitting something hard.',
      synonyms: ['thud', 'crash', 'blow'],
      antonyms: ['whisper', 'silence', 'murmur'],
      exampleSentences: [
        { en: 'The door closed with a loud noise that startled everyone in the hallway.', ko: '문이 큰 소리를 내며 닫혀 복도에 있던 모든 사람을 놀라게 했다.' },
        { en: 'He gave his knee a painful knock against the edge of the wooden table.', ko: '그는 나무 탁자 모서리에 무릎을 세게 부딪혀 통증을 느꼈다.' },
      ],
    }
  ),
  word('bank', '둑', 2, 'noun',
    ['강바닥', '수심', '한가운데', '호수 밑', '물속', '제방 붕괴', '범람지', '늪', '빈터', '건널목'],
    tips({
      etymology: '고대 노르웨이 어원인 \'bakki\'에서 유래하여, 물가에 솟아오른 땅이나 언덕을 의미하게 되었습니다.',
      visual: '강물이 넘치지 않게 흙을 높게 쌓아 올린 긴 언덕의 모습을 상상해 보세요.',
      soundAlike: '돈을 맡기는 \'은행\'과 발음이 같지만, 강가에 있는 \'둑\'도 같은 단어를 씁니다.',
      context: '낚시를 하거나 산책을 할 때 강가 옆에 돋아난 지형을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: '유사한 의미인 embankment와 대조적인 지형인 valley를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'The rising ground bordering a river, lake, or sea, or a long pile of earth or snow.',
      synonyms: ['embankment', 'shore', 'mound'],
      antonyms: ['abyss', 'hollow', 'trench'],
      exampleSentences: [
        { en: 'We sat on the grassy slope by the river and watched the boats pass by.', ko: '우리는 강가 풀이 우거진 둑에 앉아 배들이 지나가는 것을 구경했다.' },
        { en: 'The heavy rain caused the water to overflow its natural borders.', ko: '폭우로 인해 강물이 자연적인 제방 위로 넘쳐흘렀다.' },
      ],
    }
  ),
  word('bankrupt', '파산자', 9, 'noun',
    ['부자', '재력가', '채권자', '대부업자', '백만장자', '갑부', '재벌', '유산 상속인', '성공한 사업가', '재정 안정자'],
    tips({
      etymology: '이탈리아어 \'banca rotta\'에서 유래했으며, \'부서진(rupt) 은행(bank)의 탁자\'라는 뜻에서 돈을 갚을 능력이 없는 상태를 의미하게 되었습니다.',
      visual: '텅 빈 금고 앞에 망연자실하게 앉아 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'뱅크(bank)가 럽트(rupt-터지다)\'라고 발음하며 은행 계좌가 터져서 잔고가 하나도 없는 상황을 연상하세요.',
      context: '법원에서 공식적으로 채무 상환 불능 판결을 받은 개인이나 기업을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'insolvent와 같은 유의어는 재정적 파탄을, solvent와 같은 반의어는 지불 능력이 충분함을 나타냅니다.',
    }),
    {
      definition: 'a person or organization that has been declared by a court to be unable to pay their debts',
      synonyms: ['insolvent', 'debtor', 'pauper'],
      antonyms: ['creditor', 'millionaire', 'benefactor'],
      exampleSentences: [
        { en: 'The court officially declared the former tycoon a bankrupt after his investments failed.', ko: '투자가 실패한 후 법원은 그 전직 거물에게 공식적으로 파산 선고를 내렸다.' },
        { en: 'As a bankrupt, he had to surrender all his remaining assets to the liquidators.', ko: '파산자로서 그는 남은 자산 모두를 청산인에게 넘겨야 했다.' },
      ],
    }
  ),
  word('bar', '막대기', 5, 'noun',
    ['공', '링', '끈', '시트', '판', '상자', '구', '원통', '나사', '고리'],
    tips({
      etymology: '라틴어 \'barra\'에서 유래하여 무언가를 가로막거나 지탱하는 단단한 물체를 뜻합니다.',
      visual: '철창이나 감옥의 창살, 혹은 초콜릿 바처럼 길쭉하고 딱딱한 형태를 상상해 보세요.',
      soundAlike: '술을 마시는 \'바\' 카운터에 길게 놓인 나무 판자를 떠올리면 쉽습니다.',
      context: '운동 기구인 철봉이나 문을 걸어 잠그는 빗장 등 다양한 도구의 명칭으로 쓰입니다.',
      synonymAntonym: 'rod나 pole과 비슷하지만, 구멍이나 틈인 gap과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a long rigid piece of metal, wood, or other material, typically used as a fastener, barrier, or structural support',
      synonyms: ['rod', 'pole', 'shaft'],
      antonyms: ['gap', 'opening', 'hole'],
      exampleSentences: [
        { en: 'He used a heavy iron rod to pry the door open.', ko: '그는 문을 억지로 열기 위해 무거운 철제 막대기를 사용했습니다.' },
        { en: 'The gymnast grabbed the horizontal rail firmly before starting her routine.', ko: '체조 선수는 루틴을 시작하기 전 수평 바를 단단히 잡았습니다.' },
      ],
    }
  ),
  word('bare', '벌거벗은', 6, 'adjective',
    ['옷입은', '가린', '덮인', '쌓인', '장식된', '포장된', '둘러싼', '가득한', '풍부한', '넉넉한'],
    tips({
      etymology: '고대 영어 bær에서 유래하여 \'벌거벗은\' 혹은 \'아무것도 없는\' 상태를 의미하게 되었습니다.',
      visual: '가구 하나 없는 텅 빈 방이나 잎사귀가 다 떨어진 겨울 나무의 가지를 상상해 보세요.',
      soundAlike: '곰을 뜻하는 bear와 발음이 같지만, bare는 \'드러내다\'라는 의미의 형용사임을 기억하세요.',
      context: '주로 신체 부위가 드러나 있거나 벽, 산 등이 아무것도 없이 삭막할 때 자주 쓰입니다.',
      synonymAntonym: 'naked와 유사하며, 무언가로 덮여 있는 상태인 covered와는 반대되는 개념입니다.',
    }),
    {
      definition: 'not covered by any clothing, shoes, or decoration; empty of the usual contents',
      synonyms: ['naked', 'exposed', 'vacant'],
      antonyms: ['covered', 'clothed', 'adorned'],
      exampleSentences: [
        { en: 'The children ran across the beach with bare feet.', ko: '아이들은 맨발로 해변을 가로질러 뛰어갔다.' },
        { en: 'The cupboard was completely bare, with no food left inside.', ko: '찬장은 안에 음식이 전혀 남지 않은 채 완전히 비어 있었다.' },
      ],
    }
  ),
  word('bargain', '매매', 7, 'noun',
    ['선물', '증여', '몰수', '압수', '기부', '무상 제공', '할인 없음', '정가', '고가', '기부금'],
    tips({
      etymology: '고대 프랑스어 bargaignier(거래하다)에서 유래하여, 서로 가격을 밀고 당기며 합의에 이르는 과정을 뜻합니다.',
      visual: '시장에서 상인과 손님이 손을 맞잡으며 기분 좋게 물건값을 결정하는 장면을 상상해 보세요.',
      soundAlike: '바겐세일(bargain sale)할 때의 그 \'바겐\'입니다. 싸게 잘 샀을 때 쓰는 단어라고 기억하세요.',
      context: '주로 예상보다 저렴한 가격에 물건을 샀을 때나, 양측이 유리한 조건으로 계약을 맺을 때 사용됩니다.',
      synonymAntonym: 'deal과 유사하며, 정가보다 비싸게 주고 산 rip-off와는 반대되는 개념입니다.',
    }),
    {
      definition: 'an agreement between two or more parties as to what each party will do for the other, or something bought at a lower price than its true value',
      synonyms: ['deal', 'agreement', 'transaction'],
      antonyms: ['overcharge', 'rip-off', 'disagreement'],
      exampleSentences: [
        { en: 'The second-hand car was a real steal and a great bargain for the price.', ko: '그 중고차는 정말 거저나 다름없었고 가격 대비 아주 훌륭한 매매였다.' },
        { en: 'After hours of negotiation, they finally struck a bargain to merge the two companies.', ko: '몇 시간의 협상 끝에 그들은 마침내 두 회사를 합병하기로 하는 계약을 체결했다.' },
      ],
    }
  ),
  word('bark', '짖다', 4, 'verb',
    ['야옹하다', '울다', '속삭이다', '침묵하다', '노래하다', '말하다', '흐느끼다', '하품하다', '코골다', '미소짓다'],
    tips({
      etymology: '고대 영어 beorcian에서 유래하여 동물이 내는 날카롭고 짧은 소리를 나타냅니다.',
      visual: '집을 지키는 강아지가 낯선 사람을 보고 입을 크게 벌려 소리치는 모습을 상상하세요.',
      soundAlike: '나무껍질(bark)과 발음이 같으므로, 나무 뒤에서 강아지가 짖는 장면을 연상하면 쉽습니다.',
      context: '주로 개가 소리를 낼 때 쓰이지만, 사람이 화가 나서 고함을 지를 때도 비유적으로 쓰입니다.',
      synonymAntonym: 'bay나 yelp는 비슷한 소리를 뜻하며, whisper나 silence는 반대되는 조용한 상태를 뜻합니다.',
    }),
    {
      definition: 'to produce a short, loud, explosive sound characteristic of a dog',
      synonyms: ['bay', 'yelp', 'howl'],
      antonyms: ['whisper', 'whimper', 'silence'],
      exampleSentences: [
        { en: 'The neighbor\'s dog began to loudly whenever someone walked past the gate.', ko: '이웃집 개는 누군가 대문을 지나갈 때마다 크게 짖기 시작했다.' },
        { en: 'I could hear a distant animal in the woods during the quiet night.', ko: '고요한 밤 동안 숲속 멀리서 동물이 짖는 소리를 들을 수 있었다.' },
      ],
    }
  ),
  word('barn', '헛간', 5, 'noun',
    ['아파트', '빌라', '오피스', '지하실', '다락방', '창고', '차고', '온실', '비닐하우스', '막사'],
    tips({
      etymology: '고대 영어 bere(보리)와 ern(집)이 합쳐진 단어로, 원래 곡물을 보관하던 장소를 뜻합니다.',
      visual: '드넓은 농장 한가운데 붉은색 나무로 지어진 커다란 창고 건물을 상상해 보세요.',
      soundAlike: '발음이 \'반\'과 비슷하므로, 농장 일의 \'반\' 이상이 이 건물 안에서 이루어진다고 생각하면 쉽습니다.',
      context: '시골 풍경을 묘사하거나 가축 사육, 농기구 보관에 관한 이야기를 할 때 자주 등장합니다.',
      synonymAntonym: 'shed나 stable과 비슷하지만 규모가 더 크며, 주거 공간인 house와는 대조적입니다.',
    }),
    {
      definition: 'A large farm building used for storing grain, hay, or straw and for housing livestock.',
      synonyms: ['outbuilding', 'shed', 'stable'],
      antonyms: ['house', 'mansion', 'skyscraper'],
      exampleSentences: [
        { en: 'The farmer kept the tractor and the winter hay inside the large wooden structure.', ko: '농부는 커다란 나무 헛간 안에 트랙터와 겨울용 건초를 보관했습니다.' },
        { en: 'During the storm, all the cows were safely gathered inside the shelter.', ko: '폭풍이 부는 동안 모든 소들이 헛간 안으로 안전하게 모였습니다.' },
      ],
    }
  ),
  word('base', '기초', 3, 'noun',
    ['꼭대기', '첨단', '말단', '상부', '정상', '천장', '정점', '최고조', '표면', '외부'],
    tips({
      etymology: '라틴어 \'basis\'에서 유래되었으며, 어떤 물체의 가장 아랫부분이나 지지대를 의미합니다.',
      visual: '건물을 지을 때 가장 먼저 단단하게 다지는 바닥 공사 현장을 상상해 보세요.',
      soundAlike: '야구 경기에서 타자가 밟아야 하는 \'베이스\'를 떠올리면 기초와 시작점이라는 의미가 쉽게 와닿습니다.',
      context: '군사 기지나 화학에서의 염기, 혹은 수학의 밑변 등 다양한 분야에서 \'중심이 되는 바닥\'으로 쓰입니다.',
      synonymAntonym: 'foundation과 유사하며, 가장 높은 곳을 뜻하는 top이나 peak와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the lowest part or edge of something, especially the part on which it rests or is supported',
      synonyms: ['foundation', 'bottom', 'foot'],
      antonyms: ['top', 'summit', 'apex'],
      exampleSentences: [
        { en: 'The lamp has a heavy metal support at the bottom to keep it steady.', ko: '그 램프는 안정감을 유지하기 위해 바닥에 무거운 금속 받침대가 있습니다.' },
        { en: 'They established a temporary camp at the foot of the mountain before the climb.', ko: '그들은 등반을 시작하기 전 산기슭에 임시 캠프를 세웠습니다.' },
      ],
    }
  ),
  word('baseball', '야구', 1, 'noun',
    ['축구', '농구', '배구', '테니스', '골프', '하키', '럭비', '크리켓', '소프트볼', '탁구'],
    tips({
      etymology: '공(ball)을 가지고 베이스(base)를 돌아 점수를 내는 경기라는 뜻에서 유래되었습니다.',
      visual: '다이아몬드 형태의 경기장에서 타자가 배트를 휘두르고 1루로 달려가는 모습을 상상하세요.',
      soundAlike: '발음이 \'베이스볼\'이므로, \'베이스\'를 밟으러 가는 \'볼\' 경기라고 기억하면 쉽습니다.',
      context: '주로 \'play\' 동사와 함께 쓰여 스포츠 경기를 즐긴다는 맥락에서 자주 등장합니다.',
      synonymAntonym: '구기 종목인 softball과 유사하지만, 경기 방식이나 공의 크기에서 차이가 있습니다.',
    }),
    {
      definition: 'A popular sport played with a bat, a small hard ball, and gloves between two teams of nine players on a field with four bases.',
      synonyms: ['ballgame', 'hardball', 'softball'],
      antonyms: ['football', 'soccer', 'basketball'],
      exampleSentences: [
        { en: 'He hit the ball so hard that it flew out of the stadium during the game.', ko: '그는 경기 중에 공을 아주 세게 쳐서 경기장 밖으로 날려 보냈다.' },
        { en: 'Many families enjoy going to the stadium to watch a professional match on weekends.', ko: '많은 가족들이 주말에 프로 경기를 보기 위해 경기장에 가는 것을 즐긴다.' },
      ],
    }
  ),
  word('basis', '기초', 6, 'noun',
    ['꼭대기', '결론', '끝맺음', '표면', '외관', '부수적', '말단', '정점', '천장', '상부'],
    tips({
      etymology: '그리스어 \'basis\'에서 유래하여 \'발을 딛는 곳\' 또는 \'받침대\'라는 의미에서 시작되었습니다.',
      visual: '건물을 지을 때 가장 먼저 바닥에 단단하게 다져놓은 콘크리트 지지대를 상상해 보세요.',
      soundAlike: '\'베이시스\'라고 발음하며, 모든 것의 \'베이스(base)\'가 되는 핵심 원리를 떠올리면 쉽습니다.',
      context: '결정이나 이론을 세울 때 그 근거가 되는 논리적 바탕을 설명할 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 지탱하는 foundation과 유사하며, 아무것도 없는 상태인 void와는 반대됩니다.',
    }),
    {
      definition: 'the underlying support or fundamental principle on which something rests or is established',
      synonyms: ['foundation', 'groundwork', 'base'],
      antonyms: ['top', 'exterior', 'periphery'],
      exampleSentences: [
        { en: 'The decision was made on a purely economic ground and lacked any moral justification.', ko: '그 결정은 순전히 경제적인 토대 위에서 내려졌으며 도덕적 정당성이 부족했습니다.' },
        { en: 'Trust is the essential starting point for any successful long-term relationship.', ko: '신뢰는 성공적인 장기적 관계를 위한 필수적인 기초입니다.' },
      ],
    }
  ),
  word('basketball', '농구', 2, 'noun',
    ['야구', '축구', '배구', '테니스', '골프', '하키', '럭비', '탁구', '배드민턴', '핸드볼'],
    tips({
      etymology: '바구니를 뜻하는 basket과 공을 뜻하는 ball이 합쳐져 바구니에 공을 넣는 경기를 의미합니다.',
      visual: '키가 큰 선수들이 높은 골대에 주황색 공을 던져 넣는 장면을 상상해 보세요.',
      soundAlike: '바스켓(바구니)과 볼(공)이 합쳐진 발음을 그대로 따라하며 익히면 쉽습니다.',
      context: '학교 체육 시간이나 NBA 경기 중계를 떠올리며 문장을 만들어 보세요.',
      synonymAntonym: '구기 종목인 hoops와 유사하며, 실내 경기인 만큼 실외 활동인 hiking 등과 대비될 수 있습니다.',
    }),
    {
      definition: 'A team sport where players try to score points by tossing a large ball through a high metal hoop.',
      synonyms: ['hoops', 'court game', 'ball game'],
      antonyms: ['solitary sport', 'water sport', 'board game'],
      exampleSentences: [
        { en: 'He practiced his free throws every day to become a better player.', ko: '그는 더 나은 선수가 되기 위해 매일 자유투를 연습했습니다.' },
        { en: 'The crowd cheered loudly when the star player made a last-second shot.', ko: '스타 선수가 경기 종료 직전 슛을 성공시키자 관중들이 크게 환호했습니다.' },
      ],
    }
  ),
  word('bat', '배트', 3, 'noun',
    ['공', '글러브', '헬멧', '마스크', '야구공', '네트', '골대', '라켓', '스틱', '유니폼'],
    tips({
      etymology: '고대 영어 \'batt\'에서 유래했으며, 원래 \'몽둥이\'나 \'지팡이\'를 의미하는 단어에서 발전했습니다.',
      visual: '야구 선수가 홈런을 치기 위해 길쭉한 나무 막대를 휘두르는 모습을 상상해 보세요.',
      soundAlike: '\'배트\'라고 발음하며, 한국어에서도 야구 방망이를 그대로 \'배트\'라고 부르니 기억하기 쉽습니다.',
      context: '스포츠 경기 중 공을 멀리 쳐내야 하는 상황에서 주로 사용되는 도구입니다.',
      synonymAntonym: 'club이나 stick과 비슷한 용도로 쓰이지만, 공을 치는 용도라는 점에서 차이가 있습니다.',
    }),
    {
      definition: 'a long wooden or metal object used for hitting the ball in games such as baseball or cricket',
      synonyms: ['club', 'stick', 'paddle'],
      antonyms: ['ball', 'glove', 'pitcher'],
      exampleSentences: [
        { en: 'He swung the wooden stick with all his might to hit a home run.', ko: '그는 홈런을 치기 위해 나무 방망이를 온 힘을 다해 휘둘렀다.' },
        { en: 'The player needs a new aluminum tool because his old one is cracked.', ko: '그 선수는 예전 것이 금이 가서 새로운 알루미늄 배트가 필요하다.' },
      ],
    }
  ),
  word('bath', '목욕', 1, 'noun',
    ['샤워', '세면', '양치', '식사', '수면', '산책', '운동', '독서', '청소', '휴식'],
    tips({
      etymology: '고대 영어 \'baeth\'에서 유래했으며, 물에 몸을 담그는 행위나 그 장소를 뜻합니다.',
      visual: '따뜻한 물이 가득 찬 욕조 속에 들어가 편안하게 쉬고 있는 모습을 상상해 보세요.',
      soundAlike: '\'배쓰\'라고 발음하며, \'배\'가 나올 정도로 따뜻한 물에 푹 담그는 \'배쓰\'라고 기억하세요.',
      context: '주로 욕조에 물을 받아 몸을 씻을 때 사용하며, 샤워(shower)보다 긴 시간을 들여 씻는 뉘앙스입니다.',
      synonymAntonym: '유의어로는 soak가 있고, 반의어로는 씻지 않은 상태인 dirtiness를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'the act of washing the body in a large container filled with water',
      synonyms: ['soaking', 'washing', 'ablution'],
      antonyms: ['dirtiness', 'dehydration', 'dryness'],
      exampleSentences: [
        { en: 'I like to take a warm and relaxing soak in the tub after a long day at work.', ko: '나는 직장에서 긴 하루를 보낸 후 욕조에서 따뜻하고 편안한 목욕을 하는 것을 좋아한다.' },
        { en: 'The mother gave her muddy toddler a thorough cleaning in the porcelain basin.', ko: '어머니는 진흙투성이가 된 아이를 세면대에서 깨끗하게 목욕시켰다.' },
      ],
    }
  ),
  word('bathroom', '욕실', 2, 'noun',
    ['거실', '주방', '침실', '서재', '창고', '차고', '현관', '다락방', '지하실', '베란다'],
    tips({
      etymology: '목욕을 뜻하는 bath와 방을 뜻하는 room이 합쳐져 씻는 공간을 의미합니다.',
      visual: '김이 모락모락 나는 욕조와 거울이 있는 깨끗한 화장실 풍경을 상상해 보세요.',
      soundAlike: '배스(bath)룸! 버스를 타기 전 들르는 화장실이라고 연상해 보세요.',
      context: '집 안에서 개인적인 위생을 관리하거나 샤워를 할 때 주로 사용하는 장소입니다.',
      synonymAntonym: '유사한 장소로는 restroom이 있으며, 야외를 뜻하는 outdoors와 대비됩니다.',
    }),
    {
      definition: 'a room containing a toilet and usually a sink and bathtub or shower',
      synonyms: ['restroom', 'lavatory', 'washroom'],
      antonyms: ['outdoors', 'exterior', 'outside'],
      exampleSentences: [
        { en: 'The guest is washing his hands in the upstairs bathroom.', ko: '손님이 위층 욕실에서 손을 씻고 있습니다.' },
        { en: 'Does this hotel room have a private bathroom?', ko: '이 호텔 객실에는 전용 욕실이 딸려 있나요?' },
      ],
    }
  ),
  word('battery', '전지', 3, 'noun',
    ['전선', '플러그', '어댑터', '충전기', '스위치', '전구', '모터', '콘센트', '케이블', '회로'],
    tips({
      etymology: '프랑스어 \'batterie\'에서 유래했으며, 원래는 \'타격\'이나 \'포대\'를 의미하다가 나중에 여러 개의 전지를 연결한 장치를 뜻하게 되었습니다.',
      visual: '리모컨 뒷면을 열어 동그란 건전지 두 개가 나란히 끼워져 있는 모습을 상상해 보세요.',
      soundAlike: '\'배터리\'라고 발음하며, 스마트폰 배터리가 1% 남아서 깜빡거리는 긴박한 상황을 떠올려 보세요.',
      context: '전자 기기를 작동시키기 위해 에너지를 공급하는 핵심 부품으로 주로 쓰입니다.',
      synonymAntonym: '에너지를 저장하는 cell과 유사하며, 에너지가 없는 상태인 emptiness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A container consisting of one or more cells, in which chemical energy is converted into electricity and used as a source of power.',
      synonyms: ['accumulator', 'cell', 'storage cell'],
      antonyms: ['drain', 'depletion', 'emptiness'],
      exampleSentences: [
        { en: 'My phone is about to die because the power source is low.', ko: '전력이 부족해서 내 휴대폰이 곧 꺼질 것 같다.' },
        { en: 'You need to replace the old cells in the flashlight to make it work again.', ko: '손전등을 다시 작동시키려면 오래된 건전지를 교체해야 한다.' },
      ],
    }
  ),
  word('bay', '만', 7, 'noun',
    ['곶', '반도', '해협', '내륙', '산맥', '사막', '평원', '고원', '협곡', '섬'],
    tips({
      etymology: '고대 프랑스어 \'baie\'에서 유래하여, 땅이 안쪽으로 굽어 들어간 지형을 뜻합니다.',
      visual: '해안선이 C자 모양으로 움푹 들어가 파도가 잔잔해진 항구의 모습을 상상해 보세요.',
      soundAlike: '배(ship)가 들어와서 쉬는 곳이 \'bay\'라고 연상하면 기억하기 쉽습니다.',
      context: '샌프란시스코의 \'Bay Area\'처럼 특정 해안 지역을 지칭할 때 자주 쓰입니다.',
      synonymAntonym: 'gulf보다 규모가 작고 입구가 넓은 편이며, 반대로 튀어나온 지형은 cape라고 합니다.',
    }),
    {
      definition: 'A body of water partially surrounded by land, usually smaller than a gulf.',
      synonyms: ['inlet', 'cove', 'gulf'],
      antonyms: ['cape', 'peninsula', 'headland'],
      exampleSentences: [
        { en: 'The golden sun began to set over the calm waters of the bay.', ko: '황금빛 태양이 만의 잔잔한 물결 위로 지기 시작했다.' },
        { en: 'Several small fishing boats were anchored in the sheltered bay.', ko: '여러 척의 작은 낚시배들이 사방이 막힌 만 안에 정박해 있었다.' },
      ],
    }
  ),
  word('be', '-이다', 1, 'verb',
    ['하다', '가다', '오다', '되다', '않다', '없다', '멈추다', '시작하다', '끝내다', '변하다'],
    tips({
      etymology: '고대 영어 \'beon\'에서 유래하여 존재함 그 자체를 나타내는 가장 기본적인 동사입니다.',
      visual: '거울 속에 비친 자신의 모습(identity)을 보며 \'나는 나다\'라고 선언하는 장면을 상상하세요.',
      soundAlike: '꿀벌(bee)이 꽃 위에 가만히 \'존재하고 있는\' 모습을 떠올리며 발음해 보세요.',
      context: '주어의 상태나 정체를 설명할 때 쓰이며, 시제에 따라 am, is, are 등으로 형태가 바뀝니다.',
      synonymAntonym: '존재를 뜻하는 exist와 반대로 사라짐을 뜻하는 vanish를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to exist, live, or take place; to occupy a place or have a specified status',
      synonyms: ['exist', 'remain', 'subsist'],
      antonyms: ['cease', 'depart', 'die'],
      exampleSentences: [
        { en: 'I want to a doctor when I grow up.', ko: '나는 커서 의사가 되고 싶다.' },
        { en: 'Honesty is the best policy in any situation.', ko: '정직은 어떤 상황에서도 최선의 방책이다.' },
      ],
    }
  ),
  word('beam', '광선', 4, 'noun',
    ['그림자', '어둠', '침묵', '정적', '바람', '소리', '냄새', '맛', '촉감', '공허'],
    tips({
      etymology: '고대 영어 \'beam\'은 원래 \'나무\'나 \'기둥\'을 뜻했으며, 이후 빛의 줄기가 기둥처럼 뻗어 나가는 모습에 비유되어 사용되었습니다.',
      visual: '어두운 밤하늘에 서치라이트가 일직선으로 곧게 뻗어 나가는 강렬한 빛의 기둥을 상상해 보세요.',
      soundAlike: '웃을 때 입을 \'비임\'하고 크게 벌리며 환하게 웃는 모습(beaming smile)을 떠올리면 기억하기 쉽습니다.',
      context: '건축에서는 무거운 지붕을 받치는 \'들보\'를 의미하며, 광학에서는 레이저나 햇빛의 \'줄기\'를 뜻합니다.',
      synonymAntonym: '빛의 줄기인 ray와 유사하며, 빛이 전혀 없는 상태인 darkness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A long, sturdy piece of squared timber or metal spanning an opening or part of a building, or a directional stream of radiation or light.',
      synonyms: ['ray', 'shaft', 'girder'],
      antonyms: ['darkness', 'shadow', 'obscurity'],
      exampleSentences: [
        { en: 'A narrow shaft of light shone through the crack in the curtains.', ko: '커튼 틈 사이로 좁은 빛줄기가 비쳐 들어왔다.' },
        { en: 'The steel support held the entire weight of the upper floor.', ko: '강철 들보가 위층의 전체 무게를 지탱하고 있었다.' },
      ],
    }
  ),
  word('bean', '콩', 2, 'noun',
    ['쌀', '밀', '옥수수', '감자', '당근', '양파', '고추', '버섯', '상추', '배추'],
    tips({
      etymology: '고대 영어 \'bēan\'에서 유래했으며, 아주 오래전부터 인류의 주요 식량이었던 꼬투리 식물을 뜻합니다.',
      visual: '강낭콩이나 완두콩처럼 동글동글하거나 길쭉한 초록색 꼬투리 안에 알갱이가 들어있는 모습을 상상하세요.',
      soundAlike: '커피 \'빈(bean)\'을 떠올려 보세요. 우리가 마시는 커피도 사실 커피나무의 씨앗인 콩입니다.',
      context: '요리법이나 건강 식단을 다룰 때 단백질 공급원으로 자주 등장하는 단어입니다.',
      synonymAntonym: '식용 씨앗을 뜻하는 seed나 꼬투리를 뜻하는 pod와 함께 기억하고, 가공식품과는 반대되는 개념으로 이해하세요.',
    }),
    {
      definition: 'the edible seed of various plants of the legume family, typically used as a vegetable',
      synonyms: ['seed', 'kernel', 'legume'],
      antonyms: ['meat', 'fruit', 'root'],
      exampleSentences: [
        { en: 'She added some green beans to the salad for a crunchy texture.', ko: '그녀는 아삭한 식감을 위해 샐러드에 껍질콩을 좀 넣었다.' },
        { en: 'Soybeans are a great source of plant-based protein for vegetarians.', ko: '대두는 채식주의자들에게 훌륭한 식물성 단백질 공급원이다.' },
      ],
    }
  ),
  word('beard', '턱수염', 5, 'noun',
    ['머리카락', '눈썹', '속눈썹', '콧수염', '구두', '피부', '근육', '치아', '손톱', '발가락'],
    tips({
      etymology: '고대 영어 \'beard\'에서 유래했으며, 독일어 \'Bart\'와도 어원이 같아 남성의 얼굴 털을 의미합니다.',
      visual: '산타클로스의 길고 하얀 턱수염을 쓰다듬는 모습을 상상해 보세요.',
      soundAlike: '맥주를 뜻하는 \'beer\'를 마시다가 \'beard\'(턱수염)에 거품이 묻은 상황을 떠올려 보세요.',
      context: '면도하지 않은 남성의 턱과 뺨 주변에 자라난 털을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '콧수염인 mustache와는 부위가 다르며, 털이 없는 상태인 clean-shaven과 반대됩니다.',
    }),
    {
      definition: 'The hair that grows on the lower part of a man\'s face, specifically on the chin and cheeks.',
      synonyms: ['whiskers', 'stubble', 'facial hair'],
      antonyms: ['bare face', 'smooth chin', 'shaven face'],
      exampleSentences: [
        { en: 'He decided to grow a thick facial covering to keep his face warm during the winter.', ko: '그는 겨울 동안 얼굴을 따뜻하게 유지하기 위해 굵은 턱수염을 기르기로 결심했다.' },
        { en: 'The old man stroked his long white chin hair while lost in thought.', ko: '노인은 생각에 잠긴 채 자신의 길고 하얀 턱수염을 쓰다듬었다.' },
      ],
    }
  ),
  word('beast', '짐승', 6, 'noun',
    ['사람', '식물', '광물', '기계', '유령', '천사', '요정', '로봇', '인형', '조각'],
    tips({
      etymology: '라틴어 bestia에서 유래하여, 인간과 대조되는 야생의 거친 생명체를 뜻하게 되었습니다.',
      visual: '미녀와 야수(Beauty and the Beast)의 털이 덥수룩하고 거대한 야수를 상상해 보세요.',
      soundAlike: '발음이 \'비스트\'이므로, 비장하게 포효하는 큰 짐승의 소리를 연상하면 쉽습니다.',
      context: '주로 덩치가 크고 위협적인 야생 동물을 묘사할 때나, 성격이 거친 사람을 비유할 때 쓰입니다.',
      synonymAntonym: '유의어인 creature는 생명체를, 반의어인 human은 이성을 가진 인간을 뜻합니다.',
    }),
    {
      definition: 'A large, wild, and often powerful or dangerous animal.',
      synonyms: ['creature', 'monster', 'brute'],
      antonyms: ['human', 'angel', 'gentleman'],
      exampleSentences: [
        { en: 'The hunters tracked the wild creature through the thick forest.', ko: '사냥꾼들은 울창한 숲속에서 그 야생 짐승을 추적했습니다.' },
        { en: 'He fought like a powerful animal to protect his territory.', ko: '그는 자신의 영역을 지키기 위해 강력한 짐승처럼 싸웠습니다.' },
      ],
    }
  ),
  word('beat', '치다', 7, 'verb',
    ['쓰다듬다', '만지다', '안다', '당기다', '밀다', '놓다', '놓치다', '지키다', '감싸다', '덮다'],
    tips({
      etymology: '고대 영어 \'beatan\'에서 유래하여 무언가를 반복적으로 두드리는 동작을 의미합니다.',
      visual: '드럼 스틱이 북을 강하게 내리치는 장면이나 심장이 쿵쾅거리는 모습을 상상하세요.',
      soundAlike: '비트(beat)가 강한 음악을 들을 때 리듬에 맞춰 손바닥을 치는 소리를 연상하세요.',
      context: '스포츠 경기에서 상대 팀을 이기거나 요리할 때 달걀을 휘젓는 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'strike와 유사하며, 패배를 의미할 때는 win의 반대 개념으로 쓰입니다.',
    }),
    {
      definition: 'to strike something repeatedly with a hand or an object, or to defeat someone in a game or battle',
      synonyms: ['strike', 'defeat', 'pound'],
      antonyms: ['lose', 'surrender', 'fail'],
      exampleSentences: [
        { en: 'The rain continued to strike against the window all night long.', ko: '밤새도록 빗줄기가 창문을 세차게 두드렸다.' },
        { en: 'Our team managed to overcome the champions in the final match.', ko: '우리 팀은 결승전에서 챔피언 팀을 꺾는 데 성공했다.' },
      ],
    }
  ),
  word('beauty', '아름다움', 3, 'noun',
    ['추함', '흉함', '추악함', '못생김', '비참함', '지저분함', '어수선함', '불쾌함', '역겨움', '비열함'],
    tips({
      etymology: '라틴어 bellus(예쁜)에서 유래하여 프랑스어 beauté를 거쳐 영어로 정착되었습니다.',
      visual: '화려하게 피어난 꽃이나 붉게 물든 노을의 풍경을 머릿속에 그려보세요.',
      soundAlike: '뷰티 살롱이나 뷰티 유튜버처럼 일상에서 자주 쓰이는 외래어 발음을 떠올려보세요.',
      context: '외모뿐만 아니라 내면의 선함이나 예술 작품의 완성도를 칭찬할 때도 사용합니다.',
      synonymAntonym: 'loveliness와는 결이 비슷하고, ugliness와는 정반대의 개념입니다.',
    }),
    {
      definition: 'a combination of qualities, such as shape, color, or form, that pleases the aesthetic senses, especially the sight',
      synonyms: ['loveliness', 'elegance', 'attractiveness'],
      antonyms: ['ugliness', 'hideousness', 'repulsiveness'],
      exampleSentences: [
        { en: 'The sunset over the ocean was a scene of breathtaking natural splendor.', ko: '바다 위로 지는 노을은 숨 막히는 자연의 아름다움을 보여주는 장면이었습니다.' },
        { en: 'True excellence lies in the kindness of one\'s heart rather than physical appearance.', ko: '진정한 아름다움은 외모보다는 사람의 마음씨에 있습니다.' },
      ],
    }
  ),
  word('because', '왜냐하면', 1, 'conjunction',
    ['그러나', '하지만', '그래서', '그럼에도', '또한', '그리고', '또는', '만약', '비록', '따라서'],
    tips({
      etymology: '원인을 나타내는 by와 원인을 뜻하는 cause가 결합하여 만들어진 단어입니다.',
      visual: '어떤 결과 뒤에 화살표가 있고 그 뒤에 이유가 적혀 있는 표지판을 상상해 보세요.',
      soundAlike: '\'비커즈\'라고 발음하며, 비커(beaker)에 물이 쏟아진 \'이유\'를 설명한다고 생각해보세요.',
      context: '문장에서 원인이나 근거를 설명할 때 가장 기본적으로 사용하는 접속사입니다.',
      synonymAntonym: 'since나 as와 비슷하게 쓰이지만, because는 이유를 가장 강하게 강조합니다.',
    }),
    {
      definition: 'for the reason that or due to the fact that',
      synonyms: ['since', 'as', 'inasmuch'],
      antonyms: ['despite', 'regardless', 'nevertheless'],
      exampleSentences: [
        { en: 'I stayed at home all day long for the simple reason that it was raining.', ko: '비가 오고 있었기 때문에 나는 하루 종일 집에 머물렀다.' },
        { en: 'She succeeded in the project only through hard work and dedication.', ko: '그녀는 오직 열심히 일하고 헌신했기 때문에 그 프로젝트에서 성공했다.' },
      ],
    }
  ),
  word('become', '-이', 2, 'verb',
    ['남다', '그만두다', '떠나다', '사라지다', '멈추다', '유지하다', '되돌리다', '포기하다', '중단하다', '끝나다'],
    tips({
      etymology: '고대 영어 becuman에서 유래했으며, \'도착하다\' 혹은 \'일어나다\'라는 의미가 점차 상태의 변화를 나타내는 뜻으로 발전했습니다.',
      visual: '애벌레가 고치 안에서 아름다운 나비로 변신하는 마법 같은 순간을 상상해 보세요.',
      soundAlike: '비컴(become) -> \'비(B)가 옴\'으로써 땅이 젖은 상태가 \'되다\'라고 연상해 보세요.',
      context: '주로 뒤에 형용사나 명사가 와서 주어의 상태나 신분이 어떻게 변했는지를 설명할 때 쓰입니다.',
      synonymAntonym: '상태가 변하는 turn, grow와 비슷하지만, 변하지 않고 그대로 있는 remain과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to begin to be something or to change into a specific state or condition',
      synonyms: ['turn', 'grow', 'transform'],
      antonyms: ['remain', 'stay', 'persist'],
      exampleSentences: [
        { en: 'He studied very hard to fulfill his dream to a professional doctor.', ko: '그는 전문 의사가 되려는 꿈을 이루기 위해 매우 열심히 공부했습니다.' },
        { en: 'The leaves on the trees start to turn yellow and brown as autumn approaches.', ko: '가을이 다가오면서 나무의 잎들이 노랗고 갈색으로 변하기 시작합니다.' },
      ],
    }
  ),
  word('bedroom', '침실', 3, 'noun',
    ['거실', '주방', '욕실', '서재', '창고', '차고', '현관', '다락방', '지하실', '베란다'],
    tips({
      etymology: '잠을 자는 가구인 bed와 공간을 뜻하는 room이 합쳐져 만들어진 직관적인 단어입니다.',
      visual: '포근한 침대와 베개가 놓여 있고 조명이 은은하게 켜진 아늑한 방의 모습을 상상해 보세요.',
      soundAlike: '발음할 때 \'베드\'와 \'룸\' 사이를 끊지 않고 부드럽게 연결하면 자연스럽습니다.',
      context: '집 안에서 가장 개인적인 공간이며 휴식과 수면을 취하는 장소를 말할 때 주로 쓰입니다.',
      synonymAntonym: '잠을 자는 곳이라는 뜻의 chamber와 유사하며, 공용 공간인 living room과는 대조적입니다.',
    }),
    {
      definition: 'A private area inside a house or apartment specifically designed and used for sleeping.',
      synonyms: ['chamber', 'sleeping quarters', 'dormitory'],
      antonyms: ['living room', 'kitchen', 'bathroom'],
      exampleSentences: [
        { en: 'The master suite includes a large walk-in closet and a private balcony.', ko: '안방에는 넓은 드레스룸과 전용 발코니가 포함되어 있습니다.' },
        { en: 'He spent the entire afternoon reading a book in his quiet upstairs area.', ko: '그는 오후 내내 조용한 위층 방에서 책을 읽으며 시간을 보냈습니다.' },
      ],
    }
  ),
  word('bee', '꿀벌', 1, 'noun',
    ['나비', '파리', '모기', '개미', '거미', '지렁이', '달팽이', '나방', '매미', '귀뚜라미'],
    tips({
      etymology: '고대 영어 \'beo\'에서 유래했으며, 아주 오래전부터 꿀을 모으는 곤충을 지칭해 왔습니다.',
      visual: '노란색과 검은색 줄무늬가 있는 곤충이 꽃 주위를 윙윙거리며 날아다니는 모습을 상상하세요.',
      soundAlike: '알파벳 \'B\'와 발음이 똑같아서 기억하기 매우 쉽습니다.',
      context: '부지런히 일하는 사람을 묘사할 때 \'busy as a bee\'라는 표현을 자주 사용합니다.',
      synonymAntonym: '꿀을 만드는 honeybee와 비슷하며, 일하지 않고 빈둥거리는 게으름뱅이와는 반대되는 이미지입니다.',
    }),
    {
      definition: 'A winged insect with a hairy body that gathers nectar and pollen to produce honey.',
      synonyms: ['honeybee', 'bumblebee', 'pollinator'],
      antonyms: ['wasp', 'hornet', 'predator'],
      exampleSentences: [
        { en: 'A small insect was buzzing around the colorful flowers in the garden.', ko: '작은 곤충 한 마리가 정원의 알록달록한 꽃들 주위에서 윙윙거리고 있었다.' },
        { en: 'The colony worked together to build a complex hive and store food for winter.', ko: '그 군집은 복잡한 벌집을 짓고 겨울을 위한 식량을 저장하기 위해 함께 일했다.' },
      ],
    }
  ),
  word('beef', '쇠고기', 2, 'noun',
    ['돼지고기', '닭고기', '양고기', '생선', '두부', '계란', '우유', '치즈', '채소', '과일'],
    tips({
      etymology: '프랑스어 bœuf에서 유래했으며, 살아있는 소(cow)와 식재료인 고기를 구분하여 부르기 시작했습니다.',
      visual: '스테이크 하우스의 그릴 위에서 지글지글 익어가는 두툼한 소고기 등심을 상상해 보세요.',
      soundAlike: '\'비프\' 스테이크라는 말로 우리에게 익숙하며, \'비\'싼 \'프\'리미엄 고기라고 연상하면 쉽습니다.',
      context: '레스토랑 메뉴판에서 육류 요리를 고를 때 가장 흔하게 볼 수 있는 단어입니다.',
      synonymAntonym: '식용 고기를 뜻하는 meat의 한 종류이며, 채소인 vegetable과는 반대되는 개념입니다.',
    }),
    {
      definition: 'the culinary name for meat derived from mature cattle',
      synonyms: ['steak', 'flesh', 'meat'],
      antonyms: ['vegetable', 'plant', 'grain'],
      exampleSentences: [
        { en: 'We decided to grill some prime beef for the family dinner.', ko: '우리는 가족 저녁 식사를 위해 최상급 소고기를 굽기로 결정했다.' },
        { en: 'The chef recommended the roasted beef served with mashed potatoes.', ko: '주방장은 으깬 감자를 곁들인 로스트 비프 요리를 추천했다.' },
      ],
    }
  ),
  word('beer', '맥주', 4, 'noun',
    ['와인', '소주', '위스키', '주스', '물', '커피', '차', '우유', '탄산수', '청량음료'],
    tips({
      etymology: '고대 게르만어에서 유래하여 보리를 발효시켜 만든 음료를 뜻하게 되었습니다.',
      visual: '차가운 유리잔에 가득 담긴 황금빛 액체와 그 위에 하얗게 쌓인 거품을 상상해 보세요.',
      soundAlike: '곰을 뜻하는 bear와 발음이 비슷하지만, 맥주는 \'비어\'라고 길게 발음합니다.',
      context: '독일의 옥토버페스트 축제에서 사람들이 커다란 잔을 부딪치며 마시는 대표적인 술입니다.',
      synonymAntonym: 'ale이나 brew와 비슷한 의미로 쓰이며, 술이 아닌 음료인 soft drink와는 대조됩니다.',
    }),
    {
      definition: 'an alcoholic beverage produced by brewing and fermenting cereals, such as malted barley, and flavored with hops',
      synonyms: ['ale', 'brew', 'lager'],
      antonyms: ['water', 'soda', 'juice'],
      exampleSentences: [
        { en: 'After a long day at work, he enjoyed a cold glass of lager at the local pub.', ko: '긴 하루 일과를 마친 후, 그는 동네 펍에서 시원한 라거 한 잔을 즐겼다.' },
        { en: 'Germany is famous for its strict laws regarding the purity of its fermented malt drinks.', ko: '독일은 맥주의 순수성에 관한 엄격한 법으로 유명하다.' },
      ],
    }
  ),
  word('before', '앞에', 3, 'preposition',
    ['이후에', '대신에', '통해', '기준으로', '관하여', '대하여', '안에', '밖에', '위에', '나중에'],
    tips({
      etymology: '고대 영어 \'be-\'(곁에)와 \'foran\'(앞에)이 합쳐져 \'미리\' 혹은 \'앞서\'라는 의미가 되었습니다.',
      visual: '시계 바늘을 거꾸로 돌려 과거의 시점으로 돌아가는 장면을 상상해 보세요.',
      soundAlike: '\'비포\' 서비스(Before Service)는 문제가 생기기 \'전\'에 미리 점검해주는 서비스입니다.',
      context: '시간상으로 어떤 사건보다 앞서거나, 위치상으로 누군가의 눈앞에 있을 때 사용합니다.',
      synonymAntonym: 'prior to와 의미가 통하며, 반대말인 after와 짝을 지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'at an earlier time than a particular event or point in time, or in front of someone or something',
      synonyms: ['previously', 'earlier', 'ahead'],
      antonyms: ['after', 'later', 'afterward'],
      exampleSentences: [
        { en: 'Please wash your hands thoroughly before you have dinner.', ko: '저녁 식사를 하기 전에 손을 깨끗이 씻으세요.' },
        { en: 'The defendant stood before the judge to hear the final verdict.', ko: '피고인은 최종 판결을 듣기 위해 판사 앞에 섰다.' },
      ],
    }
  ),
  word('beg', '구걸하다', 5, 'verb',
    ['명령하다', '거절하다', '제공하다', '무시하다', '지시하다', '허락하다', '포기하다', '공격하다', '조언하다', '비난하다'],
    tips({
      etymology: '중세 영어 \'beggen\'에서 유래했으며, 원래는 수도사들이 자선을 구하는 행위와 관련이 깊습니다.',
      visual: '길거리에서 간절한 표정으로 두 손을 모으고 무언가를 요청하는 사람의 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'배구\'와 비슷하죠? 배구 경기에서 공을 살려달라고 간절히 비는 모습을 상상해 보세요.',
      context: '단순히 돈을 구걸하는 것뿐만 아니라, 용서를 구하거나 간곡히 부탁할 때도 자주 쓰입니다.',
      synonymAntonym: '간청하는 plead와 대조적으로, 당당하게 요구하는 demand를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to make a very strong and urgent request for something, often out of desperation or humility',
      synonyms: ['implore', 'plead', 'beseech'],
      antonyms: ['demand', 'order', 'command'],
      exampleSentences: [
        { en: 'The hungry child had to ask strangers for food on the street.', ko: '배고픈 아이는 거리에서 낯선 사람들에게 음식을 구걸해야 했습니다.' },
        { en: 'I honestly implore you to forgive me for my terrible mistake.', ko: '제 끔찍한 실수에 대해 진심으로 용서를 빕니다.' },
      ],
    }
  ),
  word('behavior', '행동', 6, 'noun',
    ['생각', '감정', '의도', '동기', '성격', '습관', '태도', '신념', '가치관', '이념'],
    tips({
      etymology: '동사 behave(행동하다)에 명사형 접미사 -ior가 붙어 만들어진 단어입니다.',
      visual: '어린아이가 칭찬을 받기 위해 바르게 앉아 있는 예절 바른 모습을 상상해 보세요.',
      soundAlike: '비헤이비어 -> \'비(Rain) 해(Sun) 비어(Empty)\' 날씨 변화에 따라 몸이 움직이는 반응을 떠올려 보세요.',
      context: '심리학이나 과학 실험에서 인간이나 동물의 반응을 관찰할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'conduct와는 격식 있는 행동을 의미하며, inaction과는 반대되는 개념입니다.',
    }),
    {
      definition: 'the way in which a person or animal acts in response to a particular situation or stimulus',
      synonyms: ['conduct', 'manner', 'action'],
      antonyms: ['inaction', 'idleness', 'quiescence'],
      exampleSentences: [
        { en: 'The teacher praised the students for their excellent conduct during the field trip.', ko: '선생님은 현장 학습 동안 학생들의 훌륭한 품행을 칭찬했습니다.' },
        { en: 'Scientists are studying the social patterns of wolves in the wild.', ko: '과학자들은 야생 늑대들의 사회적 행동 양식을 연구하고 있습니다.' },
      ],
    }
  ),
  word('behind', '뒤에', 1, 'preposition',
    ['앞에', '옆에', '밖에', '위에', '아래에', '가까이', '멀리', '건너', '반대편', '안에'],
    tips({
      etymology: '고대 영어 \'be-\'(곁에)와 \'hindan\'(뒤쪽)이 결합하여 대상의 뒤쪽 위치를 나타내게 되었습니다.',
      visual: '술래잡기를 할 때 커다란 나무 뒤에 몸을 숨기고 있는 아이의 모습을 상상해 보세요.',
      soundAlike: '\'비하인드\' 스토리라고 할 때처럼, 겉으로 드러나지 않은 \'뒷\'이야기를 떠올리면 쉽습니다.',
      context: '물리적인 위치뿐만 아니라, 실력이나 진도가 남들보다 뒤처졌을 때도 자주 쓰입니다.',
      synonymAntonym: '앞을 뜻하는 in front of와 반대되는 개념으로, 뒤쪽을 나타내는 rear와 함께 기억하세요.',
    }),
    {
      definition: 'at or towards the back of someone or something, or further back than other people or objects',
      synonyms: ['rear', 'back', 'after'],
      antonyms: ['ahead', 'before', 'front'],
      exampleSentences: [
        { en: 'The sun disappeared the clouds, making the sky look gray.', ko: '태양이 구름 뒤로 사라져서 하늘이 회색으로 보였다.' },
        { en: 'Please close the door you when you leave the room.', ko: '방을 나갈 때 당신 뒤에 있는 문을 닫아 주세요.' },
      ],
    }
  ),
];
