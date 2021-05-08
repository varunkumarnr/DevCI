import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Write(props) {
  return (
    <div className='eraser'>
      <FontAwesomeIcon
        title='reset'
        icon={faPen}
        className='fa-icon'
        onClick={() => props.startWrite()}
      />
    </div>
  );
}

export default Write;
