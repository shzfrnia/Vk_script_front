<template>
  <div :style="{'background-color': selectedBgColor}" id="app">
      <nav-bar></nav-bar>
      <div class="md-layout md-alignment-center-center">
          <transition name="component-fade" mode="out-in">
            <router-view/>
          </transition>
      </div>
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

<style lang="scss">
    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
    primary: md-get-palette-color(black, A200), // The primary color of your application
    accent: md-get-palette-color(red, A200) // The accent or secondary color
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme
</style>
<style>
    @import 'assets/fonts/fontAwesome.css';
    @import 'assets/fonts/materialIcons.css';
</style>
<style scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: 0.4s;
        height: 100vh;
        overflow: hidden;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .55s;
        opacity: 1;
    }

    .component-fade-enter, .component-fade-leave-to {
        transition: opacity .5s;
        opacity: 0;
    }
</style>
