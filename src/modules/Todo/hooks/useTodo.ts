import { useStore } from "vuex";
import { MODULE_NAME, MutationTypes } from "../store/types";

export const useTodo = () => {
  const store = useStore();

  const todoList = store.getters[`${MODULE_NAME}/todoList`];

  function addTodo(value: string) {
    if (!value) return;
    store.commit(`${MODULE_NAME}/${MutationTypes.ADD_TODO}`, value);
  }

  function deleteTodo(todoId: string) {
    store.commit(`${MODULE_NAME}/${MutationTypes.DELETE_TODO}`, todoId);
  }

  function checkTodo(todoId: string) {
    store.commit(`${MODULE_NAME}/${MutationTypes.TOGGLE_TODO}`, todoId);
  }

  return {
    todoList,
    addTodo,
    deleteTodo,
    checkTodo,
  };
};
