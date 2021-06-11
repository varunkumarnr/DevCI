import React from "react";

export const Filter = ({ all, active, done }) => {
  return (
    <div className='todo-display'>
      <button onClick={all}>All</button>
      <button onClick={active}>Active</button>
      <button onClick={done}>Completed</button>
    </div>
  );
};
