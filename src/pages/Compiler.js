import React, { useState, useEffect } from "react";
import { CodeCompiler } from "../components/Compiler/CodeCompiler";
import useLocalStorage from "../components/hooks/useLocalStorage";
import "../Styles/Compiler.css";
import { PYCODE } from "../components/Compiler/temp";
export const Compiler = () => {
  const [langauge, setLanguage] = useState("cpython-head");
  const [python, setPython] = useLocalStorage("PYCODE", "");
  const [lua, setLua] = useLocalStorage("LUACODE", "");
  const [cpp, setCPP] = useLocalStorage("CPP", "");
  const [javascript, setJavaScript] = useLocalStorage("javas");
  const [ruby, setRuby] = useLocalStorage("ruby", "");
  const fetchData = async (code, lang) => {
    var msg, newData, req;
    req = await fetch(
      `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(
        python
      )}&lang=${encodeURIComponent(lang)}`
    );
    newData = await req.json();
    msg =
      newData.program_message ||
      newData.compiler_message ||
      "Press 'Run' to run code!";
    console.log(msg);
    document.getElementById("msg").innerHTML = msg
      .replaceAll("\n", "<br>")
      .replaceAll(" ", "&nbsp");
    document.getElementById("runbtn").innerHTML = "Run";
    return (document.getElementById("runbtn").classList = "btn btn-success");
  };
  const Submit = async (e) => {
    const i = document.getElementById("runbtn");
    i.innerHTML = "compiling...";
    fetchData(python, langauge);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      Submit();
    }, 250);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className='row container-fluid compiler'>
      <div className='col-6'>
        <div className='top-panel'>
          <CodeCompiler
            langauge='python'
            displayName='Python'
            value={python == "" ? PYCODE : python}
            onChange={setPython}
          />
        </div>
      </div>
      <div className='col-6'>
        <button
          id='runbtn'
          className='btn btn-success'
          type='button'
          onClick={() => {
            Submit();
          }}
        >
          Run
        </button>
        <br></br>
        <strong>Standard Output</strong>
        <div id='msg-con' className='container'>
          <code id='msg'></code>
        </div>
      </div>
    </div>
  );
};
