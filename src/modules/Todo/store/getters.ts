import { GetterTree } from "vuex";
import { Todo } from "./model";
import { State } from "./state";

export type Getters = {
  todoList(state: State): Todo[];
};

export const getters: GetterTree<State, State> & Getters = {
  todoList: (state) => state.todoList,
};
