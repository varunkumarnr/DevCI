import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <h1>DevCI</h1>
        <ul>
          <li>
            <a className='h active' id='homeNav' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='h' id='AboutNav' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='h' id='FeaturesNav' href='#'>
              Features
            </a>
          </li>
          <li>
            <a className='h' id='ContactNav' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
