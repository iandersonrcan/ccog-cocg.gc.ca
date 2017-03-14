<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Issues of Interest
      ul
        li High Resolution optical imagery acquisition
        li Elevation and LiDAR data acquisition
        li Water management
        li Climate change
        li GeoBase Layers
        li Remotely Piloted Aircraft Systems
        li Security and public safety
        li National Disaster
        li Floodplain Mapping
        li Point Addressing
        li Geodetic
        li Geoanalytics
        li Land Title
        li Cadastral
        li Big Data analytics
        li Canadian Geospatial Data Infrastructure
        li Open geospatial data
        li Emergency geomatics services
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
</style>
