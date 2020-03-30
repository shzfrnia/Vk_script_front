import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueI18n from 'vue-i18n'
import messages from './localizations/index'

Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.use(VueI18n)
var i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
