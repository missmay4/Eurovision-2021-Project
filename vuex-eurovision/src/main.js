import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapvue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import i18n from './i18n'

Vue.use(bootstrapvue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
