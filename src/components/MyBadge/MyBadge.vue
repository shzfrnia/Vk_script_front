<template>
  <div class="badge">
    <div :class="{hide: !show}" class="badge-container">
      <badge-loader v-if="showLoader" />
      <p v-else class="value">{{value}}</p>
    </div>
    <slot />
  </div>
</template>

<script>
  import BadgeLoader from "./BadgeLoader";

  export default {
    name: "MyBadge",
    components: {
      BadgeLoader
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      showLoader() {
        return this.$store.state.loading
      }
    }
  }
</script>

<style scoped>
  .badge {
    position: relative;
    transition: 0.3s;
  }

  .badge-container.hide {
    display: none;
  }

  .badge-container {
    min-width: 23px;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff5252;
    color: white;
    z-index: 1;
    height: 18px;
    border-radius: 3px;
    top: -5px;
    right: -5px;
    position: absolute;
    margin: auto;
    padding: 0 5px 0 5px;
  }

  .value {
    margin: 0;
    padding: 0;
    font-size: 11px;
    font-weight: bold;
  }
</style>
