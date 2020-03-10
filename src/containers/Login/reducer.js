import {USER_LOG_OUT, USER_LOGIN, USER_REGISTER} from "./types";
const initialState = {
  user: null
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case USER_LOGIN:
      return {
        ...state,
        user: payload
      };

      case USER_REGISTER:
      return {
        ...state,
      };

    case USER_LOG_OUT: {
      return {
        ...state,
        user: null,
      }
    }
  }
};