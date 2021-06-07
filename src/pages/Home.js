import React from "react";
import { Link } from "react-router-dom";
import { HomeComp } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Features } from "../components/Features/Features";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
export const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <h3>
        welcome to <b>DevCI</b>
      </h3>
      <p>
        the web application is still work in progress you can still check out
        the tools below
      </p>
      <Link to='./editor'>Editor</Link> <br></br>
      <Link to='./compiler'>Compiler</Link>
      <br></br>
      <Link to='./board'>White Board</Link>
      <br></br>
      <Link to='./optimizer'>Optimizer</Link> */}
      <HomeComp />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};
