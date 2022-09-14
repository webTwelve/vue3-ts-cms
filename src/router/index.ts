import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/pages/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
