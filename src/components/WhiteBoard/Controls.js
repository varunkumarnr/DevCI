import React from "react";
import { Color } from "./Color";
import { Eraser } from "./Eraser";
import Write from "./Write";
import Reset from "./Reset";
export const Controls = (props) => {
  return (
    <div className='controls'>
      <Color handleColor={props.handleColor} />
      <Write startWrite={props.startWrite} />
      <Eraser handleColor={props.handleColor} />
      <Reset resetPage={props.resetPage} />
    </div>
  );
};
