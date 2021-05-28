import React, { useEffect, useState } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { minify } from "terser";
import { Optimizer } from "../components/Optimizer/Optimizer";
export const OptimizerPage = () => {
  const [code, setCode] = useLocalStorage("OPTCODE", "");
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
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <div className='top-panel'>
          <Optimizer
            langauge='javaScript'
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
    </div>
  );
};
