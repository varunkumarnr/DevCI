import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Compiler } from "./pages/Compiler";
import Editor from "./pages/Editor";
import { Home } from "./pages/Home";
import WhilteBoard from "./pages/WhilteBoard";
import { Visulizer } from "./pages/Visulizer";
import { OptimizerPage } from "./pages/OptimizerPage";
import { Todo } from "./components/todo/Todo";
export const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route path='/editor' component={Editor}></Route>
      <Route path='/compiler' component={Compiler}></Route>
      <Route path='/board' component={WhilteBoard}></Route>
      <Route path='/Visulizer' component={Visulizer}></Route>
      <Route path='/optimizer' component={OptimizerPage}></Route>
      <Route path='/todo' component={Todo}></Route>
    </Router>
  );
};
