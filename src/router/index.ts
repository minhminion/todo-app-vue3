import DragAndDropPage from "@/views/DragAndDropPage.vue";
import FormPage from "@/views/form/FormPage.vue";
import LoginPage from "@/views/form/LoginPage.vue";
import PrivatePage from "@/views/PrivatePage.vue";
import SearchPage from "@/views/SearchPage.vue";
import TestPage from "@/views/TestPage.vue";
import TodoPage from "@/views/TodoPage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
    path: "/form",
    name: "form",
    component: FormPage,
    children: [
      {
        path: "login",
        name: "form-1",
        component: LoginPage,
        alias: [""],
      },
    ],
  },
  {
    path: "/private",
    name: "private",
    component: PrivatePage,
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
