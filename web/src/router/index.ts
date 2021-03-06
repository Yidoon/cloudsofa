import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from '@/views/home/home.vue';
import NotFound from "@/views/404.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
