import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch28: VocabItem[] = [
  word('cliff', '절벽', 5, 'noun',
    ['평지', '구릉', '언덕', '산등성이', '계곡', '해변', '사막', '들판', '늪', '강'],
    tips({
      etymology: '고대 영어 \'clif\'에서 유래했으며, 가파른 바위나 언덕을 뜻하는 게르만어 계열의 단어입니다.',
      visual: '파도가 치는 바닷가 끝에 수직으로 깎아지른 듯한 아찔한 바위 벽을 상상해 보세요.',
      soundAlike: '\'클리프\'라고 발음하며, 끝이 \'프\'하고 끊기는 느낌이 절벽 끝에서 뚝 떨어지는 느낌과 비슷합니다.',
      context: '주로 해안가나 산악 지형에서 추락의 위험이 있는 아주 가파른 지형을 묘사할 때 쓰입니다.',
      synonymAntonym: '유의어인 precipice는 아주 위험한 낭떠러지를, 반의어인 plateau는 평평한 고원을 뜻합니다.',
    }),
    {
      definition: 'A very steep, vertical, or overhanging face of rock, earth, or ice.',
      synonyms: ['precipice', 'bluff', 'escarpment'],
      antonyms: ['plain', 'valley', 'plateau'],
      exampleSentences: [
        { en: 'The lighthouse stands on a high rock overlooking the sea.', ko: '등대는 바다를 내려다보는 높은 바위 절벽 위에 서 있다.' },
        { en: 'Hikers were warned not to go too close to the edge of the steep drop.', ko: '등산객들은 가파른 낭떠러지 가장자리에 너무 가까이 가지 말라는 경고를 받았다.' },
      ],
    }
  ),
  word('climb', '오르다', 3, 'verb',
    ['내리다', '떨어지다', '미끄러지다', '굴러가다', '앉다', '눕다', '멈추다', '내려가다', '하강하다', '굴복하다'],
    tips({
      etymology: '고대 영어 \'climban\'에서 유래하여 손발을 모두 사용하여 위로 이동한다는 본래의 의미를 담고 있습니다.',
      visual: '가파른 산이나 사다리를 두 손과 두 발로 힘겹게 짚으며 위로 올라가는 모습을 상상해 보세요.',
      soundAlike: '끝의 \'b\'가 묵음이라 \'클라임\'으로 발음됩니다. \'구름(cloud) 위로 임(im)한다\'고 연상해 보세요.',
      context: '산이나 계단을 오를 때뿐만 아니라, 기온이나 주가가 급격히 상승할 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: '위로 향하는 ascend와 아래로 향하는 descend를 짝지어 외우면 방향성을 쉽게 기억할 수 있습니다.',
    }),
    {
      definition: 'to move toward the top of something high or steep, often by using your hands and feet',
      synonyms: ['ascend', 'mount', 'scale'],
      antonyms: ['descend', 'drop', 'fall'],
      exampleSentences: [
        { en: 'The adventurous hikers decided to scale the steep mountain before sunset.', ko: '모험심 강한 등산객들은 일몰 전에 가파른 산을 오르기로 결정했습니다.' },
        { en: 'The cat managed to reach the high branch to escape from the barking dog.', ko: '고양이는 짖는 개를 피하기 위해 높은 나뭇가지 위로 올라갔습니다.' },
      ],
    }
  ),
  word('cling', '밀착하다', 6, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '고대 영어 \'clingan\'에서 유래하여 \'함께 굳어지다\' 혹은 \'달라붙다\'라는 의미를 가집니다.',
      visual: '젖은 옷이 몸에 착 달라붙어 떨어지지 않는 모습을 상상해 보세요.',
      soundAlike: '클링(cling) 소리가 나며 금속 자석이 냉장고에 착 달라붙는 느낌으로 기억하세요.',
      context: '주로 물리적으로 꽉 붙잡거나, 감정적으로 누군가에게 강하게 의존할 때 사용됩니다.',
      synonymAntonym: 'adhere와 stick은 물리적 밀착을, detach와 release는 떨어짐을 나타냅니다.',
    }),
    {
      definition: 'to hold on tightly to someone or something; to remain very close to a person or object',
      synonyms: ['adhere', 'stick', 'clasp'],
      antonyms: ['detach', 'release', 'separate'],
      exampleSentences: [
        { en: 'The child tended to hold his mother\'s hand and stay close whenever they were in a crowd.', ko: '그 아이는 사람들 사이에 있을 때마다 엄마의 손을 잡고 꼭 붙어 있는 경향이 있었다.' },
        { en: 'Wet clothes often attach themselves to the skin in a way that is uncomfortable.', ko: '젖은 옷은 종종 불편한 방식으로 피부에 착 달라붙는다.' },
      ],
    }
  ),
  word('clinic', '병원', 7, 'noun',
    ['학교', '식당', '상가', '공장', '창고', '체육관', '도서관', '박물관', '극장', '카페'],
    tips({
      etymology: '그리스어 kline(침대)에서 유래하여, 환자가 침대에 누워 치료받는 장소를 뜻하게 되었습니다.',
      visual: '동네 골목 어귀에 하얀 십자가 표시가 그려진 아담한 1층 병원 건물을 상상해 보세요.',
      soundAlike: '발음이 \'클리닉\'이므로 피부나 모발을 깨끗하게(clean) 관리해주는 곳을 떠올리면 쉽습니다.',
      context: '종합병원(hospital)보다는 규모가 작고 특정 진료를 전문으로 하는 개인 병원을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '의료 시설을 뜻하는 infirmary와 유사하며, 환자가 없는 건강한 상태인 wellness와 대비됩니다.',
    }),
    {
      definition: 'A facility, often smaller than a hospital, where patients receive specialized medical care or advice.',
      synonyms: ['infirmary', 'dispensary', 'medical center'],
      antonyms: ['wilderness', 'battlefield', 'unhealthy environment'],
      exampleSentences: [
        { en: 'She visited a local dental facility to get her wisdom tooth extracted.', ko: '그녀는 사랑니를 뽑기 위해 동네 치과 병원을 방문했습니다.' },
        { en: 'The community health center provides free vaccinations for all residents.', ko: '지역 보건 진료소는 모든 주민에게 무료 예방 접종을 제공합니다.' },
      ],
    }
  ),
  word('clip', '클립', 1, 'noun',
    ['풀', '테이프', '끈', '고리', '핀', '스테이플러', '가위', '칼', '접착제', '마스킹테이프'],
    tips({
      etymology: '고대 영어 \'clippan(껴안다, 움켜쥐다)\'에서 유래하여 물건을 꽉 잡아 고정하는 도구를 뜻하게 되었습니다.',
      visual: '종이 뭉치를 ㄷ자 모양의 금속 핀이 단단하게 움켜쥐고 있는 모습을 상상해 보세요.',
      soundAlike: '머리카락을 고정하는 \'헤어 집게\'를 떠올리면 \'클립\'의 고정하는 기능을 쉽게 기억할 수 있습니다.',
      context: '사무실에서 서류를 정리할 때나 영상의 짧은 토막을 지칭할 때 자주 사용되는 단어입니다.',
      synonymAntonym: '무언가를 고정하는 fastener와 유사하며, 고정되지 않은 상태인 separation과 대비됩니다.',
    }),
    {
      definition: 'a small device, usually made of metal or plastic, used for holding objects or papers together',
      synonyms: ['fastener', 'holder', 'clamp'],
      antonyms: ['separation', 'detachment', 'opening'],
      exampleSentences: [
        { en: 'She used a metal wire to keep the loose papers organized in her folder.', ko: '그녀는 폴더 안의 낱장 종이들을 정리하기 위해 금속 와이어로 된 도구를 사용했습니다.' },
        { en: 'The teacher handed out a short video segment from the documentary to the class.', ko: '선생님은 다큐멘터리의 짧은 영상 부분을 반 학생들에게 보여주었습니다.' },
      ],
    }
  ),
  word('club', '클럽', 2, 'noun',
    ['개인', '솔로', '무리 해체', '독립', '고립', '은둔', '고독', '단체 해체', '분산', '해산'],
    tips({
      etymology: '중세 영어에서 \'뭉툭한 막대기\'를 뜻하던 단어가 사람들이 한데 뭉친 \'모임\'의 의미로 확장되었습니다.',
      visual: '공통의 유니폼을 입은 사람들이 둥글게 모여서 즐겁게 대화하는 동아리방 풍경을 상상해 보세요.',
      soundAlike: '골프 \'클럽\'이나 야구 방망이처럼 단단한 막대기를 휘두르는 소리를 연상하면 기억하기 쉽습니다.',
      context: '학교 내의 취미 활동 모임이나 밤에 음악을 즐기는 장소, 혹은 운동 기구를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 뜻으로는 association이 있고, 반대로 흩어진 개인을 뜻하는 individual과 대조됩니다.',
    }),
    {
      definition: 'an organization of people with a common purpose or interest, who meet regularly and take part in shared activities',
      synonyms: ['association', 'society', 'organization'],
      antonyms: ['individual', 'separation', 'disunity'],
      exampleSentences: [
        { en: 'I decided to join the photography group to improve my taking pictures skills.', ko: '나는 사진 촬영 기술을 향상시키기 위해 사진 동아리에 가입하기로 결정했다.' },
        { en: 'The local sports center has a swimming team that competes every summer.', ko: '지역 스포츠 센터에는 매년 여름 경기에 참여하는 수영 팀이 있다.' },
      ],
    }
  ),
  word('clue', '단서', 4, 'noun',
    ['미스터리', '함정', '오해', '거짓말', '장막', '결말', '침묵', '방해물', '혼란', '망각'],
    tips({
      etymology: '그리스 신화에서 미궁을 빠져나오기 위해 사용한 \'실타래(clew)\'에서 유래하여 해결의 실마리를 뜻하게 되었습니다.',
      visual: '돋보기를 들고 바닥에 떨어진 작은 종이 조각이나 발자국을 유심히 살피는 탐정의 모습을 상상해 보세요.',
      soundAlike: '범인을 잡을 \'클\'루(clue)가 있다! 라고 외치는 상황을 떠올리면 발음과 의미를 연결하기 쉽습니다.',
      context: '수사물이나 퀴즈에서 정답에 다가가기 위해 주어지는 힌트나 증거를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'hint나 indication과 비슷하며, 아무런 정보가 없는 상태인 ignorance와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a piece of evidence or information used in the detection of a crime or the solution of a mystery',
      synonyms: ['hint', 'indication', 'evidence'],
      antonyms: ['mystery', 'enigma', 'obscurity'],
      exampleSentences: [
        { en: 'The police found a vital piece of evidence that served as a major lead in the case.', ko: '경찰은 그 사건의 중요한 실마리가 될 결정적인 증거를 발견했습니다.' },
        { en: 'I haven\'t the slightest idea how to solve this crossword puzzle without a single hint.', ko: '단 하나의 힌트도 없이 이 십자말풀이를 어떻게 풀어야 할지 전혀 모르겠습니다.' },
      ],
    }
  ),
  word('cluster', '떼', 5, 'noun',
    ['낱개', '분산', '고립', '파편', '단독', '희박', '개별', '분리', '해산', '간격'],
    tips({
      etymology: '고대 영어 \'clyster\'에서 유래하여, 열매나 꽃이 빽빽하게 모여 있는 송이를 의미합니다.',
      visual: '포도송이처럼 알알이 빽빽하게 뭉쳐 있는 모습을 상상하면 기억하기 쉽습니다.',
      soundAlike: '발음이 \'클러스터\'이므로, \'클래스(class)\'가 \'터\'를 잡고 모여 있는 떼라고 연상해 보세요.',
      context: '데이터 분석에서는 비슷한 특성을 가진 데이터들의 묶음을 의미하는 용어로 자주 쓰입니다.',
      synonymAntonym: '유의어인 bunch는 주로 과일 묶음에, antonym인 individual은 개별적인 존재에 쓰입니다.',
    }),
    {
      definition: 'A group of similar things or people positioned or occurring closely together.',
      synonyms: ['bunch', 'clump', 'collection'],
      antonyms: ['individual', 'dispersion', 'scattering'],
      exampleSentences: [
        { en: 'A small group of fans gathered in a tight circle around the famous singer.', ko: '유명 가수 주변으로 팬들이 빽빽하게 무리를 지어 모여들었다.' },
        { en: 'The telescope revealed a dense formation of stars in the distant galaxy.', ko: '망원경을 통해 먼 은하계에 별들이 밀집해 있는 성단을 발견했다.' },
      ],
    }
  ),
  word('coach', '코치', 6, 'noun',
    ['선수', '심판', '관중', '경기장', '훈련', '응원단', '매니저', '주장', '후보', '기자'],
    tips({
      etymology: '원래 \'마차\'를 뜻하던 단어로, 승객을 목적지까지 데려다주듯 학생을 목표까지 이끄는 사람을 의미하게 되었습니다.',
      visual: '운동장 옆라인에서 호루라기를 불며 열정적으로 지시를 내리는 감독님의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'코치\'와 거의 같으므로, 우리말 외래어 \'코치\'를 그대로 떠올리면 쉽습니다.',
      context: '스포츠 팀뿐만 아니라 비즈니스나 개인의 성장을 돕는 전문가를 부를 때도 자주 쓰입니다.',
      synonymAntonym: '가르치는 trainer와 배우는 trainee, 혹은 지도받는 player를 대조해서 기억하세요.',
    }),
    {
      definition: 'A person who instructs and directs a team or an individual performer in order to improve their skills.',
      synonyms: ['instructor', 'trainer', 'mentor'],
      antonyms: ['player', 'trainee', 'student'],
      exampleSentences: [
        { en: 'The team decided to hire a new professional to improve their tactical play.', ko: '그 팀은 전술적인 경기를 개선하기 위해 새로운 전문가를 고용하기로 결정했습니다.' },
        { en: 'She works as a life guide helping people achieve their personal goals.', ko: '그녀는 사람들이 개인적인 목표를 달성하도록 돕는 라이프 가이드로 일합니다.' },
      ],
    }
  ),
  word('coal', '석탄', 7, 'noun',
    ['나무', '가스', '전기', '태양광', '바람', '원유', '우라늄', '얼음', '물', '공기'],
    tips({
      etymology: '고대 영어 \'col\'에서 유래했으며, 원래 \'타오르는 숯\'을 의미하던 단어가 화석 연료를 뜻하게 되었습니다.',
      visual: '광산 깊은 곳에서 광부들이 검고 딱딱한 돌덩어리를 캐내는 장면을 상상해 보세요.',
      soundAlike: '추운 겨울에 \'코(co)\'가 시려울 때 \'석탄\' 난로를 피운다고 생각하면 발음과 연결하기 쉽습니다.',
      context: '산업 혁명 시기 증기 기관차의 주된 에너지원이었으며, 오늘날에도 화력 발전소에서 사용됩니다.',
      synonymAntonym: '연료를 뜻하는 fuel과 유사하며, 깨끗한 에너지원인 solar와는 대조적인 성격을 가집니다.',
    }),
    {
      definition: 'A hard, black substance extracted from the earth and burned as a source of heat or power.',
      synonyms: ['fuel', 'charcoal', 'anthracite'],
      antonyms: ['solar', 'wind', 'hydro'],
      exampleSentences: [
        { en: 'The steam engine was powered by burning large amounts of black rock from the mine.', ko: '증기 기관은 광산에서 캐낸 다량의 검은 돌을 태워 동력을 얻었습니다.' },
        { en: 'Many power plants still rely on this fossil fuel to generate electricity for the city.', ko: '많은 발전소들이 여전히 도시의 전력을 생산하기 위해 이 화석 연료에 의존하고 있습니다.' },
      ],
    }
  ),
  word('coast', '연안', 4, 'noun',
    ['내륙', '산맥', '사막', '평원', '섬', '한가운데', '심해', '고원', '협곡', '밀림'],
    tips({
      etymology: '라틴어 costa(갈비뼈, 옆구리)에서 유래하여 땅의 옆면인 바닷가를 뜻하게 되었습니다.',
      visual: '파도가 치는 해안선을 따라 끝없이 이어진 모래사장과 절벽을 상상해 보세요.',
      soundAlike: '코를 쓱(coast) 스치는 시원한 바닷바람을 떠올리며 발음해 보세요.',
      context: '휴양지나 지리적 경계를 설명할 때 바다와 접한 육지를 지칭하며 자주 쓰입니다.',
      synonymAntonym: 'shore와 유사하며, 바다와 멀리 떨어진 inland와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the area where the land meets the ocean or a large body of water',
      synonyms: ['shore', 'seaboard', 'coastline'],
      antonyms: ['inland', 'interior', 'center'],
      exampleSentences: [
        { en: 'We drove along the Pacific highway to enjoy the view of the rugged shoreline.', ko: '우리는 울퉁불퉁한 해안선의 경치를 즐기기 위해 태평양 고속도로를 따라 드라이브했습니다.' },
        { en: 'Many small fishing villages are scattered along the eastern edge of the country.', ko: '나라의 동쪽 해안을 따라 많은 작은 낚시 마을들이 흩어져 있습니다.' },
      ],
    }
  ),
  word('code', '법전', 5, 'noun',
    ['무질서', '자유', '무법', '해이', '암호 해독', '일상어', '구어', '번역문', '해설', '주석'],
    tips({
      etymology: '라틴어 codex(나무판, 책)에서 유래하여, 법률을 기록한 책이나 체계적인 규칙 모음을 뜻하게 되었습니다.',
      visual: '두꺼운 가죽 표지의 법전 위에 황금색으로 글자가 새겨진 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 \'코드\'를 짜듯, 사회의 질서를 유지하기 위해 촘촘하게 짜인 법의 체계라고 생각하면 쉽습니다.',
      context: '법률적 맥락에서는 단순한 암호가 아니라 한 국가나 단체의 근간이 되는 성문법 체계를 의미합니다.',
      synonymAntonym: '규칙을 모아둔 statute와 유사하며, 법이 없는 상태인 anarchy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A systematic collection of laws, regulations, or rules of conduct organized into a specific structure.',
      synonyms: ['statute', 'canon', 'regulation'],
      antonyms: ['lawlessness', 'disorder', 'anarchy'],
      exampleSentences: [
        { en: 'The Napoleonic Code had a profound influence on the civil law systems of many countries.', ko: '나폴레옹 법전은 많은 국가의 민법 체계에 깊은 영향을 미쳤습니다.' },
        { en: 'Strict adherence to the moral code was expected of every member of the community.', ko: '공동체의 모든 구성원에게는 도덕 규범을 엄격히 준수하는 것이 요구되었습니다.' },
      ],
    }
  ),
  word('coincide', '일치하다', 6, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다'],
    tips({
      etymology: '함께를 뜻하는 \'co-\'와 떨어지다/발생하다를 뜻하는 \'incidere\'가 합쳐져 동시에 일어난다는 의미가 되었습니다.',
      visual: '두 개의 시계 바늘이 12시 정각에 딱 겹쳐지는 모습을 상상해 보세요.',
      soundAlike: '코인(coin) 두 개가 사이드(side)에 나란히 놓여 있는 모습으로 기억하세요.',
      context: '주로 두 사람의 휴가 일정이 겹치거나, 두 사건이 우연히 동시에 발생할 때 자주 쓰입니다.',
      synonymAntonym: '동시에 일어나는 concur와 비슷하지만, 서로 어긋나는 differ와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to occur at the same time or to be identical in nature or character',
      synonyms: ['concur', 'overlap', 'tally'],
      antonyms: ['differ', 'clash', 'diverge'],
      exampleSentences: [
        { en: 'My holiday plans happen to match with yours this year.', ko: '올해 내 휴가 계획이 우연히 당신의 계획과 일치합니다.' },
        { en: 'The interests of the two companies do not always align in this market.', ko: '이 시장에서 두 회사의 이익이 항상 일치하는 것은 아닙니다.' },
      ],
    }
  ),
  word('collaborate', '협력하다', 7, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '함께를 뜻하는 \'col-\'과 일하다를 뜻하는 \'labor\'가 합쳐져 \'함께 일하다\'라는 의미가 되었습니다.',
      visual: '여러 명의 사람들이 커다란 퍼즐 조각을 하나씩 들고 맞춰가는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'콜라보\'와 비슷하죠? 아티스트들의 \'콜라보레이션\' 작업을 떠올리면 쉽습니다.',
      context: '비즈니스 미팅이나 예술적 프로젝트에서 팀워크를 강조할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '함께 일하는 것은 cooperate, 혼자 독단적으로 하는 것은 solo 혹은 individual effort와 대조됩니다.',
    }),
    {
      definition: 'to work jointly with others or together especially in an intellectual endeavor',
      synonyms: ['cooperate', 'team up', 'conspire'],
      antonyms: ['compete', 'conflict', 'disagree'],
      exampleSentences: [
        { en: 'Researchers from different countries decided to work together on the new vaccine.', ko: '서로 다른 국가의 연구원들이 새로운 백신을 위해 협력하기로 결정했습니다.' },
        { en: 'The two musicians plan to join forces and produce a unique album this summer.', ko: '그 두 음악가는 이번 여름에 협력하여 독특한 앨범을 제작할 계획입니다.' },
      ],
    }
  ),
  word('collar', '칼라', 4, 'noun',
    ['소매', '단추', '지퍼', '벨트', '주머니', '장식', '리본', '넥타이', '스카프', '안감'],
    tips({
      etymology: '라틴어 collum(목)에서 유래하여 목을 감싸는 부분을 뜻하게 되었습니다.',
      visual: '셔츠 깃이 빳빳하게 세워져 목을 감싸고 있는 모습을 상상해 보세요.',
      soundAlike: '목에 거는 \'칼라\'와 발음이 거의 같아 기억하기 쉽습니다.',
      context: '패션뿐만 아니라 강아지의 목줄을 가리킬 때도 이 단어를 사용합니다.',
      synonymAntonym: 'neckband와 유사하며, 옷의 끝부분인 hem과는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'the part of a garment that fastens around or frames the neck',
      synonyms: ['neckband', 'choker', 'lapel'],
      antonyms: ['cuff', 'hem', 'sole'],
      exampleSentences: [
        { en: 'He straightened the edge of his shirt before the interview started.', ko: '그는 인터뷰가 시작되기 전에 셔츠 깃을 바로잡았습니다.' },
        { en: 'The dog was wearing a leather strap with its name engraved on it.', ko: '그 개는 이름이 새겨진 가죽 목줄을 차고 있었습니다.' },
      ],
    }
  ),
  word('college', '단과대학', 3, 'noun',
    ['고등학교', '초등학교', '직장', '군대', '병원', '연구소', '도서관', '박물관', '체육관', '기업'],
    tips({
      etymology: '라틴어 collegium에서 유래했으며, \'함께(col) 선택된(leg) 사람들의 모임\'이라는 의미에서 학문 공동체를 뜻하게 되었습니다.',
      visual: '캠퍼스 잔디밭에서 전공 서적을 들고 토론하는 대학생들의 활기찬 모습을 상상해 보세요.',
      soundAlike: '\'칼리지\' 발음이 \'칼(knife)이지\'와 비슷하죠? \'대학 전공은 날카로운 칼처럼 전문적인 지식을 배우는 곳이지\'라고 연상해 보세요.',
      context: '미국에서는 종합대학교(university)와 혼용되기도 하지만, 보통 학사 학위를 수여하는 교육 기관을 지칭할 때 가장 많이 쓰입니다.',
      synonymAntonym: 'university와 유사하지만 규모가 작은 경우가 많으며, 의무 교육인 high school과는 반대되는 고등 교육 단계입니다.',
    }),
    {
      definition: 'An educational institution or establishment, in particular one providing higher education or specialized professional or vocational training.',
      synonyms: ['university', 'academy', 'institute'],
      antonyms: ['kindergarten', 'preschool', 'workplace'],
      exampleSentences: [
        { en: 'She is planning to study architecture when she goes to college next year.', ko: '그녀는 내년에 대학에 가면 건축학을 공부할 계획이다.' },
        { en: 'The local community college offers various vocational training programs for adults.', ko: '지역 커뮤니티 칼리지는 성인들을 위한 다양한 직업 훈련 프로그램을 제공한다.' },
      ],
    }
  ),
  word('column', '난', 5, 'noun',
    ['가로', '행', '칸', '면', '페이지', '단락', '제목', '삽화', '표', '빈칸'],
    tips({
      etymology: '라틴어 columna에서 유래하여 수직으로 곧게 뻗은 기둥이나 줄을 의미합니다.',
      visual: '신문 지면이 세로로 길게 나뉘어 있는 모습이나 건물을 떠받치는 거대한 원형 기둥을 상상해 보세요.',
      soundAlike: '발음이 \'칼럼\'과 유사하며, 우리가 흔히 말하는 신문의 전문가 기고란인 \'칼럼\'이 바로 이 단어입니다.',
      context: '신문의 정기 기고란뿐만 아니라 엑셀 시트의 세로 줄을 가리킬 때도 필수적으로 사용됩니다.',
      synonymAntonym: '세로 줄을 뜻하는 pillar와 유의어이며, 가로 줄을 뜻하는 row와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A vertical division of a page or a vertical cylindrical structure used as a support for a building.',
      synonyms: ['pillar', 'post', 'section'],
      antonyms: ['row', 'tier', 'line'],
      exampleSentences: [
        { en: 'She writes a weekly advice section in the local newspaper.', ko: '그녀는 지역 신문에 매주 조언을 해주는 난을 연재한다.' },
        { en: 'The temple was supported by marble structures arranged in a circle.', ko: '그 사원은 원형으로 배치된 대리석 기둥들에 의해 지탱되고 있었다.' },
      ],
    }
  ),
  word('combat', '격투하다', 6, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'com(함께)\'과 \'battuere(치다)\'가 결합되어 서로 치고받는 싸움을 의미하게 되었습니다.',
      visual: '링 위에서 두 권투 선수가 서로를 향해 주먹을 휘두르는 치열한 결투 장면을 상상해 보세요.',
      soundAlike: '발음이 \'컴뱃\'인데, 적군이 \'컴(Come)\' 하면 \'뱃(Bat, 방망이)\'으로 맞서 싸우는 모습을 연상하세요.',
      context: '군대 간의 교전뿐만 아니라 질병이나 범죄 같은 사회적 문제와 맞서 싸울 때도 자주 쓰입니다.',
      synonymAntonym: '싸우는 fight와 유사하며, 평화를 유지하거나 항복하는 surrender와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to take action in order to prevent something bad from happening or to fight against an enemy',
      synonyms: ['battle', 'confront', 'oppose'],
      antonyms: ['surrender', 'yield', 'support'],
      exampleSentences: [
        { en: 'The government is introducing new measures to fight against inflation.', ko: '정부는 인플레이션에 대응하기 위해 새로운 조치들을 도입하고 있다.' },
        { en: 'Soldiers were trained to engage in hand-to-hand fighting during the war.', ko: '군인들은 전쟁 중 백병전 격투를 벌이도록 훈련받았다.' },
      ],
    }
  ),
  word('come', '오다', 1, 'verb',
    ['가다', '떠나다', '돌아가다', '멀어지다', '사라지다', '남다', '머물다', '대기하다', '출발하다', '물러나다'],
    tips({
      etymology: '고대 영어 cuman에서 유래하여 \'움직여서 도착하다\'라는 기본 의미를 가지고 있습니다.',
      visual: '멀리 있던 친구가 나를 향해 손을 흔들며 가까이 다가오는 모습을 상상해 보세요.',
      soundAlike: '\'컴\'퓨터(computer) 앞으로 \'컴(come)\' 하고 다가가는 모습을 연상하면 쉽습니다.',
      context: '상대방이 부를 때 \'I\'m coming!\'이라고 대답하며 이동하는 상황에서 자주 쓰입니다.',
      synonymAntonym: '도착을 뜻하는 arrive와 비슷하고, 멀어지는 go와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to move or travel toward the speaker or toward a specified place',
      synonyms: ['arrive', 'approach', 'appear'],
      antonyms: ['go', 'leave', 'depart'],
      exampleSentences: [
        { en: 'Please come to my birthday party this weekend.', ko: '이번 주말에 내 생일 파티에 와 주세요.' },
        { en: 'Winter will soon come after the autumn leaves fall.', ko: '단풍이 지고 나면 곧 겨울이 올 것입니다.' },
      ],
    }
  ),
  word('comedy', '희극', 2, 'noun',
    ['비극', '멜로드라마', '공포', '스릴러', '다큐멘터리', '뉴스', '광고', '독백', '연설', '침묵'],
    tips({
      etymology: '그리스어 \'komoidia\'에서 유래했으며, 즐거운 축제(komos)에서 부르는 노래(aeidein)라는 의미가 합쳐져 만들어졌습니다.',
      visual: '찰리 채플린이 커다란 신발을 신고 우스꽝스럽게 걷는 흑백 영화의 한 장면을 상상해 보세요.',
      soundAlike: '한국어 \'코미디\'와 발음이 거의 동일하므로, TV 속 개그 프로그램의 웃음소리를 연상하면 쉽습니다.',
      context: '주로 영화, 연극, TV 쇼에서 관객에게 웃음을 주기 위해 제작된 장르를 지칭할 때 사용됩니다.',
      synonymAntonym: '웃음을 주는 \'farce\'나 \'humor\'와 가깝고, 슬픈 결말을 가진 \'tragedy\'와는 정반대 개념입니다.',
    }),
    {
      definition: 'A professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh.',
      synonyms: ['humor', 'farce', 'slapstick'],
      antonyms: ['tragedy', 'drama', 'misfortune'],
      exampleSentences: [
        { en: 'The new romantic movie is a perfect blend of humor and lighthearted entertainment.', ko: '그 새로운 로맨틱 영화는 유머와 가벼운 오락 요소가 완벽하게 조화된 희극이다.' },
        { en: 'Laughter filled the theater as the actors performed a classic piece of stage entertainment.', ko: '배우들이 고전적인 무대 희극을 공연하자 극장은 웃음소리로 가득 찼다.' },
      ],
    }
  ),
  word('commence', '시작하다', 8, 'verb',
    ['종료하다', '중단하다', '완성하다', '지연시키다', '포기하다', '검토하다', '수정하다', '반복하다', '거절하다', '유지하다'],
    tips({
      etymology: '라틴어 com(함께)과 initiare(시작하다)가 결합된 형태에서 유래하여 공식적인 시작을 의미합니다.',
      visual: '오케스트라 지휘자가 지휘봉을 내리치며 연주가 시작되는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '커맨드(command)와 발음이 비슷하죠? 대장이 명령을 내리자마자 작전이 \'시작되는\' 이미지를 떠올리세요.',
      context: '주로 졸업식, 회의, 법적 절차 등 격식을 차리는 상황에서 무언가를 시작할 때 자주 쓰입니다.',
      synonymAntonym: '단순한 start보다 격식 있는 표현이며, 끝을 맺는 conclude와 반대되는 개념입니다.',
    }),
    {
      definition: 'to begin something or to happen from a particular point in time',
      synonyms: ['initiate', 'launch', 'embark'],
      antonyms: ['conclude', 'terminate', 'cease'],
      exampleSentences: [
        { en: 'The graduation ceremony is scheduled to officially begin at ten o\'clock.', ko: '졸업식은 정각 10시에 공식적으로 시작될 예정입니다.' },
        { en: 'The construction of the new stadium will take place as soon as the permits are approved.', ko: '허가가 승인되는 대로 새 경기장의 건설이 시작될 것입니다.' },
      ],
    }
  ),
  word('comment', '논평', 7, 'noun',
    ['침묵', '무시', '원문', '인용', '요약', '제목', '광고', '선전', '허위', '거짓말'],
    tips({
      etymology: '라틴어 \'com(함께)\'과 \'mens(마음/생각)\'가 합쳐져 자신의 생각을 함께 나눈다는 의미에서 유래했습니다.',
      visual: '인터넷 기사 하단에 사람들이 자신의 의견을 적어 놓은 댓글창의 모습을 상상해 보세요.',
      soundAlike: '축구 경기를 중계하는 \'코멘\'테이터가 상황을 설명하며 \'논평\'하는 소리를 떠올려 보세요.',
      context: '뉴스 보도나 일상 대화에서 어떤 사건에 대해 공식적인 의견을 밝힐 때 주로 사용됩니다.',
      synonymAntonym: '의견을 나타내는 remark와 유의어 관계이며, 아무 말도 하지 않는 silence와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a verbal or written remark expressing an opinion or reaction to a particular subject',
      synonyms: ['remark', 'observation', 'statement'],
      antonyms: ['silence', 'neglect', 'omission'],
      exampleSentences: [
        { en: 'The minister declined to make any further statement regarding the ongoing investigation.', ko: '장관은 진행 중인 조사에 대해 더 이상의 논평을 거부했다.' },
        { en: 'She left a thoughtful note on the blog post to express her agreement with the author.', ko: '그녀는 작가의 의견에 동의한다는 생각을 전하기 위해 블로그 게시물에 사려 깊은 논평을 남겼다.' },
      ],
    }
  ),
  word('commission', '위임', 4, 'noun',
    ['거부', '직접 수행', '독단', '자율', '해임', '취소', '철회', '거절', '회수', '독재'],
    tips({
      etymology: '함께(com-) 보낸다(miss)는 뜻에서 권한을 함께 보내는 \'위임\'이나 \'위원회\'라는 의미가 되었습니다.',
      visual: '상사가 부하 직원에게 중요한 서류 뭉치를 건네며 임무를 맡기는 장면을 상상해 보세요.',
      soundAlike: '커미션(commission)은 예술가에게 작품을 \'맡길\' 때 지불하는 비용으로도 흔히 쓰입니다.',
      context: '정부나 기업에서 특정 문제를 해결하기 위해 특별 위원회를 구성할 때 자주 등장하는 단어입니다.',
      synonymAntonym: '권한을 넘기는 delegation과 유사하며, 권한을 박탈하거나 거부하는 rejection과는 반대됩니다.',
    }),
    {
      definition: 'The act of granting authority to someone to carry out a specific task or duty.',
      synonyms: ['delegation', 'mandate', 'authorization'],
      antonyms: ['revocation', 'denial', 'withdrawal'],
      exampleSentences: [
        { en: 'The government established a special commission to investigate the environmental impact of the new factory.', ko: '정부는 새 공장의 환경적 영향을 조사하기 위해 특별 위원회를 구성했습니다.' },
        { en: 'He received a formal commission to design the city\'s new public library.', ko: '그는 시의 새로운 공공 도서관을 설계하라는 공식적인 위임을 받았습니다.' },
      ],
    }
  ),
  word('committee', '위원회', 5, 'noun',
    ['개인', '독재자', '일인', '해산', '무리', '군중', '대중', '전체', '국민', '시민'],
    tips({
      etymology: '라틴어 \'committere(함께 맡기다)\'에서 유래하여, 특정 임무를 공동으로 수행하기 위해 모인 집단을 뜻합니다.',
      visual: '둥근 테이블에 여러 전문가들이 둘러앉아 서류를 검토하며 회의하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'커미티\'와 유사하므로, \'커다란 미팅(meeting)을 하는 티(team)\'라고 연상하면 쉽습니다.',
      context: '정부 정책을 결정하거나 회사 내 특정 사안을 조사할 때 주로 구성되는 조직 단위입니다.',
      synonymAntonym: '여러 명의 위원으로 구성된 board와 유사하며, 결정을 내리는 주체가 단 한 명인 individual과는 반대됩니다.',
    }),
    {
      definition: 'A group of people appointed to perform a specific function or to manage the affairs of an organization.',
      synonyms: ['board', 'council', 'panel'],
      antonyms: ['individual', 'single person', 'lone member'],
      exampleSentences: [
        { en: 'The local council has formed a special group to investigate the environmental impact of the new factory.', ko: '지역 의회는 새 공장의 환경적 영향을 조사하기 위해 특별 위원회를 구성했습니다.' },
        { en: 'After hours of deliberation, the members reached a unanimous decision on the budget proposal.', ko: '몇 시간의 숙고 끝에 위원회 위원들은 예산안에 대해 만장일치로 결정을 내렸습니다.' },
      ],
    }
  ),
  word('commodity', '상품', 9, 'noun',
    ['서비스', '노동', '지식', '공기', '자연', '선물', '증여', '쓰레기', '폐기물', '무가치'],
    tips({
      etymology: '라틴어 commoditas(편의, 적합함)에서 유래하여, 사람들에게 편리함을 주는 유용한 물건이나 원자재를 뜻하게 되었습니다.',
      visual: '곡물 자루나 금괴가 가득 쌓인 창고에서 상인들이 가격을 흥정하며 물건을 주고받는 모습을 상상해 보세요.',
      soundAlike: '\'커모디티\' 발음이 \'커다란 보따리\'와 비슷하게 들리기도 하죠? 커다란 보따리에 담긴 팔 물건들을 떠올려 보세요.',
      context: '경제 뉴스에서 원유, 금, 농산물처럼 시장에서 거래되는 기초 원자재를 가리킬 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: '유의어인 goods는 일반적인 제품을, 반의어인 service는 형태가 없는 무형의 용역을 의미합니다.',
    }),
    {
      definition: 'a raw material or primary agricultural product that can be bought and sold, such as copper or coffee',
      synonyms: ['merchandise', 'product', 'asset'],
      antonyms: ['service', 'intangible', 'amenity'],
      exampleSentences: [
        { en: 'Oil is the most actively traded commodity in the global market.', ko: '석유는 세계 시장에서 가장 활발하게 거래되는 상품입니다.' },
        { en: 'In the digital age, personal data has become a valuable commodity.', ko: '디지털 시대에 개인 정보는 가치 있는 상품이 되었습니다.' },
      ],
    }
  ),
  word('communist', '공산주의자', 6, 'noun',
    ['자본주의자', '민주주의자', '사회주의자', '파시스트', '보수주의자', '자유주의자', '무정부주의자', '군주주의자', '민족주의자', '전체주의자'],
    tips({
      etymology: '공동체를 뜻하는 \'common\'에 사람을 뜻하는 \'-ist\'가 붙어 재산을 공동으로 소유하려는 사람을 의미합니다.',
      visual: '붉은 깃발 아래 모든 노동자가 평등하게 도구를 나누어 들고 있는 집단 농장의 모습을 상상해 보세요.',
      soundAlike: '\'커뮤니스트\'는 \'커뮤니티(Community)\'와 발음이 비슷하므로 공동체 사회를 지향하는 사람으로 기억하세요.',
      context: '냉전 시대의 역사적 배경이나 정치 체제를 다루는 뉴스 및 다큐멘터리에서 자주 등장하는 용어입니다.',
      synonymAntonym: '자본주의를 옹호하는 capitalist와는 정반대의 정치적 이념을 가진 사람을 지칭합니다.',
    }),
    {
      definition: 'A supporter of a political theory advocating class war and leading to a society in which all property is publicly owned.',
      synonyms: ['collectivist', 'socialist', 'marxist'],
      antonyms: ['capitalist', 'individualist', 'democrat'],
      exampleSentences: [
        { en: 'The revolutionary leader was a committed member of the party and a lifelong believer in the system.', ko: '그 혁명 지도자는 당의 헌신적인 일원이었으며 평생을 공산주의자로 살았다.' },
        { en: 'During the Cold War, many people were accused of being a secret sympathizer of the regime.', ko: '냉전 시대에 많은 사람들이 그 정권의 비밀 공산주의 동조자라는 혐의를 받았다.' },
      ],
    }
  ),
  word('community', '공동체', 7, 'noun',
    ['개인', '고립', '이방인', '적대감', '분열', '해체', '고독', '단절', '파편', '배척'],
    tips({
      etymology: '라틴어 \'communis\'에서 유래하며, \'함께(com)\'와 \'의무/봉사(munis)\'가 합쳐져 서로 돕는 집단을 뜻합니다.',
      visual: '마을 광장에 사람들이 둥글게 모여 서로 음식을 나누며 대화하는 따뜻한 풍경을 상상해 보세요.',
      soundAlike: '\'커뮤니티\'라는 외래어로 이미 익숙하죠? \'커뮤니케이션(소통)\'이 활발한 \'공동체\'라고 연결하세요.',
      context: '지역 사회, 온라인 카페, 학술 단체 등 공통점을 가진 사람들이 모인 모든 곳에 쓰입니다.',
      synonymAntonym: 'society(사회)와 비슷하지만 더 끈끈한 유대감을 강조하며, individual(개인)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A group of people living in the same locality or sharing common interests, goals, or characteristics.',
      synonyms: ['society', 'neighborhood', 'fellowship'],
      antonyms: ['individual', 'isolation', 'separation'],
      exampleSentences: [
        { en: 'The local residents worked together to build a new park for their neighborhood.', ko: '지역 주민들은 자신들의 공동체를 위해 새로운 공원을 조성하고자 함께 협력했습니다.' },
        { en: 'Online platforms allow people with rare hobbies to find a supportive group of peers.', ko: '온라인 플랫폼은 희귀한 취미를 가진 사람들이 서로 지지해주는 집단을 찾을 수 있게 해줍니다.' },
      ],
    }
  ),
  word('company', '회사', 3, 'noun',
    ['학교', '병원', '정부', '군대', '가정', '개인', '무직', '은퇴', '공장', '농장'],
    tips({
      etymology: '라틴어 \'com(함께)\'과 \'panis(빵)\'가 합쳐져 \'함께 빵을 나누어 먹는 동료\'라는 의미에서 시작되었습니다.',
      visual: '정장을 입은 직장인들이 로비에서 함께 커피를 마시며 대화하는 사무실 풍경을 상상해 보세요.',
      soundAlike: '컴퍼니(company)의 \'컴\'을 \'함께 오다(come)\'로 연상하여 사람들이 모인 조직을 떠올려 보세요.',
      context: '비즈니스 조직을 뜻하기도 하지만, \'I enjoy your company\'처럼 누군가와 함께 있는 상태를 뜻하기도 합니다.',
      synonymAntonym: 'firm이나 corporation은 비즈니스 조직을 강조하며, 반대로 혼자 있는 상태는 solitude라고 합니다.',
    }),
    {
      definition: 'A commercial business or an organization that sells goods or services, or the state of being with another person.',
      synonyms: ['firm', 'corporation', 'companionship'],
      antonyms: ['solitude', 'isolation', 'individual'],
      exampleSentences: [
        { en: 'She decided to start her own software development firm after years of experience.', ko: '그녀는 수년간의 경험 끝에 자신의 소프트웨어 개발 회사를 차리기로 결심했습니다.' },
        { en: 'I really enjoy your presence because you are such a good listener.', ko: '당신은 정말 잘 들어주는 사람이기 때문에 당신과 함께 있는 것이 즐겁습니다.' },
      ],
    }
  ),
  word('compatible', '양립하는', 10, 'adjective',
    ['상충하는', '반대되는', '배타적인', '불화하는', '모순되는', '어긋나는', '충돌하는', '적대적인', '불협화음의', '이질적인'],
    tips({
      etymology: '라틴어 \'compati\'에서 유래하며, \'com(함께)\'과 \'pati(고통을 겪다/느끼다)\'가 합쳐져 서로 감정을 함께 나눌 수 있을 만큼 잘 맞는다는 뜻을 가집니다.',
      visual: '두 개의 퍼즐 조각이 빈틈없이 완벽하게 맞물려 하나의 그림을 완성하는 모습을 상상해 보세요.',
      soundAlike: '컴패터블(compatible) - \'컴퓨터(com) 패치(pat) 가능(ible)\'으로 연상하여 소프트웨어가 기기와 잘 맞는 상황을 떠올려 보세요.',
      context: '주로 IT 기기 간의 호환성이나 연인 사이의 성격 궁합, 혹은 두 가지 정책이 충돌 없이 병행될 때 자주 쓰입니다.',
      synonymAntonym: 'harmonious와는 조화롭다는 점에서 비슷하지만, contradictory와는 서로 부딪히는 관계이므로 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'able to exist, live, or work together in agreement without having problems or conflict',
      synonyms: ['harmonious', 'consistent', 'congruous'],
      antonyms: ['incompatible', 'conflicting', 'clashing'],
      exampleSentences: [
        { en: 'The new software is fully functional and works well with older operating systems.', ko: '새 소프트웨어는 기능이 완벽하며 구형 운영 체제와도 잘 양립합니다.' },
        { en: 'They decided to break up because their long-term goals were simply not suited to each other.', ko: '그들은 장기적인 목표가 서로 양립할 수 없었기 때문에 헤어지기로 결정했습니다.' },
      ],
    }
  ),
  word('competent', '유능한', 4, 'adjective',
    ['무능한', '서툰', '미숙한', '어리석은', '한심한', '부적격한', '무력한', '무지한', '경험이 없는', '비전문의'],
    tips({
      etymology: '라틴어 competere에서 유래하며, \'함께(com) 구하다(petere)\' 즉, 어떤 자리에 적합함을 다투어 얻어낼 만큼 실력이 있다는 뜻입니다.',
      visual: '복잡한 기계를 능숙하게 다루며 주변 사람들의 신뢰를 한 몸에 받는 전문 기술자의 모습을 상상해 보세요.',
      soundAlike: '\'컴피턴트\' 발음이 \'큰 비전(vision)을 턴(turn)하다\'와 비슷하게 들리니, 큰 비전을 현실로 바꿀 능력이 있다고 연상하세요.',
      context: '직장이나 전문적인 환경에서 누군가의 업무 처리 능력이 충분히 만족스러울 때 주로 사용되는 긍정적인 형용사입니다.',
      synonymAntonym: 'capable과 유의어 관계이며, 반대말인 incompetent와 함께 외우면 효율적입니다.',
    }),
    {
      definition: 'having the necessary ability, knowledge, or skill to do something successfully',
      synonyms: ['capable', 'proficient', 'adept'],
      antonyms: ['incompetent', 'inept', 'unskilled'],
      exampleSentences: [
        { en: 'The company is looking for a competent manager to lead the new project team.', ko: '회사는 새 프로젝트 팀을 이끌 유능한 매니저를 찾고 있습니다.' },
        { en: 'She has proven herself to be highly competent in handling difficult customers.', ko: '그녀는 까다로운 고객들을 응대하는 데 있어 매우 유능하다는 것을 증명했습니다.' },
      ],
    }
  ),
  word('compile', '편찬하다', 8, 'verb',
    ['분해하다', '삭제하다', '무시하다', '분산시키다', '지연하다', '파괴하다', '거절하다', '방치하다', '낭비하다', '누락하다'],
    tips({
      etymology: '라틴어 \'compilare\'에서 유래했으며, \'함께(com)\'와 \'쌓다(pilare)\'가 합쳐져 여러 자료를 한데 모으는 느낌을 줍니다.',
      visual: '책상 위에 흩어져 있는 수많은 서류들을 차곡차곡 모아 한 권의 두꺼운 책으로 묶는 모습을 상상하세요.',
      soundAlike: '\'컴파일\'은 컴퓨터 프로그래밍에서 코드를 모아 실행 파일로 만드는 과정으로도 잘 알려져 있습니다.',
      context: '통계 자료를 수집하거나, 여러 작가의 시를 모아 선집을 만들 때 주로 사용되는 단어입니다.',
      synonymAntonym: '흩어진 것을 모으는 assemble과 유사하며, 반대로 낱낱이 나누는 scatter와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to produce a book, list, or report by bringing together different items, figures, or pieces of information',
      synonyms: ['accumulate', 'assemble', 'organize'],
      antonyms: ['distribute', 'disperse', 'separate'],
      exampleSentences: [
        { en: 'The department needs to gather all the data to create a comprehensive report for the annual meeting.', ko: '부서는 연례 회의를 위한 종합 보고서를 작성하기 위해 모든 데이터를 수집해야 합니다.' },
        { en: 'It took several years for the researchers to put together this extensive collection of folk songs.', ko: '연구원들이 이 방대한 민요집을 편찬하는 데 수년이 걸렸습니다.' },
      ],
    }
  ),
  word('complicate', '복잡하게 하다', 5, 'verb',
    ['단순화하다', '해결하다', '정리하다', '분석하다', '보완하다', '적용하다', '수행하다', '유지하다', '변경하다', '반복하다'],
    tips({
      etymology: '라틴어 \'complicare\'에서 유래하며, \'com(함께)\'과 \'plicare(접다)\'가 합쳐져 여러 겹으로 꼬이고 접힌 상태를 의미합니다.',
      visual: '이어폰 줄이 여러 번 꼬여서 도저히 풀 수 없을 정도로 엉망이 된 모습을 상상해 보세요.',
      soundAlike: '\'컴플리케이트\'는 \'컴퓨터가 클릭(click)해도 안 될 정도로 게이트(gate)가 막혔다\'고 연상해 보세요.',
      context: '불필요한 세부 사항을 추가하거나 절차를 늘릴 때 상황을 꼬이게 만든다는 의미로 자주 쓰입니다.',
      synonymAntonym: '단순하게 만드는 simplify와 반대되며, 상황을 꼬이게 만드는 confuse와 결을 같이 합니다.',
    }),
    {
      definition: 'to make a situation or problem more difficult to understand or deal with',
      synonyms: ['confuse', 'entangle', 'muddle'],
      antonyms: ['simplify', 'clarify', 'facilitate'],
      exampleSentences: [
        { en: 'Adding too many rules will only serve to further the difficulty of the process.', ko: '너무 많은 규칙을 추가하는 것은 절차를 더 복잡하게 만드는 결과만 초래할 것이다.' },
        { en: 'I do not want to make things more difficult for you, so I will keep my explanation brief.', ko: '당신을 더 번거롭게 하고 싶지 않으니 설명은 짧게 하겠습니다.' },
      ],
    }
  ),
  word('compound', '혼합하다', 9, 'verb',
    ['분리하다', '단순화하다', '해체하다', '분석하다', '제거하다', '무시하다', '축소하다', '정체되다', '보존하다', '거절하다'],
    tips({
      etymology: '함께를 뜻하는 com-과 놓다를 뜻하는 ponere가 합쳐져 여러 요소를 한데 놓는다는 의미에서 유래했습니다.',
      visual: '여러 가지 색깔의 찰흙을 하나로 뭉쳐서 커다란 덩어리를 만드는 모습을 상상해 보세요.',
      soundAlike: '컴파운드(Compound)는 자동차 흠집을 지울 때 쓰는 혼합 약품 이름과 발음이 같습니다.',
      context: '화학 실험에서 물질을 섞거나, 실수가 겹쳐 상황이 더 악화될 때 주로 사용됩니다.',
      synonymAntonym: '섞어서 합치는 것은 blend, 반대로 하나하나 나누는 것은 separate라고 합니다.',
    }),
    {
      definition: 'to combine two or more distinct elements or ingredients to form a whole, or to make a difficult situation even worse',
      synonyms: ['amalgamate', 'exacerbate', 'intermingle'],
      antonyms: ['separate', 'divide', 'alleviate'],
      exampleSentences: [
        { en: 'The chemists decided to compound the two substances to observe the reaction.', ko: '화학자들은 반응을 관찰하기 위해 두 물질을 혼합하기로 결정했다.' },
        { en: 'His refusal to apologize only served to compound the existing problem.', ko: '그의 사과 거부는 기존의 문제를 더욱 악화시켰을 뿐이다.' },
      ],
    }
  ),
  word('comprehensive', '포괄적인', 6, 'adjective',
    ['부분적인', '제한적인', '편협한', '좁은', '일부의', '단편적인', '피상적인', '협소한', '불완전한', '한정된'],
    tips({
      etymology: '함께를 뜻하는 com-과 잡다를 뜻하는 prehend가 합쳐져 모든 것을 한데 잡아넣는다는 의미에서 유래했습니다.',
      visual: '커다란 그물 안에 세상의 모든 지식과 정보를 하나도 빠짐없이 가득 담고 있는 모습을 상상해 보세요.',
      soundAlike: '컴프리헨시브 - \'큰 프리(free) 사이즈 집\'처럼 모든 것을 다 수용할 수 있을 만큼 넓고 포괄적인 느낌입니다.',
      context: '보험 가입 시 모든 사고를 보장하는 종합 보험이나, 전 범위를 다루는 기말고사 범위를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '모든 것을 담은 inclusive와 대조적으로, 오직 일부분만 다루는 partial을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'including or dealing with all or nearly all elements or aspects of something',
      synonyms: ['inclusive', 'thorough', 'extensive'],
      antonyms: ['partial', 'limited', 'selective'],
      exampleSentences: [
        { en: 'The government published a full and detailed report after a thorough investigation.', ko: '정부는 철저한 조사 후에 완전하고 상세한 종합 보고서를 발표했습니다.' },
        { en: 'This insurance policy offers wide coverage for all kinds of medical expenses.', ko: '이 보험 증권은 모든 종류의 의료비에 대해 광범위한 보장을 제공합니다.' },
      ],
    }
  ),
  word('comprise', '포함하다', 10, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다'],
    tips({
      etymology: '함께를 뜻하는 com-과 잡다를 뜻하는 prise가 합쳐져 여러 요소를 한데 모아 잡고 있다는 의미에서 유래했습니다.',
      visual: '여러 조각의 퍼즐이 모여 하나의 큰 그림을 완성하는 장면을 상상해 보세요.',
      soundAlike: '컴(com)퓨터 프라이스(prise) - 컴퓨터 가격에 모니터와 본체 가격이 모두 포함되어 있다고 연상하세요.',
      context: '전체 집단이 어떤 구성 요소들로 이루어져 있는지 설명할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'include와 비슷하지만, comprise는 전체가 부분들로 구성됨을 강조하며 exclude와는 반대됩니다.',
    }),
    {
      definition: 'to be made up of particular parts, groups, or elements',
      synonyms: ['constitute', 'encompass', 'incorporate'],
      antonyms: ['exclude', 'omit', 'lack'],
      exampleSentences: [
        { en: 'The committee is expected to be made up of ten members from different departments.', ko: '위원회는 서로 다른 부서에서 온 10명의 위원들로 구성될 것으로 예상됩니다.' },
        { en: 'Older people form a large proportion of the total population in this country.', ko: '이 나라에서는 노인 인구가 전체 인구의 큰 비중을 차지하고 있습니다.' },
      ],
    }
  ),
  word('compulsory', '의무적인', 8, 'adjective',
    ['선택적인', '자발적인', '임의의', '예외적인', '우연한', '부수적인', '일시적인', '허용되는', '자유로운', '권장되는'],
    tips({
      etymology: '라틴어 \'compulsus\'에서 유래했으며, \'com(함께)\'과 \'pellere(밀다)\'가 합쳐져 강제로 밀어붙인다는 느낌을 줍니다.',
      visual: '학교 교문을 들어설 때 반드시 교복을 입어야만 통과할 수 있는 엄격한 규칙을 상상해 보세요.',
      soundAlike: '\'컴펄서리\' 발음이 \'큰 벌 소리\'와 비슷하죠? 벌금을 내지 않으려면 의무를 다해야 한다는 상황을 떠올려 보세요.',
      context: '교육, 군대, 법적 규제 등 개인의 선택권이 없는 필수적인 상황에서 주로 사용됩니다.',
      synonymAntonym: 'mandatory와는 동의어 관계이며, 본인의 의사에 맡기는 optional과는 반대되는 개념입니다.',
    }),
    {
      definition: 'required by law or a rule; having the power of forcing someone to do something',
      synonyms: ['mandatory', 'obligatory', 'requisite'],
      antonyms: ['optional', 'voluntary', 'discretionary'],
      exampleSentences: [
        { en: 'In many countries, primary education is compulsory for all children.', ko: '많은 나라에서 초등 교육은 모든 어린이들에게 의무적입니다.' },
        { en: 'The government made it compulsory to wear seatbelts in all vehicles.', ko: '정부는 모든 차량에서 안전벨트 착용을 의무화했습니다.' },
      ],
    }
  ),
  word('conceal', '숨기다', 7, 'verb',
    ['드러내다', '밝히다', '공개하다', '노출하다', '보여주다', '알리다', '고백하다', '털어놓다', '폭로하다', '들춰내다'],
    tips({
      etymology: '라틴어 concelare에서 유래하며, con(완전히)과 celare(숨기다)가 합쳐져 완전히 감추는 것을 의미합니다.',
      visual: '화장품 컨실러(concealer)가 피부의 잡티를 완벽하게 가려주는 모습을 상상해 보세요.',
      soundAlike: '\'큰 실(con-ceal)\'수를 해서 남들이 모르게 꽁꽁 숨기는 상황을 연상하며 발음해 보세요.',
      context: '감정이나 사실, 혹은 물리적인 물건을 남의 눈에 띄지 않게 할 때 주로 사용됩니다.',
      synonymAntonym: 'hide와 유의어 관계이며, 반대로 밖으로 드러내는 reveal과는 반의어 관계입니다.',
    }),
    {
      definition: 'to prevent something from being seen or known about',
      synonyms: ['hide', 'disguise', 'mask'],
      antonyms: ['reveal', 'expose', 'disclose'],
      exampleSentences: [
        { en: 'The spy tried to hide his identity behind a fake name to keep his mission secret.', ko: '그 스파이는 임무를 비밀로 유지하기 위해 가짜 이름 뒤에 자신의 정체를 숨기려 노력했다.' },
        { en: 'She could not mask her disappointment when she heard the news.', ko: '그녀는 그 소식을 들었을 때 실망감을 감출 수 없었다.' },
      ],
    }
  ),
  word('conceive', '상상하다', 9, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다'],
    tips({
      etymology: '라틴어 concipere에서 유래하며, con(함께)과 capere(잡다)가 합쳐져 마음속으로 생각을 붙잡아 품는다는 의미가 되었습니다.',
      visual: '텅 빈 머릿속 도화지에 복잡한 설계도나 아이디어가 서서히 그려지는 모습을 상상해 보세요.',
      soundAlike: '\'큰 시브(큰 씹으)\'라고 발음하며, 큰 아이디어를 입안에 넣고 씹으며 깊이 생각하는 모습을 연상하세요.',
      context: '새로운 비즈니스 모델을 구상하거나, 도저히 믿기 힘든 상황을 머릿속으로 그려볼 때 주로 사용합니다.',
      synonymAntonym: '생각을 품는 imagine과 대조적으로, 이미 나온 결과를 무시하거나 거부하는 disregard를 함께 기억하세요.',
    }),
    {
      definition: 'to form a mental representation of an idea, plan, or possibility in the mind',
      synonyms: ['envision', 'visualize', 'apprehend'],
      antonyms: ['disregard', 'neglect', 'misunderstand'],
      exampleSentences: [
        { en: 'It is difficult to how anyone could live in such extreme poverty.', ko: '누군가가 어떻게 그런 극심한 가난 속에서 살 수 있는지 상상하기 어렵다.' },
        { en: 'The architect began to a new design for the city\'s central library.', ko: '그 건축가는 시립 중앙 도서관을 위한 새로운 디자인을 구상하기 시작했다.' },
      ],
    }
  ),
  word('concept', '개념', 4, 'noun',
    ['사물', '사건', '행동', '감각', '경험', '현상', '구체물', '실제', '대상', '사실'],
    tips({
      etymology: '라틴어 \'concipere(받아들이다, 품다)\'에서 유래하여 마음속에 품은 생각을 뜻합니다.',
      visual: '복잡한 기계의 설계도나 머릿속에 떠오른 전구 이미지를 상상해 보세요.',
      soundAlike: '\'큰셉트\'라고 발음하며 \'큰(대단한) 생각의 틀\'이라고 연상하면 쉽습니다.',
      context: '새로운 사업 아이디어나 과학적 이론을 설명할 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'idea와 비슷하지만 더 체계적이며, 구체적인 실체인 reality와는 반대됩니다.',
    }),
    {
      definition: 'an abstract idea or a general notion that represents something',
      synonyms: ['notion', 'idea', 'theory'],
      antonyms: ['reality', 'concretion', 'entity'],
      exampleSentences: [
        { en: 'The architect explained the basic design idea for the new museum.', ko: '건축가는 새 박물관에 대한 기본 설계 개념을 설명했습니다.' },
        { en: 'It is difficult for small children to grasp the abstract notion of time.', ko: '어린 아이들이 시간이라는 추상적인 개념을 이해하기는 어렵습니다.' },
      ],
    }
  ),
  word('concert', '연주회', 1, 'noun',
    ['침묵', '독창', '녹음', '방송', '영화', '연극', '전시', '경기', '회의', '수업'],
    tips({
      etymology: '함께를 뜻하는 con-과 경쟁하다를 뜻하는 certare가 합쳐져, 여러 악기가 조화를 이루며 경쟁하듯 연주하는 모습을 나타냅니다.',
      visual: '화려한 조명 아래 오케스트라나 밴드가 무대 위에서 악기를 연주하고 관객들이 환호하는 장면을 상상하세요.',
      soundAlike: '발음이 \'큰-서트\'와 비슷하므로, 큰(big) 소리가 울려 퍼지는 음악 행사라고 기억하면 쉽습니다.',
      context: '음악회뿐만 아니라 \'in concert\'라는 표현을 통해 여러 사람이 일제히 협력한다는 의미로도 쓰입니다.',
      synonymAntonym: '공연을 뜻하는 show와 유사하며, 아무 소리도 들리지 않는 silence와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A musical entertainment given in public by one or more performers',
      synonyms: ['performance', 'show', 'gig'],
      antonyms: ['silence', 'quiet', 'stillness'],
      exampleSentences: [
        { en: 'The famous rock band is planning to hold a world tour next summer.', ko: '그 유명한 록 밴드는 내년 여름에 월드 투어 공연을 개최할 계획이다.' },
        { en: 'Thousands of fans gathered at the stadium to watch the live musical event.', ko: '수천 명의 팬들이 라이브 음악 공연을 보기 위해 경기장에 모였다.' },
      ],
    }
  ),
  word('condemn', '나무라다', 10, 'verb',
    ['칭찬하다', '용서하다', '옹호하다', '지지하다', '승인하다', '포용하다', '감싸다', '변명하다', '변호하다', '찬성하다'],
    tips({
      etymology: '라틴어 \'condemnare\'에서 유래했으며, \'완전히(con-)\' \'손해를 입히다(demnare)\'라는 의미가 합쳐져 강하게 비난하거나 유죄 판결을 내린다는 뜻이 되었습니다.',
      visual: '법정에서 판사가 망치를 세게 두드리며 피고인의 잘못을 엄격하게 꾸짖는 모습을 상상해 보세요.',
      soundAlike: '\'큰 댐(con-demn)\'이 무너져서 마을 사람들이 관리자를 심하게 나무라는 상황을 연상해 보세요.',
      context: '주로 도덕적으로 옳지 않은 행동이나 사회적 범죄에 대해 공식적으로 강력한 반대 의사를 표명할 때 사용됩니다.',
      synonymAntonym: '비난하다라는 뜻의 denounce와 유의어이며, 반대로 칭찬하고 높게 평가하는 praise와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to express complete disapproval of someone or something, typically in public, or to pronounce a guilty verdict.',
      synonyms: ['denounce', 'criticize', 'sentence'],
      antonyms: ['praise', 'approve', 'acquit'],
      exampleSentences: [
        { en: 'The world leaders gathered to strongly denounce the act of terrorism.', ko: '세계 지도자들은 그 테러 행위를 강력히 규탄하기 위해 모였다.' },
        { en: 'The judge will officially pass judgment on the criminal for his illegal actions.', ko: '판사는 범죄자의 불법 행위에 대해 공식적으로 형을 선고할 것이다.' },
      ],
    }
  ),
  word('confer', '수여하다', 8, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'fer(가져오다)\'가 합쳐져 의견을 함께 모으거나 자격을 가져다준다는 의미에서 유래했습니다.',
      visual: '대학 졸업식에서 총장이 학생에게 학위를 건네주며 악수하는 장면을 상상해 보세요.',
      soundAlike: '\'큰 퍼(con-fer)\'포먼스 후에 훈장을 수여하는 장면으로 소리를 연결해 보세요.',
      context: '주로 학위, 훈장, 권위 등을 공식적으로 부여하거나 중요한 결정을 위해 상의할 때 사용됩니다.',
      synonymAntonym: 'give나 bestow와 비슷하지만 훨씬 공식적인 격식을 갖춘 표현이며, 반대로 박탈할 때는 withdraw를 씁니다.',
    }),
    {
      definition: 'to grant a title, degree, benefit, or right to someone, or to consult together to compare opinions',
      synonyms: ['bestow', 'grant', 'consult'],
      antonyms: ['withdraw', 'withhold', 'deprive'],
      exampleSentences: [
        { en: 'The university will grant a doctorate upon the distinguished scholar during the ceremony.', ko: '대학교는 기념식에서 그 저명한 학자에게 박사 학위를 수여할 예정입니다.' },
        { en: 'The president needed to meet with his advisers before making a final decision on the matter.', ko: '대통령은 그 문제에 대한 최종 결정을 내리기 전에 고문들과 상의해야 했습니다.' },
      ],
    }
  ),
  word('confess', '실토하다', 5, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '라틴어 confessus에서 유래하며, \'함께(con-)\' \'말하다(fateri)\'가 합쳐져 숨김없이 모두 털어놓는다는 의미가 되었습니다.',
      visual: '성당의 고해성사 칸막이 안에서 신부님께 자신의 잘못을 조용히 털어놓는 장면을 상상해 보세요.',
      soundAlike: '\'큰 패스(con-fess)\'라고 발음되는데, 마음속 무거운 짐을 말로 뱉어 상대에게 \'패스\'해버리는 상황을 떠올려 보세요.',
      context: '주로 범죄 사실을 자백하거나, 오랫동안 숨겨왔던 짝사랑 같은 비밀스러운 감정을 고백할 때 사용합니다.',
      synonymAntonym: 'admit과 유사하지만 더 깊은 진실을 밝히는 뉘앙스이며, 사실을 숨기는 conceal과는 반대되는 행동입니다.',
    }),
    {
      definition: 'to admit that you have done something wrong or illegal, or to disclose a private secret or feeling',
      synonyms: ['admit', 'acknowledge', 'reveal'],
      antonyms: ['deny', 'conceal', 'hide'],
      exampleSentences: [
        { en: 'The suspect finally decided to everything to the police after hours of questioning.', ko: '용의자는 몇 시간 동안의 심문 끝에 마침내 경찰에게 모든 것을 자백하기로 결심했다.' },
        { en: 'I must that I haven\'t actually read the book I recommended to you.', ko: '사실 당신에게 추천해 준 그 책을 읽지 않았다는 것을 고백해야겠어요.' },
      ],
    }
  ),
  word('conform', '따르다', 6, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '함께를 뜻하는 con-과 형태를 뜻하는 form이 합쳐져, 남들과 같은 형태를 취한다는 의미에서 유래했습니다.',
      visual: '모두가 똑같은 유니폼(uniform)을 입고 줄을 맞춰 서 있는 군인들의 모습을 상상해 보세요.',
      soundAlike: '큰(con) 폼(form)을 잡으려 하지 말고 대세를 따르라고 기억하면 쉽습니다.',
      context: '사회적 규범이나 집단의 규칙을 준수해야 하는 상황에서 주로 쓰이는 단어입니다.',
      synonymAntonym: 'comply와는 순응한다는 점에서 비슷하지만, rebel과는 반항한다는 점에서 정반대입니다.',
    }),
    {
      definition: 'to behave according to the usual standards of behavior that are expected by a group or society',
      synonyms: ['comply', 'obey', 'adhere'],
      antonyms: ['rebel', 'resist', 'differ'],
      exampleSentences: [
        { en: 'All students must behave in a way that will satisfy the school\'s safety regulations.', ko: '모든 학생들은 학교의 안전 규정을 준수하는 방식으로 행동해야 합니다.' },
        { en: 'There is considerable pressure on teenagers to match the fashion trends of their peers.', ko: '십 대들에게는 또래의 패션 유행을 따라야 한다는 상당한 압박이 있습니다.' },
      ],
    }
  ),
  word('confuse', '혼란시키다', 7, 'verb',
    ['확인하다', '설명하다', '결정하다', '정리하다', '이해하다', '분석하다', '비교하다', '기억하다', '해결하다', '안심시키다'],
    tips({
      etymology: '라틴어 \'confundere\'에서 유래되었으며, \'함께(con)\' \'붓다(fuse)\'라는 의미가 합쳐져 여러 가지가 마구 섞여 갈피를 잡지 못하는 상태를 나타냅니다.',
      visual: '여러 갈래로 꼬인 실타래나 복잡한 미로 앞에 서서 어디로 가야 할지 몰라 머리를 긁적이는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'큰 퓨즈(con-fuse)\'가 나가서 집안이 갑자기 어두워져 당황하고 어리둥절해하는 상황으로 기억하면 쉽습니다.',
      context: '길을 찾을 때 비슷한 표지판이 여러 개 있거나, 두 사람의 목소리가 너무 비슷해서 누구인지 구별하기 어려울 때 주로 사용합니다.',
      synonymAntonym: '명확하게 만드는 clarify와 반대되는 개념으로, 머릿속을 안개처럼 뿌옇게 만드는 bewilder와 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'to make someone unable to think clearly or understand something properly; to mistake one person or thing for another',
      synonyms: ['bewilder', 'perplex', 'disorient'],
      antonyms: ['clarify', 'enlighten', 'explain'],
      exampleSentences: [
        { en: 'The complex instructions on the box only served to baffle the customers.', ko: '상자에 적힌 복잡한 설명서는 고객들을 혼란스럽게 만들 뿐이었다.' },
        { en: 'People often mistake me for my twin brother because we look so much alike.', ko: '우리는 너무 닮아서 사람들은 종종 나와 내 쌍둥이 형제를 혼동하곤 한다.' },
      ],
    }
  ),
  word('congratulate', '축하하다', 2, 'verb',
    ['변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'gratus(기쁜)\'가 합쳐져 누군가의 기쁨을 함께 나눈다는 의미에서 유래했습니다.',
      visual: '우승컵을 들어 올리는 친구에게 다가가 환하게 웃으며 박수를 쳐주는 장면을 상상해 보세요.',
      soundAlike: '\'큰 그래(con-gra)\'라고 크게 칭찬하며 기쁨을 표현하는 소리와 비슷하게 들립니다.',
      context: '생일, 졸업, 승진처럼 누군가에게 좋은 일이 생겼을 때 진심 어린 축복을 전할 때 사용합니다.',
      synonymAntonym: '칭찬하는 \'praise\'와 비슷하지만, 비난하는 \'criticize\'와는 정반대의 상황에서 쓰입니다.',
    }),
    {
      definition: 'to tell someone that you are happy about their success, good luck, or a special event',
      synonyms: ['praise', 'applaud', 'commend'],
      antonyms: ['criticize', 'condemn', 'belittle'],
      exampleSentences: [
        { en: 'I would like to offer my best wishes and praise your hard work on this promotion.', ko: '이번 승진에 대해 진심으로 축하하며 당신의 노고에 박수를 보냅니다.' },
        { en: 'Friends gathered to celebrate her graduation and tell her how proud they were.', ko: '친구들은 그녀의 졸업을 축하하고 그녀가 얼마나 자랑스러운지 말해주기 위해 모였습니다.' },
      ],
    }
  ),
  word('congress', '의회', 4, 'noun',
    ['대통령', '사법부', '행정부', '지방자치', '선거구', '헌법', '조약', '정당', '시민권', '외교관'],
    tips({
      etymology: '함께를 뜻하는 con-과 가다를 뜻하는 gress가 합쳐져 사람들이 함께 모이는 곳을 의미합니다.',
      visual: '국회의사당 건물 앞에 수많은 의원들이 모여 토론하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'칸-그레스\'와 유사한데, 큰(con) 그래(gress)스, 즉 큰 결정을 내리는 곳으로 기억하세요.',
      context: '미국에서는 상원과 하원을 통칭하여 이 단어로 부르며 법을 제정하는 역할을 합니다.',
      synonymAntonym: '유사한 의미의 council, assembly와 대조되는 개념인 individual을 함께 익히면 좋습니다.',
    }),
    {
      definition: 'A formal meeting of delegates or representatives to discuss and make decisions on laws and policies.',
      synonyms: ['legislature', 'assembly', 'council'],
      antonyms: ['individual', 'disunity', 'separation'],
      exampleSentences: [
        { en: 'The new bill is currently being debated in the national legislative body.', ko: '새 법안은 현재 국회에서 논의 중입니다.' },
        { en: 'Representatives from all states gathered for the annual meeting to discuss environmental issues.', ko: '모든 주의 대표들이 환경 문제를 논의하기 위해 연례 회의에 모였습니다.' },
      ],
    }
  ),
  word('consent', '동의하다', 9, 'verb',
    ['거절하다', '무시하다', '반대하다', '금지하다', '보류하다', '저항하다', '철회하다', '방해하다', '비난하다', '연기하다'],
    tips({
      etymology: '함께를 뜻하는 con-과 느끼다를 뜻하는 sent가 합쳐져 마음을 같이 한다는 의미에서 유래되었습니다.',
      visual: '계약서 하단에 서명을 하거나 온라인 약관에서 \'동의\' 버튼을 누르는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'큰 센터\'와 비슷하죠? 큰 센터 건립에 모두가 찬성하는 장면을 떠올려 보세요.',
      context: '의료 시술이나 데이터 수집 전 당사자의 허락을 구할 때 가장 공식적으로 쓰이는 표현입니다.',
      synonymAntonym: '허락을 뜻하는 agree와 유의어이며, 거절을 뜻하는 refuse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to give permission for something to happen or to agree to do something',
      synonyms: ['agree', 'approve', 'assent'],
      antonyms: ['refuse', 'dissent', 'disagree'],
      exampleSentences: [
        { en: 'The patient must sign this form to show they give their full permission for the surgery.', ko: '환자는 수술에 완전히 동의한다는 것을 보여주기 위해 이 양식에 서명해야 합니다.' },
        { en: 'He reluctantly agreed to his daughter\'s request to travel abroad alone.', ko: '그는 딸의 혼자 해외여행을 가겠다는 요청에 마지못해 동의했습니다.' },
      ],
    }
  ),
  word('conserve', '보존하다', 10, 'verb',
    ['낭비하다', '파괴하다', '소비하다', '무시하다', '변경하다', '방치하다', '훼손하다', '가속하다', '노출하다', '버리다'],
    tips({
      etymology: '함께를 뜻하는 con-과 지키다를 뜻하는 servare가 합쳐져 소중한 것을 함께 지켜낸다는 의미가 되었습니다.',
      visual: '에너지를 아끼기 위해 빈 방의 전등 스위치를 끄는 모습을 상상해 보세요.',
      soundAlike: '큰(con) 서버(serve)를 관리하며 데이터를 안전하게 보존하는 장면을 연상해 보세요.',
      context: '환경 보호나 자원 절약 담론에서 에너지를 아껴 쓰거나 자연을 보호할 때 주로 쓰입니다.',
      synonymAntonym: 'preserve와 함께 외우고, 반대말인 waste나 squander와 대조하면 기억에 오래 남습니다.',
    }),
    {
      definition: 'to protect something from being damaged, lost, or wasted, especially natural resources or energy',
      synonyms: ['preserve', 'save', 'maintain'],
      antonyms: ['waste', 'squander', 'deplete'],
      exampleSentences: [
        { en: 'New laws were passed to help protect and keep the local wildlife habitats safe.', ko: '지역 야생동물 서식지를 보호하고 보존하는 것을 돕기 위해 새로운 법안들이 통과되었습니다.' },
        { en: 'We must find more efficient ways to use less electricity during the hot summer months.', ko: '우리는 무더운 여름철 동안 전기를 덜 사용하고 절약할 수 있는 더 효율적인 방법들을 찾아야 합니다.' },
      ],
    }
  ),
  word('construct', '건설하다', 5, 'verb',
    ['파괴하다', '분해하다', '방치하다', '조사하다', '무시하다', '철거하다', '수정하다', '거절하다', '상상하다', '연기하다'],
    tips({
      etymology: '함께를 뜻하는 con-과 세우다를 뜻하는 struct가 합쳐져 여러 재료를 모아 세운다는 의미가 됩니다.',
      visual: '안전모를 쓴 인부들이 거대한 건물의 뼈대를 하나씩 맞춰가는 공사 현장을 떠올려 보세요.',
      soundAlike: '발음이 \'큰 스트럭처(structure)\'와 비슷하므로 큰 구조물을 만드는 장면을 연상하세요.',
      context: '단순히 건물을 짓는 것뿐만 아니라 이론이나 문장을 체계적으로 구성할 때도 자주 쓰입니다.',
      synonymAntonym: 'build와 유사하며, 반대로 다 지어진 것을 허무는 것은 demolish라고 합니다.',
    }),
    {
      definition: 'to build or form something by putting parts together in a logical or structural way',
      synonyms: ['assemble', 'fabricate', 'erect'],
      antonyms: ['demolish', 'destroy', 'dismantle'],
      exampleSentences: [
        { en: 'The government plans to construct a new bridge over the river to ease traffic congestion.', ko: '정부는 교통 체증을 완화하기 위해 강 위에 새로운 다리를 건설할 계획이다.' },
        { en: 'It takes a lot of effort to construct a logical argument during a heated debate.', ko: '격렬한 토론 중에 논리적인 주장을 구성하는 것은 많은 노력이 필요하다.' },
      ],
    }
  ),
];
