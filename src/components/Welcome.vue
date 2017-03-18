<template lang="pug">
  div
    CCOGHeader
    .banner.welcome
      .well
        h1 Welcome to CCOG
        p.lead
          | The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.
    .container
      .row
        .col-md-12
          h2 Geomatics Accord
        .col-md-8
          p
            | The Canadian Geomatics Accord enables intergovernmental collaboration and cooperation on geospatial data sharing, setting of common geographical data standards, and sharing of costs for core national datasets.
          p
            | The previous versions of the Accord (2001-2006 and 2007-2012) both achieved broad support in jurisdictions across Canada, and resulted in collaborative practices. These collaborative efforts resulted in core, nationally standardized datasets and a reduction of duplication between governments. These datasets are used in both private and public sector applications, including for agriculture, natural resource development, transportation, environmental assessment, land claims, boundary discussions, and emergency management. They have also been one of the world&apos;s first examples of open data (http://open.canada.ca/).
          p
            | Early benefits of the current Accord are materializing as the private sector and governmental organizations increasingly use open geospatial data, tools and technologies. Such data and tools are used in nearly every sector of the economy, including natural resource development (e.g., forestry, oil and gas, and mining), land claims, parks, elections, infrastructure (e.g., roads and rivers), environment (e.g, forests and biodiversity).
          p
            | Sharing of data, tools and technologies permitted under the Accord are underpinning critical operations in many jurisdictions. For example, the sharing of data and tools through the Accord is facilitating dispatch of snow removal vehicles in the Yukon; Department of National Defence planning for managing emergencies; and the conduct of elections at various levels across all jurisdictions.
        .col-md-4
          img.img-responsive(src='/static/img/heatmap.jpg')
          |  
          em Lorem ipsum dolor sit Amet consectetuer.
    .well
      .container
        .row
          .col-md-12
            h2 Key points
          .col-md-6
            ul
              li
                | The use of geospatial information contributed $20.7 billion of Canada&rsquo;s national Gross Domestic Product and generated approximately 19,000 jobs within Canada&rsquo;s economy in 2013.
              li
                | Natural Resources Canada connects producers and users of geospatial information via the GeoConnections program, housed within the Canada Centre for Mapping and Earth Observation.
          .col-md-6
            ul
              li
                | Geomatics is the modern discipline of gathering, storing, processing, and delivering geographic information.
              li
                | Geographic Information System technology, or GIS, was invented in Canada in the 1960s, leading to rapid innovation in the use and application of geospatial data.
    .container
      .row.quote
        .col-md-8
          blockquote
            p
              | Canada is a leader in integrating geospatial data and making it publicly available for decision makers. This renewed Accord will continue to ensure we have the highest level of intergovernmental collaboration to maximize efficiency while bringing benefits to nearly every sector of the economy.
            |  
            strong Greg Rickford
            |  
            em
              | Canada&rsquo;s Minister of Natural Resources and Minister for the Federal Economic Development Initiative for Northern Ontario
        .col-md-4
          img.img-responsive(src='/static/img/headshot.jpg')
    .well.bg-topography
      .container
        .row
          .col-md-12
            h2 Well with Topography background
          .col-md-6
            ul
              li
                | The use of geospatial information contributed $20.7 billion of Canada&rsquo;s national Gross Domestic Product and generated approximately 19,000 jobs within Canada&rsquo;s economy in 2013.
              li
                | Natural Resources Canada connects producers and users of geospatial information via the GeoConnections program, housed within the Canada Centre for Mapping and Earth Observation.
          .col-md-6
            ul
              li
                | Geomatics is the modern discipline of gathering, storing, processing, and delivering geographic information.
              li
                | Geographic Information System technology, or GIS, was invented in Canada in the 1960s, leading to rapid innovation in the use and application of geospatial data.
    .container
      .row
        .col-md-6
          h2 Who We Are
          p
            | Council members come from the governments of Canada, the provinces and the territories. Council members usually represent their government&rsquo;s major geomatics organizations. The council&rsquo;s key objective is to advance geomatics activities between jurisdictions.
        .col-md-6
          h2 Vision
          p
            | Our vision is that Canadians and governments can access the best available geographic information to support informed decision making through interoperable systems and data that are maintained in an efficient and effective manner by all Canadian jurisdictions.
    .banner(style='background-image:url(/static/img/banner_02.jpg)')
    .container
      .row
        .col-md-6
          h2 Who We Are
          p
            | Council members come from the governments of Canada, the provinces and the territories. Council members usually represent their government&rsquo;s major geomatics organizations. The council&rsquo;s key objective is to advance geomatics activities between jurisdictions.
        .col-md-6
          h2 Vision
          p
            | Our vision is that Canadians and governments can access the best available geographic information to support informed decision making through interoperable systems and data that are maintained in an efficient and effective manner by all Canadian jurisdictions.
      .welcome
        .mask.top
        .mask.bottom
        .well 
          h2 The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.

    main#vision.container-fluid
      .container
        h1 Our Vision
        p Our vision is that Canadians can 
            strong access the best available geographic information 
            | to support 
            strong informed decision making 
            | through 
            strong interoperable systems 
            | that are efficiently maintained. 
        p 
          a.btn.btn-primary(href='#/about') what we do

    main#accord.container-fluid
      .container
        .row
          .col-md-4.col-md-offset-2
            img(src='/static/img/montreal_point_cloud.png')
            h3 Members
            p 
              a.btn.btn-primary(href='#/members') council members
			 
          .col-md-4
            img(src='/static/img/vancouver_lidar.png')
            h3 What we do
            p 
              a.btn.btn-primary(href='#/about') About the council	          

        
    main#publications.container-fluid
      .container
        .row
          .col-md-12
            .well.didyouknow
              h3 Did you know?
              strong GIS (Geographic Information Systems) was invented in Canada in the 1960s, 
              | leading to rapid innovation in the use and application of geospatial data
          
    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/montreal_point_cloud.png')
            h3 Geomatics Accord
            p 
              a.btn.btn-primary(href='#/accord') read about the Canadian Geomatics Accord
			 
          .col-md-4
            img(src='/static/img/bg.jpg')
            h3 Publications
            p 
              a.btn.btn-primary(href='#/publications') publications from the council			
          .col-md-4
            img(src='/static/img/radarsat_vancouver.jpg')
            h3 Issues of Interest
            p
              a.btn.btn-primary(href='#/issues') explore issues of interest 
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
  @font-face 
    font-family Bitter
    src url("/static/fonts/Bitter-Regular.otf") format("opentype")

  h1,h2,h3
    font-family Bitter

  body
    background none

  main.container-fluid
    padding 0

  .mask
    width 100%
    background white
    height 60px
    border-radius 100% 100%
    position relative

  .top
    top -71px
    clip-path inset(50% 0% 0% 0%)

  .bottom
    top 521px
    background white
    clip-path inset(0% 0% 50% 0%)

    .didyouknow
      h3
        margin-top 0px
        
  #vision
    background #E9AF30
    padding-bottom 20px

  #members
    margin 0
    background #F2F2F2
    height 300px

  #publications
    margin 0
    height 400px
    background-image url('/static/img/foxe_basin.jpg')
    background-size 100% 700px
    color white

    .well
      margin-top 120px
      color black
      background-color rgba(242,182,50,0.8)

  #accord
    img
      width 300px
      height 200px

  td
    max-width 200px

  #wb-sm .nvbar
    background black
    ul.menu>li
      border none

  blockquote 
    h3
      font-family Georgia
    border none
    font-family Georgia, "Times New Roman", Times, serif
    quotes "\201C""\201D""\2018""\2019"

</style>
