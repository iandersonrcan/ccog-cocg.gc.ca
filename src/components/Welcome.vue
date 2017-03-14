<template lang="pug">
  div
    CCOGHeader
    main.container-fluid(role='main', property='mainContentOfPage')
      img#splash(src='/static/img/bg2.jpg')
    CCOGFooter
</template>

<script>
import CCOGHeader from './CCOGHeader'
import CCOGFooter from './CCOGFooter'

export default {
  name: 'Landing',
  components: {
    CCOGHeader,
    CCOGFooter
  }
}
</script>

<style lang="stylus">
  body
    background none

  main.container-fluid
    padding 0

  img#splash
    width 100%
    height 500px

  td
    max-width 200px
</style>
