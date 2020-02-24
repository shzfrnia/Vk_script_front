<template>
    <div class="md-layout-item md-size-50 md-small-size-100">
        <user-cards-list
                category="Удаленные"
                :user-card-list="deletedFriends"/>
    </div>
</template>

<script>
    import UserCardsList from '../components/UserCardsList'

    export default {
      name: "Deleted",
      components: {
        UserCardsList
      },
      computed: {
        deletedFriends() {
          return this.$store.getters.deletedFriends
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
