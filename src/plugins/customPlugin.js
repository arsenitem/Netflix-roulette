import SearchComponent from '../components/SearchComponent.vue';
export default {
    install(Vue, options) {
        Vue.component("search", SearchComponent);
    }
}