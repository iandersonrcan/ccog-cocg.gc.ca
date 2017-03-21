{<template lang="pug">
  header
    .header-top
      .container
        img.logo(src='/static/img/ccog-ccdg.png', alt='Canadian Council on Geomatics - Conseil canadien de geomatique')
        ul.list-inline.menu
          a(lang='fr', href='home-fr.html') Sign In
          a(lang='fr', href='fr') Fran&ccedil;ais
    nav
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

</style>
