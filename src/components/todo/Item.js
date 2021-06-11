import React from "react";

export const Item = ({ id, todos, completed, removeTodo, markComp }) => {
  return (
    <div className='todo-itm'>
      <div className=''>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => markComp(id)}
        />
        <div className='todolist'>{todos}</div>
        <div className='button' onClick={() => removeTodo(id)}>
          X
        </div>
      </div>
    </div>
  );
};
