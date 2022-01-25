<template>
  <div class="app-label" @click="onLogoClick"><span id="label-bold">netflix</span>roulette</div>
</template>

<script>
export default {
  name: "my-logo",
  methods: {
    onLogoClick() {
      this.$router.push({name: "Home"});
    }
  }
};
</script>

<style>
.app-label {
  cursor: pointer;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #f65261;
  position: absolute;
  /* margin-left: 60px;
        margin-top: 20px; */
}
#label-bold {
  font-weight: 900;
}
</style>
