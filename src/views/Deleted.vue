<template>
    <div style="width: 100%">
        <user-card @click.native="clickOnUser(index)"
                   :key="friend.id"
                   :account="friend"
                   v-for="friend in deletedFriends"></user-card>
    </div>
</template>

<script>
    import UserCard from "../components/UserCard"

    export default {
      name: "Deleted",
      components: {
        UserCard
      },
      computed: {
        deletedFriends() {
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