<template>
  <div class="details">
    <Logo></Logo>
    <div id="details-img">
      <img :src="movie.poster_path">
    </div>
    <div id="details-title">
      {{movie.title}}
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';
export default {
  name: "Details",
  components: {
    Logo
  },
  computed: {
     movies() {
      return require('../../movies.json');
    },
    movie() {
      if (this.movies) {
        return this.movies.find(item => item.id == this.$route.query.id);
      } else {
        return {};
      }
      
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
  color: #F65261;
    margin-left: 60px;
    margin-top: 20px;
    font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
}
.details .app-label #label-bold{
  color: #F65261;;
    margin-top: 20px;
    font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
}
#details-img {
  position: absolute;
  width: 323.41px;
  height: 486px;
  margin-left: 60px;
  margin-top: 91px;
}
#details-img img{
  width: 323.41px;
  height: 486px;
}
#details-title {
  width: 600px;
  margin-top: 91px;
  font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 49px;
/* identical to box height */

text-align: center;
letter-spacing: 1px;
text-transform: uppercase;
position: absolute;
margin-left: 360px;
color: #FFFFFF;
}
</style>