import { appFeatures } from '../shared/config/appConfig';
import {
  createDefaultCharacterProfile,
  resolveCharacterProfileForSession,
  sanitizeCharacterProfile,
  stampCharacterProfile,
  type CharacterProfile,
} from '../shared/models/characterProfile';
import { StorageService } from './storageService';
import { isSupabaseConfigured, supabase } from './supabase';

interface UserProfileRow {
  character_profile?: unknown;
  character_updated_at?: string | null;
}

export interface ProfileSessionUser {
  id: string;
  email: string | null;
}

export interface SaveCharacterProfileResult {
  profile: CharacterProfile;
  syncError: string | null;
}

function canSyncProfile() {
  return appFeatures.authEnabled && isSupabaseConfigured() && supabase != null;
}

function toMessage(error: unknown, fallback: string): string {
  return error instanceof Error && error.message ? error.message : fallback;
}

async function loadRemoteCharacterProfile(userId: string): Promise<CharacterProfile | null> {
  if (!canSyncProfile() || !supabase) return null;

  const { data, error } = await supabase
    .from('user_profiles')
    .select('character_profile, character_updated_at')
    .eq('user_id', userId)
    .maybeSingle<UserProfileRow>();

  if (error) {
    throw new Error(toMessage(error, '프로필을 불러오지 못했습니다.'));
  }

  if (!data?.character_profile) return null;

  return sanitizeCharacterProfile({
    ...(typeof data.character_profile === 'object' && data.character_profile !== null
      ? data.character_profile
      : {}),
    updatedAt: data.character_updated_at ?? null,
  });
}

export async function loadCharacterProfileForSession(user: ProfileSessionUser | null) {
  const guestProfile = await StorageService.loadGuestCharacterProfile();

  if (!user) {
    return guestProfile ?? createDefaultCharacterProfile();
  }

  const userProfile = await StorageService.loadUserCharacterProfile(user.id);
  let remoteProfile: CharacterProfile | null = null;

  if (canSyncProfile()) {
    try {
      remoteProfile = await loadRemoteCharacterProfile(user.id);
    } catch (error) {
      console.warn('character profile remote load failed:', error);
    }
  }

  return resolveCharacterProfileForSession({
    guestProfile,
    userProfile,
    remoteProfile,
  });
}

export async function saveCharacterProfileForSession(
  user: ProfileSessionUser | null,
  profile: CharacterProfile,
): Promise<SaveCharacterProfileResult> {
  const stamped = stampCharacterProfile(profile, new Date().toISOString());

  if (!user) {
    await StorageService.saveGuestCharacterProfile(stamped);
    return {
      profile: stamped,
      syncError: null,
    };
  }

  await StorageService.saveUserCharacterProfile(user.id, stamped);

  if (!canSyncProfile() || !supabase) {
    return {
      profile: stamped,
      syncError: null,
    };
  }

  const { error } = await supabase.from('user_profiles').upsert(
    {
      user_id: user.id,
      email: user.email ?? null,
      character_profile: {
        avatar: stamped.avatar,
        likes: stamped.likes,
        dislikes: stamped.dislikes,
      },
      character_updated_at: stamped.updatedAt,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  );

  return {
    profile: stamped,
    syncError: error ? toMessage(error, '온라인 동기화에 실패했습니다.') : null,
  };
}
