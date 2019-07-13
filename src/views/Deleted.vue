<template>
    <div>
        <user-card :key="friend.id" :account="friend" v-for="friend in deletedFriends"> </user-card>
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
      }
    }
</script>

<style scoped>

</style>