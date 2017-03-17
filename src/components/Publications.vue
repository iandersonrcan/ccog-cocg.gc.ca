<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Publications

      .row
        .col-md-4
          img#nunavut(src='/static/img/mistastin_lake.jpg')
        .col-md-8
          h2 Canadian Geomatics Environmental Scan and Value Study
          p The Canadian Geomatics Environmental Scan and Value Study report is meant to provide a new perspective on the value of geospatial information in Canada, including the state of the geomatics sector in Canada, global trends involving geospatial information and Canada’s position relative to those trends, the significance and value of the geomatics sector and of geospatial information to the Canadian economy, and current and emerging roles of government, industry and academia in supporting and using
          geospatial information.
          a http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/downloade.web&search1=R=296426

      .row
        .col-md-4
          img#nunavut(src='/static/img/nova_scotia.jpg')
        .col-md-8
          h2 Environmental scan on the operational use of Remotely Piloted Aircraft Systems (RPAS) for geomatics applications in Canada
          p Remotely-piloted Aircraft Systems, or drones, have emerged as an excellent tool to monitor small sites of interest. They play an increasingly important role within organizations by providing a less costly, higher detailed, and more flexible method to collect information compared to conventional methods. This report helps organizations determine whether drones are a suitable alternative and how to implement drones Revised Information Architecture 9 Hatfield within their operations. The report provides an overview of proven applications and highlights the readyto-fly equipment that is currently available in North America. Organizations must address regulations concerning aviation, privacy, intellectual property, trespassing, and the transportation of dangerous goods. Best practices are summarized in terms of how to design a stand-alone project or implement an operational program, and techniques used to obtain, process, and manage 2D, 3D, and video datasets.  Risk management strategies are formulated. Emerging opportunities, recommendations, and knowledge gaps are highlighted to advance the use of drones in Canada.
          a http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/fulle.web&search1=R=299120

      .row
        .col-md-4
          img#nunavut(src='/static/img/nunavut.jpg')
        .col-md-8
          h2 The Floodplain Guidelines
          p Content to be determined.

      .row
        .col-md-4
          img#nunavut(src='/static/img/vancouver_lidar.png')
        .col-md-8
          h2 Lidar Acquisition
          p Content to be determined.

      .row
        .col-md-12
          section.panel.panel-primary
            header.panel-heading
              h2.panel-title Other Publications
            .panel-body
              p The CGDI Resource Centre summarizes potentially relevant publications that are available on GeoScan: 
              a https://www.nrcan.gc.ca/earth-sciences/geomatics/canadas-spatial-data-infrastructure/8904 
    CCOGFooter
</template>

<script>
import CCOGHeader from './CCOGHeader'
import CCOGFooter from './CCOGFooter'

export default {
  name: 'Landing',
  components: {
    CCOGHeader,
    CCOGFooter
  }
}
</script>

<style lang="stylus">
  body
    background none

  td
    max-width 200px

  #nunavut
    float left
    width 400px
    height 300px
    padding 30px
</style>
