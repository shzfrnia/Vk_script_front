<template>
    <div class="container">
        <Loader v-if="$store.state.loading"/>
        <md-content v-else-if="userCardList.length !== 0" class="md-scrollbar">
                <user-card
                        @click.native="clickOnUser(index)"
                        :key="index"
                        :account="friend"
                        :show-meta="showMeta"
                        v-for="(friend,index) in userCardList"/>
        </md-content>
        <md-empty-state
                v-else
                class="md-primary"
                :md-label="category + ' ' + $t('userCardsList.emptyState.emptyFriends')"
                md-icon="done"
                :md-description="$t('userCardsList.emptyState.friendsEmptyLabel') + ' ¯\\_(ツ)_/¯'"/>
    </div>
</template>

<script>
  import UserCard from './UserCard'
  import Loader from './Loader'

  export default {
    name: "UserCardsList",
    components: {
      UserCard,
      Loader
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
    .md-content {
        height: 97%;
        overflow: auto;
    }
    .container {
        height: 100%;
        padding: 0 10px 0 10px;
        overflow: auto;
    }
</style>
