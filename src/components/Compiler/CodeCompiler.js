import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/python/python";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";
import "codemirror/mode/lua/lua";
import "codemirror/mode/ruby/ruby";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/selection/active-line";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/material.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/base16-light.css";
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/fold/foldcode");
require("codemirror/addon/fold/foldgutter");
require("codemirror/addon/fold/foldgutter.css");
require("codemirror/addon/fold/brace-fold");
require("codemirror/addon/fold/comment-fold");
require("codemirror/addon/fold/indent-fold");
export const CodeCompiler = ({ displayName, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  // const dispalynameChange = (displayName) => {
  //   onChange(displayName);
  // };
  return (
    <div>
      <div className='editor-title'>CODE HERE</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        id='source'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          scrollbarStyle: "overlay",
          theme: "monokai",
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};
