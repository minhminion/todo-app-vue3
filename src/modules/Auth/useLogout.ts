import { useGlobalLoading } from "@/hooks";
import { inject } from "vue";
import { AuthorMethods } from "./authorMethods";
import { AuthState, UserIdentity } from "./types";

const useLogout = () => {
  const setAuthState = inject("setAuthState") as (
    authenticated: boolean,
    identity?: UserIdentity | null
  ) => void;
  const authorMethods: AuthorMethods = inject("authorMethods") as AuthorMethods;
  const authState = inject("authState") as AuthState;
  console.log(
    "🚀 Minh =====>  ~ file: useLogout.ts ~ line 13 ~ authState",
    authState
  );

  const { start, stop } = useGlobalLoading();

  const logout = async () => {
    try {
      start();
      await authorMethods.logout();

      setAuthState(false, {});
    } finally {
      stop();
    }
  };

  return {
    authState,
    logout,
  };
};

export default useLogout;
