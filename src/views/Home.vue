<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <md-field>
                    <label>Ссылка на профиль</label>
                    <md-input @input="clearError()" v-model="account_link"></md-input>
                </md-field>
                <md-button @click="setAccount()" class="md-raised md-primary">Сканировать аккаунт</md-button>
                <p v-if="hasError" style="font-size: 40px; color:red;">{{errorMsg}}</p>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "home",
    data() {
      return {
        account_link: '',
        has_error: this.$store.state.errors.setAccount !== ''
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
        return await this.$store.dispatch('setAccount', this.account_link)
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
    }

    .md-button {
        outline: none;
    }

    .container {
        align-self: center;
        margin-bottom: 160px;
    }
</style>