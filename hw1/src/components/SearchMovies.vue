<template>
    <div class="search-block">
        <Logo></Logo>
        <div id="add-movie">
            <div>+ add movie</div>
        </div>
        <div id="find-label">
            find your movie
        </div>
        <SearchComponent></SearchComponent>
    </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue"
import Logo from "./Logo.vue";
export default {
    components: {
        SearchComponent,
        Logo,
    }
}
</script>

<style>
    .search-block {
        height: 396px;
        background-image: url("../assets/Bitmap.png");
    }
    .search-block .app-label {
        margin-left: 60px;
        margin-top: 20px;
    }
    #find-label {
        position: absolute;
        margin-left: 120px;
        margin-top: 101px;
         font-weight: 300;
        font-size: 40px;
        line-height: 49px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
    #add-movie {
        width :177px;
        height:46px;
        position: absolute;
        margin-top: 11px;
        margin-left: 967px;
        margin-top: 20px;
        background: rgba(96, 96, 96, 0.68);
        border-radius: 4px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: right;
        text-transform: uppercase;
        text-align: center;
        color: #F65261;
        cursor: pointer;
    }
    #add-movie div {
        margin-top: 11px;
    }
</style>