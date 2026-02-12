import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch45: VocabItem[] = [
  word('mediate', '중재하다', 6, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '라틴어 \'medius(중간)\'에서 유래하여 두 당사자 사이의 중간 지점에 서는 것을 의미합니다.',
      visual: '싸우고 있는 두 친구 사이에 한 사람이 들어가 양손을 뻗어 진정시키는 모습을 상상하세요.',
      soundAlike: '\'미디에이트\' 발음이 \'미디(중간)에 있다\'와 비슷하여 중간에서 화해를 돕는 상황을 연상시킵니다.',
      context: '노사 갈등이나 국가 간의 분쟁을 해결하기 위해 제3자가 개입할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'arbitrate는 공식적인 판결을 내리는 중재이며, 반대말인 aggravate는 상황을 더 악화시키는 것입니다.',
    }),
    {
      definition: 'to intervene between people in a dispute in order to bring about an agreement or reconciliation',
      synonyms: ['arbitrate', 'intercede', 'moderate'],
      antonyms: ['aggravate', 'exacerbate', 'provoke'],
      exampleSentences: [
        { en: 'The United Nations was called in to help the peace talks between the two warring nations.', ko: '유엔은 전쟁 중인 두 국가 사이의 평화 회담을 중재하기 위해 소집되었습니다.' },
        { en: 'A professional counselor was hired to resolve the conflict and improve communication within the team.', ko: '팀 내 갈등을 중재하고 소통을 개선하기 위해 전문 상담사가 고용되었습니다.' },
      ],
    }
  ),
  word('medical', '의학의', 7, 'adjective',
    ['간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한'],
    tips({
      etymology: '라틴어 \'medicus(의사)\'에서 유래하여 치료와 관련된 모든 것을 의미하게 되었습니다.',
      visual: '흰 가운을 입은 의사가 청진기를 들고 환자를 진찰하는 병원 풍경을 상상해 보세요.',
      soundAlike: '\'메디컬\' 드라마의 긴박한 수술실 장면을 떠올리면 기억하기 쉽습니다.',
      context: '건강 검진, 수술, 약 처방 등 병원에서 일어나는 모든 전문적인 활동에 쓰입니다.',
      synonymAntonym: '치료의(therapeutic)와 비슷하며, 비의료적인(nonmedical)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to the science or practice of medicine and the treatment of illness or injury',
      synonyms: ['therapeutic', 'clinical', 'medicinal'],
      antonyms: ['nonmedical', 'surgical', 'recreational'],
      exampleSentences: [
        { en: 'The patient required immediate medical attention after the accident.', ko: '환자는 사고 후 즉각적인 의학적 조치가 필요했습니다.' },
        { en: 'Advances in medical technology have significantly increased life expectancy.', ko: '의료 기술의 발전은 기대 수명을 크게 연장시켰습니다.' },
      ],
    }
  ),
  word('medicine', '약', 4, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '라틴어 \'medicus(의사)\'에서 유래하여 병을 고치는 물질이나 학문을 뜻하게 되었습니다.',
      visual: '알약이 가득 담긴 병이나 하얀 가운을 입은 의사가 처방전을 건네는 모습을 상상하세요.',
      soundAlike: '\'메디슨\' 발음이 \'매디(마디)\'마다 아픈 곳을 낫게 해주는 소리라고 연상해 보세요.',
      context: '병원에서 처방받는 알약뿐만 아니라 질병을 연구하는 의학 분야 전체를 통칭하기도 합니다.',
      synonymAntonym: '질병을 치료하는 drug와 유사하며, 병의 원인인 poison과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A substance used for treating illness or a science focused on health and healing.',
      synonyms: ['medication', 'remedy', 'cure'],
      antonyms: ['poison', 'toxin', 'disease'],
      exampleSentences: [
        { en: 'The doctor prescribed a specific type of liquid to help lower the fever.', ko: '의사는 열을 내리는 데 도움이 되는 특정 종류의 물약을 처방했습니다.' },
        { en: 'Modern science has made incredible progress in finding treatments for rare diseases.', ko: '현대 의학은 희귀 질병의 치료법을 찾는 데 있어 놀라운 발전을 이루었습니다.' },
      ],
    }
  ),
  word('medieval', '의', 10, 'adjective',
    ['현대적인', '미래의', '고대의', '원시적인', '산업의', '디지털의', '우주적인', '도시의', '전통적인', '혁신적인'],
    tips({
      etymology: '라틴어 \'medium(중간)\'과 \'aevum(시대)\'이 합쳐져 \'중간 시대\' 즉 중세를 의미하게 되었습니다.',
      visual: '갑옷을 입은 기사들이 성벽 위에서 전투를 벌이는 웅장한 영화 장면을 상상해 보세요.',
      soundAlike: '발음이 \'메디-벌\'과 유사한데, \'매디(마디)\'가 있는 \'벌\'집 모양의 성벽을 떠올려보세요.',
      context: '역사 책에서 5세기부터 15세기 사이의 유럽 역사나 문화를 설명할 때 주로 등장합니다.',
      synonymAntonym: '현대를 뜻하는 modern과 반대되는 개념으로, 아주 오래된 고딕 양식의 건물을 묘사할 때 쓰입니다.',
    }),
    {
      definition: 'Relating to the period of European history from about A.D. 500 to about 1500.',
      synonyms: ['gothic', 'feudal', 'archaic'],
      antonyms: ['modern', 'contemporary', 'current'],
      exampleSentences: [
        { en: 'The city is famous for its well-preserved castles and narrow streets from the middle ages.', ko: '그 도시는 잘 보존된 성들과 중세 시대의 좁은 거리들로 유명합니다.' },
        { en: 'Scholars study ancient manuscripts to understand the social hierarchy of that era.', ko: '학자들은 그 시대의 사회적 계급 구조를 이해하기 위해 고대 필사본들을 연구합니다.' },
      ],
    }
  ),
  word('medium', '중간', 5, 'noun',
    ['기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과'],
    tips({
      etymology: '라틴어 \'medius\'에서 유래하여 \'가운데\'라는 핵심 의미를 담고 있습니다.',
      visual: '스테이크 굽기 정도를 떠올릴 때 핏기가 약간 있는 중간 단계를 상상해 보세요.',
      soundAlike: '\'미디엄\' 발음이 \'미디(midi)\' 사이즈 옷처럼 중간 크기를 연상시킵니다.',
      context: '예술 분야에서는 그림을 그리는 \'재료\'나 정보를 전달하는 \'매체\'라는 뜻으로도 자주 쓰입니다.',
      synonymAntonym: '극단적인 양 끝(extreme) 사이의 적절한 중간 지점을 의미합니다.',
    }),
    {
      definition: 'A middle state or condition between two extremes, or a substance through which something is transmitted.',
      synonyms: ['average', 'intermediate', 'middle'],
      antonyms: ['extreme', 'utmost', 'ultimate'],
      exampleSentences: [
        { en: 'The artist chose oil paint as her primary artistic vehicle for this collection.', ko: '그 예술가는 이번 컬렉션을 위한 주요 예술적 매체로 유화 물감을 선택했습니다.' },
        { en: 'A happy balance must be found between working too hard and not working at all.', ko: '너무 열심히 일하는 것과 전혀 일하지 않는 것 사이에서 행복한 절충점을 찾아야 합니다.' },
      ],
    }
  ),
  word('meet', '-을', 3, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '고대 영어 \'metan\'에서 유래하여 누군가와 마주하거나 한 지점에서 합쳐지는 것을 의미합니다.',
      visual: '두 사람이 길을 걷다가 중간 지점에서 반갑게 손을 흔들며 마주치는 장면을 상상하세요.',
      soundAlike: '고기(meat)와 발음이 같으므로, 친구와 고기를 먹으러 \'만나러\' 간다고 기억하면 쉽습니다.',
      context: '주로 약속을 잡거나 우연히 누군가를 마주칠 때, 혹은 요구사항을 충족시킬 때 사용됩니다.',
      synonymAntonym: 'encounter는 우연한 만남을, avoid는 의도적인 피함을 나타내어 대조를 이룹니다.',
    }),
    {
      definition: 'to come into the presence or company of someone by chance or arrangement',
      synonyms: ['encounter', 'assemble', 'converge'],
      antonyms: ['avoid', 'separate', 'diverge'],
      exampleSentences: [
        { en: 'We should gather at the central station to discuss our travel plans for the weekend.', ko: '우리는 주말 여행 계획을 논의하기 위해 중앙역에서 만나야 합니다.' },
        { en: 'The two rivers join at the base of the mountain and flow toward the ocean.', ko: '두 강은 산기슭에서 만나 바다를 향해 흐릅니다.' },
      ],
    }
  ),
  word('melt', '녹다', 6, 'noun',
    ['얼다', '굳다', '증발하다', '응고하다', '섞이다', '부서지다', '타다', '흐르다', '팽창하다', '수축하다'],
    tips({
      etymology: '고대 영어 mĕltan에서 유래하여 \'액체가 되다\'라는 근본적인 의미를 담고 있습니다.',
      visual: '뜨거운 태양 아래서 아이스크림이 형체를 잃고 흘러내리는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'멜트\'인데, 초콜릿이 입안에서 \'매끄럽게\' 녹는 느낌과 연결하면 쉽습니다.',
      context: '주로 고체가 열을 받아 액체로 변하는 물리적 현상이나 마음이 누그러질 때 사용합니다.',
      synonymAntonym: 'thaw는 얼었던 것이 녹는 뉘앙스이며, freeze는 반대로 액체가 고체가 되는 과정입니다.',
    }),
    {
      definition: 'to become liquefied by heating or to cause a solid substance to change into a liquid state',
      synonyms: ['dissolve', 'thaw', 'liquefy'],
      antonyms: ['freeze', 'solidify', 'congeal'],
      exampleSentences: [
        { en: 'The thick snow began to disappear as the spring sun grew warmer.', ko: '봄볕이 따뜻해지면서 두꺼운 눈이 녹기 시작했습니다.' },
        { en: 'Add a small piece of butter to the hot pan and wait for it to turn liquid.', ko: '뜨거운 팬에 버터 한 조각을 넣고 그것이 녹을 때까지 기다리세요.' },
      ],
    }
  ),
  word('memory', '기억', 1, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '라틴어 memor(기억하는)에서 유래하여 마음속에 간직하고 있는 상태를 뜻합니다.',
      visual: '머릿속에 있는 거대한 도서관에서 옛날 앨범을 꺼내 보는 장면을 상상해 보세요.',
      soundAlike: '\'메모리\'는 컴퓨터의 기억 장치인 메모리 칩을 떠올리면 쉽게 외워집니다.',
      context: '어린 시절의 즐거웠던 순간이나 시험을 위해 외운 지식 등을 일컬을 때 주로 쓰입니다.',
      synonymAntonym: '회상을 뜻하는 recollection과 반대되는 망각인 oblivion을 함께 기억하세요.',
    }),
    {
      definition: 'the faculty by which the mind stores and recalls information',
      synonyms: ['recollection', 'remembrance', 'mind'],
      antonyms: ['forgetfulness', 'oblivion', 'amnesia'],
      exampleSentences: [
        { en: 'She has a vivid recollection of her first day at school.', ko: '그녀는 학교에 처음 갔던 날에 대한 생생한 기억을 가지고 있다.' },
        { en: 'The computer needs more storage to save every digital file.', ko: '그 컴퓨터는 모든 디지털 파일을 저장하기 위해 더 많은 기억 용량이 필요하다.' },
      ],
    }
  ),
  word('mental', '마음의', 7, 'adjective',
    ['육체적인', '물질적인', '외부의', '가시적인', '기계적인', '사회적인', '경제적인', '공식적인', '수동적인', '일시적인'],
    tips({
      etymology: '라틴어 \'mens(마음)\'에서 유래하여 사고, 지능, 감정 등 머릿속에서 일어나는 작용을 뜻합니다.',
      visual: '머리 옆에 번개 모양이나 구름 모양의 생각 풍선이 떠 있는 이미지를 상상해 보세요.',
      soundAlike: '한국어에서도 \'멘탈이 강하다\'라고 할 때 쓰는 그 단어이므로 정신력과 연결하면 쉽습니다.',
      context: '심리 상담이나 지적 능력, 혹은 스트레스와 관련된 상황에서 자주 쓰이는 형용사입니다.',
      synonymAntonym: '육체를 뜻하는 physical과 반대 개념으로 묶어서 기억하면 효과적입니다.',
    }),
    {
      definition: 'Relating to the mind or the process of thinking rather than the body.',
      synonyms: ['psychological', 'intellectual', 'cognitive'],
      antonyms: ['physical', 'bodily', 'corporeal'],
      exampleSentences: [
        { en: 'Regular exercise is beneficial for both physical and health well-being.', ko: '규칙적인 운동은 신체적 건강과 정신적 건강 모두에 유익합니다.' },
        { en: 'The math competition required intense concentration and agility.', ko: '그 수학 경시대회는 강렬한 집중력과 지적 민첩성을 요구했습니다.' },
      ],
    }
  ),
  word('mention', '말하다', 4, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'mentio\'에서 유래했으며, \'마음속에 떠올리게 하다\'라는 의미에서 \'말을 꺼내다\'로 발전했습니다.',
      visual: '대화 도중 손가락을 하나 까딱하며 \'아 참, 그리고...\'라고 새로운 화제를 꺼내는 모습을 상상하세요.',
      soundAlike: '발음이 \'면전\'과 비슷하죠? 상대방의 면전에서 어떤 사실을 툭 던지듯 말하는 상황을 떠올려 보세요.',
      context: '공식적인 발표보다는 일상적인 대화나 글에서 가볍게 어떤 사실을 거론할 때 주로 쓰입니다.',
      synonymAntonym: '단순히 말하는 state보다 구체적으로 지칭하는 refer와 비슷하며, 아예 입을 닫는 silence와 반대됩니다.',
    }),
    {
      definition: 'to speak or write about something briefly and without going into great detail',
      synonyms: ['refer', 'state', 'cite'],
      antonyms: ['ignore', 'conceal', 'suppress'],
      exampleSentences: [
        { en: 'The reporter forgot to cite the original source during the live broadcast.', ko: '기자는 생방송 중에 원래 출처를 거론하는 것을 잊었습니다.' },
        { en: 'Please do not bring up my previous mistakes during the family dinner.', ko: '가족 저녁 식사 자리에서 제 이전 실수들을 말하지 말아 주세요.' },
      ],
    }
  ),
  word('merchant', '상인', 5, 'noun',
    ['소비자', '제조업자', '공무원', '예술가', '과학자', '농부', '기술자', '학생', '환자', '승객'],
    tips({
      etymology: '라틴어 \'mercari(거래하다)\'에서 유래했으며, 시장을 뜻하는 market과 같은 뿌리를 가집니다.',
      visual: '중세 시대 유럽의 항구 도시에서 비단과 향신료를 가득 실은 배를 기다리는 상인을 상상해 보세요.',
      soundAlike: '\'머천트\' 발음이 \'멋진 트럭\'과 비슷하죠? 멋진 트럭에 물건을 싣고 파는 상인을 떠올려 보세요.',
      context: '주로 도매업이나 무역업에 종사하는 규모가 큰 상업 종사자를 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '물건을 파는 trader와 유의어이며, 물건을 사는 buyer와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person who buys and sells goods in large quantities, especially one who imports and exports goods.',
      synonyms: ['trader', 'dealer', 'vendor'],
      antonyms: ['customer', 'buyer', 'consumer'],
      exampleSentences: [
        { en: 'The wealthy merchant traveled across the ocean to trade silk and spices.', ko: '그 부유한 상인은 비단과 향신료를 거래하기 위해 대양을 건너 여행했습니다.' },
        { en: 'Local wine merchants are reporting a significant increase in sales this year.', ko: '지역 와인 상인들은 올해 매출이 크게 증가했다고 보고하고 있습니다.' },
      ],
    }
  ),
  word('mere', '단순한', 8, 'adjective',
    ['복잡한', '거대한', '중요한', '심각한', '다양한', '영구적인', '인위적인', '필수적인', '구체적인', '추상적인'],
    tips({
      etymology: '라틴어 merus에서 유래하여 \'섞이지 않은\', \'순수한\'이라는 의미에서 \'겨우 ~에 불과한\'이라는 뜻으로 발전했습니다.',
      visual: '거대한 산 앞에 서 있는 아주 작은 개미 한 마리를 떠올리며 \'겨우\'라는 느낌을 연결해 보세요.',
      soundAlike: '발음이 \'미어\'와 비슷하므로, 공간이 꽉 차지 않고 \'미미하게\' 비어 있는 상태를 상상해 보세요.',
      context: '어떤 대상의 크기나 가치가 생각보다 작거나 보잘것없음을 강조할 때 주로 사용됩니다.',
      synonymAntonym: 'pure와 같이 순수함을 뜻하는 단어와 어원이 같지만, 현대 영어에서는 trivial처럼 사소함을 강조하는 의미로 쓰입니다.',
    }),
    {
      definition: 'used to emphasize how small or insignificant someone or something is',
      synonyms: ['simple', 'trivial', 'insignificant'],
      antonyms: ['substantial', 'significant', 'immense'],
      exampleSentences: [
        { en: 'The cost of the repair was a mere ten dollars.', ko: '수리비는 단돈 10달러에 불과했습니다.' },
        { en: 'She was a mere child when she first started playing the piano professionally.', ko: '그녀가 처음 전문적으로 피아노를 치기 시작했을 때는 고작 어린아이에 불과했습니다.' },
      ],
    }
  ),
  word('merge', '합병하다', 9, 'verb',
    ['분리하다', '삭제하다', '거절하다', '발생하다', '보존하다', '무시하다', '연기하다', '조사하다', '복사하다', '중단하다'],
    tips({
      etymology: '라틴어 \'mergere(잠기다, 뛰어들다)\'에서 유래하여, 두 개가 하나로 깊숙이 섞여 들어가는 이미지를 담고 있습니다.',
      visual: '두 개의 물방울이 서로 닿아 커다란 하나의 물방울로 합쳐지는 모습을 상상해 보세요.',
      soundAlike: '\'머지?\'라고 묻는 상황에서, 흩어져 있던 정보들이 하나로 합쳐져 정체가 드러나는 상황을 연상해 보세요.',
      context: '기업 간의 인수합병(M&A)이나 도로에서 차선이 하나로 합쳐지는 구간에서 자주 사용됩니다.',
      synonymAntonym: 'combine과 유사하며, 반대로 쪼개지는 것은 separate나 split을 사용합니다.',
    }),
    {
      definition: 'To combine or blend two or more separate elements into a single unified entity.',
      synonyms: ['unite', 'combine', 'amalgamate'],
      antonyms: ['separate', 'divide', 'split'],
      exampleSentences: [
        { en: 'The two small tech companies decided to join forces and form a larger corporation.', ko: '두 작은 기술 회사는 힘을 합쳐 더 큰 법인을 설립하기 위해 합병하기로 결정했습니다.' },
        { en: 'Drivers should be careful when they enter the highway where multiple lanes become one.', ko: '운전자들은 여러 차선이 하나로 합쳐지는 고속도로에 진입할 때 주의해야 합니다.' },
      ],
    }
  ),
  word('merit', '장점', 6, 'noun',
    ['결점', '단점', '실수', '부족', '한계', '오류', '비난', '손실', '위험', '장애'],
    tips({
      etymology: '라틴어 \'meritum\'에서 유래하여 \'받을 가치가 있는 보상\'이라는 의미에서 훌륭한 자질로 발전했습니다.',
      visual: '상장이나 메달을 가득 들고 있는 우수한 학생의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'메리트\'와 같으며, 우리말에서도 \'이 일은 메리트가 있다\'라고 자주 쓰입니다.',
      context: '취업 면접이나 제품 리뷰에서 강점을 설명할 때 가장 흔히 사용되는 단어입니다.',
      synonymAntonym: '장점을 뜻하는 advantage와 반대되는 단점인 fault를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'the quality of being particularly good or worthy, especially so as to deserve praise or reward',
      synonyms: ['advantage', 'virtue', 'asset'],
      antonyms: ['fault', 'demerit', 'shortcoming'],
      exampleSentences: [
        { en: 'The committee evaluated each proposal based on its individual excellence and practical value.', ko: '위원회는 각 제안서를 개별적인 우수성과 실용적 가치에 따라 평가했습니다.' },
        { en: 'Her promotion was strictly based on her professional achievements rather than seniority.', ko: '그녀의 승진은 연공서열보다는 철저히 그녀의 전문적인 업적과 장점에 기반했습니다.' },
      ],
    }
  ),
  word('mess', '혼란', 7, 'noun',
    ['정돈', '질서', '청결', '규칙', '조직', '완성', '조화', '안정', '체계', '평화'],
    tips({
      etymology: '라틴어 \'missus(음식 한 접시)\'에서 유래하여, 원래는 식탁 위에 어질러진 음식물이나 지저분한 상태를 뜻하게 되었습니다.',
      visual: '방 바닥에 옷가지와 책들이 어지럽게 널려 있어 발 디딜 틈이 없는 방의 모습을 상상해 보세요.',
      soundAlike: '\'메스(mess)\'가 가득한 수술실 바닥에 물건들이 엉망으로 널브러져 있는 소동을 떠올려 보세요.',
      context: '주로 방이 지저분할 때뿐만 아니라, 상황이 꼬이거나 복잡한 문제에 처했을 때도 자주 쓰입니다.',
      synonymAntonym: '무질서한 clutter와 유사하며, 깔끔하게 정리된 상태인 order와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A state of confusion and lack of organization, or a place that is dirty and untidy.',
      synonyms: ['clutter', 'disorder', 'chaos'],
      antonyms: ['order', 'neatness', 'tidiness'],
      exampleSentences: [
        { en: 'The children left a huge pile of toys and paper in the living room after playing.', ko: '아이들이 놀고 난 뒤 거실에 장난감과 종이를 잔뜩 어질러 놓았다.' },
        { en: 'The sudden cancellation of the flight created a complete administrative nightmare for the airline.', ko: '갑작스러운 항공편 취소는 항공사에 완벽한 행정적 혼란을 야기했다.' },
      ],
    }
  ),
  word('metal', '금속', 4, 'noun',
    ['나무', '플라스틱', '유리', '종이', '가죽', '섬유', '고무', '액체', '기체', '먼지'],
    tips({
      etymology: '그리스어 \'metallon\'에서 유래했으며, 원래는 광산이나 채굴된 물질을 의미했습니다.',
      visual: '반짝이는 은색 표면과 차갑고 단단한 철근의 질감을 상상해 보세요.',
      soundAlike: '헤비메탈(Heavy Metal) 음악의 강렬하고 단단한 소리를 떠올리면 기억하기 쉽습니다.',
      context: '건축, 자동차 제조, 전자 기기 부품 등 단단한 재료가 필요한 모든 곳에 쓰입니다.',
      synonymAntonym: 'alloy나 steel 같은 구체적인 종류와 대조되는 단어이며, 부드러운 천이나 나무와는 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity.',
      synonyms: ['element', 'alloy', 'mineral'],
      antonyms: ['nonmetal', 'plastic', 'wood'],
      exampleSentences: [
        { en: 'Gold is a precious material used for making jewelry and electronic components.', ko: '금은 보석과 전자 부품을 만드는 데 사용되는 귀중한 금속입니다.' },
        { en: 'The bridge was constructed using heavy beams to ensure structural stability.', ko: '그 다리는 구조적 안정성을 보장하기 위해 무거운 금속 보를 사용하여 건설되었습니다.' },
      ],
    }
  ),
  word('method', '방법', 5, 'noun',
    ['기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과'],
    tips({
      etymology: '그리스어 \'meta(따라)\'와 \'hodos(길)\'가 합쳐져 \'길을 따라가는 방식\'이라는 의미에서 유래했습니다.',
      visual: '복잡한 기계를 조립할 때 옆에 놓인 체계적인 설명서나 순서도를 상상해 보세요.',
      soundAlike: '\'메서드\' 연기라는 말을 들어보셨나요? 배우가 캐릭터가 되는 자신만의 독특한 \'방법\'을 뜻합니다.',
      context: '과학 실험이나 요리 레시피처럼 정해진 절차를 따르는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'way나 system과 비슷하지만, chaos나 disorder와는 반대되는 체계적인 느낌을 줍니다.',
    }),
    {
      definition: 'A particular way of doing something, especially one that is systematic or established.',
      synonyms: ['procedure', 'technique', 'approach'],
      antonyms: ['disorder', 'chaos', 'confusion'],
      exampleSentences: [
        { en: 'Scientists developed a new system to purify water more efficiently.', ko: '과학자들은 물을 더 효율적으로 정화하기 위한 새로운 방법을 개발했습니다.' },
        { en: 'The traditional teaching style is still effective for many students.', ko: '전통적인 교육 방법은 여전히 많은 학생들에게 효과적입니다.' },
      ],
    }
  ),
  word('metropolitan', '수도권', 10, 'noun',
    ['시골의', '농촌의', '변두리', '지방자치', '국제적인', '전통적인', '고립된', '황폐한', '산간지역', '어촌마을'],
    tips({
      etymology: '그리스어 \'meter(어머니)\'와 \'polis(도시)\'가 합쳐져 \'모태가 되는 주요 도시\'라는 의미에서 유래했습니다.',
      visual: '서울의 빽빽한 빌딩 숲과 거미줄처럼 연결된 지하철 노선도를 상상해 보세요.',
      soundAlike: '\'메트로(Metro)\' 폴리스와 발음이 비슷하여 지하철이 다니는 대도시 지역을 떠올리면 쉽습니다.',
      context: '주로 인구 밀도가 높고 경제 활동이 집중된 거대 도시와 그 주변 위성 도시를 포함하는 지역을 가리킵니다.',
      synonymAntonym: 'urban과 유사하지만 더 넓은 권역을 의미하며, rural과는 정반대의 거주 환경을 나타냅니다.',
    }),
    {
      definition: 'Relating to or denoting a large city and its surrounding suburbs or densely populated areas.',
      synonyms: ['urban', 'cosmopolitan', 'municipal'],
      antonyms: ['rural', 'provincial', 'rustic'],
      exampleSentences: [
        { en: 'The government is planning to expand the public transportation network across the entire area.', ko: '정부는 전체 수도권 지역을 가로지르는 대중교통망을 확장할 계획입니다.' },
        { en: 'Living in a large area provides easy access to diverse cultural events and job opportunities.', ko: '대도시권에 사는 것은 다양한 문화 행사와 취업 기회에 대한 쉬운 접근성을 제공합니다.' },
      ],
    }
  ),
  word('microphone', '확성기', 6, 'noun',
    ['스피커', '헤드폰', '카메라', '전화기', '라디오', '텔레비전', '컴퓨터', '키보드', '마우스', '모니터'],
    tips({
      etymology: '작다는 뜻의 micro와 소리를 의미하는 phone이 합쳐져 작은 소리를 크게 전달하는 도구를 뜻합니다.',
      visual: '가수가 무대 위에서 손에 쥐고 노래를 부르거나 강연자가 단상 위에서 말을 하는 모습을 상상하세요.',
      soundAlike: '한국어 외래어인 \'마이크\'의 전체 형태라고 생각하면 발음을 기억하기 쉽습니다.',
      context: '공연장, 방송국, 회의실 등 소리를 증폭하거나 녹음해야 하는 모든 장소에서 필수적인 장비입니다.',
      synonymAntonym: '소리를 입력받는 mic와 반대로 소리를 출력하는 speaker를 대조해서 외우면 효과적입니다.',
    }),
    {
      definition: 'An instrument used to convert sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.',
      synonyms: ['mic', 'transmitter', 'amplifier'],
      antonyms: ['speaker', 'earphone', 'receiver'],
      exampleSentences: [
        { en: 'The lead singer grabbed the stand and began to belt out the lyrics.', ko: '리드 보컬은 스탠드를 잡고 가사를 열창하기 시작했습니다.' },
        { en: 'Please speak directly into the device so that everyone in the back of the room can hear you.', ko: '방 뒤쪽에 있는 모든 사람이 들을 수 있도록 장치에 대고 직접 말씀해 주세요.' },
      ],
    }
  ),
  word('microwave', '요리하다', 7, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '작은을 뜻하는 micro와 파동을 뜻하는 wave가 결합되어 전자기파로 음식을 데우는 원리를 담고 있습니다.',
      visual: '편의점에서 도시락을 넣고 버튼을 누른 뒤 회전판이 돌아가는 모습을 상상해 보세요.',
      soundAlike: '마이크로(micro)와 웨이브(wave)가 합쳐진 발음으로, 파도가 아주 작게 치는 소리를 연상해 보세요.',
      context: '바쁜 아침이나 남은 음식을 빠르게 데워 먹어야 할 때 주로 사용하는 동작입니다.',
      synonymAntonym: 'heat up과 유사하지만 전용 기기를 사용한다는 점이 다르며, freeze와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To cook or heat food quickly using an appliance that emits electromagnetic waves.',
      synonyms: ['zap', 'nuke', 'heat up'],
      antonyms: ['freeze', 'chill', 'cool'],
      exampleSentences: [
        { en: 'The office worker decided to microwave his leftovers for a quick lunch.', ko: '그 직장인은 빠른 점심 식사를 위해 남은 음식을 전자레인지에 데우기로 했다.' },
        { en: 'Please microwave the frozen burrito for two minutes until it is hot.', ko: '냉동 부리토가 뜨거워질 때까지 2분 동안 전자레인지에 돌려주세요.' },
      ],
    }
  ),
  word('middle', '한복판의', 2, 'adjective',
    ['가장자리의', '끝부분의', '외부의', '표면의', '상단의', '하단의', '구석의', '주변의', '먼', '극한의'],
    tips({
      etymology: '고대 영어 \'middel\'에서 유래했으며, \'중간\'이나 \'중심\'을 뜻하는 어근 \'mid\'를 포함하고 있습니다.',
      visual: '동그란 도넛의 정중앙 구멍이나 과녁의 정가운데 빨간 점을 상상해 보세요.',
      soundAlike: '발음이 \'미들\'과 비슷하므로, 축구 경기에서 공수를 연결하는 \'미드필더\'가 경기장 한복판에 있는 모습을 떠올리세요.',
      context: '세 남매 중 둘째 아이를 가리킬 때나 책의 중간 부분을 읽고 있을 때 자주 쓰입니다.',
      synonymAntonym: 'center와 유사하며, 양쪽 끝을 의미하는 edge나 end와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Equidistant from the extremes or limits of something; located in the center.',
      synonyms: ['central', 'intermediate', 'midway'],
      antonyms: ['outer', 'extreme', 'peripheral'],
      exampleSentences: [
        { en: 'The child sat in the seat between his two parents during the long flight.', ko: '그 아이는 긴 비행 동안 부모님 사이의 한복판 좌석에 앉았다.' },
        { en: 'A small fountain was placed in the very section of the garden to create a focal point.', ko: '정원 한복판 구역에 초점을 만들기 위해 작은 분수가 설치되었다.' },
      ],
    }
  ),
  word('might', '힘', 3, 'noun',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '고대 영어 \'miht\'에서 유래했으며, \'할 수 있다\'는 뜻의 may와 어원이 같아 강력한 능력을 뜻하게 되었습니다.',
      visual: '거대한 거인이 바위를 번쩍 들어 올리는 압도적인 완력을 상상해 보세요.',
      soundAlike: '발음이 \'마이트\'이므로, \'마이(My) 트(특)별한 힘\'이라고 연상하면 기억하기 쉽습니다.',
      context: '주로 국가의 군사력이나 개인의 엄청난 신체적, 정신적 에너지를 묘사할 때 쓰입니다.',
      synonymAntonym: '강함을 뜻하는 power와 유사하며, 연약함을 뜻하는 weakness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'great and impressive power or strength, especially of a nation or a large organization',
      synonyms: ['power', 'strength', 'force'],
      antonyms: ['weakness', 'frailty', 'impotence'],
      exampleSentences: [
        { en: 'The Roman Empire maintained its dominance through sheer military power and strategic planning.', ko: '로마 제국은 순전한 군사적 힘과 전략적 계획을 통해 지배력을 유지했습니다.' },
        { en: 'He pushed the heavy stone door with all his physical energy until it finally creaked open.', ko: '그는 무거운 돌문이 마침내 삐걱거리며 열릴 때까지 온 힘을 다해 밀었습니다.' },
      ],
    }
  ),
  word('migrate', '이주하다', 8, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '라틴어 migrare에서 유래했으며, 이는 \'한 장소에서 다른 장소로 이동하다\'라는 근본적인 의미를 담고 있습니다.',
      visual: '겨울을 나기 위해 수천 마리의 철새들이 V자 대형을 그리며 따뜻한 남쪽으로 날아가는 광경을 상상해 보세요.',
      soundAlike: '마이그레이트(migrate)의 \'마이\'를 \'멀리\'로 연상하여, 멀리 다른 곳으로 떠나는 모습을 기억하면 쉽습니다.',
      context: '동물의 계절적 이동뿐만 아니라, 현대에는 데이터나 시스템을 새로운 환경으로 옮길 때도 자주 사용되는 표현입니다.',
      synonymAntonym: '정착하여 머무르는 stay나 remain과는 반대로, 끊임없이 움직이고 이동하는 속성을 가진 단어입니다.',
    }),
    {
      definition: 'To move from one specific region or habitat to another, often according to the seasons or for better living conditions.',
      synonyms: ['relocate', 'emigrate', 'roam'],
      antonyms: ['remain', 'settle', 'stay'],
      exampleSentences: [
        { en: 'Many species of birds fly thousands of miles to warmer climates every winter.', ko: '많은 종의 새들이 매년 겨울 더 따뜻한 기후를 찾아 수천 마일을 날아 이동합니다.' },
        { en: 'The IT department planned to transfer all user data to the new cloud server over the weekend.', ko: 'IT 부서는 주말 동안 모든 사용자 데이터를 새로운 클라우드 서버로 이전할 계획을 세웠습니다.' },
      ],
    }
  ),
  word('mild', '온후한', 4, 'adjective',
    ['강렬한', '혹독한', '매운', '난폭한', '극심한', '날카로운', '엄격한', '사나운', '거친', '차가운'],
    tips({
      etymology: '고대 영어 \'milde\'에서 유래하여 부드럽고 자비로운 성품을 뜻하게 되었습니다.',
      visual: '자극적인 빨간 떡볶이 옆에 놓인 하얗고 순한 크림 파스타를 떠올려 보세요.',
      soundAlike: '\'마일드\' 커피 광고에서 자주 들리는 부드럽고 연한 느낌을 기억하세요.',
      context: '날씨가 춥지도 덥지도 않을 때나 성격이 유순한 사람을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'gentle과 유사하며, 날씨나 맛이 강할 때 쓰는 harsh와 반대됩니다.',
    }),
    {
      definition: 'not severe, serious, or harsh in nature or effect',
      synonyms: ['gentle', 'moderate', 'mellow'],
      antonyms: ['harsh', 'severe', 'intense'],
      exampleSentences: [
        { en: 'The doctor diagnosed him with a case of the flu that was relatively not severe.', ko: '의사는 그가 상대적으로 증상이 가벼운 독감에 걸렸다고 진단했다.' },
        { en: 'We enjoyed a walk in the park thanks to the unusually warm winter weather.', ko: '우리는 유난히 포근한 겨울 날씨 덕분에 공원 산책을 즐겼다.' },
      ],
    }
  ),
  word('military', '군의', 5, 'adjective',
    ['민간의', '상업적인', '평화로운', '개인적인', '학술적인', '예술적인', '종교적인', '자연적인', '정치적인', '사회적인'],
    tips({
      etymology: '라틴어 \'militaris\'에서 유래했으며, \'miles(군인)\'라는 단어에서 파생되어 군대와 관련된 성질을 나타냅니다.',
      visual: '각 잡힌 제복을 입고 절도 있게 행진하는 군인들의 대열을 상상해 보세요.',
      soundAlike: '\'밀리터리\' 룩이라는 패션 용어를 떠올리면 군복 스타일의 옷이 바로 연상됩니다.',
      context: '국가 방위, 전쟁 수행, 또는 군대 조직과 관련된 모든 상황에서 필수적으로 사용됩니다.',
      synonymAntonym: '군사를 뜻하는 martial과 유사하며, 민간인을 뜻하는 civilian과는 정반대의 개념입니다.',
    }),
    {
      definition: 'Relating to or characteristic of soldiers, armed forces, or land warfare.',
      synonyms: ['martial', 'soldierly', 'armed'],
      antonyms: ['civilian', 'peaceful', 'nonmilitary'],
      exampleSentences: [
        { en: 'The government decided to increase its spending on national defense and equipment.', ko: '정부는 국가 방위와 군 장비에 대한 지출을 늘리기로 결정했습니다.' },
        { en: 'All young men in the country are required to perform two years of service.', ko: '그 나라의 모든 젊은 남성들은 2년 동안 군 복무를 수행해야 합니다.' },
      ],
    }
  ),
  word('mill', '멧돌', 6, 'noun',
    ['공장', '바퀴', '절구', '곡물', '기계', '망치', '쟁기', '창고', '가마솥', '지렛대'],
    tips({
      etymology: '라틴어 \'mola(맷돌)\'에서 유래하여 무언가를 갈거나 빻는 도구라는 의미가 되었습니다.',
      visual: '커다란 돌 두 개가 맞물려 돌아가며 곡물을 가루로 만드는 전통적인 맷돌의 모습을 상상해 보세요.',
      soundAlike: '\'밀(mill)\'을 갈아서 가루로 만드는 기계라고 생각하면 발음과 용도를 쉽게 연결할 수 있습니다.',
      context: '주로 곡물을 가루로 만드는 도구나 제분소, 혹은 무언가를 잘게 부수는 기계를 지칭할 때 쓰입니다.',
      synonymAntonym: '무언가를 부수는 grinder와 유사하며, 원형 그대로 보존하는 preserver와는 반대됩니다.',
    }),
    {
      definition: 'A device or machine used for grinding grain or other solid substances into powder or meal.',
      synonyms: ['grinder', 'crusher', 'pulverizer'],
      antonyms: ['solidifier', 'preserver', 'constructor'],
      exampleSentences: [
        { en: 'The farmer used a stone device to grind wheat into flour for baking bread.', ko: '농부는 빵을 굽기 위해 밀을 가루로 갈려고 돌로 된 맷돌을 사용했습니다.' },
        { en: 'Ancient civilizations relied on manual grinding tools to process their daily harvest.', ko: '고대 문명은 매일 수확한 농작물을 가공하기 위해 수동 맷돌 도구에 의존했습니다.' },
      ],
    }
  ),
  word('million', '백만', 7, 'noun',
    ['천', '만', '십만', '천만', '억', '조', '숫자', '단위', '합계', '평균'],
    tips({
      etymology: '이탈리아어 \'mille(천)\'에 큰 것을 뜻하는 접미사 \'-one\'이 붙어 \'큰 천(천의 천 배)\'이라는 의미에서 유래했습니다.',
      visual: '숫자 1 뒤에 동그라미가 6개(1,000,000) 붙어 있는 거대한 돈다발 더미를 상상해 보세요.',
      soundAlike: '\'밀리언\' 발음이 \'밀려온\'과 비슷하죠? 돈이 백만 단위로 밀려오는 상상을 해보세요.',
      context: '인구 통계, 복권 당첨금, 혹은 아주 많은 수를 과장해서 표현할 때 자주 쓰입니다.',
      synonymAntonym: '매우 큰 수인 \'zillion\'과 비슷하지만, 아주 적은 양을 뜻하는 \'handful\'과는 반대됩니다.',
    }),
    {
      definition: 'The number equivalent to the product of a thousand and a thousand; 1,000,000.',
      synonyms: ['mega', 'multitude', 'abundance'],
      antonyms: ['zero', 'nothing', 'handful'],
      exampleSentences: [
        { en: 'The city has a population of over one unit of this large number.', ko: '그 도시의 인구는 백만 명이 넘습니다.' },
        { en: 'Winning the lottery would make her a very wealthy person instantly.', ko: '복권에 당첨되면 그녀는 즉시 백만장자가 될 것입니다.' },
      ],
    }
  ),
  word('mind', '마음', 1, 'noun',
    ['신체', '물질', '행동', '결과', '환경', '도구', '장소', '시간', '소리', '색깔'],
    tips({
      etymology: '고대 영어 \'gemynd\'에서 유래했으며 기억과 생각이라는 의미를 담고 있습니다.',
      visual: '머릿속에서 수많은 생각의 톱니바퀴가 돌아가는 모습을 상상해 보세요.',
      soundAlike: '\'마인드\'라고 발음하며, 우리가 흔히 말하는 \'마인드 컨트롤\'을 떠올리면 쉽습니다.',
      context: '단순한 심장(heart)보다는 지적인 사고와 의식적인 판단을 내리는 주체를 의미할 때 주로 쓰입니다.',
      synonymAntonym: 'intellect와 유사하며, 육체를 뜻하는 body와는 반대되는 개념으로 자주 쓰입니다.',
    }),
    {
      definition: 'The element of a person that enables them to be aware of the world and their experiences, to think, and to feel.',
      synonyms: ['intellect', 'psyche', 'consciousness'],
      antonyms: ['body', 'physicality', 'matter'],
      exampleSentences: [
        { en: 'A healthy body often leads to a healthy and peaceful state of thinking.', ko: '건강한 신체는 종종 건강하고 평화로운 사고 상태로 이어집니다.' },
        { en: 'Keep your goals in your thoughts to stay motivated throughout the day.', ko: '하루 종일 동기 부여를 유지하기 위해 목표를 마음속에 간직하세요.' },
      ],
    }
  ),
  word('miner', '광산업자', 4, 'noun',
    ['농부', '어부', '요리사', '목수', '운전사', '의사', '교사', '화가', '가수', '군인'],
    tips({
      etymology: '광산을 뜻하는 mine에 사람을 나타내는 접미사 -er이 붙어 땅을 파는 사람을 의미합니다.',
      visual: '어두운 동굴 속에서 안전모를 쓰고 곡괭이로 벽을 두드리는 사람의 모습을 상상해 보세요.',
      soundAlike: '나이가 어린 미성년자를 뜻하는 minor와 발음이 같으니 문맥으로 구분해야 합니다.',
      context: '골드러시 시대에 금을 캐기 위해 서부로 몰려든 사람들을 떠올리면 기억하기 쉽습니다.',
      synonymAntonym: '땅을 파는 digger와 비슷하지만, 광물을 전문적으로 캐는 사람이라는 점이 다릅니다.',
    }),
    {
      definition: 'A person who works underground in order to obtain coal, gold, diamonds, or other minerals.',
      synonyms: ['excavator', 'digger', 'prospector'],
      antonyms: ['surface worker', 'landowner', 'consumer'],
      exampleSentences: [
        { en: 'The brave individual spent ten hours a day working deep inside the coal pit.', ko: '그 용감한 사람은 석탄 구덩이 깊은 곳에서 하루에 10시간 동안 일했습니다.' },
        { en: 'Many people moved to California in 1849 hoping to strike it rich as a gold seeker.', ko: '많은 사람들이 금광 채굴자로 성공하여 부자가 되기를 희망하며 1849년에 캘리포니아로 이주했습니다.' },
      ],
    }
  ),
  word('mineral', '광물', 5, 'noun',
    ['식물', '동물', '박테리아', '대기', '액체', '기체', '유기물', '플라스틱', '합성물', '세포'],
    tips({
      etymology: '라틴어 \'minera\'에서 유래했으며, 이는 광산(mine)에서 캐낸 물질을 의미합니다.',
      visual: '동굴 벽에서 반짝이는 보석이나 바위 틈에 박힌 단단한 결정을 상상해 보세요.',
      soundAlike: '생수병 라벨에 적힌 \'미네랄 워터\'를 떠올리면 몸에 좋은 무기질 성분이 연상됩니다.',
      context: '지질학이나 영양학에서 주로 쓰이며, 생명체가 아닌 자연적으로 형성된 고체 물질을 가리킵니다.',
      synonymAntonym: '자연물인 ore와 유사하지만, 인공적인 합성물인 synthetic과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A naturally occurring inorganic solid substance with a definite chemical composition and crystalline structure.',
      synonyms: ['ore', 'resource', 'specimen'],
      antonyms: ['organism', 'animal', 'plant'],
      exampleSentences: [
        { en: 'The mountain is rich in iron and other valuable deposits.', ko: '그 산은 철과 다른 가치 있는 광물 매장량이 풍부합니다.' },
        { en: 'Calcium is an essential nutrient for maintaining strong bones and teeth.', ko: '칼슘은 튼튼한 뼈와 치아를 유지하는 데 필수적인 무기질입니다.' },
      ],
    }
  ),
  word('minimal', '의', 6, 'adjective',
    ['최대한의', '복잡한', '화려한', '거대한', '중요한', '명확한', '부적절한', '긍정적인', '기본적인', '대표적인'],
    tips({
      etymology: '라틴어 \'minimus\'에서 유래하여 \'가장 작은\'이라는 의미를 담고 있습니다.',
      visual: '방 안에 가구 하나 없이 침대만 덩그러니 놓여 있는 텅 빈 공간을 상상해 보세요.',
      soundAlike: '미니(mini)멀: 아주 작은 사이즈인 \'미니\'를 떠올리면 기억하기 쉽습니다.',
      context: '불필요한 장식을 모두 제거하고 본질만 남긴 디자인이나 예술 양식을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '가장 적은 양을 뜻하는 least와 비슷하며, 반대로 꽉 찬 느낌의 maximum과는 반대됩니다.',
    }),
    {
      definition: 'Characterized by the use of only the simplest and fewest elements or the smallest amount possible.',
      synonyms: ['slight', 'nominal', 'negligible'],
      antonyms: ['maximal', 'excessive', 'substantial'],
      exampleSentences: [
        { en: 'The damage to the car was so slight that it required only a small repair.', ko: '자동차의 손상은 아주 적어서 약간의 수리만 필요했습니다.' },
        { en: 'Modern interior design often focuses on clean lines and a very simple aesthetic.', ko: '현대적인 인테리어 디자인은 종종 깔끔한 선과 매우 단순한 미학에 집중합니다.' },
      ],
    }
  ),
  word('minimum', '최소', 7, 'noun',
    ['최대', '평균', '중간', '전체', '일부', '한계', '비율', '수량', '단위', '규모'],
    tips({
      etymology: '라틴어 \'minimus\'에서 유래하여 \'가장 작은\'이라는 의미를 담고 있습니다.',
      visual: '계단 맨 아래 칸에 서 있는 모습을 상상하며 가장 낮은 지점을 떠올려 보세요.',
      soundAlike: '미니(mini) 스커트나 미니카처럼 아주 작고 적은 것을 나타내는 소리와 연결하세요.',
      context: '법적 연령 제한이나 시험 합격 점수처럼 반드시 넘겨야 하는 가장 낮은 기준을 말할 때 쓰입니다.',
      synonymAntonym: '가장 적은 양을 뜻하는 least와 반대되는 개념인 maximum을 함께 기억하세요.',
    }),
    {
      definition: 'the smallest amount or number that is possible or allowed in a particular situation',
      synonyms: ['least', 'lowest', 'slightest'],
      antonyms: ['maximum', 'utmost', 'peak'],
      exampleSentences: [
        { en: 'The law requires employers to pay their workers a specific hourly rate as a legal base.', ko: '법은 고용주가 근로자에게 법정 기준으로서 특정 시간당 임금을 지급할 것을 요구합니다.' },
        { en: 'Applicants must have at least three years of experience to be considered for this position.', ko: '이 직책에 고려되려면 지원자는 적어도 3년의 경력을 가지고 있어야 합니다.' },
      ],
    }
  ),
  word('ministry', '장관', 4, 'noun',
    ['대통령', '의회', '법원', '시장', '도지사', '대사관', '위원회', '정당', '시민단체', '공무원'],
    tips({
      etymology: '라틴어 \'minister\'에서 유래했으며, 이는 \'봉사자\'나 \'조력자\'를 의미하여 국가를 위해 봉사하는 부처나 장관직을 뜻하게 되었습니다.',
      visual: '정부 청사 건물 앞에서 서류 가방을 들고 브리핑을 준비하는 고위 관료의 모습을 상상해 보세요.',
      soundAlike: '미니(mini)와 스트리(stry)로 나누어, 작은(mini) 일까지 세심하게 관리하는 정부 부처라고 기억하세요.',
      context: '주로 정부의 특정 행정 부서나 그 부서의 수장인 장관의 직무를 언급할 때 자주 쓰입니다.',
      synonymAntonym: 'department나 bureau와 유사한 행정 단위를 나타내며, 민간 부문을 뜻하는 private sector와는 대조됩니다.',
    }),
    {
      definition: 'A government department under the direction of a high-ranking official, or the period of time that official serves in office.',
      synonyms: ['department', 'bureau', 'cabinet'],
      antonyms: ['private sector', 'non-government', 'opposition'],
      exampleSentences: [
        { en: 'The newly appointed official will lead the health department starting next month.', ko: '새로 임명된 관료는 다음 달부터 보건부를 이끌게 될 것입니다.' },
        { en: 'Several changes were implemented during his time in the high-ranking government office.', ko: '그가 장관직에 있는 동안 여러 가지 변화가 시행되었습니다.' },
      ],
    }
  ),
  word('minor', '편의', 5, 'adjective',
    ['주요한', '거대한', '심각한', '결정적인', '필수적인', '우세한', '막대한', '최고의', '근본적인', '중대한'],
    tips({
      etymology: '라틴어 \'minus\'에서 유래하여 \'더 적은\' 또는 \'작은\'이라는 의미를 담고 있습니다.',
      visual: '거대한 산 옆에 놓인 아주 작은 조약돌 하나를 상상해 보세요.',
      soundAlike: '마이너 리그(Minor League)를 떠올리면 메이저보다 규모가 작고 덜 중요한 느낌이 납니다.',
      context: '심각한 부상이 아닌 살짝 긁힌 정도의 가벼운 상처를 표현할 때 자주 쓰입니다.',
      synonymAntonym: '중요도가 낮은 trivial과 반대되는 핵심적인 major를 함께 기억하세요.',
    }),
    {
      definition: 'lesser in importance, size, or seriousness compared to others of the same kind',
      synonyms: ['slight', 'secondary', 'insignificant'],
      antonyms: ['major', 'significant', 'crucial'],
      exampleSentences: [
        { en: 'The car sustained only some scratches after the small accident.', ko: '그 작은 사고 이후 자동차에는 약간의 가벼운 흠집만 생겼다.' },
        { en: 'We encountered a few issues during the software installation process.', ko: '소프트웨어 설치 과정에서 몇 가지 사소한 문제들이 발생했다.' },
      ],
    }
  ),
  word('minute', '분', 6, 'noun',
    ['시간', '초', '하루', '달력', '시계', '순간', '기간', '날짜', '계절', '연도'],
    tips({
      etymology: '라틴어 \'minutum\'에서 유래하여 \'작게 나뉜 부분\'이라는 의미를 담고 있습니다.',
      visual: '시계의 긴 바늘이 한 칸을 찰칵 소리 내며 넘어가는 모습을 상상해 보세요.',
      soundAlike: '\'미닛\'이라고 발음하며, 1분만 기다려달라는 \'Wait a minute\' 표현을 떠올려 보세요.',
      context: '시간의 단위뿐만 아니라 회의록을 뜻하는 \'minutes\'로도 자주 쓰입니다.',
      synonymAntonym: 'moment와 비슷하지만 더 구체적인 시간 단위이며, hour보다는 훨씬 짧은 시간입니다.',
    }),
    {
      definition: 'A unit of time equal to sixty seconds or one-sixtieth of an hour.',
      synonyms: ['moment', 'instant', 'jiffy'],
      antonyms: ['eternity', 'forever', 'age'],
      exampleSentences: [
        { en: 'The microwave will beep once the timer reaches the final sixty seconds.', ko: '타이머가 마지막 60초에 도달하면 전자레인지에서 신호음이 울릴 것입니다.' },
        { en: 'Please wait for a brief period while I finish this phone call.', ko: '전화를 마칠 때까지 잠시만 기다려 주시기 바랍니다.' },
      ],
    }
  ),
  word('miracle', '기적', 7, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '라틴어 \'mirari(놀라다)\'에서 유래하여, 인간의 능력을 넘어서는 놀라운 일을 뜻합니다.',
      visual: '불치병이 갑자기 완치되거나 마른 하늘에서 비가 내리는 마법 같은 장면을 상상해 보세요.',
      soundAlike: '\'미라클\'은 \'미래(mir)가 끌(cle)어당긴 행운\'처럼 발음하여 기억하면 쉽습니다.',
      context: '종교적 사건뿐만 아니라 스포츠에서의 역전승이나 과학적 성과에도 자주 쓰입니다.',
      synonymAntonym: 'wonder와 유사하며, 자연적인 법칙을 따르는 ordinary event와는 반대됩니다.',
    }),
    {
      definition: 'an extraordinary event that is not explicable by natural or scientific laws and is therefore attributed to a divine agency',
      synonyms: ['wonder', 'marvel', 'phenomenon'],
      antonyms: ['catastrophe', 'normality', 'standard'],
      exampleSentences: [
        { en: 'The doctors said her complete recovery was nothing short of a divine intervention.', ko: '의사들은 그녀의 완전한 회복이 신의 개입이나 다름없는 놀라운 일이라고 말했다.' },
        { en: 'The team needed a last-minute goal to stay in the tournament, and they got one.', ko: '그 팀은 토너먼트에 잔류하기 위해 마지막 순간의 행운이 필요했고, 실제로 그것을 얻어냈다.' },
      ],
    }
  ),
  word('mirror', '거울', 2, 'noun',
    ['유리', '창문', '안경', '렌즈', '그림', '사진', '벽면', '시계', '조명', '액자'],
    tips({
      etymology: '라틴어 \'mirari(놀라다, 바라보다)\'에서 유래하여 보는 도구라는 의미를 담고 있습니다.',
      visual: '아침에 화장실에서 자신의 얼굴을 비춰보는 반짝이는 유리판을 상상해 보세요.',
      soundAlike: '\'미러\' 발음이 \'미래\'와 비슷하죠? 거울 속의 내 모습이 곧 나의 미래라고 생각하며 외워보세요.',
      context: '자신의 외모를 확인할 때뿐만 아니라, 사회 현상을 그대로 반영한다는 비유적 표현으로도 자주 쓰입니다.',
      synonymAntonym: 'reflect와 비슷하게 비추는 성질을 가지며, 투명하게 통과시키는 glass와는 차이가 있습니다.',
    }),
    {
      definition: 'A polished surface, usually of glass with a silvery backing, that reflects light and shows images of objects in front of it.',
      synonyms: ['reflector', 'looking-glass', 'speculum'],
      antonyms: ['original', 'reality', 'transparency'],
      exampleSentences: [
        { en: 'She checked her hair in the hallway before leaving the house.', ko: '그녀는 집을 나서기 전 복도에 있는 거울로 머리 모양을 확인했다.' },
        { en: 'The calm surface of the lake acted as a perfect natural glass for the mountains.', ko: '호수의 잔잔한 표면은 산들을 비추는 완벽한 천연 거울 역할을 했다.' },
      ],
    }
  ),
  word('miss', '실수하다', 3, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '고대 영어 \'missan\'에서 유래하여 \'목표를 맞히지 못하다\'라는 의미에서 \'실수하다\'로 발전했습니다.',
      visual: '농구 선수가 골대를 향해 던진 공이 림을 맞고 튕겨 나가는 아쉬운 장면을 상상해 보세요.',
      soundAlike: '기차를 \'미스(miss)\'해서 놓치는 바람에 약속 시간에 늦는 실수를 저지른 상황을 떠올려 보세요.',
      context: '주로 기회를 놓치거나, 정답을 틀리거나, 해야 할 일을 깜빡했을 때 자주 사용됩니다.',
      synonymAntonym: '정답을 맞히는 hit이나 성공하는 succeed와 반대되는 개념으로 기억하면 쉽습니다.',
    }),
    {
      definition: 'to fail to hit, reach, catch, meet, or see something that was intended',
      synonyms: ['fail', 'omit', 'overlook'],
      antonyms: ['hit', 'catch', 'succeed'],
      exampleSentences: [
        { en: 'The archer was disappointed to fail his target by such a narrow margin.', ko: '궁수는 아주 근소한 차이로 과녁을 맞히지 못해 실망했습니다.' },
        { en: 'Be careful not to overlook any important details during the final exam.', ko: '기말고사 동안 중요한 세부 사항을 놓치는 실수를 하지 않도록 주의하세요.' },
      ],
    }
  ),
  word('missile', '미사일', 4, 'noun',
    ['방패', '레이더', '잠수함', '전투기', '장갑차', '포탄', '화살', '방어선', '군사기지', '핵연료'],
    tips({
      etymology: '라틴어 \'mittere(보내다)\'에서 유래하여 멀리 쏘아 보내는 무기를 뜻하게 되었습니다.',
      visual: '하늘을 가르며 목표물을 향해 빠르게 날아가는 뾰족한 로켓의 형상을 상상해 보세요.',
      soundAlike: '\'미실\'이 \'미사일\'을 쏜다처럼 한국어 이름과 연결하면 발음이 쉽게 기억됩니다.',
      context: '군사 훈련이나 우주 공학, 혹은 비유적으로 아주 빠른 물체를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '발사체인 projectile과 유사하며, 방어용 도구인 shield와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A weapon that is self-propelled or directed by remote control, designed to explode upon reaching a target.',
      synonyms: ['projectile', 'rocket', 'weapon'],
      antonyms: ['shield', 'defense', 'protection'],
      exampleSentences: [
        { en: 'The military successfully intercepted the incoming long-range projectile during the drill.', ko: '군은 훈련 도중 날아오는 장거리 미사일을 성공적으로 요격했습니다.' },
        { en: 'Engineers are developing a new guidance system to improve the accuracy of the flight path.', ko: '기술자들은 비행 경로의 정확도를 높이기 위해 새로운 미사일 유도 시스템을 개발하고 있습니다.' },
      ],
    }
  ),
  word('mission', '사명', 5, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '라틴어 \'mittere(보내다)\'에서 유래하여, 특정한 목적을 위해 보내진 임무나 사명을 뜻합니다.',
      visual: '우주선이 달을 향해 발사되는 장면이나 비밀 요원이 지령을 받는 모습을 상상해 보세요.',
      soundAlike: '\'미션\' 임파서블 영화를 떠올리면 불가능해 보이는 어려운 과업이나 사명이 바로 연상됩니다.',
      context: '단순한 숙제가 아니라 인생의 목표나 조직의 존재 이유를 설명할 때 주로 쓰이는 무거운 단어입니다.',
      synonymAntonym: 'assignment와 유사하지만 더 숭고한 느낌이며, 무목적성을 뜻하는 aimlessness와 대비됩니다.',
    }),
    {
      definition: 'An important assignment given to a person or group, often involving travel abroad or a specific long-term goal.',
      synonyms: ['assignment', 'vocation', 'objective'],
      antonyms: ['aimlessness', 'recreation', 'idleness'],
      exampleSentences: [
        { en: 'The charitable organization is dedicated to its primary task of providing clean water to remote villages.', ko: '그 자선 단체는 오지 마을에 깨끗한 물을 제공한다는 주요 사명에 전념하고 있습니다.' },
        { en: 'Astronauts successfully completed their dangerous journey to repair the damaged satellite in orbit.', ko: '우주비행사들은 궤도에 있는 손상된 위성을 수리하는 위험한 임무를 성공적으로 마쳤습니다.' },
      ],
    }
  ),
  word('mistake', '틀리다', 6, 'noun',
    ['성공', '정답', '계획', '의도', '규칙', '결과', '습관', '진실', '이해', '완성'],
    tips({
      etymology: '잘못을 뜻하는 mis-와 잡다라는 뜻의 take가 합쳐져 \'잘못 잡다\' 즉, 실수하다라는 의미가 되었습니다.',
      visual: '시험지 위에 커다란 빨간색 가위표(X)가 그려진 장면을 상상해 보세요.',
      soundAlike: '미스테이크(mistake)는 맛있는 \'스테이크\'를 굽다가 \'실수\'로 태워버린 상황을 떠올리면 쉽습니다.',
      context: '일상 대화에서 사과를 할 때 \'It was my mistake\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: 'error와 유의어 관계이며, 정답을 뜻하는 accuracy나 correction과 반대됩니다.',
    }),
    {
      definition: 'an action or judgment that is misguided or wrong',
      synonyms: ['error', 'blunder', 'oversight'],
      antonyms: ['accuracy', 'correction', 'perfection'],
      exampleSentences: [
        { en: 'Everyone makes a small error in judgment from time to time.', ko: '누구나 때때로 판단에서 작은 실수를 저지르곤 합니다.' },
        { en: 'Please check your essay carefully to ensure there is no spelling fault.', ko: '철자 실수가 없는지 확인하기 위해 에세이를 주의 깊게 검토하세요.' },
      ],
    }
  ),
  word('mix', '섞다', 7, 'noun',
    ['분리', '구분', '정렬', '배제', '단절', '고립', '추출', '여과', '정제', '파편'],
    tips({
      etymology: '라틴어 \'miscere\'에서 유래하여 여러 요소가 하나로 합쳐지는 과정을 의미합니다.',
      visual: '샐러드 볼 안에 다양한 채소와 드레싱이 한데 어우러져 뒤섞여 있는 모습을 상상하세요.',
      soundAlike: '믹서기(mixer)가 과일을 넣고 \'믹스\'하며 섞어주는 소리를 떠올리면 쉽습니다.',
      context: '음악이나 요리 분야에서 서로 다른 스타일이나 재료를 결합할 때 자주 사용됩니다.',
      synonymAntonym: 'blend와 결합하면 부드러운 조화를, separation과 대조하면 나뉘는 차이를 익힐 수 있습니다.',
    }),
    {
      definition: 'A combination of different substances, styles, or qualities that are blended together.',
      synonyms: ['blend', 'combination', 'mixture'],
      antonyms: ['separation', 'division', 'detachment'],
      exampleSentences: [
        { en: 'The DJ created an interesting blend of jazz and electronic beats in his latest set.', ko: '그 DJ는 최신 세트에서 재즈와 전자 비트의 흥미로운 조합을 만들어냈습니다.' },
        { en: 'Add a diverse variety of spices to the bowl to achieve the perfect flavor profile.', ko: '완벽한 맛을 내기 위해 그릇에 다양한 향신료 혼합물을 추가하세요.' },
      ],
    }
  ),
  word('mobile', '움직이기', 4, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '라틴어 \'mobilis\'에서 유래하여 \'움직이기 쉬운\'이라는 핵심 의미를 담고 있습니다.',
      visual: '천장에 매달려 바람에 따라 살랑살랑 움직이는 아기용 장난감을 떠올려 보세요.',
      soundAlike: '\'모빌\'이라는 발음은 한국어에서도 움직이는 장식물을 지칭할 때 그대로 쓰입니다.',
      context: '예술 분야에서는 조각의 한 형태로서 자유롭게 움직이는 구조물을 의미할 때 자주 쓰입니다.',
      synonymAntonym: '움직임을 뜻하는 motion과 유사하며, 고정된 상태인 stillness와는 반대됩니다.',
    }),
    {
      definition: 'A decorative structure that is suspended so as to turn freely in the air.',
      synonyms: ['sculpture', 'ornament', 'decoration'],
      antonyms: ['fixture', 'statue', 'monolith'],
      exampleSentences: [
        { en: 'The colorful figures on the baby\'s mobile spun slowly above the crib.', ko: '아기 침대 위의 알록달록한 모빌 인형들이 천천히 회전했습니다.' },
        { en: 'Alexander Calder is famous for inventing the modern kinetic mobile as an art form.', ko: '알렉산더 칼더는 예술 형태로서 현대적인 움직이는 모빌을 발명한 것으로 유명합니다.' },
      ],
    }
  ),
  word('mock', '조롱하다', 9, 'verb',
    ['칭찬하다', '존경하다', '격려하다', '보호하다', '승인하다', '위로하다', '협력하다', '순응하다', '감탄하다', '지지하다'],
    tips({
      etymology: '중세 프랑스어 \'mocquer\'에서 유래했으며, 누군가를 바보처럼 보이게 하려는 의도를 담고 있습니다.',
      visual: '상대방의 말투나 행동을 우스꽝스럽게 흉내 내며 비웃는 코미디언의 모습을 상상해 보세요.',
      soundAlike: '\'먹(mock)\'을 먹는 것처럼 상대방의 자존심을 갉아먹으며 비웃는 소리로 기억하세요.',
      context: '주로 진지한 상황에서 상대의 의견을 무시하거나 가볍게 여기며 비웃을 때 사용됩니다.',
      synonymAntonym: 'ridicule과 유사하며, 반대로 누군가를 높여주는 praise나 respect와는 대조적입니다.',
    }),
    {
      definition: 'to tease or laugh at someone or something in a scornful or contemptuous manner',
      synonyms: ['ridicule', 'deride', 'taunt'],
      antonyms: ['praise', 'flatter', 'compliment'],
      exampleSentences: [
        { en: 'The cruel students began to mimic his accent to show their contempt.', ko: '잔인한 학생들은 그를 경멸하기 위해 그의 말투를 흉내 내며 조롱하기 시작했습니다.' },
        { en: 'It is unkind to make fun of someone\'s efforts even if they fail.', ko: '누군가의 노력이 실패하더라도 그것을 비웃는 것은 불친절한 행동입니다.' },
      ],
    }
  ),
  word('mode', '방법', 5, 'noun',
    ['목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계'],
    tips({
      etymology: '라틴어 \'modus\'에서 유래하여 척도, 방식, 또는 일정한 틀을 의미하게 되었습니다.',
      visual: '비행기 모드나 야간 모드처럼 스마트폰 설정 화면에서 특정 상태를 선택하는 아이콘을 떠올려 보세요.',
      soundAlike: '유행을 뜻하는 \'모드\'와 발음이 같습니다. 유행도 하나의 생활 방식(mode)이라고 생각하면 쉽습니다.',
      context: '기계의 작동 방식이나 사람의 기분 상태, 또는 특정 작업을 수행하는 형식을 말할 때 주로 쓰입니다.',
      synonymAntonym: '방식을 뜻하는 method와 유사하며, 무질서나 혼란을 뜻하는 chaos와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A particular way in which something is done, experienced, or expressed.',
      synonyms: ['method', 'manner', 'fashion'],
      antonyms: ['disorganization', 'chaos', 'irregularity'],
      exampleSentences: [
        { en: 'Switching the device to energy-saving settings will extend the battery life significantly.', ko: '장치를 절전 방식으로 전환하면 배터리 수명을 크게 늘릴 수 있습니다.' },
        { en: 'Rail travel remains a popular form of transport for commuters in the city.', ko: '철도 여행은 도시 통근자들에게 여전히 인기 있는 이동 방식입니다.' },
      ],
    }
  ),
  word('moderate', '절제하는', 10, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '라틴어 \'moderari\'에서 유래하여 \'측정하다\' 혹은 \'한계를 두다\'라는 의미에서 \'조절하다\'로 발전했습니다.',
      visual: '뜨거운 물과 차가운 물을 섞어 미지근한 온도로 맞추는 수도꼭지 조절 레버를 상상해 보세요.',
      soundAlike: '\'마더(mother)가 에이트(ate)\' - 어머니가 아이의 식사량을 적당히 조절해서 먹게 하는 모습을 떠올려 보세요.',
      context: '토론회에서 사회자가 발언 시간을 제한하거나 갈등을 중재할 때 주로 사용되는 동사입니다.',
      synonymAntonym: '지나침을 막는 curb와 반대로 극단으로 치닫는 intensify를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'To make something less extreme, intense, or violent by controlling its limits.',
      synonyms: ['regulate', 'restrain', 'temper'],
      antonyms: ['aggravate', 'intensify', 'exacerbate'],
      exampleSentences: [
        { en: 'The chairman had to intervene to control the debate and keep the discussion civil.', ko: '의장은 토론을 조절하고 논의를 예의 바르게 유지하기 위해 개입해야 했습니다.' },
        { en: 'You should try to limit your intake of caffeine if you want to sleep better at night.', ko: '밤에 잠을 더 잘 자고 싶다면 카페인 섭취량을 조절하려고 노력해야 합니다.' },
      ],
    }
  ),
  word('modern', '현대의', 6, 'adjective',
    ['고대의', '전통적인', '구식의', '원시적인', '역사적인', '낡은', '중세의', '복고풍의', '오래된', '유물적인'],
    tips({
      etymology: '라틴어 \'modo\'에서 유래했으며, 이는 \'바로 지금\'이라는 뜻을 담고 있습니다.',
      visual: '유리벽으로 된 세련된 고층 빌딩이나 최신형 스마트폰의 매끄러운 디자인을 상상해 보세요.',
      soundAlike: '\'모던\'이라는 발음은 한국어에서도 \'모던하다\'라고 자주 쓰여 익숙하게 느껴집니다.',
      context: '건축, 예술, 기술 분야에서 과거의 방식과 대비되는 최신 스타일을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'contemporary와는 동시대라는 의미로 통하며, ancient와는 정반대의 시점을 나타냅니다.',
    }),
    {
      definition: 'relating to the present or recent times as opposed to the remote past',
      synonyms: ['contemporary', 'current', 'present-day'],
      antonyms: ['ancient', 'old-fashioned', 'traditional'],
      exampleSentences: [
        { en: 'The museum features a stunning collection of contemporary art and furniture.', ko: '그 박물관은 현대 미술과 가구의 멋진 소장품들을 전시하고 있습니다.' },
        { en: 'Many people prefer living in apartments with up-to-date amenities and technology.', ko: '많은 사람들이 최신 편의 시설과 기술을 갖춘 아파트에 사는 것을 선호합니다.' },
      ],
    }
  ),
  word('modest', '겸손한', 8, 'adjective',
    ['오만한', '화려한', '거대한', '사치스러운', '이기적인', '무례한', '적극적인', '부유한', '유명한', '복잡한'],
    tips({
      etymology: '라틴어 \'modestus\'에서 유래했으며, 이는 \'적절한 척도나 한도를 지키는\'이라는 의미를 담고 있습니다.',
      visual: '비싼 스포츠카를 탈 수 있음에도 작고 실용적인 경차를 운전하며 미소 짓는 사람을 상상해 보세요.',
      soundAlike: '\'모두 다 이스트(modest)\'라고 발음하면, 빵을 부풀리는 이스트처럼 자신을 부풀리지 않는 겸손함이 연상됩니다.',
      context: '자신의 성취를 자랑하지 않을 때뿐만 아니라, 집의 크기나 옷차림이 수수하고 소박할 때도 자주 쓰입니다.',
      synonymAntonym: '자신을 낮추는 humble과 유의어이며, 자신을 과시하는 arrogant와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Not talking much about one\'s own abilities or possessions, or being relatively moderate in size or amount.',
      synonyms: ['humble', 'unpretentious', 'moderate'],
      antonyms: ['arrogant', 'boastful', 'extravagant'],
      exampleSentences: [
        { en: 'Despite winning the prestigious award, the scientist remained incredibly down-to-earth and redirected the praise to her team.', ko: '권위 있는 상을 받았음에도 불구하고, 그 과학자는 매우 겸손함을 유지하며 공로를 팀원들에게 돌렸습니다.' },
        { en: 'They live in a small, functional apartment that reflects their preference for a simple lifestyle.', ko: '그들은 단순한 생활 방식을 선호하는 성향이 반영된 작고 실용적인 아파트에 삽니다.' },
      ],
    }
  ),
  word('modify', '변경하다', 9, 'verb',
    ['유지하다', '보존하다', '파괴하다', '방치하다', '고정하다', '설립하다', '거절하다', '무시하다', '복제하다', '중단하다'],
    tips({
      etymology: '라틴어 \'modus(척도, 방법)\'에서 유래하여, 사물의 정도나 형태를 적절하게 맞추거나 바꾼다는 의미를 가집니다.',
      visual: '이미 완성된 설계도 위에 빨간 펜으로 선을 긋고 수치를 고쳐 쓰는 건축가의 모습을 상상해 보세요.',
      soundAlike: '\'마디파이\'라고 발음되는데, 옷의 마디마디를 내 몸에 맞게 \'바꾼다\'고 연상하면 쉽습니다.',
      context: '주로 계획, 디자인, 소프트웨어 코드 등을 더 낫게 만들기 위해 부분적으로 수정할 때 자주 쓰입니다.',
      synonymAntonym: '단순히 바꾸는 것은 alter, 개선을 위해 바꾸는 것은 adapt이며, 그대로 두는 것은 preserve입니다.',
    }),
    {
      definition: 'to make partial or minor changes to something, typically to improve it or make it less extreme',
      synonyms: ['alter', 'adjust', 'adapt'],
      antonyms: ['preserve', 'maintain', 'stagnate'],
      exampleSentences: [
        { en: 'The software engineers had to change the source code to improve the system performance.', ko: '소프트웨어 엔지니어들은 시스템 성능을 향상시키기 위해 소스 코드를 수정해야 했습니다.' },
        { en: 'You may need to adjust your diet based on the results of the medical checkup.', ko: '건강 검진 결과에 따라 식단을 조절해야 할 수도 있습니다.' },
      ],
    }
  ),
  word('moisture', '습기', 7, 'noun',
    ['건조', '먼지', '열기', '냉기', '압력', '소음', '진동', '그늘', '바람', '공기'],
    tips({
      etymology: '라틴어 \'musteus(신선한, 즙이 많은)\'에서 유래하여 물기가 남아있는 상태를 뜻하게 되었습니다.',
      visual: '욕실 거울에 뿌옇게 서린 김이나 아침 이슬이 맺힌 나뭇잎을 상상해 보세요.',
      soundAlike: '화장품 \'모이스처라이저\'를 떠올리면 피부에 수분을 공급하는 이미지가 쉽게 연결됩니다.',
      context: '주로 식물이 자라는 토양의 상태나 실내 공기의 눅눅함을 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'humidity와 유사하지만, moisture는 특정 물체 표면의 액체를 더 강조하며 dryness와는 반대됩니다.',
    }),
    {
      definition: 'A small amount of liquid, such as water, that makes something damp or wet.',
      synonyms: ['humidity', 'dampness', 'wetness'],
      antonyms: ['dryness', 'aridity', 'dehydration'],
      exampleSentences: [
        { en: 'Plants absorb moisture from the soil through their roots to survive.', ko: '식물은 생존하기 위해 뿌리를 통해 토양으로부터 습기를 흡수합니다.' },
        { en: 'The morning mist left a thin layer of moisture on the car windshield.', ko: '아침 안개로 인해 자동차 앞 유리에 얇은 습기 층이 생겼습니다.' },
      ],
    }
  ),
];
