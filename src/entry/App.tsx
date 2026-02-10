import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { QuizService } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { allVocabData } from '../data/vocab';
import { AdIds } from '../shared/constants/adIds';

let MobileAds: (() => { initialize: () => Promise<unknown> }) | null = null;
let InterstitialAd: {
  createForAdRequest: (id: string) => {
    load: () => void;
    addAdEventListener: (event: string, cb: () => void) => () => void;
    show: () => Promise<void>;
  };
} | null = null;
try {
  const ads = require('react-native-google-mobile-ads');
  MobileAds = ads.default ?? ads.MobileAds;
  InterstitialAd = ads.InterstitialAd;
} catch {
  // Expo Go or no native module
}

const quizService = new QuizService(allVocabData);
const audioService = new AudioService();

function QuizScreenWrapper({ onSessionEnd }: { onSessionEnd: () => void }) {
  return (
    <QuizScreen
      quizService={quizService}
      audioService={audioService}
      onSessionEnd={onSessionEnd}
    />
  );
}

function ResultScreenWrapper({ onBackToQuiz }: { onBackToQuiz: () => void }) {
  return <ResultScreen quizService={quizService} onBackToQuiz={onBackToQuiz} />;
}

export default function App() {
  const [showResult, setShowResult] = useState(false);
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
      setShowResult(true);
      return;
    }
    const adUnitId =
      Platform.OS === 'android' ? AdIds.androidInterstitial : AdIds.iosInterstitial;
    const interstitial = InterstitialAd!.createForAdRequest(adUnitId);
    let timeoutId: ReturnType<typeof setTimeout>;
    const unloadLoaded = interstitial.addAdEventListener('loaded', () => {
      interstitial.show().catch(() => setShowResult(true));
    });
    const unloadClosed = interstitial.addAdEventListener('closed', () => {
      clearTimeout(timeoutId);
      unloadLoaded();
      unloadClosed();
      setShowResult(true);
    });
    interstitial.load();
    timeoutId = setTimeout(() => {
      unloadLoaded();
      unloadClosed();
      setShowResult(true);
    }, 5000);
  }, [adInitialized]);

  const onSessionEnd = useCallback(() => {
    showInterstitialThenResult();
  }, [showInterstitialThenResult]);

  const onBackToQuiz = useCallback(() => {
    setShowResult(false);
  }, []);

  if (!showResult) {
    return (
      <>
        <StatusBar style="auto" />
        <QuizScreenWrapper onSessionEnd={onSessionEnd} />
      </>
    );
  }
  return (
    <>
      <StatusBar style="auto" />
      <ResultScreenWrapper onBackToQuiz={onBackToQuiz} />
    </>
  );
}
