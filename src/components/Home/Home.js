import React from "react";
import "./Home.css";
export const HomeComp = () => {
  return (
    <div id='content home' className='content'>
      <h1 id='homepagetitle'>
        DEV<span id='homepagetitlesub'>CI</span>
      </h1>
      <p>All Your Developer Needs At One Place</p>
      <p id='stuff'>No Login get in start coding</p>
      <button>Get Started</button>
    </div>
  );
};
