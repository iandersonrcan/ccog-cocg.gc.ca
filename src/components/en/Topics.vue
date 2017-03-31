<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Topics of Interest
      
      .row
        .col-md-8
          p The Canadian Council on Geomatics is involved with all aspects of geomatics in Canada, including the following topics of interest. 
          
          h2 Data Policies
          h3 Canadian Geospatial Data Infrastructure (CGDI)
          p The CCOG works to support Canada’s geospatial data infrastructure (CGDI), a web-based knowledge infrastructure that improves the efficient access, sharing and use of geospatial data. The CGDI consists of:
          ul
            li Operational policies, covering areas such as intellectual property, data sharing and privacy, governing the use and re-use of the geospatial data
            li Technology tools to enable the search, discovery, viewing, downloading and transformation of geospatial data;
            li Standards for the geospatial data and for the technology tools to ensure that all elements function seamlessly and efficiently with each other; and
            li Geospatial data itself

          h3 Open geospatial data
          p Access to trusted, high quality geospatial data is essential for effective government decision making, a robust economy, and improved well-being for all Canadians. Open geospatial data has been shown to make governments more effective and to increase efficiency. CCOG members work actively to set the standards for open geospatial data and to open further datasets for use. 
          h3 Point Addressing
          p Point Addressing brings a new level of accuracy & utility to previous addressing methodologies such as block addresses.  Todays apps, tools, devices and customers require addresses at the point level to add quality to analytics. As such, point addressing is of interest to all CCOG members.
          
        .col-md-4
          img#clearwater(src='/static/img/clearwater.jpg', alt='Cratère Clearwater', title='Cratère Clearwater')
          .caption
            | Clearwater Crater
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=5948&search=north' target='_blank') CSA

      .row
        .col-md-8
          h2 Land Data
          h3 Geodetic Reference Systems
          p Geodetic reference systems come from the need to provide a consistent and integrated reference surface for data analysis. Applications include surveying, mapping, navigation, remote sensing and mineral exploration amongst others. The geodetic reference system is of interest to all CCOG members as it underpins all spatial measurements. 
          h3 Land Title
          p A land title is an official record of who owns a piece of land. It can also include information about mortgages, covenants, caveats and easements. Land title information systems and the interoperability of land title data is of interest to CCOG members. 
          h3 Cadastre
          p The cadastre, a register of real estate boundaries, is important to all CCOG jurisdictions as it forms the foundation of knowledge on land ownership.
            
          h2 Data Platforms
          h3 High Resolution optical imagery acquisition
          p High resolution optical imagery, (either satellite or aerial) is used by all CCOG jurisdictions. CCOG pursues costs savings by coordinating acquisitions. 
          h3 Elevation and LiDAR data acquisition
          p Elevation and LiDAR data are used extensively across Canada and is used for forestry management, flood modelling, pollution modelling, urban planning, mapping and cartography, coastline management, transport planning, oil and gas exploration, archaeology and many other disciplines. CCOG pursues costs savings by coordinating acquisitions, pursuing unrestricted licencing, and creation of clusters of infrastructure to enhance discovery and analysis of products.
          h3 Remotely Piloted Aircraft Systems (RPAS)
          p Remotely Piloted Aircraft Systems (drones) are actively being used in Canada for infrastructure and environmental monitoring, emergency response, forest management and agriculture. As RPAS provide a growing source of geographic information, the CCOG published a report in 2016 titled "#[a(href="#/publications") Environmental Scan on the Operational Use of Remotely Piloted Aircraft Systems (RPAS) for Geomatics Applications in Canada]".
          
          h3 GeoBase Layers
          p GeoBase is a federal, provincial and territorial government initiative that is overseen by the Canadian Council on Geomatics (CCOG). It is undertaken to ensure the provision of, and access to, a common, up-to-date and maintained base of quality geospatial data for all of Canada.  Through the GeoBase initiative, users with an interest in the field of geomatics can access quality geospatial information at no cost and with unrestricted use. GeoBase was one of the world's first examples of open data and is now available on the #[a(href='http://geogratis.gc.ca/api/en/nrcan-rncan/ess-sst/$categories?scheme=urn%3Aiso%3Aseries&q=GeoBase' target='_blank') GeoGratis website].
      .row
        .col-md-8
          h2 Public Safety
          h3 Security and public safety
          p Geomatics supports the five pillars of emergency management: mitigation, prevention, preparedness, response and recovery. Through the work of the CCOG in the realms of security and public safety, Canadians can access location-based information to support these five pillars and improve public safety by reducing the effects of an emergency by getting a better understanding of the situation and by recovering more rapidly from disasters.
          h3 Emergency geomatics services
          p Following a natural disaster there is typically limited comprehensive information on what the impact of the disaster has been, including the scale and severity. At the same time, key decisions are being made on how to respond. CCOG members work on geospatial information that is critical to all the pillars of emergency management: mitigation, prevention, preparedness, response and recovery. Further, through an extension of the #[router-link(to="/en/accord") Geomatics Accord] , CCOG members facing a disaster are able to exchange geospatial data seamlessly, thereby ensuring a common operating environment across jurisdictions and traditional silos.  
          
          h2 Thematic Concerns
          h3 Water management
          p Freshwater covers almost 9% of Canada's total area, and is found in lakes and rivers, ice and snow, and groundwater. CCOG members use mapping tools, remote sensing techniques and earth observation data to reach a better understanding of the dynamics of this important resource. 
          h3 Climate change              
          p All the elements of climate change adaptation and mitigation are spatial in nature. Geospatial data can provide critical information on climate vulnerability, adaptation and mitigation and are thus of importance to CCOG members.   
          h3 Natural Disasters
          p Following a natural disaster there is typically limited comprehensive information on what the impact of the disaster has been, including the scale and severity. At the same time, key decisions are being made on how to respond. CCOG members work on geospatial information that is critical to all the pillars of emergency management: mitigation, prevention, preparedness, response and recovery. Through an extension of the #[router-link(to="/en/accord") Geomatics Accord] , CCOG members facing a natural disaster are able to exchange geospatial data seamlessly, thereby ensuring a common operating environment across jurisdictions and traditional silos.
          h3 Floodplain Mapping
          p CCOG members are responsible to update or produce floodplain maps for risk prone areas for their jurisdictions. Up to date flood maps inform communities about flood mitigation and land-use planning. Floodplain maps can be used by communities to inform mitigation measures and raise awareness of risks of development in flood zones.
            
          h2 Geospatial Analysis
          h3 Geoanalytics
          p Location-based data, combined with powerful analytics, puts a wealth of information at your fingertips. Geoanalytics techniques and tools are of interest to CCOG members to improve efficiencies and to improve decision-making.
          h3 Big Data analytics
          p The growing availability of geospatial data represents a unique opportunity for science, while also posing a major challenge to achieve its full potential in terms of scientific exploitation. To analyze and manage large and growing geospatial datasets, copying and moving data is found to be inefficient. Big Geospatial Data Analytics systems are of interest to CCOG members to bring the user and processing power to the data rather than moving the data to the user thus expanding the analytics possible.
      p &nbsp; 
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
