import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Item = ({ id, todos, completed, removeTodo, markComp }) => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        className='todoCheck'
        checked={completed}
        onChange={() => markComp(id)}
      />
      <div className='todolist'>{todos}</div>
      <div className='bin-button' onClick={() => removeTodo(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
