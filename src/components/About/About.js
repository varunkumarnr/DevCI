import React from "react";
import "./About.css";
import AboutImg from "../../images/about-bg.svg";
export const About = () => {
  return (
    <div id='about' className='about'>
      <h1 id='aboutTitle' className='aboutTitle'>
        About <span>Us</span>
      </h1>
      <div className='aboutDoc row'>
        <div className='col-xs-12 col-sm-12 col-md-6'>
          <p>
            <strong>DevCI</strong> is free-to-use open source platform for
            everyone. <br></br> At DevCI we provide all the tools necessary for
            a developer during the process of developing projects, competative
            programming, planning, prototying, etc.
          </p>
          <h3>
            Like DevCI? star the project{" "}
            <span>
              <a
                className='aboutLink'
                href='https://github.com/varunkumarnr/DevCI'
              >
                Github
              </a>
            </span>
          </h3>
        </div>

        <img
          className='aboutImg img-fluid col-xs-12 col-sm-12 col-md-6'
          src={AboutImg}
          alt='About'
        />
      </div>
    </div>
  );
};
