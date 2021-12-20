import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../App.vue')
    }
]

const router =  createRouter({
    history: createWebHistory(),
    routes
});

export default router;