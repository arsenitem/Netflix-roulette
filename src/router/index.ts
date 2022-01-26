import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    redirect: {name: 'Search'},
    children: [
      {
        path: "/",
        name: "Search",
        component: () =>
          import(/* webpackChunkName: "details" */ "../components/SearchMovies.vue"),
      },
      {
        path: "/details",
        name: "Details",
        component: () =>
          import(/* webpackChunkName: "details" */ "../views/Details.vue"),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*', 
    component: () => import("../views/NotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
