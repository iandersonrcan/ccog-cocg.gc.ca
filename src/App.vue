<template lang="pug">
  router-view
</template>

<script>
export default {
  name: 'App',
  head: {
    title: {
      inner: 'Canadian Council on Geomatics - Conseil canadien de g&eacute;omatique'
    },
    meta: [
      { charset: 'utf-8' },
      { content: 'width=device-width,initial-scale=1', name: 'viewport' },
      { name: 'description', content: 'The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.' },
      { name: 'keywords', content: 'Canadian Council on Geomatics,High Resolution optical imagery acquisition,Elevation and LiDAR data acquisition,Water management,Climate change,GeoBase Layers,Remotely Piloted Aircraft Systems,Security and public safety,National Disaster,Floodplain Mapping,Point Addressing,Geodetic,Geoanalytics,Land Title,Cadastral,Big Data analytics,Canadian Geospatial Data Infrastructure,Open geospatial data,Emergency geomatics services' },
      { name: 'dc.creator', content: 'Canadian Council on Geomatics' },
      { name: 'dc.creator', lang: 'fr', content: 'Conseil canadien de géomatique' },
      { name: 'robots', content: 'noindex, nofollow, noarchive' },
      { name: 'dc.title', content: 'Canadian Council on Geomatics' },
      { name: 'dc.title', lang: 'fr', content: 'Canadian Council on Geomatics' },
      { name: 'dc.issued', title: 'W3CDTF', content: '2017-03-31' },
      { name: 'dc.modified', title: 'W3CDTF', content: '2017-03-31' },
      { name: 'dc.subject', content: 'Canadian Council on Geomatics' },
      { name: 'dc.subject', lang: 'fr', content: 'Conseil canadien de géomatique' },
      { name: 'dc.language', title: 'ISO639-2', content: 'eng' },
      { name: 'dc.language', lang: 'fr', title: 'ISO639-2', content: 'fra' }
    ]
  }
}
</script>

<style lang="stylus">
  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  body
    margin 0
    box-sizing border-box
    font-family $sans-serif
    color $color-primary
    background white

  h1, h2, h3, h4, h5, h6
    font-family $serif
    font-weight normal

  h1
    font-size 42px

  h2
    font-size 34px
    color $color-secondary
    margin 30px 0 15px

  p
    margin 0 0 15px
    
  .container, .row
    &::after, &::before
      content " "
      display table
      box-sizing border-box
      clear both
    
  .container
    max-width 1170px
    margin 0 auto
    padding 0 15px

  .container-fluid
    padding 0

  .container
    img
      max-width 100%

  .mask
    position relative
    background white
    height 1px
    font-height 1px
    z-index 1

  .banner
    min-height 250px;
    background-size cover !important
    position relative
    margin 10px 0
    overflow hidden
    &::before, &::after
      content ""
      border-radius 50%
      width 150%
      height 0
      padding 5% 0
      background white
      position absolute
      left -25%
    &::before
      top 0
      -webkit-transform translateY(-80%)
      -ms-transform translateY(-80%)
    &::after
      bottom 0
      -webkit-transform translateY(80%)
      -ms-transform translateY(80%)

  .well
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

  .quote
    .col-md-4,.col-md-8
      padding 0
    .col-md-4
      padding-right 15px
    img
      border-left 10px solid $color-secondary
      margin-left -10px

  .cooperation
    background #66cee7
    .well
      margin 0 auto
      border 0
      text-align left

  blockquote
    //background #f9f9f9
    border-right 10px solid $color-secondary
    padding 15px
    margin 0
    &::before
      color $color-secondary
      content "\201C"
      font-size 120px
      line-height 0px
      margin-right 20px
      vertical-align -50px
    p
      display inline
      font-family $serif
      font-size 26px
      font-style italic
    strong, em
      text-align right
      display block
    strong
      padding-top 20px

  .well
    .row
      background $color-secondary
      margin 0 -15px
    background #66CEE7
    color white
    h2
      color white

  footer
    >.container 
      background $color-primary
    .row
      margin 45px -15px
    color white
    background $color-primary
    a
      color white
      &:hover
        color $color-secondary

  ul li
    padding-bottom 15px

  .btn-primary
    &:link, &:visited
      background $color-primary
    &:hover, &:active
      background $color-secondary

  .credit
    padding 2px
    background rgba(0,0,0,.4)
    font-size 12px
    .bold
      font-weight bold
    z-index 1
    position absolute
    bottom 25px
    left 20px
    color white
    a
      color white
      text-decoration none

  .credit-right
    font-size 12px
    padding 2px
    background rgba(0,0,0,.4)
    position absolute
    right 2%
    bottom 10%
    color white
    a
      color white

  .caption
    padding 5px
    font-size 12px
    font-style italic
    text-align right
    a
      text-decoration none
      color black
</style>
