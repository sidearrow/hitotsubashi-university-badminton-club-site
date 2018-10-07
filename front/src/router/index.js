import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/top/index.vue')
    },
    {
      path: '/member',
      component: () => import('@/pages/member/index.vue')
    },
    {
      path: '/result',
      component: () => import('@/pages/result/index')
    },
    {
      path: '/santama',
      component: () => import('@/pages/santama/index')
    },
    {
      path: '/bbs/post/:id',
      component: () => import('@/pages/bbs/post/index')
    },
    {
      path: '/bbs/posts',
      component: () => import('@/pages/bbs/posts/index')
    },
    {
      path: '/bbs/new',
      component: () => import('@/pages/bbs/input/index')
    },
    {
      path: '/bbs/edit/:id',
      component: () => import('@/pages/bbs/input/index')
    },
    {
      path: '/bbs/reply/:id',
      component: () => import('@/pages/bbs/input/index')
    },
    {
      path: '/mizutori',
      component: () => import('@/pages/mizutori/index')
    },
    {
      path: '/manage',
      component: () => import('@/pages/manage/index')
    }
  ]
});
