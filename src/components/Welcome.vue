<template lang="pug">
  div
    CCOGHeader
    .container-fluid
      .row
        .col-xs-12
          .banner.welcome
            .well
              h1 Welcome
              p.lead
                | The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.
            .credit
              span.bold Photo Credit
              br
              | Akimiski Island
              br
              | &copy; 
              a(href='https://earthobservatory.nasa.gov/IOTD/view.php?id=8657') NASA Earth Observatory
    .container
      .row
        .col-md-6
          h2 Who We Are
          p
            | Council members come from the governments of Canada, the provinces and the territories. Council members usually represent their government&rsquo;s major geomatics organizations. The council&rsquo;s key objective is to advance geomatics activities between jurisdictions.
        .col-md-6
          h2 Vision
          p
            | Our vision is that Canadians and governments can access the best available geographic information to support informed decision making through interoperable systems and data that are maintained in an efficient and effective manner by all Canadian jurisdictions.
    .container-fluid
      .row
        .col-md-12
          .banner(style='background-image:url(/static/img/la_tuque.jpg)')
            .credit
              span.bold Photo Credit
              br
              | La Tuque Point Cloud
              br
              | &copy; Natural Resources Canada
    main#accord.container-fluid
      .container
        .row
          .col-md-4(v-on:click='go("about")')
            img(src='/static/img/radarsat_montreal.jpg')
            h3 What We Do 
            p The Canadian Council on Geomatics works to advance geomatics activities between federal, provincial and territorial governments.
            p 
              router-link.btn.btn-primary(to='about') About The Council	          

          .col-md-4(v-on:click='go("issues")')
            img(src='/static/img/clearwater.jpg')
            h3 Issues of Interest
            p The Canadian Council on Geomatics is involved with all aspects of geomatics in Canada.
            p
              router-link.btn.btn-primary(to='issues') Explore Issues of Interest 

          .col-md-4(v-on:click='go("members")')
            img(src='/static/img/radarsat_vancouver.jpg')
            h3 Member Organizations
            p Canadian Council on Geomatics members come from the Provinces, Territories and Federal Government Departments.
            p 
              router-link.btn.btn-primary(to='members') Council Members
			 
    .well.bg-topography
      .container
        .row
          .col-md-12
            h3 Did you know?
            strong GIS (Geographic Information Systems) was invented in Canada in the 1960s, 
            | leading to rapid innovation in the use and application of geospatial data.
    main#accord.container-fluid
      .container
        .row
          .col-md-6(v-on:click='go("accord")')
            img(src='/static/img/foxe_basin.jpg')
            h3 Geomatics Accord
            p The Canadian Geomatics Accord enables federal-provincial-territorial collaboration in geomatics.
            p 
              router-link.btn.btn-primary(to='accord') Read About the Canadian Geomatics Accord
			 
          .col-md-6(v-on:click='go("publications")')
            img(src='/static/img/mistastin_lake.jpg')
            h3 Publications
            p The Canadian Council on Geomatics has supported the development of a number of publications on topics in the field of Geomatics.
            p 
              router-link.btn.btn-primary(to='publications') Publications from the Council			
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
  },
  methods: {
    go (route) {
      this.$router.push(route)
    }
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

  #vision
    background #E9AF30
    padding-bottom 20px

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

  .bg-topography
    h3
      font-size 40px
    font-size 22px
    height 220px

</style>

