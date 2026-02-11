import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch19: VocabItem[] = [
  word('Excoriate', '맹비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '찬미하다', '승인하다', '칭찬', '찬양', '옹호', '찬미', '승인'],
    tips({
      etymology: 'ex(밖으로) + corium(가죽) -> 가죽을 벗기다',
      visual: '견적 없이 비난 퍼붓는 연설자',
      soundAlike: '엑스코리에이트 = excoriation(맹비난)',
      context: 'The critic excoriated the film in his review.',
      synonymAntonym: '동의어: denounce, castigate, 반의어: praise',
    }),
    {
      definition: 'to criticize someone or something harshly',
      wordDistractors: ['Explicate', 'Exonerate', 'Expatriate'],
      definitionDistractors: [
        'to praise someone highly in public',
        'to make something clear by explaining it',
        'to remove blame or responsibility from someone',
      ],
      exampleSentences: [
        { en: 'The critic excoriated the director for the poor screenplay.', ko: '평론가는 형편없는 시나리오로 감독을 맹비난했다.' },
        { en: 'She excoriated her opponent in the debate.', ko: '그녀는 토론에서 상대방을 맹비난했다.' },
      ],
    }
  ),
  word('Execrable', '지독한', 9, 'adjective',
    ['훌륭한', '탁월한', '훌륭', '탁월', '우수한', '우수', '좋은', '훌륭함', '탁월함', '우수함'],
    tips({
      etymology: 'ex(밖으로) + secr(저주) + -able -> 저주받을 만한',
      visual: '코를 막고 물러서는 사람',
      soundAlike: '엑시크러블 = execrably(지독하게)',
      context: 'The food was execrable.',
      synonymAntonym: '동의어: abominable, detestable, 반의어: excellent',
    }),
    {
      definition: 'extremely bad or unpleasant',
      wordDistractors: ['Explainable', 'Executable', 'Exemplary'],
      definitionDistractors: [
        'of very high quality or standard',
        'having a pleasant taste or smell',
        'worthy of admiration or respect',
      ],
      exampleSentences: [
        { en: 'The hotel room was in execrable condition.', ko: '호텔 객실 상태는 지독했다.' },
        { en: 'He has execrable taste in music.', ko: '그는 음악 취향이 지독하다.' },
      ],
    }
  ),
  word('Exegesis', '주석', 9, 'noun',
    ['개요', '요약', '축약', '개략', '줄거리', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '그리스어 exēgeisthai(설명하다) -> 글의 해석',
      visual: '성경 옆에 달린 작은 글씨 주석',
      soundAlike: '엑세지시스 = exegetical(주석의)',
      context: 'Biblical exegesis requires deep study.',
      synonymAntonym: '동의어: interpretation, commentary, 반의어: paraphrase',
    }),
    {
      definition: 'critical explanation or interpretation of a text',
      wordDistractors: ['Exodus', 'Expanse', 'Exigence'],
      definitionDistractors: [
        'a brief summary of the main points',
        'a short note added to clarify something',
        'a list of items in a document',
      ],
      exampleSentences: [
        { en: 'Biblical exegesis requires deep study of ancient languages.', ko: '성경 주석은 고대 언어에 대한 깊은 연구가 필요하다.' },
        { en: 'Her exegesis of the poem revealed hidden meanings.', ko: '그녀의 시 주석은 숨겨진 의미를 드러냈다.' },
      ],
    }
  ),
  word('Existential', '실존적', 9, 'adjective',
    ['추상적', '이론적', '가상적', '순수 이론', '개념적', '추상', '이론', '가상', '순수', '개념'],
    tips({
      etymology: 'Existential(존재) + -ial -> 존재에 관한',
      visual: '고개를 들어 별을 바라보는 외로운 실루엣',
      soundAlike: '엑지스텐셜 = existentialism(실존주의)',
      context: 'He faced an existential crisis.',
      synonymAntonym: '동의어: ontological, philosophical, 반의어: trivial',
    }),
    {
      definition: 'relating to human existence and the meaning of life',
      wordDistractors: ['Essential', 'Extential', 'Exponential'],
      definitionDistractors: [
        'existing only in theory or imagination',
        'based on practical experience rather than theory',
        'relating to the physical world and nature',
      ],
      exampleSentences: [
        { en: 'He faced an existential crisis after losing his job.', ko: '그는 직장을 잃은 후 실존적 위기를 겪었다.' },
        { en: 'The novel explores existential questions about purpose.', ko: '그 소설은 목적에 대한 실존적 질문을 탐구한다.' },
      ],
    }
  ),
  word('Exorbitant', '과도한', 9, 'adjective',
    ['적정한', '합리적', '적당한', '무난한', '적절한', '적정', '합리', '적당', '무난', '적절'],
    tips({
      etymology: 'ex(밖으로) + orbit(궤도) -> 궤도를 벗어난',
      visual: '천문학적 가격표',
      soundAlike: '익조어비턴트 = exorbitantly(과도하게)',
      context: 'The rent was exorbitant.',
      synonymAntonym: '동의어: excessive, extravagant, 반의어: reasonable',
    }),
    {
      definition: 'excessively high in price or amount',
      wordDistractors: ['Exothermic', 'Exotic', 'Exorbitance'],
      definitionDistractors: [
        'fair and sensible in cost',
        'below the usual or expected level',
        'moderate in amount or degree',
      ],
      exampleSentences: [
        { en: 'The restaurant charged exorbitant prices for wine.', ko: '그 식당은 와인에 과도한 가격을 청구했다.' },
        { en: 'Exorbitant rent forced many residents to leave.', ko: '과도한 임대료로 많은 주민들이 이사해야 했다.' },
      ],
    }
  ),
  word('Expatriate', '망명자', 9, 'noun',
    ['귀국자', '본국인', '거주민', '정착민', '토착민', '귀국', '본국', '거주', '정착', '토착'],
    tips({
      etymology: 'ex(밖으로) + patri(조국) + -ate -> 조국 밖의 사람',
      visual: '비행기로 떠나는 이민자',
      soundAlike: '엑스페이트리이트 = expatriation(망명)',
      context: 'American expatriates living in Paris.',
      synonymAntonym: '동의어: émigré, exile, 반의어: native',
    }),
    {
      definition: 'a person who lives outside their native country',
      wordDistractors: ['Expatriation', 'Expatiate', 'Expatriates'],
      definitionDistractors: [
        'a person born and raised in a country',
        'a person who has moved to a new country forever',
        'a person who visits another country briefly',
      ],
      exampleSentences: [
        { en: 'American expatriates living in Paris gathered at the café.', ko: '파리에 사는 미국 망명자들이 카페에 모였다.' },
        { en: 'She works as an expatriate in Singapore.', ko: '그녀는 싱가포르에서 망명자로 일한다.' },
      ],
    }
  ),
  word('Expiate', '속죄하다', 9, 'verb',
    ['범죄하다', '저지르다', '죄 지우다', '더럽히다', '오염시키다', '범죄', '저지름', '죄', '더럽힘', '오염'],
    tips({
      etymology: 'ex(밖으로) + pi(속하다) + -ate -> 죄를 갚다',
      visual: '고개 숙여 참회하는 사람',
      soundAlike: '엑스피에이트 = expiation(속죄)',
      context: 'He sought to expiate his sins.',
      synonymAntonym: '동의어: atone, make amends, 반의어: sin',
    }),
    {
      definition: 'to make amends or atone for wrongdoing',
      wordDistractors: ['Explicate', 'Expiate', 'Expatriate'],
      definitionDistractors: [
        'to commit a crime or offense',
        'to forgive someone for a mistake',
        'to hide or conceal wrongdoing',
      ],
      exampleSentences: [
        { en: 'He sought to expiate his sins through charity.', ko: '그는 자선을 통해 자신의 죄를 속죄하려 했다.' },
        { en: 'She tried to expiate her guilt by apologizing.', ko: '그녀는 사과로 죄책감을 속죄하려 했다.' },
      ],
    }
  ),
  word('Expound', '설명하다', 9, 'verb',
    ['숨기다', '간략히 하다', '생략하다', '축약하다', '말하지 않다', '숨김', '간략', '생략', '축약', '침묵'],
    tips({
      etymology: 'ex(밖으로) + pound(놓다) -> 펼쳐 설명하다',
      visual: '칠판 앞에서 열정적으로 설명하는 강사',
      soundAlike: '익스파운드 = expound upon(설명하다)',
      context: 'The professor expounded his theory.',
      synonymAntonym: '동의어: explain, elucidate, 반의어: summarize',
    }),
    {
      definition: 'to explain or present an idea in detail',
      wordDistractors: ['Expand', 'Propose', 'Expel'],
      definitionDistractors: [
        'to shorten or reduce in length',
        'to keep something secret or hidden',
        'to state something briefly',
      ],
      exampleSentences: [
        { en: 'The professor expounded his theory to the class.', ko: '교수는 수업에서 자신의 이론을 설명했다.' },
        { en: 'She expounded on the benefits of meditation.', ko: '그녀는 명상의 이점에 대해 설명했다.' },
      ],
    }
  ),
  word('Expunge', '삭제하다', 9, 'verb',
    ['추가하다', '기록하다', '보존하다', '남기다', '저장하다', '추가', '기록', '보존', '남김', '저장'],
    tips({
      etymology: 'ex(완전히) + pung(찌르다) -> 지우다',
      visual: '지우개로 문장을 지우는 손',
      soundAlike: '익스펀지 = expungement(삭제)',
      context: 'The record was expunged after his pardon.',
      synonymAntonym: '동의어: erase, delete, 반의어: record',
    }),
    {
      definition: 'to erase or remove completely from a record',
      wordDistractors: ['Expel', 'Expurgate', 'Expose'],
      definitionDistractors: [
        'to add information to a document',
        'to keep something safe from harm',
        'to make a written record of something',
      ],
      exampleSentences: [
        { en: 'The record was expunged after his pardon.', ko: '사면 후 그의 기록이 삭제되었다.' },
        { en: 'They sought to expunge the error from the file.', ko: '그들은 파일의 오류를 삭제하려 했다.' },
      ],
    }
  ),
  word('Extirpate', '근절하다', 9, 'verb',
    ['심다', '확산시키다', '번식시키다', '보존하다', '키우다', '심음', '확산', '번식', '보존', '키움'],
    tips({
      etymology: 'ex(밖으로) + stirp(뿌리) + -ate -> 뿌리째 뽑다',
      visual: '뿌리째 뽑힌 잡초',
      soundAlike: '엑스터페이트 = extirpation(근절)',
      context: 'Efforts to extirpate the invasive species.',
      synonymAntonym: '동의어: eradicate, eliminate, 반의어: implant',
    }),
    {
      definition: 'to destroy or remove something completely',
      wordDistractors: ['Exterminate', 'Extricate', 'Expatriate'],
      definitionDistractors: [
        'to plant seeds or young plants',
        'to help something grow or develop',
        'to spread something over a wide area',
      ],
      exampleSentences: [
        { en: 'Efforts to extirpate the invasive species failed.', ko: '침입종을 근절하려는 노력이 실패했다.' },
        { en: 'The regime sought to extirpate all opposition.', ko: '정권은 모든 반대를 근절하려 했다.' },
      ],
    }
  ),
  word('Extrapolate', '추론하다', 9, 'verb',
    ['관찰하다', '실측하다', '기록하다', '단순히 봐다', '추측하지 않다', '관찰', '실측', '기록', '단순', '추측안함'],
    tips({
      etymology: 'extra(넘어) + pol(매끄럽게) + -ate -> 연장해 추론',
      visual: '그래프 선을 연장해 미래를 점선으로 그리는 손',
      soundAlike: '익스트랩얼레이트 = extrapolation(추론)',
      context: 'We can extrapolate future trends from the data.',
      synonymAntonym: '동의어: infer, project, 반의어: interpolate',
    }),
    {
      definition: 'to infer or extend known data to predict the unknown',
      wordDistractors: ['Extricate', 'Interpolate', 'Exterminate'],
      definitionDistractors: [
        'to observe and record without inference',
        'to go back over past events',
        'to mix or blend things together',
      ],
      exampleSentences: [
        { en: 'We can extrapolate future trends from the data.', ko: '데이터로부터 미래 추세를 추론할 수 있다.' },
        { en: 'It is risky to extrapolate from such a small sample.', ko: '그처럼 작은 표본으로 추론하는 것은 위험하다.' },
      ],
    }
  ),
  word('Exuberant', '열광적', 9, 'adjective',
    ['우울한', '냉담한', '무기력한', '조용한', '담담한', '우울', '냉담', '무기력', '조용', '담담'],
    tips({
      etymology: 'ex(밖으로) + uber(풍부) + -ant -> 넘쳐 흐르는',
      visual: '컵에서 넘치는 샴페인 거품',
      soundAlike: '익주버런트 = exuberance(열광)',
      context: 'Exuberant crowds celebrated the victory.',
      synonymAntonym: '동의어: ebullient, effervescent, 반의어: subdued',
    }),
    {
      definition: 'full of energy, excitement, and cheerfulness',
      wordDistractors: ['Exultant', 'Exurban', 'Effervescent'],
      definitionDistractors: [
        'sad and without energy',
        'calm and reserved in manner',
        'tired and lacking enthusiasm',
      ],
      exampleSentences: [
        { en: 'Exuberant crowds celebrated the victory.', ko: '열광적인 군중이 승리를 축하했다.' },
        { en: 'She gave an exuberant performance on stage.', ko: '그녀는 무대에서 열광적인 연기를 했다.' },
      ],
    }
  ),
  word('Facile', '쉬운', 9, 'adjective',
    ['어려운', '복잡한', '난해한', '까다로운', '지난한', '어려움', '복잡', '난해', '까다로움', '지남'],
    tips({
      etymology: '라틴어 facilis(쉬운) -> 쉽게 이루어지는',
      visual: '한 번에 풀리는 퍼즐',
      soundAlike: '패실 = facility(용이함)',
      context: 'That is a facile solution to a complex problem.',
      synonymAntonym: '동의어: effortless, superficial, 반의어: arduous',
    }),
    {
      definition: 'achieved with little effort; overly simplistic',
      wordDistractors: ['Facial', 'Fragile', 'Fertile'],
      definitionDistractors: [
        'requiring great effort or skill',
        'having many parts or aspects',
        'deep and thorough in analysis',
      ],
      exampleSentences: [
        { en: 'That is a facile solution to a complex problem.', ko: '그것은 복잡한 문제에 대한 지나치게 쉬운 해결책이다.' },
        { en: 'His facile answer ignored the real issues.', ko: '그의 가벼운 답변은 실제 문제를 무시했다.' },
      ],
    }
  ),
  word('Fatuous', '어리석은', 9, 'adjective',
    ['현명한', '총명한', '날카로운', '이성적', '영리한', '현명', '총명', '날카로움', '이성', '영리'],
    tips({
      etymology: '라틴어 fatuus(바보) -> 공허하게 어리석은',
      visual: '빈 컵을 들고 만족해하는 사람',
      soundAlike: '패츄어스 = fatuity(어리석음)',
      context: 'His fatuous remarks annoyed everyone.',
      synonymAntonym: '동의어: foolish, inane, 반의어: wise',
    }),
    {
      definition: 'silly and pointless in a foolish way',
      wordDistractors: ['Factious', 'Fecund', 'Facetious'],
      definitionDistractors: [
        'having or showing good judgment',
        'showing deep thought and understanding',
        'quick to learn and understand',
      ],
      exampleSentences: [
        { en: 'His fatuous remarks annoyed everyone.', ko: '그의 어리석은 말이 모두를 짜증나게 했다.' },
        { en: 'She laughed at his fatuous suggestion.', ko: '그녀는 그의 어리석은 제안을 비웃었다.' },
      ],
    }
  ),
  word('Felicitous', '적절한', 9, 'adjective',
    ['부적절한', '어색한', '어울리지 않는', '부당한', '틀린', '부적절', '어색', '어울림없음', '부당', '틀림'],
    tips({
      etymology: '라틴어 felix(행복한) + -ous -> 잘 맞는',
      visual: '퍼즐 조각이 딱 맞아 들어가는 순간',
      soundAlike: '펠리시터스 = felicitously(적절하게)',
      context: 'A felicitous choice of words.',
      synonymAntonym: '동의어: apt, appropriate, 반의어: inappropriate',
    }),
    {
      definition: 'well chosen or suited to the circumstances',
      wordDistractors: ['Felicitous', 'Felicitation', 'Felicific'],
      definitionDistractors: [
        'not suitable or fitting for the situation',
        'awkward or clumsy in manner',
        'unpleasant or offensive',
      ],
      exampleSentences: [
        { en: 'A felicitous choice of words broke the tension.', ko: '적절한 단어 선택이 긴장을 풀었다.' },
        { en: 'The felicitous remark won everyone over.', ko: '적절한 발언이 모두의 마음을 사로잡았다.' },
      ],
    }
  ),
  word('Filigree', '세공', 9, 'noun',
    ['거친 덩어리', '단순한 형태', '굵은 조각', '대충 만든 것', '얼기설기', '거칠음', '단순', '굵음', '대충', '사과'],
    tips({
      etymology: '라틴어 filum(실) + granum(곡물) -> 실 같은 장식',
      visual: '은으로 된 가느다란 꽃무늬',
      soundAlike: '필리그리 = filigreed(세공된)',
      context: 'The necklace had delicate filigree work.',
      synonymAntonym: '동의어: tracery, lacework, 반의어: solid mass',
    }),
    {
      definition: 'delicate ornamental work of fine wire',
      wordDistractors: ['Filigreed', 'Frivolity', 'Fillet'],
      definitionDistractors: [
        'a large block of solid material',
        'rough and unrefined surface',
        'simple design without decoration',
      ],
      exampleSentences: [
        { en: 'The necklace had delicate filigree work.', ko: '목걸이에는 정교한 세공이 있었다.' },
        { en: 'The box was adorned with silver filigree.', ko: '상자는 은 세공으로 장식되어 있었다.' },
      ],
    }
  ),
  word('Filibuster', '논진 연설', 9, 'noun',
    ['간결한 동의', '찬성', '즉각적 표결', '조용한 통과', '협력', '간결', '즉각', '조용', '사과', '책'],
    tips({
      etymology: '프랑스어 flibustier(해적) -> 연설로 방해',
      visual: '마이크 앞에서 끝없이 말하는 의원',
      soundAlike: '필리버스터 = filibustering(논진)',
      context: 'The senator launched a filibuster to block the bill.',
      synonymAntonym: '동의어: obstruction, delay tactic, 반의어: quick vote',
    }),
    {
      definition: 'a prolonged speech made to delay legislative action',
      wordDistractors: ['Firebuster', 'Bluster', 'Flibbertigibbet'],
      definitionDistractors: [
        'a quick and decisive vote',
        'a brief agreement or approval',
        'a short summary of key points',
      ],
      exampleSentences: [
        { en: 'The senator launched a filibuster to block the bill.', ko: '상원의원은 법안을 막기 위해 논진 연설을 시작했다.' },
        { en: 'The filibuster lasted for over twelve hours.', ko: '논진 연설은 12시간 이상 지속되었다.' },
      ],
    }
  ),
  word('Fulminate', '격렬히 비난하다', 9, 'verb',
    ['칭찬하다', '찬양하다', '옹호하다', '조용히 하다', '묵인하다', '칭찬', '찬양', '옹호', '조용', '묵인'],
    tips({
      etymology: '라틴어 fulmen(번개) + -ate -> 번개처럼 내리치다',
      visual: '마이크를 쥐고 번개처럼 외치는 연설자',
      soundAlike: '풀미네이트 = fulmination(격렬한 비난)',
      context: 'He fulminated against the new policy.',
      synonymAntonym: '동의어: denounce, thunder, 반의어: praise',
    }),
    {
      definition: 'to express strong protest or condemnation',
      wordDistractors: ['Formulate', 'Fumigate', 'Fulmination'],
      definitionDistractors: [
        'to express approval or admiration',
        'to speak quietly or softly',
        'to agree with or support',
      ],
      exampleSentences: [
        { en: 'He fulminated against the new policy.', ko: '그는 새 정책에 대해 격렬히 비난했다.' },
        { en: 'The editorial fulminated at government corruption.', ko: '사설은 정부 부패를 격렬히 비난했다.' },
      ],
    }
  ),
  word('Gainsay', '부정하다', 9, 'verb',
    ['동의하다', '인정하다', '확인하다', '찬성하다', '승인하다', '동의', '인정', '확인', '찬성', '승인'],
    tips({
      etymology: 'gain(반대) + say(말하다) -> 반대하여 말하다',
      visual: '고개를 크게 젓는 사람',
      soundAlike: '게인세이 = ungainsayable(부정할 수 없는)',
      context: 'No one could gainsay the evidence.',
      synonymAntonym: '동의어: deny, contradict, 반의어: confirm',
    }),
    {
      definition: 'to deny or contradict a statement',
      wordDistractors: ['Deny', 'Contradict', 'Recant'],
      definitionDistractors: [
        'to acknowledge something as true',
        'to express agreement or approval',
        'to support or advocate for',
      ],
      exampleSentences: [
        { en: 'No one could gainsay the evidence.', ko: '아무도 그 증거를 부정할 수 없었다.' },
        { en: 'She would not gainsay her father in public.', ko: '그녀는 대중 앞에서 아버지를 부정하지 않았다.' },
      ],
    }
  ),
  word('Garrulous', '말이 많은', 9, 'adjective',
    ['과묵한', '조용한', '침묵하는', '말수 적은', '냉담한', '과묵', '조용', '침묵', '말수적음', '냉담'],
    tips({
      etymology: '라틴어 garrulus(수다스러운) -> 말이 많은',
      visual: '입을 벌리고 끝없이 말하는 사람',
      soundAlike: '개럴러스 = garrulity(수다)',
      context: 'The garrulous old man talked for hours.',
      synonymAntonym: '동의어: talkative, loquacious, 반의어: taciturn',
    }),
    {
      definition: 'excessively talkative, especially about trivial matters',
      wordDistractors: ['Garrulity', 'Verdurous', 'Garrulously'],
      definitionDistractors: [
        'habitually silent or reserved',
        'using few words in speech',
        'unwilling to speak or share',
      ],
      exampleSentences: [
        { en: 'The garrulous old man talked for hours.', ko: '말이 많은 노인이 몇 시간 동안 이야기했다.' },
        { en: 'She avoided the garrulous neighbor at parties.', ko: '그녀는 파티에서 수다스러운 이웃을 피했다.' },
      ],
    }
  ),
  word('Genuflect', '무릎 꿇다', 9, 'verb',
    ['서다', '일어서다', '거만해지다', '무시하다', '경멸하다', '서기', '일어섬', '거만', '무시', '경멸'],
    tips({
      etymology: '라틴어 genu(무릎) + flect(굽히다) -> 무릎 꿇다',
      visual: '교회에서 무릎 꿇고 기도하는 신자',
      soundAlike: '제뉴플렉트 = genuflection(무릎 꿇음)',
      context: 'The worshippers genuflected before the altar.',
      synonymAntonym: '동의어: kneel, bow, 반의어: stand',
    }),
    {
      definition: 'to lower one\'s body by bending the knee in reverence',
      wordDistractors: ['Deflect', 'Reflect', 'Inflect'],
      definitionDistractors: [
        'to rise to an upright position',
        'to walk or move forward',
        'to turn away or avoid',
      ],
      exampleSentences: [
        { en: 'The worshippers genuflected before the altar.', ko: '신자들이 제단 앞에서 무릎 꿇었다.' },
        { en: 'He genuflected when entering the chapel.', ko: '그는 예배당에 들어갈 때 무릎을 꿇었다.' },
      ],
    }
  ),
  word('Germane', '관련된', 9, 'adjective',
    ['무관한', '어긋난', '엉뚱한', '관련 없는', '맥락 벗어난', '무관', '어긋남', '엉뚱', '관련없음', '맥락벗어남'],
    tips({
      etymology: '라틴어 germanus(같은 부모의) -> 관련된',
      visual: '퍼즐 조각이 맞는 자리에 들어가는 모습',
      soundAlike: '저메인 = germane to(관련된)',
      context: 'His comments were germane to the discussion.',
      synonymAntonym: '동의어: relevant, pertinent, 반의어: irrelevant',
    }),
    {
      definition: 'relevant or pertinent to the subject at hand',
      wordDistractors: ['German', 'Germinate', 'Germany'],
      definitionDistractors: [
        'not connected to the matter',
        'out of place or inappropriate',
        'random or unrelated',
      ],
      exampleSentences: [
        { en: 'His comments were germane to the discussion.', ko: '그의 코멘트는 토론과 관련이 있었다.' },
        { en: 'She asked a germane question about the budget.', ko: '그녀는 예산에 관한 관련 질문을 했다.' },
      ],
    }
  ),
  word('Grandiloquent', '과장된', 9, 'adjective',
    ['간결한', '소박한', '단순한', '솔직한', '검소한', '간결', '소박', '단순', '솔직', '검소'],
    tips({
      etymology: 'grand(크다) + loqu(말하다) -> 거창하게 말하는',
      visual: '하늘을 가리키며 웅변하는 연설자',
      soundAlike: '그랜딜로퀀트 = grandiloquence(과장된 말)',
      context: 'His grandiloquent speech bored the audience.',
      synonymAntonym: '동의어: pompous, bombastic, 반의어: plain',
    }),
    {
      definition: 'pompous or extravagant in language or style',
      wordDistractors: ['Magniloquent', 'Grandiose', 'Eloquent'],
      definitionDistractors: [
        'simple and direct in manner',
        'using few and precise words',
        'modest and unassuming',
      ],
      exampleSentences: [
        { en: 'His grandiloquent speech bored the audience.', ko: '그의 과장된 연설이 청중을 지루하게 했다.' },
        { en: 'She avoided grandiloquent language in her essay.', ko: '그녀는 에세이에서 과장된 표현을 피했다.' },
      ],
    }
  ),
  word('Hagiography', '성인 전기', 10, 'noun',
    ['비판적 전기', '폭로문', '공정한 기록', '객관적 서술', '냉소적 평가', '비판', '폭로', '공정', '객관', '냉소'],
    tips({
      etymology: '그리스어 hagios(성스러운) + graph(쓰다) -> 성인 기록',
      visual: '후광을 두른 성인 화상',
      soundAlike: '해지오그래피 = hagiographic(성인전기적)',
      context: 'The biography was pure hagiography.',
      synonymAntonym: '동의어: panegyric, idolization, 반의어: exposé',
    }),
    {
      definition: 'a biography that idealizes its subject',
      wordDistractors: ['Biography', 'Historiography', 'Geography'],
      definitionDistractors: [
        'a critical account of someone\'s life',
        'an expose revealing hidden faults',
        'an objective and balanced record',
      ],
      exampleSentences: [
        { en: 'The biography was pure hagiography.', ko: '그 전기는 순수한 성인 전기였다.' },
        { en: 'Historians dismissed the book as hagiography.', ko: '역사학자들은 그 책을 성인 전기로 치부했다.' },
      ],
    }
  ),
  word('Halcyon', '평화로운', 10, 'adjective',
    ['불안한', '혼란한', '격동의', '우울한', '암울한', '불안', '혼란', '격동', '우울', '암울'],
    tips({
      etymology: '그리스어 alkyon(물총새) -> 평화의 새',
      visual: '잔잔한 바다와 일몰',
      soundAlike: '핼시언 = halcyon days(평화로운 날들)',
      context: 'Those were halcyon days of youth.',
      synonymAntonym: '동의어: idyllic, tranquil, 반의어: turbulent',
    }),
    {
      definition: 'calm, peaceful, and happy',
      wordDistractors: ['Helicon', 'Halycon', 'Idyllic'],
      definitionDistractors: [
        'full of conflict or turmoil',
        'anxious and uneasy',
        'dark and depressing',
      ],
      exampleSentences: [
        { en: 'Those were halcyon days of youth.', ko: '그것들은 청춘의 평화로운 날들이었다.' },
        { en: 'She recalled the halcyon summers at the lake.', ko: '그녀는 호수에서 보낸 평화로운 여름을 회상했다.' },
      ],
    }
  ),
  word('Hegemony', '패권', 10, 'noun',
    ['종속', '복종', '저항', '평등', '독립', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: '그리스어 hegemon(지도자) -> 지배적 지위',
      visual: '지도를 중앙에서 압도하는 한 나라',
      soundAlike: '헤제모니 = hegemonic(패권적)',
      context: 'The cultural hegemony of Hollywood.',
      synonymAntonym: '동의어: dominance, supremacy, 반의어: subordination',
    }),
    {
      definition: 'dominance or leadership of one group over others',
      wordDistractors: ['Hegemon', 'Harmony', 'Hierarchy'],
      definitionDistractors: [
        'state of being under control of another',
        'equality among all parties',
        'rebellion against authority',
      ],
      exampleSentences: [
        { en: 'The cultural hegemony of Hollywood extends worldwide.', ko: '할리우드의 문화 패권이 전 세계로 뻗어 있다.' },
        { en: 'They challenged the economic hegemony of the West.', ko: '그들은 서구의 경제 패권에 도전했다.' },
      ],
    }
  ),
  word('Iconoclast', '전통 타파자', 10, 'noun',
    ['보수주의자', '전통주의자', '수호자', '옹호자', '순응자', '보수', '전통', '수호', '옹호', '순응'],
    tips({
      etymology: '그리스어 eikon(상) + klastēs(깨는 자) -> 우상 파괴자',
      visual: '오래된 동상을 내려치는 망치',
      soundAlike: '아이코노클래스트 = iconoclastic(전통타파적)',
      context: 'He was an iconoclast who challenged conventions.',
      synonymAntonym: '동의어: rebel, innovator, 반의어: traditionalist',
    }),
    {
      definition: 'a person who attacks cherished beliefs or institutions',
      wordDistractors: ['Iconoclasm', 'Idolater', 'Iconography'],
      definitionDistractors: [
        'a person who upholds tradition',
        'a person who follows established rules',
        'a person who resists change',
      ],
      exampleSentences: [
        { en: 'He was an iconoclast who challenged conventions.', ko: '그는 관습에 도전하는 전통 타파자였다.' },
        { en: 'The artist gained fame as an iconoclast.', ko: '그 예술가는 전통 타파자로 명성을 얻었다.' },
      ],
    }
  ),
  word('Idyll', '전원시', 10, 'noun',
    ['비도', '참담한 이야기', '비극', '고난담', '암흑기', '참담', '고난', '암흑', '사과', '책'],
    tips({
      etymology: '그리스어 eidyllion(작은 그림) -> 이상적 전원',
      visual: '배 따기와 고개가 있는 시골 풍경',
      soundAlike: '아이딜 = idyllic(전원시적인)',
      context: 'Summer at the lake was an idyll.',
      synonymAntonym: '동의어: pastoral, paradise, 반의어: nightmare',
    }),
    {
      definition: 'an extremely happy or peaceful period or scene',
      wordDistractors: ['Idol', 'Idle', 'Idyllic'],
      definitionDistractors: [
        'a period of great suffering',
        'a terrifying or distressing experience',
        'a chaotic and disorderly situation',
      ],
      exampleSentences: [
        { en: 'Summer at the lake was an idyll.', ko: '호수에서의 여름은 전원시였다.' },
        { en: 'They dreamed of a rural idyll away from the city.', ko: '그들은 도시를 떠난 전원의 낙원을 꿈꿨다.' },
      ],
    }
  ),
  word('Impecunious', '가난한', 10, 'adjective',
    ['부유한', '풍부한', '여유 있는', '재력 있는', '넉넉한', '부유', '풍부', '여유', '재력', '넉넉'],
    tips({
      etymology: 'im(없이) + pecunia(돈) + -ous -> 돈 없는',
      visual: '텅 빈 지갑',
      soundAlike: '임페큐니어스 = impecuniosity(가난)',
      context: 'The impecunious student lived on loans.',
      synonymAntonym: '동의어: penniless, destitute, 반의어: wealthy',
    }),
    {
      definition: 'having little or no money',
      wordDistractors: ['Impetuous', 'Incapacious', 'Inauspicious'],
      definitionDistractors: [
        'having great wealth or resources',
        'having enough for one\'s needs',
        'prosperous and successful',
      ],
      exampleSentences: [
        { en: 'The impecunious student lived on loans.', ko: '가난한 학생은 대출로 살았다.' },
        { en: 'His impecunious youth shaped his values.', ko: '그의 가난한 청년기가 그의 가치관을 형성했다.' },
      ],
    }
  ),
  word('Imperious', '거만한', 10, 'adjective',
    ['겸손한', '비굴한', '소심한', '복종하는', '순한', '겸손', '비굴', '소심', '복종', '순함'],
    tips({
      etymology: '라틴어 imperium(명령) -> 명령하는',
      visual: '손가락으로 가리키며 지시하는 지배자',
      soundAlike: '임피리어스 = imperiously(거만하게)',
      context: 'Her imperious manner alienated colleagues.',
      synonymAntonym: '동의어: domineering, arrogant, 반의어: humble',
    }),
    {
      definition: 'arrogant and domineering in manner',
      wordDistractors: ['Impervious', 'Impious', 'Imperative'],
      definitionDistractors: [
        'modest and unassuming',
        'willing to serve or obey',
        'gentle and kind in manner',
      ],
      exampleSentences: [
        { en: 'Her imperious manner alienated colleagues.', ko: '그녀의 거만한 태도가 동료들을 멀리했다.' },
        { en: 'He dismissed her with an imperious wave.', ko: '그는 거만한 손짓으로 그녀를 내쫓았다.' },
      ],
    }
  ),
  word('Impervious', '둔감한', 10, 'adjective',
    ['민감한', '느끼는', '영향받는', '투과되는', '취약한', '민감', '느낌', '영향', '투과', '취약'],
    tips({
      etymology: 'im(아니) + perv(통과) + -ious -> 통과되지 않는',
      visual: '비가 막혀 떨어지는 우산',
      soundAlike: '임퍼비어스 = imperviousness(둔감)',
      context: 'He was impervious to criticism.',
      synonymAntonym: '동의어: unmoved, immune, 반의어: susceptible',
    }),
    {
      definition: 'not affected or influenced by something',
      wordDistractors: ['Imperious', 'Pervious', 'Impermeable'],
      definitionDistractors: [
        'easily influenced or affected',
        'open to harm or attack',
        'sensitive to external factors',
      ],
      exampleSentences: [
        { en: 'He was impervious to criticism.', ko: '그는 비난에 둔감했다.' },
        { en: 'The coating is impervious to water.', ko: '코팅은 물에 둔감하다.' },
      ],
    }
  ),
  word('Impetuous', '성급한', 10, 'adjective',
    ['신중한', '견인하는', '참는', '계획적인', '냉정한', '신중', '견인', '참음', '계획', '냉정'],
    tips({
      etymology: 'im(안으로) + pet(달리다) + -uous -> 앞뒤 안 가리고',
      visual: '문을 밀치고 뛰어드는 사람',
      soundAlike: '임페츄어스 = impetuosity(성급함)',
      context: 'His impetuous decision cost him dearly.',
      synonymAntonym: '동의어: impulsive, rash, 반의어: cautious',
    }),
    {
      definition: 'acting or done quickly without thought',
      wordDistractors: ['Impetus', 'Imperious', 'Impulsive'],
      definitionDistractors: [
        'characterized by careful thought',
        'slow and deliberate in action',
        'cautious and hesitant',
      ],
      exampleSentences: [
        { en: 'His impetuous decision cost him dearly.', ko: '그의 성급한 결정이 그에게 큰 대가를 치르게 했다.' },
        { en: 'She regretted her impetuous purchase.', ko: '그녀는 성급한 구매를 후회했다.' },
      ],
    }
  ),
  word('Impugn', '의심하다', 10, 'verb',
    ['확인하다', '옹호하다', '지지하다', '믿다', '인정하다', '확인', '옹호', '지지', '믿음', '인정'],
    tips({
      etymology: 'im(안으로) + pugn(싸움) -> 공격적으로 의심',
      visual: '증인의 진실성에 손가락질하는 변호사',
      soundAlike: '임퓨인 = impugnable(공격 가능한)',
      context: 'The lawyer impugned the witness\'s credibility.',
      synonymAntonym: '동의어: challenge, call into question, 반의어: defend',
    }),
    {
      definition: 'to challenge the truth or validity of something',
      wordDistractors: ['Impute', 'Impinge', 'Impede'],
      definitionDistractors: [
        'to support or defend someone',
        'to confirm as true or valid',
        'to trust or believe in',
      ],
      exampleSentences: [
        { en: 'The lawyer impugned the witness\'s credibility.', ko: '변호사는 증인의 신뢰성을 의심했다.' },
        { en: 'No one dared to impugn his integrity.', ko: '아무도 그의 정직함을 의심하지 않았다.' },
      ],
    }
  ),
  word('Inchoate', '미완성의', 10, 'adjective',
    ['완성된', '발달한', '성숙한', '완벽한', '궤도에 오른', '완성', '발달', '성숙', '완벽', '궤도'],
    tips({
      etymology: '라틴어 inchoare(시작하다) -> 막 시작한',
      visual: '반쯤 그려진 스케치',
      soundAlike: '인코에이트 = inchoately(미완성으로)',
      context: 'His inchoate ideas needed development.',
      synonymAntonym: '동의어: nascent, rudimentary, 반의어: fully formed',
    }),
    {
      definition: 'just begun and not fully formed',
      wordDistractors: ['Incipient', 'Chaotic', 'Inchoately'],
      definitionDistractors: [
        'fully developed and complete',
        'polished and refined',
        'mature and sophisticated',
      ],
      exampleSentences: [
        { en: 'His inchoate ideas needed development.', ko: '그의 미완성 아이디어는 발전이 필요했다.' },
        { en: 'The inchoate plan began to take shape.', ko: '미완성 계획이 형체를 갖추기 시작했다.' },
      ],
    }
  ),
  word('Incipient', '초기의', 10, 'adjective',
    ['완전한', '만개한', '성숙한', '진행된', '끝난', '완전', '만개', '성숙', '진행', '끝남'],
    tips({
      etymology: 'in(안으로) + cip(시작) + -ient -> 막 시작하는',
      visual: '땅에서 막 돋아나는 새싹',
      soundAlike: '인시피언트 = incipience(초기)',
      context: 'Signs of incipient decay.',
      synonymAntonym: '동의어: beginning, emerging, 반의어: full-blown',
    }),
    {
      definition: 'in an initial stage; just beginning',
      wordDistractors: ['Inchoate', 'Incident', 'Incipience'],
      definitionDistractors: [
        'fully developed or mature',
        'in a final or concluding stage',
        'at peak or maximum level',
      ],
      exampleSentences: [
        { en: 'Signs of incipient decay were visible.', ko: '초기 부패의 징후가 보였다.' },
        { en: 'She felt incipient doubt about the plan.', ko: '그녀는 계획에 대한 초기 의심을 느꼈다.' },
      ],
    }
  ),
  word('Incontrovertible', '부정할 수 없는', 10, 'adjective',
    ['의심스러운', '논쟁의 여지 있는', '불확실한', '반론 가능한', '애매한', '의심', '논쟁', '불확실', '반론', '애매'],
    tips({
      etymology: 'in(아니) + controvert(논쟁) + -ible -> 논쟁 불가',
      visual: '자물쇠가 잠긴 확실한 증거 상자',
      soundAlike: '인컨트로버터블 = incontrovertibly(부정할 수 없이)',
      context: 'The evidence was incontrovertible.',
      synonymAntonym: '동의어: indisputable, irrefutable, 반의어: debatable',
    }),
    {
      definition: 'not able to be denied or disputed',
      wordDistractors: ['Incontrovertibly', 'Controvertible', 'Indisputable'],
      definitionDistractors: [
        'open to question or debate',
        'uncertain or doubtful',
        'vague or ambiguous',
      ],
      exampleSentences: [
        { en: 'The evidence was incontrovertible.', ko: '증거는 부정할 수 없었다.' },
        { en: 'It is an incontrovertible fact that he was there.', ko: '그가 거기 있었다는 것은 부정할 수 없는 사실이다.' },
      ],
    }
  ),
  word('Incumbent', '재임자', 10, 'noun',
    ['도전자', '신규', '후보', '지원자', '비재임자', '도전', '지원', '비재임', '사과', '책'],
    tips({
      etymology: 'in(위에) + cumb(눕다) -> 그 자리에 앉은 자',
      visual: '의자에 앉아 있는 현직 의원',
      soundAlike: '인컴번트 = incumbency(재임)',
      context: 'The incumbent won the election.',
      synonymAntonym: '동의어: officeholder, current holder, 반의어: challenger',
    }),
    {
      definition: 'the current holder of an office or position',
      wordDistractors: ['Incumbency', 'Incumber', 'Encumber'],
      definitionDistractors: [
        'a person trying to win a position',
        'someone who has left office',
        'a newcomer or beginner',
      ],
      exampleSentences: [
        { en: 'The incumbent won the election.', ko: '재임자가 선거에서 승리했다.' },
        { en: 'The incumbent senator is seeking reelection.', ko: '재임 상원의원이 재선을 추구하고 있다.' },
      ],
    }
  ),
  word('Ineffable', '말로 표현할 수 없는', 10, 'adjective',
    ['설명 가능한', '보통의', '평범한', '언어화 가능한', '솔직히 말할 수 있는', '설명', '보통', '평범', '언어화', '솔직'],
    tips({
      etymology: 'in(아니) + eff(말하다) + -able -> 말할 수 없는',
      visual: '입을 벌렸으나 말이 막힌 사람',
      soundAlike: '이네퍼블 = ineffably(말로 표현할 수 없이)',
      context: 'The ineffable beauty of the sunset.',
      synonymAntonym: '동의어: indescribable, inexpressible, 반의어: describable',
    }),
    {
      definition: 'too great or extreme to be expressed in words',
      wordDistractors: ['Ineffable', 'Ineffective', 'Inefficient'],
      definitionDistractors: [
        'easily described or explained',
        'ordinary or commonplace',
        'clear and explicit',
      ],
      exampleSentences: [
        { en: 'The ineffable beauty of the sunset moved her.', ko: '일몰의 말로 표현할 수 없는 아름다움에 그녀는 감동했다.' },
        { en: 'He felt an ineffable sense of peace.', ko: '그는 말로 표현할 수 없는 평화를 느꼈다.' },
      ],
    }
  ),
  word('Inexorable', '멈출 수 없는', 10, 'adjective',
    ['멈출 수 있는', '회피 가능한', '유연한', '양보하는', '막을 수 있는', '멈춤', '회피', '유연', '양보', '막음'],
    tips({
      etymology: 'in(아니) + exor(기도) + -able -> 탄원도 소용없는',
      visual: '멈추지 않는 시계추',
      soundAlike: '이넥서러블 = inexorably(멈출 수 없이)',
      context: 'The inexorable march of time.',
      synonymAntonym: '동의어: relentless, unstoppable, 반의어: stoppable',
    }),
    {
      definition: 'impossible to stop or prevent',
      wordDistractors: ['Exorable', 'Inexorably', 'Inexhaustible'],
      definitionDistractors: [
        'able to be avoided or prevented',
        'flexible and adaptable',
        'willing to compromise',
      ],
      exampleSentences: [
        { en: 'The inexorable march of time.', ko: '멈출 수 없는 시간의 행진.' },
        { en: 'The disease followed its inexorable course.', ko: '질병은 멈출 수 없는 경로를 따랐다.' },
      ],
    }
  ),
  word('Inscrutable', '헤아리기 어려운', 10, 'adjective',
    ['명확한', '투명한', '이해하기 쉬운', '솔직한', '드러난', '명확', '투명', '이해', '솔직', '드러남'],
    tips({
      etymology: 'in(아니) + scrut(탐색) + -able -> 꿰뚫어 볼 수 없는',
      visual: '표정 없는 얼굴',
      soundAlike: '인스크루터블 = inscrutability(헤아리기 어려움)',
      context: 'His inscrutable expression revealed nothing.',
      synonymAntonym: '동의어: enigmatic, unfathomable, 반의어: transparent',
    }),
    {
      definition: 'impossible to understand or interpret',
      wordDistractors: ['Scrutable', 'Inscrutability', 'Unfathomable'],
      definitionDistractors: [
        'clear and easy to understand',
        'open and honest in manner',
        'obvious and apparent',
      ],
      exampleSentences: [
        { en: 'His inscrutable expression revealed nothing.', ko: '그의 헤아리기 어려운 표정은 아무것도 드러내지 않았다.' },
        { en: 'The inscrutable motives behind the decision puzzled many.', ko: '결정 뒤의 헤아리기 어려운 동기가 많은 사람을 당혹하게 했다.' },
      ],
    }
  ),
  word('Insidious', '은근한', 10, 'adjective',
    ['노골적인', '솔직한', '직접적인', '명시적인', '공개적인', '노골', '솔직', '직접', '명시', '공개'],
    tips({
      etymology: 'in(안으로) + sed(앉다) -> 잠복해 들어가는',
      visual: '어둠 속에서 천천히 다가오는 그림자',
      soundAlike: '인시디어스 = insidiously(은근히)',
      context: 'Insidious disease spread undetected.',
      synonymAntonym: '동의어: stealthy, treacherous, 반의어: overt',
    }),
    {
      definition: 'proceeding in a gradual way with harmful effects',
      wordDistractors: ['Invidious', 'Insidiously', 'Insipid'],
      definitionDistractors: [
        'open and direct in manner',
        'honest and straightforward',
        'obvious and unconcealed',
      ],
      exampleSentences: [
        { en: 'Insidious disease spread undetected.', ko: '은근한 질병이 눈에 띄지 않게 퍼졌다.' },
        { en: 'The insidious influence of gossip destroyed trust.', ko: '가십의 은근한 영향이 신뢰를 파괴했다.' },
      ],
    }
  ),
  word('Insipid', '맛없는', 10, 'adjective',
    ['풍미 있는', '맛있는', '생기 있는', '생동감 있는', '재미있는', '풍미', '맛남', '생기', '생동감', '재미'],
    tips({
      etymology: 'in(아니) + sip(맛) + -id -> 맛 없는',
      visual: '무미건조한 수프 한 그릇',
      soundAlike: '인시피드 = insipidity(맛없음)',
      context: 'The insipid novel put me to sleep.',
      synonymAntonym: '동의어: bland, vapid, 반의어: flavorful',
    }),
    {
      definition: 'lacking flavor, interest, or excitement',
      wordDistractors: ['Intrepid', 'Insipidity', 'Insidious'],
      definitionDistractors: [
        'having a strong pleasant taste',
        'full of energy and interest',
        'exciting and stimulating',
      ],
      exampleSentences: [
        { en: 'The insipid novel put me to sleep.', ko: '맛없는 소설이 나를 잠들게 했다.' },
        { en: 'The soup was insipid and needed seasoning.', ko: '수프는 맛이 없었고 양념이 필요했다.' },
      ],
    }
  ),
  word('Intransigent', '타협하지 않는', 10, 'adjective',
    ['유연한', '양보하는', '협조적인', '수용적인', '타협하는', '유연', '양보', '협조', '수용', '타협'],
    tips({
      etymology: 'in(아니) + trans(넘어) + ig(가다) -> 넘어가지 않는',
      visual: '팔짱을 끼고 단호히 서 있는 사람',
      soundAlike: '인트랜지전트 = intransigence(비타협)',
      context: 'The union remained intransigent.',
      synonymAntonym: '동의어: uncompromising, adamant, 반의어: flexible',
    }),
    {
      definition: 'unwilling to change one\'s views or agree',
      wordDistractors: ['Intransigent', 'Transigent', 'Intransitive'],
      definitionDistractors: [
        'willing to adapt or compromise',
        'cooperative and agreeable',
        'open to different opinions',
      ],
      exampleSentences: [
        { en: 'The union remained intransigent.', ko: '노조는 타협하지 않았다.' },
        { en: 'His intransigent stance blocked the deal.', ko: '그의 비타협적 입장이 거래를 막았다.' },
      ],
    }
  ),
  word('Inundate', '몰아넣다', 10, 'verb',
    ['비우다', '말리다', '말라가게 하다', '부족하게 하다', '털어내다', '비움', '말림', '말라감', '부족', '털어냄'],
    tips({
      etymology: 'in(안으로) + und(물결) + -ate -> 물로 채우다',
      visual: '홍수로 넘치는 강',
      soundAlike: '이넌데이트 = inundation(몰아넣음)',
      context: 'We were inundated with applications.',
      synonymAntonym: '동의어: flood, overwhelm, 반의어: drain',
    }),
    {
      definition: 'to overwhelm with a large amount of something',
      wordDistractors: ['Inundate', 'Inundated', 'Inundation'],
      definitionDistractors: [
        'to remove liquid or contents',
        'to dry out or deplete',
        'to provide sparingly',
      ],
      exampleSentences: [
        { en: 'We were inundated with applications.', ko: '우리는 신청서에 몰아넣어졌다.' },
        { en: 'The news inundated him with offers.', ko: '소식이 그에게 제안을 몰아넣었다.' },
      ],
    }
  ),
  word('Invective', '비난', 10, 'noun',
    ['칭찬', '찬사', '축복', '축하', '찬미', '사과', '책', '고양이', '개', '물고기'],
    tips({
      etymology: 'in(안으로) + vec(나르다) -> 공격적으로 말하다',
      visual: '격렬히 욕설을 퍼붓는 입',
      soundAlike: '인벡티브 = inveigh(격렬히 비난하다)',
      context: 'The debate descended into invective.',
      synonymAntonym: '동의어: abuse, vituperation, 반의어: eulogy',
    }),
    {
      definition: 'insulting or abusive language',
      wordDistractors: ['Invective', 'Inventive', 'Inveigh'],
      definitionDistractors: [
        'words of praise or approval',
        'a formal expression of thanks',
        'polite and respectful speech',
      ],
      exampleSentences: [
        { en: 'The debate descended into invective.', ko: '토론이 비난으로 떨어졌다.' },
        { en: 'He hurled invective at his critics.', ko: '그는 비평가들에게 비난을 퍼부었다.' },
      ],
    }
  ),
  word('Inveterate', '고질적인', 10, 'adjective',
    ['일시적인', '가벼운', '새로 시작한', '우발적인', '가끔의', '일시', '가벼움', '새시작', '우발', '가끔'],
    tips({
      etymology: 'in(안으로) + veter(오래된) + -ate -> 오래 고착된',
      visual: '수십 년 된 습관의 깊은 자국',
      soundAlike: '인베터릿 = inveteracy(고질)',
      context: 'He is an inveterate gambler.',
      synonymAntonym: '동의어: habitual, chronic, 반의어: occasional',
    }),
    {
      definition: 'having a long-standing habit or custom',
      wordDistractors: ['Inveterate', 'Invertebrate', 'Inveteracy'],
      definitionDistractors: [
        'occurring only once or rarely',
        'newly begun or started',
        'temporary or short-lived',
      ],
      exampleSentences: [
        { en: 'He is an inveterate gambler.', ko: '그는 고질적인 도박꾼이다.' },
        { en: 'Her inveterate optimism never faded.', ko: '그녀의 고질적인 낙관론은 절대 사라지지 않았다.' },
      ],
    }
  ),
  word('Irascible', '성급한', 10, 'adjective',
    ['침착한', '침착', '온화한', '인내심 있는', '냉정한', '온화', '인내', '냉정', '부드러움', '좋은'],
    tips({
      etymology: '라틴어 ira(분노) + -cible -> 화를 잘 내는',
      visual: '찻잔을 던지는 화난 사람',
      soundAlike: '이래시블 = irascibility(성급함)',
      context: 'His irascible temper scared the staff.',
      synonymAntonym: '동의어: hot-tempered, irritable, 반의어: calm',
    }),
    {
      definition: 'easily provoked to anger',
      wordDistractors: ['Irascible', 'Iriscible', 'Irascibility'],
      definitionDistractors: [
        'remaining calm under pressure',
        'gentle and mild in nature',
        'patient and tolerant',
      ],
      exampleSentences: [
        { en: 'His irascible temper scared the staff.', ko: '그의 성급한 성질이 직원들을 겁먹게 했다.' },
        { en: 'The irascible old man shouted at the children.', ko: '성급한 노인이 아이들에게 소리를 질렀다.' },
      ],
    }
  ),
  word('Juxtapose', '나란히 놓다', 10, 'verb',
    ['분리하다', '떼어놓다', '혼합하다', '섞다', '겹치다', '분리', '떼어냄', '혼합', '섞음', '겹침'],
    tips({
      etymology: '라틴어 juxta(나란히) + pose(놓다) -> 나란히 배치',
      visual: '대비되는 두 사진을 나란히 붙인 벽',
      soundAlike: '젝스터포즈 = juxtaposition(나란히 놓음)',
      context: 'The exhibition juxtaposes old and new art.',
      synonymAntonym: '동의어: compare side by side, contrast, 반의어: separate',
    }),
    {
      definition: 'to place side by side for comparison',
      wordDistractors: ['Juxtaposition', 'Juxtaposed', 'Composite'],
      definitionDistractors: [
        'to move apart or distribute',
        'to blend or merge together',
        'to hide or conceal',
      ],
      exampleSentences: [
        { en: 'The exhibition juxtaposes old and new art.', ko: '전시회는 오래된 예술과 새로운 예술을 나란히 놓는다.' },
        { en: 'The film juxtaposes scenes of wealth and poverty.', ko: '그 영화는 부와 가난의 장면을 나란히 놓는다.' },
      ],
    }
  ),
  word('Lachrymose', '눈물 많은', 10, 'adjective',
    ['명랑한', '기쁜', '밝은', '유쾌한', '환한', '명랑', '기쁨', '밝음', '유쾌', '환함'],
    tips({
      etymology: '라틴어 lacrima(눈물) + -ose -> 눈물이 많은',
      visual: '휴지로 눈물을 닦는 얼굴',
      soundAlike: '래크리모스 = lachrymosely(눈물 많게)',
      context: 'A lachrymose farewell at the station.',
      synonymAntonym: '동의어: tearful, weepy, 반의어: cheerful',
    }),
    {
      definition: 'given to weeping or tending to cause tears',
      wordDistractors: ['Lachrymal', 'Lachrymatory', 'Loquacious'],
      definitionDistractors: [
        'full of joy and happiness',
        'bright and cheerful',
        'humorous and amusing',
      ],
      exampleSentences: [
        { en: 'A lachrymose farewell at the station.', ko: '역에서의 눈물 많은 작별.' },
        { en: 'The lachrymose movie made everyone cry.', ko: '눈물 많은 영화가 모두를 울렸다.' },
      ],
    }
  ),
  word('Laconic', '말수 적은', 10, 'adjective',
    ['말이 많은', '수다스러운', '장황한', '말 수 많은', '이야기 많은', '말많음', '수다', '장황', '말수많음', '이야기많음'],
    tips({
      etymology: '그리스어 Lakōn(스파르타인) -> 간결한 스파르타식',
      visual: '한 단어로 답하는 사람',
      soundAlike: '래코닉 = laconically(말수 적게)',
      context: 'His laconic reply was "No."',
      synonymAntonym: '동의어: terse, concise, 반의어: verbose',
    }),
    {
      definition: 'using very few words',
      wordDistractors: ['Laconism', 'Laconicum', 'Taciturn'],
      definitionDistractors: [
        'using more words than necessary',
        'talkative and chatty',
        'elaborate and detailed in speech',
      ],
      exampleSentences: [
        { en: 'His laconic reply was "No."', ko: '그의 말수 적은 대답은 "아니오"였다.' },
        { en: 'She was known for her laconic wit.', ko: '그녀는 말수 적은 재치로 유명했다.' },
      ],
    }
  ),
];
