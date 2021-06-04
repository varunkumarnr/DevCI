import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material.css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export const Optimizer = ({ displayName, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};
