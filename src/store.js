import Vue from 'vue'
import Vuex from 'vuex'
import fundaApi from './api/funda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houseData: false,
    apiAccessKey: process.env.VUE_APP_FUNDA_API_ACCESS_KEY, // Kept in .env.development
    houseId: '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6', // Default ID given to me in the challenge
    houseError: false
  },
  actions: {
    updateAccessKey ({ commit }, key) {
      commit('setApiAccessKey', key)
    },
    updateHouseId ({ commit }, id) {
      commit('setHouseId', id)
    },
    updateHouseData ({ commit }, data) {
      commit('setHouseData', data)
    },
    updateHouseError ({ commit }, error) {
      commit('setHouseError', error)
    },
    async getHouseData ({ dispatch, state }) {
      try {
        dispatch('updateHouseError', false)
        const houseData = await fundaApi.getHouseData(state.apiAccessKey, state.houseId)
        dispatch('updateHouseData', houseData.data)
      } catch (e) {
        dispatch('updateHouseData', false)
        dispatch('updateHouseError', true)
      }
    }
  },
  mutations: {
    setHouseData (state, data) {
      state.houseData = data
    },
    setApiAccessKey (state, key) {
      state.apiAccessKey = key
    },
    setHouseId (state, id) {
      state.houseId = id
    },
    setHouseError (state, error) {
      state.houseError = error
    }
  }
})
