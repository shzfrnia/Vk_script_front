export default {
  async created() {
    if (this.$store.state.fetched) {
      return
    }
    if (this.$store.getters.accountIsSet) {
      await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
    } else {
      this.$router.push({name:'home'})
    }
  }
}