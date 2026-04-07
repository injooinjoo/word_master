import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, withAlpha } from '../../../shared/constants/theme';
import type { CharacterProfile, ExpressionId, HairColorId, OutfitColorId } from '../../../shared/models/characterProfile';

interface CharacterAvatarProps {
  profile: CharacterProfile;
  size?: number;
}

const HAIR_COLORS: Record<HairColorId, string> = {
  teal: '#138D90',
  amber: '#D68A18',
  charcoal: '#34424F',
  rose: '#D26A79',
};

const OUTFIT_COLORS: Record<OutfitColorId, string> = {
  mint: '#7ECFB4',
  sky: '#5CA8EB',
  gold: '#E0A11C',
  coral: '#E57C63',
};

function Eye({ closed = false }: { closed?: boolean }) {
  return <View style={[styles.eye, closed && styles.eyeClosed]} />;
}

function Mouth({ expression }: { expression: ExpressionId }) {
  if (expression === 'calm') {
    return <View style={styles.calmMouth} />;
  }

  return (
    <View
      style={[
        styles.mouth,
        expression === 'wink' && styles.winkMouth,
      ]}
    />
  );
}

export function CharacterAvatar({ profile, size = 132 }: CharacterAvatarProps) {
  const headSize = Math.round(size * 0.48);
  const outfitWidth = Math.round(size * 0.56);
  const outfitHeight = Math.round(size * 0.34);
  const hairColor = HAIR_COLORS[profile.avatar.hairColor];
  const outfitColor = OUTFIT_COLORS[profile.avatar.outfitColor];

  return (
    <View style={[styles.frame, { width: size, height: size }]}>
      <View
        style={[
          styles.shadow,
          {
            width: size * 0.62,
            height: size * 0.12,
            borderRadius: size * 0.06,
            bottom: size * 0.08,
          },
        ]}
      />
      <View
        style={[
          styles.glow,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />
      <View
        style={[
          styles.outfit,
          {
            width: outfitWidth,
            height: outfitHeight,
            borderRadius: outfitHeight * 0.46,
            backgroundColor: outfitColor,
            bottom: size * 0.14,
          },
        ]}
      />
      <View
        style={[
          styles.head,
          {
            width: headSize,
            height: headSize,
            borderRadius: headSize / 2,
            top: size * 0.14,
          },
        ]}
      >
        <View
          style={[
            styles.hairCap,
            {
              backgroundColor: hairColor,
              height: headSize * 0.42,
            },
            profile.avatar.hairStyle === 'bob' && styles.hairCapBob,
            profile.avatar.hairStyle === 'tuft' && styles.hairCapTuft,
          ]}
        />
        {profile.avatar.hairStyle === 'bob' && (
          <>
            <View
              style={[
                styles.sideLock,
                {
                  backgroundColor: hairColor,
                  left: headSize * 0.04,
                  height: headSize * 0.34,
                  top: headSize * 0.18,
                },
              ]}
            />
            <View
              style={[
                styles.sideLock,
                {
                  backgroundColor: hairColor,
                  right: headSize * 0.04,
                  height: headSize * 0.34,
                  top: headSize * 0.18,
                },
              ]}
            />
          </>
        )}
        {profile.avatar.hairStyle === 'tuft' && (
          <View
            style={[
              styles.tuft,
              {
                backgroundColor: hairColor,
                width: headSize * 0.18,
                height: headSize * 0.32,
                left: headSize * 0.54,
                top: headSize * -0.02,
                borderRadius: headSize * 0.12,
              },
            ]}
          />
        )}
        <View style={[styles.face, { paddingTop: headSize * 0.42 }]}>
          <View style={styles.eyesRow}>
            <Eye closed={profile.avatar.expression === 'calm'} />
            <Eye closed={profile.avatar.expression === 'wink'} />
          </View>
          <Mouth expression={profile.avatar.expression} />
        </View>
      </View>
      <View
        style={[
          styles.badge,
          {
            width: size * 0.18,
            height: size * 0.18,
            borderRadius: size * 0.09,
            top: size * 0.08,
            right: size * 0.06,
            backgroundColor: withAlpha(outfitColor, '30'),
            borderColor: withAlpha(outfitColor, '60'),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.primary, '14'),
  },
  shadow: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.shadow, '16'),
  },
  outfit: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '12'),
  },
  head: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: '#F7D7BE',
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '12'),
  },
  hairCap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 18,
  },
  hairCapBob: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  hairCapTuft: {
    borderBottomRightRadius: 8,
  },
  sideLock: {
    position: 'absolute',
    width: 14,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  tuft: {
    position: 'absolute',
    transform: [{ rotate: '-18deg' }],
  },
  face: {
    flex: 1,
    alignItems: 'center',
  },
  eyesRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
  },
  eye: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.textPrimary,
  },
  eyeClosed: {
    height: 3,
    borderRadius: 999,
    marginTop: 4,
  },
  mouth: {
    width: 24,
    height: 12,
    borderBottomWidth: 3,
    borderBottomColor: Colors.textPrimary,
    borderRadius: 12,
  },
  winkMouth: {
    width: 28,
  },
  calmMouth: {
    width: 22,
    height: 3,
    borderRadius: 999,
    backgroundColor: Colors.textPrimary,
  },
  badge: {
    position: 'absolute',
    borderWidth: 1,
  },
});
