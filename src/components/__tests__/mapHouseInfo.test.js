import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import MapHouseInfo from '../MapHouseInfo.vue'

Vue.use(Vuetify) // Let vue know about all the vuetify components

describe('Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MapHouseInfo, {
      propsData: {
        title: 'This is a house',
        price: 100,
        livingArea: 50
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Title of expansion area should be "title - price livingAre"', () => { // This is a very simple test
    expect(wrapper.find('.v-expansion-panel__header div').text()).toBe('This is a house - €100 50 m ²')
  })
})
