<template>
  <div class="form-group" :class="{ 'form-group--error': errors.length >= 1 }">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <div
      class="form-message form-message--error"
      v-for="(error, index) in errors"
      :key="`${label}-${index}`"
    >
      {{ error.$message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormField",
  props: ["label", "errors"],
});
</script>
<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-bottom: 20px;
  &--error {
    label {
      color: red;
    }
  }
  label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
  .form-message {
    font-size: 15px;
    margin-top: 10px;
    &--error {
      color: red;
    }
  }
}
</style>
