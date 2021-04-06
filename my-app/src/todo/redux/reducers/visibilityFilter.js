const initialState = "ALL"; // doesn't have to be a dict

export const visibilityFilter = function(state = initialState, action) {
  // reducer
  switch (
    action.type // support multiple actions
  ) {
    case "SET_FILTER": {
      // allIds push, byIds push
      return action.payload.filter;
    }
    default:
      return state;
  }
}
