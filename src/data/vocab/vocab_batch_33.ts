import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch33: VocabItem[] = [
  word('eventually', '결국', 4, 'adverb',
    ['처음에', '즉시', '곧바로', '이미', '결코', '가끔', '천천히', '당장', '간헐적으로', '영원히'],
    tips({
      etymology: '라틴어 eventus(결과)에서 유래하여 여러 사건들이 모두 일어난 뒤의 상태를 뜻합니다.',
      visual: '구불구불한 산길을 한참 올라간 끝에 마침내 탁 트인 정상에 도착한 등산객을 상상하세요.',
      soundAlike: '이-벤-추-얼리: \'이 벤치(bench)에 우리 결국 앉게 되었네\'라고 소리 내어 읽으며 상황을 떠올려 보세요.',
      context: '단순히 \'나중에\'라는 뜻보다는 여러 과정이나 지연을 겪은 뒤 도달한 결말을 강조할 때 주로 쓰입니다.',
      synonymAntonym: '마침내를 뜻하는 finally와 비슷하며, 처음을 뜻하는 initially와는 반대되는 개념입니다.',
    }),
    {
      definition: 'at a specified future time or after a long period of time, especially following various difficulties',
      synonyms: ['finally', 'ultimately', 'at last'],
      antonyms: ['initially', 'immediately', 'at first'],
      exampleSentences: [
        { en: 'It took a long time, but they eventually reached a decision.', ko: '오랜 시간이 걸렸지만, 그들은 결국 결정을 내렸다.' },
        { en: 'Keep trying, and you will eventually succeed.', ko: '계속 노력하다 보면, 너는 결국 성공할 거야.' },
      ],
    }
  ),
  word('ever', '언제든', 5, 'adverb',
    ['결코', '한번도', '절대', '이미', '곧', '가끔', '자주', '항상', '매번', '언제나'],
    tips({
      etymology: '고대 영어 ǽfre에서 유래하여 \'어느 때든\'이라는 시간의 연속성을 의미하게 되었습니다.',
      visual: '끝이 보이지 않는 긴 시간의 터널 속 어느 한 지점을 가리키는 화살표를 상상하세요.',
      soundAlike: '놀이공원 \'에버\'랜드처럼 \'언제나\' 즐거움이 가득한 장소를 떠올려 보세요.',
      context: '주로 의문문에서 경험을 묻거나, 최상급 표현 뒤에서 강조할 때 자주 쓰입니다.',
      synonymAntonym: 'anytime과 비슷하지만, 부정어와 결합하면 never와 반대되는 강한 부정을 만듭니다.',
    }),
    {
      definition: 'at any time, regardless of the specific moment or duration',
      synonyms: ['anytime', 'at any time', 'whenever'],
      antonyms: ['never', 'not once', 'at no time'],
      exampleSentences: [
        { en: 'Have you ever traveled to a foreign country alone?', ko: '혼자 외국 여행을 가본 적이 있나요?' },
        { en: 'Nothing ever seems to change in this quiet little town.', ko: '이 조용하고 작은 마을에서는 그 어떤 것도 결코 변하지 않는 것 같다.' },
      ],
    }
  ),
  word('every', '모든', 3, 'adjective',
    ['일부', '어떤', '언제든', '행사', '몇몇', '하나의', '특정한', '오직', '전혀', '아무'],
    tips({
      etymology: '고대 영어 \'æfre ælc\'에서 유래되었으며, \'ever each\' 즉 \'언제나 각각의 것\'이 합쳐져 전체를 뜻하게 되었습니다.',
      visual: '커다란 원 안에 있는 수많은 점들이 하나도 빠짐없이 모두 색칠되어 있는 모습을 상상해 보세요.',
      soundAlike: '\'에브리\'라고 발음할 때 \'입으리\'와 비슷하게 들리는데, \'모든\' 옷을 다 \'입으리\'라고 외워보세요.',
      context: '개별적인 구성원 하나하나를 강조하면서도 결국 집단 전체를 나타낼 때 주로 사용됩니다.',
      synonymAntonym: '전체를 뜻하는 all과 비슷하지만, 단수 명사와 함께 쓰인다는 점이 특징이며 반대말로는 none이나 some이 있습니다.',
    }),
    {
      definition: 'Used to refer to all the individual members of a particular group or set without exception.',
      synonyms: ['each', 'all', 'entire'],
      antonyms: ['none', 'some', 'individual'],
      exampleSentences: [
        { en: 'The teacher handed out a new textbook to student in the classroom.', ko: '선생님은 교실에 있는 모든 학생에게 새 교과서를 나누어 주었습니다.' },
        { en: 'She makes sure to drink a glass of water morning right after waking up.', ko: '그녀는 매일 아침 일어난 직후에 물 한 잔을 꼭 마십니다.' },
      ],
    }
  ),
  word('evident', '명백한', 6, 'adjective',
    ['모호한', '불분명한', '애매한', '숨은', '의심스러운', '불확실한', '흐린', '알 수 없는', '숨겨진', '뚜렷하지 않은'],
    tips({
      etymology: '라틴어 \'ex(밖으로)\'와 \'videre(보다)\'가 합쳐져 \'밖으로 훤히 보인다\'는 뜻에서 유래했습니다.',
      visual: '안개가 걷히고 산봉우리가 아주 뚜렷하게 드러나는 풍경을 상상해 보세요.',
      soundAlike: '\'에비던트\'는 증거를 뜻하는 \'evidence\'와 발음이 비슷합니다. 증거가 있으면 사실이 명백해집니다.',
      context: '범죄 현장의 지문이나 과학 실험의 결과가 너무나 확실할 때 주로 사용합니다.',
      synonymAntonym: 'obvious와 비슷한 뜻이며, 반대로 꽁꽁 숨겨진 상태는 concealed라고 합니다.',
    }),
    {
      definition: 'easily perceived or understood; clear to the sight or mind',
      synonyms: ['obvious', 'apparent', 'manifest'],
      antonyms: ['obscure', 'hidden', 'doubtful'],
      exampleSentences: [
        { en: 'The joy on her face was clear to everyone when she received the good news.', ko: '그녀가 기쁜 소식을 들었을 때 얼굴에 나타난 기쁨은 누가 봐도 명백했습니다.' },
        { en: 'It became increasingly certain that the initial plan would not work as expected.', ko: '처음 계획이 예상대로 진행되지 않을 것이라는 점이 점점 분명해졌습니다.' },
      ],
    }
  ),
  word('evolve', '진화하다', 7, 'verb',
    ['퇴보하다', '퇴화하다', '관련시키다', '회전하다', '반복하다', '유지하다', '중단하다', '되돌리다', '고정하다', '정체되다'],
    tips({
      etymology: '라틴어 \'evolvere\'에서 유래했으며, \'e(밖으로)\'와 \'volvere(굴리다/말다)\'가 합쳐져 돌면서 밖으로 펼쳐지듯 발전한다는 뜻입니다.',
      visual: '작은 세포가 점점 복잡한 생명체로 변하거나, 구식 휴대폰이 최신 스마트폰으로 변하는 타임랩스 영상을 상상해 보세요.',
      soundAlike: '\'이발부\'라고 발음해 보세요. 머리를 이발하고 나면 스타일이 한 단계 \'진화\'하고 발전한 느낌이 들지 않나요?',
      context: '생물학적 진화뿐만 아니라 기술, 아이디어, 비즈니스 모델이 시간이 흐르며 점진적으로 개선될 때 자주 쓰입니다.',
      synonymAntonym: '점차 발전하는 develop과 유사하며, 반대로 뒤로 후퇴하거나 나빠지는 regress와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to change and improve gradually into a more complex or advanced state',
      synonyms: ['develop', 'progress', 'advance'],
      antonyms: ['regress', 'stagnate', 'deteriorate'],
      exampleSentences: [
        { en: 'Many species had to adapt and change their physical traits to survive in the changing climate.', ko: '많은 종들은 변화하는 기후에서 살아남기 위해 적응하고 신체적 특성을 진화시켜야 했습니다.' },
        { en: 'The small startup began to transform into a global corporation over the next decade.', ko: '그 작은 스타트업은 향후 10년에 걸쳐 글로벌 기업으로 진화하기 시작했습니다.' },
      ],
    }
  ),
  word('exam', '시험', 1, 'noun',
    ['숙제', '퀴즈', '발표', '과제', '수업', '인터뷰', '설문', '검진', '면접', '평가'],
    tips({
      etymology: '라틴어 \'exagmen\'에서 유래하여 무언가를 정밀하게 검사하고 측정한다는 의미를 담고 있습니다.',
      visual: '책상 위에 놓인 OMR 카드와 컴퓨터용 사인펜, 그리고 시계를 번갈아 보는 긴장된 학생을 상상하세요.',
      soundAlike: '이그잼(exam)은 이그잼플(example)과 앞부분이 비슷하지만, 예시가 아닌 실력을 증명하는 시험입니다.',
      context: '학교나 자격증 취득을 위해 치르는 공식적이고 비중 있는 평가를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'test보다 격식 있는 표현이며, 반대로 평소에 가볍게 제출하는 과제는 assignment라고 합니다.',
    }),
    {
      definition: 'A formal set of questions or exercises used to evaluate a person\'s knowledge or skill in a particular subject.',
      synonyms: ['examination', 'test', 'assessment'],
      antonyms: ['recreation', 'relaxation', 'practice'],
      exampleSentences: [
        { en: 'She stayed up all night to prepare for the final exam.', ko: '그녀는 기말고사를 준비하기 위해 밤을 꼬박 새웠다.' },
        { en: 'The entrance exam consists of three different sections.', ko: '입학 시험은 세 개의 다른 섹션으로 구성되어 있다.' },
      ],
    }
  ),
  word('example', '예', 2, 'noun',
    ['규칙', '예외', '시험', '견본', '반례', '정의', '이론', '법칙', '공식', '가설'],
    tips({
      etymology: '라틴어 \'exemplum\'에서 유래했으며, \'밖으로(ex) 집어낸(emere) 것\'이라는 의미에서 표본이나 본보기가 되었습니다.',
      visual: '수학 문제집에서 문제 바로 위에 풀이 과정이 적힌 \'Ex\' 박스를 상상해 보세요.',
      soundAlike: '\'이그잼플\'은 \'이게 샘플(Sample)\'과 발음이 비슷하여, 무언가를 보여주는 샘플이라고 생각하면 쉽습니다.',
      context: '어떤 규칙을 설명할 때 이해를 돕기 위해 덧붙이는 구체적인 사례를 말합니다.',
      synonymAntonym: 'instance와 유사하며, 전체를 아우르는 추상적인 개념인 concept와는 반대되는 구체적인 사례입니다.',
    }),
    {
      definition: 'A representative item or instance that illustrates a general rule or shows what something is like.',
      synonyms: ['instance', 'illustration', 'sample'],
      antonyms: ['anomaly', 'exception', 'concept'],
      exampleSentences: [
        { en: 'The teacher provided a clear illustration to help the students understand the complex theory.', ko: '선생님은 학생들이 복잡한 이론을 이해하도록 돕기 위해 명확한 예를 제시했습니다.' },
        { en: 'Please look at the first sample shown on the page before you start the exercise.', ko: '연습 문제를 시작하기 전에 페이지에 나와 있는 첫 번째 보기를 확인하세요.' },
      ],
    }
  ),
  word('excellent', '훌륭한', 4, 'adjective',
    ['형편없는', '부족한', '평범한', '보통의', '나쁜', '낮은', '미흡한', '조악한', '엉망인', '저질의'],
    tips({
      etymology: '라틴어 ex(밖으로)와 cellere(솟아오르다)가 합쳐져 남들보다 밖으로 툭 튀어나올 만큼 뛰어나다는 의미에서 유래되었습니다.',
      visual: '시험지 상단에 빨간색으로 크게 적힌 \'A+\' 학점이나 엄지손가락을 높게 치켜세운 모습을 상상하세요.',
      soundAlike: '유명한 아이스크림 브랜드 \'엑설런트\'를 떠올리면 고급스럽고 아주 맛있는 이미지를 쉽게 연결할 수 있습니다.',
      context: '단순히 좋다는 \'good\'보다 훨씬 강한 칭찬으로, 성과나 품질이 최상급일 때 주로 사용합니다.',
      synonymAntonym: 'outstanding과 superb는 비슷한 수준의 극찬이며, 반대로 질이 떨어질 때는 poor나 inferior를 씁니다.',
    }),
    {
      definition: 'of the highest quality; possessing outstanding or superior merit',
      synonyms: ['outstanding', 'superb', 'exceptional'],
      antonyms: ['poor', 'inferior', 'terrible'],
      exampleSentences: [
        { en: 'The chef received a standing ovation for the excellent meal he prepared.', ko: '요리사는 그가 준비한 훌륭한 식사 덕분에 기립 박수를 받았습니다.' },
        { en: 'Her academic record is excellent, showing top marks in every single subject.', ko: '그녀의 학업 성적은 모든 과목에서 최고 점수를 보여줄 정도로 훌륭합니다.' },
      ],
    }
  ),
  word('excess', '과다', 5, 'noun',
    ['부족', '절제', '적정', '최소', '필요량', '한도', '표준', '적당', '균형', '절약'],
    tips({
      etymology: '라틴어 ex(밖으로)와 cedere(가다)가 합쳐져 정해진 선을 넘어갔다는 의미에서 유래했습니다.',
      visual: '컵에 물을 계속 부어 물이 찰랑거리다 못해 바닥으로 뚝뚝 넘쳐흐르는 장면을 상상하세요.',
      soundAlike: '접근을 뜻하는 access와 발음이 비슷하지만, \'엑\' 소리에 힘을 주어 넘쳐나는 느낌을 살려보세요.',
      context: '요리할 때 지방을 떼어내거나 예산을 짤 때 남는 돈을 처리하는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'surplus와 같은 유의어는 \'남는 것\'을, shortage 같은 반의어는 \'모자람\'을 뜻합니다.',
    }),
    {
      definition: 'an amount that is more than necessary or allowed',
      synonyms: ['surplus', 'overabundance', 'superfluity'],
      antonyms: ['shortage', 'deficiency', 'scarcity'],
      exampleSentences: [
        { en: 'We need to cut down on excess spending to save money for the trip.', ko: '여행 자금을 모으기 위해 과도한 지출을 줄여야 합니다.' },
        { en: 'The recipe said to remove any excess water from the cooked noodles.', ko: '레시피에는 삶은 면에서 남는 물기를 제거하라고 되어 있었습니다.' },
      ],
    }
  ),
  word('exclude', '제외하다', 6, 'verb',
    ['포함하다', '넣다', '포함시키다', '합류시키다', '추가하다', '함유하다', '편입하다', '끼워넣다', '받아들이다', '영입하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 claudere(닫다)가 합쳐져 \'밖으로 밀어내고 문을 닫다\'라는 의미에서 유래했습니다.',
      visual: '동그란 울타리 안에 모두가 모여 있는데, 한 사람만 울타리 밖으로 밀려나 있는 그림을 상상해 보세요.',
      soundAlike: '접두사 ex-는 exit(출구)처럼 \'밖\'을 의미하고, in-은 \'안\'을 의미하므로 include와 반대 개념으로 기억하세요.',
      context: '세금 불포함 가격이나 특정 인원을 명단에서 뺄 때 주로 사용되는 비즈니스 및 일상 용어입니다.',
      synonymAntonym: 'omit이나 leave out과 비슷하게 쓰이며, 반대말인 include와 짝을 지어 외우면 효과적입니다.',
    }),
    {
      definition: 'to deliberately leave out or prevent someone or something from being part of a group or activity',
      synonyms: ['omit', 'leave out', 'bar'],
      antonyms: ['include', 'incorporate', 'embrace'],
      exampleSentences: [
        { en: 'The total price of the tour will leave out personal expenses and tips.', ko: '투어 총 가격에서 개인 비용과 팁은 제외될 것입니다.' },
        { en: 'The club decided to keep out anyone who did not meet the strict membership criteria.', ko: '그 클럽은 엄격한 회원 기준을 충족하지 못하는 사람은 누구든 제외하기로 결정했습니다.' },
      ],
    }
  ),
  word('executive', '경영의', 8, 'adjective',
    ['실무의', '하급의', '일반 직원의', '노동의', '행정의', '입법의', '사법의', '비경영의', '임시의', '아르바이트의'],
    tips({
      etymology: '라틴어 ex-(완전히)와 sequi(따르다)가 합쳐져 \'끝까지 실행하여 관리한다\'는 의미에서 유래했습니다.',
      visual: '고급 정장을 입고 회의실 상석에서 서류에 최종 서명을 하는 결정권자의 모습입니다.',
      soundAlike: '이그제큐티브 - \'이게 제 규칙(Rule)입니다\'라고 선포하는 경영진의 목소리를 상상해보세요.',
      context: '기업의 의사결정권을 가진 고위직이나 관리직을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: 'managerial과 유사하며, 말단 직원을 뜻하는 subordinate와는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to managing or directing an organization',
      synonyms: ['managerial', 'administrative', 'supervisory'],
      antonyms: ['subordinate', 'junior', 'clerical'],
      exampleSentences: [
        { en: 'He holds a high-level position at the company with significant decision-making power.', ko: '그는 회사에서 상당한 의사 결정권을 가진 고위 경영직을 맡고 있다.' },
        { en: 'The board of directors will gather next week to discuss the new corporate strategy.', ko: '경영진 이사회는 새로운 기업 전략을 논의하기 위해 다음 주에 모일 것이다.' },
      ],
    }
  ),
  word('exit', '출구', 3, 'noun',
    ['입구', '현관', '계단', '복도', '로비', '통로', '창문', '승강기', '대기실', '매표소'],
    tips({
      etymology: '라틴어 ex(밖으로)와 ire(가다)가 결합하여 \'밖으로 나가는 통로\'라는 의미가 되었습니다.',
      visual: '건물 천장에 매달린 초록색 사람 모양의 비상구 유도등을 떠올려 보세요.',
      soundAlike: '비슷하게 들리는 exist(존재하다)와 헷갈리지 않도록 주의하세요.',
      context: '비행기나 극장 등 공공장소에서 안전을 위해 가장 먼저 확인해야 하는 위치입니다.',
      synonymAntonym: '나가는 곳인 way out과 반대되는 들어오는 곳인 entrance를 함께 기억하세요.',
    }),
    {
      definition: 'A passage or door through which one leaves a building or a specific area.',
      synonyms: ['doorway', 'way out', 'egress'],
      antonyms: ['entrance', 'entry', 'ingress'],
      exampleSentences: [
        { en: 'The emergency door is located at the rear of the theater.', ko: '비상구는 극장 뒷면에 위치해 있습니다.' },
        { en: 'Passengers should proceed toward the gate marked with a green sign.', ko: '승객들은 초록색 표지판이 표시된 나가는 곳으로 향해야 합니다.' },
      ],
    }
  ),
  word('expensive', '비싼', 7, 'adjective',
    ['저렴한', '무료의', '경제적인', '알뜰한', '할인된', '헐값의', '평범한', '단순한', '소박한', '가성비좋은'],
    tips({
      etymology: '라틴어 \'expendere\'에서 유래했으며, 돈을 밖으로(ex) 많이 매달아(pend) 지불한다는 의미에서 시작되었습니다.',
      visual: '명품 매장의 화려한 조명 아래 붙어 있는 0이 가득한 가격표를 상상해 보세요.',
      soundAlike: '발음이 \'익스-펜-십\'인데, 돈을 \'익\' 소리 날 정도로 \'팬(spend)\'다고 생각하면 기억하기 쉽습니다.',
      context: '주로 명품, 부동산, 고가의 가전제품 등 큰 비용이 드는 대상을 묘사할 때 쓰입니다.',
      synonymAntonym: '비슷한 말로 costly가 있고, 반대말로 cheap이나 inexpensive를 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'requiring a large amount of money to purchase or maintain',
      synonyms: ['costly', 'pricey', 'extravagant'],
      antonyms: ['cheap', 'inexpensive', 'affordable'],
      exampleSentences: [
        { en: 'Maintaining a vintage sports car can be incredibly costly over time.', ko: '빈티지 스포츠카를 유지하는 것은 시간이 갈수록 엄청나게 비용이 많이 들 수 있습니다.' },
        { en: 'Dining at that five-star restaurant was the most lavish experience of our trip.', ko: '그 5성급 레스토랑에서 식사한 것은 우리 여행 중 가장 돈이 많이 드는 경험이었습니다.' },
      ],
    }
  ),
  word('experience', '경험', 4, 'noun',
    ['무경험', '미숙', '실험', '전문가', '이론', '상상', '추측', '서툼', '무지', '풍문'],
    tips({
      etymology: '라틴어 \'experientia\'에서 유래했으며, \'시도하다\'라는 의미의 \'ex-\'와 \'peritus\'가 결합되어 실제로 겪어본 숙련된 상태를 뜻합니다.',
      visual: '이력서(Resume)의 경력 사항 칸에 빼곡히 적힌 프로젝트 목록을 상상해 보세요.',
      soundAlike: '\'익스피어리언스\'에서 \'피어(peer)\'를 \'피어나다\'로 연상하여, 시련을 겪으며 능력이 피어나는 과정을 떠올려보세요.',
      context: '직장 면접이나 여행 이야기를 할 때 가장 자주 등장하는 단어로, 단순한 지식이 아닌 몸소 겪은 일을 강조할 때 씁니다.',
      synonymAntonym: '실제 겪은 \'know-how\'는 유의어이며, 아무것도 모르는 상태인 \'inexperience\'는 반의어입니다.',
    }),
    {
      definition: 'knowledge or skill gained from doing or living through something',
      synonyms: ['background', 'expertise', 'practice'],
      antonyms: ['ignorance', 'immaturity', 'inexperience'],
      exampleSentences: [
        { en: 'Traveling alone across Europe was a life-changing event that gave me valuable perspective.', ko: '유럽을 홀로 여행한 것은 나에게 소중한 관점을 준 인생을 바꾼 경험이었다.' },
        { en: 'The job description requires at least five years of professional work in software development.', ko: '해당 직무 기술서는 소프트웨어 개발 분야에서 최소 5년의 전문적인 업무 경험을 요구한다.' },
      ],
    }
  ),
  word('expertise', '전문 지식', 9, 'noun',
    ['무지', '서툼', '기초', '상식', '미숙', '무능', '부족', '야매', '초보', '아마추어'],
    tips({
      etymology: 'expert(전문가)라는 단어 뒤에 성질이나 상태를 나타내는 접미사 -ise가 붙어 형성되었습니다.',
      visual: '특정 분야의 복잡한 기계를 능숙하게 다루는 장인의 손길을 상상해 보세요.',
      soundAlike: '엑스퍼티즈(expertise)는 전문가(expert)가 가진 \'티\'가 나는 실력이라고 기억하세요.',
      context: '주로 기술적, 법률적, 학술적 분야에서 남들보다 뛰어난 숙련도를 말할 때 쓰입니다.',
      synonymAntonym: 'proficiency와 유사하며, 아무것도 모르는 상태인 ignorance와는 정반대 개념입니다.',
    }),
    {
      definition: 'high level of skill or specialized knowledge acquired through practice and study',
      synonyms: ['proficiency', 'mastery', 'competence'],
      antonyms: ['incompetence', 'inexperience', 'ignorance'],
      exampleSentences: [
        { en: 'The software developer demonstrated remarkable technical knowledge during the system migration.', ko: '그 소프트웨어 개발자는 시스템 이전 과정에서 놀라운 기술적 전문 지식을 보여주었다.' },
        { en: 'Hiring a consultant with financial mastery can help the company avoid costly mistakes.', ko: '재무적 전문성을 갖춘 컨설턴트를 고용하는 것은 회사가 비용이 많이 드는 실수를 피하는 데 도움이 될 수 있다.' },
      ],
    }
  ),
  word('extent', '범위', 5, 'noun',
    ['한계', '끝', '중심', '일부', '경계', '한점', '최소', '극한', '핵심', '일각'],
    tips({
      etymology: '라틴어 ex(밖으로)와 tendere(뻗다)가 합쳐져 밖으로 펼쳐진 길이나 크기를 의미합니다.',
      visual: '지도의 경계선이 사방으로 넓게 퍼져나가는 모습을 상상해 보세요.',
      soundAlike: '동사형인 extend와 혼동하기 쉬우나, extent는 명사로 결과적인 크기를 나타냅니다.',
      context: '어느 정도 동의할 때 쓰는 \'to some extent\'라는 표현으로 자주 쓰입니다.',
      synonymAntonym: 'degree와 scope는 비슷한 크기를 뜻하며, limit와 restriction은 제한된 범위를 뜻합니다.',
    }),
    {
      definition: 'The scale, size, or degree of something, or the total area that it covers.',
      synonyms: ['degree', 'scope', 'magnitude'],
      antonyms: ['limit', 'constraint', 'minimum'],
      exampleSentences: [
        { en: 'The authorities are still trying to determine the full extent of the environmental damage.', ko: '당국은 여전히 환경 파괴의 전체 범위를 파악하려 노력 중이다.' },
        { en: 'To a certain extent, your success depends on how well you cooperate with others.', ko: '어느 정도까지는, 당신의 성공은 타인과 얼마나 잘 협력하느냐에 달려 있다.' },
      ],
    }
  ),
  word('external', '외부의', 6, 'adjective',
    ['내부의', '내적인', '안쪽의', '속의', '중앙의', '핵심적인', '국내의', '자체의', '내장의', '내재적인'],
    tips({
      etymology: '라틴어 \'exter\'는 \'밖\'을 의미하며, 여기에 형용사형 접미사 \'-al\'이 붙어 바깥쪽의 상태를 나타냅니다.',
      visual: '택배 상자의 내용물이 아닌, 겉면에 붙은 송장이나 상자의 단단한 표면을 떠올려 보세요.',
      soundAlike: '익스터널(external)의 \'ex\'는 \'exit(출구)\'처럼 밖으로 나가는 느낌을 줍니다.',
      context: '컴퓨터 본체 안에 있는 하드디스크가 아닌, 따로 연결해서 쓰는 외장 하드를 \'external hard drive\'라고 부릅니다.',
      synonymAntonym: 'outer와 exterior는 겉면을 강조하고, 반대로 internal이나 inner는 보이지 않는 안쪽을 뜻합니다.',
    }),
    {
      definition: 'relating to, existing on, or connected with the outside or outer part of something',
      synonyms: ['outer', 'outward', 'exterior'],
      antonyms: ['internal', 'inner', 'interior'],
      exampleSentences: [
        { en: 'The skin acts as a protective barrier against external bacteria.', ko: '피부는 외부 박테리아에 대항하는 보호막 역할을 한다.' },
        { en: 'Many companies rely on external funding to expand their operations.', ko: '많은 기업들이 사업 확장을 위해 외부 자금 조달에 의존한다.' },
      ],
    }
  ),
  word('extinct', '멸종한', 7, 'adjective',
    ['현존하는', '살아 있는', '번성하는', '풍부한', '흔한', '활발한', '건재한', '유행하는', '생존하는', '번성한'],
    tips({
      etymology: '라틴어 exstinguere에서 유래하여 \'불을 끄다\'라는 의미가 \'생명의 불꽃이 꺼진\' 상태로 확장되었습니다.',
      visual: '박물관에 전시된 거대한 공룡 뼈대와 텅 빈 둥지를 상상해 보세요.',
      soundAlike: '본능을 뜻하는 instinct와 발음이 비슷하지만, ex-는 밖으로 나가 사라진 느낌을 줍니다.',
      context: '환경 파괴나 기후 변화로 인해 특정 동식물이 지구상에서 완전히 사라질 때 주로 쓰입니다.',
      synonymAntonym: 'vanished와 유사하며, 현재 존재함을 뜻하는 extant와는 정반대의 개념입니다.',
    }),
    {
      definition: 'no longer existing or living in the world; having no living representative',
      synonyms: ['vanished', 'defunct', 'dead'],
      antonyms: ['living', 'thriving', 'extant'],
      exampleSentences: [
        { en: 'The dodo bird became completely gone from the earth in the late 17th century.', ko: '도도새는 17세기 후반에 지구상에서 완전히 멸종되었습니다.' },
        { en: 'Scientists are studying why certain ancient civilizations became inactive and disappeared.', ko: '과학자들은 왜 특정 고대 문명들이 활동을 멈추고 사라졌는지 연구하고 있습니다.' },
      ],
    }
  ),
  word('extra', '추가의', 4, 'adjective',
    ['기본의', '필수의', '표준의', '보통의', '핵심적인', '최소한의', '포함된', '정해진', '고정된', '일상적인'],
    tips({
      etymology: '라틴어 \'extra\'에서 유래하여 \'범위 밖의 것\'이나 \'넘치는 것\'을 의미하게 되었습니다.',
      visual: '피자에 치즈를 한 움큼 더 얹어 풍성해진 모습을 상상해 보세요.',
      soundAlike: '영화 촬영장의 \'엑스트라\' 배우들은 주연 외에 추가로 투입된 인원들입니다.',
      context: '식당에서 반찬을 더 요청하거나 서비스 시간을 더 받을 때 자주 쓰입니다.',
      synonymAntonym: 'additional과 비슷하며, 꼭 필요한 기본을 뜻하는 basic과는 반대됩니다.',
    }),
    {
      definition: 'added to an existing or usual amount',
      synonyms: ['additional', 'supplementary', 'spare'],
      antonyms: ['basic', 'standard', 'essential'],
      exampleSentences: [
        { en: 'We need more time to complete the report by Friday.', ko: '금요일까지 보고서를 완성하려면 추가 시간이 필요합니다.' },
        { en: 'The hotel provides blankets for guests during the winter.', ko: '호텔은 겨울 동안 투숙객에게 추가 담요를 제공합니다.' },
      ],
    }
  ),
  word('extraordinary', '비범한', 10, 'adjective',
    ['평범한', '흔한', '보통의', '일상적인', '지루한', '단조로운', '예상 가능한', '무난한', '따분한', '진부한'],
    tips({
      etymology: '접두사 extra-(~을 벗어난)와 ordinary(보통의)가 결합하여 일반적인 범위를 넘어섰다는 의미를 가집니다.',
      visual: '수많은 회색 돌들 사이에 홀로 눈부시게 빛나는 다이아몬드를 상상해 보세요.',
      soundAlike: '익스트라(Extra)가 붙어 일반적인 오디너리(Ordinary)보다 훨씬 더 특별한 느낌을 줍니다.',
      context: '주로 사람의 재능, 용기, 혹은 자연경관이 믿기 힘들 정도로 뛰어날 때 사용합니다.',
      synonymAntonym: 'remarkable과 비슷하며, 지극히 평범함을 뜻하는 mediocre와는 반대되는 개념입니다.',
    }),
    {
      definition: 'highly exceptional or remarkable in a way that deviates from what is common',
      synonyms: ['remarkable', 'exceptional', 'phenomenal'],
      antonyms: ['ordinary', 'commonplace', 'mediocre'],
      exampleSentences: [
        { en: 'The young pianist displayed an amazing talent that far exceeded his peers.', ko: '그 어린 피아니스트는 또래를 훨씬 능가하는 비범한 재능을 보여주었다.' },
        { en: 'Scientists are investigating the rare phenomenon that occurred during the solar eclipse.', ko: '과학자들은 일식 동안 발생한 그 비범한 현상을 조사하고 있다.' },
      ],
    }
  ),
  word('eyebrow', '눈썹', 5, 'noun',
    ['이마', '코', '입', '귀', '볼', '턱', '속눈썹', '눈', '머리카락', '수염'],
    tips({
      etymology: 'eye(눈)와 brow(이마/가장자리)가 합쳐져 눈의 윗부분을 뜻하게 되었습니다.',
      visual: '눈 바로 위에서 아치형으로 자라나 표정을 결정짓는 털의 선을 상상하세요.',
      soundAlike: '아이브로우라고 발음하며, 눈알을 뜻하는 eyeball과 헷갈리지 않도록 주의하세요.',
      context: '놀라거나 의심스러울 때 한쪽을 치켜올리는 동작과 자주 쓰입니다.',
      synonymAntonym: 'brow와 같은 뜻으로 쓰이며, 속눈썹인 eyelash와는 위치가 다릅니다.',
    }),
    {
      definition: 'the line of short hairs growing on the ridge of the face above the eye socket',
      synonyms: ['brow', 'supercilium', 'brow ridge'],
      antonyms: ['eyelash', 'cheek', 'forehead'],
      exampleSentences: [
        { en: 'She shaped her eyebrows at the salon.', ko: '그녀는 미용실에서 눈썹을 다듬었다.' },
        { en: 'He raised his eyebrows in disbelief.', ko: '그는 믿을 수 없다는 듯 눈썹을 치켜올렸다.' },
      ],
    }
  ),
  word('facilitate', '쉽게 하다', 8, 'verb',
    ['어렵게 하다', '방해하다', '막다', '지연시키다', '복잡하게 하다', '혼란시키다', '저지하다', '늦추다', '중단하다', '거절하다'],
    tips({
      etymology: '라틴어 facilis(쉬운)에서 유래하여 어떤 일을 하기 쉬운 상태로 만든다는 의미입니다.',
      visual: '복잡하게 엉킨 실타래를 누군가 옆에서 가지런히 풀어주어 작업이 빨라지는 장면을 상상하세요.',
      soundAlike: '퍼실리티(facility, 시설)와 발음이 비슷합니다. 좋은 시설은 업무를 더 쉽게 만들어줍니다.',
      context: '주로 비즈니스 미팅, 학습 과정, 또는 기술적 절차를 매끄럽게 진행할 때 자주 쓰입니다.',
      synonymAntonym: '도움을 주는 enable과 반대되는 방해의 hinder를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to make an action or process easier or more likely to happen',
      synonyms: ['expedite', 'assist', 'simplify'],
      antonyms: ['hinder', 'impede', 'obstruct'],
      exampleSentences: [
        { en: 'The new software was designed to help streamline the workflow and improve overall productivity.', ko: '새로운 소프트웨어는 작업 흐름을 원활하게 하고 전반적인 생산성을 높이기 위해 설계되었습니다.' },
        { en: 'Modern infrastructure can often help speed up the distribution of essential goods to remote areas.', ko: '현대적인 기반 시설은 종종 오지까지 필수 물자의 유통을 용이하게 하는 데 도움이 됩니다.' },
      ],
    }
  ),
  word('fact', '사실', 1, 'noun',
    ['거짓', '가설', '추측', '소문', '오해', '착각', '허구', '루머', '억측', '의견'],
    tips({
      etymology: '라틴어 \'factum\'에서 유래하여 \'이미 행해진 일\'이나 \'실제로 일어난 일\'을 의미합니다.',
      visual: '법정에서 판사가 증거물을 하나씩 확인하며 체크 표시를 하는 모습을 상상해 보세요.',
      soundAlike: '한국어에서도 \'팩트 체크\'라는 말을 자주 쓰듯, 흔들림 없는 진실을 떠올리면 쉽습니다.',
      context: '객관적인 데이터나 과학적 증거를 바탕으로 한 논의에서 가장 핵심이 되는 요소입니다.',
      synonymAntonym: 'truth와는 진실이라는 점이 비슷하지만, fiction이나 myth와는 정반대의 개념입니다.',
    }),
    {
      definition: 'a piece of information that is known to be consistent with objective reality and can be proven to be true',
      synonyms: ['truth', 'reality', 'certainty'],
      antonyms: ['fiction', 'lie', 'myth'],
      exampleSentences: [
        { en: 'The scientist gathered every available piece of evidence to support the established fact.', ko: '그 과학자는 확립된 사실을 뒷받침하기 위해 가능한 모든 증거를 수집했습니다.' },
        { en: 'Despite many rumors, the historical fact remains unchanged by public opinion.', ko: '많은 소문에도 불구하고, 역사적 사실은 대중의 의견에 의해 변하지 않고 남아 있습니다.' },
      ],
    }
  ),
  word('factory', '공장', 2, 'noun',
    ['농장', '병원', '창고', '사무실', '학교', '상가', '주택', '식당', '은행', '제조업'],
    tips({
      etymology: '라틴어 \'facere(만들다)\'에서 유래하여 물건을 만드는 장소를 뜻하게 되었습니다.',
      visual: '거대한 굴뚝에서 연기가 나고 컨베이어 벨트가 돌아가는 제조 시설을 상상해 보세요.',
      soundAlike: '발음이 \'팩토리\'이므로 물건을 \'팩(pack)\'에 담아 출고하는 \'토리(터)\'라고 기억하세요.',
      context: '산업 혁명이나 대량 생산을 논할 때 가장 핵심적으로 등장하는 장소 명사입니다.',
      synonymAntonym: 'plant나 mill과 비슷하게 쓰이며, 자연 상태인 nature와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A large building or group of buildings where goods are manufactured or assembled by machines.',
      synonyms: ['plant', 'mill', 'workshop'],
      antonyms: ['wilderness', 'nature', 'field'],
      exampleSentences: [
        { en: 'The automobile company decided to build a new assembly line at their local site.', ko: '자동차 회사는 현지 부지에 새로운 조립 라인 공장을 짓기로 결정했습니다.' },
        { en: 'Many workers are employed to operate the heavy machinery inside the industrial facility.', ko: '많은 노동자들이 산업 시설 내부의 중장비를 가동하기 위해 고용되었습니다.' },
      ],
    }
  ),
  word('faculty', '교수진', 9, 'noun',
    ['학생', '조교', '직원', '관리자', '동문', '연구원', '행정직', '학부생', '신입생', '수강생'],
    tips({
      etymology: '라틴어 \'facultas\'에서 유래하여 무언가를 할 수 있는 \'능력\'이나 \'권한\'을 가진 집단을 의미합니다.',
      visual: '대학교 강단 위에 위엄 있게 서 있는 교수님들이 단체 사진을 찍는 모습을 상상해 보세요.',
      soundAlike: '\'패컬티\' 발음이 \'패거리\'와 비슷하게 들릴 수 있으니, 지식인들의 패거리(집단)라고 연상해 보세요.',
      context: '대학 웹사이트의 \'Faculty\' 메뉴를 클릭하면 해당 학과의 교수님들 목록을 확인할 수 있습니다.',
      synonymAntonym: '교수진을 뜻하는 staff와 유사하며, 가르침을 받는 대상인 students와는 반대 개념입니다.',
    }),
    {
      definition: 'the collective group of teachers and professors at an educational institution',
      synonyms: ['professors', 'academics', 'staff'],
      antonyms: ['students', 'pupils', 'learners'],
      exampleSentences: [
        { en: 'The university is proud of its world-class faculty members who have won numerous awards.', ko: '그 대학교는 수많은 상을 받은 세계적인 수준의 교수진을 자랑스럽게 여깁니다.' },
        { en: 'A meeting was held to discuss the new curriculum with the entire arts faculty.', ko: '새로운 커리큘럼을 논의하기 위해 예술 학부 교수진 전체와 회의가 열렸습니다.' },
      ],
    }
  ),
  word('fade', '바래다', 6, 'verb',
    ['선명해지다', '진해지다', '밝아지다', '뚜렷해지다', '생생해지다', '강해지다', '두드러지다', '돋보이다', '빛나다', '번쩍이다'],
    tips({
      etymology: '중세 영어 \'faden\'에서 유래했으며, \'시들다\' 또는 \'창백해지다\'라는 의미를 담고 있습니다.',
      visual: '햇볕에 오래 둔 옷의 색깔이 점점 옅어져서 하얗게 변하는 모습을 상상해 보세요.',
      soundAlike: '\'페이드\'라고 발음하며, 골프에서 공이 옆으로 휘며 힘이 빠지는 \'페이드 샷\'을 떠올리면 쉽습니다.',
      context: '주로 색깔이 연해지거나, 소리가 작아지거나, 기억이 희미해질 때 광범위하게 사용됩니다.',
      synonymAntonym: '색이 바래는 것은 vanish와 비슷하고, 반대로 색이 진해지는 것은 brighten과 대조됩니다.',
    }),
    {
      definition: 'to gradually grow faint, disappear, or lose intensity and brightness',
      synonyms: ['dissolve', 'evaporate', 'wither'],
      antonyms: ['flourish', 'sharpen', 'brighten'],
      exampleSentences: [
        { en: 'The bright colors of the curtains began to disappear after years of exposure to direct sunlight.', ko: '직사광선에 수년간 노출된 후 커튼의 밝은 색상들이 바래기 시작했습니다.' },
        { en: 'Memories of that summer evening will slowly diminish as time goes by.', ko: '그 여름 밤의 기억들은 시간이 흐름에 따라 천천히 희미해질 것입니다.' },
      ],
    }
  ),
  word('fail', '실패하다', 3, 'verb',
    ['성공하다', '이기다', '달성하다', '통과하다', '합격하다', '승리하다', '만족시키다', '해내다', '이루다', '극복하다'],
    tips({
      etymology: '라틴어 \'fallere(속이다, 실망시키다)\'에서 유래하여 기대에 미치지 못하거나 멈추는 것을 의미합니다.',
      visual: '시험지 위에 커다란 빨간색 \'F\' 학점이 적혀 있는 모습을 상상해 보세요.',
      soundAlike: '\'패일\'이라고 발음되는데, 일이 잘 안 풀려 얼굴이 \'창백하게 패인\' 모습을 연상하세요.',
      context: '시험에 떨어지거나, 기계가 작동을 멈추거나, 기대했던 결과가 나오지 않을 때 주로 쓰입니다.',
      synonymAntonym: '성공을 뜻하는 succeed와 반대되는 개념으로, 목표에 도달하지 못했음을 나타냅니다.',
    }),
    {
      definition: 'to be unsuccessful in achieving a goal or to stop functioning properly',
      synonyms: ['collapse', 'flounder', 'deteriorate'],
      antonyms: ['succeed', 'triumph', 'flourish'],
      exampleSentences: [
        { en: 'Many small businesses struggle and eventually close because they lack enough funding.', ko: '많은 소규모 기업들이 자금 부족으로 고군분투하다 결국 문을 닫습니다.' },
        { en: 'The braking system might stop working if the fluid level drops too low.', ko: '액체 수위가 너무 낮아지면 제동 장치가 제대로 작동하지 않을 수 있습니다.' },
      ],
    }
  ),
  word('faint', '기절하다', 7, 'verb',
    ['깨어나다', '의식하다', '정신차리다', '회복하다', '일어나다', '자각하다', '부활하다', '눈뜨다', '소생하다', '반응하다'],
    tips({
      etymology: '고대 프랑스어 \'feindre\'에서 유래했으며, 원래 \'거짓 행동을 하다\'나 \'기력이 다하다\'라는 의미에서 점차 의식을 잃는 상태로 변화했습니다.',
      visual: '더운 여름날 갑자기 눈앞이 캄캄해지며 바닥으로 쓰러지는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'페인트\' 냄새가 너무 독해서 머리가 어지럽고 \'기절할\' 것 같다고 연상해 보세요.',
      context: '주로 공기가 희박하거나, 너무 놀랐을 때, 혹은 영양 부족으로 인해 잠시 의식을 잃는 상황에서 사용됩니다.',
      synonymAntonym: 'pass out과 같은 의미로 쓰이며, 반대로 의식을 되찾는 것은 regain consciousness라고 합니다.',
    }),
    {
      definition: 'to suddenly lose consciousness for a short period, usually due to a lack of oxygen or a physical shock',
      synonyms: ['pass out', 'black out', 'swoon'],
      antonyms: ['awaken', 'revive', 'recover'],
      exampleSentences: [
        { en: 'The heat in the crowded room was so intense that several people began to feel lightheaded and eventually collapsed.', ko: '붐비는 방 안의 열기가 너무 심해서 몇몇 사람들이 어지러움을 느끼기 시작하더니 결국 기절했습니다.' },
        { en: 'She nearly lost consciousness when she heard the shocking news about the accident.', ko: '그녀는 사고에 관한 충격적인 소식을 들었을 때 거의 기절할 뻔했습니다.' },
      ],
    }
  ),
  word('fair', '공정한', 4, 'adjective',
    ['불공정한', '편파적인', '치우친', '불공평한', '편애하는', '불균형한', '불리한', '차별적인', '편향된', '부당한'],
    tips({
      etymology: '고대 영어 fæger에서 유래하여 \'아름다운\', \'즐거운\'이라는 뜻에서 \'적절한\', \'공평한\'이라는 의미로 확장되었습니다.',
      visual: '심판이 양쪽 팀에게 똑같은 규칙을 적용하며 엄지손가락을 치켜세우는 모습을 상상해 보세요.',
      soundAlike: '축제나 박람회를 뜻하는 \'페어\'와 발음이 같으니, 축제에서는 모두가 즐겁고 공정하게 놀아야 한다고 연상하세요.',
      context: '스포츠 경기나 법정, 혹은 형제끼리 간식을 나눌 때 가장 중요하게 쓰이는 단어입니다.',
      synonymAntonym: 'just와는 유의어 관계이며, 반대로 한쪽으로 치우친 unfair와는 반의어 관계입니다.',
    }),
    {
      definition: 'treating people equally without favoritism or discrimination',
      synonyms: ['just', 'equitable', 'impartial'],
      antonyms: ['unfair', 'biased', 'prejudiced'],
      exampleSentences: [
        { en: 'The referee made a balanced decision that seemed reasonable to both teams.', ko: '심판은 양 팀 모두에게 합리적으로 보이는 공정한 결정을 내렸습니다.' },
        { en: 'Every citizen deserves a neutral trial regardless of their social status.', ko: '모든 시민은 사회적 지위에 상관없이 공정한 재판을 받을 자격이 있습니다.' },
      ],
    }
  ),
  word('fall', '떨어지다', 1, 'verb',
    ['오르다', '뛰다', '일어서다', '솟다', '치솟다', '상승하다', '올라가다', '급상승하다', '도약하다', '뻗다'],
    tips({
      etymology: '고대 영어 feallan에서 유래하여 중력에 의해 아래로 내려가는 움직임을 뜻하게 되었습니다.',
      visual: '나무에서 빨간 사과가 바닥으로 툭 떨어지는 중력의 법칙을 상상해 보세요.',
      soundAlike: '발음이 \'폴\'과 비슷하니, 웅덩이에 \'폴\'당 빠지거나 떨어지는 소리를 연상하세요.',
      context: '계절인 가을도 낙엽이 떨어지는 시기라 같은 단어를 사용한다는 점을 기억하면 쉽습니다.',
      synonymAntonym: '위에서 아래로 내려가는 drop과 반대로 위로 솟구치는 rise를 짝지어 외우세요.',
    }),
    {
      definition: 'to move from a higher to a lower level rapidly and without control',
      synonyms: ['drop', 'descend', 'plummet'],
      antonyms: ['rise', 'ascend', 'climb'],
      exampleSentences: [
        { en: 'Watch out or you might slip on the ice and land hard on the ground.', ko: '조심하지 않으면 얼음 위에서 미끄러져 바닥에 세게 넘어질 수도 있어요.' },
        { en: 'The colorful leaves begin to come down from the trees as soon as autumn arrives.', ko: '가을이 오자마자 알록달록한 잎들이 나무에서 떨어지기 시작합니다.' },
      ],
    }
  ),
  word('false', '거짓의', 5, 'adjective',
    ['참된', '진실의', '올바른', '정확한', '사실의', '진짜', '타당한', '맞는', '검증된', '입증된'],
    tips({
      etymology: '라틴어 \'fallere(속이다)\'에서 유래하여, 사실이 아닌 것으로 남을 속인다는 의미를 담고 있습니다.',
      visual: '시험지 위에 빨간색으로 크게 그어진 \'X\' 표시나 거짓말을 할 때 길어지는 피노키오의 코를 상상해 보세요.',
      soundAlike: '\'폴스\'라고 발음되는데, 무언가 \'폴폴\' 날아가 버리는 가벼운 거짓말을 떠올리면 쉽습니다.',
      context: '뉴스에서 가짜 정보를 다룰 때 \'false information\'이라는 표현으로 자주 등장합니다.',
      synonymAntonym: '진실을 뜻하는 true와 반대되며, 인위적인 느낌의 artificial과 비슷한 맥락에서 쓰이기도 합니다.',
    }),
    {
      definition: 'not in accordance with truth or reality; intentionally untrue or incorrect',
      synonyms: ['untrue', 'incorrect', 'fake'],
      antonyms: ['true', 'accurate', 'genuine'],
      exampleSentences: [
        { en: 'The witness provided a false statement to the police during the investigation.', ko: '그 증인은 조사 중에 경찰에게 거짓 진술을 했다.' },
        { en: 'Many people were misled by the false advertising of the new product.', ko: '많은 사람들이 신제품의 허위 광고에 속았다.' },
      ],
    }
  ),
  word('famous', '유명한', 2, 'adjective',
    ['무명의', '알려지지 않은', '익명의', '이름 없는', '평범한', '흔한', '보통의', '저명하지 않은', '주목받지 못한', '무관심한'],
    tips({
      etymology: '라틴어 \'fama(평판, 소문)\'에서 유래하여 많은 사람의 입에 오르내린다는 의미를 담고 있습니다.',
      visual: '레드카펫 위에서 수많은 카메라 플래시를 받으며 걷고 있는 연예인의 모습을 상상해 보세요.',
      soundAlike: '\'페이머스\' 발음이 \'패임(Fame)이 쓰윽\' 스며든다고 생각하면 명성이 퍼지는 느낌이 납니다.',
      context: '주로 긍정적인 명성을 가진 인물이나 장소를 묘사할 때 사용하며, 부정적인 경우는 notorious를 씁니다.',
      synonymAntonym: 'well-known과 유사하며, 대중에게 전혀 알려지지 않은 unknown과는 반대되는 개념입니다.',
    }),
    {
      definition: 'recognized or celebrated by a large number of people across different places',
      synonyms: ['renowned', 'celebrated', 'prominent'],
      antonyms: ['obscure', 'unknown', 'anonymous'],
      exampleSentences: [
        { en: 'The city is widely recognized for its ancient architecture and historic landmarks.', ko: '그 도시는 고대 건축물과 역사적 명소들로 널리 유명합니다.' },
        { en: 'Many talented artists struggle for years before they finally become successful and recognized.', ko: '많은 재능 있는 예술가들이 마침내 성공하고 유명해지기 전까지 수년 동안 고군분투합니다.' },
      ],
    }
  ),
  word('fan', '팬', 3, 'noun',
    ['안티', '비평가', '선풍기', '부채', '바람', '냉방', '무관심한 사람', '경쟁팀', '반대자', '적'],
    tips({
      etymology: '열광적인 사람을 뜻하는 fanatic의 줄임말에서 유래했습니다.',
      visual: '좋아하는 가수의 콘서트장에서 야광봉을 흔들며 환호하는 관중을 상상해 보세요.',
      soundAlike: '프라이팬(pan)과 발음이 비슷하지만, f 발음에 주의하여 \'팬\'이라고 발음합니다.',
      context: '스포츠 경기나 연예계 뉴스에서 특정 인물을 지지하는 사람을 지칭할 때 자주 쓰입니다.',
      synonymAntonym: '열렬한 지지자를 뜻하는 devotee와 반대되는 개념인 critic을 함께 기억하세요.',
    }),
    {
      definition: 'an enthusiastic devotee or follower of a particular person, sport, or activity',
      synonyms: ['admirer', 'supporter', 'enthusiast'],
      antonyms: ['critic', 'opponent', 'detractor'],
      exampleSentences: [
        { en: 'Thousands of people gathered at the stadium to cheer for their favorite team.', ko: '수천 명의 사람들이 자신이 가장 좋아하는 팀을 응원하기 위해 경기장에 모였습니다.' },
        { en: 'She has been a loyal follower of this rock band since their debut album.', ko: '그녀는 이 록 밴드의 데뷔 앨범 때부터 충성스러운 지지자였습니다.' },
      ],
    }
  ),
  word('fancy', '공상', 6, 'noun',
    ['현실', '사실', '실제', '진실', '경험', '관찰', '증거', '객관', '실재', '현실감'],
    tips({
      etymology: '그리스어 phantasia에서 유래하여 마음속에 나타나는 환상이나 이미지를 뜻하게 되었습니다.',
      visual: '구름 위에 떠 있는 화려한 성이나 현실에 없는 유니콘을 상상하는 모습을 그려보세요.',
      soundAlike: '팬시(fancy) 문구점에 있는 화려하고 아기자기한 물건들은 상상력을 자극합니다.',
      context: '문학이나 일상 대화에서 논리적인 생각보다는 창의적이고 비현실적인 생각을 표현할 때 쓰입니다.',
      synonymAntonym: '상상력을 뜻하는 imagination과 가깝고, 딱딱한 사실인 reality와는 반대됩니다.',
    }),
    {
      definition: 'An image or idea created by the imagination rather than by reason or experience.',
      synonyms: ['imagination', 'notion', 'fantasy'],
      antonyms: ['reality', 'actuality', 'fact'],
      exampleSentences: [
        { en: 'The child\'s mind was filled with a wild fancy about dragons living in the attic.', ko: '아이의 마음은 다락방에 용이 살고 있다는 엉뚱한 공상으로 가득 차 있었다.' },
        { en: 'It was just a passing fancy that had no basis in the real world.', ko: '그것은 현실 세계에 근거가 없는 그저 지나가는 공상일 뿐이었다.' },
      ],
    }
  ),
  word('fantastic', '환상적인', 1, 'adjective',
    ['형편없는', '지루한', '평범한', '실제의', '현실적인', '단조로운', '따분한', '진부한', '엉망인', '끔찍한'],
    tips({
      etymology: '그리스어 \'phantastikos\'에서 유래하여 상상 속에서나 볼 법한 놀라운 상태를 의미합니다.',
      visual: '밤하늘에 화려하게 터지는 불꽃놀이나 마법 같은 풍경을 떠올려 보세요.',
      soundAlike: '팬(fan)들이 타스틱(tastic)하게 환호하는 공연장의 열기를 상상해 보세요.',
      context: '주로 기대 이상의 성과를 냈거나 날씨가 매우 좋을 때 감탄사처럼 사용됩니다.',
      synonymAntonym: '매우 훌륭한(wonderful)과 끔찍한(terrible)을 대조하여 기억하면 쉽습니다.',
    }),
    {
      definition: 'extraordinarily good, impressive, or like something from a dream',
      synonyms: ['wonderful', 'marvelous', 'excellent'],
      antonyms: ['terrible', 'ordinary', 'awful'],
      exampleSentences: [
        { en: 'The view from the top of the mountain was absolutely breathtaking and wonderful.', ko: '산 정상에서 본 풍경은 정말 숨이 막힐 정도로 환상적이었다.' },
        { en: 'She did a marvelous job on her final presentation and received a standing ovation.', ko: '그녀는 기말 발표를 환상적으로 해내어 기립 박수를 받았다.' },
      ],
    }
  ),
  word('far', '먼', 2, 'adverb',
    ['가까운', '인접한', '근처의', '밀접한', '바로옆', '직전의', '당장의', '인근의', '좁은', '붙어있는'],
    tips({
      etymology: '고대 영어 feorr에서 유래하여 공간이나 시간상의 큰 간격을 의미하게 되었습니다.',
      visual: '지평선 끝에 아주 작게 보이는 자동차나 배의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'파\'와 비슷하니, 골프에서 공을 멀리 \'파\'란히 날려 보내는 장면을 떠올려 보세요.',
      context: '거리뿐만 아니라 \'far better\'처럼 정도가 훨씬 심함을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'distant와 유사하며, 바로 옆을 뜻하는 near와는 반대되는 개념입니다.',
    }),
    {
      definition: 'at, to, or by a great distance in space or time',
      synonyms: ['distant', 'remote', 'away'],
      antonyms: ['near', 'close', 'nearby'],
      exampleSentences: [
        { en: 'The lighthouse is located across the ocean, too away for us to see clearly.', ko: '등대는 바다 너머 아주 멀리 위치해 있어서 우리가 명확히 볼 수 없습니다.' },
        { en: 'How much further do we have to walk before we reach the mountain peak?', ko: '산 정상에 도착하려면 얼마나 더 멀리 걸어가야 하나요?' },
      ],
    }
  ),
  word('fare', '요금', 7, 'noun',
    ['무료', '할인', '환불', '보상', '공정', '성과', '진행', '먹다', '지내다', '여행'],
    tips({
      etymology: '고대 영어 \'faran(가다, 여행하다)\'에서 유래하여 여행을 위해 지불하는 비용이라는 의미로 발전했습니다.',
      visual: '버스나 지하철 입구에 있는 단말기에 카드를 찍으며 숫자가 찍히는 장면을 상상해 보세요.',
      soundAlike: '박람회를 뜻하는 fair와 발음이 같지만, 돈과 관련된 상황에서는 fare를 씁니다.',
      context: '대중교통 이용 시 지불하는 비용뿐만 아니라 택시비 등을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'fee나 charge와 비슷하지만, 주로 \'교통 수단\'의 이용료에 특화된 단어입니다.',
    }),
    {
      definition: 'the price paid by a passenger for traveling on public transport such as a bus, train, or airplane',
      synonyms: ['ticket price', 'charge', 'transportation cost'],
      antonyms: ['free admission', 'fine', 'refund'],
      exampleSentences: [
        { en: 'The bus driver asked the passengers to have the exact change ready for their travel cost.', ko: '버스 기사는 승객들에게 요금으로 낼 정확한 잔돈을 준비해달라고 요청했습니다.' },
        { en: 'Train prices have increased significantly over the last decade due to rising fuel costs.', ko: '연료비 상승으로 인해 지난 10년 동안 기차 요금이 상당히 올랐습니다.' },
      ],
    }
  ),
  word('fascinate', '매혹하다', 4, 'verb',
    ['질리게 하다', '싫증나게 하다', '밀어내다', '무관심하게 하다', '지루하게 하다', '역겹게 하다', '외면하다', '무시하다', '싫어하게 하다', '불쾌하게 하다'],
    tips({
      etymology: '라틴어 \'fascinare\'에서 유래했으며, 과거에는 마법을 걸어 사람을 홀리는 행위를 의미했습니다.',
      visual: '화려한 마술 공연을 보며 눈을 떼지 못하고 넋이 나간 관객들의 표정을 상상해 보세요.',
      soundAlike: '\'패시네이트\' 발음이 \'패션(Fashion)에 있다\'와 비슷하므로, 멋진 패션에 매료된 상황을 떠올려보세요.',
      context: '주로 과학적 사실, 예술 작품, 혹은 누군가의 독특한 성격이 호기심을 강하게 자극할 때 사용합니다.',
      synonymAntonym: '매력을 끌어당기는 \'attract\'와 유의어이며, 지루하게 만드는 \'bore\'와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to attract and hold the attention and interest of someone intensely',
      synonyms: ['captivate', 'enchant', 'enthrall'],
      antonyms: ['bore', 'repel', 'disgust'],
      exampleSentences: [
        { en: 'The intricate details of the ancient map continue to interest and pull in historians from around the world.', ko: '그 고대 지도의 복잡한 세부 사항들은 전 세계 역사학자들을 계속해서 매료시키고 있습니다.' },
        { en: 'Space exploration stories always grab the imagination of young children who dream of becoming astronauts.', ko: '우주 탐험 이야기는 우주비행사를 꿈꾸는 어린 아이들의 상상력을 항상 사로잡습니다.' },
      ],
    }
  ),
  word('fasten', '잠그다, 고정하다', 5, 'verb',
    ['헐겁게', '느슨하게', '빠르게', '천천히', '곧', '이미', '직접', '간접적으로', '즉시', '뒤늦게'],
    tips({
      etymology: '고정된 상태를 뜻하는 fast에 \'만들다\'라는 의미의 접미사 en이 붙어 단단히 고정한다는 뜻이 되었습니다.',
      visual: '비행기 이착륙 시 좌석 벨트를 딸깍 소리 나게 채우는 승무원의 동작을 상상해 보세요.',
      soundAlike: '발음할 때 중간의 t가 묵음이 되어 \'패슨\'처럼 들리니 주의해서 익혀야 합니다.',
      context: '안전벨트나 단추를 채울 때, 혹은 물건을 벽에 고정할 때 주로 사용되는 표현입니다.',
      synonymAntonym: '고정하는 attach와 반대로 풀어주는 loosen을 함께 기억하면 기억에 오래 남습니다.',
    }),
    {
      definition: 'to make something stay firmly in a fixed position or to close a piece of clothing using buttons or a strap',
      synonyms: ['secure', 'attach', 'fix'],
      antonyms: ['loosen', 'detach', 'unfasten'],
      exampleSentences: [
        { en: 'Please make sure to secure your seatbelt before the plane takes off.', ko: '비행기가 이륙하기 전에 좌석 벨트를 단단히 매어 주십시오.' },
        { en: 'The carpenter used long screws to fix the wooden board to the wall.', ko: '목수는 나무 판자를 벽에 단단히 고정하기 위해 긴 나사를 사용했습니다.' },
      ],
    }
  ),
  word('fat', '살찐', 3, 'adjective',
    ['마른', '날씬한', '홀쭉한', '수척한', '가벼운', '얇은', '적은', '빈약한', '부족한', '빈'],
    tips({
      etymology: '고대 영어 fætt에서 유래하여 \'기름진\' 혹은 \'잘 먹인\' 상태를 의미하게 되었습니다.',
      visual: '동그랗고 통통하게 부풀어 오른 풍선이나 빵빵한 배를 연상해 보세요.',
      soundAlike: '발음이 \'패트\'와 비슷하므로, 패딩(padding) 점퍼 안에 솜이 꽉 차서 뚱뚱해진 모습을 떠올려 보세요.',
      context: '주로 사람이나 동물의 체격이 큰 상태를 묘사할 때 쓰이지만, 음식의 지방 함량을 말할 때도 쓰입니다.',
      synonymAntonym: '뚱뚱한 상태를 뜻하는 obese와 반대되는 날씬한 상태인 slim을 함께 기억하세요.',
    }),
    {
      definition: 'having a large amount of excess flesh or oil on the body',
      synonyms: ['obese', 'chubby', 'overweight'],
      antonyms: ['thin', 'slim', 'slender'],
      exampleSentences: [
        { en: 'The neighbor\'s cat has grown quite large and heavy after the winter.', ko: '이웃집 고양이는 겨울이 지난 후 꽤 크고 살이 쪘다.' },
        { en: 'Eating too many sugary snacks can make a person become overweight quickly.', ko: '설탕이 든 간식을 너무 많이 먹으면 사람이 금방 살이 찔 수 있다.' },
      ],
    }
  ),
  word('fatal', '치명적인', 10, 'adjective',
    ['무해한', '가벼운', '치유 가능한', '순한', '안전한', '건강한', '생명을 구하는', '이로운', '무난한', '사소한'],
    tips({
      etymology: '라틴어 \'fatum(운명)\'에서 유래하여, 피할 수 없는 죽음이나 운명적인 결말을 뜻하게 되었습니다.',
      visual: '독이 든 사과나 뱀의 날카로운 이빨처럼 생명을 위협하는 위험한 이미지를 떠올려 보세요.',
      soundAlike: '\'페이탈\' 발음이 \'폐(lung)를 털(탈)어버릴\' 정도로 숨쉬기 힘든 치명적인 상황을 연상해 보세요.',
      context: '의학적 사고, 교통사고, 혹은 사업상의 돌이킬 수 없는 중대한 실수를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '죽음을 부르는 deadly와 유의어이며, 생명을 살리는 life-saving과는 반대되는 개념입니다.',
    }),
    {
      definition: 'causing or leading inevitably to death or disastrous failure',
      synonyms: ['deadly', 'lethal', 'mortal'],
      antonyms: ['harmless', 'beneficial', 'curable'],
      exampleSentences: [
        { en: 'The driver suffered a fatal injury in the high-speed collision on the highway.', ko: '운전자는 고속도로에서의 고속 충돌 사고로 치명적인 부상을 입었습니다.' },
        { en: 'A fatal flaw in the software design allowed hackers to access private data easily.', ko: '소프트웨어 설계상의 치명적인 결함으로 인해 해커들이 개인 정보에 쉽게 접근할 수 있었습니다.' },
      ],
    }
  ),
  word('fate', '운명', 6, 'noun',
    ['우연', '선택', '자유의지', '결과', '비밀', '요금', '지방', '먼', '뚱뚱한', '늦은'],
    tips({
      etymology: '라틴어 \'fatum\'에서 유래했으며, 이는 \'말해진 것\' 즉 신이 이미 말해둔 결정된 일을 의미합니다.',
      visual: '거대한 실타래를 잣는 운명의 여신들이 인간의 삶이라는 실을 자르고 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 비슷한 \'faith(신념)\'와 연결하여, 신념을 가지고 자신의 운명을 받아들이는 모습을 떠올려 보세요.',
      context: '주로 비극적인 결말이나 인간의 힘으로 어찌할 수 없는 거대한 흐름을 이야기할 때 자주 쓰입니다.',
      synonymAntonym: 'destiny와 유사하지만 fate는 좀 더 피할 수 없는 숙명적인 뉘앙스가 강하며, 반대로는 free will이 있습니다.',
    }),
    {
      definition: 'the development of events beyond a person\'s control, regarded as determined by a supernatural power',
      synonyms: ['destiny', 'fortune', 'kismet'],
      antonyms: ['choice', 'free will', 'volition'],
      exampleSentences: [
        { en: 'The two long-lost friends met again by a strange twist of fate in a foreign country.', ko: '오랫동안 소식이 끊겼던 두 친구는 타국에서 기묘한 운명의 장난으로 다시 만났다.' },
        { en: 'Many ancient Greek tragedies explore the idea that no mortal can escape their preordained fate.', ko: '많은 고대 그리스 비극은 어떤 필멸자도 정해진 운명을 피할 수 없다는 아이디어를 탐구한다.' },
      ],
    }
  ),
  word('father', '아버지', 1, 'noun',
    ['어머니', '형제', '자녀', '조부', '삼촌', '이웃', '친구', '동료', '낯선 사람', '선생'],
    tips({
      etymology: '고대 영어 \'fæder\'에서 유래했으며, 라틴어 \'pater\'와 어원이 같아 유럽 언어들에서 비슷한 발음을 찾을 수 있습니다.',
      visual: '넥타이를 매고 퇴근하며 아이를 번쩍 들어 올리는 든든한 남자의 모습을 상상해 보세요.',
      soundAlike: '\'파더\'라고 발음할 때 \'파(Pa)\' 소리가 아빠를 부르는 친근한 소리와 닮았다고 생각하면 쉽습니다.',
      context: '가족 관계를 설명할 때 가장 기본이 되는 단어로, 가문의 시조나 창시자를 일컫기도 합니다.',
      synonymAntonym: '격식 있는 표현인 \'dad\'나 \'papa\'와 함께 외우고, 반대 성별인 \'mother\'를 세트로 기억하세요.',
    }),
    {
      definition: 'a male parent who has provided genetic material or who raises and nurtures a child',
      synonyms: ['dad', 'papa', 'patriarch'],
      antonyms: ['mother', 'daughter', 'son'],
      exampleSentences: [
        { en: 'My male parent taught me how to ride a bicycle in the park.', ko: '나의 아버지는 공원에서 나에게 자전거 타는 법을 가르쳐 주셨다.' },
        { en: 'He became a proud parent of a newborn baby last night.', ko: '그는 어젯밤 갓 태어난 아기의 자랑스러운 아버지가 되었다.' },
      ],
    }
  ),
  word('fault', '결함', 7, 'noun',
    ['장점', '완벽', '미덕', '칭찬', '성공', '보상', '이익', '정답', '친절', '용기'],
    tips({
      etymology: '라틴어 \'fallere(속이다, 실수하다)\'에서 유래하여 무언가 어긋나거나 잘못된 상태를 뜻하게 되었습니다.',
      visual: '매끄러운 도자기 표면에 가느다랗게 금이 가 있는 모습을 상상해 보세요.',
      soundAlike: '\'폴트\'라고 발음되는데, 테니스에서 서브를 실수했을 때 심판이 외치는 소리를 떠올리면 쉽습니다.',
      context: '기계의 오작동이나 사람의 실수, 혹은 지질학적 단층을 설명할 때도 자주 쓰입니다.',
      synonymAntonym: '완벽함을 뜻하는 perfection과 대조되며, 유의어로는 flaw가 대표적입니다.',
    }),
    {
      definition: 'a flaw or imperfection in a person\'s character or in an object',
      synonyms: ['defect', 'flaw', 'shortcoming'],
      antonyms: ['strength', 'merit', 'perfection'],
      exampleSentences: [
        { en: 'Engineers identified a major mechanical flaw that caused the system to fail.', ko: '엔지니어들은 시스템 고장을 일으킨 주요한 기계적 결함을 찾아냈습니다.' },
        { en: 'It is not your responsibility even if the plan does not work out as expected.', ko: '계획이 예상대로 풀리지 않더라도 그것은 당신의 잘못이 아닙니다.' },
      ],
    }
  ),
  word('favor', '호의', 4, 'noun',
    ['적의', '원한', '무관심', '거절', '혐오', '질투', '비난', '방해', '무시', '냉대'],
    tips({
      etymology: '라틴어 favere(친절하게 대하다)에서 유래하여 누군가를 돕거나 지지하는 마음을 뜻합니다.',
      visual: '어려운 짐을 들고 가는 사람을 위해 문을 열어주는 친절한 이웃의 미소를 떠올려 보세요.',
      soundAlike: '\'페이버\'는 \'페이(Pay) + 버(버리다)\'와 비슷하게 들리는데, 대가를 바라지 않고 호의를 베풀어 돈 계산을 버린 상황을 연상하세요.',
      context: '주로 \'Do me a favor(부탁 하나 들어줘)\'라는 표현으로 일상 대화에서 가장 많이 쓰입니다.',
      synonymAntonym: '친절을 뜻하는 kindness와 비슷하지만, 반대로 악의를 뜻하는 malice와는 대조적입니다.',
    }),
    {
      definition: 'a kind or helpful act that somebody does for another person out of goodwill',
      synonyms: ['kindness', 'benefit', 'service'],
      antonyms: ['disfavor', 'hostility', 'malice'],
      exampleSentences: [
        { en: 'Could you do me a small favor and pick up my mail while I am away?', ko: '제가 없는 동안 제 우편물을 좀 챙겨주는 작은 호의를 베풀어 주실 수 있나요?' },
        { en: 'The judge showed favor toward the defendant because of his sincere apology.', ko: '판사는 피고인의 진심 어린 사과 덕분에 그에게 호의를 보였습니다.' },
      ],
    }
  ),
  word('favorite', '가장 좋아하는', 2, 'adjective',
    ['싫어하는', '무관심한', '별로인', '역겨운', '밉상', '질색하는', '혐오하는', '미운', '싫은', '냉담한'],
    tips({
      etymology: '라틴어 \'favere(호의를 보이다)\'에서 유래하여, 특별히 더 아끼고 선호한다는 의미를 담고 있습니다.',
      visual: '수많은 인형들 중에서 가장 아끼는 곰 인형 하나를 품에 꼭 안고 있는 아이의 모습을 상상해 보세요.',
      soundAlike: '\'페이버릿\'의 앞부분이 \'페이(pay)\'와 비슷하므로, 돈을 지불해서라도 꼭 갖고 싶은 제일 좋아하는 것이라고 기억하세요.',
      context: '음식, 색깔, 영화 등 여러 선택지 중에서 본인의 취향에 가장 잘 맞는 대상을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '가장 아끼는 것을 뜻하는 beloved와 반대로 가장 혐오하는 것을 뜻하는 detested를 함께 익혀두면 좋습니다.',
    }),
    {
      definition: 'preferred above all others of the same kind',
      synonyms: ['preferred', 'beloved', 'dearest'],
      antonyms: ['hated', 'disliked', 'loathed'],
      exampleSentences: [
        { en: 'Blue has always been my top choice for a bedroom wall color.', ko: '파란색은 항상 내가 가장 좋아하는 침실 벽지 색깔이었다.' },
        { en: 'The chef prepared his signature dish for the regular customers.', ko: '요리사는 단골 손님들을 위해 그가 가장 자신 있어 하는 요리를 준비했다.' },
      ],
    }
  ),
  word('fear', '두려움', 5, 'noun',
    ['용기', '안심', '담대함', '평정', '대담', '침착', '희망', '확신', '평온', '자신감'],
    tips({
      etymology: '고대 영어 fær에서 유래했으며, 원래 \'갑작스러운 위험\'이나 \'습격\'을 의미하던 단어가 감정적인 상태로 확장되었습니다.',
      visual: '어두운 방에서 무언가 튀어나올 것 같아 몸을 움츠리고 눈을 크게 뜬 사람의 표정을 상상해 보세요.',
      soundAlike: '피어(fear)오르는 안개 속에서 정체 모를 그림자를 보고 깜짝 놀라는 상황을 연상하면 쉽습니다.',
      context: '공포 영화를 보거나 중요한 시험 결과를 기다릴 때 느끼는 압박감과 불안을 표현할 때 자주 쓰입니다.',
      synonymAntonym: '유의어인 dread는 아주 강한 공포를, 반의어인 courage는 그 공포를 이겨내는 힘을 뜻합니다.',
    }),
    {
      definition: 'a distressing emotion aroused by impending danger, evil, or pain, whether the threat is real or imagined',
      synonyms: ['terror', 'dread', 'anxiety'],
      antonyms: ['courage', 'bravery', 'confidence'],
      exampleSentences: [
        { en: 'The sudden loud noise filled the young child with intense terror.', ko: '갑작스러운 큰 소음은 어린 아이를 강렬한 두려움으로 채웠다.' },
        { en: 'She had to overcome her deep anxiety of heights to climb the mountain.', ko: '그녀는 산에 오르기 위해 고소공포증을 극복해야만 했다.' },
      ],
    }
  ),
  word('feature', '특징', 6, 'noun',
    ['공통점', '단점', '얼굴', '외모', '기능', '요소', '속성', '성질', '특성', '장점'],
    tips({
      etymology: '라틴어 \'factura(형태, 형성)\'에서 유래하여 사물의 겉모양이나 두드러진 형태를 뜻하게 되었습니다.',
      visual: '스마트폰 광고에서 카메라 렌즈 부분만 밝게 빛나며 새로운 기능을 강조하는 장면을 상상해 보세요.',
      soundAlike: '\'피처\'폰 시절을 떠올려 보세요. 스마트폰 이전에 특별한 \'기능\'들로 승부하던 핸드폰들을 생각하면 쉽습니다.',
      context: '잡지 기사나 뉴스에서 특정 인물을 비중 있게 다룰 때 \'feature article\'이라는 표현을 자주 씁니다.',
      synonymAntonym: 'characteristic과 유사하지만, feature는 눈에 띄는 외형적 특징이나 제품의 기능을 말할 때 더 자주 쓰입니다.',
    }),
    {
      definition: 'a prominent or distinctive part, quality, or characteristic of something',
      synonyms: ['characteristic', 'attribute', 'trait'],
      antonyms: ['whole', 'totality', 'blank'],
      exampleSentences: [
        { en: 'The most unique aspect of this new car is its advanced safety system.', ko: '이 새 자동차의 가장 독특한 특징은 첨단 안전 시스템입니다.' },
        { en: 'Her large blue eyes are her most striking physical quality.', ko: '그녀의 커다란 파란 눈은 그녀의 가장 눈에 띄는 신체적 특징입니다.' },
      ],
    }
  ),
  word('fee', '수수료', 7, 'noun',
    ['무료', '할인', '환불', '보상', '팁', '할증', '세금', '공짜', '면제', '기부'],
    tips({
      etymology: '고대 영어 \'feoh\'에서 유래했으며, 원래는 가축이나 재산을 의미했습니다. 오늘날에는 특정 서비스에 대한 대가로 굳어졌습니다.',
      visual: '변호사 사무실이나 병원 접수처에서 결제하기 위해 신용카드를 내미는 장면을 상상해 보세요.',
      soundAlike: '\'피(blood)\'와 발음이 비슷합니다. 서비스를 받기 위해 내 피 같은 돈을 \'수수료\'로 낸다고 생각하면 쉽습니다.',
      context: '입학금, 진료비, 상담료 등 전문적인 서비스를 이용할 때 발생하는 비용을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'charge나 fare와 비슷하지만, 전문 서비스에 특화된 단어입니다. 반대로 공짜를 뜻하는 free와 대조됩니다.',
    }),
    {
      definition: 'a fixed sum of money paid to a person or organization in return for professional advice or services',
      synonyms: ['charge', 'fare', 'toll'],
      antonyms: ['refund', 'rebate', 'discount'],
      exampleSentences: [
        { en: 'The university increased the annual tuition for all incoming students this year.', ko: '대학교는 올해 모든 신입생의 연간 등록금을 인상했습니다.' },
        { en: 'You must pay a small processing to complete your application online.', ko: '온라인 신청을 완료하려면 소정의 처리 수수료를 지불해야 합니다.' },
      ],
    }
  ),
  word('feed', '먹이다', 4, 'verb',
    ['굶기다', '거절하다', '빼앗다', '금하다', '제한하다', '배고프게 하다', '굶주리다', '주지 않다', '말다', '단절하다'],
    tips({
      etymology: '고대 영어 \'fedan\'에서 유래했으며, \'음식\'을 뜻하는 \'food\'와 같은 뿌리를 공유합니다.',
      visual: '어미 새가 둥지에 있는 새끼 새들의 입에 벌레를 넣어주는 모습을 상상해 보세요.',
      soundAlike: '\'피드(feed)\' 발음이 \'피가 되고 살이 되게\' 먹인다는 느낌으로 기억하면 쉽습니다.',
      context: '동물에게 먹이를 주거나, 아기에게 젖을 먹일 때, 혹은 기계에 연료를 공급할 때도 쓰입니다.',
      synonymAntonym: 'nourish는 영양을 공급하며 기르는 것이고, starve는 반대로 굶주리게 방치하는 것입니다.',
    }),
    {
      definition: 'to provide nourishment or supply nutrients to a living being or a machine',
      synonyms: ['nourish', 'sustain', 'provision'],
      antonyms: ['starve', 'deprive', 'famish'],
      exampleSentences: [
        { en: 'The zookeeper goes to the enclosure every morning to provide meals to the lions.', ko: '사육사는 사자들에게 먹이를 주기 위해 매일 아침 우리로 갑니다.' },
        { en: 'Parents often wake up in the middle of the night to give milk to their hungry infants.', ko: '부모들은 종종 배고픈 아기들에게 우유를 먹이기 위해 한밤중에 일어납니다.' },
      ],
    }
  ),
];
