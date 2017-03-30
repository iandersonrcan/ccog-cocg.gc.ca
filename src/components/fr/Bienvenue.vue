<template lang="pug">
  div
    CCOGHeader
    .container-fluid#wb-cont
      .row
        .col-xs-12
          .banner
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
      .mask(style='top: 11px')
      .row
        .col-md-12
          .banner(style='background-image:url(/static/img/la_tuque.jpg)')
            .credit
              span.bold Photo Credit
              br
              | La Tuque Point Cloud
              br
              | &copy; Natural Resources Canada

      .mask(style='top: -11px')
    main.container-fluid.thumbs
      .container
        .row
          .col-md-4(v-on:click='go("about")', style='cursor: pointer')
            img(src='/static/img/radarsat_montreal.jpg', alt='RADARSAT-1 Mosaic of Montreal')
            h3 What We Do 
            p The Canadian Council on Geomatics works to advance geomatics activities between federal, provincial and territorial governments.
            p 
              router-link.btn.btn-primary(to='about') About The Council	          

          .col-md-4(v-on:click='go("topics")', style='cursor: pointer')
            img(src='/static/img/clearwater.jpg', alt='Clearwater Crater')
            h3 Topics of Interest
            p The Canadian Council on Geomatics is involved with all aspects of geomatics in Canada.
            p
              router-link.btn.btn-primary(to='topics') Explore Topics of Interest 

          .col-md-4(v-on:click='go("members")', style='cursor: pointer')
            img(src='/static/img/radarsat_vancouver.jpg', alt='RADARSAT-2 Image of Vancouver', title='RADARSAT-2 Image of Vancouver')
            h3 Member Organizations
            p Canadian Council on Geomatics members come from the Provinces, Territories and Federal Government Departments.
            p 
              router-link.btn.btn-primary(to='members') Council Members
    .container-fluid
      .row.bg-topography
        .col-md-12
          .well
            h3 Did you know?
            p.lead GIS (Geographic Information Systems) was invented in Canada in the 1960s, leading to rapid innovation in the use and application of geospatial data.

    main.container-fluid.thumbs
      .container
        .row
          .col-md-6(v-on:click='go("accord")', style='cursor: pointer')
            img(src='/static/img/foxe_basin.jpg', alt='Foxe Basin', title='Foxe Basin')
            h3 Geomatics Accord
            p The Canadian Geomatics Accord enables federal-provincial-territorial collaboration in geomatics.
            p 
              router-link.btn.btn-primary(to='accord') Read About the Canadian Geomatics Accord
			 
          .col-md-6(v-on:click='go("publications")', style='cursor: pointer')
            img(src='/static/img/mistastin_lake.jpg', alt='Mistastin Lake', title='Mistastin Lake')
            h3 Publications
            p The Canadian Council on Geomatics has supported the development of a number of publications on topics in the field of Geomatics.
            p 
              router-link.btn.btn-primary(to='publications') Publications from the Council			
    CCOGFooter
</template>

<script>
import CCOGHeader from './Header'
import CCOGFooter from './Footer'

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

<style lang="stylus" scoped>
  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  h1,h2,h3
    font-family $serif

  body
    background none

  main.container-fluid
    padding 0

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

  .thumbs
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

  .banner
    background $color-primary url('/static/img/akimiski_island.jpg') no-repeat center center

    .well
      background rgba(255,255,255,.4)
      color $color-primary
      z-index 9999
      min-width 50%
      max-width 80%
      margin 10% 10%
      text-align center
      h1
        font-size 3em
        font-family $sans-serif
        font-weight 300
        margin-top 0
      p.lead
        font-size 2em
        font-family $serif


  .bg-topography
    overflow auto
    background $color-secondary url('/static/img/bg-topography.png') repeat-y center center fixed
    margin-bottom 20px
    min-height 250px

    .well
      background transparent
      color white
      border 0
      min-width 50%
      max-width 80%
      margin 0 10%
      text-align center
      h3
        font-size 2.5em
      p.lead
        font-size 1.5em
        font-family $serif
</style>

