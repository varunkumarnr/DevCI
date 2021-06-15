import React from "react";
export const Filter = ({ all, active, done }) => {
  return (
    <div className='todo-display'>
      <button className='todoBtn active' id='All' onClick={all}>
        All
      </button>
      <button className='todoBtn' id='Active' onClick={active}>
        Active
      </button>
      <button className='todoBtn' id='Completed' onClick={done}>
        Completed
      </button>
    </div>
  );
};
