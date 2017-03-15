<template lang="pug">
html
  body(vocab='http://schema.org/', typeof='WebPage')
    main.container(role='main', property='mainContentOfPage')
      .row.mrgn-tp-lg
        .col-md-12
          h1.wb-inv
            | Language selection - Base theme - Web Experience Toolkit / 
            span(lang='fr') S&eacute;lection de la langue - Th&egrave;me de base - Bo&icirc;te &agrave; outils de l&rsquo;exp&eacute;rience Web
          section.col-md-6
            h2.h3.text-center Canadian Council on Geomatics
            ul.list-unstyled
              li
                router-link(to='welcome').btn.btn-lg.btn-primary.btn-block English
              li
                a.btn.btn-lg.btn-default.btn-block.mrgn-tp-sm(href='../../License-en.html', rel='license') Terms and conditions of use
          section.col-md-6(lang='fr')
            h2.h3.text-center Conseil canadien de g&eacute;omatiques
            ul.list-unstyled
              li
                router-link(to='welcome').btn.btn-lg.btn-primary.btn-block Fran&ccedil;ais
              li
                a.btn.btn-lg.btn-default.btn-block.mrgn-tp-sm(href='../../Licence-fr.html', rel='license') Conditions r&eacute;gissant l&apos;utilisation
</template>

<style lang="stylus">
  body
    background-image urL("/static/img/bg.jpg")

  main
    margin-top 50px
</style>
