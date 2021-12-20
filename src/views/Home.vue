<template>
  <div class="home">
    <search-movies/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchMovies from '../components/SearchMovies.vue';
export default defineComponent({
  name: "Home",
  components: {
    SearchMovies
  },
});
</script>
