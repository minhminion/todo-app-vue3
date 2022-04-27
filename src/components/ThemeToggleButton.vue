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
  setup() {
    const { toggleTheme, currentTheme } = useTheme();
    console.log(
      "🚀 Minh =====>  ~ file: ThemeToggleButton.vue ~ line 17 ~ currentTheme",
      currentTheme
    );
    return { toggleTheme, currentTheme };
  },
});
</script>

<style lang="scss">
.theme-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
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
