
import "./Todo.css";
import React from "react";

const todoData = ['item1', 'item 2']
const todo = todoData.map((item, index) => <li key={index}>{item}</li>)

function ToDo() {
    return (
      <div className="ToDoRoot">
        {todo}
      </div>
    );
  }
  
  export default ToDo;