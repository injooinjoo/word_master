export interface SessionStateInput {
  authEnabled: boolean;
  guestMode: boolean;
  hasUser: boolean;
}

export interface ResultVisibilityInput {
  authEnabled: boolean;
  scoreSyncEnabled: boolean;
  isGuestSession: boolean;
}

export function resolveSessionState({
  authEnabled,
  guestMode,
  hasUser,
}: SessionStateInput): {
  isGuestSession: boolean;
  shouldShowAuthScreen: boolean;
} {
  const isGuestSession = !hasUser && (!authEnabled || guestMode);

  return {
    isGuestSession,
    shouldShowAuthScreen: !hasUser && authEnabled && !guestMode,
  };
}

export function resolveResultVisibility({
  authEnabled,
  scoreSyncEnabled,
  isGuestSession,
}: ResultVisibilityInput): {
  showScoreSync: boolean;
  showLeaderboard: boolean;
  showGuestSignInAction: boolean;
  showSignedInAccountAction: boolean;
} {
  return {
    showScoreSync: scoreSyncEnabled,
    showLeaderboard: scoreSyncEnabled,
    showGuestSignInAction: authEnabled && isGuestSession,
    showSignedInAccountAction: authEnabled && !isGuestSession,
  };
}
