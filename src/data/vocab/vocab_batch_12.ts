import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch12: VocabItem[] = [
  word('Elaborate', '정교한', 6, 'adjective',
    ['단순한', '조악한', '대충 만든', '미완성', '기본적인', '원시적', '덜세공', '조잡한', '수수한', '간소한'],
    tips({
      etymology: 'e(밖으로) + labor(노동) + -ate -> 세밀히 노력한',
      visual: '정교한 장식이 달린 시계',
      soundAlike: '일러보레이트 = 일러보레이션(정교화)',
      context: 'She wore an elaborate gown to the ball.',
      synonymAntonym: '동의어: intricate, detailed, 반의어: simple',
    }),
    {
      definition: 'Having many details or parts; done with great care and complexity.',
      wordDistractors: ['intricate', 'ornate', 'sophisticated'],
      definitionDistractors: [
        'plain or without decoration',
        'rough or not finished',
        'basic or minimal in design',
      ],
      exampleSentences: [
        { en: 'She wore an elaborate gown to the ball.', ko: '그녀는 무도회에 정교한 드레스를 입었다.' },
        { en: 'The cake had elaborate decorations.', ko: '케이크에는 정교한 장식이 있었다.' },
      ],
    }
  ),
  word('Embrace', '포용하다', 6, 'verb',
    ['거부하다', '밀어내다', '불받다', '회피하다', '배척하다', '추방하다', '거절', '배제', '소외', '차단'],
    tips({
      etymology: 'em(안에) + brace(팔) -> 팔로 안에 품다',
      visual: '두 사람이 껴안는 모습',
      soundAlike: '엠브레이스 = 엠브레이스(포용)',
      context: 'We must embrace diversity.',
      synonymAntonym: '동의어: accept, adopt, 반의어: reject',
    }),
    {
      definition: 'To accept or hold someone or something closely; to adopt willingly.',
      wordDistractors: ['accept', 'adopt', 'welcome'],
      definitionDistractors: [
        'to push away or refuse',
        'to leave or go away',
        'to criticize or disapprove',
      ],
      exampleSentences: [
        { en: 'We must embrace diversity.', ko: '우리는 다양성을 포용해야 한다.' },
        { en: 'She embraced her daughter warmly.', ko: '그녀는 딸을 따뜻하게 껴안았다.' },
      ],
    }
  ),
  word('Emission', '배출', 6, 'noun',
    ['흡수', '저장', '차단', '억제', '제거', '차단', '저감', '봉쇄', '흡수', '보관'],
    tips({
      etymology: 'e(밖으로) + mit(보내다) + -ion -> 밖으로 내보냄',
      visual: '배기가스가 나오는 자동차 배기관',
      soundAlike: '이미션 = 이밋(방출하다)',
      context: 'Carbon emission must be reduced.',
      synonymAntonym: '동의어: discharge, release, 반의어: absorption',
    }),
    {
      definition: 'The act of sending something out, especially gas, heat, or light.',
      wordDistractors: ['discharge', 'release', 'exhaust'],
      definitionDistractors: [
        'the act of taking in or absorbing',
        'the act of blocking or stopping',
        'the act of storing or keeping',
      ],
      exampleSentences: [
        { en: 'Carbon emission must be reduced.', ko: '탄소 배출을 줄여야 한다.' },
        { en: 'The factory reduced its emissions.', ko: '공장은 배출량을 줄였다.' },
      ],
    }
  ),
  word('Empathy', '공감', 6, 'noun',
    ['냉담', '무관심', '무시', '적대', '혐오', '냉대', '무감동', '냉소', '거리감', '이질'],
    tips({
      etymology: 'em(안에) + path(감정) + -y -> 상대 감정에 들어가다',
      visual: '슬픈 친구를 어깨로 위로하는 사람',
      soundAlike: '엠퍼시 = 심퍼시(동정)',
      context: 'Good leaders show empathy.',
      synonymAntonym: '동의어: understanding, compassion, 반의어: indifference',
    }),
    {
      definition: 'The ability to understand and share the feelings of another person.',
      wordDistractors: ['sympathy', 'compassion', 'understanding'],
      definitionDistractors: [
        'lack of interest or concern',
        'hostility or hatred toward others',
        'indifference or coldness',
      ],
      exampleSentences: [
        { en: 'Good leaders show empathy.', ko: '좋은 리더는 공감을 보인다.' },
        { en: 'She felt empathy for the homeless.', ko: '그녀는 노숙자들에게 공감을 느꼈다.' },
      ],
    }
  ),
  word('Empirical', '경험적인', 6, 'adjective',
    ['이론적', '추상적', '가설적', '관념적', '순수 이론', '비실증', '추측', '공상', '비경험', '비실험'],
    tips({
      etymology: '그리스어 empeiria(경험)에서 유래',
      visual: '실험실에서 데이터를 측정하는 과학자',
      soundAlike: '엠피리컬 = 엠피리시즘(경험주의)',
      context: 'The study is based on empirical evidence.',
      synonymAntonym: '동의어: experiential, observed, 반의어: theoretical',
    }),
    {
      definition: 'Based on observation or experience rather than theory.',
      wordDistractors: ['experimental', 'observational', 'factual'],
      definitionDistractors: [
        'based on ideas rather than facts',
        'imaginary or not real',
        'random or without basis',
      ],
      exampleSentences: [
        { en: 'The study is based on empirical evidence.', ko: '그 연구는 경험적 증거에 기반한다.' },
        { en: 'We need empirical data to support this.', ko: '이를 뒷받침하려면 경험적 데이터가 필요하다.' },
      ],
    }
  ),
  word('Endorse', '승인하다', 6, 'verb',
    ['거부하다', '반대하다', '비난하다', '거절하다', '무효화하다', '취소하다', '철회', '반대', '퇴짜', '불인정'],
    tips({
      etymology: 'en(위에) + dors(등) -> 등뒤에 서명하다',
      visual: '유명인의 광고 후원 사인',
      soundAlike: '엔도스 = 엔도스먼트(승인)',
      context: 'The committee endorsed the proposal.',
      synonymAntonym: '동의어: support, approve, 반의어: oppose',
    }),
    {
      definition: 'To give official support or approval to someone or something.',
      wordDistractors: ['support', 'approve', 'back'],
      definitionDistractors: [
        'to refuse or decline',
        'to criticize or condemn',
        'to cancel or revoke',
      ],
      exampleSentences: [
        { en: 'The committee endorsed the proposal.', ko: '위원회는 제안을 승인했다.' },
        { en: 'The celebrity endorsed the product.', ko: '그 유명인은 제품을 후원했다.' },
      ],
    }
  ),
  word('Enforce', '시행하다', 6, 'verb',
    ['방치하다', '무시하다', '철회하다', '완화하다', '해제하다', '포기하다', '해이', '방임', '소홀', '유예'],
    tips({
      etymology: 'en(만들다) + force(힘) -> 힘을 실어 시행하다',
      visual: '경찰이 규칙을 집행하는 모습',
      soundAlike: '인포스 = 인포스먼트(시행)',
      context: 'Laws must be enforced fairly.',
      synonymAntonym: '동의어: implement, apply, 반의어: waive',
    }),
    {
      definition: 'To make people obey a rule or law.',
      wordDistractors: ['implement', 'apply', 'impose'],
      definitionDistractors: [
        'to ignore or neglect',
        'to cancel or remove',
        'to relax or loosen',
      ],
      exampleSentences: [
        { en: 'Laws must be enforced fairly.', ko: '법은 공정하게 시행되어야 한다.' },
        { en: 'The school enforced the dress code.', ko: '학교는 복장 규정을 시행했다.' },
      ],
    }
  ),
  word('Engage', '참여시키다', 6, 'verb',
    ['배제하다', '무시하다', '해제하다', '떠나게 하다', '소외시키다', '거부하다', '해산', '이탈', '방치', '회피'],
    tips({
      etymology: 'en(안에) + gage(약속) -> 약속에 참여하다',
      visual: '발표에 집중하는 청중',
      soundAlike: '엔게이지 = 엔게이지먼트(참여)',
      context: 'The teacher tried to engage the students.',
      synonymAntonym: '동의어: involve, attract, 반의어: disengage',
    }),
    {
      definition: 'To attract or involve someone in an activity.',
      wordDistractors: ['involve', 'attract', 'occupy'],
      definitionDistractors: [
        'to exclude or leave out',
        'to ignore or neglect',
        'to release or disconnect',
      ],
      exampleSentences: [
        { en: 'The teacher tried to engage the students.', ko: '선생님은 학생들을 참여시키려 했다.' },
        { en: 'The game engaged everyone.', ko: '그 게임은 모두를 참여시켰다.' },
      ],
    }
  ),
  word('Enhance', '향상시키다', 6, 'verb',
    ['악화시키다', '훼손하다', '약화시키다', '감소시키다', '저하시키다', '막다', '퇴보', '해치다', '약화', '손상'],
    tips({
      etymology: 'en(만들다) + hance(높다) -> 높게 만들다',
      visual: '개선된 제품의 전후 비교',
      soundAlike: '인핸스 = 인핸스먼트(향상)',
      context: 'The training enhanced her skills.',
      synonymAntonym: '동의어: improve, boost, 반의어: diminish',
    }),
    {
      definition: 'To improve or increase the quality or value of something.',
      wordDistractors: ['improve', 'boost', 'strengthen'],
      definitionDistractors: [
        'to make worse or damage',
        'to reduce or decrease',
        'to weaken or lessen',
      ],
      exampleSentences: [
        { en: 'The training enhanced her skills.', ko: '그 훈련은 그녀의 실력을 향상시켰다.' },
        { en: 'Lights enhanced the room.', ko: '조명이 방을 더 멋지게 만들었다.' },
      ],
    }
  ),
  word('Enterprise', '기업', 6, 'noun',
    ['개인', '소규모', '취미', '일시적', '무계획', '비조직', '단체 해체', '무사업', '공백', '비영리'],
    tips({
      etymology: 'enter(사이에) + prise(잡다) -> 사업에 착수하다',
      visual: '고층 빌딩에 걸린 회사 간판',
      soundAlike: '엔터프라이즈 = 엔터프라이징(기업가적)',
      context: 'She runs a successful enterprise.',
      synonymAntonym: '동의어: company, business, 반의어: hobby',
    }),
    {
      definition: 'A business or company, especially one that is large or ambitious.',
      wordDistractors: ['venture', 'endeavor', 'corporation'],
      definitionDistractors: [
        'a person who works alone',
        'a hobby or pastime',
        'a temporary or casual activity',
      ],
      exampleSentences: [
        { en: 'She runs a successful enterprise.', ko: '그녀는 성공적인 기업을 운영한다.' },
        { en: 'The enterprise employs 500 people.', ko: '그 기업은 500명을 고용한다.' },
      ],
    }
  ),
  word('Entity', '실체', 6, 'noun',
    ['공허', '환상', '추상', '개념', '무형', '착각', '환영', '허구', '미실체', '가상'],
    tips({
      etymology: '라틴어 ens(존재하는 것)에서 유래',
      visual: '법인 고유의 독립된 존재',
      soundAlike: '엔티티 = 엔티티 다이어그램',
      context: 'The company is a separate legal entity.',
      synonymAntonym: '동의어: being, organization, 반의어: nothing',
    }),
    {
      definition: 'Something that exists as a distinct, independent unit.',
      wordDistractors: ['organization', 'establishment', 'unit'],
      definitionDistractors: [
        'complete emptiness or nothingness',
        'something imagined or unreal',
        'a vague idea without form',
      ],
      exampleSentences: [
        { en: 'The company is a separate legal entity.', ko: '그 회사는 별도의 법인이다.' },
        { en: 'Each department is a distinct entity.', ko: '각 부서는 독립된 실체이다.' },
      ],
    }
  ),
  word('Epidemic', '유행병', 6, 'noun',
    ['회복', '치유', '예방', '소멸', '완치', '정상화', '안정', '건강', '예방조치', '종식'],
    tips({
      etymology: 'epi(가운데) + dem(백성) + -ic -> 사람들 가운데 퍼짐',
      visual: '지도에 퍼져 나가는 감염 표시',
      soundAlike: '에피데믹 = 에피데미올로지(역학)',
      context: 'The epidemic spread rapidly.',
      synonymAntonym: '동의어: outbreak, plague, 반의어: containment',
    }),
    {
      definition: 'A widespread occurrence of a disease in a community at a particular time.',
      wordDistractors: ['outbreak', 'plague', 'pandemic'],
      definitionDistractors: [
        'full recovery from illness',
        'prevention of disease spread',
        'complete disappearance of disease',
      ],
      exampleSentences: [
        { en: 'The epidemic spread rapidly.', ko: '유행병이 빠르게 퍼졌다.' },
        { en: 'Health officials contained the epidemic.', ko: '보건 당국이 유행병을 억제했다.' },
      ],
    }
  ),
  word('Equip', '갖추다', 6, 'verb',
    ['벗기다', '탈취하다', '해제하다', '제거하다', '미비', '무장해제', '박탈', '탈의', '제거', '빼앗다'],
    tips({
      etymology: '프랑스어 esquiper(배를 갖추다)에서 유래',
      visual: '도구를 몸에 차는 기술자',
      soundAlike: '이퀴프 = 이퀴프먼트(장비)',
      context: 'We need to equip the lab with new tools.',
      synonymAntonym: '동의어: furnish, provide, 반의어: strip',
    }),
    {
      definition: 'To provide someone or something with the necessary items or tools.',
      wordDistractors: ['furnish', 'supply', 'outfit'],
      definitionDistractors: [
        'to take away or remove',
        'to leave empty or bare',
        'to disconnect or detach',
      ],
      exampleSentences: [
        { en: 'We need to equip the lab with new tools.', ko: '실험실에 새 도구를 갖춰야 한다.' },
        { en: 'The soldiers were equipped for battle.', ko: '병사들은 전투에 필요한 장비를 갖추었다.' },
      ],
    }
  ),
  word('Equivalent', '동등한', 6, 'adjective',
    ['불균형', '비대칭', '열등', '우위', '차이', '불일치', '상이', '비등가', '불균형', '불균형'],
    tips({
      etymology: 'equi(같은) + val(가치) + -ent -> 같은 가치의',
      visual: '저울에서 맞춰진 두 무게',
      soundAlike: '이퀴벌런트 = 이퀴벌런스(동등)',
      context: 'One dollar is equivalent to about 1,300 won.',
      synonymAntonym: '동의어: equal, comparable, 반의어: unequal',
    }),
    {
      definition: 'Equal in value, amount, or meaning.',
      wordDistractors: ['equal', 'comparable', 'identical'],
      definitionDistractors: [
        'different in size or amount',
        'superior or better',
        'inferior or worse',
      ],
      exampleSentences: [
        { en: 'One dollar is equivalent to about 1,300 won.', ko: '1달러는 약 1,300원과 동등하다.' },
        { en: 'The two jobs are equivalent in pay.', ko: '두 직업은 급여가 동등하다.' },
      ],
    }
  ),
  word('Erode', '침식하다', 6, 'verb',
    ['축적하다', '쌓다', '건설하다', '보강하다', '보존하다', '축적', '강화', '건설', '축적', '증가'],
    tips({
      etymology: '라틴어 erodere(갉아먹다)에서 유래',
      visual: '파도에 침식되는 절벽',
      soundAlike: '이로드 = 이로전(침식)',
      context: 'Acid rain erodes stone buildings.',
      synonymAntonym: '동의어: wear away, corrode, 반의어: build up',
    }),
    {
      definition: 'To gradually wear away or destroy something by natural forces.',
      wordDistractors: ['corrode', 'wear', 'decay'],
      definitionDistractors: [
        'to build up or add to',
        'to strengthen or reinforce',
        'to preserve or protect',
      ],
      exampleSentences: [
        { en: 'Acid rain erodes stone buildings.', ko: '산성비는 석조 건물을 침식한다.' },
        { en: 'Wind and water eroded the cliffs.', ko: '바람과 물이 절벽을 침식했다.' },
      ],
    }
  ),
  word('Ethic', '윤리', 6, 'noun',
    ['무도덕', '비양심', '부정', '부패', '타락', '비윤리', '무원칙', '방종', '해이', '부도덕'],
    tips({
      etymology: '그리스어 ethos(성품, 습관)에서 유래',
      visual: '윤리 강령을 읽는 직원',
      soundAlike: '에딕 = 에딕스(윤리학)',
      context: 'Professional ethics require honesty.',
      synonymAntonym: '동의어: morality, principle, 반의어: corruption',
    }),
    {
      definition: 'Moral principles that govern behavior or conduct.',
      wordDistractors: ['morality', 'principle', 'integrity'],
      definitionDistractors: [
        'dishonesty or wrongdoing',
        'corruption or decay',
        'lack of moral standards',
      ],
      exampleSentences: [
        { en: 'Professional ethics require honesty.', ko: '전문 윤리는 정직을 요구한다.' },
        { en: 'He has a strong work ethic.', ko: '그는 강한 직업 윤리를 갖고 있다.' },
      ],
    }
  ),
  word('Ethnic', '민족적', 6, 'adjective',
    ['국제적', '보편적', '세계적', '혼합', '다문화', '무국적', '동질', '통합', '융합', '보편'],
    tips({
      etymology: '그리스어 ethnos(민족)에서 유래',
      visual: '각 민족의 전통 의상',
      soundAlike: '에스닉 = 에스니시티(민족성)',
      context: 'The festival celebrates ethnic diversity.',
      synonymAntonym: '동의어: racial, cultural, 반의어: universal',
    }),
    {
      definition: 'Relating to a group of people who share a common culture or ancestry.',
      wordDistractors: ['racial', 'cultural', 'tribal'],
      definitionDistractors: [
        'applying to all countries',
        'mixed or blended',
        'without national identity',
      ],
      exampleSentences: [
        { en: 'The festival celebrates ethnic diversity.', ko: '그 축제는 민족적 다양성을 축하한다.' },
        { en: 'The neighborhood has ethnic restaurants.', ko: '그 동네에는 민족 음식점이 있다.' },
      ],
    }
  ),
  word('Evolution', '진화', 6, 'noun',
    ['퇴화', '퇴보', '고정', '정체', '불변', '퇴행', '해체', '소멸', '정지', '고착'],
    tips({
      etymology: 'e(밖으로) + volut(굴리다) + -ion -> 펼쳐나가다',
      visual: '원시인에서 현대인까지의 변화',
      soundAlike: '에볼루션 = 에볼브(진화하다)',
      context: 'Evolution occurs over millions of years.',
      synonymAntonym: '동의어: development, progression, 반의어: devolution',
    }),
    {
      definition: 'The gradual development of something over time, especially of living things.',
      wordDistractors: ['development', 'progression', 'adaptation'],
      definitionDistractors: [
        'decline or worsening',
        'remaining unchanged',
        'sudden disappearance',
      ],
      exampleSentences: [
        { en: 'Evolution occurs over millions of years.', ko: '진화는 수백만 년에 걸쳐 일어난다.' },
        { en: 'Technology evolution has been rapid.', ko: '기술 진화는 빠르게 진행되었다.' },
      ],
    }
  ),
  word('Exaggerate', '과장하다', 6, 'verb',
    ['축소하다', '축약하다', '최소화하다', '왜소화하다', '축소', '축소', '축소', '축소', '축소', '축소'],
    tips({
      etymology: 'ex(밖으로) + agger(쌓다) + -ate -> 크게 쌓다',
      visual: '큰 물고기 이야기를 하는 낚시꾼',
      soundAlike: '이그재저레이트 = 이그재저레이션(과장)',
      context: 'Don\'t exaggerate the problem.',
      synonymAntonym: '동의어: overstate, inflate, 반의어: minimize',
    }),
    {
      definition: 'To represent something as larger or better than it really is.',
      wordDistractors: ['overstate', 'inflate', 'magnify'],
      definitionDistractors: [
        'to make smaller or less',
        'to tell the exact truth',
        'to reduce or play down',
      ],
      exampleSentences: [
        { en: 'Don\'t exaggerate the problem.', ko: '문제를 과장하지 마라.' },
        { en: 'He tends to exaggerate his achievements.', ko: '그는 자신의 성과를 과장하는 경향이 있다.' },
      ],
    }
  ),
  word('Excerpt', '발췌', 6, 'noun',
    ['전문', '전체', '원본', '완본', '총괄', '총론', '개론', '통합', '종합', '전집'],
    tips({
      etymology: 'ex(밖으로) + cerpt(뽑다) -> 뽑아낸 부분',
      visual: '두꺼운 책에서 한 페이지를 잘라낸 모습',
      soundAlike: '엑서프트 = 엑기스(추출)',
      context: 'She read an excerpt from the novel.',
      synonymAntonym: '동의어: passage, extract, 반의어: entirety',
    }),
    {
      definition: 'A short passage taken from a longer work.',
      wordDistractors: ['passage', 'extract', 'quote'],
      definitionDistractors: [
        'the complete work in full',
        'the original entire document',
        'a summary of all parts',
      ],
      exampleSentences: [
        { en: 'She read an excerpt from the novel.', ko: '그녀는 소설에서 발췌한 부분을 읽었다.' },
        { en: 'The excerpt captured the key scene.', ko: '그 발췌문은 핵심 장면을 담았다.' },
      ],
    }
  ),
  word('Exclusive', '독점적인', 6, 'adjective',
    ['포괄적', '공개', '개방', '대중적', '공통', '보편', '공유', '협업', '통합', '포용'],
    tips({
      etymology: 'ex(밖으로) + clus(닫다) + -ive -> 제외하는',
      visual: 'VIP 전용 라운지 입구',
      soundAlike: '익스클루시브 = 익스클루전(제외)',
      context: 'This is an exclusive club.',
      synonymAntonym: '동의어: sole, restricted, 반의어: inclusive',
    }),
    {
      definition: 'Restricted to a particular person or group; not shared.',
      wordDistractors: ['restricted', 'private', 'sole'],
      definitionDistractors: [
        'open to everyone',
        'shared by many',
        'available to all',
      ],
      exampleSentences: [
        { en: 'This is an exclusive club.', ko: '이것은 독점적인 클럽이다.' },
        { en: 'She got exclusive access to the event.', ko: '그녀는 행사에 독점 접근권을 얻었다.' },
      ],
    }
  ),
  word('Execute', '실행하다', 6, 'verb',
    ['중단하다', '취소하다', '생략하다', '미수행', '포기', '해제', '철회', '정지', '미완료', '지연'],
    tips({
      etymology: 'ex(완전히) + secut(따르다) -> 끝까지 수행하다',
      visual: '계획을 실행에 옮기는 팀',
      soundAlike: '엑시큐트 = 엑시큐션(실행)',
      context: 'We will execute the plan tomorrow.',
      synonymAntonym: '동의어: carry out, implement, 반의어: abandon',
    }),
    {
      definition: 'To carry out or perform a plan, order, or task.',
      wordDistractors: ['implement', 'perform', 'accomplish'],
      definitionDistractors: [
        'to stop or cancel',
        'to neglect or ignore',
        'to postpone or delay',
      ],
      exampleSentences: [
        { en: 'We will execute the plan tomorrow.', ko: '우리는 내일 계획을 실행할 것이다.' },
        { en: 'The soldiers executed the order.', ko: '병사들은 명령을 실행했다.' },
      ],
    }
  ),
  word('Exempt', '면제하다', 6, 'verb',
    ['적용하다', '포함하다', '부과하다', '의무화하다', '적용', '포함', '부과', '징수', '강제', '의무'],
    tips({
      etymology: 'ex(밖으로) + empt(사다) -> 빼내다',
      visual: '세금 면제 확인서',
      soundAlike: '이그젬프트 = 이그젬ption(면제)',
      context: 'Students are exempt from the fee.',
      synonymAntonym: '동의어: exclude, excuse, 반의어: subject',
    }),
    {
      definition: 'To free someone from a duty or obligation.',
      wordDistractors: ['excuse', 'exclude', 'release'],
      definitionDistractors: [
        'to obligate or require',
        'to include or add',
        'to impose or enforce',
      ],
      exampleSentences: [
        { en: 'Students are exempt from the fee.', ko: '학생들은 수수료가 면제된다.' },
        { en: 'He was exempted from military service.', ko: '그는 군 복무가 면제되었다.' },
      ],
    }
  ),
  word('Exhaust', '소진하다', 6, 'verb',
    ['보충하다', '충전하다', '축적하다', '채우다', '재충전', '보존', '비축', '축적', '저장', '충전'],
    tips({
      etymology: 'ex(밖으로) + haust(쏟다) -> 다 쏟아내다',
      visual: '배터리가 0%로 된 스마트폰',
      soundAlike: '이그조스트 = 이그조스쳔(소진)',
      context: 'The long trip exhausted them.',
      synonymAntonym: '동의어: deplete, drain, 반의어: replenish',
    }),
    {
      definition: 'To use up completely or consume all of something.',
      wordDistractors: ['deplete', 'drain', 'consume'],
      definitionDistractors: [
        'to refill or restock',
        'to save or preserve',
        'to increase or add',
      ],
      exampleSentences: [
        { en: 'The long trip exhausted them.', ko: '긴 여행이 그들을 지치게 했다.' },
        { en: 'We exhausted our food supply.', ko: '우리는 식량을 모두 소진했다.' },
      ],
    }
  ),
  word('Exile', '추방하다', 6, 'verb',
    ['환영하다', '귀환시키다', '초대하다', '수용하다', '복귀', '귀국', '환송', '영접', '환대', '초대'],
    tips({
      etymology: '라틴어 exilium(추방)에서 유래',
      visual: '국경을 넘어 추방되는 사람',
      soundAlike: '엑자일 = 엑자일드(추방된)',
      context: 'The king was exiled from his country.',
      synonymAntonym: '동의어: banish, expel, 반의어: welcome',
    }),
    {
      definition: 'To force someone to leave their country, typically for political reasons.',
      wordDistractors: ['banish', 'expel', 'deport'],
      definitionDistractors: [
        'to invite or welcome',
        'to allow someone to return',
        'to accept into a country',
      ],
      exampleSentences: [
        { en: 'The king was exiled from his country.', ko: '왕은 그의 나라에서 추방되었다.' },
        { en: 'They exiled the dissidents.', ko: '그들은 반대자들을 추방했다.' },
      ],
    }
  ),
  word('Exotic', '이국적인', 6, 'adjective',
    ['토착의', '국내산', '흔한', '일상적', '국산', '보편적', '전형적', '평범', '국내', '토착'],
    tips({
      etymology: '그리스어 exotikos(바깥의)에서 유래',
      visual: '열대 과일과 이국적 꽃',
      soundAlike: '이그조틱 = 이그조티시즘(이국취미)',
      context: 'She loves exotic cuisine.',
      synonymAntonym: '동의어: foreign, unusual, 반의어: native',
    }),
    {
      definition: 'Originating from a distant foreign country; strikingly unusual.',
      wordDistractors: ['foreign', 'unusual', 'alien'],
      definitionDistractors: [
        'from one\'s own country',
        'common or ordinary',
        'typical or standard',
      ],
      exampleSentences: [
        { en: 'She loves exotic cuisine.', ko: '그녀는 이국적인 요리를 좋아한다.' },
        { en: 'The zoo has exotic animals.', ko: '동물원에는 이국적인 동물들이 있다.' },
      ],
    }
  ),
  word('Exploit', '이용하다', 6, 'verb',
    ['보호하다', '돌보다', '지키다', '방어하다', '수호', '보존', '보호', '옹호', '수호', '비호'],
    tips({
      etymology: 'ex(밖으로) + ploit(접다) -> 펼쳐 활용하다',
      visual: '자원을 채굴하는 광산',
      soundAlike: '익스플로이트 = 익스플로이테이션(착취)',
      context: 'Some companies exploit workers.',
      synonymAntonym: '동의어: utilize, take advantage of, 반의어: protect',
    }),
    {
      definition: 'To use or take advantage of something or someone, often unfairly.',
      wordDistractors: ['utilize', 'leverage', 'manipulate'],
      definitionDistractors: [
        'to shield or defend',
        'to care for or nurture',
        'to avoid or spare',
      ],
      exampleSentences: [
        { en: 'Some companies exploit workers.', ko: '일부 회사는 노동자를 착취한다.' },
        { en: 'We must exploit this opportunity.', ko: '우리는 이 기회를 이용해야 한다.' },
      ],
    }
  ),
  word('Exposure', '노출', 6, 'noun',
    ['차단', '은폐', '보호', '차폐', '숨김', '비공개', '봉쇄', '격리', '은닉', '비노출'],
    tips({
      etymology: 'ex(밖으로) + pos(놓다) + -ure -> 밖에 놓음',
      visual: '태양에 노출된 피부',
      soundAlike: '익스포저 = 익스포즈(노출하다)',
      context: 'Exposure to sunlight can damage skin.',
      synonymAntonym: '동의어: disclosure, revelation, 반의어: concealment',
    }),
    {
      definition: 'The state of being revealed or subjected to something.',
      wordDistractors: ['disclosure', 'revelation', 'visibility'],
      definitionDistractors: [
        'hiding or concealing',
        'protection from harm',
        'blocking or shielding',
      ],
      exampleSentences: [
        { en: 'Exposure to sunlight can damage skin.', ko: '햇빛에 노출되면 피부가 손상될 수 있다.' },
        { en: 'The scandal led to public exposure.', ko: '그 스캔들은 대중에 노출되었다.' },
      ],
    }
  ),
  word('Exterior', '외부', 6, 'noun',
    ['내부', '심장부', '중앙', '안쪽', '핵심', '내면', '내측', '실내', '내부', '속'],
    tips({
      etymology: 'exter(밖의) + -ior(비교급) -> 더 바깥쪽',
      visual: '건물의 외벽과 정문',
      soundAlike: '익스티리어 = 인티리어(내부)의 반대',
      context: 'The exterior of the building needs repair.',
      synonymAntonym: '동의어: outside, surface, 반의어: interior',
    }),
    {
      definition: 'The outer surface or part of something.',
      wordDistractors: ['surface', 'facade', 'outside'],
      definitionDistractors: [
        'the inner part or core',
        'the central area',
        'the inside space',
      ],
      exampleSentences: [
        { en: 'The exterior of the building needs repair.', ko: '건물 외부는 수리가 필요하다.' },
        { en: 'The car\'s exterior was damaged.', ko: '차량 외부가 손상되었다.' },
      ],
    }
  ),
  word('Extract', '추출하다', 6, 'verb',
    ['주입하다', '삽입하다', '혼합하다', '적하하다', '주입', '삽입', '혼합', '융합', '주입', '적하'],
    tips({
      etymology: 'ex(밖으로) + tract(당기다) -> 밖으로 당겨내다',
      visual: '과일에서 주스를 짜내는 모습',
      soundAlike: '익스트랙트 = 익스트랙션(추출)',
      context: 'They extract oil from olives.',
      synonymAntonym: '동의어: pull out, derive, 반의어: insert',
    }),
    {
      definition: 'To remove or obtain something by pulling or force.',
      wordDistractors: ['derive', 'obtain', 'withdraw'],
      definitionDistractors: [
        'to put in or inject',
        'to mix or combine',
        'to add or insert',
      ],
      exampleSentences: [
        { en: 'They extract oil from olives.', ko: '그들은 올리브에서 기름을 추출한다.' },
        { en: 'The dentist extracted the tooth.', ko: '치과의사가 이를 발치했다.' },
      ],
    }
  ),
  word('Faction', '파벌', 6, 'noun',
    ['통합', '단결', '일치', '조화', '연합', '협력', '화합', '공동체', '전체', '통일'],
    tips({
      etymology: '라틴어 facere(만들다)에서 유래, 함께 만든 무리',
      visual: '서로 대립하는 정치 집단',
      soundAlike: '팩션 = 팩션스(파벌들)',
      context: 'The party split into rival factions.',
      synonymAntonym: '동의어: clique, camp, 반의어: unity',
    }),
    {
      definition: 'A small organized group within a larger one, often in disagreement.',
      wordDistractors: ['clique', 'bloc', 'sect'],
      definitionDistractors: [
        'complete agreement or unity',
        'harmony among all members',
        'full cooperation',
      ],
      exampleSentences: [
        { en: 'The party split into rival factions.', ko: '그 정당은 경쟁 파벌로 갈라졌다.' },
        { en: 'A faction opposed the reform.', ko: '한 파벌이 개혁에 반대했다.' },
      ],
    }
  ),
  word('Feasible', '실행 가능한', 6, 'adjective',
    ['불가능한', '비현실적', '실현불가', '불가', '무리', '비실용', '불가능', '무리', '비가능', '환상적'],
    tips({
      etymology: '라틴어 facere(하다) + -ible -> 할 수 있는',
      visual: '체크리스트에 완료 표시된 계획',
      soundAlike: '피저블 = 피저빌리티(가능성)',
      context: 'The project is feasible within our budget.',
      synonymAntonym: '동의어: possible, practical, 반의어: impossible',
    }),
    {
      definition: 'Possible to do or achieve; practical.',
      wordDistractors: ['practical', 'achievable', 'viable'],
      definitionDistractors: [
        'beyond reach or capability',
        'unrealistic or impractical',
        'too difficult to accomplish',
      ],
      exampleSentences: [
        { en: 'The project is feasible within our budget.', ko: '그 프로젝트는 예산 내에서 실행 가능하다.' },
        { en: 'Is it feasible to finish by Friday?', ko: '금요일까지 마치는 것이 가능한가?' },
      ],
    }
  ),
  word('Federal', '연방의', 6, 'adjective',
    ['지방의', '국가적', '단일', '독립', '자치', '분리', '지역', '개별', '단독', '비연방'],
    tips({
      etymology: '라틴어 foedus(조약)에서 유래',
      visual: '미국 국기와 연방 정부 건물',
      soundAlike: '페더럴 = 페더럴리즘(연방제)',
      context: 'Federal law applies nationwide.',
      synonymAntonym: '동의어: national, central, 반의어: local',
    }),
    {
      definition: 'Relating to a system of government with a central authority and states.',
      wordDistractors: ['national', 'central', 'governmental'],
      definitionDistractors: [
        'relating to a local area',
        'independent or separate',
        'concerning a single region',
      ],
      exampleSentences: [
        { en: 'Federal law applies nationwide.', ko: '연방법은 전국에 적용된다.' },
        { en: 'The federal government announced the plan.', ko: '연방 정부가 계획을 발표했다.' },
      ],
    }
  ),
  word('Fierce', '사나운', 6, 'adjective',
    ['온순한', '순한', '부드러운', '완화된', '평화적', '우호적', '온화', '유순', '온순', '온화'],
    tips({
      etymology: '라틴어 ferus(야생의)에서 유래',
      visual: '으르렁대는 호랑이',
      soundAlike: '피어스 = 피어스니스(사나움)',
      context: 'The competition was fierce.',
      synonymAntonym: '동의어: aggressive, intense, 반의어: gentle',
    }),
    {
      definition: 'Showing a violent or aggressive nature; intense.',
      wordDistractors: ['aggressive', 'intense', 'violent'],
      definitionDistractors: [
        'mild or gentle in nature',
        'peaceful or calm',
        'friendly or kind',
      ],
      exampleSentences: [
        { en: 'The competition was fierce.', ko: '경쟁이 치열했다.' },
        { en: 'A fierce storm hit the coast.', ko: '사나운 폭풍이 해안을 강타했다.' },
      ],
    }
  ),
  word('Fiscal', '재정의', 6, 'adjective',
    ['비재정', '비경제', '군사적', '사회적', '문화적', '비재정', '비경제', '감정적', '도덕적', '법적'],
    tips({
      etymology: '라틴어 fiscus(재정)에서 유래',
      visual: '세금 보고서와 예산 계획서',
      soundAlike: '피스컬 = 피스컬 폴리시(재정 정책)',
      context: 'Fiscal policy affects the economy.',
      synonymAntonym: '동의어: financial, budgetary, 반의어: nonfinancial',
    }),
    {
      definition: 'Relating to government revenue, spending, and debt.',
      wordDistractors: ['financial', 'budgetary', 'monetary'],
      definitionDistractors: [
        'military or defense-related',
        'social or cultural',
        'emotional or personal',
      ],
      exampleSentences: [
        { en: 'Fiscal policy affects the economy.', ko: '재정 정책은 경제에 영향을 미친다.' },
        { en: 'The fiscal year ends in March.', ko: '회계 연도는 3월에 끝난다.' },
      ],
    }
  ),
  word('Fluctuate', '변동하다', 6, 'verb',
    ['안정되다', '고정되다', '일정하다', '불변', '정체', '고착', '안정', '불변', '고정', '일정'],
    tips({
      etymology: '라틴어 fluctuare(파도치다)에서 유래',
      visual: '오르내리는 주가 그래프',
      soundAlike: '플럭츄에이트 = 플럭츄에이션(변동)',
      context: 'Oil prices fluctuate daily.',
      synonymAntonym: '동의어: vary, oscillate, 반의어: stabilize',
    }),
    {
      definition: 'To change or vary irregularly in number or amount.',
      wordDistractors: ['vary', 'oscillate', 'shift'],
      definitionDistractors: [
        'to remain constant',
        'to stay fixed or steady',
        'to hold a steady level',
      ],
      exampleSentences: [
        { en: 'Oil prices fluctuate daily.', ko: '유가가 매일 변동한다.' },
        { en: 'His mood fluctuates throughout the day.', ko: '그의 기분은 하루 종일 변동한다.' },
      ],
    }
  ),
  word('Forbid', '금지하다', 6, 'verb',
    ['허용하다', '승인하다', '허가하다', '촉진하다', '장려', '허용', '허가', '승인', '허락', '촉진'],
    tips({
      etymology: '고대영어 forbeodan(멀리 명하다)에서 유래',
      visual: '금지 표시가 있는 입구',
      soundAlike: '포비드 = 포비든(금지된)',
      context: 'Smoking is forbidden here.',
      synonymAntonym: '동의어: prohibit, ban, 반의어: permit',
    }),
    {
      definition: 'To order someone not to do something; to prohibit.',
      wordDistractors: ['prohibit', 'ban', 'bar'],
      definitionDistractors: [
        'to allow or permit',
        'to encourage or promote',
        'to approve or authorize',
      ],
      exampleSentences: [
        { en: 'Smoking is forbidden here.', ko: '여기에서는 흡연이 금지된다.' },
        { en: 'The law forbids discrimination.', ko: '법은 차별을 금지한다.' },
      ],
    }
  ),
  word('Forecast', '예측하다', 6, 'verb',
    ['추측하다', '무시하다', '오판하다', '과거 회고', '사후', '추측', '무시', '후회', '회고', '후해석'],
    tips({
      etymology: 'fore(앞) + cast(던지다) -> 앞으로 던지다',
      visual: '날씨 예보 아이콘',
      soundAlike: '포캐스트 = 포캐스팅(예측)',
      context: 'Experts forecast economic growth.',
      synonymAntonym: '동의어: predict, project, 반의어: hindsight',
    }),
    {
      definition: 'To predict or estimate a future event or trend.',
      wordDistractors: ['predict', 'project', 'anticipate'],
      definitionDistractors: [
        'to look back on the past',
        'to ignore or disregard',
        'to guess randomly',
      ],
      exampleSentences: [
        { en: 'Experts forecast economic growth.', ko: '전문가들은 경제 성장을 예측한다.' },
        { en: 'They forecast rain for tomorrow.', ko: '그들은 내일 비가 올 것으로 예측한다.' },
      ],
    }
  ),
  word('Formula', '공식', 6, 'noun',
    ['무질서', '직관', '임의', '흐름', '경험', '실험', '모호', '비공식', '임시방편', '무계획'],
    tips({
      etymology: '라틴어 formula(작은 형태)에서 유래',
      visual: '칠판에 적힌 수학 공식',
      soundAlike: '포뮬러 = 포뮬레이트(공식화하다)',
      context: 'The formula for success is hard work.',
      synonymAntonym: '동의어: equation, recipe, 반의어: randomness',
    }),
    {
      definition: 'A fixed method or set of rules for achieving something.',
      wordDistractors: ['equation', 'recipe', 'blueprint'],
      definitionDistractors: [
        'random or haphazard approach',
        'intuition without rules',
        'unplanned or improvised',
      ],
      exampleSentences: [
        { en: 'The formula for success is hard work.', ko: '성공의 공식은 열심히 일하는 것이다.' },
        { en: 'Scientists derived a new formula.', ko: '과학자들이 새로운 공식을 유도했다.' },
      ],
    }
  ),
  word('Foster', '육성하다', 6, 'verb',
    ['방치하다', '억제하다', '좌절시키다', '방해하다', '훼손', '저해', '방치', '묵살', '억압', '저지'],
    tips({
      etymology: '고대영어 fostrian(양육하다)에서 유래',
      visual: '아이를 안아 키우는 양부모',
      soundAlike: '포스터 = 포스터 페어런트(양부모)',
      context: 'The program fosters creativity.',
      synonymAntonym: '동의어: nurture, promote, 반의어: neglect',
    }),
    {
      definition: 'To encourage or promote the development of something.',
      wordDistractors: ['nurture', 'promote', 'cultivate'],
      definitionDistractors: [
        'to neglect or ignore',
        'to hinder or block',
        'to discourage or suppress',
      ],
      exampleSentences: [
        { en: 'The program fosters creativity.', ko: '그 프로그램은 창의성을 육성한다.' },
        { en: 'Parents foster their children\'s interests.', ko: '부모는 자녀의 관심사를 육성한다.' },
      ],
    }
  ),
  word('Foundation', '기초', 6, 'noun',
    ['상층', '정상', '꼭대기', '결과', '말단', '외부', '표면', '꼭대기', '정점', '끝'],
    tips({
      etymology: '라틴어 fundare(바닥을 만들다)에서 유래',
      visual: '건물의 기초 공사',
      soundAlike: '파운데이션 = 파운드(찾다)',
      context: 'Education is the foundation of society.',
      synonymAntonym: '동의어: base, basis, 반의어: apex',
    }),
    {
      definition: 'The lowest load-bearing part of a building; the basis of something.',
      wordDistractors: ['base', 'basis', 'groundwork'],
      definitionDistractors: [
        'the highest point or top',
        'the outer surface',
        'the final result',
      ],
      exampleSentences: [
        { en: 'Education is the foundation of society.', ko: '교육은 사회의 기초이다.' },
        { en: 'Workers laid the foundation.', ko: '노동자들이 기초를 놓았다.' },
      ],
    }
  ),
  word('Fraction', '분수', 6, 'noun',
    ['전체', '전량', '합계', '전부', '통째', '100%', '전체', '전량', '전부', '완전'],
    tips({
      etymology: '라틴어 fractus(부서진)에서 유래',
      visual: '반으로 나뉜 피자 조각',
      soundAlike: '프랙션 = 프랙셔널(부분의)',
      context: 'Only a fraction of voters turned out.',
      synonymAntonym: '동의어: portion, part, 반의어: whole',
    }),
    {
      definition: 'A small part or amount of something; a numerical quantity.',
      wordDistractors: ['portion', 'segment', 'share'],
      definitionDistractors: [
        'the complete total',
        'everything in full',
        'one hundred percent',
      ],
      exampleSentences: [
        { en: 'Only a fraction of voters turned out.', ko: '소수의 유권자만 투표했다.' },
        { en: 'Reduce the fraction to lowest terms.', ko: '분수를 기약분수로 줄여라.' },
      ],
    }
  ),
  word('Framework', '틀', 6, 'noun',
    ['무질서', '혼란', '무구조', '분산', '해체', '비체계', '산발', '무계획', '혼재', '해체'],
    tips({
      etymology: 'frame(뼈대) + work(작업) -> 구조 틀',
      visual: '건물의 철골 구조',
      soundAlike: '프레임워크 = 프레임(틀)',
      context: 'We need a legal framework for this.',
      synonymAntonym: '동의어: structure, skeleton, 반의어: chaos',
    }),
    {
      definition: 'A basic structure or system that supports or organizes something.',
      wordDistractors: ['structure', 'skeleton', 'scaffold'],
      definitionDistractors: [
        'complete disorder or chaos',
        'random or scattered elements',
        'lack of organization',
      ],
      exampleSentences: [
        { en: 'We need a legal framework for this.', ko: '이를 위한 법적 틀이 필요하다.' },
        { en: 'The framework guides our decisions.', ko: '그 틀이 우리의 결정을 이끈다.' },
      ],
    }
  ),
  word('Franchise', '가맹점', 6, 'noun',
    ['독립점', '자영점', '직영', '본점', '비가맹', '독립', '자영', '단독', '직영', '본사'],
    tips({
      etymology: '프랑스어 franchir(자유롭게 하다)에서 유래',
      visual: '전국 체인점 로고가 있는 가게',
      soundAlike: '프랜차이즈 = 프랜차이징(가맹)',
      context: 'He owns a fast-food franchise.',
      synonymAntonym: '동의어: chain, license, 반의어: independent',
    }),
    {
      definition: 'A business that operates under a licensed brand name.',
      wordDistractors: ['chain', 'outlet', 'license'],
      definitionDistractors: [
        'a business run alone',
        'a company-owned store',
        'a unique one-of-a-kind shop',
      ],
      exampleSentences: [
        { en: 'He owns a fast-food franchise.', ko: '그는 패스트푸드 가맹점을 소유한다.' },
        { en: 'The franchise expanded nationwide.', ko: '그 가맹점은 전국으로 확장되었다.' },
      ],
    }
  ),
  word('Friction', '마찰', 6, 'noun',
    ['윤활', '부드러움', '조화', '협력', '화합', '원활', '유동', '조화', '협력', '평화'],
    tips({
      etymology: '라틴어 fricare(문지르다)에서 유래',
      visual: '마찰로 빛나는 두 물체',
      soundAlike: '프릭션 = 프릭션리스(무마찰)',
      context: 'There was friction between the two departments.',
      synonymAntonym: '동의어: conflict, rub, 반의어: harmony',
    }),
    {
      definition: 'Resistance when one surface moves over another; disagreement.',
      wordDistractors: ['conflict', 'tension', 'resistance'],
      definitionDistractors: [
        'smooth cooperation',
        'agreement or harmony',
        'ease of movement',
      ],
      exampleSentences: [
        { en: 'There was friction between the two departments.', ko: '두 부서 사이에 마찰이 있었다.' },
        { en: 'Friction generates heat.', ko: '마찰은 열을 발생시킨다.' },
      ],
    }
  ),
  word('Frontier', '국경', 6, 'noun',
    ['내부', '수도', '안쪽', '중앙', '내륙', '핵심', '본토', '내지', '내부', '심장부'],
    tips({
      etymology: '라틴어 front(앞)에서 유래, 앞선 경계',
      visual: '국경선에 세워진 표지판',
      soundAlike: '프런티어 = 프런티어 스피릿(개척정신)',
      context: 'Space is the final frontier.',
      synonymAntonym: '동의어: border, boundary, 반의어: interior',
    }),
    {
      definition: 'A border between two countries; the limit of knowledge or exploration.',
      wordDistractors: ['border', 'boundary', 'front'],
      definitionDistractors: [
        'the central area',
        'the inner region',
        'the heart of a country',
      ],
      exampleSentences: [
        { en: 'Space is the final frontier.', ko: '우주는 마지막 개척지이다.' },
        { en: 'They crossed the frontier at dawn.', ko: '그들은 새벽에 국경을 넘었다.' },
      ],
    }
  ),
  word('Fulfill', '완수하다', 6, 'verb',
    ['포기하다', '미완료', '실패하다', '잊다', '소홀히 하다', '방치', '미수행', '포기', '미완', '미달'],
    tips({
      etymology: 'full(가득) + fill(채우다) -> 가득 채우다',
      visual: '완료 체크가 된 할 일 목록',
      soundAlike: '풀필 = 풀필먼트(달성)',
      context: 'She fulfilled her promise.',
      synonymAntonym: '동의어: achieve, complete, 반의어: neglect',
    }),
    {
      definition: 'To achieve or complete something promised or required.',
      wordDistractors: ['achieve', 'complete', 'accomplish'],
      definitionDistractors: [
        'to abandon or give up',
        'to forget or overlook',
        'to fail or fall short',
      ],
      exampleSentences: [
        { en: 'She fulfilled her promise.', ko: '그녀는 약속을 완수했다.' },
        { en: 'He fulfilled all requirements.', ko: '그는 모든 요건을 충족했다.' },
      ],
    }
  ),
  word('Fundamental', '근본적인', 6, 'adjective',
    ['부수적', '표면적', '사소한', '피상적', '부가', '말단', '외관', '부대', '부가적', '세부'],
    tips({
      etymology: 'fund(기초) + -ment + -al -> 기초의',
      visual: '건물의 기초와 지하실',
      soundAlike: '펀더멘탈 = 펀더멘털스(기본)',
      context: 'Freedom is a fundamental right.',
      synonymAntonym: '동의어: basic, essential, 반의어: superficial',
    }),
    {
      definition: 'Forming the base or foundation; essential or central.',
      wordDistractors: ['basic', 'essential', 'primary'],
      definitionDistractors: [
        'minor or trivial',
        'surface or shallow',
        'additional or extra',
      ],
      exampleSentences: [
        { en: 'Freedom is a fundamental right.', ko: '자유는 근본적인 권리이다.' },
        { en: 'Trust is fundamental to relationships.', ko: '신뢰는 관계의 근본이다.' },
      ],
    }
  ),
  word('Generous', '관대한', 6, 'adjective',
    ['인색한', '아까워하는', '짠', '보수적', '검소', '인색', '조숙', '짜릿', '검약', '인색'],
    tips({
      etymology: '라틴어 generosus(고귀한)에서 유래',
      visual: '기부함에 돈을 넣는 손',
      soundAlike: '제너러스 = 제너어시티(관대함)',
      context: 'She is very generous with her time.',
      synonymAntonym: '동의어: giving, liberal, 반의어: stingy',
    }),
    {
      definition: 'Willing to give more than is necessary; liberal in giving.',
      wordDistractors: ['giving', 'liberal', 'charitable'],
      definitionDistractors: [
        'unwilling to share',
        'stingy or miserly',
        'sparing or frugal',
      ],
      exampleSentences: [
        { en: 'She is very generous with her time.', ko: '그녀는 시간을 아낌없이 나눠준다.' },
        { en: 'He made a generous donation.', ko: '그는 관대한 기부를 했다.' },
      ],
    }
  ),
  word('Genetic', '유전적인', 6, 'adjective',
    ['후천적', '획득된', '환경적', '학습된', '비유전', '획득', '외부', '경험적', '비선천', '습득'],
    tips({
      etymology: '그리스어 genesis(생김)에서 유래',
      visual: 'DNA 이중나선 구조',
      soundAlike: '제네틱 = 제네틱스(유전학)',
      context: 'The disease has a genetic component.',
      synonymAntonym: '동의어: hereditary, inherited, 반의어: acquired',
    }),
    {
      definition: 'Relating to genes or heredity; passed from parent to offspring.',
      wordDistractors: ['hereditary', 'inherited', 'biological'],
      definitionDistractors: [
        'learned or gained later',
        'from the environment',
        'acquired through experience',
      ],
      exampleSentences: [
        { en: 'The disease has a genetic component.', ko: '그 질병은 유전적 요인이 있다.' },
        { en: 'Genetic testing revealed the condition.', ko: '유전 검사가 그 상태를 밝혀냈다.' },
      ],
    }
  ),
];
