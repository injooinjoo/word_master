import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenCard, useResponsiveTypography, useSharedTextStyles } from '../../../shared/ui';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../../../shared/constants/theme';
import type { CharacterProfile } from '../../../shared/models/characterProfile';
import { CharacterAvatar } from './CharacterAvatar';

interface CharacterSummaryCardProps {
  profile: CharacterProfile;
  title: string;
  caption: string;
  compact?: boolean;
}

function displayPreference(value: string): string {
  return value.length > 0 ? value : '아직 정하지 않았어요';
}

export function CharacterSummaryCard({
  profile,
  title,
  caption,
  compact = false,
}: CharacterSummaryCardProps) {
  const typography = useResponsiveTypography();
  const sharedTextStyles = useSharedTextStyles();

  return (
    <ScreenCard style={[styles.card, compact && styles.cardCompact]}>
      <View style={[styles.avatarWrap, compact && styles.avatarWrapCompact]}>
        <CharacterAvatar profile={profile} size={compact ? 92 : 128} />
      </View>
      <View style={styles.content}>
        <Text style={sharedTextStyles.eyebrow}>Character</Text>
        <Text
          style={[
            styles.title,
            {
              fontSize: compact ? typography.sizes.size18 : typography.sizes.size23,
            },
          ]}
        >
          {title}
        </Text>
        <Text style={styles.caption}>{caption}</Text>

        <View style={styles.preferenceGrid}>
          <View style={styles.preferenceCard}>
            <Text style={styles.preferenceLabel}>좋아하는 것</Text>
            <Text style={styles.preferenceValue}>{displayPreference(profile.likes)}</Text>
          </View>
          <View style={styles.preferenceCard}>
            <Text style={styles.preferenceLabel}>싫어하는 것</Text>
            <Text style={styles.preferenceValue}>{displayPreference(profile.dislikes)}</Text>
          </View>
        </View>
      </View>
    </ScreenCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    gap: Spacing.md,
    alignItems: 'center',
  },
  cardCompact: {
    alignItems: 'flex-start',
  },
  avatarWrap: {
    borderRadius: Radius.xl,
    backgroundColor: withAlpha(Colors.primary, '10'),
    padding: Spacing.sm,
  },
  avatarWrapCompact: {
    marginTop: Spacing.xs,
  },
  content: {
    flex: 1,
    gap: Spacing.xs,
  },
  title: {
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  caption: {
    fontSize: Typography.size12,
    lineHeight: 18,
    fontWeight: Typography.weightMedium,
    color: Colors.textSecondary,
  },
  preferenceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginTop: Spacing.xs,
  },
  preferenceCard: {
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 120,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.surfaceTint,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: 4,
  },
  preferenceLabel: {
    fontSize: Typography.size11,
    fontWeight: Typography.weightBold,
    color: Colors.textMuted,
  },
  preferenceValue: {
    fontSize: Typography.size13,
    lineHeight: 19,
    fontWeight: Typography.weightSemiBold,
    color: Colors.textPrimary,
  },
});
