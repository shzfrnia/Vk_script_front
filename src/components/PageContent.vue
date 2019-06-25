<template>
    <div class="page-content">
        <slot>

        </slot>
    </div>
</template>

<script>
  export default {
    name: "PageContent"
  }
</script>

<style scoped>
    .page-content {
        background: red;
        height: 100vh;
        overflow: auto;
    }
</style>