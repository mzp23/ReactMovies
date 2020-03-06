import {ADD_NEW_MOVIE} from "./types";

export const userLogin = () => ({
   type: ADD_NEW_MOVIE,
});

export const fetchAddNewMovie = (data) => async (dispatch, _, api) => {
   console.log(1);
   console.log(data);
   const id = Math.random() * 1000;
   console.log(id);
   try {
      const movie = {...data, id, actorsIds: [0,4,5], likes: 0, stars: 0};
      await api("movies", 'post', movie);

   } catch (error) {
      console.log(error);
   }
};
