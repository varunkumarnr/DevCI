import React, { useState, useEffect } from "react";
import "../Styles/Board.css";
import { Controls } from "../components/WhiteBoard/Controls";

function WhiteBoard() {
  const canvasRef = React.useRef(null);
  const parentRef = React.useRef(null);
  const [ctx, setCtx] = useState({});
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [drawing, setDrawing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#000000");
  const [erase, setEraseState] = useState(false);

  useEffect(() => {
    let canv = canvasRef.current;
    canv.width = parentRef.current.offsetWidth;
    canv.height = parentRef.current.offsetHeight;

    let canvCtx = canv.getContext("2d");
    setCtx(canvCtx);
  }, [ctx]);

  function handleMouseDown(e) {
    setDrawing(true);
    let offset = canvasRef.current.getBoundingClientRect();
    setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
    setPosition({
      x: parseInt(e.clientX - offset.left),
      y: parseInt(e.clientY - offset.top),
    });
  }
  function handleMouseUp() {
    setDrawing(false);
  }

  function handleMouseMove(e) {
    let mousex = e.clientX - canvasOffset.x;
    let mousey = e.clientY - canvasOffset.y;
    if (drawing) {
      ctx.strokeStyle = erase ? "#ffffff" : color;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(mousex, mousey);
      ctx.lineWidth = 5;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    }
    setPosition({ x: mousex, y: mousey });
  }

  function handleColor(color) {
    setColor(color);
    setEraseState(false);
  }

  const startWrite = () => {
    setEraseState(false);
  };

  const resetPage = () => {
    let canv = canvasRef.current;
    canv.width = parentRef.current.offsetWidth;
    canv.height = parentRef.current.offsetHeight;
    const context = canv.getContext("2d");
    context.clearRect(0, 0, canv.width, canv.height);
  };

  return (
    <div className='board' ref={parentRef}>
      <Controls
        handleColor={handleColor}
        resetPage={resetPage}
        setEraseState={setEraseState}
        startWrite={startWrite}
      />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseUp}
        onTouchEnd={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}
export default WhiteBoard;
