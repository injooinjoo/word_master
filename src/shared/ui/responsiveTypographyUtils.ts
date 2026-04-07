const BASE_DEVICE_WIDTH = 393;
const MIN_DEVICE_SCALE = 0.92;
const MAX_DEVICE_SCALE = 1.1;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function resolveDeviceTypographyScale(width: number, height: number): number {
  const shortestSide = Math.min(width, height);

  if (!Number.isFinite(shortestSide) || shortestSide <= 0) {
    return 1;
  }

  return clamp(shortestSide / BASE_DEVICE_WIDTH, MIN_DEVICE_SCALE, MAX_DEVICE_SCALE);
}

export function scaleFontSize(baseSize: number, scale: number): number {
  return Math.round(baseSize * scale * 10) / 10;
}

export function scaleLineHeight(
  baseSize: number,
  ratio: number,
  scale: number,
  fontScale: number,
): number {
  const resolvedFontScale = Number.isFinite(fontScale) && fontScale > 1 ? fontScale : 1;
  return Math.round(scaleFontSize(baseSize, scale) * ratio * resolvedFontScale);
}
