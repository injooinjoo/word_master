import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch05: VocabItem[] = [
  word('Achieve', '달성하다', 3, 'verb',
    ['실패하다', '포기하다', '미루다', '회피하다', '무시하다', '잃다', '거절하다', '망설이다', '낭비하다', '지연하다'],
    tips({
      etymology: '프랑스어 \'à chef(끝에 도달하다)\'에서 유래하여, 일의 머리(끝)에 마침내 도달했다는 뜻을 담고 있습니다.',
      visual: '높은 산의 정상에 올라가 깃발을 꽂는 등반가의 모습을 떠올려 보세요.',
      soundAlike: '게임에서 미션을 완료하면 뜨는 \'업적 달성(Achievement)\' 팝업창을 연상하면 쉽습니다.',
      context: '단순히 얻는 것이 아니라, 오랜 시간 공을 들이거나 고난을 극복하고 얻어낸 결실에 주로 쓰입니다.',
      synonymAntonym: '성취를 뜻하는 accomplish와 유사하며, 중도에 그만두는 abandon과는 대조적입니다.',
    }),
    {
      definition: 'to succeed in reaching a goal or completing something through effort',
      synonyms: ['accomplish', 'attain', 'fulfill'],
      antonyms: ['fail', 'forfeit', 'abandon'],
      exampleSentences: [
        { en: 'She achieved her goal of graduating with honors.', ko: '그녀는 우등으로 졸업한다는 목표를 달성했다.' },
        { en: 'It took years of hard work to achieve success.', ko: '성공을 거두기 위해 수년간의 노력이 필요했다.' },
      ],
    }
  ),
  word('Admire', '존경하다', 3, 'verb',
    ['무시하다', '비난하다', '싫어하다', '경멸하다', '질시하다', '부러워하다', '질투하다', '모욕하다', '불신하다', '조롱하다'],
    tips({
      etymology: '라틴어 ad(~를 향해)와 mirari(놀라다)가 결합되어, 누군가를 경이로운 시선으로 바라본다는 어원을 가집니다.',
      visual: '박물관에서 거대한 예술 작품 앞에 멈춰 서서 넋을 잃고 바라보는 관람객의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어드마이어\'이므로, 훌륭한 사람을 보고 \'어머나\' 하고 감탄하며 마음을 이어가는 상황을 연상하세요.',
      context: '단순한 호감을 넘어 상대방의 뛰어난 성품, 업적, 혹은 아름다움에 대해 깊은 존중을 표현할 때 주로 사용됩니다.',
      synonymAntonym: '존중을 뜻하는 respect와 비슷하지만, 경멸을 뜻하는 despise와는 정반대의 감정 상태를 나타냅니다.',
    }),
    {
      definition: 'to regard someone or something with respect and warm approval',
      synonyms: ['respect', 'esteem', 'venerate'],
      antonyms: ['despise', 'scorn', 'disdain'],
      exampleSentences: [
        { en: 'I admire her courage and determination.', ko: '나는 그녀의 용기와 결단력을 존경한다.' },
        { en: 'We all admire his dedication to the cause.', ko: '우리 모두는 그 대의를 향한 그의 헌신에 감탄한다.' },
      ],
    }
  ),
  word('Advance', '앞으로 나아가다', 3, 'verb',
    ['후퇴하다', '물러서다', '지연하다', '미루다', '멈추다', '정체하다', '퇴보하다', '되돌아가다', '느리다', '늦추다'],
    tips({
      etymology: '라틴어 ab(앞으로)와 ante(먼저)가 결합되어 남들보다 앞서서 나아간다는 의미를 담고 있습니다.',
      visual: '체스판 위에서 기물이 한 칸 앞으로 당당하게 전진하는 모습을 상상해 보세요.',
      soundAlike: '게임의 상급 모드인 \'어드밴스드(Advanced)\'를 떠올리면 수준이 앞서 있다는 느낌을 쉽게 이해할 수 있습니다.',
      context: '물리적인 이동뿐만 아니라 과학 기술의 발전이나 마감 기한을 앞당길 때도 자주 사용됩니다.',
      synonymAntonym: '앞으로 나아가는 progress와 비슷하며, 뒤로 물러나는 retreat와는 정반대 개념입니다.',
    }),
    {
      definition: 'to move forward or make progress toward a goal',
      synonyms: ['progress', 'proceed', 'flourish'],
      antonyms: ['retreat', 'recede', 'withdraw'],
      exampleSentences: [
        { en: 'Technology continues to advance rapidly.', ko: '기술은 계속해서 빠르게 발전하고 있다.' },
        { en: 'The army advanced toward the enemy position.', ko: '군대는 적진을 향해 전진했다.' },
      ],
    }
  ),
  word('Allow', '허용하다', 3, 'verb',
    ['금지하다', '막다', '거절하다', '차단하다', '방해하다', '제한하다', '억제하다', '거부하다', '말리다', '반대하다'],
    tips({
      etymology: '라틴어 allaudare(칭찬하다)에서 유래해 승인해준다는 의미로 발전했습니다.',
      visual: '닫혀 있던 문이 열리며 사람이 안으로 들어갈 수 있게 길을 터주는 장면을 상상하세요.',
      soundAlike: '\'얼라우\'는 \'얼른 와\'라고 말하며 들어오라고 허락해주는 상황과 발음이 비슷합니다.',
      context: '공식적인 규칙이나 개인적인 허락이 필요한 상황에서 어떤 행위를 가능하게 할 때 주로 사용합니다.',
      synonymAntonym: 'permit과 유의어이며, 금지를 뜻하는 forbid나 prohibit과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to give permission for someone to do something or to let a particular event take place',
      synonyms: ['permit', 'authorize', 'grant'],
      antonyms: ['forbid', 'prohibit', 'ban'],
      exampleSentences: [
        { en: 'Smoking is not allowed in this building.', ko: '이 건물 내에서는 흡연이 허용되지 않습니다.' },
        { en: 'Please allow me to introduce myself to the group.', ko: '제가 제 소개를 할 수 있게 허락해 주세요.' },
      ],
    }
  ),
  word('Amount', '양, 금액', 3, 'noun',
    ['품질', '개수', '종류', '단위', '무게', '부피', '길이', '면적', '비율', '정도'],
    tips({
      etymology: '라틴어 ad(~로)와 mons(산)가 결합되어 산처럼 높이 쌓인 전체 합계를 뜻하게 되었습니다.',
      visual: '저금통에 동전이 가득 쌓여서 묵직해진 전체 덩어리를 상상해 보세요.',
      soundAlike: '어마어마한 \'양\'이 쌓여 있는 모습을 떠올리며 \'어마운트\'라고 발음해 보세요.',
      context: '셀 수 없는 물질의 양이나 돈의 액수를 표현할 때 가장 흔히 쓰이는 단어입니다.',
      synonymAntonym: 'quantity와 비슷하지만, amount는 주로 셀 수 없는 명사와 함께 쓰이는 경향이 있습니다.',
    }),
    {
      definition: 'A quantity of something, such as a substance or a sum of money, especially when considered as a whole.',
      synonyms: ['quantity', 'volume', 'total'],
      antonyms: ['nothing', 'zero', 'lack'],
      exampleSentences: [
        { en: 'The amount of rainfall was unexpected.', ko: '강우량이 예상 밖이었다.' },
        { en: 'She donated a large amount to charity.', ko: '그녀는 자선 단체에 거액을 기부했다.' },
      ],
    }
  ),
  word('Ancient', '고대의', 3, 'adjective',
    ['현대의', '최신의', '새로운', '젊은', '최근의', '미래의', '현대적', '세련된', '신선한', '최신'],
    tips({
      etymology: '라틴어 \'ante(이전의)\'에서 유래하여 아주 먼 옛날의 시기를 가리킵니다.',
      visual: '모래바람 속에 서 있는 거대한 피라미드나 이끼 낀 낡은 돌 유적을 떠올려 보세요.',
      soundAlike: '영화 닥터 스트레인지에 나오는 아주 오래된 스승 \'에인션트 원\'을 기억하세요.',
      context: '단순히 오래된 것보다 수천 년 전의 역사적 시대를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'antique와 결이 비슷하며, 현대적인 modern과는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'belonging to a very distant past or having existed for many thousands of years',
      synonyms: ['primeval', 'antique', 'archaic'],
      antonyms: ['modern', 'contemporary', 'recent'],
      exampleSentences: [
        { en: 'The ancient ruins attract many tourists from all over the world.', ko: '그 고대 유적지는 전 세계에서 온 많은 관광객들을 끌어모은다.' },
        { en: 'Ancient civilizations developed complex systems of writing and agriculture.', ko: '고대 문명들은 복잡한 문자 체계와 농업을 발전시켰다.' },
      ],
    }
  ),
  word('Announce', '알리다', 3, 'verb',
    ['숨기다', '비밀로 하다', '침묵하다', '은폐하다', '가리다', '덮다', '무시하다', '부인하다', '취소하다', '보류하다'],
    tips({
      etymology: '라틴어 \'ad(~에게)\'와 \'nuntiare(보고하다)\'가 결합되어 대중에게 소식을 전달한다는 의미가 되었습니다.',
      visual: '확성기를 든 아나운서가 광장에서 큰 소리로 뉴스를 전파하는 모습을 떠올려 보세요.',
      soundAlike: '방송을 진행하는 \'아나운서(Announcer)\'의 역할이 바로 \'어나운스(Announce)\' 하는 것입니다.',
      context: '결혼, 신제품 출시, 정부 정책 등 공식적이고 중요한 사실을 공표할 때 자주 사용됩니다.',
      synonymAntonym: '비슷한 말로는 널리 알리는 declare가 있고, 반대말로는 몰래 감추는 conceal이 있습니다.',
    }),
    {
      definition: 'To make a formal or public statement about a fact, occurrence, or intention.',
      synonyms: ['declare', 'proclaim', 'broadcast'],
      antonyms: ['conceal', 'hide', 'suppress'],
      exampleSentences: [
        { en: 'The government will announce the new tax policy during the press conference.', ko: '정부는 기자회견 중에 새로운 세금 정책을 발표할 것이다.' },
        { en: 'The airline had to announce a delay due to the heavy snowstorm.', ko: '항공사는 폭설로 인한 지연을 안내해야만 했다.' },
      ],
    }
  ),
  word('Appear', '나타나다', 3, 'verb',
    ['사라지다', '숨다', '닫다', '가리다', '은폐하다', '떠나다', '없어지다', '잠수하다', '후퇴하다', '물러나다'],
    tips({
      etymology: '라틴어 ad(~에)와 parere(보이다)가 결합되어 눈앞에 존재를 드러낸다는 어원을 가집니다.',
      visual: '무대 커튼이 열리면서 주인공이 조명 아래로 당당하게 걸어 나오는 장면을 상상해 보세요.',
      soundAlike: '어피어(Appear)는 \'어? 피어(꽃이 피어)났네!\'처럼 없던 것이 생겨난 상황으로 기억하면 쉽습니다.',
      context: '단순히 물리적으로 보이는 것뿐만 아니라 \'~인 것 같다\'라는 추측의 의미로도 자주 쓰입니다.',
      synonymAntonym: '안개 속에서 나오는 emerge와 비슷하며, 시야에서 사라지는 vanish와는 반대됩니다.',
    }),
    {
      definition: 'to become visible or come into sight',
      synonyms: ['emerge', 'materialize', 'surface'],
      antonyms: ['disappear', 'vanish', 'fade'],
      exampleSentences: [
        { en: 'A rainbow appeared after the rain.', ko: '비가 온 뒤에 무지개가 나타났다.' },
        { en: 'She suddenly appeared at the door.', ko: '그녀가 갑자기 문 앞에 나타났다.' },
      ],
    }
  ),
  word('Arrange', '정리하다', 3, 'verb',
    ['흐트러뜨리다', '섞다', '뒤죽박죽', '해체하다', '무질서', '어지럽히다', '분산하다', '흩다', '무시하다', '방치하다'],
    tips({
      etymology: '라틴어 ad(~에)와 range(줄, 열)가 결합되어 \'특정한 줄에 맞춰 놓다\'라는 의미에서 유래했습니다.',
      visual: '도서관 사서가 책장에 흩어진 책들을 번호순으로 가지런히 정렬하는 모습을 상상해 보세요.',
      soundAlike: '음악의 \'편곡\'을 뜻하는 \'어레인지\'와 발음이 같으며, 음표를 조화롭게 배치하는 것과 일맥상통합니다.',
      context: '단순히 물건을 치우는 것뿐만 아니라, 회의 시간을 잡거나 여행 일정을 짜는 등 계획을 세울 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 체계화하는 organize와 비슷하며, 질서를 깨뜨리는 disarrange와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to put objects or tasks into a specific order, position, or plan',
      synonyms: ['organize', 'classify', 'marshal'],
      antonyms: ['disarrange', 'disturb', 'jumble'],
      exampleSentences: [
        { en: 'She arranged the flowers in a vase.', ko: '그녀는 꽃병에 꽃을 보기 좋게 꽂았다.' },
        { en: 'I arranged to meet him at the café.', ko: '나는 그와 카페에서 만나기로 약속을 잡았다.' },
      ],
    }
  ),
  word('Article', '기사, 물품', 3, 'noun',
    ['제목', '부록', '총론', '논문', '소설', '시', '대본', '편지', '보고서', '책'],
    tips({
      etymology: '라틴어 articulus(작은 마디)에서 유래하여 전체를 구성하는 개별적인 부분을 의미합니다.',
      visual: '신문 지면이 여러 개의 칸으로 나뉘어 각각의 독립된 글들이 배치된 모습을 떠올려 보세요.',
      soundAlike: '아티클은 잡지나 신문에서 흔히 볼 수 있는 \'기사\' 한 편을 가리키는 외래어로도 익숙합니다.',
      context: '언론의 보도 내용뿐만 아니라, 상점의 개별 물건이나 법전의 구체적인 조항을 가리킬 때도 사용됩니다.',
      synonymAntonym: '특정한 주제를 다루는 report와 유사하며, 여러 글을 묶은 collection과는 반대되는 개별 단위입니다.',
    }),
    {
      definition: 'A distinct piece of writing on a specific topic that forms an independent part of a publication.',
      synonyms: ['report', 'feature', 'column'],
      antonyms: ['book', 'anthology', 'collection'],
      exampleSentences: [
        { en: 'I read an interesting article about climate change.', ko: '나는 기후 변화에 관한 흥미로운 기사를 읽었다.' },
        { en: 'This article explains the new policy.', ko: '이 기사는 새로운 정책을 설명해 준다.' },
      ],
    }
  ),
  word('Attend', '참석하다', 3, 'verb',
    ['결석하다', '도망치다', '회피하다', '건너뛰다', '무시하다', '거절하다', '취소하다', '이탈하다', '떠나다', '방치하다'],
    tips({
      etymology: '라틴어 attendere에서 유래하며, ad(~로)와 tendere(뻗다)가 결합되어 마음을 특정 방향으로 뻗는다는 의미를 담고 있습니다.',
      visual: '강연장 맨 앞줄에 앉아 강연자의 말에 귀를 기울이며 필기하는 열정적인 청중을 상상해 보세요.',
      soundAlike: '군대나 학교에서 차렷을 뜻하는 \'Attention\'과 어근이 같아 주의를 집중해 자리에 있는 느낌을 줍니다.',
      context: '단순히 자리에 있는 것뿐만 아니라 학교를 다니거나 정기적인 모임에 나갈 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: 'be present와 유사하게 쓰이며, 자리를 비우는 miss나 skip과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to be present at a specific event, meeting, or location for a particular purpose',
      synonyms: ['visit', 'frequent', 'participate'],
      antonyms: ['miss', 'skip', 'abandon'],
      exampleSentences: [
        { en: 'Over 500 people attended the conference.', ko: '500명 이상의 사람들이 그 회의에 참석했다.' },
        { en: 'She attends classes every weekday.', ko: '그녀는 평일마다 수업에 출석한다.' },
      ],
    }
  ),
  word('Average', '평균', 3, 'noun',
    ['극단', '최고', '최저', '예외', '특이', '특별', '흔함', '드묾', '보통', '일반'],
    tips({
      etymology: '아랍어 awariya(손상된 상품의 손실 분담)에서 유래해 공평한 수치를 뜻하게 됐어요.',
      visual: '여러 개의 막대그래프 중간을 가로지르는 평평한 선을 상상하세요.',
      soundAlike: '야구에서 타자의 실력을 말할 때 \'에버리지\'가 높다고 표현해요.',
      context: '수학적 평균뿐만 아니라 \'보통 수준의\'라는 형용사로도 많이 쓰입니다.',
      synonymAntonym: 'mean과 같은 수학적 의미가 있고, extreme과는 반대됩니다.',
    }),
    {
      definition: 'The result obtained by adding several quantities together and then dividing this total by the number of quantities.',
      synonyms: ['mean', 'median', 'standard'],
      antonyms: ['extreme', 'exception', 'outlier'],
      exampleSentences: [
        { en: 'The average temperature in July is 25°C.', ko: '7월의 평균 기온은 25도이다.' },
        { en: 'Her grades are above average for the class.', ko: '그녀의 성적은 학급 평균 이상이다.' },
      ],
    }
  ),
  word('Aware', '알고 있는', 3, 'adjective',
    ['무지한', '모르는', '무관심한', '멍한', '부주의한', '수면 중', '의식 없는', '잊어버린', '눈치채지 못한', '어리석은'],
    tips({
      etymology: '고대 영어 gewær에서 유래하여 주변 상황을 주의 깊게 살피는 상태를 의미합니다.',
      visual: '어두운 밤길에서 주변의 작은 소리에도 귀를 쫑긋 세우고 경계하는 모습과 비슷합니다.',
      soundAlike: '어웨어니스(Awareness)라는 단어는 사회적 문제를 널리 알리는 캠페인 명칭에 자주 쓰입니다.',
      context: '단순히 지식으로 아는 것을 넘어 현재 상황이나 위험을 감각적으로 느끼고 있을 때 사용합니다.',
      synonymAntonym: 'conscious와는 의식이 깨어 있다는 점에서 비슷하고, 무지함을 뜻하는 ignorant와는 반대됩니다.',
    }),
    {
      definition: 'having knowledge or perception of a situation or fact',
      synonyms: ['conscious', 'mindful', 'cognizant'],
      antonyms: ['unaware', 'ignorant', 'oblivious'],
      exampleSentences: [
        { en: 'Are you aware of the risks involved?', ko: '수반되는 위험에 대해 알고 계신가요?' },
        { en: 'She was fully aware of what was happening.', ko: '그녀는 무슨 일이 일어나고 있는지 완전히 알고 있었다.' },
      ],
    }
  ),
  word('Balance', '균형', 3, 'noun',
    ['불균형', '기울음', '전도', '넘어짐', '불안정', '흔들림', '편향', '한쪽짐', '과잉', '부족'],
    tips({
      etymology: '라틴어 \'bi(둘)\'와 \'lanx(접시)\'가 결합되어 양쪽 접시의 무게가 똑같은 저울 상태를 의미합니다.',
      visual: '양팔 저울의 수평이 완벽하게 맞아 어느 한쪽으로도 기울지 않은 평온한 상태를 상상하세요.',
      soundAlike: '유명 운동화 브랜드 \'뉴발란스\'가 발의 편안함과 신체 수평을 맞춘다는 의미에서 유래했습니다.',
      context: '물리적인 평형 상태뿐만 아니라 \'워라밸\'처럼 시간이나 에너지를 적절히 배분하는 상황에 자주 쓰입니다.',
      synonymAntonym: 'Equilibrium과 유사하며, 한쪽으로 치우친 Imbalance와는 대조적인 개념입니다.',
    }),
    {
      definition: 'a state of stability where opposing forces or elements are equal in proportion or weight',
      synonyms: ['equilibrium', 'stability', 'poise'],
      antonyms: ['imbalance', 'instability', 'disproportion'],
      exampleSentences: [
        { en: 'It is important to maintain work-life balance.', ko: '일과 삶의 균형을 유지하는 것이 중요하다.' },
        { en: 'She lost her balance and fell.', ko: '그녀는 중심을 잃고 넘어졌다.' },
      ],
    }
  ),
  word('Basic', '기본적인', 3, 'adjective',
    ['고급의', '복잡한', '특별한', '특수한', '진보한', '난해한', '세련된', '정교한', '첨단의', '최신의'],
    tips({
      etymology: '라틴어 \'basis\'에서 유래하여 사물의 가장 아래쪽인 바닥이나 토대를 의미합니다.',
      visual: '건물을 올리기 전 땅을 평평하게 다지고 콘크리트를 붓는 기초 공사 현장을 상상하세요.',
      soundAlike: '의류 브랜드 \'베이직 하우스\'처럼 유행을 타지 않는 기본 아이템을 떠올리면 쉽습니다.',
      context: '어떤 기술이나 지식을 배울 때 가장 먼저 익혀야 하는 필수적인 첫 단계를 설명할 때 쓰입니다.',
      synonymAntonym: 'fundamental과 뜻이 통하며, 수준이 높은 advanced와는 반대되는 개념입니다.',
    }),
    {
      definition: 'forming the foundation or starting point',
      synonyms: ['fundamental', 'essential', 'elementary'],
      antonyms: ['advanced', 'complex', 'secondary'],
      exampleSentences: [
        { en: 'You need to learn the basic rules first.', ko: '먼저 기본적인 규칙들을 배워야 한다.' },
        { en: 'The course covers basic grammar and vocabulary.', ko: '이 과정은 기초 문법과 어휘를 다룬다.' },
      ],
    }
  ),
  word('Behave', '행동하다', 3, 'verb',
    ['비행하다', '버릇없이', '난폭히', '무례히', '반항하다', '불순종하다', '도망치다', '나쁘게', '거친', '막되게'],
    tips({
      etymology: '접두사 be-(철저히)와 have(가지다)가 결합하여 자기 자신을 잘 다스리고 유지한다는 의미에서 유래했습니다.',
      visual: '식당에서 소란을 피우지 않고 조용히 앉아 식사 예절을 지키는 아이를 상상해 보세요.',
      soundAlike: '명사형인 \'비헤이비어(Behavior)\'는 심리학이나 교육학에서 \'행동\'을 뜻하는 용어로 자주 쓰입니다.',
      context: '단순한 움직임보다는 사회적 규범이나 예의에 맞게 처신하는 상황에서 주로 쓰입니다.',
      synonymAntonym: '단순히 움직이는 act보다 격식을 갖춘 표현이며, 반대말인 misbehave는 무례한 행동을 뜻합니다.',
    }),
    {
      definition: 'to act or conduct oneself in a specified way, especially with respect to propriety and good manners',
      synonyms: ['act', 'function', 'operate'],
      antonyms: ['misbehave', 'rebel', 'disobey'],
      exampleSentences: [
        { en: 'The children behaved well at the party.', ko: '아이들이 파티에서 얌전하게 행동했다.' },
        { en: 'Please behave yourself in public.', ko: '공공장소에서는 예의 바르게 행동해 주세요.' },
      ],
    }
  ),
  word('Benefit', '이익', 3, 'noun',
    ['손해', '불이익', '해악', '피해', '비용', '지출', '낭비', '손실', '해', '부작용'],
    tips({
      etymology: '라틴어 \'bene(좋은)\'와 \'facere(하다)\'가 결합되어 \'좋은 일을 행함\' 또는 \'좋은 결과\'를 뜻하게 되었습니다.',
      visual: '회사에서 보너스 봉투를 받고 기뻐하며 입꼬리가 올라가는 직원의 모습을 떠올려 보세요.',
      soundAlike: '유명 화장품 브랜드 \'베네피트\'를 떠올리면 예뻐지는 \'이득\'을 얻는다는 이미지가 쉽게 연결됩니다.',
      context: '건강 보험, 정부 보조금, 혹은 운동을 통해 얻는 긍정적인 효과 등을 설명할 때 주로 쓰입니다.',
      synonymAntonym: '유리한 점을 뜻하는 advantage와 비슷하며, 해로운 상황을 뜻하는 harm과는 반대되는 개념입니다.',
    }),
    {
      definition: 'a helpful or good effect, or something intended to help',
      synonyms: ['advantage', 'profit', 'asset'],
      antonyms: ['disadvantage', 'detriment', 'drawback'],
      exampleSentences: [
        { en: 'The new tax law will be a significant benefit to small business owners.', ko: '새로운 세법은 소상공인들에게 상당한 이익이 될 것이다.' },
        { en: 'Regular meditation can bring the benefit of peace and mental clarity.', ko: '규칙적인 명상은 평온함과 정신적 명료함이라는 혜택을 가져다줄 수 있다.' },
      ],
    }
  ),
  word('Besides', '게다가', 3, 'preposition',
    ['단지', '오직', '그만', '대신', '반대로', '그러나', '따라서', '결과적으로', '그래서', '그러므로'],
    tips({
      etymology: 'be(옆에)와 side(측면)가 결합된 형태에 s가 붙어 \'옆에 하나 더\'라는 의미가 확장되었습니다.',
      visual: '이미 꽉 찬 상자 옆에 물건 하나를 더 얹어놓는 장면을 상상해 보세요.',
      soundAlike: '비사이드(Beside)는 단순히 위치상 \'옆에\'를 뜻하지만, s가 붙으면 내용이 추가되는 \'게다가\'가 됩니다.',
      context: '이미 언급한 사실에 더해 새로운 정보를 덧붙이거나 예외를 둘 때 자주 쓰입니다.',
      synonymAntonym: 'moreover와 유사하게 정보를 추가하며, 반대로 무언가를 제외할 때는 excluding을 씁니다.',
    }),
    {
      definition: 'in addition to or apart from something',
      synonyms: ['moreover', 'furthermore', 'additionally'],
      antonyms: ['excluding', 'except', 'instead'],
      exampleSentences: [
        { en: 'Besides English, she speaks French and Spanish.', ko: '영어 외에도 그녀는 프랑스어와 스페인어를 할 줄 안다.' },
        { en: 'Besides being tired, I also feel hungry.', ko: '피곤한 것 외에도 배가 고프다.' },
      ],
    }
  ),
  word('Blame', '비난하다', 3, 'verb',
    ['칭찬하다', '변호하다', '방어하다', '옹호하다', '감사하다', '인정하다', '칭송하다', '찬양하다', '면책하다', '용서하다'],
    tips({
      etymology: '라틴어 blasphemare에서 유래하여 신성모독이나 비방을 통해 잘못을 남에게 돌리는 행위를 뜻하게 되었습니다.',
      visual: '깨진 접시 앞에서 두 사람이 서로를 검지손가락으로 가리키며 화를 내는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'불레임\'과 유사한데, 잘못의 불씨를 상대에게 \'임\'무처럼 떠넘긴다고 기억하면 쉽습니다.',
      context: '사고가 나거나 계획이 실패했을 때 그 원인이 특정 인물에게 있다고 지목할 때 주로 사용합니다.',
      synonymAntonym: '누군가를 몰아세우는 accuse와 비슷하며, 훌륭하다고 치켜세우는 praise와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to say or think that a person or thing is responsible for something bad that has happened',
      synonyms: ['accuse', 'reproach', 'condemn'],
      antonyms: ['praise', 'commend', 'exonerate'],
      exampleSentences: [
        { en: 'Don\'t blame me for your mistake.', ko: '너의 실수를 내 탓으로 돌리지 마.' },
        { en: 'She always blames others for her problems.', ko: '그녀는 항상 자신의 문제를 남 탓으로 돌린다.' },
      ],
    }
  ),
  word('Block', '막다', 3, 'verb',
    ['열다', '통과시키다', '허용하다', '돕다', '촉진하다', '지원하다', '개방하다', '해제하다', '해방하다', '통과하다'],
    tips({
      etymology: '네덜란드어 blok(나무 덩어리)에서 유래하여 길을 가로막는 커다란 물체를 의미하게 되었습니다.',
      visual: '도로 한복판에 커다란 바위가 놓여 있어 차들이 더 이상 앞으로 나아가지 못하는 장면을 상상해 보세요.',
      soundAlike: '배구 경기에서 상대방의 강력한 스파이크를 네트 위에서 손으로 막아내는 \'블로킹\'을 떠올리면 쉽습니다.',
      context: '물리적인 통로를 막는 상황뿐만 아니라 시야를 가리거나 이메일, 전화번호를 차단할 때도 자주 쓰입니다.',
      synonymAntonym: 'obstruct와 의미가 통하며, 막힌 것을 치워주는 clear와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to obstruct or prevent passage or progress',
      synonyms: ['obstruct', 'hinder', 'bar'],
      antonyms: ['clear', 'open', 'facilitate'],
      exampleSentences: [
        { en: 'A fallen tree blocked the road.', ko: '쓰러진 나무가 도로를 가로막았다.' },
        { en: 'The firewall blocks unauthorized access.', ko: '방화벽이 승인되지 않은 접근을 차단한다.' },
      ],
    }
  ),
  word('Bomb', '폭탄', 3, 'noun',
    ['미사일', '로켓', '화살', '창', '검', '방패', '헬멧', '갑옷', '무기', '총'],
    tips({
      etymology: '그리스어 bombos(웅웅거리는 소리)에서 유래해 폭발할 때의 큰 소리를 뜻하게 되었습니다.',
      visual: '심지에 불이 붙어 타들어 가는 검은색 둥근 구체 모양의 화약을 상상해 보세요.',
      soundAlike: '폭탄이 터질 때의 웅장한 소리와 \'밤\'이라는 발음의 울림이 유사합니다.',
      context: '군사적인 파괴 장치뿐만 아니라, 영화나 공연이 흥행에 참패했을 때도 비유적으로 사용합니다.',
      synonymAntonym: 'explosive와 유사한 의미를 지니며, 방어 수단인 shield와는 반대되는 개념입니다.',
    }),
    {
      definition: 'an explosive weapon designed to cause destruction',
      synonyms: ['explosive', 'missile', 'shell'],
      antonyms: ['shield', 'protection', 'safeguard'],
      exampleSentences: [
        { en: 'The building was destroyed by a bomb.', ko: '그 건물은 폭탄에 의해 파괴되었다.' },
        { en: 'The bomb exploded at midnight.', ko: '폭탄은 자정에 폭발했다.' },
      ],
    }
  ),
  word('Borrow', '빌리다', 3, 'verb',
    ['빌려주다', '돌려주다', '갚다', '갚아주다', '반환하다', '기부하다', '선물하다', '증여하다', '보관하다', '소유하다'],
    tips({
      etymology: '고대 영어 borgian에서 유래되었으며, 원래는 무언가를 가져오기 위해 담보를 제공한다는 의미를 담고 있습니다.',
      visual: '도서관 선반에서 책을 꺼내어 자신의 가방에 조심스럽게 넣는 학생의 모습을 떠올려 보세요.',
      soundAlike: '\'보로우\'는 필요한 물건을 \'보러\' 가서 잠시 내 것으로 가져오는 상황과 발음이 비슷합니다.',
      context: '나중에 반드시 돌려준다는 전제하에 타인의 물건이나 돈을 일시적으로 사용할 때 주로 사용합니다.',
      synonymAntonym: '무언가를 가져오는 행위이며, 반대로 남에게 주는 lend와는 방향이 정반대임을 기억하세요.',
    }),
    {
      definition: 'to take and use something that belongs to someone else with the intention of returning it later',
      synonyms: ['loan', 'hire', 'take'],
      antonyms: ['lend', 'return', 'give'],
      exampleSentences: [
        { en: 'Can I borrow your pen for a moment?', ko: '잠깐 펜 좀 빌릴 수 있을까?' },
        { en: 'She borrowed a large sum of money from the bank to start her business.', ko: '그녀는 사업을 시작하기 위해 은행에서 거액의 돈을 빌렸다.' },
      ],
    }
  ),
  word('Bow', '인사하다', 3, 'verb',
    ['서다', '고개 들다', '등지다', '무시하다', '거절하다', '돌아서다', '얼굴 숙이다', '무례히', '지나가다', '먹다'],
    tips({
      etymology: '고대 영어 bugan(굽히다)에서 유래하여 몸을 숙이는 동작을 뜻해요.',
      visual: '공연이 끝난 뒤 지휘자가 관객을 향해 허리를 깊숙이 숙이는 장면입니다.',
      soundAlike: '바이올린을 켜는 \'활\'도 똑같이 bow라고 부릅니다.',
      context: '인사할 때뿐만 아니라 항복하거나 굴복할 때도 비유적으로 씁니다.',
      synonymAntonym: 'bend와 비슷하며, straighten(똑바로 펴다)과 반대입니다.',
    }),
    {
      definition: 'to bend the body or head as a sign of respect or greeting',
      synonyms: ['bend', 'nod', 'curtsy'],
      antonyms: ['straighten', 'rise', 'defy'],
      exampleSentences: [
        { en: 'The actors bowed to the audience.', ko: '배우들이 관객들에게 절을 했다.' },
        { en: 'In Japan, people bow when greeting each other.', ko: '일본에서는 사람들이 인사할 때 고개를 숙인다.' },
      ],
    }
  ),
  word('Branch', '가지', 3, 'noun',
    ['뿌리', '줄기', '잎', '꽃', '열매', '씨', '껍질', '나무', '숲', '정원'],
    tips({
      etymology: '라틴어 branca(발바닥)에서 유래해 나뭇가지가 뻗어 나가는 모양을 뜻하게 되었습니다.',
      visual: '커다란 나무 몸통에서 옆으로 길게 뻗어 나온 작은 나무 막대기들을 상상해 보세요.',
      soundAlike: '은행이나 회사의 \'지점\'을 말할 때도 외래어로 브랜치라고 자주 부릅니다.',
      context: '식물의 가지뿐만 아니라 학문의 세부 분야나 조직의 분과를 나타낼 때도 널리 쓰입니다.',
      synonymAntonym: 'limb, bough와 유의어이며, 나무의 중심인 trunk(몸통)와 대비되는 개념입니다.',
    }),
    {
      definition: 'A part of a tree that grows out from the main central stem',
      synonyms: ['limb', 'bough', 'offshoot'],
      antonyms: ['trunk', 'root', 'main'],
      exampleSentences: [
        { en: 'A bird sat on a branch of the tree.', ko: '새 한 마리가 나뭇가지에 앉아 있었다.' },
        { en: 'The bank has opened a new branch downtown.', ko: '그 은행은 시내에 새로운 지점을 열었다.' },
      ],
    }
  ),
  word('Bunch', '한 묶음', 3, 'noun',
    ['낱개', '한 개', '조금', '조각', '일부', '분리', '흩어짐', '단독', '홀로', '개별'],
    tips({
      etymology: '중세 영어에서 유래하여 여러 개가 툭 튀어나와 뭉쳐 있는 모양을 나타냅니다.',
      visual: '포도알들이 줄기에 주렁주렁 매달려 한데 모여 있는 포도 송이를 상상해 보세요.',
      soundAlike: '한국어 단어 \'뭉치\'와 발음이 비슷하여 무언가 뭉쳐 있는 느낌을 줍니다.',
      context: '꽃다발, 열쇠 꾸러미, 바나나 송이처럼 같은 종류가 묶여 있는 대상에 주로 쓰입니다.',
      synonymAntonym: 'cluster나 bundle은 뭉쳐 있는 상태를, individual은 낱개의 상태를 뜻합니다.',
    }),
    {
      definition: 'A number of things of the same kind fastened or grouped together',
      synonyms: ['cluster', 'bundle', 'collection'],
      antonyms: ['individual', 'single', 'fragment'],
      exampleSentences: [
        { en: 'She bought a bunch of grapes.', ko: '그녀는 포도 한 송이를 샀다.' },
        { en: 'He gave her a bunch of flowers.', ko: '그는 그녀에게 꽃 한 다발을 주었다.' },
      ],
    }
  ),
  word('Burst', '터지다', 3, 'verb',
    ['수리하다', '봉합하다', '막다', '멈추다', '완전한', '온전한', '보존하다', '유지하다', '천천히', '조용히'],
    tips({
      etymology: '고대 영어 berstan에서 유래하여 내부 압력을 견디지 못하고 갑자기 파괴되는 현상을 뜻합니다.',
      visual: '팽팽하게 부풀어 오른 풍선이 바늘 끝에 닿는 순간 사방으로 조각나며 흩어지는 모습을 상상하세요.',
      soundAlike: '버스트 - 풍선이 터지며 공기가 \'버섯\' 구름처럼 확 퍼져나가는 소리와 연결해 보세요.',
      context: '물리적인 파손뿐만 아니라 울음, 웃음, 분노 같은 감정이 일시에 쏟아져 나올 때도 자주 사용됩니다.',
      synonymAntonym: '사방으로 튀는 explode와 유의어이며, 틈을 메우고 고치는 repair와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to break open or apart suddenly and violently, usually due to internal pressure',
      synonyms: ['explode', 'rupture', 'shatter'],
      antonyms: ['mend', 'repair', 'seal'],
      exampleSentences: [
        { en: 'The balloon will burst if you keep blowing air into it.', ko: '공기를 계속 불어넣으면 풍선이 터질 것이다.' },
        { en: 'She burst into tears after holding back her emotions all day.', ko: '그녀는 하루 종일 감정을 억누르다가 울음을 터뜨렸다.' },
      ],
    }
  ),
  word('Cable', '케이블', 3, 'noun',
    ['안테나', '수신기', '송신기', '연결', '무선', '신호', '전파', '배터리', '충전기', '전원'],
    tips({
      etymology: '라틴어 capulum(잡는 끈)에서 유래하여 무언가를 묶거나 잇는 선을 뜻합니다.',
      visual: '컴퓨터 뒷면에 복잡하게 얽혀 있는 검은색 전선들을 상상해 보세요.',
      soundAlike: '케이블 - \'케\'이스를 \'이\'어서 \'블\'러그에 꽂는 선이라고 외워보세요.',
      context: '데이터를 전송하거나 전기를 공급하는 굵은 선을 말할 때 사용합니다.',
      synonymAntonym: '비슷한 말로는 wire가 있고, 무선을 뜻하는 wireless와 대비됩니다.',
    }),
    {
      definition: 'A thick rope or wire used for tying, supporting, or transmitting electricity or data signals.',
      synonyms: ['wire', 'cord', 'line'],
      antonyms: ['wireless', 'radio', 'wifi'],
      exampleSentences: [
        { en: 'The cable connects the computer to the monitor.', ko: '케이블이 컴퓨터와 모니터를 연결한다.' },
        { en: 'We need a longer cable for the phone charger.', ko: '충전기에 더 긴 케이블이 필요하다.' },
      ],
    }
  ),
  word('Calculate', '계산하다', 3, 'verb',
    ['추측하다', '대략하다', '어림하다', '틀리다', '잘못하다', '무시하다', '추측', '대충', '임의', '짐작'],
    tips({
      etymology: '라틴어 calculus(작은 돌)에서 유래했는데, 고대에 작은 돌을 이용해 수를 세던 방식에서 시작되었습니다.',
      visual: '계산기 화면에 숫자가 하나씩 찍히며 정확한 결과값이 도출되는 장면을 상상해 보세요.',
      soundAlike: '캘큘레이트 - \'결\'과를 \'내\'기 위해 숫자를 \'이\'리저리 조합하는 소리와 비슷합니다.',
      context: '수학적인 연산을 통해 정답을 도출하거나 예산의 총합을 구할 때 주로 사용합니다.',
      synonymAntonym: '정밀하게 수치를 내는 compute와 유사하며, 근거 없이 추측하는 guess와는 대조적입니다.',
    }),
    {
      definition: 'to determine a number or amount using mathematical operations',
      synonyms: ['compute', 'figure', 'enumerate'],
      antonyms: ['guess', 'estimate', 'miscalculate'],
      exampleSentences: [
        { en: 'Please calculate the total cost of all the items.', ko: '모든 물품의 총 비용을 계산해 주세요.' },
        { en: 'Scientists calculated the exact distance to the moon.', ko: '과학자들이 달까지의 정확한 거리를 계산했다.' },
      ],
    }
  ),
  word('Calendar', '달력', 3, 'noun',
    ['시계', '타이머', '알람', '일정', '기념일', '시간표', '스케줄', '날짜', '요일', '월'],
    tips({
      etymology: '라틴어 kalendae에서 유래했으며, 고대 로마에서 매달의 첫날을 의미하던 단어가 날짜를 기록하는 체계로 발전했습니다.',
      visual: '숫자가 적힌 칸들이 바둑판처럼 배열되어 있고, 중요한 날에 동그라미가 쳐진 종이를 상상해 보세요.',
      soundAlike: '캘린더 - \'캘\' 수 있는 \'날\'들이 \'더\' 많이 적혀 있는 종이라고 외우면 쉽습니다.',
      context: '친구와 약속을 잡거나 시험 기간을 확인할 때 가장 먼저 들여다보는 도구입니다.',
      synonymAntonym: '일정을 관리하는 schedule과 비슷하지만, 시간을 측정하는 clock과는 쓰임새가 다릅니다.',
    }),
    {
      definition: 'A system or chart that organizes time into days, weeks, and months for tracking dates and events.',
      synonyms: ['almanac', 'timetable', 'agenda'],
      antonyms: ['clock', 'watch', 'stopwatch'],
      exampleSentences: [
        { en: 'I need to check the calendar to see when the holiday starts.', ko: '휴일이 언제 시작되는지 달력을 확인해야 한다.' },
        { en: 'She marked her graduation day with a red circle on the calendar.', ko: '그녀는 달력에 졸업 날짜를 빨간색 동그라미로 표시했다.' },
      ],
    }
  ),
  word('Campaign', '운동, 캠페인', 3, 'noun',
    ['휴전', '평화', '무행동', '미동', '침묵', '정지', '중단', '포기', '해산', '종료'],
    tips({
      etymology: '라틴어 campus(들판)에서 유래하여 원래 탁 트인 들판에서 벌이는 군사 작전을 의미했습니다.',
      visual: '선거철에 어깨띠를 두르고 거리에서 시민들에게 지지를 호소하는 사람들의 행렬을 상상해 보세요.',
      soundAlike: '캠프(Camp)를 차리고 페이스(Paign)를 유지하며 목표를 향해 나아가는 과정입니다.',
      context: '단순한 일회성 행동이 아니라 환경 보호나 정치적 당선처럼 명확한 목적을 가진 조직적인 활동에 쓰입니다.',
      synonymAntonym: '사회적 움직임인 movement와 유사하며, 아무런 조치를 취하지 않는 inaction과는 대조적입니다.',
    }),
    {
      definition: 'an organized series of activities or efforts to achieve a goal',
      synonyms: ['drive', 'movement', 'operation'],
      antonyms: ['inaction', 'stoppage', 'halt'],
      exampleSentences: [
        { en: 'The charity started a campaign to raise money for the homeless.', ko: '자선 단체가 노숙자를 위한 모금 캠페인을 시작했다.' },
        { en: 'The election campaign lasted for three months.', ko: '선거 운동은 3개월 동안 지속되었다.' },
      ],
    }
  ),
  word('Cancer', '암', 3, 'noun',
    ['감기', '독감', '두통', '위염', '당뇨', '고혈압', '심장병', '간염', '폐렴', '천식'],
    tips({
      etymology: '라틴어 cancer(게)에서 유래했는데, 종양의 혈관이 게 다리처럼 뻗어 나가는 모습에서 붙여진 이름입니다.',
      visual: '현미경으로 보았을 때 무분별하게 증식하며 주변으로 퍼져나가는 세포 덩어리를 상상해 보세요.',
      soundAlike: '캔서 - \'캔\'에 든 \'서\'늘한 독처럼 몸속 구석구석으로 퍼지는 무서운 질병이라고 기억하세요.',
      context: '의학 드라마에서 환자가 정밀 검사 후 악성 종양 판정을 받는 심각한 상황에서 자주 등장합니다.',
      synonymAntonym: '의학적 용어인 malignancy와 유사하며, 신체가 아주 온전한 상태인 health와 대조됩니다.',
    }),
    {
      definition: 'A serious disease caused by an uncontrolled division of abnormal cells in a part of the body.',
      synonyms: ['malignancy', 'tumor', 'carcinoma'],
      antonyms: ['health', 'wellness', 'fitness'],
      exampleSentences: [
        { en: 'Early detection of cancer significantly increases the chances of successful treatment.', ko: '암을 조기에 발견하는 것은 성공적인 치료 가능성을 크게 높여준다.' },
        { en: 'Scientists are working tirelessly to find a cure for cancer.', ko: '과학자들은 암 치료법을 찾기 위해 끊임없이 노력하고 있다.' },
      ],
    }
  ),
  word('Carbon', '탄소', 3, 'noun',
    ['수소', '산소', '질소', '금', '은', '철', '구리', '물', '공기', '대기'],
    tips({
      etymology: '라틴어 carbo(숯)에서 유래하여 모든 생명체의 기본이 되는 원소를 뜻합니다.',
      visual: '검은 숯덩이나 반짝이는 다이아몬드를 떠올려 보세요. 둘 다 이 성분입니다.',
      soundAlike: '카본 - \'카\'만(까만) \'본\'래의 색을 가진 숯을 생각하세요.',
      context: '이산화탄소 배출이나 유기 화합물을 설명할 때 자주 등장합니다.',
      synonymAntonym: '원소 기호 C로 표기하며, 산소나 수소와 결합하여 다양한 화합물을 만듭니다.',
    }),
    {
      definition: 'a chemical element that is the basis of all organic compounds',
      synonyms: ['element', 'graphite', 'charcoal'],
      antonyms: ['oxygen', 'hydrogen', 'nitrogen'],
      exampleSentences: [
        { en: 'Carbon is the foundation of all living things.', ko: '탄소는 모든 생명체의 기초이다.' },
        { en: 'Reducing carbon emissions is very important for the earth.', ko: '탄소 배출을 줄이는 것은 지구에 매우 중요하다.' },
      ],
    }
  ),
  word('Career', '경력', 3, 'noun',
    ['취미', '여가', '휴식', '은퇴', '실업', '공백', '무직', '학생', '신입', '초보'],
    tips({
      etymology: '라틴어 carrus(수레)에서 유래하여 인생이라는 길을 달려가는 수레의 궤적을 뜻합니다.',
      visual: '사다리를 한 칸씩 올라가며 높은 곳에 도달하는 직장인의 모습을 그려보세요.',
      soundAlike: '커리어 - \'커\'다란 \'이\'력을 \'어\'어가며 쌓아가는 전문적인 길입니다.',
      context: '단순한 일회성 아르바이트가 아닌, 평생에 걸쳐 전문성을 쌓아가는 직업적 여정을 의미합니다.',
      synonymAntonym: '전문직을 뜻하는 profession과 유사하며, 일자리가 없는 unemployment와 대조됩니다.',
    }),
    {
      definition: 'An occupation undertaken for a significant period of a person\'s life and with opportunities for progress.',
      synonyms: ['profession', 'vocation', 'calling'],
      antonyms: ['unemployment', 'hobby', 'avocation'],
      exampleSentences: [
        { en: 'She is looking for opportunities to advance her career in marketing.', ko: '그녀는 마케팅 분야에서 경력을 발전시킬 기회를 찾고 있다.' },
        { en: 'Choosing a career requires careful consideration of one\'s talents.', ko: '직업을 선택하는 것은 개인의 재능에 대한 신중한 고민이 필요하다.' },
      ],
    }
  ),
  word('Celebrate', '축하하다', 3, 'verb',
    ['슬퍼하다', '애도하다', '비난하다', '무시하다', '지나가다', '냉담하다', '무관심하다', '우울하다', '한탄하다', '거절하다'],
    tips({
      etymology: '라틴어 celebrare에서 유래했으며 본래 \'사람들이 많이 모이다\'라는 의미에서 축제의 의미로 확장되었습니다.',
      visual: '화려한 폭죽이 터지고 사람들이 웃으며 샴페인 잔을 부딪치는 파티 장면을 상상해 보세요.',
      soundAlike: '\'셀러브리티(Celebrity)\'들이 레드카펫에서 화려하게 축하받는 모습을 연상하면 기억하기 쉽습니다.',
      context: '생일, 기념일, 우승과 같은 경사스러운 사건을 공식적으로 인정하고 즐길 때 주로 사용합니다.',
      synonymAntonym: '행사를 치르는 observe와 유사하며, 죽음을 슬퍼하는 mourn과는 정반대의 감정을 나타냅니다.',
    }),
    {
      definition: 'To perform a public or private ritual to mark a happy day, event, or period of time.',
      synonyms: ['commemorate', 'rejoice', 'observe'],
      antonyms: ['mourn', 'grieve', 'lament'],
      exampleSentences: [
        { en: 'The entire city gathered to celebrate the team\'s championship victory.', ko: '팀의 우승을 축하하기 위해 도시 전체가 모였다.' },
        { en: 'How do you plan to celebrate your twentieth wedding anniversary?', ko: '결혼 20주년을 어떻게 축하할 계획인가요?' },
      ],
    }
  ),
  word('Ceremony', '의식', 3, 'noun',
    ['일상', '무례', '생략', '간소화', '비공식', '쉬운', '편한', '무작위', '자유', '휴식'],
    tips({
      etymology: '라틴어 caerimonia에서 유래하여 신성한 종교적 의례나 격식을 갖춘 절차를 뜻합니다.',
      visual: '졸업식에서 학사모를 던지거나 결혼식장에서 신랑 신부가 행진하는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '세러모니 - \'세\'상의 \'러\'브(사랑)를 \'모\'두에게 \'니\'(이)제 알리는 공식 행사라고 외워보세요.',
      context: '결혼식, 졸업식, 시상식처럼 정해진 규칙과 순서에 따라 진행되는 모든 공식적인 행사에 쓰입니다.',
      synonymAntonym: '정해진 절차인 ritual과 유사하며, 격식에 얽매이지 않는 informality와 반대되는 개념입니다.',
    }),
    {
      definition: 'a formal event performed on a special occasion',
      synonyms: ['ritual', 'rite', 'observance'],
      antonyms: ['informality', 'casualness', 'neglect'],
      exampleSentences: [
        { en: 'The award ceremony will be held next week.', ko: '시상식이 다음 주에 열릴 예정이다.' },
        { en: 'The wedding ceremony was very beautiful and touching.', ko: '결혼식은 매우 아름답고 감동적이었다.' },
      ],
    }
  ),
  word('Chapter', '장', 3, 'noun',
    ['머리말', '부록', '찾아보기', '표지', '페이지', '절', '문단', '문장', '단어', '글자'],
    tips({
      etymology: '라틴어 capitulum(작은 머리)에서 유래하여 책의 주요 머리 부분을 뜻합니다.',
      visual: '책을 펼쳤을 때 크게 적힌 숫자와 제목이 있는 첫 페이지를 떠올려 보세요.',
      soundAlike: '챕터 - \'책\'의 \'터\'를 잡고 내용을 나누어 놓은 부분입니다.',
      context: '책의 내용을 주제별로 나눈 단위나, 인생의 한 단계를 비유적으로 표현할 때 씁니다.',
      synonymAntonym: '부분인 section과 비슷하며, 책 전체인 whole book과 대비됩니다.',
    }),
    {
      definition: 'a main division of a book, typically with a number or title',
      synonyms: ['section', 'part', 'segment'],
      antonyms: ['whole', 'entirety', 'preface'],
      exampleSentences: [
        { en: 'Please read the fifth chapter of the book for class.', ko: '수업을 위해 책의 다섯 번째 장을 읽어 오세요.' },
        { en: 'This chapter of the book explains the history of the war.', ko: '책의 이 장은 전쟁의 역사를 설명한다.' },
      ],
    }
  ),
  word('Character', '성격', 3, 'noun',
    ['외모', '몸매', '얼굴', '신장', '체중', '의상', '머리모양', '행위', '습관', '버릇'],
    tips({
      etymology: '그리스어 kharakter(새겨진 도구)에서 유래하여 사람의 내면에 깊이 새겨진 고유한 성질을 의미합니다.',
      visual: '돌에 새겨진 문양처럼 쉽게 변하지 않는 한 사람의 정직한 내면과 도덕성을 떠올려 보세요.',
      soundAlike: '캐릭터 - \'캐\'면 \'캐\'수록 나오는 그 사람만의 독특한 \'터\'전(내면)이라고 기억하세요.',
      context: '개인의 도덕적 성품이나 기질을 뜻할 뿐만 아니라 소설, 영화 속 등장인물을 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '개별적인 특성인 personality와 유사하며, 겉으로 드러나는 모습인 appearance와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the mental and moral qualities that make a person unique',
      synonyms: ['personality', 'nature', 'temperament'],
      antonyms: ['appearance', 'physique', 'exterior'],
      exampleSentences: [
        { en: 'She is a person of very strong and brave character.', ko: '그녀는 매우 강하고 용감한 성격을 가진 사람이다.' },
        { en: 'The main character in the movie was very funny.', ko: '영화 속 주인공 캐릭터는 매우 재미있었다.' },
      ],
    }
  ),
  word('Chart', '차트', 3, 'noun',
    ['글', '문장', '사진', '도면', '설명', '서술', '이야기', '논문', '소설', '수필'],
    tips({
      etymology: '라틴어 charta(종이)에서 유래하여 정보를 한눈에 보게 정리한 종이를 뜻합니다.',
      visual: '복잡한 숫자 대신 막대기나 원 모양으로 그려진 그래프를 떠올려 보세요.',
      soundAlike: '차트 - \'차\'곡차곡 \'트\'별한 정보를 표로 정리한 것입니다.',
      context: '데이터의 변화를 시각적으로 보여주거나 순위를 매긴 목록을 말할 때 씁니다.',
      synonymAntonym: '도표인 graph와 비슷하며, 긴 글인 text와 대조됩니다.',
    }),
    {
      definition: 'a sheet of information in the form of a graph or table',
      synonyms: ['graph', 'diagram', 'table'],
      antonyms: ['text', 'prose', 'narrative'],
      exampleSentences: [
        { en: 'The chart shows how our sales grew this year.', ko: '이 차트는 올해 매출이 어떻게 성장했는지 보여준다.' },
        { en: 'Look at the chart to see the results.', ko: '결과를 보려면 차트를 확인하세요.' },
      ],
    }
  ),
  word('Chemical', '화학 물질', 3, 'noun',
    ['물리', '생물', '지질', '천문', '수학', '자연', '유기', '무기', '원소', '화합물'],
    tips({
      etymology: '연금술을 뜻하는 alchemy에서 유래하여 물질의 성질과 변화를 다루는 단어가 되었습니다.',
      visual: '실험실에서 흰 가운을 입고 비커에 담긴 투명하거나 유색의 액체를 섞는 장면을 떠올려 보세요.',
      soundAlike: '케미컬 - \'케미\'가 잘 맞는 \'컬\'러풀한 용액들을 섞어 새로운 물질을 만드는 과정입니다.',
      context: '일상에서 흔히 쓰이는 세제, 살충제, 의약품 등 인공적으로 합성된 모든 물질을 포함합니다.',
      synonymAntonym: '일반적인 물질을 뜻하는 substance와 유사하며, 가공되지 않은 natural과 반대됩니다.',
    }),
    {
      definition: 'a distinct substance that has been purified or prepared, especially artificially',
      synonyms: ['substance', 'compound', 'element'],
      antonyms: ['natural', 'organic', 'biological'],
      exampleSentences: [
        { en: 'The lab technician analyzed the unknown chemical to identify its properties.', ko: '실험실 기술자는 미지의 화학 물질의 성질을 확인하기 위해 분석했다.' },
        { en: 'Farmers are trying to reduce the use of harmful chemicals on their crops.', ko: '농부들은 농작물에 사용하는 유해 화학 물질의 사용을 줄이려 노력하고 있다.' },
      ],
    }
  ),
  word('Citizen', '시민', 3, 'noun',
    ['외국인', '이민자', '난민', '왕', '귀족', '노예', '군인', '피난민', '무국적', '여행자'],
    tips({
      etymology: '라틴어 civitas(도시)에서 유래하여 도시에 거주하며 권리를 가진 사람을 의미합니다.',
      visual: '투표소에서 투표용지를 넣으며 권리를 행사하는 당당한 유권자의 모습을 상상하세요.',
      soundAlike: '시티(City)에 사는 즌(Zen/사람)으로 기억하면 도시 구성원이라는 의미가 쉽게 와닿습니다.',
      context: '단순히 거주하는 사람을 넘어 법적인 권리와 의무를 동시에 지닌 국가 구성원을 뜻할 때 주로 쓰입니다.',
      synonymAntonym: '거주자인 resident와 유사하지만 법적 지위가 강조되며, 외부인인 foreigner와 대조됩니다.',
    }),
    {
      definition: 'a person who is a legally recognized member of a particular country or state',
      synonyms: ['national', 'subject', 'inhabitant'],
      antonyms: ['foreigner', 'alien', 'immigrant'],
      exampleSentences: [
        { en: 'Every citizen has the right to vote in the election.', ko: '모든 시민은 선거에서 투표할 권리가 있다.' },
        { en: 'He officially became a citizen of this country after the ceremony.', ko: '그는 의식을 마친 후 공식적으로 이 나라의 시민이 되었다.' },
      ],
    }
  ),
  word('Claim', '주장하다', 3, 'verb',
    ['부인하다', '거절하다', '포기하다', '양보하다', '인정하다', '동의하다', '수용하다', '받아들이다', '승인하다', '허락하다'],
    tips({
      etymology: '라틴어 clamare(외치다)에서 유래하여 자신의 권리를 큰 소리로 말함을 뜻합니다.',
      visual: '분실물 센터에서 \'이건 제 물건이에요!\'라고 손을 번쩍 들며 말하는 사람을 상상해 보세요.',
      soundAlike: '클레임 - \'클\'게(크게) \'레\'알(진짜) 내 것이라고 \'임\'팩트 있게 말하는 상황입니다.',
      context: '확실한 증거가 없더라도 사실이라고 강하게 말하거나, 당연한 권리로서 무언가를 요구할 때 사용합니다.',
      synonymAntonym: '강하게 단언하는 assert와 비슷하며, 사실이 아니라고 부정하는 deny와 반대됩니다.',
    }),
    {
      definition: 'to state that something is true or is a fact, often without providing evidence or proof',
      synonyms: ['assert', 'declare', 'maintain'],
      antonyms: ['deny', 'reject', 'disclaim'],
      exampleSentences: [
        { en: 'He claims that he was not present at the scene of the crime.', ko: '그는 범죄 현장에 자신이 없었다고 주장한다.' },
        { en: 'You must present your ticket to claim your lost luggage at the counter.', ko: '카운터에서 잃어버린 수하물을 찾으려면 티켓을 제시해야 한다.' },
      ],
    }
  ),
  word('Climate', '기후', 3, 'noun',
    ['날씨', '온도', '습도', '바람', '비', '눈', '폭풍', '일기', '대기', '환경'],
    tips({
      etymology: '그리스어 klima(기울기)에서 유래했으며, 지구가 기울어진 각도에 따라 태양열을 받는 양이 달라져 지역별 기후가 결정된다는 의미를 담고 있습니다.',
      visual: '지구본 위에서 적도의 뜨거운 태양과 북극의 하얀 얼음층이 수만 년 동안 유지되는 모습을 상상해 보세요.',
      soundAlike: '클라이밋 - \'클\'나게(큰일나게) \'라이\'징(상승)하는 지구의 평균 온도를 떠올리면 기억하기 쉽습니다.',
      context: '잠깐 비가 오는 \'weather\'와 달리, 수십 년 동안 반복되는 그 지역만의 고유한 기상 특징을 말할 때 사용합니다.',
      synonymAntonym: '장기적인 기상 상태를 뜻하며, 일시적인 기상 변화나 예보와는 대조적인 개념으로 쓰입니다.',
    }),
    {
      definition: 'The general weather conditions prevailing in an area over a long period of time.',
      synonyms: ['meteorological conditions', 'weather patterns', 'clime'],
      antonyms: ['daily weather', 'short-term forecast', 'temporary atmosphere'],
      exampleSentences: [
        { en: 'The Mediterranean region is famous for its mild and sunny climate.', ko: '지중해 지역은 온화하고 화창한 기후로 유명하다.' },
        { en: 'Global warming is causing a significant shift in the world\'s climate.', ko: '지구 온난화는 전 세계 기후에 중대한 변화를 일으키고 있다.' },
      ],
    }
  ),
  word('Combine', '결합하다', 3, 'verb',
    ['분리하다', '나누다', '갈라놓다', '해체하다', '분해하다', '흩뜨리다', '해산하다', '격리하다', '차단하다', '단절하다'],
    tips({
      etymology: '라틴어 com(함께)과 bini(둘씩)가 결합하여 두 요소를 하나로 묶는다는 의미에서 유래되었습니다.',
      visual: '서로 다른 색깔의 찰흙 두 덩어리를 손으로 꾹 눌러 하나의 커다란 덩어리로 만드는 장면을 떠올려 보세요.',
      soundAlike: '컴바인(Combine) - \'컴(Come, 오다)\'해서 \'바인(Bind, 묶다)\', 즉 가까이 와서 하나로 묶인다는 느낌으로 외우세요.',
      context: '화학 물질을 혼합하거나, 비즈니스에서 두 부서를 통합할 때, 혹은 요리 레시피에서 재료를 섞을 때 폭넓게 쓰입니다.',
      synonymAntonym: '여럿을 하나로 모으는 merge와 유사하며, 하나를 여러 개로 쪼개는 separate와는 정반대 개념입니다.',
    }),
    {
      definition: 'to join or mix two or more things together to form a single unit or substance',
      synonyms: ['merge', 'unite', 'blend'],
      antonyms: ['separate', 'divide', 'detach'],
      exampleSentences: [
        { en: 'The chef decided to combine the various spices to create a unique flavor.', ko: '요리사는 독특한 풍미를 만들기 위해 다양한 양념을 결합하기로 했다.' },
        { en: 'The two small companies will combine to compete with larger corporations.', ko: '두 작은 회사는 더 큰 기업들과 경쟁하기 위해 합칠 것이다.' },
      ],
    }
  ),
  word('Comfort', '위로', 3, 'noun',
    ['불편', '고통', '슬픔', '고민', '걱정', '불안', '두려움', '스트레스', '고난', '역경'],
    tips({
      etymology: '라틴어 com(강조)과 fortis(강한)가 합쳐져 함께 힘을 주어 강하게 만든다는 의미에서 유래했습니다.',
      visual: '추운 겨울날 따뜻한 담요를 덮고 김이 모락모락 나는 차를 마시는 평온한 장면을 상상해 보세요.',
      soundAlike: '컴포트 - \'컴(Come)\'과 \'포트(Port)\'로 나누어 거친 파도를 넘어 안전한 항구에 도착한 안도감을 떠올리세요.',
      context: '신체적인 안락함뿐만 아니라 슬픈 마음을 달래주는 정신적인 위안을 모두 포함하는 단어입니다.',
      synonymAntonym: '마음의 평안을 뜻하는 solace와 비슷하며, 고통스러운 상태인 distress와는 반대됩니다.',
    }),
    {
      definition: 'a state of physical ease and freedom from pain or constraint, or the easing of a person\'s feelings of grief or distress',
      synonyms: ['solace', 'ease', 'relief'],
      antonyms: ['discomfort', 'misery', 'distress'],
      exampleSentences: [
        { en: 'The soft music brought comfort to everyone in the room.', ko: '부드러운 음악이 방 안의 모든 사람에게 위로를 가져다주었다.' },
        { en: 'He sought comfort from his old friends after the loss.', ko: '그는 상실감을 겪은 후 옛 친구들에게서 위로를 찾았다.' },
      ],
    }
  ),
  word('Command', '명령', 3, 'noun',
    ['복종', '순종', '요청', '제안', '허락', '승인', '동의', '거절', '반대', '거부'],
    tips({
      etymology: '라틴어 com(강조)과 mandare(맡기다)가 합쳐져 공식적으로 지시를 맡긴다는 뜻에서 유래했습니다.',
      visual: '제복을 입은 지휘관이 엄격한 표정으로 부대원들에게 방향을 가리키며 지시하는 장면을 떠올려 보세요.',
      soundAlike: '커맨드 - \'커\'다란 체구의 \'맨\'(man)이 \'드\'높은 목소리로 위엄 있게 지시하는 상황을 연상하세요.',
      context: '군대나 조직에서의 지시뿐만 아니라, 컴퓨터 프로그램에 입력하는 명령어 또는 언어를 자유자재로 다루는 구사력을 의미할 때도 쓰입니다.',
      synonymAntonym: '강제성이 있는 order와 유사하며, 정중하게 부탁하는 request나 제안하는 suggestion과는 반대되는 성격이 강합니다.',
    }),
    {
      definition: 'an authoritative order or instruction given by someone in a position of power',
      synonyms: ['order', 'instruction', 'directive'],
      antonyms: ['request', 'suggestion', 'plea'],
      exampleSentences: [
        { en: 'The soldiers waited for the command to advance.', ko: '군인들은 전진 명령을 기다렸다.' },
        { en: 'She has an excellent command of the English language.', ko: '그녀는 영어에 대한 훌륭한 구사력을 갖추고 있다.' },
      ],
    }
  ),
  word('Common', '흔한', 3, 'adjective',
    ['희귀한', '특별한', '독특한', '드문', '비범한', '예외적', '놀라운', '이상한', '특이한', '유일한'],
    tips({
      etymology: '라틴어 communis에서 유래하여 여러 사람이 함께 공유하고 나누는 상태를 의미합니다.',
      visual: '공원 벤치나 길가의 가로등처럼 누구나 이용하고 어디에나 있는 풍경을 상상해 보세요.',
      soundAlike: '커먼 - \'커\'다란 \'먼\'지처럼 우리 주변 어디에나 흔하게 널려 있는 존재입니다.',
      context: '일상에서 자주 마주쳐서 특별함이 느껴지지 않는 평범한 상태나 공통된 특징을 설명할 때 씁니다.',
      synonymAntonym: '자주 일어나는 frequent와 유사하며, 단 하나뿐인 unique와는 대조적인 의미를 가집니다.',
    }),
    {
      definition: 'occurring or found often; shared by more than one person or group',
      synonyms: ['ordinary', 'usual', 'frequent'],
      antonyms: ['rare', 'unusual', 'unique'],
      exampleSentences: [
        { en: 'It is very common to see people using smartphones on the subway.', ko: '지하철에서 사람들이 스마트폰을 사용하는 것은 매우 흔한 일이다.' },
        { en: 'They discovered a common interest in classical music.', ko: '그들은 클래식 음악이라는 공통의 관심사를 발견했다.' },
      ],
    }
  ),
  word('Compare', '비교하다', 3, 'verb',
    ['동일시하다', '혼동하다', '무시하다', '별개로', '독립적으로', '분리해서', '구분 없이', '섞다', '합치다', '통합하다'],
    tips({
      etymology: '라틴어 com(함께)과 par(동등한)가 합쳐져 두 대상을 나란히 두고 같고 다름을 살핀다는 의미에서 유래했습니다.',
      visual: '양손에 서로 다른 물건을 하나씩 들고 어느 것이 더 무거운지 저울질하는 모습을 상상해 보세요.',
      soundAlike: '컴페어(Compare) - \'함께(Com)\' \'짝(Pair)\'을 지어 어느 쪽이 더 나은지 확인하는 과정입니다.',
      context: '온라인 쇼핑몰에서 최저가를 찾기 위해 여러 사이트의 가격을 대조할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: '차이점에 집중하는 contrast와 유사하며, 아예 상관하지 않는 disregard와는 반대됩니다.',
    }),
    {
      definition: 'to examine two or more objects, ideas, or people in order to show the likeness or difference between them',
      synonyms: ['contrast', 'match', 'correlate'],
      antonyms: ['ignore', 'disregard', 'neglect'],
      exampleSentences: [
        { en: 'You should compare the prices of both items before buying.', ko: '사기 전에 두 물건의 가격을 비교해야 한다.' },
        { en: 'It is not easy to compare the two cars and find the differences.', ko: '두 자동차를 비교해서 차이점을 알아내기는 쉽지 않다.' },
      ],
    }
  ),
  word('Compete', '경쟁하다', 3, 'verb',
    ['협력하다', '협동하다', '도와주다', '배려하다', '양보하다', '포기하다', '기권하다', '물러나다', '퇴장하다', '중단하다'],
    tips({
      etymology: '라틴어 com(함께)과 petere(추구하다)가 합쳐져 같은 목표를 향해 함께 달린다는 의미에서 유래했습니다.',
      visual: '운동회 날 결승선을 향해 전력 질주하는 아이들의 치열한 모습을 상상해 보세요.',
      soundAlike: '컴피트 - \'컴\'(함께) \'피\' 튀기게 \'트\'랙을 달리는 치열한 경쟁 상황을 연상하세요.',
      context: '스포츠 경기, 입시, 비즈니스 시장에서 승리하기 위해 다투는 상황에 주로 쓰입니다.',
      synonymAntonym: '다투는 contend와 비슷하며, 힘을 합치는 cooperate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to strive to gain or win something by defeating others who are trying to do the same',
      synonyms: ['contend', 'vie', 'rival'],
      antonyms: ['cooperate', 'collaborate', 'assist'],
      exampleSentences: [
        { en: 'Many runners will compete for the gold medal in the upcoming race.', ko: '다가오는 경주에서 많은 주자들이 금메달을 위해 경쟁할 것이다.' },
        { en: 'Small stores find it hard to compete against big malls.', ko: '작은 상점들은 대형 쇼핑몰과 경쟁하기 어렵다.' },
      ],
    }
  ),
  word('Complain', '불평하다', 3, 'verb',
    ['칭찬하다', '감사하다', '만족하다', '찬성하다', '동의하다', '수용하다', '인정하다', '기뻐하다', '즐기다', '응원하다'],
    tips({
      etymology: '라틴어 com(함께)과 plangere(가슴을 치다)가 합쳐져 슬픔이나 고통을 강하게 표현하던 것에서 유래했습니다.',
      visual: '식당에서 음식이 차갑게 식어 나오자 미간을 찌푸리며 지배인을 부르는 손님의 모습을 떠올려 보세요.',
      soundAlike: '한국어에서도 \'컴플레인을 걸다\'라는 표현을 자주 쓰므로 불만을 제기하는 상황과 연결하면 쉽습니다.',
      context: '주로 서비스 품질, 날씨, 혹은 타인의 행동이 마음에 들지 않을 때 입 밖으로 소리 내어 말하는 상황에 쓰입니다.',
      synonymAntonym: '낮게 투덜거리는 grumble과 비슷하며, 훌륭하다고 치켜세우는 praise와는 정반대 의미입니다.',
    }),
    {
      definition: 'to express dissatisfaction, pain, or resentment about a particular situation or person',
      synonyms: ['grumble', 'gripe', 'protest'],
      antonyms: ['praise', 'commend', 'approve'],
      exampleSentences: [
        { en: 'The neighbors began to complain about the loud music late at night.', ko: '이웃들은 밤늦은 시간의 시끄러운 음악에 대해 불평하기 시작했다.' },
        { en: 'He never complains even when the service is poor.', ko: '그는 서비스가 좋지 않을 때조차 절대 불평하지 않는다.' },
      ],
    }
  ),
  word('Complete', '완성하다', 3, 'verb',
    ['시작하다', '중단하다', '미완성', '미완료', '부분적', '불완전', '결함', '부족', '반쯤', '절반'],
    tips({
      etymology: '라틴어 com(강조)과 plere(채우다)가 결합되어 빈틈없이 가득 채웠다는 의미에서 유래했습니다.',
      visual: '퍼즐의 마지막 조각을 딱 끼워 넣어 전체 그림이 완벽하게 나타나는 모습을 상상해 보세요.',
      soundAlike: '컴플리트 - \'컴\'(함께) \'플리\'(풀리다) 즉, 모든 엉킨 실타래가 풀려 마무리가 된 상태를 연상하세요.',
      context: '업무 보고서를 끝마치거나 양식의 모든 빈칸을 기입할 때, 혹은 건축물을 다 지었을 때 자주 사용합니다.',
      synonymAntonym: '무언가를 마무리하는 finish와 유사하며, 이제 막 착수하는 begin과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to finish making or doing something in its entirety so that nothing remains to be done',
      synonyms: ['finish', 'accomplish', 'conclude'],
      antonyms: ['begin', 'start', 'abandon'],
      exampleSentences: [
        { en: 'You need to complete all the fields to finish the registration process.', ko: '등록 절차를 마치려면 모든 칸을 채워야 한다.' },
        { en: 'The construction of the new stadium is expected to be complete by next month.', ko: '새 경기장 건설은 다음 달까지 완료될 것으로 예상된다.' },
      ],
    }
  ),
];
