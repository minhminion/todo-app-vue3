<template>
  <loading-dialog v-if="isLoading" />
  <nav>
    <router-link to="/">Todo</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <theme-toggle-button />

  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import LoadingDialog from "./components/LoadingDialog.vue";
import ThemeToggleButton from "./components/ThemeToggleButton.vue";
import { ActionTypes } from "./store/types";

export default defineComponent({
  components: {
    ThemeToggleButton,
    LoadingDialog,
  },
  created() {
    const store = useStore();

    store.dispatch(ActionTypes.GET_THEME);
  },
  setup() {
    const store = useStore();

    const isLoading = computed(() => {
      return store.state.loading;
    });

    return { isLoading };
  },
});
</script>

<style lang="scss">
@import "scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
