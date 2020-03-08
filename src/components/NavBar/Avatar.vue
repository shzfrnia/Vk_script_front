<template>
    <img :src="url" alt="Avatar">
</template>

<script>
  export default {
    name: "Avatar",
    props: {
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
    img {
        display: inline;
        border-radius: 40px;
        width: 35px;
        height: 40px;
        top: 50%;
        left: 25px;
        transform: translate(-50%, -50%);
        position: absolute;
    }
</style>
