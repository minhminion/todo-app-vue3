<template>
  <div>
    <h1>Test Page</h1>

    <input type="text" placeholder="title1" v-model="title1" /> {{ title1 }}
    <input type="text" placeholder="title2" v-model="title2.value" />
    {{ title2.value }}
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";

const title1 = ref("");
const title2 = reactive({
  value: "",
});
</script>
