import Router from 'vue-router'

import mizutoriAuth from '../firebase/mizutori-auth'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: () => import('@/pages/Index') },
    { path: '/about', component: () => import('@/pages/about/Index') },
    { path: '/members', component: () => import('@/pages/members/index/Index') },
    { path: '/results', component: () => import('@/pages/results/Index') },
    { path: '/results/league', component: () => import('@/pages/results/league/Index') },
    { path: '/santama', component: () => import('@/pages/santama/Index') },
    { path: '/bbs', component: () => import('@/pages/bbs/Index') },
    /*
    { path: '/bbs/create', component: () => import('./pages/bbs/Create') },
    { path: '/bbs/:postId', component: () => import('./pages/bbs/_postId/Index') },
    */
    {
      path: '/mizutori',
      component: () => import('@/pages/mizutori/Index'),
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
    { path: '/mizutori/login', component: () => import('@/pages/mizutori/login/Index') }
  ]
})

router.beforeEach((to, from, next) => {
  const meta = {
    '/'              : '一橋大バドミントン部',
    '/about'         : '部活概要 | 一橋バド',
    '/members'       : '部員紹介 | 一橋バド',
    '/results'       : '大会結果 | 一橋バド',
    '/results/league': 'リーグ戦結果 | 一橋バド',
    '/bbs'           : '掲示板 | 一橋バド',
    '/mizutori'      : 'みずとり会 | 一橋バド',
    '/mizutori/login': 'みずとり会 ログイン | 一橋バド',
  };

  const title = meta[to.fullPath] || '一橋大バドミントン部'
  
  document.querySelector('title').innerText = title

  next()
});

export default router;
