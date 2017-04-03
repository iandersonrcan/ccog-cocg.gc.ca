<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Organisations membres

      p Les membres du Conseil canadien de géomatique proviennent des provinces, des territoires et des ministères fédéraux:
      
      h2 Membres provinciaux et territoriaux
      .row
        .col-md-6
          strong Alberta
          ul
            li
              a(href='http://geodiscover.alberta.ca' target='_blank') GeoDiscover Alberta
            li
              a(href='http://open.alberta.ca/' target='_blank') Government ouvert Alberta
                   
          strong Colombie britannique
          ul
            li
              a(href='http://geobc.gov.bc.ca/' target='_blank') GeoBC
             
          strong Manitoba	            
          ul
            li
              a(href='http://mli2.gov.mb.ca/' target='_blank') Initiative des terres Manitoba

          strong Nouveau-Brunswick
          ul
            li
              a(href='http://www.snb.ca/geonb1/' target='_blank') GeoNB

          strong Terre-Neuve-et-Labrador
          ul
            li
              a(href='http://opendata.gov.nl.ca/' target='_blank') Ouvrir des données Terre-Neuve-et-Labrador
          strong Territoires du nord-ouest
          ul
            li
              a(href='http://www.geomatics.gov.nt.ca/' target='_blank') Territoires du nord-ouest centre pour la géomatique
            li
              a(href='http://nwtdiscoveryportal.enr.gov.nt.ca/' target='_blank') Portail de découverte de TNO

          strong Nouvelle-Écosse
          ul
            li
              a(href='http://gov.ns.ca/geonova/home/default.asp' target='_blank') GeoNova
        .col-md-6
          strong Nunavut
          ul
            li
              a(href='http://cngo.ca/' target='_blank') Bureau géoscientifique Canada-Nunavut
          
          strong Ontario
          ul
            li
              a(href='https://www.ontario.ca/page/land-information-ontario' target='_blank') Informations sur les terres Ontario
            li
              a(href='http://www.ontario.ca/government/government-ontario-open-data' target='_blank') Ouvrir des données Ontario

          strong Île-du-Prince-Édouard
          ul
            li
              a(href='http://www.gov.pe.ca/gis/' target='_blank') Couches de données SIG
          
          strong Québec
          ul
            li
              a(href='http://www.quebecgeographique.gouv.qc.ca/' target='_blank') Québec géographique
            li
              a(href='https://www.donneesquebec.ca/fr/' target='_blank') Données ouvertes
          
          strong Saskatchewan
          ul
            li
              a(href='http://gis.saskatchewan.ca') Saskatchewan SIG
          
          strong Yukon
          ul
            li
              a(href='http://www.geomaticsyukon.ca/') Yukon Géomatique
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
      h2 Membres du gouvernement fédéral
      .row
        .col-md-6
          strong Agriculture et Agroalimentaire Canada
          ul
            li
              | 
              a(href='http://www.agr.gc.ca/') http://www.agr.gc.ca/
          strong Agence spatiale canadienne
          ul
            li
              | 
              a(href='http://www.asc-csa.gc.ca/') http://www.asc-csa.gc.ca/
          strong Élections Canada 
          ul
            li
              | 
              a(href='http://www.elections.ca/') http://www.elections.ca/
          strong Environnement et Changement climatique Canada
          ul
            li
              | 
              a(href='https://www.ec.gc.ca/') https://www.ec.gc.ca/
          strong Pêches et Océans Canada
          ul
            li
              | 
              a(href='http://www.dfo-mpo.gc.ca/') http://www.dfo-mpo.gc.ca/
        .col-md-6
          strong Défense nationale et les Forces armées canadiennes
          ul
            li
              | 
              a(href='http://www.forces.gc.ca/') http://www.forces.gc.ca/
          strong Savoir polaire Canada
          ul
            li
              | 
              a(href='https://www.canada.ca/en/polar-knowledge.html') https://www.canada.ca/en/polar-knowledge.html
          strong Services publics et Approvisionnement Canada
          ul
            li
              | 
              a(href='http://www.pspc-spac.gc.ca/') http://www.pspc-spac.gc.ca/
          strong Sécurité publique Canada
          ul
            li
              | 
              a(href='https://www.publicsafety.gc.ca/') https://www.publicsafety.gc.ca/
          strong Statistique Canada
          ul
            li
              | 
              a(href='http://www.statcan.gc.ca/') http://www.statcan.gc.ca/
      .row
        .col-md-12.text-center
          img#canada(src='/static/img/canada.jpg', alt='Mosaïque du Canada', title='Mosaïque du Canada')
          .caption
            | Mosaïque du Canada
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=2603&search=radar') ASC

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
