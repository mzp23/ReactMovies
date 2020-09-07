import { combineReducers } from "redux";
import { moviesReducer } from "../containers/App/reducer";
import { loginReducer } from "../containers/Login/reducer";
import { languageReducer } from "../containers/LanguageToggler/reducer";
import { addNewMovieReducer } from "../containers/AddNewMovieContainer/reducer";
import { reducer as formReducer } from "redux-form";
export const rootReducer = combineReducers({
  moviesReducer,
  loginReducer,
  addNewMovieReducer,
  languageReducer,
  form: formReducer
});
