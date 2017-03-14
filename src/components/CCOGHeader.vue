<template lang="pug">
  header(role='banner')
    #wb-bnr
      .container
        .row
          #wb-sttl.col-md-8
            a(href='http://wet-boew.github.io/v4.0-ci/index-en.html')
              span
                img(src='/static/logo.png')
        .row
          #wb-sttl.col-md-8
            ul
              li Welcome
              li What We Do
              li Issues of Interest
              li Member Organizations
              li Geomatics Accord
              li Publications

        .row
          ul.list-inline.menu(role='menubar')
            li
              a.wb-navcurr(href='./index-en.html', tabindex='0', aria-posinset='1', aria-setsize='3', role='menuitem') WET project
            li
              a(href='./docs/start-en.html#implement', tabindex='-1', aria-posinset='2', aria-setsize='3', role='menuitem') Implement WET
            li
              a(href='./docs/start-en.html', tabindex='-1', aria-posinset='3', aria-setsize='3', role='menuitem') Contribute to WET
</template>

<script>
export default {
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus">
  #wb-sttl img
    height 100px
    width 120px

  #wb-bnr>.container
    background white
</style>
