<template>
  <div class="home">
    <router-view/>
    <found-movies />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchMovies from "../components/SearchMovies.vue";
import FoundMovies from "../components/FoundMovies.vue";

export default defineComponent({
  name: "Home",
  components: {
    SearchMovies,
    FoundMovies,
  },
});
</script>
