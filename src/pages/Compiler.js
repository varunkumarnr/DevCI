import React, { useState, useEffect } from "react";
import { CodeCompiler } from "../components/Compiler/CodeCompiler";
import useLocalStorage from "../components/hooks/useLocalStorage";
import "../Styles/Compiler.css";
import {
  PYCODE,
  CPPCODE,
  RBCODE,
  LUACODE,
  JSCODE,
} from "../components/Compiler/temp";

export const Compiler = () => {
  const arr = [
    "cpython-head",
    "nodejs-head",
    "gcc-head",
    "ruby-head",
    "lua-5.4.0",
  ];
  const languages = ["python", "java script", "c++", "ruby", "lua"];
  const temp = [PYCODE, JSCODE, CPPCODE, RBCODE, LUACODE];
  const [tempcode, setTempCode] = useState(PYCODE);
  const [langauge, setLanguage] = useState("cpython-head");
  const [python, setPython] = useLocalStorage("PYCODE", "");
  const [id, setid] = useState("python");

  const lang = arr.map((lang) => lang);
  const handleAddrTypeChange = (e) => {
    setLanguage(lang[e.target.value]);
    setid(languages[e.target.value]);
    setTempCode(temp[e.target.value]);
    console.log(tempcode);
  };
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
    const timeOut = setTimeout(() => {}, 250);
    return () => clearTimeout(timeOut);
  });
  return (
    <div className='row container-fluid compiler'>
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <div className='top-panel'>
          <CodeCompiler
            langauge='python'
            displayName='python'
            value={python === "" ? tempcode : python}
            onChange={setPython}
          />
        </div>
      </div>
      <div className=' col-xs-12 col-sm-12 col-md-6'>
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
        <select
          onChange={(e) => handleAddrTypeChange(e)}
          className='custom-select'
        >
          {lang.map((address, key) => (
            <option id='key' key={key} value={key}>
              {address}
            </option>
          ))}
        </select>
        <p>Language : {id}</p>
        <br></br>
        <strong>Standard Output</strong>
        <div id='msg-con' className='container'>
          <code id='msg'></code>
        </div>
      </div>
    </div>
  );
};
