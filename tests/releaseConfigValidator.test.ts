import assert from 'node:assert/strict';
import test from 'node:test';
import {
  validateBuildProfileEnvs,
  validateResolvedExpoConfig,
  validateStoreConfig,
} from '../scripts/release-config.shared.mjs';

test('validateResolvedExpoConfig accepts auth-enabled release config', () => {
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
      supabaseAnonKey: 'example-anon-key',
      features: {
        authEnabled: true,
        scoreSyncEnabled: false,
        adsEnabled: false,
      },
    },
  });

  assert.deepEqual(issues, []);
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
        env: {
          APP_VARIANT: 'preview',
          EXPO_PUBLIC_ENABLE_AUTH: 'false',
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

  assert.equal(issues.includes('build.preview.env.EXPO_PUBLIC_ENABLE_AUTH must be "true".'), true);
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
      },
    },
  });

  assert.deepEqual(issues, []);
});
