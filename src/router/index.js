import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CreateView from "../views/CreateView.vue";
import WorkoutView from "../views/WorkoutView.vue";
import { supabase } from "../supabase/init";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "Home",
      meta: {
        title: "Home",
        auth: false,
      },
    },
    {
      path: "/login",
      component: LoginView,
      name: "Login",
      meta: {
        title: "Login",
        auth: false,
      },
    },
    {
      path: "/register",
      component: RegisterView,
      name: "Register",
      meta: {
        title: "Register",
        auth: false,
      },
    },
    {
      path: "/create",
      component: CreateView,
      name: "Create",
      meta: {
        title: "Create",
        auth: true,
      },
    },
    {
      path: "/view-workout/:workoutId",
      component: WorkoutView,
      name: "view-workout",
      meta: {
        title: "View Workout",
        auth: false,
      },
    },
  ],
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active Tracker`;
  next();
});

//Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user = supabase.auth.getUser();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: "Login" });
    return;
  }
  next();
});

// router.beforeEach(async (to) => {
//   const user = supabase.auth.getUser();

//   if (!user && to.name !== "Login") {
//     return { name: "Login" };
//   }

//   if (user && to.name === "Create") {
//     return { name: "Create" };
//   }
// });

export default router;
