<template>
    <div class="media">
        <img height="50" width="50" src="../../public/IMG_6639.jpg" class="mr-3 image-around" alt="...">
        <div class="media-body">
            <h5 class="mt-0 text-left">{{fullName}}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard",
        props: {
            fullName: {
                type: String,
                require: true
            }
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