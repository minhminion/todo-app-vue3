import { useGlobalLoading } from "@/hooks";
import { useRouter } from "vue-router";
import { UserIdentity } from "./types";
import useAuth from "./useAuth";

const useLogin = () => {
  const { authorMethods, setAuthState } = useAuth();

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
