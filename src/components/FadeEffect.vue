<template>
    <transition name="fade">
        <slot v-if="show"></slot>
    </transition>
</template>

<script>
  export default {
    name: "FadeEffect",
    props: {
      show: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>