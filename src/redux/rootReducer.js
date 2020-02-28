import { combineReducers } from "redux";
import { moviesReducer } from '../containers/App/reducer';

export const rootReducer = combineReducers({
   appReducer: moviesReducer
});