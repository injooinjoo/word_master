import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch43: VocabItem[] = [
  word('left', '왼쪽의', 1, 'adjective',
    ['오른쪽의', '중앙의', '직진의', '위쪽의', '아래쪽의', '뒤쪽의', '앞쪽의', '대각선의', '건너편의', '내부의'],
    tips({
      etymology: '고대 영어 \'lyft\'에서 유래했으며 본래 \'약한\' 또는 \'쓸모없는\'이라는 의미를 담고 있었습니다.',
      visual: '시계의 9시 방향이나 서구권 자동차의 운전석 위치를 상상해 보세요.',
      soundAlike: '떠나다(leave)의 과거형인 \'left\'와 발음이 같으니 문맥에 주의해야 합니다.',
      context: '길을 안내할 때나 신체 부위를 지칭할 때 가장 빈번하게 사용되는 방향 형용사입니다.',
      synonymAntonym: 'right(오른쪽)와는 정반대 방향이며, port는 배의 왼쪽을 뜻하는 전문 용어입니다.',
    }),
    {
      definition: 'located on or relating to the side of the human body that is toward the west when the person is facing north',
      synonyms: ['sinistral', 'port', 'near-side'],
      antonyms: ['right', 'starboard', 'dextral'],
      exampleSentences: [
        { en: 'Most people wear their watches on the wrist of their non-dominant hand.', ko: '대부분의 사람들은 잘 쓰지 않는 쪽인 왼쪽 손목에 시계를 찹니다.' },
        { en: 'Take a sharp turn at the next intersection to reach the museum.', ko: '박물관에 가려면 다음 교차로에서 왼쪽으로 급회전하세요.' },
      ],
      wordDistractors: ['loft', 'lent', 'leaf'],
      definitionDistractors: [
        'remaining after all others have departed',
        'the act of lifting something upward',
        'a position of authority in a group',
      ],
    }
  ),
  word('legal', '법률상의', 5, 'adjective',
    ['불법의', '도덕적인', '정치적인', '경제적인', '사회적인', '개인적인', '공식적인', '비밀의', '윤리적인', '역사적인'],
    tips({
      etymology: '라틴어 lex(법)에서 유래하여 법과 관련된 모든 것을 의미합니다.',
      visual: '법정에서 판사가 두드리는 의사봉과 두꺼운 법전의 이미지를 떠올려 보세요.',
      soundAlike: '리걸(legal) - 법을 어기면 \'이걸\' 어쩌나 하고 법정으로 가는 상황을 연상하세요.',
      context: '계약서 작성이나 소송 절차 등 법적 효력이 필요한 상황에서 주로 쓰입니다.',
      synonymAntonym: 'lawful과 유의어이며, 반대말은 앞에 il-을 붙인 illegal입니다.',
    }),
    {
      definition: 'Relating to the system of rules that a particular country or community recognizes as regulating the actions of its members.',
      synonyms: ['lawful', 'statutory', 'legitimate'],
      antonyms: ['illegal', 'unlawful', 'prohibited'],
      exampleSentences: [
        { en: 'You should seek professional advice before signing any binding contract.', ko: '구속력 있는 계약서에 서명하기 전에 전문가의 법률적 조언을 구해야 합니다.' },
        { en: 'The court ruled that the company had no basis for its actions.', ko: '법원은 그 회사의 행위에 법적 근거가 없다고 판결했습니다.' },
      ],
      wordDistractors: ['lethal', 'regal', 'legate'],
      definitionDistractors: [
        'having the ability to cause death or serious harm',
        'relating to the study of ancient civilizations',
        'a formal ceremony held in honor of an achievement',
      ],
    }
  ),
  word('legend', '전설', 6, 'noun',
    ['나무', '혜성', '수잔 (여성 이름)', '싹, 꽃봉오리', '동창생들, 졸업생들', '장애물', '기술, 기법', '벽돌', '연소', '홍수'],
    tips({
      etymology: '라틴어 \'legenda\'에서 유래했으며, 원래는 \'읽어야 할 것들\'이라는 의미에서 성인들의 생애를 기록한 이야기로 발전했습니다.',
      visual: '바위 속에 박힌 엑스칼리버 검이나 안개 속의 오래된 성을 떠올리며 수천 년간 전해 내려온 이야기를 상상해 보세요.',
      soundAlike: '\'내 전(legend)\'이라고 발음해보세요. \'내 전\'설적인 이야기라고 기억하면 발음과 의미를 동시에 잡을 수 있습니다.',
      context: '역사적인 인물뿐만 아니라 스포츠 스타처럼 특정 분야에서 독보적인 업적을 남긴 사람을 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: 'Myth는 신화적인 성격이 강하고, Fable은 교훈을 주는 우화인 반면, Fact는 증명된 사실을 뜻합니다.',
    }),
    {
      definition: 'A traditional story sometimes popularly regarded as historical but unauthenticated, or an extremely famous person in a particular field.',
      synonyms: ['myth', 'fable', 'icon'],
      antonyms: ['fact', 'truth', 'nonentity'],
      exampleSentences: [
        { en: 'Ancient maps often contained stories about a lost city that became a local folk tale.', ko: '고대 지도에는 종종 지역 민담이 된 잃어버린 도시에 관한 이야기들이 담겨 있었습니다.' },
        { en: 'The retired basketball player is considered a living giant in the history of the sport.', ko: '그 은퇴한 농구 선수는 스포츠 역사상 살아있는 거장으로 여겨집니다.' },
      ],
      wordDistractors: ['ledger', 'legion', 'lemon'],
      definitionDistractors: [
        'a written agreement between two parties',
        'a precise measurement of distance or weight',
        'a formal gathering of political representatives',
      ],
    }
  ),
  word('legislate', '제정하다', 10, 'verb',
    ['폐지하다', '위반하다', '집행하다', '해석하다', '판결하다', '준수하다', '거부하다', '수정하다', '연기하다', '토론하다'],
    tips({
      etymology: '라틴어 \'lex(법)\'와 \'latus(가져오다/제안하다)\'가 합쳐져 법을 만드는 행위를 뜻하게 되었습니다.',
      visual: '국회의사당에서 의원들이 투표를 통해 새로운 법안 통과를 선포하는 장면을 상상해 보세요.',
      soundAlike: '\'레지슬레이트\' 발음이 \'내지(Legi) 설레(Sla) 이트(te)\'처럼 들리니 새 법이 나와 설레는 마음으로 연상해 보세요.',
      context: '주로 정부나 국회가 사회 문제를 해결하기 위해 공식적인 법률을 만드는 상황에서 사용됩니다.',
      synonymAntonym: 'enact와 유사하며, 이미 만들어진 법을 없애는 abolish와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make or enact laws through a formal political process',
      synonyms: ['enact', 'ordain', 'constitute'],
      antonyms: ['repeal', 'annul', 'revoke'],
      exampleSentences: [
        { en: 'The government plans to create new rules to legislate against environmental pollution.', ko: '정부는 환경 오염을 방지하기 위해 새로운 법률을 제정할 계획입니다.' },
        { en: 'It is difficult to control human behavior or morality through the power to legislate alone.', ko: '법을 제정하는 권한만으로는 인간의 행동이나 도덕성을 통제하기 어렵습니다.' },
      ],
      wordDistractors: ['legitimate', 'litigate', 'delegate'],
      definitionDistractors: [
        'to argue a case in a court of law',
        'to assign authority to a representative',
        'to formally investigate criminal activity',
      ],
    }
  ),
  word('legitimate', '합법의', 8, 'adjective',
    ['불법의', '가짜의', '임시의', '비윤리적인', '부정직한', '비공식적인', '위조된', '부적절한', '불투명한', '우연한'],
    tips({
      etymology: '라틴어 \'lex(법)\'에서 유래하여 법의 테두리 안에 있음을 의미합니다.',
      visual: '판사가 법봉을 두드리며 공식적으로 승인하는 법정의 모습을 상상해 보세요.',
      soundAlike: '\'레지(legis)\'는 법을 뜻하며, \'리짓\'하게 행동하는 것은 떳떳한 행동입니다.',
      context: '사업상의 거래나 자녀의 신분 등이 법적으로 정당할 때 주로 사용됩니다.',
      synonymAntonym: 'lawful과 유의어이며, 반대말은 앞에 il-을 붙인 illegitimate입니다.',
    }),
    {
      definition: 'conforming to the law or to rules; able to be defended with logic or justification',
      synonyms: ['lawful', 'valid', 'legal'],
      antonyms: ['illegal', 'invalid', 'spurious'],
      exampleSentences: [
        { en: 'The government is the only body with a power to exercise force.', ko: '정부는 무력을 행사할 수 있는 권한을 가진 유일한 합법적 기관이다.' },
        { en: 'Many people questioned whether the company had a concern about the new safety regulations.', ko: '많은 이들이 그 회사가 새로운 안전 규정에 대해 정당한 우려를 가지고 있는지 의문을 제기했다.' },
      ],
      wordDistractors: ['legislate', 'litigate', 'ligament'],
      definitionDistractors: [
        'occurring by chance without any clear cause',
        'relating to the practice of medicine',
        'intended to deceive or mislead others',
      ],
    }
  ),
  word('leisure', '여가', 7, 'noun',
    ['노동', '의무', '압박', '긴급', '직업', '과업', '분주', '책임', '고난', '규율'],
    tips({
      etymology: '라틴어 licere(허락되다)에서 유래하여, 해야 할 일에서 벗어나 자유가 허락된 시간을 의미합니다.',
      visual: '해변가 선베드에 누워 아무 걱정 없이 책을 읽고 있는 평화로운 모습을 상상해 보세요.',
      soundAlike: '발음이 \'레저\'와 비슷하므로 우리가 흔히 즐기는 레저 활동을 떠올리면 쉽습니다.',
      context: '주로 바쁜 일상 속에서 얻는 휴식이나 개인적인 취미 생활을 즐길 수 있는 여유를 뜻할 때 쓰입니다.',
      synonymAntonym: 'free time과 유의어 관계이며, 바쁘게 일해야 하는 labor와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Time when one is not working or occupied; free time used for enjoyment.',
      synonyms: ['relaxation', 'recreation', 'spare time'],
      antonyms: ['labor', 'work', 'drudgery'],
      exampleSentences: [
        { en: 'Most people prefer to spend their leisure walking in the park or watching movies.', ko: '대부분의 사람들은 공원을 산책하거나 영화를 보며 여가 시간을 보내는 것을 선호한다.' },
        { en: 'The increase in automation has given workers more leisure than ever before.', ko: '자동화의 증가로 노동자들은 이전보다 더 많은 자유 시간을 갖게 되었다.' },
      ],
      wordDistractors: ['lecture', 'lesion', 'leaser'],
      definitionDistractors: [
        'a formal speech given to an audience',
        'a feeling of intense physical exhaustion',
        'a period of mandatory work or service',
      ],
    }
  ),
  word('lend', '빌려주다', 4, 'verb',
    ['구매하다', '소유하다', '버리다', '파괴하다', '거절하다', '무시하다', '기다리다', '방문하다', '절약하다', '수집하다'],
    tips({
      etymology: '고대 영어 \'lænan\'에서 유래했으며, 무언가를 잠시 내어준다는 의미를 담고 있습니다.',
      visual: '친구가 연필이 없어 곤란해할 때 내 연필을 건네주는 친절한 손길을 상상해 보세요.',
      soundAlike: '발음이 \'랜드(land)\'와 비슷하죠? 내 땅(land)을 잠시 빌려준다고(lend) 생각하면 쉽습니다.',
      context: '돈이나 물건뿐만 아니라 \'도움의 손길을 빌려주다(lend a hand)\'처럼 추상적인 도움에도 쓰입니다.',
      synonymAntonym: 'loan은 빌려주는 행위 자체를, borrow는 반대로 빌려오는 행위를 뜻합니다.',
    }),
    {
      definition: 'To allow someone to use something of yours for a temporary period of time on the condition that it is returned.',
      synonyms: ['loan', 'advance', 'provide'],
      antonyms: ['borrow', 'keep', 'take'],
      exampleSentences: [
        { en: 'Could you please provide me with your umbrella until the rain stops?', ko: '비가 그칠 때까지 우산을 좀 빌려주실 수 있나요?' },
        { en: 'The local bank agreed to provide the necessary funds for the new small business start-up.', ko: '지역 은행은 새로운 소자본 창업에 필요한 자금을 빌려주기로 동의했습니다.' },
      ],
      wordDistractors: ['lent', 'blend', 'lens'],
      definitionDistractors: [
        'to receive something from someone temporarily',
        'to permanently give away possessions',
        'to sell goods at a reduced price',
      ],
    }
  ),
  word('lesson', '수업', 2, 'noun',
    ['유럽인', '생산', '세계', '숙달, 능숙', '본부', '시계', '혼잡, 교통 정체', '휘파람', '소비(량), 소모 (consumptive 소모적인)', '단순화, 간소화'],
    tips({
      etymology: '라틴어 \'lectio(읽기)\'에서 유래하여, 교사가 학생들에게 읽어주던 학습 내용을 의미하게 되었습니다.',
      visual: '칠판 앞에 서서 열정적으로 가르치는 선생님과 필기하는 학생들의 모습을 상상해 보세요.',
      soundAlike: '\'내선\' 번호로 전화를 걸어 오늘 배울 수업 내용을 물어보는 장면을 연상해 보세요.',
      context: '학교 수업뿐만 아니라 인생에서 겪는 뼈아픈 경험을 통한 깨달음을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'class나 lecture와 비슷하지만, 가르침이라는 추상적 의미까지 포함하는 넓은 단어입니다.',
    }),
    {
      definition: 'A period of time during which a person is taught about a particular subject or skill.',
      synonyms: ['class', 'lecture', 'instruction'],
      antonyms: ['ignorance', 'confusion', 'misguidance'],
      exampleSentences: [
        { en: 'The history teacher prepared a very engaging presentation for today\'s morning session.', ko: '역사 선생님은 오늘 오전 수업을 위해 매우 매력적인 발표 자료를 준비하셨습니다.' },
        { en: 'Losing the competition taught him a valuable life experience about the importance of persistence.', ko: '경기에 진 것은 그에게 끈기의 중요성에 대한 값진 인생의 교훈을 가르쳐 주었습니다.' },
      ],
      wordDistractors: ['lessen', 'lesion', 'lemon'],
      definitionDistractors: [
        'a formal written examination of knowledge',
        'a recreational activity done for fun',
        'a punishment given for breaking rules',
      ],
    }
  ),
  word('let', '~하게 하다', 5, 'verb',
    ['금지하다', '방해하다', '거절하다', '중단하다', '무시하다', '처벌하다', '감시하다', '수정하다', '보관하다', '파괴하다'],
    tips({
      etymology: '고대 영어 \'lætan\'에서 유래하여 원래 \'내버려 두다\' 혹은 \'느슨하게 하다\'라는 의미를 담고 있습니다.',
      visual: '닫혀 있던 문을 활짝 열어주며 누군가 지나가게 허락하는 관대한 집주인의 모습을 상상해 보세요.',
      soundAlike: '테니스에서 서브가 네트에 걸려 다시 칠 때 \'렛\'이라고 하는 상황을 떠올리면 기회를 다시 주는 느낌이 납니다.',
      context: '사역동사로 쓰일 때 목적어 뒤에 동사원형이 오며, 강제로 시키기보다 허용의 뉘앙스가 강합니다.',
      synonymAntonym: '허락을 뜻하는 allow와 유사하지만, 금지를 뜻하는 forbid와는 정반대의 개념입니다.',
    }),
    {
      definition: 'To give permission to someone to do something or to allow something to happen.',
      synonyms: ['allow', 'permit', 'authorize'],
      antonyms: ['forbid', 'prevent', 'prohibit'],
      exampleSentences: [
        { en: 'My parents decided to let me go to the concert with my friends.', ko: '부모님은 내가 친구들과 함께 콘서트에 가는 것을 허락해 주셨다.' },
        { en: 'Please let the water run for a few minutes until it gets hot.', ko: '물이 뜨거워질 때까지 몇 분 동안 물을 틀어 놓으세요.' },
      ],
      wordDistractors: ['led', 'lit', 'bet'],
      definitionDistractors: [
        'to rent a property to a tenant for payment',
        'to push someone forcefully in a direction',
        'to attach or fasten something securely',
      ],
    }
  ),
  word('level', '수평의', 6, 'adjective',
    ['수직의', '기울어진', '울퉁불퉁한', '불규칙한', '가파른', '곡선의', '경사진', '불안정한', '뾰족한', '거친'],
    tips({
      etymology: '라틴어 \'libella\'에서 유래했으며, 이는 저울이나 수평을 측정하는 도구를 의미합니다.',
      visual: '건축가가 수평계를 사용하여 바닥이 평평한지 확인하는 모습을 상상해 보세요.',
      soundAlike: '게임에서 다음 \'레벨\'로 넘어가기 위해 평평한 바닥을 걷는 캐릭터를 떠올려 보세요.',
      context: '선반을 달거나 액자를 걸 때 바닥과 평행을 이루는 상태를 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'flat이나 even과 비슷하지만, uneven이나 slanted와는 정반대의 상태를 나타냅니다.',
    }),
    {
      definition: 'having a flat and even surface without any slopes, tilts, or bumps',
      synonyms: ['flat', 'even', 'horizontal'],
      antonyms: ['slanted', 'uneven', 'vertical'],
      exampleSentences: [
        { en: 'Make sure the surface is perfectly flat before you start painting the floor.', ko: '바닥 칠을 시작하기 전에 표면이 완벽하게 수평인지 확인하세요.' },
        { en: 'The carpenter used a tool to ensure the shelf was balanced and straight.', ko: '목수는 선반이 균형 잡히고 수평이 맞는지 확인하기 위해 도구를 사용했습니다.' },
      ],
      wordDistractors: ['lever', 'levee', 'revel'],
      definitionDistractors: [
        'a rank or position in a hierarchical system',
        'the amount of a substance in the blood',
        'a tool used to pry open containers',
      ],
    }
  ),
  word('liberal', '자유주의의', 7, 'adjective',
    ['보수적인', '엄격한', '인색한', '전통적인', '권위주의적인', '폐쇄적인', '독재적인', '제한된', '고립된', '편협한'],
    tips({
      etymology: '라틴어 \'liber\'는 \'자유로운(free)\'이라는 뜻을 가지고 있어, 개인의 자유를 존중하는 태도를 나타냅니다.',
      visual: '새장 문을 열어 새가 자유롭게 날아가는 모습이나, 다양한 의견이 쏟아지는 열린 토론장을 상상해 보세요.',
      soundAlike: '\'리버럴\'의 \'리버(liver)\'를 \'강(river)\'으로 연상하여, 강물처럼 막힘없이 흐르는 자유로운 생각을 떠올려보세요.',
      context: '정치적 성향뿐만 아니라, 양을 넉넉하게 주거나 타인의 실수에 관대한 태도를 보일 때도 자주 쓰입니다.',
      synonymAntonym: '관대한 성격의 generous와 유의어이며, 변화를 거부하는 conservative와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Respecting or allowing many different types of beliefs or behavior, or being generous in amount.',
      synonyms: ['progressive', 'tolerant', 'generous'],
      antonyms: ['conservative', 'narrow-minded', 'stingy'],
      exampleSentences: [
        { en: 'The city is known for its progressive and open-minded social policies.', ko: '그 도시는 진보적이고 개방적인 사회 정책으로 잘 알려져 있다.' },
        { en: 'She added a generous amount of butter to the recipe to enhance the flavor.', ko: '그녀는 풍미를 돋우기 위해 레시피에 버터를 아주 넉넉하게 넣었다.' },
      ],
      wordDistractors: ['literal', 'liberty', 'limber'],
      definitionDistractors: [
        'strictly following established traditions without deviation',
        'having limited resources or financial means',
        'showing excessive concern for minor details',
      ],
    }
  ),
  word('liberty', '자유', 4, 'noun',
    ['억압', '구속', '책임', '의무', '질서', '평등', '권위', '복종', '통제', '규제'],
    tips({
      etymology: '라틴어 \'liber\'에서 유래했으며, 이는 \'자유로운\'이라는 뜻을 가지고 있어 해방의 의미를 담고 있습니다.',
      visual: '뉴욕의 자유의 여신상(Statue of Liberty)이 횃불을 들고 서 있는 당당한 모습을 상상해 보세요.',
      soundAlike: '\'리버티\' 발음이 \'내버려 둬\'와 비슷하게 들린다고 생각하면 간섭받지 않는 자유의 느낌이 납니다.',
      context: '정치적 권리나 개인의 선택권을 강조할 때 주로 쓰이며, 구속에서 벗어난 상태를 의미합니다.',
      synonymAntonym: 'freedom과 비슷하지만 더 공식적이고 법적인 권리를 뜻하며, 반대로는 slavery나 confinement가 있습니다.',
    }),
    {
      definition: 'The state of being free within society from oppressive restrictions imposed by authority on one\'s way of life.',
      synonyms: ['freedom', 'independence', 'autonomy'],
      antonyms: ['slavery', 'captivity', 'constraint'],
      exampleSentences: [
        { en: 'The people fought bravely to regain their lost liberty from the dictator.', ko: '국민들은 독재자로부터 잃어버린 자유를 되찾기 위해 용감하게 싸웠습니다.' },
        { en: 'Every individual should have the liberty to express their opinions without fear.', ko: '모든 개인은 두려움 없이 자신의 의견을 표현할 자유를 가져야 합니다.' },
      ],
      wordDistractors: ['library', 'liberal', 'livery'],
      definitionDistractors: [
        'a public building for borrowing books',
        'a duty or obligation imposed by authority',
        'a generous donation to a charitable cause',
      ],
    }
  ),
  word('library', '도서관', 3, 'noun',
    ['박물관', '미술관', '서점', '학교', '연구소', '강당', '체육관', '기숙사', '교실', '식당'],
    tips({
      etymology: '라틴어 \'liber(책)\'에서 유래하여 책을 보관하는 장소라는 의미를 가집니다.',
      visual: '조용한 열람실에 수천 권의 책이 꽂혀 있는 높은 책장을 상상해 보세요.',
      soundAlike: '\'나 이브(live)로 책 읽으러 리(li)브러리 간다\'라고 소리 내어 읽어보세요.',
      context: '공공 기관뿐만 아니라 개인의 서재나 디지털 데이터의 집합체를 뜻할 때도 쓰입니다.',
      synonymAntonym: '책의 저장소인 archive와 비슷하지만, 판매 목적의 bookstore와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.',
      synonyms: ['athenaeum', 'reading room', 'archive'],
      antonyms: ['bookstore', 'wilderness', 'void'],
      exampleSentences: [
        { en: 'Students often gather at the central building to study for their final exams in silence.', ko: '학생들은 기말고사를 위해 조용히 공부하러 중앙 건물에 자주 모입니다.' },
        { en: 'The local community center offers a vast collection of historical documents and rare manuscripts.', ko: '지역 커뮤니티 센터는 방대한 역사 문헌과 희귀 원고 컬렉션을 제공합니다.' },
      ],
      wordDistractors: ['liberty', 'liberal', 'liturgy'],
      definitionDistractors: [
        'a store where books are sold commercially',
        'a private office used for business meetings',
        'a laboratory for conducting scientific experiments',
      ],
    }
  ),
  word('license', '면허', 5, 'noun',
    ['자격증', '허가증', '증명서', '여권', '계약서', '영수증', '신분증', '보고서', '통지서', '동의서'],
    tips({
      etymology: '라틴어 licere에서 유래하여 \'허락되다\'라는 의미를 담고 있습니다.',
      visual: '운전면허증 사진 속에 활짝 웃고 있는 자신의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'라이선스\'로 익숙하며, \'나이\'가 차서 \'선\'택받은 자격이라고 연상하세요.',
      context: '주로 운전, 의료 행위, 소프트웨어 사용 등 법적 허가가 필요한 상황에서 쓰입니다.',
      synonymAntonym: 'permit과 유사하지만, license는 더 공식적이고 장기적인 권한을 의미할 때가 많습니다.',
    }),
    {
      definition: 'An official document or card that gives someone legal permission to do, own, or use something.',
      synonyms: ['permit', 'authorization', 'certificate'],
      antonyms: ['prohibition', 'ban', 'restriction'],
      exampleSentences: [
        { en: 'The police officer asked the driver to show his valid driving document.', ko: '경찰관은 운전자에게 유효한 운전면허증을 보여달라고 요청했습니다.' },
        { en: 'You need to purchase a software subscription to use this program legally.', ko: '이 프로그램을 합법적으로 사용하려면 소프트웨어 라이선스를 구매해야 합니다.' },
      ],
      wordDistractors: ['licorice', 'licence', 'liken'],
      definitionDistractors: [
        'a receipt showing proof of a completed payment',
        'a formal letter of recommendation from an employer',
        'a personal identification number used for security',
      ],
    }
  ),
  word('lid', '뚜껑', 6, 'noun',
    ['바닥', '손잡이', '상자', '그릇', '봉투', '열쇠', '구멍', '조각', '먼지', '껍질'],
    tips({
      etymology: '고대 영어 \'hlid\'에서 유래했으며, 무언가를 덮거나 닫는 덮개를 의미합니다.',
      visual: '냄비 위에서 김이 모락모락 나는 것을 막고 있는 둥근 금속 덮개를 상상해 보세요.',
      soundAlike: '발음이 \'리드\'와 비슷하므로, 냄비의 입구를 리드(lead)하여 덮는다고 생각하면 쉽습니다.',
      context: '주방 용품이나 보관 용기의 윗부분을 닫을 때 가장 흔히 사용되는 단어입니다.',
      synonymAntonym: 'cover와 유사하지만 주로 분리 가능한 형태를 뜻하며, base와는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'A removable or hinged cover for the top of a container, pot, or jar.',
      synonyms: ['cover', 'cap', 'top'],
      antonyms: ['bottom', 'base', 'interior'],
      exampleSentences: [
        { en: 'Please make sure the lid is tightly closed so the food stays fresh.', ko: '음식이 신선하게 유지되도록 뚜껑이 꽉 닫혔는지 확인해 주세요.' },
        { en: 'The pressure inside the pot was so high that it pushed the metal lid up.', ko: '냄비 안의 압력이 너무 높아서 금속 뚜껑이 위로 밀려 올라갔습니다.' },
      ],
      wordDistractors: ['lip', 'led', 'lad'],
      definitionDistractors: [
        'a handle attached to a door or drawer',
        'a flat surface at the bottom of a container',
        'a decorative frame placed around a picture',
      ],
    }
  ),
  word('lie', '눕다', 1, 'verb',
    ['서다', '앉다', '걷다', '뛰다', '날다', '먹다', '자다', '읽다', '쓰다', '듣다'],
    tips({
      etymology: '고대 영어 \'licgan\'에서 유래하여 평평한 표면에 몸을 놓는 동작을 의미합니다.',
      visual: '침대에 대자로 뻗어 편안하게 휴식을 취하는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'라이\'라고 발음되는데, 나른한 오후에 \'나이\'가 들어 기운이 없어 눕는 상황을 연상해 보세요.',
      context: '주로 침대, 소파, 바닥 등 평평한 장소에서 휴식을 취하거나 잠을 잘 때 사용됩니다.',
      synonymAntonym: 'recline은 격식 있게 눕는 것이고, stand는 반대로 수직으로 서 있는 상태를 뜻합니다.',
    }),
    {
      definition: 'To rest one\'s body in a flat or horizontal position on a surface.',
      synonyms: ['recline', 'rest', 'lounge'],
      antonyms: ['stand', 'rise', 'sit'],
      exampleSentences: [
        { en: 'The exhausted hiker decided to rest on the grass for a while.', ko: '지친 등산객은 잠시 풀밭에 눕기로 결정했다.' },
        { en: 'Cats often prefer to stretch out and nap in sunny spots on the floor.', ko: '고양이들은 종종 바닥의 햇볕 잘 드는 곳에 몸을 뉘어 낮잠 자는 것을 좋아한다.' },
      ],
      wordDistractors: ['lye', 'lei', 'vie'],
      definitionDistractors: [
        'to speak falsely in order to deceive someone',
        'to fasten something firmly to a surface',
        'to move rapidly in a straight direction',
      ],
    }
  ),
  word('lift', '끌어올리다', 7, 'verb',
    ['내리다', '떨어뜨리다', '놓다', '밀다', '당기다', '던지다', '누르다', '낮추다', '내려놓다', '굴리다'],
    tips({
      etymology: '고대 노르웨이 어원 \'lypta\'에서 유래하여 공기 중으로 들어 올린다는 의미를 담고 있습니다.',
      visual: '무거운 택배 상자를 바닥에서 번쩍 들어 올리는 근육질의 팔을 상상해 보세요.',
      soundAlike: '엘리베이터를 뜻하는 영국식 표현 \'리프트\'를 떠올리면 위로 올라가는 이미지가 쉽게 연상됩니다.',
      context: '주로 물리적인 물건을 들어 올릴 때뿐만 아니라 기분이나 분위기를 북돋울 때도 자주 쓰입니다.',
      synonymAntonym: '상승을 뜻하는 boost와 유사하며, 아래로 내리는 drop과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to raise something or someone to a higher position or level using physical effort',
      synonyms: ['raise', 'hoist', 'elevate'],
      antonyms: ['lower', 'drop', 'set down'],
      exampleSentences: [
        { en: 'The heavy box required a collective effort to give it a proper lift onto the truck.', ko: '그 무거운 상자를 트럭 위로 제대로 들어 올리기 위해서는 공동의 노력이 필요했습니다.' },
        { en: 'A sudden smile from a friend can provide a much-needed emotional lift during a hard day.', ko: '친구의 갑작스러운 미소는 힘든 하루 동안 꼭 필요했던 정서적 고양감을 줄 수 있습니다.' },
      ],
      wordDistractors: ['left', 'loft', 'sift'],
      definitionDistractors: [
        'to push something downward with force',
        'to carry something horizontally across a surface',
        'to separate items into different categories',
      ],
    }
  ),
  word('like', '좋아하다', 2, 'verb',
    ['싫어하다', '무시하다', '기다리다', '공부하다', '일어나다', '가르치다', '방문하다', '약속하다', '준비하다', '거절하다'],
    tips({
      etymology: '고대 영어 \'lician\'에서 유래하여 누군가와 성격이나 모습이 \'비슷하여(alike)\' 마음에 든다는 의미에서 시작되었습니다.',
      visual: '엄지손가락을 위로 치켜세운 \'따봉\' 아이콘이나 SNS의 하트 버튼을 떠올려 보세요.',
      soundAlike: '발음이 \'라이크\'이므로, 마음에 드는 물건을 보고 \'나이(내) 꺼\' 하고 싶을 만큼 좋다고 연상해 보세요.',
      context: '취미, 음식, 사람 등 자신이 선호하는 대상을 표현할 때 가장 기본적으로 사용하는 동사입니다.',
      synonymAntonym: 'love보다는 약한 선호이며, 반대말인 dislike나 hate와 함께 묶어서 기억하면 좋습니다.',
    }),
    {
      definition: 'to find someone or something pleasant or attractive; to enjoy a particular activity.',
      synonyms: ['enjoy', 'appreciate', 'fancy'],
      antonyms: ['dislike', 'hate', 'detest'],
      exampleSentences: [
        { en: 'Most children enjoy playing outside and usually love to eat ice cream.', ko: '대부분의 아이들은 밖에서 노는 것을 즐기고 보통 아이스크림 먹는 것을 좋아합니다.' },
        { en: 'Many people find that they prefer classical music when they need to concentrate on work.', ko: '많은 사람들은 업무에 집중해야 할 때 클래식 음악을 선호한다는 것을 알게 됩니다.' },
      ],
      wordDistractors: ['liken', 'hike', 'bike'],
      definitionDistractors: [
        'to compare two things for similarities',
        'to strongly oppose or reject an idea',
        'to resemble someone in appearance or manner',
      ],
    }
  ),
  word('likely', '~할 것 같은', 4, 'adjective',
    ['중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '썩은, 악취 나는', '영원한', '차별적인', '저항하는, 내성이 있는'],
    tips({
      etymology: 'Like(~와 같은)에 형용사형 접미사 -ly가 붙어 \'그럴듯한\' 상태를 나타냅니다.',
      visual: '일기예보에서 비가 올 확률이 80% 이상인 그래프를 상상해 보세요.',
      soundAlike: '발음이 \'라이클리\'이므로 \'나이(나이)가 들면 그럴 법(likely)하지\'라고 외워보세요.',
      context: '어떤 일이 일어날 확률이 높거나 타당해 보일 때 주로 사용합니다.',
      synonymAntonym: 'Probable과 유의어이며, 전혀 일어날 것 같지 않은 Unlikely와 반대됩니다.',
    }),
    {
      definition: 'having a high probability of occurring or being true',
      synonyms: ['probable', 'expected', 'plausible'],
      antonyms: ['unlikely', 'improbable', 'doubtful'],
      exampleSentences: [
        { en: 'Heavy rain is highly expected to cause flooding in low-lying areas.', ko: '폭우가 저지대 지역에 홍수를 일으킬 가능성이 매우 높습니다.' },
        { en: 'The most reasonable candidate will win the election by a wide margin.', ko: '가장 유력한 후보가 큰 차이로 선거에서 승리할 것입니다.' },
      ],
      wordDistractors: ['lively', 'lonely', 'limply'],
      definitionDistractors: [
        'resembling something in appearance or character',
        'expressing a strong preference for one option',
        'occurring at regular and predictable intervals',
      ],
    }
  ),
  word('likewise', '마찬가지로', 5, 'adverb',
    ['다르게', '반대로', '별도로', '독립적으로', '개별적으로', '거꾸로', '대조적으로', '상반되게', '특이하게', '예외적으로'],
    tips({
      etymology: 'Like(비슷한)와 Wise(방식)가 결합되어 \'비슷한 방식으로\'라는 의미를 가집니다.',
      visual: '앞사람이 하는 행동을 거울처럼 똑같이 따라 하는 모습을 상상해 보세요.',
      soundAlike: '\'라이크와이즈\'는 \'나도 라이크(좋아)와이즈(그치?)\'처럼 동의하는 상황을 연상시킵니다.',
      context: '상대방이 \'만나서 반가워요\'라고 했을 때 \'저도요\'라고 답할 때 자주 쓰입니다.',
      synonymAntonym: 'Similarly와 뜻이 통하며, 반대로 다르게 행동할 때는 Differently를 씁니다.',
    }),
    {
      definition: 'In the same way or in a similar manner to what has just been mentioned.',
      synonyms: ['similarly', 'correspondingly', 'equally'],
      antonyms: ['differently', 'oppositely', 'contrarily'],
      exampleSentences: [
        { en: 'The first experiment was a success, and the second one turned out likewise.', ko: '첫 번째 실험은 성공적이었고, 두 번째 실험도 마찬가지로 결과가 나왔다.' },
        { en: 'He voted for the proposal, and his colleagues did likewise.', ko: '그는 제안에 찬성표를 던졌고, 그의 동료들도 똑같이 행동했다.' },
      ],
      wordDistractors: ['likeness', 'lifelike', 'sidewise'],
      definitionDistractors: [
        'in a manner that is opposite to what was expected',
        'without any clear purpose or direction',
        'to an extent that exceeds normal expectations',
      ],
    }
  ),
  word('limit', '한계', 6, 'noun',
    ['교과서', '장식, 장신구', '기분좋은 맛, 자극, 흥미, 관심', '절제된 표현', '전제, 가정', '관료제', '여가', '솔직함, 정직', '세관', '목초지'],
    tips({
      etymology: '라틴어 limes(경계, 통로)에서 유래하여 더 이상 넘어갈 수 없는 선을 의미합니다.',
      visual: '도로 끝에 세워진 \'진입 금지\' 표지판이나 꽉 찬 물컵의 찰랑거리는 수면을 상상해 보세요.',
      soundAlike: '\'리미트\'는 수학 시간의 \'극한\'으로도 익숙하며, 무언가 \'밀어붙여\' 끝에 도달한 느낌과 연결하세요.',
      context: '속도 제한(speed limit)이나 인내심의 한계처럼 물리적, 정신적 경계에 모두 쓰입니다.',
      synonymAntonym: 'boundary와 유사하며, 무한함을 뜻하는 infinity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The greatest amount, number, or level of something that is allowed or possible.',
      synonyms: ['boundary', 'restriction', 'ceiling'],
      antonyms: ['infinity', 'boundlessness', 'excess'],
      exampleSentences: [
        { en: 'There is a strict speed restriction on this narrow mountain road for safety.', ko: '안전을 위해 이 좁은 산길에는 엄격한 속도 제한이 있습니다.' },
        { en: 'She pushed her physical endurance to the maximum during the marathon.', ko: '그녀는 마라톤을 하는 동안 자신의 신체적 인내심을 한계까지 밀어붙였습니다.' },
      ],
      wordDistractors: ['limp', 'limb', 'lemon'],
      definitionDistractors: [
        'a starting point from which something begins',
        'a tool used for precise measurement',
        'a reward given for outstanding performance',
      ],
    }
  ),
  word('line', '선', 3, 'noun',
    ['합침, 집합, 집중', '기숙사', '보상금, 보상', '수령', '연주회', '단지', '고립, 격리', '주름', '나무판, 이사회', '아쉬 (성)'],
    tips({
      etymology: '라틴어 \'linum(아마포, 실)\'에서 유래하여 가늘고 긴 실이나 끈의 형태를 의미하게 되었습니다.',
      visual: '공책의 줄이나 도로의 차선을 따라 곧게 뻗은 긴 실선을 상상해 보세요.',
      soundAlike: '낚시할 때 쓰는 \'라인\'이나 전화 \'라인\'이 끊겼다는 표현을 떠올리면 쉽습니다.',
      context: '글쓰기에서의 한 줄, 대기하는 사람들의 줄, 혹은 경계선을 말할 때 주로 쓰입니다.',
      synonymAntonym: '유사한 의미로는 row나 queue가 있고, 반대되는 개념으로는 점(dot)이나 면(surface)이 있습니다.',
    }),
    {
      definition: 'A long, narrow mark or band made on a surface, or a row of people or things waiting for something.',
      synonyms: ['stripe', 'row', 'queue'],
      antonyms: ['dot', 'point', 'curve'],
      exampleSentences: [
        { en: 'Please sign your name on the dotted line at the bottom of the page.', ko: '페이지 하단의 점선 위에 이름을 서명해 주세요.' },
        { en: 'The long line of people waiting for tickets stretched around the corner.', ko: '표를 기다리는 사람들의 긴 줄이 모퉁이까지 이어졌습니다.' },
      ],
      wordDistractors: ['lime', 'lien', 'vine'],
      definitionDistractors: [
        'a curved path that bends in multiple directions',
        'a unit of measurement for distance',
        'a piece of string used for tying knots',
      ],
    }
  ),
  word('linguistic', '언어학의', 7, 'adjective',
    ['수학적인', '역사적인', '지리적인', '과학적인', '예술적인', '경제적인', '정치적인', '사회적인', '물리적인', '심리적인'],
    tips({
      etymology: '라틴어 \'lingua\'는 혀(tongue)를 뜻하며, 이것이 언어라는 의미로 확장되어 형용사형이 되었습니다.',
      visual: '세계 각국의 언어로 \'안녕\'이라고 적힌 말풍선들이 가득한 그림을 상상해 보세요.',
      soundAlike: '\'링귀스틱\'은 파스타 \'링귀니\'와 발음이 비슷하죠? 혀를 즐겁게 하는 면요리처럼 혀를 사용하는 언어학을 떠올려보세요.',
      context: '언어의 구조, 역사, 문법 등을 학문적으로 다룰 때 주로 사용되는 전문적인 표현입니다.',
      synonymAntonym: '언어와 관련된 verbal과 유의어 관계이며, 비언어적인 nonverbal과 반대됩니다.',
    }),
    {
      definition: 'Relating to language or the scientific study of its structure and development.',
      synonyms: ['verbal', 'lingual', 'philological'],
      antonyms: ['nonverbal', 'nonlinguistic', 'extralinguistic'],
      exampleSentences: [
        { en: 'The researchers analyzed the linguistic patterns of indigenous tribes in the Amazon.', ko: '연구원들은 아마존 원주민 부족들의 언어적 패턴을 분석했습니다.' },
        { en: 'Children often show remarkable linguistic flexibility when learning a second language.', ko: '아이들은 제2외국어를 배울 때 종종 놀라운 언어적 유연성을 보여줍니다.' },
      ],
      wordDistractors: ['linguine', 'logistic', 'litigant'],
      definitionDistractors: [
        'relating to the mathematical study of numbers',
        'concerned with the interpretation of artistic works',
        'involving the physical movement of the body',
      ],
    }
  ),
  word('link', '연결, 고리', 4, 'noun',
    ['단절', '분리', '차단', '격리', '간격', '틈', '장벽', '경계', '차이', '독립'],
    tips({
      etymology: '고대 노르웨이어 \'hlekkr\'에서 유래하여 사슬의 고리 하나하나가 연결된 상태를 의미합니다.',
      visual: '자전거 체인의 금속 고리들이 서로 꽉 맞물려 길게 이어져 있는 모습을 상상해 보세요.',
      soundAlike: '컴퓨터 마우스로 클릭(click)하여 웹페이지를 연결(link)하는 상황을 떠올리면 쉽습니다.',
      context: '주로 물리적인 사슬 구조뿐만 아니라 논리적으로 밀접하게 얽혀 있는 관계를 설명할 때 쓰입니다.',
      synonymAntonym: '연결된 상태를 뜻하는 connected와 반대로 떨어져 있는 detached를 함께 기억하세요.',
    }),
    {
      definition: 'a connection or relationship between two or more things, people, or events, or a ring in a chain',
      synonyms: ['connection', 'bond', 'tie'],
      antonyms: ['gap', 'separation', 'disconnection'],
      exampleSentences: [
        { en: 'The fence was made of heavy metal pieces forming a strong barrier.', ko: '그 울타리는 튼튼한 장벽을 형성하는 무거운 금속 사슬 조각들로 만들어졌습니다.' },
        { en: 'Archaeologists found an ancient necklace with a unique structural design.', ko: '고고학자들은 독특한 사슬 구조 디자인을 가진 고대 목걸이를 발견했습니다.' },
      ],
      wordDistractors: ['lick', 'lint', 'sink'],
      definitionDistractors: [
        'a barrier that prevents passage between areas',
        'a chain used to secure a bicycle to a post',
        'a small portable device for communication',
      ],
    }
  ),
  word('lion', '사자', 1, 'noun',
    ['호랑이', '표범', '치타', '코끼리', '기린', '얼룩말', '하마', '늑대', '여우', '곰'],
    tips({
      etymology: '라틴어 \'leo\'에서 유래하여 유럽 전역에서 용맹한 맹수를 뜻하는 이름으로 정착되었습니다.',
      visual: '황금빛 갈기를 휘날리며 초원을 당당하게 걷는 동물의 왕을 상상해 보세요.',
      soundAlike: '발음이 \'라이언\'이므로, 영화 \'라이온 킹\'의 주인공 심바를 떠올리면 쉽습니다.',
      context: '동물원이나 아프리카 사파리 여행을 주제로 한 대화에서 자주 등장합니다.',
      synonymAntonym: '용맹함의 상징인 포식자이며, 먹잇감이 되는 초식동물과는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'A large, powerful carnivorous feline with a tawny coat and, in the male, a heavy mane, native to Africa and parts of southern Asia.',
      synonyms: ['predator', 'feline', 'beast'],
      antonyms: ['prey', 'lamb', 'herbivore'],
      exampleSentences: [
        { en: 'The male let out a thunderous roar that echoed across the entire savanna.', ko: '수컷이 온 사바나에 울려 퍼지는 천둥 같은 포효를 내뱉었습니다.' },
        { en: 'A pride of these golden cats rested quietly under the shade of an acacia tree.', ko: '이 황금빛 고양이과 동물 한 무리가 아카시아 나무 그늘 아래에서 조용히 휴식을 취했습니다.' },
      ],
      wordDistractors: ['loin', 'lien', 'loon'],
      definitionDistractors: [
        'a small domesticated cat kept as a pet',
        'a venomous reptile found in tropical regions',
        'a large bird known for its colorful plumage',
      ],
    }
  ),
  word('lip', '입술', 2, 'noun',
    ['눈꺼풀', '콧구멍', '손가락', '발뒤꿈치', '어깨', '손목', '팔꿈치', '눈썹', '턱', '뺨'],
    tips({
      etymology: '고대 영어 \'lippa\'에서 유래했으며, 입의 가장자리를 뜻하는 게르만어 계열의 단어입니다.',
      visual: '빨간 립스틱을 바르는 입술의 모양이나 컵의 가장자리를 따라 흐르는 물방울을 상상해 보세요.',
      soundAlike: '\'립\'스틱(lipstick)이나 \'립\'밤(lip balm)처럼 우리가 일상에서 입술 케어 제품에 쓰는 발음과 같습니다.',
      context: '신체 부위뿐만 아니라 컵이나 그릇의 \'가장자리\'를 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '가장자리를 뜻하는 edge와 유사하며, 신체 부위로서의 반대 개념은 없으나 중심부인 center와 대조될 수 있습니다.',
    }),
    {
      definition: 'Either of the two fleshy parts which form the upper and lower edges of the mouth opening.',
      synonyms: ['edge', 'rim', 'brim'],
      antonyms: ['center', 'interior', 'middle'],
      exampleSentences: [
        { en: 'She applied a thin layer of gloss to her lower lip before the photo shoot.', ko: '그녀는 사진 촬영 전에 아랫입술에 얇게 글로스를 발랐다.' },
        { en: 'A small chip appeared on the lip of the ceramic mug after it was dropped.', ko: '도자기 머그컵을 떨어뜨린 후 컵의 가장자리에 작은 흠집이 생겼다.' },
      ],
      wordDistractors: ['lid', 'limp', 'dip'],
      definitionDistractors: [
        'the tip of the tongue used for tasting food',
        'a rounded handle on a piece of furniture',
        'a thin layer of paint applied to a surface',
      ],
    }
  ),
  word('liquid', '액체', 5, 'noun',
    ['고체', '기체', '결정', '증기', '금속', '분말', '입자', '화합물', '원소', '혼합물'],
    tips({
      etymology: '라틴어 \'liquere(흐르다)\'에서 유래하여 형태가 고정되지 않고 흐르는 성질을 나타냅니다.',
      visual: '컵에 담긴 물이 출렁거리며 쏟아지는 유연한 모습을 상상해 보세요.',
      soundAlike: '\'리퀴드\'는 화장품 중 \'리퀴드 파운데이션\'처럼 묽은 제형을 떠올리면 쉽습니다.',
      context: '과학 실험이나 요리법에서 물, 기름, 우유와 같은 물질을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '흐르는 성질의 fluid와 유의어이며, 딱딱하게 굳은 solid와는 반대 개념입니다.',
    }),
    {
      definition: 'A substance that flows freely but is of constant volume, having a consistency like that of water or oil.',
      synonyms: ['fluid', 'solution', 'sap'],
      antonyms: ['solid', 'gas', 'vapor'],
      exampleSentences: [
        { en: 'Water is the most common substance found in this state on our planet.', ko: '물은 우리 행성에서 이 상태로 발견되는 가장 흔한 물질입니다.' },
        { en: 'The scientist carefully poured the blue substance into a glass beaker.', ko: '과학자는 그 파란색 물질을 유리 비커에 조심스럽게 부었습니다.' },
      ],
      wordDistractors: ['liquor', 'loquat', 'livid'],
      definitionDistractors: [
        'a solid material with a fixed crystalline structure',
        'a gas that expands to fill any container',
        'a powdery substance produced by grinding solids',
      ],
    }
  ),
  word('list', '목록', 6, 'noun',
    ['왕국', '잡일 하는 사람', '살인', '뮤지컬; 음악의', '중재, 조정', '의지', '정력, 활기, 열정', '집토끼', '코코넛', '어릿광대'],
    tips({
      etymology: '고대 프랑스어 \'liste\'에서 유래했으며, 원래는 종이의 \'가장자리\'나 \'띠\'를 의미하다가 그 위에 적힌 항목들로 의미가 확장되었습니다.',
      visual: '냉장고 문에 붙여진 장보기 메모지나 할 일들이 줄지어 적힌 노트를 상상해 보세요.',
      soundAlike: '무거운 물건을 \'들어 올리다\'라는 뜻의 lift와 발음이 비슷하니 끝소리 \'t\'에 집중해 보세요.',
      context: '식당의 메뉴판, 출석부, 쇼핑 카트의 품목들 모두 이 단어에 해당합니다.',
      synonymAntonym: '항목을 나열한 record와 비슷하지만, 아무것도 기록되지 않은 blank 상태와는 반대됩니다.',
    }),
    {
      definition: 'A series of names, items, or numbers written or printed together in a specific order.',
      synonyms: ['inventory', 'catalog', 'register'],
      antonyms: ['disarray', 'disorder', 'jumble'],
      exampleSentences: [
        { en: 'Please check the items on the grocery shopping sheet before we leave the store.', ko: '가게를 떠나기 전에 식료품 쇼핑 목록에 있는 항목들을 확인해 주세요.' },
        { en: 'The teacher called out every name from the class attendance record to see who was missing.', ko: '선생님은 누가 결석했는지 확인하기 위해 학급 출석부의 모든 이름을 호명했습니다.' },
      ],
      wordDistractors: ['last', 'lost', 'fist'],
      definitionDistractors: [
        'a detailed map showing geographic features',
        'a single paragraph from a written document',
        'a mathematical formula used for calculations',
      ],
    }
  ),
  word('listen', '경청하다', 3, 'verb',
    ['말하다', '무시하다', '노래하다', '달리다', '잠자다', '쓰다', '읽다', '가르치다', '기다리다', '만들다'],
    tips({
      etymology: '고대 영어 hlystan에서 유래했으며, 소리에 주의를 기울인다는 의미를 담고 있습니다.',
      visual: '한 사람이 손을 귀에 대고 상대방의 입술을 진지하게 바라보는 모습을 상상하세요.',
      soundAlike: '\'리슨\'은 \'입술(Lip)을 쓴\' 사람의 말을 듣는 상황으로 연상하면 쉽습니다.',
      context: '단순히 소리가 들리는 hear와 달리, 의도를 가지고 집중할 때 주로 사용됩니다.',
      synonymAntonym: '집중하는 attend와 반대로 소리를 못 본 체하는 ignore를 함께 기억하세요.',
    }),
    {
      definition: 'to give attention to sound or action in order to hear and understand what is being said',
      synonyms: ['hearken', 'attend', 'heed'],
      antonyms: ['ignore', 'disregard', 'neglect'],
      exampleSentences: [
        { en: 'Please pay attention and hear what the teacher has to say during the lecture.', ko: '강의 중에 선생님이 하시는 말씀을 주의 깊게 잘 들어주세요.' },
        { en: 'The audience sat in complete silence to catch every note of the beautiful violin solo.', ko: '청중들은 아름다운 바이올린 독주의 모든 음을 경청하기 위해 완벽한 침묵 속에 앉아 있었습니다.' },
      ],
      wordDistractors: ['glisten', 'lessen', 'hasten'],
      definitionDistractors: [
        'to speak quietly so others cannot hear',
        'to produce musical sounds with the voice',
        'to write down information for future reference',
      ],
    }
  ),
  word('literal', '문자의', 9, 'adjective',
    ['비유적인', '추상적인', '상징적인', '함축적인', '가상의', '허구의', '간접적인', '모호한', '비현실적인', '과장된'],
    tips({
      etymology: '라틴어 \'littera(글자)\'에서 유래하여, 글자 그대로의 의미를 나타냅니다.',
      visual: '책에 적힌 글자 하나하나를 돋보기로 들여다보며 토씨 하나 틀리지 않게 읽는 모습을 상상하세요.',
      soundAlike: '리터럴 -> \'리터(Liter)를 다 채울\' 만큼 정확하고 꽉 찬 의미라고 연상해 보세요.',
      context: '비유나 은유가 아닌, 사전적 정의 그대로를 강조할 때 주로 쓰입니다.',
      synonymAntonym: '정확한 사실을 말하는 verbatim과 상상력을 발휘하는 figurative를 대조해 보세요.',
    }),
    {
      definition: 'taking words in their usual or most basic sense without metaphor or exaggeration',
      synonyms: ['verbatim', 'exact', 'unvarnished'],
      antonyms: ['figurative', 'metaphorical', 'symbolic'],
      exampleSentences: [
        { en: 'The translation was too focused on the basic meaning of each word and missed the overall tone.', ko: '그 번역은 각 단어의 문자 그대로의 의미에 너무 치중해서 전체적인 어조를 놓쳤다.' },
        { en: 'She interpreted my sarcastic comment in a factual way, leading to a funny misunderstanding.', ko: '그녀는 나의 비꼬는 말을 글자 그대로 받아들여서 재미있는 오해가 생겼다.' },
      ],
      wordDistractors: ['litter', 'liberal', 'lateral'],
      definitionDistractors: [
        'using exaggeration to emphasize a point',
        'expressed through artistic symbols and imagery',
        'based on personal feelings rather than facts',
      ],
    }
  ),
  word('literature', '문학', 7, 'noun',
    ['구두 수선공', '액과', '시리얼, 곡물', '정원', '해초, 미역', '지하철', '산꼭대기', '요소', '법률, 법규', '긴장, 갈등'],
    tips({
      etymology: '라틴어 \'littera(글자)\'에서 유래하여, 글자로 기록된 예술 작품 전체를 의미하게 되었습니다.',
      visual: '도서관의 높은 서가에 빼곡히 꽂혀 있는 고전 소설들과 시집들을 상상해 보세요.',
      soundAlike: '\'리터러처\'라고 발음하며, \'리터(Liter)\' 단위만큼 많은 책들이 쌓여 있는 모습을 연상하세요.',
      context: '단순한 정보 전달용 글이 아니라 예술적 가치가 있는 소설, 시, 희곡 등을 통칭할 때 주로 쓰입니다.',
      synonymAntonym: 'writings나 letters와 비슷하지만, 가벼운 글보다는 학문적이고 예술적인 저작물을 뜻합니다.',
    }),
    {
      definition: 'written works, such as novels, poems, and plays, that are regarded as having artistic or intellectual value',
      synonyms: ['writings', 'letters', 'prose'],
      antonyms: ['speech', 'illiteracy', 'ignorance'],
      exampleSentences: [
        { en: 'She decided to major in English literature to study the works of Shakespeare and Milton.', ko: '그녀는 셰익스피어와 밀턴의 작품을 공부하기 위해 영문학을 전공하기로 결심했다.' },
        { en: 'The professor assigned a list of classic literature that every student must read before the semester ends.', ko: '교수님은 학기가 끝나기 전에 모든 학생이 읽어야 할 고전 문학 목록을 과제로 내주었다.' },
      ],
      wordDistractors: ['literate', 'litter', 'liturgy'],
      definitionDistractors: [
        'the ability to read and write in a language',
        'a detailed scientific report on an experiment',
        'a collection of laws governing a country',
      ],
    }
  ),
  word('little', '작은', 1, 'adjective',
    ['거대한', '복잡한', '중요한', '일반적인', '강력한', '신속한', '위험한', '영원한', '특별한', '희귀한'],
    tips({
      etymology: '고대 영어 lytel에서 유래하여 크기나 양이 적음을 나타내는 뿌리를 가지고 있습니다.',
      visual: '거대한 코끼리 옆에 서 있는 아주 작은 생쥐의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'리틀\'인데, \'니(이)틀\'처럼 아주 좁고 작은 틈을 연상하면 쉽습니다.',
      context: '주로 어린 아이를 가리키거나 양이 아주 적어 거의 없을 때 자주 쓰입니다.',
      synonymAntonym: 'small과 비슷하지만 감정적인 애착이 섞일 때가 많고, 반대로 huge는 압도적인 크기를 뜻합니다.',
    }),
    {
      definition: 'small in size, amount, or degree compared to what is average or expected',
      synonyms: ['small', 'tiny', 'slight'],
      antonyms: ['large', 'huge', 'enormous'],
      exampleSentences: [
        { en: 'A cute puppy was playing with a small ball in the garden.', ko: '귀여운 강아지 한 마리가 정원에서 작은 공을 가지고 놀고 있었다.' },
        { en: 'There is only a small amount of milk left in the fridge.', ko: '냉장고에 우유가 아주 조금밖에 남지 않았다.' },
      ],
      wordDistractors: ['litter', 'latte', 'brittle'],
      definitionDistractors: [
        'having great importance or significance',
        'moving at a very high speed',
        'containing a large number of parts or pieces',
      ],
    }
  ),
  word('live', '살다', 2, 'verb',
    ['죽다', '떠나다', '멈추다', '숨다', '일하다', '기다리다', '변하다', '이기다', '잠들다', '싸우다'],
    tips({
      etymology: '고대 영어 \'libban\'에서 유래하여 생명을 유지하고 존재한다는 근본적인 의미를 담고 있습니다.',
      visual: '따뜻한 집 안에서 가족들과 함께 식사를 하며 웃고 있는 생생한 삶의 현장을 상상해 보세요.',
      soundAlike: '\'리브\'라고 발음하며, 잎사귀를 뜻하는 \'leaf\'가 생명력을 상징하듯 살아있음을 연결해 보세요.',
      context: '거주지나 생존 상태를 나타낼 때 주로 쓰이며, 방송에서는 실시간 생중계라는 뜻으로도 확장됩니다.',
      synonymAntonym: '존재하다를 뜻하는 exist와 반대되는 개념인 die를 짝지어 기억하면 명확해집니다.',
    }),
    {
      definition: 'To remain alive or to reside in a specific place for a long period of time.',
      synonyms: ['exist', 'dwell', 'reside'],
      antonyms: ['die', 'perish', 'expire'],
      exampleSentences: [
        { en: 'Many diverse species of plants and animals continue to exist and thrive in this tropical rainforest.', ko: '많은 다양한 종의 식물과 동물들이 이 열대 우림에서 계속해서 살아가고 번성합니다.' },
        { en: 'They decided to settle down and make a permanent home in a small village near the mountains.', ko: '그들은 산 근처의 작은 마을에 정착하여 영구적인 집을 짓고 살기로 결정했습니다.' },
      ],
      wordDistractors: ['give', 'dive', 'hive'],
      definitionDistractors: [
        'to broadcast an event in real time',
        'to perform on stage before an audience',
        'to experience strong emotions intensely',
      ],
    }
  ),
  word('living room', '거실', 3, 'noun',
    ['침실', '주방', '욕실', '현관', '베란다', '다용도실', '서재', '지하실', '창고', '옥상'],
    tips({
      etymology: '살아가는(living) 공간(room)이라는 뜻이 합쳐져 가족이 주로 생활하는 중심 공간을 의미합니다.',
      visual: '커다란 소파와 TV가 놓여 있고 온 가족이 모여 앉아 쉬고 있는 따뜻한 풍경을 상상해 보세요.',
      soundAlike: '리빙룸 - \'리본\'을 단 \'룸(방)\'이라고 생각하며 예쁘게 꾸며진 거실을 떠올려 보세요.',
      context: '주로 집의 중심에 위치하며 손님을 맞이하거나 휴식을 취할 때 가장 많이 언급되는 장소입니다.',
      synonymAntonym: '가족이 모이는 lounge와 비슷하지만, 사적인 공간인 bedroom과는 반대되는 성격을 가집니다.',
    }),
    {
      definition: 'The main indoor area in a house used for relaxing, watching television, and entertaining guests.',
      synonyms: ['lounge', 'sitting room', 'parlor'],
      antonyms: ['bedroom', 'kitchen', 'bathroom'],
      exampleSentences: [
        { en: 'The whole family gathered in the spacious area to watch a movie together.', ko: '온 가족이 영화를 함께 보기 위해 넓은 거실에 모였습니다.' },
        { en: 'A comfortable gray sofa and a wooden coffee table are placed in the center of the house.', ko: '편안한 회색 소파와 나무 커피 탁자가 집 중앙 거실에 놓여 있습니다.' },
      ],
      wordDistractors: ['diving room', 'lining room', 'giving room'],
      definitionDistractors: [
        'a private room used for sleeping and resting',
        'a space designed for preparing and cooking food',
        'an outdoor area attached to the side of a house',
      ],
    }
  ),
  word('load', '짐', 4, 'noun',
    ['팬들', '브리슬콘 소나무', '마을', '카레', '밧줄', '설명서; 수동의', '본능', '쌍동이', '장점', '기원'],
    tips({
      etymology: '고대 영어 \'lad\'에서 유래했으며, 이는 길이나 운반을 의미하여 현재의 \'짐\'이라는 뜻으로 발전했습니다.',
      visual: '트럭 뒷칸에 무거운 상자들이 가득 쌓여 있는 모습을 상상해 보세요.',
      soundAlike: '\'로드\'라고 발음하며, 길(road) 위를 달리는 차에 실린 무거운 \'짐\'을 연상하면 쉽습니다.',
      context: '물리적인 화물뿐만 아니라 마음의 짐이나 업무량 같은 추상적인 부담을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'cargo나 burden과 비슷하지만, 텅 빈 상태를 뜻하는 emptiness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a heavy amount of items or material being carried by a vehicle, person, or animal',
      synonyms: ['cargo', 'freight', 'burden'],
      antonyms: ['emptiness', 'void', 'vacuum'],
      exampleSentences: [
        { en: 'The truck was carrying a full capacity of bricks to the construction site.', ko: '그 트럭은 건설 현장으로 벽돌을 가득 싣고 가고 있었습니다.' },
        { en: 'She felt a huge emotional weight lift off her shoulders after finishing the project.', ko: '그녀는 프로젝트를 마친 후 어깨에서 큰 감정적 짐이 내려가는 것을 느꼈습니다.' },
      ],
      wordDistractors: ['loaf', 'road', 'toad'],
      definitionDistractors: [
        'a paved surface used for driving vehicles',
        'a lightweight package sent through the mail',
        'a small amount of money saved over time',
      ],
    }
  ),
  word('loan', '대부', 5, 'noun',
    ['이자', '예금', '투자', '부채', '담보', '송금', '환전', '결제', '세금', '기부'],
    tips({
      etymology: '고대 노르웨이어 \'lan\'에서 유래되었으며, 이는 \'빌려주다\'라는 의미를 담고 있습니다.',
      visual: '은행 창구에서 서류에 서명하고 현금 뭉치를 건네받는 장면을 상상해 보세요.',
      soundAlike: '\'론\'이라는 발음은 한국에서도 \'주택담보대출(모기지론)\'처럼 금융 용어로 자주 쓰입니다.',
      context: '주로 은행이나 금융 기관에서 돈을 빌릴 때나 친구에게 물건을 잠시 빌려줄 때 사용됩니다.',
      synonymAntonym: '돈을 빌려주는 credit과 유의어이며, 빌린 것을 갚는 repayment와 반대되는 개념입니다.',
    }),
    {
      definition: 'A sum of money that is borrowed and is expected to be paid back with interest.',
      synonyms: ['advance', 'credit', 'mortgage'],
      antonyms: ['repayment', 'gift', 'grant'],
      exampleSentences: [
        { en: 'The bank approved his application for a personal loan to start a small business.', ko: '은행은 소자본 창업을 위한 그의 개인 대출 신청을 승인했습니다.' },
        { en: 'She had to pay back the entire loan within five years according to the contract.', ko: '그녀는 계약에 따라 5년 이내에 대출금 전액을 상환해야 했습니다.' },
      ],
      wordDistractors: ['loin', 'lone', 'moan'],
      definitionDistractors: [
        'a permanent transfer of money as a gift',
        'the interest rate charged by a central bank',
        'a deposit placed into a savings account',
      ],
    }
  ),
  word('local', '지역의', 6, 'adjective',
    ['전역의', '국제적인', '우주의', '먼', '추상적인', '일반적인', '가상의', '영구적인', '인공적인', '거대한'],
    tips({
      etymology: '라틴어 \'locus(장소)\'에서 유래하여 특정 지점이나 구역에 한정된 상태를 나타냅니다.',
      visual: '동네 편의점이나 우리 집 바로 앞 버스 정류장처럼 가까운 주변 지도를 떠올려 보세요.',
      soundAlike: '\'로컬\' 발음이 \'노크(knock)\'와 비슷하니, 우리 동네 이웃집 문을 노크하는 장면을 상상하세요.',
      context: '여행지에서 유명 체인점 대신 그 지역 사람들만 아는 맛집을 찾을 때 자주 쓰입니다.',
      synonymAntonym: '특정 지역의 \'regional\'과 비슷하지만, 전 세계적인 \'global\'과는 정반대 개념입니다.',
    }),
    {
      definition: 'Relating to or occurring in a particular area, city, or town rather than a larger region.',
      synonyms: ['regional', 'nearby', 'neighborhood'],
      antonyms: ['global', 'national', 'international'],
      exampleSentences: [
        { en: 'The farmers sell their fresh vegetables at the nearby market to support the community.', ko: '농부들은 지역 사회를 돕기 위해 인근 시장에서 신선한 채소를 판매합니다.' },
        { en: 'Heavy rain caused some minor flooding on several roads in the area.', ko: '폭우로 인해 그 지역의 몇몇 도로에 약간의 침수가 발생했습니다.' },
      ],
      wordDistractors: ['vocal', 'focal', 'locus'],
      definitionDistractors: [
        'affecting all countries around the world equally',
        'existing only in digital or virtual form',
        'belonging to a government or official institution',
      ],
    }
  ),
  word('locate', '위치시키다', 7, 'verb',
    ['요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '속죄하다, 보상하다', '기대다, 이용하다', '연장하다', '번역하다'],
    tips({
      etymology: '라틴어 \'locus(장소)\'에서 유래하여 특정 장소에 두거나 그 위치를 찾아내는 동작을 의미합니다.',
      visual: '지도 위에서 돋보기를 들고 보물 상자가 숨겨진 정확한 지점을 찾아내는 모습을 상상하세요.',
      soundAlike: '\'로케이트\'는 영화 촬영지인 \'로케이션\'과 발음이 비슷하므로 장소를 정하는 장면을 떠올리면 쉽습니다.',
      context: '주로 잃어버린 물건을 찾거나, 새로운 사무실의 위치를 정할 때, 혹은 특정 건물을 지도에서 찾을 때 사용됩니다.',
      synonymAntonym: 'find와 유의어 관계이며, 장소를 잃어버리거나 놓치는 lose와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to discover the exact place or position of something or to establish in a particular area',
      synonyms: ['find', 'position', 'detect'],
      antonyms: ['lose', 'displace', 'miss'],
      exampleSentences: [
        { en: 'Rescue teams are using drones to find the exact spot where the hikers are stranded.', ko: '구조팀은 등산객들이 고립된 정확한 지점을 찾기 위해 드론을 사용하고 있습니다.' },
        { en: 'The tech company decided to set up its new headquarters in the heart of the city.', ko: '그 기술 회사는 도시 중심부에 새로운 본사를 세우기로 결정했습니다.' },
      ],
      wordDistractors: ['locale', 'lockate', 'locket'],
      definitionDistractors: [
        'to move an object to a hidden location',
        'to permanently remove something from a place',
        'to memorize the exact details of an event',
      ],
    }
  ),
  word('lock', '자물쇠', 4, 'noun',
    ['열쇠', '문고리', '금고', '경보', '사슬', '경첩', '창문', '울타리', '장벽', '통로'],
    tips({
      etymology: '고대 영어 \'loc\'에서 유래했으며, 닫거나 가두는 장치를 뜻합니다.',
      visual: '문 앞에 묵직하게 걸려 있는 쇠사슬과 자물쇠 뭉치를 상상해 보세요.',
      soundAlike: '발음이 \'라크\'와 비슷하므로, 문을 \'락\' 걸어 잠그는 소리를 연상하세요.',
      context: '귀중품을 보관하거나 보안이 필요한 문을 고정할 때 주로 쓰이는 명사입니다.',
      synonymAntonym: 'padlock과 유사하며, 열쇠인 key와는 짝꿍이지만 반대되는 개념입니다.',
    }),
    {
      definition: 'A mechanical device used to keep a door or container closed, requiring a key or combination to open.',
      synonyms: ['fastener', 'padlock', 'clasp'],
      antonyms: ['key', 'opening', 'release'],
      exampleSentences: [
        { en: 'She forgot the combination to the heavy metal device on her locker.', ko: '그녀는 사물함에 걸린 무거운 금속 장치의 비밀번호를 잊어버렸다.' },
        { en: 'The old gate was secured with a rusty iron mechanism that no longer turned.', ko: '오래된 대문은 더 이상 돌아가지 않는 녹슨 철제 장치로 고정되어 있었다.' },
      ],
      wordDistractors: ['loch', 'luck', 'block'],
      definitionDistractors: [
        'a key used to open a sealed container',
        'a handle that turns to open a door',
        'a chain attached to an anchor on a ship',
      ],
    }
  ),
  word('log', '통나무', 5, 'noun',
    ['나뭇잎', '뿌리', '열매', '가지', '숲', '흙', '바위', '강물', '풀밭', '꽃잎'],
    tips({
      etymology: '중세 영어 \'logge\'에서 유래했으며, 원래는 큰 나무에서 잘라낸 무거운 덩어리를 의미합니다.',
      visual: '캠프파이어를 할 때 불 속에 던져 넣는 껍질이 거친 둥근 나무 기둥을 상상해 보세요.',
      soundAlike: '\'로그\'라고 발음되는데, 컴퓨터 \'로그인\'할 때의 기록이라는 뜻도 있지만 여기서는 묵직한 나무토막입니다.',
      context: '주로 땔감으로 쓰이거나 집을 짓는 재료, 혹은 강물에 떠내려가는 모습으로 자주 등장합니다.',
      synonymAntonym: 'timber나 wood와 비슷하지만, 가공되지 않은 덩어리 형태라는 점이 특징입니다.',
    }),
    {
      definition: 'A thick piece of a tree trunk or a large branch that has fallen or been cut off.',
      synonyms: ['timber', 'firewood', 'trunk'],
      antonyms: ['twig', 'leaf', 'seedling'],
      exampleSentences: [
        { en: 'The hikers sat on a fallen tree trunk to rest their tired legs.', ko: '하이커들은 피곤한 다리를 쉬게 하기 위해 쓰러진 통나무 위에 앉았다.' },
        { en: 'He chopped the large piece of wood into smaller bits for the fireplace.', ko: '그는 벽난로에 쓰기 위해 커다란 통나무를 작은 조각들로 팼다.' },
      ],
      wordDistractors: ['lag', 'fog', 'bog'],
      definitionDistractors: [
        'a written record of daily events or activities',
        'a small branch covered with green leaves',
        'a flat piece of stone used for building walls',
      ],
    }
  ),
  word('logic', '논리학', 6, 'noun',
    ['감성', '직관', '혼돈', '충동', '우연', '모순', '허구', '감정', '오류', '신화'],
    tips({
      etymology: '그리스어 \'logos\'에서 유래했으며, 이는 말, 이성, 원리를 뜻합니다.',
      visual: '복잡하게 얽힌 퍼즐 조각들이 질서 정연하게 하나로 맞춰지는 그림을 상상해 보세요.',
      soundAlike: '\'로직\'은 \'노련한 지식\'의 줄임말처럼 들리기도 합니다. 이성적인 지식을 떠올리세요.',
      context: '수학 문제나 철학적 토론에서 타당한 결론을 도출할 때 반드시 필요한 사고 방식입니다.',
      synonymAntonym: 'reasoning과 유의어 관계이며, 비논리적인 상태를 뜻하는 absurdity와 반대됩니다.',
    }),
    {
      definition: 'A particular method of reasoning or a system of principles used to determine the validity of an argument.',
      synonyms: ['reasoning', 'rationality', 'analysis'],
      antonyms: ['irrationality', 'unreason', 'absurdity'],
      exampleSentences: [
        { en: 'The detective used cold, hard reasoning to solve the mysterious case.', ko: '그 형사는 신비로운 사건을 해결하기 위해 냉철하고 확고한 추론법을 사용했습니다.' },
        { en: 'Her argument lacks a clear internal structure, making it difficult to follow.', ko: '그녀의 주장에는 명확한 내부적 체계가 부족하여 이해하기 어렵습니다.' },
      ],
      wordDistractors: ['lodge', 'lofty', 'tragic'],
      definitionDistractors: [
        'a branch of mathematics dealing with numbers',
        'a creative process used in artistic expression',
        'a physical exercise routine for building strength',
      ],
    }
  ),
  word('lone', '혼자의', 4, 'adjective',
    ['함께하는', '복잡한', '시끄러운', '가득한', '다양한', '친근한', '유명한', '거대한', '빠른', '단단한'],
    tips({
      etymology: 'alone(혼자)에서 a가 탈락하며 만들어진 단어로, 고립된 상태를 강조합니다.',
      visual: '끝없이 펼쳐진 넓은 초원 위에 홀로 서 있는 커다란 나무 한 그루를 상상해 보세요.',
      soundAlike: '대출을 뜻하는 loan과 발음이 같지만, 혼자 남겨진 외로운 상황을 떠올려야 합니다.',
      context: '주로 명사 앞에서 쓰여 유일하거나 고립된 존재임을 나타낼 때 자주 사용됩니다.',
      synonymAntonym: 'solitary와 비슷하지만, group이나 crowded와는 정반대의 상황을 나타냅니다.',
    }),
    {
      definition: 'being the only one of a particular type or being without any companions',
      synonyms: ['solitary', 'single', 'isolated'],
      antonyms: ['accompanied', 'crowded', 'multiple'],
      exampleSentences: [
        { en: 'A solitary figure stood as a survivor on the deserted island.', ko: '한 명의 생존자가 버려진 섬에 홀로 서 있었다.' },
        { en: 'The wolf howled at the moon from the top of the snowy mountain.', ko: '그 늑대는 눈 덮인 산 정상에서 달을 향해 울부짖었다.' },
      ],
      wordDistractors: ['loner', 'bone', 'tone'],
      definitionDistractors: [
        'existing in a large group or community',
        'feeling content and satisfied with life',
        'decorated with elaborate and colorful patterns',
      ],
    }
  ),
  word('long', '긴', 1, 'adjective',
    ['짧은', '넓은', '좁은', '높은', '낮은', '빠른', '느린', '무거운', '가벼운', '두꺼운'],
    tips({
      etymology: '고대 영어 \'lang\'에서 유래하여 물리적인 길이나 시간의 연장을 의미하게 되었습니다.',
      visual: '기차의 끝없는 칸들이나 아주 길게 늘어진 국수 가닥을 상상해 보세요.',
      soundAlike: '\'롱\'다리라는 표현처럼 다리가 길쭉하게 뻗은 모습을 연상하면 쉽습니다.',
      context: '거리뿐만 아니라 기다림의 시간이나 영화의 상영 시간 등을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '길이가 연장된 상태인 extended와 반대되는 짧은 상태인 short를 함께 기억하세요.',
    }),
    {
      definition: 'Measuring a great distance from one end to the other or lasting for a considerable period of time.',
      synonyms: ['extended', 'lengthy', 'elongated'],
      antonyms: ['short', 'brief', 'limited'],
      exampleSentences: [
        { en: 'The marathon runners had to endure a very exhausting and arduous path to the finish line.', ko: '마라톤 선수들은 결승선까지 매우 지치고 먼 길을 견뎌야 했습니다.' },
        { en: 'The meeting lasted for three hours, which felt much more tedious than we expected.', ko: '회의는 3시간 동안 지속되었는데, 이는 우리가 예상했던 것보다 훨씬 더 지루하게 느껴졌습니다.' },
      ],
      wordDistractors: ['lung', 'gong', 'song'],
      definitionDistractors: [
        'having a very wide or broad surface area',
        'reaching a great height above the ground',
        'weighing significantly more than average',
      ],
    }
  ),
  word('look', '보다', 2, 'verb',
    ['듣다', '말하다', '만지다', '냄새맡다', '걷다', '뛰다', '먹다', '자다', '쓰다', '읽다'],
    tips({
      etymology: '고대 영어 \'locian\'에서 유래하여 눈을 특정 방향으로 돌려 주의를 기울이는 행위를 의미합니다.',
      visual: '커다란 돋보기를 들고 무언가를 자세히 관찰하는 탐정의 눈동자를 상상해 보세요.',
      soundAlike: '\'룩\' 소리가 \'눈\'과 비슷하게 느껴진다면, 눈으로 무언가를 훑어보는 장면을 연결하세요.',
      context: '단순히 보이는 것(see)보다 의지를 가지고 시선을 던질 때 주로 사용됩니다.',
      synonymAntonym: '시선을 고정하는 gaze와 반대로 눈을 감아버리는 ignore를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'To direct one\'s gaze in a particular direction in order to see something.',
      synonyms: ['glance', 'stare', 'gaze'],
      antonyms: ['ignore', 'overlook', 'neglect'],
      exampleSentences: [
        { en: 'Please look at the whiteboard while the teacher explains the math problem.', ko: '선생님이 수학 문제를 설명하는 동안 화이트보드를 봐 주세요.' },
        { en: 'She had to look through the window to see if it was raining outside.', ko: '그녀는 밖에 비가 오는지 확인하기 위해 창밖을 내다봐야 했습니다.' },
      ],
      wordDistractors: ['lock', 'hook', 'book'],
      definitionDistractors: [
        'to touch something to determine its texture',
        'to hear a sound coming from a distance',
        'to taste food before serving it to guests',
      ],
    }
  ),
  word('loose', '헐거운, 느슨한', 7, 'adjective',
    ['단단한', '엄격한', '정확한', '좁은', '고정된', '밀폐된', '팽팽한', '압축된', '신중한', '결속된'],
    tips({
      etymology: '고대 노르웨이 어원인 \'lauss\'에서 유래하여 \'자유로운\' 혹은 \'묶이지 않은\' 상태를 뜻하게 되었습니다.',
      visual: '헐렁한 옷을 입었을 때 소매가 너풀거리는 모습이나 매듭이 풀려 헐거워진 밧줄을 상상해 보세요.',
      soundAlike: '발음이 \'루즈\'와 비슷하므로, 화장이 번지거나 분위기가 \'루즈해지다\'라고 할 때의 나른하고 풀어진 느낌을 연결하세요.',
      context: '나사가 헐겁거나 옷이 몸에 붙지 않고 넉넉할 때, 혹은 통제가 느슨할 때 주로 사용됩니다.',
      synonymAntonym: 'tight(꽉 조이는)와 반대되는 개념으로, baggy(헐렁한)와 비슷한 뉘앙스를 가집니다.',
    }),
    {
      definition: 'not firmly or tightly fixed in place, or not fitting closely to the body',
      synonyms: ['slack', 'baggy', 'relaxed'],
      antonyms: ['tight', 'secure', 'rigid'],
      exampleSentences: [
        { en: 'The handle on the front door has become very shaky because the screws are not tight.', ko: '나사가 조여져 있지 않아서 앞문의 손잡이가 매우 덜렁거립니다.' },
        { en: 'She prefers wearing oversized sweaters that provide a comfortable and airy fit.', ko: '그녀는 편안하고 헐렁한 느낌을 주는 오버사이즈 스웨터 입는 것을 선호합니다.' },
      ],
      wordDistractors: ['goose', 'moose', 'noose'],
      definitionDistractors: [
        'tightly fastened so nothing can escape',
        'precisely measured to exact specifications',
        'arranged in a strict and orderly manner',
      ],
    }
  ),
  word('lose', '잃다', 4, 'verb',
    ['찾다', '얻다', '이기다', '보관하다', '성공하다', '유지하다', '발견하다', '획득하다', '승리하다', '지키다'],
    tips({
      etymology: '고대 영어 \'losian\'에서 유래되었으며, 무언가가 파괴되거나 길을 잃어버린다는 의미에서 시작되었습니다.',
      visual: '주머니에 구멍이 나서 동전이 하나씩 바닥으로 떨어져 사라지는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'루즈\'와 비슷하므로, 옷이 헐거워(loose) 몸에서 빠져나가 잃어버리는 상황을 연상하세요.',
      context: '경기에서 패배하거나, 물건을 분실하거나, 사랑하는 사람을 떠나보낼 때 폭넓게 사용됩니다.',
      synonymAntonym: '무언가를 놓치는 misplace와 반대로 다시 손에 넣는 find를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to become unable to find something or to fail to keep possession of a quality or characteristic',
      synonyms: ['misplace', 'forfeit', 'drop'],
      antonyms: ['find', 'keep', 'win'],
      exampleSentences: [
        { en: 'Many people fear they might wander off and get confused if they ever lose their way in the dense forest.', ko: '많은 사람들은 울창한 숲에서 길을 잃으면 헤매다가 혼란에 빠질까 봐 두려워합니다.' },
        { en: 'The local basketball team worked hard but unfortunately had to suffer a defeat and lose the final championship game.', ko: '지역 농구팀은 열심히 노력했지만 불행히도 패배를 겪고 최종 결승전에서 져야만 했습니다.' },
      ],
      wordDistractors: ['loose', 'chose', 'hose'],
      definitionDistractors: [
        'to gain control of a valuable resource',
        'to deliberately hide something from view',
        'to exchange one item for another of equal value',
      ],
    }
  ),
  word('loss', '잃음', 5, 'noun',
    ['이익', '성공', '획득', '증가', '발전', '승리', '보상', '성장', '축적', '완성'],
    tips({
      etymology: '고대 영어 \'los\'에서 유래하여 파괴나 실종을 의미하며, 무언가를 더 이상 소유하지 못하게 된 상태를 나타냅니다.',
      visual: '지갑을 잃어버려 텅 빈 주머니를 뒤적거리는 허탈한 뒷모습을 상상해 보세요.',
      soundAlike: '발음이 \'로스\'이므로, 고기를 구울 때 수분이 빠져나가 무게가 줄어드는 \'로스율\'을 떠올리면 쉽습니다.',
      context: '비즈니스에서는 적자를 의미하고, 개인적인 관계에서는 사별이나 이별의 슬픔을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 잃는 deficit과 반대로 무언가를 얻는 profit을 대조해서 기억하세요.',
    }),
    {
      definition: 'the state of no longer having something or having less of it than before',
      synonyms: ['deprivation', 'deficit', 'reduction'],
      antonyms: ['profit', 'gain', 'advantage'],
      exampleSentences: [
        { en: 'The company reported a significant financial deficit after the failed investment.', ko: '그 회사는 투자 실패 이후 상당한 재정적 손실을 보고했습니다.' },
        { en: 'She struggled to cope with the emotional pain of her grandmother\'s passing.', ko: '그녀는 할머니의 죽음으로 인한 정서적 상실감을 견뎌내기 위해 애썼습니다.' },
      ],
      wordDistractors: ['lost', 'toss', 'moss'],
      definitionDistractors: [
        'a sudden increase in wealth or possessions',
        'a reward given for completing a difficult task',
        'a feeling of satisfaction after achieving a goal',
      ],
    }
  ),
  word('lot', '제비', 6, 'noun',
    ['로잔 (스위스 도시)', '정자', '자격', '강사, 교관', '단절, 퇴직금', '건초', '아랍어', '습격', '혜성', '인형'],
    tips({
      etymology: '고대 영어 hlot에서 유래하여 \'몫\'이나 \'운명\'을 결정하기 위해 던지는 물건을 뜻하게 되었습니다.',
      visual: '상자 안에 들어있는 여러 개의 종이 조각 중 하나를 손으로 뽑는 장면을 상상해 보세요.',
      soundAlike: '주차장(parking lot)에 차가 가득 찬 것처럼, 제비뽑기 통에 종이가 가득 찬 모습을 연상하세요.',
      context: '운명을 결정하거나 순서를 정할 때 무작위로 선택하는 도구로 주로 쓰입니다.',
      synonymAntonym: 'fate나 fortune처럼 운명적인 요소를 포함하며, 의도적인 choice와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An object used as a method of deciding something by chance, typically by picking one item from a group.',
      synonyms: ['token', 'straw', 'counter'],
      antonyms: ['choice', 'design', 'plan'],
      exampleSentences: [
        { en: 'The winner of the competition was decided by drawing a lot from the hat.', ko: '대회의 우승자는 모자에서 제비를 뽑아 결정되었습니다.' },
        { en: 'Each member of the team cast a lot to determine who would lead the first mission.', ko: '팀의 각 구성원들은 누가 첫 번째 임무를 이끌지 결정하기 위해 제비를 던졌습니다.' },
      ],
      wordDistractors: ['loot', 'blot', 'slot'],
      definitionDistractors: [
        'a large piece of land used for farming',
        'a specific quantity of goods sold together',
        'a designated area for parking vehicles',
      ],
    }
  ),
  word('loud', '시끄러운', 7, 'adjective',
    ['조용한', '부드러운', '희미한', '차분한', '평화로운', '은은한', '고요한', '낮은', '침착한', '잔잔한'],
    tips({
      etymology: '고대 영어 \'hlud\'에서 유래했으며, 멀리서도 들릴 만큼 큰 소리를 의미합니다.',
      visual: '대형 스피커가 진동하며 주변 물건들이 흔들리는 시끄러운 콘서트장을 상상해 보세요.',
      soundAlike: '\'라우드\' 발음이 \'나오다\'와 비슷하니, 소리가 밖으로 크게 터져 나오는 느낌으로 기억하세요.',
      context: '음악 소리가 너무 크거나 목소리가 지나치게 높을 때 주로 사용되는 형용사적 성격이 강한 단어입니다.',
      synonymAntonym: 'noisy와 유의어 관계이며, 반대로 소리가 거의 없는 상태는 quiet라고 합니다.',
    }),
    {
      definition: 'producing a great deal of volume or noise that is easily heard or disturbing',
      synonyms: ['noisy', 'deafening', 'blaring'],
      antonyms: ['quiet', 'silent', 'faint'],
      exampleSentences: [
        { en: 'The music from the neighbor\'s party was so powerful that I could not sleep.', ko: '이웃집 파티에서 나오는 음악 소리가 너무 시끄러워서 잠을 잘 수 없었다.' },
        { en: 'He spoke in a booming voice to make sure everyone in the large hall could hear him.', ko: '그는 큰 홀에 있는 모든 사람이 들을 수 있도록 큰 목소리로 말했다.' },
      ],
      wordDistractors: ['cloud', 'laud', 'lord'],
      definitionDistractors: [
        'having a bright and vivid color appearance',
        'occurring suddenly without any warning',
        'moving at a very fast and dangerous speed',
      ],
    }
  ),
  word('lounge', '빈둥거리다', 4, 'verb',
    ['달리다', '서두르다', '일하다', '공부하다', '긴장하다', '수리하다', '조직하다', '발표하다', '계산하다', '청소하다'],
    tips({
      etymology: '프랑스어 s\'allonger(몸을 쭉 뻗다)에서 유래하여 편안하게 누워 있거나 쉬는 모습을 나타냅니다.',
      visual: '거실 소파에 몸을 길게 늘어뜨리고 TV를 보며 게으름을 피우는 사람의 모습을 상상해 보세요.',
      soundAlike: '공항의 \'라운지\'를 떠올려 보세요. 비행기를 기다리며 편안하게 쉬는 장소와 연결하면 쉽습니다.',
      context: '주로 주말이나 휴가 때 아무런 계획 없이 집에서 빈둥거리는 상황에서 자주 쓰입니다.',
      synonymAntonym: '활기차게 움직이는 \'hustle\'과는 반대로, 느긋하게 시간을 보내는 \'idle\'과 비슷합니다.',
    }),
    {
      definition: 'To spend time in a relaxed, lazy way, often by sitting or lying down comfortably.',
      synonyms: ['idle', 'loiter', 'relax'],
      antonyms: ['hustle', 'labor', 'exert'],
      exampleSentences: [
        { en: 'The students decided to spend their entire Sunday afternoon by the pool.', ko: '학생들은 일요일 오후 내내 수영장 옆에서 빈둥거리며 보내기로 했다.' },
        { en: 'Many cats prefer to lie in the sun all day rather than hunting for mice.', ko: '많은 고양이들은 쥐를 잡으러 다니기보다 하루 종일 햇볕 아래서 빈둥거리는 것을 선호한다.' },
      ],
      wordDistractors: ['lunge', 'plunge', 'sponge'],
      definitionDistractors: [
        'to work intensely without taking any breaks',
        'to organize items into neat and tidy rows',
        'to engage in vigorous physical exercise',
      ],
    }
  ),
];
