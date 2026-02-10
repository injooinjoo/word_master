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
import { QUIZ_TYPE_LABELS, ALL_QUIZ_TYPES } from '../../../services/quizService';
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

/** Pick a random quiz type that has available words */
function pickRandomType(quizService: QuizService): QuizType {
  const shuffled = [...ALL_QUIZ_TYPES].sort(() => Math.random() - 0.5);
  for (const t of shuffled) {
    // Quick probe: try to generate a question of this type
    if (t === 'e2e') {
      // Only if any word has a definition
      const hasDefinition = quizService.vocabItems.some((v) => !!v.definition);
      if (!hasDefinition) continue;
    }
    return t;
  }
  return 'e2k';
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

  const resetFeedback = useCallback(() => {
    setAnswered(false);
    answeredRef.current = false;
    setSelectedChoice(null);
    setIsCorrect(null);
    setTimedOut(false);
    setShowHint(false);
    hintOpacity.setValue(0);
    feedbackOpacity.setValue(0);
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
      hintTimeoutRef.current = null;
    }
  }, [feedbackOpacity, hintOpacity]);

  const loadNext = useCallback(() => {
    // Round complete → show results
    if (quizService.isRoundComplete) {
      quizService.endSession();
      onSessionEnd();
      return;
    }

    const type = pickRandomType(quizService);
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
  }, [current, quizService, loadNext, feedbackOpacity, timerDuration]);

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
    [current, quizService, loadNext, feedbackOpacity, timerDuration],
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
          <Text style={[styles.infoElo, { color: typeColor }]}>{userRating}</Text>
          <View style={[styles.tierBadge, { backgroundColor: typeColor + '18' }]}>
            <Text style={[styles.tierText, { color: typeColor }]}>{userTier}</Text>
          </View>
        </View>
        <View style={styles.infoRight}>
          <Text style={styles.infoPct}>상위 {topPctDisplay}%</Text>
          <View style={[styles.diffBadge, { backgroundColor: diffColor }]}>
            <Text style={styles.diffText}>{diffLabel}</Text>
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
              <Text style={getChoiceTextStyle(choice)} numberOfLines={3} adjustsFontSizeToFit>
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
  infoElo: {
    fontSize: 15,
    fontWeight: '700',
    color: PRIMARY,
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
    padding: gap,
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
