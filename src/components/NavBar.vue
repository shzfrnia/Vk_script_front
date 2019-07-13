<template>
    <div id="nav">
        <div class="my-btn-container">
            <account-manager></account-manager>
            <router-link :class="{disabled: !$store.getters.accountIsSet}" :to="{name: 'banned'}">
                <div class="my-btn">
                    <i :style="[{'color' : $store.getters.accountIsSet ? '#8E00AC': 'gray'}]" class="fas fa-user-slash"></i>
                </div>
            </router-link>
            <router-link :class="{disabled: !$store.getters.accountIsSet}" :to="{name: 'deleted'}">
                <div class="my-btn">
                    <i :style="[{'color' : $store.getters.accountIsSet ? '#BE0031': 'gray'}]" class="fas fa-user-times"></i>
                </div>
            </router-link>
            <router-link :class="{disabled: !$store.getters.accountIsSet}" :to="{name: 'abandoned'}">
                <div class="my-btn">
                    <i :style="[{'color' : $store.getters.accountIsSet ? '#DE9B00': 'gray'}]" class="fas fa-user-clock"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import AccountManager from '../components/AccountManager'

  export default {
    name: "NavBar",
    components: {
      AccountManager
    }
  }
</script>

<style scoped>
    .disabled {
        pointer-events: none;
    }

    .my-btn-container {
        display: flex;
        min-height: 70px;
        align-items: center;
        justify-content: center;
    }

    .my-btn {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: gray;
        border-radius: 25px;
        background-color: white;
        text-align: center;
        line-height: 50px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transition: 0.5s;
    }
    .router-link-active .my-btn{
        width: 80px;
    }
</style>