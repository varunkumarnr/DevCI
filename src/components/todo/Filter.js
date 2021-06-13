import React from "react";

export const Filter = ({ all, active, done }) => {
  return (
    <div className='todo-display'>
      <button className='todoBtn' onClick={all}>
        All
      </button>
      <button className='todoBtn' onClick={active}>
        Active
      </button>
      <button className='todoBtn' onClick={done}>
        Completed
      </button>
    </div>
  );
};
