import Vue from 'vue';
import App from './App';
import router from './router';

import Config from './Config';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

firebase.initializeApp(Config.firebase);

export const firestore = firebase.firestore();