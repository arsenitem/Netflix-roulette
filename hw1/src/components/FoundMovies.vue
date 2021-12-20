<template>
  <div id="found-movies-block">
    <found-movies-nav></found-movies-nav>
    <div id="found-movies-count">
      <span>39</span> movies found
    </div>
    <div class="movies">
      <movie-item v-for="item in foundMovies" :key="item.id" :movie="item"></movie-item>
    </div>
  </div>
   <div class="footer">
      <Logo></Logo>
    </div>
</template>

<script>
import FoundMoviesNav from './FoundMoviesNav.vue'
import MovieItem from './MovieItem.vue'
import Logo from './Logo.vue';
export default {
  data() {
    return {
      foundMovies: [
        {
          id: 1,
          name: "Pulp fiction",
          year: 2019, 
          description: "Action & Adventiure", 
          src: require("../assets/Pulp.png")
        },
         {
          id: 2,
          name: "Pulp fiction",
          year: 2019, 
          description: "Action & Adventiure", 
          src: require("../assets/Pulp.png")
        },
         {
          id: 3,
          name: "Pulp fiction",
          year: 2019, 
          description: "Action & Adventiure", 
          src: require("../assets/Pulp.png")
        },
         {
          id: 4,
          name: "Pulp fiction",
          year: 2019, 
          description: "Action & Adventiure", 
          src: require("../assets/Pulp.png")
        },
      ]
    }
  },
  components: { FoundMoviesNav, MovieItem, Logo },

}
</script>

<style>
  #found-movies-block {
    margin-top: 10px;
    background: #232323;
    padding-left: 59px;
    padding-right: 57px;
    display: inline-block;
  }
  #found-movies-count {
    color: #FFFF;
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
    margin-bottom: 28px;
  }
   #found-movies-count span{
    
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