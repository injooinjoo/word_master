import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch14: VocabItem[] = [
  word('Benevolent', '자비로운', 7, 'adjective',
    ['냉혹한', '이기적인', '잔인한', '무자비한', '야만적인', '냉담한', '흉포한', '잔혹한', '무정한', '냉소적인'],
    tips({
      etymology: '라틴어 bene(좋게)와 velle(원하다)가 합쳐져 \'좋은 의지를 품은\'이라는 뜻이 되었습니다.',
      visual: '어려운 이웃에게 따뜻한 수프를 나누어 주는 인자한 미소의 할머니를 떠올려 보세요.',
      soundAlike: '발음이 \'베네-볼런트\'인데, \'베네(Bene)\'는 이탈리아어로 \'좋다\'는 뜻임을 기억하세요.',
      context: '주로 자선 단체나 타인을 돕는 성품을 묘사할 때 자주 쓰이는 격식 있는 단어입니다.',
      synonymAntonym: '친절한 kind와 유의어이며, 악의적인 malevolent와는 정반대 개념입니다.',
    }),
    {
      definition: 'Showing kindness and a desire to help others, especially those in need.',
      synonyms: ['kind', 'charitable', 'altruistic'],
      antonyms: ['malevolent', 'selfish', 'cruel'],
      exampleSentences: [
        { en: 'She was known for her benevolent nature toward the poor.', ko: '그녀는 가난한 사람들에 대한 자비로운 성품으로 알려져 있었다.' },
        { en: 'The benevolent donor funded the new hospital wing to help the community.', ko: '그 자비로운 기부자가 지역 사회를 돕기 위해 새 병원 동 건축을 후원했다.' },
      ],
    }
  ),
  word('Blatant', '노골적인', 7, 'adjective',
    ['은밀한', '미묘한', '은폐된', '숨겨진', '교묘한', '암묵적인', '잠재적인', '미세한', '비밀의', '모호한'],
    tips({
      etymology: '라틴어 blaterare(떠들다)에서 유래하여, 시끄럽고 뻔뻔하게 드러내는 것을 의미합니다.',
      visual: '모두가 보고 있는데도 대놓고 반칙을 하는 선수의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'블레이턴트\'인데, \'불(Bl)\'이 나듯 \'훤히\' 보인다고 연상해 보세요.',
      context: '거짓말이나 규칙 위반처럼 부정적인 일이 너무 뻔히 보일 때 주로 사용합니다.',
      synonymAntonym: '명백한 obvious와 비슷하지만 더 부정적이며, 미묘한 subtle과는 반대됩니다.',
    }),
    {
      definition: 'Done openly and unashamedly, without any attempt to hide or disguise.',
      synonyms: ['obvious', 'flagrant', 'glaring'],
      antonyms: ['subtle', 'hidden', 'inconspicuous'],
      exampleSentences: [
        { en: 'It was a blatant lie.', ko: '그건 노골적인 거짓말이었다.' },
        { en: 'The blatant disregard for the rules angered the committee.', ko: '규칙에 대한 노골적인 무시가 위원회를 분노하게 했다.' },
      ],
    }
  ),
  word('Bolster', '강화하다', 7, 'verb',
    ['약화하다', '훼손하다', '말살하다', '축소하다', '해체하다', '완화하다', '감소하다', '이완하다', '저해하다', '파괴하다'],
    tips({
      etymology: '원래 침대에서 몸을 받치는 \'긴 베개\'를 뜻하는 단어에서 유래하여 무언가를 밑에서 \'받쳐주다\'라는 의미의 동사로 발전했습니다.',
      visual: '기울어가는 담벼락 아래에 굵고 튼튼한 나무 기둥을 대어 쓰러지지 않게 보강하는 모습을 상상해 보세요.',
      soundAlike: '기계의 부품을 꽉 조이는 \'볼트(Bolt)\'를 떠올리세요. 볼트를 조여서 구조를 더 단단하게 \'강화\'하는 이미지입니다.',
      context: '주로 자신감이나 사기를 북돋우거나, 이론적인 근거를 뒷받침하여 논리를 탄탄하게 만들 때 자주 사용됩니다.',
      synonymAntonym: '강하게 만들다라는 뜻의 reinforce와 비슷하며, 기반을 갉아먹어 약화시키는 undermine과 반대됩니다.',
    }),
    {
      definition: 'To provide additional support to make something stronger or more effective.',
      synonyms: ['reinforce', 'fortify', 'buttress'],
      antonyms: ['undermine', 'weaken', 'impair'],
      exampleSentences: [
        { en: 'The latest statistics will bolster the government\'s case for new economic policies.', ko: '최신 통계 자료는 정부의 새로운 경제 정책에 대한 논거를 강화해 줄 것이다.' },
        { en: 'She took a deep breath to bolster her courage before stepping onto the stage.', ko: '그녀는 무대에 오르기 전 용기를 북돋우기 위해 심호흡을 했다.' },
      ],
    }
  ),
  word('Brevity', '간결함', 7, 'noun',
    ['장황함', '번거로움', '지루함', '다변', '과장', '부연', '장편', '장황설', '장황한', '복잡성'],
    tips({
      etymology: '라틴어 brevis(짧은)에서 유래했으며, brief(짧은)와 같은 뿌리를 가집니다.',
      visual: '수십 장의 보고서를 단 한 장으로 요약해 놓은 깔끔한 문서를 떠올려 보세요.',
      soundAlike: '브리프(Brief)의 명사형이라고 생각하면 \'짧음\'이라는 뜻을 쉽게 기억할 수 있습니다.',
      context: '글이나 말의 핵심만 간단명료하게 전달하는 미덕을 강조할 때 쓰입니다.',
      synonymAntonym: '간결함 conciseness와 유의어이며, 장황함 verbosity와 반대됩니다.',
    }),
    {
      definition: 'The quality of expressing much in few words or a short duration of time.',
      synonyms: ['conciseness', 'shortness', 'pithiness'],
      antonyms: ['verbosity', 'prolixity', 'lengthiness'],
      exampleSentences: [
        { en: 'The editor praised the writer for the brevity and clarity of the article.', ko: '편집자는 기사의 간결함과 명확성에 대해 작가를 칭찬했다.' },
        { en: 'The brevity of his reply suggested he was in a hurry.', ko: '그의 답변이 간결한 것을 보니 그가 서두르고 있음을 알 수 있었다.' },
      ],
    }
  ),
  word('Candid', '솔직한', 7, 'adjective',
    ['속이는', '기만적인', '애매한', '거짓의', '꾸며낸', '위장된', '은폐하는', '음흉한', '불투명한', '부정직한'],
    tips({
      etymology: '라틴어 candidus(하얀, 빛나는)에서 유래하여 숨김없이 맑고 깨끗한 상태를 뜻합니다.',
      visual: '연출되지 않은 자연스러운 모습을 찍는 \'캔디드 사진\'을 생각해보세요.',
      soundAlike: '캔디(Candy)처럼 달콤하진 않아도 속이 훤히 보이는 투명한 상태를 연상하세요.',
      context: '자신의 실수나 의견을 숨김없이 털어놓는 정직한 태도를 묘사합니다.',
      synonymAntonym: '솔직한 frank와 유의어이며, 기만적인 deceitful과 반대됩니다.',
    }),
    {
      definition: 'Truthful and straightforward, without hiding one\'s real thoughts or feelings.',
      synonyms: ['frank', 'honest', 'forthright'],
      antonyms: ['deceitful', 'evasive', 'insincere'],
      exampleSentences: [
        { en: 'She was candid about her mistakes.', ko: '그녀는 자신의 실수에 대해 솔직했다.' },
        { en: 'I appreciate your candid feedback on the proposal.', ko: '제안에 대한 당신의 솔직한 피드백에 감사합니다.' },
      ],
    }
  ),
  word('Catalyst', '촉매', 7, 'noun',
    ['방해물', '억제제', '장애물', '정체', '저해제', '방해', '억제', '저지', '지연', '완화'],
    tips({
      etymology: '그리스어 kata(아래로)와 lysis(분해)가 합쳐져 화학 반응을 돕는 물질을 뜻하게 되었습니다.',
      visual: '성냥불을 붙일 때 마찰을 도와 순식간에 불꽃이 일게 하는 성냥갑의 옆면을 떠올려 보세요.',
      soundAlike: '캐릭터(Character)가 사건을 일으키는 \'촉매\' 역할을 한다고 연상해 보세요.',
      context: '화학뿐만 아니라 사회적 변화나 사건을 촉발하는 인물이나 계기를 말할 때도 쓰입니다.',
      synonymAntonym: '자극 stimulus과 유의어이며, 억제제 inhibitor와 반대됩니다.',
    }),
    {
      definition: 'A person or thing that precipitates an event or accelerates a significant transition.',
      synonyms: ['trigger', 'stimulus', 'impetus'],
      antonyms: ['inhibitor', 'deterrent', 'hindrance'],
      exampleSentences: [
        { en: 'She was a catalyst for change.', ko: '그녀는 변화의 촉매였다.' },
        { en: 'The scandal proved to be a catalyst for reform.', ko: '그 스캔들은 개혁의 촉매로 밝혀졌다.' },
      ],
    }
  ),
  word('Caustic', '부식성의', 7, 'adjective',
    ['온화한', '순한', '부드러운', '친절한', '유순한', '무해한', '온순한', '다정한', '자애로운', '감미로운'],
    tips({
      etymology: '그리스어 kaustikos(태우는)에서 유래하여 살을 태울 정도로 독한 물질을 뜻합니다.',
      visual: '강한 산성 용액이 금속 표면을 치익 소리를 내며 녹이는 장면을 상상해 보세요.',
      soundAlike: '코(Nose)를 찌르는 듯한 강렬하고 독한 성질을 연상해 보세요.',
      context: '화학 물질의 부식성뿐만 아니라 남의 기분을 상하게 하는 아주 신랄하고 비꼬는 말투를 비유할 때 자주 쓰입니다.',
      synonymAntonym: '부식성의 corrosive와 유의어이며, 성격이 온화한 mild와 반대됩니다.',
    }),
    {
      definition: 'Able to burn or eat away by chemical action, or expressing severe criticism in a sharp and sarcastic manner.',
      synonyms: ['corrosive', 'mordant', 'acerbic'],
      antonyms: ['soothing', 'amiable', 'benign'],
      exampleSentences: [
        { en: 'The player was fined for making caustic comments about the referee\'s decision.', ko: '그 선수는 심판의 판정에 대해 신랄한 비판을 한 것에 대해 벌금을 물었다.' },
        { en: 'Always wear protective gloves when handling caustic cleaning agents.', ko: '부식성 세정제를 다룰 때는 항상 보호 장갑을 착용하십시오.' },
      ],
    }
  ),
  word('Cede', '양도하다', 7, 'verb',
    ['차지하다', '점유하다', '보유하다', '유지하다', '지키다', '취득하다', '탈환하다', '점령하다', '보존하다', '고수하다'],
    tips({
      etymology: '라틴어 cedere(가다, 물러나다)에서 유래하여 자신의 자리를 남에게 넘겨준다는 의미를 담고 있습니다.',
      visual: '전쟁에서 패한 국가가 국경선을 뒤로 물리며 영토를 상대국에게 넘겨주는 지도를 상상해 보세요.',
      soundAlike: '씨앗(Seed)을 내 땅이 아닌 남의 밭에 뿌려주어 소유권을 넘기는 장면을 연상해 보세요.',
      context: '주로 국가 간의 영토 분쟁이나 기업의 경영권, 공식적인 권리 등을 포기하고 넘길 때 사용하는 격식 있는 단어입니다.',
      synonymAntonym: '항복하며 내어주는 surrender와 비슷하며, 끝까지 움켜쥐고 있는 retain과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To formally surrender or grant possession of something, such as land or a right, to another person or state.',
      synonyms: ['surrender', 'yield', 'relinquish'],
      antonyms: ['retain', 'keep', 'withhold'],
      exampleSentences: [
        { en: 'The defeated nation was forced to cede its strategic ports after the war.', ko: '패전국은 전쟁 후 전략적 항구들을 양도할 수밖에 없었다.' },
        { en: 'She eventually had to cede her position as chairperson due to health issues.', ko: '그녀는 결국 건강 문제로 인해 의장직을 양도해야만 했다.' },
      ],
    }
  ),
  word('Censure', '비난하다', 7, 'verb',
    ['칭찬하다', '승인하다', '인정하다', '찬성하다', '지지하다', '장려하다', '격려하다', '찬양하다', '긍정하다', '옹호하다'],
    tips({
      etymology: '라틴어 censere(평가하다)에서 유래하여 \'나쁘게 평가하다\'라는 의미로 발전했습니다.',
      visual: '국회에서 의원들이 한 사람의 잘못을 지적하며 엄중히 꾸짖는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'센서(Censor)\'와 비슷하지만, 검열이 아니라 \'센(Strong) 비난\'이라고 기억하세요.',
      context: '공식적인 자리에서 누군가의 잘못을 강하게 비판할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '동의어는 condemn, criticize, rebuke이며 반의어는 praise, commend, approve입니다.',
    }),
    {
      definition: 'To express severe formal disapproval of someone or something, typically in a public or official capacity.',
      synonyms: ['condemn', 'criticize', 'rebuke'],
      antonyms: ['praise', 'commend', 'approve'],
      exampleSentences: [
        { en: 'The committee voted to censure the member for his misconduct.', ko: '위원회는 그의 비행에 대해 해당 위원을 공식적으로 비난하기로 의결했다.' },
        { en: 'The senator was censured for his unethical behavior during the campaign.', ko: '그 상원의원은 선거 운동 기간 중의 비윤리적인 행동으로 공식적인 비난을 받았다.' },
      ],
    }
  ),
  word('Circumscribe', '제한하다', 7, 'verb',
    ['확장하다', '늘리다', '해제하다', '자유롭게하다', '열다', '확대하다', '연장하다', '해방하다', '풀어주다', '넓히다'],
    tips({
      etymology: '라틴어 circum(주변)과 scribere(쓰다/긋다)가 결합되어 \'주변에 선을 그어 가두다\'라는 의미에서 유래했습니다.',
      visual: '컴퍼스로 동그라미를 그려서 그 선 밖으로 나가지 못하게 가두는 장면을 상상해 보세요.',
      soundAlike: '서커스(circum) 공연장 주변에 울타리를 쳐서(scribe) 관객의 출입을 막는 상황으로 기억하세요.',
      context: '주로 법적인 권한, 개인의 자유, 또는 활동 가능한 물리적 범위를 엄격하게 규정할 때 쓰입니다.',
      synonymAntonym: '한계를 정하는 limit과 유사하며, 경계를 허물고 넓히는 expand와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To draw a line around or to keep something within specific boundaries and prevent it from spreading.',
      synonyms: ['restrict', 'confine', 'restrain'],
      antonyms: ['expand', 'liberate', 'exceed'],
      exampleSentences: [
        { en: 'The power of the monarchy was circumscribed by the new constitution.', ko: '군주의 권력은 새 헌법에 의해 엄격하게 제한되었다.' },
        { en: 'Their movements were circumscribed by the heavy snowfall.', ko: '폭설로 인해 그들의 이동 범위가 제한되었다.' },
      ],
    }
  ),
  word('Coerce', '강요하다', 7, 'verb',
    ['설득하다', '자유롭게하다', '유도하다', '포기하다', '용인하다', '허용하다', '권유하다', '방임하다', '동의하다', '수용하다'],
    tips({
      etymology: '라틴어 \'coercere\'에서 유래하며, \'co(함께)\'와 \'arcere(가두다, 억제하다)\'가 결합되어 상대를 강하게 압박하고 가둔다는 의미를 형성합니다.',
      visual: '무서운 표정의 사람이 상대방의 팔을 뒤로 꺾으며 억지로 계약서에 도장을 찍게 만드는 장면을 떠올려 보세요.',
      soundAlike: '\'코(Co)를 어스(erce/us) 우리\' 쪽으로 바짝 들이밀며 위협적으로 무언가를 시키는 상황으로 연상하면 쉽습니다.',
      context: '주로 법적, 정치적 맥락에서 협박이나 폭력을 동원해 원치 않는 행동을 하게 만들 때 사용되는 무거운 단어입니다.',
      synonymAntonym: '강한 압박을 주는 force, compel과 비슷하며, 부드럽게 달래는 coax나 설득하는 persuade와는 반대됩니다.',
    }),
    {
      definition: 'To achieve something by using physical power, intimidation, or other forms of pressure against someone\'s will.',
      synonyms: ['force', 'compel', 'pressure'],
      antonyms: ['persuade', 'coax', 'allow'],
      exampleSentences: [
        { en: 'The dictator used military power to coerce the citizens into obedience.', ko: '독재자는 시민들이 복종하도록 강요하기 위해 군사력을 사용했다.' },
        { en: 'The witness claimed that the police tried to coerce a false confession from him.', ko: '증인은 경찰이 자신에게 거짓 자백을 하도록 강요하려 했다고 주장했다.' },
      ],
    }
  ),
  word('Cogent', '설득력 있는', 7, 'adjective',
    ['약한', '애매한', '불충분한', '모호한', '비논리적인', '무력한', '희미한', '불명확한', '부실한', '엉성한'],
    tips({
      etymology: '라틴어 cogens(함께 몰다)에서 유래하여, 여러 증거를 하나로 모아 마음을 움직이게 하는 힘을 뜻합니다.',
      visual: '빈틈없이 꽉 짜인 그물처럼 논리가 촘촘해서 빠져나갈 구멍이 없는 상태를 상상해 보세요.',
      soundAlike: '코(Co)가 젠트(Gentle)하게 고개를 끄덕이게 만들 만큼 논리적이라는 느낌으로 기억하세요.',
      context: '법정에서의 변론이나 학술적인 토론에서 반박할 수 없을 만큼 탄탄한 주장을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '설득력이 강한 persuasive와 유사하며, 논리가 엉망인 muddled와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Clear, logical, and powerful in a way that makes people believe or agree with an argument.',
      synonyms: ['persuasive', 'convincing', 'compelling'],
      antonyms: ['weak', 'invalid', 'muddled'],
      exampleSentences: [
        { en: 'The defense attorney presented a cogent argument that convinced the entire jury.', ko: '피고측 변호인은 배심원 전체를 설득할 만큼 강력하고 논리적인 주장을 펼쳤다.' },
        { en: 'We need to provide cogent evidence if we want the committee to approve our proposal.', ko: '위원회가 우리 제안서를 승인하게 하려면 설득력 있는 증거를 제시해야 한다.' },
      ],
    }
  ),
  word('Coherent', '일관된', 7, 'adjective',
    ['산만한', '불일치한', '혼란스러운', '모순된', '분산된', '뒤섞인', '해이한', '어긋난', '불분명한', '단절된'],
    tips({
      etymology: '라틴어 co-(함께)와 haerere(붙다)가 결합된 단어로, 여러 부분이 서로 긴밀하게 달라붙어 있다는 의미에서 유래했습니다.',
      visual: '퍼즐 조각들이 빈틈없이 맞물려 하나의 완성된 그림을 보여주는 장면을 상상해 보세요.',
      soundAlike: '코(Co)가 여기(Here)에 딱! 앞뒤가 코가 맞듯 논리가 딱딱 들어맞는 상황입니다.',
      context: '주로 논문, 연설, 정책 등 생각이나 주장이 논리적으로 빈틈없고 명확할 때 사용합니다.',
      synonymAntonym: '논리적인 logical, 일관된 consistent와 비슷하며, 앞뒤가 안 맞는 incoherent와는 반대됩니다.',
    }),
    {
      definition: 'Logical and organized in a way that makes sense, with all parts connecting clearly.',
      synonyms: ['logical', 'consistent', 'articulate'],
      antonyms: ['incoherent', 'confused', 'irrational'],
      exampleSentences: [
        { en: 'The witness failed to provide a coherent account of the event.', ko: '그 증인은 사건에 대해 일관된 설명을 제공하지 못했다.' },
        { en: 'He was so tired that he could barely form a coherent sentence.', ko: '그는 너무 피곤해서 일관된 문장을 거의 만들 수 없었다.' },
      ],
    }
  ),
  word('Commensurate', '비례하는', 7, 'adjective',
    ['불균형한', '과다한', '부족한', '어긋난', '부적절한', '과대평가된', '과소평가된', '차이나는', '다른', '동떨어진'],
    tips({
      etymology: '라틴어 com(함께)과 mensura(측정)가 합쳐져 \'같은 치수로 측정되는\'이라는 어원을 가집니다.',
      visual: '양팔 저울의 한쪽에는 당신의 노력이, 다른 한쪽에는 그에 딱 맞는 보상이 놓여 완벽한 수평을 이루는 장면을 상상해 보세요.',
      soundAlike: '커멘(Common)하게 서릿(Set) 맞춰진, 즉 누구나 보기에 수준이 딱 알맞게 맞춰진 상태로 기억하면 쉽습니다.',
      context: '주로 직장 생활에서 급여가 경력에 상응하거나, 법적 처벌이 범죄의 무게에 비례할 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '동의어인 proportionate는 비율이 맞음을, 반의어인 disproportionate는 어느 한쪽이 지나치게 크거나 작음을 뜻합니다.',
    }),
    {
      definition: 'Equal in measure or extent; matching in degree or proportion.',
      synonyms: ['proportionate', 'equivalent', 'corresponding'],
      antonyms: ['disproportionate', 'unsuitable', 'inadequate'],
      exampleSentences: [
        { en: 'The salary will be commensurate with your experience and qualifications.', ko: '급여는 귀하의 경력과 자격 요건에 비례하여 지급될 것입니다.' },
        { en: 'The punishment should be commensurate with the severity of the offense.', ko: '처벌은 범죄의 심각성에 상응해야 합니다.' },
      ],
    }
  ),
  word('Compendium', '요약집', 7, 'noun',
    ['전체', '원본', '확장판', '부연설명', '연장선', '전집', '전권', '장편소설', '원문', '백과사전'],
    tips({
      etymology: '라틴어 com(함께)과 pendere(무게를 달다)가 결합되어, 여러 정보를 한데 모아 무게를 달아 정리했다는 의미에서 유래했습니다.',
      visual: '도서관의 수많은 책들을 압축기 속에 넣고 돌려 핵심만 남은 얇은 한 권의 책이 나오는 장면을 상상해 보세요.',
      soundAlike: '컴(Com)퓨터에 있는 중요한 파일들을 펜(Pen)으로 콕 집어 디엄(다) 모아놓은 요약본이라고 기억하세요.',
      context: '학술적인 지식, 법률 조항, 혹은 특정 분야의 방대한 정보를 한눈에 보기 쉽게 정리한 책자나 목록을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '핵심을 추린 summary, digest와 유사하며, 내용을 더 늘리거나 확장하는 expansion, enlargement와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A brief but complete collection of information or facts about a particular subject, often in the form of a book.',
      synonyms: ['summary', 'digest', 'collection'],
      antonyms: ['expansion', 'enlargement', 'extension'],
      exampleSentences: [
        { en: 'The encyclopedia provides a comprehensive compendium of world history.', ko: '그 백과사전은 세계사에 대한 포괄적인 요약집을 제공한다.' },
        { en: 'He published a compendium of folk tales collected from across the country.', ko: '그는 전국에서 수집한 민담 요약집을 출간했다.' },
      ],
    }
  ),
  word('Complacent', '안주하는', 7, 'adjective',
    ['불안한', '비판적인', '각성한', '불만족스러운', '열망하는', '긴장한', '경계하는', '겸손한', '의욕적인', '걱정하는'],
    tips({
      etymology: '라틴어 \'com(완전히)\'과 \'placere(기쁘게 하다)\'가 결합된 단어로, 자기 자신에게 완전히 만족해버린 상태를 의미합니다.',
      visual: '토끼와 거북이 경주에서 거북이가 뒤처진 것을 보고 결승선 앞에서 낮잠을 자는 토끼의 태평한 모습을 상상해 보세요.',
      soundAlike: '\'컴(Com)퓨터 플레이(Play)만 하며 센(Cent)척\'하고 방안에만 안주하는 게으른 모습을 연상해 보세요.',
      context: '주로 비판적인 뉘앙스로 쓰이며, 현재 상황에 너무 만족한 나머지 다가올 위험을 무시하거나 더 노력하지 않을 때 사용합니다.',
      synonymAntonym: 'smug(우쭐해하는)와 의미가 통하며, 반대로 더 나은 상태를 바라는 discontent(불만족스러운)와는 대조됩니다.',
    }),
    {
      definition: 'Feeling so satisfied with your own abilities or situation that you do not feel that any change or improvement is necessary.',
      synonyms: ['smug', 'self-satisfied', 'unconcerned'],
      antonyms: ['discontent', 'humble', 'anxious'],
      exampleSentences: [
        { en: 'We cannot afford to become complacent with our current success while competitors are working hard.', ko: '경쟁자들이 열심히 노력하는 동안 현재의 성공에 너무 안주해서는 안 된다.' },
        { en: 'The team lost the championship because they grew complacent after their early victories.', ko: '그 팀은 초반 승리 이후 너무 안주하는 바람에 챔피언십에서 패배했다.' },
      ],
    }
  ),
  word('Complement', '보완하다', 7, 'verb',
    ['훼손하다', '상쇄하다', '해치다', '불일치하다', '충돌하다', '해체하다', '파괴하다', '방해하다', '모순되다', '악화시키다'],
    tips({
      etymology: 'com(완전히) + ple(채우다)가 합쳐져 빈 곳을 가득 채워 완성한다는 의미에서 유래했습니다.',
      visual: '서로의 빈틈을 완벽하게 메워 하나의 그림을 완성하는 두 개의 퍼즐 조각을 상상해 보세요.',
      soundAlike: '칭찬을 뜻하는 Compliment와 혼동하기 쉽습니다. \'e\'가 들어간 Complement는 \'채우다(fill)\'의 의미가 있음을 기억하세요.',
      context: '와인과 치즈의 궁합이나, 넥타이가 정장과 잘 어울릴 때처럼 서로를 돋보이게 할 때 사용합니다.',
      synonymAntonym: '부족함을 채우는 supplement와 유사하며, 가치를 떨어뜨리는 detract와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To add to something else in a way that enhances or improves its qualities or makes it perfect.',
      synonyms: ['supplement', 'enhance', 'complete'],
      antonyms: ['detract', 'clash', 'undermine'],
      exampleSentences: [
        { en: 'The sauce complements the fish perfectly.', ko: '그 소스는 생선 요리의 맛을 완벽하게 돋보이게 한다.' },
        { en: 'His skills complement hers in the project.', ko: '그의 기술은 프로젝트에서 그녀의 능력을 보완해 준다.' },
      ],
    }
  ),
  word('Comply', '준수하다', 7, 'verb',
    ['위반하다', '거부하다', '저항하다', '무시하다', '반역하다', '불복하다', '방해하다', '위배되다', '거역하다', '반항하다'],
    tips({
      etymology: '라틴어 \'complere\'에서 유래하여 \'가득 채우다\'라는 의미를 담고 있습니다. 즉, 상대방의 요구사항을 가득 채워 만족시킨다는 뜻에서 \'준수하다\'가 되었습니다.',
      visual: '공사 현장에서 안전 수칙이 적힌 체크리스트를 하나씩 꼼꼼하게 확인하며 동그라미를 치는 관리자의 모습을 상상해 보세요.',
      soundAlike: '비즈니스 뉴스에서 자주 들리는 \'컴플라이언스(Compliance)\'는 기업이 법규를 잘 지키는지 감시하는 부서를 뜻하며, 이 단어의 명사형입니다.',
      context: '자동사로 쓰일 때는 전치사 \'with\'와 짝을 이루어 \'comply with the rules\'처럼 한 덩어리로 외우는 것이 실전 토익이나 독해에 유리합니다.',
      synonymAntonym: '법이나 규칙을 따를 때는 obey를, 기준에 맞출 때는 conform을 씁니다. 반대로 대놓고 맞서며 거부할 때는 defy를 사용합니다.',
    }),
    {
      definition: 'To act in accordance with a wish, command, or rule.',
      synonyms: ['obey', 'conform', 'adhere'],
      antonyms: ['defy', 'violate', 'rebel'],
      exampleSentences: [
        { en: 'All visitors must comply with the security measures of the building.', ko: '모든 방문객은 건물의 보안 조치를 준수해야 합니다.' },
        { en: 'The company failed to comply with the new environmental standards.', ko: '그 회사는 새로운 환경 기준을 준수하지 못했습니다.' },
      ],
    }
  ),
  word('Concede', '인정하다', 7, 'verb',
    ['부정하다', '거부하다', '고집하다', '반박하다', '은폐하다', '왜곡하다', '저항하다', '무시하다', '회피하다', '반대하다'],
    tips({
      etymology: '라틴어 \'con(완전히)\'과 \'cedere(가다, 양보하다)\'가 결합된 단어로, 자신의 주장을 굽히고 상대의 의견으로 자리를 옮겨준다는 의미에서 유래했습니다.',
      visual: '토론 대회에서 상대방의 날카로운 질문에 고개를 끄덕이며 자신의 논리적 허점을 받아들이는 토론자의 모습을 상상해 보세요.',
      soundAlike: '스포츠 중계에서 \'concede a goal\'이라는 표현이 자주 나오는데, 이는 상대의 득점을 어쩔 수 없이 허용했다는 뜻입니다.',
      context: '단순히 사실을 알리는 것을 넘어, 처음에는 반대하거나 버티다가 결국 마지못해 사실이나 패배를 받아들일 때 주로 사용합니다.',
      synonymAntonym: 'admit은 일반적인 인정을 뜻하지만, 이 단어는 양보의 뉘앙스가 강하며 반대말로는 끝까지 사실을 거부하는 deny가 있습니다.',
    }),
    {
      definition: 'To reluctantly accept that something is true or to allow a point to an opponent in a contest.',
      synonyms: ['admit', 'acknowledge', 'yield'],
      antonyms: ['deny', 'dispute', 'reject'],
      exampleSentences: [
        { en: 'The candidate refused to concede the results until every vote was counted.', ko: '그 후보는 모든 투표가 집계될 때까지 결과에 승복하기를 거부했습니다.' },
        { en: 'After hours of debating, she finally had to concede that her opponent\'s argument was valid.', ko: '몇 시간 동안의 토론 끝에, 그녀는 마침내 상대방의 주장이 타당하다는 것을 인정해야만 했습니다.' },
      ],
    }
  ),
  word('Conciliatory', '화해적인', 7, 'adjective',
    ['적대적인', '공격적인', '도발적인', '배타적인', '냉혹한', '과격한', '대립하는', '위협적인', '불친절한', '냉담한'],
    tips({
      etymology: 'con(함께) + cil(부르다/모으다)에서 유래하여, 흩어진 사람들을 다시 화합하도록 불러 모은다는 의미를 담고 있습니다.',
      visual: '심하게 다툰 두 사람이 서로의 손을 맞잡으며 미안하다는 표정으로 고개를 끄덕이는 평화로운 장면을 상상해 보세요.',
      soundAlike: '의회를 뜻하는 Council과 어원이 같습니다. 의회에서 갈등을 조정하고 합의점을 찾아가는 과정을 떠올리면 쉽습니다.',
      context: '비즈니스 협상이나 개인적인 다툼에서 상대방의 분노를 가라앉히고 관계를 회복하려는 태도를 표현할 때 자주 쓰입니다.',
      synonymAntonym: '상대를 달래는 placating과 유사하며, 정면으로 맞서고 싸우려 하는 confrontational과는 정반대되는 개념입니다.',
    }),
    {
      definition: 'Intended to gain goodwill or favor or to reduce hostility by showing a willingness to compromise.',
      synonyms: ['placating', 'peacemaking', 'appeasing'],
      antonyms: ['confrontational', 'antagonistic', 'hostile'],
      exampleSentences: [
        { en: 'She adopted a conciliatory tone during the meeting to avoid further conflict.', ko: '그녀는 더 이상의 갈등을 피하기 위해 회의 중에 화해적인 어조를 취했습니다.' },
        { en: 'The government made a conciliatory gesture by releasing the political prisoners.', ko: '정부는 정치범들을 석방함으로써 화해적인 제스처를 보였습니다.' },
      ],
    }
  ),
  word('Concurrent', '동시의', 7, 'adjective',
    ['순차적인', '이전의', '후속의', '번갈아하는', '교차하는', '순서대로의', '연속적인', '차례차례의', '별개의', '비동기식의'],
    tips({
      etymology: '함께를 뜻하는 \'con\'과 달리다를 뜻하는 \'curr\'가 결합되어, 여러 사건이 나란히 달리고 있는 상태를 의미합니다.',
      visual: '컴퓨터 화면에 여러 개의 창이 동시에 떠서 작동하는 멀티태스킹 장면을 떠올려 보세요.',
      soundAlike: '현재의 흐름을 뜻하는 \'current\'가 모두 함께(\'con\') 일어나는 상황으로 기억하면 쉽습니다.',
      context: '주로 두 가지 이상의 사건이 겹치거나, 법원에서 여러 형기를 동시에 복역할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'simultaneous와 의미가 거의 같으며, 하나씩 차례대로 일어나는 sequential과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Existing, happening, or done at the same time as something else.',
      synonyms: ['simultaneous', 'parallel', 'coincident'],
      antonyms: ['sequential', 'successive', 'consecutive'],
      exampleSentences: [
        { en: 'The prisoner was given three concurrent life sentences.', ko: '그 죄수에게는 세 개의 동시 집행 종신형이 선고되었습니다.' },
        { en: 'The exhibition will be held in concurrent locations across the city.', ko: '그 전시회는 도시 전역의 여러 장소에서 동시에 개최될 예정입니다.' },
      ],
    }
  ),
  word('Condone', '묵인하다', 7, 'verb',
    ['규탄하다', '징벌하다', '비난하다', '거부하다', '저지하다', '처벌하다', '금지하다', '반대하다', '배척하다', '질책하다'],
    tips({
      etymology: 'con(완전히) + don(주다)이 합쳐져 용서를 베풀어 그냥 넘어가 준다는 뜻입니다.',
      visual: '잘못을 저지른 아이를 보고도 못 본 척 눈을 감아주는 어른의 모습입니다.',
      soundAlike: '기부하다(Donate)와 어원이 같아, 관용을 베풀어 준다고 생각하세요.',
      context: '주로 부정적인 행동이나 범죄를 처벌하지 않고 용인할 때 부정문으로 많이 쓰입니다.',
      synonymAntonym: '눈감아주는 overlook과 비슷하며, 강력히 비난하는 condemn과 반대됩니다.',
    }),
    {
      definition: 'To accept and allow behavior that is considered morally wrong or offensive to continue.',
      synonyms: ['overlook', 'excuse', 'pardon'],
      antonyms: ['condemn', 'punish', 'forbid'],
      exampleSentences: [
        { en: 'We cannot condone such behavior.', ko: '우리는 그런 부적절한 행동을 묵인할 수 없습니다.' },
        { en: 'The school does not condone bullying.', ko: '학교는 괴롭힘 행위를 용납하지 않습니다.' },
      ],
    }
  ),
  word('Confluence', '합류점', 7, 'noun',
    ['분기점', '갈림길', '분산', '이탈', '분리', '분기', '갈래', '해체', '분할', '단절'],
    tips({
      etymology: '함께를 뜻하는 \'con\'과 흐르다를 뜻하는 \'flu\'가 결합되어 여러 물줄기가 한데 모여 흐르는 상태를 의미합니다.',
      visual: '두 개의 작은 물줄기가 Y자 모양으로 만나서 하나의 거대한 강줄기를 형성하는 장면을 상상해 보세요.',
      soundAlike: '독감(Flu) 바이러스가 퍼지듯 흐름(Flu)이 한곳으로 쏟아져 들어오는(Con) 느낌으로 기억하세요.',
      context: '지리적인 강물의 합류뿐만 아니라 서로 다른 문화, 기술, 사상이 한데 어우러지는 추상적인 상황에도 자주 쓰입니다.',
      synonymAntonym: '여러 갈래가 하나로 모이는 convergence와 유사하며, 반대로 갈라져 나가는 divergence와는 대조됩니다.',
    }),
    {
      definition: 'A place where two or more streams or rivers flow together and combine into one.',
      synonyms: ['junction', 'merging', 'convergence'],
      antonyms: ['divergence', 'separation', 'division'],
      exampleSentences: [
        { en: 'The confluence of ideas led to a major breakthrough in the research project.', ko: '다양한 아이디어의 결합은 연구 프로젝트에서 중대한 돌파구를 마련했습니다.' },
        { en: 'The historic town was strategically built at the confluence of two major rivers.', ko: '그 역사적인 마을은 두 주요 강이 만나는 합류점에 전략적으로 건설되었습니다.' },
      ],
    }
  ),
  word('Conjecture', '추측', 7, 'noun',
    ['사실', '증거', '확인', '실증', '검증', '입증', '객관', '실체', '확정', '증명'],
    tips({
      etymology: '함께를 뜻하는 con과 던지다를 뜻하는 ject가 결합되어, 여러 단서들을 한데 던져놓고 짐작해본다는 의미에서 유래했습니다.',
      visual: '퍼즐 조각이 절반도 없는 상태에서 전체 그림이 무엇일지 머릿속으로 그려보는 모습을 상상해 보세요.',
      soundAlike: '로켓을 발사하는 Project나 밖으로 내던지는 Eject처럼 \'ject(던지다)\'가 포함된 단어들과 가족 관계입니다.',
      context: '수사관이 단서가 부족할 때 내놓는 가설이나, 뉴스에서 근거 없이 떠도는 소문을 언급할 때 자주 사용됩니다.',
      synonymAntonym: '비슷한 단어로는 speculation이 있으며, 반대되는 개념으로는 명확한 증거인 proof가 있습니다.',
    }),
    {
      definition: 'An opinion or conclusion formed on the basis of incomplete information.',
      synonyms: ['guess', 'speculation', 'surmise'],
      antonyms: ['fact', 'certainty', 'proof'],
      exampleSentences: [
        { en: 'That is mere conjecture, not fact.', ko: '그것은 단지 추측일 뿐이지, 사실이 아닙니다.' },
        { en: 'His theory was based on conjecture rather than data.', ko: '그의 이론은 데이터보다는 짐작에 근거하고 있었습니다.' },
      ],
    }
  ),
  word('Connive', '공모하다', 7, 'verb',
    ['저지하다', '노출하다', '반대하다', '비난하다', '규탄하다', '방해하다', '고발하다', '저항하다', '공개하다', '차단하다'],
    tips({
      etymology: '라틴어 connivere에서 유래하며 \'눈을 감아주다\'라는 뜻에서 시작되어, 나쁜 일을 묵인하거나 함께 꾸미는 의미로 발전했습니다.',
      visual: '어두운 조명 아래 두 사람이 입술에 손가락을 대고 조용히 서류에 서명하는 은밀한 장면을 상상해 보세요.',
      soundAlike: '코나이브(Connive) -> \'코\'를 맞대고 \'나\'쁜 일을 \'이브\'(저녁)에 몰래 계획하는 소리.',
      context: '주로 정치적 음모, 비즈니스 담합, 혹은 누군가를 속이기 위한 부정적인 협력 관계에서 자주 쓰입니다.',
      synonymAntonym: 'collude, conspire와 함께 \'나쁜 짓을 꾸미다\' 삼총사로 기억하고, 반대말은 투명하게 밝히는 expose입니다.',
    }),
    {
      definition: 'To secretly cooperate with others to commit an unethical, illegal, or deceitful act.',
      synonyms: ['collude', 'conspire', 'plot'],
      antonyms: ['oppose', 'expose', 'denounce'],
      exampleSentences: [
        { en: 'The corrupt officials were found to connive with local gangs.', ko: '부패한 관리들이 지역 조직폭력배와 공모한 사실이 밝혀졌다.' },
        { en: 'They connived to manipulate the stock prices for their own benefit.', ko: '그들은 자신들의 이익을 위해 주가를 조작하려고 공모했다.' },
      ],
    }
  ),
  word('Consecutive', '연속적인', 7, 'adjective',
    ['불규칙한', '간헐적인', '산발적인', '불연속의', '떨어진', '무작위의', '분산된', '비연속적인', '끊긴', '일시적인'],
    tips({
      etymology: 'con(함께) + secu(따르다)가 합쳐져 앞뒤가 딱 붙어 따라오는 상태를 뜻해요.',
      visual: '달력에 1일부터 7일까지 빈틈없이 동그라미가 쳐진 모습.',
      soundAlike: '컨섹큐티브 -> \'큰\' \'세\'트가 \'큐\'를 받고 \'티브\'이에서 연달아 나오는 장면.',
      context: '숫자, 날짜, 승리 횟수 등이 중간에 끊김 없이 이어질 때 자주 쓰여요.',
      synonymAntonym: 'successive와 유의어이며, 띄엄띄엄 일어나는 intermittent와 반대입니다.',
    }),
    {
      definition: 'Following one after another in a continuous and uninterrupted order.',
      synonyms: ['successive', 'sequential', 'continuous'],
      antonyms: ['intermittent', 'discontinuous', 'random'],
      exampleSentences: [
        { en: 'He won five consecutive games.', ko: '그는 연속으로 다섯 경기를 승리했다.' },
        { en: 'It rained for three consecutive days.', ko: '연속으로 사흘 동안 비가 왔다.' },
      ],
    }
  ),
  word('Conspicuous', '눈에 띄는', 7, 'adjective',
    ['눈에 띄지 않는', '숨겨진', '미묘한', '은밀한', '보이지 않는', '평범한', '희미한', '모호한', '가려진', '수수한'],
    tips({
      etymology: '라틴어 \'con(완전히)\'과 \'specere(보다)\'가 결합된 단어로, 누구나 완전히 다 볼 수 있을 만큼 명확하다는 의미에서 유래했습니다.',
      visual: '어두운 밤거리에서 혼자 밝게 빛나는 네온사인이나, 무채색 옷들 사이의 선명한 빨간색 드레스를 상상해 보세요.',
      soundAlike: '\'큰(Con) 수(spicu)박\'이 길 한복판에 놓여 있어 누구나 쉽게 발견하고 쳐다보는 상황을 연상해 보세요.',
      context: '주로 외모, 색상, 행동 등이 주변과 대조되어 남들의 시선을 강하게 끌거나 무시하기 어려울 때 자주 쓰입니다.',
      synonymAntonym: '유사어로는 눈에 확 들어오는 obvious가 있고, 반대말은 접두사 in-을 붙인 inconspicuous(눈에 띄지 않는)입니다.',
    }),
    {
      definition: 'Easily seen or noticed because of being unusual, bright, or very clear.',
      synonyms: ['noticeable', 'prominent', 'striking'],
      antonyms: ['inconspicuous', 'subtle', 'unobtrusive'],
      exampleSentences: [
        { en: 'The bird\'s bright red feathers were conspicuous among the green trees.', ko: '그 새의 밝은 빨간 깃털은 초록색 나무들 사이에서 매우 눈에 띄었다.' },
        { en: 'He felt uncomfortable because his height made him conspicuous in the small crowd.', ko: '그는 자신의 큰 키 때문에 작은 군중 속에서 너무 눈에 띄어 불편함을 느꼈다.' },
      ],
    }
  ),
  word('Convoluted', '복잡한', 7, 'adjective',
    ['간단한', '명쾌한', '단순한', '쉬운', '명료한', '직관적인', '투명한', '간결한', '평이한', '직선적인'],
    tips({
      etymology: '라틴어 \'con(함께)\'과 \'volvere(굴리다, 말다)\'가 합쳐진 단어로, 여러 겹으로 돌돌 말려 있거나 꼬여 있는 상태를 뜻합니다.',
      visual: '서랍 속에서 수십 가닥의 전선이 서로 엉켜 있어 어디가 시작이고 끝인지 알 수 없는 모습.',
      soundAlike: '컨볼루티드 -> \'큰 볼(Ball)\'들이 \'루트(Route, 길)\'를 가로막고 복잡하게 꼬여 있는 상황.',
      context: '주로 논리, 문장 구조, 법적 절차, 혹은 영화의 줄거리가 지나치게 꼬여 있어 파악하기 힘들 때 사용합니다.',
      synonymAntonym: 'intricate, complex와 비슷하며, 막힘없이 시원하게 이해되는 straightforward와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Extremely complex and difficult to follow or understand, often due to having many overlapping layers or parts.',
      synonyms: ['intricate', 'complex', 'labyrinthine'],
      antonyms: ['straightforward', 'simple', 'uncomplicated'],
      exampleSentences: [
        { en: 'The plot of the movie was so convoluted that I had to watch it twice to understand the ending.', ko: '그 영화의 줄거리는 너무 복잡해서 결말을 이해하려면 두 번이나 봐야 했다.' },
        { en: 'He explained the situation in such a convoluted way that everyone felt even more confused.', ko: '그는 상황을 너무 복잡하게 설명해서 모두가 훨씬 더 혼란스러워졌다.' },
      ],
    }
  ),
  word('Constrain', '제한하다', 7, 'verb',
    ['해방하다', '자유롭게 하다', '허용하다', '확장하다', '늘리다', '완화하다', '촉진하다', '방임하다', '격려하다', '풀어주다'],
    tips({
      etymology: 'con(함께) + strain(팽팽하게 당기다)이 합쳐져 사방에서 꽉 조여서 못 움직이게 한다는 어원을 가집니다.',
      visual: '좁은 울타리 안에 갇혀서 밖으로 나가지 못하고 쩔쩔매고 있는 양의 모습을 상상해 보세요.',
      soundAlike: '컨스트레인 -> \'큰\' \'스트레인(긴장)\'을 주어 상대방의 행동을 억지로 억제하는 상황을 떠올려 보세요.',
      context: '주로 법적 규제, 예산 부족, 시간적 압박 등 외부적인 요인으로 인해 행동의 자유가 억눌릴 때 자주 사용됩니다.',
      synonymAntonym: '유사어로는 restrict, limit가 있으며, 반대로 자유를 주거나 풀어주는 free, release가 있습니다.',
    }),
    {
      definition: 'To control or limit someone\'s freedom of action or to restrict something within particular boundaries.',
      synonyms: ['restrict', 'limit', 'curb'],
      antonyms: ['free', 'release', 'permit'],
      exampleSentences: [
        { en: 'The high cost of materials will inevitably constrain our production plans.', ko: '높은 원자재 비용은 필연적으로 우리의 생산 계획을 제한할 것이다.' },
        { en: 'Strict regulations often constrain small businesses from expanding too quickly.', ko: '엄격한 규제는 종종 소규모 기업들이 너무 빠르게 확장하는 것을 제한한다.' },
      ],
    }
  ),
  word('Contend', '다투다', 7, 'verb',
    ['양보하다', '포기하다', '동의하다', '굴복하다', '항복하다', '순응하다', '인정하다', '화해하다', '회피하다', '물러나다'],
    tips({
      etymology: '라틴어 \'contendere\'에서 유래하며, \'con(함께)\'과 \'tendere(뻗다)\'가 결합되어 서로 무언가를 잡으려고 손을 뻗으며 경쟁한다는 의미를 담고 있습니다.',
      visual: '올림픽 육상 경기에서 결승선을 통과하기 직전, 가슴을 앞으로 쑥 내밀며 서로 먼저 닿으려고 애쓰는 선수들의 모습.',
      soundAlike: '\'큰 텐트(contend)\'를 서로 자기 것이라고 우기며 싸우는 캠핑장 사람들의 목소리를 상상해 보세요.',
      context: '스포츠 경기에서 승리를 위해 경쟁할 때뿐만 아니라, 법정이나 토론에서 자신의 논리가 맞다고 강력히 주장할 때도 자주 쓰입니다.',
      synonymAntonym: '경쟁하는 compete와 유의어이며, 자신의 주장을 굽히고 따르는 yield나 surrender와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To engage in a struggle or competition, or to maintain a strong opinion in a debate.',
      synonyms: ['compete', 'struggle', 'assert'],
      antonyms: ['yield', 'surrender', 'concede'],
      exampleSentences: [
        { en: 'Several teams are ready to contend for the top position in the league.', ko: '여러 팀이 리그 최정상 자리를 놓고 다툴 준비가 되어 있다.' },
        { en: 'The lawyer continued to contend that his client was innocent throughout the trial.', ko: '변호사는 재판 내내 그의 의뢰인이 무죄라고 주장했다.' },
      ],
    }
  ),
  word('Contention', '논쟁', 7, 'noun',
    ['합의', '화합', '일치', '동의', '조화', '협력', '화해', '타협', '평화', '공감'],
    tips({
      etymology: '동사 contend(다투다, 주장하다)에서 유래한 명사형으로, 서로의 주장이 팽팽하게 맞서는 상황을 의미합니다.',
      visual: '토론장에서 두 사람이 서로 자기 주장이 맞다며 삿대질을 하거나 팽팽한 줄다리기를 하는 모습.',
      soundAlike: '컨텐션(Contention) -> \'큰 텐션(tension)\'. 갈등 때문에 분위기에 큰 긴장감이 흐르는 상황.',
      context: '격식 있는 토론이나 법적 분쟁에서 자주 쓰이며, 특히 \'bone of contention\'은 \'분쟁의 씨앗\'이라는 관용구로 유명합니다.',
      synonymAntonym: 'dispute, argument와 유사하며, 평화로운 합의를 뜻하는 agreement나 harmony와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A state of heated disagreement, discord, or a point maintained in an argument.',
      synonyms: ['dispute', 'argument', 'conflict'],
      antonyms: ['agreement', 'harmony', 'concord'],
      exampleSentences: [
        { en: 'The proposed tax increase has become a major source of contention among the citizens.', ko: '제안된 세금 인상은 시민들 사이에서 주요한 논쟁거리가 되었다.' },
        { en: 'It is her contention that the new law will infringe upon personal liberties.', ko: '새로운 법이 개인의 자유를 침해할 것이라는 것이 그녀의 주장이다.' },
      ],
    }
  ),
  word('Contingent', '조건부의', 7, 'adjective',
    ['무조건적인', '확정된', '고정된', '절대적인', '필연적인', '독립적인', '확실한', '불변의', '당연한', '일관된'],
    tips({
      etymology: 'con(함께) + ting(닿다)이 합쳐져 다른 사건에 \'닿아\' 있어야 결정된다는 뜻에서 유래했습니다.',
      visual: 'A라는 문이 열려야만 B라는 길로 갈 수 있는 미로의 갈림길을 상상해 보세요.',
      soundAlike: '컨틴전트 -> \'큰\' \'팀\'이 \'전\'부 \'트\'레이닝을 받아야 경기에 나갈 수 있는 조건부 상황.',
      context: '비즈니스 계약이나 계획에서 어떤 일이 일어날지 말지가 다른 조건에 달려 있을 때 \'contingent on\' 형태로 자주 씁니다.',
      synonymAntonym: 'dependent, conditional과 유의어이며, 조건 없는 상태를 뜻하는 unconditional과 반대입니다.',
    }),
    {
      definition: 'Subject to chance or dependent on a separate event or circumstance occurring.',
      synonyms: ['dependent', 'conditional', 'provisional'],
      antonyms: ['unconditional', 'absolute', 'certain'],
      exampleSentences: [
        { en: 'The success of the outdoor concert is contingent on the weather staying clear.', ko: '야외 콘서트의 성공 여부는 날씨가 맑게 유지되는 조건에 달려 있다.' },
        { en: 'The purchase of the new house is contingent upon the sale of their current home.', ko: '새 집을 구매하는 것은 현재 살고 있는 집이 팔려야 한다는 조건부이다.' },
      ],
    }
  ),
  word('Contrive', '꾀하다', 7, 'verb',
    ['우연히 하다', '방치하다', '무시하다', '실패하다', '포기하다', '우연', '방임', '소홀', '자연', '무의도'],
    tips({
      etymology: '라틴어 \'contropare(비교하다, 고안하다)\'에서 유래하여, 머리를 써서 무언가를 만들어낸다는 의미를 담고 있습니다.',
      visual: '복잡한 퍼즐 조각들을 하나씩 맞춰서 결국 정교한 기계를 완성해내는 설계자의 모습을 떠올려 보세요.',
      soundAlike: '컨트라이브(Contrive)는 \'큰 틀(Con-)+라이브(trive)\'로 기억하세요. 큰 틀을 짜서 생생하게 실행에 옮기는 모습입니다.',
      context: '단순한 계획이 아니라, 다소 복잡하거나 교묘한 수단을 동원하여 목적을 달성하려 할 때 주로 쓰입니다.',
      synonymAntonym: 'devise(고안하다)와 비슷하지만 더 교묘한 느낌이며, 아무 계획 없이 발생하는 happen과는 반대됩니다.',
    }),
    {
      definition: 'To plan with ingenuity or to bring about a situation through clever and sometimes dishonest methods.',
      synonyms: ['devise', 'concoct', 'engineer'],
      antonyms: ['neglect', 'destroy', 'botch'],
      exampleSentences: [
        { en: 'The prisoners managed to contrive a way to unlock the cell door using a spoon.', ko: '죄수들은 숟가락을 이용해 감옥 문을 열 방법을 용케 짜냈다.' },
        { en: 'She will contrive to meet him at the gala as if it were a complete coincidence.', ko: '그녀는 마치 완전한 우연인 것처럼 갈라 행사에서 그를 만나도록 상황을 꾸밀 것이다.' },
      ],
    }
  ),
  word('Converge', '수렴하다', 7, 'verb',
    ['발산하다', '갈라지다', '분산하다', '흩어지다', '이탈하다', '분기하다', '멀어지다', '분리되다', '나뉘다', '방출하다'],
    tips({
      etymology: '접두사 con-(함께)과 verge(기울다/향하다)가 결합되어 여러 방향에서 한 지점으로 함께 향한다는 의미를 가집니다.',
      visual: '깔때기 입구로 들어간 여러 개의 구슬들이 좁은 구멍 하나를 향해 모여드는 모습을 상상해 보세요.',
      soundAlike: '\'큰 버스(Converge)\'들이 전국 각지에서 출발해 서울역 광장 한곳으로 모여드는 장면으로 기억하세요.',
      context: '수학에서의 수렴뿐만 아니라, 서로 다른 두 문화가 섞이거나 여러 사람의 의견이 일치될 때도 자주 사용됩니다.',
      synonymAntonym: '유사한 단어로는 meet, merge가 있으며, 반대 개념인 \'갈라지다\'는 diverge라고 표현합니다.',
    }),
    {
      definition: 'To move toward the same center or toward each other from different places to eventually meet.',
      synonyms: ['meet', 'merge', 'unite'],
      antonyms: ['diverge', 'scatter', 'separate'],
      exampleSentences: [
        { en: 'Thousands of supporters will converge on the capital for the rally.', ko: '수천 명의 지지자들이 집회를 위해 수도로 모여들 것이다.' },
        { en: 'The two roads converge at the center of the town.', ko: '두 도로는 마을 중심부에서 하나로 만난다.' },
      ],
    }
  ),
  word('Convict', '유죄 판결하다', 7, 'verb',
    ['석방하다', '면죄하다', '무죄를 선고하다', '해방시키다', '용서하다', '사면하다', '방면하다', '결백을 증명하다', '혐의를 벗기다', '석방'],
    tips({
      etymology: '라틴어 \'con(강조)\'과 \'vincere(이기다/정복하다)\'가 결합된 단어로, 법정 공방에서 상대를 이겨 죄를 입증한다는 뜻에서 유래했습니다.',
      visual: '판사가 엄숙한 표정으로 의사봉을 세 번 두드리며 피고인에게 유죄를 선고하는 법정의 긴장된 분위기를 떠올려 보세요.',
      soundAlike: '컨빅트(Convict)는 \'큰 빚(bit)\'과 발음이 비슷합니다. 큰 빚을 지고 갚지 않아 결국 법정에서 유죄 판결을 받는 상황을 연상해 보세요.',
      context: '주로 형사 재판 과정에서 배심원단이나 판사가 피고인의 범죄 사실이 증명되었다고 공식적으로 선언할 때 사용됩니다.',
      synonymAntonym: '유죄를 선고하는 condemn, sentence와 유사하며, 반대로 무죄를 선고하거나 혐의를 벗겨주는 acquit, exonerate와 대조됩니다.',
    }),
    {
      definition: 'To officially declare someone to be guilty of a crime by the verdict of a jury or the decision of a judge in a court of law.',
      synonyms: ['condemn', 'sentence', 'find guilty'],
      antonyms: ['acquit', 'exonerate', 'clear'],
      exampleSentences: [
        { en: 'The jury took only two hours to convict the defendant.', ko: '배심원단이 피고인에게 유죄 판결을 내리는 데는 단 두 시간밖에 걸리지 않았다.' },
        { en: 'There was sufficient evidence to convict him of the robbery.', ko: '그에게 강도죄로 유죄 판결을 내릴 충분한 증거가 있었다.' },
      ],
    }
  ),
  word('Copious', '풍부한', 7, 'adjective',
    ['빈약한', '부족한', '희소한', '미미한', '드문', '결핍된', '협소한', '고갈된', '한정된', '불충분한'],
    tips({
      etymology: '라틴어 copia(풍요)에서 유래했으며, \'카피(copy)\'를 여러 번 해서 양이 엄청나게 늘어난 상태를 연상하세요.',
      visual: '추수 감사절 식탁 위에 접시가 넘칠 정도로 산더미처럼 쌓인 음식들을 떠올려 보세요.',
      soundAlike: '\'코피\'가 날 정도로 밤새워 공부하여 머릿속에 지식이 아주 풍부해진 상태로 기억해 보세요.',
      context: '단순히 많은 것이 아니라 공급이나 양이 넘쳐날 때 사용하며, 특히 필기량이나 정보가 방대할 때 자주 쓰입니다.',
      synonymAntonym: 'abundant, plentiful과 의미가 통하며, 양이 매우 적음을 뜻하는 scarce, meager와는 반대됩니다.',
    }),
    {
      definition: 'Existing in large amounts; yielding or containing an ample supply of something.',
      synonyms: ['abundant', 'plentiful', 'profuse'],
      antonyms: ['scarce', 'meager', 'scanty'],
      exampleSentences: [
        { en: 'She took copious notes during the three-hour lecture to ensure she didn\'t miss any details.', ko: '그녀는 세부 사항을 놓치지 않기 위해 3시간의 강의 동안 방대한 양의 필기를 했습니다.' },
        { en: 'The region is famous for its copious production of high-quality wine every year.', ko: '그 지역은 매년 생산되는 풍부한 양의 고급 와인으로 유명합니다.' },
      ],
    }
  ),
  word('Cordial', '따뜻한', 7, 'adjective',
    ['냉담한', '무뚝뚝한', '적대적인', '불친절한', '냉혹한', '냉소적인', '무례한', '무정한', '쌀쌀맞은', '엄격한'],
    tips({
      etymology: '라틴어 \'cor(심장)\'에서 유래했습니다. 심장에서 우러나오는 진심 어린 따뜻함을 뜻합니다.',
      visual: '추운 겨울날 누군가 건네주는 김이 모락모락 나는 따뜻한 코코아 한 잔을 떠올려 보세요.',
      soundAlike: '코디(Codi)가 옷을 아주 \'따뜻\'하고 예쁘게 잘 입혀준 상황을 연상해 보세요.',
      context: '비즈니스 미팅이나 공식적인 행사에서 예의를 갖추면서도 친절한 분위기를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '친근한 warm과 유사하며, 차가운 느낌의 cold나 적대적인 hostile과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Behaving in a pleasant, friendly, and polite way towards others.',
      synonyms: ['warm', 'friendly', 'genial'],
      antonyms: ['hostile', 'cold', 'aloof'],
      exampleSentences: [
        { en: 'The host gave us a cordial welcome when we arrived at the party.', ko: '우리가 파티에 도착했을 때 주인은 우리를 매우 따뜻하게 환영해 주었다.' },
        { en: 'Despite their political differences, the meeting was conducted in a cordial manner.', ko: '정치적 견해 차이에도 불구하고 회의는 화기애애한 분위기 속에서 진행되었다.' },
      ],
    }
  ),
  word('Corrode', '부식시키다', 7, 'verb',
    ['보존하다', '보호하다', '강화하다', '수리하다', '복원하다', '보강하다', '수선하다', '유지하다', '고정하다', '건설하다'],
    tips({
      etymology: '라틴어 \'corrodere\'에서 유래하며, \'con(완전히)\'과 \'rodere(갉아먹다)\'가 합쳐져 표면을 완전히 갉아먹어 파괴한다는 의미를 가집니다.',
      visual: '바닷가에 방치된 오래된 철문이 붉은 녹으로 뒤덮여 층층이 부스러져 내리는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'코(nose) 로드(road)\'와 비슷하므로, 코앞의 길(road)이 산성비에 녹아내리는 장면을 연상해 보세요.',
      context: '금속이 녹슬거나 암석이 깎이는 물리적 현상 외에도, 불신이 우정을 \'좀먹다\'처럼 추상적인 가치가 훼손될 때도 쓰입니다.',
      synonymAntonym: '서서히 깎아내는 erode와 유사하며, 반대로 상태를 온전히 지키는 preserve와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To gradually destroy or damage a solid surface through a chemical process or slow wearing away.',
      synonyms: ['rust', 'erode', 'oxidize'],
      antonyms: ['preserve', 'protect', 'build'],
      exampleSentences: [
        { en: 'Acid rain can corrode stone statues over a long period of time.', ko: '산성비는 오랜 시간에 걸쳐 석상을 부식시킬 수 있다.' },
        { en: 'The salt in the air began to corrode the metal parts of the ship.', ko: '공기 중의 염분이 배의 금속 부품들을 부식시키기 시작했다.' },
      ],
    }
  ),
  word('Corroborate', '입증하다', 7, 'verb',
    ['부정하다', '반박하다', '무효화하다', '의심하다', '불신하다', '왜곡하다', '은폐하다', '모순되다', '철회하다', '기각하다'],
    tips({
      etymology: '함께를 뜻하는 \'con-\'과 강함을 뜻하는 \'robor(robust)\'가 결합되어, 여러 증거를 모아 주장을 더 단단하고 튼튼하게 만든다는 의미에서 유래했습니다.',
      visual: '법정에서 검사가 제시한 증거물 위에 목격자의 결정적인 증언이 퍼즐 조각처럼 딱 들어맞아 진실이 굳어지는 장면을 상상해 보세요.',
      soundAlike: '\'코로(끼리) 보태서(borate)\' 여러 사람이 입을 모아 사실임을 증명하고 힘을 보태주는 상황으로 연상하면 쉽습니다.',
      context: '주로 법적 증언, 과학적 가설 검증, 뉴스 보도 등 공식적인 상황에서 어떤 사실이 참임을 뒷받침할 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: '확증하는 confirm, 입증하는 substantiate와 비슷하며, 반대로 모순되는 contradict나 반박하는 refute와는 대조적입니다.',
    }),
    {
      definition: 'To provide additional evidence or information that helps to prove that a statement or theory is true.',
      synonyms: ['confirm', 'verify', 'substantiate'],
      antonyms: ['contradict', 'refute', 'deny'],
      exampleSentences: [
        { en: 'The witness was able to provide specific details that helped to corroborate the victim\'s story.', ko: '목격자는 피해자의 진술을 입증하는 데 도움이 되는 구체적인 세부 정보를 제공할 수 있었다.' },
        { en: 'Independent researchers were called in to corroborate the results of the controversial experiment.', ko: '논란이 된 실험 결과를 확증하기 위해 독립적인 연구원들이 소집되었다.' },
      ],
    }
  ),
  word('Covert', '비밀의', 7, 'adjective',
    ['공개적인', '노골적인', '드러난', '투명한', '명시적인', '공식적인', '외향적인', '명백한', '솔직한', '가감없는'],
    tips({
      etymology: '동사 cover(덮다)에서 유래하여, 무언가를 덮개로 씌워 남들이 보지 못하게 가려놓은 상태를 뜻합니다.',
      visual: '어두운 골목에서 코트 깃을 세우고 주변을 살피며 몰래 서류를 전달하는 스파이의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'커버트\'이므로 \'커버(cover)를 씌워트(트)\' 즉, 덮개를 씌워 숨겨놓았다고 기억하면 쉽습니다.',
      context: '주로 정부의 비밀 작전(covert operation)이나 남모르게 훔쳐보는 시선(covert glance)을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '반의어인 overt는 \'o\'로 시작하여 \'open(열린)\' 상태를, covert는 \'c\'로 시작하여 \'cover(덮인)\' 상태를 나타냅니다.',
    }),
    {
      definition: 'Kept hidden or done in a way that is not intended to be noticed by others.',
      synonyms: ['clandestine', 'stealthy', 'surreptitious'],
      antonyms: ['overt', 'manifest', 'explicit'],
      exampleSentences: [
        { en: 'The government denied any involvement in the covert military operation.', ko: '정부는 그 비밀 군사 작전에 어떠한 개입도 없었다고 부인했다.' },
        { en: 'She made a covert movement to check her phone under the table.', ko: '그녀는 테이블 아래에서 남몰래 휴대폰을 확인하려는 움직임을 보였다.' },
      ],
    }
  ),
  word('Credible', '믿을 만한', 7, 'adjective',
    ['의심스러운', '믿기 어려운', '불신할 만한', '허황된', '거짓의', '부정직한', '불확실한', '허위의', '의혹이 있는', '수상쩍은'],
    tips({
      etymology: '라틴어 credere(믿다)와 할 수 있다는 접미사 -ible이 합쳐져 \'믿을 수 있는\'이라는 뜻이 되었습니다.',
      visual: '법정에서 판사가 고개를 끄덕이며 증인의 말을 경청하는 모습',
      soundAlike: '신용카드를 뜻하는 \'크레딧(Credit)\' 카드와 어근이 같아 신용이 있다는 느낌으로 기억하세요.',
      context: '뉴스 보도나 법정 증언처럼 정보의 진실성이 중요할 때 자주 쓰입니다.',
      synonymAntonym: '동의어는 believable, trustworthy이며 반의어는 incredible, unreliable, dubious입니다.',
    }),
    {
      definition: 'Describing someone or something that can be accepted as true, reasonable, or worthy of trust.',
      synonyms: ['believable', 'trustworthy', 'reliable'],
      antonyms: ['incredible', 'unreliable', 'dubious'],
      exampleSentences: [
        { en: 'The witness gave a highly credible account of the events that occurred.', ko: '목격자는 발생한 사건들에 대해 매우 신뢰할 만한 설명을 제공했다.' },
        { en: 'The company needs to present a credible plan to regain the public\'s trust.', ko: '그 회사는 대중의 신뢰를 회복하기 위해 믿을 만한 계획을 제시해야 한다.' },
      ],
    }
  ),
  word('Culminate', '절정에 달하다', 7, 'verb',
    ['시작하다', '추락하다', '하락하다', '퇴조하다', '침체하다', '발단이 되다', '쇠퇴하다', '중단하다', '착수하다', '무너지다'],
    tips({
      etymology: '라틴어 culmen(꼭대기)에서 유래하여 어떤 과정이 정점에 도달함을 의미합니다.',
      visual: '오랜 등반 끝에 산의 가장 높은 봉우리에 깃발을 꽂는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'칼(끝)이 미치다\'와 비슷해 어떤 지점의 끝이나 정점에 도달했다는 느낌으로 연결해보세요.',
      context: '수년간의 연구가 노벨상 수상으로 마무리되거나 갈등이 폭발하는 상황 등에 적합합니다.',
      synonymAntonym: '동의어 peak, climax는 정점을, 반의어 begin, start는 시작을 나타냅니다.',
    }),
    {
      definition: 'To reach the highest point of development or to arrive at a final result after a long period of time.',
      synonyms: ['peak', 'climax', 'conclude'],
      antonyms: ['begin', 'start', 'commence'],
      exampleSentences: [
        { en: 'The months of preparation will culminate in tonight\'s performance.', ko: '몇 달간의 준비 과정이 오늘 밤 공연에서 마침내 절정에 달할 것입니다.' },
        { en: 'Their long-standing rivalry culminated in a physical confrontation.', ko: '그들의 오래된 경쟁 관계는 결국 물리적 충돌로 치달았습니다.' },
      ],
    }
  ),
  word('Curtail', '축소하다', 7, 'verb',
    ['확장하다', '늘리다', '연장하다', '증대시키다', '확대하다', '강화하다', '부풀리다', '지속하다', '키우다', '넓히다'],
    tips({
      etymology: '말의 꼬리(tail)를 짧게(curt) 자른다는 이미지에서 유래하여 무언가를 삭감한다는 의미가 되었습니다.',
      visual: '긴 종이띠의 끝부분을 가위로 싹둑 잘라내어 전체 길이를 줄이는 장면을 상상하세요.',
      soundAlike: '커튼(curtain)을 쳐서 열려 있던 공간이나 시야를 좁게 만드는 상황과 연결하면 기억하기 쉽습니다.',
      context: '주로 정부의 예산 삭감, 개인의 권리 제한, 혹은 외출 시간의 단축 등을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '양을 줄이는 reduce와 유의어이며, 길이나 시간을 늘리는 prolong과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To make something shorter or smaller in amount, or to put a limit on what is possible.',
      synonyms: ['shorten', 'reduce', 'diminish'],
      antonyms: ['extend', 'prolong', 'expand'],
      exampleSentences: [
        { en: 'The school decided to curtail outdoor activities due to the heavy rain.', ko: '폭우로 인해 학교는 야외 활동을 축소하기로 결정했다.' },
        { en: 'New laws were introduced to curtail the power of the executive branch.', ko: '행정부의 권한을 축소하기 위해 새로운 법안들이 도입되었다.' },
      ],
    }
  ),
  word('Cynical', '냉소적인', 7, 'adjective',
    ['낙관적인', '순진한', '신뢰하는', '순수한', '긍정적인', '희망찬', '믿음직한', '열정적인', '호의적인', '천진난만한'],
    tips({
      etymology: '그리스어 kynikos(개 같은)에서 유래하여, 세상의 가치를 부정하던 견유학파의 태도를 뜻하게 되었습니다.',
      visual: '누군가 선행을 베풀 때 \'무슨 꿍꿍이가 있겠지\'라며 입꼬리를 한쪽만 올리고 비웃는 표정을 상상해 보세요.',
      soundAlike: '한국어에서도 \'시니컬하다\'라는 외래어로 자주 쓰이며, 차갑고 비꼬는 듯한 느낌을 줍니다.',
      context: '타인의 선의를 순수하게 받아들이지 않고 이기적인 의도가 숨어있을 것이라고 의심하는 태도를 묘사할 때 사용합니다.',
      synonymAntonym: 'skeptical과 비슷하게 의심이 많지만, 인간 본성에 대해 더 부정적이고 비꼬는 뉘앙스가 강하며 optimistic과는 정반대의 태도입니다.',
    }),
    {
      definition: 'Believing that people are motivated only by self-interest; distrustful of human sincerity or integrity.',
      synonyms: ['skeptical', 'distrustful', 'pessimistic'],
      antonyms: ['idealistic', 'optimistic', 'trusting'],
      exampleSentences: [
        { en: 'He has grown increasingly cynical about the motives of politicians.', ko: '그는 정치인들의 동기에 대해 점점 더 냉소적으로 변해갔다.' },
        { en: 'Many people take a cynical view of the new corporate social responsibility initiative.', ko: '많은 이들이 그 기업의 새로운 사회적 책임 활동에 대해 냉소적인 시각을 가지고 있다.' },
      ],
    }
  ),
  word('Daunting', '벅찬', 7, 'adjective',
    ['쉬운', '용이한', '부담없는', '가벼운', '만만한', '자신만만한', '격려하는', '편안한', '단순한', '수월한'],
    tips({
      etymology: '길들이다, 굴복시키다라는 뜻의 고대 프랑스어 danter에서 유래했습니다.',
      visual: '거대한 서류 뭉치나 끝이 안 보이는 계단 앞에 서서 한숨을 쉬고 있는 사람을 떠올려 보세요.',
      soundAlike: '발음이 \'돈(money) 팅\'과 비슷해, 돈이 너무 많이 들어 엄두가 안 나는 상황을 상상해보세요.',
      context: '매우 어렵거나 위협적이어서 시작하기조차 겁이 나고 기가 죽는 상황에 주로 쓰입니다.',
      synonymAntonym: '동의어는 intimidating, overwhelming이며, 반의어는 easy, encouraging 등이 있습니다.',
    }),
    {
      definition: 'Seeming difficult to deal with in anticipation; intimidating or discouraging to one\'s confidence.',
      synonyms: ['intimidating', 'overwhelming', 'formidable'],
      antonyms: ['easy', 'encouraging', 'heartening'],
      exampleSentences: [
        { en: 'The prospect of starting the entire project over from scratch was truly daunting.', ko: '프로젝트 전체를 처음부터 다시 시작해야 한다는 전망은 정말 벅찼다.' },
        { en: 'Climbing the steep mountain in such bad weather seemed like a daunting task.', ko: '그런 악천후 속에 가파른 산을 오르는 것은 벅찬 과업처럼 보였다.' },
      ],
    }
  ),
  word('Debilitate', '약화시키다', 7, 'verb',
    ['강화하다', '회복시키다', '촉진하다', '활성화하다', '기운나게하다', '증진하다', '보강하다', '치유하다', '북돋우다', '단련하다'],
    tips({
      etymology: '라틴어 \'de-\'(제거)와 \'habilis\'(능력/힘)가 결합하여 \'능력을 없애다\'라는 의미에서 유래되었습니다.',
      visual: '튼튼했던 건물이 지진으로 인해 기초가 흔들리며 무너지기 직전의 위태로운 상태를 상상해 보세요.',
      soundAlike: '\'뒤에서 빌빌대다\'와 발음이 비슷하므로, 기운이 빠져서 뒤처지고 빌빌거리는 모습을 연상하면 쉽습니다.',
      context: '주로 만성 질환이 신체를 망가뜨리거나, 심각한 경제 부채가 국가의 기능을 마비시킬 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'weaken보다 훨씬 강한 표현으로 enfeeble과 유사하며, 반대로 힘을 주는 invigorate와 대조됩니다.',
    }),
    {
      definition: 'To severely reduce the strength, energy, or effectiveness of someone or something, often through illness or structural damage.',
      synonyms: ['weaken', 'enfeeble', 'enervate'],
      antonyms: ['strengthen', 'invigorate', 'fortify'],
      exampleSentences: [
        { en: 'The long-term effects of the disease can seriously debilitate the body.', ko: '그 질병의 장기적인 영향은 신체를 심각하게 약화시킬 수 있습니다.' },
        { en: 'A series of scandals continued to debilitate the stability of the government.', ko: '일련의 스캔들이 정부의 안정성을 계속해서 약화시켰습니다.' },
      ],
    }
  ),
  word('Decadent', '퇴폐적인', 7, 'adjective',
    ['금욕적인', '검소한', '건강한', '절제된', '순수한', '도덕적인', '소박한', '단정한', '청렴한', '성실한'],
    tips({
      etymology: '라틴어 de(아래로)와 cadere(떨어지다)가 결합된 단어로, 가치나 수준이 아래로 떨어지는 쇠퇴와 타락을 의미합니다.',
      visual: '로마 제국 말기의 귀족들이 금쟁반에 담긴 포도를 먹으며 화려한 침대에 누워 흥청망청 파티를 즐기는 모습',
      soundAlike: '발음이 \'데카(10) 던트\'와 비슷하므로, 10년 동안 일은 안 하고 놀고먹기만 해서 인생이 타락했다고 연상해 보세요.',
      context: '단순히 도덕적 타락을 비난할 때뿐만 아니라, 초콜릿 케이크처럼 지나치게 달고 화려해서 죄책감이 들 정도의 음식을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '쾌락에 빠진 self-indulgent와 동의어이며, 스스로를 엄격히 절제하는 ascetic과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Marked by a state of moral or cultural decline, or characterized by excessive indulgence in pleasure and luxury.',
      synonyms: ['corrupt', 'degenerate', 'self-indulgent'],
      antonyms: ['ascetic', 'moral', 'virtuous'],
      exampleSentences: [
        { en: 'The empire fell into decline due to its increasingly decadent lifestyle.', ko: '그 제국은 점점 더 퇴폐적인 생활 방식 때문에 쇠퇴의 길로 접어들었다.' },
        { en: 'They enjoyed a decadent chocolate cake that was rich and indulgent.', ko: '그들은 진하고 퇴폐적인 초콜릿 케이크를 즐겼다.' },
      ],
    }
  ),
  word('Decipher', '해독하다', 7, 'verb',
    ['암호화하다', '숨기다', '혼란시키다', '봉인하다', '은폐하다', '뒤섞다', '가리다', '왜곡하다', '모호하게하다', '잠그다'],
    tips({
      etymology: 'de(반대/제거)와 cipher(암호)가 결합되어, 암호화된 상태를 해제하고 본래의 내용을 찾아낸다는 뜻에서 유래했습니다.',
      visual: '복잡한 기호로 가득 찬 고대 벽화 앞에서 돋보기를 들고 한 글자씩 의미를 밝혀내는 고고학자의 모습.',
      soundAlike: '\'디(뒤) 사이를 파(dig)\'헤쳐서 숨겨진 진짜 의미를 찾아내는 장면을 떠올려 보세요.',
      context: '주로 악필이라 알아보기 힘든 글씨, 낯선 외국어, 혹은 보안이 걸린 컴퓨터 코드를 읽어낼 때 자주 사용됩니다.',
      synonymAntonym: 'decode, interpret와 같은 유의어는 \'풀어내다\'는 뜻이며, encode, scramble 같은 반의어는 \'암호화하여 섞다\'는 뜻입니다.',
    }),
    {
      definition: 'To succeed in understanding or reading something that is difficult to see, hear, or comprehend, such as a code or messy handwriting.',
      synonyms: ['decode', 'interpret', 'unravel'],
      antonyms: ['encode', 'scramble', 'conceal'],
      exampleSentences: [
        { en: 'It took the experts several months to decipher the secret message.', ko: '전문가들이 그 비밀 메시지를 해독하는 데 몇 달이 걸렸다.' },
        { en: 'Can you help me decipher this doctor\'s messy handwriting?', ko: '이 의사의 엉망인 글씨체를 해독하는 것 좀 도와줄래?' },
      ],
    }
  ),
  word('Decree', '포고령', 7, 'noun',
    ['허가', '청원', '요청', '제안', '권유', '권고', '자문', '탄원', '건의', '호소'],
    tips({
      etymology: '라틴어 \'decretum\'에서 유래하여 \'결정된 것\'이라는 의미를 담고 있습니다.',
      visual: '중세 시대 왕이 두루마리를 펼쳐 백성들에게 엄숙하게 선포하는 장면을 상상해 보세요.',
      soundAlike: '디크리(Decree) -> \'뒤풀이\'는 금지한다는 공식 명령.',
      context: '정부나 법원이 내리는 강제성 있는 공식적인 명령이나 법령을 다룰 때 주로 쓰입니다.',
      synonymAntonym: '동의어로는 edict, order, mandate가 있으며 반의어로는 petition, request, appeal이 있습니다.',
    }),
    {
      definition: 'An official order issued by a legal authority; a formal and authoritative command.',
      synonyms: ['edict', 'order', 'mandate'],
      antonyms: ['petition', 'request', 'appeal'],
      exampleSentences: [
        { en: 'The government issued a decree to freeze all prices.', ko: '정부는 모든 물가를 동결하라는 포고령을 내렸다.' },
        { en: 'The court\'s decree ended the long-standing dispute.', ko: '법원의 판결령이 오래 지속된 분쟁을 종결시켰다.' },
      ],
    }
  ),
  word('Deem', '간주하다', 7, 'verb',
    ['부정하다', '의심하다', '무시하다', '경시하다', '거부하다', '반대하다', '외면하다', '취소하다', '망각하다', '오해하다'],
    tips({
      etymology: '고대 영어 deman에서 유래하여 \'판결을 내리다\' 또는 \'판단하다\'라는 뜻을 가집니다.',
      visual: '판사가 법봉을 두드리며 어떤 사실을 최종적으로 확정 짓는 모습.',
      soundAlike: 'Deem(딤) -> \'찜\'하다. 어떤 상태라고 마음속으로 찜해서 결정하다.',
      context: '주관적인 의견보다는 격식 있는 상황에서 공식적인 판단을 내릴 때 사용됩니다.',
      synonymAntonym: '동의어로는 consider, judge, regard가 있으며 반의어로는 ignore, neglect, disregard가 있습니다.',
    }),
    {
      definition: 'To regard or consider in a specified way; to form an opinion about something.',
      synonyms: ['consider', 'judge', 'regard'],
      antonyms: ['ignore', 'neglect', 'disregard'],
      exampleSentences: [
        { en: 'The area was deemed unsafe for human habitation.', ko: '그 지역은 사람이 거주하기에 안전하지 않다고 간주되었다.' },
        { en: 'The director may take any action he deems necessary.', ko: '이사는 그가 필요하다고 판단하는 어떤 조치든 취할 수 있다.' },
      ],
    }
  ),
];
