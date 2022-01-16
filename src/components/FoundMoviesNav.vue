<template>
  <div id="nav">
    <div id="genres">
      <span>ALL</span>
      <span>Documentary</span>
      <span>Comedy</span>
      <span>Horror</span>
      <span>crime</span>
    </div>
    <div id="sort">
      <span id="sort-label">SORT BY</span>
      <span id="release">RELEASE DATE</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  padding-top: 20px;
  color: #ffff;
  height: 62px;
}
#genres span {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-transform: uppercase;
  margin-right: 30px;
}
#genres {
  position: absolute;
}
#sort {
  position: absolute;
  margin-left: 782px;
}
#sort-label {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.888889px;
  text-transform: uppercase;

  mix-blend-mode: normal;
  opacity: 0.6;
}
#release {
  margin-left: 31px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.888889px;
  text-transform: uppercase;
}
</style>
