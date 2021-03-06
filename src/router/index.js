import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    metaTags: [
      {
        title: 'Zhanhua Liang - Home',
        metaTags: [
          {
            name: 'description',
            content: 'The personal introduction website of Zhanhua Liang.'
          }
        ]
      }
    ]
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
    path: '/tools/simple-score-board',
    name: 'Simple Score Board',
    component: () => import('../views/tools/simple-score-board.vue')
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
