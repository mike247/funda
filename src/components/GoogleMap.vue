<template>
  <GmapMap :options="options" :center="center" :zoom="zoom" map-type-id="terrain" class="googleMap-size">
    <GmapMarker v-if="showMarker" :position="center" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</template>

<style scooped>
  .googleMap-size {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'GoogleMap',
    props: {
      options: Object,
      center: Object,
      zoom: Number,
      showMarker: Boolean
    }
  }
</script>
