<template>
  <div :class="{ error: v$.firstName.$errors.length }">
    <input v-model="state.firstName" />
    <div
      class="input-errors"
      v-for="error of v$.firstName.$errors"
      :key="error.$uid"
    >
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      contact: {
        email: "",
      },
    });
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email }, // Matches state.contact.email
      },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
};
</script>
