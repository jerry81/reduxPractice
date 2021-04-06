export const getTodosState = store => store.todo;

export const getTodoList = store => {
    return getTodosState(store).allIds
}

export const getTodoById = (store, id) => {
    return getTodosState(store).byIds[id]
}

export const getTodos = (store) => {
    return Object.values(getTodosState(store).byIds)
}

export const getTodosByVisibilityFilter = (store, filter) => {
    return getTodos(store).filter(item => {
        return item.status === filter
    })
}