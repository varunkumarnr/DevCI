import React, { useState } from "react";
import "../Styles/Visualizer.css";
import Bg from "../images/visuliser-bg.svg";
import { StackButton } from "../components/StackOverflow/StackButton";
export const Visulizer = () => {
  // const [python, setPython] = useState("");
  const [links, setLinks] = useState("");
  const temp = 'print("hello world")';
  const [code, setCode] = useState(temp);
  const [lang, setLang] = useState("python");

  const editFrame = (data) => {
    var link = data.link;
    document.getElementById("codeEx").remove();
    var main = document.getElementById("mainCode");
    main.innerHTML += `<iframe id="codeEx" class="codeEx" width="900" height="300" frameborder="0" src=${link}></iframe>`;
    // console.log(link);
    setLinks(link);
    var c = document.getElementById("codeEx");
    if (c.className.includes("active")) {
      return;
    } else {
      c.className = c.className + " active";
    }
  };
  const fetchData = () => {
    let value = code;
    value = value.split("\n");
    value = value.join("<br>");
    var dataForm = new FormData();
    dataForm.append("code", value);
    console.log(dataForm);
    fetch(`https://vealizeapi.root.sx/code/python`, {
      method: "post",
      // mode: "cors",
      body: dataForm,
    })
      .then((e) => e.json())
      .then((data) => editFrame(data));
  };
  const onChangeHandler = (e) => {
    setCode(e.target.value);
  };
  // useEffect(() => {
  //   onChangeHandler();
  // }, []);
  return (
    <div id='main' className='main'>
      <StackButton />
      <div className='mainTitle'>
        <h1>Code Execution Visualizer</h1>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6'>
          <div className='mainCode' id='mainCode'>
            <label id='langLabel'>Choose a Language:</label>
            <select name='langs' id='langs' className='langs'>
              <option value='python'>Python</option>
              <option value='javascript'>Javascript</option>
              <option value='c'>C</option>
              <option value='c++'>C++</option>
            </select>
            <textarea
              wrap='off'
              id='editor'
              placeholder='default hello world'
              onChange={onChangeHandler}
            ></textarea>
            <button
              onClick={() => {
                fetchData();
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6'>
          <img className='vimage img-fluid' src={Bg} alt=''></img>
        </div>
      </div>
      {/* <p onChange={setLinks}>{links}</p> */}
      <iframe
        title=' '
        id='codeEx'
        className='codeEx'
        width='900'
        height='300'
        frameBorder='0'
      ></iframe>
    </div>
  );
};
