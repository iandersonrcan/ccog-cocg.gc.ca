<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Les sujets d’intérêt
      
      .row
        .col-md-8
          p Le Conseil canadien de géomatique est impliqué dans tous les aspects de la géomatique au Canada.

          h2 Politiques des données

          h3 Infrastructure canadienne de données géospatiales (ICDG)
          p Le Conseil canadien de géomatique (COCG) appuie l’Infrastructure canadienne de données géospatiales (ICDG), une infrastructure fondée sur une base de connaissances du réseau Internet qui améliore l'accès, le partage et l'utilisation efficaces des données géospatiales. L'ICDG comprend:
          ul
            li Des politiques opérationnelles couvrant des domaines tels que la propriété intellectuelle, le partage des données et la protection de la vie privée, régissant l'utilisation et la réutilisation des données géospatiales
            li Des outils technologiques permettant la recherche, la découverte, l'affichage, le téléchargement et la transformation de données géospatiales
            li Des normes pour les données géospatiales et les outils technologiques qui s'assure que tous les éléments fonctionnent de façon transparente et efficace entre eux
            li Des données géospatiales 

          h3 Données géospatiales ouvertes
          p L'accès à des données géospatiales fiables et de haute qualité est essentiel pour une prise de décision efficace du gouvernement, une économie robuste et un bien-être amélioré pour tous les Canadiens. Il a été démontré que les données géospatiales ouvertes rendent les gouvernements plus efficaces. Les membres du COCG travaillent activement à établir les normes pour les données géospatiales ouvertes et à rendre d'autres ensembles de données disponibles.

          h3 Adressage par points
          p L’adressage par points apporte un nouveau niveau d’exactitude et d'utilité aux méthodes d'adressage précédentes telles que les adresses de bloc. Les applications, les outils, les appareils et les clients d'aujourd'hui nécessitent des adresses au niveau des points pour améliorer la qualité des analyses. À ce titre, l'adressage par points est intéressant pour tous les membres du COCG.

        .col-md-4
          img#clearwater(src='/static/img/clearwater.jpg', alt='Cratère Clearwater', title='Cratère Clearwater')
          .caption
            | Cratère Clearwater
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=5948&search=north' target='_blank') CSA

      .row
        .col-md-8
          h2 Données foncières

          h3 Systèmes de reference géodésiques
          p Les systèmes de référence géodésiques proviennent de la nécessité de fournir une surface de référence cohérente et intégrée pour l'analyse des données. Les applications comprennent l'arpentage, la cartographie, la navigation, la télédétection et l'exploration minière, entre autres. Le système de référence géodésique est intéressant pour tous les membres du COCG car il supporte toutes les mesures spatiales.

          h3 Titre foncier
          p Un titre foncier est un registre officiel de propriétaire d’une parcelle de terrain. Il peut également inclure des informations sur les hypothèques, les conventions, et les servitudes. Les systèmes d'information sur les titres fonciers et l'interopérabilité des données foncières intéressent les membres du COCG.

          h3 Cadastre
          p Le cadastre, un registre des limites des propriétés, est important pour toutes les juridictions du COCG car il constitue le fondement des connaissances sur la propriété foncière.

          h2 Plattes-formes de données
          h3 Acquisition d’images optiques haute résolution 
          p Les images optiques à haute résolution (satellite ou aérienne) sont utilisées par toutes les juridictions du COCG. Le COCG réalise des économies de coûts en coordonnant les acquisitions.

          h3 Élévation et acquisition de données LiDAR 
          p Les données d'élévation et de données LiDAR sont largement utilisées à l'échelle du Canada et sont utilisées pour la gestion forestière, la modélisation des inondations, la modélisation de la pollution, l'urbanisme, la cartographie, la gestion du littoral, la planification des transports, l'exploration pétrolière et gazière, l'archéologie et bien d'autres disciplines. Le COCG réalise des économies de coûts en coordonnant les acquisitions, en cherchant des données libres d’accès, et en créant des regroupements d'infrastructure pour améliorer la découverte et l'analyse des produits.
          h3 Systèmes d’aéronef télépiloté (drones)
          p Les systèmes d’aéronef télépiloté sont activement utilisés au Canada pour la surveillance des infrastructures et de l'environnement, les interventions d'urgence, la gestion des forêts et de l'agriculture. Comme le drones fournit une source croissante d'information géographique, le COCG a publié en 2016 un rapport intitulé «Analyse du contexte de l'utilisation des systèmes d'aéronefs télépilotés (drones) en géomatique au Canada».

          h3 Couches GéoBase
          p GéoBase est une initiative des gouvernements fédéral, provinciaux et territoriaux parrainée par le Conseil canadien de la géomatique (COCG). Cette initiative a pour but d'assurer l'accès à une base commune de données géospatiales de qualité, à jour et actualisée pour tout le Canada. Grâce à l’initiative GéoBase, les utilisateurs du domaine de la géomatique ont accès à de l'information géospatiale de qualité sans frais et sans restriction d'utilisation. GéoBase a été l'un des premiers exemples de données ouvertes au monde et est maintenant disponible sur le site Web de GéoGratis.

      .row
        .col-md-8
          h2 Sécurité publique
          h3 Sécurité et protection publique
          p La géomatique appuie les cinq piliers de la gestion des urgences: atténuation, prévention, préparation, intervention et rétablissement. Grâce au travail du COCG dans les domaines de la sécurité et protection publique, les Canadiens peuvent avoir accès à de l'information géospatiale situationnelle pour appuyer ces cinq piliers et améliorer la sécurité publique en réduisant les effets d'une situation d'urgence en assurant une meilleure compréhension de la situation et en se remettant plus rapidement des catastrophes.

          h3 Services de geomatics d’urgence
          p À la suite d'une catastrophe naturelle, les informations détaillées sur l’impact de la catastrophe, y compris sur l'ampleur et la gravité, sont généralement limitées. Parallèlement, des décisions clés sont prises quant à la façon de réagir. Les membres du COCG travaillent sur l'information géospatiale qui est essentielle à tous les piliers de la gestion des urgences: atténuation, prévention, préparation, intervention et rétablissement. De plus, grâce à une extension de #[router-link(to="/fr/accord") l'Accord sur la géomatique], les membres du COCG confrontés à une catastrophe sont en mesure d'échanger des données géospatiales sans difficulté entre eux et avec d'autres ministères fédéraux, assurant ainsi un environnement de fonctionnement commun entre les juridictions et les cloisonnements traditionnels.

          h2 Thematic Concerns
          h3 Gestion de l’eau
          p L'eau douce couvre près de 9% de la superficie totale du Canada et se trouve dans les lacs et les rivières, la glace et la neige et les eaux souterraines. Les membres du COCG utilisent des outils de cartographie, des techniques de télédétection et des données d'observation de la Terre pour mieux comprendre la dynamique de cette ressource importante.

          h3 Changement climatique
          p Tous les éléments de l'adaptation au changement climatique et de l'atténuation sont de nature spatiale. Les données géospatiales peuvent fournir des informations cruciales sur la vulnérabilité du climat, l'adaptation et l'atténuation, et sont donc importantes pour les membres du COCG.

          h3 Catastrophe naturelle
          p À la suite d'une catastrophe naturelle, les informations détaillées sur l’impact de la catastrophe, y compris sur l'ampleur et la gravité, sont généralement limitées. Parallèlement, des décisions clés sont prises quant à la façon de réagir. Les membres du COCG travaillent sur l'information géospatiale qui est essentielle à tous les piliers de la gestion des urgences: atténuation, prévention, préparation, intervention et rétablissement. De plus, grâce à une extension de #[router-link(to="/fr/accord") l'Accord sur la géomatique], les membres du COCG confrontés à une catastrophe sont en mesure d'échanger des données géospatiales sans difficulté entre eux et avec d'autres ministères fédéraux, assurant ainsi un environnement de fonctionnement commun entre les juridictions et les cloisonnements traditionnels.

          h3 Cartographie des plaines inondables
          p Les membres du COCG ont la responsabilité de mettre à jour ou de produire des cartes des plaines d'inondation pour les zones à risque dans leur juridiction. Des cartes d'inondation à jour informent les communautés sur l'atténuation des inondations et l'aménagement du territoire. Les cartes des plaines d'inondation peuvent être utilisées par les communautés pour les informer des mesures d'atténuation et sensibiliser la population aux risques de développement dans les zones inondables.

          h2 Analyse géospatiale
          h3 Géoanalytiques
          p Les données géoréférencées, combinées à des analyses puissantes, mettent à votre portée une mine d'information. Les techniques et les outils de géoanalyse sont intéressants pour les membres du COCG afin d'améliorer l'efficacité et la prise de décision.

          h3 L’analyse des mégadonnées
          p La disponibilité croissante de données géospatiales représente une opportunité unique pour la science, tout en posant un défi majeur pour réaliser son plein potentiel en termes d'exploitation scientifique. Pour analyser et gérer des ensembles de données géospatiales de grande envergure, copier et déplacé des données se révèlent inefficace. L’analyse des mégadonnées géospatiales est intéressante pour les membres du COCG afin d’amener l'utilisateur et la puissance de traitement aux données plutôt que de déplacer les données à l'utilisateur élargissant ainsi l'analyse possible.
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

  #clearwater
    float right
</style>
