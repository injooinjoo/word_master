import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native';
import type { QuizQuestion, QuizType, AnswerContext } from '../../../services/quizService';
import { QUIZ_TYPE_LABELS } from '../../../services/quizService';
import type { QuizService } from '../../../services/quizService';
import type { AudioService } from '../../../services/audioService';
import { getLearningTipEntries } from '../../../data/models/vocab';
import type { LearningTipEntry } from '../../../data/models/vocab';
import { GradeTable } from '../../../shared/constants/gradeTable';
import { getTopPercentile } from '../../../services/rankingService';
import { TimerBar } from '../components/TimerBar';

const { width: W, height: H } = Dimensions.get('window');
const horizontalPadding = W * 0.05;
const topPadding = H * 0.02;
const bottomPadding = H * 0.03;
const shortest = Math.min(W, H);
const gap = Math.max(8, Math.min(20, shortest * 0.03));
const bottomSectionHeight = H * (1 / 3);
const cellWidth = (W - horizontalPadding * 2 - gap) / 2;
const maxCellHeight = (bottomSectionHeight - topPadding - bottomPadding - gap) / 2;
const wordFontSize = Math.max(28, Math.min(56, shortest * 0.12));
const choiceFontSize = Math.max(14, Math.min(20, shortest * 0.04));
const cardRadius = Math.max(12, Math.min(24, shortest * 0.04));

const PRIMARY = '#1CB0F6';
const CORRECT_GREEN = '#58CC02';
const WRONG_RED = '#FF4B4B';

const TAB_COLORS: Record<QuizType, string> = {
  e2k: '#1CB0F6',
  k2e: '#FF9600',
  e2e: '#A435F0',
  syn: '#22C55E',
  ant: '#EF4444',
};

/** Delay (ms) to show feedback highlights before advancing */
const FEEDBACK_DELAY = 5000;

/** Word difficulty label from word ELO */
function difficultyLabel(wordElo: number): string {
  if (wordElo <= 400) return '쉬움';
  if (wordElo <= 800) return '보통';
  if (wordElo <= 1200) return '어려움';
  if (wordElo <= 1600) return '매우 어려움';
  return '극한';
}

/** Difficulty badge color */
function difficultyColor(wordElo: number): string {
  if (wordElo <= 400) return '#58CC02';
  if (wordElo <= 800) return '#1CB0F6';
  if (wordElo <= 1200) return '#FF9600';
  if (wordElo <= 1600) return '#FF4B4B';
  return '#A435F0';
}

/** Timer progress threshold at which the hint fades in (40%) */
const HINT_THRESHOLD = 0.4;

/** Calculate timer duration (ms) from word ELO. Range: 6 000 – 12 000 ms */
function timerDurationForElo(wordElo: number): number {
  const clamped = Math.max(0, Math.min(wordElo, 2000));
  return Math.round(6000 + (clamped / 2000) * 6000);
}

interface QuizScreenProps {
  quizService: QuizService;
  audioService: AudioService;
  onSessionEnd: () => void;
}

export function QuizScreen({ quizService, audioService, onSessionEnd }: QuizScreenProps) {
  const [current, setCurrent] = useState<QuizQuestion | null>(null);
  const [questionNum, setQuestionNum] = useState(0);

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
  const eloDeltaAnim = useRef(new Animated.Value(0)).current; // 0→1 for slide-up + fade
  const prevRatingRef = useRef<number>(0);

  // --- Word ELO delta animation state ---
  const [wordEloDelta, setWordEloDelta] = useState<number | null>(null);
  const wordEloDeltaAnim = useRef(new Animated.Value(0)).current;

  // --- Remaining time animation state ---
  const [remainingSec, setRemainingSec] = useState<number | null>(null);
  const timeBonusAnim = useRef(new Animated.Value(0)).current; // 0→1 for slide-up + fade

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
    // Round complete → show results
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

    // Pre-pick a random hint for this question
    const entries = getLearningTipEntries(q.vocabItem.learningTips);
    const entry = entries[Math.floor(Math.random() * entries.length)];
    hintEntryRef.current = entry;
    setHintEntry(entry);

    // Set timer duration based on word ELO and bump reset key
    const duration = timerDurationForElo(q.wordElo);
    setTimerDuration(duration);
    setTimerKey((k) => k + 1);

    setCurrent(q);

    // Record when the question was presented (for elapsed time measurement)
    startTimeRef.current = Date.now();

    // Schedule hint to appear at (1 - HINT_THRESHOLD) of the timer duration
    const hintDelayMs = Math.round(duration * (1 - HINT_THRESHOLD));
    hintTimeoutRef.current = setTimeout(() => {
      if (!answeredRef.current) {
        setShowHint(true);
        Animated.timing(hintOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }
    }, hintDelayMs);

    // Start timer on next frame to ensure the new TimerBar (via key) has mounted
    requestAnimationFrame(() => setTimerRunning(true));
  }, [quizService, onSessionEnd, resetFeedback, hintOpacity]);

  useEffect(() => {
    loadNext();
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

    // Capture ratings before submit
    const ratingBefore = quizService.getRating(q.quizType);
    prevRatingRef.current = ratingBefore;
    const wordEloBefore = quizService.getWordElo(q.vocabItem.id, q.quizType);

    const answerCtx: AnswerContext = {
      correct: false,
      wordId: q.vocabItem.id,
      quizType: q.quizType,
      elapsedMs: timerDuration, // timed out → full duration
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

    // User ELO delta animation
    const ratingAfter = quizService.getRating(q.quizType);
    const delta = ratingAfter - ratingBefore;
    setEloDelta(delta);
    eloDeltaAnim.setValue(0);

    // Word ELO delta animation
    const wordEloAfter = quizService.getWordElo(q.vocabItem.id, q.quizType);
    const wDelta = wordEloAfter - wordEloBefore;
    setWordEloDelta(wDelta);
    wordEloDeltaAnim.setValue(0);

    Animated.parallel([
      Animated.timing(eloDeltaAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(wordEloDeltaAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // No remaining time for timeout
    setRemainingSec(0);

    setAnswered(true);
    answeredRef.current = true;
    setTimerRunning(false);
    setTimedOut(true);
    setSelectedChoice(null);
    setIsCorrect(false);

    Vibration.vibrate([0, 80, 60, 80]);

    Animated.timing(feedbackOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      loadNext();
    }, FEEDBACK_DELAY);
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

      // Capture ratings before submit
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

      // User ELO delta animation
      const ratingAfter = quizService.getRating(q.quizType);
      const delta = ratingAfter - ratingBefore;
      setEloDelta(delta);
      eloDeltaAnim.setValue(0);

      // Word ELO delta animation
      const wordEloAfter = quizService.getWordElo(q.vocabItem.id, q.quizType);
      const wDelta = wordEloAfter - wordEloBefore;
      setWordEloDelta(wDelta);
      wordEloDeltaAnim.setValue(0);

      Animated.parallel([
        Animated.timing(eloDeltaAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(wordEloDeltaAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start();

      // Remaining time animation
      const remaining = Math.max(0, (timerDuration - elapsedMs) / 1000);
      setRemainingSec(remaining);
      timeBonusAnim.setValue(0);
      Animated.timing(timeBonusAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }).start();

      setAnswered(true);
      answeredRef.current = true;
      setTimerRunning(false);
      setSelectedChoice(choice);
      setIsCorrect(correct);

      Vibration.vibrate(correct ? 50 : [0, 80, 60, 80]);

      Animated.timing(feedbackOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        loadNext();
      }, FEEDBACK_DELAY);
    },
    [current, quizService, loadNext, feedbackOpacity, timerDuration, eloDeltaAnim, wordEloDeltaAnim, timeBonusAnim],
  );

  /** Determine card style based on feedback state */
  const getChoiceStyle = useCallback(
    (choice: string) => {
      if (!answered) return styles.choiceCard;

      if (choice === current?.correctAnswer) {
        return [styles.choiceCard, styles.choiceCorrect];
      }
      if (choice === selectedChoice && !isCorrect) {
        return [styles.choiceCard, styles.choiceWrong];
      }
      return [styles.choiceCard, styles.choiceDimmed];
    },
    [answered, current, selectedChoice, isCorrect],
  );

  const getChoiceTextStyle = useCallback(
    (choice: string) => {
      if (!answered) return styles.choiceText;

      if (choice === current?.correctAnswer) {
        return [styles.choiceText, styles.choiceTextHighlight];
      }
      if (choice === selectedChoice && !isCorrect) {
        return [styles.choiceText, styles.choiceTextHighlight];
      }
      return [styles.choiceText, styles.choiceTextDimmed];
    },
    [answered, current, selectedChoice, isCorrect],
  );

  if (current == null) {
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
  const topPct = getTopPercentile(userRating);
  const topPctDisplay = topPct < 10 ? topPct.toFixed(1) : String(Math.round(topPct));
  const wElo = q.wordElo;
  const diffLabel = difficultyLabel(wElo);
  const diffColor = difficultyColor(wElo);
  const typeColor = TAB_COLORS[activeType];
  const typeLabel = QUIZ_TYPE_LABELS[activeType];

  // Prompt font size: smaller for longer text (Korean meaning, English definition)
  const promptIsLong = q.prompt.length > 15;
  const promptFontSize = promptIsLong
    ? Math.max(20, Math.min(36, shortest * 0.07))
    : wordFontSize;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Timer bar */}
      <TimerBar
        key={timerKey}
        durationMs={timerDuration}
        running={timerRunning}
        onTimeUp={onTimeUp}
      />

      {/* Round progress counter */}
      <View style={styles.roundProgressBar}>
        <Text style={styles.roundProgressText}>
          <Text style={styles.roundProgressCurrent}>{questionNum}</Text>
          <Text style={styles.roundProgressSlash}> / {quizService.roundSize}</Text>
        </Text>
      </View>

      {/* Info bar: quiz type + user ELO/tier (left) + word difficulty (right) */}
      <View style={styles.infoBar}>
        <View style={styles.infoLeft}>
          <View style={[styles.typeBadge, { backgroundColor: typeColor }]}>
            <Text style={styles.typeBadgeText}>{typeLabel}</Text>
          </View>
          <View style={styles.eloContainer}>
            <Text style={[styles.infoElo, { color: typeColor }]}>{userRating}</Text>
            {/* ELO delta floating badge */}
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
                          outputRange: [0, -28],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.eloDeltaText,
                    { color: eloDelta > 0 ? CORRECT_GREEN : WRONG_RED },
                  ]}
                >
                  {eloDelta > 0 ? `+${eloDelta}` : `${eloDelta}`}
                </Text>
              </Animated.View>
            )}
          </View>
          <View style={[styles.tierBadge, { backgroundColor: typeColor + '18' }]}>
            <Text style={[styles.tierText, { color: typeColor }]}>{userTier}</Text>
          </View>
        </View>
        <View style={styles.infoRight}>
          <Text style={styles.infoPct}>상위 {topPctDisplay}%</Text>
          <View style={styles.diffContainer}>
            <View style={[styles.diffBadge, { backgroundColor: diffColor }]}>
              <Text style={styles.diffText}>{diffLabel}</Text>
            </View>
            {/* Word ELO delta floating badge */}
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
                          outputRange: [0, -26],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.wordEloDeltaText,
                    { color: wordEloDelta > 0 ? WRONG_RED : CORRECT_GREEN },
                  ]}
                >
                  {wordEloDelta > 0 ? `+${wordEloDelta}` : `${wordEloDelta}`}
                </Text>
              </Animated.View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.wordSection}>
        {/* Prompt: word or meaning depending on quiz type */}
        <Text
          style={[
            styles.wordText,
            { fontSize: promptFontSize, lineHeight: promptFontSize * 1.2 },
          ]}
          numberOfLines={3}
          adjustsFontSizeToFit
        >
          {q.prompt}
        </Text>

        {/* Inline hint (appears when timer < 40%) */}
        {showHint && hintEntry && !answered && (
          <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
            <Text style={styles.hintLabel}>HINT</Text>
            <Text style={styles.hintText}>{hintEntry.text}</Text>
          </Animated.View>
        )}

        {/* Feedback banner */}
        {answered && (
          <Animated.View
            style={[
              styles.feedbackBanner,
              { opacity: feedbackOpacity, backgroundColor: isCorrect ? CORRECT_GREEN : WRONG_RED },
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
              ⏱ {remainingSec.toFixed(1)}초 남음
            </Text>
          </Animated.View>
        )}
      </View>

      <View style={[styles.choicesSection, { height: bottomSectionHeight }]}>
        <View style={styles.grid}>
          {q.choices.map((choice, idx) => (
            <TouchableOpacity
              key={`${choice}-${idx}`}
              style={getChoiceStyle(choice)}
              onPress={() => onChoiceSelected(choice)}
              activeOpacity={0.8}
              disabled={answered}
            >
              <Text
                style={getChoiceTextStyle(choice)}
                numberOfLines={4}
                adjustsFontSizeToFit
                minimumFontScale={0.8}
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
    backgroundColor: '#fff',
  },
  // ── Round progress ──
  roundProgressBar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#FAFAFA',
  },
  roundProgressText: {
    textAlign: 'center',
  },
  roundProgressCurrent: {
    fontSize: 16,
    fontWeight: '800',
    color: PRIMARY,
  },
  roundProgressSlash: {
    fontSize: 14,
    fontWeight: '600',
    color: '#BBB',
  },
  // ── Info bar ──
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalPadding,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eloContainer: {
    position: 'relative',
  },
  infoElo: {
    fontSize: 15,
    fontWeight: '700',
    color: PRIMARY,
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
    textShadowColor: 'rgba(255,255,255,0.9)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  tierBadge: {
    backgroundColor: '#EAF4FE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tierText: {
    fontSize: 11,
    fontWeight: '700',
    color: PRIMARY,
  },
  infoPct: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
  },
  infoRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  diffContainer: {
    position: 'relative',
  },
  diffBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  diffText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
  },
  wordEloDeltaBadge: {
    position: 'absolute',
    top: -2,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  wordEloDeltaText: {
    fontSize: 12,
    fontWeight: '800',
    textShadowColor: 'rgba(255,255,255,0.9)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  // ── Word section ──
  wordSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalPadding,
  },
  wordText: {
    fontSize: wordFontSize,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.5,
    lineHeight: wordFontSize * 1.1,
  },
  hintContainer: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#FFC800',
    maxWidth: '90%',
  },
  hintLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFA000',
    letterSpacing: 1,
    marginBottom: 4,
  },
  hintText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  feedbackBanner: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  feedbackText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  timeBonusBadge: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#F0F8FF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1CB0F622',
    alignSelf: 'center',
  },
  timeBonusText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1CB0F6',
    letterSpacing: 0.3,
  },
  choicesSection: {
    paddingHorizontal: horizontalPadding,
    paddingTop: topPadding,
    paddingBottom: bottomPadding,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap,
  },
  choiceCard: {
    width: cellWidth,
    height: maxCellHeight,
    backgroundColor: '#fff',
    borderRadius: cardRadius,
    paddingVertical: Math.max(10, gap * 0.8),
    paddingHorizontal: Math.max(12, gap),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: gap * 1.2,
    elevation: 2,
  },
  choiceCorrect: {
    borderColor: CORRECT_GREEN,
    backgroundColor: '#E8F9E0',
    shadowOpacity: 0,
    elevation: 0,
  },
  choiceWrong: {
    borderColor: WRONG_RED,
    backgroundColor: '#FFE8E8',
    shadowOpacity: 0,
    elevation: 0,
  },
  choiceDimmed: {
    opacity: 0.4,
    shadowOpacity: 0,
    elevation: 0,
  },
  choiceText: {
    fontSize: choiceFontSize,
    color: '#333',
    textAlign: 'center',
    lineHeight: Math.round(choiceFontSize * 1.35),
    paddingHorizontal: 4,
  },
  choiceTextHighlight: {
    fontWeight: '700',
  },
  choiceTextDimmed: {
    color: '#999',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  resultButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
