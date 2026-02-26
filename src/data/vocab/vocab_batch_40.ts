import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch40: VocabItem[] = [
  word('include', '포함하다', 5, 'verb',
    ['제외하다', '배제하다', '생략하다', '누락하다', '거절하다', '분리하다', '삭제하다', '방출하다', '무시하다', '차단하다'],
    tips({
      etymology: '라틴어 \'in(안에)\'과 \'claudere(닫다)\'가 합쳐져 \'안에 넣고 닫다\'라는 의미에서 유래했습니다.',
      visual: '큰 상자 안에 작은 물건들을 하나씩 집어넣고 뚜껑을 닫는 모습을 상상해 보세요.',
      soundAlike: '\'인클루드\' 발음이 \'안에 끌어두다\'와 비슷하게 들리니 안으로 끌어들여 포함하는 이미지를 떠올리세요.',
      context: '여행 패키지 가격에 조식이 들어있는지 확인할 때 가장 자주 쓰이는 표현입니다.',
      synonymAntonym: 'contain은 단순히 담고 있는 상태를, exclude는 밖으로 내보내는 반대 상황을 나타냅니다.',
    }),
    {
      definition: 'to comprise or contain as part of a whole',
      synonyms: ['incorporate', 'comprise', 'contain'],
      antonyms: ['exclude', 'omit', 'eliminate'],
      exampleSentences: [
        { en: 'The total price of the tour will incorporate all meals and accommodation.', ko: '투어 총 가격에는 모든 식사와 숙박 시설이 포함됩니다.' },
        { en: 'Please remember to add your contact information on the final page of the report.', ko: '보고서 마지막 페이지에 연락처 정보를 포함하는 것을 잊지 마세요.' },
      ],
      wordDistractors: ['incline', 'enclose', 'conclude'],
      definitionDistractors: [
        'to lean or slope in a particular direction',
        'to send something along with a letter or package',
        'to bring an event or process to an end',
      ],
    }
  ),
  word('income', '수입', 6, 'noun',
    ['지출', '비용', '세금', '빚', '손실', '경비', '지불', '적자', '부채', '소비'],
    tips({
      etymology: '안으로(in) 들어오는(come) 돈이라는 뜻에서 유래하여 벌어들인 돈을 의미합니다.',
      visual: '매달 통장에 월급이 찍히며 숫자가 올라가는 입금 내역을 상상해 보세요.',
      soundAlike: '\'인컴\'은 \'안으로 큼직하게\' 들어오는 돈이라고 연상하면 쉽습니다.',
      context: '가계부나 세금 신고서에서 가장 먼저 확인해야 할 총 벌이 항목입니다.',
      synonymAntonym: 'earnings와 유사하며, 반대로 나가는 돈인 expenditure와 대조됩니다.',
    }),
    {
      definition: 'Money received, especially on a regular basis, for work or through investments.',
      synonyms: ['earnings', 'revenue', 'salary'],
      antonyms: ['expenditure', 'expense', 'outgo'],
      exampleSentences: [
        { en: 'The family struggled to live on a single source of monthly earnings.', ko: '그 가족은 단일한 월 수입원으로 생활하느라 애를 먹었습니다.' },
        { en: 'High tax rates can significantly reduce the net amount of money people take home.', ko: '높은 세율은 사람들이 실제로 가져가는 순수입을 크게 줄일 수 있습니다.' },
      ],
      wordDistractors: ['outcome', 'income', 'become'],
      definitionDistractors: [
        'the result or consequence of an action',
        'a pleasant feeling of relaxation after work',
        'the process of arriving at a destination',
      ],
    }
  ),
  word('incorporate', '통합하다', 8, 'verb',
    ['분리하다', '해체하다', '나누다', '독립시키다', '분할하다', '해산하다', '철수하다', '빼다', '제거하다', '분리시키다'],
    tips({
      etymology: '라틴어 \'incorporatus\'에서 유래했으며, \'in(안으로)\'과 \'corpus(몸)\'가 합쳐져 하나의 몸체로 만든다는 뜻입니다.',
      visual: '여러 가지 색깔의 찰흙 조각들을 하나로 뭉쳐서 커다란 하나의 덩어리를 만드는 모습을 상상해 보세요.',
      soundAlike: '\'인코포레이트\' 발음이 \'안에 꼬옥(in-cor) 넣다\'와 비슷하게 들리니 요소를 안에 집어넣는 이미지를 떠올리세요.',
      context: '비즈니스에서는 새로운 기술을 제품에 포함시키거나, 여러 회사를 하나로 합병할 때 자주 사용됩니다.',
      synonymAntonym: '통합을 뜻하는 integrate와 반대로 분리를 뜻하는 exclude를 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'to include something as part of a whole or to combine multiple elements into one unified body',
      synonyms: ['integrate', 'assimilate', 'embody'],
      antonyms: ['exclude', 'separate', 'detach'],
      exampleSentences: [
        { en: 'The designer decided to incorporate sustainable materials into the new clothing line.', ko: '디자이너는 새로운 의류 라인에 지속 가능한 소재를 통합하기로 결정했습니다.' },
        { en: 'Many modern smartphones incorporate advanced camera technology with powerful processing chips.', ko: '많은 현대식 스마트폰은 고급 카메라 기술을 강력한 프로세싱 칩과 통합합니다.' },
      ],
      wordDistractors: ['incubate', 'implicate', 'invigorate'],
      definitionDistractors: [
        'to keep something warm until it hatches or develops',
        'to show that someone is involved in a crime',
        'to give strength or energy to something',
      ],
    }
  ),
  word('increase', '늘다', 7, 'verb',
    ['줄이다', '감소하다', '축소하다', '삭감하다', '하락하다', '줄어들다', '둔화하다', '낮추다', '떨어지다', '약화하다'],
    tips({
      etymology: '라틴어 \'increscere\'에서 유래하며, \'안에서(in)\' \'자라나다(crescere)\'라는 의미가 합쳐져 양이 커짐을 뜻합니다.',
      visual: '우상향하는 주식 그래프나 계단식으로 높아지는 막대그래프의 모양을 상상해 보세요.',
      soundAlike: '\'인크리스\'에서 \'크리\'를 \'키우다\'와 연결하여 크기가 커지는 느낌으로 기억하세요.',
      context: '인구 변화, 가격 변동, 실력 향상 등 수치나 정도가 올라가는 모든 상황에 쓰입니다.',
      synonymAntonym: '상승을 뜻하는 rise와 반대되는 하락인 decrease를 세트로 묶어 외우면 효과적입니다.',
    }),
    {
      definition: 'to become or make greater in size, amount, intensity, or degree',
      synonyms: ['grow', 'expand', 'rise'],
      antonyms: ['decrease', 'reduce', 'diminish'],
      exampleSentences: [
        { en: 'The company reported a significant rise in sales during the last quarter.', ko: '그 회사는 지난 분기 동안 매출의 상당한 증가를 보고했습니다.' },
        { en: 'A sudden surge in demand for electric cars has led to higher prices.', ko: '전기차 수요의 갑작스러운 증가는 가격 상승으로 이어졌습니다.' },
      ],
      wordDistractors: ['incense', 'crease', 'incase'],
      definitionDistractors: [
        'to make someone extremely angry or frustrated',
        'a line or ridge produced on a surface by folding',
        'to enclose or surround something completely',
      ],
    }
  ),
  word('incredible', '믿을 수 없는', 4, 'adjective',
    ['평범한', '흔한', '의심스러운', '그럴듯한', '예상 가능한', '지루한', '단조로운', '보통의', '일반적인', '당연한'],
    tips({
      etymology: '접두사 in-(not)과 cred(believe)가 합쳐져 \'믿을 수 없을 정도로 놀라운\'이라는 의미가 되었습니다.',
      visual: '마술사가 모자에서 코끼리를 꺼내는 것과 같이 도저히 믿기 힘든 광경을 상상해 보세요.',
      soundAlike: '발음할 때 \'인-크레-더블\'에서 \'크레\' 부분에 강세를 두어 놀라움을 표현하듯 말해보세요.',
      context: '주로 아주 훌륭한 성과나 예상치 못한 놀라운 소식을 접했을 때 감탄사처럼 사용됩니다.',
      synonymAntonym: 'unbelievable과 비슷하지만, 평범함을 뜻하는 ordinary와는 정반대의 느낌을 줍니다.',
    }),
    {
      definition: 'Extremely good, large, or great, often to a degree that is difficult to believe.',
      synonyms: ['amazing', 'extraordinary', 'unbelievable'],
      antonyms: ['ordinary', 'believable', 'plausible'],
      exampleSentences: [
        { en: 'The view from the top of the mountain was absolutely breathtaking and beyond belief.', ko: '산 정상에서 본 풍경은 정말 숨이 막힐 정도로 믿기지 않았습니다.' },
        { en: 'She showed such remarkable talent at a young age that everyone was stunned.', ko: '그녀는 어린 나이에 너무나 놀라운 재능을 보여주어 모두를 깜짝 놀라게 했습니다.' },
      ],
      wordDistractors: ['indelible', 'incurable', 'inedible'],
      definitionDistractors: [
        'making a mark that cannot be removed or erased',
        'not able to be healed or remedied',
        'not suitable or safe for eating',
      ],
    }
  ),
  word('indeed', '참으로', 5, 'adverb',
    ['아마', '결코', '거의', '별로', '전혀', '도리어', '오히려', '실제로는', '그렇지 않고', '반대로'],
    tips({
      etymology: 'in(안에)과 deed(행위)가 합쳐져 \'실제 행동 안에\' 즉, 사실임을 강조하는 의미가 되었습니다.',
      visual: '상대방의 말에 고개를 강하게 끄덕이며 \'정말 그래!\'라고 동의하는 모습을 상상하세요.',
      soundAlike: '\'인디드\' 발음이 \'인정(In-jeong)이다\'와 비슷하다고 생각하며 확신을 주는 뉘앙스를 기억하세요.',
      context: '앞서 말한 내용을 강조하거나 상대방의 의견에 전적으로 동의할 때 문장 끝이나 중간에 쓰입니다.',
      synonymAntonym: '정말이라는 뜻의 truly와 유의어이며, 의심을 나타내는 doubtfully와는 반대됩니다.',
    }),
    {
      definition: 'used to emphasize a statement or response confirming something already suggested',
      synonyms: ['truly', 'certainly', 'actually'],
      antonyms: ['doubtfully', 'hardly', 'possibly'],
      exampleSentences: [
        { en: 'The scenery from the top of the mountain was very beautiful.', ko: '산 정상에서 본 풍경은 참으로 아름다웠습니다.' },
        { en: 'A friend in need is a friend indeed.', ko: '어려울 때 돕는 친구가 참된 친구입니다.' },
      ],
      wordDistractors: ['indigo', 'indent', 'inbreed'],
      definitionDistractors: [
        'a deep blue color derived from a plant dye',
        'to create a space or notch at the beginning of a line',
        'to produce offspring by mating closely related individuals',
      ],
    }
  ),
  word('independent', '독립한', 6, 'adjective',
    ['의존하는', '종속적인', '예속된', '매인', '붙어 있는', '연계된', '부속된', '종속된', '예속적인', '의존적인'],
    tips({
      etymology: '부정의 접두사 in-과 의존하다는 뜻의 depend가 합쳐져 \'남에게 의지하지 않음\'을 뜻합니다.',
      visual: '부모님 집에서 나와 혼자 짐을 싸서 당당하게 새 집으로 들어가는 청년의 모습을 상상하세요.',
      soundAlike: '인디펜던트 - \'인디(Indie)\' 밴드가 대형 기획사 없이 스스로 음악을 하는 모습을 떠올려 보세요.',
      context: '국가의 정치적 해방이나 개인의 경제적 자립을 설명할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: '자유로운 상태인 autonomous와 반대로 묶여 있는 상태인 dependent를 함께 기억하세요.',
    }),
    {
      definition: 'not influenced or controlled by others in matters of opinion, conduct, or thinking',
      synonyms: ['autonomous', 'self-reliant', 'free'],
      antonyms: ['dependent', 'reliant', 'subordinate'],
      exampleSentences: [
        { en: 'The young adult moved out of his parents\' house to become more self-sufficient and free.', ko: '그 청년은 더 자립적이고 자유로워지기 위해 부모님 집에서 이사했다.' },
        { en: 'Many nations fought long wars to achieve their status as a sovereign and separate country.', ko: '많은 국가들이 주권이 있는 분리된 국가로서의 지위를 얻기 위해 긴 전쟁을 치렀다.' },
      ],
      wordDistractors: ['indifferent', 'indulgent', 'indignant'],
      definitionDistractors: [
        'having no particular interest or concern about something',
        'allowing someone to have or do whatever they want',
        'feeling or showing anger because of something unjust',
      ],
    }
  ),
  word('index', '색인', 9, 'noun',
    ['본문', '부록', '참고문헌', '주석', '표지', '머리말', '맺음말', '요약', '발췌', '인용'],
    tips({
      etymology: '라틴어 \'indicare(가리키다)\'에서 유래하여 무엇이 어디에 있는지 가리켜 주는 목록을 뜻합니다.',
      visual: '책의 맨 뒷부분에서 가나다순으로 정리된 단어들과 페이지 번호가 적힌 목록을 상상해 보세요.',
      soundAlike: '\'인덱스\'라고 발음하며, 사무용품 중 분류를 위해 붙이는 포스트잇 인덱스 탭을 떠올리면 쉽습니다.',
      context: '도서관의 도서 목록이나 경제 지표를 나타낼 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: '목록을 뜻하는 list와 유사하며, 무질서한 상태를 뜻하는 chaos와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An alphabetical list of names or subjects with references to the places where they occur, typically found at the end of a book.',
      synonyms: ['directory', 'catalog', 'inventory'],
      antonyms: ['disorganization', 'confusion', 'jumble'],
      exampleSentences: [
        { en: 'Please check the back of the textbook to find the specific page number for that term.', ko: '해당 용어의 정확한 페이지 번호를 찾으려면 교과서 뒷면의 색인을 확인하세요.' },
        { en: 'The consumer price serves as a crucial measure of inflation for the national economy.', ko: '소비자 물가 지수는 국가 경제의 인플레이션을 측정하는 중요한 척도 역할을 합니다.' },
      ],
      wordDistractors: ['indent', 'indict', 'annex'],
      definitionDistractors: [
        'to set text back from the margin in writing',
        'to formally accuse someone of a serious crime',
        'to attach or add something to a larger entity',
      ],
    }
  ),
  word('indicate', '나타내다', 7, 'verb',
    ['무시하다', '숨기다', '부정하다', '감추다', '넘어가다', '간과하다', '모르쇠하다', '덮다', '회피하다', '생략하다'],
    tips({
      etymology: '라틴어 \'indicare\'에서 유래했으며, \'안으로(in)\' \'가리키다(dicare)\'라는 뜻이 합쳐져 무언가를 짚어 보여준다는 의미가 되었습니다.',
      visual: '검지 손가락으로 지도상의 특정 지점을 콕 집어 가리키는 모습을 상상해 보세요.',
      soundAlike: '\'인디케이트\' 발음이 \'인디(안)가 이쪽을 가리키다\'와 비슷하다고 연상하면 쉽습니다.',
      context: '설문 조사 결과나 계기판의 바늘이 특정 수치를 나타낼 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'show와 의미가 비슷하지만 더 공식적인 느낌이며, 반대로 정보를 숨기는 conceal과는 대조적입니다.',
    }),
    {
      definition: 'to point something out or present evidence that shows a particular fact or condition exists',
      synonyms: ['demonstrate', 'signify', 'denote'],
      antonyms: ['conceal', 'suppress', 'falsify'],
      exampleSentences: [
        { en: 'Recent statistics indicate a trend that might suggest a recovery in the local economy.', ko: '최근 통계는 지역 경제 회복을 나타낼 수도 있는 추세를 보여줍니다.' },
        { en: 'The flashing red light on the dashboard is designed to indicate that the fuel level is low.', ko: '대시보드의 깜빡이는 빨간 불은 연료 잔량이 적다는 것을 나타내기 위해 설계되었습니다.' },
      ],
      wordDistractors: ['implicate', 'intimate', 'inundate'],
      definitionDistractors: [
        'to involve someone in a questionable act or crime',
        'to hint or suggest something indirectly',
        'to flood or overwhelm with a large amount',
      ],
    }
  ),
  word('individual', '개인', 4, 'noun',
    ['단체', '집단', '대중', '사회', '조직', '공동체', '그룹', '회사', '기관', '연합'],
    tips({
      etymology: '라틴어 \'individuus\'에서 유래하여 \'나눌 수 없는(in- + dividuus)\'이라는 뜻으로, 더 이상 쪼갤 수 없는 하나의 단위를 의미합니다.',
      visual: '커다란 군중 속에 홀로 서서 자신만의 색깔을 띠고 있는 한 사람의 모습을 상상해 보세요.',
      soundAlike: '\'인디비주얼\'의 \'인디\'를 독립적인(independent)의 \'인디\'와 연결하면 혼자라는 느낌을 쉽게 기억할 수 있습니다.',
      context: '사회적 권리나 책임을 논할 때 집단과 대비되는 한 사람의 존재를 강조할 때 주로 쓰입니다.',
      synonymAntonym: 'person과 유의어 관계이며, 집단을 뜻하는 group이나 collective와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A single human being as distinct from a group, class, or family.',
      synonyms: ['person', 'being', 'soul'],
      antonyms: ['group', 'collective', 'society'],
      exampleSentences: [
        { en: 'Every single person has the right to express their own unique opinions.', ko: '모든 개개인은 자신만의 독특한 의견을 표현할 권리가 있습니다.' },
        { en: 'The coach focuses on improving the skills of each player rather than just the team as a whole.', ko: '그 코치는 팀 전체뿐만 아니라 각 선수의 기량을 향상시키는 데 집중합니다.' },
      ],
      wordDistractors: ['indivisible', 'industrial', 'indignant'],
      definitionDistractors: [
        'unable to be divided or separated into parts',
        'relating to the production of goods in factories',
        'feeling or showing anger at unfair treatment',
      ],
    }
  ),
  word('induce', '유도하다', 10, 'verb',
    ['방해하다', '억제하다', '중단하다', '거절하다', '무시하다', '파괴하다', '보존하다', '고정하다', '분리하다', '축소하다'],
    tips({
      etymology: '라틴어 \'inducere\'에서 유래하며, \'안으로(in)\' \'이끌다(ducere)\'라는 의미가 합쳐져 어떤 행동을 하도록 유도한다는 뜻이 되었습니다.',
      visual: '최면술사가 시계추를 흔들며 상대방을 깊은 잠에 빠지도록 유도하는 장면을 상상해 보세요.',
      soundAlike: '\'인두스\'라고 발음하며, \'인도(induce)해서\' 어떤 결과를 낳는다고 연상하면 쉽습니다.',
      context: '의학적으로는 분만을 유도하거나, 심리학적으로 특정 행동을 이끌어낼 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '무언가를 일으키는 cause와 비슷하지만, 억누르는 prevent와는 정반대의 에너지를 가집니다.',
    }),
    {
      definition: 'to succeed in persuading someone to do something, or to cause a particular physical condition to happen',
      synonyms: ['persuade', 'instigate', 'engender'],
      antonyms: ['deter', 'discourage', 'prevent'],
      exampleSentences: [
        { en: 'The doctors decided to induce labor because the baby was two weeks overdue.', ko: '아기가 예정일보다 2주나 지났기 때문에 의사들은 분만을 유도하기로 결정했습니다.' },
        { en: 'High levels of stress can often induce sleep deprivation and physical exhaustion.', ko: '높은 수준의 스트레스는 종종 수면 부족과 육체적 피로를 유도할 수 있습니다.' },
      ],
      wordDistractors: ['deduce', 'reduce', 'produce'],
      definitionDistractors: [
        'to arrive at a conclusion by reasoning from evidence',
        'to make something smaller or less in amount',
        'to manufacture or create goods in large quantities',
      ],
    }
  ),
  word('industry', '공업', 5, 'noun',
    ['두통', '경치, 풍경', '수신자', '기질, 성격', '자원봉사 정신', '외과', '위급, 긴급함', '식품 저장고', '칭송, 찬양, 송덕문', '단거리 선수'],
    tips({
      etymology: '라틴어 \'industria\'에서 유래했으며, \'부지런함\'이라는 뜻에서 현대의 대규모 생산 체계인 \'공업\'으로 발전했습니다.',
      visual: '거대한 톱니바퀴가 돌아가는 공장 단지와 연기가 솟아오르는 굴뚝들을 상상해 보세요.',
      soundAlike: '\'인-더-스트리\'라고 발음하며, 거리(street)마다 가득 찬 공장들을 떠올리면 쉽습니다.',
      context: '경제 뉴스에서 IT, 자동차, 서비스 등 특정 분야의 사업군을 분류할 때 자주 등장합니다.',
      synonymAntonym: '생산과 관련된 manufacturing과 유의어이며, 자연 상태인 nature와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The production of goods or services within an economy, often involving large-scale factories and manufacturing.',
      synonyms: ['manufacturing', 'production', 'business'],
      antonyms: ['indolence', 'idleness', 'nature'],
      exampleSentences: [
        { en: 'The heavy steel sector is a vital part of the national economy.', ko: '중공업 부문은 국가 경제의 핵심적인 부분입니다.' },
        { en: 'Rapid technological advances are transforming the modern automotive sector.', ko: '급격한 기술 발전이 현대 자동차 산업을 변화시키고 있습니다.' },
      ],
      wordDistractors: ['infantry', 'indignity', 'inquiry'],
      definitionDistractors: [
        'soldiers who fight on foot rather than on horseback',
        'treatment that causes a feeling of shame or humiliation',
        'a formal request for information or assistance',
      ],
    }
  ),
  word('inevitable', '피할 수 없는', 8, 'adjective',
    ['우연한', '선택적인', '회피가능한', '불확실한', '일시적인', '가변적인', '의도적인', '예외적인', '부수적인', '희박한'],
    tips({
      etymology: '라틴어 \'evitabilis(피할 수 있는)\'에 부정 접두사 \'in-\'이 붙어 \'피할 수 없는\'이라는 뜻이 되었습니다.',
      visual: '내리막길에서 브레이크가 고장 난 기차가 선로를 따라 끝까지 달려가는 장면을 상상해 보세요.',
      soundAlike: '\'인-에비-터블\' 발음이 \'안에 비가 터블(터질)\' 것처럼 구름이 가득해 비를 피할 수 없는 상황으로 연상하세요.',
      context: '변화나 죽음, 혹은 충분히 예상 가능한 결과처럼 거스를 수 없는 운명적인 상황에 주로 쓰입니다.',
      synonymAntonym: 'unavoidable과는 거의 같은 뜻이며, 반대로 피할 수 있다는 뜻의 avoidable과 대조하여 기억하세요.',
    }),
    {
      definition: 'Certain to happen and impossible to avoid or prevent.',
      synonyms: ['unavoidable', 'escapeless', 'fated'],
      antonyms: ['avoidable', 'preventable', 'uncertain'],
      exampleSentences: [
        { en: 'Aging is a natural and certain process that every living being must face.', ko: '노화는 모든 생명체가 직면해야 하는 자연스럽고 피할 수 없는 과정입니다.' },
        { en: 'The collapse of the old building seemed certain after the massive earthquake.', ko: '거대한 지진 이후 그 오래된 건물의 붕괴는 피할 수 없는 일처럼 보였습니다.' },
      ],
      wordDistractors: ['invaluable', 'invertible', 'invisible'],
      definitionDistractors: [
        'extremely useful or priceless beyond measure',
        'capable of being reversed or turned inside out',
        'unable to be seen by the naked eye',
      ],
    }
  ),
  word('infant', '유아', 6, 'noun',
    ['노인', '청소년', '성인', '중년', '학생', '교사', '부모', '조상', '후손', '동료'],
    tips({
      etymology: '라틴어 \'infans\'에서 유래했으며, \'in(아닌)\'과 \'fari(말하다)\'가 합쳐져 \'말을 하지 못하는 어린아이\'를 뜻합니다.',
      visual: '포대기에 싸여 요람 안에서 옹알이를 하며 누워 있는 아주 작은 아기를 상상해 보세요.',
      soundAlike: '\'인판트\' 발음이 \'인형 판다\'와 비슷하죠? 인형처럼 작고 귀여운 아기를 떠올려 보세요.',
      context: '병원 소아과나 육아 잡지에서 갓 태어난 아기부터 걸음마 전 단계의 아이를 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'baby와 비슷하지만 좀 더 격식 있거나 의학적인 느낌이며, 반대인 adult와 대조하여 기억하세요.',
    }),
    {
      definition: 'A very young child or baby, typically one who has not yet learned to walk or talk.',
      synonyms: ['baby', 'newborn', 'toddler'],
      antonyms: ['adult', 'grown-up', 'elder'],
      exampleSentences: [
        { en: 'The nurse carefully placed the newborn child into the warm cradle.', ko: '간호사는 갓 태어난 유아를 따뜻한 요람에 조심스럽게 눕혔습니다.' },
        { en: 'Specific nutrition is essential for healthy growth during the first year of a human\'s life.', ko: '인간 생애의 첫해 동안 유아의 건강한 성장을 위해서는 특정 영양 공급이 필수적입니다.' },
      ],
      wordDistractors: ['infirm', 'infarct', 'influx'],
      definitionDistractors: [
        'physically weak, especially due to old age or illness',
        'an area of tissue death caused by blocked blood supply',
        'a large number of people or things arriving at once',
      ],
    }
  ),
  word('infect', '감염시키다', 9, 'verb',
    ['치료하다', '정화하다', '방어하다', '분리하다', '거절하다', '조절하다', '관찰하다', '보호하다', '회복하다', '예방하다'],
    tips({
      etymology: '라틴어 \'inficere\'에서 유래했으며, \'안으로(in)\' \'넣다(facere)\'라는 의미가 합쳐져 병균을 몸 안에 넣는다는 뜻이 되었습니다.',
      visual: '재채기 한 번에 주변으로 보이지 않는 초록색 세균들이 퍼져나가는 이미지를 상상해 보세요.',
      soundAlike: '\'인펙트\' 발음이 \'안(in)에 팩트(fact)를 꽂다\'처럼 들리기도 하죠? 몸 안에 나쁜 사실(균)을 심는다고 생각하세요.',
      context: '의학적인 질병뿐만 아니라 누군가의 밝은 웃음이나 열정이 주변 사람들에게 퍼질 때도 자주 쓰입니다.',
      synonymAntonym: '오염시키는 contaminate와 깨끗하게 하는 purify를 짝지어 기억하면 좋습니다.',
    }),
    {
      definition: 'to pass a disease or a virus to another person, animal, or plant',
      synonyms: ['contaminate', 'pollute', 'taint'],
      antonyms: ['disinfect', 'purify', 'sanitize'],
      exampleSentences: [
        { en: 'A single mosquito can carry enough parasites to many people in the village.', ko: '단 한 마리의 모기가 마을의 많은 사람들을 감염시킬 만큼의 기생충을 옮길 수 있습니다.' },
        { en: 'Her cheerful attitude tended to everyone in the office, lifting the overall mood.', ko: '그녀의 쾌활한 태도는 사무실의 모든 사람에게 전염되어 전반적인 분위기를 고조시켰습니다.' },
      ],
      wordDistractors: ['inflect', 'affect', 'ingest'],
      definitionDistractors: [
        'to change the tone or pitch of one\'s voice',
        'to have an influence on or cause a change in',
        'to take food or drink into the body by swallowing',
      ],
    }
  ),
  word('infer', '추론하다', 10, 'verb',
    ['운전했다 (drive의 과거)', '낙담시키다', '의견이 다르다', '탐내다, 갈망하다', '존재하다', '(구름, 안개 등을) 흩뜨리다, 흩어지다', '잠시 들르다', '노력하다, 분투하다', '선택하다', '결정하다'],
    tips({
      etymology: '라틴어 \'inferre\'에서 유래되었으며, \'안으로(in)\' \'가져오다(fer)\'라는 의미가 합쳐져 결론을 이끌어낸다는 뜻이 되었습니다.',
      visual: '셜록 홈즈가 돋보기를 들고 흩어진 단서들을 모아 하나의 결론을 도출하는 장면을 상상해 보세요.',
      soundAlike: '\'인퍼\'라고 발음하며, \'안(in)에 숨겨진 퍼즐(per)\' 조각을 맞춰 정답을 찾아내는 모습을 떠올려 보세요.',
      context: '직접적인 언급이 없더라도 상황이나 증거를 바탕으로 숨은 의도를 파악할 때 주로 사용됩니다.',
      synonymAntonym: '확실한 증거 없이 짐작하는 deduce와 비슷하지만, 명확한 사실을 말하는 state와는 반대됩니다.',
    }),
    {
      definition: 'to form an opinion or reach a conclusion based on available information or evidence rather than direct statements',
      synonyms: ['deduce', 'conclude', 'surmise'],
      antonyms: ['state', 'declare', 'ignore'],
      exampleSentences: [
        { en: 'From the data presented in the report, we can reasonably conclude that sales will increase next quarter.', ko: '보고서에 제시된 자료를 통해 다음 분기 매출이 증가할 것이라고 합리적으로 추론할 수 있습니다.' },
        { en: 'The audience was able to understand the character\'s true motives through her subtle facial expressions.', ko: '관객들은 그녀의 미묘한 표정을 통해 캐릭터의 진정한 동기를 추론할 수 있었습니다.' },
      ],
      wordDistractors: ['defer', 'refer', 'confer'],
      definitionDistractors: [
        'to postpone or delay an action to a later time',
        'to direct someone to a different source for help',
        'to discuss something in order to reach a decision',
      ],
    }
  ),
  word('inflate', '부풀리다', 8, 'verb',
    ['수축시키다', '축소하다', '압축하다', '방전하다', '감소시키다', '절약하다', '요약하다', '진정시키다', '냉각하다', '비우다'],
    tips({
      etymology: '라틴어 \'inflare\'에서 유래했으며, \'in(안으로)\'과 \'flare(불다)\'가 합쳐져 공기를 불어넣는다는 의미를 가집니다.',
      visual: '풍선에 입을 대고 힘껏 숨을 불어넣어 빵빵하게 커지는 모습을 상상해 보세요.',
      soundAlike: '\'인플레이트\'는 \'안(in)에 풀(fl)을 넣어 채우다\'와 발음이 비슷하여 부풀리는 느낌을 줍니다.',
      context: '타이어에 공기를 넣거나, 경제 상황에서 물가가 오르는 인플레이션 현상을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'expand와 함께 외우고, 반대말인 deflate를 세트로 기억하면 효과적입니다.',
    }),
    {
      definition: 'to fill a container with air or gas so that it becomes larger and firmer',
      synonyms: ['expand', 'swell', 'distend'],
      antonyms: ['deflate', 'compress', 'shrink'],
      exampleSentences: [
        { en: 'The mechanic used a pump to fill the bicycle tires with air until they were firm.', ko: '정비공은 자전거 타이어가 단단해질 때까지 펌프를 사용하여 공기를 주입했습니다.' },
        { en: 'Governments often worry that printing too much money will cause prices to rise rapidly.', ko: '정부는 너무 많은 화폐를 발행하는 것이 물가를 급격히 상승시킬까 봐 종종 걱정합니다.' },
      ],
      wordDistractors: ['inflame', 'instate', 'inflict'],
      definitionDistractors: [
        'to provoke strong feelings of anger or passion',
        'to place someone in an official position',
        'to cause suffering or harm to someone',
      ],
    }
  ),
  word('influence', '영향력', 7, 'noun',
    ['절충, 트레이드오프', '미라; 엄마(영국식)', '운율, 리듬', '형 al', '시리얼, 곡물', '조카딸', '비난', '밖(에[으로], 의)', '담론', '재정'],
    tips({
      etymology: '안으로(in) 흐르다(flu)라는 어원에서 유래하여 타인의 마음속으로 흘러 들어가 변화를 일으키는 힘을 뜻합니다.',
      visual: '잔잔한 호수에 돌을 던졌을 때 물결이 사방으로 퍼져나가는 파동의 이미지를 떠올려 보세요.',
      soundAlike: '인플루언서(influencer)라는 단어를 생각하면 타인에게 큰 힘을 끼치는 사람임을 쉽게 연상할 수 있습니다.',
      context: '정치, 경제, 사회적 결정뿐만 아니라 친구 사이의 사소한 습관 변화에도 이 단어가 자주 쓰입니다.',
      synonymAntonym: '강력한 힘을 뜻하는 impact와 반대로 아무런 효과가 없는 impotence를 대조하여 기억하세요.',
    }),
    {
      definition: 'the capacity to have an effect on the character, development, or behavior of someone or something',
      synonyms: ['impact', 'sway', 'leverage'],
      antonyms: ['impotence', 'inefficacy', 'weakness'],
      exampleSentences: [
        { en: 'Peer pressure can have a significant effect on the choices teenagers make regarding their hobbies.', ko: '또래 집단의 압박은 십 대들이 취미를 선택하는 데 있어 상당한 영향력을 미칠 수 있습니다.' },
        { en: 'Her artistic style shows a clear inspiration from the classical painters of the Renaissance era.', ko: '그녀의 예술적 스타일은 르네상스 시대 고전 화가들로부터 받은 명확한 영향력을 보여줍니다.' },
      ],
      wordDistractors: ['affluence', 'influenza', 'confluence'],
      definitionDistractors: [
        'the state of having a great deal of wealth',
        'a highly contagious viral respiratory illness',
        'the point where two rivers or streams merge',
      ],
    }
  ),
  word('inform', '알리다', 4, 'verb',
    ['숨기다', '무시하다', '거절하다', '망각하다', '침묵하다', '방해하다', '지연시키다', '혼란시키다', '반대하다', '삭제하다'],
    tips({
      etymology: '안(in)에 형태(form)를 잡아준다는 뜻에서 지식을 머릿속에 넣어주는 이미지를 떠올리세요.',
      visual: '우체부가 편지를 전달하거나 뉴스 앵커가 소식을 전하는 장면을 상상해 보세요.',
      soundAlike: '인폼(inform) - \'인\'기 있는 \'폼\'나는 소식을 전해준다고 외워보세요.',
      context: '공식적인 공지나 개인적인 소식을 누군가에게 전달할 때 주로 사용됩니다.',
      synonymAntonym: 'notify와는 정보를 준다는 점이 같지만, conceal과는 정보를 숨긴다는 점에서 반대됩니다.',
    }),
    {
      definition: 'to give someone facts or information about something',
      synonyms: ['notify', 'advise', 'apprise'],
      antonyms: ['conceal', 'hide', 'withhold'],
      exampleSentences: [
        { en: 'Please contact the office to tell them about your decision as soon as possible.', ko: '가능한 한 빨리 사무실에 연락하여 당신의 결정을 알려주세요.' },
        { en: 'The manager will update the staff regarding the new safety protocols tomorrow morning.', ko: '매니저는 내일 아침 직원들에게 새로운 안전 규정에 대해 알릴 것입니다.' },
      ],
      wordDistractors: ['infirm', 'reform', 'conform'],
      definitionDistractors: [
        'physically weak or frail due to age or illness',
        'to make changes to improve a system or institution',
        'to comply with rules or accepted standards of behavior',
      ],
    }
  ),
  word('informal', '비공식의', 5, 'adjective',
    ['공식적인', '엄격한', '권위적인', '전통적인', '체계적인', '전문적인', '정중한', '규격화된', '공인된', '의례적인'],
    tips({
      etymology: '부정을 뜻하는 접두사 in-과 격식을 뜻하는 formal이 합쳐져 \'격식이 없는\' 상태를 나타냅니다.',
      visual: '넥타이를 풀고 편안한 티셔츠 차림으로 친구들과 웃으며 대화하는 파티 분위기를 상상해 보세요.',
      soundAlike: '인포멀(informal)은 \'안(in) 편한(formal)\' 상태라고 연상하면 기억하기 쉽습니다.',
      context: '비즈니스 미팅보다는 가족 식사나 친구와의 문자 메시지 등 편안한 상황에서 주로 쓰입니다.',
      synonymAntonym: 'casual과 유의어 관계이며, 정반대인 formal과 함께 세트로 외우면 효과적입니다.',
    }),
    {
      definition: 'having a relaxed, friendly, or unofficial style or nature rather than being serious or strictly organized',
      synonyms: ['casual', 'relaxed', 'unofficial'],
      antonyms: ['formal', 'official', 'ceremonial'],
      exampleSentences: [
        { en: 'The dress code for the company picnic is completely relaxed and casual.', ko: '회사 야유회의 복장 규정은 완전히 편안하고 비공식적입니다.' },
        { en: 'We had a brief and friendly chat over coffee to discuss the new project ideas.', ko: '우리는 새 프로젝트 아이디어를 논의하기 위해 커피를 마시며 짧고 비공식적인 대화를 나누었습니다.' },
      ],
      wordDistractors: ['infernal', 'internal', 'maternal'],
      definitionDistractors: [
        'relating to or resembling hell or the underworld',
        'situated on the inside of something',
        'relating to a mother or motherhood',
      ],
    }
  ),
  word('ingredient', '성분', 6, 'noun',
    ['문법', '라켓, 소란', '가려움, 가렵다', '입장', '매듭', '톱니바퀴', '초목, 식물', '요건, 필요조건', '목적지', '해결책, 해결'],
    tips({
      etymology: '라틴어 \'ingredi(들어가다)\'에서 유래하여, 어떤 결과물 안에 \'들어가는 것\'을 의미합니다.',
      visual: '요리사가 냄비 안에 신선한 채소와 향신료를 하나씩 집어넣는 모습을 상상해 보세요.',
      soundAlike: '\'인그리디언트\' 발음이 \'안에 그리 든 것\'과 비슷하게 들린다고 생각하면 쉽습니다.',
      context: '주로 요리 레시피에서 재료를 나열할 때나, 성공의 비결을 말할 때 자주 쓰입니다.',
      synonymAntonym: '구성 요소인 component와 비슷하지만, 요리나 혼합물에는 이 단어가 더 자주 쓰입니다.',
    }),
    {
      definition: 'one of the individual substances that are combined to make a particular dish or mixture',
      synonyms: ['component', 'element', 'constituent'],
      antonyms: ['whole', 'product', 'result'],
      exampleSentences: [
        { en: 'Fresh garlic is a vital component for making this pasta sauce taste authentic.', ko: '신선한 마늘은 이 파스타 소스의 맛을 정통으로 만드는 데 필수적인 성분입니다.' },
        { en: 'Hard work and persistence are the main elements of any great achievement.', ko: '노력과 끈기는 모든 위대한 성취의 주요 요소입니다.' },
      ],
      wordDistractors: ['increment', 'agreement', 'regiment'],
      definitionDistractors: [
        'an increase or addition, especially one of a series',
        'a mutual arrangement between two or more parties',
        'a permanent unit of an army typically led by a colonel',
      ],
    }
  ),
  word('inhabit', '살다', 7, 'verb',
    ['방해하다', '금지하다', '상속하다', '전시하다', '억제하다', '조사하다', '거절하다', '발생하다', '포함하다', '방치하다'],
    tips({
      etymology: '안을 뜻하는 \'in\'과 살다를 뜻하는 라틴어 \'habitare\'가 합쳐져 특정 장소 내부에 거주한다는 의미가 되었습니다.',
      visual: '숲속의 작은 오두막 안에 평화롭게 살고 있는 동물의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인해빗\'이므로 \'인(안)에 빛\'이 들어오는 따뜻한 집에 사는 모습을 연상하세요.',
      context: '주로 사람이나 동물이 특정 지역, 섬, 혹은 행성에 터를 잡고 살 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '거주하다라는 뜻의 dwell과 비슷하지만, 비어있다는 뜻의 vacate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to live in or occupy a particular place or region as a permanent resident',
      synonyms: ['occupy', 'dwell', 'reside'],
      antonyms: ['vacate', 'depart', 'abandon'],
      exampleSentences: [
        { en: 'Many rare species of birds continue to inhabit these remote islands.', ko: '많은 희귀종의 새들이 이 외딴 섬들에 계속해서 서식하고 있다.' },
        { en: 'Ancient tribes used to inhabit the caves along the river banks.', ko: '고대 부족들은 강둑을 따라 있는 동굴에 거주하곤 했다.' },
      ],
      wordDistractors: ['inhibit', 'exhibit', 'inherit'],
      definitionDistractors: [
        'to prevent or restrain an action from happening',
        'to display something publicly for others to see',
        'to receive property or a trait from a predecessor',
      ],
    }
  ),
  word('inherent', '고유의', 9, 'adjective',
    ['안달하는, 초조해 하는, 화내는, 언짢아하는', '가설적인', '맑은, 투명한', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인'],
    tips({
      etymology: '라틴어 \'inhaerere\'에서 유래했으며, \'안에(in) 달라붙어 있다(stick)\'는 의미가 합쳐져 본질적인 특성을 뜻하게 되었습니다.',
      visual: '태어날 때부터 DNA 속에 깊이 새겨져 있어 절대 지워지지 않는 문신 같은 이미지를 떠올려 보세요.',
      soundAlike: '\'인히어런트\' 발음이 \'안에(in) 히어(here) 있다\'와 비슷하므로, 어떤 성질이 이미 그 안에 자리 잡고 있다고 외우면 쉽습니다.',
      context: '주로 인간의 권리나 물건의 위험성처럼 떼려야 뗄 수 없는 고유한 속성을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '내재된 특성을 뜻하는 intrinsic과 비슷하며, 외부에서 덧붙여진 것을 뜻하는 extrinsic과는 반대됩니다.',
    }),
    {
      definition: 'existing in something as a permanent, essential, or characteristic attribute',
      synonyms: ['intrinsic', 'innate', 'built-in'],
      antonyms: ['acquired', 'extrinsic', 'incidental'],
      exampleSentences: [
        { en: 'Every form of mountain climbing has some risks that cannot be completely removed.', ko: '모든 형태의 등산에는 완전히 제거할 수 없는 몇 가지 내재된 위험이 있습니다.' },
        { en: 'The desire for freedom is a natural part of human nature from birth.', ko: '자유에 대한 갈망은 태어날 때부터 인간 본성에 내재된 부분입니다.' },
      ],
      wordDistractors: ['incoherent', 'adherent', 'coherent'],
      definitionDistractors: [
        'lacking logical connection or clarity in speech',
        'a person who supports a particular party or belief',
        'logically connected and consistent throughout',
      ],
    }
  ),
  word('inhibit', '금하다', 10, 'verb',
    ['촉진하다', '장려하다', '가속하다', '허용하다', '해방하다', '자극하다', '유발하다', '도와주다', '승인하다', '확장하다'],
    tips({
      etymology: '라틴어 \'inhibere\'에서 유래했으며, \'in(안에)\'과 \'habere(쥐다/보유하다)\'가 합쳐져 행동을 안으로 억눌러 가두는 이미지를 가집니다.',
      visual: '달리려는 선수의 발목을 무거운 사슬이 꽉 붙잡고 있어 앞으로 나가지 못하게 방해하는 모습을 상상해 보세요.',
      soundAlike: '\'인히빗\' 발음이 \'안에(in) 힘(hi)을 빗(bit)장 걸다\'처럼 들린다고 생각하면 무언가를 못 하게 막는 느낌이 납니다.',
      context: '의학적으로는 약물이 특정 효소의 활동을 막거나, 심리학적으로는 수줍음이 사회적 활동을 방해할 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 방해하는 hinder와 비슷하지만, 성장을 돕는 foster와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'to prevent, restrain, or slow down an action or process from happening or developing freely',
      synonyms: ['hinder', 'restrain', 'suppress'],
      antonyms: ['encourage', 'facilitate', 'promote'],
      exampleSentences: [
        { en: 'Strict laws may prevent growth and effectively stifle new business ventures in the region.', ko: '엄격한 법률은 성장을 방해하고 해당 지역의 새로운 사업 시도를 효과적으로 저해할 수 있습니다.' },
        { en: 'Cold temperatures often slow down the chemical reaction and keep the bacteria from spreading.', ko: '낮은 온도는 종종 화학 반응을 늦추고 박테리아가 퍼지는 것을 억제합니다.' },
      ],
      wordDistractors: ['inhabit', 'exhibit', 'prohibit'],
      definitionDistractors: [
        'to live in or occupy a particular place',
        'to display something publicly in an exhibition',
        'to formally forbid something by law or rule',
      ],
    }
  ),
  word('initial', '처음의', 4, 'adjective',
    ['최종적인', '중간의', '지속적인', '반복되는', '우연한', '필수적인', '복잡한', '단순한', '거대한', '사소한'],
    tips({
      etymology: '라틴어 \'initium(시작)\'에서 유래하여 어떤 과정의 가장 첫 단계를 의미합니다.',
      visual: '경주가 시작되기 전 출발선에 서 있는 선수들의 긴장된 첫 모습을 상상해 보세요.',
      soundAlike: '이름의 첫 글자를 따서 만드는 \'이니셜\'을 떠올리면 \'처음의\'라는 뜻이 쉽게 연결됩니다.',
      context: '새로운 프로젝트나 계획을 세울 때 가장 먼저 마주하는 반응이나 단계를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '시작을 뜻하는 first와 반대되는 개념인 최종적인 final을 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'occurring at the very beginning of a process or sequence',
      synonyms: ['primary', 'original', 'opening'],
      antonyms: ['final', 'ultimate', 'concluding'],
      exampleSentences: [
        { en: 'The company\'s starting investment was much higher than they had originally planned.', ko: '회사의 초기 투자금은 원래 계획했던 것보다 훨씬 높았습니다.' },
        { en: 'My first reaction to the news was one of complete shock and disbelief.', ko: '그 소식에 대한 나의 첫 반응은 완전한 충격과 불신이었습니다.' },
      ],
      wordDistractors: ['innate', 'inertial', 'digital'],
      definitionDistractors: [
        'present from birth rather than learned or acquired',
        'relating to the property of matter to resist changes in motion',
        'involving or relating to computer technology or data',
      ],
    }
  ),
  word('initiate', '시작하다', 5, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'initium(시작)\'에서 유래하여 어떤 과정이나 활동의 첫 단추를 끼우는 것을 의미합니다.',
      visual: '경주용 자동차가 출발 신호와 함께 굉음을 내며 트랙으로 튀어 나가는 장면을 상상해 보세요.',
      soundAlike: '\'이니셔티브(initiative)\'라는 말처럼 주도권을 쥐고 먼저 움직이는 소리를 떠올려 보세요.',
      context: '비즈니스 회의에서 새로운 프로젝트를 제안하거나 대화를 먼저 트는 상황에서 자주 쓰입니다.',
      synonymAntonym: '무언가를 시작하는 begin과 끝내는 terminate를 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to set a process or action in motion or to cause something to begin',
      synonyms: ['commence', 'launch', 'instigate'],
      antonyms: ['terminate', 'conclude', 'halt'],
      exampleSentences: [
        { en: 'The government plans to initiate new programs to improve public health services.', ko: '정부는 공공 보건 서비스를 개선하기 위한 새로운 프로그램들을 시작할 계획이다.' },
        { en: 'Only a senior manager has the authority to initiate a formal investigation into the matter.', ko: '오직 고위 관리자만이 그 문제에 대한 공식적인 조사를 개시할 권한을 갖는다.' },
      ],
      wordDistractors: ['imitate', 'intimate', 'irrigate'],
      definitionDistractors: [
        'to copy the actions or appearance of someone else',
        'to suggest something in an indirect way',
        'to supply water to land for growing crops',
      ],
    }
  ),
  word('inject', '주사하다', 6, 'verb',
    ['제의하다', '요약하다', '탈출하다', '반등하다, 되튀다', '회전하다', '변형시키다', '함축하다', '결정하다', '양육하다', '선택하다'],
    tips({
      etymology: '라틴어 \'in-\'(안으로)과 \'jacere\'(던지다)가 합쳐져 액체를 몸 안으로 던져 넣는다는 의미에서 유래했습니다.',
      visual: '간호사가 주사기 피스톤을 꾹 눌러 약물을 팔에 밀어 넣는 장면을 상상해 보세요.',
      soundAlike: '\'인젝\'트 발음이 \'안(in)에 잭(ject)하고 꽂다\'와 비슷하다고 연상하면 쉽습니다.',
      context: '의료적인 상황뿐만 아니라, 지루한 대화에 유머를 \'주입하다\'처럼 추상적인 상황에도 쓰입니다.',
      synonymAntonym: '안으로 넣는 insert와 비슷하지만, 강한 압력으로 밀어 넣는 느낌이 더 강합니다.',
    }),
    {
      definition: 'to force a liquid or medicine into a person\'s body using a needle and syringe',
      synonyms: ['vaccinate', 'infuse', 'inoculate'],
      antonyms: ['extract', 'withdraw', 'remove'],
      exampleSentences: [
        { en: 'The nurse had to administer a sedative to the patient before the surgery.', ko: '간호사는 수술 전에 환자에게 진정제를 주사해야 했습니다.' },
        { en: 'Adding fresh talent can bring new energy into a failing project.', ko: '새로운 인재를 영입하는 것은 실패해가는 프로젝트에 새로운 활력을 불어넣을 수 있습니다.' },
      ],
      wordDistractors: ['ingest', 'object', 'eject'],
      definitionDistractors: [
        'to take food or drink into the body by swallowing',
        'to express disagreement or opposition to something',
        'to push or throw something out forcefully',
      ],
    }
  ),
  word('injure', '해치다', 7, 'verb',
    ['치료하다', '보호하다', '회복하다', '건설하다', '개선하다', '도와주다', '유지하다', '수리하다', '강화하다', '축하하다'],
    tips({
      etymology: '라틴어 \'in-\'(부정)과 \'jus\'(법/권리)가 합쳐져 타인의 권리를 침해하거나 해를 끼친다는 의미에서 유래했습니다.',
      visual: '축구 경기 중 선수가 발목을 붙잡고 고통스러워하며 경기장 밖으로 실려 나가는 모습을 상상해 보세요.',
      soundAlike: '\'인저리(injure)\'는 \'인제(이제) 리(이) 몸을 다치게 했니?\'처럼 고통 섞인 질문으로 연상해 보세요.',
      context: '주로 신체적 사고나 운동 경기 중 부상을 입었을 때, 혹은 누군가의 명예를 훼손했을 때 자주 쓰입니다.',
      synonymAntonym: '상처를 입히는 harm과 유사하며, 반대로 상처를 고쳐주는 heal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to cause physical harm or damage to a person or animal, or to impair someone\'s reputation',
      synonyms: ['harm', 'damage', 'wound'],
      antonyms: ['heal', 'cure', 'protect'],
      exampleSentences: [
        { en: 'The professional athlete feared that a sudden fall might permanently damage his knee.', ko: '그 프로 선수는 갑작스러운 낙상이 무릎에 영구적인 부상을 입힐까 봐 두려워했습니다.' },
        { en: 'Be careful not to hurt yourself while using those sharp gardening tools in the yard.', ko: '마당에서 날카로운 원예 도구를 사용하는 동안 다치지 않도록 조심하세요.' },
      ],
      wordDistractors: ['inure', 'incur', 'endure'],
      definitionDistractors: [
        'to accustom someone to something unpleasant over time',
        'to become subject to something unwelcome as a result of one\'s actions',
        'to suffer through something painful without giving up',
      ],
    }
  ),
  word('inn', '여인숙', 4, 'noun',
    ['호텔', '민박', '기숙사', '아파트', '사무실', '도서관', '박물관', '정거장', '식당', '병원'],
    tips({
      etymology: '고대 영어 \'inne\'에서 유래하여 \'내부\'나 \'집 안\'을 뜻하며 나그네를 안으로 들여보내는 장소를 의미합니다.',
      visual: '눈보라가 치는 밤, 숲속 길가에 따뜻한 노란 등불이 켜진 낡은 목조 건물을 상상해 보세요.',
      soundAlike: '전치사 \'in\'과 발음이 같으므로, 지친 여행자가 건물 \'안(in)\'으로 들어가는 모습을 연상하세요.',
      context: '판타지 소설이나 중세 배경의 영화에서 주인공들이 하룻밤 묵으며 정보를 얻는 장소로 자주 등장합니다.',
      synonymAntonym: '규모가 큰 hotel보다는 작고 정겨운 tavern이나 lodge와 비슷하며, 집을 뜻하는 home과는 대조적입니다.',
    }),
    {
      definition: 'A small establishment typically in the country that provides lodging and food for travelers.',
      synonyms: ['hostel', 'lodge', 'tavern'],
      antonyms: ['mansion', 'palace', 'residence'],
      exampleSentences: [
        { en: 'The weary travelers decided to stay at a cozy roadside establishment for the night.', ko: '지친 여행객들은 하룻밤을 묵기 위해 길가의 아늑한 여인숙에 머물기로 했다.' },
        { en: 'Local villagers gathered at the village pub to share news and warm drinks.', ko: '마을 주민들은 소식을 나누고 따뜻한 음료를 마시기 위해 마을 여관에 모였다.' },
      ],
      wordDistractors: ['ink', 'bin', 'din'],
      definitionDistractors: [
        'a colored fluid used for writing or printing',
        'a container for storing or disposing of waste',
        'a loud and unpleasant noise that continues for some time',
      ],
    }
  ),
  word('innocent', '무구한', 5, 'adjective',
    ['유죄의', '복잡한', '타락한', '교활한', '숙련된', '위험한', '인위적인', '불순한', '악의적인', '세속적인'],
    tips({
      etymology: '라틴어 \'in-\'(not)과 \'nocere\'(해를 끼치다)가 결합되어 남에게 해를 끼치지 않는 순수한 상태를 뜻합니다.',
      visual: '하얀 눈밭 위에 아무런 발자국도 찍히지 않은 깨끗한 풍경을 상상해 보세요.',
      soundAlike: '\'이노센트\' 발음이 \'이 노선(line)은 트(여있다)\'와 비슷하죠? 막힘없이 맑고 깨끗한 길을 떠올려 보세요.',
      context: '법정에서는 죄가 없음을 나타낼 때 쓰이지만, 일상에서는 어린아이처럼 세상 물정 모르는 순진함을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '순수한 pure와 반대되는 유죄의 guilty를 짝지어 기억하면 법적/도덕적 개념이 동시에 잡힙니다.',
    }),
    {
      definition: 'not responsible for or guilty of a specific crime or wrongdoing; free from moral wrong or sin',
      synonyms: ['guiltless', 'pure', 'blameless'],
      antonyms: ['guilty', 'sinful', 'corrupt'],
      exampleSentences: [
        { en: 'The jury found the defendant not guilty, declaring him free and clear of all charges.', ko: '배심원단은 피고인에게 무죄 판결을 내리며 그가 모든 혐의에 대해 결백함을 선언했습니다.' },
        { en: 'Children often ask very simple questions because of their naive and curious nature.', ko: '아이들은 특유의 천진난만하고 호기심 많은 본성 때문에 종종 매우 단순한 질문을 던지곤 합니다.' },
      ],
      wordDistractors: ['insolent', 'inoculate', 'innovate'],
      definitionDistractors: [
        'showing rude and disrespectful behavior toward others',
        'to treat with a vaccine to produce immunity',
        'to introduce new methods or ideas for improvement',
      ],
    }
  ),
  word('innovate', '혁신하다', 6, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '함축하다', '정돈하다', '대처하다', '주저하다, 거부하다', '강화하다, 심화하다', '연상하다'],
    tips({
      etymology: '라틴어 \'novus(새로운)\'에서 유래하여 안에서부터 새롭게 만든다는 의미를 담고 있습니다.',
      visual: '낡고 오래된 기계 부품을 최첨단 반도체 칩으로 교체하는 엔지니어의 모습을 상상해 보세요.',
      soundAlike: '\'이노베이트\'는 \'이 노(노력) 베이트(미끼)\'처럼 들리기도 하죠. 새로운 변화를 위해 노력의 미끼를 던지는 모습입니다.',
      context: '기술 산업이나 비즈니스 전략에서 기존의 방식을 완전히 뒤엎고 새로운 가치를 창출할 때 주로 쓰입니다.',
      synonymAntonym: '창조하는 create와는 비슷하지만, 멈춰있는 stagnate와는 정반대의 역동적인 움직임을 나타냅니다.',
    }),
    {
      definition: 'to introduce new ideas, methods, or products to change the way something is done',
      synonyms: ['revolutionize', 'modernize', 'transform'],
      antonyms: ['stagnate', 'deteriorate', 'revert'],
      exampleSentences: [
        { en: 'The tech giant must constantly develop new features to stay ahead of its competitors.', ko: '그 거대 IT 기업은 경쟁자들보다 앞서 나가기 위해 끊임없이 새로운 기능을 혁신해야 합니다.' },
        { en: 'Small businesses often find creative ways to improve their services despite having a limited budget.', ko: '중소기업들은 제한된 예산에도 불구하고 서비스를 혁신하기 위한 창의적인 방법들을 자주 찾아냅니다.' },
      ],
      wordDistractors: ['instigate', 'renovate', 'nominate'],
      definitionDistractors: [
        'to provoke or encourage someone to begin an action',
        'to restore something old to a good state of repair',
        'to propose someone as a candidate for an award',
      ],
    }
  ),
  word('input', '투입', 7, 'noun',
    ['결과', '출력', '삭제', '보관', '이동', '취소', '정지', '검색', '공유', '설정'],
    tips({
      etymology: '안으로(in) 놓다(put)라는 결합어로, 시스템이나 논의 속에 무언가를 집어넣는다는 의미입니다.',
      visual: '컴퓨터 본체 뒷면에 케이블을 꽂거나, 투표함에 용지를 집어넣는 모습을 상상해 보세요.',
      soundAlike: '인풋(input) - \'안에 푹\' 찔러 넣는다고 생각하면 기억하기 쉽습니다.',
      context: '컴퓨터 데이터 입력뿐만 아니라, 누군가의 조언이나 의견을 받을 때도 자주 쓰입니다.',
      synonymAntonym: '데이터를 넣는 \'entry\'와 비슷하고, 밖으로 나오는 \'output\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'something such as energy, money, or information that is put into a system, organization, or machine to help it succeed',
      synonyms: ['contribution', 'feedback', 'entry'],
      antonyms: ['output', 'result', 'product'],
      exampleSentences: [
        { en: 'The marketing team provided valuable advice as their contribution to the new project.', ko: '마케팅 팀은 새 프로젝트에 대한 투입의 일환으로 귀중한 조언을 제공했습니다.' },
        { en: 'Computers process data after receiving the necessary information from the user.', ko: '컴퓨터는 사용자로부터 필요한 정보를 입력받은 후 데이터를 처리합니다.' },
      ],
      wordDistractors: ['output', 'imprint', 'impute'],
      definitionDistractors: [
        'the information or product that comes out of a system',
        'a mark made by pressing something onto a surface',
        'to attribute a fault or action to someone else',
      ],
    }
  ),
  word('inquire', '묻다', 8, 'verb',
    ['대답하다', '무시하다', '명령하다', '침묵하다', '수락하다', '거절하다', '발표하다', '기록하다', '보관하다', '수정하다'],
    tips({
      etymology: '라틴어 \'quaerere(찾다, 구하다)\'에서 유래하여 안으로(in) 정보를 찾아 들어간다는 의미를 담고 있습니다.',
      visual: '호텔 안내 데스크에서 직원을 향해 궁금한 표정으로 질문을 던지는 여행객의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인콰이어\'이므로, 안(in)에 있는 것을 콰이어(구하여) 내기 위해 질문한다고 외우면 쉽습니다.',
      context: '비즈니스 이메일이나 공식적인 상황에서 단순한 ask보다 더 격식 있게 질문할 때 자주 쓰입니다.',
      synonymAntonym: '궁금증을 해결하려 묻는 ask와 유의어 관계이며, 답을 주는 answer와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to seek information by questioning or to make an investigation into a specific matter',
      synonyms: ['query', 'interrogate', 'question'],
      antonyms: ['respond', 'reply', 'answer'],
      exampleSentences: [
        { en: 'The detective arrived at the scene to seek more details about the incident from the witnesses.', ko: '형사는 목격자들로부터 사건에 대한 더 자세한 내용을 묻기 위해 현장에 도착했습니다.' },
        { en: 'Potential buyers often call the office to ask about the current availability of the property.', ko: '잠재적 구매자들은 종종 부동산의 현재 매물 여부를 문의하기 위해 사무실로 전화합니다.' },
      ],
      wordDistractors: ['require', 'acquire', 'inspire'],
      definitionDistractors: [
        'to need something as a necessary condition',
        'to gain possession of something through effort',
        'to fill someone with the urge to do something creative',
      ],
    }
  ),
  word('insect', '곤충', 4, 'noun',
    ['식물', '포유류', '파충류', '박테리아', '균류', '조류', '양서류', '어류', '미생물', '잡초'],
    tips({
      etymology: '라틴어 insectum에서 유래했으며, \'마디로 나뉜 몸\'이라는 뜻으로 머리, 가슴, 배로 구분되는 특징을 나타냅니다.',
      visual: '여섯 개의 다리와 더듬이를 가진 작은 개미나 나비가 정원을 기어 다니는 모습을 상상해 보세요.',
      soundAlike: '\'인섹트\' 발음이 \'안(in)에 색(sec)이 트(t)였다\'고 연상하며 몸통 마디마디가 나뉜 모습을 떠올려 보세요.',
      context: '생물학 수업이나 자연 다큐멘터리에서 개미, 벌, 나비 등을 통칭할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'bug는 구어체에서 흔히 쓰이며, mammal이나 reptile 같은 다른 동물 분류군과 대조하여 기억하면 좋습니다.',
    }),
    {
      definition: 'A small animal that has six legs and generally one or two pairs of wings.',
      synonyms: ['bug', 'arthropod', 'critter'],
      antonyms: ['mammal', 'vertebrate', 'human'],
      exampleSentences: [
        { en: 'A rare species of butterfly is the most beautiful creature in this forest.', ko: '희귀한 나비 종은 이 숲에서 가장 아름다운 생명체입니다.' },
        { en: 'Many farmers use natural methods to keep every harmful pest away from their crops.', ko: '많은 농부들은 농작물로부터 해로운 벌레들을 멀리하기 위해 천연 방법을 사용합니다.' },
      ],
      wordDistractors: ['inset', 'incest', 'intact'],
      definitionDistractors: [
        'a thing that is put in or inserted into something else',
        'a close familial relationship that violates social norms',
        'not damaged or impaired; remaining whole and complete',
      ],
    }
  ),
  word('insert', '끼워넣다', 5, 'verb',
    ['빼내다', '제거하다', '추출하다', '삭제하다', '분리하다', '거부하다', '이동하다', '복사하다', '수정하다', '파괴하다'],
    tips({
      etymology: '라틴어 \'inserere\'에서 유래했으며, \'in(안으로)\'과 \'serere(결합하다)\'가 합쳐져 안으로 끼워 넣는다는 의미가 되었습니다.',
      visual: '신문 사이에 끼워져 있는 광고 전단지나 잡지 속의 별책 부록을 상상해 보세요.',
      soundAlike: '컴퓨터 키보드의 \'Insert\' 키를 누를 때 글자 사이에 새로운 문자가 들어가는 모습을 연상하세요.',
      context: '주로 인쇄물이나 기계 장치 내부에 추가로 덧붙여진 부품이나 페이지를 가리킬 때 사용됩니다.',
      synonymAntonym: '추가물인 enclosure와 유사하며, 전체를 의미하는 whole이나 본체와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to place, fit, or push something into something else, especially into a narrow space or opening',
      synonyms: ['introduce', 'place', 'embed'],
      antonyms: ['extract', 'remove', 'withdraw'],
      exampleSentences: [
        { en: 'The Sunday newspaper often includes a colorful advertising insert for local supermarkets.', ko: '일요일 신문에는 종종 지역 슈퍼마켓을 위한 화려한 광고 전단지가 끼워져 있다.' },
        { en: 'Check the product packaging for a small paper insert containing the instructions for use.', ko: '사용 설명서가 담긴 작은 종이 삽입물을 제품 포장에서 확인하십시오.' },
      ],
      wordDistractors: ['invert', 'assert', 'desert'],
      definitionDistractors: [
        'to turn something upside down or reverse its position',
        'to state a fact or belief confidently and forcefully',
        'to abandon a person or place without intending to return',
      ],
    }
  ),
  word('inside', '안쪽', 3, 'noun',
    ['좁은길', '주디 (여성 이름)', '변명', '한국인', '순환', '어려움, 고난', '청중', '준비, 대비', '(배의) 노', '위로, 조의'],
    tips({
      etymology: '안을 뜻하는 \'in\'과 옆면을 뜻하는 \'side\'가 결합되어 내부라는 의미가 되었습니다.',
      visual: '상자 안에 소중한 물건이 담겨 있는 모습을 상상해 보세요.',
      soundAlike: '\'인사이드\' 발음이 \'인사(안부)\'를 나누러 집 안으로 들어가는 상황과 비슷합니다.',
      context: '건물의 내부나 감정의 내면을 표현할 때 주로 사용됩니다.',
      synonymAntonym: 'interior와는 유의어 관계이며, exterior와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the inner part, side, or surface of something',
      synonyms: ['interior', 'inner', 'core'],
      antonyms: ['exterior', 'outside', 'surface'],
      exampleSentences: [
        { en: 'The walls on the interior were painted a bright shade of white.', ko: '안쪽 벽면은 밝은 흰색으로 칠해져 있었습니다.' },
        { en: 'She felt a sense of calm deep within her heart.', ko: '그녀는 마음 깊은 곳에서 평온함을 느꼈습니다.' },
      ],
      wordDistractors: ['incite', 'beside', 'aside'],
      definitionDistractors: [
        'to encourage or stir up violent or unlawful behavior',
        'at the side of or next to something or someone',
        'to one side or out of the way of something',
      ],
    }
  ),
  word('insight', '통찰', 6, 'noun',
    ['무관심', '오해', '무지', '표면', '혼란', '망각', '편견', '거부', '침묵', '의심'],
    tips({
      etymology: '안을 들여다본다는 뜻의 \'in\'과 \'sight\'가 결합되어 사물의 본질을 꿰뚫어 보는 힘을 의미합니다.',
      visual: '어두운 방 안에서 손전등을 켜서 숨겨진 보물을 찾아내는 날카로운 눈빛을 상상해 보세요.',
      soundAlike: '\'인사이트\'라고 발음하며, 사람의 \'인\'격과 \'사\'고력이 깊어지는 \'이트(it)\'라고 기억하세요.',
      context: '비즈니스 분석이나 심리학에서 단순한 정보 이상의 깊은 이해를 표현할 때 자주 쓰입니다.',
      synonymAntonym: '깊은 이해를 뜻하는 understanding과 반대로 아무것도 모르는 상태인 ignorance를 함께 기억하세요.',
    }),
    {
      definition: 'the capacity to gain an accurate and deep intuitive understanding of a complex issue or situation',
      synonyms: ['perception', 'discernment', 'intuition'],
      antonyms: ['ignorance', 'stupidity', 'blindness'],
      exampleSentences: [
        { en: 'The researcher provided a valuable perspective that gave us a new understanding of consumer behavior.', ko: '그 연구원은 소비자 행동에 대한 새로운 이해를 제공하는 귀중한 통찰을 제시했습니다.' },
        { en: 'Years of experience in the industry have given her a profound grasp of market trends.', ko: '업계에서의 수년간의 경험은 그녀에게 시장 트렌드에 대한 깊은 통찰력을 주었습니다.' },
      ],
      wordDistractors: ['incite', 'indict', 'insult'],
      definitionDistractors: [
        'to encourage or stir up violent or unlawful behavior',
        'to formally charge someone with a serious crime',
        'to speak to someone in a rude and disrespectful manner',
      ],
    }
  ),
  word('insist', '주장하다', 7, 'verb',
    ['포기하다', '양보하다', '동의하다', '무시하다', '철회하다', '망설이다', '수용하다', '부인하다', '침묵하다', '방관하다'],
    tips({
      etymology: '라틴어 \'insistere\'에서 유래하며, \'in(위에)\'과 \'sistere(서다)\'가 합쳐져 어떤 입장 위에 굳건히 서 있다는 느낌을 줍니다.',
      visual: '상대방의 반대에도 불구하고 자기 주장을 굽히지 않고 발을 땅에 꽉 붙이고 서 있는 사람을 상상해 보세요.',
      soundAlike: '\'인시스트\'는 \'안 씻었트\'와 발음이 비슷합니다. \'난 안 씻었다고!\'라며 끝까지 우기는 상황을 떠올려 보세요.',
      context: '자신의 의견이 옳다고 확신하거나, 상대방이 거절해도 무언가를 꼭 해야 한다고 강요할 때 주로 사용됩니다.',
      synonymAntonym: '강하게 주장하는 assert와 유의어이며, 쉽게 물러나는 yield와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to state a firm demand or opinion that will not be changed, even when others disagree or oppose it',
      synonyms: ['assert', 'maintain', 'persist'],
      antonyms: ['abandon', 'surrender', 'yield'],
      exampleSentences: [
        { en: 'The customer continued to demand a full refund despite the store policy.', ko: '그 고객은 매장 규정에도 불구하고 전액 환불을 계속해서 주장했다.' },
        { en: 'My parents always make sure that we finish all our vegetables before leaving the table.', ko: '우리 부모님은 식탁을 떠나기 전에 우리가 채소를 다 먹어야 한다고 항상 고집하신다.' },
      ],
      wordDistractors: ['consist', 'resist', 'desist'],
      definitionDistractors: [
        'to be composed or made up of particular elements',
        'to withstand the action or effect of something',
        'to stop doing something or cease an activity',
      ],
    }
  ),
  word('inspect', '검사하다', 4, 'verb',
    ['시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다'],
    tips({
      etymology: '안을 들여다본다는 뜻의 라틴어 \'inspicere\'에서 유래하여 꼼꼼히 살피는 느낌을 줍니다.',
      visual: '돋보기를 들고 기계의 아주 작은 부품이나 서류의 오타를 샅샅이 뒤지는 탐정을 상상해 보세요.',
      soundAlike: '발음이 \'인스펙트\'이므로 \'안(in)을 스펙타클(spect)하게 들여다본다\'라고 연상하면 쉽습니다.',
      context: '공항 보안 검색대에서 가방을 확인하거나, 건물의 안전 상태를 점검할 때 주로 사용됩니다.',
      synonymAntonym: '꼼꼼히 보는 examine과 대조적으로, 대충 훑어보고 무시하는 ignore를 함께 기억하세요.',
    }),
    {
      definition: 'to look at something very carefully in order to learn more about it or find problems',
      synonyms: ['examine', 'scrutinize', 'investigate'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The customs officer will check your luggage to ensure no illegal items are brought into the country.', ko: '세관원은 불법 물품이 국내로 반입되지 않도록 당신의 수하물을 검사할 것입니다.' },
        { en: 'Safety experts arrived at the construction site to evaluate the structural integrity of the new bridge.', ko: '안전 전문가들이 새 다리의 구조적 무결성을 점검하기 위해 건설 현장에 도착했습니다.' },
      ],
      wordDistractors: ['suspect', 'respect', 'expect'],
      definitionDistractors: [
        'to have a feeling that someone is guilty without proof',
        'a feeling of admiration for someone\'s qualities or abilities',
        'to regard something as likely to happen in the future',
      ],
    }
  ),
  word('inspire', '영감을 주다', 5, 'verb',
    ['억제하다', '낙담시키다', '방해하다', '무시하다', '파괴하다', '중단하다', '거절하다', '비난하다', '지루하게하다', '포기하다'],
    tips({
      etymology: '라틴어 \'inspirare\'에서 유래했으며, \'안으로(in)\' \'숨을 불어넣다(spirare)\'라는 의미를 담고 있습니다.',
      visual: '예술가가 하얀 캔버스 앞에서 갑자기 번뜩이는 아이디어가 떠올라 붓을 잡는 모습을 상상해 보세요.',
      soundAlike: '\'인스파이어\'는 \'안에(in) 스파크(spark)가 튀다\'와 발음이 비슷하여 내면에 불꽃을 일으키는 이미지를 연상시킵니다.',
      context: '주로 위대한 인물, 예술 작품, 혹은 감동적인 연설이 타인에게 긍정적인 영향을 줄 때 자주 쓰입니다.',
      synonymAntonym: '누군가에게 동기를 부여하는 motivate와 비슷하지만, 단순히 포기하는 discourage와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to fill someone with the urge or ability to do or feel something, especially to do something creative',
      synonyms: ['motivate', 'encourage', 'stimulate'],
      antonyms: ['depress', 'discourage', 'dishearten'],
      exampleSentences: [
        { en: 'The coach gave a powerful speech to motivate the team and fill them with confidence before the final match.', ko: '코치는 결승전 전에 팀원들에게 동기를 부여하고 자신감을 불어넣기 위해 강력한 연설을 했습니다.' },
        { en: 'Beautiful landscapes often help painters create their most famous masterpieces.', ko: '아름다운 풍경은 종종 화가들이 가장 유명한 걸작들을 만들어내도록 자극을 줍니다.' },
      ],
      wordDistractors: ['aspire', 'perspire', 'expire'],
      definitionDistractors: [
        'to direct one\'s hopes or ambitions toward achieving something',
        'to release moisture through the pores of the skin',
        'to come to the end of a period of validity',
      ],
    }
  ),
  word('install', '설치하다', 6, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'in-\'(안에)과 \'stallum\'(자리)이 합쳐져 \'특정한 자리에 놓다\'라는 의미에서 유래했습니다.',
      visual: '컴퓨터 화면에 로딩 바가 차오르며 소프트웨어가 깔리는 모습을 상상해 보세요.',
      soundAlike: '\'인스톨\'은 \'안에(in) 세우다(stall)\'와 발음이 비슷하여 장비를 세워 두는 이미지를 연상시킵니다.',
      context: '컴퓨터 프로그램뿐만 아니라 에어컨이나 세탁기 같은 가전제품을 배치할 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 세우는 set up과 유사하며, 반대로 제거하는 remove와 대조됩니다.',
    }),
    {
      definition: 'to place or fix equipment or software in position so that it is ready to be used',
      synonyms: ['set up', 'mount', 'establish'],
      antonyms: ['uninstall', 'remove', 'detach'],
      exampleSentences: [
        { en: 'The technician will arrive tomorrow to set up the new air conditioning unit.', ko: '기술자가 내일 새 에어컨 장치를 설치하러 올 것입니다.' },
        { en: 'You need to download the latest security patch before you can use the application.', ko: '애플리케이션을 사용하기 전에 최신 보안 패치를 설치해야 합니다.' },
      ],
      wordDistractors: ['instill', 'instal', 'enthrall'],
      definitionDistractors: [
        'to gradually introduce an idea or attitude into a person\'s mind',
        'to place someone in a new position of authority',
        'to capture the fascinated attention of someone completely',
      ],
    }
  ),
  word('instance', '실례', 7, 'noun',
    ['그래프, 도표', '(주택, 방, 건물)사용자/입주자', '정신', '전신', '간격, 틈', '로잘린 (여성 이름)', '속담, 격언', '그래픽', '동창생들, 졸업생들', '내일'],
    tips({
      etymology: '라틴어 \'instantia\'에서 유래했으며, \'가까이 서 있는 것\' 즉 눈앞에 나타난 구체적인 사례를 뜻합니다.',
      visual: '수많은 추상적인 규칙들 사이에서 실제로 툭 튀어나와 있는 구체적인 예시 하나를 상상해 보세요.',
      soundAlike: '\'인스턴트(instant)\' 식품처럼, 어떤 상황에서 즉각적으로 꺼내 보여줄 수 있는 \'예시\'라고 연상하세요.',
      context: '주로 \'for instance\'라는 숙어 형태로 쓰여 \'예를 들어\'라는 의미로 문장 중간에 자주 등장합니다.',
      synonymAntonym: 'example과 비슷하지만, instance는 특정 상황이나 단계에서 발생하는 구체적인 사건의 성격이 더 강합니다.',
    }),
    {
      definition: 'A particular case or occurrence of something that serves as an example.',
      synonyms: ['example', 'illustration', 'occurrence'],
      antonyms: ['generality', 'abstraction', 'standard'],
      exampleSentences: [
        { en: 'There have been several cases where the software failed, and this is just one specific example.', ko: '소프트웨어가 실패한 사례가 여러 번 있었는데, 이것은 단지 하나의 구체적인 실례일 뿐입니다.' },
        { en: 'Let us consider a particular situation where a small mistake led to a major disaster.', ko: '작은 실수가 큰 재앙으로 이어진 특정한 실례를 하나 살펴봅시다.' },
      ],
      wordDistractors: ['instant', 'distance', 'substance'],
      definitionDistractors: [
        'happening or coming immediately without any delay',
        'the amount of space between two points or places',
        'the real physical matter of which a thing consists',
      ],
    }
  ),
  word('instant', '즉시의', 4, 'adjective',
    ['만장일치의, 동의하는\n(unanimously  만장일치로)', '주장하는/단언하는', '만연한, 널리 퍼진', '가설적인', '부러지기 쉬운, 깨지기 쉬운', '덧 없는, 영속하지 않는', '다른', '대표적인', '기본적인', '중요한'],
    tips({
      etymology: '라틴어 instans에서 유래하여 \'가까이 서 있는\' 즉, 바로 눈앞에 닥친 긴박한 상태를 의미합니다.',
      visual: '뜨거운 물만 부으면 바로 완성되는 컵라면이나 커피 믹스 포장지를 떠올려 보세요.',
      soundAlike: '\'인스턴트\' 식품은 주문하자마자 \'인(in)\' 바로 나오는 \'스탠드(stand)\'형 음식이라고 연상하세요.',
      context: '메시지를 보내자마자 답장이 올 때나 사고가 발생한 찰나의 순간을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'immediate와 유의어이며, 한참 뒤에 일어나는 delayed와는 반대되는 개념입니다.',
    }),
    {
      definition: 'happening or coming immediately without any delay',
      synonyms: ['immediate', 'prompt', 'instantaneous'],
      antonyms: ['delayed', 'gradual', 'eventual'],
      exampleSentences: [
        { en: 'The new software provided an instant response to every user command.', ko: '새 소프트웨어는 모든 사용자 명령에 즉각적인 반응을 제공했습니다.' },
        { en: 'The photograph brought back memories of that summer afternoon.', ko: '그 사진은 그해 여름 오후의 기억을 즉각적으로 불러일으켰습니다.' },
      ],
      wordDistractors: ['instinct', 'instance', 'distant'],
      definitionDistractors: [
        'a natural impulse that causes a particular behavior',
        'a particular case or example of something occurring',
        'far away in space or time from a given point',
      ],
    }
  ),
  word('instead', '대신에', 5, 'adverb',
    ['그러나', '오히려', '결국', '비록', '게다가', '따라서', '마침내', '갑자기', '반대로', '드물게'],
    tips({
      etymology: '고대 영어 \'stede(장소)\'에서 유래하여 \'어떤 장소나 자리를 대신하여\'라는 의미를 가집니다.',
      visual: '메뉴판에서 원래 고르려던 커피 대신 주스를 가리키는 손가락을 상상해 보세요.',
      soundAlike: '\'인스테드\'는 \'인(안에) + 스테이(머물다)\'와 비슷하게 들리니, 원래 자리에 다른 것이 머문다고 기억하세요.',
      context: '선택의 기로에서 A를 포기하고 B를 선택할 때 문장 끝이나 앞에 주로 사용됩니다.',
      synonymAntonym: '대체재를 뜻하는 alternative와 비슷하며, 필수적인 요소를 뜻하는 necessity와는 거리가 멉니다.',
    }),
    {
      definition: 'as a substitute or a replacement for something else that was mentioned or expected',
      synonyms: ['alternatively', 'rather', 'substitutively'],
      antonyms: ['simultaneously', 'additionally', 'consequently'],
      exampleSentences: [
        { en: 'The restaurant was out of fish, so we ordered chicken.', ko: '식당에 생선이 떨어져서 우리는 대신 치킨을 주문했습니다.' },
        { en: 'She did not go to the cinema; she stayed home and read a book.', ko: '그녀는 영화관에 가지 않았습니다. 대신 집에 머물며 책을 읽었습니다.' },
      ],
      wordDistractors: ['instate', 'instep', 'insisted'],
      definitionDistractors: [
        'to place someone in a position of authority officially',
        'the top surface of a person\'s foot between the ankle and toes',
        'to have demanded something forcefully in the past',
      ],
    }
  ),
  word('instinct', '본능', 6, 'noun',
    ['기념일', '갈대', '보행자', '해군 장군[제독]', '백만장자', '오렌지', '건강 진단', '교향곡', '담론', '삼각형'],
    tips({
      etymology: '라틴어 \'instinctus\'에서 유래했으며, \'안에서(in) 찌르다(stinct)\'라는 의미로 마음속에서 저절로 일어나는 충동을 뜻합니다.',
      visual: '갓 태어난 새끼 오리가 태어나자마자 엄마를 따라 줄지어 걷는 모습을 상상해 보세요.',
      soundAlike: '\'인스턴트(instant)\' 식품처럼 고민할 시간 없이 즉각적으로 튀어나오는 반응이라고 생각하면 쉽습니다.',
      context: '위험한 상황에서 머리보다 몸이 먼저 반응하여 피할 때 주로 사용되는 단어입니다.',
      synonymAntonym: '학습된 지식인 \'learning\'과 반대되는, 타고난 기질인 \'intuition\'과 함께 기억하세요.',
    }),
    {
      definition: 'A natural tendency or impulse that causes a person or animal to behave in a particular way without needing to think or learn about it.',
      synonyms: ['intuition', 'impulse', 'inclination'],
      antonyms: ['reason', 'knowledge', 'deliberation'],
      exampleSentences: [
        { en: 'Birds have a natural tendency to migrate south for the winter by following their internal drive.', ko: '새들은 내면의 이끌림을 따라 겨울을 나기 위해 남쪽으로 이동하는 타고난 본능을 가지고 있습니다.' },
        { en: 'Her first reaction was to trust the stranger, even though she had no logical reason to do so.', ko: '논리적인 이유는 없었지만, 그녀의 첫 번째 본능은 그 낯선 사람을 믿는 것이었습니다.' },
      ],
      wordDistractors: ['distinct', 'extinct', 'restrict'],
      definitionDistractors: [
        'recognizably different from something else; unique',
        'no longer existing because all members have died',
        'to put a limit on or keep under control',
      ],
    }
  ),
  word('institute', '만들다', 7, 'verb',
    ['폐지하다', '해체하다', '중단하다', '철회하다', '취소하다', '무시하다', '거부하다', '파괴하다', '방치하다', '포기하다'],
    tips({
      etymology: '라틴어 \'instituere\'에서 유래하여 \'세우다\' 혹은 \'설립하다\'라는 의미를 담고 있습니다.',
      visual: '대학 캠퍼스 정문에 커다란 돌기둥이 세워져 있는 연구소 건물을 상상해 보세요.',
      soundAlike: '발음이 \'인스티튜트\'이므로 \'안(in)에 서(stitute) 있는 건물\'로 기억하면 쉽습니다.',
      context: '주로 교육, 과학, 기술 분야에서 전문적인 목적을 가진 조직을 지칭할 때 사용됩니다.',
      synonymAntonym: 'organization과 유사하며, 개별적인 개인을 뜻하는 individual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to set up or establish a system, rule, or organization, especially by introducing it officially for the first time',
      synonyms: ['establish', 'found', 'inaugurate'],
      antonyms: ['abolish', 'dismantle', 'terminate'],
      exampleSentences: [
        { en: 'The research group decided to join a prestigious technological institute to further their studies.', ko: '그 연구 그룹은 연구를 심화하기 위해 명성 있는 기술 연구소에 합류하기로 결정했습니다.' },
        { en: 'A new policy was proposed by the policy institute to improve urban transportation systems.', ko: '도시 교통 체계를 개선하기 위해 정책 연구소에서 새로운 정책을 제안했습니다.' },
      ],
      wordDistractors: ['constitute', 'substitute', 'prostitute'],
      definitionDistractors: [
        'to be a component or essential part of something',
        'to use or add something in place of another',
        'a person who engages in an activity for unworthy motives',
      ],
    }
  ),
  word('instruct', '가르치다', 4, 'verb',
    ['배우다', '따르다', '무시하다', '잊다', '방치하다', '모르다', '오해하다', '혼동하다', '묻다', '듣다'],
    tips({
      etymology: '라틴어 \'instruere\'에서 유래하며, \'안에(in) 쌓아 올리다(struere)\'라는 뜻으로 지식을 쌓아주는 것을 의미합니다.',
      visual: '칠판 앞에서 지휘봉을 들고 학생들에게 하나하나 길을 안내하는 선생님의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'인스트럭트\'이므로, \'안(in)에서 틀(struct)을 잡아준다\'고 연상하면 쉽습니다.',
      context: '주로 학교 교육보다는 구체적인 기술이나 작업 방법을 알려줄 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '지식을 전달하는 teach와 유사하며, 배우는 입장인 learn과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to provide someone with information, directions, or systematic knowledge on how to do something',
      synonyms: ['teach', 'guide', 'educate'],
      antonyms: ['learn', 'follow', 'mislead'],
      exampleSentences: [
        { en: 'The manual will show you how to assemble the furniture correctly.', ko: '설명서는 가구를 올바르게 조립하는 방법을 가르쳐 줄 것입니다.' },
        { en: 'She was hired to train the new employees on the safety protocols.', ko: '그녀는 신입 사원들에게 안전 수칙을 교육하기 위해 고용되었습니다.' },
      ],
      wordDistractors: ['obstruct', 'construct', 'destruct'],
      definitionDistractors: [
        'to block or get in the way of a passage or process',
        'to build or put together from separate parts',
        'to cause deliberate and severe damage to something',
      ],
    }
  ),
  word('instrument', '기구', 5, 'noun',
    ['마룻바닥', '갤런 (액량 단위)', '예선 참가자, 한정사', '구성, 구조', '책망/나무람', '꺼림, 마지못해 함', '해초의 일종', '참나무', '의무', '수렁, 곤경'],
    tips({
      etymology: '라틴어 \'instruere\'에서 유래하여 \'준비하다\' 혹은 \'구축하다\'라는 의미에서 무언가를 수행하기 위한 도구라는 뜻으로 발전했습니다.',
      visual: '과학 실험실에서 정밀하게 측정하는 금속 도구나 오케스트라의 반짝이는 악기를 상상해 보세요.',
      soundAlike: '발음이 \'인스트루먼트\'이므로 \'안에(in) 설치된(stru) 먼지(ment) 터는 도구\'라고 연상해 보세요.',
      context: '음악 분야에서는 악기를 뜻하지만, 과학이나 의학 분야에서는 정밀한 측정 장비나 수술 도구를 의미합니다.',
      synonymAntonym: '도구를 뜻하는 device와 유의어 관계이며, 도구 없이 맨손으로 하는 상태와 대조될 수 있습니다.',
    }),
    {
      definition: 'A tool or implement, especially one used for delicate or scientific work, or a device used to produce musical sounds.',
      synonyms: ['device', 'apparatus', 'implement'],
      antonyms: ['barrier', 'obstruction', 'hindrance'],
      exampleSentences: [
        { en: 'The surgeon reached for a sterilized instrument to begin the delicate operation.', ko: '외과 의사는 정밀한 수술을 시작하기 위해 소독된 기구에 손을 뻗었다.' },
        { en: 'Each musical instrument in the orchestra contributes to the complex harmony of the symphony.', ko: '오케스트라의 각 악기들은 교향곡의 복잡한 화음에 기여한다.' },
      ],
      wordDistractors: ['increment', 'ornament', 'impediment'],
      definitionDistractors: [
        'an increase or addition in a regular series of amounts',
        'a decorative object used to make something look attractive',
        'a hindrance or obstruction that delays progress',
      ],
    }
  ),
  word('insult', '모욕하다', 6, 'verb',
    ['칭찬하다', '존경하다', '격려하다', '수용하다', '보호하다', '축하하다', '위로하다', '감사하다', '신뢰하다', '추천하다'],
    tips({
      etymology: '라틴어 \'insultare\'에서 유래했으며, \'위로 뛰어오르다\'라는 의미가 \'상대방을 짓밟고 조롱하다\'는 뜻으로 발전했습니다.',
      visual: '누군가에게 손가락질을 하며 무례한 말을 내뱉어 상대방의 얼굴이 붉어지는 장면을 상상해 보세요.',
      soundAlike: '\'안(in)에 설(sul)탕 대신 소금을 타(t)\'서 상대방을 기분 나쁘게 만드는 상황으로 연상해 보세요.',
      context: '주로 상대방의 외모, 능력, 배경에 대해 무례한 말을 하여 자존심을 상하게 할 때 사용됩니다.',
      synonymAntonym: '남을 깎아내리는 offend와 높여주는 compliment를 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to speak to or treat someone with disrespect or scornful abuse',
      synonyms: ['offend', 'humiliate', 'mock'],
      antonyms: ['compliment', 'praise', 'flatter'],
      exampleSentences: [
        { en: 'He felt deeply hurt when his colleagues began to mock his ideas and openly mock his efforts.', ko: '동료들이 그의 아이디어를 비웃고 공개적으로 그의 노력을 모욕했을 때 그는 깊은 상처를 받았습니다.' },
        { en: 'The politician refused to respond to the personal attacks intended to degrade his reputation.', ko: '그 정치인은 자신의 명성을 깎아내리려는 의도의 개인적인 모욕에 대응하기를 거부했습니다.' },
      ],
      wordDistractors: ['insure', 'result', 'consult'],
      definitionDistractors: [
        'to arrange compensation for damage or loss through payments',
        'a consequence or outcome of an action or situation',
        'to seek information or advice from an expert',
      ],
    }
  ),
  word('insure', '보증하다', 7, 'verb',
    ['좌절시키다; 호일', '실행하다, 처형하다', '화나게하다', '내리다', '게걸스럽게 먹다', '감히 하다', '선택하다', '결정하다', '요청하다', '설명하다'],
    tips({
      etymology: '접두사 in-(안으로)과 sure(확실한)가 결합하여 어떤 상태를 확실하게 만든다는 의미에서 유래했습니다.',
      visual: '사고가 났을 때 보험사에서 증서를 내밀며 안심시키는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'인슈어\'로 들리는데, \'인생을 슈어(Sure, 확실하게)하게 보증하다\'로 기억하면 쉽습니다.',
      context: '주로 재산이나 생명에 대해 보험에 들거나, 미래의 손실을 방지하기 위해 보증할 때 사용됩니다.',
      synonymAntonym: '보장하는 guarantee와 유사하며, 위험에 노출시키는 endanger와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To arrange for compensation in the event of damage to or loss of property, or injury to or the death of someone, in exchange for regular payments.',
      synonyms: ['guarantee', 'warrant', 'underwrite'],
      antonyms: ['endanger', 'imperil', 'jeopardize'],
      exampleSentences: [
        { en: 'The company decided to protect its assets and provide coverage for the new warehouse against fire damage.', ko: '회사는 자산을 보호하고 화재 피해에 대비해 새 창고를 보증하기로 결정했습니다.' },
        { en: 'Many travelers choose to protect their trips against unexpected cancellations or medical emergencies abroad.', ko: '많은 여행객들이 해외에서의 예기치 못한 취소나 의료 비상사태에 대비해 여행을 보증하는 것을 선택합니다.' },
      ],
      wordDistractors: ['ensure', 'endure', 'inure'],
      definitionDistractors: [
        'to make certain that something will happen correctly',
        'to suffer through something painful without giving up',
        'to accustom someone to something unpleasant over time',
      ],
    }
  ),
];
