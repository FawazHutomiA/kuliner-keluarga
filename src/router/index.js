import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/Index.vue";
import LoginView from "../views/login/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
