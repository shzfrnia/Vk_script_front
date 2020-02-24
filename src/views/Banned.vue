<template>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <user-cards-list
                  category="Забаненные"
                  :user-card-list="bannedFriends"/>
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
        return this.$store.getters.bannedFriends
      }
    }
  }
</script>

<style scoped>
    .md-layout-item {
        position: relative;
        padding: 0 10px 0 10px;
        height: 88vh;
    }
</style>
