import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./views/page404.vue'),
      meta: {
        bkColor: "#3EAF6F"
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
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
