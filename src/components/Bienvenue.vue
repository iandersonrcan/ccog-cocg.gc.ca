<template lang="pug">
  div
    CCOGHeader
    .banner.welcome
      .well
        h1 Bienvenue 
        p.lead
          | The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.
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
    .banner(style='background-image:url(/static/img/banner_02.jpg)')
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
          .col-md-4
            img(src='/static/img/vancouver_lidar.png')
            h3 What We Do 
            p 
              a.btn.btn-primary(href='#/about') About The Council	          

          .col-md-4
            img(src='/static/img/radarsat_vancouver.jpg')
            h3 Issues of Interest
            p
              a.btn.btn-primary(href='#/issues') Explore Issues of Interest 

    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/montreal_point_cloud.png')
            h3 Member Organizations
            p 
              a.btn.btn-primary(href='#/members') Council Members
			 
          .col-md-4
            img(src='/static/img/montreal_point_cloud.png')
            h3 Geomatics Accord
            p 
              a.btn.btn-primary(href='#/accord') Read About the Canadian Geomatics Accord
			 
          .col-md-4
            img(src='/static/img/bg.jpg')
            h3 Publications
            p 
              a.btn.btn-primary(href='#/publications') Publications from the Council			
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

  .btn-primary
    background-color #00afd8

  #accord
    text-align center
</style>

