import React from "react";
import App from "./App";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Root() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/s">
            <App />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <SingUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
