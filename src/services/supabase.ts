import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { appConfig } from '../shared/config/appConfig';

const backendEnabled = appConfig.features.authEnabled || appConfig.features.scoreSyncEnabled;
const SUPABASE_URL = appConfig.supabaseUrl;
const SUPABASE_ANON_KEY = appConfig.supabaseAnonKey;

const ALLOWED_SUPABASE_HOST_SUFFIXES = ['.supabase.co', '.supabase.in'];
const PRODUCTION_VARIANTS: ReadonlySet<'production' | 'preview'> = new Set<'production' | 'preview'>(['production', 'preview']);

function hasAllowedHost(rawUrl: string): boolean {
  try {
    const host = new URL(rawUrl).hostname.toLowerCase();
    return ALLOWED_SUPABASE_HOST_SUFFIXES.some((suffix) => host.endsWith(suffix));
  } catch {
    return false;
  }
}

const supabaseHostIsAllowed = SUPABASE_URL.length === 0 || hasAllowedHost(SUPABASE_URL);

function decodeBase64Url(payload: string): string | null {
  try {
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    const decoder = (globalThis as { atob?: (value: string) => string }).atob;
    return typeof decoder === 'function' ? decoder(padded) : null;
  } catch {
    return null;
  }
}

export function readSupabaseJwtRole(rawKey: string): string | null {
  const [, payload] = rawKey.split('.');
  if (!payload) return null;

  const decoded = decodeBase64Url(payload);
  if (!decoded) return null;

  try {
    const parsed = JSON.parse(decoded) as { role?: unknown };
    return typeof parsed.role === 'string' ? parsed.role : null;
  } catch {
    return null;
  }
}

const supabaseKeyRole = SUPABASE_ANON_KEY.length > 0 ? readSupabaseJwtRole(SUPABASE_ANON_KEY) : null;
const supabaseKeyIsAnon = SUPABASE_ANON_KEY.length === 0 || supabaseKeyRole === 'anon';

if (!supabaseHostIsAllowed) {
  const isProductionVariant = (PRODUCTION_VARIANTS as ReadonlySet<string>).has(appConfig.appVariant);
  const severity = isProductionVariant ? 'error' : 'warn';
  const log = severity === 'error' ? console.error : console.warn;
  log(
    `[supabase] Refusing to initialize: URL host is not on the allowlist. ` +
      `Falling back to guest-only mode. ` +
      `(variant=${appConfig.appVariant}, host=${SUPABASE_URL})`,
  );
}

if (!supabaseKeyIsAnon) {
  const isProductionVariant = (PRODUCTION_VARIANTS as ReadonlySet<string>).has(appConfig.appVariant);
  const severity = isProductionVariant ? 'error' : 'warn';
  const log = severity === 'error' ? console.error : console.warn;
  log(
    `[supabase] Refusing to initialize: key role must be anon. ` +
      `Falling back to guest-only mode. ` +
      `(variant=${appConfig.appVariant}, role=${supabaseKeyRole ?? 'unreadable'})`,
  );
}

export function isSupabaseConfigured(): boolean {
  return (
    backendEnabled &&
    SUPABASE_URL.length > 0 &&
    SUPABASE_ANON_KEY.length > 0 &&
    supabaseHostIsAllowed &&
    supabaseKeyIsAnon
  );
}

export const supabase = isSupabaseConfigured()
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    })
  : null;
