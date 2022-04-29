<template>
  <private-route :isPrivate="true">
    <div class="container">
      <h1>Private Page</h1>
      <h2>{{ authState.identity }}</h2>
      <button @click="logout">Logout</button>
    </div>
  </private-route>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLogout from "@/modules/Auth/useLogout";
import PrivateRoute from "@/components/PrivateRoute.vue";

export default defineComponent({
  components: { PrivateRoute },
  setup() {
    const { logout, authState } = useLogout();

    return { authState, logout };
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
