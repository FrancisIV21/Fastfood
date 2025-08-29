import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/pages/HomePage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/pages/LoginPage.vue') },
  { path: '/home', component: HomePage },
  { path: '/menu', component: () => import('@/pages/MenuPage.vue') },
  { path: '/cart', component: () => import('@/pages/CartPage.vue') },
  { path: '/profile', component: () => import('@/pages/ProfilePage.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
