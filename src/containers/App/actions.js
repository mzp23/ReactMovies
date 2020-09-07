import {
  ACTORS_LOADED,
  ACTORS_LOADING_FAIL,
  ACTORS_LOADING_START,
  DELETE_MOVIE,
  EDIT_MOVIE, EDIT_MOVIE_INFO,
  HANDLE_LIKE,
  HANDLE_SEARCH,
  HANDLE_STARS,
  HANDLE_TITLE, LOAD_MOVIE_BY_ID,
  LOAD_MOVIES,
  MOVIES_LOADED,
  MOVIES_LOADING_FAIL,
  MOVIES_LOADING_START,
  RESET_SORTING,
  TOGGLE_SORT_BY_LIKES,
  TOGGLE_SORT_BY_STARS
} from "./types";

import {findMovieIndex, updateElement} from "../../helpers/helpers";

export const loadMovies = payload => ({
  type: LOAD_MOVIES,
  payload
});

export const toggleSortByLikes = payload => ({
  type: TOGGLE_SORT_BY_LIKES,
  payload
});

export const toggleSortByLStars = payload => ({
  type: TOGGLE_SORT_BY_STARS,
  payload
});

export const resetSorting = payload => ({
  type: RESET_SORTING,
  payload
});

export const handleStars = payload => ({
  type: HANDLE_STARS,
  payload
});

export const handleLike = payload => ({
  type: HANDLE_LIKE,
  payload
});

export const handleSearch = payload => ({
  type: HANDLE_SEARCH,
  payload
});

export const handleTitleToProps = payload => ({
  type: HANDLE_TITLE,
  payload
});

export const handleDeleteMovie = payload => ({
  type: DELETE_MOVIE,
  payload
});

export const handleEditMovie = payload => ({
  type: EDIT_MOVIE,
  payload
});

export const handleEditMovieInfo = payload => ({
  type: EDIT_MOVIE_INFO,
  payload
});

const moviesLoaded = payload => ({
  type: MOVIES_LOADED,
  payload
});

const moviesLoadStart = () => ({
  type: MOVIES_LOADING_START
});

const moviesLoadingFail = payload => ({
  type: MOVIES_LOADING_FAIL,
  payload
});

const actorsLoaded = payload => ({
  type: ACTORS_LOADED,
  payload
});

const actorsLoadStart = () => ({
  type: ACTORS_LOADING_START
});

const actorsLoadingFail = payload => ({
  type: ACTORS_LOADING_FAIL,
  payload
});

const loadMovieById = (payload) => ({
  type: LOAD_MOVIE_BY_ID,
  payload
});

export const fetchMovies = () => async (dispatch, _, api) => {
  dispatch(moviesLoadStart());
  try {
    const { data: movies, status } = await api("movies");
    if (status === 200) {
      dispatch(moviesLoaded(movies));
    }
  } catch (error) {
    dispatch(moviesLoadingFail(error));
  }
};


export const fetchMovieById = (movieId) => async (dispatch, _, api) => {
  try {
    const { data: movie, status } = await api(`movies/${movieId}`);
    if (status === 200) {
      dispatch(loadMovieById(movie));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteMovie = movieId => async (dispatch, _, api) => {

  try {
    const { status } = await api(`movies/${movieId}`, "delete");
    if (status === 200) {
      dispatch(fetchMovies());
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchActors = actorsIds => async (dispatch, _, api) => {
  dispatch(actorsLoadStart());
  try {
    const { data: actors } = await api("actors");
    const actorsToRender = actors.filter(elem => actorsIds.includes(elem.id));
    dispatch(actorsLoaded(actorsToRender));
  } catch (error) {
    dispatch(actorsLoadingFail(error));
  }
};

export const fetchEditMovie = (movieId, updatedMovie) => async (dispatch, getState, api) => {
  try {
        const {moviesReducer} = getState();
        const {moviesToRender, defaultMovies} = moviesReducer;
        const movieToUpdate = moviesToRender.find(el => el.id === movieId);
        const { status } = await api(`movies/${movieId}`, "put", {...movieToUpdate, ...updatedMovie});
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, moviesReducer);
    if (status === 200) {
            dispatch(handleEditMovie({moviesToRender: updateElement(moviesToRender, moviesToRenderIndex,
                  {...movieToUpdate, ...updatedMovie}),
                  defaultMovies: updateElement(defaultMovies,defaultMoviesIndex,
                      {...movieToUpdate, ...updatedMovie})}));
        }
    } catch (error) {
        console.log(error);
    }
};




