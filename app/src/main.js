import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import config from './config'

Vue.prototype.$config = config
Vue.prototype.$http = axios.create({
  baseURL: (process.env.NODE_ENV === 'development')
             ? config.apiBaseUrl.development
             : config.apiBaseUrl.production
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})