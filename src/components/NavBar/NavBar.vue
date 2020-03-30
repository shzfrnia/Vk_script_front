<template>
  <div id="nav">
    <div class="my-btn-container">
      <nav-bar-item
          :badge-value="allFriendsBadge"
          :account-is-set="accountIsSet"
          :account-link="$route.query.link"
          :days-offline="daysOffline"
          :is-account-link="true"
          :to="'home'"
          :account-ava-link="session.avatar"
          :label="accountName"
          :icon="'fas fa-user'"
          :icon-color="'red'"/>
      <nav-bar-item
          :badge-value="bannedBadge"
          :account-is-set="accountIsSet"
          :account-link="$route.query.link"
          :days-offline="daysOffline"
          :to="'banned'"
          :account-ava-link="session.avatar"
          :label="'Забаненные'"
          :icon="'fas fa-user-slash'"
          :icon-color="'#8E00AC'"/>
      <nav-bar-item
          :badge-value="deletedBadge"
          :account-is-set="accountIsSet"
          :account-link="$route.query.link"
          :days-offline="daysOffline"
          :to="'deleted'"
          :account-ava-link="session.avatar"
          :label="'Удаленные'"
          :icon="'fas fa-user-times'"
          :icon-color="'#BE0031'"/>
      <nav-bar-item
          :badge-value="abandonedBadge"
          :account-is-set="accountIsSet"
          :account-link="$route.query.link"
          :days-offline="daysOffline"
          :to="'abandoned'"
          :account-ava-link="session.avatar"
          :label="'Потерялись'"
          :icon="'fas fa-user-clock'"
          :icon-color="'#DE9B00'"/>
    </div>
  </div>
</template>

<script>
  import NavBarItem from "./NavBarItem";
  import {mapGetters, mapState} from 'vuex';

  export default {
    name: "NavBar",
    components: {
      NavBarItem
    },
    computed: {
      ...mapGetters('friends', [
        'bannedFriends',
        'deletedFriends',
        'abandonedFriends'
      ]),
      ...mapState('friends', [
        'daysOffline'
      ]),
      ...mapGetters('account', [
        'accountIsSet',
        'accountName'
      ]),
      ...mapState('account', [
        'session'
      ]),
      bannedBadge() {
        return this.bannedFriends.length || 0
      },
      abandonedBadge() {
        return this.abandonedFriends.length || 0
      },
      deletedBadge() {
        return this.deletedFriends.length || 0
      },
      allFriendsBadge() {
        return this.$store.state.friends.friendList.length || 0
      }
    }
  }
</script>

<style scoped>
  .my-btn-container {
    display: flex;
    min-height: 90px;
    align-items: center;
    justify-content: center;
  }
</style>
