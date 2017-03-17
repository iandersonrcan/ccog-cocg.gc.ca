<template lang="pug">
  nav#wb-sm.wb-menu.visible-md.visible-lg(role='navigation', data-ajax-replace='./ajax/sitemenu-en.html', data-trgt='mb-pnl', typeof='SiteNavigationElement')
    .container-fluid.nvbar
      h2 Topics menu
      .row
        ul.list-inline.menu
          li
            router-link(to='welcome') Welcome
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
</template>

<script>
export default {
  name: 'CCOGHeader'
}
</script>

<style lang="stylus">
  img#ccog
    margin-top 20px
    height 160px
    width 200px
    clip-path inset(0% 0% 25px 0%)
    float left

  .title
    margin-top 50px
    h1
      font-family Helvetica
      margin 0
      margin-left 150px

  #wb-bnr>.container-fluid
    background white

  #wb-sm .nvbar ul.menu
    padding-left 250px
    >li
      font-family Helvetica
      font-size 14px
      font-weight normal
      padding-right 30px

  #wb-bar
    background white
    .container
      background white

  a
    color black

  li.curr
    display none

  #wb-srch
    display none !important
</style>
