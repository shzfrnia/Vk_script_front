<template>
  <div id="nav">
    <div class="my-btn-container">
      <account-manager />
      <router-link :class="[{'disabled-link': !accountIsSet}]"
                   :to="{name: 'banned', query: { link: this.$route.query.link, days_offline: daysOffline }}">
        <my-badge :value="bannedBadge" :class="[{'disabled-link': !accountIsSet}]">
          <div class="my-btn">
            <i style="color: #8E00AC" class="fas fa-user-slash"/>
          </div>
        </my-badge>
      </router-link>
      <router-link :class="[{'disabled-link': !accountIsSet}]"
                   :to="{name: 'deleted', query: { link: this.$route.query.link, days_offline: daysOffline }}">
        <my-badge :value="deletedBadge" :class="[{'disabled-link': !accountIsSet}]">
          <div class="my-btn">
            <i style="color: #BE0031" class="fas fa-user-times"/>
          </div>
        </my-badge>
      </router-link>
      <router-link :class="[{'disabled-link': !accountIsSet}]"
                   :to="{name: 'abandoned', query: { link: this.$route.query.link, days_offline: daysOffline }}">
        <my-badge :value="abandonedBadge" :class="[{'disabled-link': !accountIsSet}]">
          <div class="my-btn">
            <i style="color: #DE9B00" class="fas fa-user-clock"/>
          </div>
        </my-badge>
      </router-link>
    </div>
  </div>
</template>

<script>
  import AccountManager from '../components/AccountManager'
  import MyBadge from "./MyBadge";
  import {mapGetters, mapState} from 'vuex';

  export default {
    name: "NavBar",
    components: {
      AccountManager,
      MyBadge
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
        'accountIsSet'
      ]),
      bannedBadge() {
        return this.bannedFriends.length
      },
      abandonedBadge() {
        return this.abandonedFriends.length
      },
      deletedBadge() {
        return this.deletedFriends.length
      }
    }
  }
</script>

<style>
  .badge.disabled-link .badge-container{
    display: none;
  }

  .md-badge {
    font-size: 11px !important;
    font-weight: bold;
  }

  .md-square.disabled-link .md-badge {
    display: none;
  }
</style>
<style scoped>
  .disabled-link {
    pointer-events: none;
  }

  .disabled-link i {
    color: gray !important;
  }

  .my-btn-container {
    display: flex;
    min-height: 90px;
    align-items: center;
    justify-content: center;
  }

  .my-btn {
    display: inline-block;
    cursor: pointer;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin: 5px;
    font-size: 25px;
    border-radius: 25px;
    background-color: white;
    text-align: center;
    line-height: 50px;
    transition: 0.5s;
  }

  .router-link-active .my-btn{
    width: 80px;
  }
</style>
