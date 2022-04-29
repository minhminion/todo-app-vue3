import { RegisterParams, UserIdentity } from "./types";

export interface AuthorMethods {
  login: (username: string, password: string) => Promise<void>;
  checkAuth: () => Promise<boolean>;
  logout: () => Promise<void>;
  getIdentity: () => Promise<UserIdentity | null>;
  register: (values: RegisterParams) => Promise<void>;
  refreshToken: () => Promise<void>;
}

export const defaultAuthMethods: AuthorMethods = {
  login: (): Promise<void> => Promise.resolve(),
  checkAuth: (): Promise<boolean> => Promise.resolve(true),
  logout: (): Promise<void> => Promise.resolve(),
  getIdentity: (): Promise<null> => Promise.resolve(null),
  register: (): Promise<void> => Promise.resolve(),
  refreshToken: (): Promise<void> => Promise.resolve(),
};
