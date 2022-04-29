import { useGlobalLoading } from "@/hooks";
import { inject } from "vue";
import { useRouter } from "vue-router";
import { AuthorMethods } from "./authorMethods";
import { UserIdentity } from "./types";

const useLogin = () => {
  const setAuthState = inject("setAuthState") as (
    authenticated: boolean,
    identity?: UserIdentity | null
  ) => void;
  const authorMethods: AuthorMethods = inject("authorMethods") as AuthorMethods;

  const { start, stop } = useGlobalLoading();
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      start();
      await authorMethods.login(username, password);
      const identity = (await authorMethods.getIdentity()) as UserIdentity;
      setAuthState(true, identity);
      router.push("/");
    } finally {
      stop();
    }
  };

  return {
    login,
  };
};

export default useLogin;
