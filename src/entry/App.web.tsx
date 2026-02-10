import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { QuizScreen } from '../features/quiz/ui/QuizScreen';
import { ResultScreen } from '../features/quiz/ui/ResultScreen';
import { QuizService } from '../services/quizService';
import { AudioService } from '../services/audioService';
import { allVocabData } from '../data/vocab';

const MobileAds = null;
const InterstitialAd = null;

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

  const onSessionEnd = useCallback(() => {
    setShowResult(true);
  }, []);

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
