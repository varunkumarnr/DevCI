import React from "react";
import "./navbar.css";
import "../../js/navabar";
export const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <h1>
          Dev<span>CI</span>
        </h1>
        <ul>
          <li>
            <a className='h' id='homeNav' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='h' id='AboutNav' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='h' id='FeaturesNav' href='#features'>
              Features
            </a>
          </li>
          <li>
            <a className='h' id='ContactNav' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
