import { combineReducers } from "redux";
import { moviesReducer } from '../containers/App/reducer';
import { loginReducer } from "../containers/Login/reducer";
import {addNewMovieReducer} from "../containers/AddNewMovieContainer/reducer";

export const rootReducer = combineReducers({
   moviesReducer,
   loginReducer,
   addNewMovieReducer,
});