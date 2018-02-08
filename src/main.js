// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './Header'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
