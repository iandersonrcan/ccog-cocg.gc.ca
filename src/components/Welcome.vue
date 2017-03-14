<template lang="pug">
  div
    CCOGHeader
    main.container-fluid(role='main', property='mainContentOfPage')
      .welcome
        div
          h1 Who We Are
          p The Canadian Council on Geomatics is the major federal-provincial-territorial consultative government body for geomatics. The council’s key objective is to advance geomatics activities between jurisdictions.  Council members come from the governments of Canada, the provinces and the territories. Council members usually represent their government’s major geomatics organizations.  
      h2 Vision
      p Our vision is that Canadians and governments can access the best available geographic information to support informed decision making through interoperable systems and data that are maintained in an efficient and effective manner by all Canadian jurisdictions. 
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

  .welcome
    width 100%
    height 500px
    background-image url('/static/img/bg2.jpg')
    padding-top 100px
    div 
      margin auto
      height 300px
      width 500px
      background-color rgba(255,255,255,0.7)

  td
    max-width 200px
</style>
