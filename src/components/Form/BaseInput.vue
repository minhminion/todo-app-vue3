<template>
  <form-field :label="label" :errors="errors">
    <input
      :class="{ 'is-invalid': errors.length >= 1 }"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </form-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormField from "./FormField.vue";

export default defineComponent({
  components: { FormField },
  props: {
    label: String,
    errors: Array,
    modelValue: String,
    modelModifiers: { type: Object, default: () => ({}) },
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const inputHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      let value = target.value;
      if (props.modelModifiers["capitalize"]) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      if (props.modelModifiers["number"]) {
        value = value.replace(/\D/g, "");
      }
      if (props.modelModifiers["trim"]) {
        value = value.trim();
      }

      ctx.emit("update:modelValue", value);
    };

    return { inputHandler };
  },
});
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  min-height: 28px;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  color: var(--text-color);
  outline-color: var(--primary-color);
  background-color: transparent;
  &.is-invalid {
    border-color: red;
  }
}
</style>
