<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Member Organizations

      p Canadian Council on Geomatics members come from the Provinces, Territories and Federal Government Departments:
      
      h2 Provincial and Territorial Members
      .row
        .col-md-6
          strong Alberta
          ul
            li
              a(href='http://geodiscover.alberta.ca' target='_blank') GeoDiscover Alberta
            li
              a(href='http://open.alberta.ca/' target='_blank') Alberta Open Government
                   
          strong British Columbia	
          ul
            li
              a(href='http://geobc.gov.bc.ca/' target='_blank') GeoBC
             
          strong Manitoba	            
          ul
            li
              a(href='http://mli2.gov.mb.ca/' target='_blank') Manitoba Land Initiative

          strong New Brunswick	
          ul
            li
              a(href='http://www.snb.ca/geonb1/' target='_blank') GeoNB

          strong Newfoundland and Labrador	
          ul
            li
              a(href='http://opendata.gov.nl.ca/' target='_blank') Newfoundland and Labrador Open Data
          strong Northwest Territories	
          ul
            li
              a(href='http://www.geomatics.gov.nt.ca/' target='_blank') Northwest Territories Centre for Geomatics
            li
              a(href='http://nwtdiscoveryportal.enr.gov.nt.ca/' target='_blank') NWT Discovery Portal

          strong Nova Scotia		
          ul
            li
              a(href='http://gov.ns.ca/geonova/home/default.asp' target='_blank') GeoNova
        .col-md-6
          strong Nunavut
          ul
            li
              a(href='http://cngo.ca/' target='_blank') Canada-Nunavut Geoscience Office
          
          strong Ontario
          ul
            li
              a(href='https://www.ontario.ca/page/land-information-ontario' target='_blank') Land Information Ontario
            li
              a(href='http://www.ontario.ca/government/government-ontario-open-data' target='_blank') Ontario Open Data

          strong Prince Edward Island	
          ul
            li
              a(href='http://www.gov.pe.ca/gis/' target='_blank') GIS Data Layers
          
          strong Quebec
          ul
            li
              a(href='http://www.quebecgeographique.gouv.qc.ca/' target='_blank') Québec géographique
            li
              a(href='https://www.donneesquebec.ca/fr/' target='_blank') Données ouvertes
          
          strong Saskatchewan
          ul
            li
              a(href='http://gis.saskatchewan.ca') GIS Saskatchewan
          
          strong Yukon
          ul
            li
              a(href='http://www.geomaticsyukon.ca/') Geomatics Yukon
    .container-fluid
      .row
        .col-xs-12
          .mask(style='top: 11px')
          .banner(style='background-image:url(/static/img/radarsat_vancouver.jpg); min-height: 300px;')
            .credit-right
              span.bold Photo Credit
              br
              | RADARSAT-2 Image of Vancouver
              br
              | &copy;
              a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=6551&search=radar') CSA
            
    .container
      h2 Federal Government Members
      .row
        .col-md-6
          strong Agriculture and Agri-Food Canada
          ul
            li
              | 
              a(href='http://www.agr.gc.ca/') http://www.agr.gc.ca/
          strong Canadian Space Agency
          ul
            li
              | 
              a(href='http://www.asc-csa.gc.ca/') http://www.asc-csa.gc.ca/
          strong Elections Canada
          ul
            li
              | 
              a(href='http://www.elections.ca/') http://www.elections.ca/
          strong Environment and Climate Change Canada        
          ul
            li
              | 
              a(href='https://www.ec.gc.ca/') https://www.ec.gc.ca/
          strong Fisheries and Oceans
          ul
            li
              | 
              a(href='http://www.dfo-mpo.gc.ca/') http://www.dfo-mpo.gc.ca/
              strong Natural Resources Canada
          ul
            li
              | 
              a(href='http://www.nrcan.gc.ca/') http://www.nrcan.gc.ca/
        .col-md-6
          strong National Defence and the Canadian Armed Forces
          ul
            li
              | 
              a(href='http://www.forces.gc.ca/') http://www.forces.gc.ca/
          strong Polar Knowledge Canada
          ul
            li
              | 
              a(href='https://www.canada.ca/en/polar-knowledge.html') https://www.canada.ca/en/polar-knowledge.html
          strong Public Services and Procurement Canada
          ul
            li
              | 
              a(href='http://www.pspc-spac.gc.ca/') http://www.pspc-spac.gc.ca/
          strong Public Safety Canada
          ul
            li
              | 
              a(href='https://www.publicsafety.gc.ca/') https://www.publicsafety.gc.ca/
          strong Statistics Canada
          ul
            li
              | 
              a(href='http://www.statcan.gc.ca/') http://www.statcan.gc.ca/
      .row
        .col-md-12.text-center
          img#canada(src='/static/img/canada.jpg', alt='Mosaic of Canada', title='Mosaic of Canada')
          .caption
            | Mosaic of Canada
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=2603&search=radar') CSA

    CCOGFooter
</template>

<script>
import CCOGHeader from './Header'
import CCOGFooter from './Footer'

export default {
  name: 'Landing',
  components: {
    CCOGHeader,
    CCOGFooter
  }
}
</script>

<style lang="stylus" scoped>
  body
    background none

  td
    max-width 200px

  #radarsat
    width 350px
    height 300px
    padding-bottom 20px

  #canada
    padding-bottom 20px
</style>
