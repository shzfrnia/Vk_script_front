import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from './views/Default'

Vue.config.productionTip = false

Vue.component('default-layout', Default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
