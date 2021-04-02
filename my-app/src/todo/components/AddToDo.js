
import "./AddToDo.css";
import React from "react";

function handleClick() {
  console.log('add')
}

function AddToDo() {
    return (
      <div className="addTodoRoot">
        <button className="addTodo-button" onClick={() => { handleClick() }}>
            Add Todo
        </button>
      </div>
    );
  }
  
  export default AddToDo;