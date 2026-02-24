import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch10: VocabItem[] = [
  word('Caution', '주의', 5, 'noun',
    ['무관심', '태만', '대담', '무모', '경솔', '무시', '방치', '소홀', '무지', '과신'],
    tips({
      etymology: '라틴어 cautio(조심함)에서 유래했으며 \'미리 살피다\'라는 의미를 담고 있습니다.',
      visual: '공사장이나 젖은 바닥에 세워진 노란색 삼각형 경고 표지판을 떠올려 보세요.',
      soundAlike: '발음이 \'코션\'으로, 조심스러운 상태인 \'코셔스(cautious)\'와 연결하면 쉽습니다.',
      context: '위험한 물건이 든 상자에 \'Handle with caution\'이라는 문구가 자주 붙어 있습니다.',
      synonymAntonym: '유의어는 care, prudence이며 반의어는 recklessness, carelessness입니다.',
    }),
    {
      definition: 'The quality of being very careful to avoid potential danger, mistakes, or risks.',
      synonyms: ['care', 'prudence', 'vigilance'],
      antonyms: ['recklessness', 'carelessness', 'negligence'],
      exampleSentences: [
        { en: 'You should exercise extreme caution when driving in heavy snow.', ko: '폭설 속에서 운전할 때는 각별한 주의를 기울여야 합니다.' },
        { en: 'The investigator approached the suspicious package with great caution.', ko: '조사관은 아주 조심스럽게 그 의심스러운 상자에 접근했습니다.' },
      ],
    }
  ),
  word('Cease', '중단하다', 5, 'verb',
    ['시작하다', '재개하다', '계속하다', '지속하다', '이어가다', '발동하다', '가속하다', '촉진하다', '강화하다', '확대하다'],
    tips({
      etymology: '라틴어 cedere(그만두다, 물러나다)에서 유래하여 어떤 상태나 행동에서 물러나 멈추는 것을 의미합니다.',
      visual: '공장에서 기계의 전원 스위치를 내려 가동을 완전히 멈추는 장면을 상상하세요.',
      soundAlike: '발음이 \'시스\'로, 전쟁을 멈추는 \'휴전(ceasefire)\'이라는 단어를 통해 기억하면 쉽습니다.',
      context: '비가 그치거나 전쟁이 멈출 때, 혹은 회사가 운영을 종료할 때처럼 격식 있는 상황에서 주로 쓰입니다.',
      synonymAntonym: '유의어는 stop, halt, terminate이며 반의어는 continue, start, resume입니다.',
    }),
    {
      definition: 'to come to an end or to discontinue an activity or state',
      synonyms: ['stop', 'halt', 'terminate'],
      antonyms: ['continue', 'start', 'resume'],
      exampleSentences: [
        { en: 'The fighting ceased at dawn.', ko: '전투는 새벽에 중단되었다.' },
        { en: 'The company will cease operations next month.', ko: '회사는 다음 달에 사업을 중단할 예정이다.' },
      ],
    }
  ),
  word('Challenge', '도전', 5, 'noun',
    ['포기', '회피', '편안', '쉬움', '평온', '안정', '소극', '수동', '복종', '순응'],
    tips({
      etymology: '라틴어 calumnia(비방, 고소)에서 유래하여 상대에게 정당성을 묻는 행위에서 시작되었습니다.',
      visual: '높고 험준한 산봉우리를 정복하기 위해 장비를 챙기는 등산가의 모습을 떠올리세요.',
      soundAlike: '한국어에서도 \'챌린지\'라는 외래어로 자주 쓰여 익숙한 단어입니다.',
      context: '어려운 과제나 자신의 한계를 시험하는 상황에서 주로 사용됩니다.',
      synonymAntonym: '유의어는 difficulty, obstacle, test이며 반의어는 ease, facility, comfort입니다.',
    }),
    {
      definition: 'a demanding task or situation that requires significant effort and tests a person\'s abilities',
      synonyms: ['difficulty', 'obstacle', 'test'],
      antonyms: ['ease', 'facility', 'comfort'],
      exampleSentences: [
        { en: 'She accepted the challenge.', ko: '그녀는 도전을 받아들였다.' },
        { en: 'Learning a new language is a great challenge.', ko: '새로운 언어를 배우는 것은 큰 도전이다.' },
      ],
    }
  ),
  word('Chaos', '혼란', 5, 'noun',
    ['질서', '정돈', '조화', '균형', '체계', '규율', '안정', '평온', '조직', '구조'],
    tips({
      etymology: '그리스어 khaos에서 유래하여 본래 아무것도 없는 거대한 틈이나 심연을 뜻했으나, 현재는 형체 없는 무질서한 상태를 의미합니다.',
      visual: '폭풍이 휩쓸고 지나간 뒤 가구와 물건들이 어지럽게 뒤섞여 발 디딜 틈 없는 거실의 모습을 떠올려 보세요.',
      soundAlike: '\'케이오스\'라고 발음하며, 권투에서 정신을 잃는 \'KO(케이오)\' 상태처럼 정신없이 어지러운 상황으로 기억하면 쉽습니다.',
      context: '대규모 정전 사태, 통제 불능의 인파, 혹은 체계가 완전히 무너진 비상 상황을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '무질서를 뜻하는 disorder와 유사하며, 모든 것이 제자리에 있는 상태인 order와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A state of total lack of organization or predictability where everything is happening in a wild and uncontrolled way.',
      synonyms: ['disorder', 'confusion', 'turmoil'],
      antonyms: ['order', 'harmony', 'system'],
      exampleSentences: [
        { en: 'The sudden power outage plunged the entire city into a state of total chaos.', ko: '갑작스러운 정전으로 인해 도시 전체가 완전한 혼란 상태에 빠졌습니다.' },
        { en: 'The classroom was in absolute chaos until the teacher finally arrived.', ko: '선생님이 마침내 도착하기 전까지 교실은 그야말로 난장판이었습니다.' },
      ],
    }
  ),
  word('Chronic', '만성적인', 5, 'adjective',
    ['급성의', '일시적인', '순간적인', '임시의', '단발성의', '일과성의', '찰나의', '가끔의', '간헐적인', '단기적인'],
    tips({
      etymology: '그리스어 \'khronos(시간)\'에서 유래하여, 오랜 시간 동안 지속된다는 의미를 담고 있습니다.',
      visual: '달력의 모든 칸에 X표시가 되어 있는 것처럼, 끊이지 않고 계속되는 상태를 상상해 보세요.',
      soundAlike: '연대기를 뜻하는 \'chronicle\'이나 시간순을 뜻하는 \'chronology\'와 같은 뿌리를 가진 단어입니다.',
      context: '의학적으로는 오래된 질병을 뜻하며, 사회적으로는 고질적인 실업이나 부족 현상을 말할 때 자주 쓰입니다.',
      synonymAntonym: '계속되는 persistent와 유의어이며, 갑자기 나타났다 사라지는 acute와는 반대되는 개념입니다.',
    }),
    {
      definition: 'continuing for a long period of time or constantly recurring and difficult to eradicate',
      synonyms: ['persistent', 'recurring', 'constant'],
      antonyms: ['acute', 'temporary', 'fleeting'],
      exampleSentences: [
        { en: 'The country is facing a chronic shortage of skilled teachers in rural areas.', ko: '그 나라는 시골 지역의 숙련된 교사 부족이라는 만성적인 문제에 직면해 있다.' },
        { en: 'Many elderly patients require long-term care for their chronic conditions.', ko: '많은 고령 환자들이 자신들의 만성 질환을 위해 장기적인 치료를 필요로 한다.' },
      ],
    }
  ),
  word('Circumstance', '상황', 5, 'noun',
    ['불변', '본질', '규칙', '원칙', '정형', '고정', '일관', '표준', '기본', '핵심'],
    tips({
      etymology: '라틴어 circum(주변)과 stare(서 있다)가 결합된 단어로, 내 주변을 둘러싸고 서 있는 환경을 의미합니다.',
      visual: '무대 위의 주인공을 중심으로 조명, 날씨, 주변 인물들이 원형으로 배치된 장면을 떠올려 보세요.',
      soundAlike: '원을 뜻하는 circle과 발음이 비슷하므로, 나를 둥글게 에워싼 주변 여건이라고 연상하면 쉽습니다.',
      context: '주로 \'under the circumstances(이러한 상황 하에)\'처럼 특정한 조건이나 환경을 설명할 때 사용됩니다.',
      synonymAntonym: '주변 여건을 뜻하는 situation과 유사하며, 사물의 변하지 않는 알맹이인 essence와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A particular incident or state of affairs that surrounds and influences an event.',
      synonyms: ['situation', 'condition', 'context'],
      antonyms: ['essence', 'core', 'principle'],
      exampleSentences: [
        { en: 'Under the circumstances, we had no choice but to cancel the event.', ko: '그러한 상황 하에서 우리는 행사를 취소할 수밖에 없었다.' },
        { en: 'Your financial circumstance may change depending on the market trends.', ko: '당신의 재정 상황은 시장 흐름에 따라 변할 수 있습니다.' },
      ],
    }
  ),
  word('Civil', '시민의', 5, 'adjective',
    ['군사적', '무력', '폭력적', '야만적', '무례한', '거친', '야생', '원시', '전투적', '호전적'],
    tips({
      etymology: '라틴어 civilis에서 유래되었으며, 이는 도시 국가의 구성원인 시민과 관련된 모든 것을 의미합니다.',
      visual: '군복을 벗고 평상복을 입은 사람들이 광장에 모여 평화롭게 대화하는 장면을 상상해 보세요.',
      soundAlike: '문명화된 사회를 뜻하는 \'시빌라이제이션(civilization)\'과 앞부분이 같다는 점에 주목하세요.',
      context: '군대나 종교 단체와 구분되는 일반 사회의 영역, 혹은 타인에게 갖춰야 할 최소한의 예의를 표현할 때 쓰입니다.',
      synonymAntonym: '시민의 의무를 뜻하는 civic과 유의어이며, 군대를 뜻하는 military와는 정반대의 개념입니다.',
    }),
    {
      definition: 'relating to ordinary people who live in a country and are not part of the military or the church',
      synonyms: ['civic', 'polite', 'secular'],
      antonyms: ['military', 'rude', 'barbaric'],
      exampleSentences: [
        { en: 'The country returned to civil rule after years of military dictatorship.', ko: '그 나라는 수년간의 군사 독재 이후 시민 통치 체제로 복귀했다.' },
        { en: 'They managed to have a civil conversation despite their strong disagreements.', ko: '그들은 강한 의견 차이에도 불구하고 예의 바른 대화를 나눌 수 있었다.' },
      ],
    }
  ),
  word('Classify', '분류하다', 5, 'verb',
    ['혼합하다', '결합하다', '뒤섞다', '통합하다', '무시하다', '해체하다', '분산시키다', '흐트러뜨리다', '방치하다', '삭제하다'],
    tips({
      etymology: '계층이나 부류를 뜻하는 \'class\'와 동사형 접미사 \'-ify\'가 합쳐져 \'부류별로 만들다\'라는 의미가 되었습니다.',
      visual: '우편함에 편지들을 지역별로 하나씩 나누어 넣는 집배원의 손길을 상상해 보세요.',
      soundAlike: '학교의 \'클래스(class)\'를 성적이나 특성에 따라 \'파이(-ify)\' 조각처럼 나눈다고 기억하세요.',
      context: '도서관의 도서 정리, 생물학적 종의 구분, 또는 이메일의 스팸 여부를 판별할 때 자주 쓰입니다.',
      synonymAntonym: 'categorize와 sort는 비슷한 의미를 가지며, 반대로 마구 섞는 행위는 jumble이나 mix라고 합니다.',
    }),
    {
      definition: 'to arrange a group of people or things into specific groups based on their common characteristics',
      synonyms: ['categorize', 'sort', 'arrange'],
      antonyms: ['disorganize', 'jumble', 'mix'],
      exampleSentences: [
        { en: 'Biologists use a specific system to classify living organisms.', ko: '생물학자들은 생명체를 분류하기 위해 특정한 체계를 사용한다.' },
        { en: 'The librarian needs to classify these books by genre.', ko: '사서는 이 책들을 장르에 따라 분류해야 한다.' },
      ],
    }
  ),
  word('Client', '고객', 5, 'noun',
    ['판매자', '공급자', '경쟁자', '적대자', '낯선 사람', '무관인', '외부인', '적', '반대자', '비고객'],
    tips({
      etymology: '라틴어 cliens에서 유래했으며, 원래는 유력자의 보호를 받는 의뢰인을 뜻했습니다.',
      visual: '변호사 사무실이나 광고 대행사에서 서류를 검토하며 상담을 받고 있는 전문적인 의뢰인을 떠올려 보세요.',
      soundAlike: '클라이언트 - IT 분야에서 서버에 정보를 요청하고 서비스를 받는 사용자 단말기를 지칭할 때도 쓰입니다.',
      context: '단순히 상점에서 물건을 사는 사람(customer)보다 변호사, 회계사 등 전문직의 서비스를 지속적으로 이용하는 의뢰인 느낌이 강합니다.',
      synonymAntonym: '동의어로는 customer, patron, buyer가 있고 반의어로는 서비스를 제공하는 주체인 provider, seller, vendor가 있습니다.',
    }),
    {
      definition: 'A person or organization that pays for professional advice or services from a business or specialist.',
      synonyms: ['customer', 'patron', 'buyer'],
      antonyms: ['provider', 'seller', 'vendor'],
      exampleSentences: [
        { en: 'She has many loyal clients who trust her legal advice.', ko: '그녀에게는 그녀의 법률적 조언을 신뢰하는 충성스러운 고객들이 많다.' },
        { en: 'The client requested a meeting to discuss the project details.', ko: '그 고객은 프로젝트 세부 사항을 논의하기 위해 회의를 요청했다.' },
      ],
    }
  ),
  word('Collapse', '붕괴하다', 5, 'verb',
    ['세우다', '건설하다', '유지하다', '강화하다', '지탱하다', '보강하다', '복구하다', '재건하다', '회복하다', '상승하다'],
    tips({
      etymology: '함께를 뜻하는 col-과 미끄러지다를 뜻하는 labi가 결합되어 모든 것이 한꺼번에 미끄러져 내린다는 어원을 가집니다.',
      visual: '카드로 만든 탑이 한순간에 바닥으로 폭삭 주저앉는 모습을 떠올려 보세요.',
      soundAlike: '컬랩스(Collapse) - \'칼\'로 베인 것처럼 힘없이 \'툭\' 하고 꺾여 쓰러지는 소리와 연결해 보세요.',
      context: '건축물이 무너지는 물리적 상황 외에도 주식 시장의 폭락이나 과로로 인한 실신 상황에서 자주 쓰입니다.',
      synonymAntonym: '무너지는 fall과 부서지는 crumble이 유의어이며, 반대로 일어서는 stand나 짓는 build가 반의어입니다.',
    }),
    {
      definition: 'to fall down or give way suddenly, typically because of a lack of structural support or a loss of consciousness',
      synonyms: ['fall', 'crumble', 'break down'],
      antonyms: ['rise', 'stand', 'build'],
      exampleSentences: [
        { en: 'The old building is expected to collapse if the support beams fail.', ko: '지지대가 고장 나면 그 낡은 건물은 붕괴할 것으로 예상된다.' },
        { en: 'He felt dizzy and feared he might collapse on the floor.', ko: '그는 어지러움을 느꼈고 바닥에 쓰러질까 봐 두려워했다.' },
      ],
    }
  ),
  word('Colleague', '동료', 5, 'noun',
    ['상사', '경쟁자', '적대자', '낯선 사람', '외부인', '적', '반대자', '경쟁사', '타인', '이질'],
    tips({
      etymology: '함께를 뜻하는 \'col\'과 파견하다 혹은 선택하다를 뜻하는 \'legare\'가 결합되어 같은 직무를 위해 함께 일하는 사람을 의미합니다.',
      visual: '사무실 파티션 너머로 자료를 건네주거나 탕비실에서 함께 커피를 마시며 회의하는 옆자리 직원을 상상해 보세요.',
      soundAlike: '대학교를 뜻하는 \'College\'와 발음이 유사하지만, 끝부분을 \'리그\'처럼 발음하여 \'함께 리그에서 뛰는 팀원\'으로 기억하면 쉽습니다.',
      context: '단순한 친구(friend)보다는 전문적인 직업 환경이나 사무실에서 공적으로 얽힌 협력 관계를 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '함께 일하는 coworker와는 유의어 관계이며, 반대로 경쟁 관계에 있는 rival이나 적을 뜻하는 enemy와는 대조됩니다.',
    }),
    {
      definition: 'A person who shares the same workplace or belongs to the same profession as another individual.',
      synonyms: ['coworker', 'associate', 'partner'],
      antonyms: ['rival', 'enemy', 'opponent'],
      exampleSentences: [
        { en: 'My colleague recommended this book to help with the new software.', ko: '내 동료가 새 소프트웨어 사용에 도움이 될 만한 이 책을 추천해 주었다.' },
        { en: 'She discussed the upcoming project details with her colleagues during the meeting.', ko: '그녀는 회의 중에 동료들과 다가올 프로젝트의 세부 사항을 논의했다.' },
      ],
    }
  ),
  word('Colony', '식민지', 5, 'noun',
    ['본국', '독립국', '자유지', '해방구', '자치구', '핵심', '중앙', '수도', '본토', '메트로폴리스'],
    tips({
      etymology: '라틴어 colere(경작하다)에서 유래하여 정착하여 농사를 짓는 땅을 의미하게 되었습니다.',
      visual: '개미들이 모여 사는 개미굴이나 역사책 속의 해외 영토 지도를 상상해 보세요.',
      soundAlike: '콜로니 - 향수인 \'코롱(Cologne)\'과 발음이 비슷하지만 전혀 다른 뜻입니다.',
      context: '국가 간의 정치적 지배 관계뿐만 아니라 생물학에서 세균이나 곤충의 집단을 뜻하기도 합니다.',
      synonymAntonym: '동의어로는 settlement, territory, outpost가 있고 반의어로는 homeland, mainland, metropolis가 있습니다.',
    }),
    {
      definition: 'A country or area under the full or partial political control of another distant country and occupied by settlers from that country.',
      synonyms: ['settlement', 'territory', 'outpost'],
      antonyms: ['homeland', 'mainland', 'metropolis'],
      exampleSentences: [
        { en: 'The British had many colonies across the globe during the nineteenth century.', ko: '영국은 19세기에 전 세계적으로 많은 식민지를 보유했다.' },
        { en: 'The colony gained independence in 1947 after years of political struggle.', ko: '그 식민지는 수년간의 정치적 투쟁 끝에 1947년에 독립을 얻었다.' },
      ],
    }
  ),
  word('Commerce', '상업', 5, 'noun',
    ['무역 금지', '자급자족', '폐쇄', '고립', '침체', '멈춤', '정지', '공백', '휴업', '폐업'],
    tips({
      etymology: '라틴어 \'com(함께)\'과 \'merx(상품)\'가 합쳐진 단어로, 여러 사람이 모여 물건을 서로 주고받는 행위에서 유래했습니다.',
      visual: '거대한 항구에서 수만 개의 컨테이너가 배에 실리고 전 세계로 뻗어 나가는 활기찬 물류 현장을 상상해 보세요.',
      soundAlike: '쿠팡이나 아마존 같은 온라인 쇼핑몰을 \'이커머스(e-commerce)\'라고 부르는 것을 떠올리면 기억하기 쉽습니다.',
      context: '개인 간의 작은 거래보다는 국가 간의 무역이나 대규모 산업 전반의 경제 활동을 일컫을 때 주로 사용됩니다.',
      synonymAntonym: 'trade(무역)와 유사하며, 경제 활동이 완전히 멈춘 상태인 stagnation(정체)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The large-scale exchange of goods, services, or property between different countries or individuals.',
      synonyms: ['trade', 'business', 'trafficking'],
      antonyms: ['stagnation', 'unemployment', 'isolation'],
      exampleSentences: [
        { en: 'The internet has revolutionized the way global commerce is conducted.', ko: '인터넷은 글로벌 상업이 이루어지는 방식을 혁신적으로 변화시켰습니다.' },
        { en: 'The city has been a major center of commerce for centuries due to its strategic port.', ko: '그 도시는 전략적 항구 덕분에 수 세기 동안 주요 상업 중심지였습니다.' },
      ],
    }
  ),
  word('Commit', '약속하다', 5, 'verb',
    ['회피하다', '거절하다', '배반하다', '포기하다', '미루다', '주저하다', '철회하다', '취소하다', '해제하다', '탈퇴하다'],
    tips({
      etymology: '라틴어 com(함께)과 mittere(보내다)가 결합되어, 자신의 의지나 자원을 한곳에 완전히 보낸다는 의미에서 유래했습니다.',
      visual: '결혼식장에서 서로에게 반지를 끼워주며 평생을 함께하기로 맹세하는 장면을 떠올려 보세요.',
      soundAlike: '개발자들이 소스 코드를 수정하고 최종적으로 저장소에 반영할 때 \'커밋(commit)한다\'고 표현하는 것과 같습니다.',
      context: '단순한 약속을 넘어 시간, 돈, 에너지를 특정 목표에 쏟아붓거나 전념할 때 주로 사용됩니다.',
      synonymAntonym: 'pledge는 공식적인 약속을, devote는 헌신을 강조하며, 반대로 abandon은 중간에 포기하고 떠나는 것을 의미합니다.',
    }),
    {
      definition: 'to promise sincerely that you will definitely do something or keep to a particular opinion',
      synonyms: ['pledge', 'devote', 'dedicate'],
      antonyms: ['abandon', 'withdraw', 'renege'],
      exampleSentences: [
        { en: 'The government has yet to commit to investing more money in education.', ko: '정부는 아직 교육에 더 많은 돈을 투자하겠다고 약속하지 않았다.' },
        { en: 'Borrowing money for a house means you commit to a long-term repayment plan.', ko: '집을 사기 위해 돈을 빌리는 것은 장기적인 상환 계획에 약속하는 것을 의미한다.' },
      ],
    }
  ),
  word('Communicate', '소통하다', 5, 'verb',
    ['숨기다', '침묵하다', '고립되다', '차단하다', '은폐하다', '비밀 유지', '거부하다', '무시하다', '분리하다', '단절하다'],
    tips({
      etymology: '라틴어 communis(공통의)에서 유래하여 정보를 공통으로 나누는 것을 뜻합니다.',
      visual: '두 사람이 마주 보고 앉아 진지하게 대화를 나누거나 수신호를 주고받는 장면을 떠올리세요.',
      soundAlike: '커뮤니케이트 - 우리말처럼 쓰이는 \'커뮤니케이션\'의 동사형입니다.',
      context: '말뿐만 아니라 몸짓, 글, 신호 등 모든 수단을 통해 정보를 전달하는 행위입니다.',
      synonymAntonym: '동의어로는 convey, share, transmit가 있고 반의어로는 withhold, hide, suppress가 있습니다.',
    }),
    {
      definition: 'to share or exchange information, news, or ideas with other people',
      synonyms: ['convey', 'share', 'transmit'],
      antonyms: ['withhold', 'hide', 'suppress'],
      exampleSentences: [
        { en: 'We need to communicate better to avoid any misunderstandings.', ko: '오해를 피하기 위해 우리는 더 잘 소통해야 한다.' },
        { en: 'She communicated her concerns to the team during the meeting.', ko: '그녀는 회의 중에 팀에 자신의 우려 사항을 전달했다.' },
      ],
    }
  ),
  word('Companion', '동반자', 5, 'noun',
    ['적', '경쟁자', '적대자', '낯선 사람', '외로운 존재', '독립자', '고립자', '반대자', '타인', '이질'],
    tips({
      etymology: 'com(함께)과 panis(빵)가 합쳐져 \'함께 빵을 나누어 먹는 사이\'라는 따뜻한 유래가 있습니다.',
      visual: '긴 여행길을 나란히 걷는 친구나 항상 곁을 지키는 반려견을 상상해 보세요.',
      soundAlike: '컴패니언 - 회사나 동료를 뜻하는 \'컴퍼니(Company)\'와 뿌리가 같습니다.',
      context: '단순한 친구보다 인생의 여정이나 특정 활동을 오랫동안 함께하는 동반자 느낌이 강합니다.',
      synonymAntonym: '동의어로는 partner, mate, comrade가 있고 반의어로는 stranger, enemy, foe가 있습니다.',
    }),
    {
      definition: 'A person or animal with whom one spends a lot of time or travels with.',
      synonyms: ['partner', 'mate', 'comrade'],
      antonyms: ['stranger', 'enemy', 'foe'],
      exampleSentences: [
        { en: 'She was my constant companion on the long journey across the country.', ko: '그녀는 전국을 횡단하는 긴 여정 동안 나의 든든한 동반자였다.' },
        { en: 'Dogs are known to be loyal companions to humans.', ko: '개는 인간에게 충성스러운 동반자가 되는 것으로 알려져 있다.' },
      ],
    }
  ),
  word('Compel', '강제하다', 5, 'verb',
    ['선택권을 주다', '허용하다', '권유하다', '제안하다', '방치하다', '자유롭게 하다', '해제하다', '포기하다', '거절하다', '미루다'],
    tips({
      etymology: 'com(완전히) + pel(밀다)의 결합으로, 뒤에서 강하게 밀어붙인다는 의미에서 유래했습니다.',
      visual: '법관이 엄격한 표정으로 판결봉을 두드리며 의무를 명령하는 장면을 상상해 보세요.',
      soundAlike: '컴펠(Compel)과 컴펄서리(Compulsory, 의무적인)를 연결하면 \'강제성\'의 의미가 잘 기억됩니다.',
      context: '법이나 규칙이 사람에게 특정 행동을 하도록 만들 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '동의어인 force보다 격식 있는 느낌이며, 반의어는 자유를 주는 allow나 permit입니다.',
    }),
    {
      definition: 'to use power or influence to make someone do something',
      synonyms: ['force', 'oblige', 'coerce'],
      antonyms: ['allow', 'permit', 'let'],
      exampleSentences: [
        { en: 'The law compels us to pay taxes.', ko: '법은 우리에게 세금을 내도록 강제한다.' },
        { en: 'Nothing could compel him to change his mind.', ko: '그의 마음을 바꾸게 할 수 있는 것은 아무것도 없었다.' },
      ],
    }
  ),
  word('Compensate', '보상하다', 5, 'verb',
    ['손해를 주다', '빼앗다', '부당하게 대하다', '무시하다', '방치하다', '차단하다', '억누르다', '박탈하다', '손실을 입히다', '해약하다'],
    tips({
      etymology: 'com(함께) + pens(달다/지불하다)가 합쳐져 저울의 양쪽 무게를 맞추듯 손실을 메워준다는 뜻입니다.',
      visual: '기울어진 저울의 한쪽에 금전이나 노력을 올려 수평을 맞추는 모습을 떠올려 보세요.',
      soundAlike: '컴펜세이트와 명사형 컴펜세이션(Compensation, 보상금)을 함께 외우면 유용합니다.',
      context: '사고에 대한 금전적 보상뿐만 아니라, 부족한 실력을 노력으로 메울 때도 사용합니다.',
      synonymAntonym: '동의어로는 reimburse가 있으며, 반의어는 무언가를 뺏어가는 deprive입니다.',
    }),
    {
      definition: 'to provide something good as a balance against something bad or to pay someone for work or damages',
      synonyms: ['reimburse', 'offset', 'atone'],
      antonyms: ['deprive', 'penalize', 'fine'],
      exampleSentences: [
        { en: 'The company will compensate the victims for their loss.', ko: '회사는 피해자들의 손실에 대해 보상할 것이다.' },
        { en: 'Hard work can often compensate for a lack of natural talent.', ko: '열심히 노력하면 타고난 재능의 부족함을 보상할 수 있다.' },
      ],
    }
  ),
  word('Complex', '복잡한', 5, 'adjective',
    ['단순한', '쉬운', '명료한', '평이한', '직선적인', '기본적인', '원시적인', '미개발된', '초보적인', '간단한'],
    tips({
      etymology: '함께를 뜻하는 com과 접다를 뜻하는 plex가 결합되어, 여러 겹으로 겹쳐져 있어 풀기 어렵다는 어원을 가집니다.',
      visual: '실타래 수백 개가 엉망으로 뒤엉켜 있어 어디가 시작점인지 찾기 힘든 모습을 떠올려 보세요.',
      soundAlike: '우리가 흔히 말하는 심리적 \'콤플렉스\'도 마음속에 여러 감정과 기억이 복잡하게 얽혀 있음을 뜻합니다.',
      context: '단순히 난이도가 높은 것뿐만 아니라, 구조나 시스템이 여러 요소로 정교하게 구성되어 있을 때 주로 사용합니다.',
      synonymAntonym: '정교하게 얽힌 intricate와 유사하며, 아무런 장식이나 꼬임이 없는 simple과는 반대됩니다.',
    }),
    {
      definition: 'made up of various interconnected parts that are often difficult to analyze or understand',
      synonyms: ['complicated', 'intricate', 'elaborate'],
      antonyms: ['simple', 'plain', 'straightforward'],
      exampleSentences: [
        { en: 'The issue is more complex than it seems.', ko: '그 문제는 보이는 것보다 더 복잡하다.' },
        { en: 'The human brain is an incredibly complex organ.', ko: '인간의 뇌는 놀랍도록 복잡한 기관이다.' },
      ],
    }
  ),
  word('Component', '구성 요소', 5, 'noun',
    ['전체', '통합체', '혼합물', '융합', '일체', '단일체', '종합', '총체', '복합체', '결과물'],
    tips({
      etymology: '라틴어 com(함께)과 ponere(놓다)가 합쳐진 단어로, 무언가를 만들기 위해 함께 놓인 조각들을 의미합니다.',
      visual: '복잡한 기계 내부에서 톱니바퀴 하나가 빠지면 작동하지 않는 정밀한 부품의 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 본체 안에 들어가는 그래픽카드나 메모리 같은 \'컴포넌트\' 부품들을 떠올리면 기억하기 쉽습니다.',
      context: '단순히 기계적인 부품뿐만 아니라, 행복의 조건이나 요리의 재료처럼 추상적인 구성 단위를 말할 때도 자주 쓰입니다.',
      synonymAntonym: '전체를 이루는 개별 요소인 element와 비슷하며, 모든 것이 합쳐진 상태인 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'one of the individual parts that makes up a complete machine, system, or substance',
      synonyms: ['part', 'element', 'constituent'],
      antonyms: ['whole', 'entirety', 'total'],
      exampleSentences: [
        { en: 'Each component has a specific function within the engine.', ko: '엔진 내부의 각 구성 요소는 특정한 기능을 수행합니다.' },
        { en: 'Trust is a key component of any healthy relationship.', ko: '신뢰는 모든 건강한 관계의 핵심 구성 요소입니다.' },
      ],
    }
  ),
  word('Compose', '구성하다', 5, 'verb',
    ['분해하다', '해체하다', '흩뜨리다', '분산하다', '무질서하게 만들다', '혼란시키다', '파괴하다', '해체시키다', '분리하다', '해산하다'],
    tips({
      etymology: 'com(함께)과 pose(놓다)가 결합된 단어로, 여러 요소를 한곳에 모아 질서 있게 배치한다는 어원을 가집니다.',
      visual: '오케스트라 지휘자가 흩어져 있는 악기 소리들을 모아 하나의 아름다운 교향곡으로 엮어내는 장면을 떠올려 보세요.',
      soundAlike: '유명 커피 브랜드인 \'컴포즈 커피\'를 떠올리며 원두와 우유 등 여러 재료를 황금 비율로 조합하는 이미지를 연상하세요.',
      context: '음악 작곡이나 시 쓰기 같은 예술적 창작뿐만 아니라, 화학 성분이나 조직의 인적 구성을 설명할 때도 필수적으로 사용됩니다.',
      synonymAntonym: '전체를 이루는 constitute와 유의어이며, 반대로 형태를 무너뜨리고 썩게 만드는 decompose와 대조됩니다.',
    }),
    {
      definition: 'to combine various elements or parts to create a whole entity',
      synonyms: ['constitute', 'form', 'comprise'],
      antonyms: ['decompose', 'dismantle', 'disintegrate'],
      exampleSentences: [
        { en: 'The artist spent several months trying to compose a piece that would perfectly represent his vision.', ko: '그 예술가는 자신의 비전을 완벽하게 표현할 작품을 작곡하기 위해 몇 달을 보냈다.' },
        { en: 'Ten distinct nations compose the new economic alliance.', ko: '열 개의 서로 다른 국가들이 새로운 경제 동맹을 구성하고 있다.' },
      ],
    }
  ),
  word('Comprehend', '이해하다', 5, 'verb',
    ['오해하다', '혼동하다', '무시하다', '못 알아듣다', '착각하다', '착오를 일으키다', '잘못 판단하다', '불명확하게 하다', '혼란을 겪다', '간과하다'],
    tips({
      etymology: '어원적으로 com(완전히)과 prehend(잡다)가 합쳐져, 지식을 머릿속으로 완전히 움켜쥐는 것을 의미합니다.',
      visual: '복잡하게 엉킨 실타래를 한 번에 정리하여 전체 구조를 파악하는 모습을 상상해 보세요.',
      soundAlike: '수능이나 토익의 \'리딩 컴프리헨션(Reading Comprehension)\' 파트가 바로 독해력을 측정하는 시험임을 기억하세요.',
      context: '단순히 사실을 아는 수준을 넘어, 복잡한 이론이나 상황의 본질을 깊이 있게 파악할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '완전히 파악한다는 뜻의 grasp과 유의어이며, 반대로 잘못 파악하는 것은 misunderstand입니다.',
    }),
    {
      definition: 'To grasp the nature, significance, or meaning of something through mental effort.',
      synonyms: ['grasp', 'fathom', 'apprehend'],
      antonyms: ['misunderstand', 'misinterpret', 'misconceive'],
      exampleSentences: [
        { en: 'The child could not fully comprehend the complexity of the situation.', ko: '그 아이는 상황의 복잡함을 완전히 이해할 수 없었다.' },
        { en: 'Scientists are still struggling to comprehend how the brain functions.', ko: '과학자들은 뇌가 어떻게 작동하는지 이해하기 위해 여전히 고군분투하고 있다.' },
      ],
    }
  ),
  word('Compromise', '타협', 5, 'noun',
    ['고집', '완강함', '극단', '대립', '갈등', '불화', '불타협', '원칙 고수', '일방적 통보', '단결 거부'],
    tips({
      etymology: '함께를 뜻하는 com과 약속을 뜻하는 promise가 결합되어, 서로 양보하여 함께 지킬 약속을 만든다는 의미에서 유래했습니다.',
      visual: '줄다리기를 하던 두 팀이 줄을 놓고 중간 지점에서 만나 악수를 나누는 모습을 그려보세요.',
      soundAlike: '컴(com, 함께) 프로(pro, 찬성하여) 마이즈(mise, 맺음) - 함께 찬성하며 결론을 맺는다고 기억하세요.',
      context: '비즈니스 협상이나 일상적인 갈등 해결에서 자주 쓰이며, 때로는 자신의 원칙을 굽히는 부정적인 뉘앙스로도 사용됩니다.',
      synonymAntonym: '서로 양보하는 concession과 유의어이며, 의견이 충돌하는 contention과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A middle ground or agreement reached when each side makes concessions to resolve a dispute.',
      synonyms: ['agreement', 'concession', 'settlement'],
      antonyms: ['conflict', 'disagreement', 'contention'],
      exampleSentences: [
        { en: 'After hours of negotiation, the two parties finally reached a compromise.', ko: '몇 시간의 협상 끝에 두 당사자는 마침내 타협에 도달했다.' },
        { en: 'A healthy marriage requires a constant sense of compromise from both partners.', ko: '건강한 결혼 생활은 양쪽 파트너 모두의 지속적인 타협 정신을 필요로 한다.' },
      ],
    }
  ),
  word('Concentrate', '집중하다', 5, 'verb',
    ['산만해지다', '흩어지다', '분산하다', '방치하다', '무시하다', '소홀히 하다', '방황하다', '분주하다', '혼란스럽다', '해이해지다'],
    tips({
      etymology: '함께를 뜻하는 con과 중심을 뜻하는 centr가 결합하여 모든 힘을 한 중심점으로 모은다는 의미가 되었습니다.',
      visual: '돋보기를 이용해 햇빛을 한 점에 모아 종이를 태우는 강렬한 이미지를 떠올려 보세요.',
      soundAlike: '오렌지 주스 병에 적힌 \'농축액(concentrate)\'을 생각해보세요. 맛과 성분을 한데 모았다는 같은 원리입니다.',
      context: '정신을 모으는 것뿐만 아니라, 특정 지역에 인구나 산업 시설이 밀집되는 현상을 설명할 때도 자주 쓰입니다.',
      synonymAntonym: 'focus와 유사하며, 주의력을 사방으로 흩뜨리는 distract와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to direct all of one\'s thoughts, efforts, or attention towards a particular activity or subject',
      synonyms: ['focus', 'center', 'intensify'],
      antonyms: ['distract', 'scatter', 'disperse'],
      exampleSentences: [
        { en: 'You need to concentrate on the road while driving.', ko: '운전하는 동안에는 도로에 집중해야 합니다.' },
        { en: 'The company decided to concentrate its resources on developing new technology.', ko: '그 회사는 신기술 개발에 자원을 집중하기로 결정했습니다.' },
      ],
    }
  ),
  word('Conclude', '결론을 내리다', 5, 'verb',
    ['시작하다', '미결', '보류하다', '의문을 남기다', '열어두다', '논의 중', '검토 중', '미정', '추측', '가설'],
    tips({
      etymology: '라틴어 con(완전히)과 clude(닫다)가 합쳐져 \'완전히 문을 닫아 마무리하다\'라는 의미가 되었습니다.',
      visual: '긴 회의 끝에 의사봉을 쾅 치며 논의를 끝내는 의장의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'큰 클루(큰 단서)\'와 비슷하죠? 큰 단서를 찾아 사건을 \'결말짓다\'라고 외워보세요.',
      context: '주로 연구 결과, 회의, 계약 등을 공식적으로 마무리할 때 자주 쓰입니다.',
      synonymAntonym: 'finish, terminate, settle은 끝맺음을 의미하며, begin, start, commence는 시작을 의미합니다.',
    }),
    {
      definition: 'to arrive at a judgment or decision by reasoning',
      synonyms: ['finish', 'terminate', 'settle'],
      antonyms: ['begin', 'start', 'commence'],
      exampleSentences: [
        { en: 'We concluded that the plan was flawed.', ko: '우리는 그 계획에 결함이 있다는 결론을 내렸습니다.' },
        { en: 'The meeting concluded with a vote.', ko: '회의는 투표로 마무리되었습니다.' },
      ],
    }
  ),
  word('Concrete', '구체적인', 5, 'adjective',
    ['추상적인', '모호한', '이론적인', '가상의', '몽상적인', '공허한', '허구의', '개념적인', '비현실적인', '애매한'],
    tips({
      etymology: '라틴어 \'concretus\'에서 유래하며, \'함께(con) 성장하여(crete) 굳어진\'이라는 의미를 담고 있습니다.',
      visual: '액체 상태의 시멘트가 단단한 덩어리로 굳어 발로 밟을 수 있게 된 상태를 상상해 보세요.',
      soundAlike: '건축 자재인 \'콘크리트\'와 발음이 같습니다. 단단하고 실체가 있는 건물을 짓는 재료를 떠올리면 쉽습니다.',
      context: '막연한 생각이나 계획이 아니라, 실제로 만질 수 있거나 숫자로 증명 가능한 확실한 대상을 가리킬 때 사용합니다.',
      synonymAntonym: '실체가 있는 tangible과 구체적인 specific이 유의어이며, 형체가 없는 abstract가 주요 반의어입니다.',
    }),
    {
      definition: 'existing in a physical form or relating to actual specific instances rather than general ideas',
      synonyms: ['specific', 'tangible', 'solid'],
      antonyms: ['abstract', 'vague', 'theoretical'],
      exampleSentences: [
        { en: 'The police are looking for concrete evidence to link him to the crime.', ko: '경찰은 그를 범죄와 연결시킬 구체적인 증거를 찾고 있습니다.' },
        { en: 'It is difficult to make a decision without a concrete plan in place.', ko: '구체적인 계획이 마련되지 않은 상태에서 결정을 내리기는 어렵습니다.' },
      ],
    }
  ),
  word('Conduct', '수행하다', 5, 'verb',
    ['방치하다', '소홀하다', '중단하다', '포기하다', '그만두다', '유기하다', '거부하다', '피하다', '회피하다', '태만하다'],
    tips({
      etymology: '함께를 뜻하는 con과 이끌다를 뜻하는 duct가 합쳐져 여러 요소를 하나로 모아 이끌어 나간다는 의미에서 유래되었습니다.',
      visual: '오케스트라 지휘자가 단원들의 연주를 하나로 모아 조화롭게 이끄는 모습을 상상해 보세요.',
      soundAlike: '반도체를 뜻하는 semiconductor에도 이 단어가 포함되어 있어, 전기나 열을 한곳에서 다른 곳으로 전달하는 이미지를 떠올리면 쉽습니다.',
      context: '주로 과학 실험, 설문 조사, 공식적인 회의나 인터뷰를 실제로 실행에 옮길 때 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '실행하는 perform과 반대되는 개념으로, 일을 도중에 그만두는 halt나 돌보지 않는 neglect를 함께 기억하세요.',
    }),
    {
      definition: 'to organize and carry out a particular activity or process',
      synonyms: ['perform', 'execute', 'manage'],
      antonyms: ['neglect', 'abandon', 'halt'],
      exampleSentences: [
        { en: 'The research team will conduct a series of experiments to test the new drug.', ko: '연구팀은 신약을 테스트하기 위해 일련의 실험을 수행할 것입니다.' },
        { en: 'The committee decided to conduct an internal investigation into the matter.', ko: '위원회는 그 사안에 대해 내부 조사를 실시하기로 결정했습니다.' },
      ],
    }
  ),
  word('Conference', '회의', 5, 'noun',
    ['고립', '단독', '불참', '별도', '개인', '비공개', '비밀', '은퇴', '분리', '해산'],
    tips({
      etymology: '함께를 뜻하는 con과 나르다를 뜻하는 fer가 결합되어 의견을 한곳으로 모으는 자리를 의미합니다.',
      visual: '대형 호텔 연회장에 수많은 전문가들이 이름표를 목에 걸고 모여 토론하는 장면을 떠올려 보세요.',
      soundAlike: '프로 스포츠 리그의 동부/서부 컨퍼런스처럼 여러 팀이나 집단이 모인 연합체를 연상하면 쉽습니다.',
      context: '단순한 일상적 대화보다는 학술적, 사업적, 정치적 목적을 가진 공식적이고 규모가 큰 모임에 주로 쓰입니다.',
      synonymAntonym: 'meeting이나 convention은 비슷한 의미를 가지며, 반대로 혼자 있는 상태인 solitude나 isolation과는 대조됩니다.',
    }),
    {
      definition: 'A formal meeting in which many people gather to discuss a particular topic or exchange ideas.',
      synonyms: ['meeting', 'convention', 'seminar'],
      antonyms: ['solitude', 'separation', 'isolation'],
      exampleSentences: [
        { en: 'The annual conference will be held in London next month.', ko: '연례 회의가 다음 달 런던에서 개최될 예정입니다.' },
        { en: 'She was invited to speak at an international conference on climate change.', ko: '그녀는 기후 변화에 관한 국제 회의에서 연설해 달라는 초청을 받았습니다.' },
      ],
    }
  ),
  word('Confine', '제한하다', 5, 'verb',
    ['해방하다', '확장하다', '방출하다', '허용하다', '완화하다', '분산시키다', '방치하다', '전파하다', '개방하다', '촉진하다'],
    tips({
      etymology: '함께를 뜻하는 con과 끝/경계를 뜻하는 fine이 합쳐져 \'경계선 안에 가두다\'라는 의미가 되었습니다.',
      visual: '좁은 울타리 안에 갇혀서 밖으로 나가지 못하고 서성이는 양 떼를 상상해 보세요.',
      soundAlike: '마지막을 뜻하는 final과 어원이 같습니다. 활동할 수 있는 범위를 끝(경계)에 딱 맞춰 고정하는 것입니다.',
      context: '물리적으로 사람을 감옥에 가둘 때도 쓰지만, 토론 주제를 특정 범위로 좁힐 때도 자주 사용됩니다.',
      synonymAntonym: '제한하는 restrict와 가두는 imprison이 유의어이며, 풀어주는 release와 liberate가 반의어입니다.',
    }),
    {
      definition: 'to keep someone or something within a particular area, activity, or topic',
      synonyms: ['restrict', 'limit', 'imprison'],
      antonyms: ['free', 'release', 'liberate'],
      exampleSentences: [
        { en: 'Please confine your comments to the topic under discussion.', ko: '발언을 논의 중인 주제 내로 한정해 주시기 바랍니다.' },
        { en: 'The illness confined him to bed for several weeks.', ko: '그는 병 때문에 몇 주 동안 침대에만 누워 있어야 했습니다.' },
      ],
    }
  ),
  word('Conflict', '갈등', 5, 'noun',
    ['화해', '조화', '협력', '일치', '동의', '평화', '우호', '협조', '합의', '단결'],
    tips({
      etymology: '함께를 뜻하는 con과 치다를 뜻하는 flict가 결합되어 서로 맞부딪치는 상황을 묘사합니다.',
      visual: '두 사람이 서로 다른 방향으로 줄다리기를 하며 팽팽하게 맞서는 장면을 상상해 보세요.',
      soundAlike: '전쟁 게임이나 영화 제목에서 \'컨플릭트\'가 들린다면 무력 충돌이나 전투 상황을 뜻합니다.',
      context: '단순한 의견 차이부터 마음속의 고민, 국가 간의 전쟁까지 대립하는 모든 상황에 쓰입니다.',
      synonymAntonym: 'dispute, clash와 비슷하며, 반대로 평화로운 상태인 harmony, peace와는 대조됩니다.',
    }),
    {
      definition: 'A serious disagreement or argument between people, groups, or ideas that often lasts for a long time.',
      synonyms: ['dispute', 'clash', 'struggle'],
      antonyms: ['harmony', 'agreement', 'peace'],
      exampleSentences: [
        { en: 'The manager tried to resolve the conflict between the two employees.', ko: '매니저는 두 직원 사이의 갈등을 해결하려고 노력했습니다.' },
        { en: 'There is a direct conflict between her personal values and her job requirements.', ko: '그녀의 개인적인 가치관과 업무 요구 사항 사이에 직접적인 충돌이 있습니다.' },
      ],
    }
  ),
  word('Confront', '직면하다', 5, 'verb',
    ['회피하다', '도망치다', '숨다', '무시하다', '외면하다', '방관하다', '우회하다', '피하다', '굴복하다', '후퇴하다'],
    tips({
      etymology: '함께를 뜻하는 con과 이마를 뜻하는 front가 결합되어, 서로 이마를 맞대고 정면으로 마주 선다는 의미에서 유래되었습니다.',
      visual: '복싱 선수가 경기 시작 전 링 위에서 상대방의 눈을 똑바로 응시하며 기싸움을 하는 장면을 떠올려 보세요.',
      soundAlike: '건물 입구인 \'프런트(front)\'에서 누군가와 딱 마주쳐서 피할 수 없는 상황을 상상하면 기억하기 쉽습니다.',
      context: '단순히 만나는 것이 아니라, 해결하기 힘든 난관이나 두려운 대상, 혹은 잘못을 저지른 사람에게 용기 있게 맞설 때 주로 쓰입니다.',
      synonymAntonym: '정면으로 마주하는 face와 tackle은 유의어이며, 교묘히 빠져나가는 avoid나 evade는 반의어 관계입니다.',
    }),
    {
      definition: 'to stand or come in front of someone or something, especially in a challenging or threatening way',
      synonyms: ['face', 'encounter', 'tackle'],
      antonyms: ['avoid', 'evade', 'dodge'],
      exampleSentences: [
        { en: 'He refused to confront the problem.', ko: '그는 그 문제에 직면하기를 거부했습니다.' },
        { en: 'She had to confront her fears.', ko: '그녀는 자신의 두려움과 맞서야 했습니다.' },
      ],
    }
  ),
  word('Conscience', '양심', 5, 'noun',
    ['무양심', '냉담', '무감각', '무덕', '비도덕', '잔인', '냉혹', '무정', '무관심', '이기심'],
    tips({
      etymology: '함께를 뜻하는 con과 알다를 뜻하는 sci가 결합되어, 스스로 무엇이 옳은지 내면에서 함께 알고 있다는 의미에서 유래했습니다.',
      visual: '잘못된 행동을 하려 할 때 가슴 한구석이 따끔거리거나 누군가 지켜보는 듯한 마음의 눈을 상상해 보세요.',
      soundAlike: '과학을 뜻하는 science와 발음 및 어원이 비슷합니다. 마음속에 저장된 도덕적인 지식이라고 생각하면 쉽습니다.',
      context: '주로 도덕적인 가책을 느끼거나, 정직하게 행동해야 하는 상황에서 내면의 목소리를 표현할 때 사용됩니다.',
      synonymAntonym: 'morality, integrity와 비슷하며, 반대로 도덕성이 없는 상태는 immorality나 wickedness라고 합니다.',
    }),
    {
      definition: 'An inner feeling or voice viewed as acting as a guide to the rightness or wrongness of one\'s behavior.',
      synonyms: ['morality', 'integrity', 'scruples'],
      antonyms: ['immorality', 'wickedness', 'unconcern'],
      exampleSentences: [
        { en: 'His conscience troubled him after he lied to his parents.', ko: '부모님께 거짓말을 한 후 그의 양심이 그를 괴롭혔습니다.' },
        { en: 'I could not do it in good conscience knowing the potential risks.', ko: '잠재적인 위험을 알고 있는 상황에서 양심상 도저히 그 일을 할 수 없었습니다.' },
      ],
    }
  ),
  word('Conscious', '의식적인', 5, 'adjective',
    ['무의식적인', '무지각한', '혼미한', '졸린', '몽롱한', '무감각한', '반사적인', '자동적인', '본능적인', '잠재적인'],
    tips({
      etymology: '어근 con(함께)과 sci(알다)가 결합하여 자기 자신과 주변을 \'함께 모두 알고 있는\' 상태를 의미합니다.',
      visual: '잠에서 깨어나 눈을 번쩍 뜨고 주변의 소리와 빛을 선명하게 느끼는 상태를 상상해 보세요.',
      soundAlike: '발음이 \'큰 셔츠\'와 비슷합니다. 너무 큰 셔츠를 입으면 옷의 감촉이 계속 느껴져서 행동 하나하나를 \'의식\'하게 됩니다.',
      context: '단순히 깨어 있는 상태뿐만 아니라, 어떤 결정을 내릴 때 의도적으로 깊이 생각하고 행동하는 경우에도 자주 쓰입니다.',
      synonymAntonym: 'aware는 단순히 아는 상태, deliberate는 의도적인 상태를 강조하며, 반대말인 unconscious는 정신을 잃었거나 무의식적인 상태를 뜻합니다.',
    }),
    {
      definition: 'being awake and aware of one\'s surroundings and thoughts, or done with full intention and purpose',
      synonyms: ['aware', 'deliberate', 'mindful'],
      antonyms: ['unconscious', 'unaware', 'insensible'],
      exampleSentences: [
        { en: 'She was conscious of his stare.', ko: '그녀는 그가 쳐다보는 것을 의식했다.' },
        { en: 'He made a conscious effort to be polite.', ko: '그는 예의 바르게 행동하려고 의식적으로 노력했다.' },
      ],
    }
  ),
  word('Consensus', '합의', 5, 'noun',
    ['불일치', '분열', '대립', '갈등', '반대', '불화', '논쟁', '분쟁', '의견 차이', '불협화음'],
    tips({
      etymology: '함께를 뜻하는 con-과 느끼다를 뜻하는 sensus가 결합되어, 모두가 같은 마음으로 느끼는 상태를 말합니다.',
      visual: '원탁에 둘러앉은 사람들이 각자 다른 의견을 내다가 마지막에 모두가 동시에 고개를 끄덕이는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'큰 센서\'와 비슷합니다. 커다란 센서로 구성원 전체의 마음을 감지해 하나로 모은 합의점을 떠올려 보세요.',
      context: '단순한 찬성을 넘어 조직이나 사회 전체가 공통적으로 받아들이는 여론이나 일치된 의견을 표현할 때 주로 사용됩니다.',
      synonymAntonym: 'agreement와 유사하지만 더 넓은 집단의 일치를 뜻하며, 반대로 소수의 반대 의견은 dissent라고 부릅니다.',
    }),
    {
      definition: 'a general agreement or a shared opinion among a group of people',
      synonyms: ['agreement', 'accord', 'unanimity'],
      antonyms: ['disagreement', 'dissent', 'discord'],
      exampleSentences: [
        { en: 'The committee finally reached a consensus after hours of intense discussion.', ko: '위원회는 몇 시간 동안의 치열한 토론 끝에 마침내 합의에 도달했습니다.' },
        { en: 'There is a growing scientific consensus that global temperatures are rising.', ko: '지구의 기온이 상승하고 있다는 점에 대해 과학계의 합의가 커지고 있습니다.' },
      ],
    }
  ),
  word('Consequence', '결과', 5, 'noun',
    ['원인', '시작', '시초', '출발', '계기', '선행', '전제', '조건', '무관', '독립'],
    tips({
      etymology: 'con(함께)과 sequ(따라가다)가 결합하여 \'사건 뒤에 따라오는 것\'을 뜻합니다.',
      visual: '첫 번째 도미노가 쓰러진 뒤 줄줄이 쓰러지는 마지막 도미노의 모습을 상상하세요.',
      soundAlike: '발음이 \'큰 시퀀스\'와 비슷해요. 큰 사건의 순서(sequence) 끝에 오는 \'결과\'입니다.',
      context: '주로 어떤 행동이나 결정에 뒤따르는 부정적인 결과를 암시할 때가 많습니다.',
      synonymAntonym: '동의어는 result, outcome, effect이며 반의어는 cause, origin, source입니다.',
    }),
    {
      definition: 'something that happens as a result of a particular action or set of conditions',
      synonyms: ['result', 'outcome', 'effect'],
      antonyms: ['cause', 'origin', 'source'],
      exampleSentences: [
        { en: 'Consider the consequences of your actions before making a final decision.', ko: '최종 결정을 내리기 전에 당신의 행동이 불러올 결과들을 고려하세요.' },
        { en: 'The decrease in sales was a direct consequence of the poor marketing strategy.', ko: '매출 감소는 부실한 마케팅 전략의 직접적인 결과였습니다.' },
      ],
    }
  ),
  word('Conservation', '보존', 5, 'noun',
    ['낭비', '파괴', '소비', '탕진', '고갈', '훼손', '폐기', '해체', '해산', '소멸'],
    tips({
      etymology: '함께를 뜻하는 con과 지키다를 뜻하는 serv가 결합되어, 소중한 자원을 다 같이 유지하고 지킨다는 의미를 담고 있습니다.',
      visual: '울창한 숲이나 멸종 위기 동물을 울타리로 감싸 보호하고 있는 국립공원의 모습을 상상해 보세요.',
      soundAlike: '비슷하게 들리는 Conversation(대화)과 혼동하지 마세요. \'serv\'는 테니스에서 공을 넣듯 자원을 잘 \'유지\'하는 것입니다.',
      context: '환경 보호뿐만 아니라 박물관의 유물 복원이나 전력 사용량을 줄이는 에너지 절약 상황에서 자주 쓰입니다.',
      synonymAntonym: '무언가를 유지하는 preservation과 유사하며, 반대로 다 써버리는 waste나 파괴하는 destruction과는 반대됩니다.',
    }),
    {
      definition: 'The careful protection and management of natural resources and the environment to ensure they are not lost or ruined.',
      synonyms: ['preservation', 'protection', 'maintenance'],
      antonyms: ['destruction', 'waste', 'depletion'],
      exampleSentences: [
        { en: 'The local government is committed to the conservation of historic buildings in the city center.', ko: '지방 정부는 도심의 역사적 건물들을 보존하는 데 전념하고 있습니다.' },
        { en: 'New laws were passed to promote water conservation during the severe drought.', ko: '심각한 가뭄 동안 물 절약을 장려하기 위해 새로운 법안들이 통과되었습니다.' },
      ],
    }
  ),
  word('Considerable', '상당한', 5, 'adjective',
    ['미미한', '무시할 만한', '하찮은', '사소한', '부족한', '빈약한', '적은', '표면적인', '피상적인', '소량의'],
    tips({
      etymology: '동사 consider(고려하다)에 -able(~할 수 있는)이 붙어, \'무시하지 못하고 반드시 고려해야 할 만큼 큰\'이라는 의미가 되었습니다.',
      visual: '텅 빈 창고에 물건이 가득 차서 문이 잘 닫히지 않을 정도로 양이 많은 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'큰 시더(cedar) 나무\'와 비슷합니다. 아주 크고 웅장하여 \'상당한\' 규모를 자랑하는 나무를 연상하세요.',
      context: '단순히 숫자가 큰 것뿐만 아니라, 영향력이나 노력의 정도가 매우 중요하고 클 때 주로 쓰입니다.',
      synonymAntonym: 'significant, substantial과 같은 단어는 덩치가 큰 느낌을 주며, 반대로 negligible은 무시해도 될 만큼 작다는 뜻입니다.',
    }),
    {
      definition: 'notably large in size, amount, or degree, and therefore important enough to be noticed',
      synonyms: ['significant', 'substantial', 'sizable'],
      antonyms: ['negligible', 'insignificant', 'slight'],
      exampleSentences: [
        { en: 'The project requires considerable time and effort to complete.', ko: '그 프로젝트를 완수하기 위해서는 상당한 시간과 노력이 필요하다.' },
        { en: 'The new policy has caused considerable debate among the public.', ko: '새로운 정책은 대중들 사이에서 상당한 논란을 불러일으켰다.' },
      ],
    }
  ),
  word('Consist', '구성되다', 5, 'verb',
    ['분해되다', '흩어지다', '해체되다', '소멸하다', '변질되다', '변형하다', '분리하다', '해산하다', '붕괴하다', '소실되다'],
    tips({
      etymology: '함께를 뜻하는 con과 서 있다를 뜻하는 sist가 결합하여 여러 요소가 한자리에 모여 서 있는 상태를 나타냅니다.',
      visual: '레고 블록 여러 개가 모여 하나의 완성된 성을 이루고 있는 모습을 상상해 보세요.',
      soundAlike: '큰(con) 시스템(sist) 안에 여러 부품이 들어있는 이미지를 연상하면 기억하기 쉽습니다.',
      context: '주로 전치사 of와 함께 쓰여 전체를 이루는 구성 요소를 나열할 때 사용됩니다.',
      synonymAntonym: 'comprise는 전체가 부분을 포함함을 뜻하며, exclude는 구성에서 제외함을 뜻합니다.',
    }),
    {
      definition: 'to be formed or made up of specified elements or parts',
      synonyms: ['comprise', 'incorporate', 'embody'],
      antonyms: ['exclude', 'disintegrate', 'dissolve'],
      exampleSentences: [
        { en: 'The committee consists of ten elected officials.', ko: '위원회는 10명의 선출직 공무원들로 구성되어 있다.' },
        { en: 'True happiness does not consist in the possession of money.', ko: '진정한 행복은 돈을 소유하는 것에 있지 않다.' },
      ],
    }
  ),
  word('Consistent', '일관된', 5, 'adjective',
    ['변덕스러운', '불규칙한', '모순된', '불일치하는', '요동치는', '산만한', '불안정한', '변동하는', '이중적인', '엇갈리는'],
    tips({
      etymology: '함께를 뜻하는 con과 서다를 뜻하는 sist가 결합하여, 여러 요소가 한데 모여 흐트러짐 없이 서 있는 상태를 의미합니다.',
      visual: '과녁의 정중앙에 화살이 계속해서 박히는 모습이나, 매일 같은 시간에 뜨는 해를 떠올려 보세요.',
      soundAlike: '발음이 \'큰 시스템\'과 비슷합니다. 거대하고 정교한 시스템은 오류 없이 항상 일관되게 작동해야 합니다.',
      context: '운동선수의 성적이 기복 없거나, 누군가의 주장이 앞뒤가 맞을 때, 혹은 제품의 품질이 일정할 때 주로 쓰입니다.',
      synonymAntonym: 'coherent는 논리적 일관성을, steady는 속도나 상태의 꾸준함을 강조하며, 반대말인 erratic은 종잡을 수 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'acting or done in the same way over time, especially so as to be fair or accurate',
      synonyms: ['coherent', 'uniform', 'steady'],
      antonyms: ['inconsistent', 'erratic', 'variable'],
      exampleSentences: [
        { en: 'Her story was consistent throughout the entire investigation.', ko: '그녀의 이야기는 조사 내내 일관되었다.' },
        { en: 'We need to maintain a consistent approach to this problem.', ko: '우리는 이 문제에 대해 일관된 접근 방식을 유지해야 한다.' },
      ],
    }
  ),
  word('Conspiracy', '음모', 5, 'noun',
    ['공개', '투명', '정직', '정직함', '솔직', '개방', '공표', '발표', '공개성', '투명성'],
    tips({
      etymology: 'con(함께)과 spir(숨쉬다)가 합쳐져 \'몰래 모여 함께 숨을 죽이고 속삭이다\'라는 뜻에서 유래했습니다.',
      visual: '어두운 방 안에서 몇몇 사람들이 촛불을 켜고 비밀스러운 계획을 짜는 장면을 떠올리세요.',
      soundAlike: '발음이 \'큰 스파이\'와 비슷해요. 스파이들이 모여서 꾸미는 \'음모\'입니다.',
      context: '범죄를 공모하거나 정부를 전복하려는 비밀스러운 계획을 언급할 때 자주 쓰입니다.',
      synonymAntonym: '동의어는 plot, scheme, intrigue이며 반의어는 honesty, openness, transparency입니다.',
    }),
    {
      definition: 'A secret plan made by a group of people to do something illegal or harmful.',
      synonyms: ['plot', 'scheme', 'intrigue'],
      antonyms: ['honesty', 'openness', 'transparency'],
      exampleSentences: [
        { en: 'They were accused of conspiracy.', ko: '그들은 음모 혐의로 기소되었다.' },
        { en: 'The conspiracy to overthrow the government was uncovered.', ko: '정부를 전복하려는 음모가 밝혀졌다.' },
      ],
    }
  ),
  word('Constitute', '구성하다', 5, 'verb',
    ['분해하다', '해체하다', '파괴하다', '해산하다', '무효화하다', '철폐하다', '폐지하다', '붕괴시키다', '분리하다', '해체시키다'],
    tips({
      etymology: 'con(함께)과 stitute(세우다)가 결합하여 여러 요소를 한데 모아 전체를 세운다는 의미에서 유래했습니다.',
      visual: '여러 조각의 퍼즐이 하나로 합쳐져 전체 그림을 완성하는 장면을 상상해 보세요.',
      soundAlike: '국가의 근간인 \'헌법\'을 뜻하는 Constitution의 동사형으로 기억하면 이해가 빠릅니다.',
      context: '단순히 모으는 것이 아니라, 특정 요소들이 모여 법적, 공식적, 혹은 실질적인 전체를 형성할 때 사용합니다.',
      synonymAntonym: 'form, comprise와 유사하며, 반대로 흩어버리거나 없애는 disband, dissolve와 대조됩니다.',
    }),
    {
      definition: 'to be the components or elements that form a larger whole',
      synonyms: ['form', 'comprise', 'compose'],
      antonyms: ['disband', 'destroy', 'dissolve'],
      exampleSentences: [
        { en: 'Twelve months constitute a year.', ko: '12개월이 모여 1년을 구성한다.' },
        { en: 'These findings constitute strong evidence against the suspect.', ko: '이러한 발견들은 용의자에게 불리한 강력한 증거가 된다.' },
      ],
    }
  ),
  word('Consult', '상담하다', 5, 'verb',
    ['무시하다', '단독결정하다', '독단적으로행동하다', '배제하다', '회피하다', '거절하다', '방치하다', '외면하다', '고집부리다', '은폐하다'],
    tips({
      etymology: '함께를 뜻하는 \'con\'과 앉다를 뜻하는 \'sult\'가 결합되어, 전문가와 나란히 앉아 의견을 주고받는다는 어원을 가집니다.',
      visual: '하얀 가운을 입은 의사나 정장을 입은 변호사 앞에 앉아 진지하게 고민을 털어놓는 모습을 상상해 보세요.',
      soundAlike: '기업의 문제를 진단하고 해결책을 주는 직업인 \'컨설턴트(Consultant)\'가 바로 이 단어에서 유래했습니다.',
      context: '단순히 수다를 떠는 것이 아니라, 전문적인 지식이나 허락, 혹은 데이터가 필요할 때 전문가나 자료를 찾아보는 상황에 사용됩니다.',
      synonymAntonym: '비슷한 말로는 의견을 나누는 confer가 있고, 반대말로는 남의 의견을 듣지 않고 무시하는 ignore가 있습니다.',
    }),
    {
      definition: 'to seek information, professional advice, or an opinion from someone or a reference source',
      synonyms: ['confer', 'deliberate', 'negotiate'],
      antonyms: ['ignore', 'neglect', 'disregard'],
      exampleSentences: [
        { en: 'You should consult a specialist about your back pain.', ko: '허리 통증에 대해서는 전문의와 상담하는 것이 좋겠다.' },
        { en: 'The architect consulted the blueprints before making changes.', ko: '건축가는 설계를 변경하기 전에 청사진을 참조했다.' },
      ],
    }
  ),
  word('Consume', '소비하다', 5, 'verb',
    ['생산하다', '절약하다', '보존하다', '축적하다', '저장하다', '아끼다', '보관하다', '비축하다', '창조하다', '유지하다'],
    tips({
      etymology: '라틴어 \'con(완전히)\'과 \'sumere(취하다)\'가 결합된 단어로, 자원을 남김없이 다 써버리거나 음식을 먹어치운다는 어원을 가집니다.',
      visual: '벽난로 속의 장작이 불길에 휩싸여 점점 사라지는 모습이나, 배고픈 사람이 음식을 빠르게 해치우는 장면을 상상해 보세요.',
      soundAlike: '우리에게 익숙한 단어인 \'컨슈머(Consumer)\'는 물건을 사고 \'소비하는\' 사람을 뜻하므로 연관 지어 외우기 쉽습니다.',
      context: '단순히 물건을 사는 것뿐만 아니라, 에너지를 사용하거나, 불이 건물을 집어삼키거나, 질투 같은 감정에 사로잡힐 때도 사용됩니다.',
      synonymAntonym: '자원을 다 써버리는 use up과 유사하며, 반대로 아끼고 보호하는 conserve와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to use fuel, energy, or time, or to eat or drink something completely',
      synonyms: ['expend', 'deplete', 'devour'],
      antonyms: ['conserve', 'save', 'produce'],
      exampleSentences: [
        { en: 'Small cars consume less fuel than large SUVs.', ko: '소형차는 대형 SUV보다 연료를 적게 소비한다.' },
        { en: 'The fire quickly consumed the dry wooden shed.', ko: '불길이 마른 나무 창고를 순식간에 집어삼켰다.' },
      ],
    }
  ),
  word('Contemporary', '동시대의', 5, 'adjective',
    ['고대의', '구식의', '미래의', '과거의', '원시적인', '레트로의', '옛날의', '미래형의', '전통적인', '노후한'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'tempus(시간)\'가 결합되어 \'같은 시간 안에 있는\'이라는 의미를 형성합니다.',
      visual: '고풍스러운 기와집 옆에 세워진 세련되고 매끄러운 유리 건물의 대비를 떠올려 보세요.',
      soundAlike: '패션 매장에서 \'컨템포러리 브랜드\'라고 하면 지금 가장 유행하는 세련된 스타일을 뜻합니다.',
      context: '역사 책에서 두 인물이 같은 시기에 살았음을 말하거나, 예술 분야에서 현대적인 양식을 묘사할 때 씁니다.',
      synonymAntonym: 'modern과 유사하며, 아주 오래되어 낡은 느낌의 ancient나 old-fashioned와는 반대됩니다.',
    }),
    {
      definition: 'Existing or occurring at the same period of time, or belonging to the present day.',
      synonyms: ['modern', 'current', 'present-day'],
      antonyms: ['ancient', 'archaic', 'outdated'],
      exampleSentences: [
        { en: 'The museum features both historical and contemporary works of art.', ko: '그 박물관은 역사적인 예술품과 동시대의 예술품을 모두 전시한다.' },
        { en: 'Many people find it difficult to understand contemporary music.', ko: '많은 사람들이 동시대 음악을 이해하는 것을 어려워한다.' },
      ],
    }
  ),
  word('Contempt', '경멸', 5, 'noun',
    ['존경', '경의', '존중', '애정', '호의', '찬미', '칭송', '예우', '숭배', '친절'],
    tips({
      etymology: '라틴어 \'contemptus\'에서 유래했으며, con(강조)과 temnere(가볍게 여기다)가 결합하여 상대를 완전히 무시하고 낮게 본다는 의미를 형성합니다.',
      visual: '누군가를 비웃을 때 한쪽 입꼬리만 쓱 올리는 냉소적인 표정이나 가소롭다는 듯 아래로 훑어보는 시선을 상상해 보세요.',
      soundAlike: '유혹하다라는 뜻의 tempt와 발음이 비슷하지만, 매혹되는 것이 아니라 오히려 가치가 없다고 밀어내는 차가운 감정입니다.',
      context: '일상적인 무시뿐만 아니라 법정에서 판사의 권위를 부정하거나 명령을 어길 때 \'법정 모독죄(contempt of court)\'라는 법률 용어로 자주 쓰입니다.',
      synonymAntonym: 'scorn이나 disdain은 비슷한 혐오감을 나타내며, 반대로 상대를 높게 평가하는 마음은 respect나 esteem이라고 합니다.',
    }),
    {
      definition: 'A strong feeling that someone or something is low, worthless, or deserving of no respect.',
      synonyms: ['scorn', 'disdain', 'derision'],
      antonyms: ['respect', 'admiration', 'esteem'],
      exampleSentences: [
        { en: 'She looked at him with utter contempt after he lied again.', ko: '그가 다시 거짓말을 하자 그녀는 그를 완전히 경멸하는 눈빛으로 쳐다보았다.' },
        { en: 'The protesters showed their contempt for the new law by tearing up the posters.', ko: '시위대들은 포스터를 찢음으로써 새 법안에 대한 경멸을 드러냈다.' },
      ],
    }
  ),
  word('Context', '맥락', 5, 'noun',
    ['고립', '단편', '단절', '분리', '무맥락', '추상', '공허', '독립', '단독', '파편'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'texere(짜다)\'가 결합된 단어로, 여러 요소가 함께 짜여 하나의 흐름을 만든다는 뜻입니다.',
      visual: '퍼즐 조각 하나만 보는 것이 아니라, 그 조각이 끼워져 있는 전체 그림의 배경을 떠올려 보세요.',
      soundAlike: '단순한 글자인 \'텍스트(Text)\'에 \'함께(Con)\'가 붙어, 글자 너머의 \'주변 상황\'을 의미하게 되었습니다.',
      context: '대화 중 오해가 생겼을 때 \'앞뒤 상황을 다 따져봐야 한다\'고 말하는 상황에서 주로 쓰입니다.',
      synonymAntonym: '주변 여건을 뜻하는 circumstance와 유사하며, 아무런 연결 고리가 없는 isolation과는 반대됩니다.',
    }),
    {
      definition: 'The set of facts or circumstances that surround a particular situation, event, or piece of information and help to explain it.',
      synonyms: ['circumstance', 'background', 'framework'],
      antonyms: ['isolation', 'detachment', 'separation'],
      exampleSentences: [
        { en: 'It is important to look at the historical context of the novel.', ko: '그 소설의 역사적 배경을 살펴보는 것이 중요하다.' },
        { en: 'His comments were taken out of context by the media.', ko: '그의 발언은 언론에 의해 앞뒤 맥락 없이 인용되었다.' },
      ],
    }
  ),
  word('Contradict', '모순되다', 5, 'verb',
    ['일치하다', '부합하다', '동의하다', '확인하다', '지지하다', '보완하다', '조화롭다', '합치하다', '승인하다', '찬성하다'],
    tips({
      etymology: '라틴어 \'contra(반대하여)\'와 \'dicere(말하다)\'가 합쳐진 단어로, 상대방의 말에 정면으로 반대되는 말을 한다는 어원을 가지고 있습니다.',
      visual: '입은 \'예스\'라고 말하는데 손은 \'노\'라고 적힌 팻말을 들고 있는 어색한 상황을 상상해 보세요.',
      soundAlike: '\'컨트라(Contra)\'라는 접두사는 \'반대\'를 뜻합니다. 대조를 뜻하는 \'Contrast\'와 앞부분이 같다는 점을 기억하세요.',
      context: '뉴스에서 두 증거가 서로 일치하지 않거나, 토론 중에 상대방의 주장이 사실과 다르다고 반박할 때 자주 쓰입니다.',
      synonymAntonym: '반박하다라는 뜻의 refute와 유의어이며, 사실임을 입증하는 confirm과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to state the opposite of what someone else has said, or to be so different from another statement that both cannot be true',
      synonyms: ['refute', 'counter', 'dispute'],
      antonyms: ['confirm', 'agree', 'verify'],
      exampleSentences: [
        { en: 'The witness\'s story began to contradict the physical evidence found at the scene.', ko: '목격자의 진술이 현장에서 발견된 물적 증거와 모순되기 시작했다.' },
        { en: 'Recent studies contradict the earlier belief that this medication was completely safe.', ko: '최근 연구들은 이 약이 완전히 안전하다는 이전의 믿음이 틀렸음을 보여준다.' },
      ],
    }
  ),
  word('Convention', '관례', 5, 'noun',
    ['비정통', '이색', '이변', '예외', '특이', '파격', '혁신', '파괴', '탈피', '우연'],
    tips({
      etymology: '함께를 뜻하는 con과 오다를 뜻하는 vent가 결합되어, 사람들이 한자리에 모여 합의한 규칙이나 모임을 의미합니다.',
      visual: '정장을 입은 사람들이 회의장에 모여 악수를 하거나, 오랫동안 지켜온 사회적 예절을 지키는 모습을 상상해 보세요.',
      soundAlike: '유명한 \'코믹콘(Comic-Con)\' 행사처럼 많은 사람이 공통의 목적으로 모이는 대규모 집회를 떠올리면 쉽습니다.',
      context: '사회적으로 굳어진 관습이나 전통적인 방식뿐만 아니라, 정치나 학술 목적의 대규모 정기 회의를 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '사회적 관습인 custom과 유사하며, 기존의 틀을 깨는 새로운 시도인 innovation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A large formal assembly of people or a generally accepted practice and social behavior established by long usage.',
      synonyms: ['custom', 'tradition', 'practice'],
      antonyms: ['innovation', 'oddity', 'strangeness'],
      exampleSentences: [
        { en: 'The artist decided to break away from artistic convention.', ko: '그 예술가는 예술적 관습에서 탈피하기로 결심했다.' },
        { en: 'The annual medical convention will be held in Geneva this year.', ko: '연례 의학 컨벤션이 올해 제네바에서 열릴 예정이다.' },
      ],
    }
  ),
  word('Convert', '변환하다', 5, 'verb',
    ['유지하다', '고수하다', '보존하다', '그대로 두다', '불변', '고정', '동결', '정지', '방치하다', '지속하다'],
    tips({
      etymology: '라틴어 \'con(완전히)\'과 \'vertere(돌리다)\'가 합쳐져 성질이나 상태를 완전히 바꾼다는 의미가 되었습니다.',
      visual: '환전소에서 달러를 원화로 바꾸거나, PDF 파일을 워드 문서로 바꾸는 아이콘을 상상해 보세요.',
      soundAlike: '컨버터(Converter)라는 장치가 전압이나 형식을 바꾸는 도구임을 떠올리면 쉽습니다.',
      context: '주로 종교를 바꾸거나, 측정 단위를 변환하거나, 건물의 용도를 변경할 때 자주 쓰입니다.',
      synonymAntonym: '유사어로는 transform이 있고, 반대말로는 원래 상태를 지키는 preserve나 maintain이 있습니다.',
    }),
    {
      definition: 'to change something from one form, purpose, or system to another',
      synonyms: ['transform', 'alter', 'modify'],
      antonyms: ['preserve', 'maintain', 'keep'],
      exampleSentences: [
        { en: 'The software allows users to convert their documents into different digital formats.', ko: '이 소프트웨어는 사용자들이 문서를 다른 디지털 형식으로 변환할 수 있게 해준다.' },
        { en: 'They decided to convert the old factory into a trendy art gallery.', ko: '그들은 오래된 공장을 세련된 미술관으로 전환하기로 결정했다.' },
      ],
    }
  ),
  word('Cooperate', '협력하다', 5, 'verb',
    ['거부하다', '대립하다', '방해하다', '경쟁하다', '분열하다', '갈등하다', '반대하다', '저항하다', '독단적으로행하다', '방관하다'],
    tips({
      etymology: '함께를 뜻하는 \'co-\'와 일하다를 뜻하는 \'operate\'가 결합하여 \'함께 일하다\'라는 의미가 되었습니다.',
      visual: '여러 사람이 커다란 톱니바퀴를 함께 돌려 기계를 작동시키는 장면을 상상해 보세요.',
      soundAlike: '코(Co)를 맞대고 가까이서 열정적으로 일하는(Operate) 사람들의 모습을 연상해 보세요.',
      context: '비즈니스 파트너십, 팀 스포츠, 혹은 수사 기관에 대한 정보 제공 등 공동의 목표가 있을 때 주로 쓰입니다.',
      synonymAntonym: '함께 작업하는 collaborate와 유사하며, 서로 이기려고 다투는 compete와는 대조적입니다.',
    }),
    {
      definition: 'to act or work together with another person or group for a shared purpose',
      synonyms: ['collaborate', 'unite', 'combine'],
      antonyms: ['compete', 'oppose', 'resist'],
      exampleSentences: [
        { en: 'The two companies decided to cooperate on the new technology project.', ko: '두 회사는 새로운 기술 프로젝트를 위해 협력하기로 결정했다.' },
        { en: 'Witnesses are being asked to cooperate with the authorities in the ongoing investigation.', ko: '목격자들은 진행 중인 수사에서 당국에 협력해 달라는 요청을 받고 있다.' },
      ],
    }
  ),
];
