<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Geomatics Accord
      p The Canadian Geomatics Accord enables intergovernmental collaboration and cooperation on geospatial data sharing, setting of common geographical data standards, and sharing of costs for core national datasets.

      p The previous versions of the Accord (2001-2006 and 2007-2012) both achieved broad support in jurisdictions across Canada, and resulted in collaborative practices. These collaborative efforts resulted in core, nationally standardized datasets and a reduction of duplication between governments. These datasets are used in both private and public sector applications, including for agriculture, natural resource development, transportation, environmental assessment, land claims, boundary discussions, and emergency management. They have also been one of the world's first examples of open data (http://open.canada.ca/).

      p Early benefits of the current Accord are materializing as the private sector and governmental organizations increasingly use open geospatial data, tools and technologies. Such data and tools are used in nearly every sector of the economy, including natural resource development (e.g., forestry, oil and gas, and mining), land claims, parks, elections, infrastructure (e.g., roads and rivers), environment (e.g, forests and biodiversity).  

      p Sharing of data, tools and technologies permitted under the Accord are underpinning critical operations in many jurisdictions. For example, the sharing of data and tools through the Accord is facilitating dispatch of snow removal vehicles in the Yukon; Department of National Defence planning for managing emergencies; and the conduct of elections at various levels across all jurisdictions.

      h2 Key Points
      ul
        li
          The use of geospatial information contributed $20.7 billion of Canada’s national Gross Domestic Product and generated approximately 19,000 jobs within Canada’s economy in 2013.
        li Natural Resources Canada connects producers and users of geospatial information via the GeoConnections program, housed within the Canada Centre for Mapping and Earth Observation.
        li Geomatics is the modern discipline of gathering, storing, processing, and delivering geographic information.
        li Geographic Information System technology, or GIS, was invented in Canada in the 1960s, leading to rapid innovation in the use and application of geospatial data. 


      blockquote
        p Canada is a leader in integrating geospatial data and making it publicly available for decision makers. This renewed Accord will continue to ensure we have the highest level of intergovernmental collaboration to maximize efficiency while bringing benefits to nearly every sector of the economy.
        footer.text-right
          | Greg Rickford
          br
          |  
          cite Canada’s Minister of Natural Resources and Minister for the Federal
          cite Economic Development Initiative for Northern Ontario 
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
</style>
