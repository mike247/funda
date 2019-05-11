import Vue from 'vue'
import Vuex from 'vuex'
import fundaApi from './api/funda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houseData: {},
    apiAccessKey: 'ac1b0b1572524640a0ecc54de453ea9f',
    houseId: '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6'
  },
  actions: {
    updateAccessKey ({ commit }, key) {
      commit('setApiAccessKey', key)
    },
    updateHouseId ({ commit }, id) {
      commit('setHouseId', id)
    },
    async getHouseData ({ commit, state }) {
      const houseData = await fundaApi.getHouseData(state.apiAccessKey, state.houseId)
      console.log(houseData)
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
    }
  }
})
