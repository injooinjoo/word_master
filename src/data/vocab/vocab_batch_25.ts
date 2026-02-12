import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch25: VocabItem[] = [
  word('bell', '종', 2, 'noun',
    ['북', '피리', '나팔', '경적', '현악기', '건반', '심벌즈', '탬버린', '실로폰', '하프'],
    tips({
      etymology: '고대 영어 \'belle\'에서 유래했으며, 소리를 내는 금속 기구를 뜻합니다.',
      visual: '교회 꼭대기에 매달린 커다란 황금빛 종이 흔들리는 모습을 상상해 보세요.',
      soundAlike: '전화벨이 \'벨벨\' 울리는 소리를 생각하면 기억하기 쉽습니다.',
      context: '학교 수업의 시작과 끝을 알리거나 문 밖의 손님을 확인할 때 주로 쓰입니다.',
      synonymAntonym: 'chime이나 gong과 비슷하지만, 소리가 나지 않는 상태인 silence와는 반대됩니다.',
    }),
    {
      definition: 'a hollow metal object, typically cup-shaped, that makes a ringing sound when struck',
      synonyms: ['chime', 'gong', 'buzzer'],
      antonyms: ['silence', 'quiet', 'stillness'],
      exampleSentences: [
        { en: 'The church tower has a massive iron instrument that rings every hour.', ko: '교회 탑에는 매 시간마다 울리는 거대한 철제 종이 있습니다.' },
        { en: 'I pressed the button at the door, but I couldn\'t hear any sound inside.', ko: '문 옆의 버튼을 눌렀지만 안에서 초인종 소리가 들리지 않았습니다.' },
      ],
    }
  ),
  word('belong', '속하다', 7, 'verb',
    ['중단하다', '선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다'],
    tips({
      etymology: '고대 영어 be-(강조)와 longian(가까이 가다)이 합쳐져 \'누군가에게 밀접하게 붙어 있다\'는 의미에서 유래했습니다.',
      visual: '퍼즐 조각 하나가 전체 그림의 빈 공간에 딱 들어맞는 모습을 상상해 보세요.',
      soundAlike: '\'비(be)가 롱(long)다리에게 속하다\'처럼 발음을 활용해 소속감을 연상해 보세요.',
      context: '소유물을 나타낼 때나 특정 집단의 일원이 되었을 때, 혹은 물건이 제자리에 있을 때 주로 사용합니다.',
      synonymAntonym: '어딘가에 포함된다는 뜻의 pertain과 반대로 제외되거나 떨어져 나가는 exclude를 함께 기억하세요.',
    }),
    {
      definition: 'to be the property of a person or to be a member of a particular group or organization',
      synonyms: ['pertain', 'relate', 'fit'],
      antonyms: ['exclude', 'leave', 'differ'],
      exampleSentences: [
        { en: 'This ancient book used to be part of a private collection in London.', ko: '이 오래된 책은 런던의 한 개인 소장품에 속해 있었다.' },
        { en: 'She felt a strong need to be part of a community where she felt accepted.', ko: '그녀는 자신이 수용될 수 있는 공동체에 속하고 싶다는 강한 욕구를 느꼈다.' },
      ],
    }
  ),
  word('below', '아래에', 3, 'preposition',
    ['위에', '앞에', '뒤에', '옆에', '밖에', '건너', '가까이', '멀리', '반대편', '안에'],
    tips({
      etymology: '낮음을 뜻하는 low에 접두사 be-가 붙어 \'더 낮은 위치에\'라는 의미가 되었습니다.',
      visual: '계단 아래층에 서 있는 사람이나 책상 밑에 떨어진 펜을 상상해 보세요.',
      soundAlike: '발음이 \'빌로우\'이므로 \'밑으로(below) 빌빌 기어간다\'라고 연상해 보세요.',
      context: '온도계의 수치가 영하로 내려가거나 바다 수면 아래를 표현할 때 자주 쓰입니다.',
      synonymAntonym: 'under와 비슷하게 쓰이지만, above와는 정반대의 위치를 나타냅니다.',
    }),
    {
      definition: 'at a lower level or position than something else',
      synonyms: ['under', 'underneath', 'beneath'],
      antonyms: ['above', 'over', 'overhead'],
      exampleSentences: [
        { en: 'The valley lies thousands of feet the mountain peak.', ko: '그 계곡은 산봉우리에서 수천 피트 아래에 위치해 있다.' },
        { en: 'Please read the instructions provided in the text.', ko: '본문 아래에 제공된 지침을 읽어주세요.' },
      ],
    }
  ),
  word('bend', '구부리다', 4, 'verb',
    ['펴다', '곧게 하다', '뻗다', '당기다', '밀다', '돌리다', '고정하다', '붙이다', '떼다', '잘라내다'],
    tips({
      etymology: '고대 영어 \'bendan\'에서 유래했으며, 활시위를 당겨 나무를 휘게 만드는 동작에서 시작되었습니다.',
      visual: '유연한 빨대나 철사가 \'U\'자 모양으로 휘어지는 모습을 상상해 보세요.',
      soundAlike: '밴드(band)를 세게 잡아당기면 모양이 \'벤드(bend)\'하게 된다고 기억하세요.',
      context: '길이 굽어지는 곳이나 몸을 숙여 물건을 집을 때 주로 사용되는 표현입니다.',
      synonymAntonym: 'curve와 유사하며, 반대로 곧게 펴는 것은 straighten이라고 합니다.',
    }),
    {
      definition: 'to force an object from a straight form into a curved or angular shape',
      synonyms: ['curve', 'flex', 'twist'],
      antonyms: ['straighten', 'unbend', 'extend'],
      exampleSentences: [
        { en: 'You need to stoop down and flex your knees to lift heavy boxes safely.', ko: '무거운 상자를 안전하게 들어 올리려면 몸을 숙이고 무릎을 구부려야 합니다.' },
        { en: 'The metal rod was so strong that no one could change its shape by hand.', ko: '그 금속 막대는 너무 단단해서 아무도 손으로 그것을 구부릴 수 없었습니다.' },
      ],
    }
  ),
  word('beneath', '아래에', 5, 'preposition',
    ['위에', '앞에', '뒤에', '옆에', '밖에', '건너', '가까이', '멀리', '반대편', '안에'],
    tips({
      etymology: '고대 영어 \'be-\'(~에)와 \'neothan\'(아래)이 결합하여 \'낮은 곳에 위치함\'을 뜻하게 되었습니다.',
      visual: '거대한 빙산의 일각 아래, 바닷속에 숨겨진 거대한 얼음 덩어리를 상상해 보세요.',
      soundAlike: '\'비니(be-ni)\'를 쓰고 \'쓰(th)\'러진 사람 발밑에 무언가 깔려 있는 모습을 연상하세요.',
      context: '단순히 물리적 위치뿐만 아니라, 수준이나 가치가 낮음을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'under와 비슷하지만 더 격식 있는 표현이며, 정반대 위치인 above와 함께 기억하세요.',
    }),
    {
      definition: 'in a lower place than something else; extending directly under or below',
      synonyms: ['underneath', 'below', 'under'],
      antonyms: ['above', 'over', 'aloft'],
      exampleSentences: [
        { en: 'The treasure was buried deep the sandy ground of the island.', ko: '보물은 섬의 모래 땅속 깊은 곳에 묻혀 있었다.' },
        { en: 'She sat in the shade of a large oak tree to rest.', ko: '그녀는 휴식을 취하기 위해 커다란 오크 나무 그늘 아래에 앉았다.' },
      ],
    }
  ),
  word('berry', '액과', 6, 'noun',
    ['사과', '복숭아', '포도송이', '줄기', '뿌리', '나뭇잎', '씨앗', '껍질', '꽃가루', '수확'],
    tips({
      etymology: '고대 영어 \'berie\'에서 유래했으며, 작고 즙이 많은 열매를 통칭하는 단어로 발전했습니다.',
      visual: '산딸기나 블루베리처럼 작고 동글동글하며 즙이 꽉 찬 열매의 단면을 상상해 보세요.',
      soundAlike: '발음이 \'베리\'이므로, \'매우(very) 맛있는 베리\'라고 연결해서 기억하면 쉽습니다.',
      context: '주로 잼을 만들거나 요거트의 토핑으로 올라가는 작고 달콤한 과일들을 말할 때 쓰입니다.',
      synonymAntonym: '유사한 열매인 fruit나 drupe와 함께 외우고, 큰 과일인 melon 등과 대비해 보세요.',
    }),
    {
      definition: 'A small, fleshy, and often edible fruit that is typically rounded and brightly colored.',
      synonyms: ['fruit', 'drupe', 'produce'],
      antonyms: ['vegetable', 'root', 'stalk'],
      exampleSentences: [
        { en: 'The children went into the forest to pick wild strawberries and other small fruits.', ko: '아이들은 야생 딸기와 다른 작은 열매들을 따러 숲으로 들어갔다.' },
        { en: 'She added a handful of fresh blueberries to her morning bowl of cereal.', ko: '그녀는 아침 시리얼 그릇에 신선한 블루베리 한 줌을 넣었다.' },
      ],
    }
  ),
  word('beside', '옆에', 1, 'preposition',
    ['앞에', '뒤에', '위에', '아래에', '밖에', '건너', '가까이', '멀리', '반대편', '안에'],
    tips({
      etymology: '고대 영어 be(곁에)와 side(측면)가 결합하여 \'측면 곁에\'라는 의미에서 유래했습니다.',
      visual: '의자 바로 옆에 가방이 놓여 있는 모습을 상상해 보세요.',
      soundAlike: '비사이드(beside) - \'비\'가 내리는 창가 \'사이드(옆)\'에 앉아 있는 모습을 떠올려 보세요.',
      context: '물리적인 위치뿐만 아니라 \'...와 비교하여\'라는 추상적인 의미로도 쓰입니다.',
      synonymAntonym: 'next to와 유의어 관계이며, 멀리 떨어져 있다는 뜻의 far from과 반대됩니다.',
    }),
    {
      definition: 'at the side of or next to a person or an object',
      synonyms: ['next to', 'alongside', 'adjacent to'],
      antonyms: ['far from', 'distant', 'away'],
      exampleSentences: [
        { en: 'She sat down beside him on the sofa.', ko: '그녀는 소파 위 그의 옆에 앉았다.' },
        { en: 'The hotel is located right beside the lake.', ko: '그 호텔은 호수 바로 옆에 위치해 있다.' },
      ],
    }
  ),
  word('bet', '걸다', 7, 'verb',
    ['받다', '주다', '저축하다', '아끼다', '기부하다', '환불받다', '모으다', '쓰다', '얻다', '잃다'],
    tips({
      etymology: '중세 영어 \'betten\'에서 유래했으며, 무언가를 증명하거나 내기한다는 의미를 담고 있습니다.',
      visual: '카지노 테이블 위나 경마장에서 자신의 칩을 특정 칸에 올려두는 장면을 상상해 보세요.',
      soundAlike: '한국어 \'뱉다\'와 발음이 비슷하죠? 내기에서 지면 돈을 뱉어내야 한다고 연상해 보세요.',
      context: '주로 스포츠 경기 결과나 카드 게임에서 돈을 걸 때 사용하며, 확신을 나타내는 구어체로도 쓰입니다.',
      synonymAntonym: '돈을 거는 gamble과 반대로, 위험을 피하고 안전하게 지키는 save를 대조해 보세요.',
    }),
    {
      definition: 'to risk money or a valuable item on the result of a race, game, or other unpredictable event',
      synonyms: ['gamble', 'wager', 'stake'],
      antonyms: ['save', 'guard', 'protect'],
      exampleSentences: [
        { en: 'He decided to place a large sum of money on his favorite horse to win.', ko: '그는 자신이 가장 좋아하는 말이 이기는 것에 거액의 돈을 걸기로 결심했다.' },
        { en: 'I wouldn\'t advise you to risk your savings on such an uncertain outcome.', ko: '그렇게 불확실한 결과에 당신의 저축한 돈을 거는 것은 권하고 싶지 않다.' },
      ],
    }
  ),
  word('betray', '배반하다', 4, 'verb',
    ['충성하다', '보호하다', '지키다', '신뢰하다', '협력하다', '지지하다', '준수하다', '응원하다', '구조하다', '결합하다'],
    tips({
      etymology: '라틴어 \'tradere(넘겨주다)\'에서 유래하여, 적에게 비밀이나 사람을 넘겨주는 행위를 뜻하게 되었습니다.',
      visual: '가장 친한 친구가 내 비밀이 적힌 일기장을 몰래 다른 사람에게 보여주는 장면을 상상해 보세요.',
      soundAlike: '\'비트레이\' 발음이 \'비틀어\'와 비슷하죠? 믿었던 사람의 마음을 비틀어버리는 배신을 떠올려 보세요.',
      context: '주로 신뢰 관계가 있는 친구, 가족, 국가를 저버리거나 감추어야 할 감정을 무심코 드러낼 때 사용합니다.',
      synonymAntonym: '신뢰를 깨는 deceive와 대조적으로, 끝까지 곁을 지키는 support를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'to be disloyal to a person, group, or country by helping an enemy or revealing a secret',
      synonyms: ['deceive', 'double-cross', 'abandon'],
      antonyms: ['defend', 'support', 'uphold'],
      exampleSentences: [
        { en: 'He felt that his closest friend had decided to betray his trust for money.', ko: '그는 가장 친한 친구가 돈을 위해 자신의 신뢰를 저버리기로 했다는 사실에 절망했다.' },
        { en: 'Her trembling hands began to betray how nervous she actually was during the speech.', ko: '그녀의 떨리는 손은 그녀가 연설 중에 실제로 얼마나 긴장했는지를 드러내기 시작했다.' },
      ],
    }
  ),
  word('between', '사이에', 2, 'preposition',
    ['앞에', '뒤에', '위에', '아래에', '밖에', '건너', '가까이', '멀리', '반대편', '안에'],
    tips({
      etymology: '고대 영어 \'be-\'(~에)와 \'tweon\'(둘)이 합쳐져 \'둘 사이에\'라는 의미가 되었습니다.',
      visual: '두 개의 기둥 사이에 서 있는 사람의 모습을 상상해 보세요.',
      soundAlike: '\'비트윈\'은 \'비트(beat)를 윈(win) 사이에 넣다\'라고 소리 내어 기억해 보세요.',
      context: '두 지점 사이의 거리나 두 사람 사이의 관계를 말할 때 주로 쓰입니다.',
      synonymAntonym: '중간을 뜻하는 amid와 대조적으로 바깥쪽을 뜻하는 outside를 함께 기억하세요.',
    }),
    {
      definition: 'in or into the space separating two points, objects, or people',
      synonyms: ['amid', 'betwixt', 'intermediate'],
      antonyms: ['outside', 'beyond', 'around'],
      exampleSentences: [
        { en: 'The small village is located between the mountains and the sea.', ko: '그 작은 마을은 산과 바다 사이에 위치해 있다.' },
        { en: 'We need to keep this secret between the two of us.', ko: '이 비밀은 우리 둘 사이에서만 지켜져야 한다.' },
      ],
    }
  ),
  word('beyond', '저편에', 5, 'preposition',
    ['이쪽에', '가까이에', '내부에', '아래에', '직전에', '주변에', '사이에', '표면에', '중심에', '나란히'],
    tips({
      etymology: '고대 영어 \'be-\'(~에)와 \'geond\'(저쪽에)가 합쳐져 \'저 멀리 건너편\'이라는 의미가 되었습니다.',
      visual: '지평선 너머로 해가 지는 모습을 상상하며 눈앞의 경계선을 넘어선 공간을 떠올려 보세요.',
      soundAlike: '\'비욘드\' 발음이 \'비워둔\'과 비슷하죠? 앞 공간을 비워두고 더 멀리 나아가는 이미지를 연결하세요.',
      context: '물리적인 거리뿐만 아니라 \'능력 밖의\' 또는 \'기대 이상의\' 상황을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'past와 유의어 관계이며, 반대로 가까운 쪽을 뜻하는 within이나 inside와 대조됩니다.',
    }),
    {
      definition: 'at or to the further side of something; further on than; exceeding a limit',
      synonyms: ['past', 'outside', 'further'],
      antonyms: ['within', 'inside', 'nearby'],
      exampleSentences: [
        { en: 'The small village lies just over the hills and further away from the river.', ko: '그 작은 마을은 언덕 너머 강 저편에 위치해 있습니다.' },
        { en: 'The beauty of the sunset was far greater than any description could capture.', ko: '일몰의 아름다움은 그 어떤 묘사로도 담아낼 수 없을 만큼 대단했습니다.' },
      ],
    }
  ),
  word('bible', '성서', 6, 'noun',
    ['소설', '시집', '사전', '신문', '잡지', '논문', '편지', '일기', '만화', '교과서'],
    tips({
      etymology: '그리스어 \'biblion(책)\'에서 유래했습니다. 고대에는 단순히 \'책\'을 의미했으나 시간이 흐르며 가장 중요한 경전을 뜻하게 되었습니다.',
      visual: '교회나 성당의 제단 위에 놓인 두껍고 금박이 입혀진 가죽 표지의 책을 상상해 보세요.',
      soundAlike: '\'바이블\'이라고 발음하며, 우리말에서도 어떤 분야의 권위 있는 지침서를 \'바이블\'이라 부르는 것과 연결하세요.',
      context: '종교적인 맥락 외에도 \'The investor\'s bible\'처럼 특정 분야에서 가장 신뢰받는 책을 비유할 때 쓰입니다.',
      synonymAntonym: '경전이나 성서를 뜻하는 단어들과 대조적으로, 일반적인 세속적 서적이나 허구의 이야기를 뜻하는 단어와 비교해 보세요.',
    }),
    {
      definition: 'The collection of sacred writings of the Christian religion, comprising the Old and New Testaments.',
      synonyms: ['scripture', 'gospel', 'testament'],
      antonyms: ['fiction', 'profanity', 'secularity'],
      exampleSentences: [
        { en: 'She reads a chapter of the holy book every morning before breakfast.', ko: '그녀는 매일 아침 식사 전에 성서 한 장을 읽습니다.' },
        { en: 'This manual is considered the definitive guide for software engineers.', ko: '이 매뉴얼은 소프트웨어 엔지니어들에게 결정적인 지침서로 여겨집니다.' },
      ],
    }
  ),
  word('bicycle', '자전거', 3, 'noun',
    ['오토바이', '자동차', '버스', '기차', '비행기', '스쿠터', '킥보드', '선박', '헬리콥터', '지하철'],
    tips({
      etymology: '둘을 뜻하는 bi-와 바퀴를 뜻하는 cycle이 합쳐져 두 바퀴로 가는 탈것을 의미합니다.',
      visual: '두 개의 커다란 동그라미 바퀴와 그 사이를 잇는 삼각형 프레임을 상상해 보세요.',
      soundAlike: '바이(bi)는 두 개, 시클(cycle)은 사이클링! 두 바퀴가 굴러가는 소리를 연상하세요.',
      context: '환경을 보호하거나 건강을 위해 출퇴근 시 이용하는 친환경 교통수단으로 자주 등장합니다.',
      synonymAntonym: 'bike는 일상적인 줄임말이며, 정반대 개념으로는 엔진이 달린 car나 걸어가는 pedestrian을 떠올릴 수 있습니다.',
    }),
    {
      definition: 'a vehicle with two wheels that you sit on and move by turning pedals with your feet',
      synonyms: ['bike', 'cycle', 'two-wheeler'],
      antonyms: ['automobile', 'truck', 'motorcycle'],
      exampleSentences: [
        { en: 'He decided to ride his new vehicle to work to get some exercise.', ko: '그는 운동을 하기 위해 새 자전거를 타고 출근하기로 결심했다.' },
        { en: 'Please lock your frame to the rack so it doesn\'t get stolen.', ko: '도난당하지 않도록 거치대에 자전거를 잠가 두세요.' },
      ],
    }
  ),
  word('big', '큰', 1, 'adjective',
    ['작은', '조그마한', '미세한', '얇은', '짧은', '낮은', '얕은', '적은', '소규모의', '소형의'],
    tips({
      etymology: '중세 영어 bigge에서 유래하여 힘이 세거나 몸집이 거대한 상태를 나타내게 되었습니다.',
      visual: '거대한 코끼리나 아주 넓은 운동장을 상상하며 그 크기를 느껴보세요.',
      soundAlike: '발음할 때 입을 크게 벌리며 \'빅\'이라고 소리 내면 크다는 느낌이 더 잘 전달됩니다.',
      context: '일상생활에서 물건의 크기뿐만 아니라 중요한 결정이나 큰 사건을 말할 때도 자주 쓰입니다.',
      synonymAntonym: 'large와 유사한 의미를 지니며, 반대되는 개념인 small과 함께 기억하면 효과적입니다.',
    }),
    {
      definition: 'of considerable size, extent, or intensity and larger than average',
      synonyms: ['large', 'huge', 'enormous'],
      antonyms: ['small', 'tiny', 'little'],
      exampleSentences: [
        { en: 'They live in a very large house with a beautiful garden.', ko: '그들은 아름다운 정원이 딸린 아주 큰 집에 삽니다.' },
        { en: 'Winning the championship was a major achievement for the young team.', ko: '챔피언십에서 우승한 것은 그 젊은 팀에게 아주 큰 업적이었습니다.' },
      ],
    }
  ),
  word('bill', '계산서', 2, 'noun',
    ['영수증', '선물', '증서', '편지', '명함', '초대장', '쿠폰', '티켓', '수표', '현금'],
    tips({
      etymology: '라틴어 bulla(봉인된 문서)에서 유래하여 공식적인 청구서나 법안을 뜻하게 되었습니다.',
      visual: '식당에서 식사를 마친 후 웨이터가 가죽 폴더에 담아 가져오는 종이를 상상해 보세요.',
      soundAlike: '오리너구리의 부리(bill)처럼 길게 쭉 뻗어 나온 계산서 종이를 떠올려 보세요.',
      context: '레스토랑이나 카페에서 결제하기 직전 금액을 확인할 때 주로 사용되는 단어입니다.',
      synonymAntonym: 'invoice와 유사하지만, 일상적인 식당이나 공공요금 청구에는 bill이 더 흔히 쓰입니다.',
    }),
    {
      definition: 'a printed or written statement of the money owed for goods or services received',
      synonyms: ['invoice', 'check', 'account'],
      antonyms: ['receipt', 'refund', 'payment'],
      exampleSentences: [
        { en: 'Could we have the bill, please?', ko: '여기 계산서 좀 주시겠어요?' },
        { en: 'The electricity bill was much higher than usual this month.', ko: '이번 달 전기 요금 청구서가 평소보다 훨씬 많이 나왔다.' },
      ],
    }
  ),
  word('billion', '10억', 7, 'noun',
    ['백만', '조', '천만', '십만', '천', '백', '단위', '숫자', '절반', '합계'],
    tips({
      etymology: '접두사 bi-(둘)와 million이 결합하여 과거에는 \'백만의 제곱\'을 의미했으나 현재는 10억을 뜻합니다.',
      visual: '숫자 1 뒤에 0이 아홉 개(1,000,000,000) 붙어 있는 거대한 돈다발 더미를 상상해 보세요.',
      soundAlike: '발음이 \'빌리언\'이므로, 전 세계에서 돈을 \'빌리려\'고 줄을 선 10억 명의 사람들을 떠올려 보세요.',
      context: '국가 예산, 세계 인구, 대기업의 매출액 등 매우 큰 수치를 다룰 때 주로 사용됩니다.',
      synonymAntonym: '백만(million)보다 크고 조(trillion)보다 작은 단위이며, 아주 적은 양을 뜻하는 zero와 대비됩니다.',
    }),
    {
      definition: 'The cardinal number equal to one thousand million, represented by a 1 followed by nine zeros.',
      synonyms: ['gig', 'milliard', 'mountain'],
      antonyms: ['zero', 'nought', 'nothing'],
      exampleSentences: [
        { en: 'The world population has already surpassed eight thousand million people.', ko: '세계 인구는 이미 80억 명을 넘어섰습니다.' },
        { en: 'The tech giant invested over a large sum of money into artificial intelligence research.', ko: '그 IT 거대 기업은 인공지능 연구에 10억 달러 이상의 거액을 투자했습니다.' },
      ],
    }
  ),
  word('bin', '궤', 4, 'noun',
    ['선반', '책장', '탁자', '상자', '서랍', '옷장', '수납장', '진열대', '바구니', '포대'],
    tips({
      etymology: '고대 영어 \'binne\'에서 유래했으며, 원래는 가축의 먹이통이나 큰 바구니를 의미했습니다.',
      visual: '재활용 쓰레기통이나 곡물을 가득 담아두는 커다란 나무 궤짝을 상상해 보세요.',
      soundAlike: '\'빈\' 공간을 채우기 위해 물건을 담아두는 커다란 통이라고 기억하면 쉽습니다.',
      context: '주로 주방에서 곡물을 보관하거나, 공장에서 부품을 분류해 담아둘 때 자주 쓰이는 단어입니다.',
      synonymAntonym: '무언가를 담는 container와 유사하며, 내용물이 없는 상태인 void와는 반대됩니다.',
    }),
    {
      definition: 'A large container or enclosed space used for storing bulk items or waste.',
      synonyms: ['receptacle', 'container', 'vat'],
      antonyms: ['surface', 'expanse', 'void'],
      exampleSentences: [
        { en: 'Please throw the empty plastic bottles into the recycling bin.', ko: '빈 플라스틱 병들은 재활용 수거함에 버려 주세요.' },
        { en: 'The farmer filled the large wooden bin with freshly harvested grain.', ko: '농부는 커다란 나무 궤에 갓 수확한 곡물을 가득 채웠습니다.' },
      ],
    }
  ),
  word('bind', '매다', 5, 'verb',
    ['풀다', '끄르다', '해제하다', '놓다', '떼다', '분리하다', '잘라내다', '풀어주다', '해방하다', '놓아주다'],
    tips({
      etymology: '고대 영어 \'bindan\'에서 유래했으며, 끈이나 줄로 무언가를 묶는 행위를 의미합니다.',
      visual: '두꺼운 밧줄로 상자를 꽁꽁 묶어서 내용물이 나오지 않게 고정하는 모습을 상상해 보세요.',
      soundAlike: '책의 겉표지를 묶어주는 \'바인더(binder)\'를 떠올리면 \'묶다\'라는 의미를 쉽게 기억할 수 있습니다.',
      context: '법적인 계약이나 약속이 사람을 구속하거나 얽매이게 할 때도 자주 사용되는 표현입니다.',
      synonymAntonym: '무언가를 단단히 고정하는 tie와 반대로 자유롭게 풀어주는 loosen을 함께 기억하세요.',
    }),
    {
      definition: 'to tie or fasten something tightly with a cord, rope, or band to hold it together',
      synonyms: ['tie', 'fasten', 'unite'],
      antonyms: ['untie', 'loosen', 'release'],
      exampleSentences: [
        { en: 'The workers used a strong rope to bind the wooden logs together.', ko: '인부들은 나무 통나무들을 함께 묶기 위해 튼튼한 밧줄을 사용했다.' },
        { en: 'The contract will bind the two companies to a long-term partnership.', ko: '그 계약은 두 회사를 장기적인 파트너십으로 묶어줄 것이다.' },
      ],
    }
  ),
  word('biography', '전기', 6, 'noun',
    ['자서전', '소설', '시집', '논문', '수필', '회고록', '일기', '편지', '평전', '역사서'],
    tips({
      etymology: '생명을 뜻하는 \'bio\'와 기록을 뜻하는 \'graphy\'가 합쳐져 한 사람의 생애를 기록한 글이 됩니다.',
      visual: '유명인의 얼굴이 그려진 두꺼운 책 표지와 그 안에 가득한 일대기를 상상해 보세요.',
      soundAlike: '바이오(생물)-그래피(그림/글), 즉 살아있는 사람을 글로 그려낸 것이라고 발음하며 외우세요.',
      context: '위인전이나 유명 연예인의 삶을 다룬 책을 서점에서 찾을 때 이 분류를 볼 수 있습니다.',
      synonymAntonym: '본인이 직접 쓰면 autobiography(자서전)가 되며, 허구의 이야기인 fiction과 대비됩니다.',
    }),
    {
      definition: 'A detailed description of a person\'s life history written by someone else.',
      synonyms: ['life story', 'memoir', 'profile'],
      antonyms: ['fiction', 'fantasy', 'autobiography'],
      exampleSentences: [
        { en: 'She spent years researching for the definitive account of the president\'s life.', ko: '그녀는 대통령의 생애를 다룬 결정적인 전기를 집필하기 위해 수년간 조사했다.' },
        { en: 'The bookstore has a large section dedicated to the life stories of famous scientists.', ko: '그 서점에는 유명 과학자들의 전기를 다루는 큰 섹션이 마련되어 있다.' },
      ],
    }
  ),
  word('biology', '생물학', 7, 'noun',
    ['물리학', '화학', '수학', '지질학', '천문학', '해부학', '유전학', '생태학', '식물학', '동물학'],
    tips({
      etymology: '그리스어 \'bios(생명)\'와 \'logia(학문)\'가 결합되어 생명체를 연구하는 학문을 뜻합니다.',
      visual: '현미경으로 세포를 관찰하거나 숲속에서 동식물을 조사하는 과학자의 모습을 상상해 보세요.',
      soundAlike: '\'바이올로지\'에서 \'바이(Bio)\'는 바이오리듬이나 바이오푸드처럼 생명과 관련된 단어에 자주 쓰입니다.',
      context: '학교 교과 과정이나 의학, 환경 연구 등 생명 현상을 다루는 모든 상황에서 필수적인 단어입니다.',
      synonymAntonym: '생명 과학을 뜻하는 life science와 유사하며, 무생물을 다루는 학문들과 대조됩니다.',
    }),
    {
      definition: 'The branch of science that deals with the physical structure, chemical processes, and evolution of living organisms.',
      synonyms: ['life science', 'natural science', 'ecology'],
      antonyms: ['inorganic chemistry', 'physics', 'abiotics'],
      exampleSentences: [
        { en: 'She decided to major in biology because of her interest in marine life.', ko: '그녀는 해양 생물에 대한 관심 때문에 생물학을 전공하기로 결심했다.' },
        { en: 'The discovery of the new species is a significant breakthrough in evolutionary biology.', ko: '새로운 종의 발견은 진화 생물학에 있어 중요한 돌파구이다.' },
      ],
    }
  ),
  word('birth', '출생', 3, 'noun',
    ['사망', '종료', '끝', '소멸', '이별', '퇴직', '졸업', '만료', '종식', '해산'],
    tips({
      etymology: '고대 영어 \'beorth\'에서 유래했으며, \'bear(아이를 낳다)\'라는 동사의 명사형입니다.',
      visual: '병원 신생아실 유리창 너머로 갓 태어난 아기를 처음 마주하는 감동적인 순간을 상상해 보세요.',
      soundAlike: '생일 케이크를 먹을 때 부르는 \'벌스\'데이(Birthday)의 앞부분 발음과 같습니다.',
      context: '병원 기록이나 인구 통계에서 출생률(birth rate) 혹은 출생지(place of birth) 등의 표현으로 자주 쓰입니다.',
      synonymAntonym: '새로운 시작을 알리는 delivery와 반대되는 끝을 의미하는 death를 함께 기억하세요.',
    }),
    {
      definition: 'the process of being born or the time when a baby comes out of its mother\'s body',
      synonyms: ['childbirth', 'delivery', 'nativity'],
      antonyms: ['death', 'demise', 'passing'],
      exampleSentences: [
        { en: 'The mother gave to a healthy baby boy weighing three kilograms.', ko: '어머니는 몸무게 3킬로그램의 건강한 남동생을 출산했습니다.' },
        { en: 'Please write your date and place of on this application form.', ko: '이 신청서에 귀하의 생년월일과 출생지를 기입해 주세요.' },
      ],
    }
  ),
  word('bishop', '주교', 10, 'noun',
    ['신부', '수사', '목사', '승려', '무당', '군인', '의사', '교사', '판사', '변호사'],
    tips({
      etymology: '그리스어 episkopos에서 유래했으며, \'위에서(epi) 지켜보는 사람(skopos)\'이라는 뜻에서 관리자나 감독관을 의미하게 되었습니다.',
      visual: '체스판 위에서 대각선으로 길게 움직이며 성당의 높은 첨탑처럼 생긴 모자를 쓴 기사를 상상해 보세요.',
      soundAlike: '발음이 \'비숍\'과 유사하므로, 비가 오는 날 숍(shop) 앞에서 우산을 들고 서 있는 인자한 성직자를 떠올려 보세요.',
      context: '종교적인 의식이나 교구의 행정 업무를 총괄하는 고위 성직자를 지칭할 때 주로 사용됩니다.',
      synonymAntonym: '성직자를 뜻하는 priest나 clergyman과 비슷하지만 더 높은 직급이며, 일반 신도를 뜻하는 layman과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A high-ranking Christian official who supervises a group of local churches or a diocese.',
      synonyms: ['prelate', 'archbishop', 'clergyman'],
      antonyms: ['layman', 'follower', 'subordinate'],
      exampleSentences: [
        { en: 'The local leader of the church was ordained as the new head of the diocese last Sunday.', ko: '그 지역 교회의 지도자는 지난 일요일에 교구의 새로운 주교로 서품되었습니다.' },
        { en: 'In the game of chess, this piece can only move diagonally across the board.', ko: '체스 게임에서 이 기물은 보드 위를 오직 대각선으로만 이동할 수 있습니다.' },
      ],
    }
  ),
  word('bit', '조금', 4, 'noun',
    ['전체', '다량', '무더기', '산더미', '전부', '대부분', '상당수', '엄청남', '거대한 양', '덩어리'],
    tips({
      etymology: '고대 영어 \'bita\'에서 유래했으며, \'한 입 베어 문 조각\'이라는 의미에서 아주 작은 양을 뜻하게 되었습니다.',
      visual: '커다란 케이크 옆에 떨어진 아주 작은 빵가루 한 조각을 상상해 보세요.',
      soundAlike: '컴퓨터의 가장 작은 단위인 \'비트\'를 떠올리면 아주 미세하고 작은 양임을 쉽게 기억할 수 있습니다.',
      context: '일상 대화에서 \'a bit\' 형태로 쓰여 \'약간\', \'잠시\'라는 부드러운 뉘앙스를 더할 때 자주 쓰입니다.',
      synonymAntonym: '작은 조각을 뜻하는 piece와 유의어이며, 전체를 뜻하는 whole과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A small piece, part, or quantity of something.',
      synonyms: ['fragment', 'portion', 'particle'],
      antonyms: ['entirety', 'abundance', 'maximum'],
      exampleSentences: [
        { en: 'I only need a bit of help to finish this task.', ko: '이 일을 끝내기 위해 아주 약간의 도움만 필요합니다.' },
        { en: 'She felt a bit tired after the long walk.', ko: '그녀는 긴 산책 후에 조금 피곤함을 느꼈습니다.' },
      ],
    }
  ),
  word('bite', '물다', 1, 'verb',
    ['뱉다', '쓰다듬다', '만지다', '핥다', '키스하다', '당기다', '밀다', '놓다', '풀어주다', '던지다'],
    tips({
      etymology: '고대 영어 \'bitan\'에서 유래했으며, 날카로운 도구나 이빨로 자르는 행위를 의미합니다.',
      visual: '사과를 크게 한 입 베어 물었을 때 이빨 자국이 선명하게 남은 모습을 상상해 보세요.',
      soundAlike: '발음이 \'바이트\'이므로, 컴퓨터 용량 단위인 바이트가 정보를 한 입씩 먹는다고 생각하면 쉽습니다.',
      context: '강아지가 장난감을 꽉 물거나, 모기가 피부를 물었을 때 주로 사용하는 표현입니다.',
      synonymAntonym: '씹는다는 뜻의 chew와 비슷하지만, 입을 벌려 꽉 잡는다는 점이 다릅니다.',
    }),
    {
      definition: 'to use your teeth to cut into or grip something firmly',
      synonyms: ['chew', 'gnaw', 'nibble'],
      antonyms: ['release', 'soothe', 'caress'],
      exampleSentences: [
        { en: 'Be careful because the neighbor\'s dog might try to snap and attack you.', ko: '이웃집 개가 달려들어 물려고 할 수도 있으니 조심하세요.' },
        { en: 'He took a huge piece out of the sandwich and started chewing quickly.', ko: '그는 샌드위치를 크게 한 입 베어 물고는 빠르게 씹기 시작했습니다.' },
      ],
    }
  ),
  word('bitter', '쓴', 5, 'adjective',
    ['달콤한', '짠', '매운', '싱거운', '고소한', '느끼한', '담백한', '신', '떫은', '비린'],
    tips({
      etymology: '고대 영어 \'bitan(물다)\'에서 유래하여, 혀를 찌르는 듯한 날카로운 맛을 의미하게 되었습니다.',
      visual: '한약을 한 입 마시고 인상을 찌푸리는 사람의 표정을 떠올려 보세요.',
      soundAlike: '발음이 \'비터\'와 비슷하므로, 입안을 \'비틀\' 정도로 맛이 쓰다고 연상해 보세요.',
      context: '맛이 쓸 때뿐만 아니라, 실패 후 느끼는 지독한 슬픔이나 억울한 감정을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: 'sweet(달콤한)과는 맛의 반대이며, sour(신)와는 다른 자극적인 맛의 종류입니다.',
    }),
    {
      definition: 'having a sharp, pungent taste that is not sweet; feeling intense resentment or coldness',
      synonyms: ['acrid', 'resentful', 'harsh'],
      antonyms: ['sweet', 'mild', 'content'],
      exampleSentences: [
        { en: 'The dark chocolate had a very sharp and unpleasant taste that lingered on my tongue.', ko: '그 다크 초콜릿은 혀에 남는 매우 강하고 쓴맛을 가지고 있었다.' },
        { en: 'He felt a deep sense of resentment after losing the final match of the season.', ko: '그는 시즌 마지막 경기에서 패배한 후 깊은 쓰라림과 원망을 느꼈다.' },
      ],
    }
  ),
  word('black', '검은', 2, 'adjective',
    ['하얀', '밝은', '투명한', '빨간', '파란', '노란', '초록', '회색', '갈색', '분홍'],
    tips({
      etymology: '고대 영어 \'blæc\'에서 유래했으며, 타오르거나 그을린 상태를 의미하는 어근과 연결됩니다.',
      visual: '밤하늘의 어둠이나 숯의 색깔을 떠올리며 짙은 어둠을 연상해 보세요.',
      soundAlike: '블랙커피(Black Coffee)의 진한 색깔을 떠올리며 발음해 보세요.',
      context: '색깔뿐만 아니라 빛이 전혀 없는 어두운 상태를 묘사할 때도 자주 쓰입니다.',
      synonymAntonym: 'dark와 유사하며, 반대되는 밝은 상태인 white와 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'having the darkest color possible, like that of coal or the night sky, due to the total absence or absorption of light',
      synonyms: ['dark', 'inky', 'ebony'],
      antonyms: ['white', 'bright', 'light'],
      exampleSentences: [
        { en: 'She wore a elegant dress to the formal dinner party.', ko: '그녀는 공식 저녁 파티에 우아한 검은색 드레스를 입고 나타났다.' },
        { en: 'The sky turned completely after the sun went down.', ko: '해가 지고 나자 하늘은 완전히 검게 변했다.' },
      ],
    }
  ),
  word('blank', '공백', 6, 'noun',
    ['글자', '문장', '단어', '숫자', '기호', '그림', '표', '차트', '내용', '텍스트'],
    tips({
      etymology: '프랑스어 \'blanc(하얀)\'에서 유래하여, 아무것도 적히지 않은 하얀 상태를 뜻합니다.',
      visual: '시험지 답안란이 텅 비어 있는 하얀 직사각형 모양을 상상해 보세요.',
      soundAlike: '발음이 \'불랭크\'와 비슷하므로, 불을 끄고 아무것도 안 보이는 캄캄하고 텅 빈 방을 연상하세요.',
      context: '서류를 작성할 때 이름을 적는 칸이 비어 있는 경우를 떠올리면 쉽습니다.',
      synonymAntonym: '텅 빈 공간을 뜻하는 gap과 가득 찬 상태인 full을 함께 기억하세요.',
    }),
    {
      definition: 'an empty space on a document or form where information should be provided',
      synonyms: ['void', 'vacancy', 'gap'],
      antonyms: ['fullness', 'completion', 'occupancy'],
      exampleSentences: [
        { en: 'Please fill in each empty space on the application form.', ko: '신청서의 각 빈칸을 채워 주시기 바랍니다.' },
        { en: 'His mind went completely empty when the teacher asked him a question.', ko: '선생님이 질문을 했을 때 그의 머릿속은 완전히 백지상태가 되었다.' },
      ],
    }
  ),
  word('blast', '돌풍', 8, 'noun',
    ['고요', '미풍', '침묵', '잔잔함', '평온', '산들바람', '정적', '안개', '가뭄', '그늘'],
    tips({
      etymology: '고대 영어 \'blæst\'에서 유래하여 \'불다\'라는 의미를 담고 있으며, 강하게 뿜어져 나오는 기운을 뜻합니다.',
      visual: '강력한 폭발음과 함께 건물 유리창이 흔들릴 정도의 거센 바람이 몰아치는 장면을 상상해 보세요.',
      soundAlike: '\'블라스트\'라고 발음하며, 무언가 \'불러서 터뜨리는\' 듯한 강한 파열음을 연상하면 쉽습니다.',
      context: '주로 갑자기 불어닥치는 강풍이나 폭발 사고, 혹은 아주 시끄러운 음악 소리를 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '강한 바람인 gust와 유의어이며, 아주 약한 바람인 breeze와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A sudden and very strong movement of air, or a powerful explosion that creates a loud noise.',
      synonyms: ['gust', 'gale', 'explosion'],
      antonyms: ['breeze', 'calm', 'stillness'],
      exampleSentences: [
        { en: 'A sudden blast of cold air hit him as soon as he opened the front door.', ko: '그가 현관문을 열자마자 갑작스러운 차가운 돌풍이 그를 덮쳤다.' },
        { en: 'The trumpet player produced a loud blast that echoed throughout the concert hall.', ko: '트럼펫 연주자는 콘서트홀 전체에 울려 퍼지는 크고 강렬한 소리를 냈다.' },
      ],
    }
  ),
  word('blend', '혼합하다', 7, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '고대 노르웨이 어원인 blanda에서 유래하여 여러 가지를 한데 섞는다는 의미를 가집니다.',
      visual: '믹서기 안에서 여러 과일이 섞여 맛있는 주스가 되는 모습을 상상해 보세요.',
      soundAlike: '커피 \'블렌드\'라는 말을 떠올리면 여러 원두를 섞었다는 것을 쉽게 알 수 있습니다.',
      context: '요리법이나 색상 조합, 혹은 서로 다른 문화가 어우러지는 상황에서 자주 쓰입니다.',
      synonymAntonym: 'mix와 유사하지만, blend는 경계 없이 아주 자연스럽게 섞이는 뉘앙스가 강합니다.',
    }),
    {
      definition: 'to combine different substances, qualities, or ingredients into a single harmonious whole',
      synonyms: ['mix', 'mingle', 'combine'],
      antonyms: ['separate', 'divide', 'detach'],
      exampleSentences: [
        { en: 'The chef showed us how to combine the spices to create a perfect flavor.', ko: '요리사는 완벽한 맛을 내기 위해 향신료를 혼합하는 방법을 우리에게 보여주었다.' },
        { en: 'The new building was designed to harmonize with the natural landscape.', ko: '그 새 건물은 주변의 자연 경관과 자연스럽게 어우러지도록 설계되었다.' },
      ],
    }
  ),
  word('bless', '축복하다', 4, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '고대 영어 \'bletsian\'에서 유래했으며, 원래는 피를 뿌려 신성하게 만드는 의식에서 시작되어 현재의 축복의 의미가 되었습니다.',
      visual: '성당이나 교회에서 신부가 신자들의 머리 위에 손을 얹고 평화를 비는 성스러운 장면을 상상해 보세요.',
      soundAlike: '재채기를 할 때 옆에서 \'Bless you!\'라고 말해주는 소리를 떠올리면 기억하기 쉽습니다.',
      context: '주로 종교적인 맥락에서 신의 가호를 빌거나, 누군가에게 행운이 깃들기를 바랄 때 자주 쓰입니다.',
      synonymAntonym: 'consecrate는 종교적으로 성스럽게 한다는 의미로 비슷하며, curse는 저주한다는 정반대의 의미를 가집니다.',
    }),
    {
      definition: 'to ask a divine power to look favorably upon or to make something holy',
      synonyms: ['sanctify', 'consecrate', 'hallow'],
      antonyms: ['curse', 'damn', 'condemn'],
      exampleSentences: [
        { en: 'The priest will invoke a prayer to protect and favor the newborn child.', ko: '신부는 갓 태어난 아이를 보호하고 보살펴 달라고 축복 기도를 올릴 것입니다.' },
        { en: 'May God grant you peace and happiness throughout your long journey.', ko: '당신의 긴 여정 동안 신의 축복이 평화와 행복으로 함께하기를 바랍니다.' },
      ],
    }
  ),
  word('blink', '깜빡거리다', 5, 'verb',
    ['응시하다', '노려보다', '외치다', '속삭이다', '미소짓다', '졸다', '휘파람 불다', '손을 흔들다', '고개를 끄덕이다', '눈을 부릅뜨다'],
    tips({
      etymology: '중세 네덜란드어 blinken(빛나다)에서 유래하여, 눈이 빛을 받아 빠르게 감기는 동작으로 변했습니다.',
      visual: '카메라 셔터가 찰칵하며 빠르게 닫혔다 열리는 모습을 상상해 보세요.',
      soundAlike: '눈을 \'깜빡\'할 때의 \'ㅂ\' 소리와 blink의 첫 글자 \'b\'를 연결해 보세요.',
      context: '강한 햇빛을 받거나 눈에 먼지가 들어갔을 때 본능적으로 하는 행동입니다.',
      synonymAntonym: '눈을 빠르게 감는 wink와 비슷하지만, stare처럼 빤히 쳐다보는 것과는 반대됩니다.',
    }),
    {
      definition: 'to close and open one\'s eyes very quickly, often involuntarily',
      synonyms: ['wink', 'flutter', 'twinkle'],
      antonyms: ['stare', 'gaze', 'glare'],
      exampleSentences: [
        { en: 'The bright sunlight made him close his eyes and open them again several times.', ko: '밝은 햇빛 때문에 그는 눈을 여러 번 깜빡거렸다.' },
        { en: 'She didn\'t even move her eyelids once while watching the intense movie scene.', ko: '그녀는 강렬한 영화 장면을 보는 동안 눈 하나 깜빡하지 않았다.' },
      ],
    }
  ),
  word('blonde', '금발의', 6, 'adjective',
    ['검은 머리의', '갈색 머리의', '빨간 머리의', '흰 머리의', '회색 머리의', '짧은 머리의', '긴 머리의', '곱슬머리의', '뻣뻣한 머리의', '대머리의'],
    tips({
      etymology: '고대 독일어에서 유래하여 \'노란색\'이나 \'밝은 색\'을 뜻하는 단어에서 발전했습니다.',
      visual: '햇빛을 받아 반짝이는 밝은 노란색 머리카락을 가진 사람을 상상해 보세요.',
      soundAlike: '\'블론드\'라고 발음하며, 맥주 종류 중 하나인 \'블론드 에일\'의 밝은 색상을 떠올리면 쉽습니다.',
      context: '주로 사람의 외모를 묘사할 때 사용하며, 여성형은 blonde, 남성형은 blond로 쓰기도 합니다.',
      synonymAntonym: '머리카락 색이 밝다는 뜻의 fair와 유의어 관계이며, 어두운 색인 brunette와 반대됩니다.',
    }),
    {
      definition: 'having hair that is naturally light yellow or golden in color',
      synonyms: ['fair-haired', 'golden-haired', 'flaxen'],
      antonyms: ['brunette', 'dark-haired', 'black-haired'],
      exampleSentences: [
        { en: 'She decided to dye her dark hair a bright shade of yellow.', ko: '그녀는 자신의 어두운 머리카락을 밝은 금색으로 염색하기로 결심했다.' },
        { en: 'The little boy had curly hair that looked almost white in the sun.', ko: '그 어린 소년은 햇빛 아래서 거의 하얗게 보이는 곱슬거리는 금발을 가지고 있었다.' },
      ],
    }
  ),
  word('bloom', '꽃피다', 7, 'verb',
    ['시들다', '말라붙다', '떨어지다', '잎이 지다', '겨울잠 자다', '쉬다', '죽다', '말라죽다', '말라버리다', '말라가다'],
    tips({
      etymology: '고대 노르웨이어 \'blóm\'에서 유래했으며, 식물이 꽃을 피우고 번성하는 생명력을 나타냅니다.',
      visual: '봄날 정원에 가득한 꽃봉오리들이 일제히 화사하게 터져 나오는 장면을 상상해 보세요.',
      soundAlike: '\'블룸\'이라는 발음이 마치 꽃이 \'부풀어\' 오르며 터지는 소리처럼 느껴집니다.',
      context: '식물뿐만 아니라 재능이나 우정이 활짝 피어날 때도 비유적으로 자주 사용됩니다.',
      synonymAntonym: '꽃이 피는 blossom과 반대로 시들어가는 wither를 대조하여 기억하면 효과적입니다.',
    }),
    {
      definition: 'to produce flowers or to open into a flower; to flourish or grow in health and beauty',
      synonyms: ['blossom', 'flourish', 'thrive'],
      antonyms: ['wither', 'fade', 'decay'],
      exampleSentences: [
        { en: 'The cherry trees usually start to open their petals and reach full status in early April.', ko: '벚나무들은 보통 4월 초에 꽃을 피우기 시작하여 만개합니다.' },
        { en: 'Her artistic talent began to develop rapidly after she joined the local art club.', ko: '그녀가 지역 미술 동호회에 가입한 후 그녀의 예술적 재능이 활짝 피어나기 시작했습니다.' },
      ],
    }
  ),
  word('blossom', '꽃', 4, 'noun',
    ['뿌리', '줄기', '열매', '나뭇가지', '씨앗', '가시', '잎사귀', '이끼', '덩굴', '꽃가루'],
    tips({
      etymology: '고대 영어 blōstm에서 유래했으며, \'피어나다\'라는 의미의 어근을 가지고 있습니다.',
      visual: '봄날 체리 나무에 하얗고 분홍색인 꽃들이 흐드러지게 피어있는 모습을 상상해 보세요.',
      soundAlike: '\'블러썸\' 발음이 \'불러서\'와 비슷하니, 봄이 꽃을 \'불러서\' 피워냈다고 기억하세요.',
      context: '주로 과일 나무나 관목에 피는 꽃을 지칭하며, 비유적으로는 재능이 꽃피울 때도 사용합니다.',
      synonymAntonym: 'flower와 유사하지만 주로 나무의 꽃을 뜻하며, 시드는 것을 뜻하는 wither와 반대됩니다.',
    }),
    {
      definition: 'the small flowers that grow on a tree or bush before the fruit appears',
      synonyms: ['flower', 'bloom', 'floret'],
      antonyms: ['wither', 'fade', 'shrink'],
      exampleSentences: [
        { en: 'The cherry trees are covered with beautiful pink blossoms every spring.', ko: '매년 봄이면 벚나무들이 아름다운 분홍색 꽃들로 뒤덮입니다.' },
        { en: 'The apple trees are in full blossom this week.', ko: '이번 주에 사과나무의 꽃이 만개했습니다.' },
      ],
    }
  ),
  word('blow', '강타', 5, 'noun',
    ['쓰다듬기', '속삭임', '부드러운 접촉', '가볍게 치기', '포옹', '키스', '손짓', '눈짓', '고개 끄덕임', '박수'],
    tips({
      etymology: '고대 영어 blawan에서 유래하여 본래 \'불다\'라는 뜻이었으나, 공기가 세게 부딪히는 느낌에서 \'강한 타격\'이라는 의미로 확장되었습니다.',
      visual: '권투 선수가 상대방의 턱에 강력한 펀치를 날리는 장면을 상상해 보세요.',
      soundAlike: '\'블로우\'라고 발음하며, 바람이 \'불어\'와서 무언가를 세게 때리는 소리와 연결해 보세요.',
      context: '물리적인 타격뿐만 아니라, 갑작스러운 실패나 정신적인 충격을 표현할 때도 자주 쓰입니다.',
      synonymAntonym: '강한 충격인 shock와 반대되는 개념인 위안이나 위로(comfort)를 함께 기억하세요.',
    }),
    {
      definition: 'a hard hit with the hand or a weapon, or a sudden event that causes great trouble or disappointment',
      synonyms: ['strike', 'impact', 'shock'],
      antonyms: ['caress', 'blessing', 'comfort'],
      exampleSentences: [
        { en: 'The fighter delivered a decisive punch that ended the match.', ko: '그 선수는 경기를 끝내는 결정적인 강타를 날렸습니다.' },
        { en: 'Losing his job was a severe setback to his plans for the future.', ko: '직장을 잃은 것은 그의 미래 계획에 있어 심각한 타격이었습니다.' },
      ],
    }
  ),
  word('boil', '끓다', 6, 'verb',
    ['얼다', '식다', '냉각하다', '냉동하다', '젖다', '말리다', '얼리다', '차갑게 하다', '시원하게 하다', '냉장하다'],
    tips({
      etymology: '라틴어 bullire(거품이 일다)에서 유래하여 액체가 뜨거워져 요동치는 모습을 나타냅니다.',
      visual: '냄비 속의 물이 보글보글 거품을 내며 뜨거운 김을 내뿜는 장면을 상상하세요.',
      soundAlike: '보일(boil)러를 틀면 물이 \'끓는다\'고 연상하면 기억하기 쉽습니다.',
      context: '요리법에서 물을 먼저 준비하거나 소독을 위해 온도를 높일 때 주로 사용됩니다.',
      synonymAntonym: '심하게 끓는 simmer와 대조되며, 차갑게 식히는 freeze와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to reach the temperature at which a liquid bubbles and turns into gas',
      synonyms: ['bubble', 'seethe', 'stew'],
      antonyms: ['freeze', 'chill', 'cool'],
      exampleSentences: [
        { en: 'You should wait for the water to reach a high temperature before adding the pasta.', ko: '파스타를 넣기 전에 물이 팔팔 끓을 때까지 기다려야 합니다.' },
        { en: 'The milk will quickly overflow if you let it heat up for too long on the stove.', ko: '우유를 가스레인지 위에서 너무 오래 끓게 두면 금방 넘쳐버릴 것입니다.' },
      ],
    }
  ),
  word('bold', '대담한', 7, 'adjective',
    ['소심한', '겁많은', '수줍은', '조심스러운', '소극적인', '우유부단한', '겁먹은', '주눅든', '나약한', '비겁한'],
    tips({
      etymology: '고대 영어 \'beald\'에서 유래하여 힘이 넘치고 용기가 있다는 의미를 담고 있습니다.',
      visual: '어두운 동굴 속으로 횃불 하나만 들고 당당하게 걸어 들어가는 탐험가의 모습을 상상해 보세요.',
      soundAlike: '\'볼드\'라고 발음되는데, 축구공(ball)을 들고 상대 진영으로 \'대담하게\' 돌진하는 모습을 연상해 보세요.',
      context: '디자인이나 글꼴에서 \'굵게\' 표시하는 것도 눈에 띄고 강렬하게 만들기 위한 대담한 선택입니다.',
      synonymAntonym: 'brave와 유사하며, 반대로 소심하고 겁이 많은 상태는 timid라고 표현합니다.',
    }),
    {
      definition: 'showing a willingness to take risks; confident and courageous',
      synonyms: ['brave', 'courageous', 'fearless'],
      antonyms: ['timid', 'fearful', 'cowardly'],
      exampleSentences: [
        { en: 'The entrepreneur made a daring move by investing all his savings into the new startup.', ko: '그 기업가는 모든 저축을 신생 기업에 투자하는 대담한 결정을 내렸습니다.' },
        { en: 'She was praised for her adventurous decision to travel across the continent alone.', ko: '그녀는 대륙을 홀로 횡단하겠다는 용기 있는 결정으로 찬사를 받았습니다.' },
      ],
    }
  ),
  word('boom', '굉음', 4, 'noun',
    ['속삭임', '침묵', '고요', '미풍', '정적', '잔잔함', '평온', '불황', '쇠퇴', '감소'],
    tips({
      etymology: '천둥소리나 대포 소리를 흉내 낸 의성어에서 유래하여 크고 울리는 소리를 뜻하게 되었습니다.',
      visual: '폭탄이 터질 때 \'쾅\' 하고 울려 퍼지는 거대한 진동과 소음을 상상해 보세요.',
      soundAlike: '북을 \'붐\' 하고 세게 쳤을 때 주변이 울리는 깊고 낮은 소리를 떠올리면 쉽습니다.',
      context: '경제 상황에서 쓰일 때는 갑작스러운 호황이나 급격한 성장을 의미하기도 합니다.',
      synonymAntonym: 'roar나 blast와 비슷한 느낌이며, 반대로 아주 작은 소리인 whisper와는 대조됩니다.',
    }),
    {
      definition: 'A loud, deep, resonant sound, or a sudden period of great prosperity and rapid economic growth.',
      synonyms: ['roar', 'blast', 'expansion'],
      antonyms: ['whisper', 'silence', 'recession'],
      exampleSentences: [
        { en: 'The distant boom of the thunder made the windows rattle in their frames.', ko: '멀리서 들려오는 천둥의 굉음이 창틀을 덜덜 떨리게 했다.' },
        { en: 'The city experienced a massive building boom during the last decade.', ko: '그 도시는 지난 10년 동안 엄청난 건설 호황을 경험했다.' },
      ],
    }
  ),
  word('boost', '부양하다', 5, 'verb',
    ['약화시키다', '억제하다', '방해하다', '감소시키다', '저해하다', '축소하다', '훼손하다', '지연시키다', '방치하다', '하락시키다'],
    tips({
      etymology: '19세기 미국 속어에서 유래하여 \'뒤에서 밀어 올리다\'라는 물리적 동작에서 추상적인 격려와 상승의 의미로 확장되었습니다.',
      visual: '로켓이 발사될 때 하단에서 불꽃을 내뿜으며 위로 강하게 밀어 올리는 추진 장치를 상상해 보세요.',
      soundAlike: '발음이 \'부스트\'이므로, 게임에서 캐릭터의 속도를 일시적으로 높여주는 \'부스터\' 아이템을 떠올리면 쉽습니다.',
      context: '경제 지표를 끌어올리거나, 누군가의 사기를 북돋울 때, 혹은 면역력을 강화할 때 주로 사용됩니다.',
      synonymAntonym: '상승시키는 lift와 반대로 아래로 끌어내리는 depress를 함께 기억하면 의미의 대비가 명확해집니다.',
    }),
    {
      definition: 'to help or encourage something to increase, improve, or become more successful',
      synonyms: ['enhance', 'amplify', 'elevate'],
      antonyms: ['diminish', 'hinder', 'undermine'],
      exampleSentences: [
        { en: 'The government introduced new tax incentives to boost the local economy.', ko: '정부는 지역 경제를 부양하기 위해 새로운 세제 혜택을 도입했습니다.' },
        { en: 'A cup of coffee in the morning can help boost your energy levels and focus.', ko: '아침에 마시는 커피 한 잔은 에너지 수치를 높이고 집중력을 향상시키는 데 도움이 될 수 있습니다.' },
      ],
    }
  ),
  word('boot', '장화', 3, 'noun',
    ['샌들', '슬리퍼', '구두', '운동화', '양말', '모자', '장갑', '벨트', '스카프', '안경'],
    tips({
      etymology: '중세 영어 \'bote\'에서 유래했으며, 발과 다리 아랫부분을 보호하기 위해 가죽으로 만든 신발을 뜻합니다.',
      visual: '비가 쏟아지는 날, 물웅덩이를 첨벙거리며 지나가도 젖지 않는 튼튼한 고무 장화를 상상해 보세요.',
      soundAlike: '컴퓨터를 켤 때 \'부팅(booting)\'한다고 하죠? 컴퓨터를 가동시키듯 외출 준비의 마지막 단계로 장화를 신는 모습을 연상하세요.',
      context: '겨울철 눈 위를 걷거나 비가 많이 오는 날 발을 보호하기 위해 주로 착용하는 신발입니다.',
      synonymAntonym: '일반적인 신발을 뜻하는 shoe보다 목이 길며, 맨발을 뜻하는 barefoot과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A type of strong footwear that covers the entire foot and part of the leg, often worn for protection or in cold weather.',
      synonyms: ['footwear', 'wellie', 'galosh'],
      antonyms: ['sandal', 'slipper', 'barefoot'],
      exampleSentences: [
        { en: 'She wore a pair of waterproof rubber boots to walk through the muddy field.', ko: '그녀는 진흙탕 밭을 가로질러 걷기 위해 방수 고무 장화를 신었다.' },
        { en: 'Make sure to take off your muddy boots before entering the house.', ko: '집에 들어가기 전에 진흙 묻은 장화를 반드시 벗으세요.' },
      ],
    }
  ),
  word('border', '가장자리', 6, 'noun',
    ['한가운데', '중심', '핵심', '내부', '심장부', '정중앙', '꼭대기', '바닥', '내면', '본질'],
    tips({
      etymology: '프랑스어 \'bord\'에서 유래하여 물건의 끝이나 배의 옆면을 뜻하던 것이 경계선으로 확장되었습니다.',
      visual: '지도 위에서 두 나라를 나누는 굵고 선명한 검은색 선을 상상해 보세요.',
      soundAlike: '보더(border) 콜리가 양 떼의 \'가장자리\'를 돌며 몰고 다니는 모습을 떠올려보세요.',
      context: '국가 간의 경계선뿐만 아니라 액자의 테두리나 옷소매의 끝부분을 가리킬 때도 자주 쓰입니다.',
      synonymAntonym: 'edge와 유사하며, 사물의 가장 깊은 안쪽을 뜻하는 center와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The outer part or edge of a specific area; the dividing line that separates two political or geographical regions.',
      synonyms: ['boundary', 'edge', 'margin'],
      antonyms: ['center', 'interior', 'middle'],
      exampleSentences: [
        { en: 'We had to show our passports when we crossed the national boundary line.', ko: '우리는 국경을 넘을 때 여권을 제시해야 했습니다.' },
        { en: 'The garden was surrounded by a decorative stone frame along its outer edge.', ko: '정원은 바깥쪽 가장자리를 따라 장식용 돌 테두리로 둘러싸여 있었습니다.' },
      ],
    }
  ),
  word('bore', '지루하게 하다', 7, 'verb',
    ['재미있게 하다', '즐겁게 하다', '흥미롭게 하다', '사로잡다', '매료시키다', '기쁘게 하다', '만족시키다', '흥분시키다', '자극하다', '몰입시키다'],
    tips({
      etymology: '고대 영어 \'borian\'에서 유래하여 구멍을 뚫는다는 의미에서 마음을 뚫고 지나가듯 피곤하게 만든다는 의미로 확장되었습니다.',
      visual: '지루한 강연을 들으며 턱을 괴고 하품을 크게 하는 학생의 모습을 상상해 보세요.',
      soundAlike: '구멍을 뚫는 기구인 \'보어(bore)\'를 떠올리며, 마음속에 구멍이 뻥 뚫린 듯 허무하고 지루한 느낌을 연결하세요.',
      context: '주로 긴 연설, 재미없는 영화, 혹은 반복적인 일상에 대해 말할 때 자주 사용됩니다.',
      synonymAntonym: 'tiring이나 weary와 비슷하며, 반대로 상대를 즐겁게 하는 amuse나 entertain과는 반대되는 개념입니다.',
    }),
    {
      definition: 'to make someone feel weary and uninterested by being dull or repetitive',
      synonyms: ['weary', 'tire', 'fatigue'],
      antonyms: ['amuse', 'interest', 'excite'],
      exampleSentences: [
        { en: 'The long and repetitive lecture started to weary the students after the first hour.', ko: '길고 반복적인 강의는 한 시간이 지나자 학생들을 지루하게 만들기 시작했다.' },
        { en: 'I don\'t want to weary you with all the technical details of the project.', ko: '프로젝트의 모든 기술적인 세부 사항들로 당신을 지루하게 만들고 싶지 않다.' },
      ],
    }
  ),
  word('boss', '두목', 1, 'noun',
    ['부하', '직원', '동료', '후배', '신입', '일꾼', '노동자', '피고용인', '조수', '비서'],
    tips({
      etymology: '네덜란드어 \'baas(주인)\'에서 유래하여, 조직이나 직장에서 권한을 가진 사람을 뜻하게 되었습니다.',
      visual: '사무실 상단 큰 책상에 앉아 서류에 결재를 하거나 지시를 내리는 관리자의 모습을 상상하세요.',
      soundAlike: '버스(bus) 운전기사님처럼 조직의 방향을 결정하고 운전대를 잡고 있는 사람이라고 연상해 보세요.',
      context: '직장 상사뿐만 아니라 범죄 조직의 우두머리나 특정 집단의 리더를 지칭할 때도 널리 쓰입니다.',
      synonymAntonym: 'manager, leader와 유사하며, 반대로 지시를 받는 subordinate, employee와 대조됩니다.',
    }),
    {
      definition: 'a person who exercises control or authority over workers or an organization',
      synonyms: ['manager', 'employer', 'supervisor'],
      antonyms: ['subordinate', 'employee', 'underling'],
      exampleSentences: [
        { en: 'The department manager is a demanding but fair person to work for.', ko: '그 부서장은 함께 일하기에 까다롭지만 공정한 사람입니다.' },
        { en: 'He had to ask his superior for permission to leave work early.', ko: '그는 조퇴하기 위해 상사에게 허락을 구해야 했습니다.' },
      ],
    }
  ),
  word('both', '쌍방의', 2, 'adjective',
    ['한쪽의', '단일의', '하나의', '일방의', '한편의', '단독의', '개별의', '따로의', '각각의', '혼자만의'],
    tips({
      etymology: '고대 영어 \'ba\'와 \'tha\'가 합쳐진 형태로, \'그 둘 다\'라는 의미에서 유래했습니다.',
      visual: '두 개의 물건을 양손에 하나씩 쥐고 있는 모습을 상상해 보세요.',
      soundAlike: '\'보스(boss)\'가 두 명의 부하를 동시에 부리는 장면을 연상하며 발음해 보세요.',
      context: '선택지 중 하나가 아니라 두 가지 요소 모두를 포함할 때 주로 사용됩니다.',
      synonymAntonym: '하나를 뜻하는 single이나 각각을 뜻하는 each와 반대되는 개념입니다.',
    }),
    {
      definition: 'referring to two people or things together rather than just one',
      synonyms: ['the pair', 'the two', 'twain'],
      antonyms: ['neither', 'either', 'single'],
      exampleSentences: [
        { en: 'The decision was beneficial to the interests of the two parties involved.', ko: '그 결정은 관련된 양측 모두의 이익에 도움이 되었습니다.' },
        { en: 'She can speak English and French fluently.', ko: '그녀는 영어와 프랑스어 두 언어 모두 유창하게 구사할 수 있습니다.' },
      ],
    }
  ),
  word('bother', '괴롭히다', 4, 'verb',
    ['편하게 하다', '위로하다', '달래다', '돕다', '쉬게 하다', '기쁘게 하다', '만족시키다', '감사하다', '존중하다', '배려하다'],
    tips({
      etymology: '중세 영어의 \'pother(소동, 소란)\'에서 유래하여 마음을 어지럽히고 성가시게 한다는 의미로 발전했습니다.',
      visual: '집중해서 공부하고 있는데 옆에서 파리가 계속 윙윙거리며 신경을 건드리는 장면을 상상해 보세요.',
      soundAlike: '\'봐더(bother)\'라고 발음되는데, 자꾸 귀찮게 구는 사람에게 \'나 좀 그만 봐 더 이상은 안 돼\'라고 말하는 상황을 떠올려 보세요.',
      context: '일상 대화에서 \'Don\'t bother me\'라고 하면 \'나 좀 귀찮게 하지 마\'라는 뜻으로 자주 쓰입니다.',
      synonymAntonym: '남을 짜증나게 하는 annoy와 비슷하지만, 반대로 마음을 편안하게 해주는 soothe와는 반대되는 개념입니다.',
    }),
    {
      definition: 'to cause someone to feel slightly worried, dissatisfied, or upset; to annoy or disturb someone',
      synonyms: ['annoy', 'disturb', 'irritate'],
      antonyms: ['soothe', 'comfort', 'please'],
      exampleSentences: [
        { en: 'I am sorry to disturb you, but I didn\'t want to bother you with such a small problem.', ko: '방해해서 죄송합니다만, 이런 작은 문제로 당신을 괴롭히고 싶지 않았습니다.' },
        { en: 'It doesn\'t bother me at all if we have to wait for another ten minutes.', ko: '우리가 10분 더 기다려야 한다고 해도 전혀 신경 쓰이지 않아요.' },
      ],
    }
  ),
  word('bounce', '뛰어오르다', 5, 'verb',
    ['가라앉다', '떨어지다', '굴러가다', '미끄러지다', '넘어지다', '앉다', '엎드리다', '눕다', '멈추다', '서다'],
    tips({
      etymology: '중세 영어 \'bounsen\'에서 유래하여 세게 치거나 쿵 소리를 내며 움직이는 동작을 나타냅니다.',
      visual: '탱탱볼이 딱딱한 바닥에 닿자마자 하늘 위로 높게 튀어 오르는 모습을 상상해 보세요.',
      soundAlike: '\'바운스\'라는 발음이 공이 바닥에 부딪혀 \'바운!\' 하고 튀어 오르는 소리와 비슷합니다.',
      context: '농구 경기에서 공을 드리블하거나 아이들이 트램펄린 위에서 신나게 뛸 때 주로 사용합니다.',
      synonymAntonym: 'rebound와 같이 다시 튀어 오르는 동작을 떠올리고, 반대로 가라앉는 sink를 기억하세요.',
    }),
    {
      definition: 'To spring back from a surface after hitting it, or to move up and down repeatedly.',
      synonyms: ['rebound', 'spring', 'hop'],
      antonyms: ['sink', 'stay', 'descend'],
      exampleSentences: [
        { en: 'The rubber ball will hit the wall and then move back toward you quickly.', ko: '고무공이 벽에 부딪힌 후 당신 쪽으로 빠르게 튀어 오를 것입니다.' },
        { en: 'Children love to jump up and down on the bed even though it is dangerous.', ko: '아이들은 위험함에도 불구하고 침대 위에서 뛰어오르는 것을 좋아합니다.' },
      ],
    }
  ),
  word('brain', '뇌', 3, 'noun',
    ['심장', '간', '폐', '위', '장', '근육', '뼈', '피부', '눈', '귀'],
    tips({
      etymology: '고대 영어 \'brægen\'에서 유래했으며, 머리 안의 부드러운 조직을 뜻하는 어근과 연결됩니다.',
      visual: '호두 껍질 속의 구불구불한 모양을 한 머릿속의 지휘 본부를 상상해 보세요.',
      soundAlike: '\'브레인\'은 \'브레드(bread)\'와 발음이 비슷하죠? 빵처럼 부풀어 오른 지식의 창고라고 생각하세요.',
      context: '지능이 높은 사람을 가리킬 때도 \'He is the brain of the team\'처럼 비유적으로 쓰입니다.',
      synonymAntonym: '지성을 뜻하는 intellect와 비슷하지만, 신체 기관이 없는 상태인 body와는 대조됩니다.',
    }),
    {
      definition: 'the organ of soft nervous tissue contained in the skull of vertebrates, functioning as the coordinating center of sensation and intellectual and nervous activity',
      synonyms: ['mind', 'intellect', 'cerebrum'],
      antonyms: ['body', 'physicality', 'muscle'],
      exampleSentences: [
        { en: 'The human organ responsible for processing information is incredibly complex.', ko: '정보를 처리하는 인간의 뇌는 믿을 수 없을 정도로 복잡합니다.' },
        { en: 'She is definitely the smartest person in our research group.', ko: '그녀는 우리 연구 그룹에서 확실히 가장 똑똑한 브레인입니다.' },
      ],
    }
  ),
  word('brake', '브레이크', 1, 'noun',
    ['가속기', '핸들', '기어', '클러치', '와이퍼', '헤드라이트', '경적', '미러', '타이어', '엔진'],
    tips({
      etymology: '중세 네덜란드어 \'braeke\'(부수는 도구)에서 유래하여 움직임을 깨뜨려 멈추게 한다는 의미로 발전했습니다.',
      visual: '달리는 자전거의 손잡이를 꽉 쥐어 바퀴가 멈추는 장면을 상상해 보세요.',
      soundAlike: '깨지다라는 뜻의 \'break\'와 발음이 같으므로, 속도를 깨뜨려 줄인다고 생각하면 쉽습니다.',
      context: '운전 중 갑자기 장애물이 나타났을 때 가장 먼저 밟아야 하는 장치입니다.',
      synonymAntonym: '속도를 줄이는 curb와 반대로 속도를 높이는 accelerator를 함께 기억하세요.',
    }),
    {
      definition: 'a mechanical device that inhibits movement by absorbing energy from a moving system',
      synonyms: ['curb', 'restraint', 'check'],
      antonyms: ['accelerator', 'throttle', 'catalyst'],
      exampleSentences: [
        { en: 'The driver slammed on the pedal to avoid hitting the deer.', ko: '운전자는 사슴을 치지 않기 위해 페달을 세게 밟았습니다.' },
        { en: 'You should check your vehicle\'s stopping system regularly for safety.', ko: '안전을 위해 차량의 제동 장치를 정기적으로 점검해야 합니다.' },
      ],
    }
  ),
  word('brand', '상표', 2, 'noun',
    ['짝퉁', '무명', '일반품', '무브랜드', '자체제작', '수제', '무표', '미등록', '익명', '무기명'],
    tips({
      etymology: '고대 노르웨이어 \'brandr\'에서 유래했으며, 원래 가축에게 소유주를 표시하기 위해 불로 지져 새긴 \'낙인\'을 의미했습니다.',
      visual: '명품 가방이나 운동화 옆면에 선명하게 박혀 있는 로고나 마크를 상상해 보세요.',
      soundAlike: '브랜드(brand)와 비슷한 발음인 \'블렌드(blend)\'와 헷갈리지 마세요. 브랜드는 가치를, 블렌드는 혼합을 뜻합니다.',
      context: '쇼핑할 때 특정 회사의 이름을 보고 신뢰를 느끼는 상황에서 주로 사용됩니다.',
      synonymAntonym: '유사한 의미로는 trademark가 있고, 반대되는 개념으로는 이름 없는 제품을 뜻하는 generic이 있습니다.',
    }),
    {
      definition: 'A name, term, design, or symbol that identifies one seller\'s good or service as distinct from those of other sellers.',
      synonyms: ['trademark', 'label', 'logo'],
      antonyms: ['generic', 'unbranded', 'counterfeit'],
      exampleSentences: [
        { en: 'The company spent millions of dollars to build a global reputation for its luxury goods.', ko: '그 회사는 자사 사치품의 세계적인 상표 명성을 쌓기 위해 수백만 달러를 소비했습니다.' },
        { en: 'Many consumers are loyal to this specific electronics manufacturer because of its quality.', ko: '많은 소비자들은 품질 덕분에 이 특정 전자제품 제조사의 상표에 충성도가 높습니다.' },
      ],
    }
  ),
  word('break', '부수다', 3, 'verb',
    ['고치다', '붙이다', '만들다', '보존하다', '유지하다', '지키다', '감싸다', '덮다', '이어주다', '수리하다'],
    tips({
      etymology: '고대 영어 brecan에서 유래하여 무언가를 강제로 쪼개거나 틈을 만든다는 어원을 가집니다.',
      visual: '단단한 유리창에 돌이 날아와 사방으로 파편이 튀며 산산조각 나는 장면을 상상하세요.',
      soundAlike: '자동차의 \'브레이크(brake)\'와 발음이 같지만, 여기서는 물건을 \'부수다\'는 뜻임을 기억하세요.',
      context: '물건을 망가뜨릴 때뿐만 아니라, 하던 일을 멈추고 휴식을 취할 때도 자주 쓰입니다.',
      synonymAntonym: 'shatter는 완전히 박살 내는 느낌이며, fix는 망가진 것을 다시 온전하게 만드는 반대 행동입니다.',
    }),
    {
      definition: 'to separate into pieces as a result of a blow, shock, or strain; to cause to stop working',
      synonyms: ['shatter', 'smash', 'fracture'],
      antonyms: ['repair', 'mend', 'fix'],
      exampleSentences: [
        { en: 'Be careful not to drop the vase, or it will fall and shatter into many pieces.', ko: '꽃병을 떨어뜨리지 않도록 조심하세요. 그렇지 않으면 떨어져서 여러 조각으로 부서질 것입니다.' },
        { en: 'The child accidentally hit the window with a ball and caused the glass to crack.', ko: '아이가 실수로 공으로 창문을 쳐서 유리를 부수고 말았습니다.' },
      ],
    }
  ),
];
