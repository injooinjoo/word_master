import 'dart:io';

import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

import '../../../shared/constants/ad_ids.dart';
import '../../../shared/constants/grade_table.dart';
import '../../../services/quiz_service.dart';

class ResultScreen extends StatefulWidget {
  const ResultScreen({
    super.key,
    required this.quizService,
    required this.onBackToQuiz,
  });

  final QuizService quizService;
  final VoidCallback onBackToQuiz;

  @override
  State<ResultScreen> createState() => _ResultScreenState();
}

class _ResultScreenState extends State<ResultScreen> {
  BannerAd? _bannerAd;
  bool _isBannerLoaded = false;

  @override
  void initState() {
    super.initState();
    _loadBanner();
  }

  void _loadBanner() {
    final adUnitId =
        Platform.isAndroid ? AdIds.androidBanner : AdIds.iosBanner;
    _bannerAd = BannerAd(
      adUnitId: adUnitId,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (_) {
          if (mounted) setState(() => _isBannerLoaded = true);
        },
        onAdFailedToLoad: (_, __) {},
      ),
    )..load();
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final rating = widget.quizService.rating;
    final grade = GradeTable.gradeLabel(rating);

    return Scaffold(
      appBar: AppBar(title: const Text('결과')),
      body: SafeArea(
        child: Column(
          children: [
            const SizedBox(height: 32),
            Text(
              '현재 Rating',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 8),
            Text(
              '$rating',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).colorScheme.primary,
                  ),
            ),
            const SizedBox(height: 16),
            Text(
              '학년 구간',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 8),
            Text(
              grade,
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            const Spacer(),
            Padding(
              padding: const EdgeInsets.all(24),
              child: SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: widget.onBackToQuiz,
                  child: const Text('퀴즈 다시 하기'),
                ),
              ),
            ),
            if (_isBannerLoaded && _bannerAd != null)
              SizedBox(
                width: _bannerAd!.size.width.toDouble(),
                height: _bannerAd!.size.height.toDouble(),
                child: AdWidget(ad: _bannerAd!),
              ),
          ],
        ),
      ),
    );
  }
}
