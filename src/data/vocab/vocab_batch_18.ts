import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch18: VocabItem[] = [
  word('Corpulent', '비만한', 9, 'adjective',
    ['날씬한', '수척한', '마른', '얇은', '호리호리한', '날씬', '수척', '마름', '얇음', '호리호리'],
    tips({
      etymology: '라틴어 corpus(몸) + -ulent -> 몸이 큰',
      visual: '둥근 배가 불룩한 실루엣',
      soundAlike: '코르푸렌트 = corpulence(비만)',
      context: 'The corpulent man struggled to fit in the seat.',
      synonymAntonym: '동의어: obese, portly, 반의어: slender',
    }),
    {
      definition: 'excessively fat or overweight',
      wordDistractors: ['Corporeal', 'Corpuscle', 'Copious'],
      definitionDistractors: [
        'thin and weak in body',
        'relating to the physical body',
        'having a strong physical build',
      ],
      exampleSentences: [
        { en: 'The corpulent man struggled to fit in the seat.', ko: '비만한 그 남자는 좌석에 앉기 힘들어했다.' },
        { en: 'A corpulent figure appeared in the doorway.', ko: '비만한 인물이 문간에 나타났다.' },
      ],
    }
  ),
  word('Cosset', '응석받이하다', 9, 'verb',
    ['무시하다', '방치하다', '학대하다', '냉대하다', '경시하다', '홀대하다', '질책하다', '외면하다', '꾸짖다', '배척하다'],
    tips({
      etymology: '앵글로-노르만어 coscet(소작농이 기르는 어린 양)에서 유래',
      visual: '양털 담요로 감싸 안은 어린 양',
      soundAlike: '코셋 = 코셋(코끼리처럼 소중히)',
      context: 'The grandmother cosseted her grandchildren with treats.',
      synonymAntonym: '동의어: pamper, coddle, 반의어: neglect',
    }),
    {
      definition: 'to treat with excessive care and indulgence',
      wordDistractors: ['Cosseted', 'Corset', 'Cosmic'],
      definitionDistractors: [
        'to ignore or fail to care for',
        'to criticize or scold harshly',
        'to harm or mistreat intentionally',
      ],
      exampleSentences: [
        { en: 'The grandmother cosseted her grandchildren with treats.', ko: '할머니는 손주들에게 간식을 주며 응석받이하셨다.' },
        { en: 'They cosset their only child with every luxury.', ko: '그들은 외동딸에게 모든 사치를 주며 응석받이한다.' },
      ],
    }
  ),
  word('Cosmopolitan', '세계적인', 9, 'adjective',
    ['지방적인', '편협한', '제한된', '배타적', '좁은', '지방', '편협', '제한', '배타', '좁음'],
    tips({
      etymology: 'cosmo(세계) + politan(시민) -> 세계 시민의',
      visual: '여러 국기의 깃발이 휘날리는 국제 공항',
      soundAlike: '코즈모폴리탄 = cosmopolitanism(세계주의)',
      context: 'New York is a cosmopolitan city.',
      synonymAntonym: '동의어: international, worldly, 반의어: provincial',
    }),
    {
      definition: 'familiar with and at ease in many different countries and cultures',
      wordDistractors: ['Cosmological', 'Cosmetic', 'Cosmic'],
      definitionDistractors: [
        'limited to a narrow local area',
        'hostile to foreign ideas or people',
        'lacking culture or sophistication',
      ],
      exampleSentences: [
        { en: 'New York is a cosmopolitan city.', ko: '뉴욕은 세계적인 도시이다.' },
        { en: 'She has a cosmopolitan outlook from her travels.', ko: '그녀는 여행 덕분에 세계적인 시각을 갖게 되었다.' },
      ],
    }
  ),
  word('Counterfeit', '위조품', 9, 'noun',
    ['진품', '정통', '원본', '진정한 것', '실물', '진정', '사과', '책', '고양이', '개'],
    tips({
      etymology: 'counter(반대) + feit(만들다) -> 거짓 만든 것',
      visual: '확대경으로 들여다보는 가짜 지폐',
      soundAlike: '카운터페이트 = counterfeiter(위조자)',
      context: 'The police seized counterfeit currency.',
      synonymAntonym: '동의어: fake, forgery, 반의어: genuine',
    }),
    {
      definition: 'an imitation made to deceive others, especially money or goods',
      wordDistractors: ['Counterpart', 'Countermand', 'Counterpoint'],
      definitionDistractors: [
        'an original or authentic item',
        'money issued by a government bank',
        'a valuable object of historical importance',
      ],
      exampleSentences: [
        { en: 'The police seized counterfeit currency.', ko: '경찰은 위조 지폐를 압수했다.' },
        { en: 'That designer bag turned out to be a counterfeit.', ko: '그 명품 가방은 위조품으로 판명되었다.' },
      ],
    }
  ),
  word('Craven', '비겁한', 9, 'adjective',
    ['용감한', '대담한', '담대한', '용맹한', '두려움 없는', '용감', '대담', '담대', '용맹', '무용'],
    tips({
      etymology: '중세 영어 cravant(쓰러진) -> 굴복한',
      visual: '싸움터에서 등진 채 도망치는 병사',
      soundAlike: '크레이븐 = cravenness(비겁함)',
      context: 'His craven retreat angered the troops.',
      synonymAntonym: '동의어: cowardly, timorous, 반의어: brave',
    }),
    {
      definition: 'lacking courage; contemptibly timid',
      wordDistractors: ['Ravenous', 'Graven', 'Covetous'],
      definitionDistractors: [
        'showing boldness or daring',
        'willing to face danger',
        'having strong moral courage',
      ],
      exampleSentences: [
        { en: 'His craven retreat angered the troops.', ko: '그의 비겁한 후퇴가 병사들을 화나게 했다.' },
        { en: 'It was a craven act to abandon his comrades.', ko: '동료들을 버린 것은 비겁한 행위였다.' },
      ],
    }
  ),
  word('Credulous', '쉽게 믿는', 9, 'adjective',
    ['의심 많은', '경계하는', '냉소적', '불신하는', '회의적', '의심', '경계', '냉소', '불신', '회의'],
    tips({
      etymology: '라틴어 credere(믿다) + -ulous -> 믿기 쉬운',
      visual: '낚시 바늘에 걸린 물고기',
      soundAlike: '크레줄러스 = credulity(순진함)',
      context: 'Credulous investors lost their savings.',
      synonymAntonym: '동의어: gullible, naive, 반의어: skeptical',
    }),
    {
      definition: 'having or showing too great a readiness to believe things',
      wordDistractors: ['Credible', 'Credential', 'Creditable'],
      definitionDistractors: [
        'inclined to doubt or question',
        'cynical about motives',
        'careful and cautious in judgment',
      ],
      exampleSentences: [
        { en: 'Credulous investors lost their savings.', ko: '쉽게 믿는 투자자들이 저축을 잃었다.' },
        { en: 'She was too credulous to see through the scam.', ko: '그녀는 너무 쉽게 믿어 사기를 간파하지 못했다.' },
      ],
    }
  ),
  word('Curmudgeon', '심술궂은 사람', 9, 'noun',
    ['온순한 사람', '상냥한 사람', '관대한 사람', '기쁜 사람', '친절한 이', '온순', '상냥', '관대', '기쁨', '친절'],
    tips({
      etymology: '불확실한 유래 -> 투덜거리는 늙은이',
      visual: '창문 너머로 아이들을 쫓는 투덜대는 노인',
      soundAlike: '커머전 = curmudgeonly(심술궂은)',
      context: 'The old curmudgeon yelled at the children.',
      synonymAntonym: '동의어: grouch, misanthrope, 반의어: sweetheart',
    }),
    {
      definition: 'a bad-tempered person, especially an old one',
      wordDistractors: ['Curmudgeonly', 'Curfew', 'Cumbersome'],
      definitionDistractors: [
        'a kind and gentle person',
        'someone who is cheerful and optimistic',
        'a person who helps others willingly',
      ],
      exampleSentences: [
        { en: 'The old curmudgeon yelled at the children.', ko: '심술궂은 노인이 아이들에게 소리쳤다.' },
        { en: 'He plays the curmudgeon but has a soft heart.', ko: '그는 심술궂은 사람 역할을 하지만 마음은 따뜻하다.' },
      ],
    }
  ),
  word('Cursory', '대충의', 9, 'adjective',
    ['면밀한', '정밀한', '철저한', '꼼꼼한', '세밀한', '면밀', '정밀', '철저', '꼼꼼', '세밀'],
    tips({
      etymology: '라틴어 cursus(달리다) -> 빨리 지나가는',
      visual: '페이지를 휙휙 넘기는 독자',
      soundAlike: '커서리 = cursorily(대충)',
      context: 'He gave the report only a cursory glance.',
      synonymAntonym: '동의어: superficial, hasty, 반의어: thorough',
    }),
    {
      definition: 'hasty and therefore not thorough or detailed',
      wordDistractors: ['Curious', 'Cursed', 'Customary'],
      definitionDistractors: [
        'done with great care and attention',
        'examining something in depth',
        'leaving no detail unchecked',
      ],
      exampleSentences: [
        { en: 'He gave the report only a cursory glance.', ko: '그는 보고서에 대충만 훑어보았다.' },
        { en: 'A cursory inspection revealed no obvious defects.', ko: '대충 훑어본 검사에서는 큰 결함이 발견되지 않았다.' },
      ],
    }
  ),
  word('Dearth', '부족', 9, 'noun',
    ['풍부', '과다', '잉여', '충분', '풍성', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '중세 영어 derthe(비쌈) -> 희소함',
      visual: '텅 빈 선반과 빨간 품절 표시',
      soundAlike: '더스 = dearth of(부족)',
      context: 'There was a dearth of qualified candidates.',
      synonymAntonym: '동의어: scarcity, shortage, 반의어: abundance',
    }),
    {
      definition: 'a scarcity or lack of something',
      wordDistractors: ['Death', 'Dear', 'Dearth'],
      definitionDistractors: [
        'a large quantity or amount',
        'more than enough of something',
        'an excess or surplus',
      ],
      exampleSentences: [
        { en: 'There was a dearth of qualified candidates.', ko: '자격 요건을 갖춘 지원자가 부족했다.' },
        { en: 'The region suffers from a dearth of fresh water.', ko: '그 지역은 담수의 부족으로 고통받고 있다.' },
      ],
    }
  ),
  word('Debacle', '대참사', 9, 'noun',
    ['성공', '승리', '대성', '성취', '위업', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '프랑스어 débâcle(얼음 무너짐) -> 붕괴',
      visual: '무너지는 댐과 쏟아지는 물',
      soundAlike: '디배클 = debacle(대참사)',
      context: 'The election was a complete debacle.',
      synonymAntonym: '동의어: fiasco, disaster, 반의어: triumph',
    }),
    {
      definition: 'a sudden and complete disaster or failure',
      wordDistractors: ['Debate', 'Debt', 'Debrief'],
      definitionDistractors: [
        'a noteworthy achievement',
        'a favorable outcome',
        'a complete success',
      ],
      exampleSentences: [
        { en: 'The election was a complete debacle.', ko: '그 선거는 완전한 대참사였다.' },
        { en: 'The project turned into a financial debacle.', ko: '그 프로젝트는 재정적 대참사로 변했다.' },
      ],
    }
  ),
  word('Decorum', '예의', 9, 'noun',
    ['무례', '버릇없음', '예의 없음', '실례', '천박', '무식', '사과', '책', '고양이', '개'],
    tips({
      etymology: '라틴어 decor(적합한) -> 적절한 행동',
      visual: '정장을 차려입은 사람들이 담소하는 연회',
      soundAlike: '디코럼 = decorous(예의 바른)',
      context: 'Please maintain decorum in the courtroom.',
      synonymAntonym: '동의어: propriety, etiquette, 반의어: indecency',
    }),
    {
      definition: 'behavior that conforms to accepted standards of conduct',
      wordDistractors: ['Decor', 'Decreed', 'Decree'],
      definitionDistractors: [
        'rude or disrespectful behavior',
        'lack of manners or polish',
        'socially unacceptable conduct',
      ],
      exampleSentences: [
        { en: 'Please maintain decorum in the courtroom.', ko: '법정에서는 예의를 지켜 주시기 바랍니다.' },
        { en: 'The ceremony was conducted with proper decorum.', ko: '식은 적절한 예의로 진행되었다.' },
      ],
    }
  ),
  word('Deleterious', '유해한', 9, 'adjective',
    ['유익한', '건강한', '치유적', '좋은', '건강에 이로운', '유익', '건강', '치유', '좋음', '이로움'],
    tips({
      etymology: '그리스어 deleterios(파괴적) -> 해를 끼치는',
      visual: '해골 표시가 그려진 독극물 병',
      soundAlike: '델리티리어스 = deleteriously(유해하게)',
      context: 'Smoking has deleterious effects on health.',
      synonymAntonym: '동의어: harmful, detrimental, 반의어: beneficial',
    }),
    {
      definition: 'causing harm or damage',
      wordDistractors: ['Delirious', 'Deliberate', 'Delectable'],
      definitionDistractors: [
        'promoting health or well-being',
        'having a positive effect',
        'helpful or favorable',
      ],
      exampleSentences: [
        { en: 'Smoking has deleterious effects on health.', ko: '흡연은 건강에 유해한 영향을 미친다.' },
        { en: 'The chemical has deleterious effects on the environment.', ko: '그 화학물질은 환경에 유해한 영향을 준다.' },
      ],
    }
  ),
  word('Demagogue', '선동가', 9, 'noun',
    ['중재자', '화해자', '조용한 지도자', '겸손한 인물', '이성적 대변인', '중재', '화해', '조용', '겸손', '이성'],
    tips({
      etymology: '그리스어 demos(민중) + agon(이끄다) -> 민중 선동',
      visual: '확성기를 들고 군중을 향해 외치는 사람',
      soundAlike: '데머갑 = demagoguery(선동)',
      context: 'The demagogue rallied the crowd with empty promises.',
      synonymAntonym: '동의어: rabble-rouser, populist, 반의어: statesman',
    }),
    {
      definition: 'a political leader who appeals to popular desires and prejudices',
      wordDistractors: ['Democracy', 'Demographic', 'Demography'],
      definitionDistractors: [
        'a mediator who promotes peace',
        'a person who seeks rational compromise',
        'a calm and measured leader',
      ],
      exampleSentences: [
        { en: 'The demagogue rallied the crowd with empty promises.', ko: '그 선동가는 공허한 약속으로 군중을 선동했다.' },
        { en: 'History has seen many demagogues rise to power.', ko: '역사상 많은 선동가들이 권력을 잡았다.' },
      ],
    }
  ),
  word('Demure', '수줍은', 9, 'adjective',
    ['대담한', '뻔뻔한', '노골적', '적극적', '건방진', '대담', '뻔뻔', '노골', '적극', '건방'],
    tips({
      etymology: '프랑스어 mûr(성숙한) -> 얌전한',
      visual: '눈을 내리깔고 손을 접은 여인',
      soundAlike: '디뮤어 = demureness(수줍음)',
      context: 'She gave a demure smile and glanced away.',
      synonymAntonym: '동의어: modest, shy, 반의어: bold',
    }),
    {
      definition: 'reserved, modest, and shy in manner',
      wordDistractors: ['Demur', 'Secure', 'Obscure'],
      definitionDistractors: [
        'bold and attention-seeking',
        'confident and outspoken',
        'lacking modesty or restraint',
      ],
      exampleSentences: [
        { en: 'She gave a demure smile and glanced away.', ko: '그녀는 수줍게 미소 지으며 눈을 돌렸다.' },
        { en: 'Her demure demeanor hid a sharp wit.', ko: '그녀의 수줍은 태도 뒤에는 날카로운 재치가 숨어 있었다.' },
      ],
    }
  ),
  word('Denigrate', '비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '찬미하다', '찬사하다', '칭찬', '찬양', '옹호', '찬미', '찬사'],
    tips({
      etymology: 'de(아래로) + nigr(검은) + -ate -> 검게 만들다',
      visual: '남의 평판에 검은 먹을 칠하는 손',
      soundAlike: '데니그레이트 = denigration(비난)',
      context: 'He denigrated her achievements publicly.',
      synonymAntonym: '동의어: disparage, belittle, 반의어: praise',
    }),
    {
      definition: 'to criticize unfairly or belittle someone or something',
      wordDistractors: ['Denigrate', 'Delegate', 'Dedicate'],
      definitionDistractors: [
        'to express approval or admiration',
        'to speak highly of',
        'to defend or support',
      ],
      exampleSentences: [
        { en: 'He denigrated her achievements publicly.', ko: '그는 그녀의 성과를 공개적으로 비난했다.' },
        { en: 'The article denigrates the efforts of volunteers.', ko: '그 기사는 자원봉사자들의 노력을 폄하한다.' },
      ],
    }
  ),
  word('Depravity', '타락', 9, 'noun',
    ['덕성', '순결', '정의', '선함', '도의', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'de(아래로) + prav(구부러진) + -ity -> 왜곡됨',
      visual: '빛에서 그림자로 떨어지는 실루엣',
      soundAlike: '디프래비티 = depraved(타락한)',
      context: 'The depravity of the regime shocked the world.',
      synonymAntonym: '동의어: corruption, wickedness, 반의어: virtue',
    }),
    {
      definition: 'moral corruption or wickedness',
      wordDistractors: ['Depravity', 'Deprivation', 'Deprecation'],
      definitionDistractors: [
        'moral excellence or goodness',
        'honesty and integrity',
        'purity of character',
      ],
      exampleSentences: [
        { en: 'The depravity of the regime shocked the world.', ko: '그 정권의 타락은 세계를 충격에 빠뜨렸다.' },
        { en: 'The film depicted the depravity of organized crime.', ko: '그 영화는 조직범죄의 타락을 묘사했다.' },
      ],
    }
  ),
  word('Deride', '비웃다', 9, 'verb',
    ['존중하다', '칭찬하다', '존경하다', '찬양하다', '인정하다', '존중', '칭찬', '존경', '찬양', '인정'],
    tips({
      etymology: 'de(아래로) + rid(웃다) -> 비웃다',
      visual: '손가락으로 가리키며 웃는 무리',
      soundAlike: '디라이트 = derision(비웃음)',
      context: 'They derided the proposal as foolish.',
      synonymAntonym: '동의어: ridicule, mock, 반의어: respect',
    }),
    {
      definition: 'to express contempt for; ridicule or mock',
      wordDistractors: ['Deride', 'Derive', 'Divide'],
      definitionDistractors: [
        'to regard with esteem',
        'to praise or compliment',
        'to show admiration',
      ],
      exampleSentences: [
        { en: 'They derided the proposal as foolish.', ko: '그들은 그 제안을 어리석다며 비웃었다.' },
        { en: 'Critics derided the film as pretentious.', ko: '비평가들은 그 영화를 허세라며 비웃었다.' },
      ],
    }
  ),
  word('Despondent', '낙담한', 9, 'adjective',
    ['희망찬', '낙천적', '행복한', '기운찬', '낙관적', '희망', '낙천', '행복', '기운', '낙관'],
    tips({
      etymology: 'de(없이) + spond(약속) -> 희망 잃은',
      visual: '침대에 엎드려 고개 숙인 사람',
      soundAlike: '디스폰던트 = despondency(낙담)',
      context: 'She felt despondent after the rejection.',
      synonymAntonym: '동의어: dejected, despairing, 반의어: hopeful',
    }),
    {
      definition: 'in low spirits from loss of hope or courage',
      wordDistractors: ['Despondent', 'Respondent', 'Correspondent'],
      definitionDistractors: [
        'cheerful and optimistic',
        'full of hope and confidence',
        'in high spirits',
      ],
      exampleSentences: [
        { en: 'She felt despondent after the rejection.', ko: '그녀는 거절당한 후 낙담했다.' },
        { en: 'The team was despondent after the defeat.', ko: '팀은 패배 후 낙담해 있었다.' },
      ],
    }
  ),
  word('Despot', '독재자', 9, 'noun',
    ['민주 지도자', '협력자', '공정한 통치자', '대의인', '선출된 대표', '민주', '협력', '공정', '대의', '선출'],
    tips({
      etymology: '그리스어 despotēs(주인) -> 절대 권력자',
      visual: '왕관을 쓴 채 지팡이로 군중을 위협하는 인물',
      soundAlike: '데스팟 = despotism(독재)',
      context: 'The despot ruled with an iron fist.',
      synonymAntonym: '동의어: tyrant, autocrat, 반의어: democrat',
    }),
    {
      definition: 'a ruler with absolute power who uses it cruelly',
      wordDistractors: ['Despot', 'Desert', 'Depot'],
      definitionDistractors: [
        'a leader chosen by the people',
        'one who governs with consent',
        'a collaborative decision-maker',
      ],
      exampleSentences: [
        { en: 'The despot ruled with an iron fist.', ko: '그 독재자는 강압적으로 통치했다.' },
        { en: 'The despot crushed all opposition.', ko: '독재자는 모든 반대를 억압했다.' },
      ],
    }
  ),
  word('Diatribe', '비난 연설', 9, 'noun',
    ['칭찬', '찬사', '연설', '축사', '찬미', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '그리스어 diatribē(논훈) -> 경멸적 연설',
      visual: '마이크를 잡고 격렬히 외치는 연설자',
      soundAlike: '다이어트라이브 = diatribes(비난 연설들)',
      context: 'The editorial was a diatribe against corruption.',
      synonymAntonym: '동의어: tirade, harangue, 반의어: eulogy',
    }),
    {
      definition: 'a forceful and bitter verbal attack',
      wordDistractors: ['Diatribe', 'Dialogue', 'Diary'],
      definitionDistractors: [
        'a speech praising someone',
        'a formal expression of approval',
        'a tribute or eulogy',
      ],
      exampleSentences: [
        { en: 'The editorial was a diatribe against corruption.', ko: '그 사설은 부패에 대한 비난 연설이었다.' },
        { en: 'He launched into a diatribe against his critics.', ko: '그는 비평가들에게 대한 비난 연설을 시작했다.' },
      ],
    }
  ),
  word('Didactic', '교훈적인', 9, 'adjective',
    ['오락적', '엔터테인먼트적', '무의미한', '장난스러운', '가벼운', '오락', '엔터테인먼트', '무의미', '장난', '가벼움'],
    tips({
      etymology: '그리스어 didaskein(가르치다) -> 가르치는',
      visual: '칠판 앞에서 손가락을 들어 가리키는 선생님',
      soundAlike: '다이닥틱 = didacticism(교훈주의)',
      context: 'The fable has a didactic purpose.',
      synonymAntonym: '동의어: instructive, educational, 반의어: entertaining',
    }),
    {
      definition: 'intended to teach, especially with a moral lesson',
      wordDistractors: ['Didactic', 'Diabetic', 'Dialectic'],
      definitionDistractors: [
        'amusing without serious purpose',
        'purely for entertainment',
        'lacking educational value',
      ],
      exampleSentences: [
        { en: 'The fable has a didactic purpose.', ko: '그 우화는 교훈적인 목적을 가지고 있다.' },
        { en: 'Her didactic tone made the lecture seem preachy.', ko: '그녀의 교훈적인 어조가 강의를 설교처럼 들리게 했다.' },
      ],
    }
  ),
  word('Dilatory', '지연하는', 9, 'adjective',
    ['즉각적인', '신속한', '재빠른', '즉시의', '빠른', '즉각', '신속', '재빠름', '즉시', '빠름'],
    tips({
      etymology: '라틴어 dilatus(늦다) -> 늦추는',
      visual: '시계를 보며 일을 미루는 사람',
      soundAlike: '딜러터리 = dilatoriness(지연)',
      context: 'His dilatory tactics annoyed the committee.',
      synonymAntonym: '동의어: sluggish, procrastinating, 반의어: prompt',
    }),
    {
      definition: 'slow to act; causing delay',
      wordDistractors: ['Deliberate', 'Regulatory', 'Temporary'],
      definitionDistractors: [
        'acting or done without delay',
        'quick to respond',
        'characterized by speed',
      ],
      exampleSentences: [
        { en: 'His dilatory tactics annoyed the committee.', ko: '그의 지연 전술이 위원회를 짜증나게 했다.' },
        { en: 'The dilatory response worsened the crisis.', ko: '지연된 대응이 위기를 악화시켰다.' },
      ],
    }
  ),
  word('Dilettante', '아마추어', 9, 'noun',
    ['전문가', '숙련가', '마스터', '달인', '프로', '숙련', '사과', '책', '고양이', '개'],
    tips({
      etymology: '이탈리아어 dilettare(즐기다) -> 애호가',
      visual: '여러 도구를 골고루 만져보는 관심쟁이',
      soundAlike: '딜레탠트 = dilettantism(아마추어리즘)',
      context: 'He was a dilettante in music, not a serious musician.',
      synonymAntonym: '동의어: amateur, dabbler, 반의어: expert',
    }),
    {
      definition: 'a person who cultivates an area of interest without real commitment',
      wordDistractors: ['Dilettante', 'Diligent', 'Delicate'],
      definitionDistractors: [
        'a person with great skill in a field',
        'someone who has mastered a craft',
        'an authority in a subject',
      ],
      exampleSentences: [
        { en: 'He was a dilettante in music, not a serious musician.', ko: '그는 음악 아마추어였지, 진지한 음악가가 아니었다.' },
        { en: 'Wealthy dilettantes collected art for status.', ko: '부유한 아마추어들이 지위를 위해 예술을 수집했다.' },
      ],
    }
  ),
  word('Dirge', '장송곡', 9, 'noun',
    ['축가', '찬가', '행진곡', '환호곡', '축제가', '환호', '축제', '사과', '책', '고양이'],
    tips({
      etymology: '라틴어 dirige(인도하라) -> 장례 행진곡',
      visual: '검은 옷을 입고 관을 따라가는 행렬',
      soundAlike: '더지 = dirges(장송곡들)',
      context: 'The brass band played a slow dirge.',
      synonymAntonym: '동의어: requiem, lament, 반의어: anthem',
    }),
    {
      definition: 'a mournful song or lament for the dead',
      wordDistractors: ['Merge', 'Surge', 'Urge'],
      definitionDistractors: [
        'a joyful song of praise',
        'a triumphant or celebratory piece',
        'an upbeat anthem',
      ],
      exampleSentences: [
        { en: 'The brass band played a slow dirge.', ko: '금관악단이 느린 장송곡을 연주했다.' },
        { en: 'A dirge echoed through the cathedral.', ko: '장송곡이 대성당에 울려 퍼졌다.' },
      ],
    }
  ),
  word('Disabuse', '오해를 풀다', 9, 'verb',
    ['속이다', '오해시키다', '현혹하다', '속임', '기만하다', '오해', '현혹', '기만', '착각', '먹다'],
    tips({
      etymology: 'dis(제거) + abuse(오용) -> 잘못된 믿음 제거',
      visual: '안경을 씌워주며 진실을 보여주는 손',
      soundAlike: '디서뷰즈 = disabused(오해 풀린)',
      context: 'Let me disabuse you of that notion.',
      synonymAntonym: '동의어: enlighten, correct, 반의어: deceive',
    }),
    {
      definition: 'to free someone from a mistaken belief',
      wordDistractors: ['Abuse', 'Diffuse', 'Disuse'],
      definitionDistractors: [
        'to deceive or mislead',
        'to cause confusion',
        'to reinforce a false belief',
      ],
      exampleSentences: [
        { en: 'Let me disabuse you of that notion.', ko: '그 오해를 풀어 드리겠습니다.' },
        { en: 'I had to disabuse him of his illusions.', ko: '나는 그의 환상을 풀어줘야 했다.' },
      ],
    }
  ),
  word('Disaffected', '불만을 품은', 9, 'adjective',
    ['충성스러운', '헌신적인', '만족한', '충실한', '열성적', '충성', '헌신', '만족', '충실', '열성'],
    tips({
      etymology: 'dis(없이) + affect(애정) -> 애정 없어진',
      visual: '등을 돌리고 걸어가는 시민',
      soundAlike: '디서펙티드 = disaffection(불만)',
      context: 'Disaffected voters stayed home on election day.',
      synonymAntonym: '동의어: alienated, discontented, 반의어: loyal',
    }),
    {
      definition: 'having lost affection or loyalty; discontented',
      wordDistractors: ['Disaffected', 'Disinfect', 'Dissect'],
      definitionDistractors: [
        'devoted and faithful',
        'satisfied and content',
        'enthusiastically supportive',
      ],
      exampleSentences: [
        { en: 'Disaffected voters stayed home on election day.', ko: '불만을 품은 유권자들이 선거일에 집에 있었다.' },
        { en: 'Disaffected employees leaked the documents.', ko: '불만을 품은 직원들이 문서를 유출했다.' },
      ],
    }
  ),
  word('Discomfit', '당황시키다', 9, 'verb',
    ['안심시키다', '편하게 하다', '격려하다', '편안하게 하다', '편하게 해주다', '안심', '편안', '격려', '편안함', '격려함'],
    tips({
      etymology: 'dis(제거) + comfit(편안) -> 편안함 잃게 하다',
      visual: '갑작스러운 질문에 얼굴이 굳는 사람',
      soundAlike: '디스컴핏 = discomfited(당황한)',
      context: 'The question discomfited the speaker.',
      synonymAntonym: '동의어: embarrass, unnerve, 반의어: put at ease',
    }),
    {
      definition: 'to make someone feel uneasy or embarrassed',
      wordDistractors: ['Discomfit', 'Discomfort', 'Discompose'],
      definitionDistractors: [
        'to calm or reassure',
        'to make someone feel at ease',
        'to encourage or support',
      ],
      exampleSentences: [
        { en: 'The question discomfited the speaker.', ko: '그 질문이 연설자를 당황시켰다.' },
        { en: 'His stare discomfited her.', ko: '그의 응시가 그녀를 당황하게 했다.' },
      ],
    }
  ),
  word('Disparage', '폄하하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '올리다', '격찬하다', '높이 평가하다', '칭찬', '찬양', '격찬', '높이 평가', '올림'],
    tips({
      etymology: 'dis(아래로) + par(동등) -> 낮춰 보다',
      visual: '코웃음 치며 손을 흔드는 모습',
      soundAlike: '디스패리지 = disparagement(폄하)',
      context: 'She disparaged his work as amateurish.',
      synonymAntonym: '동의어: belittle, denigrate, 반의어: praise',
    }),
    {
      definition: 'to represent as of little worth; belittle',
      wordDistractors: ['Disparage', 'Disperse', 'Disparate'],
      definitionDistractors: [
        'to speak highly of',
        'to express approval',
        'to celebrate or honor',
      ],
      exampleSentences: [
        { en: 'She disparaged his work as amateurish.', ko: '그녀는 그의 작품을 아마추어 수준이라 폄하했다.' },
        { en: 'He disparaged her efforts to help.', ko: '그는 그녀의 도움의 노력을 폄하했다.' },
      ],
    }
  ),
  word('Dissemble', '숨기다', 9, 'verb',
    ['드러내다', '솔직히 말하다', '인정하다', '노출하다', '공개하다', '드러냄', '솔직', '인정', '노출', '공개'],
    tips({
      etymology: 'dis(떨어져) + sembl(비슷함) -> 가짜로 보이게',
      visual: '미소 뒤에 숨긴 진짜 감정',
      soundAlike: '디셈블 = dissembling(위장)',
      context: 'He dissembled his true intentions.',
      synonymAntonym: '동의어: disguise, conceal, 반의어: reveal',
    }),
    {
      definition: 'to conceal one\'s true motives or feelings',
      wordDistractors: ['Dissemble', 'Dissolve', 'Assemble'],
      definitionDistractors: [
        'to make known openly',
        'to admit or confess',
        'to reveal the truth',
      ],
      exampleSentences: [
        { en: 'He dissembled his true intentions.', ko: '그는 자신의 진짜 의도를 숨겼다.' },
        { en: 'She dissembled her anger with a smile.', ko: '그녀는 미소로 분노를 숨겼다.' },
      ],
    }
  ),
  word('Dissolute', '방탕한', 9, 'adjective',
    ['금욕적', '절제된', '검소한', '정숙한', '수척한', '금욕', '절제', '검소', '정숙', '수척'],
    tips({
      etymology: 'dis(떨어져) + solute(풀린) -> 풀어진 줄',
      visual: '와인병과 카드가 널린 파티장',
      soundAlike: '디설루트 = dissolution(해체, 방탕)',
      context: 'He led a dissolute life in his youth.',
      synonymAntonym: '동의어: debauched, profligate, 반의어: virtuous',
    }),
    {
      definition: 'lacking moral restraint; indulging in pleasure',
      wordDistractors: ['Dissolute', 'Dissolve', 'Absolute'],
      definitionDistractors: [
        'restrained and self-disciplined',
        'morally upright',
        'simple and frugal',
      ],
      exampleSentences: [
        { en: 'He led a dissolute life in his youth.', ko: '그는 젊은 시절 방탕한 삶을 살았다.' },
        { en: 'The dissolute noble squandered his fortune.', ko: '방탕한 귀족은 재산을 낭비했다.' },
      ],
    }
  ),
  word('Dogmatic', '독단적', 9, 'adjective',
    ['개방적인', '유연한', '회의적', '열린', '수용적', '개방', '유연', '회의', '열림', '수용'],
    tips({
      etymology: '그리스어 dogma(의견) -> 교조적',
      visual: '귀를 막고 자기 말만 하는 사람',
      soundAlike: '다그매틱 = dogmatism(독단주의)',
      context: 'She was too dogmatic to consider alternatives.',
      synonymAntonym: '동의어: doctrinaire, rigid, 반의어: flexible',
    }),
    {
      definition: 'inclined to lay down principles as undeniably true',
      wordDistractors: ['Pragmatic', 'Diplomatic', 'Schematic'],
      definitionDistractors: [
        'open to new ideas',
        'willing to consider alternatives',
        'flexible in thinking',
      ],
      exampleSentences: [
        { en: 'She was too dogmatic to consider alternatives.', ko: '그녀는 너무 독단적이어서 대안을 고려하지 않았다.' },
        { en: 'His dogmatic views left no room for debate.', ko: '그의 독단적 견해는 논의의 여지를 남기지 않았다.' },
      ],
    }
  ),
  word('Doleful', '슬픈', 9, 'adjective',
    ['기쁜', '환한', '명랑한', '행복한', '밝은', '기쁨', '환함', '명랑', '행복', '밝음'],
    tips({
      etymology: '중세 영어 dole(슬픔) + -ful -> 슬픔 가득',
      visual: '울먹이며 휴지 들고 있는 사람',
      soundAlike: '돌풀 = dolefully(슬프게)',
      context: 'A doleful melody filled the church.',
      synonymAntonym: '동의어: mournful, sorrowful, 반의어: joyful',
    }),
    {
      definition: 'expressing sorrow; mournful',
      wordDistractors: ['Doubtful', 'Soulful', 'Careful'],
      definitionDistractors: [
        'showing happiness or joy',
        'cheerful and bright',
        'full of excitement',
      ],
      exampleSentences: [
        { en: 'A doleful melody filled the church.', ko: '슬픈 선율이 교회에 가득했다.' },
        { en: 'She gave a doleful sigh.', ko: '그녀는 슬프게 한숨을 내쉬었다.' },
      ],
    }
  ),
  word('Dotard', '망령든 노인', 9, 'noun',
    ['정신 날카로운 사람', '현명한 이', '젊은이', '민첩한 사람', '총명한 이', '정신', '현명', '젊음', '민첩', '총명'],
    tips({
      etymology: '중세 영어 doten(어리석어지다) -> 노망난 이',
      visual: '빈 벤치에 앉아 허공을 바라보는 백발 노인',
      soundAlike: '도터드 = dotage(노망)',
      context: 'The dotard mumbled to himself.',
      synonymAntonym: '동의어: senile person, 반의어: sharp mind',
    }),
    {
      definition: 'an old person who is weak and confused',
      wordDistractors: ['Leonard', 'Forward', 'Wizard'],
      definitionDistractors: [
        'a sharp and alert person',
        'someone with youthful vigor',
        'a wise and clear-thinking elder',
      ],
      exampleSentences: [
        { en: 'The dotard mumbled to himself.', ko: '망령든 노인이 혼잣말을 했다.' },
        { en: 'The dotard could no longer recognize his family.', ko: '망령든 노인은 더 이상 가족을 알아보지 못했다.' },
      ],
    }
  ),
  word('Draconian', '가혹한', 9, 'adjective',
    ['완화된', '관대한', '부드러운', '자비로운', '온건한', '완화', '관대', '부드러움', '자비', '온건'],
    tips({
      etymology: 'Draco(아테네 법률가) -> 극형적 법률',
      visual: '철창과 쇠사슬이 그려진 감옥',
      soundAlike: '드레이코니언 = draconian measures',
      context: 'The draconian laws sparked protests.',
      synonymAntonym: '동의어: harsh, severe, 반의어: lenient',
    }),
    {
      definition: 'excessively harsh and severe',
      wordDistractors: ['Draconian', 'Dragon', 'Democratic'],
      definitionDistractors: [
        'merciful and forgiving',
        'mild and gentle',
        'relaxed and tolerant',
      ],
      exampleSentences: [
        { en: 'The draconian laws sparked protests.', ko: '가혹한 법들이 시위를 촉발했다.' },
        { en: 'The company imposed draconian cutbacks.', ko: '회사는 가혹한 인원 감축을 시행했다.' },
      ],
    }
  ),
  word('Duplicitous', '이중적', 9, 'adjective',
    ['솔직한', '일관된', '정직한', '투명한', '직선적', '솔직', '일관', '정직', '투명', '직선'],
    tips({
      etymology: 'du(둘) + plic(접다) -> 두 얼굴',
      visual: '웃는 얼굴과 뒤에서 칼을 든 손',
      soundAlike: '듀플리시터스 = duplicity(이중성)',
      context: 'His duplicitous behavior destroyed trust.',
      synonymAntonym: '동의어: deceitful, two-faced, 반의어: candid',
    }),
    {
      definition: 'deceitful; saying one thing while doing another',
      wordDistractors: ['Duplicitous', 'Duplication', 'Duplicity'],
      definitionDistractors: [
        'honest and straightforward',
        'consistent in words and actions',
        'transparent and open',
      ],
      exampleSentences: [
        { en: 'His duplicitous behavior destroyed trust.', ko: '그의 이중적인 행동이 신뢰를 파괴했다.' },
        { en: 'The duplicitous politician made contradictory promises.', ko: '이중적인 정치인이 모순된 약속을 했다.' },
      ],
    }
  ),
  word('Ebullient', '들뜬', 9, 'adjective',
    ['우울한', '냉정한', '조용한', '무기력한', '담담한', '우울', '냉정', '조용', '무기력', '담담'],
    tips({
      etymology: 'e(밖으로) + bull(끓다) -> 끓어 넘치는',
      visual: '컵에서 넘치는 샴페인 거품',
      soundAlike: '이불리언트 = ebullience(들뜸)',
      context: 'She was ebullient after the good news.',
      synonymAntonym: '동의어: exuberant, effervescent, 반의어: subdued',
    }),
    {
      definition: 'cheerful and full of energy; exuberant',
      wordDistractors: ['Indolent', 'Resilient', 'Obedient'],
      definitionDistractors: [
        'sad and dejected',
        'calm and restrained',
        'lacking energy',
      ],
      exampleSentences: [
        { en: 'She was ebullient after the good news.', ko: '그녀는 좋은 소식을 듣고 들뜨었다.' },
        { en: 'His ebullient personality lit up the room.', ko: '그의 들뜬 성격이 방을 밝게 했다.' },
      ],
    }
  ),
  word('Ecclesiastical', '교회의', 9, 'adjective',
    ['세속적', '비종교적', '민간의', '정치적', '일반적', '세속', '비종교', '민간', '정치', '일반'],
    tips({
      etymology: '그리스어 ekklēsia(교회) + -ical -> 교회 관련',
      visual: '성당과 십자가, 성직자 가운',
      soundAlike: '이클리지애스티컬 = ecclesiastic(성직자)',
      context: 'The building has ecclesiastical architecture.',
      synonymAntonym: '동의어: churchly, clerical, 반의어: secular',
    }),
    {
      definition: 'relating to the Christian Church or clergy',
      wordDistractors: ['Ecclesiastical', 'Ecological', 'Eccentric'],
      definitionDistractors: [
        'not religious; worldly',
        'relating to civil society',
        'ordinary and everyday',
      ],
      exampleSentences: [
        { en: 'The building has ecclesiastical architecture.', ko: '그 건물은 교회 건축 양식을 갖추고 있다.' },
        { en: 'He wore ecclesiastical robes for the ceremony.', ko: '그는 식을 위해 교회 성직복을 입었다.' },
      ],
    }
  ),
  word('Effervescent', '기운찬', 9, 'adjective',
    ['우울한', '무덤덤한', '둔한', '지루한', '침착한', '우울', '무덤덤', '둔함', '지루', '침착'],
    tips({
      etymology: 'ef(밖으로) + fervesc(끓다) -> 거품 나는',
      visual: '탄산음료에서 솟아오르는 거품',
      soundAlike: '에퍼베슨트 = effervescence(기운참)',
      context: 'Her effervescent personality brightened the room.',
      synonymAntonym: '동의어: bubbly, vivacious, 반의어: dull',
    }),
    {
      definition: 'giving off bubbles; vivacious and enthusiastic',
      wordDistractors: ['Evanescent', 'Fluorescent', 'Quintessential'],
      definitionDistractors: [
        'dull and boring',
        'gloomy and sad',
        'calm and reserved',
      ],
      exampleSentences: [
        { en: 'Her effervescent personality brightened the room.', ko: '그녀의 기운찬 성격이 방을 밝게 했다.' },
        { en: 'The wine had an effervescent quality.', ko: '그 와인은 거품이 나는 특성이 있었다.' },
      ],
    }
  ),
  word('Effigy', '인형', 9, 'noun',
    ['실물', '본인', '진짜', '원본', '실체', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '라틴어 effigies(형상) -> 흉내 내 만든 것',
      visual: '불타는 허수아비',
      soundAlike: '에피지 = effigies(인형들)',
      context: 'Protesters burned an effigy of the dictator.',
      synonymAntonym: '동의어: likeness, dummy, 반의어: real person',
    }),
    {
      definition: 'a sculpture or model of a person, often used for protest',
      wordDistractors: ['Enmity', 'Edify', 'Efficacy'],
      definitionDistractors: [
        'the actual person',
        'an original work of art',
        'a genuine article',
      ],
      exampleSentences: [
        { en: 'Protesters burned an effigy of the dictator.', ko: '시위대가 독재자의 인형을 불태웠다.' },
        { en: 'An effigy was hung in the town square.', ko: '인형이 시청 광장에 매달렸다.' },
      ],
    }
  ),
  word('Effrontery', '뻔뻔함', 9, 'noun',
    ['겸손', '수줍음', '예의', '부끄러움', '조심', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'ef(밖으로) + front(이마) -> 이마를 내밀다',
      visual: '잘못했다고 인정하지 않는 억지 주장',
      soundAlike: '이프런터리 = effrontery(뻔뻔함)',
      context: 'He had the effrontery to demand an apology.',
      synonymAntonym: '동의어: audacity, insolence, 반의어: modesty',
    }),
    {
      definition: 'insolent or shameless boldness',
      wordDistractors: ['Frontier', 'Tenacity', 'Capacity'],
      definitionDistractors: [
        'modesty and humility',
        'respectful behavior',
        'appropriate shyness',
      ],
      exampleSentences: [
        { en: 'He had the effrontery to demand an apology.', ko: '그는 사과를 요구하는 뻔뻔함을 보였다.' },
        { en: 'The effrontery of his lie astonished everyone.', ko: '그의 거짓말의 뻔뻔함이 모두를 놀라게 했다.' },
      ],
    }
  ),
  word('Egregious', '터무니없는', 9, 'adjective',
    ['보통의', '사소한', '정상적인', '무난한', '적당한', '보통', '사소', '정상', '무난', '적당'],
    tips({
      etymology: 'e(밖으로) + greg(무리) -> 무리에서 벗어난',
      visual: '빨간 밑줄이 그어진 명백한 오류',
      soundAlike: '이그리지어스 = egregiously(터무니없이)',
      context: 'That was an egregious error.',
      synonymAntonym: '동의어: flagrant, outrageous, 반의어: minor',
    }),
    {
      definition: 'outstandingly bad; shocking',
      wordDistractors: ['Gregarious', 'Grievous', 'Ingenious'],
      definitionDistractors: [
        'slight and unimportant',
        'within acceptable limits',
        'ordinary and unremarkable',
      ],
      exampleSentences: [
        { en: 'That was an egregious error.', ko: '그것은 터무니없는 실수였다.' },
        { en: 'The judge cited egregious misconduct.', ko: '판사는 터무니없는 행위 위반을 지적했다.' },
      ],
    }
  ),
  word('Elegy', '애가', 9, 'noun',
    ['찬가', '축가', '환호가', '행진곡', '기쁨의 노래', '환호', '기쁨', '사과', '책', '고양이'],
    tips({
      etymology: '그리스어 elegos(곡조) -> 슬픈 노래',
      visual: '지붕 위에 앉아 슬픈 멜로디를 부르는 음악가',
      soundAlike: '엘러지 = elegiac(애가적인)',
      context: 'The poet wrote an elegy for his fallen friend.',
      synonymAntonym: '동의어: lament, dirge, 반의어: ode',
    }),
    {
      definition: 'a poem or song expressing sorrow, especially for the dead',
      wordDistractors: ['Elegant', 'Legacy', 'Allergy'],
      definitionDistractors: [
        'a song of praise or triumph',
        'a joyful celebration',
        'an upbeat anthem',
      ],
      exampleSentences: [
        { en: 'The poet wrote an elegy for his fallen friend.', ko: '시인은 전우를 위해 애가를 썼다.' },
        { en: 'The elegy moved the mourners to tears.', ko: '그 애가가 조문객들을 눈물 짓게 했다.' },
      ],
    }
  ),
  word('Elucidate', '밝히다', 9, 'verb',
    ['흐리게 하다', '혼란시키다', '숨기다', '어둡게 하다', '복잡하게 하다', '흐림', '혼란', '숨김', '어둠', '복잡'],
    tips({
      etymology: 'e(밖으로) + luc(빛) + -ate -> 빛을 비추다',
      visual: '손전등으로 어두운 방을 비추는 손',
      soundAlike: '일루시데이트 = elucidation(설명)',
      context: 'The diagram elucidates the process.',
      synonymAntonym: '동의어: clarify, explain, 반의어: obscure',
    }),
    {
      definition: 'to make clear; explain',
      wordDistractors: ['Elucidate', 'Eliminate', 'Elicit'],
      definitionDistractors: [
        'to hide or conceal',
        'to confuse or obscure',
        'to make unclear',
      ],
      exampleSentences: [
        { en: 'The diagram elucidates the process.', ko: '그 도표가 과정을 밝혀준다.' },
        { en: 'Could you elucidate that point further?', ko: '그 부분을 더 밝혀 주시겠습니까?' },
      ],
    }
  ),
  word('Emaciate', '여위게 하다', 9, 'verb',
    ['살찌게 하다', '영양을 주다', '건강하게 하다', '보강하다', '풍부하게 하다', '살찌움', '영양', '건강', '보강', '풍부'],
    tips({
      etymology: 'e(밖으로) + maci(마른) + -ate -> 몸을 빼다',
      visual: '뼈가 드러난 여윈 손',
      soundAlike: '이메이시에이트 = emaciated(여윈)',
      context: 'Starvation emaciated the prisoners.',
      synonymAntonym: '동의어: waste away, thin, 반의어: nourish',
    }),
    {
      definition: 'to make abnormally thin or weak',
      wordDistractors: ['Emaciate', 'Emanate', 'Emulate'],
      definitionDistractors: [
        'to provide nourishment',
        'to make healthy and strong',
        'to add weight or substance',
      ],
      exampleSentences: [
        { en: 'Starvation emaciated the prisoners.', ko: '기아가 수감자들을 여위게 했다.' },
        { en: 'The illness emaciated his body.', ko: '그 병이 그의 몸을 여위게 했다.' },
      ],
    }
  ),
  word('Embroil', '엮다', 9, 'verb',
    ['놓아주다', '해제하다', '분리하다', '정리하다', '떼어내다', '놓아줌', '해제', '분리', '정리', '떼어냄'],
    tips({
      etymology: 'em(안으로) + broil(섞다) -> 혼란에 빠뜨리다',
      visual: '줄에 얽혀 풀어지지 않는 실타래',
      soundAlike: '엠브로일 = embroiled(휘말린)',
      context: 'The scandal embroiled several officials.',
      synonymAntonym: '동의어: involve, entangle, 반의어: extricate',
    }),
    {
      definition: 'to involve someone deeply in a conflict or difficulty',
      wordDistractors: ['Broil', 'Uncoil', 'Spoil'],
      definitionDistractors: [
        'to free from entanglement',
        'to separate or disentangle',
        'to release from involvement',
      ],
      exampleSentences: [
        { en: 'The scandal embroiled several officials.', ko: '그 스캔들이 여러 관료들을 엮어 넣었다.' },
        { en: 'He was embroiled in a legal dispute.', ko: '그는 법적 분쟁에 휘말려 있었다.' },
      ],
    }
  ),
  word('Empiricism', '경험주의', 9, 'noun',
    ['이론주의', '직관주의', '공리주의', '추론주의', '선험론', '직관', '공리', '추론', '선험', '사과'],
    tips({
      etymology: '그리스어 empeiria(경험) + -ism -> 경험 기반',
      visual: '실험실에서 데이터를 기록하는 과학자',
      soundAlike: '엠피리시즘 = empirical(경험적)',
      context: 'Empiricism relies on observation and experiment.',
      synonymAntonym: '동의어: experimentalism, 반의어: rationalism',
    }),
    {
      definition: 'the theory that knowledge comes from experience and observation',
      wordDistractors: ['Empiricism', 'Imperialism', 'Empiric'],
      definitionDistractors: [
        'belief that reason alone yields truth',
        'reliance on intuition',
        'acceptance of doctrine without proof',
      ],
      exampleSentences: [
        { en: 'Empiricism relies on observation and experiment.', ko: '경험주의는 관찰과 실험에 의존한다.' },
        { en: 'British philosophy emphasized empiricism.', ko: '영국 철학은 경험주의를 강조했다.' },
      ],
    }
  ),
  word('Ennui', '권태', 9, 'noun',
    ['열의', '흥미', '열정', '활력', '재미', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '프랑스어 ennui(지루함) -> 존재적 권태',
      visual: '창밖을 멍하니 바라보는 사람',
      soundAlike: '온위 = ennui(권태)',
      context: 'A sense of ennui pervaded the office.',
      synonymAntonym: '동의어: boredom, listlessness, 반의어: enthusiasm',
    }),
    {
      definition: 'a feeling of listlessness from lack of excitement',
      wordDistractors: ['Envy', 'Entry', 'Agony'],
      definitionDistractors: [
        'intense excitement or enthusiasm',
        'eager interest or curiosity',
        'lively energy',
      ],
      exampleSentences: [
        { en: 'A sense of ennui pervaded the office.', ko: '권태감이 사무실에 퍼져 있었다.' },
        { en: 'Summer ennui made the days drag.', ko: '여름의 권태가 날들을 지루하게 만들었다.' },
      ],
    }
  ),
  word('Epitome', '전형', 9, 'noun',
    ['예외', '이상', '특이', '편차', '변칙', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '그리스어 epitomē(잘라냄) -> 요약, 대표',
      visual: '한 방울에 모든 색이 담긴 물감',
      soundAlike: '이핏터미 = epitomize(전형이다)',
      context: 'She is the epitome of elegance.',
      synonymAntonym: '동의어: quintessence, embodiment, 반의어: aberration',
    }),
    {
      definition: 'a perfect example of a particular quality or type',
      wordDistractors: ['Epitome', 'Epitaph', 'Epithet'],
      definitionDistractors: [
        'a departure from the norm',
        'an irregular or unusual case',
        'something that does not fit',
      ],
      exampleSentences: [
        { en: 'She is the epitome of elegance.', ko: '그녀는 우아함의 전형이다.' },
        { en: 'The house was the epitome of luxury.', ko: '그 집은 사치의 전형이었다.' },
      ],
    }
  ),
  word('Equivocate', '모호하게 말하다', 9, 'verb',
    ['명확히 말하다', '직설하다', '솔직히 말하다', '단정하다', '밝히다', '명확', '직설', '솔직', '단정', '밝힘'],
    tips({
      etymology: 'equi(같은) + voc(말) + -ate -> 두 가지 의미로 말하다',
      visual: '양쪽 귀에 다른 말을 속삭이는 모습',
      soundAlike: '이퀴버케이트 = equivocation(모호한 말)',
      context: 'Politicians often equivocate on tough questions.',
      synonymAntonym: '동의어: prevaricate, hedge, 반의어: declare',
    }),
    {
      definition: 'to use ambiguous language to conceal the truth',
      wordDistractors: ['Evacuate', 'Evaluate', 'Equate'],
      definitionDistractors: [
        'to state clearly and directly',
        'to speak with honesty',
        'to make a firm declaration',
      ],
      exampleSentences: [
        { en: 'Politicians often equivocate on tough questions.', ko: '정치인들은 어려운 질문에 모호하게 말하는 경우가 많다.' },
        { en: 'Don\'t equivocate; give me a straight answer.', ko: '모호하게 말하지 말고 대답해 주세요.' },
      ],
    }
  ),
  word('Evanescent', '순간적인', 9, 'adjective',
    ['영구한', '지속적인', '영원한', '오래가는', '불멸의', '영구', '지속', '영원', '오래감', '불멸'],
    tips({
      etymology: 'e(사라지다) + vanesc(빈 것) -> 사라져 버리는',
      visual: '공중에서 사라지는 거품',
      soundAlike: '이배너슨트 = evanescence(순간성)',
      context: 'The evanescent beauty of cherry blossoms.',
      synonymAntonym: '동의어: fleeting, ephemeral, 반의어: permanent',
    }),
    {
      definition: 'soon passing out of sight or existence',
      wordDistractors: ['Effervescent', 'Adolescent', 'Incandescent'],
      definitionDistractors: [
        'lasting forever',
        'enduring for a long time',
        'permanent and unchanging',
      ],
      exampleSentences: [
        { en: 'The evanescent beauty of cherry blossoms.', ko: '벚꽃의 순간적인 아름다움.' },
        { en: 'He caught an evanescent glimpse of her.', ko: '그는 그녀의 순간적인 모습을 포착했다.' },
      ],
    }
  ),
];
