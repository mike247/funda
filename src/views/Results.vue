<template>
  <v-layout fill-height ma-0 pa-0>
    <map-search-box label="House ID" stateField="houseId" updateStateAction="updateHouseId" searchAction="getHouseData"
      :error="houseError">
    </map-search-box>
    <map-house-info v-if="houseDataFound" v-bind="houseInfo"></map-house-info>
    <google-map :options="googleMapOptions" :zoom="mapZoom" :center="mapCenter" :showMarker="houseDataFound">
    </google-map>
  </v-layout>
</template>
<script>
  import { mapState } from 'vuex'
  import GoogleMap from '../components/GoogleMap'
  import MapSearchBox from '../components/MapSearchBox'
  import MapHouseInfo from '../components/MapHouseInfo'

  export default {
    name: 'House',
    components: {
      GoogleMap,
      MapSearchBox,
      MapHouseInfo
    },
    data: function () {
      return {
        googleMapOptions: {
          fullscreenControl: false,
          mapTypeControlOptions: {
            position: 6 // Google Map bottom left
          }
        }
      }
    },
    computed: {
      ...mapState({
        longtitude: state => state.houseData.WGS84_X,
        latitude: state => state.houseData.WGS84_Y,
        houseError: state => state.houseError,
        houseData: state => state.houseData
      }),
      mapCenter: function () {
        return {
          lat: this.latitude || 52.2, // Default coords for the Netherlands
          lng: this.longtitude || 5.57 // Default coords for the Netherlands
        }
      },
      mapZoom: function () {
        return this.houseData ? 15 : 5
      },
      houseDataFound: function () {
        return !!this.houseData
      },
      houseInfo: function () { // This is a custom mapping from the incomming json to the format I want to use in my components
        return {
          title: this.houseData.Adres,
          price: this.houseData.Huurprijs || this.houseData.KoopPrijs, // House rental pirce || House asking price
          livingArea: this.houseData.WoonOppervlakte,
          description: `${this.houseData.VolledigeOmschrijving.split(' ').slice(0, 40).join(' ')}...`,
          url: this.houseData.URL,
          shortFeatures: this.houseData.KenmerkenKort.Kenmerken,
          photos: this.houseData['Media-Foto'].map(photo => {
            return {
              small: photo,
              large: photo.replace('klein', 'groot')
            }
          })
        }
      }
    }
  }
</script>
