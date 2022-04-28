import { MutationTypes } from "@/store/types";
import { useStore } from "vuex";

export const useGlobalLoading = () => {
  const store = useStore();

  const start = () => {
    store.commit(MutationTypes.LOADIND_START);
  };
  const stop = () => {
    store.commit(MutationTypes.LOADIND_STOP);
  };

  return { start, stop };
};
