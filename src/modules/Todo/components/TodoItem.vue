<template>
  <li class="todo-list-item">
    <label class="todo-list-item-label">
      <input
        type="checkbox"
        :checked="todoItem.isDone"
        @change="checkTodo(todoItem.id)"
      />
      <span>{{ todoItem.content }}</span>
    </label>
    <span
      @click="deleteTodo(todoItem.id)"
      class="delete-btn"
      title="Delete Todo"
    />
  </li>
</template>

<script lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
import { defineComponent, PropType } from "vue";
import { useTodo } from "../hooks";
import { Todo } from "../store/model";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const { todo } = props;
    const { deleteTodo, checkTodo } = useTodo();

    return { todoItem: todo, deleteTodo, checkTodo };
  },
});
</script>

<style lang="scss" scoped>
.todo-list-item {
  background-color: var(--background-color);
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 8px;
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }
  input {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid var(--text-color);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check' stroke='%23fff' %3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;

    background-size: 0;
    transition: 0.2s;
    margin-right: 8px;
    flex-shrink: 0;
    margin-top: 4px;
    appearance: none;

    &:hover {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px var(--checkbox-shadow);
    }

    &:checked {
      background-size: 10px;
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);

      + span {
        color: var(--text-color);
        text-decoration: line-through var(--text-color);
      }
    }
  }

  &-label {
    display: flex;
    align-items: flex-start;
    color: var(--text-color);
    margin-right: 8px;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    transition: 0.2s;
    cursor: pointer;
  }
}

.delete-btn {
  margin-left: auto;
  display: block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff3d46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type="checkbox"],
  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
</style>
