<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center column>
      <h1 class="display-5">Search for a house</h1>
      <div class="mainViewer_form_input-size">
        <v-form>
          <v-text-field label="Regular" v-model="houseId"></v-text-field>
        </v-form>
      </div>
      <v-btn :disabled="disableGetHouseButton" color="info" dark large @click="getHouseData">Get House Data</v-btn>
      <v-alert v-model="houseError" type="error" outline>
        Something has gone wrong
      </v-alert>
    </v-layout>
  </v-container>
</template>
<style scoped>
  .mainViewer_form_input-size {
    width: 300px;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapState({
        houseData: state => state.houseData,
        disableGetHouseButton: state => state.disableGetHouseButton
      }),
      houseId: {
        get () {
          return this.$store.state.houseId
        },
        set (value) {
          this.$store.dispatch('updateHouseId', value)
        }
      },
      houseError: {
        get () {
          return this.$store.state.houseError
        },
        set (value) {
          this.$store.dispatch('updateHouseError', value)
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
