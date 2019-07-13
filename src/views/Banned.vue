<template>
    <div style="width: 100%">
        <user-card @click.native="clickOnUser(index)"
                   :key="friend.id"
                   :account="friend"
                   v-for="friend in bannedFriends"> </user-card>
    </div>
</template>

<script>
  import UserCard from "../components/UserCard"

  export default {
    name: "Banned",
    components: {
      UserCard
    },
    computed: {
      bannedFriends() {
        return this.$store.state.bannedFriends
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