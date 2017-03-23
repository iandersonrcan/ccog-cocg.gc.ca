<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Topics of Interest
      
      .row
        .col-md-6
          p The Canadian Council on Geomatics is involved with all aspects of geomatics in Canada, including the following topics of interest. 
          
          h2 Data Policies
                
          details
            summary Canadian Geospatial Data Infrastructure (CGDI)
            | The CCOG works to support Canada’s geospatial data infrastructure (CGDI), a web-based knowledge infrastructure that improves the efficient access, sharing and use of geospatial data. The CGDI consists of:
            ul
              li Operational policies, covering areas such as intellectual property, data sharing and privacy, governing the use and re-use of the geospatial data
              li Technology tools to enable the search, discovery, viewing, downloading and transformation of geospatial data;
              li Standards for the geospatial data and for the technology tools to ensure that all elements function seamlessly and efficiently with each other; and
              li Geospatial data itself

          details
            summary Open geospatial data
            | Access to trusted, high quality geospatial data is essential for effective government decision making, a robust economy, and improved well-being for all Canadians. Open geospatial data has been shown to make governments more effective and to increase efficiency. CCOG members work actively to set the standards for open geospatial data and to open further datasets for use. 
          details
            summary Point Addressing
            | Standardized addressing helps ensure that locations are named uniquely, and so that postal mail is delivered to the correct point location.  Further, the land has always been alive with names for all places of any significance to First Nations, Métis and Inuit. As such, naming of locations is of interest to all CCOG members.
          
          h2 Land Data
          details
            summary Geodetic Reference Systems
            | Geodetic reference systems come from the need to provide a consistent and integrated reference surface for data analysis. Applications include surveying, mapping, navigation, remote sensing and mineral exploration amongst others. The geodetic reference system is of interest to all CCOG members as it underpins all spatial measurements. 
          details
            summary Land Title
            | A land title is an official record of who owns a piece of land. It can also include information about mortgages, covenants, caveats and easements. Land title information systems and the interoperability of land title data is of interest to CCOG members. 
          details
            summary Cadastre
            | The cadastre, a register of real estate boundaries, is important to all CCOG jurisdictions as it forms the foundation of knowledge on land ownership.
            
          h2 Data Platforms
          details
            summary High Resolution optical imagery acquisition
            | High resolution optical imagery, (either satellite or aerial) is used by all CCOG jurisdictions. CCOG pursues costs savings by coordinating acquisitions. 
          details
            summary Elevation and LiDAR data acquisition
            | Elevation and LiDAR data are used extensively across Canada and is used for forestry management, flood modelling, pollution modelling, urban planning, mapping and cartography, coastline management, transport planning, oil and gas exploration, archaeology and many other disciplines. CCOG pursues costs savings by coordinating acquisitions.
          details
            summary Remotely Piloted Aircraft Systems (drones)
            | Remotely Piloted Aircraft Systems (drones) are actively being used in Canada for infrastructure and environmental monitoring, emergency response, forest management and agriculture. As RPAS provide an growing source of geographic information, the CCOG has published a report titled "
            a(href="#/publications") Environmental Scan on the Operational Use of Remotely Piloted Aircraft Systems (RPAS) for Geomatics Applications in Canada (link)
            |".
            
          details
            summary GeoBase Layers
            | GeoBase is a federal, provincial and territorial government initiative that is overseen by the Canadian Council on Geomatics (CCOG). It is undertaken to ensure the provision of, and access to, a common, up-to-date and maintained base of quality geospatial data for all of Canada.  Through the GeoBase initiative, users with an interest in the field of geomatics can access quality geospatial information at no cost and with unrestricted use. GeoBase was one of the world's first examples of open data and is now available on the 
            a(href='http://geogratis.gc.ca/api/en/nrcan-rncan/ess-sst/$categories?scheme=urn%3Aiso%3Aseries&q=GeoBase') GeoGratis website
            |.
          
          h2 Public Safety
          details
            summary Security and public safety
            | Geomatics supports the five pillars of emergency management: mitigation, prevention, preparedness, response and recovery. Through the work of the CCOG in the realms of security and public safety, Canadians can access location-based information to support these five pillars and improve public safety by reducing the effects of an emergency by getting a better understanding of the situation and by recovering more rapidly from disasters.
          details
            summary Emergency geomatics services
            | Following a natural disaster there is typically limited comprehensive information on what the impact of the disaster has been, including the scale and severity. At the same time, key decisions are being made on how to respond. CCOG members work on geospatial information that is critical to all the pillars of emergency management: mitigation, prevention, preparedness, response and recovery.
          
          h2 Thematic Concerns
          details  
            summary Water management
            | Freshwater covers almost 9% of Canada's total area, and is found in lakes and rivers, ice and snow, and groundwater. CCOG members use mapping tools, remote sensing techniques and earth observation data to reach a better understanding of the dynamics of this important resource. 
          details
            summary Climate change              
            | All the elements of climate change adaptation and mitigation are spatial in nature. Geospatial data can provide critical information on climate vulnerability, adaptation and mitigation and are thus of importance to CCOG members.   
          details
            summary Natural Disasters
            | Following a natural disaster there is typically limited comprehensive information on what the impact of the disaster has been, including the scale and severity. At the same time, key decisions are being made on how to respond. CCOG members work on geospatial information that is critical to all the pillars of emergency management: mitigation, prevention, preparedness, response and recovery.
          details
            summary Floodplain Mapping
            | Undeveloped floodplain land provides many natural resources and functions of considerable economic, social, and environmental value. Floodplains often contain wetlands and other important ecological areas as part of a total functioning system that impacts directly on the quality of the local environment. As such, mapping and understanding floodplains is of importance to CCOG members.
            
          h2 Geospatial Analysis
          details
            summary Geoanalytics
            | Location-based data, combined with powerful analytics, puts a wealth of information at your fingertips. Geoanalytics techniques and tools are of interest to CCOG members to improve efficiencies and to improve decision-making.
          details
            summary Big Data analytics
            | The growing availability of geospatial data represents a unique opportunity for science, while also posing a major challenge to achieve its full potential in terms of scientific exploitation. To analyze and manage large and growing geospatial datasets, copying and moving data is found to be inefficient. Big Geospatial Data Analytics systems are of interest to CCOG members to bring the user and processing power to the data rather than moving the data to the user thus expanding the analytics possible.
        .col-md-6
          img#clearwater(src='/static/img/clearwater.jpg')
          .caption
            | Clearwater Crater
            br
            | &copy; 
            a(href='http://www.asc-csa.gc.ca/eng/search/images/watch.asp?id=5948&search=north') Canadian Space Agency


      p &nbsp; 
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
  },
  mounted () {
    this.$children.querySelector('summary').trigger('wb-init.wb-details')
  }
}
</script>

<style lang="stylus">
  body
    background none

  td
    max-width 200px

  #clearwater
    float right

  summary
    text-decoration underline
</style>
