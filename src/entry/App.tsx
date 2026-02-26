import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { RoundSizePickerScreen } from '../features/quiz/ui/RoundSizePickerScreen';
import { QuizService } from '../services/quizService';
import type { RoundSizeOption } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { allVocabData } from '../data/vocab';
import { AdIds } from '../shared/constants/adIds';
import { ErrorBoundary } from '../shared/components/ErrorBoundary';
import { MobileAds, InterstitialAd } from '../services/adService';

const quizService = new QuizService(allVocabData);
const audioService = new AudioService();

type Screen = 'picker' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('picker');
  const [adInitialized, setAdInitialized] = useState(false);

  useEffect(() => {
    if (MobileAds && (Platform.OS === 'android' || Platform.OS === 'ios')) {
      MobileAds()
        .initialize()
        .then(() => setAdInitialized(true))
        .catch(() => {});
    } else {
      setAdInitialized(true);
    }
  }, []);

  const showInterstitialThenResult = useCallback(() => {
    if (
      !adInitialized ||
      !InterstitialAd ||
      !quizService.shouldShowInterstitialBeforeResult
    ) {
      setScreen('result');
      return;
    }
    const adUnitId =
      Platform.OS === 'android' ? AdIds.androidInterstitial : AdIds.iosInterstitial;
    const interstitial = InterstitialAd.createForAdRequest(adUnitId);
    let timeoutId: ReturnType<typeof setTimeout>;
    const unloadLoaded = interstitial.addAdEventListener('loaded', () => {
      interstitial.show().catch(() => setScreen('result'));
    });
    const unloadClosed = interstitial.addAdEventListener('closed', () => {
      clearTimeout(timeoutId);
      unloadLoaded();
      unloadClosed();
      setScreen('result');
    });
    interstitial.load();
    timeoutId = setTimeout(() => {
      unloadLoaded();
      unloadClosed();
      setScreen('result');
    }, 5000);
  }, [adInitialized]);

  const onPickSize = useCallback((size: RoundSizeOption) => {
    quizService.setRoundSize(size);
    quizService.resetRound();
    setScreen('quiz');
  }, []);

  const onSessionEnd = useCallback(() => {
    showInterstitialThenResult();
  }, [showInterstitialThenResult]);

  const onBackToQuiz = useCallback(() => {
    quizService.resetRound();
    setScreen('quiz');
  }, []);

  const onBackToPicker = useCallback(() => {
    quizService.resetRound();
    setScreen('picker');
  }, []);

  const onErrorReset = useCallback(() => {
    quizService.resetRound();
    setScreen('picker');
  }, []);

  return (
    <ErrorBoundary onReset={onErrorReset}>
      <StatusBar style="auto" />
      {screen === 'picker' && (
        <RoundSizePickerScreen onPickSize={onPickSize} />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          quizService={quizService}
          audioService={audioService}
          onSessionEnd={onSessionEnd}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          quizService={quizService}
          onBackToQuiz={onBackToQuiz}
          onBackToPicker={onBackToPicker}
        />
      )}
    </ErrorBoundary>
  );
}
