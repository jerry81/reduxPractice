import { combineReducers } from "redux"; // merges the reducers into seperate functions, each manages independent parts of state
import { visibilityFilter } from "./visibilityFilter";
import { todo } from "./todo";

export default combineReducers({ todo, visibilityFilter });

// result is { todos: { todosState }, visibiityFilter: { visibilityFilter State }}
