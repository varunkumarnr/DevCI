import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

function Reset(props) {
  function handleReset(e) {
    e.preventDefault();
    props.resetPage();
  }

  return (
    <div className='eraser'>
      <FontAwesomeIcon
        title='reset'
        icon={faRecycle}
        className='fa-icon'
        onClick={handleReset}
      />
    </div>
  );
}

export default Reset;
