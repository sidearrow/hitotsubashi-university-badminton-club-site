import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',               component: () => import('@/components/pgTop') },
    { path: '/member',         component: () => import('@/components/pgMember') },
    { path: '/result',         component: () => import('@/components/pgResult') },
    { path: '/santama',        component: () => import('@/components/pgSantama') },
    { path: '/bbs/list/:year', component: () => import('@/components/BBS/pgBBSList') },
    { path: '/bbs/detail/:id', component: () => import('@/components/BBS/pgBBSDetail') },
    { path: '/bbs/input',      component: () => import('@/components/BBS/pgBBSInput') },
    { path: '/mizutori',       component: () => import('@/components/pgMizutori') },
  ]
});
