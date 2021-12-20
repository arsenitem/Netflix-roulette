import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Logo from '../components/Logo.vue';
import SearchMovies from '../components/SearchMovies.vue';
import SearchComponent from '../components/SearchComponent.vue';
import FoundMoviesNav from '../components/FoundMoviesNav.vue';
import MovieItem from '../components/MovieItem.vue';
export default {
  title: 'App',
}
export const simpleLogo = () => ({
  render() {
    return <Logo></Logo>;
  }
})
export const SearchMoviesComponent = () => ({
  render() {
    return <SearchMovies></SearchMovies>;
  }
})
export const Search = () => ({
  render() {
    return <SearchComponent></SearchComponent>;
  }
})
export const MoviesNav = () => ({
  render() {
    return <FoundMoviesNav></FoundMoviesNav>;
  }
})
const movie_data =  {
  id: 1,
  name: "Pulp fiction",
  year: 2019, 
  description: "Action & Adventiure", 
  src: require("../assets/Pulp.png")
}

export const Movie = () => ({
  render() {
    return <MovieItem movie={movie_data}></MovieItem>;
  }
})
