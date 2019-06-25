<template>
  <div :style="{'background-color': selectedBgColor}" id="app">
      <nav-bar></nav-bar>
        <router-view/>
  </div>
</template>

<script>
    import NavBar from './components/NavBar'

    export default {
      name: "app",
      components: {NavBar},
      computed: {
        selectedBgColor() {
          return this.$route.meta.bkColor
        }
      }
    }
</script>

<style>
    @import 'assets/fonts/fontAwesome.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        transition: 0.4s;
        height: 100vh;
    }
</style>
