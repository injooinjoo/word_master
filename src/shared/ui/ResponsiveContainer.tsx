import React from 'react';
import { Platform, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

export interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
  paddingHorizontal?: number;
  style?: StyleProp<ViewStyle>;
}

export function ResponsiveContainer({
  children,
  maxWidth = 393,
  paddingHorizontal = 0,
  style,
}: ResponsiveContainerProps) {
  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          Platform.OS === 'web' ? { maxWidth, width: '100%' } : styles.mobile,
          paddingHorizontal > 0 ? { paddingHorizontal } : null,
          style,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    width: '100%',
  },
  mobile: {
    maxWidth: undefined,
  },
});
