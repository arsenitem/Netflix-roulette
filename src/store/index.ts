import { createStore } from "vuex";
import api from '../api';

export default createStore({
  state: {
    movies: [],
    searchInput: '',
    sort: {name: 'release_date', title: 'RELEASE DATE'},
    sortOrder: 'desc'
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
    },
    setSortOrder(state, order) {
      state.sortOrder = order;
    }
  },
  actions: {
    async getAllMovies({state, commit}, payload) {
      return api.get(`movies?limit=30&search=${state.searchInput}&searchBy=title&sortBy=${state.sort.name}&sortOrder=${state.sortOrder}`).then(response => {
        commit('setMovies', response.data.data);
      });
    },
    updateSearchInput({ commit }, val) {
      commit('setSearchInput', val);
    },
    updateSort({ commit }, val) {
      commit('setSort', val);
    },
    updateSortOrder({state, commit}) {
      const order = state.sortOrder === 'asc' ? 'desc' : 'asc';
      commit('setSortOrder', order);
    }
  },
  modules: {},
});
