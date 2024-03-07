import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "Home",
    },
    {
      path: "/login",
      component: LoginView,
      name: "Login",
    },
    {
      path: "/register",
      component: RegisterView,
      name: "Register",
    },
  ],
});

export default router;
