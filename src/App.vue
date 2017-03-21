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

  .row
    margin 30px -15px
      
  .col-md-4, .col-md-6, .col-md-8, .col-md-12
    float left
    box-sizing border-box
    position relative
    padding 0 15px
    
  .col-md-4
    width 33.3333333333%
    
  .col-md-6
    width 50%
    
  .col-md-8
    width 66.6666666667%

  .col-md-12
    width 100%

  header
    .header-top
      background-color $color-primary
      max-height 100px
      .logo
        margin 20px 0
        height 60px
      ul
        margin-top 40px
        float right
        li
          color white
          padding 0
          display inline
          margin 0 10px
          &::before
            content "|"
            padding-right 5px
            margin-left -10px
            display inline-block
          &:first-child::before
            content ""
        a
          color white
          &:hover
            color $color-secondary

  .list-inline
    padding-left 0
    list-style none
    margin-left -5px

  .menu
    display table
    margin 0
    width 100%
    margin-left 0
    position relative
    height 56px
    li
      display table-cell
      float none
      padding 0
      a
        text-align center
        text-decoration none
        color $color-primary
        display block
        font-weight 700
        padding 1em
        &:hover
          color $color-secondary


  .banner
    background $color-primary url('/static/img/akimiski_island.jpg') no-repeat center center
    background-size cover
    position relative
    overflow hidden
    padding-bottom 20%
    margin-top -15px
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
    &.welcome
      padding-bottom 0
      min-height 650px

      .well
        background rgba(255,255,255,.4)
        color $color-primary
        z-index 9999
        position absolute
        width 50%
        margin 13% 25%
        text-align center
        h1
          font-size 68px
          font-family $sans-serif
          font-weight 300
          margin 0 30px
        p.lead
          font-size 28px
          font-family $serif
          margin-left 30px
          margin-right 30px


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
    &.bg-topography
      background $color-secondary url('/static/img/bg-topography.png') repeat-y center center fixed
      background-size cover
      .row
        background transparent

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
</style>
