<template>
  <div id="found-movies-block">
    <found-movies-nav></found-movies-nav>
    <div id="found-movies-count">
      <span>{{ moviesCount }}</span> movies found
    </div>
    <div class="movies">
      <movie-item
        v-for="item in movies"
        :key="item.id"
        :movie="item"
        :ref="'mov'+item.id"
      ></movie-item>
    </div>
  </div>
  <div class="footer">
    <Logo></Logo>
  </div>
</template>

<script>
import FoundMoviesNav from "./FoundMoviesNav.vue";
import MovieItem from "./MovieItem.vue";
import Logo from "./Logo.vue";

export default {
  data() {
    return {
    }
  },
  computed: {
    movies() {
      const search = this.$store.state.searchInput
      if (search) {
        return this.$store.state.movies.filter(mov => mov.title.toLowerCase().includes(search.toLowerCase()));
      }
      return this.$store.state.movies;
    },
    moviesCount() {
      return this.movies.length;
    },
  },
  components: { FoundMoviesNav, MovieItem, Logo },
  methods: {
  },
  mounted() {
    return this.$store.dispatch('getAllMovies');
  },
};
</script>

<style>
#found-movies-block {
  margin-top: 10px;
  background: #232323;
  padding-left: 59px;
  padding-right: 57px;
}
#found-movies-count {
  color: #ffff;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 28px;
}
#found-movies-count span {
  font-weight: 600;
}
.footer {
  height: 70px;
  background: #424242;
}
.movies {
  display: inline-block;
}
</style>
