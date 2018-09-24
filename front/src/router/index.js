import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/top/Index')
    },
    {
      path: '/member',
      component: () => import('@/pages/member/Index')
    },
    {
      path: '/result',
      component: () => import('@/pages/result/Index')
    },
    {
      path: '/santama',
      component: () => import('@/pages/santama/Index')
    },
    {
      path: '/bbs/posts',
      component: () => import('@/pages/bbs/posts/Index')
    },
    {
      path: '/bbs/new',
      component: () => import('@/pages/bbs/input/Index')
    },
    {
      path: '/bbs/edit/:id',
      component: () => import('@/pages/bbs/input/Index')
    },
    {
      path: '/bbs/reply/:id',
      component: () => import('@/pages/bbs/input/Index')
    },
    {
      path: '/mizutori',
      component: () => import('@/pages/mizutori/Index')
    },
    {
      path: '/manage',
      component: () => import('@/pages/manage/Index')
    }
  ]
});
