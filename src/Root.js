import React from "react";
import App from "./App";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import ResetPassword from "./views/ResetPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Root() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/home">
            <App />
          </Route>
          <Route path="/singup">
            <SingUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
