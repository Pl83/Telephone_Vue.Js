import { createStore } from 'vuex'

export default createStore({
  state: {
    Contactes: [
      {
        nom: "léa",
        numero: '06351515'
      },
      {
        nom: "léo",
        numero: '06252925'
      },
      {
        nom: "luc",
        numero: '06285225'
      },
      {
        nom: "lou",
        numero: '06526652'
      },
      {
        nom: "louise",
        numero: '06954852'
      },
      {
        nom: "léon",
        numero: '06285225'
      },
      {
        nom: "larry",
        numero: '06685727'
      },
    ],
  Historiques: [
    {
      nom: "léa",
      numero: '06351515',
      date: '22/01/2023 11:52:51'
    },
    {
      nom: "léo",
      numero: '06252925',
      date: '18/01/2023 14:52:45'
    },
    {
      nom: "lou",
      numero: '06526652',
      date: '01/01/2023 09:23:12'
    },
  ]
  },
  getters: {
  },
  mutations: {
      ajouteContacte(state, Contacte) {
        state.Contactes.push(Contacte);
      },
      ajouteHistorique(state, Historique) {
        state.Historiques.push(Historique);
      },
    },
  actions: {
  },
  modules: {
  }
})
