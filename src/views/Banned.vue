<template>
    <div style="width: 100%">
        <md-card md-with-hover>
            <!--   HERE ANIMATION         -->
            <md-ripple>
            <!--                -->
            <md-card-header>
                <md-card-media>
                    <img src="https://vuematerial.io/assets/examples/avatar-2.jpg" alt="People">
                </md-card-media>
                <md-card-header-text>
                    <div class="md-title">Media card</div>
<!--                    <div class="md-subhead">Normal size</div>-->
                </md-card-header-text>

            </md-card-header>
<!--            <md-card-actions>-->
<!--                <md-button>Action</md-button>-->
<!--                <md-button>Action</md-button>-->
<!--            </md-card-actions>-->
            </md-ripple>
        </md-card>
<!--        <user-card :key="friend.id" :account="friend" v-for="friend in bannedFriends"> </user-card>-->
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
    .md-card {
        background: white;
        min-height: 100px;
        height: 110px;
    }

</style>