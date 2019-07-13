<template>
    <div>
        <user-card :full-name="'Mikhail Uljakov'" v-for="i in list"> </user-card>
    </div>
</template>

<script>
    import UserCard from "../components/UserCard"

  export default {
      name: "Deleted",
      components: {
          UserCard
      },
      data() {
          return {
              list: [1,2,3,4,5,6,7,8]
          }
      }
  }
</script>

<style scoped>

</style>