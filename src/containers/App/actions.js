import {LOAD_MOVIES} from './types';

export const loadMovies = (payload) => ({
  type: LOAD_MOVIES,
  payload,
});