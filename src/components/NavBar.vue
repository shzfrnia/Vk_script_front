<template>
    <div id="nav">
        <div class="my-btn-container">
            <account-manager></account-manager>
            <md-badge :class="[{'disabled-link': !$store.getters.accountIsSet}]" class="md-square" :md-content="bannedBadge">
                <router-link :to="{name: 'banned'}">
                    <div class="my-btn">
                        <i style="color: #8E00AC" class="fas fa-user-slash"></i>
                    </div>
                </router-link>
            </md-badge>
            <md-badge :class="[{'disabled-link': !$store.getters.accountIsSet}]" class="md-square" :md-content="deletedBadge">
                <router-link :to="{name: 'deleted'}">
                    <div class="my-btn">
                        <i style="color: #BE0031" class="fas fa-user-times"></i>
                    </div>
                </router-link>
            </md-badge>
            <md-badge :class="[{'disabled-link': !$store.getters.accountIsSet}]" class="md-square" :md-content="abandonedBadge">
                <router-link :to="{name: 'abandoned'}">
                    <div class="my-btn">
                        <i style="color: #DE9B00" class="fas fa-user-clock"></i>
                    </div>
                </router-link>
            </md-badge>
        </div>
    </div>
</template>

<script>
    import AccountManager from '../components/AccountManager'

  export default {
    name: "NavBar",
    components: {
      AccountManager
    },
    computed: {
      bannedBadge() {
        return this.$store.state.bannedFriends.length
      },
      abandonedBadge() {
        return this.$store.state.abandonedFriends.length
      },
      deletedBadge() {
        return this.$store.state.deletedFriends.length
      }
    }
  }
</script>

<style scoped>
    .disabled-link {
        pointer-events: none;
    }

    .disabled-link i {
        color: gray !important;
    }

    .my-btn-container {
        display: flex;
        min-height: 80px;
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