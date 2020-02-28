import {
  HANDLE_LIKE, HANDLE_SEARCH,
  HANDLE_STARS, HANDLE_TITLE,
  LOAD_MOVIES,
  RESET_SORTING,
  TOGGLE_SORT_BY_LIKES,
  TOGGLE_SORT_BY_STARS
} from './types';

export const loadMovies = (payload) => ({
  type: LOAD_MOVIES,
  payload,
});

export const toggleSortByLikes = (payload) => ({
  type: TOGGLE_SORT_BY_LIKES,
  payload
});

export const toggleSortByLStars = (payload) => ({
  type: TOGGLE_SORT_BY_STARS,
  payload
});

export const resetSorting = (payload) => ({
  type: RESET_SORTING,
  payload
});


export const handleStars = (payload) => ({
  type: HANDLE_STARS,
  payload
});

export const handleLike = (payload) => ({
  type: HANDLE_LIKE,
  payload
});

export const handleSearch = (payload) => ({
  type: HANDLE_SEARCH,
  payload
});

export const handleTitleToProps = (payload) => ({
  type: HANDLE_TITLE,
  payload
});

