import { createRouter, createWebHistory } from "vue-router";
import { mainRouter } from "./main";

export const router = createRouter({
  history: createWebHistory(),  
  routes: [{
    path: "/",
    component: () => import("@/pages/index.vue")
  },...mainRouter],
});
