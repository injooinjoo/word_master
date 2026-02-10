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
const PRIMARY = '#1CB0F6';

const SIZE_DESCRIPTIONS: Record<RoundSizeOption, string> = {
  10: '가볍게',
  20: '적당히',
  50: '집중해서',
  100: '풀코스',
};

interface RoundSizePickerScreenProps {
  onPickSize: (size: RoundSizeOption) => void;
}

export function RoundSizePickerScreen({ onPickSize }: RoundSizePickerScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>문제 수 선택</Text>
        <Text style={styles.subtitle}>몇 문제를 풀까요?</Text>

        <View style={styles.grid}>
          {ROUND_SIZE_OPTIONS.map((size) => (
            <TouchableOpacity
              key={size}
              style={styles.card}
              activeOpacity={0.7}
              onPress={() => onPickSize(size)}
            >
              <Text style={styles.cardNumber}>{size}</Text>
              <Text style={styles.cardUnit}>문제</Text>
              <Text style={styles.cardDesc}>{SIZE_DESCRIPTIONS[size]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const cardSize = Math.min((W - 64) / 2, 160);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    maxWidth: cardSize * 2 + 16,
  },
  card: {
    width: cardSize,
    height: cardSize,
    backgroundColor: '#F7FBFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: PRIMARY + '30',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardNumber: {
    fontSize: 36,
    fontWeight: '800',
    color: PRIMARY,
  },
  cardUnit: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 2,
  },
  cardDesc: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 6,
    fontWeight: '600',
  },
});
