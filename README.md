# Word Master

Adaptive English vocabulary quiz app built with React Native + Expo.

## 주요 기능

- 적응형 퀴즈(ELO 기반 난이도 조절)
- 라운드 결과 및 유형별 성취도
- 오프라인 학습 기록 저장
- iPhone / iPad 공용 레이아웃

## 현재 iOS 릴리즈 정책

- App Store 제출 빌드는 `게스트 학습 기본`입니다.
- 로그인은 선택이며, 결과 화면에서 원할 때 계정으로 전환할 수 있습니다.
- App Store 제출 빌드는 `광고 없음`입니다.
- 점수 동기화와 리더보드는 개발용 빌드에서만 활성화합니다.
- 앱 내부에서 지원/개인정보 링크를 바로 열 수 있습니다.

## 요구사항

- Node.js 18+
- npm
- Android Studio / Xcode (로컬 네이티브 빌드 시)

## Supabase 새 프로젝트 설정

1. Supabase에서 새 프로젝트 생성
2. Authentication > Providers에서 Email provider 활성화
3. SQL Editor에서 `docs/supabase_schema.sql` 실행
4. 프로젝트 URL/Anon Key 준비

## 환경 변수

`.env.example`를 참고해 루트에 `.env.local` 파일을 생성하세요.

```bash
EXPO_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

- Supabase 값은 인증이 켜진 모든 빌드에서 사용됩니다.
- `preview`, `production` EAS 빌드는 선택 로그인만 유지하고 점수 동기화/광고는 비활성화합니다.
- `preview`, `production` 릴리즈 검증에도 Supabase URL/Anon Key가 필요합니다.

## 실행

```bash
npm install
npm start
npm test
```

- Expo Go: QR 스캔 또는 `a` / `i`
- 외부 네트워크나 모바일 실기기 테스트는 `npm run mobile`
- 로컬 빌드: `npx expo run:android`, `npx expo run:ios`
- 릴리즈 검증: `npm run check:release-config`
- IPA 검사: `npm run check:ipa -- /absolute/path/to/build.ipa`

## iOS 빌드 주의사항

- `development` 빌드는 dev client 입니다. 메트로 없이 앱 아이콘만 열면 `No script URL provided`가 뜹니다.
- dev client 는 항상 `npm start` 또는 `expo start` 를 켠 상태에서 실행하세요.
- 실기기에서 메트로 없이 바로 열 수 있는 내부 배포본이 필요하면 `preview` 프로필을 사용하세요.
- `development` 빌드는 앱 이름이 `Word Master Dev`, 번들 ID가 `com.beyond.wordmaster.dev` 로 분리됩니다.

## 핵심 구조

- `src/entry/App.tsx` — 앱 루트, 릴리즈 플래그, 퀴즈/결과 전환
- `src/features/auth/ui/AuthScreen.tsx` — 로그인/회원가입 UI
- `src/services/supabase.ts` — Supabase 클라이언트 설정
- `src/services/authService.ts` — 인증 세션/로그인/로그아웃
- `src/services/scoreService.ts` — 점수 저장 및 리더보드 조회
- `src/services/adaptiveProgressService.ts` — 답안 등급 판정, 유형별 실력, 단어별 기억 상태, 오프라인 동기화 큐
- `src/services/quizService.ts` — 퀴즈 생성, 세션 큐 관리, 문제 선택 우선순위
- `src/features/quiz/ui/QuizScreen.tsx` — 퀴즈 화면
- `src/features/quiz/ui/ResultScreen.tsx` — 결과 + 릴리즈 모드별 표시 분기
- `src/shared/config/appConfig.ts` — Expo `extra` 기반 런타임 플래그
- `src/shared/constants/externalLinks.ts` — 지원/개인정보/저장소 링크
- `store.config.json` — App Store 메타데이터 소스

## 인증 / 백엔드

- Supabase를 연결하면 모든 인증 활성 빌드에서 이메일 로그인과 프로필/학습 기록 연동을 테스트할 수 있습니다.
- 점수 보드와 리더보드는 개발용 빌드에서만 활성화합니다.
- 릴리즈 빌드에서도 선택 로그인을 지원하므로 Supabase 값이 앱 설정에 포함되어야 합니다.

## iOS TestFlight 체크리스트

1. 릴리즈 설정 정합성 검사

```bash
npm run check:release-config
```

2. Preview 빌드 생성

```bash
eas build -p ios --profile preview --clear-cache
```

3. TestFlight 설치 후 콜드 스타트 크래시 여부 확인
4. 10문제 라운드 완료 후 결과 화면의 로그인 CTA, 다시 풀기, 앱 재실행을 점검
5. iPhone / iPad 제출용 스크린샷을 캡처
6. Production 빌드 생성

```bash
eas build -p ios --profile production --clear-cache
```

7. 생성된 IPA 검사

```bash
npm run check:ipa -- /absolute/path/to/build.ipa
```

## App Store 메타데이터

- `store.config.json` 을 수정한 뒤 `eas metadata:push` 로 App Store 메타데이터를 업로드합니다.
- GitHub Pages 홈: `https://www.injookim.com/word_master/`
- 지원 문서 소스: `docs/support.md`
- 개인정보처리방침 소스: `docs/privacy-policy.md`
- 리뷰 노트 초안: `docs/app-store/review-notes.md`
- App Privacy 체크 메모: `docs/app-store/app-privacy.md`
