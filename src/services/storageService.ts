import AsyncStorage from '@react-native-async-storage/async-storage';

// ── Storage keys ──────────────────────────────────────────────
const KEYS = {
  USER_RATINGS: 'wm_user_ratings',
  WORD_ELO: 'wm_word_elo',
} as const;

// ── Persisted data shapes ─────────────────────────────────────

export interface PersistedUserRatings {
  ratings: Record<string, number>; // EloByType: { e2k, k2e, e2e, syn, ant }
  overallRating: number;
  sessionCount: number;
}

export type PersistedWordElo = Record<string, Record<string, number>>;

// ── StorageService ────────────────────────────────────────────

export const StorageService = {
  async saveUserRatings(data: PersistedUserRatings): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.USER_RATINGS, JSON.stringify(data));
    } catch {
      // Silently fail — ratings are still in memory
    }
  },

  async saveWordElo(data: PersistedWordElo): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.WORD_ELO, JSON.stringify(data));
    } catch {
      // Silently fail
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

  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([KEYS.USER_RATINGS, KEYS.WORD_ELO]);
    } catch {
      // Silently fail
    }
  },
};
