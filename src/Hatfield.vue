<template lang="pug">
  div
    HatfieldHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Canadian Council on Geomatics Website Redesign
      ul
        li
          a(href="splash.html") Development Site (Last Update {{ last }})
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
            td Mar 15 
            td draft new content and send to ST for review
            td AS 
            td Mar 20
            td OPEN
          tr
            td Mar 15
            td setup a CCOG organization on github and upload the website code there
            td AS 
            td Mar 22
            td OPEN
          tr
            td Mar 15
            td ensure the website is responsive, has appropriate meta tags and adheres to WCAG
            td AS 
            td Mar 22
            td OPEN
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
            td Feb 21

      h2 Photo Credits
        table.photos.table.table-striped
          thead
            tr
              th Image Name
              th CCOG Page
              th Source
              th Thumbnail
              th Citation Text
          tbody
            tr
              td Akimiski Island
              td 
                a(href='splash.html') Splash
                br
                a(href='ccog.html#/welcome') Welcome
              td
                a(href='http://earthobservatory.nasa.gov/IOTD/view.php?id=8657') NASA
              td
                img(src='/static/img/akimiski_island.jpg')
              td TBD
            tr
              td RADARSAT-2 image of Vancouver
              td 
                a(href='ccog.html#/welcome') Welcome
              td
                a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=5948&search=north') CSA
              td
                img(src='/static/img/radarsat_vancouver.jpg')
              td TBD
            tr
              td Clearwater Crater
              td 
                a(href='ccog.html#/issues') Issues
              td
                a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=169&search=radar') NASA
              td
                img(src='/static/img/clearwater.jpg')
              td TBD
            tr
              td Foxe Basin
              td 
                a(href='ccog.html#/accord') Geomatics Accord
              td
                a(href='http://www.esa.int/spaceinimages/Images/2008/07/Foxe_Basin_Canada') ESA
              td
                img(src='/static/img/foxe_basin.jpg')
              td TBD
            tr
              td Mosaic of Canada
              td 
                a(href='ccog.html#/members') Members
              td
                a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=6551&search=radar') CSA
              td
                img(src='/static/img/canada.jpg')
              td TBD
            tr
              td RADARSAT-1 Mosaic of Montreal
              td 
                a(href='ccog.html#/about') What We Do
              td
                a(href='http://www.esa.int/spaceinimages/Images/2008/07/Foxe_Basin_Canada') CSA
              td
                img(src='/static/img/radarsat_montreal.jpg')
              td TBD
            tr
              td Canada Wildfires
              td 
                a(href='ccog.html#/accord') Publications
              td
                a(href='https://earthobservatory.nasa.gov/IOTD/view.php?id=78527') NASA
              td
                img(src='/static/img/nunavut.jpg')
              td TBD
            tr
              td Canadian Land of Lakes
              td 
                a(href='ccog.html#/publications') Publications
              td
                a(href='https://earthobservatory.nasa.gov/IOTD/view.php?id=78527') NASA
              td
                img(src='/static/img/nunavut.jpg')
              td TBD

    HatfieldFooter
</template>

<script>
import HatfieldHeader from './components/HatfieldHeader'
import HatfieldFooter from './components/HatfieldFooter'

export default {
  name: 'Hatfield',
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
  .photos
    img
      width 200px
      height 150px
  td
    max-width 200px
</style>
