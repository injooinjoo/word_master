import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch17: VocabItem[] = [
  word('Abnegate', '포기하다', 9, 'verb',
    ['촉진하다', '장려하다', '채택하다', '옹호하다', '수용하다', '촉진', '장려', '채택', '옹호', '수용'],
    tips({
      etymology: 'ab(떨어져) + neg(부정) + -ate -> 스스로 포기하다',
      visual: '왕관을 내려놓고 물러나는 왕',
      soundAlike: '앱니게이트 = abnegation(포기)',
      context: 'He abnegated his claim to the throne.',
      synonymAntonym: '동의어: renounce, relinquish, 반의어: assert',
    }),
    {
      definition: 'to deny or renounce something, especially for oneself',
      wordDistractors: ['Abrogate', 'Abdicate', 'Navigate'],
      definitionDistractors: [
        'to formally cancel or repeal a law or agreement',
        'to formally give up a throne or high office',
        'to plan and direct the route of a journey',
      ],
      exampleSentences: [
        { en: 'He abnegated his claim to the throne.', ko: '그는 왕위에 대한 권리를 포기했다.' },
        { en: 'She abnegated worldly pleasures for a spiritual life.', ko: '그녀는 영적 삶을 위해 세속적 쾌락을 포기했다.' },
      ],
    }
  ),
  word('Abscond', '도망하다', 9, 'verb',
    ['등장하다', '출현하다', '남다', '잔류하다', '복귀하다', '등장', '출현', '잔류', '복귀', '남음'],
    tips({
      etymology: 'ab(떨어져) + scond(숨다) -> 몰래 달아나다',
      visual: '금고를 비우고 밤에 달아나는 실루엣',
      soundAlike: '앱스콘드 = absconding(도망)',
      context: 'The treasurer absconded with the funds.',
      synonymAntonym: '동의어: flee, escape, 반의어: remain',
    }),
    {
      definition: 'to leave hurriedly and secretly, especially to escape capture',
      wordDistractors: ['Desert', 'Evade', 'Abdicate'],
      definitionDistractors: [
        'to leave military duty without permission',
        'to escape or avoid something by cleverness',
        'to give up a throne or position formally',
      ],
      exampleSentences: [
        { en: 'The treasurer absconded with the funds.', ko: '재무담당자가 자금을 가지고 도망쳤다.' },
        { en: 'The suspect absconded before the police arrived.', ko: '용의자는 경찰이 도착하기 전에 도망쳤다.' },
      ],
    }
  ),
  word('Abstemious', '절제하는', 9, 'adjective',
    ['탐식하는', '과식하는', '사치스러운', '방탕한', '냉소적', '탐식', '과식', '사치', '방탕', '냉소'],
    tips({
      etymology: 'ab(떨어져) + tem(술) + -ious -> 술에서 멀리',
      visual: '접시에 조금만 담아 먹는 사람',
      soundAlike: '앱스티미어스 = abstemiousness(절제)',
      context: 'His abstemious lifestyle kept him healthy.',
      synonymAntonym: '동의어: temperate, moderate, 반의어: indulgent',
    }),
    {
      definition: 'not self-indulgent, especially regarding food and drink',
      wordDistractors: ['Anonymous', 'Ambiguous', 'Spontaneous'],
      definitionDistractors: [
        'having a name or identity that is unknown',
        'open to more than one interpretation',
        'showing or feeling mild displeasure',
      ],
      exampleSentences: [
        { en: 'His abstemious lifestyle kept him healthy.', ko: '그의 절제된 생활 방식이 그를 건강하게 유지했다.' },
        { en: 'She lived an abstemious life in the monastery.', ko: '그녀는 수도원에서 절제된 삶을 살았다.' },
      ],
    }
  ),
  word('Accede', '동의하다', 9, 'verb',
    ['거부하다', '저항하다', '반대하다', '거절하다', '배척하다', '거부', '저항', '반대', '거절', '배척'],
    tips({
      etymology: 'ac(향해) + ced(가다) -> 나아가다, 동의하다',
      visual: '계약서에 서명하는 손',
      soundAlike: '액시드 = accede to(동의하다)',
      context: 'The government finally acceded to the demands.',
      synonymAntonym: '동의어: consent, agree, 반의어: refuse',
    }),
    {
      definition: 'to agree to a demand, request, or treaty',
      wordDistractors: ['Exceed', 'Concede', 'Precede'],
      definitionDistractors: [
        'to be greater than a limit or amount',
        'to admit that something is true after resisting',
        'to come before something in time or order',
      ],
      exampleSentences: [
        { en: 'The government finally acceded to the demands.', ko: '정부가 마침내 요구에 동의했다.' },
        { en: 'He refused to accede to their terms.', ko: '그는 그들의 조건에 동의하기를 거부했다.' },
      ],
    }
  ),
  word('Acerbic', '신랄한', 9, 'adjective',
    ['부드러운', '상냥한', '우호적', '달콤한', '온건한', '부드러움', '상냥', '우호', '달콤', '온건'],
    tips({
      etymology: '라틴어 acerbus(쓴) -> 쓴맛의, 신랄한',
      visual: '레몬을 빨며 찡그리는 표정',
      soundAlike: '어서빅 = acerbity(신랄함)',
      context: 'Her acerbic wit left everyone speechless.',
      synonymAntonym: '동의어: sharp, biting, 반의어: mild',
    }),
    {
      definition: 'sharp and forthright in tone or manner; harshly critical',
      wordDistractors: ['Acidic', 'Arctic', 'Aerobic'],
      definitionDistractors: [
        'containing acid or having a sour taste',
        'relating to the polar regions',
        'relating to physical exercise that improves oxygen intake',
      ],
      exampleSentences: [
        { en: 'Her acerbic wit left everyone speechless.', ko: '그녀의 신랄한 재치에 모두가 입을 다물었다.' },
        { en: 'The critic was known for his acerbic reviews.', ko: '그 평론가는 신랄한 비평으로 유명했다.' },
      ],
    }
  ),
  word('Acquiesce', '묵인하다', 9, 'verb',
    ['저항하다', '반대하다', '거부하다', '싸우다', '이의 제기하다', '저항', '반대', '거부', '싸움', '이의'],
    tips({
      etymology: 'ac(향해) + quiesce(조용해지다) -> 조용히 받아들이다',
      visual: '한숨 쉬며 고개 끄덕이는 사람',
      soundAlike: '액퀴에스 = acquiescence(묵인)',
      context: 'He acquiesced to her decision reluctantly.',
      synonymAntonym: '동의어: comply, accept, 반의어: resist',
    }),
    {
      definition: 'to accept something reluctantly without protest',
      wordDistractors: ['Acquire', 'Require', 'Inquire'],
      definitionDistractors: [
        'to buy or obtain something',
        'to need something for a purpose',
        'to ask for information',
      ],
      exampleSentences: [
        { en: 'He acquiesced to her decision reluctantly.', ko: '그는 마지못해 그녀의 결정에 묵인했다.' },
        { en: 'The board acquiesced to the merger proposal.', ko: '이사회는 합병 제안에 묵인했다.' },
      ],
    }
  ),
  word('Adulterate', '혼합하다', 9, 'verb',
    ['순화하다', '정제하다', '청정 유지하다', '분리하다', '정수하다', '순화', '정제', '청정', '분리', '정수'],
    tips({
      etymology: 'ad(더해) + alter(다른) + -ate -> 다른 것을 섞다',
      visual: '술에 물 타는 상인',
      soundAlike: '어덜터레이트 = adulteration(혼합)',
      context: 'Never adulterate medicines with unknown substances.',
      synonymAntonym: '동의어: dilute, contaminate, 반의어: purify',
    }),
    {
      definition: 'to corrupt or debase by adding inferior substances',
      wordDistractors: ['Oscillate', 'Articulate', 'Emulate'],
      definitionDistractors: [
        'to move back and forth in a regular rhythm',
        'to express ideas clearly in speech',
        'to match or imitate a person or achievement',
      ],
      exampleSentences: [
        { en: 'Never adulterate medicines with unknown substances.', ko: '알 수 없는 물질로 약을 혼합하지 마라.' },
        { en: 'The wine was adulterated with cheap additives.', ko: '그 와인은 값싼 첨가물로 혼합되었다.' },
      ],
    }
  ),
  word('Aggrandize', '과대하다', 9, 'verb',
    ['축소하다', '폄하하다', '겸손해지다', '축소시키다', '감소시키다', '축소', '폄하', '겸손', '감소', '축소시킴'],
    tips({
      etymology: 'ag(강조) + grand(크다) + -ize -> 크게 만들다',
      visual: '자기 초상화를 거대하게 그리는 독재자',
      soundAlike: '어그랜다이즈 = aggrandizement(과대)',
      context: 'He sought to aggrandize his reputation.',
      synonymAntonym: '동의어: exaggerate, inflate, 반의어: diminish',
    }),
    {
      definition: 'to increase power, status, or wealth; to make something appear greater',
      wordDistractors: ['Amplify', 'Magnify', 'Quantify'],
      definitionDistractors: [
        'to increase the volume or strength of sound',
        'to make something appear larger than it is',
        'to express or measure the quantity of something',
      ],
      exampleSentences: [
        { en: 'He sought to aggrandize his reputation.', ko: '그는 자신의 명성을 과대하게 만들려 했다.' },
        { en: 'The ruler aggrandized his power through conquest.', ko: '그 통치자는 정복을 통해 자신의 권력을 확대했다.' },
      ],
    }
  ),
  word('Alacrity', '민첩', 9, 'noun',
    ['느림', '지연', '무기력', '마지못함', '꾸물거림', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '라틴어 alacritas(민첩) -> 빨리, 기꺼이',
      visual: '종소리와 함께 뛰어나가는 웨이터',
      soundAlike: '얼래크리티 = alacritous(민첩한)',
      context: 'She accepted the invitation with alacrity.',
      synonymAntonym: '동의어: eagerness, promptness, 반의어: reluctance',
    }),
    {
      definition: 'brisk and cheerful readiness to do something',
      wordDistractors: ['Velocity', 'Felicity', 'Complicity'],
      definitionDistractors: [
        'the speed of something in a given direction',
        'intense happiness or great pleasure',
        'involvement in a wrongful act',
      ],
      exampleSentences: [
        { en: 'She accepted the invitation with alacrity.', ko: '그녀는 민첩하게 초대를 수락했다.' },
        { en: 'The staff responded with alacrity to the emergency.', ko: '직원들이 비상사태에 민첩하게 대응했다.' },
      ],
    }
  ),
  word('Altruism', '이타주의', 9, 'noun',
    ['이기심', '자기중심', '욕심', '이기주의', '착취', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '프랑스어 altrui(다른 사람) + -ism -> 타인을 위한',
      visual: '가진 것을 나누어 주는 손',
      soundAlike: '얼트루이즘 = altruistic(이타적인)',
      context: 'His altruism inspired many volunteers.',
      synonymAntonym: '동의어: selflessness, generosity, 반의어: selfishness',
    }),
    {
      definition: 'the belief in or practice of disinterested concern for others',
      wordDistractors: ['Nepotism', 'Optimism', 'Skepticism'],
      definitionDistractors: [
        'the practice of favoring relatives in employment',
        'hopefulness and confidence about the future',
        'a doubting or questioning attitude',
      ],
      exampleSentences: [
        { en: 'His altruism inspired many volunteers.', ko: '그의 이타주의가 많은 자원봉사자들에게 영감을 주었다.' },
        { en: 'True altruism requires no expectation of reward.', ko: '진정한 이타주의는 보상에 대한 기대를 요구하지 않는다.' },
      ],
    }
  ),
  word('Anachronism', '시대착오', 9, 'noun',
    ['시대적 적합', '현대성', '적시성', '동시성', '정합성', '적합', '적시', '동시', '정합', '사과'],
    tips({
      etymology: 'ana(거꾸로) + chron(시간) + -ism -> 시대 뒤틀림',
      visual: '셰익스피어 연극에 스마트폰이 나오는 장면',
      soundAlike: '어내크로니즘 = anachronistic(시대착오적)',
      context: 'The sword in the film was an anachronism.',
      synonymAntonym: '동의어: chronological error, 반의어: contemporaneity',
    }),
    {
      definition: 'something belonging to a different period than the one being depicted',
      wordDistractors: ['Anomaly', 'Synonym', 'Antonym'],
      definitionDistractors: [
        'something that deviates from what is normal',
        'a word with the same meaning as another',
        'a word with the opposite meaning of another',
      ],
      exampleSentences: [
        { en: 'The sword in the film was an anachronism.', ko: '영화에 나온 검은 시대착오였다.' },
        { en: 'Wearing a wristwatch in an ancient Rome scene is an anachronism.', ko: '고대 로마 장면에서 손목시계를 차는 것은 시대착오이다.' },
      ],
    }
  ),
  word('Anathema', '저주', 9, 'noun',
    ['축복', '찬미', '영광', '선물', '축복받은 것', '축복받음', '사과', '책', '고양이', '개'],
    tips({
      etymology: '그리스어 anathema(바쳐진 것) -> 파문당한 것',
      visual: '성당에서 쫓겨나는 사람',
      soundAlike: '어내더머 = anathematize(저주하다)',
      context: 'Violence is anathema to peace.',
      synonymAntonym: '동의어: curse, abomination, 반의어: blessing',
    }),
    {
      definition: 'something or someone intensely disliked or loathed',
      wordDistractors: ['Anemia', 'Asthma', 'Trauma'],
      definitionDistractors: [
        'a condition marked by a shortage of red blood cells',
        'a respiratory condition causing breathing difficulty',
        'a deeply distressing or disturbing experience',
      ],
      exampleSentences: [
        { en: 'Violence is anathema to peace.', ko: '폭력은 평화에 대한 저주이다.' },
        { en: 'Dishonesty was anathema to his strict father.', ko: '부정직은 그의 엄격한 아버지에게 저주받은 것이었다.' },
      ],
    }
  ),
  word('Antediluvian', '대홍수 이전의', 9, 'adjective',
    ['현대적', '최신', '진보적', '새로운', '혁신적', '현대', '진보', '새로움', '혁신', '좋은'],
    tips({
      etymology: 'ante(이전) + diluv(홍수) + -ian -> 노아 홍수 이전',
      visual: '공룡과 함께 사는 원시인',
      soundAlike: '앤티딜루비언 = antediluvian times',
      context: 'His antediluvian views shocked the board.',
      synonymAntonym: '동의어: ancient, prehistoric, 반의어: modern',
    }),
    {
      definition: 'ridiculously old-fashioned or outdated',
      wordDistractors: ['Antiquated', 'Antisocial', 'Antiseptic'],
      definitionDistractors: [
        'old-fashioned or outdated',
        'avoiding social interaction',
        'free from germs or bacteria',
      ],
      exampleSentences: [
        { en: 'His antediluvian views shocked the board.', ko: '그의 구시대적 견해가 이사회를 충격에 빠뜨렸다.' },
        { en: 'She dismissed his antediluvian ideas about gender.', ko: '그녀는 성에 대한 그의 구시대적 생각을 일축했다.' },
      ],
    }
  ),
  word('Anthropocentric', '인간중심적', 9, 'adjective',
    ['생태중심적', '자연친화적', '동등한', '분산적', '다원적', '생태중심', '자연친화', '동등', '분산', '다원'],
    tips({
      etymology: 'anthropo(인간) + centr(중심) + -ic -> 인간이 중심',
      visual: '지구 중앙에 서 있는 인간 실루엣',
      soundAlike: '앤스로포센트릭 = anthropocentrism',
      context: 'We must overcome anthropocentric thinking.',
      synonymAntonym: '동의어: human-centered, 반의어: ecocentric',
    }),
    {
      definition: 'regarding humankind as the central or most important element of existence',
      wordDistractors: ['Egocentric', 'Ethnocentric', 'Geocentric'],
      definitionDistractors: [
        'thinking only of oneself',
        'evaluating other cultures by one\'s own standards',
        'having the earth as the center',
      ],
      exampleSentences: [
        { en: 'We must overcome anthropocentric thinking.', ko: '우리는 인간중심적 사고를 극복해야 한다.' },
        { en: 'Anthropocentric views often ignore environmental costs.', ko: '인간중심적 관점은 종종 환경 비용을 무시한다.' },
      ],
    }
  ),
  word('Antipathy', '반감', 9, 'noun',
    ['호감', '우정', '동정', '친근함', '애정', '친근', '사과', '책', '고양이', '개'],
    tips({
      etymology: 'anti(반대) + pathy(감정) -> 반대 감정',
      visual: '서로 등을 돌린 두 사람',
      soundAlike: '앤티퍼시 = antipathetic(반감 있는)',
      context: 'She felt deep antipathy toward him.',
      synonymAntonym: '동의어: hostility, aversion, 반의어: sympathy',
    }),
    {
      definition: 'a deep-seated feeling of dislike or aversion',
      wordDistractors: ['Empathy', 'Apathy', 'Sympathy'],
      definitionDistractors: [
        'the ability to understand another\'s feelings',
        'lack of interest or emotion',
        'feelings of pity and sorrow for another',
      ],
      exampleSentences: [
        { en: 'She felt deep antipathy toward him.', ko: '그녀는 그에게 깊은 반감을 느꼈다.' },
        { en: 'His antipathy for authority was well known.', ko: '그의 권위에 대한 반감은 잘 알려져 있었다.' },
      ],
    }
  ),
  word('Apotheosis', '신격화', 9, 'noun',
    ['폄하', '비난', '욕설', '모욕', '타락', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'apo(…으로) + theos(신) + -osis -> 신이 되다',
      visual: '인간이 신 전설에 올라가는 형상',
      soundAlike: '어포시오시스 = apotheosize(신격화하다)',
      context: 'The victory was the apotheosis of his career.',
      synonymAntonym: '동의어: deification, glorification, 반의어: vilification',
    }),
    {
      definition: 'the highest point of development; the elevation of someone to divine status',
      wordDistractors: ['Hypothesis', 'Thesis', 'Genesis'],
      definitionDistractors: [
        'a proposed explanation for a phenomenon',
        'a statement put forward for discussion',
        'the origin or coming into being of something',
      ],
      exampleSentences: [
        { en: 'The victory was the apotheosis of his career.', ko: '그 승리는 그의 경력의 신격화였다.' },
        { en: 'The film was the apotheosis of the director\'s art.', ko: '그 영화는 감독의 예술의 극치였다.' },
      ],
    }
  ),
  word('Approbation', '승인', 9, 'noun',
    ['비난', '거부', '반대', '불찬성', '경멸', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'ad(향해) + prob(시험) + -ation -> 시험 통과, 인정',
      visual: '만장일치로 들린 손',
      soundAlike: '어프로베이션 = approve(승인하다)',
      context: 'The plan met with general approbation.',
      synonymAntonym: '동의어: approval, endorsement, 반의어: disapproval',
    }),
    {
      definition: 'approval or praise, typically given formally',
      wordDistractors: ['Probation', 'Approximation', 'Propagation'],
      definitionDistractors: [
        'a period of supervised release instead of imprisonment',
        'a value or quantity that is nearly correct',
        'the spreading of something widely',
      ],
      exampleSentences: [
        { en: 'The plan met with general approbation.', ko: '그 계획은 전반적인 승인을 받았다.' },
        { en: 'She nodded in approbation of his proposal.', ko: '그녀는 그의 제안에 승인하며 고개를 끄덕였다.' },
      ],
    }
  ),
  word('Arbiter', '중재자', 9, 'noun',
    ['당사자', '편파적 관찰자', '참여자', '이해당사자', '편파', '참여', '당사', '편파적', '사과', '책'],
    tips({
      etymology: '라틴어 arbiter(증인, 판단자) -> 결정하는 자',
      visual: '양쪽을 바라보며 판결을 내리는 사람',
      soundAlike: '아비터 = arbitrate(중재하다)',
      context: 'The judge acted as arbiter in the dispute.',
      synonymAntonym: '동의어: mediator, judge, 반의어: partisan',
    }),
    {
      definition: 'a person who settles a dispute or has ultimate authority in a matter',
      wordDistractors: ['Arsonist', 'Architect', 'Ancestor'],
      definitionDistractors: [
        'a person who deliberately sets fire to property',
        'a person who designs buildings',
        'a person from whom one is descended',
      ],
      exampleSentences: [
        { en: 'The judge acted as arbiter in the dispute.', ko: '판사가 분쟁에서 중재자로 행동했다.' },
        { en: 'Fashion designers are often arbiters of taste.', ko: '패션 디자이너들은 종종 취향의 중재자이다.' },
      ],
    }
  ),
  word('Assuage', '완화하다', 9, 'verb',
    ['악화시키다', '증폭하다', '자극하다', '격화시키다', '부추기다', '악화', '증폭', '자극', '격화', '부추김'],
    tips({
      etymology: 'ad(향해) + suavis(달콤한) -> 달콤하게 하다',
      visual: '상처에 연고를 발라주는 손',
      soundAlike: '어스웨이지 = assuagement(완화)',
      context: 'Nothing could assuage her grief.',
      synonymAntonym: '동의어: soothe, alleviate, 반의어: aggravate',
    }),
    {
      definition: 'to make an unpleasant feeling less intense',
      wordDistractors: ['Persuade', 'Dissuade', 'Usurp'],
      definitionDistractors: [
        'to convince someone to do something',
        'to persuade someone not to do something',
        'to take a position of power illegally',
      ],
      exampleSentences: [
        { en: 'Nothing could assuage her grief.', ko: '아무것도 그녀의 슬픔을 완화할 수 없었다.' },
        { en: 'He took medicine to assuage the pain.', ko: '그는 통증을 완화하기 위해 약을 먹었다.' },
      ],
    }
  ),
  word('Atavism', '조상 반현', 9, 'noun',
    ['진화', '발전', '혁신', '진보', '새로움', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '라틴어 atavus(조상) + -ism -> 조상으로 돌아감',
      visual: '꼬리가 다시 나타난 사람',
      soundAlike: '앳터비즘 = atavistic(조상 반현의)',
      context: 'The extra toe was an atavism.',
      synonymAntonym: '동의어: throwback, reversion, 반의어: innovation',
    }),
    {
      definition: 'a reappearance of an ancestral characteristic after several generations',
      wordDistractors: ['Atheism', 'Automaton', 'Autism'],
      definitionDistractors: [
        'disbelief in the existence of God',
        'a machine that operates by itself',
        'a developmental condition affecting communication',
      ],
      exampleSentences: [
        { en: 'The extra toe was an atavism.', ko: '추가된 발가락은 조상 반현이었다.' },
        { en: 'Some consider his violent temper an atavism.', ko: '어떤 사람들은 그의 폭력적인 성질을 조상 반현으로 본다.' },
      ],
    }
  ),
  word('Avarice', '탐욕', 9, 'noun',
    ['관대함', '포기', '나눔', '만족', '겸손', '관대', '사과', '책', '고양이', '개'],
    tips({
      etymology: '라틴어 avarus(욕심 많은) -> 끝없는 욕심',
      visual: '금화 더미에 웅크린 드래곤',
      soundAlike: '애버리스 = avaricious(탐욕스러운)',
      context: 'Avarice drove him to ruin.',
      synonymAntonym: '동의어: greed, covetousness, 반의어: generosity',
    }),
    {
      definition: 'extreme greed for wealth or material gain',
      wordDistractors: ['Aperture', 'Adventure', 'Adverse'],
      definitionDistractors: [
        'an opening or hole, especially in a camera',
        'an unusual and exciting experience',
        'harmful or unfavorable',
      ],
      exampleSentences: [
        { en: 'Avarice drove him to ruin.', ko: '탐욕이 그를 파멸로 몰았다.' },
        { en: 'His avarice knew no bounds.', ko: '그의 탐욕은 한계가 없었다.' },
      ],
    }
  ),
  word('Axiomatic', '자명한', 9, 'adjective',
    ['의심스러운', '논쟁의 여지 있는', '불명확한', '증명 필요', '애매한', '의심', '논쟁', '불명확', '애매', '좋은'],
    tips({
      etymology: '그리스어 axioma(가치 있는 것) -> 증명 없이 참',
      visual: '1+1=2처럼 당연한 등식',
      soundAlike: '액시오매틱 = axiom(공리)',
      context: 'It is axiomatic that health matters.',
      synonymAntonym: '동의어: self-evident, obvious, 반의어: questionable',
    }),
    {
      definition: 'self-evident or unquestionable',
      wordDistractors: ['Aromatic', 'Automatic', 'Problematic'],
      definitionDistractors: [
        'having a pleasant and distinctive smell',
        'working by itself with little human intervention',
        'constituting or presenting a problem',
      ],
      exampleSentences: [
        { en: 'It is axiomatic that health matters.', ko: '건강이 중요하다는 것은 자명하다.' },
        { en: 'The axiomatic truth was accepted by all.', ko: '그 자명한 진리는 모두에게 받아들여졌다.' },
      ],
    }
  ),
  word('Beatific', '극락의', 9, 'adjective',
    ['비참한', '지옥 같은', '괴로운', '우울한', '고통스러운', '비참', '지옥', '괴로움', '우울', '고통'],
    tips({
      etymology: '라틴어 beatificus(축복 주는) -> 천국 같은',
      visual: '햇빛 속 미소 짓는 성자의 얼굴',
      soundAlike: '비어티픽 = beatify(시복하다)',
      context: 'She had a beatific smile on her face.',
      synonymAntonym: '동의어: blissful, serene, 반의어: wretched',
    }),
    {
      definition: 'blissfully happy; imparting holy bliss',
      wordDistractors: ['Beneficent', 'Benevolent', 'Pacific'],
      definitionDistractors: [
        'doing good or charitable deeds',
        'well meaning and kindly',
        'peaceful in character or intent',
      ],
      exampleSentences: [
        { en: 'She had a beatific smile on her face.', ko: '그녀 얼굴에 극락의 미소가 있었다.' },
        { en: 'The beatific vision filled him with peace.', ko: '그 극락의 환상이 그를 평화로 채웠다.' },
      ],
    }
  ),
  word('Bellicose', '호전적', 9, 'adjective',
    ['평화로운', '온순한', '비폭력적', '조용한', '중립적', '평화', '온순', '비폭력', '조용', '중립'],
    tips({
      etymology: '라틴어 bellum(전쟁) + -ose -> 전쟁 좋아하는',
      visual: '칼을 뽑아든 전사',
      soundAlike: '벨리코스 = bellicosity(호전성)',
      context: 'The bellicose rhetoric raised tensions.',
      synonymAntonym: '동의어: warlike, aggressive, 반의어: peaceful',
    }),
    {
      definition: 'demonstrating aggression and willingness to fight',
      wordDistractors: ['Belligerent', 'Beneficent', 'Benevolent'],
      definitionDistractors: [
        'hostile and aggressive',
        'doing good or charitable deeds',
        'well meaning and kindly',
      ],
      exampleSentences: [
        { en: 'The bellicose rhetoric raised tensions.', ko: '호전적인 수사가 긴장을 높였다.' },
        { en: 'His bellicose attitude alarmed the diplomats.', ko: '그의 호전적 태도가 외교관들을 경계하게 했다.' },
      ],
    }
  ),
  word('Bifurcate', '둘로 나누다', 9, 'verb',
    ['합치다', '병합하다', '통합하다', '연결하다', '모으다', '합침', '병합', '통합', '연결', '모음'],
    tips({
      etymology: 'bi(둘) + furc(갈래) + -ate -> 두 갈래로',
      visual: 'Y자로 갈라지는 강',
      soundAlike: '바이퍼케이트 = bifurcation(분기)',
      context: 'The road bifurcates at the bridge.',
      synonymAntonym: '동의어: divide, fork, 반의어: merge',
    }),
    {
      definition: 'to divide into two branches or forks',
      wordDistractors: ['Confiscate', 'Duplicate', 'Indicate'],
      definitionDistractors: [
        'to take or seize property with authority',
        'to make an exact copy of something',
        'to point out or show something',
      ],
      exampleSentences: [
        { en: 'The road bifurcates at the bridge.', ko: '길이 다리에서 둘로 갈라진다.' },
        { en: 'The river bifurcates into two streams.', ko: '강이 두 개의 시내로 갈라진다.' },
      ],
    }
  ),
  word('Blandish', '아첨하다', 9, 'verb',
    ['비난하다', '꾸짖다', '무시하다', '냉대하다', '모욕하다', '비난', '꾸짖음', '무시', '냉대', '모욕'],
    tips({
      etymology: '라틴어 blandus(부드러운) -> 달콤하게 말하다',
      visual: '꼬리에 꼬리를 물고 웃는 협상자',
      soundAlike: '블랜디시 = blandishment(아첨)',
      context: 'He tried to blandish the judge with flattery.',
      synonymAntonym: '동의어: flatter, cajole, 반의어: insult',
    }),
    {
      definition: 'to coax or influence someone with flattery or gentle persuasion',
      wordDistractors: ['Banish', 'Brandish', 'Vanquish'],
      definitionDistractors: [
        'to send someone away from a place',
        'to wave or flourish something threateningly',
        'to defeat someone in battle or competition',
      ],
      exampleSentences: [
        { en: 'He tried to blandish the judge with flattery.', ko: '그는 아첨으로 판사를 유혹하려 했다.' },
        { en: 'She blandished her boss to get the promotion.', ko: '그녀는 승진을 위해 상사에게 아첨했다.' },
      ],
    }
  ),
  word('Bombastic', '과장된', 9, 'adjective',
    ['절제된', '간결한', '겸손한', '못난', '수수한', '절제', '간결', '겸손', '못남', '수수'],
    tips({
      etymology: 'bombast(목화) -> 부풀어 오른 말',
      visual: '커다란 수조를 부풀린 연설자',
      soundAlike: '밤배스틱 = bombast(과장된 말)',
      context: 'His bombastic speech bored the audience.',
      synonymAntonym: '동의어: pompous, inflated, 반의어: modest',
    }),
    {
      definition: 'high-sounding but with little meaning; inflated',
      wordDistractors: ['Dramatic', 'Automatic', 'Problematic'],
      definitionDistractors: [
        'relating to drama or exciting events',
        'working by itself without human control',
        'posing a problem or difficulty',
      ],
      exampleSentences: [
        { en: 'His bombastic speech bored the audience.', ko: '그의 과장된 연설이 청중을 지루하게 했다.' },
        { en: 'The bombastic prose was hard to follow.', ko: '그 과장된 문장은 따라가기 어려웠다.' },
      ],
    }
  ),
  word('Brazen', '뻔뻔한', 9, 'adjective',
    ['수줍은', '겸손한', '부끄러워하는', '조용한', '숨기는', '수줍음', '겸손', '부끄러움', '조용', '숨김'],
    tips({
      etymology: 'brass(놋쇠) -> 놋쇠처럼 두꺼운 얼굴',
      visual: '거짓말하다가도 눈 깜짝 안 하는 얼굴',
      soundAlike: '브레이즌 = brazenness(뻔뻔함)',
      context: 'She made a brazen attempt to cheat.',
      synonymAntonym: '동의어: shameless, bold, 반의어: shy',
    }),
    {
      definition: 'bold and without shame; audacious',
      wordDistractors: ['Frozen', 'Brazier', 'Raven'],
      definitionDistractors: [
        'turned into ice or very cold',
        'a container for holding burning coals',
        'a large black bird with a hoarse cry',
      ],
      exampleSentences: [
        { en: 'She made a brazen attempt to cheat.', ko: '그녀는 뻔뻔하게 부정행위를 시도했다.' },
        { en: 'His brazen lies shocked everyone.', ko: '그의 뻔뻔한 거짓말에 모두가 충격받았다.' },
      ],
    }
  ),
  word('Bucolic', '전원의', 9, 'adjective',
    ['도시의', '산업적', '대도시적', '현대적', '공장지대', '도시', '산업', '대도시', '현대', '공장'],
    tips({
      etymology: '그리스어 boukolos(소 치는) -> 시골의',
      visual: '비를 맞으며 밭을 가는 농부',
      soundAlike: '뷰콜릭 = bucolically(전원적으로)',
      context: 'They dreamed of a bucolic life in the country.',
      synonymAntonym: '동의어: pastoral, rural, 반의어: urban',
    }),
    {
      definition: 'relating to the pleasant aspects of the countryside and country life',
      wordDistractors: ['Biological', 'Symbolic', 'Diabolic'],
      definitionDistractors: [
        'relating to the study of living organisms',
        'serving as a symbol',
        'relating to or characteristic of the devil',
      ],
      exampleSentences: [
        { en: 'They dreamed of a bucolic life in the country.', ko: '그들은 시골에서의 전원적 삶을 꿈꿨다.' },
        { en: 'The bucolic scenery inspired the painter.', ko: '전원 경치가 화가에게 영감을 주었다.' },
      ],
    }
  ),
  word('Cadaverous', '시체 같은', 9, 'adjective',
    ['환한', '건강한', '생기 있는', '활력 있는', '활발한', '환함', '건강', '생기', '활발', '활력'],
    tips({
      etymology: '라틴어 cadaver(시체) + -ous -> 시체처럼',
      visual: '창백하고 여윈 얼굴',
      soundAlike: '커대버러스 = cadaver(시체)',
      context: 'His cadaverous appearance alarmed the doctor.',
      synonymAntonym: '동의어: gaunt, corpse-like, 반의어: robust',
    }),
    {
      definition: 'resembling a corpse in being very pale, thin, or bony',
      wordDistractors: ['Carnivorous', 'Curious', 'Cautious'],
      definitionDistractors: [
        'feeding on flesh',
        'eager to know or learn something',
        'careful to avoid potential problems',
      ],
      exampleSentences: [
        { en: 'His cadaverous appearance alarmed the doctor.', ko: '그의 시체 같은 모습이 의사를 놀라게 했다.' },
        { en: 'The prisoner looked cadaverous after months of starvation.', ko: '수감자는 몇 달간의 굶주림 후 시체처럼 보였다.' },
      ],
    }
  ),
  word('Calumny', '중상', 9, 'noun',
    ['칭찬', '찬사', '옹호', '정의', '진실', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '라틴어 calumnia(속임) -> 거짓 비난',
      visual: '귀에 대고 속삭이는 음해자',
      soundAlike: '캘럼니 = calumniate(중상하다)',
      context: 'The calumny destroyed his reputation.',
      synonymAntonym: '동의어: slander, defamation, 반의어: praise',
    }),
    {
      definition: 'the making of false and defamatory statements about someone',
      wordDistractors: ['Column', 'Calorie', 'Colony'],
      definitionDistractors: [
        'a vertical pillar or support',
        'a unit of energy from food',
        'a country or area under political control',
      ],
      exampleSentences: [
        { en: 'The calumny destroyed his reputation.', ko: '그 중상이 그의 명성을 파괴했다.' },
        { en: 'She spread calumny about her rival.', ko: '그녀는 경쟁자에 대한 중상을 퍼뜨렸다.' },
      ],
    }
  ),
  word('Capricious', '변덕스러운', 9, 'adjective',
    ['일정한', '꾸준한', '예측 가능한', '신뢰할 수 있는', '견고한', '일정', '꾸준', '예측', '신뢰', '견고'],
    tips({
      etymology: '라틴어 capra(염소) -> 염소처럼 점프',
      visual: '갑자기 방향을 바꾸는 바람개비',
      soundAlike: '커프리셔스 = caprice(변덕)',
      context: 'The capricious weather spoiled our plans.',
      synonymAntonym: '동의어: fickle, whimsical, 반의어: steady',
    }),
    {
      definition: 'given to sudden and unaccountable changes of mood or behavior',
      wordDistractors: ['Capacious', 'Captious', 'Cautious'],
      definitionDistractors: [
        'having a lot of space inside',
        'tending to find fault or raise petty objections',
        'careful to avoid potential problems',
      ],
      exampleSentences: [
        { en: 'The capricious weather spoiled our plans.', ko: '변덕스러운 날씨가 우리 계획을 망쳤다.' },
        { en: 'Her capricious nature made her hard to predict.', ko: '그녀의 변덕스러운 성격 때문에 그녀를 예측하기 어려웠다.' },
      ],
    }
  ),
  word('Castigate', '견책하다', 9, 'verb',
    ['칭찬하다', '격려하다', '변호하다', '용서하다', '포상하다', '칭찬', '격려', '변호', '용서', '포상'],
    tips({
      etymology: '라틴어 castigare(꾸짖다) -> 심하게 꾸짖다',
      visual: '교실에서 벌 받는 학생',
      soundAlike: '캐스티게이트 = castigation(견책)',
      context: 'The media castigated the corrupt official.',
      synonymAntonym: '동의어: chastise, rebuke, 반의어: praise',
    }),
    {
      definition: 'to reprimand someone severely',
      wordDistractors: ['Castrate', 'Consecrate', 'Congregate'],
      definitionDistractors: [
        'to severely criticize or punish',
        'to remove the testicles of a male animal',
        'to remove or destroy something completely',
      ],
      exampleSentences: [
        { en: 'The media castigated the corrupt official.', ko: '언론이 부패한 공무원을 견책했다.' },
        { en: 'The teacher castigated the students for cheating.', ko: '선생님이 부정행위를 한 학생들을 견책했다.' },
      ],
    }
  ),
  word('Catholic', '보편적', 9, 'adjective',
    ['편협한', '제한된', '배타적', '좁은', '편파적', '편협', '제한', '배타', '좁음', '편파'],
    tips({
      etymology: '그리스어 katholikos(전체의) -> 모든 것을 포괄',
      visual: '모든 색을 담은 큰 원',
      soundAlike: '캐솔릭 = catholicity(보편성)',
      context: 'She has catholic tastes in music.',
      synonymAntonym: '동의어: universal, broad, 반의어: narrow',
    }),
    {
      definition: 'including a wide variety of things; universal in scope',
      wordDistractors: ['Chronic', 'Cynic', 'Civic'],
      definitionDistractors: [
        'persisting for a long time',
        'a person who believes people are motivated by self-interest',
        'relating to a city or citizens',
      ],
      exampleSentences: [
        { en: 'She has catholic tastes in music.', ko: '그녀는 음악에 보편적인 취향을 가지고 있다.' },
        { en: 'He had a catholic interest in all subjects.', ko: '그는 모든 주제에 대한 보편적인 관심을 가졌다.' },
      ],
    }
  ),
  word('Chicanery', '속임수', 9, 'noun',
    ['정직', '솔직함', '투명', '공정', '정의', '솔직', '사과', '책', '고양이', '개'],
    tips({
      etymology: '프랑스어 chicaner(말다툼하다) -> 법적 꼼수',
      visual: '카드 뒤에 숨긴 손',
      soundAlike: '시케너리 = chicaner(속이다)',
      context: 'The contract was full of legal chicanery.',
      synonymAntonym: '동의어: trickery, deception, 반의어: honesty',
    }),
    {
      definition: 'the use of trickery to achieve a political, financial, or legal purpose',
      wordDistractors: ['Chivalry', 'Chimney', 'Chicken'],
      definitionDistractors: [
        'the medieval knightly system of honor',
        'a channel for smoke from a fire',
        'a domestic fowl kept for its eggs or meat',
      ],
      exampleSentences: [
        { en: 'The contract was full of legal chicanery.', ko: '그 계약은 법적 속임수로 가득했다.' },
        { en: 'His political chicanery was eventually exposed.', ko: '그의 정치적 속임수가 결국 폭로되었다.' },
      ],
    }
  ),
  word('Circumlocution', '완곡어법', 9, 'noun',
    ['직설', '직언', '노골적 표현', '단도직입', '간결', '노골', '사과', '책', '고양이', '개'],
    tips({
      etymology: 'circum(둘러) + locut(말) + -ion -> 돌려 말하기',
      visual: '한 점을 향해 빙글빙글 도는 말',
      soundAlike: '서컴로큐션 = circumlocutory(완곡한)',
      context: 'Politicians often use circumlocution.',
      synonymAntonym: '동의어: periphrasis, verbosity, 반의어: directness',
    }),
    {
      definition: 'the use of many words where fewer would do; evasive talk',
      wordDistractors: ['Circumvention', 'Circumstance', 'Circumference'],
      definitionDistractors: [
        'the action of bypassing a restriction',
        'a fact or condition affecting a situation',
        'the distance around the edge of a circle',
      ],
      exampleSentences: [
        { en: 'Politicians often use circumlocution.', ko: '정치인들은 종종 완곡어법을 사용한다.' },
        { en: 'His circumlocution avoided giving a direct answer.', ko: '그의 완곡어법이 직접적인 답을 피하게 했다.' },
      ],
    }
  ),
  word('Circumvent', '우회하다', 9, 'verb',
    ['직면하다', '직접 맞서다', '정면 돌파', '통과하다', '달성하다', '직면', '직접', '정면', '통과', '달성'],
    tips({
      etymology: 'circum(둘러) + vent(오다) -> 돌아가다',
      visual: '방해물을 돌아가는 달리기 선수',
      soundAlike: '서컴벤트 = circumvention(우회)',
      context: 'He circumvented the rules with a loophole.',
      synonymAntonym: '동의어: bypass, evade, 반의어: confront',
    }),
    {
      definition: 'to find a way around an obstacle or restriction',
      wordDistractors: ['Invent', 'Prevent', 'Convey'],
      definitionDistractors: [
        'to create or design something new',
        'to stop something from happening',
        'to transport or carry from one place to another',
      ],
      exampleSentences: [
        { en: 'He circumvented the rules with a loophole.', ko: '그는 허점을 이용해 규칙을 우회했다.' },
        { en: 'They circumvented the blockade by using back roads.', ko: '그들은 지방도로를 이용해 봉쇄를 우회했다.' },
      ],
    }
  ),
  word('Clairvoyant', '통찰력 있는', 9, 'adjective',
    ['맹목적', '암흑한', '무지한', '단순한', '불감각한', '맹목', '암흑', '무지', '단순', '불감각'],
    tips({
      etymology: '프랑스어 clair(맑은) + voyant(보는) -> 속을 보다',
      visual: '눈을 감고 장차를 보는 사람',
      soundAlike: '클레어보이언트 = clairvoyance(통찰)',
      context: 'Her clairvoyant analysis predicted the crisis.',
      synonymAntonym: '동의어: insightful, prescient, 반의어: blind',
    }),
    {
      definition: 'having or showing an ability to perceive events beyond normal sensory contact',
      wordDistractors: ['Compliant', 'Complacent', 'Convalescent'],
      definitionDistractors: [
        'obedient or willing to comply',
        'showing smug satisfaction with oneself',
        'recovering from an illness or medical treatment',
      ],
      exampleSentences: [
        { en: 'Her clairvoyant analysis predicted the crisis.', ko: '그녀의 통찰력 있는 분석이 위기를 예측했다.' },
        { en: 'He seemed almost clairvoyant in his predictions.', ko: '그의 예측은 거의 통찰력이 있는 것처럼 보였다.' },
      ],
    }
  ),
  word('Clandestine', '비밀의', 9, 'adjective',
    ['공개된', '공식적', '저명한', '투명한', '노골적', '공개', '공식', '저명', '투명', '노골'],
    tips({
      etymology: '라틴어 clam(비밀스럽게) -> 숨겨진',
      visual: '커튼 뒤에서 속삭이는 그림자',
      soundAlike: '클랜데스틴 = clandestinely(비밀리에)',
      context: 'They held a clandestine meeting at midnight.',
      synonymAntonym: '동의어: secret, covert, 반의어: overt',
    }),
    {
      definition: 'kept secret or done secretively, especially for an illicit purpose',
      wordDistractors: ['Candid', 'Cantankerous', 'Capacious'],
      definitionDistractors: [
        'truthful and straightforward',
        'bad-tempered and uncooperative',
        'having a lot of space inside',
      ],
      exampleSentences: [
        { en: 'They held a clandestine meeting at midnight.', ko: '그들은 자정에 비밀 회의를 했다.' },
        { en: 'The clandestine operation was discovered by spies.', ko: '비밀 작전이 스파이들에게 발각되었다.' },
      ],
    }
  ),
  word('Clemency', '자비', 9, 'noun',
    ['잔인함', '엄격', '가혹', '매정함', '무정', '잔인', '매정', '사과', '책', '고양이'],
    tips({
      etymology: '라틴어 clemens(온화한) -> 용서하는 마음',
      visual: '사형을 감형하는 판결서',
      soundAlike: '클레멘시 = clement(자비로운)',
      context: 'The prisoner begged for clemency.',
      synonymAntonym: '동의어: mercy, leniency, 반의어: severity',
    }),
    {
      definition: 'mercy; lenience and compassion shown toward offenders',
      wordDistractors: ['Clarity', 'Celerity', 'Severity'],
      definitionDistractors: [
        'the quality of being clear and easy to understand',
        'swiftness of movement',
        'the quality of being strict or harsh',
      ],
      exampleSentences: [
        { en: 'The prisoner begged for clemency.', ko: '수감자는 자비를 간청했다.' },
        { en: 'The governor granted clemency to the inmate.', ko: '주지사가 수감자에게 자비를 베풀었다.' },
      ],
    }
  ),
  word('Coalesce', '결합하다', 9, 'verb',
    ['분리하다', '흩다', '해체하다', '분열시키다', '갈라놓다', '분리', '흩음', '해체', '분열', '갈라놓음'],
    tips({
      etymology: 'co(함께) + alesc(자라다) -> 함께 자라다',
      visual: '두 물방울이 합쳐지는 순간',
      soundAlike: '코얼레스 = coalescence(결합)',
      context: 'The factions coalesced into one party.',
      synonymAntonym: '동의어: merge, unite, 반의어: separate',
    }),
    {
      definition: 'to come together to form one mass or whole',
      wordDistractors: ['Coerce', 'Collapse', 'Conceal'],
      definitionDistractors: [
        'to persuade someone using force or threats',
        'to suddenly fall down or give way',
        'to keep something hidden from view',
      ],
      exampleSentences: [
        { en: 'The factions coalesced into one party.', ko: '파당들이 하나의 정당으로 결합했다.' },
        { en: 'Small droplets coalesced into larger ones.', ko: '작은 물방울들이 더 큰 방울로 결합했다.' },
      ],
    }
  ),
  word('Cogitate', '숙고하다', 9, 'verb',
    ['무심히 넘기다', '무시하다', '즉답하다', '충동적으로 하다', '생각 안 하다', '무심', '무시', '즉답', '충동', '생각없음'],
    tips({
      etymology: '라틴어 cogitare(함께 모으다) -> 머릿속으로 모으다',
      visual: '턱을 괴고 깊이 생각하는 사람',
      soundAlike: '코지테이트 = cogitation(숙고)',
      context: 'He cogitated on the problem for hours.',
      synonymAntonym: '동의어: ponder, reflect, 반의어: ignore',
    }),
    {
      definition: 'to think deeply about something; to meditate or reflect',
      wordDistractors: ['Cooperate', 'Commutate', 'Consecrate'],
      definitionDistractors: [
        'to think deeply and carefully',
        'to work together toward a common goal',
        'to travel regularly between home and work',
      ],
      exampleSentences: [
        { en: 'He cogitated on the problem for hours.', ko: '그는 몇 시간 동안 그 문제를 숙고했다.' },
        { en: 'She cogitated before giving her answer.', ko: '그녀는 답을 주기 전에 숙고했다.' },
      ],
    }
  ),
  word('Colloquial', '구어체의', 9, 'adjective',
    ['문어체의', '격식체의', '공식적', '고답적', '학술적', '문어', '격식', '공식', '고답', '학술'],
    tips({
      etymology: 'col(함께) + loqu(말) + -ial -> 함께 말하는',
      visual: '친구와 편하게 수다하는 카페',
      soundAlike: '컬로퀴얼 = colloquialism(구어 표현)',
      context: 'The dialogue was written in colloquial style.',
      synonymAntonym: '동의어: informal, conversational, 반의어: formal',
    }),
    {
      definition: 'used in ordinary or familiar conversation; not formal or literary',
      wordDistractors: ['Collegial', 'Colonial', 'Coastal'],
      definitionDistractors: [
        'relating to a friendly relationship between colleagues',
        'relating to a colony or colonialism',
        'relating to the land near the sea',
      ],
      exampleSentences: [
        { en: 'The dialogue was written in colloquial style.', ko: '대화는 구어체로 작성되었다.' },
        { en: 'Colloquial expressions vary by region.', ko: '구어 표현은 지역마다 다르다.' },
      ],
    }
  ),
  word('Commencement', '시작', 9, 'noun',
    ['종료', '끝', '마감', '해산', '완결', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'com(완전히) + mence(시작) -> 시작하다',
      visual: '졸업식에 모자를 던지는 학생들',
      soundAlike: '커멘스먼트 = commence(시작하다)',
      context: 'The commencement ceremony is at noon.',
      synonymAntonym: '동의어: beginning, start, 반의어: conclusion',
    }),
    {
      definition: 'the beginning of something; a ceremony where degrees are conferred',
      wordDistractors: ['Enhancement', 'Encouragement', 'Engagement'],
      definitionDistractors: [
        'an increase or improvement in quality',
        'the action of giving support or confidence',
        'a formal agreement to get married',
      ],
      exampleSentences: [
        { en: 'The commencement ceremony is at noon.', ko: '졸업식은 정오에 있다.' },
        { en: 'The commencement of the project was delayed.', ko: '프로젝트의 시작이 지연되었다.' },
      ],
    }
  ),
  word('Commiserate', '동정하다', 9, 'verb',
    ['경멸하다', '무시하다', '냉대하다', '박대하다', '비웃다', '경멸', '무시', '냉대', '박대', '비웃음'],
    tips({
      etymology: 'com(함께) + miser(불쌍한) + -ate -> 함께 슬퍼하다',
      visual: '어깨를 두드리며 위로하는 손',
      soundAlike: '커미저레이트 = commiseration(동정)',
      context: 'We commiserated with her over the loss.',
      synonymAntonym: '동의어: sympathize, console, 반의어: scorn',
    }),
    {
      definition: 'to express sympathy or pity; to feel or show sorrow for someone',
      wordDistractors: ['Commute', 'Communicate', 'Coordinate'],
      definitionDistractors: [
        'to express sympathy for someone\'s misfortune',
        'to travel regularly between home and work',
        'to share or exchange information',
      ],
      exampleSentences: [
        { en: 'We commiserated with her over the loss.', ko: '우리는 그 손실에 대해 그녀에게 동정을 표했다.' },
        { en: 'Friends commiserated with him after the defeat.', ko: '친구들이 패배 후 그에게 동정을 표했다.' },
      ],
    }
  ),
  word('Compunction', '양심의 가책', 9, 'noun',
    ['냉담', '무감각', '무자비', '잔인함', '미안함 없음', '잔인', '미안함없음', '사과', '책', '고양이'],
    tips({
      etymology: 'com(함께) + pung(찌르다) + -tion -> 마음이 찔림',
      visual: '잘못 후 밤에 뜨지 못하는 눈',
      soundAlike: '컴펑션 = compunctious(양심의 가책 있는)',
      context: 'She felt no compunction about lying.',
      synonymAntonym: '동의어: remorse, guilt, 반의어: callousness',
    }),
    {
      definition: 'a feeling of guilt or moral scruple that prevents or follows wrongdoing',
      wordDistractors: ['Compulsion', 'Consumption', 'Conjunction'],
      definitionDistractors: [
        'a feeling of guilt about doing something wrong',
        'an irresistible urge to do something',
        'the using up of a resource',
      ],
      exampleSentences: [
        { en: 'She felt no compunction about lying.', ko: '그녀는 거짓말에 대해 양심의 가책을 느끼지 않았다.' },
        { en: 'He showed compunction after hurting her feelings.', ko: '그는 그녀의 감정을 상하게 한 후 양심의 가책을 보였다.' },
      ],
    }
  ),
  word('Conflagration', '대화재', 9, 'noun',
    ['소화', '진화', '냉각', '식힘', '억제', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'con(완전히) + flagr(타다) + -ation -> 큰 불',
      visual: '도시 전체를 삼키는 불꽃',
      soundAlike: '컨플래그레이션 = conflagrate(불타다)',
      context: 'The conflagration destroyed the forest.',
      synonymAntonym: '동의어: inferno, blaze, 반의어: extinguishment',
    }),
    {
      definition: 'an extensive fire that destroys a great deal of land or property',
      wordDistractors: ['Configuration', 'Congregation', 'Confrontation'],
      definitionDistractors: [
        'an arrangement of parts or elements',
        'a gathering of people for religious worship',
        'a hostile or argumentative meeting',
      ],
      exampleSentences: [
        { en: 'The conflagration destroyed the forest.', ko: '대화재가 숲을 파괴했다.' },
        { en: 'Firefighters battled the conflagration for days.', ko: '소방관들이 며칠 동안 대화재와 싸웠다.' },
      ],
    }
  ),
  word('Contiguous', '인접한', 9, 'adjective',
    ['분리된', '떨어진', '격리된', '독립적', '단절된', '분리', '떨어짐', '격리', '독립', '단절'],
    tips({
      etymology: 'con(함께) + tig(닿다) + -uous -> 서로 닿은',
      visual: '나란히 붙어 있는 두 나라 지도',
      soundAlike: '컨티규어스 = contiguity(인접)',
      context: 'The two states are contiguous.',
      synonymAntonym: '동의어: adjacent, adjoining, 반의어: distant',
    }),
    {
      definition: 'sharing a common border; next to or in contact with',
      wordDistractors: ['Continuous', 'Contentious', 'Contemptuous'],
      definitionDistractors: [
        'forming an unbroken whole without interruption',
        'causing or likely to cause an argument',
        'showing contempt or scorn',
      ],
      exampleSentences: [
        { en: 'The two states are contiguous.', ko: '두 주는 인접해 있다.' },
        { en: 'The contiguous rooms shared a common wall.', ko: '인접한 방들이 공통 벽을 공유했다.' },
      ],
    }
  ),
  word('Contrite', '참회하는', 9, 'adjective',
    ['거만한', '무감각한', '냉담한', '방어적', '자랑하는', '거만', '무감각', '냉담', '방어', '자랑'],
    tips({
      etymology: 'con(완전히) + terere(빻다) -> 마음이 빻아짐',
      visual: '무릎 꿇고 고개 숙인 사람',
      soundAlike: '컨트라이트 = contrition(참회)',
      context: 'He seemed genuinely contrite.',
      synonymAntonym: '동의어: penitent, remorseful, 반의어: unrepentant',
    }),
    {
      definition: 'feeling or expressing remorse at the recognition that one has done wrong',
      wordDistractors: ['Concrete', 'Construe', 'Contribute'],
      definitionDistractors: [
        'existing in a material form; solid',
        'to interpret or explain the meaning of',
        'to give something in order to help achieve a goal',
      ],
      exampleSentences: [
        { en: 'He seemed genuinely contrite.', ko: '그는 진심으로 참회하는 것처럼 보였다.' },
        { en: 'She wrote a contrite letter of apology.', ko: '그녀는 참회하는 사과 편지를 썼다.' },
      ],
    }
  ),
  word('Conundrum', '난제', 9, 'noun',
    ['해답', '명확함', '단순함', '해결', '이해', '명확', '단순', '사과', '책', '고양이'],
    tips({
      etymology: '알 수 없는 유래 -> 수수께끼',
      visual: '물음표가 빙글빙글 도는 머리',
      soundAlike: '커넌드럼 = conundrums(난제들)',
      context: 'The budget posed a conundrum for lawmakers.',
      synonymAntonym: '동의어: puzzle, dilemma, 반의어: solution',
    }),
    {
      definition: 'a confusing and difficult problem or question',
      wordDistractors: ['Condominium', 'Conduit', 'Consortium'],
      definitionDistractors: [
        'a building with individually owned units',
        'a channel for conveying water or cable',
        'an association of several companies for a common purpose',
      ],
      exampleSentences: [
        { en: 'The budget posed a conundrum for lawmakers.', ko: '예산은 입법자들에게 난제를 제기했다.' },
        { en: 'Solving this conundrum required creative thinking.', ko: '이 난제를 해결하려면 창의적 사고가 필요했다.' },
      ],
    }
  ),
];
