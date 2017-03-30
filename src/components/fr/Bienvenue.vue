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
                | Le Conseil canadien de géomatique est le principal organe consultatif des organismes fédéraux, provinciaux en gestion d’information géospatiale.
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
            | Les membres du Conseil viennent des gouvernements du Canada, des provinces et des territoires. Les membres du Conseil représentent habituellement les organisations géomatiques principales de leur gouvernement. L’objectif principal du conseil est de faire progresser les activités géomatiques entre les administrations.
        .col-md-6
          h2 Vision
          p
            | Notre vision est que les Canadiens et les gouvernements puissent avoir accès à la meilleure information géographique disponible pour appuyer la prise de décisions éclairées par l'entremise de systèmes et de données interopérables qui sont maintenus efficacement par toutes les administrations canadiennes.
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
              | &copy; RNCan

      .mask(style='top: -11px')
    main.container-fluid.thumbs
      .container
        .row
          .col-md-4(v-on:click='go("faisons")', style='cursor: pointer')
            img(src='/static/img/radarsat_montreal.jpg', alt='RADARSAT-1 Mosaic of Montreal')
            h3 Ce que nous faisons
            p Le Conseil canadien de géomatique s’emploie à faire valoir les activités de géomatique entre les gouvernements fédéral, provinciaux et territoriaux.
            p 
              router-link.btn.btn-primary(to='faisons') À propos du Conseil

          .col-md-4(v-on:click='go("sujets")', style='cursor: pointer')
            img(src='/static/img/clearwater.jpg', alt='Clearwater Crater')
            h3 Sujets d’intérêt
            p Le Conseil canadien de géomatique s’occupe de tous les aspects de la géomatique au Canada.
            p
              router-link.btn.btn-primary(to='sujets') Explorer les sujets d’intérêt

          .col-md-4(v-on:click='go("membres")', style='cursor: pointer')
            img(src='/static/img/radarsat_vancouver.jpg', alt='RADARSAT-2 Image of Vancouver', title='RADARSAT-2 Image of Vancouver')
            h3 L’organisations des membres
            p Les membres du Conseil canadien de la géomatique viennent des provinces, des territoires et des ministères fédéraux.
            p 
              router-link.btn.btn-primary(to='membres') Membres du Conseil
    .container-fluid
      .row.bg-topography
        .col-md-12
          .well
            h3 Le saviez-vous?
            p.lead Les systèmes d'information géographique (GIS) ont été inventés au Canada dans les années 60, ce qui a permis une innovation rapide dans l'utilisation et l'application des données géospatiales.

    main.container-fluid.thumbs
      .container
        .row
          .col-md-6(v-on:click='go("accord")', style='cursor: pointer')
            img(src='/static/img/foxe_basin.jpg', alt='Foxe Basin', title='Foxe Basin')
            h3 L’Accord de géomatique
            p L’Accord canadien sur la géomatique permet une collaboration fédérale-provinciale-territoriale en géomatique.
            p 
              router-link.btn.btn-primary(to='accord') Pour en savoir plus sur l’Accord canadien sur la géomatique
			 
          .col-md-6(v-on:click='go("publications")', style='cursor: pointer')
            img(src='/static/img/mistastin_lake.jpg', alt='Mistastin Lake', title='Mistastin Lake')
            h3 Publications
            p Le Conseil canadien de géomatique a soutenu le développement d'un certain nombre de publications sur des sujets dans le domaine de la géomatique.
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

