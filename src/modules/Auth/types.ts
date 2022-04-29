export type UserIdentity = unknown;
export type RegisterParams = unknown;

export interface AuthState {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  error: unknown;
  identity: UserIdentity | null;
}
