<template>
    <md-card md-with-hover>
        <md-ripple>
            <md-card-header>
                <md-card-media>
                    <img :src="account.avatar" alt="People">
                </md-card-media>
                <md-card-header-text>
                    <div class="md-title">{{account.first_name}} {{account.last_name}}</div>
                    <div v-if="showMeta" class="md-subhead">Days offline {{account.days_offline}}</div>
                </md-card-header-text>
            </md-card-header>
        </md-ripple>
    </md-card>
</template>

<script>
    export default {
      name: "UserCard",
      props: {
        account: Object,
        showMeta: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style scoped>
    .md-card-header-text {
        padding: 0 10px 0 10px;
    }

    .md-card {
        background: white;
        height: 110px;
    }
</style>