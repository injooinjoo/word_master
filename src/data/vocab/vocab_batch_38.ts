import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch38: VocabItem[] = [
  word('haste', '급함', 4, 'noun',
    ['지연', '여유', '인내', '신중', '평온', '정지', '게으름', '망설임', '침착', '조심'],
    tips({
      etymology: '고대 프랑스어 \'haste\'에서 유래하여, 무언가를 서두르거나 재촉하는 강한 움직임을 뜻합니다.',
      visual: '기차를 놓치지 않으려고 넥타이를 휘날리며 승강장으로 전력 질주하는 직장인의 모습을 상상해 보세요.',
      soundAlike: '\'헤이스트\'라고 발음되는데, 게임에서 캐릭터의 이동 속도를 빠르게 해주는 마법 기술 이름을 떠올리면 쉽습니다.',
      context: '주로 \'In haste\'라는 표현으로 쓰여, 충분히 생각하지 않고 급하게 행동하다가 실수하는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'speed와 유사하지만 훨씬 더 조급한 느낌이며, 반대말인 leisure는 느긋하고 평화로운 상태를 뜻합니다.',
    }),
    {
      definition: 'excessive speed or urgency of movement or action, often resulting in mistakes or carelessness',
      synonyms: ['hurry', 'rush', 'celerity'],
      antonyms: ['slowness', 'delay', 'leisure'],
      exampleSentences: [
        { en: 'The letter was written in such great speed that many words were nearly illegible.', ko: '편지가 너무 급하게 쓰여서 많은 단어들을 거의 알아볼 수 없었다.' },
        { en: 'Making decisions with unnecessary urgency often leads to regrettable errors in judgment.', ko: '불필요하게 서둘러 결정을 내리는 것은 종종 후회스러운 판단 착오로 이어진다.' },
      ],
    }
  ),
  word('hate', '미워하다', 1, 'verb',
    ['좋아하다', '사랑하다', '존경하다', '이해하다', '용서하다', '배려하다', '칭찬하다', '기다리다', '기억하다', '동의하다'],
    tips({
      etymology: '고대 영어 \'hatian\'에서 유래되었으며, 누군가를 적대시하거나 강하게 싫어하는 감정을 나타냅니다.',
      visual: '싫어하는 음식을 보고 얼굴을 찌푸리며 고개를 돌리는 모습을 상상해 보세요.',
      soundAlike: '\'헤이트\' 발음이 무언가를 \'해치\'고 싶을 만큼 강한 거부감을 느낀다고 연상해 보세요.',
      context: '단순히 싫어하는 것보다 훨씬 강한 감정적 혐오를 표현할 때 주로 사용됩니다.',
      synonymAntonym: 'love(사랑하다)와는 정반대의 극단적인 감정이며, dislike보다 훨씬 강도가 높습니다.',
    }),
    {
      definition: 'To feel intense hostility or extreme aversion toward someone or something.',
      synonyms: ['detest', 'loathe', 'abhor'],
      antonyms: ['love', 'adore', 'cherish'],
      exampleSentences: [
        { en: 'Many people strongly dislike the cold weather and absolutely despise the icy wind.', ko: '많은 사람들이 추운 날씨를 아주 싫어하고 차가운 바람을 정말 증오합니다.' },
        { en: 'The two rival nations have continued to harbor deep animosity toward each other for decades.', ko: '두 경쟁 국가는 수십 년 동안 서로에 대해 깊은 증오심을 품어왔습니다.' },
      ],
    }
  ),
  word('haunt', '(유령이) 출몰하다', 8, 'verb',
    ['보호하다', '치료하다', '위로하다', '격려하다', '안심시키다', '축하하다', '응원하다', '감싸다', '도와주다', '구해주다'],
    tips({
      etymology: '프랑스어 \'hanter\'에서 유래하여 특정 장소에 습관적으로 나타나거나 머문다는 의미를 담고 있습니다.',
      visual: '오래된 저택의 어두운 복도에서 유령이 떠다니며 반복적으로 나타나는 모습을 상상해 보세요.',
      soundAlike: '\'헌트(hunt)\'와 발음이 비슷한데, 유령이 사람을 사냥하듯 쫓아다니는 느낌으로 기억하세요.',
      context: '유령이 출몰하는 장소를 묘사하거나, 나쁜 기억이 마음에서 떠나지 않을 때 비유적으로도 자주 사용됩니다.',
      synonymAntonym: '계속 괴롭히다를 뜻하는 torment와 비슷하며, 편안하게 해주다를 뜻하는 comfort와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to appear regularly in a place, especially as a ghost; to cause repeated worry or distress',
      synonyms: ['plague', 'torment', 'trouble'],
      antonyms: ['comfort', 'soothe', 'reassure'],
      exampleSentences: [
        { en: 'Locals believe that ghosts haunt the abandoned mansion on the hilltop.', ko: '지역 주민들은 언덕 위의 버려진 저택에 유령이 출몰한다고 믿습니다.' },
        { en: 'Memories of the accident continued to haunt her for many years.', ko: '사고의 기억이 수년 동안 계속해서 그녀를 따라다녔습니다.' },
      ],
    }
  ),
  word('have', '가지다', 2, 'verb',
    ['잃다', '포기하다', '버리다', '놓치다', '없다', '비우다', '반환하다', '취소하다', '거절하다', '중단하다'],
    tips({
      etymology: '고대 영어 \'habban\'에서 유래하여 소유하거나 붙잡고 있는 상태를 나타냅니다.',
      visual: '손에 책이나 열쇠를 꼭 쥐고 있어서 내 소유임이 분명한 장면을 상상해 보세요.',
      soundAlike: '\'해브(have)\'는 무언가를 손에 \'확\' 쥐고 있다고 연상하면 기억하기 쉽습니다.',
      context: '물건, 시간, 기회처럼 내가 소유하거나 보유하고 있는 상태를 말할 때 가장 자주 사용됩니다.',
      synonymAntonym: 'possess와 유사하며, lose와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to own, hold, or possess something',
      synonyms: ['possess', 'own', 'hold'],
      antonyms: ['lack', 'lose', 'forfeit'],
      exampleSentences: [
        { en: 'I have a new notebook for studying English.', ko: '나는 영어 공부를 위한 새 공책을 가지고 있다.' },
        { en: 'Do you have enough time to finish this task?', ko: '이 일을 끝낼 충분한 시간이 있나요?' },
      ],
    }
  ),
  word('hazard', '위험', 5, 'noun',
    ['안전', '보호', '혜택', '안정', '보장', '편리', '행운', '조화', '질서', '성공'],
    tips({
      etymology: '중세 프랑스어 \'hasard\'에서 유래했으며, 원래는 주사위 게임에서 운에 맡기는 위험한 상황을 뜻했습니다.',
      visual: '공사 현장에 세워진 노란색 \'Danger\' 표지판이나 바닥에 흩어진 날카로운 유리 조각을 상상해 보세요.',
      soundAlike: '\'해저드\'라고 발음하며, 골프에서 공이 빠지면 안 되는 물이나 벙커 같은 위험 구역을 떠올리면 쉽습니다.',
      context: '산업 현장이나 일상생활에서 사고를 유발할 수 있는 잠재적인 위협 요소를 가리킬 때 주로 사용됩니다.',
      synonymAntonym: '위험을 뜻하는 danger와 비슷하지만, hazard는 주로 사고의 원인이 되는 \'위험 요소\' 자체에 집중합니다.',
    }),
    {
      definition: 'A potential source of danger, harm, or adverse health effects on a person or thing.',
      synonyms: ['danger', 'peril', 'risk'],
      antonyms: ['safety', 'protection', 'security'],
      exampleSentences: [
        { en: 'Icy roads are a major driving hazard during the winter months.', ko: '겨울철에 빙판길은 주요한 운전 위험 요소입니다.' },
        { en: 'The broken stairs in the hallway pose a serious safety hazard to the residents.', ko: '복도의 부서진 계단은 거주자들에게 심각한 안전 위협이 됩니다.' },
      ],
    }
  ),
  word('he', '그', 3, 'pronoun',
    ['그녀', '그들', '우리', '너', '나', '그것', '누구', '모두', '아무도', '자기'],
    tips({
      etymology: '고대 영어 \'hē\'에서 유래한 대명사로, 남성 단수 주어를 가리키는 가장 기본적인 단어입니다.',
      visual: '멋진 신사가 모자를 벗으며 인사하는 모습을 상상하며 남성 한 명을 떠올려 보세요.',
      soundAlike: '웃음소리 \'히히\'와 비슷하게 발음되니, 즐겁게 웃고 있는 남자를 연상하면 쉽습니다.',
      context: '문장에서 이미 언급된 남성이나 소년을 다시 지칭할 때 반복을 피하기 위해 사용합니다.',
      synonymAntonym: '남성을 뜻하는 male과 비슷하지만, 반대되는 여성은 she라고 부릅니다.',
    }),
    {
      definition: 'The male person or animal that has already been mentioned or is easily identified.',
      synonyms: ['himself', 'the man', 'the boy'],
      antonyms: ['she', 'her', 'herself'],
      exampleSentences: [
        { en: 'My brother is a doctor and works at the city hospital.', ko: '나의 형은 의사이며 시립 병원에서 일한다.' },
        { en: 'John promised that would arrive at the party before midnight.', ko: '존은 자정 전에 파티에 도착하겠다고 약속했다.' },
      ],
    }
  ),
  word('headache', '두통', 1, 'noun',
    ['복통', '치통', '요통', '감기', '기침', '발열', '근육통', '현기증', '메스꺼움', '불면증'],
    tips({
      etymology: '머리를 뜻하는 head와 지속적인 통증을 뜻하는 ache가 결합되어 만들어진 단어입니다.',
      visual: '관자놀이를 짚으며 인상을 찌푸리고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '헤드(머리)가 에이크(아프다)라고 발음하며 고통을 호소하는 소리를 연상하세요.',
      context: '주로 신체적 통증을 말할 때 쓰이지만, 골치 아픈 문제나 상황을 비유할 때도 자주 쓰입니다.',
      synonymAntonym: 'migraine은 심한 편두통을 뜻하며, 반대로 고통이 없는 상태는 comfort라고 할 수 있습니다.',
    }),
    {
      definition: 'a continuous pain in the upper part of the body containing the brain',
      synonyms: ['migraine', 'neuralgia', 'throbbing'],
      antonyms: ['comfort', 'relief', 'wellness'],
      exampleSentences: [
        { en: 'The loud music gave me a terrible pressure in my skull.', ko: '시끄러운 음악 때문에 머리가 너무 아팠어요.' },
        { en: 'Finding a parking spot in this crowded city is a real nuisance.', ko: '이 붐비는 도시에서 주차 공간을 찾는 것은 정말 골칫거리입니다.' },
      ],
    }
  ),
  word('headquarters', '본부', 9, 'noun',
    ['지점', '창고', '공장', '매장', '사무실', '연구소', '기숙사', '휴게실', '주차장', '전시장'],
    tips({
      etymology: '머리를 뜻하는 head와 주거지를 뜻하는 quarters가 합쳐져 조직의 중심지를 의미합니다.',
      visual: '거대한 빌딩 꼭대기에 회사 로고가 크게 박혀 있고 모든 명령이 내려오는 장면을 상상하세요.',
      soundAlike: '헤드쿼터스 - \'머리(head)가 있는 숙소(quarters)\'라고 소리 내어 읽으며 중심지를 연상하세요.',
      context: '기업의 경영진이 모여 의사결정을 내리는 중추적인 장소를 말할 때 주로 쓰입니다.',
      synonymAntonym: '중심지인 base와 반대되는 개념인 지사(branch)를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'The main office or central location from which an organization is controlled and directed.',
      synonyms: ['base', 'main office', 'center'],
      antonyms: ['branch', 'outpost', 'subsidiary'],
      exampleSentences: [
        { en: 'The multinational corporation decided to move its global base of operations to Seoul.', ko: '그 다국적 기업은 글로벌 운영 본부를 서울로 이전하기로 결정했습니다.' },
        { en: 'Police officers were ordered to report back to the central station for a briefing.', ko: '경찰관들은 브리핑을 위해 본부로 복귀하라는 명령을 받았습니다.' },
      ],
    }
  ),
  word('heal', '고치다', 6, 'verb',
    ['파괴하다', '상처입히다', '무시하다', '거절하다', '지연시키다', '낭비하다', '공격하다', '방해하다', '오염시키다', '분리하다'],
    tips({
      etymology: '고대 영어 \'hælan\'에서 유래했으며, \'전체(whole)\'를 의미하는 단어와 어원이 같아 몸을 다시 온전하게 만든다는 뜻을 가집니다.',
      visual: '깊게 베인 상처 위로 새살이 돋아나며 매끄럽게 합쳐지는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'heel(발뒤꿈치)\'과 같으므로, 다친 발뒤꿈치가 낫는 상황을 연상하면 기억하기 쉽습니다.',
      context: '신체적인 부상뿐만 아니라 마음의 상처나 갈등 관계가 회복될 때도 자주 쓰입니다.',
      synonymAntonym: 'cure는 질병을 고치는 것에 가깝고, 반대말인 injure는 해를 입히는 상황에 쓰입니다.',
    }),
    {
      definition: 'to become healthy again or to make a person or a wound healthy after an injury or illness',
      synonyms: ['cure', 'remedy', 'recover'],
      antonyms: ['harm', 'injure', 'damage'],
      exampleSentences: [
        { en: 'The doctor assured the patient that the broken bone would take several weeks to mend completely.', ko: '의사는 환자에게 부러진 뼈가 완전히 낫는 데 몇 주가 걸릴 것이라고 안심시켰다.' },
        { en: 'Time and sincere apologies often help to mend a broken friendship after a long argument.', ko: '시간과 진심 어린 사과는 긴 다툼 끝에 깨진 우정을 회복하는 데 종종 도움이 된다.' },
      ],
    }
  ),
  word('health', '건강', 7, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '고대 영어 \'hælth\'에서 유래했으며, \'온전한\' 또는 \'전체\'를 뜻하는 \'whole\'과 어원이 같습니다. 몸이 온전한 상태가 곧 건강입니다.',
      visual: '신선한 과일 바구니와 운동화를 신고 활기차게 공원을 달리는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'헬스장\'할 때의 \'헬스\'입니다. 한국어 외래어로도 자주 쓰여 발음이 익숙할 것입니다.',
      context: '신체적인 상태뿐만 아니라 정신적인 안녕이나 경제적 건전성을 나타낼 때도 폭넓게 사용됩니다.',
      synonymAntonym: 'wellness와 유사하며, 질병을 뜻하는 sickness나 illness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the state of being free from illness or injury, encompassing physical, mental, and social well-being',
      synonyms: ['well-being', 'fitness', 'wellness'],
      antonyms: ['sickness', 'illness', 'disease'],
      exampleSentences: [
        { en: 'Regular exercise and a balanced diet are essential for maintaining good physical condition.', ko: '규칙적인 운동과 균형 잡힌 식단은 좋은 신체적 상태를 유지하는 데 필수적입니다.' },
        { en: 'Public authorities are concerned about the mental state of teenagers during the exam period.', ko: '공공 당국은 시험 기간 동안 청소년들의 정신적 건강 상태에 대해 우려하고 있습니다.' },
      ],
    }
  ),
  word('hear', '듣다', 4, 'verb',
    ['보다', '말하다', '만지다', '냄새맡다', '맛보다', '생각하다', '걷다', '쓰다', '읽다', '달리다'],
    tips({
      etymology: '고대 영어 \'hieran\'에서 유래했으며, 귀를 통해 소리를 지각하는 감각을 의미합니다.',
      visual: '귀 뒤에 손을 대고 멀리서 들려오는 소리에 집중하는 사람의 모습을 상상해 보세요.',
      soundAlike: '여기를 뜻하는 \'here\'와 발음이 같으므로, \'여기(here)서 소리를 듣다(hear)\'라고 외우면 쉽습니다.',
      context: '의도적으로 집중해서 듣는 listen과 달리, 소리가 자연스럽게 귀에 들어오는 상황에서 주로 쓰입니다.',
      synonymAntonym: 'listen은 집중해서 듣는 것이고, ignore는 들려오는 소리를 무시하는 반대 행동입니다.',
    }),
    {
      definition: 'To perceive sounds through the ears without necessarily paying conscious attention.',
      synonyms: ['perceive', 'overhear', 'listen'],
      antonyms: ['ignore', 'disregard', 'overlook'],
      exampleSentences: [
        { en: 'Did you manage to catch any noise from the neighbors upstairs last night?', ko: '어젯밤에 위층 이웃이 내는 소리를 조금이라도 들었니?' },
        { en: 'The forest was so quiet that we could easily recognize the sound of a falling leaf.', ko: '숲이 너무 조용해서 나뭇잎이 떨어지는 소리도 쉽게 들을 수 있었다.' },
      ],
    }
  ),
  word('heat', '열', 2, 'noun',
    ['냉기', '습기', '바람', '그늘', '얼음', '먼지', '소음', '압력', '속도', '무게'],
    tips({
      etymology: '고대 영어 \'hætu\'에서 유래했으며, 뜨거움을 뜻하는 \'hot\'과 같은 뿌리를 공유합니다.',
      visual: '한여름 아스팔트 위로 아지랑이가 피어오르는 뜨거운 열기를 상상해 보세요.',
      soundAlike: '야구에서 투수가 던지는 빠른 공을 \'강속구(heat)\'라고 부르는 것을 떠올리면 에너지가 느껴집니다.',
      context: '물리학에서는 에너지의 전달을 의미하며, 일상에서는 날씨나 요리 시의 온도를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'warmth와는 온도의 정도 차이가 있으며, coldness와는 정반대의 에너지 상태를 나타냅니다.',
    }),
    {
      definition: 'The quality of being hot or the high temperature of something that provides energy.',
      synonyms: ['warmth', 'temperature', 'fever'],
      antonyms: ['coldness', 'chill', 'coolness'],
      exampleSentences: [
        { en: 'The intense summer sun radiated a stifling amount of energy onto the pavement.', ko: '강렬한 여름 태양이 보도 위로 숨 막히는 열기를 내뿜었습니다.' },
        { en: 'Stir the soup constantly over medium flame to distribute the thermal energy evenly.', ko: '열이 고르게 전달되도록 중간 불에서 수프를 계속 저어주세요.' },
      ],
    }
  ),
  word('heaven', '하늘', 3, 'noun',
    ['지옥', '대지', '바다', '동굴', '심연', '사막', '지하', '무덤', '감옥', '진흙'],
    tips({
      etymology: '고대 영어 \'heofon\'에서 유래했으며, 이는 \'덮개\'나 \'천장\'을 의미하여 머리 위의 거대한 하늘을 뜻하게 되었습니다.',
      visual: '구름 위로 황금빛 햇살이 내리쬐고 천사들이 머무는 평화롭고 아름다운 낙원의 풍경을 상상해 보세요.',
      soundAlike: '\'헤븐\'이라고 발음하며, 기분이 너무 좋아 \'해벌레\' 웃음이 날 정도로 행복한 장소라고 연상해 보세요.',
      context: '종교적인 사후 세계를 뜻하기도 하지만, 아주 맛있는 음식을 먹거나 편안한 휴식을 취할 때 비유적으로 사용합니다.',
      synonymAntonym: '낙원을 뜻하는 paradise와 반대되는 고통의 장소 hell을 함께 기억하면 기억에 오래 남습니다.',
    }),
    {
      definition: 'The abode of God and the angels, or a state of supreme happiness and bliss.',
      synonyms: ['paradise', 'nirvana', 'bliss'],
      antonyms: ['hell', 'misery', 'underworld'],
      exampleSentences: [
        { en: 'The stars twinkled brightly in the vast expanse of the night sky, looking like a gateway to a divine realm.', ko: '밤하늘의 광활한 공간에서 별들이 반짝이는 모습은 신성한 영역으로 가는 입구처럼 보였습니다.' },
        { en: 'Lying on the warm sand with a cold drink felt like absolute perfection after a long week of work.', ko: '긴 근무 주간을 마친 후 차가운 음료와 함께 따뜻한 모래 위에 누워 있는 것은 그야말로 완벽한 행복이었습니다.' },
      ],
    }
  ),
  word('heavy', '무거운', 1, 'adjective',
    ['가벼운', '얇은', '빠른', '작은', '부드러운', '밝은', '약한', '좁은', '낮은', '단순한'],
    tips({
      etymology: '고대 영어 \'hefig\'에서 유래했으며, \'들기 힘들 정도로 무게가 나가는\' 상태를 의미합니다.',
      visual: '커다란 바벨을 들고 땀을 뻘뻘 흘리며 끙끙거리는 역도 선수의 모습을 상상해 보세요.',
      soundAlike: '\'헤비\'급 권투 선수를 떠올려 보세요. 체중이 많이 나가는 선수들을 부르는 명칭입니다.',
      context: '물리적인 무게뿐만 아니라 비가 많이 오거나 교통 체증이 심할 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: 'weighty와는 무게감을 공유하며, 반대말인 light는 가벼운 깃털을 연상하면 쉽습니다.',
    }),
    {
      definition: 'having great weight or difficult to lift or move due to substantial mass',
      synonyms: ['weighty', 'hefty', 'massive'],
      antonyms: ['light', 'weightless', 'airy'],
      exampleSentences: [
        { en: 'The wooden box was too bulky and weighted to carry up the stairs alone.', ko: '그 나무 상자는 너무 부피가 크고 무거워서 혼자 계단으로 운반할 수 없었다.' },
        { en: 'Drivers had to slow down because of the exceptionally thick rain and fog.', ko: '운전자들은 유난히 심한 폭우와 안개 때문에 속도를 줄여야만 했다.' },
      ],
    }
  ),
  word('heel', '발뒤꿈치', 5, 'noun',
    ['발가락', '발목', '무릎', '팔꿈치', '손목', '어깨', '허리', '허벅지', '종아리', '발등'],
    tips({
      etymology: '고대 영어 \'hela\'에서 유래했으며, 발의 뒷부분을 지칭하는 아주 오래된 단어입니다.',
      visual: '신발 뒷부분의 높은 굽이나 양말의 뒷구멍이 난 부분을 상상해 보세요.',
      soundAlike: '상처가 낫는다는 뜻의 \'heal\'과 발음이 같으니 문맥으로 구분해야 합니다.',
      context: '강아지에게 곁에 붙어 걸으라고 명령할 때도 \'Heel!\'이라고 외칩니다.',
      synonymAntonym: '발의 뒷부분을 뜻하며, 반대되는 위치인 발가락(toe)과 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'The back part of the human foot below the ankle.',
      synonyms: ['hindfoot', 'rear', 'base'],
      antonyms: ['toe', 'front', 'forefoot'],
      exampleSentences: [
        { en: 'A sharp stone in my shoe was rubbing against my left heel all day.', ko: '신발 안의 날카로운 돌이 하루 종일 내 왼쪽 발뒤꿈치를 쏠리게 했다.' },
        { en: 'She lifted her heel to show the colorful pattern on her new socks.', ko: '그녀는 새 양말의 화려한 무늬를 보여주기 위해 발뒤꿈치를 들어 올렸다.' },
      ],
    }
  ),
  word('height', '높이', 6, 'noun',
    ['너비', '무게', '깊이', '속도', '거리', '면적', '부피', '각도', '길이', '두께'],
    tips({
      etymology: '고대 영어 \'heahth\'에서 유래했으며, \'high(높은)\'라는 형용사에 명사형 접미사 \'-th\'가 붙어 만들어진 단어입니다.',
      visual: '건물 옆에 서서 꼭대기를 올려다보며 수직으로 뻗은 자를 상상해 보세요.',
      soundAlike: '\'하이트\'라고 발음되는데, 맥주 브랜드 이름처럼 시원하게 쭉 뻗은 컵의 높이를 연상하면 쉽습니다.',
      context: '사람의 키를 물어볼 때나 산의 정상까지의 거리를 측정할 때 주로 사용됩니다.',
      synonymAntonym: '정상을 뜻하는 altitude와 유의어 관계이며, 바닥이나 깊이를 뜻하는 depth와 반대되는 개념입니다.',
    }),
    {
      definition: 'The measurement of someone or something from head to foot or from base to top.',
      synonyms: ['altitude', 'stature', 'elevation'],
      antonyms: ['depth', 'width', 'flatness'],
      exampleSentences: [
        { en: 'The mountain peak reaches a staggering vertical measurement of eight thousand meters.', ko: '그 산봉우리는 8,000미터라는 어마어마한 수직 높이에 달합니다.' },
        { en: 'She adjusted the chair to a comfortable level so her feet could touch the floor.', ko: '그녀는 발이 바닥에 닿을 수 있도록 의자 높이를 편안한 수준으로 조절했습니다.' },
      ],
    }
  ),
  word('heir', '상속인', 10, 'noun',
    ['결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회'],
    tips({
      etymology: '라틴어 \'heres\'에서 유래했으며, 재산을 물려받는 사람이라는 뜻을 가집니다.',
      visual: '왕관을 물려받기 위해 무릎을 꿇고 있는 왕자의 모습을 상상해 보세요.',
      soundAlike: '공기를 뜻하는 \'air\'와 발음이 완전히 똑같으므로 공기처럼 자연스럽게 물려받는다고 생각하세요.',
      context: '주로 왕실의 왕위 계승자나 막대한 유산을 물려받는 법적 상속인을 지칭할 때 쓰입니다.',
      synonymAntonym: 'successor는 뒤를 잇는 사람을 뜻하며, predecessor는 앞서간 사람을 뜻합니다.',
    }),
    {
      definition: 'A person who is legally entitled to the property or rank of another on that person\'s death.',
      synonyms: ['successor', 'beneficiary', 'inheritor'],
      antonyms: ['predecessor', 'ancestor', 'donor'],
      exampleSentences: [
        { en: 'The young prince was named the official successor to the throne.', ko: '그 어린 왕자는 왕위의 공식적인 상속인으로 지명되었습니다.' },
        { en: 'She is the sole beneficiary of her grandfather\'s vast estate.', ko: '그녀는 할아버지의 막대한 재산에 대한 유일한 상속인입니다.' },
      ],
    }
  ),
  word('helicopter', '헬리콥터', 2, 'noun',
    ['잠수함', '기차', '자전거', '오토바이', '트럭', '유람선', '열기구', '전투기', '택시', '버스'],
    tips({
      etymology: '그리스어 \'helix(나선)\'와 \'pteron(날개)\'이 합쳐져 \'나선형 날개\'라는 뜻에서 유래되었습니다.',
      visual: '건물 옥상 H 표시가 된 헬리포트 위로 프로펠러가 윙윙 돌아가며 수직으로 뜨는 모습을 상상하세요.',
      soundAlike: '발음할 때 \'헬리\'는 \'해리포터\'의 이름과 비슷하고 \'콥터\'는 \'컵(cup)\'을 덮는 소리와 비슷합니다.',
      context: '교통 체증이 심한 도심에서 응급 환자를 이송하거나 산불을 끌 때 하늘을 나는 이 장비를 자주 볼 수 있습니다.',
      synonymAntonym: '비슷한 비행체인 chopper나 copter로 불리기도 하지만, 땅에서만 다니는 car와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A type of aircraft with large metal blades on top that spin around very fast, allowing it to take off and land vertically.',
      synonyms: ['chopper', 'whirlybird', 'copter'],
      antonyms: ['submarine', 'automobile', 'pedestrian'],
      exampleSentences: [
        { en: 'The rescue team arrived by air to pick up the injured hikers from the mountain peak.', ko: '구조대는 산 정상에서 부상당한 등산객들을 데려오기 위해 공중으로 도착했습니다.' },
        { en: 'Traffic reporters often fly high above the city to monitor the morning commute.', ko: '교통 리포터들은 아침 출근길을 관찰하기 위해 종종 도시 상공을 높이 비행합니다.' },
      ],
    }
  ),
  word('hell', '지옥', 7, 'noun',
    ['천국', '낙원', '평화', '안식', '축복', '희망', '기쁨', '영광', '구원', '행복'],
    tips({
      etymology: '고대 영어 hel에서 유래되었으며, 원래 \'숨겨진 장소\'나 \'덮인 곳\'이라는 의미를 담고 있습니다.',
      visual: '뜨거운 불길이 치솟고 고통스러운 비명이 들리는 어둡고 깊은 지하 세계를 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'bell(종)\'을 떠올리며, 지옥의 종소리가 울리는 무서운 장면을 연상해 보세요.',
      context: '매우 고통스럽거나 견디기 힘든 상황을 묘사할 때 비유적으로 자주 사용되는 표현입니다.',
      synonymAntonym: '천국을 뜻하는 heaven과 정반대되는 개념으로 기억하면 훨씬 기억에 오래 남습니다.',
    }),
    {
      definition: 'a place or state of great suffering and misery, often believed in some religions to be the home of the dead and evil spirits',
      synonyms: ['underworld', 'purgatory', 'abyss'],
      antonyms: ['heaven', 'paradise', 'nirvana'],
      exampleSentences: [
        { en: 'The soldiers described the battlefield as a living nightmare that felt like eternal fire.', ko: '군인들은 그 전장을 영원한 불길처럼 느껴지는 살아있는 악몽이라고 묘사했습니다.' },
        { en: 'Working sixteen hours a day without any breaks was absolute misery for the young staff.', ko: '휴식 없이 하루 16시간을 일하는 것은 젊은 직원들에게 절대적인 고통이었습니다.' },
      ],
    }
  ),
  word('hello', '안녕하세요', 3, 'interjection',
    ['안녕', '반가워', '잘가', '고마워', '미안해', '사랑해', '축하해', '부탁해', '실례해', '조심해'],
    tips({
      etymology: '전화기 발명 초기에는 상대를 부르는 소리로 쓰였으며, 한국어의 \'여보세요\'와 같은 맥락에서 \'여보\'라는 호칭으로 확장되었습니다.',
      visual: '전화기를 들고 다정하게 배우자를 부르며 웃고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'헬로\'라고 발음할 때 끝을 살짝 올리면 상대를 부드럽게 부르는 느낌이 납니다.',
      context: '주로 전화 통화나 누군가의 주의를 끌 때, 혹은 배우자를 친근하게 부를 때 사용됩니다.',
      synonymAntonym: 'hi, hey와 비슷하지만, 격식 있는 자리나 특정 호칭으로 쓰일 때는 뉘앙스가 다릅니다.',
    }),
    {
      definition: 'A common greeting used to begin a conversation or to get someone\'s attention, especially over the telephone.',
      synonyms: ['greeting', 'salutation', 'welcome'],
      antonyms: ['goodbye', 'farewell', 'adieu'],
      exampleSentences: [
        { en: 'She picked up the phone and said a cheerful hello to her husband.', ko: '그녀는 수화기를 들고 남편에게 밝게 \'여보\'라고 말했다.' },
        { en: 'The child shouted a loud hello to attract his father\'s attention.', ko: '아이는 아빠의 관심을 끌기 위해 크게 \'여보세요\'라고 외쳤다.' },
      ],
    }
  ),
  word('help', '돕다', 1, 'verb',
    ['방해', '거절', '무시', '지연', '파괴', '공격', '포기', '침묵', '실수', '고립'],
    tips({
      etymology: '고대 영어 \'helpan\'에서 유래하여 누군가에게 힘을 보태어 일을 수월하게 만든다는 핵심 의미를 가집니다.',
      visual: '무거운 짐을 들고 가는 사람의 뒤에서 함께 손을 보태어 들어주는 훈훈한 장면을 상상해 보세요.',
      soundAlike: '다급할 때 외치는 \'헬프!\' 소리를 떠올리며 위기 상황에서 필요한 지원을 연상하면 쉽습니다.',
      context: '일상적인 가사 노동부터 전문적인 상담까지 타인의 노력을 덜어주는 모든 지원 상황에 쓰입니다.',
      synonymAntonym: '도움을 주는 assistance와 반대로 진행을 가로막는 hindrance를 대조해서 기억하세요.',
    }),
    {
      definition: 'the action of helping someone to do something or providing what is necessary to achieve a task.',
      synonyms: ['assistance', 'aid', 'support'],
      antonyms: ['hindrance', 'obstruction', 'opposition'],
      exampleSentences: [
        { en: 'The local community offered financial assistance to the families in need.', ko: '지역 사회는 도움이 필요한 가족들에게 재정적 지원을 제공했습니다.' },
        { en: 'Your advice was a great benefit to me during the project planning phase.', ko: '당신의 조언은 프로젝트 계획 단계에서 저에게 큰 도움이 되었습니다.' },
      ],
    }
  ),
  word('hence', '그러므로', 8, 'adverb',
    ['그럼에도', '오히려', '게다가', '마침내', '비록', '때때로', '결코', '대신에', '아마도', '반대로'],
    tips({
      etymology: '고대 영어 \'henan\'에서 유래하여 \'이곳으로부터\'라는 뜻이 논리적 결과인 \'그러므로\'로 발전했습니다.',
      visual: '도미노 블록 하나가 쓰러지면서 다음 블록을 쓰러뜨리는 화살표 방향을 상상해 보세요.',
      soundAlike: '\'핸스\'라고 발음되는데, 손(hand)으로 다음 결과를 가리키는 모습을 연상하면 쉽습니다.',
      context: '주로 격식 있는 글이나 학술적인 문장에서 앞선 원인에 따른 결론을 도출할 때 사용됩니다.',
      synonymAntonym: 'therefore와 의미가 같지만, hence는 문장 중간에서 접속사처럼 쓰이기도 합니다.',
    }),
    {
      definition: 'as a consequence; for this reason.',
      synonyms: ['therefore', 'consequently', 'thus'],
      antonyms: ['previously', 'beforehand', 'formerly'],
      exampleSentences: [
        { en: 'The cost of transport is a major expense for the company; hence, we must find a cheaper provider.', ko: '운송비는 회사의 주요 지출 항목입니다. 그러므로 우리는 더 저렴한 공급업체를 찾아야 합니다.' },
        { en: 'The roads were covered in thick ice, hence the delay in all scheduled deliveries.', ko: '도로가 두꺼운 얼음으로 뒤덮여 있었고, 그 결과 모든 예정된 배송이 지연되었습니다.' },
      ],
    }
  ),
  word('here', '여기에', 2, 'adverb',
    ['거기에', '저기에', '어디에', '언제나', '나중에', '멀리서', '가까이', '밖으로', '안으로', '위쪽으로'],
    tips({
      etymology: '고대 영어 \'her\'에서 유래되었으며 \'이 장소에\'라는 의미를 담고 있습니다.',
      visual: '발밑의 지면을 가리키며 지금 내가 서 있는 바로 이 자리를 상상해 보세요.',
      soundAlike: '\'Hear(듣다)\'와 발음이 같으므로 \'여기서 내 말을 들어봐\'라고 연상하면 쉽습니다.',
      context: '길을 안내하거나 물건의 위치를 알려줄 때 가장 기본적으로 쓰이는 장소 부사입니다.',
      synonymAntonym: '거기를 뜻하는 there와 대조하여 위치의 가깝고 먼 정도를 구분하세요.',
    }),
    {
      definition: 'In, at, or to this place or position.',
      synonyms: ['locally', 'present', 'nearby'],
      antonyms: ['there', 'away', 'elsewhere'],
      exampleSentences: [
        { en: 'Please sit down and wait for a moment.', ko: '여기에 앉아서 잠시만 기다려 주세요.' },
        { en: 'The package arrived this morning and is sitting on the table.', ko: '소포가 오늘 아침에 도착해서 여기 탁자 위에 놓여 있습니다.' },
      ],
    }
  ),
  word('heritage', '유산, 문화유산', 9, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '라틴어 \'heres(상속인)\'에서 유래하여 조상으로부터 물려받은 유산이나 전통을 뜻합니다.',
      visual: '오래된 고궁이나 가문의 족보가 담긴 낡은 책을 물려받는 장면을 상상해 보세요.',
      soundAlike: '\'헤리티지\'는 한국에서도 고급 브랜드의 전통을 강조할 때 자주 쓰이는 외래어입니다.',
      context: '문화재뿐만 아니라 가문에서 대대로 내려오는 정신적 가치나 유전적 특징을 말할 때도 쓰입니다.',
      synonymAntonym: 'inheritance와 유사하지만, heritage는 개인적 상속보다 사회적, 문화적 유산의 성격이 강합니다.',
    }),
    {
      definition: 'The traditions, achievements, and beliefs that are part of the history of a group or nation.',
      synonyms: ['inheritance', 'legacy', 'tradition'],
      antonyms: ['novelty', 'innovation', 'modernity'],
      exampleSentences: [
        { en: 'Preserving our cultural history is essential for future generations to understand their roots.', ko: '미래 세대가 자신들의 뿌리를 이해하기 위해서는 우리의 문화적 유산을 보존하는 것이 필수적입니다.' },
        { en: 'The city is famous for its rich architectural background and historic landmarks.', ko: '그 도시는 풍부한 건축적 유산과 역사적 명소들로 유명합니다.' },
      ],
    }
  ),
  word('hero', '영웅', 3, 'noun',
    ['악당', '겁쟁이', '평민', '군중', '적군', '배신자', '조력자', '희생자', '방관자', '범죄자'],
    tips({
      etymology: '그리스어 \'heros\'에서 유래했으며, 원래는 신의 피를 이어받은 반신반인을 뜻했습니다.',
      visual: '망토를 휘날리며 위험에 처한 사람을 구출해내는 용감한 전사의 모습을 상상해 보세요.',
      soundAlike: '\'히어로\'라고 발음하며, 우리에게 익숙한 슈퍼맨이나 배트맨 같은 초능력자를 떠올리면 쉽습니다.',
      context: '전쟁터에서 공을 세운 군인이나 타인의 생명을 구한 시민을 칭송할 때 주로 쓰입니다.',
      synonymAntonym: '용기 있는 champion과는 비슷하지만, 비겁하게 도망치는 coward와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A person who is admired for their courage, outstanding achievements, or noble qualities.',
      synonyms: ['champion', 'protagonist', 'idol'],
      antonyms: ['villain', 'coward', 'antagonist'],
      exampleSentences: [
        { en: 'The firefighter became a local legend after saving three children from the burning building.', ko: '그 소방관은 불타는 건물에서 세 명의 아이들을 구한 후 지역의 전설적인 영웅이 되었습니다.' },
        { en: 'Every child needs a positive role model to look up to while growing up.', ko: '모든 아이들은 성장하는 동안 우러러볼 수 있는 긍정적인 영웅이 필요합니다.' },
      ],
    }
  ),
  word('hesitate', '주저하다', 4, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '라틴어 \'haesitare\'에서 유래되었으며, 이는 \'달라붙다\' 또는 \'막히다\'라는 뜻을 가지고 있어 말이 막히거나 발걸음이 떨어지지 않는 모습을 연상시킵니다.',
      visual: '갈림길 앞에서 어느 쪽으로 갈지 몰라 발을 떼지 못하고 서성이는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'헤지테이트\' 발음이 \'해지(할까) 테이트(말까)\' 고민하며 망설이는 소리처럼 들린다고 생각하면 기억하기 쉽습니다.',
      context: '주로 결정을 내리기 전이나 두려움 때문에 행동을 멈칫할 때 자주 사용되는 표현입니다.',
      synonymAntonym: '확신이 없어 멈칫하는 pause와 비슷하지만, 단호하게 밀고 나가는 proceed와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To pause before saying or doing something, usually because of uncertainty, fear, or indecision.',
      synonyms: ['waver', 'falter', 'pause'],
      antonyms: ['proceed', 'advance', 'continue'],
      exampleSentences: [
        { en: 'Please do not pause or wait if you have any further questions regarding the contract.', ko: '계약과 관련하여 추가 질문이 있으시면 주저하지 말고 문의해 주세요.' },
        { en: 'She seemed to stop for a brief moment before stepping onto the stage to deliver her speech.', ko: '그녀는 연설을 하기 위해 무대에 오르기 전 잠시 주저하는 듯 보였다.' },
      ],
    }
  ),
  word('hide', '감추다', 5, 'verb',
    ['가죽', '껍질', '표면', '털가죽', '외피', '장막', '보호막', '덮개', '껍데기', '피부'],
    tips({
      etymology: '고대 영어 \'hyd\'에서 유래했으며, 동물을 감싸고 있는 질긴 껍질이나 가죽을 의미합니다.',
      visual: '사냥꾼이 갓 벗겨낸 거칠고 두꺼운 곰 가죽을 상상해 보세요.',
      soundAlike: '하이(Hi)하고 인사하며 가죽 옷을 입은 사람을 떠올려 보세요.',
      context: '주로 가공되지 않은 상태의 큰 짐승 가죽을 가리킬 때 사용됩니다.',
      synonymAntonym: '동물의 겉면을 뜻하는 skin과 유사하지만, hide는 훨씬 더 두껍고 거친 느낌을 줍니다.',
    }),
    {
      definition: 'The strong, thick skin of an animal, especially when it is used for making leather.',
      synonyms: ['pelt', 'skin', 'leather'],
      antonyms: ['core', 'interior', 'inside'],
      exampleSentences: [
        { en: 'The hunters stretched the buffalo skin to dry in the sun.', ko: '사냥꾼들은 햇볕에 말리기 위해 버팔로 가죽을 팽팽하게 폈다.' },
        { en: 'Tanners use special chemicals to turn a raw animal surface into durable leather.', ko: '무두질업자들은 가공되지 않은 동물의 가죽을 내구성 있는 가죽으로 바꾸기 위해 특수 화학 물질을 사용한다.' },
      ],
    }
  ),
  word('high', '높은', 1, 'adjective',
    ['낮은', '깊은', '좁은', '가까운', '무거운', '가벼운', '평평한', '작은', '느린', '짧은'],
    tips({
      etymology: '고대 영어 \'heah\'에서 유래했으며, 하늘을 향해 솟아오른 물리적 높이를 뜻합니다.',
      visual: '에베레스트 산의 꼭대기나 구름 위에 떠 있는 비행기를 상상해 보세요.',
      soundAlike: '안녕이라고 인사하는 \'Hi\'와 발음이 같으니, 높은 곳에 있는 사람에게 인사한다고 생각하세요.',
      context: '산의 높이뿐만 아니라 온도, 가격, 점수 등이 평균보다 높을 때도 자주 쓰입니다.',
      synonymAntonym: 'Tall은 주로 사람이나 건물의 길이를, High는 지면에서의 위치나 수치를 나타낼 때 씁니다.',
    }),
    {
      definition: 'Extending a great distance upward from the ground or a base level.',
      synonyms: ['elevated', 'lofty', 'soaring'],
      antonyms: ['low', 'short', 'depressed'],
      exampleSentences: [
        { en: 'The birds are flying at a very great altitude in the sky.', ko: '새들이 하늘 아주 높은 고도에서 날고 있습니다.' },
        { en: 'Success requires maintaining a standard of excellence in everything you do.', ko: '성공은 당신이 하는 모든 일에서 높은 수준의 탁월함을 유지하는 것을 요구합니다.' },
      ],
    }
  ),
  word('highway', '고속도로', 6, 'noun',
    ['골목길', '산책로', '지하도', '막다른 길', '비포장도로', '철길', '횡단보도', '육교', '정거장', '주차장'],
    tips({
      etymology: 'high(높은/주요한)와 way(길)가 합쳐져 도시를 잇는 주요 도로라는 의미가 되었습니다.',
      visual: '끝없이 뻗은 여러 차선의 아스팔트 도로 위를 차들이 빠르게 달리는 모습을 상상하세요.',
      soundAlike: '하이웨이 - \'하이(High)\'하게 속도를 높여서 \'웨이(Way)\' 길을 달린다고 기억하세요.',
      context: '주로 도시와 도시 사이를 빠르게 연결하는 고속도로나 큰 간선도로를 지칭할 때 쓰입니다.',
      synonymAntonym: 'expressway와 유사하며, 좁은 시골길인 lane이나 path와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A main public road that connects cities and towns, usually designed for high-speed traffic.',
      synonyms: ['expressway', 'freeway', 'main road'],
      antonyms: ['alley', 'lane', 'pathway'],
      exampleSentences: [
        { en: 'The new route allows commuters to bypass the city center by taking the coastal road.', ko: '새로운 노선은 통근자들이 해안 고속도로를 이용해 도심을 우회할 수 있게 해줍니다.' },
        { en: 'Heavy snow caused several accidents on the interstate during the morning rush hour.', ko: '폭설로 인해 아침 혼잡 시간대 동안 주간 고속도로에서 여러 건의 사고가 발생했습니다.' },
      ],
    }
  ),
  word('hill', '언덕', 2, 'noun',
    ['산맥', '계곡', '평지', '절벽', '동굴', '호수', '숲', '바다', '사막', '들판'],
    tips({
      etymology: '고대 영어 \'hyll\'에서 유래했으며, 산보다는 낮지만 주변보다 솟아오른 지형을 뜻합니다.',
      visual: '완만한 곡선을 그리며 솟아오른 초록색 동산을 상상해 보세요.',
      soundAlike: '발음이 \'힐\'이므로, 높은 굽의 \'하이힐\'을 신고 언덕을 오르는 모습을 떠올리면 쉽습니다.',
      context: '주로 등산보다는 가벼운 산책이나 소풍을 가는 장소로 자주 언급됩니다.',
      synonymAntonym: 'mountain보다는 낮고 mound보다는 큰 지형이며, valley와는 반대되는 높이를 가집니다.',
    }),
    {
      definition: 'A naturally raised area of land, not as high or craggy as a mountain.',
      synonyms: ['mound', 'elevation', 'rise'],
      antonyms: ['valley', 'hollow', 'depression'],
      exampleSentences: [
        { en: 'The children enjoyed rolling down the grassy slope after reaching the top.', ko: '아이들은 정상에 도착한 후 풀이 무성한 경사면을 굴러 내려가는 것을 즐겼다.' },
        { en: 'A small white cottage sits peacefully on the far side of the ridge.', ko: '작은 하얀 오두막이 저 멀리 산등성이 너머에 평화롭게 자리 잡고 있다.' },
      ],
    }
  ),
  word('hip', '엉덩이', 7, 'noun',
    ['어깨', '무릎', '팔꿈치', '손목', '발목', '허리', '가슴', '등', '목', '턱'],
    tips({
      etymology: '고대 영어 \'hype\'에서 유래하여 몸의 중심을 지탱하는 골반 부위를 뜻하게 되었습니다.',
      visual: '청바지를 입었을 때 옆으로 툭 튀어나온 골반 라인을 상상해 보세요.',
      soundAlike: '유행에 민감하다는 뜻의 \'힙하다\'와 발음이 같아 몸매가 멋진 이미지를 연상하면 쉽습니다.',
      context: '신체 부위를 설명할 때뿐만 아니라, 옷의 치수를 잴 때 가장 넓은 부분을 의미하기도 합니다.',
      synonymAntonym: 'pelvis나 haunch와 비슷하며, 신체 윗부분인 shoulder와는 대조적인 위치에 있습니다.',
    }),
    {
      definition: 'The area on either side of the body below the waist and above the thigh, centered on the bony pelvis.',
      synonyms: ['pelvis', 'haunch', 'coxa'],
      antonyms: ['shoulder', 'head', 'chest'],
      exampleSentences: [
        { en: 'The athlete suffered a minor injury to her left joint during the marathon.', ko: '그 운동선수는 마라톤 도중 왼쪽 고관절에 경미한 부상을 입었습니다.' },
        { en: 'She stood with her hands on her sides, waiting impatiently for the bus.', ko: '그녀는 양손을 허리춤 엉덩이 위에 얹은 채 초조하게 버스를 기다렸습니다.' },
      ],
    }
  ),
  word('hire', '고용하다', 4, 'verb',
    ['해고하다', '사직하다', '거절하다', '훈련하다', '승진시키다', '평가하다', '은퇴하다', '관리하다', '이전하다', '협상하다'],
    tips({
      etymology: '고대 영어 \'hyrian\'에서 유래했으며, 대가를 지불하고 노동력이나 물건을 빌리는 행위를 의미합니다.',
      visual: '면접관이 환하게 웃으며 지원자에게 악수를 청하고 \'함께 일합시다\'라고 말하는 장면을 상상해 보세요.',
      soundAlike: '높다는 뜻의 \'high\'와 발음이 비슷합니다. 직원의 가치를 \'높게\' 평가해서 뽑는다고 생각하면 쉽습니다.',
      context: '주로 기업이 새로운 인재를 채용하거나, 단기간 특정 서비스를 위해 사람을 부릴 때 사용됩니다.',
      synonymAntonym: '채용하는 것은 employ, 반대로 내보내는 것은 fire나 dismiss를 사용합니다.',
    }),
    {
      definition: 'To give someone a job or to pay for the temporary use of something.',
      synonyms: ['employ', 'recruit', 'appoint'],
      antonyms: ['fire', 'dismiss', 'terminate'],
      exampleSentences: [
        { en: 'The tech company plans to recruit and hire fifty new software engineers this quarter.', ko: '그 기술 회사는 이번 분기에 50명의 새로운 소프트웨어 엔지니어를 채용할 계획입니다.' },
        { en: 'We decided to hire a professional photographer to capture the special moments of our wedding.', ko: '우리는 결혼식의 특별한 순간들을 담기 위해 전문 사진작가를 고용하기로 결정했습니다.' },
      ],
    }
  ),
  word('history', '역사', 3, 'noun',
    ['미래', '과학', '지리', '예술', '수학', '언어', '문화', '전통', '신화', '철학'],
    tips({
      etymology: '그리스어 \'historia\'에서 유래되었으며, 이는 \'조사를 통해 얻은 지식\'이라는 의미를 담고 있습니다.',
      visual: '먼지가 쌓인 두꺼운 옛날 책들이 가득한 도서관 서가에서 오래된 기록을 찾아보는 모습을 상상해 보세요.',
      soundAlike: '\'히스토리\'는 \'그의(his) 이야기(story)\'와 발음이 비슷하여 과거 인물들의 이야기라고 기억하면 쉽습니다.',
      context: '학교 수업 시간이나 박물관에서 과거의 사건들을 배울 때 가장 자주 접하게 되는 단어입니다.',
      synonymAntonym: '과거의 기록을 뜻하는 annals와 비슷하지만, 아무것도 기록되지 않은 미래(future)와는 반대됩니다.',
    }),
    {
      definition: 'The study of past events, particularly in human affairs, or the whole series of past events connected with someone or something.',
      synonyms: ['past', 'annals', 'chronicle'],
      antonyms: ['future', 'prospect', 'tomorrow'],
      exampleSentences: [
        { en: 'The local museum showcases the rich cultural heritage and ancient records of this region.', ko: '지역 박물관은 이 지역의 풍부한 문화 유산과 고대 역사를 보여줍니다.' },
        { en: 'Studying previous mistakes helps us avoid repeating them in the years to come.', ko: '과거의 역사를 공부하는 것은 다가올 미래에 실수를 반복하지 않도록 도와줍니다.' },
      ],
    }
  ),
  word('hit', '명중하다', 1, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '고대 노르웨이어 \'hitta\'에서 유래하여 목표물에 도달하거나 찾아낸다는 의미를 담고 있습니다.',
      visual: '양궁 선수가 쏜 화살이 과녁 정중앙인 황금색 원에 꽂히는 장면을 상상해 보세요.',
      soundAlike: '야구 방망이가 공을 때릴 때 나는 \'힛\' 하는 짧고 강한 타격음을 연상하면 쉽습니다.',
      context: '단순히 때리는 것뿐만 아니라 화살이나 총알이 목표한 지점에 정확히 닿았을 때 주로 쓰입니다.',
      synonymAntonym: '정확히 맞히는 strike와 달리 miss는 아깝게 빗나가는 반대의 상황을 나타냅니다.',
    }),
    {
      definition: 'to successfully reach a target or a specific point with a thrown or shot object',
      synonyms: ['strike', 'impact', 'reach'],
      antonyms: ['miss', 'avoid', 'fail'],
      exampleSentences: [
        { en: 'The archer managed to strike the bullseye with his very first arrow.', ko: '궁수는 첫 번째 화살로 과녁의 정중앙을 명중시켰습니다.' },
        { en: 'Every single shot from the sniper managed to find its intended mark.', ko: '저격수의 모든 총알이 의도한 목표물에 명중했습니다.' },
      ],
    }
  ),
  word('hobby', '취미', 2, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '중세 영어에서 작은 말을 뜻하던 \'hobbyhorse\'에서 유래하여, 즐거움을 위해 타는 장난감처럼 즐기는 일을 뜻하게 되었습니다.',
      visual: '주말 오후, 거실에서 평화롭게 프라모델을 조립하거나 그림을 그리는 자신의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'하비\'와 비슷하므로, \'하(Ha!) 비(Bee)가 와도 즐거운 나의 활동\'이라고 연상해 보세요.',
      context: '직업이나 의무적인 일이 아니라, 순수하게 개인적인 즐거움과 휴식을 위해 정기적으로 하는 활동을 말합니다.',
      synonymAntonym: '즐거움을 찾는 pastime과는 비슷하지만, 생계를 위한 일인 profession과는 반대되는 개념입니다.',
    }),
    {
      definition: 'An activity done regularly in one\'s leisure time for pleasure.',
      synonyms: ['pastime', 'avocation', 'recreation'],
      antonyms: ['profession', 'vocation', 'labor'],
      exampleSentences: [
        { en: 'Collecting vintage stamps has been my favorite leisure activity since childhood.', ko: '빈티지 우표를 수집하는 것은 어린 시절부터 내가 가장 좋아해 온 취미였다.' },
        { en: 'Many people find that gardening is a relaxing way to spend their weekends.', ko: '많은 이들이 원예가 주말을 보내는 편안한 취미라는 것을 알고 있다.' },
      ],
    }
  ),
  word('hold', '잡다', 3, 'verb',
    ['놓다', '던지다', '부수다', '숨기다', '달리다', '말하다', '듣다', '먹다', '자다', '가다'],
    tips({
      etymology: '고대 영어 \'healdan\'에서 유래하여 무언가를 지키거나 소유하고 있다는 의미를 담고 있습니다.',
      visual: '손가락을 꽉 쥐어 물건을 고정하고 있는 모습을 상상해 보세요.',
      soundAlike: '\'홀드\'라고 발음하며, 암벽 등반에서 손으로 잡는 돌출부를 떠올리면 쉽습니다.',
      context: '물리적으로 물건을 잡는 것뿐만 아니라 영향력이나 지배력을 가질 때도 사용됩니다.',
      synonymAntonym: 'grip과 유사하지만 release와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The act of grasping something firmly with your hands or the power to control something.',
      synonyms: ['grip', 'grasp', 'clutch'],
      antonyms: ['release', 'liberation', 'letting go'],
      exampleSentences: [
        { en: 'The climber maintained a firm grip to keep his position on the rock.', ko: '등반가는 바위 위에서 위치를 유지하기 위해 단단한 움켜잡기를 유지했습니다.' },
        { en: 'She has a strong influence over the decisions made by the committee.', ko: '그녀는 위원회에서 내려지는 결정들에 대해 강력한 장악력을 가지고 있습니다.' },
      ],
    }
  ),
  word('hole', '구멍', 5, 'noun',
    ['언덕', '장벽', '기둥', '지붕', '바닥', '계단', '창문', '울타리', '통로', '그늘'],
    tips({
      etymology: '고대 영어 \'hol\'에서 유래했으며, 속이 비어 있는 상태나 숨겨진 공간을 의미합니다.',
      visual: '도넛 한가운데가 뻥 뚫려 있는 모양이나 골프장의 작은 구멍을 상상해 보세요.',
      soundAlike: '전체를 뜻하는 \'whole\'과 발음이 같지만, 구멍은 속이 비어있다는 점이 다릅니다.',
      context: '양말에 난 구멍이나 땅에 파인 구덩이처럼 물리적인 빈 공간을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'gap이나 opening과 비슷하지만, solid한 물체에 생긴 결핍이라는 점에서 solid와 반대됩니다.',
    }),
    {
      definition: 'an empty space in an object, a surface, or the ground',
      synonyms: ['opening', 'gap', 'cavity'],
      antonyms: ['solid', 'closure', 'mountain'],
      exampleSentences: [
        { en: 'The rabbit quickly disappeared into a small opening in the ground.', ko: '토끼가 땅에 있는 작은 구멍 속으로 빠르게 사라졌다.' },
        { en: 'He noticed a tiny tear in his favorite pair of socks.', ko: '그는 자신이 가장 아끼는 양말에 작은 구멍이 난 것을 발견했다.' },
      ],
    }
  ),
  word('holiday', '휴일', 1, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '성스러운 날을 뜻하는 \'holy\'와 날을 뜻하는 \'day\'가 합쳐져 특별한 휴식일을 의미하게 되었습니다.',
      visual: '달력에 빨간색으로 표시된 날짜와 그 위에 그려진 비행기나 파라솔 이미지를 상상해 보세요.',
      soundAlike: '\'할리데이\'라고 발음하며, 하던 일을 \'할\' 일을 멈추고 쉬는 \'데이(날)\'라고 연상해 보세요.',
      context: '여름 휴가나 크리스마스처럼 학교나 직장에 가지 않고 쉬는 공식적인 날을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'vacation은 주로 긴 휴가를, break는 짧은 휴식을 뜻하며 work는 반대되는 노동을 의미합니다.',
    }),
    {
      definition: 'A specific day or period of time when people do not go to work or school to celebrate a special event or to rest.',
      synonyms: ['vacation', 'break', 'celebration'],
      antonyms: ['workday', 'labor', 'shift'],
      exampleSentences: [
        { en: 'Many people travel to the mountains during the summer holiday to escape the heat.', ko: '많은 사람들이 더위를 피하기 위해 여름 휴가 동안 산으로 여행을 떠납니다.' },
        { en: 'The bank will be closed tomorrow because it is a national holiday.', ko: '내일은 공휴일이기 때문에 은행이 문을 닫을 것입니다.' },
      ],
    }
  ),
  word('holy', '신성한', 6, 'adjective',
    ['세속적인', '불경한', '평범한', '사악한', '더러운', '인간적인', '일시적인', '물질적인', '가벼운', '부정한'],
    tips({
      etymology: '고대 영어 \'hal\'에서 유래했으며, 이는 \'전체적인\' 또는 \'건강한\'을 의미하여 영적으로 온전함을 뜻합니다.',
      visual: '머리 뒤에 후광이 비치는 성인이나 빛이 쏟아지는 오래된 성당의 내부를 상상해 보세요.',
      soundAlike: '크리스마스 장식인 \'호랑가시나무(holly)\'와 발음이 비슷하며, 종교적 축제와 연결하면 쉽습니다.',
      context: '종교적 의식, 경전, 또는 신과 관련된 장소를 묘사할 때 가장 빈번하게 사용됩니다.',
      synonymAntonym: 'sacred와 유의어 관계이며, 종교와 무관한 세속적인 상태를 뜻하는 secular와 반대됩니다.',
    }),
    {
      definition: 'dedicated or consecrated to a god or a religious purpose; regarded with deep respect and awe',
      synonyms: ['sacred', 'divine', 'hallowed'],
      antonyms: ['profane', 'secular', 'impious'],
      exampleSentences: [
        { en: 'The pilgrims traveled hundreds of miles to visit the temple on the mountain.', ko: '순례자들은 산 위에 있는 신성한 사원을 방문하기 위해 수백 마일을 여행했습니다.' },
        { en: 'Many cultures consider certain rivers to be symbols of purity and spiritual power.', ko: '많은 문화권에서 특정 강들을 순결과 영적인 힘의 신성한 상징으로 여깁니다.' },
      ],
    }
  ),
  word('homework', '숙제', 2, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '집을 뜻하는 home과 일이나 작업을 뜻하는 work가 합쳐져 집에서 하는 공부라는 의미가 되었습니다.',
      visual: '학교 수업이 끝나고 가방 가득 책을 담아 집 책상 앞에 앉아 있는 모습을 상상해 보세요.',
      soundAlike: '홈워크라고 발음하며, 집(홈)에서 하는 일(워크)이라고 소리 내어 읽으면 기억하기 쉽습니다.',
      context: '학교 선생님이 수업 끝에 내주시는 과제나 스스로 복습하는 학습 활동을 말할 때 주로 쓰입니다.',
      synonymAntonym: '학교 과제인 assignment와 비슷하지만, homework는 좀 더 일상적이고 일반적인 표현입니다.',
    }),
    {
      definition: 'schoolwork that a student is given to do at home rather than in class',
      synonyms: ['assignment', 'schoolwork', 'exercise'],
      antonyms: ['leisure', 'play', 'recreation'],
      exampleSentences: [
        { en: 'The teacher asked the students to hand in their math assignments by tomorrow morning.', ko: '선생님은 학생들에게 내일 아침까지 수학 숙제를 제출하라고 하셨다.' },
        { en: 'She spent three hours finishing her science project after dinner.', ko: '그녀는 저녁 식사 후 과학 과제를 끝내는 데 세 시간을 보냈다.' },
      ],
    }
  ),
  word('honest', '정직한', 3, 'adjective',
    ['불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인'],
    tips({
      etymology: '라틴어 \'honos(명예)\'에서 유래하여, 명예를 지킬 줄 아는 고결한 성품을 뜻합니다.',
      visual: '거짓말을 하면 코가 길어지는 피노키오와 반대로, 당당하게 눈을 맞추는 사람을 상상하세요.',
      soundAlike: '첫 글자 h가 묵음이라 \'어니스트\'라고 발음됩니다. \'어머니\'처럼 따뜻하고 진실된 마음을 연상해 보세요.',
      context: '법정에서 증언을 하거나 친구에게 진심 어린 조언을 할 때 주로 쓰이는 형용사입니다.',
      synonymAntonym: '진실된 sincere와 반대말인 기만적인 deceitful을 묶어서 기억하면 좋습니다.',
    }),
    {
      definition: 'always telling the truth and never stealing or cheating',
      synonyms: ['truthful', 'sincere', 'frank'],
      antonyms: ['dishonest', 'deceitful', 'insincere'],
      exampleSentences: [
        { en: 'She gave an answer that was completely sincere and straightforward during the interview.', ko: '그녀는 인터뷰 동안 완전히 진실되고 솔직한 답변을 했습니다.' },
        { en: 'Finding someone who is truly reliable and tells the truth is essential for a long-lasting friendship.', ko: '진정으로 신뢰할 수 있고 진실을 말하는 사람을 찾는 것은 오래 지속되는 우정을 위해 필수적입니다.' },
      ],
    }
  ),
  word('honey', '벌꿀', 1, 'noun',
    ['설탕', '시럽', '소금', '우유', '버터', '식초', '기름', '밀가루', '후추', '생강'],
    tips({
      etymology: '고대 영어 \'hunig\'에서 유래했으며, 아주 오래전부터 인류가 사용해온 천연 감미료를 뜻합니다.',
      visual: '노란색의 끈적끈적한 액체가 벌집에서 뚝뚝 떨어지는 달콤한 장면을 상상해 보세요.',
      soundAlike: '\'허니\'라고 발음하며, 사랑하는 사람을 부를 때 쓰는 \'자기야\'라는 애칭과 소리가 같습니다.',
      context: '요리할 때 단맛을 내기 위해 넣거나, 감기에 걸렸을 때 따뜻한 차에 섞어 마시기도 합니다.',
      synonymAntonym: '달콤한 시럽과 비슷하지만, 쓴맛을 내는 약이나 소금과는 정반대의 성질을 가집니다.',
    }),
    {
      definition: 'A sweet, sticky yellowish-brown fluid made by bees from the nectar of flowers.',
      synonyms: ['nectar', 'syrup', 'sweetener'],
      antonyms: ['bitterness', 'sourness', 'acid'],
      exampleSentences: [
        { en: 'Bees collect nectar from flowers to produce high-quality food in their hives.', ko: '벌들은 벌집에서 고품질의 식품을 생산하기 위해 꽃에서 꿀을 모읍니다.' },
        { en: 'Adding a spoonful of this natural sweetener to your tea can soothe a sore throat.', ko: '차에 이 천연 감미료 한 스푼을 넣으면 인후통을 완화하는 데 도움이 될 수 있습니다.' },
      ],
    }
  ),
  word('honor', '명예', 7, 'noun',
    ['결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회'],
    tips({
      etymology: '라틴어 \'honos\'에서 유래하여 사회적 지위나 도덕적 고결함을 뜻하게 되었습니다.',
      visual: '올림픽 시상대 맨 위에서 금메달을 목에 걸고 국기를 바라보는 선수의 모습을 상상해 보세요.',
      soundAlike: '\'아너\'라고 발음되는데, \'안아\'주다와 비슷하게 들리기도 합니다. 훌륭한 업적을 세운 사람을 따뜻하게 안아주며 예우하는 장면을 떠올려보세요.',
      context: '주로 훈장 수여식, 졸업식, 혹은 누군가의 정직한 행동을 칭송할 때 자주 쓰이는 단어입니다.',
      synonymAntonym: '존경을 뜻하는 respect와 비슷하지만, honor는 더 공식적이고 숭고한 가치를 지닌 명예를 뜻합니다.',
    }),
    {
      definition: 'high respect, great esteem, or a privilege that brings pride and recognition to someone',
      synonyms: ['prestige', 'glory', 'reputation'],
      antonyms: ['shame', 'disgrace', 'dishonor'],
      exampleSentences: [
        { en: 'It was a great privilege to receive such a prestigious award at the ceremony.', ko: '시상식에서 그렇게 권위 있는 상을 받은 것은 커다란 영광이었습니다.' },
        { en: 'The soldier fought with courage and integrity to protect his country\'s reputation.', ko: '그 군인은 조국의 명예를 지키기 위해 용기와 청렴함으로 싸웠습니다.' },
      ],
    }
  ),
  word('hook', '갈고리', 10, 'noun',
    ['망치', '나사', '톱니', '사슬', '밧줄', '바늘', '그물', '상자', '지렛대', '못'],
    tips({
      etymology: '고대 영어 \'hoc\'에서 유래했으며, 구부러진 금속 조각을 의미하는 단어에서 시작되었습니다.',
      visual: '알파벳 \'j\'나 \'h\'의 아랫부분이 낚싯바늘처럼 굽어 있는 모양을 상상해 보세요.',
      soundAlike: '권투에서 옆으로 휘어 치는 \'훅\' 동작을 떠올리면 구부러진 궤적을 연상하기 쉽습니다.',
      context: '낚시뿐만 아니라 옷을 걸거나 물건을 고정할 때 사용하는 모든 굽은 도구에 쓰입니다.',
      synonymAntonym: '무언가를 잡는 \'clasp\'와 비슷하지만, 아무것도 없는 \'gap\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A curved piece of metal or other material used for catching, pulling, or holding something.',
      synonyms: ['clasp', 'fastener', 'hanger'],
      antonyms: ['straightener', 'release', 'opening'],
      exampleSentences: [
        { en: 'The fisherman carefully attached the bait to the sharp metal piece.', ko: '어부는 날카로운 금속 갈고리에 미끼를 조심스럽게 매달았습니다.' },
        { en: 'Hang your heavy winter coat on the wooden peg behind the door.', ko: '문 뒤에 있는 나무 갈고리에 두꺼운 겨울 코트를 걸어두세요.' },
      ],
    }
  ),
  word('hope', '희망', 2, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '고대 영어 hopian에서 유래하여 무언가를 간절히 바라고 기대한다는 뜻을 담고 있습니다.',
      visual: '어두운 터널 끝에서 밝게 빛나는 한 줄기 빛을 바라보는 모습을 상상해 보세요.',
      soundAlike: '폴짝 뛰는 \'hop\'과 발음이 비슷하죠? 기뻐서 폴짝 뛸 만한 좋은 일을 기대하는 마음입니다.',
      context: '주로 미래에 일어날 긍정적인 사건이나 변화를 간절히 원할 때 사용합니다.',
      synonymAntonym: 'wish나 desire와 비슷하지만, despair와는 정반대의 감정 상태를 나타냅니다.',
    }),
    {
      definition: 'a feeling of expectation and desire for a particular thing to happen',
      synonyms: ['aspiration', 'expectation', 'optimism'],
      antonyms: ['despair', 'pessimism', 'hopelessness'],
      exampleSentences: [
        { en: 'The charity organization brings a sense of future possibility to children in need.', ko: '그 자선 단체는 도움이 필요한 아이들에게 미래에 대한 가능성의 희망을 가져다줍니다.' },
        { en: 'Doctors have expressed a strong belief that the patient will make a full recovery soon.', ko: '의사들은 환자가 곧 완전히 회복될 것이라는 강한 희망을 표명했습니다.' },
      ],
    }
  ),
  word('horizon', '지평선', 4, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '그리스어 \'horizein\'에서 유래했으며, 이는 \'경계를 짓다\'라는 뜻을 가지고 있어 하늘과 땅의 경계선을 의미합니다.',
      visual: '끝없이 펼쳐진 바다 끝에서 태양이 서서히 떠오르는 일출 장면을 상상해 보세요.',
      soundAlike: '발음이 \'허라이즌\'과 유사하므로, \'허(허허벌판) 라이(라인) 존(구역)\' 즉 벌판의 선이 보이는 구역으로 기억하세요.',
      context: '단순히 눈에 보이는 지평선뿐만 아니라 지식이나 경험의 \'범위\'를 넓힌다고 할 때도 자주 쓰입니다.',
      synonymAntonym: 'skyline과 유사한 느낌을 주며, 한계를 뜻하는 boundary와 대조하여 넓은 시야의 의미로 쓰입니다.',
    }),
    {
      definition: 'The line at which the earth\'s surface and the sky appear to meet.',
      synonyms: ['skyline', 'boundary', 'vista'],
      antonyms: ['center', 'interior', 'core'],
      exampleSentences: [
        { en: 'The sun slowly sank below the distant line where the earth meets the sky.', ko: '태양이 땅과 하늘이 만나는 먼 지평선 아래로 천천히 가라앉았다.' },
        { en: 'Traveling to different countries helps to broaden your intellectual perspective and outlook.', ko: '여러 나라를 여행하는 것은 당신의 지적 지평과 관점을 넓히는 데 도움이 된다.' },
      ],
    }
  ),
  word('horn', '뿔', 8, 'noun',
    ['꼬리', '날개', '발톱', '부리', '지느러미', '가죽', '깃털', '비늘', '발굽', '수염'],
    tips({
      etymology: '인도유럽어 어근 \'ker-\'에서 유래하여 \'머리\'나 \'뿔\'을 뜻하는 라틴어 \'cornu\'와 연결됩니다.',
      visual: '사슴이나 코뿔소 머리 위에 솟아오른 딱딱하고 뾰족한 원뿔 모양을 상상해 보세요.',
      soundAlike: '자동차 \'경적\' 소리인 \'혼\'을 떠올리면 소리가 나는 도구이자 동물의 부위임을 쉽게 기억할 수 있습니다.',
      context: '동물의 신체 부위뿐만 아니라 트럼펫 같은 금관 악기나 자동차 경적을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'antler는 사슴의 가지뿔을 뜻하며, 반대로 평평한 표면을 뜻하는 flat surface와 대조될 수 있습니다.',
    }),
    {
      definition: 'A hard, permanent, pointed projection growing in pairs on the heads of certain mammals.',
      synonyms: ['antler', 'tusk', 'spike'],
      antonyms: ['depression', 'hollow', 'indentation'],
      exampleSentences: [
        { en: 'The majestic bull charged forward with its sharp head protrusions lowered.', ko: '위엄 있는 황소가 날카로운 뿔을 낮게 세우고 앞으로 돌진했습니다.' },
        { en: 'Ancient warriors used a hollowed animal casing to signal their troops during battle.', ko: '고대 전사들은 전투 중 군대에게 신호를 보내기 위해 속이 빈 동물 뿔을 사용했습니다.' },
      ],
    }
  ),
  word('horror', '공포', 5, 'noun',
    ['기쁨', '평화', '용기', '희망', '지루함', '친절', '호기심', '성공', '안정', '신뢰'],
    tips({
      etymology: '라틴어 horrere에서 유래되었으며, 이는 공포로 인해 몸서리치거나 털이 곤두서는 것을 의미합니다.',
      visual: '어두운 밤, 낡은 저택의 문이 끼익 소리를 내며 열릴 때 느끼는 소름 끼치는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'허러\'와 비슷하므로, 무서운 것을 보고 \'허걱\' 하고 놀라는 소리와 연결하면 쉽습니다.',
      context: '주로 영화 장르나 소설에서 등골이 오싹해지는 무서운 감정을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '유사한 단어로는 terror가 있으며, 반대되는 평온한 상태는 calm으로 표현할 수 있습니다.',
    }),
    {
      definition: 'An intense feeling of fear, shock, or disgust caused by something extremely unpleasant.',
      synonyms: ['terror', 'dread', 'fright'],
      antonyms: ['delight', 'satisfaction', 'calm'],
      exampleSentences: [
        { en: 'The audience gasped in pure shock as the monster appeared on the screen.', ko: '괴물이 화면에 나타나자 관객들은 순수한 공포에 질려 숨을 헐떡였습니다.' },
        { en: 'She watched the news of the natural disaster with a sense of deep disbelief and sadness.', ko: '그녀는 깊은 공포와 슬픔을 느끼며 자연재해 소식을 지켜보았습니다.' },
      ],
    }
  ),
  word('hospital', '병원', 3, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '라틴어 \'hospes(손님)\'에서 유래하여 손님을 대접하고 돌보는 장소라는 의미를 담고 있습니다.',
      visual: '흰 가운을 입은 의사와 간호사, 그리고 건물 옥상에 그려진 커다란 붉은 십자가를 상상해 보세요.',
      soundAlike: '\'하스피털\' 발음이 \'아플 때 가야 할 터\'와 비슷하게 들린다고 생각하면 기억하기 쉽습니다.',
      context: '응급 상황이나 정기 검진을 위해 방문하는 의료 시설을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '진료소나 요양원과 비슷한 의미를 가지며, 집이나 야외와는 대조적인 공간입니다.',
    }),
    {
      definition: 'An institution providing medical and surgical treatment and nursing care for sick or injured people.',
      synonyms: ['clinic', 'infirmary', 'sanatorium'],
      antonyms: ['home', 'wilderness', 'outdoors'],
      exampleSentences: [
        { en: 'The ambulance rushed the patient to the nearest medical facility for emergency surgery.', ko: '구급차는 응급 수술을 위해 환자를 가장 가까운 의료 시설로 급히 이송했습니다.' },
        { en: 'Visiting hours at this healthcare center are restricted to the afternoon.', ko: '이 의료 센터의 면회 시간은 오후로 제한되어 있습니다.' },
      ],
    }
  ),
  word('host', '주인', 6, 'noun',
    ['손님', '관객', '직원', '노예', '환자', '비서', '학생', '청중', '조수', '부하'],
    tips({
      etymology: '라틴어 hospes에서 유래하여 \'손님을 맞이하는 사람\'이라는 의미를 가집니다.',
      visual: '파티 입구에서 정장을 입고 사람들을 반갑게 맞이하며 안내하는 사람을 상상하세요.',
      soundAlike: 'TV 쇼의 \'호스트\'가 마이크를 잡고 프로그램을 진행하는 모습을 떠올리면 쉽습니다.',
      context: '주로 행사, 파티, 또는 토크쇼를 주최하고 이끄는 사람을 지칭할 때 사용됩니다.',
      synonymAntonym: '손님을 뜻하는 guest와는 정반대의 입장에 있는 사람을 가리킵니다.',
    }),
    {
      definition: 'A person who receives or entertains other people as guests.',
      synonyms: ['presenter', 'master of ceremonies', 'proprietor'],
      antonyms: ['guest', 'visitor', 'invitee'],
      exampleSentences: [
        { en: 'The generous man acted as a gracious entertainer for the charity gala.', ko: '그 관대한 남자는 자선 행사를 위해 품격 있는 주최자 역할을 했습니다.' },
        { en: 'Our local community center will organize the international food festival next month.', ko: '우리 지역 커뮤니티 센터가 다음 달에 국제 음식 축제를 주최할 예정입니다.' },
      ],
    }
  ),
];
