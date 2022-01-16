<template>
  <div class="movie-item" @click="onDetailsClick">
    <img :src="img_src"/>
    <div id="movie-name">{{ movie.title }}</div>
    <div id="movie-year">
      {{ date }}
    </div>
    <div id="movie-description">
      {{ genre }}
    </div>
  </div>
</template>

<script>
import isInViewPoint from './../utils/viewpoint';
export default {
  data() {
    return {
      img_src: '',
      offsetTop: 0,
    }
  },
  props: {
    movie: Object,
  },
  computed: {
    date() {
      return this.movie.release_date.substring(0, 4);
    },
    genre() {
      return this.movie.genres.join(", ");
    },
    search() {
      return this.$store.state.searchInput
    }
  },
  watch: {
    offsetTop() {
      this.itemViewport();
    },
    search() {
      this.itemViewport();
    }
  },
  methods: {
    onDetailsClick() {
      this.$router.push({ name: "Details", query: { id: this.movie.id } });
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    itemViewport() {
      this.img_src = isInViewPoint(this.$el) ? this.movie.poster_path : '';
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
.movie-item {
  cursor: pointer;
  color: #ffffff;
  height: 455px;
  width: 322px;
  margin-bottom: 51px;
  display: inline-table;
  margin-right: 30px;
}
.movie-item img {
  height: 455px;
  width: 322px;
}
#movie-name {
  margin-top: 25px;
  width: 232px;
  height: 22px;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  mix-blend-mode: normal;
  opacity: 0.7;
}
#movie-description {
  width: 323px;
  height: 17px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 38px;

  mix-blend-mode: normal;
  opacity: 0.5;
}
#movie-year {
  margin-left: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.7;
  width: 66px;
  height: 26px;
  display: inline-block;
  border: 1px solid #555555;
  box-sizing: border-box;
  border-radius: 4px;
}
</style>
