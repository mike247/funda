<template>
  <v-container fill-height ma-0 pa-0>
    <GmapMap :center="marker" :zoom="16" map-type-id="terrain" class="house_map-size">
      <GmapMarker :position="marker" :clickable="true" :draggable="true" @click="center=m.position" />
    </GmapMap>
  </v-container>
</template>
<style scoped>
  .house_map-size {
    width: 100%;
    height: 100%;
  }
</style>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'House',
    computed: {
      ...mapState({
        longtitude: state => state.houseData.WGS84_X,
        latitude: state => state.houseData.WGS84_Y
      }),
      marker: function () {
        return {
          lat: this.latitude,
          lng: this.longtitude
        }
      }
    }
  }
</script>
