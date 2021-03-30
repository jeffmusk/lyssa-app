import React, { useState, useEffect } from "react";
import { myFirebase } from "../firebase";

import Loading from "../components/Loading";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    await myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(false);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = fetchCurrentUser();
    return unsubscribe;
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, fetchCurrentUser, loading }}
    >
      {loading ? <Loading /> : children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
