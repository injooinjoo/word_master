import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch16: VocabItem[] = [
  word('eradicate', '근절하다', 8, 'verb',
    ['조장하다', '번식시키다', '확산하다', '유포하다', '보존하다', '양성하다', '증식하다', '융성하다', '번성하다', '유지하다'],
    tips({
      etymology: '라틴어 \'e(밖으로)\'와 \'radix(뿌리)\'가 결합된 단어로, 식물의 뿌리를 통째로 뽑아낸다는 어원을 가지고 있습니다.',
      visual: '정원에 퍼진 잡초를 호미로 뿌리 끝까지 파내어 흙 위에 던져버리는 장면을 상상해 보세요.',
      soundAlike: '\'이래디케이트\' 발음이 \'이래도 안 죽어?\'와 비슷하게 들리니, 끈질긴 해충을 완전히 박멸하려는 상황을 떠올려 보세요.',
      context: '단순히 치우는 수준이 아니라 질병, 범죄, 빈곤처럼 사회에서 완전히 뿌리 뽑아야 할 부정적인 대상을 없앨 때 사용합니다.',
      synonymAntonym: '완전히 없애는 eliminate와 유사하며, 반대로 무언가를 새로 세우거나 키우는 establish, foster와는 반대됩니다.',
    }),
    {
      definition: 'to get rid of something completely or destroy something bad so that it does not return',
      synonyms: ['eliminate', 'abolish', 'extinguish'],
      antonyms: ['establish', 'create', 'foster'],
      exampleSentences: [
        { en: 'The government has launched a new program to eradicate illiteracy among adults.', ko: '정부는 성인 문맹을 퇴치하기 위한 새로운 프로그램을 시작했습니다.' },
        { en: 'Vaccination programs have helped to eradicate smallpox worldwide.', ko: '백신 접종 프로그램은 전 세계적으로 천연두를 박멸하는 데 기여했습니다.' },
      ],
      wordDistractors: ['erudite', 'elaborate', 'evaporate'],
      definitionDistractors: [
        'To make something more complex or detailed over time.',
        'To gradually weaken or reduce the influence of something.',
        'To officially approve or endorse a new policy or regulation.',
      ],
    }
  ),
  word('erratic', '변덕스러운', 8, 'adjective',
    ['일정한', '안정적인', '규칙적인', '예측 가능한', '꾸준한', '정적인', '차분한', '일관된', '평온한', '확정된'],
    tips({
      etymology: '라틴어 errare(헤매다)에서 유래하여 정해진 길 없이 방황하는 상태를 뜻합니다.',
      visual: '술에 취한 사람이 갈지자로 걷거나 심전도 그래프가 불규칙하게 튀는 모습.',
      soundAlike: '이래틱 -> \'이랬다\' 저랬다 하며 종잡을 수 없는 성격.',
      context: '주식 시장의 변동이나 사람의 기분, 기계의 오작동 등을 묘사할 때 사용합니다.',
      synonymAntonym: '동의어는 unpredictable, irregular, inconsistent이며 반의어는 stable, predictable, consistent입니다.',
    }),
    {
      definition: 'not following a regular or fixed pattern; moving or behaving in a way that is not expected',
      synonyms: ['unpredictable', 'irregular', 'inconsistent'],
      antonyms: ['stable', 'predictable', 'consistent'],
      exampleSentences: [
        { en: 'His erratic behavior worried his close friends.', ko: '그의 변덕스러운 행동은 가까운 친구들을 걱정시켰다.' },
        { en: 'The stock market showed erratic movements today.', ko: '주식 시장이 오늘 불규칙한 움직임을 보였다.' },
      ],
      wordDistractors: ['errant', 'exotic', 'eclectic'],
      definitionDistractors: [
        'Happening at a specific, predetermined time without deviation.',
        'Showing careful thought and consideration before acting.',
        'Relating to events that occur in a foreign country or culture.',
      ],
    }
  ),
  word('erudite', '박식한', 8, 'adjective',
    ['무지한', '무식한', '천박한', '얕은', '미숙한', '어리석은', '무관심한', '평범한', '단순한', '조잡한'],
    tips({
      etymology: '라틴어 \'e-(밖으로)\'와 \'rudis(가공되지 않은)\'가 결합된 단어로, 거친 원석 상태를 벗어나 교육을 통해 세련되고 정교해진 상태를 의미합니다.',
      visual: '천장까지 책이 가득 찬 개인 서재에서 돋보기를 들고 고서를 연구하는 노교수의 모습.',
      soundAlike: '\'에루다이트\'를 \'이루다(achieve) + 다(all)\'로 연상하여, 모든 학문적 성취를 다 이룬 박식한 상태로 기억하세요.',
      context: '일상적인 똑똑함보다는 학술적, 문학적 깊이가 남다른 전문가나 논문, 강연 등을 묘사할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '학구적인 scholarly와 지식이 많은 knowledgeable이 동의어이며, 배우지 못한 uneducated나 문맹의 illiterate가 반대 개념입니다.',
    }),
    {
      definition: 'possessing or displaying extensive knowledge acquired through devoted study and research',
      synonyms: ['scholarly', 'learned', 'knowledgeable'],
      antonyms: ['ignorant', 'uneducated', 'illiterate'],
      exampleSentences: [
        { en: 'The professor is remarkably erudite in ancient history and gave an impressive lecture.', ko: '그 교수는 고대사에 대해 놀랄 만큼 박식하여 인상적인 강연을 했다.' },
        { en: 'His erudite commentary enriched the documentary with deep historical insights.', ko: '그의 박식한 해설이 깊은 역사적 통찰력을 더해 다큐멘터리를 풍부하게 만들었다.' },
      ],
      wordDistractors: ['exude', 'erode', 'elude'],
      definitionDistractors: [
        'Extremely rude or lacking basic social manners.',
        'Having a natural ability to persuade or charm others.',
        'Unwilling to share knowledge or resources with colleagues.',
      ],
    }
  ),
  word('esoteric', '난해한', 8, 'adjective',
    ['명백한', '일반적인', '쉬운', '보편적인', '공개된', '단순한', '대중적인', '명료한', '평범한', '상식적인'],
    tips({
      etymology: '그리스어 esoteros(내부의)에서 유래하여 선택된 소수에게만 허락된 지식을 의미합니다.',
      visual: '비밀 결사단이 자기들만의 암호로 대화하거나 고대 마법 주문이 적힌 책을 상상해 보세요.',
      soundAlike: '이소테릭 -> \'이 속(eso)\'에 있는 사람들만 아는 \'테크닉(teric)\'.',
      context: '양자역학이나 고대 철학처럼 일반인이 이해하기 힘든 전문 분야를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '동의어는 obscure, abstruse, arcane이며 반의어는 common, simple, public입니다.',
    }),
    {
      definition: 'intended for or understood by only a small group of people with specialized knowledge or interest',
      synonyms: ['obscure', 'abstruse', 'arcane'],
      antonyms: ['common', 'simple', 'public'],
      exampleSentences: [
        { en: 'The lecture was too esoteric for beginners to follow.', ko: '그 강의는 초보자들이 따라오기에는 너무 난해했다.' },
        { en: 'He studies ancient philosophies that many find esoteric.', ko: '그는 많은 이들이 난해하다고 느끼는 고대 철학을 공부한다.' },
      ],
      wordDistractors: ['exoteric', 'ecstatic', 'aesthetic'],
      definitionDistractors: [
        'Widely known and easily understood by the general public.',
        'Relating to the appreciation of beauty in art and nature.',
        'Causing intense emotional excitement or overwhelming joy.',
      ],
    }
  ),
  word('espouse', '지지하다', 8, 'verb',
    ['반대하다', '배척하다', '거부하다', '거절하다', '저버리다', '포기하다', '비판하다', '무시하다', '억압하다', '방해하다'],
    tips({
      etymology: '라틴어 sponsare(약혼하다)에서 유래하여, 배우자를 맞이하듯 특정 신념이나 사상을 자신의 것으로 받아들인다는 의미를 담고 있습니다.',
      visual: '정치인이 연단 위에서 특정 정책 제안서를 가슴에 꼭 껴안으며 대중에게 자신의 신념임을 선포하는 장면을 상상해 보세요.',
      soundAlike: '이스파우즈(Espouse)의 발음이 배우자를 뜻하는 \'Spouse\'와 비슷하므로, 새로운 사상을 배우자처럼 소중히 받아들인다고 기억하세요.',
      context: '단순한 찬성을 넘어 사회적 운동, 정치적 이념, 혹은 철학적 가치관을 공개적으로 옹호하고 채택할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '신념을 받아들이는 adopt, 지지하는 advocate와 비슷하며, 반대로 거부하는 reject나 공개적으로 포기하는 renounce와는 대조됩니다.',
    }),
    {
      definition: 'To give loyalty and support to a particular principle, policy, or ideology as one\'s own.',
      synonyms: ['adopt', 'advocate', 'embrace'],
      antonyms: ['oppose', 'reject', 'renounce'],
      exampleSentences: [
        { en: 'She has always espoused environmental causes throughout her career.', ko: '그녀는 경력 내내 항상 환경 보호 운동을 지지해 왔다.' },
        { en: 'The party continues to espouse traditional values and family life in its platform.', ko: '그 정당은 정강에서 전통적 가치와 가정 생활을 계속해서 옹호하고 있다.' },
      ],
      wordDistractors: ['expose', 'dispose', 'suppose'],
      definitionDistractors: [
        'To reveal hidden information or secrets to the public.',
        'To formally marry someone in a religious ceremony.',
        'To get rid of something that is no longer needed or wanted.',
      ],
    }
  ),
  word('estrange', '소원하게 하다', 8, 'verb',
    ['화해시키다', '친하게 하다', '연결하다', '화합시키다', '가깝게 하다', '결합하다', '통합하다', '친밀해지다', '어울리다', '단합하다'],
    tips({
      etymology: '접두사 e(밖으로)와 strange(낯선)가 결합되어, 가까웠던 사람을 낯선 사람처럼 밖으로 밀어낸다는 뜻에서 유래했습니다.',
      visual: '다정했던 연인 사이의 사진이 반으로 찢어져 서로 다른 방향을 보고 있는 모습이나 차가운 벽이 생기는 장면을 상상하세요.',
      soundAlike: '\'이(E) 사람을 스트레인지(strange)하게 만들다\'라고 기억하면 가깝던 사람을 낯설게 만든다는 의미가 쉽게 연상됩니다.',
      context: '단순히 다투는 것을 넘어 부부, 가족, 오랜 친구 사이가 완전히 틀어져 남남처럼 지내게 될 때 주로 사용합니다.',
      synonymAntonym: 'alienate는 소외시키다라는 뜻으로 가장 가깝고, 반대로 화해를 뜻하는 reconcile이나 결합을 뜻하는 unite와 대조됩니다.',
    }),
    {
      definition: 'to cause someone to stop showing affection or to become unfriendly towards a friend, family member, or group',
      synonyms: ['alienate', 'distance', 'separate'],
      antonyms: ['reconcile', 'unite', 'attract'],
      exampleSentences: [
        { en: 'Their long feud estranged them for many years.', ko: '그들의 오랜 불화는 그들을 수년간 소원하게 만들었다.' },
        { en: 'His radical views estranged him from his family.', ko: '그의 급진적인 견해는 그를 가족으로부터 멀어지게 했다.' },
      ],
      wordDistractors: ['exchange', 'enrage', 'arrange'],
      definitionDistractors: [
        'To introduce two people who have never met before.',
        'To make someone feel extremely angry or furious.',
        'To organize or put things in a particular order or sequence.',
      ],
    }
  ),
  word('euphemism', '완곡어', 8, 'noun',
    ['직설', '노골적 표현', '비속어', '욕설', '적나라함', '노골', '비속', '적나라', '직언', '독설'],
    tips({
      etymology: '그리스어 \'eu(좋은)\'와 \'pheme(말)\'이 결합된 단어로, 상대방이 듣기 좋게 순화하여 말한다는 어원을 가지고 있습니다.',
      visual: '가시 돋친 \'해고\'라는 단어를 솜사탕처럼 부드러운 \'경력 전환\'이라는 단어로 감싸서 전달하는 장면을 상상해 보세요.',
      soundAlike: '\'유(You) 패(Phe)\'지 말고 \'미(mi)\'소 지으며 좋게 말해달라는 어감으로 기억하면 쉽습니다.',
      context: '사망, 질병, 해고 등 듣는 이에게 충격이나 불쾌감을 줄 수 있는 민감한 주제를 예의 바르게 표현할 때 주로 사용됩니다.',
      synonymAntonym: '부드러운 표현인 polite term이 동의어라면, 거칠고 불쾌하게 표현하는 dysphemism은 정반대의 개념입니다.',
    }),
    {
      definition: 'A mild or indirect word or expression used in place of one that may be found offensive or suggest something unpleasant.',
      synonyms: ['polite term', 'understatement', 'substitute'],
      antonyms: ['dysphemism', 'directness', 'bluntness'],
      exampleSentences: [
        { en: '\'Pass away\' is a common euphemism for \'die\'.', ko: '\'세상을 떠나다\'는 \'죽다\'를 대신하는 흔한 완곡어이다.' },
        { en: 'He used a euphemism to soften the impact of the bad news.', ko: '그는 나쁜 소식의 충격을 완화하기 위해 완곡한 표현을 사용했다.' },
      ],
      wordDistractors: ['euphoria', 'epigram', 'eulogy'],
      definitionDistractors: [
        'A formal speech praising someone who has recently died.',
        'A feeling of intense happiness or emotional excitement.',
        'A short, witty saying that expresses a clever observation.',
      ],
    }
  ),
  word('exacerbate', '악화시키다', 8, 'verb',
    ['완화하다', '나아지게 하다', '가라앉히다', '진정시키다', '호전시키다', '개선하다', '치유하다', '경감하다', '달래다', '회복하다'],
    tips({
      etymology: '접두사 ex(강조)와 라틴어 acerbus(거칠고 쓴)가 결합하여, 상황을 더 쓰라리고 고통스럽게 만든다는 의미에서 유래했습니다.',
      visual: '이미 불이 붙어 활활 타오르는 장작더미 위에 휘발유를 한 바가지 들이붓는 장면을 상상해 보세요.',
      soundAlike: '\'이그재서베이트\'를 \'이게 더 베드(bad)하게\'로 연상하여 상황을 더 나쁘게 만든다고 기억하세요.',
      context: '의학적으로 증상이 심해지거나 사회적 갈등, 경제적 위기 등 이미 부정적인 상황이 더 꼬일 때 자주 쓰입니다.',
      synonymAntonym: '상태를 더 무겁게 만드는 aggravate와 유의어이며, 고통을 가볍게 덜어주는 alleviate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to increase the severity, bitterness, or violence of a disease or an existing negative condition',
      synonyms: ['aggravate', 'worsen', 'intensify'],
      antonyms: ['alleviate', 'mitigate', 'improve'],
      exampleSentences: [
        { en: 'The heavy rain will only exacerbate the flooding problem.', ko: '폭우는 홍수 문제를 악화시킬 뿐일 것이다.' },
        { en: 'His thoughtless comments only exacerbated the conflict.', ko: '그의 경솔한 발언은 갈등을 더 악화시킬 뿐이었다.' },
      ],
      wordDistractors: ['exasperate', 'exaggerate', 'excavate'],
      definitionDistractors: [
        'To represent something as being larger or more important than it really is.',
        'To irritate or annoy someone intensely through repeated actions.',
        'To dig out earth carefully in order to find buried remains.',
      ],
    }
  ),
  word('exalt', '칭송하다', 8, 'verb',
    ['비난하다', '폄하하다', '낮추다', '모욕하다', '창피주다', '경멸하다', '무시하다', '조롱하다', '비하하다', '억압하다'],
    tips({
      etymology: '접두사 ex(밖으로/위로)와 어근 alt(높은)가 결합하여 누군가를 높은 위치로 끌어올린다는 의미에서 유래했습니다.',
      visual: '시상대 가장 높은 곳에 올라간 승리자에게 모든 사람들이 환호하며 꽃다발을 던지는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'익졸트\'와 유사하므로, 훌륭한 인물을 \'이 정도로(ex-) 높게(alt)\' 치켜세우며 칭송한다고 기억하세요.',
      context: '종교적인 찬양이나 역사적 영웅의 업적을 기릴 때, 혹은 누군가의 지위를 격상시킬 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'glorify는 영광을 돌리며 찬양하는 것이고, 반대로 disparage는 가치를 폄하하여 깎아내리는 행위입니다.',
    }),
    {
      definition: 'to raise someone to a higher rank or a greater level of importance; to glorify or honor someone intensely',
      synonyms: ['glorify', 'extol', 'venerate'],
      antonyms: ['denigrate', 'abase', 'belittle'],
      exampleSentences: [
        { en: 'The purpose of the monument is to exalt the soldiers who fought for their country.', ko: '그 기념비의 목적은 나라를 위해 싸운 군인들을 칭송하는 것이다.' },
        { en: 'Many poets wrote verses to exalt the beauty of the natural world.', ko: '많은 시인들이 자연계의 아름다움을 찬양하기 위해 시를 썼다.' },
      ],
      wordDistractors: ['exult', 'exhalt', 'exhort'],
      definitionDistractors: [
        'To strongly urge or advise someone to do something important.',
        'To feel or show triumphant elation after a personal victory.',
        'To remove someone from a position of power or authority.',
      ],
    }
  ),
  word('exemplify', '예시로 보여주다', 8, 'verb',
    ['모호하게하다', '은폐하다', '왜곡하다', '부인하다', '혼동시키다', '반박하다', '가로막다', '생략하다', '무시하다', '방해하다'],
    tips({
      etymology: '라틴어 exemplum(본보기)에서 유래하여, 밖으로(ex) 본보기를 꺼내어 보여준다는 의미를 담고 있습니다.',
      visual: '복잡한 설명 대신 완벽한 표본 하나를 손가락으로 가리키며 보여주는 모습을 상상해 보세요.',
      soundAlike: '단어 중간에 포함된 \'exempl\'이 \'example\'과 발음 및 철자가 유사하여 예시를 든다는 뜻을 쉽게 연상시킵니다.',
      context: '단순한 예시를 넘어, 어떤 가치나 특성을 가장 완벽하게 대변하는 전형적인 사례가 될 때 주로 사용합니다.',
      synonymAntonym: 'illustrate가 시각적으로 설명하는 것이라면, obscure는 안개처럼 가려 의미를 파악하기 어렵게 만드는 반대말입니다.',
    }),
    {
      definition: 'To serve as a typical instance or representative specimen of a particular quality or concept.',
      synonyms: ['illustrate', 'demonstrate', 'embody'],
      antonyms: ['obscure', 'misrepresent', 'conceal'],
      exampleSentences: [
        { en: 'The newly built library continues to exemplify modern architectural design.', ko: '새로 지어진 도서관은 현대 건축 디자인의 전형을 보여준다.' },
        { en: 'His selfless actions exemplify the true meaning of leadership.', ko: '그의 이타적인 행동은 리더십의 진정한 의미를 잘 보여준다.' },
      ],
      wordDistractors: ['amplify', 'simplify', 'classify'],
      definitionDistractors: [
        'To make something louder or stronger in intensity.',
        'To make something easier to understand by reducing complexity.',
        'To arrange items into categories based on shared characteristics.',
      ],
    }
  ),
  word('exonerate', '무죄로 하다', 8, 'verb',
    ['유죄를 선고하다', '기소하다', '비난하다', '책임을 지우다', '혐의를 씌우다', '구속하다', '처벌하다', '자백하다', '심문하다', '고발하다'],
    tips({
      etymology: '접두사 ex(밖으로)와 라틴어 onus(짐, 부담)가 결합되어 \'무거운 죄의 짐으로부터 벗어나게 하다\'라는 의미를 가집니다.',
      visual: '법정에서 판사가 망치를 두드리며 피고인의 수갑을 풀어주는 시원한 장면을 상상해 보세요.',
      soundAlike: '\'이그조너레이트\' 발음이 \'이제 너(oner)는 (죄에서) 나갔다(ex)\'라고 선언하는 소리처럼 기억해 보세요.',
      context: '단순히 용서하는 것을 넘어, 공식적인 조사나 재판을 통해 혐의가 완전히 없음이 밝혀질 때 주로 쓰입니다.',
      synonymAntonym: 'acquit은 법정에서의 무죄 방면을 뜻하며, 반대말인 convict는 유죄 판결을 내려 감옥에 보내는 것을 뜻합니다.',
    }),
    {
      definition: 'to officially state that someone is not responsible for something wrong or unfair they were accused of',
      synonyms: ['acquit', 'absolve', 'exculpate'],
      antonyms: ['convict', 'incriminate', 'condemn'],
      exampleSentences: [
        { en: 'The DNA evidence was enough to exonerate the man who had been wrongly imprisoned for ten years.', ko: 'DNA 증거는 10년 동안 억울하게 옥살이를 했던 그 남자를 무죄로 하기에 충분했습니다.' },
        { en: 'The report is expected to exonerate the pilot from any responsibility for the crash.', ko: '그 보고서는 추락 사고에 대한 어떤 책임으로부터도 조종사를 무죄로 해 줄 것으로 기대됩니다.' },
      ],
      wordDistractors: ['excoriate', 'evaporate', 'elaborate'],
      definitionDistractors: [
        'To punish someone severely for committing a serious offense.',
        'To formally charge someone with a criminal act in a court of law.',
        'To investigate the details of a case to gather more evidence.',
      ],
    }
  ),
  word('expedite', '촉진하다', 8, 'verb',
    ['지연시키다', '방해하다', '늦추다', '저지하다', '연기하다', '방해', '지체', '중단하다', '억제하다', '보류하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 ped(발)가 결합되어 \'발이 묶인 상태에서 벗어나게 하다\' 즉, 장애물을 치워 속도를 높인다는 의미에서 유래했습니다.',
      visual: '고속도로의 하이패스 차선처럼 막힘없이 차들이 빠르게 통과하는 장면을 상상해 보세요.',
      soundAlike: '단어의 앞부분이 \'Express(급행)\'와 비슷하게 들려 무언가를 빠르게 처리한다는 느낌과 연결하면 쉽습니다.',
      context: '비즈니스 상황에서 서류 승인, 상품 배송, 프로젝트 진행 속도를 높여야 할 때 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'hasten은 속도를 높여 서두르는 것이고, 반대말인 hinder는 발을 걸어 방해하고 늦추는 것입니다.',
    }),
    {
      definition: 'to speed up the progress of a process or to help an action happen sooner',
      synonyms: ['hasten', 'accelerate', 'facilitate'],
      antonyms: ['delay', 'hinder', 'obstruct'],
      exampleSentences: [
        { en: 'The company decided to pay extra to expedite the delivery of the raw materials.', ko: '그 회사는 원자재 배송을 앞당기기 위해 추가 비용을 지불하기로 결정했다.' },
        { en: 'We are looking for ways to expedite the recruitment process to hire new staff quickly.', ko: '우리는 신규 직원을 빠르게 채용하기 위해 채용 절차를 촉진할 방법을 찾고 있다.' },
      ],
      wordDistractors: ['extricate', 'expiate', 'explicate'],
      definitionDistractors: [
        'To make amends for a wrongdoing or a past mistake.',
        'To slow down a process by adding unnecessary steps.',
        'To explain or interpret a complex text in great detail.',
      ],
    }
  ),
  word('explicit', '명시적인', 8, 'adjective',
    ['암시적인', '모호한', '숨겨진', '애매한', '암묵적인', '불분명한', '비밀의', '추상적인', '간접적인', '난해한'],
    tips({
      etymology: 'ex(밖으로)와 plic(접다)가 합쳐져 \'접힌 것을 밖으로 다 펼쳐 보여주다\'는 뜻에서 유래했습니다.',
      visual: '숨기는 것 없이 모든 조건이 하나하나 나열된 상세 계약서의 조항들을 떠올려 보세요.',
      soundAlike: '설명(explain)할 때 아주 자세하고 명확하게(explicit) 말한다고 연결하여 외우면 쉽습니다.',
      context: '오해의 소지가 없도록 지시나 규정, 혹은 성적인 묘사가 아주 분명하게 드러날 때 주로 사용합니다.',
      synonymAntonym: 'clear는 단순히 깨끗하고 명확한 것이며, 반대말인 implicit은 겉으로 드러내지 않고 속으로 암시하는 것입니다.',
    }),
    {
      definition: 'stated clearly and in detail, leaving no room for confusion or doubt',
      synonyms: ['clear-cut', 'definite', 'precise'],
      antonyms: ['vague', 'implicit', 'obscure'],
      exampleSentences: [
        { en: 'The teacher gave explicit directions on how to complete the project.', ko: '선생님은 프로젝트를 어떻게 완료해야 하는지에 대해 명시적인 지시를 내렸습니다.' },
        { en: 'She was very explicit about her reasons for leaving the company.', ko: '그녀는 회사를 떠나는 이유에 대해 매우 분명하게 밝혔습니다.' },
      ],
      wordDistractors: ['implicit', 'exploit', 'elicit'],
      definitionDistractors: [
        'Suggested or hinted at without being directly stated.',
        'To take unfair advantage of someone for personal gain.',
        'To draw out a response or reaction from someone through questioning.',
      ],
    }
  ),
  word('extol', '칭찬하다', 8, 'verb',
    ['비난하다', '폄하하다', '경멸하다', '매도하다', '모욕하다', '무시하다', '조롱하다', '질책하다', '냉소하다', '비하하다'],
    tips({
      etymology: '라틴어 ex(위로)와 tollere(들어 올리다)가 합쳐져 \'대상을 높이 들어 올리다\'라는 의미에서 유래했습니다.',
      visual: '시상대 위에서 금메달을 목에 건 선수를 관중들이 우러러보며 박수갈채를 보내는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'익스톨\'이므로 키가 \'tall(톨)\'한 사람을 우러러보듯 높게 평가하며 칭찬한다고 기억하세요.',
      context: '주로 공식적인 자리에서 누군가의 업적, 미덕, 혹은 새로운 기술의 장점을 열정적으로 치켜세울 때 사용합니다.',
      synonymAntonym: 'laud는 격식 있게 기리는 것이며, 반대말인 denounce는 대중 앞에서 강하게 비난하는 것을 뜻합니다.',
    }),
    {
      definition: 'to praise someone or something highly and with great enthusiasm',
      synonyms: ['praise', 'laud', 'acclaim'],
      antonyms: ['denounce', 'criticize', 'belittle'],
      exampleSentences: [
        { en: 'The health benefits of a Mediterranean diet are often extolled by nutritionists.', ko: '지중해식 식단의 건강상 이점은 영양학자들에 의해 자주 격찬받는다.' },
        { en: 'He used his speech to extol the virtues of hard work and perseverance.', ko: '그는 연설을 통해 근면과 인내의 미덕을 극찬했다.' },
      ],
      wordDistractors: ['extort', 'exalt', 'extoll'],
      definitionDistractors: [
        'To obtain something through threats, force, or intimidation.',
        'To strongly condemn or publicly criticize a person or action.',
        'To remove or pull something out from a confined space.',
      ],
    }
  ),
  word('extraneous', '무관한', 8, 'adjective',
    ['관련된', '핵심적인', '필수적인', '근본적인', '직접적인', '중요한', '내재된', '유관한', '기초적인', '밀접한'],
    tips({
      etymology: '라틴어 \'extra(바깥)\'에서 유래하여, 논의의 중심 범위 바깥에 놓여 있다는 의미를 가집니다.',
      visual: '중요한 서류 위에 쏟아진 커피 얼룩처럼, 내용과는 아무 상관없이 자리만 차지하는 불필요한 존재를 상상해 보세요.',
      soundAlike: '단어 앞부분의 \'extra\'를 \'엑스트라 배우\'로 생각하세요. 주인공이 아닌, 배경에 섞여 있는 부차적인 존재를 떠올리면 쉽습니다.',
      context: '토론이나 글쓰기에서 주제를 벗어난 정보나, 기계 장치에서 작동에 필요 없는 부품을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'irrelevant와 비슷하게 \'상관없음\'을 뜻하지만, extraneous는 \'외부에서 유입된 불필요한 것\'이라는 뉘앙스가 더 강합니다.',
    }),
    {
      definition: 'not belonging to or directly connected with the specific topic or situation being discussed',
      synonyms: ['irrelevant', 'unnecessary', 'superfluous'],
      antonyms: ['relevant', 'essential', 'pertinent'],
      exampleSentences: [
        { en: 'The speaker was told to avoid any extraneous remarks and stick to the main agenda.', ko: '연사는 무관한 발언을 피하고 주요 의제에만 집중하라는 요청을 받았습니다.' },
        { en: 'We need to filter out extraneous noise to get a clear recording of the interview.', ko: '인터뷰를 선명하게 녹음하기 위해서는 관련 없는 소음들을 걸러내야 합니다.' },
      ],
      wordDistractors: ['extravagant', 'extrinsic', 'extremist'],
      definitionDistractors: [
        'Spending much more money than is necessary or reasonable.',
        'Originating from outside a system but still closely related to it.',
        'Absolutely essential and cannot be removed without consequence.',
      ],
    }
  ),
  word('extricate', '빠져나오게 하다', 8, 'verb',
    ['얽어매다', '가두다', '구속하다', '연루시키다', '매몰시키다', '방해하다', '억류하다', '결속하다', '함정에빠뜨리다', '포획하다'],
    tips({
      etymology: '접두사 ex(밖으로)와 라틴어 tricae(복잡한 장애물/당혹감)가 결합되어, 엉키고 설킨 곤경의 밖으로 끄집어낸다는 의미를 형성합니다.',
      visual: '낚싯줄이 복잡하게 엉킨 뭉치에서 바늘 하나를 조심스럽게 손으로 풀어내어 자유롭게 만드는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'익스트리케이트\'이므로, 교묘한 \'트릭(trick)\'이나 함정에 빠진 상태에서 \'탈출(exit)\'하는 상황으로 연결하면 기억하기 쉽습니다.',
      context: '단순히 장소를 떠나는 것이 아니라, 사고 차량의 잔해나 법적인 계약 관계, 혹은 매우 난처한 대화 주제 등에서 간신히 벗어날 때 주로 사용합니다.',
      synonymAntonym: 'disentangle은 실타래를 풀듯 해방하는 것이며, 반대말인 entangle이나 embroil은 반대로 깊숙이 엮어버리는 것을 뜻합니다.',
    }),
    {
      definition: 'to release or remove someone or something from a constraint, difficulty, or a physical trap',
      synonyms: ['disentangle', 'liberate', 'extract'],
      antonyms: ['entangle', 'involve', 'embroil'],
      exampleSentences: [
        { en: 'The pilot managed to extricate himself from the burning aircraft just in time.', ko: '조종사는 불타는 비행기에서 제때 가까스로 빠져나올 수 있었다.' },
        { en: 'It took several months for the company to extricate itself from the legal dispute.', ko: '그 회사가 법적 분쟁에서 벗어나는 데에는 몇 달이 걸렸다.' },
      ],
      wordDistractors: ['excommunicate', 'exterminate', 'extraneous'],
      definitionDistractors: [
        'To completely destroy or wipe out a population or group.',
        'To involve someone more deeply in a complicated situation.',
        'To officially ban someone from participating in an organization.',
      ],
    }
  ),
  word('fabricate', '조작하다', 8, 'verb',
    ['정직하게말하다', '보존하다', '검증하다', '실사하다', '사실을밝히다', '입증하다', '확인하다', '준수하다', '발굴하다', '복원하다'],
    tips({
      etymology: '라틴어 fabricare(만들다, 건설하다)에서 유래했으며, 원래는 물건을 제작한다는 뜻이었으나 점차 나쁜 의도로 이야기를 꾸며낸다는 의미가 더해졌습니다.',
      visual: '공장에서 기계가 가짜 부품을 찍어내듯, 머릿속에서 가짜 사실들을 하나하나 조립하여 완성하는 장면을 상상해 보세요.',
      soundAlike: '패브릭(Fabric)이라는 단어와 비슷합니다. 천을 짜듯이(weave) 거짓말을 정교하게 짜 맞추는 상황을 떠올리면 기억하기 쉽습니다.',
      context: '주로 경찰 조사, 법정 증언, 뉴스 보도 등에서 증거를 위조하거나 가짜 뉴스를 만들어낼 때 부정적인 맥락으로 사용됩니다.',
      synonymAntonym: '무언가를 위조하는 forge와 유사하며, 사실 여부를 꼼꼼히 확인하는 verify나 validate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to invent or produce something false in order to deceive someone, such as a story, document, or piece of evidence',
      synonyms: ['forge', 'concoct', 'falsify'],
      antonyms: ['verify', 'authenticate', 'validate'],
      exampleSentences: [
        { en: 'The suspect tried to fabricate an alibi for the night of the crime.', ko: '용의자는 범행 당일 밤에 대한 알리바이를 조작하려고 시도했다.' },
        { en: 'It is a serious offense to fabricate evidence in a court of law.', ko: '법정에서 증거를 조작하는 것은 심각한 범죄 행위이다.' },
      ],
      wordDistractors: ['facilitate', 'fascinate', 'fluctuate'],
      definitionDistractors: [
        'To build or construct something using raw materials and tools.',
        'To make a process easier or help it move forward smoothly.',
        'To capture and hold someone\'s complete attention and interest.',
      ],
    }
  ),
  word('facetious', '농담하는', 8, 'adjective',
    ['진지한', '엄숙한', '진솔한', '성실한', '경건한', '엄격한', '비통한', '정중한', '신중한', '냉정한'],
    tips({
      etymology: '라틴어 facetia(재치, 익살)에서 유래하여, 본래는 재치 있다는 긍정적 의미였으나 현대에는 부적절한 농담을 한다는 의미로 쓰입니다.',
      visual: '장례식이나 회의처럼 모두가 심각한 표정을 짓고 있는 장소에서 혼자 장난기 가득한 표정으로 윙크를 하는 사람을 상상해 보세요.',
      soundAlike: 'Face(얼굴)에 웃음기가 가득(tious)한 상태로 기억하면, 심각한 상황에서도 웃음을 참지 못하고 농담을 던지는 모습이 떠오릅니다.',
      context: '단순히 재미있는 농담이 아니라, 분위기 파악을 못 하거나 진지해야 할 때 가볍게 행동하여 상대방을 불쾌하게 만들 수 있는 상황에 주로 쓰입니다.',
      synonymAntonym: 'flippant와 같이 경박하다는 느낌의 단어와 가깝고, serious나 solemn처럼 무게감 있는 단어와는 반대됩니다.',
    }),
    {
      definition: 'treating serious issues with deliberately inappropriate humor or not meant to be taken literally',
      synonyms: ['flippant', 'tongue-in-cheek', 'jocular'],
      antonyms: ['serious', 'solemn', 'grave'],
      exampleSentences: [
        { en: 'Stop being so facetious and pay attention to this serious problem.', ko: '그렇게 농담만 하지 말고 이 심각한 문제에 집중해.' },
        { en: 'The employee\'s facetious comment during the meeting was met with cold silence.', ko: '회의 중 나온 그 직원의 경박한 농담은 차가운 침묵만을 불러왔다.' },
      ],
      wordDistractors: ['factitious', 'fastidious', 'felicitous'],
      definitionDistractors: [
        'Extremely careful and demanding about small details and accuracy.',
        'Well-suited or particularly appropriate for a given situation.',
        'Artificially created rather than arising from natural processes.',
      ],
    }
  ),
  word('fallacious', '허위의', 8, 'adjective',
    ['정확한', '타당한', '합리적인', '검증된', '진실한', '명확한', '확실한', '올바른', '정당한', '사실의'],
    tips({
      etymology: '라틴어 fallere(속이다)에서 유래했습니다. 남을 속이거나 스스로 착각하게 만드는 오류가 포함되어 있다는 의미를 담고 있습니다.',
      visual: '튼튼해 보이는 다리(논리)를 밟았는데, 알고 보니 속이 텅 비어 있어 아래로 툭 떨어지는(Fall) 장면을 상상해 보세요.',
      soundAlike: '단어 앞부분인 \'Fall\'에 집중하세요. 논리적 근거가 부족하여 주장이 바닥으로 \'떨어지는\' 상태라고 기억하면 쉽습니다.',
      context: '주로 토론이나 학술적인 글에서 겉보기에는 그럴싸하지만 실제로는 논리적 허점이 있는 주장이나 믿음을 비판할 때 자주 쓰입니다.',
      synonymAntonym: 'Misleading과 비슷하게 잘못된 길로 인도한다는 느낌을 주며, 논리적으로 완벽한 Valid와는 정반대의 성격을 가집니다.',
    }),
    {
      definition: 'containing a mistake or based on a false idea, making an argument or belief invalid',
      synonyms: ['misleading', 'erroneous', 'spurious'],
      antonyms: ['valid', 'truthful', 'authentic'],
      exampleSentences: [
        { en: 'The politician\'s argument was based on fallacious data that misled the public.', ko: '그 정치인의 주장은 대중을 오도하는 잘못된 데이터에 근거하고 있었다.' },
        { en: 'It is a fallacious belief that money alone can bring lasting happiness.', ko: '돈만으로 지속적인 행복을 얻을 수 있다는 것은 잘못된 믿음이다.' },
      ],
      wordDistractors: ['salacious', 'tenacious', 'audacious'],
      definitionDistractors: [
        'Holding firmly to a position or belief despite opposition.',
        'Showing a willingness to take bold or daring risks.',
        'Treating someone or something with deliberate disrespect.',
      ],
    }
  ),
  word('fastidious', '까다로운', 8, 'adjective',
    ['무관심한', '대충하는', '무성의한', '냉담한', '너그러운', '부주의한', '낙천적인', '털털한', '소홀한', '유연한'],
    tips({
      etymology: '라틴어 fastidium(혐오, 넌더리)에서 유래하여, 조금이라도 마음에 들지 않으면 싫어하는 까다로운 성미를 뜻하게 되었습니다.',
      visual: '하얀 장갑을 끼고 가구 위를 훑으며 먼지 한 톨이라도 있는지 매섭게 검사하는 집주인의 모습',
      soundAlike: 'Fast(빠른) + tedious(지루한): 너무 꼼꼼하고 세밀하게 따지느라 작업 속도가 빠르지 못하고 지루하게 느껴지는 상황',
      context: '단순히 성격이 나쁜 것이 아니라, 위생, 문법, 예절 등 특정 기준에 대해 완벽주의적이고 결벽증적인 태도를 보일 때 주로 쓰입니다.',
      synonymAntonym: '꼼꼼한 meticulous와 유사하며, 매사에 대충대충 하는 lax나 negligent와는 반대되는 개념입니다.',
    }),
    {
      definition: 'giving excessive attention to small details and having very high standards that are difficult to satisfy',
      synonyms: ['meticulous', 'fussy', 'scrupulous'],
      antonyms: ['casual', 'lax', 'negligent'],
      exampleSentences: [
        { en: 'The chef is known for his fastidious attention to the presentation of every dish.', ko: '그 주방장은 모든 요리의 담음새에 대해 세심하고 까다로운 주의를 기울이는 것으로 유명하다.' },
        { en: 'She is a fastidious editor who catches even the smallest punctuation errors.', ko: '그녀는 아주 작은 구두점 오류까지도 잡아내는 꼼꼼하고 까다로운 편집자이다.' },
      ],
      wordDistractors: ['facetious', 'fictitious', 'felicitous'],
      definitionDistractors: [
        'Treating serious matters with inappropriate humor or levity.',
        'Relaxed and unconcerned about rules, standards, or quality.',
        'Not genuine or real; created from imagination rather than fact.',
      ],
    }
  ),
  word('fervent', '열렬한', 8, 'adjective',
    ['냉담한', '무관심한', '미지근한', '소홀한', '무성의한', '차분한', '둔감한', '회의적인', '냉정한', '방관하는'],
    tips({
      etymology: '라틴어 \'fervere(끓다)\'에서 유래했습니다. 액체가 펄펄 끓듯 마음속에 뜨거운 열기가 가득한 상태를 의미합니다.',
      visual: '응원석에서 얼굴이 빨개질 정도로 소리를 지르며 열광하는 팬의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'Fever(열)\'와 비슷합니다. 몸에 열이 나는 것처럼 뜨겁고 강렬한 감정 상태를 떠올리면 쉽습니다.',
      context: '단순한 선호도를 넘어 종교적 신념, 정치적 지지, 혹은 간절한 기도와 같은 깊고 강한 감정을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'Passionate와 유사하지만 더 격정적인 느낌이며, 반대말로는 감정이 메마른 상태인 Apathetic이나 Indifferent가 있습니다.',
    }),
    {
      definition: 'having or displaying a very strong and sincere intensity of feeling or enthusiasm',
      synonyms: ['passionate', 'ardent', 'zealous'],
      antonyms: ['apathetic', 'indifferent', 'dispassionate'],
      exampleSentences: [
        { en: 'The fans offered a fervent prayer for their team\'s victory in the final minutes.', ko: '팬들은 마지막 몇 분 동안 자기 팀의 승리를 위해 간절한 기도를 올렸다.' },
        { en: 'She has always been a fervent believer in the power of education to change lives.', ko: '그녀는 교육이 삶을 변화시키는 힘을 가지고 있다는 점을 항상 열렬히 믿어왔다.' },
      ],
      wordDistractors: ['fervid', 'fertile', 'ferment'],
      definitionDistractors: [
        'Capable of producing abundant crops or offspring.',
        'Showing a complete lack of emotion or concern about something.',
        'To undergo a chemical process that produces gas or bubbles.',
      ],
    }
  ),
  word('flagrant', '노골적인', 8, 'adjective',
    ['은밀한', '미묘한', '사소한', '숨겨진', '완곡한', '정중한', '희미한', '비밀스러운', '조심스러운', '경미한'],
    tips({
      etymology: '라틴어 flagrare(타오르다)에서 유래하여, 불길이 타오르듯 누구나 볼 수 있게 명백하고 악한 상태를 의미합니다.',
      visual: '축구 경기에서 모든 관중이 다 볼 정도로 대놓고 상대 선수를 밀치는 반칙 장면을 상상해 보세요.',
      soundAlike: 'Flag(깃발)가 높이 걸려 있듯이, 누구나 다 알 수 있을 정도로 뻔뻔하고 노골적인 잘못을 뜻합니다.',
      context: '주로 법규 위반, 인권 침해, 거짓말 등이 너무나 명백해서 변명의 여지가 없을 때 쓰입니다.',
      synonymAntonym: 'blatant와 같이 \'노골적인\' 의미를 공유하며, 반대로 눈에 잘 띄지 않는 subtle과는 대조됩니다.',
    }),
    {
      definition: 'conspicuously or obviously offensive; shocking and impossible to ignore',
      synonyms: ['blatant', 'egregious', 'glaring'],
      antonyms: ['subtle', 'inconspicuous', 'slight'],
      exampleSentences: [
        { en: 'The decision was a flagrant violation of international law.', ko: '그 결정은 국제법을 명백하고 극악하게 위반한 것이었다.' },
        { en: 'He showed a flagrant disregard for the safety of others.', ko: '그는 타인의 안전을 노골적으로 무시하는 태도를 보였다.' },
      ],
      wordDistractors: ['fragrant', 'vagrant', 'stagnant'],
      definitionDistractors: [
        'Having a pleasant or sweet smell that is easily noticed.',
        'Barely noticeable or so small as to be easily overlooked.',
        'Remaining still without movement, flow, or development.',
      ],
    }
  ),
  word('fledgling', '초보의', 8, 'adjective',
    ['숙련된', '베테랑의', '노련한', '숙달된', '전문적인', '고참의', '능숙한', '정통한', '노회한', '완성된'],
    tips({
      etymology: 'fledge(깃털이 나다)에 작은 것을 뜻하는 -ling이 붙어, 이제 막 깃털이 나기 시작한 어린 새를 뜻합니다.',
      visual: '둥지 끝에 아슬아슬하게 서서 처음으로 날개를 퍼덕이며 날 준비를 하는 아기 새의 모습',
      soundAlike: 'Fly(날다) + edge(가장자리): 둥지 가장자리에서 처음으로 날아오르려는 초보의 모습',
      context: '주로 이제 막 사업을 시작한 신생 기업이나 사회에 첫발을 내디딘 신입 사원을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '동의어인 novice는 초보자를, 반의어인 expert는 전문가를 의미하여 실력의 차이를 나타냅니다.',
    }),
    {
      definition: 'young, new, or lacking experience in a particular field or activity',
      synonyms: ['inexperienced', 'nascent', 'emerging'],
      antonyms: ['experienced', 'veteran', 'expert'],
      exampleSentences: [
        { en: 'The fledgling company is seeking new investors to expand its operations.', ko: '그 신생 기업은 사업 확장을 위해 새로운 투자자들을 찾고 있다.' },
        { en: 'As a fledgling pilot, he was nervous during his first solo flight.', ko: '초보 조종사였던 그는 첫 단독 비행 동안 무척 긴장했다.' },
      ],
      wordDistractors: ['fleeting', 'fledging', 'fondling'],
      definitionDistractors: [
        'Lasting for only a very short period of time before disappearing.',
        'Highly skilled and experienced in a particular profession.',
        'Showing deep affection or tenderness toward someone.',
      ],
    }
  ),
  word('flourish', '번창하다', 8, 'verb',
    ['쇠퇴하다', '몰락하다', '시들다', '퇴보하다', '쇠락하다', '정체되다', '악화되다', '위축되다', '소멸하다', '부진하다'],
    tips({
      etymology: '라틴어 \'florere(꽃피다)\'에서 유래하여 식물이 꽃을 피우듯 활짝 피어나는 상태를 의미합니다.',
      visual: '비옥한 토양에서 나무가 가지를 뻗으며 무성하게 잎을 틔우는 생명력 넘치는 모습',
      soundAlike: '단어 앞부분이 \'Flower(꽃)\'와 비슷하게 들리므로 꽃이 만개하는 장면을 연상하세요.',
      context: '경제적인 성공뿐만 아니라 예술적 성취나 식물의 생육이 매우 왕성할 때 두루 쓰입니다.',
      synonymAntonym: 'thrive와 prosper는 긍정적인 성장을, decline과 wither는 힘을 잃고 시드는 반대 상황을 나타냅니다.',
    }),
    {
      definition: 'to grow or develop in a healthy or vigorous way, especially as the result of a particularly favorable environment',
      synonyms: ['thrive', 'prosper', 'burgeon'],
      antonyms: ['wither', 'decline', 'deteriorate'],
      exampleSentences: [
        { en: 'The local economy began to flourish after the new factory opened.', ko: '새 공장이 문을 연 후 지역 경제가 번창하기 시작했다.' },
        { en: 'Wildflowers often flourish in this sunny part of the garden.', ko: '야생화들은 정원의 이 햇빛 잘 드는 곳에서 종종 무성하게 번창한다.' },
      ],
      wordDistractors: ['flounder', 'furnish', 'famish'],
      definitionDistractors: [
        'To struggle or stumble clumsily without making progress.',
        'To supply or provide a room with furniture and equipment.',
        'To gradually fade away and disappear from existence.',
      ],
    }
  ),
  word('foment', '선동하다', 8, 'verb',
    ['진정시키다', '가라앉히다', '억제하다', '냉각시키다', '완화하다', '진압하다', '잠재우다', '달래다', '평정하다', '저지하다'],
    tips({
      etymology: '라틴어 fomentum(찜질)에서 유래하여 상처를 따뜻하게 하듯 \'열을 올리다\'는 의미에서 감정을 뜨겁게 달구는 선동의 의미로 발전했습니다.',
      visual: '평화로운 군중 사이에서 횃불을 높이 들고 사람들의 분노에 불을 지피는 선동가의 모습을 상상해 보세요.',
      soundAlike: '포멘트(Foment)는 \'For + Ment\'로 기억하세요. 특정한 목적을 위해 자극적인 \'멘트\'를 날려 사람들을 부추기는 상황을 연상하면 쉽습니다.',
      context: '주로 사회적 불안, 반란, 폭동 등 부정적인 사태나 감정을 의도적으로 유발할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '무언가를 부추기는 incite, instigate와 유의어이며, 반대로 상황을 잠재우는 quell, suppress와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to intentionally provoke or stimulate the development of something unpleasant, such as social unrest or violent behavior',
      synonyms: ['incite', 'instigate', 'provoke'],
      antonyms: ['quell', 'suppress', 'soothe'],
      exampleSentences: [
        { en: 'The opposition party was accused of trying to foment a public strike.', ko: '야당은 대중 파업을 선동하려 했다는 혐의를 받았습니다.' },
        { en: 'They used social media to foment discontent among the younger generation.', ko: '그들은 젊은 세대 사이의 불만을 선동하기 위해 소셜 미디어를 이용했습니다.' },
      ],
      wordDistractors: ['ferment', 'torment', 'moment'],
      definitionDistractors: [
        'To apply a warm, soothing compress to heal a physical wound.',
        'To cause someone ongoing severe mental or physical suffering.',
        'To undergo a chemical breakdown that produces alcohol or gas.',
      ],
    }
  ),
  word('forestall', '선수치다', 8, 'verb',
    ['방관하다', '방치하다', '뒤따르다', '뒤처지다', '허용하다', '촉진하다', '유발하다', '돕다', '방임하다', '지연시키다'],
    tips({
      etymology: 'fore(앞서)와 stall(막다/가판대)이 합쳐져, 남보다 앞서 자리를 차지하거나 막는다는 뜻에서 유래했습니다.',
      visual: '상대방이 수를 쓰기 전에 미리 길목을 지키고 서서 차단하는 장면을 상상해 보세요.',
      soundAlike: '포어스톨(Forestall)은 \'미리(fore) 설치(stall)해서 막는다\'고 소리 내어 읽으며 기억하면 쉽습니다.',
      context: '위기나 문제, 혹은 상대방의 공격을 미리 예측하고 방지할 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: '동의어는 prevent, preclude, anticipate이며, 반의어는 allow, permit, facilitate입니다.',
    }),
    {
      definition: 'to prevent or obstruct an anticipated event or action by taking defensive measures ahead of time',
      synonyms: ['prevent', 'preclude', 'anticipate'],
      antonyms: ['allow', 'permit', 'facilitate'],
      exampleSentences: [
        { en: 'The government took steps to forestall a potential economic crisis.', ko: '정부는 잠재적인 경제 위기를 미연에 방지하기 위해 조치를 취했다.' },
        { en: 'She forestalled his criticism by admitting her mistake first.', ko: '그녀는 자신의 실수를 먼저 인정함으로써 그의 비판을 선수 쳤다.' },
      ],
      wordDistractors: ['foreshadow', 'foreclose', 'forestal'],
      definitionDistractors: [
        'To give a warning or indication of a future event.',
        'To encourage or actively promote something from happening.',
        'To take possession of a property due to unpaid debts.',
      ],
    }
  ),
  word('formidable', '막강한', 8, 'adjective',
    ['약한', '무기력한', '하찮은', '쉬운', '무해한', '만만한', '보잘것없는', '연약한', '평범한', '가벼운'],
    tips({
      etymology: '라틴어 formidare(두려워하다)에서 유래하여, 경외심이나 두려움을 줄 만큼 강력하다는 뜻입니다.',
      visual: '거대한 산맥이나 무장을 완벽히 갖춘 거인 기사를 마주했을 때의 압도감을 떠올리세요.',
      soundAlike: '포미더블(Formidable)은 \'포(For) + 미(Me) + 더블(Double)\', 나보다 두 배는 더 커서 감당하기 힘든 상대를 연상하세요.',
      context: '상대방의 실력, 장애물의 크기, 혹은 해결해야 할 과제가 매우 어려울 때 사용합니다.',
      synonymAntonym: '동의어는 daunting, fearsome, intimidating이며, 반의어는 weak, feeble, insignificant입니다.',
    }),
    {
      definition: 'inspiring fear or respect through being impressively powerful, large, or capable',
      synonyms: ['daunting', 'fearsome', 'intimidating'],
      antonyms: ['weak', 'feeble', 'insignificant'],
      exampleSentences: [
        { en: 'She is a formidable opponent on the tennis court.', ko: '그녀는 테니스 코트 위에서 막강한 상대이다.' },
        { en: 'The mountain climbers faced a formidable challenge due to the blizzard.', ko: '산악인들은 눈보라로 인해 엄청난 도전에 직면했다.' },
      ],
      wordDistractors: ['formaldehyde', 'formulaic', 'formative'],
      definitionDistractors: [
        'Following a fixed pattern or set of rules without creativity.',
        'Relating to the early stages of development or growth.',
        'Easy to defeat or overcome without much effort or skill.',
      ],
    }
  ),
  word('fortify', '강화하다', 8, 'verb',
    ['약화하다', '허물다', '무너뜨리다', '해체하다', '훼손하다', '감소시키다', '손상시키다', '약화시키다', '파괴하다', '쇠퇴시키다'],
    tips({
      etymology: '라틴어 \'fortis(강한)\'와 \'-ify(~하게 만들다)\'가 결합되어 \'강하게 만들다\'라는 의미를 가집니다.',
      visual: '나무 울타리를 돌벽으로 바꾸고 망루를 세워 성을 튼튼하게 보강하는 공사 현장을 상상하세요.',
      soundAlike: '요새를 뜻하는 \'Fort\'를 만드는(ify) 과정이라고 생각하면 기억하기 좋습니다.',
      context: '건축물 보강뿐만 아니라 면역력, 결심, 혹은 음식에 영양소를 추가할 때도 폭넓게 사용됩니다.',
      synonymAntonym: '강하게 만드는 strengthen과 유사하며, 힘을 빼는 weaken이나 undermine과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make a place or a person\'s body or mind stronger and more resistant to attack or failure',
      synonyms: ['strengthen', 'reinforce', 'bolster'],
      antonyms: ['weaken', 'undermine', 'enfeeble'],
      exampleSentences: [
        { en: 'The city was fortified with massive walls to defend against invaders.', ko: '그 도시는 침략자들에 맞서 방어하기 위해 거대한 성벽으로 강화되었습니다.' },
        { en: 'Many cereal brands fortify their products with extra vitamins to improve nutritional value.', ko: '많은 시리얼 브랜드들이 영양 가치를 높이기 위해 제품에 비타민을 추가하여 강화합니다.' },
      ],
      wordDistractors: ['falsify', 'glorify', 'mortify'],
      definitionDistractors: [
        'To deliberately alter information to make it untrue.',
        'To cause someone great embarrassment or deep shame.',
        'To weaken or reduce the structural integrity of something.',
      ],
    }
  ),
  word('frivolous', '경박한', 8, 'adjective',
    ['진지한', '중대한', '신중한', '깊은', '근본적인', '엄숙한', '중요한', '사려깊은', '의미있는', '무거운'],
    tips({
      etymology: '라틴어 frivolus(부서지기 쉬운, 가치 없는)에서 유래하여 알맹이가 없음을 뜻합니다.',
      visual: '진지한 회의 시간에 혼자 장난감을 가지고 놀거나 농담을 하는 가벼운 태도를 떠올려 보세요.',
      soundAlike: '프리블러스(Frivolous)는 \'Free(자유로운) + 볼러스\', 너무 자유분방해서 진지함이 전혀 없는 상태로 연상하세요.',
      context: '법적 소송이 근거가 없거나, 돈을 쓸데없는 곳에 낭비할 때 자주 쓰이는 형용사입니다.',
      synonymAntonym: '동의어는 trivial, flippant, shallow이며, 반의어는 serious, solemn, grave입니다.',
    }),
    {
      definition: 'not having any serious purpose or value; behaving in a silly way and not taking things seriously',
      synonyms: ['trivial', 'flippant', 'shallow'],
      antonyms: ['serious', 'solemn', 'grave'],
      exampleSentences: [
        { en: 'The judge dismissed the case, calling it a frivolous lawsuit with no legal merit.', ko: '판사는 법적 근거가 없는 경박한 소송이라며 그 사건을 기각했다.' },
        { en: 'He regretted wasting his inheritance on frivolous luxury items that he didn\'t need.', ko: '그는 필요하지도 않은 경박한 사치품들에 유산을 낭비한 것을 후회했다.' },
      ],
      wordDistractors: ['fabulous', 'furious', 'previous'],
      definitionDistractors: [
        'Extremely impressive or extraordinarily good in quality.',
        'Requiring deep concentration and serious intellectual effort.',
        'Feeling or showing intense anger about something unfair.',
      ],
    }
  ),
  word('frugal', '검소한', 8, 'adjective',
    ['낭비하는', '사치스러운', '방탕한', '헤픈', '호화로운', '과소비하는', '풍족한', '낭비벽있는', '비싼', '화려한'],
    tips({
      etymology: '라틴어 frugi(절약하는, 과실의)에서 유래하여 수확한 열매를 아껴 쓰는 태도를 의미합니다.',
      visual: '마트에서 할인 쿠폰을 꼼꼼히 챙기고 꼭 필요한 물건만 바구니에 담는 사람을 떠올리세요.',
      soundAlike: '프루걸(Frugal)은 \'풀(Fru)만 먹고 갈(gal) 정도로 아끼는\' 모습으로 기억해 보세요.',
      context: '단순히 돈이 없는 것이 아니라, 자원을 효율적이고 알뜰하게 관리하는 긍정적인 맥락에서 자주 쓰입니다.',
      synonymAntonym: 'thrifty와 economical은 긍정적인 절약을, wasteful과 extravagant는 부정적인 낭비를 뜻합니다.',
    }),
    {
      definition: 'Careful and economical when using money, food, or resources to avoid waste.',
      synonyms: ['thrifty', 'economical', 'parsimonious'],
      antonyms: ['wasteful', 'extravagant', 'profligate'],
      exampleSentences: [
        { en: 'His frugal habits helped him save enough money for a new house.', ko: '그의 검소한 습관은 그가 새 집을 살 만큼 충분한 돈을 모으는 데 도움을 주었다.' },
        { en: 'She leads a frugal lifestyle to pay off her student loans as quickly as possible.', ko: '그녀는 학자금 대출을 최대한 빨리 갚기 위해 검소한 생활 방식을 유지하고 있다.' },
      ],
      wordDistractors: ['fragile', 'fungal', 'fugal'],
      definitionDistractors: [
        'Easily broken or damaged; delicate and requiring careful handling.',
        'Spending money freely and generously without concern for cost.',
        'Relating to organisms that grow in damp, dark environments.',
      ],
    }
  ),
  word('futile', '헛된', 8, 'adjective',
    ['효과적인', '성공적인', '의미있는', '가치있는', '결실있는', '유용한', '생산적인', '보람찬', '유익한', '능률적인'],
    tips({
      etymology: '라틴어 futilis(쉽게 쏟아지는, 새는)에서 유래하여 밑 빠진 독에 물 붓기처럼 아무리 부어도 소용없음을 뜻합니다.',
      visual: '구멍 난 양동이로 계속 물을 나르지만 결국 바닥이 마른 상태 그대로인 허망한 장면을 상상하세요.',
      soundAlike: '발음이 \'퓨타일\'이므로, 타일을 깔아도 자꾸 깨져서 \'퓨(Phew, 한숨)\'만 나오는 헛된 상황을 연상하세요.',
      context: '아무리 노력해도 결과가 바뀌지 않거나 가망이 없는 시도를 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '동의어는 useless, vain, fruitless이며, 반의어는 fruitful, effective, productive입니다.',
    }),
    {
      definition: 'having no effect or achieving nothing; completely unsuccessful or pointless',
      synonyms: ['useless', 'vain', 'fruitless'],
      antonyms: ['fruitful', 'effective', 'productive'],
      exampleSentences: [
        { en: 'All their efforts to revive the project proved to be futile.', ko: '프로젝트를 되살리려는 그들의 모든 노력은 완전히 헛된 것으로 드러났다.' },
        { en: 'It would be futile to resist the changes that are already happening.', ko: '이미 일어나고 있는 변화에 저항하는 것은 헛된 일일 것이다.' },
      ],
      wordDistractors: ['fertile', 'feudal', 'furtive'],
      definitionDistractors: [
        'Capable of producing abundant growth or creative ideas.',
        'Done in a secretive way to avoid being noticed by others.',
        'Producing highly successful and meaningful outcomes.',
      ],
    }
  ),
  word('galvanize', '자극하다', 8, 'verb',
    ['무관심하게하다', '진정시키다', '억제하다', '냉각시키다', '낙담시키다', '저지하다', '방해하다', '무디게하다', '약화시키다', '잠재우다'],
    tips({
      etymology: '이탈리아 과학자 루이지 갈바니가 개구리 다리에 전기를 흘려 근육을 수축시킨 실험에서 유래하여, 마치 전기 충격을 주듯 사람을 움직이게 한다는 의미가 되었습니다.',
      visual: '축 처져 있던 사람들이 번개 모양의 에너지를 맞고 갑자기 눈을 번쩍 뜨며 일제히 달려나가는 모습을 상상해 보세요.',
      soundAlike: '갈(Gal)수록 번(van)쩍 정신이 들게끔 강한 자극을 주어 행동하게 만든다고 기억하면 쉽습니다.',
      context: '주로 정치적 연설, 사회적 위기, 혹은 강력한 동기부여 강연이 정체된 집단을 즉각적인 행동으로 옮기게 할 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 깨우는 rouse, 활력을 주는 energize와 비슷하며, 열기를 꺾는 dampen이나 의욕을 꺾는 discourage와는 반대됩니다.',
    }),
    {
      definition: 'to shock or excite someone into taking sudden action',
      synonyms: ['stimulate', 'energize', 'rouse'],
      antonyms: ['dampen', 'discourage', 'dissuade'],
      exampleSentences: [
        { en: 'The urgent appeal for help managed to galvanize the public into action.', ko: '도움을 요청하는 긴급한 호소는 대중을 자극하여 행동에 나서게 만들었습니다.' },
        { en: 'The captain\'s fiery halftime talk was enough to galvanize the team into playing much harder.', ko: '주장의 격정적인 하프타임 대화는 팀을 자극하여 훨씬 더 열심히 경기에 임하게 하기에 충분했습니다.' },
      ],
      wordDistractors: ['glamorize', 'privatize', 'cauterize'],
      definitionDistractors: [
        'To make something appear more attractive or exciting than it is.',
        'To coat a metal surface with zinc to prevent rusting.',
        'To calm down and make someone feel less anxious or agitated.',
      ],
    }
  ),
  word('garner', '모으다, 얻다', 8, 'verb',
    ['흩다', '분산하다', '잃다', '버리다', '해체하다', '방출하다', '낭비하다', '소모하다', '거절하다', '무시하다'],
    tips({
      etymology: '라틴어 granarium(곡물창고)에서 유래하여 수확한 곡식을 창고에 차곡차곡 모아 두는 행위를 의미합니다.',
      visual: '농부가 수확한 황금빛 곡식 더미를 창고 안에 빈틈없이 쌓아 올리는 장면을 상상해 보세요.',
      soundAlike: '\'가너\'라는 발음이 \'가져가서 넣어\'와 비슷하므로, 소중한 것을 챙겨서 보관함에 넣는 이미지를 떠올리세요.',
      context: '단순히 물건을 줍는 것이 아니라, 노력 끝에 대중의 지지, 정보, 명성, 찬사 같은 가치 있는 것을 얻어낼 때 주로 사용합니다.',
      synonymAntonym: '무언가를 한데 모으는 collect와 유사하며, 사방으로 흩뿌리는 scatter와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to acquire or accumulate something through effort, typically information, praise, or public approval',
      synonyms: ['collect', 'accumulate', 'amass'],
      antonyms: ['scatter', 'disperse', 'dissipate'],
      exampleSentences: [
        { en: 'The young politician managed to garner support from various demographics during the campaign.', ko: '그 젊은 정치인은 선거 운동 기간 동안 다양한 계층으로부터 지지를 얻어냈다.' },
        { en: 'His latest novel has started to garner critical acclaim from literary circles worldwide.', ko: '그의 최신 소설은 전 세계 문학계로부터 비평가들의 찬사를 받기 시작했다.' },
      ],
      wordDistractors: ['garnish', 'garden', 'gander'],
      definitionDistractors: [
        'To decorate or add a finishing touch to food before serving.',
        'To distribute or spread items widely across a large area.',
        'To take a brief, casual look at something out of curiosity.',
      ],
    }
  ),
  word('gratuitous', '불필요한', 8, 'adjective',
    ['필요한', '당연한', '타당한', '근거 있는', '의미 있는', '필수적인', '정당한', '적절한', '유용한', '중요한'],
    tips({
      etymology: '라틴어 gratus(기쁜)에서 유래하여 원래 \'대가 없이 주는\'이라는 뜻에서 \'이유 없는\'으로 변했습니다.',
      visual: '영화의 흐름과 상관없이 갑자기 튀어나오는 불필요한 폭력 장면을 상상해 보세요.',
      soundAlike: '그래투이터스 -> \'그래, 투(Too)하게\' 많아서 불필요하다는 느낌으로 기억하세요.',
      context: '부정적인 행동이나 표현이 아무런 이유나 정당성 없이 과할 때 주로 사용합니다.',
      synonymAntonym: '동의어 unnecessary, uncalled-for / 반의어 justified, necessary와 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'given or done free of charge, or acting without a good reason or justification',
      synonyms: ['unnecessary', 'uncalled-for', 'unwarranted'],
      antonyms: ['justified', 'necessary', 'essential'],
      exampleSentences: [
        { en: 'The action movie was criticized for its gratuitous violence that didn\'t help the plot.', ko: '그 액션 영화는 줄거리에 도움이 되지 않는 불필요한 폭력성으로 비판받았다.' },
        { en: 'She was offended by his gratuitous insults during the professional meeting.', ko: '그녀는 전문적인 회의 도중 나온 그의 근거 없는 모욕에 불쾌감을 느꼈다.' },
      ],
      wordDistractors: ['gratitude', 'grandiose', 'gregarious'],
      definitionDistractors: [
        'A deep feeling of thankfulness and appreciation for kindness.',
        'Impressively large or elaborate in scale, scope, or extent.',
        'Fond of company and enjoying being around other people.',
      ],
    }
  ),
  word('grievance', '불만', 8, 'noun',
    ['만족', '감사', '기쁨', '승인', '행복', '즐거움', '환희', '동의', '칭찬', '보상'],
    tips({
      etymology: '라틴어 gravare(무겁게 하다)에서 유래하여 마음을 무겁게 짓누르는 고통이나 슬픔을 뜻합니다.',
      visual: '직원이 회사에 부당한 대우에 대해 조목조목 적은 공식적인 불만 서류를 제출하는 모습.',
      soundAlike: '그리번스 -> \'그리 번거로운\' 일을 당해 마음속에 응어리진 불만이 생긴 상황.',
      context: '단순한 투덜거림을 넘어 직장이나 공식적인 관계에서 제기하는 정식 항의나 불만 사항을 의미합니다.',
      synonymAntonym: '동의어 complaint, objection, resentment / 반의어 satisfaction, commendation, approval',
    }),
    {
      definition: 'a formal statement of a complaint over something believed to be wrong or unfair',
      synonyms: ['complaint', 'objection', 'resentment'],
      antonyms: ['satisfaction', 'commendation', 'approval'],
      exampleSentences: [
        { en: 'Workers filed a grievance with the union regarding the unsafe working conditions.', ko: '노동자들은 안전하지 않은 작업 환경에 대해 노조에 공식적인 불만을 제기했다.' },
        { en: 'She had a legitimate grievance about her treatment during the promotion process.', ko: '그녀는 승진 과정 중의 대우에 대해 정당한 불만을 가지고 있었다.' },
      ],
      wordDistractors: ['governance', 'reverence', 'severance'],
      definitionDistractors: [
        'The system by which an organization or country is managed.',
        'A feeling of deep respect and admiration for someone.',
        'The act of ending a professional relationship or contract.',
      ],
    }
  ),
  word('hackneyed', '진부한', 8, 'adjective',
    ['신선한', '독창적인', '참신한', '독특한', '새로운', '혁신적인', '기발한', '흥미로운', '최신의', '현대적인'],
    tips({
      etymology: '과거에 누구나 빌려 탈 수 있었던 평범한 말(hackney)에서 유래하여, 누구나 다 아는 흔해 빠진 상태를 의미하게 되었습니다.',
      visual: '수천 번을 반복해서 재생해 화질이 다 깨져버린 낡은 비디오 테이프나 닳고 닳은 동전을 떠올려 보세요.',
      soundAlike: '\'핵(매우) 니(네) 꺼\'라고 말하기엔 너무 뻔하고 흔해서 매력이 없는 상태로 기억해 보세요.',
      context: '주로 영화 평론이나 문학 비평에서 뻔한 반전, 상투적인 대사, 식상한 줄거리를 묘사할 때 자주 사용됩니다.',
      synonymAntonym: 'cliched, trite와는 \'식상함\'을 공유하며, original, fresh와는 \'새로움\'의 유무로 대조를 이룹니다.',
    }),
    {
      definition: 'used so often that it has become boring and has no meaning or interest',
      synonyms: ['cliched', 'trite', 'banal'],
      antonyms: ['original', 'fresh', 'novel'],
      exampleSentences: [
        { en: 'The plot of the movie was filled with hackneyed tropes that we have seen a thousand times.', ko: '그 영화의 줄거리는 우리가 수천 번은 본 진부한 비유들로 가득했다.' },
        { en: 'Even though the melody is a bit hackneyed, the song is still very popular.', ko: '멜로디가 다소 상투적이긴 하지만, 그 노래는 여전히 매우 인기가 있다.' },
      ],
      wordDistractors: ['hankered', 'harried', 'hallowed'],
      definitionDistractors: [
        'Completely new and never seen or heard before.',
        'Considered sacred or greatly honored and respected.',
        'Feeling a strong, persistent desire or longing for something.',
      ],
    }
  ),
  word('hamper', '방해하다', 8, 'verb',
    ['돕다', '촉진하다', '용이하게 하다', '가속하다', '지원하다', '장려하다', '허용하다', '해방하다', '강화하다', '개선하다'],
    tips({
      etymology: '원래 바구니를 뜻했으나, 물건을 담아 움직임을 제한한다는 의미로 발전했습니다.',
      visual: '달리기를 하려는데 커다란 빨래 바구니를 들고 있어 속도가 나지 않는 모습.',
      soundAlike: '햄퍼 -> \'힘퍼\'지게 만들어서 진행을 방해하는 상황을 떠올려보세요.',
      context: '날씨, 재정 문제, 장애물 등이 진행을 가로막을 때 사용합니다.',
      synonymAntonym: '동의어 hinder, impede, obstruct / 반의어 facilitate, assist, expedite',
    }),
    {
      definition: 'to prevent someone from easily doing something or to slow down the progress of an activity',
      synonyms: ['hinder', 'impede', 'obstruct'],
      antonyms: ['facilitate', 'assist', 'expedite'],
      exampleSentences: [
        { en: 'Heavy snowfall continued to hamper the rescue efforts throughout the night.', ko: '폭설이 밤새도록 구조 작업을 계속 방해했다.' },
        { en: 'A lack of funds hampered their progress and significantly delayed the project.', ko: '자금 부족이 그들의 진행을 방해하여 프로젝트가 상당히 지연되었다.' },
      ],
      wordDistractors: ['pamper', 'tamper', 'damper'],
      definitionDistractors: [
        'To treat someone with excessive care and attention.',
        'To interfere or meddle with something without permission.',
        'To help something progress more quickly and efficiently.',
      ],
    }
  ),
  word('haphazard', '무계획적인', 8, 'adjective',
    ['체계적인', '계획적인', '정돈된', '신중한', '엄격한', '질서 있는', '의도적인', '꼼꼼한', '정확한', '일관된'],
    tips({
      etymology: '우연을 뜻하는 \'hap\'과 위험을 뜻하는 \'hazard\'가 결합되어, 계획 없이 운에만 맡겨 위태로운 상태를 의미합니다.',
      visual: '정리되지 않은 옷장에 옷들이 아무렇게나 쑤셔 박혀 있어 문을 열면 쏟아질 것 같은 모습.',
      soundAlike: '\'합해저드\' -> 여러 요소가 대책 없이 \'합\'쳐져서 \'해저드(위험)\'가 된 상황으로 기억하세요.',
      context: '준비 과정 없이 즉흥적으로 일을 처리하거나, 물건을 아무 기준 없이 배치할 때 주로 쓰입니다.',
      synonymAntonym: 'random, chaotic과 비슷하며, 체계적인 systematic이나 정돈된 organized와는 반대되는 개념입니다.',
    }),
    {
      definition: 'characterized by a lack of order or planning, occurring by pure chance rather than according to a system',
      synonyms: ['random', 'chaotic', 'disorganized'],
      antonyms: ['systematic', 'methodical', 'organized'],
      exampleSentences: [
        { en: 'The books were stacked in a haphazard pile on the floor.', ko: '책들이 바닥에 무계획적인 더미로 쌓여 있었다.' },
        { en: 'She made a haphazard decision without considering the long-term consequences.', ko: '그녀는 장기적인 결과를 고려하지 않고 무계획적인 결정을 내렸다.' },
      ],
      wordDistractors: ['halfhearted', 'haggard', 'hapless'],
      definitionDistractors: [
        'Carefully planned and organized according to a clear system.',
        'Looking exhausted and worn out from prolonged suffering.',
        'Lacking enthusiasm or determination about an activity.',
      ],
    }
  ),
  word('harbinger', '전조', 8, 'noun',
    ['결과', '여파', '결말', '종결', '후과', '성과', '결론', '영향', '산물', '완성'],
    tips({
      etymology: '중세 영어에서 군대나 왕이 도착하기 전 숙소를 마련하러 먼저 가는 사람을 뜻하는 단어에서 유래했습니다.',
      visual: '겨울이 끝나갈 무렵 봄이 오고 있음을 알리는 첫 번째 제비의 비행을 상상해 보세요.',
      soundAlike: '하빈저 -> \'하(Hi), 빈(Been) 저(거)\' 왔어! 라고 미리 소식을 전하며 나타나는 사람.',
      context: '주로 계절의 변화나 역사적 사건, 혹은 중대한 변화가 시작되기 직전의 징조를 묘사할 때 쓰입니다.',
      synonymAntonym: '무언가 앞서 오는 precursor와 유사하며, 사건이 끝난 뒤의 결과인 aftermath와는 반대됩니다.',
    }),
    {
      definition: 'A sign or messenger that announces the upcoming arrival of something else, often a significant change or event.',
      synonyms: ['precursor', 'omen', 'herald'],
      antonyms: ['aftermath', 'consequence', 'result'],
      exampleSentences: [
        { en: 'The sudden drop in temperature was a harbinger of the approaching storm.', ko: '갑작스러운 기온 하락은 다가오는 폭풍의 전조였다.' },
        { en: 'Many people consider the blooming of cherry blossoms a harbinger of warmer days.', ko: '많은 이들이 벚꽃이 피는 것을 따뜻한 날들이 올 것이라는 전조로 여긴다.' },
      ],
      wordDistractors: ['harangue', 'harborer', 'bargainer'],
      definitionDistractors: [
        'A safe place that provides shelter and protection from danger.',
        'The final outcome or result of a series of events.',
        'A long, aggressive speech delivered to criticize or persuade.',
      ],
    }
  ),
  word('heinous', '흉악한', 8, 'adjective',
    ['고상한', '존귀한', '순한', '덕스러운', '선한', '아름다운', '친절한', '훌륭한', '도덕적인', '자비로운'],
    tips({
      etymology: '프랑스어 haine(증오)에서 유래하여 증오를 불러일으킬 만큼 악하다는 뜻입니다.',
      visual: '너무나 잔인해서 차마 눈 뜨고 볼 수 없는 끔찍한 범죄 현장의 모습.',
      soundAlike: '헤이너스 -> \'해(Harm)가 이너스(Enormous)\'하게 큰 흉악한 범죄.',
      context: '주로 살인이나 전쟁 범죄 같이 도덕적으로 용납할 수 없는 끔찍한 행위에 씁니다.',
      synonymAntonym: '동의어 atrocious, monstrous, wicked / 반의어 noble, virtuous, admirable',
    }),
    {
      definition: 'extremely evil, shocking, or deserving of strong condemnation',
      synonyms: ['atrocious', 'monstrous', 'wicked'],
      antonyms: ['noble', 'virtuous', 'admirable'],
      exampleSentences: [
        { en: 'The perpetrator was sentenced to life in prison for his heinous crimes.', ko: '가해자는 자신의 흉악한 범죄로 인해 종신형을 선고받았다.' },
        { en: 'It is hard to believe that anyone could commit such a heinous deed against innocent people.', ko: '누군가 무고한 사람들에게 그런 흉악한 짓을 저지를 수 있다는 것이 믿기 어렵다.' },
      ],
      wordDistractors: ['hideous', 'copious', 'onerous'],
      definitionDistractors: [
        'Extremely ugly or unpleasant in physical appearance.',
        'Existing in very large quantities or abundant amounts.',
        'Worthy of great admiration and moral praise.',
      ],
    }
  ),
  word('heresy', '이단', 8, 'noun',
    ['정통', '정설', '교리', '신앙', '합의', '이해', '순종', '복종', '수용', '일치'],
    tips({
      etymology: '그리스어 hairesis(선택)에서 유래하여 주류와 다른 길을 선택한다는 의미입니다.',
      visual: '중세 시대에 금지된 책들이 불타고 있는 장면을 상상해 보세요.',
      soundAlike: '헤러시 - \'해롭지\' 않다고 주장하지만 주류에겐 해로운 이단 사상.',
      context: '종교적 교리뿐만 아니라 과학이나 사회적 통념에 반하는 의견에도 쓰입니다.',
      synonymAntonym: '동의어는 heterodoxy, dissent이며 반의어는 orthodoxy, belief, conformity입니다.',
    }),
    {
      definition: 'a belief or opinion that strongly contradicts established religious doctrines or accepted standards',
      synonyms: ['heterodoxy', 'dissent', 'nonconformity'],
      antonyms: ['orthodoxy', 'belief', 'conformity'],
      exampleSentences: [
        { en: 'He was accused of heresy for spreading religious ideas considered a threat to the church.', ko: '그는 교회에 위협이 된다고 간주되는 종교적 사상을 퍼뜨린 혐의로 이단 고발을 당했다.' },
        { en: 'In the past, suggesting that the Earth revolved around the Sun was viewed as heresy.', ko: '과거에는 지구가 태양 주위를 돈다고 제안하는 것이 이단으로 간주되었다.' },
      ],
      wordDistractors: ['hearsay', 'hereby', 'heirloom'],
      definitionDistractors: [
        'Information received from others that cannot be verified as true.',
        'A valued possession passed down through generations of a family.',
        'A widely accepted belief that most people agree with.',
      ],
    }
  ),
  word('hierarchy', '위계', 8, 'noun',
    ['평등', '수평', '혼돈', '무질서', '동등', '자유', '민주', '분산', '해체', '평준'],
    tips({
      etymology: '그리스어 hieros(신성한)와 arche(통치)가 합쳐져 신성한 계급 질서를 뜻합니다.',
      visual: '꼭대기에 왕이 있고 아래로 갈수록 넓어지는 피라미드 조직도를 떠올리세요.',
      soundAlike: '하이어라키 - \'높이(high)\'에 따라 \'아래(low)\'가 나뉘는 계급 구조.',
      context: '기업, 군대, 생태계 등 서열이 존재하는 모든 시스템에 사용됩니다.',
      synonymAntonym: '동의어는 rank, pecking order, grading이며 반의어는 equality, anarchy, disorder입니다.',
    }),
    {
      definition: 'a system in which members of a society or organization are ranked according to relative status or authority',
      synonyms: ['rank', 'pecking order', 'grading'],
      antonyms: ['equality', 'anarchy', 'disorder'],
      exampleSentences: [
        { en: 'The company has a strict hierarchy.', ko: '그 회사는 엄격한 위계 구조를 가지고 있다.' },
        { en: 'Social hierarchy determined one\'s status.', ko: '사회적 위계가 개인의 지위를 결정했다.' },
      ],
      wordDistractors: ['anarchy', 'monarchy', 'oligarchy'],
      definitionDistractors: [
        'A state of complete disorder where no authority governs.',
        'A system where a single ruler holds absolute power.',
        'A condition where all members share equal status and rights.',
      ],
    }
  ),
  word('homogeneous', '동질의', 8, 'adjective',
    ['이질적인', '다양한', '혼합된', '상이한', '복합적인', '다채로운', '불규칙한', '변화무쌍한', '분산된', '차별적인'],
    tips({
      etymology: '그리스어 \'homos(같은)\'와 \'genos(종류)\'가 결합하여 \'종류나 성질이 같다\'는 의미를 가집니다.',
      visual: '잘 섞인 우유나 균일하게 칠해진 벽면처럼 어디를 보아도 색깔이나 밀도가 일정한 상태를 떠올려 보세요.',
      soundAlike: '호모(homo, 같은) 지니어스(genius, 천재) - \'같은\' 수준의 \'천재\'들만 모여 있는 \'동질적인\' 집단.',
      context: '사회학에서 인구 구성이 비슷할 때나, 화학에서 용액의 성분이 고르게 섞여 있을 때 자주 쓰입니다.',
      synonymAntonym: 'uniform과 유사하며, 반대말인 heterogeneous는 \'이질적인\'이라는 뜻으로 접두사 hetero(다른)를 씁니다.',
    }),
    {
      definition: 'consisting of parts all of the same kind; having a consistent structure or composition throughout',
      synonyms: ['uniform', 'consistent', 'unvarying'],
      antonyms: ['heterogeneous', 'diverse', 'varied'],
      exampleSentences: [
        { en: 'The population of the small village was remarkably homogeneous in terms of ethnicity.', ko: '그 작은 마을의 인구는 민족성 측면에서 놀라울 정도로 동질적이었다.' },
        { en: 'Stir the mixture until it becomes a homogeneous paste without any lumps.', ko: '덩어리가 전혀 없는 균일한 반죽이 될 때까지 혼합물을 저으세요.' },
      ],
      wordDistractors: ['heterogeneous', 'homologous', 'harmonious'],
      definitionDistractors: [
        'Composed of many different and diverse elements or types.',
        'Existing together in a state of peaceful agreement and balance.',
        'Corresponding in structure or origin but not necessarily identical.',
      ],
    }
  ),
  word('hubris', '오만', 8, 'noun',
    ['겸손', '겸양', '비하', '신중', '절제', '공손', '예의', '조심', '온순', '낮춤'],
    tips({
      etymology: '고대 그리스 비극에서 신의 권위에 도전할 정도로 선을 넘는 인간의 과도한 자신감을 의미했습니다.',
      visual: '밀랍 날개를 달고 태양에 너무 가까이 날아올랐다가 추락한 이카루스의 모습을 상상해 보세요.',
      soundAlike: '휴브리스 - \'휴(후회)\'하게 될 \'브리스(부주의)\'하고 거만한 태도라고 기억하세요.',
      context: '주로 정치인이나 기업가 등 성공한 인물이 자신의 능력을 과신하여 타인의 경고를 무시할 때 자주 사용됩니다.',
      synonymAntonym: 'arrogance와 유사하지만 더 치명적인 결함의 뉘앙스가 강하며, 반대말로는 humility가 대표적입니다.',
    }),
    {
      definition: 'An extreme level of self-importance or overconfidence that often leads to a person\'s eventual failure or ruin.',
      synonyms: ['arrogance', 'conceit', 'haughtiness'],
      antonyms: ['humility', 'modesty', 'meekness'],
      exampleSentences: [
        { en: 'The CEO\'s hubris prevented him from seeing the flaws in his own business strategy.', ko: '그 최고경영자의 오만함 때문에 그는 자신의 사업 전략에 있는 결점들을 보지 못했다.' },
        { en: 'In many classic tragedies, the protagonist is destroyed by their own hubris.', ko: '많은 고전 비극에서 주인공은 그들 자신의 오만함에 의해 파멸에 이른다.' },
      ],
      wordDistractors: ['hubbub', 'hybrid', 'hummus'],
      definitionDistractors: [
        'A loud, confused noise caused by a large group of people.',
        'A quiet, humble attitude that avoids drawing attention to oneself.',
        'Something made by combining two different elements or species.',
      ],
    }
  ),
  word('hypothetical', '가설적인', 8, 'adjective',
    ['실제의', '검증된', '확정된', '사실의', '현실적인', '구체적인', '명백한', '증명된', '실재하는', '확실한'],
    tips({
      etymology: '그리스어 hypo(아래)와 thesis(놓다)가 결합된 단어로, 결론을 내리기 전에 논리 아래에 깔아두는 \'가정\'을 의미합니다.',
      visual: '과학자가 칠판에 커다란 물음표와 함께 \'What if?\'라고 적으며 실험을 구상하는 장면을 떠올려 보세요.',
      soundAlike: '하이포(High-포) 데티컬: 높은(High) 가능성을 포(Po)기하고 일단 \'가정\'부터 해보는 상황으로 기억하세요.',
      context: '과학적 연구뿐만 아니라 일상 대화에서 \'만약에 말이야\'라며 전제 조건을 달 때 자주 쓰이는 형용사입니다.',
      synonymAntonym: 'theoretical, speculative와 비슷하게 쓰이며, 실제 사실을 나타내는 actual, factual과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Based on a suggested idea or theory rather than on real facts or events.',
      synonyms: ['theoretical', 'assumed', 'speculative'],
      antonyms: ['actual', 'real', 'factual'],
      exampleSentences: [
        { en: 'Let\'s look at a hypothetical situation where the price of oil doubles overnight.', ko: '유가가 하룻밤 사이에 두 배로 뛰는 가설적인 상황을 가정해 봅시다.' },
        { en: 'The question was purely hypothetical, so he didn\'t feel the need to give a definitive answer.', ko: '그 질문은 순전히 가설적인 것이었기에 그는 확답을 줄 필요를 느끼지 못했다.' },
      ],
      wordDistractors: ['hypocritical', 'hypnotic', 'hysterical'],
      definitionDistractors: [
        'Saying one thing while secretly believing or doing the opposite.',
        'Having a mesmerizing effect that induces a trance-like state.',
        'Based on verified facts and confirmed through direct evidence.',
      ],
    }
  ),
  word('idiosyncrasy', '특이한 버릇, 특이 체질', 8, 'noun',
    ['보편성', '일반성', '표준', '정상', '공통점', '유사성', '전형', '규범', '일치', '대중성'],
    tips({
      etymology: '그리스어 \'idios(개인의)\'와 \'synkrasis(함께 섞임)\'가 결합되어, 한 개인에게만 나타나는 독특한 기질의 혼합을 의미합니다.',
      visual: '모두가 검은 정장을 입었을 때 혼자만 화려한 무지개색 양말을 고집하는 사람의 독특한 취향을 상상해 보세요.',
      soundAlike: '\'이디오(Idio)\'를 \'이게(Ige)\'로 연상하여 \'이게 바로 그 사람만의 독특한 싱크(생각)다\'라고 기억하세요.',
      context: '단순한 습관을 넘어, 타인과 구별되는 그 사람만의 독특한 행동 양식이나 기벽을 묘사할 때 사용됩니다.',
      synonymAntonym: 'quirk, peculiarity와 같은 단어는 독특함을 강조하며, norm이나 normality는 일반적인 표준 상태를 뜻합니다.',
    }),
    {
      definition: 'A structural or behavioral characteristic peculiar to an individual or a specific group.',
      synonyms: ['quirk', 'peculiarity', 'eccentricity'],
      antonyms: ['norm', 'commonality', 'normality'],
      exampleSentences: [
        { en: 'One of his personal idiosyncrasies is that he always wears a scarf, even in the middle of summer.', ko: '그의 개인적인 성벽 중 하나는 한여름에도 항상 스카프를 두르고 다닌다는 것이다.' },
        { en: 'The artist\'s work is full of idiosyncrasies that make it impossible to mistake for anyone else\'s.', ko: '그 예술가의 작품은 다른 사람의 것으로 착각할 수 없게 만드는 독특한 특징들로 가득 차 있다.' },
      ],
      wordDistractors: ['idiomatic', 'aristocracy', 'bureaucracy'],
      definitionDistractors: [
        'A system of government run by unelected officials and administrators.',
        'An expression whose meaning cannot be understood from individual words.',
        'A common trait or behavior shared by the majority of people.',
      ],
    }
  ),
  word('illicit', '불법의', 8, 'adjective',
    ['합법적인', '정당한', '허용된', '공식적인', '도덕적인', '승인된', '적법한', '윤리적인', '공인된', '바른'],
    tips({
      etymology: '부정을 뜻하는 접두사 il-과 \'허가된\'을 뜻하는 licit이 결합하여 법적으로 허용되지 않았음을 나타냅니다.',
      visual: '금지된 구역에서 몰래 거래를 주고받으며 주위를 살피는 은밀한 장면을 떠올려 보세요.',
      soundAlike: '일리시트(Illicit) -> \'일리(이리) 와서 시치미 뚝 떼고\' 하는 나쁜 짓.',
      context: '주로 마약 거래, 밀수, 또는 사회적으로 용납되지 않는 부적절한 관계를 묘사할 때 자주 사용됩니다.',
      synonymAntonym: 'illegal과 동의어이며, 법적 정당성을 뜻하는 legal, legitimate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'not allowed by laws or social customs, often carried out in a secretive manner',
      synonyms: ['illegal', 'unlawful', 'prohibited'],
      antonyms: ['lawful', 'legal', 'legitimate'],
      exampleSentences: [
        { en: 'The investigation revealed a large network of illicit activities within the organization.', ko: '조사 결과 조직 내에서 광범위한 불법 활동 네트워크가 드러났습니다.' },
        { en: 'He was arrested for his involvement in the illicit sale of stolen goods.', ko: '그는 장물 불법 판매에 관여한 혐의로 체포되었습니다.' },
      ],
      wordDistractors: ['elicit', 'implicit', 'explicit'],
      definitionDistractors: [
        'To draw out a response or information from someone.',
        'Fully authorized and permitted by the governing authorities.',
        'Suggested or implied without being directly expressed.',
      ],
    }
  ),
  word('imminent', '임박한', 8, 'adjective',
    ['먼', '연기된', '나중의', '불확실한', '과거의', '오래된', '느린', '지연된', '희박한', '먼미래의'],
    tips({
      etymology: 'im(위로)과 min(튀어나오다)이 합쳐져 머리 위로 곧 떨어질 듯 튀어나와 있는 상태를 뜻합니다.',
      visual: '머리 바로 위에서 떨어지기 직전인 커다란 바위나 곧 터질 것 같은 먹구름을 상상해 보세요.',
      soundAlike: '이미넌트 - \'이미\' 코앞에 \'넌\'에게 \'트\'질 듯이 다가온 긴박한 상황으로 기억하세요.',
      context: '주로 폭풍, 전쟁, 마감 기한처럼 피하기 어렵고 곧 닥칠 부정적인 사건에 자주 쓰입니다.',
      synonymAntonym: '곧 닥칠 듯한 impending과 유사하며, 한참 남았거나 먼 미래를 뜻하는 distant와 반대됩니다.',
    }),
    {
      definition: 'likely to occur at any moment; impending or fast approaching',
      synonyms: ['impending', 'approaching', 'looming'],
      antonyms: ['distant', 'remote', 'delayed'],
      exampleSentences: [
        { en: 'The dark clouds suggest that a heavy rainstorm is imminent.', ko: '먹구름을 보니 폭우가 곧 쏟아질 것 같다.' },
        { en: 'The government issued a warning about an imminent volcanic eruption.', ko: '정부는 임박한 화산 폭발에 대해 경고를 발령했다.' },
      ],
      wordDistractors: ['eminent', 'immanent', 'prominent'],
      definitionDistractors: [
        'Famous and respected within a particular field or profession.',
        'Existing or operating within; inherent in something.',
        'Unlikely to happen for a very long time in the foreseeable future.',
      ],
    }
  ),
  word('impair', '손상시키다', 8, 'verb',
    ['개선하다', '강화하다', '회복시키다', '보완하다', '향상시키다', '수리하다', '증진하다', '치유하다', '북돋우다', '정비하다'],
    tips({
      etymology: '라틴어 peior(더 나쁜)에서 유래하여 상태를 더 나쁘게 만든다는 의미를 담고 있습니다.',
      visual: '매끈한 기계 부품에 커다란 흠집이 생겨 제대로 돌아가지 않는 장면을 상상해 보세요.',
      soundAlike: '임(안으로) + 페어(패이다) -> 물건의 안쪽이 푹 패이게 해서 기능을 망가뜨리는 모습으로 기억하세요.',
      context: '주로 시력, 청력 같은 신체 감각이나 인지 능력, 법적 효력 등이 약화될 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 망가뜨리는 damage와 비슷하며, 더 좋게 만드는 improve와는 정반대입니다.',
    }),
    {
      definition: 'to make something weaker or worse in quality, especially a physical ability or a vital function',
      synonyms: ['damage', 'weaken', 'harm'],
      antonyms: ['improve', 'enhance', 'strengthen'],
      exampleSentences: [
        { en: 'Consuming too much alcohol can significantly impair your judgment and reaction time.', ko: '과도한 알코올 섭취는 판단력과 반응 속도를 현저히 손상시킬 수 있습니다.' },
        { en: 'Lack of sleep is known to impair cognitive functions and concentration levels.', ko: '수면 부족은 인지 기능과 집중력을 손상시키는 것으로 알려져 있습니다.' },
      ],
      wordDistractors: ['impart', 'impale', 'impeach'],
      definitionDistractors: [
        'To share or communicate knowledge or information to someone.',
        'To fix something firmly so that it cannot be moved or changed.',
        'To significantly improve or enhance the quality of something.',
      ],
    }
  ),
  word('impartial', '공정한', 8, 'adjective',
    ['편파적인', '편향된', '불공정한', '차별적인', '주관적인', '치우친', '독단적인', '불평등한', '왜곡된', '선입견있는'],
    tips({
      etymology: '부정 접두사 im(not)과 partial(편파적인)이 결합되어, 어느 한쪽으로도 치우치지 않는다는 의미를 가집니다.',
      visual: '눈을 가린 채 양손에 수평이 완벽하게 맞는 저울을 들고 서 있는 정의의 여신상을 떠올려 보세요.',
      soundAlike: '임(안) + 파셜(파벌)로 연상하여, 특정 파벌 안으로 들어가지 않고 밖에서 중립을 지키는 모습입니다.',
      context: '법정의 판사, 경기의 심판, 혹은 객관적인 보도를 지향하는 기자에게 가장 강조되는 성질입니다.',
      synonymAntonym: 'fair와 유사한 의미로 쓰이며, 한쪽으로 기울어진 상태인 biased나 prejudiced와는 반대되는 개념입니다.',
    }),
    {
      definition: 'treating all rivals or disputants equally and not favoring one side over another',
      synonyms: ['fair', 'unbiased', 'neutral'],
      antonyms: ['biased', 'partial', 'prejudiced'],
      exampleSentences: [
        { en: 'A judge must remain impartial and provide a verdict based solely on evidence.', ko: '판사는 반드시 공정해야 하며 오로지 증거에 기반한 판결을 내려야 한다.' },
        { en: 'The committee was chosen to provide impartial advice on the matter.', ko: '그 사안에 대해 공정한 조언을 제공하기 위해 위원회가 선정되었다.' },
      ],
      wordDistractors: ['imperial', 'impactful', 'impatient'],
      definitionDistractors: [
        'Relating to an empire or the authority of a supreme ruler.',
        'Having a major effect or influence on events or outcomes.',
        'Favoring one side strongly over the other in a dispute.',
      ],
    }
  ),
];
