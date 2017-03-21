<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Member Organizations

      .row
        .col-md-6
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
        .col-md-6
          img#canada(src='/static/img/canada.jpg')
          .caption
            | Mosaic of Canada
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=2603&search=radar') Canadian Space Agency

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

  #canada
    float right
    width 700px
    height 500px
    padding-bottom 20px

</style>
