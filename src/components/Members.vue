<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Member Organizations

      img#canada.hidden(src='/static/img/canada.jpg')

      
      p Canadian Council on Geomatics members come from the Provinces, Territories and Federal Government Departments:
      
      h2 Provincial and Territorial Members
      p.small Expand to find links to each member's geospatial or open data portal.
      .row
        .col-md-6
          details
            summary Alberta	
            a(href='http://open.alberta.ca/' target='_blank') Alberta Open Government Portal
                   
          details
            summary British Columbia	
            a(href='https://data.gov.bc.ca/' target='_blank') DataBC
             
          details
            summary Manitoba	            
            a(href='http://mli2.gov.mb.ca/' target='_blank') Manitoba Land Initiative

          details
            summary New Brunsick	
            a(href='http://www.snb.ca/geonb1/' target='_blank') GeoNB

          details
            summary Newfoundland and Labrador	
            a(href='http://opendata.gov.nl.ca/' target='_blank') Newfoundland and Labrador Open Data
            
          details
            summary North West Territories	
            a(href='http://www.geomatics.gov.nt.ca/' target='_blank') Northwest Territories Centre for Geomatics
            br
            a(href='http://nwtdiscoveryportal.enr.gov.nt.ca/' target='_blank') NWT Discovery Portal

          details
            summary Nova Scotia		
            a(href='https://data.novascotia.ca/' target='_blank') Nova Scotia Open Data Portal
            br
            a(href='http://gov.ns.ca/geonova/home/default.asp' target='_blank') GeoNova
        .col-md-6
          details
            summary Nunavut
            a(href='http://cngo.ca/' target='_blank') Canada-Nunavut Geoscience Office
          
          details
            summary Ontario
            a(href='http://www.ontario.ca/government/government-ontario-open-data' target='_blank') Ontario open data website

          details
            summary Prince Edward Island	
            a(href='http://www.gov.pe.ca/gis/' target='_blank') GIS Data Layers: Geographic Information for PEI
          
          details
            summary Quebec	
            a(href='http://www.quebecgeographique.gouv.qc.ca/' target='_blank') Québec géographique
            br
            a(href='https://www.donneesquebec.ca/fr/' target='_blank') Données ouvertes
          
          details
            summary Saskatchewan
            a(href='http://gis.saskatchewan.ca') GIS.saskatchewan.ca
          
          details
            summary Yukon
            a(href='http://www.geomaticsyukon.ca/') Geomatics Yukon
            
      
      h2 Federal Government Members:
      ul
        li Agriculture and Agrifood Canada
        li Canada Space Agency
        li Elections Canada
        li Environment Canada        
        li Fisheries and Ocean
        li National Defence
        li Polar Knowledge Canada
        li Public Works and Government Services Canada        
        li Public Safety Canada
        li Statistics Canada

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

  #canada
    float right
    width 700px
    height 500px
    padding-bottom 20px

</style>
