import { v4 as uuidv4 } from "uuid";
import { MutationTree } from "vuex";
import { State } from "./state";
import { MutationTypes } from "./types";

export type Mutations<S = State> = {
  [MutationTypes.SET_TODO](
    state: S,
    payload: { content: string; id: string }
  ): void;
  [MutationTypes.TOGGLE_TODO](state: S, payload: string): void;
  [MutationTypes.DELETE_TODO](state: S, payload: string): void;
  [MutationTypes.ADD_TODO](state: S, payload: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TODO](state, payload: { content: string; id: string }) {
    const todoIndex = state.todoList.findIndex(
      (todo) => todo.id === payload.id
    );

    if (todoIndex >= 0) {
      state.todoList[todoIndex].content = payload.content;
    }
  },
  [MutationTypes.TOGGLE_TODO](state, payload: string) {
    const todoIndex = state.todoList.findIndex((todo) => todo.id === payload);

    if (todoIndex >= 0) {
      const todo = state.todoList[todoIndex];
      state.todoList[todoIndex].isDone = !todo.isDone;
    }
  },
  [MutationTypes.DELETE_TODO](state, payload: string) {
    const todoIndex = state.todoList.findIndex((todo) => todo.id === payload);
    if (todoIndex >= 0) {
      state.todoList.splice(todoIndex, 1);
    }
  },
  [MutationTypes.ADD_TODO](state, payload: string) {
    if (payload) {
      state.todoList.push({
        id: uuidv4(),
        content: payload,
        isDone: false,
      });
    }
  },
};
