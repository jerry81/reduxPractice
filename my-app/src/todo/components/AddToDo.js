import "./AddToDo.css";
import React, { useState } from "react";
import { connect } from "react-redux"; // connect api
import { addToDo } from "../redux/actions";

// state

function AddToDo(props) {
  const [input, setInput] = useState("");

  function handleClick() {
    props.addToDo(input)
  }

  console.log("props is ", props);
  return (
    <div className="addTodoRoot">
      <input
        onChange={e => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        className="addTodo-button"
        onClick={() => {
          handleClick();
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default connect(
  null, // map state to prop
  { addToDo } // map action to props - pass in action creators
)(AddToDo);
