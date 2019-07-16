<template>
    <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout-item">
            <user-cards-list
                    :show-meta="true"
                    category="Забросившие аккаунт"
                    :user-card-list="abandonedFriends"></user-cards-list>
        </div>
        <div class="md-layout-item md-size-20"></div>
    </div>
</template>

<script>
  import UserCardsList from '../components/UserCardsList'

  export default {
    name: "Abandoned",
    components: {
      UserCardsList
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