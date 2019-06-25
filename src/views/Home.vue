<template>
    <component :is="layout">
        <div>
            <p>sccscac</p>
        </div>
    </component>

</template>

<script>
    import NavBar from '../components/NavBar'
    import PageContent from '../components/PageContent'

export default {
  name: 'home',
  components: {
    NavBar,
    PageContent
  },
  data() {
    return {
      layout: 'default-layout'
    }
  }
}
</script>
