<template>
  <div v-if="!authState.isAuthenticating">
    <slot />
  </div>
</template>

<script lang="ts">
import useAuth from "@/modules/Auth/useAuth";
import { defineComponent, watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {
    isPrivate: Boolean,
  },

  setup(props) {
    const { path } = useRoute();
    const router = useRouter();
    const { authState } = useAuth();

    watchEffect(() => {
      if (props.isPrivate) {
        if (!authState.isAuthenticated && !authState.isAuthenticating) {
          router.push("/form/login");
        }
      } else if (
        path === "/form/login" &&
        authState.isAuthenticated &&
        !authState.isAuthenticating
      ) {
        router.push("/");
      }
    });

    return { authState };
  },
});
</script>
