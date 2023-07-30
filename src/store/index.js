import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, name:'Fernanda', age: 28},
      {id: 2, name:'Felipe', age: 29}
    ],
    contadorID: 2 
  },
  getters: {
  },
  mutations: {
    ADD_USER: function(state, newUser) {
      state.contadorID ++
      newUser.id = state.contadorID
      state.users.push(newUser)
    },
    DELETE_USER: function(state, id) {
      let index = state.users.findIndex( usuario => usuario.id == id )
      state.users.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
