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
import isInViewPoint from './../utils/viewpoint';
import { throttle } from 'lodash';

export default {
  data() {
    return {
      offsetTop: 0,
    }
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    moviesCount() {
      return this.movies.length;
    },
  },
  components: { FoundMoviesNav, MovieItem, Logo },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    throttledViewport: throttle(function() {
      this.movies.forEach(mov => {
        const movRef = this.$refs['mov'+mov.id]
        if (movRef) {
          const movieItem = movRef[0]
          if (movieItem) {
             movieItem.img_src = isInViewPoint(movieItem.$el) ? mov.poster_path : '';
          } 
        }
      })
    }, 800)
  },
  watch: {
    offsetTop() {
      this.throttledViewport();
    },
    movies: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.offsetTop++;
        });
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllMovies');
    this.offsetTop++;
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
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
