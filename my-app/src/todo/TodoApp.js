import React from "react";
import "./Todo.css";
import AddToDo from "./components/AddToDo"
import ToDo from "./components/Todo"
import VisibilityFilters from "./components/VisibilityFilters"

/* this is a functional component used in index.js */
function TodoApp() {
  return (
    <div className="TodoAppRoot">
      <header>This is my todo app</header>
      <ToDo/>
      <AddToDo/>
      <VisibilityFilters/>
    </div>
  );
}

export default TodoApp;
