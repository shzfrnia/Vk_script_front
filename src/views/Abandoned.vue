<template>
    <div style="width: 100%">
        <user-card @click.native="clickOnUser(index)"
                   :key="index"
                   :account="friend"
                   v-for="(friend,index) in abandonedFriends"></user-card>
    </div>
</template>

<script>
  import UserCard from "../components/UserCard"

  export default {
    name: "Abandoned",
    components: {
      UserCard
    },
    computed: {
      abandonedFriends() {
        return this.$store.state.abandonedFriends
      }
    },
    methods: {
      clickOnUser(index) {
        this.openInNewTab(this.$store.state.abandonedFriends[index].link)
      },
      openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
      }
    }
  }
</script>

<style scoped>
</style>