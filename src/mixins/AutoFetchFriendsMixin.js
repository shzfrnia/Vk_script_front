export default {
  async created() {
    if (this.$store.state.fetched) {
      return
    }
    const link = this.$route.query.link
    const daysOffline  = this.$route.query.days_offline
    if (link) {
      try {
        if (daysOffline) {
          this.$router.push({ name: 'abandoned', query: { link: link, days_offline: daysOffline }})
          this.$store.commit('setDaysOffline', daysOffline)
        } else {
          this.$store.commit('setDaysOffline', 362/2)
        }
        await this.$store.dispatch('setAccount', link)
      } catch (e) {
        this.$router.push({name: 'home'})
      }
      await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
    } else {
      this.$router.push({name: 'home'})
    }
  }
}