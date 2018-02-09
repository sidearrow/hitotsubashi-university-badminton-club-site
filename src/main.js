import Vue from 'vue'
import Header from './Header'
import App from './App'
import router from './router'

Vue.config.productionTip = false

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
