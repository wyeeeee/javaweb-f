// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/web/index.vue'),
    children: [
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/web/login.vue'),
      },
      {
        path: 'table',
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/web/table.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
