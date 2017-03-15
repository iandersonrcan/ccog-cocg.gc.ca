<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 What We Do

      img#montreal(src='/static/img/radarsat_montreal.jpg')

      p A key objective of the Canadian Council on Geomatics is to advance geomatics activities of common interest between jurisdictions to reduce duplication of effort and facilitate easy access and use of geospatial information by public sector agencies and Canadians.

      p Annual meetings are held to discuss common operational issues, proposed legislation relevant to geomatics, the development and promotion of national geomatics standards, and to investigate potential collaborative opportunities.

      p The council aims to provide a consultative forum for the consideration and discussion of important common issues and concerns such as the exchange of information on current and future programs, the discussion of proposed legislation of general interest, and the presentation and discussion of reports on achievements, organizational changes, new ideas, technology and procedures developed during the preceding year or to be developed in future.

      p The council also aims to develop, promote and promulgate national and international geomatics standards; work together to support a Canadian geospatial data infrastructure; promote cooperation and the exchange of geomatics data to reduce duplication of effort and to facilitate easy access to and use of geographical information by all Canadians. 

      p The council supports government decision making, and service delivery to citizens in many areas including:

      ul
        li sustainable development and environment
        li land-use planning and land-use resources integrated management
        li public safety and security
        li public health and education assessment and surveillance
        li physical and critical infrastructure planning
        li water-use and management
        li social service planning and delivery
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

  #montreal
    float right
    padding 30px
    height 400px
    width 700px
</style>
