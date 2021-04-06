import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCurrentUser } from "../context/AuthContext";
import NavBarMobile from "../components/NavBarMobile/NavBarMobile";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <div>
            <NavBarMobile currentUser={currentUser} />

            <Component
              {...props}
              user={useCurrentUser}
              fecth={fetchCurrentUser}
            />
          </div>
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
