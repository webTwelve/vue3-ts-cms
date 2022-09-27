export default [
  {
    path: '/main/story/chat',
    name: 'chat',
    component: () => import('@/pages/main/story/chat/chat.vue')
  },
  {
    path: '/main/story/list',
    name: 'list',
    component: () => import('@/pages/main/story/list/list.vue')
  }
]
