import { LocalStorage } from "@/utils";
import { Todo } from "./model";
import { MODULE_NAME } from "./types";

export interface State {
  todoList: Todo[];
}

export const state: State = LocalStorage.get(MODULE_NAME) || {
  todoList: [
    {
      id: "0a785e6a-62af-41c0-947a-2ca294e5ac39",
      content: "abc",
      isDone: true,
    },
  ],
};
