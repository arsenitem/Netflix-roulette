import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
    searchInput: '',
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSearchInput(state, val) {
      state.searchInput = val;
    }
  },
  actions: {
    getAllMovies(ctx) {
      const json = require('../movies.json');
      ctx.commit('setMovies', json);
    }
  },
  modules: {},
});
