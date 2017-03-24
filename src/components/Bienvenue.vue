<template lang="pug">
  div
    CCOGHeader
    .banner.welcome
      .well
        h1 Bienvenue 
        p.lead
          | The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.
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
    .banner(style='background-image:url(/static/img/la_tuque.jpg)')
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

    .well.bg-topography
      .container
        .row
          .col-md-12
            h3 Did you know?
            strong GIS (Geographic Information Systems) was invented in Canada in the 1960s, 
            | leading to rapid innovation in the use and application of geospatial data.
    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/vancouver_lidar.png')
            h3 What We Do 
            p 
              a.btn.btn-primary(href='#/about') About The Council	          

          .col-md-4
            img(src='/static/img/radarsat_vancouver.jpg')
            h3 Issues of Interest
            p
              a.btn.btn-primary(href='#/issues') Explore Issues of Interest 

    main#accord.container-fluid
      .container
        .row
          .col-md-4
            img(src='/static/img/montreal_point_cloud.png')
            h3 Member Organizations
            p 
              a.btn.btn-primary(href='#/members') Council Members
			 
          .col-md-4
            img(src='/static/img/montreal_point_cloud.png')
            h3 Geomatics Accord
            p 
              a.btn.btn-primary(href='#/accord') Read About the Canadian Geomatics Accord
			 
          .col-md-4
            img(src='/static/img/bg.jpg')
            h3 Publications
            p 
              a.btn.btn-primary(href='#/publications') Publications from the Council			
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
