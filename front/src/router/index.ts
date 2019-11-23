import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import AuthService from '../services/AuthService'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  { path: '/', component: () => import('../pages/Index.vue') },
  { path: '/about', component: () => import('../pages/about/Index.vue') },
  { path: '/members', component: () => import('../pages/members/Index.vue') },
  { path: '/results', component: () => import('../pages/results/Index.vue') },
  { path: '/results/league', component: () => import('../pages/results/league/Index.vue') },
  { path: '/results/league/:leagueId', component: () => import('@/pages/results/leagueDetail/leagueDetail.vue') },
  { path: '/santama', component: () => import('../pages/santama/Index.vue') },
  { path: '/bbs', component: () => import('../pages/bbs/Index.vue') },
  { path: '/error', component: () => import('../pages/error/Index.vue') },
  /*
  { path: '/bbs/create', component: () => import('./pages/bbs/Create') },
  { path: '/bbs/:postId', component: () => import('./pages/bbs/_postId/Index') },
  */
  {
    path: '/mizutori',
    component: () => import('../pages/mizutori/Index.vue'),
    beforeEnter: (_to, _from, next) => {
      if (AuthService.isLogin()) {
        next()
        return
      }
      next({
        path: '/mizutori/login'
      })
    }
  },
  { path: '/mizutori/login', component: () => import('../pages/mizutori/login/Index.vue') }

]
})

router.beforeEach((to: Route, from: Route, next) => {
  const meta: { [key: string]: string } = {
    '/': '一橋大バドミントン部',
    '/about': '部活概要 | 一橋バド',
    '/members': '部員紹介 | 一橋バド',
    '/results': '大会結果 | 一橋バド',
    '/results/league': 'リーグ戦結果 | 一橋バド',
    '/bbs': '掲示板 | 一橋バド',
    '/mizutori': 'みずとり会 | 一橋バド',
    '/mizutori/login': 'みずとり会 ログイン | 一橋バド',
  };

  const title = meta[to.fullPath] || '一橋大バドミントン部';
  (document.querySelector('title') as HTMLTitleElement).innerText = title;

  next()
});

export default router
