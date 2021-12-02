<template>
    <div class="search-block">
        <SearchComponent></SearchComponent>
    </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue"
export default {
    components: {
        SearchComponent
    }
}
</script>

<style>
    .search-block {
        height: 300px;
        background-image: url("https://miro.medium.com/max/4000/1*few-89t3Lc5M-WG4qQ8Uqg.jpeg");
    }
</style>