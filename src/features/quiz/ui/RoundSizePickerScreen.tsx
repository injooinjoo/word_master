import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { ROUND_SIZE_OPTIONS } from '../../../services/quizService';
import type { RoundSizeOption } from '../../../services/quizService';

const { width: W } = Dimensions.get('window');

const SIZE_META: Record<RoundSizeOption, { desc: string; icon: string; color: string }> = {
  10: { desc: '가볍게', icon: '⚡', color: '#22C55E' },
  20: { desc: '적당히', icon: '📖', color: '#1CB0F6' },
  50: { desc: '집중해서', icon: '🔥', color: '#FF9600' },
  100: { desc: '풀코스', icon: '🏆', color: '#A435F0' },
};

interface RoundSizePickerScreenProps {
  onPickSize: (size: RoundSizeOption) => void;
}

export function RoundSizePickerScreen({ onPickSize }: RoundSizePickerScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* App branding */}
        <View style={styles.brandArea}>
          <Text style={styles.brandIcon}>W</Text>
          <Text style={styles.brandTitle}>Word Master</Text>
          <Text style={styles.brandSub}>영어 단어 퀴즈</Text>
        </View>

        <Text style={styles.sectionTitle}>문제 수를 선택하세요</Text>

        <View style={styles.grid}>
          {ROUND_SIZE_OPTIONS.map((size) => {
            const meta = SIZE_META[size];
            return (
              <TouchableOpacity
                key={size}
                style={[styles.card, { borderColor: meta.color + '30' }]}
                activeOpacity={0.7}
                onPress={() => onPickSize(size)}
              >
                <Text style={styles.cardIcon}>{meta.icon}</Text>
                <Text style={[styles.cardNumber, { color: meta.color }]}>{size}</Text>
                <Text style={styles.cardUnit}>문제</Text>
                <View style={[styles.descBadge, { backgroundColor: meta.color + '14' }]}>
                  <Text style={[styles.cardDesc, { color: meta.color }]}>{meta.desc}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const cardSize = Math.min((W - 56) / 2, 164);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F8FAFB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  // ── Brand area ──
  brandArea: {
    alignItems: 'center',
    marginBottom: 48,
  },
  brandIcon: {
    fontSize: 40,
    fontWeight: '900',
    color: '#fff',
    backgroundColor: '#1CB0F6',
    width: 64,
    height: 64,
    lineHeight: 64,
    textAlign: 'center',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1D26',
    letterSpacing: -0.5,
  },
  brandSub: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
    marginTop: 4,
  },
  // ── Section ──
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 20,
  },
  // ── Grid ──
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
    maxWidth: cardSize * 2 + 14,
  },
  card: {
    width: cardSize,
    height: cardSize + 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    shadowColor: '#1CB0F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 6,
  },
  cardNumber: {
    fontSize: 38,
    fontWeight: '800',
  },
  cardUnit: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9CA3AF',
    marginTop: 1,
  },
  descBadge: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 8,
  },
  cardDesc: {
    fontSize: 12,
    fontWeight: '700',
  },
});
