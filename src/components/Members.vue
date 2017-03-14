<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Member Organizations
      ul
        li Agriculture and Agrifood Canada
        li Canada Space Agency
        li Fisheries and Ocean
        li National Defence
        li Elections Canada
        li Environment Canada
        li Polar Knowledge Canada
        li Public Safety Canada
        li Statistics Canada
        li Public Works and Government Services Canada
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

  td
    max-width 200px
</style>
