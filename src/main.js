import Vue from 'vue'
import App from './App'
import router from './router'

import config from './Config';

Vue.config.productionTip = false

firebase.initializeApp(config.firebase);
export const database = firebase.database();

new Vue({
  el: '#main',
  router,
  components: { App },
  template: '<App/>',
});