import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

import { useCurrentUser } from "../context/AuthContext";

export const PublicRoute = ({ component: Component, newRoute, ...rest }) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Redirect
            to={{
              pathname: newRoute,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} user={useCurrentUser} />
        )
      }
    />
  );
};
