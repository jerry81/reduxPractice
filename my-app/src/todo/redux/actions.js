let nextTodoId = 0;

export const addToDo = content => ({
  type: "ADD_TODO",
  payload: {
    content,
    id: ++nextTodoId,
    status: 'Unfinished'
  }
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: { id }
});

export const setFilter = filterName => ({
    type: "SET_FILTER",
    payload: { filterName }
})