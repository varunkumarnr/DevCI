import React, { useState, useEffect } from "react";
export const Visulizer = () => {
  const arr = [];
  // const [python, setPython] = useState("");
  const temp = 'print("hello world")';
  const [code, setCode] = useState(temp);

  const editFrame = (data) => {
    var link = data.link;
    document.getElementById("codeEx").remove();
    var main = document.getElementById("mainCode");
    main.innerHTML += `<iframe id="codeEx" class="codeEx" width="900" height="300" frameborder="0" src=${link}></iframe>`;
    console.log(link);
    var c = document.getElementById("codeEx");
    if (c.className.includes("active")) {
      return;
    } else {
      c.className = c.className + " active";
    }
  };
  const fetchData = async () => {
    let value = code;
    value = value.split("\n");
    value = value.join("<br>");
    var dataForm = new FormData();
    dataForm.append("code", value);
    console.log(dataForm);
    fetch(`https://vealizeapi.root.sx/code/python`, {
      method: "post",
      body: dataForm,
    })
      .then((e) => e.json())
      .then((data) => editFrame(data));
  };
  const onChangeHandler = (e) => {
    setCode(e.target.value);
  };
  // useEffect(() => {
  //   console.log(code);
  // }, [code]);
  return (
    <div>
      <div className='mainCode' id='mainCode'>
        <select name='langs' id='langs' className='langs'>
          <option value='python'>Python</option>
          <option value='javascript'>Javascript</option>
          <option value='c'>C</option>
          <option value='c++'>C++</option>
        </select>
        <textarea
          wrap='off'
          id='editor'
          placeholder=''
          onChange={onChangeHandler}
        ></textarea>
        <button
          onClick={() => {
            fetchData();
          }}
        >
          Submit
        </button>
        <iframe
          title=' '
          id='codeEx'
          className='codeEx'
          width='900'
          height='300'
          frameBorder='0'
        ></iframe>
      </div>
    </div>
  );
};
