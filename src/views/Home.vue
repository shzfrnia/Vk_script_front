<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <md-field>
                    <label>Ссылка на профиль</label>
                    <md-input @keydown.enter="setAccount()" @input="clearError()" v-model="account_link"></md-input>
                </md-field>
                <md-button @click="setAccount()" class="md-raised md-primary">Сканировать аккаунт</md-button>
                <transition name="fade">
                    <p v-if="hasError" style="font-size: 40px; color:red;">{{errorMsg}}</p>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "home",
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
      }
    },
    methods: {
      async setAccount() {
        this.$store.commit('resetAccount')
        await this.$store.dispatch('setAccount', this.account_link)
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
    },
    async created() {
      if (this.$store.getters.accountIsSet) {
        await this.$store.dispatch('fetchAllFriends', this.$store.state.session.userIds)
      }
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
    }

    .md-button {
        outline: none;
    }

    .container {
        height: 260px;
        align-self: center;
    }
</style>