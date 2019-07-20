<template>
    <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout-item">
            <user-cards-list
                    category="Удаленные"
                    :user-card-list="deletedFriends"></user-cards-list>
        </div>
        <div class="md-layout-item md-size-20"></div>
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
</style>