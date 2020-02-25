import {LOAD_MOVIES} from "./types";

const initialState = {
    defaultMovies: null,
    moviesToRender: null,
};

export const appReducer = (state = initialState, action) => {
        if (action.type === LOAD_MOVIES) {
            return {...state,
                defaultMovies: action.payload,
                moviesToRender: action.payload
                   }
        }
    return state;
};