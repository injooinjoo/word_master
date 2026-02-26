import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch21: VocabItem[] = [
  word('a', '하나의', 1, 'adjective',
    ['두 개의', '여러', '어떤', '이', '그', '모든', '몇', '다른', '전체', '대부분'],
    tips({
      etymology: '고대 영어 an(하나)에서 유래한 부정관사로, 자음 앞에서 a로 축약되었다.',
      visual: '한 개의 빨간 사과를 손가락으로 가리키며 "a apple... 아, an apple!"이라고 말하는 장면.',
      soundAlike: '에이(A)는 알파벳 첫 글자이자, "하나"를 뜻하는 가장 짧은 단어로 기억하자.',
      context: '셀 수 있는 단수 명사 앞에 붙여 "하나의"를 나타내는 가장 기본적인 관사이다.',
      synonymAntonym: '유사 기능: an(모음 앞) / 대조: the(특정한 것을 가리킬 때)',
    }),
    {
      definition: 'used before a singular noun to refer to one unspecified thing or person',
      synonyms: ['one', 'any', 'single'],
      antonyms: ['the', 'every', 'all'],
      exampleSentences: [
        { en: 'She adopted a kitten from the shelter last weekend.', ko: '그녀는 지난 주말에 보호소에서 새끼 고양이 한 마리를 입양했다.' },
        { en: 'Can I have a glass of water, please?', ko: '물 한 잔 주시겠어요?' },
      ],
    }
  ),
  word('abandon', '버리다', 4, 'verb',
    ['포기하다', '떠나다', '유기하다', '그만두다', '미루다', '놓다', '잊다', '제거하다', '취소하다', '중단하다'],
    tips({
      etymology: '고대 프랑스어 abandoner에서 유래, a bandon(자유재량에 맡기다)이라는 표현에서 "포기하다"의 뜻이 생겼다.',
      visual: '폭풍 속에서 침몰하는 배를 선원들이 구명보트를 타고 떠나는 장면을 떠올리자.',
      soundAlike: '"어밴던"은 "어! 밴(ban) 던지다"처럼, 금지하고 내던진다는 느낌으로 기억하자.',
      context: '사람, 장소, 계획 등을 영구적으로 떠나거나 포기할 때 사용하는 강한 표현이다.',
      synonymAntonym: '동의어: desert, forsake / 반의어: keep, retain, maintain',
    }),
    {
      definition: 'to leave someone or something permanently',
      synonyms: ['desert', 'forsake', 'relinquish'],
      antonyms: ['keep', 'retain', 'maintain'],
      exampleSentences: [
        { en: 'The sailors had to abandon the sinking ship immediately.', ko: '선원들은 침몰하는 배를 즉시 버려야 했다.' },
        { en: 'She decided to abandon her plan to study abroad.', ko: '그녀는 유학 계획을 포기하기로 결심했다.' },
      ],
    }
  ),
  word('able', '할 수 있는', 5, 'adjective',
    ['유능한', '가능한', '적격의', '능한', '재능 있는', '잘하는', '뛰어난', '감당할 수 있는', '할 만한', '수 있는'],
    tips({
      etymology: '라틴어 habilis(다루기 쉬운, 적합한)에서 유래, habilitas(능력)와 같은 어근이다.',
      visual: '무거운 바벨을 가뿐히 들어 올리며 "I am able!"이라고 외치는 사람을 떠올리자.',
      soundAlike: '"에이블"은 "에이(A)급 능력(able)"처럼, 최고 등급의 능력을 가진 느낌으로 기억하자.',
      context: 'be able to 형태로 can과 비슷하게 쓰이지만, 미래형이나 완료형에서 더 자주 사용된다.',
      synonymAntonym: '동의어: capable, competent / 반의어: unable, incapable',
    }),
    {
      definition: 'having the skill or means to do something',
      synonyms: ['capable', 'competent', 'qualified'],
      antonyms: ['unable', 'incapable', 'incompetent'],
      exampleSentences: [
        { en: 'She was able to solve the math problem in under a minute.', ko: '그녀는 1분도 안 되어 수학 문제를 풀 수 있었다.' },
        { en: 'He is an able leader who inspires his team every day.', ko: '그는 매일 팀원들에게 영감을 주는 유능한 리더이다.' },
      ],
    }
  ),
  word('aboard', '(배·비행기에) 탑승하여', 6, 'preposition',
    ['~위에', '~안에', '~를 타고', '~에 올라', '~로', '~을 따라', '~쪽으로', '~까지', '~에서 내려', '~밖에'],
    tips({
      etymology: 'a(~위에) + board(판자, 갑판)가 결합, 배의 갑판 위에 올라탄다는 뜻에서 유래했다.',
      visual: '비행기 탑승구에서 승무원이 "Welcome aboard!"라고 인사하는 장면을 떠올리자.',
      soundAlike: '"어보드"는 "어! 보드(board) 위에!"처럼, 탈것의 보드(갑판) 위에 올라간다고 기억하자.',
      context: '배, 비행기, 기차 등 탈것에 탑승한 상태를 나타낼 때 사용하는 전치사/부사이다.',
      synonymAntonym: '동의어: on board / 반의어: ashore(육지에), off(내려서)',
    }),
    {
      definition: 'on or into a ship, aircraft, train, or other vehicle',
      synonyms: ['on board', 'on', 'inside'],
      antonyms: ['ashore', 'off', 'outside'],
      exampleSentences: [
        { en: 'All passengers must be aboard the train before departure.', ko: '출발 전에 모든 승객이 기차에 탑승해야 한다.' },
        { en: 'Welcome aboard! Please find your seat and fasten your seatbelt.', ko: '탑승을 환영합니다! 자리를 찾아 안전벨트를 매 주세요.' },
      ],
    }
  ),
  word('abort', '중단하다', 8, 'verb',
    ['포기하다', '그만두다', '취소하다', '중지하다', '멈추다', '끊다', '방치하다', '연기하다', '철회하다', '되돌리다'],
    tips({
      etymology: '라틴어 abortus(유산하다)에서 유래, ab(떨어져) + oriri(일어나다)의 결합이다.',
      visual: '로켓 발사 카운트다운 중 경고등이 켜지며 "Abort mission!"을 외치는 장면을 떠올리자.',
      soundAlike: '"어보트"는 "어! 보트(boat)를 멈춰!"처럼, 급히 중단시키는 느낌으로 기억하자.',
      context: '컴퓨터 프로그램 실행 중단, 군사 작전 취소, 의학적 유산 등 완료 전 중단할 때 쓴다.',
      synonymAntonym: '동의어: cancel, terminate, halt / 반의어: continue, proceed, complete',
    }),
    {
      definition: 'to end a pregnancy or process before completion',
      synonyms: ['cancel', 'terminate', 'halt'],
      antonyms: ['continue', 'proceed', 'complete'],
      exampleSentences: [
        { en: 'NASA decided to abort the rocket launch due to bad weather.', ko: 'NASA는 악천후로 인해 로켓 발사를 중단하기로 결정했다.' },
        { en: 'The pilot had to abort the landing and circle back around.', ko: '조종사는 착륙을 중단하고 다시 선회해야 했다.' },
      ],
    }
  ),
  word('about', '-에', 2, 'preposition',
    ['~에 대해', '~에 관하여', '~에 대하여', '~에 대한', '~로', '~에서', '~까지', '~을 위하여', '~을 둘러싸고', '~근처에'],
    tips({
      etymology: '고대 영어 abutan(~의 바깥에)에서 유래, a(~위에) + butan(바깥)의 결합이다.',
      visual: '어떤 주제를 중심에 놓고 그 주위를 빙빙 돌며 이야기하는 모습을 떠올리자.',
      soundAlike: '"어바웃"은 한국어 외래어 "어바웃(대략)"으로 이미 익숙한 발음이다.',
      context: '~에 대해(regarding), 약(approximately), ~주위에(around) 등 다양한 의미로 쓰인다.',
      synonymAntonym: '동의어: regarding, concerning, approximately / 반의어: exactly(정확히)',
    }),
    {
      definition: 'on the subject of; concerning; approximately',
      synonyms: ['regarding', 'concerning', 'approximately'],
      antonyms: ['exactly', 'precisely', 'specifically'],
      exampleSentences: [
        { en: 'The book is about a young wizard who discovers his powers.', ko: '그 책은 자신의 능력을 발견하는 젊은 마법사에 관한 이야기이다.' },
        { en: 'There were about fifty people at the concert last night.', ko: '어젯밤 콘서트에 약 50명의 사람들이 있었다.' },
      ],
    }
  ),
  word('abroad', '해외에', 7, 'adverb',
    ['국외에', '밖에', '멀리', '떨어져', '다른 나라에', '외국에', '바깥에', '나가서', '밖으로', '먼 곳에'],
    tips({
      etymology: 'a(~에) + broad(넓은)의 결합으로, "넓은 바깥 세상에"라는 뜻에서 해외를 의미하게 되었다.',
      visual: '여권과 비행기 티켓을 들고 공항 출발 게이트를 통과하는 여행자를 떠올리자.',
      soundAlike: '"어브로드"에서 broad(넓은)가 들리므로, 넓은 세상 밖으로 나간다고 기억하자.',
      context: 'go abroad(해외에 가다), study abroad(유학하다), live abroad(해외 거주하다) 등으로 자주 쓴다.',
      synonymAntonym: '동의어: overseas, internationally / 반의어: domestically(국내에서), at home',
    }),
    {
      definition: 'in or to a foreign country or countries',
      synonyms: ['overseas', 'internationally', 'away'],
      antonyms: ['domestically', 'locally', 'at home'],
      exampleSentences: [
        { en: 'She plans to study abroad in France next year.', ko: '그녀는 내년에 프랑스로 유학 갈 계획이다.' },
        { en: 'Many Korean companies are expanding their business abroad.', ko: '많은 한국 기업들이 해외로 사업을 확장하고 있다.' },
      ],
    }
  ),
  word('absent', '부재의', 4, 'adjective',
    ['없는', '결석한', '빠진', '공석의', '없어진', '사라진', '비어 있는', '부족한', '누락된', '결여된'],
    tips({
      etymology: '라틴어 absens에서 유래, ab(떨어져) + esse(있다)의 결합으로 "떨어져 있는" 뜻이다.',
      visual: '교실에서 선생님이 출석을 부르는데 빈 자리가 눈에 띄는 장면을 떠올리자.',
      soundAlike: '"앱센트"는 "없는 센트(cent)"처럼, 지갑에 동전이 없는(absent) 상태로 기억하자.',
      context: 'be absent from school(결석하다), absent-minded(멍한, 방심한) 등의 표현으로 자주 쓴다.',
      synonymAntonym: '동의어: missing, away, gone / 반의어: present(출석한, 있는)',
    }),
    {
      definition: 'not present; missing',
      synonyms: ['missing', 'away', 'gone'],
      antonyms: ['present', 'attending', 'here'],
      exampleSentences: [
        { en: 'Three students were absent from class due to the flu.', ko: '독감으로 인해 세 명의 학생이 수업에 결석했다.' },
        { en: 'He had an absent look on his face during the meeting.', ko: '그는 회의 중에 멍한 표정을 짓고 있었다.' },
      ],
    }
  ),
  word('absolute', '절대적인', 5, 'adjective',
    ['완전한', '순수한', '전적인', '무조건적인', '확실한', '총괄적인', '극단적인', '무제한의', '완벽한', '순수한'],
    tips({
      etymology: '라틴어 absolutus에서 유래, ab(떨어져) + solvere(풀다)의 결합으로 "제약에서 풀려난" 뜻이다.',
      visual: '왕이 왕좌에 앉아 어떤 반론도 없이 명령을 내리는 절대 권력의 장면을 떠올리자.',
      soundAlike: '"앱솔루트"는 보드카 브랜드 Absolut으로 익숙한 발음, 순수하고 완전한 이미지를 연상하자.',
      context: 'absolute power(절대 권력), absolute truth(절대 진리) 등 타협 없는 완전함을 표현할 때 쓴다.',
      synonymAntonym: '동의어: complete, total, utter / 반의어: relative(상대적인), partial(부분적인)',
    }),
    {
      definition: 'total and complete; not limited',
      synonyms: ['complete', 'total', 'utter'],
      antonyms: ['relative', 'partial', 'limited'],
      exampleSentences: [
        { en: 'The experiment requires absolute silence in the laboratory.', ko: '그 실험은 연구실에서 절대적인 정숙을 요구한다.' },
        { en: 'I have absolute confidence in her ability to lead the team.', ko: '나는 그녀의 팀 리더십 능력에 절대적인 신뢰를 가지고 있다.' },
      ],
    }
  ),
  word('absurd', '불합리한', 9, 'adjective',
    ['터무니없는', '말도 안 되는', '어리석은', '비논리적인', '부조리한', '이상한', '괴상한', '우스운', '허무한', '무의미한'],
    tips({
      etymology: '라틴어 absurdus에서 유래, ab(떨어져) + surdus(듣기 어려운, 어리석은)의 결합이다.',
      visual: '물고기가 자전거를 타고 출근하는 황당한 그림을 떠올리자 - 이것이 absurd이다.',
      soundAlike: '"앱서드"는 "앱(app)이 서드(third)파티"에서 오작동하는 황당한 상황으로 기억하자.',
      context: '논리적으로 말이 안 되는 상황이나 주장을 비판할 때 쓰는 강한 표현이다.',
      synonymAntonym: '동의어: ridiculous, ludicrous, preposterous / 반의어: reasonable, logical, sensible',
    }),
    {
      definition: 'wildly unreasonable or illogical',
      synonyms: ['ridiculous', 'ludicrous', 'preposterous'],
      antonyms: ['reasonable', 'logical', 'sensible'],
      exampleSentences: [
        { en: 'It would be absurd to go swimming in this freezing weather.', ko: '이 혹한에 수영하러 가겠다는 것은 터무니없는 일이다.' },
        { en: 'The idea that the earth is flat is completely absurd.', ko: '지구가 평평하다는 생각은 완전히 불합리하다.' },
      ],
    }
  ),
  word('abundant', '풍부한', 6, 'adjective',
    ['풍족한', '넉넉한', '많은', '풍성한', '가득한', '충분한', '넓은', '다양한', '풍요로운', '충만한'],
    tips({
      etymology: '라틴어 abundans에서 유래, ab(떨어져) + undare(넘치다, unda=파도)의 결합으로 "넘쳐흐르는" 뜻이다.',
      visual: '추수 시즌에 과일과 곡식이 바구니에서 넘쳐흐르는 풍요로운 장면을 떠올리자.',
      soundAlike: '"어번던트"에서 "번(burn) 던(dunt)"처럼 불타오를 만큼 넘쳐나는 느낌으로 기억하자.',
      context: '자원, 기회, 자연물 등이 풍부하게 존재할 때 사용하는 격식체 표현이다.',
      synonymAntonym: '동의어: plentiful, ample, copious / 반의어: scarce(부족한), rare(희귀한)',
    }),
    {
      definition: 'existing in large quantities',
      synonyms: ['plentiful', 'ample', 'copious'],
      antonyms: ['scarce', 'rare', 'insufficient'],
      exampleSentences: [
        { en: 'The region is known for its abundant natural resources.', ko: '그 지역은 풍부한 천연자원으로 유명하다.' },
        { en: 'There was abundant evidence to support the scientist\'s theory.', ko: '그 과학자의 이론을 뒷받침하는 풍부한 증거가 있었다.' },
      ],
    }
  ),
  word('abuse', '남용', 6, 'noun',
    ['오용', '학대', '착취', '과용', '혹사', '착복', '횡령', '부당 사용', '악용', '과다 사용'],
    tips({
      etymology: '라틴어 abusus에서 유래, ab(떨어져, 잘못) + uti(사용하다)의 결합으로 "잘못 사용하다" 뜻이다.',
      visual: '약병의 약을 한 줌씩 과다 복용하는 위험한 장면을 떠올리자 - 이것이 약물 남용(drug abuse)이다.',
      soundAlike: '"어뷰즈"는 한국어 "어뷰징(abusing)"으로 게임이나 시스템을 부당하게 이용하는 것으로 익숙하다.',
      context: 'drug abuse(약물 남용), child abuse(아동 학대), abuse of power(권력 남용) 등으로 쓴다.',
      synonymAntonym: '동의어: misuse, mistreatment, exploitation / 반의어: care, protection, proper use',
    }),
    {
      definition: 'wrong or excessive use of something; misuse',
      synonyms: ['misuse', 'mistreatment', 'exploitation'],
      antonyms: ['care', 'protection', 'respect'],
      exampleSentences: [
        { en: 'The abuse of power by government officials led to widespread protests.', ko: '공무원들의 권력 남용이 대규모 시위를 초래했다.' },
        { en: 'Laws against animal abuse have become stricter in recent years.', ko: '동물 학대에 대한 법률이 최근 몇 년간 더욱 엄격해졌다.' },
      ],
    }
  ),
  word('academy', '학술원', 3, 'noun',
    ['대학', '연구소', '학원', '교육기관', '협회', '학회', '연구원', '아카데미', '기관', '단체'],
    tips({
      etymology: '그리스어 Akademeia에서 유래, 플라톤이 아테네에서 가르쳤던 학원 이름이 어원이다.',
      visual: 'Academy Awards(아카데미 시상식)에서 금빛 오스카 트로피를 받는 장면을 떠올리자.',
      soundAlike: '"아카데미"는 한국어에서도 학원이나 교육기관을 뜻하는 외래어로 이미 익숙한 발음이다.',
      context: 'academy of arts(예술원), military academy(사관학교), Academy Award(아카데미상) 등으로 쓴다.',
      synonymAntonym: '동의어: institute, school, institution / 반의어: (직접적 반의어 없음)',
    }),
    {
      definition: 'an institution for the study of arts, sciences, or a particular field',
      synonyms: ['institute', 'school', 'institution'],
      antonyms: [],
      exampleSentences: [
        { en: 'He graduated from the police academy with top honors.', ko: '그는 경찰학교를 수석으로 졸업했다.' },
        { en: 'The Royal Academy of Sciences announced the Nobel Prize winners.', ko: '왕립과학원이 노벨상 수상자를 발표했다.' },
      ],
    }
  ),
  word('accelerate', '가속하다', 4, 'verb',
    ['감속하다', '늦추다', '촉진하다', '재촉하다', '빨리 하다', '서두르다', '추진하다', '진전시키다', '돌진하다', '질주하다'],
    tips({
      etymology: '라틴어 accelerare에서 유래, ad(~쪽으로) + celer(빠른)의 결합으로 "더 빠르게 하다" 뜻이다.',
      visual: '스포츠카가 고속도로 진입로에서 엔진 소리를 내며 속도를 높이는 장면을 떠올리자.',
      soundAlike: '"액셀러레이트"에서 "액셀(accelerator, 가속페달)"이 들리므로 자동차 가속을 연상하자.',
      context: '물리적 속도뿐 아니라 경제 성장, 과정 진행 등이 빨라질 때도 비유적으로 사용한다.',
      synonymAntonym: '동의어: speed up, hasten, quicken / 반의어: decelerate(감속하다), slow down',
    }),
    {
      definition: 'to increase in speed',
      synonyms: ['speed up', 'hasten', 'quicken'],
      antonyms: ['decelerate', 'slow down', 'brake'],
      exampleSentences: [
        { en: 'The car accelerated quickly as it merged onto the highway.', ko: '차는 고속도로에 합류하면서 빠르게 가속했다.' },
        { en: 'The government plans to accelerate economic growth through new policies.', ko: '정부는 새로운 정책을 통해 경제 성장을 가속화할 계획이다.' },
      ],
    }
  ),
  word('accent', '억양', 1, 'noun',
    ['발음', '강세', '사투리', '목소리', '톤', '리듬', '강조', '방언', '말투', '어조'],
    tips({
      etymology: '라틴어 accentus에서 유래, ad(~쪽으로) + cantus(노래)의 결합으로 "노래하듯 강조하다" 뜻이다.',
      visual: '영국인과 미국인이 같은 영어를 전혀 다른 발음으로 말하는 장면을 떠올리자.',
      soundAlike: '"악센트"는 한국어에서도 "악센트를 주다"라는 표현으로 이미 익숙한 외래어이다.',
      context: '발음 방식(British accent), 강세(accent on the first syllable), 장식적 강조 등을 나타낸다.',
      synonymAntonym: '동의어: pronunciation, inflection, tone / 반의어: monotone(단조로운 톤)',
    }),
    {
      definition: 'a way of pronouncing words; stress or emphasis in speech',
      synonyms: ['pronunciation', 'inflection', 'tone'],
      antonyms: ['monotone'],
      exampleSentences: [
        { en: 'She speaks English with a slight French accent.', ko: '그녀는 약간의 프랑스식 억양으로 영어를 말한다.' },
        { en: 'The accent falls on the second syllable of the word "begin".', ko: '"begin"이라는 단어에서 강세는 두 번째 음절에 온다.' },
      ],
    }
  ),
  word('access', '접근', 5, 'noun',
    ['출입', '이용', '접속', '진입', '통로', '경로', '권한', '접촉', '도달', '가능'],
    tips({
      etymology: '라틴어 accessus에서 유래, ad(~쪽으로) + cedere(가다)의 결합으로 "다가감" 뜻이다.',
      visual: '보안 카드를 찍고 잠긴 문이 열리며 건물에 들어가는 장면을 떠올리자.',
      soundAlike: '"액세스"는 IT에서 "액세스 권한", "데이터 액세스" 등으로 이미 익숙한 외래어이다.',
      context: 'internet access(인터넷 접속), access to education(교육 접근성) 등으로 폭넓게 쓴다.',
      synonymAntonym: '동의어: entry, admission, approach / 반의어: denial, restriction, barrier',
    }),
    {
      definition: 'the right or way to reach, use, or approach something',
      synonyms: ['entry', 'admission', 'approach'],
      antonyms: ['denial', 'restriction', 'barrier'],
      exampleSentences: [
        { en: 'Students have free access to the university library.', ko: '학생들은 대학 도서관에 자유롭게 접근할 수 있다.' },
        { en: 'The building has wheelchair access on the ground floor.', ko: '그 건물은 1층에 휠체어 접근 통로가 있다.' },
      ],
    }
  ),
  word('accident', '사고', 2, 'noun',
    ['충돌', '재해', '참사', '사건', '불의의 사고', '돌발', '우연', '변고', '재난', '불운'],
    tips({
      etymology: '라틴어 accidens에서 유래, ad(~쪽으로) + cadere(떨어지다)의 결합으로 "뜻밖에 일어난 일" 뜻이다.',
      visual: '교차로에서 두 대의 차가 충돌하고 경찰차와 구급차가 출동하는 장면을 떠올리자.',
      soundAlike: '"액시던트"는 한국어에서도 "액시던트가 났다"라고 쓰는 익숙한 외래어이다.',
      context: 'car accident(교통사고), by accident(우연히), industrial accident(산업재해) 등으로 쓴다.',
      synonymAntonym: '동의어: crash, mishap, collision / 반의어: intention(의도), plan(계획)',
    }),
    {
      definition: 'an unexpected and harmful event; a crash or mishap',
      synonyms: ['crash', 'mishap', 'collision'],
      antonyms: ['intention', 'plan', 'design'],
      exampleSentences: [
        { en: 'There was a serious car accident on the highway this morning.', ko: '오늘 아침 고속도로에서 심각한 교통사고가 있었다.' },
        { en: 'I found this old photo by accident while cleaning my room.', ko: '방 청소를 하다가 우연히 이 오래된 사진을 발견했다.' },
      ],
    }
  ),
  word('accommodate', '수용하다', 6, 'verb',
    ['받아들이다', '숙박시키다', '맞추다', '적응하다', '배려하다', '들어가게 하다', '채우다', '조정하다', '포용하다', '수용력'],
    tips({
      etymology: '라틴어 accommodare에서 유래, ad(~에) + commodus(적합한)의 결합으로 "적합하게 맞추다" 뜻이다.',
      visual: '호텔 직원이 손님의 요청에 맞춰 방을 준비하고 짐을 들어주는 장면을 떠올리자.',
      soundAlike: '"어코모데이트"에서 "코모(commo, 편안한)"가 들리므로, 편안하게 수용해 준다고 기억하자.',
      context: '숙박 제공, 요구 수용, 환경 적응 등 다양한 맥락에서 "맞춰 주다"라는 의미로 쓴다.',
      synonymAntonym: '동의어: house, lodge, adapt / 반의어: reject(거절하다), inconvenience(불편을 끼치다)',
    }),
    {
      definition: 'to provide room or fit for; to adapt to',
      synonyms: ['house', 'lodge', 'adapt'],
      antonyms: ['reject', 'inconvenience', 'refuse'],
      exampleSentences: [
        { en: 'The hotel can accommodate up to 500 guests at a time.', ko: '그 호텔은 한 번에 최대 500명의 손님을 수용할 수 있다.' },
        { en: 'We need to accommodate the new employee\'s schedule.', ko: '우리는 신입 직원의 스케줄에 맞춰야 한다.' },
      ],
    }
  ),
  word('accompany', '동반하다', 7, 'verb',
    ['따라가다', '함께하다', '동행하다', '배반주하다', '수반하다', '따르다', '따라오다', '같이 가다', '에스코트하다', '동료로 가다'],
    tips({
      etymology: '고대 프랑스어 acompagner에서 유래, a(~와) + compagne(동료, 빵을 함께 나누는 사람)의 결합이다.',
      visual: '피아니스트가 바이올린 연주자 옆에서 반주를 하며 함께 연주하는 장면을 떠올리자.',
      soundAlike: '"어컴퍼니"에서 "컴퍼니(company, 동행)"가 들리므로, 함께하는 것으로 기억하자.',
      context: '사람과 동행하거나, 음악에서 반주하거나, 어떤 현상이 수반될 때 사용한다.',
      synonymAntonym: '동의어: escort, go with, attend / 반의어: leave, abandon, desert',
    }),
    {
      definition: 'to go or be with someone; to play music along with',
      synonyms: ['escort', 'go with', 'attend'],
      antonyms: ['leave', 'abandon', 'desert'],
      exampleSentences: [
        { en: 'Children under 12 must be accompanied by an adult.', ko: '12세 미만 어린이는 반드시 성인이 동반해야 한다.' },
        { en: 'She accompanied the singer on the piano at the concert.', ko: '그녀는 콘서트에서 가수의 피아노 반주를 맡았다.' },
      ],
    }
  ),
  word('accomplish', '이루다', 4, 'verb',
    ['달성하다', '완수하다', '성취하다', '해내다', '완성하다', '실현하다', '이행하다', '수행하다', '끝내다', '달성하다'],
    tips({
      etymology: '라틴어 accomplere에서 유래, ad(~까지) + complere(채우다, 완성하다)의 결합이다.',
      visual: '마라톤 결승선을 통과하며 두 팔을 벌리고 환호하는 성취의 장면을 떠올리자.',
      soundAlike: '"어컴플리시"에서 "컴플리트(complete, 완성)"가 들리므로, 무언가를 완수하는 것으로 기억하자.',
      context: '목표, 임무, 과제 등을 성공적으로 달성했을 때 사용하는 격식 있는 표현이다.',
      synonymAntonym: '동의어: achieve, fulfill, complete / 반의어: fail(실패하다), abandon(포기하다)',
    }),
    {
      definition: 'to succeed in doing or completing something',
      synonyms: ['achieve', 'fulfill', 'complete'],
      antonyms: ['fail', 'abandon', 'forfeit'],
      exampleSentences: [
        { en: 'She accomplished her goal of running a full marathon.', ko: '그녀는 풀 마라톤을 완주하겠다는 목표를 달성했다.' },
        { en: 'The team accomplished the project ahead of schedule.', ko: '팀은 일정보다 앞서 프로젝트를 완수했다.' },
      ],
    }
  ),
  word('accord', '일치', 10, 'noun',
    ['합의', '동의', '협정', '조화', '협약', '약속', '합의서', '동의서', '합치', '일치감'],
    tips({
      etymology: '라틴어 accordare에서 유래, ad(~쪽으로) + cor/cordis(마음)의 결합으로 "마음이 하나로 모이다" 뜻이다.',
      visual: '두 나라의 대표가 평화 협정서에 서명하며 악수하는 장면을 떠올리자.',
      soundAlike: '"어코드"는 Honda Accord(자동차 이름)로 익숙하며, 조화로운 주행감을 연상하자.',
      context: 'in accord with(~와 일치하여), of one\'s own accord(자발적으로), peace accord(평화 협정) 등으로 쓴다.',
      synonymAntonym: '동의어: agreement, harmony, treaty / 반의어: discord(불화), conflict(갈등)',
    }),
    {
      definition: 'agreement or harmony between people or things',
      synonyms: ['agreement', 'harmony', 'treaty'],
      antonyms: ['discord', 'conflict', 'disagreement'],
      exampleSentences: [
        { en: 'The two countries signed a peace accord after years of conflict.', ko: '두 나라는 수년간의 갈등 끝에 평화 협정에 서명했다.' },
        { en: 'He left the company of his own accord, not because he was fired.', ko: '그는 해고당한 것이 아니라 자발적으로 회사를 떠났다.' },
      ],
    }
  ),
  word('account', '계좌', 5, 'noun',
    ['통장', '잔액', '장부', '계정', '설명', '보고', '이야기', '기록', '거래', '대변'],
    tips({
      etymology: '라틴어 computare(계산하다)에서 유래, ad(~에) + computare(세다)의 결합이다.',
      visual: '은행 창구에서 통장을 내밀고 잔액을 확인하는 장면을 떠올리자.',
      soundAlike: '"어카운트"는 IT에서 "계정(account)"으로, 은행에서는 "계좌"로 이미 익숙한 외래어이다.',
      context: 'bank account(은행 계좌), account for(설명하다), on account of(~때문에) 등 다의어이다.',
      synonymAntonym: '동의어: (금융) deposit, balance / (설명) explanation, report / 반의어: -',
    }),
    {
      definition: 'a record of money held at a bank; a customer arrangement with a financial institution',
      synonyms: ['deposit', 'balance', 'ledger'],
      antonyms: [],
      exampleSentences: [
        { en: 'I opened a savings account at the bank near my office.', ko: '나는 사무실 근처 은행에 저축 계좌를 개설했다.' },
        { en: 'Please transfer the payment to my account by Friday.', ko: '금요일까지 내 계좌로 결제 금액을 송금해 주세요.' },
      ],
    }
  ),
  word('accumulate', '축적하다', 8, 'verb',
    ['모으다', '쌓다', '불리다', '증가하다', '모이다', '저장하다', '비축하다', '모아두다', '늘리다', '축척하다'],
    tips({
      etymology: '라틴어 accumulare에서 유래, ad(~에) + cumulare(쌓다, cumulus=더미)의 결합이다.',
      visual: '저금통에 매일 동전을 하나씩 넣어 점점 가득 차가는 장면을 떠올리자.',
      soundAlike: '"어큐뮬레이트"에서 "큐뮬(cumul, 쌓다)"이 들리므로, 구름(cumulus)처럼 쌓인다고 기억하자.',
      context: '부(wealth), 지식(knowledge), 먼지(dust), 빚(debt) 등이 시간에 걸쳐 쌓일 때 사용한다.',
      synonymAntonym: '동의어: gather, amass, collect / 반의어: disperse(흩뜨리다), spend(소비하다)',
    }),
    {
      definition: 'to gather or build up over time',
      synonyms: ['gather', 'amass', 'collect'],
      antonyms: ['disperse', 'spend', 'distribute'],
      exampleSentences: [
        { en: 'She accumulated a large collection of rare books over the years.', ko: '그녀는 수년에 걸쳐 희귀 서적을 대량으로 모았다.' },
        { en: 'Dust tends to accumulate quickly on bookshelves.', ko: '먼지는 책장에 빠르게 쌓이는 경향이 있다.' },
      ],
    }
  ),
  word('accuse', '고발하다', 6, 'verb',
    ['고소하다', '비난하다', '탄핵하다', '신고하다', '지적하다', '몰다', '탓하다', '제소하다', '혐의제기하다', '고하다'],
    tips({
      etymology: '라틴어 accusare에서 유래, ad(~에 대해) + causa(원인, 소송)의 결합으로 "소송을 걸다" 뜻이다.',
      visual: '법정에서 검사가 피고인을 손가락으로 가리키며 범행을 지목하는 장면을 떠올리자.',
      soundAlike: '"어큐즈"에서 "큐즈(cuse, cause=이유)"가 들리므로, 이유를 대며 비난한다고 기억하자.',
      context: 'accuse someone of ~(~의 혐의로 고발하다) 형태로 자주 쓰며, be accused of도 흔하다.',
      synonymAntonym: '동의어: charge, blame, indict / 반의어: defend(변호하다), acquit(무죄 선고하다)',
    }),
    {
      definition: 'to charge someone with wrongdoing',
      synonyms: ['charge', 'blame', 'indict'],
      antonyms: ['defend', 'acquit', 'exonerate'],
      exampleSentences: [
        { en: 'The prosecutor accused the suspect of committing fraud.', ko: '검사는 용의자를 사기 혐의로 고발했다.' },
        { en: 'She was wrongly accused of stealing money from the company.', ko: '그녀는 회사 돈을 훔쳤다는 누명을 썼다.' },
      ],
    }
  ),
  word('acid', '산', 7, 'noun',
    ['염기', '화학물질', '용액', '산성', '비료', '독극물', '알칼리', '화합물', '물질', '성분'],
    tips({
      etymology: '라틴어 acidus(시큼한)에서 유래, acere(시다)에서 파생된 단어이다.',
      visual: '레몬을 반으로 잘라 즙을 짜면 신맛이 나는 것처럼, 산(acid)은 신맛의 화학물질이다.',
      soundAlike: '"애시드"는 "acid rain(산성비)", "acid test(시금석, 엄격한 시험)" 등으로 익숙한 발음이다.',
      context: '화학에서 pH 7 미만의 물질을 가리키며, 비유적으로 "신랄한(acid remark)" 의미로도 쓴다.',
      synonymAntonym: '동의어: (화학) corrosive / 반의어: base(염기), alkali(알칼리)',
    }),
    {
      definition: 'a chemical substance that tastes sour and can react with bases',
      synonyms: ['corrosive', 'solvent'],
      antonyms: ['base', 'alkali'],
      exampleSentences: [
        { en: 'Citric acid is found naturally in lemons and oranges.', ko: '구연산은 레몬과 오렌지에 자연적으로 존재한다.' },
        { en: 'The acid rain damaged the marble statues in the park.', ko: '산성비가 공원의 대리석 조각상을 손상시켰다.' },
      ],
    }
  ),
  word('acquaint', '알리다', 9, 'verb',
    ['소개하다', '알려주다', '가르치다', '전달하다', '통보하다', '안내하다', '설명하다', '공지하다', '교육하다', '말하다'],
    tips({
      etymology: '라틴어 accognitare에서 유래, ad(~에) + cognoscere(알다)의 결합으로 "알게 하다" 뜻이다.',
      visual: '신입사원에게 사무실 구석구석을 안내하며 회사 문화를 알려주는 장면을 떠올리자.',
      soundAlike: '"어퀘인트"에서 "퀘인트(quaint, 낯선)"가 들리므로, 낯선 것을 알게 해 준다고 기억하자.',
      context: 'acquaint oneself with(~에 익숙해지다), be acquainted with(~와 아는 사이이다)로 자주 쓴다.',
      synonymAntonym: '동의어: familiarize, inform, introduce / 반의어: conceal(숨기다), estrange(소원하게 하다)',
    }),
    {
      definition: 'to make someone aware of or familiar with',
      synonyms: ['familiarize', 'inform', 'introduce'],
      antonyms: ['conceal', 'estrange', 'hide'],
      exampleSentences: [
        { en: 'Please acquaint yourself with the safety procedures before starting work.', ko: '업무를 시작하기 전에 안전 절차를 숙지해 주세요.' },
        { en: 'I am not personally acquainted with the new director.', ko: '나는 새 이사와 개인적으로 아는 사이가 아니다.' },
      ],
    }
  ),
  word('acquisition', '획득', 10, 'noun',
    ['취득', '수집', '매입', '인수', '습득', '소유', '편입', '도입', '취득물', '수득'],
    tips({
      etymology: '라틴어 acquisitio에서 유래, ad(~쪽으로) + quaerere(찾다, 구하다)의 결합이다.',
      visual: '대기업이 작은 스타트업을 인수합병(M&A)하여 큰 그림을 완성하는 장면을 떠올리자.',
      soundAlike: '"어퀴지션"에서 "퀴즈(quiz, 구하다)"와 비슷한 음이 들리므로, 답을 구해 획득하는 것으로 기억하자.',
      context: '비즈니스 인수(corporate acquisition), 언어 습득(language acquisition) 등으로 쓴다.',
      synonymAntonym: '동의어: purchase, procurement, obtainment / 반의어: loss(상실), sale(매각)',
    }),
    {
      definition: 'the act of obtaining or gaining something',
      synonyms: ['purchase', 'procurement', 'obtainment'],
      antonyms: ['loss', 'sale', 'disposal'],
      exampleSentences: [
        { en: 'The company announced the acquisition of a smaller tech firm.', ko: '그 회사는 소규모 IT 기업 인수를 발표했다.' },
        { en: 'Language acquisition is faster for children than for adults.', ko: '언어 습득은 성인보다 어린이가 더 빠르다.' },
      ],
    }
  ),
  word('act', '행동하다', 3, 'verb',
    ['하다', '저지르다', '연기하다', '움직이다', '대하다', '처하다', '나타내다', '역할을 하다', '행위하다', '움직이다'],
    tips({
      etymology: '라틴어 actus(행동)에서 유래, agere(하다, 움직이다)의 과거분사형이다.',
      visual: '무대 위에서 배우가 셰익스피어 연극의 한 장면을 열연하는 모습을 떠올리자.',
      soundAlike: '"액트"는 연기(act)를 뜻하는 외래어로 이미 익숙한 발음이다.',
      context: '행동하다(act quickly), 연기하다(act in a movie), 법률(the Clean Air Act) 등 다의어이다.',
      synonymAntonym: '동의어: perform, behave, do / 반의어: refrain(자제하다), abstain(삼가다)',
    }),
    {
      definition: 'to do something; to behave in a certain way',
      synonyms: ['perform', 'behave', 'do'],
      antonyms: ['refrain', 'abstain', 'hesitate'],
      exampleSentences: [
        { en: 'We must act quickly before the situation gets worse.', ko: '상황이 악화되기 전에 빨리 행동해야 한다.' },
        { en: 'She acted in several Hollywood movies before retiring.', ko: '그녀는 은퇴하기 전에 여러 할리우드 영화에 출연했다.' },
      ],
    }
  ),
  word('activate', '활성화하다', 4, 'verb',
    ['켜다', '가동하다', '작동시키다', '발동하다', '기동하다', '트리거하다', '시작하다', '유발하다', '촉진하다', '가동시키다'],
    tips({
      etymology: '라틴어 activus(활동적인)에서 유래, act(행동) + -ivate(~하게 만들다)의 구조이다.',
      visual: '스마트폰의 전원 버튼을 눌러 화면이 밝아지는 순간을 떠올리자 - 이것이 activate이다.',
      soundAlike: '"액티베이트"에서 "액티브(active, 활동적인)"가 들리므로, 활동 상태로 만드는 것으로 기억하자.',
      context: 'activate a card(카드 활성화), activate an alarm(경보 작동), activate a feature(기능 켜기) 등으로 쓴다.',
      synonymAntonym: '동의어: enable, trigger, turn on / 반의어: deactivate(비활성화하다), disable(끄다)',
    }),
    {
      definition: 'to make something active or operative',
      synonyms: ['enable', 'trigger', 'turn on'],
      antonyms: ['deactivate', 'disable', 'turn off'],
      exampleSentences: [
        { en: 'You need to activate your new credit card before using it.', ko: '새 신용카드를 사용하기 전에 활성화해야 한다.' },
        { en: 'The motion sensor activates the lights when someone enters the room.', ko: '동작 센서가 누군가 방에 들어오면 조명을 작동시킨다.' },
      ],
    }
  ),
  word('actual', '실제의', 5, 'adjective',
    ['진짜', '현실의', '사실상의', '실질적인', '구체적인', '실물의', '실지의', '실체의', '진정한', '리얼한'],
    tips({
      etymology: '라틴어 actualis에서 유래, actus(행동, 사실) + -alis(~의)의 결합으로 "사실에 근거한" 뜻이다.',
      visual: '꿈속 장면과 현실 장면을 나란히 놓고 "이것이 actual(실제)이다"라고 가리키는 모습을 떠올리자.',
      soundAlike: '"액추얼"은 "actually(사실은)"의 어근으로, 일상 대화에서 매우 자주 듣는 발음이다.',
      context: '주의: 한국어 "액추얼(현재의)"과 달리 영어에서는 "실제의, 진짜의"라는 뜻으로 쓴다(false friend).',
      synonymAntonym: '동의어: real, genuine, true / 반의어: imaginary(상상의), theoretical(이론적인)',
    }),
    {
      definition: 'existing in fact; real',
      synonyms: ['real', 'genuine', 'true'],
      antonyms: ['imaginary', 'theoretical', 'fictitious'],
      exampleSentences: [
        { en: 'The actual cost was much higher than the estimate.', ko: '실제 비용은 견적보다 훨씬 높았다.' },
        { en: 'What were his actual words? I want to know exactly what he said.', ko: '그의 실제 말이 뭐였어? 그가 정확히 뭐라고 했는지 알고 싶어.' },
      ],
    }
  ),
  word('acute', '날카로운', 6, 'adjective',
    ['예리한', '심한', '급성의', '뾰족한', '예민한', '격렬한', '첨예한', '민감한', '극심한', '날카롭다'],
    tips({
      etymology: '라틴어 acutus(날카로운)에서 유래, acuere(날카롭게 하다)의 과거분사형이다.',
      visual: '수학 시간에 배운 예각(acute angle)처럼 뾰족하게 날카로운 삼각형 꼭짓점을 떠올리자.',
      soundAlike: '"어큐트"는 "큐트(cute, 귀여운)"와 발음이 비슷하지만, a가 붙으면 "날카로운"으로 완전히 다른 뜻이다.',
      context: 'acute pain(심한 통증), acute angle(예각), acute observation(예리한 관찰) 등으로 쓴다.',
      synonymAntonym: '동의어: sharp, severe, keen / 반의어: obtuse(둔한), chronic(만성의), mild(가벼운)',
    }),
    {
      definition: 'sharp or severe; very perceptive',
      synonyms: ['sharp', 'severe', 'keen'],
      antonyms: ['obtuse', 'chronic', 'mild'],
      exampleSentences: [
        { en: 'The patient was admitted to the hospital with acute chest pain.', ko: '환자는 심한 흉통으로 병원에 입원했다.' },
        { en: 'She has an acute sense of hearing and can detect the faintest sounds.', ko: '그녀는 예민한 청각을 가지고 있어 아주 작은 소리도 감지할 수 있다.' },
      ],
    }
  ),
  word('add', '추가하다', 1, 'verb',
    ['더하다', '합하다', '붙이다', '보태다', '가산하다', '덧붙이다', '첨가하다', '증가시키다', '합산하다', '넣다'],
    tips({
      etymology: '라틴어 addere(~에 더하다)에서 유래, ad(~에) + dare(주다)의 결합이다.',
      visual: '장바구니에 물건을 하나씩 담는 장면, 또는 계산기에서 숫자를 더하는 장면을 떠올리자.',
      soundAlike: '"애드"는 "add to cart(장바구니에 추가)" 등 온라인 쇼핑에서 매일 접하는 단어이다.',
      context: 'add up(합산하다), add to(~에 보태다), add that...(덧붙여 말하다) 등 다양하게 쓴다.',
      synonymAntonym: '동의어: append, include, attach / 반의어: subtract(빼다), remove(제거하다)',
    }),
    {
      definition: 'to join or combine something to increase',
      synonyms: ['append', 'include', 'attach'],
      antonyms: ['subtract', 'remove', 'deduct'],
      exampleSentences: [
        { en: 'Please add some sugar to my coffee.', ko: '커피에 설탕을 좀 넣어 주세요.' },
        { en: 'If you add five and three, you get eight.', ko: '5에 3을 더하면 8이 된다.' },
      ],
    }
  ),
  word('addict', '중독자', 7, 'noun',
    ['애호가', '광', '마니아', '헤비유저', '의존자', '집착자', '빠', '중독 환자', '습관자', '팬'],
    tips({
      etymology: '라틴어 addictus(넘겨진)에서 유래, 고대 로마에서 빚을 갚지 못해 채권자에게 "넘겨진" 사람을 뜻했다.',
      visual: '스마트폰 화면에서 눈을 떼지 못하고 밤새 스크롤하는 사람의 모습을 떠올리자.',
      soundAlike: '"애딕트"는 한국어에서도 "중독(addict)"이라는 외래어로 사용되어 익숙하다.',
      context: 'drug addict(약물 중독자), be addicted to(~에 중독되다), addiction(중독) 등으로 쓴다.',
      synonymAntonym: '동의어: (명사) junkie, user, devotee / 반의어: abstainer(절제하는 사람)',
    }),
    {
      definition: 'a person who is unable to stop using a substance or doing an activity',
      synonyms: ['junkie', 'user', 'devotee'],
      antonyms: ['abstainer', 'teetotaler'],
      exampleSentences: [
        { en: 'The rehabilitation center helps drug addicts recover and rebuild their lives.', ko: '재활 센터는 약물 중독자들이 회복하고 삶을 재건하도록 돕는다.' },
        { en: 'He is a self-confessed coffee addict who drinks five cups a day.', ko: '그는 하루에 다섯 잔을 마시는 스스로 인정한 커피 중독자이다.' },
      ],
    }
  ),
  word('address', '주소', 2, 'noun',
    ['거주지', '위치', '연락처', '이메일 주소', '도로명', '번지', '소재지', '사무실 주소', '주소지', '거리 주소'],
    tips({
      etymology: '라틴어 directiare(똑바로 향하게 하다)에서 유래, ad(~쪽으로) + directus(곧은)의 결합이다.',
      visual: '편지 봉투에 받는 사람의 이름과 주소를 꼼꼼히 적는 장면을 떠올리자.',
      soundAlike: '"어드레스"는 IT에서 "IP 주소(IP address)", "이메일 주소(email address)"로 매우 익숙하다.',
      context: '주소(home address) 외에도 연설하다(address the audience), 문제를 다루다(address the issue)로 쓴다.',
      synonymAntonym: '동의어: (장소) location, residence / (연설) speech / 반의어: avoid(회피하다), ignore',
    }),
    {
      definition: 'the details of where someone lives or where a building is located',
      synonyms: ['location', 'residence', 'domicile'],
      antonyms: [],
      exampleSentences: [
        { en: 'Could you give me your home address so I can send the invitation?', ko: '초대장을 보낼 수 있게 집 주소를 알려주시겠어요?' },
        { en: 'The president will address the nation on television tonight.', ko: '대통령이 오늘 밤 텔레비전으로 국민에게 연설할 것이다.' },
      ],
    }
  ),
  word('adjust', '조정하다', 4, 'verb',
    ['파괴하다', '무시하다', '방치하다', '고정하다', '유지하다', '거절하다', '중단하다', '혼란시키다', '악화시키다', '지연시키다'],
    tips({
      etymology: '라틴어 ad(to)와 juxta(near)가 결합되어 \'가깝게 맞추다\'라는 의미에서 유래되었습니다.',
      visual: '안경이 흘러내릴 때 손가락으로 위치를 살짝 바로잡는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'어저스트\'이므로 \'어디 좀 슥 트\'여서 자리를 맞춘다고 기억하세요.',
      context: '밝기에 따라 화면의 명암을 바꾸거나 새로운 환경에 적응할 때 주로 사용합니다.',
      synonymAntonym: '유의어 adapt와 반의어 disarrange를 함께 외우면 변화의 방향성을 이해하기 쉽습니다.',
    }),
    {
      definition: 'to change something slightly to make it more suitable for a new set of conditions',
      synonyms: ['modify', 'adapt', 'regulate'],
      antonyms: ['disarrange', 'disturb', 'unsettle'],
      exampleSentences: [
        { en: 'It took a few weeks for the new student to settle in and become comfortable with the school routine.', ko: '전학생이 학교 생활에 적응하고 익숙해지는 데 몇 주가 걸렸습니다.' },
        { en: 'You may need to change the height of your chair to prevent back pain while working.', ko: '업무 중 요통을 방지하려면 의자의 높이를 조절해야 할 수도 있습니다.' },
      ],
    }
  ),
  word('administer', '관리하다', 5, 'verb',
    ['방치하다', '무시하다', '거절하다', '방해하다', '포기하다', '지연시키다', '혼란시키다', '파괴하다', '반대하다', '실패하다'],
    tips({
      etymology: '라틴어 \'ad(~에게)\'와 \'ministrare(봉사하다/돕다)\'가 합쳐져 남을 돕기 위해 일을 처리하거나 약을 주는 행위를 뜻하게 되었습니다.',
      visual: '정장을 입은 관리자가 서류를 검토하거나, 간호사가 환자에게 정성껏 약을 투여하는 모습을 상상해 보세요.',
      soundAlike: '\'어드민(Admin)\'이라는 줄임말은 웹사이트 관리자를 뜻하므로, 무언가를 운영하고 관리하는 이미지를 떠올리면 쉽습니다.',
      context: '정부 기관이 법을 집행하거나 병원에서 환자에게 약물을 투여할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'manage(관리하다)와 유사하며, 반대로 일을 내팽개치는 neglect(방치하다)와 대조됩니다.',
    }),
    {
      definition: 'to manage the affairs of a business or organization, or to formally give medical treatment to someone',
      synonyms: ['manage', 'execute', 'dispense'],
      antonyms: ['neglect', 'mismanage', 'withhold'],
      exampleSentences: [
        { en: 'The government has the responsibility to manage and carry out the laws of the land.', ko: '정부는 국가의 법률을 관리하고 집행할 책임이 있습니다.' },
        { en: 'The nurse will provide the necessary medication to the patient every four hours.', ko: '간호사는 4시간마다 환자에게 필요한 약을 투여할 것입니다.' },
      ],
    }
  ),
  word('admission', '입장', 6, 'noun',
    ['퇴장', '거절', '금지', '배제', '탈퇴', '방출', '폐쇄', '차단', '반대', '부인'],
    tips({
      etymology: '라틴어 ad(쪽으로)와 mittere(보내다)가 합쳐져 \'안으로 들여보내 줌\'이라는 의미가 되었습니다.',
      visual: '놀이공원 입구에서 티켓을 내고 게이트를 통과하는 모습을 상상해 보세요.',
      soundAlike: '어드미션 -> \'어디 미션\'을 완료해야 들어갈 수 있는 입장 허가라고 연상해 보세요.',
      context: '대학 입학이나 박물관 입장료를 말할 때 가장 흔하게 사용되는 단어입니다.',
      synonymAntonym: '입장을 뜻하는 entrance와 반대로 거절을 뜻하는 denial을 함께 기억하세요.',
    }),
    {
      definition: 'The act of allowing someone to enter a place, organization, or institution',
      synonyms: ['entrance', 'access', 'admittance'],
      antonyms: ['exclusion', 'denial', 'rejection'],
      exampleSentences: [
        { en: 'The museum offers free admission to students on the first Sunday of every month.', ko: '그 박물관은 매달 첫 번째 일요일에 학생들에게 무료 입장을 제공합니다.' },
        { en: 'She received a letter of admission from her dream university last week.', ko: '그녀는 지난주에 꿈꾸던 대학교로부터 입학 허가서를 받았습니다.' },
      ],
    }
  ),
  word('admit', '인정하다', 7, 'verb',
    ['거절하다', '부인하다', '무시하다', '연기하다', '수행하다', '제외하다', '금지하다', '반대하다', '망설이다', '포기하다'],
    tips({
      etymology: '라틴어 ad(어디로)와 mittere(보내다)가 합쳐져 안으로 들여보내거나 사실로 받아들인다는 의미가 되었습니다.',
      visual: '법정에서 피고인이 고개를 끄덕이며 자신의 잘못을 시인하는 엄숙한 장면을 상상해 보세요.',
      soundAlike: '\'어드미(admit)\' 발음이 \'어디 믿어볼까?\'와 비슷하죠? 상대의 말을 믿고 사실로 받아들여 주는 상황을 떠올려 보세요.',
      context: '잘못을 고백할 때뿐만 아니라, 박물관이나 대학에 입학 허가를 받을 때도 자주 쓰이는 단어입니다.',
      synonymAntonym: '사실을 인정하는 confess와 반대로 딱 잘라 거절하는 deny를 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'to agree that something is true, especially unwillingly, or to allow someone to enter a place',
      synonyms: ['acknowledge', 'confess', 'concede'],
      antonyms: ['deny', 'reject', 'exclude'],
      exampleSentences: [
        { en: 'He finally decided to confess his mistake to the manager.', ko: '그는 마침내 매니저에게 자신의 실수를 인정하기로 결심했다.' },
        { en: 'The prestigious university decided to grant entry to only a few talented students.', ko: '그 명문 대학교는 오직 소수의 재능 있는 학생들에게만 입학을 허가하기로 결정했다.' },
      ],
    }
  ),
  word('adolescent', '청소년', 4, 'noun',
    ['성인', '노인', '유아', '조상', '부모', '스승', '전문가', '관리자', '배우자', '동료'],
    tips({
      etymology: '라틴어 \'adolescere\'에서 유래했으며, \'성장하다\'라는 의미를 담고 있어 어른으로 넘어가는 단계를 뜻합니다.',
      visual: '교복을 입고 키가 쑥쑥 자라고 있는 중고등학생의 모습을 상상해 보세요.',
      soundAlike: '\'애들(kids)\'과 \'센(strong)\'을 합쳐 \'몸집이 커지고 힘이 세진 아이들\'로 기억하면 쉽습니다.',
      context: '심리학이나 교육학에서 아동기와 성인기 사이의 과도기를 설명할 때 주로 쓰이는 격식 있는 표현입니다.',
      synonymAntonym: 'teenager와 비슷하지만 더 학술적인 느낌이며, 반대말인 adult와 대조하여 기억하세요.',
    }),
    {
      definition: 'a young person who is developing from a child into an adult',
      synonyms: ['teenager', 'youth', 'juvenile'],
      antonyms: ['adult', 'infant', 'elder'],
      exampleSentences: [
        { en: 'Many changes occur in the human body during the adolescent years.', ko: '청소년기 동안 인체에는 많은 변화가 일어납니다.' },
        { en: 'The program is designed to help adolescent students develop social skills.', ko: '이 프로그램은 청소년기 학생들이 사회적 기술을 기르는 것을 돕기 위해 설계되었습니다.' },
      ],
    }
  ),
  word('adult', '성인', 3, 'noun',
    ['어린이', '유아', '청소년', '미성년자', '학생', '신생아', '장난감', '학교', '육아', '성장'],
    tips({
      etymology: '라틴어 \'adultus\'에서 유래했으며, 이는 \'자라다\'라는 뜻의 \'alere\'의 과거분사형으로 \'다 자란 상태\'를 의미합니다.',
      visual: '아이의 키를 재는 벽면에 더 이상 올라갈 곳이 없는 다 자란 어른의 모습을 상상해 보세요.',
      soundAlike: '\'어덜트\' 발음이 \'어디든\' 갈 수 있는 자유로운 나이가 된 사람처럼 들린다고 연상해 보세요.',
      context: '영화 관람 등급이나 식당의 요금 체계에서 만 18세 이상의 사람을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '다 자란 사람을 뜻하는 grown-up과 반대되는 개념인 child를 함께 기억하면 유용합니다.',
    }),
    {
      definition: 'A person who is fully grown or has reached the legal age of majority.',
      synonyms: ['grown-up', 'mature', 'major'],
      antonyms: ['child', 'minor', 'infant'],
      exampleSentences: [
        { en: 'The museum offers a discounted ticket price for students and a full price for any person who is an adult.', ko: '박물관은 학생들에게는 할인된 티켓 가격을, 성인에게는 전액 요금을 적용합니다.' },
        { en: 'It is important for every individual to take responsibility for their own actions once they become an adult.', ko: '성인이 되면 자신의 행동에 대해 스스로 책임을 지는 것이 중요합니다.' },
      ],
    }
  ),
  word('advantage', '이점', 5, 'noun',
    ['불이익', '단점', '장벽', '손실', '위험', '방해', '결함', '부족', '지연', '거절'],
    tips({
      etymology: '프랑스어 \'avant(앞에)\'에서 유래하여 남들보다 앞서 나가는 유리한 위치를 뜻합니다.',
      visual: '경주에서 다른 선수들보다 10미터 앞에서 출발하는 유리한 고지를 상상해 보세요.',
      soundAlike: '어드밴티지 - 테니스 경기에서 듀스 후 한 점을 먼저 따서 유리해진 상황을 떠올리세요.',
      context: '비즈니스나 경쟁 상황에서 상대방보다 더 나은 조건을 가졌을 때 주로 사용합니다.',
      synonymAntonym: 'benefit과 유사하며, 반대로 상황이 나빠지는 disadvantage와 대조됩니다.',
    }),
    {
      definition: 'a condition or circumstance that puts one in a favorable or superior position',
      synonyms: ['benefit', 'asset', 'edge'],
      antonyms: ['disadvantage', 'drawback', 'hindrance'],
      exampleSentences: [
        { en: 'Being bilingual gives you a significant competitive edge in the global job market.', ko: '이중 언어 구사 능력은 글로벌 취업 시장에서 상당한 경쟁 우위를 제공합니다.' },
        { en: 'The home team usually has a psychological superiority over their opponents.', ko: '홈 팀은 보통 상대 팀에 비해 심리적인 유리함을 가집니다.' },
      ],
    }
  ),
  word('adventure', '모험', 1, 'noun',
    ['탐험', '도전', '경험', '여행', '일대기', '스릴', '위험', '모험담', '험로', '일상'],
    tips({
      etymology: '라틴어 \'advenire\'에서 유래하여 \'다가오는 일\' 혹은 \'예상치 못한 사건\'이라는 의미를 담고 있습니다.',
      visual: '배낭을 메고 낯선 정글이나 산맥을 탐험하며 보물 지도를 들고 있는 탐험가의 모습을 상상해 보세요.',
      soundAlike: '\'어드벤처\'는 한국어에서도 놀이공원 시설이나 게임 장르를 지칭할 때 자주 쓰여 익숙한 발음입니다.',
      context: '단순한 여행보다는 위험이 따르거나 가슴 설레는 특별한 경험을 묘사할 때 주로 사용됩니다.',
      synonymAntonym: '흥미진진한 exploit과 유사하며, 지루하고 평범한 routine과는 반대되는 개념입니다.',
    }),
    {
      definition: 'an unusual, exciting, or risky experience or undertaking',
      synonyms: ['exploit', 'escapade', 'quest'],
      antonyms: ['routine', 'stagnation', 'safety'],
      exampleSentences: [
        { en: 'The young travelers set off on a grand journey across the mountains in search of a new life.', ko: '젊은 여행자들은 새로운 삶을 찾아 산맥을 가로지르는 거대한 모험을 떠났습니다.' },
        { en: 'Living in a foreign country for a year was a true test of courage and a great personal experience.', ko: '외국에서 1년 동안 사는 것은 진정한 용기의 시험이자 위대한 개인적 모험이었습니다.' },
      ],
    }
  ),
  word('adverse', '불리한', 8, 'adjective',
    ['유리한', '긍정적인', '호의적인', '적절한', '유익한', '평범한', '다양한', '명확한', '신속한', '안정적인'],
    tips({
      etymology: '라틴어 adversus에서 유래되었으며, ad(~를 향해)와 vertere(돌리다)가 합쳐져 \'반대 방향으로 돌려진\' 상태를 뜻합니다.',
      visual: '거센 맞바람을 맞으며 힘들게 앞으로 나아가는 등산객의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'애드벌쓰\'와 유사하므로, 광고(ad)가 벌써(verse) 역효과를 내어 상황이 \'불리해진\' 장면을 연상하세요.',
      context: '주로 기상 조건(weather), 약물 반응(reaction), 경제 상황(conditions)이 좋지 않을 때 자주 쓰입니다.',
      synonymAntonym: '유리하고 도움이 되는 favorable이나 beneficial과는 정반대의 상황에서 사용되는 단어입니다.',
    }),
    {
      definition: 'preventing success or development; harmful or unfavorable',
      synonyms: ['unfavorable', 'hostile', 'detrimental'],
      antonyms: ['favorable', 'beneficial', 'advantageous'],
      exampleSentences: [
        { en: 'The flight was cancelled due to adverse weather conditions.', ko: '비행기는 불리한 기상 조건 때문에 취소되었습니다.' },
        { en: 'Some patients may experience adverse reactions to the new medication.', ko: '일부 환자들은 새로운 약물에 대해 부작용(불리한 반응)을 경험할 수 있습니다.' },
      ],
    }
  ),
  word('advertise', '광고하다', 6, 'verb',
    ['숨기다', '구입하다', '제조하다', '소비하다', '비판하다', '무시하다', '거절하다', '침묵하다', '수집하다', '배달하다'],
    tips({
      etymology: '라틴어 \'ad(향하여)\'와 \'vertere(돌리다)\'가 합쳐져 사람들의 시선을 특정 방향으로 돌리게 한다는 의미에서 유래했습니다.',
      visual: '화려한 전광판이나 TV 속에서 신제품을 소개하며 사람들의 눈길을 사로잡는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'애드벌타이즈\'이므로, 하늘에 떠 있는 커다란 \'애드벌룬\'을 띄워 홍보하는 모습을 연상하면 쉽습니다.',
      context: '기업이 신제품을 출시할 때 매출을 올리기 위해 대중에게 널리 알리는 상황에서 주로 쓰입니다.',
      synonymAntonym: '널리 알리는 promote와 반대로, 대중에게 알리지 않고 숨기는 conceal을 함께 기억하세요.',
    }),
    {
      definition: 'to describe or draw attention to a product, service, or event in a public medium in order to promote sales or attendance',
      synonyms: ['promote', 'publicize', 'broadcast'],
      antonyms: ['conceal', 'hide', 'suppress'],
      exampleSentences: [
        { en: 'The company decided to promote its new smartphone on social media platforms.', ko: '그 회사는 소셜 미디어 플랫폼에 새로운 스마트폰을 광고하기로 결정했다.' },
        { en: 'They are looking for a creative way to make their local business known to the neighborhood.', ko: '그들은 지역 사업을 동네에 알리기 위한 창의적인 광고 방법을 찾고 있다.' },
      ],
    }
  ),
  word('advise', '조언하다', 2, 'verb',
    ['무시하다', '방해하다', '거절하다', '명령하다', '침묵하다', '비난하다', '포기하다', '속이다', '관찰하다', '의심하다'],
    tips({
      etymology: '라틴어 \'ad(쪽으로)\'와 \'visere(보다)\'가 합쳐져 \'상대방이 상황을 잘 보도록 돕다\'는 의미에서 유래했습니다.',
      visual: '현명한 멘토가 고민에 빠진 학생의 어깨를 짚으며 방향을 가리키는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'애드바이스\'와 비슷하므로, 광고(ad)를 보고 바이스(vice, 대리인)가 조언해준다고 기억하세요.',
      context: '전문적인 상담이나 법률적 조언, 혹은 친구 사이의 가벼운 충고 상황에서 주로 쓰입니다.',
      synonymAntonym: '유의어 counsel은 좀 더 격식 있는 상담을, 반의어 mislead는 잘못된 길로 인도함을 뜻합니다.',
    }),
    {
      definition: 'to offer suggestions about the best course of action to someone',
      synonyms: ['counsel', 'recommend', 'suggest'],
      antonyms: ['mislead', 'deceive', 'dissuade'],
      exampleSentences: [
        { en: 'The doctor will guide you on how to maintain a healthy diet.', ko: '의사는 건강한 식단을 유지하는 방법에 대해 당신에게 조언해 줄 것입니다.' },
        { en: 'I would strongly suggest that you reconsider your current decision.', ko: '나는 당신이 현재의 결정을 재고해 볼 것을 강력히 권고합니다.' },
      ],
    }
  ),
  word('affair', '일', 7, 'noun',
    ['침묵', '휴식', '자연', '공포', '우연', '결과', '비밀', '상상', '거절', '도착'],
    tips({
      etymology: '라틴어 \'ad(~에게)\'와 \'facere(하다)\'가 합쳐져 \'해야 할 일\'이라는 의미에서 유래했습니다.',
      visual: '정장을 입은 사람들이 중요한 서류를 들고 회의실에서 복잡한 업무를 처리하는 모습을 상상하세요.',
      soundAlike: '\'어페어\' 발음이 \'어, 폐허\'와 비슷하죠? 전쟁이라는 큰 사건(affair)이 터져 도시가 폐허가 된 상황을 떠올려 보세요.',
      context: '공적인 업무나 사적인 연애 관계, 혹은 사회적 파장을 일으킨 사건을 가리킬 때 두루 쓰입니다.',
      synonymAntonym: 'matter나 event와는 비슷한 상황을 나타내지만, 공허함을 뜻하는 void와는 반대되는 실체적인 일입니다.',
    }),
    {
      definition: 'an event, occurrence, or a matter that needs to be attended to or managed',
      synonyms: ['matter', 'event', 'incident'],
      antonyms: ['nothingness', 'void', 'oblivion'],
      exampleSentences: [
        { en: 'The government\'s handling of the foreign affair was criticized by the public.', ko: '정부의 외교 문제 처리는 대중들로부터 비판을 받았다.' },
        { en: 'The wedding was a grand affair with hundreds of guests in attendance.', ko: '그 결혼식은 수백 명의 하객이 참석한 성대한 행사였다.' },
      ],
    }
  ),
  word('affection', '애정', 4, 'noun',
    ['증오', '무관심', '거절', '분노', '질투', '공포', '경멸', '불신', '냉담', '적대감'],
    tips({
      etymology: '라틴어 \'affectio\'에서 유래하며, 누군가에게 마음이 \'가 닿는 것(affect)\'을 의미합니다.',
      visual: '어머니가 아이를 따뜻하게 안아주는 포근한 포옹 장면을 상상해 보세요.',
      soundAlike: '발음이 \'어펙션\'이므로, 누군가에게 \'어! 퍽(푹)\' 빠져버린 감정으로 기억하세요.',
      context: '주로 가족, 연인, 반려동물 사이의 깊고 부드러운 유대감을 표현할 때 쓰입니다.',
      synonymAntonym: '사랑을 뜻하는 love보다는 덜 격정적이지만, hatred와는 정반대되는 따뜻한 감정입니다.',
    }),
    {
      definition: 'a gentle feeling of fondness, liking, or attachment toward a person or animal',
      synonyms: ['fondness', 'tenderness', 'attachment'],
      antonyms: ['hatred', 'hostility', 'indifference'],
      exampleSentences: [
        { en: 'The child held his puppy with great warmth and care.', ko: '그 아이는 강아지를 아주 따뜻하고 깊은 애정으로 안아주었다.' },
        { en: 'She has a deep fondness for her grandparents who raised her.', ko: '그녀는 자신을 키워준 조부모님께 깊은 애정을 가지고 있다.' },
      ],
    }
  ),
  word('affiliate', '제휴하다', 9, 'verb',
    ['분리하다', '해산하다', '거절하다', '독립하다', '차단하다', '방해하다', '무시하다', '파괴하다', '은폐하다', '대립하다'],
    tips({
      etymology: '라틴어 \'affiliare\'에서 유래되었으며, \'ad(~에)\'와 \'filius(아들)\'가 합쳐져 \'아들로 삼다\', 즉 가족처럼 밀접한 관계를 맺는다는 뜻입니다.',
      visual: '두 개의 서로 다른 회사 로고가 악수를 하며 하나로 연결되는 선을 상상해 보세요.',
      soundAlike: '\'어필(appeal) + 이이트\'로 발음되는데, 상대방에게 매력을 어필해서 파트너로 만든다고 생각하면 쉽습니다.',
      context: '비즈니스 뉴스에서 대기업이 중소 업체와 협력 관계를 맺을 때 가장 자주 등장하는 단어입니다.',
      synonymAntonym: 'associate와 동의어로 쓰이며, 관계를 끊는 detach나 separate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to officially connect a person or a smaller group to a larger organization',
      synonyms: ['associate', 'ally', 'unite'],
      antonyms: ['detach', 'disconnect', 'separate'],
      exampleSentences: [
        { en: 'The local gym decided to affiliate with a national fitness chain to gain more members.', ko: '그 지역 체육관은 더 많은 회원을 확보하기 위해 전국적인 피트니스 체인과 제휴하기로 결정했다.' },
        { en: 'Many small stations are affiliated with major television networks for broadcasting content.', ko: '많은 소규모 방송국들이 콘텐츠 송출을 위해 주요 TV 네트워크와 연계되어 있다.' },
      ],
    }
  ),
  word('afraid', '두려운', 3, 'adjective',
    ['용감한', '대담한', '자신만만한', '기쁜', '평온한', '지루한', '화난', '호기심많은', '부끄러운', '자랑스러운'],
    tips({
      etymology: '고대 프랑스어 \'affrayer\'에서 유래했으며, 평화로운 상태에서 벗어나 소란스럽거나 놀란 상태를 의미합니다.',
      visual: '어두운 방 안에서 무언가 튀어나올까 봐 이불을 머리 끝까지 뒤집어쓰고 떨고 있는 아이를 상상해 보세요.',
      soundAlike: '발음이 \'어-프레이드\'와 유사하므로, 무서운 상황에서 \'어? 풀(풀숲)에 이드(뭐가 있다!)\'라고 놀라는 장면을 연상하세요.',
      context: '주로 be afraid of (~을 무서워하다) 또는 be afraid that (~일까 봐 걱정이다)의 형태로 자주 쓰입니다.',
      synonymAntonym: 'scared와 유의어 관계이며, 반대로 용기 있는 상태인 brave와 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'feeling fear, apprehension, or regret because of a possible danger or problem',
      synonyms: ['scared', 'frightened', 'fearful'],
      antonyms: ['brave', 'confident', 'fearless'],
      exampleSentences: [
        { en: 'Many children are naturally scared of the dark and feel uneasy at night.', ko: '많은 아이들은 본능적으로 어둠을 무서워하며 밤에 불안함을 느낀다.' },
        { en: 'I am sorry to say that I am unable to attend the meeting tomorrow.', ko: '유감스럽게도 내일 회의에 참석할 수 없을 것 같습니다.' },
      ],
    }
  ),
  word('after', '-후에', 1, 'preposition',
    ['전에', '이전에', '앞에', '동안', '까지', '도중에', '동시에', '미리', '일찍', '먼저'],
    tips({
      etymology: '고대 영어 \'æfter\'에서 유래했으며, \'더 멀리 뒤에\'라는 비교의 의미를 담고 있습니다.',
      visual: '달리기 경주에서 선두 주자가 지나간 \'뒤\'를 따라가는 다음 주자의 모습을 상상해 보세요.',
      soundAlike: '애프터서비스(A/S)를 떠올려 보세요. 물건을 산 \'후\'에 받는 서비스입니다.',
      context: '시간의 순서나 위치상 뒤를 나타낼 때 가장 기본적으로 쓰이는 전치사입니다.',
      synonymAntonym: 'before(전에)와는 반대되는 개념이며, following(다음에)과 비슷한 맥락으로 쓰입니다.',
    }),
    {
      definition: 'following in time, place, or order; later than a specific event or point.',
      synonyms: ['following', 'subsequent to', 'behind'],
      antonyms: ['before', 'prior to', 'ahead of'],
      exampleSentences: [
        { en: 'We went for a walk in the park after dinner.', ko: '우리는 저녁 식사 후에 공원으로 산책을 나갔다.' },
        { en: 'The bank is located just after the post office on this street.', ko: '은행은 이 거리의 우체국 바로 다음에 위치해 있다.' },
      ],
    }
  ),
];
