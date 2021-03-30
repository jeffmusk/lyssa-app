import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useCurrentUser } from "../context/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component
            {...props}
            user={useCurrentUser}
            fecth={fetchCurrentUser}
          />
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
