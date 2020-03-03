import { USER_LOGIN } from "./types";
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
        user: payload.user
      };
  }
};