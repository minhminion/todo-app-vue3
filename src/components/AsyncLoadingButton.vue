<template>
  <span @click="asyncLoad(2000)" class="async-btn"></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/types";

export default defineComponent({
  name: "AsyncButton",
  setup() {
    const store = useStore();

    const asyncLoad = (value: number) => {
      store.dispatch(ActionTypes.ASYNC_LOAD, value);
    };

    return { asyncLoad };
  },
});
</script>

<style lang="scss" scoped>
.async-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  cursor: pointer;

  background-image: url("https://cdn0.iconfinder.com/data/icons/buno-arrows-1/32/__async_asynchronize_irregular-512.png");
  background-color: var(--primary-color);
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center;
}
</style>
