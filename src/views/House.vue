<template>
  <v-container fill-height ma-0 pa-0>
    <iframe class="house_map-size" frameborder="0" style="border:0" :src="googleMapsSrc">
    </iframe>
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
        address: state => state.houseData.Adres,
        city: state => state.houseData.Plaats,
        postCode: state => state.houseData.Postcode,
        googleApiKey: state => state.googleApiKey
      }),
      houseLocation: function () {
        return `${this.address.split(' ').join('+')}+${this.city.split(' ').join('+')}+${this.postCode.split(' ').join('+')}`
      },
      googleMapsSrc: function () {
        return `https://www.google.com/maps/embed/v1/place?key=${this.googleApiKey}&q=${this.houseLocation}`
      }
    }
  }
</script>
