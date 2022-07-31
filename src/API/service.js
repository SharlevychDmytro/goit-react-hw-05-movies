import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c8ef48bae82b60cf66a4f0e6e3dd153e';

export async function requestPopularMovies() {
  return await axios.get(`3/trending/all/day?api_key=${API_KEY}`);
}

export async function searchMovies(value) {
  return await axios.get(
    `3/search/movie?api_key=${API_KEY}&query=${value}&include_adult=false`
  );
}

export async function moviesInfo(id) {
  return await axios.get(`3/movie/${id}?api_key=${API_KEY}`);
}

export async function moviesCast(id) {
  return await axios.get(`3/movie/${id}/credits?api_key=${API_KEY}`);
}

export async function moviesReviews(id) {
  return await axios.get(`3/movie/${id}/reviews?api_key=${API_KEY}`);
}
