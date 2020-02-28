import {
    HANDLE_LIKE, HANDLE_SEARCH,
    HANDLE_STARS,
    LOAD_MOVIES,
    RESET_SORTING, SORT_BY_STARS,
    TOGGLE_SORT_BY_LIKES,
    TOGGLE_SORT_BY_STARS, HANDLE_TITLE
} from "./types";

const initialState = {
    defaultMovies: null,
    moviesToRender: null,
    movieToShowDescription: null,
    sortedByLikes: false,
    sortedByStars: false,
    resetSort: false,
    isLoaded: false,
};

export const moviesReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default:
            return state;

        case LOAD_MOVIES :
            return {
                ...state,
                isLoaded: true,
                defaultMovies: payload.defaultMovies,
                moviesToRender: payload.moviesToRender
            };

        case TOGGLE_SORT_BY_LIKES:
            return {
                ...state,
                sortedByLikes: payload.sortedByLikes,
                moviesToRender: payload.moviesToRender
            };

        case TOGGLE_SORT_BY_STARS:
            return {
                ...state,
                sortedByStars:  payload.sortedByStars,
                moviesToRender: payload.moviesToRender
            };

        case SORT_BY_STARS:
            return {
                ...state,
                moviesToRender: payload
            };

        case RESET_SORTING:
            return {
                ...state,
                moviesToRender: payload.moviesToRender
            };

        case HANDLE_STARS:
            return {
                ...state,
                moviesToRender: payload.moviesToRender,
                defaultMovies: payload.defaultMovies,
            };

        case HANDLE_LIKE:
            return {
                ...state,
                moviesToRender: payload.moviesToRender,
                defaultMovies: payload.defaultMovies,
            };

        case HANDLE_SEARCH:
            return {
                ...state,
                moviesToRender: payload.moviesToRender,
            };

        case HANDLE_TITLE:
            return {
                ...state,
                movieToShowDescription: payload.movieToShowDescription,
            };

    }
};