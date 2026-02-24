import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch18: VocabItem[] = [
  word('Corpulent', '비만한', 9, 'adjective',
    ['날씬한', '수척한', '마른', '얇은', '호리호리한', '가냘픈', '빈약한', '여윈', '슬림한', '앙상한'],
    tips({
      etymology: '라틴어 corpus(몸)에서 유래하여 몸집이 아주 크고 살집이 많다는 의미를 담고 있습니다.',
      visual: '단추가 겨우 잠길 정도로 배가 불룩하게 나온 풍채 좋은 신사를 떠올려 보세요.',
      soundAlike: '코(Cor)가 풀(pul)썩일 정도로 숨이 찰 만큼 살이 찐 상태라고 연상해 보세요.',
      context: '단순히 체중이 많이 나가는 상태를 넘어 외관상으로 덩치가 크고 비대한 모습을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '비슷한 말로는 obese, portly, stout가 있으며, 반대말로는 slender, thin, skinny가 있습니다.',
    }),
    {
      definition: 'having a large, bulky body; excessively fat or overweight',
      synonyms: ['obese', 'portly', 'stout'],
      antonyms: ['slender', 'thin', 'skinny'],
      exampleSentences: [
        { en: 'The corpulent man struggled to fit in the narrow airplane seat.', ko: '비만한 그 남자는 좁은 비행기 좌석에 앉느라 애를 먹었다.' },
        { en: 'A corpulent figure appeared in the doorway, blocking most of the light.', ko: '비만한 인물이 문간에 나타나 빛의 대부분을 가렸다.' },
      ],
    }
  ),
  word('Cosset', '응석받이하다', 9, 'verb',
    ['무시하다', '방치하다', '학대하다', '냉대하다', '경시하다', '홀대하다', '질책하다', '외면하다', '꾸짖다', '배척하다'],
    tips({
      etymology: '집에서 애완용으로 기르는 어린 양을 뜻하는 옛 단어에서 유래했습니다.',
      visual: '아기 양을 따뜻한 담요로 감싸고 우유를 먹이며 애지중지하는 모습을 상상하세요.',
      soundAlike: '코(Co)를 셋(set)이나 닦아줄 정도로 과하게 챙겨주는 모습으로 기억하세요.',
      context: '아이를 과보호하거나 누군가를 지나치게 정성껏 돌볼 때 사용합니다.',
      synonymAntonym: 'pamper, coddle과 같은 유의어는 과잉 보호를, neglect, mistreat 같은 반의어는 방치를 의미합니다.',
    }),
    {
      definition: 'to care for and protect in an overindulgent or overprotective way',
      synonyms: ['pamper', 'coddle', 'indulge'],
      antonyms: ['neglect', 'ignore', 'mistreat'],
      exampleSentences: [
        { en: 'The grandmother cosseted her grandchildren with endless treats and toys.', ko: '할머니는 끊임없는 간식과 장난감으로 손주들을 응석받이로 키우셨다.' },
        { en: 'They cosset their only child with every luxury imaginable.', ko: '그들은 외동아이를 상상 가능한 모든 사치로 애지중지한다.' },
      ],
    }
  ),
  word('Cosmopolitan', '세계적인', 9, 'adjective',
    ['지방적인', '편협한', '제한된', '배타적인', '좁은', '촌스러운', '고립된', '폐쇄적인', '국지적인', '단조로운'],
    tips({
      etymology: '그리스어 \'kosmos(세계)\'와 \'polites(시민)\'가 결합되어 \'세계 시민의\'라는 의미에서 유래되었습니다.',
      visual: '뉴욕이나 런던의 번화가에서 다양한 인종과 문화가 한데 어우러진 활기찬 풍경을 상상해 보세요.',
      soundAlike: '우주를 뜻하는 \'코스모\'와 도시인을 뜻하는 \'폴리탄\'을 합쳐 \'우주적 규모의 도시인\'으로 기억하세요.',
      context: '특정 지역에 국한되지 않고 전 세계의 문화와 가치를 포용하는 세련된 태도나 환경을 묘사할 때 씁니다.',
      synonymAntonym: '전 세계를 아우르는 international과 반대되는 개념은 좁은 지역에 머무는 provincial입니다.',
    }),
    {
      definition: 'having a wide international experience and being composed of people from many different parts of the world',
      synonyms: ['international', 'worldly', 'sophisticated'],
      antonyms: ['provincial', 'parochial', 'insular'],
      exampleSentences: [
        { en: 'London is a truly cosmopolitan city where hundreds of languages are spoken.', ko: '런던은 수백 개의 언어가 사용되는 진정한 세계적인 도시이다.' },
        { en: 'She has a cosmopolitan outlook on life thanks to her extensive travels across multiple continents.', ko: '그녀는 여러 대륙을 가로지르는 광범위한 여행 덕분에 삶에 대한 세계적인 시각을 가지고 있다.' },
      ],
    }
  ),
  word('Counterfeit', '위조품', 9, 'noun',
    ['진품', '정통', '원본', '실물', '진정', '진실', '실제', '정품', '사실', '진짜'],
    tips({
      etymology: 'Counter(반대/대응)와 feit(만들다)가 합쳐져 \'정식 규격에 반하여 몰래 만들다\'라는 의미에서 유래했습니다.',
      visual: '현미경으로 지폐의 미세한 인쇄 상태를 대조하며 가짜를 찾아내는 감별사의 모습을 떠올려 보세요.',
      soundAlike: '카운터(Counter)에서 페이트(Fate, 운명)가 결정되는 가짜 돈을 내미는 상황을 상상해 보세요.',
      context: '주로 화폐, 명품, 예술품 등 경제적 가치가 높은 물건의 복제품을 지칭할 때 사용됩니다.',
      synonymAntonym: 'Fake나 Forgery는 유사한 의미이며, Genuine이나 Authentic은 그 반대인 진짜를 의미합니다.',
    }),
    {
      definition: 'A fraudulent imitation of something else, typically money or designer goods, intended to deceive or be passed off as genuine.',
      synonyms: ['fake', 'forgery', 'imitation'],
      antonyms: ['original', 'authentic', 'masterpiece'],
      exampleSentences: [
        { en: 'The police seized a large amount of counterfeit currency during the raid.', ko: '경찰은 급습 중에 대량의 위조 지폐를 압수했다.' },
        { en: 'That designer bag turned out to be a clever counterfeit.', ko: '그 명품 가방은 교묘한 위조품으로 판명되었다.' },
      ],
    }
  ),
  word('Craven', '비겁한', 9, 'adjective',
    ['용감한', '대담한', '담대한', '용맹한', '무모한', '씩씩한', '강인한', '당당한', '겁없는', '투철한'],
    tips({
      etymology: '패배하여 굴복했다는 의미의 고대 프랑스어 \'cravant\'에서 유래하여, 싸움을 포기하고 항복하는 모습을 나타냅니다.',
      visual: '무서운 상황이 닥치자 동료를 버리고 구석으로 숨어버리는 겁쟁이의 뒷모습을 떠올리세요.',
      soundAlike: '크레이븐(Craven)은 까마귀(Raven)가 작은 소리에도 깜짝 놀라 날아가는 모습과 발음이 비슷합니다.',
      context: '단순히 무서워하는 심리 상태를 넘어, 도덕적으로 비난받을 만한 비겁한 행동이나 태도를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '겁이 많은 cowardly와 비슷하지만 더 격식 있는 표현이며, 용맹한 valorous와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'contemptibly lacking in courage; showing a shameful lack of bravery when facing danger or difficulty',
      synonyms: ['cowardly', 'timorous', 'pusillanimous'],
      antonyms: ['brave', 'courageous', 'valorous'],
      exampleSentences: [
        { en: 'His craven retreat in the face of danger angered his fellow soldiers.', ko: '위험 앞에서 그의 비겁한 후퇴는 동료 병사들을 분노케 했다.' },
        { en: 'It was a craven act to refuse to stand up for his own principles.', ko: '자신의 원칙을 지키지 못한 것은 비겁한 행위였다.' },
      ],
    }
  ),
  word('Credulous', '쉽게 믿는', 9, 'adjective',
    ['의심 많은', '경계하는', '냉소적인', '불신하는', '회의적인', '깐깐한', '치밀한', '영악한', '신중한', '까다로운'],
    tips({
      etymology: '라틴어 credere(믿다)에서 유래했습니다. 신용카드를 뜻하는 credit과 같은 뿌리를 두고 있어 \'믿음이 과하다\'는 의미를 담고 있습니다.',
      visual: '사기꾼의 터무니없는 이야기를 들으면서도 의심 없이 고개를 끄덕이며 지갑을 여는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'그래 줄게(Cred-ulous)\'라고 말하며 남의 부탁이나 말을 거절하지 못하고 다 들어주는 순진한 사람을 떠올려 보세요.',
      context: '단순히 성격이 좋은 것이 아니라, 비판적 사고가 부족하여 속기 쉬운 부정적인 뉘앙스로 주로 사용됩니다.',
      synonymAntonym: '잘 속는다는 뜻의 gullible과 유사하며, 매사에 의심이 많은 skeptical과는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'tending to trust or accept what others say as true without enough evidence or critical thought',
      synonyms: ['gullible', 'naive', 'unsuspecting'],
      antonyms: ['skeptical', 'cynical', 'suspicious'],
      exampleSentences: [
        { en: 'The salesperson took advantage of the credulous elderly couple by selling them overpriced products.', ko: '판매원은 너무 쉽게 믿는 노부부에게 터무니없이 비싼 제품을 팔아 이득을 취했다.' },
        { en: 'Only a credulous person would believe that a stranger is giving away free money online.', ko: '낯선 사람이 온라인에서 공짜 돈을 나눠준다는 말을 믿는 사람은 너무 순진한 사람뿐일 것이다.' },
      ],
    }
  ),
  word('Curmudgeon', '심술궂은 사람', 9, 'noun',
    ['온순한 사람', '상냥한 사람', '관대한 사람', '친절한 이', '낙천주의자', '호인', '신사', '천사', '평화주의자', '사교가'],
    tips({
      etymology: '18세기부터 사용된 단어로, 정확한 어원은 불분명하지만 성격이 고약하고 인색한 노인을 가리키는 말로 굳어졌습니다.',
      visual: '마당에 공이 들어오면 소리를 지르며 돌려주지 않는 괴팍하고 고집 센 할아버지의 모습을 상상해 보세요.',
      soundAlike: '커(Cur)다란 먼지(mudgeon) 덩어리처럼 눈에 거슬리고 까칠한 성격을 가진 사람으로 기억하면 쉽습니다.',
      context: '주로 나이가 지긋하면서 매사에 불평불만이 많고 타인에게 냉소적인 태도를 보이는 사람을 묘사할 때 씁니다.',
      synonymAntonym: '성격이 까칠한 grouch와 비슷하며, 반대로 마음씨 따뜻한 사람을 뜻하는 sweetheart와는 대조적입니다.',
    }),
    {
      definition: 'A person who is easily angered, often cynical, and habitually complains about everything, typically referring to an older individual.',
      synonyms: ['grouch', 'misanthrope', 'crank'],
      antonyms: ['sweetheart', 'altruist', 'optimist'],
      exampleSentences: [
        { en: 'The old curmudgeon next door complained whenever we played music.', ko: '이웃집의 심술궂은 노인은 우리가 음악을 틀 때마다 불평을 했다.' },
        { en: 'He plays the role of a curmudgeon on screen, but he is very kind in person.', ko: '그는 영화에서 심술궂은 사람 역을 맡지만, 실제로는 매우 친절하다.' },
      ],
    }
  ),
  word('Cursory', '대충의', 9, 'adjective',
    ['면밀한', '정밀한', '철저한', '꼼꼼한', '세밀한', '심층적인', '상세한', '완벽한', '주의 깊은', '엄격한'],
    tips({
      etymology: '라틴어 currere(달리다)에서 유래하여 \'달리듯 빠르게 지나가는\' 느낌을 줍니다.',
      visual: '시험 직전 교과서를 1초에 한 페이지씩 휙휙 넘기며 훑어보는 모습을 상상하세요.',
      soundAlike: '마우스 커서(Cursor)가 화면을 빠르게 슥 지나가는 것처럼 대충 보는 것입니다.',
      context: '자세히 살피지 않고 겉핥기식으로 빠르게 처리하거나 검토할 때 사용합니다.',
      synonymAntonym: '동의어는 superficial, hasty, perfunctory이며 반의어는 thorough, meticulous, detailed입니다.',
    }),
    {
      definition: 'done quickly with little attention to detail or completeness',
      synonyms: ['superficial', 'hasty', 'perfunctory'],
      antonyms: ['thorough', 'meticulous', 'detailed'],
      exampleSentences: [
        { en: 'He gave the morning newspaper only a cursory glance before leaving for work.', ko: '그는 출근하기 전 아침 신문을 대충 훑어보기만 했다.' },
        { en: 'A cursory inspection of the car revealed no obvious damage from the accident.', ko: '차를 대충 검사했을 때는 사고로 인한 뚜렷한 손상이 발견되지 않았다.' },
      ],
    }
  ),
  word('Dearth', '부족', 9, 'noun',
    ['풍부', '과다', '잉여', '충분', '풍성', '범람', '포화', '다량', '넉넉', '충족'],
    tips({
      etymology: '중세 영어 derthe(비쌈, 귀함)에서 유래하여 물건이 귀하고 모자란 상태를 뜻하게 되었습니다.',
      visual: '가게 진열대가 텅 비어 있고 \'품절\' 표지판만 덩그러니 놓여 있는 모습입니다.',
      soundAlike: '단어 안에 \'earth\'가 있지만, 땅(earth)에 아무것도 남지 않은 \'뒤(de-)\'의 상태로 연상하세요.',
      context: '주로 자원, 인력, 증거 등이 턱없이 부족할 때 격식체로 사용합니다.',
      synonymAntonym: 'scarcity, shortage, lack이 유의어이며, abundance, surplus, plenty가 반의어입니다.',
    }),
    {
      definition: 'a situation in which there is not enough of something or the amount available is too small',
      synonyms: ['scarcity', 'shortage', 'paucity'],
      antonyms: ['abundance', 'surplus', 'plethora'],
      exampleSentences: [
        { en: 'There was a dearth of qualified candidates for the position.', ko: '그 직책에 적합한 자격을 갖춘 후보자가 부족했다.' },
        { en: 'The region suffers from a dearth of fresh water during the summer.', ko: '그 지역은 여름 동안 담수 부족으로 고통받는다.' },
      ],
    }
  ),
  word('Debacle', '대참사', 9, 'noun',
    ['성공', '승리', '대성', '성취', '위업', '영광', '번영', '완성', '결실', '극복'],
    tips({
      etymology: '프랑스어에서 얼음이 깨져서 강물이 갑자기 터져 나오는 붕괴 현상을 뜻하던 말에서 유래했습니다.',
      visual: '공들여 쌓은 도미노가 한순간에 와르르 무너져 내리는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'뒤바뀌어\' 버린 상황, 즉 모든 것이 엉망진창이 된 대참사로 기억하세요.',
      context: '계획했던 일이 완전히 망가지거나 수치스러운 실패로 끝났을 때 씁니다.',
      synonymAntonym: 'fiasco, catastrophe, disaster가 유의어이며, triumph, success, victory가 반의어입니다.',
    }),
    {
      definition: 'a sudden and complete failure or a humiliating collapse of a situation',
      synonyms: ['fiasco', 'catastrophe', 'disaster'],
      antonyms: ['triumph', 'success', 'victory'],
      exampleSentences: [
        { en: 'The election was a complete debacle for the ruling party.', ko: '그 선거는 집권 여당에게 완전한 대참사였다.' },
        { en: 'The product launch turned into a financial debacle.', ko: '제품 출시가 재정적인 대참사로 변했다.' },
      ],
    }
  ),
  word('Decorum', '예의', 9, 'noun',
    ['무례', '실례', '천박', '무식', '방자', '오만', '결례', '난폭', '소란', '방종'],
    tips({
      etymology: '라틴어 decor(적합한, 우아한)에서 유래하여 상황에 맞는 올바른 행동을 의미합니다.',
      visual: '격식 있는 파티에서 품위 있게 대화하며 예의를 지키는 사람들의 모습입니다.',
      soundAlike: '실내 장식을 뜻하는 \'decor\'와 어원이 같습니다. 겉모습뿐 아니라 행동도 예쁘게 꾸미는 예의입니다.',
      context: '법정, 장례식, 공식 회의 등 엄격한 예절이 요구되는 장소에서 강조됩니다.',
      synonymAntonym: 'propriety, etiquette, dignity가 유의어이며, indecency, impropriety, rudeness가 반의어입니다.',
    }),
    {
      definition: 'behavior that conforms to accepted standards of conduct and good taste',
      synonyms: ['propriety', 'etiquette', 'protocol'],
      antonyms: ['indecency', 'impropriety', 'rudeness'],
      exampleSentences: [
        { en: 'Please maintain proper decorum in the courtroom at all times.', ko: '법정 내에서는 항상 예의를 지켜 주시기 바랍니다.' },
        { en: 'The ceremony was conducted with great decorum and respect.', ko: '그 의식은 적절한 예의와 존중 속에 진행되었다.' },
      ],
    }
  ),
  word('Deleterious', '유해한', 9, 'adjective',
    ['유익한', '건강한', '치유적인', '이로운', '도움되는', '무해한', '안전한', '긍정적인', '양호한', '건전한'],
    tips({
      etymology: '그리스어 \'deleter(파괴자)\'에서 유래하여 무언가를 서서히 파괴하거나 해치는 성질을 뜻합니다.',
      visual: '컴퓨터의 \'Delete\' 키를 누르듯 건강이나 환경을 지워버리는 독극물 병을 상상해 보세요.',
      soundAlike: '중요한 데이터를 \'Delete(삭제)\' 하듯이 신체나 환경에 해를 끼치는 상황을 연결하세요.',
      context: '주로 의학적 부작용, 환경 오염, 경제적 타격 등 심각하고 부정적인 영향을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'harmful, detrimental과 비슷하며, 반대로 이로움을 주는 beneficial, salutary와 대조됩니다.',
    }),
    {
      definition: 'causing harm or damage, often in a subtle or unexpected way',
      synonyms: ['harmful', 'detrimental', 'injurious'],
      antonyms: ['beneficial', 'salutary', 'harmless'],
      exampleSentences: [
        { en: 'Smoking has deleterious effects on almost every organ in the body.', ko: '흡연은 신체의 거의 모든 기관에 유해한 영향을 미친다.' },
        { en: 'The chemical spill had deleterious consequences for the local wildlife.', ko: '화학 물질 유출은 지역 야생 동물에게 유해한 결과를 초래했다.' },
      ],
    }
  ),
  word('Demagogue', '선동가', 9, 'noun',
    ['중재자', '화해자', '지도자', '성인', '현자', '조정자', '평화주의자', '대변인', '위인', '철학자'],
    tips({
      etymology: '그리스어 demos(민중)와 agogos(이끄는 자)가 결합된 단어로, 본래는 민중의 지도자를 뜻했으나 현대에는 민중을 잘못된 길로 이끄는 자를 의미합니다.',
      visual: '단상 위에서 격앙된 표정으로 군중의 감정과 분노를 자극하며 소리치는 정치인의 모습을 상상해 보세요.',
      soundAlike: '민중(demo)의 감정을 자극하여 거칠게(gogue) 선동하는 사람으로 연상하면 기억하기 쉽습니다.',
      context: '이성적인 논리나 정책보다는 대중의 편견, 공포, 욕망을 이용하는 부정적인 정치인을 비판할 때 주로 사용됩니다.',
      synonymAntonym: 'rabble-rouser, agitator와 같은 단어들이 유의어이며, 합리적인 정치가를 뜻하는 statesman이나 중재자인 mediator가 반의어입니다.',
    }),
    {
      definition: 'A political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument.',
      synonyms: ['rabble-rouser', 'agitator', 'firebrand'],
      antonyms: ['statesman', 'mediator', 'peacemaker'],
      exampleSentences: [
        { en: 'The demagogue rallied the crowd by blaming minorities for the economic crisis.', ko: '그 선동가는 경제 위기의 책임을 소수자에게 돌리며 군중을 결집시켰다.' },
        { en: 'He was labeled a demagogue for his inflammatory speeches that incited violence.', ko: '그는 폭력을 조장하는 선동적인 연설 때문에 선동가라는 낙인이 찍혔다.' },
      ],
    }
  ),
  word('Demure', '수줍은', 9, 'adjective',
    ['대담한', '뻔뻔한', '노골적인', '적극적인', '건방진', '활발한', '외향적인', '거침없는', '도발적인', '용감한'],
    tips({
      etymology: '프랑스어 mûr(성숙한)에서 유래하여, 성숙하고 조신하게 행동하는 태도를 의미하게 되었습니다.',
      visual: '파티의 중심에서 춤을 추기보다 구석에서 조용히 미소 지으며 시선을 아래로 향하는 모습입니다.',
      soundAlike: '발음이 \'뒤(de-)에 묵(mure)직하게\' 가만히 있는 얌전하고 차분한 모습으로 연상하세요.',
      context: '주로 사람의 태도나 복장이 겸손하고 조신하며, 지나치게 화려하지 않고 차분할 때 사용합니다.',
      synonymAntonym: 'modest, shy와 같은 유의어는 조용한 느낌을 주며, bold, brazen은 정반대의 대담하고 뻔뻔한 느낌을 줍니다.',
    }),
    {
      definition: 'behaving in a quiet, modest, and shy way, often in a manner that is intended to be decorative or proper',
      synonyms: ['modest', 'reserved', 'shy'],
      antonyms: ['bold', 'brazen', 'flamboyant'],
      exampleSentences: [
        { en: 'She gave a demure smile and looked down at her hands during the interview.', ko: '그녀는 인터뷰 동안 수줍게 미소 지으며 자신의 손을 내려다보았다.' },
        { en: 'The actress chose a demure dress that covered her shoulders for the formal event.', ko: '그 여배우는 공식 행사를 위해 어깨를 가리는 조신한 드레스를 선택했다.' },
      ],
    }
  ),
  word('Denigrate', '비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '찬미하다', '추켜세우다', '숭배하다', '존중하다', '인정하다', '장려하다', '지지하다'],
    tips({
      etymology: '라틴어 de-(완전히)와 nigr-(검은)이 합쳐져 명성에 검은 칠을 하다, 즉 더럽히다는 뜻이 되었습니다.',
      visual: '깨끗한 도화지 같은 누군가의 평판에 검은 페인트를 뿌려 엉망으로 만드는 장면을 상상하세요.',
      soundAlike: '상대방의 가치를 \'니그(nigr, 검게)\' 만들어 \'내리깎다\'라고 기억하면 쉽습니다.',
      context: '단순한 비판을 넘어 타인의 업적이나 가치를 고의적으로 폄하하거나 헐뜯을 때 주로 사용합니다.',
      synonymAntonym: 'disparage, belittle, vilify가 유의어이며, praise, extol, applaud가 반의어입니다.',
    }),
    {
      definition: 'to attack the reputation of or to speak slightingly of someone or something in an unfair way',
      synonyms: ['disparage', 'belittle', 'vilify'],
      antonyms: ['praise', 'extol', 'applaud'],
      exampleSentences: [
        { en: 'It is wrong to denigrate the hard work of others.', ko: '다른 사람들의 노고를 비난하는 것은 잘못된 일이다.' },
        { en: 'The campaign was designed to denigrate his opponent\'s character.', ko: '그 캠페인은 상대 후보의 인격을 폄하하기 위해 계획되었다.' },
      ],
    }
  ),
  word('Depravity', '타락', 9, 'noun',
    ['덕성', '순결', '정의', '선함', '도의', '청렴', '고결', '정직', '도덕', '윤리'],
    tips({
      etymology: '라틴어 de-(완전히)와 pravus(삐뚤어진)가 합쳐져 도덕적으로 완전히 뒤틀린 상태를 뜻합니다.',
      visual: '똑바른 길이 아니라 어둡고 굽이진 늪지대로 빠져드는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '가치가 \'뒤(de-)로 팍(pra-) 떨어져(vity)\' 버린 타락한 상태로 연상하면 기억하기 쉽습니다.',
      context: '단순한 실수가 아니라 범죄나 부패 등 도덕적으로 매우 사악하고 질이 나쁜 행위를 묘사할 때 주로 사용합니다.',
      synonymAntonym: '부패를 뜻하는 corruption과 사악함을 뜻하는 wickedness가 유의어이며, 고결함을 뜻하는 virtue와 integrity가 반의어입니다.',
    }),
    {
      definition: 'A state of extreme moral corruption or the quality of being very wicked.',
      synonyms: ['corruption', 'wickedness', 'vice'],
      antonyms: ['virtue', 'morality', 'integrity'],
      exampleSentences: [
        { en: 'The depravity of the serial killer shocked the entire nation.', ko: '그 연쇄 살인범의 타락함은 온 나라를 충격에 빠뜨렸다.' },
        { en: 'The novel explores the depths of human depravity during the war.', ko: '그 소설은 전쟁 중 인간 타락의 심연을 탐구한다.' },
      ],
    }
  ),
  word('Deride', '비웃다', 9, 'verb',
    ['존중하다', '칭찬하다', '존경하다', '찬양하다', '인정하다', '숭배하다', '추대하다', '격려하다', '지지하다', '환호하다'],
    tips({
      etymology: '라틴어 de(아래로)와 ridere(웃다)가 결합된 단어로, 상대를 낮게 보며 비웃는다는 뜻에서 유래했습니다.',
      visual: '발표자가 실수했을 때 청중석 뒷줄에서 입을 가리고 낄낄거리며 비웃는 사람들을 상상해 보세요.',
      soundAlike: '발음이 \'뒤라이드\'와 비슷하므로, 남의 \'뒤\'에서 비웃으며 \'라이드(놀림의 흐름)\'를 탄다고 기억하세요.',
      context: '단순한 농담이 아니라 상대방의 가치를 깎아내리거나 무시하려는 의도가 담긴 조롱의 상황에서 쓰입니다.',
      synonymAntonym: 'mock이나 ridicule과 비슷하게 쓰이며, 반대로 상대를 높여주는 praise나 admire와는 대조적입니다.',
    }),
    {
      definition: 'to express contempt for someone or something by making fun of them in a cruel or mocking way',
      synonyms: ['ridicule', 'mock', 'scoff'],
      antonyms: ['respect', 'praise', 'admire'],
      exampleSentences: [
        { en: 'They derided the proposal as foolish and impractical.', ko: '그들은 그 제안이 어리석고 비현실적이라며 비웃었다.' },
        { en: 'Critics derided the film as a pretentious waste of time.', ko: '비평가들은 그 영화를 허세 가득한 시간 낭비라며 조롱했다.' },
      ],
    }
  ),
  word('Despondent', '낙담한', 9, 'adjective',
    ['희망찬', '낙천적인', '행복한', '기운찬', '낙관적인', '자신만만한', '활기찬', '열정적인', '기쁜', '고무된'],
    tips({
      etymology: '라틴어 de(멀리)와 spondere(약속하다)가 결합되어, 지켜질 약속이나 희망이 멀리 사라져 버린 상태를 의미합니다.',
      visual: '중요한 시험에 떨어진 후 어깨를 축 늘어뜨리고 비를 맞으며 혼자 걸어가는 뒷모습을 상상해 보세요.',
      soundAlike: '발음이 \'디스폰던트\'와 유사하므로, \'뒤(des)에서 폰(pond)만 보며\' 사람들과 어울리지 못하고 낙담한 모습을 연상하세요.',
      context: '단순히 슬픈 상태를 넘어, 거듭된 실패나 큰 상실로 인해 의욕과 용기를 완전히 잃었을 때 주로 사용합니다.',
      synonymAntonym: 'dejected, despairing과 함께 쓰여 깊은 절망을 나타내며, 반대로 희망이 가득한 상태는 hopeful이나 optimistic을 씁니다.',
    }),
    {
      definition: 'feeling or showing extreme discouragement, dejection, or depression due to a loss of hope',
      synonyms: ['dejected', 'despairing', 'disheartened'],
      antonyms: ['hopeful', 'cheerful', 'optimistic'],
      exampleSentences: [
        { en: 'She grew increasingly despondent when her search for a job yielded no results.', ko: '그녀는 구직 활동이 아무런 성과가 없자 점점 더 낙담하게 되었다.' },
        { en: 'The team was despondent after losing the championship in the final minute.', ko: '마지막 1분을 남기고 결승전에서 패배하자 팀원들은 깊은 절망에 빠졌다.' },
      ],
    }
  ),
  word('Despot', '독재자', 9, 'noun',
    ['민주주의자', '협력자', '공정한 통치자', '대의원', '선출된 대표', '봉사자', '조력자', '해방자', '평화주의자', '중재자'],
    tips({
      etymology: '그리스어 \'despotes\'에서 유래했으며, 이는 \'가정의 주인\' 또는 \'절대적 지배자\'를 뜻합니다.',
      visual: '어두운 방 안에서 혼자 거대한 왕좌에 앉아 모든 사람의 생사여탈권을 쥐고 있는 냉혹한 통치자를 떠올려 보세요.',
      soundAlike: '\'데스(Death)가 일어나는 팟(Spot)\'이라고 연상하여, 사람들을 죽음으로 몰아넣는 잔인한 독재자로 기억하세요.',
      context: '역사적 인물이나 현대의 억압적인 지도자를 묘사할 때 주로 쓰이며, 부정적인 뉘앙스가 매우 강합니다.',
      synonymAntonym: 'tyrant와 autocrat은 무소불위의 권력을 뜻하며, 반대로 democrat은 국민의 뜻을 따르는 지도자를 뜻합니다.',
    }),
    {
      definition: 'A ruler or leader who possesses unlimited authority and often uses it in a harsh or unfair manner.',
      synonyms: ['tyrant', 'autocrat', 'dictator'],
      antonyms: ['democrat', 'liberator', 'servant'],
      exampleSentences: [
        { en: 'The country suffered greatly under the rule of the cruel despot.', ko: '그 나라는 잔인한 독재자의 통치 아래 큰 고통을 겪었다.' },
        { en: 'Citizens eventually rose up to overthrow the oppressive despot.', ko: '시민들은 마침내 억압적인 독재자를 타도하기 위해 일어났다.' },
      ],
    }
  ),
  word('Diatribe', '비난 연설', 9, 'noun',
    ['칭찬', '찬사', '축사', '찬미', '옹호', '격려', '추천', '동의', '승인', '환대'],
    tips({
      etymology: '그리스어 \'diatribē\'에서 유래되었으며, 원래는 \'시간을 보내는 담론\'이라는 뜻이었으나 시간이 흐르며 \'공격적인 긴 연설\'이라는 의미로 변했습니다.',
      visual: '정치인이 단상 위에서 삿대질을 하며 상대방을 향해 거친 말을 쏟아내는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'다이어트-라이브\'와 유사하므로, 누군가 \'다이어트\'를 안 한다고 \'라이브\' 방송에서 심하게 비난하는 상황을 연상하면 쉽습니다.',
      context: '주로 정치적 비평, 신문의 날카로운 사설, 혹은 누군가에게 화가 나서 퍼붓는 장황한 비난의 상황에서 사용됩니다.',
      synonymAntonym: 'tirade나 harangue와 같이 길고 격렬한 비판을 뜻하는 단어들과 함께 외우고, 반대말인 eulogy(찬사)와 대조해 보세요.',
    }),
    {
      definition: 'a long, angry speech or piece of writing that strongly criticizes someone or something',
      synonyms: ['tirade', 'harangue', 'denunciation'],
      antonyms: ['eulogy', 'praise', 'tribute'],
      exampleSentences: [
        { en: 'The editorial was a bitter diatribe against the government\'s new economic policy.', ko: '그 사설은 정부의 새로운 경제 정책에 대한 신랄한 비난 연설이었다.' },
        { en: 'He launched into a long diatribe about the lack of discipline in modern schools.', ko: '그는 현대 학교의 규율 부족에 대해 긴 비난 섞인 연설을 시작했다.' },
      ],
    }
  ),
  word('Didactic', '교훈적인', 9, 'adjective',
    ['오락적인', '장난스러운', '가벼운', '무의미한', '혼란스러운', '모호한', '비교육적인', '실용적인', '직관적인', '감성적인'],
    tips({
      etymology: '그리스어 \'didaskein(가르치다)\'에서 유래하여 교육적인 의도를 가진 것을 의미합니다.',
      visual: '칠판 앞에서 안경을 고쳐 쓰며 도덕적인 가르침을 전하는 엄격한 선생님의 모습을 떠올려 보세요.',
      soundAlike: '\'다이닥틱\'을 \'다 닦아(가르쳐) 주겠다\'는 열정적인 교육자의 태도로 연상하면 기억하기 쉽습니다.',
      context: '단순히 지식을 전달하는 것을 넘어 도덕적 가르침을 주려 할 때 쓰이며, 때로는 지나치게 설교조라는 부정적 의미로도 쓰입니다.',
      synonymAntonym: 'instructive와 유사하지만 더 훈계적인 느낌이 강하며, 즐거움만을 추구하는 entertaining과는 반대되는 성격입니다.',
    }),
    {
      definition: 'designed or intended to teach people something, especially a moral lesson, in a way that is sometimes fixed or unwanted',
      synonyms: ['instructive', 'educational', 'preachy'],
      antonyms: ['entertaining', 'uninstructive', 'frivolous'],
      exampleSentences: [
        { en: 'The fable has a clearly didactic purpose, aiming to provide moral guidance to children.', ko: '그 우화는 아이들에게 도덕적 지침을 제공하려는 명확하고 교훈적인 목적을 가지고 있다.' },
        { en: 'Her tone was so didactic that the lecture began to feel like a sermon.', ko: '그녀의 어조가 너무 교훈적이라서 강의가 마치 설교처럼 느껴지기 시작했다.' },
      ],
    }
  ),
  word('Dilatory', '지연하는', 9, 'adjective',
    ['즉각적인', '신속한', '재빠른', '즉시의', '빠른', '민첩한', '부지런한', '성급한', '조급한', '기민한'],
    tips({
      etymology: '라틴어 dilatus(미루다)에서 유래하여 행동이 느리거나 시간을 끄는 성질을 의미합니다.',
      visual: '시계 바늘을 억지로 뒤로 돌리며 마감 시간을 늦추려 애쓰는 게으른 사람을 상상해 보세요.',
      soundAlike: '단어의 앞부분 \'Dila-\'를 \'뒤로\'라고 연상하여 \'뒤로 미루는 성격\'으로 기억하면 쉽습니다.',
      context: '주로 법적 절차를 고의로 늦추거나, 업무 처리가 게을러서 지연될 때 자주 사용되는 형용사입니다.',
      synonymAntonym: '느릿느릿한 sluggish와 동의어이며, 즉각적인 반응을 뜻하는 prompt와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Tending to be slow in action or designed to gain more time by postponing a decision.',
      synonyms: ['sluggish', 'procrastinating', 'tardy'],
      antonyms: ['prompt', 'quick', 'expeditious'],
      exampleSentences: [
        { en: 'The government was criticized for its dilatory approach to the environmental crisis.', ko: '정부는 환경 위기에 대한 지연된 접근 방식 때문에 비판을 받았습니다.' },
        { en: 'He used dilatory tactics to keep the matter from coming to a vote.', ko: '그는 안건이 표결에 부쳐지는 것을 막기 위해 지연 전술을 사용했습니다.' },
      ],
    }
  ),
  word('Dilettante', '아마추어', 9, 'noun',
    ['전문가', '숙련가', '달인', '프로', '권위자', '장인', '기술자', '학자', '전문직', '고수'],
    tips({
      etymology: '이탈리아어 dilettare(즐기다)에서 유래하여 전문성 없이 즐기기만 하는 사람을 뜻합니다.',
      visual: '이것저것 예술 도구는 다 샀지만 제대로 할 줄 아는 건 없는 취미가를 상상하세요.',
      soundAlike: '딜레탠트(Dilettante)는 \'들레들레(어슬렁어슬렁) 구경만 하는 사람\'으로 연상하세요.',
      context: '예술이나 학문에 깊이 몰입하지 않고 겉핥기식으로만 관심을 가지는 사람을 묘사합니다.',
      synonymAntonym: '동의어로는 amateur, dabbler가 있고, 반의어로는 expert, professional, master가 있습니다.',
    }),
    {
      definition: 'A person who cultivates an area of interest, such as the arts, without real commitment or knowledge.',
      synonyms: ['amateur', 'dabbler', 'layman'],
      antonyms: ['expert', 'professional', 'master'],
      exampleSentences: [
        { en: 'He was a dilettante in music, not a serious musician.', ko: '그는 음악 아마추어였지, 진지한 음악가가 아니었다.' },
        { en: 'Wealthy dilettantes collected art for status.', ko: '부유한 아마추어들이 지위를 위해 예술을 수집했다.' },
      ],
    }
  ),
  word('Dirge', '장송곡', 9, 'noun',
    ['축가', '찬가', '행진곡', '환호곡', '축제가', '댄스곡', '응원가', '교향곡', '발라드', '팝송'],
    tips({
      etymology: '라틴어 장례 예배의 첫 단어인 \'dirige(인도하소서)\'에서 유래하여 죽은 이를 기리는 의미를 담고 있습니다.',
      visual: '비 내리는 장례식장에서 검은 옷을 입은 사람들이 느리고 슬프게 울려 퍼지는 음악을 들으며 행진하는 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'더지\'와 유사하므로, 죽은 이를 땅에 \'더지(두지)\' 않고 보내기 아쉬워 부르는 노래라고 기억하세요.',
      context: '실제 장례식뿐만 아니라, 지나치게 느리고 우울하여 분위기를 가라앉히는 음악이나 시를 비유적으로 비판할 때도 사용됩니다.',
      synonymAntonym: '슬픔을 노래하는 requiem, lament와 비슷하며, 승리와 기쁨을 노래하는 anthem, paean과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A somber song or musical composition expressing grief, typically performed at a funeral or as a memorial for someone who has died.',
      synonyms: ['requiem', 'lament', 'elegy'],
      antonyms: ['anthem', 'paean', 'carol'],
      exampleSentences: [
        { en: 'The brass band played a solemn dirge during the funeral procession.', ko: '금관악단은 장례 행렬 동안 엄숙한 장송곡을 연주했다.' },
        { en: 'The wind howling through the trees sounded like a haunting dirge for the lost sailors.', ko: '나무 사이로 울부짖는 바람 소리는 마치 실종된 선원들을 위한 잊혀지지 않는 장송곡처럼 들렸다.' },
      ],
    }
  ),
  word('Disabuse', '오해를 풀다', 9, 'verb',
    ['속이다', '오해시키다', '현혹하다', '기만하다', '착각하게하다', '은폐하다', '왜곡하다', '날조하다', '방치하다', '혼동하다'],
    tips({
      etymology: '반대를 뜻하는 접두사 dis-와 오용 또는 잘못된 믿음을 뜻하는 abuse가 결합하여, 잘못된 생각을 제거한다는 의미를 형성합니다.',
      visual: '누군가의 눈 앞에 낀 뿌연 안개를 손으로 걷어내어 맑은 풍경을 보여주는 장면을 상상해 보세요.',
      soundAlike: '디스(dis) + 어뷰즈(abuse): 잘못된(abuse) 사용이나 생각을 멀리(dis) 떨어뜨려 놓는다고 기억하면 쉽습니다.',
      context: '격식 있는 상황에서 사용되며, 주로 \'disabuse someone of a belief\'처럼 전치사 of와 함께 쓰여 특정 생각에서 벗어나게 함을 나타냅니다.',
      synonymAntonym: 'enlighten은 진실을 깨우쳐 주는 것이고, 반대로 mislead는 잘못된 길로 인도하여 오해를 만드는 것입니다.',
    }),
    {
      definition: 'To persuade someone that an idea or belief they hold is not true.',
      synonyms: ['enlighten', 'correct', 'debunk'],
      antonyms: ['deceive', 'mislead', 'delude'],
      exampleSentences: [
        { en: 'He thought he could pass without studying, but the first mock exam quickly disabused him of that notion.', ko: '그는 공부하지 않고도 합격할 수 있다고 생각했지만, 첫 번째 모의고사가 그의 그런 오해를 곧바로 깨뜨려 주었다.' },
        { en: 'It is my duty to disabuse the public of these false rumors.', ko: '이러한 거짓 소문들에 대한 대중의 오해를 풀어주는 것이 나의 의무이다.' },
      ],
    }
  ),
  word('Disaffected', '불만을 품은', 9, 'adjective',
    ['충성스러운', '헌신적인', '만족한', '충실한', '열성적인', '복종하는', '우호적인', '협조적인', '낙관적인', '순응하는'],
    tips({
      etymology: '부정을 뜻하는 dis와 애정 혹은 영향을 뜻하는 affect가 결합하여, 마음이 떠나고 정이 식어버린 상태를 의미합니다.',
      visual: '회사 게시판 앞에서 팔짱을 낀 채 고개를 돌리고 있는 화가 난 직원의 모습을 상상해 보세요.',
      soundAlike: '디서펙티드 - 마음의 \'영향(affect)\'권에서 \'멀어져(dis)\' 더 이상 따르지 않는 상태입니다.',
      context: '주로 정부의 정책이나 회사의 처우에 실망하여 반항적인 태도를 보이는 사람들을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'alienated, discontented와 비슷하며, loyal이나 devoted와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'no longer supporting or being satisfied with an organization or group, often leading to a loss of loyalty',
      synonyms: ['alienated', 'discontented', 'rebellious'],
      antonyms: ['loyal', 'contented', 'devoted'],
      exampleSentences: [
        { en: 'Disaffected voters stayed home on election day.', ko: '불만을 품은 유권자들이 선거일에 투표하지 않고 집에 머물렀다.' },
        { en: 'Disaffected employees leaked the documents.', ko: '불만을 품은 직원들이 문서를 유출했다.' },
      ],
    }
  ),
  word('Discomfit', '당황시키다', 9, 'verb',
    ['안심시키다', '위로하다', '격려하다', '진정시키다', '북돋우다', '응원하다', '평온하게하다', '확신시키다', '달래다', '기쁘게하다'],
    tips({
      etymology: '라틴어 \'dis-(반대)\'와 \'conficere(준비하다/완성하다)\'가 결합되어, 상대의 준비를 망치거나 계획을 좌절시켜 당황하게 한다는 의미에서 유래했습니다.',
      visual: '중요한 발표 중에 갑자기 마이크가 꺼지거나 예상치 못한 날카로운 질문을 받아 동공이 흔들리는 발표자의 모습을 상상해 보세요.',
      soundAlike: '\'디스컴핏\'은 명사 \'discomfort(불편함)\'와 발음이 매우 유사합니다. 상대방을 심리적으로 불편하게 만들어 당황시키는 상황을 연상하면 쉽습니다.',
      context: '단순히 놀라게 하는 것을 넘어, 상대의 평정심을 무너뜨리거나 체면을 깎아내려 어쩔 줄 모르게 만들 때 주로 쓰입니다.',
      synonymAntonym: '동의어로는 embarrass, unnerve, fluster가 있으며, 반의어로는 마음을 진정시키는 soothe, reassure, comfort가 있습니다.',
    }),
    {
      definition: 'to make someone feel confused, uneasy, or embarrassed, often by thwarting their plans or expectations',
      synonyms: ['embarrass', 'unnerve', 'fluster'],
      antonyms: ['soothe', 'reassure', 'comfort'],
      exampleSentences: [
        { en: 'The unexpected interruption seemed to discomfit the host during the live broadcast.', ko: '예상치 못한 방해는 생방송 도중 진행자를 당황하게 만드는 것 같았다.' },
        { en: 'She was discomfited by the directness of his personal questions.', ko: '그녀는 그의 사적인 질문들의 직설적인 화법에 당황했다.' },
      ],
    }
  ),
  word('Disparage', '폄하하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '격찬하다', '숭배하다', '존중하다', '추대하다', '장려하다', '고무하다', '추앙하다', '인정하다'],
    tips({
      etymology: '부정을 뜻하는 dis와 \'동등함\'을 뜻하는 par(peer와 어원 동일)가 결합되어, 상대를 자신과 동등하게 보지 않고 낮게 취급한다는 데서 유래했습니다.',
      visual: '공들여 쌓은 탑을 누군가 발로 툭 치며 \'별거 아니네\'라고 비웃는 장면을 상상해 보세요.',
      soundAlike: '힙합에서 상대를 비판하는 \'디스(dis)\'를 떠올리세요. 상대를 \'디스\'해서 가치를 \'폄하\'하는 상황과 연결됩니다.',
      context: '주로 타인의 성취, 외모, 혹은 의견이 가치 없다고 깎아내릴 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: 'belittle(작게 만들다)과 의미가 통하며, 반대로 높이 치켜세우는 extol과는 반대 관계입니다.',
    }),
    {
      definition: 'to speak of someone or something in a derogatory or slighting manner to make them seem unimportant',
      synonyms: ['belittle', 'denigrate', 'deprecate'],
      antonyms: ['praise', 'extol', 'applaud'],
      exampleSentences: [
        { en: 'It is never a good idea to disparage your former employer during a job interview.', ko: '취업 면접 중에 이전 직장 상사를 폄하하는 것은 결코 좋은 생각이 아닙니다.' },
        { en: 'Critics disparaged the movie for its lack of originality despite its box office success.', ko: '비평가들은 그 영화의 흥행 성공에도 불구하고 독창성 부족을 이유로 폄하했습니다.' },
      ],
    }
  ),
  word('Dissemble', '숨기다', 9, 'verb',
    ['드러내다', '솔직히 말하다', '인정하다', '노출하다', '공개하다', '폭로하다', '밝히다', '자백하다', '표현하다', '나타내다'],
    tips({
      etymology: 'dis(부정)와 semble(비슷하다)이 결합하여, 실제와는 다르게 보이도록 꾸민다는 의미에서 유래했습니다.',
      visual: '가면 무도회에서 화려한 가면 뒤로 자신의 진짜 표정을 꽁꽁 숨기고 있는 사람을 상상해 보세요.',
      soundAlike: '기계 등을 해체하는 disassemble(디스어셈블)과 발음이 비슷하지만, 이 단어는 감정을 \'숨기는\' 것에 집중합니다.',
      context: '정치적 의도나 속마음을 들키지 않기 위해 겉으로 다른 척을 하는 격식 있는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'disguise, conceal과 비슷하게 무언가를 가리는 행위이며, 반대로 솔직하게 보여주는 reveal과는 반대됩니다.',
    }),
    {
      definition: 'to hide one\'s real intentions, emotions, or beliefs by pretending to be or feel something else',
      synonyms: ['disguise', 'conceal', 'feign'],
      antonyms: ['reveal', 'manifest', 'disclose'],
      exampleSentences: [
        { en: 'He found it difficult to dissemble his true intentions from his colleagues.', ko: '그는 동료들에게 자신의 진짜 의도를 숨기는 것이 어렵다는 것을 알게 되었다.' },
        { en: 'She chose to dissemble her anger behind a polite smile during the meeting.', ko: '그녀는 회의 중에 정중한 미소 뒤로 자신의 분노를 감추기로 했다.' },
      ],
    }
  ),
  word('Dissolute', '방탕한', 9, 'adjective',
    ['금욕적인', '절제하는', '검소한', '정숙한', '도덕적인', '엄격한', '청렴한', '성실한', '경건한', '단정한'],
    tips({
      etymology: '라틴어 \'dissolutus\'에서 유래하며, \'dis(분리)\'와 \'solvere(풀다)\'가 결합되어 도덕적 결속력이 풀려버린 상태를 뜻합니다.',
      visual: '단추가 다 풀린 셔츠를 입고 술잔을 든 채 소파에 늘어져 있는 무절제한 사람의 모습',
      soundAlike: '디설루트(Dissolute) - \'뒤섞여(di) 살다(solute)\'로 기억하세요. 질서 없이 쾌락과 뒤섞여 사는 방탕한 모습입니다.',
      context: '주로 부유한 사람이 책임감 없이 유흥에만 빠져 지내는 타락한 생활 방식을 비판할 때 자주 쓰입니다.',
      synonymAntonym: '쾌락에 빠진 debauched와 유의어이며, 스스로를 엄격히 통제하는 ascetic과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Indulging in excessive pleasure and lacking any sense of moral restraint or responsibility.',
      synonyms: ['debauched', 'profligate', 'licentious'],
      antonyms: ['virtuous', 'ascetic', 'moral'],
      exampleSentences: [
        { en: 'He led a dissolute life in his youth, spending all his time in gambling dens.', ko: '그는 젊은 시절 도박장에서 모든 시간을 보내며 방탕한 삶을 살았다.' },
        { en: 'The dissolute noble squandered his entire family fortune on fleeting pleasures.', ko: '그 방탕한 귀족은 덧없는 쾌락을 위해 가문 전체의 재산을 탕진했다.' },
      ],
    }
  ),
  word('Dogmatic', '독단적', 9, 'adjective',
    ['개방적인', '유연한', '회의적인', '수용적인', '겸손한', '객관적인', '포용력있는', '중립적인', '논리적인', '합리적인'],
    tips({
      etymology: '그리스어 dogma(의견, 교리)에서 유래했습니다. 자신의 신념을 절대적인 진리로 믿고 타인에게 강요하는 성향을 나타냅니다.',
      visual: '회의실에서 귀를 꽉 막은 채 자신의 주장만 적힌 책을 흔들며 고함을 치는 고집불통의 사람을 상상해 보세요.',
      soundAlike: '도그마틱(Dogmatic) - 자신의 \'도그마(교리)\'에만 갇혀 남을 \'다그치는\' 독단적인 모습을 연상하세요.',
      context: '종교, 정치, 학문적 토론에서 증거 없이 자신의 신념이 무조건 옳다고 고집하며 타협하지 않는 태도를 비판할 때 주로 사용합니다.',
      synonymAntonym: '동의어 doctrinaire, rigid, imperious는 모두 융통성 없는 태도를 뜻하며, 반의어 flexible, open-minded, amenable은 열린 마음을 뜻합니다.',
    }),
    {
      definition: 'expressing personal opinions or beliefs as if they are certainly correct and cannot be doubted',
      synonyms: ['doctrinaire', 'rigid', 'imperious'],
      antonyms: ['flexible', 'open-minded', 'amenable'],
      exampleSentences: [
        { en: 'She was too dogmatic to consider alternatives.', ko: '그녀는 너무 독단적이어서 대안을 고려하려 하지 않았다.' },
        { en: 'His dogmatic views left no room for debate.', ko: '그의 독단적인 견해는 토론의 여지를 남기지 않았다.' },
      ],
    }
  ),
  word('Doleful', '슬픈', 9, 'adjective',
    ['기쁜', '환한', '명랑한', '행복한', '밝은', '즐거운', '쾌활한', '희망찬', '활기찬', '만족스러운'],
    tips({
      etymology: '라틴어 dolere(고통받다)에서 유래한 dole(슬픔)에 ful(가득한)이 결합되어 \'슬픔이 가득함\'을 뜻합니다.',
      visual: '축 처진 어깨로 비 내리는 창밖을 보며 눈물짓는 아주 애처로운 표정을 상상해 보세요.',
      soundAlike: '\'돌(dole)\'처럼 무거운 슬픔이 마음속에 \'가득(ful)\' 차 있는 상태라고 연상하면 쉽습니다.',
      context: '단순히 기분이 안 좋은 상태를 넘어, 표정이나 목소리, 음악 등이 매우 비통하고 애처로울 때 주로 쓰입니다.',
      synonymAntonym: 'mournful, sorrowful과 비슷하며, 반대로 기쁨이 넘치는 상태는 joyful, cheerful이라고 합니다.',
    }),
    {
      definition: 'expressing or causing a deep feeling of sadness, grief, or misfortune',
      synonyms: ['mournful', 'sorrowful', 'lugubrious'],
      antonyms: ['joyful', 'cheerful', 'blithe'],
      exampleSentences: [
        { en: 'A doleful melody filled the church, sounding incredibly sad and heavy.', ko: '슬픈 장송곡이 교회 안에 가득 울려 퍼지며 매우 애처롭게 들렸다.' },
        { en: 'The puppy looked up at its owner with big, doleful eyes when it was left alone.', ko: '강아지는 혼자 남겨지자 크고 슬픈 눈망울로 주인을 올려다보았다.' },
      ],
    }
  ),
  word('Dotard', '망령든 노인', 9, 'noun',
    ['청년', '지혜로운 노인', '천재', '운동선수', '학자', '전략가', '개척자', '지도자', '발명가', '예술가'],
    tips({
      etymology: '중세 영어 \'doten(어리석게 행동하다)\'에서 유래하여 정신이 흐릿해진 상태를 뜻합니다.',
      visual: '초점 없는 눈으로 허공을 응시하며 옛날이야기만 반복하는 노인의 모습.',
      soundAlike: '도타드 -> \'도(도)가 지나친 타(타)락한 정신상태\'로 연상해보세요.',
      context: '주로 문학이나 비판적인 맥락에서 판단력이 흐려진 고령자를 지칭할 때 쓰입니다.',
      synonymAntonym: '동의어는 senile person, 반의어는 sharp mind, youth, genius입니다.',
    }),
    {
      definition: 'An elderly person who has become physically weak or whose mental faculties have significantly declined due to old age.',
      synonyms: ['senile person', 'elderly weakling', 'decliner'],
      antonyms: ['youth', 'prodigy', 'intellectual'],
      exampleSentences: [
        { en: 'The elderly man mumbled to himself about events from fifty years ago, appearing to be a mere dotard.', ko: '그 노인은 50년 전의 일들에 대해 혼잣말을 중얼거리며 그저 망령든 노인처럼 보였다.' },
        { en: 'He was once a great king, but in his final years, he was dismissed as a mere dotard.', ko: '그는 한때 위대한 왕이었으나, 말년에는 망령든 노인 취급을 받으며 무시당했다.' },
      ],
    }
  ),
  word('Draconian', '가혹한', 9, 'adjective',
    ['자비로운', '온건한', '유연한', '너그러운', '부드러운', '민주적인', '방임하는', '친절한', '느슨한', '합리적인'],
    tips({
      etymology: '고대 아테네의 법전 편찬자 Draco의 이름에서 유래했으며, 그는 아주 사소한 죄에도 사형을 선고할 만큼 엄격한 법을 만들었습니다.',
      visual: '작은 실수에도 거대한 쇠사슬과 무거운 벌금을 매기는 냉혹한 판사의 모습을 상상해 보세요.',
      soundAlike: '이름이 비슷한 \'드라큘라\'처럼 피도 눈물도 없이 무섭고 잔인한 규칙을 떠올리면 쉽습니다.',
      context: '주로 정부의 새로운 법안, 기업의 징계 규정, 또는 비상 상황에서의 통제 조치가 지나치게 엄격할 때 쓰입니다.',
      synonymAntonym: '매우 엄격한 harsh와 유사하며, 관대한 처벌을 뜻하는 lenient와는 정반대의 개념입니다.',
    }),
    {
      definition: 'extremely strict, severe, or cruel, particularly when applied to laws, rules, or punishments',
      synonyms: ['harsh', 'severe', 'stringent'],
      antonyms: ['lenient', 'mild', 'merciful'],
      exampleSentences: [
        { en: 'The government imposed draconian measures to control the protest.', ko: '정부는 시위를 진압하기 위해 가혹한 조치를 취했다.' },
        { en: 'Critics argued that the new security laws were draconian.', ko: '비판론자들은 새로운 보안법이 지나치게 가혹하다고 주장했다.' },
      ],
    }
  ),
  word('Duplicitous', '이중적', 9, 'adjective',
    ['정직한', '솔직한', '투명한', '진실된', '일관성있는', '충성스러운', '순수한', '믿음직한', '개방적인', '직설적인'],
    tips({
      etymology: '\'du(둘)\'와 \'plic(접다)\'이 합쳐져 \'두 겹으로 접힌\', 즉 겉과 속이 다름을 뜻합니다.',
      visual: '앞에서는 웃으며 악수하고 뒤에서는 칼을 숨기고 있는 사람의 모습.',
      soundAlike: '듀플리시터스 -> \'Double(더블)\' 플레이를 하며 상대를 속이는 사기꾼.',
      context: '정치적 음모나 개인적인 배신 행위처럼 신뢰를 저버리는 상황을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '동의어는 deceitful, two-faced이며, 반의어는 honest, candid처럼 숨김없는 상태를 뜻합니다.',
    }),
    {
      definition: 'behaving in a dishonest way by saying different things to different people or acting in a way that hides one\'s true intentions',
      synonyms: ['deceitful', 'two-faced', 'dishonest'],
      antonyms: ['honest', 'candid', 'sincere'],
      exampleSentences: [
        { en: 'The duplicitous spy led a double life, betraying both sides for money.', ko: '그 이중적인 스파이는 돈을 위해 양쪽을 배신하며 이중적인 삶을 살았다.' },
        { en: 'I was shocked by his duplicitous behavior after years of friendship.', ko: '수년간의 우정 끝에 보여준 그의 이중적인 행동에 나는 충격을 받았다.' },
      ],
    }
  ),
  word('Ebullient', '들뜬', 9, 'adjective',
    ['우울한', '차분한', '무기력한', '냉담한', '슬픈', '조용한', '진지한', '비관적인', '지루한', '침울한'],
    tips({
      etymology: '\'e(밖으로)\'와 \'bullire(끓다)\'가 합쳐진 어원으로, 에너지가 냄비 밖으로 끓어 넘치는 역동적인 상태를 의미합니다.',
      visual: '샴페인 병을 땄을 때 거품이 세차게 뿜어져 나오는 모습이나 축제 현장의 열기를 상상해 보세요.',
      soundAlike: '\'이불리언트\' -> \'이불\'을 박차고 일어날 만큼 기운이 넘치고 활기찬 아침의 모습과 연결하면 쉽습니다.',
      context: '주로 성격이 매우 쾌활한 사람을 묘사하거나, 승리나 성공 직후의 벅찬 감정을 표현할 때 사용됩니다.',
      synonymAntonym: '활기찬 exuberant와 유사하며, 가라앉은 분위기를 뜻하는 subdued나 gloomy와는 반대되는 개념입니다.',
    }),
    {
      definition: 'overflowing with enthusiasm, high spirits, or vivacious energy',
      synonyms: ['exuberant', 'buoyant', 'vivacious'],
      antonyms: ['depressed', 'subdued', 'gloomy'],
      exampleSentences: [
        { en: 'The crowd was ebullient as the band took the stage.', ko: '밴드가 무대에 오르자 관중들은 매우 들뜬 상태였다.' },
        { en: 'She felt ebullient after passing her final exams.', ko: '그녀는 기말고사를 통과한 후 매우 들뜬 기분이었다.' },
      ],
    }
  ),
  word('Ecclesiastical', '교회의', 9, 'adjective',
    ['세속적인', '과학적인', '정치적인', '군사의', '상업적인', '민간의', '현대의', '물질적인', '기술적인', '법적인'],
    tips({
      etymology: '그리스어 \'ekklesia(소집된 모임/교회)\'에서 유래하여 종교적 조직과 관련된 것을 뜻합니다.',
      visual: '높은 스테인드글라스 창문과 사제복을 입은 성직자의 모습.',
      soundAlike: '이클리지애스티컬 -> \'에클레시아(교회)\'의 형용사형.',
      context: '교회의 역사, 건축, 법률 또는 직급 등을 설명할 때 사용하는 전문적인 단어입니다.',
      synonymAntonym: '동의어는 clerical, priestly, 반의어는 secular, lay, temporal입니다.',
    }),
    {
      definition: 'relating to the Christian Church or its hierarchy and clergy',
      synonyms: ['clerical', 'priestly', 'canonical'],
      antonyms: ['secular', 'lay', 'temporal'],
      exampleSentences: [
        { en: 'The museum houses a fine collection of ecclesiastical art.', ko: '그 박물관은 훌륭한 교회 예술 수집품들을 소장하고 있다.' },
        { en: 'He spent his life studying ecclesiastical history and law.', ko: '그는 평생을 교회의 역사와 법을 공부하는 데 보냈다.' },
      ],
    }
  ),
  word('Effervescent', '기운찬', 9, 'adjective',
    ['정적인', '평범한', '무미건조한', '딱딱한', '어두운', '조용한', '느린', '무거운', '둔탁한', '차가운'],
    tips({
      etymology: '\'ex(밖으로)\'와 \'fervere(끓다)\'가 결합되어 거품이 위로 솟구치며 끓어오르는 상태를 의미합니다.',
      visual: '샴페인 잔 속에서 끊임없이 위로 솟구쳐 오르는 작고 투명한 기포들의 움직임.',
      soundAlike: '에퍼베슨트 -> \'에\'너지가 \'퍼\'지듯 거품이 톡톡 터지는 경쾌한 소리를 연상하세요.',
      context: '탄산음료의 톡 쏘는 성질뿐만 아니라, 주변을 밝게 만드는 사람의 활기찬 성격을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '거품이 이는 bubbly와 활기찬 vivacious가 유의어이며, 김빠진 flat이나 활기 없는 lifeless가 반의어입니다.',
    }),
    {
      definition: 'producing small bubbles of gas or exhibiting a lively, enthusiastic, and high-spirited character',
      synonyms: ['bubbly', 'sparkling', 'vivacious'],
      antonyms: ['flat', 'dull', 'lifeless'],
      exampleSentences: [
        { en: 'The ginger ale was cold and effervescent.', ko: '그 진저에일은 차갑고 탄산 기포가 톡톡 튀었다.' },
        { en: 'Her effervescent personality made her the life of the party.', ko: '그녀의 활기 넘치는 성격은 그녀를 파티의 주인공으로 만들었다.' },
      ],
    }
  ),
  word('Effigy', '인형', 9, 'noun',
    ['실물', '원본', '진품', '생존자', '인간', '풍경화', '사진', '거울', '그림자', '유령'],
    tips({
      etymology: '라틴어 \'effingere(형상화하다)\'에서 유래하여 특정 인물을 본떠 만든 형상을 의미합니다.',
      visual: '시위 현장에서 사람들이 높이 치켜든 짚이나 종이로 만든 커다란 사람 모양 인형을 상상해 보세요.',
      soundAlike: '에피지 -> \'애(A) 피지\' 못한 꽃처럼 생명력 없는 인형의 형상을 떠올려 보세요.',
      context: '주로 정치적 항의의 표시로 특정 인물의 인형을 태우거나 매달 때, 혹은 무덤 위의 조각상을 가리킬 때 사용됩니다.',
      synonymAntonym: 'dummy나 likeness는 비슷한 형태를 뜻하며, original이나 entity는 가공된 형상이 아닌 실제 본체를 뜻합니다.',
    }),
    {
      definition: 'A crude representation or sculpted image of a specific person, often created to be publicly mocked or destroyed as a form of protest.',
      synonyms: ['dummy', 'likeness', 'statue'],
      antonyms: ['original', 'entity', 'being'],
      exampleSentences: [
        { en: 'The angry crowd burned the leader in effigy during the protest.', ko: '분노한 군중은 항의 시위 도중 지도자의 인형을 불태웠다.' },
        { en: 'The museum displayed a stone effigy of the ancient king lying on his tomb.', ko: '박물관은 무덤 위에 누워 있는 고대 왕의 석조 형상을 전시했다.' },
      ],
    }
  ),
  word('Effrontery', '뻔뻔함', 9, 'noun',
    ['겸손', '예의', '수줍음', '공손함', '신중함', '비굴함', '존경', '정중함', '조심성', '양보'],
    tips({
      etymology: '\'ex(밖으로)\'와 \'frons(이마)\'가 합쳐져 부끄러움 없이 이마를 꼿꼿이 쳐드는 모습을 의미합니다.',
      visual: '잘못을 저지르고도 고개를 빳빳이 들고 상대의 눈을 똑바로 응시하는 무례한 얼굴을 상상해 보세요.',
      soundAlike: '단어 중간의 \'front\'에 집중하여, 사람들 \'앞(front)\'에서 대놓고 무례하게 행동하는 상황을 떠올리면 쉽습니다.',
      context: '단순한 용기가 아니라, 사회적 통념이나 예의를 완전히 무시하는 불쾌한 뻔뻔함을 묘사할 때 사용합니다.',
      synonymAntonym: '뻔뻔한 용기를 뜻하는 audacity와 유사하며, 자신을 낮추는 modesty나 humility와는 반대되는 개념입니다.',
    }),
    {
      definition: 'behavior that is extremely confident and lacking in respect for others, often in a way that is shocking',
      synonyms: ['audacity', 'impudence', 'gall'],
      antonyms: ['modesty', 'politeness', 'humility'],
      exampleSentences: [
        { en: 'I can\'t believe he had the effrontery to ask for more money after failing to complete the task.', ko: '업무를 완수하지도 못했으면서 더 많은 돈을 요구하는 그의 뻔뻔함이 믿기지 않는다.' },
        { en: 'She was shocked by the effrontery of his question regarding her private finances.', ko: '그녀는 자신의 개인적인 재정 상태에 대해 묻는 그의 무례한 뻔뻔함에 충격을 받았다.' },
      ],
    }
  ),
  word('Egregious', '터무니없는', 9, 'adjective',
    ['보통의', '사소한', '정상적인', '무난한', '적당한', '탁월한', '훌륭한', '평범한', '미미한', '괜찮은'],
    tips({
      etymology: '라틴어 e(밖으로)와 greg(무리)가 합쳐져 \'무리에서 벗어날 정도로\' 나쁘다는 뜻에서 유래했습니다.',
      visual: '하얀 도화지에 아주 크고 새빨간 잉크 자국이 흉하게 번져 있는 모습을 떠올려 보세요.',
      soundAlike: '이그리지어스 -> \'이그! 저런 지독한 실수를!\' 하며 혀를 차는 상황을 상상하면 기억하기 쉽습니다.',
      context: '주로 도저히 묵과할 수 없는 심각한 실수, 법적 위반, 혹은 지독한 행동을 묘사할 때 사용합니다.',
      synonymAntonym: '동의어는 flagrant, outrageous, shocking이며 반의어는 minor, slight, insignificant입니다.',
    }),
    {
      definition: 'extraordinarily bad in a way that is very noticeable and shocking',
      synonyms: ['flagrant', 'outrageous', 'shocking'],
      antonyms: ['minor', 'slight', 'insignificant'],
      exampleSentences: [
        { en: 'The report revealed several egregious errors in the accounting department.', ko: '그 보고서는 회계 부서의 몇 가지 터무니없는 오류들을 밝혀냈습니다.' },
        { en: 'It was an egregious violation of the safety regulations.', ko: '그것은 안전 규정에 대한 지독한 위반 행위였습니다.' },
      ],
    }
  ),
  word('Elegy', '애가', 9, 'noun',
    ['찬가', '축가', '환호가', '행진곡', '기쁨의 노래', '응원가', '축전', '연설', '소설', '수필'],
    tips({
      etymology: '그리스어 \'elegos\'에서 유래되었으며, 이는 피리 반주에 맞춰 부르는 슬픈 노래를 의미했습니다.',
      visual: '검은 옷을 입은 사람들이 모인 장례식장에서 고인의 영정 사진 앞에 놓인 슬픈 시구절을 상상해 보세요.',
      soundAlike: '\'엘러지\'를 \'에고고\'와 연결하여, 사별의 아픔에 곡소리를 내며 부르는 노래라고 기억하면 쉽습니다.',
      context: '주로 누군가의 죽음을 슬퍼하거나, 다시 돌아오지 않는 과거의 소중한 것을 그리워할 때 사용되는 문학적 표현입니다.',
      synonymAntonym: '슬픔을 담은 lament, dirge와 유사하며, 승리와 기쁨을 노래하는 ode, paean과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A mournful, melancholy, or plaintive poem, especially a funeral song or a lament for the dead.',
      synonyms: ['lament', 'dirge', 'requiem'],
      antonyms: ['ode', 'paean', 'anthem'],
      exampleSentences: [
        { en: 'The poet wrote a moving elegy for his fallen friend to honor his memory.', ko: '시인은 전사한 친구를 기리기 위해 감동적인 애가를 썼습니다.' },
        { en: 'The cello played a haunting elegy during the ceremony, filling the hall with sadness.', ko: '의식 동안 첼로가 잊혀지지 않는 슬픈 애가를 연주하여 홀을 슬픔으로 채웠습니다.' },
      ],
    }
  ),
  word('Elucidate', '밝히다', 9, 'verb',
    ['흐리게 하다', '혼란시키다', '숨기다', '어둡게 하다', '복잡하게 하다', '왜곡하다', '은폐하다', '방해하다', '속이다', '가리다'],
    tips({
      etymology: '접두사 e(밖으로)와 어근 luc(빛)이 결합되어, 어둠 속에 있던 것을 빛 가운데로 끌어내어 명확히 보여준다는 의미를 담고 있습니다.',
      visual: '복잡하게 엉킨 실타래 위로 밝은 조명이 비춰지면서 실의 끝이 어디인지 한눈에 보이게 되는 장면을 상상해 보세요.',
      soundAlike: '\'일루시데이트\'를 \'이리로(일루) 와서 시원하게(시) 데이트(설명)해줘\'라고 발음과 연결해 기억하면 쉽습니다.',
      context: '단순히 정보를 전달하는 것을 넘어, 난해한 철학 개념이나 복잡한 과학 원리를 대중이 이해할 수 있도록 풀어서 설명할 때 주로 사용됩니다.',
      synonymAntonym: '명확하게 만드는 clarify와 유의어이며, 반대로 상황을 모호하게 만드는 obscure나 confuse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make something that is difficult to understand clear or easy to comprehend by providing a detailed explanation',
      synonyms: ['clarify', 'explain', 'illuminate'],
      antonyms: ['obscure', 'confuse', 'muddle'],
      exampleSentences: [
        { en: 'The professor used a simple analogy to elucidate the quantum physics theory.', ko: '교수님은 양자 물리학 이론을 명확히 설명하기 위해 간단한 비유를 사용했습니다.' },
        { en: 'Further investigation is needed to elucidate the exact cause of the accident.', ko: '사고의 정확한 원인을 밝히기 위해서는 추가적인 조사가 필요합니다.' },
      ],
    }
  ),
  word('Emaciate', '여위게 하다', 9, 'verb',
    ['살찌게 하다', '영양을 주다', '건강하게 하다', '보강하다', '풍부하게 하다', '강화하다', '키우다', '성장시키다', '채우다', '비옥하게 하다'],
    tips({
      etymology: '라틴어 macies(여윔)에서 유래하여 몸에서 살이 빠져나가는 것을 의미합니다.',
      visual: '오랫동안 굶어서 갈비뼈가 앙상하게 드러난 사람의 모습입니다.',
      soundAlike: '이메이시에이트 -> \'입맛이 없어서\' 살이 쏙 빠졌다고 기억하세요.',
      context: '질병이나 기아로 인해 몸이 비정상적으로 마르는 상황에 사용합니다.',
      synonymAntonym: '동의어는 atrophy, wither, starve이며 반의어는 nourish, fatten, strengthen입니다.',
    }),
    {
      definition: 'to cause a person or animal to become extremely thin and weak, especially because of lack of food or an illness',
      synonyms: ['atrophy', 'wither', 'starve'],
      antonyms: ['nourish', 'fatten', 'strengthen'],
      exampleSentences: [
        { en: 'The long famine began to emaciate the local population.', ko: '긴 기근이 지역 주민들을 여위게 하기 시작했습니다.' },
        { en: 'Severe illness can emaciate even the strongest athletes.', ko: '심한 질병은 가장 강한 운동선수조차 여위게 할 수 있습니다.' },
      ],
    }
  ),
  word('Embroil', '엮다', 9, 'verb',
    ['놓아주다', '해제하다', '분리하다', '정리하다', '떼어내다', '해방하다', '구출하다', '정돈하다', '풀어주다', '제외하다'],
    tips({
      etymology: '프랑스어 brouiller(혼란시키다)에서 유래하여 어떤 일 속에 복잡하게 섞여 들어감을 뜻합니다.',
      visual: '복잡하게 엉킨 실타래 속에 손이 묶여버려 빠져나오지 못하는 모습입니다.',
      soundAlike: '엠브로일(Embroil) -> 안으로(em) 부글부글 끓는(broil) 싸움 속으로 휘말려 들어가는 상황입니다.',
      context: '주로 본인의 의사와 상관없이 원치 않는 논쟁, 스캔들, 정치적 분쟁에 깊이 휘말릴 때 사용합니다.',
      synonymAntonym: 'involve, entangle은 얽히는 것을 뜻하며, extricate, free는 곤경에서 벗어나는 것을 뜻합니다.',
    }),
    {
      definition: 'to force someone or something into a state of confusion or a complicated situation such as a fight or argument',
      synonyms: ['involve', 'entangle', 'ensnare'],
      antonyms: ['extricate', 'exclude', 'free'],
      exampleSentences: [
        { en: 'I do not wish to embroil myself in their family dispute.', ko: '나는 그들의 가족 분쟁에 엮이고 싶지 않습니다.' },
        { en: 'The scandal threatened to embroil the company in a lengthy legal battle.', ko: '그 스캔들은 회사를 장기적인 법적 공방에 엮이게 할 위험이 있었습니다.' },
      ],
    }
  ),
  word('Empiricism', '경험주의', 9, 'noun',
    ['이론주의', '직관주의', '공리주의', '추론주의', '선험론', '합리주의', '관념론', '형이상학', '신비주의', '독단론'],
    tips({
      etymology: '그리스어 \'empeiria(경험)\'에서 유래하였으며, 이는 \'시도하다\'라는 의미를 내포하고 있습니다.',
      visual: '방 안에 앉아 생각만 하는 철학자가 아니라, 밖으로 나가 직접 현미경으로 세포를 관찰하는 과학자의 모습을 떠올려 보세요.',
      soundAlike: '엠피리시즘 -> \'임상(empirical)\' 시험처럼 직접 몸으로 부딪쳐 얻은 결과물이라고 기억하면 쉽습니다.',
      context: '과학적 방법론의 핵심으로, 추상적인 논리보다는 실제 측정된 수치와 관찰된 현상을 증거로 채택하는 태도입니다.',
      synonymAntonym: '실험을 중시하는 experimentalism과 유사하며, 이성과 논리만을 강조하는 rationalism과는 반대되는 개념입니다.',
    }),
    {
      definition: 'the philosophical belief that all knowledge is derived from sensory-perceptual evidence rather than innate ideas or reason',
      synonyms: ['experimentalism', 'pragmatism', 'observation'],
      antonyms: ['rationalism', 'idealism', 'theory'],
      exampleSentences: [
        { en: 'Modern science is built on the foundation of empiricism.', ko: '현대 과학은 경험주의의 토대 위에 세워졌습니다.' },
        { en: 'His approach to medicine was based on strict empiricism.', ko: '의학에 대한 그의 접근 방식은 엄격한 경험주의에 기반했습니다.' },
      ],
    }
  ),
  word('Ennui', '권태', 9, 'noun',
    ['열의', '흥미', '열정', '활력', '재미', '즐거움', '흥분', '기쁨', '의욕', '생기'],
    tips({
      etymology: '프랑스어 \'ennui\'에서 유래했으며, 이는 \'성가심\'이나 \'증오\'를 뜻하는 라틴어 \'in odio\'와 연결되어 단순한 지루함보다 깊은 정신적 고통을 암시합니다.',
      visual: '모든 것을 다 가진 귀족이 화려한 방 안에서 아무런 의욕 없이 창밖만 멍하니 바라보는 모습을 상상해 보세요.',
      soundAlike: '\'안위(ennui)\'와 발음이 비슷합니다. 삶이 너무 \'안위\'하고 평온해서 찾아오는 깊은 권태감으로 기억하세요.',
      context: '주로 상류층의 권태나 아무런 자극이 없는 반복적인 일상에서 느끼는 실존적인 지루함을 표현할 때 사용됩니다.',
      synonymAntonym: 'Boredom보다 격식 있고 무거운 표현이며, 반대로 활기찬 에너지나 열정을 뜻하는 단어들과 대조됩니다.',
    }),
    {
      definition: 'A state of mental weariness and dissatisfaction resulting from a lack of interest or lack of occupation.',
      synonyms: ['boredom', 'listlessness', 'lassitude'],
      antonyms: ['enthusiasm', 'excitement', 'energy'],
      exampleSentences: [
        { en: 'The wealthy heir suffered from a constant sense of ennui despite his luxurious lifestyle.', ko: '그 부유한 상속자는 호화로운 생활에도 불구하고 끊임없는 권태감에 시달렸습니다.' },
        { en: 'The long, rainy afternoon filled the house with a deep sense of ennui.', ko: '길고 비 내리는 오후는 집안을 깊은 권태로 가득 채웠습니다.' },
      ],
    }
  ),
  word('Epitome', '전형', 9, 'noun',
    ['예외', '이상', '특이', '편차', '변칙', '결함', '오류', '반례', '실수', '파편'],
    tips({
      etymology: '그리스어 epi(위에) + temnein(자르다)에서 유래하여 핵심적인 정수만을 뽑아낸 것을 뜻합니다.',
      visual: '사전에서 \'우아함\'이라는 단어를 찾았을 때 그 옆에 예시로 실린 대표 사진 같은 존재를 떠올려 보세요.',
      soundAlike: '이핏터미 -> \'이 핏(fit)이 터미(tome)네이터급 전형\'이라고 소리 내어 연상해 보세요.',
      context: '주로 칭찬이나 강조를 할 때 어떤 특징이나 품질을 완벽하게 보여주는 대상에게 사용합니다.',
      synonymAntonym: 'quintessence, embodiment와 비슷하며, 정상에서 벗어난 aberration이나 exception과는 반대됩니다.',
    }),
    {
      definition: 'a person or thing that is a perfect representative of a particular quality or type',
      synonyms: ['quintessence', 'embodiment', 'archetype'],
      antonyms: ['aberration', 'exception', 'anomaly'],
      exampleSentences: [
        { en: 'The hotel is the epitome of modern luxury.', ko: '그 호텔은 현대적 사치의 전형입니다.' },
        { en: 'He was the epitome of a professional athlete.', ko: '그는 프로 운동선수의 전형이었습니다.' },
      ],
    }
  ),
  word('Equivocate', '모호하게 말하다', 9, 'verb',
    ['명확히 말하다', '직설하다', '솔직히 말하다', '단정하다', '밝히다', '확언하다', '공표하다', '설명하다', '증명하다', '나타내다'],
    tips({
      etymology: '라틴어 equi(동일한)와 voc(목소리)가 합쳐져 \'두 가지 목소리를 내다\'라는 의미에서 유래했습니다.',
      visual: '양손에 서로 다른 답안지를 들고 어느 것이 진짜인지 알려주지 않는 정치인의 모습을 상상해 보세요.',
      soundAlike: '이-퀴-버-케이트: \'이 귀에 저 귀에\' 다르게 말하며 진실을 피하는 상황과 연결해 보세요.',
      context: '주로 정치적 논쟁이나 책임 회피가 필요한 상황에서 확답을 피할 때 사용됩니다.',
      synonymAntonym: 'prevaricate와 hedge는 진실을 피하는 동의어이며, confront와 clarify는 반대되는 행동입니다.',
    }),
    {
      definition: 'To use ambiguous or unclear expressions, especially in order to mislead or avoid commitment.',
      synonyms: ['prevaricate', 'hedge', 'quibble'],
      antonyms: ['confront', 'clarify', 'declare'],
      exampleSentences: [
        { en: 'The candidate chose to equivocate on the tax issue rather than give a definitive answer.', ko: '그 후보는 세금 문제에 대해 확정적인 답변을 주는 대신 모호하게 말하는 것을 선택했다.' },
        { en: 'Stop trying to equivocate and tell me exactly what happened last night.', ko: '얼버무리려 하지 말고 어젯밤에 정확히 무슨 일이 있었는지 말해.' },
      ],
    }
  ),
  word('Evanescent', '순간적인', 9, 'adjective',
    ['영구적인', '지속적인', '영원한', '오래가는', '불멸의', '고정된', '불변의', '장기적인', '끊임없는', '확고한'],
    tips({
      etymology: '라틴어 e-(밖으로)와 vanescere(사라지다)가 결합된 단어로, 연기처럼 허공으로 흩어져 사라지는 성질을 의미합니다.',
      visual: '공중에 뜬 비눗방울이 무지갯빛을 내며 반짝이다가 \'톡\' 하고 순식간에 터져 없어지는 모습을 상상해 보세요.',
      soundAlike: '\'에바-네슨트\'에서 \'내뱉은\'과 비슷하게 발음하여, 입 밖으로 내뱉은 입김이 추운 겨울날 금방 사라지는 장면으로 기억하세요.',
      context: '주로 안개, 노을, 젊음, 혹은 찰나의 감정처럼 아름답지만 금방 시들어버리는 대상을 묘사할 때 사용됩니다.',
      synonymAntonym: 'fleeting은 순식간에 지나감을, ephemeral은 수명이 매우 짧음을 강조하며, permanent는 영구적인 상태를 뜻합니다.',
    }),
    {
      definition: 'Lasting for only a very short time and quickly fading from sight or existence.',
      synonyms: ['fleeting', 'ephemeral', 'transient'],
      antonyms: ['permanent', 'eternal', 'enduring'],
      exampleSentences: [
        { en: 'The sunset created an evanescent glow that vanished within minutes.', ko: '노을은 몇 분 만에 사라져 버린 덧없는 붉은 빛을 만들어냈다.' },
        { en: 'Talk of fame is often linked to its evanescent nature in the modern world.', ko: '명성에 대한 담론은 현대 사회에서 그것의 순간적인 특성과 자주 연결된다.' },
      ],
    }
  ),
];
