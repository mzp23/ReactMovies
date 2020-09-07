import { SWITCH_TO_ENG, SWITCH_TO_UA } from "./types";

const initialState = {
  language: "en",
};

export const languageReducer = (state = initialState, { type }) => {
  switch (type) {
    case SWITCH_TO_ENG:
      return {
        ...state,
        language: "en",
      };
    case SWITCH_TO_UA:
      return {
        ...state,
        language: "ua",
      };

    default:
      return state;
  }
};
