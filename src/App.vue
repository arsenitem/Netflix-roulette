<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style>
@import url("http://fonts.cdnfonts.com/css/montserrat");
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
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
  margin-left: auto;
  margin-right: auto;
}
</style>
