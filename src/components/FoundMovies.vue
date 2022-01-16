<template>
  <div id="found-movies-block">
    <found-movies-nav></found-movies-nav>
    <div id="found-movies-count">
      <span>{{ moviesCount }}</span> movies found
    </div>
    <div class="movies">
      <movie-item
        v-for="item in moviesArray"
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
export default {
  data() {
    return {
      offsetTop: 0,
      moviesArray: require("../../movies.json"),
    }
  },
  computed: {
    movies() {
      return require("../../movies.json");
    },
    moviesCount() {
      return this.movies.length;
    },
  },
  watch: {
    offsetTop (val) {
       this.itemViewport()
    }
  },
  components: { FoundMoviesNav, MovieItem, Logo },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      // this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    itemViewport() {
      this.moviesArray.forEach(movie => {
        let ref = this.$refs['mov'+movie.id]
        if (ref[0]) {
          movie.img_src = isInViewPoint(ref[0].$el) ? movie.poster_path : '';
        }
      })
      Object.values(this.$refs).forEach(item => {
        if (item[0]) {
          let rrr = isInViewPoint(item[0].$el);
          
        }
      })
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  mounted() {
    this.offsetTop++;
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
