import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch09: VocabItem[] = [
  word('Abolish', '폐지하다', 5, 'verb',
    ['제정하다', '유지하다', '강화하다', '도입하다', '확대하다', '시행하다', '승인하다', '보존하다', '설립하다', '지지하다'],
    tips({
      etymology: '라틴어 abolere에서 유래하며 ab(멀리)와 olere(자라다)가 합쳐져 성장을 멈추게 한다는 의미입니다.',
      visual: '낡은 법전의 한 페이지를 통째로 찢어버리거나 빨간 줄로 긋는 장면을 상상하세요.',
      soundAlike: '발음이 \'어볼리쉬\'로, 나쁜 관습을 \'다 버리시\'는 느낌으로 기억하세요.',
      context: '주로 노예제, 사형 제도, 혹은 오래된 법률을 공식적으로 없앨 때 사용합니다.',
      synonymAntonym: '동의어로는 eliminate, repeal, nullify가 있으며 반의어로는 establish, create, institute가 있습니다.',
    }),
    {
      definition: 'to formally put an end to a system, practice, or institution',
      synonyms: ['eliminate', 'repeal', 'nullify'],
      antonyms: ['establish', 'create', 'institute'],
      exampleSentences: [
        { en: 'The government decided to formally end the outdated tax law.', ko: '정부는 구식 세법을 공식적으로 폐지하기로 결정했다.' },
        { en: 'Many activists are fighting to get the unfair system removed forever.', ko: '많은 활동가들이 불공정한 제도를 영구적으로 폐지하기 위해 싸우고 있다.' },
      ],
    }
  ),
  word('Absorb', '흡수하다', 5, 'verb',
    ['배출하다', '방출하다', '거부하다', '반사하다', '차단하다', '저지하다', '내보내다', '분출하다', '방사하다', '배설하다'],
    tips({
      etymology: '라틴어 ab(완전히)와 sorbere(빨아들이다)가 결합하여 안으로 쏙 빨아들인다는 의미에서 유래했습니다.',
      visual: '마른 스펀지가 물방울을 순식간에 빨아들여 몸집이 불어나는 모습을 떠올려 보세요.',
      soundAlike: '액체를 \'압\'박해서 안으로 \'쏙\' 집어넣는 \'흡수\' 과정을 연상하세요.',
      context: '물리적인 액체 흡수뿐만 아니라 지식을 습득하거나 어떤 활동에 깊이 몰입할 때도 자주 쓰입니다.',
      synonymAntonym: '무언가를 들이마시는 soak up과 비슷하며, 밖으로 내보내는 emit과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to take in a liquid, gas, or other substance from the surface or space around, or to fully occupy someone\'s time and interest',
      synonyms: ['soak up', 'take in', 'consume'],
      antonyms: ['emit', 'release', 'exude'],
      exampleSentences: [
        { en: 'Plants absorb water through their roots.', ko: '식물은 뿌리를 통해 물을 흡수한다.' },
        { en: 'She was completely absorbed in her book.', ko: '그녀는 책에 완전히 몰입해 있었다.' },
      ],
    }
  ),
  word('Abstract', '추상적인', 5, 'adjective',
    ['구체적인', '실제의', '현실적', '실질적', '명확한', '육체적', '물질적', '감각적', '실용적', '사실적'],
    tips({
      etymology: 'abs(멀리)와 tract(끌다)가 합쳐져 구체적인 형태에서 핵심 개념만 따로 끌어냈다는 뜻입니다.',
      visual: '형태를 알 수 없는 선과 면으로 이루어진 현대 미술 작품을 상상해 보세요.',
      soundAlike: '실체가 \'없으(abs)\'니까 눈에 보이지 않는 \'추상적인\' 개념입니다.',
      context: '사랑이나 자유처럼 손으로 만질 수 없는 개념이나 난해한 예술 스타일을 묘사합니다.',
      synonymAntonym: '동의어로는 theoretical, conceptual, nonrepresentational이 있으며 반의어로는 concrete, physical, definite가 있습니다.',
    }),
    {
      definition: 'existing as a concept or idea rather than in physical or concrete form',
      synonyms: ['theoretical', 'conceptual', 'nonrepresentational'],
      antonyms: ['concrete', 'physical', 'definite'],
      exampleSentences: [
        { en: 'The artist uses shapes and colors to express complex and non-figurative ideas.', ko: '그 예술가는 복잡하고 비구상적인 아이디어를 표현하기 위해 모양과 색상을 사용한다.' },
        { en: 'Truth and justice are examples of ideas that are not physical in nature.', ko: '진리와 정의는 본질적으로 물리적이지 않은 개념의 예시이다.' },
      ],
    }
  ),
  word('Accurate', '정확한', 5, 'adjective',
    ['부정확한', '틀린', '오류가 있는', '대략적인', '애매한', '모호한', '왜곡된', '편향된', '불명확한', '엉성한'],
    tips({
      etymology: '라틴어 ad(~에 대하여)와 cura(주의/돌봄)가 결합된 단어로, 세심한 주의를 기울여 오류가 없도록 만든 상태를 의미합니다.',
      visual: '양궁 선수가 쏜 화살이 과녁의 정중앙인 10점 만점 구역에 한 치의 오차도 없이 박히는 모습을 상상해 보세요.',
      soundAlike: '\'애큐리트\' 발음이 \'애\'써서 \'큐(Q)\' 사인을 줄 만큼 아주 세밀하고 \'정확한\' 타이밍을 맞추는 상황과 연결해 보세요.',
      context: '실험 결과의 수치나 시계가 가리키는 시간, 혹은 범죄 현장에 대한 목격자의 진술이 사실과 완벽히 일치할 때 주로 쓰입니다.',
      synonymAntonym: '정밀함을 강조할 때는 precise, 정답임을 강조할 때는 correct를 쓰며, 반대로 틀린 상태는 inaccurate라고 합니다.',
    }),
    {
      definition: 'conforming exactly to truth or to a standard, without any mistakes or deviations',
      synonyms: ['precise', 'exact', 'correct'],
      antonyms: ['inaccurate', 'wrong', 'imprecise'],
      exampleSentences: [
        { en: 'The scientist ensured that the measurements were accurate to the nearest millimeter.', ko: '그 과학자는 측정값이 밀리미터 단위까지 정확하도록 확실히 했다.' },
        { en: 'It is difficult to get an accurate prediction of the weather a month in advance.', ko: '한 달 전부터 날씨에 대한 정확한 예측을 얻는 것은 어렵다.' },
      ],
    }
  ),
  word('Acknowledge', '인정하다', 5, 'verb',
    ['부정하다', '거절하다', '무시하다', '부인하다', '숨기다', '은폐하다', '거부하다', '반박하다', '회피하다', '묵살하다'],
    tips({
      etymology: '지식을 뜻하는 knowledge 앞에 접두사 ac-가 붙어, 어떤 사실을 알고 있음을 공식적으로 드러낸다는 의미에서 유래했습니다.',
      visual: '회의실에서 누군가의 의견을 듣고 고개를 깊게 끄덕이며 메모를 하는 모습을 상상해 보세요.',
      soundAlike: '상대의 지식(knowledge)을 내가 \'액(ac)\'셉트(accept)하여 내 것으로 받아들이고 인정하는 상황과 연결해 보세요.',
      context: '자신의 잘못을 시인할 때뿐만 아니라, 이메일을 잘 받았다고 회신하거나 타인의 성과를 공식적으로 치하할 때 자주 쓰입니다.',
      synonymAntonym: 'admit, recognize와 비슷하게 쓰이며, 반대로 사실이 아니라고 잡아떼는 deny나 아예 무시하는 ignore와는 반대됩니다.',
    }),
    {
      definition: 'to accept, admit, or officially state that something is true or exists',
      synonyms: ['admit', 'recognize', 'confess'],
      antonyms: ['deny', 'ignore', 'reject'],
      exampleSentences: [
        { en: 'He acknowledged his mistake publicly.', ko: '그는 자신의 실수를 공개적으로 인정했다.' },
        { en: 'She acknowledged the applause with a smile.', ko: '그녀는 미소로 박수에 화답했다.' },
      ],
    }
  ),
  word('Acquire', '획득하다', 5, 'verb',
    ['잃다', '포기하다', '양도하다', '버리다', '상실하다', '매각하다', '기부하다', '반환하다', '빼앗기다', '방출하다'],
    tips({
      etymology: '라틴어 ad(~로)와 quaerere(구하다)가 결합되어, 무언가를 향해 노력하여 내 것으로 만든다는 어원을 가집니다.',
      visual: '텅 비어있던 손에 반짝이는 보석이나 중요한 서류 뭉치가 쥐어지는 장면을 떠올려 보세요.',
      soundAlike: '기업 인수합병을 뜻하는 M&A(Mergers and Acquisitions)의 \'A\'가 바로 이 단어의 명사형입니다.',
      context: '단순히 물건을 사는 것뿐만 아니라, 오랜 노력 끝에 지식, 기술, 명성 등을 내 것으로 만들 때 주로 쓰입니다.',
      synonymAntonym: 'obtain, gain과 비슷하지만 조금 더 격식 있는 표현이며, 반대로 잃어버리는 lose와는 대조됩니다.',
    }),
    {
      definition: 'to come into possession of something through effort, purchase, or learning',
      synonyms: ['obtain', 'gain', 'procure'],
      antonyms: ['lose', 'forfeit', 'surrender'],
      exampleSentences: [
        { en: 'She managed to get a rare collection of stamps through an auction.', ko: '그녀는 경매를 통해 희귀한 우표 수집품을 획득했다.' },
        { en: 'It takes many years to master a foreign language fluently.', ko: '외국어를 유창하게 습득하는 데는 많은 시간이 걸린다.' },
      ],
    }
  ),
  word('Adapt', '적응하다', 5, 'verb',
    ['저항하다', '거부하다', '고수하다', '경직되다', '유지하다', '불변하다', '고집하다', '배척하다', '반대하다', '충돌하다'],
    tips({
      etymology: '라틴어 ad(~에)와 aptare(맞추다)가 합쳐져, 특정 목적이나 상황에 맞게 자신을 변화시킨다는 의미를 가집니다.',
      visual: '주변 나뭇잎 색깔에 맞춰 몸의 색을 즉각적으로 바꾸는 카멜레온의 모습을 상상해 보세요.',
      soundAlike: '가전제품의 전압을 환경에 맞게 조절해주는 \'어댑터(Adapter)\'를 떠올리면 이해가 쉽습니다.',
      context: '새로운 학교, 낯선 기후, 혹은 변화된 업무 방식에 익숙해지기 위해 스스로를 변화시킬 때 주로 사용합니다.',
      synonymAntonym: 'adjust는 미세한 조정을, acclimatize는 기후 적응을 뜻하며, 반대로 resist는 변화를 거부하고 저항하는 것을 뜻합니다.',
    }),
    {
      definition: 'to change your behavior or ideas in order to deal successfully with a new situation or environment',
      synonyms: ['adjust', 'accommodate', 'acclimatize'],
      antonyms: ['resist', 'reject', 'maintain'],
      exampleSentences: [
        { en: 'Successful businesses are those that can quickly change to meet new market demands.', ko: '성공하는 기업들은 새로운 시장 요구에 맞춰 빠르게 적응할 수 있는 기업들이다.' },
        { en: 'It took the immigrant family several months to become comfortable in their new surroundings.', ko: '그 이민자 가족이 새로운 환경에 적응하는 데 몇 달이 걸렸다.' },
      ],
    }
  ),
  word('Adequate', '충분한', 5, 'adjective',
    ['부족한', '불충분한', '미달의', '과잉의', '결핍된', '모자란', '빈약한', '희소한', '미흡한', '부적절한'],
    tips({
      etymology: '라틴어 ad(~에)와 aequus(동등한)가 결합된 단어로, 요구되는 기준이나 필요치에 딱 맞게 도달했다는 의미에서 유래했습니다.',
      visual: '저울의 양쪽이 수평을 이루고 있거나, 컵에 물이 넘치지도 모자라지도 않게 선에 딱 맞춰 채워진 이미지를 떠올려 보세요.',
      soundAlike: '\'애디퀘이트\' 발음에서 \'애(A)급은 아니더라도 대(de)충 꽤(quate) 괜찮은\' 정도로 필요한 만큼은 된다고 기억하면 쉽습니다.',
      context: '단순히 양이 많은 것뿐만 아니라, 특정 목적이나 요구 사항을 충족시키기에 질적으로도 적절하고 충분할 때 주로 사용합니다.',
      synonymAntonym: '충분함을 뜻하는 sufficient와 유의어이며, 반대로 부정 접두사 in-을 붙인 inadequate는 \'불충분한\'이라는 뜻이 됩니다.',
    }),
    {
      definition: 'satisfactory or acceptable in quality or quantity for a particular purpose',
      synonyms: ['sufficient', 'enough', 'ample'],
      antonyms: ['inadequate', 'insufficient', 'deficient'],
      exampleSentences: [
        { en: 'The old heating system is no longer adequate for this large building.', ko: '오래된 난방 시스템은 이제 이 큰 건물에 충분하지 않습니다.' },
        { en: 'Make sure you get adequate sleep before the long drive tomorrow.', ko: '내일 장거리 운전을 하기 전에 충분한 수면을 취하도록 하세요.' },
      ],
    }
  ),
  word('Adopt', '채택하다', 5, 'verb',
    ['거부하다', '포기하다', '배척하다', '버리다', '폐기하다', '기각하다', '반대하다', '거절하다', '배제하다', '제외하다'],
    tips({
      etymology: '라틴어 ad(~로)와 optare(선택하다)가 합쳐진 단어로, 여러 선택지 중 하나를 자신에게로 끌어당겨 선택한다는 의미입니다.',
      visual: '회의실에서 여러 제안서 중 하나를 집어 들거나, 보호소에서 강아지를 품에 안고 집으로 데려오는 모습을 상상해 보세요.',
      soundAlike: '비슷한 발음의 Adapt(적응하다)와 혼동하기 쉽지만, 중간에 \'선택\'을 뜻하는 Option의 \'opt\'가 들어있음을 기억하면 쉽습니다.',
      context: '기업이 새로운 기술이나 정책을 도입할 때, 혹은 아이나 반려동물을 가족의 일원으로 받아들이는 입양 상황에서 주로 쓰입니다.',
      synonymAntonym: '무언가를 기꺼이 받아들이는 embrace가 동의어라면, 쓸모없다고 내버리는 discard는 반대의 의미를 가집니다.',
    }),
    {
      definition: 'to legally take another\'s child into one\'s family as one\'s own, or to formally accept and start to use a particular method or plan',
      synonyms: ['embrace', 'accept', 'approve'],
      antonyms: ['reject', 'discard', 'abandon'],
      exampleSentences: [
        { en: 'The government decided to formally take up the new environmental policy.', ko: '정부는 새로운 환경 정책을 공식적으로 채택하기로 결정했다.' },
        { en: 'After much consideration, the couple chose to take a child into their home as their legal son.', ko: '많은 고민 끝에 그 부부는 아이를 법적 아들로 입양하기로 했다.' },
      ],
    }
  ),
  word('Advocate', '옹호하다', 5, 'verb',
    ['반대하다', '비난하다', '공격하다', '거부하다', '저지하다', '억압하다', '차단하다', '무시하다', '배척하다', '질책하다'],
    tips({
      etymology: '라틴어 \'ad(~을 향해)\'와 \'vocare(부르다/목소리)\'가 결합되어, 누군가를 위해 목소리를 높여준다는 의미에서 유래되었습니다.',
      visual: '법정에서 변호사가 피고인을 위해 열정적으로 변론하거나, 광장에서 시민단체가 팻말을 들고 구호를 외치는 모습을 상상해 보세요.',
      soundAlike: '가수의 목소리를 뜻하는 \'보컬(Vocal)\'과 어원이 같습니다. 타인을 위해 대신 목소리를 내주는 행동을 연상하면 쉽습니다.',
      context: '단순히 찬성하는 것을 넘어, 인권 보호나 정책 변화처럼 공공의 가치가 있는 일에 대해 공개적으로 지지를 표명할 때 주로 사용됩니다.',
      synonymAntonym: 'support(지지하다)보다 강한 어조이며, 반대말로는 oppose(반대하다)나 condemn(비난하다) 등이 있습니다.',
    }),
    {
      definition: 'to publicly support or recommend a particular cause, policy, or way of doing something',
      synonyms: ['support', 'champion', 'uphold'],
      antonyms: ['oppose', 'criticize', 'condemn'],
      exampleSentences: [
        { en: 'Many environmentalists actively promote policies that protect endangered species.', ko: '많은 환경운동가들이 멸종 위기 종을 보호하는 정책을 적극적으로 옹호합니다.' },
        { en: 'The organization continues to speak out for the rights of underprivileged children.', ko: '그 단체는 소외 계층 아동들의 권리를 옹호하기 위해 계속해서 목소리를 내고 있습니다.' },
      ],
    }
  ),
  word('Affect', '영향을 미치다', 5, 'verb',
    ['무관하다', '영향 없음', '불변하다', '유지하다', '독립적이다', '중립을 지키다', '배제하다', '무시하다', '제외하다', '방관하다'],
    tips({
      etymology: 'af(~쪽으로)와 fect(만들다/행하다)가 결합되어, 어떤 대상에게 작용을 가하여 변화를 만든다는 의미에서 유래되었습니다.',
      visual: '잔잔한 호수에 돌을 던졌을 때 물결이 사방으로 퍼져나가며 수면의 모양을 바꾸는 모습을 상상해 보세요.',
      soundAlike: '명사인 Effect(결과)와 발음이 비슷하지만, Affect는 변화를 일으키는 \'동사\'라는 점에 주의해야 합니다.',
      context: '기후 변화가 수확량에 타격을 주거나, 슬픈 소식이 사람의 감정 상태를 변화시킬 때 주로 사용됩니다.',
      synonymAntonym: 'influence와 impact는 비슷한 의미로 쓰이며, 반대로 아무런 변화를 주지 않고 그대로 두는 것은 remain이나 stay를 씁니다.',
    }),
    {
      definition: 'to have an influence on someone or something, or to cause a change in someone or something',
      synonyms: ['influence', 'impact', 'alter'],
      antonyms: ['remain', 'stay', 'endure'],
      exampleSentences: [
        { en: 'The cold weather will deeply change the growth of the plants.', ko: '추운 날씨는 식물의 성장에 깊은 영향을 미칠 것이다.' },
        { en: 'Your opinion will not sway my final decision on this matter.', ko: '당신의 의견은 이 문제에 대한 나의 최종 결정에 영향을 주지 않을 것입니다.' },
      ],
    }
  ),
  word('Afford', '~할 여유가 있다', 5, 'verb',
    ['빈곤', '불가능', '어렵다', '부족', '못하다', '불충분', '빈털터리', '가난', '무능', '불가'],
    tips({
      etymology: '고대 영어 \'geforðian\'에서 유래하여 \'앞으로 나아가게 하다\' 혹은 \'수행하다\'라는 의미가 \'감당할 능력이 되다\'로 발전했습니다.',
      visual: '백화점에서 비싼 물건의 가격표를 확인한 뒤, 고민 없이 신용카드를 꺼내 결제하는 당당한 모습을 상상해 보세요.',
      soundAlike: '단어의 앞부분이 \'어포(A-ffo)\'로 시작하므로, \'어포\'를 살 돈이 충분히 있는 상황으로 연상하면 쉽습니다.',
      context: '주로 can이나 be able to와 함께 쓰이며, 돈뿐만 아니라 \'I can\'t afford to lose any more time\'처럼 시간적 여유에도 자주 쓰입니다.',
      synonymAntonym: 'manage는 관리하여 해내다, bear는 비용을 부담하다는 뜻이며, 반대로 lack은 자원이 모자란 상태를 뜻합니다.',
    }),
    {
      definition: 'to be able to buy or do something because you have enough money or time available',
      synonyms: ['manage', 'sustain', 'bear'],
      antonyms: ['lack', 'fail', 'lose'],
      exampleSentences: [
        { en: 'We can\'t pay for a new car right now because of our debt.', ko: '우리는 부채 때문에 지금 당장 새 차를 살 여유가 없다.' },
        { en: 'Few people can have the luxury of taking a month-long vacation.', ko: '한 달 동안 휴가를 떠날 여유가 있는 사람은 거의 없다.' },
      ],
    }
  ),
  word('Aggressive', '공격적인', 5, 'adjective',
    ['소극적인', '온순한', '수동적인', '조용한', '겸손한', '신중한', '보수적인', '미온적인', '차분한', '평화적인'],
    tips({
      etymology: 'ag(향하여)와 gress(걷다)가 합쳐져 상대방을 향해 성큼성큼 다가가는 호전적인 모습을 나타냅니다.',
      visual: '먹잇감을 향해 이빨을 드러내며 달려드는 맹수나, 시장 점유율을 높이려고 거세게 몰아붙이는 기업의 모습입니다.',
      soundAlike: '게임에서 적의 주의를 끄는 \'어그로\'의 어원인 Aggro와 연결하면 기억하기 쉽습니다.',
      context: '부정적으로는 폭력적인 성향을, 긍정적으로는 비즈니스에서 매우 적극적인 추진력을 의미합니다.',
      synonymAntonym: '동의어는 assertive, forceful, hostile이며 반의어는 passive, gentle, peaceful입니다.',
    }),
    {
      definition: 'behaving in a forceful way or showing a readiness to attack or argue with others',
      synonyms: ['assertive', 'forceful', 'hostile'],
      antonyms: ['passive', 'gentle', 'peaceful'],
      exampleSentences: [
        { en: 'The company launched an ambitious and forceful marketing campaign to win new customers.', ko: '그 회사는 새로운 고객을 확보하기 위해 야심 차고 공격적인 마케팅 캠페인을 시작했다.' },
        { en: 'Some stray dogs can become hostile if they feel cornered or threatened.', ko: '일부 유기견들은 구석에 몰리거나 위협을 느끼면 공격적으로 변할 수 있다.' },
      ],
    }
  ),
  word('Allocate', '배분하다', 5, 'verb',
    ['집중하다', '독점하다', '보유하다', '축적하다', '고수하다', '철수하다', '회수하다', '몰수하다', '낭비하다', '방치하다'],
    tips({
      etymology: '라틴어 \'ad(~에)\'와 \'locare(배치하다)\'가 합쳐진 단어로, 특정 목적을 위해 자리를 정해준다는 의미에서 유래했습니다.',
      visual: '한정된 예산이나 자원을 여러 개의 바구니에 나누어 담는 모습을 상상해 보세요.',
      soundAlike: '중요한 \'로케이션(location)\'마다 자원을 \'할당(allocate)\'한다고 기억하면 쉽습니다.',
      context: '주로 정부의 예산 집행, 회사의 인력 배치, 개인의 시간 관리 상황에서 자주 쓰입니다.',
      synonymAntonym: '나누어 주는 distribute와 유사하며, 혼자 움켜쥐는 hoard와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to set apart or designate resources, money, or time for a particular objective',
      synonyms: ['distribute', 'assign', 'allot'],
      antonyms: ['hoard', 'keep', 'gather'],
      exampleSentences: [
        { en: 'The government decided to designate more funds to public education.', ko: '정부는 공교육에 더 많은 예산을 배분하기로 결정했다.' },
        { en: 'You should divide your time efficiently between work and rest.', ko: '일과 휴식 사이에 시간을 효율적으로 할당해야 한다.' },
      ],
    }
  ),
  word('Alter', '변경하다', 5, 'verb',
    ['유지하다', '고수하다', '보존하다', '고정하다', '방치하다', '중단하다', '반복하다', '정지하다', '동결하다', '수호하다'],
    tips({
      etymology: '라틴어 alter(다른 것)에서 유래하여, 원래의 상태를 다른 상태로 바꾼다는 의미를 담고 있습니다.',
      visual: '옷이 너무 커서 수선집에서 허리 라인을 줄이거나, 계획표의 시간을 지우고 다시 쓰는 장면을 상상해 보세요.',
      soundAlike: '얼터너티브(Alternative)와 어원이 같아 \'다른 선택지로 바꾼다\'는 느낌으로 기억하면 쉽습니다.',
      context: '완전히 새로운 것으로 교체하는 것보다, 기존의 것을 부분적으로 수정하거나 조정할 때 주로 사용됩니다.',
      synonymAntonym: 'modify, adjust와는 유의어 관계이며, 상태를 그대로 두는 maintain, preserve와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make different in some particular way, as size, style, or course, without changing into something else',
      synonyms: ['modify', 'adjust', 'amend'],
      antonyms: ['preserve', 'maintain', 'retain'],
      exampleSentences: [
        { en: 'The tailor had to make a few changes to the suit to alter its fit.', ko: '재단사는 정장의 핏을 수정하기 위해 몇 군데를 변경해야 했다.' },
        { en: 'Even a small adjustment can significantly alter the final outcome of the experiment.', ko: '작은 조정조차 실험의 최종 결과를 크게 바꿀 수 있다.' },
      ],
    }
  ),
  word('Alternative', '대안', 5, 'noun',
    ['유일', '독점', '필수', '단일', '일원', '고정', '불가피', '필연', '단일안', '단독'],
    tips({
      etymology: '라틴어 \'alter(다른)\'에서 유래하여, 기존의 것 대신 선택할 수 있는 \'또 다른 것\'을 의미합니다.',
      visual: '메인 도로가 막혔을 때 내비게이션이 제안하는 \'우회 도로\'나 식당에서 품절된 메뉴 대신 고르는 \'다른 메뉴\'를 상상해 보세요.',
      soundAlike: '음악 장르인 \'얼터너티브 락\'은 주류 음악에 대한 \'대안\'으로 등장한 새로운 스타일의 음악입니다.',
      context: '비즈니스 회의에서 현재 계획이 무산될 경우를 대비한 \'Plan B\'를 논의할 때 가장 많이 사용되는 단어입니다.',
      synonymAntonym: 'option, substitute와 비슷하게 쓰이지만, 반드시 해야만 하는 necessity나 obligation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'one of two or more available possibilities or choices that can be selected instead of another',
      synonyms: ['option', 'substitute', 'choice'],
      antonyms: ['necessity', 'obligation', 'compulsion'],
      exampleSentences: [
        { en: 'Solar power is a clean and sustainable alternative to fossil fuels.', ko: '태양광 발전은 화석 연료에 대한 깨끗하고 지속 가능한 대안입니다.' },
        { en: 'Since the main road was closed, we had to find an alternative route.', ko: '주 도로가 폐쇄되었기 때문에 우리는 대안 경로를 찾아야 했습니다.' },
      ],
    }
  ),
  word('Anticipate', '예상하다', 5, 'verb',
    ['놀라다', '의외', '무지', '무관심', '소홀', '회피', '후회', '뒤늦게', '무시', '방치'],
    tips({
      etymology: 'anti(앞)와 cip(잡다)가 합쳐져 \'미리 잡다\', 즉 앞날을 내다본다는 뜻입니다.',
      visual: '멀리서 다가오는 폭풍 구름을 보며 우산을 미리 준비하는 사람을 떠올려 보세요.',
      soundAlike: '앤티시페이트는 명사형인 앤티시페이션(기대/예상)과 함께 외우면 쉽습니다.',
      context: '주로 다가올 문제나 변화를 미리 생각하고 대비할 때 자주 쓰입니다.',
      synonymAntonym: 'expect와 비슷하지만, 단순히 기다리는 것보다 \'미리 대처하다\'는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'to regard as likely to happen and take action or prepare for it beforehand',
      synonyms: ['expect', 'foresee', 'predict'],
      antonyms: ['doubt', 'ignore', 'overlook'],
      exampleSentences: [
        { en: 'We need to anticipate potential problems before they occur.', ko: '우리는 문제가 발생하기 전에 잠재적인 문제들을 예상해야 한다.' },
        { en: 'The organizers anticipate that over five thousand people will attend the event.', ko: '주최 측은 5천 명 이상의 사람들이 행사에 참석할 것으로 예상하고 있다.' },
      ],
    }
  ),
  word('Appetite', '식욕', 5, 'noun',
    ['포만', '포식', '거부감', '메스꺼움', '불쾌', '혐오', '싫증', '무관심', '냉담', '의욕 상실'],
    tips({
      etymology: '라틴어 ad(~을 향해)와 petere(구하다, 가다)가 결합되어 무언가를 간절히 원하는 상태를 의미합니다.',
      visual: '갓 구운 빵 냄새를 맡고 입안에 침이 고이며 식탁으로 이끌리는 모습을 떠올려 보세요.',
      soundAlike: '식사 전 입맛을 돋우기 위해 먹는 \'애피타이저(appetizer)\'의 어원이 되는 단어입니다.',
      context: '단순히 배고픔뿐만 아니라 지식, 권력, 모험 등에 대한 강렬한 갈망을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'Hunger가 생존을 위한 배고픔이라면, 이 단어는 무언가를 즐기고 싶어 하는 욕구에 더 가깝습니다.',
    }),
    {
      definition: 'A natural desire or physical craving to satisfy a bodily need, particularly for food or drink.',
      synonyms: ['hunger', 'craving', 'relish'],
      antonyms: ['distaste', 'aversion', 'satiety'],
      exampleSentences: [
        { en: 'The long hike in the mountains gave everyone a healthy appetite for dinner.', ko: '산에서의 긴 하이킹은 모두에게 저녁 식사에 대한 왕성한 식욕을 갖게 했다.' },
        { en: 'The young entrepreneur has an insatiable appetite for success and new challenges.', ko: '그 젊은 기업가는 성공과 새로운 도전에 대한 끝없는 욕망을 가지고 있다.' },
      ],
    }
  ),
  word('Applicable', '적용 가능한', 5, 'adjective',
    ['부적합한', '미적용의', '무관한', '배제된', '예외적인', '불가능한', '부적절한', '타당하지 않은', '무의미한', '무효의'],
    tips({
      etymology: '동사 apply(적용하다) 뒤에 \'할 수 있는\'을 뜻하는 접미사 -able이 결합되어 만들어진 단어입니다.',
      visual: '퍼즐 조각이 빈 공간에 딱 들어맞아 완성되는 그림을 상상하면 이해하기 쉽습니다.',
      soundAlike: '스마트폰의 \'앱(App)\'이 특정 목적에 맞게 실행되도록 만들어진 프로그램이라는 점을 연결해 보세요.',
      context: '주로 법규, 할인 혜택, 혹은 이론이 특정 사례나 상황에 유효하게 쓰일 수 있을 때 자주 등장합니다.',
      synonymAntonym: '관련이 있다는 뜻의 relevant와 비슷하며, 반대말은 부정 접두사 in-을 붙인 inapplicable입니다.',
    }),
    {
      definition: 'capable of being used or relevant to a specific case or situation',
      synonyms: ['relevant', 'pertinent', 'suitable'],
      antonyms: ['irrelevant', 'inappropriate', 'unsuitable'],
      exampleSentences: [
        { en: 'This rule is not applicable to students who have already graduated.', ko: '이 규칙은 이미 졸업한 학생들에게는 적용되지 않습니다.' },
        { en: 'Please fill out the form and write N/A where the question is not applicable.', ko: '양식을 작성하시고 질문이 해당 사항이 없는 경우 N/A라고 기입해 주세요.' },
      ],
    }
  ),
  word('Appoint', '임명하다', 5, 'verb',
    ['해임하다', '면직하다', '퇴임시키다', '거절하다', '사퇴하다', '축출하다', '파면하다', '해고하다', '배제하다', '제외하다'],
    tips({
      etymology: 'ap(~을 향해)와 point(가리키다)가 결합되어, 여러 사람 중 특정 인물을 손가락으로 지목하여 역할을 맡기는 모습에서 유래했습니다.',
      visual: '중요한 회의장에서 의장이 한 사람을 지목하며 명패를 건네주는 장면을 떠올려 보세요.',
      soundAlike: '명사형인 appointment가 \'약속\'인 이유는 만날 시간과 장소를 미리 \'지정\'해 두었기 때문입니다.',
      context: '정부 요직, 기업의 임원, 혹은 특정 위원회의 위원을 공식적으로 선출할 때 사용하는 격식 있는 표현입니다.',
      synonymAntonym: '비슷한 의미로 designate가 자주 쓰이며, 반대로 직위에서 물러나게 할 때는 dismiss를 사용합니다.',
    }),
    {
      definition: 'to choose someone officially for a job or a responsibility',
      synonyms: ['designate', 'assign', 'nominate'],
      antonyms: ['dismiss', 'fire', 'discharge'],
      exampleSentences: [
        { en: 'The board decided to choose a new director to lead the project.', ko: '이사회가 프로젝트를 이끌 새 이사를 임명하기로 결정했습니다.' },
        { en: 'He was selected to serve as the ambassador to France.', ko: '그는 주프랑스 대사로 임명되었습니다.' },
      ],
    }
  ),
  word('Appreciate', '감사하다', 5, 'verb',
    ['비난하다', '경멸하다', '무시하다', '싫어하다', '비판하다', '불평하다', '냉담하다', '거절하다', '혐오하다', '푸대접하다'],
    tips({
      etymology: '접두사 ad(~에)와 pretium(가치)이 결합된 단어로, 대상의 진정한 가치를 알아보고 평가한다는 어원을 가집니다.',
      visual: '누군가 건넨 따뜻한 차 한 잔을 두 손으로 감싸 쥐며 진심 어린 미소를 짓는 모습을 상상해 보세요.',
      soundAlike: '단어 중간에 포함된 \'preci\'가 \'price(가격/가치)\'와 발음이 비슷하여 가치를 매기고 인정한다는 느낌을 줍니다.',
      context: '단순히 고마워하는 것 외에도 미술관에서 그림을 감상하거나 상황의 심각성을 충분히 인식할 때도 자주 쓰입니다.',
      synonymAntonym: '진가를 알아주는 value와 뜻이 통하며, 가치를 무시하거나 폄하하는 disregard와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to be fully aware of the real importance or quality of someone or something and feel grateful for it',
      synonyms: ['value', 'cherish', 'treasure'],
      antonyms: ['disparage', 'ignore', 'overlook'],
      exampleSentences: [
        { en: 'I really enjoy your company and appreciate everything you have done for me.', ko: '나는 당신과 함께 있는 것이 정말 즐겁고 당신이 나를 위해 해준 모든 일에 감사하고 있습니다.' },
        { en: 'The course helps students learn how to appreciate classical music from a different perspective.', ko: '이 과정은 학생들이 클래식 음악을 다른 관점에서 감상하는 법을 배우도록 돕습니다.' },
      ],
    }
  ),
  word('Appropriate', '적절한', 5, 'adjective',
    ['부적절한', '부적합한', '어색한', '무례한', '부당한', '어울리지 않는', '틀린', '부정확한', '불합리한', '상반된'],
    tips({
      etymology: 'ap(~에)와 propri(자신의 것/property)가 결합되어 \'어떤 용도나 장소에 딱 제 것인\' 상태를 의미합니다.',
      visual: '격식 있는 파티에 운동복 대신 멋진 정장을 갖춰 입은 사람의 모습을 떠올려 보세요.',
      soundAlike: '어프리시에이트(appreciate)와 발음이 비슷하므로, 가치를 \'적절하게\' 인정해준다고 연상하면 쉽습니다.',
      context: '비즈니스 미팅, 공식 행사, 예의를 갖춰야 하는 상황에서 행동이나 복장이 올바른지 판단할 때 자주 쓰입니다.',
      synonymAntonym: 'suitable과 의미가 통하며, 반대말은 부정의 접두사 in-을 붙인 inappropriate입니다.',
    }),
    {
      definition: 'suitable or right for a particular situation, person, or use',
      synonyms: ['suitable', 'fitting', 'proper'],
      antonyms: ['inappropriate', 'unsuitable', 'improper'],
      exampleSentences: [
        { en: 'That was not an appropriate comment for a formal meeting.', ko: '그것은 공식적인 회의에 적절한 발언이 아니었습니다.' },
        { en: 'Please wear appropriate attire for the job interview.', ko: '취업 면접에 적절한 복장을 착용해 주세요.' },
      ],
    }
  ),
  word('Approximate', '대략적인', 5, 'adjective',
    ['정확한', '정밀한', '엄밀한', '확정된', '실측의', '입증된', '명확한', '확실한', '고정된', '불변의'],
    tips({
      etymology: 'ap(~에)와 proxim(가까운)이 결합된 단어로, 실제 값에 아주 가깝게 다가간 상태를 의미합니다.',
      visual: '과녁의 정중앙은 아니더라도 그 주변에 화살들이 모여 있는 모습을 상상해 보세요.',
      soundAlike: '근처를 뜻하는 \'proximity\'와 발음이 비슷하므로 \'근처의 값\' 즉 \'대략적인 값\'으로 기억하세요.',
      context: '예산 계획이나 이동 시간처럼 소수점까지 정확할 필요가 없는 일상적인 수치를 말할 때 자주 쓰입니다.',
      synonymAntonym: '정확도가 떨어지는 rough와 유의어이며, 한 치의 오차도 없는 exact와는 반대되는 개념입니다.',
    }),
    {
      definition: 'close to the actual but not completely accurate or correct',
      synonyms: ['rough', 'estimated', 'near'],
      antonyms: ['exact', 'precise', 'accurate'],
      exampleSentences: [
        { en: 'The approximate cost of the renovation is one thousand dollars.', ko: '수리비의 대략적인 비용은 천 달러입니다.' },
        { en: 'Could you give me an approximate time of your arrival?', ko: '당신이 도착할 대략적인 시간을 알려주실 수 있나요?' },
      ],
    }
  ),
  word('Arbitrary', '임의의', 5, 'adjective',
    ['체계적인', '논리적인', '합리적인', '규칙적인', '일관된', '객관적인', '공정한', '법적인', '표준의', '정당한'],
    tips({
      etymology: '라틴어의 \'판결\'에서 유래하여, 법보다는 개인의 판단에 따른다는 의미가 되었습니다.',
      visual: '눈을 감고 아무 번호나 손가락으로 콕 찍는 무작위 선택 장면을 떠올리세요.',
      soundAlike: '아비트러리 - \'아무렇게나\'의 \'아\'와 발음이 비슷하다고 연상해 보세요.',
      context: '특별한 기준이나 논리 없이 기분 내키는 대로 결정된 상황을 비판할 때 자주 씁니다.',
      synonymAntonym: 'random과 유의어이며, 체계적인 systematic과 반대됩니다.',
    }),
    {
      definition: 'Based on random choice or personal whim rather than any reason or system.',
      synonyms: ['random', 'subjective', 'capricious'],
      antonyms: ['systematic', 'rational', 'logical'],
      exampleSentences: [
        { en: 'The decision to close the park seemed completely arbitrary to the local residents.', ko: '공원을 폐쇄하기로 한 결정은 지역 주민들에게 완전히 독단적인 것으로 보였다.' },
        { en: 'He made an arbitrary choice from the menu without even looking at the prices.', ko: '그는 가격을 확인하지도 않고 메뉴판에서 임의로 선택을 했다.' },
      ],
    }
  ),
  word('Aspect', '측면', 5, 'noun',
    ['전체', '통합', '핵심', '단일', '일원', '종합', '총체', '복합', '단일면', '일면'],
    tips({
      etymology: '라틴어 ad(~을 향해)와 specere(보다)가 결합되어 \'어떤 방향에서 바라본 모습\'이라는 의미에서 유래했습니다.',
      visual: '여러 개의 단면을 가진 보석을 떠올려 보세요. 어느 각도에서 보느냐에 따라 보이는 \'면\'이 달라지는 것이 바로 aspect입니다.',
      soundAlike: '스펙(spec)을 쌓는다는 말처럼, 어떤 대상이 가진 여러 가지 \'사양\'이나 \'면모\'를 떠올리면 기억하기 쉽습니다.',
      context: '주로 복잡한 상황, 문제, 혹은 성격 중에서 특정한 한 가지 부분이나 특징을 지칭할 때 사용합니다.',
      synonymAntonym: 'facet이나 dimension은 사물의 다각적인 면을, whole이나 totality는 전체를 의미합니다.',
    }),
    {
      definition: 'A specific part, feature, or characteristic of a complex situation, idea, or object.',
      synonyms: ['facet', 'dimension', 'feature'],
      antonyms: ['whole', 'totality', 'entirety'],
      exampleSentences: [
        { en: 'We must consider every aspect of the problem before making a decision.', ko: '결정을 내리기 전에 우리는 그 문제의 모든 측면을 고려해야 한다.' },
        { en: 'The financial aspect is the most important part of the deal.', ko: '재정적인 측면이 이번 거래에서 가장 중요한 부분이다.' },
      ],
    }
  ),
  word('Assemble', '조립하다', 5, 'verb',
    ['분해하다', '해체하다', '떼어내다', '분리하다', '해산하다', '흩다', '분산하다', '철거하다', '파괴하다', '분할하다'],
    tips({
      etymology: '라틴어 \'ad(~로)\'와 \'simul(함께)\'이 결합되어 \'한데 모으다\'라는 의미에서 유래되었습니다.',
      visual: '이케아 가구 상자를 열어 흩어진 나사와 판자들을 설명서대로 하나씩 끼워 맞추는 모습을 상상해 보세요.',
      soundAlike: '영화 어벤져스의 명대사 \'Avengers Assemble!\'을 떠올리면 영웅들이 한곳으로 모이는 장면이 연상됩니다.',
      context: '기계나 가구의 부품을 맞추어 완성품을 만들 때나, 사람들이 회의를 위해 특정 장소에 집합할 때 주로 쓰입니다.',
      synonymAntonym: 'gather, collect와는 \'모으다\'라는 뜻을 공유하며, 반대로 뿔뿔이 흩어지는 것은 scatter, 분해하는 것은 disassemble입니다.',
    }),
    {
      definition: 'to put separate parts together to form a complete object or to bring people together into a group',
      synonyms: ['gather', 'collect', 'construct'],
      antonyms: ['disassemble', 'scatter', 'disperse'],
      exampleSentences: [
        { en: 'It took several hours to put the pieces together and build the new bookshelf.', ko: '새 책장을 조립하기 위해 부품들을 맞추는 데 몇 시간이 걸렸다.' },
        { en: 'The principal asked all students to gather in the main auditorium for the announcement.', ko: '교장 선생님은 공지 사항을 전달하기 위해 모든 학생에게 강당에 모이라고 요청했다.' },
      ],
    }
  ),
  word('Assert', '주장하다', 5, 'verb',
    ['부정하다', '수긍하다', '동의하다', '포기하다', '물러서다', '낙담하다', '인정하다', '굴복하다', '거절하다', '부인하다'],
    tips({
      etymology: '라틴어 ad(~에 대하여)와 serere(결합하다/늘어놓다)가 합쳐져, 자신의 생각을 사람들 앞에 단단히 연결하여 내세운다는 의미에서 유래했습니다.',
      visual: '회의실에서 한 사람이 일어서서 단호한 표정으로 자신의 기획안을 가리키며 확신에 찬 목소리로 말하는 장면을 떠올려 보세요.',
      soundAlike: '\'어서(Assert) 내 의견을 들어!\'라고 말하며 자신의 권리를 강하게 내세우는 상황을 연상하면 기억하기 쉽습니다.',
      context: '단순한 의견 제시를 넘어 법적 권리, 사실 관계, 혹은 자신의 존재감을 강하게 드러내야 하는 공적인 상황에서 주로 사용됩니다.',
      synonymAntonym: '강하게 내세우는 claim과 declare가 동의어이며, 반대로 이를 거부하거나 포기하는 deny와 abandon이 반의어입니다.',
    }),
    {
      definition: 'to state a fact or belief confidently and forcefully to make others recognize it',
      synonyms: ['claim', 'declare', 'maintain'],
      antonyms: ['deny', 'reject', 'abandon'],
      exampleSentences: [
        { en: 'The company continues to state its innocence despite the evidence presented.', ko: '그 회사는 제시된 증거에도 불구하고 자신들의 무죄를 계속해서 주장하고 있다.' },
        { en: 'You must learn to stand up for your rights in professional environments.', ko: '전문적인 환경에서는 당신의 권리를 주장하는 법을 배워야 한다.' },
      ],
    }
  ),
  word('Assess', '평가하다', 5, 'verb',
    ['무시하다', '방치하다', '추측하다', '오판하다', '회피하다', '생략하다', '소홀히하다', '간과하다', '거부하다', '망각하다'],
    tips({
      etymology: '라틴어 \'assidere\'에서 유래했으며, 이는 \'옆에 앉다\'라는 뜻입니다. 원래 세금을 매기기 위해 판사 옆에 앉아 돕던 것에서 \'가치를 평가하다\'라는 의미가 되었습니다.',
      visual: '건물 안전 진단 전문가가 헬멧을 쓰고 벽의 균열을 꼼꼼히 살피며 점수를 매기는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'어세스\'이므로, 어떤 대상의 가치를 \'어서(어세) 스스로\' 판단해본다고 기억하면 쉽습니다.',
      context: '주로 실력, 가치, 상황의 심각성 등을 공식적으로 판단하거나 측정할 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'evaluate와 유사하며, 꼼꼼히 살피는 것과 반대로 대충 보거나 무시하는 ignore, overlook과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to carefully judge or determine the importance, size, or value of a particular situation or object',
      synonyms: ['evaluate', 'appraise', 'estimate'],
      antonyms: ['ignore', 'neglect', 'overlook'],
      exampleSentences: [
        { en: 'The insurance company will send an agent to determine the extent of the damage.', ko: '보험사는 피해 규모를 평가하기 위해 직원을 보낼 것이다.' },
        { en: 'It is difficult to judge the impact of the new policy at this early stage.', ko: '이 이른 단계에서 새 정책의 영향을 평가하기는 어렵다.' },
      ],
    }
  ),
  word('Assign', '배정하다', 5, 'verb',
    ['회수하다', '해제하다', '포기하다', '거절하다', '배제하다', '제외하다', '철회하다', '취소하다', '해임하다', '이탈하다'],
    tips({
      etymology: '라틴어 ad(~에게)와 signare(표시하다)가 결합된 단어로, 특정 사람에게 할 일을 표시해서 맡긴다는 의미에서 유래했습니다.',
      visual: '회사 조직도에서 빈 칸에 누군가의 이름표를 딱 붙여서 자리를 정해주는 장면을 떠올려 보세요.',
      soundAlike: '어사인(Assign)은 \'어, 사인(sign)해!\'라고 하며 계약서나 업무 지시서에 서명하고 일을 맡기는 상황으로 기억하세요.',
      context: '주로 회사에서 업무를 분담하거나, 학교에서 숙제를 내줄 때, 혹은 군대에서 보직을 정할 때 자주 쓰입니다.',
      synonymAntonym: 'allocate, designate와 같은 유의어는 \'나누어 주다\'는 느낌이며, withdraw, revoke 같은 반의어는 \'줬던 것을 거두다\'는 뜻입니다.',
    }),
    {
      definition: 'to give a particular job, responsibility, or piece of work to someone for them to complete',
      synonyms: ['allocate', 'designate', 'allot'],
      antonyms: ['withdraw', 'revoke', 'keep'],
      exampleSentences: [
        { en: 'The manager will distribute the roles to each team member tomorrow.', ko: '매니저는 내일 각 팀원에게 역할을 배정할 것입니다.' },
        { en: 'The committee decided to appoint a new seat to the representative.', ko: '위원회는 그 대표에게 새로운 자리를 배정하기로 결정했습니다.' },
      ],
    }
  ),
  word('Assist', '돕다', 5, 'verb',
    ['방해하다', '저지하다', '무시하다', '거절하다', '방치하다', '해치다', '훼방하다', '저해하다', '가로막다', '지연시키다'],
    tips({
      etymology: '라틴어 ad(~로)와 sistere(서다)가 결합되어 \'누군가의 곁에 서서 힘을 보태다\'라는 의미에서 유래되었습니다.',
      visual: '농구 경기에서 득점하기 좋게 동료에게 공을 정확히 패스해주는 장면을 상상해 보세요.',
      soundAlike: '스포츠 중계에서 골을 돕는 결정적인 패스를 \'어시스트\'라고 부르는 것과 발음이 같습니다.',
      context: '단순히 친절을 베푸는 것을 넘어, 업무나 전문적인 작업의 일부분을 분담하여 거들어줄 때 자주 사용됩니다.',
      synonymAntonym: '도움을 주는 help, aid와 비슷하지만, 방해하고 가로막는 hinder, obstruct와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to give support or help to someone in order to complete a task or goal',
      synonyms: ['help', 'aid', 'support'],
      antonyms: ['hinder', 'obstruct', 'impede'],
      exampleSentences: [
        { en: 'The new software is designed to help users manage their finances more effectively.', ko: '새 소프트웨어는 사용자들이 재정을 더 효과적으로 관리할 수 있도록 돕기 위해 설계되었습니다.' },
        { en: 'Several volunteers arrived early to provide support with the event preparations.', ko: '여러 자원봉사자들이 행사 준비를 돕기 위해 일찍 도착했습니다.' },
      ],
    }
  ),
  word('Assume', '가정하다', 5, 'verb',
    ['확인하다', '입증하다', '부정하다', '의심하다', '검증하다', '검토하다', '실증하다', '증명하다', '확정하다', '반박하다'],
    tips({
      etymology: '라틴어 ad(~쪽으로)와 sumere(취하다)가 결합된 단어로, 어떤 생각을 사실로 받아들여 자기 것으로 취한다는 의미에서 유래했습니다.',
      visual: '텅 빈 상자 안에 \'이게 들어있겠지\'라고 미리 라벨을 붙여버리는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'어슘\' 발음이 \'어휴~\'와 비슷하니, \'어휴, 당연히 그렇겠지\'라며 지레짐작하는 상황을 떠올려 보세요.',
      context: '증거가 없는 상태에서 지레짐작하거나, 특정 직책이나 책임을 떠맡을 때 주로 사용되는 동사입니다.',
      synonymAntonym: 'suppose, presume과 비슷하게 추측의 의미를 가지며, 확실히 밝혀내는 prove, verify와는 반대됩니다.',
    }),
    {
      definition: 'to accept something as true or as certain to happen, even without proof or evidence',
      synonyms: ['suppose', 'presume', 'surmise'],
      antonyms: ['prove', 'verify', 'disprove'],
      exampleSentences: [
        { en: 'Many people mistakenly believe that we can take for granted what others think.', ko: '많은 사람들이 다른 이들이 생각하는 것을 우리가 당연히 짐작할 수 있다고 잘못 믿곤 합니다.' },
        { en: 'It is never wise to take a premise as fact before you have seen the actual data.', ko: '실제 데이터를 보기 전에 전제를 사실로 받아들이는 것은 결코 현명하지 않습니다.' },
      ],
    }
  ),
  word('Attitude', '태도', 5, 'noun',
    ['행동', '결과', '환경', '사실', '객관', '물질', '형식', '규칙', '절차', '제도'],
    tips({
      etymology: '라틴어 aptitudo(적합성)에서 유래하여 사물을 대하는 \'적합한 자세\'를 의미하게 되었습니다.',
      visual: '팔짱을 끼고 삐딱하게 서 있는 사람과 허리를 꼿꼿이 펴고 경청하는 사람의 대비를 상상하세요.',
      soundAlike: '비슷한 발음인 \'알티튜드(Altitude, 고도)\'와 헷갈리지 마세요. 마음의 높이가 태도입니다.',
      context: '사람의 마음가짐이나 사물을 대하는 자세를 말할 때 씁니다.',
      synonymAntonym: '동의어는 mindset, disposition, outlook이며 반의어는 indifference, neutrality, apathy입니다.',
    }),
    {
      definition: 'a settled way of thinking or feeling about someone or something, typically one that is reflected in a person\'s behavior',
      synonyms: ['mindset', 'disposition', 'outlook'],
      antonyms: ['indifference', 'neutrality', 'apathy'],
      exampleSentences: [
        { en: 'A positive mindset can change your entire life.', ko: '긍정적인 태도는 당신의 인생 전체를 바꿀 수 있다.' },
        { en: 'She has a very professional way of thinking toward her job.', ko: '그녀는 자신의 일에 대해 매우 전문적인 태도를 가지고 있다.' },
      ],
    }
  ),
  word('Attribute', '~에 귀속시키다', 5, 'verb',
    ['부정하다', '거부하다', '무시하다', '배제하다', '제외하다', '부인하다', '거절하다', '억울하다', '변명하다', '회피하다'],
    tips({
      etymology: '라틴어 ad(~에)와 tribuere(할당하다/주다)가 결합되어, 어떤 결과의 원인을 특정 대상에게 \'준다는\' 의미에서 유래했습니다.',
      visual: '성공이라는 트로피를 들고 그 공로를 부모님이나 팀원에게 화살표로 가리키며 돌리는 장면을 상상해 보세요.',
      soundAlike: '기부하다라는 뜻의 contribute와 혼동하기 쉬운데, attribute는 원인을 \'돌리는\' 것에 집중합니다.',
      context: '뉴스나 논문에서 \'전문가들은 이 현상을 기후 변화의 탓으로 돌린다\'와 같이 인과관계를 설명할 때 필수적인 단어입니다.',
      synonymAntonym: 'ascribe와 credit은 긍정적이거나 중립적인 원인을 돌릴 때 쓰이며, 반대로 책임을 부인할 때는 deny를 씁니다.',
    }),
    {
      definition: 'to believe that a situation or event is the result of a particular person, object, or action',
      synonyms: ['ascribe', 'credit', 'assign'],
      antonyms: ['deny', 'disavow', 'reject'],
      exampleSentences: [
        { en: 'The coach attributed the team\'s victory to their rigorous training schedule.', ko: '감독은 팀의 승리를 엄격한 훈련 일정 덕분으로 돌렸다.' },
        { en: 'Many historians attribute the fall of the empire to internal corruption.', ko: '많은 역사학자들은 그 제국의 몰락을 내부 부패의 탓으로 본다.' },
      ],
    }
  ),
  word('Authority', '권한', 5, 'noun',
    ['무권한', '무력', '복종', '예속', '비종속', '독립', '자율', '무지', '무경험', '무능'],
    tips({
      etymology: '창조자나 저자를 뜻하는 라틴어 auctor에서 유래하여, 무언가를 결정하고 다스릴 힘을 가진 사람을 뜻하게 되었습니다.',
      visual: '중요한 서류의 마지막 칸에 붉은색 승인 도장을 쾅 찍는 결정권자의 손을 상상해 보세요.',
      soundAlike: '어쏘리티 - \'어, 소리(소문) 없이 강한 힘\'을 가진 권력자의 모습을 연상해 보세요.',
      context: '법적인 권리뿐만 아니라, 특정 학문 분야에서 독보적인 지식을 가진 \'권위자\'를 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: 'power는 일반적인 힘을, jurisdiction은 법적 관할권을 뜻하며, 반대로 impotence는 아무런 힘이 없는 무능력을 뜻합니다.',
    }),
    {
      definition: 'the official legal right or ability to control resources, give commands, or make final decisions',
      synonyms: ['power', 'jurisdiction', 'command'],
      antonyms: ['impotence', 'weakness', 'subjection'],
      exampleSentences: [
        { en: 'He has no authority to decide.', ko: '그에게는 결정할 권한이 없다.' },
        { en: 'You need to speak to someone in authority.', ko: '권한이 있는 사람과 이야기해야 합니다.' },
      ],
    }
  ),
  word('Automatic', '자동의', 5, 'adjective',
    ['수동의', '의도적인', '인위적인', '수작업의', '선택적인', '임의의', '직접적인', '고의의', '복잡한', '정지된'],
    tips({
      etymology: '그리스어 \'autos(자기)\'와 \'matos(움직임)\'가 결합되어 \'스스로 움직인다\'는 의미에서 유래되었습니다.',
      visual: '사람이 가까이 가면 손을 대지 않아도 스르르 열리는 백화점의 유리문을 떠올려 보세요.',
      soundAlike: '자동차의 \'오토\' 기어를 생각하면 쉽습니다. 기어 조작을 알아서 해주는 \'오토매틱\' 차량을 연상하세요.',
      context: '기계의 작동 방식뿐만 아니라, 깊이 생각하지 않고 즉각적으로 튀어나오는 본능적인 반응을 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: '기계적인 mechanical과 반대되는 개념은 손으로 직접 하는 manual입니다.',
    }),
    {
      definition: 'operating with minimal human intervention or occurring as a natural reaction without conscious thought',
      synonyms: ['mechanical', 'spontaneous', 'instinctive'],
      antonyms: ['manual', 'intentional', 'deliberate'],
      exampleSentences: [
        { en: 'The heating system has an inbuilt device for temperature control.', ko: '난방 시스템에는 온도를 조절하는 자동 장치가 내장되어 있습니다.' },
        { en: 'Breathing is an involuntary response of the human body.', ko: '호흡은 인체의 자동적인 반응입니다.' },
      ],
    }
  ),
  word('Barely', '겨우', 5, 'adverb',
    ['넉넉히', '충분히', '여유있게', '쉽게', '편하게', '풍부하게', '상당히', '완전히', '넉넉함', '과하게'],
    tips({
      etymology: 'bare(벌거벗은, 아무것도 없는) 상태에서 아주 최소한의 것만 갖추고 있는 상태를 나타냅니다.',
      visual: '마감 직전 시계 바늘이 정각에 닿기 직전 아슬아슬하게 서류를 제출하는 모습',
      soundAlike: '곡물인 보리(barley)와 발음이 매우 흡사하므로 문맥으로 구분해야 합니다.',
      context: '긍정적인 상황보다는 \'간신히 해냈다\'거나 \'거의 ~하지 못하다\'라는 부정적 뉘앙스로 자주 쓰입니다.',
      synonymAntonym: 'scarcely, hardly와 비슷하게 쓰이며, 반대로 여유로운 상황은 easily, fully를 사용합니다.',
    }),
    {
      definition: 'by the smallest amount or margin; almost not at all',
      synonyms: ['scarcely', 'hardly', 'narrowly'],
      antonyms: ['easily', 'fully', 'amply'],
      exampleSentences: [
        { en: 'We barely made it on time.', ko: '우리는 겨우 제시간에 도착했다.' },
        { en: 'She could barely hear him.', ko: '그녀는 그의 말을 거의 들을 수 없었다.' },
      ],
    }
  ),
  word('Barrier', '장벽', 5, 'noun',
    ['통로', '개방', '접근', '연결', '지름길', '다리', '입구', '출구', '개방구', '통로구멍'],
    tips({
      etymology: '막대기를 뜻하는 \'bar\'에서 유래하여 길을 막는 물건이나 구조물을 의미합니다.',
      visual: '마라톤 코스나 공사 현장에서 사람들의 진입을 막기 위해 세워둔 긴 차단봉을 상상해 보세요.',
      soundAlike: 'SF 영화나 게임에서 캐릭터를 보호하기 위해 치는 방어막인 \'배리어\'를 떠올리면 쉽습니다.',
      context: '단순히 물리적인 담장뿐만 아니라 언어 장벽이나 무역 장벽처럼 추상적인 방해 요소에도 자주 쓰입니다.',
      synonymAntonym: '동의어인 obstacle은 장애물을, 반의어인 passage는 통과 가능한 길을 뜻합니다.',
    }),
    {
      definition: 'A structure, object, or concept that prevents movement, access, or progress from one place or state to another.',
      synonyms: ['obstacle', 'blockade', 'hurdle'],
      antonyms: ['opening', 'entrance', 'passage'],
      exampleSentences: [
        { en: 'The heavy snow acted as a natural block to the mountain pass.', ko: '폭설이 산길을 막는 자연적인 장벽 역할을 했다.' },
        { en: 'Lack of confidence can be a major psychological hindrance to success.', ko: '자신감 부족은 성공에 있어 큰 심리적 장벽이 될 수 있다.' },
      ],
    }
  ),
  word('Behalf', '~을 위해', 5, 'noun',
    ['반대', '적대', '불리', '해악', '손해', '불이익', '비호', '무관', '독자적', '자기'],
    tips({
      etymology: 'be(~에)와 half(측면, 쪽)가 결합되어 \'누군가의 편(쪽)에 서서\' 행동한다는 의미에서 유래되었습니다.',
      visual: '시상식에서 몸이 아픈 주인공을 대신하여 무대 위로 올라가 트로피를 전달받는 대리인의 모습을 상상해 보세요.',
      soundAlike: '\'비하프\'라고 발음하며, 내 소중한 \'반(half)쪽\'을 위해 내가 대신 나선다고 기억하면 쉽습니다.',
      context: '단독으로 쓰이기보다는 전치사와 함께 \'on behalf of\' 또는 \'in behalf of\'의 관용구 형태로 주로 사용됩니다.',
      synonymAntonym: '누군가를 대신하는 representation과 유의어이며, 반대로 맞서 싸우는 opposition과는 대조됩니다.',
    }),
    {
      definition: 'The benefit, advantage, or interest of a particular person or group, often used when acting as a representative.',
      synonyms: ['representation', 'interest', 'stead'],
      antonyms: ['opposition', 'resistance', 'hostility'],
      exampleSentences: [
        { en: 'I am speaking on behalf of the group.', ko: '나는 그룹을 대표해서 말하고 있습니다.' },
        { en: 'Donations were collected on his behalf.', ko: '그를 위해 기부금이 모였다.' },
      ],
    }
  ),
  word('Bewildered', '당황한', 5, 'adjective',
    ['냉정한', '침착한', '확신에 찬', '명확한', '자신만만한', '안정된', '평온한', '단호한', '명료한', '차분한'],
    tips({
      etymology: 'wilder(길을 잃게 하다)에서 유래하여 황야(wild) 한복판에 홀로 버려진 듯한 막막한 상태를 뜻합니다.',
      visual: '복잡하게 얽힌 미로 한가운데서 지도를 거꾸로 들고 머리를 긁적이는 사람의 모습.',
      soundAlike: '비윌더드 - \'비(be)가 쏟아지는 거친 들판(wild)에서 길을 잃어 당황한\' 상황으로 기억하세요.',
      context: '갑작스러운 변화나 너무 복잡한 설명 때문에 머릿속이 하얘지고 어안이 벙벙할 때 주로 쓰입니다.',
      synonymAntonym: 'confused보다 더 강하게 혼란스러운 상태이며, 반대로 마음이 정리된 상태는 composed라고 합니다.',
    }),
    {
      definition: 'completely puzzled or confused by something that is very complicated or unexpected',
      synonyms: ['confused', 'perplexed', 'baffled'],
      antonyms: ['composed', 'clearheaded', 'enlightened'],
      exampleSentences: [
        { en: 'She looked completely lost and puzzled by the sudden change in plans.', ko: '그녀는 갑작스러운 계획 변경에 완전히 당황한 기색이었다.' },
        { en: 'The tourists stood there with a puzzled expression, trying to make sense of the complex map.', ko: '관광객들은 복잡한 지도를 이해하려고 애쓰며 어리둥절한 표정으로 서 있었다.' },
      ],
    }
  ),
  word('Bias', '편견', 5, 'noun',
    ['공정', '객관', '중립', '균형', '정직', '공정성', '무편견', '객관성', '균형감', '타당'],
    tips({
      etymology: '사선(비스듬한 선)을 뜻하는 프랑스어에서 유래하여 한쪽으로 기운 생각을 의미합니다.',
      visual: '수평이 맞지 않고 한쪽으로 푹 기울어진 저울을 상상해 보세요.',
      soundAlike: '바이어스 - 전자제품의 \'바이어스 전압\'처럼 한쪽 방향으로만 흐르는 전류를 떠올려 보세요.',
      context: '뉴스 보도나 심판의 판결이 공정하지 못하고 한쪽 편을 들 때 자주 사용되는 단어입니다.',
      synonymAntonym: 'prejudice와 비슷하게 쓰이며, 반대로 공평함을 뜻하는 fairness와는 대조됩니다.',
    }),
    {
      definition: 'A strong feeling in favor of or against one group of people or one side in an argument, often not based on fair judgment.',
      synonyms: ['prejudice', 'partiality', 'favoritism'],
      antonyms: ['impartiality', 'fairness', 'objectivity'],
      exampleSentences: [
        { en: 'The judge showed no bias during the high-profile trial.', ko: '그 판사는 세간의 이목이 쏠린 재판 중에 어떤 편견도 보이지 않았다.' },
        { en: 'Media bias can significantly influence public opinion on political issues.', ko: '언론의 편향성은 정치적 사안에 대한 여론에 상당한 영향을 줄 수 있다.' },
      ],
    }
  ),
  word('Bond', '유대', 5, 'noun',
    ['이격', '분리', '단절', '적대', '불화', '갈등', '적대감', '소원', '거리감', '불신'],
    tips({
      etymology: '무언가를 단단히 묶는다는 의미의 bind와 같은 어원에서 유래하여 사람 사이의 결속을 뜻하게 되었습니다.',
      visual: '두 사람이 하나의 밧줄에 함께 묶여 있거나 강력 접착제로 붙여놓은 것처럼 떨어지지 않는 모습을 상상해 보세요.',
      soundAlike: '물건을 붙일 때 쓰는 \'본드\'를 떠올리면 사람 사이를 끈끈하게 이어주는 감정이라는 것을 쉽게 기억할 수 있습니다.',
      context: '주로 가족, 친구, 동료 간의 깊은 신뢰나 정서적인 밀착 관계를 설명할 때 사용되는 긍정적인 단어입니다.',
      synonymAntonym: '유대를 뜻하는 connection과 유사하며, 관계가 멀어지는 separation이나 estrangement와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A strong feeling of friendship, love, or shared beliefs and experiences that unites people together.',
      synonyms: ['connection', 'tie', 'link'],
      antonyms: ['separation', 'detachment', 'estrangement'],
      exampleSentences: [
        { en: 'The shared experience created a lifelong emotional connection between the two survivors.', ko: '공유된 경험은 두 생존자 사이에 평생 지속될 정서적 유대를 형성했습니다.' },
        { en: 'A strong relationship is built on a foundation of trust and mutual respect.', ko: '강력한 유대는 신뢰와 상호 존중의 토대 위에 세워집니다.' },
      ],
    }
  ),
  word('Boundary', '경계', 5, 'noun',
    ['중앙', '내부', '핵심', '통합', '연속', '개방', '무경계', '혼합', '융합', '일체'],
    tips({
      etymology: '한계를 뜻하는 bound에 장소를 나타내는 접미사 -ary가 결합되어 \'한계가 지어지는 지점\'을 의미하게 되었습니다.',
      visual: '지도 위에 그려진 굵은 점선이나 마당을 둘러싼 울타리가 안과 밖을 나누는 모습을 상상해 보세요.',
      soundAlike: '축구 경기 중 공이 경기장 밖으로 나갔을 때 선언하는 \'아웃 오브 바운즈(out of bounds)\'를 떠올리면 쉽습니다.',
      context: '물리적인 땅의 경계선뿐만 아니라, 타인이 침범하지 말아야 할 심리적, 개인적 영역을 뜻할 때도 자주 쓰입니다.',
      synonymAntonym: 'border는 주로 국경을, limit은 수치적 한계를 뜻하며, 반대말인 center는 사물의 정중앙을 의미합니다.',
    }),
    {
      definition: 'A real or imaginary line that separates two areas or shows where one thing ends and another begins.',
      synonyms: ['border', 'limit', 'frontier'],
      antonyms: ['center', 'interior', 'core'],
      exampleSentences: [
        { en: 'The river forms a natural divide between the two neighboring states.', ko: '그 강은 인접한 두 주 사이에 자연적인 경계를 형성합니다.' },
        { en: 'It is important to set personal limits in any professional relationship.', ko: '어떤 전문적인 관계에서든 개인적인 경계를 설정하는 것이 중요합니다.' },
      ],
    }
  ),
  word('Broad', '넓은', 5, 'adjective',
    ['좁은', '협소한', '제한된', '미세한', '편협한', '한정된', '축소된', '희박한', '빽빽한', '정밀한'],
    tips({
      etymology: '고대 영어 brād에서 유래하여, 단순히 물리적인 너비뿐만 아니라 광범위한 상태를 의미하게 되었습니다.',
      visual: '양팔을 옆으로 최대한 길게 뻗어 큰 원을 그리는 모습을 상상하면 공간의 너비가 느껴집니다.',
      soundAlike: '라디오나 TV의 \'브로드캐스트(Broadcast)\'는 신호를 \'넓게\' 퍼뜨린다는 뜻을 담고 있습니다.',
      context: '어깨가 떡 벌어진 신체 특징이나, 지식의 깊이가 아닌 \'폭\'이 넓음을 표현할 때 주로 사용합니다.',
      synonymAntonym: 'Wide와 유사하지만, Broad는 추상적인 범위나 일반적인 개요를 뜻할 때 더 자주 쓰입니다.',
    }),
    {
      definition: 'Covering a large distance from side to side or encompassing a vast variety of topics and ideas.',
      synonyms: ['wide', 'extensive', 'vast'],
      antonyms: ['narrow', 'limited', 'restricted'],
      exampleSentences: [
        { en: 'The river is very wide and has a broad bridge crossing over it.', ko: '그 강은 매우 넓으며 그 위로 폭이 넓은 다리가 가로지르고 있습니다.' },
        { en: 'She has a broad knowledge of European history from ancient to modern times.', ko: '그녀는 고대부터 현대에 이르기까지 유럽 역사에 대해 폭넓은 지식을 가지고 있습니다.' },
      ],
    }
  ),
  word('Budget', '예산', 5, 'noun',
    ['초과', '적자', '탕진', '낭비', '무계획', '과다지출', '초과비용', '빚', '부채', '사과'],
    tips({
      etymology: '가죽 주머니를 뜻하는 프랑스어 bougette에서 유래하여 돈 주머니를 의미하게 되었습니다.',
      visual: '지갑 속에 얼마가 들어있는지 확인하고 계획을 세우는 가계부를 떠올려 보세요.',
      soundAlike: '저렴한 여행을 \'버짓 트래블\'이라고 부르는 것을 들어보셨나요?',
      context: '회사의 운영 자금이나 한 달 생활비 계획을 세울 때 필수적인 단어입니다.',
      synonymAntonym: 'allowance는 할당량을, debt는 갚아야 할 빚을 의미합니다.',
    }),
    {
      definition: 'A detailed plan of how much money will be spent on specific items or activities during a particular period.',
      synonyms: ['allowance', 'funds', 'finances'],
      antonyms: ['debt', 'deficit', 'overspending'],
      exampleSentences: [
        { en: 'We need to plan our monthly spending carefully to stay within our financial limits.', ko: '정해진 금액 내에서 생활하기 위해 우리는 매달의 지출 계획을 신중하게 세워야 합니다.' },
        { en: 'The marketing department was granted a large amount of money for the campaign.', ko: '마케팅 부서는 캠페인을 위해 많은 액수의 자금을 할당받았습니다.' },
      ],
    }
  ),
  word('Burden', '부담', 5, 'noun',
    ['축복', '이득', '편의', '쾌락', '가벼움', '자유', '해방', '경쾌', '기쁨', '유익'],
    tips({
      etymology: '무언가를 나르거나 짊어진다는 뜻의 고대 영어 \'byrthen\'에서 유래했습니다.',
      visual: '등에 아주 무거운 짐을 지고 땀을 흘리며 가파른 언덕을 오르는 사람을 상상해 보세요.',
      soundAlike: '마음의 짐이 너무 \'버거워\'서 \'버든(Burden)\'이라고 외우면 기억하기 좋습니다.',
      context: '심리적인 압박감, 책임감, 혹은 가계에 타격을 주는 경제적인 어려움을 표현할 때 주로 사용합니다.',
      synonymAntonym: 'load는 물리적인 무게를 강조하며, relief는 그 짐을 덜어냈을 때 느끼는 안도감을 뜻합니다.',
    }),
    {
      definition: 'A heavy load, or a duty that causes hardship, anxiety, or great effort to manage.',
      synonyms: ['load', 'weight', 'responsibility'],
      antonyms: ['relief', 'benefit', 'blessing'],
      exampleSentences: [
        { en: 'The heavy debt became a major source of stress for the family.', ko: '과도한 빚은 그 가족에게 큰 심리적 부담이 되었습니다.' },
        { en: 'I don\'t want to be a trouble to my friends when I am sick.', ko: '내가 아플 때 친구들에게 부담이 되고 싶지 않습니다.' },
      ],
    }
  ),
  word('Bureaucracy', '관료제', 5, 'noun',
    ['민주주의', '자유시장', '행정간소화', '업무효율', '신속처리', '민첩성', '직접민주제', '개인주의', '민간기업', '자율경영'],
    tips({
      etymology: '프랑스어로 사무실을 뜻하는 \'bureau\'와 통치를 뜻하는 그리스어 \'kratia\'가 결합되어 \'책상 앞에서의 통치\'를 의미합니다.',
      visual: '공공기관에서 서류 한 장을 처리하기 위해 여러 부서를 돌며 수많은 도장을 받아야 하는 복잡한 결재판을 상상해 보세요.',
      soundAlike: '정부 기관의 \'뷰로(Bureau)\'들이 겹겹이 쌓여 있는 시스템이라고 기억하면 쉽습니다.',
      context: '주로 절차가 지나치게 복잡하거나 융통성이 없는 행정 체계를 비판적인 어조로 언급할 때 자주 사용됩니다.',
      synonymAntonym: 'red tape는 불필요한 형식주의를, simplicity는 복잡함이 없는 단순함을 뜻합니다.',
    }),
    {
      definition: 'A system of government or management in which important decisions are taken by state officials rather than by elected representatives, often involving complex rules.',
      synonyms: ['administration', 'red tape', 'officialdom'],
      antonyms: ['simplicity', 'efficiency', 'anarchy'],
      exampleSentences: [
        { en: 'The new business struggled to navigate through the complex government regulations and procedures.', ko: '새로운 기업은 복잡한 정부 관료제 규정과 절차를 통과하느라 애를 먹었습니다.' },
        { en: 'Many citizens complain about the unnecessary paperwork and delays in the public sector.', ko: '많은 시민들이 공공 부문의 불필요한 서류 작업과 관료주의적 지연에 대해 불평합니다.' },
      ],
    }
  ),
  word('Capable', '유능한', 5, 'adjective',
    ['무능한', '서툰', '미숙한', '부적격의', '무력한', '한계가있는', '불가능한', '미달의', '부족한', '둔한'],
    tips({
      etymology: '라틴어 \'capere(잡다)\'와 \'able(할 수 있는)\'이 결합되어, 어떤 일을 손에 쥐고 처리할 능력이 있다는 뜻에서 유래했습니다.',
      visual: '복잡한 기계 장치를 막힘없이 능숙하게 다루는 전문 엔지니어의 손길을 상상해 보세요.',
      soundAlike: '단어의 앞부분이 \'할 수 있다\'는 뜻의 Can과 발음이 비슷하여 능력을 나타냄을 기억하기 쉽습니다.',
      context: '직장 상사가 부하 직원의 업무 처리 능력을 칭찬하거나, 특정 장비의 사양을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'competent는 실력이 갖춰진 상태를, incapable은 반대로 능력이 부족한 상태를 의미합니다.',
    }),
    {
      definition: 'having the power, skill, or resources required to perform a task or achieve an objective successfully',
      synonyms: ['competent', 'proficient', 'adept'],
      antonyms: ['incapable', 'incompetent', 'inept'],
      exampleSentences: [
        { en: 'She has proven herself to be a highly skilled and efficient manager over the years.', ko: '그녀는 수년간 자신이 매우 유능하고 효율적인 관리자임을 증명해 왔습니다.' },
        { en: 'The new software is fully functional and effective at handling large amounts of data.', ko: '새 소프트웨어는 대량의 데이터를 처리할 수 있는 충분한 성능을 갖추고 있습니다.' },
      ],
    }
  ),
  word('Capacity', '수용량', 5, 'noun',
    ['공백', '비어 있음', '부족', '결핍', '미달', '빈곤', '공허', '무능', '한계', '제한'],
    tips({
      etymology: '라틴어 \'capere(잡다, 담다)\'에서 유래하여, 무언가를 안에 담아낼 수 있는 크기를 의미합니다.',
      visual: '컵에 물이 가득 차 있는 모습이나, 경기장에 관중이 꽉 들어찬 장면을 상상해 보세요.',
      soundAlike: '컴퓨터나 스마트폰의 저장 \'용량\'을 확인할 때 자주 접하게 되는 단어입니다.',
      context: '그릇의 크기 같은 물리적 부피뿐만 아니라, 업무를 처리하거나 지식을 습득하는 개인의 역량을 표현할 때도 쓰입니다.',
      synonymAntonym: 'volume은 물리적 크기를 강조하고, inability는 무언가를 담거나 해낼 수 없는 상태를 뜻합니다.',
    }),
    {
      definition: 'The maximum amount that a space or container can hold, or the ability to perform a particular task.',
      synonyms: ['volume', 'dimensions', 'capability'],
      antonyms: ['emptiness', 'inability', 'limitation'],
      exampleSentences: [
        { en: 'The stadium has a seating limit of fifty thousand people.', ko: '그 경기장은 5만 명을 수용할 수 있는 좌석 용량을 갖추고 있습니다.' },
        { en: 'She has an incredible mental faculty for remembering complex mathematical formulas.', ko: '그녀는 복잡한 수학 공식을 기억하는 놀라운 지적 능력을 갖추고 있습니다.' },
      ],
    }
  ),
  word('Capture', '포착하다', 5, 'verb',
    ['놓치다', '해방하다', '풀어주다', '방치하다', '유실하다', '실패하다', '놓아주다', '해제하다', '독립시키다', '자유롭게하다'],
    tips({
      etymology: '라틴어 \'capere\'에서 유래되었으며 \'잡다\'라는 핵심 의미를 가지고 있습니다.',
      visual: '카메라 셔터를 눌러 찰나의 순간을 프레임 안에 가두는 장면을 상상하세요.',
      soundAlike: '컴퓨터 화면을 찍는 \'스크린 캡처\'를 떠올리면 기억하기 쉽습니다.',
      context: '주로 사진이 분위기를 담아내거나 군대가 적을 생포할 때 자주 쓰입니다.',
      synonymAntonym: 'seize와 catch는 잡는 행위이며, release는 반대로 놓아주는 것입니다.',
    }),
    {
      definition: 'to take into one\'s possession or control by force or skill',
      synonyms: ['seize', 'apprehend', 'trap'],
      antonyms: ['release', 'liberate', 'surrender'],
      exampleSentences: [
        { en: 'The photographer managed to capture the rare bird on film.', ko: '사진작가는 그 희귀한 새를 필름에 포착하는 데 성공했다.' },
        { en: 'The rebels were able to capture the enemy stronghold.', ko: '반군들은 적의 요새를 점령할 수 있었다.' },
      ],
    }
  ),
  word('Category', '범주', 5, 'noun',
    ['혼합', '종합', '개별', '통합', '일체', '무분류', '혼재', '복합', '다종', '융합'],
    tips({
      etymology: '그리스어 \'kategoria\'에서 유래했으며, 본래 \'공개적으로 선언된 분류\'나 \'속성\'을 뜻합니다.',
      visual: '서랍장에 라벨이 붙어 있어 물건들이 종류별로 정리된 칸들을 상상해 보세요.',
      soundAlike: '캐터고리 -> \'캐릭터(character)들이 고리\'처럼 같은 특성끼리 묶여 있는 모습.',
      context: '온라인 쇼핑몰의 상품 분류나 도서관의 장르 구분처럼 체계적인 집단이 필요할 때 쓰입니다.',
      synonymAntonym: 'class나 group은 유사한 묶음을 의미하며, whole은 나누어지지 않은 전체를 뜻합니다.',
    }),
    {
      definition: 'A specific group or division of people or things that share similar qualities or characteristics.',
      synonyms: ['classification', 'group', 'bracket'],
      antonyms: ['whole', 'entity', 'individual'],
      exampleSentences: [
        { en: 'This book falls into the category of historical fiction.', ko: '이 책은 역사 소설 범주에 속한다.' },
        { en: 'The contestants were divided into three age categories.', ko: '참가자들은 세 개의 연령 범주로 나뉘었다.' },
      ],
    }
  ),
];
