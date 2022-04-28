import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoPage from "@/views/TodoPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import DragAndDropPage from "@/views/DragAndDropPage.vue";
import TestPage from "@/views/TestPage.vue";

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
  {
    path: "/drag-and-drop",
    name: "drag-and-drop",
    component: DragAndDropPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
