import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch07: VocabItem[] = [
  word('Demand', '요구하다', 3, 'verb',
    ['양보하다', '포기하다', '무시하다', '거절하다', '제공하다', '수락하다', '기부하다', '감사하다', '칭찬하다', '허락하다'],
    tips({
      etymology: '라틴어 de(완전히)와 mandare(맡기다/명령하다)가 합쳐져 강력하게 맡겨달라고 요구한다는 의미가 되었습니다.',
      visual: '상점 주인에게 영수증을 내밀며 강력하게 환불을 요청하는 손님의 모습을 상상해 보세요.',
      soundAlike: '디맨드 -> \'뒤만\' 따라다니며 계속 무언가를 해달라고 요구하는 상황으로 기억하세요.',
      context: '경제학에서 공급(Supply)과 짝을 이루는 수요라는 뜻으로도 자주 쓰입니다.',
      synonymAntonym: '강력한 요청인 require가 유의어이며, 반대로 주는 행위인 supply가 반의어입니다.',
    }),
    {
      definition: 'to ask for something forcefully or persistently because you believe you have a right to it',
      synonyms: ['require', 'request', 'insist'],
      antonyms: ['supply', 'concede', 'yield'],
      exampleSentences: [
        { en: 'The workers demand higher wages.', ko: '노동자들은 임금 인상을 요구한다.' },
        { en: 'She demanded an explanation for the delay.', ko: '그녀는 지연에 대한 설명을 요구했다.' },
      ],
    }
  ),
  word('Demonstrate', '시연하다', 3, 'verb',
    ['숨기다', '은폐하다', '무시하다', '생략하다', '혼란시키다', '오해시키다', '거짓말하다', '위장하다', '가리다', '덮다'],
    tips({
      etymology: '라틴어 \'de(완전히)\'와 \'monstrare(보여주다)\'가 합쳐져 어떤 사실이나 기능을 확실하게 밖으로 드러낸다는 의미를 형성합니다.',
      visual: '신제품 발표회 무대 위에서 전문가가 기기를 직접 조작하며 관객들에게 기능을 하나하나 설명하는 장면을 상상해 보세요.',
      soundAlike: '데몬스트레이트 -> \'대문\' 앞에 \'스트레이트\'로 서서 지나가는 사람들에게 물건 사용법을 시원하게 보여주는 모습으로 기억하세요.',
      context: '기계의 작동법을 보여주는 것뿐만 아니라, 자신의 실력을 증명하거나 특정 주장을 위해 거리에서 시위하는 상황에서도 널리 쓰입니다.',
      synonymAntonym: '직접 보여주는 show와 증명하는 prove가 유의어이며, 밖으로 드러내지 않고 감추는 hide가 주요 반의어입니다.',
    }),
    {
      definition: 'to clearly show the existence or truth of something by giving proof or evidence, or to explain how something works by performing an action',
      synonyms: ['display', 'illustrate', 'manifest'],
      antonyms: ['conceal', 'disguise', 'suppress'],
      exampleSentences: [
        { en: 'The chef will demonstrate the proper way to dice an onion.', ko: '요리사가 양파를 다지는 올바른 방법을 시연할 것입니다.' },
        { en: 'The latest sales figures demonstrate the success of our new marketing strategy.', ko: '최근 매출 수치는 우리의 새로운 마케팅 전략의 성공을 입증합니다.' },
      ],
    }
  ),
  word('Depend', '의존하다', 3, 'verb',
    ['독립하다', '자립하다', '무시하다', '거절하다', '거부하다', '멈추다', '그만두다', '포기하다', '제외하다', '배제하다'],
    tips({
      etymology: '라틴어 de(아래로)와 pendere(매달리다)가 결합되어, 누군가의 아래에 매달려 도움을 받는다는 의미에서 유래했습니다.',
      visual: '밧줄 하나에 몸을 맡긴 채 절벽을 내려오는 등반가가 밧줄의 강도에 모든 것을 맡기는 장면을 떠올려 보세요.',
      soundAlike: '디펜드(Depend) -> \'뒤\'에서 \'팬\'들이 선수의 승리만을 간절히 믿고 의지하며 응원하는 상황.',
      context: '주로 전치사 on이나 upon과 짝을 이루어 사용되며, 상황이나 조건에 따라 결과가 달라질 때도 쓰입니다.',
      synonymAntonym: '신뢰하며 맡기는 rely가 유의어이며, 스스로의 힘으로 서는 stand alone이 반대 개념입니다.',
    }),
    {
      definition: 'to need the support or help of someone or something in order to survive or be successful',
      synonyms: ['rely', 'lean', 'trust'],
      antonyms: ['disbelieve', 'ignore', 'doubt'],
      exampleSentences: [
        { en: 'The outdoor concert will depend on the weather conditions tomorrow.', ko: '야외 콘서트 개최 여부는 내일 날씨 상태에 달려 있습니다.' },
        { en: 'Many elderly people depend on their pensions to cover daily expenses.', ko: '많은 노인들이 생활비를 충당하기 위해 연금에 의존합니다.' },
      ],
    }
  ),
  word('Deposit', '예금하다', 3, 'verb',
    ['인출하다', '소비하다', '지출하다', '환전하다', '대출하다', '송금하다', '결제하다', '청구하다', '낭비하다', '분배하다'],
    tips({
      etymology: '라틴어 de(아래로)와 posit(놓다)가 합쳐진 단어로, 귀중한 것을 안전한 곳에 내려놓는다는 동작에서 유래했습니다.',
      visual: '은행 창구에서 현금 뭉치를 직원에게 건네면, 직원이 그것을 튼튼한 금고 안으로 깊숙이 밀어 넣는 장면을 상상해 보세요.',
      soundAlike: '디포짓(Deposit) -> \'뒤(de)\'에 \'포지(posit)\'션을 잡고 돈을 안전하게 숨겨두는 소리로 기억하세요.',
      context: '단순히 은행에 돈을 넣는 것 외에도, 월세 보증금을 내거나 물건을 사기 위해 계약금을 거는 상황에서도 자주 쓰입니다.',
      synonymAntonym: '돈이나 물건을 두는 place가 유의어이며, 반대로 돈을 꺼내는 withdraw가 대표적인 반의어입니다.',
    }),
    {
      definition: 'To put money into a financial account for safekeeping or to pay a sum as a first installment or pledge.',
      synonyms: ['save', 'entrust', 'invest'],
      antonyms: ['withdraw', 'spend', 'take out'],
      exampleSentences: [
        { en: 'I need to visit the bank to deposit this check before it expires.', ko: '수표가 만료되기 전에 은행에 가서 예금해야 합니다.' },
        { en: 'The tenant was required to deposit one month\'s rent as a security bond.', ko: '세입자는 보증금으로 한 달 치 월세를 예치해야 했습니다.' },
      ],
    }
  ),
  word('Describe', '설명하다', 3, 'verb',
    ['숨기다', '오해시키다', '혼란시키다', '무시하다', '생략하다', '왜곡하다', '거짓말하다', '축소하다', '확대하다', '변형하다'],
    tips({
      etymology: '라틴어 de(아래로)와 scribere(쓰다)가 결합된 단어로, 머릿속에 있는 것을 종이 위에 상세히 적어 내려간다는 의미에서 유래했습니다.',
      visual: '화가가 붓으로 그림을 그리듯, 말이나 글로 어떤 대상의 생김새나 특징을 세밀하게 그려내는 장면을 상상해 보세요.',
      soundAlike: '디스크라이브 -> \'디(이)\' 물건을 \'스크라이브(쓰고 그려서)\' 자세히 알려준다고 기억하세요.',
      context: '단순한 정보 전달을 넘어 사물의 외양, 사람의 성격, 사건의 구체적인 상황을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '상세히 알리는 explain이 유의어이며, 사실을 숨기거나 감추는 conceal이 반의어입니다.',
    }),
    {
      definition: 'to give a detailed account in words of what someone or something is like',
      synonyms: ['explain', 'depict', 'portray'],
      antonyms: ['conceal', 'obscure', 'misrepresent'],
      exampleSentences: [
        { en: 'Can you describe the person you saw at the park?', ko: '공원에서 본 사람의 인상착의를 설명해 주실 수 있나요?' },
        { en: 'The author uses vivid words to describe the beautiful scenery.', ko: '작가는 아름다운 풍경을 묘사하기 위해 생생한 단어들을 사용합니다.' },
      ],
    }
  ),
  word('Design', '설계하다', 3, 'verb',
    ['파괴하다', '해체하다', '무시하다', '망각하다', '혼란시키다', '방치하다', '훼손하다', '중단하다', '삭제하다', '거부하다'],
    tips({
      etymology: '라틴어 de(강조)와 signare(표시하다)가 결합되어, 머릿속의 생각을 구체적인 기호나 그림으로 나타낸다는 뜻에서 유래했습니다.',
      visual: '건축가가 커다란 책상 위에 청사진을 펼쳐놓고 자와 연필로 건물의 뼈대를 정밀하게 그리는 모습.',
      soundAlike: '디자인 -> \'디\'테일하게 \'사인\'을 그려서 미래의 결과물을 미리 준비하는 과정.',
      context: '패션이나 그래픽뿐만 아니라 컴퓨터 프로그램의 구조나 기계의 작동 원리를 기획할 때도 폭넓게 쓰입니다.',
      synonymAntonym: '무언가를 구상하는 plan이 유의어이며, 공들여 만든 것을 허무는 destroy가 반의어입니다.',
    }),
    {
      definition: 'to create a detailed plan or drawing that determines how something will be made and how it will work',
      synonyms: ['plan', 'create', 'outline'],
      antonyms: ['destroy', 'neglect', 'disorganize'],
      exampleSentences: [
        { en: 'The engineers spent months designing a more efficient engine for the new car.', ko: '엔지니어들은 새 자동차를 위한 더 효율적인 엔진을 설계하는 데 수개월을 보냈다.' },
        { en: 'He was hired to design the layout and structure of the company\'s website.', ko: '그는 회사 웹사이트의 레이아웃과 구조를 설계하기 위해 고용되었다.' },
      ],
    }
  ),
  word('Desire', '욕구', 3, 'noun',
    ['혐오', '무관심', '포기', '만족', '충분', '냉담', '무의욕', '회피', '거부', '거절'],
    tips({
      etymology: '라틴어 desiderare에서 유래했으며, 원래 \'별(sidus)이 나타나기를 간절히 기다리다\'라는 낭만적인 어원을 가지고 있습니다.',
      visual: '크리스마스 아침, 머리맡의 선물을 간절히 확인하고 싶어 하는 아이의 반짝이는 눈빛을 떠올려 보세요.',
      soundAlike: '디자이어 -> \'디\'게(매우) \'자\'고 \'이\'어(싶어) 하는 잠에 대한 간절한 욕구로 기억하세요.',
      context: '단순히 무엇을 원하는 \'want\'보다 훨씬 더 강렬하고 가슴 깊은 곳에서 우러나오는 갈망을 표현할 때 적합합니다.',
      synonymAntonym: '무언가를 바라는 wish가 유의어이며, 강한 거부감을 나타내는 disgust가 반의어입니다.',
    }),
    {
      definition: 'a strong feeling of wanting to have something or wishing for something to happen',
      synonyms: ['wish', 'want', 'longing'],
      antonyms: ['disgust', 'hatred', 'indifference'],
      exampleSentences: [
        { en: 'He has a strong desire to succeed.', ko: '그는 성공에 대한 강한 욕구가 있다.' },
        { en: 'Her desire for knowledge led her to study abroad.', ko: '지식에 대한 욕구가 그녀를 유학하게 했다.' },
      ],
    }
  ),
  word('Destroy', '파괴하다', 3, 'verb',
    ['건설하다', '보존하다', '수리하다', '복구하다', '보호하다', '만들다', '창조하다', '지키다', '유지하다', '재건하다'],
    tips({
      etymology: '라틴어 de(반대/제거)와 struere(쌓다)가 합쳐져 쌓아 올린 것을 무너뜨린다는 뜻에서 유래했습니다.',
      visual: '거대한 망치로 낡은 벽을 내리쳐서 완전히 가루로 만드는 철거 현장을 상상해 보세요.',
      soundAlike: '디스트로이 -> \'디\'게 \'스트\'레스를 \'로(로켓)\'처럼 쏴서 다 부숴버리는 느낌으로 기억하세요.',
      context: '물리적인 건물뿐만 아니라 희망, 인간관계, 생태계 등을 완전히 망가뜨릴 때도 자주 쓰입니다.',
      synonymAntonym: '완전히 망가뜨리는 ruin이 유의어이며, 새롭게 짓는 build가 주요 반의어입니다.',
    }),
    {
      definition: 'to damage something so severely that it is no longer functional or ceases to exist',
      synonyms: ['ruin', 'demolish', 'wreck'],
      antonyms: ['build', 'construct', 'restore'],
      exampleSentences: [
        { en: 'The fire destroyed the entire building within a few hours.', ko: '화재로 인해 몇 시간 만에 건물 전체가 파괴되었습니다.' },
        { en: 'The storm destroyed many homes in the coastal area.', ko: '폭풍이 해안 지역의 많은 집들을 파괴했습니다.' },
      ],
    }
  ),
  word('Detail', '세부사항', 3, 'noun',
    ['개요', '대략', '요약', '전체', '틀', '골격', '줄거리', '개관', '요지', '개념'],
    tips({
      etymology: 'de(완전히) + tail(자르다)에서 유래하여 \'잘게 나눈 조각\'이라는 의미를 가집니다.',
      visual: '돋보기를 들고 아주 작은 부품이나 글자를 꼼꼼하게 들여다보는 모습을 상상하세요.',
      soundAlike: '한국어에서도 \'디테일이 살아있다\'처럼 세밀한 부분을 강조할 때 자주 쓰입니다.',
      context: '보고서나 설명에서 빠진 부분 없이 꼼꼼하게 설명할 때 주로 사용됩니다.',
      synonymAntonym: '동의어로는 particular, item, aspect가 있으며 반의어로는 summary, whole, outline이 있습니다.',
    }),
    {
      definition: 'an individual fact or piece of information about something',
      synonyms: ['particular', 'item', 'aspect'],
      antonyms: ['summary', 'whole', 'outline'],
      exampleSentences: [
        { en: 'Please provide more details.', ko: '더 많은 세부사항을 제공해 주세요.' },
        { en: 'The contract includes every detail of the agreement.', ko: '계약서에는 합의의 모든 세부사항이 포함되어 있다.' },
      ],
    }
  ),
  word('Detect', '탐지하다', 3, 'verb',
    ['놓치다', '무시하다', '숨기다', '오해하다', '혼동하다', '거짓말하다', '둔감하다', '모르다', '피하다', '회피하다'],
    tips({
      etymology: 'de(제거)와 tect(덮다)가 결합하여 \'덮여 있는 것을 벗겨내어 드러내다\'라는 의미에서 유래했습니다.',
      visual: '공항 보안 검색대에서 금속 탐지기가 가방 속 숨겨진 물건을 찾아내 \'삐\' 소리를 내는 장면을 상상해 보세요.',
      soundAlike: '추리 소설에 나오는 \'탐정(Detective)\'이 사건의 실마리를 \'찾아내는(Detect)\' 모습을 연상하면 기억하기 쉽습니다.',
      context: '주로 질병의 초기 징후, 기계적인 결함, 혹은 누군가의 미세한 감정 변화를 포착할 때 자주 사용됩니다.',
      synonymAntonym: '무언가를 알아내는 discover와 유의어 관계이며, 보고도 그냥 지나치는 overlook과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to notice or discover the existence or presence of something that is hidden or not easily seen',
      synonyms: ['discover', 'notice', 'identify'],
      antonyms: ['miss', 'overlook', 'ignore'],
      exampleSentences: [
        { en: 'The new security system can detect even the slightest movement in the dark.', ko: '새로운 보안 시스템은 어둠 속의 아주 작은 움직임조차 감지할 수 있다.' },
        { en: 'Early screening helps doctors detect the disease before it becomes serious.', ko: '조기 검진은 의사들이 병이 심각해지기 전에 발견하도록 도와준다.' },
      ],
    }
  ),
  word('Determine', '결정하다', 3, 'verb',
    ['망설이다', '회피하다', '무시하다', '포기하다', '우유부단', '미결정', '기권하다', '양보하다', '변경하다', '바꾸다'],
    tips({
      etymology: 'de(완전히)와 termin(경계/끝)이 결합된 단어로, 모호한 경계를 확실히 끝맺어 정한다는 의미에서 유래했습니다.',
      visual: '복잡한 미로 속에서 출구로 향하는 단 하나의 정확한 경로에 깃발을 꽂는 장면을 떠올려 보세요.',
      soundAlike: '영화 터미네이터(Terminator)가 임무를 완수하듯, 상황을 종결짓고 확실한 결론을 내리는 느낌입니다.',
      context: '과학적 실험을 통해 원인을 밝혀내거나, 법정에서 판결을 내릴 때, 혹은 미래의 성패를 좌우하는 요인을 말할 때 쓰입니다.',
      synonymAntonym: 'decide와 비슷하지만 더 공식적이고 분석적인 느낌이며, 반대로 결정을 못 하고 흔들리는 waver와 대조됩니다.',
    }),
    {
      definition: 'to officially decide something after considering all the facts or to be the decisive factor in an outcome',
      synonyms: ['decide', 'resolve', 'establish'],
      antonyms: ['waver', 'hesitate', 'doubt'],
      exampleSentences: [
        { en: 'The size of your budget will determine which car you can buy.', ko: '예산 규모가 어떤 차를 살 수 있을지 결정할 것이다.' },
        { en: 'Experts are working to determine the exact cause of the technical failure.', ko: '전문가들이 기술적 결함의 정확한 원인을 밝혀내기 위해 노력하고 있다.' },
      ],
    }
  ),
  word('Develop', '발전시키다', 3, 'verb',
    ['퇴보하다', '쇠퇴하다', '퇴화하다', '퇴락하다', '축소하다', '감소하다', '파괴하다', '무시하다', '방치하다', '정체하다'],
    tips({
      etymology: '접두사 de(반대)와 velop(싸다)가 결합하여 싸여 있던 것을 펼쳐 밖으로 드러낸다는 의미에서 유래했습니다.',
      visual: '작은 씨앗이 껍질을 깨고 나와 울창한 나무로 뻗어 나가는 성장의 이미지를 그려보세요.',
      soundAlike: '컴퓨터 소프트웨어를 만드는 개발자를 디벨로퍼(Developer)라고 부르는 것을 떠올리면 쉽습니다.',
      context: '단순한 성장을 넘어 경제 발전, 기술 개발, 사진 현상, 질병의 악화 등 다양한 변화 과정에 사용됩니다.',
      synonymAntonym: '점진적으로 변하는 evolve와 비슷하며, 반대로 상태가 나빠지는 deteriorate와는 대조적입니다.',
    }),
    {
      definition: 'to gradually grow, change, or create something into a more advanced or stronger form',
      synonyms: ['grow', 'evolve', 'advance'],
      antonyms: ['decline', 'regress', 'deteriorate'],
      exampleSentences: [
        { en: 'The small startup managed to develop its business into a global empire.', ko: '그 작은 스타트업은 사업을 발전시켜 글로벌 기업으로 성장시켰다.' },
        { en: 'Scientists are working hard to develop a more effective vaccine for the virus.', ko: '과학자들은 그 바이러스에 대한 더 효과적인 백신을 개발하기 위해 노력하고 있다.' },
      ],
    }
  ),
  word('Device', '장치', 3, 'noun',
    ['수동', '인력', '자연', '원시', '기본', '간단', '도구 없음', '맨손', '무기', '기계'],
    tips({
      etymology: '나누다 혹은 고안하다라는 뜻의 고어에서 유래하여 특정 목적을 위해 설계된 것을 뜻합니다.',
      visual: '스마트폰, 태블릿, 스마트워치 등 우리 주변의 전자기기들을 떠올려 보세요.',
      soundAlike: '컴퓨터에 연결하는 장치를 인식시키는 \'디바이스 드라이버\'를 생각하면 쉽습니다.',
      context: '주로 기계적인 장치나 전자 기기를 지칭할 때 사용되는 명사입니다.',
      synonymAntonym: '동의어로는 apparatus, gadget, instrument가 있으며 반의어로는 material, substance, component가 있습니다.',
    }),
    {
      definition: 'An object or machine that has been invented and constructed for a specific function or task.',
      synonyms: ['apparatus', 'gadget', 'instrument'],
      antonyms: ['material', 'substance', 'component'],
      exampleSentences: [
        { en: 'This device connects to the wireless network automatically.', ko: '이 장치는 무선 네트워크에 자동으로 연결된다.' },
        { en: 'The engineer developed a clever device to reduce power consumption.', ko: '그 엔지니어는 전력 소비를 줄이기 위한 영리한 장치를 개발했다.' },
      ],
    }
  ),
  word('Devote', '헌신하다', 3, 'verb',
    ['소홀히 하다', '무시하다', '포기하다', '거절하다', '회피하다', '게을리하다', '방치하다', '냉담하다', '무관심하다', '기권하다'],
    tips({
      etymology: 'de(강조) + vote(서약하다)가 합쳐져 신에게 서약하듯 자신을 온전히 바친다는 의미에서 유래되었습니다.',
      visual: '사랑하는 가족이나 중요한 목표를 위해 밤낮으로 정성을 다해 노력하는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '투표(vote)를 할 때 내 소중한 한 표를 특정 후보에게 \'바친다\'고 연상하면 기억하기 쉽습니다.',
      context: '주로 시간, 노력, 돈, 혹은 인생 전체를 어떤 특정한 목적이나 사람에게 아낌없이 쏟아부을 때 사용합니다.',
      synonymAntonym: 'dedicate, commit와 유사하며, 반대로 돌보지 않고 내버려 두는 neglect, ignore와는 대조적입니다.',
    }),
    {
      definition: 'to give all or a large part of one\'s time or resources to a particular person, activity, or cause',
      synonyms: ['dedicate', 'commit', 'consecrate'],
      antonyms: ['neglect', 'ignore', 'disregard'],
      exampleSentences: [
        { en: 'She decided to devote her life to humanitarian work.', ko: '그녀는 인도주의적 활동에 삶을 바치기로 결심했다.' },
        { en: 'The museum is planning to devote a whole gallery to the artist\'s early paintings.', ko: '박물관은 그 화가의 초기 회화 작품들에 갤러리 전체를 할애할 계획이다.' },
      ],
    }
  ),
  word('Diet', '식이요법', 3, 'noun',
    ['폭식', '과식', '편식', '무절제', '야식', '당분', '기름진', '무계획', '무제한', '방치'],
    tips({
      etymology: '그리스어 \'diaita\'에서 유래했으며, 단순히 살을 빼는 행위가 아니라 \'삶의 방식\'이나 \'식단\' 자체를 의미합니다.',
      visual: '접시 위에 신선한 채소, 닭가슴살, 현미밥이 골고루 놓여 있는 건강한 식단을 상상해 보세요.',
      soundAlike: '한국어 \'다이어트\'는 살을 빼는 과정에 집중하지만, 영어 본래 의미는 매일 섭취하는 음식의 구성을 뜻합니다.',
      context: '의사가 환자에게 처방하는 저염식 식단이나, 야생 동물이 주로 먹는 먹이의 종류를 설명할 때도 사용됩니다.',
      synonymAntonym: '영양을 공급하는 nourishment와 유의어 관계이며, 지나치게 많이 먹는 gluttony와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the specific selection of food and drink consumed by a person or group for health, weight management, or religious reasons',
      synonyms: ['nourishment', 'nutrition', 'food'],
      antonyms: ['starvation', 'fasting', 'gluttony'],
      exampleSentences: [
        { en: 'A balanced diet is essential for maintaining a healthy immune system.', ko: '균형 잡힌 식단은 건강한 면역 체계를 유지하는 데 필수적이다.' },
        { en: 'The doctor recommended a low-sugar diet to manage his blood pressure.', ko: '의사는 그의 혈압 관리를 위해 저당분 식이요법을 권장했다.' },
      ],
    }
  ),
  word('Differ', '다르다', 3, 'verb',
    ['같다', '일치하다', '동일하다', '유사하다', '비슷하다', '동의하다', '합치다', '맞다', '같아지다', '융합하다'],
    tips({
      etymology: '라틴어 dis(떨어져)와 ferre(나르다)가 결합된 단어로, 서로 다른 방향으로 옮겨져 거리가 생겼다는 의미에서 유래했습니다.',
      visual: '모두가 똑같은 검은색 옷을 입고 있을 때 혼자만 밝은 빨간색 옷을 입고 서 있는 사람의 모습을 떠올려 보세요.',
      soundAlike: '형용사 different(다른)와 명사 difference(차이)의 기본이 되는 동작 표현으로, \'다름을 나타내다\'라고 기억하세요.',
      context: '단순히 모양이 다른 것뿐만 아니라 사람들의 생각이나 견해가 일치하지 않고 갈라지는 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'vary는 변화하며 다르다는 느낌을, contrast는 대조적으로 다르다는 느낌을 줍니다. 반대로 agree는 의견이 일치함을 뜻합니다.',
    }),
    {
      definition: 'to be not the same as someone or something else in nature, quality, or amount',
      synonyms: ['vary', 'contrast', 'disagree'],
      antonyms: ['agree', 'match', 'coincide'],
      exampleSentences: [
        { en: 'The two sisters differ greatly in their musical tastes.', ko: '그 두 자매는 음악적 취향이 크게 다르다.' },
        { en: 'Experts differ as to the cause of the economic crisis.', ko: '경제 위기의 원인에 대해서는 전문가들의 의견이 갈린다.' },
      ],
    }
  ),
  word('Difficulty', '어려움', 3, 'noun',
    ['쉬움', '손쉬움', '순조', '편안', '여유', '간편', '수월', '가벼움', '단순', '평탄'],
    tips({
      etymology: '형용사 difficult(어려운) 뒤에 상태를 나타내는 명사형 접미사 -y가 결합되어 탄생했습니다.',
      visual: '무거운 짐을 지고 가파른 계단을 한 걸음씩 힘들게 올라가는 사람의 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'뒤피 걸티\'와 비슷하게 들리는데, 뒤처진 피곤한 걸음걸이처럼 힘든 상황을 연상해 보세요.',
      context: '주로 \'have difficulty -ing\' 형태로 쓰여 무언가를 하는 데 겪는 곤란함이나 장애물을 표현합니다.',
      synonymAntonym: 'hardship, trouble과 비슷하며, 반대로 아주 쉬운 상태인 ease, simplicity와 대조됩니다.',
    }),
    {
      definition: 'the quality of being hard to accomplish, deal with, or understand, often requiring a lot of effort',
      synonyms: ['hardship', 'trouble', 'challenge'],
      antonyms: ['ease', 'simplicity', 'facility'],
      exampleSentences: [
        { en: 'She had great difficulty breathing after the long race.', ko: '그녀는 긴 경주가 끝난 후 숨을 쉬는 데 큰 어려움을 겪었다.' },
        { en: 'The team overcame every financial difficulty to finish the film.', ko: '그 팀은 영화를 완성하기 위해 모든 재정적 어려움을 극복했다.' },
      ],
    }
  ),
  word('Dig', '파다', 3, 'verb',
    ['메우다', '덮다', '닫다', '묻다', '숨기다', '매립하다', '포장하다', '쌓다', '올리다', '건설하다'],
    tips({
      etymology: '고대 영어 \'diggen\'에서 유래하여 도구를 이용해 구멍이나 굴을 만드는 행위를 뜻합니다.',
      visual: '정원에서 삽을 들고 흙을 한 삽씩 퍼내어 깊은 구멍을 만드는 장면을 떠올리세요.',
      soundAlike: '배구에서 공을 낮게 받아내는 기술인 \'디그\'도 바닥 쪽으로 몸을 낮게 파고드는 동작과 비슷합니다.',
      context: '단순히 땅을 파는 것뿐만 아니라 숨겨진 정보나 진실을 깊이 조사하여 캐낼 때도 자주 사용됩니다.',
      synonymAntonym: '구멍을 만드는 excavate와 유의어이며, 구멍을 다시 채우는 fill과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to break up and move earth or other material with a tool, a machine, or hands',
      synonyms: ['excavate', 'shovel', 'scoop'],
      antonyms: ['fill', 'bury', 'cover'],
      exampleSentences: [
        { en: 'They had to dig through the snow to reach the door.', ko: '그들은 문에 도달하기 위해 눈을 파헤쳐야 했다.' },
        { en: 'The dog likes to dig deep holes in the garden.', ko: '그 개는 정원에 깊은 구멍을 파는 것을 좋아한다.' },
      ],
    }
  ),
  word('Digital', '디지털의', 3, 'adjective',
    ['아날로그의', '수동의', '기계적인', '물리적인', '전통적인', '재래식의', '손으로하는', '실제의', '유형의', '구식의'],
    tips({
      etymology: '손가락이나 숫자를 뜻하는 라틴어 \'digitus\'에서 유래했습니다. 손가락으로 숫자를 세는 것에서 정보를 숫자로 처리한다는 의미가 되었습니다.',
      visual: '0과 1로 이루어진 이진법 코드가 컴퓨터 화면 위로 쏟아져 내리는 영화 속 장면을 상상해 보세요.',
      soundAlike: '손가락을 뜻하는 \'디지트(digit)\'와 발음이 비슷합니다. 손가락으로 버튼을 누르는 전자 기기를 떠올려 보세요.',
      context: '종이 신문 대신 태블릿으로 뉴스를 보거나, 필름 카메라 대신 스마트폰을 사용하는 현대적인 방식을 말할 때 주로 쓰입니다.',
      synonymAntonym: '컴퓨터로 처리되는 computerized와 비슷하며, 바늘이 움직이는 시계 같은 analog와는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to or using signals or information represented by discrete values, especially binary digits, rather than continuous functions',
      synonyms: ['computerized', 'electronic', 'numeric'],
      antonyms: ['analog', 'manual', 'physical'],
      exampleSentences: [
        { en: 'The transition from paper records to digital files has improved efficiency.', ko: '종이 기록에서 전자 파일로의 전환은 효율성을 향상시켰다.' },
        { en: 'Many people prefer reading digital books on their tablets while traveling.', ko: '많은 사람들이 여행 중에 태블릿으로 전자책을 읽는 것을 선호한다.' },
      ],
    }
  ),
  word('Direct', '직접적인', 3, 'adjective',
    ['간접적인', '우회적인', '애매한', '돌려말하는', '숨겨진', '은밀한', '암시적인', '완곡한', '불분명한', '모호한'],
    tips({
      etymology: '분리를 뜻하는 di와 똑바른을 뜻하는 rect가 합쳐져 \'중간에 꺾이지 않고 똑바로 향하다\'라는 의미가 되었습니다.',
      visual: '중간 기착지 없이 출발지에서 목적지까지 한 번에 쭉 뻗은 화살표를 상상해 보세요.',
      soundAlike: '중간 유통 단계 없이 보험사와 바로 계약하는 \'다이렉트 보험\' 광고를 떠올리면 이해가 쉽습니다.',
      context: '물리적인 거리뿐만 아니라, 성격이 솔직하거나 중간 단계가 없는 비즈니스 상황에서도 자주 쓰입니다.',
      synonymAntonym: 'straight와 immediate는 물리적/시간적 직접함을, indirect와 roundabout은 우회하는 성질을 나타냅니다.',
    }),
    {
      definition: 'proceeding in a straight line or by the shortest course without anything blocking the way',
      synonyms: ['straight', 'immediate', 'frank'],
      antonyms: ['indirect', 'roundabout', 'vague'],
      exampleSentences: [
        { en: 'Please give me a direct answer.', ko: '직접적인 답변을 해 주세요.' },
        { en: 'He took a direct flight to Seoul.', ko: '그는 서울로 가는 직항편을 탔다.' },
      ],
    }
  ),
  word('Disappear', '사라지다', 3, 'verb',
    ['나타나다', '나오다', '등장하다', '출현하다', '보이다', '존재하다', '남다', '잔존하다', '유지하다', '고정되다'],
    tips({
      etymology: '반대를 뜻하는 접두사 dis-와 \'나타나다\'라는 의미의 appear가 결합되어 \'나타난 상태의 반대\' 즉, 보이지 않게 됨을 의미합니다.',
      visual: '마술사가 모자 속에 넣은 토끼가 펑 소리와 함께 연기 속으로 감쪽같이 자취를 감추는 모습을 떠올려 보세요.',
      soundAlike: '\'디스(dis-)\'는 부정적인 느낌, \'어피어(appear)\'는 나타나는 것이니, 나타나는 것을 부정하여 사라진다고 외우면 쉽습니다.',
      context: '안개가 걷히거나, 물건을 분실했을 때, 혹은 공룡처럼 종 자체가 멸종하여 존재가 없어질 때도 폭넓게 사용됩니다.',
      synonymAntonym: 'vanish는 갑자기 사라질 때, fade는 서서히 흐려질 때 쓰며, 반대로 나타날 때는 appear나 emerge를 씁니다.',
    }),
    {
      definition: 'to pass out of sight or go away from a place and be no longer seen',
      synonyms: ['vanish', 'fade', 'evaporate'],
      antonyms: ['appear', 'emerge', 'arrive'],
      exampleSentences: [
        { en: 'The sun disappeared behind the clouds.', ko: '태양이 구름 뒤로 사라졌다.' },
        { en: 'The magician made the rabbit disappear.', ko: '마술사는 토끼를 사라지게 했다.' },
      ],
    }
  ),
  word('Disappoint', '실망시키다', 3, 'verb',
    ['만족시키다', '기쁘게 하다', '기대에 부응하다', '성취시키다', '칭찬하다', '감사하다', '보상하다', '보답하다', '성공시키다', '달성시키다'],
    tips({
      etymology: '반대를 뜻하는 dis와 지명/약속을 뜻하는 appoint가 만나 약속을 어겨 실망을 준다는 의미가 되었습니다.',
      visual: '기대했던 선물을 열었는데 상자가 비어 있어 어깨가 축 늘어진 아이의 모습을 상상해 보세요.',
      soundAlike: '디스(부정) + 어포인트(임명하다)로 끊어서 발음하며 \'임명을 취소해 실망시키다\'라고 외워보세요.',
      context: '결과가 기대에 못 미치거나 누군가의 믿음을 저버렸을 때 주로 쓰이는 감정 동사입니다.',
      synonymAntonym: '동의어는 let down, fail, dissatisfy이며 반의어는 satisfy, please, delight입니다.',
    }),
    {
      definition: 'to fail to fulfill the hopes or expectations of someone',
      synonyms: ['let down', 'fail', 'dissatisfy'],
      antonyms: ['satisfy', 'please', 'delight'],
      exampleSentences: [
        { en: 'I hope I did not disappoint you.', ko: '실망시켜 드리지 않았기를 바랍니다.' },
        { en: 'The movie disappointed audiences.', ko: '그 영화는 관객들을 실망시켰다.' },
      ],
    }
  ),
  word('Discover', '발견하다', 3, 'verb',
    ['놓치다', '잃다', '숨기다', '은폐하다', '무시하다', '오해하다', '거짓말하다', '위장하다', '덮다', '감추다'],
    tips({
      etymology: '반대를 뜻하는 접두사 dis와 덮개를 뜻하는 cover가 결합되어, 덮여 있던 것을 벗겨내어 드러낸다는 의미에서 유래되었습니다.',
      visual: '오래된 지도를 따라가다 덤불 속에 숨겨진 고대 유적의 입구를 처음으로 찾아내는 탐험가의 모습을 상상해 보세요.',
      soundAlike: '다큐멘터리 전문 방송인 \'디스커버리(Discovery)\' 채널이 세상의 신비로운 사실들을 찾아내어 보여주는 것을 떠올리면 쉽습니다.',
      context: '새로운 행성이나 치료법 같은 과학적 성과뿐만 아니라, 몰랐던 맛집이나 자신의 적성을 처음 알게 되었을 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 찾아내는 find와 유사하며, 반대로 정보를 감추는 conceal이나 물건을 숨기는 hide와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to find information, a place, or an object, especially for the first time',
      synonyms: ['find', 'uncover', 'detect'],
      antonyms: ['hide', 'conceal', 'lose'],
      exampleSentences: [
        { en: 'Scientists recently discovered a new way to reach the distant planet.', ko: '과학자들은 최근 먼 행성에 도달하는 새로운 방법을 발견했다.' },
        { en: 'He was surprised to discover that he had a natural gift for playing the piano.', ko: '그는 자신이 피아노 연주에 타고난 재능이 있다는 것을 발견하고 깜짝 놀랐다.' },
      ],
    }
  ),
  word('Discuss', '논의하다', 3, 'verb',
    ['침묵하다', '무시하다', '회피하다', '거절하다', '단독 결정하다', '방관하다', '은폐하다', '생략하다', '부인하다', '외면하다'],
    tips({
      etymology: '분리를 뜻하는 \'dis-\'와 두드리다를 뜻하는 \'cutere\'가 결합하여, 문제를 조각조각 나누어 검토한다는 의미에서 유래되었습니다.',
      visual: '회의실 원형 테이블에 여러 사람이 모여 각자의 아이디어가 적힌 종이를 가운데에 놓고 대화하는 장면을 상상하세요.',
      soundAlike: '한국어에서도 \'디스커션\'이라는 외래어로 자주 쓰이며, TV 토론 프로그램의 제목이나 대학 강의 형식에서 자주 접할 수 있습니다.',
      context: '단순히 안부를 묻는 대화보다는 특정 안건, 문제, 혹은 계획을 해결하거나 결정하기 위해 깊이 있게 대화할 때 주로 사용합니다.',
      synonymAntonym: 'talk about과 의미가 같지만 더 격식 있는 표현이며, 반대로 아무런 대화 없이 상황을 넘기는 ignore나 neglect와 대조됩니다.',
    }),
    {
      definition: 'to speak with others about a particular topic in order to exchange ideas or reach a decision',
      synonyms: ['talk about', 'debate', 'confer'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'We need to discuss the budget for the upcoming project.', ko: '우리는 다가오는 프로젝트의 예산에 대해 논의해야 합니다.' },
        { en: 'They discussed the plan in detail during the meeting.', ko: '그들은 회의 동안 그 계획을 상세히 논의했습니다.' },
      ],
    }
  ),
  word('Disease', '질병', 3, 'noun',
    ['건강', '웰빙', '강건', '튼튼함', '활력', '무병', '회복', '치유', '예방', '보건'],
    tips({
      etymology: '부정을 뜻하는 \'dis\'와 편안함을 뜻하는 \'ease\'가 결합되어, 몸이나 마음이 편안하지 않은 상태를 의미합니다.',
      visual: '침대에 누워 이마에 젖은 수건을 올리고 열을 재고 있는 환자의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'디지즈\'와 비슷한데, 병에 걸려 \'뒤지다(죽다)\'라는 강한 표현과 연결하면 잊기 어렵습니다.',
      context: '단순한 통증보다는 의학적으로 정의된 특정 질환이나 감염병, 만성적인 신체 이상 상태를 가리킬 때 주로 사용됩니다.',
      synonymAntonym: 'illness나 sickness는 일반적인 아픈 상태를, health와 wellness는 건강한 상태를 나타냅니다.',
    }),
    {
      definition: 'A particular abnormal condition that negatively affects the structure or function of all or part of a living organism.',
      synonyms: ['illness', 'sickness', 'ailment'],
      antonyms: ['health', 'wellness', 'fitness'],
      exampleSentences: [
        { en: 'The disease spread rapidly through the local community.', ko: '그 질병은 지역 사회에 빠르게 퍼졌습니다.' },
        { en: 'Early detection is crucial for treating this chronic disease.', ko: '이 만성 질병을 치료하는 데는 조기 발견이 매우 중요합니다.' },
      ],
    }
  ),
  word('Display', '전시하다', 3, 'verb',
    ['숨기다', '은닉하다', '감추다', '제거하다', '정리하다', '포장하다', '덮다', '가리다', '봉인하다', '밀봉하다'],
    tips({
      etymology: '라틴어 dis-(반대)와 plicare(접다)가 합쳐진 단어로, 접혀 있던 것을 반대로 널리 펼쳐서 보여준다는 어원을 가지고 있습니다.',
      visual: '백화점 1층 쇼윈도에 화려한 조명을 받으며 사람들의 시선을 끌기 위해 진열된 명품 가방을 떠올려 보세요.',
      soundAlike: '우리에게 익숙한 스마트폰이나 TV의 \'디스플레이\' 화면은 영상 정보를 우리 눈에 보여주는 장치입니다.',
      context: '박물관에 유물을 배치하거나, 매장에 상품을 진열할 때, 또는 슬픔이나 기쁨 같은 감정을 겉으로 표현할 때도 사용합니다.',
      synonymAntonym: 'exhibit, show와는 보여준다는 의미로 통하며, 반대로 hide나 conceal은 남이 보지 못하게 감춘다는 뜻입니다.',
    }),
    {
      definition: 'to arrange objects or information in a place where they can be easily seen by the public',
      synonyms: ['exhibit', 'show', 'reveal'],
      antonyms: ['hide', 'conceal', 'cover'],
      exampleSentences: [
        { en: 'The museum displays ancient artifacts from the Roman Empire.', ko: '그 박물관은 로마 제국의 고대 유물들을 전시합니다.' },
        { en: 'He displayed great courage during the rescue mission.', ko: '그는 구조 임무 동안 엄청난 용기를 보여주었습니다.' },
      ],
    }
  ),
  word('Distance', '거리', 3, 'noun',
    ['근접', '가까움', '인접', '밀접', '접촉', '닿음', '붙음', '접근', '즉시', '순간'],
    tips({
      etymology: 'dis(멀리) + stant(서 있다)가 합쳐져 두 지점이 서로 떨어져 서 있는 상태를 말합니다.',
      visual: '지도 위에서 출발지와 목적지 사이에 길게 그어진 점선을 떠올려 보세요.',
      soundAlike: '마라톤 같은 \'롱 디스턴스(장거리)\' 경기를 생각하면 익숙한 단어입니다.',
      context: '물리적인 길이나 공간의 길이뿐만 아니라 사람 사이의 심리적 간격을 뜻하기도 합니다.',
      synonymAntonym: '동의어는 gap, space, span이며 반의어는 proximity, closeness, nearness입니다.',
    }),
    {
      definition: 'The measurement of the amount of space between two separate points, objects, or locations.',
      synonyms: ['gap', 'space', 'span'],
      antonyms: ['proximity', 'closeness', 'nearness'],
      exampleSentences: [
        { en: 'What is the distance to the airport?', ko: '공항까지 거리가 얼마나 되나요?' },
        { en: 'He ran a long distance yesterday.', ko: '그는 어제 먼 거리를 달렸다.' },
      ],
    }
  ),
  word('Distribute', '분배하다', 4, 'verb',
    ['모으다', '집중하다', '축적하다', '보관하다', '독점하다', '흡수하다', '빨아들이다', '수집하다', '합치다', '통합하다'],
    tips({
      etymology: '라틴어 접두사 dis-(따로따로)와 tribuere(할당하다)가 결합되어, 여러 사람에게 몫을 나누어 준다는 의미가 되었습니다.',
      visual: '피자 한 판을 조각내어 파티에 온 친구들에게 한 접시씩 골고루 나누어 주는 장면을 상상해 보세요.',
      soundAlike: '물류 센터에서 물건을 각 대리점으로 보내는 \'유통\' 과정을 뜻하는 distribution의 동사형입니다.',
      context: '전단지를 길거리에서 돌리거나, 재난 현장에서 구호 물자를 배급하거나, 기업의 이익을 주주들에게 배분할 때 사용합니다.',
      synonymAntonym: '나누어 주는 allocate와 반대로, 한곳으로 모으는 collect나 accumulate는 반대 개념입니다.',
    }),
    {
      definition: 'to give out portions of something to a group of people or to spread something over an area',
      synonyms: ['allocate', 'deliver', 'spread'],
      antonyms: ['collect', 'gather', 'accumulate'],
      exampleSentences: [
        { en: 'The charity began to distribute warm blankets to the homeless during the cold winter night.', ko: '자선 단체는 추운 겨울 밤 동안 노숙자들에게 따뜻한 담요를 나누어 주기 시작했다.' },
        { en: 'The software allows users to distribute large files across multiple servers quickly.', ko: '이 소프트웨어는 사용자들이 큰 파일을 여러 서버에 걸쳐 빠르게 분산시킬 수 있게 해준다.' },
      ],
    }
  ),
  word('Divide', '나누다', 4, 'verb',
    ['합치다', '통합하다', '곱하다', '모으다', '연결하다', '결합하다', '융합하다', '합류하다', '묶다', '통일하다'],
    tips({
      etymology: '라틴어 \'dividere\'에서 유래했으며, \'di-\'(따로)와 \'videre\'(분리하다)가 결합되어 하나를 여러 조각으로 쪼갠다는 의미를 가집니다.',
      visual: '피자 한 판을 조각조각 잘라 여러 접시에 옮겨 담는 모습을 상상해 보세요.',
      soundAlike: '수학의 \'나눗셈\'을 뜻하는 \'division\'의 동사형으로, 숫자를 쪼개는 상황을 떠올리면 쉽습니다.',
      context: '물건을 물리적으로 쪼갤 때뿐만 아니라, 의견이 서로 갈리거나 조직을 분할할 때도 자주 쓰입니다.',
      synonymAntonym: 'split, separate와 비슷하며, 하나로 합치는 unite, combine과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to separate into two or more parts, areas, or groups',
      synonyms: ['split', 'separate', 'detach'],
      antonyms: ['unite', 'combine', 'join'],
      exampleSentences: [
        { en: 'The teacher decided to divide the students into four small teams.', ko: '선생님은 학생들을 네 개의 작은 팀으로 나누기로 결정했다.' },
        { en: 'A large river serves to divide the city into northern and southern sections.', ko: '큰 강이 그 도시를 북쪽과 남쪽 구역으로 나누는 역할을 한다.' },
      ],
    }
  ),
  word('Double', '두 배의', 4, 'adjective',
    ['절반의', '단일의', '세 배의', '부족한', '희박한', '사소한', '부분적인', '유일한', '축소된', '결핍된'],
    tips({
      etymology: '라틴어 \'duplus\'에서 유래했으며, \'duo(둘)\'와 \'plus(겹치다)\'가 합쳐져 두 겹으로 되어 있다는 의미를 담고 있습니다.',
      visual: '똑같은 물건 두 개가 나란히 놓여 있거나, 거울에 비친 모습처럼 하나가 더 생겨 총 두 개가 된 장면을 상상해 보세요.',
      soundAlike: '야구에서 2루타를 뜻하는 \'더블\', 혹은 패티가 두 장 들어간 \'더블 버거\'의 발음을 떠올리면 기억하기 쉽습니다.',
      context: '양이나 크기가 평소보다 두 배일 때뿐만 아니라, 호텔의 \'더블 룸\'처럼 두 명을 위한 시설을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'dual이나 twin은 \'둘\'이라는 속성에 집중하고, single은 \'하나\'라는 반대 개념을 나타냅니다.',
    }),
    {
      definition: 'consisting of two equal, identical, or similar parts or things',
      synonyms: ['dual', 'twin', 'twofold'],
      antonyms: ['single', 'half', 'solitary'],
      exampleSentences: [
        { en: 'The hotel provides a double bed in every standard room.', ko: '그 호텔은 모든 일반 객실에 더블 침대를 제공합니다.' },
        { en: 'He has a double meaning in his words that confuses people.', ko: '그의 말에는 사람들을 혼란스럽게 하는 이중적인 의미가 담겨 있습니다.' },
      ],
    }
  ),
  word('Doubt', '의심', 4, 'noun',
    ['확신', '믿음', '신뢰', '자신감', '확정', '단정', '명확', '틀림없음', '입증', '동의'],
    tips({
      etymology: '라틴어 dubitare(망설이다)에서 유래했으며, 두 가지 선택지 사이에서 마음을 정하지 못하고 갈팡질팡하는 상태를 의미합니다.',
      visual: '물음표가 가득한 머릿속에서 턱을 괴고 눈을 가늘게 뜬 채 상대방의 말을 곱씹어보는 사람의 표정을 떠올려 보세요.',
      soundAlike: '철자 중간에 있는 \'b\'는 소리가 나지 않는 묵음입니다. \'돕트\'가 아니라 \'다우트\'라고 발음해야 합니다.',
      context: '어떤 사실이 진짜인지 가짜인지 확신이 서지 않거나, 누군가의 의도가 의심스러울 때 주로 사용되는 명사입니다.',
      synonymAntonym: '불확실함을 뜻하는 uncertainty와 비슷하며, 확실함을 뜻하는 certainty와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a feeling of being unsure about something or not believing that something is true',
      synonyms: ['uncertainty', 'suspicion', 'disbelief'],
      antonyms: ['certainty', 'trust', 'confidence'],
      exampleSentences: [
        { en: 'There is no doubt about his honesty.', ko: '그의 정직함에 대해서는 의심의 여지가 없다.' },
        { en: 'The witness expressed doubt during the cross-examination.', ko: '증인은 반대 심문 중에 의심을 표명했다.' },
      ],
    }
  ),
  word('Draft', '초안', 4, 'noun',
    ['정본', '완성본', '최종', '인쇄본', '공식', '확정', '출판', '게시', '공개', '완결'],
    tips({
      etymology: '무언가를 끌어당겨(draw) 선을 긋는다는 뜻에서 유래하여, 글의 밑그림을 그리는 것을 의미합니다.',
      visual: '원고지에 빨간 펜으로 수정 사항이 가득 적힌 미완성 보고서의 이미지를 떠올려 보세요.',
      soundAlike: '맥주를 바로 뽑아내는 \'생맥주(draft beer)\'도 같은 단어를 사용합니다.',
      context: '에세이의 첫 번째 버전이나 법안의 초안, 혹은 스포츠 팀의 신인 선발을 뜻하기도 합니다.',
      synonymAntonym: 'outline, sketch와 비슷하며, 완성본을 뜻하는 final이나 completion과는 반대됩니다.',
    }),
    {
      definition: 'A preliminary version of a piece of writing or a plan that is subject to revision.',
      synonyms: ['outline', 'sketch', 'version'],
      antonyms: ['final', 'completion', 'result'],
      exampleSentences: [
        { en: 'I am working on the first draft of my essay.', ko: '나는 에세이의 첫 초안을 작성하고 있다.' },
        { en: 'She revised the draft several times.', ko: '그녀는 초안을 여러 번 수정했다.' },
      ],
    }
  ),
  word('Drag', '끌다', 4, 'verb',
    ['밀다', '들다', '올리다', '던지다', '날다', '뛰다', '달리다', '가볍게', '떠다', '부유하다'],
    tips({
      etymology: '고대 영어 dragan에서 유래하여 \'당기다\'라는 뜻을 가집니다.',
      visual: '무거운 짐을 바닥에 붙인 채 끙끙대며 끌고 가는 모습',
      soundAlike: '마우스로 아이콘을 \'드래그\'해서 옮기는 동작을 떠올려 보세요.',
      context: '발을 질질 끌며 걷거나 무거운 물체를 이동시킬 때 주로 쓰입니다.',
      synonymAntonym: '동의어 pull과 비슷하지만 훨씬 더 많은 힘이 들어가는 느낌입니다.',
    }),
    {
      definition: 'to pull something along the ground with effort',
      synonyms: ['pull', 'haul', 'tow'],
      antonyms: ['push', 'shove', 'propel'],
      exampleSentences: [
        { en: 'Do not drag your feet on the floor.', ko: '바닥에서 발을 끌지 마라.' },
        { en: 'They had to drag the heavy sofa across the room.', ko: '그들은 무거운 소파를 방 안으로 끌어와야 했다.' },
      ],
    }
  ),
  word('Drama', '드라마', 4, 'noun',
    ['코미디', '다큐멘터리', '뉴스', '광고', '예능', '스포츠', '평화', '일상', '무사건', '잡지'],
    tips({
      etymology: '그리스어 \'dran(행동하다)\'에서 유래하여 무대 위에서 실제로 일어나는 \'행동\'이나 \'공연\'을 뜻하게 되었습니다.',
      visual: '무대 위에서 배우들이 감정 섞인 목소리로 대화를 나누며 연기하는 장면을 떠올려 보세요.',
      soundAlike: '한국어 \'드라마\'와 발음이 거의 같아 외우기 쉽지만, 영어에서는 연극 대본이나 극적인 사건 자체를 뜻하기도 합니다.',
      context: 'TV 프로그램 종류를 말할 때도 쓰이지만, 일상에서 일어나는 아주 극적이고 갈등이 심한 상황을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '무대 공연을 뜻하는 play와 비슷하며, 꾸며낸 이야기가 아닌 실제 사실을 뜻하는 reality와는 반대됩니다.',
    }),
    {
      definition: 'A piece of writing that tells a story through dialogue and performance, often involving conflict and serious themes.',
      synonyms: ['play', 'screenplay', 'production'],
      antonyms: ['reality', 'fact', 'nonfiction'],
      exampleSentences: [
        { en: 'The historical drama captured the audience\'s attention with its realistic costumes.', ko: '그 사극 드라마는 사실적인 의상으로 관객들의 시선을 사로잡았다.' },
        { en: 'There was a lot of family drama during the holiday dinner.', ko: '명절 저녁 식사 동안 가족 간에 많은 극적인 갈등이 있었다.' },
      ],
    }
  ),
  word('Drawer', '서랍', 4, 'noun',
    ['문', '덮개', '캐비닛', '선반', '바닥', '천장', '벽', '바깥', '표면', '상판'],
    tips({
      etymology: '당기다라는 뜻의 draw에 -er이 붙어 \'당겨서 여는 것\'이라는 의미가 되었습니다.',
      visual: '책상이나 옷장에 달린 손잡이를 잡고 몸쪽으로 쭉 당겨서 여는 직사각형 상자를 떠올려 보세요.',
      soundAlike: '그림을 그리는 사람을 뜻하는 단어와 철자가 똑같으므로 문맥에 따라 가구인지 사람인지 구분해야 합니다.',
      context: '주로 책상, 옷장, 화장대 등 가구의 일부분으로 물건을 분류해서 보관할 때 사용합니다.',
      synonymAntonym: '가구 내부의 분리된 공간인 compartment와 비슷하며, 겉면을 뜻하는 exterior와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a box-shaped storage compartment without a lid that slides in and out of a piece of furniture',
      synonyms: ['compartment', 'tray', 'bin'],
      antonyms: ['lid', 'surface', 'exterior'],
      exampleSentences: [
        { en: 'Put the papers in the top drawer.', ko: '서류를 맨 위 서랍에 넣어라.' },
        { en: 'I found the key in the bottom drawer.', ko: '나는 맨 아래 서랍에서 열쇠를 찾았다.' },
      ],
    }
  ),
  word('Due', '예정된', 4, 'adjective',
    ['지연된', '늦은', '조기', '완료된', '취소된', '미정', '불확실', '무기한', '보류', '연기'],
    tips({
      etymology: '라틴어 debitus에서 유래하여 \'빚진\' 혹은 \'당연히 해야 할\'의 의미를 담고 있습니다.',
      visual: '달력의 특정 날짜에 빨간 동그라미가 쳐진 마감 기한을 떠올려 보세요.',
      soundAlike: '임산부의 출산 예정일을 \'due date\'라고 부르는 것을 기억하면 쉽습니다.',
      context: '과제 제출일이나 요금 납부 기한이 되었을 때 가장 빈번하게 사용되는 단어입니다.',
      synonymAntonym: 'scheduled와 의미가 비슷하며, 기한이 이미 지난 상태는 overdue라고 합니다.',
    }),
    {
      definition: 'expected or planned to happen at a particular time',
      synonyms: ['scheduled', 'expected', 'awaited'],
      antonyms: ['overdue', 'late', 'unexpected'],
      exampleSentences: [
        { en: 'Your report is due next Monday.', ko: '당신의 보고서는 다음 주 월요일까지 제출해야 합니다.' },
        { en: 'The payment is due at the end of the month.', ko: '대금 결제는 이번 달 말로 예정되어 있습니다.' },
      ],
    }
  ),
  word('Dust', '먼지', 4, 'noun',
    ['청결', '광택', '정화', '수분', '습기', '진공', '무균', '소독', '깨끗함', '반짝임'],
    tips({
      etymology: '고대 영어 \'dust\'에서 유래했으며, 원래 가루나 흙, 혹은 연소된 재를 의미했습니다.',
      visual: '햇빛이 비치는 창가에서 공중에 둥둥 떠다니는 아주 작은 알갱이들을 상상해 보세요.',
      soundAlike: '먼지를 털어내는 도구인 \'더스터(duster)\'를 떠올리면 기억하기 쉽습니다.',
      context: '가구 위에 뽀얗게 내려앉거나 공기 중에 떠다니는 건조하고 미세한 입자를 뜻합니다.',
      synonymAntonym: 'dirt보다 입자가 훨씬 곱고 건조한 상태를 의미하며, 반대말로는 깨끗한 상태인 cleanliness가 있습니다.',
    }),
    {
      definition: 'fine dry powder consisting of tiny particles of earth or waste matter lying on objects or blown about by the wind',
      synonyms: ['dirt', 'grime', 'powder'],
      antonyms: ['cleanliness', 'purity', 'polish'],
      exampleSentences: [
        { en: 'The old books were covered in dust.', ko: '낡은 책들이 먼지로 덮여 있었다.' },
        { en: 'She wiped the dust off the shelves.', ko: '그녀는 선반에서 먼지를 닦아냈다.' },
      ],
    }
  ),
  word('Duty', '의무', 4, 'noun',
    ['자유', '선택', '의지', '무책임', '방임', '면제', '해제', '면역', '면제권', '권리'],
    tips({
      etymology: 'due(마땅한 것)에 명사형 접미사가 붙어 \'마땅히 해야 할 일\'이라는 의미가 되었습니다.',
      visual: '제복을 입고 초소에서 경계 근무를 서는 군인의 모습이나 세관 검사대를 떠올려 보세요.',
      soundAlike: '공항의 \'면세점\'을 duty-free라고 하는데, 여기서 duty는 국가에 내야 할 세금을 뜻하기도 합니다.',
      context: '도덕적인 책임감이나 직업상 반드시 수행해야 하는 공식적인 업무를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'responsibility와 유사하며, 반대로는 의무에서 벗어난 상태인 exemption이 있습니다.',
    }),
    {
      definition: 'something that a person feels they must do because it is morally right or required by law',
      synonyms: ['obligation', 'responsibility', 'task'],
      antonyms: ['freedom', 'choice', 'exemption'],
      exampleSentences: [
        { en: 'It is our duty to help those in need.', ko: '도움이 필요한 사람을 돕는 것은 우리의 의무이다.' },
        { en: 'He is on duty until midnight.', ko: '그는 자정까지 근무 중이다.' },
      ],
    }
  ),
  word('Eager', '열심인', 4, 'adjective',
    ['무관심한', '냉담한', '게으른', '느긋한', '소극적인', '주저하는', '마지못한', '지루해하는', '피곤한', '권태로운'],
    tips({
      etymology: '라틴어 acer(날카로운)에서 유래하여 마음이 날카롭게 깨어있는 상태를 뜻합니다.',
      visual: '선생님의 질문에 눈을 반짝이며 손을 번쩍 드는 아이의 모습',
      soundAlike: '발음이 \'이거!\' 하고 무언가를 간절히 집으려는 소리와 비슷하다고 연상해 보세요.',
      context: '무언가를 몹시 하고 싶어 하거나 배우고 싶어 하는 긍정적인 열정을 나타낼 때 주로 쓰입니다.',
      synonymAntonym: 'keen과 의미가 통하며, 아무런 관심이 없는 indifferent와는 반대되는 개념입니다.',
    }),
    {
      definition: 'feeling a strong desire or impatience to do something or for something to happen',
      synonyms: ['enthusiastic', 'keen', 'anxious'],
      antonyms: ['indifferent', 'apathetic', 'reluctant'],
      exampleSentences: [
        { en: 'She was eager to learn something new.', ko: '그녀는 새로운 것을 배우고 싶어 했다.' },
        { en: 'The team was eager to start the project.', ko: '팀은 프로젝트를 시작하기를 열망했다.' },
      ],
    }
  ),
  word('Earn', '벌다', 4, 'verb',
    ['쓰다', '지출하다', '잃다', '기부하다', '낭비하다', '소비하다', '빚지다', '선물받다', '상속받다', '분실하다'],
    tips({
      etymology: '고대 영어 earnian에서 유래하여 \'수고와 노동을 통해 무언가를 얻다\'라는 본질적인 의미를 가집니다.',
      visual: '달력에 가득 찬 근무 기록을 확인한 뒤 통장에 찍힌 숫자를 보며 뿌듯해하는 직장인의 모습',
      soundAlike: '배우다라는 뜻의 learn과 발음이 유사합니다. 무언가를 배워서(learn) 실력을 쌓아야 돈을 벌(earn) 수 있다고 연상하세요.',
      context: '단순히 금전적인 수익뿐만 아니라 타인의 존경, 신뢰, 학위처럼 노력의 결과로 얻어지는 가치 있는 것들에 두루 쓰입니다.',
      synonymAntonym: '공짜로 얻는 것이 아니라 정당한 대가를 치르고 얻는 gain과 유사하며, 반대로 허투루 써버리는 waste와는 대조됩니다.',
    }),
    {
      definition: 'to receive money or a reward as a result of labor, service, or merit',
      synonyms: ['gain', 'acquire', 'obtain'],
      antonyms: ['spend', 'lose', 'waste'],
      exampleSentences: [
        { en: 'She works two jobs to earn enough money to support her family.', ko: '그녀는 가족을 부양할 충분한 돈을 벌기 위해 두 가지 일을 한다.' },
        { en: 'After years of hard work, he finally earned the respect of his colleagues.', ko: '수년간의 노력 끝에, 그는 마침내 동료들의 존경을 얻었다.' },
      ],
    }
  ),
  word('Edge', '가장자리', 4, 'noun',
    ['중앙', '심장부', '핵심', '내부', '가운데', '코어', '축', '중심점', '심부', '깊은 곳'],
    tips({
      etymology: '고대 영어 ecg(날, 칼날)에서 유래하여 물체의 끝부분이나 날카로운 경계면을 뜻하게 되었습니다.',
      visual: '깎아지른 듯한 절벽의 아슬아슬한 끝부분에 서 있는 모습을 상상해 보세요.',
      soundAlike: '패션에서 \'에지(edge) 있다\'라고 할 때처럼 선이 날카롭게 살아있는 모서리를 떠올리세요.',
      context: '컵의 입이 닿는 부분이나 테이블의 모서리 등 모든 물체의 테두리를 지칭할 때 널리 쓰입니다.',
      synonymAntonym: '경계를 뜻하는 border와 유사하며, 정중앙을 뜻하는 center와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The outside limit of an object, area, or surface, farthest from the center.',
      synonyms: ['border', 'rim', 'margin'],
      antonyms: ['center', 'middle', 'core'],
      exampleSentences: [
        { en: 'Please stand back from the edge of the platform for your safety.', ko: '안전을 위해 승강장 가장자리에서 뒤로 물러나 주십시오.' },
        { en: 'The sharp edge of the paper gave him a small cut on his finger.', ko: '종이의 날카로운 모서리에 손가락을 살짝 베였다.' },
      ],
    }
  ),
  word('Edit', '편집하다', 4, 'verb',
    ['원본 유지', '손대지 않다', '생성하다', '삭제하다', '전부 지우다', '초기화', '무시하다', '통과시키다', '인쇄하다', '게시하다'],
    tips({
      etymology: '라틴어 editus(내놓다, 출판하다)에서 유래하여 원고를 다듬는 행위를 뜻합니다.',
      visual: '문서 작성 프로그램에서 오타를 고치거나 문장을 옮기는 커서를 떠올리세요.',
      soundAlike: '영상 편집자를 뜻하는 \'에디터(Editor)\'가 하는 행동이 바로 이것입니다.',
      context: '글뿐만 아니라 영상, 사진, 음악 등 데이터를 수정하고 다듬을 때 폭넓게 사용됩니다.',
      synonymAntonym: '동의어는 revise, modify, adapt이며 반의어는 preserve, ignore, neglect입니다.',
    }),
    {
      definition: 'to prepare written, visual, or audio material for publication by correcting, condensing, or otherwise modifying it',
      synonyms: ['revise', 'modify', 'adapt'],
      antonyms: ['preserve', 'ignore', 'neglect'],
      exampleSentences: [
        { en: 'I need to edit this video before posting it online.', ko: '게시하기 전에 이 영상을 편집해야 한다.' },
        { en: 'She edits every article for the school newspaper.', ko: '그녀는 학교 신문의 모든 기사를 편집한다.' },
      ],
    }
  ),
  word('Educate', '교육하다', 4, 'verb',
    ['무지하게 하다', '오해시키다', '혼란시키다', '무시하다', '방치하다', '속이다', '가로막다', '억압하다', '방해하다', '은폐하다'],
    tips({
      etymology: '접두사 e(밖으로)와 duc(이끌다)가 결합된 단어로, 사람 안에 잠재된 능력을 밖으로 이끌어낸다는 어원을 가지고 있습니다.',
      visual: '어두운 방에 갇혀 있던 아이의 손을 잡고 밝은 지식의 세상으로 데리고 나가는 선생님의 모습을 그려보세요.',
      soundAlike: '한국에서도 익숙한 \'에듀케이션(Education)\'이나 \'에듀(Edu)\'라는 단어의 뿌리가 되는 동사형입니다.',
      context: '단순히 지식을 전달하는 것을 넘어, 올바른 가치관을 형성하거나 특정 주제에 대해 대중을 깨우칠 때 두루 쓰입니다.',
      synonymAntonym: '가르치는 teach보다 격식 있고 체계적인 느낌이며, 반대로 잘못된 정보를 주는 mislead와는 대조적입니다.',
    }),
    {
      definition: 'To provide schooling or systematic instruction to someone, or to develop their mental and moral faculties.',
      synonyms: ['teach', 'instruct', 'tutor'],
      antonyms: ['mislead', 'misinform', 'neglect'],
      exampleSentences: [
        { en: 'The school aims to educate young minds in a safe environment.', ko: '그 학교는 안전한 환경에서 어린 학생들을 교육하는 것을 목표로 한다.' },
        { en: 'Campaigns are needed to educate the community about the importance of recycling.', ko: '재활용의 중요성에 대해 지역 사회를 교육하기 위한 캠페인이 필요하다.' },
      ],
    }
  ),
  word('Effect', '효과', 4, 'noun',
    ['원인', '무효', '무의미', '무영향', '공허', '무가치', '비효과', '실패', '무반응', '무변화'],
    tips({
      etymology: '라틴어 ex(밖으로)와 facere(만들다)가 결합되어, 어떤 행동을 통해 밖으로 만들어져 나온 \'결과\'를 의미합니다.',
      visual: '도미노의 첫 조각을 밀었을 때 마지막 조각이 쓰러지는 최종적인 변화의 모습을 상상해 보세요.',
      soundAlike: '영화 촬영 기법 중 하나인 \'특수 효과\'를 영어로 \'스페셜 이펙트(Special Effect)\'라고 부르는 것을 떠올리면 쉽습니다.',
      context: '약의 효능, 정책의 시행 결과, 혹은 누군가에게 끼친 영향력 등을 설명할 때 폭넓게 사용됩니다.',
      synonymAntonym: '동의어로는 impact, result, outcome이 있으며, 반대되는 개념인 \'원인\'을 뜻하는 cause, origin, source가 있습니다.',
    }),
    {
      definition: 'a change or consequence that occurs as a direct result of an action or cause',
      synonyms: ['impact', 'result', 'outcome'],
      antonyms: ['cause', 'origin', 'source'],
      exampleSentences: [
        { en: 'The medicine had a positive effect.', ko: '그 약은 긍정적인 효과가 있었습니다.' },
        { en: 'The new policy took effect last month.', ko: '새 정책이 지난달에 효력을 발휘하기 시작했습니다.' },
      ],
    }
  ),
  word('Effort', '노력', 4, 'noun',
    ['게으름', '무노력', '방임', '태만', '나태', '무관심', '소홀', '쉬움', '수월', '용이'],
    tips({
      etymology: '라틴어 \'ex(밖으로)\'와 \'fortis(강한)\'가 결합된 단어로, 자신의 내면에 있는 강한 힘을 밖으로 쏟아붓는 행위를 뜻합니다.',
      visual: '운동선수가 결승선을 통과하기 직전 온 힘을 다해 땀을 흘리며 달리는 모습을 떠올려 보세요.',
      soundAlike: '형용사형인 \'Effortless\'는 \'노력이 필요 없을 정도로 아주 쉬운\'이라는 뜻으로 자주 쓰입니다.',
      context: '단순히 한 번 해보는 시도(try)보다 훨씬 더 많은 에너지와 의지를 투입할 때 사용하는 단어입니다.',
      synonymAntonym: 'endeavor는 격식 있는 노력, exertion은 육체적 노력을 강조하며, 반대말인 laziness는 게으름을 뜻합니다.',
    }),
    {
      definition: 'the physical or mental energy that is needed to do something or to achieve a particular goal',
      synonyms: ['endeavor', 'exertion', 'struggle'],
      antonyms: ['laziness', 'idleness', 'inactivity'],
      exampleSentences: [
        { en: 'Success requires great effort.', ko: '성공에는 큰 노력이 필요합니다.' },
        { en: 'She made an effort to arrive on time.', ko: '그녀는 제시간에 도착하기 위해 노력했습니다.' },
      ],
    }
  ),
  word('Elect', '선출하다', 4, 'verb',
    ['임명하다', '해임하다', '거절하다', '기권하다', '보류하다', '배제하다', '제외하다', '퇴직시키다', '면직하다', '파면하다'],
    tips({
      etymology: '접두사 e-(밖으로)와 lect(고르다)가 결합되어, 여러 후보들 중에서 밖으로 뽑아낸다는 의미를 담고 있습니다.',
      visual: '수많은 투표 용지 중에서 한 사람의 이름을 적어 투표함에 넣는 장면을 상상해 보세요.',
      soundAlike: '선거를 뜻하는 Election과 발음이 비슷하므로, 선거를 통해 누군가를 뽑는 동작을 연상하세요.',
      context: '주로 대통령, 국회의원, 반장 등 공식적인 직책에 앉을 사람을 투표로 정할 때 사용합니다.',
      synonymAntonym: '무언가를 고르는 choose와 비슷하지만 더 공식적이며, 반대로 내쫓는 dismiss와는 대조적입니다.',
    }),
    {
      definition: 'to decide on a person for a particular office or position by casting a vote',
      synonyms: ['choose', 'vote', 'select'],
      antonyms: ['reject', 'dismiss', 'oust'],
      exampleSentences: [
        { en: 'Citizens will elect a new president next month.', ko: '시민들은 다음 달에 새 대통령을 선출할 것이다.' },
        { en: 'She was elected to the board of directors during the annual meeting.', ko: '그녀는 연례 회의에서 이사회 멤버로 선출되었다.' },
      ],
    }
  ),
  word('Element', '요소', 4, 'noun',
    ['전체', '합계', '총체', '복합체', '조합', '통합', '융합', '혼합', '복합', '다중'],
    tips({
      etymology: '라틴어 elementum에서 유래하여 더 이상 나눌 수 없는 기본 단위를 뜻합니다.',
      visual: '퍼즐 조각 하나하나가 모여 전체 그림을 완성하는 모습을 상상하세요.',
      soundAlike: '초등학교를 \'엘리멘터리 스쿨\'이라고 하는 이유는 기초와 기본을 배우는 곳이기 때문입니다.',
      context: '화학 원소뿐만 아니라 어떤 사건이나 사물의 구성 성분을 말할 때 씁니다.',
      synonymAntonym: '동의어는 component, factor, part이며 반의어는 whole, total, aggregate입니다.',
    }),
    {
      definition: 'A fundamental part or constituent of a larger whole, especially one that is necessary or characteristic.',
      synonyms: ['component', 'factor', 'part'],
      antonyms: ['whole', 'total', 'aggregate'],
      exampleSentences: [
        { en: 'Trust is an essential element of friendship.', ko: '신뢰는 우정의 필수 요소입니다.' },
        { en: 'Water is composed of chemical elements.', ko: '물은 화학 원소들로 구성되어 있습니다.' },
      ],
    }
  ),
  word('Eliminate', '제거하다', 4, 'verb',
    ['추가하다', '포함하다', '유지하다', '보존하다', '계속하다', '증가시키다', '강화하다', '축적하다', '쌓다', '보강하다'],
    tips({
      etymology: '라틴어 \'e-(밖으로)\'와 \'limen(문턱)\'이 결합된 단어로, 문턱 밖으로 내던져 완전히 없애버린다는 어원을 가지고 있습니다.',
      visual: '서바이벌 오디션 프로그램에서 탈락자가 조명 아래서 사라지며 무대 밖으로 퇴장하는 모습을 상상해 보세요.',
      soundAlike: '격투기나 게임에서 패배자를 탈락시키는 \'일리미네이션(Elimination)\' 매치를 떠올리면 기억하기 쉽습니다.',
      context: '단순히 치우는 것을 넘어 불필요한 요소, 질병, 오류, 혹은 경쟁자를 완전히 뿌리 뽑거나 제외할 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 없애는 remove와 유의어이며, 반대로 무언가를 집어넣거나 지키는 add, preserve와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to completely get rid of something that is unnecessary or unwanted',
      synonyms: ['remove', 'eradicate', 'discard'],
      antonyms: ['add', 'include', 'preserve'],
      exampleSentences: [
        { en: 'The new software was designed to eliminate human error in the calculation process.', ko: '새 소프트웨어는 계산 과정에서의 인적 오류를 제거하기 위해 설계되었습니다.' },
        { en: 'Healthy eating habits can help eliminate the risk of certain heart diseases.', ko: '건강한 식습관은 특정 심장병의 위험을 없애는 데 도움이 될 수 있습니다.' },
      ],
    }
  ),
  word('Embarrass', '부끄럽게 하다', 4, 'verb',
    ['자신감 있게 하다', '칭찬하다', '기쁘게 하다', '만족시키다', '격려하다', '위무하다', '존중하다', '존엄을 주다', '긍지심을 주다', '북돋우다'],
    tips({
      etymology: '라틴어 im-(안에) + barra(장벽)에서 유래하여, 장애물에 막혀 어찌할 바를 모르는 상태를 뜻합니다.',
      visual: '많은 사람들 앞에서 실수하여 얼굴이 사과처럼 새빨개진 사람의 모습을 상상해 보세요.',
      soundAlike: '임바러스 -> \'입 바르스\': 당황해서 입술이 바짝 마르는 상황을 떠올려 보세요.',
      context: '공공장소에서 부모님이 큰 소리로 내 이름을 부르거나 과거의 실수를 이야기할 때 느끼는 감정입니다.',
      synonymAntonym: 'humiliate, shame과 유사하며, 반대로 누군가를 기쁘게 하는 comfort와는 반대됩니다.',
    }),
    {
      definition: 'to cause someone to feel self-conscious, awkward, or ashamed in front of others',
      synonyms: ['humiliate', 'shame', 'abash'],
      antonyms: ['comfort', 'flatter', 'honor'],
      exampleSentences: [
        { en: 'I did not mean to embarrass you in front of your friends.', ko: '친구들 앞에서 당신을 당황하게 만들 의도는 없었다.' },
        { en: 'The unexpected question seemed to embarrass the politician.', ko: '예상치 못한 질문이 그 정치인을 당황하게 만드는 것 같았다.' },
      ],
    }
  ),
  word('Emerge', '나타나다', 4, 'verb',
    ['사라지다', '숨다', '가라앉다', '실종되다', '퇴장하다', '은퇴하다', '물러나다', '빠지다', '잠수하다', '은폐하다'],
    tips({
      etymology: 'e-(밖으로) + mergere(잠기다)가 합쳐져, 물속에 잠겨 있던 것이 밖으로 나오는 것을 의미합니다.',
      visual: '어두운 터널을 지나 밝은 빛이 보이는 출구로 막 빠져나오는 기차를 떠올려 보세요.',
      soundAlike: '이머지 -> \'이미지\': 숨어있던 형체(이미지)가 밖으로 드러나는 모습으로 연상하세요.',
      context: '안개 속에서 배가 서서히 모습을 드러내거나, 새로운 사실이 밝혀질 때 주로 쓰입니다.',
      synonymAntonym: 'appear와 유사하며, 시야에서 완전히 사라지는 disappear와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to move out of or away from something and come into view',
      synonyms: ['appear', 'surface', 'materialize'],
      antonyms: ['disappear', 'vanish', 'fade'],
      exampleSentences: [
        { en: 'A new leader began to emerge during the national crisis.', ko: '국가적 위기 속에서 새로운 지도자가 나타나기 시작했다.' },
        { en: 'The swimmer finally emerged from the water after being underwater for a minute.', ko: '수영 선수는 1분 동안 물속에 있다가 마침내 수면 위로 나타났다.' },
      ],
    }
  ),
];
