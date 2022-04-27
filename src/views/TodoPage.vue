<template>
  <div class="container-center">
    <div class="todo-container" id="taskList">
      <h1 class="todo-header">TO DO LIST</h1>
      <add-todo />
      <todo-list />
    </div>
  </div>
</template>

<script>
import TodoList from "@/modules/Todo/components/TodoList.vue";
import AddTodo from "@/modules/Todo/components/AddTodo.vue";
import { useStore } from "vuex";
import { MODULE_NAME } from "@/modules/Todo/store/types";
import todoModule from "@/modules/Todo/store";
import { LocalStorage } from "@/utils";

export default {
  components: { TodoList, AddTodo },
  name: "TodoPage",
  beforeCreate() {
    const store = useStore();
    if (!store.hasModule(MODULE_NAME)) {
      console.log(`Register module ${MODULE_NAME}`);
      store.registerModule(MODULE_NAME, todoModule);
    }
    store.watch(
      (state) => state[MODULE_NAME],
      (value) => {
        LocalStorage.save(MODULE_NAME, value);
      },
      {
        deep: true,
      }
    );
  },
};
</script>

<style lang="scss">
.container-center {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-container {
  margin: auto;
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  max-height: 100%;
  background-color: var(--box-color);
  box-shadow: var(--box-shadow);
  padding: 24px;
  overflow: auto;
  .todo-header {
    font-size: 20px;
    line-height: 32px;
    margin: 0 0 12px 0;
    color: var(--text-color);
  }
}
</style>
