import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch42: VocabItem[] = [
  word('justice', '정의', 5, 'noun',
    ['불의', '편견', '범죄', '부패', '차별', '억압', '혼란', '폭력', '불평등', '무질서'],
    tips({
      etymology: '라틴어 \'justus(올바른)\'에서 유래하여 법과 도덕에 따른 공정함을 의미합니다.',
      visual: '눈을 가리고 저울과 칼을 들고 있는 정의의 여신상을 떠올려 보세요.',
      soundAlike: '\'저스티스\'는 \'저(저울) 스틱(막대)\'처럼 공평하게 무게를 재는 모습을 연상시킵니다.',
      context: '법정 드라마에서 판사가 판결을 내릴 때 가장 중요하게 여기는 가치입니다.',
      synonymAntonym: 'fairness와 유사하며, 반대로 치우친 상태인 injustice와 대조됩니다.',
    }),
    {
      definition: 'The quality of being fair and reasonable, especially in the way people are treated or decisions are made.',
      synonyms: ['fairness', 'equity', 'righteousness'],
      antonyms: ['injustice', 'unfairness', 'wickedness'],
      exampleSentences: [
        { en: 'The protesters marched through the streets demanding social reform and equal treatment for all.', ko: '시위대들은 사회 개혁과 모두를 위한 평등한 대우를 요구하며 거리를 행진했습니다.' },
        { en: 'A judge must ensure that the legal process is carried out with complete impartiality.', ko: '판사는 법적 절차가 완전한 공정함 속에서 수행되도록 보장해야 합니다.' },
      ],
    }
  ),
  word('justify', '정당화하다', 6, 'verb',
    ['비난하다', '포기하다', '무시하다', '반대하다', '은폐하다', '조작하다', '망설이다', '거절하다', '파괴하다', '의심하다'],
    tips({
      etymology: '라틴어 \'justus(올바른)\'와 \'facere(만들다)\'가 합쳐져 \'옳음을 증명하다\'라는 뜻이 되었습니다.',
      visual: '법정에서 변호사가 자신의 의뢰인이 왜 그런 행동을 했는지 판사에게 타당한 이유를 설명하는 모습을 상상해 보세요.',
      soundAlike: '\'저스티스(Justice, 정의)\'를 \'파이(fy, 만들다)\'한다고 생각하면 정의롭고 정당하게 만든다는 의미가 쉽게 연결됩니다.',
      context: '주로 자신의 결정이나 행동이 비난받을 상황에서 그것이 왜 최선이었는지 논리적으로 설명할 때 사용합니다.',
      synonymAntonym: '정당성을 입증하는 validate와 반대로, 잘못을 지적하거나 유죄로 만드는 condemn을 함께 기억하세요.',
    }),
    {
      definition: 'To provide a good reason or explanation for something that others might consider wrong or unreasonable.',
      synonyms: ['validate', 'warrant', 'substantiate'],
      antonyms: ['condemn', 'oppose', 'disprove'],
      exampleSentences: [
        { en: 'The manager had to provide data to explain the high costs and support the budget increase.', ko: '매니저는 높은 비용을 설명하고 예산 증액을 정당화하기 위해 데이터를 제공해야 했습니다.' },
        { en: 'No amount of stress can ever excuse or give a valid reason for such rude behavior toward customers.', ko: '어떤 스트레스도 고객에 대한 그러한 무례한 행동을 정당화할 수는 없습니다.' },
      ],
    }
  ),
  word('keen', '날카로운', 10, 'adjective',
    ['둔한', '무딘', '어리석은', '무관심한', '느릿한', '흐릿한', '평범한', '서투른', '지루한', '둔감한'],
    tips({
      etymology: '고대 영어 cene에서 유래하여 원래 \'용감한\' 혹은 \'숙련된\'이라는 뜻이었으나, 점차 지적으로 날카롭거나 열정적인 상태를 뜻하게 되었습니다.',
      visual: '면도날의 아주 얇고 날카로운 날 끝부분이나, 먹잇감을 노리는 매의 매서운 눈빛을 상상해 보세요.',
      soundAlike: '발음이 \'킨\'과 비슷하므로, 무언가를 \'키\'우기 위해 아주 \'날카로운\' 집중력을 발휘하는 모습을 연상해 보세요.',
      context: '시각이나 청각 같은 감각이 예민할 때도 쓰이지만, 무언가를 몹시 하고 싶어 하는 열정적인 상태를 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'sharp나 eager와 비슷한 의미를 지니며, 반대로 감각이 무디거나 관심이 없는 상태는 dull이나 indifferent라고 합니다.',
    }),
    {
      definition: 'having or showing great mental penetration, or possessing a very sharp edge or point',
      synonyms: ['sharp', 'acute', 'eager'],
      antonyms: ['dull', 'blunt', 'indifferent'],
      exampleSentences: [
        { en: 'Dogs have an incredibly keen sense of smell that allows them to track scents over long distances.', ko: '개들은 먼 거리에서도 냄새를 추적할 수 있게 해주는 믿기 힘들 정도로 날카로운 후각을 가지고 있다.' },
        { en: 'She showed a keen interest in learning ancient history after visiting the museum.', ko: '그녀는 박물관을 방문한 후 고대사를 배우는 것에 강한 열의를 보였다.' },
      ],
    }
  ),
  word('keep', '계속하다', 1, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '고대 영어 \'cepan\'에서 유래하여 무언가를 붙잡거나 관찰하고 보존한다는 의미에서 시작되었습니다.',
      visual: '달리기 선수가 지치지 않고 트랙을 계속해서 돌고 있는 끈기 있는 모습을 상상해 보세요.',
      soundAlike: '\'킵\' 발음이 \'깊이\'와 비슷하므로, 어떤 행동을 깊게 파고들며 멈추지 않는다고 연상하세요.',
      context: '일상 대화에서 동작을 멈추지 말라고 할 때 \'keep going\'처럼 뒤에 -ing 형태를 자주 붙여 사용합니다.',
      synonymAntonym: '계속하는 continue와 멈추는 stop을 한 쌍으로 묶어 기억하면 훨씬 효과적입니다.',
    }),
    {
      definition: 'to continue a course of action or to maintain a particular state without stopping',
      synonyms: ['continue', 'maintain', 'persist'],
      antonyms: ['stop', 'quit', 'cease'],
      exampleSentences: [
        { en: 'Heavy rain will likely continue all night, so please stay indoors.', ko: '폭우가 밤새 계속될 것 같으니 실내에 머물러 주세요.' },
        { en: 'She decided to carry on with her studies despite the difficult financial situation.', ko: '그녀는 어려운 경제 상황에도 불구하고 학업을 계속하기로 결정했습니다.' },
      ],
    }
  ),
  word('kick', '걷어차다', 2, 'verb',
    ['던지다', '잡다', '밀다', '당기다', '치다', '막다', '눕다', '앉다', '걷다', '뛰다'],
    tips({
      etymology: '중세 영어 \'kiken\'에서 유래했으며, 발로 무언가를 강하게 타격하는 동작을 의미합니다.',
      visual: '축구 선수가 공을 향해 발을 힘껏 휘두르는 역동적인 순간을 상상해 보세요.',
      soundAlike: '\'킥\' 소리는 무언가에 발이 부딪힐 때 나는 짧고 강한 소리와 비슷합니다.',
      context: '스포츠 경기뿐만 아니라, 무언가를 강하게 거절하거나 시동을 걸 때도 비유적으로 쓰입니다.',
      synonymAntonym: 'strike와 유사하지만 발을 사용한다는 점이 다르며, 반대로 부드럽게 만지는 touch와 대조됩니다.',
    }),
    {
      definition: 'A forceful strike or blow delivered with the foot or leg.',
      synonyms: ['blow', 'strike', 'jolt'],
      antonyms: ['caress', 'tap', 'nudge'],
      exampleSentences: [
        { en: 'The player delivered a powerful strike to the ball to score the winning goal.', ko: '그 선수는 결승골을 넣기 위해 공을 향해 강력한 발차기를 날렸습니다.' },
        { en: 'He felt a sudden jolt against his leg when the door swung open.', ko: '문이 열릴 때 그는 다리에 갑작스러운 충격을 느꼈습니다.' },
      ],
    }
  ),
  word('kid', '아이', 3, 'noun',
    ['노인', '성인', '교사', '부모', '학생', '의사', '경찰', '군인', '상인', '농부'],
    tips({
      etymology: '원래 새끼 염소를 뜻하는 북유럽어에서 유래하여, 현대에는 어린아이를 친근하게 부르는 말로 정착되었습니다.',
      visual: '놀이터에서 미끄럼틀을 타며 해맑게 웃고 있는 어린아이의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'키드\'이므로, \'키\'가 작은 \'드\'워프(난쟁이)처럼 작은 아이를 연상하면 쉽습니다.',
      context: '격식을 차리는 자리보다는 일상적인 대화나 가족 간의 대화에서 주로 사용됩니다.',
      synonymAntonym: 'child와 비슷하지만 더 구식이지 않은 느낌이며, 어른을 뜻하는 adult와 반대됩니다.',
    }),
    {
      definition: 'A young human being who has not yet reached adulthood.',
      synonyms: ['child', 'youngster', 'juvenile'],
      antonyms: ['adult', 'grown-up', 'elder'],
      exampleSentences: [
        { en: 'The neighborhood park is always full of every local kid during the summer break.', ko: '동네 공원은 여름 방학 동안 항상 지역 아이들로 가득합니다.' },
        { en: 'My younger brother is just a kid, but he already knows how to solve complex puzzles.', ko: '내 남동생은 아직 어린아이일 뿐이지만, 벌써 복잡한 퍼즐을 푸는 방법을 압니다.' },
      ],
    }
  ),
  word('kill', '죽이다', 1, 'verb',
    ['살리다', '보호하다', '창조하다', '치료하다', '돕다', '성장시키다', '구조하다', '건설하다', '부활시키다', '양육하다'],
    tips({
      etymology: '고대 영어 \'cyllan\'에서 유래하여 생명을 끝내거나 타격을 가한다는 의미를 가집니다.',
      visual: '사냥꾼이 목표물을 포착하여 사냥에 성공한 뒤 전리품을 챙기는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'킬\'이므로, 게임에서 적을 처치했을 때 나오는 \'킬\' 소리를 연상하면 쉽습니다.',
      context: '사냥이나 군사 작전에서 확보한 전리품이나 사냥감을 명사로 지칭할 때 주로 쓰입니다.',
      synonymAntonym: '사냥감이라는 뜻의 prey와 유사하며, 생명을 뜻하는 life와는 반대되는 결과물입니다.',
    }),
    {
      definition: 'The act of causing death, or an animal that has been hunted and caught for food.',
      synonyms: ['slaughter', 'prey', 'fatality'],
      antonyms: ['birth', 'preservation', 'resurrection'],
      exampleSentences: [
        { en: 'The lion dragged its fresh kill back to the shade of the trees.', ko: '사자는 갓 잡은 사냥감을 나무 그늘 아래로 끌고 갔다.' },
        { en: 'Vultures circled in the sky, waiting for a chance to feed on the kill.', ko: '독수리들이 사냥감을 먹을 기회를 노리며 하늘을 선회했다.' },
      ],
    }
  ),
  word('kind', '친절한', 2, 'adjective',
    ['무례한', '냉담한', '잔인한', '엄격한', '이기적인', '거만한', '난폭한', '불친절한', '무관심한', '사나운'],
    tips({
      etymology: '고대 영어 \'gecynde\'에서 유래했으며, 본래 \'타고난 성품\'이나 \'자연스러운\'이라는 의미에서 타인에게 따뜻하게 대하는 성격으로 발전했습니다.',
      visual: '어려운 사람에게 따뜻한 차 한 잔을 건네며 미소 짓는 사람의 모습을 상상해 보세요.',
      soundAlike: '카인드(kind)는 \'가인(gain)\'과 발음이 비슷합니다. 친절을 베풀면 마음의 평화를 얻는다(gain)고 생각하세요.',
      context: '일상 대화에서 상대방의 호의에 감사할 때 \'That is very kind of you\'라는 표현을 자주 사용합니다.',
      synonymAntonym: '따뜻한 마음의 nice와 반대되는 무례한 rude를 짝지어 기억하면 좋습니다.',
    }),
    {
      definition: 'having or showing a friendly, generous, and considerate nature toward others',
      synonyms: ['benevolent', 'considerate', 'gracious'],
      antonyms: ['cruel', 'mean', 'heartless'],
      exampleSentences: [
        { en: 'A stranger was generous enough to help the elderly woman carry her heavy groceries to the car.', ko: '한 낯선 사람이 노부인이 무거운 식료품을 차까지 옮기는 것을 도와줄 만큼 친절했습니다.' },
        { en: 'She always has a warm smile and a helpful word for everyone she meets in the hallway.', ko: '그녀는 복도에서 만나는 모든 사람에게 항상 따뜻한 미소와 친절한 말을 건넵니다.' },
      ],
    }
  ),
  word('kit', '연장통', 7, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '중세 네덜란드어 \'kitte\'에서 유래했으며, 원래는 나무로 만든 통이나 바구니를 의미했습니다.',
      visual: '응급처치 상자나 조립식 프라모델 박스 안에 도구들이 가지런히 정리된 모습을 상상하세요.',
      soundAlike: '아이들이 가지고 노는 \'키트\'나 \'키즈(kids)\'용 조립 세트를 떠올리면 기억하기 쉽습니다.',
      context: '주로 특정 목적을 위해 필요한 도구 세트나 장비 꾸러미를 가리킬 때 사용됩니다.',
      synonymAntonym: 'set이나 equipment와 비슷하지만, kit는 보통 휴대 가능한 한 세트의 느낌이 강합니다.',
    }),
    {
      definition: 'A set of tools, supplies, or equipment designed for a specific purpose or activity.',
      synonyms: ['set', 'outfit', 'apparatus'],
      antonyms: ['disarray', 'fraction', 'component'],
      exampleSentences: [
        { en: 'Every hiker should carry a basic first-aid pack in their backpack.', ko: '모든 등산객은 배낭에 기본적인 구급 상자를 휴대해야 합니다.' },
        { en: 'The model airplane comes in a small box with all the necessary parts.', ko: '그 모형 비행기는 필요한 모든 부품이 들어있는 작은 조립 세트로 판매됩니다.' },
      ],
    }
  ),
  word('knee', '무릎', 4, 'noun',
    ['팔꿈치', '발목', '어깨', '손목', '허벅지', '종아리', '발가락', '엉덩이', '허리', '가슴'],
    tips({
      etymology: '고대 영어 \'cneow\'에서 유래했으며, 독일어 \'Knie\'와도 뿌리가 같은 아주 오래된 신체 부위 명칭입니다.',
      visual: '다리가 굽혀지는 중간 지점에 있는 둥근 뼈의 모양을 상상해 보세요.',
      soundAlike: '맨 앞의 \'k\'는 소리가 나지 않는 묵음입니다. \'니\'라고 짧고 강하게 발음하세요.',
      context: '운동 중 부상을 당하거나, 누군가에게 청혼할 때 한쪽을 땅에 대는 상황에서 자주 쓰입니다.',
      synonymAntonym: '다리 관절을 뜻하는 joint와 유사하며, 신체 윗부분인 어깨(shoulder)와 대비하여 기억하세요.',
    }),
    {
      definition: 'The joint between the upper and lower parts of the human leg that allows it to bend.',
      synonyms: ['joint', 'genu', 'patella'],
      antonyms: ['elbow', 'shoulder', 'wrist'],
      exampleSentences: [
        { en: 'The soccer player fell down and clutched his right leg after a hard tackle.', ko: '그 축구 선수는 심한 태클을 당한 후 넘어져서 오른쪽 다리를 움켜쥐었다.' },
        { en: 'She had to undergo surgery to repair the damaged cartilage in her leg joint.', ko: '그녀는 다리 관절의 손상된 연골을 치료하기 위해 수술을 받아야 했다.' },
      ],
    }
  ),
  word('knife', '나이프', 3, 'noun',
    ['포크', '숟가락', '접시', '냄비', '도마', '가위', '국자', '집게', '쟁반', '식탁'],
    tips({
      etymology: '고대 노르웨이 어원인 \'knifr\'에서 유래했으며, k가 묵음인 것이 특징입니다.',
      visual: '날카로운 금속 날과 손잡이가 달린 주방용 식칼이나 조각용 칼을 상상해 보세요.',
      soundAlike: '발음할 때 \'나이프\'라고 하며, \'나(I)\'가 \'잎(fe)\'을 자른다고 연상해 보세요.',
      context: '요리할 때 식재료를 썰거나 식사 중 고기를 자를 때 주로 사용되는 도구입니다.',
      synonymAntonym: '날카로운 날을 가진 blade와 유사하며, 뭉툭한 도구들과는 대조적입니다.',
    }),
    {
      definition: 'An instrument with a sharp blade and a handle, used for cutting or as a weapon.',
      synonyms: ['blade', 'dagger', 'cutter'],
      antonyms: ['spoon', 'fork', 'blunt'],
      exampleSentences: [
        { en: 'The chef used a sharp steel tool to slice the vegetables thinly.', ko: '요리사는 채소를 얇게 썰기 위해 날카로운 강철 도구를 사용했습니다.' },
        { en: 'Please place the silver utensil on the right side of the dinner plate.', ko: '저녁 식사 접시 오른쪽에 은색 도구를 놓아 주세요.' },
      ],
    }
  ),
  word('knight', '기사', 5, 'noun',
    ['왕', '농부', '상인', '대장장이', '성주', '하인', '궁수', '사제', '학자', '도적'],
    tips({
      etymology: '고대 영어 cniht에서 유래했으며 본래 소년이나 하인을 뜻하다가 중세에 무장한 전사를 의미하게 되었습니다.',
      visual: '번쩍이는 갑옷을 입고 말을 탄 채 긴 창을 들고 있는 중세 유럽의 전사를 상상해 보세요.',
      soundAlike: '밤을 뜻하는 night와 발음이 똑같습니다. 밤에 성을 지키는 기사를 떠올리면 쉽습니다.',
      context: '체스 게임에서 말의 머리 모양을 한 기물을 부를 때도 이 단어를 사용합니다.',
      synonymAntonym: '전사를 뜻하는 warrior와 비슷하지만, 기사는 귀족적인 작위와 예법을 갖춘 신분을 강조합니다.',
    }),
    {
      definition: 'A man of noble rank who served a king or lord as a mounted man-at-arms in the Middle Ages.',
      synonyms: ['cavalier', 'paladin', 'warrior'],
      antonyms: ['peasant', 'serf', 'coward'],
      exampleSentences: [
        { en: 'The brave warrior was honored by the queen for his loyalty and courage.', ko: '그 용감한 전사는 충성심과 용기를 인정받아 여왕으로부터 작위를 수여받았습니다.' },
        { en: 'A shining armor protected the rider as he charged into the battlefield.', ko: '그가 전장으로 돌격할 때 빛나는 갑옷이 그를 보호해 주었습니다.' },
      ],
    }
  ),
  word('knock', '치다', 6, 'verb',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '고대 영어 \'cnocian\'에서 유래했으며, 무언가를 세게 두드리는 소리를 흉내 낸 의성어에서 시작되었습니다.',
      visual: '문 앞에서 누군가 주먹을 쥐고 나무 문을 \'똑똑\' 두드리는 장면을 상상해 보세요.',
      soundAlike: '\'낙(knock)지\'를 잡으려고 바닥을 쾅쾅 치는 소리라고 연상하면 기억하기 쉽습니다.',
      context: '주로 방문을 두드리는 소리나 엔진에서 나는 이상 소음을 나타낼 때 자주 쓰입니다.',
      synonymAntonym: 'tap처럼 가벼운 소리와는 대조적이며, hit이나 bang처럼 강한 충격을 주는 단어들과 의미가 통합니다.',
    }),
    {
      definition: 'a sudden short sound caused by a blow or a hard object hitting a surface',
      synonyms: ['tap', 'rap', 'bang'],
      antonyms: ['silence', 'stillness', 'quiet'],
      exampleSentences: [
        { en: 'A loud knock at the front door woke the entire family in the middle of the night.', ko: '한밤중에 현관문을 크게 두드리는 소리가 온 가족을 깨웠다.' },
        { en: 'The engine started making a strange knock after the long road trip.', ko: '장거리 여행 후에 엔진에서 이상한 두드림 소리가 나기 시작했다.' },
      ],
    }
  ),
  word('knot', '매듭', 8, 'noun',
    ['실타래', '고리', '직물', '바늘', '단추', '지퍼', '가위', '옷감', '단추구멍', '바느질'],
    tips({
      etymology: '고대 영어 \'cnotta\'에서 유래했으며, 밧줄이나 실을 묶어 고정하는 형태를 의미합니다.',
      visual: '등산용 로프나 운동화 끈이 복잡하게 얽혀 꽉 묶여 있는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'낫\'과 비슷하므로, \'낫(knot)으로 밧줄 매듭을 끊다\'라고 연상해 보세요.',
      context: '물리적인 끈의 묶음뿐만 아니라, 근육이 뭉치거나 마음의 응어리를 표현할 때도 쓰입니다.',
      synonymAntonym: 'tie와 비슷하지만 tie는 묶는 행위 자체에, knot는 묶인 결과물인 매듭에 집중합니다.',
    }),
    {
      definition: 'A fastening made by looping a piece of string, rope, or something similar on itself and tightening it.',
      synonyms: ['bond', 'joint', 'tie'],
      antonyms: ['opening', 'unfastening', 'detachment'],
      exampleSentences: [
        { en: 'The sailor tied a secure loop at the end of the rope to keep the boat in place.', ko: '선원은 배를 고정하기 위해 밧줄 끝에 단단한 매듭을 묶었습니다.' },
        { en: 'Stress caused a painful tightness in his shoulder muscles after a long day of work.', ko: '긴 하루 일과 후 스트레스로 인해 그의 어깨 근육에 고통스러운 뭉침이 생겼습니다.' },
      ],
    }
  ),
  word('know', '알다', 1, 'verb',
    ['정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건'],
    tips({
      etymology: '고대 영어 \'cnawan\'에서 유래했으며, 이는 인지하고 인식한다는 뿌리를 가지고 있습니다.',
      visual: '머릿속에 전구가 반짝 켜지며 무언가를 깨닫는 순간을 상상해 보세요.',
      soundAlike: 'No(아니오)와 발음이 같지만, K가 묵음이라는 점에 주의하며 \'알고 있다\'는 긍정의 상태를 기억하세요.',
      context: '사실, 기술, 사람에 대한 익숙함이나 정보를 가지고 있을 때 주로 사용합니다.',
      synonymAntonym: '이해하다(understand)와 비슷하지만, 무지하다(ignore)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To have information, facts, or understanding about something in one\'s mind through experience or study.',
      synonyms: ['understand', 'recognize', 'comprehend'],
      antonyms: ['ignore', 'misunderstand', 'forget'],
      exampleSentences: [
        { en: 'Most people in the town already have the information about the upcoming festival.', ko: '마을의 대부분 사람들은 이미 다가올 축제에 대한 정보를 알고 있습니다.' },
        { en: 'She has the ability to recognize the difference between right and wrong.', ko: '그녀는 옳고 그름의 차이를 구별하여 알 수 있는 능력이 있습니다.' },
      ],
    }
  ),
  word('label', '라벨', 7, 'noun',
    ['의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태'],
    tips({
      etymology: '고대 프랑스어 \'label(띠, 조각)\'에서 유래하여 물건에 붙이는 꼬리표라는 의미로 발전했습니다.',
      visual: '새로 산 옷의 목 뒷부분에 까칠하게 붙어 있는 세탁 정보 태그를 상상해 보세요.',
      soundAlike: '\'내 이별\'과 발음이 비슷합니다. 이별한 뒤 마음의 상처에 \'아픔\'이라는 딱지를 붙인다고 생각하세요.',
      context: '상품의 가격표뿐만 아니라 사람에 대한 고정관념이나 분류를 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'tag와 유사하지만, label은 좀 더 공식적인 분류나 명칭의 성격이 강합니다.',
    }),
    {
      definition: 'a small piece of paper, fabric, or plastic attached to an object to give information about it',
      synonyms: ['tag', 'sticker', 'marker'],
      antonyms: ['bulk', 'unmarked', 'blank'],
      exampleSentences: [
        { en: 'Always read the care instructions on the clothing before washing.', ko: '세탁하기 전에 항상 의류에 붙은 취급 주의 표시 라벨을 읽으세요.' },
        { en: 'The scientist carefully placed a descriptive identification on each specimen bottle.', ko: '그 과학자는 각 표본 병에 설명이 담긴 식별 표를 조심스럽게 붙였습니다.' },
      ],
    }
  ),
  word('labor', '노동', 4, 'noun',
    ['결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회'],
    tips({
      etymology: '라틴어 \'laborem\'에서 유래하여 고통스러운 노력이나 수고를 의미하게 되었습니다.',
      visual: '공사 현장에서 땀을 흘리며 무거운 벽돌을 옮기는 일꾼의 모습을 상상해 보세요.',
      soundAlike: '\'레이버\'라고 발음하며, 내 입(입술)이 \'버\' 벌어질 정도로 힘들게 일하는 모습을 연상하세요.',
      context: '경제학에서는 자본과 대비되는 인적 자원이나 생산 활동을 일컫는 용어로 자주 쓰입니다.',
      synonymAntonym: '육체적인 힘을 쓰는 toil과 비슷하지만, 아무것도 하지 않는 leisure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'Practical work, especially when it involves significant physical effort and is done for wages.',
      synonyms: ['toil', 'exertion', 'drudgery'],
      antonyms: ['leisure', 'recreation', 'idleness'],
      exampleSentences: [
        { en: 'The construction of the Great Wall required years of intense manual effort from millions of people.', ko: '만리장성 건설에는 수백만 명의 수년간에 걸친 강도 높은 육체 노동이 필요했습니다.' },
        { en: 'Modern technology has significantly reduced the amount of physical strain required in agricultural production.', ko: '현대 기술은 농업 생산에 필요한 신체적 노동의 양을 크게 줄였습니다.' },
      ],
    }
  ),
  word('laboratory', '실험실', 5, 'noun',
    ['도서관', '강당', '체육관', '교무실', '기숙사', '매점', '운동장', '상담실', '방송실', '보건실'],
    tips({
      etymology: '라틴어 \'labor(노동)\'에서 유래하여, 육체적 혹은 지적 노력을 쏟는 장소라는 의미를 담고 있습니다.',
      visual: '하얀 가운을 입은 과학자가 현미경을 들여다보며 비커에 담긴 액체를 섞는 모습을 상상해 보세요.',
      soundAlike: '앞부분의 \'labor(레이버)\' 발음이 \'노동\'과 같으므로, 열심히 연구 노동을 하는 곳으로 기억하세요.',
      context: '학교 과학 시간이나 제약 회사의 신약 개발 부서 등 전문적인 연구가 필요한 상황에서 주로 쓰입니다.',
      synonymAntonym: '연구소인 lab과 유사하며, 일반적인 야외 현장인 field와는 대조적인 환경을 나타냅니다.',
    }),
    {
      definition: 'A room or building equipped for scientific experiments, research, or teaching, or for the manufacture of drugs or chemicals.',
      synonyms: ['research center', 'testing facility', 'workshop'],
      antonyms: ['wilderness', 'outdoors', 'natural habitat'],
      exampleSentences: [
        { en: 'Scientists are conducting a series of complex experiments inside the high-tech research facility.', ko: '과학자들이 첨단 연구 시설 내부에서 일련의 복잡한 실험들을 수행하고 있습니다.' },
        { en: 'Students must wear protective goggles and gloves whenever they enter the chemistry room.', ko: '학생들은 화학실에 들어갈 때마다 반드시 보호 고글과 장갑을 착용해야 합니다.' },
      ],
    }
  ),
  word('lack', '결핍', 6, 'noun',
    ['과잉', '풍요', '만족', '성취', '증가', '보유', '잉여', '완성', '도달', '축적'],
    tips({
      etymology: '중세 네덜란드어 laken(부족하다)에서 유래하여 무엇인가가 비어있는 상태를 나타냅니다.',
      visual: '텅 빈 냉장고나 바닥난 통장 잔고처럼 무언가 꼭 필요한 것이 빠져있는 이미지를 떠올리세요.',
      soundAlike: '발음이 \'랙\'이므로 컴퓨터가 느려지는 \'렉(lag)\' 현상처럼 자원이 부족해 멈춘 상황을 연상하세요.',
      context: '주로 영양소, 자금, 경험, 자신감 등이 충분하지 않을 때 명사로 자주 쓰입니다.',
      synonymAntonym: '풍족함을 뜻하는 abundance와 반대되며, 부족함을 뜻하는 shortage와 비슷합니다.',
    }),
    {
      definition: 'the state of being without or not having enough of something necessary or desirable',
      synonyms: ['shortage', 'deficiency', 'scarcity'],
      antonyms: ['abundance', 'surplus', 'plenty'],
      exampleSentences: [
        { en: 'The project failed due to a complete absence of funding and support.', ko: '그 프로젝트는 자금과 지원의 완전한 결핍 때문에 실패했습니다.' },
        { en: 'His health problems were caused by a chronic insufficiency of essential vitamins.', ko: '그의 건강 문제는 필수 비타민의 만성적인 부족으로 인해 발생했습니다.' },
      ],
    }
  ),
  word('ladder', '사닥다리', 7, 'noun',
    ['망치', '계단', '엘리베이터', '밧줄', '지붕', '창문', '울타리', '기둥', '벽돌', '난간'],
    tips({
      etymology: '고대 영어 \'hlæder\'에서 유래했으며, \'기대어 놓는 것\'이라는 의미를 담고 있습니다.',
      visual: '알파벳 \'H\'를 길게 늘어뜨린 모양이 가로대가 있는 사다리와 닮았다고 상상해 보세요.',
      soundAlike: '\'래더\' 발음이 \'내려\'와 비슷하죠? 사다리를 타고 내려오는 모습을 연상해 보세요.',
      context: '실제 도구뿐만 아니라 사회적 지위나 승진의 단계를 나타내는 \'career ladder\'로도 자주 쓰입니다.',
      synonymAntonym: '위로 올라가게 돕는 steps와 비슷하지만, 고정된 건물이 아닌 이동 가능한 도구라는 점이 다릅니다.',
    }),
    {
      definition: 'A piece of equipment consisting of two long side pieces joined by a series of steps, used for climbing up or down.',
      synonyms: ['stepladder', 'stairs', 'scaling-frame'],
      antonyms: ['floor', 'ground', 'bottom'],
      exampleSentences: [
        { en: 'The firefighter climbed the tall metal structure to reach the trapped cat on the roof.', ko: '소방관은 지붕 위에 갇힌 고양이에게 도달하기 위해 높은 금속 사다리를 타고 올라갔습니다.' },
        { en: 'Success in a large corporation often requires climbing the corporate hierarchy one step at a time.', ko: '대기업에서의 성공은 종종 기업의 위계 서열을 한 단계씩 올라가는 것을 요구합니다.' },
      ],
    }
  ),
  word('lady', '귀부인', 2, 'noun',
    ['신사', '하인', '소년', '군인', '상인', '농부', '의사', '학생', '교사', '가수'],
    tips({
      etymology: '고대 영어 \'hlaefdige\'에서 유래했으며, \'빵을 반죽하는 사람\'이라는 뜻에서 집안의 여주인을 의미하게 되었습니다.',
      visual: '화려한 드레스를 입고 우아하게 차를 마시는 중세 유럽의 귀족 여성을 상상해 보세요.',
      soundAlike: '발음이 \'레이디\'이므로, \'내일이(레이디)\' 기다려지는 품격 있는 여성으로 기억하세요.',
      context: '격식을 차리는 자리에서 여성을 정중하게 부르거나 지칭할 때 주로 사용됩니다.',
      synonymAntonym: 'gentlewoman과 유사하며, 남성을 뜻하는 lord나 gentleman과 반대되는 개념으로 쓰입니다.',
    }),
    {
      definition: 'A polite and formal way to refer to a woman who has good manners and high social standing.',
      synonyms: ['noblewoman', 'gentlewoman', 'matron'],
      antonyms: ['gentleman', 'lord', 'commoner'],
      exampleSentences: [
        { en: 'The elegant woman was treated like a true member of the royal court by everyone.', ko: '그 우아한 여성은 모든 사람들에게 진정한 귀부인 대접을 받았습니다.' },
        { en: 'A young female aristocrat stepped out of the carriage with grace.', ko: '젊은 귀부인이 마차에서 품위 있게 내렸습니다.' },
      ],
    }
  ),
  word('lake', '호수', 3, 'noun',
    ['바다', '강물', '연못', '계곡', '폭포', '해변', '우물', '시냇물', '항구', '파도'],
    tips({
      etymology: '라틴어 \'lacus\'에서 유래되었으며, 이는 구덩이나 웅덩이를 뜻하는 고대어와 연결됩니다.',
      visual: '산으로 둘러싸인 잔잔하고 넓은 물줄기 위에 오리가 떠 있는 모습을 상상해 보세요.',
      soundAlike: '\'레이크\'라고 발음하며, 갈퀴를 뜻하는 rake와 발음이 비슷하니 \'ㄹ\' 발음에 주의하세요.',
      context: '주로 낚시, 수영, 보트 타기 등 휴양 활동을 설명할 때 자주 등장하는 장소입니다.',
      synonymAntonym: 'pond보다는 크고 sea보다는 작으며 소금기가 없는 민물인 경우가 많습니다.',
    }),
    {
      definition: 'A large body of water surrounded by land.',
      synonyms: ['pond', 'reservoir', 'lagoon'],
      antonyms: ['desert', 'island', 'mainland'],
      exampleSentences: [
        { en: 'The mountain peaks were reflected clearly on the surface of the still water.', ko: '산봉우리들이 잔잔한 호수 표면에 선명하게 비쳤습니다.' },
        { en: 'We decided to rent a small cabin near the shore for our summer vacation.', ko: '우리는 여름 휴가를 위해 호숫가 근처의 작은 오두막을 빌리기로 했습니다.' },
      ],
    }
  ),
  word('lamb', '어린 양', 4, 'noun',
    ['사자', '호랑이', '늑대', '여우', '코끼리', '기린', '토끼', '다람쥐', '곰', '사슴'],
    tips({
      etymology: '고대 게르만어에서 유래하여 아주 오래전부터 새끼 양을 뜻하는 단어로 쓰였습니다.',
      visual: '초원 위에서 하얗고 보들보들한 털을 가진 아기 양이 뛰어노는 모습을 상상해 보세요.',
      soundAlike: '끝의 b가 묵음이라 \'램\'으로 발음됩니다. 냄비(lamb-bi)에 담긴 양고기를 떠올려보세요.',
      context: '성경이나 문학에서는 순수하고 희생적인 존재를 비유할 때 자주 등장합니다.',
      synonymAntonym: '새끼 양을 뜻하므로 성체인 sheep과 대조하여 기억하면 좋습니다.',
    }),
    {
      definition: 'A young sheep, specifically one that is under one year of age.',
      synonyms: ['yeanling', 'hogget', 'mutton'],
      antonyms: ['ram', 'ewe', 'wolf'],
      exampleSentences: [
        { en: 'The little girl followed the white lamb across the green meadow.', ko: '어린 소녀는 초록색 초원을 가로질러 하얀 새끼 양을 따라갔습니다.' },
        { en: 'Farmers must protect every newborn lamb from the cold winter winds.', ko: '농부들은 갓 태어난 모든 새끼 양들을 차가운 겨울바람으로부터 보호해야 합니다.' },
      ],
    }
  ),
  word('land', '뭍', 1, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '고대 영어 \'land\'에서 유래하여 지구의 표면 중 물이 아닌 단단한 부분을 의미하게 되었습니다.',
      visual: '끝없이 펼쳐진 지평선이나 배 위에서 멀리 보이는 섬의 흙바닥을 상상해 보세요.',
      soundAlike: '비행기가 \'착륙(land)\'할 때 바퀴가 닿는 곳이 바로 \'뭍\'이라고 기억하면 쉽습니다.',
      context: '바다나 호수와 대비되는 개념으로, 농사를 짓거나 건물을 세울 수 있는 단단한 지면을 뜻합니다.',
      synonymAntonym: 'ground나 earth와 비슷하지만, 바다와 대조될 때는 주로 land를 사용하며 반대말은 ocean입니다.',
    }),
    {
      definition: 'The solid part of the earth\'s surface that is not covered by water.',
      synonyms: ['ground', 'earth', 'terrain'],
      antonyms: ['ocean', 'sea', 'water'],
      exampleSentences: [
        { en: 'After three weeks at sea, the sailors were relieved to finally see land.', ko: '바다에서 3주를 보낸 후, 선원들은 마침내 육지를 보고 안도했습니다.' },
        { en: 'The farmer worked hard to clear the land for planting corn.', ko: '농부는 옥수수를 심기 위해 땅을 개간하느라 열심히 일했습니다.' },
      ],
    }
  ),
  word('landscape', '풍경', 5, 'noun',
    ['변화', '문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념'],
    tips({
      etymology: '땅을 뜻하는 land와 모양을 만드는 -scape가 결합하여 지표면의 전체적인 모습을 의미하게 되었습니다.',
      visual: '언덕 위에서 내려다본 드넓은 들판과 나무들이 어우러진 한 폭의 그림 같은 장면을 상상해 보세요.',
      soundAlike: '랜드스케이프의 \'스케이프\'가 \'스케치\'와 비슷하게 들리니 풍경을 스케치하는 모습을 떠올리면 쉽습니다.',
      context: '자연 경관뿐만 아니라 정치적 상황이나 비즈니스 환경 같은 추상적인 지형도를 설명할 때도 자주 쓰입니다.',
      synonymAntonym: 'scenery와 유사하며, 인공적인 실내 공간을 뜻하는 interior와는 반대되는 개념으로 이해할 수 있습니다.',
    }),
    {
      definition: 'all the visible features of an area of countryside or land, often considered in terms of their aesthetic appeal',
      synonyms: ['scenery', 'terrain', 'outlook'],
      antonyms: ['interior', 'inside', 'sky'],
      exampleSentences: [
        { en: 'The rolling hills and vibrant flowers created a breathtaking landscape.', ko: '완만한 언덕과 선명한 꽃들이 숨 막히게 아름다운 풍경을 만들어냈다.' },
        { en: 'Technological advancements have completely changed the digital landscape over the last decade.', ko: '기술적 진보는 지난 10년 동안 디지털 환경을 완전히 바꾸어 놓았다.' },
      ],
    }
  ),
  word('lane', '좁은길', 6, 'noun',
    ['고속도로', '교차로', '정류장', '신호등', '횡단보도', '지하도', '주차장', '육교', '광장', '터널'],
    tips({
      etymology: '고대 영어 \'lanu\'에서 유래했으며, 울타리나 건물 사이의 좁은 통로를 의미하던 단어가 현대의 차선이나 골목길로 발전했습니다.',
      visual: '수영장의 레인이나 시골 마을의 좁은 돌담길 사이에 그어진 선을 상상해 보세요.',
      soundAlike: '볼링장의 \'레인\'을 떠올리면 공이 굴러가는 좁고 긴 길이라는 이미지를 쉽게 연결할 수 있습니다.',
      context: '교통 체증 상황에서 특정 차선으로 이동하거나, 한적한 시골길을 산책할 때 자주 쓰이는 표현입니다.',
      synonymAntonym: 'path나 track과 비슷하지만, 좁고 구획이 나누어진 느낌이 강하며 넓은 대로인 avenue와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A narrow road or a specific strip of a multi-track route designated for a single line of vehicles or athletes.',
      synonyms: ['path', 'alley', 'track'],
      antonyms: ['highway', 'boulevard', 'avenue'],
      exampleSentences: [
        { en: 'The cyclist stayed in the designated bike area to avoid heavy traffic.', ko: '자전거 타는 사람은 교통 혼잡을 피하기 위해 지정된 자전거 전용 차선에 머물렀다.' },
        { en: 'A small country path led the travelers through the blooming apple orchards.', ko: '작은 시골길이 여행자들을 꽃이 핀 사과 과수원으로 안내했다.' },
      ],
    }
  ),
  word('language', '언어', 7, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '라틴어 \'lingua\'에서 유래되었으며, 이는 \'혀\'를 의미합니다. 혀를 움직여 소리를 내는 행위가 말로 굳어진 것입니다.',
      visual: '전 세계 사람들이 서로 다른 말풍선을 띄우며 대화하지만, 그 말풍선들이 하나의 거대한 네트워크로 연결된 모습을 상상하세요.',
      soundAlike: '\'랭귀지\'라고 발음할 때 \'내 귀지\'와 비슷하게 들릴 수 있습니다. 내 귀에 들리는 수많은 말소리들을 떠올려 보세요.',
      context: '컴퓨터 프로그래밍이나 수학적 기호처럼 인간의 말 외에도 정보를 전달하는 모든 체계를 포함할 수 있습니다.',
      synonymAntonym: '말하는 방식인 tongue과 유의어이며, 침묵을 뜻하는 silence와는 반대되는 개념으로 기억하세요.',
    }),
    {
      definition: 'A system of communication used by a particular country or community consisting of sounds, symbols, and grammar.',
      synonyms: ['tongue', 'speech', 'dialect'],
      antonyms: ['silence', 'muteness', 'gibberish'],
      exampleSentences: [
        { en: 'Learning a foreign communication system opens up new cultural perspectives and opportunities.', ko: '외국어를 배우는 것은 새로운 문화적 관점과 기회를 열어줍니다.' },
        { en: 'Body signals can often convey more meaning than spoken words during a conversation.', ko: '대화 중에 몸짓 언어는 종종 말보다 더 많은 의미를 전달할 수 있습니다.' },
      ],
    }
  ),
  word('lap', '무릎', 4, 'noun',
    ['팔꿈치', '어깨', '발목', '손목', '허벅지', '정강이', '발가락', '옆구리', '가슴', '턱'],
    tips({
      etymology: '고대 영어 \'læppa\'에서 유래했으며, 옷의 늘어진 자락이나 덮개 부분을 의미하다가 앉았을 때 생기는 평평한 부위를 뜻하게 되었습니다.',
      visual: '의자에 앉았을 때 허벅지 위에 노트북이나 고양이를 올려두는 평평한 공간을 상상해 보세요.',
      soundAlike: '물을 \'홀짝홀짝\' 마시는 소리(lap)와 발음이 같아, 강아지가 주인 무릎에서 물을 마시는 장면을 연상하면 쉽습니다.',
      context: '주로 앉아 있는 상태에서 무언가를 올려놓거나 아이를 앉히는 공간을 말할 때 사용됩니다.',
      synonymAntonym: 'knee와 비슷하지만 knee는 관절 자체를, 이 단어는 앉았을 때 형성되는 면적을 강조합니다.',
    }),
    {
      definition: 'The flat area between the waist and knees of a seated person.',
      synonyms: ['thighs', 'knees', 'midsection'],
      antonyms: ['back', 'shoulder', 'spine'],
      exampleSentences: [
        { en: 'The small kitten fell fast asleep on the young girl\'s lap.', ko: '작은 새끼 고양이가 소녀의 무릎 위에서 깊은 잠에 빠졌습니다.' },
        { en: 'She placed her heavy laptop on her lap to finish the report while traveling.', ko: '그녀는 이동 중에 보고서를 마무리하기 위해 무거운 노트북을 무릎 위에 놓았습니다.' },
      ],
    }
  ),
  word('last', '계속하다', 2, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '고대 영어 \'læstan\'에서 유래하여 \'따라가다\' 혹은 \'발자국을 남기다\'라는 뜻에서 \'지속되다\'라는 의미로 발전했습니다.',
      visual: '건전지 광고에서 다른 제품들은 다 멈췄는데 혼자서 계속 움직이는 토끼 인형을 상상해 보세요.',
      soundAlike: '\'라스트\' 콘서트가 끝나지 않고 밤새도록 \'계속되는\' 상황을 떠올리면 기억하기 쉽습니다.',
      context: '주로 물건의 내구성이나 특정 사건이 진행되는 시간적 길이를 나타낼 때 사용합니다.',
      synonymAntonym: '계속된다는 의미의 continue와 대조적으로, 즉시 멈춘다는 뜻의 cease를 함께 기억하세요.',
    }),
    {
      definition: 'to continue to exist, happen, or be used for a particular period of time without being destroyed or finished',
      synonyms: ['continue', 'endure', 'persist'],
      antonyms: ['cease', 'expire', 'terminate'],
      exampleSentences: [
        { en: 'The heavy rain is expected to continue for three days.', ko: '폭우가 사흘 동안 계속될 것으로 예상됩니다.' },
        { en: 'Good quality leather boots will remain in good condition for many years.', ko: '품질 좋은 가죽 부츠는 여러 해 동안 상태가 좋게 유지될 것입니다.' },
      ],
    }
  ),
  word('late', '늦은', 3, 'adjective',
    ['빠른', '이른', '정시의', '신속한', '조급한', '성급한', '미래의', '과거의', '즉각적인', '부지런한'],
    tips({
      etymology: '고대 영어 læt에서 유래되었으며, 원래 \'느린\' 또는 \'게으른\'이라는 의미에서 시간이 지체되었다는 뜻으로 발전했습니다.',
      visual: '약속 시간에 늦어 땀을 흘리며 시계를 보고 뛰어가는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'레이트\' 발음이 \'내일(이트) 가다\'처럼 들린다고 생각하며 제때 가지 못하고 미뤄진 상황을 연상하세요.',
      context: '학교 수업, 기차 시간, 혹은 밤늦은 시각 등 정해진 때보다 뒤처진 모든 상황에 쓰입니다.',
      synonymAntonym: 'tardy는 주로 지각했을 때 쓰이며, early는 정반대로 일찍 도착했을 때 사용합니다.',
    }),
    {
      definition: 'happening, arriving, or done after the expected, arranged, or usual time',
      synonyms: ['tardy', 'delayed', 'overdue'],
      antonyms: ['early', 'punctual', 'prompt'],
      exampleSentences: [
        { en: 'The train was twenty minutes behind schedule because of the heavy snow.', ko: '폭설 때문에 기차가 예정보다 20분 늦었습니다.' },
        { en: 'She apologized for her arrival after the meeting had already started.', ko: '그녀는 회의가 이미 시작된 후에 도착한 것에 대해 사과했습니다.' },
      ],
    }
  ),
  word('latter', '뒤쪽의', 5, 'adjective',
    ['전자', '초기의', '신속한', '동시의', '영구적인', '임시의', '우연한', '고의적인', '명백한', '희미한'],
    tips({
      etymology: 'late(늦은)의 비교급 형태에서 유래하여 시간이나 순서상 더 늦은 쪽을 가리킵니다.',
      visual: '두 개의 물건 중 오른쪽에 있는(나중에 언급된) 물건을 가리키는 화살표를 상상하세요.',
      soundAlike: '사다리를 뜻하는 ladder와 발음이 비슷하지만, 순서상 뒤에 오는 것을 뜻합니다.',
      context: 'A와 B 두 가지를 나열한 뒤, 그중 두 번째로 언급한 대상을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'former(전자)가 앞선 것이라면, latter(후자)는 뒤에 따라오는 짝꿍 단어입니다.',
    }),
    {
      definition: 'Referring to the second of two people or things that have been mentioned.',
      synonyms: ['final', 'second', 'closing'],
      antonyms: ['former', 'initial', 'earlier'],
      exampleSentences: [
        { en: 'He offered me tea or coffee, and I chose the latter because I needed caffeine.', ko: '그는 나에게 차나 커피를 권했고, 나는 카페인이 필요했기에 후자를 선택했다.' },
        { en: 'The film\'s first half was slow, but the latter part was filled with action.', ko: '영화의 전반부는 지루했지만, 후반부는 액션으로 가득 찼다.' },
      ],
    }
  ),
  word('laugh', '웃다', 6, 'verb',
    ['울음', '미소', '분노', '슬픔', '침묵', '비명', '한숨', '농담', '기쁨', '눈물'],
    tips({
      etymology: '고대 영어 hlehhan에서 유래되었으며, 소리 내어 웃는 행위 자체를 의미합니다.',
      visual: '코미디 공연장에서 관객들이 배를 잡고 크게 소리 내어 웃는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'래프\'와 비슷하므로, \'래\'프(laugh)하며 즐겁게 웃는 소리를 연상하세요.',
      context: '단순한 미소(smile)보다 더 크고 소리가 나는 즐거운 감정 표현을 할 때 주로 쓰입니다.',
      synonymAntonym: 'chuckle이나 giggle은 비슷한 웃음 소리이며, cry나 sob은 반대되는 슬픈 소리입니다.',
    }),
    {
      definition: 'the sound or action of expressing amusement, joy, or scorn by making rhythmic vocal sounds',
      synonyms: ['chuckle', 'giggle', 'guffaw'],
      antonyms: ['cry', 'sob', 'weep'],
      exampleSentences: [
        { en: 'A loud burst of joy filled the room as everyone shared a hearty moment together.', ko: '모두가 함께 즐거운 시간을 나누자 방 안은 커다란 웃음소리로 가득 찼습니다.' },
        { en: 'The comedian\'s clever jokes provoked a sudden wave of amusement from the audience.', ko: '코미디언의 영리한 농담은 관객들로부터 갑작스러운 웃음의 물결을 이끌어냈습니다.' },
      ],
    }
  ),
  word('launch', '진수시키다', 7, 'verb',
    ['침몰시키다', '정박하다', '수리하다', '폐기하다', '인양하다', '조립하다', '설계하다', '운반하다', '정지하다', '관찰하다'],
    tips({
      etymology: '라틴어 lanceare(창을 던지다)에서 유래하여, 배를 물 위로 힘차게 밀어내는 동작을 의미합니다.',
      visual: '새로 만든 거대한 크루즈선이 샴페인 병을 깨뜨리며 처음으로 바다 위로 미끄러져 들어가는 장면을 상상하세요.',
      soundAlike: '점심(lunch)을 먹고 기운을 내서 배를 바다로 \'런칭(launch)\'한다고 기억하면 쉽습니다.',
      context: '주로 선박의 첫 항해를 시작하거나 새로운 우주선을 우주로 쏘아 올릴 때 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '물에 띄우는 float와 유사하며, 반대로 물속으로 가라앉히는 sink와는 대조적인 의미를 가집니다.',
    }),
    {
      definition: 'To set a newly built ship or boat into the water for the first time.',
      synonyms: ['float', 'set afloat', 'put to sea'],
      antonyms: ['ground', 'dock', 'beach'],
      exampleSentences: [
        { en: 'The navy prepared to send the massive aircraft carrier into the ocean for its maiden voyage.', ko: '해군은 거대한 항공모함의 첫 항해를 위해 바다로 진수시킬 준비를 했습니다.' },
        { en: 'Thousands of spectators gathered at the shipyard to watch the majestic vessel slide into the water.', ko: '수천 명의 관중이 웅장한 선박이 물속으로 미끄러져 들어가는 진수식을 보기 위해 조선소에 모였습니다.' },
      ],
    }
  ),
  word('laundry', '세탁물', 4, 'noun',
    ['설거지', '청소기', '다림질', '먼지', '비누', '바구니', '옷장', '건조기', '섬유', '얼룩'],
    tips({
      etymology: '라틴어 \'lavare(씻다)\'에서 유래하여 씻어야 할 물건들이라는 의미를 가집니다.',
      visual: '세탁기 안에서 빙글빙글 돌아가는 젖은 옷가지들의 모습을 상상해 보세요.',
      soundAlike: '\'런드리\' 발음이 \'런(Run)\'과 비슷하니, 빨래방으로 뛰어가는 모습을 연상해 보세요.',
      context: '주로 집안일을 하거나 세탁소에 방문할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: '세탁물을 뜻하는 washing과 유사하며, 깨끗하게 세탁된 상태와 대비됩니다.',
    }),
    {
      definition: 'Clothes, sheets, and towels that are about to be washed or have just been washed.',
      synonyms: ['washing', 'dirty clothes', 'linens'],
      antonyms: ['cleanliness', 'dryness', 'neatness'],
      exampleSentences: [
        { en: 'The basket was overflowing with dirty clothes that needed to be washed.', ko: '바구니에는 세탁이 필요한 더러운 세탁물들이 넘쳐나고 있었다.' },
        { en: 'Freshly cleaned sheets were hanging on the line to dry in the sun.', ko: '갓 세탁된 시트들이 햇볕에 말리기 위해 줄에 걸려 있었다.' },
      ],
    }
  ),
  word('law', '법률', 5, 'noun',
    ['관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표'],
    tips({
      etymology: '고대 노르웨어 \'lag\'에서 유래했으며 \'놓여 있는 것\' 또는 \'고정된 규칙\'이라는 의미를 담고 있습니다.',
      visual: '법정에서 판사가 두드리는 의사봉이나 두꺼운 법전의 이미지를 떠올려 보세요.',
      soundAlike: '발음이 \'로(Low)\'와 비슷하지만, 사회의 가장 낮은 곳까지 공정하게 적용되어야 하는 규칙이라고 생각하면 쉽습니다.',
      context: '민사, 형사, 헌법 등 사회 질서를 유지하기 위해 국가가 강제하는 모든 규칙을 포함합니다.',
      synonymAntonym: '규칙을 뜻하는 rule과 유사하며, 무법 상태를 뜻하는 anarchy와 반대되는 개념입니다.',
    }),
    {
      definition: 'A system of rules created and enforced through social or governmental institutions to regulate behavior.',
      synonyms: ['regulation', 'statute', 'decree'],
      antonyms: ['anarchy', 'lawlessness', 'disorder'],
      exampleSentences: [
        { en: 'Every citizen is expected to obey the local legislation and national mandates.', ko: '모든 시민은 지역 법규와 국가 명령을 준수해야 할 의무가 있습니다.' },
        { en: 'The government passed a new act to protect the environment from industrial pollution.', ko: '정부는 산업 오염으로부터 환경을 보호하기 위해 새로운 법안을 통과시켰습니다.' },
      ],
    }
  ),
  word('lawn', '잔디밭', 6, 'noun',
    ['숲', '정원', '울타리', '화단', '연못', '오솔길', '지붕', '현관', '창고', '베란다'],
    tips({
      etymology: '중세 영어 \'launde\'에서 유래했으며, 원래는 숲속의 탁 트인 공간이나 초원을 의미했습니다.',
      visual: '일요일 아침, 스프링클러가 돌아가며 물을 뿌리는 초록색 마당의 풍경을 상상해 보세요.',
      soundAlike: '\'론(lawn)\' 발음이 \'논\'과 비슷하죠? 한국의 논처럼 평평하고 넓게 펼쳐진 풀밭이라고 생각하세요.',
      context: '주로 주택의 앞마당이나 공원, 경기장의 잘 가꾸어진 풀밭을 가리킬 때 사용됩니다.',
      synonymAntonym: 'yard나 grass와 비슷하지만, 인위적으로 깎고 관리된 상태라는 점이 특징입니다.',
    }),
    {
      definition: 'An area of short, mown grass in a yard, garden, or park.',
      synonyms: ['turf', 'grassland', 'yard'],
      antonyms: ['wilderness', 'forest', 'desert'],
      exampleSentences: [
        { en: 'The children are playing tag on the freshly mown green space behind the house.', ko: '아이들이 집 뒤의 새로 깎은 초록색 잔디밭에서 술래잡기를 하고 있다.' },
        { en: 'We set up a large tent on the front area for the summer garden party.', ko: '우리는 여름 정원 파티를 위해 앞마당 잔디밭에 커다란 텐트를 쳤다.' },
      ],
    }
  ),
  word('lawyer', '법률가', 7, 'noun',
    ['의사', '교사', '회계사', '건축가', '요리사', '경찰관', '소방관', '예술가', '기자', '은행원'],
    tips({
      etymology: '법을 뜻하는 \'law\'에 사람을 나타내는 접미사 \'-yer\'가 붙어 법을 다루는 사람을 의미합니다.',
      visual: '법정에서 검은 가운을 입고 서류 뭉치를 든 채 의뢰인을 변호하는 모습을 상상해 보세요.',
      soundAlike: '\'로이어\'라고 발음되는데, 법(Law)을 이어(yer)주는 사람이라고 기억하면 쉽습니다.',
      context: '민사 소송이나 형사 재판에서 전문적인 법률 조언이 필요할 때 반드시 찾아야 하는 전문가입니다.',
      synonymAntonym: 'attorney나 counsel과 비슷하게 쓰이며, 법을 어기는 criminal과는 반대되는 위치에 있습니다.',
    }),
    {
      definition: 'A professional person authorized to practice law, conduct lawsuits, or give legal advice.',
      synonyms: ['attorney', 'counsel', 'advocate'],
      antonyms: ['client', 'layman', 'defendant'],
      exampleSentences: [
        { en: 'The family hired a professional to help them understand the complex inheritance laws.', ko: '그 가족은 복잡한 상속법을 이해하기 위해 전문가를 고용했습니다.' },
        { en: 'She decided to become a public defender to protect the rights of underprivileged citizens.', ko: '그녀는 소외된 시민들의 권리를 보호하기 위해 국선 변호인이 되기로 결심했습니다.' },
      ],
    }
  ),
  word('lay', '눕히다', 4, 'verb',
    ['일어나다', '서다', '달리다', '숨기다', '던지다', '부수다', '고치다', '빌리다', '이기다', '지우다'],
    tips({
      etymology: '고대 영어 lecgan에서 유래하여 \'무언가를 평평하게 두다\'라는 의미를 가집니다.',
      visual: '아기를 침대에 조심스럽게 내려놓는 부모의 손길을 상상해 보세요.',
      soundAlike: '레이(lay) 발음이 \'내이(내리다)\'와 비슷하다고 생각하면 쉽습니다.',
      context: '주로 물건을 내려놓거나 알을 낳을 때, 혹은 계획을 세울 때 사용됩니다.',
      synonymAntonym: 'put과 비슷하지만 더 조심스러운 뉘앙스이며, 들어 올리는 raise와 반대됩니다.',
    }),
    {
      definition: 'to put something down carefully in a flat position or on a surface',
      synonyms: ['place', 'set', 'deposit'],
      antonyms: ['raise', 'lift', 'pick'],
      exampleSentences: [
        { en: 'Please gently place the sleeping baby on the bed.', ko: '잠든 아기를 침대에 조심스럽게 눕혀 주세요.' },
        { en: 'Workers will start to position the new carpet across the floor tomorrow.', ko: '작업자들은 내일 바닥에 새 카펫을 깔기 시작할 것입니다.' },
      ],
    }
  ),
  word('layer', '층', 5, 'noun',
    ['계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물'],
    tips({
      etymology: '무언가를 놓는다는 뜻의 lay에 행위자를 뜻하는 -er이 붙어 겹겹이 놓인 상태를 뜻합니다.',
      visual: '여러 겹으로 쌓인 케이크나 양파의 껍질이 겹겹이 둘러싸인 모습을 상상해 보세요.',
      soundAlike: '발음이 \'레이어\'이므로, 포토샵 같은 그래픽 프로그램에서 층층이 쌓는 레이어 기능을 떠올리면 쉽습니다.',
      context: '지질학적 지층부터 옷을 여러 겹 껴입는 방식까지 물리적, 추상적 층위 모두에 쓰입니다.',
      synonymAntonym: '유사한 뜻인 stratum이나 tier와 함께 외우고, 단일함을 뜻하는 core와 대비해 보세요.',
    }),
    {
      definition: 'A single thickness, coat, or level of a material covering a surface or forming part of a stack.',
      synonyms: ['stratum', 'tier', 'sheet'],
      antonyms: ['core', 'center', 'whole'],
      exampleSentences: [
        { en: 'The baker added a thick coating of chocolate between each level of the cake.', ko: '제빵사는 케이크의 각 층 사이에 두꺼운 초콜릿 코팅을 추가했습니다.' },
        { en: 'Archaeologists carefully removed the top surface of soil to reveal ancient artifacts.', ko: '고고학자들은 고대 유물을 드러내기 위해 토양의 맨 위층을 조심스럽게 제거했습니다.' },
      ],
    }
  ),
  word('lazy', '게으른', 1, 'adjective',
    ['부지런한', '활기찬', '빠른', '영리한', '친절한', '엄격한', '용감한', '정직한', '조용한', '신중한'],
    tips({
      etymology: '16세기경 저지 독일어 \'lasich(느슨한, 약한)\'에서 유래하여 힘이 없고 움직이기 싫어하는 상태를 뜻하게 되었습니다.',
      visual: '침대에 대자로 누워 텔레비전 리모컨조차 집기 귀찮아하는 나무늘보의 모습을 상상해 보세요.',
      soundAlike: '\'레이지\'라고 발음되는데, 내일로 일을 \'미루지\'라고 하는 게으름뱅이의 말투와 연결하면 쉽습니다.',
      context: '주로 일하기 싫어하거나 움직임이 느린 사람의 성격이나 나른한 오후의 분위기를 묘사할 때 쓰입니다.',
      synonymAntonym: '부지런한 industrious와 반대되는 개념으로, 활동적이지 않은 idle과 의미가 통합니다.',
    }),
    {
      definition: 'unwilling to work or use energy to perform a task or activity',
      synonyms: ['idle', 'indolent', 'slothful'],
      antonyms: ['industrious', 'diligent', 'energetic'],
      exampleSentences: [
        { en: 'The cat spent a long afternoon sleeping in the sun.', ko: '그 고양이는 햇볕 아래서 잠을 자며 나른한 오후를 보냈다.' },
        { en: 'Success rarely comes to those who are too indifferent to put in any effort.', ko: '노력을 기울이기에 너무 게으른 사람들에게 성공은 좀처럼 찾아오지 않는다.' },
      ],
    }
  ),
  word('lead', '이끌다', 6, 'verb',
    ['추종', '후퇴', '정체', '방해', '지연', '거부', '침묵', '포기', '혼란', '방관'],
    tips({
      etymology: '고대 영어 \'lædan\'에서 유래했으며, 누군가를 길로 안내하거나 동행한다는 의미를 담고 있습니다.',
      visual: '마라톤 경기에서 가장 앞서 달리는 선수가 무리를 이끄는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'리드\'이므로, 오케스트라의 \'리더\'가 단원들을 이끄는 장면을 연결하면 쉽습니다.',
      context: '비즈니스나 스포츠에서 선두 자리를 차지하거나 방향을 제시할 때 주로 사용됩니다.',
      synonymAntonym: 'guidance가 이끄는 행위라면, follow는 뒤를 따르는 반대의 행동을 의미합니다.',
    }),
    {
      definition: 'the position of being ahead of others in a competition or the act of showing the way to a group',
      synonyms: ['leadership', 'guidance', 'vanguard'],
      antonyms: ['follower', 'subordinate', 'rearguard'],
      exampleSentences: [
        { en: 'The local team maintained a narrow advantage throughout the final quarter of the game.', ko: '지역 팀은 경기 마지막 쿼터 내내 근소한 차이로 선두를 유지했습니다.' },
        { en: 'She took the initiative in organizing the charity event to help the homeless.', ko: '그녀는 노숙자들을 돕기 위한 자선 행사를 조직하는 데 앞장섰습니다.' },
      ],
    }
  ),
  word('leaf', '잎', 2, 'noun',
    ['뿌리', '줄기', '꽃잎', '열매', '가지', '씨앗', '나무껍질', '흙', '꽃봉오리', '덩굴'],
    tips({
      etymology: '고대 영어 \'leaf\'에서 유래했으며, 식물의 평평하고 초록색인 부분을 뜻하는 게르만어 계열의 단어입니다.',
      visual: '가을에 나무에서 떨어지는 빨갛고 노란 단풍잎이나 여름의 싱그러운 초록 잎사귀를 상상해 보세요.',
      soundAlike: '\'리프\'라고 발음하며, 책장을 넘길 때 나는 \'스르륵\' 소리와 잎사귀가 바람에 흔들리는 소리를 연결해 보세요.',
      context: '식물학뿐만 아니라 책의 한 페이지를 의미할 때도 사용되며, \'turn over a new leaf\'는 새 삶을 시작한다는 관용구입니다.',
      synonymAntonym: '유의어로는 foliage가 있으며, 반의어로는 식물의 반대 끝부분인 root를 떠올리면 기억하기 쉽습니다.',
    }),
    {
      definition: 'one of the flat and typically green parts of a plant that grows from a stem or branch',
      synonyms: ['frond', 'foliage', 'blade'],
      antonyms: ['root', 'stem', 'trunk'],
      exampleSentences: [
        { en: 'A single golden foliage piece fell silently from the oak tree onto the grass.', ko: '황금빛 잎사귀 하나가 오크 나무에서 잔디 위로 조용히 떨어졌습니다.' },
        { en: 'The caterpillar spent the entire afternoon chewing a small hole in the green surface.', ko: '애벌레는 오후 내내 초록색 표면에 작은 구멍을 내며 갉아먹었습니다.' },
      ],
    }
  ),
  word('leak', '샘', 7, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '중세 네덜란드어 \'leken\'에서 유래하여 액체가 스며 나오거나 떨어지는 현상을 의미하게 되었습니다.',
      visual: '천장에서 물방울이 뚝뚝 떨어져 바닥에 물웅덩이가 생기는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'릭\'과 비슷하므로, 수도꼭지에서 물이 \'릭(leak)\'하고 새어 나온다고 기억하세요.',
      context: '배관 문제로 물이 새는 물리적 상황뿐만 아니라, 기밀 정보가 외부로 유출되는 상황에도 쓰입니다.',
      synonymAntonym: 'seepage와 유의어 관계이며, 봉쇄를 뜻하는 closure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'an accidental hole or crack through which liquid or gas escapes from a container',
      synonyms: ['seepage', 'puncture', 'fissure'],
      antonyms: ['seal', 'closure', 'plug'],
      exampleSentences: [
        { en: 'The plumber arrived quickly to fix the gas pipe that had developed a dangerous opening.', ko: '배관공은 위험한 가스 누출이 발생한 파이프를 수리하기 위해 신속하게 도착했습니다.' },
        { en: 'Secret documents were exposed to the public due to a security breach in the government office.', ko: '정부 부처의 보안 허점으로 인해 비밀 문서가 대중에게 유출되었습니다.' },
      ],
    }
  ),
  word('lean', '기대다', 4, 'verb',
    ['밀다', '당기다', '던지다', '잡다', '눕다', '앉다', '서다', '걷다', '뛰다', '멈추다'],
    tips({
      etymology: '고대 영어 hleonian에서 유래하여 몸을 굽히거나 어딘가에 의지하는 동작을 나타냅니다.',
      visual: '피사의 사탑처럼 한쪽으로 비스듬히 기울어져 벽에 몸을 맡긴 모습을 상상하세요.',
      soundAlike: '린(lean) 발음이 \'기린\'의 뒷글자와 비슷하니, 목이 긴 기린이 나무에 목을 기대는 장면을 떠올려보세요.',
      context: '주로 전치사 against나 on과 함께 쓰여 물리적인 벽이나 추상적인 도움에 의지함을 표현합니다.',
      synonymAntonym: 'tilt와 같은 기울어짐의 의미를 공유하며, 똑바로 서 있는 stand와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to incline the weight of the body so as to be supported by something else',
      synonyms: ['slant', 'incline', 'bend'],
      antonyms: ['straighten', 'stand', 'rise'],
      exampleSentences: [
        { en: 'The tired traveler decided to rest his back against the sturdy oak tree.', ko: '지친 여행자는 튼튼한 떡갈나무에 등을 기대고 쉬기로 했다.' },
        { en: 'Strong winds caused the old wooden fence to tilt dangerously toward the garden.', ko: '강풍으로 인해 오래된 나무 울타리가 정원 쪽으로 위험하게 기울어졌다.' },
      ],
    }
  ),
  word('leap', '도약', 5, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '고대 영어 hleapan에서 유래되었으며, \'달리다\' 혹은 \'뛰어오르다\'라는 어원을 가지고 있습니다.',
      visual: '개구리가 연못의 연꽃 잎 위로 한 번에 크게 뛰어오르는 모습을 상상해 보세요.',
      soundAlike: '입술을 내밀며 \'리입\'이라고 발음할 때 소리가 위로 튀어 오르는 느낌을 연상하세요.',
      context: '단순한 걸음이 아니라 물리적인 도약이나 논리적인 비약을 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'jump와 비슷하지만 leap는 더 멀리, 더 높이 뛰는 느낌이며 sink와는 반대되는 움직임입니다.',
    }),
    {
      definition: 'A sudden and large jump or a significant increase or change in something.',
      synonyms: ['bound', 'spring', 'hop'],
      antonyms: ['fall', 'descent', 'decline'],
      exampleSentences: [
        { en: 'The athlete took a powerful spring forward to clear the wide puddle.', ko: '그 운동선수는 넓은 웅덩이를 건너기 위해 앞으로 힘차게 뛰어올랐다.' },
        { en: 'This new technology represents a major advancement in the field of medicine.', ko: '이 새로운 기술은 의학 분야에서 커다란 도약을 의미한다.' },
      ],
    }
  ),
  word('learn', '배우다', 3, 'verb',
    ['가르치다', '잊어버리다', '무시하다', '가리키다', '졸업하다', '시험보다', '연구하다', '발표하다', '기록하다', '연습하다'],
    tips({
      etymology: '고대 영어 \'leornian\'에서 유래했으며, 지식을 얻거나 길을 따라간다는 의미를 담고 있습니다.',
      visual: '책을 펼쳐 들고 머릿속에 전구가 반짝 켜지는 학생의 모습을 상상해 보세요.',
      soundAlike: '\'런(run)\'과 발음이 비슷하죠? 지식을 향해 열심히 달려가는 모습을 떠올려 보세요.',
      context: '새로운 언어나 악기, 기술을 처음 익히기 시작할 때 주로 사용되는 단어입니다.',
      synonymAntonym: '지식을 얻는 acquire와 반대로 남에게 주는 teach를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to gain knowledge or skill in a new subject by study, practice, or being taught',
      synonyms: ['acquire', 'master', 'grasp'],
      antonyms: ['teach', 'forget', 'ignore'],
      exampleSentences: [
        { en: 'Children usually pick up new languages much faster than adults do.', ko: '아이들은 보통 성인보다 새로운 언어를 훨씬 더 빨리 배웁니다.' },
        { en: 'She wants to acquire the necessary skills to become a professional chef.', ko: '그녀는 전문 요리사가 되기 위해 필요한 기술들을 배우고 싶어 합니다.' },
      ],
    }
  ),
  word('lease', '임대차', 9, 'noun',
    ['매매', '증여', '담보', '상속', '압류', '경매', '할부', '위탁', '보증', '채무'],
    tips({
      etymology: '라틴어 laxus(느슨한)에서 유래하여, 소유권을 완전히 넘기지 않고 느슨하게 빌려주는 계약을 뜻합니다.',
      visual: '부동산 사무실 유리창에 붙어 있는 \'FOR LEASE\' 문구와 도장이 찍힌 계약 서류를 상상해 보세요.',
      soundAlike: '발음이 \'리스\'이므로 자동차 리스(lease) 프로그램을 떠올리면 기억하기 쉽습니다.',
      context: '주로 아파트 임대나 사무실 대여, 차량 장기 렌트와 같은 법적 계약 상황에서 자주 쓰입니다.',
      synonymAntonym: 'rent와 유사하지만 보통 더 공식적이고 기간이 정해진 계약을 의미하며, 소유권인 ownership과 대비됩니다.',
    }),
    {
      definition: 'A legal agreement that allows someone to use a building, land, or equipment for a fixed period of time in return for payment.',
      synonyms: ['rental', 'charter', 'tenancy'],
      antonyms: ['ownership', 'freehold', 'possession'],
      exampleSentences: [
        { en: 'The landlord and the tenant signed a two-year commercial contract for the downtown office space.', ko: '집주인과 세입자는 시내 사무실 공간에 대해 2년 기간의 상업용 임대차 계약서에 서명했습니다.' },
        { en: 'Our current agreement is due to expire at the end of next month, so we need to find a new place.', ko: '우리의 현재 임대차 계약이 다음 달 말에 만료될 예정이라서 새로운 장소를 찾아야 합니다.' },
      ],
    }
  ),
  word('leather', '가죽', 6, 'noun',
    ['금속의', '플라스틱의', '유리의', '나무의', '종이의', '비단으로 된', '면직의', '고무의', '돌로 만든', '흙으로 빚은'],
    tips({
      etymology: '고대 영어 \'lether\'에서 유래했으며, 동물의 피부를 가공하여 만든 질긴 재료를 뜻합니다.',
      visual: '오래된 갈색 가죽 재킷이나 부드럽게 가공된 가죽 지갑의 질감을 상상해 보세요.',
      soundAlike: '날씨를 뜻하는 \'weather\'와 발음이 비슷합니다. 가죽(leather) 옷은 추운 날씨(weather)에 입기 좋습니다.',
      context: '패션이나 가구 디자인에서 고급스럽고 내구성이 강한 소재를 설명할 때 주로 쓰입니다.',
      synonymAntonym: '동물 가죽인 hide와 유사하며, 인공 소재인 synthetic이나 fabric과는 반대되는 질감을 가집니다.',
    }),
    {
      definition: 'made from the skin of an animal that has been cleaned and treated to preserve it',
      synonyms: ['leathern', 'coriaceous', 'skin-made'],
      antonyms: ['synthetic', 'textile', 'fabric'],
      exampleSentences: [
        { en: 'The vintage motorcycle jacket was crafted from thick, durable cowhide.', ko: '그 빈티지 오토바이 재킷은 두껍고 내구성이 강한 소가죽으로 제작되었습니다.' },
        { en: 'She preferred wearing handmade boots because of their superior comfort and quality.', ko: '그녀는 뛰어난 편안함과 품질 때문에 수제 가죽 부츠를 신는 것을 선호했습니다.' },
      ],
    }
  ),
  word('leave', '떠나다', 7, 'verb',
    ['도착', '방문', '유지', '참석', '획득', '정착', '수집', '보존', '거주', '동행'],
    tips({
      etymology: '고대 영어 \'læfan\'에서 유래하여 무언가를 뒤에 남겨두거나 물려준다는 의미를 담고 있습니다.',
      visual: '휴가 신청서를 책상 위에 올려두고 사무실 문을 나서는 직장인의 뒷모습을 상상해 보세요.',
      soundAlike: '나뭇잎을 뜻하는 \'leaf\'와 발음이 비슷하죠? 나무가 잎을 떨어뜨리고 떠나는 장면을 연상하세요.',
      context: '군대나 직장에서 공식적으로 허가받은 휴가나 자리를 비우는 기간을 지칭할 때 주로 쓰입니다.',
      synonymAntonym: 'permission과 유사하게 허가의 의미를 갖지만, stay와는 반대로 자리를 비움을 뜻합니다.',
    }),
    {
      definition: 'to go away from a place, person, or situation',
      synonyms: ['depart', 'go away', 'exit'],
      antonyms: ['arrive', 'stay', 'remain'],
      exampleSentences: [
        { en: 'Please leave the room quietly after the meeting ends.', ko: '회의가 끝난 뒤에는 조용히 방을 떠나 주세요.' },
        { en: 'She decided to leave early to avoid heavy traffic.', ko: '그녀는 심한 교통 체증을 피하려고 일찍 떠나기로 했다.' },
      ],
    }
  ),
  word('lecture', '강의', 4, 'noun',
    ['실험', '토론', '연구', '과제', '시험', '면접', '발표', '연습', '관찰', '기록'],
    tips({
      etymology: '라틴어 \'lectura\'에서 유래했으며, 본래 \'읽기\'라는 뜻에서 지식을 읽어주는 \'강의\'로 발전했습니다.',
      visual: '대학교 대강당에서 교수가 교단에 서서 학생들에게 열정적으로 설명하는 모습을 상상하세요.',
      soundAlike: '\'렉처\'라고 발음하며, 지식을 머릿속에 \'넣처(넣어줘)\'라고 연상하면 쉽습니다.',
      context: '주로 대학 수업이나 전문가의 강연을 지칭할 때 사용하며, 때로는 잔소리라는 부정적 의미로도 쓰입니다.',
      synonymAntonym: '지식을 전달하는 address와 유사하며, 양방향 소통인 conversation과는 반대되는 성격이 강합니다.',
    }),
    {
      definition: 'An educational talk to an audience, especially to students in a university or college.',
      synonyms: ['address', 'discourse', 'presentation'],
      antonyms: ['silence', 'conversation', 'dialogue'],
      exampleSentences: [
        { en: 'The professor gave an inspiring talk about quantum physics during the morning session.', ko: '교수님은 오전 세션 동안 양자 물리학에 대해 영감을 주는 강의를 하셨습니다.' },
        { en: 'Students are required to attend every scheduled session to pass the final exam.', ko: '학생들은 기말고사에 합격하기 위해 예정된 모든 강의에 참석해야 합니다.' },
      ],
    }
  ),
];
