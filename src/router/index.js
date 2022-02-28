import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShopItemDetail from "@/views/ShopItemDetail";
import Shop from "@/views/Shop";
import Page404 from "@/views/Page404";

const routes = [
  {
    path: "/",
    name: "Base",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/woodworking",
    name: "Woodworking",
    component: Home,
  },
  {
    path: "/shop/:id",
    name: "ShopItemDetail",
    component: ShopItemDetail,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
