<template lang="pug">
  div
    CCOGHeader
    .container(role='main', property='mainContentOfPage')
      h1 What We Do

      .row
        .col-md-6
          p The Canadian Council on Geomatics works to advance geomatics activities between federal, provincial and territorial governments. The council’s goal is to reduce duplication of effort between government bodies and to facilitate easy access of geospatial information for the benefit of Canadians. 
          
          h2 We are a consultative inter-governmental forum
          p The council provides a consultative forum for federal, provincial and territorial governments to discuss items such as:
          ul
            li Current and future geomatics programs
            li Proposed legislation 
            li Collaboration opportunities
            li National geomatics standards
            li Achievements, new ideas, technologies and procedures that could benefit other jurisdictions.
        .col-md-6
          img#montreal(src='/static/img/radarsat_montreal.jpg', alt='Lidar Point Cloud of Montreal', title='Lidar Point Cloud of Montreal')
          .caption
            | Lidar Point Cloud of Montreal
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=785&search=radar') CSA
      
    .container-fluid.cooperation
      .well
        .row
          .col-md-12
            h2 We promote cooperation and the exchange of geomatics data
            p The council promotes cooperation and the exchange of geomatics data to reduce duplication of effort and to facilitate easy access to and use of geographical information by all Canadians. This is done through the promotion of standards and the development of Canada’s geospatial data infrastructure.
            p The council develops, promotes and spreads national and international geomatics standards. Standards are necessary to facilitate open sharing of spatial data between platforms, especially in a varied network of computers that are managing a diverse range of spatial data stores and data types. 
            p The council works to support Canada’s geospatial data infrastructure (CGDI), a web-based knowledge infrastructure that improves the efficient access, sharing and use of geospatial data. The CGDI consists of:
        .row
          .col-md-6
            ul
              li Operational policies covering areas such as intellectual property, data sharing and privacy, governing the use and re-use of the geospatial data
              li Technology tools to enable the search, discovery, viewing, downloading and transformation of geospatial data
          .col-md-6
            ul
              li Standards for the geospatial data and for the technology tools to ensure that all elements function seamlessly and efficiently with each other
              li Geospatial data itself

    .container
      h2 We support government decision making and service delivery
      p The council supports government decision making, and service delivery to citizens in many areas, including:

      ul
        li Sustainable development and environment
        li Land-use planning and land-use resources integrated management
        li Public safety and security
        li Public health and education assessment and surveillance
        li Physical and critical infrastructure planning
        li Water-use and management
        li Social service planning and delivery
    CCOGFooter
</template>

<script>
import CCOGHeader from '../CCOGHeader'
import CCOGFooter from '../CCOGFooter'

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

  .photo
    float right

  .cooperation
    background #66cee7
    .well
      margin 0 auto
      border 0
      text-align left

  #montreal
    height 20em
    width 35em
</style>
