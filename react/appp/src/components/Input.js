import React from "react";

function Input(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
      value={props.value}
      onChange={props.handleTaskChange}
      className="caja"
      type="text"
      />
    </form>
  );
}

export default Input;
