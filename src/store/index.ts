import { createStore } from "vuex";
import api from '../api';

export default createStore({
  state: {
    movies: [],
    searchInput: '',
    sort: {name: '', title: 'DEFAULT'}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSearchInput(state, val) {
      state.searchInput = val;
    },
    setSort(state, sort) {
      state.sort = sort;
    }
  },
  actions: {
    getAllMovies(ctx, payload) {
      api.get(`movies?limit=30&search=${ctx.state.searchInput}&sortBy=${ctx.state.sort.name}`).then(response => {
        ctx.commit('setMovies', response.data.data);
      });
    }
  },
  modules: {},
});
