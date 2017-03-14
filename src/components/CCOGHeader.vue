<template lang="pug">
header(role='banner')
  #wb-bnr
    #wb-bar
      .container-fluid
        .row
          section#wb-lng.visible-md.visible-lg
            h2 Language selection
            ul.text-right
              li
                a(lang='fr', hreflang='fr', href='index-fr.html') Fran&ccedil;ais
              li.curr
                | English 
                span (current)
          section#wb-glb-mn.wb-mb-links.col-xs-12.visible-sm.visible-xs
            h2 Search and menus
            ul.pnl-btn.list-inline.text-right
              li
                a.overlay-lnk.btn.btn-sm.btn-default(href='#mb-pnl', title='Search and menus', aria-controls='mb-pnl', role='button')
                  span.glyphicon.glyphicon-search
                    span.glyphicon.glyphicon-th-list
                      span.wb-inv Search and menus
            #mb-pnl
    .container-fluid
      .row
        #wb-sttl.col-md-8
          img(src='/static/logo.png')
        section#wb-srch.col-md-4.visible-md.visible-lg
          h2 Search
          form.form-inline(action='https://google.ca/search', method='get', role='search')
            .form-group
              label(for='wb-srch-q') Search website
              |  
              input#wb-srch-q.form-control(name='q', type='search', value='', size='27', maxlength='150')
              |  
              input(type='hidden', name='q', value='site:wet-boew.github.io OR site:github.com/wet-boew/')
            |  
            button#wb-srch-sub.btn.btn-default(type='submit') Search
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
  name: 'HatfieldHeader'
}
</script>

<style lang="stylus">
  #wb-sttl img
    height 100px
    width 120px

  #wb-bnr>.container-fluid
    background white

  #wb-srch
    display none

  #wb-bar
    background white
    .container
      background white
    a
      color black
    li.curr
      display none
</style>
