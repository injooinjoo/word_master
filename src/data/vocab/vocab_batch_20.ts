import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch20: VocabItem[] = [
  word('Lassitude', '무기력', 10, 'noun',
    ['활력', '에너지', '열정', '기운', '원기', '활성', '의욕', '생기', '활발', '각성'],
    tips({
      etymology: '라틴어 lassus(피곤한)에서 유래하여 몸과 마음이 지친 상태를 의미합니다.',
      visual: '무더운 여름날 소파에 축 늘어져 손가락 하나 까딱하기 싫어하는 모습',
      soundAlike: '단어의 앞부분 \'Lass\'가 \'나른\'과 발음이 비슷하다고 연상하여 나른한 상태를 떠올려보세요.',
      context: '주로 심한 운동 후나 극심한 스트레스 뒤에 찾아오는 육체적, 정신적 탈진 상태에 쓰입니다.',
      synonymAntonym: 'lethargy, weariness와 비슷하며 vigor, energy, vitality와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a state of physical or mental exhaustion and a lack of interest or energy',
      synonyms: ['lethargy', 'weariness', 'languor'],
      antonyms: ['vigor', 'vitality', 'energy'],
      exampleSentences: [
        { en: 'A wave of lassitude overwhelmed her after the final exam.', ko: '기말고사가 끝난 후 무기력함이 그녀를 덮쳤다.' },
        { en: 'The humid heat induced a feeling of lassitude in everyone.', ko: '습한 더위가 모든 사람에게 무기력을 느끼게 했다.' },
      ],
    }
  ),
  word('Legerdemain', '요술', 10, 'noun',
    ['솔직함', '투명', '노골', '직설', '진실', '정직', '공개', '드러남', '순수', '속임없음'],
    tips({
      etymology: '프랑스어 léger(가벼운)와 de main(손의)이 합쳐져 \'가벼운 손놀림\'이라는 의미에서 유래했습니다.',
      visual: '마술사가 관객의 눈을 피해 소매 속으로 카드를 순식간에 숨기는 민첩한 손동작을 상상해 보세요.',
      soundAlike: '레저(여가) 시간에 즐기는 \'더\' 놀라운 \'메인\' 마술 공연이라고 연상하면 기억하기 쉽습니다.',
      context: '무대 위의 마술뿐만 아니라, 복잡한 숫자나 법률 용어를 이용해 사람들을 속이는 교묘한 수법을 비유할 때 자주 쓰입니다.',
      synonymAntonym: '손재주를 뜻하는 sleight of hand와 유사하며, 숨김없이 드러내는 honesty나 candor와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The skillful use of hands to perform clever tricks or the use of cleverness to deceive others.',
      synonyms: ['sleight of hand', 'trickery', 'artifice'],
      antonyms: ['honesty', 'candor', 'openness'],
      exampleSentences: [
        { en: 'The contract was approved through a bit of legal legerdemain.', ko: '그 계약은 약간의 법적 요술과 같은 교묘한 속임수를 통해 승인되었습니다.' },
        { en: 'The magician amazed the audience with his incredible legerdemain.', ko: '마술사는 믿기지 않는 놀라운 손놀림으로 관객들을 깜짝 놀라게 했습니다.' },
      ],
    }
  ),
  word('Licentious', '방종한', 10, 'adjective',
    ['절제된', '도덕적인', '경건한', '엄격한', '자제하는', '청렴한', '정숙한', '순결한', '단정한', '금욕적인'],
    tips({
      etymology: '라틴어 licentia(허가)에서 유래했으며, 정해진 허용 범위를 넘어 제멋대로 행동하는 상태를 의미합니다.',
      visual: '울타리가 없는 들판에서 고삐 풀린 말이 사방으로 날뛰며 농작물을 망치는 모습',
      soundAlike: '운전면허(license)를 가진 사람이 법규를 무시하고 제멋대로 과속하는 상황을 떠올려 보세요.',
      context: '주로 성적인 도덕심이 결여되어 있거나 사회적 규범을 완전히 무시하는 방탕한 태도를 비판할 때 쓰입니다.',
      synonymAntonym: '방탕한 상태인 debauched와 유사하며, 도덕적이고 정숙한 상태인 virtuous와는 반대됩니다.',
    }),
    {
      definition: 'disregarding accepted rules or standards, especially in a way that shows a lack of moral restraint or sexual discipline',
      synonyms: ['debauched', 'dissolute', 'promiscuous'],
      antonyms: ['virtuous', 'chaste', 'moral'],
      exampleSentences: [
        { en: 'The licentious behavior of the tyrant shocked the entire community.', ko: '폭군의 방종한 행동이 지역사회 전체를 충격에 빠뜨렸다.' },
        { en: 'The novel was banned for its supposedly licentious content.', ko: '그 소설은 방종한 내용이 담겼다는 이유로 금지되었다.' },
      ],
    }
  ),
  word('Lugubrious', '슬픈', 10, 'adjective',
    ['명랑한', '밝은', '유쾌한', '환한', '기쁜', '즐거운', '활기찬', '희망찬', '행복한', '상쾌한'],
    tips({
      etymology: '라틴어 lugere(슬퍼하다)에서 유래하여 매우 침울하고 비통한 상태를 나타냅니다.',
      visual: '장례식장에서 검은 옷을 입고 세상이 끝난 듯 어깨를 늘어뜨리고 있는 사람을 떠올려 보세요.',
      soundAlike: '발음이 \'누구 부리(입)\'와 비슷하죠? 입술이 아래로 축 처져서 몹시 우울해 보이는 표정을 연상하세요.',
      context: '단순히 슬픈 것을 넘어 분위기가 지나치게 어둡거나 비장미가 느껴질 정도로 침울할 때 주로 사용합니다.',
      synonymAntonym: 'mournful, doleful과 같은 단어와 비슷하며, cheerful이나 sanguine처럼 밝고 낙천적인 단어와는 반대됩니다.',
    }),
    {
      definition: 'looking or sounding dismal and gloomy, often in an exaggerated or affected manner',
      synonyms: ['mournful', 'doleful', 'melancholy'],
      antonyms: ['cheerful', 'joyful', 'sanguine'],
      exampleSentences: [
        { en: 'The cello played a lugubrious melody that filled the room with a sense of deep sorrow.', ko: '첼로가 방 안을 깊은 슬픔으로 채우는 아주 침울한 선율을 연주했습니다.' },
        { en: 'He spoke in a lugubrious tone, as if he were carrying the weight of the entire world on his shoulders.', ko: '그는 마치 온 세상의 짐을 어깨에 짊어진 듯이 매우 침울한 어조로 말했습니다.' },
      ],
    }
  ),
  word('Magnanimous', '관대한', 10, 'adjective',
    ['인색한', '치졸한', '보복적인', '편협한', '속좁은', '야박한', '옹졸한', '이기적인', '무자비한', '냉혹한'],
    tips({
      etymology: '라틴어 magnus(큰)와 animus(마음)가 결합된 단어로, 말 그대로 \'커다란 마음을 가진\' 상태를 의미합니다.',
      visual: '우승컵을 들어 올린 챔피언이 울고 있는 준우승자에게 다가가 어깨를 감싸며 격려해주는 장면을 떠올려 보세요.',
      soundAlike: '\'막 나눠(magn-)\'줄 정도로 마음이 넓고 베풀기 좋아하는 대인배의 모습을 연상하면 기억하기 쉽습니다.',
      context: '단순히 친절한 것을 넘어, 자신보다 약한 사람이나 경쟁자에게 넓은 아량을 베풀 때 주로 사용하는 격식 있는 표현입니다.',
      synonymAntonym: 'Generous보다 더 고결한 느낌을 주며, 사소한 것에 집착하는 Petty와는 정반대의 성격을 가집니다.',
    }),
    {
      definition: 'showing a kind and generous nature, especially toward an enemy or someone who has been defeated',
      synonyms: ['generous', 'charitable', 'benevolent'],
      antonyms: ['petty', 'mean', 'vindictive'],
      exampleSentences: [
        { en: 'It was magnanimous of the leader to forgive his critics.', ko: '비판자들을 용서한 것은 지도자로서 관대한 일이었다.' },
        { en: 'The winner made a magnanimous gesture by sharing the prize.', ko: '승자는 상금을 나눔으로써 관대한 태도를 보였다.' },
      ],
    }
  ),
  word('Malediction', '저주', 10, 'noun',
    ['축복', '찬사', '축원', '기도', '찬미', '칭송', '덕담', '응원', '격려', '찬양'],
    tips({
      etymology: '라틴어 어근 male(나쁜)과 dict(말하다)가 결합되어 \'나쁜 말을 내뱉다\'라는 의미에서 유래되었습니다.',
      visual: '검은 망토를 입은 마녀가 솥 앞에서 주문을 외우며 누군가에게 불행을 비는 장면을 떠올려 보세요.',
      soundAlike: '말(male)을 딕션(diction) 좋게 또박또박 내뱉는 \'악담\'이나 \'저주\'라고 연상하면 쉽습니다.',
      context: '주로 고전 문학이나 판타지 소설에서 마법적인 저주나 격렬한 비난, 욕설을 표현할 때 사용됩니다.',
      synonymAntonym: '반대말인 benediction은 bene(좋은)가 붙어 \'축복\'을 뜻하며, malediction은 그 정반대인 \'저주\'입니다.',
    }),
    {
      definition: 'A magical word or phrase uttered with the intention of bringing about evil or destruction upon someone.',
      synonyms: ['curse', 'imprecation', 'anathema'],
      antonyms: ['benediction', 'blessing', 'praise'],
      exampleSentences: [
        { en: 'He hurled maledictions at the driver who cut him off.', ko: '그는 끼어든 운전자에게 저주 섞인 욕설을 퍼부었다.' },
        { en: 'The old witch uttered a terrifying malediction against the kingdom.', ko: '늙은 마녀는 왕국을 향해 무시무시한 저주를 내뱉었다.' },
      ],
    }
  ),
  word('Maleficent', '해로운', 10, 'adjective',
    ['이로운', '선한', '도움이 되는', '박애적인', '친절한', '유익한', '자비로운', '건전한', '유용한', '긍정적인'],
    tips({
      etymology: '라틴어 \'male(나쁘게)\'와 \'facere(행하다)\'가 결합되어 남에게 해를 끼친다는 의미를 형성합니다.',
      visual: '디즈니 영화 속 검은 뿔을 가진 요정이 초록색 불꽃으로 왕국을 저주하는 장면을 상상해 보세요.',
      soundAlike: '단어 앞부분의 \'Mal-\'이 \'못(not)\'이나 \'망치다\'의 느낌과 비슷하다고 연상하면 해로운 이미지가 쉽게 떠오릅니다.',
      context: '단순히 부주의한 실수가 아니라, 의도적으로 악의를 품고 파괴적인 결과를 초래할 때 주로 쓰입니다.',
      synonymAntonym: '동의어인 harmful, malignant는 해로움을 뜻하며, 반의어인 beneficent, benevolent는 자비로움을 뜻합니다.',
    }),
    {
      definition: 'doing evil or causing great harm, often associated with a desire to hurt others or destructive power',
      synonyms: ['harmful', 'malignant', 'baleful'],
      antonyms: ['beneficent', 'benevolent', 'kind'],
      exampleSentences: [
        { en: 'The villagers believed a maleficent supernatural force haunted the forest.', ko: '마을 사람들은 해로운 의도를 가진 초자연적인 힘이 숲에 출몰한다고 믿었다.' },
        { en: 'She was known for her maleficent influence on the young prince\'s decisions.', ko: '그녀는 어린 왕자의 결정에 해로운 영향력을 미치는 것으로 알려져 있었다.' },
      ],
    }
  ),
  word('Malfeasance', '직무상 부정행위', 10, 'noun',
    ['정직', '성실', '충실', '부지런함', '충성', '준법', '청렴', '도덕', '책임', '공정'],
    tips({
      etymology: '라틴어 어근 mal(나쁜)과 facere(행하다)에서 유래하여 \'나쁜 짓을 행함\'이라는 의미를 가집니다.',
      visual: '높은 직급의 공무원이 서류 뭉치 사이로 몰래 뒷돈을 챙기며 눈치를 보는 장면을 상상해 보세요.',
      soundAlike: '말(mal)도 안 되는 피즌스(feasance, 행위)! 공직자가 해서는 안 될 몰상식한 행동을 떠올려 보세요.',
      context: '단순한 실수가 아니라 법적 책임이 따르는 공직자나 기업 임원의 고의적인 부정부패를 다룰 때 주로 쓰입니다.',
      synonymAntonym: '부당 행위를 뜻하는 misconduct와 유사하며, 고결함을 뜻하는 integrity와는 정반대의 개념입니다.',
    }),
    {
      definition: 'illegal or dishonest activity, especially when committed by a person in a position of authority or public trust',
      synonyms: ['misconduct', 'wrongdoing', 'impropriety'],
      antonyms: ['integrity', 'probity', 'lawfulness'],
      exampleSentences: [
        { en: 'The mayor was investigated for financial malfeasance during his term.', ko: '시장은 임기 중 재정적 부정 행위로 조사를 받았다.' },
        { en: 'The inquiry uncovered widespread malfeasance within the police department.', ko: '조사 결과 경찰 부서 내에 만연한 직무상의 위법 행위가 드러났다.' },
      ],
    }
  ),
  word('Malleable', '구부리기 쉬운', 10, 'adjective',
    ['단단한', '고집하는', '경직된', '굳은', '불변의', '견고한', '완고한', '뻣뻣한', '부동의', '강직한'],
    tips({
      etymology: '라틴어 malleus(망치)에서 유래하여 망치로 두드려 펼 수 있다는 의미를 담고 있습니다.',
      visual: '뜨거운 불길 속에서 대장장이가 망치로 내리칠 때마다 모양이 자유자재로 변하는 금속을 상상해 보세요.',
      soundAlike: '\'말려블\' -> \'말랑말랑\'하게 잘 말리는 성질을 떠올리면 기억하기 쉽습니다.',
      context: '금속처럼 물리적인 형태가 변하는 경우뿐만 아니라, 생각이나 성격이 유연하여 남의 말에 잘 따르는 상황에도 사용됩니다.',
      synonymAntonym: 'pliable, adaptable과 같이 유연함을 뜻하는 단어와 어울리며, 딱딱하게 굳은 rigid와는 반대됩니다.',
    }),
    {
      definition: 'Able to be hammered or pressed permanently out of shape without breaking or cracking; easily influenced or trained.',
      synonyms: ['pliable', 'adaptable', 'ductile'],
      antonyms: ['rigid', 'inflexible', 'stiff'],
      exampleSentences: [
        { en: 'Gold is a highly malleable metal that can be beaten into thin sheets.', ko: '금은 얇은 판으로 두드려 펼 수 있는 매우 가소성이 높은 금속이다.' },
        { en: 'The minds of young children are very malleable and easily influenced by their surroundings.', ko: '어린 아이들의 마음은 매우 유연해서 주변 환경에 쉽게 영향을 받는다.' },
      ],
    }
  ),
  word('Martinet', '군기반장', 10, 'noun',
    ['관대한 지도자', '느슨한 사람', '자유주의자', '관용자', '유연한 사람', '방임주의자', '낙천가', '평화주의자', '친절한 교사', '방관자'],
    tips({
      etymology: '17세기 프랑스 국왕 루이 14세 휘하의 엄격한 훈련관이었던 장 마르티네(Jean Martinet)의 이름에서 유래했습니다.',
      visual: '줄이 조금만 흐트러져도 불호령을 내리며 병사들의 복장을 점검하는 까다로운 교관을 상상해 보세요.',
      soundAlike: '마르티네 -> \'마디마디\' 규칙을 따지고 \'마구\' 화를 내는 깐깐한 사람으로 연상하면 쉽습니다.',
      context: '군대 조직뿐만 아니라 학교나 직장에서 사소한 규칙 위반도 용납하지 않는 원칙주의자를 묘사할 때 사용합니다.',
      synonymAntonym: 'disciplinarian, stickler와 같은 단어와 비슷하며, 반대로 관대한 사람은 lenient person이라고 합니다.',
    }),
    {
      definition: 'A person who demands absolute adherence to rules and maintains extremely strict discipline over others.',
      synonyms: ['disciplinarian', 'stickler', 'tyrant'],
      antonyms: ['libertine', 'easygoer', 'permissivist'],
      exampleSentences: [
        { en: 'The army captain was a martinet known for punishing soldiers for even the slightest uniform imperfection.', ko: '그 육군 대위는 제복의 아주 작은 결점에도 병사들을 처벌하는 것으로 알려진 군기반장이었다.' },
        { en: 'Our music teacher was such a martinet that she expected us to arrive ten minutes before every rehearsal.', ko: '우리 음악 선생님은 모든 리허설 10분 전에 도착하기를 요구할 정도로 엄격한 원칙주의자였다.' },
      ],
    }
  ),
  word('Maudlin', '눈물겹게 술 취한', 10, 'adjective',
    ['냉정한', '단정한', '절제된', '차분한', '이성적인', '무감각한', '딱딱한', '냉담한', '강인한', '현실적인'],
    tips({
      etymology: '성경의 막달라 마리아(Magdalene)가 참회의 눈물을 흘리는 예술 작품 속 모습에서 유래했습니다.',
      visual: '술집 구석에서 빈 술병을 앞에 두고 옛 기억에 잠겨 엉엉 울고 있는 사람을 상상해 보세요.',
      soundAlike: '\'모들린\'을 \'모든 걸 다 흘린\'으로 기억하세요. 눈물과 콧물을 다 흘리며 우는 모습입니다.',
      context: '단순히 슬픈 것이 아니라, 술 기운에 빌려 과하게 감상적이거나 신파조가 된 상황에 주로 쓰입니다.',
      synonymAntonym: 'sentimental이나 weepy처럼 눈물이 많은 상태를 뜻하며, 반대로 stoic은 감정을 억제하는 상태입니다.',
    }),
    {
      definition: 'showing or expressing too much emotion in a foolish or annoying way, especially when influenced by alcohol',
      synonyms: ['sentimental', 'weepy', 'mushy'],
      antonyms: ['composed', 'unemotional', 'stoic'],
      exampleSentences: [
        { en: 'After a few glasses of wine, he became quite maudlin and started crying about his childhood.', ko: '와인 몇 잔을 마신 후, 그는 몹시 감상적이 되어 어린 시절을 떠올리며 울기 시작했다.' },
        { en: 'The movie\'s ending was far too maudlin for my taste, with its forced emotional scenes.', ko: '그 영화의 결말은 억지스러운 감정 과잉 장면들 때문에 내 취향에는 너무 신파조였다.' },
      ],
    }
  ),
  word('Mendacious', '거짓말하는', 10, 'adjective',
    ['진실한', '정직한', '솔직한', '투명한', '믿을 만한', '사실적인', '청렴한', '성실한', '올바른', '정당한'],
    tips({
      etymology: '라틴어 mendax(거짓말쟁이)에서 유래했으며, 결점이나 실수를 뜻하는 mendum과도 관련이 있습니다.',
      visual: '중요한 서류 뒤에 가짜 문서를 숨기고 능청스럽게 웃고 있는 사기꾼의 얼굴을 떠올려 보세요.',
      soundAlike: '맨데이셔스 - \'맨날 대충\' 사실이 아닌 거짓말로 상황을 모면하려는 태도를 연상하세요.',
      context: '격식 있는 상황에서 단순히 거짓말을 하는 것뿐만 아니라, 의도적으로 정보를 왜곡하거나 속이는 성향을 비판할 때 사용합니다.',
      synonymAntonym: 'dishonest, deceitful, fallacious가 동의어이며 truthful, veracious, honest가 반의어입니다.',
    }),
    {
      definition: 'not telling the truth; lying or having a tendency to be untruthful in a habitual or intentional way',
      synonyms: ['dishonest', 'deceitful', 'fallacious'],
      antonyms: ['truthful', 'veracious', 'honest'],
      exampleSentences: [
        { en: 'The newspaper was sued for publishing mendacious reports about the celebrity\'s private life.', ko: '그 신문사는 연예인의 사생활에 대한 허위 보도를 게재한 혐의로 고소당했다.' },
        { en: 'He gave a mendacious account of his whereabouts on the night of the crime.', ko: '그는 범행 당일 밤 자신의 행방에 대해 거짓 진술을 했다.' },
      ],
    }
  ),
  word('Mercurial', '변덕스러운', 10, 'adjective',
    ['안정된', '일관된', '믿을 만한', '차분한', '고정된', '예측가능한', '변함없는', '정적인', '한결같은', '지속적인'],
    tips({
      etymology: '로마 신화에서 발이 빠른 전령의 신 머큐리(Mercury)의 성격처럼 민첩하고 변화무쌍하다는 점에서 유래했습니다.',
      visual: '액체 금속인 수은(mercury)이 바닥에 떨어졌을 때 사방으로 흩어지며 모양이 계속 변하는 모습을 상상해 보세요.',
      soundAlike: '머큐리얼 -> \'먹구름이 얼\'른 끼었다가 다시 해가 뜨는 변덕스러운 날씨를 연상하면 기억하기 쉽습니다.',
      context: '주로 사람의 기분이나 성격, 혹은 상황이 종잡을 수 없이 급격하게 변할 때 사용하는 고급 형용사입니다.',
      synonymAntonym: 'volatile, fickle, capricious는 모두 변화가 심하다는 뜻이며, steady, constant, stable은 꾸준하고 안정된 상태를 뜻합니다.',
    }),
    {
      definition: 'subject to sudden or unpredictable changes of mind or mood',
      synonyms: ['volatile', 'fickle', 'capricious'],
      antonyms: ['steady', 'constant', 'stable'],
      exampleSentences: [
        { en: 'The artist was known for his mercurial temperament, being joyful one minute and depressed the next.', ko: '그 예술가는 방금 전까지 즐거워하다가 금세 우울해지는 변덕스러운 성격으로 유명했다.' },
        { en: 'Investors are worried about the stock market\'s mercurial behavior this week.', ko: '투자자들은 이번 주 주식 시장의 변덕스러운 움직임을 우려하고 있다.' },
      ],
    }
  ),
  word('Meritorious', '공훈 있는', 10, 'adjective',
    ['무가치한', '저급한', '비참한', '형편없는', '부끄러운', '비난받을', '쓸모없는', '열등한', '부도덕한', '사악한'],
    tips({
      etymology: '라틴어 meritum(공로, 가치)에서 유래하여 칭찬받을 만하다는 뜻을 가집니다.',
      visual: '가슴에 화려한 훈장을 달고 단상 위에서 박수갈채를 받는 영웅의 모습을 상상해 보세요.',
      soundAlike: '메리토리어스 - \'메리트(Merit)\'가 \'토리(산더미)\'처럼 쌓여 상을 받을 만하다고 기억하세요.',
      context: '주로 공식적인 표창, 훈장 수여, 또는 학술적 성과를 기리는 격식 있는 상황에서 쓰입니다.',
      synonymAntonym: 'praiseworthy, commendable와 같은 칭찬의 의미를 가진 단어들과 함께 쓰이며, 반대로 가치 없는 것은 worthless라고 합니다.',
    }),
    {
      definition: 'deserving of high esteem, honor, or reward for excellence or achievement',
      synonyms: ['praiseworthy', 'commendable', 'exemplary'],
      antonyms: ['worthless', 'disreputable', 'unworthy'],
      exampleSentences: [
        { en: 'The committee decided to give her an award for her long and meritorious service to the community.', ko: '위원회는 지역 사회를 위한 그녀의 길고 공훈 있는 헌신적인 봉사에 대해 상을 주기로 결정했다.' },
        { en: 'The scholarship is granted to students who demonstrate meritorious academic achievement.', ko: '그 장학금은 뛰어난 학업적 성취를 보여준 공훈 있는 학생들에게 수여된다.' },
      ],
    }
  ),
  word('Meticulous', '꼼꼼한', 10, 'adjective',
    ['대충하는', '부주의한', '성의 없는', '황급한', '무관심한', '덤벙대는', '허술한', '태만한', '엉성한', '경솔한'],
    tips({
      etymology: '라틴어 metus(두려움)에서 유래하여, 실수할까 봐 두려워할 정도로 조심스럽고 세심하다는 의미를 담고 있습니다.',
      visual: '돋보기를 들고 아주 작은 먼지 하나까지 찾아내며 정밀하게 작업하는 장인의 모습을 상상해 보세요.',
      soundAlike: '메티큘러스 - \'매듭을 큘(쿨)하게\' 대충 묶지 않고, 하나하나 정성을 다해 꼼꼼히 묶는 소리를 연상하세요.',
      context: '학술 연구, 회계 장부 정리, 정밀 기계 조립 등 아주 작은 디테일이 생명인 상황에서 자주 사용됩니다.',
      synonymAntonym: '유사어로는 painstaking, precise가 있으며, 반대말로는 대충 하는 느낌의 careless, sloppy가 있습니다.',
    }),
    {
      definition: 'showing great attention to detail and being very careful and precise in one\'s work or actions',
      synonyms: ['painstaking', 'precise', 'scrupulous'],
      antonyms: ['careless', 'sloppy', 'negligent'],
      exampleSentences: [
        { en: 'The researcher kept meticulous records of every single observation during the experiment.', ko: '그 연구원은 실험 중 모든 관찰 사항을 매우 상세하고 꼼꼼하게 기록했다.' },
        { en: 'He is meticulous about his appearance, always making sure his suit is perfectly pressed.', ko: '그는 외모에 아주 세심해서 항상 정장이 완벽하게 다려졌는지 확인한다.' },
      ],
    }
  ),
  word('Milieu', '환경', 10, 'noun',
    ['격리', '고립', '외부', '차단', '단절', '진공', '황무지', '개인', '내면', '폐쇄'],
    tips({
      etymology: '프랑스어 mi(중간)와 lieu(장소)가 합쳐져 \'중심이 되는 장소\' 즉 주변 환경을 뜻하게 되었습니다.',
      visual: '1920년대 파리의 카페에서 예술가들이 모여 토론하는 사교적인 분위기를 상상해 보세요.',
      soundAlike: '\'밀리유\' - 사람들이 북적이며 \'밀려 있는\' 사회적 장소나 분위기를 떠올리면 기억하기 쉽습니다.',
      context: '단순한 자연 생태계보다는 개인이 처한 사회적, 문화적 배경이나 특정한 시대적 상황을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: 'environment, setting과 유사하지만 더 격식 있는 표현이며, isolation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'The social or cultural background and surroundings in which someone lives or something happens.',
      synonyms: ['environment', 'setting', 'surroundings'],
      antonyms: ['isolation', 'emptiness', 'remoteness'],
      exampleSentences: [
        { en: 'Growing up in a diplomatic milieu, she learned to speak four languages fluently.', ko: '외교적 환경에서 자라면서 그녀는 4개 국어를 유창하게 구사하게 되었다.' },
        { en: 'The young artist finally found a creative milieu that inspired his best work.', ko: '그 젊은 예술가는 마침내 최고의 작품을 만들 영감을 주는 창조적 환경을 찾았다.' },
      ],
    }
  ),
  word('Misanthrope', '인간 혐오자', 10, 'noun',
    ['박애주의자', '사교가', '인도주의자', '자선가', '낙천주의자', '평화주의자', '외향주의자', '협력자', '동반자', '친화주의자'],
    tips({
      etymology: '그리스어 \'miso(증오)\'와 \'anthropos(인간)\'가 결합되어 탄생한 단어로, 말 그대로 인간을 싫어하는 사람을 뜻합니다.',
      visual: '사람들이 가득한 광장에서 홀로 인상을 찌푸린 채 멀리 떨어져 있는 냉소적인 인물을 상상해 보세요.',
      soundAlike: '단어의 앞부분 \'Misan\'이 \'미워산\'처럼 들린다고 생각하며, 사람을 산더미처럼 미워하는 이미지를 떠올려 보세요.',
      context: '문학이나 영화에서 사회에 환멸을 느끼고 타인과의 접촉을 일절 거부하는 은둔형 캐릭터를 설명할 때 주로 사용됩니다.',
      synonymAntonym: '인간을 불신하는 cynic과 유사하며, 인류를 사랑하고 돕는 philanthropist와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A person who avoids human society and harbors a general distrust or hatred toward other people.',
      synonyms: ['cynic', 'skeptic', 'recluse'],
      antonyms: ['philanthropist', 'humanitarian', 'altruist'],
      exampleSentences: [
        { en: 'After years of betrayal, he withdrew from society and lived as a bitter misanthrope.', ko: '수년간의 배신 끝에 그는 사회로부터 물러나 비관적인 인간 혐오자로 살았다.' },
        { en: 'The character in the play is a classic misanthrope who finds fault in everyone he meets.', ko: '그 연극 속 인물은 만나는 모든 사람에게서 결점을 찾아내는 전형적인 인간 혐오자이다.' },
      ],
    }
  ),
  word('Mordant', '통렬한', 10, 'adjective',
    ['부드러운', '온화한', '친절한', '자비로운', '칭찬하는', '완곡한', '무딘', '너그러운', '따뜻한', '긍정적인'],
    tips({
      etymology: '라틴어 mordere(물다)에서 유래하여, 말로 상대방을 \'물어뜯는 듯한\' 날카로운 느낌을 줍니다.',
      visual: '날카로운 이빨이 달린 혀가 상대방의 자존심을 콱 깨무는 공격적인 장면을 상상해 보세요.',
      soundAlike: '모던트, \'모조리 다(mordant)\' 헐뜯는 독설을 퍼붓는 통렬한 모습을 연상하세요.',
      context: '주로 정치 풍자, 비평가들의 날카로운 비평, 혹은 냉소적인 유머를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '동의어 caustic, acerbic은 타는 듯한 날카로움을, 반의어 mild, gentle은 부드러움을 뜻합니다.',
    }),
    {
      definition: 'expressing harsh criticism or using sharp, biting sarcasm in a way that is clever but cruel',
      synonyms: ['caustic', 'acerbic', 'sardonic'],
      antonyms: ['mild', 'gentle', 'kind'],
      exampleSentences: [
        { en: 'The comedian is famous for his mordant humor regarding social issues.', ko: '그 코미디언은 사회적 문제에 대한 통렬한 유머로 유명하다.' },
        { en: 'The editorial offered a mordant attack on the government\'s new policy.', ko: '그 사설은 정부의 새로운 정책에 대해 통렬한 공격을 가했다.' },
      ],
    }
  ),
  word('Moribund', '죽어 가는', 10, 'adjective',
    ['활발한', '번성하는', '생기 있는', '활력 있는', '활기에 찬', '성장하는', '왕성한', '유망한', '건강한', '강력한'],
    tips({
      etymology: '라틴어 \'mori(죽다)\'에서 유래했습니다. \'mortal(치명적인)\'이나 \'mortuary(영안실)\'와 같은 어원을 공유합니다.',
      visual: '배터리가 1% 남아서 화면이 깜빡거리며 꺼지기 직전인 오래된 스마트폰을 떠올려 보세요.',
      soundAlike: '\'머리(mori)가 번(bund)쩍\' 하고 마지막 힘을 쥐어짜다 결국 쓰러져 죽어가는 모습을 연상해 보세요.',
      context: '의학적으로 생명이 위독한 상태뿐만 아니라, 경제적 침체에 빠진 산업이나 사라져가는 낡은 관습을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: 'dying과 유사하지만 더 격식 있는 표현이며, 반대말로는 생명력이 넘치는 thriving이나 vibrant가 있습니다.',
    }),
    {
      definition: 'approaching the end of life or existence; lacking any energy or vigor and likely to fail completely',
      synonyms: ['dying', 'fading', 'declining'],
      antonyms: ['thriving', 'flourishing', 'vibrant'],
      exampleSentences: [
        { en: 'The heavy reliance on coal has left the local economy in a moribund state.', ko: '석탄에 대한 높은 의존도는 지역 경제를 침체된 상태로 만들었다.' },
        { en: 'Critics argued that the once-popular art movement had become moribund and repetitive.', ko: '비평가들은 한때 인기 있었던 그 예술 운동이 이제는 생명력을 잃고 반복적일 뿐이라고 주장했다.' },
      ],
    }
  ),
  word('Munificent', '아낌없이 주는', 10, 'adjective',
    ['인색한', '알뜰한', '구두쇠 같은', '검소한', '야박한', '탐욕스러운', '이기적인', '소극적인', '엄격한', '냉정한'],
    tips({
      etymology: '라틴어 munus(선물)와 facere(만들다)가 합쳐져 \'선물을 만드는\' 즉, 후한 사람을 뜻합니다.',
      visual: '양손 가득 금화와 선물을 들고 사람들에게 나누어 주는 부자를 떠올려 보세요.',
      soundAlike: '뮤니피슨트, \'머니(Money)를 핏(Fit)하게 쓴트\'처럼 돈을 아낌없이 잘 쓰는 느낌으로 외우세요.',
      context: '거액의 기부금을 내거나 매우 관대한 보상을 제공할 때 사용되는 격식 있는 단어입니다.',
      synonymAntonym: '동의어는 generous, lavish이며 반의어는 인색한 stingy, parsimonious입니다.',
    }),
    {
      definition: 'characterized by or displaying great generosity, often involving a gift of money that is larger than expected',
      synonyms: ['generous', 'lavish', 'magnanimous'],
      antonyms: ['stingy', 'parsimonious', 'miserly'],
      exampleSentences: [
        { en: 'The university received a munificent grant from an anonymous benefactor.', ko: '그 대학교는 익명의 후원자로부터 대단히 후한 보조금을 받았습니다.' },
        { en: 'He was known for his munificent hospitality toward all his guests.', ko: '그는 모든 손님들에게 베푸는 아낌없는 환대로 유명했습니다.' },
      ],
    }
  ),
  word('Myopic', '근시안적인', 10, 'adjective',
    ['선견지명 있는', '원대한', '통찰력 있는', '전략적인', '멀리 내다보는', '현명한', '지혜로운', '포괄적인', '심사숙고하는', '앞날을 내다보는'],
    tips({
      etymology: '그리스어 \'myops\'에서 유래했으며, 눈을 가늘게 뜨고 가까운 것만 겨우 보는 상태를 의미합니다.',
      visual: '코앞에 떨어진 동전 하나를 줍느라 바로 앞에서 달려오는 거대한 기차를 보지 못하는 사람을 떠올려 보세요.',
      soundAlike: '\'마이오픽\'을 \'My(나의) 오직 Pick\'으로 기억하세요. 오직 내 눈앞에 있는 것만 선택하는 좁은 시야를 연상시킵니다.',
      context: '의학적으로 시력이 나쁜 상태를 뜻하기도 하지만, 주로 장기적인 결과나 넓은 맥락을 고려하지 못하는 계획이나 태도를 비판할 때 자주 쓰입니다.',
      synonymAntonym: '눈앞만 보는 short-sighted와 유사하며, 멀리 내다보는 visionary나 far-sighted와는 반대되는 개념입니다.',
    }),
    {
      definition: 'unable to see distant objects clearly or failing to consider the long-term implications of an action or decision',
      synonyms: ['short-sighted', 'narrow-minded', 'unimaginative'],
      antonyms: ['far-sighted', 'prescient', 'visionary'],
      exampleSentences: [
        { en: 'The government was criticized for its myopic focus on short-term profits rather than environmental sustainability.', ko: '정부는 환경적 지속가능성보다 단기적 이익에만 치중한 근시안적인 태도로 비판을 받았다.' },
        { en: 'Without a broader perspective, your myopic approach to the problem will only lead to more complications later.', ko: '더 넓은 관점이 없다면, 문제에 대한 당신의 근시안적인 접근은 나중에 더 많은 복잡한 상황을 초래할 뿐이다.' },
      ],
    }
  ),
  word('Nadir', '최저점', 10, 'noun',
    ['정점', '절정', '최고조', '극치', '전성기', '상승', '고도', '천장', '수평', '중간'],
    tips({
      etymology: '아랍어 \'nazir(반대쪽)\'에서 유래하여, 천문학에서 머리 위 정점인 천정(zenith)의 정반대인 발밑 지점을 뜻합니다.',
      visual: 'V자형 그래프에서 가장 깊게 파인 골짜기의 밑바닥이나 웅덩이의 가장 낮은 곳을 상상해 보세요.',
      soundAlike: '\'네이더\'라고 발음하며, \'내(가) 더(내려갈 곳이 없는)\' 처참한 바닥 상태를 연상하면 기억하기 쉽습니다.',
      context: '주로 경제 지표의 최저치, 커리어의 슬럼프, 혹은 인생에서 가장 힘들었던 암흑기를 묘사할 때 사용됩니다.',
      synonymAntonym: '반의어인 zenith(천정)와 세트로 외우면 천문학적 개념과 비유적 의미를 동시에 잡을 수 있습니다.',
    }),
    {
      definition: 'the lowest point in the fortunes of a person or organization, or the point on the celestial sphere directly below an observer',
      synonyms: ['bottom', 'rock-bottom', 'low-water mark'],
      antonyms: ['zenith', 'acme', 'pinnacle'],
      exampleSentences: [
        { en: 'The relationship reached its nadir when they stopped speaking to each other entirely.', ko: '그들이 서로 완전히 말을 섞지 않게 되었을 때 그들의 관계는 최악의 상황에 도달했다.' },
        { en: 'Company profits hit their nadir in the third quarter before starting to recover.', ko: '회사의 이익은 회복되기 전인 3분기에 최저점을 기록했다.' },
      ],
    }
  ),
  word('Nascent', '막 태어난', 10, 'adjective',
    ['완성된', '성숙한', '발달한', '오래된', '종말의', '노련한', '쇠퇴하는', '확립된', '진부한', '고착된'],
    tips({
      etymology: '라틴어 nasci(태어나다)에서 유래하여, 이제 막 생겨나기 시작한 상태를 의미합니다.',
      visual: '흙을 뚫고 갓 올라온 연둣빛 새싹이나 갓 태어난 아기를 상상해 보세요.',
      soundAlike: '내슨트, \'내(가) 선(섰다) 트(트이다)\'처럼 이제 막 일어서서 시작되는 느낌으로 외우세요.',
      context: '새로운 기술, 정당, 혹은 아이디어가 초기 단계에 있을 때 자주 사용됩니다.',
      synonymAntonym: '동의어는 emerging, budding이며 반의어는 다 자란 mature, developed입니다.',
    }),
    {
      definition: 'just coming into existence and beginning to display signs of future potential',
      synonyms: ['emerging', 'budding', 'incipient'],
      antonyms: ['mature', 'established', 'dying'],
      exampleSentences: [
        { en: 'The nascent industry showed promise.', ko: '막 태어난 산업이 가능성을 보여주었다.' },
        { en: 'She supported the nascent democracy movement.', ko: '그녀는 막 태어난 민주화 운동을 지지했다.' },
      ],
    }
  ),
  word('Nefarious', '사악한', 10, 'adjective',
    ['정직한', '선량한', '도덕적인', '고결한', '정의로운', '자비로운', '순수한', '청렴한', '성실한', '윤리적인'],
    tips({
      etymology: '라틴어 ne(부정)와 fas(신의 법/천리)가 결합된 단어로, 하늘의 도리를 저버릴 만큼 극악무도함을 의미합니다.',
      visual: '어두운 지하실에서 기괴한 미소를 지으며 세계 파괴 계획을 세우는 영화 속 악당의 모습을 상상해 보세요.',
      soundAlike: '\'네(너) 패(패거리) 이어서\' 나쁜 짓을 저지르러 가는 사악한 무리들의 발소리를 연상해 보세요.',
      context: '단순한 실수가 아니라 범죄 조직의 음모나 독재자의 잔혹한 행위처럼 도덕적으로 용납할 수 없는 상황에 주로 쓰입니다.',
      synonymAntonym: '사악한 wicked와 유사하며, 반대로 도덕적으로 훌륭한 상태는 virtuous나 noble이라고 표현합니다.',
    }),
    {
      definition: 'extremely wicked, villainous, or openly evil in nature and intent',
      synonyms: ['wicked', 'villainous', 'heinous'],
      antonyms: ['virtuous', 'noble', 'righteous'],
      exampleSentences: [
        { en: 'The hackers developed a nefarious scheme to steal the life savings of elderly citizens.', ko: '해커들은 노인들의 평생 저축액을 가로채기 위한 사악한 계획을 세웠다.' },
        { en: 'The movie features a nefarious villain who wants to control the world\'s water supply.', ko: '그 영화에는 전 세계의 용수 공급을 통제하려는 사악한 악당이 등장한다.' },
      ],
    }
  ),
  word('Neophyte', '초보자', 10, 'noun',
    ['숙련자', '전문가', '베테랑', '달인', '고수', '숙련공', '전문인', '선구자', '지도자', '권위자'],
    tips({
      etymology: '그리스어 neos(새로운)와 phytos(심겨진 것)가 합쳐져 \'새로 심겨진 나무\'처럼 갓 시작한 사람을 뜻합니다.',
      visual: '화분에 갓 옮겨 심어져 아직 뿌리가 약한 어린 새싹의 모습을 떠올려 보세요.',
      soundAlike: '네오(Neo, 새로운) + 파이트(Fight, 싸움) -> 새로운 싸움터(분야)에 막 발을 들인 신입.',
      context: '단순한 초보를 넘어 종교적 입문자나 특정 기술을 전수받기 시작한 수습생에게 자주 쓰입니다.',
      synonymAntonym: '동의어 beginner, novice와 함께 외우고, 반대말인 expert, veteran과 대조하면 기억하기 쉽습니다.',
    }),
    {
      definition: 'A person who has recently started a particular activity or joined a religious group and lacks experience.',
      synonyms: ['beginner', 'novice', 'tyro'],
      antonyms: ['expert', 'veteran', 'master'],
      exampleSentences: [
        { en: 'The neophyte needed guidance from the senior staff to complete the complex task.', ko: '그 초보자는 복잡한 업무를 완수하기 위해 선임 직원들의 지도가 필요했습니다.' },
        { en: 'As a neophyte in the field of coding, she spent hours practicing the most basic commands.', ko: '코딩 분야의 입문자로서 그녀는 가장 기초적인 명령어들을 연습하는 데 몇 시간을 보냈습니다.' },
      ],
    }
  ),
  word('Nihilism', '허무주의', 10, 'noun',
    ['낙관주의', '이상주의', '실재론', '유신론', '목적론', '긍정주의', '신념', '가치관', '의미론', '확신'],
    tips({
      etymology: '라틴어 \'nihil(아무것도 없음)\'에서 유래하여 세상의 모든 가치와 질서가 무의미하다는 사상을 뜻합니다.',
      visual: '텅 빈 우주 공간에 홀로 앉아 세상의 모든 규칙이 적힌 책을 불태우는 철학자의 모습.',
      soundAlike: '\'니(너) 힐(heal)해도 소용없어\'라며 치료조차 무의미하다고 느끼는 허무한 상황을 연상하세요.',
      context: '주로 철학적 담론이나 문학에서 기존의 도덕, 종교, 사회적 가치를 전면 부정할 때 언급됩니다.',
      synonymAntonym: '비관주의를 뜻하는 pessimism과 유사하며, 희망찬 idealism이나 optimism과는 정반대의 개념입니다.',
    }),
    {
      definition: 'The philosophical doctrine suggesting that lack of belief in any meaning or intrinsic value in human existence is the only valid perspective.',
      synonyms: ['pessimism', 'cynicism', 'skepticism'],
      antonyms: ['idealism', 'optimism', 'belief'],
      exampleSentences: [
        { en: 'His deep sense of nihilism led him to believe that no human achievement truly matters in the long run.', ko: '그의 깊은 허무주의는 장기적으로 볼 때 인간의 어떤 성취도 진정으로 중요하지 않다고 믿게 만들었습니다.' },
        { en: 'The novel explores the transition from youthful rebellion to a cold, intellectual nihilism.', ko: '그 소설은 젊은 날의 반항에서 차갑고 지적인 허무주의로 변해가는 과정을 탐구합니다.' },
      ],
    }
  ),
  word('Nonchalant', '무관심한', 10, 'adjective',
    ['열정적인', '걱정하는', '안절부절못하는', '진지한', '예민한', '긴장한', '몰두하는', '열렬한', '조바심내는', '신중한'],
    tips({
      etymology: '프랑스어 non(부정)과 chaloir(관심을 갖다)가 결합되어, 어떤 일에도 뜨거워지지 않고 \'열의가 없는\' 상태를 뜻하게 되었습니다.',
      visual: '주변 사람들이 모두 당황해서 뛰어다닐 때, 혼자 소파에 비스듬히 기대어 하품을 하는 사람의 모습.',
      soundAlike: '\'논(Non) + 챌린트\' -> 어떤 도전(Challenge)이 와도 \'아니(Non), 별거 아냐\'라고 대수롭지 않게 넘기는 상황.',
      context: '주로 긴박한 상황이나 중요한 순간에 지나칠 정도로 태연하고 차분한 태도를 묘사할 때 자주 사용됩니다.',
      synonymAntonym: 'indifferent, casual과 비슷하며, 반대로 몹시 걱정하거나 주의를 기울이는 anxious, concerned와는 대조적입니다.',
    }),
    {
      definition: 'appearing casually calm and relaxed without displaying any anxiety, interest, or enthusiasm',
      synonyms: ['indifferent', 'casual', 'detached'],
      antonyms: ['attentive', 'concerned', 'anxious'],
      exampleSentences: [
        { en: 'He was nonchalant about the crisis, acting as if nothing was wrong.', ko: '그는 아무 일도 없다는 듯 행동하며 위기에 대해 무관심했습니다.' },
        { en: 'She gave a nonchalant shrug when asked about the expensive loss.', ko: '막대한 손실에 대해 질문을 받았을 때 그녀는 무심하게 어깨를 으쓱했습니다.' },
      ],
    }
  ),
  word('Nonplussed', '당황한', 10, 'adjective',
    ['침착한', '냉정한', '여유로운', '확신에찬', '태연한', '이해하는', '준비된', '차분한', '결단력있는', '평온한'],
    tips({
      etymology: '라틴어 non(아니)과 plus(더)가 합쳐져 \'더 이상 어떻게 할 수 없는\' 당혹스러운 상태를 뜻합니다.',
      visual: '갑작스러운 질문에 머릿속이 하얘져서 입만 벌리고 있는 사람을 상상해 보세요.',
      soundAlike: '논(Non) + 플러스(Plus) -> 머릿속에 더 이상 정보가 입력되지 않아 멍해진 상태.',
      context: '너무 놀라거나 당황해서 어떻게 반응해야 할지 모르는 상황에 주로 쓰입니다.',
      synonymAntonym: 'bewildered와 비슷하며, 침착함을 유지하는 composed와는 반대되는 개념입니다.',
    }),
    {
      definition: 'feeling so surprised and confused that one is unsure how to react or what to say',
      synonyms: ['bewildered', 'perplexed', 'baffled'],
      antonyms: ['composed', 'unfazed', 'enlightened'],
      exampleSentences: [
        { en: 'She was nonplussed by the sudden change in the schedule.', ko: '그녀는 갑작스러운 일정 변경에 당황했습니다.' },
        { en: 'The unexpected outcome of the experiment left the team nonplussed.', ko: '실험의 예상치 못한 결과로 인해 팀은 당혹감에 빠졌습니다.' },
      ],
    }
  ),
  word('Obdurate', '완고한', 10, 'adjective',
    ['유연한', '순종적인', '부드러운', '타협하는', '자비로운', '수용적인', '온순한', '다정다감한', '변화무쌍한', '관대한'],
    tips({
      etymology: '라틴어 ob(강하게)와 durus(단단한)가 합쳐져 돌처럼 단단하게 굳은 마음을 뜻합니다.',
      visual: '모두가 설득해도 팔짱을 꽉 끼고 고개를 젓는 고집불통 황소의 모습.',
      soundAlike: '옵(Ob) + 듀러블(Durable, 내구성 있는) -> 고집의 내구성이 너무 좋아 절대 꺾이지 않는 상태.',
      context: '도덕적인 반성이나 타인의 간절한 설득에도 불구하고 마음을 바꾸지 않는 냉혹한 완고함을 표현할 때 씁니다.',
      synonymAntonym: '동의어인 stubborn보다 훨씬 격식 있고 강한 표현이며, 반의어인 yielding은 유연하게 굴복함을 뜻합니다.',
    }),
    {
      definition: 'stubbornly refusing to change one\'s opinion or course of action, often in a way that is cold or insensitive',
      synonyms: ['stubborn', 'inflexible', 'adamant'],
      antonyms: ['yielding', 'compliant', 'flexible'],
      exampleSentences: [
        { en: 'He remained obdurate in his refusal to apologize despite the overwhelming evidence.', ko: '압도적인 증거에도 불구하고 그는 사과하기를 거부하며 완고한 태도를 유지했습니다.' },
        { en: 'The obdurate judge would not listen to any pleas for mercy from the defendant\'s family.', ko: '그 완고한 판사는 피고인 가족의 어떠한 선처 호소도 듣지 않았습니다.' },
      ],
    }
  ),
  word('Obfuscate', '흐리게 하다', 10, 'verb',
    ['명확히하다', '설명하다', '밝히다', '해명하다', '투명하게하다', '정리하다', '드러내다', '단순화하다', '노출하다', '입증하다'],
    tips({
      etymology: '라틴어 ob(강하게)와 fuscus(어두운)가 합쳐져 \'어둡게 만들다\'라는 뜻에서 유래했습니다.',
      visual: '맑은 물에 먹물을 뿌려 바닥이 보이지 않게 만드는 모습.',
      soundAlike: '옵(Ob) + 퍼스(Puzz, 퍼즐) -> 내용을 퍼즐처럼 꼬아서 흐리게 만듦.',
      context: '진실을 숨기기 위해 일부러 말을 복잡하게 하거나 정보를 흐릴 때 사용합니다.',
      synonymAntonym: '동의어는 confuse, obscure, muddle이며 반의어는 clarify, elucidate, simplify입니다.',
    }),
    {
      definition: 'to deliberately make something less clear and more difficult to understand, often to conceal the truth',
      synonyms: ['confuse', 'obscure', 'muddle'],
      antonyms: ['clarify', 'elucidate', 'simplify'],
      exampleSentences: [
        { en: 'The witness tried to obfuscate the facts during the cross-examination.', ko: '증인은 반대 심문 중에 사실 관계를 흐리려 노력했습니다.' },
        { en: 'Technical jargon is often used to obfuscate simple concepts.', ko: '전문 용어는 종종 단순한 개념을 모호하게 만드는 데 사용됩니다.' },
      ],
    }
  ),
  word('Oblique', '간접적인', 10, 'adjective',
    ['직접적인', '솔직한', '정면의', '수직의', '명백한', '노골적인', '직선의', '단도직입적인', '분명한', '일직선의'],
    tips({
      etymology: '라틴어 obliquus(비스듬한)에서 유래하여 기하학의 빗각이나 간접적인 표현을 뜻합니다.',
      visual: '목표물을 향해 똑바로 가지 않고 옆으로 슥 돌아가는 화살표를 상상해 보세요.',
      soundAlike: '오블리크(Oblique) -> \'오블리(멀리) 크(게)\' 돌아가는 간접적인 길.',
      context: '질문에 대해 직접 답하지 않고 돌려서 말하거나 비스듬한 각도를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '동의어 indirect는 간접적인 경로를, 반의어 direct는 정면 돌파를 의미합니다.',
    }),
    {
      definition: 'not expressed in a direct way, or positioned at a slanting angle rather than being horizontal or vertical',
      synonyms: ['indirect', 'slanting', 'evasive'],
      antonyms: ['direct', 'straightforward', 'blunt'],
      exampleSentences: [
        { en: 'He made an oblique reference to his intention to resign.', ko: '그는 사임 의사를 간접적으로 언급했습니다.' },
        { en: 'The sunlight entered the room at an oblique angle.', ko: '햇빛이 방 안으로 비스듬한 각도로 들어왔습니다.' },
      ],
    }
  ),
  word('Obsequious', '아첨하는', 10, 'adjective',
    ['거만한', '당당한', '독립적인', '반항적인', '무례한', '오만한', '도도한', '자신만만한', '고압적인', '무관심한'],
    tips({
      etymology: '라틴어 ob(뒤에서)와 sequi(따르다)가 합쳐져 졸졸 따라다니며 시중드는 모습을 뜻합니다.',
      visual: '왕 앞에서 손을 비비며 과하게 허리를 굽히고 웃는 신하의 모습.',
      soundAlike: '옵(Ob) + 시퀴(Seek, 찾다) -> 상대의 기분을 맞출 기회만 호시탐탐 찾는 모습.',
      context: '권력자에게 잘 보이기 위해 지나치게 아부하고 굴종적인 태도를 비판할 때 주로 사용합니다.',
      synonymAntonym: '동의어는 servile, fawning, sycophantic이며 반의어는 assertive, arrogant, independent입니다.',
    }),
    {
      definition: 'showing too much willingness to serve or please someone in a way that seems insincere',
      synonyms: ['servile', 'fawning', 'sycophantic'],
      antonyms: ['assertive', 'arrogant', 'independent'],
      exampleSentences: [
        { en: 'The manager was surrounded by obsequious assistants who never disagreed with him.', ko: '매니저는 그에게 절대 반대하지 않는 아첨하는 조수들에게 둘러싸여 있었습니다.' },
        { en: 'I found his obsequious behavior toward the celebrities quite embarrassing.', ko: '유명인들에 대한 그의 아첨하는 행동이 꽤 당혹스럽다고 느꼈습니다.' },
      ],
    }
  ),
  word('Obstreperous', '떠들썩한', 10, 'adjective',
    ['조용한', '순종적인', '차분한', '온순한', '침착한', '정숙한', '유순한', '얌전한', '평온한', '말을 잘 듣는'],
    tips({
      etymology: '라틴어 ob(대항하여)와 strepere(소음을 내다)가 결합되어, 단순히 시끄러운 것을 넘어 무언가에 반항하며 소란을 피우는 상태를 의미합니다.',
      visual: '수업 시간에 선생님의 지시를 무시하고 책상을 두드리며 소리를 지르는 통제 불능의 학생 무리를 상상해 보세요.',
      soundAlike: '단어 중간의 \'strep\' 발음이 \'stress\'와 비슷합니다. 주변이 너무 시끄럽고 통제가 안 되어 스트레스를 받는 상황을 연상하세요.',
      context: '주로 고집 센 아이, 술에 취해 난동을 부리는 손님, 혹은 통제가 불가능할 정도로 소란스러운 시위 군중을 묘사할 때 사용됩니다.',
      synonymAntonym: 'unruly나 boisterous처럼 거친 느낌을 주며, 반대로 순종적이고 조용한 상태인 docile, calm과는 대조적입니다.',
    }),
    {
      definition: 'marked by unruly or aggressive noisiness and stubbornly resistant to control',
      synonyms: ['unruly', 'boisterous', 'clamorous'],
      antonyms: ['quiet', 'docile', 'submissive'],
      exampleSentences: [
        { en: 'The obstreperous crowd refused to leave the building even after the police arrived.', ko: '통제 불능의 떠들썩한 군중은 경찰이 도착한 후에도 건물 떠나기를 거부했다.' },
        { en: 'The teacher found it difficult to manage the obstreperous students during the field trip.', ko: '교사는 현장 학습 동안 통제하기 힘들 정도로 시끄러운 학생들을 지도하는 데 어려움을 겪었다.' },
      ],
    }
  ),
  word('Obtuse', '둔한', 10, 'adjective',
    ['예리한', '영리한', '민첩한', '날카로운', '통찰력 있는', '명석한', '기민한', '똑똑한', '예민한', '지혜로운'],
    tips({
      etymology: '라틴어 obtusus에서 유래하여 \'두드려서 뭉툭해진\' 상태를 의미하며, 날카로움이 사라진 상태를 뜻합니다.',
      visual: '끝이 뭉툭하게 닳아버려 종이를 뚫지 못하는 연필심이나 무딘 칼날을 상상해 보세요.',
      soundAlike: '수학 시간에 배우는 90도보다 큰 \'둔각\'을 떠올리면 각이 넓고 둔한 이미지를 쉽게 연결할 수 있습니다.',
      context: '상대방이 눈치를 주거나 힌트를 줘도 전혀 알아채지 못하는 답답한 상황에서 주로 쓰입니다.',
      synonymAntonym: 'dull, insensitive와 의미가 통하며, 머리가 잘 돌아가는 sharp, astute와는 반대되는 개념입니다.',
    }),
    {
      definition: 'slow to understand or perceive something, or lacking the intellectual sharpness to grasp a situation quickly',
      synonyms: ['dull', 'insensitive', 'imperceptive'],
      antonyms: ['sharp', 'astute', 'intelligent'],
      exampleSentences: [
        { en: 'He was surprisingly obtuse, appearing almost intentionally unaware of the obvious tension.', ko: '그는 놀라울 정도로 반응이 느렸고, 명백한 긴장감을 거의 의도적으로 알아채지 못하는 것처럼 보였다.' },
        { en: 'The manager was so obtuse that he could not see the flaws in the plan, frustrating his entire team.', ko: '계획의 결함을 보지 않으려는 매니저의 거부는 팀원들에게 그가 상당히 둔한 사람처럼 보이게 만들었다.' },
      ],
    }
  ),
  word('Odious', '역겨운', 10, 'adjective',
    ['매력적인', '사랑스러운', '유쾌한', '호감 가는', '아름다운', '훌륭한', '즐거운', '친절한', '상냥한', '기분 좋은'],
    tips({
      etymology: '라틴어 odium(증오)에서 유래하여 증오를 불러일으키는이라는 의미를 담고 있습니다.',
      visual: '쓰레기 더미에서 나는 고약한 냄새에 코를 막고 인상을 찌푸리는 모습을 그려보세요.',
      soundAlike: '냄새를 뜻하는 odor와 발음이 비슷하여 고약한 냄새처럼 역겨운으로 기억하면 쉽습니다.',
      context: '도덕적으로 비난받을 만한 범죄나 아주 불쾌한 행동을 묘사할 때 씁니다.',
      synonymAntonym: 'hateful, repulsive와 유사한 의미이며 delightful, pleasant와 반대되는 성격의 단어입니다.',
    }),
    {
      definition: 'extremely unpleasant; deserving or causing strong dislike or hatred',
      synonyms: ['hateful', 'repulsive', 'revolting'],
      antonyms: ['delightful', 'pleasant', 'charming'],
      exampleSentences: [
        { en: 'The criminal was convicted for his truly odious acts against the community.', ko: '그 범죄자는 참으로 역겹고 혐오스러운 행위로 유죄 판결을 받았습니다.' },
        { en: 'His odious behavior was so repulsive that he was soon asked to leave the party.', ko: '그의 행동이 너무나 불쾌했기에 그는 곧 파티에서 나가달라는 요청을 받았습니다.' },
      ],
    }
  ),
  word('Officious', '참견 잘하는', 10, 'adjective',
    ['겸손한', '삼가는', '무관심한', '방관하는', '조심스러운', '내성적인', '소극적인', '냉담한', '절제하는', '자제하는'],
    tips({
      etymology: 'office(직무)에서 유래했지만, 자기 직무도 아닌데 남의 일에 과하게 나서는 부정적인 의미로 변했습니다.',
      visual: '남의 책상 위에 놓인 서류를 굳이 들춰보며 훈수를 두는 직장 동료의 모습을 떠올려 보세요.',
      soundAlike: 'Official(공적인)과 발음이 비슷하여 공적인 권위를 내세우며 사사건건 간섭하는 상황을 연상하면 쉽습니다.',
      context: '상대방이 원하지 않는데도 과도하게 친절을 베풀거나 권위적인 태도로 참견하는 사람을 묘사할 때 사용합니다.',
      synonymAntonym: 'meddlesome, intrusive와 유의어이며, 나서지 않는 unobtrusive, 거리를 두는 aloof와 대조됩니다.',
    }),
    {
      definition: 'annoyingly eager to help or advise other people, especially when this is not wanted or needed',
      synonyms: ['meddlesome', 'intrusive', 'overbearing'],
      antonyms: ['unobtrusive', 'modest', 'aloof'],
      exampleSentences: [
        { en: 'The officious clerk kept interrupting our conversation to offer unwanted advice.', ko: '그 참견하기 좋아하는 점원은 원치 않는 조언을 하려고 우리 대화를 계속 방해했다.' },
        { en: 'I found the security guard\'s officious manner quite irritating during the check-in.', ko: '체크인하는 동안 보안 요원의 참견하는 태도가 상당히 짜증스러웠다.' },
      ],
    }
  ),
  word('Omniscient', '전지한', 10, 'adjective',
    ['무지한', '어리석은', '제한적인', '모르는', '부족한', '편협한', '미숙한', '둔감한', '어두운', '맹목적인'],
    tips({
      etymology: '라틴어 \'omni(모든)\'와 \'scire(알다)\'가 결합되어 \'모든 것을 다 아는\'이라는 의미가 되었습니다.',
      visual: '구름 위에서 세상의 모든 구석구석과 사람들의 속마음까지 한눈에 내려다보는 거대한 눈을 상상해 보세요.',
      soundAlike: '과학을 뜻하는 \'Science\'와 어근 \'sci\'를 공유하므로, 지식의 끝판왕인 상태를 연상하면 쉽습니다.',
      context: '주로 종교적인 신의 성질을 묘사하거나, 소설에서 모든 캐릭터의 심리를 꿰뚫어 보는 \'전지적 작가 시점\'을 말할 때 자주 쓰입니다.',
      synonymAntonym: 'all-knowing과 같은 뜻이며, 아무것도 모르는 상태인 ignorant와는 정반대의 개념입니다.',
    }),
    {
      definition: 'having complete or unlimited knowledge, awareness, or understanding of all things',
      synonyms: ['all-knowing', 'infinite', 'all-seeing'],
      antonyms: ['ignorant', 'unknowing', 'uninformed'],
      exampleSentences: [
        { en: 'The novel is told from the perspective of an omniscient narrator who knows every character\'s thoughts.', ko: '그 소설은 모든 등장인물의 생각을 알고 있는 화자의 관점에서 서술된다.' },
        { en: 'Many religions believe in an omniscient deity that is aware of everything happening in the universe.', ko: '많은 종교들은 우주에서 일어나는 모든 일을 알고 있으며 강력한 힘을 가진 신을 믿는다.' },
      ],
    }
  ),
  word('Onerous', '부담스러운', 10, 'adjective',
    ['가벼운', '쉬운', '편안한', '수월한', '간편한', '즐거운', '단순한', '쾌적한', '부담 없는', '안락한'],
    tips({
      etymology: '라틴어 onus(짐)에서 유래하여 \'짐이 많이 실린\' 상태를 뜻합니다.',
      visual: '자기 몸집보다 큰 바위를 등에 지고 가파른 언덕을 오르는 사람을 상상해 보세요.',
      soundAlike: '발음이 \'오너러스\'로, 주인(owner)이 짊어져야 할 무거운 책임으로 연상하면 쉽습니다.',
      context: '단순히 힘든 일을 넘어 법적 책임이나 아주 무거운 의무를 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'burdensome, arduous와 유의어이며, effortless, light와 반대됩니다.',
    }),
    {
      definition: 'involving an amount of effort and difficulty that is oppressively burdensome',
      synonyms: ['burdensome', 'arduous', 'taxing'],
      antonyms: ['effortless', 'easy', 'light'],
      exampleSentences: [
        { en: 'The onerous task of cleaning the entire mansion alone proved to be overwhelming.', ko: '대저택 전체를 혼자 청소하는 일은 상당히 부담스러운 과업임이 드러났다.' },
        { en: 'New tax laws have imposed onerous requirements on small businesses.', ko: '새로운 세법은 소규모 사업체들에게 더 부담스러운 요구 사항들을 부과했다.' },
      ],
    }
  ),
  word('Opaque', '불투명한', 10, 'adjective',
    ['투명한', '명확한', '맑은', '밝은', '이해하기 쉬운', '뚜렷한', '명백한', '비치는', '깨끗한', '환한'],
    tips({
      etymology: '라틴어 opacus(그늘진, 어두운)에서 유래하여 빛이 통과하지 못함을 의미합니다.',
      visual: '검은 페인트가 칠해져서 안쪽이 전혀 보이지 않는 유리창을 떠올려 보세요.',
      soundAlike: '디자인 프로그램에서 투명도를 조절하는 \'오파시티(opacity)\'의 형용사 형태입니다.',
      context: '물리적인 유리뿐만 아니라, 내용이 너무 어려워 이해할 수 없는 문장이나 태도에도 씁니다.',
      synonymAntonym: 'impenetrable, cloudy와 비슷하며, transparent, clear와 반대됩니다.',
    }),
    {
      definition: 'preventing light from traveling through, or being difficult to understand or explain',
      synonyms: ['impenetrable', 'cloudy', 'obscure'],
      antonyms: ['transparent', 'clear', 'lucid'],
      exampleSentences: [
        { en: 'The windows were painted with an opaque substance to prevent people from looking inside.', ko: '사람들이 안을 들여다보지 못하도록 창문에 불투명한 물질이 칠해져 있었다.' },
        { en: 'The technical jargon in the manual made the instructions feel opaque to the average user.', ko: '설명서의 전문 용어들 때문에 일반 사용자가 지침을 이해하기에는 너무 모호했다.' },
      ],
    }
  ),
  word('Opprobrium', '악명', 10, 'noun',
    ['명예', '칭찬', '영광', '존경', '찬사', '승인', '인정', '평판', '환호', '숭배'],
    tips({
      etymology: '라틴어 ob(대항하여)와 probrum(치욕)이 결합된 단어로, 대중의 비난에 직면한 수치스러운 상태를 의미합니다.',
      visual: '잘못을 저지른 정치인이 수많은 카메라 플래시 세례를 받으며 고개를 숙이고 비난을 듣는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'오! 프로(Pro)답지 못한\'과 비슷하므로, 전문가답지 못한 행동으로 인해 얻게 된 \'불명예\'로 기억하세요.',
      context: '단순한 비판을 넘어 도덕적으로 지탄받을 만한 행동을 했을 때 사회적으로 가해지는 강력한 비난과 수치심을 표현할 때 쓰입니다.',
      synonymAntonym: 'infamy, ignominy와 같은 강한 부정적 의미의 단어들과 유의어 관계이며, honor, esteem과는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'harsh criticism or public disgrace resulting from behavior that is considered shameful or socially unacceptable',
      synonyms: ['disgrace', 'infamy', 'ignominy'],
      antonyms: ['honor', 'praise', 'esteem'],
      exampleSentences: [
        { en: 'The corrupt official faced severe public opprobrium after the truth was revealed.', ko: '진실이 밝혀진 후 그 부패한 관료는 대중의 극심한 비난과 악명에 직면했다.' },
        { en: 'The team\'s unsportsmanlike conduct brought opprobrium upon the entire institution.', ko: '그 팀의 비신사적인 행위는 기관 전체에 커다란 수치와 악명을 안겨주었다.' },
      ],
    }
  ),
  word('Oscillate', '흔들리다', 10, 'verb',
    ['고정되다', '안정되다', '머무르다', '확정되다', '결정되다', '정지하다', '유지하다', '단단하다', '일정하다', '멈추다'],
    tips({
      etymology: '라틴어 oscillum(흔들림)에서 유래하여 시계추처럼 앞뒤로 움직이는 동작을 뜻합니다.',
      visual: '오래된 괘종시계의 추가 좌우로 규칙적으로 왔다 갔다 하는 장면을 떠올려 보세요.',
      soundAlike: '오실레이트, \'오실\' 때마다 마음이 흔들려 \'레이트(늦게)\' 도착한다고 연상해 보세요.',
      context: '물리적인 진동뿐만 아니라 두 가지 의견이나 감정 사이에서 갈팡질팡할 때도 자주 쓰입니다.',
      synonymAntonym: '동의어는 sway, vacillate, waver이며 반의어는 stabilize, stay, remain입니다.',
    }),
    {
      definition: 'to move or swing back and forth at a regular speed; to vary between opposing beliefs or feelings',
      synonyms: ['sway', 'vacillate', 'waver'],
      antonyms: ['stabilize', 'stay', 'remain'],
      exampleSentences: [
        { en: 'The fan began to oscillate from side to side to cool the entire room.', ko: '선풍기가 방 전체를 시원하게 하기 위해 좌우로 회전하며 흔들리기 시작했다.' },
        { en: 'He continues to oscillate between optimism and despair regarding the project\'s success.', ko: '그는 프로젝트의 성공에 대해 낙관과 절망 사이를 계속해서 오가고 있다.' },
      ],
    }
  ),
  word('Ostentatious', '과시적인', 10, 'adjective',
    ['검소한', '소박한', '수수한', '은밀한', '절제된', '겸손한', '평범한', '단조로운', '숨겨진', '내성적인'],
    tips({
      etymology: '라틴어 ostentare(자주 보여주다)에서 유래하여, 남의 시선을 끌기 위해 의도적으로 내보이는 성질을 뜻합니다.',
      visual: '번쩍이는 금목걸이를 여러 개 걸치고 화려한 스포츠카에서 내리며 주위를 살피는 사람을 떠올려 보세요.',
      soundAlike: '\'옷을 텐(10) 벌\'이나 껴입고 자신의 패션 감각을 지나치게 뽐내는 상황으로 기억하면 쉽습니다.',
      context: '단순히 화려한 것이 아니라, 남에게 깊은 인상을 남기려고 무리하게 부나 지식을 뽐낼 때 주로 부정적으로 쓰입니다.',
      synonymAntonym: 'showy, flamboyant와 비슷하며, 반대로 겸손하고 꾸밈없는 상태는 modest나 humble이라고 합니다.',
    }),
    {
      definition: 'intended to attract notice and impress others in an extreme or unnecessary way',
      synonyms: ['showy', 'flamboyant', 'pretentious'],
      antonyms: ['modest', 'unobtrusive', 'restrained'],
      exampleSentences: [
        { en: 'The gold-plated faucets in the hotel bathroom seemed a bit too ostentatious for my taste.', ko: '호텔 욕실의 금도금 수도꼭지는 다분히 과시적이고 지나치게 화려해 보였다.' },
        { en: 'He preferred a simple lifestyle over the ostentatious displays of his wealthy neighbors.', ko: '그는 부유한 이웃들의 웅장하고 과시적인 모습보다 소박한 생활 방식을 선호했다.' },
      ],
    }
  ),
  word('Palliate', '완화하다', 10, 'verb',
    ['악화시키다', '가중시키다', '강화하다', '야기하다', '자극하다', '심화하다', '부추기다', '폭발하다', '훼손하다', '오염시키다'],
    tips({
      etymology: '라틴어 pallium(망토)에서 유래했습니다. 병의 근원을 고치기보다 망토로 덮어 겉으로 보이는 고통을 잠시 가린다는 의미를 담고 있습니다.',
      visual: '환자의 거친 숨소리가 부드러운 담요를 덮어주자 차분하게 가라앉는 모습을 상상해 보세요.',
      soundAlike: '\'팔이 에이트(ate, 먹혔다)\'라고 느낄 만큼 극심한 팔의 통증을 약으로 달래서 가라앉히는 상황을 연상하세요.',
      context: '의학적으로는 말기 암 환자의 통증 완화 치료(palliative care)에 자주 쓰이며, 비유적으로는 문제의 근본 해결 없이 상황을 모면할 때 쓰입니다.',
      synonymAntonym: 'alleviate, mitigate와 함께 \'덜어주다\'는 의미로 묶어 외우고, 상황을 악화시키는 exacerbate와 반대 개념으로 기억하세요.',
    }),
    {
      definition: 'to reduce the violence of a disease or to ease symptoms without curing the underlying condition',
      synonyms: ['alleviate', 'mitigate', 'assuage'],
      antonyms: ['aggravate', 'exacerbate', 'intensify'],
      exampleSentences: [
        { en: 'The doctor prescribed a strong medication to palliate the patient\'s suffering during the final stages of the illness.', ko: '의사는 질병의 마지막 단계 동안 환자의 고통을 완화하기 위해 강한 약을 처방했다.' },
        { en: 'Choosing to palliate the budget deficit will only delay the crisis rather than resolve it.', ko: '예산 적자를 무시하는 것은 위기를 해결하기보다는 그 심각성을 일시적으로 완화하는 역할만 할 뿐이다.' },
      ],
    }
  ),
  word('Panacea', '만병통치약', 10, 'noun',
    ['고질병', '불치병', '재앙', '고통', '질병', '독약', '부작용', '원인', '장애물', '결함'],
    tips({
      etymology: '그리스어 pan(모든)과 akos(치료)가 합쳐져 모든 것을 고친다는 뜻에서 유래했습니다.',
      visual: '게임 속에서 마시기만 하면 모든 상태 이상이 회복되는 황금빛 물약을 상상해 보세요.',
      soundAlike: '패너시아, \'다 고쳐내서\' 마음이 \'편안해지어\'라고 발음을 연결해 보세요.',
      context: '실제 약뿐만 아니라 복잡한 사회 문제를 한 번에 해결할 수 있는 완벽한 대책을 비유할 때 자주 쓰입니다.',
      synonymAntonym: '모든 것을 고치는 cure-all과 유사하며, 해를 끼치는 poison이나 bane과는 반대되는 개념입니다.',
    }),
    {
      definition: 'something that is believed to solve all problems or cure all illnesses',
      synonyms: ['cure-all', 'elixir', 'nostrum'],
      antonyms: ['poison', 'toxin', 'bane'],
      exampleSentences: [
        { en: 'Technology is often seen as a panacea for modern social issues, but it cannot solve everything.', ko: '기술은 종종 현대 사회 문제의 보편적인 해결책으로 여겨지지만, 그것이 만병통치약은 아니다.' },
        { en: 'The new economic policy was presented as a panacea for the country\'s financial crisis.', ko: '새로운 경제 정책은 국가 재정 위기에 대한 만병통치약으로 제시되었다.' },
      ],
    }
  ),
  word('Paragon', '모범', 10, 'noun',
    ['최악', '반면교사', '실패작', '반례', '오답', '악인', '졸작', '낙제점', '범죄자', '결함품'],
    tips({
      etymology: '그리스어 parakone(숫돌)에서 유래하여, 금속의 순도를 확인하기 위해 옆에 대고 문지르는 기준석을 의미하게 되었습니다.',
      visual: '수많은 복제품들 사이에서 홀로 빛나고 있는 가장 완벽한 원형의 다이아몬드를 떠올려 보세요.',
      soundAlike: '패러곤, \'패러(Para, 옆에)\' 두고 \'곤(Go, 가다)\', 즉 항상 곁에 두고 본보기로 삼으며 따라가야 할 대상을 연상하세요.',
      context: '주로 도덕성, 지혜, 미덕 등 긍정적인 가치가 정점에 달한 인물이나 사물을 묘사할 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '완벽한 본보기인 model, epitome과 비슷하며, 결함이나 실패를 뜻하는 imperfection, failure와는 반대됩니다.',
    }),
    {
      definition: 'a person or thing viewed as a model of excellence or a perfect instance of a particular quality',
      synonyms: ['epitome', 'exemplar', 'ideal'],
      antonyms: ['imperfection', 'flaw', 'failure'],
      exampleSentences: [
        { en: 'The retired general was often cited as a paragon of integrity and courage.', ko: '그 은퇴한 장군은 청렴과 용기의 완벽한 귀감으로 자주 인용되었다.' },
        { en: 'In the novel, the protagonist is portrayed as a paragon of virtue who never wavers.', ko: '소설 속에서 주인공은 결코 흔들리지 않는 미덕의 전형으로 묘사된다.' },
      ],
    }
  ),
  word('Pariah', '추방자', 10, 'noun',
    ['인기인', '영웅', '우상', '지도자', '유명인', '귀족', '동료', '친구', '중심인물', '권력자'],
    tips({
      etymology: '인도 카스트 제도에서 북을 치는 하층민을 뜻하는 타밀어 paraiyar에서 유래했습니다.',
      visual: '모두가 즐겁게 대화하는 파티장에서 혼자 구석에 서서 외면당하는 사람을 떠올려 보세요.',
      soundAlike: '발음이 \'파리\'와 비슷하죠? 사람들 사이에서 파리처럼 쫓겨나고 기피되는 존재라고 연상해 보세요.',
      context: '사회적 물의를 일으켜 집단에서 따돌림을 당하거나 완전히 버림받은 사람을 가리킬 때 사용합니다.',
      synonymAntonym: '동의어는 outcast, reject, exile이며 반의어는 idol, favorite, insider입니다.',
    }),
    {
      definition: 'A person who is avoided or rejected by others and has no place in a particular group or society.',
      synonyms: ['outcast', 'reject', 'exile'],
      antonyms: ['idol', 'favorite', 'insider'],
      exampleSentences: [
        { en: 'After the scandal, the once-popular CEO became a social pariah whom nobody wanted to be seen with.', ko: '스캔들 이후, 한때 인기 있었던 그 CEO는 아무도 함께 있고 싶어 하지 않는 사회적 추방자가 되었다.' },
        { en: 'The country was treated as an international pariah due to its repeated violations of human rights.', ko: '그 나라는 반복적인 인권 침해로 인해 국제적인 추방자 취급을 받았다.' },
      ],
    }
  ),
  word('Parsimonious', '인색한', 10, 'adjective',
    ['관대한', '넉넉한', '아낌없는', '풍부한', '후한', '낭비하는', '사치스러운', '자비로운', '방만한', '헤픈'],
    tips({
      etymology: '라틴어 parsimonia(절약)에서 유래했으며, 절약의 정도가 지나쳐 남에게 베풀지 못하는 상태를 의미합니다.',
      visual: '지갑에 자물쇠를 여러 개 채워두고 식당에서 계산할 때만 신발끈을 묶는 사람을 상상해 보세요.',
      soundAlike: '\'파시모니어스\'를 \'팥(Par) 시(si) 머니(money)\'로 기억하세요. 팥알만큼 작은 돈도 아까워하는 모습입니다.',
      context: '단순히 검소한(frugal) 수준을 넘어, 타인에게 베푸는 데 극도로 소극적인 부정적인 뉘앙스로 쓰입니다.',
      synonymAntonym: 'stingy, miserly와 비슷하며, 반대로 베풀기를 좋아하는 성격은 generous, lavish라고 합니다.',
    }),
    {
      definition: 'extremely unwilling to spend money or use resources',
      synonyms: ['stingy', 'miserly', 'frugal'],
      antonyms: ['generous', 'lavish', 'extravagant'],
      exampleSentences: [
        { en: 'The parsimonious company was criticized for its treatment of employees, spending as little as possible on benefits.', ko: '그 회사는 예산 집행에 너무 인색하여 직원 대우에 대해 비판을 받았습니다.' },
        { en: 'Even though he was a billionaire, he was known for his remarkably parsimonious lifestyle.', ko: '그는 억만장자였음에도 불구하고 매우 인색한 생활 방식으로 잘 알려져 있었습니다.' },
      ],
    }
  ),
  word('Pedantic', '현학적인', 10, 'adjective',
    ['대충하는', '느슨한', '실용적인', '유연한', '관대한', '무심한', '털털한', '단순한', '허술한', '직관적인'],
    tips({
      etymology: '이탈리아어 pedante(교사)에서 유래하여, 학생을 가르치듯 사소한 규칙에 집착함을 뜻합니다.',
      visual: '친구의 일상적인 문자 메시지에서 쉼표 하나 틀린 것을 굳이 지적하는 깐깐한 사람을 떠올려 보세요.',
      soundAlike: '피댄틱, \'피(Blood)\'가 \'댄(Burn)\' 듯이 아주 작은 디테일까지 따지는 모습을 연상하세요.',
      context: '지식을 뽐내기 위해 아주 세세하고 사소한 규칙이나 문법에 과하게 집착할 때 씁니다.',
      synonymAntonym: '동의어는 fussy, nitpicking, hairsplitting이며 반의어는 casual, informal, imprecise입니다.',
    }),
    {
      definition: 'excessively concerned with formal rules and minor details',
      synonyms: ['fussy', 'nitpicking', 'hairsplitting'],
      antonyms: ['casual', 'informal', 'imprecise'],
      exampleSentences: [
        { en: 'I am tired of his pedantic attention to minor details that do not matter.', ko: '나는 사소한 세부 사항에 대한 그의 끊임없고 학구적인 집착에 질렸다.' },
        { en: 'The report was so pedantic in its focus on formal rules that it missed the main point.', ko: '그 보고서는 형식적인 규칙에 너무 치중한 나머지 핵심을 놓쳤다.' },
      ],
    }
  ),
  word('Penchant', '기호', 10, 'noun',
    ['혐오', '기피', '무관심', '거부', '반감', '권태', '중립', '냉담', '증오', '불만'],
    tips({
      etymology: '프랑스어 \'pencher(기울다)\'에서 유래하여 마음이 한쪽으로 쏠리는 것을 의미합니다.',
      visual: '자석이 철가루를 끌어당기듯 특정 취향에 몸이 저절로 기울어지는 모습',
      soundAlike: '펜(Pen)을 찬(chant) 사람처럼 글쓰기에 대한 강한 기호를 가진 모습',
      context: '주로 예술적 취향이나 음식 선호도, 특이한 습관을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'inclination과 유사하며, 반대말로는 강한 거부감을 뜻하는 aversion이 있습니다.',
    }),
    {
      definition: 'A strong or habitual liking for something or a tendency to do something.',
      synonyms: ['inclination', 'predilection', 'proclivity'],
      antonyms: ['aversion', 'dislike', 'antipathy'],
      exampleSentences: [
        { en: 'He has a penchant for collecting rare vintage watches.', ko: '그는 희귀한 빈티지 시계를 수집하는 강한 기호가 있다.' },
        { en: 'Her penchant for melodrama often makes small problems seem like disasters.', ko: '멜로드라마를 좋아하는 그녀의 성향은 종종 작은 문제를 재앙처럼 보이게 만든다.' },
      ],
    }
  ),
  word('Penitent', '회개하는', 10, 'adjective',
    ['뻔뻔한', '오만한', '당당한', '무심한', '만족하는', '고집스러운', '냉혹한', '뻔덕스러운', '자만하는', '쾌활한'],
    tips({
      etymology: '라틴어 paenitere(후회하다)에서 유래하여 자신의 잘못을 깊이 뉘우치는 상태를 뜻합니다.',
      visual: '고해성사소 안에서 고개를 숙이고 자신의 잘못을 고백하는 사람의 모습',
      soundAlike: '팬이 턴트(Penitent) - 팬이 등을 돌릴(turn) 정도로 큰 잘못을 저질러 후회하는 상황',
      context: '종교적 참회나 법정에서의 반성, 개인적인 사과 상황에서 주로 사용됩니다.',
      synonymAntonym: 'repentant와 의미가 통하며, 반대말로는 뉘우침이 없는 impenitent가 있습니다.',
    }),
    {
      definition: 'Feeling or showing sorrow and regret for having done wrong.',
      synonyms: ['repentant', 'contrite', 'remorseful'],
      antonyms: ['unrepentant', 'impenitent', 'unapologetic'],
      exampleSentences: [
        { en: 'The thief stood before the judge with a penitent expression.', ko: '도둑은 참회하는 표정으로 판사 앞에 섰다.' },
        { en: 'She wrote a penitent letter to her parents explaining her mistakes.', ko: '그녀는 자신의 실수를 설명하며 부모님께 회개하는 마음을 담은 편지를 썼다.' },
      ],
    }
  ),
];
