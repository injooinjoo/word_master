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
import { Colors, RoundSizeColors } from '../../../shared/constants/theme';

const { width: W } = Dimensions.get('window');

const SIZE_META: Record<RoundSizeOption, { desc: string; icon: string; color: string }> = {
  10: { desc: '가볍게', icon: '⚡', color: RoundSizeColors[10] },
  20: { desc: '적당히', icon: '📖', color: RoundSizeColors[20] },
  50: { desc: '집중해서', icon: '🔥', color: RoundSizeColors[50] },
  100: { desc: '풀코스', icon: '🏆', color: RoundSizeColors[100] },
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
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  brandArea: {
    alignItems: 'center',
    marginBottom: 48,
  },
  brandIcon: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.white,
    backgroundColor: Colors.primary,
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
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  brandSub: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textMuted,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 20,
  },
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
    backgroundColor: Colors.surface,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    shadowColor: Colors.primary,
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
    color: Colors.textMuted,
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
