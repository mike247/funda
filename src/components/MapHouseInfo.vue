<template>
  <v-card class="mapInfoBox-position mapInfoBox-size">
    <v-expansion-panel :value="expanded">
      <v-expansion-panel-content>
        <template v-slot:actions>
          <v-icon color="primary">$vuetify.icons.expand</v-icon>
        </template>
        <template v-slot:header>
          <v-layout align-baseline>
            <span class="headline pr-2">{{title}}</span>
            <span v-if="price" class="headline pr-2">- &euro;{{price.toLocaleString()}}</span>
            <span v-if="livingArea" class="subheading">{{livingArea}} m &sup2;</span>
          </v-layout>
        </template>
        <v-card>
          <v-container fluid pt-2 pb-0>
            <v-layout column align-center>
              <p class="mb-0">{{description}}</p>
              <v-btn flat small color="primary" :href="url" target="_blank">Read More</v-btn>
            </v-layout>
            <v-divider></v-divider>
            <v-layout column mt-3>
              <div v-for="(feature, index) in shortFeatures" :key="index" class="mb-1">
                <span
                  class="body2 grey--text text--lighten-1 d-inline-block mr-2 mapInfoBox_feature_name-size ">{{feature.Naam}}:
                </span>
                <span class="body2 mapInfoBox_feature_value-size" v-html="feature.Waarde"></span>
                <!-- This is usually a no-no (unescaped html) but since this data is coming from a trusted source and I cant find any non formatted versions of this information im doing it here -->
              </div>
            </v-layout>
            <v-divider></v-divider>
            <v-container pr-0 pl-0>
              <v-carousel :cycle="false" :hide-delimiters="true" height="auto">
                <v-carousel-item v-for="(photo, index) in photos" :key="index" :src="photo.large"></v-carousel-item>
              </v-carousel>
            </v-container>
          </v-container>
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

  .mapInfoBox_feature_name-size {
    width: 30%;
  }
</style>
<script>
  export default {
    name: 'MapHouseInfo',
    props: {
      title: String,
      price: Number,
      livingArea: Number,
      description: String,
      url: String,
      shortFeatures: Array,
      photos: Array
    },
    data: function () {
      return {
        expanded: 0
      }
    }
  }
</script>
