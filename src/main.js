import Vue from 'vue';
import App from './App';
import router from './router';

import {
  MdApp,
  MdButton,
  MdCard,
  MdContent,
  MdDrawer,
  MdField,
  MdIcon,
  MdList,
  MdTable,
  MdToolbar,
} from 'vue-material/dist/components';

Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdDrawer);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdTable);
Vue.use(MdToolbar);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});