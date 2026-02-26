import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch23: VocabItem[] = [
  word('ant', '개미', 1, 'noun',
    ['벌', '나비', '파리', '거미', '지렁이', '달팽이', '바퀴벌레', '잠자리', '메뚜기', '반딧불이'],
    tips({
      etymology: '라틴어 formīca에서 유래한 고대 영어 æmette를 거쳐 ant로 변형',
      visual: '일렬로 행진하는 개미 떼가 먹이를 나르는 모습',
      soundAlike: 'ant ≈ aunt(이모) - 발음 같음, 의미만 다름',
      context: 'Ants carried crumbs back to their nest.',
      synonymAntonym: '유의어: insect(곤충). 반의어 개념 없음(구체명사)',
    }),
    {
      definition: 'a small insect that lives in colonies and often works in groups',
      synonyms: ['insect', 'creature', 'colony member'],
      antonyms: [],
      exampleSentences: [
        { en: 'The ant carried a leaf twice its size.', ko: '개미가 자기 몸보다 두 배나 큰 나뭇잎을 옮기고 있었다.' },
        { en: 'Ants build intricate tunnels underground.', ko: '개미들은 땅속에 복잡한 터널을 만든다.' },
      ],
    }
  ),
  word('anxiety', '근심', 7, 'noun',
    ['기쁨', '평온', '안도', '희망', '확신', '냉정', '만족', '편안', '쾌활', '낙관'],
    tips({
      etymology: '라틴어 anxietās(좁다, 압박하다)에서 유래',
      visual: '걱정으로 이마를 찌푸리고 있는 사람',
      soundAlike: 'anxiety ≈ anxious(걱정되는) - 형용사형과 함께 암기',
      context: 'Her anxiety about the exam kept her awake.',
      synonymAntonym: 'Syn: worry, unease. Ant: calm, peace',
    }),
    {
      definition: 'a feeling of worry, nervousness, or unease about something uncertain',
      synonyms: ['worry', 'unease', 'nervousness'],
      antonyms: ['calm', 'peace', 'serenity'],
      exampleSentences: [
        { en: 'Her anxiety about the exam kept her awake all night.', ko: '시험에 대한 근심 때문에 그녀는 밤새 잠을 이루지 못했다.' },
        { en: 'He felt a surge of anxiety before the job interview.', ko: '그는 면접 전에 근심이 밀려오는 것을 느꼈다.' },
      ],
    }
  ),
  word('anxious', '걱정되는', 4, 'adjective',
    ['차분한', '안심한', '희망적인', '냉정한', '만족한', '편안한', '쾌활한', '무심한', '담대한', '느긋한'],
    tips({
      etymology: '라틴어 anxius(좁다)에서 유래, anxiety와 같은 어원',
      visual: '기다리는 사람이 손을 비비며 걸어다니는 모습',
      soundAlike: 'anxious ≈ anxiety(근심) - 명사형과 함께 암기',
      context: 'She was anxious about her son\'s health.',
      synonymAntonym: 'Syn: worried, nervous. Ant: calm, relaxed',
    }),
    {
      definition: 'feeling worried, nervous, or uneasy about something',
      synonyms: ['worried', 'nervous', 'uneasy'],
      antonyms: ['calm', 'relaxed', 'composed'],
      exampleSentences: [
        { en: 'She was anxious about her son\'s health.', ko: '그녀는 아들의 건강이 걱정되었다.' },
        { en: 'The long wait made everyone anxious.', ko: '긴 대기가 모두를 걱정되게 만들었다.' },
      ],
    }
  ),
  word('any', '어떤', 2, 'adjective',
    ['모든', '하나의', '이', '그', '특정한', '전혀', '오직', '단 하나', '정해진', '고유한'],
    tips({
      etymology: '고대 영어 ǣnig(하나)에서 유래',
      visual: '선택지들 앞에서 "아무거나" 손을 휘젓는 모습',
      soundAlike: 'any ≈ many(많은) - a와 m 차이로 구분',
      context: 'Do you have any questions?',
      synonymAntonym: '유의어: some(몇몇). 반대: no, none',
    }),
    {
      definition: 'one or some of a thing, no matter which; used in questions and negatives',
      synonyms: ['some', 'whichever', 'whatever'],
      antonyms: ['no', 'none', 'nothing'],
      exampleSentences: [
        { en: 'Do you have any questions?', ko: '어떤 질문 있으세요?' },
        { en: 'I couldn\'t find any books on that topic.', ko: '그 주제에 대한 어떤 책도 찾지 못했다.' },
      ],
    }
  ),
  word('apart', '떨어져서', 5, 'adverb',
    ['함께', '가까이', '붙어서', '인접하여', '나란히', '합쳐서', '연결되어', '한데', '밀착하여', '동반하여'],
    tips({
      etymology: 'a-(to) + part(부분) → "부분으로 나뉘어"',
      visual: '두 사람이 서로 멀리 떨어져 마주 보는 모습',
      soundAlike: 'apart ≈ a part(한 부분) - 붙이면 반대 의미',
      context: 'They have been living apart for years.',
      synonymAntonym: 'Syn: separately, asunder. Ant: together',
    }),
    {
      definition: 'separated by a distance; away from each other',
      synonyms: ['separately', 'asunder', 'individually'],
      antonyms: ['together', 'jointly', 'combined'],
      exampleSentences: [
        { en: 'They have been living apart for years.', ko: '그들은 몇 년간 떨어져서 살아왔다.' },
        { en: 'The two cities are fifty miles apart.', ko: '두 도시는 50마일 떨어져 있다.' },
      ],
    }
  ),
  word('apology', '사과', 6, 'noun',
    ['비난', '거부', '항변', '변명', '불평', '고발', '비판', '불만', '항의', '반박'],
    tips({
      etymology: '그리스어 apologia(변명, 변호)에서 유래, 나중에 사과의 의미로 확장',
      visual: '고개 숙여 "미안합니다" 하는 모습',
      soundAlike: 'apology ≈ apologize(사과하다) - 동사형과 함께 암기',
      context: 'He offered a sincere apology for his behavior.',
      synonymAntonym: 'Syn: regret, excuse. Ant: accusation, blame',
    }),
    {
      definition: 'a statement saying one is sorry for a mistake or offense',
      synonyms: ['regret', 'excuse', 'acknowledgment'],
      antonyms: ['accusation', 'blame', 'complaint'],
      exampleSentences: [
        { en: 'He offered a sincere apology for his behavior.', ko: '그는 자신의 행동에 대해 진심 어린 사과를 했다.' },
        { en: 'She demanded a public apology from the company.', ko: '그녀는 회사에 공개 사과를 요구했다.' },
      ],
    }
  ),
  word('apparent', '명백한', 7, 'adjective',
    ['모호한', '숨겨진', '불분명한', '애매한', '희미한', '감춰진', '알 수 없는', '불확실한', '의심스러운', '숨은'],
    tips({
      etymology: '라틴어 appārēre(appear의 어원) - "나타나다"에서 유래',
      visual: '빛나는 화살표로 "여기!" 하고 가리키는 명확한 표시',
      soundAlike: 'apparent ≈ appear(나타나다) - 같은 어근',
      context: 'It was apparent that she had been crying.',
      synonymAntonym: 'Syn: obvious, evident. Ant: hidden, obscure',
    }),
    {
      definition: 'clearly visible or understood',
      synonyms: ['obvious', 'evident', 'clear'],
      antonyms: ['hidden', 'obscure', 'unclear'],
      exampleSentences: [
        { en: 'It was apparent that she had been crying.', ko: '그녀가 울었던 것이 명백했다.' },
        { en: 'The apparent cause of the accident was brake failure.', ko: '사고의 명백한 원인은 브레이크 고장이었다.' },
      ],
    }
  ),
  word('appeal', '간청하다', 4, 'verb',
    ['거절하다', '명령하다', '무시하다', '거부하다', '단호히 말하다', '강요하다', '물리치다', '배척하다', '퇴짜놓다', '일축하다'],
    tips({
      etymology: '라틴어 appellāre(부르다, 호소하다)에서 유래',
      visual: '두 손을 모아 "제발" 빌며 간청하는 모습',
      soundAlike: 'appeal ≈ appear(나타나다) - ap-로 시작, 의미 다름',
      context: 'She appealed to the judge for leniency.',
      synonymAntonym: 'Syn: plead, implore. Ant: reject, refuse',
    }),
    {
      definition: 'to make a serious request; to be attractive or interesting',
      synonyms: ['plead', 'implore', 'beg'],
      antonyms: ['reject', 'refuse', 'dismiss'],
      exampleSentences: [
        { en: 'She appealed to the judge for leniency.', ko: '그녀는 판사에게 관대함을 간청했다.' },
        { en: 'The charity appealed for donations after the disaster.', ko: '재난 후 자선단체가 기부를 간청했다.' },
      ],
    }
  ),
  word('applicant', '지원자', 5, 'noun',
    ['채용자', '면접관', '고객', '동료', '상사', '경쟁자', '퇴사자', '심사관', '채용담당', '인사팀'],
    tips({
      etymology: 'apply(지원하다) + -ant(~하는 사람) → 지원하는 사람',
      visual: '이력서를 들고 면접장 문을 두드리는 사람',
      soundAlike: 'applicant ≈ application(지원서) - 같은 어근',
      context: 'There were over 200 applicants for the job.',
      synonymAntonym: 'Syn: candidate, contender. Ant: employer, hirer',
    }),
    {
      definition: 'a person who formally requests something, e.g. a job or position',
      synonyms: ['candidate', 'contender', 'aspirant'],
      antonyms: ['employer', 'hirer', 'recruiter'],
      exampleSentences: [
        { en: 'There were over 200 applicants for the job.', ko: '그 직무에 200명 이상의 지원자가 있었다.' },
        { en: 'The best applicant had five years of experience.', ko: '최고의 지원자는 5년의 경력이 있었다.' },
      ],
    }
  ),
  word('apply', '적용하다, 신청하다', 6, 'verb',
    ['제거하다', '벗기다', '닦다', '씻다', '뿌리다', '발라넣다', '덮다', '가리다', '마르게하다', '건조시키다'],
    tips({
      etymology: '라틴어 applicāre(붙이다, 가까이 대다)에서 유래',
      visual: '크림을 피부에 발라 대는 모습',
      soundAlike: 'apply ≈ applicant(지원자) - apply에서 파생',
      context: 'Apply sunscreen before going outside.',
      synonymAntonym: 'Syn: put on, spread. Ant: remove, take off',
    }),
    {
      definition: 'to put or spread something onto a surface; to make a formal request',
      synonyms: ['put on', 'spread', 'administer'],
      antonyms: ['remove', 'take off', 'strip'],
      exampleSentences: [
        { en: 'Apply sunscreen before going outside.', ko: '밖에 나가기 전에 선크림을 바르세요.' },
        { en: 'She applied the ointment to the wound.', ko: '그녀는 상처에 연고를 발라 댔다.' },
      ],
    }
  ),
  word('approach', '접근', 7, 'noun',
    ['후퇴', '이탈', '회피', '무시', '방치', '유예', '지연', '거리', '회피책', '우회'],
    tips({
      etymology: '라틴어 appropriāre(가까이 가다)에서 유래',
      visual: '목표를 향해 다가가는 화살표',
      soundAlike: 'approach ≈ reproach(책망하다) - pro/re 차이',
      context: 'We need a new approach to this problem.',
      synonymAntonym: 'Syn: method, strategy. Ant: withdrawal, retreat',
    }),
    {
      definition: 'a way of dealing with something; the act of coming near',
      synonyms: ['method', 'strategy', 'technique'],
      antonyms: ['withdrawal', 'retreat', 'avoidance'],
      exampleSentences: [
        { en: 'We need a new approach to this problem.', ko: '이 문제에 대한 새로운 접근이 필요하다.' },
        { en: 'His approach to the goal was slow but steady.', ko: '그의 목표에 대한 접근은 느렸지만 꾸준했다.' },
      ],
    }
  ),
  word('approve', '승인하다', 4, 'verb',
    ['거절하다', '반대하다', '거부하다', '취소하다', '무효화하다', '퇴짜놓다', '기각하다', '불허하다', '반박하다', '철회하다'],
    tips({
      etymology: '라틴어 approbāre(증명하다, 찬성하다)에서 유래',
      visual: '엄지척 하며 OK 사인하는 모습',
      soundAlike: 'approve ≈ prove(증명하다) - 같은 어근',
      context: 'The committee approved the budget.',
      synonymAntonym: 'Syn: endorse, authorize. Ant: reject, disapprove',
    }),
    {
      definition: 'to officially agree to or accept something',
      synonyms: ['endorse', 'authorize', 'sanction'],
      antonyms: ['reject', 'disapprove', 'refuse'],
      exampleSentences: [
        { en: 'The committee approved the budget.', ko: '위원회가 예산을 승인했다.' },
        { en: 'My parents approved of my career choice.', ko: '부모님이 내 직업 선택을 승인해 주셨다.' },
      ],
    }
  ),
  word('architect', '건축가', 5, 'noun',
    ['목수', '인테리어 디자이너', '토목기사', '소방관', '전기기사', '배관공', '감리', '개발자', '건설사', '노동자'],
    tips({
      etymology: '그리스어 archi-(으뜸) + tekton(건축공) → 건축의 우두머리',
      visual: '설계도면 위에 컴퍼스와 자를 놓고 건물 모형을 바라보는 사람',
      soundAlike: '아키텍트 → "아! 키 텍(큰 건물)트" - 큰 건물을 설계하는 사람',
      context: 'The architect designed a stunning glass skyscraper downtown.',
      synonymAntonym: 'Syn: designer, planner. Ant: demolisher, destroyer',
    }),
    {
      definition: 'a person who designs buildings and supervises their construction',
      synonyms: ['designer', 'planner', 'draftsman'],
      antonyms: ['demolisher', 'destroyer', 'wrecker'],
      exampleSentences: [
        { en: 'The architect presented the blueprint for the new library.', ko: '건축가가 새 도서관의 설계도를 발표했다.' },
        { en: 'She dreamed of becoming an architect since childhood.', ko: '그녀는 어린 시절부터 건축가가 되는 것이 꿈이었다.' },
      ],
    }
  ),
  word('architecture', '건축', 6, 'noun',
    ['인테리어', '토목', '소방', '전기공사', '리모델링', '해체', '철거', '설계도', '시공', '감리'],
    tips({
      etymology: '그리스어 archi-(으뜸) + tektonike(건축술) → architect에서 파생된 명사',
      visual: '고딕 성당의 뾰족한 첨탑과 스테인드글라스가 빛나는 웅장한 건물',
      soundAlike: '아키텍처 → architect(건축가) + -ure(행위/결과) 접미사',
      context: 'The architecture of ancient Rome still influences modern design.',
      synonymAntonym: 'Syn: design, construction. Ant: demolition, destruction',
    }),
    {
      definition: 'the art or practice of designing and constructing buildings',
      synonyms: ['design', 'construction', 'structure'],
      antonyms: ['demolition', 'destruction', 'ruin'],
      exampleSentences: [
        { en: 'The architecture of this cathedral dates back to the 12th century.', ko: '이 성당의 건축 양식은 12세기로 거슬러 올라간다.' },
        { en: 'She studied architecture at a prestigious university.', ko: '그녀는 명문 대학에서 건축을 공부했다.' },
      ],
    }
  ),
  word('archive', '기록보관소', 8, 'noun',
    ['도서관', '박물관', '서고', '창고', '폐기장', '전시관', '상점', '사무실', '학교', '병원'],
    tips({
      etymology: '그리스어 arkheion(관청 건물)에서 유래, 공공 기록을 보관하던 장소',
      visual: '지하 서고에 먼지 쌓인 오래된 문서 상자가 끝없이 줄지어 있는 모습',
      soundAlike: '아카이브 → "아! 카이브(보관함)" - 소중한 기록을 보관하는 곳',
      context: 'The national archive holds documents dating back to the founding of the country.',
      synonymAntonym: 'Syn: repository, records. Ant: trash, disposal',
    }),
    {
      definition: 'a collection of historical records or the place where they are kept',
      synonyms: ['repository', 'records', 'vault'],
      antonyms: ['trash', 'disposal', 'discard'],
      exampleSentences: [
        { en: 'Researchers spent weeks in the archive searching for old letters.', ko: '연구자들은 오래된 편지를 찾기 위해 기록보관소에서 몇 주를 보냈다.' },
        { en: 'The university archive contains manuscripts from the 18th century.', ko: '그 대학 기록보관소에는 18세기 원고가 보관되어 있다.' },
      ],
    }
  ),
  word('area', '면적', 3, 'noun',
    ['길이', '너비', '높이', '둘레', '부피', '거리', '크기', '범위', '구역', '지역'],
    tips({
      etymology: '라틴어 ārea(빈 땅, 광장)에서 유래, 열린 공간의 넓이를 뜻함',
      visual: '수학 시간에 직사각형의 가로 x 세로를 곱해 색칠된 넓이를 구하는 장면',
      soundAlike: 'area ≈ "에어리어" - 이미 외래어로 익숙한 발음 (축구 penalty area)',
      context: 'The total area of the apartment is 85 square meters.',
      synonymAntonym: 'Syn: region, zone, territory. Ant: point, spot(넓이 없는 점)',
    }),
    {
      definition: 'a region or part of a space; the size of a surface',
      synonyms: ['region', 'zone', 'territory'],
      antonyms: ['point', 'spot', 'dot'],
      exampleSentences: [
        { en: 'This area is known for its beautiful beaches.', ko: '이 지역은 아름다운 해변으로 유명하다.' },
        { en: 'Calculate the area of the triangle using the formula.', ko: '공식을 이용하여 삼각형의 면적을 구하세요.' },
      ],
    }
  ),
  word('argue', '논쟁하다', 7, 'verb',
    ['동의하다', '수용하다', '만족하다', '순응하다', '침묵하다', '경청하다', '화해하다', '양보하다', '협력하다', '타협하다'],
    tips({
      etymology: '라틴어 argūtāre(증명하다, 논증하다)에서 유래',
      visual: '두 사람이 서로 다른 의견을 주장하며 말다툼하는 모습',
      soundAlike: 'argue ≈ argue(논쟁) - argument(논쟁, 논거)와 함께 암기',
      context: 'They always argue about politics.',
      synonymAntonym: 'Syn: debate, dispute. Ant: agree, concur',
    }),
    {
      definition: 'to give reasons for or against something; to exchange opposing views',
      synonyms: ['debate', 'dispute', 'quarrel'],
      antonyms: ['agree', 'concur', 'harmonize'],
      exampleSentences: [
        { en: 'They always argue about politics.', ko: '그들은 항상 정치에 대해 논쟁한다.' },
        { en: 'She argued that the plan was too expensive.', ko: '그녀는 그 계획이 너무 비싸다고 논쟁했다.' },
      ],
    }
  ),
  word('arise', '생기다', 4, 'verb',
    ['사라지다', '소멸하다', '끝나다', '해결되다', '종료되다', '없어지다', '제거되다', '가라앉다', '잊히다', '사라져버리다'],
    tips({
      etymology: 'a-(강조) + rise(일어나다) → 올라서 생기다',
      visual: '해가 동쪽에서 떠오르듯 새로 나타나는 모습',
      soundAlike: 'arise ≈ rise(일어나다) - a-가 붙어 "생기다" 의미',
      context: 'Problems may arise if we delay.',
      synonymAntonym: 'Syn: emerge, occur. Ant: disappear, vanish',
    }),
    {
      definition: 'to begin to exist; to get up',
      synonyms: ['emerge', 'occur', 'surface'],
      antonyms: ['disappear', 'vanish', 'subside'],
      exampleSentences: [
        { en: 'Problems may arise if we delay.', ko: '미루면 문제가 생길 수 있다.' },
        { en: 'A dispute arose between the two parties.', ko: '양측 사이에 분쟁이 생겼다.' },
      ],
    }
  ),
  word('army', '육군', 5, 'noun',
    ['해군', '공군', '경찰', '의경', '민방위', '의무대', '군인', '장교', '병사', '부대'],
    tips({
      etymology: '라틴어 armāta(무장한)에서 유래, arm(팔, 무기)과 연결',
      visual: '육지를 행진하는 군대, 군복과 무기',
      soundAlike: 'army ≈ arm(팔, 무기) - arm으로 무장한 집단',
      context: 'He joined the army at eighteen.',
      synonymAntonym: 'Syn: military, troops. Ant: civilians, pacifists',
    }),
    {
      definition: 'the military force that fights on land; a large organized group',
      synonyms: ['military', 'troops', 'forces'],
      antonyms: ['civilians', 'pacifists', 'noncombatants'],
      exampleSentences: [
        { en: 'He joined the army at eighteen.', ko: '그는 열여덟 살에 육군에 입대했다.' },
        { en: 'An army of volunteers helped clean up the park.', ko: '대규모 자원봉사자들이 공원 청소를 도왔다.' },
      ],
    }
  ),
  word('around', '사방에', 1, 'adverb',
    ['안에', '가운데', '멀리', '위에', '아래에', '앞에', '뒤에', '일직선으로', '한쪽으로만', '중앙에'],
    tips({
      etymology: 'a-(on) + round(둥근) → 원을 그리며 돌아서',
      visual: '한 점을 중심으로 사방으로 퍼져 나가는 원',
      soundAlike: 'around ≈ round(둥근) - round가 기본',
      context: 'She looked around the room.',
      synonymAntonym: 'Syn: about, surrounding. Ant: within, inside',
    }),
    {
      definition: 'on all sides; in every direction; approximately',
      synonyms: ['about', 'surrounding', 'nearby'],
      antonyms: ['within', 'inside', 'center'],
      exampleSentences: [
        { en: 'She looked around the room.', ko: '그녀는 방 사방을 둘러보았다.' },
        { en: 'The meeting will start around nine o\'clock.', ko: '회의는 9시쯤 시작될 것이다.' },
      ],
    }
  ),
  word('arrest', '체포하다', 6, 'verb',
    ['석방하다', '놓아주다', '면제하다', '해제하다', '보호하다', '구하다', '해방하다', '풀어주다', '면담시키다', '휴가주다'],
    tips({
      etymology: '라틴어 restāre(머물다) → "멈추게 하다" 의미로 확장',
      visual: '경찰이 수갑을 채우며 용의자를 붙잡는 모습',
      soundAlike: 'arrest ≈ rest(휴식) - re로 시작, arrest=멈추게 하다',
      context: 'Police arrested the suspect at his home.',
      synonymAntonym: 'Syn: apprehend, detain. Ant: release, free',
    }),
    {
      definition: 'to seize and take into custody',
      synonyms: ['apprehend', 'detain', 'seize'],
      antonyms: ['release', 'free', 'liberate'],
      exampleSentences: [
        { en: 'Police arrested the suspect at his home.', ko: '경찰이 용의자를 그의 집에서 체포했다.' },
        { en: 'He was arrested for theft.', ko: '그는 절도 혐의로 체포되었다.' },
      ],
    }
  ),
  word('arrive', '도착하다', 2, 'verb',
    ['출발하다', '떠나다', '출발격으로', '이탈하다', '비켜가다', '통과하다', '지나가다', '우회하다', '출발신호', '시작하다'],
    tips({
      etymology: '라틴어 ad + rīpa(강가) → "항구에 닿다"에서 유래',
      visual: '기차역이나 공항에 내려 목적지에 도착한 순간',
      soundAlike: 'arrive ≈ driver(운전자) - arrive at your destination',
      context: 'We will arrive at noon.',
      synonymAntonym: 'Syn: reach, get to. Ant: depart, leave',
    }),
    {
      definition: 'to reach a destination',
      synonyms: ['reach', 'get to', 'come to'],
      antonyms: ['depart', 'leave', 'exit'],
      exampleSentences: [
        { en: 'We will arrive at noon.', ko: '우리는 정오에 도착할 것이다.' },
        { en: 'She arrived home exhausted after the trip.', ko: '그녀는 여행 후 지쳐서 집에 도착했다.' },
      ],
    }
  ),
  word('arrow', '화살', 7, 'noun',
    ['활', '창', '칼', '총', '방패', '투석', '나이프', '도끼', '몽둥이', '쇠뇌'],
    tips({
      etymology: '고대 노르웨이어 ǫr에서 유래',
      visual: '활에서 발사된 날카로운 화살이 과녁을 향해 날아가는 모습',
      soundAlike: 'arrow ≈ narrow(좁은) - 화살처럼 가늘다',
      context: 'The arrow hit the target.',
      synonymAntonym: 'Syn: bolt, dart. 반대 개념 없음(구체명사)',
    }),
    {
      definition: 'a thin, pointed stick shot from a bow as a weapon or in sport',
      synonyms: ['bolt', 'dart', 'missile'],
      antonyms: [],
      exampleSentences: [
        { en: 'The arrow hit the target.', ko: '화살이 과녁에 명중했다.' },
        { en: 'He drew the arrow back and released.', ko: '그는 화살을 당겼다가 놓았다.' },
      ],
    }
  ),
  word('art', '예술', 3, 'noun',
    ['과학', '기술', '스포츠', '음악', '문학', '수학', '역사', '철학', '경제', '정치'],
    tips({
      etymology: '라틴어 ars(기술, 예술)에서 유래, artist(예술가), artificial(인공의)과 같은 어근',
      visual: '미술관에 걸린 유명한 유화 작품 앞에서 감상하는 사람들',
      soundAlike: 'art ≈ "아트" - 이미 외래어로 익숙 (아트 갤러리, 팝 아트)',
      context: 'Art can express emotions that words cannot.',
      synonymAntonym: 'Syn: craft, artwork. Ant: science(과학, 논리적 학문)',
    }),
    {
      definition: 'the expression of human creative skill; painting, sculpture, music, etc.',
      synonyms: ['craft', 'artwork', 'creation'],
      antonyms: ['science', 'logic', 'technology'],
      exampleSentences: [
        { en: 'She has a deep passion for modern art.', ko: '그녀는 현대 예술에 깊은 열정을 가지고 있다.' },
        { en: 'The art gallery will host a new exhibition next month.', ko: '그 미술관은 다음 달 새 전시회를 개최할 예정이다.' },
      ],
    }
  ),
  word('artificial', '인공의', 4, 'adjective',
    ['효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인', '부정적인'],
    tips({
      etymology: '라틴어 artificium(기술, 기교) → art(기술) + fic(만들다) + -ial(형용사) → 기술로 만든',
      visual: '진짜 꽃과 나란히 놓인 플라스틱 조화 - 자연물 vs 인공물의 대비',
      soundAlike: '아티피셜 → "아티(art 기술)피셜" - artificial intelligence(AI)로 이미 익숙',
      context: 'The lake is artificial, built to supply water to the city.',
      synonymAntonym: 'Syn: synthetic, man-made. Ant: natural, genuine, organic',
    }),
    {
      definition: 'made by humans; not natural',
      synonyms: ['synthetic', 'man-made', 'fabricated'],
      antonyms: ['natural', 'genuine', 'organic'],
      exampleSentences: [
        { en: 'The flowers on the table looked real but were actually artificial.', ko: '탁자 위의 꽃은 진짜처럼 보였지만 사실 인공 꽃이었다.' },
        { en: 'Artificial intelligence is transforming many industries.', ko: '인공 지능이 많은 산업을 변화시키고 있다.' },
      ],
    }
  ),
  word('as', '-로서', 1, 'conjunction',
    ['~와 반대로', '~없이', '~대신에', '~위해', '~때문에', '~후에', '~전에', '~사이에', '~밖에', '~대하여'],
    tips({
      etymology: '고대 영어 eallswā(also와 같은 어원)에서 축약, "마찬가지로"에서 출발',
      visual: '저울의 양쪽 팔이 같은 높이로 균형 잡힌 모습 → "~만큼, ~처럼" 동등 비교',
      soundAlike: 'as ≈ "애즈" - 짧은 한 음절로 다양한 의미를 가진 기능어',
      context: 'He works as a teacher. / She ran as fast as she could.',
      synonymAntonym: 'Syn: like, while, since. Ant: unlike(~와 다르게)',
    }),
    {
      definition: 'in the role or function of; to the same degree; while or when',
      synonyms: ['like', 'while', 'since'],
      antonyms: ['unlike', 'differently', 'unequally'],
      exampleSentences: [
        { en: 'She works as a nurse at the local hospital.', ko: '그녀는 지역 병원에서 간호사로서 일한다.' },
        { en: 'As it was raining, we stayed indoors.', ko: '비가 오고 있었기 때문에, 우리는 실내에 머물렀다.' },
      ],
    }
  ),
  word('ash', '재', 5, 'noun',
    ['불꽃', '연기', '숯', '땔감', '불', '가스', '수증기', '먼지', '진흙', '모래'],
    tips({
      etymology: '고대 영어 æsce에서 유래, 게르만어 공통 어근으로 "타고 남은 것"',
      visual: '모닥불이 꺼진 뒤 회색 가루만 남은 캠프파이어 자리',
      soundAlike: 'ash ≈ "애시" - cash(현금)에서 c를 빼면 ash(재)',
      context: 'The volcano covered the town in a thick layer of ash.',
      synonymAntonym: 'Syn: cinder, soot, residue. Ant: flame, fire(불, 타기 전 상태)',
    }),
    {
      definition: 'the powdery residue left after something burns',
      synonyms: ['cinder', 'soot', 'residue'],
      antonyms: ['flame', 'fire', 'ember'],
      exampleSentences: [
        { en: 'He flicked the ash from his cigarette into the tray.', ko: '그는 담배 재를 재떨이에 털었다.' },
        { en: 'After the fire, only ash remained where the house once stood.', ko: '화재 후 집이 있던 자리에는 재만 남아 있었다.' },
      ],
    }
  ),
  word('aside', '곁에', 6, 'adverb',
    ['가운데', '앞에', '뒤에', '위에', '아래에', '멀리', '가까이', '안에', '밖에', '반대편에'],
    tips({
      etymology: 'a-(on) + side(옆) → 한쪽 옆으로, 옆에 치워놓고',
      visual: '연극 배우가 관객에게만 들리도록 손을 대고 살짝 옆으로 돌아 말하는 모습',
      soundAlike: 'aside ≈ "어사이드" - a(한쪽) + side(옆) 그대로 읽으면 됨',
      context: 'She pulled him aside to whisper the secret.',
      synonymAntonym: 'Syn: to one side, apart. Ant: into, toward(~쪽으로)',
    }),
    {
      definition: 'to or on one side; out of the way',
      synonyms: ['apart', 'sideways', 'away'],
      antonyms: ['into', 'toward', 'centrally'],
      exampleSentences: [
        { en: 'He stepped aside to let the elderly woman pass.', ko: '그는 노부인이 지나갈 수 있도록 옆으로 비켜섰다.' },
        { en: 'She set aside some money for emergencies.', ko: '그녀는 비상시를 위해 돈을 좀 따로 떼어 놓았다.' },
      ],
    }
  ),
  word('ask', '묻다', 2, 'verb',
    ['대답하다', '말하다', '알려주다', '명령하다', '요청하다', '제안하다', '거절하다', '무시하다', '동의하다', '반박하다'],
    tips({
      etymology: '고대 영어 āscian(묻다, 요청하다)에서 유래, 게르만어 공통 어근',
      visual: '수업 시간에 손을 번쩍 들고 선생님께 질문하는 학생',
      soundAlike: 'ask ≈ "애스크" - task(과제)에서 t를 빼면 ask, 과제에 대해 "질문하다"',
      context: 'Don\'t be afraid to ask questions when you don\'t understand.',
      synonymAntonym: 'Syn: inquire, question, request. Ant: answer, reply, respond',
    }),
    {
      definition: 'to say something in order to get an answer or information',
      synonyms: ['inquire', 'question', 'request'],
      antonyms: ['answer', 'reply', 'respond'],
      exampleSentences: [
        { en: 'May I ask you a personal question?', ko: '개인적인 질문을 하나 해도 될까요?' },
        { en: 'He asked his boss for a day off.', ko: '그는 상사에게 하루 휴가를 요청했다.' },
      ],
    }
  ),
  word('asleep', '잠든', 7, 'adjective',
    ['대표적인', '기본적인', '중요한', '핵심적인', '일반적인', '예외적인', '안정적인', '불안정한', '효율적인', '비효율적인'],
    tips({
      etymology: 'a-(상태) + sleep(잠) → 잠든 상태에 있는, alive/awake와 같은 a- 패턴',
      visual: '소파에서 고양이가 동그랗게 웅크리고 새근새근 잠들어 있는 모습',
      soundAlike: 'asleep ≈ "어슬립" - a + sleep 그대로, awake(깨어 있는)의 반대',
      context: 'The baby fell asleep in her mother\'s arms.',
      synonymAntonym: 'Syn: sleeping, dozing, slumbering. Ant: awake, alert, conscious',
    }),
    {
      definition: 'in a state of sleep',
      synonyms: ['sleeping', 'dozing', 'slumbering'],
      antonyms: ['awake', 'alert', 'conscious'],
      exampleSentences: [
        { en: 'She was already asleep when I got home.', ko: '내가 집에 도착했을 때 그녀는 이미 잠들어 있었다.' },
        { en: 'He fell asleep during the boring lecture.', ko: '그는 지루한 강의 중에 잠이 들었다.' },
      ],
    }
  ),
  word('assault', '습격', 9, 'noun',
    ['방어', '후퇴', '휴전', '협상', '평화', '항복', '도주', '은신', '대피', '구조'],
    tips({
      etymology: '라틴어 ad(~로) + saltus(도약) → 상대에게 뛰어들어 공격하다',
      visual: '어두운 골목에서 갑자기 뛰어나와 덮치는 긴박한 습격 장면',
      soundAlike: 'assault ≈ "어솔트" - a salt(소금) → 상처에 소금 뿌리듯 공격',
      context: 'The assault on the fortress lasted three days.',
      synonymAntonym: 'Syn: attack, raid, offensive. Ant: defense, retreat, withdrawal',
    }),
    {
      definition: 'a violent physical or verbal attack on someone',
      synonyms: ['attack', 'raid', 'offensive'],
      antonyms: ['defense', 'retreat', 'withdrawal'],
      exampleSentences: [
        { en: 'The soldiers prepared for the assault on the enemy base.', ko: '병사들은 적 기지에 대한 습격을 준비했다.' },
        { en: 'He was charged with assault after the fight.', ko: '그는 싸움 후 폭행 혐의로 기소되었다.' },
      ],
    }
  ),
  word('asset', '자산', 4, 'noun',
    ['부채', '빚', '손실', '지출', '비용', '세금', '공제', '적자', '미지급금', '대출'],
    tips({
      etymology: '프랑스어 asez(충분히)에서 유래, 채무를 갚기에 충분한 재산이라는 뜻에서 출발',
      visual: '금고 안에 금괴, 부동산 문서, 주식 증서가 쌓여 있는 모습',
      soundAlike: 'asset ≈ "애셋" - "에이(A)급 셋(set)" → A급으로 세팅된 재산',
      context: 'Real estate is often considered a safe asset for investment.',
      synonymAntonym: 'Syn: property, resource, possession. Ant: liability, debt, deficit',
    }),
    {
      definition: 'something of value owned by a person or organization',
      synonyms: ['property', 'resource', 'possession'],
      antonyms: ['liability', 'debt', 'deficit'],
      exampleSentences: [
        { en: 'The company\'s total assets exceeded ten billion dollars.', ko: '그 회사의 총 자산은 100억 달러를 넘었다.' },
        { en: 'Her language skills are a great asset in her career.', ko: '그녀의 언어 능력은 경력에 큰 자산이다.' },
      ],
    }
  ),
  word('associate', '연상하다', 5, 'verb',
    ['잊다', '무시하다', '분리하다', '구별하다', '차단하다', '끊다', '배제하다', '제외하다', '지우다', '모르다'],
    tips({
      etymology: '라틴어 ad(~에) + sociāre(결합하다) → socius(동료)에서 파생, 함께 묶다',
      visual: '마인드맵에서 중심 단어에서 여러 관련 단어로 선이 뻗어나가는 모습',
      soundAlike: 'associate ≈ "어소시에이트" - social(사회적)과 같은 어근, 연결되는 느낌',
      context: 'People often associate red roses with love and romance.',
      synonymAntonym: 'Syn: connect, link, relate. Ant: separate, disconnect, dissociate',
    }),
    {
      definition: 'to connect in mind; to link with',
      synonyms: ['connect', 'link', 'relate'],
      antonyms: ['separate', 'disconnect', 'dissociate'],
      exampleSentences: [
        { en: 'Most people associate snow with winter holidays.', ko: '대부분의 사람들은 눈을 겨울 휴가와 연상한다.' },
        { en: 'I don\'t want to be associated with that group.', ko: '나는 그 단체와 연관되고 싶지 않다.' },
      ],
    }
  ),
  word('assure', '보증하다', 6, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다'],
    tips({
      etymology: '라틴어 ad(~에) + securus(안전한) → ensure, insure와 같은 어근 계열',
      visual: '의사가 환자의 어깨를 잡고 "걱정 마세요, 괜찮을 겁니다"라고 안심시키는 장면',
      soundAlike: 'assure ≈ "어슈어" - sure(확실한)가 들어 있어 "확실하게 해주다"',
      context: 'I assure you that the problem will be resolved by tomorrow.',
      synonymAntonym: 'Syn: guarantee, promise, reassure. Ant: doubt, question, deny',
    }),
    {
      definition: 'to tell someone confidently; to make certain',
      synonyms: ['guarantee', 'promise', 'reassure'],
      antonyms: ['doubt', 'question', 'deny'],
      exampleSentences: [
        { en: 'The manager assured us that the project was on track.', ko: '매니저는 프로젝트가 순조롭다고 우리에게 보증했다.' },
        { en: 'Let me assure you that your information is safe with us.', ko: '귀하의 정보가 안전하게 보호된다는 것을 보증합니다.' },
      ],
    }
  ),
  word('astonish', '놀라게 하다', 7, 'verb',
    ['정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다'],
    tips({
      etymology: '라틴어 ex(밖으로) + tonāre(천둥치다) → 벼락 맞은 듯 놀라다, stun과 유사 어원',
      visual: '마술사가 모자에서 토끼를 꺼내자 관객들이 입을 벌리고 깜짝 놀라는 장면',
      soundAlike: 'astonish ≈ "어스타니시" - stone(돌)이 들림 → 돌처럼 굳을 만큼 놀라다',
      context: 'The magician\'s final trick astonished the entire audience.',
      synonymAntonym: 'Syn: amaze, astound, stun. Ant: bore, expect, anticipate',
    }),
    {
      definition: 'to surprise greatly',
      synonyms: ['amaze', 'astound', 'stun'],
      antonyms: ['bore', 'expect', 'anticipate'],
      exampleSentences: [
        { en: 'Her incredible singing voice astonished everyone in the room.', ko: '그녀의 놀라운 노래 실력이 방 안의 모든 사람을 놀라게 했다.' },
        { en: 'It astonished me that he had memorized the entire book.', ko: '그가 책 전체를 외웠다는 사실에 나는 깜짝 놀랐다.' },
      ],
    }
  ),
  word('at', '-에', 1, 'preposition',
    ['~에서 멀리', '~위에', '~아래에', '~앞에', '~뒤에', '~사이에', '~반대에', '~없이', '~통해', '~동안'],
    tips({
      etymology: '고대 영어 æt에서 유래, 인도유럽어 ad(~에)와 관련된 가장 기본적 전치사',
      visual: '지도 위에 핀이 꽂힌 정확한 한 지점 → "바로 그 지점에"',
      soundAlike: 'at ≈ "앳" - 이메일 주소의 @(at) 기호로 이미 익숙한 발음',
      context: 'I\'ll meet you at the station at 3 o\'clock.',
      synonymAntonym: 'Syn: in, on(장소). Ant: from, away from(~에서 떨어져)',
    }),
    {
      definition: 'used to indicate a location, time, or point in a scale',
      synonyms: ['in', 'on', 'by'],
      antonyms: ['from', 'away from', 'off'],
      exampleSentences: [
        { en: 'She is waiting at the bus stop.', ko: '그녀는 버스 정류장에서 기다리고 있다.' },
        { en: 'The meeting starts at nine in the morning.', ko: '회의는 아침 9시에 시작된다.' },
      ],
    }
  ),
  word('athlete', '운동선수', 4, 'noun',
    ['감독', '코치', '심판', '관중', '팬', '기자', '의사', '선생', '군인', '경찰'],
    tips({
      etymology: '그리스어 athlētēs(경기자) → athlon(경기, 상) → 올림픽 경기의 참가자',
      visual: '올림픽 트랙 위에서 스타트 자세를 잡고 출발을 기다리는 선수',
      soundAlike: '애슬릿 → "애쓰는 릿(사람)" - 운동을 위해 애쓰는 사람, athletic(운동의)과 함께',
      context: 'Professional athletes train for hours every single day.',
      synonymAntonym: 'Syn: sportsman, player, competitor. Ant: spectator, couch potato',
    }),
    {
      definition: 'a person who is trained or skilled in sports or physical exercise',
      synonyms: ['sportsman', 'player', 'competitor'],
      antonyms: ['spectator', 'viewer', 'bystander'],
      exampleSentences: [
        { en: 'The athlete broke the world record in the 100-meter sprint.', ko: '그 운동선수는 100미터 단거리 세계 기록을 깼다.' },
        { en: 'Many young athletes dream of competing in the Olympics.', ko: '많은 젊은 운동선수들이 올림픽 출전을 꿈꾼다.' },
      ],
    }
  ),
  word('atmosphere', '대기', 5, 'noun',
    ['바다', '땅', '산', '강', '숲', '도시', '실내', '진공', '우주', '지하'],
    tips({
      etymology: '그리스어 atmos(증기, 기체) + sphaira(구) → 지구를 둘러싼 기체의 구',
      visual: '우주에서 본 지구를 감싸는 얇고 푸른 공기층이 빛나는 모습',
      soundAlike: '앳모스피어 → "앳모스(기체)+피어(sphere 구)" - 기체로 된 구',
      context: 'The atmosphere protects us from harmful solar radiation.',
      synonymAntonym: 'Syn: air, ambiance, mood. Ant: vacuum(진공)',
    }),
    {
      definition: 'the layer of gases surrounding the earth; the mood or feeling of a place',
      synonyms: ['air', 'ambiance', 'mood'],
      antonyms: ['vacuum', 'void', 'emptiness'],
      exampleSentences: [
        { en: 'The Earth\'s atmosphere is made up of nitrogen and oxygen.', ko: '지구의 대기는 질소와 산소로 이루어져 있다.' },
        { en: 'The restaurant had a cozy atmosphere with dim lighting.', ko: '그 식당은 은은한 조명으로 아늑한 분위기를 자아냈다.' },
      ],
    }
  ),
  word('atom', '원자', 6, 'noun',
    ['분자', '전자', '양성자', '중성자', '이온', '원소', '화합물', '결정', '세포', '유전자'],
    tips({
      etymology: '그리스어 atomos → a-(부정) + tomos(자르다) → "더 이상 자를 수 없는 것"',
      visual: '중심의 핵 주위를 전자가 빙빙 도는 원자 모형 그림',
      soundAlike: 'atom ≈ "아톰" - 만화 "우주소년 아톰"의 이름이 바로 원자(atom)',
      context: 'Water is made up of hydrogen and oxygen atoms.',
      synonymAntonym: 'Syn: particle, molecule(분자). Ant: whole, mass(덩어리, 전체)',
    }),
    {
      definition: 'the smallest unit of an element that has the properties of that element',
      synonyms: ['particle', 'molecule', 'nucleus'],
      antonyms: ['whole', 'mass', 'aggregate'],
      exampleSentences: [
        { en: 'An atom is too small to be seen with the naked eye.', ko: '원자는 너무 작아서 육안으로는 볼 수 없다.' },
        { en: 'Scientists split the atom for the first time in the 20th century.', ko: '과학자들은 20세기에 처음으로 원자를 쪼개는 데 성공했다.' },
      ],
    }
  ),
  word('attach', '붙이다', 7, 'verb',
    ['떼다', '제거하다', '분리하다', '풀다', '잘라내다', '빼다', '해제하다', '풀어놓다', '놓다', '벗기다'],
    tips({
      etymology: '라틴어 \'staccare(말뚝을 박다)\'에서 유래하여 무언가를 고정시킨다는 느낌을 줍니다.',
      visual: '이메일을 보낼 때 클립 아이콘을 눌러 파일을 덧붙이는 모습을 상상하세요.',
      soundAlike: '\'어태치\' 발음이 \'어디에 딱(tach) 붙이다\'와 비슷하게 들립니다.',
      context: '서류를 철하거나 벽에 포스터를 붙일 때, 혹은 감정적으로 애착을 느낄 때도 사용합니다.',
      synonymAntonym: 'fasten과 유의어 관계이며, 반대로 떼어내는 것은 detach라고 합니다.',
    }),
    {
      definition: 'to fasten, join, or connect one object to another physically or digitally',
      synonyms: ['fasten', 'affix', 'append'],
      antonyms: ['detach', 'separate', 'disconnect'],
      exampleSentences: [
        { en: 'Please remember to fasten the label to your luggage before checking it in.', ko: '수하물을 부치기 전에 가방에 라벨을 꼭 붙여주세요.' },
        { en: 'You need to connect the supporting documents to your application form.', ko: '신청서에 증빙 서류를 첨부해야 합니다.' },
      ],
    }
  ),
  word('attack', '공격하다', 4, 'verb',
    ['방어하다', '보호하다', '후퇴하다', '항복하다', '협상하다', '치료하다', '용서하다', '무시하다', '칭찬하다', '구조하다'],
    tips({
      etymology: '라틴어 \'ad-\'(~로)와 \'staccare\'(말뚝/말뚝을 박다)가 합쳐져 상대에게 달려들어 타격을 가한다는 의미에서 유래되었습니다.',
      visual: '검투사가 방패를 뚫고 날카로운 칼로 상대방을 내리치는 긴박한 전투 장면을 상상해 보세요.',
      soundAlike: '\'어택\' 발음이 \'어! 턱!\' 하고 상대의 턱을 가격하는 소리와 비슷하다고 생각하면 공격의 이미지가 쉽게 떠오릅니다.',
      context: '군사적인 물리적 타격뿐만 아니라, 토론에서 상대의 논리를 강하게 비판할 때도 자주 쓰이는 표현입니다.',
      synonymAntonym: 'assault는 더 갑작스럽고 폭력적인 공격을 뜻하며, 반대말인 defend는 공격으로부터 자신을 지키는 방어를 뜻합니다.',
    }),
    {
      definition: 'to take aggressive action against a person or place with weapons or force; to begin to affect someone or something harmfully.',
      synonyms: ['assault', 'strike', 'raid'],
      antonyms: ['defend', 'protect', 'guard'],
      exampleSentences: [
        { en: 'The enemy forces launched a surprise move to seize the city at dawn.', ko: '적군은 새벽에 도시를 점령하기 위해 기습 공격을 감행했습니다.' },
        { en: 'The virus can target the immune system and weaken the body\'s natural defenses.', ko: '그 바이러스는 면역 체계를 공격하여 신체의 자연 방어력을 약화시킬 수 있습니다.' },
      ],
    }
  ),
  word('attain', '달성하다', 5, 'verb',
    ['포기하다', '상실하다', '실패하다', '지연시키다', '중단하다', '무시하다', '방치하다', '거절하다', '후퇴하다', '누락하다'],
    tips({
      etymology: '라틴어 attingere에서 유래되었으며, ad(~에)와 tangere(닿다)가 결합되어 목표에 손이 닿는다는 느낌을 줍니다.',
      visual: '높은 산 정상에 올라가 깃발을 꽂으며 목표를 완수하는 등반가의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어테인\'이므로, \'어! 테인(태인) 목표를 드디어 달성했네!\'라고 연상해 보세요.',
      context: '주로 학위, 높은 지위, 혹은 구체적인 수치상의 목표를 성취했을 때 격식 있게 사용됩니다.',
      synonymAntonym: '유의어 achieve는 일반적인 성취를, 반의어 fail은 목표 도달의 실패를 의미합니다.',
    }),
    {
      definition: 'to succeed in getting something, usually after a lot of effort or hard work',
      synonyms: ['achieve', 'accomplish', 'acquire'],
      antonyms: ['fail', 'lose', 'forfeit'],
      exampleSentences: [
        { en: 'She worked hard to attain her dream of becoming a professional pilot.', ko: '그녀는 전문 조종사가 되겠다는 꿈을 달성하기 위해 열심히 노력했다.' },
        { en: 'The company hopes to attain a leading position in the global market this year.', ko: '그 회사는 올해 세계 시장에서 선도적인 위치를 확보하기를 희망한다.' },
      ],
    }
  ),
  word('attempt', '시도하다', 6, 'verb',
    ['설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다'],
    tips({
      etymology: '라틴어 \'attentare\'에서 유래했으며, \'ad(~을 향해)\'와 \'temptare(시험하다)\'가 합쳐져 무언가를 해보려 노력한다는 의미가 되었습니다.',
      visual: '높은 장벽 앞에서 운동화 끈을 다시 묶으며 뛰어오를 준비를 하는 선수의 모습을 상상해 보세요.',
      soundAlike: '\'어템트\' 발음이 \'어! 템(아이템) 트(트라이)\'와 비슷하죠? 새로운 아이템을 써보려고 시도하는 상황을 떠올려보세요.',
      context: '주로 어렵거나 성공 여부가 불확실한 일을 처음 해보거나 도전할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: '무언가를 해보는 try와 비슷하지만, attempt는 조금 더 격식 있고 진지한 노력이 담긴 시도를 뜻합니다.',
    }),
    {
      definition: 'to make an effort to achieve or complete something difficult',
      synonyms: ['endeavor', 'strive', 'venture'],
      antonyms: ['abandon', 'surrender', 'withdraw'],
      exampleSentences: [
        { en: 'The mountain climber will make a final effort to reach the summit tomorrow.', ko: '그 등산가는 내일 정상에 도달하기 위한 마지막 시도를 할 것입니다.' },
        { en: 'She did not even try to solve the complex puzzle.', ko: '그녀는 그 복잡한 퍼즐을 풀려고 시도조차 하지 않았습니다.' },
      ],
    }
  ),
  word('attention', '주의', 7, 'noun',
    ['무관심', '방해', '무시', '태만', '혼란', '망각', '거부', '지루함', '침묵', '포기'],
    tips({
      etymology: '라틴어 attendere에서 유래하며, ad(~로)와 tendere(뻗다)가 합쳐져 마음을 한곳으로 뻗는다는 의미입니다.',
      visual: '군대에서 \'차렷!\' 구령에 맞춰 모든 병사가 한곳을 뚫어지게 응시하는 모습을 상상해 보세요.',
      soundAlike: '\'어텐션\'은 \'어! 텐션(tension) 올려!\'와 비슷하게 들립니다. 긴장감을 높여 집중하는 상황을 떠올리세요.',
      context: '수업 시간이나 발표 중에 청중의 시선을 모으거나 사고를 방지하기 위해 조심할 때 주로 사용됩니다.',
      synonymAntonym: '집중을 뜻하는 focus와 유의어이며, 아무런 관심이 없는 indifference와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The act of directing the mind to listen, see, or understand something carefully.',
      synonyms: ['concentration', 'focus', 'heed'],
      antonyms: ['inattention', 'disregard', 'indifference'],
      exampleSentences: [
        { en: 'The speaker captured the audience\'s full interest from the very beginning.', ko: '연사는 시작부터 청중의 온전한 주의를 사로잡았습니다.' },
        { en: 'You must pay close heed to the safety instructions before operating the machine.', ko: '기계를 작동하기 전에 안전 수칙에 세심한 주의를 기울여야 합니다.' },
      ],
    }
  ),
  word('attorney', '변호사', 10, 'noun',
    ['판사', '검사', '법관', '증인', '피고', '원고', '법조인', '공증인', '배심원', '의뢰인'],
    tips({
      etymology: '프랑스어 \'atorner\'에서 유래하여 누군가를 대신하여 행동하도록 \'지정된 사람\'이라는 의미를 담고 있습니다.',
      visual: '법정에서 서류 가방을 들고 의뢰인 옆에서 열정적으로 변론하는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'어떠니(attorney)\'? 내 변호사 실력이 어떠니? 라고 묻는 상황을 연상하며 발음해 보세요.',
      context: '미국 드라마나 영화에서 변호사를 부를 때 \'Lawyer\'보다 더 공식적인 직함으로 자주 쓰입니다.',
      synonymAntonym: '유의어인 lawyer, counsel과 함께 기억하고, 반대 입장에 있는 prosecutor(검사)와 비교해 보세요.',
    }),
    {
      definition: 'a person who is legally qualified and appointed to act for another in business or legal matters',
      synonyms: ['lawyer', 'counsel', 'advocate'],
      antonyms: ['prosecutor', 'plaintiff', 'defendant'],
      exampleSentences: [
        { en: 'The defendant decided to hire a high-profile attorney to handle his complex case.', ko: '피고인은 자신의 복잡한 사건을 처리하기 위해 유명 변호사를 고용하기로 결정했습니다.' },
        { en: 'She acts as an attorney for the estate, managing all legal and financial documents.', ko: '그녀는 유산 관리인으로서 모든 법적, 재무적 서류를 관리하는 대리인 역할을 합니다.' },
      ],
    }
  ),
  word('attract', '끌다', 4, 'verb',
    ['밀어내다', '거부하다', '회피하다', '외면하다', '방치하다', '무시하다', '밀쳐내다', '분산시키다', '차단하다', '거절하다'],
    tips({
      etymology: '라틴어 \'ad(~로)\'와 \'trahere(끌다)\'가 합쳐져 무언가를 자신 쪽으로 끌어당긴다는 의미가 되었습니다.',
      visual: '자석이 쇠붙이를 강력하게 착 달라붙게 만드는 모습을 상상해 보세요.',
      soundAlike: '\'어트랙트\' 발음이 \'어! 트럭(truck)트\'처럼 들리나요? 큰 트럭이 짐을 끌고 가는 모습을 떠올려 보세요.',
      context: '관광지가 사람들을 불러모으거나, 꽃이 벌을 유혹할 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'draw와 유의어로 함께 외우고, 반대로 밀어내는 repel과 세트로 기억하면 좋습니다.',
    }),
    {
      definition: 'to cause someone or something to move toward a specific place or to evoke interest and admiration',
      synonyms: ['allure', 'entice', 'fascinate'],
      antonyms: ['repel', 'repulse', 'deter'],
      exampleSentences: [
        { en: 'The bright colors of the flowers are designed to insects for pollination.', ko: '꽃의 밝은 색상들은 수분을 위해 곤충들을 유인하도록 설계되었습니다.' },
        { en: 'The new theme park is expected to thousands of visitors every weekend.', ko: '새로운 테마파크는 주말마다 수천 명의 방문객을 끌어모을 것으로 기대됩니다.' },
      ],
    }
  ),
  word('auction', '경매', 5, 'noun',
    ['판매', '할인', '교환', '대여', '임대', '증여', '상속', '낙찰', '입찰', '경쟁'],
    tips({
      etymology: '라틴어 augere(증가시키다)에서 유래하여, 가격을 점점 높여가는 판매 방식을 뜻합니다.',
      visual: '망치를 든 경매사가 \'낙찰!\'을 외치며 탁자를 내리치는 긴박한 현장을 상상해 보세요.',
      soundAlike: '\'억션\'하고 소리 지르듯 높은 가격을 부르는 사람들의 모습을 연상하면 쉽습니다.',
      context: '골동품, 예술품, 혹은 부동산 거래 시 가장 높은 가격을 제시한 사람에게 파는 상황에서 쓰입니다.',
      synonymAntonym: '가격을 제안하는 bid와 유의 관계이며, 정해진 가격에 파는 fixed-price와는 반대 개념입니다.',
    }),
    {
      definition: 'A public sale in which goods or property are sold to the highest bidder.',
      synonyms: ['public sale', 'bidding', 'vendu'],
      antonyms: ['private sale', 'fixed-price sale', 'retail'],
      exampleSentences: [
        { en: 'The rare painting was sold for millions of dollars at the international event.', ko: '그 희귀한 그림은 국제 경매 행사에서 수백만 달러에 팔렸습니다.' },
        { en: 'She managed to buy a vintage camera at a very low price during the online bidding process.', ko: '그녀는 온라인 경매를 통해 아주 저렴한 가격에 빈티지 카메라를 낙찰받았습니다.' },
      ],
    }
  ),
  word('audience', '청중', 6, 'noun',
    ['연설자', '연출자', '배우', '진행자', '스태프', '무대', '조명감독', '기획자', '심사위원', '참가자'],
    tips({
      etymology: '라틴어 \'audire(듣다)\'에서 유래하여, 소리를 듣기 위해 모인 사람들을 뜻합니다.',
      visual: '공연장의 불이 꺼지고 수많은 사람들이 무대를 집중해서 바라보는 장면을 상상해 보세요.',
      soundAlike: '\'오디션(audition)\'을 보러 갔을 때 나를 지켜보는 사람들을 떠올리면 쉽습니다.',
      context: '콘서트, 강연, 영화관 등에서 작품이나 메시지를 수용하는 집단을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '구경꾼을 뜻하는 spectators나 시청자를 뜻하는 viewers와 함께 외우면 좋습니다.',
    }),
    {
      definition: 'A group of people who gather together to listen to or watch a performance, speech, or public event.',
      synonyms: ['spectators', 'listeners', 'viewers'],
      antonyms: ['performers', 'speakers', 'presenters'],
      exampleSentences: [
        { en: 'The entire crowd stood up to applaud at the end of the concert.', ko: '콘서트가 끝날 때 모든 청중이 일어나 박수를 쳤습니다.' },
        { en: 'The author\'s latest novel is written for a younger group of readers.', ko: '그 작가의 최신 소설은 더 젊은 독자층을 위해 쓰였습니다.' },
      ],
    }
  ),
  word('authentic', '진정한', 8, 'adjective',
    ['가짜의', '위조된', '모조의', '허위의', '거짓의', '흉내 낸', '인공적인', '가식적인', '꾸민', '날조된'],
    tips({
      etymology: '그리스어 \'authentikos\'에서 유래했으며, \'본인이 직접 한\' 또는 \'권위 있는\'이라는 의미를 담고 있습니다.',
      visual: '박물관에서 전문가가 돋보기를 들고 골동품의 진품 여부를 꼼꼼히 확인하는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'어! 센틱(센 것)\'과 비슷하죠? 진짜 물건은 가짜보다 기운이 더 세고 확실하다는 느낌으로 기억하세요.',
      context: '주로 이탈리아 정통 요리나 유명 화가의 진품 그림, 혹은 꾸밈없는 진솔한 성격을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '진짜를 뜻하는 genuine과 유의어이며, 가짜를 뜻하는 fake나 counterfeit와는 반대되는 개념입니다.',
    }),
    {
      definition: 'representing one\'s true nature or beliefs; not false or copied',
      synonyms: ['genuine', 'legitimate', 'veritable'],
      antonyms: ['fake', 'counterfeit', 'spurious'],
      exampleSentences: [
        { en: 'The restaurant serves authentic Italian cuisine prepared by a chef from Rome.', ko: '그 식당은 로마 출신 요리사가 만든 진정한 이탈리아 요리를 제공합니다.' },
        { en: 'Experts confirmed that the signature on the document was indeed original and valid.', ko: '전문가들은 문서의 서명이 정말로 진짜이며 유효하다는 것을 확인했습니다.' },
      ],
    }
  ),
  word('author', '저자', 7, 'noun',
    ['독자', '편집자', '출판사', '비평가', '번역가', '기자', '구독자', '출판인', '인쇄소', '서점'],
    tips({
      etymology: '라틴어 \'auctor\'에서 유래했으며, 이는 \'창조자\'나 \'증가시키는 사람\'이라는 의미를 담고 있습니다.',
      visual: '책 표지에 자신의 이름이 크게 적힌 펜을 든 소설가의 모습을 상상해 보세요.',
      soundAlike: '\'어(au)서(thor) 써!\'라고 재촉받는 글 쓰는 사람의 모습을 연상하면 쉽습니다.',
      context: '문학 작품뿐만 아니라 학술 논문이나 기사의 원작자를 지칭할 때도 널리 쓰입니다.',
      synonymAntonym: 'writer와 유사하지만, 보통 출판된 작품의 권위 있는 창작자라는 뉘앙스가 강하며 reader와는 반대 개념입니다.',
    }),
    {
      definition: 'a person who creates an original piece of writing, such as a novel, poem, or report',
      synonyms: ['writer', 'novelist', 'creator'],
      antonyms: ['reader', 'audience', 'illustrator'],
      exampleSentences: [
        { en: 'The famous novelist is the person who wrote this best-selling series.', ko: '그 유명한 소설가는 이 베스트셀러 시리즈를 쓴 저자입니다.' },
        { en: 'She met her favorite creator at the international book fair last week.', ko: '그녀는 지난주 국제 도서 박람회에서 자신이 가장 좋아하는 작가를 만났습니다.' },
      ],
    }
  ),
];
