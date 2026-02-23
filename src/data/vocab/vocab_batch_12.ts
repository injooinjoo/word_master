import type { VocabItem } from '../models/vocab';
import { word, tips } from './helpers';

export const vocabBatch12: VocabItem[] = [
  word('Elaborate', '정교한', 6, 'adjective',
    ['단순한', '조악한', '대충 만든', '미완성', '기본적인', '원시적인', '투박한', '조잡한', '수수한', '간소한'],
    tips({
      etymology: '접두사 e-(밖으로)와 labor(노동/수고)가 결합되어, 정성과 노력을 밖으로 쏟아부어 완성했다는 의미에서 유래되었습니다.',
      visual: '수천 개의 미세한 부품이 맞물려 돌아가는 명품 시계의 내부나 아주 세밀하게 조각된 궁전의 천장을 떠올려 보세요.',
      soundAlike: '\'일러보레이트\'를 \'일일이 다 보여주네\'로 기억하세요. 세세한 부분까지 하나하나 다 보여줄 만큼 공을 들인 상태입니다.',
      context: '단순히 복잡한 것이 아니라, 예술 작품, 건축물, 혹은 치밀하게 짜인 계획처럼 정성이 가득 들어간 대상을 묘사할 때 사용합니다.',
      synonymAntonym: '복잡하게 얽힌 intricate와 유사하며, 아무런 장식이나 기교가 없는 plain과는 대조적인 관계입니다.',
    }),
    {
      definition: 'Involving many carefully arranged parts or details; complicated and ornate in design.',
      synonyms: ['intricate', 'sophisticated', 'ornate'],
      antonyms: ['simple', 'plain', 'uncomplicated'],
      exampleSentences: [
        { en: 'The ceiling was decorated with an elaborate floral pattern.', ko: '천장은 정교한 꽃무늬로 장식되어 있었다.' },
        { en: 'They made elaborate preparations for the royal wedding.', ko: '그들은 왕실 결혼식을 위해 정교하고 치밀한 준비를 했다.' },
      ],
    }
  ),
  word('Embrace', '포용하다', 6, 'verb',
    ['거부하다', '밀어내다', '회피하다', '배척하다', '추방하다', '거절하다', '배제하다', '소외시키다', '차단하다', '무시하다'],
    tips({
      etymology: 'em(안에)과 brace(팔)가 결합되어 \'팔 안에 품다\'라는 의미에서 유래했습니다.',
      visual: '두 사람이 서로를 따뜻하게 껴안거나 새로운 아이디어를 두 손 벌려 환영하는 모습입니다.',
      soundAlike: '엠브레이스 -> \'품에 브레이스(팔)를 두르다\'라고 기억하면 쉽습니다.',
      context: '사람을 껴안는 신체적 행동뿐 아니라 변화나 사상을 기꺼이 받아들일 때도 사용합니다.',
      synonymAntonym: 'accept와 유사하며, 거절하고 밀어내는 reject와는 반대입니다.',
    }),
    {
      definition: 'To hold someone closely in one\'s arms as a sign of affection, or to willingly accept a new idea or belief.',
      synonyms: ['accept', 'adopt', 'welcome'],
      antonyms: ['reject', 'exclude', 'shun'],
      exampleSentences: [
        { en: 'We must embrace diversity to build a better community.', ko: '더 나은 공동체를 만들기 위해 우리는 다양성을 포용해야 한다.' },
        { en: 'She embraced her daughter warmly after the long journey.', ko: '긴 여행 끝에 그녀는 딸을 따뜻하게 껴안았다.' },
      ],
    }
  ),
  word('Emission', '배출', 6, 'noun',
    ['흡수', '저장', '차단', '억제', '제거', '저감', '봉쇄', '보관', '정화', '채집'],
    tips({
      etymology: '접두사 e-(밖으로)와 어근 mit(보내다)가 결합되어, 무언가를 외부로 내보내는 행위를 뜻합니다.',
      visual: '자동차 배기구에서 뿜어져 나오는 매연이나 공장 굴뚝 위로 솟구치는 연기를 상상해 보세요.',
      soundAlike: '\'이미션\'을 \'입에서\'와 연결하여, 입에서 숨이나 연기가 밖으로 뿜어져 나오는 모습을 연상하세요.',
      context: '기후 변화와 관련된 뉴스에서 탄소 배출(carbon emission)이라는 표현으로 가장 자주 등장합니다.',
      synonymAntonym: '무언가를 내보내는 discharge와 유사하며, 안으로 빨아들이는 absorption과는 정반대 개념입니다.',
    }),
    {
      definition: 'The production and discharge of something, especially gas, radiation, or light, into the environment.',
      synonyms: ['discharge', 'release', 'exhaust'],
      antonyms: ['absorption', 'intake', 'retention'],
      exampleSentences: [
        { en: 'The government introduced new laws to limit carbon dioxide emission from vehicles.', ko: '정부는 차량의 이산화탄소 배출을 제한하기 위한 새로운 법안을 도입했습니다.' },
        { en: 'The sun\'s energy emission provides the necessary heat for life on Earth.', ko: '태양의 에너지 방출은 지구상의 생명체에 필요한 열을 제공합니다.' },
      ],
    }
  ),
  word('Empathy', '공감', 6, 'noun',
    ['냉담', '무관심', '무시', '적대', '혐오', '냉대', '무감동', '냉소', '거리감', '이질'],
    tips({
      etymology: '접두사 em(안으로)과 어근 path(감정)가 결합되어 타인의 감정 속으로 직접 들어간다는 의미를 형성합니다.',
      visual: '친구가 슬퍼할 때 단순히 곁에 있는 것이 아니라, 친구의 신발을 신고 함께 걷는 것처럼 그 상황을 온전히 느끼는 모습입니다.',
      soundAlike: '엠퍼시(Empathy) -> \'내 마음이 퍼져서\' 상대방의 가슴속까지 깊숙이 전달되는 느낌으로 기억하세요.',
      context: '단순히 불쌍히 여기는 동정심(sympathy)보다 한 단계 더 나아가, 상대방의 관점에서 세상을 바라보는 능력을 뜻합니다.',
      synonymAntonym: '따뜻한 마음인 compassion과 유사하며, 감정이 메마른 상태인 apathy나 indifference와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The capacity to recognize and experience the emotions and perspectives of another individual as if they were one\'s own.',
      synonyms: ['compassion', 'understanding', 'sensitivity'],
      antonyms: ['apathy', 'indifference', 'callousness'],
      exampleSentences: [
        { en: 'The therapist listened with deep empathy to help the patient feel understood.', ko: '상담사는 환자가 이해받고 있다고 느끼도록 깊은 공감을 하며 경청했습니다.' },
        { en: 'Developing empathy allows us to build stronger and more meaningful relationships with others.', ko: '공감 능력을 기르는 것은 타인과 더 강하고 의미 있는 관계를 쌓을 수 있게 해줍니다.' },
      ],
    }
  ),
  word('Empirical', '경험적인', 6, 'adjective',
    ['이론적인', '추상적인', '가설적인', '관념적인', '상상속의', '비실증적인', '추측에 근거한', '공상적인', '비현실적인', '형이상학적인'],
    tips({
      etymology: '그리스어 empeiria(경험)에서 유래되었으며, 머릿속의 논리가 아닌 실제 몸으로 겪은 일을 강조합니다.',
      visual: '책상 앞에 앉아 고민하는 철학자가 아니라, 현미경을 들여다보며 수치를 기록하는 과학자를 떠올려 보세요.',
      soundAlike: '엠피리컬 -> \'임(Em)상 피(Pi)드백\'을 통해 얻은 실제적인 결과라고 연상하면 쉽습니다.',
      context: '과학 논문이나 통계 자료에서 단순히 추측이 아닌 \'실제로 관찰된\' 데이터를 설명할 때 자주 쓰입니다.',
      synonymAntonym: '실제로 본 것을 뜻하는 observed와 비슷하며, 머릿속 가설일 뿐인 theoretical과 반대됩니다.',
    }),
    {
      definition: 'Derived from or guided by practical observation and experiment rather than pure logic.',
      synonyms: ['experiential', 'observed', 'factual'],
      antonyms: ['theoretical', 'hypothetical', 'speculative'],
      exampleSentences: [
        { en: 'The researchers provided empirical evidence to support their controversial new theory.', ko: '연구원들은 자신들의 논란 많은 새로운 이론을 뒷받침하기 위해 경험적 증거를 제시했습니다.' },
        { en: 'We cannot rely on intuition alone; we need empirical data to make an informed decision.', ko: '직관에만 의존할 수는 없습니다. 현명한 결정을 내리기 위해서는 실증적인 데이터가 필요합니다.' },
      ],
    }
  ),
  word('Endorse', '승인하다', 6, 'verb',
    ['거부하다', '반대하다', '비난하다', '거절하다', '무효화하다', '취소하다', '철회하다', '부인하다', '금지하다', '배척하다'],
    tips({
      etymology: '라틴어 \'dorsum(등)\'에서 유래하여, 서류의 뒷면(등)에 서명하여 승인한다는 의미에서 시작되었습니다.',
      visual: '유명 운동선수가 나이키 신발을 신고 엄지손가락을 치켜세우며 광고 계약서에 사인하는 모습을 상상해 보세요.',
      soundAlike: '엔도스 -> \'안에 도장(찍다)\'으로 연상하여 서류 안에 도장을 찍어 공식적으로 승인하는 이미지를 떠올리세요.',
      context: '정치인이 특정 후보를 지지하거나, 기업이 신제품의 품질을 보증할 때, 혹은 수표 뒷면에 이서할 때 주로 쓰입니다.',
      synonymAntonym: 'support와 유사하게 무언가를 밀어주는 느낌이며, 반대 의견을 내는 oppose나 거절하는 reject와는 대조적입니다.',
    }),
    {
      definition: 'To publicly or officially declare one\'s support for a person, product, or course of action.',
      synonyms: ['advocate', 'sanction', 'uphold'],
      antonyms: ['disapprove', 'veto', 'denounce'],
      exampleSentences: [
        { en: 'The former president decided to formally support and promote the new candidate\'s campaign.', ko: '전직 대통령은 새 후보의 선거 운동을 공식적으로 지지하기로 결정했습니다.' },
        { en: 'Many professional athletes earn more money when they recommend specific sports brands to the public.', ko: '많은 프로 운동선수들이 대중에게 특정 스포츠 브랜드를 홍보할 때 더 많은 수입을 올립니다.' },
      ],
    }
  ),
  word('Enforce', '시행하다', 6, 'verb',
    ['방치하다', '무시하다', '철회하다', '완화하다', '해제하다', '포기하다', '방임하다', '소홀히하다', '유예하다', '폐지하다'],
    tips({
      etymology: '접두사 en-(만들다)과 force(힘)가 결합되어 \'힘을 가해 실제로 실행되게 만들다\'라는 의미를 가집니다.',
      visual: '제복을 입은 경찰관이 도로에서 속도 위반 차량을 멈춰 세우며 엄격하게 법규를 적용하는 장면을 상상해 보세요.',
      soundAlike: '인포스 -> \'안(In)으로 힘(Force)을 팍 밀어 넣어\' 규칙이 밖으로 새나가지 않게 꽉 조이는 느낌입니다.',
      context: '주로 정부나 기관이 법률, 규정, 정책 등을 사람들이 반드시 지키도록 강제하거나 집행할 때 사용합니다.',
      synonymAntonym: '실행한다는 의미의 implement와 유사하며, 권리나 규칙 적용을 포기하는 waive와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To compel observance of or compliance with a law, rule, or obligation.',
      synonyms: ['administer', 'execute', 'implement'],
      antonyms: ['disregard', 'abandon', 'waive'],
      exampleSentences: [
        { en: 'The police are responsible for ensuring that traffic regulations are properly followed.', ko: '경찰은 교통 규정이 제대로 준수되도록 시행할 책임이 있다.' },
        { en: 'It is difficult to carry out these new safety measures without additional funding.', ko: '추가 예산 없이는 이러한 새로운 안전 조치들을 시행하기 어렵다.' },
      ],
    }
  ),
  word('Engage', '참여시키다', 6, 'verb',
    ['배제하다', '무시하다', '해제하다', '떠나게 하다', '소외시키다', '거부하다', '해산하다', '이탈하다', '방치하다', '회피하다'],
    tips({
      etymology: 'en(안에)과 gage(약속/담보)가 합쳐져 \'약속 안으로 끌어들이다\'라는 어원을 가집니다.',
      visual: '강연자가 청중에게 질문을 던져 모두가 고개를 끄덕이며 대화에 몰입하는 장면을 상상해 보세요.',
      soundAlike: '엔게이지 -> \'인(In) 게이지(측정기)\' 바늘이 움직이듯 활동 범위 안으로 들어오는 느낌입니다.',
      context: '단순한 참여뿐만 아니라 상대의 관심을 사로잡거나 기계 부품이 서로 맞물릴 때도 자주 쓰입니다.',
      synonymAntonym: 'involve와 유사하게 쓰이며, 연결을 끊고 물러나는 disengage와 정반대되는 개념입니다.',
    }),
    {
      definition: 'To occupy the attention or efforts of a person or group.',
      synonyms: ['involve', 'attract', 'occupy'],
      antonyms: ['disengage', 'exclude', 'ignore'],
      exampleSentences: [
        { en: 'The speaker used humor to effectively interest and involve the audience.', ko: '연설가는 청중을 효과적으로 참여시키기 위해 유머를 사용했습니다.' },
        { en: 'It is often difficult to keep young children focused and busy in a long lesson.', ko: '긴 수업 시간 동안 어린 아이들을 집중시키고 참여하게 만드는 것은 종종 어렵습니다.' },
      ],
    }
  ),
  word('Enhance', '향상시키다', 6, 'verb',
    ['악화시키다', '훼손하다', '약화시키다', '감소시키다', '저하시키다', '방해하다', '퇴보하다', '해치다', '손상시키다', '억제하다'],
    tips({
      etymology: '접두사 en(만들다)과 hance(높은 곳으로 올리다)가 결합하여 가치나 질을 더 높게 만든다는 뜻이 되었습니다.',
      visual: '흐릿했던 사진의 해상도가 보정 버튼 하나로 선명하고 화사하게 바뀌는 모습을 상상해 보세요.',
      soundAlike: '인핸스... \'인삼\'을 먹고 체력과 면역력을 \'향상\'시키는 모습을 연상하면 기억하기 쉽습니다.',
      context: '단순히 고치는 것이 아니라, 이미 존재하는 기술, 능력, 외모, 가치 등을 더 훌륭한 상태로 끌어올릴 때 자주 쓰입니다.',
      synonymAntonym: 'improve와 유사하지만 더 격식 있는 표현이며, 반대말로는 가치를 깎아내리는 diminish나 worsen이 있습니다.',
    }),
    {
      definition: 'To intensify, heighten, or further improve the quality, value, or attractiveness of something.',
      synonyms: ['improve', 'boost', 'augment'],
      antonyms: ['diminish', 'worsen', 'weaken'],
      exampleSentences: [
        { en: 'The new software will enhance the performance of your computer.', ko: '새 소프트웨어는 당신의 컴퓨터 성능을 향상시킬 것입니다.' },
        { en: 'Adding spices can enhance the flavor of the dish.', ko: '향신료를 추가하면 요리의 풍미를 돋울 수 있습니다.' },
      ],
    }
  ),
  word('Enterprise', '기업', 6, 'noun',
    ['개인', '취미', '무계획', '비조직', '해체', '공백', '비영리', '단순노동', '휴식', '정체'],
    tips({
      etymology: 'enter(사이에)와 prise(잡다)가 합쳐져 \'어떤 일에 착수하다\'라는 뜻에서 유래했습니다.',
      visual: '거대한 빌딩 숲 사이에 자리 잡은 대기업 본사를 상상해 보세요.',
      soundAlike: '엔터프라이즈... 스타트렉의 우주선 이름처럼 거대한 \'모험적 사업\'을 떠올리세요.',
      context: '단순한 회사를 넘어 모험적이고 규모가 큰 사업 체계를 의미할 때가 많습니다.',
      synonymAntonym: 'business와 유사하며, 반대 개념은 개인적인 hobby나 inactivity입니다.',
    }),
    {
      definition: 'A large organization or company, particularly one that involves significant risk-taking or creative initiative.',
      synonyms: ['venture', 'corporation', 'establishment'],
      antonyms: ['idleness', 'unemployment', 'inactivity'],
      exampleSentences: [
        { en: 'The new enterprise created hundreds of jobs in the local area.', ko: '그 새로운 기업은 지역 사회에 수백 개의 일자리를 창출했습니다.' },
        { en: 'Starting a business is a risky enterprise.', ko: '사업을 시작하는 것은 위험이 따르는 일입니다.' },
      ],
    }
  ),
  word('Entity', '실체', 6, 'noun',
    ['공허', '환상', '추상', '개념', '무형', '착각', '환영', '허구', '가상', '부재'],
    tips({
      etymology: '라틴어 \'ens(존재하는 것)\'에서 유래하여, 다른 것과 섞이지 않고 독립적으로 존재하는 대상을 의미합니다.',
      visual: '데이터베이스 설계도에서 각각의 사각형 박스로 표현되는 독립적인 정보 단위들을 떠올려 보세요.',
      soundAlike: '엔티티... \'앤(And)\'으로 묶이지 않고 \'티(T)\' 하나만 따로 떨어져 있는 독립된 개체라고 기억하세요.',
      context: '비즈니스에서는 \'법인\', IT에서는 \'데이터 단위\', 철학에서는 \'실재하는 것\'을 지칭할 때 주로 사용됩니다.',
      synonymAntonym: 'being이나 unit과 비슷하며, 실체가 없는 상태인 nonexistence와는 반대되는 개념입니다.',
    }),
    {
      definition: 'A thing with distinct and independent existence, often used to describe a business or a specific object in a system.',
      synonyms: ['being', 'unit', 'individual'],
      antonyms: ['nothingness', 'concept', 'unreality'],
      exampleSentences: [
        { en: 'The two companies merged but remained separate legal entities.', ko: '두 회사는 합병했지만 별개의 법적 실체로 남았습니다.' },
        { en: 'The church is a separate entity from the state.', ko: '교회는 국가와 분리된 독립된 실체입니다.' },
      ],
    }
  ),
  word('Epidemic', '유행병', 6, 'noun',
    ['회복', '치유', '예방', '소멸', '완치', '정상화', '안정', '건강', '종식', '면역'],
    tips({
      etymology: '그리스어 epi(위에)와 demos(사람들)가 결합되어 사람들 사이에 널리 퍼져 있는 상태를 뜻합니다.',
      visual: '뉴스 화면에서 특정 지역이 붉게 물들며 질병이 빠르게 번져나가는 그래픽을 떠올려 보세요.',
      soundAlike: '에피데믹... \'애들이 피(blood) 보며 데여서\' 병이 퍼지는 상황으로 연상해 보세요.',
      context: '의학적인 질병의 확산뿐만 아니라, 사회적 현상이나 부정적인 습관이 급증할 때도 비유적으로 쓰입니다.',
      synonymAntonym: 'outbreak는 갑작스러운 발생에, pandemic은 전 세계적 확산에 초점을 둡니다.',
    }),
    {
      definition: 'A large number of cases of a particular infectious disease happening at the same time in a specific community.',
      synonyms: ['outbreak', 'plague', 'scourge'],
      antonyms: ['suppression', 'eradication', 'prevention'],
      exampleSentences: [
        { en: 'The flu epidemic caused many schools to close temporarily.', ko: '독감 유행병으로 인해 많은 학교가 임시 휴교했습니다.' },
        { en: 'The city is facing an epidemic of drug abuse.', ko: '그 도시는 약물 남용의 급격한 확산 문제에 직면해 있습니다.' },
      ],
    }
  ),
  word('Equip', '갖추다', 6, 'verb',
    ['벗기다', '탈취하다', '해제하다', '제거하다', '미비하다', '박탈하다', '빼앗다', '버리다', '방치하다', '소홀히하다'],
    tips({
      etymology: '고대 프랑스어 \'esquiper\'에서 유래했으며, 본래 \'배에 필요한 물자를 싣고 출항 준비를 하다\'라는 의미에서 시작되었습니다.',
      visual: '게임을 시작하기 전 캐릭터 인벤토리에서 검과 갑옷을 슬롯에 장착하는 화면을 상상해 보세요.',
      soundAlike: '\'이 킵(Keep)\'해야 할 필수 도구들을 가방에 챙겨서 몸에 \'갖추는\' 소리를 연상하세요.',
      context: '단순히 도구나 장비를 설치하는 것 외에도, 교육을 통해 지식이나 자질을 갖추게 할 때도 자주 쓰입니다.',
      synonymAntonym: 'furnish는 공급하여 갖추어 주는 느낌이며, 반대말인 strip은 장비를 다시 벗겨내거나 박탈하는 것을 뜻합니다.',
    }),
    {
      definition: 'To provide a person or place with the necessary tools, supplies, or abilities for a specific task.',
      synonyms: ['furnish', 'provide', 'outfit'],
      antonyms: ['strip', 'divest', 'unarm'],
      exampleSentences: [
        { en: 'The laboratory is equipped with the latest technology.', ko: '그 실험실은 최신 기술 장비들을 갖추고 있습니다.' },
        { en: 'The course will equip you with the skills needed for the job.', ko: '이 과정은 당신에게 업무에 필요한 기술을 갖추게 해 줄 것입니다.' },
      ],
    }
  ),
  word('Equivalent', '동등한', 6, 'adjective',
    ['불균형한', '비대칭의', '열등한', '우월한', '이질적인', '불일치하는', '상이한', '비등가적인', '상반된', '부족한'],
    tips({
      etymology: '라틴어의 equi(동일한)와 valere(가치가 있다)가 결합되어 \'가치가 같다\'는 의미를 형성합니다.',
      visual: '양팔 저울의 양쪽에 같은 무게의 추가 놓여 완벽하게 수평을 이루고 있는 모습을 떠올려 보세요.',
      soundAlike: '이퀴벌런트... \'이 귀(Ear) 벌(벌판)\'처럼 양쪽 귀가 벌판처럼 넓고 똑같이 생겼다고 연상하세요.',
      context: '단순히 숫자가 같은 것뿐만 아니라, 보상이나 처벌, 혹은 단어의 의미가 서로 맞먹을 때 사용됩니다.',
      synonymAntonym: 'Equal은 수치적 일치에 가깝고, 이 단어는 가치나 기능의 일치에 더 초점을 둡니다. 반대말은 dissimilar입니다.',
    }),
    {
      definition: 'Having the same value, importance, size, or meaning as something else.',
      synonyms: ['equal', 'comparable', 'corresponding'],
      antonyms: ['different', 'unequal', 'dissimilar'],
      exampleSentences: [
        { en: 'Eight kilometers is roughly equivalent to five miles.', ko: '8킬로미터는 대략 5마일과 동등한 거리입니다.' },
        { en: 'Silence is sometimes equivalent to an admission of guilt.', ko: '침묵은 때때로 죄를 인정하는 것과 같은 의미를 가집니다.' },
      ],
    }
  ),
  word('Erode', '침식하다', 6, 'verb',
    ['축적하다', '쌓다', '건설하다', '보강하다', '보존하다', '강화하다', '증가시키다', '고치다', '유지하다', '창조하다'],
    tips({
      etymology: '라틴어 \'erodere\'에서 유래되었으며, \'e(밖으로)\'와 \'rodere(갉아먹다)\'가 합쳐져 표면을 갉아내어 없앤다는 의미를 가집니다.',
      visual: '거센 파도가 수천 년 동안 바위를 때려 결국 구멍이 뚫리거나 절벽이 깎여 나가는 해안가 풍경을 상상해 보세요.',
      soundAlike: '\'이로드\' → \'이 로드(Road, 길)\'가 홍수에 쓸려 내려가 서서히 사라지는 모습을 연상하면 기억하기 쉽습니다.',
      context: '비바람에 의한 토양 유실 같은 자연 현상뿐만 아니라, 인플레이션이 저축의 가치를 떨어뜨리거나 불신이 권위를 약화시킬 때도 자주 쓰입니다.',
      synonymAntonym: '금속이 부식되는 corrode와 유사하며, 반대로 차곡차곡 쌓아 올리는 build up이나 원형을 지키는 preserve와 대조됩니다.',
    }),
    {
      definition: 'To gradually wear away or be destroyed by the action of wind, water, or chemical processes.',
      synonyms: ['corrode', 'deteriorate', 'abrade'],
      antonyms: ['build', 'strengthen', 'preserve'],
      exampleSentences: [
        { en: 'The coastline is slowly being worn down by the constant action of the sea.', ko: '해안선이 바다의 지속적인 작용에 의해 서서히 침식되고 있습니다.' },
        { en: 'Repeated scandals began to weaken the public\'s trust in the government.', ko: '반복된 스캔들이 정부에 대한 대중의 신뢰를 갉아먹기 시작했습니다.' },
      ],
    }
  ),
  word('Ethic', '윤리', 6, 'noun',
    ['무도덕', '비양심', '부정', '부패', '타락', '비윤리', '무원칙', '방종', '해이', '부도덕'],
    tips({
      etymology: '그리스어 ethos(성품, 관습)에서 유래하여 사회적 도리를 뜻합니다.',
      visual: '옳고 그름의 갈림길에서 양심의 가책을 느끼며 고민하는 사람을 상상하세요.',
      soundAlike: '에틱... \'애(Child) 틱\'하지 않게 어른스럽게 행동하는 도덕적 태도를 연상하세요.',
      context: '개인의 신념이나 특정 집단이 지켜야 할 행동 기준을 말할 때 씁니다.',
      synonymAntonym: 'morality와 유사하며, 반대말은 immorality나 corruption입니다.',
    }),
    {
      definition: 'A set of moral principles, especially ones relating to a specified group or form of conduct.',
      synonyms: ['morality', 'principle', 'integrity'],
      antonyms: ['immorality', 'corruption', 'dishonesty'],
      exampleSentences: [
        { en: 'The medical profession has a strict code of ethics.', ko: '의료직은 엄격한 윤리 강령을 가지고 있습니다.' },
        { en: 'She has a very strong work ethic and never leaves early.', ko: '그녀는 직업 윤리 의식이 매우 강해서 절대 일찍 퇴근하지 않습니다.' },
      ],
    }
  ),
  word('Ethnic', '민족적', 6, 'adjective',
    ['국제적', '보편적', '세계적', '혼합된', '다문화의', '무국적의', '동질적인', '통합된', '융합된', '일반적인'],
    tips({
      etymology: '그리스어 ethnos(민족, 사람들)에서 유래하여 특정 집단의 고유한 특성을 나타냅니다.',
      visual: '각 나라의 화려한 전통 의상을 입고 고유의 춤을 추는 축제 현장을 상상해 보세요.',
      soundAlike: '에스닉 푸드나 에스닉 패션처럼 특정 민족의 독특한 색채가 강한 스타일을 떠올려 보세요.',
      context: '주로 인종적 배경, 전통 관습, 종교적 뿌리와 관련된 문화적 맥락에서 자주 사용됩니다.',
      synonymAntonym: 'racial, cultural과 유사하며, 전 세계 어디에나 통용되는 universal과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Relating to a group of people who share a common national or cultural tradition, religion, or ancestry.',
      synonyms: ['racial', 'cultural', 'tribal'],
      antonyms: ['universal', 'global', 'international'],
      exampleSentences: [
        { en: 'The city is known for its vibrant mix of different ethnic groups.', ko: '그 도시는 다양한 민족 집단이 활기차게 섞여 있는 것으로 유명하다.' },
        { en: 'She enjoys collecting ethnic jewelry from her travels around the world.', ko: '그녀는 세계 여행을 다니며 민족 색채가 강한 장신구를 수집하는 것을 즐긴다.' },
      ],
    }
  ),
  word('Evolution', '진화', 6, 'noun',
    ['퇴화', '퇴보', '고정', '정체', '불변', '퇴행', '해체', '소멸', '정지', '고착'],
    tips({
      etymology: '접두사 e(밖으로)와 volut(구르다/말다)가 결합하여, 안으로 말려있던 잠재력이 밖으로 펼쳐지며 발전한다는 의미를 담고 있습니다.',
      visual: '원숭이에서 인간으로 점진적으로 변해가는 인류의 계통도나 작은 씨앗이 거대한 나무로 변하는 과정을 상상해 보세요.',
      soundAlike: '유명한 게임 \'포켓몬스터\'에서 몬스터가 더 강력한 모습으로 변할 때 사용하는 단어와 발음이 같습니다.',
      context: '생물학적인 종의 변화뿐만 아니라, 스마트폰의 기술적 발전이나 예술 양식의 변화 등 광범위한 성장을 묘사할 때 쓰입니다.',
      synonymAntonym: '점진적인 발전을 뜻하는 development와 유사하며, 반대로 뒤로 후퇴하거나 제자리에 머무는 regression, stagnation과는 반대됩니다.',
    }),
    {
      definition: 'The process by which different kinds of living organisms or systems develop and diversify from earlier forms over a long period.',
      synonyms: ['development', 'progression', 'advancement'],
      antonyms: ['regression', 'stagnation', 'decline'],
      exampleSentences: [
        { en: 'The theory of natural selection explains how biological change happens over generations.', ko: '자연 선택설은 세대를 거쳐 생물학적 변화가 어떻게 일어나는지 설명해 준다.' },
        { en: 'We are witnessing a rapid transformation in the way humans communicate through digital tools.', ko: '우리는 디지털 도구를 통한 인간의 의사소통 방식이 급격하게 발전하는 과정을 목격하고 있다.' },
      ],
    }
  ),
  word('Exaggerate', '과장하다', 6, 'verb',
    ['축소하다', '축약하다', '최소화하다', '왜소화하다', '절제하다', '생략하다', '무시하다', '낮추다', '요약하다', '감추다'],
    tips({
      etymology: '라틴어 ex(강조)와 agger(더미)가 결합되어 \'더미를 높게 쌓아 올리다\'라는 어원에서 유래했습니다.',
      visual: '낚시꾼이 손바닥만한 물고기를 잡고서 양팔을 넓게 벌려 고래만큼 컸다고 말하는 장면을 떠올려 보세요.',
      soundAlike: '\'이그재저레이트\' 발음이 \'이게 진짜래두!\'라며 억지로 사실을 부풀려 우기는 소리처럼 들립니다.',
      context: '뉴스 기사에서 사건을 부풀리거나, 친구가 경험담을 더 재미있게 만들려고 양념을 칠 때 자주 쓰입니다.',
      synonymAntonym: 'overstate는 사실보다 높게 말하는 것이고, 반대로 understate는 실제보다 낮추어 말하는 것입니다.',
    }),
    {
      definition: 'To represent something as being larger, better, or worse than it really is.',
      synonyms: ['overstate', 'inflate', 'magnify'],
      antonyms: ['minimize', 'understate', 'play down'],
      exampleSentences: [
        { en: 'The media tends to overemphasize and blow out of proportion minor incidents.', ko: '언론은 사소한 사건들을 과장하고 부풀리는 경향이 있다.' },
        { en: 'I am not trying to make the situation seem worse than it is, but we are in trouble.', ko: '상황을 과장하려는 것은 아니지만, 우리는 지금 곤경에 처해 있다.' },
      ],
    }
  ),
  word('Excerpt', '발췌', 6, 'noun',
    ['전문', '전체', '원본', '완본', '총괄', '총론', '개론', '통합본', '종합', '전집'],
    tips({
      etymology: '라틴어 \'ex(밖으로)\'와 \'carpere(뽑다)\'가 결합되어 긴 글에서 특정 부분을 밖으로 뽑아냈다는 뜻이 되었습니다.',
      visual: '두꺼운 백과사전 속에서 한 문단에만 노란색 형광펜이 칠해져 있는 모습을 상상해 보세요.',
      soundAlike: '\'엑\'하고 \'서\'둘러서 \'프\'린트한 짧은 글귀라고 기억하면 발음과 연결하기 쉽습니다.',
      context: '뉴스 기사에서 유명인의 인터뷰 일부를 인용하거나 시험 지문으로 소설의 일부가 나올 때 자주 사용됩니다.',
      synonymAntonym: 'passage나 extract는 뽑아낸 구절을 뜻하며, 반대로 전체를 뜻하는 entirety나 whole과는 대조됩니다.',
    }),
    {
      definition: 'A small section or piece of writing, music, or film that has been chosen from a much larger work.',
      synonyms: ['passage', 'extract', 'selection'],
      antonyms: ['entirety', 'whole', 'totality'],
      exampleSentences: [
        { en: 'The professor distributed a brief excerpt from the historical document for the students to analyze.', ko: '교수님은 학생들이 분석할 수 있도록 역사적 문헌에서 발췌한 짧은 부분을 나누어 주었다.' },
        { en: 'I only had time to listen to a short musical excerpt of the symphony before the meeting started.', ko: '회의가 시작되기 전에 교향곡에서 발췌한 짧은 부분만 들을 시간이 있었다.' },
      ],
    }
  ),
  word('Exclusive', '독점적인', 6, 'adjective',
    ['포괄적인', '공개적인', '개방적인', '대중적인', '공통의', '보편적인', '공유된', '협력적인', '통합된', '포용적인'],
    tips({
      etymology: '접두사 ex(밖으로)와 claudere(닫다)가 결합되어, 외부 사람들을 차단하고 문을 닫아버린다는 의미에서 유래되었습니다.',
      visual: '화려한 레드카펫이 깔린 입구에서 경호원이 명단에 있는 VIP만 들여보내고 문을 닫는 모습을 상상해 보세요.',
      soundAlike: '패션 잡지나 뉴스에서 \'익스클루시브 단독 공개\'라는 표현을 쓸 때의 그 \'단독\' 느낌을 기억하세요.',
      context: '고급 리조트, 특정인만 참여하는 파티, 혹은 다른 언론사는 모르는 단독 기사를 묘사할 때 자주 사용됩니다.',
      synonymAntonym: 'sole, private과 의미가 통하며, 모든 것을 아우르는 inclusive나 누구나 쓸 수 있는 public과는 반대됩니다.',
    }),
    {
      definition: 'Limited to a specific individual or group and not available to the general public.',
      synonyms: ['sole', 'restricted', 'private'],
      antonyms: ['inclusive', 'public', 'common'],
      exampleSentences: [
        { en: 'The hotel offers an exclusive beach area for its guests.', ko: '그 호텔은 투숙객들을 위해 독점적인 해변 구역을 제공한다.' },
        { en: 'They signed an exclusive contract to sell the product in Asia.', ko: '그들은 아시아에서 그 제품을 판매하기 위한 독점 계약을 체결했다.' },
      ],
    }
  ),
  word('Execute', '실행하다', 6, 'verb',
    ['중단하다', '취소하다', '생략하다', '포기하다', '방치하다', '해제하다', '철회하다', '정지하다', '지연시키다', '거부하다'],
    tips({
      etymology: '라틴어 ex(완전히)와 secut(따르다)가 결합되어, 어떤 일을 끝까지 따라가서 완수한다는 의미를 담고 있습니다.',
      visual: '컴퓨터의 실행 파일 확장자인 .exe 아이콘을 마우스로 더블 클릭하여 프로그램이 돌아가는 장면을 상상해 보세요.',
      soundAlike: '비즈니스 리더를 뜻하는 \'익제큐티브(Executive)\'가 바로 이 단어에서 유래하여 \'실행하는 사람\'이라는 뜻을 가집니다.',
      context: '단순히 시작하는 것을 넘어 계획된 절차를 완벽히 수행하거나, 법적 명령을 집행할 때 주로 사용되는 격식 있는 표현입니다.',
      synonymAntonym: '유사어 implement는 도구를 갖추어 실행함을, 반대어 abandon은 도중에 내팽개치고 포기함을 뜻합니다.',
    }),
    {
      definition: 'To carry out a plan, order, or course of action until it is complete.',
      synonyms: ['implement', 'perform', 'accomplish'],
      antonyms: ['abandon', 'halt', 'neglect'],
      exampleSentences: [
        { en: 'The team worked together to carry out and complete the strategy effectively.', ko: '팀은 전략을 효과적으로 실행하고 완수하기 위해 협력했습니다.' },
        { en: 'The soldiers fulfilled the order without any hesitation.', ko: '병사들은 망설임 없이 명령을 수행했습니다.' },
      ],
    }
  ),
  word('Exempt', '면제하다', 6, 'verb',
    ['적용하다', '포함하다', '부과하다', '의무화하다', '강제하다', '징수하다', '속박하다', '제한하다', '구속하다', '연루시키다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 emere(가져가다)가 결합되어, 의무의 영역 밖으로 끄집어내어 준다는 의미에서 유래했습니다.',
      visual: '모두가 무거운 짐을 지고 가는데, 한 사람만 짐을 내려놓고 가볍게 지나가도록 허락받는 장면을 떠올려 보세요.',
      soundAlike: '발음이 \'이그젬(exam)\'과 비슷하죠? 성적이 아주 좋아서 기말 \'시험(exam)\'을 \'면제(exempt)\' 받는 상황을 연상해 보세요.',
      context: '주로 세금 납부, 군 복무, 특정 규칙 준수와 같은 법적 혹은 공식적인 의무를 면해줄 때 사용됩니다.',
      synonymAntonym: '유사어 release는 의무에서 풀어주는 것이고, 반대어 enforce는 규칙을 강제로 집행하여 따르게 하는 것입니다.',
    }),
    {
      definition: 'To officially grant someone permission not to do something or pay something that is normally required.',
      synonyms: ['excuse', 'exclude', 'release'],
      antonyms: ['subject', 'obligate', 'enforce'],
      exampleSentences: [
        { en: 'The government decided to exempt low-income families from the new property tax.', ko: '정부는 저소득 가구에 대해 새로운 재산세를 면제해 주기로 결정했다.' },
        { en: 'Students with high grades may be exempted from taking the final examination.', ko: '성적이 우수한 학생들은 기말고사를 치르는 것을 면제받을 수도 있다.' },
      ],
    }
  ),
  word('Exhaust', '소진하다', 6, 'verb',
    ['보충하다', '충전하다', '축적하다', '채우다', '보존하다', '비축하다', '저장하다', '생성하다', '회복하다', '유지하다'],
    tips({
      etymology: '라틴어 ex(밖으로)와 haurire(퍼내다)가 결합되어, 안에 있는 것을 바닥날 때까지 다 퍼낸다는 의미에서 유래되었습니다.',
      visual: '스마트폰 배터리가 0%가 되어 화면이 꺼지는 순간이나, 마라톤 완주 후 트랙에 쓰러진 선수를 떠올려 보세요.',
      soundAlike: '자동차 뒤에서 뿜어져 나오는 \'배기가스\'도 엔진 안의 기체를 다 내보내는 것이라 똑같이 이 단어를 사용합니다.',
      context: '단순히 피곤한 상태를 넘어 체력이 완전히 바닥났을 때나, 예산이나 천연자원을 모두 써버렸을 때 주로 쓰입니다.',
      synonymAntonym: '유사어인 deplete는 자원을 고갈시킬 때, 반대어인 replenish는 비어있는 것을 다시 가득 채울 때 사용합니다.',
    }),
    {
      definition: 'To completely use up a supply of resources or to make someone feel extremely tired and without energy.',
      synonyms: ['deplete', 'drain', 'fatigue'],
      antonyms: ['replenish', 'refresh', 'restore'],
      exampleSentences: [
        { en: 'The long hike exhausted the entire group.', ko: '긴 하이킹은 그룹 전체를 기진맥진하게 만들었다.' },
        { en: 'We have exhausted all our financial resources.', ko: '우리는 모든 재정적 자원을 소진했다.' },
      ],
    }
  ),
  word('Exile', '추방하다', 6, 'verb',
    ['환영하다', '귀환시키다', '초대하다', '수용하다', '복귀시키다', '귀국시키다', '환송하다', '영접하다', '환대하다', '입국시키다'],
    tips({
      etymology: '라틴어 exilium에서 유래하여 \'밖으로 나감\'을 의미하며, 고국 밖으로 강제로 보내지는 상황을 나타냅니다.',
      visual: '국경선 너머로 짐 가방 하나만 든 채 쓸쓸히 걸어 나가는 사람의 뒷모습을 상상해 보세요.',
      soundAlike: '엑자일(Exile) - \'액(운)\'이 끼었으니 \'잘\' 가라고 밖으로 내쫓는 상황으로 기억하면 쉽습니다.',
      context: '주로 정치적 반대파를 숙청하거나 역사적 인물이 섬으로 유배를 가는 무거운 상황에서 사용됩니다.',
      synonymAntonym: 'banish, expel과 비슷하며, 반대로 다시 불러들이거나 환영하는 welcome, repatriate와 대조됩니다.',
    }),
    {
      definition: 'To officially force someone to leave their home or country as a punishment or for political reasons.',
      synonyms: ['banish', 'expel', 'deport'],
      antonyms: ['welcome', 'admit', 'repatriate'],
      exampleSentences: [
        { en: 'The government decided to banish the rebel leader to a remote island.', ko: '정부는 반란군 지도자를 외딴 섬으로 추방하기로 결정했다.' },
        { en: 'After the coup failed, the former president was forced to live in a foreign land.', ko: '쿠데타가 실패한 후, 전직 대통령은 타국으로 추방되어 살아야 했다.' },
      ],
    }
  ),
  word('Exotic', '이국적인', 6, 'adjective',
    ['토착의', '국내산', '흔한', '일상적인', '국산의', '보편적인', '전형적인', '평범한', '국내의', '친숙한'],
    tips({
      etymology: '그리스어 \'exotikos\'에서 유래되었으며, \'exo\'는 \'바깥\'을 의미하여 외부 세계에서 온 낯선 것을 뜻합니다.',
      visual: '화려한 깃털을 가진 열대 지방의 앵무새나 기하학적 문양의 외국 전통 의상을 상상해 보세요.',
      soundAlike: '이그조틱 - \'이것 좀 틱\'하고 튀는 느낌, 즉 주변과 어울리지 않고 독특하게 튀는 외국의 느낌으로 기억하세요.',
      context: '주로 낯선 나라의 풍경, 독특한 향신료가 들어간 요리, 혹은 희귀한 동식물을 묘사할 때 자주 쓰입니다.',
      synonymAntonym: 'foreign이나 unusual과 비슷하지만 더 매혹적인 느낌이며, native나 common과는 반대되는 개념입니다.',
    }),
    {
      definition: 'Coming from a faraway land or appearing strikingly different and colorful in a way that is attractive.',
      synonyms: ['foreign', 'unusual', 'alien'],
      antonyms: ['native', 'ordinary', 'common'],
      exampleSentences: [
        { en: 'She loves trying food from distant and mysterious lands.', ko: '그녀는 멀고 신비로운 나라의 이국적인 음식을 먹어보는 것을 좋아한다.' },
        { en: 'The garden was filled with plants from far-off places.', ko: '그 정원은 먼 곳에서 온 이국적인 식물들로 가득했다.' },
      ],
    }
  ),
  word('Exploit', '이용하다', 6, 'verb',
    ['보호하다', '돌보다', '지키다', '방어하다', '수호하다', '보존하다', '아끼다', '옹호하다', '비호하다', '방치하다'],
    tips({
      etymology: 'ex(밖으로)와 ploit(접다)가 합쳐져 \'접힌 것을 펼쳐서 성과를 내다\'라는 의미에서 유래했습니다.',
      visual: '광산에서 광석을 캐내거나, 수건을 꽉 짜서 마지막 한 방울까지 활용하는 모습을 상상해 보세요.',
      soundAlike: '익스플로이트 - \'이것을 풀어서(Exploit)\' 최대한 써먹거나 이용한다고 기억하면 쉽습니다.',
      context: '자원을 개발한다는 중립적인 의미와 타인을 부당하게 이용한다는 부정적인 의미(착취)를 모두 가집니다.',
      synonymAntonym: 'utilize는 단순히 활용하는 것이고, manipulate는 교묘하게 조종하여 이용하는 뉘앙스입니다.',
    }),
    {
      definition: 'To make full use of and derive benefit from a resource, or to use someone in an unfair way for one\'s own advantage.',
      synonyms: ['utilize', 'harness', 'manipulate'],
      antonyms: ['protect', 'conserve', 'neglect'],
      exampleSentences: [
        { en: 'The company was accused of trying to unfairly use the labor of underage workers.', ko: '그 회사는 미성년 노동자들의 노동력을 부당하게 착취하려 했다는 비난을 받았다.' },
        { en: 'We need to find new ways to make the most of renewable energy sources.', ko: '우리는 재생 가능한 에너지원을 최대한 활용할 새로운 방법들을 찾아야 한다.' },
      ],
    }
  ),
  word('Exposure', '노출', 6, 'noun',
    ['차단', '은폐', '보호', '차폐', '숨김', '비공개', '봉쇄', '격리', '은닉', '보안'],
    tips({
      etymology: '접두사 ex(밖으로)와 어근 pos(놓다)가 결합되어 무언가를 \'밖에 내놓음\'을 의미합니다.',
      visual: '카메라 렌즈가 열려 빛을 받아들이는 순간이나, 추운 겨울날 외투 없이 밖에 서 있는 모습을 상상해 보세요.',
      soundAlike: '익스포저 - \'밖으로(Ex) 포즈(Pose)를 취하며\' 자신을 드러내는 상황으로 기억하면 쉽습니다.',
      context: '의학적으로는 바이러스 노출, 마케팅에서는 브랜드 노출, 사진학에서는 빛의 양을 조절할 때 사용됩니다.',
      synonymAntonym: '무언가를 밝히는 disclosure와 유의어이며, 꽁꽁 숨기는 concealment와는 반대되는 개념입니다.',
    }),
    {
      definition: 'The state of being made visible or being affected by something, especially something harmful or influential.',
      synonyms: ['disclosure', 'revelation', 'visibility'],
      antonyms: ['concealment', 'protection', 'hiding'],
      exampleSentences: [
        { en: 'Prolonged exposure to the sun can cause severe skin damage.', ko: '햇빛에 장시간 노출되는 것은 심각한 피부 손상을 유발할 수 있다.' },
        { en: 'The scandal gained wide exposure after the journalist published the report.', ko: '그 기자가 보고서를 발표한 후 그 스캔들은 널리 대중에게 노출되었다.' },
      ],
    }
  ),
  word('Exterior', '외부', 6, 'noun',
    ['내부', '심장부', '중앙', '안쪽', '핵심', '내면', '내측', '실내', '속', '본질'],
    tips({
      etymology: '라틴어 \'exter\'(밖의)에서 유래하여 \'더 바깥쪽에 위치한 부분\'이라는 의미를 가집니다.',
      visual: '멋지게 디자인된 건물의 외벽이나 자동차의 매끄러운 외장 도색을 상상해 보세요.',
      soundAlike: '실내 장식을 뜻하는 \'인테리어(Interior)\'와 반대되는 \'익스테리어\'라는 외래어로도 자주 쓰입니다.',
      context: '주로 건축물의 외관, 기계의 겉면, 또는 사람의 겉모습을 묘사할 때 활용됩니다.',
      synonymAntonym: 'outside, surface와 의미가 통하며, 내부를 뜻하는 interior, inside와는 반대됩니다.',
    }),
    {
      definition: 'The outer surface or the outermost part of an object or building.',
      synonyms: ['outside', 'surface', 'facade'],
      antonyms: ['interior', 'inside', 'core'],
      exampleSentences: [
        { en: 'The building\'s stone facade was cleaned to restore its original beauty.', ko: '건물의 석조 외부를 청소하여 원래의 아름다움을 되찾았다.' },
        { en: 'Despite his rugged outer appearance, he has a very kind heart.', ko: '거친 외부 모습과는 달리 그는 매우 친절한 마음씨를 가지고 있다.' },
      ],
    }
  ),
  word('Extract', '추출하다', 6, 'verb',
    ['주입하다', '삽입하다', '혼합하다', '방치하다', '결합하다', '유지하다', '보존하다', '첨가하다', '매립하다', '고정하다'],
    tips({
      etymology: '라틴어 접두사 ex-(밖으로)와 trahere(끌다)가 결합되어, 무언가를 밖으로 끌어낸다는 의미를 형성합니다.',
      visual: '커피 머신에서 원두의 진한 에센스가 아래로 한 방울씩 떨어지며 뽑혀 나오는 모습을 상상해 보세요.',
      soundAlike: '익스트랙트: \'밖으로(Ex) 트랙(Tract)을 따라\' 무거운 것을 끌어당겨 뽑아내는 소리를 연상하세요.',
      context: '데이터베이스에서 특정 정보를 골라내거나, 식물에서 약 성분을 뽑아낼 때, 혹은 치과에서 치아를 뽑을 때 주로 쓰입니다.',
      synonymAntonym: '무언가를 꺼내는 withdraw와 대조적으로, 안으로 밀어 넣는 insert나 inject는 반대 의미를 가집니다.',
    }),
    {
      definition: 'To take something out of a container or a larger mass by using effort, machinery, or a chemical process.',
      synonyms: ['withdraw', 'derive', 'extricate'],
      antonyms: ['insert', 'inject', 'embed'],
      exampleSentences: [
        { en: 'Scientists managed to isolate and take out the DNA from the ancient bone sample.', ko: '과학자들은 고대 뼈 샘플에서 DNA를 분리하여 추출해내는 데 성공했다.' },
        { en: 'The machine is designed to pull the juice from the fruit without losing any nutrients.', ko: '이 기계는 영양소 손실 없이 과일에서 과즙을 추출하도록 설계되었습니다.' },
      ],
    }
  ),
  word('Faction', '파벌', 6, 'noun',
    ['통합', '단결', '일치', '조화', '연합', '협력', '화합', '공동체', '전체', '통일'],
    tips({
      etymology: '라틴어 facere(만들다, 행하다)에서 유래하여, 큰 집단 안에서 따로 행동하기 위해 만들어진 작은 무리를 뜻합니다.',
      visual: '커다란 원형 테이블에 앉아 있는 사람들 중 서너 명만 고개를 숙이고 자기들끼리 속닥거리는 모습을 상상해 보세요.',
      soundAlike: '팩션 - 무리 지어 다니는 \'팩(Pack)\'들이 갈등을 일으키는 \'액션(Action)\'을 보여준다고 연상하세요.',
      context: '정치 기사에서 정당 내 계파 갈등을 다루거나, 회사 내 라인 형성 등 부정적인 분열 상황에서 자주 등장합니다.',
      synonymAntonym: 'clique는 폐쇄적인 소모임을, bloc은 투표 등을 위한 연합체를 뜻하며, 반대말인 unity는 전체의 화합을 강조합니다.',
    }),
    {
      definition: 'A small organized dissenting group within a larger one, especially in politics.',
      synonyms: ['clique', 'bloc', 'sect'],
      antonyms: ['unity', 'totality', 'agreement'],
      exampleSentences: [
        { en: 'The political party was split by internal fighting between each rival group.', ko: '그 정당은 각 라이벌 파벌 간의 내부 다툼으로 분열되었다.' },
        { en: 'A small dissenting group within the committee blocked the new proposal.', ko: '위원회 내의 한 작은 파벌이 새로운 제안을 저지했다.' },
      ],
    }
  ),
  word('Feasible', '실행 가능한', 6, 'adjective',
    ['불가능한', '비현실적인', '실현불가능한', '무리한', '비실용적인', '막연한', '환상적인', '어려운', '복잡한', '이론적인'],
    tips({
      etymology: '라틴어 facere(하다)에서 유래하여 \'할 수 있는\'이라는 의미를 담고 있습니다.',
      visual: '체크리스트의 모든 항목에 체크 표시가 되어 있는 완성된 계획표를 상상해 보세요.',
      soundAlike: '피저블 - \'피\'가 되고 \'살\'이 되는, 즉 실제로 도움이 되고 \'실행 가능한\' 계획이라고 기억하세요.',
      context: '비즈니스 미팅에서 새로운 프로젝트의 예산이나 기간이 적절한지 논의할 때 자주 쓰입니다.',
      synonymAntonym: '동의어인 viable은 생존 가능하다는 뜻에서 실현 가능하다는 의미로 확장되며, 반의어는 im- 접두사가 붙은 impossible입니다.',
    }),
    {
      definition: 'Capable of being done or carried out with the resources available.',
      synonyms: ['viable', 'practicable', 'workable'],
      antonyms: ['impossible', 'unattainable', 'unworkable'],
      exampleSentences: [
        { en: 'The committee is looking for a more economically viable solution for the city\'s traffic problem.', ko: '위원회는 도시 교통 문제에 대해 경제적으로 더 실행 가능한 해결책을 찾고 있다.' },
        { en: 'It is not technically achievable to build a colony on Mars within the next two years.', ko: '향후 2년 안에 화성에 식민지를 건설하는 것은 기술적으로 실행 가능하지 않다.' },
      ],
    }
  ),
  word('Federal', '연방의', 6, 'adjective',
    ['지방의', '국가적', '단일의', '독립적인', '자치적인', '분리된', '지역적인', '개별적인', '단독의', '비연방의'],
    tips({
      etymology: '라틴어 foedus(조약, 동맹)에서 유래하여 여러 주가 조약을 통해 하나로 뭉친 상태를 뜻합니다.',
      visual: '미국 국회의사당 건물이나 FBI(연방수사국) 요원의 신분증 배지를 떠올려 보세요.',
      soundAlike: '페더럴 -> \'패\'를 \'더\' 모아서 만든 \'럴\'(나라). 여러 패(주)를 더해 만든 연방 정부.',
      context: '미국이나 독일처럼 여러 자치 주가 모여 하나의 큰 중앙 정부를 이루는 정치 체제를 설명할 때 사용합니다.',
      synonymAntonym: '국가 전체를 아우르는 national과 유사하며, 특정 지역에 국한된 local이나 regional과는 반대됩니다.',
    }),
    {
      definition: 'Relating to a system of government in which several states unite under a central authority.',
      synonyms: ['national', 'central', 'governmental'],
      antonyms: ['local', 'regional', 'state'],
      exampleSentences: [
        { en: 'The central agency handles all federal crimes.', ko: '중앙 기관이 모든 연방 범죄를 처리한다.' },
        { en: 'The government announced a new policy for the whole country.', ko: '정부는 국가 전체를 위한 새로운 정책을 발표했다.' },
      ],
    }
  ),
  word('Fierce', '사나운', 6, 'adjective',
    ['온순한', '순한', '부드러운', '완화된', '평화적인', '우호적인', '온화한', '유순한', '차분한', '친절한'],
    tips({
      etymology: '라틴어 ferus(야생의)에서 유래하여 길들여지지 않은 거칠고 강력한 상태를 의미합니다.',
      visual: '굶주린 사자가 먹잇감을 향해 이빨을 드러내며 달려드는 강렬한 눈빛을 떠올려 보세요.',
      soundAlike: '피어스(Fierce) -> 귀를 \'피어스(pierce)\'할 정도로 날카롭고 강렬하게 포효하는 소리.',
      context: '단순히 성격이 무서운 것뿐만 아니라, 스포츠 경기의 승부욕이나 시장의 경쟁이 매우 치열할 때도 자주 쓰입니다.',
      synonymAntonym: 'aggressive와 ferocious는 공격적인 성향을, gentle과 mild는 부드러운 성향을 나타냅니다.',
    }),
    {
      definition: 'Showing a heartfelt and powerful intensity, often appearing aggressive or frighteningly strong.',
      synonyms: ['aggressive', 'intense', 'ferocious'],
      antonyms: ['gentle', 'mild', 'calm'],
      exampleSentences: [
        { en: 'The two rival teams engaged in a fierce battle for the championship title.', ko: '두 라이벌 팀은 우승컵을 차지하기 위해 사나운 결전을 벌였다.' },
        { en: 'A fierce wind blew across the open plains, making it difficult to stand upright.', ko: '탁 트인 평원에 사나운 바람이 불어와 똑바로 서 있기가 힘들었다.' },
      ],
    }
  ),
  word('Fiscal', '재정의', 6, 'adjective',
    ['비재정의', '민간의', '개인적인', '군사적인', '사회적인', '문화적인', '감정적인', '도덕적인', '법률적인', '정신적인'],
    tips({
      etymology: '라틴어 fiscus(바구니, 국고)에서 유래하여 나라의 돈 주머니를 관리한다는 의미를 담고 있습니다.',
      visual: '정부 로고가 찍힌 서류 가방 안에 가득 찬 예산안과 세금 고지서 뭉치를 상상해 보세요.',
      soundAlike: '피스컬 -> \'피\'땀 흘려 번 국민의 세금을 \'스\'마트하게 \'컬\'렉션(수집)하여 관리하는 재정.',
      context: '뉴스에서 정부의 예산 집행이나 세금 정책, 회계 연도를 언급할 때 가장 자주 쓰이는 단어입니다.',
      synonymAntonym: 'financial과 비슷하지만 주로 국가나 공공기관의 예산에 쓰이며, 개인적인 일을 뜻하는 private과 반대됩니다.',
    }),
    {
      definition: 'Relating to government revenue, especially taxes, and public spending.',
      synonyms: ['financial', 'budgetary', 'monetary'],
      antonyms: ['private', 'personal', 'nonfinancial'],
      exampleSentences: [
        { en: 'The government is implementing a new policy to reduce the national deficit.', ko: '정부는 국가 적자를 줄이기 위해 새로운 재정 정책을 시행하고 있다.' },
        { en: 'The company\'s year ends in December, while the government\'s starts in April.', ko: '그 회사의 회계 연도는 12월에 끝나지만, 정부의 회계 연도는 4월에 시작된다.' },
      ],
    }
  ),
  word('Fluctuate', '변동하다', 6, 'verb',
    ['안정되다', '고정되다', '일정하다', '불변하다', '정체되다', '고착되다', '유지하다', '정지하다', '멈추다', '확정하다'],
    tips({
      etymology: '라틴어 \'fluctuare(파도치다)\'에서 유래했습니다. 물결이 위아래로 출렁이는 모양을 떠올려 보세요.',
      visual: '주식 차트나 심전도 모니터의 선이 위아래로 불규칙하게 요동치는 그래프를 상상하세요.',
      soundAlike: '\'플럭(퍽) 올라갔다 츄(축) 처졌다\'를 반복하는 소리처럼 기억하면 쉽습니다.',
      context: '주가, 기온, 환율, 혹은 사람의 감정 수치가 일정하지 않고 계속 오르내릴 때 주로 쓰입니다.',
      synonymAntonym: 'vary와 oscillate는 비슷하게 변하는 것을, stabilize와 remain은 변하지 않고 고정된 상태를 뜻합니다.',
    }),
    {
      definition: 'To change continually and irregularly, moving up and down or back and forth.',
      synonyms: ['vary', 'oscillate', 'waver'],
      antonyms: ['stabilize', 'remain', 'persist'],
      exampleSentences: [
        { en: 'Vegetable prices tend to change according to the season and weather conditions.', ko: '채소 가격은 계절과 날씨 상태에 따라 변동하는 경향이 있다.' },
        { en: 'The patient\'s body temperature continued to rise and fall throughout the night.', ko: '환자의 체온이 밤새도록 계속 변동했다.' },
      ],
    }
  ),
  word('Forbid', '금지하다', 6, 'verb',
    ['허용하다', '승인하다', '허가하다', '촉진하다', '장려하다', '방임하다', '권장하다', '지지하다', '찬성하다', '조력하다'],
    tips({
      etymology: '접두사 for-(멀리, 반대)와 bid(명령하다)가 결합하여 \'하지 말라고 명령하다\'라는 의미에서 유래했습니다.',
      visual: '박물관 입구에 세워진 \'사진 촬영 금지\' 표지판과 X표시를 한 보안요원을 떠올려 보세요.',
      soundAlike: '포비드(Forbid) -> \'포\'기해, \'비\'밀로 \'드\'러내지 말고 금지야!',
      context: '부모님이 자녀에게 특정 행동을 못 하게 하거나, 법률적으로 행위를 막을 때 주로 사용됩니다.',
      synonymAntonym: 'prohibit, ban과 비슷하며, 반대로 허락을 뜻하는 allow, permit과는 반대되는 개념입니다.',
    }),
    {
      definition: 'To officially refuse to allow something or to state that a particular action is not permitted.',
      synonyms: ['prohibit', 'ban', 'outlaw'],
      antonyms: ['permit', 'allow', 'authorize'],
      exampleSentences: [
        { en: 'My doctor decided to strictly disallow me from eating fast food.', ko: '의사 선생님은 나에게 패스트푸드를 먹는 것을 엄격히 금지하기로 했다.' },
        { en: 'The law will prevent companies from dumping waste into the river.', ko: '법은 기업들이 강에 폐기물을 버리는 것을 금지할 것이다.' },
      ],
    }
  ),
  word('Forecast', '예측하다', 6, 'verb',
    ['무시하다', '오판하다', '회고하다', '망각하다', '방치하다', '실수하다', '기억하다', '검토하다', '후회하다', '간과하다'],
    tips({
      etymology: '접두사 fore(미리)와 cast(던지다)가 결합되어, 시선을 앞쪽으로 미리 던져본다는 의미에서 유래되었습니다.',
      visual: '기상 캐스터가 커다란 지도 앞에서 내일 비가 올지 해가 뜰지 손으로 가리키며 설명하는 장면을 상상하세요.',
      soundAlike: '포(Fore-앞을) 캐스트(Cast-던지다): 낚싯줄을 앞바다에 던지듯 미래의 상황에 생각을 던져보는 모습입니다.',
      context: '일기예보(weather forecast)뿐만 아니라 기업의 매출 전망이나 경제 지표를 분석할 때도 자주 사용되는 격식 있는 표현입니다.',
      synonymAntonym: 'predict와 유사하지만 데이터에 기반한 분석의 뉘앙스가 강하며, 반대로 이미 일어난 일을 돌아보는 hindsight와는 대조됩니다.',
    }),
    {
      definition: 'To calculate or predict a future event or condition, typically as a result of study and analysis of available data.',
      synonyms: ['predict', 'project', 'foretell'],
      antonyms: ['reminisce', 'recollect', 'retrospect'],
      exampleSentences: [
        { en: 'Experts are trying to predict the economic impact of the new policy.', ko: '전문가들은 새로운 정책의 경제적 영향을 예측하려 노력하고 있다.' },
        { en: 'The weather station expects it to snow heavily tomorrow.', ko: '기상청은 내일 눈이 많이 올 것으로 예측한다.' },
      ],
    }
  ),
  word('Formula', '공식', 6, 'noun',
    ['무질서', '직관', '임의', '흐름', '경험', '실험', '모호', '비공식', '우연', '혼란'],
    tips({
      etymology: '라틴어 forma(형태)에서 유래한 단어로, \'작은 형태\'나 \'정해진 규칙\'을 의미합니다.',
      visual: '칠판에 하얀 분필로 적힌 E=mc² 같은 명확한 수학 기호들을 떠올려 보세요.',
      soundAlike: '포뮬러 -> \'포\'(For) \'뮬러\'(물러)설 수 없이 딱 정해진 불변의 규칙.',
      context: '수학이나 과학의 계산식뿐만 아니라, \'성공의 비결\'이나 \'아기용 분유\'를 지칭할 때도 자주 쓰입니다.',
      synonymAntonym: '동의어 equation은 등식을, recipe는 조리법이나 비결을 뜻하며, 반의어 chaos는 정해진 규칙이 없는 혼돈을 뜻합니다.',
    }),
    {
      definition: 'A set of symbols expressing a mathematical rule or a fixed method for achieving a specific result.',
      synonyms: ['equation', 'recipe', 'method'],
      antonyms: ['randomness', 'chaos', 'disorder'],
      exampleSentences: [
        { en: 'The scientist spent years searching for a mathematical expression to solve the problem.', ko: '그 과학자는 문제를 해결하기 위한 수학적 공식을 찾는 데 수년을 보냈다.' },
        { en: 'There is no single fixed way to guarantee a happy marriage.', ko: '행복한 결혼 생활을 보장하는 단 하나의 정해진 공식은 없다.' },
      ],
    }
  ),
  word('Foster', '육성하다', 6, 'verb',
    ['방치하다', '억제하다', '좌절시키다', '방해하다', '훼손하다', '저해하다', '파괴하다', '무시하다', '중단하다', '거부하다'],
    tips({
      etymology: '고대 영어 fostrian(기르다, 먹이다)에서 유래하여 성장을 돕는 것을 뜻합니다.',
      visual: '어린 식물에 물을 주며 정성껏 키우는 정원사의 손길을 떠올려 보세요.',
      soundAlike: '포스터(Foster)를 벽에 붙여서 새로운 아이디어를 널리 알리고 키워나가는 모습.',
      context: '아이를 위탁 양육하거나, 특정 능력이나 긍정적인 분위기를 조성하고 발전시킬 때 주로 사용합니다.',
      synonymAntonym: 'nurture, promote와 비슷하게 무언가를 키우는 의미이며, neglect나 hinder와는 반대되는 개념입니다.',
    }),
    {
      definition: 'To encourage the development or growth of ideas, feelings, or skills, or to take care of a child as a guardian.',
      synonyms: ['nurture', 'promote', 'cultivate'],
      antonyms: ['neglect', 'hinder', 'suppress'],
      exampleSentences: [
        { en: 'The teacher tried to create an environment that would help the students\' curiosity grow.', ko: '선생님은 학생들의 호기심을 육성하는 데 도움이 되는 환경을 조성하려 노력했다.' },
        { en: 'The government has introduced new policies to support the growth of small businesses.', ko: '정부는 중소기업 육성을 지원하기 위한 새로운 정책들을 도입했다.' },
      ],
    }
  ),
  word('Foundation', '기초', 6, 'noun',
    ['상층', '정상', '꼭대기', '결과', '말단', '외부', '표면', '정점', '끝', '지붕'],
    tips({
      etymology: '라틴어 fundare(바닥을 만들다)에서 유래하여 건물의 가장 아래쪽을 의미합니다.',
      visual: '거대한 빌딩을 짓기 전 땅속에 단단하게 박아 넣은 콘크리트 지지대를 상상하세요.',
      soundAlike: '화장할 때 피부 바탕을 다지는 \'파운데이션\'과 발음이 같습니다.',
      context: '건축뿐만 아니라 학문이나 사회의 \'기틀\'을 말할 때도 자주 쓰입니다.',
      synonymAntonym: '동의어 base는 물리적 바닥을, 반의어 apex는 가장 높은 꼭대기를 뜻합니다.',
    }),
    {
      definition: 'The lowest load-bearing part of a building or the underlying principle on which something is established.',
      synonyms: ['base', 'basis', 'groundwork'],
      antonyms: ['top', 'peak', 'apex'],
      exampleSentences: [
        { en: 'Education is the foundation of society.', ko: '교육은 사회의 기초이다.' },
        { en: 'Workers laid the foundation for the new hospital.', ko: '노동자들이 새 병원의 기초를 놓았다.' },
      ],
    }
  ),
  word('Fraction', '분수', 6, 'noun',
    ['전체', '전량', '합계', '전부', '통째', '완전', '총합', '일체', '총량', '만점'],
    tips({
      etymology: '라틴어 fractus(부서진)에서 유래하여 전체에서 깨져 나온 조각을 뜻합니다.',
      visual: '동그란 피자 한 판에서 딱 한 조각만 떼어낸 모습을 떠올려 보세요.',
      soundAlike: '유리창이 깨지는 소리 \'프랙!\'과 비슷하게 무언가 부서진 파편을 연상하세요.',
      context: '수학의 분수라는 뜻 외에도 \'아주 적은 일부\'라는 의미로 일상에서 많이 쓰입니다.',
      synonymAntonym: '동의어 portion은 몫을 의미하며, 반의어 whole은 나누어지지 않은 전체를 뜻합니다.',
    }),
    {
      definition: 'A numerical representation of a part of a whole, or a very small piece of something larger.',
      synonyms: ['portion', 'part', 'segment'],
      antonyms: ['whole', 'total', 'entirety'],
      exampleSentences: [
        { en: 'Only a small fraction of the population attended the local meeting.', ko: '인구의 아주 적은 일부만이 지역 회의에 참석했습니다.' },
        { en: 'The teacher explained how to add a fraction to a whole number.', ko: '선생님은 정수에 분수를 더하는 방법을 설명해 주셨습니다.' },
      ],
    }
  ),
  word('Framework', '틀', 6, 'noun',
    ['무질서', '혼란', '무구조', '분산', '해체', '비체계', '산발', '무계획', '혼재', '난잡'],
    tips({
      etymology: 'frame(뼈대)와 work(작업)이 합쳐져 전체를 지탱하는 구조물을 뜻합니다.',
      visual: '건물을 올리기 전 세워둔 철골 뼈대나 안경의 테를 상상해 보세요.',
      soundAlike: '사진을 담는 \'프레임\'이 일하는(work) 방식, 즉 틀을 만든다고 기억하세요.',
      context: '법적 틀, 이론적 체계 등 추상적인 시스템을 설명할 때 필수적인 단어입니다.',
      synonymAntonym: '동의어 structure는 구조를, 반의어 chaos는 아무런 틀이 없는 혼돈을 뜻합니다.',
    }),
    {
      definition: 'A basic structure or system that supports or organizes something.',
      synonyms: ['structure', 'skeleton', 'scaffold'],
      antonyms: ['chaos', 'disorder', 'disorganization'],
      exampleSentences: [
        { en: 'We need a legal framework for this project.', ko: '이 프로젝트를 위한 법적 틀이 필요합니다.' },
        { en: 'The framework guides our decision-making process.', ko: '그 체계가 우리의 의사결정 과정을 안내합니다.' },
      ],
    }
  ),
  word('Franchise', '가맹점', 6, 'noun',
    ['독립점', '자영점', '직영', '본점', '비가맹', '독립', '자영', '단독', '본사', '개인샵'],
    tips({
      etymology: '고대 프랑스어 franchir(자유롭게 하다)에서 유래하여 특정 권리를 허가한다는 뜻입니다.',
      visual: '어느 동네를 가도 똑같은 간판과 메뉴를 가진 편의점이나 햄버거 가게를 떠올리세요.',
      soundAlike: '프랑스(France)의 자유로운 권리를 주는 \'프랜차이즈\'로 연상해 보세요.',
      context: '사업권뿐만 아니라 \'스타워즈\' 같은 영화 시리즈물 전체를 일컫기도 합니다.',
      synonymAntonym: '동의어 chain은 연쇄점을, 반의어 independent는 어디에도 속하지 않은 독립점을 뜻합니다.',
    }),
    {
      definition: 'A right granted by a company to an individual or group to market its products or services in a specific territory.',
      synonyms: ['chain', 'license', 'outlet'],
      antonyms: ['independent', 'monopoly', 'original'],
      exampleSentences: [
        { en: 'He owns a fast-food franchise in the city.', ko: '그는 도시에서 패스트푸드 가맹점을 운영하고 있다.' },
        { en: 'The franchise expanded nationwide last year.', ko: '그 가맹 사업은 작년에 전국적으로 확장되었다.' },
      ],
    }
  ),
  word('Friction', '마찰', 6, 'noun',
    ['윤활', '부드러움', '조화', '협력', '화합', '원활', '유동', '평화', '일치', '공조'],
    tips({
      etymology: '라틴어 fricare(문지르다)에서 유래하여 두 물체가 서로 맞닿아 비벼지는 현상을 의미합니다.',
      visual: '추운 겨울날 온기를 만들기 위해 양 손바닥을 빠르게 맞부딪혀 비비는 모습을 떠올려 보세요.',
      soundAlike: '프라이팬(fri-) 위에서 식재료가 지글거리며 바닥과 닿는 소리를 연상하며 발음을 연결해 보세요.',
      context: '과학 시간에는 물체의 운동을 방해하는 힘으로 쓰이지만, 일상에서는 사람들 간의 성격 차이나 의견 대립을 나타낼 때 자주 쓰입니다.',
      synonymAntonym: 'conflict는 의견의 충돌을, harmony는 걸림돌 없는 매끄러운 조화 상태를 나타냅니다.',
    }),
    {
      definition: 'The resistance encountered when one body or surface moves over another, or a state of disagreement between persons or groups.',
      synonyms: ['conflict', 'abrasion', 'discord'],
      antonyms: ['harmony', 'agreement', 'lubrication'],
      exampleSentences: [
        { en: 'The constant friction between the neighbors eventually led to a formal complaint.', ko: '이웃들 사이의 지속적인 마찰은 결국 공식적인 항의로 이어졌다.' },
        { en: 'Rough surfaces create more resistance and heat due to increased physical contact.', ko: '거친 표면은 증가된 물리적 접촉으로 인해 더 많은 마찰 저항과 열을 발생시킨다.' },
      ],
    }
  ),
  word('Frontier', '국경', 6, 'noun',
    ['내부', '수도', '안쪽', '중앙', '내륙', '핵심', '본토', '내지', '심장부', '도심'],
    tips({
      etymology: '라틴어 front(앞)에서 유래하여 국가나 지식의 가장 앞쪽 경계선을 의미합니다.',
      visual: '미개척지로 떠나기 전 마지막으로 마주하는 국경의 검문소를 상상하세요.',
      soundAlike: '맨 앞(front)에 서 있는 사람(ier)들이 지키는 \'국경\'으로 외우세요.',
      context: '단순한 국경선을 넘어 인류가 아직 가보지 못한 \'미개척 분야\'를 뜻하기도 합니다.',
      synonymAntonym: '동의어 border는 경계선을, 반의어 interior는 경계 안쪽의 내부를 뜻합니다.',
    }),
    {
      definition: 'The line or border separating two countries, or the extreme limit of settled land beyond which lies wilderness.',
      synonyms: ['border', 'boundary', 'edge'],
      antonyms: ['interior', 'center', 'core'],
      exampleSentences: [
        { en: 'Space is often called the final frontier.', ko: '우주는 종종 마지막 개척지라고 불린다.' },
        { en: 'They crossed the frontier at dawn.', ko: '그들은 새벽에 국경을 넘었다.' },
      ],
    }
  ),
  word('Fulfill', '완수하다', 6, 'verb',
    ['포기하다', '중단하다', '실패하다', '잊다', '소홀히하다', '방치하다', '거절하다', '무시하다', '어기다', '누락하다'],
    tips({
      etymology: 'full(가득한)과 fill(채우다)이 합쳐진 형태로, 비어 있는 요구사항이나 기대를 가득 채워 완료한다는 의미에서 유래되었습니다.',
      visual: '할 일 목록(To-do list)의 빈 칸에 체크 표시를 하며 모든 항목을 완벽하게 끝마치는 장면을 상상해 보세요.',
      soundAlike: '발음이 \'풀필\'과 유사하므로, 계획한 일을 \'풀(Full)\'로 \'필(Fill)\'요한 만큼 다 채웠다고 기억하면 쉽습니다.',
      context: '단순히 일을 끝내는 것뿐만 아니라 약속을 이행하거나, 예언이 실현되거나, 법적 요건을 충족할 때도 자주 사용됩니다.',
      synonymAntonym: '동의어 accomplish는 성취에 초점을 두고, 반의어 fail은 목표에 도달하지 못한 실패의 상태를 나타냅니다.',
    }),
    {
      definition: 'To carry out a duty, satisfy a requirement, or make a promise or prophecy come true.',
      synonyms: ['accomplish', 'execute', 'realize'],
      antonyms: ['fail', 'ignore', 'violate'],
      exampleSentences: [
        { en: 'The company must fulfill all the conditions specified in the contract.', ko: '그 회사는 계약서에 명시된 모든 조건을 이행해야 한다.' },
        { en: 'He worked hard to fulfill his potential as a professional musician.', ko: '그는 전문 음악가로서 자신의 잠재력을 발휘하기 위해 열심히 노력했다.' },
      ],
    }
  ),
  word('Fundamental', '근본적인', 6, 'adjective',
    ['부수적인', '표면적인', '사소한', '피상적인', '부가적인', '말단의', '외관상의', '지엽적인', '세부적인', '일시적인'],
    tips({
      etymology: '라틴어 \'fundamentum\'에서 유래하며, 건물의 기초나 토대를 의미하는 \'foundation\'과 뿌리가 같습니다.',
      visual: '화려한 건물의 외벽이 아니라, 땅속 깊이 박혀 전체 무게를 지탱하는 단단한 콘크리트 바닥을 떠올려 보세요.',
      soundAlike: '한국에서도 경제 용어로 \'펀더멘탈이 튼튼하다\'라고 표현하며, 국가나 기업의 기초 경제 여건을 의미할 때 사용합니다.',
      context: '민주주의의 원칙, 과학의 기초 법칙, 혹은 인간의 생존에 꼭 필요한 기본권을 묘사할 때 주로 쓰입니다.',
      synonymAntonym: '동의어 essential은 없어서는 안 될 필수성을 강조하고, 반의어 superficial은 겉으로만 드러나는 얕은 특성을 의미합니다.',
    }),
    {
      definition: 'Forming a necessary base or core; of central importance.',
      synonyms: ['basic', 'essential', 'primary'],
      antonyms: ['superficial', 'secondary', 'minor'],
      exampleSentences: [
        { en: 'Freedom of speech is a fundamental right in a democratic society.', ko: '표현의 자유는 민주주의 사회에서 근본적인 권리이다.' },
        { en: 'The two theories have a fundamental difference in their approach to the problem.', ko: '그 두 이론은 문제에 대한 접근 방식에 있어 근본적인 차이가 있다.' },
      ],
    }
  ),
  word('Generous', '관대한', 6, 'adjective',
    ['인색한', '아까워하는', '짠돌이의', '보수적인', '검소한', '탐욕스러운', '이기적인', '편협한', '야박한', '속좁은'],
    tips({
      etymology: '라틴어 generosus에서 유래하며, 원래 \'고귀한 가문에서 태어난\'이라는 뜻에서 \'고귀한 성품을 지닌\'이라는 의미로 발전했습니다.',
      visual: '양손 가득 선물을 들고 이웃에게 환하게 웃으며 아낌없이 나누어주는 사람의 모습을 상상해 보세요.',
      soundAlike: '제너러스 -> \'재산(재)을 다 써서\' 남을 도와줄 정도로 마음이 넉넉하고 후한 상태로 기억하세요.',
      context: '단순히 돈을 많이 주는 것뿐만 아니라 시간, 칭찬, 용서 등을 아낌없이 베풀 때도 폭넓게 사용됩니다.',
      synonymAntonym: '동의어인 liberal은 자유롭고 넉넉함을, 반의어인 stingy는 바늘로 찌를 듯이 인색함을 나타냅니다.',
    }),
    {
      definition: 'Willing to give money, help, or kindness freely and in large amounts.',
      synonyms: ['charitable', 'magnanimous', 'benevolent'],
      antonyms: ['stingy', 'miserly', 'selfish'],
      exampleSentences: [
        { en: 'He is known for being very kind and giving a large portion of his income to charity.', ko: '그는 매우 마음이 넓어서 수입의 큰 부분을 자선 단체에 기부하는 것으로 알려져 있다.' },
        { en: 'The host was extremely hospitable and provided a bountiful feast for all the guests.', ko: '주인은 매우 후덕했으며 모든 손님들에게 풍성한 만찬을 대접했다.' },
      ],
    }
  ),
  word('Genetic', '유전적인', 6, 'adjective',
    ['후천적인', '환경적인', '학습된', '인위적인', '외부의', '경험적인', '습득된', '비유전적인', '우연한', '사회적인'],
    tips({
      etymology: '그리스어 genesis(기원, 탄생)에서 유래하여 생명의 근원을 다루는 의미를 담고 있습니다.',
      visual: '부모님과 똑 닮은 눈매나 머리카락 색깔이 담긴 DNA 이중 나선 구조를 떠올려 보세요.',
      soundAlike: '제네틱 -> \'쟤네 틱(특징)\'이 부모님이랑 똑같네! 라고 연상해 보세요.',
      context: '질병의 원인이나 신체적 특징이 태어날 때부터 결정된 경우에 주로 쓰입니다.',
      synonymAntonym: '동의어 hereditary는 대대로 물려받음을, 반의어 acquired는 태어난 후 얻었음을 강조합니다.',
    }),
    {
      definition: 'Relating to the origin, development, or heritable characteristics of an organism.',
      synonyms: ['hereditary', 'ancestral', 'congenital'],
      antonyms: ['acquired', 'learned', 'environmental'],
      exampleSentences: [
        { en: 'Scientists are studying the biological code to find a cure for the inherited disorder.', ko: '과학자들은 그 유전 질환의 치료법을 찾기 위해 생물학적 코드를 연구하고 있다.' },
        { en: 'Eye color is a prime example of a trait determined by parental DNA.', ko: '눈 색깔은 부모의 DNA에 의해 결정되는 형질의 대표적인 예이다.' },
      ],
    }
  ),
];
