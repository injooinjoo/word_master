import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import { GradeTable } from '../../../shared/constants/gradeTable';
import { AdIds } from '../../../shared/constants/adIds';
import { getTopPercentile, getRank, TOTAL_USERS } from '../../../services/rankingService';
import type { QuizService } from '../../../services/quizService';

const PRIMARY = '#1CB0F6';
const ACCENT = '#FF9600';

// Conditional AdMob: only render on native and when module is available
let BannerAdComponent: React.ComponentType<{ unitId: string; size: string }> | null = null;
try {
  const ads = require('react-native-google-mobile-ads');
  if (ads.BannerAd && (Platform.OS === 'android' || Platform.OS === 'ios')) {
    BannerAdComponent = ads.BannerAd;
  }
} catch {
  // Expo Go or missing native module
}

interface ResultScreenProps {
  quizService: QuizService;
  onBackToQuiz: () => void;
}

export function ResultScreen({ quizService, onBackToQuiz }: ResultScreenProps) {
  const rating = quizService.rating;
  const grade = GradeTable.gradeLabel(rating);
  const bannerUnitId = Platform.OS === 'android' ? AdIds.androidBanner : AdIds.iosBanner;

  const topPct = getTopPercentile(rating);
  const rank = getRank(rating);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>결과</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>현재 Rating</Text>
        <Text style={styles.ratingValue}>{rating}</Text>
        <Text style={styles.label}>학년 구간</Text>
        <Text style={styles.gradeValue}>{grade}</Text>

        {/* Ranking section */}
        <View style={styles.rankingCard}>
          <Text style={styles.rankingTitle}>나의 랭킹</Text>
          <View style={styles.rankingRow}>
            <View style={styles.rankingItem}>
              <Text style={styles.rankingNumber}>
                {topPct < 10 ? topPct.toFixed(1) : Math.round(topPct)}%
              </Text>
              <Text style={styles.rankingCaption}>상위</Text>
            </View>
            <View style={styles.rankingDivider} />
            <View style={styles.rankingItem}>
              <Text style={styles.rankingNumber}>
                {rank.toLocaleString()}위
              </Text>
              <Text style={styles.rankingCaption}>
                / {TOTAL_USERS.toLocaleString()}명
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.spacer} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onBackToQuiz}>
          <Text style={styles.buttonText}>퀴즈 다시 하기</Text>
        </TouchableOpacity>
      </View>
      {BannerAdComponent && (
        <View style={styles.bannerWrap}>
          <BannerAdComponent unitId={bannerUnitId} size="BANNER" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '700',
    color: PRIMARY,
    marginBottom: 16,
  },
  gradeValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  // ── Ranking card ──
  rankingCard: {
    marginTop: 28,
    width: '100%',
    backgroundColor: '#FFFAF0',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#FFE0B2',
  },
  rankingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: ACCENT,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  rankingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankingItem: {
    flex: 1,
    alignItems: 'center',
  },
  rankingNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
  },
  rankingCaption: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  rankingDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 12,
  },
  // ── rest ──
  spacer: {
    flex: 1,
  },
  footer: {
    padding: 24,
  },
  button: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bannerWrap: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});
