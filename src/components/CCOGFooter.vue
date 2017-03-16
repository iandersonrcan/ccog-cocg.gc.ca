<template lang="pug">
  footer.visible-sm.visible-md.visible-lg.wb-navcurr(role="contentinfo")
    .container
      .row
        .col-md-6
          h2 Contact Us
          p 
            | 06A-646Q 615 Booth Street
            br
            | Telephone: (613) 947-7653
            br
            | Fax: (613) 947-2410
            a(href='mailto:info@ccog-cocg.gc.ca')
        .col-md-6.text-right
          h2 &nbsp;
          p Canadian Council on Geomatics
          p Conseil de Geomatiques Canadien
      .row
        p
          | 
</template>

<script>
export default {
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus">
  footer
    height 400px
    background #252839
    >.container
      background inherit
    .col-md-6
      padding 15px
    h2,p
      color #F2B632
    
</style>
