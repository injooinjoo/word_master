import type { User } from '@supabase/supabase-js';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthScreen } from '../features/auth/ui/AuthScreen';
import { HomeScreen } from '../features/home/ui/HomeScreen';
import { ProfileScreen, type CharacterProfileSaveResponse } from '../features/profile/ui/ProfileScreen';
import { PreviewDeck, type PreviewMode } from '../features/preview/ui/PreviewDeck';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { AdaptiveProgressService } from '../services/adaptiveProgressService';
import { QuizService } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { loadCharacterProfileForSession, saveCharacterProfileForSession } from '../services/profileService';
import { StorageService } from '../services/storageService';
import { getCurrentSession, onAuthStateChanged, signOutUser } from '../services/authService';
import { isSupabaseConfigured } from '../services/supabase';
import { allVocabData } from '../data/vocab';
import { ErrorBoundary } from '../shared/components/ErrorBoundary';
import { appFeatures } from '../shared/config/appConfig';
import { resolveSessionState } from '../shared/config/runtimeAvailability';
import { Colors, Spacing, Typography, withAlpha } from '../shared/constants/theme';
import { createDefaultCharacterProfile, type CharacterProfile } from '../shared/models/characterProfile';
import {
  ResponsiveContainer,
  ResponsiveTypographyProvider,
  ScreenCard,
  useResponsiveTypography,
  useSharedTextStyles,
} from '../shared/ui';

const adaptiveProgressService = new AdaptiveProgressService(allVocabData);
const quizService = new QuizService(allVocabData, adaptiveProgressService);
const audioService = new AudioService();

type Screen = 'home' | 'quiz' | 'result';
type ProfileOverlaySource = 'auth' | 'home' | 'quiz' | 'result';

function resolvePreviewMode(): PreviewMode | null {
  if (!__DEV__) return null;

  const webLocation =
    Platform.OS === 'web' ? (globalThis as { location?: { search?: string } }).location : undefined;
  if (webLocation?.search == null) return null;

  const mode = new URLSearchParams(webLocation.search).get('preview');
  const allowedModes: PreviewMode[] = [
    'foundations',
    'components',
    'home',
    'auth',
    'profile',
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

  useEffect(() => {
    if (!__DEV__) return;

    const webGlobal =
      globalThis as {
        location?: { hash?: string };
        document?: {
          head?: { appendChild: (node: unknown) => void };
          getElementById?: (id: string) => unknown;
          createElement?: (tag: string) => {
            id?: string;
            src?: string;
            async?: boolean;
          };
        };
      };

    if (!webGlobal.location?.hash?.includes('figmacapture=')) return;
    if (webGlobal.document?.getElementById?.('figma-capture-script')) return;

    const script = webGlobal.document?.createElement?.('script');
    if (!script || !webGlobal.document?.head) return;

    script.id = 'figma-capture-script';
    script.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
    script.async = true;
    webGlobal.document.head.appendChild(script);
  }, []);

  if (previewMode) {
    return (
      <SafeAreaProvider>
        <ResponsiveTypographyProvider>
          <StatusBar style="auto" />
          <PreviewDeck mode={previewMode} />
        </ResponsiveTypographyProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ResponsiveTypographyProvider>
        <MainApp />
      </ResponsiveTypographyProvider>
    </SafeAreaProvider>
  );
}

function MainApp() {
  const loadingStyles = useLoadingStyles();
  const sharedTextStyles = useSharedTextStyles();
  const [screen, setScreen] = useState<Screen>('home');
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [guestMode, setGuestMode] = useState(true);
  const [characterProfile, setCharacterProfile] = useState<CharacterProfile>(
    createDefaultCharacterProfile(),
  );
  const [profileOverlaySource, setProfileOverlaySource] = useState<ProfileOverlaySource | null>(null);

  const persistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const authUnsubscribeRef = useRef<(() => void) | null>(null);
  const profileRequestRef = useRef(0);
  const authConfigured = appFeatures.authEnabled && isSupabaseConfigured();
  const sessionState = resolveSessionState({
    authEnabled: authConfigured,
    guestMode,
    hasUser: user != null,
  });
  const isGuestSession = sessionState.isGuestSession;

  useEffect(() => {
    if (!authConfigured) {
      setGuestMode(true);
    }
  }, [authConfigured]);

  const refreshCharacterProfile = useCallback(async (nextUser: User | null) => {
    const requestId = profileRequestRef.current + 1;
    profileRequestRef.current = requestId;

    const loaded = await loadCharacterProfileForSession(
      nextUser
        ? {
            id: nextUser.id,
            email: nextUser.email ?? null,
          }
        : null,
    );

    if (profileRequestRef.current !== requestId) return;
    setCharacterProfile(loaded);
  }, []);

  // ── Restore persisted ELO + wire persistence callback + bootstrap auth ──
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        const [userRatings, wordElo, adaptiveState, pendingAttempts] = await Promise.all([
          StorageService.loadUserRatings(),
          StorageService.loadWordElo(),
          StorageService.loadAdaptiveProgressState(),
          StorageService.loadPendingAttempts(),
        ]);
        if (!mounted) return;

        adaptiveProgressService.restoreState({
          adaptiveState,
          pendingAttempts,
          legacyUserRatings: userRatings,
          legacyWordElo: wordElo,
        });

        adaptiveProgressService.setOnStateChanged(() => {
          if (persistTimerRef.current) {
            clearTimeout(persistTimerRef.current);
          }
          persistTimerRef.current = setTimeout(() => {
            persistTimerRef.current = null;
            StorageService.saveAdaptiveProgressState(adaptiveProgressService.getPersistedState());
            StorageService.savePendingAttempts(adaptiveProgressService.getPendingAttempts());
          }, 400);
        });

        let currentUser: User | null = null;

        if (authConfigured) {
          const session = await getCurrentSession();
          if (!mounted) return;
          currentUser = session?.user ?? null;
          setUser(currentUser);
          if (currentUser) {
            setGuestMode(false);
            try {
              await adaptiveProgressService.setSyncUser({
                id: currentUser.id,
                email: currentUser.email ?? null,
              });
            } catch (error) {
              console.warn('adaptive progress bootstrap sync failed:', error);
            }
          }

          authUnsubscribeRef.current = onAuthStateChanged((event, nextSession) => {
            if (!mounted) return;
            const nextUser = nextSession?.user ?? null;
            setUser(nextUser);
            if (nextUser) {
              setGuestMode(false);
              void adaptiveProgressService
                .setSyncUser({
                  id: nextUser.id,
                  email: nextUser.email ?? null,
                })
                .catch((error) => {
                  console.warn('adaptive progress sync failed:', error);
                });
              if (event === 'SIGNED_IN') {
                quizService.resetSession();
                setScreen('home');
              }
            }
            if (!nextSession) {
              setGuestMode(true);
              void adaptiveProgressService.setSyncUser(null);
              quizService.resetSession();
              setScreen('home');
            }
            void refreshCharacterProfile(nextUser);
          });
        }

        await refreshCharacterProfile(currentUser);
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
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
        persistTimerRef.current = null;
      }
      authUnsubscribeRef.current?.();
      authUnsubscribeRef.current = null;
      audioService.dispose();
    };
  }, [authConfigured, refreshCharacterProfile]);

  const onPause = useCallback(() => {
    if (persistTimerRef.current) {
      clearTimeout(persistTimerRef.current);
      persistTimerRef.current = null;
    }
    StorageService.saveAdaptiveProgressState(adaptiveProgressService.getPersistedState());
    StorageService.savePendingAttempts(adaptiveProgressService.getPendingAttempts());
    void adaptiveProgressService.flushPendingAttempts().catch((error) => {
      console.warn('pending attempts flush failed:', error);
    });
    quizService.endSession();
    setScreen('result');
  }, []);

  const onStartLearning = useCallback(() => {
    quizService.resetSession();
    setScreen('quiz');
  }, []);

  const onResume = useCallback(() => {
    quizService.resetSession();
    setScreen('quiz');
  }, []);

  const onContinueAsGuest = useCallback(() => {
    void adaptiveProgressService.setSyncUser(null);
    quizService.resetSession();
    setGuestMode(true);
    setUser(null);
    setScreen('home');
    void refreshCharacterProfile(null);
  }, [refreshCharacterProfile]);

  const onSignOut = useCallback(async () => {
    try {
      await signOutUser();
    } catch {
      // Keep UX unblocked; auth listener may still clear session.
    } finally {
      void adaptiveProgressService.setSyncUser(null);
      quizService.resetSession();
      setScreen('home');
      setGuestMode(true);
      setUser(null);
      void refreshCharacterProfile(null);
    }
  }, [refreshCharacterProfile]);

  const onSignInRequest = useCallback(() => {
    if (!authConfigured) return;
    setGuestMode(false);
  }, [authConfigured]);

  const onErrorReset = useCallback(() => {
    quizService.resetSession();
    setScreen('home');
    setProfileOverlaySource(null);
  }, []);

  const onOpenProfile = useCallback((source: ProfileOverlaySource) => {
    setProfileOverlaySource(source);
  }, []);

  const onCloseProfile = useCallback(() => {
    setProfileOverlaySource(null);
  }, []);

  const onSaveProfile = useCallback(
    async (nextProfile: CharacterProfile): Promise<CharacterProfileSaveResponse> => {
      const result = await saveCharacterProfileForSession(
        user
          ? {
              id: user.id,
              email: user.email ?? null,
            }
          : null,
        nextProfile,
      );
      setCharacterProfile(result.profile);

      return {
        profile: result.profile,
        notice: result.syncError
          ? '프로필은 기기에 저장됐고 온라인 동기화는 다음에 다시 시도합니다.'
          : user
            ? '프로필이 저장되고 계정과 동기화되었습니다.'
            : '게스트 프로필이 저장되었습니다.',
      };
    },
    [user],
  );

  const profileViewerLabel = user?.email?.split('@')[0] || '내 캐릭터';
  const profileStorageLabel = user
    ? '이 프로필은 이 기기와 계정에 함께 저장됩니다.'
    : '이 프로필은 현재 기기에 저장됩니다.';

  if (loading) {
    return (
      <View style={loadingStyles.safe}>
        <ResponsiveContainer>
          <View style={loadingStyles.container}>
            <View style={loadingStyles.glowTop} />
            <View style={loadingStyles.glowBottom} />
            <ScreenCard style={loadingStyles.card}>
              <Text style={sharedTextStyles.eyebrow}>Boot Sequence</Text>
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

  if (profileOverlaySource != null) {
    return (
      <>
        <StatusBar style="auto" />
        <ProfileScreen
          initialProfile={characterProfile}
          viewerLabel={profileViewerLabel}
          storageLabel={profileStorageLabel}
          onSave={onSaveProfile}
          onClose={onCloseProfile}
        />
      </>
    );
  }

  if (sessionState.shouldShowAuthScreen) {
    return (
      <>
        <StatusBar style="auto" />
        <AuthScreen
          characterProfile={characterProfile}
          authEnabled={authConfigured}
          authDisabledReason={
            authConfigured
              ? null
              : '지금은 학습 중심 모드로 바로 시작할 수 있습니다.'
          }
          allowGuestMode
          onContinueAsGuest={onContinueAsGuest}
          onOpenProfile={() => onOpenProfile('auth')}
        />
      </>
    );
  }

  return (
    <ErrorBoundary onReset={onErrorReset}>
      <StatusBar style="auto" />
      {screen === 'home' && (
        <HomeScreen
          characterProfile={characterProfile}
          quizService={quizService}
          viewerLabel={profileViewerLabel}
          storageLabel={profileStorageLabel}
          authEnabled={authConfigured}
          isGuestSession={isGuestSession}
          onStartLearning={onStartLearning}
          onOpenProfile={() => onOpenProfile('home')}
          onSignInRequest={authConfigured && isGuestSession ? onSignInRequest : undefined}
        />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          quizService={quizService}
          audioService={audioService}
          onOpenProfile={() => onOpenProfile('quiz')}
          onSessionEnd={onPause}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          characterProfile={characterProfile}
          quizService={quizService}
          user={user}
          authEnabled={authConfigured}
          scoreSyncEnabled={appFeatures.scoreSyncEnabled}
          isGuestSession={isGuestSession}
          onOpenProfile={() => onOpenProfile('result')}
          onResume={onResume}
          onSignInRequest={onSignInRequest}
          onSignOut={onSignOut}
        />
      )}
    </ErrorBoundary>
  );
}

function useLoadingStyles() {
  const typography = useResponsiveTypography();

  return React.useMemo(
    () =>
      StyleSheet.create({
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
          fontSize: typography.sizes.size23,
          fontWeight: Typography.weightExtraBold,
          color: Colors.textPrimary,
        },
        text: {
          marginTop: Spacing.xs,
          fontSize: typography.sizes.size13,
          color: Colors.textSecondary,
          textAlign: 'center',
          lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
          fontWeight: Typography.weightMedium,
        },
        error: {
          marginTop: Spacing.md,
          fontSize: typography.sizes.size13,
          color: Colors.wrong,
          textAlign: 'center',
          fontWeight: Typography.weightBold,
        },
      }),
    [typography],
  );
}
