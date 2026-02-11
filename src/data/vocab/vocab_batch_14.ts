import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch14: VocabItem[] = [
  word('Benevolent', '자비로운', 7, 'adjective',
    ['냉혹한', '이기적인', '잔인한', '무자비', '야만적', '냉담', '흉포', '잔혹', '무정', '냉소적'],
    tips({
      etymology: 'bene(좋게) + vol(원하다) + -ent -> 선의를 품은',
      visual: '가난한 이에게 음식을 나눠주는 인물',
      soundAlike: '비네볼런트 = 비네볼런스(자비)',
      context: 'She was known for her benevolent nature.',
      synonymAntonym: '동의어: kind, charitable, 반의어: malevolent',
    }),
    {
      definition: 'Showing kindness and a desire to help others, especially those in need.',
      wordDistractors: ['Malevolent', 'Benign', 'Benevolence'],
      definitionDistractors: [
        'wishing harm or evil upon others',
        'not harmful or dangerous',
        'a strong feeling of dislike or hatred',
      ],
      exampleSentences: [
        { en: 'She was known for her benevolent nature.', ko: '그녀는 자비로운 성품으로 알려져 있었다.' },
        { en: 'The benevolent donor funded the new hospital wing.', ko: '자비로운 기부자가 새 병원 동 건축을 후원했다.' },
      ],
    }
  ),
  word('Blatant', '노골적인', 7, 'adjective',
    ['은밀한', '미묘한', '은폐된', '숨겨진', '교묘한', '암묵', '잠재', '은밀', '미세', '숨김'],
    tips({
      etymology: '라틴어 blaterare(떠들다)에서 유래',
      visual: '큰 소리로 떠드는 사람',
      soundAlike: '블레이튼트 = 블레이턴틀리(노골적으로)',
      context: 'It was a blatant lie.',
      synonymAntonym: '동의어: obvious, flagrant, 반의어: subtle',
    }),
    {
      definition: 'Done openly and unashamedly, without any attempt to hide or disguise.',
      wordDistractors: ['Latent', 'Blazing', 'Blatancy'],
      definitionDistractors: [
        'hidden or not yet developed',
        'burning or shining brightly',
        'delicate and difficult to detect',
      ],
      exampleSentences: [
        { en: 'It was a blatant lie.', ko: '그건 노골적인 거짓말이었다.' },
        { en: 'The blatant disregard for the rules angered the committee.', ko: '규칙에 대한 노골적인 무시가 위원회를 분노하게 했다.' },
      ],
    }
  ),
  word('Bolster', '강화하다', 7, 'verb',
    ['약화하다', '약화시키다', '훼손하다', '말살하다', '축소하다', '해체', '약화', '완화', '감소', '이완'],
    tips({
      etymology: '고대영어 bolster(베개) -> 받쳐 강하게 하다',
      visual: '기둥을 받쳐 강화하는 구조',
      soundAlike: '볼스터 = 볼스터링(강화)',
      context: 'The data bolstered our argument.',
      synonymAntonym: '동의어: support, reinforce, 반의어: undermine',
    }),
    {
      definition: 'To support or strengthen something, especially an argument or position.',
      wordDistractors: ['Bluster', 'Boulder', 'Foster'],
      definitionDistractors: [
        'to speak loudly and aggressively',
        'to weaken or damage gradually',
        'to encourage growth or development',
      ],
      exampleSentences: [
        { en: 'The data bolstered our argument.', ko: '데이터가 우리의 논거를 강화했다.' },
        { en: 'New recruits will bolster the team for the season.', ko: '신입 선수들이 시즌을 위해 팀을 강화할 것이다.' },
      ],
    }
  ),
  word('Brevity', '간결함', 7, 'noun',
    ['장황함', '번거로움', '장식', '과다', '지루함', '장황', '다소', '과장', '장편', '부연'],
    tips({
      etymology: '라틴어 brevis(짧은) + -ity -> 짧음',
      visual: '한 줄로 끝나는 짧은 메시지',
      soundAlike: '브레비티 = 브리프(간결한)',
      context: 'Brevity is the soul of wit.',
      synonymAntonym: '동의어: conciseness, brevity, 반의어: verbosity',
    }),
    {
      definition: 'Concise and exact use of words in writing or speech.',
      wordDistractors: ['Levity', 'Gravity', 'Clarity'],
      definitionDistractors: [
        'lightness of manner or speech',
        'seriousness or importance',
        'the use of too many words',
      ],
      exampleSentences: [
        { en: 'Brevity is the soul of wit.', ko: '간결함이 재치의 정수이다.' },
        { en: 'The brevity of his reply suggested he was busy.', ko: '그의 짧은 답변이 바쁘다는 것을 암시했다.' },
      ],
    }
  ),
  word('Candid', '솔직한', 7, 'adjective',
    ['속이는', '기만적인', '얼버무리는', '희미한', '애매한', '거짓', '꾸밈', '속임', '은폐', '위장'],
    tips({
      etymology: '라틴어 candidus(흰색) -> 숨김없이 맑은',
      visual: '마음을 숨김없이 털어놓는 대화',
      soundAlike: '캔디드 = 캔디드캠라(솔직한 카메라)',
      context: 'She was candid about her mistakes.',
      synonymAntonym: '동의어: frank, honest, 반의어: deceitful',
    }),
    {
      definition: 'Truthful and straightforward, without hiding one\'s real thoughts or feelings.',
      wordDistractors: ['Pandemic', 'Candied', 'Canid'],
      definitionDistractors: [
        'spread over a whole country or the world',
        'preserved or coated with sugar',
        'a dog or related animal',
      ],
      exampleSentences: [
        { en: 'She was candid about her mistakes.', ko: '그녀는 자신의 실수에 대해 솔직했다.' },
        { en: 'I appreciate your candid feedback on the proposal.', ko: '제안에 대한 당신의 솔직한 피드백에 감사합니다.' },
      ],
    }
  ),
  word('Catalyst', '촉매', 7, 'noun',
    ['방해물', '억제제', '막음', '정체', '저해', '방해', '억제', '저지', '숙맥', '완화'],
    tips({
      etymology: '그리스어 kata(아래) + lysis(용해) -> 변화를 촉진',
      visual: '화학 반응을 가속시키는 촉매 분자',
      soundAlike: '캐털리스트 = 캐털라이즈(촉진하다)',
      context: 'She was a catalyst for change.',
      synonymAntonym: '동의어: trigger, stimulus, 반의어: inhibitor',
    }),
    {
      definition: 'A person or thing that causes or speeds up change or action.',
      wordDistractors: ['Cataclysm', 'Cathedral', 'Catalogue'],
      definitionDistractors: [
        'a sudden violent event causing great change',
        'a large church or cathedral',
        'something that prevents or slows action',
      ],
      exampleSentences: [
        { en: 'She was a catalyst for change.', ko: '그녀는 변화의 촉매였다.' },
        { en: 'The scandal proved to be a catalyst for reform.', ko: '그 스캔들은 개혁의 촉매로 밝혀졌다.' },
      ],
    }
  ),
  word('Caustic', '부식성의', 7, 'adjective',
    ['온화한', '순한', '부드러운', '완화된', '친절한', '유순', '양정', '온화', '무해', '온순'],
    tips({
      etymology: '그리스어 kaustikos(태우는)에서 유래',
      visual: '금속을 갉아먹는 산',
      soundAlike: '코스틱 = 코스틱리(부식적으로)',
      context: 'His caustic remarks offended many.',
      synonymAntonym: '동의어: corrosive, biting, 반의어: gentle',
    }),
    {
      definition: 'Capable of burning or corroding, or harshly critical in a sarcastic way.',
      wordDistractors: ['Cosmic', 'Plastic', 'Drastic'],
      definitionDistractors: [
        'relating to the universe or space',
        'a synthetic material that can be molded',
        'kind and gentle in manner',
      ],
      exampleSentences: [
        { en: 'His caustic remarks offended many.', ko: '그의 신랄한 발언이 많은 사람을 불쾌하게 했다.' },
        { en: 'Caustic chemicals require careful handling.', ko: '부식성 화학물질은 조심스럽게 다뤄야 한다.' },
      ],
    }
  ),
  word('Cede', '양도하다', 7, 'verb',
    ['차지하다', '점유하다', '보유하다', '유지하다', '지키다', '취득', '탈환', '점령', '보존', '고수'],
    tips({
      etymology: '라틴어 cedere(가다, 넘기다)에서 유래',
      visual: '땅을 넘겨주는 지도 위의 경계 이동',
      soundAlike: '시드 = 콘새드(양보하다)',
      context: 'The country ceded territory to its neighbor.',
      synonymAntonym: '동의어: surrender, yield, 반의어: retain',
    }),
    {
      definition: 'To give up power, territory, or rights to another.',
      wordDistractors: ['Recede', 'Concede', 'Accede'],
      definitionDistractors: [
        'to plant and grow plants',
        'to take possession of something',
        'to keep or continue to have',
      ],
      exampleSentences: [
        { en: 'The country ceded territory to its neighbor.', ko: '그 나라는 이웃 나라에 영토를 양도했다.' },
        { en: 'He refused to cede control of the company.', ko: '그는 회사 통제권을 양도하기를 거부했다.' },
      ],
    }
  ),
  word('Censure', '비난하다', 7, 'verb',
    ['칭찬하다', '승인하다', '인정하다', '찬성하다', '지지하다', '장려', '격려', '찬양', '긍정', '옹호'],
    tips({
      etymology: '라틴어 censere(평가하다) -> 나쁘게 평가하다',
      visual: '공개적으로 비난받는 공인',
      soundAlike: '센셔 = 센셔어블(비난할 만한)',
      context: 'The committee voted to censure the member.',
      synonymAntonym: '동의어: condemn, criticize, 반의어: praise',
    }),
    {
      definition: 'To express strong disapproval or criticism formally.',
      wordDistractors: ['Censor', 'Ensure', 'Secure'],
      definitionDistractors: [
        'to examine and remove unacceptable material',
        'to make certain that something happens',
        'to express approval or admiration',
      ],
      exampleSentences: [
        { en: 'The committee voted to censure the member.', ko: '위원회는 해당 위원을 비난하는 데 찬성표를 던졌다.' },
        { en: 'The senator was censured for unethical conduct.', ko: '그 상원의원은 비윤리적 행동으로 비난받았다.' },
      ],
    }
  ),
  word('Circumscribe', '제한하다', 7, 'verb',
    ['확장하다', '늘리다', '해제하다', '자유롭게 하다', '열다', '확대', '연장', '해방', '해제', '확장'],
    tips({
      etymology: 'circum(주위) + scribe(쓰다) -> 경계를 긋다',
      visual: '원 안에 갇힌 점',
      soundAlike: '서컴스크라이브 = 서컴스크립션(제한)',
      context: 'His role was circumscribed by the contract.',
      synonymAntonym: '동의어: limit, restrict, 반의어: expand',
    }),
    {
      definition: 'To restrict something within limits or boundaries.',
      wordDistractors: ['Subscribe', 'Describe', 'Transcribe'],
      definitionDistractors: [
        'to arrange to receive a publication regularly',
        'to give an account in words',
        'to write out or copy in writing',
      ],
      exampleSentences: [
        { en: 'His role was circumscribed by the contract.', ko: '그의 역할은 계약서에 의해 제한되었다.' },
        { en: 'The law circumscribes the powers of the executive.', ko: '법률은 행정부의 권한을 제한한다.' },
      ],
    }
  ),
  word('Coerce', '강요하다', 7, 'verb',
    ['설득하다', '자유롭게 하다', '유도하다', '포기하다', '용인하다', '허용', '강권', '자발', '동의', '수용'],
    tips({
      etymology: 'co(함께) + arce(좁게) -> 좁게 몰아넣다',
      visual: '칼로 위협받는 사람',
      soundAlike: '코얼스 = 코얼션(강요)',
      context: 'They tried to coerce him into signing.',
      synonymAntonym: '동의어: force, compel, 반의어: persuade',
    }),
    {
      definition: 'To persuade someone to do something by using force or threats.',
      wordDistractors: ['Commerce', 'Reverse', 'Disperse'],
      definitionDistractors: [
        'the activity of buying and selling goods',
        'to turn something the opposite way',
        'to cause someone to believe something through reasoning',
      ],
      exampleSentences: [
        { en: 'They tried to coerce him into signing.', ko: '그들은 그를 강요하여 서명하게 하려 했다.' },
        { en: 'The confession was obtained by coercing the suspect.', ko: '그 자백은 용의자를 강요하여 얻어졌다.' },
      ],
    }
  ),
  word('Cogent', '설득력 있는', 7, 'adjective',
    ['약한', '애매한', '불충분한', '모호한', '비논리적', '무력', '희미', '불명확', '약함', '불충분'],
    tips({
      etymology: '라틴어 cogens(함께 몰다) -> 논리로 몰다',
      visual: '증거로 무장한 변호인의 논박',
      soundAlike: '코젠트 = 코젠시(설득력)',
      context: 'She made a cogent argument.',
      synonymAntonym: '동의어: persuasive, convincing, 반의어: weak',
    }),
    {
      definition: 'Clear, logical, and convincing in argument or reasoning.',
      wordDistractors: ['Coherent', 'Urgent', 'Regent'],
      definitionDistractors: [
        'logically connected and consistent',
        'requiring immediate action',
        'lacking clarity or strength',
      ],
      exampleSentences: [
        { en: 'She made a cogent argument.', ko: '그녀는 설득력 있는 논거를 제시했다.' },
        { en: 'The lawyer presented cogent evidence for the defense.', ko: '변호인은 방어를 위한 설득력 있는 증거를 제시했다.' },
      ],
    }
  ),
  word('Coherent', '일관된', 7, 'adjective',
    ['산만한', '불일치한', '혼란스러운', '모순된', '분산된', '불일치', '혼란', '흐트러짐', '해이', '모순'],
    tips({
      etymology: 'co(함께) + here(붙다) + -ent -> 함께 붙어 있는',
      visual: '논리적으로 연결된 도표',
      soundAlike: '코히어런트 = 코히어런스(일관성)',
      context: 'The report was coherent and well-organized.',
      synonymAntonym: '동의어: logical, consistent, 반의어: incoherent',
    }),
    {
      definition: 'Logical and consistent, with parts that fit together well.',
      wordDistractors: ['Inherent', 'Adherent', 'Different'],
      definitionDistractors: [
        'existing as a natural or basic part',
        'sticking firmly to a surface or belief',
        'lacking logical connection',
      ],
      exampleSentences: [
        { en: 'The report was coherent and well-organized.', ko: '그 보고서는 일관되고 잘 정리되어 있었다.' },
        { en: 'She gave a coherent explanation of the plan.', ko: '그녀는 계획에 대한 일관된 설명을 했다.' },
      ],
    }
  ),
  word('Commensurate', '비례하는', 7, 'adjective',
    ['불균형한', '과다한', '부족한', '어긋난', '불일치', '부적절', '과대', '과소', '불균형', '좋은'],
    tips({
      etymology: 'com(같이) + mensura(측정) + -ate -> 같은 비율로 측정됨',
      visual: '노력과 보상이 비례하는 그림',
      soundAlike: '커멘서릿 = 커멘서레이션(비례)',
      context: 'The pay should be commensurate with experience.',
      synonymAntonym: '동의어: proportionate, equal, 반의어: disproportionate',
    }),
    {
      definition: 'Corresponding in size, degree, or extent; proportionate.',
      wordDistractors: ['Commiserate', 'Compensate', 'Consummate'],
      definitionDistractors: [
        'to express sympathy or pity',
        'to give something to make up for loss',
        'not in proper proportion',
      ],
      exampleSentences: [
        { en: 'The pay should be commensurate with experience.', ko: '급여는 경력에 비례해야 한다.' },
        { en: 'Punishment must be commensurate with the crime.', ko: '처벌은 범죄에 비례해야 한다.' },
      ],
    }
  ),
  word('Compendium', '요약집', 7, 'noun',
    ['전체', '원본', '팽창', '부연', '연장', '전집', '전권', '확장', '원문', '사과'],
    tips({
      etymology: 'com(함께) + pend(달다) + -ium -> 함께 달아 모은 것',
      visual: '핵심만 모아둔 한권의 요약서',
      soundAlike: '컴펜디엄 = 컴펜디어스(요약된)',
      context: 'The book is a compendium of best practices.',
      synonymAntonym: '동의어: summary, digest, 반의어: expansion',
    }),
    {
      definition: 'A collection of concise but comprehensive information on a subject.',
      wordDistractors: ['Podium', 'Stadium', 'Medium'],
      definitionDistractors: [
        'a small platform for a speaker',
        'a large structure for sports events',
        'a long and detailed written work',
      ],
      exampleSentences: [
        { en: 'The book is a compendium of best practices.', ko: '그 책은 모범 사례 요약집이다.' },
        { en: 'The physician\'s compendium covers common remedies.', ko: '그 의술 요약집은 일반적인 치료법을 담고 있다.' },
      ],
    }
  ),
  word('Complacent', '안주하는', 7, 'adjective',
    ['불안한', '비판적인', '각성한', '불만족', '열망하는', '불안', '각성', '경각', '불만', '열의'],
    tips({
      etymology: 'com(완전히) + plac(기쁘다) + -ent -> 스스로 만족한',
      visual: '소파에 편히 앉아 만족하는 사람',
      soundAlike: '컴플레이션트 = 컴플레이션시(안주)',
      context: 'Do not become complacent about success.',
      synonymAntonym: '동의어: smug, self-satisfied, 반의어: discontent',
    }),
    {
      definition: 'Satisfied with oneself in a way that shows lack of awareness of dangers.',
      wordDistractors: ['Compliant', 'Placate', 'Pleasant'],
      definitionDistractors: [
        'willing to obey or conform',
        'to make someone less angry',
        'dissatisfied and wanting change',
      ],
      exampleSentences: [
        { en: 'Do not become complacent about success.', ko: '성공에 안주하지 마라.' },
        { en: 'The complacent team was surprised by the upset.', ko: '안주하던 팀은 역전에 놀랐다.' },
      ],
    }
  ),
  word('Complement', '보완하다', 7, 'verb',
    ['훼손하다', '상쇄하다', '해치다', '불일치', '충돌', '상쇄', '해체', '파괴', '불화합', '먹다'],
    tips({
      etymology: 'com(완전히) + ple(채우다) + -ment -> 완전히 채우다',
      visual: '서로 맞는 두 퍼즐 조각',
      soundAlike: '컴플리먼트 = 컴플리먼터리(보완적)',
      context: 'The sauce complements the fish perfectly.',
      synonymAntonym: '동의어: complete, supplement, 반의어: contradict',
    }),
    {
      definition: 'To add something that makes another thing complete or better.',
      wordDistractors: ['Compliment', 'Supplement', 'Implement'],
      definitionDistractors: [
        'a polite expression of praise',
        'something added to complete or enhance',
        'to make something worse or less valuable',
      ],
      exampleSentences: [
        { en: 'The sauce complements the fish perfectly.', ko: '그 소스는 생선과 완벽하게 어울린다.' },
        { en: 'His skills complement hers in the project.', ko: '그의 기술은 프로젝트에서 그녀의 기술을 보완한다.' },
      ],
    }
  ),
  word('Comply', '준수하다', 7, 'verb',
    ['위반하다', '거부하다', '저항하다', '무시하다', '반역하다', '불복', '저항', '위반', '거역', '반항'],
    tips({
      etymology: 'com(함께) + ply(채우다) -> 요구를 채우다',
      visual: '규칙을 따라 행동하는 사람',
      soundAlike: '컴플라이 = 컴플라이언스(준수)',
      context: 'You must comply with the regulations.',
      synonymAntonym: '동의어: obey, conform, 반의어: defy',
    }),
    {
      definition: 'To act in accordance with a wish, command, or rule.',
      wordDistractors: ['Apply', 'Imply', 'Supply'],
      definitionDistractors: [
        'to make a formal request',
        'to suggest something without stating it',
        'to refuse to obey or conform',
      ],
      exampleSentences: [
        { en: 'You must comply with the regulations.', ko: '규정을 준수해야 한다.' },
        { en: 'The company failed to comply with safety standards.', ko: '그 회사는 안전 기준을 준수하지 못했다.' },
      ],
    }
  ),
  word('Concede', '인정하다', 7, 'verb',
    ['부정하다', '거부하다', '고집하다', '쟁변하다', '반박하다', '거절', '퇴짜', '불인정', '부인', '저항'],
    tips({
      etymology: 'con(완전히) + cede(양보하다) -> 완전히 넘기다',
      visual: '논쟁에서 패배를 인정하는 무릎꿇음',
      soundAlike: '컨시드 = 컨셋션(양보)',
      context: 'He conceded defeat after the final vote.',
      synonymAntonym: '동의어: admit, yield, 반의어: deny',
    }),
    {
      definition: 'To admit that something is true or valid, especially reluctantly.',
      wordDistractors: ['Conceal', 'Proceed', 'Succeed'],
      definitionDistractors: [
        'to hide or keep something secret',
        'to continue or move forward',
        'to refuse to admit the truth',
      ],
      exampleSentences: [
        { en: 'He conceded defeat after the final vote.', ko: '그는 최종 투표 후 패배를 인정했다.' },
        { en: 'I must concede that you have a point.', ko: '당신 말이 맞다는 것을 인정해야 겠다.' },
      ],
    }
  ),
  word('Conciliatory', '화해적인', 7, 'adjective',
    ['적대적인', '공격적인', '도발적인', '배타적', '냉혹', '적대', '과격', '불화해', '공격', '대립'],
    tips({
      etymology: 'con(함께) + cil(모으다) + -atory -> 화합시키려는',
      visual: '악수를 나누는 이전 적들',
      soundAlike: '컨실리어토리 = 컨실리에이트(화해시키다)',
      context: 'She took a conciliatory tone.',
      synonymAntonym: '동의어: placating, peacemaking, 반의어: confrontational',
    }),
    {
      definition: 'Intended to lessen anger or hostility and make peace.',
      wordDistractors: ['Preliminary', 'Supplementary', 'Complimentary'],
      definitionDistractors: [
        'the restoration of friendly relations',
        'to cause someone to be hostile',
        'aggressive and ready to attack',
      ],
      exampleSentences: [
        { en: 'She took a conciliatory tone.', ko: '그녀는 화해적인 어조를 취했다.' },
        { en: 'The conciliatory gesture helped ease tensions.', ko: '그 화해적인 제스처가 긴장을 완화하는 데 도움이 되었다.' },
      ],
    }
  ),
  word('Concurrent', '동시의', 7, 'adjective',
    ['순차적', '이전의', '후속의', '번갈아', '교차', '순서', '연속', '차례', '별도', '비동시'],
    tips({
      etymology: 'con(함께) + curr(달리다) + -ent -> 함께 달리는',
      visual: '여러 화면이 동시에 진행되는 모니터',
      soundAlike: '컨커런트 = 컨커런스(동시성)',
      context: 'Concurrent events caused confusion.',
      synonymAntonym: '동의어: simultaneous, parallel, 반의어: sequential',
    }),
    {
      definition: 'Existing, happening, or done at the same time.',
      wordDistractors: ['Current', 'Consequent', 'Subsequent'],
      definitionDistractors: [
        'belonging to the present time',
        'following as a result',
        'happening one after another',
      ],
      exampleSentences: [
        { en: 'Concurrent events caused confusion.', ko: '동시에 일어난 일들이 혼란을 야기했다.' },
        { en: 'The two conferences ran concurrent sessions.', ko: '두 회의가 동시에 세션을 진행했다.' },
      ],
    }
  ),
  word('Condone', '묵인하다', 7, 'verb',
    ['규탄하다', '징벌하다', '비난하다', '거부하다', '저지하다', '처벌', '규탄', '비난', '저지', '거부'],
    tips({
      etymology: 'con(함께) + don(주다) -> 같이 용서해주다',
      visual: '나쁜 행동을 눈감아주는 사람',
      soundAlike: '컨돈 = 컨돈먼트(묵인)',
      context: 'We cannot condone such behavior.',
      synonymAntonym: '동의어: overlook, excuse, 반의어: condemn',
    }),
    {
      definition: 'To accept or allow behavior that is considered wrong, often by not opposing it.',
      wordDistractors: ['Condemn', 'Pardon', 'Abandon'],
      definitionDistractors: [
        'to express strong disapproval',
        'to forgive someone for an offense',
        'to punish or penalize severely',
      ],
      exampleSentences: [
        { en: 'We cannot condone such behavior.', ko: '우리는 그런 행동을 묵인할 수 없다.' },
        { en: 'The school does not condone bullying.', ko: '학교는 괴롭힘을 묵인하지 않는다.' },
      ],
    }
  ),
  word('Confluence', '합류점', 7, 'noun',
    ['분기점', '갈림길', '분산', '이탈', '분리', '분기', '갈래', '해체', '분할', '사과'],
    tips({
      etymology: 'con(함께) + flu(흐르다) + -ence -> 함께 흐르는 곳',
      visual: '두 강이 만나는 Y자형 수로',
      soundAlike: '컨플루언스 = 컨플루언트(합류하는)',
      context: 'The confluence of ideas led to innovation.',
      synonymAntonym: '동의어: junction, merging, 반의어: divergence',
    }),
    {
      definition: 'A place where two or more rivers or streams meet, or a meeting of things.',
      wordDistractors: ['Influence', 'Affluence', 'Eloquence'],
      definitionDistractors: [
        'the capacity to affect someone\'s behavior',
        'abundance of wealth or property',
        'a point where things separate or branch',
      ],
      exampleSentences: [
        { en: 'The confluence of ideas led to innovation.', ko: '아이디어의 합류가 혁신으로 이어졌다.' },
        { en: 'The city grew at the confluence of two rivers.', ko: '그 도시는 두 강의 합류점에서 성장했다.' },
      ],
    }
  ),
  word('Conjecture', '추측', 7, 'noun',
    ['사실', '증거', '확인', '실증', '검증', '입증', '객관', '실체', '확정', '증명'],
    tips({
      etymology: 'con(함께) + ject(던지다) + -ure -> 함께 던져 맞추다',
      visual: '머리 위에 물음표가 떠 있는 사람',
      soundAlike: '컨젝처 = 컨젝처얼(추측의)',
      context: 'That is mere conjecture, not fact.',
      synonymAntonym: '동의어: guess, speculation, 반의어: fact',
    }),
    {
      definition: 'An opinion or conclusion formed without sufficient evidence.',
      wordDistractors: ['Conjuncture', 'Injection', 'Architecture'],
      definitionDistractors: [
        'a critical situation or turning point',
        'putting medicine into the body',
        'something known to be true',
      ],
      exampleSentences: [
        { en: 'That is mere conjecture, not fact.', ko: '그건 추측일 뿐, 사실이 아니다.' },
        { en: 'His theory was based on conjecture rather than data.', ko: '그의 이론은 데이터보다는 추측에 기반했다.' },
      ],
    }
  ),
  word('Connive', '공모하다', 7, 'verb',
    ['저지하다', '노출하다', '반대하다', '비난하다', '규탄하다', '저지', '방해', '고발', '저항', '반대'],
    tips({
      etymology: 'con(함께) + niv(눈 깜짝) -> 눈짓으로 공모하다',
      visual: '몰래 눈짓으로 신호하는 두 사람',
      soundAlike: '커나이브 = 커니벤스(공모)',
      context: 'They connived to cheat the system.',
      synonymAntonym: '동의어: collude, conspire, 반의어: oppose',
    }),
    {
      definition: 'To secretly work together with others to do something wrong or illegal.',
      wordDistractors: ['Convey', 'Contrive', 'Survive'],
      definitionDistractors: [
        'to plan or devise something cleverly',
        'to work openly against something',
        'to expose a secret plan',
      ],
      exampleSentences: [
        { en: 'They connived to cheat the system.', ko: '그들은 시스템을 속이기 위해 공모했다.' },
        { en: 'The executives connived to fix prices.', ko: '경영진들은 가격을 담합하기 위해 공모했다.' },
      ],
    }
  ),
  word('Consecutive', '연속적인', 7, 'adjective',
    ['불규칙한', '간헐적', '산발적', '불연속', '떨어져', '간격', '불규칙', '간헐', '분산', '비연속'],
    tips({
      etymology: 'con(함께) + secu(따르다) + -tive -> 연달아 따른',
      visual: '일주일 연속 체크된 달력',
      soundAlike: '컨섹큐티브 = 컨섹큐티브리(연속으로)',
      context: 'He won five consecutive games.',
      synonymAntonym: '동의어: successive, sequential, 반의어: intermittent',
    }),
    {
      definition: 'Following one after another in uninterrupted sequence.',
      wordDistractors: ['Consecrate', 'Consequence', 'Executive'],
      definitionDistractors: [
        'to make something sacred',
        'a result or effect of an action',
        'occurring at irregular intervals',
      ],
      exampleSentences: [
        { en: 'He won five consecutive games.', ko: '그는 연속으로 다섯 경기를 승리했다.' },
        { en: 'It rained for three consecutive days.', ko: '연속으로 사흘 동안 비가 왔다.' },
      ],
    }
  ),
  word('Conspicuous', '눈에 띄는', 7, 'adjective',
    ['눈에 띄지 않는', '숨겨진', '미묘한', '은밀한', '보이지 않는', '미세', '은폐', '숨김', '미묘', '불현'],
    tips({
      etymology: 'con(함께) + spic(보다) + -uous -> 함께 보이는',
      visual: '붉은 옷을 입어 유독 눈에 띄는 사람',
      soundAlike: '컨스피큐어스 = 컨스피큐어스니스(눈에 띄음)',
      context: 'His bright tie was conspicuous.',
      synonymAntonym: '동의어: obvious, prominent, 반의어: inconspicuous',
    }),
    {
      definition: 'Standing out and easily noticed; attracting attention.',
      wordDistractors: ['Suspicious', 'Perspicuous', 'Meticulous'],
      definitionDistractors: [
        'having doubts about someone\'s honesty',
        'clear and easy to understand',
        'difficult to notice or see',
      ],
      exampleSentences: [
        { en: 'His bright tie was conspicuous.', ko: '그의 화려한 넥타이는 눈에 띄었다.' },
        { en: 'She tried to avoid being conspicuous at the party.', ko: '그녀는 파티에서 눈에 띄지 않으려 했다.' },
      ],
    }
  ),
  word('Convoluted', '복잡한', 7, 'adjective',
    ['간단한', '명쾌한', '단순한', '쉬운', '명료한', '직관적', '투명한', '간결한', '소박한', '평이한'],
    tips({
      etymology: 'con(함께) + volut(감다) -> 뒤엉키게 감긴',
      visual: '복잡하게 꼬인 실타래',
      soundAlike: '컨볼루티드 = 컨볼(꼬인)루션',
      context: 'The plot was so convoluted that nobody understood it.',
      synonymAntonym: '동의어: intricate, complex, 반의어: straightforward',
    }),
    {
      definition: 'Extremely complex and difficult to follow or understand.',
      wordDistractors: ['Revolting', 'Evacuated', 'Captivated'],
      definitionDistractors: [
        'causing strong disgust',
        'removed from a dangerous place',
        'simple and easy to understand',
      ],
      exampleSentences: [
        { en: 'The plot was so convoluted that nobody understood it.', ko: '그 줄거리는 너무 복잡해서 아무도 이해하지 못했다.' },
        { en: 'The convoluted instructions confused everyone.', ko: '그 복잡한 설명서가 모두를 혼란스럽게 했다.' },
      ],
    }
  ),
  word('Constrain', '제한하다', 7, 'verb',
    ['해방하다', '자유롭게 하다', '허용하다', '확장하다', '늘리다', '해제', '해방', '확대', '허용', '완화'],
    tips({
      etymology: 'con(함께) + strain(조이다) -> 함께 억압하다',
      visual: '밧줄에 묶인 사람',
      soundAlike: '컨스트레인 = 컨스트레인트(제약)',
      context: 'Budget constraints limited our options.',
      synonymAntonym: '동의어: restrict, limit, 반의어: free',
    }),
    {
      definition: 'To restrict or limit someone or something.',
      wordDistractors: ['Restrain', 'Refrain', 'Retain'],
      definitionDistractors: [
        'to hold back or prevent action',
        'to stop oneself from doing something',
        'to set free from restrictions',
      ],
      exampleSentences: [
        { en: 'Budget constraints limited our options.', ko: '예산 제약이 우리의 선택지를 제한했다.' },
        { en: 'Time constraints prevented a full review.', ko: '시간 제약으로 인해 전체 검토가 불가능했다.' },
      ],
    }
  ),
  word('Contend', '다투다', 7, 'verb',
    ['양보하다', '포기하다', '동의하다', '굴복하다', '항복하다', '순응', '양보', '동의', '포기', '굴종'],
    tips({
      etymology: 'con(함께) + tend(뻗다) -> 함께 싸우다',
      visual: '겨루는 두 선수',
      soundAlike: '컨텐드 = 컨텐션(논쟁)',
      context: 'They contend for the championship.',
      synonymAntonym: '동의어: compete, argue, 반의어: yield',
    }),
    {
      definition: 'To struggle or compete with others, or to assert something as true.',
      wordDistractors: ['Content', 'Extend', 'Intent'],
      definitionDistractors: [
        'the subject matter of something',
        'to make something longer',
        'to give up or surrender',
      ],
      exampleSentences: [
        { en: 'They contend for the championship.', ko: '그들은 우승을 놓고 다툰다.' },
        { en: 'Critics contend that the policy will fail.', ko: '비평가들은 그 정책이 실패할 것이라고 주장한다.' },
      ],
    }
  ),
  word('Contention', '논쟁', 7, 'noun',
    ['합의', '화합', '일치', '동의', '조화', '협력', '화해', '타협', '사과', '책'],
    tips({
      etymology: 'contend(다투다) + -tion -> 다툼의 상태',
      visual: '맹렬히 토론하는 회의실',
      soundAlike: '컨텐션 = 컨텐션어스(논쟁적인)',
      context: 'The main contention is about funding.',
      synonymAntonym: '동의어: dispute, argument, 반의어: agreement',
    }),
    {
      definition: 'Heated disagreement or dispute about something.',
      wordDistractors: ['Convention', 'Attention', 'Retention'],
      definitionDistractors: [
        'a large formal meeting',
        'lack of agreement or harmony',
        'a formal agreement between parties',
      ],
      exampleSentences: [
        { en: 'The main contention is about funding.', ko: '핵심 논쟁은 자금 확보에 관한 것이다.' },
        { en: 'There is contention over who should lead the project.', ko: '누가 프로젝트를 이끌어야 하는지에 대한 논쟁이 있다.' },
      ],
    }
  ),
  word('Contingent', '조건부의', 7, 'adjective',
    ['무조건적', '확정된', '고정된', '절대적', '필연적', '확정', '고정', '무조건', '절대', '필수'],
    tips({
      etymology: 'con(함께) + ting(닿다) + -ent -> 다른 것에 달려 있는',
      visual: '조건이 충족되면 실행되는 플로우차트',
      soundAlike: '컨틴전트 = 컨틴전시(우연)',
      context: 'The deal is contingent on approval.',
      synonymAntonym: '동의어: dependent, conditional, 반의어: unconditional',
    }),
    {
      definition: 'Dependent on something that may or may not happen.',
      wordDistractors: ['Continent', 'Content', 'Consistent'],
      definitionDistractors: [
        'one of the large land masses',
        'the things contained within something',
        'not dependent on anything else',
      ],
      exampleSentences: [
        { en: 'The deal is contingent on approval.', ko: '그 거래는 승인에 따라 좌우된다.' },
        { en: 'Our attendance is contingent on the weather.', ko: '우리의 참석은 날씨에 달려 있다.' },
      ],
    }
  ),
  word('Contrive', '꾀하다', 7, 'verb',
    ['우연히 하다', '방치하다', '무시하다', '실패하다', '포기하다', '우연', '방임', '소홀', '자연', '무의도'],
    tips({
      etymology: 'con(함께) + triv(찾다) -> 함께 찾아 꾸미다',
      visual: '숨겨진 장치를 만드는 발명가',
      soundAlike: '컨트라이브 = 컨트라이번스(묘수)',
      context: 'He contrived a plan to escape.',
      synonymAntonym: '동의어: devise, scheme, 반의어: happen',
    }),
    {
      definition: 'To create or bring about something through clever planning or skill.',
      wordDistractors: ['Strive', 'Thrive', 'Drive'],
      definitionDistractors: [
        'to make great effort to achieve',
        'to grow or develop successfully',
        'to occur by chance',
      ],
      exampleSentences: [
        { en: 'He contrived a plan to escape.', ko: '그는 탈출 계획을 꾀했다.' },
        { en: 'She contrived to meet him by accident.', ko: '그녀는 우연히 그를 만나도록 꾀했다.' },
      ],
    }
  ),
  word('Converge', '수렴하다', 7, 'verb',
    ['발산하다', '갈라지다', '분산하다', '흩어지다', '이탈하다', '분기', '발산', '분리', '갈래', '이탈'],
    tips({
      etymology: 'con(함께) + verg(기울다) -> 한 점으로 기울다',
      visual: '원에서 한 점으로 모이는 화살표',
      soundAlike: '컨버지 = 컨버전스(수렴)',
      context: 'The roads converge at the square.',
      synonymAntonym: '동의어: meet, merge, 반의어: diverge',
    }),
    {
      definition: 'To come together from different directions and meet at a point.',
      wordDistractors: ['Diverge', 'Submerge', 'Merge'],
      definitionDistractors: [
        'to separate and go in different directions',
        'to go under water',
        'to split into branches',
      ],
      exampleSentences: [
        { en: 'The roads converge at the square.', ko: '모든 길이 광장에서 만난다.' },
        { en: 'Opinions converged on the need for reform.', ko: '의견이 개혁의 필요성에 수렴했다.' },
      ],
    }
  ),
  word('Convict', '유죄 판결하다', 7, 'verb',
    ['석방하다', '면죄하다', '무죄 판결', '해제하다', '용서하다', '면제', '석방', '무죄', '면죄', '해방'],
    tips({
      etymology: 'con(강하게) + vict(이기다) -> 죄로 이기다',
      visual: '재판장이 유죄를 선고하는 법정',
      soundAlike: '컨빅트 = 컨빅션(유죄 판결)',
      context: 'The jury convicted him of fraud.',
      synonymAntonym: '동의어: condemn, find guilty, 반의어: acquit',
    }),
    {
      definition: 'To declare someone guilty of a criminal offense in a court of law.',
      wordDistractors: ['Evict', 'Convince', 'Predict'],
      definitionDistractors: [
        'to force someone to leave a property',
        'to persuade someone to believe',
        'to declare someone not guilty',
      ],
      exampleSentences: [
        { en: 'The jury convicted him of fraud.', ko: '배심원들은 그를 사기로 유죄 판결했다.' },
        { en: 'She was convicted of theft and sentenced to prison.', ko: '그녀는 절도로 유죄 판결을 받고 감옥에 갔다.' },
      ],
    }
  ),
  word('Copious', '풍부한', 7, 'adjective',
    ['빈약한', '부족한', '희소한', '미미한', '드문', '희소', '결핍', '빈약', '부족', '미미'],
    tips({
      etymology: '라틴어 copia(풍요) + -ous -> 넘치는',
      visual: '가득 차 넘치는 바구니',
      soundAlike: '코피어스 = 코피어스니스(풍부함)',
      context: 'She took copious notes during the lecture.',
      synonymAntonym: '동의어: abundant, plentiful, 반의어: scarce',
    }),
    {
      definition: 'Abundant in supply or quantity; more than enough.',
      wordDistractors: ['Carious', 'Curious', 'Serious'],
      definitionDistractors: [
        'affected by tooth decay',
        'eager to know or learn',
        'insufficient or lacking',
      ],
      exampleSentences: [
        { en: 'She took copious notes during the lecture.', ko: '그녀는 강의 중 풍부한 노트를 작성했다.' },
        { en: 'The garden produced copious amounts of tomatoes.', ko: '그 정원은 풍부한 양의 토마토를 생산했다.' },
      ],
    }
  ),
  word('Cordial', '따뜻한', 7, 'adjective',
    ['냉담한', '무뚝뚝한', '적대적인', '불친절', '냉혹', '냉소', '무례', '무정', '냉담', '적대'],
    tips({
      etymology: '라틴어 cor(심장) + -ial -> 마음에서 나오는',
      visual: '따뜻한 미소로 환영하는 호스트',
      soundAlike: '코디얼 = 코디얼리티(따뜻함)',
      context: 'They received a cordial welcome.',
      synonymAntonym: '동의어: warm, friendly, 반의어: hostile',
    }),
    {
      definition: 'Warm, friendly, and sincere in manner or feeling.',
      wordDistractors: ['Cardinal', 'Ordinal', 'Spatial'],
      definitionDistractors: [
        'a sweet fruit-flavored drink',
        'relating to the back',
        'unfriendly or hostile',
      ],
      exampleSentences: [
        { en: 'They received a cordial welcome.', ko: '그들은 따뜻한 환영을 받았다.' },
        { en: 'The two leaders had a cordial meeting.', ko: '두 지도자는 따뜻한 회담을 가졌다.' },
      ],
    }
  ),
  word('Corrode', '부식시키다', 7, 'verb',
    ['보존하다', '보호하다', '강화하다', '수리하다', '복원하다', '보강', '수선', '보존', '고정', '강화'],
    tips({
      etymology: 'com(함께) + rod(갉다) + -e -> 함께 갉아먹다',
      visual: '녹슨 금속이 부식되는 과정',
      soundAlike: '커로드 = 커로전(부식)',
      context: 'Salt water corrodes metal quickly.',
      synonymAntonym: '동의어: eat away, rust, 반의어: preserve',
    }),
    {
      definition: 'To gradually destroy or damage metal, stone, or other material by chemical action.',
      wordDistractors: ['Erode', 'Explode', 'Encode'],
      definitionDistractors: [
        'to gradually wear away soil or rock',
        'to protect from damage',
        'to make stronger or more solid',
      ],
      exampleSentences: [
        { en: 'Salt water corrodes metal quickly.', ko: '소금물은 금속을 빠르게 부식시킨다.' },
        { en: 'Rust had corroded the old pipes.', ko: '녹이 오래된 파이프를 부식시켰다.' },
      ],
    }
  ),
  word('Corroborate', '입증하다', 7, 'verb',
    ['부정하다', '반박하다', '무효화하다', '의심하다', '불신하다', '부인', '반증', '훼손', '부정', '반박'],
    tips({
      etymology: 'com(함께) + robor(강함) + -ate -> 함께 강하게 하다',
      visual: '여러 증인이 말을 맞추는 법정',
      soundAlike: '커로버레이트 = 커로버레이션(입증)',
      context: 'The witness corroborated his story.',
      synonymAntonym: '동의어: confirm, support, 반의어: contradict',
    }),
    {
      definition: 'To confirm or give support to a statement, theory, or finding.',
      wordDistractors: ['Collaborate', 'Correlate', 'Elaborate'],
      definitionDistractors: [
        'to work jointly with others',
        'to have a mutual connection',
        'to prove wrong or false',
      ],
      exampleSentences: [
        { en: 'The witness corroborated his story.', ko: '목격자가 그의 이야기를 입증했다.' },
        { en: 'New evidence corroborated the original finding.', ko: '새로운 증거가 원래 발견을 입증했다.' },
      ],
    }
  ),
  word('Covert', '비밀의', 7, 'adjective',
    ['공개적인', '노골적인', '드러난', '투명한', '명시적', '공개', '노출', '과시', '공연', '명시'],
    tips({
      etymology: '라틴어 cooperire(덮다) -> 덮인, 숨겨진',
      visual: '암막 뒤에 숨겨진 작전실',
      soundAlike: '코버트 = 코버트리(비밀스럽게)',
      context: 'They conducted a covert operation.',
      synonymAntonym: '동의어: secret, hidden, 반의어: overt',
    }),
    {
      definition: 'Not openly shown or acknowledged; secret or hidden.',
      wordDistractors: ['Overt', 'Convert', 'Pervert'],
      definitionDistractors: [
        'done or shown openly',
        'to change form or purpose',
        'completely transparent',
      ],
      exampleSentences: [
        { en: 'They conducted a covert operation.', ko: '그들은 비밀 작전을 수행했다.' },
        { en: 'She made covert attempts to undermine him.', ko: '그녀는 그를 약화시키기 위해 비밀리에 시도했다.' },
      ],
    }
  ),
  word('Credible', '믿을 만한', 7, 'adjective',
    ['의심스러운', '믿기 어려운', '불신할 만한', '허황된', '거짓', '부정', '불신', '허위', '의심', '좋은'],
    tips({
      etymology: '라틴어 credere(믿다) + -ible -> 믿을 수 있는',
      visual: '증거 서류를 제시하는 말하는 사람',
      soundAlike: '크레더블 = 크레더빌리티(신뢰성)',
      context: 'The witness gave credible testimony.',
      synonymAntonym: '동의어: believable, trustworthy, 반의어: incredible',
    }),
    {
      definition: 'Able to be believed; convincing and trustworthy.',
      wordDistractors: ['Edible', 'Incredible', 'Sensible'],
      definitionDistractors: [
        'fit to be eaten as food',
        'impossible to believe',
        'deserving of distrust',
      ],
      exampleSentences: [
        { en: 'The witness gave credible testimony.', ko: '목격자는 믿을 만한 증언을 했다.' },
        { en: 'There is no credible evidence to support the claim.', ko: '그 주장을 뒷받침할 믿을 만한 증거가 없다.' },
      ],
    }
  ),
  word('Culminate', '절정에 달하다', 7, 'verb',
    ['시작하다', '추락하다', '하락하다', '퇴조하다', '침체하다', '시작', '퇴락', '하락', '침체', '퇴보'],
    tips({
      etymology: '라틴어 culmen(꼭대기) + -ate -> 꼭대기에 이르다',
      visual: '산 정상에 도달한 등산객',
      soundAlike: '컬미네이트 = 컬미네이션(절정)',
      context: 'Years of work culminated in success.',
      synonymAntonym: '동의어: peak, climax, 반의어: begin',
    }),
    {
      definition: 'To reach the highest or most decisive point; to result in.',
      wordDistractors: ['Terminate', 'Eliminate', 'Dominate'],
      definitionDistractors: [
        'to bring to an end',
        'to remove or get rid of',
        'to begin or start',
      ],
      exampleSentences: [
        { en: 'Years of work culminated in success.', ko: '수년간의 노력이 성공으로 절정을 이뤘다.' },
        { en: 'The celebration culminated in a fireworks display.', ko: '축제는 불꽃놀이로 절정에 달했다.' },
      ],
    }
  ),
  word('Curtail', '축소하다', 7, 'verb',
    ['확장하다', '늘리다', '연장하다', '증대시키다', '확대하다', '확장', '연장', '증대', '확대', '증가'],
    tips({
      etymology: 'curt(짧은) + tail(꼬리) -> 꼬리를 자르다',
      visual: '가위로 잘라 짧게 만드는 리본',
      soundAlike: '커테일 = 커테일먼트(축소)',
      context: 'Budget cuts forced us to curtail spending.',
      synonymAntonym: '동의어: shorten, reduce, 반의어: extend',
    }),
    {
      definition: 'To reduce in extent or quantity; to impose a restriction on.',
      wordDistractors: ['Detail', 'Retail', 'Entail'],
      definitionDistractors: [
        'a small piece of information',
        'the sale of goods to the public',
        'to increase in size or amount',
      ],
      exampleSentences: [
        { en: 'Budget cuts forced us to curtail spending.', ko: '예산 삭감으로 지출을 축소해야 했다.' },
        { en: 'The government curtailed freedom of speech.', ko: '정부는 언론의 자유를 축소했다.' },
      ],
    }
  ),
  word('Cynical', '냉소적인', 7, 'adjective',
    ['낙관적인', '순진한', '신뢰하는', '순수한', '긍정적', '낙관', '순수', '신뢰', '희망', '긍정'],
    tips({
      etymology: '그리스어 kynikos(개 같은) -> 개덕학파의 회의',
      visual: '고개를 갸웃거리며 의심하는 표정',
      soundAlike: '시니컬 = 시니시즘(냉소주의)',
      context: 'He had a cynical view of politics.',
      synonymAntonym: '동의어: skeptical, distrustful, 반의어: idealistic',
    }),
    {
      definition: 'Believing that people are motivated only by self-interest; distrustful of sincerity.',
      wordDistractors: ['Clinical', 'Typical', 'Cyclical'],
      definitionDistractors: [
        'relating to medical treatment',
        'representing the usual or normal',
        'trusting and hopeful',
      ],
      exampleSentences: [
        { en: 'He had a cynical view of politics.', ko: '그는 정치에 대해 냉소적인 견해를 가졌다.' },
        { en: 'She was too cynical to believe in happy endings.', ko: '그녀는 해피엔딩을 믿기엔 너무 냉소적이었다.' },
      ],
    }
  ),
  word('Daunting', '벅찬', 7, 'adjective',
    ['쉬운', '용이한', '부담없는', '가벼운', '만만한', '간편', '용이', '편안', '쉬움', '가벼움'],
    tips({
      etymology: '고대프랑스어 danter(굴복시키다) -> 위압하다',
      visual: '가파른 산을 올려다보는 등산객',
      soundAlike: '돈팅 = 돈트(두려워하다)',
      context: 'The prospect was daunting.',
      synonymAntonym: '동의어: intimidating, overwhelming, 반의어: easy',
    }),
    {
      definition: 'Seeming difficult to deal with; intimidating or discouraging.',
      wordDistractors: ['Haunting', 'Taunting', 'Count'],
      definitionDistractors: [
        'persistently present in the mind',
        'mocking or insulting',
        'simple and easy to accomplish',
      ],
      exampleSentences: [
        { en: 'The prospect was daunting.', ko: '그 전망은 벅찼다.' },
        { en: 'Moving abroad is a daunting task.', ko: '해외 이주는 벅찬 과업이다.' },
      ],
    }
  ),
  word('Debilitate', '약화시키다', 7, 'verb',
    ['강화하다', '회복시키다', '촉진하다', '활성화하다', '기운 나게 하다', '강화', '회복', '활성', '촉진', '부양'],
    tips({
      etymology: 'de(아래로) + bili(힘) + -ate -> 힘을 빼다',
      visual: '침대에 누워 힘없는 환자',
      soundAlike: '디빌리테이트 = 디빌리테이션(쇠약)',
      context: 'The illness debilitated him for months.',
      synonymAntonym: '동의어: weaken, enfeeble, 반의어: strengthen',
    }),
    {
      definition: 'To make someone weak or infirm; to weaken or impair.',
      wordDistractors: ['Rehabilitate', 'Delineate', 'Facilitate'],
      definitionDistractors: [
        'to restore to health or normal life',
        'to describe or outline precisely',
        'to make stronger or more robust',
      ],
      exampleSentences: [
        { en: 'The illness debilitated him for months.', ko: '그 병이 그를 수개월 동안 약화시켰다.' },
        { en: 'The heat debilitated the marathon runners.', ko: '더위가 마라톤 선수들을 약화시켰다.' },
      ],
    }
  ),
  word('Decadent', '퇴폐적인', 7, 'adjective',
    ['금욕적인', '검소한', '건강한', '절제된', '순수한', '검소', '금욕', '절제', '순수', '정갈'],
    tips({
      etymology: 'de(아래로) + cad(떨어지다) + -ent -> 쇠퇴하는',
      visual: '과잉 장식된 호화 파티',
      soundAlike: '데커던트 = 데커던스(퇴폐)',
      context: 'The dessert was rich and decadent.',
      synonymAntonym: '동의어: corrupt, degenerate, 반의어: ascetic',
    }),
    {
      definition: 'Characterized by moral or cultural decline, or luxuriously self-indulgent.',
      wordDistractors: ['Descendant', 'Decedent', 'Decent'],
      definitionDistractors: [
        'a person descended from an ancestor',
        'a person who has died',
        'simple and avoiding luxury',
      ],
      exampleSentences: [
        { en: 'The dessert was rich and decadent.', ko: '그 디저트는 풍부하고 퇴폐적이었다.' },
        { en: 'The decadent lifestyle of the aristocracy was criticized.', ko: '귀족들의 퇴폐적인 생활방식이 비난받았다.' },
      ],
    }
  ),
  word('Decipher', '해독하다', 7, 'verb',
    ['암호화하다', '숨기다', '혼란시키다', '봉인하다', '은폐하다', '암호화', '숨김', '은폐', '혼란', '봉인'],
    tips({
      etymology: 'de(반대) + cipher(암호) -> 암호를 풀다',
      visual: '고대 문자를 읽어내는 고고학자',
      soundAlike: '디사이퍼 = 디사이퍼먼트(해독)',
      context: 'I could not decipher his handwriting.',
      synonymAntonym: '동의어: decode, interpret, 반의어: encode',
    }),
    {
      definition: 'To convert from a coded or unclear form into plain language; to interpret.',
      wordDistractors: ['Encipher', 'Decry', 'Decode'],
      definitionDistractors: [
        'to convert into a coded form',
        'to make something unclear',
        'to speak in a foreign language',
      ],
      exampleSentences: [
        { en: 'I could not decipher his handwriting.', ko: '나는 그의 필체를 해독할 수 없었다.' },
        { en: 'Archaeologists deciphered the ancient script.', ko: '고고학자들이 고대 문자를 해독했다.' },
      ],
    }
  ),
  word('Decree', '포고령', 7, 'noun',
    ['허가', '청원', '요청', '제안', '권유', '권고', '사과', '책', '고양이', '개'],
    tips({
      etymology: 'de(아래로) + cree(분리하다) -> 아래로 내리는 결정',
      visual: '왕이 내리는 공식 문서',
      soundAlike: '디크리 = 디크리(포고하다)',
      context: 'The king issued a decree.',
      synonymAntonym: '동의어: order, edict, 반의어: petition',
    }),
    {
      definition: 'An official order issued by a legal authority; a formal command.',
      wordDistractors: ['Degree', 'Decry', 'Decode'],
      definitionDistractors: [
        'a unit of measurement or rank',
        'to express strong disapproval',
        'a formal request or appeal',
      ],
      exampleSentences: [
        { en: 'The king issued a decree.', ko: '왕이 포고령을 내렸다.' },
        { en: 'A presidential decree banned the substance.', ko: '대통령 포고령으로 그 물질이 금지되었다.' },
      ],
    }
  ),
  word('Deem', '간주하다', 7, 'verb',
    ['부정하다', '의심하다', '무시하다', '경시하다', '거부하다', '부인', '의심', '거절', '경시', '불인정'],
    tips({
      etymology: '고대영어 deman(판단하다)에서 유래',
      visual: '심사 후 합격 도장을 찍는 심사관',
      soundAlike: '딤 = 딤드(간주된)',
      context: 'The court deemed the evidence admissible.',
      synonymAntonym: '동의어: consider, judge, 반의어: discard',
    }),
    {
      definition: 'To regard or consider something in a specified way.',
      wordDistractors: ['Redeem', 'Seem', 'Steam'],
      definitionDistractors: [
        'to compensate for faults',
        'to give the impression of',
        'to reject or refuse',
      ],
      exampleSentences: [
        { en: 'The court deemed the evidence admissible.', ko: '법원은 그 증거를 채택 가능하다고 간주했다.' },
        { en: 'The project was deemed a success.', ko: '그 프로젝트는 성공으로 간주되었다.' },
      ],
    }
  ),
];
