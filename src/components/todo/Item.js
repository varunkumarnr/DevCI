import React from "react";

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
      <div className='button' onClick={() => removeTodo(id)}>
        X
      </div>
    </div>
  );
};
