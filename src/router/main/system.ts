export default [
  {
    path: '/main/system/department',
    name: 'department',
    component: () => import('@/pages/main/system/department/department.vue')
  },
  {
    path: '/main/system/menu',
    name: 'menu',
    component: () => import('@/pages/main/system/menu/menu.vue')
  },
  {
    path: '/main/system/role',
    name: 'role',
    component: () => import('@/pages/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    name: 'user',
    component: () => import('@/pages/main/system/user/user.vue')
  }
]
