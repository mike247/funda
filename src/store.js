import Vue from 'vue'
import Vuex from 'vuex'
import fundaApi from './api/funda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houseData: false,
    apiAccessKey: 'ac1b0b1572524640a0ecc54de453ea9f',
    houseId: '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6',
    houseError: false,
    disableGetHouseButton: false
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
    updateDisableGetHouseButton ({ commit }, disable) {
      commit('setDisableGetHouseButton', disable)
    },
    async getHouseData ({ dispatch, state }) {
      try {
        dispatch('updateDisableGetHouseButton', true)
        dispatch('updateHouseError', false)
        const houseData = await fundaApi.getHouseData(state.apiAccessKey, state.houseId)
        dispatch('updateHouseData', houseData.data)
      } catch (e) {
        dispatch('updateHouseData', false)
        dispatch('updateHouseError', true)
        dispatch('updateDisableGetHouseButton', false)
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
    },
    setDisableGetHouseButton (state, disable) {
      state.disableGetHouseButton = disable
    }
  }
})
