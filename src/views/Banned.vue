<template>
    <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout-item">
          <user-cards-list
                  category="Забанненые"
                  :user-card-list="bannedFriends"></user-cards-list>
        </div>
        <div class="md-layout-item md-size-20"></div>
    </div>
</template>

<script>
  import UserCardsList from '../components/UserCardsList'

  export default {
    name: "Banned",
    components: {
      UserCardsList
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