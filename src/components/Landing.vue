<template lang="pug">
  div
    HatfieldHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Canadian Council on Geomatics Website Redesign
      ul
        li
          router-link(to="splash") Development Site (Last Update {{ last }})
        li
          a(href="https://github.com/hatfieldconsultants/ccog-cocg.gc.ca") Source Code on Github
      h2 Design Documents
      ul
        li 
          a(href="static/template2.pdf") Second Template Design (March 16)
        li 
          a(href="static/ia.pdf") Information Architecture (March 8)
        li 
          a(href="static/template.pdf") Template Design (March 2)
        li 
          a(href="static/logo.pdf") Logo Design (February 28)
        li 
          a(href="static/war.pdf") Website Assessment Report (February 21)

      h2 Meeting Minutes
      ul
        li 
          a(href="static/minutes3.pdf") Second Progress Meeting (March 16)
        li 
          a(href="static/minutes2.pdf") First Progress Meeting (March 8)
        li 
          a(href="static/minutes1.pdf") Kick-off Meeting (March 2)
        
      h2 Meeting Actions Log
      table.table.table-striped
        thead
          tr
            th Open Date 
            th Description
            th Assigned To 
            th Due Date 
            th Completion
        tbody
          tr
            td Mar 8
            td review the catalogues of geomatics images that ST sent out and select candidates for inclusion on the website. Notify ST of the selections so she can provide appropriate citations. 
            td AS 
            td Mar 14
            td OPEN
          tr
            td Mar 8
            td setup a landing page with links to pertinent project documents and a link into the working copy of the development website 
            td AS 
            td Mar 14 
            td Mar 10
          tr
            td Mar 8 
            td provide a list of issues that are of interest to CCOG and descriptions that can be featured on the website 
            td ST 
            td Mar 14 
            td Mar 10
          tr
            td Feb 15 
            td provide a listing of organizational members for the membership page 
            td ST 
            td Mar 14 
            td Mar 10
          tr
            td Feb 15
            td provide a starting list of links for the datasets/resources directory 
            td MB/ST 
            td Feb 21 
            td Feb 16
          tr
            td Feb 15 
            td provide up to date Terms of Reference documents 
            td ST 
            td Feb 21
            td Feb 15
          tr
            td Feb 15 
            td provide any interesting images and media that we can incorporate into the site design, potentially from EO and Lidar sources 
            td ST 
            td Feb 21 
            td Feb 24
          tr
            td Feb 15
            td provide additional content like interesting case studies and partnerships to be featured 
            td MB
            td Feb 21 
            td Feb 21
          tr
            td Feb 15
            td produce the website assessment report 
            td AS 
            td Feb 21 
            td Feb 21 st
    HatfieldFooter
</template>

<script>
import HatfieldHeader from './HatfieldHeader'
import HatfieldFooter from './HatfieldFooter'

export default {
  name: 'Landing',
  components: {
    HatfieldHeader,
    HatfieldFooter
  },
  data: function () {
    return {
      last: ''
    }
  },
  mounted () {
    this.$http.get('https://api.github.com/repos/HatfieldConsultants/ccog-cocg.gc.ca/commits').then(response => {
      const date = new Date(response.body[0].commit.committer.date)
      this.last = date.toDateString() + ' ' + date.toTimeString()
    })
  }
}
</script>

<style lang="stylus">
  td
    max-width 200px
</style>
