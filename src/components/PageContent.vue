<template>
    <div :style="{'background-color': selectedBgColor}" class="page-content">
        <slot />
    </div>
</template>

<script>

  export default {
    name: "PageContent",
    computed: {
      selectedBgColor() {
        return this.$route.meta.bkColor
      }
    }
  }
</script>

<style scoped>
    .page-content {
        height: 100vh;
        overflow: auto;
    }
</style>