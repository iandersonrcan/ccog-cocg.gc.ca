<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Canadian Geomatics Accord

      .row
        .col-md-12
          p The Canadian Geomatics Accord enables federal-provincial-territorial collaboration in geomatics. It also sets common geographical data standards and shares the cost of national data bases. The purpose of the Accord is to provide a framework for intergovernmental collaboration in geomatics, by outlining roles and responsibilities and overarching principles for intergovernmental collaboration on geomatics activities in Canada.
          p The current accord is in effect between 2014 and the end of 2019.
          h2 Benefits of the Accord 
          p Authoritative, accessible geographical information is important to Canadian citizens, businesses and researchers. Geospatial information has proven to accelerate innovation and productivity. Accurate, definitive, science based, geographical knowledge of the Canadian landmass, marine extent and air space is critical to fact based decision and policy making. 
          p Collaborative efforts conducted under the Accord have resulted in core, nationally standardized datasets and a reduction of duplication between governments. These datasets are used in both private and public sector applications, including for agriculture, natural resource development, transportation, environmental assessment, land claims, boundary discussions, and emergency management.
          p Sharing of data, tools and technologies permitted under the Accord are underpinning critical operations in many jurisdictions.  For example, the sharing of data and tools through the Accord has:
          ul
            li Facilitated dispatch of snow removal vehicles in the Yukon
            li Enabled Department of National Defence planning for managing emergencies
            li Assisted election planning and logistics across all jurisdictions

    .container
      .row.quote
        .col-md-12
          blockquote
            p
              | The use of geospatial information contributed $20.7 billion of Canada’s national Gross Domestic Product and generated approximately 19,000 jobs within Canada’s economy in 2013.
    .container-fluid
      .row
        .col-md-12
          .banner(style='background-image:url(/static/img/foxe_basin.jpg); min-height: 320px;')
            .credit-right
              span.bold Photo Credit
              br
              | Foxe Basin
              br
              | &copy;
              a(href='http://www.esa.int/spaceinimages/Images/2008/07/Foxe_Basin_Canada') ESA
      .mask(style='top: -11px')
    .container
      .row
        .col-md-12
          h2 History
          p The 2014 - 2019 Canadian Geomatics Accord is the third such Accord. Prior Accords include the:
          ul
            li 2001 Canadian Geomatics Accord (2001 –2006)
            li 2007 Canadian Geomatics Accord (2007 – 2012)
          p Through the 2001 and 2007 Accords, federal, provincial and territorial governments sought to address common needs for increased efficiency and adaptation to rapid technological change through a formal collaboration mechanism. Efficiency and adaptation to technological change remain valid considerations. However, a 2014 - 2019 Canadian Geomatics Accord was seen to be necessary due to recent circumstances, including:
          ul 
            li New factors and new possibilities arising from governments’ adoption of Open Government policies
            li The increasingly rapid pace of technological change and adoption
            li Changes in Canadian demographics and in the nature and structure of business stakeholders
            li Budgetary constraints at every level of government

    .container-fluid.cooperation
      .well
        .row
          .col-md-12
            h2 Principles of Collaboration 
            p In order to provide the highest quality of geographical information the federal, provincial and territorial Accord signatories agree to work within these principles: 
          .col-md-6
            ul
              li To provide effective leadership and governance within the geomatics community in order to contribute to a vital Canadian geomatics sector
              li To promote and contribute to the development of best practices, pan-Canadian and international standards and policies to support geospatial information sharing and integration
              li To support the efficient use of resources by collaborating to reduce management and maintenance costs through the development of harmonized collection strategies and shared infrastructure for geomatics
          .col-md-6
            ul
              li To promote the benefits of integrating geographic information in business processes to enrich analysis and decision making
              li To enhance the availability and usability of geographic information in an open government context
    .container
      .row
        .col-md-6
          h2 Read the Full Accord
          p 
          a(href='/static/geomatics_accord_en.pdf') Download the 2014-2019 Canadian Geomatics Accord 
          p
            | (
            i.fa.fa-file-pdf-o  PDF
            | , 164KB)
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
  .points
    width 600px

  body
    background none

  td
    max-width 200px

  #terra
    width 400px
    height 200px
    float right
    padding-left 20px

  #wildfires
    width 500px
    height 600px
    padding-bottom 20px
</style>
