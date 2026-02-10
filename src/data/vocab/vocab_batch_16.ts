import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch16: VocabItem[] = [
  word('Eradicate', '근절하다', 8, 'verb',
    ['조장하다', '번식시키다', '확산하다', '유포하다', '보존하다', '양성', '증식', '융성', '번성', '유지'],
    tips({
      etymology: 'e(완전히) + radic(뿌리) + -ate -> 뿌리 뽑다',
      visual: '뿌리째 뽑히는 잡초',
      soundAlike: '이래디케이트 = 이래디케이션(근절)',
      context: 'We must eradicate poverty and disease.',
      synonymAntonym: '동의어: eliminate, abolish, 반의어: establish',
    }),
    {
      definition: 'to destroy something completely so that it no longer exists',
      wordDistractors: ['Evacuate', 'Emit', 'Elucidate'],
      definitionDistractors: [
        'to bring something into existence or cause it to grow',
        'to spread or distribute something widely',
        'to keep something in its original state',
      ],
      exampleSentences: [
        { en: 'We must eradicate poverty and disease.', ko: '우리는 빈곤과 질병을 근절해야 한다.' },
        { en: 'The campaign aims to eradicate malaria from the region.', ko: '그 캠페인은 이 지역에서 말라리아를 근절하는 것을 목표로 한다.' },
      ],
    }
  ),
  word('Erratic', '변덕스러운', 8, 'adjective',
    ['일정한', '안정적인', '규칙적인', '예측 가능한', '꾸준한', '안정', '규칙', '일관', '예측', '꾸준'],
    tips({
      etymology: '라틴어 erratus(헤매다) -> 일정하지 않은',
      visual: '심전도처럼 들쭉날쭉한 그래프',
      soundAlike: '이래틱 = 이래티컬리(변덕스럽게)',
      context: 'His erratic behavior worried everyone.',
      synonymAntonym: '동의어: unpredictable, irregular, 반의어: consistent',
    }),
    {
      definition: 'not regular or predictable; likely to change suddenly',
      wordDistractors: ['Static', 'Classic', 'Automatic'],
      definitionDistractors: [
        'following a fixed pattern or schedule',
        'calm and steady; not easily disturbed',
        'reliable and unchanging over time',
      ],
      exampleSentences: [
        { en: 'His erratic behavior worried everyone.', ko: '그의 변덕스러운 행동이 모두를 걱정시켰다.' },
        { en: 'The stock market showed erratic movements today.', ko: '주식 시장이 오늘 변덕스러운 움직임을 보였다.' },
      ],
    }
  ),
  word('Erudite', '박식한', 8, 'adjective',
    ['무지한', '무식한', '천박한', '얕은', '미숙한', '무지', '무식', '천박', '얕음', '미숙'],
    tips({
      etymology: 'e(떨어져) + rud(거친) + -ite -> 거친 것에서 벗어난',
      visual: '서적으로 가득한 서재의 학자',
      soundAlike: '에루다이트 = 에루디션(박식)',
      context: 'The professor is remarkably erudite.',
      synonymAntonym: '동의어: scholarly, learned, 반의어: ignorant',
    }),
    {
      definition: 'having or showing great knowledge or learning',
      wordDistractors: ['Eligible', 'Exquisite', 'Expedite'],
      definitionDistractors: [
        'lacking knowledge or awareness',
        'simple and unrefined in manner',
        'superficial or lacking depth',
      ],
      exampleSentences: [
        { en: 'The professor is remarkably erudite.', ko: '그 교수는 놀랄 만큼 박식하다.' },
        { en: 'His erudite commentary enriched the documentary.', ko: '그의 박식한 해설이 다큐멘터리를 풍부하게 만들었다.' },
      ],
    }
  ),
  word('Esoteric', '난해한', 8, 'adjective',
    ['명백한', '일반적인', '쉬운', '보편적', '공개된', '명백', '일반', '쉬움', '보편', '공개'],
    tips({
      etymology: '그리스어 esoterikos(내부의) -> 소수만 아는',
      visual: '비밀 단체의 폐쇄된 문',
      soundAlike: '이소테릭 = 이소테리시즘(난해함)',
      context: 'The lecture was too esoteric for beginners.',
      synonymAntonym: '동의어: obscure, abstruse, 반의어: common',
    }),
    {
      definition: 'intended for or understood by only a small group of people with specialized knowledge',
      wordDistractors: ['Exotic', 'Economic', 'Erotic'],
      definitionDistractors: [
        'easy to understand or see clearly',
        'common and widely known',
        'obvious and plain to see',
      ],
      exampleSentences: [
        { en: 'The lecture was too esoteric for beginners.', ko: '그 강의는 초보자에게 너무 난해했다.' },
        { en: 'He studies esoteric philosophies from ancient texts.', ko: '그는 고대 문헌의 난해한 철학을 공부한다.' },
      ],
    }
  ),
  word('Espouse', '지지하다', 8, 'verb',
    ['반대하다', '배척하다', '거부하다', '거절하다', '저버리다', '반대', '배척', '거부', '거절', '저버림'],
    tips({
      etymology: '라틴어 sponsare(약혼하다) -> 받아들이다',
      visual: '플래카드를 들고 연설하는 후원자',
      soundAlike: '이스파우즈 = 이스파우설(지지하는)',
      context: 'She espouses environmental causes.',
      synonymAntonym: '동의어: adopt, advocate, 반의어: oppose',
    }),
    {
      definition: 'to support or adopt a cause, belief, or way of life',
      wordDistractors: ['Expose', 'Oppose', 'Dispose'],
      definitionDistractors: [
        'to express strong disapproval of something',
        'to refuse to accept or consider',
        'to reject or abandon someone or something',
      ],
      exampleSentences: [
        { en: 'She espouses environmental causes.', ko: '그녀는 환경 운동을 지지한다.' },
        { en: 'The party espouses traditional values.', ko: '그 정당은 전통적 가치를 지지한다.' },
      ],
    }
  ),
  word('Estrange', '소원하게 하다', 8, 'verb',
    ['화해시키다', '친하게 하다', '연결하다', '화합시키다', '가깝게 하다', '화해', '친화', '연결', '화합', '친밀'],
    tips({
      etymology: 'e(밖으로) + strange(낯선) -> 낯설게 만들다',
      visual: '등을 돌린 두 사람 사이의 거리',
      soundAlike: '이스트레인지 = 이스트레인지먼트(소원)',
      context: 'Their feud estranged them for years.',
      synonymAntonym: '동의어: alienate, distance, 반의어: reconcile',
    }),
    {
      definition: 'to cause someone to feel no longer close or friendly',
      wordDistractors: ['Strange', 'Exchange', 'Arrange'],
      definitionDistractors: [
        'to restore friendly relations between people',
        'to bring people together in friendship',
        'to join or link things together',
      ],
      exampleSentences: [
        { en: 'Their feud estranged them for years.', ko: '그들의 불화로 인해 그들은 수년간 소원해졌다.' },
        { en: 'His political views estranged him from his family.', ko: '그의 정치적 견해가 그를 가족과 소원하게 만들었다.' },
      ],
    }
  ),
  word('Euphemism', '완곡어', 8, 'noun',
    ['직설', '노골적 표현', '비속어', '욕설', '적나라함', '직설', '노골', '비속', '적나라', '직언'],
    tips({
      etymology: 'eu(좋은) + pheme(말) + -ism -> 부드럽게 말하기',
      visual: '"잠들다"라고 쓰인 "죽다" 대신',
      soundAlike: '유페미즘 = 유페미스틱(완곡한)',
      context: '"Pass away" is a euphemism for "die."',
      synonymAntonym: '동의어: 완곡어,委婉語, 반의어: 직설',
    }),
    {
      definition: 'a mild or indirect word or expression used instead of one considered harsh or blunt',
      wordDistractors: ['Euphemism', 'Euphoria', 'Epidemic'],
      definitionDistractors: [
        'language that is direct and to the point',
        'offensive or vulgar language',
        'an obvious or explicit statement',
      ],
      exampleSentences: [
        { en: '"Pass away" is a euphemism for "die."', ko: '"잠들다"는 "죽다"의 완곡어이다.' },
        { en: 'He used a euphemism to soften the bad news.', ko: '그는 나쁜 소식을 완곡하게 전달하기 위해 완곡어를 사용했다.' },
      ],
    }
  ),
  word('Exacerbate', '악화시키다', 8, 'verb',
    ['완화하다', '나아지게 하다', '가라앉히다', '진정시키다', '호전시키다', '완화', '호전', '진정', '개선', '가라앉힘'],
    tips({
      etymology: 'ex(강조) + acerb(쓴) + -ate -> 더 쓰게 만들다',
      visual: '상처에 소금을 뿌리는 손',
      soundAlike: '이그재서베이트 = 이그재서베이션(악화)',
      context: 'The drought exacerbated the food shortage.',
      synonymAntonym: '동의어: aggravate, worsen, 반의어: alleviate',
    }),
    {
      definition: 'to make a problem or bad situation worse',
      wordDistractors: ['Exasperate', 'Exaggerate', 'Exterminate'],
      definitionDistractors: [
        'to make pain or suffering less severe',
        'to improve a situation or condition',
        'to calm or soothe someone or something',
      ],
      exampleSentences: [
        { en: 'The drought exacerbated the food shortage.', ko: '가뭄이 식량 부족을 악화시켰다.' },
        { en: 'His comments only exacerbated the conflict.', ko: '그의 발언은 갈등을 더 악화시킬 뿐이었다.' },
      ],
    }
  ),
  word('Exalt', '칭송하다', 8, 'verb',
    ['비난하다', '폄하하다', '낮추다', '모욕하다', '창피주다', '비난', '폄하', '낮춤', '모욕', '창피'],
    tips({
      etymology: 'ex(위로) + alt(높다) -> 높이 올리다',
      visual: '왕관을 씌워주는 장면',
      soundAlike: '이골트 = 이골테이션(칭송)',
      context: 'The crowd exalted the champion.',
      synonymAntonym: '동의어: glorify, praise, 반의어: disparage',
    }),
    {
      definition: 'to praise someone or something highly; to hold in high regard',
      wordDistractors: ['Exact', 'Exist', 'Exert'],
      definitionDistractors: [
        'to express strong disapproval of someone',
        'to speak of in a degrading manner',
        'to cause someone to feel ashamed',
      ],
      exampleSentences: [
        { en: 'The crowd exalted the champion.', ko: '군중은 우승자를 칭송했다.' },
        { en: 'The nation exalted him as a hero.', ko: '국민은 그를 영웅으로 칭송했다.' },
      ],
    }
  ),
  word('Exemplify', '예시로 보여주다', 8, 'verb',
    ['모호히 하다', '숨기다', '역설하다', '혼란시키다', '부정하다', '모호', '숨김', '역설', '혼란', '부정'],
    tips({
      etymology: 'ex(밖으로) + exempl(예시) + -ify -> 예시로 나타내다',
      visual: '교과서의 구체적 사례 박스',
      soundAlike: '이젬플리파이 = 이젬플리피케이션(예시)',
      context: 'Her work exemplifies excellence.',
      synonymAntonym: '동의어: illustrate, demonstrate, 반의어: obscure',
    }),
    {
      definition: 'to be a typical example of something; to illustrate by example',
      wordDistractors: ['Simplify', 'Amplify', 'Emphasize'],
      definitionDistractors: [
        'to make something unclear or hard to understand',
        'to hide or conceal something',
        'to state that something is not true',
      ],
      exampleSentences: [
        { en: 'Her work exemplifies excellence.', ko: '그녀의 작품은 탁월함을 예시로 보여준다.' },
        { en: 'This case exemplifies the challenges we face.', ko: '이 사례는 우리가 직면한 도전을 예시로 보여준다.' },
      ],
    }
  ),
  word('Exonerate', '무죄로 하다', 8, 'verb',
    ['유죄 판결하다', '고소하다', '비난하다', '책임지우다', '혐의 씌우다', '유죄', '고소', '비난', '책임', '혐의'],
    tips({
      etymology: 'ex(벗어나) + oner(무게) + -ate -> 짐을 벗기다',
      visual: '쇠사슬이 풀리는 죄수',
      soundAlike: '이곤네레이트 = 이곤네레이션(무죄)',
      context: 'New evidence exonerated the defendant.',
      synonymAntonym: '동의어: acquit, absolve, 반의어: convict',
    }),
    {
      definition: 'to declare someone free from blame or guilt',
      wordDistractors: ['Exacerbate', 'Exterminate', 'Extricate'],
      definitionDistractors: [
        'to find someone guilty of a crime',
        'to formally accuse someone of wrongdoing',
        'to blame someone for something',
      ],
      exampleSentences: [
        { en: 'New evidence exonerated the defendant.', ko: '새 증거가 피고인을 무죄로 했다.' },
        { en: 'The investigation exonerated the officer.', ko: '수사 결과 그 경찰관은 무죄로 판명되었다.' },
      ],
    }
  ),
  word('Expedite', '촉진하다', 8, 'verb',
    ['지연시키다', '방해하다', '늦추다', '막다', '연기하다', '지연', '방해', '늦춤', '막음', '연기'],
    tips({
      etymology: 'ex(밖으로) + ped(발) + -ite -> 발을 빼다(빠르게)',
      visual: '빨간 긴급 스티커가 붙은 서류',
      soundAlike: '엑스피다이트 = 엑스피디션(촉진)',
      context: 'We need to expedite the approval process.',
      synonymAntonym: '동의어: hasten, accelerate, 반의어: delay',
    }),
    {
      definition: 'to make a process or action happen more quickly',
      wordDistractors: ['Exceed', 'Expire', 'Explode'],
      definitionDistractors: [
        'to cause delay or make something slower',
        'to block or prevent progress',
        'to postpone something to a later time',
      ],
      exampleSentences: [
        { en: 'We need to expedite the approval process.', ko: '우리는 승인 절차를 촉진해야 한다.' },
        { en: 'Shipments were expedited to meet the deadline.', ko: '배송이 마감을 맞추기 위해 촉진되었다.' },
      ],
    }
  ),
  word('Explicit', '명시적인', 8, 'adjective',
    ['암시적인', '모호한', '숨겨진', '애매한', '암묵적', '암시', '모호', '숨김', '애매', '암묵'],
    tips({
      etymology: 'ex(밖으로) + plic(접다) + -it -> 펼쳐 놓은',
      visual: '모든 조건이 체크리스트로 나열된 계약서',
      soundAlike: '익스플리시트 = 익스플리시트리(명시적으로)',
      context: 'Please give explicit instructions.',
      synonymAntonym: '동의어: clear, direct, 반의어: implicit',
    }),
    {
      definition: 'stated clearly and in detail, leaving no room for doubt',
      wordDistractors: ['Implicit', 'Elicit', 'Exploit'],
      definitionDistractors: [
        'suggested but not directly expressed',
        'unclear or open to multiple interpretations',
        'hidden or not made known',
      ],
      exampleSentences: [
        { en: 'Please give explicit instructions.', ko: '명시적인 지시를 해 주세요.' },
        { en: 'The contract contains explicit terms.', ko: '계약서에는 명시적인 조항이 포함되어 있다.' },
      ],
    }
  ),
  word('Extol', '칭찬하다', 8, 'verb',
    ['비난하다', '폄하하다', '경멸하다', '매도하다', '모욕하다', '비난', '폄하', '경멸', '매도', '모욕'],
    tips({
      etymology: 'ex(위로) + tol(들다) -> 높이 들어 올리다',
      visual: '시상대 위에 올라가는 우승자',
      soundAlike: '익스톨 = 익스톨먼트(칭찬)',
      context: 'Critics extolled the film.',
      synonymAntonym: '동의어: praise, laud, 반의어: denounce',
    }),
    {
      definition: 'to praise someone or something enthusiastically',
      wordDistractors: ['Control', 'Patrol', 'Install'],
      definitionDistractors: [
        'to express strong disapproval or criticism',
        'to speak of someone with contempt',
        'to insult or offend someone',
      ],
      exampleSentences: [
        { en: 'Critics extolled the film.', ko: '비평가들은 그 영화를 칭찬했다.' },
        { en: 'She extolled the virtues of the new policy.', ko: '그녀는 새 정책의 장점을 칭찬했다.' },
      ],
    }
  ),
  word('Extraneous', '무관한', 8, 'adjective',
    ['관련된', '핵심적인', '필수적인', '근본적인', '직접적인', '관련', '핵심', '필수', '근본', '직접'],
    tips({
      etymology: 'extra(밖에) + neous -> 바깥의, 관계없는',
      visual: '본문과 동떨어진 여백의 낙서',
      soundAlike: '익스트레니어스 = 익스트레니어슬리(무관하게)',
      context: 'Remove all extraneous details.',
      synonymAntonym: '동의어: irrelevant, unnecessary, 반의어: relevant',
    }),
    {
      definition: 'not relevant or essential to the subject or matter at hand',
      wordDistractors: ['Spontaneous', 'Contemporaneous', 'Simultaneous'],
      definitionDistractors: [
        'closely connected to the matter',
        'of the greatest importance',
        'absolutely necessary',
      ],
      exampleSentences: [
        { en: 'Remove all extraneous details.', ko: '모든 무관한 세부사항을 제거하세요.' },
        { en: 'The report was cluttered with extraneous information.', ko: '보고서에는 무관한 정보가 가득했다.' },
      ],
    }
  ),
  word('Extricate', '빠져나오게 하다', 8, 'verb',
    ['얽어매다', '가두다', '덮치다', '끼우다', '빠뜨리다', '얽음', '가둠', '덮침', '끼움', '빠뜨림'],
    tips({
      etymology: 'ex(밖으로) + tric(복잡) + -ate -> 복잡에서 빼내다',
      visual: '덩굴에서 발을 빼는 등산가',
      soundAlike: '익스트리케이트 = 익스트리케이션(구출)',
      context: 'He extricated himself from the contract.',
      synonymAntonym: '동의어: disentangle, free, 반의어: entangle',
    }),
    {
      definition: 'to free someone or something from a difficult or entangled situation',
      wordDistractors: ['Lubricate', 'Complicate', 'Duplicate'],
      definitionDistractors: [
        'to twist or entangle things together',
        'to confine or imprison someone',
        'to trap or catch someone',
      ],
      exampleSentences: [
        { en: 'He extricated himself from the contract.', ko: '그는 계약에서 빠져나왔다.' },
        { en: 'Firefighters extricated the victim from the wreckage.', ko: '소방대원들이 사고 현장에서 피해자를 구출했다.' },
      ],
    }
  ),
  word('Fabricate', '조작하다', 8, 'verb',
    ['정직히 말하다', '보존하다', '참되게 하다', '검증하다', '실사하다', '정직', '보존', '참됨', '검증', '실사'],
    tips({
      etymology: '라틴어 fabricare(만들다) -> 꾸며 만들다',
      visual: '가짜 증거를 만드는 손',
      soundAlike: '패브리케이트 = 패브리케이션(조작)',
      context: 'The witness fabricated the story.',
      synonymAntonym: '동의어: invent, forge, 반의어: verify',
    }),
    {
      definition: 'to invent or concoct something false, especially a story or evidence',
      wordDistractors: ['Lubricate', 'Vindicate', 'Mitigate'],
      definitionDistractors: [
        'to confirm the truth or accuracy of something',
        'to tell the truth without deception',
        'to keep something in its original state',
      ],
      exampleSentences: [
        { en: 'The witness fabricated the story.', ko: '그 증인은 얘기를 조작했다.' },
        { en: 'He fabricated evidence to support his claim.', ko: '그는 자신의 주장을 뒷받침하기 위해 증거를 조작했다.' },
      ],
    }
  ),
  word('Facetious', '농담하는', 8, 'adjective',
    ['진지한', '엄숙한', '진솔한', '성실한', '진지', '엄숙', '진솔', '성실', '경건', '엄격'],
    tips({
      etymology: '라틴어 facetia(재치) -> 농담하는',
      visual: '윙크하며 농담하는 표정',
      soundAlike: '퍼시셔스 = 퍼시어스니스(농담)',
      context: 'He was being facetious, not serious.',
      synonymAntonym: '동의어: joking, flippant, 반의어: serious',
    }),
    {
      definition: 'treating serious issues with inappropriate humor; joking',
      wordDistractors: ['Fatuous', 'Fervent', 'Factious'],
      definitionDistractors: [
        'solemn and earnest in manner',
        'genuine and sincere',
        'respectful and reverent',
      ],
      exampleSentences: [
        { en: 'He was being facetious, not serious.', ko: '그는 농담하는 것이었지, 진지한 게 아니었다.' },
        { en: 'Her facetious remarks offended some listeners.', ko: '그녀의 농담조의 발언이 일부 청중을 불쾌하게 했다.' },
      ],
    }
  ),
  word('Fallacious', '허위의', 8, 'adjective',
    ['옳은', '정확한', '합리적인', '타당한', '검증된', '정확', '합리', '타당', '검증', '진실'],
    tips({
      etymology: 'fallax(속이다) + -ious -> 속이는',
      visual: '틀린 결론으로 이어지는 깨진 논리 다리',
      soundAlike: '펄레이셔스 = 펄러시(오류)',
      context: 'The argument was fallacious.',
      synonymAntonym: '동의어: false, misleading, 반의어: valid',
    }),
    {
      definition: 'based on a mistaken belief or invalid reasoning',
      wordDistractors: ['Fabulous', 'Famous', 'Furious'],
      definitionDistractors: [
        'correct and free from error',
        'based on sound logic or reason',
        'confirmed by evidence or proof',
      ],
      exampleSentences: [
        { en: 'The argument was fallacious.', ko: '그 논증은 허위였다.' },
        { en: 'His fallacious reasoning led to the wrong conclusion.', ko: '그의 허위적 추론이 잘못된 결론으로 이끌었다.' },
      ],
    }
  ),
  word('Fastidious', '까다로운', 8, 'adjective',
    ['무관심한', '대충하는', '무성의한', '냉담한', '구김 살 없는', '무관심', '대충', '무성의', '냉담', '구김'],
    tips({
      etymology: '라틴어 fastidium(역겨움) -> 까다로움',
      visual: '먼지를 털며 정리하는 완벽주의자',
      soundAlike: '패스티디어스 = 패스티디어스니스(까다로움)',
      context: 'He is fastidious about cleanliness.',
      synonymAntonym: '동의어: meticulous, fussy, 반의어: casual',
    }),
    {
      definition: 'very attentive to detail; hard to please',
      wordDistractors: ['Fatuous', 'Fervent', 'Fictitious'],
      definitionDistractors: [
        'lacking interest or concern',
        'done without care or attention',
        'relaxed and informal',
      ],
      exampleSentences: [
        { en: 'He is fastidious about cleanliness.', ko: '그는 청결에 대해 까다롭다.' },
        { en: 'She is a fastidious editor who catches every error.', ko: '그녀는 모든 오류를 찾아내는 까다로운 편집자이다.' },
      ],
    }
  ),
  word('Fervent', '열렬한', 8, 'adjective',
    ['냉담한', '무관심한', '미지근한', '덜렁대는', '무성의한', '냉담', '무관심', '미지근', '덜렁', '무성의'],
    tips({
      etymology: '라틴어 fervere(끓다) -> 뜨거운',
      visual: '뜨거운 불꽃처럼 타오르는 열정',
      soundAlike: '퍼번트 = 퍼번시(열렬)',
      context: 'She is a fervent supporter of the cause.',
      synonymAntonym: '동의어: passionate, ardent, 반의어: apathetic',
    }),
    {
      definition: 'having or showing intense passion or enthusiasm',
      wordDistractors: ['Frequent', 'Ferment', 'Fragment'],
      definitionDistractors: [
        'lacking emotion or interest',
        'showing no enthusiasm',
        'moderately warm; lukewarm',
      ],
      exampleSentences: [
        { en: 'She is a fervent supporter of the cause.', ko: '그녀는 그 대의의 열렬한 지지자이다.' },
        { en: 'He made a fervent plea for justice.', ko: '그는 정의를 위한 열렬한 탄원을 했다.' },
      ],
    }
  ),
  word('Flagrant', '극악한', 8, 'adjective',
    ['은밀한', '미묘한', '사소한', '숨겨진', '완곡한', '은밀', '미묘', '사소', '숨김', '완곡'],
    tips({
      etymology: '라틴어 flagrare(타다) -> 노골적으로 타다',
      visual: '밤하늘에 퍼지는 연기와 불꽃',
      soundAlike: '플레이그런트 = 플레이그런시(극악)',
      context: 'It was a flagrant violation of the rules.',
      synonymAntonym: '동의어: blatant, egregious, 반의어: subtle',
    }),
    {
      definition: 'conspicuously or obviously offensive; shocking',
      wordDistractors: ['Fragrant', 'Migrant', 'Grant'],
      definitionDistractors: [
        'kept secret or hidden',
        'delicate and not obvious',
        'of little importance',
      ],
      exampleSentences: [
        { en: 'It was a flagrant violation of the rules.', ko: '그것은 규칙의 극악한 위반이었다.' },
        { en: 'The referee penalized the flagrant foul.', ko: '심판은 그 극악한 파울에 페널티를 선언했다.' },
      ],
    }
  ),
  word('Fledgling', '초보의', 8, 'adjective',
    ['숙련된', '베테랑의', '노련한', '숙달된', '전문적인', '숙련', '베테랑', '노련', '숙달', '전문'],
    tips({
      etymology: 'fledge(날개) + -ling -> 깃털 막 난 작은 새',
      visual: '둥지에서 날개 펼치는 아기 새',
      soundAlike: '플렛즐링 = 플렛지(초보)',
      context: 'The fledgling company is growing fast.',
      synonymAntonym: '동의어: inexperienced, novice, 반의어: experienced',
    }),
    {
      definition: 'new and inexperienced; just beginning to develop',
      wordDistractors: ['Fumbling', 'Floating', 'Flattering'],
      definitionDistractors: [
        'highly skilled through practice',
        'having extensive experience',
        'very proficient in a skill',
      ],
      exampleSentences: [
        { en: 'The fledgling company is growing fast.', ko: '그 초보 회사는 빠르게 성장하고 있다.' },
        { en: 'She is a fledgling journalist with great potential.', ko: '그녀는 큰 잠재력을 가진 초보 기자이다.' },
      ],
    }
  ),
  word('Flourish', '번창하다', 8, 'verb',
    ['쇠퇴하다', '몰락하다', '시들다', '퇴보하다', '쇠락하다', '쇠퇴', '몰락', '시듦', '퇴보', '쇠락'],
    tips({
      etymology: '라틴어 florere(꽃피다) -> 꽃처럼 번성하다',
      visual: '햇빛 받으며 푸르게 자라는 식물',
      soundAlike: '플러리시 = 플러리싱(번창)',
      context: 'The business flourished under new management.',
      synonymAntonym: '동의어: thrive, prosper, 반의어: decline',
    }),
    {
      definition: 'to grow or develop in a healthy or vigorous way',
      wordDistractors: ['Nourish', 'Punish', 'Vanish'],
      definitionDistractors: [
        'to become weaker or less successful',
        'to lose power or importance',
        'to wither or fade away',
      ],
      exampleSentences: [
        { en: 'The business flourished under new management.', ko: '그 사업은 새 경영 하에 번창했다.' },
        { en: 'Arts and culture flourished during that era.', ko: '예술과 문화가 그 시대에 번창했다.' },
      ],
    }
  ),
  word('Foment', '선동하다', 8, 'verb',
    ['진정시키다', '가라앉히다', '억제하다', '냉각시키다', '완화하다', '진정', '가라앉힘', '억제', '냉각', '완화'],
    tips({
      etymology: '라틴어 fomentum(찜질) -> 열을 올리다',
      visual: '군중을 선동하는 연설자',
      soundAlike: '포멘트 = 포멘테이션(선동)',
      context: 'Foreign agents sought to foment unrest.',
      synonymAntonym: '동의어: incite, stir up, 반의어: quell',
    }),
    {
      definition: 'to instigate or stir up trouble or unrest',
      wordDistractors: ['Moment', 'Comment', 'Segment'],
      definitionDistractors: [
        'to suppress or put an end to',
        'to calm or soothe agitation',
        'to reduce intensity or severity',
      ],
      exampleSentences: [
        { en: 'Foreign agents sought to foment unrest.', ko: '외국 요원들은 불안을 선동하려 했다.' },
        { en: 'His speech fomented rebellion among the workers.', ko: '그의 연설은 노동자들 사이에 반란을 선동했다.' },
      ],
    }
  ),
  word('Forestall', '선수치다', 8, 'verb',
    ['방관하다', '방치하다', '뒤따르다', '뒤처지다', '미처 못하다', '방관', '방치', '뒤따름', '뒤처짐', '미처'],
    tips({
      etymology: 'fore(앞) + stall(막다) -> 앞서 막다',
      visual: '주문 전에 재고를 채우는 창고',
      soundAlike: '포어스톨 = 포어스톨먼트(선수)',
      context: 'We forestalled the crisis with early action.',
      synonymAntonym: '동의어: prevent, anticipate, 반의어: allow',
    }),
    {
      definition: 'to prevent or obstruct something by taking action ahead of time',
      wordDistractors: ['Install', 'Stall', 'Recall'],
      definitionDistractors: [
        'to allow something to happen',
        'to neglect or leave unattended',
        'to come after or behind',
      ],
      exampleSentences: [
        { en: 'We forestalled the crisis with early action.', ko: '우리는 조기 대응으로 위기를 선수쳤다.' },
        { en: 'They forestalled competition by lowering prices.', ko: '그들은 가격을 인하하여 경쟁을 선수쳤다.' },
      ],
    }
  ),
  word('Formidable', '강적인', 8, 'adjective',
    ['약한', '무기력한', '하찮은', '쉬운', '무해한', '약함', '무기력', '하찮음', '쉬움', '무해'],
    tips({
      etymology: '라틴어 formidare(두려워하다) -> 두려운',
      visual: '높은 성벽과 깃발이 펄럭이는 요새',
      soundAlike: '포어미더블 = 포어미더블리(강적으로)',
      context: 'She is a formidable opponent.',
      synonymAntonym: '동의어: daunting, fearsome, 반의어: weak',
    }),
    {
      definition: 'inspiring fear or respect through being impressively powerful',
      wordDistractors: ['Forgettable', 'Comfortable', 'Unforgettable'],
      definitionDistractors: [
        'lacking strength or power',
        'of little value or importance',
        'posing no threat or difficulty',
      ],
      exampleSentences: [
        { en: 'She is a formidable opponent.', ko: '그녀는 강적인 상대이다.' },
        { en: 'They faced a formidable challenge.', ko: '그들은 강적인 도전에 직면했다.' },
      ],
    }
  ),
  word('Fortify', '강화하다', 8, 'verb',
    ['약화하다', '약화시키다', '허물다', '무너뜨리다', '해체하다', '약화', '허물', '무너뜨림', '해체', '약화시킴'],
    tips({
      etymology: 'fortis(강한) + -ify -> 강하게 만들다',
      visual: '벽을 쌓아 성을 보강하는 장면',
      soundAlike: '포어티파이 = 포어티피케이션(강화)',
      context: 'Vitamins fortify the immune system.',
      synonymAntonym: '동의어: strengthen, reinforce, 반의어: weaken',
    }),
    {
      definition: 'to strengthen or reinforce something',
      wordDistractors: ['Mortify', 'Certify', 'Notify'],
      definitionDistractors: [
        'to make something weaker',
        'to destroy or tear down',
        'to take apart or dismantle',
      ],
      exampleSentences: [
        { en: 'Vitamins fortify the immune system.', ko: '비타민은 면역 체계를 강화한다.' },
        { en: 'They fortified the walls against attack.', ko: '그들은 공격에 대비해 성벽을 강화했다.' },
      ],
    }
  ),
  word('Frivolous', '경박한', 8, 'adjective',
    ['진지한', '중대한', '신중한', '깊은', '근본적인', '진지', '중대', '신중', '깊음', '근본'],
    tips({
      etymology: '라틴어 frivolus(쓸모없는) -> 가벼운',
      visual: '부유하게 헤엄치는 물거품',
      soundAlike: '프리블러스 = 프리블리티(경박)',
      context: 'The lawsuit was deemed frivolous.',
      synonymAntonym: '동의어: trivial, silly, 반의어: serious',
    }),
    {
      definition: 'not having any serious purpose or value; lighthearted',
      wordDistractors: ['Fabulous', 'Famous', 'Furious'],
      definitionDistractors: [
        'gravely important or significant',
        'careful and thoughtful',
        'of fundamental importance',
      ],
      exampleSentences: [
        { en: 'The lawsuit was deemed frivolous.', ko: '그 소송은 경박한 것으로 판단되었다.' },
        { en: 'She spent money on frivolous purchases.', ko: '그녀는 경박한 물건에 돈을 썼다.' },
      ],
    }
  ),
  word('Frugal', '검소한', 8, 'adjective',
    ['낭비하는', '사치스러운', '마구 쓰는', '낭비적', '호화로운', '낭비', '사치', '마구쓰기', '낭비적', '호화'],
    tips({
      etymology: '라틴어 frugi(과실의) -> 알뜰한',
      visual: '저축통장에 모이는 동전',
      soundAlike: '프루걸 = 프루걸리티(검소)',
      context: 'His frugal habits helped him save.',
      synonymAntonym: '동의어: thrifty, economical, 반의어: wasteful',
    }),
    {
      definition: 'sparing or economical with money or resources',
      wordDistractors: ['Fungal', 'Fatal', 'Legal'],
      definitionDistractors: [
        'spending money or resources freely',
        'luxurious and expensive',
        'using more than necessary',
      ],
      exampleSentences: [
        { en: 'His frugal habits helped him save.', ko: '그의 검소한 습관이 저축에 도움이 됐다.' },
        { en: 'She leads a frugal lifestyle to pay off debt.', ko: '그녀는 빚을 갚기 위해 검소한 생활을 한다.' },
      ],
    }
  ),
  word('Futile', '헛된', 8, 'adjective',
    ['효과적인', '성공적인', '의미 있는', '가치 있는', '결과적인', '효과', '성공', '의미', '가치', '결과'],
    tips({
      etymology: '라틴어 futilis(쏟는) -> 헛되이 흘러버림',
      visual: '바다에 물 붓는 시도',
      soundAlike: '퓨타일 = 퓨틸리티(헛됨)',
      context: 'All efforts proved futile.',
      synonymAntonym: '동의어: useless, vain, 반의어: fruitful',
    }),
    {
      definition: 'incapable of producing any useful result; pointless',
      wordDistractors: ['Fertile', 'Fragile', 'Mobile'],
      definitionDistractors: [
        'producing the desired result',
        'achieving success',
        'having worth or significance',
      ],
      exampleSentences: [
        { en: 'All efforts proved futile.', ko: '모든 노력이 헛된 것으로 드러났다.' },
        { en: 'It would be futile to resist.', ko: '저항하는 것은 헛된 일일 것이다.' },
      ],
    }
  ),
  word('Galvanize', '자극하다', 8, 'verb',
    ['무관심하게 하다', '봉쇄하다', '억제하다', '냉각시키다', '가라앉히다', '무관심', '봉쇄', '억제', '냉각', '가라앉힘'],
    tips({
      etymology: '갈바니(전기학자) + -ize -> 전기로 자극하다',
      visual: '전기 충격으로 깨어나는 사람',
      soundAlike: '갤버나이즈 = 갤버나이제이션(자극)',
      context: 'The speech galvanized the crowd.',
      synonymAntonym: '동의어: stimulate, energize, 반의어: dampen',
    }),
    {
      definition: 'to shock or excite someone into taking action',
      wordDistractors: ['Organize', 'Sanitize', 'Harmonize'],
      definitionDistractors: [
        'to cause indifference or apathy',
        'to restrain or hold back',
        'to reduce enthusiasm or energy',
      ],
      exampleSentences: [
        { en: 'The speech galvanized the crowd.', ko: '그 연설은 군중을 자극했다.' },
        { en: 'The crisis galvanized the community into action.', ko: '그 위기가 지역사회를 행동으로 자극했다.' },
      ],
    }
  ),
  word('Garner', '쌓다', 8, 'verb',
    ['흩다', '분산하다', '잃다', '버리다', '해체하다', '흩음', '분산', '상실', '버림', '해체'],
    tips({
      etymology: '라틴어 granarium(곡물창고) -> 모아 두다',
      visual: '수확한 곡식을 창고에 쌓는 농부',
      soundAlike: '가너 = 가너드(모은)',
      context: 'She garnered support from voters.',
      synonymAntonym: '동의어: collect, accumulate, 반의어: scatter',
    }),
    {
      definition: 'to gather or collect something, especially information or support',
      wordDistractors: ['Garden', 'Garnish', 'Garnet'],
      definitionDistractors: [
        'to spread or distribute over an area',
        'to lose or be deprived of',
        'to discard or get rid of',
      ],
      exampleSentences: [
        { en: 'She garnered support from voters.', ko: '그녀는 유권자로부터 지지를 모았다.' },
        { en: 'The film garnered critical acclaim.', ko: '그 영화는 비평가들의 찬사를 받았다.' },
      ],
    }
  ),
  word('Gratuitous', '불필요한', 8, 'adjective',
    ['필요한', '당연한', '타당한', '근거 있는', '의미 있는', '필요', '당연', '타당', '근거', '의미'],
    tips({
      etymology: '라틴어 gratus(기쁜) -> 값 없이 주는',
      visual: '영화에 끼워 넣은 불필요한 폭력 장면',
      soundAlike: '그래투이터스 = 그래투이티(불필요)',
      context: 'The film had gratuitous violence.',
      synonymAntonym: '동의어: unnecessary, uncalled-for, 반의어: justified',
    }),
    {
      definition: 'uncalled for; done without good reason',
      wordDistractors: ['Gracious', 'Grateful', 'Gradual'],
      definitionDistractors: [
        'required or essential',
        'having a valid reason',
        'carrying meaning or purpose',
      ],
      exampleSentences: [
        { en: 'The film had gratuitous violence.', ko: '그 영화에는 불필요한 폭력이 있었다.' },
        { en: 'His gratuitous criticism offended many.', ko: '그의 불필요한 비판이 많은 사람을 불쾌하게 했다.' },
      ],
    }
  ),
  word('Grievance', '불만', 8, 'noun',
    ['만족', '감사', '만족감', '기쁨', '승인', '만족', '감사', '기쁨', '승인', '만족감'],
    tips({
      etymology: '라틴어 gravare(무겁게 하다) -> 마음의 무거움',
      visual: '불만 사항을 적어 제출하는 직원',
      soundAlike: '그리번스 = 그리브(슬퍼하다)',
      context: 'Workers filed a grievance with the union.',
      synonymAntonym: '동의어: complaint, objection, 반의어: satisfaction',
    }),
    {
      definition: 'a real or imagined cause for complaint, especially unfair treatment',
      wordDistractors: ['Gravity', 'Gravy', 'Grave'],
      definitionDistractors: [
        'a feeling of contentment or pleasure',
        'expression of thanks',
        'approval or consent',
      ],
      exampleSentences: [
        { en: 'Workers filed a grievance with the union.', ko: '노동자들이 노조에 불만을 제기했다.' },
        { en: 'She had a legitimate grievance about her treatment.', ko: '그녀는 자신에 대한 대우에 대한 정당한 불만이 있었다.' },
      ],
    }
  ),
  word('Hackneyed', '진부한', 8, 'adjective',
    ['신선한', '독창적인', '참신한', '독특한', '새로운', '신선', '독창', '참신', '독특', '새로움'],
    tips({
      etymology: 'hackney(일반용 말) -> 흔히 쓰이는',
      visual: '손바닥만큼 해진 교과서 문구',
      soundAlike: '핵니드 = 핵니드 표현',
      context: 'The dialogue was hackneyed and predictable.',
      synonymAntonym: '동의어: clichéd, trite, 반의어: original',
    }),
    {
      definition: 'lacking originality through overuse; trite',
      wordDistractors: ['Hackney', 'Handy', 'Haughty'],
      definitionDistractors: [
        'new and fresh',
        'creative and inventive',
        'distinctive and unique',
      ],
      exampleSentences: [
        { en: 'The dialogue was hackneyed and predictable.', ko: '그 대사는 진부하고 예측 가능했다.' },
        { en: 'He avoided hackneyed phrases in his writing.', ko: '그는 글에서 진부한 표현을 피했다.' },
      ],
    }
  ),
  word('Hamper', '방해하다', 8, 'verb',
    ['돕다', '촉진하다', '용이하게 하다', '가속하다', '지원하다', '도움', '촉진', '용이', '가속', '지원'],
    tips({
      etymology: '프랑스어 hamper(바구니) -> 담다, 가두다',
      visual: '발에 걸려 넘어지는 줄',
      soundAlike: '햄퍼 = 햄퍼드(방해당한)',
      context: 'Bad weather hampered the rescue.',
      synonymAntonym: '동의어: hinder, impede, 반의어: facilitate',
    }),
    {
      definition: 'to hinder or impede the movement or progress of',
      wordDistractors: ['Hammer', 'Tamper', 'Camper'],
      definitionDistractors: [
        'to help or assist',
        'to speed up or accelerate',
        'to make easier',
      ],
      exampleSentences: [
        { en: 'Bad weather hampered the rescue.', ko: '나쁜 날씨가 구조 작업을 방해했다.' },
        { en: 'Financial problems hampered their plans.', ko: '재정 문제가 그들의 계획을 방해했다.' },
      ],
    }
  ),
  word('Haphazard', '무계획적인', 8, 'adjective',
    ['체계적인', '계획적인', '정돈된', '신중한', '엄격한', '체계', '계획', '정돈', '신중', '엄격'],
    tips({
      etymology: 'hap(운) + hazard(위험) -> 닥치는 대로',
      visual: '제멋대로 흩어진 주사위',
      soundAlike: '합해저드 = 합해저드리(무계획적으로)',
      context: 'The files were arranged in haphazard order.',
      synonymAntonym: '동의어: random, chaotic, 반의어: systematic',
    }),
    {
      definition: 'lacking any obvious principle of organization; random',
      wordDistractors: ['Hazardous', 'Hasty', 'Hardy'],
      definitionDistractors: [
        'done according to a plan',
        'orderly and arranged',
        'careful and deliberate',
      ],
      exampleSentences: [
        { en: 'The files were arranged in haphazard order.', ko: '파일들이 무계획적인 순서로 정리되어 있었다.' },
        { en: 'His haphazard approach caused many errors.', ko: '그의 무계획적인 접근이 많은 오류를 초래했다.' },
      ],
    }
  ),
  word('Harbinger', '전조', 8, 'noun',
    ['후과', '결과', '여파', '끝맺음', '최종', '후과', '결과', '여파', '끝맺음', '최종'],
    tips({
      etymology: '고대게르만어 harb(숙소) + inger -> 먼저 도착하는 자',
      visual: '봄을 알리는 제비 한 마리',
      soundAlike: '하빈저 = 하빈지(예고하다)',
      context: 'The first snow is a harbinger of winter.',
      synonymAntonym: '동의어: precursor, omen, 반의어: aftermath',
    }),
    {
      definition: 'a person or thing that announces or signals the approach of another',
      wordDistractors: ['Harbor', 'Harvest', 'Harvester'],
      definitionDistractors: [
        'the result or consequence of an event',
        'the final outcome',
        'the effects following an event',
      ],
      exampleSentences: [
        { en: 'The first snow is a harbinger of winter.', ko: '첫눈은 겨울의 전조이다.' },
        { en: 'The robin is a harbinger of spring.', ko: '울새는 봄의 전조이다.' },
      ],
    }
  ),
  word('Heinous', '흉악한', 8, 'adjective',
    ['고상한', '존귀한', '순한', '덕스러운', '선한', '고상', '존귀', '순함', '덕스러움', '선함'],
    tips({
      etymology: '프랑스어 haine(증오) -> 혐오스러운',
      visual: '뉴스에 나오는 범죄 현장',
      soundAlike: '헤이너스 = 헤이너스니스(흉악)',
      context: 'The heinous crime shocked the nation.',
      synonymAntonym: '동의어: atrocious, monstrous, 반의어: noble',
    }),
    {
      definition: 'utterly wicked or abominable',
      wordDistractors: ['Hideous', 'Hazardous', 'Harmful'],
      definitionDistractors: [
        'morally excellent; virtuous',
        'gentle and mild',
        'kind and good-natured',
      ],
      exampleSentences: [
        { en: 'The heinous crime shocked the nation.', ko: '그 흉악한 범죄가 전국을 충격에 빠뜨렸다.' },
        { en: 'They committed heinous acts of violence.', ko: '그들은 흉악한 폭력 행위를 저질렀다.' },
      ],
    }
  ),
  word('Heresy', '이단', 8, 'noun',
    ['정통', '정설', '정도', '합의', '이해', '정통', '정설', '정도', '합의', '이해'],
    tips({
      etymology: '그리스어 hairesis(선택) -> 다른 길 선택',
      visual: '불타는 이단 서적',
      soundAlike: '헤러시 = 헤러틱(이단의)',
      context: 'He was accused of heresy for his views.',
      synonymAntonym: '동의어: heterodoxy, dissent, 반의어: orthodoxy',
    }),
    {
      definition: 'belief or opinion that contradicts orthodox religious doctrine',
      wordDistractors: ['Hersey', 'Hermit', 'Harvest'],
      definitionDistractors: [
        'authorized or accepted belief',
        'established doctrine or teaching',
        'general agreement or consensus',
      ],
      exampleSentences: [
        { en: 'He was accused of heresy for his views.', ko: '그는 그의 견해로 인해 이단으로 고발되었다.' },
        { en: 'The church condemned the doctrine as heresy.', ko: '교회는 그 교리를 이단으로 정죄했다.' },
      ],
    }
  ),
  word('Hierarchy', '위계', 8, 'noun',
    ['평등', '수평', '동등', '혼돈', '무질서', '평등', '수평', '동등', '혼돈', '무질서'],
    tips({
      etymology: '그리스어 hieros(신성한) + arche(통치) -> 신성한 질서',
      visual: '피라미드 형태의 조직도',
      soundAlike: '하이어라키 = 하이어키컬(위계적)',
      context: 'The company has a strict hierarchy.',
      synonymAntonym: '동의어: rank, pecking order, 반의어: equality',
    }),
    {
      definition: 'a system of persons or things ranked one above another',
      wordDistractors: ['Monarchy', 'Anarchy', 'Autocracy'],
      definitionDistractors: [
        'the state of being equal',
        'the same in status or level',
        'complete disorder and confusion',
      ],
      exampleSentences: [
        { en: 'The company has a strict hierarchy.', ko: '그 회사는 엄격한 위계 구조를 가지고 있다.' },
        { en: 'Social hierarchy determined one\'s status.', ko: '사회적 위계가 개인의 지위를 결정했다.' },
      ],
    }
  ),
  word('Homogeneous', '동질의', 8, 'adjective',
    ['이질적인', '다양한', '혼합된', '섞인', '상이한', '이질', '다양', '혼합', '섞임', '상이'],
    tips({
      etymology: 'homo(같은) + gen(종류) + -ous -> 같은 종류의',
      visual: '한 가지 색만 있는 균일한 벽',
      soundAlike: '호모지니어스 = 호모지니어티(동질)',
      context: 'The group was homogeneous in age.',
      synonymAntonym: '동의어: uniform, similar, 반의어: heterogeneous',
    }),
    {
      definition: 'of the same kind; uniform in composition or character',
      wordDistractors: ['Heterogeneous', 'Homogenous', 'Generous'],
      definitionDistractors: [
        'diverse in character or content',
        'consisting of different elements',
        'dissimilar or distinct',
      ],
      exampleSentences: [
        { en: 'The group was homogeneous in age.', ko: '그 그룹은 연령이 동질적이었다.' },
        { en: 'The culture was surprisingly homogeneous.', ko: '그 문화는 놀랍게도 동질적이었다.' },
      ],
    }
  ),
  word('Hubris', '오만', 8, 'noun',
    ['겸손', '겸양', '자기비하', '겸허', '겸손함', '겸양', '자기비하', '겸허', '겸손함', '겸손'],
    tips({
      etymology: '그리스어 hybris(과잉) -> 지나친 자부심',
      visual: '천에 맞서는 거대한 인간 실루엣',
      soundAlike: '휴브리스 = 휴브리스틱(오만한)',
      context: 'His hubris led to his downfall.',
      synonymAntonym: '동의어: arrogance, pride, 반의어: humility',
    }),
    {
      definition: 'excessive pride or self-confidence; arrogance',
      wordDistractors: ['Hybrid', 'Humus', 'Humorous'],
      definitionDistractors: [
        'modesty about one\'s importance',
        'lack of vanity',
        'lowering oneself in estimation',
      ],
      exampleSentences: [
        { en: 'His hubris led to his downfall.', ko: '그의 오만이 몰락을 초래했다.' },
        { en: 'The leader\'s hubris blinded him to advice.', ko: '그 지도자의 오만이 그가 충고를 보지 못하게 했다.' },
      ],
    }
  ),
  word('Hypothetical', '가설적인', 8, 'adjective',
    ['실제의', '검증된', '입증된', '현실적', '실재하는', '실제', '검증', '입증', '현실', '실재'],
    tips({
      etymology: '그리스어 hypo(아래) + thesis(놓다) -> 가정하여 놓다',
      visual: '물음표가 달린 실험 설계도',
      soundAlike: '하이포데티컬 = 하이포데시스(가설)',
      context: 'Consider this hypothetical scenario.',
      synonymAntonym: '동의어: theoretical, assumed, 반의어: actual',
    }),
    {
      definition: 'based on or involving a hypothesis; supposed',
      wordDistractors: ['Hypodermic', 'Hysterical', 'Hyperbolic'],
      definitionDistractors: [
        'existing in fact; real',
        'confirmed by evidence',
        'existing in reality',
      ],
      exampleSentences: [
        { en: 'Consider this hypothetical scenario.', ko: '이 가설적인 시나리오를 고려해 보세요.' },
        { en: 'The discussion was about a hypothetical situation.', ko: '그 논의는 가설적인 상황에 관한 것이었다.' },
      ],
    }
  ),
  word('Idiosyncrasy', '성벽', 8, 'noun',
    ['범례', '보편성', '일반성', '표준', '정상', '범례', '보편', '일반', '표준', '정상'],
    tips({
      etymology: 'idio(나만의) + syncrasy(섞음) -> 나만의 섞임',
      visual: '편지를 읽기 전 냄새를 맡는 습관',
      soundAlike: '이디오싱크러시 = 이디오싱크래틱(성벽의)',
      context: 'Her idiosyncrasy is always drinking tea at midnight.',
      synonymAntonym: '동의어: quirk, peculiarity, 반의어: norm',
    }),
    {
      definition: 'a mode of behavior or way of thought peculiar to an individual',
      wordDistractors: ['Ideology', 'Idiom', 'Identity'],
      definitionDistractors: [
        'a typical example or pattern',
        'the quality of being widespread',
        'an established norm or rule',
      ],
      exampleSentences: [
        { en: 'Her idiosyncrasy is always drinking tea at midnight.', ko: '그녀의 성벽은 항상 자정에 차를 마시는 것이다.' },
        { en: 'His idiosyncrasies make him memorable.', ko: '그의 성벽들이 그를 기억에 남게 한다.' },
      ],
    }
  ),
  word('Illicit', '불법의', 8, 'adjective',
    ['합법적인', '허용된', '정당한', '정식의', '허락된', '합법', '허용', '정당', '정식', '허락'],
    tips({
      etymology: 'il(아닌) + licit(허용된) -> 허용되지 않은',
      visual: '문 위에 붙은 금지 표지',
      soundAlike: '일리시트 = 일리시트리(불법적으로)',
      context: 'They were involved in illicit trade.',
      synonymAntonym: '동의어: illegal, unlawful, 반의어: lawful',
    }),
    {
      definition: 'forbidden by law, rules, or custom',
      wordDistractors: ['Elicit', 'Explicit', 'Implicit'],
      definitionDistractors: [
        'permitted by law',
        'morally right and fair',
        'officially approved',
      ],
      exampleSentences: [
        { en: 'They were involved in illicit trade.', ko: '그들은 불법 거래에 관여했다.' },
        { en: 'The police seized illicit drugs.', ko: '경찰은 불법 마약을 압수했다.' },
      ],
    }
  ),
  word('Imminent', '임박한', 8, 'adjective',
    ['먼', '먼 훗날의', '불확실한', '연기된', '늦춰진', '먼', '불확실', '연기', '늦춤', '원거리'],
    tips({
      etymology: 'im(위로) + min(돌출) -> 곧 닥쳐오는',
      visual: '머리 위에 매달린 검',
      soundAlike: '이미넌트 = 이미넌스(임박)',
      context: 'The storm is imminent.',
      synonymAntonym: '동의어: impending, approaching, 반의어: distant',
    }),
    {
      definition: 'about to happen; soon to occur',
      wordDistractors: ['Eminent', 'Prominent', 'Dominant'],
      definitionDistractors: [
        'far away in space or time',
        'not certain to happen',
        'postponed to a later time',
      ],
      exampleSentences: [
        { en: 'The storm is imminent.', ko: '폭풍이 임박했다.' },
        { en: 'Their departure was imminent.', ko: '그들의 출발이 임박했다.' },
      ],
    }
  ),
  word('Impair', '손상시키다', 8, 'verb',
    ['개선하다', '강화하다', '회복시키다', '보완하다', '향상시키다', '개선', '강화', '회복', '보완', '향상'],
    tips({
      etymology: 'im(나쁘게) + pair(나쁘다) -> 더 나쁘게 하다',
      visual: '깨진 안경으로 흐린 시야',
      soundAlike: '임페어 = 임페어먼트(손상)',
      context: 'Alcohol impairs judgment.',
      synonymAntonym: '동의어: damage, weaken, 반의어: improve',
    }),
    {
      definition: 'to weaken or damage something',
      wordDistractors: ['Repair', 'Despair', 'Compare'],
      definitionDistractors: [
        'to make something better',
        'to make stronger',
        'to restore to health',
      ],
      exampleSentences: [
        { en: 'Alcohol impairs judgment.', ko: '알코올은 판단력을 손상시킨다.' },
        { en: 'The injury impaired his ability to walk.', ko: '그 부상이 그의 보행 능력을 손상시켰다.' },
      ],
    }
  ),
  word('Impartial', '공정한', 8, 'adjective',
    ['편파적인', '편향된', '불공정한', '차별적', '편든', '편파', '편향', '불공정', '차별', '편듦'],
    tips({
      etymology: 'im(아닌) + partial(편파적) -> 편파적이지 않은',
      visual: '양쪽이 같은 저울',
      soundAlike: '임파셜 = 임파셜리티(공정)',
      context: 'We need an impartial judge.',
      synonymAntonym: '동의어: fair, unbiased, 반의어: partial',
    }),
    {
      definition: 'treating all rivals or disputants equally; fair',
      wordDistractors: ['Partial', 'Martial', 'Spatial'],
      definitionDistractors: [
        'favoring one side over another',
        'unfair or unjust',
        'treating people differently',
      ],
      exampleSentences: [
        { en: 'We need an impartial judge.', ko: '우리에게는 공정한 판사가 필요하다.' },
        { en: 'The journalist strives to be impartial.', ko: '그 기자는 공정하려고 노력한다.' },
      ],
    }
  ),
];
