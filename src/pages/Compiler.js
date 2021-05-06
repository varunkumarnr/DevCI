import React from "react";
import { CodeCompiler } from "../components/Compiler/CodeCompiler";
import useLocalStorage from "../components/hooks/useLocalStorage";

export const Compiler = () => {
  //   const [langauge, setLanguage] = useState("cpython-head");
  const [python, setPython] = useLocalStorage("PYCODE", "");
  //   const [srcDoc, setSrcDoc] = useState("");
  const fetchData = async (code, lang) => {
    var msg, newData, req;
    req = await fetch(
      `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(
        python
      )}&lang=${encodeURIComponent(lang)}`
    );
    newData = await req.json();

    msg = newData.program_message || newData.compiler_message || "";
    console.log(msg);
    document.getElementById("msg").innerHTML = msg
      .replaceAll("\n", "<br>")
      .replaceAll(" ", "&nbsp");
    // document.getElementById("runbtn").innerHTML = "Run";
    return (document.getElementById("runbtn").classList = "btn btn-success");
  };
  const Submit = () => {
    // if (document.getElementById("runbtn").innerHTML != null) {
    //   document.getElementById("runbtn").innerHTML = "Compiling...";
    // document.getElementById("runbtn").classList = "btn btn-info";
    fetchData(python, "cpython-head");
  };

  //   useEffect(() => {
  //     const timeOut = setTimeout(() => {}, 250);
  //     return () => clearTimeout(timeOut);
  //   }, []);
  return (
    <div className='top-panel'>
      <CodeCompiler
        langauge='python'
        displayName='Pyhton'
        value={python}
        onChange={setPython}
      />
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

      <strong>Standard Output</strong>
      <div
        id='msg-con'
        className='container'
        // style="
        //   border-style: dashed;
        //   border-color: var(--success);
        //   margin-top: 10px;
        //   margin-bottom: 20px;
        //   overflow: scroll;
        // "
      >
        <code id='msg'></code>
      </div>
    </div>
  );
};
