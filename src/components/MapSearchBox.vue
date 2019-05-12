<template>
  <v-card class="mapSearchBox-position mapSearchBox-size">
    <v-container pb-0 pt-2>
      <v-form>
        <v-text-field :label="label" v-model="searchState" append-outer-icon="search" @click:append-outer="submitSearch"
          :error="error">
        </v-text-field>
      </v-form>
    </v-container>
  </v-card>
</template>
<style scoped>
  .mapSearchBox-position {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
  }

  .mapSearchBox-size {
    width: 500px;
  }
</style>
<script>
  export default {
    name: 'MapSearchBox',
    props: {
      label: String,
      stateField: String,
      updateStateAction: String,
      searchAction: String,
      error: Boolean
    },
    computed: {
      searchState: {
        get () {
          return this.$store.state[this.stateField]
        },
        set (value) {
          this.$store.dispatch(this.updateStateAction, value)
        }
      }
    },
    methods: {
      submitSearch: function () {
        this.$store.dispatch(this.searchAction)
      }
    }
  }
</script>
