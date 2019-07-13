<template>
    <div class="media">
        <img height="50" width="50" class="mr-3 image-around" alt="...">
        <div class="media-body">
            <h5 class="mt-0 text-left">{{account.first_name}} {{account.last_name}}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard",
        props: {
            account: Object
        }
    }
</script>

<style scoped>
    .image-around {
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
    }
</style>