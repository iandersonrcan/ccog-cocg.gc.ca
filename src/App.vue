<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:300,400,400i,700')

  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  body
    margin 0
    box-sizing border-box
    font-family $sans-serif
    color $color-primary

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
    
  .img-responsive
    width 100%

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

  .banner
    min-height 250px;
    background-size cover
    position relative
    overflow hidden
    margin 10px 0
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
    &::after
      bottom 0
      -webkit-transform translateY(80%)

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
      background #333

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
