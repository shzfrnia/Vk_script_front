<template>
  <div class="md-layout md-gutter md-alignment-center-center">
    <div class="md-layout md-alignment-center-center">
      <form class="md-layout-item md-size-50" @submit.prevent="setUpAccount">
        <md-field>
          <label>Ссылка на профиль</label>
          <md-input
              required
              @input="clearErrors"
              v-model="accountLink" />
        </md-field>
        <div class="md-layout md-size-100 md-alignment-center-center">
          <md-button type="submit" class="md-raised">Сканировать аккаунт</md-button>
        </div>
        <div class="md-layout md-size-100 md-alignment-center-center">
          <fade-effect :show="hasError">
            <p class="error-text">{{errorMsg}}</p>
          </fade-effect>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import FadeEffect from "../components/FadeEffect";
  import {mapActions, mapState, mapMutations, mapGetters} from 'vuex';

  export default {
    name: "home",
    components: {FadeEffect},
    data() {
      return {
        accountLink: this.$route.query.link
      }
    },
    computed: {
      ...mapState('friends', [
        'daysOffline'
      ]),
      ...mapGetters('account', [
        'accountIsSet'
      ]),
      ...mapState('account', [
        'session'
      ]),
      ...mapState('errors', [
        'errors'
      ]),
      hasError() {
        return this.errorMsg !== ''
      },
      errorMsg() {
        return this.errors.setAccount
      },
      getIdsFromAccountLink() {
        const UrlIndex = this.accountLink.search(/vk.com/);
        if (UrlIndex === -1 ) return this.accountLink; //ids not found try return user's input bec he can input id without link
        return this.accountLink.slice(UrlIndex + 'vk.com'.length + 1);
      }
    },
    methods: {
      ...mapActions('account', [
        'setAccount'
      ]),
      ...mapMutations('account', [
        'resetAccount'
      ]),
      ...mapActions('friends', [
        'fetchAllFriends'
      ]),
      ...mapMutations('errors', [
        'setError',
        'clearErrors'
      ]),
      async setUpAccount() {
        this.resetAccount();
        try {
          await this.setAccount(this.getIdsFromAccountLink);
        } catch(e) {
          this.resetAccount();
          this.setError({form:'setAccount', errors: e})
        }
        await this.$router.push({ name: 'home', query: { link: this.getIdsFromAccountLink.toString(), days_offline: this.daysOffline }});
        if (this.accountIsSet) {
          this.$store.commit('setLoading', true);
          await this.fetchAllFriends(this.session.userIds);
          this.$store.commit('setLoading', false);
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      this.clearErrors();
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

  .md-layout {
    height: 100%;
  }

  .md-field.md-theme-default:before {
    background: none;
  }

  .md-field.md-required label:after {
    content: "" !important;
  }
</style>
