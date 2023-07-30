import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {id: 1, name:'Oleg', age: 20},
      {id: 2, name:'Alex', age: 21},
      {id: 3, name:'Igor', age: 22}
    ],
    contadorID: 3
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
