<template>
    <div>
        <user-card :key="friend.id" :account="friend" v-for="friend in bannedFriends"> </user-card>
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
    }
  }
</script>

<style scoped>

</style>