<template>
    <router-link :to="{name: 'home'}">
        <div style="overflow: hidden;" class="my-btn" :style="{'width': widthButton}">
            <i class="fas fa-user"></i>
            <transition name='fade'>
                <p class="inline" v-show="nameIsShow">{{userName}}</p>
            </transition>
        </div>
    </router-link>
</template>

<script>
    export default {
      name: "AccountManager",
        props: {
          userName: {
            type: String,
            required: true
          }
        },
        computed: {
          routeIsActive() {
            return this.$route.path === '/'
          },
          nameIsShow() {
            return this.routeIsActive && this.$store.getters.accountIsSet
          },
          widthButton() {
            if (!this.routeIsActive) // when route is not active
              return 50 + 'px'

            if (this.routeIsActive && this.nameIsShow) // when route is active and has account
              return (this.userName.length * 20) + 'px'

            if (this.routeIsActive) // when route just active
              return 80 + 'px'

            return 50 + 'px'
          }
        },
    }
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity 1.3s;
    }

    .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .inline {
        margin-left: 10px;
        display: inline;
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
        overflow: hidden;
    }

    .router-link-exact-active .my-btn{
        width: 80px;
    }
</style>