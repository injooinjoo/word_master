# Word Master

Pro-level adaptive English vocabulary quiz app (React Native / Expo).  
Android & iOS only.

## 요구사항

- Node.js 18+
- npm or yarn
- Android: Android Studio / SDK (로컬 빌드 시)
- iOS: Xcode (Mac, 로컬 빌드 시)
- Expo Go 앱으로 바로 실행 가능 (광고는 개발 빌드에서만 표시)

## 실행 방법

```bash
npm install
npm start
```

- **Expo Go**: 터미널에 표시되는 QR 코드를 스캔하거나, `a`(Android) / `i`(iOS) 입력
- **로컬 빌드**: `npx expo run:android` 또는 `npx expo run:ios` (네이티브 폴더 생성 후 실행)

## 구조

- `src/app/App.tsx` — 앱 진입점, 퀴즈/결과 전환, AdMob 초기화·인터스티셜
- `src/data/models/vocab.ts` — 단어·학습팁 타입
- `src/data/sample_vocab_data.ts` — 샘플 단어 데이터
- `src/services/quizService.ts` — 퀴즈·ELO·학년·오답 추출
- `src/services/audioService.ts` — 발음 URL 재생 + TTS 폴백 (expo-av, expo-speech)
- `src/features/quiz/ui/` — 퀴즈 화면, 결과 화면
- `src/features/quiz/components/LearningTipCard.tsx` — 학습 팁 카드
- `src/shared/constants/` — 학년 매핑(gradeTable), 광고 테스트 ID(adIds)

## 광고

- 테스트용 AdMob ID 사용 중 (`src/shared/constants/adIds.ts`).
- **배포 전**: 본인 앱·광고 단위 ID로 교체하고, 네이티브 빌드 시 `app.json`에 AdMob 플러그인 설정이 필요할 수 있음.
- Expo Go에서는 네이티브 AdMob 모듈이 없어 광고가 표시되지 않으며, 앱은 정상 동작합니다.

## 기술 스택

- Expo (React Native)
- TypeScript
- expo-av, expo-speech (오디오·TTS)
- expo-image (캐시 이미지)
- react-native-google-mobile-ads (배너·인터스티셜, 네이티브 빌드 시)
- React Navigation 없이 단일 스택 상태로 퀴즈 ↔ 결과 전환
