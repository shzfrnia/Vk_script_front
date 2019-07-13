<template>
    <md-avatar>
        <img :src="url" alt="Avatar">
    </md-avatar>
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

</style>