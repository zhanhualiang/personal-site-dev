import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tools',
    name: 'Tools',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tools.vue')
  },
  {
    path: '/tools/magento-2-configurable-variation-generator',
    name: 'Magento 2 Configurable Variation Generator',
    component: () => import('../views/tools/magento-2-configurable-variation-generator.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFould',
    component: () => import('../views/404-NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
