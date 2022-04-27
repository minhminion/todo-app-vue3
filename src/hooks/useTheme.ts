import { MutationTypes } from "@/store/types";
import { computed } from "vue";
import { useStore } from "vuex";

export const useTheme = () => {
  const store = useStore();

  const toggleTheme = () => {
    store.commit(MutationTypes.TOGGLE_THEME);
  };

  const currentTheme = computed(() => {
    return store.state.theme;
  });

  return {
    toggleTheme,
    currentTheme,
  };
};
