import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch34: VocabItem[] = [
  word('feel', '느끼다, 감각하다', 3, 'verb',
    ['무시하다', '못 본 체하다', '던지다', '달리다', '읽다', '요리하다', '자다', '사과하다', '구매하다', '노래하다'],
    tips({
      etymology: '고대 영어 \'felan\'에서 유래했으며, 손으로 무언가를 감지하고 인식하는 행위에서 시작되었습니다.',
      visual: '부드러운 벨벳 천이나 거친 나무 표면에 손바닥을 대고 질감을 확인하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'필(peel)\'과 비슷하지만, 껍질을 벗기는 것 대신 손끝으로 느끼는 감각에 집중하세요.',
      context: '쇼핑할 때 옷감의 질이 좋은지 확인하기 위해 손으로 직접 만져보는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'touch와 비슷하게 직접적인 접촉을 의미하지만, ignore처럼 아예 신경 쓰지 않는 것과는 반대됩니다.',
    }),
    {
      definition: 'to touch or handle something to perceive its texture or condition',
      synonyms: ['touch', 'handle', 'examine'],
      antonyms: ['ignore', 'disregard', 'overlook'],
      exampleSentences: [
        { en: 'The blind man used his fingers to feel the braille on the page.', ko: '시각 장애인은 페이지 위의 점자를 만져보기 위해 손가락을 사용했습니다.' },
        { en: 'Please feel the surface of this table to see how smooth it is.', ko: '이 테이블의 표면이 얼마나 매끄러운지 한번 만져보세요.' },
      ],
      wordDistractors: ['fell', 'peel', 'heal'],
      definitionDistractors: [
        'To experience an emotional response to a situation',
        'To believe or think something based on intuition',
        'To detect temperature changes with the skin',
      ],
    }
  ),
  word('fellow', '동료', 5, 'noun',
    ['적', '낯선 사람', '수입', '책', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '고대 노르웨이어 \'felagi\'에서 유래했으며, 재산을 함께 나누는 파트너라는 의미에서 동료라는 뜻으로 발전했습니다.',
      visual: '같은 유니폼을 입고 어깨동무를 하며 웃고 있는 두 명의 학생들을 상상해 보세요.',
      soundAlike: '\'펠로\'라고 발음되는데, \'팔로(Follow)\'하는 사이처럼 늘 붙어 다니는 친구를 떠올리면 쉽습니다.',
      context: '학술적인 환경에서는 연구원을 뜻하기도 하지만, 일상에서는 주로 비슷한 처지에 있는 사람을 친근하게 부를 때 씁니다.',
      synonymAntonym: '비슷한 뜻인 companion은 늘 곁에 있는 사람을, 반대인 foe는 적대적인 관계를 의미합니다.',
    }),
    {
      definition: 'A person who shares a common activity, interest, or condition with others.',
      synonyms: ['companion', 'peer', 'associate'],
      antonyms: ['stranger', 'outsider', 'enemy'],
      exampleSentences: [
        { en: 'He was highly respected by his fellow classmates and other students in the department.', ko: '그는 반 동료들과 학과의 다른 학생들로부터 큰 존경을 받았습니다.' },
        { en: 'Many fellow travelers shared stories of their journeys during the long train ride.', ko: '많은 동료 여행객들이 긴 기차 여행 동안 자신들의 여행 이야기를 나누었습니다.' },
      ],
      wordDistractors: ['fallow', 'felon', 'follow'],
      definitionDistractors: [
        'A person who leads or supervises a group of workers',
        'A formal title given to a university professor',
        'A young male child or teenager',
      ],
    }
  ),
  word('female', '여성', 6, 'noun',
    ['남성', '소년', '수입', '책', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '라틴어 femella에서 유래했으며, \'여성\'을 뜻하는 femina의 지소사 형태입니다.',
      visual: '화장실 문 앞에 그려진 치마 입은 픽토그램을 상상해 보세요.',
      soundAlike: '발음이 \'피메일\'이므로 \'피어나는 매일(mail)의 꽃\'처럼 여성의 이미지를 연상해 보세요.',
      context: '생물학적 성별을 구분할 때나 설문조사의 성별란에서 자주 볼 수 있는 단어입니다.',
      synonymAntonym: '남성을 뜻하는 male과 반대되는 개념으로 세트로 외우면 효과적입니다.',
    }),
    {
      definition: 'a person of the sex that can bear offspring or produce eggs',
      synonyms: ['woman', 'lady', 'girl'],
      antonyms: ['male', 'man', 'boy'],
      exampleSentences: [
        { en: 'The study focused on the behavior of female adult lions in the wild.', ko: '그 연구는 야생에 사는 성체 암사자들의 행동에 초점을 맞췄습니다.' },
        { en: 'Applicants must indicate whether they are female or male on the registration form.', ko: '지원자들은 등록 양식에 본인이 여성인지 남성인지 표시해야 합니다.' },
      ],
      wordDistractors: ['feeble', 'feline', 'fumble'],
      definitionDistractors: [
        'Relating to qualities traditionally associated with women',
        'A young person who has not yet reached adulthood',
        'The biological process of producing offspring',
      ],
    }
  ),
  word('ferry', '여객선', 7, 'noun',
    ['다리', '터널', '항구', '기차역', '정류장', '공항', '고속도로', '매표소', '대합실', '선착장'],
    tips({
      etymology: '라틴어 \'ferre(나르다)\'에서 유래하여 사람이나 물건을 건너편으로 옮겨주는 배나 장소를 뜻합니다.',
      visual: '강 건너편으로 차들을 가득 싣고 천천히 움직이는 커다란 배와 그 배가 닿는 강가를 상상해 보세요.',
      soundAlike: '발음이 \'페리\'와 비슷하므로, 제주도로 가는 \'페리호\'를 타러 가는 장소를 떠올리면 쉽습니다.',
      context: '주로 강이나 짧은 바다 구간을 정기적으로 오가는 교통수단이나 그 지점을 말할 때 사용됩니다.',
      synonymAntonym: '배 자체를 뜻하는 ferryboat와 유사하며, 배 없이 건너는 시설인 bridge와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A place where a boat regularly transports passengers and vehicles across a river or a narrow stretch of water.',
      synonyms: ['ferryboat', 'shuttle', 'transport'],
      antonyms: ['bridge', 'tunnel', 'overpass'],
      exampleSentences: [
        { en: 'The commuters waited at the dock for the next ferry to arrive.', ko: '통근자들은 다음 여객선이 도착하기를 선착장에서 기다렸습니다.' },
        { en: 'Heavy fog delayed every scheduled ferry crossing from the mainland to the island.', ko: '짙은 안개로 인해 본토에서 섬으로 가는 모든 정기 여객선 운항 일정이 지연되었습니다.' },
      ],
      wordDistractors: ['fury', 'fairy', 'fiery'],
      definitionDistractors: [
        'A large ship designed for long ocean voyages',
        'A dock or harbor where ships are repaired',
        'A ticket required to board public transportation',
      ],
    }
  ),
  word('fertile', '비옥한', 8, 'adjective',
    ['척박한', '불모의', '메마른', '황폐한', '건조한', '단단한', '부족한', '희박한', '유한한', '고갈된'],
    tips({
      etymology: '라틴어 \'ferre(나르다, 가져오다)\'에서 유래하여 수확물을 많이 가져다준다는 의미를 담고 있습니다.',
      visual: '검고 촉촉한 흙 위로 초록색 새싹들이 끝도 없이 돋아나고 있는 농장을 상상해 보세요.',
      soundAlike: '\'퍼틸\' 발음이 \'퍼뜨릴\'과 비슷하죠? 씨앗을 퍼뜨리면 쑥쑥 자라는 땅을 떠올려 보세요.',
      context: '농사뿐만 아니라 창의적인 아이디어가 넘치는 \'풍부한 상상력\'을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: 'productive와는 생산적이라는 공통점이 있고, barren과는 땅의 생명력 면에서 정반대입니다.',
    }),
    {
      definition: 'producing or capable of producing abundant vegetation or crops',
      synonyms: ['productive', 'fruitful', 'prolific'],
      antonyms: ['barren', 'sterile', 'infertile'],
      exampleSentences: [
        { en: 'The valley is famous for its rich and productive soil which supports various crops.', ko: '그 계곡은 다양한 작물을 키워낼 수 있는 풍요롭고 비옥한 토양으로 유명합니다.' },
        { en: 'A creative mind provides a highly productive ground for developing new inventions.', ko: '창의적인 마음은 새로운 발명품을 개발하기 위한 매우 풍부한 토대가 됩니다.' },
      ],
      wordDistractors: ['fertle', 'futile', 'feral'],
      definitionDistractors: [
        'Relating to the process of decomposition in soil',
        'Warm and suitable for growing tropical plants',
        'Containing a high percentage of water or moisture',
      ],
    }
  ),
  word('fever', '열', 1, 'noun',
    ['냉기', '저체온', '책', '병원', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '라틴어 febris에서 유래되었으며, 몸이 불타는 듯한 뜨거운 상태를 의미합니다.',
      visual: '이마에 젖은 수건을 올리고 누워 있는 환자의 뜨거운 열기를 상상해 보세요.',
      soundAlike: '피버(fever) 발음이 \'피가 버(벌)겋게\' 달아오를 정도로 열이 나는 상황과 비슷합니다.',
      context: '독감이나 감기에 걸렸을 때 체온계 수치가 높게 나오는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'temperature는 일상적인 열을, chill은 열과 반대되는 오한이나 냉기를 뜻합니다.',
    }),
    {
      definition: 'an abnormally high body temperature that usually occurs during an illness',
      synonyms: ['temperature', 'pyrexia', 'heat'],
      antonyms: ['chill', 'hypothermia', 'coolness'],
      exampleSentences: [
        { en: 'The young child stayed home from school because he had a high body temperature and a cough.', ko: '그 어린 아이는 고열과 기침이 있어서 학교에 가지 않고 집에 머물렀다.' },
        { en: 'Drinking plenty of water and resting is essential when you are fighting off a severe infection.', ko: '심한 감염 증세와 싸울 때는 충분한 물을 마시고 휴식을 취하는 것이 필수적이다.' },
      ],
      wordDistractors: ['fiver', 'favor', 'fervid'],
      definitionDistractors: [
        'A contagious disease spread through direct contact',
        'A feeling of intense excitement or enthusiasm',
        'A sharp pain in the muscles caused by overexertion',
      ],
    }
  ),
  word('few', '소수의', 4, 'adjective',
    ['다수의', '많은', '풍부한', '무수한', '가득한', '넘치는', '상당한', '전체의', '모든', '충분한'],
    tips({
      etymology: '고대 영어 \'fēawa\'에서 유래했으며, \'작은\'이나 \'부족한\'을 뜻하는 인도유럽어근 \'pau-\'와 연결됩니다.',
      visual: '사탕 바구니에 사탕이 딱 두세 개만 굴러다니는 썰렁한 모습을 상상해 보세요.',
      soundAlike: '발음이 \'퓨~\' 하고 바람 빠지는 소리와 비슷해서 양이 아주 적어 허무한 느낌을 연상하세요.',
      context: '긍정적인 a few와 달리, 그냥 few는 \'거의 없는\'이라는 부정적인 뉘앙스로 자주 쓰입니다.',
      synonymAntonym: 'many(많은)의 반대말로, 아주 적은 수량을 강조할 때 handful과 함께 외우면 좋습니다.',
    }),
    {
      definition: 'a small number of people or things, emphasizing that the amount is not large',
      synonyms: ['handful', 'scant', 'sparse'],
      antonyms: ['many', 'numerous', 'abundant'],
      exampleSentences: [
        { en: 'Very few people attended the meeting due to the heavy snowstorm.', ko: '폭설 때문에 회의에 참석한 사람이 거의 없었습니다.' },
        { en: 'She has made few mistakes in her final exam because she studied hard.', ko: '그녀는 열심히 공부했기 때문에 기말고사에서 실수를 거의 하지 않았습니다.' },
      ],
      wordDistractors: ['flew', 'feud', 'foe'],
      definitionDistractors: [
        'A moderate amount that is considered sufficient',
        'An exact quantity that can be precisely counted',
        'A large collection of items gathered over time',
      ],
    }
  ),
  word('fiber', '섬유', 5, 'noun',
    ['금속', '플라스틱', '수입', '책', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '라틴어 \'fibra\'에서 유래했으며, 실이나 가닥을 의미하는 뿌리를 가지고 있습니다.',
      visual: '옷감에서 풀려나온 아주 얇은 실 한 가닥이나 고구마 속에 들어있는 가느다란 줄기를 상상해 보세요.',
      soundAlike: '\'파이버\'라고 발음되는데, 파이(Pie)를 먹을 때 속에 든 질긴 줄기(Fiber)를 씹는 상황을 떠올려 보세요.',
      context: '의류 소재를 설명할 때뿐만 아니라 건강한 식단을 이야기할 때 식이섬유라는 뜻으로도 자주 쓰입니다.',
      synonymAntonym: '실을 뜻하는 thread와 비슷하지만, 전체적인 구조를 이루는 성질을 강조할 때 더 자주 쓰입니다.',
    }),
    {
      definition: 'A thread-like structure or material forming part of animal or plant tissue, or a substance in food that helps digestion.',
      synonyms: ['thread', 'filament', 'strand'],
      antonyms: ['bulk', 'mass', 'solid'],
      exampleSentences: [
        { en: 'Eating vegetables provides plenty of dietary substance to keep your digestive system healthy.', ko: '채소를 먹는 것은 소화 기관을 건강하게 유지하기 위한 충분한 식이섬유를 제공합니다.' },
        { en: 'The new sportswear is made from a synthetic material that wicks away sweat quickly.', ko: '이 새로운 운동복은 땀을 빠르게 배출하는 합성 섬유로 만들어졌습니다.' },
      ],
      wordDistractors: ['fiver', 'timber', 'filter'],
      definitionDistractors: [
        'A solid sheet of material used in construction',
        'A chemical compound found in synthetic plastics',
        'A woven pattern created by interlacing threads on a loom',
      ],
    }
  ),
  word('field', '들', 2, 'noun',
    ['산', '바다', '수입', '책', '달리다', '슬픔', '토요일', '연필', '냉장고', '병원'],
    tips({
      etymology: '고대 영어 \'feld\'에서 유래했으며, 나무가 없는 탁 트인 평평한 땅을 의미합니다.',
      visual: '끝없이 펼쳐진 초록색 잔디밭이나 농부들이 일하는 넓은 논밭을 상상해 보세요.',
      soundAlike: '\'필드\'라고 발음하며, 축구 경기장인 \'축구 필드\'를 떠올리면 기억하기 쉽습니다.',
      context: '농사짓는 땅뿐만 아니라 전문적인 연구 분야나 활동 영역을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'meadow(초원)와 비슷하지만, 건물 내부를 뜻하는 indoor와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An expansive area of open land used for agricultural purposes, sports, or a specific branch of study.',
      synonyms: ['meadow', 'pasture', 'domain'],
      antonyms: ['interior', 'city', 'structure'],
      exampleSentences: [
        { en: 'The cows are grazing peacefully in the green field behind the farmhouse.', ko: '소들이 농가 뒤편의 푸른 들판에서 평화롭게 풀을 뜯고 있습니다.' },
        { en: 'She decided to pursue a career in the medical field after graduating from university.', ko: '그녀는 대학 졸업 후 의료 분야에서 경력을 쌓기로 결심했습니다.' },
      ],
      wordDistractors: ['filled', 'yield', 'fiend'],
      definitionDistractors: [
        'A fenced area where livestock is kept for breeding',
        'A large indoor arena used for sports competitions',
        'A narrow path running through a dense forest',
      ],
    }
  ),
  word('fight', '싸움', 3, 'noun',
    ['화해', '평화', '수입', '책', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '고대 영어 \'feohtan\'에서 유래했으며, 물리적인 충돌뿐만 아니라 권리를 위한 투쟁의 의미로 확장되었습니다.',
      visual: '두 사람이 서로 주먹을 꽉 쥐고 대치하고 있는 긴박한 권투 경기 장면을 상상해 보세요.',
      soundAlike: '발음이 \'파이트\'이므로, 불꽃(fire)이 튀는 것처럼 격렬하게 다투는 모습을 연상하면 쉽습니다.',
      context: '스포츠 경기에서의 승부나 친구 사이의 말다툼, 혹은 질병과의 사투 등 다양한 갈등 상황에 쓰입니다.',
      synonymAntonym: '전투를 뜻하는 battle과 유의어이며, 평화로운 상태를 뜻하는 peace와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a violent or intense struggle or conflict between people or groups',
      synonyms: ['battle', 'conflict', 'combat'],
      antonyms: ['peace', 'truce', 'harmony'],
      exampleSentences: [
        { en: 'The two siblings had a loud fight over who should control the television remote.', ko: '그 남매는 누가 TV 리모컨을 가질지를 두고 크게 싸웠다.' },
        { en: 'The soldiers put up a brave fight to defend their city from the invaders.', ko: '군인들은 침략자들로부터 도시를 지키기 위해 용감한 전투를 벌였다.' },
      ],
      wordDistractors: ['fright', 'flight', 'blight'],
      definitionDistractors: [
        'A formal competition between two individuals in a sport',
        'An organized protest or demonstration against injustice',
        'A heated verbal argument about a trivial matter',
      ],
    }
  ),
  word('figure', '모습', 6, 'noun',
    ['숫자', '통계', '수입', '책', '달리다', '슬픔', '산', '토요일', '연필', '냉장고'],
    tips({
      etymology: '라틴어 \'figura\'에서 유래하여 사물의 형태나 형상을 만드는 것을 의미합니다.',
      visual: '안개 속에서 서서히 나타나는 사람의 실루엣이나 윤곽을 상상해 보세요.',
      soundAlike: '\'피겨\' 스케이팅 선수가 얼음 위에서 그리는 아름다운 몸의 곡선을 떠올려 보세요.',
      context: '멀리서 누군가의 형체가 보일 때나 사람의 외형적인 실루엣을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'shape와 form은 겉모습을 뜻하며, void는 아무것도 없는 빈 공간을 뜻합니다.',
    }),
    {
      definition: 'the external form or appearance of a person or object, often seen as a silhouette',
      synonyms: ['shape', 'form', 'silhouette'],
      antonyms: ['blur', 'abstraction', 'void'],
      exampleSentences: [
        { en: 'A tall, dark figure emerged from the shadows at the end of the hallway.', ko: '복도 끝 어둠 속에서 키가 크고 검은 형체가 나타났다.' },
        { en: 'She could barely distinguish the figure of a man standing in the heavy rain.', ko: '그녀는 폭우 속에 서 있는 한 남자의 모습을 간신히 식별할 수 있었다.' },
      ],
      wordDistractors: ['finger', 'figment', 'fixture'],
      definitionDistractors: [
        'A numerical value used in mathematical calculations',
        'A diagram or illustration in a textbook',
        'A well-known public personality or celebrity',
      ],
    }
  ),
  word('file', '파일', 1, 'noun',
    ['서랍', '상자', '바구니', '책장', '책상', '클립', '스테이플러', '가방', '폴더', '캐비닛'],
    tips({
      etymology: '라틴어 \'filum(실)\'에서 유래하여, 과거에 서류들을 실로 묶어 보관하던 방식에서 이름이 붙여졌습니다.',
      visual: '투명한 플라스틱 폴더 안에 중요한 서류들이 차곡차곡 정리되어 있는 모습을 상상해 보세요.',
      soundAlike: '손톱을 다듬는 \'네일 파일\'과 발음이 같습니다. 거친 면으로 갈아내듯 서류를 분류해 정리한다고 생각하세요.',
      context: '사무실에서 서류를 찾을 때나 컴퓨터에서 데이터를 저장할 때 가장 흔하게 사용하는 단어입니다.',
      synonymAntonym: 'folder와 유사하지만, file은 그 안에 담긴 내용물이나 기록 전체를 의미하기도 합니다.',
    }),
    {
      definition: 'A folder or box used to keep loose papers in order, or a collection of information stored in a computer.',
      synonyms: ['folder', 'dossier', 'portfolio'],
      antonyms: ['disarray', 'jumble', 'clutter'],
      exampleSentences: [
        { en: 'Please put these documents into the blue file on my desk.', ko: '이 서류들을 제 책상 위에 있는 파란색 파일에 넣어 주세요.' },
        { en: 'The secretary organized every single record into a labeled file.', ko: '비서가 모든 기록물을 라벨이 붙은 파일에 정리해 두었습니다.' },
      ],
      wordDistractors: ['pile', 'tile', 'bile'],
      definitionDistractors: [
        'A metal tool used to smooth rough surfaces',
        'A line of people standing one behind the other',
        'A drawer in a cabinet designed for storage',
      ],
    }
  ),
  word('fill', '채우다', 2, 'verb',
    ['비우다', '빼다', '쏟다', '비움', '거르다', '버리다', '덜어내다', '꺼내다', '말리다', '줄이다'],
    tips({
      etymology: '고대 영어 fyllan에서 유래하여 빈 공간이나 용기를 가득 채우는 행위를 의미합니다.',
      visual: '빈 컵에 물을 가득 붓거나, 접시에 음식을 수북이 담는 모습을 상상해 보세요.',
      soundAlike: '필(feel)과 발음이 비슷하므로, 마음이 벅차오르는 \'느낌\'이 들 정도로 \'가득\' 찼다고 연결해 보세요.',
      context: '컵에 물을 따르거나, 양식의 빈칸을 채우거나, 방에 사람이 가득 차는 등 다양한 상황에서 쓰입니다.',
      synonymAntonym: '가득 채우는 것은 stuff와 비슷하며, 비우는 것은 empty와 반대 개념입니다.',
    }),
    {
      definition: 'to make something full or to occupy the whole of a space or container',
      synonyms: ['stuff', 'pack', 'load'],
      antonyms: ['empty', 'drain', 'deplete'],
      exampleSentences: [
        { en: 'Please fill the glass with water before you sit down at the table.', ko: '식탁에 앉기 전에 잔에 물을 채워 주세요.' },
        { en: 'The theater quickly filled with excited fans waiting for the concert to begin.', ko: '콘서트가 시작되기를 기다리는 열광적인 팬들로 극장이 금세 가득 찼다.' },
      ],
      wordDistractors: ['film', 'fell', 'foil'],
      definitionDistractors: [
        'To pour liquid from one container into another',
        'To satisfy a requirement or fulfill a condition',
        'To spread a substance evenly across a surface',
      ],
    }
  ),
  word('filter', '여과하다', 7, 'verb',
    ['오염시키다', '혼합하다', '방치하다', '가열하다', '냉각하다', '응고시키다', '증발시키다', '희석하다', '주입하다', '배출하다'],
    tips({
      etymology: '중세 라틴어 \'filtrum\'에서 유래했으며, 원래는 액체를 거르는 데 쓰이는 양모 조각을 의미했습니다.',
      visual: '커피 드리퍼에 종이 필터를 끼우고 찌꺼기는 남긴 채 맑은 커피만 아래로 내려오는 장면을 상상하세요.',
      soundAlike: '발음이 \'필터\'와 같으므로, 정수기 필터나 카메라 렌즈 필터처럼 무언가를 걸러내는 도구를 떠올리면 쉽습니다.',
      context: '단순히 액체뿐만 아니라 스팸 메일을 걸러내거나 빛을 차단하는 등 추상적인 차단 과정에도 자주 쓰입니다.',
      synonymAntonym: 'purify는 깨끗하게 만드는 과정에 집중하고, contaminate는 반대로 불순물을 섞어 더럽히는 것을 뜻합니다.',
    }),
    {
      definition: 'to pass liquid or gas through a device to remove impurities or particles',
      synonyms: ['sift', 'strain', 'purify'],
      antonyms: ['pollute', 'contaminate', 'adulterate'],
      exampleSentences: [
        { en: 'The survivalist used a piece of charcoal to purify and strain the river water.', ko: '그 생존 전문가는 강물을 정화하고 여과하기 위해 숯 조각을 사용했습니다.' },
        { en: 'Special software helps to block and remove unwanted emails from your inbox.', ko: '특수 소프트웨어는 받은 편지함에서 원치 않는 이메일을 차단하고 여과하는 데 도움을 줍니다.' },
      ],
      wordDistractors: ['falter', 'flicker', 'filler'],
      definitionDistractors: [
        'To mix different substances together thoroughly',
        'To separate a solid from a liquid by evaporation',
        'To compress air or gas through a narrow opening',
      ],
    }
  ),
  word('final', '최후의', 4, 'adjective',
    ['태도가 애매한, 이도저도 아닌', '강력한', '다섯, 5', '인내를 요하는, 힘든', '아름다운', '불합리한', '미성숙한, 어린', '되풀이되는', '솔직한', '(집, 땅 등이) 비어 있는'],
    tips({
      etymology: '라틴어 \'finis(끝)\'에서 유래하여 어떤 과정의 가장 끝부분을 의미합니다.',
      visual: '마라톤 선수가 결승선 테이프를 끊는 마지막 순간을 상상해 보세요.',
      soundAlike: '파이널(final) 발음이 \'다 끝내리\'와 비슷하게 들린다고 연상해 보세요.',
      context: '시험의 마지막 단계인 기말고사나 경기의 결승전을 떠올리면 이해가 쉽습니다.',
      synonymAntonym: '시작을 뜻하는 initial과 반대되는 끝맺음의 의미를 가진 단어입니다.',
    }),
    {
      definition: 'Coming at the end of a series, process, or period of time.',
      synonyms: ['ultimate', 'concluding', 'terminal'],
      antonyms: ['initial', 'beginning', 'preliminary'],
      exampleSentences: [
        { en: 'The referee blew the whistle to signal the end of the match.', ko: '심판은 경기의 종료를 알리기 위해 마지막 휘슬을 불었습니다.' },
        { en: 'Students are busy preparing for their exams at the end of the semester.', ko: '학생들은 학기 말 기말고사를 준비하느라 바쁩니다.' },
      ],
      wordDistractors: ['finial', 'fiscal', 'feeble'],
      definitionDistractors: [
        'Occurring at regular intervals throughout a process',
        'Being the most important or significant in rank',
        'Happening without any prior planning or preparation',
      ],
    }
  ),
  word('finance', '재정', 5, 'noun',
    ['문화', '정치', '군사', '교육', '예술', '스포츠', '과학', '기술', '환경', '보건'],
    tips({
      etymology: '라틴어 \'finis\'(끝, 결제)에서 유래하여 빚을 갚거나 자금을 마무리 짓는 관리 체계를 뜻합니다.',
      visual: '은행 금고 안에 가득 찬 지폐와 복잡한 숫자 그래프가 그려진 모니터를 상상해 보세요.',
      soundAlike: '\'파이낸스\'는 \'파이(Pie)\'를 \'낸(내어주는)\' 상황처럼 자금을 배분하는 모습을 연상시킵니다.',
      context: '기업의 자금 조달이나 국가의 예산 집행 등 돈의 흐름을 다루는 전문적인 상황에서 쓰입니다.',
      synonymAntonym: 'funding(자금 지원)과 유사하며, 자금이 바닥난 상태인 bankruptcy(파산)와는 반대됩니다.',
    }),
    {
      definition: 'the management of large amounts of money, especially by governments or large companies',
      synonyms: ['funding', 'capital', 'investment'],
      antonyms: ['debt', 'bankruptcy', 'deficit'],
      exampleSentences: [
        { en: 'The company is seeking a consultant to improve its corporate finance strategy.', ko: '그 회사는 기업 재무 전략을 개선하기 위해 컨설턴트를 찾고 있습니다.' },
        { en: 'She decided to major in finance to understand how global markets operate.', ko: '그녀는 세계 시장이 어떻게 작동하는지 이해하기 위해 재무학을 전공하기로 결심했습니다.' },
      ],
      wordDistractors: ['fiancé', 'finesse', 'furnace'],
      definitionDistractors: [
        'The study of economic theories and market predictions',
        'A legal penalty imposed for breaking a rule or law',
        'The process of exchanging currency between countries',
      ],
    }
  ),
  word('find', '발견하다', 3, 'verb',
    ['보완하다', '분석하다', '정리하다', '정보에 근거한\n(inform 알리다, 통지하다)', '~에 집중하다', '분류하다', '가늠하다, 재다', '위치시키다', '하찮은 존재로 만들다', '상기시키다'],
    tips({
      etymology: '고대 영어 \'findan\'에서 유래했으며, 무언가를 향해 나아가거나 도달한다는 의미를 담고 있습니다.',
      visual: '돋보기를 들고 풀숲을 뒤지다가 반짝이는 보물을 딱 찾아내는 탐정의 모습을 상상해 보세요.',
      soundAlike: '파인드(find)는 \'파인다\'와 발음이 비슷하죠? 땅이 파인 곳에서 숨겨진 물건을 찾아낸다고 기억하세요.',
      context: '일상 대화에서 잃어버린 물건을 찾을 때뿐만 아니라 새로운 사실을 깨달았을 때도 자주 쓰입니다.',
      synonymAntonym: 'discover는 몰랐던 것을 처음 알아낼 때 쓰이고, 반대로 lose는 가지고 있던 것을 잃어버릴 때 씁니다.',
    }),
    {
      definition: 'to discover or perceive by chance or after a deliberate search',
      synonyms: ['locate', 'detect', 'encounter'],
      antonyms: ['lose', 'misplace', 'forfeit'],
      exampleSentences: [
        { en: 'Scientists hope to find a cure for the disease through extensive research.', ko: '과학자들은 광범위한 연구를 통해 그 질병의 치료법을 발견하기를 희망합니다.' },
        { en: 'She was relieved to find her missing keys under the sofa cushions.', ko: '그녀는 소파 쿠션 아래에서 잃어버린 열쇠를 찾아내고 안도했습니다.' },
      ],
      wordDistractors: ['fined', 'fiend', 'bind'],
      definitionDistractors: [
        'To search for something that was intentionally hidden',
        'To create or invent something entirely new',
        'To reach a conclusion through logical reasoning',
      ],
    }
  ),
  word('fine', '훌륭한', 1, 'adjective',
    ['거친', '평범한', '조잡한', '열등한', '부족한', '서투른', '나쁜', '불쾌한', '투박한', '저렴한'],
    tips({
      etymology: '라틴어 \'finis(끝, 경계)\'에서 유래하여, 끝마무리가 완벽하게 잘 된 상태를 의미합니다.',
      visual: '박물관에 전시된 아주 얇고 섬세한 도자기나 정교하게 세공된 보석을 떠올려 보세요.',
      soundAlike: '\'화인(fine)\' 아트라고 할 때의 그 단어로, 예술 작품처럼 수준이 높다는 느낌으로 기억하세요.',
      context: '날씨가 맑을 때나 건강 상태가 좋을 때뿐만 아니라, 품질이 매우 우수할 때도 자주 쓰입니다.',
      synonymAntonym: 'excellent와 유사하며, 반대로 품질이 떨어지는 상태는 poor나 coarse라고 합니다.',
    }),
    {
      definition: 'of high quality, very good, or delicate in structure',
      synonyms: ['excellent', 'superior', 'splendid'],
      antonyms: ['inferior', 'coarse', 'poor'],
      exampleSentences: [
        { en: 'The museum displays a collection of fine jewelry from the Victorian era.', ko: '그 박물관은 빅토리아 시대의 훌륭한 보석 수집품들을 전시하고 있다.' },
        { en: 'She used a fine silk thread to repair the delicate embroidery.', ko: '그녀는 섬세한 자수를 수선하기 위해 질 좋은 실크 실을 사용했다.' },
      ],
      wordDistractors: ['vine', 'mine', 'dine'],
      definitionDistractors: [
        'A monetary penalty charged for a violation',
        'Acceptable but not particularly impressive',
        'Extremely thin or narrow in width',
      ],
    }
  ),
  word('finger', '손가락', 2, 'noun',
    ['손바닥', '손목', '팔꿈치', '발가락', '어깨', '손톱', '주먹', '엄지', '손등', '손끝'],
    tips({
      etymology: '게르만어권 어원으로 \'다섯\'을 뜻하는 숫자와 연관되어 손에 달린 다섯 가지 부위를 가리킵니다.',
      visual: '피아노 건반 위에 가지런히 놓인 다섯 개의 긴 신체 부위를 상상해 보세요.',
      soundAlike: '핑거(finger)는 물건을 집을 때 \'핑\' 하고 빠르게 움직이는 모습을 연상하면 쉽습니다.',
      context: '반지를 끼거나 스마트폰 화면을 터치할 때 가장 많이 사용하는 신체 부위입니다.',
      synonymAntonym: 'digit은 손가락과 발가락을 모두 포함하는 전문 용어이며, toe는 발에 있는 부위를 뜻합니다.',
    }),
    {
      definition: 'one of the long, thin parts that extend from the end of the hand',
      synonyms: ['digit', 'phalange', 'extremity'],
      antonyms: ['palm', 'wrist', 'toe'],
      exampleSentences: [
        { en: 'She accidentally cut her index finger while chopping vegetables for dinner.', ko: '그녀는 저녁 식사를 위해 채소를 썰다가 실수로 검지 손가락을 베었다.' },
        { en: 'The pianist moved each part of his hand with incredible speed and precision.', ko: '피아니스트는 놀라운 속도와 정확성으로 손가락 하나하나를 움직였다.' },
      ],
      wordDistractors: ['linger', 'ginger', 'singer'],
      definitionDistractors: [
        'The broad flat area of the hand below the fingers',
        'A small joint connecting the hand to the arm',
        'The hard covering at the tip of each digit',
      ],
    }
  ),
  word('finish', '끝내다', 3, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '(관절) 탈구시키다 / 위치를 바꾸다, 뒤죽박죽으로 만들다, 교란시키다', '원하다', '뛰다', '경보기, 놀라게 하다', '가라앉다'],
    tips({
      etymology: '라틴어 \'finis\'에서 유래했으며, 이는 \'경계\'나 \'끝\'을 의미합니다.',
      visual: '마라톤 선수가 결승선에 있는 테이프를 끊으며 통과하는 모습을 상상해 보세요.',
      soundAlike: '\'피니시\' 발음이 \'피(P)니(N) 시(See)\'처럼 들리니, \'피를 보고 나서야 끝났다\'고 연상해 보세요.',
      context: '숙제, 프로젝트, 식사 등 진행 중이던 일을 완전히 마무리할 때 주로 사용합니다.',
      synonymAntonym: '시작을 뜻하는 start와 반대되며, 완료를 뜻하는 complete와 의미가 비슷합니다.',
    }),
    {
      definition: 'to reach the end of a task or activity so that nothing more needs to be done',
      synonyms: ['complete', 'conclude', 'terminate'],
      antonyms: ['start', 'begin', 'initiate'],
      exampleSentences: [
        { en: 'The construction crew worked late into the night to complete the bridge before the deadline.', ko: '건설팀은 마감 기한 전에 다리를 완공하기 위해 밤늦게까지 일했습니다.' },
        { en: 'Please let me know as soon as you are done with the report so I can review it.', ko: '보고서를 다 작성하는 대로 알려주시면 제가 검토하겠습니다.' },
      ],
      wordDistractors: ['furnish', 'Finnish', 'vanish'],
      definitionDistractors: [
        'To add the final decorative touches to a surface',
        'To pause work temporarily before resuming later',
        'To review and approve a completed document',
      ],
    }
  ),
  word('finite', '유한한', 6, 'adjective',
    ['무한한', '끝없는', '무제한', '영원한', '방대한', '막대한', '지속적인', '불멸의', '광활한', '끊임없는'],
    tips({
      etymology: '라틴어 \'finis(끝)\'에서 유래했습니다. 끝이 있다는 것은 범위가 정해져 있다는 뜻입니다.',
      visual: '모래시계 안에 담긴 모래알처럼 양이 딱 정해져 있어 결국 바닥을 드러내는 모습을 상상하세요.',
      soundAlike: '\'파이 나이트(Fine night)\'라고 발음하면 \'딱 오늘 밤까지만 좋은\' 한시적인 느낌이 납니다.',
      context: '지구의 천연자원이나 인간의 수명처럼 한계가 명확한 대상을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'limited와 유의어이며, 반대말은 접두사 in-을 붙인 infinite(무한한)입니다.',
    }),
    {
      definition: 'having a specific size, number, or limit that can be measured or reached',
      synonyms: ['limited', 'restricted', 'bounded'],
      antonyms: ['infinite', 'endless', 'unlimited'],
      exampleSentences: [
        { en: 'The earth has a supply of fossil fuels that will eventually run out.', ko: '지구는 결국 고갈될 한정된 양의 화석 연료를 보유하고 있습니다.' },
        { en: 'Every human being has only a certain amount of time to achieve their dreams.', ko: '모든 인간은 자신의 꿈을 이루기 위해 오직 한정된 시간만을 가지고 있습니다.' },
      ],
      wordDistractors: ['finesse', 'minute', 'feline'],
      definitionDistractors: [
        'Too small to be seen or measured accurately',
        'Extremely large in scope or scale',
        'Capable of being divided into smaller parts',
      ],
    }
  ),
  word('firm', '굳은', 7, 'adjective',
    ['부드러운', '유연한', '모호한', '불안정한', '연약한', '일시적인', '가변적인', '희미한', '느슨한', '변덕스러운'],
    tips({
      etymology: '라틴어 firmus에서 유래하여 \'강한\', \'안정된\'이라는 의미를 뿌리에 두고 있습니다.',
      visual: '단단하게 굳은 진흙이나 흔들리지 않는 바닥을 밟고 서 있는 모습을 상상해 보세요.',
      soundAlike: '\'펌\' 발음이 머리카락을 고정하는 \'파마\'와 비슷하죠? 모양을 딱딱하게 고정한다는 느낌으로 연결하세요.',
      context: '결정이나 태도가 흔들림 없을 때, 혹은 물체의 촉감이 딱딱할 때 두루 사용됩니다.',
      synonymAntonym: 'solid와 stable은 단단함을 나타내고, 반대로 soft나 weak는 쉽게 변하거나 무너지는 상태를 뜻합니다.',
    }),
    {
      definition: 'having a solid, unyielding surface or structure that does not give way under pressure',
      synonyms: ['solid', 'stable', 'steadfast'],
      antonyms: ['soft', 'flexible', 'unstable'],
      exampleSentences: [
        { en: 'The mattress provides a level of support that is both comfortable and steady.', ko: '그 매트리스는 편안하면서도 단단한 수준의 지지력을 제공합니다.' },
        { en: 'She maintained a consistent stance despite the pressure from her colleagues.', ko: '그녀는 동료들의 압박에도 불구하고 확고한 태도를 유지했습니다.' },
      ],
      wordDistractors: ['form', 'fern', 'term'],
      definitionDistractors: [
        'A business or company, especially a small one',
        'Having a strong and assertive personality',
        'Tightly packed together without any gaps',
      ],
    }
  ),
  word('fist', '주먹', 4, 'noun',
    ['손바닥', '손가락', '손목', '발바닥', '팔꿈치', '어깨', '손톱', '엄지', '손등', '관절'],
    tips({
      etymology: '독일어 Faust와 어원이 같으며, 다섯 손가락을 모두 모아 쥔 상태를 뜻합니다.',
      visual: '복싱 선수가 글러브를 끼기 전 손가락을 꽉 말아 쥔 단단한 덩어리를 상상하세요.',
      soundAlike: '발음이 \'피스트\'이므로, 무언가를 \'피\'하지 못하게 \'슥\' 주먹을 쥐는 상황을 연상해 보세요.',
      context: '분노를 표현하거나 승리를 자축할 때, 혹은 누군가를 위협할 때 자주 등장하는 신체 부위입니다.',
      synonymAntonym: 'clenched hand와 비슷하며, 손가락을 모두 편 상태인 open hand와 반대됩니다.',
    }),
    {
      definition: 'a hand with the fingers curled tightly inward toward the palm, often used for striking or expressing strong emotion',
      synonyms: ['clenched hand', 'knuckle', 'mitt'],
      antonyms: ['open hand', 'palm', 'outstretched hand'],
      exampleSentences: [
        { en: 'He slammed his hand onto the table to show his frustration during the meeting.', ko: '그는 회의 중 좌절감을 표현하기 위해 주먹으로 탁자를 내리쳤다.' },
        { en: 'The winner raised a triumphant hand high into the air as the crowd cheered.', ko: '승자는 군중이 환호할 때 승리의 주먹을 공중으로 높이 들어 올렸다.' },
      ],
      wordDistractors: ['fast', 'first', 'mist'],
      definitionDistractors: [
        'The open palm of a hand facing upward',
        'A protective glove worn during physical activity',
        'A gesture made by extending all five fingers',
      ],
    }
  ),
  word('fit', '맞는', 5, 'adjective',
    ['불일치', '부적합', '어긋남', '모순', '괴리', '충돌', '격차', '불균형', '이격', '오차'],
    tips({
      etymology: '중세 영어 \'fitten\'에서 유래하여 사물들이 서로 질서 있게 배열되거나 어울리는 상태를 의미합니다.',
      visual: '퍼즐 조각 두 개가 빈틈없이 완벽하게 맞물려 들어가는 모습을 상상해 보세요.',
      soundAlike: '옷을 입었을 때 \'핏(fit)\'이 살아야 한다는 말처럼, 몸에 딱 맞는 상태를 떠올리면 쉽습니다.',
      context: '주로 옷의 치수나 부품의 규격이 정확하게 일치하는 상황에서 명사로 사용됩니다.',
      synonymAntonym: 'match와는 어울림을 강조하고, mismatch와는 서로 맞지 않는 어색함을 대조하여 외우세요.',
    }),
    {
      definition: 'The quality or state of being the right shape and size for a particular person or thing.',
      synonyms: ['adjustment', 'correspondence', 'conformity'],
      antonyms: ['mismatch', 'incompatibility', 'disproportion'],
      exampleSentences: [
        { en: 'The tailor checked the shoulder width to ensure a perfect fit for the suit.', ko: '재단사는 정장이 완벽하게 맞는지 확인하기 위해 어깨 너비를 점검했습니다.' },
        { en: 'Engineers had to modify the component because the initial fit was too loose.', ko: '엔지니어들은 처음 조립 상태가 너무 헐거웠기 때문에 부품을 수정해야 했습니다.' },
      ],
      wordDistractors: ['flit', 'spit', 'knit'],
      definitionDistractors: [
        'Being physically healthy and in good condition',
        'A sudden outburst of anger or emotional reaction',
        'To install or place equipment in a specific location',
      ],
    }
  ),
  word('fix', '고정시키다', 1, 'verb',
    ['자르다', '분배하다, 유통하다', '참여하다, 종사하다', '위장하다, 감추다', '변환하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 \'fixus\'에서 유래하여 \'박혀 있는\' 또는 \'움직이지 않는\' 상태를 의미하게 되었습니다.',
      visual: '벽에 못을 단단히 박아 액자가 흔들리지 않게 꽉 붙잡고 있는 모습을 상상해 보세요.',
      soundAlike: '\'픽스\'하고 박히는 소리를 연상하며 무언가 제자리에 딱 붙는 느낌을 기억하세요.',
      context: '수리하다라는 뜻도 있지만, 물건을 특정 위치에 단단히 붙여둘 때도 자주 쓰입니다.',
      synonymAntonym: 'secure(고정하다)와 fasten(조이다)은 유의어이며, detach(떼다)는 반대되는 행동입니다.',
    }),
    {
      definition: 'to make something firm or stable; to attach or secure in place',
      synonyms: ['secure', 'attach', 'fasten'],
      antonyms: ['loosen', 'detach', 'release'],
      exampleSentences: [
        { en: 'The carpenter will fix the wooden beam to the ceiling for extra support.', ko: '목수는 추가적인 지지력을 위해 나무 보를 천장에 고정할 것이다.' },
        { en: 'Please fix your gaze on the center of the screen during the test.', ko: '테스트를 하는 동안 화면 중앙에 시선을 고정해 주세요.' },
      ],
      wordDistractors: ['six', 'mix', 'fax'],
      definitionDistractors: [
        'To repair something that is broken or damaged',
        'To prepare food by combining ingredients and cooking',
        'To arrange or schedule an event at a specific time',
      ],
    }
  ),
  word('flag', '기', 2, 'noun',
    ['배너', '현수막', '표지', '푯말', '간판', '로고', '문장', '휘장', '마스코트', '상징물'],
    tips({
      etymology: '펄럭이다라는 뜻의 고대 북유럽어 \'flaka\'에서 유래하여 바람에 흔들리는 천을 의미하게 되었습니다.',
      visual: '올림픽 개막식에서 각 나라의 선수들이 화려한 무늬가 그려진 천을 높이 들고 행진하는 모습을 상상해 보세요.',
      soundAlike: '한국어 \'풀럭\'과 발음이 비슷하죠? 깃발이 바람에 \'풀럭(flag)\'이며 날리는 소리를 연상하세요.',
      context: '국가 행사나 스포츠 경기장에서 소속감을 나타내기 위해 가장 먼저 게양하는 상징물입니다.',
      synonymAntonym: 'banner와 pennant는 비슷한 용도로 쓰이지만, 아무런 표시가 없는 plain한 상태와는 대조적입니다.',
    }),
    {
      definition: 'A rectangular piece of fabric with a unique design that represents a specific nation, organization, or signal.',
      synonyms: ['banner', 'ensign', 'pennant'],
      antonyms: ['void', 'blank', 'nothingness'],
      exampleSentences: [
        { en: 'The national anthem played solemnly as the soldiers raised the colorful fabric to the top of the pole.', ko: '군인들이 기둥 꼭대기로 알록달록한 깃발을 올릴 때 국가가 엄숙하게 연주되었습니다.' },
        { en: 'Hikers often leave a small marker at the summit to celebrate their successful climb to the peak.', ko: '등산객들은 정상 정복을 기념하기 위해 종종 산꼭대기에 작은 기를 남겨둡니다.' },
      ],
      wordDistractors: ['flog', 'flab', 'flap'],
      definitionDistractors: [
        'A tall pole used for hanging signs or lights',
        'A bright signal fire lit on top of a hill',
        'A small label attached to clothing or luggage',
      ],
    }
  ),
  word('flame', '불꽃', 6, 'noun',
    ['얼음', '물', '연기', '재', '냉기', '어둠', '그림자', '습기', '바람', '진흙'],
    tips({
      etymology: '라틴어 flamma에서 유래하여 타오르는 빛과 열기를 뜻하게 되었습니다.',
      visual: '어두운 밤 캠프파이어에서 위로 솟구치는 붉고 노란 불덩이를 상상하세요.',
      soundAlike: '프레임(frame)과 발음이 비슷하지만, \'ㄹ\' 발음을 굴려 뜨거운 \'플레임\'을 떠올리세요.',
      context: '요리할 때 가스레인지 위로 올라오는 불이나 촛불의 심지에서 타오르는 부분을 말합니다.',
      synonymAntonym: '활활 타오르는 blaze와 비슷하지만, 차가운 ice와는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'a hot, bright stream of burning gas that comes from something on fire',
      synonyms: ['blaze', 'flare', 'fire'],
      antonyms: ['frost', 'ice', 'shadow'],
      exampleSentences: [
        { en: 'The tiny candle flickered in the drafty room before the light went out.', ko: '빛이 꺼지기 전 외풍이 심한 방에서 작은 불꽃이 흔들거렸습니다.' },
        { en: 'A bright orange glow rose from the logs as the campfire grew stronger.', ko: '캠프파이어가 강해지면서 장작에서 밝은 주황색 불꽃이 솟아올랐습니다.' },
      ],
      wordDistractors: ['frame', 'flume', 'blame'],
      definitionDistractors: [
        'The residual heat left after a fire has died out',
        'A chemical reaction that produces smoke without light',
        'Glowing embers found at the base of a fire',
      ],
    }
  ),
  word('flash', '번쩍임', 7, 'noun',
    ['어둠', '침침함', '지속광', '흐릿함', '안개', '그림자', '암전', '흐림', '부드러운 빛', '잔광'],
    tips({
      etymology: '중세 영어 \'flashen\'에서 유래하여 물이 튀거나 빛이 갑자기 뿜어져 나오는 역동적인 움직임을 나타냅니다.',
      visual: '어두운 밤하늘에 카메라 셔터가 터지며 순식간에 하얗게 변하는 장면을 상상해 보세요.',
      soundAlike: '\'플래시\'라고 발음할 때 \'플\' 소리에서 빛이 팍 터져 나오는 느낌을 연결하면 기억하기 쉽습니다.',
      context: '사진 촬영 시의 조명뿐만 아니라, 갑자기 떠오르는 아이디어나 아주 짧은 순간을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '반짝이는 gleam과 대조되는 darkness를 함께 기억하면 빛의 강도와 지속성을 이해하기 좋습니다.',
    }),
    {
      definition: 'a sudden brief burst of light or a very short moment',
      synonyms: ['gleam', 'glint', 'spark'],
      antonyms: ['dimness', 'darkness', 'shadow'],
      exampleSentences: [
        { en: 'A sudden bolt of lightning lit up the sky with a brilliant white glare.', ko: '갑작스러운 번개 줄기가 눈부신 하얀 번쩍임으로 하늘을 밝게 비추었습니다.' },
        { en: 'The entire event happened in a brief moment before anyone could react.', ko: '누군가 반응하기도 전에 모든 사건이 아주 짧은 순간에 일어났습니다.' },
      ],
      wordDistractors: ['flask', 'clash', 'slash'],
      definitionDistractors: [
        'A steady beam of light from a fixed source',
        'A gradual fading of color over a long period',
        'A loud explosive sound caused by an impact',
      ],
    }
  ),
  word('flat', '편평한', 4, 'adjective',
    ['불안정한', '변함없는, 단호한', '관능적인, 육감적인', '가능한', '정통의', '충전 가능한', '기밀의, 내밀한', '부재의', '가면을 쓴, 감춘', '경계하는, 방심하지 않는'],
    tips({
      etymology: '고대 노르웨이어 \'flatr\'에서 유래하여, 지면이 고르고 수평인 상태를 의미하게 되었습니다.',
      visual: '바람이 다 빠져서 바닥에 딱 붙어버린 타이어나 아무 굴곡 없는 넓은 평원을 상상해 보세요.',
      soundAlike: '\'플랫\' 슈즈는 굽이 없이 바닥이 \'편평한\' 신발이라는 점을 기억하면 쉽습니다.',
      context: '타이어가 펑크 났을 때나, 탄산음료의 김이 빠져 맛이 밋밋해졌을 때도 이 단어를 사용합니다.',
      synonymAntonym: 'level과 smooth는 매끄러운 표면을 뜻하며, 울퉁불퉁한 bumpy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having a smooth, level surface without curves or bumps',
      synonyms: ['level', 'smooth', 'even'],
      antonyms: ['uneven', 'bumpy', 'hilly'],
      exampleSentences: [
        { en: 'The landscape was so level that we could see for miles in every direction.', ko: '지형이 아주 편평해서 모든 방향으로 수 마일 밖까지 볼 수 있었다.' },
        { en: 'Make sure the surface is completely even before you start painting the floor.', ko: '바닥 칠을 시작하기 전에 표면이 완전히 편평한지 확인하십시오.' },
      ],
      wordDistractors: ['flap', 'float', 'fiat'],
      definitionDistractors: [
        'Lacking any distinguishing features or personality',
        'Spread out horizontally over a wide area',
        'Compressed tightly into a thin layer',
      ],
    }
  ),
  word('flavor', '맛', 5, 'noun',
    ['냄새', '촉감', '온도', '색깔', '모양', '소리', '질감', '무게', '부피', '강도'],
    tips({
      etymology: '라틴어 \'flare(불다)\'에서 유래하여 처음에는 \'향기\'를 뜻했으나, 점차 입안에서 느껴지는 전체적인 풍미로 의미가 확장되었습니다.',
      visual: '갓 구운 빵의 고소한 냄새와 혀끝에 닿는 달콤한 맛이 어우러지는 미식가의 식탁을 상상해 보세요.',
      soundAlike: '\'플레이버\'라고 발음하며, 요리사가 접시(Plate) 위에 맛(Flavor)을 담아내는 모습을 연상하면 쉽습니다.',
      context: '음식의 맛뿐만 아니라 특정 지역이나 분위기의 \'특색\'을 나타낼 때도 자주 쓰이는 단어입니다.',
      synonymAntonym: 'taste와 비슷하지만 flavor는 향과 질감을 포함한 더 깊은 풍미를 뜻하며, blandness는 아무 맛이 없는 밋밋함을 뜻합니다.',
    }),
    {
      definition: 'the distinctive taste of a food or drink as perceived in the mouth',
      synonyms: ['savor', 'relish', 'zest'],
      antonyms: ['tastelessness', 'insipidity', 'blandness'],
      exampleSentences: [
        { en: 'The chef added fresh herbs to enhance the natural richness of the soup.', ko: '주방장은 수프 본연의 풍부한 맛을 높이기 위해 신선한 허브를 추가했습니다.' },
        { en: 'Each variety of coffee bean offers a unique profile depending on its origin.', ko: '각 원두 품종은 원산지에 따라 독특한 맛의 특징을 제공합니다.' },
      ],
      wordDistractors: ['favor', 'floral', 'fervor'],
      definitionDistractors: [
        'The smell or aroma given off by food or flowers',
        'A specific type or variety of a product',
        'The texture or consistency of a cooked dish',
      ],
    }
  ),
  word('flaw', '금', 6, 'noun',
    ['완전', '무결', '장점', '완벽', '정상', '건전', '강점', '완전함', '무결점', '완전성'],
    tips({
      etymology: '중세 영어의 \'조각\'이나 \'파편\'에서 유래하여, 매끄러운 표면에 생긴 틈이나 결함을 뜻하게 되었습니다.',
      visual: '매끈하고 비싼 다이아몬드 정중앙에 아주 가느다란 실금이 가 있는 모습을 상상해 보세요.',
      soundAlike: '\'플로(flow)\'와 발음이 비슷하지만, 흐름이 끊기는 \'결점\'이 있다고 연상하면 쉽습니다.',
      context: '보석의 가치를 매기거나 사람의 성격상 결함을 논할 때 아주 자주 쓰이는 단어입니다.',
      synonymAntonym: '완벽함을 뜻하는 perfection과 대조되며, 작은 흠집을 뜻하는 defect와 결이 같습니다.',
    }),
    {
      definition: 'a mark, fault, or imperfection that mars an object or a person\'s character',
      synonyms: ['defect', 'blemish', 'imperfection'],
      antonyms: ['perfection', 'strength', 'integrity'],
      exampleSentences: [
        { en: 'The jeweler used a magnifying glass to check the diamond for any tiny internal flaw.', ko: '보석상은 다이아몬드 내부에 아주 작은 결함이 있는지 확인하기 위해 돋보기를 사용했습니다.' },
        { en: 'Despite his many talents, his quick temper remains a significant character flaw.', ko: '그의 많은 재능에도 불구하고, 급한 성미는 여전히 성격상의 큰 결점으로 남아 있습니다.' },
      ],
      wordDistractors: ['flow', 'claw', 'draw'],
      definitionDistractors: [
        'A natural feature that enhances the beauty of an object',
        'A small crack caused by extreme temperature changes',
        'A deliberate design choice in a work of art',
      ],
    }
  ),
  word('flee', '달아나다', 9, 'verb',
    ['맞서다', '남다', '돌진하다', '다가가다', '접근하다', '대기하다', '기다리다', '맞이하다', '향하다', '들어가다'],
    tips({
      etymology: '고대 영어 fleon에서 유래되었으며, \'날다\'라는 뜻의 fly와 어원이 같아 빠르게 움직여 벗어나는 느낌을 줍니다.',
      visual: '산불이 난 숲에서 동물들이 겁에 질려 반대 방향으로 전력 질주하는 긴박한 장면을 상상해 보세요.',
      soundAlike: '벼룩을 뜻하는 flea와 발음이 같습니다. 벼룩이 톡톡 튀어 순식간에 도망가는 모습을 떠올리면 쉽습니다.',
      context: '주로 전쟁, 자연재해, 혹은 경찰의 추격과 같은 위험한 상황에서 급히 탈출할 때 사용됩니다.',
      synonymAntonym: 'escape와 비슷하지만 더 긴박한 도주를 뜻하며, 정면으로 맞서는 confront와는 반대되는 행동입니다.',
    }),
    {
      definition: 'to run away from a place or situation of danger',
      synonyms: ['escape', 'abscond', 'bolt'],
      antonyms: ['stay', 'remain', 'confront'],
      exampleSentences: [
        { en: 'Thousands of people were forced to flee their homes after the volcanic eruption began.', ko: '화산 폭발이 시작된 후 수천 명의 사람들이 집을 버리고 달아나야만 했습니다.' },
        { en: 'The suspect attempted to flee the country before the police could issue an arrest warrant.', ko: '용의자는 경찰이 체포 영장을 발부하기 전에 해외로 도주하려고 시도했습니다.' },
      ],
      wordDistractors: ['flea', 'free', 'fret'],
      definitionDistractors: [
        'To chase after someone in order to catch them',
        'To wander aimlessly without a specific destination',
        'To hide in a concealed location to avoid detection',
      ],
    }
  ),
  word('flesh', '살', 7, 'noun',
    ['뼈', '피', '살갗', '털', '손톱', '치아', '기관', '근육', '지방', '힘줄'],
    tips({
      etymology: '고대 영어 \'flæsc\'에서 유래했으며, 원래 \'고기\'나 \'몸\'을 뜻하는 단어에서 발전했습니다.',
      visual: '잘 익은 과일의 부드러운 속살이나 동물의 근육 조직을 상상해 보세요.',
      soundAlike: '\'플래시(Flash)\'와 발음이 비슷하지만, 빛이 아닌 몸의 \'살\'을 뜻한다는 점에 주의하세요.',
      context: '주로 생물학적 신체 조직을 말할 때나 과일의 과육을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '뼈(bone)와 대비되는 개념으로 부드러운 조직(tissue)을 떠올리면 쉽습니다.',
    }),
    {
      definition: 'the soft substance consisting of muscle and fat that is found between the skin and bones of an animal or a human',
      synonyms: ['muscle', 'tissue', 'pulp'],
      antonyms: ['bone', 'skeleton', 'spirit'],
      exampleSentences: [
        { en: 'The tiger\'s sharp claws tore through the thick flesh of its prey.', ko: '호랑이의 날카로운 발톱이 먹잇감의 두꺼운 살을 찢었습니다.' },
        { en: 'Peel the apple first if you only want to eat the sweet white flesh inside.', ko: '안에 있는 달콤하고 하얀 과육만 먹고 싶다면 먼저 사과 껍질을 벗기세요.' },
      ],
      wordDistractors: ['flash', 'fresh', 'floss'],
      definitionDistractors: [
        'The outer layer of skin covering the body',
        'The hard bony structure supporting the body',
        'Blood flowing through veins and arteries',
      ],
    }
  ),
  word('flexible', '유연한', 4, 'adjective',
    ['뻣뻣한', '경직된', '단단한', '굽히기 어려운', '고정된', '딱딱한', '불굴', '경직', '경직성', '뻣뻣함'],
    tips({
      etymology: '라틴어 \'flectere(구부리다)\'에서 유래하여, 물리적으로나 상황적으로 잘 휘어지는 성질을 나타냅니다.',
      visual: '요가 강사가 몸을 아주 부드럽게 뒤로 젖히는 유연한 모습을 상상해 보세요.',
      soundAlike: '발음이 \'플렉스(flex)\'와 비슷하죠? 근육을 굽히거나 펴며 힘을 주는 동작을 떠올리면 쉽습니다.',
      context: '근무 시간이 자유로운 \'탄력 근무제\'를 영어로 flexible working hours라고 표현합니다.',
      synonymAntonym: '유연한 상태를 뜻하는 pliable과 반대로 굳어버린 상태인 rigid를 짝지어 기억하세요.',
    }),
    {
      definition: 'capable of bending easily without breaking or able to modify to respond to altered circumstances',
      synonyms: ['pliant', 'adaptable', 'versatile'],
      antonyms: ['rigid', 'stiff', 'unyielding'],
      exampleSentences: [
        { en: 'The new rubber material is highly resistant to heat and remains extremely bendable in cold weather.', ko: '이 새로운 고무 소재는 열에 강하며 추운 날씨에도 매우 유연한 상태를 유지합니다.' },
        { en: 'Our manager is quite open to suggestions and maintains a versatile approach to the project schedule.', ko: '우리 매니저는 제안에 상당히 개방적이며 프로젝트 일정에 대해 탄력적인 태도를 유지합니다.' },
      ],
      wordDistractors: ['feasible', 'flammable', 'fixable'],
      definitionDistractors: [
        'Having a tendency to stretch and return to original shape',
        'Made from a lightweight synthetic material',
        'Easily broken into small pieces when bent',
      ],
    }
  ),
  word('flight', '날기', 5, 'noun',
    ['착지', '걷기', '기어가기', '수영', '정지', '대기', '착륙', '멈춤', '정지비행', '하강'],
    tips({
      etymology: '고대 영어 \'flyht\'에서 유래되었으며, \'날다\'라는 뜻의 동사 fly와 어원이 같습니다.',
      visual: '구름 위를 가르며 시원하게 날아가는 비행기의 꼬리 구름을 상상해 보세요.',
      soundAlike: '\'플라이트\'라고 발음하며, 야구의 \'플라이 볼\'이 높이 날아가는 것을 떠올리면 쉽습니다.',
      context: '공항 전광판에서 비행 일정을 확인할 때 가장 자주 마주치는 단어입니다.',
      synonymAntonym: '공중에 떠 있는 aviation과 땅으로 내려오는 landing을 대조해서 기억하세요.',
    }),
    {
      definition: 'The act of moving through the air or a scheduled journey made by an airborne vehicle.',
      synonyms: ['aviation', 'soaring', 'air travel'],
      antonyms: ['landing', 'grounding', 'descent'],
      exampleSentences: [
        { en: 'The eagle took a majestic leap and began its long journey across the canyon.', ko: '독수리는 장엄하게 도약하여 협곡을 가로지르는 긴 비행을 시작했습니다.' },
        { en: 'Passengers were told to remain seated during the entire duration of the trip to London.', ko: '승객들은 런던으로 가는 비행 시간 내내 자리에 앉아 있으라는 안내를 받았습니다.' },
      ],
      wordDistractors: ['fright', 'blight', 'slight'],
      definitionDistractors: [
        'A staircase inside a building connecting different floors',
        'The act of running away from danger or pursuit',
        'A ticket or boarding pass for air travel',
      ],
    }
  ),
  word('flip', '뒤집다', 10, 'verb',
    ['받다', '놓다', '굴리다', '밀다', '당기다', '고정하다', '누르다', '붙들다', '던지지 않다', '그냥 두다'],
    tips({
      etymology: '16세기경 가볍게 치는 소리를 흉내 낸 의성어에서 유래하여 공중에서 홱 뒤집히는 동작을 뜻하게 되었습니다.',
      visual: '동전 앞뒷면을 정하기 위해 엄지손가락으로 동전을 공중에 휙 튕겨 올리는 장면을 상상해 보세요.',
      soundAlike: '프라이팬 위에서 부침개를 \'플립\'하고 뒤집을 때 나는 가벼운 소리와 연결하면 기억하기 쉽습니다.',
      context: '주로 동전 던지기, 체조의 공중제비, 또는 스위치를 가볍게 젖히는 동작을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'toss와 유사하지만, flip은 단순히 던지는 것보다 회전하며 뒤집히는 움직임에 더 집중한 표현입니다.',
    }),
    {
      definition: 'A quick, light movement that results in something turning over or being thrown into the air.',
      synonyms: ['toss', 'turn', 'rotation'],
      antonyms: ['stagnation', 'fixation', 'stillness'],
      exampleSentences: [
        { en: 'The referee decided which team would start first with a quick coin flip.', ko: '심판은 가벼운 동전 던지기로 어느 팀이 먼저 시작할지 결정했습니다.' },
        { en: 'The gymnast performed a perfect back flip during her floor routine.', ko: '체조 선수는 마루 운동 중에 완벽한 뒤공중제비를 선보였습니다.' },
      ],
      wordDistractors: ['flit', 'clip', 'drip'],
      definitionDistractors: [
        'A slow and steady rotation of an object on its axis',
        'A sudden fall caused by losing balance',
        'A gentle push that moves something slightly forward',
      ],
    }
  ),
  word('float', '뜨다', 6, 'verb',
    ['가라앉다', '침몰하다', '떨어지다', '내려가다', '침강', '침수', '잠기다', '가라앉음', '침몰', '침강하다'],
    tips({
      etymology: '고대 영어 \'flotian\'에서 유래되었으며, 흐르다(flow)와 어원이 같아 물 위에 머무는 이미지를 줍니다.',
      visual: '낚시찌가 물 위에서 까닥거리며 떠 있는 모습을 상상해 보세요.',
      soundAlike: '플로트(float)는 \'풀(pool) 위로 툭\' 튀어나와 떠 있는 소리와 비슷합니다.',
      context: '축제 행렬에서 화려하게 꾸며진 차량이나 수영장에서 몸을 지탱해주는 도구를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'buoy(부표)와는 액체 위에 떠 있다는 점이 같고, anchor(닻)와는 바닥으로 가라앉는다는 점이 반대입니다.',
    }),
    {
      definition: 'A buoyant object designed to rest on the surface of a liquid, or a decorated platform on wheels used in a parade.',
      synonyms: ['buoy', 'raft', 'platform'],
      antonyms: ['anchor', 'weight', 'sinker'],
      exampleSentences: [
        { en: 'The colorful carnival float moved slowly through the crowded streets during the festival.', ko: '화려한 축제 차량이 축제 기간 동안 붐비는 거리를 천천히 지나갔습니다.' },
        { en: 'Fishermen often use a plastic float to keep their nets near the surface of the water.', ko: '어부들은 그물을 수면 근처에 유지하기 위해 종종 플라스틱 부표를 사용합니다.' },
      ],
      wordDistractors: ['bloat', 'gloat', 'moat'],
      definitionDistractors: [
        'A heavy object used to keep a boat in place',
        'A small vessel designed for underwater exploration',
        'A wooden plank used to cross a stream on foot',
      ],
    }
  ),
  word('flock', '무리', 7, 'noun',
    ['한 마리', '단독', '고립', '홀로', '쌍', '소수', '한두 마리', '개별', '따로', '혼자'],
    tips({
      etymology: '고대 영어 \'flocc\'에서 유래하여 군대나 무리를 뜻하며, 현대에는 주로 새나 양의 떼를 의미합니다.',
      visual: '수백 마리의 하얀 양들이 초원 위에서 뭉쳐서 이동하는 장관을 상상해 보세요.',
      soundAlike: '발음이 \'플락\'과 비슷하므로, 깃털(feather)이 많은 새들이 \'풀럭\'이며 날아가는 소리로 기억하세요.',
      context: '종교적인 맥락에서는 목자가 이끄는 신도들의 모임을 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: 'herd나 crowd와는 모이는 대상에 따라 구별되며, 홀로 떨어져 있는 individual과는 반대됩니다.',
    }),
    {
      definition: 'a large number of animals, especially birds or sheep, or a large group of people gathered together',
      synonyms: ['herd', 'swarm', 'throng'],
      antonyms: ['individual', 'loner', 'single'],
      exampleSentences: [
        { en: 'A large group of seagulls gathered on the pier to wait for the fishing boats.', ko: '갈매기 떼가 낚싯배를 기다리기 위해 부두에 모여들었습니다.' },
        { en: 'Tourists began to gather in front of the museum entrance before it opened.', ko: '박물관이 문을 열기도 전에 관광객 무리가 입구 앞에 모이기 시작했습니다.' },
      ],
      wordDistractors: ['frock', 'flack', 'block'],
      definitionDistractors: [
        'A pair of animals living together in a habitat',
        'A single animal that has separated from a group',
        'A trained group of animals used for work',
      ],
    }
  ),
  word('flood', '홍수', 4, 'noun',
    ['가뭄', '건기', '물 부족', '메마름', '황사', '한파', '폭설', '태풍', '지진', '산불'],
    tips({
      etymology: '게르만어 계열의 \'flōdus\'에서 유래했으며, 흐르다(flow)와 어원이 같아 물이 넘쳐흐르는 이미지를 담고 있습니다.',
      visual: '강물이 제방을 넘어 도로와 집들을 집어삼키는 거대한 물결의 이미지를 상상해 보세요.',
      soundAlike: '\'플러드\'라고 발음할 때 \'풀(pool)이 가득 차서 넘친다\'는 느낌으로 연결하면 기억하기 쉽습니다.',
      context: '자연재해뿐만 아니라 \'a flood of emails\'처럼 정보나 물건이 쏟아져 들어오는 상황에도 자주 쓰입니다.',
      synonymAntonym: 'deluge는 대홍수를 뜻하는 유의어이며, 반대로 물이 극도로 부족한 상태는 drought라고 합니다.',
    }),
    {
      definition: 'An overflowing of a large amount of water beyond its normal confines, especially over what is normally dry land.',
      synonyms: ['deluge', 'inundation', 'overflow'],
      antonyms: ['drought', 'dryness', 'shortage'],
      exampleSentences: [
        { en: 'Heavy rainfall caused the river to burst its banks and create a massive disaster in the valley.', ko: '폭우로 인해 강물이 범람하여 계곡에 거대한 재난이 발생했습니다.' },
        { en: 'The customer service department received a sudden rush of complaints after the system failure.', ko: '시스템 장애 이후 고객 서비스 부서에 불만 사항이 쏟아져 들어왔습니다.' },
      ],
      wordDistractors: ['blood', 'floor', 'bloom'],
      definitionDistractors: [
        'A slow, steady rise in water level over weeks',
        'A large body of still water surrounded by land',
        'A controlled release of water from a dam',
      ],
    }
  ),
  word('floor', '마룻바닥', 3, 'noun',
    ['천장', '벽', '계단', '지붕', '다락', '옥상', '지하', '갑판', '발판', '겸손/단정함'],
    tips({
      etymology: '고대 영어 \'flor\'에서 유래했으며, 평평한 지면이나 바닥을 의미하는 게르만어 계열의 단어입니다.',
      visual: '거실에 깔린 매끄러운 나무 판자들이나 반짝이는 타일 바닥을 상상해 보세요.',
      soundAlike: '\'플로어\'라고 발음하며, 꽃을 뜻하는 \'flower\'와 발음이 비슷하지만 끝부분의 \'r\' 발음에 주의하세요.',
      context: '건물의 층수를 나타낼 때도 쓰여서 \'first floor\'는 1층을 의미합니다.',
      synonymAntonym: '발밑의 ground와 비슷하지만 실내라는 점이 다르고, 머리 위의 ceiling과는 정반대 위치에 있습니다.',
    }),
    {
      definition: 'the lower surface of a room on which one walks',
      synonyms: ['ground', 'deck', 'base'],
      antonyms: ['ceiling', 'roof', 'top'],
      exampleSentences: [
        { en: 'Please take off your shoes before stepping on the wooden surface.', ko: '나무 바닥을 밟기 전에 신발을 벗어 주세요.' },
        { en: 'The children sat on the carpeted area to play with their toys.', ko: '아이들이 장난감을 가지고 놀기 위해 카펫이 깔린 바닥에 앉았습니다.' },
      ],
      wordDistractors: ['flour', 'flora', 'flair'],
      definitionDistractors: [
        'The highest point or top level of a building',
        'A raised platform used for public speaking',
        'A wall that divides two rooms in a house',
      ],
    }
  ),
  word('flow', '흐르다', 5, 'verb',
    ['멈추다', '막히다', '고이다', '정체하다', '말라붙다', '얼다', '굳다', '막힘', '정체', '저지'],
    tips({
      etymology: '인도유럽어근 \'pleu-\'(흐르다, 헤엄치다)에서 유래하여 물의 움직임을 뜻하게 되었습니다.',
      visual: '강물이 굽이굽이 끊기지 않고 매끄럽게 아래로 내려가는 모습을 상상해 보세요.',
      soundAlike: '플로우(flow)는 \'풀러(풀어) 놓은\' 물이 자유롭게 가는 소리와 비슷합니다.',
      context: '액체의 흐름뿐만 아니라 대화나 작업의 끊김 없는 진행을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'stream은 시냇물 같은 흐름을, stagnation은 고여서 썩는 정체를 의미합니다.',
    }),
    {
      definition: 'the steady and continuous movement of a substance, such as water or gas, in a particular direction',
      synonyms: ['stream', 'current', 'tide'],
      antonyms: ['stagnation', 'blockage', 'halt'],
      exampleSentences: [
        { en: 'The heavy rain significantly increased the water movement through the narrow valley.', ko: '폭우로 인해 좁은 계곡을 통과하는 물의 흐름이 크게 증가했습니다.' },
        { en: 'Meditation helps maintain a steady mental state and improves the creative process.', ko: '명상은 안정적인 정신 상태를 유지하고 창의적인 과정의 흐름을 개선하는 데 도움이 됩니다.' },
      ],
      wordDistractors: ['flaw', 'glow', 'blow'],
      definitionDistractors: [
        'A sudden burst of liquid from a pressurized source',
        'The act of pouring liquid into a container',
        'A pool of still water that does not move',
      ],
    }
  ),
  word('flower', '꽃', 1, 'noun',
    ['잎', '뿌리', '줄기', '씨', '가시', '나무', '풀', '이끼', '버섯', '열매'],
    tips({
      etymology: '라틴어 \'florem\'에서 유래되었으며, 식물의 가장 화려한 정점인 꽃을 의미합니다.',
      visual: '알록달록한 꽃잎이 펼쳐진 장미나 튤립의 화사한 모습을 상상해 보세요.',
      soundAlike: '빵을 만드는 가루인 \'flour(밀가루)\'와 발음이 똑같으니 주의해서 구분하세요.',
      context: '정원이나 공원에서 향기를 내뿜으며 벌과 나비를 부르는 식물의 생식 기관입니다.',
      synonymAntonym: 'blossom은 주로 나무에 피는 꽃을, bloom은 꽃이 활짝 핀 상태를 강조합니다.',
    }),
    {
      definition: 'the seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla',
      synonyms: ['blossom', 'bloom', 'floret'],
      antonyms: ['root', 'stem', 'thorn'],
      exampleSentences: [
        { en: 'The colorful garden was filled with the sweet scent of every blooming plant.', ko: '다채로운 정원은 활짝 핀 모든 식물의 달콤한 향기로 가득했습니다.' },
        { en: 'Bees fly from one petal to another to collect nectar during the spring.', ko: '벌들은 봄 동안 꿀을 모으기 위해 이 꽃잎에서 저 꽃잎으로 날아다닙니다.' },
      ],
      wordDistractors: ['flour', 'tower', 'power'],
      definitionDistractors: [
        'A leafy green plant that grows close to the ground',
        'The fruit produced by a tree at the end of summer',
        'A type of grass found in tropical climates',
      ],
    }
  ),
  word('fluid', '유동성의', 8, 'adjective',
    ['고정된', '딱딱한', '정적인', '불변의', '단단한', '견고한', '일정한', '경직된', '안정적인', '영구적인'],
    tips({
      etymology: '라틴어 \'fluere(흐르다)\'에서 유래하여 액체처럼 막힘없이 움직이는 성질을 나타냅니다.',
      visual: '컵에 담긴 물이 이리저리 흔들리며 모양을 바꾸는 유연한 모습을 상상해 보세요.',
      soundAlike: '\'플루이드\' 발음이 \'풀리다\'와 비슷하므로 상황이 고정되지 않고 풀려 있는 상태로 기억하세요.',
      context: '계획이나 상황이 확정되지 않고 언제든 바뀔 수 있는 가변적인 상태를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '흐르는 성질의 liquid와 유사하며, 꽉 막히고 굳은 상태인 rigid와는 반대됩니다.',
    }),
    {
      definition: 'capable of flowing and easily changing shape or adapting to different conditions',
      synonyms: ['flexible', 'variable', 'mobile'],
      antonyms: ['stable', 'inflexible', 'unvarying'],
      exampleSentences: [
        { en: 'The travel itinerary remains fluid for now because we might encounter unexpected weather changes.', ko: '예기치 못한 날씨 변화가 있을 수 있기 때문에 여행 일정은 현재 유동적인 상태입니다.' },
        { en: 'Athletes often practice smooth and continuous movements to maintain a graceful performance.', ko: '운동선수들은 우아한 성적을 유지하기 위해 종종 부드럽고 유동적인 동작을 연습합니다.' },
      ],
      wordDistractors: ['flood', 'flute', 'lucid'],
      definitionDistractors: [
        'Existing in a solid, unchangeable state',
        'Relating to a specific type of liquid chemical',
        'Moving at an extremely fast and uncontrolled speed',
      ],
    }
  ),
  word('flush', '왈칵 흐름', 9, 'noun',
    ['멈추다', '적시다', '닦다', '말리다', '흡수하다', '빼다', '막다', '고이게 하다', '천천히', '뚝뚝'],
    tips({
      etymology: '라틴어 \'fluxus(흐름)\'에서 유래하여 물이 한꺼번에 쏟아져 나오는 움직임을 나타냅니다.',
      visual: '변기 물을 내릴 때나 수도꼭지를 틀었을 때 물이 콸콸 쏟아지는 모습을 상상하세요.',
      soundAlike: '플러시(flush) 발음이 물이 \'퍼억\' 하고 쏟아지는 소리와 비슷하다고 생각하면 쉽습니다.',
      context: '주로 액체가 갑자기 쏟아지거나 얼굴에 피가 몰려 붉어지는 상황에서 사용됩니다.',
      synonymAntonym: '갑자기 쏟아지는 rush와 비슷하지만, 조금씩 흐르는 trickle과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a sudden, rapid flow of water or another liquid, or a sudden redness of the face',
      synonyms: ['rush', 'surge', 'gush'],
      antonyms: ['trickle', 'drip', 'recession'],
      exampleSentences: [
        { en: 'A sudden flush of water cleared the debris from the narrow drainage pipe.', ko: '갑자기 왈칵 흐른 물이 좁은 배수관에서 잔해물을 씻어냈습니다.' },
        { en: 'The heavy rain caused a powerful flush of mud down the hillside.', ko: '폭우로 인해 언덕 아래로 진흙이 왈칵 쏟아져 내려왔습니다.' },
      ],
      wordDistractors: ['blush', 'plush', 'crush'],
      definitionDistractors: [
        'A slow dripping of water from a leaky faucet',
        'A dried-up riverbed with no remaining moisture',
        'A gentle mist of water rising from a surface',
      ],
    }
  ),
  word('focus', '초점', 2, 'noun',
    ['분산', '흐림', '주변', '배경', '여백', '산만', '흐트러짐', '비초점', '흐릿함', '주변시'],
    tips({
      etymology: '라틴어에서 \'난로\'나 \'벽로\'를 뜻하던 단어로, 집안의 모든 사람이 모이는 중심지라는 의미에서 유래했습니다.',
      visual: '돋보기로 햇빛을 한 점에 모아 종이를 태우는 강렬한 빛의 점을 상상해 보세요.',
      soundAlike: '포커스(Focus)는 카메라 셔터를 누르기 전 \'폭\' 하고 맞춰지는 선명한 상태와 비슷합니다.',
      context: '사진을 찍을 때 피사체가 선명하게 보이도록 렌즈를 조절하는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'center와 concentration은 중심을 뜻하며, distraction은 정신을 흩뜨리는 방해물을 뜻합니다.',
    }),
    {
      definition: 'the center of interest or activity, or the state of having a clear and defined image',
      synonyms: ['center', 'core', 'focal point'],
      antonyms: ['periphery', 'exterior', 'disorganization'],
      exampleSentences: [
        { en: 'The main point of the discussion was to improve customer satisfaction.', ko: '토론의 주요 초점은 고객 만족도를 향상시키는 것이었습니다.' },
        { en: 'Adjusting the lens helped bring the distant mountain into sharp clarity.', ko: '렌즈를 조절하자 멀리 있는 산의 초점이 뚜렷하게 잡혔습니다.' },
      ],
      wordDistractors: ['locus', 'forum', 'bonus'],
      definitionDistractors: [
        'The outermost edge or boundary of a visual field',
        'A blurred or distorted area in an image',
        'The background scenery in a photograph',
      ],
    }
  ),
  word('fog', '안개', 3, 'noun',
    ['맑음', '청명', '햇빛', '선명', '투명', '밝음', '맑은 하늘', '쾌청', '시원', '개임'],
    tips({
      etymology: '북유럽 언어에서 유래된 이 단어는 원래 \'습기\'나 \'축축함\'을 뜻하는 말에서 시작되었습니다.',
      visual: '이른 아침 자동차 앞 유리가 뿌옇게 변해 앞이 전혀 보이지 않는 도로 상황을 상상해 보세요.',
      soundAlike: '\'폭(fog)\' 하고 시야가 막혀버리는 느낌으로 발음하면 기억하기 쉽습니다.',
      context: '날씨 예보에서 가시거리가 짧아질 때 가장 자주 등장하는 기상 용어입니다.',
      synonymAntonym: 'mist보다 입자가 굵고 진한 상태를 의미하며, 반대로 하늘이 깨끗한 상태는 clarity라고 합니다.',
    }),
    {
      definition: 'A thick cloud of tiny water droplets suspended in the atmosphere at or near the earth\'s surface that obscures or restricts visibility.',
      synonyms: ['mist', 'haze', 'smog'],
      antonyms: ['clearness', 'brightness', 'transparency'],
      exampleSentences: [
        { en: 'The heavy morning vapor made it extremely difficult for drivers to see the traffic lights.', ko: '짙은 아침 안개 때문에 운전자들이 교통 신호등을 보기가 매우 어려웠습니다.' },
        { en: 'The golden gate bridge was partially hidden by a thick layer of grey moisture rolling in from the ocean.', ko: '금문교는 바다에서 밀려오는 두꺼운 회색 안개 층에 의해 부분적으로 가려져 있었습니다.' },
      ],
      wordDistractors: ['frog', 'cog', 'bog'],
      definitionDistractors: [
        'A light drizzle of rain that lasts for hours',
        'Heavy dark clouds that block sunlight completely',
        'A strong wind that blows dust across flat terrain',
      ],
    }
  ),
  word('fold', '주름', 6, 'noun',
    ['펴기', '평평함', '매끄러움', '당김', '늘임', '평면', '평탄', '펼침', '전개', '평탄함'],
    tips({
      etymology: '게르만어 \'faldan\'에서 유래하여 무언가를 겹치거나 포개는 동작에서 \'주름\'이라는 의미가 생겼습니다.',
      visual: '잘 다려진 바지의 칼주름이나 종이비행기를 접었을 때 생기는 선명한 자국을 상상해 보세요.',
      soundAlike: '편지지를 \'폴폴\' 날리지 않게 \'폴드(fold)\'해서 접어두는 장면을 연상하면 쉽습니다.',
      context: '패션 디자인에서 치마의 주름을 잡거나, 지질학에서 지층이 휘어 주름진 구조를 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'crease는 구겨진 주름을, pleat는 의도적인 주름을 뜻하며 smooth는 주름 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'a line or ridge produced on a surface by bending or doubling a flexible material',
      synonyms: ['crease', 'pleat', 'wrinkle'],
      antonyms: ['flatness', 'smoothness', 'expansion'],
      exampleSentences: [
        { en: 'The geologist pointed to a distinct fold in the rock layers caused by tectonic pressure.', ko: '지질학자는 지각 압력으로 인해 발생한 암석층의 뚜렷한 주름을 가리켰다.' },
        { en: 'She carefully pressed each fold of the silk dress to ensure it looked perfect for the gala.', ko: '그녀는 갈라 쇼에서 완벽해 보이도록 실크 드레스의 각 주름을 정성껏 다림질했다.' },
      ],
      wordDistractors: ['bold', 'gold', 'mold'],
      definitionDistractors: [
        'A flat, smooth surface without any texture',
        'A tear or rip in fabric caused by pulling',
        'A decorative pattern printed on a surface',
      ],
    }
  ),
  word('folk', '사람들', 7, 'noun',
    ['개인', '한 사람', '소수', '엘리트', '귀족', '외국인', '이방인', '적', '타자', '비주류'],
    tips({
      etymology: '독일어 \'Volk\'에서 유래하여 특정 지역이나 문화를 공유하는 민족이나 사람들의 집단을 뜻합니다.',
      visual: '마을 광장에 옹기종기 모여 이야기를 나누는 평범한 이웃들의 모습을 상상해 보세요.',
      soundAlike: '포크(fork)와 발음이 비슷하지만, 끝소리가 \'k\'로 끝나며 식기구가 아닌 사람들을 가리킵니다.',
      context: '주로 \'folks\'라고 복수형으로 쓰여 부모님이나 친근한 사람들을 부를 때 자주 사용됩니다.',
      synonymAntonym: '대중을 뜻하는 public과 비슷하지만, 개인을 뜻하는 individual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'people in general, especially those belonging to a particular group or region',
      synonyms: ['people', 'community', 'populace'],
      antonyms: ['individual', 'solitary', 'loner'],
      exampleSentences: [
        { en: 'Local folk gathered at the town hall to discuss the new park project.', ko: '지역 사람들이 새로운 공원 프로젝트를 논의하기 위해 마을 회관에 모였습니다.' },
        { en: 'Old folk in the village still remember the stories passed down for generations.', ko: '마을의 어르신들은 여전히 세대를 거쳐 전해 내려오는 이야기들을 기억하고 있습니다.' },
      ],
      wordDistractors: ['fork', 'fold', 'foul'],
      definitionDistractors: [
        'A traditional song or story from a specific culture',
        'A leader or authority figure within a community',
        'A type of dance performed at rural festivals',
      ],
    }
  ),
  word('follow', '쫓다', 4, 'verb',
    ['소생하다', '무안, 당황케 하다', '뒤엉키게 하다, 복잡하게 만들다', '못살게 굴다', '과장하다', '정보에 근거한\n(inform 알리다, 통지하다)', '방어하다', '개인화하다', '선택하다', '결정하다'],
    tips({
      etymology: '고대 영어 \'folgian\'에서 유래하여 누군가의 뒤를 걷거나 동행한다는 의미를 담고 있습니다.',
      visual: '어미 오리 뒤를 졸졸 따라가는 새끼 오리들의 행렬을 상상해 보세요.',
      soundAlike: '\'팔로우\'라는 발음은 SNS에서 누군가의 소식을 듣기 위해 구독하는 버튼을 떠올리면 쉽습니다.',
      context: '길을 안내받을 때나 규칙을 준수해야 할 때, 혹은 물리적으로 뒤쫓을 때 주로 사용됩니다.',
      synonymAntonym: '앞장서서 이끄는 lead와 반대로, 뒤에서 움직이는 동작을 나타냅니다.',
    }),
    {
      definition: 'to move behind someone or something in the same direction, or to act according to an instruction or rule',
      synonyms: ['pursue', 'trail', 'obey'],
      antonyms: ['lead', 'precede', 'pioneer'],
      exampleSentences: [
        { en: 'The stray dog decided to go after the hiker and stay close behind him all the way home.', ko: '그 유기견은 등산객을 쫓아가서 집으로 가는 내내 그의 뒤를 바짝 따르기로 했다.' },
        { en: 'Every student must strictly adhere to the safety guidelines during the science experiment.', ko: '모든 학생은 과학 실험 중에 안전 수칙을 엄격히 따라야 한다.' },
      ],
      wordDistractors: ['fallow', 'hollow', 'swallow'],
      definitionDistractors: [
        'To walk alongside someone at the same pace',
        'To guide or lead a group in a specific direction',
        'To imitate or copy another person\'s behavior',
      ],
    }
  ),
  word('fond', '좋아하는', 10, 'adjective',
    ['싫어하는', '혐오하는', '무관심한', '냉담한', '미워하는', '질색하는', '싫은', '밉상', '역겨운', '불호'],
    tips({
      etymology: '중세 영어 \'fonned(어리석은)\'에서 유래하여, 누군가에게 푹 빠져 바보처럼 보일 정도로 좋아한다는 의미로 발전했습니다.',
      visual: '할머니가 손주의 사진을 보며 인자하게 웃고 있는 따뜻한 거실 풍경을 상상해 보세요.',
      soundAlike: '\'폰(phone)드\'라고 발음되니, 새로 산 스마트폰을 너무 \'좋아하는\' 모습을 연상하면 쉽습니다.',
      context: '주로 \'be fond of\'라는 숙어 형태로 쓰여 취미나 사람에 대한 애정을 표현할 때 자주 등장합니다.',
      synonymAntonym: 'affectionate와 유사하며, 차갑고 무관심한 indifferent와는 반대되는 감정입니다.',
    }),
    {
      definition: 'having an affection or liking for someone or something, especially for a long time',
      synonyms: ['affectionate', 'devoted', 'adoring'],
      antonyms: ['indifferent', 'hostile', 'loathing'],
      exampleSentences: [
        { en: 'She has grown very attached to her old cat and remains deeply affectionate toward him.', ko: '그녀는 늙은 고양이에게 정이 많이 들었고 그를 매우 아끼는 마음을 가지고 있다.' },
        { en: 'Many people harbor a strong liking for childhood memories of their hometown.', ko: '많은 이들이 고향에 대한 어린 시절의 기억을 무척 좋아하며 간직하고 있다.' },
      ],
      wordDistractors: ['bond', 'fund', 'found'],
      definitionDistractors: [
        'Having a strong dislike or aversion toward something',
        'Feeling nostalgic or sentimental about the past',
        'Being overly attached to material possessions',
      ],
    }
  ),
];
