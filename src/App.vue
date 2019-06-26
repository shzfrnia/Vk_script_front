<template>
  <div :style="{'background-color': selectedBgColor}" id="app">
      <nav-bar></nav-bar>
      <div class="container">
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

<style>
    @import 'assets/fonts/fontAwesome.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        transition: 0.4s;
        height: 100vh;
        overflow: auto;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .15s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
