<template>
  <v-layout fill-height ma-0 pa-0>
    <v-card class="results_searchBox-position results_searchBox-size">
      <v-container pb-0 pt-2>
        <v-form>
          <v-text-field label="House ID" v-model="houseId" append-outer-icon="search" @click:append-outer="getHouseData"
            :error="houseError">
          </v-text-field>
        </v-form>
      </v-container>
    </v-card>
    <v-card v-if="houseData" class="results_infoBox-position result_infoBox-size">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <template v-slot:actions>
            <v-icon color="primary">$vuetify.icons.expand</v-icon>
          </template>
          <template v-slot:header>
            <span>{{houseId}}</span>
          </template>
          <v-card>
            <v-card-text class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>

    <GmapMap :options="googleMapOptions" :center="center" :zoom="zoom" map-type-id="terrain" class="results_map-size">
      <GmapMarker v-if="houseData" :position="center" :clickable="true" :draggable="true" @click="center=m.position" />
    </GmapMap>
  </v-layout>
</template>
<style scoped>
  .results_map-size {
    width: 100%;
    height: 100%;
  }

  .results_searchBox-position {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
  }

  .results_searchBox-size {
    width: 500px;
  }

  .results_infoBox-position {
    position: fixed;
    top: 100px;
    left: 10px;
    z-index: 2;
  }

  .result_infoBox-size {
    width: 500px;
  }
</style>
<script>
  import { mapState } from 'vuex'

  export default {
    name: 'House',
    data: function () {
      return {
        googleMapOptions: {
          fullscreenControl: false,
          mapTypeControlOptions: {
            position: 3 // Google Map Top right
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
      center: function () {
        return {
          lat: this.latitude || 52.2,
          lng: this.longtitude || 5.57
        }
      },
      zoom: function () {
        return this.houseData ? 15 : 5
      },
      houseId: {
        get () {
          return this.$store.state.houseId
        },
        set (value) {
          this.$store.dispatch('updateHouseId', value)
        }
      }
    },
    methods: {
      getHouseData: function () {
        this.$store.dispatch('getHouseData')
      }
    }
  }
</script>
