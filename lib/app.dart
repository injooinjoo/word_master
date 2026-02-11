import 'dart:io';

import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

import 'data/sample_vocab_data.dart';
import 'features/quiz/ui/quiz_screen.dart';
import 'features/quiz/ui/result_screen.dart';
import 'services/audio_service.dart';
import 'services/quiz_service.dart';
import 'shared/constants/ad_ids.dart';

class WordMasterApp extends StatefulWidget {
  const WordMasterApp({super.key});

  @override
  State<WordMasterApp> createState() => _WordMasterAppState();
}

class _WordMasterAppState extends State<WordMasterApp> {
  late final QuizService _quizService;
  late final AudioService _audioService;

  bool _showResult = false;

  @override
  void initState() {
    super.initState();
    _quizService = QuizService(vocabItems: sampleVocabData);
    _audioService = AudioService();
  }

  @override
  void dispose() {
    _audioService.dispose();
    super.dispose();
  }

  Future<void> _onSessionEnd() async {
    if (_quizService.shouldShowInterstitialBeforeResult) {
      await _showInterstitialAndThen(() {
        if (!mounted) return;
        setState(() => _showResult = true);
      });
      return;
    }
    if (!mounted) return;
    setState(() => _showResult = true);
  }

  Future<void> _showInterstitialAndThen(VoidCallback onDone) async {
    final adUnitId = Platform.isAndroid
        ? AdIds.androidInterstitial
        : AdIds.iosInterstitial;
    InterstitialAd.load(
      adUnitId: adUnitId,
      request: const AdRequest(),
      adLoadCallback: InterstitialAdLoadCallback(
        onAdLoaded: (ad) {
          ad.fullScreenContentCallback = FullScreenContentCallback(
            onAdDismissedFullScreenContent: (ad) {
              ad.dispose();
              onDone();
            },
          );
          ad.show();
        },
        onAdFailedToLoad: (_) {
          onDone();
        },
      ),
    );
  }

  void _onBackToQuiz() {
    setState(() => _showResult = false);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Word Master',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1CB0F6),
          primary: const Color(0xFF1CB0F6),
          secondary: const Color(0xFFE0E0E0),
          tertiary: const Color(0xFF58CC02),
          error: const Color(0xFFEA2B2B),
          surface: Colors.white,
          onSurface: Colors.black87,
        ),
        useMaterial3: true,
      ),
      home: _showResult
          ? ResultScreen(
              quizService: _quizService,
              onBackToQuiz: _onBackToQuiz,
            )
          : QuizScreen(
              quizService: _quizService,
              audioService: _audioService,
              onSessionEnd: _onSessionEnd,
            ),
    );
  }
}
