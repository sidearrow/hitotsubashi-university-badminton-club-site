import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import bootstrapVueModules from './modules/bootstrapVueModules'

import '@/assets/icon/style.css'
import '@/assets/scss/main.scss'
import '@/assets/scss/bootstrap-vue/custom.scss'

Vue.config.productionTip = false
Vue.use(Router)

bootstrapVueModules.forEach((plugin) => {
  Vue.use(plugin)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
