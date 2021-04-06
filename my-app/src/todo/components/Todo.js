import "./Todo.css";
import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";

function ToDo(props) {
  const todo = props.todos.map((item, index) => <li key={index}>{item.content}</li>);
  return <div className="ToDoRoot">{todo}</div>;
}

export default connect(store => ({ todos: getTodos(store) } /* mapStateToProps */))(ToDo);
