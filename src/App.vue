<template>
  <div :style="{'background-color': selectedBgColor}" id="app">
      <nav-bar></nav-bar>
      <div class="md-layout">
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
    @import 'assets/fonts/materialIcons.css';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: 0.4s;
        height: 100vh;
        overflow: auto;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .15s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
