const initialState = { /* not exported */
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) { // reducer 
    switch (action.type) { // support multiple actions
      case 'ADD_TODO': {
          // allIds push, byIds push 
        const { id, content } = action.payload;
        return {
          ...state, // updates object
          allIds: [...state.allIds, id], // add item to end 
          byIds: {
            ...state.byIds,
            [id]: { // what's this - square brackets allows us to evaluate the variable key 
              content,
              completed: false
            }
          }
        };
      }
      case 'TOGGLE_TODO': {
        const { id } = action.payload;
        return {
          ...state,
          byIds: { // only need to modify byIds
            ...state.byIds,
            [id]: {
              ...state.byIds[id],
              completed: !state.byIds[id].completed // toggle completed
            }
          }
        };
      }
      default:
        return state;
    }
  }