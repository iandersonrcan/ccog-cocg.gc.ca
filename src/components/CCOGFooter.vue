<template lang="pug">
  footer
    .container
      .row
        .col-md-12
          h2 Contact Us
        .col-md-8
          p
            | 560 Rochester Street
            br
            |  Ottawa, Ontario
            br
            |  K1S 5K2
            br
          |  
          a(href='mailto:NRCan.ccog-cocg-ccog-cocg.RNCan@canada.ca') Email
        .col-md-4
          img.img-responsive(src='/static/img/ccog-ccdg.png')
</template>

<script>
export default {
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus">
  footer
    img
      padding 15px
</style>
