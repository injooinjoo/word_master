import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { appConfig } from '../shared/config/appConfig';

const backendEnabled = appConfig.features.authEnabled || appConfig.features.scoreSyncEnabled;
const SUPABASE_URL = appConfig.supabaseUrl;
const SUPABASE_ANON_KEY = appConfig.supabaseAnonKey;

export function isSupabaseConfigured(): boolean {
  return backendEnabled && SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
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
