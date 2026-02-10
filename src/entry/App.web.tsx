import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { RoundSizePickerScreen } from '../features/quiz/ui/RoundSizePickerScreen';
import { QuizService } from '../services/quizService';
import type { RoundSizeOption } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { allVocabData } from '../data/vocab';

const quizService = new QuizService(allVocabData);
const audioService = new AudioService();

type Screen = 'picker' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('picker');

  const onPickSize = useCallback((size: RoundSizeOption) => {
    quizService.setRoundSize(size);
    quizService.resetRound();
    setScreen('quiz');
  }, []);

  const onSessionEnd = useCallback(() => {
    setScreen('result');
  }, []);

  const onBackToQuiz = useCallback(() => {
    quizService.resetRound();
    setScreen('quiz');
  }, []);

  const onBackToPicker = useCallback(() => {
    quizService.resetRound();
    setScreen('picker');
  }, []);

  if (screen === 'picker') {
    return (
      <>
        <StatusBar style="auto" />
        <RoundSizePickerScreen onPickSize={onPickSize} />
      </>
    );
  }

  if (screen === 'quiz') {
    return (
      <>
        <StatusBar style="auto" />
        <QuizScreen
          quizService={quizService}
          audioService={audioService}
          onSessionEnd={onSessionEnd}
        />
      </>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <ResultScreen
        quizService={quizService}
        onBackToQuiz={onBackToQuiz}
        onBackToPicker={onBackToPicker}
      />
    </>
  );
}
