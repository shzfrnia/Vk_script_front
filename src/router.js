import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        bkColor: "#3EAF6F"
      }
    },
    {
      path: '/banned_friends',
      name: 'banned',
      component: () => import('./views/Banned.vue'),
      meta: {
        bkColor: "#8E00AC"
      }
    },
    {
      path: '/deleted_friends',
      name: 'deleted',
      component: () => import('./views/Deleted.vue'),
      meta: {
        bkColor: "#BE0031"
      }
    },
    {
      path: '/abandoned_friends',
      name: 'abandoned',
      component: () => import('./views/Abandoned.vue'),
      meta: {
        bkColor: "#DE9B00"
      }
    }
  ]
})
