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