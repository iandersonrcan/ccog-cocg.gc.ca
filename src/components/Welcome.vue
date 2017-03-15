<template lang="pug">
  div
    CCOGHeader
    main.container-fluid(role='main', property='mainContentOfPage')
      .welcome
        .mask.top
        .mask.bottom
        .well 
          h2 The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.

    main#about.container-fluid
      .container
        h1 Who We Are
        p Council members come from the governments of Canada, the provinces and the territories. Council members usually represent their government’s major geomatics organizations.  The council’s key objective is to advance geomatics activities between jurisdictions.

        h2 Vision
        p Our vision is that Canadians and governments can access the best available geographic information to support informed decision making through interoperable systems and data that are maintained in an efficient and effective manner by all Canadian jurisdictions. 


    main#vision.container-fluid
      .container
        blockquote 
          h3 Canada is a leader in integrating geospatial data and making it publicly available for decision makers. This renewed Accord will continue to ensure we have the highest level of intergovernmental collaboration to maximize efficiency while bringing benefits to nearly every sector of the economy.
        .text-right
          | Greg Rickford
          br
          |  
          cite Canada’s Minister of Natural Resources and Minister for the Federal
          cite Economic Development Initiative for Northern Ontario 

    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/bg4.png')
            h3 Geomatics Accord
            p The Canadian Geomatics Accord enables intergovernmental collaboration and cooperation on geospatial data sharing, setting of common geographical data standards, and sharing of costs for core national datasets. 
          .col-md-4
            img(src='/static/img/bg.jpg')
            h3 Geomatics Accord
            p The Canadian Geomatics Accord enables intergovernmental collaboration and cooperation on geospatial data sharing, setting of common geographical data standards, and sharing of costs for core national datasets. 
          .col-md-4
            img(src='/static/img/bg5.png')
            h3 Geomatics Accord
            p The Canadian Geomatics Accord enables intergovernmental collaboration and cooperation on geospatial data sharing, setting of common geographical data standards, and sharing of costs for core national datasets. 
        
    main#publications.container-fluid
      .container
        .row
          .col-md-6
            .well
              h3 Canadian Geomatics Environmental Scan and Value Study
              a http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/downloade.web&search1=R=296426
          .col-md-6
            .well
              h3 Environmental scan on the operational use of Remotely Piloted Aircraft Systems (RPAS) for geomatics applications in Canada
              a http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/fulle.web&search1=R=299120

    main#members.container-fluid
      .container
        h1 Member Organizations
        img(src='/static/img/partners.jpeg')

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
  @font-face 
    font-family Bitter
    src url("/static/fonts/Bitter-Regular.otf") format("opentype")

  h1,h2,h3
    font-family Bitter

  body
    background none

  main.container-fluid
    padding 0

  .mask
    width 100%
    background white
    height 60px
    border-radius 100% 100%
    position relative

  .top
    top -71px
    clip-path inset(50% 0% 0% 0%)

  .bottom
    top 521px
    background white
    clip-path inset(0% 0% 50% 0%)

  .welcome
    text-align center
    padding-top 40px
    width 100%
    height 650px
    background-image url('/static/img/bg2.jpg')
    background-size 100% 650px
    h1
      font-size 48px
    .well
      h2
        font-size 36px
        line-height 45px
      padding 20px
      margin auto
      height 300px
      width 600px
      background-color rgba(255,255,255,0.7)

  #vision
    background #E9AF30
    height 300px

  #members
    margin 0
    background #F2F2F2
    height 300px

  #publications
    margin 0
    height 400px
    background-image url('/static/img/foxe_basin.jpg')
    background-size 100% 700px
    color white

    .well
      margin-top 120px
      color black
      background-color rgba(242,182,50,0.8)

  #accord
    img
      width 300px
      height 200px

  td
    max-width 200px

  #wb-sm .nvbar
    background black
    ul.menu>li
      border none

  blockquote 
    h3
      font-family Georgia
    border none
    font-family Georgia, "Times New Roman", Times, serif
    quotes "\201C""\201D""\2018""\2019"

</style>
