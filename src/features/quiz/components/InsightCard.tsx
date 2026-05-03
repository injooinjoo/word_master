import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Elevation, Radius, Spacing, Typography } from '../../../shared/constants/theme';
import type { InsightCardSpec, InsightVariant } from '../lib/insightSelectors';

const VARIANT_ACCENTS: Record<InsightVariant, { color: string; glyph: string }> = {
  etymology:   { color: '#6F4DCF', glyph: '⏳' },
  roots:       { color: '#8C6E14', glyph: '🌱' },
  mnemonic:    { color: '#118A8F', glyph: '🔊' },
  synonyms:    { color: '#198754', glyph: '＝' },
  antonyms:    { color: '#D24D57', glyph: '⇄' },
  originStory: { color: '#2E5BFF', glyph: '📖' },
  examples:    { color: '#1A99C2', glyph: '“' },
  visual:      { color: '#E08F22', glyph: '◐' },
};

export interface InsightCardProps {
  spec: InsightCardSpec;
}

export function InsightCard({ spec }: InsightCardProps) {
  const accent = VARIANT_ACCENTS[spec.variant];
  const hasBody = !!spec.body && spec.body.trim().length > 0;
  const hasChips = !!spec.chips && spec.chips.length > 0;
  const hasRoots = !!spec.roots && spec.roots.length > 0;
  const hasExamples = !!spec.examples && spec.examples.length > 0;
  const hasImage = !!spec.imageUrl;

  if (!hasBody && !hasChips && !hasRoots && !hasExamples && !hasImage) return null;

  const accessibilityLabel = buildA11yLabel(spec);

  return (
    <View
      style={styles.card}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="summary"
    >
      <View style={styles.header}>
        <View style={[styles.iconCircle, { backgroundColor: `${accent.color}1F` }]}>
          <Text style={[styles.iconGlyph, { color: accent.color }]}>{accent.glyph}</Text>
        </View>
        <Text style={styles.title}>{spec.title}</Text>
      </View>

      {hasImage && (
        <Image
          source={{ uri: spec.imageUrl as string }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {hasBody && <Text style={styles.body}>{spec.body}</Text>}

      {hasRoots && (
        <View style={styles.rootsRow}>
          {spec.roots!.map((r, i) => (
            <View key={`${r.morph}-${i}`} style={styles.rootTile}>
              <Text style={styles.rootMorph}>{r.morph}</Text>
              {r.origin ? <Text style={styles.rootOrigin}>{r.origin.toUpperCase()}</Text> : null}
              <Text style={styles.rootGloss}>{r.gloss}</Text>
            </View>
          ))}
        </View>
      )}

      {hasChips && (
        <View style={styles.chipsRow}>
          {spec.chips!.map((c, i) => (
            <View
              key={`${c}-${i}`}
              style={[
                styles.chip,
                spec.variant === 'antonyms' ? styles.chipAntonym : styles.chipSynonym,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  spec.variant === 'antonyms' ? styles.chipAntonymText : styles.chipSynonymText,
                ]}
              >
                {c}
              </Text>
            </View>
          ))}
        </View>
      )}

      {hasExamples && (
        <View style={styles.exampleList}>
          {spec.examples!.map((ex, i) => (
            <View
              key={`${ex.en}-${i}`}
              style={[styles.exampleRow, i > 0 && styles.exampleRowDivider]}
            >
              <Text style={styles.exampleEn}>{ex.en}</Text>
              <Text style={styles.exampleKo}>{ex.ko}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

function buildA11yLabel(spec: InsightCardSpec): string {
  const parts: string[] = [spec.title];
  if (spec.body) parts.push(spec.body);
  if (spec.chips && spec.chips.length > 0) parts.push(spec.chips.join(', '));
  if (spec.roots && spec.roots.length > 0) {
    parts.push(spec.roots.map((r) => `${r.morph} ${r.gloss}`).join(', '));
  }
  if (spec.examples && spec.examples.length > 0) {
    parts.push(spec.examples.map((e) => `${e.en} ${e.ko}`).join(' '));
  }
  return parts.join(': ');
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgSurface,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    ...Elevation.sm,
    gap: Spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlyph: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightExtraBold,
  },
  title: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightBold,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: Typography.size15,
    lineHeight: 22,
    color: Colors.textPrimary,
    fontWeight: Typography.weightMedium,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
    backgroundColor: Colors.bgCanvas,
  },
  rootsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  rootTile: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    backgroundColor: '#F7F4EC',
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: '#EADFC4',
    minWidth: 96,
  },
  rootMorph: {
    fontSize: Typography.size18,
    fontWeight: Typography.weightExtraBold,
    color: '#3B2E0E',
  },
  rootOrigin: {
    marginTop: 2,
    fontSize: Typography.size11,
    color: Colors.textMuted,
    letterSpacing: 0.6,
    fontWeight: Typography.weightBold,
  },
  rootGloss: {
    marginTop: 2,
    fontSize: Typography.size13,
    color: Colors.textSecondary,
    fontWeight: Typography.weightMedium,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  chipSynonym: {
    backgroundColor: Colors.correctLight,
    borderColor: '#C5E2D2',
  },
  chipAntonym: {
    backgroundColor: Colors.wrongLight,
    borderColor: '#F1C9CC',
  },
  chipText: {
    fontSize: Typography.size13,
    fontWeight: Typography.weightSemiBold,
  },
  chipSynonymText: {
    color: Colors.correctDark,
  },
  chipAntonymText: {
    color: Colors.wrongDark,
  },
  exampleList: {
    gap: Spacing.sm,
  },
  exampleRow: {
    paddingTop: 0,
    gap: 2,
  },
  exampleRowDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.divider,
    paddingTop: Spacing.sm,
  },
  exampleEn: {
    fontSize: Typography.size15,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  exampleKo: {
    fontSize: Typography.size13,
    color: Colors.textSecondary,
    lineHeight: 20,
    fontWeight: Typography.weightMedium,
  },
});
