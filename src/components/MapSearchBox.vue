<template>
  <v-card class="mapSearchBox-position mapSearchBox-size">
    <v-container pb-0 pt-2>
      <v-form @submit="submitSearch">
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
    max-width: 500px;
    width: 44%;
  }

  @media (max-width: 720px) {
    .mapSearchBox-size {
      max-width: 100%;
      width: calc(100% - 20px);
      /* Keep a gutter of 10px on each side left and right */
    }
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
      submitSearch: function (e) {
        if (e) {
          e.preventDefault()
        }
        this.$store.dispatch(this.searchAction)
      }
    }
  }
</script>
