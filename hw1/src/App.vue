<template>
  <div class="container">
    <search-movies/>
    <found-movies/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FoundMovies from './components/FoundMovies.vue';
import SearchMovies from './components/SearchMovies.vue';

export default defineComponent({
  name: 'App',
  components: { 
    SearchMovies,
    FoundMovies,
  }
});
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/montserrat');
body {
  margin:0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  margin: 0;
  padding-left: 56px;
  padding-right: 56px;
  padding-top: 54px;
  background-color: #555555;
}
.container {
  width: 1200px;
}
</style>
