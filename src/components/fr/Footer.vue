<template lang="pug">
  footer
    .container
      .row
        .col-md-8
          h2 Contact Us
          p
            | 560 Rochester Street
            br
            |  Ottawa, Ontario
            br
            |  K1S 5K2
            br
          |  
          ul
            li 
              a(href='mailto:NRCan.ccog-cocg-ccog-cocg.RNCan@canada.ca') Email Us
            li
              a(lang='fr', href='https://fileexchange.nrcan.gc.ca') Members Login
        .col-md-4
          img(src='/static/img/ccog-ccdg.png', alt='Canadian Council on Geomatics - Conseil canadien de g&eacute;omatique', title='Canadian Council on Geomatics - Conseil canadien de g&eacute;omatique')
</template>

<script>
export default {
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus" scoped>
  $color-primary = #252839
  $color-secondary = #00afd8
  $sans-serif = 'Open Sans', sans-serif
  $serif = 'Bree Serif', serif

  footer
    ul
      padding 0
      li
        float left
        list-style none
        padding 0 10px
        border-right 1px solid white
        &:last-child
          border none
        a:link,a:visited
          color white
        a:hover,a:active
          color $color-secondary
</style>
