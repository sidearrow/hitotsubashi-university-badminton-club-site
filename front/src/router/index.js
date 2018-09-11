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
      path: '/bbs/pages',
      component: () => import('@/pages/bbs/pages/Index')
    },
    {
      path: '/bbs/input',
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
