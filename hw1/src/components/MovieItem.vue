<template>
  <div class="movie-item">
      <img :src="movie.src">
      <div id="movie-name">{{movie.name}}</div>
      <div id="movie-year">
           {{movie.year}}
      </div>
      <div id="movie-description">
          {{movie.description}}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<style>
    .movie-item {
        color: #FFFFFF;
        height: 455px;
        width: 322px;
        margin-bottom: 51px;
        display: inline-block;
        margin-right: 30px;
        margin-bottom: 110px;
    }
    .movie-item img{
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

color: #FFFFFF;

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