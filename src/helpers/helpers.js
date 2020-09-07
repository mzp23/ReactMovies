export const findMovieIndex = (movieId,state) => {
    return [
        state.moviesToRender.findIndex(el => el.id === movieId),
        state.defaultMovies.findIndex(el => el.id === movieId)
    ]
};

export const updateElement = (array, index, property) => {
    return [
        ...array.slice(0, index),
        {...array[index], ...property},
        ...array.slice(index + 1)
    ]
};

export const removeElement = (array, index) => {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ]
};

export const sortArr = (a, b, isSortedByHighest) => isSortedByHighest ? a - b : b - a;
