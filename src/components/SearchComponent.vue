<template>
  <div id="movie-search">
    <input placeholder="What do you want to watch?" @input="onSearchInput"/>
    <button id="search-btn">SEARCH</button>
  </div>
</template>

<script>
import { debounce } from 'lodash';
export default {
  methods: {
    onSearchInput(e) {
      this.debouncedUpdate(e.target.value);
    },
    debouncedUpdate: debounce(function(val) {
      this.$store.dispatch('updateSearchInput', val);
      this.$store.dispatch('getAllMovies');
      this.$router.push({name: 'Search', query: {search: val}})
    }, 1000)
  },
  mounted() {
    const searchQuery = this.$route.query.search;
    if (searchQuery) {
      this.$store.dispatch('updateSearchInput', searchQuery);
      this.$store.dispatch('getAllMovies');
    }
  }
};
</script>

<style>
#movie-search {
  position: absolute;
  margin-left: 120px;
  margin-top: 188px;
}
#movie-input {
  width: 713px;
  height: 57px;
}
#movie-search input {
  height: 57px;
  width: 713px;
  border: 0;
  padding: 0;
  margin: 0;
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  color: #ffffff;
  font-size: 26px;
  padding-left: 19px;
}
#movie-search input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.3;
}
#search-btn {
  cursor: pointer;
  margin-left: 14px;
  background: #f65261;
  border-radius: 4px;
  width: 233px;
  height: 57px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
}
</style>
