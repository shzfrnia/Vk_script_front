<template>
    <div id="nav">
        <div class="my-btn-container">
            <account-manager :user-name="'Hello world'"></account-manager>
            <router-link :to="{name: 'banned'}">
                <div class="my-btn">
                    <i style="color: red;" class="fas fa-map-marker"></i>
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
    .my-btn-container {
        display: flex;
        /*background-color: black;*/
        /*padding-top: 150px;*/
        /*padding-bottom: 150px;*/
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