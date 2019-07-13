<template>
    <router-link id="link" :to="{name: 'home'}">
        <div style="overflow: hidden;" class="my-btn" :style="{'width': widthButton}">
            <avatar v-if="$store.getters.accountIsSet" :url="$store.state.session.avatar"></avatar>
            <i v-else class="fas fa-user"></i>
            <transition name='fade'>
                <p id="nickname" v-show="nameIsShow">{{userName}}</p>
            </transition>
        </div>
    </router-link>
</template>

<script>
    import Avatar from '../components/Avatar'

    export default {
      name: "AccountManager",
      components: {
        Avatar
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
          },
          userName() {
            return this.$store.getters.accountName
          }
        },
    }
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity 2.7s;
    }

    .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .my-btn {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
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

    .my-btn p {
        margin: 0 0 0 10px;
    }

    .md-avatar {
        margin: 0;
    }

    a {
        text-decoration: none !important;
    }

    .router-link-exact-active .my-btn{
        width: 80px;
    }

    @media screen and (max-width: 530px) {
        #nickname {
            display: none;
        }
        #link .my-btn {
            width: 50px !important;
        }
    }

</style>