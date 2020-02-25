<template>
  <div class="md-layout-item md-size-50 md-small-size-100">
    <user-cards-list
        category="Удаленные"
        :user-card-list="deletedFriends"/>
  </div>
</template>

<script>
  import UserCardsList from '../components/UserCardsList'
  import {mapGetters} from 'vuex'

  export default {
    name: "Deleted",
    components: {
      UserCardsList
    },
    computed: {
      ...mapGetters('friends', [
        'deletedFriends'
      ])
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
