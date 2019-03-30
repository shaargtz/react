import React, { Fragment } from "react";
import Task from './Task'

function TaskList(props) {
  return (
    <Fragment>
      {props.tasks.map((task, id) =>
        <Task
        value={task}
        id={id}
        handleDelete={props.handleDelete}
        />
      )}
    </Fragment>
  );
}

export default TaskList;
