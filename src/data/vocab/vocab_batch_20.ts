import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch20: VocabItem[] = [
  word('Lassitude', '무기력', 10, 'noun',
    ['활력', '에너지', '열정', '기운', '원기', '활성', '의욕', '생기', '활발', '각성'],
    tips({
      etymology: '라틴어 lassus(피곤한) + -tude -> 지침의 상태',
      visual: '소파에 축 늘어져 눈을 감은 사람',
      soundAlike: '래서튜드 = lassitudinous(무기력한)',
      context: 'A wave of lassitude overwhelmed her after the exam.',
      synonymAntonym: '동의어: lethargy, weariness, 반의어: vigor',
    }),
    {
      definition: 'a state of physical or mental weariness, lack of energy',
      wordDistractors: ['Latitude', 'Assiduity', 'Languor'],
      definitionDistractors: [
        'physical strength and good health',
        'strong desire or enthusiasm to do something',
        'the ability to think clearly and make decisions',
      ],
      exampleSentences: [
        { en: 'A wave of lassitude overwhelmed her after the exam.', ko: '시험 후 무기력이 그녀를 덮쳤다.' },
        { en: 'The heat induced a feeling of lassitude in everyone.', ko: '더위가 모든 사람에게 무기력을 느끼게 했다.' },
      ],
    }
  ),
  word('Legerdemain', '요술', 10, 'noun',
    ['솔직함', '투명', '노골', '직설', '진실', '정직', '공개', '드러남', '순수', '속임없음'],
    tips({
      etymology: '프랑스어 léger(가벼운) + de main(손의) -> 손 기술',
      visual: '카드와 손가락이 빠르게 움직이는 마술사',
      soundAlike: '레저더메인 = legerdemainist(요술사)',
      context: 'The contract was approved through legal legerdemain.',
      synonymAntonym: '동의어: sleight of hand, trickery, 반의어: honesty',
    }),
    {
      definition: 'sleight of hand or skillful deception, especially in magic tricks',
      wordDistractors: ['Legitimate', 'Legislation', 'Legendary'],
      definitionDistractors: [
        'the quality of being honest and straightforward',
        'a formal agreement between two or more parties',
        'the practice of applying laws and rules',
      ],
      exampleSentences: [
        { en: 'The contract was approved through legal legerdemain.', ko: '그 계약은 법적 요술로 승인되었다.' },
        { en: 'The magician amazed the audience with his legerdemain.', ko: '마술사는 요술로 관객들을 놀라게 했다.' },
      ],
    }
  ),
  word('Licentious', '방종한', 10, 'adjective',
    ['절제된', '도덕적인', '경건한', '엄격한', '자제하는', '절제', '도덕', '경건', '엄격', '자제'],
    tips({
      etymology: '라틴어 licentia(허가) + -ous -> 제한 없는',
      visual: '야한 파티에서 난폭하게 즐기는 군중',
      soundAlike: '라이센셔스 = licentiousness(방종)',
      context: 'The licentious behavior shocked the community.',
      synonymAntonym: '동의어: debauched, promiscuous, 반의어: virtuous',
    }),
    {
      definition: 'lacking moral restraint, especially in sexual conduct',
      wordDistractors: ['Licensed', 'Licentiate', 'Lascivious'],
      definitionDistractors: [
        'having high moral standards and principles',
        'showing self-control and moderation',
        'strictly adhering to rules or customs',
      ],
      exampleSentences: [
        { en: 'The licentious behavior shocked the community.', ko: '그 방종한 행동이 지역사회를 충격에 빠뜨렸다.' },
        { en: 'The novel was banned for its licentious content.', ko: '그 소설은 방종한 내용 때문에 금지되었다.' },
      ],
    }
  ),
  word('Lugubrious', '슬픈', 10, 'adjective',
    ['명랑한', '밝은', '유쾌한', '환한', '기쁜', '명랑', '밝음', '유쾌', '환함', '기쁨'],
    tips({
      etymology: '라틴어 lugere(슬퍼하다) + -ous -> 비통한',
      visual: '검은 옷을 입고 고개 숙인 장례 행렬',
      soundAlike: '루구브리어스 = lugubriously(슬프게)',
      context: 'The lugubrious music suited the funeral.',
      synonymAntonym: '동의어: mournful, doleful, 반의어: cheerful',
    }),
    {
      definition: 'looking or sounding sad and dismal',
      wordDistractors: ['Ludicrous', 'Luminous', 'Lubricious'],
      definitionDistractors: [
        'full of life and high spirits',
        'causing or intended to cause laughter',
        'giving out or reflecting bright light',
      ],
      exampleSentences: [
        { en: 'The lugubrious music suited the funeral.', ko: '그 슬픈 음악이 장례식에 어울렸다.' },
        { en: 'He had a lugubrious expression on his face.', ko: '그는 얼굴에 슬픈 표정을 짓고 있었다.' },
      ],
    }
  ),
  word('Magnanimous', '관대한', 10, 'adjective',
    ['인색한', '치졸한', '보복적인', '편협한', '좁은', '인색', '치졸', '보복', '편협', '좁음'],
    tips({
      etymology: '라틴어 magnus(큰) + animus(마음) -> 큰 마음',
      visual: '손을 내밀어 용서하는 지도자',
      soundAlike: '맥내니머스 = magnanimity(관대함)',
      context: 'It was magnanimous of him to forgive.',
      synonymAntonym: '동의어: generous, noble, 반의어: petty',
    }),
    {
      definition: 'very generous or forgiving, especially toward a rival or someone less powerful',
      wordDistractors: ['Magnificent', 'Magnesium', 'Mammoth'],
      definitionDistractors: [
        'mean or ungenerous in character',
        'seeking revenge or punishment',
        'small-minded or trivial in attitude',
      ],
      exampleSentences: [
        { en: 'It was magnanimous of him to forgive.', ko: '그가 용서한 것은 관대한 일이었다.' },
        { en: 'The winner made a magnanimous gesture toward his opponent.', ko: '승자는 상대에게 관대한 손짓을 했다.' },
      ],
    }
  ),
  word('Malediction', '저주', 10, 'noun',
    ['축복', '찬사', '축원', '기도', '찬미', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'mal(나쁜) + dict(말하다) + -ion -> 저주하는 말',
      visual: '검은 로브를 입고 손가락을 가리키는 마녀',
      soundAlike: '말리딕션 = maledictory(저주의)',
      context: 'He hurled maledictions at his former friend.',
      synonymAntonym: '동의어: curse, imprecation, 반의어: blessing',
    }),
    {
      definition: 'a spoken curse or wish for harm to befall someone',
      wordDistractors: ['Benediction', 'Addiction', 'Prediction'],
      definitionDistractors: [
        'a prayer or expression of good wishes',
        'words praising someone or something',
        'a formal expression of thanks or gratitude',
      ],
      exampleSentences: [
        { en: 'He hurled maledictions at his former friend.', ko: '그는 전 친구에게 저주를 퍼부었다.' },
        { en: 'The witch uttered a malediction against the king.', ko: '마녀는 왕에게 저주를 내렸다.' },
      ],
    }
  ),
  word('Maleficent', '해로운', 10, 'adjective',
    ['이로운', '선한', '도움이 되는', '박애적인', '친절한', '이로움', '선함', '도움', '박애', '친절'],
    tips({
      etymology: 'mal(나쁜) + fic(만들다) + -ent -> 해를 만드는',
      visual: '검은 그림자로 손을 뻗는 요정',
      soundAlike: '말러피슨트 = maleficence(해로움)',
      context: 'The maleficent spell destroyed the village.',
      synonymAntonym: '동의어: harmful, evil, 반의어: benevolent',
    }),
    {
      definition: 'harmful or destructive in effect, having evil intent',
      wordDistractors: ['Beneficent', 'Magnificent', 'Malevolent'],
      definitionDistractors: [
        'well meaning and kindly in character',
        'causing or intended to cause damage',
        'extremely beautiful or impressive',
      ],
      exampleSentences: [
        { en: 'The maleficent spell destroyed the village.', ko: '그 해로운 마법이 마을을 파괴했다.' },
        { en: 'She was known for her maleficent influence on the court.', ko: '그녀는 궁정에 해로운 영향력을 미치는 것으로 알려져 있었다.' },
      ],
    }
  ),
  word('Malfeasance', '직무 태만', 10, 'noun',
    ['정직', '성실', '충실', '부지런함', '충성', '부지런', '사과', '책', '고양이', '개'],
    tips({
      etymology: 'mal(나쁘게) + feas(하다) + -ance -> 잘못 행함',
      visual: '공문서를 뒤로 숨기는 공무원',
      soundAlike: '말피즌스 = malfeasant(직무 태만자)',
      context: 'The official was charged with malfeasance.',
      synonymAntonym: '동의어: misconduct, wrongdoing, 반의어: integrity',
    }),
    {
      definition: 'wrongdoing or misconduct by a public official in the course of duty',
      wordDistractors: ['Maintenance', 'Maleficence', 'Misconduct'],
      definitionDistractors: [
        'the quality of being honest and having strong moral principles',
        'the process of keeping something in good condition',
        'the act of doing good or being kind',
      ],
      exampleSentences: [
        { en: 'The official was charged with malfeasance.', ko: '그 공무원은 직무 태만으로 기소되었다.' },
        { en: 'The inquiry uncovered widespread malfeasance in the department.', ko: '조사 결과 부서 전반에 걸친 직무 태만이 드러났다.' },
      ],
    }
  ),
  word('Malleable', '구부리기 쉬운', 10, 'adjective',
    ['단단한', '고집하는', '경직된', '굳은', '불변의', '단단', '고집', '경직', '굳음', '불변'],
    tips({
      etymology: '라틴어 malleus(망치) + -able -> 망치로 두드릴 수 있는',
      visual: '손가락으로 구부리는 금속판',
      soundAlike: '맬리어블 = malleability(가소성)',
      context: 'Children are malleable in their beliefs.',
      synonymAntonym: '동의어: pliable, adaptable, 반의어: rigid',
    }),
    {
      definition: 'able to be hammered or pressed into shape without breaking; easily influenced',
      wordDistractors: ['Manageable', 'Marvelous', 'Pliable'],
      definitionDistractors: [
        'stiff and unable to bend or change',
        'difficult to bend or shape',
        'completely fixed and unchanging',
      ],
      exampleSentences: [
        { en: 'Children are malleable in their beliefs.', ko: '어린이들은 신념이 유연하다.' },
        { en: 'Gold is a malleable metal that can be shaped easily.', ko: '금은 쉽게 모양을 만들 수 있는 가소성 있는 금속이다.' },
      ],
    }
  ),
  word('Martinet', '군기반장', 10, 'noun',
    ['관대한 지도자', '느슨한 사람', '자유주의자', '관용자', '유연한 사람', '관대', '느슨', '자유', '관용', '유연'],
    tips({
      etymology: '프랑스어 Martinet(군인 이름) -> 엄격한 훈련',
      visual: '군대에서 일렬로 맞추는 병사들을 지휘하는 장교',
      soundAlike: '마티넷 = martinetish(군기반장 같은)',
      context: 'The teacher was a martinet about punctuality.',
      synonymAntonym: '동의어: disciplinarian, stickler, 반의어: lenient',
    }),
    {
      definition: 'a strict disciplinarian who demands absolute obedience to rules',
      wordDistractors: ['Martial', 'Martyr', 'Monarch'],
      definitionDistractors: [
        'a person who leads or commands a group',
        'someone who is tolerant and forgiving',
        'a person who willingly suffers for a cause',
      ],
      exampleSentences: [
        { en: 'The teacher was a martinet about punctuality.', ko: '그 교사는 시간 엄수를 군기반장처럼 요구했다.' },
        { en: 'The new manager was a martinet who enforced every rule.', ko: '새 관리자는 모든 규칙을 적용하는 군기반장이었다.' },
      ],
    }
  ),
  word('Maudlin', '눈물겹게 술 취한', 10, 'adjective',
    ['냉정한', '단정한', '절제된', '차분한', '이성적인', '냉정', '단정', '절제', '차분', '이성'],
    tips({
      etymology: 'Magdalene(마리아 막달레나) -> 감정 과다',
      visual: '술잔을 들고 울며 감정을 토하는 사람',
      soundAlike: '모드린 = maudlinly(눈물겹게)',
      context: 'He became maudlin after too many drinks.',
      synonymAntonym: '동의어: sentimental, weepy, 반의어: composed',
    }),
    {
      definition: 'tearfully or weakly emotional, often from alcohol; excessively sentimental',
      wordDistractors: ['Masculine', 'Melancholy', 'Medieval'],
      definitionDistractors: [
        'calm and in control of one\'s emotions',
        'having qualities traditionally associated with men',
        'showing self-restraint and moderation',
      ],
      exampleSentences: [
        { en: 'He became maudlin after too many drinks.', ko: '술을 너무 많이 마신 후 그는 눈물겹게 취했다.' },
        { en: 'The maudlin movie left everyone in tears.', ko: '그 감상적인 영화는 모두를 눈물짓게 했다.' },
      ],
    }
  ),
  word('Mendacious', '거짓말하는', 10, 'adjective',
    ['진실한', '정직한', '솔직한', '투명한', '믿을 만한', '진실', '정직', '솔직', '투명', '믿음'],
    tips({
      etymology: '라틴어 mendax(거짓말쟁이) + -ious -> 거짓의',
      visual: '입술을 벌리며 거짓말하는 얼굴',
      soundAlike: '맨데이셔스 = mendacity(거짓말)',
      context: 'The mendacious testimony was exposed.',
      synonymAntonym: '동의어: dishonest, deceitful, 반의어: truthful',
    }),
    {
      definition: 'not telling the truth; lying or dishonest',
      wordDistractors: ['Mendicant', 'Medicinal', 'Momentous'],
      definitionDistractors: [
        'free from deceit or pretense',
        'conforming to facts and reality',
        'worthy of trust or confidence',
      ],
      exampleSentences: [
        { en: 'The mendacious testimony was exposed.', ko: '그 거짓 진술이 폭로되었다.' },
        { en: 'The mendacious politician lost the public\'s trust.', ko: '그 거짓말하는 정치인은 국민의 신뢰를 잃었다.' },
      ],
    }
  ),
  word('Mercurial', '변덕스러운', 10, 'adjective',
    ['안정된', '일관된', '믿을 만한', '차분한', '고정된', '안정', '일관', '믿음', '차분', '고정'],
    tips({
      etymology: 'Mercury(수성) -> 빠르고 변하기 쉬운',
      visual: '한순간 웃다가 곧 무표정이 되는 얼굴',
      soundAlike: '머큐리얼 = mercurially(변덕스럽게)',
      context: 'His mercurial temper made him hard to work with.',
      synonymAntonym: '동의어: volatile, fickle, 반의어: steady',
    }),
    {
      definition: 'subject to sudden or unpredictable changes of mood or mind',
      wordDistractors: ['Mercenary', 'Meritorious', 'Municipal'],
      definitionDistractors: [
        'unchanging and dependable over time',
        'calm and even-tempered in nature',
        'a hired soldier serving for pay',
      ],
      exampleSentences: [
        { en: 'His mercurial temper made him hard to work with.', ko: '그의 변덕스러운 성질 때문에 그와 일하기가 어려웠다.' },
        { en: 'She was known for her mercurial personality.', ko: '그녀는 변덕스러운 성격으로 알려져 있었다.' },
      ],
    }
  ),
  word('Meritorious', '공훈 있는', 10, 'adjective',
    ['무가치한', '저급한', '비참한', '형편없는', '부끄러운', '무가치', '저급', '비참', '형편없음', '부끄러움'],
    tips({
      etymology: '라틴어 meritum(공로) + -ious -> 가치 있는',
      visual: '훈장을 가슴에 달고 서 있는 장군',
      soundAlike: '메리토리어스 = meritoriously(공훈 있게)',
      context: 'Her meritorious service earned a promotion.',
      synonymAntonym: '동의어: praiseworthy, commendable, 반의어: worthless',
    }),
    {
      definition: 'deserving reward or praise; having merit',
      wordDistractors: ['Mandatory', 'Mercurial', 'Momentous'],
      definitionDistractors: [
        'having no real value or worth',
        'required by law or rule',
        'not deserving praise or attention',
      ],
      exampleSentences: [
        { en: 'Her meritorious service earned a promotion.', ko: '그녀의 공훈 있는 근무가 승진을 가져왔다.' },
        { en: 'The soldiers received recognition for their meritorious conduct.', ko: '병사들은 그들의 공훈 있는 행적으로 인정을 받았다.' },
      ],
    }
  ),
  word('Meticulous', '꼼꼼한', 10, 'adjective',
    ['대충하는', '부주의한', '성의 없는', '황급한', '무관심한', '대충', '부주의', '성의없음', '황급', '무관심'],
    tips({
      etymology: '라틴어 metus(두려움) + -ulous -> 꼼꼼하게',
      visual: '돋보기로 세밀하게 검사하는 손',
      soundAlike: '메티큘러스 = meticulously(꼼꼼하게)',
      context: 'She is meticulous about her work.',
      synonymAntonym: '동의어: painstaking, precise, 반의어: careless',
    }),
    {
      definition: 'showing great attention to detail; very careful and precise',
      wordDistractors: ['Miraculous', 'Metropolitan', 'Minute'],
      definitionDistractors: [
        'lacking care or attention to detail',
        'done or acting without care',
        'supernatural or beyond natural explanation',
      ],
      exampleSentences: [
        { en: 'She is meticulous about her work.', ko: '그녀는 일에 꼼꼼하다.' },
        { en: 'The meticulous preparation ensured the event\'s success.', ko: '꼼꼼한 준비가 행사의 성공을 보장했다.' },
      ],
    }
  ),
  word('Milieu', '환경', 10, 'noun',
    ['격리', '고립', '외부', '차단', '단절', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '프랑스어 mi(중간) + lieu(장소) -> 주변 환경',
      visual: '카페 테이블과 대화하는 사람들',
      soundAlike: '밀리유 = cultural milieu(문화적 환경)',
      context: 'She thrived in the artistic milieu.',
      synonymAntonym: '동의어: environment, setting, 반의어: isolation',
    }),
    {
      definition: 'a person\'s social environment or cultural surroundings',
      wordDistractors: ['Melody', 'Medium', 'Memento'],
      definitionDistractors: [
        'the complete separation from others',
        'a thousand thousands',
        'the central point or focus of something',
      ],
      exampleSentences: [
        { en: 'She thrived in the artistic milieu.', ko: '그녀는 예술적 환경에서 번성했다.' },
        { en: 'The novel vividly depicts the Parisian milieu of the 1920s.', ko: '그 소설은 1920년대 파리 환경을 생생히 묘사한다.' },
      ],
    }
  ),
  word('Misanthrope', '인간 혐오자', 10, 'noun',
    ['인간애자', '사교가', '친화적 사람', '박애주의자', '사랑스러운 사람', '인간애', '사교', '친화', '박애', '사랑'],
    tips({
      etymology: '그리스어 mis(미움) + anthrop(인간) -> 사람 미워하는 자',
      visual: '커튼을 치고 세상을 바라보는 외로운 실루엣',
      soundAlike: '미산스로프 = misanthropic(인간 혐오적)',
      context: 'The reclusive author was a misanthrope.',
      synonymAntonym: '동의어: people-hater, cynic, 반의어: philanthropist',
    }),
    {
      definition: 'a person who dislikes or distrusts humankind',
      wordDistractors: ['Philanthropist', 'Anthropologist', 'Cynic'],
      definitionDistractors: [
        'a person who seeks to promote human welfare',
        'a scientist who studies human societies',
        'a person who loves company and socializing',
      ],
      exampleSentences: [
        { en: 'The reclusive author was a misanthrope.', ko: '그 은둔적 작가는 인간 혐오자였다.' },
        { en: 'His bitter experiences turned him into a misanthrope.', ko: '그의 쓰라린 경험들이 그를 인간 혐오자로 만들었다.' },
      ],
    }
  ),
  word('Mordant', '통렬한', 10, 'adjective',
    ['부드러운', '은은한', '우회적인', '관대한', '완화된', '부드러움', '은은', '우회', '관대', '완화'],
    tips({
      etymology: '라틴어 mordere(물다) -> 물어뜯는',
      visual: '날카로운 언어로 상대를 찌르는 만평',
      soundAlike: '모던트 = mordancy(통렬함)',
      context: 'Her mordant wit left no one unscathed.',
      synonymAntonym: '동의어: caustic, biting, 반의어: mild',
    }),
    {
      definition: 'sharp and sarcastic in speech or tone; biting',
      wordDistractors: ['Mordacious', 'Momentous', 'Morbid'],
      definitionDistractors: [
        'gentle and kind in manner',
        'indirect or roundabout in expression',
        'making little or no impression',
      ],
      exampleSentences: [
        { en: 'Her mordant wit left no one unscathed.', ko: '그녀의 통렬한 재치에 아무도 상처받지 않은 채 남지 않았다.' },
        { en: 'The critic was known for his mordant reviews.', ko: '그 비평가는 통렬한 평론으로 유명했다.' },
      ],
    }
  ),
  word('Moribund', '죽어 가는', 10, 'adjective',
    ['활발한', '번성하는', '생기 있는', '활력 있는', '활기에 찬', '활발', '번성', '생기', '활력', '활기'],
    tips({
      etymology: '라틴어 mors(죽음) + -bund -> 죽어가는',
      visual: '심박 곡선이 거의 평평해지는 모니터',
      soundAlike: '모리번드 = moribundity(죽어 감)',
      context: 'The industry is moribund.',
      synonymAntonym: '동의어: dying, declining, 반의어: thriving',
    }),
    {
      definition: 'at the point of death; in terminal decline; lacking vitality',
      wordDistractors: ['Morbid', 'Momentous', 'Mundane'],
      definitionDistractors: [
        'growing or developing vigorously',
        'full of life and energy',
        'of great importance or significance',
      ],
      exampleSentences: [
        { en: 'The industry is moribund.', ko: '그 산업은 죽어가고 있다.' },
        { en: 'The moribund patient was surrounded by family.', ko: '죽어가는 환자는 가족들에게 둘러싸여 있었다.' },
      ],
    }
  ),
  word('Munificent', '아낌없이 주는', 10, 'adjective',
    ['인색한', '알뜰한', '구두쇠 같은', '인색', '알뜰', '구두쇠', '짠', '짜게', '아끼는', '아낌'],
    tips({
      etymology: '라틴어 munus(선물) + fic(만들다) -> 선물을 많이 주는',
      visual: '상자에서 선물을 쏟아내는 손',
      soundAlike: '뮤니피슨트 = munificence(아낌없음)',
      context: 'A munificent donation to the hospital.',
      synonymAntonym: '동의어: generous, lavish, 반의어: stingy',
    }),
    {
      definition: 'larger or more generous than is usual or necessary',
      wordDistractors: ['Municipal', 'Magnificent', 'Mandatory'],
      definitionDistractors: [
        'relating to a city or its government',
        'unwilling to give or spend money',
        'grand and impressive in appearance',
      ],
      exampleSentences: [
        { en: 'A munificent donation to the hospital.', ko: '병원에 대한 아낌없는 기부.' },
        { en: 'The munificent patron funded the entire building.', ko: '그 아낌없는 후원자가 건물 전체를 자금 지원했다.' },
      ],
    }
  ),
  word('Myopic', '근시안적인', 10, 'adjective',
    ['선견지명 있는', '원대한', '먼 생각하는', '통찰력 있는', '전략적인', '선견', '원대', '먼생각', '통찰', '전략'],
    tips({
      etymology: '그리스어 myops(눈을 감다) -> 근시의',
      visual: '안경을 쓰고 가까운 것만 보는 사람',
      soundAlike: '마이오픽 = myopia(근시안)',
      context: 'The myopic policy ignored long-term effects.',
      synonymAntonym: '동의어: short-sighted, narrow-minded, 반의어: far-sighted',
    }),
    {
      definition: 'lacking foresight or long-term thinking; short-sighted',
      wordDistractors: ['Mycotic', 'Mystic', 'Metric'],
      definitionDistractors: [
        'having or showing foresight and planning',
        'able to see distant objects clearly',
        'relating to fungal infection',
      ],
      exampleSentences: [
        { en: 'The myopic policy ignored long-term effects.', ko: '그 근시안적 정책은 장기적 효과를 무시했다.' },
        { en: 'His myopic view of the market caused heavy losses.', ko: '그의 근시안적인 시장 인식이 큰 손실을 초래했다.' },
      ],
    }
  ),
  word('Nadir', '최저점', 10, 'noun',
    ['정점', '절정', '최고', '절고점', '피크', '절고', '사과', '책', '고양이', '개'],
    tips({
      etymology: '아랍어 nazir(반대) -> 천체의 가장 낮은 점',
      visual: '곡선 그래프의 가장 아래 지점',
      soundAlike: '네이더 = nadir of hope(희망의 최저점)',
      context: 'His career hit its nadir that year.',
      synonymAntonym: '동의어: lowest point, bottom, 반의어: zenith',
    }),
    {
      definition: 'the lowest or worst point in a situation',
      wordDistractors: ['Nape', 'Novel', 'Nectar'],
      definitionDistractors: [
        'the highest point or peak',
        'the most successful or favorable time',
        'a small piece of fried tortilla with toppings',
      ],
      exampleSentences: [
        { en: 'His career hit its nadir that year.', ko: '그해 그의 경력은 최저점을 맞았다.' },
        { en: 'The economy reached its nadir during the recession.', ko: '경제는 불경기 동안 최저점에 도달했다.' },
      ],
    }
  ),
  word('Nascent', '막 태어난', 10, 'adjective',
    ['완성된', '성숙한', '발달한', '오래된', '종말의', '완성', '성숙', '발달', '오래됨', '종말'],
    tips({
      etymology: '라틴어 nasci(태어나다) -> 막 태어난',
      visual: '알에서 막 깨어나려는 새끼',
      soundAlike: '내슨트 = nascence(탄생)',
      context: 'The nascent industry showed promise.',
      synonymAntonym: '동의어: emerging, budding, 반의어: mature',
    }),
    {
      definition: 'just coming into existence and beginning to display signs of future potential',
      wordDistractors: ['Navel', 'Narrative', 'Nautical'],
      definitionDistractors: [
        'fully developed and mature',
        'finished or complete',
        'ancient or from long ago',
      ],
      exampleSentences: [
        { en: 'The nascent industry showed promise.', ko: '막 태어난 산업이 가능성을 보여주었다.' },
        { en: 'She supported the nascent democracy movement.', ko: '그녀는 막 태어난 민주화 운동을 지지했다.' },
      ],
    }
  ),
  word('Nefarious', '사악한', 10, 'adjective',
    ['정직한', '선한', '도덕적인', '고결한', '정의로운', '정직', '선함', '도덕', '고결', '정의'],
    tips({
      etymology: '라틴어 nefas(신성모독) + -ious -> 신성한 것에 반하는',
      visual: '어둠 속에서 음모를 꾸미는 손',
      soundAlike: '니페리어스 = nefariously(사악하게)',
      context: 'The nefarious plot was uncovered.',
      synonymAntonym: '동의어: wicked, villainous, 반의어: virtuous',
    }),
    {
      definition: 'wicked or criminal; fundamentally immoral',
      wordDistractors: ['Necessary', 'Nervous', 'Numerous'],
      definitionDistractors: [
        'required to be done; essential',
        'having high moral standards',
        'free from guilt or wrongdoing',
      ],
      exampleSentences: [
        { en: 'The nefarious plot was uncovered.', ko: '그 사악한 음모가 폭로되었다.' },
        { en: 'The nefarious dictator oppressed his people for decades.', ko: '그 사악한 독재자는 수십 년간 국민을 억압했다.' },
      ],
    }
  ),
  word('Neophyte', '초보자', 10, 'noun',
    ['숙련자', '전문가', '베테랑', '달인', '고수', '숙련', '전문', '사과', '책', '고양이'],
    tips({
      etymology: '그리스어 neos(새로운) + phyt(심다) -> 새로 심겨진 자',
      visual: '처음 입단한 스님처럼 머리를 깎은 사람',
      soundAlike: '니오파이트 = neophytic(초보자의)',
      context: 'The neophyte needed guidance.',
      synonymAntonym: '동의어: beginner, novice, 반의어: expert',
    }),
    {
      definition: 'a person who is new to a subject, skill, or belief',
      wordDistractors: ['Novice', 'Neonatal', 'Nepotism'],
      definitionDistractors: [
        'a person with extensive knowledge or skill',
        'someone who has long experience',
        'a person who trains or teaches others',
      ],
      exampleSentences: [
        { en: 'The neophyte needed guidance.', ko: '그 초보자는 안내가 필요했다.' },
        { en: 'As a neophyte in the field, she asked many questions.', ko: '그 분야의 초보자로서 그녀는 많은 질문을 했다.' },
      ],
    }
  ),
  word('Nihilism', '허무주의', 10, 'noun',
    ['신념', '목적', '의미', '가치', '이상', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '라틴어 nihil(아무것도) + -ism -> 아무것도 없다는 사상',
      visual: '텅 빈 벽을 바라보는 외로운 실루엣',
      soundAlike: '나이얼리즘 = nihilist(허무주의자)',
      context: 'His nihilism left him without purpose.',
      synonymAntonym: '동의어: pessimism, cynicism, 반의어: idealism',
    }),
    {
      definition: 'the belief that life has no meaning or value; rejection of moral principles',
      wordDistractors: ['Idealism', 'Nepotism', 'Narcissism'],
      definitionDistractors: [
        'a system of optimistic beliefs about reality',
        'the pursuit of perfection or ideals',
        'a strong belief in the purpose of life',
      ],
      exampleSentences: [
        { en: 'His nihilism left him without purpose.', ko: '그의 허무주의가 그를 목적 없이 만들었다.' },
        { en: 'The philosopher\'s nihilism challenged traditional values.', ko: '그 철학자의 허무주의가 전통적 가치에 도전했다.' },
      ],
    }
  ),
  word('Nonchalant', '무관심한', 10, 'adjective',
    ['열정적인', '걱정하는', '노력하는', '진지한', '몰두하는', '열정', '걱정', '노력', '진지', '몰두'],
    tips({
      etymology: '프랑스어 non(아니) + chalant(열정) -> 시원한',
      visual: '어깨를 으쓱하고 무심한 표정',
      soundAlike: '논슐런트 = nonchalantly(무관심하게)',
      context: 'He was nonchalant about the crisis.',
      synonymAntonym: '동의어: indifferent, casual, 반의어: attentive',
    }),
    {
      definition: 'feeling or appearing casually calm and relaxed; not displaying anxiety',
      wordDistractors: ['Nocturnal', 'Notable', 'Noble'],
      definitionDistractors: [
        'showing intense concern or worry',
        'deeply engaged or absorbed',
        'formal and serious in manner',
      ],
      exampleSentences: [
        { en: 'He was nonchalant about the crisis.', ko: '그는 그 위기에 무관심했다.' },
        { en: 'She gave a nonchalant shrug when asked about the results.', ko: '결과에 대해 물었을 때 그녀는 무심하게 어깨를 으쓱했다.' },
      ],
    }
  ),
  word('Nonplussed', '당황한', 10, 'adjective',
    ['침착한', '냉정한', '여유 있는', '차분한', '자신 있는', '침착', '냉정', '여유', '차분', '자신'],
    tips({
      etymology: 'non(아니) + plus(더) -> 더 이상 할 수 없는',
      visual: '입을 벌리고 멍하니 서 있는 사람',
      soundAlike: '논플러스트 = nonplussing(당황시키는)',
      context: 'She was nonplussed by the question.',
      synonymAntonym: '동의어: bewildered, perplexed, 반의어: composed',
    }),
    {
      definition: 'so surprised and confused that one is unsure how to react',
      wordDistractors: ['Nonstop', 'Nonpartisan', 'Notable'],
      definitionDistractors: [
        'calm and in control of one\'s emotions',
        'clear and confident in understanding',
        'ready and prepared for action',
      ],
      exampleSentences: [
        { en: 'She was nonplussed by the question.', ko: '그녀는 그 질문에 당황했다.' },
        { en: 'The unexpected outcome left the team nonplussed.', ko: '예상치 못한 결과에 팀이 당황했다.' },
      ],
    }
  ),
  word('Obdurate', '완고한', 10, 'adjective',
    ['유연한', '양보하는', '연민 있는', '수용적인', '돌아서는', '유연', '양보', '연민', '수용', '돌아섬'],
    tips({
      etymology: 'ob(강하게) + durus(단단한) -> 굳게 고집하는',
      visual: '팔짱을 끼고 고개를 돌리는 사람',
      soundAlike: '옵듀릿 = obduracy(완고함)',
      context: 'He remained obdurate in his refusal.',
      synonymAntonym: '동의어: stubborn, inflexible, 반의어: yielding',
    }),
    {
      definition: 'stubbornly refusing to change one\'s opinion or course of action',
      wordDistractors: ['Obdurate', 'Obfuscate', 'Obsequious'],
      definitionDistractors: [
        'willing to change or compromise',
        'showing sympathy and concern for others',
        'easily bent or flexible',
      ],
      exampleSentences: [
        { en: 'He remained obdurate in his refusal.', ko: '그는 거절을 완고하게 고수했다.' },
        { en: 'The obdurate defendant refused to accept the plea deal.', ko: '그 완고한 피고인은 형량 협상을 받아들이길 거부했다.' },
      ],
    }
  ),
  word('Obfuscate', '흐리게 하다', 10, 'verb',
    ['명확히 하다', '밝히다', '설명하다', '해명하다', '투명하게 하다', '명확', '밝힘', '설명', '해명', '투명'],
    tips({
      etymology: 'ob(강하게) + fusc(어둡다) + -ate -> 어둡게 만들다',
      visual: '안개로 뒤덮인 경계선',
      soundAlike: '옵퍼스케이트 = obfuscation(흐리게 함)',
      context: 'The lawyer obfuscated the truth.',
      synonymAntonym: '동의어: confuse, obscure, 반의어: clarify',
    }),
    {
      definition: 'to make something obscure, unclear, or difficult to understand',
      wordDistractors: ['Obliterate', 'Oscillate', 'Ostracize'],
      definitionDistractors: [
        'to make something clear or easy to understand',
        'to destroy something completely',
        'to move back and forth repeatedly',
      ],
      exampleSentences: [
        { en: 'The lawyer obfuscated the truth.', ko: '그 변호사는 진실을 흐렸다.' },
        { en: 'Politicians often obfuscate when asked direct questions.', ko: '정치인들은 직설적인 질문을 받으면 흔히 흐리려 한다.' },
      ],
    }
  ),
  word('Oblique', '간접적인', 10, 'adjective',
    ['직접적인', '직선의', '정면의', '솔직한', '노골적인', '직접', '직선', '정면', '솔직', '노골'],
    tips({
      etymology: '라틴어 obliquus(비스듬한) -> 빗각의',
      visual: '비스듬히 나아가는 화살',
      soundAlike: '오블릭 = obliquely(간접적으로)',
      context: 'She made an oblique reference to the scandal.',
      synonymAntonym: '동의어: indirect, slanting, 반의어: direct',
    }),
    {
      definition: 'indirect or not straightforward; slanting or at an angle',
      wordDistractors: ['Opaque', 'Obscure', 'Obtuse'],
      definitionDistractors: [
        'straightforward and explicit',
        'not allowing light to pass through',
        'to destroy something completely',
      ],
      exampleSentences: [
        { en: 'She made an oblique reference to the scandal.', ko: '그녀는 그 스캔들에 대해 간접적으로 언급했다.' },
        { en: 'The oblique angle gave an unusual perspective.', ko: '그 비스듬한 각도가 특이한 시각을 제공했다.' },
      ],
    }
  ),
  word('Obsequious', '아첨하는', 10, 'adjective',
    ['거만한', '독립적인', '도발적인', '반항하는', '당당한', '거만', '독립', '도발', '반항', '당당'],
    tips({
      etymology: '라틴어 obsequi(따르다) + -ious -> 지나치게 따르는',
      visual: '허리를 굽혀 미소 짓는 시종',
      soundAlike: '옵시퀴어스 = obsequiousness(아첨)',
      context: 'The obsequious waiter annoyed them.',
      synonymAntonym: '동의어: servile, fawning, 반의어: assertive',
    }),
    {
      definition: 'obedient or attentive to an excessive or servile degree',
      wordDistractors: ['Obstinate', 'Obstreperous', 'Ostentatious'],
      definitionDistractors: [
        'stubbornly refusing to change',
        'noisy and difficult to control',
        'confident and self-assured',
      ],
      exampleSentences: [
        { en: 'The obsequious waiter annoyed them.', ko: '그 아첨하는 웨이터가 그들을 짜증나게 했다.' },
        { en: 'His obsequious behavior toward the boss earned him no respect.', ko: '상사에 대한 그의 아첨하는 행동으로 그는 존중을 받지 못했다.' },
      ],
    }
  ),
  word('Obstreperous', '떠들썩한', 10, 'adjective',
    ['조용한', '순한', '침착한', '복종하는', '차분한', '조용', '순함', '침착', '복종', '차분'],
    tips({
      etymology: 'ob(대항) + strep(소리) + -ous -> 크게 반항하는',
      visual: '손을 휘두르며 소리 지르는 아이',
      soundAlike: '옵스트레퍼러스 = obstreperously(떠들썩하게)',
      context: 'The obstreperous crowd disrupted the meeting.',
      synonymAntonym: '동의어: unruly, boisterous, 반의어: quiet',
    }),
    {
      definition: 'noisy and difficult to control; unruly',
      wordDistractors: ['Obstinate', 'Obsequious', 'Ostentatious'],
      definitionDistractors: [
        'stubbornly refusing to change',
        'excessively obedient or submissive',
        'silent and peaceful',
      ],
      exampleSentences: [
        { en: 'The obstreperous crowd disrupted the meeting.', ko: '그 떠들썩한 군중이 회의를 방해했다.' },
        { en: 'The obstreperous child was asked to leave the library.', ko: '그 떠들썩한 아이는 도서관에서 나가 달라고 요청받았다.' },
      ],
    }
  ),
  word('Obtuse', '둔한', 10, 'adjective',
    ['예리한', '날카로운', '똑똑한', '민감한', '통찰력 있는', '예리', '날카로움', '똑똑', '민감', '통찰'],
    tips({
      etymology: '라틴어 obtusus(둔하게 함) -> 뭉툭한',
      visual: '뭉툭한 나이프로 자르려는 모습',
      soundAlike: '옵튜스 = obtuseness(둔함)',
      context: 'He was obtuse to her hints.',
      synonymAntonym: '동의어: dull, insensitive, 반의어: sharp',
    }),
    {
      definition: 'slow to understand; annoyingly insensitive or imperceptive',
      wordDistractors: ['Obtuse', 'Opaque', 'Obscure'],
      definitionDistractors: [
        'quick to understand or learn',
        'not transparent or clear',
        'difficult to see or understand',
      ],
      exampleSentences: [
        { en: 'He was obtuse to her hints.', ko: '그는 그녀의 암시에 둔했다.' },
        { en: 'Her obtuse response suggested she misunderstood the question.', ko: '그녀의 둔한 대답은 그녀가 질문을 오해했음을 시사했다.' },
      ],
    }
  ),
  word('Odious', '역겨운', 10, 'adjective',
    ['사랑스러운', '매력적인', '유쾌한', '환한', '기쁜', '사랑', '매력', '유쾌', '환함', '기쁨'],
    tips({
      etymology: '라틴어 odium(혐오) + -ous -> 미움받는',
      visual: '코를 막고 뒤로 물러서는 사람',
      soundAlike: '오디어스 = odiously(역겹게)',
      context: 'The odious crime shocked the nation.',
      synonymAntonym: '동의어: hateful, repulsive, 반의어: delightful',
    }),
    {
      definition: 'extremely unpleasant; arousing strong dislike or disgust',
      wordDistractors: ['Odorous', 'Onerous', 'Ominous'],
      definitionDistractors: [
        'having a pleasant smell',
        'involving a lot of effort or difficulty',
        'charming and attractive',
      ],
      exampleSentences: [
        { en: 'The odious crime shocked the nation.', ko: '그 역겨운 범죄가 국가를 충격에 빠뜨렸다.' },
        { en: 'His odious behavior made him unwelcome everywhere.', ko: '그의 역겨운 행동이 그를 어디서든 환영받지 못하게 했다.' },
      ],
    }
  ),
  word('Officious', '참견 잘하는', 10, 'adjective',
    ['무관심한', '방관하는', '소극적인', '수수방관하는', '냉담한', '무관심', '방관', '소극', '수수방관', '냉담'],
    tips({
      etymology: '라틴어 officium(봉사) + -ious -> 지나치게 나서는',
      visual: '남의 일에 끼어드는 손',
      soundAlike: '오피셔스 = officiously(참견 잘하게)',
      context: 'The officious clerk annoyed everyone.',
      synonymAntonym: '동의어: meddlesome, intrusive, 반의어: unobtrusive',
    }),
    {
      definition: 'asserting authority or offering help in an intrusive or unwanted way',
      wordDistractors: ['Official', 'Ostentatious', 'Onerous'],
      definitionDistractors: [
        'relating to an authority or formal position',
        'not attracting attention or notice',
        'friendly and approachable',
      ],
      exampleSentences: [
        { en: 'The officious clerk annoyed everyone.', ko: '그 참견 잘하는 점원이 모두를 짜증나게 했다.' },
        { en: 'The officious neighbor always offered unsolicited advice.', ko: '그 참견 잘하는 이웃은 항상 요청하지 않은 조언을 했다.' },
      ],
    }
  ),
  word('Omniscient', '전지한', 10, 'adjective',
    ['무지한', '한정된', '부분적인', '제한된', '모르는', '무지', '한정', '부분', '제한', '모름'],
    tips({
      etymology: '라틴어 omnis(모든) + sci(알다) -> 모든 것을 아는',
      visual: '우주를 한눈에 내려다보는 눈',
      soundAlike: '옴니시언트 = omniscience(전지)',
      context: 'The novel uses an omniscient narrator.',
      synonymAntonym: '동의어: all-knowing, infinite, 반의어: ignorant',
    }),
    {
      definition: 'knowing everything; having complete or unlimited knowledge',
      wordDistractors: ['Omniscient', 'Omnipotent', 'Omnipresent'],
      definitionDistractors: [
        'having unlimited power',
        'present everywhere at the same time',
        'lacking knowledge or awareness',
      ],
      exampleSentences: [
        { en: 'The novel uses an omniscient narrator.', ko: '그 소설은 전지한 화자를 사용한다.' },
        { en: 'In the story, the god is omniscient and sees all.', ko: '그 이야기에서 신은 전지하여 모든 것을 본다.' },
      ],
    }
  ),
  word('Onerous', '부담스러운', 10, 'adjective',
    ['가벼운', '쉬운', '편한', '수월한', '부담 없는', '가벼움', '쉬움', '편함', '수월', '부담없음'],
    tips({
      etymology: '라틴어 onus(짐) + -ous -> 짐이 되는',
      visual: '등에 거대한 배낭을 멘 사람',
      soundAlike: '오너러스 = onerously(부담스럽게)',
      context: 'The onerous task took months.',
      synonymAntonym: '동의어: burdensome, arduous, 반의어: light',
    }),
    {
      definition: 'involving a great deal of effort, difficulty, or burden',
      wordDistractors: ['Odorous', 'Ominous', 'Opaque'],
      definitionDistractors: [
        'having a pleasant or strong smell',
        'requiring little effort or difficulty',
        'light and easy to carry',
      ],
      exampleSentences: [
        { en: 'The onerous task took months.', ko: '그 부담스러운 일이 몇 달 걸렸다.' },
        { en: 'The onerous regulations discouraged small businesses.', ko: '그 부담스러운 규정들이 소규모 사업을 막았다.' },
      ],
    }
  ),
  word('Opaque', '불투명한', 10, 'adjective',
    ['투명한', '맑은', '밝은', '비치는', '명확한', '투명', '맑음', '밝음', '비침', '명확'],
    tips({
      etymology: '라틴어 opacus(그늘진) -> 빛이 통하지 않는',
      visual: '빛이 통하지 않는 두꺼운 유리',
      soundAlike: '오페이크 = opacity(불투명도)',
      context: 'His explanation was opaque.',
      synonymAntonym: '동의어: impenetrable, unclear, 반의어: transparent',
    }),
    {
      definition: 'not able to be seen through; not transparent; difficult to understand',
      wordDistractors: ['Obscure', 'Obtuse', 'Oblique'],
      definitionDistractors: [
        'allowing light to pass through clearly',
        'easy to understand or see through',
        'clear and obvious in meaning',
      ],
      exampleSentences: [
        { en: 'His explanation was opaque.', ko: '그의 설명은 불투명했다.' },
        { en: 'The opaque glass blocked the view of the garden.', ko: '그 불투명한 유리가 정원의 전경을 가렸다.' },
      ],
    }
  ),
  word('Opprobrium', '악명', 10, 'noun',
    ['명예', '영광', '칭찬', '존경', '존중', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'ob(향해) + probrum(수치) -> 공개적 수치',
      visual: '썩은 과일을 던지는 군중',
      soundAlike: '오프로브리엄 = opprobrious(악명 높은)',
      context: 'The scandal brought opprobrium on the family.',
      synonymAntonym: '동의어: disgrace, infamy, 반의어: honor',
    }),
    {
      definition: 'harsh criticism or public disgrace arising from shameful conduct',
      wordDistractors: ['Oblivion', 'Oscillation', 'Oration'],
      definitionDistractors: [
        'respect and admiration from others',
        'high regard or esteem',
        'public acknowledgment of achievement',
      ],
      exampleSentences: [
        { en: 'The scandal brought opprobrium on the family.', ko: '그 스캔들이 가족에게 악명을 가져왔다.' },
        { en: 'The minister resigned amid public opprobrium.', ko: '그 장관은 국민의 악명 속에 사임했다.' },
      ],
    }
  ),
  word('Oscillate', '흔들리다', 10, 'verb',
    ['고정되다', '안정되다', '머무르다', '확정되다', '결정되다', '고정', '안정', '머묾', '확정', '결정'],
    tips({
      etymology: '라틴어 oscillum(흔들림) + -ate -> 앞뒤로 움직이다',
      visual: '시계추가 좌우로 흔들리는 모습',
      soundAlike: '오실레이트 = oscillation(진동)',
      context: 'Public opinion oscillated between extremes.',
      synonymAntonym: '동의어: sway, vacillate, 반의어: stabilize',
    }),
    {
      definition: 'to move or swing back and forth regularly; to waver between opinions',
      wordDistractors: ['Obfuscate', 'Ostracize', 'Obliterate'],
      definitionDistractors: [
        'to make something unclear or confused',
        'to exclude someone from a group',
        'to remain steady and unchanging',
      ],
      exampleSentences: [
        { en: 'Public opinion oscillated between extremes.', ko: '여론이 극단들 사이를 흔들렸다.' },
        { en: 'The pendulum oscillated back and forth.', ko: '추가 앞뒤로 흔들렸다.' },
      ],
    }
  ),
  word('Ostentatious', '과시적인', 10, 'adjective',
    ['검소한', '소박한', '수수한', '은밀한', '절제된', '검소', '소박', '수수', '은밀', '절제'],
    tips({
      etymology: '라틴어 ostentare(보여주다) -> 과시적으로',
      visual: '다이아몬드 반지를 들이미는 손',
      soundAlike: '오스텐테이셔스 = ostentation(과시)',
      context: 'The ostentatious mansion drew criticism.',
      synonymAntonym: '동의어: showy, flamboyant, 반의어: modest',
    }),
    {
      definition: 'characterized by vulgar or pretentious display; designed to impress',
      wordDistractors: ['Ostensible', 'Obsequious', 'Onerous'],
      definitionDistractors: [
        'stated or appearing to be true but not necessarily so',
        'simple and unpretentious',
        'not drawing attention to oneself',
      ],
      exampleSentences: [
        { en: 'The ostentatious mansion drew criticism.', ko: '그 과시적인 저택이 비판을 받았다.' },
        { en: 'She wore ostentatious jewelry to the party.', ko: '그녀는 파티에 과시적인 보석을 착용했다.' },
      ],
    }
  ),
  word('Palliate', '완화하다', 10, 'verb',
    ['악화시키다', '가중시키다', '강화하다', '야기하다', '악화', '가중', '강화', '야기', '더 나쁘게', '심하게'],
    tips({
      etymology: '라틴어 pallium(망토) -> 덮어 감추다',
      visual: '상처에 붕대를 감는 손',
      soundAlike: '팔리에이트 = palliation(완화)',
      context: 'Medicine can palliate the symptoms.',
      synonymAntonym: '동의어: alleviate, mitigate, 반의어: aggravate',
    }),
    {
      definition: 'to make a disease or its symptoms less severe without removing the cause',
      wordDistractors: ['Palpitate', 'Pacify', 'Proliferate'],
      definitionDistractors: [
        'to make something worse or more severe',
        'to beat rapidly or irregularly, as the heart',
        'to cause or bring about',
      ],
      exampleSentences: [
        { en: 'Medicine can palliate the symptoms.', ko: '약이 증상을 완화할 수 있다.' },
        { en: 'Nothing could palliate his grief.', ko: '아무것도 그의 슬픔을 완화할 수 없었다.' },
      ],
    }
  ),
  word('Panacea', '만병통치약', 10, 'noun',
    ['고질병', '불치병', '재앙', '고통', '질병', '고질', '불치', '사과', '책', '고양이'],
    tips({
      etymology: '그리스어 pan(모든) + akos(치료) -> 모든 것을 고치는',
      visual: '빛나는 황금색 액체가 담긴 병',
      soundAlike: '패너시아 = panacean(만병통치의)',
      context: 'There is no panacea for poverty.',
      synonymAntonym: '동의어: cure-all, universal remedy, 반의어: poison',
    }),
    {
      definition: 'a solution or remedy for all difficulties or diseases',
      wordDistractors: ['Pandemic', 'Paradigm', 'Plaque'],
      definitionDistractors: [
        'a disease spread over a whole country or world',
        'a substance that causes harm or death',
        'a partial or temporary solution',
      ],
      exampleSentences: [
        { en: 'There is no panacea for poverty.', ko: '빈곤에 대한 만병통치약은 없다.' },
        { en: 'Technology is not a panacea for all social problems.', ko: '기술은 모든 사회 문제의 만병통치약이 아니다.' },
      ],
    }
  ),
  word('Paragon', '모범', 10, 'noun',
    ['전형', '최악', '반면교사', '실패작', '반례', '실패', '사과', '책', '고양이', '개'],
    tips({
      etymology: '그리스어 parakon(옆에 놓다) -> 견주는 기준',
      visual: '무지개 빛 후광을 두른 성인',
      soundAlike: '패러곤 = paragon of virtue(덕의 모범)',
      context: 'She was a paragon of integrity.',
      synonymAntonym: '동의어: model, exemplar, 반의어: failure',
    }),
    {
      definition: 'a person or thing regarded as a perfect example of a particular quality',
      wordDistractors: ['Paramount', 'Paradigm', 'Pendant'],
      definitionDistractors: [
        'more important than anything else',
        'a person who is rejected by society',
        'a model of bad behavior to avoid',
      ],
      exampleSentences: [
        { en: 'She was a paragon of integrity.', ko: '그녀는 정직의 모범이었다.' },
        { en: 'He was considered a paragon of virtue in his community.', ko: '그는 그의 지역사회에서 덕의 모범으로 여겨졌다.' },
      ],
    }
  ),
  word('Pariah', '추방자', 10, 'noun',
    ['인기인', '영웅', '우상', '사랑받는 이', '수용된 자', '인기', '사랑', '수용', '사과', '책'],
    tips({
      etymology: '타밀어 paraiyar(북 치는 자) -> 천민, 버림받은 자',
      visual: '마을 밖에서 홀로 서 있는 실루엣',
      soundAlike: '퍼라이어 = pariah status(추방자 지위)',
      context: 'After the scandal, he became a pariah.',
      synonymAntonym: '동의어: outcast, reject, 반의어: idol',
    }),
    {
      definition: 'an outcast; a person who is rejected or despised by society',
      wordDistractors: ['Paragon', 'Paradigm', 'Plaque'],
      definitionDistractors: [
        'a perfect example of a quality',
        'a person admired and respected by many',
        'a leader or hero of a group',
      ],
      exampleSentences: [
        { en: 'After the scandal, he became a pariah.', ko: '스캔들 이후 그는 추방자가 되었다.' },
        { en: 'The whistleblower was treated as a pariah by his colleagues.', ko: '그 내부고발자는 동료들에게 추방자로 취급받았다.' },
      ],
    }
  ),
  word('Parsimonious', '인색한', 10, 'adjective',
    ['관대한', '넉넉한', '아낌없는', '풍부한', '후한', '관대', '넉넉', '아낌없음', '풍부', '후함'],
    tips({
      etymology: '라틴어 parsimonia(절약) -> 지나치게 아끼는',
      visual: '지갑을 꽉 쥔 손',
      soundAlike: '파시모니어스 = parsimony(인색)',
      context: 'The parsimonious landlord refused repairs.',
      synonymAntonym: '동의어: stingy, frugal, 반의어: generous',
    }),
    {
      definition: 'extremely unwilling to spend money or use resources',
      wordDistractors: ['Paramount', 'Pertinent', 'Pervasive'],
      definitionDistractors: [
        'more important than anything else',
        'willing to give freely',
        'abundant or plentiful',
      ],
      exampleSentences: [
        { en: 'The parsimonious landlord refused repairs.', ko: '그 인색한 집주인은 수리에 돈을 쓰길 거부했다.' },
        { en: 'His parsimonious habits left him wealthy but lonely.', ko: '그의 인색한 습관이 그를 부유하게 만들었지만 외롭게 했다.' },
      ],
    }
  ),
  word('Pedantic', '학구적인', 10, 'adjective',
    ['대충하는', '느슨한', '실용적인', '유연한', '관대한', '대충', '느슨', '실용', '유연', '관대'],
    tips({
      etymology: '이탈리아어 pedante(가르치는 자) -> 형식에 얽매인',
      visual: '문법 오류를 빨간 펜으로 고치는 장면',
      soundAlike: '피댄틱 = pedantry(학구적 태도)',
      context: 'His pedantic corrections annoyed everyone.',
      synonymAntonym: '동의어: fussy, nitpicking, 반의어: casual',
    }),
    {
      definition: 'excessively concerned with formal rules and minor details',
      wordDistractors: ['Pedestrian', 'Peculiar', 'Pertinent'],
      definitionDistractors: [
        'a person walking on foot',
        'lacking interest or imagination',
        'relaxed and informal in approach',
      ],
      exampleSentences: [
        { en: 'His pedantic corrections annoyed everyone.', ko: '그의 학구적인 수정이 모두를 짜증나게 했다.' },
        { en: 'The pedantic professor insisted on perfect citations.', ko: '그 학구적인 교수는 완벽한 인용을 고집했다.' },
      ],
    }
  ),
  word('Penchant', '기호', 10, 'noun',
    ['회피', '혐오', '거부', '무관심', '싫증', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '프랑스어 pencher(기울다) -> 기울어지는 성향',
      visual: '다이어트 중인데 케이크를 향하는 손',
      soundAlike: '펜첸트 = penchant for(~에 대한 기호)',
      context: 'She has a penchant for spicy food.',
      synonymAntonym: '동의어: inclination, liking, 반의어: aversion',
    }),
    {
      definition: 'a strong or habitual liking for something; a tendency',
      wordDistractors: ['Pendant', 'Pension', 'Percent'],
      definitionDistractors: [
        'a piece of jewelry worn around the neck',
        'a strong dislike or avoidance',
        'a complete lack of interest',
      ],
      exampleSentences: [
        { en: 'She has a penchant for spicy food.', ko: '그녀는 매운 음식에 대한 기호가 있다.' },
        { en: 'He has a penchant for taking risks.', ko: '그는 위험을 감수하는 기호가 있다.' },
      ],
    }
  ),
  word('Penitent', '회개하는', 10, 'adjective',
    ['오만한', '무뢰한', '후회 없는', '만족하는', '자만하는', '오만', '무뢰', '후회없음', '만족', '자만'],
    tips({
      etymology: '라틴어 paenitere(후회하다) -> 회개하는',
      visual: '고개 숙여 참회하는 신자',
      soundAlike: '페니턴트 = penitence(회개)',
      context: 'The penitent sinner sought forgiveness.',
      synonymAntonym: '동의어: repentant, contrite, 반의어: unrepentant',
    }),
    {
      definition: 'feeling or showing sorrow for having done wrong; repentant',
      wordDistractors: ['Pertinent', 'Permanent', 'Prominent'],
      definitionDistractors: [
        'relevant or applicable to the matter',
        'showing no regret for wrongdoing',
        'arrogant and overconfident',
      ],
      exampleSentences: [
        { en: 'The penitent sinner sought forgiveness.', ko: '그 회개하는 죄인은 용서를 구했다.' },
        { en: 'She appeared penitent after her outburst.', ko: '그녀는 폭발 후 회개하는 모습을 보였다.' },
      ],
    }
  ),
];
