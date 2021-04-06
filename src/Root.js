import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./views/Login";
import SingUp from "./views/SingUp";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Lists from "./views/Lists";
import Bills from "./views/Bills";

import NewTask from "./views/create/NewTask";
import ResetPassword from "./views/ResetPassword";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { PublicRoute } from "./hoc/PublicRoute";

export default function Root() {
  return (
    <Router>
      <div className="max-w-md">
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

          <Route path="/resetpassword">
            <ResetPassword />
          </Route>

          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/newtask" component={NewTask} />
          <PrivateRoute exact path="/lists" component={Lists} />
          <PrivateRoute exact path="/bills" component={Bills} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
