import { useGlobalLoading } from "@/hooks";
import { useRouter } from "vue-router";
import useAuth from "./useAuth";

const useLogout = () => {
  const { authorMethods, setAuthState, authState } = useAuth();

  const router = useRouter();

  const { start, stop } = useGlobalLoading();

  const logout = async () => {
    try {
      start();
      await authorMethods.logout();
      setAuthState(false, {});
      router.push("/");
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
