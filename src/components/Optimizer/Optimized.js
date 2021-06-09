import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material.css";
import { Controlled as ControlledEditor } from "react-codemirror2";
export const Optimized = ({ value }) => {
  return (
    <div>
      <ControlledEditor
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          // scrollbarStyle: "overlay",
          theme: "material",
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};
