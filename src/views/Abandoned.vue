<template>
    <div>
        <user-card :key="friend.id" :account="friend" v-for="friend in abandonedFriends"></user-card>
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
    }
  }
</script>

<style scoped>

</style>