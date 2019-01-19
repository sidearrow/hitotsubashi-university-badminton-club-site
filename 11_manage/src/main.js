import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import config from './config/index'

Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: config.apiBaseUrl
})
Vue.prototype.$config = config

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
