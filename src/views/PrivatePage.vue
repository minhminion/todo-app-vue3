<template>
  <div class="container">
    <h1>Private Page</h1>
    <h2>{{ identity }}</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import useLogout from "@/modules/Auth/useLogout";

export default defineComponent({
  setup() {
    const { logout, authState } = useLogout();

    const identity = computed(() => authState.identity);

    return { identity, logout };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 450px;
  margin: auto;
  text-align: center;
}
</style>
