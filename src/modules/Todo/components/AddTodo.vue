<template>
  <div class="add-todo">
    <input
      type="text"
      autocomplete="off"
      placeholder="Add New Todo"
      class="todo-input"
      @keyup.enter="add"
      v-model.trim="todoContent"
    />
    <button type="submit" @click="add" class="submit-todo" title="Add Todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo } from "../hooks";

export default defineComponent({
  setup() {
    const { addTodo } = useTodo();

    const todoContent = ref("");

    function add() {
      addTodo(todoContent.value);
      todoContent.value = "";
    }

    return { add, todoContent };
  },
});
</script>

<style lang="scss">
.submit-todo {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--primary-color);
  color: var(--text-color);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  background-size: 18px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-button-shadow);
}

.add-todo {
  height: 40px;
  font-size: 14px;
  display: flex;
}

.todo-input {
  border-right: none;
  width: 100%;
  padding: 0 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--text-color);
  background-color: transparent;
  margin-right: 12px;
  color: var(--text-color);
  box-shadow: none;
  border-radius: 0;

  &:placeholder {
    color: var(--text-color);
  }
}
</style>
