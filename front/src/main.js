import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import config from './config'

Vue.prototype.$http = axios
Vue.prototype.$config = config

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})