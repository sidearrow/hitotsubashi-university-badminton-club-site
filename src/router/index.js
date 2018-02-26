import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import Member from '@/components/Member';
import BBSList from '@/components/BBS/BBSList';
import BBSInput from '@/components/BBS/BBSInput';
import BBSDetail from '@/components/BBS/BBSDetail';
import Mizutori from '@/components/Mizutori/Mizutori';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Top,
    },
    {
      path: '/member',
      component: Member,
    },
    {
      path: '/bbs/list',
      component: BBSList,
    },
    {
      path: '/bbs/list/:postid',
      component: BBSDetail,
    },
    {
      path: '/bbs/input',
      component: BBSInput,
    },
    {
      path: '/bbs/input/:type/:id',
      component: BBSInput,
    },
    {
      path: '/mizutori',
      component: Mizutori,
    }
  ]
});
