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
      component: () => import('./views/About.vue'),
      meta: {
        bkColor: "#8E00AC"
      }
    },
    {
      path: '/second',
      name: 'Second',
      component: () => import('./views/SecondPage.vue'),
      meta: {
        bkColor: "#BE0031"
      }
    },
    {
      path: '/third',
      name: 'Third',
      component: () => import('./views/ThirdPage.vue'),
      meta: {
        bkColor: "#8E00AC"
      }
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: () => import('./views/FourthPage.vue'),
      meta: {
        bkColor: "#DE9B00"
      }
    }
  ]
})
