import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import Todo from "../todo/todo";
import About from "../about/about";

export default (props) => (
  <HashRouter>
    <Switch>
      <Route path="/todos">
        <Todo />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Todo />
      </Route>
    </Switch>
  </HashRouter>
);
