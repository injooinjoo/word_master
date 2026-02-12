import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch56: VocabItem[] = [
  word('rest', '휴식', 4, 'noun',
    ['노동', '활동', '긴장', '소음', '속도', '압박', '경쟁', '피로', '업무', '운동'],
    tips({
      etymology: '고대 영어 ræst에서 유래하여 \'멈춤\'이나 \'잠\'이라는 의미를 담고 있습니다.',
      visual: '힘든 하루를 마치고 편안한 소파에 깊숙이 몸을 맡긴 채 눈을 감고 있는 모습을 상상하세요.',
      soundAlike: '레스토랑(Restaurant)에 가서 맛있는 음식을 먹으며 쉬는(rest) 상황을 연상해 보세요.',
      context: '격렬한 운동이나 집중적인 업무 후에 신체적, 정신적 에너지를 회복하기 위해 반드시 필요한 시간입니다.',
      synonymAntonym: '활력을 되찾는 break와 비슷하지만, 끊임없이 움직이는 activity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A period of time in which you relax, sleep, or stop an activity to recover strength.',
      synonyms: ['repose', 'relaxation', 'leisure'],
      antonyms: ['exertion', 'labor', 'agitation'],
      exampleSentences: [
        { en: 'The doctor advised the patient to get plenty of sleep and quiet recovery time at home.', ko: '의사는 환자에게 집에서 충분한 수면과 조용한 회복 시간을 가질 것을 권고했습니다.' },
        { en: 'After hiking for five hours, the group decided to take a short break by the waterfall.', ko: '5시간 동안 등산을 한 후, 일행은 폭포 옆에서 짧은 휴식을 취하기로 결정했습니다.' },
      ],
    }
  ),
  word('restaurant', '요리점', 1, 'noun',
    ['도서관', '박물관', '정거장', '운동장', '우체국', '은행', '병원', '약국', '공원', '학교'],
    tips({
      etymology: '프랑스어 \'restaurer(회복시키다)\'에서 유래하여, 기력을 회복하기 위해 음식을 먹는 곳을 뜻합니다.',
      visual: '멋진 간판이 걸린 건물 안에서 사람들이 테이블에 앉아 스테이크나 파스타를 먹는 모습을 상상하세요.',
      soundAlike: '\'레스토랑\'이라는 외래어로 이미 익숙하므로, 끝의 \'t\' 발음을 살짝 멈추듯 발음해 보세요.',
      context: '주로 외식을 하거나 특별한 기념일에 가족, 친구들과 함께 방문하는 장소를 말할 때 쓰입니다.',
      synonymAntonym: '음식을 파는 곳인 eatery와 유사하며, 집에서 먹는 home-cooked meal과는 대조적인 개념입니다.',
    }),
    {
      definition: 'A place where people pay to sit and eat meals that are cooked and served on the premises.',
      synonyms: ['eatery', 'diner', 'bistro'],
      antonyms: ['home', 'kitchen', 'residence'],
      exampleSentences: [
        { en: 'We decided to have dinner at a small Italian place downtown.', ko: '우리는 시내에 있는 작은 이탈리아 식당에서 저녁을 먹기로 결정했습니다.' },
        { en: 'The waiter showed us to a table near the window.', ko: '웨이터가 우리를 창가 쪽 테이블로 안내해 주었습니다.' },
      ],
    }
  ),
  word('restore', '반환하다', 5, 'verb',
    ['파괴하다', '무시하다', '방치하다', '훼손하다', '거절하다', '소비하다', '연기하다', '중단하다', '포기하다', '망가뜨리다'],
    tips({
      etymology: '접두사 re-(다시)와 store(세우다/두다)가 결합하여 원래의 상태로 다시 돌려놓는다는 의미를 가집니다.',
      visual: '오래된 낡은 그림을 전문가가 조심스럽게 붓질하여 새것처럼 고치는 장면을 상상해 보세요.',
      soundAlike: '리(re)스토어(store) - 가게(store)를 다시(re) 수리해서 문을 여는 모습을 떠올리면 쉽습니다.',
      context: '문화재 복원이나 건강 회복, 혹은 컴퓨터 시스템을 이전 상태로 되돌릴 때 자주 쓰입니다.',
      synonymAntonym: '유의어인 repair는 고치는 것에 집중하고, 반의어인 damage는 상태를 악화시키는 것을 뜻합니다.',
    }),
    {
      definition: 'To bring back to a former, original, or normal condition, or to return something to its rightful owner.',
      synonyms: ['reinstate', 'refurbish', 'rehabilitate'],
      antonyms: ['damage', 'destroy', 'corrupt'],
      exampleSentences: [
        { en: 'The government plans to return the stolen artifacts and bring them back to their original museum.', ko: '정부는 도난당한 유물들을 반환하고 원래의 박물관으로 복구할 계획입니다.' },
        { en: 'A good night\'s sleep will help you feel energetic and healthy again after a long day.', ko: '밤에 푹 자는 것은 긴 하루 끝에 기운과 건강을 회복하는 데 도움이 될 것입니다.' },
      ],
    }
  ),
  word('restrain', '제지하다', 8, 'verb',
    ['적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다'],
    tips({
      etymology: '라틴어 \'re-\'(뒤로)와 \'stringere\'(단단히 묶다)가 합쳐져 뒤로 잡아당겨 묶어두는 이미지를 떠올리세요.',
      visual: '날뛰는 야생마를 밧줄로 꽉 붙잡아 움직이지 못하게 하는 카우보이의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'리스테인\'과 비슷하므로, \'리(다시) 스테이(머물게)\' 하도록 억제한다고 기억하세요.',
      context: '감정을 억누르거나 물리적인 움직임을 막아야 하는 상황에서 주로 사용됩니다.',
      synonymAntonym: '자유롭게 풀어주는 release나 유도하는 encourage와 반대되는 강한 억제력을 의미합니다.',
    }),
    {
      definition: 'to prevent someone or something from doing something; to keep under control or within limits',
      synonyms: ['curb', 'repress', 'constrain'],
      antonyms: ['liberate', 'release', 'encourage'],
      exampleSentences: [
        { en: 'The security guards had to use force to keep the intruder from entering the building.', ko: '보안 요원들은 침입자가 건물에 들어오는 것을 제지하기 위해 물리력을 사용해야 했다.' },
        { en: 'She struggled to hold back her anger during the heated argument with her boss.', ko: '그녀는 상사와의 격렬한 논쟁 중에 화를 참으려고 애썼다.' },
      ],
    }
  ),
  word('restrict', '제한하다', 9, 'verb',
    ['확장하다', '허용하다', '방치하다', '촉진하다', '해방하다', '공개하다', '연장하다', '분배하다', '무시하다', '장려하다'],
    tips({
      etymology: '라틴어 \'re-(뒤로)\'와 \'stringere(팽팽하게 당기다)\'가 합쳐져, 뒤로 잡아당겨 묶어두는 이미지를 떠올려 보세요.',
      visual: '출입 금지 구역에 쳐진 노란색 테이프나 울타리가 사람들의 이동을 막고 있는 장면을 상상하세요.',
      soundAlike: '\'리스(lease)를 트(트다)\'라고 연상하여, 계약 기간을 정해 사용 범위를 묶어두는 상황으로 기억해 보세요.',
      context: '주로 법규, 예산, 식단 조절처럼 자유로운 활동이나 양을 일정 범위 내로 묶어둘 때 자주 쓰입니다.',
      synonymAntonym: '자유를 주는 permit이나 expand와 반대되는 개념으로, 꽉 조이는 limit과 결을 같이 합니다.',
    }),
    {
      definition: 'to put a limit on the amount, size, or range of something or to keep someone\'s actions within certain boundaries',
      synonyms: ['limit', 'confine', 'restrain'],
      antonyms: ['permit', 'expand', 'liberate'],
      exampleSentences: [
        { en: 'The new law aims to further limit the sale of tobacco to minors.', ko: '새로운 법안은 미성년자에 대한 담배 판매를 더욱 제한하는 것을 목표로 합니다.' },
        { en: 'Doctors advised him to keep his salt intake to a minimum for his heart health.', ko: '의사들은 그의 심장 건강을 위해 소금 섭취량을 최소한으로 제한하라고 권고했습니다.' },
      ],
    }
  ),
  word('restroom', '화장실', 2, 'noun',
    ['침실', '거실', '주방', '식당', '현관', '복도', '창고', '서재', '베란다', '지하실'],
    tips({
      etymology: '휴식을 뜻하는 rest와 방을 뜻하는 room이 합쳐져, 공공장소에서 잠시 쉬어가는 공간이라는 의미에서 유래했습니다.',
      visual: '백화점이나 영화관 벽면에 붙어 있는 남녀 성별 표시 아이콘이 그려진 문을 상상해 보세요.',
      soundAlike: '레스트(rest)는 \'쉬다\'라는 뜻입니다. 밖에서 급할 때 잠시 쉬러 들어가는 방이라고 생각하면 쉽습니다.',
      context: '미국에서는 공공장소의 화장실을 주로 restroom이라고 부르며, 가정집 화장실은 bathroom이라고 구분해 씁니다.',
      synonymAntonym: '유의어로는 lavatory나 washroom이 있으며, 반의어는 아니지만 대조적인 개인 공간으로 bedroom을 떠올릴 수 있습니다.',
    }),
    {
      definition: 'A room in a public building equipped with toilets and washbowls for use by customers or visitors.',
      synonyms: ['lavatory', 'washroom', 'bathroom'],
      antonyms: ['outdoors', 'wilderness', 'open space'],
      exampleSentences: [
        { en: 'Excuse me, could you tell me where the nearest restroom is located?', ko: '실례합니다만, 가장 가까운 화장실이 어디에 있는지 알려주실 수 있나요?' },
        { en: 'The restaurant maintains a very clean and modern restroom for its guests.', ko: '그 식당은 손님들을 위해 매우 깨끗하고 현대적인 화장실을 유지하고 있습니다.' },
      ],
    }
  ),
  word('result', '결과', 6, 'noun',
    ['원인', '과정', '시작', '동기', '계획', '이유', '배경', '수단', '방법', '의도'],
    tips({
      etymology: '라틴어 \'resultare\'에서 유래했으며, \'뒤로 튀어 오르다\'라는 뜻이 어떤 행동 뒤에 따라오는 결실로 변했습니다.',
      visual: '시험지 하단에 적힌 최종 점수나 실험 끝에 나온 비커 속의 결과물을 상상해 보세요.',
      soundAlike: '리절트(Result) - \'이 절(Result)차의 끝\'이라고 소리 내어 읽으며 마지막 단계를 떠올려 보세요.',
      context: '주로 연구, 시험, 투표 또는 어떤 사건의 최종적인 상태를 설명할 때 사용됩니다.',
      synonymAntonym: 'Outcome과 유의어이며, 모든 일의 시작점인 Cause와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The final consequence or outcome of a particular action, process, or situation.',
      synonyms: ['outcome', 'consequence', 'effect'],
      antonyms: ['cause', 'origin', 'source'],
      exampleSentences: [
        { en: 'The final score was a direct outcome of the team\'s hard work during the season.', ko: '최종 점수는 시즌 동안 팀이 기울인 노력의 직접적인 결과였습니다.' },
        { en: 'Scientists are still waiting for the data to confirm the success of the experiment.', ko: '과학자들은 실험의 성공을 확인하기 위한 데이터 결과를 여전히 기다리고 있습니다.' },
      ],
    }
  ),
  word('resume', '다시', 10, 'noun',
    ['중단', '포기', '삭제', '거절', '연기', '실패', '종료', '지연', '무시', '파괴'],
    tips({
      etymology: '라틴어 \'resumere\'에서 유래했으며, \'re(다시)\'와 \'sumere(취하다)\'가 결합되어 중단된 것을 다시 시작한다는 의미를 가집니다.',
      visual: '비디오 재생 중 일시정지 버튼을 눌렀다가 다시 재생 버튼(▶)을 누르는 장면을 상상해 보세요.',
      soundAlike: '\'리줌\'이라고 발음하며, \'리듬\'을 다시 타기 시작한다고 연상하면 기억하기 쉽습니다.',
      context: '회의나 경기가 잠시 멈췄다가 다시 진행될 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'restart와 유사한 의미를 지니며, 중단을 뜻하는 halt나 suspend와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To begin again or continue after a pause or interruption.',
      synonyms: ['restart', 'recommence', 'reopen'],
      antonyms: ['suspend', 'halt', 'cease'],
      exampleSentences: [
        { en: 'The committee will resume its deliberations tomorrow morning at nine.', ko: '위원회는 내일 오전 9시에 심의를 재개할 것입니다.' },
        { en: 'Normal service is expected to resume as soon as the repairs are complete.', ko: '수리가 완료되는 대로 정상 서비스가 다시 시작될 것으로 예상됩니다.' },
      ],
    }
  ),
  word('retail', '소매', 8, 'noun',
    ['도매', '유통', '제조', '수출', '수입', '물류', '창고', '할인', '구매', '판매'],
    tips({
      etymology: '프랑스어 \'retailler(다시 자르다)\'에서 유래하여, 큰 덩어리를 작게 나누어 파는 방식을 의미합니다.',
      visual: '대형 마트의 진열대에서 소비자가 물건을 하나씩 집어 드는 모습을 상상하세요.',
      soundAlike: '\'리테일\'은 \'다시(re) 꼬리(tail)를 자르듯\' 물건을 소량으로 나누어 파는 느낌입니다.',
      context: '백화점, 편의점, 온라인 쇼핑몰 등 일반 소비자를 직접 만나는 모든 상업 활동에 쓰입니다.',
      synonymAntonym: '도매를 뜻하는 wholesale과 반대되는 개념으로, 최종 소비자에게 판매하는 단계입니다.',
    }),
    {
      definition: 'The sale of goods to the public in relatively small quantities for use or consumption rather than for resale.',
      synonyms: ['merchandising', 'selling', 'commerce'],
      antonyms: ['wholesale', 'manufacturing', 'production'],
      exampleSentences: [
        { en: 'The local shop focuses on the retail of organic vegetables and fruits.', ko: '그 지역 상점은 유기농 채소와 과일의 소매 판매에 집중합니다.' },
        { en: 'Many traditional businesses are struggling due to the rapid growth of online retail.', ko: '온라인 소매업의 급격한 성장으로 인해 많은 전통적인 기업들이 어려움을 겪고 있습니다.' },
      ],
    }
  ),
  word('retain', '보유하다', 9, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '라틴어 \'re(뒤에)\'와 \'tenere(잡다)\'가 합쳐져 무언가를 뒤에 남겨두고 계속 잡고 있다는 의미에서 유래했습니다.',
      visual: '중요한 서류나 물건을 서랍 깊숙이 넣어두고 잃어버리지 않게 보관하는 모습을 상상해 보세요.',
      soundAlike: '\'리테인\'은 \'내 테두리 안에(re-tain) 계속 두다\'라고 연상하면 기억하기 쉽습니다.',
      context: '주로 권리, 기억, 수분, 또는 직원을 계속 고용하거나 유지할 때 자주 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'keep과 비슷하지만 더 공식적인 느낌이며, 버리거나 포기하는 discard와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To continue to have something or keep it in one\'s possession or use.',
      synonyms: ['maintain', 'preserve', 'keep'],
      antonyms: ['lose', 'discard', 'release'],
      exampleSentences: [
        { en: 'The company struggled to find ways to keep and support its most talented employees.', ko: '그 회사는 가장 유능한 직원들을 계속 보유하고 지원할 방법을 찾기 위해 애썼습니다.' },
        { en: 'This ancient soil can hold a significant amount of moisture even during the dry season.', ko: '이 고대 토양은 건기 동안에도 상당한 양의 수분을 머금고 있을 수 있습니다.' },
      ],
    }
  ),
  word('retire', '퇴직하다', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '프랑스어 \'retirer\'에서 유래했으며, \'re(뒤로)\'와 \'tirer(끌다)\'가 합쳐져 하던 일에서 물러난다는 의미를 가집니다.',
      visual: '오랫동안 일하던 사무실 책상을 정리하고 짐을 챙겨 문 밖으로 나가는 노신사의 뒷모습을 상상해 보세요.',
      soundAlike: '자동차 바퀴인 \'tire\'를 다시(re) 갈아 끼우듯, 인생의 다음 단계를 위해 기존의 바퀴를 내려놓는 장면을 연상하세요.',
      context: '주로 일정 연령에 도달하여 직장 생활을 마무리할 때 쓰이지만, 운동선수가 현역에서 물러날 때도 자주 사용됩니다.',
      synonymAntonym: '일을 그만두는 resign과 비슷하지만, 활동을 멈추는 것과 계속하는 continue는 정반대의 개념입니다.',
    }),
    {
      definition: 'To leave one\'s job and cease to work, typically upon reaching a certain age or due to health reasons.',
      synonyms: ['resign', 'step down', 'withdraw'],
      antonyms: ['work', 'continue', 'remain'],
      exampleSentences: [
        { en: 'My father plans to leave his position at the bank and move to the countryside next year.', ko: '우리 아버지는 내년에 은행직을 그만두고 시골로 이사할 계획이시다.' },
        { en: 'The legendary professional basketball player announced he would stop competing after this season.', ko: '그 전설적인 프로 농구 선수는 이번 시즌이 끝나면 은퇴하겠다고 발표했다.' },
      ],
    }
  ),
  word('retreat', '후퇴', 10, 'noun',
    ['전진', '공격', '확장', '돌격', '승리', '정복', '추격', '점령', '포위', '돌파'],
    tips({
      etymology: '접두사 re-(뒤로)와 어근 treat(끌다)가 합쳐져 뒤로 물러난다는 의미를 형성합니다.',
      visual: '전쟁터에서 군대나 병사들이 깃발을 내리고 뒤로 뛰어가는 급박한 뒷모습을 상상해 보세요.',
      soundAlike: '리트리트(retreat)는 \'뒤로(re) 트리(tree) 뒤로 숨다\'라고 연상하면 쉽습니다.',
      context: '군사적인 후퇴뿐만 아니라 조용한 곳으로 떠나는 휴양이나 피난처라는 의미로도 자주 쓰입니다.',
      synonymAntonym: 'withdrawal과 유의어 관계이며, 정반대인 advance와 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'the act of moving back or withdrawing from a position or situation, especially because it is dangerous or difficult',
      synonyms: ['withdrawal', 'recession', 'evacuation'],
      antonyms: ['advance', 'progression', 'confrontation'],
      exampleSentences: [
        { en: 'The army was forced to make a hasty withdrawal after the enemy launched a surprise counterattack.', ko: '적군이 기습 반격을 가하자 군대는 서둘러 후퇴할 수밖에 없었습니다.' },
        { en: 'The mountain cabin served as a peaceful sanctuary away from the noise of the city.', ko: '그 산장은 도시의 소음에서 벗어난 평화로운 휴양지 역할을 했습니다.' },
      ],
    }
  ),
  word('return', '돌아가다', 3, 'noun',
    ['출발', '정지', '전진', '상승', '하락', '소멸', '확장', '축소', '거부', '지연'],
    tips({
      etymology: '접두사 re-(다시)와 turn(돌다)이 결합하여 원래의 자리나 상태로 다시 돌아오는 것을 의미합니다.',
      visual: '부메랑을 던졌을 때 곡선을 그리며 다시 내 손으로 돌아오는 모습을 상상해 보세요.',
      soundAlike: '\'리턴\'은 테니스나 탁구에서 상대방이 보낸 공을 다시 되돌려 보내는 상황을 떠올리면 쉽습니다.',
      context: '여행을 마치고 집으로 돌아오거나, 빌린 물건을 주인에게 다시 돌려줄 때 주로 사용됩니다.',
      synonymAntonym: 'back과 유사하지만 더 공식적인 느낌이며, 떠남을 뜻하는 departure와 반대되는 개념입니다.',
    }),
    {
      definition: 'The act of coming back to a place or condition that someone or something was in before.',
      synonyms: ['reappearance', 'restoration', 'recovery'],
      antonyms: ['departure', 'exit', 'disappearance'],
      exampleSentences: [
        { en: 'The unexpected return of the hero brought great joy to the entire village.', ko: '영웅의 예상치 못한 귀환은 마을 전체에 큰 기쁨을 가져다주었습니다.' },
        { en: 'Investors are always looking for a high rate of return on their financial assets.', ko: '투자자들은 항상 자신들의 금융 자산에 대한 높은 수익률을 기대합니다.' },
      ],
    }
  ),
  word('reveal', '나타내다', 4, 'verb',
    ['숨기다', '보존하다', '억제하다', '무시하다', '왜곡하다', '망설이다', '거절하다', '포기하다', '방해하다', '침묵하다'],
    tips({
      etymology: '라틴어 \'revelare\'에서 유래했으며, \'re-\'(반대)와 \'velum\'(베일)이 합쳐져 \'베일을 벗기다\'라는 의미를 가집니다.',
      visual: '마술사가 공연 마지막에 검은 천을 걷어내며 숨겨진 토끼를 보여주는 장면을 상상해 보세요.',
      soundAlike: '\'리빌\' 발음이 \'입을\' 벌려 비밀을 말하는 것과 비슷하다고 생각하면 기억하기 쉽습니다.',
      context: '뉴스에서 새로운 증거가 발견되거나, 영화의 반전이 공개될 때 자주 사용되는 표현입니다.',
      synonymAntonym: '감추어져 있던 것을 보여주는 disclose와 반대로 덮어버리는 conceal을 함께 기억하세요.',
    }),
    {
      definition: 'to make previously unknown or secret information known to others',
      synonyms: ['disclose', 'unveil', 'expose'],
      antonyms: ['conceal', 'hide', 'cover'],
      exampleSentences: [
        { en: 'The investigation will eventually disclose the truth behind the mysterious disappearance.', ko: '조사는 결국 그 신비로운 실종 사건 뒤에 숨겨진 진실을 밝혀낼 것입니다.' },
        { en: 'She lifted the velvet cloth to show the masterpiece hidden underneath to the audience.', ko: '그녀는 청중들에게 아래에 숨겨진 걸작을 보여주기 위해 벨벳 천을 들어 올렸습니다.' },
      ],
    }
  ),
  word('revenge', '복수', 8, 'noun',
    ['용서', '화해', '보상', '친절', '자비', '망각', '인내', '평화', '우정', '협력'],
    tips({
      etymology: '라틴어 \'revindicare\'에서 유래했으며, \'re-(다시)\'와 \'vindicare(주장하다/처벌하다)\'가 합쳐져 되갚아준다는 의미가 되었습니다.',
      visual: '영화 \'어벤져스(Avengers)\'의 멤버들이 누군가의 피해를 되갚아주기 위해 모인 장면을 상상해 보세요.',
      soundAlike: '\'리벤지\'라고 발음하며, \'이(re) 번에(ven) 지(ge)지 않고 꼭 갚아주겠다\'는 다짐을 떠올려 보세요.',
      context: '주로 누군가에게 받은 상처나 피해를 똑같이 돌려주고 싶을 때 사용하는 강한 감정의 단어입니다.',
      synonymAntonym: 'vengence와 유의어이며, 반대로 용서하고 덮어주는 forgiveness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The action of inflicting hurt or harm on someone for an injury or wrong suffered at their hands.',
      synonyms: ['vengeance', 'retribution', 'retaliation'],
      antonyms: ['forgiveness', 'pardon', 'mercy'],
      exampleSentences: [
        { en: 'He spent years plotting his cold-blooded retribution against those who betrayed him.', ko: '그는 자신을 배신한 사람들에게 냉혹한 복수를 하기 위해 수년을 계획하며 보냈다.' },
        { en: 'Seeking personal satisfaction through harm rarely brings the peace of mind one expects.', ko: '해코지를 통해 개인적인 만족을 얻으려는 행위는 기대하는 마음의 평화를 가져다주는 경우가 드물다.' },
      ],
    }
  ),
  word('reverse', '역', 9, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '라틴어 \'re-\'(뒤로)와 \'vertere\'(돌리다)가 합쳐져 반대 방향으로 돌려놓는다는 의미를 가집니다.',
      visual: '자동차가 후진 기어(R)를 넣고 뒤로 움직이는 모습을 상상하면 이해가 빠릅니다.',
      soundAlike: '리버스(reverse)는 \'뒤집었으\'와 발음이 비슷하여 상황을 뒤집는다는 느낌으로 외워보세요.',
      context: '동전의 뒷면이나 논리의 정반대 상황을 설명할 때 주로 사용되는 명사입니다.',
      synonymAntonym: 'opposite과 유사하며, 정방향을 뜻하는 forward나 front와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The opposite or contrary of something, or the back side of an object such as a coin.',
      synonyms: ['opposite', 'contrary', 'inverse'],
      antonyms: ['obverse', 'front', 'original'],
      exampleSentences: [
        { en: 'The results of the experiment were the exact opposite of what we expected, a complete reverse of our hypothesis.', ko: '실험 결과는 우리가 예상했던 것과 정반대였으며, 우리 가설과는 완전히 역전된 상황이었다.' },
        { en: 'The back of the medal shows a laurel wreath on the reverse.', ko: '그 메달의 뒷면에는 월계수 관이 새겨져 있다.' },
      ],
    }
  ),
  word('review', '재조사', 5, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '다시를 뜻하는 re와 보다를 뜻하는 view가 합쳐져 어떤 사안을 다시 꼼꼼히 훑어본다는 느낌을 줍니다.',
      visual: '서류 뭉치를 돋보기로 하나하나 다시 대조하며 체크 표시를 하는 감사관의 모습을 상상해 보세요.',
      soundAlike: '리뷰(review)라고 하면 흔히 후기를 떠올리지만, 비즈니스 상황에서는 재조사나 재검토로 쓰임을 기억하세요.',
      context: '정부나 기업에서 기존 정책의 타당성을 다시 따져볼 때 공식적인 보고서 제목으로 자주 등장합니다.',
      synonymAntonym: '꼼꼼히 살피는 inspection과 반대로 대충 훑고 지나가는 neglect를 대조하여 외우면 효과적입니다.',
    }),
    {
      definition: 'A formal assessment or examination of something with the possibility or intention of instituting change if necessary.',
      synonyms: ['re-examination', 'inspection', 'scrutiny'],
      antonyms: ['neglect', 'oversight', 'ignorance'],
      exampleSentences: [
        { en: 'The committee conducted a thorough judicial assessment of the case to ensure no errors were made.', ko: '위원회는 오류가 없음을 보장하기 위해 그 사건에 대한 철저한 사법적 재조사를 실시했습니다.' },
        { en: 'A comprehensive evaluation of the safety protocols is scheduled for next Monday.', ko: '안전 규정에 대한 포괄적인 재검토가 다음 주 월요일로 예정되어 있습니다.' },
      ],
    }
  ),
  word('revise', '교정하다', 6, 'verb',
    ['유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다'],
    tips({
      etymology: '라틴어 \'re(다시)\'와 \'visere(보다)\'가 합쳐져 \'다시 검토하다\'라는 의미에서 유래되었습니다.',
      visual: '빨간 펜을 들고 원고의 틀린 부분을 고치거나 내용을 덧붙이는 편집자의 모습을 상상해 보세요.',
      soundAlike: '\'리바이스(Levis)\' 청바지 로고를 \'다시(re) 봐(vise)\'서 디자인을 수정한다고 생각하면 쉽습니다.',
      context: '시험 공부를 할 때 노트를 다시 훑어보거나, 초안을 작성한 후 내용을 다듬을 때 주로 사용합니다.',
      synonymAntonym: '수정한다는 뜻의 amend와 반대로 그대로 둔다는 뜻의 maintain을 함께 기억하세요.',
    }),
    {
      definition: 'to examine and improve a piece of writing or a plan by making changes or corrections',
      synonyms: ['amend', 'modify', 'edit'],
      antonyms: ['preserve', 'maintain', 'ignore'],
      exampleSentences: [
        { en: 'The author had to change several chapters to improve the flow of the story.', ko: '작가는 이야기의 흐름을 개선하기 위해 여러 장을 교정해야 했습니다.' },
        { en: 'Students are encouraged to review their notes thoroughly before the final exam.', ko: '학생들은 기말고사 전에 노트를 철저히 검토하고 수정하도록 권장됩니다.' },
      ],
    }
  ),
  word('revive', '소생하다', 7, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '라틴어 \'re(다시)\'와 \'vivere(살다)\'가 결합되어 죽어가는 것을 다시 살려낸다는 의미를 가집니다.',
      visual: '시든 꽃에 물을 주자 줄기가 다시 꼿꼿하게 일어서는 생명력 넘치는 장면을 상상해 보세요.',
      soundAlike: '\'리바이브\'는 농구의 \'리바운드\'처럼 공을 다시 잡아 기회를 살리는 느낌과 비슷합니다.',
      context: '주로 쓰러진 사람을 깨우거나, 오래된 전통이나 유행을 다시 부활시킬 때 자주 사용됩니다.',
      synonymAntonym: '생기를 되찾는 restore와 에너지를 뺏는 drain을 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to bring something back to life, health, existence, or use after it has been inactive or unconscious',
      synonyms: ['resuscitate', 'restore', 'rejuvenate'],
      antonyms: ['extinguish', 'destroy', 'kill'],
      exampleSentences: [
        { en: 'The paramedics worked tirelessly to restore the patient\'s heartbeat and bring them back to consciousness.', ko: '구급대원들은 환자의 심장 박동을 회복시키고 의식을 되찾게 하기 위해 끊임없이 노력했습니다.' },
        { en: 'The local community launched a project to bring back the traditional folk festival that had been forgotten for decades.', ko: '지역 사회는 수십 년 동안 잊혀졌던 전통 민속 축제를 되살리기 위한 프로젝트를 시작했습니다.' },
      ],
    }
  ),
  word('revolution', '혁명', 4, 'noun',
    ['진화', '보존', '안정', '정체', '개혁', '전통', '질서', '복종', '평화', '타협'],
    tips({
      etymology: '라틴어 \'revolvere\'에서 유래하여 \'다시(re) 돌다(volvere)\'라는 의미가 체제나 질서를 완전히 뒤집는 큰 변화로 확장되었습니다.',
      visual: '낡은 깃발이 내려가고 새로운 깃발이 높이 솟아오르는 광장 한복판의 뜨거운 열기를 상상해 보세요.',
      soundAlike: '\'레볼루션\'은 \'내 볼(cheek) 유신\'과 비슷하게 들립니다. 볼에 묻은 낡은 먼지를 털어내고 새롭게 단장하는 변화를 떠올려 보세요.',
      context: '정치적인 체제 전복뿐만 아니라 산업 혁명이나 디지털 혁명처럼 기술적, 사회적 패러다임이 완전히 바뀌는 상황에 쓰입니다.',
      synonymAntonym: '기존의 틀을 깨는 uprising과 유사하며, 변화 없이 그대로 유지되는 stagnation과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sudden, complete, or radical change in a political system or a fundamental shift in the way something is done or thought about.',
      synonyms: ['uprising', 'rebellion', 'transformation'],
      antonyms: ['stagnation', 'stability', 'continuity'],
      exampleSentences: [
        { en: 'The invention of the internet triggered a massive digital transformation across the globe.', ko: '인터넷의 발명은 전 세계적으로 거대한 디지털 혁명을 촉발했습니다.' },
        { en: 'Citizens gathered in the capital to demand a complete overhaul of the corrupt government structure.', ko: '시민들은 부패한 정부 구조의 완전한 혁명을 요구하기 위해 수도에 모였습니다.' },
      ],
    }
  ),
  word('reward', '보수', 5, 'noun',
    ['처벌', '손실', '벌금', '위험', '부채', '세금', '지출', '과태료', '희생', '결핍'],
    tips({
      etymology: 're(다시)와 ward(지켜보다/돌려주다)가 합쳐져 노력에 대해 다시 돌려받는 대가를 의미합니다.',
      visual: '강아지가 훈련을 잘 마친 뒤 주인이 주는 맛있는 간식을 받아먹는 모습을 상상하세요.',
      soundAlike: '발음이 \'리워드\'로 들리는데, \'나를 위(ward)해 다시(re) 주는 선물\'이라고 기억하면 쉽습니다.',
      context: '직장인의 월급이나 학생의 성적 장학금처럼 긍정적인 행동의 결과로 주어지는 보상을 뜻합니다.',
      synonymAntonym: '유의어인 prize는 상금의 느낌이 강하고, 반의어인 penalty는 잘못에 대한 대가입니다.',
    }),
    {
      definition: 'something given or received in return for a service, merit, or hardship',
      synonyms: ['compensation', 'recompense', 'payment'],
      antonyms: ['punishment', 'penalty', 'forfeiture'],
      exampleSentences: [
        { en: 'The company offered a generous financial bonus as a recognition for her hard work.', ko: '회사는 그녀의 노고에 대한 인정으로 후한 금전적 보수를 제공했습니다.' },
        { en: 'Helping others often brings a sense of inner satisfaction that is its own prize.', ko: '타인을 돕는 것은 종종 그 자체로 보상이 되는 내적 만족감을 가져다줍니다.' },
      ],
    }
  ),
  word('rhythm', '율동', 6, 'noun',
    ['멜로디', '화음', '박자', '소음', '침묵', '진동', '속도', '가사', '음조', '박동'],
    tips({
      etymology: '그리스어 \'rhythmos\'에서 유래되었으며, \'흐르다\'라는 뜻의 \'rhein\'과 연결되어 일정한 흐름을 뜻합니다.',
      visual: '심장 박동 그래프가 일정한 간격으로 위아래로 움직이는 모습을 상상해 보세요.',
      soundAlike: '\'리듬\'이라고 발음하며, 춤을 출 때 몸을 흔드는 규칙적인 움직임을 떠올리면 쉽습니다.',
      context: '음악뿐만 아니라 일상생활의 규칙적인 습관이나 생체 주기를 설명할 때도 자주 쓰입니다.',
      synonymAntonym: 'beat나 tempo와 비슷하지만, 정반대로 아무런 규칙이 없는 상태는 chaos라고 할 수 있습니다.',
    }),
    {
      definition: 'A strong, regular, repeated pattern of movement or sound.',
      synonyms: ['beat', 'tempo', 'cadence'],
      antonyms: ['disorder', 'irregularity', 'discord'],
      exampleSentences: [
        { en: 'The dancers moved in perfect harmony with the steady drum beat.', ko: '무용수들은 일정한 드럼 비트에 맞춰 완벽한 조화를 이루며 움직였다.' },
        { en: 'Regular exercise helps you maintain a healthy biological cycle for better sleep.', ko: '규칙적인 운동은 더 나은 수면을 위해 건강한 생체 주기를 유지하도록 도와준다.' },
      ],
    }
  ),
  word('rice', '쌀', 7, 'noun',
    ['보리', '밀가루', '옥수수', '감자', '고구마', '콩', '메밀', '수수', '귀리', '호밀'],
    tips({
      etymology: '고대 그리스어 \'oryza\'에서 유래하여 라틴어 \'oryza\'를 거쳐 현대 영어로 정착되었습니다.',
      visual: '논에서 황금빛으로 익어가는 벼 이삭과 밥그릇에 가득 담긴 하얀 쌀밥을 상상해 보세요.',
      soundAlike: '\'라이스\'라고 발음하며, 비슷한 발음인 \'rise(오르다)\'와 구분하여 \'쌀을 먹고 힘이 솟아오른다\'고 연상하세요.',
      context: '전 세계 인구의 절반 이상이 주식으로 삼는 가장 중요한 곡물 중 하나입니다.',
      synonymAntonym: '곡물을 뜻하는 grain과 유사하며, 가공된 형태인 meal과도 관련이 깊지만 고기류인 meat와는 대조됩니다.',
    }),
    {
      definition: 'Small white or brown grains that come from a Southeast Asian plant and are used as a common food staple.',
      synonyms: ['grain', 'paddy', 'cereal'],
      antonyms: ['meat', 'vegetable', 'fruit'],
      exampleSentences: [
        { en: 'Most Asian families eat steamed grains with every meal of the day.', ko: '대부분의 아시아 가정은 매 끼니마다 찐 쌀밥을 먹습니다.' },
        { en: 'Farmers harvest the crops in late autumn to produce high-quality food for the winter.', ko: '농부들은 겨울을 위한 고품질의 식량을 생산하기 위해 늦가을에 작물을 수확합니다.' },
      ],
    }
  ),
  word('rich', '부자인', 1, 'noun',
    ['가난한', '부족한', '평범한', '검소한', '궁핍한', '단순한', '희박한', '초라한', '메마른', '부실한'],
    tips({
      etymology: '고대 영어 \'rice\'에서 유래했으며 원래 \'강력한\' 또는 \'고귀한\'이라는 뜻을 가졌습니다.',
      visual: '금화가 가득 담긴 커다란 보물 상자나 화려한 저택을 상상해 보세요.',
      soundAlike: '발음이 \'리치\'이므로 열대 과일 리치를 배불리 먹을 수 있는 부자를 떠올려 보세요.',
      context: '돈이 많은 상태뿐만 아니라 맛이 진하거나 자원이 풍부할 때도 자주 쓰입니다.',
      synonymAntonym: 'wealthy와는 친구 사이이고, poor와는 서로 반대 방향을 보고 있습니다.',
    }),
    {
      definition: 'having a great deal of money, resources, or valuable possessions',
      synonyms: ['wealthy', 'affluent', 'prosperous'],
      antonyms: ['poor', 'impoverished', 'destitute'],
      exampleSentences: [
        { en: 'The businessman became extremely wealthy after his tech startup was acquired.', ko: '그 사업가는 자신의 기술 스타트업이 인수된 후 엄청난 부자가 되었습니다.' },
        { en: 'This chocolate cake has a very deep and intense flavor that satisfies everyone.', ko: '이 초콜릿 케이크는 모든 사람을 만족시키는 매우 진하고 풍부한 맛을 가지고 있습니다.' },
      ],
    }
  ),
  word('rid', '면하게하다', 10, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '고대 노르웨이 어원인 \'rydja\'에서 유래하여 땅을 개간하거나 장애물을 치우는 행위를 의미합니다.',
      visual: '어질러진 방에서 쓰레기 봉투를 들고 필요 없는 물건들을 밖으로 내던지는 모습을 상상하세요.',
      soundAlike: '발음이 \'리드\'와 유사하므로, 나쁜 습관으로부터 나를 \'리드\'하여 벗어나게 한다고 생각해보세요.',
      context: '주로 \'get rid of\' 형태로 쓰여 원치 않는 물건, 사람, 또는 감정을 제거할 때 자주 사용됩니다.',
      synonymAntonym: '제거를 뜻하는 eliminate와 보존을 뜻하는 keep을 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to make someone or something free from an unwanted person or thing',
      synonyms: ['eliminate', 'clear', 'discard'],
      antonyms: ['keep', 'retain', 'maintain'],
      exampleSentences: [
        { en: 'The government is implementing new policies to free the city of pollution.', ko: '정부는 도시에서 오염을 없애기 위해 새로운 정책을 시행하고 있습니다.' },
        { en: 'She finally managed to clear her mind of all those stressful thoughts.', ko: '그녀는 마침내 그 모든 스트레스 쌓이는 생각들로부터 마음을 비울 수 있었습니다.' },
      ],
    }
  ),
  word('ride', '타다', 4, 'noun',
    ['걷기', '비행', '정지', '추락', '보행', '수영', '등산', '달리기', '운전', '항해'],
    tips({
      etymology: '고대 영어 \'ridan\'에서 유래하여 말이나 탈것을 타고 이동하는 행위를 뜻합니다.',
      visual: '놀이공원에서 롤러코스터를 타고 신나게 내려오는 장면을 상상해 보세요.',
      soundAlike: '자전거를 \'라이드\'한다고 할 때의 그 발음입니다.',
      context: '명사로 쓰일 때는 주로 짧은 거리의 이동이나 놀이기구를 의미합니다.',
      synonymAntonym: 'journey와 비슷하지만, 정지 상태인 standstill과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A journey made in a vehicle or on the back of an animal.',
      synonyms: ['lift', 'journey', 'trip'],
      antonyms: ['walk', 'standstill', 'stagnation'],
      exampleSentences: [
        { en: 'The bus driver gave the elderly woman a free lift to the hospital.', ko: '버스 기사는 할머니를 병원까지 무료로 태워다 주었습니다.' },
        { en: 'Children waited in a long line to experience the new roller coaster at the park.', ko: '아이들은 공원의 새로운 롤러코스터를 타기 위해 긴 줄을 서서 기다렸습니다.' },
      ],
    }
  ),
  word('ridiculous', '어리석은', 8, 'adjective',
    ['진지한', '합리적인', '엄격한', '평범한', '우아한', '지혜로운', '논리적인', '신중한', '현실적인', '공평한'],
    tips({
      etymology: '라틴어 \'ridere(웃다)\'에서 유래하여, 비웃음을 살 정도로 터무니없다는 뜻을 가집니다.',
      visual: '광대 의상을 입고 격식 있는 회의에 참석한 사람의 우스꽝스러운 모습을 상상해 보세요.',
      soundAlike: '\'리디큘러스\'는 해리포터에서 공포 대상을 웃기게 바꾸는 주문으로도 유명합니다.',
      context: '말도 안 되는 가격이나 터무니없는 변명을 들었을 때 자주 사용되는 표현입니다.',
      synonymAntonym: 'absurd와 유사하며, 반대로 이성적이고 타당할 때는 reasonable을 씁니다.',
    }),
    {
      definition: 'deserving or inviting mockery and derision; extremely silly or unreasonable',
      synonyms: ['absurd', 'ludicrous', 'preposterous'],
      antonyms: ['sensible', 'reasonable', 'logical'],
      exampleSentences: [
        { en: 'The price of this designer handbag is absolutely beyond belief.', ko: '이 디자이너 핸드백의 가격은 정말 말도 안 되게 비싸다.' },
        { en: 'He looked quite silly wearing that giant chicken costume at the wedding.', ko: '그는 결혼식에서 거대한 닭 의상을 입고 아주 우스꽝스러워 보였다.' },
      ],
    }
  ),
  word('right', '올바른', 2, 'noun',
    ['왼쪽', '틀린', '부정', '의무', '책임', '허가', '금지', '반대', '거절', '실수'],
    tips({
      etymology: '고대 영어 \'riht\'에서 유래하여 직선처럼 곧고 바르다는 의미를 담고 있습니다.',
      visual: '시험지 위에 빨간색으로 크게 그려진 동그라미(정답) 표시를 상상해 보세요.',
      soundAlike: '쓰다라는 뜻의 \'write\'와 발음이 같지만, 여기서는 \'옳다\'는 뜻임을 기억하세요.',
      context: '도덕적으로나 사실적으로 틀림이 없는 상태를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '정확하다는 뜻의 correct와 반대되는 wrong을 함께 묶어서 외우면 효과적입니다.',
    }),
    {
      definition: 'morally good, justified, or acceptable; conforming with truth or fact',
      synonyms: ['correct', 'proper', 'accurate'],
      antonyms: ['wrong', 'incorrect', 'false'],
      exampleSentences: [
        { en: 'It is important to make the ethical choice even when no one is watching.', ko: '아무도 보지 않을 때에도 윤리적으로 올바른 선택을 하는 것이 중요합니다.' },
        { en: 'The teacher confirmed that her answer to the difficult math problem was correct.', ko: '선생님은 그 어려운 수학 문제에 대한 그녀의 답이 올바르다는 것을 확인해 주었습니다.' },
      ],
    }
  ),
  word('ring', '고리', 3, 'noun',
    ['직선', '사각형', '삼각형', '모서리', '표면', '부피', '길이', '너비', '높이', '각도'],
    tips({
      etymology: '고대 영어 hring에서 유래되었으며, 이는 구부러진 것 또는 원형을 의미합니다.',
      visual: '손가락에 끼우는 둥근 반지나 열쇠를 묶어두는 둥근 금속 고리를 상상해 보세요.',
      soundAlike: '전화기가 \'링링\' 울리는 소리처럼, 둥근 종의 울림이 퍼져나가는 모양을 떠올려 보세요.',
      context: '보석류인 반지뿐만 아니라 사슬의 한 마디나 원형 경기장을 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '둥근 형태를 뜻하는 circle과 유사하며, 직선을 뜻하는 line과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small circular band, typically of precious metal, worn on a finger as ornament or a token of marriage or engagement.',
      synonyms: ['band', 'hoop', 'circle'],
      antonyms: ['line', 'strip', 'square'],
      exampleSentences: [
        { en: 'She wore a beautiful gold band on her left hand.', ko: '그녀는 왼손에 아름다운 금색 고리 모양의 반지를 끼고 있었다.' },
        { en: 'The keys were attached to a sturdy metal loop.', ko: '열쇠들은 튼튼한 금속 고리에 연결되어 있었다.' },
      ],
    }
  ),
  word('riot', '폭동', 9, 'noun',
    ['평화', '질서', '협상', '침묵', '조화', '안정', '합의', '정적', '순응', '단결'],
    tips({
      etymology: '고대 프랑스어 riote에서 유래하여 원래는 \'싸움\'이나 \'분쟁\'을 의미했습니다.',
      visual: '거리에서 수많은 사람들이 팻말을 들고 격렬하게 항의하며 혼란스러운 장면을 상상하세요.',
      soundAlike: '라이엇(riot) 발음이 \'나이엇\'과 비슷하니, 나이 든 사람들이 어지러운 세상에 화를 내는 상황을 연상해 보세요.',
      context: '주로 사회적 불만이나 정치적 이슈로 인해 대중이 통제를 벗어나 폭력을 행사할 때 사용됩니다.',
      synonymAntonym: 'uprising과 같은 유의어는 저항의 의미를 담고 있으며, peace는 그 반대인 평온한 상태를 뜻합니다.',
    }),
    {
      definition: 'a noisy, violent public disturbance caused by a group or crowd of people',
      synonyms: ['uprising', 'insurrection', 'turmoil'],
      antonyms: ['peace', 'order', 'calm'],
      exampleSentences: [
        { en: 'The government called in the national guard to suppress the violent riot in the city center.', ko: '정부는 도심의 폭력적인 폭동을 진압하기 위해 주 방위군을 소집했습니다.' },
        { en: 'Protests turned into a full-scale riot after the controversial court ruling was announced.', ko: '논란이 된 법원 판결이 발표된 후 시위는 본격적인 폭동으로 변했습니다.' },
      ],
    }
  ),
  word('rise', '올리다', 5, 'verb',
    ['떨어지다', '감소하다', '유지하다', '파괴하다', '무시하다', '지연시키다', '포기하다', '숨기다', '거절하다', '정체되다'],
    tips({
      etymology: '고대 영어 \'risan\'에서 유래하여 낮은 곳에서 높은 곳으로 움직인다는 본질적 의미를 담고 있습니다.',
      visual: '수평선 위로 태양이 서서히 떠오르는 일출 장면을 상상하면 기억하기 쉽습니다.',
      soundAlike: '\'라이즈\' 발음이 \'나이(age)가 들다\'와 비슷하게 들리는데, 키가 자라 위로 올라가는 모습을 연상해 보세요.',
      context: '물가, 온도, 태양, 혹은 지위가 위로 향할 때 주로 사용되는 동사입니다.',
      synonymAntonym: '위로 향하는 ascend와 아래로 향하는 descend를 대조하여 외우면 효과적입니다.',
    }),
    {
      definition: 'to move from a lower position to a higher one or to increase in amount or number',
      synonyms: ['ascend', 'soar', 'climb'],
      antonyms: ['fall', 'descend', 'drop'],
      exampleSentences: [
        { en: 'The sun will begin to appear above the horizon at dawn.', ko: '새벽에 태양이 지평선 위로 떠오르기 시작할 것입니다.' },
        { en: 'Global temperatures continue to increase due to environmental changes.', ko: '환경 변화로 인해 지구의 기온이 계속해서 상승하고 있습니다.' },
      ],
    }
  ),
  word('risk', '위험', 6, 'noun',
    ['안전', '보장', '확신', '이익', '혜택', '성공', '평화', '안정', '보호', '신뢰'],
    tips({
      etymology: '이탈리아어 \'risco\'에서 유래했으며, 항해 중 암초 사이를 지나는 아슬아슬한 상황을 뜻했습니다.',
      visual: '절벽 끝에 아슬아슬하게 서 있는 사람이나 도박판의 칩을 떠올려 보세요.',
      soundAlike: '\'리스크\'는 한국어에서도 \'리스크가 크다\'처럼 위험 부담의 의미로 자주 쓰입니다.',
      context: '투자나 건강 관리처럼 결과가 불확실할 때 발생하는 부정적인 가능성을 말합니다.',
      synonymAntonym: 'danger와 유사하지만, risk는 주로 선택에 따른 \'부담\'이나 \'확률\'의 뉘앙스가 강합니다.',
    }),
    {
      definition: 'the possibility that something bad or unpleasant will happen as a result of an action',
      synonyms: ['danger', 'hazard', 'peril'],
      antonyms: ['safety', 'security', 'protection'],
      exampleSentences: [
        { en: 'Smoking significantly increases the chance of developing serious health problems.', ko: '흡연은 심각한 건강 문제가 발생할 위험을 크게 높입니다.' },
        { en: 'Investors must carefully evaluate every potential loss before putting money into the market.', ko: '투자자들은 시장에 돈을 넣기 전에 모든 잠재적 위험을 신중하게 평가해야 합니다.' },
      ],
    }
  ),
  word('rival', '경쟁하다', 7, 'verb',
    ['협력하다', '포기하다', '중단하다', '동의하다', '무시하다', '보조하다', '의존하다', '관찰하다', '수용하다', '방관하다'],
    tips({
      etymology: '라틴어 rivalis에서 유래했으며, 원래 같은 강(river)을 사용하는 이웃들이 물 권리를 두고 다투던 모습에서 유래했습니다.',
      visual: '결승선을 앞두고 두 명의 육상 선수가 서로를 앞지르기 위해 전력 질주하는 모습을 상상해 보세요.',
      soundAlike: '라이벌(rival)이라는 외래어로 이미 익숙하므로, 명사뿐 아니라 \'필적하다\'라는 동사로도 쓰임을 기억하세요.',
      context: '스포츠 경기나 비즈니스 시장에서 대등한 실력을 가진 상대와 겨룰 때 주로 사용됩니다.',
      synonymAntonym: 'compete와 유사하지만, rival은 단순히 경쟁하는 것을 넘어 상대의 수준에 비등해진다는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'To be in competition with someone or something, or to be as good as someone or something else.',
      synonyms: ['compete', 'challenge', 'match'],
      antonyms: ['cooperate', 'assist', 'surrender'],
      exampleSentences: [
        { en: 'The new smartphone features a camera that can easily match or even surpass its competitors.', ko: '이 새로운 스마트폰은 경쟁사들에 쉽게 필적하거나 심지어 능가할 수 있는 카메라를 갖추고 있습니다.' },
        { en: 'No other city in the world can equal the historical beauty of Rome.', ko: '세계의 어떤 도시도 로마의 역사적인 아름다움에 비견될 수 없습니다.' },
      ],
    }
  ),
  word('road', '길', 1, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '고대 영어 \'rad\'에서 유래했으며, 이는 \'말을 타고 가다\'라는 의미의 \'ride\'와 어원이 같습니다.',
      visual: '끝없이 펼쳐진 아스팔트 위를 자동차가 달리는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'로드\'이므로, 무거운 짐을 싣는 \'load\'와 헷갈리지 않게 주의하세요.',
      context: '도시의 거리뿐만 아니라 인생의 여정이나 경로를 비유적으로 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'street나 path와 비슷하지만, 보통 도시 사이를 잇는 더 넓은 통로를 의미합니다.',
    }),
    {
      definition: 'A wide way leading from one place to another, especially one with a prepared surface which vehicles can use.',
      synonyms: ['street', 'highway', 'route'],
      antonyms: ['wilderness', 'off-road', 'dead-end'],
      exampleSentences: [
        { en: 'The long winding path leads directly to the mountain top.', ko: '길게 굽이진 길은 산 정상으로 바로 이어집니다.' },
        { en: 'Heavy snow made travel on the main highway extremely dangerous.', ko: '폭설로 인해 주요 도로에서의 주행이 매우 위험해졌습니다.' },
      ],
    }
  ),
  word('roar', '으르렁거리다', 10, 'noun',
    ['속삭임', '침묵', '미소', '걸음', '평화', '그림자', '흔적', '기억', '비밀', '노래'],
    tips({
      etymology: '고대 영어 \'rarian\'에서 유래했으며, 크고 깊은 소리를 내는 행위를 묘사합니다.',
      visual: '사자가 입을 크게 벌리고 정글이 떠나가라 소리 지르는 모습을 상상해 보세요.',
      soundAlike: '\'로어\'라고 발음할 때 목 깊은 곳에서 울리는 소리가 실제 짐승의 소리와 비슷합니다.',
      context: '주로 맹수의 울음소리나 파도, 엔진의 굉음을 표현할 때 자주 사용됩니다.',
      synonymAntonym: 'bellow나 howl과 비슷하지만, whisper나 silence와는 정반대의 개념입니다.',
    }),
    {
      definition: 'A full, deep, prolonged cry uttered by a lion or other large wild animal, or a loud deep sound of a similar character.',
      synonyms: ['bellow', 'howl', 'rumble'],
      antonyms: ['whisper', 'murmur', 'silence'],
      exampleSentences: [
        { en: 'The lion let out a terrifying sound that echoed through the entire valley.', ko: '사자가 온 계곡에 울려 퍼지는 무시무시한 포효를 내질렀다.' },
        { en: 'The sudden thunder of the jet engine startled everyone at the airport.', ko: '제트 엔진의 갑작스러운 굉음이 공항에 있던 모든 사람들을 놀라게 했다.' },
      ],
    }
  ),
  word('roast', '불에', 4, 'noun',
    ['튀김', '찜', '조림', '무침', '볶음', '전골', '편육', '숙회', '나물', '찌개'],
    tips({
      etymology: '고대 프랑스어 \'rostir\'에서 유래하여 열을 가해 익히는 조리법을 의미합니다.',
      visual: '오븐 안에서 통째로 노릇노릇하게 익어가는 커다란 고기 덩어리를 상상해 보세요.',
      soundAlike: '커피 \'로스팅\'을 떠올리면 원두를 불에 볶는 과정과 쉽게 연결됩니다.',
      context: '주로 오븐이나 직화로 고기나 채소를 굽는 요리 방식을 설명할 때 쓰입니다.',
      synonymAntonym: 'bake나 grill과 비슷하지만, 고기를 통째로 굽는 경우에 특히 자주 쓰입니다.',
    }),
    {
      definition: 'A large piece of meat that is cooked in an oven or over an open fire.',
      synonyms: ['joint', 'cut', 'fillet'],
      antonyms: ['raw meat', 'vegetable', 'liquid'],
      exampleSentences: [
        { en: 'The family gathered around the table to share a delicious beef for Sunday dinner.', ko: '가족들은 일요일 저녁 식사로 맛있는 소고기 구이 요리를 나누기 위해 식탁에 모였습니다.' },
        { en: 'She basted the chicken every thirty minutes to keep it juicy while cooking.', ko: '그녀는 요리하는 동안 육즙을 유지하기 위해 30분마다 닭 구이에 기름을 발랐습니다.' },
      ],
    }
  ),
  word('rob', '강탈하다', 5, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '독일어권 어원인 raub에서 유래되었으며, 이는 물건을 훔치거나 빼앗는 행위와 직접적으로 연결됩니다.',
      visual: '복면을 쓴 강도가 은행 금고에서 돈가방을 들고 급히 뛰어나오는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'랍\'과 비슷하므로, \'랍\'스터를 강제로 \'강탈해\' 가는 상황을 연상하면 쉽습니다.',
      context: '주로 은행, 상점, 또는 사람을 대상으로 무력을 사용하여 재물을 빼앗을 때 사용되는 범죄 관련 용어입니다.',
      synonymAntonym: 'steal은 몰래 가져가는 뉘앙스지만, 이 단어는 폭력이나 위협이 동반된 강탈의 의미가 강합니다.',
    }),
    {
      definition: 'To take property unlawfully from a person or place by force or threat of violence.',
      synonyms: ['plunder', 'loot', 'pillage'],
      antonyms: ['give', 'restore', 'protect'],
      exampleSentences: [
        { en: 'Two masked men attempted to break into the vault and take all the cash.', ko: '복면을 쓴 두 남자가 금고에 침입하여 모든 현금을 강탈하려 시도했습니다.' },
        { en: 'The witness saw the suspect threaten the clerk before fleeing with the jewelry.', ko: '목격자는 용의자가 보석을 가지고 달아나기 전 점원을 위협하는 것을 보았습니다.' },
      ],
    }
  ),
  word('rock', '바위', 2, 'noun',
    ['모래', '나무', '바다', '구름', '바람', '먼지', '풀밭', '하늘', '안개', '불꽃'],
    tips({
      etymology: '고대 프랑스어 \'roche\'에서 유래하여 단단한 지질학적 덩어리를 뜻하게 되었습니다.',
      visual: '거대한 산맥이나 해안가에 우뚝 솟은 거칠고 단단한 돌덩어리를 상상해 보세요.',
      soundAlike: '\'락\' 음악의 강렬하고 단단한 비트처럼 단단한 바위를 연상하면 쉽습니다.',
      context: '지질학이나 등산, 혹은 누군가의 든든한 버팀목을 묘사할 때 자주 등장합니다.',
      synonymAntonym: 'stone보다 규모가 큰 것을 주로 의미하며, 부드러운 진흙과는 반대되는 성질을 가집니다.',
    }),
    {
      definition: 'A large, hard natural mass of stone forming part of the earth\'s surface.',
      synonyms: ['stone', 'boulder', 'crag'],
      antonyms: ['sand', 'dust', 'liquid'],
      exampleSentences: [
        { en: 'The climbers struggled to find a firm grip on the steep face of the granite.', ko: '등반가들은 가파른 화강암 바위 표면에서 단단한 손잡이를 찾으려 애썼습니다.' },
        { en: 'Waves crashed violently against the jagged shore throughout the storm.', ko: '폭풍이 부는 동안 파도가 거친 해안가 바위에 격렬하게 부딪혔습니다.' },
      ],
    }
  ),
  word('rod', '막대', 8, 'noun',
    ['그물', '상자', '바늘', '밧줄', '바구니', '고리', '망치', '나사', '전선', '거울'],
    tips({
      etymology: '고대 영어 \'rodd\'에서 유래했으며, 원래는 나뭇가지나 가느다란 줄기를 의미했습니다.',
      visual: '낚시꾼이 긴 낚싯대를 들고 강가에 서 있는 모습을 상상해 보세요.',
      soundAlike: '\'로드(road)\'와 발음이 비슷하지만, 길(road) 대신 긴 막대기(rod)를 들고 걷는다고 생각하세요.',
      context: '낚시, 커튼 설치, 또는 기계의 회전축을 설명할 때 자주 등장하는 단어입니다.',
      synonymAntonym: '유의어인 pole이나 stick은 일상적이지만, rod는 좀 더 단단하고 곧은 형태를 강조합니다.',
    }),
    {
      definition: 'A thin, straight bar made of wood, metal, or another rigid material.',
      synonyms: ['staff', 'pole', 'stick'],
      antonyms: ['curve', 'bend', 'circle'],
      exampleSentences: [
        { en: 'The fisherman cast his line using a flexible carbon fiber fishing rod.', ko: '어부는 유연한 탄소 섬유 낚싯대를 사용하여 낚싯줄을 던졌다.' },
        { en: 'A metal rod was inserted into the wall to provide extra structural support.', ko: '추가적인 구조적 지지력을 제공하기 위해 금속 막대가 벽에 삽입되었다.' },
      ],
    }
  ),
  word('role', '역', 6, 'noun',
    ['사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보'],
    tips({
      etymology: '프랑스어 \'rôle\'에서 유래했으며, 배우가 읽던 대본 두루마리(roll)를 의미하던 것에서 맡은 임무라는 뜻으로 확장되었습니다.',
      visual: '연극 무대 위에서 특정 의상을 입고 자신의 대사를 읊는 배우의 모습을 상상해 보세요.',
      soundAlike: '바퀴가 굴러가는 \'roll\'과 발음이 같습니다. 굴러가는 바퀴처럼 사회가 돌아가게 만드는 각자의 \'역할\'이라고 기억하세요.',
      context: '직업적 책임이나 연극 속의 배역, 혹은 가족 내에서의 위치를 설명할 때 주로 사용됩니다.',
      synonymAntonym: 'part와 의미가 비슷하며, 전체적인 시스템이나 조직에서 개인이 차지하는 비중을 나타냅니다.',
    }),
    {
      definition: 'The function assumed or part played by a person or thing in a particular situation.',
      synonyms: ['part', 'function', 'capacity'],
      antonyms: ['whole', 'entirety', 'idleness'],
      exampleSentences: [
        { en: 'She played a leading part in the negotiation process and secured the deal.', ko: '그녀는 협상 과정에서 주도적인 역할을 수행하여 계약을 성사시켰습니다.' },
        { en: 'Parents have a crucial responsibility in shaping their children\'s moral values.', ko: '부모는 자녀의 도덕적 가치관을 형성하는 데 있어 중요한 역할을 합니다.' },
      ],
    }
  ),
  word('roll', '구르다', 7, 'noun',
    ['멈추다', '미끄러지다', '떨어지다', '부서지다', '날다', '헤엄치다', '던지다', '잡다', '밀다', '당기다'],
    tips({
      etymology: '라틴어 \'rota(바퀴)\'에서 유래하여 둥근 물체가 회전하며 움직이는 동작을 나타냅니다.',
      visual: '언덕 위에서 동그란 공이나 통나무가 빙글빙글 돌며 내려가는 모습을 상상하세요.',
      soundAlike: '김밥이나 롤케이크처럼 돌돌 말려 있는 음식을 떠올리면 회전하는 느낌이 쉽게 연상됩니다.',
      context: '주로 공, 바퀴, 혹은 몸을 옆으로 굴릴 때 사용하며 명사로는 명부나 출석부라는 뜻도 있습니다.',
      synonymAntonym: '회전하는 rotate와 유사하며, 가만히 멈춰 있는 stay와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To move by turning over and over on an axis or surface.',
      synonyms: ['rotate', 'revolve', 'spin'],
      antonyms: ['stop', 'stagnate', 'settle'],
      exampleSentences: [
        { en: 'The children watched the heavy stone tumble and rotate down the steep hill.', ko: '아이들은 무거운 돌이 가파른 언덕 아래로 굴러 내려가는 것을 지켜보았다.' },
        { en: 'A small marble will move across the floor if you give it a gentle push.', ko: '작은 구슬을 살짝 밀면 바닥을 가로질러 굴러갈 것이다.' },
      ],
    }
  ),
  word('romantic', '전기소설적인', 4, 'adjective',
    ['모호한', '적절한', '부적절한', '긍정적인', '부정적인', '대표적인', '기본적인', '중요한', '핵심적인', '일반적인'],
    tips({
      etymology: '중세 프랑스어 \'romanz\'에서 유래하여, 라틴어가 아닌 속어로 쓰인 기사도 이야기나 모험담의 성격을 뜻하게 되었습니다.',
      visual: '중세 기사가 성 위에서 용을 물리치고 공주를 구하는 환상적이고 비현실적인 소설의 한 장면을 상상해 보세요.',
      soundAlike: '\'로맨틱\'이라는 발음은 흔히 연애 감정을 떠올리게 하지만, 문학에서는 \'공상적이고 신비로운\' 느낌으로 기억하세요.',
      context: '현대적인 연애 의미보다는 18세기 낭만주의 문학에서 다루는 초자연적이고 이상적인 분위기를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '현실을 벗어난 \'fanciful\'과 유사하며, 지극히 사실적인 \'realistic\'과는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to or characteristic of a style of literature that emphasizes imagination, emotion, and idealized adventure rather than realism',
      synonyms: ['fanciful', 'idealistic', 'visionary'],
      antonyms: ['realistic', 'prosaic', 'practical'],
      exampleSentences: [
        { en: 'The author filled his prose with romantic descriptions of ancient ruins and lost civilizations.', ko: '작가는 고대 유적과 사라진 문명에 대한 전기소설적인 묘사로 산문을 채웠다.' },
        { en: 'Many readers were captivated by the romantic tales of chivalry and magic popular in the medieval era.', ko: '많은 독자들이 중세 시대에 유행했던 기사도와 마법에 관한 전기소설적인 이야기에 매료되었다.' },
      ],
    }
  ),
  word('roof', '지붕', 3, 'noun',
    ['바닥', '벽면', '기둥', '창문', '현관', '계단', '천장', '굴뚝', '울타리', '정원'],
    tips({
      etymology: '고대 영어 \'hrof\'에서 유래했으며, 건물의 가장 높은 꼭대기 부분을 가리키는 말로 정착되었습니다.',
      visual: '비가 올 때 집 안을 젖지 않게 덮어주는 삼각형 모양의 집 꼭대기를 상상해 보세요.',
      soundAlike: '강아지가 \'루프 루프(roof roof)\' 짖으며 지붕 위를 뛰어다니는 모습을 떠올려 보세요.',
      context: '주거 공간뿐만 아니라 자동차의 윗부분이나 입안의 천장(roof of the mouth)을 가리킬 때도 쓰입니다.',
      synonymAntonym: '상단 덮개를 뜻하는 cover와 유사하며, 바닥을 뜻하는 floor와는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'The structure forming the upper covering of a building or vehicle.',
      synonyms: ['ceiling', 'cover', 'top'],
      antonyms: ['floor', 'bottom', 'base'],
      exampleSentences: [
        { en: 'Heavy rain started to leak through a small hole in the attic roof.', ko: '폭우가 다락방 지붕의 작은 구멍을 통해 새기 시작했습니다.' },
        { en: 'Solar panels were installed on the south side of the house to gather sunlight.', ko: '햇빛을 모으기 위해 집의 남쪽 지붕 위에 태양광 패널이 설치되었습니다.' },
      ],
    }
  ),
  word('room', '방', 1, 'noun',
    ['행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차'],
    tips({
      etymology: '고대 영어 \'rum\'에서 유래했으며, 원래는 \'공간\'이나 \'여유\'를 의미했습니다.',
      visual: '네모난 벽 안에 침대와 책상이 놓여 있는 아늑한 침실의 모습을 상상해 보세요.',
      soundAlike: '\'룸\' 서비스라고 할 때의 그 단어입니다. 호텔 방에서 음식을 주문하는 장면을 떠올리세요.',
      context: '단순히 물리적인 방뿐만 아니라 \'여유 공간\'이나 \'가능성\'이라는 추상적인 의미로도 자주 쓰입니다.',
      synonymAntonym: 'chamber는 격식 있는 방을 뜻하며, 대조적으로 넓은 광장이나 야외는 open space라고 합니다.',
    }),
    {
      definition: 'A partitioned part of the inside of a building, or an available empty space for a particular purpose.',
      synonyms: ['chamber', 'space', 'apartment'],
      antonyms: ['exterior', 'outside', 'void'],
      exampleSentences: [
        { en: 'The hotel guest asked for a quiet corner on the top floor.', ko: '호텔 투숙객은 최상층에 있는 조용한 구석 방을 요청했습니다.' },
        { en: 'There is no more space in the trunk for another suitcase.', ko: '트렁크에 가방 하나를 더 넣을 여유 공간이 없습니다.' },
      ],
    }
  ),
  word('root', '뿌리', 5, 'noun',
    ['줄기', '나뭇잎', '열매', '꽃잎', '가지', '씨앗', '껍질', '수풀', '그늘', '토양'],
    tips({
      etymology: '고대 노르드어 \'rót\'에서 유래하여 식물의 지하 부분을 뜻하며, 모든 것의 근원이라는 의미로 확장되었습니다.',
      visual: '거대한 나무 아래 땅속으로 복잡하게 뻗어 나가는 생명의 근원을 상상해 보세요.',
      soundAlike: '길을 뜻하는 \'route\'와 발음이 비슷하지만, 땅속에 박혀 있는 \'뿌리\'를 떠올려야 합니다.',
      context: '식물학적인 의미뿐만 아니라 문제의 근본적인 원인을 파악할 때도 자주 쓰이는 단어입니다.',
      synonymAntonym: '근원을 뜻하는 source와 유사하며, 겉으로 드러난 결과물인 fruit와는 대조적입니다.',
    }),
    {
      definition: 'the part of a plant which attaches it to the ground or to a support, typically underground, conveying water and nourishment to the rest of the plant',
      synonyms: ['source', 'origin', 'foundation'],
      antonyms: ['branch', 'result', 'effect'],
      exampleSentences: [
        { en: 'Deep underground, the tree\'s network provides stability and absorbs essential nutrients from the soil.', ko: '땅속 깊은 곳에서 나무의 뿌리 조직은 안정감을 제공하고 토양으로부터 필수 영양분을 흡수합니다.' },
        { en: 'Investigators worked tirelessly to identify the primary cause of the technical failure.', ko: '조사관들은 기술적 결함의 근본적인 원인을 파악하기 위해 끊임없이 노력했습니다.' },
      ],
    }
  ),
  word('rope', '새끼', 6, 'noun',
    ['사슬', '철사', '그물', '막대기', '가죽', '천', '실', '고무', '금속', '나무'],
    tips({
      etymology: '고대 영어 \'rap\'에서 유래되었으며, 여러 가닥을 꼬아 만든 굵은 줄을 의미합니다.',
      visual: '배를 정박할 때 쓰는 굵고 거친 밧줄이나 짚으로 꼰 새끼줄을 상상해 보세요.',
      soundAlike: '\'로프\'라고 발음하며, 등산할 때 잡는 생명줄인 로프를 떠올리면 쉽습니다.',
      context: '농경 사회에서 볏짚을 꼬아 만든 새끼줄은 물건을 묶거나 지붕을 엮을 때 필수적이었습니다.',
      synonymAntonym: 'cord나 string보다는 굵고 튼튼하며, 얇은 실을 뜻하는 thread와는 대조적입니다.',
    }),
    {
      definition: 'A strong, thick line or cord made by twisting together strands of hemp, sisal, nylon, or similar material.',
      synonyms: ['cord', 'cable', 'line'],
      antonyms: ['thread', 'filament', 'fiber'],
      exampleSentences: [
        { en: 'The farmer used a handmade cord to tie the bundles of rice straw together.', ko: '농부는 볏짚 뭉치를 묶기 위해 수제 새끼줄을 사용했습니다.' },
        { en: 'Strong strands of twisted hemp held the heavy wooden gate in place.', ko: '단단하게 꼬인 새끼줄이 무거운 나무 대문을 고정하고 있었습니다.' },
      ],
    }
  ),
  word('rot', '썩다', 9, 'noun',
    ['성장', '번영', '신선', '건조', '보존', '결합', '창조', '정화', '냉동', '수리'],
    tips({
      etymology: '고대 영어 \'rotian\'에서 유래했으며, 유기물이 분해되는 과정을 의미합니다.',
      visual: '사과가 갈색으로 변하며 뭉개지는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'랏\'과 비슷하니, \'나뭇잎이 바닥에 깔려(lot) 썩어가는 것\'으로 연상하세요.',
      context: '음식물 쓰레기나 오래된 나무 기둥의 부패를 설명할 때 자주 쓰입니다.',
      synonymAntonym: 'decay와 유사하며, 보존을 뜻하는 preservation과 반대됩니다.',
    }),
    {
      definition: 'the natural process of gradual destruction and decay of organic matter caused by bacteria or fungi',
      synonyms: ['decay', 'decomposition', 'putrefaction'],
      antonyms: ['growth', 'preservation', 'development'],
      exampleSentences: [
        { en: 'The fallen leaves began to turn into black rot on the forest floor.', ko: '떨어진 잎들이 숲 바닥에서 검게 썩기 시작했다.' },
        { en: 'Excessive moisture in the basement caused the wooden beams to suffer from dry rot.', ko: '지하실의 과도한 습기가 나무 들보를 부식시키는 원인이 되었다.' },
      ],
    }
  ),
  word('rough', '거친', 7, 'noun',
    ['부드러운', '매끄러운', '정교한', '완벽한', '차분한', '평탄한', '섬세한', '온화한', '유연한', '깔끔한'],
    tips({
      etymology: '고대 영어 ruh에서 유래되었으며, 털이 많거나 고르지 않은 표면을 묘사하던 것에서 시작되었습니다.',
      visual: '사포의 표면이나 울퉁불퉁한 비포장도로를 달리는 자동차의 흔들림을 상상해 보세요.',
      soundAlike: '발음이 \'러프\'인데, 골프에서 풀이 길고 거친 구역을 \'러프\'라고 부르는 것을 떠올리면 쉽습니다.',
      context: '표면이 고르지 않을 때뿐만 아니라, 대략적인 계획이나 힘든 상황을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'coarse와 유사하며, 반대되는 부드러운 느낌은 smooth를 기억하세요.',
    }),
    {
      definition: 'having an uneven or irregular surface; not smooth or leveled.',
      synonyms: ['coarse', 'uneven', 'rugged'],
      antonyms: ['smooth', 'sleek', 'level'],
      exampleSentences: [
        { en: 'The mountain climbers struggled to find a grip on the jagged and uneven rock face.', ko: '산악인들은 들쭉날쭉하고 거친 암벽에서 손잡을 곳을 찾느라 애를 먹었다.' },
        { en: 'A preliminary sketch provides a general idea of the final painting\'s composition.', ko: '대략적인 스케치는 최종 그림의 구도에 대한 전반적인 아이디어를 제공한다.' },
      ],
    }
  ),
  word('round', '둥근', 4, 'noun',
    ['네모난', '뾰족한', '평평한', '거친', '직선의', '좁은', '길쭉한', '단단한', '부드러운', '가벼운'],
    tips({
      etymology: '라틴어 \'rotundus\'에서 유래하여 바퀴처럼 회전하거나 구르는 모양을 뜻합니다.',
      visual: '보름달이나 축구공처럼 어디를 보아도 모서리 없이 매끄러운 곡선을 상상하세요.',
      soundAlike: '\'라운드\'는 권투 경기에서 한 회를 뜻하기도 하며, 링의 곡선 흐름을 연상시킵니다.',
      context: '골프나 복싱 경기 한 회차를 의미하거나, 전체적인 모양을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'circular와는 모양이 비슷하지만, square나 angular와는 완전히 대조되는 형태입니다.',
    }),
    {
      definition: 'A shape or object that is shaped like a circle or a ball, having a curved surface with no sharp corners.',
      synonyms: ['circle', 'sphere', 'orbit'],
      antonyms: ['square', 'triangle', 'rectangle'],
      exampleSentences: [
        { en: 'The children sat in a large circle for the final round of the game.', ko: '아이들은 게임의 마지막 회차를 위해 커다란 원을 그리며 앉았습니다.' },
        { en: 'The winner of the first round will advance to the championship match next week.', ko: '첫 번째 라운드의 승자는 다음 주 결승전에 진출하게 됩니다.' },
      ],
    }
  ),
  word('route', '길', 5, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '라틴어 \'rupta\'에서 유래했으며, 이는 \'부수고 나아간 길\'이라는 의미를 담고 있습니다.',
      visual: '지도 위에 형광펜으로 목적지까지 쭉 그어진 선을 상상해 보세요.',
      soundAlike: '발음이 \'라우트\' 혹은 \'루트\'로 들리는데, 나무의 뿌리(root)가 뻗어 나가는 길을 연상하면 쉽습니다.',
      context: '주로 버스 노선이나 등산로, 혹은 목표를 달성하기 위한 구체적인 경로를 말할 때 쓰입니다.',
      synonymAntonym: 'path와 유사하며, 정해진 방향이 없는 상태인 wandering과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A specific way or course taken in getting from a starting point to a destination.',
      synonyms: ['path', 'course', 'way'],
      antonyms: ['detour', 'deviation', 'straying'],
      exampleSentences: [
        { en: 'The scenic highway offers a much more beautiful way to reach the coast than the main interstate.', ko: '그 경치 좋은 고속도로는 주요 주간 고속도로보다 해안에 도달하는 훨씬 더 아름다운 경로를 제공합니다.' },
        { en: 'Emergency services are currently looking for the fastest possible path to the accident site.', ko: '응급 구조대는 현재 사고 현장으로 가는 가장 빠른 경로를 찾고 있습니다.' },
      ],
    }
  ),
];
