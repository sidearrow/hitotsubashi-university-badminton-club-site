import Vue from 'vue'
import Header from './Header'
import App from './App'
import Footer from './Footer'
import router from './router'

import config from './Config';

Vue.config.productionTip = false

firebase.initializeApp(config.firebase);
export const database = firebase.database();

new Vue({
  el: 'header',
  router,
  components: { Header },
  template: '<Header/>'
});

new Vue({
  el: 'main',
  router,
  components: { App },
  template: '<App/>'
});

new Vue({
  el: 'footer',
  components: { Footer },
  template: '<Footer/>'
});
