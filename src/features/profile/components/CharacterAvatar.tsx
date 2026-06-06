import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Typography, withAlpha } from '../../../shared/constants/theme';
import type { CharacterProfile, ExpressionId, HairColorId, OutfitColorId } from '../../../shared/models/characterProfile';

interface CharacterAvatarProps {
  profile: CharacterProfile;
  size?: number;
}

const HAIR_COLORS: Record<HairColorId, string> = {
  teal: Colors.correctDark,
  amber: Colors.warningDark,
  charcoal: Colors.textSecondary,
  rose: Colors.wrongDark,
};

const OUTFIT_COLORS: Record<OutfitColorId, string> = {
  mint: Colors.correct,
  sky: Colors.primary,
  gold: Colors.warning,
  coral: Colors.wrong,
};

const px = (size: number, ratio: number) => Math.round(size * ratio);

function Eye({ closed = false, size }: { closed?: boolean; size: number }) {
  if (closed) {
    return (
      <View
        style={[
          styles.eyeClosed,
          {
            width: px(size, 0.11),
            height: Math.max(2, px(size, 0.018)),
            borderRadius: px(size, 0.02),
            marginTop: px(size, 0.025),
          },
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.eye,
        {
          width: px(size, 0.09),
          height: px(size, 0.105),
          borderRadius: px(size, 0.045),
        },
      ]}
    >
      <View
        style={[
          styles.eyeHighlight,
          {
            width: Math.max(2, px(size, 0.025)),
            height: Math.max(2, px(size, 0.025)),
            borderRadius: px(size, 0.02),
            top: px(size, 0.018),
            left: px(size, 0.018),
          },
        ]}
      />
    </View>
  );
}

function Mouth({ expression, size }: { expression: ExpressionId; size: number }) {
  if (expression === 'calm') {
    return (
      <View
        style={[
          styles.calmMouth,
          {
            width: px(size, 0.18),
            height: Math.max(2, px(size, 0.022)),
            borderRadius: px(size, 0.02),
            marginTop: px(size, 0.02),
          },
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.mouth,
        {
          width: px(size, expression === 'wink' ? 0.24 : 0.2),
          height: px(size, 0.11),
          borderBottomWidth: Math.max(2, px(size, 0.026)),
          borderRadius: px(size, 0.08),
          marginTop: px(size, 0.004),
        },
      ]}
    />
  );
}

export function CharacterAvatar({ profile, size = 132 }: CharacterAvatarProps) {
  const hairColor = HAIR_COLORS[profile.avatar.hairColor];
  const outfitColor = OUTFIT_COLORS[profile.avatar.outfitColor];
  const headSize = px(size, 0.56);
  const faceTop = px(size, 0.18);
  const bodyWidth = px(size, 0.66);
  const bodyHeight = px(size, 0.36);
  const earSize = px(size, 0.13);
  const isCompact = size < 64;

  return (
    <View
      style={[styles.frame, { width: size, height: size, borderRadius: px(size, 0.28) }]}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <View
        style={[
          styles.backplate,
          {
            inset: px(size, 0.035),
            borderRadius: px(size, 0.28),
          },
        ]}
      />
      <View
        style={[
          styles.orbitLarge,
          {
            width: px(size, 0.72),
            height: px(size, 0.72),
            borderRadius: px(size, 0.36),
            top: px(size, 0.02),
            left: px(size, 0.08),
          },
        ]}
      />
      <View
        style={[
          styles.orbitSmall,
          {
            width: px(size, 0.42),
            height: px(size, 0.42),
            borderRadius: px(size, 0.21),
            right: px(size, 0.05),
            top: px(size, 0.12),
          },
        ]}
      />
      <View
        style={[
          styles.shadow,
          {
            width: px(size, 0.62),
            height: px(size, 0.11),
            borderRadius: px(size, 0.08),
            bottom: px(size, 0.065),
          },
        ]}
      />

      <View
        style={[
          styles.leftArm,
          {
            width: px(size, 0.2),
            height: px(size, 0.1),
            borderRadius: px(size, 0.06),
            left: px(size, 0.13),
            bottom: px(size, 0.23),
            backgroundColor: outfitColor,
          },
        ]}
      />
      <View
        style={[
          styles.rightArm,
          {
            width: px(size, 0.2),
            height: px(size, 0.1),
            borderRadius: px(size, 0.06),
            right: px(size, 0.13),
            bottom: px(size, 0.23),
            backgroundColor: outfitColor,
          },
        ]}
      />

      <View
        style={[
          styles.body,
          {
            width: bodyWidth,
            height: bodyHeight,
            borderRadius: px(size, 0.18),
            bottom: px(size, 0.095),
            backgroundColor: outfitColor,
          },
        ]}
      >
        <View
          style={[
            styles.bodyHighlight,
            {
              width: px(size, 0.3),
              height: px(size, 0.1),
              borderRadius: px(size, 0.06),
              top: px(size, 0.055),
              left: px(size, 0.08),
            },
          ]}
        />
        {!isCompact ? (
          <View
            style={[
              styles.studyBook,
              {
                width: px(size, 0.3),
                height: px(size, 0.13),
                borderRadius: px(size, 0.035),
                bottom: px(size, 0.035),
              },
            ]}
          >
            <View style={styles.bookDivider} />
          </View>
        ) : null}
        <View
          style={[
            styles.collar,
            {
              width: px(size, 0.2),
              height: px(size, 0.075),
              borderBottomLeftRadius: px(size, 0.05),
              borderBottomRightRadius: px(size, 0.05),
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.neck,
          {
            width: px(size, 0.18),
            height: px(size, 0.16),
            borderRadius: px(size, 0.06),
            top: px(size, 0.5),
          },
        ]}
      />

      <View
        style={[
          styles.ear,
          {
            width: earSize,
            height: earSize,
            borderRadius: earSize / 2,
            top: faceTop + px(size, 0.19),
            left: px(size, 0.185),
          },
        ]}
      />
      <View
        style={[
          styles.ear,
          {
            width: earSize,
            height: earSize,
            borderRadius: earSize / 2,
            top: faceTop + px(size, 0.19),
            right: px(size, 0.185),
          },
        ]}
      />

      <View
        style={[
          styles.head,
          {
            width: headSize,
            height: headSize,
            borderRadius: px(size, 0.24),
            top: faceTop,
          },
        ]}
      >
        <View
          style={[
            styles.hairBase,
            {
              backgroundColor: hairColor,
              height: px(size, 0.22),
              borderBottomLeftRadius: px(size, profile.avatar.hairStyle === 'bob' ? 0.12 : 0.16),
              borderBottomRightRadius: px(size, profile.avatar.hairStyle === 'short' ? 0.08 : 0.15),
            },
          ]}
        />
        <View
          style={[
            styles.hairShine,
            {
              width: px(size, 0.24),
              height: px(size, 0.04),
              borderRadius: px(size, 0.03),
              top: px(size, 0.055),
              left: px(size, 0.18),
            },
          ]}
        />
        {profile.avatar.hairStyle === 'bob' ? (
          <>
            <View
              style={[
                styles.sideLock,
                {
                  backgroundColor: hairColor,
                  width: px(size, 0.12),
                  height: px(size, 0.28),
                  borderRadius: px(size, 0.07),
                  left: px(size, -0.005),
                  top: px(size, 0.13),
                },
              ]}
            />
            <View
              style={[
                styles.sideLock,
                {
                  backgroundColor: hairColor,
                  width: px(size, 0.12),
                  height: px(size, 0.28),
                  borderRadius: px(size, 0.07),
                  right: px(size, -0.005),
                  top: px(size, 0.13),
                },
              ]}
            />
          </>
        ) : null}
        {profile.avatar.hairStyle === 'tuft' ? (
          <>
            <View
              style={[
                styles.tuft,
                {
                  backgroundColor: hairColor,
                  width: px(size, 0.16),
                  height: px(size, 0.29),
                  borderRadius: px(size, 0.08),
                  left: px(size, 0.34),
                  top: px(size, -0.02),
                },
              ]}
            />
            <View
              style={[
                styles.tuftSecondary,
                {
                  backgroundColor: hairColor,
                  width: px(size, 0.11),
                  height: px(size, 0.2),
                  borderRadius: px(size, 0.07),
                  left: px(size, 0.43),
                  top: px(size, 0.015),
                },
              ]}
            />
          </>
        ) : null}

        <View style={[styles.face, { paddingTop: px(size, 0.255) }]}>
          <View style={[styles.eyesRow, { gap: px(size, 0.115), marginBottom: px(size, 0.035) }]}>
            <Eye closed={profile.avatar.expression === 'calm'} size={size} />
            <Eye closed={profile.avatar.expression === 'wink'} size={size} />
          </View>
          <View style={styles.cheekRow}>
            <View style={[styles.cheek, { width: px(size, 0.08), height: px(size, 0.035), borderRadius: px(size, 0.03) }]} />
            <View style={[styles.cheek, { width: px(size, 0.08), height: px(size, 0.035), borderRadius: px(size, 0.03) }]} />
          </View>
          <Mouth expression={profile.avatar.expression} size={size} />
        </View>
      </View>

      {!isCompact ? (
        <View
          style={[
            styles.badge,
            {
              width: px(size, 0.22),
              height: px(size, 0.22),
              borderRadius: px(size, 0.11),
              top: px(size, 0.085),
              right: px(size, 0.04),
              backgroundColor: Colors.warningLight,
              borderColor: withAlpha(outfitColor, '70'),
            },
          ]}
        >
          <Text
            style={[
              styles.badgeStar,
              {
                fontSize: px(size, 0.105),
                lineHeight: px(size, 0.14),
              },
            ]}
          >
            ★
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backplate: {
    position: 'absolute',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
  },
  orbitLarge: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.primary, '12'),
  },
  orbitSmall: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: withAlpha(Colors.primary, '20'),
    backgroundColor: withAlpha(Colors.white, '70'),
  },
  shadow: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.shadow, '18'),
  },
  body: {
    position: 'absolute',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '14'),
    overflow: 'hidden',
  },
  bodyHighlight: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.white, '30'),
  },
  leftArm: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '12'),
    transform: [{ rotate: '20deg' }],
  },
  rightArm: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '12'),
    transform: [{ rotate: '-20deg' }],
  },
  studyBook: {
    position: 'absolute',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: withAlpha(Colors.shadow, '14'),
    alignItems: 'center',
  },
  bookDivider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.borderLight,
  },
  collar: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: withAlpha(Colors.shadow, '10'),
  },
  neck: {
    position: 'absolute',
    backgroundColor: Colors.warningLight,
    borderWidth: 1,
    borderColor: withAlpha(Colors.warning, '18'),
  },
  ear: {
    position: 'absolute',
    backgroundColor: Colors.warningLight,
    borderWidth: 1,
    borderColor: withAlpha(Colors.warning, '18'),
  },
  head: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: Colors.warningLight,
    borderWidth: 1,
    borderColor: withAlpha(Colors.warning, '24'),
  },
  hairBase: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  hairShine: {
    position: 'absolute',
    backgroundColor: withAlpha(Colors.white, '26'),
    transform: [{ rotate: '-12deg' }],
  },
  sideLock: {
    position: 'absolute',
  },
  tuft: {
    position: 'absolute',
    transform: [{ rotate: '-18deg' }],
  },
  tuftSecondary: {
    position: 'absolute',
    transform: [{ rotate: '18deg' }],
  },
  face: {
    flex: 1,
    alignItems: 'center',
  },
  eyesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eye: {
    backgroundColor: Colors.textPrimary,
  },
  eyeHighlight: {
    position: 'absolute',
    backgroundColor: Colors.white,
  },
  eyeClosed: {
    backgroundColor: Colors.textPrimary,
  },
  cheekRow: {
    position: 'absolute',
    top: '53%',
    left: '20%',
    right: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cheek: {
    backgroundColor: withAlpha(Colors.wrong, '22'),
  },
  mouth: {
    borderBottomColor: Colors.textPrimary,
  },
  calmMouth: {
    backgroundColor: Colors.textPrimary,
  },
  badge: {
    position: 'absolute',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeStar: {
    color: Colors.warning,
    fontWeight: Typography.weightExtraBold,
  },
});
