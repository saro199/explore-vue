import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    profile: '',
    auth: '0'
  },
  mutations: {
    addProfile (state, profile) {
      state.profile = profile
      state.auth = profile.getId()
      console.log(profile.getId())
      console.log(state.auth)
    },
    removeProfile (state) {
      state.profile = ''
      state.auth = '0'
    }
  }
})

export default store
