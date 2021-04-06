import "./Todo.css";
import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";
import { toggleTodo } from '../redux/actions'

function ToDo(props) {
  const { todos, toggleTodo } = props
  const handleChecked = (id) => {
    toggleTodo(id)
  }
  const todo = todos.map((item, index) => (
    <li key={index}>
      {item.content}
      <input type="checkbox" checked={item.completed || false} onChange={_ => { handleChecked(item.id) }} />
    </li>
  ));
  return <div className="ToDoRoot">{todo}</div>;
}

export default connect(store => ({
  todos: getTodos(store)
}), { toggleTodo } /* mapStateToProps */)(ToDo);
