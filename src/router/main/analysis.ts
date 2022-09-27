export default [
  {
    path: '/main/analysis/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/analysis/overview',
    name: 'overview',
    component: () => import('@/pages/main/analysis/overview/overview.vue')
  }
]
