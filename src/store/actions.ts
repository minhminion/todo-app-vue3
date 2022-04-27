import { LocalStorage } from "@/utils";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";
import { State } from "./state";
import { ActionTypes, AppTheme, MutationTypes } from "./types";

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export type Actions = {
  [ActionTypes.GET_THEME]({ commit }: AugmentedActionContext): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_THEME]({ commit }) {
    commit(MutationTypes.LOADIND_START);
    const localTheme = await new Promise<AppTheme>((res) => {
      setTimeout(() => res(LocalStorage.get("theme")), 3000);
    });
    commit(MutationTypes.SET_THEME, localTheme);
    commit(MutationTypes.LOADIND_STOP);
  },
};
