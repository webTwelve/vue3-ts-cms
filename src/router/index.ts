import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/not-found/notfound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to) => {
  const token = localCache.getCache('token')

  if (to.path != '/login') {
    if (!token) {
      return '/login'
    }
  }
})
export default router
