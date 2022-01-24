<template>
  <div class="details">
    <Logo/>
    <div id="search-icon" @click="onSearchClick"><img src="../assets/SearchButton.svg"/></div>
    <div id="details-img">
      <img :src="movie.poster_path" />
    </div>
    <div id="details-block">
      <div id="details-title">
      {{ movie.title }}
      </div>
      <div id="details-rating">
        {{movie.vote_average}}
      </div>
      <div id="details-year">
      {{ getYear(movie.release_date)}}
      </div>
      <div id="details-duration">
      {{ getDuration(movie.runtime) }}
      </div>
      <div id="details-overview">
      {{ movie.overview }}
      </div>
    </div>
    
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  name: "Details",
  components: {
    Logo,
  },
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    movie() {
      if (this.movies.length) {
        return this.movies.find((item) => item.id == this.$route.query.id);
      } else {
        return {};
      }
    },
  },
  methods: {
    getYear(date) {
      if (date) {
        return date.substring(0, 4);
      }
      return null
    },
    getDuration(time) {
      let h = Math.floor(time / 60);
      let m = time % 60;
      return `${h}h ${m}m`;
    },
    onSearchClick() {
      this.$router.push({name: "Home"})
    }
  }
};
</script>
<style>
.details {
  height: 600px;
  background: #232323;
}
.details .app-label {
  color: #f65261;
  margin-left: 60px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
}
.details .app-label #label-bold {
  color: #f65261;
  margin-top: 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
}
#details-rating {
  height: 60px;
  width: 60px;
  font-style: normal;
  font-weight: 300;
font-size: 20px;
line-height: 24px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
}
#details-img {
  position: absolute;
  width: 323.41px;
  height: 486px;
  margin-left: 60px;
  margin-top: 91px;
}
#details-img img {
  width: 323.41px;
  height: 486px;
}
#details-block {
  width: 600px;
  margin-top: 91px;
  font-style: normal;
  position: absolute;
  margin-left: 420px;
}
#details-title {
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
}
#details-year {
  color: #F65261;
  font-weight: 300;
font-size: 24px;
line-height: 29px;
  float: left;
}
#details-duration {
  color: #F65261;
  float: left;
  font-weight: 300;
font-size: 24px;
line-height: 29px;
  margin-left: 51px;
}
#search-icon {
  position: absolute;
width: 28px;
height: 29px;
left: 1280px;
top: 72px;
}

#details-overview {
  display: inline-block;
  margin-top: 15px;
  font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
}
</style>
