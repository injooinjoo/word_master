import React, { createContext, useContext, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { Typography } from '../constants/theme';
import {
  resolveDeviceTypographyScale,
  scaleFontSize,
  scaleLineHeight,
} from './responsiveTypographyUtils';

const TYPOGRAPHY_SIZE_KEYS = [
  'size11',
  'size12',
  'size13',
  'size15',
  'size18',
  'size23',
  'size30',
  'size34',
] as const;

type ResponsiveTypographySizeKey = (typeof TYPOGRAPHY_SIZE_KEYS)[number];

export { resolveDeviceTypographyScale, scaleFontSize, scaleLineHeight };

export type ResponsiveTypographySizes = Record<ResponsiveTypographySizeKey, number>;

export interface ResponsiveTypographyValue {
  fontScale: number;
  scale: number;
  sizes: ResponsiveTypographySizes;
  fontSize: (baseSize: number) => number;
  lineHeight: (baseSize: number, ratio: number) => number;
}

const ResponsiveTypographyContext = createContext<ResponsiveTypographyValue | null>(null);

interface ResponsiveTypographyProviderProps {
  children: React.ReactNode;
}

export function ResponsiveTypographyProvider({
  children,
}: ResponsiveTypographyProviderProps) {
  const { width, height, fontScale = 1 } = useWindowDimensions();

  const value = useMemo<ResponsiveTypographyValue>(() => {
    const scale = resolveDeviceTypographyScale(width, height);
    const sizes = TYPOGRAPHY_SIZE_KEYS.reduce<ResponsiveTypographySizes>((acc, key) => {
      acc[key] = scaleFontSize(Typography[key], scale);
      return acc;
    }, {} as ResponsiveTypographySizes);

    return {
      fontScale,
      scale,
      sizes,
      fontSize: (baseSize: number) => scaleFontSize(baseSize, scale),
      lineHeight: (baseSize: number, ratio: number) =>
        scaleLineHeight(baseSize, ratio, scale, fontScale),
    };
  }, [fontScale, height, width]);

  return (
    <ResponsiveTypographyContext.Provider value={value}>
      {children}
    </ResponsiveTypographyContext.Provider>
  );
}

export function useResponsiveTypography(): ResponsiveTypographyValue {
  const context = useContext(ResponsiveTypographyContext);

  if (context == null) {
    throw new Error('useResponsiveTypography must be used inside ResponsiveTypographyProvider.');
  }

  return context;
}
