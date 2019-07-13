<template>
    <div class="user-card-wrapper">
        <avatar :url="account.avatar"></avatar>
        <div class="media-body">
            <h5 class="mt-0 text-left">{{account.first_name}} {{account.last_name}}</h5>
        </div>
    </div>
</template>

<script>
    import Avatar from '../components/Avatar'

    export default {
      name: "UserCard",
      components: {
        Avatar
      },
      props: {
        account: Object
      }
    }
</script>

<style scoped>
    .user-card-wrapper {
        width: 100%;
        height: 100px;
    }
</style>