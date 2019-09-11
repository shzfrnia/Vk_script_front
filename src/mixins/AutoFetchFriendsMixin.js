export default {
  async created() {
    if (this.$store.state.fetched) {
      return
    }
    const link = this.$route.query.link
    if (link) {
      try {
        await this.$store.dispatch('setAccount', link)
      } catch (e) {
        this.$router.push({name: 'home'})
      }
      await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
    }
    if (this.$store.getters.accountIsSet) {
      await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
    } else {
      this.$router.push({name:'home'})
    }
  }
}