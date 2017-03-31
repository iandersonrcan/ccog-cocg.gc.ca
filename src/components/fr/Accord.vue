<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 L’Accord canadien de géomatique

      .row
        .col-md-12
          p L'Accord canadien sur la géomatique permet une collaboration fédérale-provinciale-territoriale en géomatique. Il définit également des normes de données géographiques communes et partage le coût des bases de données nationales. Le but de l'Accord est de fournir un cadre pour la collaboration intergouvernementale en géomatique, en décrivant les rôles et les responsabilités et les principes généraux de la collaboration intergouvernementale sur les activités de géomatique au Canada.
          p L'accord actuel est en vigueur depuis 2014 et prend fin en 2019.

          h2 Avantages de l’Accord
          p Des informations géographiques crédibles et accessibles sont importantes pour les citoyens, les entreprises et les chercheurs canadiens. L'information géospatiale s'est révélée utile pour accélérer l'innovation et la productivité. Une connaissance précise, définitive et scientifique de la masse continentale canadienne, de l'étendue marine et de l'espace aérien est essentielle à la prise de décisions et à l'élaboration de politiques.
          p Les efforts de collaboration menés dans le cadre de l'Accord ont permis la création de bases de données nationales normalisées et une réduction de dédoublement entre les gouvernements. Ces ensembles de données sont utilisés dans les secteurs privé et public, y compris pour l'agriculture, le développement des ressources naturelles, le transport, l'évaluation environnementale, les revendications territoriales, les discussions sur les limites territoriales et la gestion des urgences.
          p Le partage des données, des outils et des technologies autorisés par l'Accord sous-tend des opérations essentielles dans de nombreuses juridictions. Par exemple, le partage de données et d'outils à travers l'Accord a:
          ul 
            li facilitée les expéditions sans délai de véhicules de déneigement au Yukon
            li permis au ministère de la Défense nationale de planifier pour la gestion des urgences
            li assistée à la planification et logistique électorale dans toutes les juridictions

    .container
      .row.quote
        .col-md-12
          blockquote
            p L'utilisation de l'information géospatiale a contribué pour 20,7 milliards de dollars du produit intérieur brut du Canada et a généré environ 19 000 emplois dans l'économie canadienne en 2013.
    .container-fluid
      .row
        .col-md-12
          .banner(style='background-image:url(/static/img/foxe_basin.jpg); min-height: 320px;')
            .credit-right
              span.bold Photo Credit
              br
              | Bassin Foxe
              br
              | &copy;
              a(href='http://www.esa.int/spaceinimages/Images/2008/07/Foxe_Basin_Canada') ESA
      .mask(style='top: -11px')
    .container
      .row
        .col-md-12
          h2 Histoire
          p L'Accord canadien de géomatique de 2014 à 2019 est le troisième de ces accords. Les accords antérieurs incluent:
          ul
            li L’Accord canadien sur la géomatique de 2001 (2001-2006)
            li L’Accord canadien sur la géomatique de 2007 (2007 - 2012)
          p Dans le cadre des Accords de 2001 et de 2007, les gouvernements fédéral, provinciaux et territoriaux ont cherché à répondre aux besoins communs pour une efficacité accrue et une adaptation aux changements technologiques rapides grâce à un mécanisme formel de collaboration. L'efficacité et l'adaptation aux changements technologiques demeurent des considérations valables. Cependant, un Accord canadien sur la géomatique de 2014 à 2019 a été jugé nécessaire en raison de circonstances récentes, notamment:
          ul
            li Les nouveaux facteurs et nouvelles possibilités découlant de l'adoption par les gouvernements de politiques du gouvernement ouvert
            li Le rythme de plus en plus rapide des changements technologiques et de l'adoption de technologies
            li L’évolution de la démographie canadienne et de la nature et structure des intervenants
            li Les contraintes budgétaires à tous les paliers de gouvernement
    .container-fluid.cooperation
      .well
        .row
          .col-md-12
            h2 Les principes de collaboration
            p Afin de fournir la plus haute qualité d'information géographique, les signataires de l'Accord fédéral, provincial et territorial acceptent de travailler dans le respect de ces principes:
          .col-md-6
            ul
              li Fournir un leadership et une gouvernance efficaces au sein de la communauté géomatique afin de contribuer à un secteur vital de la géomatique canadienne
              li Promouvoir et contribuer au développement de meilleures pratiques, de normes et de politiques pancanadiennes et internationales pour soutenir le partage et l'intégration d'informations géospatiales
              li Soutenir l'utilisation efficace des ressources en collaborant pour réduire les coûts de gestion et d’entretien grâce à l'élaboration de stratégies de collectes harmonisées et d'infrastructures partagées pour la géomatique
          .col-md-6
            ul
              li Promouvoir les avantages de l'intégration de l'information géographique dans la démarche commerciale pour enrichir l'analyse et la prise de décision
              li Améliorer la disponibilité et la facilité d'utilisation de l'information géographique dans un contexte de gouvernement ouvert
    .container
      .row
        .col-md-6
          h2 Lire l’Accord complet
          p 
          a(href='/static/geomatics_accord_fr.pdf') Téléchargez l’Accord canadien de géomatique 2014-2105
          p (PDF, 164KB)
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
