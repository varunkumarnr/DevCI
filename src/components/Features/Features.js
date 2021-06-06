import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";
export const Features = () => {
  return (
    <div id='features' className='features'>
      <div className='featureTitle'>
        <h1>
          What do we Provide <span>?</span>
        </h1>
      </div>
      <div className='featureCardWrapper'>
        <div className='featureCard'>
          <h2>Editor</h2>
          <p>A Simple HTML ,CSS ,JavaScript online Customizable editor.</p>
          <button>
            <Link to='./editor'>Take me there</Link>
          </button>
        </div>
        <div className='featureCard only-pc'>
          <h2>Compiler</h2>
          <p>
            A MultiLanguage online Compiler. That supports
            Python,JavaScript,lua,C++,etc
          </p>
          <button>
            <Link to='./compiler'>Take me there</Link>
          </button>
        </div>
        <div className='featureCard only-pc'>
          <h2>Optimizer</h2>
          <p>
            A JavaScript code optimizer that optimizes because speed plays a
            major role.
          </p>
          <button>
            <Link to='./optimizer'>Take me there</Link>
          </button>
        </div>
        <div className='featureCard only-pc'>
          <h2>White board</h2>
          <p>A white board for old "pen paper" style solving a problem</p>
          <button>
            <Link to='./board'>Take me there</Link>
          </button>
        </div>
        <div className='featureCard only-pc'>
          <h2>Github Visulizer</h2>
          <p>Visulize your github repositories</p>
          <button>
            <Link to='./board'>Take me there</Link>
          </button>
        </div>
        {/* <div className='featureCard only-pc'>
          <h2>Todo list</h2>
          <p>Plan ahead!! with DevCI todo List</p>
          <button>
            <Link to='./board'>Take me there</Link>
          </button>
        </div> */}
        <div className='featureCard read-more '>
          <h2>See all Tools</h2>
          <p>Check all the DEVCI developer tools</p>
          <button>
            <Link to='./optimizer'>Take me there</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
