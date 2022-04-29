import { createApp } from "vue";
import App from "./App.vue";
import defaultAuthMethods from "./modules/Auth/defaultAuthorMethods";
import authPlugin from "./modules/Auth/plugin";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(authPlugin, {
    authorMethods: defaultAuthMethods,
  })
  .use(router)
  .mount("#app");
