import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  parseStoredCharacterProfile,
  sanitizeCharacterProfile,
  type CharacterProfile,
} from '../shared/models/characterProfile';

// ── Storage keys ──────────────────────────────────────────────
const KEYS = {
  USER_RATINGS: 'wm_user_ratings',
  WORD_ELO: 'wm_word_elo',
  AUDIO_PREFERENCES: 'wm_audio_preferences',
  ADAPTIVE_PROGRESS_STATE: 'wm_adaptive_progress_state',
  PENDING_ATTEMPTS: 'wm_pending_attempts',
  CHARACTER_PROFILE_GUEST: 'wm_character_profile_guest',
  CHARACTER_PROFILE_USER_PREFIX: 'wm_character_profile_user_',
} as const;

// ── Persisted data shapes ─────────────────────────────────────

export interface PersistedUserRatings {
  ratings: Record<string, number>; // EloByType: { e2k, k2e, e2e, syn, ant }
  overallRating: number;
  sessionCount: number;
}

export type PersistedWordElo = Record<string, Record<string, number>>;

export interface AudioPreferences {
  autoplayEnabled: boolean;
}

export interface PersistedTypeSkillRecord {
  skillRating: number;
  correctCount: number;
  wrongCount: number;
  fastCorrectCount: number;
  fragileCorrectCount: number;
  updatedAt: string | null;
}

export interface PersistedWordProgressRecord {
  vocabId: string;
  quizType: string;
  challengeRating: number;
  memoryStrength: number;
  lastIntervalHours: number;
  dueAt: string;
  seenCount: number;
  correctStreak: number;
  wrongStreak: number;
  closeWrongCount: number;
  hardWrongCount: number;
  timeoutCount: number;
  lastSeenAt: string | null;
  updatedAt: string | null;
}

export interface PersistedRetryQueueEntry {
  wordId: string;
  quizType: string;
  dueQuestionOrdinal: number;
}

export interface PersistedAdaptiveProgressState {
  typeSkills: Record<string, PersistedTypeSkillRecord>;
  wordProgress: Record<string, PersistedWordProgressRecord>;
  retryQueue: PersistedRetryQueueEntry[];
  recentWordIds: string[];
  lastHydratedUserId: string | null;
  vocabDatasetSignature?: string | null;
}

export interface PersistedPendingAttempt {
  clientAttemptId: string;
  userId: string;
  vocabId: string;
  quizType: string;
  questionOrdinal: number;
  selectedChoice: string | null;
  wasCorrect: boolean;
  answerGrade: number;
  responseQuality: number;
  elapsedMs: number;
  totalMs: number;
  hintShown: boolean;
  sourceBucket: string;
  skillBefore: number;
  skillAfter: number;
  challengeBefore: number;
  challengeAfter: number;
  memoryStrengthBefore: number;
  memoryStrengthAfter: number;
  lastIntervalHoursBefore: number;
  lastIntervalHoursAfter: number;
  dueAtBefore: string | null;
  nextReviewAt: string;
  retryDueQuestionOrdinal: number | null;
  timedOut: boolean;
  createdAt: string;
}

// ── StorageService ────────────────────────────────────────────

export const StorageService = {
  characterProfileUserKey(userId: string): string {
    return `${KEYS.CHARACTER_PROFILE_USER_PREFIX}${userId}`;
  },

  async saveUserRatings(data: PersistedUserRatings): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.USER_RATINGS, JSON.stringify(data));
    } catch (e) {
      console.warn('StorageService.saveUserRatings failed:', e);
    }
  },

  async saveWordElo(data: PersistedWordElo): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.WORD_ELO, JSON.stringify(data));
    } catch (e) {
      console.warn('StorageService.saveWordElo failed:', e);
    }
  },

  async loadUserRatings(): Promise<PersistedUserRatings | null> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.USER_RATINGS);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed.ratings === 'object' &&
        typeof parsed.overallRating === 'number'
      ) {
        return parsed as PersistedUserRatings;
      }
      return null;
    } catch {
      return null;
    }
  },

  async loadWordElo(): Promise<PersistedWordElo | null> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.WORD_ELO);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed as PersistedWordElo;
      }
      return null;
    } catch {
      return null;
    }
  },

  async saveAudioPreferences(data: AudioPreferences): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.AUDIO_PREFERENCES, JSON.stringify(data));
    } catch (e) {
      console.warn('StorageService.saveAudioPreferences failed:', e);
    }
  },

  async loadAudioPreferences(): Promise<AudioPreferences | null> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.AUDIO_PREFERENCES);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.autoplayEnabled === 'boolean') {
        return parsed as AudioPreferences;
      }
      return null;
    } catch {
      return null;
    }
  },

  async saveAdaptiveProgressState(data: PersistedAdaptiveProgressState): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.ADAPTIVE_PROGRESS_STATE, JSON.stringify(data));
    } catch (e) {
      console.warn('StorageService.saveAdaptiveProgressState failed:', e);
    }
  },

  async loadAdaptiveProgressState(): Promise<PersistedAdaptiveProgressState | null> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.ADAPTIVE_PROGRESS_STATE);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed === 'object' &&
        typeof parsed.typeSkills === 'object' &&
        typeof parsed.wordProgress === 'object' &&
        Array.isArray(parsed.retryQueue) &&
        Array.isArray(parsed.recentWordIds)
      ) {
        return parsed as PersistedAdaptiveProgressState;
      }
      return null;
    } catch {
      return null;
    }
  },

  async savePendingAttempts(data: PersistedPendingAttempt[]): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.PENDING_ATTEMPTS, JSON.stringify(data));
    } catch (e) {
      console.warn('StorageService.savePendingAttempts failed:', e);
    }
  },

  async loadPendingAttempts(): Promise<PersistedPendingAttempt[]> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.PENDING_ATTEMPTS);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as PersistedPendingAttempt[]) : [];
    } catch {
      return [];
    }
  },

  async saveGuestCharacterProfile(profile: CharacterProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(
        KEYS.CHARACTER_PROFILE_GUEST,
        JSON.stringify(sanitizeCharacterProfile(profile)),
      );
    } catch (e) {
      console.warn('StorageService.saveGuestCharacterProfile failed:', e);
    }
  },

  async loadGuestCharacterProfile(): Promise<CharacterProfile | null> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.CHARACTER_PROFILE_GUEST);
      return parseStoredCharacterProfile(raw);
    } catch {
      return null;
    }
  },

  async saveUserCharacterProfile(userId: string, profile: CharacterProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(
        StorageService.characterProfileUserKey(userId),
        JSON.stringify(sanitizeCharacterProfile(profile)),
      );
    } catch (e) {
      console.warn('StorageService.saveUserCharacterProfile failed:', e);
    }
  },

  async loadUserCharacterProfile(userId: string): Promise<CharacterProfile | null> {
    try {
      const raw = await AsyncStorage.getItem(StorageService.characterProfileUserKey(userId));
      return parseStoredCharacterProfile(raw);
    } catch {
      return null;
    }
  },

  async clearAll(): Promise<void> {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const characterKeys = allKeys.filter((key) =>
        key.startsWith(KEYS.CHARACTER_PROFILE_USER_PREFIX),
      );
      await AsyncStorage.multiRemove([
        KEYS.USER_RATINGS,
        KEYS.WORD_ELO,
        KEYS.AUDIO_PREFERENCES,
        KEYS.ADAPTIVE_PROGRESS_STATE,
        KEYS.PENDING_ATTEMPTS,
        KEYS.CHARACTER_PROFILE_GUEST,
        ...characterKeys,
      ]);
    } catch (e) {
      console.warn('StorageService.clearAll failed:', e);
    }
  },
};
