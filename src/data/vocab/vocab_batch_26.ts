import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch26: VocabItem[] = [
  word('breakfast', '아침밥', 1, 'noun',
    ['점심', '저녁', '야식', '다과', '디저트', '간식', '브런치', '후식', '전채', '국물'],
    tips({
      etymology: '단식(fast)을 깨다(break)라는 의미가 합쳐져 밤새 비어있던 위장을 채우는 첫 식사를 뜻합니다.',
      visual: '김이 모락모락 나는 토스트와 계란 프라이가 놓인 아침 식탁 풍경을 상상해 보세요.',
      soundAlike: '\'브렉퍼스트\' 발음이 \'빨리(fast) 부수다(break)\'와 비슷하니 아침에 배고픔을 빨리 없애는 장면을 떠올리세요.',
      context: '주로 아침 7시에서 9시 사이에 먹는 하루의 가장 중요한 첫 식사 상황에서 쓰입니다.',
      synonymAntonym: '아침 식사를 뜻하는 morning meal과 유의어이며, 저녁 식사인 dinner와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the first meal of the day, typically eaten in the morning after waking up',
      synonyms: ['morning meal', 'brunch', 'repast'],
      antonyms: ['dinner', 'supper', 'fasting'],
      exampleSentences: [
        { en: 'I usually have cereal and milk for my first meal of the day.', ko: '나는 보통 아침 식사로 시리얼과 우유를 먹는다.' },
        { en: 'Eating a healthy meal in the morning provides energy for the whole day.', ko: '건강한 아침 식사를 하는 것은 하루 종일 쓸 에너지를 제공한다.' },
      ],
    }
  ),
  word('breast', '가슴', 6, 'noun',
    ['등', '배', '어깨', '허리', '엉덩이', '팔', '다리', '목', '머리', '발가락'],
    tips({
      etymology: '고대 영어 \'breost\'에서 유래했으며, 신체의 앞부분을 지칭하는 용어로 오랫동안 사용되었습니다.',
      visual: '심장이 뛰는 가슴 부위에 손을 얹고 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'브레스트\'라고 발음하며, 빵인 \'브레드(bread)\'와 발음이 비슷하지만 끝소리가 다름에 유의하세요.',
      context: '의학적인 흉부뿐만 아니라 감정이 깃든 마음의 상징으로도 자주 쓰입니다.',
      synonymAntonym: 'chest와 유사하지만 breast는 좀 더 부드러운 신체 부위나 여성의 가슴을 지칭할 때 자주 쓰입니다.',
    }),
    {
      definition: 'the front part of the human body between the neck and the abdomen',
      synonyms: ['chest', 'bosom', 'bust'],
      antonyms: ['back', 'rear', 'spine'],
      exampleSentences: [
        { en: 'The mother held the crying infant close to her heart and chest area.', ko: '어머니는 우는 아기를 그녀의 가슴 가까이 꼭 껴안았습니다.' },
        { en: 'He felt a tightening in his ribcage area due to the sudden anxiety.', ko: '그는 갑작스러운 불안감 때문에 가슴이 조여오는 것을 느꼈습니다.' },
      ],
    }
  ),
  word('breathe', '숨쉬다', 7, 'verb',
    ['참다', '멈추다', '막다', '말하다', '울다', '웃다', '먹다', '마시다', '뱉다', '삼키다'],
    tips({
      etymology: '고대 영어 \'bræth\'에서 유래했으며, 원래는 \'냄새\'나 \'증기\'를 뜻하다가 생명 유지에 필수적인 \'호흡\'으로 의미가 확장되었습니다.',
      visual: '요가나 명상을 할 때 가슴이 크게 부풀어 올랐다가 가라앉는 평온한 모습을 상상해 보세요.',
      soundAlike: '끝에 \'th\' 발음이 있어 \'브리드\'라고 부드럽게 발음하며 공기가 입 밖으로 나가는 소리를 느껴보세요.',
      context: '운동 직후나 긴장된 순간에 심호흡을 하라는 조언을 들을 때 자주 쓰이는 단어입니다.',
      synonymAntonym: 'inhale(들이마시다)과 exhale(내뱉다)을 합친 과정이 바로 이 단어의 핵심 동작입니다.',
    }),
    {
      definition: 'to take air into the lungs and send it out again as a natural process of staying alive',
      synonyms: ['respire', 'inhale', 'exhale'],
      antonyms: ['suffocate', 'choke', 'asphyxiate'],
      exampleSentences: [
        { en: 'It is important to step outside and get some fresh air to help you relax.', ko: '긴장을 푸는 데 도움이 되도록 밖으로 나가 신선한 공기를 마시는 것이 중요합니다.' },
        { en: 'The doctor told the patient to take a deep breath and then let it out slowly.', ko: '의사는 환자에게 심호흡을 한 뒤 천천히 내뱉으라고 말했습니다.' },
      ],
    }
  ),
  word('breed', '기르다', 9, 'verb',
    ['버리다', '죽이다', '방치하다', '내쫓다', '해고하다', '포기하다', '잃다', '그만두다', '중단하다', '말라죽이다'],
    tips({
      etymology: '고대 영어 \'bredan\'에서 유래했으며, \'따뜻하게 품다\'라는 의미에서 새끼를 낳고 기르는 과정으로 발전했습니다.',
      visual: '농장에서 어미 동물이 새끼들에게 젖을 먹이며 정성스럽게 돌보는 따뜻한 풍경을 상상해 보세요.',
      soundAlike: '빵을 뜻하는 \'bread\'와 발음이 비슷합니다. 가족을 먹여 살리기 위해 가축을 \'기르는\' 모습을 연상하세요.',
      context: '주로 가축의 품종을 개량하거나 특정 목적을 위해 동식물을 번식시키고 키울 때 자주 사용됩니다.',
      synonymAntonym: '새끼를 낳게 하는 \'reproduce\'와 유사하며, 돌보지 않고 내버려 두는 \'neglect\'와는 반대됩니다.',
    }),
    {
      definition: 'to keep animals or plants for the purpose of producing young or new ones',
      synonyms: ['raise', 'rear', 'reproduce'],
      antonyms: ['neglect', 'abandon', 'destroy'],
      exampleSentences: [
        { en: 'The farmer decided to breed a new type of cattle that could survive in cold weather.', ko: '농부는 추운 날씨에도 살아남을 수 있는 새로운 품종의 소를 기르기로 결정했다.' },
        { en: 'Poor living conditions often breed disease and social unrest in crowded cities.', ko: '열악한 생활 환경은 종종 인구 밀집 도시에서 질병과 사회적 불안을 야기한다.' },
      ],
    }
  ),
  word('breeze', '미풍', 4, 'noun',
    ['돌풍', '태풍', '폭풍', '바람 없음', '고요', '정적', '강풍', '폭풍우', '참숫바람', '회오리'],
    tips({
      etymology: '16세기 네덜란드어 \'briza(북동풍)\'에서 유래하여 가볍고 시원하게 부는 바람을 뜻하게 되었습니다.',
      visual: '해변가에서 머리카락이 살랑살랑 흔들릴 정도의 기분 좋은 바람을 상상해 보세요.',
      soundAlike: '\'브리즈\'는 \'부리다\'와 발음이 비슷하죠? 시원한 바람이 재롱을 부리듯 살랑거린다고 기억하세요.',
      context: '날씨가 화창하고 기분 좋을 때 부는 산들바람이나 아주 쉽게 해낸 일을 비유할 때도 쓰입니다.',
      synonymAntonym: '강한 바람인 gale이나 storm과는 반대되는 아주 부드러운 zephyr 같은 존재입니다.',
    }),
    {
      definition: 'A light, gentle, and refreshing current of air that moves softly.',
      synonyms: ['zephyr', 'gentle wind', 'waft'],
      antonyms: ['gale', 'hurricane', 'tempest'],
      exampleSentences: [
        { en: 'A cool sea air moved through the open window, making the curtains flutter.', ko: '열린 창문으로 시원한 바닷바람이 들어와 커튼이 살랑거렸다.' },
        { en: 'The afternoon was warm, but a light movement of air kept us comfortable.', ko: '오후는 따뜻했지만 가벼운 미풍 덕분에 우리는 쾌적함을 유지했다.' },
      ],
    }
  ),
  word('brew', '양조하다', 10, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '고대 영어 \'breowan\'에서 유래되었으며, 끓이다 혹은 거품이 일다라는 의미를 담고 있습니다.',
      visual: '커피 머신에서 진한 원액이 뚝뚝 떨어지거나 맥주 공장에서 커다란 통에 보리가 익어가는 모습을 상상하세요.',
      soundAlike: '\'브루\' 발음이 무언가 부글부글 끓어오르는 소리와 비슷하다고 생각하면 기억하기 쉽습니다.',
      context: '단순히 음료를 만드는 것뿐만 아니라, 폭풍이나 음모가 \'태동하다\' 혹은 \'일어나려 하다\'는 비유적 의미로도 쓰입니다.',
      synonymAntonym: 'ferment나 distill은 술을 만드는 구체적 과정이며, 반대로 가공하지 않은 상태는 raw라고 할 수 있습니다.',
    }),
    {
      definition: 'to prepare a beverage by soaking, boiling, and fermenting ingredients like tea leaves or malt',
      synonyms: ['concoct', 'infuse', 'ferment'],
      antonyms: ['consume', 'destroy', 'disperse'],
      exampleSentences: [
        { en: 'The local pub began to make its own craft beer in the basement.', ko: '그 지역 펍은 지하실에서 직접 수제 맥주를 양조하기 시작했습니다.' },
        { en: 'I will make a fresh pot of herbal tea for our guests.', ko: '손님들을 위해 신선한 허브차 한 주전자를 우려낼게요.' },
      ],
    }
  ),
  word('brick', '벽돌', 5, 'noun',
    ['나무', '유리', '금속', '플라스틱', '대리석', '시멘트', '모래', '자갈', '타일', '판자'],
    tips({
      etymology: '중세 네덜란드어 \'brike\'에서 유래했으며, 조각이나 파편을 의미하던 것이 건축용 덩어리로 굳어졌습니다.',
      visual: '빨간색 직사각형 모양의 단단한 흙덩이가 차곡차곡 쌓여 담장을 이루는 모습을 상상하세요.',
      soundAlike: '발음이 \'브릭\'과 유사하므로, 장난감 \'레고 블록\'을 끼우는 소리를 연상하면 쉽습니다.',
      context: '건축 현장에서 집을 짓거나 정원의 담장을 쌓을 때 가장 기본이 되는 재료입니다.',
      synonymAntonym: '건축 재료인 block과 유사하며, 형태가 없는 액체 상태의 mud와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A rectangular block of hard material used for building structures such as walls or houses.',
      synonyms: ['block', 'slab', 'stone'],
      antonyms: ['fluid', 'gas', 'liquid'],
      exampleSentences: [
        { en: 'The old house was built of red clay and had a very sturdy foundation.', ko: '그 낡은 집은 붉은 점토 벽돌로 지어졌으며 매우 튼튼한 기초를 가지고 있었습니다.' },
        { en: 'He accidentally dropped a heavy rectangular piece on his foot while working at the construction site.', ko: '그는 공사장에서 일하던 중 실수로 무거운 벽돌 하나를 발등에 떨어뜨렸습니다.' },
      ],
    }
  ),
  word('bride', '신부', 6, 'noun',
    ['신랑', '하객', '주례', '사촌', '친구', '이혼녀', '미혼녀', '과부', '독신자', '동료'],
    tips({
      etymology: '고대 영어 bryd에서 유래되었으며, 결혼을 통해 가족의 일원이 된다는 의미를 담고 있습니다.',
      visual: '하얀 웨딩드레스를 입고 부케를 든 채 버진로드를 걷는 여성을 상상해 보세요.',
      soundAlike: '발음이 \'브라이드\'이므로 \'눈부시게 밝은(bright) 신부\'로 연결해 기억하면 쉽습니다.',
      context: '결혼식의 주인공인 여성에게 주로 쓰이며, 결혼 직전이나 직후의 상태를 포함합니다.',
      synonymAntonym: '새롭게 결혼한 여성인 newlywed와 유사하며, 남성 주인공인 groom과 반대되는 개념입니다.',
    }),
    {
      definition: 'A woman who is about to be married or who has just been married.',
      synonyms: ['newlywed', 'spouse', 'wife-to-be'],
      antonyms: ['groom', 'husband', 'bachelor'],
      exampleSentences: [
        { en: 'The beautiful lady in the white dress looked like a radiant queen on her wedding day.', ko: '흰 드레스를 입은 아름다운 여성은 결혼식 날 빛나는 여왕처럼 보였습니다.' },
        { en: 'The groom stood at the altar waiting for his future wife to walk down the aisle.', ko: '신랑은 제단에 서서 미래의 아내가 통로를 걸어오기를 기다렸습니다.' },
      ],
    }
  ),
  word('brief', '단시간의', 7, 'adjective',
    ['영구적인', '장황한', '지속적인', '무한한', '지루한', '장시간의', '오래된', '끝없는', '방대한', '장문의'],
    tips({
      etymology: '라틴어 brevis에서 유래하여 \'짧다\'는 핵심 의미를 담고 있습니다.',
      visual: '시계 바늘이 아주 조금만 움직이는 찰나의 순간을 상상해 보세요.',
      soundAlike: '서류 가방인 \'브리프케이스\'는 짧고 핵심적인 서류를 담는 가방입니다.',
      context: '회의나 보고를 할 때 핵심만 짧게 전달하는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'short와 유사하며, 반대로 아주 길고 지루한 것은 lengthy라고 합니다.',
    }),
    {
      definition: 'lasting for only a short period of time or using few words',
      synonyms: ['short', 'concise', 'temporary'],
      antonyms: ['lengthy', 'permanent', 'extended'],
      exampleSentences: [
        { en: 'The president made a short statement to the press after the meeting.', ko: '대통령은 회의 후에 언론에 짧은 성명을 발표했습니다.' },
        { en: 'We had a very quick discussion about the new project during lunch.', ko: '우리는 점심 식사 중에 새 프로젝트에 대해 아주 짧은 토론을 나누었습니다.' },
      ],
    }
  ),
  word('brilliant', '빛나는', 4, 'adjective',
    ['어두운', '흐린', '침침한', '우둔한', '둔한', '무디한', '흐릿한', '그늘진', '음침한', '칙칙한'],
    tips({
      etymology: '프랑스어 \'briller(반짝이다)\'에서 유래하여 보석이 빛을 반사하는 모습을 떠올리면 쉽습니다.',
      visual: '다이아몬드 반지가 강한 조명 아래에서 눈부시게 반짝이는 이미지를 상상해 보세요.',
      soundAlike: '\'브릴리언트\' 발음이 \'불(fire)이 이언트(giant)\'처럼 거대한 불꽃이 타오르는 소리와 비슷합니다.',
      context: '매우 똑똑한 사람을 칭찬하거나 날씨가 화창할 때, 혹은 성과가 훌륭할 때 두루 쓰입니다.',
      synonymAntonym: 'bright와 유의어 관계이며, 반대로 빛이 없거나 멍청함을 뜻하는 dull과 대조됩니다.',
    }),
    {
      definition: 'exceptionally clever, talented, or reflecting a great amount of light',
      synonyms: ['radiant', 'intelligent', 'magnificent'],
      antonyms: ['dull', 'stupid', 'obscure'],
      exampleSentences: [
        { en: 'The diamond ring gave off a dazzling glow under the store lights.', ko: '다이아몬드 반지가 매장 조명 아래에서 눈부신 빛을 내뿜었습니다.' },
        { en: 'She came up with a highly creative solution to the complex problem.', ko: '그녀는 복잡한 문제에 대해 매우 창의적인 해결책을 생각해냈습니다.' },
      ],
    }
  ),
  word('broadcast', '방송하다', 5, 'verb',
    ['수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다', '결정하다', '요청하다'],
    tips({
      etymology: '넓게(broad) 씨를 뿌리다(cast)라는 농업 용어에서 전파를 널리 퍼뜨린다는 의미로 확장되었습니다.',
      visual: '라디오 타워에서 전파가 사방으로 뻗어 나가는 모습을 상상해 보세요.',
      soundAlike: '브로드(broad)하게 캐스트(cast)한다, 즉 넓게 던진다고 기억하면 쉽습니다.',
      context: '뉴스나 라디오 프로그램뿐만 아니라 소문을 널리 퍼뜨릴 때도 사용됩니다.',
      synonymAntonym: 'transmit(전송하다)과 유사하며, 반대로 정보를 숨기는 것은 conceal(숨기다)입니다.',
    }),
    {
      definition: 'to transmit programs or information by radio or television to a large number of people',
      synonyms: ['transmit', 'air', 'circulate'],
      antonyms: ['conceal', 'suppress', 'withhold'],
      exampleSentences: [
        { en: 'The national news will be aired live at eight o\'clock tonight.', ko: '국가 뉴스가 오늘 밤 8시에 생중계로 방송될 예정입니다.' },
        { en: 'She didn\'t want to spread her private life to everyone in the office.', ko: '그녀는 자신의 사생활이 사무실의 모든 사람에게 퍼지는 것을 원하지 않았습니다.' },
      ],
    }
  ),
  word('brown', '갈색의', 2, 'adjective',
    ['하얀', '검은', '빨간', '파란', '노란', '초록', '회색', '분홍', '보라', '주황'],
    tips({
      etymology: '고대 영어 \'brun\'에서 유래했으며, 밝고 빛나는 어두운 색상을 의미하던 단어에서 발전했습니다.',
      visual: '잘 구워진 빵의 겉면이나 진한 원두커피의 색깔을 머릿속에 그려보세요.',
      soundAlike: '빵을 구울 때 \'부풀어(brown)\' 오르며 색이 변하는 모습을 연상하면 쉽습니다.',
      context: '가을철 땅에 떨어진 낙엽이나 나무의 줄기 색상을 표현할 때 가장 자주 쓰입니다.',
      synonymAntonym: 'tan이나 chocolate 같은 구체적인 색상어와 반대되는 무채색인 white를 함께 기억하세요.',
    }),
    {
      definition: 'having the color of earth, wood, or roasted coffee beans',
      synonyms: ['tan', 'bronze', 'chestnut'],
      antonyms: ['white', 'colorless', 'transparent'],
      exampleSentences: [
        { en: 'The dry leaves turned a deep shade of earth tone during the autumn.', ko: '가을 동안 마른 잎들은 진한 갈색조로 변했습니다.' },
        { en: 'She wore a pair of dark leather boots that matched her coat.', ko: '그녀는 자신의 코트와 어울리는 어두운 갈색 가죽 부츠를 신었습니다.' },
      ],
    }
  ),
  word('brush', '솔', 3, 'noun',
    ['스펀지', '걸레', '비누', '세제', '물통', '면도기', '가위', '수건', '대걸레', '치약'],
    tips({
      etymology: '고대 프랑스어 \'broce\'에서 유래했으며, 원래는 덤불이나 잔가지 묶음을 의미했습니다.',
      visual: '빳빳한 털이 박힌 나무 막대로 먼지를 털어내거나 그림을 그리는 모습을 상상하세요.',
      soundAlike: '발음이 \'브러쉬\'이므로 머리를 빗거나 옷을 터는 \'부스럭\' 소리와 연결해 보세요.',
      context: '청소용 솔뿐만 아니라 화가들이 쓰는 붓이나 머리카락을 정리하는 빗도 모두 이 단어를 씁니다.',
      synonymAntonym: 'broom(빗자루)과 용도가 비슷하며, 털어내는 도구이므로 더러움(dirt)과는 반대되는 개념입니다.',
    }),
    {
      definition: 'an implement consisting of bristles set into a handle, used for cleaning, smoothing, or painting',
      synonyms: ['broom', 'sweeper', 'applicator'],
      antonyms: ['dirt', 'mess', 'clutter'],
      exampleSentences: [
        { en: 'She used a small tool to scrub the dried mud off her shoes.', ko: '그녀는 신발에 말라붙은 진흙을 닦아내기 위해 작은 솔을 사용했다.' },
        { en: 'The artist dipped the wooden instrument into the blue paint.', ko: '화가는 그 나무 붓을 파란색 물감에 담갔다.' },
      ],
    }
  ),
  word('brute', '야수', 8, 'noun',
    ['성인', '지성인', '현인', '철인', '천사', '선인', '지식인', '학자', '성자', '현자'],
    tips({
      etymology: '라틴어 brutus에서 유래하여 \'무겁고 둔하며 이성이 없는\' 상태를 의미합니다.',
      visual: '거칠고 힘만 센 덩치 큰 괴물이 으르렁거리는 모습을 상상해 보세요.',
      soundAlike: '\'브루트\' 발음이 \'부르트다\'와 비슷하니, 온몸이 부르틀 정도로 거칠게 싸우는 야수를 떠올려보세요.',
      context: '주로 신체적인 힘은 강하지만 지성이나 자비심이 없는 사람을 비난할 때 사용됩니다.',
      synonymAntonym: '짐승 같은 beast와 반대되는 고결한 존재인 saint를 함께 기억하세요.',
    }),
    {
      definition: 'A person who is very violent, cruel, or lacks the ability to reason like a human being.',
      synonyms: ['beast', 'savage', 'monster'],
      antonyms: ['gentleman', 'saint', 'humanitarian'],
      exampleSentences: [
        { en: 'The dictator was described as a heartless person who ruled through fear.', ko: '그 독재자는 공포를 통해 통치하는 비정한 야수로 묘사되었다.' },
        { en: 'He used sheer physical strength to force the heavy door open.', ko: '그는 무지막지한 신체적 힘을 사용하여 무거운 문을 강제로 열었다.' },
      ],
    }
  ),
  word('bubble', '거품', 1, 'noun',
    ['얼음', '얼음조각', '유리', '결정', '알갱이', '가루', '덩어리', '막대', '판', '고체'],
    tips({
      etymology: '거품이 터질 때 나는 \'버블\' 소리를 흉내 낸 의성어에서 유래되었습니다.',
      visual: '비누를 불었을 때 공중에 둥둥 떠다니는 투명하고 동그란 방울을 상상해 보세요.',
      soundAlike: '입술을 가볍게 부딪히며 \'버블\'이라고 발음하면 거품이 터지는 느낌이 납니다.',
      context: '경제 분야에서는 실제 가치보다 가격이 과하게 오른 \'거품 경제\'를 뜻할 때도 자주 쓰입니다.',
      synonymAntonym: '비슷한 말로는 foam이 있고, 반대되는 개념으로는 꽉 찬 고체인 solid를 떠올릴 수 있습니다.',
    }),
    {
      definition: 'a thin sphere of liquid enclosing air or gas, often floating on or in a fluid',
      synonyms: ['foam', 'droplet', 'blister'],
      antonyms: ['solid', 'entity', 'substance'],
      exampleSentences: [
        { en: 'The children enjoyed blowing soap spheres into the air at the park.', ko: '아이들은 공원에서 공중에 비누 거품을 부는 것을 즐겼습니다.' },
        { en: 'Boiling water produces many small pockets of steam rising to the surface.', ko: '끓는 물은 표면으로 올라오는 많은 작은 기포들을 만들어냅니다.' },
      ],
    }
  ),
  word('bug', '벌레', 2, 'noun',
    ['새', '짐승', '물고기', '식물', '광물', '기계', '인형', '사람', '로봇', '조각'],
    tips({
      etymology: '중세 영어 \'bugge\'에서 유래했으며, 원래는 공포를 주는 유령이나 괴물을 뜻하다가 작은 곤충을 의미하게 되었습니다.',
      visual: '침대 위를 기어가는 아주 작은 무당벌레나 개미의 모습을 상상해 보세요.',
      soundAlike: '우리말 \'버그\'와 발음이 같으며, 컴퓨터 프로그램의 오류를 말할 때도 이 단어를 씁니다.',
      context: '여름철 캠핑장에서 텐트 안으로 들어오는 작은 곤충들을 가리킬 때 자주 쓰입니다.',
      synonymAntonym: '곤충을 뜻하는 insect와 비슷하지만, 고장이나 결함을 뜻할 때는 flaw와 통합니다.',
    }),
    {
      definition: 'A small invertebrate animal with many legs, or a technical error in a software system.',
      synonyms: ['insect', 'beetle', 'glitch'],
      antonyms: ['fix', 'solution', 'perfection'],
      exampleSentences: [
        { en: 'A tiny green creature was crawling on the leaf.', ko: '작은 초록색 벌레 한 마리가 나뭇잎 위를 기어가고 있었다.' },
        { en: 'The programmer spent all night trying to find the error in the code.', ko: '프로그래머는 코드 속의 오류를 찾아내기 위해 밤을 꼬박 새웠다.' },
      ],
    }
  ),
  word('build', '짓다', 3, 'verb',
    ['부수다', '헐다', '파괴하다', '무너뜨리다', '제거하다', '없애다', '철거하다', '뿌리뽑다', '산산조각내다', '완전히 없애다'],
    tips({
      etymology: '고대 영어 \'byldan\'에서 유래하여 집을 짓거나 거처를 마련한다는 의미에서 시작되었습니다.',
      visual: '벽돌을 하나하나 쌓아 올려 높은 건물을 완성해가는 공사 현장의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'빌드\'이므로, 건물을 뜻하는 \'빌딩(building)\'을 세우는 동작으로 기억하면 쉽습니다.',
      context: '단순히 건물을 짓는 것뿐만 아니라 신뢰나 경력을 쌓아 올릴 때도 자주 사용됩니다.',
      synonymAntonym: 'construct는 정교하게 짓는 것을, destroy는 공들여 지은 것을 완전히 허무는 것을 뜻합니다.',
    }),
    {
      definition: 'to construct something by putting parts or materials together over a period of time',
      synonyms: ['construct', 'assemble', 'erect'],
      antonyms: ['demolish', 'destroy', 'dismantle'],
      exampleSentences: [
        { en: 'The birds use small twigs and mud to construct a nest in the tree.', ko: '새들은 나무에 둥지를 틀기 위해 작은 나뭇가지와 진흙을 사용합니다.' },
        { en: 'It takes many years of hard work to create a successful reputation in this industry.', ko: '이 업계에서 성공적인 명성을 쌓는 데는 수년간의 노력이 필요합니다.' },
      ],
    }
  ),
  word('bulk', '부피', 9, 'noun',
    ['무게', '길이', '넓이', '높이', '깊이', '양', '개수', '작은 부분', '소량', '한 줌'],
    tips({
      etymology: '고대 노르웨이어 \'bulki\'에서 유래하여 배의 화물칸이나 쌓여있는 큰 더미를 의미하게 되었습니다.',
      visual: '창고에 거대한 상자들이 가득 쌓여 공간을 차지하고 있는 묵직한 모습을 상상해 보세요.',
      soundAlike: '\'벌크업(bulk-up)\'이라는 말처럼 몸집이나 부피를 크게 키우는 이미지를 떠올리면 쉽습니다.',
      context: '주로 물건의 거대한 크기나 양을 나타낼 때, 혹은 어떤 집단의 대부분을 지칭할 때 사용됩니다.',
      synonymAntonym: '크기를 뜻하는 magnitude와 유의어이며, 아주 작은 입자를 뜻하는 particle과 반대됩니다.',
    }),
    {
      definition: 'The large size, mass, or volume of something, especially when it is difficult to manage.',
      synonyms: ['magnitude', 'volume', 'mass'],
      antonyms: ['fraction', 'minority', 'particle'],
      exampleSentences: [
        { en: 'The sheer size and volume of the cargo made it difficult to move.', ko: '화물의 엄청난 크기와 부피 때문에 그것을 옮기는 것이 어려웠다.' },
        { en: 'They decided to buy the flour in large quantities to save money.', ko: '그들은 돈을 아끼기 위해 밀가루를 대량으로 구입하기로 결정했다.' },
      ],
    }
  ),
  word('bull', '황소', 6, 'noun',
    ['암소', '송아지', '말', '염소', '양', '돼지', '닭', '개', '고양이', '토끼'],
    tips({
      etymology: '고대 게르만어에서 \'울부짖다\'라는 뜻의 어원에서 유래하여 힘찬 소리를 내는 수소를 의미하게 되었습니다.',
      visual: '투우 경기장에서 붉은 천을 향해 돌진하는 거대하고 근육질인 수소의 뿔을 상상해 보세요.',
      soundAlike: '\'불\'끈 힘을 쓰는 황소의 이미지를 떠올리면 발음과 의미를 쉽게 연결할 수 있습니다.',
      context: '금융 시장에서 주가가 상승하는 강세장을 \'bull market\'이라고 부르는데, 이는 황소가 뿔을 위로 치받는 모습에서 따온 것입니다.',
      synonymAntonym: '암소를 뜻하는 cow와 대비되는 성별의 개념으로 기억하면 명확합니다.',
    }),
    {
      definition: 'a fully grown male of any bovine animal, especially an uncastrated one',
      synonyms: ['steer', 'ox', 'sire'],
      antonyms: ['cow', 'heifer', 'calf'],
      exampleSentences: [
        { en: 'The powerful animal charged across the field with surprising speed.', ko: '그 강력한 동물은 놀라운 속도로 들판을 가로질러 돌진했습니다.' },
        { en: 'Investors are optimistic because they believe we are entering a long-term rising market.', ko: '투자자들은 우리가 장기적인 강세장에 진입하고 있다고 믿기 때문에 낙관적입니다.' },
      ],
    }
  ),
  word('bullet', '탄환', 7, 'noun',
    ['화살', '창', '칼', '폭탄', '지뢰', '수류탄', '방패', '헬멧', '조각', '알갱이'],
    tips({
      etymology: '프랑스어 \'boulette\'에서 유래했으며, 이는 \'작은 공\'을 의미하는 \'boule\'의 지소사 형태입니다.',
      visual: '총구에서 불꽃을 뿜으며 아주 빠른 속도로 날아가는 날렵한 금속 물체를 상상해 보세요.',
      soundAlike: '발음이 \'불렛\'과 유사하므로, 뜨거운 \'불\'처럼 날아가는 \'탄환\'으로 연결해 기억하면 쉽습니다.',
      context: '주로 사격, 범죄 수사, 또는 비유적으로 아주 빠른 속도를 표현할 때 자주 등장하는 단어입니다.',
      synonymAntonym: '발사체인 projectile과 유사하며, 방어 도구인 shield나 armor와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A small, metal projectile that is shot from a firearm such as a pistol or rifle.',
      synonyms: ['projectile', 'slug', 'shot'],
      antonyms: ['shield', 'armor', 'protection'],
      exampleSentences: [
        { en: 'The police found a spent casing but could not locate the actual metal projectile at the crime scene.', ko: '경찰은 사용된 탄피는 발견했지만 범죄 현장에서 실제 탄환은 찾을 수 없었습니다.' },
        { en: 'The high-speed train is often compared to a fast-moving object shot from a gun because of its velocity.', ko: '그 고속열차는 속도 때문에 종종 총에서 발사된 빠른 탄환에 비유되곤 합니다.' },
      ],
    }
  ),
  word('bully', '못살게', 4, 'adverb',
    ['괴롭히다', '친절하게', '부드럽게', '도와주다', '칭찬하다', '보호하다', '존중하다', '협력하다', '격려하다', '아끼다'],
    tips({
      etymology: '과거에는 \'연인\'이나 \'좋은 친구\'를 뜻했으나, 시간이 흐르며 힘을 과시하며 약자를 괴롭히는 사람이라는 부정적인 의미로 변했습니다.',
      visual: '덩치 큰 아이가 작은 아이의 점심 도시락을 빼앗으며 험악한 표정을 짓는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'불리(bully)\'와 비슷하므로, 나보다 약한 사람을 \'불리\'한 상황에 빠뜨려 괴롭히는 사람이라고 기억하세요.',
      context: '학교나 직장에서 권력을 이용해 타인을 지속적으로 위협하거나 해를 끼치는 행동을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '약자를 괴롭히는 tyrant와 대조적으로, 타인을 돕고 보호하는 protector를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'To frighten or hurt a weaker person, often forcing them to do something they do not want to do.',
      synonyms: ['intimidate', 'harass', 'torment'],
      antonyms: ['protect', 'comfort', 'support'],
      exampleSentences: [
        { en: 'The older students used to pick on and intimidate the younger ones in the playground.', ko: '고학년 학생들은 운동장에서 저학년 학생들을 못살게 굴고 위협하곤 했다.' },
        { en: 'You should never let anyone treat you poorly or force you into doing things against your will.', ko: '그 누구도 당신을 못살게 굴거나 의지에 반하는 일을 강요하게 두어서는 안 된다.' },
      ],
    }
  ),
  word('bump', '충돌', 5, 'noun',
    ['미끄러짐', '포옹', '손짓', '속삭임', '부드러운 접촉', '가볍게 치기', '쓰다듬기', '정적', '고요', '평온'],
    tips({
      etymology: '16세기경 둔탁한 소리를 나타내는 의성어에서 유래하여 무언가에 부딪히는 소리와 동작을 의미하게 되었습니다.',
      visual: '어두운 방에서 걷다가 발가락을 가구 모서리에 \'툭\' 하고 부딪혀서 혹이 튀어나온 장면을 상상해 보세요.',
      soundAlike: '\'범프\'라고 발음할 때 입술이 부딪혔다 떨어지는 느낌을 충격이 가해지는 순간과 연결해 보세요.',
      context: '도로 위의 과속 방지턱을 \'speed bump\'라고 부르는 것처럼 툭 튀어나온 부분이나 가벼운 충격을 말할 때 주로 쓰입니다.',
      synonymAntonym: '갑작스러운 충격인 collision과 비슷하지만, 매끄러운 상태를 뜻하는 smoothness와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a light blow or a forceful impact caused by hitting something, or a small raised area on a surface',
      synonyms: ['collision', 'impact', 'lump'],
      antonyms: ['depression', 'hollow', 'smoothness'],
      exampleSentences: [
        { en: 'The car hit a small bump in the road, causing the passengers to jolt.', ko: '자동차가 도로 위의 작은 턱에 부딪혀 승객들이 덜컹거렸습니다.' },
        { en: 'She developed a painful bump on her forehead after walking into the door.', ko: '그녀는 문에 부딪힌 후 이마에 통증을 동반한 혹이 생겼습니다.' },
      ],
    }
  ),
  word('bundle', '다발', 6, 'noun',
    ['낱개', '조각', '파편', '액체', '기체', '분산', '해체', '단일물', '개별', '공백'],
    tips({
      etymology: '중세 네덜란드어 \'bondel\'에서 유래했으며, \'묶다\'라는 뜻의 bind와 어원이 같습니다.',
      visual: '신문지나 나뭇가지들을 끈으로 꽉 묶어 한 손에 들고 있는 보따리를 상상해 보세요.',
      soundAlike: '\'번들\'이라는 발음은 소프트웨어를 살 때 끼워주는 \'묶음 상품\'을 떠올리면 쉽습니다.',
      context: '주로 막대기, 서류, 옷가지 등을 하나로 묶었을 때나 큰 돈뭉치를 말할 때 사용합니다.',
      synonymAntonym: '여러 개를 모은 것은 bunch, 반대로 낱개로 떨어진 것은 individual item이라고 합니다.',
    }),
    {
      definition: 'a collection of objects held together by a string, paper, or cloth',
      synonyms: ['package', 'bunch', 'stack'],
      antonyms: ['individual', 'fragment', 'single'],
      exampleSentences: [
        { en: 'She carried a large bundle of firewood back to the cabin.', ko: '그녀는 커다란 땔감 다발을 들고 오두막으로 돌아왔다.' },
        { en: 'The courier delivered a thick bundle of documents to the office.', ko: '배달원이 두꺼운 서류 뭉치를 사무실로 전달했다.' },
      ],
    }
  ),
  word('burn', '타다', 1, 'verb',
    ['꺼지다', '식다', '얼다', '젖다', '말리다', '냉각하다', '꺼뜨리다', '소화하다', '흡수하다', '차갑게 하다'],
    tips({
      etymology: '고대 영어 \'beornan\'에서 유래했으며, 불꽃이 일거나 열을 내는 상태를 의미합니다.',
      visual: '캠프파이어에서 장작이 빨갛게 활활 타오르는 모습을 상상해 보세요.',
      soundAlike: '햇볕에 타서 피부가 \'번\'쩍거린다고 생각하면 기억하기 쉽습니다.',
      context: '요리를 하다가 냄비를 태우거나, 햇볕에 피부가 탈 때 주로 사용합니다.',
      synonymAntonym: '불꽃이 이는 blaze와 반대되는 개념인 얼어붙는 freeze를 함께 기억하세요.',
    }),
    {
      definition: 'to be damaged, hurt, or destroyed by fire or extreme heat',
      synonyms: ['ignite', 'scorch', 'blaze'],
      antonyms: ['freeze', 'extinguish', 'quench'],
      exampleSentences: [
        { en: 'Be careful not to let the toast blacken in the oven.', ko: '오븐에서 토스트가 검게 타지 않도록 조심하세요.' },
        { en: 'The dry wood began to catch fire and glow brightly.', ko: '마른 나무에 불이 붙어 밝게 타기 시작했습니다.' },
      ],
    }
  ),
  word('bury', '묻다', 7, 'verb',
    ['파내다', '캐내다', '드러내다', '꺼내다', '발굴하다', '노출하다', '들춰내다', '찾아내다', '꺼내 보이다', '밝히다'],
    tips({
      etymology: '고대 영어 \'byrgan\'에서 유래했으며, 무언가를 보호하거나 숨기기 위해 덮는다는 의미를 담고 있습니다.',
      visual: '강아지가 소중한 뼈다귀를 마당 흙 속에 깊숙이 파묻고 발로 꾹꾹 누르는 모습을 상상해 보세요.',
      soundAlike: '과일 \'berry(베리)\'와 발음이 같습니다. 베리를 땅에 묻는 장면을 연상하면 기억하기 쉽습니다.',
      context: '주로 시신을 안치하거나, 보물 혹은 비밀을 숨길 때, 또는 감정을 억누를 때 자주 사용됩니다.',
      synonymAntonym: 'inter는 주로 장례와 관련된 격식 있는 표현이며, 반대말인 reveal은 숨겨진 것을 세상에 알리는 느낌입니다.',
    }),
    {
      definition: 'to place a deceased person or an object deep under the earth and cover it with soil',
      synonyms: ['inter', 'conceal', 'entomb'],
      antonyms: ['exhume', 'unearth', 'reveal'],
      exampleSentences: [
        { en: 'The pirates decided to hide the gold chest and cover it with sand on the deserted island.', ko: '해적들은 황금 상자를 숨기기로 하고 무인도의 모래 속에 그것을 묻었습니다.' },
        { en: 'She tried to suppress her painful memories and focus on her bright future instead.', ko: '그녀는 고통스러운 기억을 가슴속에 묻어두고 대신 밝은 미래에 집중하려 노력했습니다.' },
      ],
    }
  ),
  word('bush', '덤불', 4, 'noun',
    ['나무', '풀', '꽃', '이끼', '바위', '모래', '흙', '물', '건물', '도로'],
    tips({
      etymology: '고대 독일어에서 유래하여 \'숲\'이나 \'관목\'을 뜻하는 단어로 발전했습니다.',
      visual: '정원이나 공원에서 땅 가까이에서 빽빽하게 잎이 우거진 낮은 나무 뭉치를 상상해 보세요.',
      soundAlike: '발음이 \'부쉬\'와 비슷하므로, 덤불을 헤치고 나갈 때 \'부스럭\' 소리가 나는 장면을 연상하세요.',
      context: '정원 가꾸기나 야생 동물의 서식지를 설명할 때 자주 등장하는 단어입니다.',
      synonymAntonym: '유사한 의미로 shrub가 자주 쓰이며, 거대한 tree와는 크기 면에서 대조를 이룹니다.',
    }),
    {
      definition: 'A low plant with many woody branches that grows close to the ground.',
      synonyms: ['shrub', 'thicket', 'hedge'],
      antonyms: ['tree', 'clearing', 'grassland'],
      exampleSentences: [
        { en: 'The rabbit quickly disappeared into a thick bush to hide from the fox.', ko: '토끼는 여우를 피해 울창한 덤불 속으로 빠르게 사라졌다.' },
        { en: 'We planted a rose bush in the front garden to improve the view.', ko: '우리는 경관을 좋게 하기 위해 앞마당에 장미 덤불을 심었다.' },
      ],
    }
  ),
  word('business', '직업', 2, 'noun',
    ['취미', '휴식', '무직', '은퇴', '공부', '놀이', '여가', '휴가', '방학', '게으름'],
    tips({
      etymology: '바쁜 상태를 뜻하는 busy에 명사형 접미사 ness가 붙어, 늘 바쁘게 일하는 상태인 생업이나 직업을 의미하게 되었습니다.',
      visual: '정장을 입고 서류 가방을 든 채 바쁘게 사무실로 출근하는 직장인의 모습을 상상해 보세요.',
      soundAlike: '비즈니스(business) 발음이 \'비지(busy)니\'와 비슷하죠? \'바쁘니?\'라고 물어볼 만큼 바쁜 일이 바로 직업입니다.',
      context: '주로 영리 목적으로 운영되는 회사나 상업적 활동뿐만 아니라, 개인이 종사하는 전문적인 일이나 직무를 뜻할 때 쓰입니다.',
      synonymAntonym: 'occupation이나 profession과 함께 외우면 직업의 의미가 더 명확해지며, leisure와는 반대되는 개념입니다.',
    }),
    {
      definition: 'the regular occupation or profession that a person performs to earn a living',
      synonyms: ['occupation', 'profession', 'vocation'],
      antonyms: ['leisure', 'recreation', 'pastime'],
      exampleSentences: [
        { en: 'She decided to start her own small company after years in the fashion industry.', ko: '그녀는 패션 업계에서 수년간 일한 후 자신의 작은 회사를 차리기로 결심했다.' },
        { en: 'It is a pleasure to do work with someone as professional as you.', ko: '당신처럼 전문적인 분과 함께 일하게 되어 기쁩니다.' },
      ],
    }
  ),
  word('but', '그러나', 3, 'conjunction',
    ['그리고', '그래서', '또한', '따라서', '또는', '게다가', '즉', '마침내', '비록', '결국'],
    tips({
      etymology: '고대 영어 \'be-utan\'에서 유래했으며, \'바깥에\'라는 의미에서 \'제외하고\'를 거쳐 대조를 나타내는 접속사가 되었습니다.',
      visual: '직진하던 화살표가 갑자기 꺾여 반대 방향을 가리키는 이미지를 떠올려 보세요.',
      soundAlike: '우리말 \'벗\'과 발음이 비슷하죠? \'친구(벗)와 의견이 다르지만(but) 친하다\'라고 외워보세요.',
      context: '앞에서 긍정적인 말을 했다면 뒤에는 부정적인 내용이 올 때 주로 사용됩니다.',
      synonymAntonym: '유사한 의미의 however와 반대되는 흐름을 만드는 and를 함께 비교하면 좋습니다.',
    }),
    {
      definition: 'Used to introduce a statement that contrasts with or modifies what has just been said.',
      synonyms: ['however', 'yet', 'nevertheless'],
      antonyms: ['and', 'furthermore', 'moreover'],
      exampleSentences: [
        { en: 'It was a very small car, it was surprisingly spacious inside.', ko: '그것은 매우 작은 차였지만, 실내는 놀라울 정도로 넓었다.' },
        { en: 'I wanted to go to the party, my parents wouldn\'t let me.', ko: '나는 파티에 가고 싶었지만, 부모님이 허락하지 않으셨다.' },
      ],
    }
  ),
  word('butcher', '정육점주인', 5, 'noun',
    ['과일장수', '빵장수', '약사', '의사', '교사', '농부', '어부', '요리사', '웨이터', '손님'],
    tips({
      etymology: '고대 프랑스어 \'bouchier\'에서 유래했으며, 원래 숫염소(buck)를 잡는 사람을 뜻했습니다.',
      visual: '하얀 앞치마를 두르고 커다란 칼로 고기를 손질하는 정육점 주인의 모습을 상상하세요.',
      soundAlike: '\'부처\'님처럼 자비로운 마음으로 고기를 넉넉히 썰어주는 정육점 아저씨를 떠올려 보세요.',
      context: '고기를 사러 정육점에 갔을 때 가장 먼저 마주하게 되는 전문가를 지칭할 때 쓰입니다.',
      synonymAntonym: '고기를 다루는 meat cutter와 비슷하며, 고기를 먹지 않는 vegetarian과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A person whose trade is cutting up and selling meat in a shop.',
      synonyms: ['meat cutter', 'slaughterer', 'meat vendor'],
      antonyms: ['vegetarian', 'vegan', 'herbivore'],
      exampleSentences: [
        { en: 'The local shopkeeper recommended a specific cut of beef for the stew.', ko: '동네 정육점 주인은 찌개용으로 특정 소고기 부위를 추천해 주었습니다.' },
        { en: 'He asked the professional to slice the ham as thinly as possible.', ko: '그는 전문가에게 햄을 가능한 한 얇게 썰어달라고 요청했습니다.' },
      ],
    }
  ),
  word('buy', '사다', 1, 'verb',
    ['팔다', '주다', '바꾸다', '기부하다', '내다', '환불하다', '반품하다', '취소하다', '빌리다', '잃어버리다'],
    tips({
      etymology: '고대 영어 \'bycgan\'에서 유래하여 대가를 지불하고 물건을 얻는 행위를 뜻하게 되었습니다.',
      visual: '상점에서 물건을 고른 뒤 지갑에서 카드를 꺼내 결제하는 모습을 상상해 보세요.',
      soundAlike: '안녕을 뜻하는 \'Bye\'와 발음이 같으니, 물건을 사고 가게를 떠나며 인사하는 장면을 떠올려보세요.',
      context: '일상적인 쇼핑뿐만 아니라 아이디어나 제안을 믿고 받아들일 때도 사용됩니다.',
      synonymAntonym: '구매를 뜻하는 purchase와 반대 개념인 sell을 함께 기억하면 유용합니다.',
    }),
    {
      definition: 'to acquire possession of something in exchange for payment',
      synonyms: ['purchase', 'acquire', 'procure'],
      antonyms: ['sell', 'vend', 'market'],
      exampleSentences: [
        { en: 'I need to go to the grocery store to get some fresh vegetables for dinner.', ko: '저녁 식사를 위해 신선한 채소를 좀 사러 식료품점에 가야 해요.' },
        { en: 'She decided to use her savings to get a new laptop for school.', ko: '그녀는 학교에서 사용할 새 노트북을 사기 위해 저축한 돈을 쓰기로 결정했습니다.' },
      ],
    }
  ),
  word('buzz', '윙윙거리다', 6, 'verb',
    ['침묵하다', '속삭이다', '정지하다', '응시하다', '부딪히다', '떨어지다', '기어오르다', '미끄러지다', '폭발하다', '흩어지다'],
    tips({
      etymology: '벌이 날아다닐 때 내는 소리를 흉내 낸 의성어에서 유래되었습니다.',
      visual: '귀 근처에서 벌 한 마리가 날개를 빠르게 저으며 맴도는 모습을 상상해 보세요.',
      soundAlike: '단어 끝의 \'zz\' 발음이 실제 벌이 내는 \'즈으으\' 소리와 매우 흡사합니다.',
      context: '벌레가 날아다니는 소리뿐만 아니라 사람들이 흥분해서 웅성거리는 상황에도 쓰입니다.',
      synonymAntonym: 'hum이나 drone은 비슷한 낮은 소리를 뜻하지만, silence는 완전한 정적을 뜻합니다.',
    }),
    {
      definition: 'to make a low continuous humming sound like that of a bee or a machine',
      synonyms: ['hum', 'drone', 'whir'],
      antonyms: ['silence', 'quiet', 'stillness'],
      exampleSentences: [
        { en: 'A swarm of bees began to fly around the garden with a loud noise.', ko: '벌 떼가 큰 소리로 윙윙거리며 정원 주변을 날아다니기 시작했다.' },
        { en: 'The refrigerator started to make a strange vibrating sound in the middle of the night.', ko: '한밤중에 냉장고가 이상하게 윙윙거리는 소리를 내기 시작했다.' },
      ],
    }
  ),
  word('by', '곁에', 2, 'preposition',
    ['멀리', '건너', '반대편', '밖에', '위에', '아래에', '앞에', '뒤에', '가까이', '안에'],
    tips({
      etymology: '고대 영어 \'bi\'에서 유래하여 \'근처에\' 또는 \'주변에\'라는 물리적 위치를 나타냅니다.',
      visual: '강가 바로 옆에 세워진 오두막집(a house by the river)을 상상해 보세요.',
      soundAlike: '\'바이\'라고 발음하며, 옆에 있는 사람에게 \'바이바이\' 손을 흔드는 모습을 떠올리세요.',
      context: '위치뿐만 아니라 수단(~에 의해서)이나 기한(~까지)을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'beside와 유사하며, 멀리 떨어져 있음을 뜻하는 far from과는 반대됩니다.',
    }),
    {
      definition: 'located next to or very close to something; performed through the agency of; no later than a specific time',
      synonyms: ['beside', 'near', 'alongside'],
      antonyms: ['far', 'distant', 'away'],
      exampleSentences: [
        { en: 'She sat quietly by the window watching the rain fall.', ko: '그녀는 창가 옆에 조용히 앉아 비가 내리는 것을 지켜보았다.' },
        { en: 'Please make sure to finish the report by tomorrow morning.', ko: '내일 아침까지는 반드시 보고서를 끝내도록 하세요.' },
      ],
    }
  ),
  word('cab', '택시', 7, 'noun',
    ['버스', '기차', '비행기', '배', '자전거', '오토바이', '트럭', '헬리콥터', '지하철', '유모차'],
    tips({
      etymology: '마차를 뜻하는 cabriolet에서 유래하여, 오늘날 승객을 태우는 영업용 차량을 뜻하게 되었습니다.',
      visual: '노란색 차체 위에 \'TAXI\' 대신 \'CAB\'이라고 적힌 뉴욕의 택시 풍경을 상상해 보세요.',
      soundAlike: '운전석 공간인 \'캡\'과 발음이 같으므로, 기사가 앉아 있는 앞좌석 공간을 떠올리면 쉽습니다.',
      context: '미국이나 영국에서 길거리에서 차를 잡거나 예약할 때 주로 사용하는 구어체 표현입니다.',
      synonymAntonym: 'taxi와 같은 뜻이며, 대중교통인 bus나 train과는 이용 방식에서 대조를 이룹니다.',
    }),
    {
      definition: 'A car with a driver that you pay to take you from one place to another.',
      synonyms: ['taxi', 'taxicab', 'hackney'],
      antonyms: ['bus', 'train', 'subway'],
      exampleSentences: [
        { en: 'We decided to take a cab home because it was raining heavily.', ko: '비가 너무 많이 와서 우리는 택시를 타고 집에 가기로 했다.' },
        { en: 'The driver waited outside for ten minutes before we came out.', ko: '우리가 나오기 전까지 택시 기사가 밖에서 10분 동안 기다렸다.' },
      ],
    }
  ),
  word('call', '부르다', 3, 'verb',
    ['침묵하다', '무시하다', '속삭이다', '거절하다', '숨기다', '기다리다', '듣다', '잊다', '지우다', '멀어지다'],
    tips({
      etymology: '고대 노르웨이어 \'kalla\'에서 유래하여 목소리를 크게 내어 누군가를 부르는 행위를 뜻합니다.',
      visual: '멀리 있는 친구를 향해 손을 입가에 대고 크게 소리치는 모습을 상상해 보세요.',
      soundAlike: '전화벨이 울릴 때 \'콜\' 소리가 난다고 생각하면 전화하다라는 뜻과 연결하기 쉽습니다.',
      context: '누군가의 이름을 부르거나 도움을 요청할 때, 혹은 전화를 걸 때 주로 사용되는 동사입니다.',
      synonymAntonym: 'shout와 유사하지만 더 일상적이며, 반대로 아무 말도 하지 않는 silence와 대조됩니다.',
    }),
    {
      definition: 'to use your voice to get someone\'s attention or to contact someone by telephone',
      synonyms: ['summon', 'shout', 'phone'],
      antonyms: ['whisper', 'ignore', 'silence'],
      exampleSentences: [
        { en: 'Please give me a ring if you need any help with your homework.', ko: '숙제하는 데 도움이 필요하면 나에게 전화해 줘.' },
        { en: 'I heard someone shout my name from across the busy street.', ko: '번잡한 거리 건너편에서 누군가 내 이름을 부르는 소리를 들었다.' },
      ],
    }
  ),
  word('can', '할 수 있다', 1, 'modal',
    ['못하다', '하지 말다', '불가능하다', '금지되다', '어렵다', '불가능', '할 수 없다', '하지 않다', '거절하다', '포기하다'],
    tips({
      etymology: '고대 영어 \'cunnan(알다, 할 줄 알다)\'에서 유래하여 지식이나 능력을 갖추고 있음을 나타냅니다.',
      visual: '엄지손가락을 치켜세우며 \'I can do it!\'이라고 외치는 자신감 넘치는 모습을 상상하세요.',
      soundAlike: '음료수가 든 \'캔\'을 따는 소리처럼 시원하게 무언가를 해내는 능력을 연결해 보세요.',
      context: '능력뿐만 아니라 \'Can I go now?\'처럼 허락을 구하거나 가능성을 물을 때도 자주 쓰입니다.',
      synonymAntonym: 'be able to와 비슷하지만 더 짧고 강한 느낌이며, 반대말인 cannot은 강한 부정이나 금지를 뜻합니다.',
    }),
    {
      definition: 'to have the ability, power, or skill needed to do something',
      synonyms: ['be able to', 'be capable of', 'manage to'],
      antonyms: ['cannot', 'be unable to', 'fail to'],
      exampleSentences: [
        { en: 'She is very talented and can speak four different languages fluently.', ko: '그녀는 매우 재능이 있어서 4개 국어를 유창하게 할 수 있습니다.' },
        { en: 'If you finish your homework early, you can go out and play with your friends.', ko: '숙제를 일찍 끝내면 밖에 나가서 친구들과 놀아도 좋다.' },
      ],
    }
  ),
  word('cancel', '취소하다', 4, 'verb',
    ['관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다'],
    tips({
      etymology: '라틴어 cancellare에서 유래되었으며, 이는 격자무늬(lattice)를 그려 글자를 지우는 행위를 의미합니다.',
      visual: '예약된 일정표 위에 커다란 빨간색 X표를 긋는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'캔슬\'과 비슷하며, 무언가를 캔(can) 속에 넣어버리고 슬(seul)쩍 없애는 느낌으로 기억하세요.',
      context: '비행기 연착, 공연 예약, 혹은 구독 서비스를 중단할 때 가장 흔히 사용되는 단어입니다.',
      synonymAntonym: 'call off와 유의어 관계이며, 반대로 계획대로 진행하는 confirm이나 continue와 대조됩니다.',
    }),
    {
      definition: 'to decide that a planned event will not take place or to terminate a formal agreement',
      synonyms: ['abort', 'nullify', 'revoke'],
      antonyms: ['confirm', 'approve', 'enforce'],
      exampleSentences: [
        { en: 'The outdoor concert was called off because of the heavy rain.', ko: '폭우 때문에 야외 콘서트가 취소되었습니다.' },
        { en: 'I need to call the hotel to void my reservation for tonight.', ko: '오늘 밤 예약을 취소하기 위해 호텔에 전화를 해야 합니다.' },
      ],
    }
  ),
  word('candidate', '지원자', 5, 'noun',
    ['채용자', '면접관', '고객', '경쟁자', '동료', '상사', '퇴직자', '무직자', '외부인', '제삼자'],
    tips({
      etymology: '라틴어 candidatus에서 유래했으며, 고대 로마에서 공직 출마자들이 깨끗함을 상징하는 \'하얀(candidus)\' 토가를 입었던 것에서 시작되었습니다.',
      visual: '선거 유세 차량 위에서 하얀 띠를 두르고 시민들에게 손을 흔들며 지지를 호소하는 사람을 상상해 보세요.',
      soundAlike: '\'캔디(candy) 데이트\'라고 발음해 보세요. 사탕을 주며 데이트 신청을 하는 \'구혼자\' 혹은 \'지원자\'의 모습을 떠올리면 쉽습니다.',
      context: '취업 시장에서는 일자리를 찾는 사람을, 정치권에서는 선거에 출마한 입후보자를 가리킬 때 주로 쓰입니다.',
      synonymAntonym: '유의어인 applicant는 주로 서류 지원자를, nominee는 지명된 후보를 뜻하며 반의어인 incumbent는 현재 직위에 있는 사람을 뜻합니다.',
    }),
    {
      definition: 'a person who is competing for a specific job, position, or prize in an election or selection process',
      synonyms: ['applicant', 'nominee', 'contender'],
      antonyms: ['incumbent', 'employer', 'recruiter'],
      exampleSentences: [
        { en: 'The search committee interviewed each potential candidate for the managerial position.', ko: '선발 위원회는 관리직 직책에 대한 각 잠재적 지원자들을 면접했습니다.' },
        { en: 'She is considered a strong candidate for the upcoming presidential election.', ko: '그녀는 다가오는 대통령 선거의 강력한 후보자로 거론되고 있습니다.' },
      ],
    }
  ),
  word('candy', '사탕과자', 2, 'noun',
    ['채소', '과일', '고기', '빵', '쌀', '국물', '김치', '소금', '후추', '겨자'],
    tips({
      etymology: '아랍어 \'qandi(설탕으로 만든)\'에서 유래하여 달콤한 결정체를 뜻하게 되었습니다.',
      visual: '알록달록한 포장지에 싸인 동그란 막대 사탕이 입안에서 녹는 모습을 상상하세요.',
      soundAlike: '\'캔디\'라는 발음은 만화 주인공 \'들장미 소녀 캔디\'의 이름과 같아 기억하기 쉽습니다.',
      context: '할로윈 데이에 아이들이 집집마다 방문하며 바구니에 가득 담아가는 간식입니다.',
      synonymAntonym: '달콤한 설탕 과자를 뜻하는 단어들과 쓴맛을 내는 식재료를 대비해 보세요.',
    }),
    {
      definition: 'A small piece of sweet food made mostly from sugar or syrup, often flavored with fruit or chocolate.',
      synonyms: ['confectionery', 'sweets', 'treat'],
      antonyms: ['vegetable', 'medicine', 'savory'],
      exampleSentences: [
        { en: 'The little boy chose a colorful piece of peppermint from the jar.', ko: '어린 소년은 병에서 알록달록한 박하 맛 사탕 하나를 골랐다.' },
        { en: 'Eating too much sugar can lead to cavities in your teeth.', ko: '설탕 과자를 너무 많이 먹으면 치아에 충치가 생길 수 있다.' },
      ],
    }
  ),
  word('canvas', '돛베', 6, 'noun',
    ['나일론', '비닐', '금속', '나무', '유리', '플라스틱', '종이', '가죽', '실크', '벽돌'],
    tips({
      etymology: '대마(cannabis)로 만든 거친 천이라는 어원에서 유래하여 질긴 직물을 뜻하게 되었습니다.',
      visual: '배의 커다란 돛이나 화가가 그림을 그리기 위해 이젤 위에 올려둔 하얀 천을 상상해 보세요.',
      soundAlike: '캠핑 가서 쓰는 \'캔버스\' 텐트나 튼튼한 \'캔버스\' 운동화의 재질을 떠올리면 쉽습니다.',
      context: '주로 튼튼함이 필요한 돛, 텐트, 가방 또는 유화용 화폭을 설명할 때 사용됩니다.',
      synonymAntonym: '유의어로는 sailcloth가 있으며, 반의어로는 비단처럼 아주 얇고 부드러운 소재들이 대조를 이룹니다.',
    }),
    {
      definition: 'A heavy, closely woven fabric used for making sails, tents, or as a surface for oil paintings.',
      synonyms: ['sailcloth', 'tarp', 'textile'],
      antonyms: ['silk', 'gossamer', 'chiffon'],
      exampleSentences: [
        { en: 'The sailors hoisted the heavy sheets of fabric to catch the wind.', ko: '선원들은 바람을 받기 위해 무거운 돛베를 올렸다.' },
        { en: 'The artist spent hours preparing the white surface before applying any paint.', ko: '화가는 물감을 칠하기 전 하얀 화폭을 준비하는 데 몇 시간을 보냈다.' },
      ],
    }
  ),
  word('cap', '모자', 3, 'noun',
    ['신발', '양말', '장갑', '스카프', '벨트', '바지', '코트', '우산', '가방', '안경'],
    tips({
      etymology: '라틴어 \'cappa\'에서 유래했으며, 머리를 덮는 덮개라는 의미를 담고 있습니다.',
      visual: '야구 선수가 경기 중에 앞부분에 챙이 달린 모자를 쓰고 있는 모습을 상상해 보세요.',
      soundAlike: '병 뚜껑을 딸 때 \'캡\' 소리가 나는 것처럼, 머리나 병의 윗부분을 닫는 이미지를 떠올리세요.',
      context: '스포츠 경기나 캐주얼한 외출 시 머리를 보호하거나 멋을 내기 위해 주로 착용합니다.',
      synonymAntonym: 'hat보다는 주로 챙이 있는 형태를 말하며, 반대로 머리를 드러내는 상태와 대비됩니다.',
    }),
    {
      definition: 'A type of soft head covering that typically has a curved peak at the front and no brim.',
      synonyms: ['hat', 'headgear', 'beret'],
      antonyms: ['base', 'bottom', 'floor'],
      exampleSentences: [
        { en: 'He pulled his baseball headwear down low to shield his eyes from the bright sun.', ko: '그는 눈부신 햇빛으로부터 눈을 보호하기 위해 야구 모자를 낮게 눌러 썼다.' },
        { en: 'Don\'t forget to put the plastic lid back on the bottle after you finish drinking.', ko: '음료를 다 마신 후에는 병 뚜껑을 다시 닫는 것을 잊지 마세요.' },
      ],
    }
  ),
  word('cape', '곶', 7, 'noun',
    ['만', '해협', '내륙', '섬', '산맥', '평원', '사막', '호수', '강', '협곡'],
    tips({
      etymology: '라틴어 caput(머리)에서 유래하여 바다로 머리를 내민 듯한 땅의 모양을 뜻합니다.',
      visual: '바다 한가운데로 뾰족하게 튀어나온 육지의 끝부분을 상상해 보세요.',
      soundAlike: '슈퍼맨이 입는 망토(cape)처럼 육지가 바다 위로 길게 늘어진 모습과 연결하세요.',
      context: '지리학이나 항해 관련 지문에서 배가 돌아가는 지점으로 자주 등장합니다.',
      synonymAntonym: '유사한 지형인 promontory와 대조되는 지형인 bay를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'A point of land that extends into a river, lake, or ocean.',
      synonyms: ['promontory', 'headland', 'peninsula'],
      antonyms: ['bay', 'gulf', 'inlet'],
      exampleSentences: [
        { en: 'The lighthouse stands on the edge of the rocky cape to warn approaching ships.', ko: '등대는 다가오는 배들에게 경고하기 위해 바위투성이 곶의 끝에 서 있다.' },
        { en: 'Sailors had difficulty navigating around the southern cape during the storm.', ko: '선원들은 폭풍우가 치는 동안 남쪽 곶을 돌아 항해하는 데 어려움을 겪었다.' },
      ],
    }
  ),
  word('capital', '수도의', 4, 'adjective',
    ['지방의', '사소한', '부수적인', '민간의', '하급의', '임시의', '개별적인', '비공식적인', '말단의', '소문자의'],
    tips({
      etymology: '라틴어 \'caput(머리)\'에서 유래하여 한 국가나 단체의 머리가 되는 중심지를 의미합니다.',
      visual: '지도 정중앙에 왕관을 쓰고 있는 거대한 도시의 모습을 상상해 보세요.',
      soundAlike: '\'캐피털\' 발음이 \'캐내다\'와 비슷하니, 나라의 중심지에서 보물을 캐낸다고 생각하세요.',
      context: '정치적 중심지뿐만 아니라 대문자나 사형 제도와 관련된 엄중한 상황에서도 쓰입니다.',
      synonymAntonym: '가장 중요한 것을 뜻하는 chief와 반대되는 개념인 minor를 함께 기억하세요.',
    }),
    {
      definition: 'relating to the city that functions as the seat of government and administrative center of a country or region',
      synonyms: ['chief', 'principal', 'central'],
      antonyms: ['minor', 'secondary', 'subordinate'],
      exampleSentences: [
        { en: 'The government is planning to move the administrative functions to the capital city.', ko: '정부는 행정 기능을 수도로 이전할 계획을 세우고 있다.' },
        { en: 'London is the capital city of the United Kingdom and its largest financial hub.', ko: '런던은 영국의 수도이자 가장 큰 금융 중심지이다.' },
      ],
    }
  ),
  word('caption', '표제', 10, 'noun',
    ['본문', '각주', '빈칸', '삽화', '표', '차트', '인덱스', '목차', '부록', '주석'],
    tips({
      etymology: '라틴어 \'capere(잡다)\'에서 유래하여, 독자의 시선을 사로잡는 머리말이나 제목을 뜻하게 되었습니다.',
      visual: '인스타그램 게시물 아래에 적힌 짧은 설명글이나 신문 사진 밑의 설명을 상상해 보세요.',
      soundAlike: '캡틴(Captain)이 배의 머리이듯, 캡션(Caption)은 글의 머리나 사진의 설명을 담당합니다.',
      context: '영화 자막이나 뉴스 화면 하단의 짧은 설명 문구를 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'heading과 유사하며, 본문을 뜻하는 body text와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A brief explanation or title accompanying an illustration, photograph, or video.',
      synonyms: ['heading', 'subtitle', 'inscription'],
      antonyms: ['body', 'content', 'narrative'],
      exampleSentences: [
        { en: 'The photograph was published with a brief description underneath it.', ko: '그 사진은 아래에 짧은 표제와 함께 게재되었습니다.' },
        { en: 'Please add a descriptive title to each diagram in your report.', ko: '보고서의 각 도표에 설명이 담긴 표제를 추가해 주세요.' },
      ],
    }
  ),
  word('care', '걱정', 1, 'noun',
    ['무관심', '냉담', '방심', '태만', '무시', '경시', '태평', '안심', '만족', '평온'],
    tips({
      etymology: '고대 영어 caru에서 유래하여 슬픔, 근심, 고통이라는 뿌리 깊은 감정을 나타냅니다.',
      visual: '중요한 시험이나 결과를 앞두고 머리를 싸매며 고민하는 사람의 모습을 상상해 보세요.',
      soundAlike: '소중한 물건을 \'케어\'한다고 할 때, 그만큼 마음을 쓰고 걱정한다는 점을 연결하세요.',
      context: '주로 책임감이 따르는 일이나 사랑하는 사람에 대해 마음을 졸이는 상황에서 쓰입니다.',
      synonymAntonym: '걱정이라는 뜻의 anxiety와 반대되는 개념인 무관심 indifference를 함께 기억하세요.',
    }),
    {
      definition: 'a feeling of anxiety or concern about a situation or a person',
      synonyms: ['anxiety', 'concern', 'worry'],
      antonyms: ['indifference', 'disregard', 'unconcern'],
      exampleSentences: [
        { en: 'The heavy responsibilities of his new job filled him with care.', ko: '새 직책의 무거운 책임감은 그를 걱정으로 가득 차게 만들었다.' },
        { en: 'She was free from all care and enjoyed her vacation thoroughly.', ko: '그녀는 모든 근심에서 벗어나 휴가를 온전히 즐겼다.' },
      ],
    }
  ),
  word('carrot', '당근', 2, 'noun',
    ['양파', '감자', '고추', '상추', '배추', '오이', '토마토', '콩', '쌀', '밀'],
    tips({
      etymology: '그리스어 \'karoton\'에서 유래했으며, 뿔 모양을 닮은 뿌리 채소를 뜻합니다.',
      visual: '흙에서 갓 뽑아낸 선명한 주황색의 길쭉한 뿌리 채소를 상상해 보세요.',
      soundAlike: '\'캐럿\'이라고 발음되는데, 보석의 단위인 \'carat\'과 발음이 같아 귀한 채소라고 생각하면 쉽습니다.',
      context: '요리 재료뿐만 아니라, 보상과 처벌을 의미하는 \'당근과 채찍\' 비유에서도 자주 쓰입니다.',
      synonymAntonym: '식물학적으로는 뿌리 채소류에 속하며, 가공된 설탕과는 대조적인 천연의 단맛을 가집니다.',
    }),
    {
      definition: 'A long, tapering, orange-colored root eaten as a vegetable, either raw or cooked.',
      synonyms: ['root vegetable', 'orange root', 'tapered vegetable'],
      antonyms: ['leafy green', 'fruit', 'grain'],
      exampleSentences: [
        { en: 'She chopped the vegetable into small cubes to put into the beef stew.', ko: '그녀는 소고기 스튜에 넣기 위해 그 채소를 작은 입방체 모양으로 썰었습니다.' },
        { en: 'Eating this crunchy orange root is known to be very beneficial for eye health.', ko: '이 아삭한 주황색 뿌리 채소를 먹는 것은 눈 건강에 매우 유익한 것으로 알려져 있습니다.' },
      ],
    }
  ),
  word('carry', '나르다', 3, 'verb',
    ['놓다', '내려놓다', '버리다', '두다', '멈추다', '떨어뜨리다', '잃다', '남기다', '제자리에 두다', '가만히 두다'],
    tips({
      etymology: '라틴어 carrus(수레)에서 유래하여 물건을 싣고 이동한다는 느낌을 담고 있습니다.',
      visual: '양손에 무거운 짐을 가득 들고 계단을 올라가는 배달원의 모습을 상상해 보세요.',
      soundAlike: '캐리어(carrier) 가방을 끌고 공항에서 짐을 옮기는 소리를 떠올려 보세요.',
      context: '가방이나 물건을 옮길 때뿐만 아니라, 질병을 옮기거나 소식을 전할 때도 사용됩니다.',
      synonymAntonym: 'transport와 함께 외우고, 반대말인 drop(떨어뜨리다)과 비교하면 기억하기 쉽습니다.',
    }),
    {
      definition: 'to support the weight of an object and move it from one location to another',
      synonyms: ['transport', 'convey', 'bear'],
      antonyms: ['drop', 'abandon', 'leave'],
      exampleSentences: [
        { en: 'Could you help me move these heavy boxes to the car?', ko: '이 무거운 상자들을 차로 옮기는 것을 도와주시겠어요?' },
        { en: 'Most people in the city always have a smartphone in their pockets.', ko: '도시의 대부분 사람들은 항상 주머니에 스마트폰을 지니고 다닙니다.' },
      ],
    }
  ),
  word('cart', '짐마차', 1, 'noun',
    ['자동차', '트럭', '버스', '기차', '비행기', '배', '자전거', '오토바이', '지하철', '헬리콥터'],
    tips({
      etymology: '고대 노르웨이 어원 \'kartr\'에서 유래하여 물건을 실어 나르는 틀을 의미하게 되었습니다.',
      visual: '대형 마트에서 식료품을 가득 담고 밀고 다니는 쇼핑카트의 바퀴와 손잡이를 상상해 보세요.',
      soundAlike: '우리말 \'카트\'와 발음이 똑같아 마트에서 쓰는 수레를 떠올리면 쉽습니다.',
      context: '농장에서 말을 이용해 농작물을 옮기거나 시장에서 짐을 옮길 때 주로 등장하는 단어입니다.',
      synonymAntonym: 'wagon이나 barrow와 비슷하며, 엔진이 달린 car와는 대조적인 운송 수단입니다.',
    }),
    {
      definition: 'a heavy open vehicle with two or four wheels, typically pulled by an animal or pushed by a person to transport goods',
      synonyms: ['wagon', 'trolley', 'barrow'],
      antonyms: ['car', 'truck', 'engine'],
      exampleSentences: [
        { en: 'The farmer loaded the wooden vehicle with fresh vegetables to take to the market.', ko: '농부는 시장에 가져갈 신선한 채소들을 나무 짐마차에 실었습니다.' },
        { en: 'She pushed the metal basket through the supermarket aisles to collect her groceries.', ko: '그녀는 식료품을 담기 위해 슈퍼마켓 통로 사이로 금속 카트를 밀었습니다.' },
      ],
    }
  ),
  word('carve', '조각하다', 5, 'verb',
    ['반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다', '시작하다', '중단하다', '선택하다'],
    tips({
      etymology: '고대 영어 \'ceorfan\'에서 유래했으며, 원래 \'자르다\'나 \'베다\'라는 뜻을 가지고 있습니다.',
      visual: '나무판자나 커다란 돌덩어리 앞에 조각칼을 들고 정교하게 모양을 깎아내는 예술가의 모습을 상상하세요.',
      soundAlike: '발음이 \'칼(knife)\'과 비슷하게 시작하므로, 칼로 무언가를 깎아내는 장면을 연상하면 쉽습니다.',
      context: '추수감사절에 구운 고기를 얇게 썰거나, 나무에 이름을 새길 때 주로 사용하는 단어입니다.',
      synonymAntonym: '무언가를 깎아서 만드는 sculpt와 비슷하지만, 아무것도 건드리지 않는 neglect와는 반대됩니다.',
    }),
    {
      definition: 'to create a shape or design by cutting into a hard material like wood or stone, or to slice cooked meat',
      synonyms: ['sculpt', 'engrave', 'chisel'],
      antonyms: ['combine', 'mend', 'neglect'],
      exampleSentences: [
        { en: 'The artist spent months trying to fashion a beautiful statue out of a single block of marble.', ko: '그 예술가는 대리석 한 덩어리로 아름다운 조각상을 만들기 위해 몇 달을 보냈습니다.' },
        { en: 'It is a tradition for my father to slice the roasted turkey during our family dinner.', ko: '가족 저녁 식사 때 아버지가 구운 칠면조 고기를 얇게 써는 것은 우리의 전통입니다.' },
      ],
    }
  ),
  word('case', '경우', 2, 'noun',
    ['결과', '원인', '이유', '방법', '목적', '계획', '의도', '사실', '증거', '상태'],
    tips({
      etymology: '라틴어 casus에서 유래하여 \'떨어지다\' 혹은 \'발생하다\'라는 의미를 담고 있어 특정한 사건이나 상황을 뜻하게 되었습니다.',
      visual: '변호사가 서류 가방(case)을 열어 특정 사건(case)의 자료를 꺼내는 모습을 상상해 보세요.',
      soundAlike: '물건을 담는 \'케이스\'를 떠올리며, 그 상자 안에 특정한 \'상황\'이나 \'사건\'이 담겨 있다고 연결하세요.',
      context: '법정 드라마에서 \'This case is closed\'라고 하면 \'이 사건(경우)은 종료되었다\'는 뜻으로 쓰입니다.',
      synonymAntonym: '유사한 상황을 뜻하는 instance와 대조되는 개념인 전체를 뜻하는 whole을 함께 기억하세요.',
    }),
    {
      definition: 'a specific instance of something occurring; a particular situation or set of circumstances.',
      synonyms: ['instance', 'situation', 'occurrence'],
      antonyms: ['generality', 'whole', 'universality'],
      exampleSentences: [
        { en: 'In any case, we must finish the project by tomorrow morning.', ko: '어떤 경우라도, 우리는 내일 아침까지 프로젝트를 끝내야 합니다.' },
        { en: 'This is a rare case where the medicine actually worked instantly.', ko: '이것은 약이 실제로 즉각 효과를 나타낸 드문 경우입니다.' },
      ],
    }
  ),
  word('cash', '현금', 3, 'noun',
    ['수표', '카드', '외상', '대출', '채권', '주식', '부채', '예금', '적금', '신용'],
    tips({
      etymology: '이탈리아어 cassa(상자)에서 유래하여 돈을 보관하는 상자라는 의미에서 현금이 되었습니다.',
      visual: '지갑에서 빳빳한 지폐와 동전들을 꺼내어 계산대에 올려두는 모습을 상상하세요.',
      soundAlike: '캐쉬(Cash)는 게임에서 아이템을 살 때 쓰는 유료 화폐를 떠올리면 기억하기 쉽습니다.',
      context: '가게에서 계산할 때 \'Cash or charge?\'라고 물으면 현금인지 카드인지 묻는 것입니다.',
      synonymAntonym: 'currency와는 유의어 관계이며, 나중에 갚기로 하는 credit과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Money in the physical form of coins or banknotes rather than checks or credit cards.',
      synonyms: ['currency', 'legal tender', 'hard money'],
      antonyms: ['credit', 'debt', 'check'],
      exampleSentences: [
        { en: 'The customer paid for the groceries in cash to avoid credit card fees.', ko: '그 고객은 신용카드 수수료를 피하기 위해 식료품 값을 현금으로 지불했다.' },
        { en: 'I don\'t have any cash on me, so I need to find an ATM.', ko: '지금 수중에 현금이 하나도 없어서 현금 자동 입출금기를 찾아야 한다.' },
      ],
    }
  ),
];
