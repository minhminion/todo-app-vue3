import { LocalStorage } from "@/utils";
import { createLogger, createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const store = createStore({
  strict: true,
  // Add logger for debug in console log
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  state,
  mutations,
  actions,
  modules: {},
});

store.watch(
  (state) => state.theme,
  (theme) => {
    LocalStorage.save("theme", theme);
    document.documentElement.className = theme;
  }
);

export default store;
