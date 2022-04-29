<template>
  <loading-dialog v-if="isLoading" />
  <nav>
    <router-link to="/">Todo</router-link> |
    <router-link to="/search">Search</router-link> |
    <router-link to="/drag-and-drop">Drag and Drop</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/private">Private</router-link>
  </nav>
  <theme-toggle-button
    :style="{ height: '60px', width: '60px', bottom: '30px', right: '30px' }"
  />
  <async-loading-button
    :style="{ height: '60px', width: '60px', bottom: '110px', right: '30px' }"
  />

  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import AsyncLoadingButton from "./components/AsyncLoadingButton.vue";
import LoadingDialog from "./components/LoadingDialog.vue";
import ThemeToggleButton from "./components/ThemeToggleButton.vue";
import { ActionTypes } from "./store/types";

export default defineComponent({
  components: {
    ThemeToggleButton,
    LoadingDialog,
    AsyncLoadingButton,
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
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
