import React from 'react';
import { StyleSheet, View, type StyleProp, type ViewProps, type ViewStyle } from 'react-native';
import { Colors, Radius, Spacing } from '../constants/theme';
import { SharedStyles } from './sharedStyles';

type ScreenCardTone = 'default' | 'tint' | 'warm';

export interface ScreenCardProps extends ViewProps {
  children: React.ReactNode;
  tone?: ScreenCardTone;
  padded?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function ScreenCard({
  children,
  tone = 'default',
  padded = true,
  style,
  ...viewProps
}: ScreenCardProps) {
  return (
    <View
      {...viewProps}
      style={[
        SharedStyles.surfaceCard,
        padded && styles.padded,
        tone === 'tint' && styles.tint,
        tone === 'warm' && styles.warm,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  padded: {
    padding: Spacing.xl,
  },
  tint: {
    backgroundColor: Colors.surfaceTint,
    borderColor: Colors.primaryBorder,
  },
  warm: {
    backgroundColor: Colors.hintBg,
    borderColor: Colors.warningBorder,
    borderRadius: Radius.xl,
  },
});
