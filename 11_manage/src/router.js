import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/members', component: () => import('./pages/members/index/index.vue') },
    { path: '/members/new', component: () => import('./pages/members/edit/index.vue') },
    { path: '/members/:id/edit', component: () => import('./pages/members/edit/index.vue') }
  ]
})
