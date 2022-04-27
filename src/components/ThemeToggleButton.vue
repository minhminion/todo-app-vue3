<template>
  <span
    @click="toggleTheme"
    class="theme-btn"
    :class="{ 'theme-btn-dark': currentTheme === 'dark' }"
  ></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "@/hooks";

export default defineComponent({
  name: "ThemeToggleButton",
  setup(_, ctx) {
    const { toggleTheme, currentTheme } = useTheme();

    console.log(ctx);

    return { toggleTheme, currentTheme };
  },
});
</script>

<style lang="scss">
.theme-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  cursor: pointer;

  background-color: var(--primary-color);
  background-image: url("https://i.ibb.co/7JfqXxB/sunny.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  &.theme-btn-dark {
    background-image: url("https://i.ibb.co/FxzBYR9/night.png");
  }
}
</style>
