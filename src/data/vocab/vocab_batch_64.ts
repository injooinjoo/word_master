import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch64: VocabItem[] = [
  word('take', '잡다', 1, 'verb',
    ['놓다', '주다', '버리다', '잃다', '보내다', '돌려주다', '내려놓다', '거절하다', '포기하다', '비우다'],
    tips({
      etymology: '고대 노르드어 \'taka\'에서 유래하여 손으로 무언가를 움켜쥐거나 획득하는 동작을 나타냅니다.',
      visual: '손을 뻗어 테이블 위의 물건을 움켜쥐는 모습을 상상해 보세요.',
      soundAlike: '테이크아웃(take-out) 커피를 손에 들고 나가는 모습을 떠올리면 기억하기 쉽습니다.',
      context: '가장 기본적인 동사 중 하나로, 무언가를 손에 쥐거나 가져가는 동작을 나타냅니다.',
      synonymAntonym: '무언가를 가져가는 grab과 유사하며, 반대로 내어주는 것은 give입니다.',
    }),
    {
      definition: 'to reach for and hold something with your hands, or to move something from one place to another',
      synonyms: ['grab', 'seize', 'grasp'],
      antonyms: ['give', 'release', 'drop'],
      exampleSentences: [
        { en: 'Please take a seat and wait for your name to be called.', ko: '자리에 앉아서 이름이 불릴 때까지 기다려 주세요.' },
        { en: 'She asked him to take her bag while she opened the door.', ko: '그녀는 문을 여는 동안 그에게 가방을 들어달라고 부탁했다.' },
      ],
      wordDistractors: ['tack', 'fake', 'lake'],
      definitionDistractors: [
        'To prepare food by combining ingredients and applying heat.',
        'To slowly examine something by looking at it from multiple angles.',
        'To leave an object behind intentionally for someone else to find.',
      ],
    }
  ),
  word('tale', '이야기', 4, 'noun',
    ['사건', '상태', '개념', '원인', '결과', '조건', '관계', '계획', '절차', '정보'],
    tips({
      etymology: '말하다라는 뜻의 tell과 같은 어원을 공유하며, 입에서 입으로 전해지는 이야기를 뜻합니다.',
      visual: '할아버지가 모닥불 앞에서 아이들에게 옛날이야기를 들려주는 장면을 상상해 보세요.',
      soundAlike: '꼬리를 뜻하는 tail과 발음이 같으므로, 동물의 꼬리처럼 길게 이어지는 이야기라고 외우면 쉽습니다.',
      context: '주로 전래 동화나 모험담처럼 허구적인 요소가 섞인 흥미로운 서사를 묘사할 때 쓰입니다.',
      synonymAntonym: 'story와 비슷하지만 더 고전적인 느낌이며, 사실을 기록한 fact와는 반대되는 성격이 강합니다.',
    }),
    {
      definition: 'A narrative that relates the details of some real or imaginary event, often involving adventure or magic.',
      synonyms: ['narrative', 'story', 'fable'],
      antonyms: ['fact', 'truth', 'reality'],
      exampleSentences: [
        { en: 'The old sailor shared a fascinating legend about a giant sea monster.', ko: '늙은 선원은 거대한 바다 괴물에 관한 매혹적인 전설 이야기를 들려주었다.' },
        { en: 'Children gathered around the fireplace to hear a classic fairy adventure.', ko: '아이들은 고전적인 요정 모험 이야기를 듣기 위해 벽난로 주위에 모였다.' },
      ],
      wordDistractors: ['tile', 'tall', 'pale'],
      definitionDistractors: [
        'A short rhythmic composition performed with musical instruments.',
        'A factual document used for legal proceedings in a court.',
        'A series of instructions given to complete a mechanical task.',
      ],
    }
  ),
  word('talent', '재주', 5, 'noun',
    ['기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건'],
    tips({
      etymology: '고대 그리스의 화폐 단위인 \'talanton\'에서 유래하여, 신이 맡긴 소중한 능력이라는 의미로 확장되었습니다.',
      visual: '오디션 프로그램 무대 위에서 화려한 조명을 받으며 악기를 연주하는 천재적인 예술가의 모습을 상상해 보세요.',
      soundAlike: '\'탤런트\'라는 발음은 한국에서도 TV에 나오는 연예인을 지칭할 때 자주 쓰이므로 익숙하게 연결할 수 있습니다.',
      context: '단순히 연습으로 얻은 기술보다는 태어날 때부터 가지고 있는 천부적인 소질을 강조할 때 주로 사용됩니다.',
      synonymAntonym: '능력을 뜻하는 ability와 유사하며, 아무런 소질이 없는 상태인 inability와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A natural ability to do something well, often without needing to be taught.',
      synonyms: ['gift', 'aptitude', 'flair'],
      antonyms: ['inability', 'incapacity', 'weakness'],
      exampleSentences: [
        { en: 'The young pianist showed a remarkable gift for composing original melodies.', ko: '그 어린 피아니스트는 독창적인 멜로디를 작곡하는 데 놀라운 재주를 보였다.' },
        { en: 'Finding someone with a natural flair for leadership is essential for this project.', ko: '이 프로젝트를 위해 리더십에 타고난 소질이 있는 사람을 찾는 것이 필수적이다.' },
      ],
      wordDistractors: ['talon', 'tally', 'tenant'],
      definitionDistractors: [
        'A formal certification awarded after completing a training program.',
        'A physical tool used for measuring distances in construction.',
        'The process of acquiring knowledge through repetitive practice.',
      ],
    }
  ),
  word('talk', '말하다', 2, 'verb',
    ['선택하다', '결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다'],
    tips({
      etymology: '고대 영어 \'talu\'(이야기)에서 유래하여 누군가와 소통하기 위해 입을 여는 행위를 뜻합니다.',
      visual: '두 사람이 마주 보고 앉아 입술을 움직이며 대화를 나누는 모습을 상상하세요.',
      soundAlike: '\'토크\'쇼의 진행자가 게스트와 끊임없이 대화하는 장면을 떠올리면 쉽습니다.',
      context: '친구와 수다를 떨거나 회의에서 의견을 나눌 때 가장 기본적으로 쓰이는 단어입니다.',
      synonymAntonym: 'speak와 비슷하지만, talk는 조금 더 비격식적이고 상호적인 대화의 뉘앙스가 강합니다.',
    }),
    {
      definition: 'to speak in order to give information or express ideas and feelings',
      synonyms: ['speak', 'chat', 'converse'],
      antonyms: ['listen', 'be silent', 'ignore'],
      exampleSentences: [
        { en: 'We need to sit down and have a serious conversation about our future plans.', ko: '우리는 자리에 앉아 우리의 미래 계획에 대해 진지하게 대화할 필요가 있다.' },
        { en: 'The students were told not to communicate with each other during the exam.', ko: '학생들은 시험 중에 서로 말하지 말라는 지시를 받았다.' },
      ],
      wordDistractors: ['talc', 'tuck', 'balk'],
      definitionDistractors: [
        'To write down detailed notes during an important meeting.',
        'To move quickly from one location to another without pausing.',
        'To carefully arrange objects in a specific pattern or order.',
      ],
    }
  ),
  word('tall', '키큰', 3, 'adjective',
    ['작은', '낮은', '짧은', '평평한', '좁은', '가벼운', '느린', '얇은', '부드러운', '희미한'],
    tips({
      etymology: '고대 영어 \'teall\'에서 유래했으며 원래는 \'빠른\'이나 \'용감한\'이라는 뜻이었으나 시간이 흐르며 \'높이가 높은\'이라는 뜻으로 정착되었습니다.',
      visual: '기린의 긴 목이나 도심의 마천루 빌딩이 하늘을 향해 쭉 뻗어 있는 모습을 상상해 보세요.',
      soundAlike: '\'톨\' 발음이 \'톨게이트\'의 기둥처럼 길쭉하게 서 있는 물체를 연상시킵니다.',
      context: '사람의 신장이나 나무, 건물처럼 수직으로 길게 뻗은 대상의 높이를 설명할 때 주로 쓰입니다.',
      synonymAntonym: 'high는 사물의 높이를 말할 때 쓰지만, 사람의 키를 말할 때는 반드시 tall을 사용하며 반대말은 short입니다.',
    }),
    {
      definition: 'Measuring a large distance from the bottom to the top, especially used for people or upright objects.',
      synonyms: ['lofty', 'towering', 'elevated'],
      antonyms: ['short', 'low', 'diminutive'],
      exampleSentences: [
        { en: 'The basketball player is so tall that he can reach the hoop without jumping.', ko: '그 농구 선수는 키가 아주 커서 점프하지 않고도 농구 림에 손이 닿을 수 있다.' },
        { en: 'A tall oak tree provides plenty of shade for the entire backyard.', ko: '키 큰 떡갈나무 한 그루가 뒷마당 전체에 충분한 그늘을 만들어 준다.' },
      ],
      wordDistractors: ['toll', 'tail', 'tell'],
      definitionDistractors: [
        'Having a wide and flat shape that extends in all directions.',
        'Being extremely heavy or dense compared to surrounding objects.',
        'Moving at a rapid pace across a smooth horizontal surface.',
      ],
    }
  ),
  word('tap', '가볍게 두드리다', 6, 'verb',
    ['세게 치다', '밀다', '던지다', '잡다', '누르다', '쥐다', '찌르다', '비틀다', '흔들다', '긁다'],
    tips({
      etymology: '가볍게 두드리는 소리나 동작을 나타내는 의성어에서 유래했습니다.',
      visual: '손가락 끝으로 책상을 톡톡 치는 가벼운 움직임을 상상해 보세요.',
      soundAlike: '수도꼭지(tap)를 살짝 틀어 물이 가볍게 톡 떨어지는 소리를 연상하면 쉽습니다.',
      context: '주로 무언가를 살짝 건드리거나 조심스럽게 두드릴 때 사용되는 동사입니다.',
      synonymAntonym: '가볍게 치는 knock과 유사하며, 강하게 내리치는 hit이나 slam과는 반대됩니다.',
    }),
    {
      definition: 'to strike something lightly with a quick, gentle blow',
      synonyms: ['knock', 'pat', 'rap'],
      antonyms: ['hit', 'slam', 'pound'],
      exampleSentences: [
        { en: 'She tapped him on the shoulder to get his attention during the meeting.', ko: '그녀는 회의 중에 그의 주의를 끌기 위해 어깨를 가볍게 두드렸다.' },
        { en: 'He tapped his fingers on the desk impatiently while waiting for the results.', ko: '그는 결과를 기다리며 초조하게 책상 위를 손가락으로 톡톡 두드렸다.' },
      ],
      wordDistractors: ['tip', 'top', 'tab'],
      definitionDistractors: [
        'To pull something forcefully toward oneself with both hands.',
        'To twist an object repeatedly until it changes its original shape.',
        'To push a heavy item across the floor using steady pressure.',
      ],
    }
  ),
  word('tape', '테이프', 1, 'noun',
    ['접착제', '가위', '풀', '스테이플러', '종이', '끈', '상자', '포장지', '클립', '칼'],
    tips({
      etymology: '중세 영어 \'tappe\'에서 유래하여 좁고 긴 천이나 띠를 의미하게 되었습니다.',
      visual: '택배 상자를 밀봉할 때 길게 늘어나는 투명한 끈적이는 띠를 상상해 보세요.',
      soundAlike: '발음이 \'테잎\'으로 들리며, 무언가를 \'태\'워서 붙이는 것처럼 강력하게 고정한다고 연상하세요.',
      context: '사무실에서 서류를 붙이거나 포장할 때 가장 흔히 쓰이는 소모품입니다.',
      synonymAntonym: '무언가를 묶는 band와 비슷하지만, 아무것도 없는 gap과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A long, narrow strip of material with an adhesive surface used for joining or fastening things together.',
      synonyms: ['adhesive', 'band', 'strip'],
      antonyms: ['gap', 'opening', 'detachment'],
      exampleSentences: [
        { en: 'Please use some sticky material to seal the cardboard box securely.', ko: '판지 상자를 단단히 밀봉하기 위해 접착 테이프를 사용해 주세요.' },
        { en: 'The finish line was marked by a long white ribbon for the runners to cross.', ko: '결승선에는 주자들이 통과할 수 있도록 긴 흰색 테이프가 표시되어 있었습니다.' },
      ],
      wordDistractors: ['tarp', 'cape', 'gape'],
      definitionDistractors: [
        'A rigid container used for storing dry goods in a warehouse.',
        'A thin transparent sheet placed over windows for insulation.',
        'A woven fabric used as a decorative covering for furniture.',
      ],
    }
  ),
  word('target', '과녁', 7, 'noun',
    ['조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제', '기회', '기준'],
    tips({
      etymology: '프랑스어 targe(방패)에서 유래하여, 방패처럼 생긴 작은 판인 과녁을 의미하게 되었습니다.',
      visual: '양궁 선수가 활시위를 당기며 빨간색 중심점이 그려진 원형 판을 노려보는 모습을 상상하세요.',
      soundAlike: '타격(target)해야 할 지점이라고 연상하면 발음과 의미를 동시에 잡을 수 있습니다.',
      context: '비즈니스에서는 달성해야 할 목표 수치를, 군사나 스포츠에서는 물리적인 타격 지점을 뜻합니다.',
      synonymAntonym: '목표를 뜻하는 goal과 유사하며, 정처 없이 떠도는 상태인 stray와는 반대됩니다.',
    }),
    {
      definition: 'an object or mark that is selected as the aim of an attack or a physical strike',
      synonyms: ['mark', 'objective', 'goal'],
      antonyms: ['origin', 'source', 'stray'],
      exampleSentences: [
        { en: 'The archer took a deep breath and released the arrow toward the center of the red circle.', ko: '궁수는 심호흡을 하고 빨간 원의 중심을 향해 화살을 날렸다.' },
        { en: 'Marketing teams often identify a specific demographic as their primary audience for new products.', ko: '마케팅 팀은 종종 특정 인구 집단을 신제품의 주요 대상으로 설정한다.' },
      ],
      wordDistractors: ['tariff', 'tangent', 'garnet'],
      definitionDistractors: [
        'A financial penalty imposed for violating rules or regulations.',
        'A written summary of events submitted to a supervisor for review.',
        'A decorative ornament placed at the entrance of a building.',
      ],
    }
  ),
  word('task', '일', 4, 'noun',
    ['원인', '결과', '조건', '관계', '계획', '절차', '정보', '의미', '변화', '문제'],
    tips({
      etymology: '라틴어 \'taxa\'에서 유래하여 원래는 \'부과된 세금\'이나 \'의무\'를 뜻했습니다.',
      visual: '책상 위에 산더미처럼 쌓인 서류 뭉치나 체크리스트를 떠올려 보세요.',
      soundAlike: '발음이 \'태스크\'이므로 \'태산\'처럼 쌓인 \'스크\'린 속 업무라고 외워보세요.',
      context: '직장이나 학교에서 정해진 시간 내에 끝내야 하는 구체적인 업무를 말할 때 주로 쓰입니다.',
      synonymAntonym: 'job과 비슷하지만 task는 좀 더 구체적이고 개별적인 업무 단위를 강조합니다.',
    }),
    {
      definition: 'A specific piece of work to be done or an assignment that must be completed.',
      synonyms: ['assignment', 'duty', 'chore'],
      antonyms: ['pastime', 'leisure', 'recreation'],
      exampleSentences: [
        { en: 'The manager assigned a difficult project to the team as their primary objective for the month.', ko: '매니저는 이번 달의 주요 목표로 팀에게 어려운 프로젝트 업무를 배정했습니다.' },
        { en: 'Completing every daily chore requires a lot of discipline and time management.', ko: '매일의 모든 과업을 완수하는 것은 많은 절제력과 시간 관리를 필요로 합니다.' },
      ],
      wordDistractors: ['tusk', 'flask', 'mask'],
      definitionDistractors: [
        'A reward given to employees for exceeding their monthly quota.',
        'A brief period of rest taken between two scheduled activities.',
        'An official document granting permission to operate a business.',
      ],
    }
  ),
  word('taste', '맛', 2, 'noun',
    ['냄새', '소리', '촉감', '시력', '감각', '모양', '색깔', '무게', '온도', '부피'],
    tips({
      etymology: '라틴어 \'taxare(만져보다, 평가하다)\'에서 유래하여 혀로 무언가를 평가하는 행위로 발전했습니다.',
      visual: '혀 끝에 달콤한 사탕이나 매운 고추가 닿았을 때 느껴지는 강렬한 자극을 상상해 보세요.',
      soundAlike: '\'테이스트\'는 \'테이프\'와 발음이 비슷합니다. 테이프를 입에 붙이면 아무 맛도 안 느껴진다고 연상해 보세요.',
      context: '음식의 풍미뿐만 아니라 옷을 고르는 안목이나 예술적 취향을 나타낼 때도 자주 쓰입니다.',
      synonymAntonym: 'flavor는 혀로 느끼는 구체적인 맛을, preference는 개인적인 취향을 강조할 때 유의어로 쓰입니다.',
    }),
    {
      definition: 'the sensation of flavor perceived in the mouth and throat on contact with a substance',
      synonyms: ['flavor', 'savor', 'relish'],
      antonyms: ['tastelessness', 'blandness', 'insipidity'],
      exampleSentences: [
        { en: 'The chef added a pinch of salt to improve the overall flavor of the soup.', ko: '요리사는 수프의 전체적인 맛을 개선하기 위해 소금 한 꼬집을 넣었습니다.' },
        { en: 'She has excellent judgment in furniture and home decor.', ko: '그녀는 가구와 집 꾸미기에 있어 아주 훌륭한 안목을 가지고 있습니다.' },
      ],
      wordDistractors: ['haste', 'paste', 'baste'],
      definitionDistractors: [
        'The texture of a surface detected by running fingers over it.',
        'A strong emotional reaction triggered by hearing unexpected news.',
        'The visible color pattern found on the outer layer of fruit.',
      ],
    }
  ),
  word('tattoo', '문신', 5, 'noun',
    ['반창고', '상처', '흉터', '주름', '점', '반점', '기미', '주근깨', '사마귀', '화상'],
    tips({
      etymology: '폴리네시아어 \'tatau\'에서 유래하여 피부에 잉크로 그림이나 글자를 새기는 것을 뜻합니다.',
      visual: '팔뚝에 멋진 용이나 꽃 무늬가 영구적으로 새겨져 있는 모습을 상상해 보세요.',
      soundAlike: '\'타투\'라는 발음은 한국에서도 그대로 사용되어 쉽게 기억할 수 있습니다.',
      context: '현대에는 예술적 자기표현의 한 형태로, 다양한 디자인을 피부에 영구적으로 새기는 것을 말합니다.',
      synonymAntonym: '피부에 새기는 것이므로 body art, ink와 유사한 개념입니다.',
    }),
    {
      definition: 'A permanent design or mark made on the skin by inserting pigment into punctures or by raising scars.',
      synonyms: ['body art', 'ink', 'marking'],
      antonyms: ['removal', 'erasure', 'blank skin'],
      exampleSentences: [
        { en: 'He got a tattoo of a dragon on his left arm when he turned eighteen.', ko: '그는 열여덟 살이 되었을 때 왼팔에 용 문신을 새겼다.' },
        { en: 'The artist specializes in creating intricate floral tattoo designs for her clients.', ko: '그 아티스트는 고객들을 위해 정교한 꽃무늬 문신 디자인을 전문으로 만든다.' },
      ],
      wordDistractors: ['taboo', 'tango', 'tassel'],
      definitionDistractors: [
        'A temporary stain on fabric caused by accidental contact with dye.',
        'A medical bandage applied to a wound to promote healing.',
        'A decorative patch sewn onto clothing for identification purposes.',
      ],
    }
  ),
  word('tax', '세금', 6, 'noun',
    ['벌금', '보조금', '이자', '임금', '수수료', '관세', '연금', '보험료', '배당금', '수당'],
    tips({
      etymology: '라틴어 \'taxare\'에서 유래했으며, 이는 가치를 평가하거나 추산한다는 의미를 담고 있습니다.',
      visual: '월급 명세서에서 \'공제\' 항목으로 빠져나가는 돈의 액수를 떠올려 보세요.',
      soundAlike: '택배(Tax-bae)를 받을 때 지불해야 하는 추가 비용이라고 연상해 보세요.',
      context: '정부가 공공 서비스를 제공하기 위해 시민들에게 징수하는 필수적인 자금입니다.',
      synonymAntonym: 'Duty나 Levy와 비슷하지만, 자유를 뜻하는 Liberty와는 반대되는 의무적 성격이 강합니다.',
    }),
    {
      definition: 'A compulsory financial charge or some other type of levy imposed upon a taxpayer by a governmental organization.',
      synonyms: ['levy', 'duty', 'tariff'],
      antonyms: ['subsidy', 'refund', 'rebate'],
      exampleSentences: [
        { en: 'The government decided to increase the income levy for high earners this year.', ko: '정부는 올해 고소득자에 대한 소득세를 인상하기로 결정했습니다.' },
        { en: 'Every citizen is required to pay a certain amount of their earnings to support public infrastructure.', ko: '모든 시민은 공공 기반 시설을 지원하기 위해 수입의 일정 금액을 세금으로 납부해야 합니다.' },
      ],
      wordDistractors: ['taxi', 'tack', 'wax'],
      definitionDistractors: [
        'A voluntary donation made to a charitable organization.',
        'A bonus payment distributed to employees at the end of the year.',
        'An interest rate applied to savings held in a bank account.',
      ],
    }
  ),
  word('tea', '차', 7, 'noun',
    ['커피', '우유', '설탕', '소금', '접시', '식탁', '주스', '물병', '냄비', '수저'],
    tips({
      etymology: '중국어 \'tê\'에서 유래하여 전 세계로 퍼진 음료의 이름입니다.',
      visual: '뜨거운 컵에서 김이 모락모락 피어오르는 찻잔의 모습을 상상해 보세요.',
      soundAlike: '알파벳 \'T\'와 발음이 똑같아 기억하기 매우 쉽습니다.',
      context: '영국에서는 오후에 휴식을 취하며 마시는 문화를 매우 중요하게 여깁니다.',
      synonymAntonym: 'brew나 infusion과 비슷하며, 고체 음식과는 대조되는 액체 음료입니다.',
    }),
    {
      definition: 'A hot or cold beverage prepared by soaking dried leaves in boiling water.',
      synonyms: ['brew', 'infusion', 'beverage'],
      antonyms: ['solid', 'food', 'meat'],
      exampleSentences: [
        { en: 'She enjoys drinking a cup of green herbal infusion every morning.', ko: '그녀는 매일 아침 따뜻한 녹차 한 잔을 마시는 것을 즐깁니다.' },
        { en: 'The host served some biscuits along with the hot drinks to the guests.', ko: '주인은 손님들에게 뜨거운 차와 함께 비스킷을 내놓았습니다.' },
      ],
      wordDistractors: ['tee', 'pea', 'sea'],
      definitionDistractors: [
        'A thick paste made from ground grains used as a cooking base.',
        'A carbonated liquid served chilled in a tall glass with ice.',
        'A fermented dairy product consumed as a breakfast staple.',
      ],
    }
  ),
  word('teach', '가르치다', 3, 'verb',
    ['배우다', '공부하다', '연구하다', '연습하다', '시험하다', '졸업하다', '입학하다', '발표하다', '토론하다', '기록하다'],
    tips({
      etymology: '고대 영어 \'tæcan\'에서 유래했으며, 원래 \'보여주다\' 또는 \'지시하다\'라는 의미를 담고 있습니다.',
      visual: '칠판 앞에 서서 학생들에게 지식을 전달하는 선생님의 모습을 상상해 보세요.',
      soundAlike: '\'티치\'라고 발음하며, 지식을 \'터치(touch)\'하여 전달한다고 연상하면 쉽습니다.',
      context: '학교나 학원 같은 교육 환경에서 지식이나 기술을 전수할 때 주로 사용됩니다.',
      synonymAntonym: '지식을 주는 것은 instruct, 반대로 지식을 받는 것은 learn입니다.',
    }),
    {
      definition: 'To impart knowledge to or instruct someone as to how to do something.',
      synonyms: ['instruct', 'educate', 'tutor'],
      antonyms: ['learn', 'study', 'ignore'],
      exampleSentences: [
        { en: 'The experienced professor will guide the students and impart new skills during the seminar.', ko: '경험 많은 교수는 세미나 동안 학생들을 지도하고 새로운 기술을 가르칠 것입니다.' },
        { en: 'Parents often show their children how to behave properly in social situations.', ko: '부모님은 종종 자녀들에게 사회적 상황에서 올바르게 행동하는 법을 가르칩니다.' },
      ],
      wordDistractors: ['touch', 'beach', 'reach'],
      definitionDistractors: [
        'To evaluate the performance of someone through a formal review process.',
        'To physically demonstrate a product to potential customers.',
        'To memorize a set of facts by reading them aloud repeatedly.',
      ],
    }
  ),
  word('tear', '눈물', 4, 'noun',
    ['침', '콧물', '피', '땀', '점액', '타액', '혈장', '분비물', '체액', '진물'],
    tips({
      etymology: '고대 영어 \'teahor\'에서 유래되었으며, 슬픔이나 자극으로 인해 눈에서 흐르는 액체를 뜻합니다.',
      visual: '슬픈 영화를 보며 뺨 위로 투명한 물방울이 한 방울 톡 떨어지는 모습을 상상해 보세요.',
      soundAlike: '\'티어\'라고 발음되는데, 눈물이 맺힌 눈을 \'틔워\' 준다고 연상하면 기억하기 쉽습니다.',
      context: '기쁨의 눈물(tears of joy)이나 슬픔의 눈물(tears of sorrow)처럼 감정과 함께 자주 쓰입니다.',
      synonymAntonym: 'droplet과 비슷하지만, 웃음(laughter)이나 기쁨(joy)과는 상반된 감정에서 주로 나옵니다.',
    }),
    {
      definition: 'A drop of clear salty liquid secreted from the eye, typically when someone is crying.',
      synonyms: ['droplet', 'eye-water', 'bead'],
      antonyms: ['smile', 'laughter', 'dryness'],
      exampleSentences: [
        { en: 'A single salty drop rolled down her cheek as she finished reading the letter.', ko: '그녀가 편지를 다 읽었을 때 뺨 위로 짠 눈물 한 방울이 흘러내렸다.' },
        { en: 'The child wiped away a tiny moisture from his eye after falling down.', ko: '아이는 넘어지고 나서 눈에서 작은 눈물을 닦아냈다.' },
      ],
      wordDistractors: ['tier', 'tare', 'dear'],
      definitionDistractors: [
        'A sharp pain felt in the muscles after intense physical exercise.',
        'A small opening in a wall that allows air to pass through.',
        'A thin layer of moisture that forms on cold glass surfaces.',
      ],
    }
  ),
  word('tease', '괴롭히다', 9, 'verb',
    ['칭찬하다', '위로하다', '격려하다', '존경하다', '보호하다', '무시하다', '순응하다', '협력하다', '용서하다', '응원하다'],
    tips({
      etymology: '양모의 결을 고르기 위해 빗질하며 잡아당기던 행위에서 유래하여, 누군가를 자극하거나 괴롭히는 의미로 발전했습니다.',
      visual: '친구가 내 가방을 높이 들고 장난치며 웃고 있는 얄미운 상황을 상상해 보세요.',
      soundAlike: '발음이 \'티즈\'와 비슷하므로, 상대방의 성질을 \'티\'나게 \'즈\'질적으로 긁는 상황을 떠올려 보세요.',
      context: '주로 가벼운 장난이나 농담으로 남을 놀릴 때 쓰이지만, 때로는 집요하게 괴롭히는 뉘앙스로도 쓰입니다.',
      synonymAntonym: 'mock이나 annoy와 비슷하지만, praise나 comfort와는 정반대의 행동입니다.',
    }),
    {
      definition: 'to laugh at someone or say unkind things to them, either as a joke or to upset them',
      synonyms: ['mock', 'taunt', 'annoy'],
      antonyms: ['praise', 'comfort', 'flatter'],
      exampleSentences: [
        { en: 'The older boys used to laugh and make fun of his haircut every morning.', ko: '나이 많은 소년들은 매일 아침 그의 머리 모양을 비웃고 놀리곤 했다.' },
        { en: 'Stop trying to provoke your sister by hiding her favorite toys.', ko: '여동생이 가장 좋아하는 장난감을 숨겨서 화나게 하는 짓 좀 그만해라.' },
      ],
      wordDistractors: ['lease', 'cease', 'grease'],
      definitionDistractors: [
        'To gently encourage someone to try a new and difficult challenge.',
        'To carefully untangle knots from a piece of string or rope.',
        'To polish a surface by rubbing it with a soft cloth repeatedly.',
      ],
    }
  ),
  word('teen', '십 대', 1, 'noun',
    ['성인', '유아', '노인', '어린이', '중년', '유년', '청년', '장년', '영아', '아기'],
    tips({
      etymology: '숫자 13(thirteen)부터 19(nineteen)까지 공통으로 들어가는 접미사 -teen에서 유래하여 그 나이대의 사람을 뜻합니다.',
      visual: '교복을 입고 친구들과 함께 학교 앞에서 웃고 있는 청소년의 모습을 상상해 보세요.',
      soundAlike: '숫자 10을 뜻하는 ten과 비슷하게 들리며, 10대 나이대를 떠올리면 쉽습니다.',
      context: '13세부터 19세까지의 청소년을 부를 때 사용하며, teenager의 줄임말로도 쓰입니다.',
      synonymAntonym: 'teenager, adolescent와 같은 뜻이며, adult(성인)와는 반대되는 개념입니다.',
    }),
    {
      definition: 'a person between the ages of thirteen and nineteen; a teenager',
      synonyms: ['teenager', 'adolescent', 'youth'],
      antonyms: ['adult', 'elder', 'senior'],
      exampleSentences: [
        { en: 'The summer camp is designed specifically for teens between thirteen and eighteen.', ko: '그 여름 캠프는 13세에서 18세 사이의 십 대를 위해 특별히 마련되었다.' },
        { en: 'Many teens struggle with peer pressure during their high school years.', ko: '많은 십 대들이 고등학교 시절 또래 압력으로 어려움을 겪는다.' },
      ],
      wordDistractors: ['keen', 'seen', 'ten'],
      definitionDistractors: [
        'A small child who has not yet reached school age.',
        'A professional athlete competing at the highest level of sport.',
        'A retired individual receiving a monthly pension from the government.',
      ],
    }
  ),
  word('teenage', '10대의', 5, 'adjective',
    ['성인의', '유아의', '노년의', '중년의', '유년의', '장년의', '영아의', '청년의', '아동의', '노인의'],
    tips({
      etymology: '숫자 13(thirteen)부터 19(nineteen)까지 공통으로 들어가는 접미사 -teen에서 유래했습니다.',
      visual: '교복을 입고 친구들과 떡볶이를 먹으며 웃고 있는 중고등학생들의 모습을 상상해 보세요.',
      soundAlike: '틴에이지 - \'튄(teen) 에이지(age)\', 에너지가 톡톡 튀는 나이대라고 기억하면 쉽습니다.',
      context: '주로 사춘기 시절의 반항이나 꿈, 열정적인 취미 생활을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: '사춘기를 뜻하는 adolescent와 비슷하며, 성숙한 adult와는 반대되는 개념입니다.',
    }),
    {
      definition: 'relating to or being in the period of life between the ages of thirteen and nineteen',
      synonyms: ['adolescent', 'youthful', 'juvenile'],
      antonyms: ['adult', 'mature', 'elderly'],
      exampleSentences: [
        { en: 'Many people experience significant emotional changes during their teenage years.', ko: '많은 사람들이 10대 시절에 상당한 감정적 변화를 경험합니다.' },
        { en: 'The magazine is specifically designed to appeal to a teenage audience.', ko: '그 잡지는 특히 10대 독자들의 흥미를 끌기 위해 제작되었습니다.' },
      ],
      wordDistractors: ['tonnage', 'tentage', 'hostage'],
      definitionDistractors: [
        'Relating to the period of early childhood before formal schooling begins.',
        'Characteristic of professionals in their mid-career development stage.',
        'Pertaining to the final years of active employment before retirement.',
      ],
    }
  ),
  word('telegraph', '전신', 5, 'noun',
    ['전화기', '라디오', '텔레비전', '편지', '신문', '인터넷', '위성', '팩스', '컴퓨터', '스마트폰'],
    tips({
      etymology: '멀리라는 뜻의 tele와 쓰다라는 뜻의 graph가 합쳐져 멀리 글자를 보낸다는 의미가 됩니다.',
      visual: '오래된 영화에서 통신사가 모스 부호를 톡톡 두드리며 긴급 메시지를 보내는 장면을 상상해 보세요.',
      soundAlike: '텔레비전(television)과 앞부분이 같아서 멀리 정보를 전달하는 기계임을 쉽게 기억할 수 있습니다.',
      context: '이메일이나 전화가 발명되기 전, 대륙 간에 가장 빠르게 소식을 전하던 혁신적인 통신 수단이었습니다.',
      synonymAntonym: 'wire나 cable은 비슷한 통신 방식을 뜻하며, 직접 대면하는 face-to-face와는 반대되는 개념입니다.',
    }),
    {
      definition: 'An old-fashioned system of sending messages over long distances by using electrical signals through wires.',
      synonyms: ['wire', 'cablegram', 'teletype'],
      antonyms: ['speech', 'whisper', 'conversation'],
      exampleSentences: [
        { en: 'The news of the peace treaty was sent across the country via the electric wire system.', ko: '평화 조약 소식은 전기 통신망을 통해 전국으로 전달되었습니다.' },
        { en: 'Ships used to rely on this method of communication to signal for help during emergencies at sea.', ko: '배들은 바다에서 비상 상황 발생 시 도움을 요청하기 위해 이 통신 방식에 의존하곤 했습니다.' },
      ],
      wordDistractors: ['telegram', 'telescope', 'telepath'],
      definitionDistractors: [
        'A device that amplifies sound waves for large public gatherings.',
        'A printed publication distributed daily with current news articles.',
        'A mechanical instrument used for measuring atmospheric pressure changes.',
      ],
    }
  ),
  word('telephone', '전화', 2, 'noun',
    ['텔레비전', '컴퓨터', '라디오', '신문', '편지', '카메라', '계산기', '시계', '거울', '안경'],
    tips({
      etymology: '멀리라는 뜻의 tele와 소리라는 뜻의 phone이 합쳐져 멀리 소리를 전달한다는 의미입니다.',
      visual: '귀에 수화기를 대고 누군가와 즐겁게 대화하는 모습을 상상해 보세요.',
      soundAlike: '텔레비전과 앞부분이 같지만, 끝이 폰으로 끝나면 통화 기기입니다.',
      context: '스마트폰도 결국 이 기기의 현대적인 형태이며, 주로 통화 기능을 말할 때 쓰입니다.',
      synonymAntonym: 'phone이라고 줄여 부르기도 하며, 편지와 같은 서면 통신과는 대조적입니다.',
    }),
    {
      definition: 'An electronic device used for transmitting voice or data over long distances through wires or radio signals.',
      synonyms: ['phone', 'handset', 'receiver'],
      antonyms: ['silence', 'isolation', 'disconnection'],
      exampleSentences: [
        { en: 'The office worker answered the ringing device immediately to assist the customer.', ko: '사무실 직원은 고객을 돕기 위해 울리는 전화를 즉시 받았습니다.' },
        { en: 'Communication became much faster after the invention of this long-distance voice transmitter.', ko: '이 원거리 음성 송신기의 발명 이후 통신은 훨씬 빨라졌습니다.' },
      ],
      wordDistractors: ['telescope', 'televise', 'telltale'],
      definitionDistractors: [
        'A portable screen used for displaying visual images and videos.',
        'A handwritten letter delivered by a postal courier service.',
        'A musical instrument that produces sound through vibrating strings.',
      ],
    }
  ),
  word('tell', '말하다', 3, 'verb',
    ['결정하다', '요청하다', '설명하다', '관리하다', '보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다'],
    tips({
      etymology: '고대 영어 \'tellan\'에서 유래했으며, 원래는 \'세다(count)\'나 \'계산하다\'라는 뜻에서 \'이야기하다\'로 발전했습니다.',
      visual: '누군가의 귀에 대고 비밀을 속삭이거나, 아이에게 동화책을 읽어주는 부모님의 모습을 상상해 보세요.',
      soundAlike: '전화기를 뜻하는 \'Telephone\'의 앞부분과 발음이 비슷하죠? 전화로 소식을 전하는 장면을 떠올리세요.',
      context: '단순히 소리 내어 말하는 것(say)보다 정보나 사실을 누군가에게 전달하는 뉘앙스가 강합니다.',
      synonymAntonym: '정보를 알리는 inform과는 비슷하지만, 진실을 숨기는 conceal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To communicate information, facts, or news to someone through spoken or written words.',
      synonyms: ['inform', 'narrate', 'disclose'],
      antonyms: ['listen', 'conceal', 'suppress'],
      exampleSentences: [
        { en: 'Please let me know if you decide to disclose the secret to your best friend.', ko: '가장 친한 친구에게 그 비밀을 말하기로 결정했다면 나에게 알려줘.' },
        { en: 'The witness had to recount exactly what happened during the accident.', ko: '목격자는 사고 당시에 정확히 무슨 일이 있었는지 말해야 했다.' },
      ],
      wordDistractors: ['toll', 'bell', 'yell'],
      definitionDistractors: [
        'To carefully listen to someone without offering any response.',
        'To write a detailed account of events in a personal journal.',
        'To sing a melody softly to calm a restless child to sleep.',
      ],
    }
  ),
  word('temperature', '온도', 6, 'noun',
    ['습도', '기압', '강수량', '풍속', '밀도', '부피', '질량', '속도', '가속도', '압력'],
    tips({
      etymology: '라틴어 \'temperatura\'에서 유래했으며, 이는 \'적절한 혼합\'이나 \'조절\'을 의미하는 temperare에서 나왔습니다.',
      visual: '빨간색 액체가 위아래로 움직이는 유리 온도계의 눈금을 상상해 보세요.',
      soundAlike: '\'템퍼러처\'라고 발음하며, 스테이크의 굽기 정도인 \'템퍼\'를 조절하는 상황을 떠올리면 쉽습니다.',
      context: '날씨뿐만 아니라 요리할 때의 오븐 열기나 사람의 체온을 말할 때도 항상 쓰이는 단어입니다.',
      synonymAntonym: '열기를 뜻하는 heat과 비슷하지만, 차가운 정도까지 포함하는 더 객관적인 수치 개념입니다.',
    }),
    {
      definition: 'A measurement that indicates how hot or cold a person, object, or environment is.',
      synonyms: ['warmth', 'fever', 'climate'],
      antonyms: ['absolute zero', 'nothingness', 'void'],
      exampleSentences: [
        { en: 'The boiling point of water occurs at a specific degree depending on the atmospheric pressure.', ko: '물의 끓는점은 기압에 따라 특정 온도에서 발생합니다.' },
        { en: 'Doctors monitored the patient\'s condition closely because his body heat remained unusually high.', ko: '의사들은 환자의 체온이 비정상적으로 높게 유지되었기 때문에 그의 상태를 면밀히 관찰했습니다.' },
      ],
      wordDistractors: ['temperate', 'temperament', 'template'],
      definitionDistractors: [
        'The speed at which an object moves through a given medium.',
        'The amount of moisture present in the surrounding atmosphere.',
        'The level of brightness emitted by a light source in a room.',
      ],
    }
  ),
  word('temple', '관자놀이', 7, 'noun',
    ['이마', '턱', '광대뼈', '목덜미', '정수리', '귓바퀴', '눈꺼풀', '콧등', '입술', '눈썹'],
    tips({
      etymology: '라틴어 \'tempus\'에서 유래했으며, 이는 \'시간\'을 뜻합니다. 인생의 시간이 흐름을 가장 먼저 보여주는 흰머리가 이곳에서 시작된다는 의미가 담겨 있습니다.',
      visual: '안경 다리가 귀 뒤로 넘어가기 전 머리 옆부분에 닿는 지점을 손가락으로 짚어보세요.',
      soundAlike: '절(사원)을 뜻하는 단어와 철자가 같습니다. 사원에서 명상을 하다가 머리가 아파서 \'관자놀이\'를 지압하는 모습을 상상하세요.',
      context: '두통이 심할 때나 안경이 꽉 낄 때 주로 언급되는 신체 부위입니다.',
      synonymAntonym: '신체 부위로서의 특정 명칭이므로 직접적인 유의어는 드물지만, 넓게는 side of the head라고 표현하며 반대되는 개념은 없습니다.',
    }),
    {
      definition: 'The flat part of either side of the head between the forehead and the ear.',
      synonyms: ['side of the forehead', 'temporal region', 'head flank'],
      antonyms: ['back of head', 'chin', 'center of face'],
      exampleSentences: [
        { en: 'He rubbed his left side gently to relieve the throbbing pressure of the headache.', ko: '그는 두통으로 인한 욱신거리는 압박감을 완화하기 위해 왼쪽 관자놀이를 부드럽게 문질렀다.' },
        { en: 'The stray bullet grazed the soldier\'s side, narrowly missing a fatal injury.', ko: '유탄이 군인의 관자놀이를 스치고 지나가며 치명적인 부상을 간신히 면했다.' },
      ],
      wordDistractors: ['temper', 'trample', 'sample'],
      definitionDistractors: [
        'A large religious structure built for worship and spiritual ceremonies.',
        'The rounded tip of the elbow where two bones connect.',
        'A bony ridge located along the bridge of the nose.',
      ],
    }
  ),
  word('temporary', '일시적인', 8, 'adjective',
    ['영구적인', '지속적인', '불변의', '고정된', '장기적인', '무한한', '확정된', '안정된', '불멸의', '정적인'],
    tips({
      etymology: '라틴어 \'tempus(시간)\'에서 유래하여, 영원하지 않고 \'특정한 시간 동안만\' 지속됨을 뜻합니다.',
      visual: '공사 현장에 잠시 세워둔 가림막이나 비가 올 때만 잠깐 생기는 물웅덩이를 상상해 보세요.',
      soundAlike: '발음이 \'템포러리\'이므로, 음악의 \'템포(속도)\'처럼 빠르게 지나가는 순간을 연상하면 쉽습니다.',
      context: '정규직이 아닌 아르바이트나 계약직 직원을 부를 때 주로 사용되는 형용사입니다.',
      synonymAntonym: '영원함을 뜻하는 permanent와 대조하여 \'잠시 머무는\' 느낌의 유의어들과 함께 외우세요.',
    }),
    {
      definition: 'lasting for only a limited period of time and not intended to be permanent',
      synonyms: ['transient', 'momentary', 'provisional'],
      antonyms: ['permanent', 'lasting', 'eternal'],
      exampleSentences: [
        { en: 'The heavy rain caused a temporary power outage throughout the entire neighborhood.', ko: '폭우로 인해 동네 전체에 일시적인 정전이 발생했습니다.' },
        { en: 'She found a temporary job at the department store during the busy holiday season.', ko: '그녀는 바쁜 연휴 기간 동안 백화점에서 임시 일자리를 구했습니다.' },
      ],
      wordDistractors: ['template', 'temporal', 'tempered'],
      definitionDistractors: [
        'Designed to remain in place for an extended or indefinite period.',
        'Occurring on a regular and predictable schedule throughout the year.',
        'Built with materials intended to withstand extreme weather conditions.',
      ],
    }
  ),
  word('tempt', '유혹하다', 9, 'verb',
    ['분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다', '확인하다'],
    tips({
      etymology: '라틴어 \'temptare\'에서 유래했으며, 이는 \'만져보다\' 혹은 \'시험하다\'라는 의미를 담고 있습니다.',
      visual: '다이어트 중에 눈앞에 놓인 달콤한 초콜릿 케이크가 나를 부르는 장면을 상상해 보세요.',
      soundAlike: '\'템트\' 발음이 \'탐나다\'와 비슷하게 들리기도 하니, 무언가 탐나게 유혹하는 상황을 연상하세요.',
      context: '주로 맛있는 음식, 사고 싶은 물건, 혹은 해서는 안 될 행동을 하고 싶게 만드는 상황에서 쓰입니다.',
      synonymAntonym: '매혹하는 entice와 거절하는 repel을 함께 기억하면 의미의 대비가 확실해집니다.',
    }),
    {
      definition: 'to make someone want to have or do something, especially something that is unnecessary or wrong',
      synonyms: ['entice', 'lure', 'seduce'],
      antonyms: ['repel', 'discourage', 'deter'],
      exampleSentences: [
        { en: 'The warm smell of fresh bread began to entice the hungry passersby into the bakery.', ko: '갓 구운 빵의 따뜻한 냄새가 배고픈 행인들을 빵집 안으로 유혹하기 시작했다.' },
        { en: 'Nothing could persuade him to break his diet, even though the dessert menu looked incredible.', ko: '디저트 메뉴가 엄청나 보였음에도 불구하고, 그 어떤 것도 그가 다이어트를 포기하도록 유혹할 수 없었다.' },
      ],
      wordDistractors: ['tempo', 'tramp', 'tamp'],
      definitionDistractors: [
        'To strongly advise someone against taking a risky course of action.',
        'To carefully inspect an item before making a purchase decision.',
        'To remove impurities from a liquid by passing it through a filter.',
      ],
    }
  ),
  word('tenant', '임차인', 5, 'noun',
    ['건물주', '관리인', '중개인', '소유주', '경비원', '방문객', '상속인', '거주지', '임대료', '계약서'],
    tips({
      etymology: '라틴어 tenere(잡다, 보유하다)에서 유래하여 땅이나 건물을 빌려 점유하고 있는 사람을 뜻합니다.',
      visual: '월세 계약서에 서명을 하고 아파트 열쇠를 건네받는 세입자의 모습을 상상해 보세요.',
      soundAlike: '발음이 \'테넌트\'인데, \'테두리 안에(안에) 사는 사람\'으로 연상하면 쉽습니다.',
      context: '부동산 계약이나 아파트 관리 규정을 다루는 뉴스나 문서에서 자주 등장하는 용어입니다.',
      synonymAntonym: '임차인을 뜻하는 occupant와 유사하며, 반대 개념인 집주인은 landlord라고 부릅니다.',
    }),
    {
      definition: 'A person who occupies land or property rented from a landlord.',
      synonyms: ['occupant', 'lessee', 'renter'],
      antonyms: ['landlord', 'owner', 'freeholder'],
      exampleSentences: [
        { en: 'The new resident signed a two-year lease agreement for the downtown apartment.', ko: '새로운 세입자는 시내 아파트에 대해 2년 임대 계약서에 서명했습니다.' },
        { en: 'Every person living in the building must follow the noise regulations after midnight.', ko: '건물에 거주하는 모든 임차인은 자정 이후 소음 규정을 준수해야 합니다.' },
      ],
      wordDistractors: ['tenet', 'tendon', 'tandem'],
      definitionDistractors: [
        'A legal representative who argues cases on behalf of clients in court.',
        'A construction worker responsible for maintaining building exteriors.',
        'A government official who inspects commercial properties for safety.',
      ],
    }
  ),
  word('tend', '경향이 있다', 4, 'verb',
    ['피하다', '거부하다', '외면하다', '무시하다', '거절하다', '저항하다', '벗어나다', '중단하다', '방해하다', '포기하다'],
    tips({
      etymology: '라틴어 tendere(뻗다, 향하다)에서 유래하여 마음이나 행동이 특정 방향으로 기울어지는 것을 의미합니다.',
      visual: '저울의 한쪽 접시가 아래로 서서히 기울어지는 모습을 상상하며 마음의 무게가 쏠리는 느낌을 연상하세요.',
      soundAlike: '텐트(tent)를 칠 때 한쪽으로 팽팽하게 당겨지는(tend) 힘의 방향을 생각하면 기억하기 쉽습니다.',
      context: '주로 뒤에 to 부정사를 동반하여 습관적인 행동이나 자연스러운 흐름을 설명할 때 자주 쓰입니다.',
      synonymAntonym: '기울다라는 뜻의 lean과 유사하며, 반대로 거부하거나 피한다는 뜻의 avoid와 대조됩니다.',
    }),
    {
      definition: 'to be likely to behave in a particular way or have a certain characteristic',
      synonyms: ['incline', 'lean', 'gravitate'],
      antonyms: ['avoid', 'neglect', 'shun'],
      exampleSentences: [
        { en: 'People often forget their passwords when they are under a lot of stress.', ko: '사람들은 스트레스를 많이 받을 때 비밀번호를 잊어버리는 경향이 있다.' },
        { en: 'Prices for seasonal fruits decrease during the peak harvest months.', ko: '제철 과일 가격은 수확이 가장 활발한 달에 하락하는 경향이 있다.' },
      ],
      wordDistractors: ['tent', 'bend', 'fend'],
      definitionDistractors: [
        'To deliberately avoid a particular behavior or activity.',
        'To complete a task in an unusually short amount of time.',
        'To suddenly change direction without any prior indication.',
      ],
    }
  ),
  word('tender', '제공', 5, 'noun',
    ['거절', '회수', '철회', '보류', '금지', '파기', '중단', '방해', '지연', '축소'],
    tips({
      etymology: '라틴어 tendere(뻗다)에서 유래하여 손을 뻗어 무언가를 내미는 행위에서 \'제공\'이나 \'입찰\'이라는 의미가 되었습니다.',
      visual: '공식적인 서류나 돈을 두 손으로 정중하게 상대방에게 내미는 모습을 상상해 보세요.',
      soundAlike: '\'텐더\' 치킨을 주문할 때 점원이 음식을 \'제공\'하는 상황을 연상하면 기억하기 쉽습니다.',
      context: '주로 비즈니스나 법적 상황에서 공식적인 제안이나 대금 지불 수단을 의미할 때 자주 쓰입니다.',
      synonymAntonym: '무언가를 주는 bid와 반대로, 거두어들이는 withdrawal을 함께 외우면 효과적입니다.',
    }),
    {
      definition: 'A formal offer to supply goods or services for a specific price, or a medium of payment allowed by law.',
      synonyms: ['bid', 'proposal', 'offering'],
      antonyms: ['withdrawal', 'rejection', 'refusal'],
      exampleSentences: [
        { en: 'The construction company submitted a competitive tender for the new bridge project.', ko: '그 건설 회사는 새 교량 프로젝트를 위해 경쟁력 있는 입찰서를 제출했습니다.' },
        { en: 'The shopkeeper refused to accept high-denomination banknotes as legal tender.', ko: '가게 주인은 고액권 지폐를 법정 화폐로 받아들이기를 거부했습니다.' },
      ],
      wordDistractors: ['tinder', 'render', 'vendor'],
      definitionDistractors: [
        'A harsh criticism delivered publicly to express strong disapproval.',
        'A detailed receipt listing all items purchased during a transaction.',
        'A physical act of returning borrowed goods to their original owner.',
      ],
    }
  ),
  word('tense', '시제', 6, 'noun',
    ['문법', '어휘', '발음', '구문', '문장', '어미', '조사', '접미사', '접두사', '어근'],
    tips({
      etymology: '라틴어 \'tempus(시간)\'에서 유래하여 문법에서 동작이 일어나는 시간대를 나타냅니다.',
      visual: '타임라인 위에 과거, 현재, 미래를 가리키는 화살표가 그려진 문법 책 페이지를 상상하세요.',
      soundAlike: '긴장된 상태를 뜻하는 형용사 \'tense\'와 발음이 같으니, \'시간 때문에 긴장된다\'고 연상해 보세요.',
      context: '글을 쓸 때 동사의 형태를 바꾸어 사건이 언제 발생했는지 명확히 전달할 때 사용됩니다.',
      synonymAntonym: '시간적 배경을 뜻하는 time과 유사하며, 특정 시점이 없는 상태와는 대조적입니다.',
    }),
    {
      definition: 'A grammatical category that locates a situation in time, indicating whether an action takes place in the past, present, or future.',
      synonyms: ['inflection', 'time', 'aspect'],
      antonyms: ['timelessness', 'eternity', 'invariability'],
      exampleSentences: [
        { en: 'The teacher explained how to change the verb into the past form to indicate a completed action.', ko: '선생님은 완료된 동작을 나타내기 위해 동사를 과거 시제로 바꾸는 방법을 설명했습니다.' },
        { en: 'Many students find it difficult to master the perfect forms in English grammar.', ko: '많은 학생이 영어 문법에서 완료 시제 형태를 익히는 것을 어려워합니다.' },
      ],
      wordDistractors: ['terse', 'dense', 'sense'],
      definitionDistractors: [
        'A feeling of physical relaxation experienced after vigorous exercise.',
        'The rhythmic pattern of syllables within a line of poetry.',
        'A numerical value assigned to classify objects by their weight.',
      ],
    }
  ),
  word('term', '기간', 7, 'noun',
    ['절차', '정보', '의미', '변화', '문제', '기회', '기준', '목표', '사물', '행동'],
    tips({
      etymology: '라틴어 terminus에서 유래하여 \'경계\'나 \'끝\'을 의미하며, 정해진 시간의 끝이 있는 \'기간\'을 뜻하게 되었습니다.',
      visual: '달력에 시작일과 종료일을 동그라미 치고 그 사이를 화살표로 연결한 모습을 상상해 보세요.',
      soundAlike: '학기말 시험을 뜻하는 \'텀\' 페이퍼를 떠올리면 학교의 한 \'기간\'을 쉽게 기억할 수 있습니다.',
      context: '대통령의 임기나 학교의 학기처럼 법적, 교육적으로 정해진 시간 단위를 말할 때 주로 쓰입니다.',
      synonymAntonym: '시간의 길이를 뜻하는 duration과 비슷하지만, 영원함을 뜻하는 eternity와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A fixed or limited period for which something lasts or is intended to last.',
      synonyms: ['period', 'duration', 'span'],
      antonyms: ['eternity', 'infinity', 'perpetuity'],
      exampleSentences: [
        { en: 'The president served a four-year period in office before the next election.', ko: '대통령은 다음 선거 전까지 4년의 임기 동안 재임했습니다.' },
        { en: 'Students are required to complete several assignments during the spring semester.', ko: '학생들은 봄 학기 기간 동안 여러 과제를 완료해야 합니다.' },
      ],
      wordDistractors: ['tern', 'stern', 'fern'],
      definitionDistractors: [
        'A specific word or phrase used exclusively in academic writing.',
        'A monetary unit used for international currency exchange.',
        'A formal agreement between two parties regarding property ownership.',
      ],
    }
  ),
  word('terminal', '종점의', 4, 'adjective',
    ['초기 단계의', '일시적인', '중간의', '번성하는', '회복 가능한', '활기찬', '무한한', '시작의', '성장하는', '유동적인'],
    tips({
      etymology: '라틴어 \'terminus\'에서 유래했으며, 이는 \'경계\'나 \'끝\'을 의미합니다.',
      visual: '기차 노선의 맨 마지막 역에 멈춰 서 있는 열차의 모습을 상상해 보세요.',
      soundAlike: '공항 터미널은 여행의 시작이기도 하지만 비행기 노선의 \'끝\' 지점이기도 합니다.',
      context: '의학적으로는 치료가 불가능한 말기 상태를, 교통에서는 노선의 끝을 의미할 때 주로 쓰입니다.',
      synonymAntonym: '끝을 의미하는 final과 유사하며, 시작을 의미하는 initial과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Occurring at or forming the very end of a series, process, or journey, often implying no further progression is possible.',
      synonyms: ['final', 'concluding', 'ultimate'],
      antonyms: ['initial', 'beginning', 'starting'],
      exampleSentences: [
        { en: 'The patient was diagnosed with a terminal illness that required specialized palliative care.', ko: '그 환자는 전문적인 완화 치료가 필요한 말기 질환 진단을 받았습니다.' },
        { en: 'All passengers must disembark at this station because it is the terminal stop of the line.', ko: '이 역은 노선의 종점이기 때문에 모든 승객은 하차해야 합니다.' },
      ],
      wordDistractors: ['terminus', 'thermal', 'nominal'],
      definitionDistractors: [
        'Occurring at the very beginning of a long developmental process.',
        'Capable of being repaired or restored to its original condition.',
        'Happening repeatedly at regular intervals throughout the year.',
      ],
    }
  ),
  word('terminate', '끝내다', 8, 'verb',
    ['보완하다', '분석하다', '정리하다', '적용하다', '반복하다', '행동하다', '수행하다', '처리하다', '변경하다', '유지하다'],
    tips({
      etymology: '라틴어 \'terminus\'에서 유래했으며, 이는 경계선이나 끝을 의미합니다. 터미널(terminal)이 노선의 끝인 것과 같은 원리입니다.',
      visual: '영화 터미네이터가 임무를 완수하여 상황을 종료시키거나, 컴퓨터 프로그램의 \'작업 종료\' 버튼을 누르는 모습을 상상하세요.',
      soundAlike: '\'터미네이트\' 발음이 \'다 미네(다 밀어버리네)\'와 비슷하게 들리기도 합니다. 모든 것을 밀어버려 끝내는 상황을 연상해 보세요.',
      context: '고용 계약을 해지하거나, 컴퓨터 프로세스를 강제로 닫을 때, 혹은 임신 중절과 같은 민감한 의학적 상황에서 자주 쓰입니다.',
      synonymAntonym: 'finish와 비슷하지만 훨씬 공식적이고 단호한 느낌이며, 시작을 뜻하는 initiate와 정반대의 개념입니다.',
    }),
    {
      definition: 'To bring something to an end or to conclude a process, relationship, or agreement permanently.',
      synonyms: ['conclude', 'cease', 'extinguish'],
      antonyms: ['commence', 'initiate', 'establish'],
      exampleSentences: [
        { en: 'The company decided to terminate the contract due to a series of serious policy violations.', ko: '그 회사는 일련의 심각한 정책 위반으로 인해 계약을 종료하기로 결정했습니다.' },
        { en: 'You must terminate the running application before installing the new software update.', ko: '새 소프트웨어 업데이트를 설치하기 전에 실행 중인 응용 프로그램을 종료해야 합니다.' },
      ],
      wordDistractors: ['determine', 'germinate', 'laminate'],
      definitionDistractors: [
        'To begin a new project or initiative with great enthusiasm.',
        'To temporarily pause an activity with the intention of resuming later.',
        'To gradually expand the scope of an ongoing operation.',
      ],
    }
  ),
  word('terrace', '테라스', 9, 'noun',
    ['지하실', '다락방', '옥상', '현관', '복도', '거실', '창고', '차고', '울타리', '계단'],
    tips({
      etymology: '라틴어 \'terra(땅)\'에서 유래하여 땅을 깎아 만든 평평한 대지나 외부 공간을 의미합니다.',
      visual: '카페나 레스토랑 바깥에 탁자와 의자가 놓인 야외 공간을 상상해 보세요.',
      soundAlike: '테라스(Terrace)는 한국어에서도 그대로 사용되어 쉽게 기억할 수 있습니다.',
      context: '건물 외부의 평평한 야외 공간이나 경사면에 만든 계단식 평지를 모두 가리킵니다.',
      synonymAntonym: '야외 공간을 뜻하는 patio, veranda와 유사합니다.',
    }),
    {
      definition: 'A flat, paved outdoor area adjoining a building, or a series of flat areas cut into a slope used for cultivation.',
      synonyms: ['patio', 'veranda', 'deck'],
      antonyms: ['interior', 'basement', 'cellar'],
      exampleSentences: [
        { en: 'We sat on the terrace and enjoyed our coffee while watching the sunset.', ko: '우리는 테라스에 앉아 일몰을 바라보며 커피를 즐겼다.' },
        { en: 'The rice terraces in the Philippines are a UNESCO World Heritage Site.', ko: '필리핀의 계단식 논 테라스는 유네스코 세계문화유산이다.' },
      ],
      wordDistractors: ['terrain', 'terrarium', 'furnace'],
      definitionDistractors: [
        'An enclosed indoor garden used for growing tropical plants.',
        'A narrow underground passage connecting two separate buildings.',
        'A tall vertical structure built to support overhead power lines.',
      ],
    }
  ),
  word('terrible', '무시무시한', 5, 'adjective',
    ['환상적인', '평범한', '유쾌한', '사소한', '안전한', '부드러운', '익숙한', '고귀한', '명확한', '친절한'],
    tips({
      etymology: '라틴어 \'terrere(겁주다)\'에서 유래하여 공포를 불러일으킬 만큼 좋지 않은 상태를 나타냅니다.',
      visual: '폭풍우가 몰아치는 밤에 지붕이 날아가는 끔찍한 광경을 상상해 보세요.',
      soundAlike: '\'테러(terror)\'와 발음이 비슷하므로 테러처럼 무시무시하고 끔찍한 상황을 연상하세요.',
      context: '음식 맛이 형편없거나 사고가 발생했을 때 등 부정적인 감정이 극에 달할 때 주로 쓰입니다.',
      synonymAntonym: 'awful과 유사하며, 반대로 아주 훌륭한 상태는 wonderful이라고 합니다.',
    }),
    {
      definition: 'extremely bad, unpleasant, or causing great fear and distress',
      synonyms: ['awful', 'horrible', 'dreadful'],
      antonyms: ['wonderful', 'excellent', 'fantastic'],
      exampleSentences: [
        { en: 'The survivors told a story about a nightmare involving a giant, fearsome beast.', ko: '생존자들은 거대하고 무시무시한 짐승이 등장하는 악몽에 대해 이야기했습니다.' },
        { en: 'Heavy rain caused a series of accidents on the highway during the rush hour.', ko: '폭우로 인해 출퇴근 시간 고속도로에서 끔찍한 사고들이 연이어 발생했습니다.' },
      ],
      wordDistractors: ['terrific', 'tangible', 'sensible'],
      definitionDistractors: [
        'Mildly inconvenient but ultimately manageable without assistance.',
        'Perfectly ordinary and unremarkable in every observable way.',
        'Slightly disappointing but still within acceptable standards.',
      ],
    }
  ),
  word('terrific', '훌륭한', 6, 'adjective',
    ['형편없는', '끔찍한', '평범한', '지루한', '보통의', '나쁜', '실망스러운', '초라한', '어중간한', '미흡한'],
    tips({
      etymology: '라틴어 \'terrere(겁주다)\'에서 유래했지만, 현대 영어에서는 의미가 완전히 바뀌어 \'아주 좋은, 훌륭한\'이라는 뜻으로 쓰입니다.',
      visual: '시험에서 만점을 받고 기뻐하거나, 멋진 공연을 보고 감탄하는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'테러(terror)\'와 비슷하지만, 뜻은 정반대로 매우 긍정적입니다. 이 대조가 기억에 도움이 됩니다.',
      context: '현대 영어에서 일상적으로 \'아주 좋은, 대단한\'이라는 뜻으로 가장 많이 쓰이는 형용사입니다.',
      synonymAntonym: 'fantastic, wonderful과 유사하며, 반대로 형편없는 상태는 terrible이라고 합니다.',
    }),
    {
      definition: 'extremely good, excellent, or great in degree',
      synonyms: ['fantastic', 'wonderful', 'excellent'],
      antonyms: ['terrible', 'awful', 'dreadful'],
      exampleSentences: [
        { en: 'You did a terrific job on the presentation today.', ko: '오늘 발표를 정말 훌륭하게 잘 했어요.' },
        { en: 'The band gave a terrific performance that had the audience cheering for more.', ko: '그 밴드는 관객들이 앙코르를 외칠 정도로 훌륭한 공연을 펼쳤다.' },
      ],
      wordDistractors: ['terrible', 'specific', 'prolific'],
      definitionDistractors: [
        'Moderately acceptable but lacking any distinctive qualities.',
        'Extremely frightening and causing widespread panic among people.',
        'Barely noticeable and having no significant impact on the outcome.',
      ],
    }
  ),
  word('territory', '영토', 7, 'noun',
    ['국경', '식민지', '왕국', '대륙', '반도', '섬', '해안', '국가', '지방', '도시'],
    tips({
      etymology: '라틴어 \'terra(땅)\'에서 유래하여 특정 국가나 개인이 소유하고 관리하는 땅의 범위를 뜻합니다.',
      visual: '지도 위에 국경선이 그어져 있고 그 안쪽이 색칠되어 있는 모습을 상상해 보세요.',
      soundAlike: '\'테리토리\' 발음이 \'테두리\'와 비슷하게 들리니, 경계 테두리 안의 땅이라고 기억하세요.',
      context: '동물의 세력권이나 비즈니스의 전문 분야를 말할 때도 이 단어를 자주 사용합니다.',
      synonymAntonym: 'region이나 area와 비슷하지만, territory는 소유권이나 통제권의 개념이 더 강합니다.',
    }),
    {
      definition: 'An area of land that is under the jurisdiction or control of a particular ruler, state, or organization.',
      synonyms: ['region', 'domain', 'district'],
      antonyms: ['sky', 'ocean', 'void'],
      exampleSentences: [
        { en: 'The stray cat fiercely defended its territory from other intruders in the neighborhood.', ko: '그 길고양이는 동네의 다른 침입자들로부터 자신의 영역을 격렬하게 방어했다.' },
        { en: 'Explorers claimed the newly discovered island as a territory of their home country.', ko: '탐험가들은 새로 발견된 섬을 자신들 본국의 영토로 선포했다.' },
      ],
      wordDistractors: ['terrace', 'tributary', 'dormitory'],
      definitionDistractors: [
        'A formal ceremony held to celebrate the founding of a nation.',
        'A natural body of water surrounded entirely by dry land.',
        'A tall structure built along a coastline to guide passing ships.',
      ],
    }
  ),
  word('test', '시험', 1, 'noun',
    ['문제', '기회', '기준', '목표', '사물', '행동', '사건', '상태', '개념', '원인'],
    tips({
      etymology: '라틴어 \'testum\'에서 유래했으며, 원래는 금속을 정제할 때 쓰는 그릇을 의미했습니다. 불순물을 걸러내는 과정이 곧 실력을 검증하는 과정이 된 것입니다.',
      visual: '책상 위에 놓인 시험지와 긴장한 학생의 모습, 혹은 과학자가 실험실에서 비커를 들여다보는 장면을 상상해 보세요.',
      soundAlike: '\'테스트\'라는 외래어로 이미 익숙합니다. 무언가를 \'테스트\'해본다는 것은 그것의 성능이나 실력을 확인한다는 뜻입니다.',
      context: '학교에서 치르는 정기 고사뿐만 아니라, 새로운 기계의 성능을 확인하거나 가설을 증명하는 실험 과정에서도 널리 쓰입니다.',
      synonymAntonym: '실력을 확인하는 exam과 유사하며, 이미 결과가 확정되어 검증이 필요 없는 certainty와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.',
      synonyms: ['examination', 'trial', 'assessment'],
      antonyms: ['conclusion', 'certainty', 'result'],
      exampleSentences: [
        { en: 'Students are studying hard in the library to prepare for their final chemistry examination.', ko: '학생들은 기말 화학 시험을 준비하기 위해 도서관에서 열심히 공부하고 있습니다.' },
        { en: 'Engineers conducted a rigorous trial of the new vehicle to ensure its safety on the road.', ko: '엔지니어들은 도로 위에서의 안전을 보장하기 위해 새 차량에 대한 엄격한 테스트를 실시했습니다.' },
      ],
      wordDistractors: ['text', 'jest', 'nest'],
      definitionDistractors: [
        'A period of rest given to workers between their scheduled shifts.',
        'A formal invitation to participate in a competitive sporting event.',
        'A written summary of rules that govern behavior in a classroom.',
      ],
    }
  ),
  word('testify', '증명하다', 5, 'verb',
    ['부인하다', '침묵하다', '조작하다', '은폐하다', '무시하다', '거절하다', '망설이다', '반대하다', '포기하다', '왜곡하다'],
    tips({
      etymology: '라틴어 testis(증인)에서 유래하여 법정에서 증인이 진실을 말하는 행위를 뜻합니다.',
      visual: '법정의 증인석에 앉아 성경 위에 손을 얹고 진실만을 말하겠다고 선서하는 장면을 상상해 보세요.',
      soundAlike: '테스트(test)를 통해 사실(ify)을 밝혀낸다고 생각하면 기억하기 쉽습니다.',
      context: '주로 법정에서 증언하거나, 어떤 사실이 진실임을 강력하게 뒷받침할 때 사용됩니다.',
      synonymAntonym: 'attest와 유사하며, 반대말로 사실을 숨기거나 부인하는 deny를 함께 기억하세요.',
    }),
    {
      definition: 'To give evidence as a witness in a law court or to serve as proof that something exists or is true.',
      synonyms: ['attest', 'witness', 'certify'],
      antonyms: ['deny', 'refute', 'contradict'],
      exampleSentences: [
        { en: 'Several witnesses were called to give evidence and speak about what they saw during the accident.', ko: '사고 당시 목격한 것에 대해 증언하고 증거를 제시하기 위해 여러 명의 목격자들이 소환되었습니다.' },
        { en: 'The high quality of these ancient artifacts speaks to the advanced skills of the craftsmen who made them.', ko: '이 고대 유물들의 높은 품질은 그것을 만든 장인들의 뛰어난 기술력을 증명해 줍니다.' },
      ],
      wordDistractors: ['terrify', 'justify', 'fortify'],
      definitionDistractors: [
        'To formally request additional funding for a government project.',
        'To secretly plan a strategy without informing the other participants.',
        'To carefully examine a document for spelling and grammatical errors.',
      ],
    }
  ),
  word('text', '원문', 4, 'noun',
    ['목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계'],
    tips({
      etymology: '라틴어 \'texere(짜다, 엮다)\'에서 유래하여 글자들이 정교하게 짜여진 글의 본체를 의미합니다.',
      visual: '책의 삽화나 사진을 제외하고 오직 글자들로만 빽빽하게 채워진 종이 페이지를 상상해 보세요.',
      soundAlike: '휴대폰으로 보내는 \'텍스트\' 메시지를 떠올리면 글자로 된 정보라는 점을 쉽게 연결할 수 있습니다.',
      context: '학술적인 분석이나 번역 작업을 할 때 가공되지 않은 원래의 글 뭉치를 가리킬 때 주로 쓰입니다.',
      synonymAntonym: '내용을 담은 script와 유사하며, 글이 없는 상태인 blank와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The original words of a piece of writing or a speech, as distinct from any commentary or summary.',
      synonyms: ['script', 'wording', 'passage'],
      antonyms: ['illustration', 'image', 'blank'],
      exampleSentences: [
        { en: 'The scholar spent years analyzing the ancient Greek manuscript to understand the original meaning.', ko: '그 학자는 원래의 의미를 이해하기 위해 고대 그리스 사본의 원문을 분석하는 데 수년을 보냈습니다.' },
        { en: 'Please refer to the printed version of the speech for the exact wording used by the president.', ko: '대통령이 사용한 정확한 어휘를 확인하려면 연설문의 인쇄된 원문을 참조하십시오.' },
      ],
      wordDistractors: ['next', 'textile', 'texture'],
      definitionDistractors: [
        'A short spoken message delivered informally between close friends.',
        'A graphic illustration used to explain a scientific concept visually.',
        'A handwritten signature placed at the bottom of an official document.',
      ],
    }
  ),
  word('textbook', '교과서', 2, 'noun',
    ['문제집', '공책', '연필', '칠판', '도서관', '성적표', '강의실', '장학금', '졸업장', '시간표'],
    tips({
      etymology: '글을 뜻하는 text와 책을 뜻하는 book이 합쳐져 학습을 위한 표준적인 글이 담긴 책을 의미합니다.',
      visual: '학교 책상 위에 두껍게 놓여 있는 수학이나 과학 과목의 표준 교재를 상상해 보세요.',
      soundAlike: '텍스트(글자)가 가득 찬 북(책)이라고 발음하며 기억하면 쉽습니다.',
      context: '학교 수업 시간에 선생님이 몇 페이지를 펴라고 말씀하실 때 사용하는 가장 기본적인 책입니다.',
      synonymAntonym: '학습용 교재인 manual과 비슷하지만, 소설이나 수필 같은 fiction과는 반대되는 성격을 가집니다.',
    }),
    {
      definition: 'A book used as a standard work for the study of a particular subject.',
      synonyms: ['manual', 'primer', 'coursebook'],
      antonyms: ['novel', 'fiction', 'original manuscript'],
      exampleSentences: [
        { en: 'Students are required to bring their history book to every class.', ko: '학생들은 매 수업 시간마다 역사 교과서를 가져와야 합니다.' },
        { en: 'The professor published a new edition of the biology guide this year.', ko: '교수님은 올해 생물학 교과서의 개정판을 출판하셨습니다.' },
      ],
      wordDistractors: ['textual', 'notebook', 'casebook'],
      definitionDistractors: [
        'A fictional novel intended for entertainment during leisure time.',
        'A blank journal used for recording personal thoughts and reflections.',
        'A collection of photographs arranged chronologically in an album.',
      ],
    }
  ),
  word('than', '~보다', 3, 'conjunction',
    ['그리고', '하지만', '때문에', '만약', '동안', '너머에', '사이에', '아래에', '함께', '대신에'],
    tips({
      etymology: '고대 영어 \'thanne\'에서 유래했으며, 원래 \'그때\'를 의미하던 단어가 비교의 의미로 발전했습니다.',
      visual: '시소의 양쪽에 두 물건을 올려두고 어느 쪽이 더 무거운지 비교하는 장면을 상상해 보세요.',
      soundAlike: '\'댄\'이라고 발음되는데, 두 대상을 \'대\'조해본다는 느낌으로 기억하면 쉽습니다.',
      context: '주로 \'more\', \'better\', \'faster\' 같은 비교급 형용사 뒤에 위치하여 기준점을 제시합니다.',
      synonymAntonym: '비교 대상을 나타내는 \'compared to\'와 유사하며, 반대로 동일함을 나타낼 때는 \'as\'를 사용합니다.',
    }),
    {
      definition: 'A conjunction or preposition used to introduce the second element in a comparison.',
      synonyms: ['compared to', 'in contrast to', 'rather than'],
      antonyms: ['equal to', 'same as', 'identical to'],
      exampleSentences: [
        { en: 'She can run much faster than before after practicing for months.', ko: '그녀는 몇 달 동안 연습한 덕분에 전보다 훨씬 더 빨리 달릴 수 있습니다.' },
        { en: 'This new laptop is significantly lighter than the previous model.', ko: '이 새 노트북은 이전 모델보다 훨씬 가볍습니다.' },
      ],
      wordDistractors: ['then', 'thin', 'thane'],
      definitionDistractors: [
        'A word used to connect two equal clauses in a compound sentence.',
        'A preposition indicating the location of an object inside a container.',
        'An adverb expressing the frequency of a recurring daily event.',
      ],
    }
  ),
  word('thank', '감사하다', 1, 'verb',
    ['미워하다', '무시하다', '비난하다', '거절하다', '요청하다', '설명하다', '비교하다', '포기하다', '의심하다', '공격하다'],
    tips({
      etymology: '고대 영어 \'thancian\'에서 유래했으며, 원래 \'생각하다\'라는 의미와 연결되어 \'누군가의 호의를 마음속에 새기다\'라는 뜻을 가집니다.',
      visual: '누군가에게 선물을 받고 두 손을 모아 환하게 웃으며 고개를 숙이는 장면을 상상해 보세요.',
      soundAlike: '\'땡큐\'라는 익숙한 인사말의 앞부분인 \'땡\' 소리에 집중하여 고마움을 표현하는 리듬을 익히세요.',
      context: '식당에서 음식을 가져다주거나 길을 비켜준 낯선 사람에게 예의를 갖출 때 가장 많이 쓰입니다.',
      synonymAntonym: 'appreciate와 함께 외우면 격식 있는 표현까지 익힐 수 있고, 반대말인 curse와 비교하면 감정의 차이가 명확해집니다.',
    }),
    {
      definition: 'to express gratitude to someone in response to a favor, gift, or kind act',
      synonyms: ['appreciate', 'acknowledge', 'recognize'],
      antonyms: ['curse', 'criticize', 'ignore'],
      exampleSentences: [
        { en: 'I would like to express my gratitude and show how much I appreciate your help.', ko: '당신의 도움에 대해 감사를 표하고 제가 얼마나 고마워하는지 보여드리고 싶습니다.' },
        { en: 'She forgot to say those polite words after receiving the birthday present from her friend.', ko: '그녀는 친구에게 생일 선물을 받은 후 고맙다는 말을 하는 것을 잊었습니다.' },
      ],
      wordDistractors: ['think', 'thane', 'shank'],
      definitionDistractors: [
        'To formally apologize for causing an inconvenience to someone.',
        'To request assistance from a stranger in an unfamiliar place.',
        'To demand compensation for damages caused by another party.',
      ],
    }
  ),
  word('that', '그것, 저것', 2, 'pronoun',
    ['이것', '여기', '이쪽', '누구', '아무것', '어떤것', '모든것', '각각', '어느것', '자기'],
    tips({
      etymology: '고대 영어 \'thæt\'에서 유래하여 특정한 대상을 지목하는 지시어로 발전했습니다.',
      visual: '멀리 떨어져 있는 물건을 손가락으로 가리키는 모습을 상상해 보세요.',
      soundAlike: '발음이 \'댓\'과 비슷하여, \'저거 대(댓)단한데?\'라고 외우면 쉽습니다.',
      context: '말하는 사람으로부터 물리적으로나 심리적으로 멀리 있는 대상을 언급할 때 쓰입니다.',
      synonymAntonym: '특정한 것을 가리키는 the와 비슷하지만, this와는 거리감에서 반대됩니다.',
    }),
    {
      definition: 'The person, object, or idea being indicated or referred to as being at a distance from the speaker.',
      synonyms: ['it', 'the former', 'the latter'],
      antonyms: ['this', 'here', 'these'],
      exampleSentences: [
        { en: 'Look at the tall tree on the top of the hill.', ko: '언덕 꼭대기에 있는 저 높은 나무를 보세요.' },
        { en: 'Who is the person standing by the entrance?', ko: '입구 옆에 서 있는 저 사람은 누구입니까?' },
      ],
      wordDistractors: ['what', 'chat', 'flat'],
      definitionDistractors: [
        'A word used to ask a question about the identity of a person.',
        'A conjunction that links two independent clauses together.',
        'An exclamation expressing surprise at an unexpected outcome.',
      ],
    }
  ),
  word('the', '(정관사)', 3, 'adjective',
    ['불안정한', '효율적인', '비효율적인', '직접적인', '간접적인', '명확한', '모호한', '적절한', '부적절한', '긍정적인'],
    tips({
      etymology: '고대 영어에서 유래한 정관사로, 특정한 대상을 지칭할 때 사용되어 문맥상 \'예술적인\' 가치를 지닌 대상을 한정합니다.',
      visual: '박물관의 수많은 그림 중 큐레이터가 손가락으로 딱 하나를 가리키며 강조하는 모습을 상상하세요.',
      soundAlike: '발음이 \'더\'와 비슷하므로, 예술적 가치가 \'더\' 높은 특별한 것을 고른다고 생각하면 쉽습니다.',
      context: '일반적인 사물이 아닌, 화자와 청자가 모두 알고 있는 유일무이한 예술 작품을 언급할 때 필수적입니다.',
      synonymAntonym: '특정한 것을 나타내는 specific과 대조되는 일반적인 any를 함께 기억하면 좋습니다.',
    }),
    {
      definition: 'Used to refer to a specific person, thing, or artistic work that has already been mentioned or is easily identified.',
      synonyms: ['particular', 'specific', 'certain'],
      antonyms: ['any', 'each', 'every'],
      exampleSentences: [
        { en: 'Look at masterpiece hanging on the wall of the gallery.', ko: '갤러리 벽에 걸려 있는 그 걸작을 보세요.' },
        { en: 'She is artist who redefined modern sculpture in this century.', ko: '그녀는 이번 세기에 현대 조각을 재정의한 바로 그 예술가입니다.' },
      ],
      wordDistractors: ['thee', 'thaw', 'them'],
      definitionDistractors: [
        'A general article used before any noun regardless of context.',
        'A pronoun replacing the name of a person in casual speech.',
        'A verb form indicating an action performed in the distant past.',
      ],
    }
  ),
  word('theater', '극장', 5, 'noun',
    ['도서관', '박물관', '경기장', '공원', '학교', '병원', '은행', '식당', '서점', '우체국'],
    tips({
      etymology: '그리스어 \'theatron\'에서 유래되었으며, 이는 \'보는 장소\'라는 의미를 담고 있습니다.',
      visual: '붉은 커튼이 올라가고 화려한 조명이 무대를 비추는 공연장의 모습을 상상해 보세요.',
      soundAlike: '\'씨어터\'라고 발음하며, 영화관에서 팝콘을 먹으며 영화를 보는 소리를 연상하세요.',
      context: '영화나 연극을 관람하는 장소뿐만 아니라 연극 예술 그 자체를 지칭할 때도 사용됩니다.',
      synonymAntonym: 'playhouse와 유사하며, 야외 광장이나 열린 공간과는 대조적인 실내 공연 시설입니다.',
    }),
    {
      definition: 'A building or outdoor area in which plays, movies, or other dramatic performances are given.',
      synonyms: ['playhouse', 'cinema', 'auditorium'],
      antonyms: ['outdoors', 'wilderness', 'reality'],
      exampleSentences: [
        { en: 'The local community gathered at the grand building to watch the new musical performance.', ko: '지역 주민들은 새로운 뮤지컬 공연을 관람하기 위해 그 웅장한 건물에 모였습니다.' },
        { en: 'Many actors dream of performing on a famous stage in the heart of the city.', ko: '많은 배우들이 도시 중심가에 있는 유명한 무대에서 공연하는 것을 꿈꿉니다.' },
      ],
      wordDistractors: ['feather', 'heater', 'weather'],
      definitionDistractors: [
        'A large open field used for growing crops and raising livestock.',
        'A private office where business negotiations are conducted.',
        'A covered market where vendors sell fresh produce and goods.',
      ],
    }
  ),
  word('theme', '논제', 6, 'noun',
    ['목표', '사물', '행동', '사건', '상태', '개념', '원인', '결과', '조건', '관계'],
    tips({
      etymology: '그리스어 \'tithenai(놓다)\'에서 유래하여, 논의의 중심에 \'놓인 것\'을 의미합니다.',
      visual: '회의실 칠판 중앙에 커다랗게 적힌 핵심 주제어와 그 주변으로 뻗어 나가는 아이디어들을 상상해 보세요.',
      soundAlike: '\'심(theme)\'각하게 고민해야 할 핵심 주제라고 소리 내어 읽으며 기억해 보세요.',
      context: '영화, 소설, 연설문 등 모든 창작물이나 대화에서 일관되게 흐르는 중심 사상을 말할 때 주로 쓰입니다.',
      synonymAntonym: 'Topic은 구체적인 화제를, Subject는 광범위한 분야를 뜻하며 반대로 무의미함은 Insignificance라고 합니다.',
    }),
    {
      definition: 'The main subject or central idea that is being discussed or described in a piece of writing, movie, or talk.',
      synonyms: ['topic', 'subject', 'motif'],
      antonyms: ['aside', 'digression', 'insignificance'],
      exampleSentences: [
        { en: 'The recurring motif of loss is a central part of the story\'s overall message.', ko: '상실이라는 반복되는 모티프는 그 이야기 전체 메시지의 중심적인 논제입니다.' },
        { en: 'Each department was asked to prepare a presentation based on the annual conference\'s main focus.', ko: '각 부서는 연례 컨퍼런스의 주요 논제에 기초하여 발표를 준비하라는 요청을 받았습니다.' },
      ],
      wordDistractors: ['thyme', 'scheme', 'gleam'],
      definitionDistractors: [
        'A detailed set of instructions for operating complex machinery.',
        'A decorative border applied around the edges of a picture frame.',
        'A specific color palette chosen for painting interior walls.',
      ],
    }
  ),
  word('then', '그때', 7, 'adverb',
    ['지금', '여기서', '항상', '절대로', '어쩌면', '이미', '아직', '곧', '자주', '거의'],
    tips({
      etymology: '고대 영어 \'thanne\'에서 유래하여 시간의 흐름이나 특정 시점을 가리키는 부사적 성격이 명사화된 형태입니다.',
      visual: '달력의 특정 날짜에 빨간 동그라미를 치고 과거의 한 장면을 회상하는 모습을 상상하세요.',
      soundAlike: '\'덴(den)\'과 발음이 비슷하므로, 동굴(den) 속에 숨어있던 \'그때\' 그 시절을 떠올려 보세요.',
      context: '주로 \'since then\'이나 \'until then\'처럼 전치사와 함께 쓰여 특정 시점 자체를 나타냅니다.',
      synonymAntonym: '특정 시점을 뜻하는 point와 유사하며, 현재를 뜻하는 now와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A particular period or point in time, typically in the past or future, that has just been mentioned.',
      synonyms: ['that time', 'that moment', 'that occasion'],
      antonyms: ['now', 'present', 'today'],
      exampleSentences: [
        { en: 'Life was much simpler back then before the internet changed everything.', ko: '인터넷이 모든 것을 바꾸기 전인 그때는 삶이 훨씬 단순했습니다.' },
        { en: 'We agreed to meet at noon, but I had already finished my work by then.', ko: '우리는 정오에 만나기로 했지만, 나는 그때까지 이미 일을 마친 상태였습니다.' },
      ],
      wordDistractors: ['than', 'when', 'den'],
      definitionDistractors: [
        'A word used to describe the manner in which an action is performed.',
        'A conjunction that introduces a reason or cause for an event.',
        'An indefinite pronoun referring to all members of a group collectively.',
      ],
    }
  ),
  word('theory', '이론', 4, 'noun',
    ['실험', '가설', '증거', '결과', '법칙', '관찰', '사실', '현상', '방법', '결론'],
    tips({
      etymology: '그리스어 \'theoria\'에서 유래했으며, \'관찰하다\' 또는 \'심사숙고하다\'라는 의미를 담고 있습니다.',
      visual: '칠판 가득 복잡한 수식과 가설들이 적혀 있는 과학자의 연구실을 상상해 보세요.',
      soundAlike: '\'띠어리\'라고 발음하며, 옷 브랜드 이름처럼 세련된 \'이론\' 체계라고 기억하면 쉽습니다.',
      context: '과학적 발견이나 추상적인 아이디어를 설명할 때 주로 사용되는 학술적인 단어입니다.',
      synonymAntonym: '추측에 가까운 hypothesis보다는 더 체계적이며, 확정된 fact와는 대조적인 개념입니다.',
    }),
    {
      definition: 'A formal set of ideas or principles intended to explain a specific phenomenon or group of facts.',
      synonyms: ['hypothesis', 'concept', 'philosophy'],
      antonyms: ['fact', 'reality', 'certainty'],
      exampleSentences: [
        { en: 'Einstein developed a groundbreaking explanation of how gravity affects time and space.', ko: '아인슈타인은 중력이 시간과 공간에 어떻게 영향을 미치는지에 대한 획기적인 이론을 발전시켰습니다.' },
        { en: 'Many scholars debate whether this sociological framework can be applied to modern digital cultures.', ko: '많은 학자들은 이 사회학적 이론이 현대 디지털 문화에 적용될 수 있는지에 대해 토론합니다.' },
      ],
      wordDistractors: ['theorem', 'thorax', 'thirsty'],
      definitionDistractors: [
        'A confirmed law of nature that has been universally accepted.',
        'A practical demonstration of how a machine operates in real time.',
        'A personal opinion expressed without any supporting evidence.',
      ],
    }
  ),
  word('therapy', '치료법', 8, 'noun',
    ['진단', '예방', '수술', '처방', '부작용', '증상', '감염', '면역', '입원', '회복'],
    tips({
      etymology: '그리스어 therapeia에서 유래했으며, 이는 \'돌봄\'이나 \'시중들기\'라는 뜻을 가지고 있습니다.',
      visual: '편안한 소파에 앉아 상담가와 대화를 나누거나 물리치료를 받는 평온한 병원 내부를 상상해 보세요.',
      soundAlike: '발음이 \'쎄라피\'와 유사하므로, 몸과 마음을 \'세게\' 치유하는 \'피\'가 되는 과정이라고 연상해 보세요.',
      context: '심리적인 상담뿐만 아니라 물리적인 재활 훈련을 일컬을 때도 광범위하게 사용되는 단어입니다.',
      synonymAntonym: '치료를 뜻하는 treatment와 유사하며, 질병을 일으키는 원인인 infection과는 반대되는 개념입니다.',
    }),
    {
      definition: 'A treatment intended to relieve or heal a disorder, injury, or mental health condition.',
      synonyms: ['treatment', 'remedy', 'rehabilitation'],
      antonyms: ['harm', 'injury', 'damage'],
      exampleSentences: [
        { en: 'Many people find that physical exercise serves as a form of stress relief and mental healing.', ko: '많은 사람들은 신체적 운동이 스트레스 해소와 정신적 치료의 한 형태가 된다는 것을 알고 있습니다.' },
        { en: 'The patient showed significant improvement after attending several sessions of speech rehabilitation.', ko: '그 환자는 여러 차례의 언어 치료 세션에 참석한 후 상당한 호전을 보였습니다.' },
      ],
      wordDistractors: ['theory', 'thirsty', 'thorny'],
      definitionDistractors: [
        'A surgical procedure performed to remove damaged tissue from the body.',
        'A diagnostic test conducted to identify the cause of an illness.',
        'A preventive measure taken to stop a disease from spreading further.',
      ],
    }
  ),
  word('there', '거기에', 1, 'adverb',
    ['여기', '어디', '언제', '누구', '무엇', '어떻게', '왜', '가끔', '항상', '전혀'],
    tips({
      etymology: '고대 영어 \'thær\'에서 유래했으며, \'the\'와 같은 뿌리를 공유하여 특정한 위치를 지칭합니다.',
      visual: '멀리 떨어져 있는 장소를 손가락으로 가리키는 모습을 상상해 보세요.',
      soundAlike: '\'They\'re\'나 \'Their\'와 발음이 같지만, 장소를 나타낼 때는 \'there\'를 씁니다.',
      context: '상대방과 대화할 때 화자로부터 떨어진 지점을 가리킬 때 주로 사용됩니다.',
      synonymAntonym: '가까운 곳을 뜻하는 \'here\'와 반대되는 개념으로 기억하면 쉽습니다.',
    }),
    {
      definition: 'In, at, or to that place or position.',
      synonyms: ['yonder', 'beyond', 'overseas'],
      antonyms: ['here', 'nearby', 'hither'],
      exampleSentences: [
        { en: 'Please put the heavy boxes over by the door.', ko: '무거운 상자들을 저기 문 옆에 두세요.' },
        { en: 'We visited the museum last year and enjoyed our time spent at that location.', ko: '우리는 작년에 그 박물관을 방문했고 그곳에서 즐거운 시간을 보냈습니다.' },
      ],
      wordDistractors: ['their', 'where', 'here'],
      definitionDistractors: [
        'A possessive form indicating ownership by a group of people.',
        'An adverb used to describe the current moment in time.',
        'A conjunction linking a cause to its immediate consequence.',
      ],
    }
  ),
];
