import assert from 'node:assert/strict';
import test from 'node:test';
import {
  validateBuildProfileEnvs,
  validateResolvedExpoConfig,
  validateStoreConfig,
} from '../scripts/release-config.shared.mjs';

const SAMPLE_PROJECT_ID = '2504435b-37fc-4b2e-8232-37af5b525221';
const SAMPLE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIn0.signature';
const SAMPLE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaXNzIjoic3VwYWJhc2UifQ.signature';

test('validateResolvedExpoConfig accepts guest-only release config', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    runtimeVersion: { policy: 'fingerprint' },
    updates: { url: `https://u.expo.dev/${SAMPLE_PROJECT_ID}` },
    ios: {
      supportsTablet: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    plugins: [],
    extra: {
      eas: { projectId: SAMPLE_PROJECT_ID },
      features: {
        authEnabled: false,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.deepEqual(issues, []);
});

test('validateResolvedExpoConfig flags missing OTA fields', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    ios: {
      supportsTablet: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    plugins: [],
    extra: {
      supabaseUrl: 'https://example.supabase.co',
      supabaseAnonKey: SAMPLE_ANON_KEY,
      features: {
        authEnabled: true,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.equal(
    issues.some((issue) => issue.includes('extra.eas.projectId')),
    true,
  );
  assert.equal(
    issues.some((issue) => issue.includes('runtimeVersion.policy must be "fingerprint"')),
    true,
  );
  assert.equal(
    issues.some((issue) => issue.includes('updates.url must be hosted on u.expo.dev')),
    true,
  );
});

test('validateResolvedExpoConfig rejects ATT usage description when tracking is disabled', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    runtimeVersion: { policy: 'fingerprint' },
    updates: { url: `https://u.expo.dev/${SAMPLE_PROJECT_ID}` },
    ios: {
      supportsTablet: true,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        NSUserTrackingUsageDescription: 'Used to deliver personalized ads.',
      },
    },
    plugins: [],
    extra: {
      eas: { projectId: SAMPLE_PROJECT_ID },
      supabaseUrl: 'https://example.supabase.co',
      supabaseAnonKey: SAMPLE_ANON_KEY,
      features: {
        authEnabled: true,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.equal(
    issues.includes('Release config must omit NSUserTrackingUsageDescription because tracking is disabled.'),
    true,
  );
});

test('validateResolvedExpoConfig rejects service-role Supabase keys', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    runtimeVersion: { policy: 'fingerprint' },
    updates: { url: `https://u.expo.dev/${SAMPLE_PROJECT_ID}` },
    ios: {
      supportsTablet: true,
      infoPlist: { ITSAppUsesNonExemptEncryption: false },
    },
    plugins: [],
    extra: {
      eas: { projectId: SAMPLE_PROJECT_ID },
      supabaseUrl: 'https://example.supabase.co',
      supabaseAnonKey: SAMPLE_SERVICE_ROLE_KEY,
      features: {
        authEnabled: true,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.equal(
    issues.includes('Release config Supabase key must be an anon JWT, never service_role.'),
    true,
  );
});

test('validateResolvedExpoConfig flags wrong runtimeVersion policy', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    runtimeVersion: { policy: 'appVersion' },
    updates: { url: `https://u.expo.dev/${SAMPLE_PROJECT_ID}` },
    ios: {
      supportsTablet: true,
      infoPlist: { ITSAppUsesNonExemptEncryption: false },
    },
    plugins: [],
    extra: {
      eas: { projectId: SAMPLE_PROJECT_ID },
      supabaseUrl: 'https://example.supabase.co',
      supabaseAnonKey: SAMPLE_ANON_KEY,
      features: { authEnabled: true, scoreSyncEnabled: false, adsEnabled: false },
    },
  });

  assert.equal(
    issues.some((issue) => issue.includes('runtimeVersion.policy must be "fingerprint"')),
    true,
  );
});

test('validateResolvedExpoConfig flags updates.url that does not match projectId', () => {
  const issues = validateResolvedExpoConfig({
    name: 'Word Master',
    slug: 'word_master',
    description: 'Adaptive English vocabulary practice.',
    runtimeVersion: { policy: 'fingerprint' },
    updates: { url: 'https://u.expo.dev/00000000-0000-0000-0000-000000000000' },
    ios: {
      supportsTablet: true,
      infoPlist: { ITSAppUsesNonExemptEncryption: false },
    },
    plugins: [],
    extra: {
      eas: { projectId: SAMPLE_PROJECT_ID },
      supabaseUrl: 'https://example.supabase.co',
      supabaseAnonKey: SAMPLE_ANON_KEY,
      features: {
        authEnabled: true,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.equal(
    issues.some((issue) => issue.includes('must point to the same EAS project')),
    true,
  );
});

test('validateBuildProfileEnvs rejects guest-only auth drift in release profiles', () => {
  const issues = validateBuildProfileEnvs({
    build: {
      development: {
        env: {
          APP_VARIANT: 'development',
          EXPO_PUBLIC_ENABLE_AUTH: 'true',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'true',
          EXPO_PUBLIC_ENABLE_ADS: 'true',
        },
      },
      preview: {
        channel: 'preview',
        env: {
          APP_VARIANT: 'preview',
          EXPO_PUBLIC_ENABLE_AUTH: 'false',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
          EXPO_PUBLIC_ENABLE_ADS: 'false',
        },
      },
      production: {
        channel: 'production',
        env: {
          APP_VARIANT: 'production',
          EXPO_PUBLIC_ENABLE_AUTH: 'true',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
          EXPO_PUBLIC_ENABLE_ADS: 'false',
        },
      },
    },
  });

  assert.equal(issues.includes('build.production.env.EXPO_PUBLIC_ENABLE_AUTH must be "false".'), true);
});

test('validateBuildProfileEnvs rejects channel drift', () => {
  const issues = validateBuildProfileEnvs({
    build: {
      development: {
        channel: 'development',
        env: {
          APP_VARIANT: 'development',
          EXPO_PUBLIC_ENABLE_AUTH: 'true',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'true',
          EXPO_PUBLIC_ENABLE_ADS: 'true',
        },
      },
      preview: {
        channel: 'production',
        env: {
          APP_VARIANT: 'preview',
          EXPO_PUBLIC_ENABLE_AUTH: 'true',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
          EXPO_PUBLIC_ENABLE_ADS: 'false',
        },
      },
      production: {
        env: {
          APP_VARIANT: 'production',
          EXPO_PUBLIC_ENABLE_AUTH: 'true',
          EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
          EXPO_PUBLIC_ENABLE_ADS: 'false',
        },
      },
    },
  });

  assert.equal(issues.includes('build.development must not declare an EAS Update channel.'), true);
  assert.equal(issues.includes('build.preview.channel must be "preview".'), true);
  assert.equal(issues.includes('build.production.channel must be "production".'), true);
});

test('validateStoreConfig requires support and privacy URLs', () => {
  const issues = validateStoreConfig({
    configVersion: 0,
    apple: {
      info: {
        'en-US': {
          title: 'Word Master',
          marketingUrl: 'https://example.com',
          supportUrl: 'https://example.com/support',
          privacyPolicyUrl: 'https://example.com/privacy',
        },
        ko: {
          title: 'Word Master',
        },
      },
    },
  });

  assert.deepEqual(issues, []);
});
