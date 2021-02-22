<template>
  <div>
    <md-radio :key="l" v-for="l in langs" v-model="currentLang" :value="l">{{l}}</md-radio>
  </div>
</template>

<script>
export default {
  name: "Localization",
  data: () => ({
    langs: ["en", "rus"],
    currentLang: "en"
  }),
  watch: {
    currentLang(value) {
      this.$i18n.locale = value
    }
  }
};
</script>

<style>
  .md-radio:last-child {
    margin-right: 0;
  }
</style>