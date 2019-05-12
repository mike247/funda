<template>
  <v-card class="mapInfoBox-position mapInfoBox-size">
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <span>stuff</span>
        </template>
        <v-card>
          <v-card-text class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>
<style scoped>
  .mapInfoBox-position {
    position: fixed;
    top: 100px;
    left: 10px;
    z-index: 2;
  }

  .mapInfoBox-size {
    width: 500px;
  }
</style>
<script>
  export default {
    name: 'MapHouseInfo'
  }
</script>
