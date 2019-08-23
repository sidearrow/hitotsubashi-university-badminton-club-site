import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: () => import('./pages/Index') },

    { path: '/about' , component: () => import('./pages/about/Index') },

    /* 大会結果 */
    { path: '/results'       , component: () => import('./pages/results/Index') },
    { path: '/results/league', component: () => import('./pages/results/league/Index') }
  ]
})
