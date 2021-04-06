const initialState = "All"; // doesn't have to be a dict

export const visibilityFilter = function(state = initialState, action) {
  // reducer
  switch (
    action.type // support multiple actions
  ) {
    case "SET_FILTER": {
        console.log('here', action.payload.filterName)
      // allIds push, byIds push
      return action.payload.filterName;
    }
    default:
      return state;
  }
}
