import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch17: VocabItem[] = [
  word('Abnegate', '포기하다', 9, 'verb',
    ['촉진하다', '장려하다', '채택하다', '옹호하다', '수용하다', '주장하다', '획득하다', '강화하다', '보존하다', '계승하다'],
    tips({
      etymology: '라틴어 ab(멀리)와 negare(부인하다)가 결합된 단어로, 자신에게 속한 것을 멀리하며 부정한다는 뜻에서 유래했습니다.',
      visual: '화려한 보석이나 권력을 상징하는 물건을 스스로 밀어내며 고개를 돌리는 고결한 수행자의 모습을 상상해 보세요.',
      soundAlike: '앱니게이트(Abnegate) -> \'입 내밀고\' 싫다며 거절하며 자신의 권리를 포기하는 상황을 연상하면 기억하기 쉽습니다.',
      context: '단순히 잃어버리는 것이 아니라, 종교적 신념이나 도덕적 이유로 권리나 즐거움을 스스로 절제하고 버릴 때 주로 쓰입니다.',
      synonymAntonym: 'renounce와 같이 공식적으로 버리는 행위와 유사하며, 자신의 권리를 당당히 요구하는 claim과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to formally give up a right or a pleasure, or to reject a responsibility',
      synonyms: ['renounce', 'relinquish', 'surrender'],
      antonyms: ['assert', 'claim', 'embrace'],
      exampleSentences: [
        { en: 'The monarch chose to renounce his power and live a simple life.', ko: '그 군주는 자신의 권력을 버리고 소박한 삶을 살기로 선택했다.' },
        { en: 'Many monks decide to reject all physical comforts to focus on their faith.', ko: '많은 승려들이 신앙에 집중하기 위해 모든 신체적 안락함을 포기하기로 결심한다.' },
      ],
    }
  ),
  word('Abscond', '도망하다', 9, 'verb',
    ['등장하다', '출현하다', '남다', '잔류하다', '복귀하다', '머무르다', '직면하다', '자수하다', '나타나다', '체류하다'],
    tips({
      etymology: '라틴어 ab(멀리)와 condere(숨기다)가 합쳐진 단어로, 멀리 가서 숨어버린다는 의미를 담고 있습니다.',
      visual: '회사의 공금을 가방에 가득 채운 뒤, 아무도 없는 새벽에 뒷문으로 몰래 빠져나가는 횡령범의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'앱스콘드\'이므로, \'애쓰고(abscond)\' 도망가서 흔적도 없이 사라진 상황으로 연상하면 쉽습니다.',
      context: '단순히 자리를 비우는 것이 아니라, 주로 범죄를 저지르거나 체포를 피하기 위해 몰래 급히 달아날 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'flee나 escape와 유사하지만 더 은밀한 뉘앙스가 있으며, 정반대로 자리에 남는 것은 remain이나 stay를 씁니다.',
    }),
    {
      definition: 'to depart suddenly and secretly, often to avoid detection or arrest for an unlawful action',
      synonyms: ['flee', 'bolt', 'decamp'],
      antonyms: ['remain', 'stay', 'appear'],
      exampleSentences: [
        { en: 'The accountant was found to have absconded with a large sum of the company\'s money.', ko: '그 회계사가 회사의 거액을 횡령하여 도망친 사실이 밝혀졌다.' },
        { en: 'Several prisoners managed to abscond from the low-security facility during the night.', ko: '몇몇 죄수들이 밤사이에 보안 수준이 낮은 시설에서 탈출하는 데 성공했다.' },
      ],
    }
  ),
  word('Abstemious', '절제하는', 9, 'adjective',
    ['탐식하는', '과식하는', '사치스러운', '방탕한', '냉소적인', '무절제한', '탐욕스러운', '방종한', '문란한', '낭비하는'],
    tips({
      etymology: '라틴어 ab(멀리)와 temetum(강한 술)이 결합된 단어로, 술이나 음식 같은 육체적 유혹으로부터 멀리 떨어진다는 의미에서 유래했습니다.',
      visual: '화려한 뷔페 식당에서 접시에 샐러드와 물 한 잔만 담아 조용히 식사하는 사람의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'입을 떼미(ab-stemi)\'와 비슷합니다. 맛있는 고기 요리에서 입을 떼고 식사를 멈추는 절제력을 떠올려 보세요.',
      context: '단순히 다이어트를 하는 상황뿐만 아니라, 도덕적이나 종교적인 이유로 검소하고 엄격한 생활 방식을 유지할 때 주로 사용됩니다.',
      synonymAntonym: '중용을 지키는 temperate와 비슷하며, 욕망에 충실한 indulgent나 gluttonous와는 정반대의 뜻을 가집니다.',
    }),
    {
      definition: 'marked by restraint and moderation, particularly when consuming food or alcohol',
      synonyms: ['temperate', 'moderate', 'abstinent'],
      antonyms: ['indulgent', 'gluttonous', 'self-indulgent'],
      exampleSentences: [
        { en: 'His abstemious lifestyle kept him healthy and energetic even in old age.', ko: '그의 절제된 생활 방식은 노년에도 그를 건강하고 활기차게 유지해 주었다.' },
        { en: 'The monk lived an abstemious life, consuming only what was necessary for survival.', ko: '그 수도사는 생존에 필요한 것만 섭취하며 절제된 삶을 살았다.' },
      ],
    }
  ),
  word('Accede', '동의하다', 9, 'verb',
    ['거부하다', '저항하다', '반대하다', '거절하다', '배척하다', '무시하다', '회피하다', '부인하다', '방해하다', '지연시키다'],
    tips({
      etymology: 'ac(~로)와 cede(가다)가 결합하여, 상대방이 원하는 방향으로 걸어 들어가 합의점에 도달한다는 의미를 담고 있습니다.',
      visual: '회의실에서 팽팽한 대립 끝에 마침내 펜을 들어 상대방의 제안서에 서명하며 고개를 끄덕이는 모습을 떠올려 보세요.',
      soundAlike: '액시드(Accede) -> \'어, 시드(seed) 줄게!\'라고 말하며 상대방이 요구하는 씨앗을 건네주는 승낙의 상황으로 기억하세요.',
      context: '단순한 찬성보다는 주로 공식적인 압력, 끈질긴 요청, 혹은 국가 간의 조약 체결 시 마지못해 혹은 공식적으로 응할 때 쓰입니다.',
      synonymAntonym: '공식적 승낙인 consent와 유사하며, 단호하게 거절하는 refuse나 reject와는 정반대의 개념입니다.',
    }),
    {
      definition: 'to give your approval or consent to a proposal, request, or legal agreement, often after initial hesitation',
      synonyms: ['consent', 'acquiesce', 'assent'],
      antonyms: ['refuse', 'demur', 'dissent'],
      exampleSentences: [
        { en: 'The authorities eventually decided to accede to the protesters\' demands to avoid further conflict.', ko: '당국은 더 이상의 갈등을 피하기 위해 결국 시위대의 요구에 응하기로 결정했습니다.' },
        { en: 'It is highly unlikely that the board will accede to such an unreasonable request for a budget increase.', ko: '이사회에서 그토록 비합리적인 예산 증액 요청을 승인할 가능성은 매우 낮습니다.' },
      ],
    }
  ),
  word('Acerbic', '신랄한', 9, 'adjective',
    ['부드러운', '상냥한', '우호적인', '달콤한', '온건한', '자상한', '친절한', '따뜻한', '너그러운', '유순한'],
    tips({
      etymology: '라틴어 acer(날카로운, 신)에서 유래하여 맛이 시거나 말이 날카롭다는 뜻을 가집니다.',
      visual: '레몬을 한 입 베어 물었을 때처럼 얼굴이 찌푸려질 정도로 독설을 내뱉는 사람을 상상해보세요.',
      soundAlike: '어서빅 -> \'어, 쓰비(acerbic)\' 맛이 쓰고 말이 쓰다니!',
      context: '비평이나 농담이 매우 날카롭고 비꼬는 듯한 태도를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'sharp와 비슷하며, 태도가 부드럽고 온화한 mild와 대조됩니다.',
    }),
    {
      definition: 'expressing harsh or sharp criticism in a clever way',
      synonyms: ['sarcastic', 'trenchant', 'mordant'],
      antonyms: ['complimentary', 'gentle', 'mellow'],
      exampleSentences: [
        { en: 'The comedian is famous for his acerbic humor regarding modern politics.', ko: '그 코미디언은 현대 정치에 대한 신랄한 유머로 유명하다.' },
        { en: 'She wrote an acerbic letter to the editor complaining about the new policy.', ko: '그녀는 새로운 정책에 대해 불평하는 신랄한 편지를 편집자에게 썼다.' },
      ],
    }
  ),
  word('Acquiesce', '묵인하다', 9, 'verb',
    ['저항하다', '반대하다', '거부하다', '항의하다', '투쟁하다', '반박하다', '거절하다', '대립하다', '부인하다', '충돌하다'],
    tips({
      etymology: '라틴어 ad(향해서)와 quiescere(조용히 하다)가 결합된 단어로, 조용히 상황을 받아들인다는 뜻에서 유래했습니다.',
      visual: '회의실에서 마음에 들지 않는 제안을 듣고도, 어깨를 으쓱하며 말없이 서류에 서명하는 사람의 모습.',
      soundAlike: '액퀴에스 -> \'아, 귀에 쏙\' 들어오게 설득하니 어쩔 수 없이 따르겠다는 느낌으로 기억하세요.',
      context: '완전한 동의는 아니지만, 더 이상 논쟁하기 싫어서 혹은 상황상 어쩔 수 없이 수용할 때 사용합니다.',
      synonymAntonym: '순응하는 comply와 비슷하지만 더 수동적인 느낌이며, 강하게 반대하는 resist와는 대조적입니다.',
    }),
    {
      definition: 'to permit something to happen or to agree to a request even if one is not completely happy about it',
      synonyms: ['comply', 'concede', 'yield'],
      antonyms: ['resist', 'protest', 'object'],
      exampleSentences: [
        { en: 'The administration eventually decided to acquiesce to the students\' demands.', ko: '행정실은 결국 학생들의 요구를 묵인하기로 결정했다.' },
        { en: 'She did not agree with the plan but chose to acquiesce for the sake of peace.', ko: '그녀는 그 계획에 동의하지 않았지만 평화를 위해 묵인하는 쪽을 택했다.' },
      ],
    }
  ),
  word('Adulterate', '혼합하다', 9, 'verb',
    ['정제하다', '순화하다', '여과하다', '세척하다', '분리하다', '보존하다', '강화하다', '복구하다', '검수하다', '추출하다'],
    tips({
      etymology: '라틴어 \'adulterare\'에서 유래했으며, \'ad(~에)\'와 \'alter(다른 것)\'가 결합되어 \'다른 것을 섞어 본질을 바꾸다\'라는 의미를 가집니다.',
      visual: '깨끗한 물 컵에 검은 잉크 한 방울이 떨어져 전체가 탁해지는 모습을 상상해 보세요.',
      soundAlike: '\'어덜트(adult) 레이트\'로 발음되는데, 아이의 순수함에 어른의 복잡한 세상 때가 묻어 섞이는 느낌으로 기억하세요.',
      context: '주로 식품 위생이나 화학 물질의 순도를 다룰 때 쓰이며, 이익을 위해 불순물을 섞는 부정적인 상황에 자주 등장합니다.',
      synonymAntonym: '오염시키는 contaminate와 유사하며, 불순물을 제거하여 깨끗하게 만드는 purify와 정반대되는 개념입니다.',
    }),
    {
      definition: 'to lower the quality of a substance by adding something else that is often less valuable or impure',
      synonyms: ['contaminate', 'debase', 'pollute'],
      antonyms: ['purify', 'refine', 'distill'],
      exampleSentences: [
        { en: 'The company was fined for trying to adulterate the olive oil with cheaper vegetable oils.', ko: '그 회사는 올리브유에 값싼 식용유를 섞어 품질을 떨어뜨리려 한 혐의로 벌금을 물었습니다.' },
        { en: 'To ensure the safety of the public, the government strictly forbids anyone to adulterate dairy products.', ko: '공공의 안전을 보장하기 위해 정부는 누구든 유제품에 불순물을 섞는 것을 엄격히 금지합니다.' },
      ],
    }
  ),
  word('Aggrandize', '과대하다', 9, 'verb',
    ['축소하다', '폄하하다', '겸손해지다', '감소시키다', '절제하다', '비하하다', '위축되다', '경감하다', '낮추다', '쇠퇴하다'],
    tips({
      etymology: '접두사 ad-(~에)와 grandis(큰)가 결합된 단어로, 어떤 대상을 더 크게 만든다는 어원을 가지고 있습니다.',
      visual: '풍선에 바람을 가득 넣어 실제 크기보다 훨씬 크게 부풀리는 장면을 떠올려 보세요.',
      soundAlike: '\'어그랜다이즈\'를 \'아, 그랜드(grand) 사이즈\'로 기억하면 규모를 크게 키운다는 느낌을 쉽게 잡을 수 있습니다.',
      context: '주로 정치적 권력, 개인의 명성, 또는 재산의 규모를 실제보다 부풀리거나 강화할 때 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '무언가를 크게 부풀리는 exaggerate와 비슷하며, 가치를 깎아내리는 belittle과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To enhance the reputation, power, or wealth of someone or something beyond what is justified by reality.',
      synonyms: ['exaggerate', 'magnify', 'amplify'],
      antonyms: ['belittle', 'diminish', 'degrade'],
      exampleSentences: [
        { en: 'The king attempted to aggrandize his family\'s name by building magnificent monuments.', ko: '왕은 웅장한 기념비들을 세움으로써 가문의 명성을 드높이려 시도했다.' },
        { en: 'He was accused of trying to aggrandize his role in the success of the project.', ko: '그는 프로젝트의 성공에서 자신의 역할을 과대포장하려 했다는 비난을 받았다.' },
      ],
    }
  ),
  word('Alacrity', '민첩', 9, 'noun',
    ['느림', '지연', '무기력', '마지못함', '꾸물거림', '망설임', '태만', '권태', '거부', '냉담'],
    tips({
      etymology: '라틴어 alacritas에서 유래하여 \'활기차고 기쁜 상태\'를 의미합니다.',
      visual: '상사가 부르자마자 밝은 표정으로 즉시 달려가는 신입사원의 모습',
      soundAlike: '얼래? 크리티컬(Critical)하게 빨리 움직이네! 라고 외우세요.',
      context: '주로 제안이나 요청을 아주 기쁘고 빠르게 수락할 때 사용됩니다.',
      synonymAntonym: 'eagerness와 유사하며, reluctance와는 정반대의 태도입니다.',
    }),
    {
      definition: 'A quick and cheerful readiness to do something or respond to a request.',
      synonyms: ['eagerness', 'willingness', 'promptness'],
      antonyms: ['reluctance', 'apathy', 'indifference'],
      exampleSentences: [
        { en: 'She accepted the invitation with such enthusiasm and speed.', ko: '그녀는 아주 기쁘고 민첩하게 초대를 수락했다.' },
        { en: 'The staff responded with promptness to the emergency.', ko: '직원들이 비상사태에 즉각적이고 활기차게 대응했다.' },
      ],
    }
  ),
  word('Altruism', '이타주의', 9, 'noun',
    ['이기심', '자기중심', '욕심', '이기주의', '착취', '탐욕', '독점', '편협', '인색', '질투'],
    tips({
      etymology: '라틴어 \'alter\'(다른 사람)에서 유래하여, 나 자신이 아닌 타인을 향하는 마음을 뜻합니다.',
      visual: '추운 겨울날 자신의 겉옷을 벗어 노숙자에게 덮어주는 따뜻한 뒷모습을 상상해 보세요.',
      soundAlike: '\'알(All) + 트루(True)\': 모든(All) 행동이 진실(True)되고 순수하게 남을 돕는 마음.',
      context: '자신의 이익이나 보상을 바라지 않고 타인의 복지와 행복을 우선시하는 윤리적 태도를 말합니다.',
      synonymAntonym: 'selflessness와 유의어이며, 자신의 이익만 챙기는 selfishness와는 정반대 개념입니다.',
    }),
    {
      definition: 'The principle or practice of unselfish concern for or devotion to the welfare of others.',
      synonyms: ['selflessness', 'benevolence', 'philanthropy'],
      antonyms: ['selfishness', 'egoism', 'narcissism'],
      exampleSentences: [
        { en: 'The billionaire\'s commitment to global health is a remarkable example of modern philanthropy and care for humanity.', ko: '그 억만장자의 세계 보건에 대한 헌신은 현대적 이타주의와 인류애의 놀라운 본보기입니다.' },
        { en: 'Many animals exhibit behaviors that suggest a natural instinct for helping others within their group.', ko: '많은 동물들이 집단 내의 다른 개체들을 돕는 천성적인 이타주의 본능을 암시하는 행동을 보입니다.' },
      ],
    }
  ),
  word('Anachronism', '시대착오', 9, 'noun',
    ['시대적 적합', '현대성', '적시성', '동시성', '정합성', '최신식', '유행', '동시대', '일치', '조화'],
    tips({
      etymology: '그리스어 ana(거꾸로)와 chronos(시간)가 결합되어 시간이 잘못 배치되었음을 의미합니다.',
      visual: '사극 드라마 속 주인공이 스마트폰을 들고 셀카를 찍고 있는 어색한 장면을 상상해 보세요.',
      soundAlike: '아나(Ana)! 크로노스(Chronos, 시간의 신)가 시간을 거꾸로 돌려놨네!라고 외워보세요.',
      context: '역사적 고증이 잘못된 영화의 소품이나, 현대 사회에서 너무 낡아 어울리지 않는 관습을 비판할 때 자주 쓰입니다.',
      synonymAntonym: '시간적 배치가 잘못된 misplacement와 유사하며, 동시대성을 뜻하는 modernity와 대조됩니다.',
    }),
    {
      definition: 'A person, thing, or custom that is placed in a chronological period where it does not belong, often appearing out of date.',
      synonyms: ['misplacement', 'archaism', 'solecism'],
      antonyms: ['contemporaneity', 'modernity', 'synchronism'],
      exampleSentences: [
        { en: 'The appearance of a digital watch in a movie set in the 1700s is a glaring historical error.', ko: '1700년대를 배경으로 한 영화에 디지털 시계가 등장하는 것은 명백한 시대착오적 오류이다.' },
        { en: 'Some people believe that the monarchy is a useless relic and a complete social inconsistency in the modern world.', ko: '어떤 이들은 군주제가 현대 사회에서 쓸모없는 유물이자 완전한 시대착오라고 믿는다.' },
      ],
    }
  ),
  word('Anathema', '저주', 9, 'noun',
    ['축복', '찬미', '영광', '선물', '은총', '칭송', '환영', '애호', '숭배', '승인'],
    tips({
      etymology: '그리스어에서 유래하여 원래 \'신에게 바쳐진 것\'이었으나, 나중에 교회에서 추방하거나 \'파문/저주\'하는 의미로 변했습니다.',
      visual: '성스러운 장소에서 쫓겨나 어둠 속으로 던져지는 사람이나 금기시되는 물건을 상상해 보세요.',
      soundAlike: '아나(Ana) 테마(Theme): \'아나, 이 테마(주제)는 정말 싫어!\'라고 외치는 상황을 떠올려 보세요.',
      context: '단순한 싫증을 넘어, 도덕적이나 종교적으로 절대 용납할 수 없는 혐오 대상을 가리킬 때 주로 쓰입니다.',
      synonymAntonym: 'abomination과 같이 끔찍한 대상을 뜻하며, 신의 축복을 뜻하는 blessing과는 정반대입니다.',
    }),
    {
      definition: 'something or someone that is passionately disliked, cursed, or strongly rejected by a particular group',
      synonyms: ['abomination', 'curse', 'detestation'],
      antonyms: ['blessing', 'benediction', 'approval'],
      exampleSentences: [
        { en: 'The concept of racial discrimination is a complete anathema to any democratic society.', ko: '인종 차별이라는 개념은 어떤 민주주의 사회에서도 절대 용납될 수 없는 저주스러운 것이다.' },
        { en: 'For the strict vegetarian, the idea of eating any kind of meat was anathema.', ko: '엄격한 채식주의자에게 어떤 종류의 고기든 먹는다는 생각은 혐오스러운 일이었다.' },
      ],
    }
  ),
  word('Antediluvian', '대홍수 이전의', 9, 'adjective',
    ['현대적인', '최신식의', '진보적인', '혁신적인', '세련된', '첨단의', '동시대의', '유행하는', '미래지향적인', '신선한'],
    tips({
      etymology: '라틴어 \'ante(이전)\'와 \'diluvium(홍수)\'이 결합된 단어로, 성경에 나오는 노아의 대홍수 이전 시대를 가리키는 말에서 유래했습니다.',
      visual: '최첨단 AI 시대에 깃털 펜으로 편지를 쓰고 거대한 증기 기관차를 타는 모습을 상상해 보세요.',
      soundAlike: '안테나(Ante)가 달린 아주 오래된 흑백 TV는 정말 구식(Diluvian)이라는 느낌으로 기억하세요.',
      context: '단순히 \'오래된\' 수준을 넘어, 박물관에나 있어야 할 정도로 \'말도 안 되게 구식인\' 상황을 묘사할 때 주로 사용합니다.',
      synonymAntonym: 'Antiquated와 유사하게 시대에 뒤떨어진 느낌을 주며, Modern과는 정반대의 개념입니다.',
    }),
    {
      definition: 'extremely old-fashioned or belonging to a time long ago, as if existing before the biblical flood',
      synonyms: ['antiquated', 'archaic', 'obsolete'],
      antonyms: ['modern', 'current', 'contemporary'],
      exampleSentences: [
        { en: 'The university\'s computer system is practically prehistoric and relies on such old technology.', ko: '그 대학교의 컴퓨터 시스템은 거의 선사 시대 수준이며 매우 구식 기술에 의존하고 있다.' },
        { en: 'He still holds some incredibly outdated attitudes toward social media and technology.', ko: '그는 여전히 소셜 미디어와 기술에 대해 믿을 수 없을 정도로 고리타분한 태도를 가지고 있다.' },
      ],
    }
  ),
  word('Anthropocentric', '인간중심적', 9, 'adjective',
    ['생태중심적', '자연친화적', '우주중심적', '신중심적', '환경주의', '평등주의', '다원적', '분산적', '객관적', '동등한'],
    tips({
      etymology: '그리스어 anthropos(인간)와 kentron(중심)이 결합되어 만들어진 단어입니다.',
      visual: '지구의 모든 생명체와 자원이 오직 인간을 위해서만 존재한다고 믿는 피라미드 구조를 상상해 보세요.',
      soundAlike: '앤스로포(인간) + 센트릭(센터/중심): \'인간이 세상의 센터(Center)다\'라고 기억하면 쉽습니다.',
      context: '주로 환경 윤리나 철학적 담론에서 인간의 편의만을 위해 자연을 파괴하는 태도를 비판할 때 자주 등장합니다.',
      synonymAntonym: 'human-centered와 의미가 통하며, 생태계를 중시하는 ecocentric이나 생명 중심의 biocentric과는 반대됩니다.',
    }),
    {
      definition: 'regarding humankind as the central or most important element of existence, especially as opposed to God or animals',
      synonyms: ['human-centered', 'hominocentric', 'anthropocentricity'],
      antonyms: ['ecocentric', 'biocentric', 'theocentric'],
      exampleSentences: [
        { en: 'We must move beyond a perspective that only values human needs.', ko: '우리는 오직 인간의 필요만을 가치 있게 여기는 인간중심적 관점을 넘어서야 한다.' },
        { en: 'Such views often ignore the intrinsic value of the environment.', ko: '그러한 인간중심적 견해는 종종 환경의 내재적 가치를 무시하곤 한다.' },
      ],
    }
  ),
  word('Antipathy', '반감', 9, 'noun',
    ['호감', '우정', '동정', '친근함', '애정', '매력', '친밀', '선호', '공감', '유대'],
    tips({
      etymology: 'anti(반대)와 pathos(감정)가 결합하여 \'상대방에게 맞서는 부정적인 마음\'을 뜻하게 되었습니다.',
      visual: '자석의 같은 극끼리 서로 닿지 않으려고 강하게 밀어내는 반발력을 상상해 보세요.',
      soundAlike: '연예인의 \'안티(Anti)\' 팬들이 느끼는 강한 \'패시(Pathy, 감정)\'라고 기억하면 쉽습니다.',
      context: '단순한 싫증을 넘어 본능적으로 거부감이 들거나 뿌리 깊은 적대감을 표현할 때 주로 쓰입니다.',
      synonymAntonym: '유사어로는 hostility가 있으며, 마음이 통하는 sympathy와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A strong feeling of intense dislike, opposition, or anger toward someone or something.',
      synonyms: ['hostility', 'aversion', 'animosity'],
      antonyms: ['sympathy', 'affinity', 'attraction'],
      exampleSentences: [
        { en: 'There has always been a strong feeling of mutual dislike between the two rival families.', ko: '그 두 라이벌 가문 사이에는 항상 강한 상호 반감이 존재해 왔다.' },
        { en: 'His fundamental opposition to modern technology made it difficult for him to use a smartphone.', ko: '현대 기술에 대한 그의 근본적인 반감은 그가 스마트폰을 사용하는 것을 어렵게 만들었다.' },
      ],
    }
  ),
  word('Apotheosis', '신격화', 9, 'noun',
    ['폄하', '비난', '욕설', '모욕', '타락', '실추', '강등', '멸시', '좌절', '쇠퇴'],
    tips({
      etymology: '그리스어 apo(변화)와 theos(신)가 결합하여 사람이 신의 지위로 격상됨을 의미합니다.',
      visual: '고대 로마 황제가 죽은 뒤 구름을 타고 하늘로 올라가 신들 사이에 앉는 장면을 상상해 보세요.',
      soundAlike: '아포(Apo) + 테오(Theos, 신): \'아, 포(포스)가 넘치는 테오(신)의 경지\'로 기억하세요.',
      context: '단순한 성공을 넘어 특정 인물이나 업적이 신적인 숭배의 대상이 되거나 예술적 완성도가 정점에 달했을 때 사용합니다.',
      synonymAntonym: 'deification과 의미가 통하며, 가장 낮은 바닥을 뜻하는 nadir와는 정반대 개념입니다.',
    }),
    {
      definition: 'The perfect form or example of something, or the elevation of a human being to the rank of a god.',
      synonyms: ['deification', 'pinnacle', 'climax'],
      antonyms: ['nadir', 'degradation', 'vilification'],
      exampleSentences: [
        { en: 'The championship win was the ultimate peak of his sporting career.', ko: '그 챔피언십 우승은 그의 스포츠 경력의 절정이었다.' },
        { en: 'The masterpiece was considered the perfect example of the artist\'s skill.', ko: '그 걸작은 그 예술가 기술의 극치로 여겨졌다.' },
      ],
    }
  ),
  word('Approbation', '승인', 9, 'noun',
    ['비난', '거부', '반대', '불찬성', '경멸', '사과', '질책', '냉대', '무시', '항의'],
    tips({
      etymology: '라틴어 ad(~에 대하여)와 probare(증명하다)가 결합되어, 어떤 것이 충분히 좋다고 증명되어 인정받는다는 의미에서 유래했습니다.',
      visual: '오디션 프로그램에서 심사위원 전원이 환하게 웃으며 합격 버튼을 누르는 장면을 떠올려 보세요.',
      soundAlike: '동사형인 approve(승인하다)와 발음이 매우 유사하므로, 그 명사형인 \'승인\'이나 \'찬성\'으로 기억하면 쉽습니다.',
      context: '단순한 동의를 넘어 공식적인 기관의 허가나 대중의 열렬한 찬사를 나타낼 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'approval, endorsement와 같은 긍정적인 승인을 의미하며, 반대로 비난을 뜻하는 disapproval이나 criticism과는 대조됩니다.',
    }),
    {
      definition: 'Official recognition or an expression of warm physical or verbal support and praise.',
      synonyms: ['approval', 'endorsement', 'praise'],
      antonyms: ['disapproval', 'criticism', 'condemnation'],
      exampleSentences: [
        { en: 'The plan met with general approbation from the board of directors.', ko: '그 계획은 이사회로부터 전반적인 승인을 받았다.' },
        { en: 'She nodded in approbation of his proposal during the meeting.', ko: '그녀는 회의 중에 그의 제안에 찬성하며 고개를 끄덕였다.' },
      ],
    }
  ),
  word('Arbiter', '중재자', 9, 'noun',
    ['당사자', '참여자', '이해관계자', '방관자', '피고인', '원고', '증인', '범인', '조력자', '추종자'],
    tips({
      etymology: '라틴어 arbiter(목격자, 판단자)에서 유래하여 분쟁의 현장에서 결정을 내리는 사람을 뜻합니다.',
      visual: '싸우는 두 사람 사이에서 엄격한 표정으로 판결을 내리는 판사의 모습을 그려보세요.',
      soundAlike: '스타크래프트의 \'아비터\' 유닛이 전장을 중재하고 관리하는 모습을 연상하면 기억하기 쉽습니다.',
      context: '법적인 분쟁뿐만 아니라 패션이나 유행의 \'결정권자\'를 지칭할 때도 자주 사용됩니다.',
      synonymAntonym: '동의어로는 mediator, judge, referee가 있으며 반의어로는 partisan, disputant, follower가 있습니다.',
    }),
    {
      definition: 'a person who settles a dispute or has ultimate authority in a matter',
      synonyms: ['mediator', 'judge', 'referee'],
      antonyms: ['partisan', 'disputant', 'follower'],
      exampleSentences: [
        { en: 'The judge acted as a neutral party in the dispute.', ko: '판사가 분쟁에서 중립적인 중재자로 행동했다.' },
        { en: 'Fashion designers are often seen as the ultimate deciders of taste.', ko: '패션 디자이너들은 종종 취향의 최종적인 결정권자로 여겨진다.' },
      ],
    }
  ),
  word('Assuage', '완화하다', 9, 'verb',
    ['악화시키다', '증폭하다', '자극하다', '격화시키다', '부추기다', '선동하다', '괴롭히다', '심화하다', '유발하다', '강화하다'],
    tips({
      etymology: '라틴어 ad(~에)와 suavis(달콤한)가 결합된 단어로, 쓰거나 거친 상태를 달콤하고 부드럽게 만든다는 어원을 가집니다.',
      visual: '화난 사람의 등에 시원한 물을 뿌려 열기를 식히거나, 타오르는 불길에 모래를 덮어 잠재우는 모습을 떠올려 보세요.',
      soundAlike: '\'어스웨이지\'라는 발음에서 거센 파도가 \'스윽\'하고 잦아들며 평온해지는 소리를 연상하면 기억하기 쉽습니다.',
      context: '주로 갈증을 해소하거나, 죄책감, 공포, 분노와 같은 강렬하고 부정적인 감정을 진정시킬 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'soothe, alleviate, mitigate는 고통을 덜어주는 친구들이고, aggravate, intensify, exacerbate는 상황을 더 나쁘게 만드는 반대 세력입니다.',
    }),
    {
      definition: 'to make an unpleasant or intense feeling less severe or more bearable',
      synonyms: ['soothe', 'alleviate', 'mitigate'],
      antonyms: ['aggravate', 'intensify', 'exacerbate'],
      exampleSentences: [
        { en: 'The government tried to assuage the public\'s fears about the economy.', ko: '정부는 경제에 대한 대중의 공포를 완화하기 위해 노력했다.' },
        { en: 'A gentle apology was enough to assuage his burning anger.', ko: '진심 어린 사과 한마디면 그의 타오르는 분노를 달래기에 충분했다.' },
      ],
    }
  ),
  word('Atavism', '조상 반현', 9, 'noun',
    ['진화', '발전', '혁신', '진보', '현대화', '개량', '변이', '성장', '창조', '미래주의'],
    tips({
      etymology: '라틴어 atavus(조상의 할아버지)에서 유래하여 먼 조상의 특징이 다시 나타나는 현상을 말합니다.',
      visual: '현대인의 몸에 꼬리뼈가 길게 자라나거나 야생의 본능이 꿈틀대는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'애터비즘\'으로, \'애(아이)\'가 \'터(터전)\'를 찾아 조상에게 돌아가는 느낌으로 외워보세요.',
      context: '생물학적 유전뿐만 아니라 과거의 관습이나 원시적인 행동이 갑자기 나타날 때도 씁니다.',
      synonymAntonym: '동의어로는 throwback, reversion, recurrence가 있으며 반의어로는 innovation, progression, evolution가 있습니다.',
    }),
    {
      definition: 'the reappearance in an individual of a characteristic of a remote ancestor that has been absent for several generations',
      synonyms: ['throwback', 'reversion', 'recurrence'],
      antonyms: ['innovation', 'progression', 'evolution'],
      exampleSentences: [
        { en: 'The extra toe was a clear case of biological recurrence from a distant ancestor.', ko: '추가된 발가락은 먼 조상으로부터 물려받은 명백한 조상 반현 사례였다.' },
        { en: 'Some consider his violent temper a psychological throwback to primitive times.', ko: '어떤 사람들은 그의 폭력적인 성미를 원시 시대로의 심리적 회귀로 본다.' },
      ],
    }
  ),
  word('Avarice', '탐욕', 9, 'noun',
    ['관대함', '포기', '나눔', '만족', '겸손', '희생', '절제', '베풂', '청렴', '기부'],
    tips({
      etymology: '라틴어 \'avere(갈망하다)\'에서 유래하여, 재물에 대해 끝이 없는 욕심을 부리는 상태를 뜻합니다.',
      visual: '금화 더미 위에 앉아 아무에게도 나누어주지 않으려 눈을 번뜩이는 구두쇠의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'애버리스\'와 유사하므로, 돈을 쓰지 않고 \'싹 다 버리(지 않고) 쓰(다)\'라고 고집하는 욕심쟁이를 떠올려 보세요.',
      context: '단순한 욕심을 넘어 도덕을 저버릴 정도의 극심하고 맹목적인 금전적 탐욕을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: 'greed와 유사하지만 더 격식 있는 표현이며, 반대말로는 남을 돕는 성품인 generosity나 philanthropy가 있습니다.',
    }),
    {
      definition: 'An intense and selfish desire for wealth or material possessions.',
      synonyms: ['greed', 'covetousness', 'cupidity'],
      antonyms: ['generosity', 'philanthropy', 'altruism'],
      exampleSentences: [
        { en: 'The corporate executive\'s relentless pursuit of profit was fueled by pure avarice.', ko: '그 기업 간부의 끈질긴 이윤 추구는 순전한 탐욕에서 비롯된 것이었다.' },
        { en: 'In the classic fable, the character\'s downfall was caused by his own uncontrollable avarice.', ko: '고전 우화에서 그 등장인물의 몰락은 스스로의 억제할 수 없는 탐욕 때문에 발생했다.' },
      ],
    }
  ),
  word('Axiomatic', '자명한', 9, 'adjective',
    ['의심스러운', '불명확한', '애매한', '모순된', '거짓의', '불확실한', '논란의', '가변적인', '복잡한', '난해한'],
    tips({
      etymology: '그리스어 axioma(가치 있는 것, 공리)에서 유래하여 증명할 필요조차 없는 당연한 진리를 뜻합니다.',
      visual: '1 더하기 1은 2라는 수식처럼 누구도 부정할 수 없는 명확한 표지판을 상상해 보세요.',
      soundAlike: '발음이 \'액시오매틱\'으로, \'액션(Action)\'이 필요 없을 정도로 \'매틱(Automatic)\'하게 당연하다는 느낌입니다.',
      context: '수학적 원리나 사회적으로 너무나 당연하게 받아들여지는 사실을 설명할 때 사용합니다.',
      synonymAntonym: '동의어로는 self-evident, obvious, unquestionable이 있으며 반의어로는 questionable, debatable, uncertain이 있습니다.',
    }),
    {
      definition: 'taken for granted as true and not requiring proof or demonstration',
      synonyms: ['self-evident', 'obvious', 'unquestionable'],
      antonyms: ['questionable', 'debatable', 'uncertain'],
      exampleSentences: [
        { en: 'It is axiomatic that health matters.', ko: '건강이 중요하다는 것은 자명한 사실이다.' },
        { en: 'The axiomatic truth was accepted by all.', ko: '그 자명한 진리는 모두에게 받아들여졌다.' },
      ],
    }
  ),
  word('Beatific', '극락의', 9, 'adjective',
    ['비참한', '지옥의', '괴로운', '우울한', '고통스러운', '사악한', '불행한', '추악한', '불쾌한', '비통한'],
    tips({
      etymology: '라틴어 beatus(축복받은)에서 유래하여 천국에 있는 듯한 지복의 상태를 의미합니다.',
      visual: '아름다운 빛 속에서 평온하게 미소 짓고 있는 천사나 성자의 얼굴을 떠올려 보세요.',
      soundAlike: '발음이 \'비어티픽\'으로, \'Beautiful(아름다운)\'과 \'Terrific(멋진)\'이 합쳐진 극상의 행복 상태로 기억하세요.',
      context: '단순히 기쁜 상태를 넘어 영혼까지 평온하고 거룩한 행복감을 묘사할 때 씁니다.',
      synonymAntonym: '동의어로는 blissful, serene, rapturous가 있으며 반의어로는 wretched, miserable, sorrowful가 있습니다.',
    }),
    {
      definition: 'feeling or expressing blissful happiness or imparting holy joy',
      synonyms: ['blissful', 'serene', 'rapturous'],
      antonyms: ['wretched', 'miserable', 'sorrowful'],
      exampleSentences: [
        { en: 'She had a beatific smile on her face.', ko: '그녀의 얼굴에는 더할 나위 없이 행복한 미소가 감돌았다.' },
        { en: 'The beatific vision filled him with peace.', ko: '그 성스러운 환상은 그를 평화로 가득 채웠다.' },
      ],
    }
  ),
  word('Bellicose', '호전적', 9, 'adjective',
    ['평화로운', '온순한', '비폭력적인', '조용한', '중립적인', '우호적인', '친절한', '협력적인', '차분한', '유순한'],
    tips({
      etymology: '라틴어 bellum(전쟁)에서 유래하여 싸우기를 좋아하고 전쟁을 갈구하는 성향을 뜻합니다.',
      visual: '눈을 부릅뜨고 주먹을 불끈 쥐며 당장이라도 싸울 준비가 된 투사를 상상해 보세요.',
      soundAlike: '발음이 \'벨리코스\'로, \'벨(Bell)\'이 울리자마자 \'코(Nose)\'를 맞대고 싸우려 드는 모습을 연상해 보세요.',
      context: '국가 간의 호전적인 외교 정책이나 개인의 공격적인 태도를 비판할 때 주로 쓰입니다.',
      synonymAntonym: 'warlike, aggressive와 같은 단어와 의미가 통하며, 평화를 사랑하는 peaceful과는 반대되는 개념입니다.',
    }),
    {
      definition: 'demonstrating a ready disposition to fight or engage in war',
      synonyms: ['warlike', 'aggressive', 'pugnacious'],
      antonyms: ['peaceful', 'amicable', 'pacific'],
      exampleSentences: [
        { en: 'The nation\'s leader was criticized for his increasingly bellicose statements toward neighboring countries.', ko: '그 국가의 지도자는 이웃 국가들을 향한 점점 더 호전적인 발언으로 비판을 받았다.' },
        { en: 'The bellicose behavior of the protesters led to a confrontation with the local police.', ko: '시위대들의 공격적인 행동은 현지 경찰과의 충돌로 이어졌다.' },
      ],
    }
  ),
  word('Bifurcate', '둘로 나누다', 9, 'verb',
    ['합치다', '병합하다', '통합하다', '연결하다', '모으다', '결합하다', '융합하다', '집중시키다', '하나로만들다', '수렴하다'],
    tips({
      etymology: '접두사 bi-(둘)와 라틴어 furca(포크, 갈래)가 결합하여 \'두 갈래로 갈라지다\'라는 뜻이 되었습니다.',
      visual: '하나의 줄기가 알파벳 \'Y\'자 모양으로 뚜렷하게 갈라지는 강물이나 나뭇가지를 떠올려 보세요.',
      soundAlike: '바이(bi)는 자전거(bicycle)처럼 2개를 뜻하며, 포크(fork)와 비슷한 \'퍼크\' 발음이 갈래를 연상시킵니다.',
      context: '지리적인 도로나 강줄기뿐만 아니라, 의사결정 과정에서 선택지가 두 개로 나뉘는 상황에도 쓰입니다.',
      synonymAntonym: 'divide나 fork처럼 갈라지는 단어들과 유의어이며, 하나로 합쳐지는 merge와는 반대됩니다.',
    }),
    {
      definition: 'to split into two distinct parts or branches',
      synonyms: ['split', 'fork', 'branch'],
      antonyms: ['converge', 'merge', 'unite'],
      exampleSentences: [
        { en: 'The stream will split into two smaller channels just past the large rock.', ko: '개울은 큰 바위를 지나자마자 두 개의 작은 수로로 갈라질 것입니다.' },
        { en: 'The hiking trail begins to divide at the summit, leading to different valleys.', ko: '하이킹 코스는 정상에서 두 갈래로 나뉘어 서로 다른 계곡으로 이어집니다.' },
      ],
    }
  ),
  word('Blandish', '아첨하다', 9, 'verb',
    ['비난하다', '꾸짖다', '무시하다', '냉대하다', '모욕하다', '질책하다', '조롱하다', '협박하다', '강요하다', '비판하다'],
    tips({
      etymology: '라틴어 blandus(부드러운)에서 유래하여 상대의 마음을 부드럽게 녹이는 달콤한 말을 의미합니다.',
      visual: '원하는 것을 얻기 위해 상대방의 팔을 살며시 잡으며 생글생글 웃으며 말하는 모습을 상상하세요.',
      soundAlike: '발음이 \'블랜디쉬\'이므로, \'브랜드(brand) 옷을 입혀주며 아첨하다\'라고 연상해 보세요.',
      context: '주로 직장 상사나 권력자에게 특별한 혜택을 얻어내기 위해 감언이설을 늘어놓는 상황에 쓰입니다.',
      synonymAntonym: 'flatter, cajole과 비슷하게 \'구슬리다\'는 뜻이며, 반대로 비난하는 criticize와는 대조됩니다.',
    }),
    {
      definition: 'to persuade someone by using flattery or very gentle and kind words',
      synonyms: ['flatter', 'cajole', 'wheedle'],
      antonyms: ['insult', 'criticize', 'dissuade'],
      exampleSentences: [
        { en: 'He tried to influence the judge with sweet words and gentle persuasion.', ko: '그는 달콤한 말과 부드러운 회유로 판사에게 아첨하려 했습니다.' },
        { en: 'She attempted to get a promotion by trying to coax her boss with constant praise.', ko: '그녀는 끊임없는 찬사로 상사에게 아첨하여 승진을 얻어내려 했습니다.' },
      ],
    }
  ),
  word('Bombastic', '과장된', 9, 'adjective',
    ['절제된', '간결한', '겸손한', '수수한', '소박한', '검소한', '단순한', '명료한', '함축적인', '정중한'],
    tips({
      etymology: 'bombast는 원래 옷의 부피를 키우기 위해 넣는 \'솜\'을 뜻했는데, 이것이 말이 솜처럼 부풀려진 상태를 의미하게 되었습니다.',
      visual: '풍선처럼 빵빵하게 부풀어 올랐지만 막상 바늘로 찌르면 속은 텅 빈 연설가의 모습을 상상해 보세요.',
      soundAlike: '폭탄(bomb)이 터지듯 요란하고 거창하게 말하지만 실속은 없는 느낌과 연결하면 기억하기 쉽습니다.',
      context: '주로 정치인의 연설이나 비평문에서 내용은 부실하면서 단어만 화려하고 거창하게 쓰는 경우를 묘사할 때 쓰입니다.',
      synonymAntonym: 'pompous, inflated와 같이 \'부풀려진\' 단어들과 친하며, 반대로 modest나 humble처럼 \'낮추는\' 단어들과 대조됩니다.',
    }),
    {
      definition: 'using high-sounding language with much less meaning than it seems to have; excessively grand or self-important',
      synonyms: ['pompous', 'inflated', 'grandiloquent'],
      antonyms: ['modest', 'humble', 'simple'],
      exampleSentences: [
        { en: 'The politician\'s speech was so full of high-sounding words that it felt empty and insincere.', ko: '그 정치인의 연설은 너무 거창한 단어들로 가득 차 있어서 공허하고 진실되지 않게 느껴졌습니다.' },
        { en: 'Critics dismissed the new novel as a collection of pretentious and overly dramatic descriptions.', ko: '비평가들은 그 새 소설을 허세 부리고 지나치게 과장된 묘사들의 집합체라며 일축했습니다.' },
      ],
    }
  ),
  word('Brazen', '뻔뻔한', 9, 'adjective',
    ['수줍은', '겸손한', '부끄러워하는', '조용한', '조심스러운', '정숙한', '내성적인', '겁많은', '신중한', '예의바른'],
    tips({
      etymology: '놋쇠를 뜻하는 brass에서 유래하여, 얼굴 가죽이 놋쇠처럼 단단하고 두꺼워 부끄러움을 모르는 상태를 표현합니다.',
      visual: '잘못을 들키고도 사과하기는커녕 오히려 고개를 빳빳이 들고 당당하게 상대를 노려보는 사람을 떠올려 보세요.',
      soundAlike: '브레이즌(Brazen)의 \'브\'를 \'불(fire)\'로 연상하여, 얼굴에 철판을 깔고 불처럼 당당하게 행동하는 모습을 기억하세요.',
      context: '주로 명백한 잘못이나 무례한 행동을 하고도 전혀 미안해하거나 당황하지 않는 파렴치한 태도를 묘사할 때 쓰입니다.',
      synonymAntonym: 'shameless와 유사하며, 반대로 남의 시선을 의식하고 조심스러운 modest나 timid와는 대조적입니다.',
    }),
    {
      definition: 'acting or done in a very open and shocking way without gathering any feelings of shame or embarrassment',
      synonyms: ['shameless', 'audacious', 'insolent'],
      antonyms: ['modest', 'timid', 'bashful'],
      exampleSentences: [
        { en: 'The thief showed a disregard for the law by stealing in broad daylight.', ko: '그 도둑은 대낮에 물건을 훔치는 뻔뻔한 행태로 법을 무시하는 태도를 보였습니다.' },
        { en: 'He told a lie even though the evidence of his guilt was right in front of him.', ko: '그는 유죄의 증거가 바로 앞에 있는데도 아주 파렴치한 거짓말을 했습니다.' },
      ],
    }
  ),
  word('Bucolic', '전원의', 9, 'adjective',
    ['도시의', '산업의', '현대적인', '복잡한', '인공적인', '세련된', '번화한', '기술적인', '기계적인', '도시적인'],
    tips({
      etymology: '그리스어 \'boukolos(소 치는 사람)\'에서 유래하여 가축을 돌보는 평화로운 시골의 삶을 뜻하게 되었습니다.',
      visual: '푸른 초원 위에서 양떼가 한가로이 풀을 뜯고 있는 평화롭고 고요한 시골 마을을 상상해 보세요.',
      soundAlike: '\'뷰(View)가 퀄(Qual)리티\' 있는 시골 풍경이라고 연상하면 기억하기 쉽습니다.',
      context: '주로 문학이나 예술에서 시골의 소박하고 아름다운 면을 긍정적으로 묘사할 때 사용됩니다.',
      synonymAntonym: 'Pastoral과 유사하며, 도시를 뜻하는 Urban이나 Metropolitan과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Relating to the pleasant aspects of the countryside and country life, often suggesting a peaceful and idyllic atmosphere.',
      synonyms: ['pastoral', 'rustic', 'arcadian'],
      antonyms: ['urban', 'metropolitan', 'industrial'],
      exampleSentences: [
        { en: 'The painting captures the serene and idyllic beauty of the countryside.', ko: '그 그림은 전원의 평온하고 목가적인 아름다움을 담아내고 있습니다.' },
        { en: 'After years of living in the city, they decided to move to a quiet village for a more peaceful lifestyle.', ko: '수년간 도시에서 살던 그들은 더 평화로운 생활 방식을 위해 조용한 마을로 이사하기로 결정했습니다.' },
      ],
    }
  ),
  word('Cadaverous', '시체 같은', 9, 'adjective',
    ['건강한', '생기있는', '활기찬', '통통한', '발그레한', '튼튼한', '강인한', '팔팔한', '윤기있는', '정정한'],
    tips({
      etymology: '라틴어 \'cadere(떨어지다, 죽다)\'에서 유래한 \'cadaver(시체)\'에 형용사형 접미사가 붙어 만들어진 단어입니다.',
      visual: '오랫동안 굶거나 병을 앓아 얼굴에 핏기가 하나도 없고 눈이 푹 들어간 유령 같은 모습을 상상해 보세요.',
      soundAlike: '\'캐대버러스\'라고 발음하며, 의대생들이 실습할 때 쓰는 \'카데바(cadaver)\'를 떠올리면 기억하기 쉽습니다.',
      context: '단순히 날씬한(slim) 상태가 아니라, 금방이라도 쓰러질 듯이 병색이 완연하고 위태로워 보이는 외모를 묘사할 때 사용합니다.',
      synonymAntonym: 'gaunt나 pallid처럼 창백하고 뼈만 남은 상태와 비슷하며, 혈색이 좋은 flushed와는 반대되는 개념입니다.',
    }),
    {
      definition: 'looking very pale, thin, and bony, in a way that resembles a dead body',
      synonyms: ['gaunt', 'pallid', 'ghastly'],
      antonyms: ['robust', 'flushed', 'blooming'],
      exampleSentences: [
        { en: 'After weeks of illness, his face had a thin and ghostly appearance.', ko: '몇 주간의 투병 끝에 그의 얼굴은 수척하고 시체처럼 창백해 보였습니다.' },
        { en: 'The survivors of the shipwreck looked skeletal and hauntingly pale.', ko: '난파선의 생존자들은 뼈만 남고 소름 끼칠 정도로 창백한 모습이었습니다.' },
      ],
    }
  ),
  word('Calumny', '중상', 9, 'noun',
    ['칭찬', '찬사', '옹호', '진실', '사실', '격려', '추천', '인정', '존경', '숭배'],
    tips({
      etymology: '라틴어 calumnia에서 유래되었으며, 누군가를 속이거나 해를 끼치기 위해 지어낸 거짓 고발을 의미합니다.',
      visual: '깨끗한 도화지 같은 누군가의 명성에 검은 잉크를 뿌려 얼룩지게 만드는 모습을 상상해 보세요.',
      soundAlike: '\'칼(Cal)\'로 남의 명성을 \'베니(umny)\'라고 연상하여, 말의 칼로 타인에게 상처를 입히는 중상을 기억하세요.',
      context: '주로 정치권이나 선거철에 상대 후보를 깎아내리기 위해 악의적으로 퍼뜨리는 헛소문을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'Slander와 Defamation은 비슷한 의미의 비방을 뜻하며, 반대로 Praise와 Acclaim은 칭송과 환호를 뜻합니다.',
    }),
    {
      definition: 'A false and malicious statement designed to damage the reputation of someone.',
      synonyms: ['slander', 'defamation', 'libel'],
      antonyms: ['praise', 'acclaim', 'vindication'],
      exampleSentences: [
        { en: 'The politician was a victim of vicious calumny during the heated election campaign.', ko: '그 정치인은 치열한 선거 운동 기간 동안 악의적인 중상의 희생양이 되었습니다.' },
        { en: 'He refused to answer the accusations, dismissing them as mere calumny.', ko: '그는 그 비난들을 단순한 중상모략으로 일축하며 답변을 거부했습니다.' },
      ],
    }
  ),
  word('Capricious', '변덕스러운', 9, 'adjective',
    ['일정한', '꾸준한', '예측가능한', '신뢰할수있는', '견고한', '단호한', '변함없는', '안정적인', '지속적인', '확고한'],
    tips({
      etymology: '이탈리아어 capriccio에서 유래했으며, 원래는 공포로 인해 \'머리카락이 곤두서는 것\'을 의미하다가 갑작스러운 움직임이나 변덕을 뜻하게 되었습니다.',
      visual: '갈대처럼 바람이 불 때마다 이리저리 방향을 바꾸며 흔들리는 모습을 상상해 보세요.',
      soundAlike: '카프리(Capri) 섬의 날씨가 예측할 수 없이 순식간에 바뀐다고 연상하면 기억하기 쉽습니다.',
      context: '주로 사람의 성격, 기분, 혹은 종잡을 수 없는 날씨나 시장 상황을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'fickle, whimsical과 비슷하며, 반대로 늘 일정한 상태는 steady나 predictable이라고 합니다.',
    }),
    {
      definition: 'changing often and quickly, especially in terms of one\'s mood or behavior, without any logical reason',
      synonyms: ['fickle', 'whimsical', 'mercurial'],
      antonyms: ['steady', 'predictable', 'constant'],
      exampleSentences: [
        { en: 'The movie star was known for her impulsive and unpredictable behavior on set.', ko: '그 영화배우는 촬영장에서의 충동적이고 변덕스러운 행동으로 유명했습니다.' },
        { en: 'Investors are often hesitant to put money into such a volatile and changing market.', ko: '투자자들은 종종 그렇게 불안정하고 변덕스러운 시장에 돈을 투자하기를 주저합니다.' },
      ],
    }
  ),
  word('Castigate', '견책하다', 9, 'verb',
    ['칭찬하다', '격려하다', '변호하다', '용서하다', '포상하다', '숭배하다', '추대하다', '승인하다', '방임하다', '찬양하다'],
    tips({
      etymology: '라틴어 castigare에서 유래하여 \'순수하게 만들기 위해 바로잡다\'라는 의미에서 심한 꾸짖음으로 발전했습니다.',
      visual: '잘못을 저지른 사람을 엄하게 훈계하며 회초리를 든 호랑이 선생님을 떠올려 보세요.',
      soundAlike: '캐스티게이트(Castigate) - \'가시\' 돋친 말로 \'게이트\' 입구에서 혼내는 장면을 연상하세요.',
      context: '주로 공적인 잘못이나 도덕적 결함에 대해 언론이나 상사가 강하게 비판할 때 사용됩니다.',
      synonymAntonym: '동의어인 chastise와 함께 외우고, 반대말인 praise(칭찬하다)와 대조하세요.',
    }),
    {
      definition: 'to reprimand or criticize someone severely for their mistakes or behavior',
      synonyms: ['chastise', 'rebuke', 'reprimand'],
      antonyms: ['praise', 'commend', 'laud'],
      exampleSentences: [
        { en: 'The media castigated the corrupt official for his unethical behavior.', ko: '언론은 부패한 공무원의 비윤리적인 행동에 대해 엄중히 견책했다.' },
        { en: 'The teacher castigated the students for cheating on the final exam.', ko: '선생님은 기말고사에서 부정행위를 한 학생들을 심하게 꾸짖었다.' },
      ],
    }
  ),
  word('Catholic', '보편적', 9, 'adjective',
    ['편협한', '제한된', '배타적인', '좁은', '편파적인', '국지적인', '독단적인', '폐쇄적인', '특수한', '소수의'],
    tips({
      etymology: '그리스어 katholikos(전체의)에서 유래하여 종교적 의미를 넘어 \'보편적이고 폭넓은\'이라는 뜻을 가집니다.',
      visual: '세상의 모든 장르와 지식을 담고 있는 거대한 도서관이나 백과사전을 상상해 보세요.',
      soundAlike: '캐솔릭 - 종교 명칭과 같지만, 소문자로 쓰면 \'모든 것을 아우르는\' 보편성을 뜻합니다.',
      context: '취향, 관심사, 지식 등이 어느 한쪽에 치우치지 않고 광범위할 때 주로 쓰입니다.',
      synonymAntonym: 'universal(보편적인)과 유의어이며, narrow(좁은)와 반대되는 개념입니다.',
    }),
    {
      definition: 'including a wide variety of things; all-embracing or universal in scope',
      synonyms: ['universal', 'comprehensive', 'eclectic'],
      antonyms: ['narrow', 'limited', 'parochial'],
      exampleSentences: [
        { en: 'She has tastes in music that are remarkably broad, enjoying everything from opera to heavy metal.', ko: '그녀는 오페라부터 헤비메탈까지 모든 것을 즐기는 폭넓은 음악적 취향을 가지고 있다.' },
        { en: 'He had a broad interest in all academic subjects during his college years.', ko: '그는 대학 시절 모든 학문 분야에 대해 보편적인 관심을 가졌다.' },
      ],
    }
  ),
  word('Chicanery', '속임수', 9, 'noun',
    ['정직', '솔직함', '투명성', '공정', '정의', '성실', '신뢰', '진실', '청렴', '결백'],
    tips({
      etymology: '프랑스어 chicaner(말다툼하다, 속이다)에서 유래하여 법적 절차를 악용하는 꼼수를 뜻하게 되었습니다.',
      visual: '소매 속에 카드를 숨기고 도박판에서 상대방을 속이는 사기꾼의 손을 떠올려 보세요.',
      soundAlike: '시케너리 - \'치사하게\' 굴며 남을 속이는 \'너리(놀이)\'라고 기억해 보세요.',
      context: '정치적 이득이나 금전적 이익을 위해 법의 허점을 이용하는 교묘한 수법을 말할 때 쓰입니다.',
      synonymAntonym: 'trickery와 같은 의미이며, honesty(정직)와는 정반대의 단어입니다.',
    }),
    {
      definition: 'the use of clever but dishonest methods or complicated legal arguments to deceive others',
      synonyms: ['trickery', 'deception', 'subterfuge'],
      antonyms: ['honesty', 'candor', 'integrity'],
      exampleSentences: [
        { en: 'The contract was full of legal maneuvers designed to confuse the signers.', ko: '그 계약서는 서명자들을 혼란스럽게 하려는 법적 속임수로 가득했다.' },
        { en: 'His political schemes were eventually exposed by an investigative journalist.', ko: '그의 정치적 속임수는 결국 한 조사 기자에 의해 폭로되었다.' },
      ],
    }
  ),
  word('Circumlocution', '완곡어법', 9, 'noun',
    ['직설', '직언', '노골적 표현', '단도직입', '간결', '명료', '요약', '단순화', '솔직', '정공법'],
    tips({
      etymology: '라틴어 어근 circum(주변)과 loqui(말하다)가 결합되어 \'핵심을 찌르지 않고 주변을 빙빙 돌며 말하기\'라는 의미가 형성되었습니다.',
      visual: '직선으로 가면 될 길을 미로처럼 꼬불꼬불하게 돌아가는 화살표나 실타래를 상상해 보세요.',
      soundAlike: '앞부분의 \'서컴(Circum)\'이 \'서클(Circle, 원)\'과 발음이 비슷하므로 원을 그리듯 둥글게 말한다고 기억하세요.',
      context: '주로 정치적 담화나 격식을 차리는 상황에서 불리한 질문을 회피하거나 예의를 갖추기 위해 말을 길게 늘어놓을 때 사용됩니다.',
      synonymAntonym: '말이 많다는 뜻의 verbosity와 유사하며, 핵심만 간단히 말하는 brevity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The practice of using an unnecessarily large number of words to express an idea, often to avoid being precise or clear.',
      synonyms: ['periphrasis', 'verbosity', 'wordiness'],
      antonyms: ['directness', 'conciseness', 'brevity'],
      exampleSentences: [
        { en: 'Politicians often use circumlocution to avoid giving a definitive \'yes\' or \'no\'.', ko: '정치인들은 확정적인 답변을 피하기 위해 종종 완곡어법을 사용한다.' },
        { en: 'His circumlocution made it difficult for the audience to understand his main point.', ko: '그의 완곡한 표현 때문에 청중이 그의 요점을 이해하기 어려웠다.' },
      ],
    }
  ),
  word('Circumvent', '우회하다', 9, 'verb',
    ['직면하다', '맞서다', '정면돌파', '통과하다', '준수하다', '복종하다', '따르다', '직시하다', '수용하다', '직격하다'],
    tips({
      etymology: 'circum(둘레) + vent(오다)가 합쳐져 \'장애물을 돌아서 오다\'라는 의미를 형성합니다.',
      visual: '높은 담벼락을 넘지 않고 옆으로 난 작은 구멍이나 뒷길로 빠져나가는 모습을 그려보세요.',
      soundAlike: '서컴벤트 - \'서클(Circle)\'로 \'벤트(통로)\'를 만들어 피해가는 느낌입니다.',
      context: '법규나 규칙의 엄격함을 피해 교묘하게 목적을 달성할 때 주로 사용됩니다.',
      synonymAntonym: 'evade(피하다)와 유의어이며, confront(직면하다)와 반대됩니다.',
    }),
    {
      definition: 'To find a way around an obstacle or to overcome a problem in a clever and surreptitious way.',
      synonyms: ['bypass', 'evade', 'sidestep'],
      antonyms: ['confront', 'face', 'encounter'],
      exampleSentences: [
        { en: 'He managed to bypass the tax laws by moving his money to an offshore account.', ko: '그는 자금을 해외 계좌로 옮겨 세법을 교묘히 우회했다.' },
        { en: 'The army avoided the enemy\'s main fortifications by taking a mountain path.', ko: '군은 산길을 이용해 적의 주요 요새를 우회했다.' },
      ],
    }
  ),
  word('Clairvoyant', '통찰력 있는', 9, 'adjective',
    ['맹목적인', '무지한', '둔감한', '근시안적인', '평범한', '무감각한', '어리석은', '현실적인', '실증적인', '단순한'],
    tips({
      etymology: '프랑스어 clair(맑은)와 voyant(보는)이 결합되어 \'명확하게 본다\'는 어원을 가지고 있습니다.',
      visual: '안개 속에서도 멀리 있는 목표물을 정확히 찾아내는 망원경이나 수정구슬을 든 예언자를 상상해 보세요.',
      soundAlike: '\'클레어(Clear)하게 보인다\'는 발음의 유사성을 이용해 숨겨진 진실을 투명하게 꿰뚫어 보는 이미지를 연상하세요.',
      context: '단순히 초자연적인 예지력뿐만 아니라, 복잡한 상황의 본질을 남들보다 빠르게 파악하는 비범한 직관력을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '미리 아는 능력을 뜻하는 prescient와 유사하며, 앞날을 내다보지 못하는 shortsighted와는 대조를 이룹니다.',
    }),
    {
      definition: 'possessing an exceptional ability to see things that are hidden or to predict future events through intuition',
      synonyms: ['insightful', 'prescient', 'prophetic'],
      antonyms: ['blind', 'unperceptive', 'shortsighted'],
      exampleSentences: [
        { en: 'Her clairvoyant analysis of the market trends helped the company avoid a major loss.', ko: '시장 동향에 대한 그녀의 통찰력 있는 분석은 회사가 큰 손실을 피하도록 도왔다.' },
        { en: 'He seemed almost clairvoyant, knowing exactly what I was going to say before I spoke.', ko: '그는 내가 말하기도 전에 무슨 말을 할지 정확히 알고 있어서 거의 신통력이 있는 것처럼 보였다.' },
      ],
    }
  ),
  word('Clandestine', '비밀의', 9, 'adjective',
    ['공개된', '공식적인', '투명한', '노골적인', '저명한', '명백한', '드러난', '공인된', '합법적인', '공공의'],
    tips({
      etymology: '라틴어 clandestinus에서 유래했으며, \'clam(비밀리에)\'이라는 어근이 포함되어 있어 남몰래 행해지는 속성을 나타냅니다.',
      visual: '한밤중 아무도 없는 공원 벤치 아래에 몰래 서류 가방을 두고 떠나는 첩보 영화의 한 장면을 떠올려 보세요.',
      soundAlike: '클랜데스틴 - \'클랜(Clan, 집단)\'이 \'데스(Death, 죽음)\'를 각오하고 \'틴(Teen, 십대들)\'처럼 무모하게 비밀 결사를 맺는 느낌입니다.',
      context: '주로 불법적인 모의, 정부의 비공식 작전, 혹은 부적절한 관계를 숨기기 위한 은밀한 행동을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'covert와 surreptitious가 가장 가까운 유의어이며, 누구나 알 수 있는 overt와는 정반대의 개념입니다.',
    }),
    {
      definition: 'kept hidden or conducted in secrecy, often because the action is illegal or not officially allowed',
      synonyms: ['secret', 'covert', 'surreptitious'],
      antonyms: ['overt', 'public', 'open'],
      exampleSentences: [
        { en: 'The spies held a clandestine meeting in a remote cabin to exchange documents.', ko: '스파이들은 문서를 교환하기 위해 외딴 오두막에서 비밀 회의를 가졌다.' },
        { en: 'The clandestine operation to rescue the hostages was planned for months.', ko: '인질 구출을 위한 비밀 작전은 수개월 동안 계획되었다.' },
      ],
    }
  ),
  word('Clemency', '자비', 9, 'noun',
    ['잔인함', '엄격함', '가혹함', '무자비', '냉혹', '처벌', '응징', '복수', '강경', '박대'],
    tips({
      etymology: '라틴어 clemens(온화한, 자비로운)에서 유래하여 처벌을 줄여주는 관용을 뜻합니다.',
      visual: '무릎 꿇은 죄수에게 칼 대신 따뜻한 손길을 내미는 왕의 모습을 상상해 보세요.',
      soundAlike: '클레멘시 - \'클레멘타인\' 노래처럼 부드럽고 온화한 느낌의 자비를 연상하세요.',
      context: '주로 법정에서 판사가 형량을 감경해주거나 통치자가 사면을 베풀 때 사용되는 격식 있는 단어입니다.',
      synonymAntonym: 'mercy(자비)와 동의어이며, severity(가혹함)와 대조를 이룹니다.',
    }),
    {
      definition: 'An act or instance of leniency or compassion shown by someone in power toward an offender or enemy.',
      synonyms: ['mercy', 'leniency', 'forbearance'],
      antonyms: ['severity', 'harshness', 'cruelty'],
      exampleSentences: [
        { en: 'The defense attorney appealed to the judge for clemency, citing the defendant\'s youth.', ko: '변호인은 피고인의 어린 나이를 이유로 판사에게 자비를 호소했다.' },
        { en: 'The governor granted clemency to several prisoners on the holiday.', ko: '주지사는 공휴일을 맞아 여러 수감자들에게 자비를 베풀어 사면했다.' },
      ],
    }
  ),
  word('Coalesce', '결합하다', 9, 'verb',
    ['분리하다', '흩어지다', '해체하다', '분열시키다', '갈라놓다', '고립시키다', '단절하다', '파편화하다', '거부하다', '방해하다'],
    tips({
      etymology: '접두사 co-(함께)와 alescere(자라다)가 결합되어, 여러 요소가 함께 자라나며 결국 하나로 합쳐진다는 의미를 형성합니다.',
      visual: '창문에 맺힌 작은 빗방울들이 서로 가까워지다가 순식간에 하나의 큰 물줄기로 합쳐지는 장면을 떠올려 보세요.',
      soundAlike: '코얼레스(Coalesce) - \'코\'앞에서 \'얼\'싸안고 하나로 뭉쳐지는 강한 결속력을 소리 내어 느껴보세요.',
      context: '단순한 물리적 결합뿐만 아니라, 서로 다른 정치 세력이나 추상적인 아이디어들이 하나의 체계로 통합될 때 격식 있게 사용됩니다.',
      synonymAntonym: 'merge나 fuse는 섞여서 하나가 됨을 강조하며, 반대로 separate나 divide는 결합된 상태를 다시 떼어놓는 것을 의미합니다.',
    }),
    {
      definition: 'to grow together or join forces to create a single unified entity or group',
      synonyms: ['merge', 'unite', 'fuse'],
      antonyms: ['separate', 'divide', 'detach'],
      exampleSentences: [
        { en: 'The various local groups coalesced to form a national campaign against the new law.', ko: '다양한 지역 단체들이 새 법안에 반대하는 전국적인 캠페인을 전개하기 위해 하나로 결합했다.' },
        { en: 'As the heated gas cooled, it began to coalesce into solid particles.', ko: '가열된 가스가 식으면서 고체 입자로 결합하기 시작했다.' },
      ],
    }
  ),
  word('Cogitate', '숙고하다', 9, 'verb',
    ['무시하다', '망각하다', '즉답하다', '충동적으로행동하다', '간과하다', '경시하다', '서두르다', '방치하다', '졸다', '떠들다'],
    tips({
      etymology: '라틴어 cogitare에서 유래했으며, 이는 \'함께(co) 흔들다(agitare)\' 즉 머릿속에서 여러 생각을 이리저리 흔들며 섞어본다는 의미를 담고 있습니다.',
      visual: '로댕의 \'생각하는 사람\' 조각상처럼 턱을 괴고 미동도 없이 깊은 사색에 잠겨 있는 철학자의 모습을 상상해 보세요.',
      soundAlike: '코지테이트 - \'코\'를 책상에 박을 정도로 \'지\'긋이 \'테\'이블 앞에 앉아 \'이\'리저리 궁리하는 소리를 연상해 보세요.',
      context: '일상적인 가벼운 생각보다는 철학적 문제나 복잡한 결정을 내리기 위해 오랜 시간 공을 들여 사유할 때 쓰는 격식 있는 단어입니다.',
      synonymAntonym: '깊이 파고드는 ponder와 유의어이며, 아무런 생각 없이 지나치는 ignore나 overlook과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to spend time thinking very carefully and seriously about a particular subject or problem',
      synonyms: ['ponder', 'reflect', 'meditate'],
      antonyms: ['ignore', 'disregard', 'overlook'],
      exampleSentences: [
        { en: 'The philosopher needed to sit alone in the garden to carefully consider the complex moral dilemma.', ko: '그 철학자는 복잡한 도덕적 딜레마를 신중히 숙고하기 위해 정원에 홀로 앉아 있을 필요가 있었다.' },
        { en: 'Before making such a life-altering decision, you should take a few days to process the options.', ko: '인생을 바꿀 만한 결정을 내리기 전에, 며칠 동안 시간을 갖고 선택지들을 숙고해야 한다.' },
      ],
    }
  ),
  word('Colloquial', '구어체의', 9, 'adjective',
    ['격식체의', '문어체의', '공식적인', '학술적인', '고답적인', '딱딱한', '전문적인', '엄격한', '전통적인', '정중한'],
    tips({
      etymology: '함께를 뜻하는 col-과 말하다를 뜻하는 loqu-가 결합되어, 사람들끼리 모여 편하게 주고받는 말이라는 어원을 가집니다.',
      visual: '격식을 차린 정장 차림의 회의실이 아니라, 편안한 옷차림으로 카페에서 친구와 수다를 떠는 모습을 떠올려 보세요.',
      soundAlike: '컬로퀴얼 - \'컬컬\'하게 목소리를 풀고 \'로\'컬(local) 사람들과 \'퀴\'즈를 풀듯 격식 없이 대화하는 소리로 기억하세요.',
      context: '교과서나 논문에 쓰이는 딱딱한 문장이 아니라, 실제 원어민들이 일상에서 자연스럽게 사용하는 말투를 묘사할 때 사용합니다.',
      synonymAntonym: '격식 없는 informal, 대화 중심의 conversational과 비슷하며, 매우 격식 있는 formal이나 문학적인 literary와는 반대됩니다.',
    }),
    {
      definition: 'Used in ordinary or familiar conversation rather than in formal speech or writing.',
      synonyms: ['informal', 'conversational', 'vernacular'],
      antonyms: ['formal', 'literary', 'official'],
      exampleSentences: [
        { en: 'The dialogue was written in a very natural and relaxed style.', ko: '그 대화는 매우 자연스럽고 편안한 구어체로 작성되었습니다.' },
        { en: 'Slang is a common feature of everyday speech in many cultures.', ko: '속어는 많은 문화권의 일상적인 구어 표현에서 흔히 나타나는 특징입니다.' },
      ],
    }
  ),
  word('Commencement', '시작', 9, 'noun',
    ['종료', '결말', '중단', '완성', '폐지', '해산', '은퇴', '마감', '소멸', '파기'],
    tips({
      etymology: 'com(완전히)과 mence(시작하다)가 결합하여 \'새로운 단계로의 진입\'을 의미합니다.',
      visual: '졸업식에서 학사모를 던지며 사회로 나가는 첫 발걸음을 떼는 학생들의 모습을 떠올리세요.',
      soundAlike: '커멘스먼트 - \'커\'다란 \'맨\'몸으로 \'스\'스로 \'먼\' 길을 떠나기 위해 \'시작\'하는 순간입니다.',
      context: '단순한 시작뿐만 아니라 대학교의 졸업식을 가리키는 말로도 매우 흔하게 쓰입니다.',
      synonymAntonym: '유의어는 beginning, start, inception이며 반의어는 conclusion, end, termination입니다.',
    }),
    {
      definition: 'The formal act or time of starting something, or a ceremony in which academic degrees are given to students.',
      synonyms: ['beginning', 'start', 'inception'],
      antonyms: ['conclusion', 'end', 'termination'],
      exampleSentences: [
        { en: 'The commencement ceremony is at noon.', ko: '졸업식은 정오에 있다.' },
        { en: 'The commencement of the project was delayed.', ko: '프로젝트의 시작이 지연되었다.' },
      ],
    }
  ),
  word('Commiserate', '동정하다', 9, 'verb',
    ['경멸하다', '조롱하다', '비웃다', '냉대하다', '질투하다', '비난하다', '무시하다', '괴롭히다', '외면하다', '박대하다'],
    tips({
      etymology: '라틴어 접두사 com(함께)과 miser(불쌍한)가 결합하여, 타인의 비참한 감정을 공유한다는 의미에서 유래했습니다.',
      visual: '장례식장이나 경기 패배 후, 두 사람이 서로의 손을 맞잡고 고개를 숙이며 슬픔을 나누는 장면을 떠올려 보세요.',
      soundAlike: '커미저레이트 - \'커\'다란 \'미\'안함과 마음이 \'저\'릿한 감정을 담아 위로를 건네는 소리로 기억하세요.',
      context: '주로 사별, 실패, 실직 등 부정적인 상황을 겪은 사람에게 깊은 공감과 위로를 전할 때 사용합니다.',
      synonymAntonym: 'sympathize와 유사하지만 더 깊은 슬픔을 나눌 때 쓰이며, 반대로 상대를 비웃는 mock이나 scorn과는 대조됩니다.',
    }),
    {
      definition: 'to feel or express sorrow, compassion, or sympathy for someone who has experienced something unpleasant',
      synonyms: ['sympathize', 'console', 'condole'],
      antonyms: ['scorn', 'mock', 'disregard'],
      exampleSentences: [
        { en: 'The players gathered in the locker room to commiserate with each other over the narrow defeat.', ko: '선수들은 아쉬운 패배에 대해 서로를 위로하기 위해 라커룸에 모였다.' },
        { en: 'I went to the cafe to commiserate with my friend who had just lost her job.', ko: '나는 방금 직장을 잃은 친구의 슬픔을 나누고 위로해 주러 카페에 갔다.' },
      ],
    }
  ),
  word('Compunction', '양심의 가책', 9, 'noun',
    ['뻔뻔함', '무감각', '만족', '자부심', '확신', '냉담', '무자비', '평정심', '기쁨', '안도'],
    tips({
      etymology: '어근 \'pung\'은 \'찌르다(prick)\'라는 뜻입니다. 양심이 바늘로 콕콕 찌르는 듯한 고통을 의미합니다.',
      visual: '잘못을 저지른 후 가슴 한복판에 뾰족한 가시가 박혀 있는 듯한 불편한 느낌을 상상해 보세요.',
      soundAlike: '컴펑션 - \'컴(Come)\' 양심이 \'펑\' 터져서 \'션(선)\'을 넘은 행동에 대해 찔리는 기분입니다.',
      context: '주로 부정적인 행동 뒤에 \'without compunction\'이라고 쓰여 \'아무런 거리낌 없이\'라는 의미로 자주 활용됩니다.',
      synonymAntonym: '유의어인 remorse는 깊은 후회를, 반의어인 indifference는 타인의 고통에 대한 무관심을 강조합니다.',
    }),
    {
      definition: 'a slight feeling of regret or guilt for something one has done or might do',
      synonyms: ['remorse', 'guilt', 'scruple'],
      antonyms: ['callousness', 'indifference', 'satisfaction'],
      exampleSentences: [
        { en: 'The thief stole the money without any compunction.', ko: '그 도둑은 아무런 양심의 가책 없이 돈을 훔쳤다.' },
        { en: 'He had some compunction about taking the credit for his colleague\'s work.', ko: '그는 동료의 공로를 가로채는 것에 대해 약간의 가책을 느꼈다.' },
      ],
    }
  ),
  word('Conflagration', '대화재', 9, 'noun',
    ['불꽃', '잔불', '소화', '물방울', '홍수', '가뭄', '한파', '평화', '안전', '진화'],
    tips({
      etymology: '함께를 뜻하는 con-과 타오르다를 뜻하는 flagr가 결합하여 모든 것을 집어삼키며 타오르는 상태를 나타냅니다.',
      visual: '단순한 불이 아니라 도시 전체가 붉은 화염에 휩싸여 하늘까지 번지는 거대한 재앙의 현장을 떠올려 보세요.',
      soundAlike: '컨플래그레이션 - \'큰(con)\' 불길이 \'플래(fla)\'그(깃발)처럼 펄럭이며 사방으로 퍼져나가는 대화재라고 기억하세요.',
      context: '뉴스에서 대형 산불이나 대규모 화재 사건을 보도할 때 주로 쓰이며, 비유적으로는 걷잡을 수 없는 전쟁을 뜻하기도 합니다.',
      synonymAntonym: '지옥 같은 불길인 inferno와 유사하며, 아주 작은 불꽃인 spark나 깜빡임인 flicker와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A very large and destructive fire that spreads quickly over a wide area of land or property.',
      synonyms: ['inferno', 'blaze', 'holocaust'],
      antonyms: ['extinguishment', 'spark', 'flicker'],
      exampleSentences: [
        { en: 'The historic cathedral was reduced to ashes by the massive conflagration.', ko: '그 역사적인 성당은 거대한 대화재로 인해 잿더미가 되었습니다.' },
        { en: 'Strong winds fueled the conflagration, making it difficult for firefighters to control the flames.', ko: '강풍이 대화재를 부채질하여 소방관들이 불길을 잡는 데 어려움을 겪었습니다.' },
      ],
    }
  ),
  word('Contiguous', '인접한', 9, 'adjective',
    ['떨어진', '분리된', '먼', '고립된', '단절된', '독립적인', '우회하는', '산재한', '격리된', '차단된'],
    tips({
      etymology: 'con(함께)과 tig(닿다)가 합쳐져 \'서로의 경계가 맞닿아 있는\' 상태를 말합니다.',
      visual: '지도 위에서 국경선을 공유하며 딱 붙어 있는 두 나라의 모습을 떠올려 보세요.',
      soundAlike: '컨티규어스 - \'컨(함께)\' \'티\'나게 \'규\'칙적으로 \'어스(us)\' 우리끼리 딱 붙어 있는 모습입니다.',
      context: '미국 본토의 48개 주처럼 서로 땅이 연결되어 있는 상태를 설명할 때 자주 사용됩니다.',
      synonymAntonym: '유의어는 adjacent, adjoining, neighboring이며 반의어는 distant, separate, detached입니다.',
    }),
    {
      definition: 'sharing a common border or touching each other along an edge',
      synonyms: ['adjacent', 'adjoining', 'neighboring'],
      antonyms: ['distant', 'separate', 'detached'],
      exampleSentences: [
        { en: 'The two states are contiguous.', ko: '두 주는 인접해 있다.' },
        { en: 'The contiguous rooms shared a common wall.', ko: '인접한 방들이 공통 벽을 공유했다.' },
      ],
    }
  ),
  word('Contrite', '참회하는', 9, 'adjective',
    ['거만한', '무감각한', '냉담한', '방어적인', '자랑하는', '뻔뻔한', '완고한', '무정한', '고집센', '당당한'],
    tips({
      etymology: '라틴어 \'con(완전히)\'과 \'terere(부수다/빻다)\'가 합쳐져, 죄책감으로 인해 마음이 가루처럼 부서진 상태를 의미합니다.',
      visual: '성당의 고해성사 부스 안에서 고개를 깊게 숙이고 자신의 잘못을 고백하는 사람의 모습을 떠올려 보세요.',
      soundAlike: '발음이 \'컨트라이트\'이므로, 잘못을 만회하기 위해 \'큰(Con) 노력(Try)\'을 다해 사죄하는 모습으로 연결해 보세요.',
      context: '단순히 미안함을 느끼는 수준을 넘어, 도덕적 죄책감이나 깊은 후회가 동반된 공식적인 사과 상황에서 자주 쓰입니다.',
      synonymAntonym: 'penitent, remorseful과 유사하며, 반대로 잘못을 저지르고도 당당하거나 뉘우치지 않는 상태는 unrepentant라고 합니다.',
    }),
    {
      definition: 'feeling or showing deep regret and sorrow for one\'s past misdeeds or sins',
      synonyms: ['penitent', 'remorseful', 'repentant'],
      antonyms: ['unrepentant', 'defiant', 'impenitent'],
      exampleSentences: [
        { en: 'He seemed genuinely contrite after the accident.', ko: '그는 사고 이후 진심으로 참회하는 것처럼 보였다.' },
        { en: 'She wrote a contrite letter of apology to her teacher.', ko: '그녀는 선생님께 참회하는 마음을 담은 사과 편지를 썼다.' },
      ],
    }
  ),
  word('Conundrum', '난제', 9, 'noun',
    ['해답', '명확함', '단순함', '해결책', '이해', '결론', '설명', '직관', '확신', '정답'],
    tips({
      etymology: '16세기 옥스퍼드 대학생들이 장난스럽게 만든 가짜 라틴어 단어에서 유래하여 \'익살스러운 문제\'를 뜻하게 되었습니다.',
      visual: '실타래가 복잡하게 엉켜 있어 어디서부터 풀어야 할지 모르는 미로 같은 상황을 상상해 보세요.',
      soundAlike: '커넌드럼(Conundrum) - 명탐정 \'코난\'도 \'드럼\'통 속에 숨겨진 트릭을 풀기 어려워하는 상황.',
      context: '단순한 퀴즈가 아니라 도덕적 선택이나 고도의 논리적 사고가 필요한 복잡한 딜레마를 표현할 때 주로 사용합니다.',
      synonymAntonym: 'enigma나 puzzle처럼 수수께끼 같은 상황을 뜻하며, 반대로 명확한 답은 solution이나 answer라고 합니다.',
    }),
    {
      definition: 'a confusing and difficult problem or question that is very hard to solve',
      synonyms: ['enigma', 'puzzle', 'quandary'],
      antonyms: ['solution', 'answer', 'clarification'],
      exampleSentences: [
        { en: 'The budget posed a difficult conundrum for the city council.', ko: '예산안은 시의회에 어려운 난제를 제기했다.' },
        { en: 'Solving this mathematical conundrum required years of research.', ko: '이 수학적 난제를 해결하는 데 수년간의 연구가 필요했다.' },
      ],
    }
  ),
];
