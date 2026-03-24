export interface AppFeatureFlags {
  authEnabled: boolean;
  scoreSyncEnabled: boolean;
  adsEnabled: boolean;
}

interface FeatureLikeShape {
  authEnabled?: boolean | string | null;
  scoreSyncEnabled?: boolean | string | null;
  adsEnabled?: boolean | string | null;
}

function coerceBooleanFlag(value: boolean | string | null | undefined, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
    if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  }
  return fallback;
}

export function resolveAppFeatureFlags(
  rawFeatures: FeatureLikeShape | null | undefined,
  defaults: AppFeatureFlags = {
    authEnabled: true,
    scoreSyncEnabled: true,
    adsEnabled: true,
  },
): AppFeatureFlags {
  const features = rawFeatures ?? {};

  return {
    authEnabled: coerceBooleanFlag(features.authEnabled, defaults.authEnabled),
    scoreSyncEnabled: coerceBooleanFlag(features.scoreSyncEnabled, defaults.scoreSyncEnabled),
    adsEnabled: coerceBooleanFlag(features.adsEnabled, defaults.adsEnabled),
  };
}
