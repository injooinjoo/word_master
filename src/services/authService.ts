import type { Session, User } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from './supabase';

type AuthListener = (session: Session | null) => void;

function requireClient() {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase is not configured.');
  }
  return supabase;
}

function asMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}

export async function getCurrentSession(): Promise<Session | null> {
  if (!isSupabaseConfigured() || !supabase) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return data.session;
}

export function onAuthStateChanged(listener: AuthListener): () => void {
  if (!isSupabaseConfigured() || !supabase) {
    return () => {};
  }

  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    listener(session);
  });

  return () => data.subscription.unsubscribe();
}

export async function signInWithEmail(email: string, password: string): Promise<User> {
  const client = requireClient();
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  if (!data.user) throw new Error('로그인에 실패했습니다.');
  return data.user;
}

export async function signUpWithEmail(
  email: string,
  password: string,
): Promise<{ user: User | null; needsEmailConfirmation: boolean }> {
  const client = requireClient();
  const { data, error } = await client.auth.signUp({ email, password });
  if (error) throw new Error(error.message);

  return {
    user: data.user,
    needsEmailConfirmation: !data.session,
  };
}

export async function signOutUser(): Promise<void> {
  if (!isSupabaseConfigured() || !supabase) return;
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(asMessage(error, '로그아웃에 실패했습니다.'));
}
