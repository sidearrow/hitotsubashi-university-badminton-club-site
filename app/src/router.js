import Vue from 'vue'
import Router from 'vue-router'

import mizutoriAuth from './firebase/mizutori-auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./pages/Index')
    },

    {
      path: '/about',
      component: () => import('./pages/about/Index')
    },
    {
      path: '/members',
      component: () => import('./pages/members/Index')
    },

    /* 大会結果 */
    {
      path: '/results',
      component: () => import('./pages/results/Index')
    },
    {
      path: '/results/league',
      component: () => import('./pages/results/league/Index')
    },

    /* 三多摩大会 */
    {
      path: '/santama',
      component: () => import('./pages/santama/Index')
    },

    /* 掲示板 */
    /*
    {
      path: '/bbs',
      component: () => import('./pages/bbs/Index')
    },
    {
      path: '/bbs/create',
      component: () => import('./pages/bbs/Create')
    },
    {
      path: '/bbs/:postId',
      component: () => import('./pages/bbs/_postId/Index')
    },
    */

    /* みずとり会 */
    {
      path: '/mizutori',
      component: () => import('./pages/mizutori/Index'),
      beforeEnter: (to, from, next) => {
        if (mizutoriAuth.isLogin()) {
          next()
          return
        }
        next({
          path: '/mizutori/login'
        })
      }
    },
    {
      path: '/mizutori/login',
      component: () => import('./pages/mizutori/login/Index')
    }
  ]
})
