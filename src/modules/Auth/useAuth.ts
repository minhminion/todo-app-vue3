import { inject } from "vue";
import { AuthorMethods } from "./authorMethods";
import { AuthState, UserIdentity } from "./types";

const useAuth = () => {
  const authorMethods: AuthorMethods = inject("authorMethods") as AuthorMethods;
  const authState = inject("authState") as AuthState;
  const setAuthState = inject("setAuthState") as (
    authenticated: boolean,
    identity?: UserIdentity | null
  ) => void;

  return {
    authorMethods,
    authState,
    setAuthState,
  };
};

export default useAuth;
