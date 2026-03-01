import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { QuizService } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { StorageService } from '../services/storageService';
import { allVocabData } from '../data/vocab';
import { AdIds } from '../shared/constants/adIds';
import { ErrorBoundary } from '../shared/components/ErrorBoundary';
import { MobileAds, InterstitialAd } from '../services/adService';

const quizService = new QuizService(allVocabData);
const audioService = new AudioService();

type Screen = 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [loading, setLoading] = useState(true);
  const [adInitialized, setAdInitialized] = useState(false);
  const wordEloTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Restore persisted ELO + wire persistence callback ──
  useEffect(() => {
    (async () => {
      const [userRatings, wordElo] = await Promise.all([
        StorageService.loadUserRatings(),
        StorageService.loadWordElo(),
      ]);
      quizService.restoreState(userRatings, wordElo);

      // Wire persistence: save user ratings immediately, word ELO debounced
      quizService.setOnRatingsChanged(() => {
        StorageService.saveUserRatings(quizService.getPersistedUserRatings());
        if (wordEloTimerRef.current) clearTimeout(wordEloTimerRef.current);
        wordEloTimerRef.current = setTimeout(() => {
          StorageService.saveWordElo(quizService.getPersistedWordElo());
        }, 5000);
      });

      setLoading(false);
    })();
  }, []);

  // ── Ad initialization ──
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

  const onPause = useCallback(() => {
    // Flush pending word ELO save immediately
    if (wordEloTimerRef.current) {
      clearTimeout(wordEloTimerRef.current);
      wordEloTimerRef.current = null;
    }
    StorageService.saveWordElo(quizService.getPersistedWordElo());
    quizService.endSession();
    showInterstitialThenResult();
  }, [showInterstitialThenResult]);

  const onResume = useCallback(() => {
    quizService.resetSession();
    setScreen('quiz');
  }, []);

  const onErrorReset = useCallback(() => {
    quizService.resetSession();
    setScreen('quiz');
  }, []);

  if (loading) {
    return (
      <View style={loadingStyles.container}>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text style={loadingStyles.text}>불러오는 중...</Text>
      </View>
    );
  }

  return (
    <ErrorBoundary onReset={onErrorReset}>
      <StatusBar style="auto" />
      {screen === 'quiz' && (
        <QuizScreen
          quizService={quizService}
          audioService={audioService}
          onSessionEnd={onPause}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          quizService={quizService}
          onResume={onResume}
        />
      )}
    </ErrorBoundary>
  );
}

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
});
