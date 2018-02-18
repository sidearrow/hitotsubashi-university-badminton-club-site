import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import BBSList from '@/components/BBSList';
import BBSInput from '@/components/BBSInput';
import Mizutori from '@/components/Mizutori';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Top,
    },
    {
      path: '/bbs/list/:pagenum',
      component: BBSList,
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
