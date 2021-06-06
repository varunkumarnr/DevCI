import React, { useEffect, useState } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { minify } from "terser";
import { Optimizer } from "../components/Optimizer/Optimizer";
import "../components/Optimizer/Optimizer.css";
import { Optimized } from "../components/Optimizer/Optimized";
export const OptimizerPage = () => {
  const [code, setCode] = useLocalStorage("OPTCODE", "");
  const [optimizedCode, setOptimizedCode] = useState("");
  // const [temp, setTemp] = useState("");
  const OptimizerCode = async () => {
    if (code === "") {
      setCode(
        `
      function greet(name) {
        console.log("Hello, " + name + "!");
      }
      greet("wo" + 'r' + "ld")
      `.trim() + "\n"
      );
      console.log(code, "empty");
    } else {
      var result = await minify(code);
      if (result.error !== undefined) {
        console.log(result.error, "this");
      } else {
        console.log(result.code);
        setOptimizedCode(result.code);
      }
    }
    document.getElementById("runbtn").innerHTML = "Optimize";
  };
  const Submit = () => {
    const i = document.getElementById("runbtn");
    i.innerHTML = "optimizing...";
    OptimizerCode();
  };
  return (
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-6 code-ide'>
        <div className='top-panel'>
          <div className='editor-title'>CODE HERE</div>
          <Optimizer
            langauge='javascript'
            displayName='Optimzer'
            value={
              code === ""
                ? `
        function greet(name) {
          console.log("Hello, " + name + "!");
        }
        greet("wo" + 'r' + "ld")
        `.trim() + "\n"
                : code
            }
            onChange={setCode}
          />
        </div>
        <button
          id='runbtn'
          className='btn btn-success'
          type='button'
          onClick={() => {
            Submit();
          }}
        >
          Optimize
        </button>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <div className='top-panel'>
          <div className='editor-title'>Optimized code</div>
          <Optimized value={optimizedCode} />
        </div>
      </div>
    </div>
  );
};
