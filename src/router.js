import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'

Vue.use(Router)

async function tryToSetUpAccount(link, daysOffline) {
  try {
    await store.dispatch('account/setAccount',link);
    store.commit('friends/setDaysOffline', daysOffline)
  } catch (e) {
    store.commit('errors/setError', {form: 'setAccount', errors: e})
  }
}

const redirectIfAccountIsNotSet = async(to, from, next) => {
  const accountLink = to.query.link;
  const daysOffline = to.query.days_offline;
  if(!store.getters['account/accountIsSet'] && daysOffline && accountLink) {
    await tryToSetUpAccount(accountLink, daysOffline);
    if(store.getters['account/accountIsSet']) {
      next({name: to.name, query: {link:accountLink, days_offline:daysOffline}})
      if(!store.state.friends.friendsFetched) {
        store.commit('setLoading', true)
        await store.dispatch('friends/fetchAllFriends', store.state.account.session.userIds)
        store.commit('setLoading', false)
      }
      return
    } else {
      next("/")
    }
  }
  next()
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

