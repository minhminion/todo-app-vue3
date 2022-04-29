<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    console.log(
      "🚀 Minh =====>  ~ file: PrivatePage.vue ~ line 12 ~ route",
      route
    );
  },
});
</script>
