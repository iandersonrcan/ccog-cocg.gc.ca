<template lang="pug">
  div
    CCOGHeader
    .container-fluid#wb-cont
      .row
        .col-xs-12
          .banner
            .well
              h1 Bienvenue
              p.lead
                | Le Conseil canadien de g&eacute;omatique est le principal organe consultatif des organismes f&eacute;d&eacute;raux, provinciaux en gestion d’information g&eacute;ospatiale.
            .credit
              span.bold Crédit photo
              br
              | Akimiski Island
              br
              | &copy; 
              a(href='https://earthobservatory.nasa.gov/IOTD/view.php?id=8657') NASA
    .container
      .row
        .col-md-6
          h2 Qui nous sommes
          p
            | Les membres du Conseil viennent des gouvernements du Canada, des provinces et des territoires. Les membres du Conseil repr&eacute;sentent habituellement les organisations g&eacute;omatiques principales de leur gouvernement. L’objectif principal du conseil est de faire progresser les activit&eacute;s g&eacute;omatiques entre les administrations.
        .col-md-6
          h2 Vision
          p
            | Notre vision est que les Canadiens et les gouvernements puissent avoir acc&egrave;s &agrave; la meilleure information g&eacute;ographique disponible pour appuyer la prise de d&eacute;cisions &eacute;clair&eacute;es par l'entremise de syst&egrave;mes et de donn&eacute;es interop&eacute;rables qui sont maintenus efficacement par toutes les administrations canadiennes.
    .container-fluid
      .mask(style='top: 11px')
      .row
        .col-md-12
          .banner(style='background-image:url(/static/img/la_tuque.jpg)')
            .credit
              span.bold Crédit photo
              br
              | La Tuque Point Cloud
              br
              | &copy; Natural Resources Canada

      .mask(style='top: -11px')
    main.container-fluid.thumbs
      .container
        .row
          .col-md-4(v-on:click='go("faisons")', style='cursor: pointer')
            img(src='/static/img/radarsat_montreal.jpg', alt='RADARSAT-1 Mosaic of Montreal')
            h3 Ce que nous faisons
            p Le Conseil canadien de g&eacute;omatique s’emploie &agrave; faire valoir les activit&eacute;s de g&eacute;omatique entre les gouvernements f&eacute;d&eacute;ral, provinciaux et territoriaux.
            p 
              router-link.btn.btn-primary(to='faisons') À propos du Conseil

          .col-md-4(v-on:click='go("sujets")', style='cursor: pointer')
            img(src='/static/img/clearwater.jpg', alt='Clearwater Crater')
            h3 Sujets d’int&eacute;r&ecirc;t
            p Le Conseil canadien de g&eacute;omatique s’occupe de tous les aspects de la g&eacute;omatique au Canada.
            p
              router-link.btn.btn-primary(to='sujets') Explorer les sujets d’int&eacute;r&ecirc;t

          .col-md-4(v-on:click='go("membres")', style='cursor: pointer')
            img(src='/static/img/radarsat_vancouver.jpg', alt='RADARSAT-2 Image of Vancouver', title='RADARSAT-2 Image of Vancouver')
            h3 L’organisations des membres
            p Les membres du Conseil canadien de la g&eacute;omatique viennent des provinces, des territoires et des minist&egrave;res f&eacute;d&eacute;raux.
            p 
              router-link.btn.btn-primary(to='membres') Membres du Conseil
    .container-fluid
      .row.bg-topography
        .col-md-12
          .well
            h3 Le saviez-vous?
            p.lead Les syst&egrave;mes d'information g&eacute;ographique (GIS) ont &eacute;t&eacute; invent&eacute;s au Canada dans les ann&eacute;es 60, ce qui a permis une innovation rapide dans l'utilisation et l'application des donn&eacute;es g&eacute;ospatiales.

    main.container-fluid.thumbs
      .container
        .row
          .col-md-6(v-on:click='go("accord")', style='cursor: pointer')
            img(src='/static/img/foxe_basin.jpg', alt='Foxe Basin', title='Foxe Basin')
            h3 L’Accord de g&eacute;omatique
            p L’Accord canadien sur la g&eacute;omatique permet une collaboration f&eacute;d&eacute;rale-provinciale-territoriale en g&eacute;omatique.
            p 
              router-link.btn.btn-primary(to='accord') Pour en savoir plus sur l’Accord canadien sur la g&eacute;omatique
			 
          .col-md-6(v-on:click='go("publications")', style='cursor: pointer')
            img(src='/static/img/mistastin_lake.jpg', alt='Mistastin Lake', title='Mistastin Lake')
            h3 Publications
            p Le Conseil canadien de g&eacute;omatique a soutenu le d&eacute;veloppement d'un certain nombre de publications sur des sujets dans le domaine de la g&eacute;omatique.
            p 
              router-link.btn.btn-primary(to='publications') Publications du Conseil
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

