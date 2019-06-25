<template>
    <component :is="layout">
        <h1>This is Russia</h1>
    </component>
</template>

<script>
  import PageContent from "../components/PageContent"
  import NavBar from "../components/NavBar"

  export default {
    name: "SecondPage",
    components: {
      PageContent,
      NavBar
    },
    data() {
      return {
        layout: 'default-layout'
      }
    }
  }
</script>

<style scoped>

</style>