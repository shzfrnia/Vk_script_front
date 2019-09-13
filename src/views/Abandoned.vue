<template>
    <div class="md-layout-item md-size-50 md-small-size-100">
        <select v-model="sortBy">
            <option value="less">Сотрировать по убыванию</option>
            <option value="big">Сортировать по возрастанию</option>
            <option value="name">Сортировать по имени</option>
        </select>
        <user-cards-list
                :show-meta="true"
                category="Забросившие аккаунт"
                :user-card-list="abandonedFriends"/>
    </div>
</template>

<script>
  import UserCardsList from '../components/UserCardsList'
  import AutoFetchFriendsMixin from '../mixins/AutoFetchFriendsMixin'

  export default {
    name: "Abandoned",
    data() {
      return {
        sortBy: 'less'
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
      sortByLess() {
      },
        const arrToSort = [...this.$store.state.abandonedFriends]
        return arrToSort.sort((one, other) => {
            if (one.days_offline > other.days_offline) {
              return -1
            } else {
              return 1
            }
          })
      },
      sortByBig() {
        const arrToSort = [...this.$store.state.abandonedFriends]
        return arrToSort.sort((one, other) => {
          if (one.days_offline < other.days_offline) {
            return -1
          } else {
            return 1
          }
        }
        } else {
          return this.sortByBig
       else  if (this.sortBy === 'big') {
        }
          return this.sortByLess
        if (this.sortBy === 'less') {
      sortFriendBy() {
      },
        })
          }
      }
    }
  }
</script>

<style scoped>
    .md-layout-item {
        position: relative;
        padding: 0 10px 0 10px;
        height: 88vh;
    }
</style>