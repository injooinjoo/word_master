import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch60: VocabItem[] = [
  word('slice', '얇은조각', 7, 'noun',
    ['덩어리', '전체', '조합', '연결', '파편', '구조', '부피', '무게', '길이', '너비'],
    tips({
      etymology: '고대 프랑스어 \'esclice\'에서 유래하여 \'쪼개진 조각\'이라는 의미를 담고 있습니다.',
      visual: '잘 익은 피자 한 판에서 삼각형 모양으로 떼어낸 얇은 한 조각을 상상해 보세요.',
      soundAlike: '\'슬라이스\'는 골프나 테니스에서 공이 깎여 나가는 궤적을 떠올리면 얇게 베어내는 느낌과 연결됩니다.',
      context: '음식뿐만 아니라 예산이나 시장 점유율의 \'일부분\'을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'piece와 유사하지만 훨씬 얇은 느낌이며, 전체를 뜻하는 whole과는 반대됩니다.',
    }),
    {
      definition: 'A thin, flat piece cut from a larger object, typically food.',
      synonyms: ['portion', 'segment', 'section'],
      antonyms: ['entirety', 'whole', 'total'],
      exampleSentences: [
        { en: 'She cut a thin piece of bread to make a sandwich.', ko: '그녀는 샌드위치를 만들기 위해 빵을 얇은 한 조각으로 잘랐다.' },
        { en: 'The chef served a generous portion of the chocolate cake to each guest.', ko: '요리사는 각 손님에게 초콜릿 케이크 한 조각을 넉넉하게 대접했다.' },
      ],
      wordDistractors: ['spice', 'splice', 'slick'],
      definitionDistractors: [
        'A sudden and forceful movement in a particular direction',
        'A thin layer of liquid spread over a flat surface',
        'The act of combining two or more separate items into one',
      ],
    }
  ),
  word('slide', '미끄러지다', 4, 'verb',
    ['~할 것이다', '애지중지하다 / 응석받이로 키우다', '되돌아 가다', '바로잡다, 고치다', '모호하게 말하다', '한계를 정하다/분리하다/구별하다', '탕진하다, 낭비하다', '준수하다', '마음의 평정을 없애다, 동요시키다', '선택하다'],
    tips({
      etymology: '중세 영어 \'sliden\'에서 유래했으며, 마찰 없이 부드럽게 움직이는 동작을 나타냅니다.',
      visual: '얼음판 위에서 썰매가 매끄럽게 쭉 미끄러져 나가는 모습을 상상해 보세요.',
      soundAlike: '\'슬라이드\'라고 발음하며, 발표할 때 화면이 옆으로 스르륵 넘어가는 장면을 떠올리면 쉽습니다.',
      context: '물리적으로 바닥에서 미끄러지는 것뿐만 아니라, 성적이 떨어지거나 상황이 악화될 때도 사용합니다.',
      synonymAntonym: 'glide와 유의어 관계이며, 마찰로 인해 멈추는 stop이나 stay와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to move smoothly along a surface while maintaining continuous contact with it',
      synonyms: ['glide', 'skid', 'slither'],
      antonyms: ['stop', 'stay', 'halt'],
      exampleSentences: [
        { en: 'The children love to move quickly down the playground equipment during recess.', ko: '아이들은 쉬는 시간에 놀이터 기구에서 빠르게 미끄러져 내려오는 것을 좋아합니다.' },
        { en: 'Be careful not to let your car lose control on the icy road tonight.', ko: '오늘 밤 빙판길에서 차가 미끄러지지 않도록 주의하세요.' },
      ],
      wordDistractors: ['slid', 'glide', 'sided'],
      definitionDistractors: [
        'To cut something into thin, even pieces using a blade',
        'To arrange items in a specific numerical or alphabetical order',
        'To fasten or attach two objects firmly together',
      ],
    }
  ),
  word('slight', '약간의', 9, 'adjective',
    ['거대한', '심각한', '명백한', '강력한', '완전한', '영구적인', '복잡한', '급격한', '철저한', '중대한'],
    tips({
      etymology: '고대 노르웨이어 \'slyt\'에서 유래하여 \'가늘고 약한\'이라는 의미에서 \'적은 양\'으로 발전했습니다.',
      visual: '거의 보이지 않을 정도로 아주 얇은 선이나 아주 작은 틈새를 상상해 보세요.',
      soundAlike: '\'슬라이드(slide)\'를 탈 때 아주 \'살짝\' 미끄러지는 느낌으로 발음을 연결해 보세요.',
      context: '주로 차이점, 변화, 부상 등이 아주 미미하거나 작을 때 자주 사용되는 형용사입니다.',
      synonymAntonym: '작은 것을 뜻하는 minor와 반대되는 거대한 의미의 major를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'small in degree, amount, or importance; not very noticeable or serious',
      synonyms: ['minor', 'insignificant', 'marginal'],
      antonyms: ['considerable', 'substantial', 'major'],
      exampleSentences: [
        { en: 'There has been a minor change in the schedule, but it should not affect our plans.', ko: '일정에 약간의 변경이 있었지만, 우리의 계획에 영향을 주지는 않을 것입니다.' },
        { en: 'She felt a tiny bit of pain in her ankle after the long walk.', ko: '그녀는 긴 산책 후에 발목에 약간의 통증을 느꼈습니다.' },
      ],
      wordDistractors: ['slit', 'sleight', 'blight'],
      definitionDistractors: [
        'Appearing suddenly and with great intensity or brightness',
        'Having a sharp or pointed edge that can easily cut through materials',
        'Completely certain or assured about a particular outcome',
      ],
    }
  ),
  word('slim', '호리호리한', 5, 'adjective',
    ['뚱뚱한', '거대한', '넓은', '두꺼운', '풍부한', '무거운', '단단한', '복잡한', '평범한', '거친'],
    tips({
      etymology: '네덜란드어 \'slim\'에서 유래했으며 원래는 \'교활한\'이라는 뜻이었으나 시간이 흐르며 \'가느다란\'이라는 의미로 정착되었습니다.',
      visual: '모델들이 런웨이를 걷는 가늘고 긴 실루엣이나 얇은 스마트폰의 옆면을 상상해 보세요.',
      soundAlike: '발음이 \'슬림\'이므로 몸매를 보정해주는 \'슬림핏\' 청바지를 떠올리면 기억하기 쉽습니다.',
      context: '주로 사람의 체격이 보기 좋게 날씬하거나 어떤 결과의 가능성이 매우 희박할 때 사용됩니다.',
      synonymAntonym: 'slender와 유의어 관계이며, 반대말인 stout나 thick과 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'attractively thin and well-shaped in body or small in amount or degree',
      synonyms: ['slender', 'lean', 'slight'],
      antonyms: ['chubby', 'thick', 'broad'],
      exampleSentences: [
        { en: 'She maintained a very athletic and graceful figure by exercising every morning.', ko: '그녀는 매일 아침 운동을 함으로써 매우 탄탄하고 호리호리한 몸매를 유지했다.' },
        { en: 'The chances of finding the lost ring in this vast desert are extremely small.', ko: '이 광활한 사막에서 잃어버린 반지를 찾을 가능성은 매우 희박하다.' },
      ],
      wordDistractors: ['slime', 'slimy', 'slam'],
      definitionDistractors: [
        'Extremely muscular and physically strong in build',
        'Having a rough or uneven surface texture',
        'Expanding rapidly in size or volume over a short period',
      ],
    }
  ),
  word('slip', '미끄러짐', 6, 'noun',
    ['넘어짐', '실수', '종이 조각', '속옷', '하락', '간격', '부주의', '이동', '탈출', '변화'],
    tips({
      etymology: '부드럽게 미끄러지듯 지나가는 동작에서 유래하여 시간이 소리 없이 흘러가는 느낌을 줍니다.',
      visual: '모래시계의 모래가 아주 미세하게 빠져나가 어느새 바닥을 드러내는 모습을 상상하세요.',
      soundAlike: '슬립(slip)은 \'슬쩍\'과 발음이 비슷하여 시간이 슬쩍 지나가 버린 상황과 연결하면 쉽습니다.',
      context: '주로 시간이 인지하지 못한 사이에 훌쩍 지나갔음을 표현할 때 문학적으로 사용됩니다.',
      synonymAntonym: '시간의 흐름을 뜻하는 passage와 유사하며, 정지 상태를 뜻하는 stagnation과 반대됩니다.',
    }),
    {
      definition: 'The act of passing or gliding away gradually and often unnoticed, especially in relation to time.',
      synonyms: ['passage', 'elapsing', 'lapse'],
      antonyms: ['stagnation', 'permanence', 'fixity'],
      exampleSentences: [
        { en: 'The years began to slip away before he realized his youth was gone.', ko: '그는 자신의 젊음이 다 가버렸다는 것을 깨닫기도 전에 어느덧 세월이 흐르기 시작했다.' },
        { en: 'A quiet slip of time occurred while she was lost in her favorite book.', ko: '그녀가 좋아하는 책에 빠져 있는 동안 어느덧 시간이 훌쩍 지나가 버렸다.' },
      ],
      wordDistractors: ['sip', 'clip', 'skip'],
      definitionDistractors: [
        'A firm grip or hold applied to an object to prevent it from moving',
        'A small piece of paper with information printed on it',
        'A quick and sudden jump upward from the ground',
      ],
    }
  ),
  word('slope', '비탈', 3, 'noun',
    ['평지', '정상', '계곡', '절벽', '동굴', '평원', '해안', '분지', '습지', '사막'],
    tips({
      etymology: '중세 영어 \'aslope\'에서 유래하여 \'비스듬한 상태\'를 의미하게 되었습니다.',
      visual: '스키장의 가파른 경사면이나 산의 비탈길을 미끄러져 내려가는 모습을 상상하세요.',
      soundAlike: '\'슬로프\'라는 발음은 스키장에서 흔히 쓰는 용어이므로 눈 덮인 경사면을 떠올리면 쉽습니다.',
      context: '지형을 설명할 때뿐만 아니라 수학에서 그래프의 기울기를 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: '경사를 뜻하는 incline과 유의어이며, 완전히 평평한 flat과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A surface of which one end or side is at a higher level than another; a rising or falling ground.',
      synonyms: ['incline', 'gradient', 'slant'],
      antonyms: ['level', 'flat', 'plain'],
      exampleSentences: [
        { en: 'The children enjoyed sledding down the steep grassy hill behind their house.', ko: '아이들은 집 뒤에 있는 가파른 풀밭 비탈에서 썰매 타는 것을 즐겼습니다.' },
        { en: 'Heavy rain caused the mud on the mountain side to slide down toward the road.', ko: '폭우로 인해 산비탈의 진흙이 도로 쪽으로 쏟아져 내렸습니다.' },
      ],
      wordDistractors: ['scope', 'elope', 'slop'],
      definitionDistractors: [
        'A narrow opening or passageway between two structures',
        'The highest point or peak of a mountain range',
        'A shallow depression in the ground filled with water',
      ],
    }
  ),
  word('slow', '느린', 2, 'adjective',
    ['빠른', '급한', '신속한', '즉각적인', '민첩한', '활발한', '바쁜', '날카로운', '거대한', '단단한'],
    tips({
      etymology: '고대 영어 \'slāw\'에서 유래했으며, 원래 \'둔한\'이나 \'게으른\'이라는 의미에서 속도가 낮은 상태로 발전했습니다.',
      visual: '거북이가 아주 천천히 길을 지나가며 뒤에 긴 흔적을 남기는 모습을 상상해 보세요.',
      soundAlike: '\'슬로우\'라고 발음할 때 입을 천천히 벌리며 소리를 길게 빼는 느낌을 기억하세요.',
      context: '교통 체증이 심한 도로 상황이나 이해력이 조금 부족한 상황을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '빠름을 뜻하는 fast와 반대되며, 여유로운 느낌의 leisurely와 비슷하게 쓰일 수 있습니다.',
    }),
    {
      definition: 'moving or operating at a low speed or taking a long time to happen',
      synonyms: ['sluggish', 'gradual', 'leisurely'],
      antonyms: ['rapid', 'quick', 'swift'],
      exampleSentences: [
        { en: 'The turtle made its way across the garden at a very relaxed pace.', ko: '거북이는 매우 느긋한 속도로 정원을 가로질러 갔다.' },
        { en: 'Heavy rain caused traffic to become extremely sluggish during the morning commute.', ko: '폭우로 인해 아침 출근 시간대 교통 흐름이 매우 정체되었다.' },
      ],
      wordDistractors: ['slew', 'stow', 'show'],
      definitionDistractors: [
        'Producing a loud and continuous noise or vibration',
        'Displaying an extremely bright or vivid color',
        'Requiring careful attention to very fine details',
      ],
    }
  ),
  word('small', '작은', 3, 'adjective',
    ['큰', '넓은', '거대한', '무거운', '긴', '높은', '두꺼운', '깊은', '넉넉한', '광대한'],
    tips({
      etymology: '고대 영어 smæl에서 유래하여 본래 \'좁은\' 혹은 \'가느다란\' 상태를 의미했습니다.',
      visual: '커다란 케이크 조각 옆에 아주 조금 떼어낸 작은 부스러기를 상상해 보세요.',
      soundAlike: '발음이 \'스몰\'이므로 \'스멀스멀\' 아주 적은 양이 움직이는 느낌과 연결해 보세요.',
      context: '크기가 작거나 양이 적을 때, 또는 규모가 크지 않을 때 폭넓게 사용됩니다.',
      synonymAntonym: '유의어 little, tiny와 함께 외우고, 반의어 big, large와 대조하면 효과적입니다.',
    }),
    {
      definition: 'of a size that is less than normal or usual; little',
      synonyms: ['little', 'tiny', 'miniature'],
      antonyms: ['big', 'large', 'enormous'],
      exampleSentences: [
        { en: 'The small kitten curled up in the palm of her hand and fell asleep.', ko: '작은 새끼 고양이가 그녀의 손바닥 위에서 웅크리고 잠이 들었습니다.' },
        { en: 'They live in a small apartment near the train station.', ko: '그들은 기차역 근처의 작은 아파트에 살고 있습니다.' },
      ],
      wordDistractors: ['smell', 'shall', 'smelt'],
      definitionDistractors: [
        'Having a very loud or powerful sound that can be heard from far away',
        'Made of a strong and durable material that resists damage',
        'Arranged in a neat and organized pattern or formation',
      ],
    }
  ),
  word('smart', '재치있는', 1, 'adjective',
    ['어리석은', '느린', '둔한', '평범한', '지루한', '무거운', '어두운', '조용한', '거친', '서투른'],
    tips({
      etymology: '고대 영어 smeortan에서 유래하여 원래는 \'날카로운 통증\'을 의미했으나, 점차 정신이 날카롭고 기민하다는 뜻으로 확장되었습니다.',
      visual: '퀴즈 쇼에서 정답을 맞히고 윙크를 하며 여유롭게 웃고 있는 영리한 학생의 모습을 상상해 보세요.',
      soundAlike: '한국어 \'스마트\'폰을 떠올리면 쉽습니다. 똑똑하고 다재다능한 기능을 가진 기기처럼 영리하다는 뜻입니다.',
      context: '주로 지능이 높거나 상황 판단이 빠른 사람을 칭찬할 때 사용하며, 옷차림이 깔끔하고 세련된 경우에도 쓰입니다.',
      synonymAntonym: 'intelligent와 유사하며, 반대로 판단력이 부족하거나 어리석은 경우에는 stupid나 foolish를 사용합니다.',
    }),
    {
      definition: 'having or showing a quick-witted intelligence and a high ability to learn and understand things',
      synonyms: ['intelligent', 'clever', 'bright'],
      antonyms: ['stupid', 'foolish', 'dumb'],
      exampleSentences: [
        { en: 'The student gave a very clever answer to the difficult question.', ko: '그 학생은 어려운 질문에 매우 영리한 답변을 내놓았습니다.' },
        { en: 'She is known for being a quick-witted businesswoman who makes great decisions.', ko: '그녀는 훌륭한 결정을 내리는 재치 있는 사업가로 알려져 있습니다.' },
      ],
      wordDistractors: ['smear', 'start', 'swart'],
      definitionDistractors: [
        'Feeling a sharp, stinging pain in a specific part of the body',
        'Dressed in formal or elegant clothing for a special occasion',
        'Moving at a very high speed without any hesitation',
      ],
    }
  ),
  word('smash', '박살내다', 7, 'verb',
    ['수리하다', '보존하다', '건설하다', '창조하다', '조립하다', '부드럽게 다루다', '연결하다', '보호하다', '정돈하다', '강화하다'],
    tips({
      etymology: '강한 타격음을 흉내 낸 의성어에서 유래하여 무언가를 세게 치는 동작을 나타냅니다.',
      visual: '유리창에 야구공이 날아와 수만 개의 조각으로 흩어지는 장면을 상상해 보세요.',
      soundAlike: '\'스매시\'는 테니스나 배드민턴에서 공을 내리꽂는 강력한 공격 기술 이름과 같습니다.',
      context: '물건을 물리적으로 부수는 것뿐만 아니라 기록을 갈아치울 때도 자주 쓰입니다.',
      synonymAntonym: '강하게 부수는 shatter와 대조적으로 조심스럽게 다루는 preserve를 기억하세요.',
    }),
    {
      definition: 'to break something into many small pieces by hitting it with great force',
      synonyms: ['shatter', 'crush', 'demolish'],
      antonyms: ['mend', 'repair', 'preserve'],
      exampleSentences: [
        { en: 'The angry waves continued to hit the shore and break the wooden pier into pieces.', ko: '거센 파도가 계속 해안을 쳐서 나무 선착장을 박살 냈다.' },
        { en: 'He accidentally dropped the expensive vase and watched it shatter against the floor.', ko: '그는 실수로 비싼 꽃병을 떨어뜨렸고 그것이 바닥에 부딪혀 박살 나는 것을 보았다.' },
      ],
      wordDistractors: ['mash', 'smack', 'slash'],
      definitionDistractors: [
        'To carefully assemble or construct something from individual parts',
        'To gently press or squeeze something into a desired shape',
        'To polish a surface until it becomes smooth and reflective',
      ],
    }
  ),
  word('smell', '냄새', 2, 'noun',
    ['소리', '맛', '촉감', '시력', '공기', '향수', '바람', '모양', '색깔', '무게'],
    tips({
      etymology: '고대 영어 \'smellan\'에서 유래했으며, 코를 통해 공기 중의 입자를 감지하는 감각을 뜻합니다.',
      visual: '갓 구운 빵이나 향긋한 꽃 옆에서 코를 킁킁거리며 향기를 맡는 모습을 상상해 보세요.',
      soundAlike: '\'스멜\'이라고 발음하며, 한국에서도 \'좋은 스멜이 난다\'처럼 일상적으로 자주 쓰여 익숙합니다.',
      context: '음식의 향기부터 불쾌한 악취까지 코로 느껴지는 모든 자극을 표현할 때 사용합니다.',
      synonymAntonym: '좋은 향기는 scent나 aroma라고 부르며, 반대로 냄새가 전혀 없는 상태는 odorless라고 합니다.',
    }),
    {
      definition: 'the faculty or power of perceiving odors or scents through the nose',
      synonyms: ['scent', 'odor', 'fragrance'],
      antonyms: ['odorlessness', 'stink', 'stench'],
      exampleSentences: [
        { en: 'The sweet smell of blooming roses filled the entire garden.', ko: '활짝 핀 장미의 달콤한 향기가 정원 전체를 가득 채웠다.' },
        { en: 'A strange smell coming from the kitchen suggested that the milk had gone bad.', ko: '주방에서 나는 이상한 냄새는 우유가 상했다는 것을 암시했다.' },
      ],
      wordDistractors: ['spell', 'shell', 'swell'],
      definitionDistractors: [
        'The ability to hear faint sounds from a great distance',
        'A visible mark or stain left on a surface after contact',
        'The sensation of temperature change felt through the skin',
      ],
    }
  ),
  word('smile', '미소', 3, 'noun',
    ['눈물', '분노', '슬픔', '고통', '절망', '침묵', '공포', '질투', '한숨', '불안'],
    tips({
      etymology: '중세 영어 \'smilen\'에서 유래되었으며, 즐거움이나 친절함을 나타내는 표정을 의미합니다.',
      visual: '입꼬리가 위로 올라가고 눈가에 주름이 잡히는 행복한 얼굴을 상상해 보세요.',
      soundAlike: '\'스마일\'은 카메라 앞에서 사진을 찍을 때 외치는 소리와 같아 기억하기 쉽습니다.',
      context: '누군가를 반기거나 기분 좋은 소식을 들었을 때 얼굴에 나타나는 긍정적인 반응입니다.',
      synonymAntonym: 'grin이나 beam은 더 넓은 미소를, frown은 반대로 찌푸린 표정을 뜻합니다.',
    }),
    {
      definition: 'A facial expression characterized by turning up the corners of the mouth, usually showing pleasure or amusement.',
      synonyms: ['grin', 'beam', 'smirk'],
      antonyms: ['frown', 'scowl', 'glare'],
      exampleSentences: [
        { en: 'A warm expression appeared on her face when she saw the little puppy.', ko: '그녀가 작은 강아지를 보았을 때 그녀의 얼굴에 따뜻한 미소가 나타났습니다.' },
        { en: 'The kind stranger greeted me with a friendly look and a wave.', ko: '친절한 낯선 사람이 다정한 미소와 손짓으로 나를 맞이했습니다.' },
      ],
      wordDistractors: ['smite', 'simile', 'guile'],
      definitionDistractors: [
        'A deep wrinkle or crease formed on the forehead from concentration',
        'A loud burst of laughter that echoes through a room',
        'A gesture made by waving one hand rapidly back and forth',
      ],
    }
  ),
  word('smoke', '연기', 4, 'noun',
    ['불꽃', '안개', '먼지', '증기', '공기', '냄새', '바람', '구름', '재', '열기'],
    tips({
      etymology: '고대 영어 smoca에서 유래했으며, 무언가 타오를 때 발생하는 기체를 의미합니다.',
      visual: '굴뚝 위로 회색빛 구름이 뭉게뭉게 피어오르는 모습을 상상해 보세요.',
      soundAlike: '스모그(smog) 현상을 떠올리면 연기와 관련된 단어임을 쉽게 기억할 수 있습니다.',
      context: '화재 현장이나 담배를 피우는 상황에서 공기 중에 떠다니는 물질을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'fume이나 vapor와 비슷하지만, 불이 날 때 생기는 것은 주로 이 단어를 씁니다.',
    }),
    {
      definition: 'the grey, black, or white gas that is produced by something that is burning',
      synonyms: ['fume', 'exhaust', 'vapor'],
      antonyms: ['clarity', 'purity', 'freshness'],
      exampleSentences: [
        { en: 'Thick black clouds rose from the burning building into the sky.', ko: '타오르는 건물에서 짙은 검은 연기가 하늘로 솟구쳤다.' },
        { en: 'The campfire produced so much haze that our eyes began to water.', ko: '캠프파이어에서 연기가 너무 많이 나서 우리 눈에 눈물이 고이기 시작했다.' },
      ],
      wordDistractors: ['spoke', 'smote', 'stroke'],
      definitionDistractors: [
        'A bright flash of light produced during a thunderstorm',
        'Fine particles of earth or sand carried by the wind',
        'A thick white mist that forms near the ground on cold mornings',
      ],
    }
  ),
  word('smooth', '매끄러운', 5, 'adjective',
    ['거친', '울퉁불퉁한', '날카로운', '단단한', '끈적이는', '축축한', '건조한', '희미한', '복잡한', '무거운'],
    tips({
      etymology: '고대 영어 smōth에서 유래하여 마찰이 없는 평평한 상태를 의미합니다.',
      visual: '갓 얼어붙은 빙판이나 잘 닦인 유리창의 표면을 상상해 보세요.',
      soundAlike: '스무디(smoothie) 음료를 마실 때 목 넘김이 부드러운 느낌을 떠올려 보세요.',
      context: '피부결, 도로의 표면, 또는 일이 차질 없이 진행되는 상황에 자주 쓰입니다.',
      synonymAntonym: 'rough(거친)과는 반대되며, sleek(매끄러운)과는 비슷한 결을 가진 단어입니다.',
    }),
    {
      definition: 'having an even and regular surface free from perceptible projections, lumps, or indentations',
      synonyms: ['sleek', 'polished', 'level'],
      antonyms: ['rough', 'bumpy', 'coarse'],
      exampleSentences: [
        { en: 'The marble floor felt cool and even under my bare feet.', ko: '대리석 바닥이 맨발 아래에서 시원하고 매끄럽게 느껴졌다.' },
        { en: 'The transition between the two songs was so seamless that I barely noticed it.', ko: '두 노래 사이의 전환이 매우 매끄러워서 거의 알아채지 못했다.' },
      ],
      wordDistractors: ['soothe', 'smooch', 'smother'],
      definitionDistractors: [
        'Producing a harsh or grating sound when rubbed against another object',
        'Having an extremely sour or bitter taste that lingers',
        'Covered with a thick layer of dust or fine powder',
      ],
    }
  ),
  word('snake', '뱀', 6, 'noun',
    ['도마뱀', '개구리', '거북이', '악어', '지렁이', '달팽이', '전갈', '거미', '지네', '물고기'],
    tips({
      etymology: '고대 영어 \'snaca\'에서 유래했으며, \'기어가다\'라는 의미의 어근과 연결되어 다리 없이 땅을 기어 다니는 생물을 뜻하게 되었습니다.',
      visual: '알파벳 \'S\'의 구불구불한 모양이 마치 기다란 파충류가 몸을 꼬고 있는 모습과 비슷하다고 상상해 보세요.',
      soundAlike: '\'스네이크\' 발음 시 \'스~\' 하는 소리가 뱀이 혀를 날름거리며 내는 쉿 소리와 비슷하게 들립니다.',
      context: '동물학적 의미 외에도, 믿을 수 없거나 교활한 사람을 비유적으로 표현할 때 자주 사용되는 단어입니다.',
      synonymAntonym: '파충류를 뜻하는 reptile과 유사하며, 다리가 달린 포유류인 mammal과는 대조적인 특징을 가집니다.',
    }),
    {
      definition: 'A long, thin reptile with a scaly body and no legs that moves by sliding along the ground.',
      synonyms: ['serpent', 'reptile', 'viper'],
      antonyms: ['mammal', 'bird', 'human'],
      exampleSentences: [
        { en: 'The long reptile slithered silently through the tall green grass to avoid being seen.', ko: '그 긴 파충류는 눈에 띄지 않으려고 높은 풀숲 사이를 소리 없이 기어갔다.' },
        { en: 'Be careful while hiking because some species in this forest might be venomous.', ko: '이 숲의 일부 종들은 독이 있을 수 있으니 등산할 때 조심하십시오.' },
      ],
      wordDistractors: ['snare', 'stake', 'shake'],
      definitionDistractors: [
        'A large aquatic mammal that lives in rivers and lakes',
        'A type of insect with colorful wings that migrates seasonally',
        'A small furry animal that stores food underground for winter',
      ],
    }
  ),
  word('snap', '찰칵, 딱 하는 소리', 7, 'noun',
    ['균열', '충돌', '폭발', '파열', '진동', '마찰', '울림', '파편', '충격', '떨림'],
    tips({
      etymology: '중세 네덜란드어 \'snappen\'에서 유래하여 무언가를 재빨리 낚아채거나 부러뜨리는 소리를 나타냅니다.',
      visual: '악어가 입을 크게 벌려 먹이를 한 번에 낚아채는 순간의 역동적인 움직임을 상상해 보세요.',
      soundAlike: '손가락을 튕길 때 나는 \'스냅\' 소리처럼 아주 짧고 순식간에 일어나는 동작을 연상하면 쉽습니다.',
      context: '주로 무언가를 급하게 움켜쥐거나, 인내심이 한계에 도달해 갑자기 폭발하는 상황에서 사용됩니다.',
      synonymAntonym: '무언가를 움켜쥐는 grab과 비슷하지만, 놓아주는 release와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A sudden, quick movement or sound, often involving breaking or seizing something abruptly.',
      synonyms: ['grasp', 'clutch', 'snatch'],
      antonyms: ['release', 'liberation', 'loosening'],
      exampleSentences: [
        { en: 'The dog made a sudden lunging motion to catch the falling treat in one quick movement.', ko: '그 개는 떨어지는 간식을 한 번에 덥석 잡기 위해 갑자기 몸을 날렸다.' },
        { en: 'A sharp sound echoed through the forest as the dry branch broke under his heavy boot.', ko: '그의 무거운 장화 아래에서 마른 나뭇가지가 툭 부러지자 날카로운 소리가 숲속에 울려 퍼졌다.' },
      ],
      wordDistractors: ['snag', 'strap', 'span'],
      definitionDistractors: [
        'A prolonged and continuous humming or buzzing noise',
        'A slow, deliberate movement performed with great care',
        'The act of carefully wrapping something in protective material',
      ],
    }
  ),
  word('sneak', '몰래 행동하는 사람', 8, 'noun',
    ['정직', '공개', '당당', '발각', '추적', '허락', '감시', '질서', '신뢰', '보호'],
    tips({
      etymology: '중세 영어 \'sniken\'에서 유래하여 기어다니거나 조용히 움직이는 동작을 의미합니다.',
      visual: '검은 옷을 입은 도둑이 발소리를 죽이며 어두운 복도를 지나가는 모습을 상상해 보세요.',
      soundAlike: '운동화 \'스니커즈(sneakers)\'를 떠올려 보세요. 소리 없이 걷게 해주는 신발이라는 뜻입니다.',
      context: '주로 남의 눈을 피해 무언가를 훔치거나 몰래 들어갈 때 자주 사용되는 표현입니다.',
      synonymAntonym: '비밀스러운 \'stealth\'와 유의어이며, 대놓고 드러내는 \'openness\'와는 반대됩니다.',
    }),
    {
      definition: 'A person who acts in a stealthy or furtive manner, often to avoid being seen or heard.',
      synonyms: ['informer', 'prowler', 'spy'],
      antonyms: ['straightforwardness', 'honesty', 'openness'],
      exampleSentences: [
        { en: 'The little boy acted like a total sneak to get an extra cookie from the jar.', ko: '그 어린 소년은 과자 단지에서 과자를 하나 더 꺼내려고 완전히 몰래 행동했다.' },
        { en: 'Nobody likes a sneak who tells the teacher every small mistake their classmates make.', ko: '반 친구들의 작은 실수 하나하나를 선생님께 고자질하는 사람을 좋아하는 사람은 아무도 없다.' },
      ],
      wordDistractors: ['streak', 'sleek', 'sneer'],
      definitionDistractors: [
        'A person who publicly announces important news to a crowd',
        'Someone who leads a group through difficult terrain on foot',
        'An individual who repairs broken machinery and equipment',
      ],
    }
  ),
  word('sniff', '킁킁거림, 훌쩍임', 9, 'noun',
    ['한숨', '기침', '재채기', '하품', '호흡', '미소', '눈물', '침묵', '속삭임', '외침'],
    tips({
      etymology: '코를 킁킁거리는 소리를 흉내 낸 의성어에서 유래했습니다.',
      visual: '강아지가 낯선 사람의 신발에 코를 대고 냄새를 맡는 모습을 상상해 보세요.',
      soundAlike: '\'스니프\'라는 발음이 코를 들이마실 때 나는 소리와 매우 흡사합니다.',
      context: '감기에 걸려 콧물이 나거나 무언가 수상한 냄새가 날 때 사용하는 표현입니다.',
      synonymAntonym: '냄새를 맡는 행위인 inhale과 반대로 숨을 내뱉는 exhale을 비교해 보세요.',
    }),
    {
      definition: 'The act of drawing air in through the nose in a short, audible way, often to smell something or to stop mucus from running.',
      synonyms: ['snuffle', 'whiff', 'inhalation'],
      antonyms: ['exhalation', 'stink', 'stench'],
      exampleSentences: [
        { en: 'The detective took a quick sniff of the glass to identify the mysterious liquid.', ko: '형사는 신비한 액체의 정체를 밝히기 위해 유리잔의 냄새를 빠르게 맡아보았다.' },
        { en: 'She gave a small sniff and wiped her eyes after the emotional movie ended.', ko: '그녀는 감동적인 영화가 끝난 후 코를 훌쩍이며 눈물을 닦았다.' },
      ],
      wordDistractors: ['snip', 'stiff', 'swift'],
      definitionDistractors: [
        'A deep sigh released slowly to express relief or exhaustion',
        'The act of blowing air forcefully from the mouth to cool something',
        'A sharp, sudden cry produced by a startled animal',
      ],
    }
  ),
  word('snow', '눈', 1, 'noun',
    ['비', '바람', '구름', '태양', '안개', '번개', '우박', '태풍', '서리', '이슬'],
    tips({
      etymology: '고대 영어 \'snaw\'에서 유래했으며, 인도유럽어족의 \'snieg\'와 연결되어 하얗게 내리는 결정을 뜻합니다.',
      visual: '검은색 코트 어깨 위에 내려앉은 하얗고 차가운 육각형 모양의 결정을 상상해 보세요.',
      soundAlike: '발음이 \'스노우\'이므로, \'스\'르르 \'노\'가(녹아) 내리는 하얀 가루라고 연상하면 쉽습니다.',
      context: '겨울철 기상 예보에서 가장 자주 등장하며 스키나 썰매 같은 겨울 스포츠와 밀접한 관련이 있습니다.',
      synonymAntonym: '비슷한 상태인 \'ice\'나 \'frost\'와 함께 외우고, 반대되는 뜨거운 \'heat\'를 기억하세요.',
    }),
    {
      definition: 'Atmospheric water vapor frozen into ice crystals and falling in light white flakes or lying on the ground as a white layer.',
      synonyms: ['precipitation', 'snowflake', 'blizzard'],
      antonyms: ['heat', 'sunshine', 'drought'],
      exampleSentences: [
        { en: 'Children rushed outside to build a large snowman after the heavy storm.', ko: '폭설이 내린 후 아이들은 커다란 눈사람을 만들기 위해 밖으로 달려 나갔다.' },
        { en: 'The mountain peaks are covered in white throughout the entire year.', ko: '산봉우리들은 일 년 내내 하얀 눈으로 덮여 있다.' },
      ],
      wordDistractors: ['know', 'show', 'snowy'],
      definitionDistractors: [
        'Tiny droplets of water suspended in the air near the ground',
        'Small pellets of ice that fall during severe thunderstorms',
        'A fine mist of salt water blown inland from the ocean',
      ],
    }
  ),
  word('so', '그래서, 그렇게', 2, 'adverb',
    ['아마도', '분명히', '때때로', '항상', '절대로', '거의', '매우', '오직', '갑자기', '완전히'],
    tips({
      etymology: '고대 영어 \'swa\'에서 유래하여 \'그와 같이\' 또는 \'그렇게\'라는 상태나 방식을 나타냅니다.',
      visual: '앞서 말한 내용 전체를 손가락으로 가리키며 \'그거 말이야\'라고 동의하는 모습을 상상하세요.',
      soundAlike: '한국어 \'소\'와 발음이 같으니, 소가 고개를 끄덕이며 \'그렇소\'라고 대답하는 장면을 떠올려 보세요.',
      context: '대화 중 상대방의 말에 동의하거나 앞선 상황을 요약할 때 대명사처럼 쓰입니다.',
      synonymAntonym: '마찬가지라는 뜻의 likewise와 대조되는 반대 상황인 otherwise를 함께 기억하세요.',
    }),
    {
      definition: 'a word used to refer back to a previously mentioned situation, quality, or manner to avoid repetition',
      synonyms: ['likewise', 'similarly', 'thus'],
      antonyms: ['differently', 'otherwise', 'contrarily'],
      exampleSentences: [
        { en: 'He believes the project will succeed, and I hope for it to be exactly that way.', ko: '그는 프로젝트가 성공할 것이라고 믿고 있으며, 저도 정말 그렇게 되기를 바랍니다.' },
        { en: 'If you think the weather will be cold, you should dress accordingly.', ko: '날씨가 추울 것이라고 생각한다면, 그에 맞춰 옷을 입어야 합니다.' },
      ],
      wordDistractors: ['sow', 'sol', 'sob'],
      definitionDistractors: [
        'A word used to express surprise or sudden realization',
        'An exclamation indicating strong disagreement with a statement',
        'A conjunction used to introduce a contrasting or opposing idea',
      ],
    }
  ),
  word('soak', '담금, 불리기', 4, 'noun',
    ['건조하다', '말리다', '태우다', '얼리다', '닦다', '털다', '자르다', '던지다', '부수다', '밀다'],
    tips({
      etymology: '고대 영어 \'socian\'에서 유래하여 액체를 빨아들이다라는 의미에서 시작되었습니다.',
      visual: '마른 스펀지를 물이 가득 담긴 대야에 푹 집어넣는 모습을 상상해 보세요.',
      soundAlike: '비누를 뜻하는 \'soap\'과 발음이 비슷하죠? 비누 거품 물에 빨래를 담그는 장면을 떠올리세요.',
      context: '요리하기 전 딱딱한 콩을 부드럽게 만들기 위해 물에 불리는 상황에서 자주 쓰입니다.',
      synonymAntonym: '완전히 적시는 drench와 비슷하지만, 바짝 말리는 dry와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the act of leaving something in a liquid for a period of time to make it wet or clean',
      synonyms: ['immersion', 'saturation', 'steeping'],
      antonyms: ['dehydration', 'desiccation', 'drainage'],
      exampleSentences: [
        { en: 'Give the dirty clothes a long soak in warm soapy water before washing them.', ko: '더러운 옷들을 세탁하기 전에 따뜻한 비눗물에 오랫동안 담가 두세요.' },
        { en: 'A hot soak in the bathtub is the best way to relax after a stressful day.', ko: '스트레스 쌓인 하루 끝에 욕조에서 따뜻하게 몸을 담그는 것이 휴식을 취하는 가장 좋은 방법입니다.' },
      ],
      wordDistractors: ['sock', 'soap', 'cloak'],
      definitionDistractors: [
        'The process of heating a substance until it completely evaporates',
        'A quick rinse under running water to remove surface dirt',
        'The act of squeezing moisture out of a damp cloth or sponge',
      ],
    }
  ),
  word('soap', '비누', 5, 'noun',
    ['샴푸', '수건', '치약', '칫솔', '세제', '거울', '수도꼭지', '욕조', '빗', '면도기'],
    tips({
      etymology: '고대 로마의 사포 산(Mount Sapo)에서 제물을 태운 재와 기름이 섞여 씻는 물질이 되었다는 전설에서 유래했습니다.',
      visual: '화장실 비누 받침대 위에서 미끌거리는 하얀 비누 거품이 일어나는 모습을 상상하세요.',
      soundAlike: '\'소프\'라고 발음하며, 손에 묻은 \'소\'중한 \'프\'라이팬 기름기를 닦아내는 장면을 연상하세요.',
      context: '세수할 때나 손을 씻을 때 가장 먼저 찾는 세정 도구입니다.',
      synonymAntonym: '세정제인 cleanser와 비슷하지만, 더러움 그 자체인 dirt와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A substance used with water for washing and cleaning, made of natural oils or fats with an alkali.',
      synonyms: ['cleanser', 'detergent', 'bar'],
      antonyms: ['dirt', 'grime', 'stain'],
      exampleSentences: [
        { en: 'Wash your hands thoroughly with warm water and a bar of lavender scented soap.', ko: '따뜻한 물과 라벤더 향이 나는 비누 한 개로 손을 깨끗이 씻으세요.' },
        { en: 'The slippery floor was covered in bubbles because the liquid soap spilled everywhere.', ko: '액체 비누가 사방에 쏟아지는 바람에 미끄러운 바닥이 거품으로 뒤덮였습니다.' },
      ],
      wordDistractors: ['sap', 'soar', 'seep'],
      definitionDistractors: [
        'A thick fabric used to dry wet surfaces after washing',
        'A fragrant liquid applied to the body for a pleasant scent',
        'A sharp tool used to scrape residue from flat surfaces',
      ],
    }
  ),
  word('soccer', '축구', 3, 'noun',
    ['야구', '농구', '배구', '수영', '테니스', '탁구', '골프', '하키', '럭비', '승마'],
    tips({
      etymology: 'Association Football의 soc 부분을 따서 만든 단어로, 영국에서 시작된 스포츠 명칭입니다.',
      visual: '잔디밭 위에서 흰색과 검은색이 섞인 공을 발로 차는 선수들의 모습을 상상해 보세요.',
      soundAlike: '공을 \'차(soccer)\'는 소리와 비슷하게 발음하며 기억하면 쉽습니다.',
      context: '월드컵이나 프리미어 리그 같은 세계적인 경기 대회를 떠올리며 사용해 보세요.',
      synonymAntonym: 'football과 같은 의미로 쓰이지만, 야구(baseball)나 농구(basketball)와는 다른 종목입니다.',
    }),
    {
      definition: 'A game played by two teams of eleven players using a round ball which players kick into a goal.',
      synonyms: ['football', 'association football', 'the beautiful game'],
      antonyms: ['baseball', 'basketball', 'volleyball'],
      exampleSentences: [
        { en: 'Children gathered at the park to play a friendly match after school.', ko: '아이들은 방과 후에 친선 경기를 하기 위해 공원에 모였다.' },
        { en: 'He injured his ankle while practicing penalty kicks during the weekend.', ko: '그는 주말 동안 페널티킥을 연습하다가 발목을 다쳤다.' },
      ],
      wordDistractors: ['sucker', 'soaker', 'saucer'],
      definitionDistractors: [
        'A board game played on a checkered surface with pieces of different ranks',
        'An individual endurance race completed over a long-distance course',
        'A competitive card game played by four players at a table',
      ],
    }
  ),
  word('social', '사회의', 6, 'adjective',
    ['개인적인', '비밀의', '독립적인', '고립된', '내성적인', '물리적인', '기술적인', '경제적인', '정치적인', '역사적인'],
    tips({
      etymology: '라틴어 \'socius\'에서 유래했으며, 이는 동료나 친구를 의미하여 사람들 사이의 관계를 나타냅니다.',
      visual: '광장에 많은 사람들이 모여 서로 대화를 나누고 어울리는 활기찬 모습을 상상해 보세요.',
      soundAlike: '발음이 \'소셜\'로 들리는데, 소셜 미디어(SNS)를 통해 사람들과 소통하는 장면을 연결하면 쉽습니다.',
      context: '인간은 혼자 살 수 없는 존재이기에 사회적 동물이라고 불리는 맥락에서 자주 쓰입니다.',
      synonymAntonym: '공동체를 뜻하는 communal과 유의어이며, 개인을 뜻하는 individual과 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to society or its organization and the way people live together in groups',
      synonyms: ['communal', 'collective', 'public'],
      antonyms: ['individual', 'private', 'solitary'],
      exampleSentences: [
        { en: 'Humans are often described as creatures that thrive on interaction and community bonds.', ko: '인간은 종종 상호작용과 공동체 유대를 바탕으로 번성하는 생물로 묘사됩니다.' },
        { en: 'The government is implementing new policies to address various community issues and welfare.', ko: '정부는 다양한 공동체 문제와 복지를 해결하기 위해 새로운 정책을 시행하고 있습니다.' },
      ],
      wordDistractors: ['focal', 'vocal', 'local'],
      definitionDistractors: [
        'Relating to the physical properties of matter and energy',
        'Concerned with the buying and selling of goods for profit',
        'Belonging to a single person rather than a group or community',
      ],
    }
  ),
  word('society', '사회', 4, 'noun',
    ['개인', '정부', '경제', '문화', '역사', '자연', '기술', '교육', '종교', '법률'],
    tips({
      etymology: '라틴어 \'socius(동료)\'에서 유래하여 함께 어울려 사는 집단을 의미합니다.',
      visual: '수많은 사람들이 거대한 그물망처럼 서로 연결되어 대화하는 모습을 상상하세요.',
      soundAlike: '소사이어티 -> \'소(cow) 사이\'에 \'어디\' 사람들이 모여 사나? 하며 사회를 연상하세요.',
      context: '현대 문명에서 인간이 타인과 관계를 맺으며 살아가는 공동체 전체를 일컫습니다.',
      synonymAntonym: 'community와 비슷하지만 더 넓은 범위를 뜻하며, individual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A large group of people who live together in an organized way, making decisions about how to do things and sharing the same laws.',
      synonyms: ['community', 'civilization', 'public'],
      antonyms: ['individual', 'solitude', 'isolation'],
      exampleSentences: [
        { en: 'Every member of this community must contribute to the well-being of the entire population.', ko: '이 공동체의 모든 구성원은 전체 인구의 안녕을 위해 기여해야 합니다.' },
        { en: 'Modern technology has fundamentally changed the way human groups interact with one another.', ko: '현대 기술은 인간 집단이 서로 상호작용하는 방식을 근본적으로 바꾸어 놓았습니다.' },
      ],
      wordDistractors: ['sobriety', 'solitary', 'satiety'],
      definitionDistractors: [
        'A formal agreement between two nations regarding trade policies',
        'A scientific theory explaining the behavior of subatomic particles',
        'A system of religious beliefs practiced by a small group of followers',
      ],
    }
  ),
  word('sociology', '사회학', 4, 'noun',
    ['심리학', '경제학', '인류학', '정치학', '철학', '지리학', '역사학', '통계학', '교육학', '언어학'],
    tips({
      etymology: '라틴어 socius(동료, 사회)와 그리스어 logia(학문)가 결합되어 사회를 연구하는 학문을 뜻합니다.',
      visual: '수많은 사람들이 그물망처럼 복잡하게 얽혀 있는 사회 구조를 연구하는 학자의 모습을 상상해 보세요.',
      soundAlike: '소시올로지 -> \'소시(Society)\'와 \'올로지(학문)\'가 합쳐진 발음으로 기억하면 쉽습니다.',
      context: '대학교 전공이나 사회 현상을 분석하는 뉴스 기사에서 자주 등장하는 학술적 용어입니다.',
      synonymAntonym: '사회 과학의 한 분야이며, 개인의 심리를 다루는 심리학과는 대조적인 관점을 가집니다.',
    }),
    {
      definition: 'The scientific study of society, including patterns of social relationships, social interaction, and culture.',
      synonyms: ['social science', 'social studies', 'psephology'],
      antonyms: ['individualism', 'biology', 'solitude'],
      exampleSentences: [
        { en: 'The professor published a groundbreaking paper on the urban sociology of modern megacities.', ko: '그 교수는 현대 거대 도시의 도시 사회학에 관한 획기적인 논문을 발표했습니다.' },
        { en: 'Students majoring in this field often examine how social class affects educational opportunities.', ko: '이 분야를 전공하는 학생들은 종종 사회 계층이 교육 기회에 어떤 영향을 미치는지 조사합니다.' },
      ],
      wordDistractors: ['zoology', 'psychology', 'theology'],
      definitionDistractors: [
        'The branch of science that studies the chemical composition of rocks and minerals',
        'The mathematical analysis of statistical data in controlled experiments',
        'The study of ancient languages and their evolution over centuries',
      ],
    }
  ),
  word('sock', '양말', 1, 'noun',
    ['장갑', '신발', '모자', '바지', '치마', '코트', '셔츠', '벨트', '목도리', '가방'],
    tips({
      etymology: '고대 영어 socc에서 유래했으며, 발을 보호하기 위해 신발 안에 신는 의류를 뜻합니다.',
      visual: '신발을 신기 전에 발목까지 올라오는 양말 한 짝을 신는 장면을 떠올려 보세요.',
      soundAlike: 'sock은 \'삭\' 하고 신는 발 덮개라고 연상하면 기억하기 쉽습니다.',
      context: '운동을 하거나 외출할 때 신발과 함께 꼭 착용하는 기본 의류를 말할 때 자주 쓰입니다.',
      synonymAntonym: 'stocking은 긴 양말을 뜻해 유사하고, 맨발을 뜻하는 barefoot와는 반대됩니다.',
    }),
    {
      definition: 'a piece of clothing worn on the foot and often covering the ankle or part of the calf',
      synonyms: ['stocking', 'hosiery', 'anklet'],
      antonyms: ['barefoot', 'shoe', 'sandal'],
      exampleSentences: [
        { en: 'I need a clean pair of socks before going out.', ko: '나가기 전에 깨끗한 양말 한 켤레가 필요하다.' },
        { en: 'He wore thick wool socks in the winter.', ko: '그는 겨울에 두꺼운 울 양말을 신었다.' },
      ],
      wordDistractors: ['sack', 'stock', 'dock'],
      definitionDistractors: [
        'A thick glove worn to protect the hands from cold or injury',
        'A narrow band of fabric tied around the neck for decoration',
        'A lightweight covering draped over the shoulders for warmth',
      ],
    }
  ),
  word('soft', '부드러운', 2, 'adjective',
    ['딱딱한', '거친', '날카로운', '무거운', '빠른', '어두운', '시끄러운', '차가운', '단단한', '강력한'],
    tips({
      etymology: '고대 영어 \'sefte\'에서 유래했으며, 이는 \'편안한\' 또는 \'온화한\' 상태를 의미합니다.',
      visual: '갓 구운 빵이나 푹신한 솜사탕을 손으로 눌렀을 때 쑥 들어가는 느낌을 상상해 보세요.',
      soundAlike: '\'소프트\' 아이스크림의 입안에서 사르르 녹는 질감을 발음과 연결하면 쉽습니다.',
      context: '피부의 감촉, 목소리의 톤, 혹은 빛의 밝기가 자극적이지 않고 온화할 때 주로 쓰입니다.',
      synonymAntonym: '거친 질감을 뜻하는 rough와 반대되며, 매끄러운 smooth와는 비슷한 결을 가집니다.',
    }),
    {
      definition: 'having a surface or texture that is pleasant to touch and not hard, firm, or rigid',
      synonyms: ['gentle', 'fluffy', 'smooth'],
      antonyms: ['hard', 'rough', 'tough'],
      exampleSentences: [
        { en: 'The kitten has very thick and velvety fur that feels wonderful against my skin.', ko: '그 새끼 고양이는 피부에 닿는 느낌이 아주 좋은 매우 두껍고 부드러운 털을 가지고 있다.' },
        { en: 'She preferred listening to quiet music and sitting on a cushioned chair after work.', ko: '그녀는 퇴근 후 조용한 음악을 듣고 푹신하고 부드러운 의자에 앉아 있는 것을 선호했다.' },
      ],
      wordDistractors: ['loft', 'sift', 'sort'],
      definitionDistractors: [
        'Extremely rigid and resistant to bending or flexing',
        'Producing a very bright and intense light that is difficult to look at',
        'Having a sharp, metallic taste that irritates the tongue',
      ],
    }
  ),
  word('software', '소프트웨어', 5, 'noun',
    ['하드웨어', '부품', '기계', '전선', '나사', '모니터', '키보드', '본체', '회로', '전지'],
    tips({
      etymology: '딱딱한 하드웨어(hardware)와 대조되는 부드러운(soft) 프로그램이라는 뜻에서 유래했습니다.',
      visual: '컴퓨터 화면 속에서 복잡하게 돌아가는 코드나 앱 아이콘들을 상상해 보세요.',
      soundAlike: '소프트(soft)하게 웨어(ware)를 입힌 것처럼 유연하게 작동하는 프로그램입니다.',
      context: '컴퓨터나 스마트폰을 작동시키기 위해 설치하는 모든 프로그램과 운영체제를 포함합니다.',
      synonymAntonym: '프로그램(program)과는 비슷하지만, 물리적인 기계 장치(hardware)와는 정반대 개념입니다.',
    }),
    {
      definition: 'The programs and other operating information used by a computer to perform specific tasks.',
      synonyms: ['program', 'application', 'firmware'],
      antonyms: ['hardware', 'machinery', 'equipment'],
      exampleSentences: [
        { en: 'The company released a new update to improve the security of their operating system.', ko: '그 회사는 운영체제의 보안을 개선하기 위해 새로운 업데이트를 출시했습니다.' },
        { en: 'Installing unnecessary applications can slow down your computer\'s performance significantly.', ko: '불필요한 응용 프로그램을 설치하는 것은 컴퓨터의 성능을 크게 저하시킬 수 있습니다.' },
      ],
      wordDistractors: ['softwood', 'warfare', 'firmware'],
      definitionDistractors: [
        'The physical components and circuits inside an electronic device',
        'A protective outer casing designed to shield equipment from damage',
        'A manual containing step-by-step instructions for assembling a machine',
      ],
    }
  ),
  word('soil', '흙', 6, 'noun',
    ['하늘', '바다', '공기', '불꽃', '구름', '먼지', '바위', '모래', '금속', '나무'],
    tips({
      etymology: '라틴어 \'solum\'에서 유래되었으며, 이는 바닥이나 지면을 의미합니다.',
      visual: '화분 속에 가득 담긴 검고 촉촉한 땅의 기운을 상상해 보세요.',
      soundAlike: '\'소일\'거리로 마당의 흙을 만지며 식물을 심는 모습을 연상하세요.',
      context: '농사나 원예에서 식물이 뿌리를 내리고 영양분을 얻는 기초 재료를 말합니다.',
      synonymAntonym: 'earth나 dirt와 비슷하지만, 식물이 자라는 생명력을 강조할 때 주로 쓰입니다.',
    }),
    {
      definition: 'The upper layer of earth in which plants grow, a black or dark brown material typically consisting of a mixture of organic remains, clay, and rock particles.',
      synonyms: ['earth', 'dirt', 'ground'],
      antonyms: ['sky', 'ocean', 'space'],
      exampleSentences: [
        { en: 'Farmers must ensure the ground is rich in nutrients before planting seeds.', ko: '농부들은 씨앗을 심기 전에 땅의 흙에 영양분이 풍부한지 확인해야 합니다.' },
        { en: 'Heavy rain washed away the top layer of the garden during the storm.', ko: '폭풍이 부는 동안 폭우가 정원의 겉흙을 씻어 내려갔습니다.' },
      ],
      wordDistractors: ['toil', 'foil', 'coil'],
      definitionDistractors: [
        'A hard rocky surface found deep beneath the ocean floor',
        'A light-colored powder used in construction to bind bricks together',
        'The process of filtering water through layers of stone and gravel',
      ],
    }
  ),
  word('soldier', '군인', 7, 'noun',
    ['경찰관', '소방관', '의사', '간호사', '요리사', '변호사', '판사', '기자', '교사', '농부'],
    tips({
      etymology: '라틴어 solidus(금화)에서 유래하여, 급료를 받고 싸우는 사람이라는 의미를 담고 있습니다.',
      visual: '위장 무늬 군복을 입고 소총을 든 채 훈련 중인 늠름한 모습을 상상해 보세요.',
      soundAlike: '발음이 \'솔저\'와 비슷하므로, \'솔\'직하게 \'저\' 나라를 지키는 사람으로 기억하세요.',
      context: '전쟁이나 국가 방위 상황에서 군대에 소속된 개인을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '전투원을 뜻하는 warrior와 유사하며, 민간인을 뜻하는 civilian과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who serves in an army and fights for their country.',
      synonyms: ['warrior', 'fighter', 'trooper'],
      antonyms: ['civilian', 'pacifist', 'noncombatant'],
      exampleSentences: [
        { en: 'The young man decided to enlist as a brave infantryman to protect his nation.', ko: '그 청년은 나라를 지키기 위해 용감한 보병 군인으로 입대하기로 결심했습니다.' },
        { en: 'Every veteran was once a dedicated individual serving in the armed forces.', ko: '모든 퇴역 군인도 한때는 군대에서 복무했던 헌신적인 개인이었습니다.' },
      ],
      wordDistractors: ['shoulder', 'solder', 'smolder'],
      definitionDistractors: [
        'A person who designs and constructs large public buildings',
        'An official who manages financial records for a business',
        'A trained professional who provides medical care in hospitals',
      ],
    }
  ),
  word('sole', '유일한', 4, 'adjective',
    ['공동의', '다수의', '복합적인', '일반적인', '평범한', '부수적인', '사소한', '집단적인', '공유된', '다양한'],
    tips({
      etymology: '라틴어 \'solus\'에서 유래되었으며, 이는 \'혼자\' 또는 \'고립된\'이라는 뜻을 가지고 있어 유일함을 나타냅니다.',
      visual: '넓은 운동장에 축구공이 딱 하나만 덩그러니 놓여 있는 장면을 상상해 보세요.',
      soundAlike: '신발 밑창을 뜻하는 \'sole\'과 발음이 같습니다. 신발 한 켤레에 밑창은 각각 하나씩만 붙어 있다고 생각하세요.',
      context: '법적 문서나 비즈니스 계약에서 독점적인 권리나 유일한 책임자를 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '하나뿐인 \'only\'와 유의어 관계이며, 여러 명이 공유하는 \'shared\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Being the only one of a kind; belonging or restricted to one person or group.',
      synonyms: ['exclusive', 'solitary', 'only'],
      antonyms: ['multiple', 'shared', 'joint'],
      exampleSentences: [
        { en: 'She was the sole survivor of the tragic plane crash.', ko: '그녀는 그 비극적인 비행기 사고의 유일한 생존자였다.' },
        { en: 'The company has the sole right to market this new invention.', ko: '그 회사는 이 새로운 발명품을 판매할 독점적인 권리를 가지고 있다.' },
      ],
      wordDistractors: ['soul', 'stole', 'pole'],
      definitionDistractors: [
        'Shared equally among all members of a group or organization',
        'Occurring frequently and in large quantities throughout an area',
        'Selected at random from a wide variety of available options',
      ],
    }
  ),
  word('solid', '고체의', 4, 'adjective',
    ['액체의', '기체의', '투명한', '유연한', '부드러운', '희박한', '불안정한', '일시적인', '공허한', '모호한'],
    tips({
      etymology: '라틴어 solidus에서 유래하여 \'전체의\', \'단단한\'이라는 의미를 담고 있습니다.',
      visual: '얼음 덩어리처럼 입자들이 빽빽하게 뭉쳐서 모양이 변하지 않는 딱딱한 물체를 상상하세요.',
      soundAlike: '\'살리다\'와 발음이 비슷하죠? 건물을 튼튼하고 단단하게 지어서 사람을 살린다고 생각해보세요.',
      context: '과학 실험에서 물질의 상태를 구분할 때나, 기초가 아주 튼튼한 계획을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'firm이나 hard와 비슷하지만, liquid나 gas와는 완전히 반대되는 상태를 나타냅니다.',
    }),
    {
      definition: 'firm and stable in shape; not liquid or fluid',
      synonyms: ['firm', 'hard', 'substantial'],
      antonyms: ['liquid', 'gaseous', 'hollow'],
      exampleSentences: [
        { en: 'Water turns into a firm state when the temperature drops below freezing.', ko: '온도가 영하로 떨어지면 물은 단단한 상태로 변한다.' },
        { en: 'The foundation of the old building remains remarkably stable after many decades.', ko: '그 오래된 건물의 기초는 수십 년이 지난 후에도 놀라울 정도로 튼튼하게 유지되고 있다.' },
      ],
      wordDistractors: ['stolid', 'soiled', 'solicit'],
      definitionDistractors: [
        'Existing in a liquid state that flows freely and takes the shape of its container',
        'Extremely fragile and likely to break apart under minimal pressure',
        'Transparent and allowing light to pass through without obstruction',
      ],
    }
  ),
  word('solo', '독주', 5, 'noun',
    ['합창', '협주', '군무', '동행', '합주', '단체', '조합', '연합', '군중', '집단'],
    tips({
      etymology: '라틴어 \'solus\'에서 유래되었으며, 이는 \'혼자\' 또는 \'유일한\'이라는 의미를 담고 있습니다.',
      visual: '무대 위에서 다른 연주자 없이 홀로 스포트라이트를 받으며 악기를 연주하는 장면을 상상해 보세요.',
      soundAlike: '한국어 \'솔로\'와 발음이 같아 연애 상태가 아닌 혼자인 사람을 떠올리면 기억하기 쉽습니다.',
      context: '음악 공연이나 비행기 조종 등 다른 사람의 도움 없이 혼자 수행하는 모든 활동에 쓰입니다.',
      synonymAntonym: '여럿이 함께하는 \'ensemble\'이나 \'group\'과는 정반대의 개념으로 이해하면 명확합니다.',
    }),
    {
      definition: 'A musical composition or a passage for a single voice or instrument, often performed with or without accompaniment.',
      synonyms: ['monologue', 'solitary', 'unaccompanied'],
      antonyms: ['ensemble', 'duet', 'group'],
      exampleSentences: [
        { en: 'The violinist performed a breathtaking piece that silenced the entire concert hall.', ko: '그 바이올린 연주자는 온 콘서트홀을 침묵하게 만든 숨 막히는 독주를 선보였다.' },
        { en: 'After years of training, the young pilot finally completed her first flight across the country.', ko: '수년간의 훈련 끝에 그 젊은 조종사는 마침내 그녀의 첫 전국 단독 비행을 마쳤다.' },
      ],
      wordDistractors: ['solemn', 'solar', 'salon'],
      definitionDistractors: [
        'A large group performance featuring an entire orchestra on stage',
        'A spoken conversation between two or more people in a play',
        'A written document signed by multiple parties in agreement',
      ],
    }
  ),
  word('solve', '해결하다', 6, 'verb',
    ['사귀다, 친해지다, 형제처럼 지내다', '꾸짖다', '묘사하다', '숨쉬다', '~했다 (do 과거)', '설치하다', '(피부를) 그을리다, 햇볕에 태우다', '간지럽히다', '재건하다, 재생시키다', '선택하다'],
    tips({
      etymology: '라틴어 solvere에서 유래했으며, 이는 \'풀다\' 또는 \'느슨하게 하다\'라는 뜻을 가지고 있어 얽힌 문제를 푸는 것과 연결됩니다.',
      visual: '엉망으로 꼬여있는 실타래를 가위 없이 손으로 하나하나 깔끔하게 풀어내는 모습을 상상해 보세요.',
      soundAlike: '\'설부\'라고 발음하며 \'설설(solve) 풀린다\'라고 기억하면 복잡한 문제도 쉽게 해결하는 느낌이 듭니다.',
      context: '수학 문제를 풀거나 사회적인 갈등을 해소할 때, 혹은 미스터리한 사건의 실마리를 찾을 때 주로 사용됩니다.',
      synonymAntonym: '해답을 찾는 resolve와 유사하며, 문제를 방치하거나 악화시키는 neglect와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to find an answer to a problem, puzzle, or difficult situation',
      synonyms: ['resolve', 'settle', 'unravel'],
      antonyms: ['complicate', 'confuse', 'neglect'],
      exampleSentences: [
        { en: 'The detective worked tirelessly to find clues that would help him crack the case.', ko: '형사는 사건을 해결하는 데 도움이 될 단서들을 찾기 위해 지치지 않고 일했습니다.' },
        { en: 'Scientists are developing new technologies to address the global energy crisis.', ko: '과학자들은 세계적인 에너지 위기를 해결하기 위해 새로운 기술들을 개발하고 있습니다.' },
      ],
      wordDistractors: ['salve', 'valve', 'shelve'],
      definitionDistractors: [
        'To create a new problem by introducing additional complexity',
        'To postpone making a decision until more information is available',
        'To dissolve a solid substance into a liquid by stirring vigorously',
      ],
    }
  ),
  word('some', '약간의', 3, 'adjective',
    ['전체의', '하나의', '모든', '전혀없는', '정확한', '거대한', '사소한', '복잡한', '단순한', '특별한'],
    tips({
      etymology: '고대 영어 \'sum\'에서 유래하여 \'어떤 특정한 하나\' 혹은 \'일부분\'을 가리키는 의미로 발전했습니다.',
      visual: '피자 한 판에서 조각 몇 개만 따로 떼어내어 접시에 담겨 있는 모습을 상상해 보세요.',
      soundAlike: '한국어 \'섬\'과 발음이 비슷합니다. 바다 위에 떠 있는 \'얼마간의\' 섬들을 떠올려 보세요.',
      context: '정확한 수치를 모를 때나 굳이 밝힐 필요가 없는 막연한 양을 나타낼 때 주로 쓰입니다.',
      synonymAntonym: '전체를 뜻하는 all이나 하나도 없음을 뜻하는 none과 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'An unspecified amount or number of something, or a certain portion of a whole.',
      synonyms: ['several', 'a few', 'various'],
      antonyms: ['all', 'none', 'every'],
      exampleSentences: [
        { en: 'There is still some milk left in the refrigerator for your breakfast.', ko: '아침 식사용으로 냉장고에 우유가 약간 남아 있습니다.' },
        { en: 'We need to find some volunteers to help with the community garden project.', ko: '지역 사회 정원 프로젝트를 도와줄 몇몇 자원봉사자들을 찾아야 합니다.' },
      ],
      wordDistractors: ['same', 'sum', 'come'],
      definitionDistractors: [
        'The complete and total quantity of something without any remainder',
        'A precisely measured and exact number of items or units',
        'Absolutely nothing or zero amount of a particular thing',
      ],
    }
  ),
  word('somewhat', '약간', 7, 'adverb',
    ['완전히', '전혀', '상당히', '절대적으로', '매우', '정확히', '결코', '거의', '충분히', '가득히'],
    tips({
      etymology: 'some(어느 정도)과 what(무엇)이 결합하여 \'어느 정도의 양\'을 나타내는 부사적 명사로 발전했습니다.',
      visual: '가득 찬 컵이 아니라 물이 찰랑거릴 정도로만 조금 담겨 있는 컵의 모습을 상상해 보세요.',
      soundAlike: '썸왓(somewhat) - \'썸\' 타는 관계처럼 확실하지는 않지만 \'약간\'의 감정이 있는 상태로 기억하세요.',
      context: '격식을 차리는 문장에서 \'조금\'이나 \'어느 정도\'를 표현할 때 very 대신 자주 쓰입니다.',
      synonymAntonym: 'a bit과 유사하지만 더 격식 있으며, totally나 completely와는 반대되는 정도를 나타냅니다.',
    }),
    {
      definition: 'to a moderate distance or degree; a certain amount or part.',
      synonyms: ['slightly', 'rather', 'moderately'],
      antonyms: ['greatly', 'significantly', 'completely'],
      exampleSentences: [
        { en: 'The results of the experiment were somewhat disappointing to the research team.', ko: '실험 결과는 연구 팀에게 약간 실망스러웠다.' },
        { en: 'The new policy differs somewhat from the previous version discussed last month.', ko: '새로운 정책은 지난달에 논의된 이전 버전과 어느 정도 차이가 있다.' },
      ],
      wordDistractors: ['somewhere', 'somehow', 'someone'],
      definitionDistractors: [
        'To an extreme and overwhelming degree beyond normal limits',
        'In a manner that is entirely complete without any exceptions',
        'Not at all or in no way whatsoever under any circumstances',
      ],
    }
  ),
  word('son', '아들', 1, 'noun',
    ['딸', '아버지', '어머니', '형제', '자매', '삼촌', '고모', '조카', '할아버지', '할머니'],
    tips({
      etymology: '고대 영어 \'sunu\'에서 유래했으며, 인도유럽어족에서 \'출산하다\'라는 의미의 뿌리를 가지고 있습니다.',
      visual: '어린 소년이 아빠의 손을 잡고 공원을 산책하는 다정한 모습을 상상해 보세요.',
      soundAlike: '태양을 뜻하는 \'sun\'과 발음이 똑같습니다. 우리 집의 밝은 태양 같은 존재라고 생각하세요.',
      context: '가족 관계를 설명할 때 부모의 입장에서 남성 자녀를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '남자 아이를 뜻하는 boy와 비슷하지만, 반드시 부모와의 혈연 관계를 전제로 합니다.',
    }),
    {
      definition: 'A male child or person in relation to his parents.',
      synonyms: ['male child', 'boy', 'descendant'],
      antonyms: ['daughter', 'parent', 'mother'],
      exampleSentences: [
        { en: 'The proud parents celebrated their youngest child\'s graduation from high school.', ko: '자랑스러운 부모님은 막내아들의 고등학교 졸업을 축하했습니다.' },
        { en: 'He looks exactly like his father when he smiles.', ko: '그는 웃을 때 그의 아버지와 똑 닮았습니다.' },
      ],
      wordDistractors: ['sun', 'sin', 'scion'],
      definitionDistractors: [
        'A female sibling who shares the same parents',
        'An older relative who provides guidance and wisdom to younger family members',
        'A legal guardian appointed by the court to care for a minor',
      ],
    }
  ),
  word('song', '노래', 2, 'noun',
    ['그림', '춤', '이야기', '소설', '연극', '시', '영화', '사진', '조각', '만화'],
    tips({
      etymology: '고대 영어 \'sang\'에서 유래했으며, \'sing(노래하다)\'의 명사형태로 소리 내어 부르는 것을 뜻합니다.',
      visual: '가수들이 마이크를 잡고 무대 위에서 아름다운 선율을 부르는 모습을 상상해 보세요.',
      soundAlike: '\'송\' 발음이 \'송송\' 썰어 넣는 소리처럼 리드미컬하게 들린다고 생각하면 기억하기 쉽습니다.',
      context: '음악 수업이나 노래방, 라디오에서 흘러나오는 가사 있는 음악을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'melody나 tune과 비슷하지만 가사가 포함된 곡을 주로 의미하며, 침묵을 뜻하는 silence와는 반대됩니다.',
    }),
    {
      definition: 'A short piece of music with words that you sing.',
      synonyms: ['track', 'melody', 'tune'],
      antonyms: ['silence', 'quiet', 'speech'],
      exampleSentences: [
        { en: 'The radio played a beautiful melody that reminded me of my childhood.', ko: '라디오에서 내 어린 시절을 떠올리게 하는 아름다운 노래가 흘러나왔다.' },
        { en: 'Everyone joined in to sing a happy birthday tune for the little girl.', ko: '모두가 어린 소녀를 위해 생일 축하 노래를 함께 부르기 시작했다.' },
      ],
      wordDistractors: ['gong', 'bong', 'prong'],
      definitionDistractors: [
        'A long narrative written in prose form and published as a book',
        'A visual artwork created with paint on a canvas or surface',
        'A dramatic performance acted out on a stage before an audience',
      ],
    }
  ),
  word('soon', '곧', 4, 'adverb',
    ['나중에', '천천히', '이미', '결코', '항상', '때때로', '자주', '드물게', '영원히', '즉시'],
    tips({
      etymology: '고대 영어 sona에서 유래하여 \'즉시\'라는 뜻을 가졌으나 현대에는 \'머지않아\'라는 시간적 양을 나타냅니다.',
      visual: '시계 바늘이 아주 조금만 움직여서 다음 약속 시간에 도달하는 모습을 상상하세요.',
      soundAlike: '한국어 \'순\'식간에와 발음이 비슷하여 아주 짧은 시간 내에 일어나는 일을 연상하기 쉽습니다.',
      context: '가격이나 양을 물을 때 쓰는 \'얼마\'보다는 시간적 간격이 \'얼마 안 남았다\'는 맥락에서 자주 쓰입니다.',
      synonymAntonym: 'shortly와 유의어 관계이며, 한참 뒤를 뜻하는 later와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Within a short period of time from now or from a specific point in the past.',
      synonyms: ['shortly', 'presently', 'promptly'],
      antonyms: ['later', 'eventually', 'distant'],
      exampleSentences: [
        { en: 'The summer vacation will begin very shortly after the final exams.', ko: '기말고사가 끝나고 얼마 안 있어 여름 방학이 시작될 것이다.' },
        { en: 'Dinner will be ready in a few minutes, so please wash your hands.', ko: '저녁 식사가 얼마 후면 준비될 테니 손을 씻으렴.' },
      ],
      wordDistractors: ['spoon', 'swoon', 'boon'],
      definitionDistractors: [
        'At a much later time far into the distant future',
        'Happening repeatedly at regular and predictable intervals',
        'Already completed and finished before the present moment',
      ],
    }
  ),
  word('sophisticated', '세련된', 8, 'adjective',
    ['단순한', '투박한', '순진한', '원시적인', '거친', '평범한', '무식한', '촌스러운', '기초적인', '직설적인'],
    tips({
      etymology: '그리스어 \'sophos(지혜로운)\'에서 유래하여, 세상 물정에 밝고 지식이 풍부함을 뜻합니다.',
      visual: '고급 레스토랑에서 와인 잔을 들고 여유롭게 대화하는 세련된 도시인의 모습을 상상하세요.',
      soundAlike: '\'소피(sophie)\'라는 세련된 이름을 가진 친구가 \'스티커(stica)\'를 \'테드(ted)\'에게 붙여주는 세련된 동작을 연상하세요.',
      context: '기술이 고도로 발달했거나, 사람의 취향이 매우 높은 수준일 때 주로 사용됩니다.',
      synonymAntonym: '세련된(refined)과 반대되는 개념은 가공되지 않은(crude) 상태입니다.',
    }),
    {
      definition: 'having a high degree of complexity, refinement, or worldly knowledge and experience',
      synonyms: ['refined', 'advanced', 'cultivated'],
      antonyms: ['naive', 'primitive', 'simple'],
      exampleSentences: [
        { en: 'The new software uses a highly complex algorithm to predict market trends.', ko: '새로운 소프트웨어는 시장 추세를 예측하기 위해 매우 정교한 알고리즘을 사용합니다.' },
        { en: 'She has developed a very cultured taste in art and music over the years.', ko: '그녀는 수년에 걸쳐 예술과 음악에 대한 매우 세련된 취향을 갖게 되었습니다.' },
      ],
      wordDistractors: ['suffocated', 'sympathetic', 'superficial'],
      definitionDistractors: [
        'Extremely plain and lacking any decorative or artistic elements',
        'Produced using only basic and outdated methods or tools',
        'Showing a lack of interest or awareness about current events',
      ],
    }
  ),
  word('sore', '아픈', 5, 'adjective',
    ['건강한', '편안한', '상쾌한', '튼튼한', '즐거운', '행복한', '활기찬', '무감각한', '유쾌한', '평온한'],
    tips({
      etymology: '고대 영어 \'sar\'에서 유래하여 신체적 통증이나 마음의 상처를 의미하게 되었습니다.',
      visual: '운동을 너무 많이 해서 근육이 욱신거리거나 마음이 아파서 눈물을 흘리는 모습을 상상하세요.',
      soundAlike: '\'쏘아\'붙이다와 비슷하게 들리는데, 누군가 쏘아붙여서 마음이 아픈 상황을 연상해 보세요.',
      context: '주로 근육통이 있을 때나 감정적으로 속상하고 서운한 상태를 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'painful과 유사하며, 아픔이 전혀 없는 상태인 painless와는 반대되는 개념입니다.',
    }),
    {
      definition: 'feeling physical pain or mental distress, often characterized by tenderness or sorrow',
      synonyms: ['painful', 'aching', 'tender'],
      antonyms: ['healthy', 'painless', 'unhurt'],
      exampleSentences: [
        { en: 'My muscles felt incredibly stiff and painful after the long hike up the mountain.', ko: '긴 산행 후에 근육이 믿기지 않을 정도로 뻐근하고 아팠다.' },
        { en: 'He was still feeling very upset about the argument they had yesterday.', ko: '그는 어제 그들이 했던 말다툼 때문에 여전히 마음이 매우 상해 있었다.' },
      ],
      wordDistractors: ['soar', 'score', 'snore'],
      definitionDistractors: [
        'Feeling extremely energetic and full of enthusiasm for an activity',
        'Completely recovered from an illness and in perfect health',
        'Experiencing a deep sense of calm and inner peace',
      ],
    }
  ),
  word('sorry', '가엾은', 3, 'adjective',
    ['최고의', '비극적인, 파멸의', '기본적인/광포한', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인'],
    tips({
      etymology: '고통을 뜻하는 \'sore\'와 어원이 같으며, 마음속에 아픔을 느끼는 상태에서 유래했습니다.',
      visual: '비에 젖어 떨고 있는 작은 강아지를 보며 안타까워하는 표정을 떠올려 보세요.',
      soundAlike: '\'쏘리\'라고 발음할 때 혀끝이 입천장에 닿으며 내는 소리가 애처로운 느낌을 줍니다.',
      context: '미안하다는 뜻 외에도 누군가의 불행이나 초라한 상태를 보고 마음이 아플 때 사용합니다.',
      synonymAntonym: '불쌍하다는 뜻의 pitiful과 반대로 부러움을 사는 enviable을 함께 기억하세요.',
    }),
    {
      definition: 'feeling or expressing sympathy, pity, or regret for someone else\'s misfortune or a poor condition',
      synonyms: ['pitiful', 'miserable', 'pathetic'],
      antonyms: ['enviable', 'admirable', 'excellent'],
      exampleSentences: [
        { en: 'The abandoned kitten was a sorry sight as it sat shivering in the cold rain.', ko: '버려진 새끼 고양이가 차가운 빗속에서 떨고 있는 모습은 가엾은 광경이었다.' },
        { en: 'He felt deeply moved by the sorry state of the refugees living in the camp.', ko: '그는 캠프에 살고 있는 난민들의 가엾은 처지에 깊은 감동을 받았다.' },
      ],
      wordDistractors: ['story', 'lorry', 'starry'],
      definitionDistractors: [
        'Feeling extremely proud and accomplished about a recent achievement',
        'Being in a state of great wealth and material abundance',
        'Displaying confident and assertive behavior in a group setting',
      ],
    }
  ),
  word('sort', '종류', 6, 'noun',
    ['슈베르트', '과실이 있음/비난받을 만함', '도로시 (여자 이름)', '명성', '수로, 항로', '수프', '정서', '발자국', '낙천가', '리듬'],
    tips({
      etymology: '라틴어 sors(운명, 몫)에서 유래하여, 같은 운명이나 성격을 가진 것들을 묶는다는 의미에서 종류가 되었습니다.',
      visual: '우체국에서 편지들을 주소지별로 각각의 칸에 나누어 담는 모습을 상상해 보세요.',
      soundAlike: '소금(salt)과 발음이 비슷하죠? 소금의 \'종류\'도 암염, 천일염 등 다양하다고 연상해 보세요.',
      context: '일상 대화에서 \'What sort of...?\'라는 표현으로 상대방의 취향이나 유형을 물을 때 자주 쓰입니다.',
      synonymAntonym: 'kind와 type은 거의 같은 의미로 쓰이며, 전체를 뜻하는 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a group of things that are similar to each other or a category of something',
      synonyms: ['kind', 'type', 'category'],
      antonyms: ['whole', 'mass', 'entity'],
      exampleSentences: [
        { en: 'What sort of music do you usually listen to when you are studying?', ko: '공부할 때 보통 어떤 종류의 음악을 듣나요?' },
        { en: 'This shop sells every sort of organic vegetable you can imagine.', ko: '이 가게는 당신이 상상할 수 있는 모든 종류의 유기농 채소를 판매합니다.' },
      ],
      wordDistractors: ['sport', 'short', 'snort'],
      definitionDistractors: [
        'A specific method or technique used to accomplish a particular task',
        'The final result or outcome of a complex series of events',
        'A formal set of rules governing behavior in a public institution',
      ],
    }
  ),
  word('soul', '혼', 7, 'noun',
    ['육체', '물질', '껍데기', '기계', '논리', '형식', '표면', '수치', '규칙', '도구'],
    tips({
      etymology: '고대 영어 \'sawol\'에서 유래했으며, 죽지 않는 영적인 존재라는 의미를 담고 있습니다.',
      visual: '사람의 몸 안에서 은은하게 빛나고 있는 작고 따뜻한 불꽃을 상상해 보세요.',
      soundAlike: '음악 장르인 \'소울\'을 떠올리며, 가슴 깊은 곳에서 울려 퍼지는 감성을 느껴보세요.',
      context: '단순히 영혼뿐만 아니라 \'어떤 일의 핵심\'이나 \'열정\'을 가진 사람을 지칭할 때도 쓰입니다.',
      synonymAntonym: '정신을 뜻하는 spirit과 유의어이며, 눈에 보이는 몸을 뜻하는 body와 반대됩니다.',
    }),
    {
      definition: 'The spiritual or immaterial part of a human being or animal, often regarded as immortal.',
      synonyms: ['spirit', 'essence', 'psyche'],
      antonyms: ['body', 'flesh', 'matter'],
      exampleSentences: [
        { en: 'Many people believe that the human spirit lives on after the body dies.', ko: '많은 사람들은 육체가 죽은 후에도 인간의 영혼은 계속 존재한다고 믿는다.' },
        { en: 'She put her entire heart and energy into the performance, moving the audience to tears.', ko: '그녀는 공연에 자신의 온 혼신과 에너지를 쏟아부어 관객들을 눈물짓게 했다.' },
      ],
      wordDistractors: ['sole', 'soil', 'fowl'],
      definitionDistractors: [
        'The physical structure of a living organism including bones and muscles',
        'A mathematical formula used to calculate distance between two points',
        'The outer protective layer of a fruit or vegetable',
      ],
    }
  ),
  word('sound', '소리', 1, 'noun',
    ['무관심', '현인,현자', '버스', '발췌', '건강', '케이 (이름)', '총계', '도관, 전달 수단', '음식점', '꽃병'],
    tips({
      etymology: '라틴어 sonus에서 유래하여 진동을 통해 귀로 전달되는 물리적 현상을 뜻합니다.',
      visual: '스피커에서 물결 모양의 파동이 퍼져나와 귀에 닿는 모습을 상상해 보세요.',
      soundAlike: '산(mountain)에서 야호라고 외칠 때 들리는 울림을 떠올려 보세요.',
      context: '음악, 목소리, 소음 등 귀로 들을 수 있는 모든 청각적 자극에 사용됩니다.',
      synonymAntonym: 'noise는 시끄러운 소리를, silence는 아무 소리도 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'Vibrations that travel through the air or another medium and can be heard when they reach a person\'s or animal\'s ear.',
      synonyms: ['noise', 'audio', 'tone'],
      antonyms: ['silence', 'quiet', 'stillness'],
      exampleSentences: [
        { en: 'The loud music made a vibrating vibration that shook the windows.', ko: '시끄러운 음악 소리가 창문을 흔드는 진동을 만들어냈다.' },
        { en: 'She woke up suddenly when she heard a strange noise coming from the kitchen.', ko: '그녀는 부엌에서 들려오는 이상한 소리를 듣고 갑자기 잠에서 깼다.' },
      ],
      wordDistractors: ['hound', 'mound', 'bound'],
      definitionDistractors: [
        'A beam of light that travels in a straight line from a source',
        'A physical object that can be touched and held in the hand',
        'The movement of air caused by differences in atmospheric pressure',
      ],
    }
  ),
  word('sour', '시큼한', 2, 'adjective',
    ['달콤한', '매콤한', '짭짤한', '고소한', '느끼한', '담백한', '떫은', '비린', '싱거운', '얼큰한'],
    tips({
      etymology: '독일어 \'sauer\'에서 유래했으며, 발효되거나 산도가 높은 상태를 의미합니다.',
      visual: '레몬을 한 입 베어 물었을 때 얼굴을 찌푸리는 표정을 상상해 보세요.',
      soundAlike: '\'사워\' 크림(Sour Cream)의 톡 쏘는 맛을 떠올리면 기억하기 쉽습니다.',
      context: '음식의 맛뿐만 아니라 사람의 표정이나 태도가 퉁명스러울 때도 사용합니다.',
      synonymAntonym: 'tart는 기분 좋게 시큼한 느낌이고, sweet는 정반대의 달콤한 맛입니다.',
    }),
    {
      definition: 'having an acid taste like the taste of a lemon or an unripe fruit',
      synonyms: ['acidic', 'tart', 'sharp'],
      antonyms: ['sweet', 'sugary', 'mellow'],
      exampleSentences: [
        { en: 'The milk has gone bad and smells quite acidic and unpleasant.', ko: '우유가 상해서 꽤 시큼하고 불쾌한 냄새가 난다.' },
        { en: 'She made a grimace after tasting the extremely green grapes.', ko: '그녀는 아주 덜 익은 포도를 맛본 후 얼굴을 찌푸렸다.' },
      ],
      wordDistractors: ['pour', 'scour', 'dour'],
      definitionDistractors: [
        'Having an extremely sweet and sugary flavor that overwhelms the palate',
        'Bland and completely lacking any distinctive taste or seasoning',
        'Producing a burning hot sensation on the tongue from spicy ingredients',
      ],
    }
  ),
  word('source', '원천', 4, 'noun',
    ['취소', '구성 요소의', '자전거', '반대, 저항', '엘리트, 정예의', '준비, 대비', '관점, 견해', '거울', '갈릴레오', '신관'],
    tips({
      etymology: '라틴어 \'surgere(솟아오르다)\'에서 유래하여 물이 솟아나오는 샘물처럼 무언가가 시작되는 지점을 뜻합니다.',
      visual: '깊은 산속 바위 틈에서 맑은 물이 퐁퐁 솟아나와 강줄기를 이루는 첫 시작점을 상상해 보세요.',
      soundAlike: '요리에 뿌리는 \'소스(sauce)\'와 발음이 비슷하죠? 음식 맛의 \'근원\'이 되는 소스를 떠올려보세요.',
      context: '뉴스 기사에서 정보를 제공한 사람을 \'소식통\'이라고 부를 때도 이 단어를 사용합니다.',
      synonymAntonym: '무언가의 시작인 origin과 끝을 나타내는 destination을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'the place, person, or thing from which something originates or can be obtained',
      synonyms: ['origin', 'root', 'fountainhead'],
      antonyms: ['outcome', 'result', 'destination'],
      exampleSentences: [
        { en: 'The river flows from a small spring that serves as its primary origin point.', ko: '그 강은 주요 원천 역할을 하는 작은 샘에서 흘러나옵니다.' },
        { en: 'Journalists must always verify the reliability of their information before publishing.', ko: '기자들은 출판하기 전에 항상 정보원의 신뢰성을 확인해야 합니다.' },
      ],
      wordDistractors: ['sauce', 'course', 'force'],
      definitionDistractors: [
        'The final destination or endpoint of a long journey or voyage',
        'A tool or instrument used to measure precise quantities',
        'The visible effect or consequence that follows a particular event',
      ],
    }
  ),
  word('space', '공간', 3, 'noun',
    ['시간', '물질', '중력', '속도', '거리', '부피', '밀도', '압력', '에너지', '온도'],
    tips({
      etymology: '라틴어 spatium에서 유래하여 \'펼쳐진 범위\'나 \'거리\'를 뜻하게 되었습니다.',
      visual: '가구가 하나도 없는 텅 빈 방이나 별들이 떠 있는 광활한 우주를 상상해 보세요.',
      soundAlike: '스페이스바(Space bar)를 누르면 글자 사이에 빈 \'공간\'이 생기는 것을 연상하세요.',
      context: '도시 설계나 인테리어 디자인에서 여유로운 면적을 확보할 때 자주 쓰입니다.',
      synonymAntonym: 'area와 유의어 관계이며, 꽉 찬 상태를 뜻하는 fullness와는 반대됩니다.',
    }),
    {
      definition: 'An empty area that is available to be used or occupied by something.',
      synonyms: ['area', 'room', 'expanse'],
      antonyms: ['closure', 'solid', 'fullness'],
      exampleSentences: [
        { en: 'There is not enough room in the garage to park another car.', ko: '차고에 다른 차를 주차할 충분한 공간이 없습니다.' },
        { en: 'Astronauts travel through the vast vacuum between planets.', ko: '우주비행사들은 행성들 사이의 광활한 진공 공간을 여행합니다.' },
      ],
      wordDistractors: ['spade', 'pace', 'trace'],
      definitionDistractors: [
        'A specific period of time measured by a clock or calendar',
        'A solid physical object that occupies a defined volume',
        'The speed at which something moves from one place to another',
      ],
    }
  ),
  word('span', '기간, 범위', 9, 'noun',
    ['순간', '지점', '단편', '파편', '조각', '부분', '끝', '시작', '경계', '틈'],
    tips({
      etymology: '고대 영어 \'spann\'에서 유래하여 손가락 끝에서 끝까지의 거리를 의미하던 것이 시간이나 공간의 전체 범위를 뜻하게 되었습니다.',
      visual: '양손을 최대한 넓게 벌려 그 사이의 전체 길이를 측정하는 모습을 상상해 보세요.',
      soundAlike: '한 뼘을 잴 때 \'스윽\' 손을 펴는 소리와 \'span\'의 발음을 연결해 보세요.',
      context: '다리(bridge)의 길이나 인생의 전체 기간을 설명할 때 자주 사용되는 표현입니다.',
      synonymAntonym: '전체 범위를 뜻하는 extent와 유사하며, 아주 좁은 지점을 뜻하는 point와는 반대됩니다.',
    }),
    {
      definition: 'The full extent of something from end to end or the amount of time that something lasts.',
      synonyms: ['duration', 'extent', 'stretch'],
      antonyms: ['point', 'instant', 'fraction'],
      exampleSentences: [
        { en: 'The average life of this species is about twenty years.', ko: '이 종의 평균 수명은 약 20년 정도입니다.' },
        { en: 'The new bridge features a single massive arch across the entire river.', ko: '새 다리는 강 전체를 가로지르는 하나의 거대한 아치 구간을 특징으로 합니다.' },
      ],
      wordDistractors: ['spank', 'spar', 'spawn'],
      definitionDistractors: [
        'A single isolated point in time with no measurable length',
        'The narrow gap or crack between two adjacent surfaces',
        'A brief flash of light that appears and disappears instantly',
      ],
    }
  ),
];
