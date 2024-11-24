import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "@/views/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: 'Home' },
  },

  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { title: 'Signup' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
