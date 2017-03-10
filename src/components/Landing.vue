<template lang="pug">
  main.container(role='main', property='mainContentOfPage')
    h1 Canadian Council on Geomatics Website Redesign
    ul
      li
        router-link(to="splash") Development Site Splash Page
    h2 Links
    ul
      li 
        a(href="static/war.pdf") Website Assessment Report
      li 
        a(href="static/ia.pdf") Information Architecture
      li 
        a(href="static/template.pdf") Template Design
      li 
        a(href="static/logo.pdf") Logo Design
      li
        a(href="https://github.com/hatfieldconsultants/ccog-cocg.gc.ca") Source Code on Github
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
          td OPEN
        tr
          td Feb 15
          td produce the website assessment report 
          td AS 
          td Feb 21 
          td Feb 21 st
</template>

<style lang="stylus">
  td
    max-width 200px
</style>
