<template>
    <div>
        <nav-bar />
        <div>
            <page-content>
                <slot />
            </page-content>
        </div>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import PageContent from "../components/PageContent";

  export default {
    name: "Default",
    components: {
      PageContent,
      NavBar
    }
  }
</script>

<style scoped>

</style>