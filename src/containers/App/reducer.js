import {
  HANDLE_LIKE,
  HANDLE_SEARCH,
  HANDLE_STARS,
  RESET_SORTING,
  SORT_BY_STARS,
  SORT_BY_LIKES,
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
import { findMovieIndex } from "../../helpers/helpers";

const initialState = {
  moviesToRender: [],
  actors: null,
  movieToShowDescription: null,
  movieToRender: null,
  sortedBy: "",
  sortedFromHighestLikes: false,
  sortedFromHighestStars: false,
  resetSort: false,
  isLoaded: false,
  editMovieInfo: {},
  searchBy: ""
};

export const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const moviesToRender = payload?.moviesToRender;

  switch (type) {
    default:
      return state;

    case MOVIES_LOADED:
      return {
        ...state,
        loading: false,
        moviesToRender: payload,
        isLoaded: true,
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
        sortedFromHighestLikes: !state.sortedFromHighestLikes,
        sortedBy: SORT_BY_LIKES,
      };

    case TOGGLE_SORT_BY_STARS:
      return {
        ...state,
        sortedFromHighestStars: !state.sortedFromHighestStars,
        sortedBy: SORT_BY_STARS,
      };

    case RESET_SORTING:
      return {
        ...state,
        sortedFromHighestLikes: false,
        sortedFromHighestStars: false,
        sortedBy: RESET_SORTING,
      };

    case HANDLE_STARS: {
      return {
        ...state,
        moviesToRender: state.moviesToRender.map((item) =>
          item.id === payload.movieId ? { ...item, stars: payload.star } : item
        ),
      };
    }

    case HANDLE_LIKE:
      const moviesToRenderIndex = findMovieIndex(
        payload.movieId,
        state
      );

      return {
        ...state,
        moviesToRender: [
          ...state.moviesToRender.slice(0, moviesToRenderIndex),
          {
            ...state.moviesToRender[moviesToRenderIndex],
            likes: payload.likes,
          },
          ...state.moviesToRender.slice(moviesToRenderIndex + 1),
        ],
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        searchBy: payload,
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
      };
    }

    case EDIT_MOVIE: {
      return {
        ...state,
        moviesToRender,
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
      };
    }
  }
};
