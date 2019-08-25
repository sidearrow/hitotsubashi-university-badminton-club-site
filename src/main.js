import Vue from 'vue'
import VueMeta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'
import '@/assets/scss/bootstrap-vue/custom.scss'

Vue.config.productionTip = false
Vue.use(VueMeta, {})
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
