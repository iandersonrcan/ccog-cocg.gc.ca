<template lang="pug">
  div
    CCOGHeader
    .container(role='main', property='mainContentOfPage')
      h1 Ce que nous faisons

      .row
        .col-md-6
          p Le Conseil canadien de géomatique s’emploie à faire valoir les activités de géomatique entre les gouvernements fédéral, provinciaux et territoriaux. L'objectif du conseil est de réduire la duplication des efforts entre les organismes gouvernementaux et de faciliter l'accès à l'information géospatiale pour le bénéfice de tous les Canadiens.
          
          h2 Nous sommes un forum consultatif intergouvernemental
          p Le conseil offre un forum consultatif aux gouvernements fédéral, provinciaux et territoriaux pour discuter de thèmes tels que:
          ul
            li Les programmes géomatiques actuels et futurs
            li Les propositions législatives
            li Les possibilités de collaboration
            li Les normes nationales en géomatique
            li Les réussites, nouvelles idées, technologies et procédures qui pourraient profiter à d'autres administrations
        .col-md-6
          img#montreal(src='/static/img/radarsat_montreal.jpg', alt='Lidar Point Cloud of Montreal', title='Lidar Point Cloud of Montreal')
          .caption
            | Lidar Point Cloud de Montréal
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=785&search=radar') CSA
      
    .container-fluid.cooperation
      .well
        .row
          .col-md-12
            h2 Nous encourageons la coopération et l'échange de données géomatiques
            p Le conseil favorise la coopération et l'échange de données géomatiques afin de réduire le dédoublement des efforts et de faciliter l'accès et l'utilisation de l'information géographique par tous les Canadiens. Cela se fait par la promotion de normes et le développement de l'infrastructure de données géospatiales du Canada.
            p Le conseil a le mandat d’élaborer, de promouvoir et de diffuser les normes nationales et internationales en géomatique. Des normes sont nécessaires pour faciliter le partage ouvert de données spatiales entre plates-formes, en particulier dans un réseau varié d'ordinateurs qui gèrent une grande diversité de banques de données spatiales et de types de données.
            p Le conseil supporte l'infrastructure canadienne de données géospatiales (ICDG), une ressource en ligne qui améliore l'accès, le partage et l'utilisation efficaces des données géospatiales. L'ICDG comprend:
        .row
          .col-md-6
            ul
              li Des politiques opérationnelles couvrant des domaines tels que la propriété intellectuelle, le partage des données et la protection de la vie privée, régissant l'utilisation et la réutilisation des données géospatiales
              li Des outils technologiques permettant la recherche, la découverte, l'affichage, le téléchargement et la transformation de données géospatiales
          .col-md-6
            ul
              li Des normes pour les données géospatiales et les outils technologiques qui s'assure que tous les éléments fonctionnent de façon transparente et efficace entre eux
              li Des données géospatiales 
    .container
      h2 Nous supportons la prise de décisions gouvernementales et la prestation de services 
      p Le conseil appuie la prise de décisions gouvernementales et la prestation de services aux citoyens dans de nombreux domaines, y compris:

      ul
        li Le développement durable et l’environnement
        li L’aménagement du territoire et la gestion intégrée de l'utilisation des ressources naturelles.
        li La sécurité publique
        li L’évaluation et surveillance de la santé publique et de l'éducation
        li La planification des infrastructures physiques et critiques
        li La gestion de l'eau et l’utilisation
        li La planification des réseaux de services sociaux
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

  .photo
    float right

  .cooperation
    background #66cee7
    .well
      margin 0 auto
      border 0
      text-align left

  #montreal
    height 20em
    width 35em
</style>
