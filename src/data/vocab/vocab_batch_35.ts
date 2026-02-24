import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch35: VocabItem[] = [
  word('fool', '바보', 1, 'noun',
    ['현인', '천재', '철인', '박식가', '지혜로운 사람', '전문가', '달인', '현자', '똑똑한 사람', '지성인'],
    tips({
      etymology: '라틴어 \'follis(바람이 든 가죽 주머니)\'에서 유래하여 머릿속이 텅 비어 있는 사람을 뜻하게 되었습니다.',
      visual: '광대 모자를 쓰고 우스꽝스러운 행동을 하며 사람들을 웃기는 어리석은 사람을 상상해 보세요.',
      soundAlike: '발음이 \'풀\'과 비슷하죠? 풀린 눈으로 멍하게 서 있는 바보 같은 모습을 떠올려 보세요.',
      context: '주로 판단력이 부족하거나 속기 쉬운 사람을 가리킬 때 사용하며, 가벼운 농담조로도 쓰입니다.',
      synonymAntonym: 'idiot과 비슷하지만, 반대로 지혜가 넘치는 sage와는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'a person who acts unwisely or lacks good sense and judgment',
      synonyms: ['idiot', 'simpleton', 'dunce'],
      antonyms: ['sage', 'genius', 'intellectual'],
      exampleSentences: [
        { en: 'He felt like a complete idiot after realizing he had been tricked by a simple prank.', ko: '그는 단순한 장난에 속았다는 것을 깨닫고 완전히 바보가 된 기분이었다.' },
        { en: 'Only a reckless person would attempt to cross the frozen lake in such warm weather.', ko: '이렇게 따뜻한 날씨에 얼어붙은 호수를 건너려고 하는 것은 바보 같은 짓이다.' },
      ],
    }
  ),
  word('football', '축구', 2, 'noun',
    ['야구', '농구', '배구', '테니스', '골프', '수영', '육상', '권투', '하키', '크리켓'],
    tips({
      etymology: '발을 뜻하는 foot과 공을 뜻하는 ball이 합쳐져 발로 차는 공놀이라는 의미가 되었습니다.',
      visual: '잔디밭 위에서 선수들이 흰색과 검은색이 섞인 공을 발로 차며 골대를 향해 달리는 모습을 상상하세요.',
      soundAlike: '풋(foot)은 발, 볼(ball)은 공입니다. \'풋볼\'이라고 발음하며 발로 공을 차는 동작을 해보세요.',
      context: '영국에서는 주로 축구를 의미하지만, 미국에서는 미식축구를 의미하기도 하니 상황에 따라 구분해야 합니다.',
      synonymAntonym: '미국식 표현인 soccer와 비슷하며, 정적인 실내 게임과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sport played by two teams on a field where players try to kick a round ball into the opposing goal.',
      synonyms: ['soccer', 'gridiron', 'ball game'],
      antonyms: ['indoor game', 'individual sport', 'sedentary activity'],
      exampleSentences: [
        { en: 'The children gathered at the park to play a friendly match after school.', ko: '아이들은 방과 후에 친선 경기를 하기 위해 공원에 모였습니다.' },
        { en: 'He kicked the ball across the field and scored a spectacular goal.', ko: '그는 경기장 반대편으로 공을 찼고 멋진 골을 넣었습니다.' },
      ],
    }
  ),
  word('for', '~을 위해', 3, 'preposition',
    ['반대로', '역으로', '대비하여', '맞서', '위로', '아래로', '안쪽으로', '바깥으로', '옆으로', '뒤로'],
    tips({
      etymology: '고대 영어 \'for\'에서 유래하여 누군가를 향하거나 무언가를 대체하는 방향성을 나타냅니다.',
      visual: '축구 경기에서 부상당한 선수 대신 교체 선수가 경기장으로 들어가는 장면을 상상해 보세요.',
      soundAlike: '숫자 4(four)와 발음이 같으므로, 4번 타자가 대타로 나서는 상황을 연상하면 쉽습니다.',
      context: '주로 전치사로 쓰이지만, 문맥상 누군가의 대리인이나 교체 수단을 나타낼 때 사용됩니다.',
      synonymAntonym: '대신한다는 의미의 in place of와 직접적인 반대 개념인 부재를 뜻하는 lack을 함께 기억하세요.',
    }),
    {
      definition: 'Used to indicate that one person or thing is acting as a substitute or representative of another.',
      synonyms: ['on behalf of', 'in place of', 'instead of'],
      antonyms: ['against', 'opposing', 'without'],
      exampleSentences: [
        { en: 'The vice president attended the international conference for the president who was ill.', ko: '부통령은 몸이 아픈 대통령을 대신하여 국제 회의에 참석했습니다.' },
        { en: 'She used applesauce for oil in the cake recipe to make it healthier.', ko: '그녀는 더 건강하게 만들기 위해 케이크 레시피에서 기름 대신 사과 소스를 사용했습니다.' },
      ],
    }
  ),
  word('force', '힘', 5, 'noun',
    ['나약', '연약', '무기력', '허약', '나약함', '무력함', '연약함', '허약함', '무능', '정지'],
    tips({
      etymology: '라틴어 fortis에서 유래되었으며, 이는 \'강한\' 또는 \'견고한\'이라는 의미를 담고 있습니다.',
      visual: '닫힌 문을 어깨로 강하게 밀어붙여 열려고 애쓰는 근육질의 팔을 상상해 보세요.',
      soundAlike: '포스(force)가 넘친다는 말처럼, 강력한 에너지가 뿜어져 나오는 느낌을 기억하세요.',
      context: '물리학에서는 물체의 운동 상태를 바꾸는 요인으로, 일상에서는 타인을 설득하는 강한 압박으로 쓰입니다.',
      synonymAntonym: '강력한 power와 유사하며, 아무런 영향력이 없는 상태인 weakness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'physical energy or intensity that causes motion or change in a body or system',
      synonyms: ['energy', 'intensity', 'vigor'],
      antonyms: ['weakness', 'frailty', 'impotence'],
      exampleSentences: [
        { en: 'The storm hit the coastal village with incredible destructive power and momentum.', ko: '폭풍은 엄청난 파괴력과 기세로 해안 마을을 덮쳤습니다.' },
        { en: 'Police officers had to use physical pressure to restrain the suspect during the arrest.', ko: '경찰관들은 체포 과정에서 용의자를 제압하기 위해 물리력을 사용해야 했습니다.' },
      ],
    }
  ),
  word('forehead', '이마', 6, 'noun',
    ['볼', '턱', '코', '입', '귀', '눈', '눈썹', '머리', '목', '광대'],
    tips({
      etymology: '앞을 뜻하는 fore와 머리를 뜻하는 head가 합쳐져 얼굴의 앞 윗부분을 의미합니다.',
      visual: '앞머리를 들어 올렸을 때 드러나는 넓고 평평한 얼굴 윗부분을 상상하세요.',
      soundAlike: '발음할 때 \'포헤드\'보다는 \'포리드\'에 가깝게 들리기도 하니 주의하세요.',
      context: '열이 나는지 확인하기 위해 손등을 짚어보는 부위가 바로 이곳입니다.',
      synonymAntonym: 'brow와 비슷한 의미로 쓰이지만, 반대되는 신체 부위로는 뒤통수인 back of the head를 생각할 수 있습니다.',
    }),
    {
      definition: 'the flat part of the face located above the eyes and below where the hair starts to grow',
      synonyms: ['brow', 'front', 'temple'],
      antonyms: ['occiput', 'nape', 'backhead'],
      exampleSentences: [
        { en: 'She brushed her long bangs aside to reveal a small scar on her upper face.', ko: '그녀는 얼굴 윗부분에 있는 작은 흉터를 드러내기 위해 긴 앞머리를 옆으로 넘겼다.' },
        { en: 'The mother placed her hand gently on the child\'s skin to check for a fever.', ko: '어머니는 아이의 열을 확인하기 위해 아이의 피부에 부드럽게 손을 올렸다.' },
      ],
    }
  ),
  word('foreign', '외국의', 7, 'adjective',
    ['국내의', '친숙한', '토착의', '내부의', '익숙한', '평범한', '전통적인', '공통의', '유사한', '고유한'],
    tips({
      etymology: '라틴어 \'foris(문 밖)\'에서 유래하여, 내가 사는 집이나 나라의 문 밖 세상을 의미합니다.',
      visual: '공항 입국 심사대 위에 적힌 \'Foreigners\' 표지판과 여권을 든 여행객들을 상상해 보세요.',
      soundAlike: '\'포린\' 발음이 \'폴폴\' 날아다니는 먼 나라의 느낌과 연결하면 기억하기 쉽습니다.',
      context: '무역, 언어, 여행 등 다른 나라와 관련된 모든 상황에서 가장 기본적으로 쓰이는 표현입니다.',
      synonymAntonym: '국내를 뜻하는 domestic과 반대되며, 바다 건너를 뜻하는 overseas와 비슷하게 쓰입니다.',
    }),
    {
      definition: 'coming from or belonging to a country that is not your own',
      synonyms: ['overseas', 'international', 'alien'],
      antonyms: ['domestic', 'native', 'local'],
      exampleSentences: [
        { en: 'Learning a new language is the best way to understand a different culture.', ko: '새로운 외국어를 배우는 것은 다른 문화를 이해하는 가장 좋은 방법입니다.' },
        { en: 'The government is trying to attract more investment from outside the country.', ko: '정부는 해외로부터 더 많은 외국인 투자를 유치하기 위해 노력하고 있습니다.' },
      ],
    }
  ),
  word('forest', '숲', 1, 'noun',
    ['사막', '초원', '바다', '산', '도시', '들판', '늪', '강', '호수', '평원'],
    tips({
      etymology: '라틴어 \'foris(밖)\'에서 유래하여 마을 밖의 야생 지역을 뜻하게 되었습니다.',
      visual: '빽빽하게 들어선 나무들 사이로 햇살이 비치는 울창한 숲의 풍경을 상상해 보세요.',
      soundAlike: '포레스트(Forest) - \'포근한\' 휴식을 주는 \'레\'전드급 \'스트\'레스 해소 공간인 숲.',
      context: '캠핑, 등산, 야생 동물 관찰과 같은 자연 활동을 이야기할 때 주로 등장합니다.',
      synonymAntonym: '나무가 우거진 woods와 비슷하지만, forest는 훨씬 더 넓고 깊은 규모를 의미합니다.',
    }),
    {
      definition: 'A large area of land densely covered with trees and various plants.',
      synonyms: ['woods', 'jungle', 'grove'],
      antonyms: ['desert', 'wasteland', 'clearing'],
      exampleSentences: [
        { en: 'Many wild animals live deep inside the dark and ancient forest.', ko: '많은 야생 동물들이 어둡고 오래된 숲속 깊은 곳에 살고 있습니다.' },
        { en: 'The hikers followed a narrow path that led them through the pine forest.', ko: '등산객들은 소나무 숲을 통과하는 좁은 길을 따라갔습니다.' },
      ],
    }
  ),
  word('forever', '영원히', 2, 'adverb',
    ['차근차근', '집중해서', '즉시', '뒤늦게', '점차', '반복적으로', '우선', '빠르게', '천천히', '자주'],
    tips({
      etymology: '전치사 for(~동안)와 ever(언제나)가 결합하여 \'모든 시간 동안\'이라는 의미가 되었습니다.',
      visual: '끝이 보이지 않는 긴 기찻길이나 밤하늘의 무수한 별들이 사라지지 않는 모습을 상상해 보세요.',
      soundAlike: '\'포에버\'라고 발음할 때 \'포(4)\'를 \'for\'로 생각하며 \'영원히\'를 위한 것이라고 기억하세요.',
      context: '주로 변하지 않는 사랑이나 우정, 혹은 시간이 너무 오래 걸리는 지루한 상황을 강조할 때 쓰입니다.',
      synonymAntonym: 'eternally와 유사하며, 잠시뿐인 상태를 뜻하는 temporarily와는 반대되는 개념입니다.',
    }),
    {
      definition: 'for all future time or for a very long period without an end',
      synonyms: ['eternally', 'permanently', 'perpetually'],
      antonyms: ['temporarily', 'briefly', 'momentarily'],
      exampleSentences: [
        { en: 'True friends promise to stay by each other\'s side for all time.', ko: '진정한 친구들은 언제나 서로의 곁에 머물겠다고 약속합니다.' },
        { en: 'The diamond ring was designed to symbolize a love that never ends.', ko: '그 다이아몬드 반지는 끝나지 않는 사랑을 상징하도록 디자인되었습니다.' },
      ],
    }
  ),
  word('forget', '잊다', 3, 'verb',
    ['기억하다', '상기하다', '떠올리다', '생각나다', '암기하다', '외우다', '명심하다', '염두에 두다', '기록하다', '회상하다'],
    tips({
      etymology: '고대 영어 \'for-\'(멀리)와 \'gietan\'(잡다)이 합쳐져, 잡고 있던 기억을 멀리 놓아버린다는 의미에서 유래했습니다.',
      visual: '머릿속의 칠판에 적힌 글씨가 지우개로 깨끗하게 지워지는 장면을 상상해 보세요.',
      soundAlike: '\'포겟\' 발음이 무언가를 \'포기\'하고 잊어버리는 상황과 비슷하다고 연결하면 기억하기 쉽습니다.',
      context: '약속 시간이나 열쇠를 둔 장소처럼 일상적인 정보를 놓쳤을 때 주로 사용합니다.',
      synonymAntonym: '기억을 유지하는 remember와 반대되는 개념으로, 의도치 않게 정보를 잃어버리는 상태를 나타냅니다.',
    }),
    {
      definition: 'to fail to recall a piece of information or to be unable to bring something to mind',
      synonyms: ['overlook', 'neglect', 'omit'],
      antonyms: ['remember', 'recall', 'recollect'],
      exampleSentences: [
        { en: 'Please do not forget your umbrella in the taxi by mistake.', ko: '실수로 택시에 우산을 두고 내리는 일을 잊지 않도록 주의하세요.' },
        { en: 'Many people often forget names shortly after meeting someone new at a party.', ko: '많은 사람들이 파티에서 새로운 사람을 만난 직후에 이름을 종종 까먹곤 합니다.' },
      ],
    }
  ),
  word('forgive', '용서하다', 4, 'verb',
    ['요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다'],
    tips({
      etymology: '고대 영어 \'for-\'(완전히)와 \'giefan\'(주다)이 합쳐져, 잘못에 대한 원망을 완전히 내어준다는 의미에서 유래했습니다.',
      visual: '화가 난 사람이 꽉 쥐고 있던 주먹을 풀고 상대방의 손을 따뜻하게 맞잡는 모습을 상상해 보세요.',
      soundAlike: '\'포기(forgive)하다\'와 발음이 비슷합니다. 상대방에 대한 미운 마음을 포기하고 놓아주는 상황을 떠올려 보세요.',
      context: '잘못을 저지른 친구가 진심으로 사과할 때, 그 사과를 받아들이고 앙금을 씻어내는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'pardon은 공식적인 사면을, blame은 용서의 반대인 비난을 의미하므로 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to stop feeling angry or resentful toward someone for an offense, flaw, or mistake',
      synonyms: ['pardon', 'excuse', 'absolve'],
      antonyms: ['blame', 'condemn', 'punish'],
      exampleSentences: [
        { en: 'She decided to let go of the past and truly pardon her friend\'s mistake.', ko: '그녀는 과거를 잊고 친구의 실수를 진심으로 용서하기로 결심했다.' },
        { en: 'It takes a lot of courage to move past a betrayal and show mercy to someone.', ko: '배신감을 극복하고 누군가를 용서하는 데는 많은 용기가 필요하다.' },
      ],
    }
  ),
  word('form', '모양', 1, 'noun',
    ['내용', '본질', '핵심', '의미', '기능', '역할', '성격', '질료', '실체', '정신'],
    tips({
      etymology: '라틴어 \'forma\'에서 유래하여 사물의 외적인 형상이나 틀을 의미하게 되었습니다.',
      visual: '찰흙을 만져서 특정한 모양을 빚어내는 손길을 상상해 보세요.',
      soundAlike: '서류 양식을 뜻하는 \'폼\'과 발음이 같으니, 정해진 틀이나 모양을 떠올리면 쉽습니다.',
      context: '예술 작품의 외형적 구성이나 운동선수의 자세를 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'shape와 유의어 관계이며, 아무것도 없는 상태인 void와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the visible shape, configuration, or structural appearance of an object',
      synonyms: ['shape', 'structure', 'configuration'],
      antonyms: ['void', 'disorganization', 'formlessness'],
      exampleSentences: [
        { en: 'The artist used soft clay to create a unique human figure.', ko: '예술가는 부드러운 찰흙을 사용하여 독특한 인간의 형상을 만들었습니다.' },
        { en: 'Ice crystals take a beautiful hexagonal appearance when they freeze.', ko: '얼음 결정은 얼 때 아름다운 육각형 모양을 띱니다.' },
      ],
    }
  ),
  word('formal', '형식상의', 5, 'adjective',
    ['비공식적인', '캐주얼한', '무질서한', '즉흥적인', '친근한', '불규칙한', '편안한', '사적인', '자연스러운', '허물없는'],
    tips({
      etymology: '라틴어 \'forma(형태)\'에서 유래하여, 정해진 틀이나 모양을 갖춘 상태를 의미합니다.',
      visual: '넥타이를 매고 정장을 차려입은 사람이 격식 있는 만찬회장에 서 있는 모습을 상상하세요.',
      soundAlike: '\'폼(form)을 잡다\'라는 말처럼, 겉모양이나 형식을 딱딱하게 갖춘 느낌으로 기억하세요.',
      context: '비즈니스 이메일이나 결혼식, 장례식처럼 예의를 갖춰야 하는 상황에서 주로 쓰입니다.',
      synonymAntonym: '공식적인 official과 유의어이며, 편안하고 격식 없는 informal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'following conventional rules or official procedure; not casual',
      synonyms: ['official', 'ceremonial', 'conventional'],
      antonyms: ['informal', 'casual', 'relaxed'],
      exampleSentences: [
        { en: 'The invitation requested that all guests wear attire suitable for a black-tie event.', ko: '초대장에는 모든 손님이 정식 행사에 적합한 복장을 착용해 달라는 요청이 적혀 있었습니다.' },
        { en: 'The two countries signed a written agreement to end the long-standing dispute.', ko: '두 나라는 오랜 분쟁을 끝내기 위해 공식적인 서면 합의서에 서명했습니다.' },
      ],
    }
  ),
  word('format', '체제', 6, 'noun',
    ['무질서', '혼란', '무형식', '자유형', '비정형', '무체계', '산만', '불규칙', '무계획', '무형태'],
    tips({
      etymology: '라틴어 \'formare(형성하다)\'에서 유래하여 사물이 구성되는 방식이나 틀을 의미합니다.',
      visual: '컴퓨터 파일을 저장할 때 선택하는 확장자나 문서의 깔끔한 레이아웃을 상상해 보세요.',
      soundAlike: '\'포맷\'이라는 발음은 컴퓨터 초기화뿐만 아니라 전체적인 \'형식\'을 잡는 소리로 기억하세요.',
      context: '방송 프로그램의 구성 방식이나 책의 판형, 데이터 저장 방식 등을 논할 때 자주 쓰입니다.',
      synonymAntonym: '구조를 뜻하는 structure와 유의어이며, 아무런 틀이 없는 disorganization과는 반대됩니다.',
    }),
    {
      definition: 'The general arrangement, plan, or design of something such as a publication or a broadcast.',
      synonyms: ['arrangement', 'layout', 'structure'],
      antonyms: ['disorganization', 'chaos', 'formlessness'],
      exampleSentences: [
        { en: 'The new talk show follows a unique interview style and interactive presentation.', ko: '그 새로운 토크쇼는 독특한 인터뷰 스타일과 대화형 구성 체제를 따릅니다.' },
        { en: 'You must submit your final report in a digital file type that is compatible with our system.', ko: '귀하는 우리 시스템과 호환되는 디지털 파일 체제로 최종 보고서를 제출해야 합니다.' },
      ],
    }
  ),
  word('formation', '형성', 7, 'noun',
    ['해체', '분해', '붕괴', '소멸', '해산', '분산', '파괴', '소산', '무너짐', '철거'],
    tips({
      etymology: '라틴어 \'formare(모양을 만들다)\'에서 유래하여 무언가 형태를 갖추어가는 과정을 뜻합니다.',
      visual: '축구 선수들이 경기 시작 전 일정한 대형으로 줄을 맞춰 서 있는 모습을 상상해 보세요.',
      soundAlike: '포메이션(formation)은 한국어에서도 스포츠 전술 대형을 말할 때 그대로 쓰여 익숙합니다.',
      context: '지질학에서 암석이 쌓여 층을 이루거나, 구름이 하늘에서 모양을 잡을 때 자주 쓰입니다.',
      synonymAntonym: '무언가 만들어지는 creation과 반대로 완전히 부서지는 destruction을 함께 기억하세요.',
    }),
    {
      definition: 'the act of creating something or the specific arrangement of a group of people or objects',
      synonyms: ['configuration', 'establishment', 'development'],
      antonyms: ['destruction', 'dissolution', 'disorganization'],
      exampleSentences: [
        { en: 'The aircraft flew in a tight V-shape above the stadium.', ko: '그 항공기들은 경기장 위에서 엄격한 V자 대형으로 비행했습니다.' },
        { en: 'Scientists are studying the gradual development of ice crystals in the atmosphere.', ko: '과학자들은 대기 중에서 얼음 결정이 점진적으로 형성되는 과정을 연구하고 있습니다.' },
      ],
    }
  ),
  word('former', '이전의', 4, 'adjective',
    ['최신의', '미래의', '현재의', '영구적인', '일시적인', '공식적인', '우연한', '강력한', '희박한', '신속한'],
    tips({
      etymology: '고대 영어 \'form\'에서 유래하여 \'가장 앞선\' 또는 \'먼저의\'라는 뜻을 가집니다.',
      visual: '오래된 흑백 사진 속의 예전 모습과 현재의 컬러 사진을 대조하며 떠올려 보세요.',
      soundAlike: '발음이 \'폼(form)어\'와 비슷하므로, 예전의 \'폼\'이 좋았던 시절을 연상하세요.',
      context: '두 가지를 언급할 때 \'전자\'를 가리키거나, 예전 직함이나 상태를 말할 때 자주 쓰입니다.',
      synonymAntonym: 'previous와 유의어 관계이며, 나중을 뜻하는 latter와 반대 개념으로 묶어 외우면 좋습니다.',
    }),
    {
      definition: 'having come before in time or order; belonging to a past period',
      synonyms: ['previous', 'prior', 'earlier'],
      antonyms: ['latter', 'current', 'future'],
      exampleSentences: [
        { en: 'The building was restored to its original glory by the local council.', ko: '그 건물은 지역 의회에 의해 이전의 영광스러운 모습으로 복원되었습니다.' },
        { en: 'Our teacher is a professional athlete who competed in the Olympic Games.', ko: '우리 선생님은 올림픽 경기에 출전했던 전직 프로 운동선수입니다.' },
      ],
    }
  ),
  word('forth', '앞으로', 5, 'adverb',
    ['뒤로', '후방으로', '되돌아', '역으로', '등지고', '물러나', '후퇴하여', '뒤쪽으로', '안으로', '멈춤'],
    tips({
      etymology: '고대 영어 \'forth\'에서 유래하여 \'앞으로 나아가는\' 움직임을 뜻합니다.',
      visual: '어두운 터널 끝에서 밝은 빛을 향해 한 걸음씩 걸어 나가는 모습을 상상하세요.',
      soundAlike: '숫자 4(four)와 발음이 비슷하지만, 4번째(fourth)가 아닌 \'앞으로\'라는 방향에 집중하세요.',
      context: '주로 \'back and forth(앞뒤로)\'나 \'bring forth(내놓다)\' 같은 숙어 표현에 자주 쓰입니다.',
      synonymAntonym: 'forward와 유의어 관계이며, backward와는 정반대의 방향을 나타냅니다.',
    }),
    {
      definition: 'Out into view or into existence; moving forward from a particular place or time.',
      synonyms: ['onward', 'forward', 'ahead'],
      antonyms: ['backward', 'back', 'rearward'],
      exampleSentences: [
        { en: 'The budding trees began to bring forth new leaves as spring arrived.', ko: '봄이 오자 싹이 트는 나무들이 새 잎을 틔우기 시작했다.' },
        { en: 'The witness stepped forth to tell the truth about what happened that night.', ko: '그날 밤 일어난 일에 대한 진실을 말하기 위해 증인이 앞으로 나섰다.' },
      ],
    }
  ),
  word('fortunate', '운좋은', 6, 'adjective',
    ['불운한', '우연한', '필연적인', '의도적인', '부유한', '가난한', '성공적인', '실패한', '행복한', '슬픈'],
    tips({
      etymology: '라틴어 \'fortuna(운명, 행운)\'에서 유래하여 좋은 운을 가졌음을 뜻합니다.',
      visual: '네 잎 클로버를 발견하고 기뻐하는 사람의 표정을 상상해 보세요.',
      soundAlike: '발음이 \'포춘(Fortune) 쿠키\'와 비슷하므로 과자 속 행운의 메시지를 떠올리세요.',
      context: '복권에 당첨되거나 사고를 간신히 피했을 때 주로 사용되는 긍정적인 표현입니다.',
      synonymAntonym: 'lucky와 비슷하지만 더 격식 있는 표현이며, 반대말은 앞에 un-을 붙인 unfortunate입니다.',
    }),
    {
      definition: 'favored by or involving good luck or favorable circumstances',
      synonyms: ['lucky', 'blessed', 'providential'],
      antonyms: ['unlucky', 'unfortunate', 'hapless'],
      exampleSentences: [
        { en: 'We were extremely lucky to find the last available tickets for the show.', ko: '우리는 그 공연의 마지막 남은 티켓을 구할 수 있어서 정말 운이 좋았습니다.' },
        { en: 'He felt very blessed to have such supportive friends and family during hard times.', ko: '그는 힘든 시기에 그렇게 지지해 주는 친구들과 가족이 있다는 것을 매우 다행스럽게 생각했습니다.' },
      ],
    }
  ),
  word('fortune', '운', 7, 'noun',
    ['불운', '재난', '빈곤', '실패', '악재', '결핍', '불행', '상실', '좌절', '역경'],
    tips({
      etymology: '로마 신화의 운명의 여신 \'Fortuna\'에서 유래하여, 인간의 힘으로 어찌할 수 없는 행운이나 운명을 뜻하게 되었습니다.',
      visual: '황금 동전이 가득 담긴 커다란 보물 상자나 행운의 네잎클로버를 떠올려 보세요.',
      soundAlike: '발음이 \'포춘\' 쿠키와 같습니다. 쿠키 속에 들어있는 운세 종이를 상상하면 기억하기 쉽습니다.',
      context: '단순한 운(luck)을 넘어, 개인이 소유한 막대한 재산이나 부를 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '행운을 뜻하는 luck과 유의어이며, 반대로 불운을 뜻하는 misfortune과 대조됩니다.',
    }),
    {
      definition: 'a large amount of money or assets, or the chance and luck that affects human affairs',
      synonyms: ['wealth', 'luck', 'prosperity'],
      antonyms: ['poverty', 'misfortune', 'hardship'],
      exampleSentences: [
        { en: 'The young entrepreneur inherited a massive family fortune after his grandfather passed away.', ko: '그 젊은 기업가는 할아버지가 돌아가신 후 막대한 가문의 재산을 물려받았습니다.' },
        { en: 'By a stroke of good luck, she had the fortune of meeting her favorite author at the airport.', ko: '운 좋게도, 그녀는 공항에서 자신이 가장 좋아하는 작가를 만나는 행운을 누렸습니다.' },
      ],
    }
  ),
  word('forum', '공개토론회', 4, 'noun',
    ['비공개', '일대일', '밀실', '비밀회의', '독백', '일방통보', '선언', '공지', '명령', '지시'],
    tips({
      etymology: '고대 로마에서 사람들이 모여 공공의 문제를 논의하던 광장을 뜻하는 라틴어에서 유래했습니다.',
      visual: '원형 테이블에 둘러앉은 전문가들이 마이크를 잡고 청중 앞에서 의견을 나누는 모습을 상상하세요.',
      soundAlike: '\'보람\'과 발음이 비슷합니다. 토론을 통해 보람찬 결론을 내는 자리를 떠올려 보세요.',
      context: '인터넷 게시판이나 학술 세미나처럼 여러 사람이 의견을 교환하는 모든 공간에 쓰입니다.',
      synonymAntonym: 'conference와 유사하며, 일방적인 연설인 monologue와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A public meeting place or an open organization for involving the exchange of ideas and discussion of issues.',
      synonyms: ['symposium', 'conference', 'seminar'],
      antonyms: ['privacy', 'secrecy', 'monologue'],
      exampleSentences: [
        { en: 'The university hosted an international forum to discuss the impacts of climate change.', ko: '대학교는 기후 변화의 영향에 대해 논의하기 위해 국제 공개토론회를 개최했습니다.' },
        { en: 'Online message boards provide a useful forum for users to share their technical experiences.', ko: '온라인 게시판은 사용자들이 기술적 경험을 공유할 수 있는 유용한 토론의 장을 제공합니다.' },
      ],
    }
  ),
  word('forward', '앞으로', 5, 'adverb',
    ['뒤쪽에', '후방에', '등 뒤에', '후미에', '말미에', '뒤로', '후퇴하여', '등지고', '과거의', '정지된'],
    tips({
      etymology: '앞을 뜻하는 \'for\'와 방향을 나타내는 접미사 \'ward\'가 결합되어 앞을 향하는 움직임을 나타냅니다.',
      visual: '앞을 향해 힘차게 한 발씩 내딛으며 걸어가는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'포워드\'이므로, \'포(for)기하지 말고 워(ward)드(앞으로) 가자\'라고 외워보세요.',
      context: '시간이나 공간에서 앞쪽 방향으로 나아가는 움직임을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'ahead, onward와 비슷한 의미이며, backward(뒤로)와는 반대되는 방향을 나타냅니다.',
    }),
    {
      definition: 'toward the front; ahead in direction or time',
      synonyms: ['ahead', 'onward', 'forth'],
      antonyms: ['backward', 'rearward', 'behind'],
      exampleSentences: [
        { en: 'The army moved forward through the dense forest toward the enemy camp.', ko: '군대는 적 진영을 향해 울창한 숲을 통과하며 앞으로 전진했습니다.' },
        { en: 'She leaned forward to hear what the speaker was saying more clearly.', ko: '그녀는 연사가 말하는 것을 더 잘 듣기 위해 앞으로 몸을 기울였습니다.' },
      ],
    }
  ),
  word('fountain', '샘', 6, 'noun',
    ['우물', '수도', '호수', '강', '바다', '증발', '가뭄', '메마름', '건조', '물 부족'],
    tips({
      etymology: '라틴어 \'fons\'에서 유래되었으며, 이는 \'샘\'이나 \'원천\'을 의미합니다.',
      visual: '공원 한가운데에서 시원한 물줄기가 하늘로 솟구쳐 오르는 모습을 상상해 보세요.',
      soundAlike: '\'파운틴\' 발음이 \'파운드(pound)\'와 비슷하니, 물이 바닥을 탕탕 치는 소리를 연상하세요.',
      context: '도시 광장이나 정원의 장식용 구조물뿐만 아니라 지식의 원천을 비유할 때도 쓰입니다.',
      synonymAntonym: 'spring과 유사하며, 물이 전혀 없는 상태인 drought와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A structure that sends a stream of water into the air, or a natural spring of water.',
      synonyms: ['spring', 'jet', 'source'],
      antonyms: ['drain', 'drought', 'sink'],
      exampleSentences: [
        { en: 'Children enjoyed tossing shiny coins into the stone basin at the center of the park.', ko: '아이들은 공원 중앙에 있는 돌로 된 수조 안으로 반짝이는 동전들을 던지는 것을 즐겼다.' },
        { en: 'The elderly professor was regarded by his students as a vast reservoir of wisdom.', ko: '그 노교수는 학생들에게 거대한 지식의 샘으로 여겨졌다.' },
      ],
    }
  ),
  word('frame', '구조', 7, 'noun',
    ['내용', '충전물', '심', '알맹이', '본질', '핵심', '무형태', '무구조', '해체', '분산'],
    tips({
      etymology: '고대 영어 \'fremman(수행하다, 전진시키다)\'에서 유래하여 무언가를 지탱하는 뼈대나 체계를 의미하게 되었습니다.',
      visual: '사진을 끼워 넣는 액자의 단단한 테두리나 건물을 짓기 전 세워진 철골 뼈대를 상상해 보세요.',
      soundAlike: '\'프레임\'은 한국어에서도 안경테나 창틀을 말할 때 자주 쓰이므로 익숙한 발음을 활용하세요.',
      context: '정치나 사회 이슈를 특정 관점으로 가두어 설명할 때 \'프레임을 씌우다\'라는 표현으로도 자주 쓰입니다.',
      synonymAntonym: 'structure와 유사하며, 내부를 채우는 content나 무형의 void와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a rigid structure that surrounds or encloses something such as a picture, door, or window, or the basic underlying system of an object',
      synonyms: ['structure', 'framework', 'skeleton'],
      antonyms: ['interior', 'content', 'core'],
      exampleSentences: [
        { en: 'The carpenters finished the wooden skeleton of the house before starting on the walls.', ko: '목수들은 벽 작업을 시작하기 전에 집의 나무 구조물을 완성했습니다.' },
        { en: 'Scientists are working within a theoretical system to explain the new data.', ko: '과학자들은 새로운 데이터를 설명하기 위해 이론적 체계 안에서 연구하고 있습니다.' },
      ],
    }
  ),
  word('frankly', '솔직히', 4, 'adverb',
    ['점차', '반복적으로', '우선', '빠르게', '천천히', '자주', '가끔', '항상', '이미', '곧'],
    tips({
      etymology: '자유로운 사람을 뜻하는 Frank에서 유래하여, 숨김없이 자유롭게 말한다는 의미가 되었습니다.',
      visual: '친구와 마주 앉아 진지한 표정으로 속마음을 털어놓는 대화 장면을 상상해 보세요.',
      soundAlike: '프랭크(Frank)라는 친구가 소시지(frankfurter)를 먹으며 솔직하게 고백하는 소리를 연상해 보세요.',
      context: '상대방이 듣기 거북할 수 있는 진실을 말하기 전에 문장 맨 앞에서 주의를 끌 때 자주 쓰입니다.',
      synonymAntonym: 'honestly와 비슷하지만, 때로는 지나칠 정도로 직설적이라는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'In an open, honest, and direct manner, even if what is said is unpleasant.',
      synonyms: ['honestly', 'candidly', 'openly'],
      antonyms: ['evasively', 'insincerely', 'dishonestly'],
      exampleSentences: [
        { en: 'The manager spoke about the company\'s financial difficulties during the meeting.', ko: '매니저는 회의 중에 회사의 재정적 어려움에 대해 솔직하게 말했습니다.' },
        { en: 'I do not think your current plan will work in the long run.', ko: '솔직히 말해서 당신의 현재 계획이 장기적으로 효과가 있을 것 같지 않습니다.' },
      ],
    }
  ),
  word('free', '자유로운', 2, 'adjective',
    ['바쁜', '갇힌', '비싼', '엄격한', '유료의', '복잡한', '제한된', '위험한', '강제적인', '고정된'],
    tips({
      etymology: '고대 영어 \'freo\'에서 유래했으며, 사랑받는 사람이나 노예가 아닌 상태를 뜻하는 어근에서 시작되었습니다.',
      visual: '새장 문이 활짝 열려 있고 새가 하늘 높이 날아가는 이미지를 상상해 보세요.',
      soundAlike: '\'프리\' 발음이 \'풀리다\'와 비슷하죠? 묶여 있던 것이 풀려나서 자유로워진 상태를 연상하세요.',
      context: '시간이 비어 있거나(한가한), 비용을 지불하지 않아도 될 때(무료의) 자주 쓰입니다.',
      synonymAntonym: 'independent와 유사하며, 무언가에 얽매인 상태인 bound와는 반대되는 개념입니다.',
    }),
    {
      definition: 'not under the control or power of another and able to act or be done as one wishes',
      synonyms: ['independent', 'liberated', 'unrestricted'],
      antonyms: ['confined', 'restricted', 'enslaved'],
      exampleSentences: [
        { en: 'Every citizen has the right to express their opinions in a democratic society.', ko: '모든 시민은 민주주의 사회에서 자신의 의견을 표현할 자유로운 권리가 있습니다.' },
        { en: 'The software is available for anyone to download without any cost.', ko: '그 소프트웨어는 누구나 비용 없이 무료로 다운로드할 수 있습니다.' },
      ],
    }
  ),
  word('freeze', '얼다', 5, 'verb',
    ['녹다', '녹이다', '끓다', '데우다', '가열하다', '해동', '용해', '증발', '연소', '팽창'],
    tips({
      etymology: '고대 영어 \'freosan\'에서 유래되었으며, 아주 차가운 기온으로 인해 액체가 고체로 변하는 현상을 뜻합니다.',
      visual: '냉동실 문을 열었을 때 하얗게 서린 성에와 꽁꽁 얼어붙은 얼음 조각들을 상상해 보세요.',
      soundAlike: '\'프리즈\'라고 발음하며, 경찰이 범인에게 \'꼼짝 마!\'라고 외칠 때 쓰는 표현과 소리가 같습니다.',
      context: '경제 용어로는 가격이나 임금을 일정 수준으로 묶어두는 \'동결\'이라는 의미로도 자주 쓰입니다.',
      synonymAntonym: 'frost는 서리가 내리는 추위를 뜻하며, 반대말인 thaw는 얼었던 것이 녹는 과정을 의미합니다.',
    }),
    {
      definition: 'A period of extremely cold weather that causes liquids to turn into ice or prevents movement.',
      synonyms: ['frost', 'chill', 'glaciation'],
      antonyms: ['thaw', 'heatwave', 'melt'],
      exampleSentences: [
        { en: 'The sudden overnight drop in temperature caused a deep ground frost and a hard ice layer.', ko: '밤사이 갑작스러운 기온 하강으로 인해 땅이 깊게 얼고 단단한 얼음층이 생겼습니다.' },
        { en: 'The government announced a temporary wage policy to combat rising inflation rates.', ko: '정부는 치솟는 인플레이션율에 대응하기 위해 일시적인 임금 동결 정책을 발표했습니다.' },
      ],
    }
  ),
  word('frequent', '빈번한', 6, 'adjective',
    ['드문', '일시적인', '영구적인', '희귀한', '간헐적인', '우연한', '고정된', '신속한', '느린', '정기적인'],
    tips({
      etymology: '라틴어 frequens에서 유래하여 \'가득 찬\' 또는 \'군집한\' 상태가 반복되는 것을 의미합니다.',
      visual: '카페의 단골 손님이 문을 열고 들어오는 장면을 상상해 보세요.',
      soundAlike: '\'프리퀀트\' 발음이 \'풀이 퀜트(풀이 꽉 찼다)\'처럼 들린다고 생각하며 들판에 풀이 빽빽하고 자주 돋아난 모습을 연상하세요.',
      context: '일상생활에서 아주 짧은 간격으로 여러 번 일어나는 사건을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '항상 일어나는 constant와는 비슷하지만, 어쩌다 발생하는 rare와는 정반대의 개념입니다.',
    }),
    {
      definition: 'happening or occurring often or at short intervals',
      synonyms: ['repeated', 'constant', 'recurrent'],
      antonyms: ['rare', 'infrequent', 'occasional'],
      exampleSentences: [
        { en: 'Heavy rain caused frequent interruptions during the outdoor tennis tournament.', ko: '폭우로 인해 야외 테니스 토너먼트 도중 빈번한 중단이 발생했습니다.' },
        { en: 'She is a frequent visitor to the local library and borrows books every week.', ko: '그녀는 지역 도서관을 빈번하게 방문하며 매주 책을 빌립니다.' },
      ],
    }
  ),
  word('fresh', '새로운', 3, 'adjective',
    ['오래된', '부패한', '시든', '익숙한', '진부한', '탁한', '피곤한', '건조한', '딱딱한', '상한'],
    tips({
      etymology: '고대 프랑스어 \'fres\'에서 유래하여 \'차갑고 새로운\'이라는 뜻을 담고 있습니다.',
      visual: '아침 이슬이 맺힌 초록색 잎사귀나 갓 따온 사과의 아삭함을 상상해 보세요.',
      soundAlike: '프레시(fresh)는 \'프레시(press)\'와 비슷하지만, 새것을 눌러서 즙을 짜내는 상상을 해보세요.',
      context: '음식이 상하지 않았을 때뿐만 아니라, 아이디어가 참신할 때도 자주 쓰입니다.',
      synonymAntonym: 'new와 비슷하지만 더 생생한 느낌이며, stale과는 정반대의 상태를 나타냅니다.',
    }),
    {
      definition: 'recently made, grown, or arrived and not yet changed by time or use',
      synonyms: ['original', 'novel', 'recent'],
      antonyms: ['stale', 'withered', 'old'],
      exampleSentences: [
        { en: 'The bakery serves bread that is baked every morning to ensure it stays crisp.', ko: '그 빵집은 바삭함을 유지하기 위해 매일 아침 구운 신선한 빵을 제공합니다.' },
        { en: 'A short walk in the park helped her get some air and clear her mind.', ko: '공원에서의 짧은 산책은 그녀가 맑은 공기를 마시고 머리를 식히는 데 도움을 주었습니다.' },
      ],
    }
  ),
  word('fright', '공포', 7, 'noun',
    ['용기', '담대함', '안심', '평정', '침착', '대담', '평온', '무서움 없음', '안도', '자신감'],
    tips({
      etymology: '고대 영어 \'fyrhtu\'에서 유래했으며, 갑작스럽고 강렬한 두려움을 뜻하는 뿌리를 가지고 있습니다.',
      visual: '어두운 방에서 갑자기 튀어나온 유령을 보고 온몸이 굳어버린 사람의 표정을 상상해 보세요.',
      soundAlike: '발음이 \'플라이트(flight)\'와 비슷합니다. 너무 무서워서 비행기 타고 도망가고 싶은 상황을 떠올려 보세요.',
      context: '주로 \'give someone a fright\'처럼 누군가를 깜짝 놀라게 할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '갑작스러운 공포인 terror와 비슷하지만, 평온함을 뜻하는 calmness와는 정반대의 상태입니다.',
    }),
    {
      definition: 'A sudden intense feeling of fear or shock caused by the presence of danger.',
      synonyms: ['terror', 'panic', 'dread'],
      antonyms: ['bravery', 'calmness', 'security'],
      exampleSentences: [
        { en: 'The sudden loud noise gave the sleeping cat a terrible shock.', ko: '갑작스러운 큰 소음이 잠자던 고양이에게 심한 공포를 주었습니다.' },
        { en: 'She cried out in alarm when the shadow moved across the window.', ko: '그녀는 창문 너머로 그림자가 움직이자 공포에 질려 비명을 질렀습니다.' },
      ],
    }
  ),
  word('frog', '개구리', 1, 'noun',
    ['도마뱀', '뱀', '거북이', '악어', '물고기', '달팽이', '지렁이', '두꺼비', '올챙이', '도롱뇽'],
    tips({
      etymology: '고대 영어 \'frogga\'에서 유래했으며, 펄쩍 뛰는 특성을 가진 양서류를 뜻합니다.',
      visual: '연못 위 연꽃 잎에 앉아 \'개굴\' 소리를 내며 뛰어오를 준비를 하는 초록색 동물을 상상하세요.',
      soundAlike: '\'프로그\'라고 발음할 때 입 모양이 개구리가 울 때처럼 동그랗게 변하는 것을 느껴보세요.',
      context: '비가 온 뒤 습한 숲이나 연못 근처에서 흔히 발견되는 생물입니다.',
      synonymAntonym: '양서류를 뜻하는 amphibian과 비슷하며, 육지 동물인 mammal과는 대조적입니다.',
    }),
    {
      definition: 'A small, cold-blooded animal with smooth skin and long back legs used for jumping, typically living in or near water.',
      synonyms: ['amphibian', 'anuran', 'bullfrog'],
      antonyms: ['mammal', 'reptile', 'bird'],
      exampleSentences: [
        { en: 'The green creature jumped from the lily pad into the pond with a loud splash.', ko: '그 초록색 생물은 수련 잎에서 연못으로 큰 소리를 내며 뛰어들었습니다.' },
        { en: 'Many children enjoy catching tadpoles and watching them transform into adult jumpers.', ko: '많은 아이들이 올챙이를 잡아서 성체로 변하는 것을 관찰하는 것을 즐깁니다.' },
      ],
    }
  ),
  word('from', '~에서', 2, 'preposition',
    ['까지', '에게', '에서', '위해', '대신', '관하여', '대해', '맞은', '향하여', '쪽으로'],
    tips({
      etymology: '고대 영어 \'fram\'에서 유래하여 \'앞으로 나아가다\' 혹은 \'멀어지다\'라는 출발의 의미를 담고 있습니다.',
      visual: '화살표가 특정 지점에서 시작하여 밖으로 뻗어나가는 그림을 상상하면 출발점의 느낌을 쉽게 이해할 수 있습니다.',
      soundAlike: '\'프롬\' 발음이 \'품\'과 비슷하죠? 어머니의 \'품\'에서 태어나 세상으로 \'나왔다\'고 생각해보세요.',
      context: '어떤 물건의 출처나 편지를 보낸 사람을 밝힐 때 가장 흔하게 사용되는 전치사입니다.',
      synonymAntonym: '출발을 나타내는 out of와 비슷하지만, 도착을 나타내는 to와는 정반대의 방향을 가집니다.',
    }),
    {
      definition: 'Used to specify the starting point in space or time of an action, movement, or condition.',
      synonyms: ['starting at', 'beginning with', 'out of'],
      antonyms: ['to', 'until', 'toward'],
      exampleSentences: [
        { en: 'The train travels every day to the capital city starting its journey at this station.', ko: '기차는 매일 이 역에서 여정을 시작하여 수도로 이동합니다.' },
        { en: 'She received a beautiful bouquet of flowers sent by her secret admirer.', ko: '그녀는 비밀 팬으로부터 온 아름다운 꽃다발을 받았습니다.' },
      ],
    }
  ),
  word('front', '정면', 3, 'noun',
    ['뒤', '후방', '측면', '옆', '배후', '등', '뒷면', '후미', '뒤쪽', '배후지'],
    tips({
      etymology: '라틴어 \'frons\'에서 유래되었으며, 이는 이마나 얼굴의 앞부분을 뜻합니다.',
      visual: '건물의 화려한 입구나 자동차의 헤드라이트가 있는 앞모습을 상상해 보세요.',
      soundAlike: '\'프런트\' 데스크는 호텔에 들어서자마자 가장 먼저 마주하는 정면의 안내소입니다.',
      context: '기상학에서는 서로 다른 공기 덩어리가 만나는 경계선인 \'전선\'이라는 의미로도 쓰입니다.',
      synonymAntonym: 'back이나 rear와 반대되는 개념으로, 가장 먼저 보이는 면을 강조할 때 사용합니다.',
    }),
    {
      definition: 'The part or side of something that faces forward or is most often seen first.',
      synonyms: ['forefront', 'facade', 'exterior'],
      antonyms: ['back', 'rear', 'reverse'],
      exampleSentences: [
        { en: 'The garden at the front of the house is filled with colorful roses.', ko: '집 정면에 있는 정원은 형형색색의 장미로 가득 차 있다.' },
        { en: 'Please write your name clearly on the front of the envelope.', ko: '봉투 앞면에 이름을 정자로 기입해 주세요.' },
      ],
    }
  ),
  word('frost', '서리', 8, 'noun',
    ['해빙', '녹음', '더위', '열기', '햇빛', '장마', '가뭄', '보라색', '꽃', '잎'],
    tips({
      etymology: '고대 영어 \'frost\'에서 유래했으며, 얼다라는 뜻의 \'freeze\'와 어원이 같습니다.',
      visual: '추운 겨울 아침 차 유리에 하얗게 핀 얼음 꽃이나 풀잎 위의 하얀 가루를 상상해 보세요.',
      soundAlike: '\'프로스트\' 발음이 \'풀(위에) 서리\'가 내린 모습과 비슷하다고 연상해 보세요.',
      context: '주로 늦가을이나 겨울철 이른 아침 기온이 영하로 떨어질 때 자주 언급됩니다.',
      synonymAntonym: '얼음 결정인 rime과 비슷하지만, 따뜻한 해빙을 뜻하는 thaw와는 반대됩니다.',
    }),
    {
      definition: 'A thin layer of ice crystals formed on a surface when water vapor changes directly into ice.',
      synonyms: ['hoarfrost', 'rime', 'ice crystals'],
      antonyms: ['thaw', 'heat', 'warmth'],
      exampleSentences: [
        { en: 'The grass was covered with a delicate layer of white after the cold night.', ko: '추운 밤이 지난 후 풀밭은 섬세하고 하얀 서리 층으로 덮여 있었다.' },
        { en: 'Early morning temperatures dropped low enough to damage the crops with a heavy freeze.', ko: '이른 아침 기온이 심한 서리로 농작물에 피해를 줄 만큼 낮게 떨어졌다.' },
      ],
    }
  ),
  word('frown', '찌푸린 얼굴', 4, 'noun',
    ['미소', '웃음', '환한 얼굴', '기쁨', '만족', '웃는 얼굴', '밝은 표정', '환하게', '미소짓다', '웃다'],
    tips({
      etymology: '고대 프랑스어 \'froignier\'에서 유래하여 코를 찡그리거나 얼굴을 찌푸리는 행위를 뜻하게 되었습니다.',
      visual: '이마에 세로로 깊은 주름이 생기며 눈썹 사이가 좁아지는 불만 섞인 표정을 상상해 보세요.',
      soundAlike: '발음이 \'프라운\'인데, 풀이 죽어 \'푸우\'하고 한숨 쉬며 얼굴을 찌푸리는 모습을 연상하세요.',
      context: '주로 누군가의 제안이 마음에 들지 않거나 이해가 되지 않을 때 짓는 부정적인 표정으로 쓰입니다.',
      synonymAntonym: 'scowl과 유사하게 험악한 표정을 뜻하며, 반대로 환하게 웃는 smile과는 대조적입니다.',
    }),
    {
      definition: 'A facial expression in which the eyebrows are brought together and the forehead is wrinkled, usually indicating displeasure, confusion, or concentration.',
      synonyms: ['scowl', 'glare', 'grimace'],
      antonyms: ['smile', 'grin', 'beam'],
      exampleSentences: [
        { en: 'A deep crease appeared on her forehead as she looked at the confusing test results.', ko: '혼란스러운 시험 결과를 보던 그녀의 이마에 깊은 찌푸림이 나타났다.' },
        { en: 'The teacher noticed the student\'s puzzled expression and asked if there were any questions.', ko: '선생님은 학생의 어리둥절한 찌푸린 표정을 보고 질문이 있는지 물었다.' },
      ],
    }
  ),
  word('fruit', '과일', 1, 'noun',
    ['채소', '곡물', '고기', '빵', '우유', '견과', '곡식', '나물', '해산물', '유제품'],
    tips({
      etymology: '라틴어 \'frui(즐기다, 누리다)\'에서 유래하여 대지가 주는 즐거운 결실을 뜻합니다.',
      visual: '사과, 포도, 바나나가 가득 담긴 알록달록한 바구니를 상상해 보세요.',
      soundAlike: '\'프루트\' 발음이 입안에서 과즙이 톡 터지는 소리와 비슷하다고 느껴보세요.',
      context: '식사 후 디저트로 먹거나 주스를 만들 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'produce와 함께 농산물이라는 맥락으로 외우고, 고기류인 meat와 대비해 보세요.',
    }),
    {
      definition: 'the sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food',
      synonyms: ['produce', 'crop', 'harvest'],
      antonyms: ['vegetable', 'root', 'seed'],
      exampleSentences: [
        { en: 'Fresh apples and oranges are displayed in the wooden bowl.', ko: '신선한 사과와 오렌지가 나무 그릇에 진열되어 있습니다.' },
        { en: 'Eating a variety of colorful plants every day is good for your health.', ko: '매일 다양한 색깔의 식물을 섭취하는 것은 건강에 좋습니다.' },
      ],
    }
  ),
  word('frustrate', '좌절시키다', 5, 'verb',
    ['격려하다', '성취하다', '촉진하다', '만족시키다', '승인하다', '위로하다', '개선하다', '유지하다', '허가하다', '보상하다'],
    tips({
      etymology: '라틴어 frustra(헛되이)에서 유래하여, 누군가의 노력을 헛수고로 만든다는 느낌을 기억하세요.',
      visual: '공들여 쌓은 탑이 마지막 조각을 놓기 직전에 무너져 내려 허탈해하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'플러스(plus) 트레이트\'와 비슷하지만, 실제로는 계획에 마이너스가 생겨 답답한 상황입니다.',
      context: '주로 계획이 틀어지거나 원하는 대로 일이 풀리지 않아 짜증이 날 때 자주 사용됩니다.',
      synonymAntonym: 'thwart는 계획을 방해하는 것이고, encourage는 반대로 용기를 북돋아 주는 것입니다.',
    }),
    {
      definition: 'To prevent someone from accomplishing a purpose or to cause feelings of discouraged annoyance.',
      synonyms: ['thwart', 'baffle', 'dishearten'],
      antonyms: ['encourage', 'facilitate', 'gratify'],
      exampleSentences: [
        { en: 'The constant technical glitches began to hinder the team and deeply annoy the project manager.', ko: '지속적인 기술적 결함은 팀을 방해하고 프로젝트 매니저를 몹시 좌절시키기 시작했다.' },
        { en: 'Lack of funding might block our efforts to complete the research on schedule.', ko: '자금 부족은 예정대로 연구를 완료하려는 우리의 노력을 좌절시킬 수도 있다.' },
      ],
    }
  ),
  word('fry', '기름에 튀기다', 2, 'verb',
    ['삶다', '찌다', '굽다', '얼리다', '녹이다', '섞다', '자르다', '씻다', '말리다', '담그다'],
    tips({
      etymology: '라틴어 \'frigere\'에서 유래하여 뜨거운 열로 음식을 익히는 과정을 나타냅니다.',
      visual: '뜨거운 프라이팬 위에서 지글지글 소리를 내며 노릇하게 익어가는 감자튀김을 상상하세요.',
      soundAlike: '프라이팬(frypan)의 \'프라이\'와 발음이 같아 기름에 요리하는 도구를 떠올리면 쉽습니다.',
      context: '주로 감자, 계란, 생선 등을 고온의 기름에 빠르게 익힐 때 사용되는 요리 용어입니다.',
      synonymAntonym: '기름에 살짝 볶는 saute와 비슷하지만, 차갑게 얼리는 freeze와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to cook food in hot fat or oil, typically in a shallow pan',
      synonyms: ['saute', 'sear', 'brown'],
      antonyms: ['freeze', 'chill', 'steam'],
      exampleSentences: [
        { en: 'Heat the oil in a large pan before you add the potatoes to cook.', ko: '감자를 넣어 익히기 전에 큰 팬에 기름을 데우세요.' },
        { en: 'Many people prefer to prepare chicken this way to make the skin crispy.', ko: '많은 사람들이 껍질을 바삭하게 만들기 위해 닭고기를 이런 방식으로 조리하는 것을 선호합니다.' },
      ],
    }
  ),
  word('fuel', '연료', 6, 'noun',
    ['배기', '찌꺼기', '재', '부산물', '쓰레기', '공기', '물', '전기', '태양광', '풍력'],
    tips({
      etymology: '라틴어 \'focus(난로, 불)\'에서 유래하여 불을 지피는 재료라는 의미를 가집니다.',
      visual: '주유소에서 자동차에 기름을 가득 채우는 노즐의 모습을 상상해 보세요.',
      soundAlike: '\'퓨얼\' 발음이 \'피울\'과 비슷하니 불을 \'피울\' 때 필요한 것이라고 외우면 쉽습니다.',
      context: '에너지원이라는 물리적 의미 외에도 열정이나 갈등을 부추기는 자극제라는 비유적 의미로도 쓰입니다.',
      synonymAntonym: 'gasoline과 같은 구체적인 종류와 반대되는 개념인 exhaust(배기)를 함께 기억하세요.',
    }),
    {
      definition: 'a substance such as coal, gas, or oil that is burned to produce heat or power',
      synonyms: ['propellant', 'gasoline', 'firewood'],
      antonyms: ['exhaust', 'depletion', 'residue'],
      exampleSentences: [
        { en: 'The rocket requires a massive amount of liquid propellant to break through the atmosphere.', ko: '그 로켓은 대기권을 돌파하기 위해 엄청난 양의 액체 연료를 필요로 합니다.' },
        { en: 'High food prices often add more energy to the public\'s anger toward the government.', ko: '높은 식료품 가격은 종종 정부에 대한 대중의 분노에 더 많은 기름을 붓습니다.' },
      ],
    }
  ),
  word('fulfil', '이행하다', 7, 'verb',
    ['무시하다', '포기하다', '지연시키다', '거절하다', '파괴하다', '방해하다', '망치다', '중단하다', '연기하다', '실패하다'],
    tips({
      etymology: '가득 차다를 뜻하는 full과 채우다를 뜻하는 fill이 합쳐져 의무나 약속을 가득 채워 완료한다는 의미가 되었습니다.',
      visual: '텅 빈 체크리스트의 마지막 칸에 V 표시를 하며 모든 항목을 완료하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'풀필\'과 유사하므로, 약속이라는 풀(pool)을 책임감으로 가득 채운다(fill)고 연상하세요.',
      context: '주로 꿈을 이루거나, 계약상의 의무를 다하거나, 고객의 요구사항을 충족시킬 때 자주 사용됩니다.',
      synonymAntonym: '완수하는 것은 achieve, 반대로 시작조차 안 하거나 방치하는 것은 neglect입니다.',
    }),
    {
      definition: 'to complete a task, satisfy a requirement, or make a promise or dream come true',
      synonyms: ['accomplish', 'satisfy', 'execute'],
      antonyms: ['neglect', 'fail', 'abandon'],
      exampleSentences: [
        { en: 'The company worked hard to all the requirements of the international contract.', ko: '그 회사는 국제 계약의 모든 요구 사항을 이행하기 위해 열심히 노력했습니다.' },
        { en: 'She finally managed to her lifelong ambition of becoming a professional pilot.', ko: '그녀는 마침내 전문 조종사가 되겠다는 평생의 포부를 실현했습니다.' },
      ],
    }
  ),
  word('fun', '즐거움', 3, 'noun',
    ['지루함', '심각성', '고통', '슬픔', '피로', '분노', '공포', '무관심', '우울', '단조로움'],
    tips({
      etymology: '17세기경 \'속이다\'라는 뜻의 \'fon\'에서 유래하여, 가벼운 장난이나 즐거움을 뜻하게 되었습니다.',
      visual: '놀이공원의 롤러코스터를 타며 환하게 웃고 있는 사람들의 표정을 떠올려 보세요.',
      soundAlike: '번(bun)처럼 달콤하고 기분 좋아지는 빵을 먹을 때의 느낌과 발음을 연결해 보세요.',
      context: '파티, 게임, 여행처럼 스트레스 없이 웃음이 터져 나오는 모든 상황에 쓰입니다.',
      synonymAntonym: 'enjoyment와는 친구 사이이고, boredom과는 서로 마주 보기 싫어하는 사이입니다.',
    }),
    {
      definition: 'enjoyment, amusement, or lighthearted pleasure derived from an activity',
      synonyms: ['enjoyment', 'pleasure', 'amusement'],
      antonyms: ['boredom', 'misery', 'seriousness'],
      exampleSentences: [
        { en: 'The children had so much playing in the backyard all afternoon.', ko: '아이들은 오후 내내 뒷마당에서 노느라 정말 즐거운 시간을 보냈습니다.' },
        { en: 'Learning a new language can be a real challenge but also great.', ko: '새로운 언어를 배우는 것은 큰 도전일 수 있지만 동시에 매우 재미있기도 합니다.' },
      ],
    }
  ),
  word('function', '기능', 4, 'noun',
    ['고장', '무능', '장애', '실패', '부재', '무기능', '마비', '정지', '고장남', '무력화'],
    tips({
      etymology: '라틴어 \'functio\'에서 유래하여 \'수행하다\'라는 의미를 담고 있습니다.',
      visual: '복잡한 기계 장치 안에서 톱니바퀴가 맞물려 돌아가는 모습을 상상해 보세요.',
      soundAlike: '\'펑션\'이라고 발음하며, 무언가 \'펑\' 하고 제대로 터져서 작동하는 느낌을 연상하세요.',
      context: '컴퓨터 프로그래밍이나 수학에서 특정 값을 입력했을 때 결과가 나오는 과정을 떠올리면 쉽습니다.',
      synonymAntonym: '작동을 뜻하는 operation과 반대되는 개념인 malfunction을 함께 기억하세요.',
    }),
    {
      definition: 'the natural purpose of something or the specific duty of a person',
      synonyms: ['purpose', 'role', 'operation'],
      antonyms: ['malfunction', 'failure', 'idleness'],
      exampleSentences: [
        { en: 'The main purpose of this software is to organize your daily tasks efficiently.', ko: '이 소프트웨어의 주요 기능은 일상 업무를 효율적으로 정리하는 것입니다.' },
        { en: 'Bodily organs may cease to operate correctly if they are not nourished properly.', ko: '신체 기관은 적절한 영양을 공급받지 못하면 제대로 기능하지 않을 수 있습니다.' },
      ],
    }
  ),
  word('fund', '기금', 5, 'noun',
    ['지출', '부채', '손실', '적자', '소비', '경비', '세금', '수수료', '비용', '할부'],
    tips({
      etymology: '라틴어 \'fundus\'에서 유래했으며, 이는 바닥이나 기초를 의미합니다. 사업의 기초가 되는 돈이라는 뜻에서 기금이 되었습니다.',
      visual: '커다란 저금통에 수많은 사람들이 돈을 모아 가득 채우는 장면을 상상해 보세요.',
      soundAlike: '\'펀드 매니저\'라는 직업을 떠올려 보세요. 사람들의 돈을 모아 관리하는 전문가입니다.',
      context: '장학금 마련이나 자선 단체 운영을 위해 모인 거액의 자금을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '자본을 뜻하는 capital과 유사하며, 반대로 돈이 부족한 상태인 debt와 대조됩니다.',
    }),
    {
      definition: 'A sum of money saved or made available for a particular purpose.',
      synonyms: ['capital', 'endowment', 'reserve'],
      antonyms: ['debt', 'liability', 'expenditure'],
      exampleSentences: [
        { en: 'The university established a scholarship to help students from low-income families.', ko: '대학은 저소득층 가정의 학생들을 돕기 위해 장학 기금을 조성했습니다.' },
        { en: 'Local residents are raising money for the emergency relief to support earthquake victims.', ko: '지역 주민들이 지진 피해자들을 돕기 위한 긴급 구호 기금을 모으고 있습니다.' },
      ],
    }
  ),
  word('funeral', '장사', 6, 'noun',
    ['결혼식', '생일', '졸업식', '축제', '파티', '개선식', '탄생', '입학', '승진', '기념일'],
    tips({
      etymology: '라틴어 \'funus\'에서 유래했으며, 죽음과 관련된 의식을 뜻하는 뿌리를 가지고 있습니다.',
      visual: '검은 옷을 입은 사람들이 모여 고인을 추모하며 마지막 인사를 나누는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '발음이 \'퓨너럴\'인데, \'표(pyo)를 너(ner)에게 줄 수 없는 슬픈 날\'로 연상해 보세요.',
      context: '주로 고인을 기리는 종교적 의식이나 매장 절차를 설명할 때 사용되는 격식 있는 단어입니다.',
      synonymAntonym: 'burial이나 memorial과 비슷하지만, 탄생을 축하하는 birth와는 정반대의 상황입니다.',
    }),
    {
      definition: 'A ceremony held shortly after a person\'s death, usually including their burial or cremation.',
      synonyms: ['burial', 'interment', 'obsequies'],
      antonyms: ['birth', 'christening', 'baptism'],
      exampleSentences: [
        { en: 'Hundreds of people attended the state ceremony to pay their final respects.', ko: '수백 명의 사람들이 마지막 경의를 표하기 위해 국장에 참석했습니다.' },
        { en: 'The atmosphere at the service was somber and filled with quiet reflection.', ko: '장례식의 분위기는 엄숙했고 조용한 성찰로 가득 찼습니다.' },
      ],
    }
  ),
  word('fur', '모피', 7, 'noun',
    ['가죽', '비늘', '깃털', '날개', '껍질', '껍데기', '면', '나일론', '실크', '린넨'],
    tips({
      etymology: '고대 프랑스어 fuerre(칼집, 덮개)에서 유래하여 동물의 몸을 덮고 있는 부드러운 털을 의미하게 되었습니다.',
      visual: '추운 겨울날 북슬북슬하고 부드러운 털이 달린 코트를 입고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'퍼\'와 비슷하므로, 털이 \'퍼\'져 있는 짐승의 가죽이라고 연상하면 쉽습니다.',
      context: '주로 패션 산업에서 코트의 재질을 설명하거나 야생 동물의 신체 특징을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '부드러운 털을 뜻하는 hair와 유사하지만, 가죽과 함께 가공된 상태는 pelt라고 부르기도 합니다.',
    }),
    {
      definition: 'The thick coat of soft hair covering the skin of certain mammals, such as rabbits or foxes.',
      synonyms: ['pelt', 'fleece', 'coat'],
      antonyms: ['skin', 'scales', 'feathers'],
      exampleSentences: [
        { en: 'The polar bear has a thick layer of white hair to keep it warm in the freezing Arctic.', ko: '북극곰은 영하의 북극에서 체온을 유지하기 위해 두꺼운 흰색 모피 층을 가지고 있습니다.' },
        { en: 'Many luxury fashion brands have decided to stop using animal skins in their clothing collections.', ko: '많은 명품 패션 브랜드들이 의류 컬렉션에 동물 모피 사용을 중단하기로 결정했습니다.' },
      ],
    }
  ),
  word('furious', '격노한', 9, 'adjective',
    ['침착한', '냉정한', '기쁜', '만족한', '평온한', '차분한', '유쾌한', '편안한', '냉담한', '온화한'],
    tips({
      etymology: '라틴어 \'furia\'에서 유래했으며, 이는 로마 신화의 복수의 여신 \'퓨리(Fury)\'와 연결되어 걷잡을 수 없는 분노를 뜻합니다.',
      visual: '머리 위로 김이 모락모락 나며 얼굴이 새빨갛게 달아오른 화난 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'퓨리어스\'인데, 마치 불꽃이 \'퓨슉\' 하고 튀어 오르듯 화가 폭발하는 소리와 연결해 보세요.',
      context: '단순히 화가 난 수준을 넘어 통제하기 힘들 정도로 격렬한 분노를 표현할 때 주로 쓰입니다.',
      synonymAntonym: '매우 화가 난 상태인 enraged와 반대로 마음이 아주 평온한 상태인 serene을 함께 기억하세요.',
    }),
    {
      definition: 'Extremely angry or full of intense rage and violent passion.',
      synonyms: ['enraged', 'infuriated', 'irate'],
      antonyms: ['calm', 'placid', 'serene'],
      exampleSentences: [
        { en: 'The customer became extremely angry when the manager refused to offer a refund for the broken item.', ko: '매니저가 고장 난 물건에 대한 환불을 거부하자 손님은 몹시 분노했습니다.' },
        { en: 'A violent storm lashed the coastline with powerful winds and high waves throughout the night.', ko: '맹렬한 폭풍이 밤새도록 강한 바람과 높은 파도로 해안선을 몰아쳤습니다.' },
      ],
    }
  ),
  word('furnish', '공급하다', 10, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '프랑스어 \'fournir\'에서 유래하여 \'필요한 것을 갖추어 주다\'라는 근본적인 의미를 담고 있습니다.',
      visual: '텅 빈 아파트 거실에 세련된 소파와 테이블이 하나씩 채워지는 모습을 상상해 보세요.',
      soundAlike: '가구(furniture)와 발음이 비슷하죠? 방에 가구를 \'공급하여\' 채우는 장면을 떠올리면 쉽습니다.',
      context: '주로 가구를 비치하거나, 법적 절차에서 증거를 제출할 때, 혹은 필요한 정보를 제공할 때 사용됩니다.',
      synonymAntonym: '제공하는 supply와는 비슷하지만, 거두어들이는 withdraw와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'to provide or supply someone with something necessary or useful, often referring to furniture or information',
      synonyms: ['provide', 'equip', 'supply'],
      antonyms: ['divest', 'strip', 'withdraw'],
      exampleSentences: [
        { en: 'The landlord agreed to provide all the necessary appliances to help the new tenants settle in.', ko: '집주인은 새로운 세입자들이 정착할 수 있도록 필요한 모든 가전제품을 공급하기로 합의했습니다.' },
        { en: 'Applicants must submit relevant documents to support their claims during the interview process.', ko: '지원자들은 면접 과정에서 자신의 주장을 뒷받침할 관련 서류를 제출해야 합니다.' },
      ],
    }
  ),
  word('furniture', '가구', 4, 'noun',
    ['가전', '조명', '장식품', '커튼', '카펫', '식기', '침구', '수납함', '악기', '운동기구'],
    tips({
      etymology: '프랑스어 \'fournir(공급하다)\'에서 유래하여 방을 채우기 위해 공급된 물건들을 뜻합니다.',
      visual: '텅 빈 방에 침대, 책상, 의자가 하나씩 채워지는 모습을 상상해 보세요.',
      soundAlike: '\'퍼니처\' 발음이 \'편히 처\'박혀 쉴 수 있는 소파나 침대를 연상시킵니다.',
      context: '가구는 셀 수 없는 명사(uncountable)이므로 a furniture라고 쓰지 않도록 주의하세요.',
      synonymAntonym: 'furnishings와 유사하지만, 가전제품인 appliances와는 구분해서 사용합니다.',
    }),
    {
      definition: 'Large movable objects such as chairs, tables, or beds used to make a room fit for living or working.',
      synonyms: ['furnishings', 'fittings', 'housewares'],
      antonyms: ['emptiness', 'void', 'bareness'],
      exampleSentences: [
        { en: 'We decided to rearrange all the heavy items in the living room to create more space.', ko: '우리는 더 많은 공간을 만들기 위해 거실의 모든 무거운 가구들을 재배치하기로 했습니다.' },
        { en: 'The apartment comes fully equipped with a modern desk, a bed, and several chairs.', ko: '그 아파트는 현대적인 책상, 침대, 그리고 몇 개의 의자들로 가구가 완비되어 있습니다.' },
      ],
    }
  ),
  word('furthermore', '게다가', 5, 'adverb',
    ['반대로', '그러나', '오히려', '대신', '한편', '그런데', '단', '다만', '그럼에도', '하지만'],
    tips({
      etymology: '더 멀리 나아간다는 뜻의 further와 더한다는 뜻의 more가 합쳐져 정보가 추가됨을 나타냅니다.',
      visual: '이미 가득 찬 바구니 위에 사과 하나를 더 얹는 모습을 상상해 보세요.',
      soundAlike: '발음할 때 \'퍼더-모어\'라고 길게 끌어주면 문장이 더 길어지는 느낌을 줍니다.',
      context: '앞서 말한 주장을 뒷받침하기 위해 더 강력한 근거를 덧붙일 때 주로 사용합니다.',
      synonymAntonym: 'moreover와 비슷하게 쓰이며, 반대로 내용을 뒤집는 however와 대조됩니다.',
    }),
    {
      definition: 'in addition to what has already been said, used to introduce a fresh consideration',
      synonyms: ['moreover', 'additionally', 'besides'],
      antonyms: ['nevertheless', 'otherwise', 'conversely'],
      exampleSentences: [
        { en: 'The house is too small; furthermore, it is in a very bad location.', ko: '그 집은 너무 작습니다. 게다가 위치도 아주 좋지 않아요.' },
        { en: 'He is an excellent scholar and, furthermore, a gifted musician.', ko: '그는 훌륭한 학자이며, 더욱이 재능 있는 음악가이기도 합니다.' },
      ],
    }
  ),
  word('fuse', '신관', 8, 'noun',
    ['스위치', '전선', '배터리', '플러그', '소켓', '절연체', '도체', '회로', '저항', '콘덴서'],
    tips({
      etymology: '라틴어 \'fusus(녹이다)\'에서 유래하여, 열에 녹아 회로를 끊거나 폭발을 유도하는 장치를 뜻하게 되었습니다.',
      visual: '다이너마이트 끝에 달린 긴 줄이 타들어 가며 폭발 장치로 연결되는 모습을 상상해 보세요.',
      soundAlike: '\'퓨즈\'라고 발음하며, 과부하가 걸렸을 때 \'퓨슉\' 하고 끊어지는 소리와 연결하면 쉽습니다.',
      context: '군사적 맥락에서는 폭탄을 터뜨리는 기폭 장치를 의미하며, 전기 공학에서는 과전류 차단기를 뜻합니다.',
      synonymAntonym: '폭발을 일으키는 detonator와 유사하며, 안전을 지키는 safety catch와는 반대되는 성격이 있습니다.',
    }),
    {
      definition: 'A device or cord used to ignite an explosive charge or a safety component that breaks an electric circuit.',
      synonyms: ['detonator', 'igniter', 'wick'],
      antonyms: ['inhibitor', 'extinguisher', 'blocker'],
      exampleSentences: [
        { en: 'The soldier carefully inserted the mechanical device into the explosive shell before the mission.', ko: '병사는 임무 전 폭발 탄환에 기계식 신관을 조심스럽게 삽입했습니다.' },
        { en: 'A faulty ignition timer caused the bomb to fail during the controlled demolition.', ko: '결함이 있는 점화 신관 때문에 계획된 철거 작업 중 폭탄이 터지지 않았습니다.' },
      ],
    }
  ),
  word('future', '미래', 1, 'noun',
    ['과거', '현재', '지금', '옛날', '예전', '당시', '그때', '이전', '지난날', '과거시제'],
    tips({
      etymology: '라틴어 \'futurus\'에서 유래했으며, \'앞으로 일어날 것\'이라는 의미를 담고 있습니다.',
      visual: '타임머신을 타고 100년 뒤의 초현대적인 도시 모습을 상상해 보세요.',
      soundAlike: '\'퓨처\'라고 발음하며, \'표출\'될 앞날의 모습을 연상하면 기억하기 쉽습니다.',
      context: '기술 발전이나 개인의 꿈을 이야기할 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '과거(past)와 현재(present)를 지나 다가올 시간임을 기억하세요.',
    }),
    {
      definition: 'the period of time that will come after the present moment',
      synonyms: ['tomorrow', 'hereafter', 'prospect'],
      antonyms: ['past', 'history', 'yesterday'],
      exampleSentences: [
        { en: 'Scientists are developing new technologies to protect the planet for the next generation.', ko: '과학자들은 다음 세대를 위해 지구를 보호할 새로운 기술들을 개발하고 있습니다.' },
        { en: 'No one can accurately predict what will happen in the coming years.', ko: '앞으로 다가올 몇 년 동안 어떤 일이 일어날지 아무도 정확히 예측할 수 없습니다.' },
      ],
    }
  ),
  word('gain', '얻다', 6, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '고대 프랑스어 \'gaaignier\'에서 유래했으며, 원래는 \'땅을 경작하여 수확물을 얻다\'라는 농경적 의미에서 시작되었습니다.',
      visual: '체중계의 바늘이 오른쪽으로 올라가거나, 게임 캐릭터의 경험치 바가 가득 차는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'개인(gain)\'과 비슷합니다. \'개인\'적인 이득을 \'얻다\'라고 연상하면 쉽습니다.',
      context: '주로 지식, 경험, 체중, 속도, 이익 등 추상적이거나 물리적인 양이 늘어날 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 손에 넣는 acquire와 잃어버리는 lose를 짝지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'to obtain or secure something desired or advantageous; to increase in amount or value',
      synonyms: ['acquire', 'attain', 'procure'],
      antonyms: ['lose', 'forfeit', 'deplete'],
      exampleSentences: [
        { en: 'The company expects to acquire a significant market share and increase its profit this year.', ko: '그 회사는 올해 상당한 시장 점유율을 확보하고 이익을 얻을 것으로 기대합니다.' },
        { en: 'Regular exercise helps you build muscle mass and improve overall physical strength.', ko: '규칙적인 운동은 근육량을 늘리고 전반적인 체력을 얻는 데 도움을 줍니다.' },
      ],
    }
  ),
];
