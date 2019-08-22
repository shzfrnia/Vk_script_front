<template>
    <div id="nav">
        <div class="my-btn-container">
            <account-manager></account-manager>
                <router-link :to="{name: 'banned'}">
                    <my-badge :value="bannedBadge" :class="[{'disabled-link': !$store.getters.accountIsSet}]">
                        <div class="my-btn">
                            <i style="color: #8E00AC" class="fas fa-user-slash"></i>
                        </div>
                    </my-badge>
                </router-link>
                <router-link :to="{name: 'deleted'}">
                    <my-badge :value="deletedBadge" :class="[{'disabled-link': !$store.getters.accountIsSet}]">
                        <div class="my-btn">
                            <i style="color: #BE0031" class="fas fa-user-times"></i>
                        </div>
                    </my-badge>
                </router-link>
                <router-link :to="{name: 'abandoned'}">
                    <my-badge :value="abandonedBadge" :class="[{'disabled-link': !$store.getters.accountIsSet}]">
                        <div class="my-btn">
                            <i style="color: #DE9B00" class="fas fa-user-clock"></i>
                        </div>
                    </my-badge>
                </router-link>
        </div>
    </div>
</template>

<script>
    import AccountManager from '../components/AccountManager'
    import MyBadge from "./MyBadge";

  export default {
    name: "NavBar",
    components: {
      AccountManager,
      MyBadge
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