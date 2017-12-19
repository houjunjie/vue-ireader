import Vue from 'vue'
import Vuex from 'vuex'
import search from './search.js'
import reader from './reader.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    reader
  }
})
