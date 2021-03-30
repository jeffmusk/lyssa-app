import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Home from "./views/Home";
import ResetPassword from "./views/ResetPassword";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { PublicRoute } from "./hoc/PublicRoute";

export default function Root() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <PublicRoute exact path="/" component={Login} newRoute="/home" />
          <PublicRoute exact path="/login" component={Login} newRoute="/home" />
          <PublicRoute
            exact
            path="/singup"
            component={SingUp}
            newRoute="/home"
          />

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
