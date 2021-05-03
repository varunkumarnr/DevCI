import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h3>
        welcome to <b>DevCI</b>
      </h3>
      <p>
        the web application is still work in progress you can still check out
        the tools below
      </p>
      <Link to='./editor'>Editor</Link>
    </div>
  );
};
