<template>
    <div>
        <md-empty-state
                class="md-primary"
                :md-label="category + ' друзья отсуствуют'"
                md-icon="done"
                md-description="Ну или они просто скрыты. кек ¯\_(ツ)_/¯">
        </md-empty-state>
        <div>
            <user-card @click.native="clickOnUser(index)"
                       :key="index"
                       :account="friend"
                       :show-meta="showMeta"
                       v-for="(friend,index) in userCardList"></user-card>
        </div>

    </div>
</template>

<script>
  import UserCard from './UserCard'

  export default {
    name: "UserCardsList",
    components: {
      UserCard
    },
    props: {
      userCardList: {
        type: Array,
        required: true
      },
      showMeta: {
        type: Boolean,
        default: false
      },
      category: {
        type: String,
        required: true
      }
    },
    methods: {
      clickOnUser(index) {
        this.openInNewTab(this.userCardList[index].link)
      },
      openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
      }
    }
  }
</script>

<style scoped>

</style>