import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
import { Colors, QuizTypeColors, difficultyColor, Timing } from '../../../shared/constants/theme';
import { TimerBar } from '../components/TimerBar';

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
  const bottomSectionHeight = clamp(height * 0.34, 220, 420);
  const cellWidth = Math.max(120, (width - horizontalPadding * 2 - gap) / 2);
  const availableGridHeight = bottomSectionHeight - topPadding - bottomPadding - gap;
  const cardHeight = clamp(availableGridHeight / 2, 90, 210);
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
  const layout = useMemo(
    () => getChoiceLayoutMetrics(windowWidth, windowHeight),
    [windowWidth, windowHeight],
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
  }, [feedbackOpacity, hintOpacity, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim]);

  const loadNext = useCallback(() => {
    if (quizService.isRoundComplete) {
      quizService.endSession();
      onSessionEnd();
      return;
    }

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

    setTimeout(() => {
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

      setTimeout(() => {
        loadNext();
      }, Timing.feedbackDelay);
    },
    [current, quizService, loadNext, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim],
  );

  /** Determine card style based on feedback state */
  const getChoiceStyle = useCallback(
    (choice: string) => {
      if (!answered) return {};

      if (choice === current?.correctAnswer) {
        return styles.choiceCorrect;
      }
      if (choice === selectedChoice && !isCorrect) {
        return styles.choiceWrong;
      }
      return styles.choiceDimmed;
    },
    [answered, current, selectedChoice, isCorrect],
  );

  const getChoiceTextStyle = useCallback(
    (choice: string) => {
      if (!answered) return {};

      if (choice === current?.correctAnswer) {
        return styles.choiceTextCorrect;
      }
      if (choice === selectedChoice && !isCorrect) {
        return styles.choiceTextWrong;
      }
      return styles.choiceTextDimmed;
    },
    [answered, current, selectedChoice, isCorrect],
  );

  if (current == null) {
    if (!initialized) {
      return (
        <SafeAreaView style={styles.safe}>
          <View style={styles.centered}>
            <Text style={styles.loadingText}>문제 준비 중...</Text>
          </View>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.centered}>
          <TouchableOpacity style={styles.resultButton} onPress={onSessionEnd}>
            <Text style={styles.resultButtonText}>결과 보기</Text>
          </TouchableOpacity>
        </View>
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
    Math.min(500, windowHeight * 0.5),
  );
  const availableChoiceGridHeight =
    choiceSectionHeight - layout.topPadding - layout.bottomPadding - layout.gap;
  const choiceCardHeight = clamp(availableChoiceGridHeight / 2, layout.cardHeight, layout.cardHeight + 36);
  const choiceTextFontSize = clamp(layout.choiceFontSize - longChoiceFactor * 2.5, 11, 22);
  const choiceTextLineHeight = Math.round(choiceTextFontSize * 1.28);

  const promptIsLong = q.prompt.length > 15;
  const promptFontSize = promptIsLong ? layout.longPromptFontSize : layout.wordFontSize;

  // Progress bar percentage
  const progressPercent = Math.round((questionNum / quizService.roundSize) * 100);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Timer bar */}
      <TimerBar
        key={timerKey}
        durationMs={timerDuration}
        running={timerRunning}
        onTimeUp={onTimeUp}
      />

      {/* Progress header */}
      <View style={styles.progressHeader}>
        <View style={styles.progressLeft}>
          <View style={[styles.typeBadge, { backgroundColor: typeColor }]}>
            <Text style={styles.typeBadgeText}>{typeLabel}</Text>
          </View>
          <Text style={styles.progressCount}>
            <Text style={[styles.progressCurrent, { color: typeColor }]}>{questionNum}</Text>
            <Text style={styles.progressSlash}> / {quizService.roundSize}</Text>
          </Text>
        </View>
        <View style={styles.progressRight}>
          <View style={[styles.diffBadge, { backgroundColor: diffColor + '18' }]}>
            <Text style={[styles.diffText, { color: diffColor }]}>{diffLabel}</Text>
          </View>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBarTrack}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%`, backgroundColor: typeColor }]} />
      </View>

      {/* ELO info row */}
      <View style={[styles.eloRow, { paddingHorizontal: layout.horizontalPadding }]}>
        <View style={styles.eloLeft}>
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
          <View style={[styles.tierBadge, { backgroundColor: typeColor + '12' }]}>
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
                  // Word ELO going up = word became harder (user got it wrong) = red,
                  // going down = word became easier (user got it right) = green.
                  { color: wordEloDelta > 0 ? Colors.wrong : Colors.correct },
                ]}
              >
                {wordEloDelta > 0 ? `+${wordEloDelta}` : `${wordEloDelta}`}
              </Text>
            </Animated.View>
          )}
        </View>
      </View>

      {/* Word / Prompt section */}
      <View style={[styles.wordSection, { paddingHorizontal: layout.horizontalPadding }]}>
        <Text
          style={[
            styles.wordText,
            { fontSize: promptFontSize, lineHeight: Math.round(promptFontSize * 1.3) + 1 },
          ]}
          numberOfLines={3}
          adjustsFontSizeToFit
        >
          {q.prompt}
        </Text>

        {/* Inline hint */}
        {showHint && hintEntry && !answered && (
          <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
            <View style={styles.hintHeader}>
              <Text style={styles.hintLabel}>HINT</Text>
            </View>
            <Text style={styles.hintText}>{hintEntry.text}</Text>
          </Animated.View>
        )}

        {/* Feedback banner */}
        {answered && (
          <Animated.View
            style={[
              styles.feedbackBanner,
              {
                opacity: feedbackOpacity,
                backgroundColor: isCorrect ? Colors.correct : Colors.wrong,
              },
            ]}
          >
            <Text style={styles.feedbackText}>
              {isCorrect ? '정답!' : `오답 — 정답: ${q.correctAnswer}`}
            </Text>
          </Animated.View>
        )}

        {/* Remaining time floating badge */}
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
            <Text style={styles.timeBonusText}>
              {remainingSec.toFixed(1)}s
            </Text>
          </Animated.View>
        )}
      </View>

      {/* Choices 2x2 grid */}
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
            <TouchableOpacity
              key={`${choice}-${idx}`}
              style={[
                styles.choiceCard,
                {
                  width: layout.cellWidth,
                  height: choiceCardHeight,
                  borderRadius: layout.cardRadius,
                  paddingVertical: layout.cardPaddingVertical,
                  paddingHorizontal: layout.cardPaddingHorizontal,
                  shadowRadius: layout.cardShadowRadius,
                },
                getChoiceStyle(choice),
              ]}
              onPress={() => onChoiceSelected(choice)}
              activeOpacity={0.75}
              disabled={answered}
            >
              <View style={[styles.choiceLabelBadge, answered ? { opacity: 0.4 } : {}]}>
                <Text style={styles.choiceLabelText}>{CHOICE_LABELS[idx]}</Text>
              </View>
              <Text
                style={[
                  styles.choiceText,
                  { fontSize: choiceTextFontSize, lineHeight: choiceTextLineHeight },
                  getChoiceTextStyle(choice),
                ]}
              >
                {choice}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  // ── Progress header ──
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  progressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  typeBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  progressCount: {
    textAlign: 'center',
  },
  progressCurrent: {
    fontSize: 17,
    fontWeight: '800',
  },
  progressSlash: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textFaint,
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  diffBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  diffText: {
    fontSize: 12,
    fontWeight: '700',
  },
  // ── Progress bar ──
  progressBarTrack: {
    height: 3,
    backgroundColor: Colors.divider,
    marginHorizontal: 16,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 3,
    borderRadius: 2,
  },
  // ── ELO info row ──
  eloRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  eloLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eloContainer: {
    position: 'relative',
  },
  eloValue: {
    fontSize: 16,
    fontWeight: '800',
  },
  eloDeltaBadge: {
    position: 'absolute',
    top: -4,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  eloDeltaText: {
    fontSize: 13,
    fontWeight: '800',
    textShadowColor: 'rgba(255,255,255,0.95)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  tierBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tierText: {
    fontSize: 11,
    fontWeight: '700',
  },
  eloRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  compositeLabel: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  wordEloDeltaBadge: {
    position: 'absolute',
    top: -2,
    right: 0,
    alignItems: 'center',
  },
  wordEloDeltaText: {
    fontSize: 12,
    fontWeight: '800',
    textShadowColor: 'rgba(255,255,255,0.95)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  // ── Word section ──
  wordSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  wordText: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.5,
    lineHeight: 44,
    color: Colors.textPrimary,
    includeFontPadding: true,
  },
  hintContainer: {
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: Colors.hintBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.hintBorder,
    maxWidth: '90%',
  },
  hintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  hintLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.hintLabel,
    letterSpacing: 1,
  },
  hintText: {
    fontSize: 14,
    color: Colors.hintText,
    lineHeight: 22,
    includeFontPadding: true,
  },
  feedbackBanner: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  feedbackText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  timeBonusBadge: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: Colors.primaryLight,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    alignSelf: 'center',
  },
  timeBonusText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 0.3,
  },
  choicesSection: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  choiceCard: {
    width: 160,
    height: 120,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  choiceCorrect: {
    borderColor: Colors.correct,
    backgroundColor: Colors.correctLight,
    elevation: 0,
    shadowOpacity: 0,
  },
  choiceWrong: {
    borderColor: Colors.wrong,
    backgroundColor: Colors.wrongLight,
    elevation: 0,
    shadowOpacity: 0,
  },
  choiceDimmed: {
    opacity: 0.35,
    elevation: 0,
    shadowOpacity: 0,
  },
  choiceLabelBadge: {
    position: 'absolute',
    top: 8,
    left: 10,
    width: 22,
    height: 22,
    borderRadius: 6,
    backgroundColor: Colors.choiceLabelBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceLabelText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.choiceLabelText,
  },
  choiceText: {
    fontSize: 16,
    color: Colors.choiceText,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 4,
    width: '100%',
    maxWidth: '100%',
    flexShrink: 1,
  },
  choiceTextCorrect: {
    fontWeight: '700',
    color: Colors.correctDark,
  },
  choiceTextWrong: {
    fontWeight: '700',
    color: Colors.wrongDark,
  },
  choiceTextDimmed: {
    color: Colors.textMuted,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textMuted,
  },
  resultButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  resultButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
