<template>
    <div style="margin-top: 30vh" class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-20"></div>
        <div class="md-layout md-alignment-center-center">
            <md-field>
                <label>Ссылка на профиль</label>
                <md-input @keydown.enter="setAccount()" @input="clearError()" v-model="account_link"></md-input>
            </md-field>
            <div style="display: flex" class="md-layout-item md-size-100">
                <md-button style="margin:0 auto" @click="setAccount()" class="md-raised md-primary">Сканировать аккаунт</md-button>
            </div>
            <transition name="fade">
                            <p v-if="hasError"
                               class="error-text">{{errorMsg}}</p>
            </transition>
        </div>
        <div class="md-layout-item md-size-20"></div>
    </div>
</template>

<script>
  import AutoFetchFriendsMixin from '../mixins/AutoFetchFriendsMixin'

  export default {
    name: "home",
    mixins: [
        AutoFetchFriendsMixin
    ],
    data() {
      return {
        account_link: ''
      }
    },
    computed: {
      hasError() {
        return this.$store.state.errors.setAccount !== ''
      },
      errorMsg() {
        return this.hasError ? this.$store.state.errors.setAccount : ""
      },
      getIdsFromAccountLink() {
        const UrlIndex = this.account_link.search(/vk.com/)
        if (UrlIndex === -1 ) return this.account_link  //ids not found try return user's input bec he can input id without link
        const ids = this.account_link.slice(UrlIndex + 'vk.com'.length + 1)
        return ids
      }
    },
    methods: {
      async setAccount() {
        this.$store.commit('resetAccount')
        await this.$store.dispatch('setAccount', this.getIdsFromAccountLink)
        if (this.$store.getters.accountIsSet) {
          await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
        }
      },
      clearError() {
        this.$store.commit('clearErrors')
      }
    },
    beforeRouteLeave(to, from, next) {
      this.clearError()
      next()
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .md-field:after {
        height: 2px;
        background: black;
    }
    .md-input {
        text-align: center;
    }

    .md-field label {
        right: 0;
        text-align: center;
    }

    .md-button {
        outline: none;
    }

    .error-text {
        font-size: 30px;
        color:red;
    }

</style>