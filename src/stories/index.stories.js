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
  title: "Guardians of the Galaxy Vol. 3",
  release_date: "2020-05-01",
  genres: [
    "Action",
    "Adventure",
    "Science Fiction"
  ],
  poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
}

export const Movie = () => ({
  render() {
    return <MovieItem movie={movie_data}></MovieItem>;
  }
})
