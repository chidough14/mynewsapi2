import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: [],
    earticles: [],
    sparticles: []
  },
  getters: {
     getBusinessListings(state){
        return state.articles
     },
     getEntertainmentListing(state){
        return state.earticles
     },
     getSportListing(state){
        return state.sparticles
     }
  },
  mutations: {
    getBusinessListings(state, listings){
       state.articles = listings
    },
    getEntertainmentListing(state, listings){
      state.earticles = listings
    },
    getSportListing(state, listings){
      state.sparticles = listings
    }
  },
  actions: {
    getBusinessListings(context){
       axios.get('https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=9e05afd3d5a7439bb5a564a02df6c6d8')
       .then(response => {
         context.commit('getBusinessListings', response.data.articles)
       })
    },
    getEntertainmentListing(context){
      axios.get('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=9e05afd3d5a7439bb5a564a02df6c6d8')
      .then(response => {
        context.commit('getEntertainmentListing', response.data.articles)
      })
    },
    getSportListing(context){
      axios.get('https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=9e05afd3d5a7439bb5a564a02df6c6d8')
      .then(response => {
        context.commit('getSportListing', response.data.articles)
      })
    }
  }
})
