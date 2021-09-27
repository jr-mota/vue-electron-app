import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/user",
    name: "User",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/User.vue"),
  },
  {
    path: "/pc",
    name: "PC",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/Pc.vue"),
  },
  {
    path: "/:pathMatch(.*)*",

    component: () => import("@/views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
