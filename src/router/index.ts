import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue'
import Home from "@src/pages/Products/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'product',
    component: Home,
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: defineAsyncComponent(()=>import('@pages/ShoppingCart/index.vue')),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

