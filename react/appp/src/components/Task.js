import React from "react";

function Task(props) {
  return (
    <div className="caja_lista">
      <h3 className="tarea_lista">{props.value}</h3>
      <button
        onClick={() => {props.handleDelete(props.id)}}
        className="boton"
      >
      X
      </button>
    </div>
  );
}

export default Task;
