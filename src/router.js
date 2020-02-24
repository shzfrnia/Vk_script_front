import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

async function tryToSetUpAccount(link, daysOffline) {
  await store.dispatch('setAccount', link)
  store.commit('setDaysOffline', daysOffline)
}


const redirectIfAccountIsNotSet = async(to, from, next) => {
  const accountLink = to.query.link;
  const daysOffline =  to.query.days_offline;
  if(!store.getters.accountIsSet) {
    await tryToSetUpAccount(accountLink, daysOffline);
  }
  if(store.getters.accountIsSet) {
    if (to.name === "Home" && from.name !== "Home") { next({name: "home", query: {link: accountLink, days_offline: daysOffline}}) }
    if(!store.state.fetched) store.dispatch('fetchAllFriends', store.state.session.userIds).then(()=>{});
    next();
    return
  }
  next('/')
}

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
      beforeEnter: redirectIfAccountIsNotSet,
      meta: {
        bkColor: "#3EAF6F"
      }
    },
    {
      path: '/banned_friends',
      name: 'banned',
      component: () => import('./views/Banned.vue'),
      beforeEnter: redirectIfAccountIsNotSet,
      meta: {
        bkColor: "#8E00AC"
      }
    },
    {
      path: '/deleted_friends',
      name: 'deleted',
      component: () => import('./views/Deleted.vue'),
      beforeEnter: redirectIfAccountIsNotSet,
      meta: {
        bkColor: "#BE0031"
      }
    },
    {
      path: '/abandoned_friends',
      name: 'abandoned',
      component: () => import('./views/Abandoned.vue'),
      beforeEnter: redirectIfAccountIsNotSet,
      meta: {
        bkColor: "#DE9B00"
      }
    }
  ]
})

