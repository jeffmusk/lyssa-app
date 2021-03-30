import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

import { useCurrentUser } from "../context/AuthContext";

export const PublicRoute = ({ component: Component, path, ...rest }) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} user={useCurrentUser} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
