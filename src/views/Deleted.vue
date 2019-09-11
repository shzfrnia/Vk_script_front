<template>
    <div class="md-layout-item md-size-50 md-small-size-100">
        <user-cards-list
                category="Удаленные"
                :user-card-list="deletedFriends"/>
    </div>
</template>

<script>
    import UserCardsList from '../components/UserCardsList'
    import AutoFetchFriendsMixin from '../mixins/AutoFetchFriendsMixin'

    export default {
      name: "Deleted",
      mixins: [
        AutoFetchFriendsMixin
      ],
      components: {
        UserCardsList
      },
      computed: {
        deletedFriends() {
          return this.$store.state.deletedFriends
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