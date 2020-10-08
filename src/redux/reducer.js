import { CREATE_ANALYZER, SET_CONTEXT } from "./types";

const initialState = {
  context: null,
  analyzer: null,
  src: null,
}

export function reduser(state = initialState, action) {
  switch (action.type) {
    case SET_CONTEXT:
      return { ...state, context: action.payload }
    case CREATE_ANALYZER:
      return { ...state, analyzer: action.payload }
    default:
      return state;
  }
}
