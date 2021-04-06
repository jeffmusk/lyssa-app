import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCurrentUser } from "../context/AuthContext";
import HamburgerNav from "../components/NavBarMobile/HamburgerNav";
import NavBarFooter from "../components/NavBarMobile/NavBarFooter";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <React.Fragment>
            <HamburgerNav currentUser={currentUser} />

            <Component
              {...props}
              user={useCurrentUser}
              fecth={fetchCurrentUser}
            />
            <NavBarFooter />
          </React.Fragment>
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
