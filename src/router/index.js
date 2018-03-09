import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/pgTop';
import Member from '@/components/pgMember';
import Result from '@/components/pgResult';
import Santama from '@/components/pgSantama';
import BBSList from '@/components/BBS/BBSList';
import BBSDetail from '@/components/BBS/BBSDetail';
import BBSInput from '@/components/BBS/BBSInput';
import Mizutori from '@/components/pgMizutori';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Top},
    { path: '/member', component: Member},
    { path: '/result', component: Result},
    { path: '/santama', component: Santama},
    { path: '/bbs/list/:p', component: BBSList},
    { path: '/bbs/detail/:id', component: BBSDetail},
    { path: '/bbs/input', component: BBSInput},
    { path: '/mizutori', component: Mizutori},
  ]
});
