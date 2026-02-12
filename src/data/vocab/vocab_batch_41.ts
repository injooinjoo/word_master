import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch41: VocabItem[] = [
  word('integrate', '통합하다', 9, 'verb',
    ['분리하다', '제외하다', '해체하다', '거절하다', '방해하다', '지연시키다', '파괴하다', '무시하다', '고립시키다', '중단하다'],
    tips({
      etymology: '라틴어 \'integer(전체, 손대지 않은)\'에서 유래하여 여러 부분을 하나로 합쳐 완전하게 만든다는 의미를 가집니다.',
      visual: '여러 색깔의 퍼즐 조각들이 하나로 맞춰져 하나의 큰 그림이 완성되는 모습을 상상해 보세요.',
      soundAlike: '\'인티그레이트\' 발음이 \'인기(인기 있는 것들을) 그래(그대로) 잇다\'와 비슷하다고 생각하면 연결하기 쉽습니다.',
      context: '새로운 기술을 기존 시스템에 도입하거나, 전학생이 새로운 학급의 일원이 될 때 자주 쓰입니다.',
      synonymAntonym: 'combine과 유의어이며, 반대로 쪼개고 나누는 separate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to combine two or more things so that they work together or become a single unit',
      synonyms: ['combine', 'incorporate', 'merge'],
      antonyms: ['separate', 'segregate', 'detach'],
      exampleSentences: [
        { en: 'The new curriculum aims to combine theoretical knowledge with practical skills.', ko: '새로운 교육 과정은 이론적 지식과 실무 기술을 통합하는 것을 목표로 합니다.' },
        { en: 'It takes time for immigrants to become a full part of a different culture.', ko: '이민자들이 다른 문화에 완전히 동화되는 데는 시간이 걸립니다.' },
      ],
    }
  ),
  word('intellectual', '지적인', 4, 'adjective',
    ['효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인'],
    tips({
      etymology: '라틴어 \'intellectus\'에서 유래했으며, \'inter(사이에)\'와 \'legere(고르다/읽다)\'가 합쳐져 사물 사이의 이치를 깨닫는 능력을 뜻합니다.',
      visual: '두꺼운 안경을 쓰고 서재에서 깊은 생각에 잠겨 책을 읽고 있는 학자의 모습을 상상해 보세요.',
      soundAlike: '\'인텔리\'라는 말 들어보셨죠? 지식인을 뜻하는 그 단어와 발음이 비슷해서 기억하기 쉽습니다.',
      context: '단순한 감정이나 육체적 활동보다는 논리, 사고, 학문적 탐구와 관련된 상황에서 주로 쓰입니다.',
      synonymAntonym: '머리가 좋다는 뜻의 mental과 비슷하지만, 좀 더 학구적이고 깊이 있는 사고력을 강조할 때 사용됩니다.',
    }),
    {
      definition: 'relating to the ability to think in a logical way and understand difficult ideas and subjects',
      synonyms: ['academic', 'scholarly', 'cerebral'],
      antonyms: ['physical', 'emotional', 'ignorant'],
      exampleSentences: [
        { en: 'The university provides a stimulating environment for academic and personal growth.', ko: '대학은 학문적이고 개인적인 성장을 위한 자극적인 환경을 제공합니다.' },
        { en: 'Solving complex puzzles requires a high level of mental effort and focus.', ko: '복잡한 퍼즐을 푸는 것은 높은 수준의 사고력과 집중력을 요구합니다.' },
      ],
    }
  ),
  word('intelligent', '지적인', 5, 'adjective',
    ['어리석은', '평범한', '둔감한', '무지한', '감정적인', '신체적인', '사회적인', '창의적인', '활동적인', '수동적인'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'legere(고르다)\'가 합쳐져 \'사물 사이의 이치를 골라내다\'라는 의미에서 유래했습니다.',
      visual: '두꺼운 안경을 쓰고 복잡한 수학 방정식을 막힘없이 풀어내는 과학자의 모습을 상상해 보세요.',
      soundAlike: '\'인텔리\'라는 말은 한국에서도 지식인을 뜻할 때 쓰이므로 \'인텔리전트\'는 똑똑한 상태를 의미합니다.',
      context: '인공지능(AI)의 I가 바로 이 단어의 약자로, 기계가 인간처럼 사고하는 능력을 갖췄음을 뜻합니다.',
      synonymAntonym: 'smart와 비슷하지만 더 학구적이고 깊은 사고력을 강조하며, 반대로는 stupid나 dull이 있습니다.',
    }),
    {
      definition: 'having the capacity to learn, understand, and apply knowledge or think abstractly',
      synonyms: ['brilliant', 'bright', 'knowledgeable'],
      antonyms: ['foolish', 'unintelligent', 'dense'],
      exampleSentences: [
        { en: 'The scientist proposed a highly sophisticated solution to the complex climate problem.', ko: '그 과학자는 복잡한 기후 문제에 대해 매우 지적인 해결책을 제안했습니다.' },
        { en: 'Dolphins are widely considered to be among the most gifted creatures in the ocean.', ko: '돌고래는 바다에서 가장 영리한 생명체 중 하나로 널리 여겨집니다.' },
      ],
    }
  ),
  word('intend', '-할', 6, 'noun',
    ['포기하다', '무시하다', '잊어버리다', '반대하다', '실패하다', '거절하다', '중단하다', '후회하다', '방해하다', '지연시키다'],
    tips({
      etymology: '라틴어 \'intendere\'에서 유래했으며, \'어딘가를 향해 마음을 뻗치다\'라는 의미를 담고 있습니다.',
      visual: '화살표가 과녁의 중심을 향해 곧게 뻗어 나가는 이미지를 떠올려 보세요.',
      soundAlike: '\'인텐드\' 발음이 \'안에(in) 텐트(tend)를 치려고 계획하다\'와 비슷하다고 연상해 보세요.',
      context: '주로 미래에 수행할 구체적인 계획이나 목적을 나타낼 때 사용되는 동사입니다.',
      synonymAntonym: '목표를 세우는 plan과 비슷하지만, 아무런 계획이 없는 neglect와는 반대됩니다.',
    }),
    {
      definition: 'to have a specific plan or purpose in mind when doing something',
      synonyms: ['plan', 'aim', 'mean'],
      antonyms: ['neglect', 'disregard', 'forget'],
      exampleSentences: [
        { en: 'We fully to finish the renovation project by the end of this month.', ko: '우리는 이번 달 말까지 개보수 작업을 끝낼 계획입니다.' },
        { en: 'The author did not to offend anyone with his controversial remarks.', ko: '작가는 자신의 논란이 되는 발언으로 누군가를 불쾌하게 할 의도는 없었습니다.' },
      ],
    }
  ),
  word('intense', '강렬한', 7, 'adjective',
    ['효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인'],
    tips({
      etymology: '라틴어 \'intendere\'에서 유래하여 \'안으로(in) 팽팽하게 당겨진(tend)\' 상태를 의미합니다.',
      visual: '태양의 뜨거운 열기나 운동선수의 이글거리는 눈빛처럼 에너지가 꽉 찬 모습을 상상하세요.',
      soundAlike: '발음이 \'인텐스\'인데, \'안(in)에 텐션(tension)이 가득하다\'고 연상하면 쉽습니다.',
      context: '감정, 빛, 열기, 혹은 짧은 시간 동안 집중적으로 이루어지는 훈련 등을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '강한 힘을 뜻하는 extreme과 유사하며, 힘이 빠진 상태인 mild와는 반대됩니다.',
    }),
    {
      definition: 'existing in an extreme degree or having a very strong effect on the senses or mind',
      synonyms: ['extreme', 'fierce', 'profound'],
      antonyms: ['mild', 'moderate', 'gentle'],
      exampleSentences: [
        { en: 'The heat from the desert sun became so powerful that we had to find shade immediately.', ko: '사막의 태양열이 너무 강렬해서 우리는 즉시 그늘을 찾아야만 했다.' },
        { en: 'Athletes undergo a period of concentrated training right before the Olympic Games begin.', ko: '운동선수들은 올림픽 경기가 시작되기 직전에 강도 높은 훈련 기간을 거친다.' },
      ],
    }
  ),
  word('intent', '의향', 4, 'noun',
    ['사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보'],
    tips({
      etymology: '라틴어 \'intentus\'에서 유래하여 마음을 한곳으로 \'팽팽하게 뻗치다\'라는 의미를 담고 있습니다.',
      visual: '화살이 과녁을 향해 팽팽하게 당겨진 활시위처럼 목표를 향한 확고한 마음을 상상해 보세요.',
      soundAlike: '\'인텐트\'는 \'안에(in) 텐트(tent)를 치겠다\'는 확고한 의지를 가진 캠퍼의 모습을 연상시킵니다.',
      context: '법률이나 공식적인 상황에서 단순한 생각보다 더 강한 목적의식을 나타낼 때 자주 쓰입니다.',
      synonymAntonym: '목표를 뜻하는 purpose와 비슷하지만, 마음속의 동기나 의지를 더 강조하는 표현입니다.',
    }),
    {
      definition: 'The purpose or objective that a person has in mind when performing an action.',
      synonyms: ['intention', 'aim', 'purpose'],
      antonyms: ['accident', 'chance', 'indifference'],
      exampleSentences: [
        { en: 'The suspect claimed that he had no harmful motive or criminal purpose behind his actions.', ko: '용의자는 자신의 행동 뒤에 해로운 동기나 범죄적 의도가 없었다고 주장했습니다.' },
        { en: 'She listened to the lecture with such fixed attention that her serious resolve was clear to everyone.', ko: '그녀는 매우 집중해서 강의를 들었기에 그녀의 진지한 의향이 모두에게 분명히 전달되었습니다.' },
      ],
    }
  ),
  word('interact', '작용하다', 5, 'verb',
    ['시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다'],
    tips({
      etymology: '사이를 뜻하는 \'inter\'와 행동을 뜻하는 \'act\'가 합쳐져 서로 영향을 주고받는다는 의미가 됩니다.',
      visual: '두 사람이 서로 마주 보고 대화하거나 기계의 버튼을 눌러 반응을 확인하는 모습을 상상하세요.',
      soundAlike: '인터랙트(interact) - 인터넷(internet)에서 서로 \'액트(act)\'하며 소통하는 모습을 떠올려 보세요.',
      context: '사람 간의 소통뿐만 아니라 약물이 몸속에서 반응하거나 컴퓨터 프로그램이 사용자와 소통할 때도 쓰입니다.',
      synonymAntonym: 'communicate와 비슷하지만, 단순히 말을 전하는 것을 넘어 상호작용한다는 점이 다릅니다.',
    }),
    {
      definition: 'to communicate with or react to someone or something, often while performing a joint activity',
      synonyms: ['communicate', 'connect', 'interface'],
      antonyms: ['ignore', 'avoid', 'disconnect'],
      exampleSentences: [
        { en: 'The teacher encouraged the students to share their ideas and engage with one another during the group project.', ko: '선생님은 학생들이 그룹 프로젝트를 하는 동안 아이디어를 공유하고 서로 소통하도록 격려했습니다.' },
        { en: 'Scientists are studying how these two chemical substances react when they are mixed together in a controlled environment.', ko: '과학자들은 통제된 환경에서 이 두 화학 물질이 혼합될 때 어떻게 상호작용하는지 연구하고 있습니다.' },
      ],
    }
  ),
  word('interest', '흥미', 6, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'esse(있다)\'가 합쳐져 \'사이에 존재하며 관계가 있다\'는 뜻에서 유래했습니다.',
      visual: '박물관에서 눈을 반짝이며 전시물을 뚫어지게 쳐다보는 관람객의 모습을 상상해 보세요.',
      soundAlike: '\'인터레스트\' 발음이 \'안에(in) 들어(ter) 있다\'와 비슷하니 마음속에 호기심이 들어있다고 외우세요.',
      context: '취미나 학업뿐만 아니라 은행 예금에 붙는 \'이자\'라는 뜻으로도 자주 쓰입니다.',
      synonymAntonym: '무언가에 끌리는 curiosity와 반대로 아무런 감정이 없는 indifference를 함께 기억하세요.',
    }),
    {
      definition: 'the feeling of wanting to give your attention to something or of wanting to be involved with and to discover more about it',
      synonyms: ['curiosity', 'attention', 'enthusiasm'],
      antonyms: ['indifference', 'apathy', 'boredom'],
      exampleSentences: [
        { en: 'The young student showed a great deal of curiosity and passion for ancient history.', ko: '그 어린 학생은 고대사에 대해 아주 많은 흥미와 열정을 보였다.' },
        { en: 'Finding a hobby that captures your full attention can significantly reduce daily stress.', ko: '당신의 온전한 관심을 사로잡는 취미를 찾는 것은 일상의 스트레스를 크게 줄여줄 수 있다.' },
      ],
    }
  ),
  word('interfere', '간섭하다', 7, 'verb',
    ['방조하다', '장려하다', '촉진하다', '방관하다', '협조하다', '무시하다', '허용하다', '승인하다', '지탱하다', '분리하다'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'ferire(치다)\'가 결합되어 남의 일 사이에 끼어들어 타격을 준다는 의미에서 유래했습니다.',
      visual: '두 사람이 대화하고 있는데 갑자기 제삼자가 손을 쑥 내밀어 대화의 흐름을 끊는 장면을 상상해 보세요.',
      soundAlike: '\'인터(Inter) 피어(fere)\' -> \'인터\'넷 창이 자꾸 \'피어\'올라 작업을 방해하고 간섭하는 상황으로 기억하세요.',
      context: '주로 부정적인 영향력을 행사하거나 원치 않는 참견을 할 때 사용되며, 전치사 with와 자주 어울려 쓰입니다.',
      synonymAntonym: '남의 일에 끼어드는 meddle과 유의어이며, 전혀 관여하지 않고 내버려 두는 disregard와 반대됩니다.',
    }),
    {
      definition: 'to involve oneself in a situation without invitation or necessity, often causing an obstruction',
      synonyms: ['meddle', 'intervene', 'intrude'],
      antonyms: ['assist', 'ignore', 'facilitate'],
      exampleSentences: [
        { en: 'Constant noise from the construction site began to disrupt and affect my ability to concentrate on work.', ko: '공사 현장의 끊임없는 소음이 내 업무 집중 능력을 방해하고 간섭하기 시작했다.' },
        { en: 'Parents should be careful not to intrude too much in their adult children\'s personal decisions.', ko: '부모는 성인이 된 자녀의 개인적인 결정에 너무 많이 간섭하지 않도록 주의해야 한다.' },
      ],
    }
  ),
  word('intermediate', '중간의', 4, 'adjective',
    ['기본적인', '고급의', '초보의', '극단적인', '최종의', '시작의', '복잡한', '단순한', '영구적인', '일시적인'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'medius(중간)\'가 합쳐져 둘 사이의 지점을 의미합니다.',
      visual: '샌드위치 속 재료가 빵과 빵 사이에 끼어 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인터미디엇\'이므로 \'인터넷 미디어의 중간 단계\'라고 연상해 보세요.',
      context: '언어 학습에서 입문자와 숙련자 사이의 실력을 가진 사람을 부를 때 자주 쓰입니다.',
      synonymAntonym: '중간을 뜻하는 middle과 비슷하지만, 초보와 고급 사이의 단계를 말할 때 더 적절합니다.',
    }),
    {
      definition: 'Located or occurring between two points, stages, or things in a sequence.',
      synonyms: ['midway', 'transitional', 'central'],
      antonyms: ['beginner', 'advanced', 'extreme'],
      exampleSentences: [
        { en: 'Students in the second year usually attend classes at an level between basic and advanced.', ko: '2학년 학생들은 보통 기초와 고급 사이의 중간 단계 수업을 듣습니다.' },
        { en: 'The path requires a moderate amount of skill, making it perfect for hikers with some experience.', ko: '그 경로는 적당한 기술을 요구하므로 어느 정도 경험이 있는 중간 수준의 등산객들에게 완벽합니다.' },
      ],
    }
  ),
  word('internal', '내부의', 5, 'adjective',
    ['외부의', '표면적인', '일시적인', '공식적인', '수평의', '수직의', '상대적인', '절대적인', '구체적인', '추상적인'],
    tips({
      etymology: '라틴어 \'internus\'에서 유래했으며, 안쪽을 뜻하는 \'inter\'가 포함되어 있습니다.',
      visual: '상자 안에 소중한 물건이 담겨 있는 모습을 상상해 보세요.',
      soundAlike: '인터널(internal)은 \'인터넷(internet)\'처럼 안으로 연결된 망을 떠올리면 쉽습니다.',
      context: '회사의 내부 규정이나 인체의 내부 장기를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '안쪽을 뜻하는 inner와 반대되는 바깥쪽의 external을 함께 기억하세요.',
    }),
    {
      definition: 'Located on the inside of something or relating to the inner parts of a body or organization.',
      synonyms: ['inner', 'interior', 'inside'],
      antonyms: ['external', 'outer', 'exterior'],
      exampleSentences: [
        { en: 'The doctor performed a scan to check for any internal injuries after the accident.', ko: '의사는 사고 후 내부 부상이 있는지 확인하기 위해 정밀 검사를 실시했습니다.' },
        { en: 'The company is conducting an internal investigation into the missing funds.', ko: '그 회사는 사라진 자금에 대해 내부 조사를 진행하고 있습니다.' },
      ],
    }
  ),
  word('international', '국제적인', 6, 'adjective',
    ['국내의', '지역적인', '사적인', '내부의', '고립된', '전통적인', '일시적인', '독립적인', '제한된', '폐쇄적인'],
    tips({
      etymology: '접두사 inter(~사이에)와 nation(국가)이 결합되어 여러 나라 사이의 관계를 나타냅니다.',
      visual: '공항 터미널 전광판에 전 세계 도시 이름이 가득 떠 있는 장면을 상상해 보세요.',
      soundAlike: '인터내셔널 - \'인터넷\'처럼 전 세계가 하나로 연결된 느낌으로 기억하세요.',
      context: '무역, 스포츠 경기, 외교 등 두 나라 이상이 참여하는 모든 활동에 쓰입니다.',
      synonymAntonym: 'global과 유사하며, 한 국가 내에 한정된 domestic과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Involving two or more nations, or extending across national boundaries.',
      synonyms: ['global', 'worldwide', 'universal'],
      antonyms: ['domestic', 'local', 'national'],
      exampleSentences: [
        { en: 'The airport handles hundreds of flights to various foreign destinations every day.', ko: '그 공항은 매일 다양한 해외 목적지로 향하는 수백 편의 항공편을 처리합니다.' },
        { en: 'Athletes from all over the world gathered to compete in the prestigious sporting event.', ko: '전 세계의 운동선수들이 이 명망 있는 스포츠 대회에서 경쟁하기 위해 모였습니다.' },
      ],
    }
  ),
  word('interpret', '해석하다', 7, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '라틴어 \'interpretari\'에서 유래했으며, \'inter(사이에)\'와 \'pres(가치/중개)\'가 결합되어 두 언어나 의미 사이를 중개한다는 뜻을 가집니다.',
      visual: '외국인 두 명 사이에서 손짓을 섞어가며 열심히 의미를 전달하는 통역사의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인터-프릿\'과 유사하므로, \'인터넷(inter)에서 정보를 풀이(pret)하다\'라고 연상하면 쉽습니다.',
      context: '단순한 번역을 넘어 예술 작품의 의도나 데이터의 숨겨진 의미를 파악할 때 주로 사용됩니다.',
      synonymAntonym: '설명하는 clarify와 반대되는 오해하는 misunderstand를 묶어서 기억하면 효과적입니다.',
    }),
    {
      definition: 'to explain the meaning of information, words, or actions in a particular way',
      synonyms: ['clarify', 'decipher', 'translate'],
      antonyms: ['misunderstand', 'confuse', 'obscure'],
      exampleSentences: [
        { en: 'The data is difficult to understand because different analysts can read the results in various ways.', ko: '분석가마다 결과를 다양한 방식으로 이해할 수 있기 때문에 그 데이터는 설명하기 어렵습니다.' },
        { en: 'A professional was hired to translate the speaker\'s gestures and words for the audience.', ko: '청중을 위해 연사의 몸짓과 말을 풀이해 줄 전문가가 고용되었습니다.' },
      ],
    }
  ),
  word('interrupt', '훼방놓다', 4, 'noun',
    ['계속하다', '유지하다', '관찰하다', '동의하다', '허락하다', '수행하다', '보호하다', '발전하다', '조절하다', '존중하다'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'rumpere(깨다)\'가 합쳐져 흐름을 깨고 들어온다는 의미가 되었습니다.',
      visual: '영화 상영 중에 갑자기 누군가 스크린 앞을 가로질러 지나가는 장면을 상상해 보세요.',
      soundAlike: '\'인터럽트\'는 대화 중간에 \'턱\' 하고 걸리는 느낌의 발음과 비슷합니다.',
      context: '회의 중이나 통화 중에 상대방의 말을 끊고 들어올 때 가장 자주 쓰이는 표현입니다.',
      synonymAntonym: '흐름을 끊는 disrupt와 유사하며, 멈추지 않고 잇는 resume와 반대됩니다.',
    }),
    {
      definition: 'To stop the continuous progress of an activity or process by breaking in with a comment or action.',
      synonyms: ['disrupt', 'disturb', 'intervene'],
      antonyms: ['continue', 'resume', 'persist'],
      exampleSentences: [
        { en: 'Please do not break the flow of the presentation while the speaker is talking.', ko: '발표자가 말하는 동안 발표의 흐름을 방해하지 말아 주세요.' },
        { en: 'A sudden loud noise outside caused the teacher to stop her lecture for a moment.', ko: '밖에서 들려온 갑작스러운 큰 소음 때문에 선생님은 잠시 강의를 중단해야 했습니다.' },
      ],
    }
  ),
  word('interval', '간격', 5, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'vallum(성벽)\'이 합쳐져 성벽 사이의 빈 공간을 의미하게 되었습니다.',
      visual: '기차역 전광판에서 다음 열차가 오기까지 비어있는 시간표의 빈칸을 상상해 보세요.',
      soundAlike: '\'인터벌\' 트레이닝을 떠올려 보세요. 격렬한 운동 사이에 짧은 휴식 시간을 두는 운동법입니다.',
      context: '음악에서는 두 음 사이의 높이 차이를, 수학이나 일상에서는 시간이나 거리의 틈을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'gap이나 pause와 비슷하지만, 정기적으로 반복되는 틈이라는 뉘앙스가 강하며 반대말로는 continuity가 있습니다.',
    }),
    {
      definition: 'A period of time or a distance between two events, objects, or points.',
      synonyms: ['gap', 'pause', 'break'],
      antonyms: ['continuation', 'continuity', 'permanence'],
      exampleSentences: [
        { en: 'The runners started the race at a five-minute gap to avoid crowding on the track.', ko: '주자들은 트랙이 붐비는 것을 피하기 위해 5분 간격으로 경주를 시작했습니다.' },
        { en: 'There will be a short break between the first and second acts of the play.', ko: '연극의 1막과 2막 사이에 짧은 휴식 시간이 있을 예정입니다.' },
      ],
    }
  ),
  word('intervene', '사이에', 10, 'noun',
    ['방해', '중재', '간섭', '조정', '개입', '차단', '중단', '협상', '관여', '화해'],
    tips({
      etymology: '라틴어 \'inter(사이에)\'와 \'venire(오다)\'가 합쳐져 어떤 상황의 중간에 끼어든다는 의미를 가집니다.',
      visual: '싸우고 있는 두 친구 사이에 한 사람이 들어가 양팔을 벌려 말리는 장면을 상상해 보세요.',
      soundAlike: '\'인터빈\'은 \'인터(Inter) 공간을 비우다(Bin)\'처럼 들리기도 하니, 공간 사이에 들어가 자리를 비우게 만든다고 외워보세요.',
      context: '주로 분쟁을 해결하거나 상황이 악화되는 것을 막기 위해 제삼자가 나설 때 사용됩니다.',
      synonymAntonym: '중재하다라는 뜻의 mediate와 비슷하지만, 방치하다라는 뜻의 ignore와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to intentionally become involved in a difficult situation in order to improve it or prevent it from getting worse',
      synonyms: ['mediate', 'intercede', 'arbitrate'],
      antonyms: ['ignore', 'disregard', 'overlook'],
      exampleSentences: [
        { en: 'The government had to step in and act quickly to prevent the strike from escalating.', ko: '정부는 파업이 악화되는 것을 막기 위해 신속하게 개입해야 했습니다.' },
        { en: 'A passerby decided to help when he saw the two motorists arguing loudly on the street.', ko: '한 행인은 거리에서 두 운전자가 크게 다투는 것을 보고 중재하기로 결심했습니다.' },
      ],
    }
  ),
  word('intimate', '친밀한', 6, 'adjective',
    ['예외적인', '안정적인', '불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한'],
    tips({
      etymology: '라틴어 \'intimus\'에서 유래했으며, \'가장 안쪽의\'라는 뜻을 담고 있어 마음 깊은 곳까지 아는 사이를 뜻합니다.',
      visual: '벽난로 앞에 두 사람이 아주 가까이 앉아 속삭이며 비밀을 나누는 따뜻한 장면을 상상해 보세요.',
      soundAlike: '\'인티메이트\' 발음이 \'안에(in) 티(tea) 메이트(mate)\'처럼 들리니, 안에서 차를 마시는 단짝 친구를 떠올려 보세요.',
      context: '단순히 친한 사이를 넘어 사적인 비밀을 공유하거나 매우 개인적인 분위기를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '가까운 사이인 close와 유의어이며, 거리가 멀고 격식적인 distant와는 반대되는 개념입니다.',
    }),
    {
      definition: 'marked by very close association, contact, or familiarity with another person',
      synonyms: ['close', 'familiar', 'confidential'],
      antonyms: ['distant', 'formal', 'remote'],
      exampleSentences: [
        { en: 'The restaurant provided an ideal setting for an intimate dinner for two.', ko: '그 식당은 두 사람만의 친밀한 저녁 식사를 위한 이상적인 환경을 제공했습니다.' },
        { en: 'They shared an intimate knowledge of each other\'s childhood dreams.', ko: '그들은 서로의 어린 시절 꿈에 대해 아주 잘 알고 있었습니다.' },
      ],
    }
  ),
  word('into', '-안으로', 1, 'noun',
    ['밖으로', '위로', '아래로', '옆에', '너머로', '사이에', '뒤에', '앞에', '주위에', '가로질러'],
    tips({
      etymology: '안을 뜻하는 in과 방향을 뜻하는 to가 결합되어 내부로 향하는 움직임을 나타냅니다.',
      visual: '공이 상자 안으로 굴러 들어가는 화살표 모양의 그림을 상상해 보세요.',
      soundAlike: '인투(into)는 \'인투(in-to) 내부로\'라고 소리 내어 읽으며 방향성을 익히세요.',
      context: '단순히 위치가 안에 있는 것이 아니라, 밖에서 안으로 들어가는 역동적인 변화에 쓰입니다.',
      synonymAntonym: '내부로 향하는 inside와 반대로 밖으로 나가는 out of를 비교해 보세요.',
    }),
    {
      definition: 'Expressing movement or action with the result that someone or something becomes enclosed or surrounded by something else.',
      synonyms: ['inside', 'within', 'inward'],
      antonyms: ['out of', 'outside', 'away from'],
      exampleSentences: [
        { en: 'She walked slowly into the dark room to find her keys.', ko: '그녀는 열쇠를 찾기 위해 어두운 방 안으로 천천히 걸어 들어갔다.' },
        { en: 'The caterpillar transformed into a beautiful butterfly after several weeks.', ko: '애벌레는 몇 주 후에 아름다운 나비로 변했다.' },
      ],
    }
  ),
  word('intrigue', '음모', 8, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '라틴어 \'intricare\'에서 유래하여 \'얽히게 하다\'라는 뜻에서 남을 속이려는 복잡한 계획이라는 의미로 발전했습니다.',
      visual: '어두운 방 안에서 여러 명의 사람들이 지도를 펼쳐놓고 비밀스럽게 속삭이는 장면을 상상해 보세요.',
      soundAlike: '\'안(in)에 틀(trigue)을 짜다\'라고 연상하면 내부에서 몰래 꾸미는 음모라는 뜻을 기억하기 쉽습니다.',
      context: '정치 드라마나 역사 소설에서 권력을 잡기 위해 몰래 꾸미는 수작을 묘사할 때 자주 등장합니다.',
      synonymAntonym: '비밀스러운 계획인 plot과 유사하며, 모든 것이 투명하게 공개된 상태인 honesty와는 반대됩니다.',
    }),
    {
      definition: 'a secret plan or scheme intended to harm or deceive others, often within a political context',
      synonyms: ['conspiracy', 'plot', 'machination'],
      antonyms: ['honesty', 'openness', 'transparency'],
      exampleSentences: [
        { en: 'The royal court was filled with political intrigue and betrayal.', ko: '왕실 조정은 정치적 음모와 배신으로 가득 차 있었다.' },
        { en: 'Detectives uncovered a complex intrigue to embezzle funds from the corporation.', ko: '형사들은 기업의 자금을 횡령하려는 복잡한 음모를 밝혀냈다.' },
      ],
    }
  ),
  word('introduce', '안으로', 2, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '라틴어 \'intro(안으로)\'와 \'ducere(이끌다)\'가 합쳐져 누군가를 안으로 데려온다는 의미에서 유래했습니다.',
      visual: '파티장에 처음 온 친구의 손을 잡고 거실 안으로 데려가 사람들에게 보여주는 장면을 상상하세요.',
      soundAlike: '\'인투(into) + 듀스(produce)\'와 비슷하게 들리며, 안으로 새로운 것을 내놓는 느낌으로 기억하세요.',
      context: '새로운 기술을 시장에 선보이거나, 처음 만난 사람들을 서로 알게 할 때 주로 사용합니다.',
      synonymAntonym: 'present와 유사하며, 이미 알고 있는 상태를 유지하는 것과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To present a person or thing to someone for the first time to make them known.',
      synonyms: ['present', 'launch', 'acquaint'],
      antonyms: ['withdraw', 'remove', 'conceal'],
      exampleSentences: [
        { en: 'The host will formally present the guest speaker to the audience before the lecture begins.', ko: '사회자는 강연이 시작되기 전 청중에게 초청 강연자를 공식적으로 소개할 것입니다.' },
        { en: 'The tech company plans to bring a revolutionary smartphone to the global market next month.', ko: '그 기술 기업은 다음 달 세계 시장에 혁신적인 스마트폰을 선보일 계획입니다.' },
      ],
    }
  ),
  word('invade', '침입하다', 7, 'verb',
    ['방어하다', '보호하다', '후퇴하다', '협상하다', '항복하다', '구조하다', '치료하다', '건설하다', '조사하다', '수리하다'],
    tips({
      etymology: '라틴어 \'invadere\'에서 유래했으며, \'in(안으로)\'과 \'vadere(가다)\'가 합쳐져 경계를 넘어 들어간다는 의미를 가집니다.',
      visual: '성벽을 넘어 몰려오는 군대나 허락 없이 방 안으로 들이닥치는 낯선 사람의 이미지를 떠올려 보세요.',
      soundAlike: '발음이 \'인베이드\'이므로, \'안(in)을 베어(vade)버리며 들어오다\'라고 연상하면 쉽습니다.',
      context: '전쟁 상황뿐만 아니라 사생활 침해나 바이러스의 몸속 침투를 설명할 때도 자주 쓰입니다.',
      synonymAntonym: '공격적인 침입은 intrude, 반대로 지키고 막아내는 것은 defend라고 합니다.',
    }),
    {
      definition: 'to enter a country or place by force with an army in order to take control of it',
      synonyms: ['occupy', 'conquer', 'intrude'],
      antonyms: ['defend', 'protect', 'withdraw'],
      exampleSentences: [
        { en: 'The enemy troops planned to cross the border and take over the capital city.', ko: '적군은 국경을 넘어 수도를 점령할 계획을 세웠습니다.' },
        { en: 'Bacteria can enter the body through a small cut and cause a serious infection.', ko: '박테리아는 작은 상처를 통해 몸속으로 침투하여 심각한 감염을 일으킬 수 있습니다.' },
      ],
    }
  ),
  word('invent', '발명하다', 4, 'verb',
    ['파괴하다', '모방하다', '빌리다', '수리하다', '보존하다', '무시하다', '반복하다', '조사하다', '운반하다', '거절하다'],
    tips({
      etymology: '라틴어 \'invenire\'에서 유래했으며, \'안으로(in)\' \'오다(venire)\'라는 의미가 합쳐져 새로운 것을 찾아내거나 만들어낸다는 뜻이 되었습니다.',
      visual: '에디슨이 어두운 방 안에서 반짝이는 전구를 처음으로 완성해 들고 있는 모습을 상상해 보세요.',
      soundAlike: '\'인벤트\'는 \'안(in)에 벤트(vent, 통로)\'를 새로 뚫는 것처럼 없던 길을 새로 만드는 소리로 기억하세요.',
      context: '과학 기술뿐만 아니라 변명이나 이야기를 지어낼 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: '새로운 것을 만드는 create와 비슷하지만, 이미 있는 것을 없애는 destroy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to create or design something that has not existed before',
      synonyms: ['create', 'originate', 'devise'],
      antonyms: ['destroy', 'copy', 'imitate'],
      exampleSentences: [
        { en: 'Thomas Edison managed to create a long-lasting electric light bulb after many failed attempts.', ko: '토마스 에디슨은 수많은 실패 끝에 오래 지속되는 전구를 발명해냈습니다.' },
        { en: 'The young programmer decided to develop a new application that helps people track their daily water intake.', ko: '그 젊은 프로그래머는 사람들이 매일의 수분 섭취량을 추적할 수 있도록 돕는 새로운 앱을 발명하기로 결심했습니다.' },
      ],
    }
  ),
  word('invest', '투자하다', 5, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '라틴어 \'investire\'에서 유래했으며, 원래는 \'옷을 입히다\'라는 뜻이었으나 자본을 투입하여 새로운 권리를 입힌다는 의미로 확장되었습니다.',
      visual: '금전이나 시간을 씨앗처럼 땅에 심어서 나중에 커다란 나무로 자라나는 이미지를 상상해 보세요.',
      soundAlike: '\'인베스트\'는 \'안(in)에 베스트(best)를 넣다\'라고 연상하여, 최고의 결과를 위해 자원을 넣는 행위로 기억하세요.',
      context: '주식이나 부동산 같은 금융 자산뿐만 아니라, 자기 계발을 위해 시간을 쓰는 상황에서도 자주 쓰입니다.',
      synonymAntonym: '자금을 투입하는 \'spend\'나 \'allocate\'와 비슷하지만, 단순히 쓰는 것이 아니라 미래의 이익을 기대한다는 점이 다릅니다.',
    }),
    {
      definition: 'to put money, effort, or time into something to make a profit or get an advantage',
      synonyms: ['venture', 'capitalize', 'endow'],
      antonyms: ['divest', 'withdraw', 'squander'],
      exampleSentences: [
        { en: 'Many young professionals decide to put their savings into the stock market to grow their wealth.', ko: '많은 젊은 전문가들이 부를 늘리기 위해 저축한 돈을 주식 시장에 투자하기로 결정합니다.' },
        { en: 'The company plans to spend a significant amount of resources on research and development next year.', ko: '그 회사는 내년에 연구 개발에 상당한 양의 자원을 투자할 계획입니다.' },
      ],
    }
  ),
  word('investigate', '조사하다', 6, 'verb',
    ['정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다'],
    tips({
      etymology: '라틴어 \'investigare\'에서 유래했으며, \'발자국(vestigium)을 따라가다\'라는 의미에서 진실을 찾아내는 조사의 의미가 되었습니다.',
      visual: '돋보기를 들고 바닥에 떨어진 작은 단서나 발자국을 꼼꼼히 살피는 탐정의 모습을 상상해 보세요.',
      soundAlike: '\'인베스티게이트\'에서 \'베스티(bestie)\'를 찾아보세요. 가장 친한 친구의 비밀을 캐내기 위해 조사하는 상황을 떠올리면 쉽습니다.',
      context: '경찰이 범죄 사건을 파헤치거나 과학자가 현상의 원인을 분석할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'examine이나 inspect와 비슷하지만, 더 깊이 있는 탐구의 뉘앙스가 강하며 반대로는 대충 훑어보는 overlook이 있습니다.',
    }),
    {
      definition: 'to carry out a systematic or formal inquiry to discover and examine the facts of an incident, allegation, or academic problem',
      synonyms: ['examine', 'inspect', 'scrutinize'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The police are working hard to discover the cause of the mysterious accident.', ko: '경찰은 그 신비한 사고의 원인을 규명하기 위해 열심히 조사하고 있습니다.' },
        { en: 'Scientists need to explore the long-term effects of this new medication on patients.', ko: '과학자들은 이 신약이 환자들에게 미치는 장기적인 영향을 조사해야 합니다.' },
      ],
    }
  ),
  word('invite', '초대하다', 3, 'verb',
    ['확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다'],
    tips({
      etymology: '라틴어 \'invitare\'에서 유래했으며, \'안으로(in)\' \'오게 하다\'라는 의미를 담고 있습니다.',
      visual: '생일 파티를 위해 친구들에게 예쁜 카드를 건네며 집으로 들어오라고 손짓하는 모습을 상상해 보세요.',
      soundAlike: '\'인바이트\'는 \'인(안으로) 봐(보러) 이트(와이트)\'처럼 안으로 들어오라고 권하는 소리로 기억하세요.',
      context: '주로 파티, 식사, 행사 등에 누군가를 정중하게 부를 때 사용하며, 때로는 특정한 반응을 유도한다는 의미로도 쓰입니다.',
      synonymAntonym: '환영하며 부르는 \'welcome\'과 비슷하지만, 거절하거나 내쫓는 \'reject\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to ask someone in a polite or friendly way to come somewhere or to do something',
      synonyms: ['summon', 'welcome', 'bid'],
      antonyms: ['reject', 'exclude', 'repel'],
      exampleSentences: [
        { en: 'The couple decided to ask all their close friends to their wedding ceremony next month.', ko: '그 커플은 다음 달 결혼식에 모든 가까운 친구들을 초대하기로 결정했습니다.' },
        { en: 'She plans to call her neighbors over for a small dinner party this weekend.', ko: '그녀는 이번 주말에 이웃들을 작은 저녁 식사 파티에 초대할 계획입니다.' },
      ],
    }
  ),
  word('involve', '말아넣다', 7, 'noun',
    ['제외하다', '분리하다', '거절하다', '방치하다', '해방하다', '무시하다', '삭제하다', '단절하다', '정지하다', '배제하다'],
    tips({
      etymology: '라틴어 \'in(안으로)\'과 \'volvere(굴리다/말다)\'가 합쳐져 무언가를 안으로 말아 넣는다는 느낌을 줍니다.',
      visual: '반죽 속에 건포도를 넣고 돌돌 말아 하나로 섞는 모습을 상상해 보세요.',
      soundAlike: '\'인볼브\' 발음이 \'안(in)에 볼(ball)을 넣다\'와 비슷해 무언가를 포함시키는 상황이 연상됩니다.',
      context: '어떤 활동이나 사건의 핵심 요소로 포함시키거나 연루시킬 때 주로 사용됩니다.',
      synonymAntonym: 'include와 유사하지만, 단순 포함을 넘어 깊은 관련성을 맺을 때 씁니다. 반대로 exclude는 밖으로 밀어내는 것입니다.',
    }),
    {
      definition: 'to include someone or something as a necessary part or result of an activity or situation',
      synonyms: ['include', 'entail', 'implicate'],
      antonyms: ['exclude', 'omit', 'detach'],
      exampleSentences: [
        { en: 'The new project will require a team that can handle tasks which necessitate high levels of collaboration.', ko: '새 프로젝트는 높은 수준의 협력을 필요로 하는 업무들을 포함하는 팀을 요구할 것입니다.' },
        { en: 'Successful management often requires making decisions that affect every department in the company.', ko: '성공적인 경영은 종종 회사의 모든 부서에 영향을 미치는 결정을 내리는 것을 수반합니다.' },
      ],
    }
  ),
  word('iron', '쇠', 4, 'noun',
    ['나무', '플라스틱', '유리', '종이', '고무', '가죽', '직물', '구리', '알루미늄', '석고'],
    tips({
      etymology: '고대 영어 \'isern\'에서 유래했으며, 아주 단단하고 강한 금속을 뜻하는 어원을 가지고 있습니다.',
      visual: '뜨거운 용광로에서 붉게 달궈진 단단한 쇳덩어리나 옷의 주름을 펴는 무거운 다리미를 상상해 보세요.',
      soundAlike: '발음이 \'아이언\'과 유사하므로 영화 캐릭터 \'아이언맨\'의 강철 수트를 떠올리면 쉽습니다.',
      context: '건축 자재로서의 철광석뿐만 아니라 가전제품인 다리미를 지칭할 때도 흔히 쓰입니다.',
      synonymAntonym: '강인함을 뜻하는 steel과 비슷하지만, 부드러움을 뜻하는 silk와는 반대되는 질감을 가집니다.',
    }),
    {
      definition: 'A strong, hard magnetic silvery-gray metal used as a structural material or in making steel.',
      synonyms: ['steel', 'metal', 'appliance'],
      antonyms: ['plastic', 'wood', 'fabric'],
      exampleSentences: [
        { en: 'The old gate was crafted from heavy black metal that had started to rust.', ko: '그 오래된 문은 녹이 슬기 시작한 무거운 검은 쇠로 만들어졌다.' },
        { en: 'Modern skyscrapers are supported by massive beams made of this durable material.', ko: '현대적인 마천루들은 이 내구성 있는 재질로 만들어진 거대한 보들에 의해 지탱된다.' },
      ],
    }
  ),
  word('irony', '반어', 5, 'noun',
    ['진심', '직설', '일치', '정직', '사실', '동의', '확신', '증명', '결과', '조화'],
    tips({
      etymology: '그리스어 \'eironeia(위장)\'에서 유래하여, 겉으로 드러난 말과 실제 속뜻이 다른 상태를 의미합니다.',
      visual: '소방서에 불이 난 장면이나 경찰서가 털리는 모순적인 상황을 상상해 보세요.',
      soundAlike: '\'아이러니\'라고 그대로 읽히며, 우리가 일상에서 \'참 아이러니하다\'라고 말할 때의 그 느낌입니다.',
      context: '기대했던 결과와 정반대의 상황이 벌어질 때나 비꼬는 유머를 구사할 때 자주 쓰입니다.',
      synonymAntonym: 'sarcasm과 비슷하게 비꼬는 뉘앙스가 있지만, sincerity와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A situation or statement characterized by a significant difference between appearance and reality, or where the outcome is the opposite of what was expected.',
      synonyms: ['paradox', 'sarcasm', 'satire'],
      antonyms: ['sincerity', 'logic', 'consistency'],
      exampleSentences: [
        { en: 'The fire station burning down is a perfect example of a tragic coincidence and situational contradiction.', ko: '소방서가 불타버린 것은 비극적인 우연이자 상황적 모순의 완벽한 예시입니다.' },
        { en: 'Her voice was full of subtle mockery when she congratulated her rival on the loss.', ko: '그녀가 라이벌의 패배를 축하할 때 그녀의 목소리에는 미묘한 비꼼이 가득했습니다.' },
      ],
    }
  ),
  word('irritate', '하다', 6, 'verb',
    ['진정시키다', '위로하다', '칭찬하다', '격려하다', '동의하다', '기쁘게하다', '환영하다', '무시하다', '이해하다', '존중하다'],
    tips({
      etymology: '라틴어 irritare에서 유래했으며 \'자극하다\' 혹은 \'흥분시키다\'라는 의미를 뿌리에 두고 있습니다.',
      visual: '눈에 모래가 들어가서 계속 비비고 싶어지거나 피부가 빨갛게 부어오른 불편한 상태를 상상해 보세요.',
      soundAlike: '발음이 \'이리 퉤\'와 비슷하죠? 누군가 침을 뱉는 무례한 행동을 해서 짜증이 나는 상황을 연상해 보세요.',
      context: '피부 발진처럼 물리적인 자극을 줄 때나, 반복되는 소음이 신경을 건드릴 때 주로 사용합니다.',
      synonymAntonym: 'annoy와 유사하지만 irritate는 조금 더 지속적이고 신체적인 자극까지 포함하며, soothe는 이를 가라앉히는 반대말입니다.',
    }),
    {
      definition: 'To cause someone to feel impatient, angry, or annoyed, or to make a part of the body sore.',
      synonyms: ['annoy', 'exasperate', 'aggravate'],
      antonyms: ['soothe', 'mollify', 'pacify'],
      exampleSentences: [
        { en: 'The constant dripping of the faucet began to provoke and bother him throughout the night.', ko: '수도꼭지에서 계속 떨어지는 물소리가 밤새도록 그를 짜증 나게 하기 시작했다.' },
        { en: 'Harsh chemicals in some laundry detergents can often inflame sensitive skin.', ko: '일부 세탁 세제의 강한 화학 성분은 종종 민감한 피부를 자극할 수 있다.' },
      ],
    }
  ),
  word('isolate', '고립시키다', 7, 'verb',
    ['변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다'],
    tips({
      etymology: '라틴어 \'insula(섬)\'에서 유래했습니다. 육지에서 떨어진 섬처럼 따로 떼어놓는 것을 의미합니다.',
      visual: '전염병 환자를 다른 사람들과 멀리 떨어진 1인용 병실에 혼자 두는 장면을 상상해 보세요.',
      soundAlike: '\'아이스(Ice) + 레이트\'로 발음되니, 얼음판 위에 혼자 미끄러져 멀어진 상황을 떠올려 보세요.',
      context: '과학 실험에서 특정 변수만을 따로 떼어내어 관찰하거나, 컴퓨터 네트워크에서 바이러스를 격리할 때 자주 쓰입니다.',
      synonymAntonym: '혼자 두는 것은 segregate, 함께 섞는 것은 integrate라고 합니다.',
    }),
    {
      definition: 'to separate someone or something from other people or things',
      synonyms: ['separate', 'segregate', 'detach'],
      antonyms: ['integrate', 'combine', 'unite'],
      exampleSentences: [
        { en: 'Scientists managed to identify and separate the specific gene responsible for the disease.', ko: '과학자들은 그 질병의 원인이 되는 특정 유전자를 식별하고 분리해내는 데 성공했습니다.' },
        { en: 'The heavy snowstorm will likely cut off the remote mountain village from the rest of the world.', ko: '심한 폭설로 인해 그 외딴 산골 마을은 세상으로부터 고립될 가능성이 큽니다.' },
      ],
    }
  ),
  word('it', '그것은', 1, 'adjective',
    ['그곳에', '그들은', '이것은', '저것은', '누구든지', '어디서나', '언제든지', '무엇이든', '그녀는', '우리는'],
    tips({
      etymology: '고대 영어 \'hit\'에서 유래하여 중성 대명사로 정착되었습니다.',
      visual: '손가락으로 눈앞의 물건 하나를 가리키며 \'그거!\'라고 외치는 모습을 상상하세요.',
      soundAlike: '\'잇\' 소리가 나므로, 이빨(잇) 사이에 낀 \'그것\'을 빼낸다고 생각해보세요.',
      context: '이미 언급된 사물이나 동물을 다시 가리킬 때 가장 빈번하게 사용됩니다.',
      synonymAntonym: '특정한 사물을 지칭하는 \'that\'과 비슷하지만, \'it\'은 더 막연한 대상을 가리키기도 합니다.',
    }),
    {
      definition: 'Used to refer to a thing previously mentioned or easily identified in the environment.',
      synonyms: ['that', 'this', 'the thing'],
      antonyms: ['person', 'human', 'nothing'],
      exampleSentences: [
        { en: 'The cat saw a mouse and chased it across the room.', ko: '그 고양이는 쥐를 보고 방 가로질러 그것을 쫓아갔다.' },
        { en: 'Take this umbrella because it might rain later today.', ko: '오늘 나중에 비가 올 수도 있으니 이 우산을 가져가라.' },
      ],
    }
  ),
  word('item', '조항', 4, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '라틴어 \'ita\'에서 유래하여 \'마찬가지로\'라는 뜻에서 목록의 개별 항목을 나열할 때 쓰이기 시작했습니다.',
      visual: '법전이나 계약서의 긴 목록 중에서 하나하나 번호가 매겨진 줄을 상상해 보세요.',
      soundAlike: '\'아이템\'이라고 하면 게임 장비를 떠올리기 쉽지만, 서류상에서는 \'항목\'이나 \'조항\'으로 쓰입니다.',
      context: '뉴스나 공식 문서에서 특정 규정의 세부 사항을 언급할 때 자주 등장하는 표현입니다.',
      synonymAntonym: 'clause나 article과 비슷하게 쓰이며, 전체를 뜻하는 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A distinct part or individual object that is included in a list, collection, or set of rules.',
      synonyms: ['clause', 'article', 'entry'],
      antonyms: ['whole', 'entirety', 'bulk'],
      exampleSentences: [
        { en: 'The third item of the contract specifies the payment terms and deadlines.', ko: '계약서의 세 번째 조항은 지불 조건과 마감일을 명시하고 있습니다.' },
        { en: 'Please review every single item on the agenda before the meeting starts.', ko: '회의가 시작되기 전에 의제에 있는 모든 항목을 검토해 주세요.' },
      ],
    }
  ),
  word('jail', '교도소', 5, 'noun',
    ['학교', '병원', '도서관', '공원', '박물관', '은행', '우체국', '소방서', '경찰서', '체육관'],
    tips({
      etymology: '라틴어 \'cavea(우리, 케이지)\'에서 유래하여 죄수를 가두는 장소라는 의미로 발전했습니다.',
      visual: '높은 담벼락과 창살이 있는 차가운 회색 건물을 상상해 보세요.',
      soundAlike: '발음이 \'제일\'과 비슷하니, \'죄를 지으면 제일 먼저 가는 곳\'으로 기억하세요.',
      context: '범죄를 저지른 사람이 재판을 기다리거나 짧은 형기를 복역할 때 주로 언급됩니다.',
      synonymAntonym: 'prison과 유사하지만 보통 규모가 작거나 단기 수용 시설을 뜻하며, freedom과는 정반대 개념입니다.',
    }),
    {
      definition: 'A place where people are kept as a punishment for a crime they have committed or while they are waiting for trial.',
      synonyms: ['prison', 'penitentiary', 'dungeon'],
      antonyms: ['freedom', 'liberty', 'release'],
      exampleSentences: [
        { en: 'The thief was sentenced to six months in a local facility for his crimes.', ko: '그 도둑은 자신의 범죄로 인해 지역 교도소에서 6개월 형을 선고받았다.' },
        { en: 'Guards patrol the perimeter of the building to prevent any inmates from escaping.', ko: '경비원들은 수감자들이 탈출하는 것을 막기 위해 건물 주변을 순찰한다.' },
      ],
    }
  ),
  word('jar', '항아리', 6, 'noun',
    ['상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미'],
    tips({
      etymology: '중세 프랑스어 \'jarre\'에서 유래했으며, 액체나 음식을 담는 큰 그릇을 의미합니다.',
      visual: '투명한 유리병 안에 달콤한 딸기잼이나 알록달록한 사탕이 가득 담겨 있는 모습을 상상해 보세요.',
      soundAlike: '\'자(jar)\'라고 발음되는데, 자로 잰 듯이 반듯하게 선반에 놓인 병들을 떠올리면 쉽습니다.',
      context: '주방 선반이나 식료품 저장실에서 잼, 피클, 양념 등을 보관할 때 가장 흔히 사용되는 용기입니다.',
      synonymAntonym: '무언가를 담는 pot이나 container와 비슷하지만, 뚜껑이 없는 빈 공간인 void와는 반대됩니다.',
    }),
    {
      definition: 'A cylindrical glass or earthenware container with a wide mouth and typically a lid, used for storing food.',
      synonyms: ['pot', 'container', 'vessel'],
      antonyms: ['void', 'emptiness', 'gap'],
      exampleSentences: [
        { en: 'She reached for the glass container to grab a handful of cookies.', ko: '그녀는 쿠키 한 움큼을 집기 위해 유리 항아리로 손을 뻗었다.' },
        { en: 'The homemade strawberry jam was carefully poured into a sterilized vessel.', ko: '집에서 만든 딸기잼은 소독된 병에 조심스럽게 담겼다.' },
      ],
    }
  ),
  word('jaw', '턱', 7, 'noun',
    ['어깨', '팔꿈치', '손목', '무릎', '발목', '허리', '갈비뼈', '쇄골', '척추', '골반'],
    tips({
      etymology: '고대 영어 \'ceace\'에서 유래하여 씹거나 말할 때 움직이는 입의 아래쪽 뼈 구조를 뜻하게 되었습니다.',
      visual: '상어가 입을 크게 벌려 날카로운 이빨이 박힌 아래턱을 드러내는 공포 영화 포스터를 상상해 보세요.',
      soundAlike: '영화 \'죠스(Jaws)\'를 떠올리면 거대한 입과 턱을 가진 상어를 쉽게 연상할 수 있습니다.',
      context: '치과 의사가 입을 크게 벌리라고 할 때나, 너무 놀라 입이 떡 벌어지는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'mandible은 의학적인 전문 용어이며, 턱을 꽉 다무는 것은 결의를, 벌리는 것은 놀람을 나타냅니다.',
    }),
    {
      definition: 'The lower part of the face that moves when you open your mouth to eat or speak.',
      synonyms: ['mandible', 'jowl', 'maxilla'],
      antonyms: ['skull', 'forehead', 'crown'],
      exampleSentences: [
        { en: 'The boxer suffered a broken bone in his lower face after a heavy punch.', ko: '그 권투 선수는 강력한 펀치를 맞은 후 아래턱뼈가 부러지는 부상을 입었습니다.' },
        { en: 'Her mouth dropped open in shock as she watched the incredible performance.', ko: '그녀는 믿기지 않는 공연을 보며 너무 놀라 입이 떡 벌어졌습니다.' },
      ],
    }
  ),
  word('jeans', '청바지', 2, 'noun',
    ['치마', '반바지', '정장', '셔츠', '모자', '양말', '장갑', '넥타이', '코트', '안경'],
    tips({
      etymology: '이 단어는 이탈리아의 도시 제노바(Genoa)에서 유래한 거친 면직물을 뜻하는 프랑스어 \'Gênes\'에서 왔습니다.',
      visual: '파란색 데님 원단에 구리 리벳이 박힌 튼튼한 바지 뒷주머니를 상상해 보세요.',
      soundAlike: '\'진\'한 파란색 바지라고 생각하면 발음 \'진즈\'와 연결하기 쉽습니다.',
      context: '격식을 차리지 않는 편안한 자리나 일상적인 외출복을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '데님 바지를 뜻하는 denims와 유사하며, 격식 있는 정장 바지인 slacks와는 반대되는 느낌입니다.',
    }),
    {
      definition: 'Sturdy cotton twill trousers, typically blue, made of denim fabric.',
      synonyms: ['denims', 'dungarees', 'blue jeans'],
      antonyms: ['skirt', 'dress', 'tuxedo'],
      exampleSentences: [
        { en: 'Most teenagers prefer wearing casual denim pants to school every day.', ko: '대부분의 십 대들은 매일 학교에 캐주얼한 청바지를 입고 가는 것을 선호합니다.' },
        { en: 'A white t-shirt paired with dark blue trousers creates a classic look.', ko: '흰 티셔츠와 진한 청바지를 함께 입으면 클래식한 룩이 완성됩니다.' },
      ],
    }
  ),
  word('jet', '분출', 4, 'noun',
    ['흡수', '정체', '고갈', '침전', '여과', '응고', '증발', '수축', '소멸', '냉각'],
    tips({
      etymology: '라틴어 \'jactare(던지다)\'에서 유래하여 밖으로 강하게 내던져지는 흐름을 뜻합니다.',
      visual: '소방 호스 끝에서 물줄기가 아주 강력하고 좁게 뿜어져 나오는 장면을 상상하세요.',
      soundAlike: '비행기 \'제트기\'가 뒤로 가스를 강하게 내뿜으며 날아가는 소리를 연상하면 쉽습니다.',
      context: '주로 액체나 가스가 좁은 구멍을 통해 빠른 속도로 쏟아져 나올 때 사용합니다.',
      synonymAntonym: 'gush나 spurt와 비슷하지만, 정체나 고임을 뜻하는 stagnation과는 반대됩니다.',
    }),
    {
      definition: 'A rapid and forceful stream of liquid or gas forced out of a small opening.',
      synonyms: ['spurt', 'gush', 'stream'],
      antonyms: ['trickle', 'drip', 'stagnation'],
      exampleSentences: [
        { en: 'A powerful stream of water shot from the pipe when the valve broke.', ko: '밸브가 고장 나자 파이프에서 강력한 물줄기가 뿜어져 나왔다.' },
        { en: 'The fountain creates a beautiful display by shooting a thin spray of water high into the air.', ko: '그 분수는 가느다란 물줄기를 공중 높이 쏘아 올려 아름다운 광경을 만들어낸다.' },
      ],
    }
  ),
  word('job', '일', 3, 'noun',
    ['취미', '휴식', '놀이', '공부', '여행', '꿈', '친구', '가족', '선물', '운동'],
    tips({
      etymology: '16세기경 \'덩어리\'나 \'조각\'을 뜻하던 단어에서 유래하여, 한 덩어리의 할 일을 의미하게 되었습니다.',
      visual: '정장을 입고 서류 가방을 든 채 사무실 책상 앞에 앉아 있는 직장인의 모습을 상상해 보세요.',
      soundAlike: '\'잡\'이라고 발음되는데, 손으로 무언가 도구를 \'잡\'고 열심히 일하는 모습을 연상하면 쉽습니다.',
      context: '주로 생계를 위해 정기적으로 수행하는 업무나 구체적인 과업을 가리킬 때 사용됩니다.',
      synonymAntonym: 'career나 occupation은 직업이라는 더 넓은 의미를, unemployment는 실직 상태를 뜻합니다.',
    }),
    {
      definition: 'The regular work that a person does to earn money or a specific task that needs to be completed.',
      synonyms: ['occupation', 'employment', 'profession'],
      antonyms: ['unemployment', 'leisure', 'pastime'],
      exampleSentences: [
        { en: 'She decided to apply for a new position at the marketing firm to advance her career.', ko: '그녀는 경력을 쌓기 위해 마케팅 회사의 새로운 직책에 지원하기로 결정했습니다.' },
        { en: 'Completing the renovation of the old house was a difficult and time-consuming task.', ko: '오래된 집을 개조하는 일을 마무리하는 것은 어렵고 시간이 많이 걸리는 작업이었습니다.' },
      ],
    }
  ),
  word('jog', '살짝', 5, 'noun',
    ['질주', '정지', '도약', '충돌', '회전', '낙하', '가속', '감속', '수평', '수직'],
    tips({
      etymology: '중세 영어에서 유래하여 \'가볍게 흔들다\' 혹은 \'툭 치다\'라는 의미에서 시작되었습니다.',
      visual: '조깅을 할 때 발이 지면을 가볍게 툭툭 치며 나아가는 모습을 상상해 보세요.',
      soundAlike: '기억을 \'자극(jog)\'하기 위해 머리를 \'똑똑\' 두드리는 소리와 비슷하다고 생각하면 쉽습니다.',
      context: '주로 기억을 되살리기 위해 가볍게 자극을 주거나, 운동을 위해 천천히 달릴 때 사용합니다.',
      synonymAntonym: '빠르게 달리는 sprint와 대조되며, 가볍게 밀치는 nudge와 비슷한 느낌을 줍니다.',
    }),
    {
      definition: 'A slow, steady pace of running or a slight push or shake to stimulate someone\'s memory.',
      synonyms: ['nudge', 'trot', 'reminder'],
      antonyms: ['sprint', 'stagnation', 'forgetfulness'],
      exampleSentences: [
        { en: 'A brief look at the old photographs helped to his memory about the childhood trip.', ko: '오래된 사진들을 잠깐 보는 것이 어린 시절 여행에 대한 그의 기억을 되살리는 데 도움이 되었다.' },
        { en: 'Every morning before breakfast, she goes for a quick around the local park.', ko: '매일 아침 식사 전에 그녀는 동네 공원을 가볍게 한 바퀴 달린다.' },
      ],
    }
  ),
  word('join', '결합하다', 1, 'verb',
    ['분리하다', '삭제하다', '거절하다', '무시하다', '파괴하다', '방해하다', '지연시키다', '비우다', '반대하다', '숨기다'],
    tips({
      etymology: '라틴어 \'jungere\'에서 유래되었으며, 이는 멍에를 씌워 두 대상을 하나로 묶는다는 의미를 담고 있습니다.',
      visual: '두 개의 퍼즐 조각이 딸깍 소리를 내며 하나로 완벽하게 합쳐지는 모습을 상상해 보세요.',
      soundAlike: '\'조인\' 발음이 \'조이다\'와 비슷하죠? 나사를 조여서 부품을 단단히 연결하는 장면을 떠올리면 쉽습니다.',
      context: '동아리에 가입하거나, 선 두 개를 하나로 연결할 때, 혹은 식사 자리에 합석할 때 두루 쓰입니다.',
      synonymAntonym: 'connect와 unite는 합치는 긍정적 의미를, separate와 split은 나누는 반대 의미를 가집니다.',
    }),
    {
      definition: 'To connect or fasten things together, or to become a member of a group or organization.',
      synonyms: ['connect', 'unite', 'combine'],
      antonyms: ['separate', 'detach', 'disconnect'],
      exampleSentences: [
        { en: 'Many students decided to participate in the local charity event and help the community.', ko: '많은 학생들이 지역 자선 행사에 참여하여 지역 사회를 돕기로 결정했습니다.' },
        { en: 'The two rivers meet at the base of the mountain to form a much larger stream.', ko: '두 강이 산기슭에서 만나 훨씬 더 큰 줄기를 형성합니다.' },
      ],
    }
  ),
  word('joint', '이음매', 6, 'noun',
    ['분리', '균열', '파편', '단절', '독립', '공간', '구멍', '표면', '내부', '거리'],
    tips({
      etymology: '라틴어 \'jungere(결합하다)\'에서 유래하여 두 부분이 만나는 지점을 의미합니다.',
      visual: '두 개의 파이프나 뼈가 딱 맞물려 연결되어 있는 연결 부위를 상상하세요.',
      soundAlike: '조인트(joint)를 맞춘다라는 표현처럼 딱 들어맞는 소리를 연상하세요.',
      context: '가구 제작이나 인체 해부학에서 부품이나 뼈가 연결되는 물리적인 지점을 설명할 때 주로 쓰입니다.',
      synonymAntonym: '연결을 뜻하는 junction과 반대로 분리를 뜻하는 separation을 함께 기억하세요.',
    }),
    {
      definition: 'A point where two or more things are connected or combined together.',
      synonyms: ['junction', 'connection', 'seam'],
      antonyms: ['disconnection', 'detachment', 'separation'],
      exampleSentences: [
        { en: 'The carpenter applied strong glue to the wooden connection to ensure it would not break.', ko: '목수는 이음매가 부러지지 않도록 나무 연결 부위에 강력한 접착제를 발랐습니다.' },
        { en: 'Water began to leak from the rusty pipe where the two sections meet.', ko: '두 섹션이 만나는 녹슨 파이프의 연결 부위에서 물이 새기 시작했습니다.' },
      ],
    }
  ),
  word('joke', '농담', 7, 'noun',
    ['진실', '심각', '교훈', '비극', '사실', '정답', '비밀', '약속', '명령', '경고'],
    tips({
      etymology: '라틴어 iocus에서 유래되었으며, 이는 놀이, 게임, 즐거움을 뜻합니다.',
      visual: '코미디언이 마이크를 잡고 관객들을 박장대소하게 만드는 무대 위 장면을 상상하세요.',
      soundAlike: '발음이 \'조크\'와 비슷하므로, 분위기를 좋게(Jo-ke) 만드는 말이라고 기억하세요.',
      context: '친구들 사이의 가벼운 장난이나 코미디 쇼의 대사 등 웃음을 유발하는 상황에서 쓰입니다.',
      synonymAntonym: 'jest나 gag와 비슷하지만, serious한 상황이나 insult와는 반대되는 개념입니다.',
    }),
    {
      definition: 'something said or done to cause laughter or amusement, especially a short story with a funny punchline',
      synonyms: ['jest', 'gag', 'prank'],
      antonyms: ['tragedy', 'seriousness', 'solemnity'],
      exampleSentences: [
        { en: 'He told a hilarious story that made everyone in the room burst into laughter.', ko: '그는 방 안의 모든 사람을 폭소하게 만든 아주 재미있는 이야기를 했다.' },
        { en: 'Please do not take his comments personally because he was only making a lighthearted remark.', ko: '그는 그저 가벼운 농담을 한 것이니 그의 말을 기분 나쁘게 듣지 마세요.' },
      ],
    }
  ),
  word('journal', '일간신문', 4, 'noun',
    ['잡지', '소설', '교과서', '백과사전', '수필', '만화책', '시집', '사전', '논문', '안내서'],
    tips({
      etymology: '프랑스어 \'jour(날)\'에서 유래하여 매일의 기록이나 소식을 전하는 매체를 뜻하게 되었습니다.',
      visual: '매일 아침 현관 앞에 놓인 잉크 냄새 나는 종이 뭉치를 상상해 보세요.',
      soundAlike: '\'저널\'은 \'저 늘(항상)\' 소식을 전해주는 신문이라고 기억하면 쉽습니다.',
      context: '학술적인 기록이나 매일 발행되는 정기간행물을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: 'daily나 newspaper와 비슷하지만, record와 같은 기록의 의미도 포함합니다.',
    }),
    {
      definition: 'A daily newspaper or a periodical publication that contains news and articles on a particular subject.',
      synonyms: ['newspaper', 'periodical', 'publication'],
      antonyms: ['book', 'novel', 'monograph'],
      exampleSentences: [
        { en: 'The local journal reported on the upcoming city council elections.', ko: '지역 일간신문은 다가오는 시의회 선거에 대해 보도했다.' },
        { en: 'He reads a medical journal every morning to stay updated on new research.', ko: '그는 새로운 연구에 대한 최신 정보를 유지하기 위해 매일 아침 의학 학술지를 읽는다.' },
      ],
    }
  ),
  word('journey', '여행', 5, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '프랑스어 \'journee\'에서 유래했으며, 원래 \'하루 동안의 일\'이나 \'하루의 여정\'을 뜻했습니다.',
      visual: '끝없이 펼쳐진 기찻길 위를 달리는 열차와 창밖 풍경을 바라보는 여행자의 모습을 상상하세요.',
      soundAlike: '\'저니\'라고 발음하며, \'저 너머(저니)\' 먼 곳으로 떠나는 긴 여행을 떠올리면 쉽습니다.',
      context: '단순한 짧은 나들이보다는 인생의 여정이나 장거리 이동처럼 깊이 있는 과정에 주로 쓰입니다.',
      synonymAntonym: 'trip보다 긴 과정을 강조하며, 정착을 뜻하는 settlement와 반대되는 개념입니다.',
    }),
    {
      definition: 'the act of traveling from one place to another, especially when it involves a long distance or time',
      synonyms: ['expedition', 'voyage', 'trek'],
      antonyms: ['stasis', 'stay', 'settlement'],
      exampleSentences: [
        { en: 'The young explorer documented every detail of his long trek across the desert.', ko: '젊은 탐험가는 사막을 가로지르는 긴 여정의 모든 세부 사항을 기록했다.' },
        { en: 'Success is often described as a continuous process rather than a final destination.', ko: '성공은 종종 최종 목적지라기보다 지속적인 여정으로 묘사된다.' },
      ],
    }
  ),
  word('joy', '즐거움', 2, 'noun',
    ['슬픔', '분노', '공포', '질투', '지루함', '좌절', '피로', '혼란', '걱정', '수치심'],
    tips({
      etymology: '라틴어 \'gaudia\'에서 유래하여 마음이 환하게 피어오르는 기쁨을 뜻합니다.',
      visual: '아이들이 선물을 받고 폴짝폴짝 뛰며 환하게 웃는 모습을 상상해 보세요.',
      soundAlike: '\'조이\'라는 발음이 입을 양옆으로 벌리며 웃는 모양과 비슷합니다.',
      context: '단순한 재미를 넘어 삶의 큰 행복이나 보람을 느낄 때 주로 사용합니다.',
      synonymAntonym: 'Delight와는 결이 비슷하고, 극심한 슬픔을 뜻하는 Sorrow와는 정반대입니다.',
    }),
    {
      definition: 'A feeling of great pleasure and happiness often caused by success or good fortune.',
      synonyms: ['delight', 'happiness', 'bliss'],
      antonyms: ['misery', 'sorrow', 'sadness'],
      exampleSentences: [
        { en: 'The newborn baby brought immense happiness and light to the entire family.', ko: '갓 태어난 아기는 온 가족에게 엄청난 즐거움과 빛을 가져다주었습니다.' },
        { en: 'She wept with pure emotion after hearing the wonderful news of her promotion.', ko: '그녀는 승진이라는 멋진 소식을 듣고 순수한 기쁨의 눈물을 흘렸습니다.' },
      ],
    }
  ),
  word('judge', '재판관', 6, 'noun',
    ['변호사', '검사', '피고인', '증인', '배심원', '경찰관', '교도관', '서기', '의뢰인', '방청객'],
    tips({
      etymology: '라틴어 \'jus\'(법)와 \'dicere\'(말하다)가 합쳐져 법을 말하는 사람이라는 의미에서 유래되었습니다.',
      visual: '법정 높은 의자에 앉아 검은 가운을 입고 나무 망치를 두드리는 엄숙한 인물을 상상해 보세요.',
      soundAlike: '\'저지\'라고 발음되는데, 잘못을 \'저지\'른 사람에게 판결을 내리는 사람으로 기억하면 쉽습니다.',
      context: '법적 판결을 내리는 공직자뿐만 아니라 오디션 프로그램에서 점수를 매기는 심사위원에게도 쓰입니다.',
      synonymAntonym: 'justice는 법관을 뜻하는 유의어이며, 반대로 판결을 받는 대상은 defendant라고 합니다.',
    }),
    {
      definition: 'A public officer appointed to decide cases in a law court.',
      synonyms: ['justice', 'magistrate', 'arbitrator'],
      antonyms: ['litigant', 'defendant', 'advocate'],
      exampleSentences: [
        { en: 'The presiding official listened carefully to both sides before making a final decision.', ko: '재판장은 최종 결정을 내리기 전에 양측의 의견을 주의 깊게 들었습니다.' },
        { en: 'A panel of experts will evaluate each performance based on technical skill and creativity.', ko: '전문가 심사위원단이 기술적 숙련도와 창의성을 바탕으로 각 공연을 평가할 것입니다.' },
      ],
    }
  ),
  word('judicial', '사법의', 9, 'adjective',
    ['입법의', '행정의', '정치적인', '경제적인', '사회적인', '문화적인', '군사적인', '종교적인', '교육적인', '과학적인'],
    tips({
      etymology: '라틴어 \'judicium(판결)\'에서 유래되었으며, 법관이나 재판관을 뜻하는 judge와 어근이 같습니다.',
      visual: '법정에서 판사가 법복을 입고 엄숙하게 판결봉을 두드리는 장면을 상상해 보세요.',
      soundAlike: '\'쥬디셜\' 발음이 \'죄 뒤 셜(설)\'처럼 들리니, 죄 뒤에 서는 법적 절차라고 연상해 보세요.',
      context: '주로 사법부, 사법 제도, 또는 재판 과정과 관련된 공식적인 상황에서 사용됩니다.',
      synonymAntonym: '법적인 절차를 뜻하는 legal과 유사하며, 법과 상관없는 사적인 영역인 private과는 반대됩니다.',
    }),
    {
      definition: 'relating to a judgment, the function of a judge, or the administration of justice through the courts',
      synonyms: ['legal', 'juridical', 'judiciary'],
      antonyms: ['extrajudicial', 'legislative', 'executive'],
      exampleSentences: [
        { en: 'The Supreme Court has the power of judicial review over new laws.', ko: '대법원은 새로운 법률에 대해 사법 심사권을 가집니다.' },
        { en: 'The independence of the judicial system is crucial for a healthy democracy.', ko: '사법 체계의 독립성은 건강한 민주주의를 위해 매우 중요합니다.' },
      ],
    }
  ),
  word('junior', '손아래사람', 7, 'noun',
    ['선배', '상급자', '관리자', '전문가', '동료', '고참', '스승', '지도자', '대표', '원로'],
    tips({
      etymology: '라틴어 \'juvenis(젊은)\'에서 유래하여 더 어린 사람이나 낮은 직급을 뜻하게 되었습니다.',
      visual: '회사에서 신입 사원이 선배에게 업무를 배우며 밝게 인사하는 모습을 상상해 보세요.',
      soundAlike: '주니어(Junior)는 \'주머니\'에 쏙 들어갈 만큼 작은 아이나 후배를 연상하면 쉽습니다.',
      context: '학교에서는 3학년 학생을, 직장에서는 직급이 낮은 하급자를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '상급자를 뜻하는 senior와 반대되는 개념으로 함께 기억하면 효율적입니다.',
    }),
    {
      definition: 'A person who is younger than another or holds a lower rank in an organization.',
      synonyms: ['subordinate', 'underling', 'minor'],
      antonyms: ['senior', 'superior', 'elder'],
      exampleSentences: [
        { en: 'The manager assigned a mentor to help the new junior staff member adjust to the office.', ko: '매니저는 신입 하급 직원이 사무실에 적응하는 것을 돕기 위해 멘토를 배정했습니다.' },
        { en: 'She is two years my junior but has already gained more experience in marketing.', ko: '그녀는 나보다 두 살 아래이지만 마케팅 분야에서 이미 더 많은 경험을 쌓았습니다.' },
      ],
    }
  ),
  word('jury', '배심', 4, 'noun',
    ['판사', '변호사', '검사', '증인', '피고인', '법정', '판결', '증거', '소송', '집행'],
    tips({
      etymology: '라틴어 \'jurare(맹세하다)\'에서 유래하여, 법정에서 진실을 말하기로 맹세한 사람들의 집단을 뜻합니다.',
      visual: '법정 한쪽에 나란히 앉아 진지하게 재판을 지켜보며 유무죄를 논의하는 12명의 시민들을 상상해 보세요.',
      soundAlike: '\'쥬리\'라고 발음되는데, \'줄이\' 길게 늘어선 배심원석을 떠올리면 기억하기 쉽습니다.',
      context: '미국 드라마나 영화 속 법정 장면에서 유죄(guilty)나 무죄(not guilty)를 최종 결정하는 일반인 집단으로 자주 등장합니다.',
      synonymAntonym: '판결을 내리는 \'panel\'과 유사하며, 단독으로 결정하는 \'judge\'와는 역할이 구분됩니다.',
    }),
    {
      definition: 'A body of people sworn to give a verdict in a legal case on the basis of evidence submitted to them in court.',
      synonyms: ['panel', 'peers', 'adjudicators'],
      antonyms: ['judge', 'litigant', 'defendant'],
      exampleSentences: [
        { en: 'The members of the jury retired to a private room to deliberate on the verdict.', ko: '배심원들은 평결을 논의하기 위해 별실로 물러났다.' },
        { en: 'The defense attorney tried to persuade the jury that his client was innocent.', ko: '변호인은 배심원들에게 자신의 의뢰인이 무죄임을 설득하려 노력했다.' },
      ],
    }
  ),
  word('just', '올바른', 3, 'noun',
    ['불공평한', '사악한', '편파적인', '부당한', '그릇된', '치우친', '부도덕한', '불법의', '악의적인', '왜곡된'],
    tips({
      etymology: '라틴어 \'jus\'에서 유래되었으며, 이는 법(law)이나 권리(right)를 의미하여 법에 따라 공정함을 나타냅니다.',
      visual: '판사가 법정에서 양쪽의 무게가 똑같은 저울을 들고 서 있는 공평한 모습을 상상해 보세요.',
      soundAlike: '\'저스트\' 발음이 \'저(the) 수트(suit)\'와 비슷하죠? 정장을 입은 정직하고 올바른 신사를 떠올려 보세요.',
      context: '단순히 \'방금\'이라는 부사 외에도, 도덕적으로 옳고 공정한 결정을 내릴 때 형용사로 자주 쓰입니다.',
      synonymAntonym: 'fair와 유의어 관계이며, 반대말인 unjust는 앞에 un을 붙여 \'부당한\'이라는 뜻이 됩니다.',
    }),
    {
      definition: 'behaving according to what is morally right and fair',
      synonyms: ['fair', 'equitable', 'upright'],
      antonyms: ['unfair', 'unjust', 'biased'],
      exampleSentences: [
        { en: 'The judge was known for making a decision that was fair and based on the law.', ko: '그 판사는 법에 근거하여 공정하고 올바른 판결을 내리는 것으로 유명했다.' },
        { en: 'Every citizen deserves to live in a society that maintains a truly equitable system.', ko: '모든 시민은 진정으로 공정한 체계를 유지하는 사회에서 살 자격이 있다.' },
      ],
    }
  ),
];
