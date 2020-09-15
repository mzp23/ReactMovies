import { createSelector } from "reselect";

import { SORT_BY_STARS, RESET_SORTING, SORT_BY_LIKES } from "./types";

const filterArr = (arr, regExp) => arr?.filter((el) => el.title.match(regExp));

export const getIsLoaded = (state) => state.isLoaded;
const getDefaultMovies = (state) => {
  return state.moviesReducer.moviesToRender;
};

const getDefaultMovies2 = (state) => {
  return state.moviesReducer.moviesToRender;
};
export const getMovieIdToRender = (state) =>
  state.moviesReducer.movieToShowDescription;

export const getMovieToRender = createSelector(
  getDefaultMovies,
  getMovieIdToRender,
  (movies, movieIdToRender) => {
    const [movie] = movies?.filter((movie) => movie.id === movieIdToRender);

    return movie;
  }
);

export const getActors = (state) => state.moviesReducer.actors;
const getIsSortedFromHighestLikes = (state) =>
  state.moviesReducer.sortedFromHighestLikes;
const getIsSortedFromHighestStars = (state) =>
  state.moviesReducer.sortedFromHighestStars;
const getSortedBy = (state) => state.moviesReducer.sortedBy;
const getSearchParams = (state) => state.moviesReducer.searchBy;

const getMoviesSortedByLikes = createSelector(
  getIsSortedFromHighestLikes,
  getDefaultMovies,
  getSortedBy,
  (isSorted, movies, howToSort) => {
    if (howToSort === SORT_BY_LIKES) {
      return [...movies].sort((a, b) =>
        isSorted ? b.likes - a.likes : a.likes - b.likes
      );
    }
  }
);

const getMoviesSortedByStars = createSelector(
  getIsSortedFromHighestStars,
  getDefaultMovies,
  getSortedBy,
  (isSorted, movies, howToSort) => {
    if (howToSort === SORT_BY_STARS) {
      return [...movies].sort((a, b) =>
        isSorted ? b.stars - a.stars : a.stars - b.stars
      );
    }
  }
);

export const getMovies = createSelector(
  getSortedBy,
  getDefaultMovies2,
  getMoviesSortedByLikes,
  getMoviesSortedByStars,
  getSearchParams,
  (howToSort, defaultMovies, sortedByLikes, sortedByStars, searchParams) => {
    if (howToSort === "" || howToSort === RESET_SORTING) {
      if (searchParams === "") {
        return defaultMovies;
      } else {
        return filterArr(defaultMovies, searchParams);
      }
    } else if (howToSort === SORT_BY_STARS) {
      if (searchParams === "") {
        return sortedByStars;
      } else {
        return filterArr(sortedByStars, searchParams);
      }
    } else if (howToSort === SORT_BY_LIKES) {
      if (sortedByLikes === "") {
        return sortedByLikes;
      } else {
        return filterArr(sortedByLikes, searchParams);
      }
    }
  }
);
