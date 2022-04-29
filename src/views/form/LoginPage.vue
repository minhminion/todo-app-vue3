<template>
  <private-route>
    <div class="form">
      <div class="form-title"><span>Login Page</span></div>
      <div class="form-content">
        <form @submit.prevent="handleSubmit">
          <base-input
            :label="'Email'"
            :errors="v.email.$errors"
            v-model.trim="v.email.$model"
          />
          <base-input
            :label="'Pasword'"
            type="password"
            :errors="v.password.$errors"
            v-model.trim="v.password.$model"
          />
          <div>
            <input type="submit" name="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  </private-route>
</template>

<script lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { defineComponent, reactive } from "vue";
import BaseInput from "@/components/Form/BaseInput.vue";
import { useGlobalLoading } from "@/hooks";
import useLogin from "@/modules/Auth/useLogin";
import PrivateRoute from "@/components/PrivateRoute.vue";

export default defineComponent({
  components: { BaseInput, PrivateRoute },
  name: "LoginPage",
  setup() {
    const { start, stop } = useGlobalLoading();
    const { login } = useLogin();

    const formValues = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: { required, email },
      password: { required },
    };

    const v = useVuelidate(rules, formValues);
    return { v, start, stop, login };
  },
  methods: {
    async handleSubmit() {
      const isValid = await this.v.$validate();
      if (!isValid) return;

      this.login(this.v.email.$model, this.v.password.$model);
    },
  },
});
</script>

<style lang="scss" scoped>
@mixin box-style {
  background-color: var(--box-color);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
}
.form {
  max-width: 500px;
  width: 100%;
  margin: auto;
  .form-title {
    @include box-style;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .form-content {
    @include box-style;
    min-height: 300px;
    padding: 20px;
  }
}
</style>
