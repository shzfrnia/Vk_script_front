export default {
  async created() {
    const dataIsFetched = this.$store.state.fetched;
    if (dataIsFetched) {
      return
    }

    const link = this.$route.query.link;
    const daysOffline = this.$route.query.days_offline;

    if (link) {
      this.tryToSetUpAccount(link, daysOffline)
    } else {
      this.redirectToHome()
    }
  },
  methods: {
    setUpDaysOfflineValue(days) {
      if (days) {
        this.$store.commit('setDaysOffline', days)
      } else {
        this.$store.commit('setDaysOffline', days)
      }
    },
    async setUpAccount(link) {
      await this.$store.dispatch('setAccount', link)
    },
    async redirectToHome() {
      await this.$router.push({name: 'home'})
    },
    async tryToSetUpAccount(link, daysOffline) {
      try {
        this.setUpAccount(link);
        this.setUpDaysOfflineValue(daysOffline);
        await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
      } catch (e) {
        this.redirectToHome()
      }
    }
  }
}
