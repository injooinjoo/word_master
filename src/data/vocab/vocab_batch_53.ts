import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch53: VocabItem[] = [
  word('profession', '직업', 7, 'noun',
    ['취미', '여가', '퇴직', '무직', '알바', '인턴', '자영업', '부업', '전업', '경력'],
    tips({
      etymology: '라틴어 \'professio\'에서 유래하여, 대중 앞에서 자신의 지식과 기술을 공개적으로 선언하고 맹세하는 직종을 의미합니다.',
      visual: '가운을 입은 의사나 법복을 입은 판사처럼 고도의 전문 교육을 마친 뒤 자격증을 따고 일하는 모습을 상상하세요.',
      soundAlike: '대학교에서 전문 지식을 가르치는 \'professor(교수)\'와 발음이 비슷하므로 전문적인 일과 연결하면 쉽습니다.',
      context: '단순한 아르바이트나 일시적인 일보다는 평생의 소명이나 전문 지식이 필요한 커리어를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'occupation이나 career와 비슷하지만 더 전문적인 뉘앙스이며, 즐거움을 위한 hobby와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A type of job that requires special training, high-level education, and often a formal qualification',
      synonyms: ['occupation', 'career', 'vocation'],
      antonyms: ['hobby', 'pastime', 'avocation'],
      exampleSentences: [
        { en: 'She chose medicine as her life-long career path and dedicated herself to the medical field.', ko: '그녀는 의학을 평생의 직업으로 선택하고 의료 분야에 헌신했습니다.' },
        { en: 'The legal field demands a high standard of ethics from everyone within the community.', ko: '법조계는 그 공동체 내의 모든 이들에게 높은 수준의 윤리 의식을 요구합니다.' },
      ],
    }
  ),
  word('professor', '교수', 4, 'noun',
    ['강사', '조교', '연구원', '학생', '교장', '원장', '연구실장', '박사', '석사', '학부생'],
    tips({
      etymology: '라틴어 \'profiteri\'에서 유래하여 \'자신의 지식을 공개적으로 선언하고 가르치는 사람\'을 뜻합니다.',
      visual: '대학의 커다란 강의실 단상 위에서 안경을 쓰고 두꺼운 전공 서적을 든 학자의 모습을 상상해 보세요.',
      soundAlike: '전문적인 직업을 뜻하는 \'profession\'과 발음이 비슷하므로, 그중에서도 교육 전문가임을 기억하세요.',
      context: '주로 대학교나 대학원 같은 고등 교육 기관에서 연구와 강의를 병행하는 최고 직급의 교원을 지칭할 때 쓰입니다.',
      synonymAntonym: '강의를 하는 lecturer와 비슷하지만, 보통 더 높은 학문적 지위와 연구 성과를 가진 사람을 의미합니다.',
    }),
    {
      definition: 'A high-ranking educator who conducts research and teaches students at a college or university level.',
      synonyms: ['academic', 'educator', 'lecturer'],
      antonyms: ['student', 'pupil', 'undergraduate'],
      exampleSentences: [
        { en: 'The history department hired a new faculty member to serve as a senior professor.', ko: '역사학과는 선임 교수로 재직할 새로운 교직원을 채용했습니다.' },
        { en: 'Many students visited the office to ask for advice regarding their research projects.', ko: '많은 학생들이 연구 프로젝트에 대한 조언을 구하기 위해 교수실을 방문했습니다.' },
      ],
    }
  ),
  word('profile', '옆모습', 10, 'noun',
    ['정면', '배경', '윤곽', '초상', '모습', '실루엣', '형태', '모양', '이미지', '스케치'],
    tips({
      etymology: '라틴어 \'pro\'(앞으로)와 \'filare\'(실을 잣다)에서 유래하여 선으로 그린 옆모습을 뜻합니다.',
      visual: '동전 옆면에 새겨진 위인들의 얼굴 윤곽선을 상상해 보세요.',
      soundAlike: '프로필(profile) 사진을 찍을 때 옆라인(line)을 살린다고 생각하면 쉽습니다.',
      context: 'SNS의 프로필 사진뿐만 아니라 범죄자의 인상착의나 인물의 옆얼굴을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'outline과 silhouette은 겉모양을 뜻하며, front view는 정면을 뜻하는 반대 개념입니다.',
    }),
    {
      definition: 'an outline of something, especially a human face as seen from one side',
      synonyms: ['outline', 'silhouette', 'contour'],
      antonyms: ['full face', 'front view', 'head-on'],
      exampleSentences: [
        { en: 'The artist sketched the model\'s profile with a single charcoal stroke.', ko: '화가는 숯 한 번의 놀림으로 모델의 옆모습을 스케치했다.' },
        { en: 'A sharp profile was visible against the bright sunset.', ko: '밝은 석양을 배경으로 날카로운 옆모습 윤곽이 드러났다.' },
      ],
    }
  ),
  word('profit', '이익', 5, 'noun',
    ['손실', '적자', '비용', '지출', '부채', '경비', '세금', '할인', '환불', '과태료'],
    tips({
      etymology: '라틴어 \'profectus\'에서 유래하며 \'전진\'이나 \'진보\'를 의미하던 것이 경제적 \'이득\'으로 발전했습니다.',
      visual: '금고에 가득 찬 돈에서 재료비와 인건비를 빼고도 여전히 두둑하게 남은 지폐 뭉치를 상상해 보세요.',
      soundAlike: '예언자를 뜻하는 \'prophet\'과 발음이 거의 같으므로 문맥을 통해 구별해야 합니다.',
      context: '주로 비즈니스나 투자 상황에서 순수하게 남은 돈을 말할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'gain이나 earnings는 긍정적인 수입을, loss나 deficit은 마이너스 상태를 나타냅니다.',
    }),
    {
      definition: 'The financial gain obtained when the amount of revenue earned exceeds the expenses and taxes needed to maintain the activity.',
      synonyms: ['gain', 'earnings', 'surplus'],
      antonyms: ['loss', 'deficit', 'shortfall'],
      exampleSentences: [
        { en: 'The tech company reported a record-breaking net profit for the fiscal year.', ko: '그 기술 기업은 해당 회계 연도에 기록적인 순이익을 보고했습니다.' },
        { en: 'Selling the vintage car at the auction brought him a substantial profit.', ko: '경매에서 빈티지 자동차를 판매한 것은 그에게 상당한 이익을 가져다주었습니다.' },
      ],
    }
  ),
  word('profound', '깊은', 8, 'adjective',
    ['얕은', '사소한', '표면적인', '가벼운', '일시적인', '평범한', '단순한', '명백한', '부수적인', '무의미한'],
    tips({
      etymology: '라틴어 \'profundus\'에서 유래했으며, \'pro(앞으로/아래로)\'와 \'fundus(바닥)\'가 합쳐져 바닥까지 닿을 정도로 깊다는 의미를 갖습니다.',
      visual: '끝이 보이지 않는 깊은 바다나 아주 깊은 골짜기를 들여다보는 모습을 상상해 보세요.',
      soundAlike: '\'프로(Pro)가 발견한(found) 진리\'라고 연상하면 전문가가 찾아낸 깊이 있는 지식이라는 느낌을 줍니다.',
      context: '단순히 물리적인 깊이뿐만 아니라 지식, 감정, 영향력이 매우 크고 심오할 때 주로 사용됩니다.',
      synonymAntonym: 'deep과 유사하지만 더 격식 있는 표현이며, 수박 겉핥기식인 superficial과는 반대되는 개념입니다.',
    }),
    {
      definition: 'showing great knowledge, insight, or intensity of emotion and effect',
      synonyms: ['deep', 'insightful', 'intense'],
      antonyms: ['superficial', 'shallow', 'slight'],
      exampleSentences: [
        { en: 'The discovery of the new planet had a significant and lasting impact on the scientific community.', ko: '새로운 행성의 발견은 과학계에 깊고 지속적인 영향을 미쳤습니다.' },
        { en: 'She expressed her heartfelt gratitude for the support she received during the difficult time.', ko: '그녀는 힘든 시기에 받았던 지원에 대해 깊은 감사를 표했습니다.' },
      ],
    }
  ),
  word('progress', '진행', 6, 'noun',
    ['정체', '후퇴', '중단', '고정', '회귀', '지연', '실패', '거절', '방해', '침체'],
    tips({
      etymology: '앞을 뜻하는 pro-와 가다를 뜻하는 gress가 합쳐져 앞으로 나아가는 움직임을 의미합니다.',
      visual: '계단을 하나씩 올라가며 목표 지점에 점점 가까워지는 모습을 상상해 보세요.',
      soundAlike: '프로(pro)가 되기 위해 계속해서 그래(gress) 나아가는 과정을 떠올려 보세요.',
      context: '업무 보고나 프로젝트 업데이트 시 현재 얼마나 진행되었는지 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'advance와 함께 외우고, 반대말인 regression이나 decline과 대조하여 기억하세요.',
    }),
    {
      definition: 'the process of improving or developing over a period of time toward a goal',
      synonyms: ['advancement', 'development', 'improvement'],
      antonyms: ['regression', 'decline', 'stagnation'],
      exampleSentences: [
        { en: 'The medical team is making significant headways in finding a cure for the disease.', ko: '의료진은 그 질병의 치료법을 찾는 데 있어 상당한 진전을 보이고 있습니다.' },
        { en: 'Technological innovation has accelerated the pace of social change in recent years.', ko: '기술 혁신은 최근 몇 년 동안 사회적 변화의 진행 속도를 가속화했습니다.' },
      ],
    }
  ),
  word('prohibit', '금하다', 9, 'verb',
    ['허용하다', '승인하다', '허락하다', '촉진하다', '장려하다', '권장하다', '지지하다', '허가하다', '용인하다', '개방하다'],
    tips({
      etymology: '라틴어 \'pro(앞에)\'와 \'habere(두다/가지다)\'가 합쳐져 \'앞을 가로막아 두다\'라는 의미에서 유래했습니다.',
      visual: '빨간색 원에 대각선이 그려진 출입 금지 표지판이나 바리케이드를 떠올려 보세요.',
      soundAlike: '전시하다라는 뜻의 exhibit과 발음이 비슷하지만, pro(앞)에서 막는 것과 ex(밖)로 내놓는 차이가 있습니다.',
      context: '법률, 규칙, 공식적인 규정에서 특정 행동을 못 하게 막을 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'forbid나 ban은 강한 금지를 나타내며, 반대로 allow나 permit은 자유로운 허용을 뜻합니다.',
    }),
    {
      definition: 'to formally forbid something by law, rule, or other authority',
      synonyms: ['forbid', 'ban', 'veto'],
      antonyms: ['allow', 'permit', 'authorize'],
      exampleSentences: [
        { en: 'The new law will strictly forbid the use of plastic bags in grocery stores.', ko: '새로운 법은 식료품점에서 비닐봉지 사용을 엄격히 금지할 것입니다.' },
        { en: 'Local regulations prevent anyone from building high-rise structures near the historical site.', ko: '지역 규정은 누구든 사적지 근처에 고층 건물을 짓는 것을 금하고 있습니다.' },
      ],
    }
  ),
  word('prominent', '두드러진', 10, 'noun',
    ['미미한', '평범한', '숨겨진', '모호한', '내성적인', '일반적인', '사소한', '희미한', '부수적인', '열등한'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'minere(솟아나다)\'가 합쳐져 남들보다 앞으로 툭 튀어나와 있다는 뜻에서 유래했습니다.',
      visual: '평평한 평지에 혼자만 높게 솟아오른 산봉우리가 멀리서도 눈에 띄는 모습을 상상하세요.',
      soundAlike: '\'프로(pro)가 미(mi)는 낸트(nent)\'라고 연상하여, 프로 선수가 밀고 나가는 모습이 매우 눈에 띈다고 기억하세요.',
      context: '사회적 지위가 높거나 신체적 특징이 뚜렷할 때, 혹은 사물이 아주 잘 보일 때 주로 사용합니다.',
      synonymAntonym: 'conspicuous와는 눈에 잘 띈다는 점을 공유하며, obscure와는 정반대로 알려지지 않았다는 점이 대조됩니다.',
    }),
    {
      definition: 'standing out so as to be easily seen or particularly noticeable and important',
      synonyms: ['conspicuous', 'noticeable', 'eminent'],
      antonyms: ['obscure', 'inconspicuous', 'unimportant'],
      exampleSentences: [
        { en: 'The lighthouse stands in a position on the cliff to guide ships safely.', ko: '등대는 배들을 안전하게 인도하기 위해 절벽 위의 두드러진 위치에 서 있다.' },
        { en: 'She played a role in the environmental movement and influenced many people.', ko: '그녀는 환경 운동에서 중요한 역할을 수행하며 많은 사람들에게 영향을 끼쳤다.' },
      ],
    }
  ),
  word('promise', '약속', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'mittere(보내다)\'가 합쳐져, 상대방에게 미리 말을 내보낸다는 의미에서 유래했습니다.',
      visual: '새끼손가락을 서로 걸고 도장을 찍는 두 사람의 모습을 상상해 보세요.',
      soundAlike: '\'프로미스\' 발음이 \'프로(Pro)가 미소(Mise) 지으며 하는 확답\'이라고 연상해 보세요.',
      context: '비즈니스 계약이나 친구 사이의 신뢰를 다룰 때 가장 핵심적으로 쓰이는 단어입니다.',
      synonymAntonym: 'pledge와 같이 강한 의지를 담은 유의어와 break처럼 신뢰를 깨는 반의어를 함께 기억하세요.',
    }),
    {
      definition: 'to state confidently that you will definitely do something or that something will certainly happen',
      synonyms: ['pledge', 'guarantee', 'vow'],
      antonyms: ['deny', 'refuse', 'renege'],
      exampleSentences: [
        { en: 'The young politician gave a firm assurance to improve the local education system.', ko: '그 젊은 정치인은 지역 교육 시스템을 개선하겠다는 확고한 약속을 했습니다.' },
        { en: 'Friends should always keep their word even when it becomes difficult to do so.', ko: '친구들은 상황이 어려워지더라도 항상 자신의 약속을 지켜야 합니다.' },
      ],
    }
  ),
  word('promote', '승진시키다', 4, 'verb',
    ['강등시키다', '해고하다', '방해하다', '억제하다', '무시하다', '보류하다', '중단하다', '거절하다', '축소하다', '은폐하다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'movere(움직이다)\'가 결합되어 직급이나 위치를 앞으로 나아가게 한다는 의미를 가집니다.',
      visual: '회사 게시판에 내 이름이 더 높은 직급 옆에 적혀 있고 동료들이 박수를 쳐주는 장면을 상상해 보세요.',
      soundAlike: '\'프로(pro)가 못(mot)하면 안 되지\'라고 생각하며 전문가가 되어 위로 올라가는 모습을 연상하세요.',
      context: '직장 내에서의 지위 상승뿐만 아니라 상품의 판매를 촉진하거나 아이디어를 홍보할 때도 자주 쓰입니다.',
      synonymAntonym: '지위를 높이는 advance와 반대로 직급을 낮추는 demote를 짝지어 기억하면 효과적입니다.',
    }),
    {
      definition: 'To raise someone to a higher rank or more important position within an organization.',
      synonyms: ['advance', 'elevate', 'upgrade'],
      antonyms: ['demote', 'downgrade', 'relegate'],
      exampleSentences: [
        { en: 'The board of directors decided to elevate the manager to a vice president position after the successful merger.', ko: '이사회는 성공적인 합병 이후 그 매니저를 부사장 직위로 승진시키기로 결정했습니다.' },
        { en: 'Hard work and consistent results often lead a company to advance its most dedicated employees.', ko: '성실한 업무와 일관된 성과는 종종 회사가 가장 헌신적인 직원들을 승진시키도록 이끕니다.' },
      ],
    }
  ),
  word('prompt', '재빠른', 8, 'noun',
    ['느린', '지연된', '망설이는', '영구적인', '복잡한', '거대한', '사소한', '엄격한', '희미한', '유연한'],
    tips({
      etymology: '라틴어 \'pro-\'(앞으로)와 \'emere\'(가져오다)가 합쳐져 \'준비된 상태로 내놓다\'라는 의미에서 유래했습니다.',
      visual: '달리기 선수가 출발 신호가 떨어지자마자 용수철처럼 튀어 나가는 장면을 상상해 보세요.',
      soundAlike: '\'프롬프트\'라고 발음하며, 연극 배우가 대사를 잊었을 때 바로 찔러주는(prompt) 상황을 떠올리면 쉽습니다.',
      context: '비즈니스 이메일 답장이나 응급 상황에서의 조치가 지체 없이 이루어질 때 주로 사용됩니다.',
      synonymAntonym: 'quick이나 punctual과 비슷하지만, 단순한 속도보다 \'정해진 시간에 늦지 않음\'을 강조할 때가 많습니다.',
    }),
    {
      definition: 'Done without delay; moving or acting with great speed and efficiency.',
      synonyms: ['punctual', 'immediate', 'swift'],
      antonyms: ['delayed', 'sluggish', 'dilatory'],
      exampleSentences: [
        { en: 'The customer service team provided a prompt response to my urgent inquiry.', ko: '고객 서비스 팀은 나의 긴급한 문의에 재빠른 답변을 제공했다.' },
        { en: 'Success in this industry requires prompt action whenever a new opportunity arises.', ko: '이 업계에서의 성공은 새로운 기회가 생길 때마다 즉각적인 행동을 필요로 한다.' },
      ],
    }
  ),
  word('pronounce', '발음하다', 5, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'nuntiare(알리다)\'가 합쳐져 사람들 앞에서 소리 내어 알린다는 의미에서 유래했습니다.',
      visual: '아나운서가 마이크 앞에서 입 모양을 정확하게 하며 뉴스 대본을 읽는 모습을 상상해 보세요.',
      soundAlike: '\'프로(pro)가 나온(nounce)다\'라고 생각하며, 프로 방송인이 나와서 정확하게 말하는 장면을 연상하세요.',
      context: '외국어를 배울 때 가장 먼저 부딪히는 벽이 바로 단어를 정확한 소리로 내뱉는 과정입니다.',
      synonymAntonym: '소리 내어 말하는 \'articulate\'와 비슷하지만, 침묵을 지키는 \'be silent\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To make the sound of a word or letter in a particular way using your voice.',
      synonyms: ['articulate', 'enunciate', 'utter'],
      antonyms: ['mumble', 'mispronounce', 'silence'],
      exampleSentences: [
        { en: 'The teacher showed the students how to articulate the difficult vowels correctly.', ko: '선생님은 학생들에게 어려운 모음들을 어떻게 정확하게 발음하는지 보여주었습니다.' },
        { en: 'It is often difficult for non-native speakers to say certain English names properly.', ko: '원어민이 아닌 사람들이 특정 영어 이름들을 제대로 발음하는 것은 종종 어렵습니다.' },
      ],
    }
  ),
  word('proof', '증명', 6, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '라틴어 probare(시험하다)에서 유래하여, 어떤 것이 참임을 시험하여 밝혀낸 결과물을 뜻합니다.',
      visual: '법정에서 결정적인 증거가 담긴 서류 뭉치에 \'CONFIRMED\' 도장이 찍히는 모습을 상상하세요.',
      soundAlike: '방수 기능을 뜻하는 \'워터프루프(waterproof)\'를 떠올리면 물이 새지 않음을 증명한다는 의미와 연결됩니다.',
      context: '수학 문제를 풀거나 범죄 현장에서 범인을 잡을 때 반드시 필요한 논리적 근거입니다.',
      synonymAntonym: 'evidence와 유사하지만, proof는 의심의 여지가 없는 완벽한 결론에 더 가깝습니다.',
    }),
    {
      definition: 'evidence or argument establishing a fact or the truth of a statement',
      synonyms: ['evidence', 'confirmation', 'verification'],
      antonyms: ['disproof', 'refutation', 'contradiction'],
      exampleSentences: [
        { en: 'The scientist provided mathematical evidence as final validation for the new theory.', ko: '그 과학자는 새로운 이론에 대한 최종 확인으로서 수학적 증거를 제시했습니다.' },
        { en: 'Keep your receipt as a record of purchase in case you need a refund.', ko: '환불이 필요할 경우를 대비해 구매 증빙 자료로 영수증을 보관하세요.' },
      ],
    }
  ),
  word('proper', '고유의', 7, 'adjective',
    ['공통의', '일반적인', '부수적인', '외부의', '가변적인', '인위적인', '일시적인', '보편적인', '추상적인', '상대적인'],
    tips({
      etymology: '라틴어 proprius에서 유래하여 \'자신만의 것\' 혹은 \'특유의\'라는 의미를 가집니다.',
      visual: '이름표가 붙어 있는 개인 사물함처럼 오직 그 대상에게만 속한 상태를 상상하세요.',
      soundAlike: '\'프로퍼\' 발음이 \'프로(Pro)가 퍼(Per)펙트하게 갖춘 고유한 기술\'처럼 들립니다.',
      context: '문법에서 \'Proper Noun\'은 세상에 하나뿐인 이름을 뜻하는 \'고유 명사\'를 의미합니다.',
      synonymAntonym: '특정한 대상을 가리키는 specific과 반대되는 일반적인 개념인 general을 함께 기억하세요.',
    }),
    {
      definition: 'belonging exclusively to a particular person, place, or thing',
      synonyms: ['specific', 'individual', 'characteristic'],
      antonyms: ['common', 'general', 'universal'],
      exampleSentences: [
        { en: 'The customs and traditions are proper to this small mountain village.', ko: '그 관습과 전통은 이 작은 산골 마을 고유의 것이다.' },
        { en: 'London is a proper noun because it refers to a specific city.', ko: '런던은 특정 도시를 가리키기 때문에 고유 명사이다.' },
      ],
    }
  ),
  word('property', '재산', 4, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '라틴어 \'proprietas\'에서 유래했으며, \'자신만의 것\'이라는 의미를 담고 있습니다.',
      visual: '집 마당에 \'내 땅\'이라고 적힌 푯말이 꽂혀 있는 모습을 상상해 보세요.',
      soundAlike: '\'프로퍼티\' 발음이 \'프로(Pro)가 퍼트린(Property) 재산\'처럼 들린다고 연상해 보세요.',
      context: '부동산 시장이나 개인 소유물을 논할 때 가장 흔하게 쓰이는 경제 용어입니다.',
      synonymAntonym: '소유물인 asset과 대조되는 개념으로 부채를 뜻하는 liability를 함께 기억하세요.',
    }),
    {
      definition: 'things that are owned by someone, such as land, buildings, or personal belongings',
      synonyms: ['asset', 'possession', 'estate'],
      antonyms: ['debt', 'liability', 'poverty'],
      exampleSentences: [
        { en: 'The value of this residential area has increased significantly over the last decade.', ko: '이 주거 지역의 자산 가치는 지난 10년 동안 크게 상승했습니다.' },
        { en: 'Police recovered the stolen items and returned them to their rightful owner.', ko: '경찰은 도난당한 물건들을 회수하여 정당한 소유주에게 돌려주었습니다.' },
      ],
    }
  ),
  word('proportion', '비율', 9, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '라틴어 \'pro(에 따라)\'와 \'portio(부분)\'가 합쳐져 전체 중 특정 부분의 크기를 나타냅니다.',
      visual: '피자 한 판을 조각내어 각 조각이 전체에서 차지하는 크기를 비교하는 그림을 그려보세요.',
      soundAlike: '프로(pro)가 포션(portion)을 나눈다. 즉, 전문가가 적절한 비율로 몫을 나눈다고 연상하세요.',
      context: '요리 레시피에서 재료의 배합이나 통계 자료에서 특정 집단이 차지하는 비중을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'ratio와 유사하지만 전체와의 조화를 강조하며, imbalance와는 반대되는 균형의 개념을 담고 있습니다.',
    }),
    {
      definition: 'The relationship of one part to another or to the whole in terms of size, quantity, or degree.',
      synonyms: ['ratio', 'percentage', 'fraction'],
      antonyms: ['imbalance', 'disproportion', 'unevenness'],
      exampleSentences: [
        { en: 'The sugar and flour should be mixed in the correct ratio to ensure the cake rises properly.', ko: '케이크가 제대로 부풀어 오르게 하려면 설탕과 밀가루를 올바른 비율로 섞어야 합니다.' },
        { en: 'A large part of the city\'s budget is allocated to improving public transportation systems.', ko: '시 예산의 상당한 비율이 대중교통 체계 개선에 할당되었습니다.' },
      ],
    }
  ),
  word('propose', '제의하다', 5, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '앞을 뜻하는 pro와 놓다를 뜻하는 pose가 합쳐져 상대방 앞에 의견을 내놓는다는 의미가 됩니다.',
      visual: '회의실 테이블 위에 새로운 기획안이 담긴 서류 뭉치를 정중하게 올려두는 모습을 상상하세요.',
      soundAlike: '프로포즈(propose) 대중적인 청혼의 의미를 떠올리면 무언가를 제안하고 권유하는 느낌이 쉽게 와닿습니다.',
      context: '비즈니스 회의에서 새로운 전략을 발표하거나 친구에게 여행 계획을 제안할 때 주로 사용됩니다.',
      synonymAntonym: 'suggest와 유사하지만 조금 더 공식적인 느낌이며, 반대로 거절하다는 reject를 함께 기억하세요.',
    }),
    {
      definition: 'to put forward a plan, idea, or suggestion for consideration by others',
      synonyms: ['suggest', 'recommend', 'advise'],
      antonyms: ['reject', 'withdraw', 'oppose'],
      exampleSentences: [
        { en: 'The committee will meet tomorrow to discuss the changes that the manager intends to put forward.', ko: '위원회는 매니저가 제의하려는 변경 사항들을 논의하기 위해 내일 만날 것입니다.' },
        { en: 'Scientists often present a new theory to explain natural phenomena that have not been understood before.', ko: '과학자들은 종종 이전에 이해되지 않았던 자연 현상을 설명하기 위해 새로운 이론을 제의합니다.' },
      ],
    }
  ),
  word('prospect', '전망', 6, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '앞을 뜻하는 pro와 보다를 뜻하는 spect가 합쳐져 앞을 내다보는 시야를 의미합니다.',
      visual: '높은 산 정상에서 탁 트인 미래의 풍경을 망원경으로 바라보는 모습을 상상하세요.',
      soundAlike: '프로(pro) 선수가 스펙(spect)을 쌓아 미래의 성공 가능성을 높이는 장면을 연상하세요.',
      context: '비즈니스에서는 잠재적인 고객이나 미래의 사업 성공 가능성을 논할 때 자주 쓰입니다.',
      synonymAntonym: '유의어 outlook은 밖을 내다보는 관점을, 반의어 hopelessness는 아무런 희망이 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'The possibility or likelihood of some future event occurring, or a mental picture of a future situation.',
      synonyms: ['outlook', 'possibility', 'expectation'],
      antonyms: ['hopelessness', 'impossibility', 'past'],
      exampleSentences: [
        { en: 'The economic outlook remains uncertain, but the long-term growth potential is promising.', ko: '경제 전망은 여전히 불확실하지만, 장기적인 성장 가능성은 유망합니다.' },
        { en: 'She was excited by the thought of starting a new career in a different country.', ko: '그녀는 다른 나라에서 새로운 경력을 시작할 가능성에 들떠 있었습니다.' },
      ],
    }
  ),
  word('prosper', '번영하다', 10, 'verb',
    ['쇠퇴하다', '정체되다', '실패하다', '파산하다', '감소하다', '악화되다', '중단하다', '방해하다', '포기하다', '위축되다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'spere(희망)\'가 합쳐져 희망하는 대로 일이 잘 풀려나가는 상태를 뜻합니다.',
      visual: '메마른 땅에서 갑자기 푸른 싹이 돋아나고 황금빛 들판으로 변하는 풍요로운 이미지를 상상하세요.',
      soundAlike: '\'프로(Pro)가 수퍼(Sper)맨처럼\' 성공해서 번창하는 모습을 떠올리면 발음과 의미가 연결됩니다.',
      context: '경제적 성공뿐만 아니라 식물이 잘 자라거나 사업이 확장될 때 두루 사용되는 긍정적인 단어입니다.',
      synonymAntonym: 'thrive와 flourish는 함께 번창하는 느낌을 주며, 반대로 wither는 시들고 쇠퇴하는 느낌을 줍니다.',
    }),
    {
      definition: 'to be successful in material terms or to grow and develop vigorously',
      synonyms: ['thrive', 'flourish', 'bloom'],
      antonyms: ['fail', 'decline', 'wither'],
      exampleSentences: [
        { en: 'The small family business began to grow rapidly and eventually managed to reach every corner of the country.', ko: '그 작은 가족 기업은 빠르게 성장하기 시작했고 결국 전국 방방곡곡으로 번창해 나갔습니다.' },
        { en: 'Plants will only stay healthy and develop well if they receive adequate sunlight and water.', ko: '식물은 적절한 햇빛과 물을 받아야만 건강하게 유지되고 잘 번성할 것입니다.' },
      ],
    }
  ),
  word('protect', '보호하다', 7, 'verb',
    ['공격하다', '파괴하다', '무시하다', '노출하다', '방치하다', '위협하다', '손상시키다', '포기하다', '거절하다', '낭비하다'],
    tips({
      etymology: '라틴어 \'pro-\'(앞에)와 \'tegere\'(덮다)가 합쳐져, 위험 앞에서 덮어 가려준다는 의미에서 유래했습니다.',
      visual: '비바람이 몰아치는 날, 어린 강아지에게 우산을 씌워주는 따뜻한 장면을 상상해 보세요.',
      soundAlike: '발음이 \'프로텍트\'이므로, \'프로\' 선수가 팀을 \'지키는(tect)\' 모습을 연상하면 쉽습니다.',
      context: '환경 보호, 개인 정보 보안, 자외선 차단 등 무언가를 안전하게 유지해야 할 때 주로 쓰입니다.',
      synonymAntonym: '지키는 것은 guard, 반대로 위험에 빠뜨리는 것은 endanger라고 합니다.',
    }),
    {
      definition: 'to keep someone or something safe from injury, damage, or loss',
      synonyms: ['safeguard', 'shield', 'defend'],
      antonyms: ['attack', 'harm', 'endanger'],
      exampleSentences: [
        { en: 'Parents always try their best to keep their children safe from any potential danger.', ko: '부모님은 항상 자녀를 잠재적인 위험으로부터 지키기 위해 최선을 다합니다.' },
        { en: 'Wearing sunscreen is essential to prevent your skin from being damaged by the sun.', ko: '태양에 의해 피부가 손상되는 것을 막기 위해 자외선 차단제를 바르는 것은 필수적입니다.' },
      ],
    }
  ),
  word('protein', 'IG1s', 4, 'noun',
    ['탄수화물', '지방', '비타민', '무기질', '섬유질', '칼로리', '포도당', '효소', '호르몬', '아미노산'],
    tips({
      etymology: '그리스어 \'proteios\'에서 유래했으며 \'가장 중요한 것\'이라는 의미를 담고 있습니다.',
      visual: '헬스장에서 근육 성장을 위해 쉐이크를 마시는 운동선수의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프로-틴\'이므로 \'프로\'선수들이 \'틴(튀게)\' 근육을 키울 때 먹는 것이라 기억하세요.',
      context: '식단 조절이나 신체 조직의 구성 성분을 설명할 때 필수적으로 등장하는 영양소입니다.',
      synonymAntonym: '질소 화합물인 albumin과 유사하며, 영양가가 없는 상태인 junk food와 대비됩니다.',
    }),
    {
      definition: 'A complex organic substance that is a fundamental component of all living cells and is necessary for the growth and repair of body tissues.',
      synonyms: ['nutrient', 'polypeptide', 'albumin'],
      antonyms: ['carbohydrate', 'lipid', 'mineral'],
      exampleSentences: [
        { en: 'Lean chicken breast is an excellent source of high-quality dietary nutrients for muscle recovery.', ko: '기름기 없는 닭가슴살은 근육 회복을 위한 고품질 식이 영양소의 훌륭한 공급원입니다.' },
        { en: 'The biological structure of every cell in the human body relies on these essential building blocks.', ko: '인체 내 모든 세포의 생물학적 구조는 이러한 필수 구성 요소에 의존합니다.' },
      ],
    }
  ),
  word('protest', '단언하다', 5, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '라틴어 \'pro(앞에서)\'와 \'testari(증언하다)\'가 합쳐져 대중 앞에서 자신의 주장을 강하게 내세우는 느낌을 줍니다.',
      visual: '법정에서 증인이 판사 앞에서 손을 들고 자신의 결백을 강력하게 주장하는 장면을 상상해 보세요.',
      soundAlike: '\'프로(Pro)가 테스트(test) 결과에 대해 단언하다\'라고 연상하면 기억하기 쉽습니다.',
      context: '단순한 반대 시위뿐만 아니라, 격식 있는 자리에서 자신의 무죄나 진실을 강력히 주장할 때 주로 쓰입니다.',
      synonymAntonym: 'assert는 확신을 가지고 말하는 것이고, deny는 사실이 아니라고 강하게 부정하는 반대의 의미입니다.',
    }),
    {
      definition: 'To state something forcefully and positively, especially when others doubt it or to maintain one\'s innocence.',
      synonyms: ['assert', 'affirm', 'declare'],
      antonyms: ['deny', 'refute', 'contradict'],
      exampleSentences: [
        { en: 'The suspect continued to his innocence despite the overwhelming evidence presented by the prosecution.', ko: '용의자는 검찰이 제시한 압도적인 증거에도 불구하고 자신의 무죄를 계속해서 단언했다.' },
        { en: 'She felt the need to that she had no prior knowledge of the secret plan.', ko: '그녀는 자신이 그 비밀 계획에 대해 사전에 전혀 몰랐음을 단언할 필요를 느꼈다.' },
      ],
    }
  ),
  word('proud', '뽐내는', 6, 'noun',
    ['겸손한', '슬픈', '부끄러운', '평범한', '지루한', '화난', '불안한', '조용한', '어색한', '비겁한'],
    tips({
      etymology: '고대 프랑스어 \'prud\'에서 유래했으며, 가치 있고 용기 있다는 긍정적인 의미에서 점차 자신감이 넘치는 상태로 발전했습니다.',
      visual: '올림픽 금메달리스트가 시상대 위에서 가슴을 펴고 턱을 치켜든 당당한 모습을 상상해 보세요.',
      soundAlike: '\'프라우드\' 발음이 \'플라워(flower)\'와 비슷하게 들릴 수 있는데, 꽃이 활짝 피어나듯 자신감이 피어난 상태라고 기억하세요.',
      context: '자신의 성취나 가족의 성공에 대해 깊은 만족감을 느낄 때 주로 사용하며, 때로는 지나친 자만심을 뜻하기도 합니다.',
      synonymAntonym: 'Arrogant는 부정적인 뉘앙스의 거만함을 뜻하고, Humble은 자신을 낮추는 반대의 태도를 나타냅니다.',
    }),
    {
      definition: 'Feeling deep pleasure or satisfaction as a result of one\'s own achievements or qualities.',
      synonyms: ['arrogant', 'conceited', 'satisfied'],
      antonyms: ['humble', 'ashamed', 'modest'],
      exampleSentences: [
        { en: 'The parents felt extremely happy and honored when their daughter graduated at the top of her class.', ko: '딸이 반에서 1등으로 졸업했을 때 부모님은 매우 기쁘고 자랑스러웠습니다.' },
        { en: 'He has a very high opinion of his own abilities and often acts superior to his colleagues.', ko: '그는 자신의 능력에 대해 매우 자부심이 강하며 종종 동료들보다 우월하게 행동합니다.' },
      ],
    }
  ),
  word('prove', '시험하다', 7, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '라틴어 probare에서 유래하여 \'가치를 시험하다\' 혹은 \'좋은 것임을 보여주다\'라는 의미를 담고 있습니다.',
      visual: '과학자가 실험실에서 가설이 맞는지 확인하기 위해 복잡한 실험 장치를 가동하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'풀어봐\'와 비슷합니다. 어려운 문제를 \'풀어봐\'서 실력을 증명하는 상황을 연상하세요.',
      context: '법정에서 증거를 제시하거나 수학 문제를 풀 때 결론이 참임을 보여주는 상황에서 자주 쓰입니다.',
      synonymAntonym: '확인하다(verify)와 유의어이며, 반대로 틀렸음을 입증하다(disprove)와는 반대 관계입니다.',
    }),
    {
      definition: 'to demonstrate the truth or existence of something by evidence or argument',
      synonyms: ['verify', 'validate', 'confirm'],
      antonyms: ['disprove', 'refute', 'contradict'],
      exampleSentences: [
        { en: 'The prosecutor presented new evidence to the jury to demonstrate the suspect\'s guilt.', ko: '검사는 피고인의 유죄를 입증하기 위해 배심원단에게 새로운 증거를 제시했습니다.' },
        { en: 'Recent laboratory tests show that the new medicine is effective against the virus.', ko: '최근의 실험실 테스트는 그 신약이 바이러스에 효과가 있음을 증명합니다.' },
      ],
    }
  ),
  word('provide', '준비하다', 4, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'videre(보다)\'가 합쳐져, 앞날을 내다보고 미리 챙겨둔다는 의미에서 유래했습니다.',
      visual: '뷔페 식당에서 직원이 손님들을 위해 신선한 음식을 계속해서 채워 넣는 모습을 상상해 보세요.',
      soundAlike: '\'프로(pro)가 봐(vide)준다\'라고 생각하며, 전문가가 필요한 물품을 미리 챙겨주는 장면을 연상하세요.',
      context: '비즈니스나 일상 대화에서 서비스, 정보, 기회 등을 상대방에게 건네줄 때 가장 흔히 쓰입니다.',
      synonymAntonym: '공급한다는 뜻의 supply와 비슷하지만, 거절하거나 빼앗는 deprive와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make something available for use or to supply someone with something they need',
      synonyms: ['supply', 'furnish', 'equip'],
      antonyms: ['withhold', 'deprive', 'remove'],
      exampleSentences: [
        { en: 'The local government will supply enough food to the refugees after the natural disaster.', ko: '지방 정부는 자연재해 이후 난민들에게 충분한 음식을 제공할 것입니다.' },
        { en: 'Our company aims to offer high-quality educational materials for students worldwide.', ko: '우리 회사는 전 세계 학생들에게 고품질의 교육 자료를 제공하는 것을 목표로 합니다.' },
      ],
    }
  ),
  word('province', '주', 5, 'noun',
    ['도시', '마을', '국가', '대륙', '행정', '구역', '수도', '영토', '항구', '섬'],
    tips({
      etymology: '라틴어 \'provincia\'에서 유래했으며, 로마 제국이 정복하여 다스리던 외부 영토를 뜻하던 말에서 행정 구역이라는 의미가 되었습니다.',
      visual: '지도에서 국가 전체가 아닌, 선으로 나뉘어 있는 커다란 행정 구역 하나를 색칠하는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'프로빈스\'이므로, \'프로(Pro)급 빈(Bin)틈 없는 관리\'가 필요한 지방 행정 구역이라고 연상해 보세요.',
      context: '캐나다의 온타리오나 중국의 성(省)처럼 국가 아래의 큰 자치 단위를 말할 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 region은 넓은 지역을 뜻하고, 반의어인 metropolis는 거대 도시를 뜻하여 규모와 성격이 대비됩니다.',
    }),
    {
      definition: 'A principal administrative division of certain countries or empires.',
      synonyms: ['territory', 'region', 'district'],
      antonyms: ['metropolis', 'capital', 'center'],
      exampleSentences: [
        { en: 'The northern province is famous for its beautiful mountains and cold winters.', ko: '그 북쪽 주는 아름다운 산과 추운 겨울로 유명합니다.' },
        { en: 'Each province has its own local government to manage regional affairs.', ko: '각 주는 지역 사무를 관리하기 위한 자체 지방 정부를 가지고 있습니다.' },
      ],
    }
  ),
  word('provoke', '하다', 8, 'verb',
    ['진정시키다', '억제하다', '방지하다', '무시하다', '위로하다', '중단하다', '칭찬하다', '동의하다', '포기하다', '수용하다'],
    tips({
      etymology: '라틴어 \'pro(앞으로)\'와 \'vocare(부르다)\'가 합쳐져 상대방을 앞으로 불러내어 싸움을 거는 느낌을 줍니다.',
      visual: '평화로운 벌집을 막대기로 툭툭 건드려 벌들이 화나서 튀어나오는 장면을 상상해 보세요.',
      soundAlike: '\'프로보크\' 발음이 \'프로가 보크(야구 반칙)를 범하게 유도하다\'처럼 들려 화를 돋우는 상황을 연상시킵니다.',
      context: '주로 부정적인 감정이나 격렬한 반응을 이끌어낼 때 사용하며, 논쟁이나 싸움의 도화선이 됩니다.',
      synonymAntonym: '불을 지피는 \'incite\'와 비슷하지만, 차분하게 가라앉히는 \'soothe\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to deliberately cause a strong reaction, typically an annoying or angry one, in someone',
      synonyms: ['instigate', 'incite', 'arouse'],
      antonyms: ['appease', 'mollify', 'pacify'],
      exampleSentences: [
        { en: 'The politician\'s controversial remarks were intended to a response from the opposition party.', ko: '그 정치인의 논란이 많은 발언은 야당의 반응을 유도하기 위한 의도였다.' },
        { en: 'Be careful not to the stray dog, as it might become aggressive and bite.', ko: '유기견이 공격적으로 변해 물 수도 있으니 자극하지 않도록 조심해라.' },
      ],
    }
  ),
  word('psychology', '심리학', 6, 'noun',
    ['생물학', '사회학', '철학', '인류학', '경제학', '정치학', '지리학', '언어학', '고고학', '천문학'],
    tips({
      etymology: '그리스어 \'psyche(영혼, 정신)\'와 \'logia(학문)\'가 결합되어 인간의 마음을 연구하는 학문을 뜻합니다.',
      visual: '상담실 소파에 앉아 자신의 내면을 털어놓는 사람과 이를 분석하는 상담사의 모습을 상상해 보세요.',
      soundAlike: '\'싸이코(psycho)\'라는 단어와 발음이 비슷하므로 정신과 관련된 학문임을 쉽게 연상할 수 있습니다.',
      context: '인간의 행동 원인이나 감정의 변화를 과학적으로 분석할 때 주로 사용되는 학술적 용어입니다.',
      synonymAntonym: '정신 상태를 뜻하는 mentality와 유사하며, 육체적 측면을 다루는 physiology와 대비됩니다.',
    }),
    {
      definition: 'The scientific study of the human mind and its functions, especially those affecting behavior in a given context.',
      synonyms: ['mentality', 'mindset', 'psychotherapy'],
      antonyms: ['physiology', 'biology', 'physics'],
      exampleSentences: [
        { en: 'Understanding child psychology helps parents respond better to their children\'s emotional needs.', ko: '아동 심리학을 이해하는 것은 부모가 자녀의 정서적 요구에 더 잘 대응하도록 도와줍니다.' },
        { en: 'The marketing team analyzed the psychology of consumers to improve their advertising strategy.', ko: '마케팅 팀은 광고 전략을 개선하기 위해 소비자 심리를 분석했습니다.' },
      ],
    }
  ),
  word('pub', '펍', 7, 'noun',
    ['도서관', '박물관', '체육관', '교회', '학교', '병원', '은행', '우체국', '경찰서', '소방서'],
    tips({
      etymology: 'Public house의 줄임말로, 지역 공동체 사람들이 모여 술과 음식을 즐기던 공공의 장소라는 의미에서 유래했습니다.',
      visual: '어두운 조명 아래 나무 테이블에 앉아 시원한 맥주 잔을 부딪히며 웃고 떠드는 사람들의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'펍\'하고 터지는 맥주 거품 소리나 병뚜껑 따는 소리와 비슷하다고 생각하면 기억하기 쉽습니다.',
      context: '영국이나 아일랜드 문화에서 단순한 술집을 넘어 이웃들이 모여 사교 활동을 하는 동네 사랑방 같은 역할을 합니다.',
      synonymAntonym: 'Bar나 Tavern과 비슷하지만 더 친근한 느낌이며, 집을 뜻하는 Home과는 대조되는 외부 사교 공간입니다.',
    }),
    {
      definition: 'An establishment where alcoholic beverages are served to be consumed on the premises, often providing food and a social atmosphere.',
      synonyms: ['tavern', 'bar', 'inn'],
      antonyms: ['residence', 'workplace', 'library'],
      exampleSentences: [
        { en: 'Local residents gathered at the neighborhood establishment to watch the football match together.', ko: '지역 주민들이 축구 경기를 함께 보기 위해 동네 선술집에 모였습니다.' },
        { en: 'After a long day of hiking, we found a cozy place in the village to have a warm meal and a drink.', ko: '긴 하이킹 끝에 우리는 마을에서 따뜻한 식사와 술 한 잔을 즐길 수 있는 아늑한 장소를 찾았습니다.' },
      ],
    }
  ),
  word('public', '심리', 4, 'noun',
    ['개인', '비밀', '사생활', '내면', '정신', '의식', '감정', '사고', '본능', '무의식'],
    tips({
      etymology: '라틴어 publicus에서 유래하여 \'사람들\' 또는 \'공동체\'를 의미하며, 개인적인 것과 반대되는 개념입니다.',
      visual: '공원에 모여 있는 수많은 시민들의 모습을 상상하며 대중적인 이미지를 떠올려 보세요.',
      soundAlike: '퍼블릭 -> \'펴 불리(익)\' 사람들이 널리 펴서 이익을 공유하는 공공의 장소라고 외워보세요.',
      context: '정부 정책이나 공공 도서관처럼 누구나 이용할 수 있는 열린 상태를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'private(사적인)과 정반대되는 개념으로, general이나 common과 유사한 맥락을 가집니다.',
    }),
    {
      definition: 'Relating to or involving people in general rather than being limited to a specific small group.',
      synonyms: ['communal', 'general', 'universal'],
      antonyms: ['private', 'personal', 'confidential'],
      exampleSentences: [
        { en: 'The government decided to open the new park to the general population.', ko: '정부는 새 공원을 일반 대중에게 개방하기로 결정했습니다.' },
        { en: 'Smoking is strictly prohibited in all shared indoor spaces.', ko: '모든 공공 실내 장소에서는 흡연이 엄격히 금지됩니다.' },
      ],
    }
  ),
  word('publish', '발표', 5, 'noun',
    ['은폐', '삭제', '보류', '수정', '거절', '침묵', '비밀', '중단', '연기', '폐기'],
    tips({
      etymology: '라틴어 \'publicare\'에서 유래하여 \'대중에게 널리 알리다\'라는 의미를 담고 있습니다.',
      visual: '인쇄기에서 갓 나온 따끈따끈한 책들이 서점 매대에 진열되는 모습을 상상해 보세요.',
      soundAlike: '\'퍼블리쉬\'는 \'펴볼래?\'와 발음이 비슷합니다. 책을 펴서 세상에 보여주는 장면을 연상하세요.',
      context: '주로 도서, 잡지, 기사 또는 연구 결과를 대중에게 공식적으로 내놓을 때 사용됩니다.',
      synonymAntonym: '세상에 내놓는 release와 반대로, 비밀로 간직하는 conceal을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'To prepare and issue a book, journal, or piece of music for public sale or distribution.',
      synonyms: ['issue', 'release', 'distribute'],
      antonyms: ['conceal', 'suppress', 'withhold'],
      exampleSentences: [
        { en: 'The academic journal decided to issue the groundbreaking research findings in their next volume.', ko: '그 학술지는 다음 호에 획기적인 연구 결과를 발표하기로 결정했습니다.' },
        { en: 'Many independent authors now choose to release their novels through digital platforms.', ko: '많은 독립 작가들이 이제 디지털 플랫폼을 통해 자신의 소설을 출판하는 것을 선택합니다.' },
      ],
    }
  ),
  word('pull', '끌다', 6, 'noun',
    ['밀기', '정지', '거절', '해방', '방출', '압박', '회피', '고정', '상승', '분리'],
    tips({
      etymology: '고대 영어 \'pullian\'에서 유래하여 무언가를 움켜쥐고 자기 쪽으로 당기는 동작을 의미합니다.',
      visual: '문 손잡이에 \'PULL\'이라고 적힌 표지판을 보고 몸쪽으로 힘껏 당기는 모습을 상상하세요.',
      soundAlike: '수영장의 \'풀(pool)\'에서 물을 뒤로 당기며 헤엄치는 동작을 연상하면 쉽습니다.',
      context: '물리적인 힘뿐만 아니라 사람의 마음을 끄는 매력이나 영향력을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'tug나 drag는 강하게 끄는 느낌을 주며, 반대로 push는 반대 방향으로 힘을 가하는 것입니다.',
    }),
    {
      definition: 'the act of applying force to something so that it moves towards the source of the force',
      synonyms: ['tug', 'jerk', 'attraction'],
      antonyms: ['push', 'repulsion', 'shove'],
      exampleSentences: [
        { en: 'The child gave a sharp tug on his mother\'s sleeve to get her attention.', ko: '아이는 엄마의 주의를 끌기 위해 소매를 세게 잡아당겼습니다.' },
        { en: 'Magnetic force exerts a powerful downward move on the metal filings.', ko: '자기력은 금속 가루에 강력한 하향 인력을 행사합니다.' },
      ],
    }
  ),
  word('pump', '펌프스', 7, 'noun',
    ['운동화', '슬리퍼', '장화', '샌들', '등산화', '덧신', '고무신', '축구화', '발레슈즈', '실내화'],
    tips({
      etymology: '16세기경 네덜란드어 \'pomp\'에서 유래했으며, 원래는 배의 물을 퍼내는 펌프 장치와 관련이 있었으나 나중에 끈 없는 신발의 형태를 지칭하게 되었습니다.',
      visual: '끈이나 단추가 없고 발등이 깊게 파인 세련된 여성용 구두의 실루엣을 상상해 보세요.',
      soundAlike: '발음이 \'펌프\'와 같으므로, 공기를 주입하듯 발을 쏙 집어넣는 가벼운 구두라고 기억하면 쉽습니다.',
      context: '격식을 차리는 파티나 사무실에서 정장과 함께 매치하는 가장 기본적인 구두 종류입니다.',
      synonymAntonym: '유사한 신발로는 court shoe가 있으며, 반대되는 개념으로는 끈이 복잡한 boot나 casual sneaker를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'A light shoe that has a low-cut front, no fastens, and is typically worn by women for formal occasions.',
      synonyms: ['court shoe', 'stiletto', 'slip-on'],
      antonyms: ['boot', 'sneaker', 'sandal'],
      exampleSentences: [
        { en: 'She decided to wear a classic black leather pair for the wedding ceremony.', ko: '그녀는 결혼식을 위해 클래식한 검은색 가죽 구두를 신기로 결정했다.' },
        { en: 'These elegant shoes are comfortable enough to wear throughout the entire work day.', ko: '이 우아한 펌프스는 근무 시간 내내 신고 있을 수 있을 만큼 편안하다.' },
      ],
    }
  ),
  word('punch', '주먹질', 4, 'noun',
    ['발차기', '포옹', '악수', '쓰다듬기', '밀치기', '끄덕임', '손짓', '박수', '인사', '달리기'],
    tips({
      etymology: '라틴어 \'pungere(찌르다)\'에서 유래하여 날카롭고 강하게 타격하는 동작을 의미하게 되었습니다.',
      visual: '권투 선수가 링 위에서 상대방을 향해 주먹을 꽉 쥐고 강하게 내지르는 모습을 상상해 보세요.',
      soundAlike: '\'펀치\'라는 발음은 무언가 \'퍽\' 하고 치는 소리와 비슷하여 타격감을 연상시킵니다.',
      context: '스포츠 경기뿐만 아니라 음료의 한 종류나 강한 영향력을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'blow나 strike와 비슷하지만, 주먹을 사용한다는 점이 특징이며 반대로는 부드러운 touch가 있습니다.',
    }),
    {
      definition: 'a forceful blow delivered with a closed fist',
      synonyms: ['blow', 'strike', 'hit'],
      antonyms: ['caress', 'tap', 'stroke'],
      exampleSentences: [
        { en: 'The boxer landed a powerful right to his opponent\'s jaw.', ko: '그 권투 선수는 상대의 턱에 강력한 오른손 주먹질을 날렸다.' },
        { en: 'He dodged the swing and countered with a quick jab.', ko: '그는 휘두르는 주먹을 피하고 빠른 주먹질로 반격했다.' },
      ],
    }
  ),
  word('punish', '벌하다', 5, 'verb',
    ['칭찬하다', '보상하다', '용서하다', '격려하다', '추천하다', '허락하다', '방관하다', '축하하다', '위로하다', '환영하다'],
    tips({
      etymology: '라틴어 \'punire\'에서 유래되었으며, 고통이나 형벌을 의미하는 \'poena\'와 연결됩니다.',
      visual: '잘못을 저지른 아이가 벽을 보고 서 있거나 반성문을 쓰는 엄격한 훈육 장면을 상상하세요.',
      soundAlike: '\'퍼니쉬\' 발음이 \'퍼니(funny)\'와 비슷하지만, 뜻은 전혀 즐겁지 않은 \'벌주다\'임을 기억하세요.',
      context: '법적 처벌뿐만 아니라 스포츠 경기에서 반칙에 대해 불이익을 주는 상황에서도 자주 쓰입니다.',
      synonymAntonym: '상에게 보상을 주는 reward와 반대되는 개념으로, 잘못에 대가를 치르게 하는 행위입니다.',
    }),
    {
      definition: 'to impose a penalty on someone as a result of their fault or transgression',
      synonyms: ['penalize', 'chastise', 'discipline'],
      antonyms: ['reward', 'pardon', 'forgive'],
      exampleSentences: [
        { en: 'The judge decided to penalize the criminal with a heavy fine to discourage future crimes.', ko: '판사는 향후 범죄를 방지하기 위해 그 범죄자에게 무거운 벌금을 부과하여 벌하기로 결정했습니다.' },
        { en: 'Parents often find it difficult to discipline their children when they break important household rules.', ko: '부모들은 아이들이 중요한 집안 규칙을 어겼을 때 그들을 벌하는 것을 종종 어렵게 느낍니다.' },
      ],
    }
  ),
  word('pupil', '흔히', 6, 'adverb',
    ['빠르게', '천천히', '자주', '가끔', '항상', '이미', '곧', '직접', '간접적으로', '정확히'],
    tips({
      etymology: '라틴어 pupilla에서 유래하여 \'작은 인형\'을 뜻하며, 눈동자에 비친 작은 모습이나 가르침을 받는 어린 학생을 의미합니다.',
      visual: '교실 책상에 앉아 선생님을 초롱초롱한 눈망울로 바라보는 어린 학생의 눈동자를 상상해 보세요.',
      soundAlike: '발음이 \'퓨필\'로 들리는데, \'표(Pyo)가 날 정도로 필(Feel)이 충만한 모범생\'으로 기억하면 쉽습니다.',
      context: '학교 교육 현장에서 학생을 지칭하거나 안과 검진에서 눈의 검은자위를 설명할 때 주로 사용됩니다.',
      synonymAntonym: '학습자를 뜻하는 student와 유의어이며, 가르치는 사람인 teacher와는 반대 개념입니다.',
    }),
    {
      definition: 'A person, especially a child at school, who is being taught by a teacher, or the small black round area in the center of the eye.',
      synonyms: ['student', 'learner', 'schoolchild'],
      antonyms: ['teacher', 'instructor', 'educator'],
      exampleSentences: [
        { en: 'The primary school teacher welcomed every new learner to the classroom on the first day.', ko: '초등학교 선생님은 첫날 교실로 들어오는 모든 새로운 학생들을 환영했습니다.' },
        { en: 'Bright light causes the dark circular opening in the center of the eye to contract quickly.', ko: '밝은 빛은 눈 중앙의 검은 구멍이 빠르게 수축하게 만듭니다.' },
      ],
    }
  ),
  word('puppy', '강아지', 1, 'noun',
    ['고양이', '송아지', '망아지', '사자', '호랑이', '토끼', '다람쥐', '거북이', '햄스터', '여우'],
    tips({
      etymology: '프랑스어 \'poupée(인형)\'에서 유래하여 작고 귀여운 존재를 뜻하게 되었습니다.',
      visual: '꼬리를 세차게 흔들며 현관문으로 달려오는 어린 개를 상상해 보세요.',
      soundAlike: '\'퍼피\'라고 발음할 때 입술이 가볍게 터지는 소리가 강아지가 짖는 소리처럼 경쾌합니다.',
      context: '반려견을 처음 입양했을 때나 애견 카페에서 어린 동물을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '성체인 dog와 대비되며, 비슷한 말로는 새끼를 뜻하는 pup이 있습니다.',
    }),
    {
      definition: 'A young domestic dog, specifically one that is less than a year old.',
      synonyms: ['pup', 'whelp', 'pooch'],
      antonyms: ['adult dog', 'hound', 'beast'],
      exampleSentences: [
        { en: 'The golden retriever gave birth to five healthy littermates yesterday.', ko: '그 골든 리트리버는 어제 다섯 마리의 건강한 강아지들을 낳았습니다.' },
        { en: 'A small furry creature chewed on my slippers while I was sleeping.', ko: '내가 자는 동안 작고 털이 많은 강아지가 내 슬리퍼를 물어뜯었습니다.' },
      ],
    }
  ),
  word('purchase', '구입하다', 7, 'verb',
    ['판매하다', '대여하다', '교환하다', '기부하다', '수리하다', '제작하다', '배달하다', '포장하다', '전시하다', '폐기하다'],
    tips({
      etymology: '프랑스어 \'pourchacier\'에서 유래했으며, 원래 \'추적하여 얻다\'라는 뜻에서 \'돈을 지불하고 얻다\'로 변했습니다.',
      visual: '백화점에서 신용카드를 내밀고 쇼핑백을 건네받는 결제 순간을 상상해 보세요.',
      soundAlike: '\'퍼처스\'라고 발음하며, \'퍼뜩(빨리) 사스(샀어)\'라고 연상하면 기억하기 쉽습니다.',
      context: '일상적인 쇼핑뿐만 아니라 기업의 자산 매입이나 부동산 거래 같은 공식적인 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'buy보다 격식 있는 표현이며, 반대말인 sell과 짝을 지어 외우면 효과적입니다.',
    }),
    {
      definition: 'to acquire something by paying money for it',
      synonyms: ['buy', 'acquire', 'procure'],
      antonyms: ['sell', 'market', 'vend'],
      exampleSentences: [
        { en: 'The company decided to purchase new equipment to increase production efficiency.', ko: '그 회사는 생산 효율을 높이기 위해 새로운 장비를 구입하기로 결정했습니다.' },
        { en: 'Customers can purchase tickets online or at the box office directly.', ko: '고객들은 온라인이나 매표소에서 직접 티켓을 구매할 수 있습니다.' },
      ],
    }
  ),
  word('pure', '순수한', 4, 'adjective',
    ['오염된', '복잡한', '인공적인', '불결한', '혼합된', '부패한', '가공된', '탁한', '위조된', '불순한'],
    tips({
      etymology: '라틴어 \'purus\'에서 유래되었으며, 깨끗하고 섞인 것이 없는 상태를 의미합니다.',
      visual: '투명한 유리잔에 담긴 맑은 샘물이나 갓 내린 하얀 눈을 상상해 보세요.',
      soundAlike: '발음이 \'퓨어\'로 들리는데, 피부가 \'뽀얗다\'는 느낌과 연결하면 기억하기 쉽습니다.',
      context: '화학 물질의 순도나 사람의 깨끗한 마음씨, 혹은 다른 것이 섞이지 않은 혈통을 말할 때 주로 쓰입니다.',
      synonymAntonym: '깨끗한 clean과 유의어이며, 더러운 것이 섞인 impure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'not mixed with any other substance or material; clean and free from harmful elements',
      synonyms: ['unadulterated', 'spotless', 'genuine'],
      antonyms: ['contaminated', 'polluted', 'mixed'],
      exampleSentences: [
        { en: 'The mountain stream provides a source of pure water for the local village.', ko: '그 산의 시냇물은 지역 마을에 순수한 물의 원천을 제공합니다.' },
        { en: 'She showed pure joy when she heard the wonderful news about her promotion.', ko: '그녀는 승진에 관한 멋진 소식을 들었을 때 순수한 기쁨을 보여주었습니다.' },
      ],
    }
  ),
  word('purple', '자줏빛의', 5, 'adjective',
    ['빨간색의', '노란색의', '초록색의', '파란색의', '주황색의', '검은색의', '하얀색의', '분홍색의', '갈색의', '회색의'],
    tips({
      etymology: '라틴어 purpura에서 유래했으며, 고대에는 매우 귀한 조개에서 추출한 보라색 염료를 의미했습니다.',
      visual: '포도 송이나 잘 익은 가지의 진한 색깔을 떠올리면 색상을 쉽게 기억할 수 있습니다.',
      soundAlike: '발음이 \'퍼플\'인데, 포도즙이 옷에 \'퍼질\' 때의 색깔이라고 연상해 보세요.',
      context: '서양에서는 전통적으로 왕족이나 귀족의 권위를 상징하는 고귀한 색으로 자주 쓰입니다.',
      synonymAntonym: 'violet이나 plum과 비슷한 계열이며, 보색 관계에 있는 노란색과는 대비됩니다.',
    }),
    {
      definition: 'having a color that is a mixture of red and blue, often associated with royalty or luxury',
      synonyms: ['violet', 'lavender', 'plum'],
      antonyms: ['yellow', 'colorless', 'pale'],
      exampleSentences: [
        { en: 'The sunset painted the entire sky in deep shades of violet and magenta.', ko: '노을이 온 하늘을 진한 보랏빛과 자줏빛으로 물들였습니다.' },
        { en: 'Kings and queens in ancient times often wore robes of this regal color.', ko: '고대 왕과 왕비들은 종종 이 제왕적인 색상의 예복을 입었습니다.' },
      ],
    }
  ),
  word('purpose', '목적', 6, 'noun',
    ['기준', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '우연'],
    tips({
      etymology: '라틴어 \'pro(앞에)\'와 \'ponere(두다)\'가 합쳐져 \'앞에 놓인 목표\'라는 의미에서 유래했습니다.',
      visual: '달리기 선수가 결승선(목표)을 향해 전력 질주하는 모습을 상상해 보세요.',
      soundAlike: '\'퍼포즈\' 발음이 \'퍼뜩\' 떠오르는 목표라는 느낌으로 기억하면 쉽습니다.',
      context: '어떤 행동을 왜 하는지 묻고 싶을 때 \'What is the purpose?\'라고 질문할 수 있습니다.',
      synonymAntonym: '목표를 뜻하는 goal과 유의어이며, 아무 이유 없는 상태인 accident와 반대됩니다.',
    }),
    {
      definition: 'the reason for which something is done or created or for which something exists',
      synonyms: ['objective', 'intention', 'goal'],
      antonyms: ['chance', 'accident', 'randomness'],
      exampleSentences: [
        { en: 'The main objective of this meeting is to discuss the new project.', ko: '이 회의의 주요 목적은 새 프로젝트를 논의하는 것입니다.' },
        { en: 'She traveled to London for the sole intent of visiting the national museum.', ko: '그녀는 국립 박물관을 방문하려는 오직 하나의 목적을 위해 런던으로 여행했습니다.' },
      ],
    }
  ),
  word('pursue', '쫓다', 7, 'verb',
    ['행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다'],
    tips({
      etymology: '라틴어 prosequi에서 유래했으며, pro(앞으로)와 sequi(따르다)가 합쳐져 목표를 향해 계속 나아가는 이미지를 담고 있습니다.',
      visual: '어두운 밤, 형사가 범인을 잡기 위해 골목길을 끝까지 달려가는 긴박한 추격 장면을 상상해 보세요.',
      soundAlike: '발음이 \'퍼슈\'와 비슷한데, 꿈을 향해 \'퍼\'주는 열정으로 목표를 \'슈\'웅 하고 쫓아가는 모습을 연상해 보세요.',
      context: '단순히 물리적으로 뒤쫓는 것뿐만 아니라 학위, 경력, 꿈과 같은 추상적인 목표를 달성하려 노력할 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 끈기 있게 찾는 seek와 비슷하지만, 도망치듯 피하는 avoid와는 정반대의 행동입니다.',
    }),
    {
      definition: 'to follow someone or something in order to catch them, or to try to achieve a specific goal over a period of time',
      synonyms: ['chase', 'seek', 'track'],
      antonyms: ['flee', 'avoid', 'retreat'],
      exampleSentences: [
        { en: 'The police officer had to sprint through the narrow alleyway to catch the suspect.', ko: '경찰관은 용의자를 잡기 위해 좁은 골목길을 전력 질주해야 했습니다.' },
        { en: 'She decided to move to New York to follow her lifelong dream of becoming a professional dancer.', ko: '그녀는 전문 무용수가 되겠다는 평생의 꿈을 쫓기 위해 뉴욕으로 이사하기로 결심했습니다.' },
      ],
    }
  ),
  word('push', '밀다', 2, 'verb',
    ['당기다', '멈추다', '던지다', '잡다', '올리다', '내리다', '흔들다', '부수다', '고치다', '숨기다'],
    tips({
      etymology: '라틴어 \'pulsare\'에서 유래하여 \'치다\' 혹은 \'강하게 밀어내다\'라는 의미를 담고 있습니다.',
      visual: '닫힌 문에 붙어있는 \'PUSH\' 스티커를 보고 양손으로 문을 힘껏 밀고 들어가는 모습을 상상하세요.',
      soundAlike: '\'푸쉬\'하고 바람이 빠져나가는 소리처럼 손바닥으로 공기를 밀어내는 동작을 연결해 보세요.',
      context: '물리적으로 물건을 옮길 때뿐만 아니라, 누군가에게 어떤 일을 하도록 강요하거나 독려할 때도 쓰입니다.',
      synonymAntonym: '반대말인 pull(당기다)과 함께 세트로 외우면 문에 붙은 안내문을 이해하기 훨씬 쉽습니다.',
    }),
    {
      definition: 'to use physical pressure against an object to move it away from oneself',
      synonyms: ['shove', 'thrust', 'propel'],
      antonyms: ['pull', 'drag', 'tow'],
      exampleSentences: [
        { en: 'Heavy glass doors require a lot of strength to open when you need to enter the building.', ko: '건물에 들어가야 할 때 무거운 유리문은 열기 위해 많은 힘으로 밀어야 합니다.' },
        { en: 'Parents often encourage their children to excel in school by giving them a gentle motivational nudge.', ko: '부모님들은 종종 아이들에게 가벼운 동기부여를 주어 학교에서 두각을 나타내도록 독려하곤 합니다.' },
      ],
    }
  ),
  word('put', '놓다', 3, 'noun',
    ['가져오다', '던지다', '부수다', '숨기다', '찾다', '만들다', '지우다', '빌리다', '팔다', '사다'],
    tips({
      etymology: '고대 영어 \'putian\'에서 유래하여 무언가를 밀거나 특정 위치로 옮기는 동작을 의미합니다.',
      visual: '책상 위에 무거운 책을 조심스럽게 내려놓는 손동작을 상상해 보세요.',
      soundAlike: '골프에서 공을 구멍에 넣으려고 살짝 치는 \'퍼트(putt)\'와 발음이 비슷합니다.',
      context: '주로 물건의 위치를 옮기거나 자신의 생각을 글로 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'place와 유사하며, 반대로 위치에서 치우는 것은 remove라고 합니다.',
    }),
    {
      definition: 'To move something into a particular place or position.',
      synonyms: ['place', 'set', 'position'],
      antonyms: ['remove', 'take', 'displace'],
      exampleSentences: [
        { en: 'Please leave your keys on the table near the entrance.', ko: '입구 근처 탁자 위에 열쇠를 놓아 주세요.' },
        { en: 'She decided to express her feelings into words in a letter.', ko: '그녀는 자신의 감정을 편지에 글로 옮기기로 결심했습니다.' },
      ],
    }
  ),
  word('puzzle', '당황', 1, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '16세기경 \'pose(당황하게 하다)\'에서 유래하여 복잡한 문제나 상황을 뜻하게 되었습니다.',
      visual: '조각들이 엉망으로 섞여 있어 어디서부터 손을 대야 할지 몰라 머리를 긁적이는 모습을 상상하세요.',
      soundAlike: '발음이 \'퍼즐\'과 같으므로, 조각 맞추기 퍼즐이 너무 어려워 당황하는 상황을 연상하세요.',
      context: '일상 대화에서 도저히 이해할 수 없는 수수께끼 같은 사람이나 상황을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'confusion과 유사하며, 명확함을 뜻하는 clarity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a situation, person, or thing that is difficult to understand or explain',
      synonyms: ['mystery', 'enigma', 'conundrum'],
      antonyms: ['solution', 'explanation', 'clarity'],
      exampleSentences: [
        { en: 'The sudden disappearance of the documents remains a complete mystery to the entire office.', ko: '서류가 갑자기 사라진 사건은 사무실 전체에 큰 당혹감을 주는 미스터리로 남아 있다.' },
        { en: 'Her strange behavior last night was a real head-scratcher for all her friends.', ko: '어젯밤 그녀의 이상한 행동은 모든 친구들에게 정말 당황스러운 수수께끼였다.' },
      ],
    }
  ),
  word('qualify', '부여하다', 4, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '라틴어 \'qualis(어떤 종류의)\'와 \'facere(만들다)\'가 합쳐져 특정 자격을 갖추게 만든다는 의미에서 유래했습니다.',
      visual: '올림픽 국가대표 선발전에서 결승선을 통과하며 본선 진출권을 획득하는 선수의 모습을 상상해 보세요.',
      soundAlike: '\'퀄리티(Quality)를 파이(fy)하게 만들다\'라고 생각하면 품질이나 자격을 갖춘다는 느낌을 쉽게 기억할 수 있습니다.',
      context: '단순히 자격을 얻는 것 외에도, 앞서 한 말의 의미를 제한하거나 수정하여 조건을 덧붙일 때도 자주 쓰입니다.',
      synonymAntonym: '자격을 얻는다는 의미의 certify와 반대되는 개념인 disqualify를 함께 묶어서 외우면 효과적입니다.',
    }),
    {
      definition: 'to reach the necessary standard or to have the right to do something, or to limit the strength of a previous statement',
      synonyms: ['certify', 'empower', 'modify'],
      antonyms: ['disqualify', 'fail', 'prohibit'],
      exampleSentences: [
        { en: 'The athlete worked hard for years to earn the right to compete in the championship finals.', ko: '그 선수는 챔피언십 결승전에 출전할 자격을 얻기 위해 수년간 열심히 노력했습니다.' },
        { en: 'She felt the need to limit her previous praise by adding that the project still had some flaws.', ko: '그녀는 프로젝트에 여전히 몇 가지 결함이 있다는 점을 덧붙임으로써 이전의 칭찬을 수정할 필요를 느꼈습니다.' },
      ],
    }
  ),
  word('quality', '질', 5, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '라틴어 qualis(어떤 종류의)에서 유래하여 사물의 본질적인 특성이나 우수함을 뜻하게 되었습니다.',
      visual: '명품 가방의 꼼꼼한 바느질과 저가 제품의 거친 마감을 비교하는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'퀄리티\'와 비슷하며, 우리말에서도 수준이 높을 때 \'퀄리티가 좋다\'라고 자주 표현합니다.',
      context: '제품의 성능뿐만 아니라 사람의 성격적 특성을 나타낼 때도 자주 쓰이는 단어입니다.',
      synonymAntonym: 'excellence와는 긍정적인 가치를 공유하며, inferiority와는 수준의 고저 차이로 대조됩니다.',
    }),
    {
      definition: 'the degree of excellence of something or a distinctive attribute possessed by someone',
      synonyms: ['standard', 'excellence', 'characteristic'],
      antonyms: ['inferiority', 'imperfection', 'worthlessness'],
      exampleSentences: [
        { en: 'The company focuses on improving the durability and overall value of its products.', ko: '그 회사는 제품의 내구성과 전반적인 질을 개선하는 데 집중합니다.' },
        { en: 'Patience is a necessary trait for anyone working in the teaching profession.', ko: '인내심은 교육직에 종사하는 누구에게나 필요한 자질입니다.' },
      ],
    }
  ),
  word('quantity', '양', 6, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '라틴어 \'quantus(얼마나 많은)\'에서 유래하여 사물의 수량이나 분량을 나타냅니다.',
      visual: '창고에 가득 쌓여 있는 박스들의 엄청난 숫자를 세고 있는 장면을 상상해 보세요.',
      soundAlike: '\'콴티티\'라고 발음할 때 \'큰 티(T)자\' 모양의 저울에 가득 담긴 물건의 무게를 떠올려 보세요.',
      context: '주로 품질(quality)과 대비되어 얼마나 많이 있는지를 강조할 때 자주 쓰입니다.',
      synonymAntonym: 'amount와 유의어 관계이며, 셀 수 없는 아주 작은 상태인 zero와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The total amount or number of something that can be measured or counted.',
      synonyms: ['amount', 'volume', 'measure'],
      antonyms: ['quality', 'scarcity', 'nothingness'],
      exampleSentences: [
        { en: 'The factory produces a vast amount of goods in large numbers every single day.', ko: '그 공장은 매일 엄청난 양의 제품을 대량으로 생산합니다.' },
        { en: 'It is often better to focus on the excellence of your work rather than the total number of tasks completed.', ko: '완료된 업무의 총량보다는 업무의 우수성에 집중하는 것이 대개 더 낫습니다.' },
      ],
    }
  ),
  word('quarter', '1', 7, 'noun',
    ['전체', '절반', '세 배', '합계', '단위', '조각', '비율', '수량', '부분', '나머지'],
    tips({
      etymology: '라틴어 \'quartus\'에서 유래되었으며, 이는 숫자 4를 의미하는 \'quattuor\'와 연결되어 전체를 넷으로 나눈 것 중 하나를 뜻합니다.',
      visual: '동그란 피자를 정확히 십자 모양으로 잘라 네 조각 중 한 조각만 남은 모습을 상상해 보세요.',
      soundAlike: '발음이 \'쿼터\'로 들리는데, 농구 경기나 미식축구에서 경기를 4등분한 한 회차를 떠올리면 쉽습니다.',
      context: '시간을 말할 때 15분을 의미하거나, 미국 동전 중 25센트(1달러의 4분의 1)를 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '전체의 4분의 1을 뜻하는 fourth와 비슷하며, 전체를 뜻하는 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'one of four equal parts into which something is or can be divided',
      synonyms: ['fourth', 'quadrant', 'portion'],
      antonyms: ['whole', 'entirety', 'total'],
      exampleSentences: [
        { en: 'The meeting is scheduled to begin at a quarter past ten.', ko: '회의는 10시 15분에 시작될 예정입니다.' },
        { en: 'Cut the apple into a quarter so that everyone can have a piece.', ko: '모두가 한 조각씩 먹을 수 있도록 사과를 4등분으로 자르세요.' },
      ],
    }
  ),
  word('question', '질의', 2, 'adjective',
    ['답변', '결론', '확신', '증명', '침묵', '동의', '허가', '명령', '결과', '무시'],
    tips({
      etymology: '라틴어 \'quaerere(묻다, 찾다)\'에서 유래하여 무언가를 알아내기 위해 던지는 물음을 뜻합니다.',
      visual: '손을 번쩍 들고 선생님께 궁금한 점을 물어보는 학생의 모습을 상상해 보세요.',
      soundAlike: '\'퀘스천\' 발음은 무언가 \'캐묻는\' 소리와 비슷하다고 연상하면 쉽습니다.',
      context: '회의나 수업이 끝난 뒤 궁금한 점이 있을 때 \'Any questions?\'라고 묻는 상황을 떠올리세요.',
      synonymAntonym: 'Inquiry와 유사하며, 확실한 대답인 Answer와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sentence or phrase used to find out information or to test someone\'s knowledge.',
      synonyms: ['inquiry', 'query', 'interrogation'],
      antonyms: ['answer', 'reply', 'response'],
      exampleSentences: [
        { en: 'The teacher encouraged every student to ask a difficult inquiry during the lecture.', ko: '선생님은 강의 중에 모든 학생이 어려운 질문을 하도록 격려했습니다.' },
        { en: 'Please raise your hand if you have any doubt regarding the new project rules.', ko: '새로운 프로젝트 규칙에 대해 질의 사항이 있으면 손을 들어 주세요.' },
      ],
    }
  ),
];
