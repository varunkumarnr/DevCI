import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Editor from "./pages/Editor";
import { Home } from "./pages/Home";
export const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route path='/editor' component={Editor}></Route>
    </Router>
  );
};
