<template>
    <div style="margin-top: 30vh" class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout md-alignment-center-center">
            <div class="md-layout-item md-size-50">
                <md-field>
                    <label>Ссылка на профиль</label>
                    <md-input @keydown.enter="setAccount()" @input="clearError()" v-model="account_link"></md-input>
                </md-field>
                <div class="md-layout md-size-100 md-alignment-center-center">
                    <md-button @click="setAccount()" class="md-raised">Сканировать аккаунт</md-button>
                </div>
                <div class="md-layout md-size-100 md-alignment-center-center">
                    <fade-effect :show="hasError">
                        <p class="error-text">{{errorMsg}}</p>
                    </fade-effect>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FadeEffect from "../components/FadeEffect";

  export default {
    name: "home",
    components: {FadeEffect},
    data() {
      return {
        account_link: this.$route.query.link
      }
    },
    computed: {
      hasError() {
        return this.errorMsg !== ''
      },
      errorMsg() {
        return this.$store.state.errors.setAccount
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
        this.$router.push({ name: 'home', query: { link: this.getIdsFromAccountLink, days_offline: this.$store.state.daysOffline }})
        if (this.$store.getters.accountIsSet) {
          await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
        } else {
          this.$router.push({ name: 'home'})
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
        color: black;
    }

    .md-button {
        outline: none;
        background: none !important;
    }

    .error-text {
        font-size: 30px;
        color:red;
    }

    .md-focused * {
      color: black !important;
    }

    .md-field.md-theme-default:before {
      background: none;
    }
</style>
