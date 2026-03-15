import type { User } from '@supabase/supabase-js';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AuthScreen } from '../features/auth/ui/AuthScreen';
import { PreviewDeck, type PreviewMode } from '../features/preview/ui/PreviewDeck';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { QuizService } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { StorageService } from '../services/storageService';
import { getCurrentSession, onAuthStateChanged, signOutUser } from '../services/authService';
import { isSupabaseConfigured } from '../services/supabase';
import { allVocabData } from '../data/vocab';
import { AdIds } from '../shared/constants/adIds';
import { ErrorBoundary } from '../shared/components/ErrorBoundary';
import { Colors, Spacing, Typography, withAlpha } from '../shared/constants/theme';
import { ResponsiveContainer, ScreenCard, SharedStyles } from '../shared/ui';
import { MobileAds, InterstitialAd } from '../services/adService';

const quizService = new QuizService(allVocabData);
const audioService = new AudioService();

type Screen = 'quiz' | 'result';

function resolvePreviewMode(): PreviewMode | null {
  const webLocation =
    Platform.OS === 'web' ? (globalThis as { location?: { search?: string } }).location : undefined;
  if (webLocation?.search == null) return null;

  const mode = new URLSearchParams(webLocation.search).get('preview');
  const allowedModes: PreviewMode[] = [
    'foundations',
    'components',
    'auth',
    'quiz',
    'result',
    'system',
    'handoff',
  ];

  if (mode == null) return null;

  return allowedModes.includes(mode as PreviewMode) ? (mode as PreviewMode) : null;
}

export default function App() {
  const previewMode = resolvePreviewMode();

  if (previewMode) {
    return (
      <>
        <StatusBar style="auto" />
        <PreviewDeck mode={previewMode} />
      </>
    );
  }

  return <MainApp />;
}

function MainApp() {
  const [screen, setScreen] = useState<Screen>('quiz');
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [adSdkReady, setAdSdkReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const wordEloTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const authUnsubscribeRef = useRef<(() => void) | null>(null);

  // ── Restore persisted ELO + wire persistence callback + bootstrap auth ──
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        const [userRatings, wordElo] = await Promise.all([
          StorageService.loadUserRatings(),
          StorageService.loadWordElo(),
        ]);
        if (!mounted) return;

        quizService.restoreState(userRatings, wordElo);

        // Wire persistence: save user ratings immediately, word ELO debounced
        quizService.setOnRatingsChanged(() => {
          StorageService.saveUserRatings(quizService.getPersistedUserRatings());
          if (wordEloTimerRef.current) clearTimeout(wordEloTimerRef.current);
          wordEloTimerRef.current = setTimeout(() => {
            StorageService.saveWordElo(quizService.getPersistedWordElo());
          }, 5000);
        });

        if (isSupabaseConfigured()) {
          const session = await getCurrentSession();
          if (!mounted) return;
          setUser(session?.user ?? null);

          authUnsubscribeRef.current = onAuthStateChanged((nextSession) => {
            if (!mounted) return;
            setUser(nextSession?.user ?? null);
            if (!nextSession) {
              quizService.resetSession();
              setScreen('quiz');
            }
          });
        }
      } catch (error) {
        if (!mounted) return;
        const msg = error instanceof Error ? error.message : '초기화에 실패했습니다.';
        setInitError(msg);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    initialize();

    return () => {
      mounted = false;
      if (wordEloTimerRef.current) {
        clearTimeout(wordEloTimerRef.current);
        wordEloTimerRef.current = null;
      }
      authUnsubscribeRef.current?.();
      authUnsubscribeRef.current = null;
      audioService.dispose();
    };
  }, []);

  // ── Ad initialization ──
  useEffect(() => {
    if (MobileAds && (Platform.OS === 'android' || Platform.OS === 'ios')) {
      MobileAds()
        .initialize()
        .then(() => setAdSdkReady(true))
        .catch((error) => {
          console.warn('Ad SDK initialization failed. Ads are disabled.', error);
          setAdSdkReady(false);
        });
    } else {
      setAdSdkReady(false);
    }
  }, []);

  const showInterstitialThenResult = useCallback(() => {
    if (
      !adSdkReady ||
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
  }, [adSdkReady]);

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

  const onSignOut = useCallback(async () => {
    try {
      await signOutUser();
    } catch {
      // Keep UX unblocked; auth listener may still clear session.
    } finally {
      quizService.resetSession();
      setScreen('quiz');
      setUser(null);
    }
  }, []);

  const onErrorReset = useCallback(() => {
    quizService.resetSession();
    setScreen('quiz');
  }, []);

  if (loading) {
    return (
      <View style={loadingStyles.safe}>
        <ResponsiveContainer>
          <View style={loadingStyles.container}>
            <View style={loadingStyles.glowTop} />
            <View style={loadingStyles.glowBottom} />
            <ScreenCard style={loadingStyles.card}>
              <Text style={SharedStyles.eyebrow}>Boot Sequence</Text>
              <View style={loadingStyles.loaderWrap}>
                <ActivityIndicator size="large" color={Colors.primary} />
              </View>
              <Text style={loadingStyles.title}>불러오는 중...</Text>
              <Text style={loadingStyles.text}>학습 데이터를 준비하고 있어요.</Text>
              {!!initError && <Text style={loadingStyles.error}>{initError}</Text>}
            </ScreenCard>
          </View>
        </ResponsiveContainer>
      </View>
    );
  }

  if (!isSupabaseConfigured()) {
    return (
      <View style={loadingStyles.safe}>
        <ResponsiveContainer>
          <View style={loadingStyles.container}>
            <View style={loadingStyles.glowTop} />
            <View style={loadingStyles.glowBottom} />
            <ScreenCard style={loadingStyles.card}>
              <Text style={SharedStyles.eyebrow}>Configuration Required</Text>
              <Text style={loadingStyles.title}>Supabase 설정 필요</Text>
              <Text style={loadingStyles.text}>
                `EXPO_PUBLIC_SUPABASE_URL`과 `EXPO_PUBLIC_SUPABASE_ANON_KEY`를 설정한 뒤 앱을 다시 실행해주세요.
              </Text>
            </ScreenCard>
          </View>
        </ResponsiveContainer>
      </View>
    );
  }

  if (!user) {
    return (
      <>
        <StatusBar style="auto" />
        <AuthScreen />
      </>
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
          user={user}
          adsEnabled={adSdkReady}
          onResume={onResume}
          onSignOut={onSignOut}
        />
      )}
    </ErrorBoundary>
  );
}

const loadingStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    overflow: 'hidden',
  },
  glowTop: {
    position: 'absolute',
    top: 72,
    right: -52,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: withAlpha(Colors.primary, '12'),
  },
  glowBottom: {
    position: 'absolute',
    left: -48,
    bottom: 70,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: withAlpha(Colors.warning, '10'),
  },
  card: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  loaderWrap: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  title: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  text: {
    marginTop: Spacing.xs,
    fontSize: Typography.size13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
  },
  error: {
    marginTop: Spacing.md,
    fontSize: Typography.size13,
    color: Colors.wrong,
    textAlign: 'center',
    fontWeight: Typography.weightBold,
  },
});
