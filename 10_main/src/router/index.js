import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const metaAuthManage = { authManage: true }

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/',        component: () => import('@/pages/top/index') },
    { path: '/member',  component: () => import('@/pages/member/index') },
    { path: '/result',  component: () => import('@/pages/result/index') },
    { path: '/santama', component: () => import('@/pages/santama/index') },

    // 掲示板
    { path: '/bbs/posts/:id',        component: () => import('@/pages/bbs/post/index')},
    { path: '/bbs/posts/:id/edit',   component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/posts',            component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/:date',      component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/narrowdate', component: () => import('@/pages/bbs/posts/narrowdate/index') },
    { path: '/bbs/new',              component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/reply/:id',        component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/delete/:id',       component: () => import('@/pages/bbs/delete/index') },

    // みずとり
    { path: '/mizutori',       component: () => import('@/pages/mizutori/index'), meta: { requireAuth: true } },
    { path: '/mizutori/login', component: () => import('@/pages/mizutori/login') },

    // 管理画面
    { path: '/manage/login', component: () => import('@/pages/manage/login') },
    { path: '/manage', component: () => import('@/pages/manage/index'), meta: metaAuthManage },
    { path: '/manage/obmsg', component: () => import('@/pages/manage/obmsg/index'), meta: metaAuthManage },
  ]
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

  // 管理画面ログイン
  const authManage = to.matched.some(v => v.meta.authManage)
  if (authManage) {
    if (window.sessionStorage.getItem('auth-manage-token') === 'true') {
      next()
    } else if (store.state.isLoginManage) {
      next()
    } else {
      next({ path: '/manage/login' })
    }
  } else {
    next()
  }
})

export default router;