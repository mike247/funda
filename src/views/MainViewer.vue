<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center column>
      <div>Hello World</div>
      <v-btn color="info" dark large @click="getHouseData">Get House Data</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainViewer',
  methods: {
    getHouseData: function () {
      this.$store.dispatch('getHouseData')
    }
  }
}
</script>
