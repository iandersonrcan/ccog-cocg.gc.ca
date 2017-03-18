<template lang="pug">
  div
    CCOGHeader
    main.container-fluid(role='main', property='mainContentOfPage')
      .welcome
        .mask.top
        .mask.bottom
        .well 
          h2 The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.

    main#vision.container-fluid
      .container
        h1 Our Vision
        p Our vision is that Canadians can 
            strong access the best available geographic information 
            | to support 
            strong informed decision making 
            | through 
            strong interoperable systems 
            | that are efficiently maintained. 
        p 
          a.btn.btn-primary(href='#/about') what we do

    main#accord.container-fluid
      .container
        .row
          .col-md-4.col-md-offset-2
            img(src='/static/img/montreal_point_cloud.png')
            h3 Members
            p 
              a.btn.btn-primary(href='#/members') council members
			 
          .col-md-4
            img(src='/static/img/vancouver_lidar.png')
            h3 What we do
            p 
              a.btn.btn-primary(href='#/about') About the council	          

        
    main#publications.container-fluid
      .container
        .row
          .col-md-12
            .well.didyouknow
              h3 Did you know?
              strong GIS (Geographic Information Systems) was invented in Canada in the 1960s, 
              | leading to rapid innovation in the use and application of geospatial data
          
    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/bg4.png')
            h3 Geomatics Accord
            p 
              a.btn.btn-primary(href='#/accord') read about the Canadian Geomatics Accord
			 
          .col-md-4
            img(src='/static/img/bg.jpg')
            h3 Publications
            p 
              a.btn.btn-primary(href='#/publications') publications from the council			
          .col-md-4
            img(src='/static/img/bg5.png')
            h3 Issues of Interest
            p
              a.btn.btn-primary(href='#/issues') explore issues of interest 
              
		
         
          
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

    .didyouknow
      h3
        margin-top 0px
        
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

</style>
