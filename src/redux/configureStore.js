import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";
import {callApi} from "../helpers/call-api";
let devTools = f => f;

const enableReduxDevtools = process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__;

if (enableReduxDevtools) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument(callApi)),
        devTools
    )
);