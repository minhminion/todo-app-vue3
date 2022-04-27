import { MutationTree } from "vuex";
import { State } from "./state";
import { AppTheme, MutationTypes } from "./types";

export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: AppTheme): void;
  [MutationTypes.TOGGLE_THEME](state: S): void;

  [MutationTypes.LOADIND_START](state: S): void;
  [MutationTypes.LOADIND_STOP](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_THEME](state, payload: AppTheme) {
    state.theme = payload;
  },
  [MutationTypes.TOGGLE_THEME](state) {
    state.theme =
      state.theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
  },
  [MutationTypes.LOADIND_START](state) {
    state.loading = true;
  },
  [MutationTypes.LOADIND_STOP](state) {
    state.loading = false;
  },
};
