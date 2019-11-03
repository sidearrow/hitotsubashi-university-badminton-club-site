import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import '@/assets/icon/style.css'
import '@/assets/scss/main.scss'
import '@/assets/scss/bootstrap-vue/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
