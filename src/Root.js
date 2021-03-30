import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Home from "./views/Home";
import ResetPassword from "./views/ResetPassword";
import { PrivateRoute } from "./hoc/PrivateRoute";

export default function Root() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/singup">
            <SingUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>

          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
