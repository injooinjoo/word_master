function resolveEnv(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed.length > 0) {
        return trimmed;
      }
    }
  }
  return '';
}

function resolveBooleanEnv(keys, fallback) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value !== 'string') continue;

    const normalized = value.trim().toLowerCase();
    if (['1', 'true', 'yes', 'on'].includes(normalized)) {
      return true;
    }
    if (['0', 'false', 'no', 'off'].includes(normalized)) {
      return false;
    }
  }

  return fallback;
}

const appVariant = resolveEnv('APP_VARIANT', 'EAS_BUILD_PROFILE') || 'development';
const isReleaseLikeVariant = appVariant === 'preview' || appVariant === 'production';
const authEnabled = resolveBooleanEnv(['EXPO_PUBLIC_ENABLE_AUTH', 'ENABLE_AUTH'], true);
const scoreSyncEnabled = resolveBooleanEnv(
  ['EXPO_PUBLIC_ENABLE_SCORE_SYNC', 'ENABLE_SCORE_SYNC'],
  !isReleaseLikeVariant,
);
const adsEnabled = resolveBooleanEnv(['EXPO_PUBLIC_ENABLE_ADS', 'ENABLE_ADS'], !isReleaseLikeVariant);
const backendEnabled = authEnabled || scoreSyncEnabled;
const supabaseUrl = backendEnabled ? resolveEnv('EXPO_PUBLIC_SUPABASE_URL', 'SUPABASE_URL') : '';
const supabaseAnonKey = backendEnabled
  ? resolveEnv('EXPO_PUBLIC_SUPABASE_ANON_KEY', 'SUPABASE_ANON_KEY')
  : '';

const iosInfoPlist = {
  ITSAppUsesNonExemptEncryption: false,
};

module.exports = {
  name: 'Word Master',
  slug: 'word_master',
  version: '1.0.0',
  description: 'Adaptive English vocabulary practice with guest mode, optional sign-in, and on-device progress.',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.beyond.wordmaster',
    infoPlist: iosInfoPlist,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '2504435b-37fc-4b2e-8232-37af5b525221',
    },
    appVariant,
    features: {
      authEnabled,
      scoreSyncEnabled,
      adsEnabled,
    },
    supabaseUrl,
    supabaseAnonKey,
  },
};
