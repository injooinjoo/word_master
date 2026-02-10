import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import type { LearningTipEntry } from '../../../data/models/vocab';

const PRIMARY = '#1CB0F6';

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
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  inner: {
    padding: 16,
  },
  title: {
    color: PRIMARY,
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
    color: '#333',
    lineHeight: 22,
  },
});
