import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',        component: () => import('@/pages/top/index') },
    { path: '/member',  component: () => import('@/pages/member/index') },
    { path: '/result',  component: () => import('@/pages/result/index') },
    { path: '/santama', component: () => import('@/pages/santama/index') },
    { path: '/bbs/posts/:id', component: () => import('@/pages/bbs/post/index')},
    { path: '/bbs/posts/:id/edit', component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/posts/:id/delete', component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/posts', component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/:date', component: () => import('@/pages/bbs/posts/index') },
    { path: '/bbs/posts/narrowdate', component: () => import('@/pages/bbs/posts/narrowdate/index') },
    { path: '/bbs/new', component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/reply/:id', component: () => import('@/pages/bbs/input/index') },
    { path: '/bbs/delete/:id', component: () => import('@/pages/bbs/delete/index') },
    { path: '/mizutori', component: () => import('@/pages/mizutori/index') },
    { path: '/manage', component: () => import('@/pages/manage/index') }
  ]
});