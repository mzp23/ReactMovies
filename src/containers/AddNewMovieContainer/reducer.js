import {ADD_NEW_MOVIE} from "./types";
const initialState = {};

export const addNewMovieReducer = (state = initialState, action) => {
  const { type} = action;
  switch (type) {
    default:
      return state;
    case ADD_NEW_MOVIE:
      return {
        ...state
      };
  }
};