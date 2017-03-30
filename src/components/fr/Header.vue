<template lang="pug">
  header
    .header-top
      .container
        .row
          .brand.col-xs-8.col-md-6
            router-link(to='/splash.html')
              img(src='/static/img/ccog-ccdg.png', alt='Canadian Council on Geomatics - Conseil canadien de g&eacute;omatique', title='Canadian Council on Geomatics - Conseil canadien de g&eacute;omatique')
          .col-xs-4
            #wb-glb-mn.wb-mb-links.visible-sm.visible-xs
              h2 Menu
              ul.pnl-btn.list-inline.text-right
                li
                  a.overlay-lnk.btn.btn-sm.btn-default(v-on:click='show = !show', href='#mb-pnl', title='Search and menus', aria-controls='mb-pnl', role='button')
                    span.glyphicon.glyphicon-th-list
                      span.wb-inv Menu
              #mb-pnl
          .col-md-6.visible-md.visible-lg
            ul.list-inline
              li
                router-link(:to='toggle') English
    nav.visible-md.visible-lg(role='navigation')
      .container
        ul.list-inline.menu
          li
            router-link(to='bienvenue') Bienvenue
          li
            router-link(to='faisons') Ce que nous faisons
          li
            router-link(to='sujets') Sujets d'int&eacute;r&ecirc;t
          li
            router-link(to='membres') Organisations membres
          li
            router-link(to='accord') Accord g&eacute;omatique
          li
            router-link(to='publications') Publications
    nav#mb-pnl(v-if='show', role='navigation')
      .container
        ul.list-inline.mobile
          li
            router-link(to='/fr/bienvenue') Fran&ccedil;ais
          li
            router-link(to='bienvenue') Bienvenue
          li
            router-link(to='faisons') Ce que nous faisons
          li
            router-link(to='sujets') Sujets d'int&eacute;r&ecirc;t
          li
            router-link(to='membres') Organisations membres
          li
            router-link(to='accord') Accord g&eacute;omatique
          li
            router-link(to='publications') Publications
          li
            a(lang='fr', href='https://fileexchange.nrcan.gc.ca') Connexion du membre
</template>

<script>
const translate = {
  'bienvenue': 'welcome',
  'faisons': 'about',
  'sujets': 'topics',
  'membres': 'members',
  'accord': 'accord',
  'publications': 'publications'
}

export default {
  name: 'Header',
  data () {
    return {
      show: false,
      toggle: ''
    }
  },
  mounted () {
    const path = window.location.pathname.split('/')
    this.toggle = '/en/' + translate[path[path.length - 1]]
  }
}

</script>

<style lang="stylus" scoped>
  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  header
    .brand
      img
        width auto
        @media screen and (max-width: 767px), screen and (max-device-width: 767px)
          max-height 40px
          margin-top 25px
        @media screen and (min-width: 768px) and (min-device-width: 768px)
          max-height 60px
          margin-top 8px
    .header-top
      background-color $color-primary
      max-height 100px
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

  .mobile
    li
      display block
      width 100%
      a
        text-decoration none
        color $color-primary
        display block
        font-weight 700
        padding 1em
        &:hover
          color $color-secondary

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

  .spacer
    height 40px

  #mb-pnl
    background white
</style>
