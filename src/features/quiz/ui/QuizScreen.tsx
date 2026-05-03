import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Vibration,
  SafeAreaView,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { QuizQuestion, AnswerContext } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizService } from '../../../services/quizService';
import type { AudioService } from '../../../services/audioService';
import { StorageService, type AudioPreferences } from '../../../services/storageService';
import { getRenderableLearningTipEntries } from '../../../data/models/vocab';
import type { LearningTipEntry } from '../../../data/models/vocab';
import { GradeTable } from '../../../shared/constants/gradeTable';
import {
  Colors,
  QuizTypeColors,
  Radius,
  Spacing,
  Typography,
  difficultyColor,
  Timing,
  withAlpha,
} from '../../../shared/constants/theme';
import { TimerBar } from '../components/TimerBar';
import { NextButton } from '../components/NextButton';
import { WrongAnswerInsightSheet } from '../components/WrongAnswerInsightSheet';
import type { AnsweredOutcome } from '../components/WrongAnswerInsightSheet';
import {
  Badge,
  Button,
  Chip,
  ChoiceCard,
  ResponsiveContainer,
  ScreenCard,
  useResponsiveTypography,
} from '../../../shared/ui';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const STAGE_GAP_TOTAL = Spacing.md * 2;
const STAGE_VERTICAL_PADDING = Spacing.md * 2;
const PROGRESS_CARD_ESTIMATE = 156;

interface ChoiceLayoutMetrics {
  horizontalPadding: number;
  topPadding: number;
  bottomPadding: number;
  gap: number;
  bottomSectionHeight: number;
  cellWidth: number;
  cardHeight: number;
  cardRadius: number;
  cardPaddingVertical: number;
  cardPaddingHorizontal: number;
  cardShadowRadius: number;
  choiceFontSize: number;
  choiceLineHeight: number;
  wordFontSize: number;
  longPromptFontSize: number;
}

function getChoiceLayoutMetrics(width: number, height: number): ChoiceLayoutMetrics {
  const shortest = Math.min(width, height);
  const horizontalPadding = clamp(width * 0.05, 12, 32);
  const topPadding = clamp(height * 0.015, 8, 18);
  const bottomPadding = clamp(height * 0.025, 10, 22);
  const gap = clamp(shortest * 0.028, 8, 16);
  const bottomSectionHeight = clamp(height * 0.3, 210, 360);
  const cellWidth = Math.max(120, (width - horizontalPadding * 2 - gap) / 2);
  const availableGridHeight = bottomSectionHeight - topPadding - bottomPadding - gap;
  const cardHeight = clamp(availableGridHeight / 2, 86, 180);
  const cardRadius = clamp(shortest * 0.04, 14, 24);
  const cardPaddingVertical = clamp(cardHeight * 0.12, 8, 18);
  const cardPaddingHorizontal = clamp(cellWidth * 0.08, 8, 16);
  const cardShadowRadius = clamp(gap * 0.6, 3, 8);
  const choiceFontSize = clamp(Math.min(cellWidth * 0.13, cardHeight * 0.22), 12, 22);
  const choiceLineHeight = Math.round(choiceFontSize * 1.3);
  const wordFontSize = clamp(shortest * 0.12, 28, 56);
  const longPromptFontSize = clamp(shortest * 0.07, 20, 36);

  return {
    horizontalPadding,
    topPadding,
    bottomPadding,
    gap,
    bottomSectionHeight,
    cellWidth,
    cardHeight,
    cardRadius,
    cardPaddingVertical,
    cardPaddingHorizontal,
    cardShadowRadius,
    choiceFontSize,
    choiceLineHeight,
    wordFontSize,
    longPromptFontSize,
  };
}

/** Word difficulty label from word ELO */
function difficultyLabel(wordElo: number): string {
  if (wordElo <= 400) return '쉬움';
  if (wordElo <= 800) return '보통';
  if (wordElo <= 1200) return '어려움';
  if (wordElo <= 1600) return '매우 어려움';
  return '극한';
}

/** Calculate timer duration (ms) from word ELO. Range: 6 000 – 12 000 ms */
function timerDurationForElo(wordElo: number): number {
  const clamped = Math.max(0, Math.min(wordElo, 2000));
  return Math.round(6000 + (clamped / 2000) * 6000);
}

/** Choice number labels */
const CHOICE_LABELS = ['A', 'B', 'C', 'D'];

function autoplayWordForQuestion(question: QuizQuestion): string | null {
  return question.quizType === 'k2e' ? null : question.vocabItem.word;
}

function replayWordForQuestion(question: QuizQuestion, answered: boolean): string | null {
  if (question.quizType === 'k2e') {
    return answered ? question.correctAnswer : null;
  }
  return question.vocabItem.word;
}

const DEFAULT_AUDIO_PREFERENCES: AudioPreferences = {
  autoplayEnabled: Platform.OS !== 'web',
};

interface QuizScreenProps {
  quizService: QuizService;
  audioService: AudioService;
  onOpenProfile: () => void;
  onSessionEnd: () => void;
}

export function QuizScreen({
  quizService,
  audioService,
  onOpenProfile,
  onSessionEnd,
}: QuizScreenProps) {
  const typography = useResponsiveTypography();
  const styles = useQuizStyles();
  const safeAreaInsets = useSafeAreaInsets();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const stageMaxWidth = windowWidth >= 1280 ? 760 : windowWidth >= 1024 ? 700 : 560;
  const stageMaxHeight = 940;
  const layoutWidth = Math.min(windowWidth, stageMaxWidth);
  const availableStageHeight = Math.max(
    520,
    windowHeight -
      safeAreaInsets.top -
      safeAreaInsets.bottom -
      STAGE_VERTICAL_PADDING -
      STAGE_GAP_TOTAL,
  );
  const layoutHeight = Math.min(availableStageHeight, stageMaxHeight);
  const layout = useMemo(
    () => getChoiceLayoutMetrics(layoutWidth, layoutHeight),
    [layoutWidth, layoutHeight],
  );
  const [progressCardHeight, setProgressCardHeight] = useState(PROGRESS_CARD_ESTIMATE);
  const [current, setCurrent] = useState<QuizQuestion | null>(null);
  const [questionNum, setQuestionNum] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [audioPreferences, setAudioPreferences] = useState<AudioPreferences>(DEFAULT_AUDIO_PREFERENCES);
  const [audioReady, setAudioReady] = useState(false);

  // --- feedback state ---
  const [answered, setAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timedOut, setTimedOut] = useState(false);

  // --- hint state ---
  const [hintEntry, setHintEntry] = useState<LearningTipEntry | null>(null);
  const [showHint, setShowHint] = useState(false);
  const hintOpacity = useRef(new Animated.Value(0)).current;

  // --- timer state ---
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(8000);
  const [timerKey, setTimerKey] = useState(0);

  // Animated value for the feedback banner
  const feedbackOpacity = useRef(new Animated.Value(0)).current;

  // Ref to prevent stale closures in the timer callback
  const answeredRef = useRef(false);

  // Ref for the hint timeout so we can clear it
  const hintTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Ref to record when each question was presented (for elapsed time calc)
  const startTimeRef = useRef<number>(Date.now());

  // --- ELO delta animation state ---
  const [eloDelta, setEloDelta] = useState<number | null>(null);
  const eloDeltaAnim = useRef(new Animated.Value(0)).current;
  const prevRatingRef = useRef<number>(0);

  // --- Word ELO delta animation state ---
  const [wordEloDelta, setWordEloDelta] = useState<number | null>(null);
  const wordEloDeltaAnim = useRef(new Animated.Value(0)).current;

  // --- Remaining time animation state ---
  const [remainingSec, setRemainingSec] = useState<number | null>(null);
  const timeBonusAnim = useRef(new Animated.Value(0)).current;

  const resetFeedback = useCallback(() => {
    setAnswered(false);
    answeredRef.current = false;
    setSelectedChoice(null);
    setIsCorrect(null);
    setTimedOut(false);
    setShowHint(false);
    hintOpacity.setValue(0);
    feedbackOpacity.setValue(0);
    setEloDelta(null);
    eloDeltaAnim.setValue(0);
    setWordEloDelta(null);
    wordEloDeltaAnim.setValue(0);
    setRemainingSec(null);
    timeBonusAnim.setValue(0);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
  }, [feedbackOpacity, hintOpacity, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim]);

  const loadNext = useCallback(() => {
    void audioService.stop();
    const q = quizService.nextQuestion();
    if (q == null) {
      quizService.endSession();
      onSessionEnd();
      return;
    }
    resetFeedback();
    setQuestionNum(quizService.roundTotal + 1);
    setInitialized(true);

    const entries = getRenderableLearningTipEntries(q.vocabItem.learningTips);
    const entry = entries.length > 0 ? entries[Math.floor(Math.random() * entries.length)] : null;
    setHintEntry(entry);

    const duration = timerDurationForElo(q.wordElo);
    setTimerDuration(duration);
    setTimerKey((k) => k + 1);

    setCurrent(q);

    startTimeRef.current = Date.now();

    if (entry) {
      const hintDelayMs = Math.round(duration * (1 - Timing.hintThreshold));
      hintTimeoutRef.current = setTimeout(() => {
        if (!answeredRef.current) {
          setShowHint(true);
          Animated.timing(hintOpacity, {
            toValue: 1,
            duration: Timing.animationMedium,
            useNativeDriver: true,
          }).start();
        }
      }, hintDelayMs);
    }

    requestAnimationFrame(() => setTimerRunning(true));
  }, [audioService, quizService, onSessionEnd, resetFeedback, hintOpacity]);

  useEffect(() => {
    let mounted = true;

    const loadAudioPreferences = async () => {
      const persisted = await StorageService.loadAudioPreferences();
      if (!mounted) return;
      setAudioPreferences(
        Platform.OS === 'web' ? DEFAULT_AUDIO_PREFERENCES : persisted ?? DEFAULT_AUDIO_PREFERENCES,
      );
      setAudioReady(true);
    };

    loadAudioPreferences().catch(() => {
      if (!mounted) return;
      setAudioPreferences(DEFAULT_AUDIO_PREFERENCES);
      setAudioReady(true);
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!audioReady) return;
    loadNext();
  }, [audioReady, loadNext]);

  useEffect(() => {
    return () => {
      void audioService.stop();
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = null;
      }
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
        feedbackTimeoutRef.current = null;
      }
    };
  }, [audioService]);

  useEffect(() => {
    if (!audioReady || !current || answeredRef.current || !audioPreferences.autoplayEnabled) return;

    const wordToSpeak = autoplayWordForQuestion(current);
    if (!wordToSpeak) return;

    const timeoutId = setTimeout(() => {
      void audioService.speakWord(wordToSpeak, {
        reason: 'autoplay',
        interrupt: true,
        dedupeKey: `question:${current.vocabItem.id}:${current.quizType}`,
      });
    }, 280);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [audioPreferences.autoplayEnabled, audioReady, audioService, current]);

  const onToggleAutoplay = useCallback(() => {
    setAudioPreferences((currentPreferences) => {
      const nextPreferences = {
        autoplayEnabled: !currentPreferences.autoplayEnabled,
      };
      if (!nextPreferences.autoplayEnabled) {
        void audioService.stop();
      }
      void StorageService.saveAudioPreferences(nextPreferences);
      return nextPreferences;
    });
  }, [audioService]);

  const onReplayWord = useCallback(() => {
    if (!current) return;
    const wordToSpeak = replayWordForQuestion(current, answered);
    if (!wordToSpeak) return;

    void audioService.speakWord(wordToSpeak, {
      reason: 'manual',
      interrupt: true,
      dedupeKey: `manual:${current.vocabItem.id}:${current.quizType}:${answered ? 'feedback' : 'prompt'}`,
      dedupeWindowMs: 0,
    });
  }, [answered, audioService, current]);

  // --- Time's up handler ---
  const onTimeUp = useCallback(() => {
    if (answeredRef.current) return;
    void audioService.stop();

    const q = current;
    if (!q) return;

    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }

    const ratingBefore = quizService.getRating(q.quizType);
    prevRatingRef.current = ratingBefore;
    const wordEloBefore = quizService.getWordElo(q.vocabItem.id, q.quizType);

    const answerCtx: AnswerContext = {
      correct: false,
      wordId: q.vocabItem.id,
      quizType: q.quizType,
      elapsedMs: timerDuration,
      totalMs: timerDuration,
      selectedChoice: null,
      correctAnswer: q.correctAnswer,
      distractorRanking: q.distractorRanking,
      hintShown: showHint,
      sourceBucket: q.sourceBucket,
      questionOrdinal: questionNum,
    };
    quizService.submitAnswer(answerCtx, {
      word: q.vocabItem.word,
      meaning: q.vocabItem.meaning,
      prompt: q.prompt,
      correctAnswer: q.correctAnswer,
      userAnswer: null,
      quizType: q.quizType,
    });

    const ratingAfter = quizService.getRating(q.quizType);
    const delta = ratingAfter - ratingBefore;
    setEloDelta(delta);
    eloDeltaAnim.setValue(0);

    const wordEloAfter = quizService.getWordElo(q.vocabItem.id, q.quizType);
    const wDelta = wordEloAfter - wordEloBefore;
    setWordEloDelta(wDelta);
    wordEloDeltaAnim.setValue(0);

    Animated.parallel([
      Animated.timing(eloDeltaAnim, {
        toValue: 1,
        duration: Timing.animationSlow,
        useNativeDriver: true,
      }),
      Animated.timing(wordEloDeltaAnim, {
        toValue: 1,
        duration: Timing.animationSlow,
        useNativeDriver: true,
      }),
    ]).start();

    setRemainingSec(0);

    setAnswered(true);
    answeredRef.current = true;
    setTimerRunning(false);
    setTimedOut(true);
    setSelectedChoice(null);
    setIsCorrect(false);

    if (Platform.OS !== 'web') {
      Vibration.vibrate([0, 80, 60, 80]);
    }

    Animated.timing(feedbackOpacity, {
      toValue: 1,
      duration: Timing.animationFast,
      useNativeDriver: true,
    }).start();

    // 자동 진행 제거 — NextButton / Enter / Space 로 onAdvance() 호출
  }, [audioService, current, quizService, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim, questionNum, showHint]);

  // --- Choice selection handler ---
  const onChoiceSelected = useCallback(
    (choice: string) => {
      const q = current;
      if (!q || answeredRef.current) return;
      void audioService.stop();

      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = null;
      }

      const correct = choice === q.correctAnswer;
      const elapsedMs = Date.now() - startTimeRef.current;

      const ratingBefore = quizService.getRating(q.quizType);
      prevRatingRef.current = ratingBefore;
      const wordEloBefore = quizService.getWordElo(q.vocabItem.id, q.quizType);

      const answerCtx: AnswerContext = {
        correct,
        wordId: q.vocabItem.id,
        quizType: q.quizType,
        elapsedMs,
        totalMs: timerDuration,
        selectedChoice: choice,
        correctAnswer: q.correctAnswer,
        distractorRanking: q.distractorRanking,
        hintShown: showHint,
        sourceBucket: q.sourceBucket,
        questionOrdinal: questionNum,
        distractorRank: correct ? undefined : q.distractorRanking.indexOf(choice),
      };
      quizService.submitAnswer(answerCtx, {
        word: q.vocabItem.word,
        meaning: q.vocabItem.meaning,
        prompt: q.prompt,
        correctAnswer: q.correctAnswer,
        userAnswer: choice,
        quizType: q.quizType,
      });

      const ratingAfter = quizService.getRating(q.quizType);
      const delta = ratingAfter - ratingBefore;
      setEloDelta(delta);
      eloDeltaAnim.setValue(0);

      const wordEloAfter = quizService.getWordElo(q.vocabItem.id, q.quizType);
      const wDelta = wordEloAfter - wordEloBefore;
      setWordEloDelta(wDelta);
      wordEloDeltaAnim.setValue(0);

      Animated.parallel([
        Animated.timing(eloDeltaAnim, {
          toValue: 1,
          duration: Timing.animationSlow,
          useNativeDriver: true,
        }),
        Animated.timing(wordEloDeltaAnim, {
          toValue: 1,
          duration: Timing.animationSlow,
          useNativeDriver: true,
        }),
      ]).start();

      const remaining = Math.max(0, (timerDuration - elapsedMs) / 1000);
      setRemainingSec(remaining);
      timeBonusAnim.setValue(0);
      Animated.timing(timeBonusAnim, {
        toValue: 1,
        duration: Timing.animationSlow,
        useNativeDriver: true,
      }).start();

      setAnswered(true);
      answeredRef.current = true;
      setTimerRunning(false);
      setSelectedChoice(choice);
      setIsCorrect(correct);

      if (Platform.OS !== 'web') {
        Vibration.vibrate(correct ? 50 : [0, 80, 60, 80]);
      }

      Animated.timing(feedbackOpacity, {
        toValue: 1,
        duration: Timing.animationFast,
        useNativeDriver: true,
      }).start();

      // 자동 진행 제거 — NextButton / Enter / Space 로 onAdvance() 호출
    },
    [audioService, current, quizService, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim, questionNum, showHint],
  );

  const getChoiceState = useCallback(
    (choice: string) => {
      if (!answered) return 'default';
      if (choice === current?.correctAnswer) {
        return 'correct';
      }
      if (choice === selectedChoice && !isCorrect) {
        return 'wrong';
      }
      return 'dimmed';
    },
    [answered, current, selectedChoice, isCorrect],
  );

  const onAdvance = useCallback(() => {
    if (!answeredRef.current) return;
    loadNext();
  }, [loadNext]);

  // Web keyboard shortcuts: 1-4 select choice, R replay, Enter/Space advance.
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const win = (globalThis as { window?: any }).window;
    if (!win || typeof win.addEventListener !== 'function') return;
    const onKeyDown = (e: any) => {
      const tag = e?.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const key: string = e?.key ?? '';
      if (!answeredRef.current) {
        if (key >= '1' && key <= '4') {
          const choice = current?.choices[Number(key) - 1];
          if (choice) {
            e.preventDefault?.();
            onChoiceSelected(choice);
          }
        } else if (key.toLowerCase() === 'r') {
          e.preventDefault?.();
          onReplayWord();
        }
      } else if (key === 'Enter' || key === ' ') {
        e.preventDefault?.();
        onAdvance();
      }
    };
    win.addEventListener('keydown', onKeyDown);
    return () => win.removeEventListener('keydown', onKeyDown);
  }, [current, onChoiceSelected, onAdvance, onReplayWord]);

  const onPause = useCallback(() => {
    void audioService.stop();
    setTimerRunning(false);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = null;
    }
    onSessionEnd();
  }, [audioService, onSessionEnd]);

  if (current == null) {
    if (!initialized) {
      return (
        <SafeAreaView style={styles.safe}>
          <ResponsiveContainer>
            <View style={styles.centered}>
              <ScreenCard style={styles.stateCard}>
                <Text style={styles.stateEyebrow}>Quiz State</Text>
                <Text style={styles.loadingText}>문제 준비 중...</Text>
                <Text style={styles.stateText}>다음 문제와 힌트 데이터를 정리하고 있습니다.</Text>
              </ScreenCard>
            </View>
          </ResponsiveContainer>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.safe}>
        <ResponsiveContainer>
          <View style={styles.centered}>
            <ScreenCard style={styles.stateCard}>
              <Text style={styles.stateEyebrow}>Session Complete</Text>
              <Text style={styles.loadingText}>세션이 종료되었습니다</Text>
              <Text style={styles.stateText}>현재 라운드 결과를 확인하고 다음 학습을 준비하세요.</Text>
              <Button label="결과 보기" variant="primary" onPress={onSessionEnd} fullWidth={false} />
            </ScreenCard>
          </View>
        </ResponsiveContainer>
      </SafeAreaView>
    );
  }

  const q = current;
  const activeType = q.quizType;
  const userRating = quizService.getRating(activeType);
  const userTier = GradeTable.gradeLabel(userRating);
  const userTierDescriptor = GradeTable.gradeDescriptor(userRating);
  const compositeRating = quizService.compositeRating;
  const wElo = q.wordElo;
  const diffLabel = difficultyLabel(wElo);
  const diffColor = difficultyColor(wElo);
  const typeColor = QuizTypeColors[activeType];
  const typeLabel = QUIZ_TYPE_LABELS[activeType];
  const replayWord = replayWordForQuestion(q, answered);
  const canReplayWord = !!replayWord;
  const longestChoiceLength = Math.max(...q.choices.map((choice) => choice.length));
  const longChoiceFactor = clamp((longestChoiceLength - 18) / 22, 0, 1);
  const minWordSectionHeight = clamp(layoutHeight * 0.2, 148, 210);
  const maxWordSectionHeight = clamp(layoutHeight * 0.38, 250, 360);
  const desiredChoiceSectionHeight = clamp(
    layout.bottomSectionHeight + longChoiceFactor * 80,
    layout.bottomSectionHeight,
    Math.min(420, layoutHeight * 0.45),
  );
  const choiceSectionMaxHeight = Math.max(
    clamp(layoutHeight * 0.27, 210, 300),
    layoutHeight - progressCardHeight - minWordSectionHeight,
  );
  const choiceSectionHeight = Math.min(desiredChoiceSectionHeight, choiceSectionMaxHeight);
  const availableChoiceGridHeight = Math.max(
    choiceSectionHeight - layout.topPadding - layout.bottomPadding - layout.gap,
    168,
  );
  const minChoiceCardHeight = clamp(layoutHeight * 0.1, 84, 116);
  const choiceCardHeight = clamp(
    availableChoiceGridHeight / 2,
    minChoiceCardHeight,
    layout.cardHeight + 24,
  );
  const cardCompression = clamp(
    (layout.cardHeight - choiceCardHeight) / Math.max(layout.cardHeight, 1),
    0,
    1,
  );
  const choiceCardPaddingVertical = clamp(
    layout.cardPaddingVertical - cardCompression * 6,
    6,
    layout.cardPaddingVertical,
  );
  const choiceTextFontSize = clamp(
    layout.choiceFontSize - longChoiceFactor * 2.5 - cardCompression * 3,
    10.5,
    22,
  );
  const scaledChoiceTextFontSize = typography.fontSize(choiceTextFontSize);
  const choiceTextLineHeight = typography.lineHeight(choiceTextFontSize, 1.28);
  const choiceGridWidth = layout.cellWidth * 2 + layout.gap;
  const choiceRows = q.choices.reduce<Array<Array<{ choice: string; idx: number }>>>((rows, choice, idx) => {
    if (idx % 2 === 0) {
      rows.push([{ choice, idx }]);
    } else {
      rows[rows.length - 1].push({ choice, idx });
    }
    return rows;
  }, []);

  const promptIsLong = q.prompt.length > 15;
  const promptBaseFontSize = promptIsLong ? layout.longPromptFontSize : layout.wordFontSize;
  const promptFontSize = typography.fontSize(promptBaseFontSize);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      <ResponsiveContainer
        maxWidth={stageMaxWidth}
        style={windowHeight > stageMaxHeight ? styles.cappedStage : undefined}
      >
        <View style={styles.stage}>
          <ScreenCard
            tone="tint"
            padded={false}
            style={styles.progressCard}
            onLayout={({ nativeEvent }) => {
              const nextHeight = Math.round(nativeEvent.layout.height);
              setProgressCardHeight((currentHeight) =>
                Math.abs(currentHeight - nextHeight) > 1 ? nextHeight : currentHeight,
              );
            }}
          >
            <TimerBar
              key={timerKey}
              durationMs={timerDuration}
              running={timerRunning}
              onTimeUp={onTimeUp}
            />

            <View style={[styles.progressHeader, { paddingHorizontal: layout.horizontalPadding }]}>
              <View style={styles.progressLeft}>
                <Chip type={activeType} label={typeLabel} />
                <Text style={styles.progressCount}>
                  <Text style={[styles.progressCurrent, { color: typeColor }]}>#{questionNum}</Text>
                </Text>
              </View>
              <View style={styles.progressRight}>
                <Badge label={diffLabel} tone="difficulty" color={diffColor} />
                {Platform.OS !== 'web' && (
                  <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityLabel={
                      audioPreferences.autoplayEnabled ? '자동 음성 끄기' : '자동 음성 켜기'
                    }
                    activeOpacity={0.85}
                    onPress={onToggleAutoplay}
                    style={[
                      styles.audioToggleButton,
                      audioPreferences.autoplayEnabled && styles.audioToggleButtonActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.audioToggleText,
                        audioPreferences.autoplayEnabled && styles.audioToggleTextActive,
                      ]}
                    >
                      {audioPreferences.autoplayEnabled ? '음성 ON' : '음성 OFF'}
                    </Text>
                  </TouchableOpacity>
                )}
                <Button
                  label="캐릭터"
                  variant="ghost"
                  onPress={onOpenProfile}
                  fullWidth={false}
                  style={styles.profileButton}
                />
                <Button
                  label="II"
                  variant="ghost"
                  onPress={onPause}
                  fullWidth={false}
                  accessibilityLabel="일시정지"
                  style={styles.pauseButton}
                />
              </View>
            </View>

            <View style={[styles.eloRow, { paddingHorizontal: layout.horizontalPadding }]}>
              <View style={styles.eloLeft}>
                <View style={styles.eloBlock}>
                  <Text style={styles.eloLabel}>현재 Rating</Text>
                  <View style={styles.eloContainer}>
                    <Text style={[styles.eloValue, { color: typeColor }]}>{userRating}</Text>
                    {answered && eloDelta !== null && eloDelta !== 0 && (
                      <Animated.View
                        style={[
                          styles.eloDeltaBadge,
                          {
                            opacity: eloDeltaAnim.interpolate({
                              inputRange: [0, 0.2, 0.7, 1],
                              outputRange: [0, 1, 1, 0],
                            }),
                            transform: [
                              {
                                translateY: eloDeltaAnim.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [0, -22],
                                }),
                              },
                            ],
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.eloDeltaText,
                            { color: eloDelta > 0 ? Colors.correct : Colors.wrong },
                          ]}
                        >
                          {eloDelta > 0 ? `+${eloDelta}` : `${eloDelta}`}
                        </Text>
                      </Animated.View>
                    )}
                  </View>
                </View>
                <View style={[styles.tierBadge, { backgroundColor: `${typeColor}1F` }]}>
                  <Text style={[styles.tierText, { color: typeColor }]}>{userTier}</Text>
                </View>
                <Text style={styles.tierDescriptor}>{userTierDescriptor}</Text>
              </View>
              <View style={styles.eloRight}>
                <Text style={styles.compositeLabel}>종합 {compositeRating}</Text>
                {answered && wordEloDelta !== null && wordEloDelta !== 0 && (
                  <Animated.View
                    style={[
                      styles.wordEloDeltaBadge,
                      {
                        opacity: wordEloDeltaAnim.interpolate({
                          inputRange: [0, 0.2, 0.7, 1],
                          outputRange: [0, 1, 1, 0],
                        }),
                        transform: [
                          {
                            translateY: wordEloDeltaAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -20],
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.wordEloDeltaText,
                        { color: wordEloDelta > 0 ? Colors.wrong : Colors.correct },
                      ]}
                    >
                      {wordEloDelta > 0 ? `+${wordEloDelta}` : `${wordEloDelta}`}
                    </Text>
                  </Animated.View>
                )}
              </View>
            </View>
          </ScreenCard>

          <ScreenCard padded={false} style={styles.wordCard}>
            {answered ? (
              <Animated.View
                style={[
                  styles.insightSection,
                  { paddingHorizontal: layout.horizontalPadding, opacity: feedbackOpacity },
                ]}
              >
                <WrongAnswerInsightSheet
                  vocab={q.vocabItem}
                  outcome={(timedOut ? 'timeout' : isCorrect ? 'correct' : 'wrong') as AnsweredOutcome}
                  selectedChoice={selectedChoice}
                  correctAnswer={q.correctAnswer}
                />
              </Animated.View>
            ) : (
              <View
                style={[
                  styles.wordSection,
                  {
                    paddingHorizontal: layout.horizontalPadding,
                    minHeight: minWordSectionHeight,
                    maxHeight: maxWordSectionHeight,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.wordText,
                    {
                      fontSize: promptFontSize,
                      lineHeight: typography.lineHeight(promptBaseFontSize, 1.28) + 2,
                    },
                  ]}
                  numberOfLines={3}
                  adjustsFontSizeToFit
                >
                  {q.prompt}
                </Text>

                {canReplayWord && (
                  <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityLabel={activeType === 'k2e' ? '정답 단어 듣기' : '단어 듣기'}
                    activeOpacity={0.85}
                    onPress={onReplayWord}
                    style={styles.listenButton}
                  >
                    <Text style={styles.listenButtonText}>
                      {activeType === 'k2e' ? '정답 듣기' : '듣기'}
                    </Text>
                  </TouchableOpacity>
                )}

                {showHint && hintEntry && (
                  <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
                    <View style={styles.hintHeader}>
                      <Text style={styles.hintLabel}>Hint</Text>
                    </View>
                    <Text style={styles.hintText}>{hintEntry.text}</Text>
                  </Animated.View>
                )}
              </View>
            )}
          </ScreenCard>

          <ScreenCard padded={false} style={styles.choicesCard}>
            <View
              style={[
                styles.choicesSection,
                {
                  height: choiceSectionHeight,
                  paddingHorizontal: layout.horizontalPadding,
                  paddingTop: layout.topPadding,
                  paddingBottom: layout.bottomPadding,
                },
              ]}
            >
              <View style={[styles.grid, { gap: layout.gap, width: choiceGridWidth }]}>
                {choiceRows.map((row, rowIndex) => (
                  <View key={`row-${rowIndex}`} style={[styles.gridRow, { gap: layout.gap }]}>
                    {row.map(({ choice, idx }) => {
                      return (
                        <ChoiceCard
                          key={`${choice}-${idx}`}
                          label={CHOICE_LABELS[idx]}
                          text={choice}
                          state={getChoiceState(choice)}
                          selected={selectedChoice === choice}
                          onPress={() => onChoiceSelected(choice)}
                          disabled={answered}
                          style={{
                            width: layout.cellWidth,
                            height: choiceCardHeight,
                            borderRadius: layout.cardRadius,
                            paddingVertical: choiceCardPaddingVertical,
                            paddingHorizontal: layout.cardPaddingHorizontal,
                            shadowRadius: layout.cardShadowRadius,
                          }}
                          textStyle={{
                            fontSize: scaledChoiceTextFontSize,
                            lineHeight: choiceTextLineHeight,
                          }}
                        />
                      );
                    })}
                    {row.length < 2 ? (
                      <View style={{ width: layout.cellWidth, height: choiceCardHeight }} />
                    ) : null}
                  </View>
                ))}
              </View>
            </View>
          </ScreenCard>

          {answered && <NextButton onPress={onAdvance} />}
        </View>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

function useQuizStyles() {
  const typography = useResponsiveTypography();

  return useMemo(() => StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  glowTop: {
    position: 'absolute',
    top: 48,
    right: -64,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: withAlpha(Colors.primary, '10'),
  },
  glowBottom: {
    position: 'absolute',
    bottom: 100,
    left: -48,
    width: 164,
    height: 164,
    borderRadius: 82,
    backgroundColor: withAlpha(Colors.warning, '10'),
  },
  cappedStage: {
    maxHeight: 940,
  },
  stage: {
    flex: 1,
    gap: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  progressCard: {
    overflow: 'hidden',
  },
  wordCard: {
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
    justifyContent: 'center',
  },
  choicesCard: {
    overflow: 'hidden',
  },
  // ── Progress header ──
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  progressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  progressCount: {
    textAlign: 'center',
  },
  progressCurrent: {
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  profileButton: {
    minHeight: 40,
    paddingHorizontal: Spacing.md,
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
  },
  audioToggleButton: {
    minHeight: 36,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioToggleButtonActive: {
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryLight,
  },
  audioToggleText: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textSecondary,
    letterSpacing: 0.2,
  },
  audioToggleTextActive: {
    color: Colors.primaryStrong,
  },
  pauseButton: {
    width: 42,
    minHeight: 40,
    paddingHorizontal: 0,
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surface,
  },
  // ── ELO info row ──
  eloRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  eloLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  eloBlock: {
    gap: 2,
  },
  eloLabel: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
    letterSpacing: 0.2,
  },
  eloContainer: {
    position: 'relative',
  },
  eloValue: {
    fontSize: typography.sizes.size18,
    fontWeight: Typography.weightExtraBold,
  },
  eloDeltaBadge: {
    position: 'absolute',
    top: -4,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  eloDeltaText: {
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightExtraBold,
    textShadowColor: 'rgba(255,255,255,0.95)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  tierBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
  },
  tierText: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightBold,
  },
  tierDescriptor: {
    marginTop: 4,
    fontSize: typography.sizes.size11,
    lineHeight: typography.lineHeight(Typography.size11, 16 / Typography.size11),
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  eloRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    position: 'relative',
  },
  compositeLabel: {
    fontSize: typography.sizes.size12,
    color: Colors.textMuted,
    fontWeight: Typography.weightSemiBold,
  },
  wordEloDeltaBadge: {
    position: 'absolute',
    top: -2,
    right: 0,
    alignItems: 'center',
  },
  wordEloDeltaText: {
    fontSize: typography.sizes.size12,
    fontWeight: Typography.weightExtraBold,
    textShadowColor: 'rgba(255,255,255,0.95)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  // ── Word section ──
  wordSection: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  insightSection: {
    flex: 1,
    width: '100%',
    paddingVertical: Spacing.md,
  },
  wordText: {
    fontSize: typography.fontSize(40),
    fontWeight: Typography.weightExtraBold,
    textAlign: 'center',
    letterSpacing: -0.8,
    lineHeight: typography.lineHeight(40, 44 / 40),
    color: Colors.textPrimary,
    includeFontPadding: true,
  },
  listenButton: {
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryLight,
  },
  listenButtonText: {
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightBold,
    color: Colors.primaryStrong,
    letterSpacing: 0.2,
  },
  hintContainer: {
    marginTop: Spacing.xl,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.hintBg,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.hintBorder,
    maxWidth: '90%',
  },
  hintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  hintLabel: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightExtraBold,
    color: Colors.hintLabel,
    letterSpacing: 0.8,
  },
  hintText: {
    fontSize: typography.sizes.size13,
    color: Colors.hintText,
    lineHeight: typography.lineHeight(Typography.size13, 22 / Typography.size13),
    includeFontPadding: true,
    fontWeight: Typography.weightMedium,
  },
  feedbackBanner: {
    marginTop: Spacing.lg,
  },
  timeBonusBadge: {
    marginTop: Spacing.md,
    paddingVertical: 6,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.primaryLight,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    alignSelf: 'center',
  },
  timeBonusText: {
    fontSize: typography.sizes.size13,
    fontWeight: Typography.weightBold,
    color: Colors.primaryStrong,
    letterSpacing: 0.3,
  },
  choicesSection: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: Spacing.md,
  },
  gridRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.lg,
  },
  stateCard: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  stateEyebrow: {
    fontSize: typography.sizes.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  loadingText: {
    fontSize: typography.sizes.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  stateText: {
    fontSize: typography.sizes.size13,
    lineHeight: typography.lineHeight(Typography.size13, 20 / Typography.size13),
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  }), [typography]);
}
