import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoPage from "@/views/TodoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "todo",
    component: TodoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
