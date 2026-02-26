import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import type { LearningTipEntry } from '../../../data/models/vocab';
import { Colors } from '../../../shared/constants/theme';

interface LearningTipCardProps {
  entry: LearningTipEntry;
  title?: string | null;
}

export function LearningTipCard({ entry, title }: LearningTipCardProps) {
  const hasImage = entry.imageUrl && entry.imageUrl.length > 0;
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        {title != null && title.length > 0 && (
          <Text style={styles.title}>{title}</Text>
        )}
        {hasImage && (
          <>
            <View style={styles.imageWrap}>
              <Image
                source={{ uri: entry.imageUrl! }}
                style={styles.image}
                contentFit="cover"
              />
            </View>
            <View style={styles.spacer} />
          </>
        )}
        <Text style={styles.text}>{entry.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  inner: {
    padding: 16,
  },
  title: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 8,
  },
  imageWrap: {
    height: 160,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  spacer: {
    height: 12,
  },
  text: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});
