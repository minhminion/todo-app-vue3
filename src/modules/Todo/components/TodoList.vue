<template>
  <TransitionGroup class="todo-list" name="todo-list-item" tag="ul">
    <todo-item v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </TransitionGroup>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { useTodo } from "../hooks";
import TodoItem from "./TodoItem.vue";
export default defineComponent({
  components: { TodoItem },
  name: "TodoList",
  setup() {
    const { todoList } = useTodo();

    return { todoList };
  },
});
</script>

<style>
.todo-list {
  list-style: none;
  padding: 0;
  overflow: hidden;
}
</style>
