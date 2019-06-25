<template>
    <component :is="layout">
        <h1>Ya hz chto eto</h1>
    </component>
</template>

<script>
  import PageContent from "../components/PageContent"
  import NavBar from "../components/NavBar"

  export default {
    name: "ThirdPage",
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