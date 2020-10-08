const { SET_CONTEXT, CREATE_ANALYZER } = require("./types");

export function setContext (context) {
  return {
    type: SET_CONTEXT,
    payload: context
  }
}

export function createAnalyzer (analyzer) {
  return {
    type: CREATE_ANALYZER,
    payload: analyzer
  }
}
