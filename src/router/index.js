import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "test" */ "../views/TestView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
