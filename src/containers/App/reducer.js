import {
  HANDLE_LIKE,
  HANDLE_SEARCH,
  HANDLE_STARS,
  RESET_SORTING,
  SORT_BY_STARS,
  TOGGLE_SORT_BY_LIKES,
  TOGGLE_SORT_BY_STARS,
  HANDLE_TITLE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  MOVIES_LOADED,
  MOVIES_LOADING_START,
  MOVIES_LOADING_FAIL,
  ACTORS_LOADED,
  ACTORS_LOADING_START,
  ACTORS_LOADING_FAIL,
  DELETE_MOVIE_BY_ID,
  LOAD_MOVIE_BY_ID,
  EDIT_MOVIE_INFO,
} from "./types";

const initialState = {
  defaultMovies: null,
  moviesToRender: null,
  actors: null,
  movieToShowDescription: null,
  movieToRender: null,
  sortedByLikes: false,
  sortedByStars: false,
  resetSort: false,
  isLoaded: false,
  editMovieInfo: {},
};

export const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const defaultMovies = payload?.defaultMovies;
  const moviesToRender = payload?.moviesToRender;

  switch (type) {
    default:
      return state;

    case MOVIES_LOADED:
      return {
        ...state,
        loading: false,
        defaultMovies: payload,
        moviesToRender: payload,
      };

    case LOAD_MOVIE_BY_ID:
      return {
        ...state,
        movieToRender: payload,
      };

    case MOVIES_LOADING_START:
      return {
        ...state,
        loading: true,
      };

    case MOVIES_LOADING_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case ACTORS_LOADED:
      return {
        ...state,
        loading: false,
        actors: payload,
      };

    case ACTORS_LOADING_START:
      return {
        ...state,
        loading: true,
      };

    case ACTORS_LOADING_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case TOGGLE_SORT_BY_LIKES:
      return {
        ...state,
        sortedByLikes: payload.sortedByLikes,
        moviesToRender,
      };

    case TOGGLE_SORT_BY_STARS:
      return {
        ...state,
        sortedByStars: payload.sortedByStars,
        moviesToRender,
      };

    case SORT_BY_STARS:
      return {
        ...state,
        moviesToRender: payload,
      };

    case RESET_SORTING:
      return {
        ...state,
        moviesToRender,
      };

    case HANDLE_STARS:
      return {
        ...state,
        moviesToRender,
        defaultMovies,
      };

    case HANDLE_LIKE:
      return {
        ...state,
        moviesToRender,
        defaultMovies,
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        moviesToRender,
      };

    case HANDLE_TITLE:
      return {
        ...state,
        movieToShowDescription: payload.movieToShowDescription,
      };

    case DELETE_MOVIE: {
      return {
        ...state,
        moviesToRender,
        defaultMovies,
      };
    }

    case EDIT_MOVIE: {
      return {
        ...state,
        moviesToRender,
        defaultMovies,
      };
    }

    case EDIT_MOVIE_INFO: {
      return {
        ...state,
        editMovieInfo: payload,
      };
    }

    case DELETE_MOVIE_BY_ID: {
      return {
        ...state,
        moviesToRender,
        defaultMovies,
      };
    }
  }
};
