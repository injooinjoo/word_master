export const RELEASE_ENV = {
  APP_VARIANT: 'production',
  EXPO_PUBLIC_ENABLE_AUTH: 'true',
  EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
  EXPO_PUBLIC_ENABLE_ADS: 'false',
};

export const DEVELOPMENT_ENV = {
  APP_VARIANT: 'development',
  EXPO_PUBLIC_ENABLE_AUTH: 'true',
  EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'true',
  EXPO_PUBLIC_ENABLE_ADS: 'true',
};

function pushIssue(issues, condition, message) {
  if (!condition) {
    issues.push(message);
  }
}

export function validateResolvedExpoConfig(exp) {
  const issues = [];
  const features = exp?.extra?.features ?? {};
  const plugins = Array.isArray(exp?.plugins) ? exp.plugins : [];
  const hasAdMobPlugin = plugins.some((plugin) => Array.isArray(plugin) && plugin[0] === 'react-native-google-mobile-ads');
  const infoPlist = exp?.ios?.infoPlist ?? {};

  pushIssue(issues, exp?.name === 'Word Master', 'App name must be "Word Master".');
  pushIssue(issues, exp?.slug === 'word_master', 'Expo slug must remain "word_master".');
  pushIssue(
    issues,
    typeof exp?.description === 'string' && exp.description.trim().length > 0,
    'Expo config must define a non-empty app description.',
  );
  pushIssue(issues, exp?.ios?.supportsTablet === true, 'iOS build must keep iPad support enabled.');
  pushIssue(issues, features.authEnabled === true, 'Release config must enable auth.');
  pushIssue(issues, features.scoreSyncEnabled === false, 'Release config must disable score sync.');
  pushIssue(issues, features.adsEnabled === false, 'Release config must disable ads.');
  pushIssue(issues, hasAdMobPlugin === false, 'Release config must not include the AdMob plugin.');
  pushIssue(
    issues,
    typeof infoPlist.GADApplicationIdentifier === 'undefined',
    'Release config must omit GADApplicationIdentifier when ads are disabled.',
  );
  pushIssue(
    issues,
    typeof exp?.extra?.supabaseUrl === 'string' && exp.extra.supabaseUrl.trim().length > 0,
    'Release config must include a Supabase URL when auth is enabled.',
  );
  pushIssue(
    issues,
    typeof exp?.extra?.supabaseAnonKey === 'string' && exp.extra.supabaseAnonKey.trim().length > 0,
    'Release config must include a Supabase anon key when auth is enabled.',
  );

  return issues;
}

export function validateBuildProfileEnvs(easConfig) {
  const issues = [];
  const build = easConfig?.build ?? {};

  const profiles = {
    development: DEVELOPMENT_ENV,
    preview: { ...RELEASE_ENV, APP_VARIANT: 'preview' },
    production: RELEASE_ENV,
  };

  for (const [profileName, expectedEnv] of Object.entries(profiles)) {
    const actualEnv = build?.[profileName]?.env ?? {};
    for (const [key, expectedValue] of Object.entries(expectedEnv)) {
      if (actualEnv?.[key] !== expectedValue) {
        issues.push(`build.${profileName}.env.${key} must be "${expectedValue}".`);
      }
    }
  }

  return issues;
}

export function validateStoreConfig(storeConfig) {
  const issues = [];
  const info = storeConfig?.apple?.info?.['en-US'];

  pushIssue(issues, storeConfig?.configVersion === 0, 'store.config.json must use configVersion 0.');
  pushIssue(issues, typeof info?.title === 'string' && info.title.trim().length > 0, 'Store config must define an app title.');
  pushIssue(
    issues,
    typeof info?.supportUrl === 'string' && info.supportUrl.startsWith('https://'),
    'Store config must define an HTTPS support URL.',
  );
  pushIssue(
    issues,
    typeof info?.privacyPolicyUrl === 'string' && info.privacyPolicyUrl.startsWith('https://'),
    'Store config must define an HTTPS privacy policy URL.',
  );
  pushIssue(
    issues,
    typeof info?.marketingUrl === 'string' && info.marketingUrl.startsWith('https://'),
    'Store config must define an HTTPS marketing URL.',
  );
  pushIssue(
    issues,
    !String(info?.supportUrl ?? '').includes('/blob/'),
    'Support URL must point to a public page, not a GitHub blob URL.',
  );
  pushIssue(
    issues,
    !String(info?.privacyPolicyUrl ?? '').includes('/blob/'),
    'Privacy policy URL must point to a public page, not a GitHub blob URL.',
  );

  return issues;
}
