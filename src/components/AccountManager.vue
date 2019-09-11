<template>
    <div>
        <router-link :to="{name: 'home', query: { link: this.$route.query.link } }">
            <div class="my-btn" :class="nameNeedShow ? 'name-expanded' : 'name-hidden'">
                <avatar v-if="$store.getters.accountIsSet" :url="$store.state.session.avatar"/>
                <i v-else class="fas fa-user"></i>
                <p v-if="$store.getters.accountIsSet" :style="{'width': nameWidth}" class="nickname">{{userName}}</p>
            </div>
        </router-link>
    </div>
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
          nameNeedShow() {
            return this.routeIsActive && this.$store.getters.accountIsSet
          },
          nameWidth() {
            return (this.userName.length * 13) + 'px'
          },
          userName() {
            return this.$store.getters.accountName
          }
        },
    }
</script>

<style scoped>
    .my-btn {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        padding: 0 10px 0 10px;
        min-width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: gray;
        border-radius: 25px;
        background-color: white;
        transition: .5s;
        overflow: hidden;
    }

    /*.my-btn.name-hidden {*/
    /*    width: 50px;*/
    /*}*/

    .nickname {
        text-align: center;
        transition: .5s;
        margin: 0 0 0 10px;
        white-space: nowrap;
    }

    .md-avatar {
        margin: 0;
    }

    .name-hidden .nickname {
        width: 0 !important;
        opacity: 0;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none !important;
    }

    .router-link-exact-active .name-hidden.my-btn{
        width: 50px;
    }


    @media screen and (max-width: 530px) {
        .nickname {
            display: none;
        }
        .my-btn {
            width: 50px;
        }
    }
</style>