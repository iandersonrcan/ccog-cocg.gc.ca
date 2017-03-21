<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 What We Do



      .row
        .col-md-6
          p The Canadian Council on Geomatics works to advance geomatics activities between federal, provincial and territorial governments. The council’s goal is to reduce duplication of effort between government bodies and to facilitate easy access of geospatial information for the benefit of Canadians. 
          
          h2 We are a consultative inter-governmental forum
          p The council provides a consultative forum for federal, provincial and territorial governments to discuss items such as:
          ul
            li current and future geomatics programs
            li proposed legislation 
            li collaboration opportunities
            li national geomatics standards
            li achievements, new ideas, technologies and procedures that could benefit other jurisdictions.
        .col-md-6
          img#montreal(src='/static/img/radarsat_montreal.jpg')
          .caption
            | Lidar Point Cloud of Montreal
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=785&search=radar') Canadian Space Agency
      
      h2 We promote the cooperation and the exchange of geomatics data
      p The council promotes cooperation and the exchange of geomatics data to reduce duplication of effort and to facilitate easy access to and use of geographical information by all Canadians. This is done through the promotion of standards and the development of Canada’s geospatial data infrastructure.
      p The council develops, promotes and spreads national and international geomatics standards. Standards are necessary to facilitate open sharing of spatial data between platforms, especially in a varied network of computers that are managing a diverse range of spatial data stores and data types. 
      p The council works to support Canada’s geospatial data infrastructure (CGDI), a web-based knowledge infrastructure that improves the efficient access, sharing and use of geospatial data. The CGDI consists of:
      ul
        li Operational policies, covering areas such as intellectual property, data sharing and privacy, governing the use and re-use of the geospatial data
        li Technology tools to enable the search, discovery, viewing, downloading and transformation of geospatial data;
        li Standards for the geospatial data and for the technology tools to ensure that all elements function seamlessly and efficiently with each other; and
        li Geospatial data itself

      h2 We support government decision making and service delivery
      p The council supports government decision making, and service delivery to citizens in many areas including:

      ul
        li sustainable development and environment
        li land-use planning and land-use resources integrated management
        li public safety and security
        li public health and education assessment and surveillance
        li physical and critical infrastructure planning
        li water-use and management
        li social service planning and delivery
      
      h2 Explore our Issues of Interest
      p TODO: put blocks of issues of interest here.
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

  .photo
    float right

  #montreal
    height 20em
    width 35em

  .caption
    font-style italic
    text-align right
    a
      text-decoration none
      color black

</style>
