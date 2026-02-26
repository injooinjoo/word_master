import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch13: VocabItem[] = [
  word('abate', '줄어들다', 7, 'verb',
    ['증가하다', '악화되다', '강화되다', '팽창하다', '확대하다', '촉진하다', '강화', '증대', '심화', '상승'],
    tips({
      etymology: '라틴어 ab(멀리)와 battere(치다)가 합쳐져 \'때려서 기세를 꺾다\'라는 의미에서 유래했습니다.',
      visual: '거세게 몰아치던 태풍의 눈이 지나가며 바람이 잦아드는 풍경을 상상해 보세요.',
      soundAlike: '어베이트(Abate) - \'어, 배(가) 이트(eat)해서 줄어들었네\'라고 연상해 보세요.',
      context: '주로 폭풍, 통증, 분노처럼 강렬한 기세가 꺾일 때 자주 쓰이는 단어입니다.',
      synonymAntonym: '동의어로는 decrease, subside, decline이 있으며, 반의어로는 intensify, increase, worsen이 있습니다.',
    }),
    {
      definition: 'to become less strong, severe, or widespread over a period of time',
      synonyms: ['decrease', 'subside', 'decline'],
      antonyms: ['intensify', 'increase', 'worsen'],
      exampleSentences: [
        { en: 'The storm finally abated by evening.', ko: '폭풍은 저녁 무렵 드디어 약해졌다.' },
        { en: 'Her anger abated after he apologized.', ko: '그가 사과한 후 그녀의 화가 가라앉았다.' },
      ],
      wordDistractors: ['Debate', 'Rebate', 'Ablate'],
      definitionDistractors: [
        'To argue or discuss a point in a formal setting',
        'To increase in intensity or force over time',
        'To officially cancel or put an end to a law or agreement',
      ],
    }
  ),
  word('aberration', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '일반', '일관성', '규범', '정례', '보통', '안정'],
    tips({
      etymology: '라틴어 ab(벗어나다)와 errare(헤매다)가 결합되어, 정해진 궤도나 정상적인 경로에서 이탈했다는 의미를 담고 있습니다.',
      visual: '일직선으로 곧게 뻗어 나가던 그래프가 갑자기 예상치 못한 방향으로 툭 튀어나온 돌출 지점을 상상해 보세요.',
      soundAlike: '\'애(가) 버린(aber-)\' 행동이라고 연상하여, 평소의 바른 모습과는 동떨어진 이상한 행동이나 실수를 떠올려 보세요.',
      context: '과학적 실험 데이터의 오차, 평소 성격과 다른 돌발 행동, 혹은 일시적인 정신적 혼란 상태를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '정상 궤도를 벗어난 deviation, anomaly와 유사하며, 규칙을 따르는 normality, conformity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a temporary change from the typical or expected way that something happens or someone behaves',
      synonyms: ['deviation', 'anomaly', 'irregularity'],
      antonyms: ['normality', 'regularity', 'conformity'],
      exampleSentences: [
        { en: 'His sudden outburst of anger was a temporary aberration from his usually mild-mannered personality.', ko: '그의 갑작스러운 분노 폭발은 평소 온화한 성격에서 벗어난 일시적인 이상 행동이었다.' },
        { en: 'The drop in sales this month is considered a statistical aberration rather than a long-term trend.', ko: '이번 달의 매출 하락은 장기적인 추세라기보다 통계적인 일시적 변동으로 간주된다.' },
      ],
      wordDistractors: ['Abbreviation', 'Abrasion', 'Aeration'],
      definitionDistractors: [
        'A shortened form of a word or phrase used for convenience',
        'A consistent pattern that repeats at regular intervals',
        'The process of wearing down a surface through friction',
      ],
    }
  ),
  word('abhor', '혐오하다', 7, 'verb',
    ['사랑하다', '선호하다', '환영하다', '추구하다', '그리워하다', '애호하다', '흠모하다', '숭배하다', '존경하다', '열애하다'],
    tips({
      etymology: 'ab(멀리)와 horrere(몸서리치다)가 합쳐져 \'무서워서 몸을 떨며 멀리하다\'는 뜻에서 유래했습니다.',
      visual: '징그러운 벌레를 보고 온몸에 소름이 돋아 뒤로 물러나는 모습을 상상하세요.',
      soundAlike: 'Abhor(앱호어) - \'입(Ab)을 허(hor)벌리고 싫어하다\'로 기억해 보세요.',
      context: '단순히 싫어하는 것을 넘어 도덕적으로 용납할 수 없어 몹시 혐오할 때 주로 사용합니다.',
      synonymAntonym: 'detest, loathe는 강한 혐오를 뜻하며, 반대로 adore, admire는 깊은 애정과 존경을 뜻합니다.',
    }),
    {
      definition: 'to feel a strong literal or moral hatred toward something or someone',
      synonyms: ['detest', 'loathe', 'abominate'],
      antonyms: ['adore', 'love', 'admire'],
      exampleSentences: [
        { en: 'She abhors violence in any form.', ko: '그녀는 어떤 형태의 폭력도 혐오한다.' },
        { en: 'He abhorred the idea of cheating on the exam.', ko: '그는 시험에서 부정행위를 한다는 생각 자체를 몹시 싫어했다.' },
      ],
      wordDistractors: ['Absorb', 'Abode', 'Adhere'],
      definitionDistractors: [
        'To take in or soak up a liquid or substance',
        'To cling firmly to a surface or belief',
        'To express mild disagreement with a proposal',
      ],
    }
  ),
  word('abject', '비참한', 7, 'adjective',
    ['고귀한', '당당한', '자존적인', '웅장한', '장엄한', '희망찬', '부유한', '행복한', '우아한', '품위있는'],
    tips({
      etymology: '라틴어 ab(멀리)와 ject(던지다)가 결합되어, 사회나 희망으로부터 \'멀리 내던져진\' 비참한 상태를 의미합니다.',
      visual: '차가운 길바닥에 아무렇게나 내팽개쳐진 낡고 찢어진 인형의 처량한 모습을 상상해 보세요.',
      soundAlike: 'Abject(앱젝트) - \'내던져진 객체(Object)\'처럼 사람 취급을 받지 못하는 비참한 상황을 연상하세요.',
      context: '주로 poverty(가난), failure(실패), misery(고통)와 같은 부정적인 단어 앞에 쓰여 그 정도가 극심함을 강조합니다.',
      synonymAntonym: 'miserable, wretched, hopeless는 절망적인 상태를 나타내며, 반대로 noble, proud, magnificent는 당당하고 고귀한 상태를 뜻합니다.',
    }),
    {
      definition: 'experienced or present to the maximum degree of something bad, or lacking any self-respect',
      synonyms: ['miserable', 'wretched', 'hopeless'],
      antonyms: ['noble', 'proud', 'magnificent'],
      exampleSentences: [
        { en: 'Many families in the region are still living in abject poverty.', ko: '그 지역의 많은 가족들이 여전히 극도로 비참한 빈곤 속에서 살고 있다.' },
        { en: 'The team\'s performance was an abject failure from start to finish.', ko: '그 팀의 성과는 처음부터 끝까지 처참한 실패였다.' },
      ],
      wordDistractors: ['Object', 'Abduct', 'Inject'],
      definitionDistractors: [
        'To raise a formal protest against a decision or ruling',
        'To carefully select items based on specific criteria',
        'To insert something forcefully into a confined space',
      ],
    }
  ),
  word('abridge', '축약하다', 7, 'verb',
    ['확장하다', '늘리다', '덧붙이다', '보강하다', '확대하다', '연장하다', '부연하다', '전개하다', '증폭하다', '상세화하다'],
    tips({
      etymology: '라틴어 abbreviare(짧게 하다)에서 유래했습니다. 단어 안에 bridge(다리)가 들어있어 지름길을 만드는 이미지를 연상시킵니다.',
      visual: '두꺼운 전공 서적을 핵심 요약본인 얇은 핸드북으로 압축하는 장면을 상상해 보세요.',
      soundAlike: 'Abridge(어브릿지) - \'어, 브릿지(다리)\'를 놓아 먼 길을 가로질러 시간을 단축하는 상황과 연결해 보세요.',
      context: '주로 긴 소설, 연설문, 법률 문서의 핵심 내용은 유지하면서 분량만 줄일 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'shorten, condense와 비슷하며, 반대로 내용을 늘리는 expand, lengthen과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make a book, play, or piece of writing shorter by removing some details while keeping the main meaning',
      synonyms: ['shorten', 'condense', 'abbreviate'],
      antonyms: ['expand', 'lengthen', 'enlarge'],
      exampleSentences: [
        { en: 'The novel was abridged for younger readers to make it easier to follow.', ko: '그 소설은 어린 독자들이 이해하기 쉽게 축약되었다.' },
        { en: 'The editor decided to abridge the long manuscript to fit the magazine\'s page limit.', ko: '편집자는 잡지의 페이지 제한에 맞추기 위해 긴 원고를 축약하기로 결정했다.' },
      ],
      wordDistractors: ['Bridge', 'Abrade', 'Oblige'],
      definitionDistractors: [
        'To construct a physical connection between two separate areas',
        'To add supplementary material to an existing document',
        'To translate a text from one language into another',
      ],
    }
  ),
  word('absolve', '면죄하다', 7, 'verb',
    ['기소하다', '비난하다', '유죄판결', '책임지우다', '처벌하다', '징벌', '규탄', '유죄', '질책', '고발'],
    tips({
      etymology: 'ab(멀리)와 solvere(풀다)가 합쳐져 \'묶여 있던 죄를 풀어주다\'는 뜻이 되었습니다.',
      visual: '죄수의 발목에 채워진 무거운 쇠사슬을 열쇠로 풀어주는 장면을 떠올려 보세요.',
      soundAlike: 'Absolve(앱절브) - \'다 풀브(solve)\'러서 자유롭게 해주다로 기억하세요.',
      context: '법적인 혐의를 벗겨주거나 종교적으로 죄를 사해줄 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: '동의어로는 acquit, exonerate, pardon이 있으며, 반의어로는 convict, condemn, blame이 있습니다.',
    }),
    {
      definition: 'to formally declare that someone is no longer blamed for a fault, crime, or responsibility',
      synonyms: ['acquit', 'exonerate', 'pardon'],
      antonyms: ['convict', 'condemn', 'blame'],
      exampleSentences: [
        { en: 'The court decided to absolve the defendant of all charges.', ko: '법원은 피고인의 모든 혐의를 면죄하기로 결정했다.' },
        { en: 'The priest has the authority to absolve a person of their sins.', ko: '신부는 사람의 죄를 사해줄 권한이 있다.' },
      ],
      wordDistractors: ['Observe', 'Resolve', 'Dissolve'],
      definitionDistractors: [
        'To find a solution to a difficult problem or dispute',
        'To break down a substance into smaller components',
        'To formally accuse someone of committing a crime',
      ],
    }
  ),
  word('abstain', '절제하다', 7, 'verb',
    ['참여하다', '탐닉하다', '과용하다', '집착하다', '몰두하다', '흡수하다', '몰입하다', '탐욕스럽다', '과잉하다', '방종하다'],
    tips({
      etymology: '라틴어 abs(멀리)와 tenere(잡다)가 결합되어 \'어떤 것을 잡지 않고 멀리 떨어져 있다\'는 어원을 가집니다.',
      visual: '뷔페 식당에서 맛있는 음식들이 가득하지만 건강을 위해 접시를 내려놓고 뒤돌아서는 단호한 모습을 상상해 보세요.',
      soundAlike: 'Abstain(앱스테인) - \'앞에(Ab) 스테이크(stain-steak)가 있어도 안 먹고 참는다\'는 발음을 연상하며 외워보세요.',
      context: '주로 술, 담배, 고기 같은 기호품을 멀리하거나 투표권 행사 시 기권하는 상황에서 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '무언가를 삼가는 refrain과 비슷하지만, 반대로 마음껏 즐기는 indulge와는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'to formally decline to vote either for or against a proposal or to choose not to do something that is enjoyable but often unhealthy',
      synonyms: ['refrain', 'desist', 'forgo'],
      antonyms: ['indulge', 'partake', 'consume'],
      exampleSentences: [
        { en: 'Ten members voted in favor, five against, and two abstained.', ko: '10명의 위원이 찬성했고, 5명이 반대했으며, 2명은 기권했다.' },
        { en: 'The doctor advised him to abstain from fatty foods to lower his cholesterol.', ko: '의사는 콜레스테롤을 낮추기 위해 그에게 기름진 음식을 절제하라고 권고했다.' },
      ],
      wordDistractors: ['Obtain', 'Sustain', 'Contain'],
      definitionDistractors: [
        'To acquire possession of something through effort',
        'To keep something going at a steady level over time',
        'To publicly declare support for a political candidate',
      ],
    }
  ),
  word('accolade', '영예', 7, 'noun',
    ['비난', '경멸', '퇴짜', '불명예', '오명', '부끄러움', '모욕', '경시', '무시', '혹평'],
    tips({
      etymology: '라틴어 \'ad(향해)\'와 \'collum(목)\'이 합쳐져 기사 작위 수여식에서 목을 껴안거나 어깨를 두드리는 행위에서 유래했습니다.',
      visual: '올림픽 시상대에서 금메달을 목에 걸고 관중의 뜨거운 박수를 받는 영광스러운 순간을 떠올려 보세요.',
      soundAlike: '애컬레이드(Accolade) - \'아낌없이(Acco-) 내리다(lade)\'로 기억하여 칭찬과 상을 아낌없이 내리는 장면을 연상하세요.',
      context: '주로 노벨상 같은 큰 상을 받거나, 평론가들로부터 압도적인 찬사를 받았을 때 격식 있게 사용하는 표현입니다.',
      synonymAntonym: 'honor, award와 같은 긍정적인 보상을 뜻하며, 반대로 비난을 뜻하는 criticism이나 모욕인 insult와 대조됩니다.',
    }),
    {
      definition: 'a formal expression of praise, or a prize given to someone as a sign of high respect and admiration',
      synonyms: ['honor', 'award', 'tribute'],
      antonyms: ['criticism', 'insult', 'rebuke'],
      exampleSentences: [
        { en: 'The novel received the highest accolade from literary critics around the world.', ko: '그 소설은 전 세계 문학 평론가들로부터 최고의 찬사를 받았다.' },
        { en: 'Winning the championship was the ultimate accolade for his years of hard work.', ko: '챔피언십 우승은 그의 수년간의 노고에 대한 궁극적인 영예였다.' },
      ],
      wordDistractors: ['Arcade', 'Barricade', 'Blockade'],
      definitionDistractors: [
        'A barrier set up to prevent passage or access',
        'A formal complaint filed against a public official',
        'A decorative arrangement placed at the entrance of a building',
      ],
    }
  ),
  word('acrimony', '신랄함', 7, 'noun',
    ['온화함', '우호', '애정', '화합', '부드러움', '친절', '화해', '유순', '온정', '평화'],
    tips({
      etymology: '라틴어 acer(날카로운)에서 유래하여 성질이 날카롭고 격함을 뜻합니다.',
      visual: '서로를 향해 삿대질하며 고성을 지르는 험악한 분위기의 회의실을 상상하세요.',
      soundAlike: '애크리모니 -> \'악\' 소리가 날 정도로 \'모질게\' 대하는 상황으로 기억하세요.',
      context: '주로 이혼 소송이나 정치적 논쟁처럼 감정이 극도로 상한 상황에서 쓰입니다.',
      synonymAntonym: 'bitterness와 유사하며, 평화로운 상태인 harmony와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sharp and bitter manner or spirit displayed in speech or behavior.',
      synonyms: ['bitterness', 'hostility', 'rancor'],
      antonyms: ['harmony', 'goodwill', 'benevolence'],
      exampleSentences: [
        { en: 'The divorce was marked by acrimony.', ko: '그 이혼은 격렬한 감정 싸움으로 점철되었다.' },
        { en: 'The debate was full of acrimony and personal attacks.', ko: '그 토론은 격렬한 비난과 인신공격으로 가득했다.' },
      ],
      wordDistractors: ['Alimony', 'Ceremony', 'Patrimony'],
      definitionDistractors: [
        'A financial allowance paid to a former spouse after divorce',
        'A formal public event conducted according to tradition',
        'A gentle and polite manner of addressing disagreements',
      ],
    }
  ),
  word('adamant', '완고한', 7, 'adjective',
    ['유연한', '동의하는', '수용적인', '굴복하는', '관대한', '유순한', '여유로운', '유동적인', '수용', '동의'],
    tips({
      etymology: '그리스어 \'adamas\'에서 유래되었으며, 이는 \'정복할 수 없는\' 또는 가장 단단한 물질인 \'다이아몬드\'를 뜻합니다.',
      visual: '거센 파도가 몰아쳐도 제자리에 박혀 꿈쩍도 하지 않는 거대한 바위의 이미지를 떠올려 보세요.',
      soundAlike: '\'애더먼트\'를 \'애도(슬퍼)해도 먼 산 보듯\'으로 기억하세요. 남이 아무리 호소해도 자기 고집만 피우는 모습입니다.',
      context: '단순히 고집이 센 것을 넘어, 자신의 결정이나 원칙을 절대 바꾸지 않겠다는 강한 의지를 표현할 때 사용합니다.',
      synonymAntonym: 'Inflexible과 의미가 통하며, 부드럽게 상황에 맞추는 Flexible과는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'determined not to change a decision or opinion despite attempts to persuade otherwise',
      synonyms: ['stubborn', 'inflexible', 'unyielding'],
      antonyms: ['flexible', 'compliant', 'yielding'],
      exampleSentences: [
        { en: 'She was adamant about leaving early.', ko: '그녀는 일찍 떠나겠다는 뜻을 굽히지 않았다.' },
        { en: 'He remained adamant in his refusal.', ko: '그는 거절 의사를 완강하게 유지했다.' },
      ],
      wordDistractors: ['Dormant', 'Defiant', 'Dominant'],
      definitionDistractors: [
        'Being in a state of temporary inactivity or sleep',
        'Easily persuaded to change one\'s mind or opinion',
        'Having the highest rank or greatest influence in a group',
      ],
    }
  ),
  word('adept', '능숙한', 7, 'adjective',
    ['서툰', '미숙한', '어설픈', '비능숙한', '비숙련의', '경험이부족한', '초보의', '둔한', '무능한', '서투른'],
    tips({
      etymology: '라틴어 adeptus(도달한, 획득한)에서 유래하여 어떤 기술의 정점에 도달했음을 의미합니다.',
      visual: '눈을 감고도 복잡한 기계를 척척 고쳐내는 숙련된 기술자의 손길을 상상해 보세요.',
      soundAlike: '\'어뎁트\'를 \'어디든 붙여\'만 주면 다 잘하는 만능 능력자로 연상해 보세요.',
      context: '단순히 잘하는 수준을 넘어 특정 분야에 매우 숙달되어 전문가 수준인 상태를 묘사할 때 씁니다.',
      synonymAntonym: 'proficient와 유의어이며, 철자가 비슷한 inept(서툰)는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'having a high degree of skill or knowledge in a particular area',
      synonyms: ['proficient', 'expert', 'skilful'],
      antonyms: ['inept', 'unskilled', 'clumsy'],
      exampleSentences: [
        { en: 'He is highly skilled and shows that he is adept at solving complex puzzles.', ko: '그는 매우 숙련되어 있으며 복잡한 퍼즐을 푸는 데 능숙함을 보여준다.' },
        { en: 'She became adept in multiple languages after living abroad for many years.', ko: '그녀는 수년간 해외에 거주한 후 여러 언어에 능통해졌다.' },
      ],
      wordDistractors: ['Adopt', 'Adapt', 'Inept'],
      definitionDistractors: [
        'To take on or begin to use a new method or approach',
        'To adjust to new conditions or a changed environment',
        'To be completely unfamiliar with a given subject',
      ],
    }
  ),
  word('adjunct', '부속물', 7, 'noun',
    ['핵심', '본체', '주요부', '중심', '본질', '주요', '근본', '본원', '주체', '기초'],
    tips({
      etymology: '라틴어 ad(~에)와 jungere(결합하다)가 합쳐져 \'어딘가에 덧붙여진 것\'이라는 의미를 가집니다.',
      visual: '메인 컴퓨터 본체 옆에 연결된 USB 허브나 외장 하드 같은 주변 기기를 상상해 보세요.',
      soundAlike: '\'어준트\'라고 발음하며, \'어중간하게\' 옆에 붙어 있는 보조물이라고 연상해 보세요.',
      context: '문법에서는 부사구처럼 문장의 필수 성분은 아니지만 정보를 보충하는 요소를 뜻하기도 합니다.',
      synonymAntonym: 'Supplement는 보충물을 뜻하며, Core는 그것이 없으면 안 되는 핵심을 뜻합니다.',
    }),
    {
      definition: 'A supplementary part or feature that is joined to something else but is not an essential part of it.',
      synonyms: ['appendage', 'attachment', 'supplement'],
      antonyms: ['core', 'essence', 'mainstay'],
      exampleSentences: [
        { en: 'The small storage unit was built as an adjunct to the main house.', ko: '그 작은 창고는 본채의 부속물로 지어졌다.' },
        { en: 'Online materials are often used as a useful adjunct to traditional textbooks.', ko: '온라인 자료들은 종종 전통적인 교과서의 유용한 보조물로 사용된다.' },
      ],
      wordDistractors: ['Adjust', 'Disjunct', 'Adjure'],
      definitionDistractors: [
        'The central or most important part of a system',
        'A complete replacement for an outdated component',
        'To formally request or command someone to do something',
      ],
    }
  ),
  word('admonish', '경고하다', 7, 'verb',
    ['축하하다', '칭찬하다', '장려하다', '승인하다', '용인하다', '격려하다', '추천하다', '환영하다', '방관하다', '동의하다'],
    tips({
      etymology: '라틴어 ad(향하여)와 monere(경고하다)가 합쳐져 누군가에게 주의를 준다는 의미가 되었습니다.',
      visual: '칠판 앞에서 엄한 표정으로 학생에게 검지 손가락을 흔들며 주의를 주는 교장 선생님을 떠올려 보세요.',
      soundAlike: '애드(Ad) + 모니(Moni)시: \'애도 모니터링(Moni) 시\'간에 딴짓하면 혼난다고 기억하세요.',
      context: '단순히 화를 내는 것이 아니라, 상대방의 잘못을 고쳐주기 위해 진지하게 타이르거나 훈계할 때 주로 사용합니다.',
      synonymAntonym: 'reprimand와 유사하게 꾸짖는 느낌이며, 반대로 훌륭한 일을 치하하는 praise와는 대조됩니다.',
    }),
    {
      definition: 'to advise or urge someone earnestly, or to give a firm warning or gentle scold for a fault',
      synonyms: ['reprimand', 'scold', 'chide'],
      antonyms: ['praise', 'commend', 'applaud'],
      exampleSentences: [
        { en: 'The coach had to admonish his players to stay focused after their recent loss.', ko: '코치는 최근의 패배 이후 선수들에게 집중력을 유지하라고 훈계해야 했다.' },
        { en: 'She was admonished by her supervisor for failing to meet the project deadline.', ko: '그녀는 프로젝트 마감 기한을 지키지 못해 상사로부터 경고를 받았다.' },
      ],
      wordDistractors: ['Demolish', 'Astonish', 'Abolish'],
      definitionDistractors: [
        'To completely destroy a building or structure',
        'To reward someone publicly for an outstanding achievement',
        'To grant permission for an activity to take place',
      ],
    }
  ),
  word('advent', '도래', 7, 'noun',
    ['종료', '퇴장', '소멸', '사라짐', '퇴거', '이탈', '종식', '퇴색', '소실', '퇴각'],
    tips({
      etymology: '라틴어 ad(향해서)와 venire(오다)가 결합된 단어로, 어떤 중요한 존재가 우리 쪽으로 다가온다는 의미를 담고 있습니다.',
      visual: '무대 뒤에 있던 주인공이 조명을 받으며 천천히 무대 중앙으로 걸어 나오는 장면을 상상해 보세요.',
      soundAlike: '애드벤트(Advent)를 \'애타게 기다린 이벤트\'가 드디어 시작되는 순간으로 연결하면 기억하기 쉽습니다.',
      context: '단순한 도착보다는 인공지능의 등장이나 산업 혁명처럼 역사의 흐름을 바꾸는 중대한 사건의 시작에 주로 사용됩니다.',
      synonymAntonym: '무언가 나타나는 arrival과는 유의어 관계이며, 무대에서 사라지는 departure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the first appearance or arrival of a particularly significant person, thing, or event',
      synonyms: ['arrival', 'coming', 'emergence'],
      antonyms: ['departure', 'end', 'conclusion'],
      exampleSentences: [
        { en: 'The advent of the internet changed how the world communicates.', ko: '인터넷의 도래는 세상이 소통하는 방식을 바꾸어 놓았다.' },
        { en: 'Life became much more convenient with the advent of smartphones.', ko: '스마트폰의 등장으로 생활이 훨씬 더 편리해졌다.' },
      ],
      wordDistractors: ['Advert', 'Avert', 'Prevent'],
      definitionDistractors: [
        'A public notice or announcement promoting a product',
        'The gradual decline or disappearance of a practice',
        'An official ceremony marking the end of an era',
      ],
    }
  ),
  word('adversary', '적대자', 7, 'noun',
    ['동맹', '협력자', '친구', '지지자', '동료', '동반자', '파트너', '아군', '후원자', '조력자'],
    tips({
      etymology: '라틴어 ad(향해)와 vertere(돌리다)가 결합된 단어로, 나를 향해 등을 돌리고 반대편에 서 있는 사람을 뜻합니다.',
      visual: '어두운 경기장 안에서 강렬한 조명을 받으며 서로를 매섭게 노려보는 두 권투 선수를 떠올려 보세요.',
      soundAlike: '애드버서리 -> \'애\'써서 \'버\'티며 \'서\'로 \'리\'(이)기려 싸우는 적대적인 관계를 연상해 보세요.',
      context: '스포츠 경기에서의 상대 선수뿐만 아니라, 법정에서의 피고와 원고, 전쟁 중인 국가 등 심각한 대립 관계에서 주로 쓰입니다.',
      synonymAntonym: '상대방을 뜻하는 opponent와 유사하며, 든든한 지원군을 뜻하는 ally와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A person, group, or force that opposes or attacks; a participant in a contest or a conflict.',
      synonyms: ['opponent', 'foe', 'rival'],
      antonyms: ['ally', 'friend', 'supporter'],
      exampleSentences: [
        { en: 'He saw his old business rival as a formidable adversary in the courtroom.', ko: '그는 자신의 오랜 사업 라이벌을 법정에서의 강력한 적대자로 여겼다.' },
        { en: 'To defeat such a powerful adversary, the small tribes had to form a secret alliance.', ko: '그토록 강력한 적을 물리치기 위해 작은 부족들은 비밀 동맹을 맺어야만 했다.' },
      ],
      wordDistractors: ['Advisory', 'Adversity', 'Anniversary'],
      definitionDistractors: [
        'A person who provides guidance or recommendations',
        'A difficult or unpleasant situation or condition',
        'A trusted companion who offers support in times of need',
      ],
    }
  ),
  word('aesthetic', '미적인', 7, 'adjective',
    ['추한', '비미적', '조악한', '경박한', '저속한', '비예술적', '조잡한', '결함있는', '훼손된', '불쾌한'],
    tips({
      etymology: '그리스어 aisthetikos에서 유래하여 \'감각으로 느끼는 것\' 혹은 \'지각하는 것\'이라는 의미를 담고 있습니다.',
      visual: '인스타그램의 감성적인 필터가 적용된 사진이나 완벽하게 정돈된 미술관의 전시실을 상상해 보세요.',
      soundAlike: '피부나 외모를 아름답게 관리해주는 \'에스테틱(Aesthetic)\' 샵을 떠올리면 기억하기 쉽습니다.',
      context: '주로 디자인, 건축, 예술 작품의 시각적 가치나 개인의 취향을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'artistic과 유사하며, 시각적으로 보기 흉한 상태를 뜻하는 ugly와는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to the enjoyment or study of beauty and appearance',
      synonyms: ['artistic', 'exquisite', 'tasteful'],
      antonyms: ['unattractive', 'hideous', 'grotesque'],
      exampleSentences: [
        { en: 'The building has great aesthetic appeal due to its unique design.', ko: '그 건물은 독특한 디자인 덕분에 미적으로 매우 훌륭한 매력을 지니고 있다.' },
        { en: 'She has a strong aesthetic sense and a refined eye for beauty.', ko: '그녀는 미적 감각이 매우 뛰어나며 아름다움을 보는 안목이 높다.' },
      ],
      wordDistractors: ['Ascetic', 'Athletic', 'Anesthetic'],
      definitionDistractors: [
        'Relating to physical exercise and competitive sports',
        'Characterized by severe self-discipline and abstinence',
        'A substance that causes loss of sensation or consciousness',
      ],
    }
  ),
  word('affinity', '친화력', 7, 'noun',
    ['반감', '소외', '이질', '거리감', '적대', '불편', '반목', '불화', '거부', '혐오'],
    tips({
      etymology: 'ad(향해) + fin(끝)이 합쳐져 경계를 맞대고 있을 만큼 가깝다는 뜻에서 유래했습니다.',
      visual: '자석처럼 서로 착 달라붙는 두 물체나 완벽하게 맞물리는 퍼즐 조각을 상상하세요.',
      soundAlike: '어피니티 -> \'어! 피(blood)가 니(너)랑 티(tea)나게 비슷하네\'로 기억해 보세요.',
      context: '주로 특정 분야에 대한 재능이나 취향, 혹은 사람 사이의 강한 유대감을 표현할 때 씁니다.',
      synonymAntonym: '유사어로는 attraction, kinship이 있고 반대어로는 aversion, dislike가 있습니다.',
    }),
    {
      definition: 'a spontaneous or natural liking for or sympathy with someone or something',
      synonyms: ['attraction', 'kinship', 'inclination'],
      antonyms: ['aversion', 'antipathy', 'dislike'],
      exampleSentences: [
        { en: 'She has a natural affinity for music.', ko: '그녀는 음악에 대한 타고난 친화력을 가지고 있다.' },
        { en: 'There is a strong affinity between the two cultures.', ko: '두 문화 사이에는 강한 유사성이 존재한다.' },
      ],
      wordDistractors: ['Infinity', 'Divinity', 'Dignity'],
      definitionDistractors: [
        'A limitless or endless expanse of space or time',
        'A strong feeling of opposition or resistance toward something',
        'The quality of being sacred or connected to a higher power',
      ],
    }
  ),
  word('affluent', '부유한', 7, 'adjective',
    ['가난한', '빈곤한', '결핍한', '궁핍한', '형편없는', '빈약한', '비참한', '불우한', '초라한', '부족한'],
    tips({
      etymology: '라틴어 ad(~로)와 fluere(흐르다)가 결합된 단어로, 재물이 넘쳐흐를 정도로 많다는 어원을 가지고 있습니다.',
      visual: '고급 저택의 개인 수영장에서 돈이 물처럼 찰랑거리는 이미지를 상상해 보세요.',
      soundAlike: '발음이 \'애플(Apple) 루언트\'와 비슷하므로, 애플 주식을 많이 보유한 부자를 연상하면 기억하기 쉽습니다.',
      context: '개인의 재산 상태뿐만 아니라, 생활 수준이 높은 지역사회나 경제적으로 풍요로운 국가를 수식할 때 주로 사용됩니다.',
      synonymAntonym: 'Wealthy와 유사하지만 더 격식 있는 표현이며, 반대말로는 경제적으로 완전히 고갈된 상태인 Destitute가 있습니다.',
    }),
    {
      definition: 'possessing a great deal of money, property, or other valuable assets',
      synonyms: ['wealthy', 'prosperous', 'opulent'],
      antonyms: ['poor', 'impoverished', 'destitute'],
      exampleSentences: [
        { en: 'They live in an affluent neighborhood where every house has a private pool.', ko: '그들은 모든 집마다 개인 수영장이 딸린 부유한 동네에 살고 있다.' },
        { en: 'The club caters to affluent clients who are looking for exclusive luxury services.', ko: '그 클럽은 독점적인 고급 서비스를 찾는 부유한 고객들을 대상으로 한다.' },
      ],
      wordDistractors: ['Effluent', 'Fluent', 'Influent'],
      definitionDistractors: [
        'Able to speak or write a language with ease and accuracy',
        'Liquid waste discharged from a factory or sewage system',
        'Lacking the basic necessities for a comfortable life',
      ],
    }
  ),
  word('aggregate', '합계하다', 7, 'verb',
    ['분산하다', '나누다', '개별화하다', '해체하다', '분리하다', '분해하다', '흩뜨리다', '분할하다', '쪼개다', '제외하다'],
    tips({
      etymology: '라틴어 \'ad(~로)\'와 \'grex(무리)\'가 결합된 단어로, 흩어져 있는 것들을 한 무리로 모은다는 어원을 가지고 있습니다.',
      visual: '바닥에 흩어진 수많은 작은 퍼즐 조각들을 빗자루로 쓸어 한데 모으는 장면을 상상해 보세요.',
      soundAlike: '\'애(아이)들이 그래(greg)서 다 모였다\'라고 소리 내어 읽으며 모두가 한곳에 합쳐지는 이미지를 떠올려 보세요.',
      context: '주로 통계학이나 경제학에서 여러 개별적인 수치나 데이터를 하나로 합산하여 전체 값을 구할 때 자주 쓰입니다.',
      synonymAntonym: '여러 개를 하나로 묶는 combine과 유사하며, 반대로 뿔뿔이 흩어지게 만드는 disperse와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To collect or gather many separate items into a single mass or total sum.',
      synonyms: ['accumulate', 'amass', 'cluster'],
      antonyms: ['disperse', 'scatter', 'disintegrate'],
      exampleSentences: [
        { en: 'The website allows users to aggregate news from various sources into one feed.', ko: '그 웹사이트는 사용자들이 다양한 출처의 뉴스를 하나의 피드로 모을 수 있게 해준다.' },
        { en: 'The scores from all rounds will be aggregated to determine the final winner.', ko: '최종 우승자를 결정하기 위해 모든 라운드의 점수가 합산될 것이다.' },
      ],
      wordDistractors: ['Aggravate', 'Segregate', 'Irrigate'],
      definitionDistractors: [
        'To make a problem or situation worse or more serious',
        'To separate or divide people into distinct groups',
        'To distribute individual items evenly across a surface',
      ],
    }
  ),
  word('agile', '민첩한', 7, 'adjective',
    ['둔한', '느린', '어색한', '경직된', '부자유스러운', '우둔한', '둔감한', '느릿한', '미숙한', '서툰'],
    tips({
      etymology: '라틴어 agilis에서 유래되었으며, \'움직이기 쉬운\' 또는 \'행동이 빠른\'이라는 의미를 담고 있습니다.',
      visual: '장애물을 요리조리 피하며 나무 사이를 번개처럼 빠르게 옮겨 다니는 다람쥐의 움직임을 상상해 보세요.',
      soundAlike: '\'애질\' 발음이 \'애가 질주한다\'와 비슷하므로, 어린아이가 운동장을 가볍고 빠르게 뛰어가는 모습을 연상하세요.',
      context: '신체적인 움직임뿐만 아니라, 급변하는 시장 상황에 빠르게 대처하는 소프트웨어 개발 방식이나 기업 경영 스타일을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'nimble, quick과 같이 빠르다는 단어와 친하며, 반대로 몸이 무거운 clumsy나 뻣뻣한 stiff와는 대조를 이룹니다.',
    }),
    {
      definition: 'Able to move with speed and ease, or having a resourceful and adaptable mental nature.',
      synonyms: ['nimble', 'quick', 'lithe'],
      antonyms: ['clumsy', 'stiff', 'sluggish'],
      exampleSentences: [
        { en: 'The team needs to be agile to adapt to the rapidly changing market conditions.', ko: '급변하는 시장 상황에 적응하기 위해서 팀은 민첩해질 필요가 있다.' },
        { en: 'She is remarkably agile for her age, performing yoga poses with ease.', ko: '그녀는 나이에 비해 놀랄 만큼 민첩해서 요가 동작들을 쉽게 소화한다.' },
      ],
      wordDistractors: ['Fragile', 'Fertile', 'Futile'],
      definitionDistractors: [
        'Easily broken or damaged due to delicate construction',
        'Slow and methodical in movement or decision-making',
        'Producing an abundance of vegetation or offspring',
      ],
    }
  ),
  word('alchemy', '연금술', 7, 'noun',
    ['과학', '실증', '이성', '분석', '논리', '실험', '객관', '검증', '해부', '사실'],
    tips({
      etymology: '아랍어 \'al-kimiya\'에서 유래했으며, 비금속을 금으로 바꾸려는 고대 화학 기술을 뜻합니다.',
      visual: '어두운 실험실에서 보글보글 끓는 플라스크를 들고 금을 만들려는 마법사 같은 학자를 상상하세요.',
      soundAlike: '알케미 -> \'알(egg)을 캐(dig)서 미(gold)로 만드는 기술\'로 연상해 보세요.',
      context: '현대에는 평범한 것을 특별한 것으로 바꾸는 신비로운 힘이나 과정을 비유할 때 씁니다.',
      synonymAntonym: 'transmutation은 물질의 변형을, magic은 신비로운 힘을 강조하며, science는 이와 대조되는 체계적인 학문을 뜻합니다.',
    }),
    {
      definition: 'A medieval chemical philosophy and practice focused on the transmutation of base metals into gold and the discovery of a universal solvent.',
      synonyms: ['transmutation', 'sorcery', 'wizardry'],
      antonyms: ['science', 'empiricism', 'fact'],
      exampleSentences: [
        { en: 'The project seemed like corporate alchemy, turning a failing brand into a market leader.', ko: '그 프로젝트는 실패하던 브랜드를 시장 선두주자로 바꾼 기업의 연금술처럼 보였다.' },
        { en: 'Medieval alchemy preceded modern chemistry and laid the groundwork for scientific experimentation.', ko: '중세의 연금술은 현대 화학의 전신이 되었으며 과학적 실험의 기틀을 마련했다.' },
      ],
      wordDistractors: ['Allergy', 'Anarchy', 'Archery'],
      definitionDistractors: [
        'The systematic study of natural phenomena through observation',
        'A state of disorder resulting from the absence of authority',
        'The sport or skill of shooting arrows with a bow',
      ],
    }
  ),
  word('allegiance', '충성', 7, 'noun',
    ['반역', '배신', '변절', '이탈', '저버림', '배반', '불충', '이심', '거부', '항명'],
    tips({
      etymology: '라틴어 ad(향해)와 liege(군주)가 결합된 단어로, 신하가 자신의 주군에게 바치는 절대적인 의무와 복종에서 유래했습니다.',
      visual: '중세 기사가 왕의 발 앞에 무릎을 꿇고 자신의 검을 바치며 영원한 신의를 약속하는 엄숙한 의식을 상상해 보세요.',
      soundAlike: '발음이 \'얼리전스\'와 유사하므로, \'어울리는(얼리) 전사(전스)의 충성심\'으로 연결하여 기억하면 쉽습니다.',
      context: '단순한 친밀감을 넘어 국가에 대한 충성 맹세(Pledge of Allegiance)나 정치적 정당, 종교적 신념에 대한 확고한 지지를 표현할 때 쓰입니다.',
      synonymAntonym: 'Loyalty보다 격식 있고 공식적인 의무감을 강조하며, 반대말로는 국가나 조직을 저버리는 Treason이나 Treachery가 있습니다.',
    }),
    {
      definition: 'A person\'s continued support and devotion to a particular leader, country, or belief system.',
      synonyms: ['loyalty', 'fidelity', 'devotion'],
      antonyms: ['treason', 'disloyalty', 'treachery'],
      exampleSentences: [
        { en: 'New citizens are required to swear an oath of allegiance to their adopted country.', ko: '새로운 시민들은 그들이 선택한 국가에 대해 충성 서약을 해야 한다.' },
        { en: 'The soldiers refused to switch their allegiance even when the regime fell.', ko: '군인들은 정권이 무너졌을 때조차 그들의 충성 대상을 바꾸기를 거부했다.' },
      ],
      wordDistractors: ['Allegation', 'Alliance', 'Elegance'],
      definitionDistractors: [
        'A claim or assertion that someone has done something wrong',
        'An agreement between nations for mutual benefit in trade',
        'A formal gathering of people to celebrate an occasion',
      ],
    }
  ),
  word('alleviate', '완화하다', 7, 'verb',
    ['악화시키다', '가중시키다', '심화하다', '격화하다', '증대하다', '과장하다', '괴롭히다', '자극하다', '부추기다', '해치다'],
    tips({
      etymology: '라틴어 ad(~으로)와 levis(가벼운)가 결합된 단어로, 무거운 고통이나 짐을 가볍게 만들어준다는 어원을 가지고 있습니다.',
      visual: '어깨를 짓누르던 무거운 배낭을 누군가 뒤에서 살짝 들어 올려주어 몸이 가벼워지는 장면을 상상해 보세요.',
      soundAlike: '단어의 앞부분 \'Allev-\'가 \'올리브\'와 비슷하므로, 상처에 올리브유를 발라 통증을 완화한다고 연상해 보세요.',
      context: '주로 육체적 통증, 정신적 스트레스, 혹은 교통 체증이나 빈곤 같은 사회적 난제를 줄일 때 사용됩니다.',
      synonymAntonym: '고통을 덜어주는 relieve와 비슷하지만, 상황을 악화시키는 aggravate와는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'to make a painful or difficult situation less severe or more bearable',
      synonyms: ['relieve', 'ease', 'mitigate'],
      antonyms: ['aggravate', 'exacerbate', 'worsen'],
      exampleSentences: [
        { en: 'The doctor prescribed some medication to help alleviate the patient\'s back pain.', ko: '의사는 환자의 허리 통증을 완화하는 데 도움이 되도록 약을 처방했습니다.' },
        { en: 'A new highway was built to alleviate the heavy traffic congestion in the city center.', ko: '도심의 심각한 교통 정체를 완화하기 위해 새로운 고속도로가 건설되었습니다.' },
      ],
      wordDistractors: ['Abbreviate', 'Aggravate', 'Elevate'],
      definitionDistractors: [
        'To raise something to a higher position or level',
        'To make a problem significantly worse over time',
        'To shorten a word or phrase for convenience',
      ],
    }
  ),
  word('amalgamate', '합병하다', 7, 'verb',
    ['분리하다', '해체하다', '분할하다', '나누다', '분산시키다', '독립시키다', '해산하다', '쪼개다', '구분하다', '단절하다'],
    tips({
      etymology: '수은과 다른 금속을 섞어 만드는 합금인 \'아말감(amalgam)\'에서 유래하여, 여러 요소를 완전히 하나로 녹여 합치는 것을 의미합니다.',
      visual: '서로 다른 색깔의 진흙 덩어리들이 하나로 뭉쳐져 거대한 하나의 반죽이 되는 장면을 상상해 보세요.',
      soundAlike: '어멀거메이트 -> \'어머! 거(거기) 메이트(mate, 친구)랑 합쳤네\'라고 연상하며 외우면 쉽습니다.',
      context: '비즈니스 뉴스에서 기업 합병을 다루거나, 여러 부서나 아이디어를 하나로 통합하는 공식적인 상황에서 자주 쓰입니다.',
      synonymAntonym: 'Merge와 유사하지만 더 물리적이거나 구조적인 결합을 강조하며, Separate나 Divide와는 정반대의 개념입니다.',
    }),
    {
      definition: 'to join together different elements, such as companies or ideas, to create a single integrated entity',
      synonyms: ['merge', 'unite', 'consolidate'],
      antonyms: ['separate', 'disconnect', 'disintegrate'],
      exampleSentences: [
        { en: 'The two small schools decided to amalgamate into a single institution.', ko: '그 두 작은 학교들은 하나의 기관으로 합병하기로 결정했다.' },
        { en: 'The editor tried to amalgamate various styles of writing into a cohesive book.', ko: '편집자는 다양한 글쓰기 스타일을 하나의 응집력 있는 책으로 통합하려고 노력했다.' },
      ],
      wordDistractors: ['Exaggerate', 'Elaborate', 'Accumulate'],
      definitionDistractors: [
        'To describe something as larger or more important than it really is',
        'To divide a unified entity into separate distinct parts',
        'To explain something in greater detail or complexity',
      ],
    }
  ),
  word('ambivalent', '양가적인', 7, 'adjective',
    ['단호한', '확신 있는', '결정적인', '명확한', '확정된', '단정적인', '고정된', '일관된', '확고한', '뚜렷한'],
    tips({
      etymology: 'ambi(양쪽)와 val(가치)이 합쳐져 두 가지 가치 사이에서 갈등함을 뜻합니다.',
      visual: '저울의 양쪽 무게가 똑같아 어느 한쪽으로 기울지 못하고 수평을 유지하며 흔들리는 모습.',
      soundAlike: '앰비벌런트, \'안비밀(Am-bi)\'인데 말할까 말까 망설이는 양가적인 마음으로 기억하세요.',
      context: '짜장면과 짬뽕 사이에서 고민하는 것처럼 두 가지 선택지 사이에서 결정을 못 내릴 때 씁니다.',
      synonymAntonym: 'synonyms는 mixed, conflicting이며 antonyms는 decisive, certain, resolute입니다.',
    }),
    {
      definition: 'having mixed feelings or contradictory ideas about something or someone',
      synonyms: ['conflicting', 'equivocal', 'uncertain'],
      antonyms: ['decisive', 'unequivocal', 'resolute'],
      exampleSentences: [
        { en: 'She felt ambivalent about the job offer, torn between excitement and fear.', ko: '그녀는 일자리 제안에 대해 설렘과 두려움 사이에서 양가적인 감정을 느꼈다.' },
        { en: 'He remained ambivalent toward the new policy due to its potential risks and benefits.', ko: '그는 새로운 정책의 잠재적 위험과 이점 때문에 양가적인 태도를 유지했다.' },
      ],
      wordDistractors: ['Equivalent', 'Benevolent', 'Prevalent'],
      definitionDistractors: [
        'Equal in value, function, or meaning to something else',
        'Having a firm and unwavering opinion about a matter',
        'Showing kindness and generosity toward others',
      ],
    }
  ),
  word('amiable', '다정한', 7, 'adjective',
    ['냉담한', '무뚝뚝한', '적대적인', '딱딱한', '불친절한', '냉소적인', '거만한', '무례한', '냉혹한', '까칠한'],
    tips({
      etymology: '라틴어 amicus(친구)에서 유래하여 친구처럼 대하기 편하고 따뜻하다는 의미를 담고 있습니다.',
      visual: '처음 보는 사람에게도 환하게 웃으며 먼저 인사를 건네는 친절한 이웃의 표정을 떠올려 보세요.',
      soundAlike: '에이미어블, \'에이미(Amy)\'라는 이름을 가진 다정한 성격의 친구를 상상하면 기억하기 쉽습니다.',
      context: '단순히 착한 것을 넘어 타인과 원만하게 지내고 호감을 주는 성품을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '친근한 affable과 유의어이며, 적대적인 hostile이나 무례한 rude와는 반대되는 개념입니다.',
    }),
    {
      definition: 'possessing a friendly, pleasant, and good-natured manner toward others',
      synonyms: ['affable', 'genial', 'cordial'],
      antonyms: ['hostile', 'disagreeable', 'surly'],
      exampleSentences: [
        { en: 'The new neighbor turned out to be a very amiable person who helped everyone.', ko: '새로 이사 온 이웃은 모두를 도와주는 매우 다정한 사람으로 밝혀졌다.' },
        { en: 'Despite their differences, the two rivals maintained an amiable conversation.', ko: '서로의 차이점에도 불구하고, 두 라이벌은 화기애애하고 다정한 대화를 유지했다.' },
      ],
      wordDistractors: ['Amicable', 'Amenable', 'Admirable'],
      definitionDistractors: [
        'Willing to cooperate or accept suggestions from others',
        'Deserving respect or approval for outstanding qualities',
        'Cold and distant in manner when dealing with people',
      ],
    }
  ),
  word('amnesty', '사면', 7, 'noun',
    ['처벌', '징벌', '기소', '유죄', '규탄', '제재', '징계', '과벌', '구속', '처단'],
    tips({
      etymology: '그리스어 amnestia(망각)에서 유래하여 과거의 잘못을 잊어주고 용서한다는 의미를 담고 있습니다.',
      visual: '굳게 닫혀 있던 감옥 문이 활짝 열리고 수감자들이 햇살을 받으며 밖으로 걸어 나오는 모습입니다.',
      soundAlike: '국제 인권 단체인 \'국제 앰네스티(Amnesty International)\'의 명칭을 떠올리면 기억하기 쉽습니다.',
      context: '주로 정부나 국가 원수가 정치범이나 특정 집단의 죄를 공식적으로 면제해 줄 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: 'pardon과 유사하게 용서를 뜻하지만, 반대로 유죄 판결을 뜻하는 conviction이나 처벌인 punishment와는 대조됩니다.',
    }),
    {
      definition: 'An official decision by a government to forgive people who have committed particular crimes, especially political ones.',
      synonyms: ['pardon', 'clemency', 'absolution'],
      antonyms: ['conviction', 'penalty', 'punishment'],
      exampleSentences: [
        { en: 'The government granted amnesty to political prisoners as a gesture of reconciliation.', ko: '정부는 화해의 제스처로 정치범들에게 사면을 부여했다.' },
        { en: 'A general amnesty was declared for all those who had fled the country during the conflict.', ko: '분쟁 기간 중 해외로 도피했던 모든 사람들에게 일반 사면이 선포되었다.' },
      ],
      wordDistractors: ['Amnesia', 'Dynasty', 'Modesty'],
      definitionDistractors: [
        'A medical condition involving partial or total memory loss',
        'A severe penalty imposed by a court of law',
        'A formal investigation into the cause of a public incident',
      ],
    }
  ),
  word('ample', '풍부한', 7, 'adjective',
    ['부족한', '빈약한', '미미한', '궁핍한', '희소한', '결핍된', '적은', '모자란', '협소한', '제한된'],
    tips({
      etymology: '라틴어 amplus에서 유래되었으며, 이는 \'넓은\' 또는 \'큰\'을 의미하여 공간이나 양이 넉넉함을 나타냅니다.',
      visual: '수확철에 커다란 창고가 곡식으로 가득 차서 문이 잘 닫히지 않을 정도로 풍성한 장면을 떠올려 보세요.',
      soundAlike: '화장품 \'앰플(Ample)\' 한 병에 고농축 영양 성분이 아주 풍부하게 들어있다고 연상하면 기억하기 쉽습니다.',
      context: '단순히 \'충분한\' 상태를 넘어, 어떤 목적을 달성하고도 남을 만큼 여유가 있는 시간, 공간, 증거 등을 묘사할 때 씁니다.',
      synonymAntonym: '풍족함을 뜻하는 abundant와 유사하며, 아주 적거나 모자람을 뜻하는 meager와는 반대되는 개념입니다.',
    }),
    {
      definition: 'providing more than what is needed or expected in size, scope, or capacity',
      synonyms: ['abundant', 'plentiful', 'copious'],
      antonyms: ['scarce', 'meager', 'insufficient'],
      exampleSentences: [
        { en: 'The investigators found ample evidence to prove the suspect\'s guilt.', ko: '수사관들은 용의자의 유죄를 입증할 풍부한 증거를 찾아냈다.' },
        { en: 'There is no need to rush as we have ample time before the flight departs.', ko: '비행기 이륙 전까지 시간이 충분하므로 서두를 필요가 없다.' },
      ],
      wordDistractors: ['Sample', 'Trample', 'Supple'],
      definitionDistractors: [
        'A small part taken from a larger whole for testing',
        'Barely enough to meet the minimum requirement',
        'To crush something underfoot by walking heavily on it',
      ],
    }
  ),
  word('analogy', '비유', 7, 'noun',
    ['실체', '직설', '사실', '본문', '원문', '실사', '정확', '문자', '실제', '직역'],
    tips({
      etymology: '그리스어 ana(비례하는)와 logos(이성/말)가 결합되어, 두 사물 사이의 논리적 비율이나 관계가 닮았음을 뜻하게 되었습니다.',
      visual: 'A:B = C:D 처럼 서로 다른 두 쌍이 같은 논리적 구조로 연결되어 있는 비례식 기호를 떠올려 보세요.',
      soundAlike: '\'어날로지\'를 \'어느 논리(Ana-logy)\'가 서로 닮았는지 따져보는 것이라고 연상하면 기억하기 쉽습니다.',
      context: '과학자가 복잡한 원자의 구조를 태양계에 빗대어 설명할 때처럼, 생소한 것을 익숙한 것에 대조할 때 주로 사용합니다.',
      synonymAntonym: '유사점을 찾는 comparison, metaphor와 유의어이며, 차이점이나 문자 그대로의 의미를 뜻하는 difference, literalness와 반대됩니다.',
    }),
    {
      definition: 'A comparison of two otherwise unlike things based on resemblance of a particular aspect.',
      synonyms: ['comparison', 'metaphor', 'parallel'],
      antonyms: ['difference', 'contrast', 'literalness'],
      exampleSentences: [
        { en: 'She used a simple analogy to explain how the human heart works like a pump.', ko: '그녀는 인간의 심장이 어떻게 펌프처럼 작동하는지 설명하기 위해 간단한 비유를 사용했다.' },
        { en: 'The analogy between the brain and a computer helps students understand data processing.', ko: '뇌와 컴퓨터 사이의 비유는 학생들이 데이터 처리 과정을 이해하는 데 도움을 준다.' },
      ],
      wordDistractors: ['Allergy', 'Eulogy', 'Apology'],
      definitionDistractors: [
        'A speech given in praise of someone who has recently died',
        'An exact word-for-word reproduction of a written text',
        'A formal expression of regret for having caused offense',
      ],
    }
  ),
  word('anarchy', '무정부', 7, 'noun',
    ['질서', '법치', '통제', '통치', '규율', '규칙', '정부', '체제', '법률', '안정'],
    tips({
      etymology: '그리스어 \'an(없는)\'과 \'arkhos(통치자)\'가 결합되어, 다스리는 사람이 없는 상태를 의미합니다.',
      visual: '신호등이 모두 꺼진 교차로에서 자동차들이 서로 엉켜 아수라장이 된 모습을 상상해 보세요.',
      soundAlike: '\'애너키\'라고 발음되는데, \'애(An)가 키(Archy)\'를 잡고 배를 운전하면 통제가 안 되어 혼란스럽다고 기억하세요.',
      context: '주로 전쟁이나 혁명 직후, 공권력이 사라져 법보다 힘이 우선시되는 사회적 혼란을 설명할 때 쓰입니다.',
      synonymAntonym: 'Chaos와 Lawlessness는 무법천지를 뜻하며, 반대로 Order나 Stability는 안정된 체제를 뜻합니다.',
    }),
    {
      definition: 'A situation in which there is no organization or control, especially in a society, because there is no effective government.',
      synonyms: ['chaos', 'lawlessness', 'disorder'],
      antonyms: ['order', 'government', 'stability'],
      exampleSentences: [
        { en: 'The sudden withdrawal of troops left the country in a state of total anarchy.', ko: '갑작스러운 군대 철수는 그 나라를 완전한 무정부 상태에 빠뜨렸다.' },
        { en: 'Without clear rules, the classroom would quickly descend into anarchy.', ko: '명확한 규칙이 없다면 교실은 금방 난장판이 될 것이다.' },
      ],
      wordDistractors: ['Monarchy', 'Archery', 'Ancestry'],
      definitionDistractors: [
        'A system of government ruled by a single hereditary leader',
        'A well-organized society with strict laws and regulations',
        'The study of family lineage and historical heritage',
      ],
    }
  ),
  word('animosity', '적의', 7, 'noun',
    ['우호', '친화', '화해', '친절', '애정', '협력', '우정', '조화', '사랑', '호감'],
    tips({
      etymology: '라틴어 animus(마음, 정신)에서 유래했으나, 현대에는 \'격앙된 적대감\'이라는 부정적인 의미로 굳어졌습니다.',
      visual: '두 사람이 서로를 쏘아보며 주먹을 꽉 쥐고 있는 긴장된 분위기를 상상해 보세요.',
      soundAlike: '애니모시티, \'애니(Ani)가 못(Mo) 살게\' 굴어서 생기는 강한 미움이라고 기억하면 쉽습니다.',
      context: '오랜 갈등이나 원한으로 인해 마음속 깊이 자리 잡은 강한 적대감을 표현할 때 주로 사용합니다.',
      synonymAntonym: 'Hostility와 유사하며, 반대말로는 우호적인 관계를 뜻하는 Goodwill이나 Amity가 있습니다.',
    }),
    {
      definition: 'A strong feeling of dislike, ill will, or resentment directed towards someone or something.',
      synonyms: ['hostility', 'hatred', 'enmity'],
      antonyms: ['friendship', 'goodwill', 'amity'],
      exampleSentences: [
        { en: 'The long-standing animosity between the two families finally ended with a peaceful agreement.', ko: '두 가문 사이의 오래된 적의는 마침내 평화로운 합의로 끝이 났다.' },
        { en: 'He felt no animosity toward his former rival after the competition was over.', ko: '그는 경기가 끝난 후 이전 라이벌에 대해 전혀 적대감을 느끼지 않았다.' },
      ],
      wordDistractors: ['Anonymity', 'Curiosity', 'Generosity'],
      definitionDistractors: [
        'The state of being unknown or unidentifiable to others',
        'A warm and friendly feeling toward someone you admire',
        'An eager desire to learn about or know something new',
      ],
    }
  ),
  word('anomaly', '이상', 7, 'noun',
    ['정상', '규칙', '표준', '전형', '예상', '일반', '상식', '평범', '일관', '보통'],
    tips({
      etymology: '그리스어 \'anomalos\'에서 유래하며, \'a-\'(부정)와 \'homalos\'(고른, 평평한)가 결합되어 울퉁불퉁하거나 고르지 못한 상태를 뜻합니다.',
      visual: '일렬로 늘어선 똑같은 모양의 톱니바퀴들 사이에서 혼자만 반대 방향으로 돌고 있는 톱니바퀴를 상상해 보세요.',
      soundAlike: '\'어? 놀라니(Ano-)?\'라고 묻는 것처럼, 평소와 너무 다른 이상한 현상이 나타나 깜짝 놀라게 하는 상황을 떠올려 보세요.',
      context: '천문학에서 행성의 궤도가 어긋나거나, 컴퓨터 보안 시스템에서 평소와 다른 비정상적인 접속 패턴이 감지될 때 자주 사용됩니다.',
      synonymAntonym: '정상적인 상태를 뜻하는 norm, standard와 반대되며, 불규칙함을 뜻하는 irregularity와 결이 같습니다.',
    }),
    {
      definition: 'A person or thing that is different from what is ordinary, expected, or considered typical.',
      synonyms: ['irregularity', 'deviation', 'abnormality'],
      antonyms: ['norm', 'standard', 'regularity'],
      exampleSentences: [
        { en: 'The researchers identified a genetic anomaly that explains the rare condition.', ko: '연구원들은 그 희귀 질환을 설명해 주는 유전자 이상을 발견했다.' },
        { en: 'A sudden drop in temperature during the summer is a climatic anomaly.', ko: '여름철에 기온이 갑자기 떨어지는 것은 기후 이상 현상이다.' },
      ],
      wordDistractors: ['Anatomy', 'Analogy', 'Autonomy'],
      definitionDistractors: [
        'The scientific study of the structure of living organisms',
        'A predictable and recurring pattern observed in data',
        'The right or condition of self-governance in a region',
      ],
    }
  ),
  word('antagonist', '적대자', 7, 'noun',
    ['동맹', '지지자', '동료', '협력자', '친구', '파트너', '아군', '후원자', '조력자', '동반자'],
    tips({
      etymology: '그리스어 \'anti(반대)\'와 \'agon(투쟁/경쟁)\'이 결합되어 \'상대방과 맞서 싸우는 사람\'이라는 뜻을 가집니다.',
      visual: '배트맨 영화에서 주인공의 정의로운 행동을 사사건건 방해하고 괴롭히는 조커와 같은 악당의 이미지를 떠올려 보세요.',
      soundAlike: '\'앤태거니스트\'의 앞부분이 \'안태(반대)\'와 비슷하므로, 주인공의 뜻에 \'반대로 가는 사람\'이라고 연상하면 쉽습니다.',
      context: '문학이나 영화 비평에서 주인공인 프로타고니스트(Protagonist)에 대립하여 갈등을 일으키는 핵심 인물을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '경쟁자인 rival과 동의어이며, 반대말로는 든든한 조력자를 뜻하는 ally나 주인공인 protagonist가 있습니다.',
    }),
    {
      definition: 'A person who actively opposes or is hostile to someone or something; an adversary in a conflict.',
      synonyms: ['adversary', 'opponent', 'rival'],
      antonyms: ['ally', 'supporter', 'protagonist'],
      exampleSentences: [
        { en: 'The hero faced his main antagonist in a final, decisive battle.', ko: '영웅은 최후의 결정적인 전투에서 자신의 주된 적대자와 맞섰다.' },
        { en: 'In many classic stories, the antagonist is driven by a desire for revenge.', ko: '많은 고전 이야기에서 적대자는 복수심에 의해 움직인다.' },
      ],
      wordDistractors: ['Protagonist', 'Agonist', 'Antithesis'],
      definitionDistractors: [
        'The main character who drives the story forward',
        'A neutral observer who does not participate in conflicts',
        'A substance that triggers a physiological response in the body',
      ],
    }
  ),
  word('apathy', '무관심', 7, 'noun',
    ['열정', '관심', '열의', '참여', '열망', '호기심', '열중', '주의', '공감', '애정'],
    tips({
      etymology: '접두사 a-(없음)와 어근 path(감정)가 결합되어 \'감정이 없는 상태\'를 의미합니다.',
      visual: '중요한 뉴스나 주변의 고통을 보고도 아무런 표정 변화 없이 무표정하게 앉아 있는 사람을 떠올려 보세요.',
      soundAlike: '애퍼시(Apathy)는 \'애가 퍼질러(pathy) 자느라\' 세상만사에 아무런 신경을 쓰지 않는 모습으로 연상해 보세요.',
      context: '정치나 사회 문제에 대한 시민들의 냉담함을 표현할 때 \'voter apathy(유권자 무관심)\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: 'indifference와 유의어이며, 반대말은 가슴속에서 우러나오는 뜨거운 열정을 뜻하는 enthusiasm입니다.',
    }),
    {
      definition: 'A state of having no interest, enthusiasm, or concern about something.',
      synonyms: ['indifference', 'lethargy', 'detachment'],
      antonyms: ['enthusiasm', 'passion', 'interest'],
      exampleSentences: [
        { en: 'Widespread voter apathy led to a record low turnout in the recent election.', ko: '광범위한 유권자 무관심이 최근 선거에서 역대 최저 투표율을 기록하게 했습니다.' },
        { en: 'The manager was worried about the growing apathy among the employees.', ko: '매니저는 직원들 사이에 퍼지는 무관심에 대해 우려하고 있었습니다.' },
      ],
      wordDistractors: ['Empathy', 'Sympathy', 'Antipathy'],
      definitionDistractors: [
        'The ability to understand and share the feelings of another',
        'A deep and passionate enthusiasm for a particular cause',
        'Feelings of pity and sorrow for someone else\'s misfortune',
      ],
    }
  ),
  word('appease', '달래다', 7, 'verb',
    ['도발하다', '격분시키다', '화나게하다', '자극하다', '선동하다', '촉발하다', '괴롭히다', '무시하다', '비난하다', '공격하다'],
    tips({
      etymology: '라틴어 ad(~에)와 pax(평화)가 결합된 단어로, 누군가를 평화로운 상태로 유도한다는 어원을 가지고 있습니다.',
      visual: '울고 있는 아이에게 사탕을 건네주어 울음을 그치게 하고 기분을 맞춰주는 모습을 상상해 보세요.',
      soundAlike: '\'어피즈\'를 \'애 피자\'로 연상하여, 우는 아이에게 피자를 사주며 기분을 달래주는 상황으로 기억하면 쉽습니다.',
      context: '정치적 양보를 하거나 고객의 불만을 잠재우기 위해 요구사항을 들어주는 상황에서 자주 사용됩니다.',
      synonymAntonym: 'pacify, placate와 유사하며, 반대로 상황을 악화시키거나 화를 돋우는 provoke와는 대조적입니다.',
    }),
    {
      definition: 'to make someone less angry or stop them from causing trouble by giving them what they want',
      synonyms: ['pacify', 'placate', 'mollify'],
      antonyms: ['provoke', 'inflame', 'aggravate'],
      exampleSentences: [
        { en: 'The manager tried to appease the angry customer with a full refund.', ko: '매니저는 전액 환불로 화난 고객을 달래려 노력했다.' },
        { en: 'He made concessions to appease the protesters and prevent further conflict.', ko: '그는 시위자들을 달래고 더 이상의 갈등을 막기 위해 양보를 했다.' },
      ],
      wordDistractors: ['Appeal', 'Appear', 'Applause'],
      definitionDistractors: [
        'To make a formal request to a higher authority',
        'To deliberately provoke someone into a hostile reaction',
        'To come into view or become visible to others',
      ],
    }
  ),
  word('apprehend', '체포하다', 7, 'verb',
    ['석방하다', '놓아주다', '해제하다', '면제하다', '방면하다', '허가하다', '탈출하다', '보호하다', '용서하다', '방관하다'],
    tips({
      etymology: '라틴어 ad(~쪽으로)와 prehendere(붙잡다)가 결합되어, 누군가를 향해 손을 뻗어 꽉 붙잡는다는 의미에서 유래했습니다.',
      visual: '경찰관이 도주하는 범인의 뒷덜미를 낚아채어 수갑을 채우는 강렬한 체포 현장을 상상해 보세요.',
      soundAlike: '범인이 도망가지 못하게 \'앞(Appre)\'을 \'핸(hend)\'들로 가로막아 체포하는 상황으로 기억하면 쉽습니다.',
      context: '뉴스나 신문 기사 등 공식적인 수사 보고에서 범인을 검거했다는 소식을 전할 때 주로 사용하는 격식 있는 단어입니다.',
      synonymAntonym: 'arrest나 capture와 비슷하게 쓰이지만, 반대로 가두었던 사람을 풀어줄 때는 release나 free를 사용합니다.',
    }),
    {
      definition: 'to catch and take someone into police custody, especially for breaking the law',
      synonyms: ['arrest', 'capture', 'seize'],
      antonyms: ['release', 'free', 'liberate'],
      exampleSentences: [
        { en: 'The suspect was apprehended at the border while trying to flee the country.', ko: '용의자는 국외로 도주하려던 중 국경에서 체포되었다.' },
        { en: 'Authorities managed to apprehend the thief within hours of the robbery.', ko: '당국은 강도 사건 발생 몇 시간 만에 도둑을 검거하는 데 성공했다.' },
      ],
      wordDistractors: ['Comprehend', 'Reprehend', 'Apprehensive'],
      definitionDistractors: [
        'To fully understand the meaning of something complex',
        'To set someone free from legal custody or confinement',
        'To express strong disapproval of someone\'s actions',
      ],
    }
  ),
  word('aptitude', '적성', 7, 'noun',
    ['부적격', '무능력', '서툼', '미숙', '무기력', '거부', '태도', '고도', '위도', '실수'],
    tips({
      etymology: '라틴어 aptus(적절한)에서 유래하여 어떤 일에 딱 들어맞는 능력을 뜻합니다.',
      visual: '어린아이가 가르쳐주지 않아도 복잡한 퍼즐을 순식간에 맞추는 타고난 모습을 상상해 보세요.',
      soundAlike: '앱티튜드(Aptitude)는 \'앞(apti)이 툭(tude)\' 튀어나올 정도로 남들보다 앞서가는 소질로 기억하세요.',
      context: '주로 직업 적성 검사(Aptitude Test)와 같이 교육이나 훈련을 통해 발전할 수 있는 잠재력을 표현할 때 쓰입니다.',
      synonymAntonym: 'talent나 knack과 유사하며, 반대말은 서투름이나 무능력을 뜻하는 ineptitude입니다.',
    }),
    {
      definition: 'a natural capacity or inherent ability to acquire a particular skill or perform a specific type of work',
      synonyms: ['talent', 'knack', 'proficiency'],
      antonyms: ['ineptitude', 'inability', 'incapacity'],
      exampleSentences: [
        { en: 'She showed a natural aptitude for learning foreign languages at a very young age.', ko: '그녀는 아주 어린 나이에 외국어를 배우는 데 있어 타고난 적성을 보였다.' },
        { en: 'The school uses standardized tests to measure each student\'s academic aptitude.', ko: '학교는 각 학생의 학업 적성을 측정하기 위해 표준화된 시험을 사용한다.' },
      ],
      wordDistractors: ['Attitude', 'Altitude', 'Latitude'],
      definitionDistractors: [
        'A settled way of thinking or feeling about something',
        'The height of an object above sea level or ground level',
        'A complete lack of ability in a particular area',
      ],
    }
  ),
  word('archaic', '구식의', 7, 'adjective',
    ['현대적인', '최신식의', '동시대의', '진보적인', '세련된', '신선한', '유행하는', '첨단의', '현재의', '혁신적인'],
    tips({
      etymology: '그리스어 \'arkhe(시작)\'에서 유래하여, 인류 역사의 아주 초기 단계나 태초의 상태를 의미하게 되었습니다.',
      visual: '박물관 유리장 안에 전시된 먼지 쌓인 고대 유물이나 잉크를 찍어 쓰는 깃털 펜을 떠올려 보세요.',
      soundAlike: '\'아케-이익\' 소리가 \'아, 케케묵은\' 옛날 것이라고 연상하며 발음해 보면 기억하기 쉽습니다.',
      context: '단순히 오래된 것뿐만 아니라, 현재 기준으로는 너무 낡아서 더 이상 실용적이지 않은 제도나 언어를 비판할 때 자주 쓰입니다.',
      synonymAntonym: 'obsolete는 쓸모없어진 구식을, ancient는 아주 먼 옛날을 뜻하며, modern은 그 반대인 현대적임을 뜻합니다.',
    }),
    {
      definition: 'belonging to an earlier period and no longer used or applicable in the present day',
      synonyms: ['obsolete', 'antiquated', 'ancient'],
      antonyms: ['modern', 'contemporary', 'current'],
      exampleSentences: [
        { en: 'The system is still running on archaic software that was developed decades ago.', ko: '그 시스템은 수십 년 전에 개발된 구식 소프트웨어로 여전히 작동하고 있다.' },
        { en: 'Many people find the company\'s dress code policy to be archaic and restrictive.', ko: '많은 이들이 그 회사의 복장 규정이 구식이고 제한적이라고 생각한다.' },
      ],
      wordDistractors: ['Archive', 'Arcane', 'Arctic'],
      definitionDistractors: [
        'A collection of historical documents stored for reference',
        'Belonging to the most recent or current time period',
        'Known by only a few people and difficult to understand',
      ],
    }
  ),
  word('ardent', '열렬한', 7, 'adjective',
    ['냉담한', '무관심한', '미지근한', '냉정한', '무기력한', '냉소적인', '차가운', '둔감한', '지루한', '혐오하는'],
    tips({
      etymology: '라틴어 ardere(타다)에서 유래하여 불길이 치솟듯 뜨거운 감정 상태를 의미합니다.',
      visual: '올림픽 경기장에서 자기 나라 선수를 향해 목이 터져라 응원하는 열성적인 팬을 상상해 보세요.',
      soundAlike: '아던트(Ardent) -> \'아, 던트(던져)!\' 자신의 모든 에너지를 다 던져서 열중하는 모습으로 외워보세요.',
      context: '단순히 좋아하는 수준을 넘어 종교적 신념, 정치적 지지, 혹은 강렬한 사랑을 표현할 때 주로 사용됩니다.',
      synonymAntonym: 'Passionate와 유사하지만 더 격정적인 느낌이며, 반대말은 감정이 메마른 Indifferent입니다.',
    }),
    {
      definition: 'characterized by intense emotion or strong feelings of enthusiasm and devotion',
      synonyms: ['passionate', 'fervent', 'zealous'],
      antonyms: ['indifferent', 'apathetic', 'detached'],
      exampleSentences: [
        { en: 'He is an ardent supporter who has remained loyal to the team for decades.', ko: '그는 수십 년 동안 팀에 충성해 온 열렬한 지지자입니다.' },
        { en: 'The young poet had an ardent desire to change the world through his words.', ko: '그 젊은 시인은 자신의 글로 세상을 바꾸고 싶다는 열렬한 열망을 품고 있었습니다.' },
      ],
      wordDistractors: ['Arduous', 'Arrant', 'Errant'],
      definitionDistractors: [
        'Requiring great physical effort and endurance',
        'Completely indifferent and lacking any emotion',
        'Wandering or straying from a proper course',
      ],
    }
  ),
  word('arduous', '힘겨운', 7, 'adjective',
    ['쉬운', '편한', '수월한', '가벼운', '부담없는', '간편한', '여유로운', '단순한', '안락한', '쾌적한'],
    tips({
      etymology: '라틴어 arduus(가파른)에서 유래하여 \'오르기 힘든 가파른 길\' 같은 고난을 뜻합니다.',
      visual: '무거운 배낭을 메고 끝이 보이지 않는 가파른 산길을 땀 흘리며 오르는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'아주 어스(Arduous)\'름한 새벽까지 잠도 못 자고 일해야 하는 고된 상황을 떠올려 보세요.',
      context: '단순히 어려운 수준을 넘어 육체적, 정신적으로 진을 빼놓는 고된 작업이나 여정을 묘사할 때 씁니다.',
      synonymAntonym: 'strenuous와 유의어이며, 반대말은 힘을 들일 필요가 없는 effortless입니다.',
    }),
    {
      definition: 'requiring a great deal of effort and endurance; extremely difficult and tiring to complete',
      synonyms: ['strenuous', 'laborious', 'grueling'],
      antonyms: ['effortless', 'facile', 'painless'],
      exampleSentences: [
        { en: 'The journey across the desert was arduous and took several weeks.', ko: '사막을 가로지르는 여정은 매우 고되었으며 몇 주가 걸렸다.' },
        { en: 'Preparing for the bar exam is an arduous task that requires total dedication.', ko: '변호사 시험을 준비하는 것은 전적인 헌신이 필요한 힘겨운 과업이다.' },
      ],
      wordDistractors: ['Ardent', 'Absurd', 'Awkward'],
      definitionDistractors: [
        'Showing intense passion or devotion toward a cause',
        'Simple and effortless to accomplish without much thought',
        'Completely illogical or wildly unreasonable in nature',
      ],
    }
  ),
  word('articulate', '명확히 말하다', 7, 'verb',
    ['더듬거리다', '웅얼거리다', '불명료하다', '얼버무리다', '말을 흐리다', '불명확하다', '혼란스럽다', '애매하다', '침묵하다', '버벅거리다'],
    tips({
      etymology: '라틴어 articulus(마디, 관절)에서 유래하여 마디마디를 잘 연결해 말한다는 뜻입니다.',
      visual: '청중 앞에서 손짓을 섞어가며 논리 정연하게 연설하는 지적인 화자를 떠올려 보세요.',
      soundAlike: '발음이 \'아티큘레이트\'로, 음악의 \'아티큘레이션(각 음을 분명하게 연주하는 법)\'과 비슷합니다.',
      context: '주로 자신의 생각, 감정, 논리를 타인에게 아주 명확하게 전달할 때 사용합니다.',
      synonymAntonym: '동의어는 express, enunciate, utter이며 반의어는 mumble, falter, stammer입니다.',
    }),
    {
      definition: 'to express ideas or feelings fluently and coherently in speech',
      synonyms: ['express', 'enunciate', 'vocalize'],
      antonyms: ['mumble', 'falter', 'stammer'],
      exampleSentences: [
        { en: 'She articulated her concerns clearly.', ko: '그녀는 자신의 우려 사항을 명확하게 표현했습니다.' },
        { en: 'He struggled to articulate his thoughts.', ko: '그는 자신의 생각을 조리 있게 말하는 데 어려움을 겪었습니다.' },
      ],
      wordDistractors: ['Matriculate', 'Particular', 'Reticulate'],
      definitionDistractors: [
        'To speak in a confused and incoherent manner',
        'Having a specific or distinctive quality among others',
        'To arrange items in a network-like pattern',
      ],
    }
  ),
  word('ascend', '오르다', 7, 'verb',
    ['내려가다', '하강하다', '추락하다', '침강하다', '하락하다', '감소하다', '내려앉다', '꺼지다', '퇴보하다', '굴러떨어지다'],
    tips({
      etymology: '라틴어 ad(~로)와 scandere(오르다)가 결합되어 특정 방향(위)으로 나아감을 뜻합니다.',
      visual: '비행기가 활주로를 박차고 구름 위로 솟구치거나, 왕이 높은 보좌 계단을 밟고 올라가는 장면을 그려보세요.',
      soundAlike: '게임 캐릭터가 한계를 돌파해 더 높은 단계로 진화하는 \'어센션(Ascension)\' 기능을 떠올리면 기억하기 쉽습니다.',
      context: '단순히 계단을 오르는 것뿐만 아니라, 회사에서 높은 직급으로 승진하거나 왕위에 오를 때도 자주 사용됩니다.',
      synonymAntonym: 'climb과 비슷하지만 더 격식 있는 표현이며, 반대말인 descend와 세트로 외우면 효과적입니다.',
    }),
    {
      definition: 'to go up or move toward a higher point, position, or degree',
      synonyms: ['climb', 'mount', 'soar'],
      antonyms: ['descend', 'sink', 'plummet'],
      exampleSentences: [
        { en: 'The hikers watched the sun begin to ascend over the horizon.', ko: '등산객들은 태양이 지평선 위로 떠오르기 시작하는 것을 지켜보았습니다.' },
        { en: 'He worked hard for many years to ascend to the position of CEO.', ko: '그는 최고경영자 자리에 오르기 위해 수년 동안 열심히 일했습니다.' },
      ],
      wordDistractors: ['Descend', 'Ascent', 'Accent'],
      definitionDistractors: [
        'To move downward from a higher to a lower position',
        'To remain stationary at a fixed level or altitude',
        'A distinctive way of pronouncing words in a language',
      ],
    }
  ),
  word('ascertain', '확인하다', 7, 'verb',
    ['추측하다', '가정하다', '의심하다', '무시하다', '망각하다', '오해하다', '간과하다', '짐작하다', '방치하다', '혼동하다'],
    tips({
      etymology: '라틴어 ad(~에)와 cernere(구별하다/결정하다)가 결합되어, 어떤 사실을 명확히 구별하여 결정한다는 의미에서 유래했습니다.',
      visual: '어두운 방에서 손전등을 비추어 물체의 정체를 정확하게 파악하는 장면을 상상해 보세요.',
      soundAlike: '단어 끝부분의 \'tain\'을 \'확인(tain)\'으로 연결하여 \'확실하게 확인(ascertain)하다\'라고 기억하세요.',
      context: '단순히 보는 것을 넘어, 조사나 연구를 통해 객관적인 진실이나 수치를 규명할 때 격식 있게 사용합니다.',
      synonymAntonym: '정답을 확정하는 determine과 유사하며, 대충 짐작하는 guess와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to discover information with certainty or to establish the truth of a situation through investigation',
      synonyms: ['determine', 'verify', 'confirm'],
      antonyms: ['guess', 'doubt', 'overlook'],
      exampleSentences: [
        { en: 'The fire department is working to ascertain the exact cause of the blaze.', ko: '소방 당국은 화재의 정확한 원인을 규명하기 위해 노력하고 있습니다.' },
        { en: 'It is difficult to ascertain whether the new policy will be effective in the long run.', ko: '새로운 정책이 장기적으로 효과가 있을지 확인하는 것은 어렵습니다.' },
      ],
      wordDistractors: ['Certain', 'Curtain', 'Pertain'],
      definitionDistractors: [
        'To make a rough guess without investigating the facts',
        'To be relevant or applicable to a particular subject',
        'To deliberately conceal information from public view',
      ],
    }
  ),
  word('aspire', '열망하다', 7, 'verb',
    ['포기하다', '단념하다', '체념하다', '거부하다', '절망하다', '방관하다', '안주하다', '굴복하다', '실망하다', '냉소하다'],
    tips({
      etymology: '라틴어 ad(~를 향해)와 spirare(숨 쉬다)가 결합되어, 어떤 목표를 향해 숨을 헐떡일 정도로 간절히 원한다는 의미에서 유래했습니다.',
      visual: '높은 산 정상에 꽂힌 깃발을 바라보며 가파른 길을 한 걸음씩 올라가는 등반가의 모습을 상상해 보세요.',
      soundAlike: '유명한 노트북 모델명인 \'아스파이어\'를 떠올리며, 더 높은 성능과 가치를 추구하는 이미지를 연결하면 쉽습니다.',
      context: '단순히 \'원하다\'는 표현보다 격식 있고 강한 의지가 담긴 표현으로, 주로 직업적 성취나 고결한 가치를 목표로 할 때 사용합니다.',
      synonymAntonym: '무언가를 갈구하는 desire와 노력하는 strive가 동의어이며, 모든 것을 내려놓는 abandon이나 surrender가 반의어입니다.',
    }),
    {
      definition: 'to have a strong desire or ambition to achieve something high or great',
      synonyms: ['desire', 'aim', 'strive'],
      antonyms: ['resign', 'abandon', 'surrender'],
      exampleSentences: [
        { en: 'Many young athletes aspire to compete in the Olympics.', ko: '많은 젊은 운동선수들이 올림픽에서 경쟁하기를 열망합니다.' },
        { en: 'He has always aspired to lead the company and introduce innovative changes.', ko: '그는 항상 회사를 이끌며 혁신적인 변화를 도입하기를 열망해 왔습니다.' },
      ],
      wordDistractors: ['Inspire', 'Perspire', 'Conspire'],
      definitionDistractors: [
        'To fill someone with the urge to do something creative',
        'To give up all hope and accept a disappointing outcome',
        'To secretly plan with others to commit an unlawful act',
      ],
    }
  ),
  word('astute', '예리한', 7, 'adjective',
    ['우둔한', '어리석은', '둔감한', '멍청한', '미련한', '눈치없는', '둔한', '단순한', '무지한', '느린'],
    tips({
      etymology: '라틴어 astus(교활함, 기민함)에서 유래하여 상황 판단이 매우 빠르고 영리함을 의미합니다.',
      visual: '복잡한 주식 차트에서 남들이 놓치는 미세한 변화를 순식간에 포착해내는 투자자의 눈을 떠올려 보세요.',
      soundAlike: '발음이 \'어스튜트\'이므로, 우리(Us)를 가르칠(Tute) 정도로 똑똑하고 영리한 사람으로 기억하면 쉽습니다.',
      context: '주로 비즈니스 협상이나 정치적 판단처럼 복잡한 이해관계 속에서 영리하게 대처하는 인물을 묘사할 때 사용됩니다.',
      synonymAntonym: 'shrewd, perceptive와 같은 유의어는 영리함을 강조하며, 반대로 dull이나 naive는 어수룩하거나 둔함을 나타냅니다.',
    }),
    {
      definition: 'having or showing an ability to accurately assess situations or people and turn this to one\'s advantage',
      synonyms: ['shrewd', 'perceptive', 'sharp'],
      antonyms: ['dull', 'naive', 'foolish'],
      exampleSentences: [
        { en: 'He made an astute observation about the current market trends.', ko: '그는 현재 시장 흐름에 대해 예리한 관찰 결과를 내놓았습니다.' },
        { en: 'She is an astute businesswoman who knows exactly when to invest.', ko: '그녀는 언제 투자해야 할지 정확히 아는 영리한 사업가입니다.' },
      ],
      wordDistractors: ['Obtuse', 'Abstruse', 'Minute'],
      definitionDistractors: [
        'Slow to understand and lacking in mental sharpness',
        'Difficult to understand due to excessive complexity',
        'Easily deceived or tricked by others due to inexperience',
      ],
    }
  ),
  word('atrocity', '잔혹행위', 7, 'noun',
    ['자비', '선행', '친절', '은혜', '축복', '평화', '인도주의', '관용', '구제', '도덕'],
    tips({
      etymology: '라틴어 atrox(잔인한, 무시무시한)에서 유래한 명사형입니다.',
      visual: '전쟁터에서 벌어진 참혹하고 비인간적인 파괴 현장을 떠올려 보세요.',
      soundAlike: '발음이 \'어트로시티\'로, \'어트(At) + 로(Low) + 시티(City)\' 즉 도시의 가장 낮은 수준의 악행으로 기억해 보세요.',
      context: '주로 전쟁 범죄나 대규모 학살처럼 도덕적으로 용납할 수 없는 끔찍한 행위를 가리킵니다.',
      synonymAntonym: '동의어는 brutality, cruelty, abomination이며 반의어는 kindness, benevolence, mercy입니다.',
    }),
    {
      definition: 'an extremely wicked or cruel act, typically one involving physical violence',
      synonyms: ['brutality', 'cruelty', 'abomination'],
      antonyms: ['kindness', 'benevolence', 'mercy'],
      exampleSentences: [
        { en: 'The regime committed numerous atrocities.', ko: '그 정권은 수많은 잔혹 행위를 저질렀습니다.' },
        { en: 'The war crimes were documented as atrocities.', ko: '그 전쟁 범죄들은 잔혹 행위로 기록되었습니다.' },
      ],
      wordDistractors: ['Audacity', 'Atrophy', 'Ferocity'],
      definitionDistractors: [
        'The gradual wasting away of muscle or tissue from disuse',
        'An act of exceptional kindness performed without reward',
        'Rude or daring boldness that shows a lack of respect',
      ],
    }
  ),
  word('audacious', '대담한', 7, 'adjective',
    ['소심한', '겁많은', '조심스러운', '수줍은', '비겁한', '나약한', '우유부단한', '신중한', '망설이는', '위축된'],
    tips({
      etymology: '라틴어 audere(감히 ~하다)에서 유래하여 위험을 무릅쓰는 용기를 뜻합니다.',
      visual: '아무런 장비 없이 맨몸으로 높은 빌딩을 오르는 모험가의 모습을 상상해 보세요.',
      soundAlike: '오디오(Audio) 소리가 아주 \'대담하게\' 크다고 연상해 보세요.',
      context: '긍정적으로는 용기 있는 도전을 뜻하지만, 부정적으로는 무례할 정도로 뻔뻔함을 뜻하기도 합니다.',
      synonymAntonym: '동의어는 bold, daring, fearless이며 반의어는 timid, cautious, cowardly입니다.',
    }),
    {
      definition: 'showing a willingness to take surprisingly bold risks or demonstrating a lack of respect',
      synonyms: ['bold', 'daring', 'fearless'],
      antonyms: ['timid', 'cautious', 'cowardly'],
      exampleSentences: [
        { en: 'It was an audacious plan to climb the mountain without any safety gear.', ko: '안전 장비 없이 그 산을 오르겠다는 것은 대담한 계획이었습니다.' },
        { en: 'She made an audacious decision to quit her stable job and start her own business.', ko: '그녀는 안정적인 직장을 그만두고 자신의 사업을 시작하겠다는 대담한 결정을 내렸습니다.' },
      ],
      wordDistractors: ['Bodacious', 'Auspicious', 'Tenacious'],
      definitionDistractors: [
        'Indicating a favorable outcome or promising future',
        'Extremely cautious and reluctant to take any risks',
        'Holding firmly to a position or course of action',
      ],
    }
  ),
  word('austere', '엄격한', 7, 'adjective',
    ['사치스러운', '화려한', '관대한', '부드러운', '풍족한', '낭비하는', '호화로운', '유연한', '다채로운', '안락한'],
    tips({
      etymology: '그리스어 austeros(건조한, 거친)에서 유래하여 장식이 없고 딱딱한 느낌을 줍니다.',
      visual: '가구 하나 없이 침대만 놓인 수도사의 아주 검소하고 차가운 방을 떠올려 보세요.',
      soundAlike: '발음이 \'오스티어\'로, \'오스(Us)를 티어(Tear, 눈물)\'나게 할 만큼 엄격한 상황으로 연상해 보세요.',
      context: '생활 방식이 매우 검소하거나, 디자인이 꾸밈없고 단순할 때, 혹은 태도가 매우 엄격할 때 씁니다.',
      synonymAntonym: '동의어는 severe, strict, stark이며 반의어는 luxurious, ornate, indulgent입니다.',
    }),
    {
      definition: 'having an extremely plain and simple style or appearance, or being very strict in manner',
      synonyms: ['severe', 'strict', 'stark'],
      antonyms: ['luxurious', 'ornate', 'indulgent'],
      exampleSentences: [
        { en: 'He led an austere life.', ko: '그는 매우 금욕적이고 엄격한 삶을 살았습니다.' },
        { en: 'The room had an austere décor.', ko: '그 방은 장식이 전혀 없는 소박한 인테리어를 갖추고 있었습니다.' },
      ],
      wordDistractors: ['Obscure', 'Oyster', 'Sincere'],
      definitionDistractors: [
        'Not well known or difficult to find or understand',
        'Decorated lavishly with expensive ornaments and fabrics',
        'Free from pretense or deceit in feelings and intentions',
      ],
    }
  ),
  word('autonomous', '자율적인', 7, 'adjective',
    ['종속적인', '의존적인', '예속된', '복종하는', '통제된', '수동적인', '부수적인', '하위의', '지배받는', '구속된'],
    tips({
      etymology: '그리스어 auto(스스로)와 nomos(법)가 합쳐져 \'스스로 법을 세우는\'이라는 뜻에서 유래했습니다.',
      visual: '운전자가 핸들을 잡지 않아도 스스로 도로를 달리는 자율주행 자동차를 떠올려 보세요.',
      soundAlike: '오토(Auto)라는 발음에서 \'자동으로\' 움직이는 독립적인 상태를 연상할 수 있습니다.',
      context: '정치적 자치권이나 기계의 자율 작동, 조직 내 독립적인 의사결정 단위를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'independent와 유사하며, 남에게 의지하는 dependent와는 반대되는 개념입니다.',
    }),
    {
      definition: 'having the power or right to govern itself or make independent decisions',
      synonyms: ['independent', 'self-governing', 'sovereign'],
      antonyms: ['dependent', 'subordinate', 'subject'],
      exampleSentences: [
        { en: 'The region was granted an autonomous status after years of negotiation.', ko: '그 지역은 수년간의 협상 끝에 자치권을 부여받았다.' },
        { en: 'Future transportation will rely heavily on autonomous vehicles.', ko: '미래의 교통수단은 자율주행 차량에 크게 의존할 것이다.' },
      ],
      wordDistractors: ['Anonymous', 'Monotonous', 'Synonymous'],
      definitionDistractors: [
        'Having an unknown or unacknowledged identity or name',
        'Completely reliant on others for guidance and direction',
        'Lacking in variety and tediously repetitive in nature',
      ],
    }
  ),
  word('aversion', '혐오', 7, 'noun',
    ['선호', '애착', '호감', '열망', '동경', '친밀감', '매력', '수용', '환영', '만족'],
    tips({
      etymology: '라틴어 a(멀리)와 vertere(돌리다)가 결합되어 \'고개를 돌려 피하다\'라는 의미를 담고 있습니다.',
      visual: '싫어하는 음식이 식탁에 올라왔을 때 얼굴을 찌푸리며 고개를 돌리는 모습을 상상하세요.',
      soundAlike: '어 버전(A version) -> \'이 버전은 정말 싫어\'라고 말하며 거부하는 상황을 연상해 보세요.',
      context: '단순히 싫어하는 것을 넘어 본능적으로 피하고 싶어 하는 강한 거부감을 표현할 때 사용합니다.',
      synonymAntonym: 'dislike보다 강한 표현이며, 끌림을 뜻하는 attraction과 정반대입니다.',
    }),
    {
      definition: 'a feeling of intense dislike or an unwillingness to do something',
      synonyms: ['loathing', 'repugnance', 'distaste'],
      antonyms: ['inclination', 'fondness', 'affinity'],
      exampleSentences: [
        { en: 'He has a deep-seated aversion to any form of physical exercise.', ko: '그는 어떤 형태의 신체 운동에 대해서도 뿌리 깊은 혐오감을 가지고 있다.' },
        { en: 'Many people have a natural aversion to snakes and spiders.', ko: '많은 사람들이 뱀과 거미에 대해 본능적인 거부감을 느낀다.' },
      ],
      wordDistractors: ['Diversion', 'Assertion', 'Inversion'],
      definitionDistractors: [
        'An activity that provides entertainment or distraction',
        'A strong natural attraction or fondness for something',
        'A confident and forceful statement of fact or belief',
      ],
    }
  ),
];
