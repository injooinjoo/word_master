import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Vibration,
  SafeAreaView,
  Animated,
  useWindowDimensions,
} from 'react-native';
import type { QuizQuestion, QuizType, AnswerContext } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizService } from '../../../services/quizService';
import type { AudioService } from '../../../services/audioService';
import { getLearningTipEntries } from '../../../data/models/vocab';
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
import {
  Badge,
  Button,
  Chip,
  ChoiceCard,
  FeedbackBanner,
  ResponsiveContainer,
  ScreenCard,
} from '../../../shared/ui';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

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

interface QuizScreenProps {
  quizService: QuizService;
  audioService: AudioService;
  onSessionEnd: () => void;
}

export function QuizScreen({ quizService, audioService, onSessionEnd }: QuizScreenProps) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const stageMaxWidth = windowWidth >= 1024 ? 620 : 560;
  const stageMaxHeight = 940;
  const layoutWidth = Math.min(windowWidth, stageMaxWidth);
  const layoutHeight = Math.min(windowHeight, stageMaxHeight);
  const layout = useMemo(
    () => getChoiceLayoutMetrics(layoutWidth, layoutHeight),
    [layoutWidth, layoutHeight],
  );
  const [current, setCurrent] = useState<QuizQuestion | null>(null);
  const [questionNum, setQuestionNum] = useState(0);
  const [initialized, setInitialized] = useState(false);

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

  // Pre-pick hint entry for the current question so it's ready when threshold triggers
  const hintEntryRef = useRef<LearningTipEntry | null>(null);

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
    const type = quizService.pickAdaptiveType();
    const q = quizService.nextQuestion(type);
    if (q == null) {
      quizService.endSession();
      onSessionEnd();
      return;
    }
    resetFeedback();
    setQuestionNum(quizService.roundTotal + 1);
    setInitialized(true);

    const entries = getLearningTipEntries(q.vocabItem.learningTips);
    const entry = entries[Math.floor(Math.random() * entries.length)];
    hintEntryRef.current = entry;
    setHintEntry(entry);

    const duration = timerDurationForElo(q.wordElo);
    setTimerDuration(duration);
    setTimerKey((k) => k + 1);

    setCurrent(q);

    startTimeRef.current = Date.now();

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

    requestAnimationFrame(() => setTimerRunning(true));
  }, [quizService, onSessionEnd, resetFeedback, hintOpacity]);

  useEffect(() => {
    loadNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = null;
      }
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
        feedbackTimeoutRef.current = null;
      }
    };
  }, []);

  // --- Time's up handler ---
  const onTimeUp = useCallback(() => {
    if (answeredRef.current) return;

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
    };
    quizService.submitAnswer(answerCtx, {
      word: q.vocabItem.word,
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

    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }
    feedbackTimeoutRef.current = setTimeout(() => {
      feedbackTimeoutRef.current = null;
      loadNext();
    }, Timing.feedbackDelay);
  }, [current, quizService, loadNext, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim]);

  // --- Choice selection handler ---
  const onChoiceSelected = useCallback(
    (choice: string) => {
      const q = current;
      if (!q || answeredRef.current) return;

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
      };
      quizService.submitAnswer(answerCtx, {
        word: q.vocabItem.word,
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

      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
      feedbackTimeoutRef.current = setTimeout(() => {
        feedbackTimeoutRef.current = null;
        loadNext();
      }, Timing.feedbackDelay);
    },
    [current, quizService, loadNext, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim],
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

  const onPause = useCallback(() => {
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
  }, [onSessionEnd]);

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
  const compositeRating = quizService.compositeRating;
  const wElo = q.wordElo;
  const diffLabel = difficultyLabel(wElo);
  const diffColor = difficultyColor(wElo);
  const typeColor = QuizTypeColors[activeType];
  const typeLabel = QUIZ_TYPE_LABELS[activeType];
  const longestChoiceLength = Math.max(...q.choices.map((choice) => choice.length));
  const longChoiceFactor = clamp((longestChoiceLength - 18) / 22, 0, 1);
  const choiceSectionHeight = clamp(
    layout.bottomSectionHeight + longChoiceFactor * 80,
    layout.bottomSectionHeight,
    Math.min(420, layoutHeight * 0.45),
  );
  const availableChoiceGridHeight =
    choiceSectionHeight - layout.topPadding - layout.bottomPadding - layout.gap;
  const choiceCardHeight = clamp(availableChoiceGridHeight / 2, layout.cardHeight, layout.cardHeight + 36);
  const choiceTextFontSize = clamp(layout.choiceFontSize - longChoiceFactor * 2.5, 11, 22);
  const choiceTextLineHeight = Math.round(choiceTextFontSize * 1.28);

  const promptIsLong = q.prompt.length > 15;
  const promptFontSize = promptIsLong ? layout.longPromptFontSize : layout.wordFontSize;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      <ResponsiveContainer
        maxWidth={stageMaxWidth}
        style={windowHeight > stageMaxHeight ? styles.cappedStage : undefined}
      >
        <View style={styles.stage}>
          <ScreenCard tone="tint" padded={false} style={styles.progressCard}>
            <TimerBar
              key={timerKey}
              durationMs={timerDuration}
              running={timerRunning}
              onTimeUp={onTimeUp}
            />

            <View style={styles.progressHeader}>
              <View style={styles.progressLeft}>
                <Chip type={activeType} label={typeLabel} />
                <Text style={styles.progressCount}>
                  <Text style={[styles.progressCurrent, { color: typeColor }]}>#{questionNum}</Text>
                </Text>
              </View>
              <View style={styles.progressRight}>
                <Badge label={diffLabel} tone="difficulty" color={diffColor} />
                <Button
                  label="II"
                  variant="ghost"
                  onPress={onPause}
                  fullWidth={false}
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
            <View style={[styles.wordSection, { paddingHorizontal: layout.horizontalPadding }]}>
              <Text
                style={[
                  styles.wordText,
                  { fontSize: promptFontSize, lineHeight: Math.round(promptFontSize * 1.28) + 2 },
                ]}
                numberOfLines={3}
                adjustsFontSizeToFit
              >
                {q.prompt}
              </Text>

              {showHint && hintEntry && !answered && (
                <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
                  <View style={styles.hintHeader}>
                    <Text style={styles.hintLabel}>Hint</Text>
                  </View>
                  <Text style={styles.hintText}>{hintEntry.text}</Text>
                </Animated.View>
              )}

              {answered && (
                <Animated.View
                  style={[
                    styles.feedbackBanner,
                    {
                      opacity: feedbackOpacity,
                    },
                  ]}
                >
                  <FeedbackBanner
                    kind={timedOut ? 'timeout' : isCorrect ? 'success' : 'error'}
                    message={
                      isCorrect
                        ? '정답!'
                        : timedOut
                          ? `시간 초과 — 정답: ${q.correctAnswer}`
                          : `오답 — 정답: ${q.correctAnswer}`
                    }
                  />
                </Animated.View>
              )}

              {answered && remainingSec !== null && remainingSec > 0 && (
                <Animated.View
                  style={[
                    styles.timeBonusBadge,
                    {
                      opacity: timeBonusAnim.interpolate({
                        inputRange: [0, 0.15, 0.6, 1],
                        outputRange: [0, 1, 1, 0],
                      }),
                      transform: [
                        {
                          translateY: timeBonusAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [6, -10],
                          }),
                        },
                        {
                          scale: timeBonusAnim.interpolate({
                            inputRange: [0, 0.15, 0.5, 1],
                            outputRange: [0.6, 1.15, 1, 0.9],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <Text style={styles.timeBonusText}>{remainingSec.toFixed(1)}s</Text>
                </Animated.View>
              )}
            </View>
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
              <View style={[styles.grid, { gap: layout.gap }]}>
                {q.choices.map((choice, idx) => (
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
                      paddingVertical: layout.cardPaddingVertical,
                      paddingHorizontal: layout.cardPaddingHorizontal,
                      shadowRadius: layout.cardShadowRadius,
                    }}
                    textStyle={{ fontSize: choiceTextFontSize, lineHeight: choiceTextLineHeight }}
                  />
                ))}
              </View>
            </View>
          </ScreenCard>
        </View>
      </ResponsiveContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    paddingHorizontal: Spacing.lg,
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
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
    letterSpacing: 0.2,
  },
  eloContainer: {
    position: 'relative',
  },
  eloValue: {
    fontSize: Typography.size18,
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
    fontSize: Typography.size13,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
  },
  eloRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    position: 'relative',
  },
  compositeLabel: {
    fontSize: Typography.size12,
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
    fontSize: Typography.size12,
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
    minHeight: 180,
    maxHeight: 360,
  },
  wordText: {
    fontSize: 40,
    fontWeight: Typography.weightExtraBold,
    textAlign: 'center',
    letterSpacing: -0.8,
    lineHeight: 44,
    color: Colors.textPrimary,
    includeFontPadding: true,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightExtraBold,
    color: Colors.hintLabel,
    letterSpacing: 0.8,
  },
  hintText: {
    fontSize: Typography.size13,
    color: Colors.hintText,
    lineHeight: 22,
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
    fontSize: Typography.size13,
    fontWeight: Typography.weightBold,
    color: Colors.primaryStrong,
    letterSpacing: 0.3,
  },
  choicesSection: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: Spacing.md,
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
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  loadingText: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  stateText: {
    fontSize: Typography.size13,
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
