import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',                            component: () => import('@/pages/top/index') },
    { path: '/member',                      component: () => import('@/pages/member/index') },
    { path: '/result',                      component: () => import('@/pages/result/index') },
    { path: '/santama',                     component: () => import('@/pages/santama/index') },
    { path: '/bbs/posts/create',            component: () => import('@/pages/bbs/create') },
    { path: '/bbs/posts/:id',               component: () => import('@/pages/bbs/post')},
    { path: '/bbs/posts/:id/edit',          component: () => import('@/pages/bbs/edit') },
    { path: '/bbs/posts',                   component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/:date',             component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/narrowdate',        component: () => import('@/pages/bbs/posts/narrowdate/index') },
    { path: '/bbs/delete/:id',              component: () => import('@/pages/bbs/delete/index') },
    { path: '/mizutori',                    component: () => import('@/pages/mizutori/index'), meta: { requireAuth: true } },
    { path: '/mizutori/login',              component: () => import('@/pages/mizutori/login') },
  ],
  scrollBehavior: () => ({ x: 0, y: 0 })
});

router.beforeEach((to, from, next) => {
  // みずとり会ログイン
  const requireAuth = to.matched.some(v => v.meta.requireAuth)
  if (requireAuth) {
    if (window.sessionStorage.getItem('mizutori-login-token') === 'true') {
      next()
    } else {
      next({ path: '/mizutori/login' })
    }
  }
  next()
})

export default router;
