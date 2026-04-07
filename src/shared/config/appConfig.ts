import Constants from 'expo-constants';
import { resolveAppFeatureFlags, type AppFeatureFlags } from './appFeatures';

interface AppConfigExtra {
  appVariant?: string;
  features?: Partial<Record<keyof AppFeatureFlags, boolean | string | null>> | null;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

function resolveString(value: string | undefined): string {
  if (typeof value !== 'string') return '';
  return value.trim();
}

const appExtra = (Constants.expoConfig?.extra ?? {}) as AppConfigExtra;

export const appVariant = resolveString(appExtra.appVariant) || 'development';
export const appFeatures = resolveAppFeatureFlags(appExtra.features);
export const appConfig = {
  appVariant,
  features: appFeatures,
  supabaseUrl: resolveString(appExtra.supabaseUrl),
  supabaseAnonKey: resolveString(appExtra.supabaseAnonKey),
};
