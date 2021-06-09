import { useEffect, useState } from "react";
import Compiler from "../components/codecompiler/Compiler";
import useLocalStorage from "../components/hooks/useLocalStorage";
import "../Styles/editor.css";
function Editor() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <html>
         <body>${html}<body>
         <style>${css}</style>
         <script>${js}</script>
      </html>
      `);
    }, 250);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);
  return (
    <>
      <div className='top-panel panel'>
        <Compiler
          language='xml'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Compiler
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Compiler
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='panel'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          frameBorder='0'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default Editor;
