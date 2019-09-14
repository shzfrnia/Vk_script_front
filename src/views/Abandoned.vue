<template>
    <div class="md-layout-item md-size-50 md-small-size-100">
        <div class="md-layout md-gutter md-alignment-center-center">
            <div class="md-layout-item md-size-30">
                <md-field>
                    <md-select v-model="sortBy" name="country" id="country" placeholder="sort by">
                        <md-option value="less">По убыванию</md-option>
                        <md-option value="big">По возрастанию</md-option>
                        <md-option value="name">По имени</md-option>
                    </md-select>
                </md-field>
            </div>
            <div class="md-layout-item md-size-30">
                <md-field>
                    <label>Days offline</label>
                    <md-input min="0" step="50" v-model="daysOffline" type="number"></md-input>
                </md-field>
            </div>
        </div>
        <div class="md-layout">
            <user-cards-list
                    class="md-layout-item"
                    id="main-box"
                    :show-meta="true"
                    category="Забросившие аккаунт"
                    :user-card-list="sortedAbandonedFriendsBy"/>
        </div>
    </div>
</template>

<script>
  import UserCardsList from '../components/UserCardsList'
  import AutoFetchFriendsMixin from '../mixins/AutoFetchFriendsMixin'

  export default {
    name: "Abandoned",
    data() {
      return {
        sortBy: 'less',
        daysOffline: null
      }
    },
    mixins: [
      AutoFetchFriendsMixin
    ],
    components: {
      UserCardsList
    },
    computed: {
      abandonedFriends() {
        return this.$store.getters.abandonedFriends
      },
      sortedAbandonedFriendsBy() {
        if (this.sortBy === 'less') {
          return this.sortByLess
        }
        else if (this.sortBy === 'big') {
          return this.sortByBig
        } else {
          return this.sortByName
        }
      },
      sortByBig() {
        const arrToSort = [...this.abandonedFriends]
        return arrToSort.sort((a,b) => {
          if (a.days_offline >= b.days_offline) {
            return 1
          } else {
            return -1
          }
        })
      },
      sortByLess() {
        const arrToSort = [...this.abandonedFriends]
        return arrToSort.sort((a,b) => {
          if (a.days_offline <= b.days_offline) {
            return 1
          } else {
            return -1
          }
        })
      },
      sortByName() {
        const arrToSort = [...this.abandonedFriends]
        return arrToSort
      },
    },
    watch: {
      daysOffline(value) {
        this.$router.push({ name: 'abandoned', query: { link: this.$route.query.link, days_offline: value }})
        this.$store.commit('setDaysOffline', value)
      }
    },
    created() {
      this.daysOffline = this.$store.state.daysOffline
    }
  }
</script>

<style scoped>
    #main-box {
        position: relative;
        padding: 0 10px 0 10px;
        height: 75vh;
    }
</style>