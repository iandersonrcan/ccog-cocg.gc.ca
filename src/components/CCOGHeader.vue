<template lang="pug">
  header
    .header-top
      .container
        .row
          .col-xs-6.col-md-6
            router-link(to='welcome')
              img.logo(src='/static/img/ccog-ccdg.png', alt='Canadian Council on Geomatics - Conseil canadien de geomatique')
          .col-xs-6
            #wb-glb-mn.wb-mb-links.visible-sm.visible-xs
              h2 Search and menus
              ul.pnl-btn.list-inline.text-right
                li
                  a.overlay-lnk.btn.btn-sm.btn-default(href='#mb-pnl', title='Search and menus', aria-controls='mb-pnl', role='button')
                    span.glyphicon.glyphicon-th-list
                      span.wb-inv Search and menus
              #mb-pnl
          .col-md-6
            ul.list-inline
              li
                a(lang='fr', href='home-fr.html') Sign In
              li
                a(lang='fr', href='fr') Fran&ccedil;ais

    nav.visible-md.visible-lg(role='navigation')
      .container
        ul.list-inline.menu
          li
            router-link(to='welcome') {{Welcome}}
          li
            router-link(to='about') What We Do
          li
            router-link(to='issues') Issues of Interest
          li
            router-link(to='members') Member Organizations
          li
            router-link(to='accord') Geomatics Accord
          li
            router-link(to='publications') Publications

    #mb-pnl
</template>

<script>
export default {
  name: 'CCOGHeader',
  data () {
    return {
      Welcome: 'Welcome'
    }
  }
}

</script>

<style lang="stylus">
  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  #wb-glb-mn


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


</style>
