import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoPage from "@/views/TodoPage.vue";
import SearchPage from "@/views/SearchPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "todo",
    component: TodoPage,
  },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
