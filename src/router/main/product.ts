export default [
  {
    path: '/main/product/category',
    name: 'category',
    component: () => import('@/pages/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    name: 'goods',
    component: () => import('@/pages/main/product/goods/goods.vue')
  }
]
