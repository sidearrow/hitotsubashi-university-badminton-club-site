import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/top/Top')
    },
    {
      path: '/member',
      component: () => import('@/components/pages/member/Member')
    },
    {
      path: '/result',
      component: () => import('@/components/pages/result/Result')
    },
    {
      path: '/santama',
      component: () => import('@/components/pages/santama/Santama')
    },
    {
      path: '/bbs',
      component: () => import('@/components/pages/bbs/BBS')
    },
    {
      path: '/bbs/input',
      component: () => import('@/components/pages/bbs/input/BBSInput')
    },
    {
      path: '/bbs/:id',
      component: () => import('@/components/pages/bbs/detail/BBSDetail')
    },
    {
      path: '/mizutori',
      component: () => import('@/components/pages/mizutori/Mizutori')
    },
  ]
});
