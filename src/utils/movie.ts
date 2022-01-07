import { MovieProps } from "./interface";

export function getListMovies(size: number, movies: MovieProps[]) {
  let FilterMovies = [];
  for (let i = 0, l = size; i < l; i++) {
    FilterMovies.push(movies[i]);
  }
  return FilterMovies;
}

export function radomBanner(movies: MovieProps[]) {
  return Math.floor(Math.random() * movies.length);
}